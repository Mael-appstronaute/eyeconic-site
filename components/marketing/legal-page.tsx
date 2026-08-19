import { Spark } from "@/components/marketing/spark";

/**
 * Gabarit des pages légales — structure prête, contenus juridiques à
 * faire valider : aucun texte à valeur légale n'est inventé ici.
 */
export function LegalPage({
  title,
  intro,
  sections,
}: {
  title: string;
  intro: string;
  sections: { heading: string; body: string }[];
}) {
  return (
    <div className="bg-paper pt-16">
      <div className="container-site max-w-3xl py-16 lg:py-24">
        <p className="eyebrow mb-4 flex items-center gap-2.5 text-brand-600">
          <Spark className="size-2.5" />
          Légal
        </p>
        <h1 className="font-display text-display-l text-abyss-900">{title}</h1>
        <p className="mt-4 text-body-l text-slate-600">{intro}</p>
        <p className="mt-4 border-2 border-alert/40 bg-alert/10 px-4 py-3 text-caption text-abyss-900">
          Document de travail — contenus à compléter et à faire valider par
          un conseil juridique avant mise en ligne.
        </p>

        <div className="mt-12 space-y-10">
          {sections.map((s) => (
            <section key={s.heading}>
              <h2 className="text-h3 font-medium text-abyss-900">{s.heading}</h2>
              <p className="mt-2 text-body text-slate-600">{s.body}</p>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
