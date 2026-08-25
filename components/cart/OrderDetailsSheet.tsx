"use client";

import { useMemo, useState, type ReactNode } from "react";
import type { CartItem } from "@/lib/cart-store";
import {
  AVAILABLE_ORDER_TYPES,
  ORDER_TYPE_LABEL,
  buildCartMessage,
  whatsappUrl,
  type OrderDetails,
  type OrderType,
} from "@/lib/whatsapp";
import { cn } from "@/lib/cn";
import { Button } from "@/components/ui/Button";
import { BottomSheet } from "@/components/ui/BottomSheet";
import { WhatsAppIcon } from "@/components/brand/BrandIcons";

const DEFAULT_TYPE: OrderType = AVAILABLE_ORDER_TYPES[0] ?? "pickup";

/**
 * Collects optional order details, then hands the full order to WhatsApp.
 * Every field is optional: the goal is to make the message the restaurant
 * receives more useful, not to gate the order behind a form.
 */
export function OrderDetailsSheet({
  open,
  onClose,
  items,
  subtotal,
}: {
  open: boolean;
  onClose: () => void;
  items: CartItem[];
  subtotal: number;
}) {
  const [orderType, setOrderType] = useState<OrderType>(DEFAULT_TYPE);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [notes, setNotes] = useState("");

  const details: OrderDetails = { orderType, name, phone, address, notes };
  const waHref = useMemo(
    () => whatsappUrl(buildCartMessage(items, subtotal, details)),
    // Rebuild whenever the order or any field changes.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [items, subtotal, orderType, name, phone, address, notes],
  );

  const showTypeToggle = AVAILABLE_ORDER_TYPES.length > 1;

  return (
    <BottomSheet
      open={open}
      onClose={onClose}
      title="Order details"
      description="Optional — anything you add here helps us prepare your order. Then continue to WhatsApp to send it."
    >
      <div className="space-y-4">
        {showTypeToggle && (
          <div>
            <FieldLabel>Order type</FieldLabel>
            <div
              role="radiogroup"
              aria-label="Order type"
              className="mt-1.5 grid grid-cols-2 gap-2"
            >
              {AVAILABLE_ORDER_TYPES.map((t) => {
                const active = orderType === t;
                return (
                  <button
                    key={t}
                    type="button"
                    role="radio"
                    aria-checked={active}
                    onClick={() => setOrderType(t)}
                    className={cn(
                      "h-12 rounded-[14px] border text-[14px] font-semibold transition-colors",
                      active
                        ? "border-brand bg-brand-tint text-brand"
                        : "border-line bg-surface text-ink-2 hover:text-ink",
                    )}
                  >
                    {ORDER_TYPE_LABEL[t]}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        <Field label="Name" htmlFor="od-name">
          <input
            id="od-name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            autoComplete="name"
            placeholder="Your name"
            className={inputClass}
          />
        </Field>

        <Field label="Phone" htmlFor="od-phone">
          <input
            id="od-phone"
            type="tel"
            inputMode="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            autoComplete="tel"
            placeholder="Number we can reach you on"
            className={inputClass}
          />
        </Field>

        {orderType === "delivery" && (
          <Field label="Address" htmlFor="od-address">
            <input
              id="od-address"
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              autoComplete="street-address"
              placeholder="Where should we deliver?"
              className={inputClass}
            />
          </Field>
        )}

        <Field label="Notes" htmlFor="od-notes">
          <textarea
            id="od-notes"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            rows={2}
            placeholder="Extra sauce, no onions, spice level…"
            className={cn(inputClass, "h-auto resize-none py-3 leading-relaxed")}
          />
        </Field>

        <div className="space-y-2.5 pt-1">
          <Button
            href={waHref}
            variant="whatsapp"
            size="lg"
            fullWidth
            leftIcon={<WhatsAppIcon className="size-5" />}
            onClick={onClose}
          >
            Continue to WhatsApp
          </Button>
          <Button type="button" variant="text" fullWidth onClick={onClose}>
            Go back
          </Button>
        </div>
      </div>
    </BottomSheet>
  );
}

const inputClass =
  "h-12 w-full rounded-[14px] border border-line bg-surface-2 px-3.5 text-[15px] text-ink placeholder:text-muted focus:border-brand focus:bg-surface focus:outline-none";

function FieldLabel({ children }: { children: ReactNode }) {
  return (
    <span className="text-[12.5px] font-semibold uppercase tracking-wide text-muted">
      {children}
    </span>
  );
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: ReactNode;
}) {
  return (
    <label htmlFor={htmlFor} className="block">
      <FieldLabel>{label}</FieldLabel>
      <div className="mt-1.5">{children}</div>
    </label>
  );
}
