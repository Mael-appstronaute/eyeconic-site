import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "brand" | "outline" | "outline-paper" | "paper";
type Size = "sm" | "md";

/**
 * Bouton canonique du site (déclinaison du CTA hero validé) :
 * pilule au dégradé de marque avec reflet intérieur, halo bleu et
 * pastille flèche blanche qui glisse au survol. Les variantes
 * secondaires sont des pilules simples assorties.
 */
const SIZES: Record<Size, { btn: string; plain: string; circle: string; icon: string }> = {
  md: {
    btn: "gap-3 py-2.5 pl-7 pr-2.5 text-base",
    plain: "px-7 py-3.5 text-base",
    circle: "size-9",
    icon: "size-4",
  },
  sm: {
    btn: "gap-2 py-1.5 pl-5 pr-1.5 text-sm",
    plain: "px-5 py-2.5 text-sm",
    circle: "size-8",
    icon: "size-3.5",
  },
};

function Arrow({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" className={className} aria-hidden="true">
      <path d="M3 8h10M9 4l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function PixelButton({
  href,
  variant = "brand",
  size = "md",
  className,
  children,
  ...props
}: {
  href?: string;
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
} & React.ComponentProps<"button">) {
  const s = SIZES[size];
  const withCircle = variant === "brand" || variant === "paper";

  const classes = cn(
    "group/btn inline-flex select-none items-center justify-center rounded-full font-semibold transition-all duration-200",
    withCircle ? s.btn : s.plain,
    variant === "brand" &&
      "bg-gradient-brand text-paper hover:scale-[1.03] hover:brightness-110 [box-shadow:inset_0_1px_0_rgba(255,255,255,0.35),0_20px_50px_rgba(76,146,218,0.45)]",
    variant === "paper" &&
      "bg-white text-abyss-950 shadow-[0_16px_40px_rgba(6,51,90,0.18)] hover:scale-[1.03]",
    variant === "outline" &&
      "border border-abyss-900/20 bg-transparent font-medium text-abyss-900 hover:border-abyss-900/40 hover:bg-white",
    variant === "outline-paper" &&
      "border border-paper/40 bg-transparent font-medium text-paper hover:border-paper/80 hover:bg-paper/10",
    className
  );

  const circle = withCircle ? (
    <span
      className={cn(
        "flex shrink-0 items-center justify-center rounded-full shadow-sm transition-transform duration-200 group-hover/btn:translate-x-0.5",
        s.circle,
        variant === "brand" ? "bg-white text-brand-600" : "bg-gradient-brand text-paper"
      )}
    >
      <Arrow className={s.icon} />
    </span>
  ) : null;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
        {circle}
      </Link>
    );
  }
  return (
    <button className={classes} {...props}>
      {children}
      {circle}
    </button>
  );
}
