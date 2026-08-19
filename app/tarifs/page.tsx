import type { Metadata } from "next";
import { PricingTable } from "@/components/marketing/pricing-table";
import { PricingCompare } from "@/components/marketing/pricing-compare";
import { RoiCalculator } from "@/components/marketing/roi-calculator";
import { FaqAccordion } from "@/components/marketing/faq-accordion";
import { CtaBanner } from "@/components/marketing/cta-banner";
import { FAQ_ITEMS, TARIFS_FAQ_ITEMS } from "@/lib/faq";

export const metadata: Metadata = {
  title: "Tarifs",
  description:
    "Des prix publics, en euros : plan Boutique gratuit, Réseau à 290 €/mois, Maison sur devis. Utilisateurs illimités, facturation aux crédits IA, hébergement UE.",
};

export default function TarifsPage() {
  return (
    <div className="pt-16">
      <PricingTable />
      <PricingCompare />
      <RoiCalculator />
      <FaqAccordion items={[...FAQ_ITEMS, ...TARIFS_FAQ_ITEMS]} />
      <CtaBanner />
    </div>
  );
}
