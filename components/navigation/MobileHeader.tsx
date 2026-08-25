"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";
import { Logo } from "@/components/brand/Logo";
import { BackButton } from "./BackButton";
import { CartButton } from "./CartButton";

export function MobileHeader() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 pt-[env(safe-area-inset-top)] transition-colors duration-200",
        scrolled
          ? "border-b border-line bg-bg/85 backdrop-blur-md"
          : "border-b border-transparent bg-bg",
      )}
    >
      <div className="relative flex h-[58px] items-center justify-between px-4">
        {isHome ? (
          <Logo size="md" />
        ) : (
          <>
            <BackButton />
            {/* Truly centred regardless of side widths */}
            <div className="absolute left-1/2 -translate-x-1/2">
              <Logo size="sm" />
            </div>
          </>
        )}
        <CartButton />
      </div>
    </header>
  );
}
