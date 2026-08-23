import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MENU, getItem } from "@/lib/menu-data";
import { PriceDisplay } from "@/components/food/PriceDisplay";
import { ProductHero } from "@/components/food/ProductHero";
import { Stars } from "@/components/ui/Stars";
import { ProductPurchase } from "./ProductPurchase";

type Params = { params: Promise<{ id: string }> };

export function generateStaticParams() {
  return MENU.map((item) => ({ id: item.id }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { id } = await params;
  const item = getItem(id);
  if (!item) return { title: "Not found" };
  return {
    title: item.name,
    description: item.description,
  };
}

export default async function ProductPage({ params }: Params) {
  const { id } = await params;
  const item = getItem(id);
  if (!item) notFound();

  return (
    <article className="pb-2">
      <ProductHero item={item} />

      <div className="relative -mt-4 px-4">
        {item.tags && item.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {item.tags.map((t) => (
              <span
                key={t}
                className="rounded-full border border-line bg-surface px-2.5 py-1 text-[11.5px] font-semibold text-ink-2"
              >
                {t}
              </span>
            ))}
          </div>
        )}

        <h1 className="mt-3 text-[26px] font-extrabold leading-tight tracking-tight text-ink">
          {item.name}
        </h1>

        {typeof item.rating === "number" && (
          <div className="mt-2">
            <Stars rating={item.rating} showValue />
          </div>
        )}

        <div className="mt-3">
          <PriceDisplay amount={item.price} size="lg" />
        </div>

        <p className="mt-3 text-[14.5px] leading-relaxed text-ink-2">
          {item.description}
        </p>

        <ProductPurchase item={item} />
      </div>
    </article>
  );
}
