import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AGENTS, AgentAvatar } from "@/components/marketing/agent-avatar";
import { PixelButton } from "@/components/marketing/pixel-button";
import { CtaBanner } from "@/components/marketing/cta-banner";

/* What each agent concretely delivers, in three beats */
const MISSIONS: Record<string, [string, string][]> = {
  iris: [
    ["Connects", "Stores, e-commerce, POS, messaging apps: every source, synced both ways."],
    ["Merges", "The same client across three systems becomes a single profile, no duplicates."],
    ["Enriches", "Every new interaction completes the profile — including what came from a notebook."],
  ],
  signal: [
    ["Watches", "Browsing, repurchases, buying rhythms, silences: each client's weak signals."],
    ["Qualifies", "Buying intent or churn risk — with the reason, not just a score."],
    ["Alerts", "The right advisor is notified at the right time, inside their Focus day."],
  ],
  echo: [
    ["Listens", "Each advisor's style: their phrasing, their relationship with this client."],
    ["Drafts", "A message in their voice, on the channel the client actually uses."],
    ["Steps back", "The advisor reviews, adjusts, sends. Nothing goes out without them."],
  ],
  prisme: [
    ["Segments", "Audiences are built from the customer view — no exports, no spreadsheets."],
    ["Orchestrates", "The campaign becomes tasks distributed to the right stores."],
    ["Measures", "Every campaign feeds attribution — you know what it brought in."],
  ],
  focus: [
    ["Prioritizes", "Every morning, each advisor's day: who to call back, in what order, why."],
    ["Tracks", "What's done, what's waiting, what's stuck — without chasing reports."],
    ["Learns", "What worked yesterday weighs on tomorrow's priorities."],
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
    title: `${agent.name} — AI agent`,
    description: `${agent.name}: ${agent.role.toLowerCase()}.`,
  };
}

/* Page-specific design: hero tinted with the agent's color. */
export default async function AgentPage({
  params,
}: PageProps<"/produit/agents/[slug]">) {
  const { slug } = await params;
  const agent = AGENTS.find((a) => a.slug === slug);
  if (!agent) notFound();
  const others = AGENTS.filter((a) => a.slug !== slug);

  return (
    <div className="pt-16">
      {/* Hero in the agent's accent */}
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
            <p className="eyebrow text-brand-700">Eyeconic agent</p>
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

          {/* The other agents */}
          <div className="mt-14 border-t-2 border-abyss-900/10 pt-8">
            <p className="eyebrow mb-4 text-slate-400">Works with</p>
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
              See {agent.name} in a demo
            </PixelButton>
            <PixelButton href="/produit/agents" variant="outline">
              All agents
            </PixelButton>
          </div>
        </div>
      </section>

      <CtaBanner />
    </div>
  );
}
