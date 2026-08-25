import Link from "next/link";
import { MapPin, Phone } from "lucide-react";
import { BUSINESS } from "@/lib/config";
import { Logo } from "@/components/brand/Logo";
import { WhatsAppIcon, FoodpandaIcon } from "@/components/brand/BrandIcons";

const waLink = `https://wa.me/${BUSINESS.whatsappNumber}`;
const telLink = `tel:${BUSINESS.phone.replace(/[^\d+]/g, "")}`;

const QUICK_LINKS = [
  { href: "/menu", label: "Menu" },
  { href: "/reviews", label: "Reviews" },
  { href: "/contact", label: "Contact" },
];

// Each row clears the 44px minimum tap target; the icon + label read as one hit.
const contactRow =
  "inline-flex min-h-[44px] items-center gap-2 py-1 text-white/85 transition-colors hover:text-white";

export function Footer() {
  return (
    <footer className="bg-charcoal px-5 pb-[max(2rem,env(safe-area-inset-bottom))] pt-9 text-white/80">
      <Logo size="md" onDark />
      <p className="mt-3 text-sm text-white/55">{BUSINESS.addressLine}</p>

      <nav
        aria-label="Footer"
        className="mt-6 flex flex-wrap gap-x-6 gap-y-1 text-sm font-semibold"
      >
        {QUICK_LINKS.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className="inline-flex min-h-[44px] items-center text-white/85 transition-colors hover:text-white"
          >
            {l.label}
          </Link>
        ))}
      </nav>

      <div className="mt-2 h-px bg-white/10" />

      <div className="mt-3 flex flex-wrap gap-x-6 gap-y-1 text-sm font-medium">
        <a href={waLink} target="_blank" rel="noopener noreferrer" className={contactRow}>
          <WhatsAppIcon className="size-4" /> WhatsApp
        </a>
        <a href={telLink} className={contactRow}>
          <Phone className="size-4" /> Call
        </a>
        <a
          href={BUSINESS.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={contactRow}
        >
          <MapPin className="size-4" /> Directions
        </a>
        <a
          href={BUSINESS.foodpandaUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={contactRow}
        >
          <FoodpandaIcon className="size-4 text-[#e91e77]" /> Foodpanda
        </a>
      </div>

      <div className="mt-6 border-t border-white/10 pt-5 text-xs text-white/40">
        © {new Date().getFullYear()} {BUSINESS.name} · {BUSINESS.addressLine}
      </div>
    </footer>
  );
}
