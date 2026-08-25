"use client";

import Image from "next/image";
import { UtensilsCrossed } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/cn";

/**
 * Food image with a warm branded fallback if the source is missing or
 * fails to load — so the layout always looks intentional while real HQ
 * photography is dropped into /public/images.
 *
 * Built on next/image: local files are served as AVIF/WebP at the right
 * pixel size for the slot, instead of shipping the raw 700×700 JPEG into a
 * 150px card. Always rendered with `fill`, so every caller must give the
 * wrapper an explicit size (an aspect ratio or fixed dimensions) and a
 * `sizes` hint describing how wide the slot actually is.
 */
export function FoodImage({
  src,
  alt,
  className,
  imgClassName,
  priority = false,
  sizes = "100vw",
}: {
  src?: string;
  alt: string;
  /** Sizing/aspect classes for the wrapper box (it establishes the size). */
  className?: string;
  imgClassName?: string;
  /** LCP image (hero / product). Loads eagerly at high fetch priority. */
  priority?: boolean;
  /** Rendered slot width, e.g. "72px" or "(max-width: 430px) 50vw, 215px". */
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
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          // Next 16 deprecated `priority`; the LCP hint is now loading +
          // fetchPriority. Below the fold we stay lazy.
          loading={priority ? "eager" : "lazy"}
          fetchPriority={priority ? "high" : "auto"}
          onError={() => setBroken(true)}
          className={cn("object-cover", imgClassName)}
        />
      )}
    </div>
  );
}
