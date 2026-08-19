import { cn } from "@/lib/utils";
import { SectionHeading } from "@/components/marketing/section-heading";
import { Reveal } from "@/components/marketing/reveal";
import { TaskList } from "@/components/mockups/task-list";

const CAPABILITIES = [
  {
    tag: "Vue client",
    title: "Vue client unique",
    text: "Tout l'historique d'un client au même endroit, y compris ce qui n'a jamais été saisi nulle part.",
    span: "lg:col-span-2",
  },
  {
    tag: "Canaux",
    title: "Messagerie native",
    text: "WhatsApp, SMS, WeChat, LINE, e-mail. Le canal du client, pas celui de l'outil.",
    span: "",
  },
  {
    tag: "Agents",
    title: "Cinq agents IA",
    text: "Iris, Signal, Écho, Prisme et Focus travaillent pendant que vos équipes vendent.",
    span: "",
    agents: true,
  },
  {
    tag: "Exécution",
    title: "Tâches et workflows",
    text: "La journée de chaque conseiller, priorisée. Les validations, tracées.",
    span: "lg:col-span-2",
    mockup: true,
  },
  {
    tag: "Attribution",
    title: "Attribution du chiffre d'affaires",
    text: "Quel message a généré quelle vente. Par boutique, par région, par conseiller.",
    span: "lg:col-span-2",
  },
  {
    tag: "Conformité",
    title: "Sécurité européenne",
    text: "Hébergement UE, chiffrement, RGPD par conception, SSO sur le plan Maison.",
    span: "",
  },
];

/* Les 5 agents en roster — une ligne par agent : initiale sur pastille
   aux teintes de marque (du clair au profond), nom et rôle du brief. */
const AGENTS = [
  { name: "Iris", color: "#7fb0e5", role: "Construit et enrichit la vue client unique" },
  { name: "Signal", color: "#4c92da", role: "Détecte les intentions d'achat et les clients qui décrochent" },
  { name: "Écho", color: "#6a94d3", role: "Rédige le message, dans la voix du conseiller" },
  { name: "Prisme", color: "#2f6fae", role: "Orchestre les campagnes et les segments" },
  { name: "Focus", color: "#1a507c", role: "Priorise la journée de chaque conseiller" },
];

function AgentRoster() {
  return (
    <ul className="mt-5 divide-y divide-abyss-900/10 border-t-2 border-abyss-900/10">
      {AGENTS.map((agent) => (
        <li key={agent.name} className="flex items-center gap-3 py-3">
          <span
            aria-hidden="true"
            className="flex size-8 shrink-0 items-center justify-center text-sm font-semibold text-paper"
            style={{ backgroundColor: agent.color }}
          >
            {agent.name[0]}
          </span>
          <span className="min-w-0">
            <span className="block text-sm font-medium text-abyss-900">
              {agent.name}
            </span>
            <span className="block text-caption text-slate-600">
              {agent.role}
            </span>
          </span>
        </li>
      ))}
    </ul>
  );
}

/** Section 5 — grille bento des 6 capacités. Zéro icône générique. */
export function BentoGrid() {
  return (
    <section id="capacites" className="bg-paper py-20 lg:py-32">
      <div className="container-site">
        <SectionHeading
          eyebrow="Les capacités"
          title="Six capacités, un seul outil"
          intro="Ce que vos clients vous disent d'un côté, ce que vos équipes en font de l'autre."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {CAPABILITIES.map((cap, i) => (
            <Reveal key={cap.title} delay={i % 3} className={cn(cap.span)}>
              <article className="flex h-full flex-col rounded-lg border-2 border-abyss-900/15 bg-white p-6 shadow-card transition-shadow hover:shadow-card-hover lg:p-7">
                <p className="eyebrow text-brand-600">{cap.tag}</p>
                <h3 className="text-h3 mt-3 font-medium text-abyss-900">
                  {cap.title}
                </h3>
                <p className="mt-2 text-body text-slate-600">{cap.text}</p>
                {cap.agents ? <AgentRoster /> : null}
                {cap.mockup ? (
                  <div className="mt-5">
                    <TaskList />
                  </div>
                ) : null}
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
