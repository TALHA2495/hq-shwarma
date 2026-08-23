/**
 * Menu content for the prototype.
 *
 * Categories come from the source research (Shawarma, Paratha Rolls,
 * Burgers, Platters). Named items marked ★ below appear in that research;
 * the rest are reasonable category-fillers for a shawarma shop.
 *
 * ⚠️ SAMPLE DATA — prices (Rs.) and descriptions are placeholders and
 * must be confirmed with HQ Shawarma before going live. Images live in
 * /public/images and are clearly replaceable with real HQ photography.
 */

export type CategorySlug = "shawarma" | "rolls" | "burgers" | "platters";

export interface Category {
  slug: CategorySlug;
  /** Full display name */
  name: string;
  /** Short label used in the horizontal tab bar */
  tab: string;
  blurb: string;
}

export interface MenuItem {
  id: string;
  name: string;
  category: CategorySlug;
  price: number;
  image: string;
  description: string;
  /** Short chips shown on the product page, e.g. "Cheesy", "Spicy" */
  tags?: string[];
  popular?: boolean;
  /** The single signature item highlighted on Home */
  featured?: boolean;
  /** Optional sample rating for the product detail page (0–5) */
  rating?: number;
}

export const CATEGORIES: Category[] = [
  {
    slug: "shawarma",
    name: "Shawarma",
    tab: "Shawarma",
    blurb: "Wrapped fresh, stacked with flavour.",
  },
  {
    slug: "rolls",
    name: "Paratha Rolls",
    tab: "Rolls",
    blurb: "Flaky paratha, loaded fillings.",
  },
  {
    slug: "burgers",
    name: "Burgers",
    tab: "Burgers",
    blurb: "Big, messy, worth it.",
  },
  {
    slug: "platters",
    name: "Platters",
    tab: "Platters",
    blurb: "Full plates for a proper meal.",
  },
];

