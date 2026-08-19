import { SectionHeading } from "@/components/marketing/section-heading";
import { Reveal } from "@/components/marketing/reveal";
import { AGENTS, AgentAvatar } from "@/components/marketing/agent-avatar";

/** Page produit — les 5 agents en cartes détaillées. */
export function AgentCards() {
  return (
    <section id="agents" className="bg-paper py-20 lg:py-32">
      <div className="container-site">
        <SectionHeading
          eyebrow="Les 5 agents"
          title="Une équipe qui travaille pendant la vente"
          intro="Chaque agent a un métier. Ensemble, ils couvrent le cycle complet : voir, décider, écrire, orchestrer, exécuter."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {AGENTS.map((agent, i) => (
            <Reveal key={agent.name} delay={i % 3}>
              <article className="flex h-full flex-col border-2 border-abyss-900/15 bg-white p-6 shadow-card transition-shadow hover:shadow-card-hover lg:p-7">
                <div className="flex items-center gap-4">
                  <AgentAvatar
                    variant={agent.variant}
                    color={agent.color}
                    className="size-12"
                  />
                  <div>
                    <h3 className="text-h3 font-medium text-abyss-900">
                      {agent.name}
                    </h3>
                    <p className="text-caption text-brand-600">{agent.role}</p>
                  </div>
                </div>
                <p className="mt-4 text-body text-slate-600">{agent.detail}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
