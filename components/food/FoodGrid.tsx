"use client";

import { motion, useReducedMotion } from "motion/react";
import type { MenuItem } from "@/lib/menu-data";
import { FoodCard } from "./FoodCard";

/** Animated 2-column grid. Re-keys on `motionKey` so filtering re-plays entry. */
export function FoodGrid({
  items,
  motionKey,
}: {
  items: MenuItem[];
  motionKey?: string;
}) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      key={motionKey}
      className="grid grid-cols-2 gap-3"
      initial="hidden"
      animate="show"
      variants={{
        hidden: {},
        show: {
          transition: { staggerChildren: reduce ? 0 : 0.04 },
        },
      }}
    >
      {items.map((item) => (
        <motion.div
          key={item.id}
          variants={{
            hidden: reduce ? { opacity: 0 } : { opacity: 0, y: 12 },
            show: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.28, ease: [0.22, 0.61, 0.36, 1] },
            },
          }}
        >
          <FoodCard item={item} />
        </motion.div>
      ))}
    </motion.div>
  );
}
