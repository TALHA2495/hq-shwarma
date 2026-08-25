/**
 * Central business configuration — the one file to edit when the real HQ
 * Shawarma details arrive.
 *
 * ⚠️ PLACEHOLDERS — every value marked TODO below is a stand-in. Nothing else
 * in the app hardcodes a number, link or address, so replacing them here
 * updates every CTA, the tel: link, directions and the structured data.
 */

export const BUSINESS = {
  name: "HQ Shawarma",
  area: "Susan Road",
  city: "Faisalabad",
  country: "Pakistan",
  addressLine: "Susan Road, Faisalabad",

  /**
   * Flip to `true` once every TODO below holds a real, confirmed value.
   * Only gates structured data: search engines never get told a placeholder
   * phone number is HQ Shawarma's. The UI is unaffected.
   */
  verified: false,

  // WhatsApp number in digits only for wa.me links.
  whatsappNumber: "03180087191",

  // Dialable phone number used for the tel: link and displayed in the UI.
  phone: "03180087191",

  // TODO replace: the restaurant's real Foodpanda page.
  foodpandaUrl: "https://www.foodpanda.pk/",

  // TODO replace: exact Google Maps link / place for directions.
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=HQ+Shawarma+Susan+Road+Faisalabad",

  // TODO replace: the production domain. Used for canonical + Open Graph URLs.
  siteUrl: "https://hq-shwarma-brze.vercel.app",
} as const;

/**
 * What the customer can actually ask for on WhatsApp.
 *
 * Direct delivery is off by default: the site only claims delivery through
 * Foodpanda, so offering it here would invent a service. Flip `delivery` on
 * once HQ Shawarma confirms they deliver from their own number.
 */
export const ORDER_TYPES = {
  pickup: true,
  delivery: false,
} as const;

/** Currency label used across the UI. Prices are sample values. */
export const CURRENCY = "Rs.";
