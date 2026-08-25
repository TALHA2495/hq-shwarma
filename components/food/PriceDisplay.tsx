import { formatPrice } from "@/lib/format";
import { cn } from "@/lib/cn";

export function PriceDisplay({
  amount,
  size = "md",
  className,
}: {
  amount: number;
  size?: "sm" | "md" | "lg";
  className?: string;
}) {
  const sizes = {
    sm: "text-[15px]",
    md: "text-[17px]",
    // 23px, deliberately a step below the 26px product <h1> so the name stays
    // the loudest thing on the page and the price reads as its answer.
    lg: "text-[23px]",
  }[size];
  return (
    <span
      className={cn(
        "font-display font-extrabold tracking-tight text-ink",
        sizes,
        className,
      )}
    >
      {formatPrice(amount)}
    </span>
  );
}
