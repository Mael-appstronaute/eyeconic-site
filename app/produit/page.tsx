import type { Metadata } from "next";
import { Spark } from "@/components/marketing/spark";
import { PixelButton } from "@/components/marketing/pixel-button";
import { AgentCards } from "@/components/marketing/agent-cards";
import { MechanismAccordion } from "@/components/marketing/mechanism-accordion";
import { BentoGrid } from "@/components/marketing/bento-grid";
import { CtaBanner } from "@/components/marketing/cta-banner";
import { AnneauxMotif } from "@/components/marketing/hero-motifs";

export const metadata: Metadata = {
  title: "Product — the platform and the 5 agents",
  description:
    "The single customer view, five AI agents and in-store execution management: the Eyeconic platform in detail.",
};

export default function ProduitPage() {
  return (
    <div className="pt-16">
      {/* Product intro */}
      <section className="relative overflow-hidden bg-white">
        <AnneauxMotif className="absolute -left-16 top-1/2 hidden w-[340px] -translate-y-1/2 lg:block" />
        <AnneauxMotif className="absolute -right-16 top-1/2 hidden w-[340px] -translate-y-1/2 lg:block" />
        <div className="container-site relative py-16 text-center lg:py-24">
          <p className="eyebrow mb-4 flex items-center justify-center gap-2.5 text-brand-600">
            <Spark className="size-2.5" />
            The platform
          </p>
          <h1 className="font-display text-display-xl mx-auto max-w-4xl text-balance text-abyss-900">
            See. Act. Prove.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-body-l text-slate-600">
            Eyeconic brings together what your clients tell you and what your
            teams do with it. Customer data on one side, in-store execution
            on the other — in a single tool.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <PixelButton href="/essai" variant="brand">
              Start for free
            </PixelButton>
            <PixelButton href="/demo" variant="outline">
              Book a demo
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
