import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

/** Section title with an optional eyebrow and a right-aligned link action. */
export function SectionHeader({
  eyebrow,
  title,
  action,
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  action?: { label: string; href: string };
  className?: string;
}) {
  return (
    <div className={cn("mb-3.5 flex items-end justify-between gap-3", className)}>
      <div>
        {eyebrow && (
          <p className="mb-1 text-[12px] font-semibold uppercase tracking-[0.14em] text-brand">
            {eyebrow}
          </p>
        )}
        <h2 className="text-[19px] font-bold leading-tight text-ink">{title}</h2>
      </div>
      {action && (
        <Link
          href={action.href}
          className="group inline-flex shrink-0 items-center gap-1 text-[13px] font-semibold text-ink-2 transition-colors hover:text-brand"
        >
          {action.label}
          <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
        </Link>
      )}
    </div>
  );
}
