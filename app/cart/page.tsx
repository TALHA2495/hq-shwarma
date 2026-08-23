import type { Metadata } from "next";
import { CartScreen } from "./CartScreen";

export const metadata: Metadata = {
  title: "Your order",
};

export default function CartPage() {
  return <CartScreen />;
}
