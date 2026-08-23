import { BUSINESS, CURRENCY } from "./config";
import type { CartItem } from "./cart-store";
import type { MenuItem } from "./menu-data";

const GREETING = `Assalam o Alaikum, I would like to order from ${BUSINESS.name}:`;
const CLOSING = "Please confirm my order.";

function line(name: string, qty: number, lineTotal: number): string {
  return `${qty} × ${name} — ${CURRENCY} ${lineTotal.toLocaleString("en-PK")}`;
}

function total(amount: number): string {
  return `Total: ${CURRENCY} ${amount.toLocaleString("en-PK")}`;
}

/** Prefilled message for ordering a single product directly. */
export function buildProductMessage(item: MenuItem, qty: number): string {
  const lineTotal = item.price * qty;
  return [
    GREETING,
    "",
    line(item.name, qty, lineTotal),
    "",
    total(lineTotal),
    "",
    CLOSING,
  ].join("\n");
}

/** Prefilled message for a full cart. */
export function buildCartMessage(items: CartItem[], subtotal: number): string {
  const lines = items.map((i) => line(i.name, i.quantity, i.price * i.quantity));
  return [GREETING, "", ...lines, "", total(subtotal), "", CLOSING].join("\n");
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
