import Link from "next/link";
import type { MenuItem } from "@/lib/menu-data";
import { cn } from "@/lib/cn";
import { FoodImage } from "@/components/ui/FoodImage";
import { PriceDisplay } from "./PriceDisplay";
import { AddButton } from "./AddButton";

function badgeFor(item: MenuItem): string | null {
  if (item.tags?.includes("Signature")) return "Signature";
  if (item.tags?.includes("Bestseller")) return "Bestseller";
  return null;
}

/** Image-led food product card. The card links to detail; the + adds to cart. */
export function FoodCard({
  item,
  className,
}: {
  item: MenuItem;
  className?: string;
}) {
  const badge = badgeFor(item);

  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-[16px] border border-line bg-surface shadow-card",
        className,
      )}
    >
      <Link
        href={`/product/${item.id}`}
        className="block transition-transform duration-150 active:scale-[0.985]"
      >
        <div className="relative">
          <FoodImage
            src={item.image}
            alt={item.name}
            sizes="(max-width: 430px) 45vw, 190px"
            className="aspect-[4/3] w-full"
          />
          {badge && (
            <span className="absolute left-2.5 top-2.5 rounded-full bg-charcoal/85 px-2.5 py-1 text-[10.5px] font-bold uppercase tracking-wide text-white backdrop-blur">
              {badge}
            </span>
          )}
        </div>
        <div className="p-3 pb-3.5">
          {/* Height reserves two lines so grid rows stay aligned whether a
              name is one word or "Chicken Cheese Shawarma". The clamp allows a
              third line so the longest names wrap instead of truncating at the
              narrowest widths (≤320px); at 375px+ every name fits in two. */}
          <h3 className="line-clamp-3 min-h-[2.75em] text-[15px] font-bold leading-snug text-ink">
            {item.name}
          </h3>
          <div className="mt-1.5 pr-11">
            <PriceDisplay amount={item.price} />
          </div>
        </div>
      </Link>
      <AddButton item={item} className="absolute bottom-3 right-3" />
    </div>
  );
}
