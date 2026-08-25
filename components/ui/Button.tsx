import Link from "next/link";
import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "text" | "danger" | "whatsapp" | "foodpanda";
type Size = "sm" | "md" | "lg";

const VARIANTS: Record<Variant, string> = {
  primary:
    "bg-brand text-white shadow-brand hover:bg-brand-dark active:bg-brand-dark",
  secondary:
    "bg-surface text-ink border border-line-2 hover:border-ink/25 hover:bg-surface-2",
  text: "text-ink-2 hover:text-ink underline-offset-4 hover:underline",
  danger: "bg-error text-white hover:brightness-[0.94] active:brightness-90",
  // Deliberate channel colours — used only for their own action, not decoration.
  whatsapp: "bg-[#1ea952] text-white shadow-[0_8px_20px_-8px_rgba(30,169,82,0.55)] hover:bg-[#178a43]",
  foodpanda:
    "bg-white text-[#c30f5f] border border-[#f3c2d8] hover:bg-[#fdeef4]",
};

const SIZES: Record<Size, string> = {
  sm: "h-9 px-3.5 text-[13px] gap-1.5 rounded-[11px]",
  md: "h-12 px-5 text-[15px] gap-2 rounded-[14px]",
  lg: "h-[54px] px-6 text-base gap-2.5 rounded-[16px]",
};

interface CommonProps {
  variant?: Variant;
  size?: Size;
  fullWidth?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  children: ReactNode;
  className?: string;
}

type ButtonAsButton = CommonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof CommonProps> & {
    href?: undefined;
  };

type ButtonAsLink = CommonProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof CommonProps> & {
    href: string;
    /** Force an external anchor (new tab) even for non-http links. */
    external?: boolean;
  };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

function isExternalHref(href: string): boolean {
  return /^(https?:|tel:|mailto:|sms:)/.test(href);
}

export function Button(props: ButtonProps) {
  const {
    variant = "primary",
    size = "md",
    fullWidth,
    leftIcon,
    rightIcon,
    children,
    className,
  } = props;

  const classes = cn(
    "relative inline-flex select-none items-center justify-center font-semibold leading-none transition-[transform,background-color,border-color] duration-150 active:scale-[0.97] disabled:pointer-events-none disabled:opacity-50",
    VARIANTS[variant],
    SIZES[size],
    fullWidth && "w-full",
    className,
  );

  const content = (
    <>
      {leftIcon && <span className="grid shrink-0 place-items-center">{leftIcon}</span>}
      <span className="truncate">{children}</span>
      {rightIcon && <span className="grid shrink-0 place-items-center">{rightIcon}</span>}
    </>
  );

  if ("href" in props && props.href !== undefined) {
    const { href, external, ...rest } = props as ButtonAsLink;
    const openNew = external || isExternalHref(href);
    if (openNew) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
          {...stripCommon(rest)}
        >
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} {...stripCommon(rest)}>
        {content}
      </Link>
    );
  }

  const { ...rest } = props as ButtonAsButton;
  return (
    <button className={classes} {...stripCommon(rest)}>
      {content}
    </button>
  );
}

/** Remove our presentational props before spreading DOM attributes. */
function stripCommon<T extends Record<string, unknown>>(rest: T) {
  const {
    variant,
    size,
    fullWidth,
    leftIcon,
    rightIcon,
    children,
    className,
    ...dom
  } = rest as T & CommonProps;
  void variant;
  void size;
  void fullWidth;
  void leftIcon;
  void rightIcon;
  void children;
  void className;
  return dom;
}
