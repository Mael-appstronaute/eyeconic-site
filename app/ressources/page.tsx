import type { Metadata } from "next";
import Link from "next/link";
import { Spark } from "@/components/marketing/spark";
import { CtaBanner } from "@/components/marketing/cta-banner";
import { PilesMotif } from "@/components/marketing/hero-motifs";

export const metadata: Metadata = {
  title: "Ressources",
  description:
    "Analyses retail et CRM, calculateur de ROI, études de cas et documentation sécurité : le hub ressources d'Eyeconic.",
};

const RESSOURCES = [
  {
    tag: "Blog",
    title: "Analyses retail et CRM",
    desc: "Le clienteling, la first-party data et l'exécution en boutique, une fois par mois.",
    href: "/ressources/blog",
  },
  {
    tag: "Outil",
    title: "Calculateur de ROI",
    desc: "Vos hypothèses, un calcul transparent : ce que la relance peut rapporter à votre réseau.",
    href: "/ressources/calculateur-roi",
  },
  {
    tag: "Preuves",
    title: "Études de cas",
    desc: "Comment des marques font travailler leur donnée client, boutique par boutique.",
    href: "/clients",
  },
  {
    tag: "Confiance",
    title: "Sécurité et RGPD",
    desc: "Hébergement UE, chiffrement, conformité : la fiche technique complète.",
    href: "/securite",
  },
];

/* Design propre à la page : index éditorial en deux colonnes larges. */
export default function RessourcesPage() {
  return (
    <div className="pt-16">
      <section className="relative overflow-hidden bg-white">
        <PilesMotif className="absolute -right-4 -top-6 hidden w-[360px] lg:block" />
        <div className="container-site relative py-16 lg:py-24">
          <p className="eyebrow mb-4 flex items-center gap-2.5 text-brand-600">
            <Spark className="size-2.5" />
            Ressources
          </p>
          <h1 className="font-display text-display-l max-w-3xl text-balance text-abyss-900">
            De quoi décider, pas juste lire.
          </h1>
        </div>
      </section>

      <section className="bg-paper pb-20 lg:pb-32">
        <div className="container-site grid gap-6 sm:grid-cols-2">
          {RESSOURCES.map((r) => (
            <Link
              key={r.href}
              href={r.href}
              className="group flex flex-col border-2 border-abyss-900/15 bg-white p-8 shadow-card transition-shadow hover:shadow-card-hover"
            >
              <p className="eyebrow text-brand-600">{r.tag}</p>
              <h2 className="font-display text-display-m mt-3 text-abyss-900">
                {r.title}
              </h2>
              <p className="mt-3 grow text-body text-slate-600">{r.desc}</p>
              <span className="mt-6 text-sm font-medium text-brand-600 transition-transform group-hover:translate-x-0.5">
                Consulter →
              </span>
            </Link>
          ))}
        </div>
      </section>

      <CtaBanner />
    </div>
  );
}
