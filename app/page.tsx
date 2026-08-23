import Link from "next/link";
import { ArrowRight, Flame, MapPin } from "lucide-react";
import {
  CATEGORIES,
  featuredItem,
  itemsByCategory,
  popularItems,
  type CategorySlug,
} from "@/lib/menu-data";
import { REVIEWS } from "@/lib/reviews-data";
import { BUSINESS } from "@/lib/config";
import { whatsappUrl } from "@/lib/whatsapp";
import { Button } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FoodImage } from "@/components/ui/FoodImage";
import { FoodCard } from "@/components/food/FoodCard";
import { PriceDisplay } from "@/components/food/PriceDisplay";
import { ReviewCard } from "@/components/reviews/ReviewCard";
import { LocationCard } from "@/components/location/LocationCard";
import { WhatsAppIcon } from "@/components/brand/BrandIcons";

const heroWhatsApp = whatsappUrl(
  `Assalam o Alaikum, I would like to order from ${BUSINESS.name}.`,
);

/** A representative image for a category tile — the popular item, else the first. */
function categoryImage(slug: CategorySlug): string {
  const items = itemsByCategory(slug);
  return (items.find((i) => i.popular) ?? items[0]).image;
}

const WHY = [
  {
    icon: <Flame className="size-5" strokeWidth={2.25} />,
    title: "Grilled fresh",
    body: "Every wrap and platter is made to order — never sitting under a lamp.",
  },
  {
    icon: <WhatsAppIcon className="size-5" />,
    title: "Order in taps",
    body: "Build your order and send it straight to us on WhatsApp.",
  },
  {
    icon: <MapPin className="size-5" strokeWidth={2.25} />,
    title: "On Susan Road",
    body: "Right in the neighbourhood, with delivery available via Foodpanda.",
  },
];

