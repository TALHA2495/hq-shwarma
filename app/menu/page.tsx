import type { Metadata } from "next";
import { Suspense } from "react";
import { MenuScreen } from "./MenuScreen";

export const metadata: Metadata = {
  title: "Menu",
  description:
    "Browse HQ Shawarma — shawarma, paratha rolls, burgers and platters.",
};

export default function MenuPage() {
  return (
    <Suspense
      fallback={
        <div className="px-4 py-16 text-center text-sm text-muted">
          Loading menu…
        </div>
      }
    >
      <MenuScreen />
    </Suspense>
  );
}
