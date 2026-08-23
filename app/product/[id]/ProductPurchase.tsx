"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { useCart } from "@/lib/cart-store";
import { useToast } from "@/lib/toast";
import { formatPrice } from "@/lib/format";
import { buildProductMessage, whatsappUrl } from "@/lib/whatsapp";
import type { MenuItem } from "@/lib/menu-data";
import { Button } from "@/components/ui/Button";
import { QuantityStepper } from "@/components/ui/QuantityStepper";
import { BottomSheet } from "@/components/ui/BottomSheet";
import { WhatsAppIcon } from "@/components/brand/BrandIcons";

/** Quantity + the two order actions + a sticky bottom CTA for a product. */
export function ProductPurchase({ item }: { item: MenuItem }) {
  const { addItem } = useCart();
  const { toast } = useToast();
  const [qty, setQty] = useState(1);
  const [sheetOpen, setSheetOpen] = useState(false);

  const lineTotal = item.price * qty;
  const waHref = whatsappUrl(buildProductMessage(item, qty));

  const addToCart = () => {
    addItem(item, qty);
    toast(`Added ${qty} × ${item.name}`);
  };

  return (
    <>
      <div className="mt-6 flex items-center justify-between">
        <span className="text-[14px] font-semibold text-ink">Quantity</span>
        <QuantityStepper
          value={qty}
          onIncrement={() => setQty((q) => q + 1)}
          onDecrement={() => setQty((q) => Math.max(1, q - 1))}
        />
      </div>

      {/* Sticky action bar — stays pinned above the footer while scrolling. */}
      <div className="sticky bottom-0 -mx-4 mt-8 border-t border-line bg-bg/95 px-4 py-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur-md">
        <div className="grid grid-cols-[1.6fr_1fr] gap-2.5">
          <Button
            type="button"
            size="lg"
            onClick={addToCart}
            leftIcon={<Plus className="size-[18px]" strokeWidth={2.75} />}
          >
            Add · {formatPrice(lineTotal)}
          </Button>
          <Button
            type="button"
            size="lg"
            variant="whatsapp"
            onClick={() => setSheetOpen(true)}
            leftIcon={<WhatsAppIcon className="size-5" />}
          >
            Order
          </Button>
        </div>
      </div>

      <BottomSheet
        open={sheetOpen}
        onClose={() => setSheetOpen(false)}
        title="Order on WhatsApp"
        description="Your order opens as a prefilled WhatsApp message. Nothing is charged here — the restaurant confirms details with you."
      >
        <div className="space-y-2.5">
          <Button
            href={waHref}
            variant="whatsapp"
            size="lg"
            fullWidth
            leftIcon={<WhatsAppIcon className="size-5" />}
            onClick={() => setSheetOpen(false)}
          >
            Continue to WhatsApp
          </Button>
          <Button
            type="button"
            variant="text"
            fullWidth
            onClick={() => setSheetOpen(false)}
          >
            Go back
          </Button>
        </div>
      </BottomSheet>
    </>
  );
}
