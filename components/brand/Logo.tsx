import Link from "next/link";

/**
 * HQ Shawarma wordmark: a red "HQ" badge + "Shawarma".
 * Refined approximation of the brand identity, pending real assets.
 */
export function Logo({
  size = "md",
  href = "/",
  onDark = false,
  className = "",
}: {
  size?: "sm" | "md" | "lg";
  href?: string | null;
  onDark?: boolean;
  className?: string;
}) {
  const dims = {
    sm: { badge: "h-7 min-w-7 text-[13px] px-1.5 rounded-[9px]", word: "text-[15px]" },
    md: { badge: "h-8 min-w-8 text-[15px] px-2 rounded-[10px]", word: "text-[18px]" },
    lg: { badge: "h-11 min-w-11 text-xl px-2.5 rounded-[13px]", word: "text-2xl" },
  }[size];

  const inner = (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <span
        className={`grid place-items-center bg-brand font-display font-extrabold leading-none text-white shadow-brand ${dims.badge}`}
      >
        HQ
      </span>
      <span
        className={`font-display font-bold leading-none tracking-tight ${
          onDark ? "text-white" : "text-ink"
        } ${dims.word}`}
      >
        Shawarma
      </span>
    </span>
  );

  if (!href) return inner;
  return (
    <Link href={href} aria-label="HQ Shawarma — home" className="inline-flex">
      {inner}
    </Link>
  );
}