export const MENU: MenuItem[] = [
  // ── Shawarma ─────────────────────────────────────────────
  {
    id: "chicken-shawarma",
    name: "Chicken Shawarma", // ★
    category: "shawarma",
    price: 220,
    image: "/images/chicken-shawarma.jpg",
    description: "Grilled chicken, garlic sauce and salad in a soft pita.",
    tags: ["Classic"],
    rating: 4.7,
  },
  {
    id: "chicken-cheese-shawarma",
    name: "Chicken Cheese Shawarma", // ★
    category: "shawarma",
    price: 280,
    image: "/images/chicken-cheese-shawarma.jpg",
    description: "The classic, loaded with melted cheese.",
    tags: ["Cheesy", "Bestseller"],
    popular: true,
    rating: 4.8,
  },
  {
    id: "zinger-shawarma",
    name: "Zinger Shawarma", // ★
    category: "shawarma",
    price: 300,
    image: "/images/zinger-shawarma.jpg",
    description: "Crispy fried chicken strips, mayo and salad.",
    tags: ["Crispy"],
    popular: true,
    rating: 4.7,
  },
  {
    id: "zinger-cheese-shawarma",
    name: "Zinger Cheese Shawarma", // ★
    category: "shawarma",
    price: 350,
    image: "/images/zinger-cheese-shawarma.jpg",
    description: "Crispy zinger with an extra layer of cheese.",
    tags: ["Crispy", "Cheesy"],
    rating: 4.8,
  },
  {
    id: "mixed-chicken-zinger",
    name: "Mixed Chicken Zinger", // ★
    category: "shawarma",
    price: 360,
    image: "/images/mixed-chicken-zinger.jpg",
    description: "Grilled and crispy chicken together in one wrap.",
    tags: ["Loaded"],
    rating: 4.6,
  },
  {
    id: "grilled-shawarma",
    name: "Grilled Shawarma", // ★
    category: "shawarma",
    price: 320,
    image: "/images/grilled-shawarma.jpg",
    description: "Pressed and grilled till the wrap turns golden.",
    tags: ["Grilled"],
    rating: 4.7,
  },

  // ── Paratha Rolls ────────────────────────────────────────
  {
    id: "chicken-paratha-roll",
    name: "Chicken Paratha Roll",
    category: "rolls",
    price: 260,
    image: "/images/chicken-paratha-roll.jpg",
    description: "Chicken chunks rolled in a flaky paratha.",
    tags: ["Classic"],
    rating: 4.6,
  },
  {
    id: "zinger-paratha-roll",
    name: "Zinger Paratha Roll",
    category: "rolls",
    price: 320,
    image: "/images/zinger-paratha-roll.jpg",
    description: "Crispy zinger strips, sauce and slaw in a paratha.",
    tags: ["Crispy"],
    rating: 4.7,
  },
  {
    id: "malai-boti-roll",
    name: "Malai Boti Roll", // ★ (Malai Boti)
    category: "rolls",
    price: 340,
    image: "/images/malai-boti-roll.jpg",
    description: "Creamy malai boti wrapped with mint sauce.",
    tags: ["Creamy"],
    popular: true,
    rating: 4.8,
  },
  {
    id: "tikka-boti-roll",
    name: "Tikka Boti Roll", // ★ (Tikka Boti)
    category: "rolls",
    price: 340,
    image: "/images/tikka-boti-roll.jpg",
    description: "Spicy tikka boti with onions and chutney.",
    tags: ["Spicy"],
    rating: 4.7,
  },

  // ── Burgers ──────────────────────────────────────────────
  {
    id: "chicken-burger",
    name: "Chicken Burger",
    category: "burgers",
    price: 350,
    image: "/images/chicken-burger.jpg",
    description: "Grilled patty, fresh salad and house sauce.",
    tags: ["Classic"],
    rating: 4.6,
  },
  {
    id: "zinger-burger",
    name: "Zinger Burger",
    category: "burgers",
    price: 420,
    image: "/images/zinger-burger.jpg",
    description: "Crunchy fried fillet, lettuce and mayo.",
    tags: ["Crispy"],
    popular: true,
    rating: 4.8,
  },
  {
    id: "hq-special-burger",
    name: "HQ Special Burger", // ★ (HQ Special)
    category: "burgers",
    price: 520,
    image: "/images/hq-special-burger.jpg",
    description: "Double patty stacked with cheese and crispy chicken.",
    tags: ["Double", "Loaded"],
    rating: 4.9,
  },

  // ── Platters ─────────────────────────────────────────────
  {
    id: "malai-boti-platter",
    name: "Malai Boti Platter", // ★ (Malai Boti)
    category: "platters",
    price: 650,
    image: "/images/malai-boti-platter.jpg",
    description: "Creamy malai boti with rice, salad and sauces.",
    tags: ["Creamy", "For one"],
    rating: 4.8,
  },
  {
    id: "tikka-boti-platter",
    name: "Tikka Boti Platter", // ★ (Tikka Boti)
    category: "platters",
    price: 650,
    image: "/images/tikka-boti-platter.jpg",
    description: "Spicy tikka boti with rice, salad and raita.",
    tags: ["Spicy", "For one"],
    rating: 4.7,
  },
  {
    id: "grilled-platter",
    name: "Grilled Platter", // ★ (Grilled Shawarma family)
    category: "platters",
    price: 750,
    image: "/images/grilled-platter.jpg",
    description: "Mixed grilled chicken with fries and dips.",
    tags: ["Grilled", "Sharing"],
    rating: 4.7,
  },
  {
    id: "hq-special-platter",
    name: "HQ Special Platter", // ★ (HQ Special)
    category: "platters",
    price: 950,
    image: "/images/hq-special-platter.jpg",
    description:
      "The house feast — malai boti, tikka, grilled chicken, rice and fries.",
    tags: ["Signature", "Sharing"],
    popular: true,
    featured: true,
    rating: 4.9,
  },
];

// ── Lookups ────────────────────────────────────────────────

export function getItem(id: string): MenuItem | undefined {
  return MENU.find((m) => m.id === id);
}

export function getCategory(slug: string): Category | undefined {
  return CATEGORIES.find((c) => c.slug === slug);
}

export function itemsByCategory(slug: CategorySlug): MenuItem[] {
  return MENU.filter((m) => m.category === slug);
}

export function popularItems(): MenuItem[] {
  return MENU.filter((m) => m.popular);
}

export function featuredItem(): MenuItem {
  return MENU.find((m) => m.featured) ?? MENU[0];
}

/** Valid category slug guard for URL params. */
export function isCategorySlug(value: string | null): value is CategorySlug {
  return (
    value === "shawarma" ||
    value === "rolls" ||
    value === "burgers" ||
    value === "platters"
  );
}
