import type { Metadata } from "next";
import { Spark } from "@/components/marketing/spark";
import { PixelButton } from "@/components/marketing/pixel-button";
import { AgentCards } from "@/components/marketing/agent-cards";
import { MechanismAccordion } from "@/components/marketing/mechanism-accordion";
import { BentoGrid } from "@/components/marketing/bento-grid";
import { CtaBanner } from "@/components/marketing/cta-banner";

export const metadata: Metadata = {
  title: "Produit — la plateforme et les 5 agents",
  description:
    "La vue client unique, cinq agents IA et le pilotage de l'exécution en boutique : la plateforme Eyeconic en détail.",
};

export default function ProduitPage() {
  return (
    <div className="pt-16">
      {/* Intro produit */}
      <section className="bg-white">
        <div className="container-site py-16 text-center lg:py-24">
          <p className="eyebrow mb-4 flex items-center justify-center gap-2.5 text-brand-600">
            <Spark className="size-2.5" />
            La plateforme
          </p>
          <h1 className="font-display text-display-xl mx-auto max-w-4xl text-balance text-abyss-900">
            Voir. Agir. Prouver.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-body-l text-slate-600">
            Eyeconic réunit ce que vos clients vous disent et ce que vos
            équipes en font. La donnée client d&apos;un côté, l&apos;exécution
            en boutique de l&apos;autre, dans un seul outil.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <PixelButton href="/essai" variant="brand">
              Démarrer gratuitement
            </PixelButton>
            <PixelButton href="/demo" variant="outline">
              Réserver une démo
            </PixelButton>
          </div>
        </div>
      </section>

      <AgentCards />
      <MechanismAccordion />
      <BentoGrid />
      <CtaBanner />
    </div>
  );
}
