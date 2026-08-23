"use client";

import { motion, useReducedMotion } from "motion/react";

/**
 * Subtle per-navigation enter transition. Next remounts this on every route
 * change, so each page fades and rises in gently. Reduced motion → opacity only.
 */
export default function Template({ children }: { children: React.ReactNode }) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      initial={reduce ? { opacity: 0 } : { opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.24, ease: [0.22, 0.61, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
