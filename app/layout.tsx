import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";
import { MobileHeader } from "@/components/navigation/MobileHeader";
import { Footer } from "@/components/navigation/Footer";
import { BUSINESS } from "@/lib/config";

const display = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  display: "swap",
});

const body = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

const DESCRIPTION =
  `Fresh chicken shawarma, zinger wraps, paratha rolls, burgers and platters on ` +
  `${BUSINESS.area}, ${BUSINESS.city}. Browse the menu and order in a tap on WhatsApp or Foodpanda.`;

export const metadata: Metadata = {
  metadataBase: new URL(BUSINESS.siteUrl),
  title: {
    default: `${BUSINESS.name} · ${BUSINESS.area}, ${BUSINESS.city}`,
    template: `%s · ${BUSINESS.name}`,
  },
  description: DESCRIPTION,
  applicationName: BUSINESS.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: BUSINESS.name,
    title: `${BUSINESS.name} · ${BUSINESS.area}, ${BUSINESS.city}`,
    description: DESCRIPTION,
    locale: "en_PK",
    url: "/",
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  themeColor: "#fbf7f2",
  width: "device-width",
  initialScale: 1,
  // Required for the env(safe-area-inset-*) padding used by the header and
  // every sticky action bar to resolve to anything other than 0 on iOS.
  viewportFit: "cover",
};

/**
 * Restaurant structured data for local discovery. Deliberately minimal:
 * only fields we can state truthfully. No opening hours, no ratings, no
 * price range — none of those are confirmed. `telephone` waits on
 * BUSINESS.verified so search engines are never handed a placeholder.
 */
function restaurantJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: BUSINESS.name,
    url: BUSINESS.siteUrl,
    servesCuisine: ["Middle Eastern", "Pakistani", "Fast Food"],
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS.area,
      addressLocality: BUSINESS.city,
      addressCountry: "PK",
    },
    hasMap: BUSINESS.mapsUrl,
    ...(BUSINESS.verified ? { telephone: BUSINESS.phone } : {}),
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <script
          type="application/ld+json"
          // Static, author-controlled object — no user input reaches this.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantJsonLd()) }}
        />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-1/2 focus:top-3 focus:z-[80] focus:-translate-x-1/2 focus:rounded-full focus:bg-charcoal focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
        >
          Skip to content
        </a>
        <Providers>
          {/* Mobile presentation frame: a phone-width column over the backdrop. */}
          <div className="mx-auto flex min-h-dvh w-full max-w-[430px] flex-col bg-bg min-[431px]:shadow-frame">
            <MobileHeader />
            <main id="main" className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
