"use client";

import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { CATEGORIES, type CategorySlug } from "@/lib/menu-data";
import { cn } from "@/lib/cn";

export type TabValue = CategorySlug | "all";

/** Shared so the tablist's aria-controls matches the panel that shows results. */
export const MENU_PANEL_ID = "menu-results";

const TABS: { key: TabValue; label: string }[] = [
  { key: "all", label: "All" },
  ...CATEGORIES.map((c) => ({ key: c.slug as TabValue, label: c.tab })),
];

/**
 * Horizontal category filter with a sliding active pill. Implements the WAI
 * tabs pattern: roving tabindex, arrow/Home/End navigation with automatic
 * activation (moving focus filters, matching the tap behaviour). A right-edge
 * fade signals more tabs when the row overflows.
 */
export function CategoryTabs({
  value,
  onChange,
}: {
  value: TabValue;
  onChange: (value: TabValue) => void;
}) {
  const refs = useRef<Record<string, HTMLButtonElement | null>>({});
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const [canScrollRight, setCanScrollRight] = useState(false);

  useEffect(() => {
    refs.current[value]?.scrollIntoView({
      inline: "center",
      block: "nearest",
      behavior: "smooth",
    });
  }, [value]);

  // Only show the edge fade while there's actually more to scroll toward.
  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const update = () =>
      setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
    update();
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const selectByIndex = (i: number) => {
    const next = TABS[(i + TABS.length) % TABS.length];
    onChange(next.key);
    refs.current[next.key]?.focus();
  };

  const onKeyDown = (e: React.KeyboardEvent, index: number) => {
    switch (e.key) {
      case "ArrowRight":
        e.preventDefault();
        selectByIndex(index + 1);
        break;
      case "ArrowLeft":
        e.preventDefault();
        selectByIndex(index - 1);
        break;
      case "Home":
        e.preventDefault();
        selectByIndex(0);
        break;
      case "End":
        e.preventDefault();
        selectByIndex(TABS.length - 1);
        break;
    }
  };

  return (
    <div
      ref={scrollerRef}
      role="tablist"
      aria-label="Menu categories"
      className={cn(
        "no-scrollbar -mx-4 flex gap-2 overflow-x-auto px-4",
        canScrollRight && "fade-edge-r",
      )}
    >
      {TABS.map((t, i) => {
        const active = value === t.key;
        return (
          <button
            key={t.key}
            ref={(el) => {
              refs.current[t.key] = el;
            }}
            role="tab"
            id={`tab-${t.key}`}
            aria-selected={active}
            aria-controls={MENU_PANEL_ID}
            tabIndex={active ? 0 : -1}
            onClick={() => onChange(t.key)}
            onKeyDown={(e) => onKeyDown(e, i)}
            className={cn(
              "relative inline-flex h-10 shrink-0 items-center rounded-full px-4 text-[13.5px] font-semibold transition-colors",
              active
                ? "border border-transparent"
                : "border border-line bg-surface text-ink-2 hover:text-ink",
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
