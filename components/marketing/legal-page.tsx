import { Spark } from "@/components/marketing/spark";

/**
 * Legal page template — structure ready, legal copy to be validated:
 * no legally binding text is invented here.
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
          Legal
        </p>
        <h1 className="font-display text-display-l text-abyss-900">{title}</h1>
        <p className="mt-4 text-body-l text-slate-600">{intro}</p>
        <p className="mt-4 border-2 border-alert/40 bg-alert/10 px-4 py-3 text-caption text-abyss-900">
          Working document — content to be completed and validated by legal
          counsel before going live.
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
