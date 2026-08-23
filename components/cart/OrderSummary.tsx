import { formatPrice } from "@/lib/format";
import { Divider } from "@/components/ui/EmptyState";

/**
 * Order totals. Deliberately shows only subtotal and total — the prototype
 * invents no delivery fees, taxes or discounts. Anything final is confirmed
 * with the restaurant on WhatsApp.
 */
export function OrderSummary({
  subtotal,
  itemCount,
}: {
  subtotal: number;
  itemCount: number;
}) {
  return (
    <div className="rounded-[18px] border border-line bg-surface p-4 shadow-card">
      <div className="flex items-center justify-between text-[14px] text-ink-2">
        <span>
          Subtotal
          <span className="text-muted">
            {" "}
            · {itemCount} {itemCount === 1 ? "item" : "items"}
          </span>
        </span>
        <span className="font-medium text-ink">{formatPrice(subtotal)}</span>
      </div>
      <Divider className="my-3" />
      <div className="flex items-center justify-between">
        <span className="text-[15px] font-bold text-ink">Total</span>
        <span className="font-display text-[22px] font-extrabold tracking-tight text-ink">
          {formatPrice(subtotal)}
        </span>
      </div>
      <p className="mt-2 text-[11.5px] leading-relaxed text-muted">
        Delivery and any extras are confirmed with the restaurant on WhatsApp.
      </p>
    </div>
  );
}
