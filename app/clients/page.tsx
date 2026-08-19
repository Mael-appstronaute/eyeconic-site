import type { Metadata } from "next";
import { Spark } from "@/components/marketing/spark";
import { CtaBanner } from "@/components/marketing/cta-banner";

export const metadata: Metadata = {
  title: "Études de cas",
  description:
    "Comment des marques retail font travailler leur donnée client avec Eyeconic — exemples illustratifs.",
};

/* Mêmes maisons fictives que le carrousel — cohérence du récit. */
const CAS = [
  {
    brand: "Groupe Delcourt",
    sector: "Luxe — 214 boutiques, 12 pays",
    story:
      "Quatre plateformes comparées sur un trimestre, un déploiement en 11 semaines, et une règle : aucun outil que les équipes n'ouvrent pas d'elles-mêmes.",
    kpis: [
      ["+31 %", "CA attribué, périmètre Europe"],
      ["11 sem.", "Déploiement complet"],
    ],
    big: true,
  },
  {
    brand: "Maison Séverin",
    sector: "Joaillerie — 14 boutiques",
    story:
      "Sortir la relation des carnets sans la déshumaniser : les conseillères gardent leur voix, la maison gagne une mémoire.",
    kpis: [
      ["+38 %", "Taux de réponse"],
      ["×2,3", "Réachat des VIC"],
    ],
  },
  {
    brand: "ORVEA Paris",
    sector: "Mode premium — 46 boutiques",
    story:
      "Réconcilier le online et la boutique, et transformer le clienteling en ligne de reporting.",
    kpis: [
      ["+27 %", "CA attribué"],
      ["92 %", "Adoption conseillers"],
    ],
  },
  {
    brand: "Linéa Beauté",
    sector: "Beauté & spa — 28 points de vente",
    story:
      "Un pilote sur trois instituts devenu un standard d'enseigne en six semaines.",
    kpis: [
      ["+45 %", "Rendez-vous pris"],
      ["−22 %", "Clientes sans contact 90 j"],
    ],
  },
  {
    brand: "Aurige",
    sector: "Horlogerie — 37 boutiques et corners",
    story:
      "Des cycles d'achat de plusieurs années, enfin entretenus entre deux ventes.",
    kpis: [
      ["×1,8", "Rendez-vous atelier"],
      ["68 %", "VIC recontactés au trimestre"],
    ],
  },
];

/* Design propre à la page : grille magazine, première étude en pleine largeur. */
export default function ClientsPage() {
  return (
    <div className="pt-16">
      <section className="bg-white">
        <div className="container-site py-16 lg:py-24">
          <p className="eyebrow mb-4 flex items-center gap-2.5 text-brand-600">
            <Spark className="size-2.5" />
            Études de cas
          </p>
          <h1 className="font-display text-display-l max-w-3xl text-balance text-abyss-900">
            Des marques qui vendent par la relation.
          </h1>
          <p className="mt-4 max-w-2xl text-body-l text-slate-600">
            Exemples illustratifs — marques et chiffres fictifs, en attendant
            les premières références publiques.
          </p>
        </div>
      </section>

      <section className="bg-paper pb-20 lg:pb-32">
        <div className="container-site grid gap-6 lg:grid-cols-2">
          {CAS.map((c) => (
            <article
              key={c.brand}
              className={
                c.big
                  ? "dark bg-abyss-900 p-8 shadow-card-hover lg:col-span-2 lg:p-12"
                  : "border-2 border-abyss-900/15 bg-white p-8 shadow-card"
              }
            >
              <p className={`eyebrow ${c.big ? "text-sky-500" : "text-brand-600"}`}>
                {c.sector}
              </p>
              <h2
                className={`font-display text-display-m mt-3 ${c.big ? "text-paper" : "text-abyss-900"}`}
              >
                {c.brand}
              </h2>
              <p className={`mt-3 max-w-2xl text-body-l ${c.big ? "text-sky-300" : "text-slate-600"}`}>
                {c.story}
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                {c.kpis.map(([value, label]) => (
                  <div
                    key={label}
                    className={c.big ? "bg-abyss-950/60 px-5 py-3" : "bg-mist-100 px-5 py-3"}
                  >
                    <p className={`font-display text-2xl font-bold ${c.big ? "text-paper" : "text-abyss-900"}`}>
                      {value}
                    </p>
                    <p className={`mt-0.5 text-[11px] font-medium uppercase tracking-wide ${c.big ? "text-sky-300" : "text-slate-600"}`}>
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <CtaBanner />
    </div>
  );
}
