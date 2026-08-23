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
    lg: "text-[26px]",
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
