import { Star } from "lucide-react";
import { cn } from "@/lib/cn";

/** Compact star rating. Sample/prototype content — not a verified metric. */
export function Stars({
  rating,
  size = 14,
  showValue = false,
  className,
}: {
  rating: number;
  size?: number;
  showValue?: boolean;
  className?: string;
}) {
  const rounded = Math.round(rating);
  return (
    <span className={cn("inline-flex items-center gap-1", className)}>
      <span className="inline-flex" aria-hidden="true">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            style={{ width: size, height: size }}
            className={
              i < rounded ? "fill-accent text-accent" : "fill-line-2 text-line-2"
            }
          />
        ))}
      </span>
      {showValue && (
        <span className="text-[13px] font-semibold text-ink-2">
          {rating.toFixed(1)}
        </span>
      )}
      <span className="sr-only">{rating.toFixed(1)} out of 5</span>
    </span>
  );
}
