import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export function Divider({ className }: { className?: string }) {
  return <hr className={cn("border-0 border-t border-line", className)} />;
}

export function EmptyState({
  icon,
  title,
  message,
  action,
  className,
}: {
  icon: ReactNode;
  title: string;
  message: string;
  action?: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col items-center px-6 py-16 text-center",
        className,
      )}
    >
      <div className="mb-5 grid size-16 place-items-center rounded-full bg-brand-tint text-brand">
        {icon}
      </div>
      <h2 className="text-xl font-bold text-ink">{title}</h2>
      <p className="mt-1.5 max-w-[15rem] text-sm leading-relaxed text-ink-2">
        {message}
      </p>
      {action && <div className="mt-6 w-full max-w-[15rem]">{action}</div>}
    </div>
  );
}
