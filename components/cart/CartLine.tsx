"use client";

import { Trash2 } from "lucide-react";
import { motion } from "motion/react";
import { useCart, type CartItem } from "@/lib/cart-store";
import { formatPrice } from "@/lib/format";
import { FoodImage } from "@/components/ui/FoodImage";
import { QuantityStepper } from "@/components/ui/QuantityStepper";

/** A single cart row: thumbnail, name, unit price, stepper and line total. */
export function CartLine({ item }: { item: CartItem }) {
  const { increment, decrement } = useCart();
  const lineTotal = item.price * item.quantity;
  const willRemove = item.quantity === 1;

  return (
    <motion.li
      layout
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, height: 0, marginTop: 0, marginBottom: 0 }}
      transition={{ duration: 0.22, ease: [0.22, 0.61, 0.36, 1] }}
      className="flex gap-3.5 py-4"
    >
      <FoodImage
        src={item.image}
        alt={item.name}
        sizes="72px"
        className="size-[72px] shrink-0 rounded-[14px]"
      />
      <div className="flex min-w-0 flex-1 flex-col">
        <div className="flex items-start justify-between gap-2">
          <h3 className="line-clamp-2 text-[14.5px] font-bold leading-snug text-ink">
            {item.name}
          </h3>
          <span className="shrink-0 font-display text-[15px] font-extrabold tracking-tight text-ink">
            {formatPrice(lineTotal)}
          </span>
        </div>
        <p className="mt-0.5 text-[12.5px] text-muted">
          {formatPrice(item.price)} each
        </p>
        <div className="mt-auto pt-2.5">
          <QuantityStepper
            size="sm"
            value={item.quantity}
            onIncrement={() => increment(item.id)}
            onDecrement={() => decrement(item.id)}
            decrementIcon={
              willRemove ? (
                <Trash2 className="size-4 text-error" aria-hidden="true" />
              ) : undefined
            }
            label={`Quantity for ${item.name}`}
          />
        </div>
      </div>
    </motion.li>
  );
}
