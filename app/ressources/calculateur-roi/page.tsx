import type { Metadata } from "next";
import { RoiCalculator } from "@/components/marketing/roi-calculator";
import { CtaBanner } from "@/components/marketing/cta-banner";

export const metadata: Metadata = {
  title: "Calculateur de ROI",
  description:
    "Ce que la relance peut rapporter à votre réseau : vos hypothèses, un calcul transparent — clients relancés × conversion × panier moyen.",
};

export default function CalculateurRoiPage() {
  return (
    <div className="pt-16">
      <RoiCalculator />
      <CtaBanner />
    </div>
  );
}
