import type { Metadata } from "next";
import { Spark } from "@/components/marketing/spark";
import { AGENTS, AgentAvatar } from "@/components/marketing/agent-avatar";
import { AgentCards } from "@/components/marketing/agent-cards";
import { CtaBanner } from "@/components/marketing/cta-banner";

export const metadata: Metadata = {
  title: "Les 5 agents",
  description:
    "Iris, Signal, Écho, Prisme et Focus : cinq agents IA qui travaillent pendant que vos équipes vendent.",
};

/* Design propre à la page : le hero « équipe alignée », avatars XL. */
export default function AgentsPage() {
  return (
    <div className="pt-16">
      <section className="bg-white">
        <div className="container-site py-16 text-center lg:py-24">
          <p className="eyebrow mb-4 flex items-center justify-center gap-2.5 text-brand-600">
            <Spark className="size-2.5" />
            Produit — Les 5 agents
          </p>
          <h1 className="font-display text-display-l mx-auto max-w-3xl text-balance text-abyss-900">
            Cinq métiers, une équipe.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-body-l text-slate-600">
            Ils ne remplacent pas vos conseillers : ils leur préparent le
            terrain. Voir, décider, écrire, orchestrer, exécuter.
          </p>

          <div className="mx-auto mt-12 flex max-w-2xl items-end justify-center gap-4 sm:gap-6">
            {AGENTS.map((agent, i) => (
              <a
                key={agent.name}
                href={agent.href}
                className="group flex flex-col items-center gap-2"
                style={{ marginBottom: `${(i % 2) * 12}px` }}
              >
                <AgentAvatar
                  variant={agent.variant}
                  color={agent.color}
                  className="size-16 transition-transform group-hover:-translate-y-1 sm:size-20"
                />
                <span className="text-sm font-medium text-abyss-900 group-hover:text-brand-600">
                  {agent.name}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <AgentCards />
      <CtaBanner />
    </div>
  );
}
