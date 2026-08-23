import { CURRENCY } from "./config";

/** Format a whole-rupee amount, e.g. formatPrice(450) -> "Rs. 450". */
export function formatPrice(amount: number): string {
  return `${CURRENCY} ${amount.toLocaleString("en-PK")}`;
}
