import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "brand" | "outline" | "outline-paper" | "paper";

const base =
  "inline-flex h-12 select-none items-center justify-center gap-2 rounded-md px-6 text-sm font-medium transition-all";

const variants: Record<Variant, string> = {
  /* Le seul autorisé en dégradé — 1 par écran */
  brand:
    "bg-gradient-brand text-paper shadow-card hover:shadow-card-hover",
  /* CTA secondaire sur fond clair */
  outline:
    "border border-abyss-900/20 bg-transparent text-abyss-900 hover:border-abyss-900/40 hover:bg-white",
  /* CTA secondaire sur fond dégradé ou abysse */
  "outline-paper":
    "border border-paper/40 bg-transparent text-paper hover:border-paper/80 hover:bg-paper/10",
  /* CTA principal sur fond dégradé : blanc plein, le dégradé ne se
     verrait pas sur lui-même */
  paper: "bg-white text-abyss-900 shadow-card hover:shadow-card-hover",
};

export function PixelButton({
  href,
  variant = "brand",
  className,
  children,
  ...props
}: {
  href?: string;
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
} & React.ComponentProps<"button">) {
  const classes = cn(base, variants[variant], className);
  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
