import { cn } from "@/lib/utils";

/**
 * En-tête de section : eyebrow DM Mono + titre display + intro.
 * Le titre est en Orbitron — 8 mots maximum (règle charte).
 * Les couleurs suivent le scope (:root sombre / .light).
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
            "eyebrow mb-4 flex items-center gap-2.5 text-brand-500 light:text-brand-600",
            align === "center" && "justify-center"
          )}
        >
          <span aria-hidden="true" className="size-2 bg-brand-500" />
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={cn(
          "font-display text-balance uppercase",
          level === "l" ? "text-display-l" : "text-display-m"
        )}
      >
        {title}
      </h2>
      {intro ? (
        <p className="mt-5 text-body-l text-sky-300 light:text-slate-600">
          {intro}
        </p>
      ) : null}
    </div>
  );
}
