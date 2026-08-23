"use client";

import { motion } from "motion/react";
import { useEffect, useRef } from "react";
import { CATEGORIES, type CategorySlug } from "@/lib/menu-data";
import { cn } from "@/lib/cn";

export type TabValue = CategorySlug | "all";

const TABS: { key: TabValue; label: string }[] = [
  { key: "all", label: "All" },
  ...CATEGORIES.map((c) => ({ key: c.slug as TabValue, label: c.tab })),
];

/** Horizontal, scrollable category filter with a sliding active pill. */
export function CategoryTabs({
  value,
  onChange,
}: {
  value: TabValue;
  onChange: (value: TabValue) => void;
}) {
  const refs = useRef<Record<string, HTMLButtonElement | null>>({});

  useEffect(() => {
    refs.current[value]?.scrollIntoView({
      inline: "center",
      block: "nearest",
      behavior: "smooth",
    });
  }, [value]);

  return (
    <div
      role="tablist"
      aria-label="Menu categories"
      className="no-scrollbar -mx-4 flex gap-2 overflow-x-auto px-4"
    >
      {TABS.map((t) => {
        const active = value === t.key;
        return (
          <button
            key={t.key}
            ref={(el) => {
              refs.current[t.key] = el;
            }}
            role="tab"
            aria-selected={active}
            onClick={() => onChange(t.key)}
            className={cn(
              "relative h-9 shrink-0 rounded-full px-4 text-[13.5px] font-semibold transition-colors",
              active ? "border border-transparent" : "border border-line bg-surface text-ink-2 hover:text-ink",
            )}
          >
            {active && (
              <motion.span
                layoutId="tab-pill"
                className="absolute inset-0 rounded-full bg-brand shadow-brand"
                transition={{ type: "spring", damping: 30, stiffness: 380 }}
              />
            )}
            <span className={cn("relative z-10", active && "text-white")}>
              {t.label}
            </span>
          </button>
        );
      })}
    </div>
  );
}
