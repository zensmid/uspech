import Link from "next/link";
import { type ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

export const buttonVariantClasses: Record<Variant, string> = {
  primary:
    "bg-accent text-accent-ink hover:bg-accent-dark",
  secondary:
    "bg-ink text-base hover:bg-ink/90",
  ghost:
    "bg-transparent text-ink border border-ink-line hover:border-ink",
};

export const buttonBaseClasses =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition-colors duration-200";

export function Button({
  href,
  variant = "primary",
  children,
  className = "",
  target,
}: {
  href: string;
  variant?: Variant;
  children: ReactNode;
  className?: string;
  target?: string;
}) {
  return (
    <Link
      href={href}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
      className={`${buttonBaseClasses} ${buttonVariantClasses[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
