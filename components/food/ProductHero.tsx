import type { MenuItem } from "@/lib/menu-data";
import { FoodImage } from "@/components/ui/FoodImage";

/** Large, near-edge product image with an optional signature badge. */
export function ProductHero({ item }: { item: MenuItem }) {
  const badge = item.tags?.includes("Signature")
    ? "Signature"
    : item.tags?.includes("Bestseller")
      ? "Bestseller"
      : null;

  return (
    <div className="relative">
      <FoodImage
        src={item.image}
        alt={item.name}
        priority
        sizes="(max-width: 430px) 100vw, 430px"
        className="aspect-[4/3] w-full"
      />
      {/* Soft floor so the rounded content sheet below reads as lifted. */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-bg to-transparent" />
      {badge && (
        <span className="absolute left-4 top-4 rounded-full bg-charcoal/85 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wide text-white backdrop-blur">
          {badge}
        </span>
      )}
    </div>
  );
}
