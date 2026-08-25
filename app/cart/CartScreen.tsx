"use client";

import { useState } from "react";
import { AnimatePresence } from "motion/react";
import { ShoppingBag } from "lucide-react";
import { useCart } from "@/lib/cart-store";
import { formatPrice } from "@/lib/format";
import { BUSINESS } from "@/lib/config";
import { Button } from "@/components/ui/Button";
import { EmptyState } from "@/components/ui/EmptyState";
import { BottomSheet } from "@/components/ui/BottomSheet";
import { CartLine } from "@/components/cart/CartLine";
import { OrderDetailsSheet } from "@/components/cart/OrderDetailsSheet";
import { WhatsAppIcon, FoodpandaIcon } from "@/components/brand/BrandIcons";

export function CartScreen() {
  const { items, itemCount, subtotal, clearCart } = useCart();
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [confirmClear, setConfirmClear] = useState(false);

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

  return (
    <div>
      <div className="px-4 py-5">
        <div className="mb-1 flex items-center justify-between">
          <h1 className="text-[28px] font-extrabold tracking-tight text-ink">
            Your order
          </h1>
          <button
            type="button"
            onClick={() => setConfirmClear(true)}
            className="-mr-3 inline-flex h-11 items-center rounded-full px-3 text-[13px] font-semibold text-muted transition-colors hover:text-error"
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
      </div>

      {/* Sticky checkout actions. The total lives here so it's always visible —
          it used to sit in the scroll area, hidden behind this bar on load. */}
      <div className="action-bar space-y-2.5 border-t border-line bg-bg/95 px-4 pt-3 backdrop-blur-md">
        <div className="flex items-baseline justify-between">
          <span className="text-[13.5px] text-ink-2">
            Total
            <span className="text-muted">
              {" "}
              · {itemCount} {itemCount === 1 ? "item" : "items"}
            </span>
          </span>
          <span className="font-display text-[22px] font-extrabold tracking-tight text-ink">
            {formatPrice(subtotal)}
          </span>
        </div>
        <Button
          type="button"
          variant="whatsapp"
          size="lg"
          fullWidth
          onClick={() => setDetailsOpen(true)}
          leftIcon={<WhatsAppIcon className="size-5" />}
        >
          Order on WhatsApp
        </Button>
        {/* Foodpanda coexists but is the secondary path (spec §6). */}
        <Button
          href={BUSINESS.foodpandaUrl}
          variant="foodpanda"
          size="md"
          fullWidth
          leftIcon={<FoodpandaIcon className="size-[18px] text-[#e91e77]" />}
        >
          Order via Foodpanda
        </Button>
        <p className="pt-0.5 text-center text-[11.5px] leading-relaxed text-muted">
          No payment here — the restaurant confirms your total on WhatsApp.
        </p>
      </div>

      <OrderDetailsSheet
        open={detailsOpen}
        onClose={() => setDetailsOpen(false)}
        items={items}
        subtotal={subtotal}
      />

      <BottomSheet
        open={confirmClear}
        onClose={() => setConfirmClear(false)}
        title="Clear your order?"
        description="This removes every item from your cart. You can’t undo it."
      >
        <div className="space-y-2.5">
          <Button
            type="button"
            variant="danger"
            size="lg"
            fullWidth
            onClick={() => {
              clearCart();
              setConfirmClear(false);
            }}
          >
            Clear order
          </Button>
          <Button
            type="button"
            variant="text"
            fullWidth
            onClick={() => setConfirmClear(false)}
          >
            Keep items
          </Button>
        </div>
      </BottomSheet>
    </div>
  );
}
