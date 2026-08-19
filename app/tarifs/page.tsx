import type { Metadata } from "next";
import { PricingTable } from "@/components/marketing/pricing-table";
import { PricingCompare } from "@/components/marketing/pricing-compare";
import { RoiCalculator } from "@/components/marketing/roi-calculator";
import { FaqAccordion } from "@/components/marketing/faq-accordion";
import { CtaBanner } from "@/components/marketing/cta-banner";
import { FAQ_ITEMS, TARIFS_FAQ_ITEMS } from "@/lib/faq";
import { Spark } from "@/components/marketing/spark";
import { EuroMotif } from "@/components/marketing/hero-motifs";

export const metadata: Metadata = {
  title: "Tarifs",
  description:
    "Des prix publics, en euros : plan Boutique gratuit, Réseau à 290 €/mois, Maison sur devis. Utilisateurs illimités, facturation aux crédits IA, hébergement UE.",
};

export default function TarifsPage() {
  return (
    <div className="pt-16">
      {/* Hero tarifs — le € sur grille */}
      <section className="relative overflow-hidden border-b-2 border-abyss-900/10 bg-white">
        <EuroMotif className="absolute -right-4 -top-8 hidden w-[340px] lg:block" />
        <div className="container-site relative py-16 lg:py-20">
          <p className="eyebrow mb-4 flex items-center gap-2.5 text-brand-600">
            <Spark className="size-2.5" />
            Tarifs
          </p>
          <h1 className="font-display text-display-l max-w-3xl text-balance text-abyss-900">
            Des prix publics, en euros.
          </h1>
          <p className="mt-4 max-w-2xl text-body-l text-slate-600">
            Un plan gratuit, un essai en self-service, une facturation aux
            crédits IA — pas au siège.
          </p>
        </div>
      </section>
      <PricingTable withHeading={false} />
      <PricingCompare />
      <RoiCalculator />
      <FaqAccordion items={[...FAQ_ITEMS, ...TARIFS_FAQ_ITEMS]} />
      <CtaBanner />
    </div>
  );
}
