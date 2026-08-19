import Link from "next/link";
import { SectionHeading } from "@/components/marketing/section-heading";
import { Reveal } from "@/components/marketing/reveal";

const CASES = [
  {
    eyebrow: "Pour les conseillers",
    title: "Sachez qui rappeler avant même d'ouvrir la boutique.",
  },
  {
    eyebrow: "Pour les directeurs de boutique",
    title: "Voyez l'activité de votre équipe sans réclamer un reporting.",
  },
  {
    eyebrow: "Pour le siège",
    title: "Comparez les régions sur les mêmes indicateurs, en temps réel.",
  },
];

/** Section 8 — trois cas d'usage « Pour X ». */
export function UseCases() {
  return (
    <section id="cas-usage" className="bg-ink py-20 lg:py-32">
      <div className="container-site">
        <SectionHeading
          eyebrow="Sur le terrain"
          title="Le même outil, trois métiers"
        />
        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {CASES.map((c, i) => (
            <Reveal key={c.eyebrow} delay={i}>
              <article className="notch-bl group flex h-full flex-col justify-between border-2 border-paper/14 bg-abyss-950/60 p-7 transition-colors duration-100 ease-steps-6 hover:border-paper/30 lg:p-8">
                <p className="eyebrow text-brand-400">{c.eyebrow}</p>
                <h3 className="text-h3 mt-16 font-medium text-paper lg:mt-24">
                  {c.title}
                </h3>
                <Link
                  href="/demo"
                  className="data-label mt-6 inline-flex items-center gap-2 text-caption uppercase tracking-[0.14em] text-sky-300 transition-colors group-hover:text-paper"
                >
                  Réserver une démo
                  <span aria-hidden="true">→</span>
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
