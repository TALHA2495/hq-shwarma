import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Required — icon-only controls must be labelled for screen readers. */
  "aria-label": string;
  children: ReactNode;
  tone?: "surface" | "ghost" | "dark";
}

/** Circular icon-only control with a comfortable ≥44px tap target. */
export function IconButton({
  children,
  tone = "surface",
  className,
  ...props
}: IconButtonProps) {
  const tones = {
    surface:
      "bg-surface text-ink border border-line shadow-sm hover:bg-surface-2",
    ghost: "text-ink hover:bg-black/5",
    dark: "bg-white/10 text-white hover:bg-white/20 backdrop-blur",
  }[tone];

  return (
    <button
      className={cn(
        "grid size-11 shrink-0 place-items-center rounded-full transition-[transform,background-color] duration-150 active:scale-90",
        tones,
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