export default function HomePage() {
  const popular = popularItems();
  const featured = featuredItem();

  return (
    <div>
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="relative">
        <FoodImage
          src="/images/hero.jpg"
          alt="A freshly wrapped chicken shawarma from HQ Shawarma"
          priority
          sizes="(max-width: 430px) 100vw, 430px"
          className="aspect-[4/5] w-full"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-charcoal/5" />
        <div className="absolute inset-x-0 bottom-0 p-5 pb-7 text-white">
          <p className="text-[12.5px] font-semibold uppercase tracking-[0.16em] text-white/75">
            {BUSINESS.area} · {BUSINESS.city}
          </p>
          <h1 className="mt-2 max-w-[9ch] text-[40px] font-extrabold leading-[1.02] tracking-tight">
            Shawarma, done right.
          </h1>
          <p className="mt-3 max-w-[34ch] text-[14.5px] leading-relaxed text-white/85">
            Fresh off the grill and wrapped to order — chicken, zinger, rolls,
            burgers and loaded platters.
          </p>
          <div className="mt-5 flex gap-2.5">
            <Button href="/menu" fullWidth rightIcon={<ArrowRight className="size-4" />}>
              View Menu
            </Button>
            <Button
              href={heroWhatsApp}
              variant="whatsapp"
              fullWidth
              leftIcon={<WhatsAppIcon className="size-[18px]" />}
            >
              WhatsApp
            </Button>
          </div>
        </div>
      </section>

      <div className="space-y-11 px-4 py-9">
        {/* ── Popular right now ──────────────────────────── */}
        <section>
          <SectionHeader
            eyebrow="Crowd favourites"
            title="Popular right now"
            action={{ label: "See all", href: "/menu" }}
          />
          <div className="no-scrollbar -mx-4 flex snap-x gap-3 overflow-x-auto px-4">
            {popular.map((item) => (
              <div key={item.id} className="w-[162px] shrink-0 snap-start">
                <FoodCard item={item} />
              </div>
            ))}
          </div>
        </section>

        {/* ── Explore the menu ───────────────────────────── */}
        <section>
          <SectionHeader eyebrow="Browse" title="Explore the menu" />
          <div className="grid grid-cols-2 gap-3">
            {CATEGORIES.map((c) => {
              const count = itemsByCategory(c.slug).length;
              return (
                <Link
                  key={c.slug}
                  href={`/menu?category=${c.slug}`}
                  className="group relative aspect-[3/2] overflow-hidden rounded-[16px] shadow-card transition-transform duration-150 active:scale-[0.98]"
                >
                  <FoodImage
                    src={categoryImage(c.slug)}
                    alt={c.name}
                    className="absolute inset-0 size-full"
                    imgClassName="transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/20 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-3">
                    <p className="text-[15px] font-bold text-white">{c.name}</p>
                    <p className="text-[11.5px] text-white/70">{count} items</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* ── Featured / signature ───────────────────────── */}
        <section>
          <SectionHeader eyebrow="The signature" title="HQ Special" />
          <Link
            href={`/product/${featured.id}`}
            className="group block overflow-hidden rounded-[22px] border border-line bg-surface shadow-card transition-transform duration-150 active:scale-[0.99]"
          >
            <div className="relative">
              <FoodImage
                src={featured.image}
                alt={featured.name}
                sizes="(max-width: 430px) 100vw, 430px"
                className="aspect-[16/10] w-full"
                imgClassName="transition-transform duration-500 group-hover:scale-[1.03]"
              />
              <span className="absolute left-4 top-4 rounded-full bg-charcoal/85 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wide text-white backdrop-blur">
                Signature
              </span>
            </div>
            <div className="p-5">
              <h3 className="text-[20px] font-bold text-ink">{featured.name}</h3>
              <p className="mt-1.5 text-[13.5px] leading-relaxed text-ink-2">
                {featured.description}
              </p>
              <div className="mt-4 flex items-center justify-between">
                <PriceDisplay amount={featured.price} size="lg" />
                <span className="inline-flex items-center gap-1.5 rounded-full bg-brand px-4 py-2.5 text-[13px] font-semibold text-white shadow-brand">
                  See details
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </div>
            </div>
          </Link>
        </section>

        {/* ── Why HQ ─────────────────────────────────────── */}
        <section>
          <SectionHeader eyebrow="Why HQ" title="What you can count on" />
          <div className="space-y-2.5">
            {WHY.map((w) => (
              <div
                key={w.title}
                className="flex gap-3.5 rounded-[16px] border border-line bg-surface p-4 shadow-card"
              >
                <span className="grid size-11 shrink-0 place-items-center rounded-full bg-brand-tint text-brand">
                  {w.icon}
                </span>
                <div>
                  <h3 className="text-[15px] font-bold text-ink">{w.title}</h3>
                  <p className="mt-0.5 text-[13px] leading-relaxed text-ink-2">
                    {w.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Social proof ───────────────────────────────── */}
        <section>
          <SectionHeader
            eyebrow="Reviews"
            title="Loved by locals"
            action={{ label: "Read all", href: "/reviews" }}
          />
          <div className="space-y-3">
            {REVIEWS.slice(0, 2).map((r) => (
              <ReviewCard key={r.id} review={r} />
            ))}
          </div>
        </section>

        {/* ── Location ───────────────────────────────────── */}
        <section>
          <SectionHeader eyebrow="Find us" title="Come by, or get it delivered" />
          <LocationCard />
        </section>

        {/* ── Final CTA ──────────────────────────────────── */}
        <section className="rounded-[22px] border border-line bg-surface-2 p-6 text-center shadow-card">
          <h2 className="text-[22px] font-bold text-ink">Hungry yet?</h2>
          <p className="mx-auto mt-1.5 max-w-[26ch] text-[13.5px] leading-relaxed text-ink-2">
            Build your order and send it over on WhatsApp — we&apos;ll take it
            from there.
          </p>
          <div className="mt-5 space-y-2.5">
            <Button
              href={heroWhatsApp}
              variant="whatsapp"
              size="lg"
              fullWidth
              leftIcon={<WhatsAppIcon className="size-5" />}
            >
              Order on WhatsApp
            </Button>
            <Button href="/menu" variant="secondary" size="lg" fullWidth>
              View the full menu
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
