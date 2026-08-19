import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "brand" | "outline" | "outline-dark" | "solid-paper";

const base =
  "inline-flex h-12 select-none items-center justify-center gap-2 px-6 text-sm font-medium transition-transform duration-100 ease-steps-6 active:translate-x-[2px] active:translate-y-[2px]";

const variants: Record<Variant, string> = {
  /* Le seul autorisé en dégradé — 1 par écran */
  brand: "bg-gradient-brand notch-tr-bl text-paper",
  /* CTA secondaire sur fond sombre */
  outline:
    "border-2 border-paper/25 bg-transparent text-paper hover:border-paper/60",
  /* CTA secondaire sur fond clair */
  "outline-dark":
    "border-2 border-abyss-900/30 bg-transparent text-abyss-900 hover:border-abyss-900/70",
  /* Inversé — carte tarifs mise en avant */
  "solid-paper": "bg-ink notch-tr-bl text-paper",
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
