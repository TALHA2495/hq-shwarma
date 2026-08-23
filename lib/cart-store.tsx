"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useReducer,
  useState,
  type ReactNode,
} from "react";
import type { MenuItem } from "./menu-data";

export interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

type Action =
  | { type: "ADD"; item: MenuItem; qty: number }
  | { type: "INCREMENT"; id: string }
  | { type: "DECREMENT"; id: string }
  | { type: "REMOVE"; id: string }
  | { type: "CLEAR" }
  | { type: "HYDRATE"; items: CartItem[] };

function reducer(state: CartItem[], action: Action): CartItem[] {
  switch (action.type) {
    case "HYDRATE":
      return action.items;

    case "ADD": {
      const existing = state.find((i) => i.id === action.item.id);
      // Same product never creates a duplicate row — bump quantity instead.
      if (existing) {
        return state.map((i) =>
          i.id === action.item.id
            ? { ...i, quantity: i.quantity + action.qty }
            : i,
        );
      }
      const { id, name, price, image } = action.item;
      return [...state, { id, name, price, image, quantity: action.qty }];
    }

    case "INCREMENT":
      return state.map((i) =>
        i.id === action.id ? { ...i, quantity: i.quantity + 1 } : i,
      );

    case "DECREMENT":
      // Dropping to zero removes the line entirely.
      return state
        .map((i) =>
          i.id === action.id ? { ...i, quantity: i.quantity - 1 } : i,
        )
        .filter((i) => i.quantity > 0);

    case "REMOVE":
      return state.filter((i) => i.id !== action.id);

    case "CLEAR":
      return [];

    default:
      return state;
  }
}

interface CartContextValue {
  items: CartItem[];
  itemCount: number;
  subtotal: number;
  addItem: (item: MenuItem, qty?: number) => void;
  increment: (id: string) => void;
  decrement: (id: string) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextValue | null>(null);
const STORAGE_KEY = "hq_cart_v1";

export function CartProvider({ children }: { children: ReactNode }) {
  // Start empty so server and first client render agree; hydrate after mount.
  const [items, dispatch] = useReducer(reducer, []);
  // Tracked as state (not a ref) so the persist effect below closes over the
  // pre-hydration value and skips writing until the hydrate re-render lands.
  // A ref would be mutated synchronously here and read as `true` by the persist
  // effect in the *same* commit, clobbering stored data with the initial [].
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = sessionStorage.getItem(STORAGE_KEY);
      if (raw) dispatch({ type: "HYDRATE", items: JSON.parse(raw) });
    } catch {
      /* ignore corrupt storage */
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    // Avoid clobbering stored cart with the initial empty state pre-hydration.
    if (!hydrated) return;
    try {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      /* storage may be unavailable */
    }
  }, [items, hydrated]);

  const value = useMemo<CartContextValue>(() => {
    const itemCount = items.reduce((n, i) => n + i.quantity, 0);
    const subtotal = items.reduce((n, i) => n + i.price * i.quantity, 0);
    return {
      items,
      itemCount,
      subtotal,
      addItem: (item, qty = 1) => dispatch({ type: "ADD", item, qty }),
      increment: (id) => dispatch({ type: "INCREMENT", id }),
      decrement: (id) => dispatch({ type: "DECREMENT", id }),
      removeItem: (id) => dispatch({ type: "REMOVE", id }),
      clearCart: () => dispatch({ type: "CLEAR" }),
    };
  }, [items]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart(): CartContextValue {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within <CartProvider>");
  return ctx;
}
