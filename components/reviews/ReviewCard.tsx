import type { Review } from "@/lib/reviews-data";
import { cn } from "@/lib/cn";
import { Stars } from "@/components/ui/Stars";

/** A single testimonial. Content is placeholder sample data (see reviews-data). */
export function ReviewCard({
  review,
  className,
}: {
  review: Review;
  className?: string;
}) {
  const initial = review.name.trim().charAt(0).toUpperCase();

  return (
    <figure
      className={cn(
        "rounded-[16px] border border-line bg-surface p-4 shadow-card",
        className,
      )}
    >
      <div className="flex items-center gap-3">
        <span
          className="grid size-10 shrink-0 place-items-center rounded-full bg-brand-tint font-display text-[15px] font-bold text-brand-dark"
          aria-hidden="true"
        >
          {initial}
        </span>
        <div className="min-w-0">
          <figcaption className="truncate text-[14px] font-bold text-ink">
            {review.name}
          </figcaption>
          <span className="text-[12px] text-muted">{review.when}</span>
        </div>
        <Stars rating={review.rating} className="ml-auto" />
      </div>
      <blockquote className="mt-3 text-[13.5px] leading-relaxed text-ink-2">
        “{review.text}”
      </blockquote>
    </figure>
  );
}
