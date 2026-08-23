import { MapPin, Phone } from "lucide-react";
import { BUSINESS } from "@/lib/config";
import { Logo } from "@/components/brand/Logo";
import { WhatsAppIcon, FoodpandaIcon } from "@/components/brand/BrandIcons";

const waLink = `https://wa.me/${BUSINESS.whatsappNumber}`;
const telLink = `tel:${BUSINESS.phone.replace(/\s/g, "")}`;

export function Footer() {
  return (
    <footer className="bg-charcoal px-5 pb-[max(2rem,env(safe-area-inset-bottom))] pt-9 text-white/80">
      <Logo size="md" href={null} onDark />
      <p className="mt-3 text-sm text-white/55">{BUSINESS.addressLine}</p>

      <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm font-medium">
        <a
          href={waLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-white/85 transition-colors hover:text-white"
        >
          <WhatsAppIcon className="size-4" /> WhatsApp
        </a>
        <a
          href={telLink}
          className="inline-flex items-center gap-2 text-white/85 transition-colors hover:text-white"
        >
          <Phone className="size-4" /> Call
        </a>
        <a
          href={BUSINESS.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-white/85 transition-colors hover:text-white"
        >
          <MapPin className="size-4" /> Directions
        </a>
      </div>

      <a
        href={BUSINESS.foodpandaUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-white/70 transition-colors hover:text-white"
      >
        <FoodpandaIcon className="size-4 text-[#e91e77]" /> Order on Foodpanda
      </a>

      <div className="mt-8 border-t border-white/10 pt-5 text-xs text-white/40">
        © {new Date().getFullYear()} HQ Shawarma · Susan Road, Faisalabad
      </div>
    </footer>
  );
}
