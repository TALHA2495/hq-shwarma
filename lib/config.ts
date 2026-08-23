/**
 * Central business configuration.
 *
 * ⚠️ PLACEHOLDERS — replace every value below with real HQ Shawarma
 * details before this prototype goes live. Nothing here is verified.
 */

export const BUSINESS = {
  name: "HQ Shawarma",
  area: "Susan Road",
  city: "Faisalabad",
  addressLine: "Susan Road, Faisalabad",

  // TODO replace: WhatsApp number in international format, digits only (no +, no spaces).
  // Example shown is a placeholder Pakistan number.
  whatsappNumber: "923001234567",

  // TODO replace: dialable phone number for the tel: link.
  phone: "+92 300 1234567",

  // TODO replace: the restaurant's real Foodpanda page.
  foodpandaUrl: "https://www.foodpanda.pk/",

  // TODO replace: exact Google Maps link / place for directions.
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=HQ+Shawarma+Susan+Road+Faisalabad",
} as const;

/** Currency label used across the UI. Prices are sample values. */
export const CURRENCY = "Rs.";
