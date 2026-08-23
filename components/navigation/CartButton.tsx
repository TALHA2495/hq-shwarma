"use client";

import Link from "next/link";
import { ShoppingBag } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useCart } from "@/lib/cart-store";

export function CartButton() {
  const { itemCount } = useCart();

  return (
    <Link
      href="/cart"
      aria-label={
        itemCount > 0 ? `Cart, ${itemCount} items` : "Cart, empty"
      }
      className="relative grid size-11 shrink-0 place-items-center rounded-full border border-line bg-surface text-ink shadow-sm transition-[transform,background-color] duration-150 hover:bg-surface-2 active:scale-90"
    >
      <ShoppingBag className="size-5" />
      <AnimatePresence>
        {itemCount > 0 && (
          <motion.span
            key={itemCount}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={{ type: "spring", damping: 18, stiffness: 500 }}
            className="absolute -right-1 -top-1 grid h-[19px] min-w-[19px] place-items-center rounded-full bg-brand px-1 text-[11px] font-bold leading-none text-white ring-2 ring-bg"
          >
            {itemCount}
          </motion.span>
        )}
      </AnimatePresence>
    </Link>
  );
}
