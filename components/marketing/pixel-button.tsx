import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "brand" | "outline" | "outline-paper" | "paper";

/* Arêtes dures : encoches sur les CTA pleins, bordures 2px sur les
   secondaires, enfoncement d'un cran au clic. Pas d'ombre sur les
   variantes encochées : le clip-path la rognerait. */
const base =
  "inline-flex h-12 select-none items-center justify-center gap-2 px-6 text-sm font-medium transition-all duration-100 active:translate-x-[2px] active:translate-y-[2px]";

const variants: Record<Variant, string> = {
  /* Le seul autorisé en dégradé — 1 par écran */
  brand: "bg-gradient-brand notch-tr-bl text-paper",
  /* CTA secondaire sur fond clair */
  outline:
    "border-2 border-abyss-900/30 bg-transparent text-abyss-900 hover:border-abyss-900/70 hover:bg-white",
  /* CTA secondaire sur fond dégradé ou abysse */
  "outline-paper":
    "border-2 border-paper/40 bg-transparent text-paper hover:border-paper/80 hover:bg-paper/10",
  /* CTA principal sur fond dégradé : blanc plein, le dégradé ne se
     verrait pas sur lui-même */
  paper: "notch-tr-bl bg-white text-abyss-900",
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
