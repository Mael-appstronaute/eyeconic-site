import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AGENTS, AgentAvatar } from "@/components/marketing/agent-avatar";
import { PixelButton } from "@/components/marketing/pixel-button";
import { CtaBanner } from "@/components/marketing/cta-banner";

/* Ce que chaque agent produit concrètement, en trois temps */
const MISSIONS: Record<string, [string, string][]> = {
  iris: [
    ["Connecte", "Boutiques, e-commerce, POS, messageries : toutes les sources, synchronisées dans les deux sens."],
    ["Fusionne", "Un même client sur trois systèmes devient une seule fiche, sans doublon."],
    ["Enrichit", "Chaque interaction nouvelle complète la fiche, y compris ce qui venait d'un carnet."],
  ],
  signal: [
    ["Observe", "Navigation, réachats, rythmes d'achat, silences : les signaux faibles de chaque client."],
    ["Qualifie", "Intention d'achat ou risque de décrochage — avec la raison, pas juste un score."],
    ["Alerte", "Le bon conseiller est prévenu au bon moment, dans sa journée Focus."],
  ],
  echo: [
    ["Écoute", "Le style de chaque conseiller : ses tournures, sa relation avec ce client."],
    ["Rédige", "Un brouillon dans sa voix, sur le canal que le client utilise vraiment."],
    ["S'efface", "Le conseiller relit, ajuste, envoie. Rien ne part sans lui."],
  ],
  prisme: [
    ["Segmente", "Les audiences se construisent depuis la vue client, sans export ni tableur."],
    ["Orchestre", "La campagne devient des tâches distribuées aux bonnes boutiques."],
    ["Mesure", "Chaque campagne alimente l'attribution — on sait ce qu'elle a rapporté."],
  ],
  focus: [
    ["Priorise", "Chaque matin, la journée de chaque conseiller : qui rappeler, dans quel ordre, pourquoi."],
    ["Suit", "Ce qui est fait, ce qui attend, ce qui bloque — sans réclamer de reporting."],
    ["Apprend", "Ce qui a fonctionné hier pèse sur les priorités de demain."],
  ],
};

export function generateStaticParams() {
  return AGENTS.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/produit/agents/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const agent = AGENTS.find((a) => a.slug === slug);
  if (!agent) return {};
  return {
    title: `${agent.name} — agent IA`,
    description: `${agent.name} : ${agent.role.toLowerCase()}.`,
  };
}

/* Design propre à la page : hero teinté à la couleur de l'agent. */
export default async function AgentPage({
  params,
}: PageProps<"/produit/agents/[slug]">) {
  const { slug } = await params;
  const agent = AGENTS.find((a) => a.slug === slug);
  if (!agent) notFound();
  const others = AGENTS.filter((a) => a.slug !== slug);

  return (
    <div className="pt-16">
      {/* Hero à l'accent de l'agent */}
      <section style={{ backgroundColor: `${agent.color}1f` }}>
        <div
          aria-hidden="true"
          className="h-1.5 w-full"
          style={{ backgroundColor: agent.color }}
        />
        <div className="container-site flex flex-col items-start gap-8 py-16 sm:flex-row sm:items-center lg:py-24">
          <AgentAvatar
            variant={agent.variant}
            color={agent.color}
            className="size-24 shrink-0 sm:size-32"
          />
          <div>
            <p className="eyebrow text-brand-700">Agent Eyeconic</p>
            <h1 className="font-display text-display-l mt-2 text-abyss-900">
              {agent.name}
            </h1>
            <p className="mt-3 max-w-xl text-body-l text-slate-600">
              {agent.role}.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-24">
        <div className="container-site">
          <p className="max-w-2xl text-body-l text-slate-600">{agent.detail}</p>

          <div className="mt-12 grid gap-3 sm:grid-cols-3">
            {MISSIONS[agent.slug].map(([title, text]) => (
              <div key={title} className="border-2 border-abyss-900/15 bg-paper p-6 shadow-card">
                <p
                  className="font-display text-lg font-semibold"
                  style={{ color: agent.color === "#7fb0e5" ? "#2f6fae" : agent.color }}
                >
                  {title}
                </p>
                <p className="mt-2 text-body text-slate-600">{text}</p>
              </div>
            ))}
          </div>

          {/* Les autres agents */}
          <div className="mt-14 border-t-2 border-abyss-900/10 pt-8">
            <p className="eyebrow mb-4 text-slate-400">Travaille avec</p>
            <ul className="flex flex-wrap gap-3">
              {others.map((other) => (
                <li key={other.slug}>
                  <Link
                    href={other.href}
                    className="flex items-center gap-2.5 border-2 border-abyss-900/10 bg-white py-1.5 pl-1.5 pr-4 transition-colors hover:border-brand-500/50 hover:bg-mist-100"
                  >
                    <AgentAvatar variant={other.variant} color={other.color} className="size-8" />
                    <span className="text-sm font-medium text-abyss-900">{other.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <PixelButton href="/demo" variant="brand">
              Voir {agent.name} en démo
            </PixelButton>
            <PixelButton href="/produit/agents" variant="outline">
              Tous les agents
            </PixelButton>
          </div>
        </div>
      </section>

      <CtaBanner />
    </div>
  );
}
