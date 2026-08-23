import type { Metadata } from "next";
import { Phone } from "lucide-react";
import { BUSINESS } from "@/lib/config";
import { whatsappUrl } from "@/lib/whatsapp";
import { Button } from "@/components/ui/Button";
import { LocationCard } from "@/components/location/LocationCard";
import { WhatsAppIcon, FoodpandaIcon } from "@/components/brand/BrandIcons";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${BUSINESS.name} — WhatsApp, call, or find us on ${BUSINESS.area}.`,
};

const telHref = `tel:${BUSINESS.phone.replace(/[^\d+]/g, "")}`;
const waHref = whatsappUrl(
  `Assalam o Alaikum, I have a question about ${BUSINESS.name}.`,
);

export default function ContactPage() {
  return (
    <div className="space-y-6 px-4 py-6">
      <div>
        <h1 className="text-[28px] font-extrabold tracking-tight text-ink">
          Get in touch
        </h1>
        <p className="mt-1 text-[14px] text-ink-2">
          Order, ask a question, or find your way over.
        </p>
      </div>

      <div className="space-y-2.5">
        <Button
          href={waHref}
          variant="whatsapp"
          size="lg"
          fullWidth
          leftIcon={<WhatsAppIcon className="size-5" />}
        >
          Message on WhatsApp
        </Button>
        <Button
          href={telHref}
          variant="secondary"
          size="lg"
          fullWidth
          leftIcon={<Phone className="size-5" />}
        >
          Call {BUSINESS.phone}
        </Button>
      </div>

      <LocationCard />

      <div className="rounded-[18px] border border-line bg-surface p-4 shadow-card">
        <p className="text-[13.5px] leading-relaxed text-ink-2">
          Prefer an app? You can also order for delivery on Foodpanda.
        </p>
        <div className="mt-3">
          <Button
            href={BUSINESS.foodpandaUrl}
            variant="foodpanda"
            fullWidth
            leftIcon={<FoodpandaIcon className="size-5 text-[#e91e77]" />}
          >
            Order via Foodpanda
          </Button>
        </div>
      </div>
    </div>
  );
}
