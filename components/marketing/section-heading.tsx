import { cn } from "@/lib/utils";
import { Spark } from "@/components/marketing/spark";

/**
 * En-tête de section : eyebrow + titre display + intro.
 * Le titre est en Orbitron — 8 mots maximum (règle charte).
 */
export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  level = "l",
  className,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
  level?: "l" | "m";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow ? (
        <p
          className={cn(
            "eyebrow mb-4 flex items-center gap-2.5 text-brand-600 dark:text-sky-500",
            align === "center" && "justify-center"
          )}
        >
          <Spark className="size-2.5" />
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={cn(
          "font-display text-balance",
          level === "l" ? "text-display-l" : "text-display-m"
        )}
      >
        {title}
      </h2>
      {intro ? (
        <p className="mt-5 text-body-l text-slate-600 dark:text-sky-300">
          {intro}
        </p>
      ) : null}
    </div>
  );
}
