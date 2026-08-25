import { BUSINESS, CURRENCY, ORDER_TYPES } from "./config";
import type { CartItem } from "./cart-store";
import type { MenuItem } from "./menu-data";

/** The fulfilment options actually offered (see ORDER_TYPES in config). */
export type OrderType = keyof typeof ORDER_TYPES;

export const ORDER_TYPE_LABEL: Record<OrderType, string> = {
  pickup: "Pickup",
  delivery: "Delivery",
};

/** Fulfilment types that are switched on, in display order. */
export const AVAILABLE_ORDER_TYPES = (
  Object.keys(ORDER_TYPES) as OrderType[]
).filter((t) => ORDER_TYPES[t]);

/** Optional customer details captured before handing off to WhatsApp. */
export interface OrderDetails {
  orderType: OrderType;
  name?: string;
  phone?: string;
  address?: string;
  notes?: string;
}

const HEADER = `${BUSINESS.name.toUpperCase()} ORDER`;

const money = (n: number) => `${CURRENCY} ${n.toLocaleString("en-PK")}`;

/**
 * One order line, e.g.
 *   1. Chicken Cheese Shawarma
 *      2 × Rs. 280 = Rs. 560
 * The second line is indented three spaces to sit under the name.
 */
function itemBlock(index: number, name: string, qty: number, unit: number): string {
  return `${index}. ${name}\n   ${qty} × ${money(unit)} = ${money(unit * qty)}`;
}

/** Only fields the customer actually filled — no empty "Name:" lines to trim. */
function detailLines(details: OrderDetails): string[] {
  const lines = [`Order type: ${ORDER_TYPE_LABEL[details.orderType]}`];
  const name = details.name?.trim();
  const phone = details.phone?.trim();
  const address = details.address?.trim();
  const notes = details.notes?.trim();
  if (name) lines.push(`Name: ${name}`);
  if (phone) lines.push(`Phone: ${phone}`);
  // Address only makes sense for delivery; pickup never sends one.
  if (details.orderType === "delivery" && address) lines.push(`Address: ${address}`);
  if (notes) lines.push(`Notes: ${notes}`);
  return lines;
}

function compose(
  blocks: string[],
  itemCount: number,
  subtotal: number,
  details?: OrderDetails,
): string {
  const parts = [
    HEADER,
    "",
    ...blocks,
    "",
    `Items: ${itemCount}`,
    `Subtotal: ${money(subtotal)}`,
  ];
  if (details) parts.push("", ...detailLines(details));
  return parts.join("\n");
}

/** Prefilled message for ordering a single product directly. */
export function buildProductMessage(
  item: MenuItem,
  qty: number,
  details?: OrderDetails,
): string {
  return compose([itemBlock(1, item.name, qty, item.price)], qty, item.price * qty, details);
}

/** Prefilled message for a full cart. */
export function buildCartMessage(
  items: CartItem[],
  subtotal: number,
  details?: OrderDetails,
): string {
  const blocks = items.map((i, idx) => itemBlock(idx + 1, i.name, i.quantity, i.price));
  const itemCount = items.reduce((n, i) => n + i.quantity, 0);
  return compose(blocks, itemCount, subtotal, details);
}

/**
 * Build a wa.me link with the message URL-encoded.
 * The website only hands the conversation to WhatsApp — it does not
 * confirm, accept, or take payment for any order.
 */
export function whatsappUrl(message: string): string {
  return `https://wa.me/${BUSINESS.whatsappNumber}?text=${encodeURIComponent(
    message,
  )}`;
}
