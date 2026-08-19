import { cn } from "@/lib/utils";

/**
 * L'éclat de l'icône Eyeconic — motif dérivé de la marque.
 * Sert de puce de liste et de marqueur de section (jamais d'emoji, jamais d'icône générique).
 */
export function Spark({
  className,
  gradient = false,
}: {
  className?: string;
  gradient?: boolean;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={cn("size-3 shrink-0", className)}
    >
      {gradient ? (
        <defs>
          <linearGradient id="spark-gradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#4c92da" />
            <stop offset="1" stopColor="#1a507c" />
          </linearGradient>
        </defs>
      ) : null}
      <path
        d="M12 0C13.2 6.6 17.4 10.8 24 12C17.4 13.2 13.2 17.4 12 24C10.8 17.4 6.6 13.2 0 12C6.6 10.8 10.8 6.6 12 0Z"
        fill={gradient ? "url(#spark-gradient)" : "currentColor"}
      />
    </svg>
  );
}
