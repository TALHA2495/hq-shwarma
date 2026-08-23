import type { Metadata } from "next";
import { REVIEWS } from "@/lib/reviews-data";
import { Button } from "@/components/ui/Button";
import { ReviewCard } from "@/components/reviews/ReviewCard";

export const metadata: Metadata = {
  title: "Reviews",
  description: "What customers say about HQ Shawarma.",
};

export default function ReviewsPage() {
  return (
    <div className="px-4 py-6">
      <h1 className="text-[28px] font-extrabold tracking-tight text-ink">
        Reviews
      </h1>
      <p className="mt-1 text-[14px] text-ink-2">
        What customers are saying.
      </p>

      <div className="mt-5 space-y-3">
        {REVIEWS.map((r) => (
          <ReviewCard key={r.id} review={r} />
        ))}
      </div>

      <div className="mt-8 rounded-[18px] border border-line bg-surface-2 p-5 text-center shadow-card">
        <p className="text-[15px] font-bold text-ink">Try it yourself</p>
        <p className="mx-auto mt-1 max-w-[26ch] text-[13px] leading-relaxed text-ink-2">
          Pick your favourites and order in a couple of taps.
        </p>
        <div className="mt-4">
          <Button href="/menu" fullWidth>
            View the menu
          </Button>
        </div>
      </div>
    </div>
  );
}
