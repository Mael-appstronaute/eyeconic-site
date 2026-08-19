import { cn } from "@/lib/utils";

/**
 * Cadre commun des mockups produit — fenêtre hard-edge aux couleurs
 * de marque. Aucune capture d'écran n'existe : tout est HTML/CSS.
 */
export function MockupFrame({
  title,
  children,
  className,
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <figure
      className={cn(
        "notch-tr border-2 border-paper/20 bg-abyss-950 shadow-hard",
        className
      )}
    >
      <figcaption className="data-label flex items-center justify-between gap-3 border-b-2 border-paper/14 px-4 py-2.5 text-caption uppercase tracking-[0.14em] text-sky-300">
        <span className="flex items-center gap-2">
          <span aria-hidden="true" className="size-1.5 bg-brand-500" />
          {title}
        </span>
        <span className="text-[10px] text-slate-400">[Données démo]</span>
      </figcaption>
      <div className="p-4 sm:p-5">{children}</div>
    </figure>
  );
}
