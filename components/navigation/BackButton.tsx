"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { IconButton } from "@/components/ui/IconButton";

/** Back control that returns within-app, falling back to Home on deep links. */
export function BackButton({ fallback = "/" }: { fallback?: string }) {
  const router = useRouter();

  const goBack = () => {
    if (typeof window !== "undefined" && window.history.length > 1) {
      router.back();
    } else {
      router.push(fallback);
    }
  };

  return (
    <IconButton aria-label="Go back" onClick={goBack}>
      <ArrowLeft className="size-5" />
    </IconButton>
  );
}
