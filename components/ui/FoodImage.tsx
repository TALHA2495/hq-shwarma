"use client";

import { UtensilsCrossed } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/cn";

/**
 * Food image with a warm branded fallback if the source is missing or
 * fails to load — so the layout always looks intentional while real HQ
 * photography is dropped into /public/images.
 */
export function FoodImage({
  src,
  alt,
  className,
  imgClassName,
  priority = false,
  sizes,
}: {
  src?: string;
  alt: string;
  /** Sizing/aspect classes for the wrapper box. */
  className?: string;
  imgClassName?: string;
  priority?: boolean;
  sizes?: string;
}) {
  const [broken, setBroken] = useState(false);
  const showFallback = !src || broken;

  return (
    <div className={cn("relative overflow-hidden bg-surface-2", className)}>
      {showFallback ? (
        <div className="absolute inset-0 grid place-items-center bg-[linear-gradient(135deg,var(--color-brand-tint),var(--color-accent-tint))]">
          <UtensilsCrossed
            className="size-8 text-brand/35"
            strokeWidth={1.75}
            aria-hidden="true"
          />
        </div>
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={alt}
          sizes={sizes}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          onError={() => setBroken(true)}
          className={cn(
            "absolute inset-0 size-full object-cover",
            imgClassName,
          )}
        />
      )}
    </div>
  );
}
