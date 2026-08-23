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

export const metadata: Metadata = {
  title: {
    default: `${BUSINESS.name} · ${BUSINESS.area}, ${BUSINESS.city}`,
    template: `%s · ${BUSINESS.name}`,
  },
  description:
    "Fresh chicken shawarma, zinger wraps, paratha rolls, burgers and platters — order in a tap on WhatsApp or Foodpanda.",
  applicationName: BUSINESS.name,
};

export const viewport: Viewport = {
  themeColor: "#fbf7f2",
  width: "device-width",
  initialScale: 1,
};

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
        <Providers>
          {/* Mobile presentation frame: a phone-width column over the backdrop. */}
          <div className="mx-auto flex min-h-dvh w-full max-w-[430px] flex-col bg-bg min-[431px]:shadow-2xl min-[431px]:ring-1 min-[431px]:ring-black/5">
            <MobileHeader />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
