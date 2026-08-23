import { MapPin, Navigation, Phone } from "lucide-react";
import { BUSINESS } from "@/lib/config";
import { cn } from "@/lib/cn";
import { Button } from "@/components/ui/Button";

const telHref = `tel:${BUSINESS.phone.replace(/[^\d+]/g, "")}`;

/**
 * Location panel: a stylised (decorative, not live) map strip, the address,
 * and the two actions that matter on mobile — directions and a phone call.
 */
export function LocationCard({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-[18px] border border-line bg-surface shadow-card",
        className,
      )}
    >
      {/* Decorative map motif — clearly not a real map, just a warm backdrop. */}
      <div
        className="relative h-28 bg-surface-2"
        aria-hidden="true"
        style={{
          backgroundImage:
            "linear-gradient(var(--color-line) 1px, transparent 1px), linear-gradient(90deg, var(--color-line) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute left-1/2 top-1/2 h-px w-[140%] -translate-x-1/2 -translate-y-1/2 -rotate-[18deg] bg-line-2" />
        <div className="absolute left-1/2 top-1/2 grid -translate-x-1/2 -translate-y-1/2 place-items-center">
          <span className="grid size-10 place-items-center rounded-full bg-brand text-white shadow-brand">
            <MapPin className="size-5" strokeWidth={2.25} />
          </span>
        </div>
      </div>

      <div className="p-4">
        <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-brand">
          Visit us
        </p>
        <p className="mt-1 text-[15px] font-bold text-ink">{BUSINESS.name}</p>
        <p className="mt-0.5 text-[13.5px] leading-relaxed text-ink-2">
          {BUSINESS.addressLine}
        </p>

        <div className="mt-4 grid grid-cols-2 gap-2.5">
          <Button
            href={BUSINESS.mapsUrl}
            variant="secondary"
            leftIcon={<Navigation className="size-4" />}
          >
            Directions
          </Button>
          <Button
            href={telHref}
            variant="secondary"
            leftIcon={<Phone className="size-4" />}
          >
            Call
          </Button>
        </div>
      </div>
    </div>
  );
}
