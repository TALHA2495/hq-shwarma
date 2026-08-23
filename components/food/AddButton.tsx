"use client";

import { Check, Plus } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useRef, useState } from "react";
import { useCart } from "@/lib/cart-store";
import { useToast } from "@/lib/toast";
import type { MenuItem } from "@/lib/menu-data";
import { cn } from "@/lib/cn";

/**
 * The "+" on food cards. Adds one to the cart with a brief confirm state,
 * a toast and a badge bump — without shifting the card layout.
 */
export function AddButton({
  item,
  size = "md",
  className,
}: {
  item: MenuItem;
  size?: "sm" | "md";
  className?: string;
}) {
  const { addItem } = useCart();
  const { toast } = useToast();
  const [added, setAdded] = useState(false);
  const timer = useRef<number | undefined>(undefined);

  const dims = size === "sm" ? "size-9" : "size-10";

  const onClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(item, 1);
    toast(`Added ${item.name}`, {
      icon: <Check className="size-4" strokeWidth={3} />,
    });
    setAdded(true);
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setAdded(false), 1100);
  };

  return (
    <motion.button
      type="button"
      onClick={onClick}
      whileTap={{ scale: 0.85 }}
      aria-label={`Add ${item.name} to cart`}
      className={cn(
        "grid shrink-0 place-items-center rounded-full text-white shadow-brand transition-colors duration-200",
        added ? "bg-success" : "bg-brand",
        dims,
        className,
      )}
    >
      <AnimatePresence mode="wait" initial={false}>
        {added ? (
          <motion.span
            key="check"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.15 }}
          >
            <Check className="size-[18px]" strokeWidth={3} />
          </motion.span>
        ) : (
          <motion.span
            key="plus"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.15 }}
          >
            <Plus className="size-[18px]" strokeWidth={2.75} />
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  );
}
