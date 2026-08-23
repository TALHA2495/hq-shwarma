"use client";

import { useState } from "react";
import { AnimatePresence } from "motion/react";
import { ShoppingBag } from "lucide-react";
import { useCart } from "@/lib/cart-store";
import { buildCartMessage, whatsappUrl } from "@/lib/whatsapp";
import { BUSINESS } from "@/lib/config";
import { Button } from "@/components/ui/Button";
import { EmptyState } from "@/components/ui/EmptyState";
import { BottomSheet } from "@/components/ui/BottomSheet";
import { CartLine } from "@/components/cart/CartLine";
import { OrderSummary } from "@/components/cart/OrderSummary";
import { WhatsAppIcon, FoodpandaIcon } from "@/components/brand/BrandIcons";

export function CartScreen() {
  const { items, itemCount, subtotal, clearCart } = useCart();
  const [sheetOpen, setSheetOpen] = useState(false);

  if (items.length === 0) {
    return (
      <EmptyState
        icon={<ShoppingBag className="size-7" />}
        title="Your cart is empty"
        message="Add a few favourites from the menu and they’ll show up here."
        action={
          <Button href="/menu" fullWidth>
            Explore the menu
          </Button>
        }
      />
    );
  }

  const waHref = whatsappUrl(buildCartMessage(items, subtotal));

  return (
    <div>
      <div className="px-4 py-5">
        <div className="mb-1 flex items-center justify-between">
          <h1 className="text-[28px] font-extrabold tracking-tight text-ink">
            Your order
          </h1>
          <button
            type="button"
            onClick={clearCart}
            className="text-[13px] font-semibold text-muted transition-colors hover:text-error"
          >
            Clear
          </button>
        </div>

        <ul className="divide-y divide-line">
          <AnimatePresence initial={false}>
            {items.map((item) => (
              <CartLine key={item.id} item={item} />
            ))}
          </AnimatePresence>
        </ul>

        <div className="mt-5">
          <OrderSummary subtotal={subtotal} itemCount={itemCount} />
        </div>
      </div>

      {/* Sticky checkout actions — WhatsApp leads, Foodpanda coexists. */}
      <div className="sticky bottom-0 space-y-2.5 border-t border-line bg-bg/95 px-4 py-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur-md">
        <Button
          type="button"
          variant="whatsapp"
          size="lg"
          fullWidth
          onClick={() => setSheetOpen(true)}
          leftIcon={<WhatsAppIcon className="size-5" />}
        >
          Order on WhatsApp
        </Button>
        <Button
          href={BUSINESS.foodpandaUrl}
          variant="foodpanda"
          size="lg"
          fullWidth
          leftIcon={<FoodpandaIcon className="size-5 text-[#e91e77]" />}
        >
          Order via Foodpanda
        </Button>
      </div>

      <BottomSheet
        open={sheetOpen}
        onClose={() => setSheetOpen(false)}
        title="Order on WhatsApp"
        description="Your full order opens as a prefilled WhatsApp message. Nothing is charged here — the restaurant confirms details and total with you."
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
    </div>
  );
}
