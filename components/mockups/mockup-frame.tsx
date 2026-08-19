import { cn } from "@/lib/utils";

/**
 * Cadre commun des mockups produit — fenêtre claire aux couleurs de
 * marque. Aucune capture d'écran n'existe : tout est HTML/CSS.
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
        "overflow-hidden rounded-lg border-2 border-abyss-900/15 bg-white shadow-card",
        className
      )}
    >
      <figcaption className="flex items-center justify-between gap-3 border-b border-abyss-900/10 bg-mist-100 px-4 py-2.5 text-caption font-medium text-abyss-900">
        <span className="flex items-center gap-2">
          <span aria-hidden="true" className="size-1.5 bg-brand-500" />
        {title}
        </span>
        <span className="text-[11px] font-normal uppercase tracking-wide text-slate-400">
          [Données démo]
        </span>
      </figcaption>
      <div className="p-4 sm:p-5">{children}</div>
    </figure>
  );
}
