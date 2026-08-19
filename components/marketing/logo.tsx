import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

const variants = {
  default: "/brand/Eyeconic_Logo_Horizontal.svg",
  white: "/brand/Eyeconic_Logo_H_White.svg",
  dark: "/brand/Eyeconic_Logo_H_Dark.svg",
} as const;

/**
 * Logo horizontal — ratio 2948.52 × 990.43.
 * Hauteur minimale 24 px (règle charte) ; zone de protection gérée par le padding parent.
 */
export function Logo({
  variant = "default",
  className,
  height = 28,
  linked = true,
}: {
  variant?: keyof typeof variants;
  className?: string;
  height?: number;
  linked?: boolean;
}) {
  const img = (
    <Image
      src={variants[variant]}
      alt="Eyeconic"
      width={Math.round(height * (2948.52 / 990.43))}
      height={height}
      priority
      className={cn("w-auto", className)}
      style={{ height }}
    />
  );
  if (!linked) return img;
  return (
    <Link href="/" aria-label="Eyeconic — accueil" className="inline-flex shrink-0">
      {img}
    </Link>
  );
}
