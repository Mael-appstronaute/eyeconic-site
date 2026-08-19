import type { Metadata } from "next";
import { Spark } from "@/components/marketing/spark";
import { PixelButton } from "@/components/marketing/pixel-button";
import { EclatMotif } from "@/components/marketing/hero-motifs";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "Eyeconic réunit ce que vos clients vous disent et ce que vos équipes en font. Pourquoi nous construisons cet outil, et comment.",
};

const CONVICTIONS = [
  [
    "Le conseiller d'abord",
    "Un outil de clienteling qui n'est pas ouvert par les vendeurs ne sert à rien. Chaque écran est pensé pour quelqu'un qui est debout, en boutique, entre deux clients.",
  ],
  [
    "L'IA qui s'efface",
    "Nos agents préparent, priorisent, rédigent — mais la relation appartient au conseiller. Rien ne part sans une main humaine.",
  ],
  [
    "La preuve, pas la promesse",
    "Le clienteling a toujours souffert de ne pas se mesurer. L'attribution est dans le produit depuis le premier jour, pas dans un module en option.",
  ],
];

/* Design propre à la page : manifeste typographique sur brume. */
export default function AProposPage() {
  return (
    <div className="pt-16">
      {/* Manifeste */}
      <section className="relative overflow-hidden bg-mist-100">
        <EclatMotif className="absolute -right-20 -top-20 hidden w-[440px] lg:block" />
        <div className="container-site relative py-20 lg:py-32">
          <p className="eyebrow mb-6 flex items-center gap-2.5 text-brand-600">
            <Spark className="size-2.5" />
            À propos
          </p>
          <p className="font-display text-display-l max-w-4xl text-balance text-abyss-900">
            Eyeconic réunit ce que vos clients vous disent et ce que vos
            équipes en font.
          </p>
          <p className="mt-8 max-w-2xl text-body-l text-slate-600">
            La donnée client d&apos;un côté, l&apos;exécution en boutique de
            l&apos;autre, dans un seul outil. Nous construisons Eyeconic pour
            les marques premium et luxe de 5 à 300 points de vente — et
            d&apos;abord pour celles et ceux qui vendent.
          </p>
        </div>
      </section>

      {/* Convictions */}
      <section className="bg-paper py-16 lg:py-24">
        <div className="container-site">
          <div className="grid gap-x-10 gap-y-12 lg:grid-cols-3">
            {CONVICTIONS.map(([title, text]) => (
              <div key={title} className="border-t-4 border-brand-500 pt-5">
                <h2 className="text-h3 font-medium text-abyss-900">{title}</h2>
                <p className="mt-3 text-body text-slate-600">{text}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 border-2 border-abyss-900/15 bg-white p-8 shadow-card lg:p-10">
            <p className="eyebrow text-brand-600">L&apos;équipe</p>
            <p className="mt-3 max-w-2xl text-body-l text-slate-600">
              Une équipe issue du retail, de la CRM et du produit.
              Portraits et parcours à venir —{" "}
              <span className="text-slate-400">[Équipe à présenter]</span>.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <PixelButton href="/contact" variant="brand">
                Nous écrire
              </PixelButton>
              <PixelButton href="/demo" variant="outline">
                Réserver une démo
              </PixelButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
