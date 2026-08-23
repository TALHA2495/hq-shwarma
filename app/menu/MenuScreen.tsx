"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { UtensilsCrossed } from "lucide-react";
import { MENU, isCategorySlug, itemsByCategory } from "@/lib/menu-data";
import { CategoryTabs, type TabValue } from "@/components/food/CategoryTabs";
import { FoodGrid } from "@/components/food/FoodGrid";
import { EmptyState } from "@/components/ui/EmptyState";

export function MenuScreen() {
  const params = useSearchParams();
  const router = useRouter();

  const raw = params.get("category");
  const fromUrl: TabValue = isCategorySlug(raw) ? raw : "all";
  const [value, setValue] = useState<TabValue>(fromUrl);

  // Stay in sync when the URL changes from elsewhere (Home tiles, back button).
  useEffect(() => {
    setValue(fromUrl);
  }, [fromUrl]);

  const onChange = (next: TabValue) => {
    setValue(next);
    router.replace(next === "all" ? "/menu" : `/menu?category=${next}`, {
      scroll: false,
    });
  };

  const items = value === "all" ? MENU : itemsByCategory(value);

  return (
    <div>
      <div className="px-4 pb-2 pt-5">
        <h1 className="text-[28px] font-extrabold tracking-tight text-ink">
          Menu
        </h1>
        <p className="mt-1 text-[14px] text-ink-2">
          Your favourites, ready to order.
        </p>
      </div>

      <div className="sticky top-[58px] z-40 border-b border-line bg-bg/95 px-4 py-2.5 backdrop-blur-md">
        <CategoryTabs value={value} onChange={onChange} />
      </div>

      <div className="px-4 py-5">
        {items.length > 0 ? (
          <FoodGrid items={items} motionKey={value} />
        ) : (
          <EmptyState
            icon={<UtensilsCrossed className="size-7" />}
            title="Nothing here yet"
            message="This category has no items right now. Try another tab."
          />
        )}
      </div>
    </div>
  );
}
