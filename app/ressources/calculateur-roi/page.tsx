import type { Metadata } from "next";
import { RoiCalculator } from "@/components/marketing/roi-calculator";
import { CtaBanner } from "@/components/marketing/cta-banner";
import { Spark } from "@/components/marketing/spark";
import { OperateursMotif } from "@/components/marketing/hero-motifs";

export const metadata: Metadata = {
  title: "Calculateur de ROI",
  description:
    "Ce que la relance peut rapporter à votre réseau : vos hypothèses, un calcul transparent — clients relancés × conversion × panier moyen.",
};

export default function CalculateurRoiPage() {
  return (
    <div className="pt-16">
      {/* Hero calculateur — les opérateurs du calcul */}
      <section className="relative overflow-hidden border-b-2 border-abyss-900/10 bg-mist-100">
        <OperateursMotif className="absolute -right-6 top-1/2 hidden w-[400px] -translate-y-1/2 lg:block" />
        <div className="container-site relative py-16 lg:py-20">
          <p className="eyebrow mb-4 flex items-center gap-2.5 text-brand-600">
            <Spark className="size-2.5" />
            Ressources — Calculateur
          </p>
          <h1 className="font-display text-display-l max-w-3xl text-balance text-abyss-900">
            Combien rapporte une relance bien faite ?
          </h1>
          <p className="mt-4 max-w-2xl text-body-l text-slate-600">
            Quatre curseurs, un calcul transparent, zéro promesse magique.
          </p>
        </div>
      </section>
      <RoiCalculator />
      <CtaBanner />
    </div>
  );
}
