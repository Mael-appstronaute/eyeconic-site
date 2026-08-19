import type { Metadata } from "next";
import { Spark } from "@/components/marketing/spark";
import { PixelButton } from "@/components/marketing/pixel-button";
import { CustomerCard } from "@/components/mockups/customer-card";
import { CtaBanner } from "@/components/marketing/cta-banner";
import { FicheMotif } from "@/components/marketing/hero-motifs";

export const metadata: Metadata = {
  title: "Vue client unique",
  description:
    "Toutes vos données client, réunies : boutique, e-commerce, POS, messageries — y compris ce qui dormait dans un carnet.",
};

const SOURCES = [
  ["Boutique", "Achats, essayages, rendez-vous"],
  ["E-commerce", "Commandes, navigation, wishlist"],
  ["POS", "Tickets, retours, avoirs"],
  ["Messageries", "WhatsApp, SMS, WeChat, LINE, e-mail"],
  ["Carnets", "Ce qui n'avait jamais été saisi"],
];

/* Design propre à la page : les sources qui convergent vers la fiche. */
export default function VueClientPage() {
  return (
    <div className="pt-16">
      <section className="relative overflow-hidden bg-white">
        <FicheMotif className="absolute -right-8 top-1/2 hidden w-[420px] -translate-y-1/2 lg:block" />
        <div className="container-site relative py-16 lg:py-24">
          <p className="eyebrow mb-4 flex items-center gap-2.5 text-brand-600">
            <Spark className="size-2.5" />
            Produit — Vue client unique
          </p>
          <h1 className="font-display text-display-l max-w-3xl text-balance text-abyss-900">
            Un client, une fiche. Enfin.
          </h1>
          <p className="mt-5 max-w-2xl text-body-l text-slate-600">
            Chaque achat, chaque message, chaque essayage, chaque
            rendez-vous. Iris relie toutes vos sources en une seule vue
            client, tenue à jour en continu.
          </p>
        </div>
      </section>

      {/* La convergence : sources → fiche */}
      <section className="bg-paper py-16 lg:py-24">
        <div className="container-site grid items-center gap-10 lg:grid-cols-[minmax(0,5fr)_auto_minmax(0,4fr)]">
          <ul className="space-y-3">
            {SOURCES.map(([name, desc]) => (
              <li
                key={name}
                className="flex items-baseline justify-between gap-4 border-2 border-abyss-900/15 bg-white px-5 py-3.5 shadow-card"
              >
                <span className="text-sm font-medium text-abyss-900">{name}</span>
                <span className="text-right text-caption text-slate-600">{desc}</span>
              </li>
            ))}
          </ul>

          <div aria-hidden="true" className="hidden flex-col items-center gap-1 lg:flex">
            <span className="text-2xl text-brand-500">→</span>
          </div>

          <CustomerCard />
        </div>

        <div className="container-site mt-12 flex flex-wrap gap-4">
          <PixelButton href="/demo" variant="brand">
            Voir sur vos données
          </PixelButton>
          <PixelButton href="/produit" variant="outline">
            Retour au produit
          </PixelButton>
        </div>
      </section>

      <CtaBanner />
    </div>
  );
}
