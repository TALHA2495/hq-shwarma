import { Minus, Plus } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

/** Presentational − value + control. Parent owns the quantity logic. */
export function QuantityStepper({
  value,
  onDecrement,
  onIncrement,
  decrementIcon,
  size = "md",
  label = "Quantity",
  className,
}: {
  value: number;
  onDecrement: () => void;
  onIncrement: () => void;
  /** Override the minus glyph (e.g. a trash icon when the next tap removes). */
  decrementIcon?: ReactNode;
  size?: "sm" | "md";
  label?: string;
  className?: string;
}) {
  const dims =
    size === "sm"
      ? { btn: "size-8", icon: "size-4", val: "w-7 text-sm" }
      : { btn: "size-11", icon: "size-[18px]", val: "w-9 text-[17px]" };

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border border-line bg-surface p-1",
        className,
      )}
      role="group"
      aria-label={label}
    >
      <button
        type="button"
        onClick={onDecrement}
        aria-label="Decrease quantity"
        className={cn(
          "grid place-items-center rounded-full text-ink transition-[transform,background-color] duration-150 hover:bg-surface-2 active:scale-90",
          dims.btn,
        )}
      >
        {decrementIcon ?? <Minus className={dims.icon} />}
      </button>
      <span
        className={cn(
          "text-center font-display font-bold tabular-nums text-ink",
          dims.val,
        )}
        aria-live="polite"
      >
        {value}
      </span>
      <button
        type="button"
        onClick={onIncrement}
        aria-label="Increase quantity"
        className={cn(
          "grid place-items-center rounded-full bg-brand text-white transition-transform duration-150 active:scale-90",
          dims.btn,
        )}
      >
        <Plus className={dims.icon} />
      </button>
    </div>
  );
}
