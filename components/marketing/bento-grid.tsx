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

/* Les 5 agents en personnages stylisés — teintes de l'échelle de marque,
   du plus clair (Iris) au plus profond (Focus). */
const AGENTS = [
  { name: "Iris", color: "#7fb0e5" },
  { name: "Signal", color: "#4c92da" },
  { name: "Écho", color: "#6a94d3" },
  { name: "Prisme", color: "#2f6fae" },
  { name: "Focus", color: "#1a507c" },
];

function AgentAvatars() {
  return (
    <div className="my-auto flex justify-center gap-3 py-6">
      {AGENTS.map((agent) => (
        <div key={agent.name} className="flex flex-col items-center gap-1.5">
          <span
            className="flex size-10 items-end justify-center overflow-hidden border-2 border-abyss-900/15"
            style={{ backgroundColor: agent.color }}
          >
            {/* Silhouette tête + épaules */}
            <svg viewBox="0 0 40 34" className="w-full" aria-hidden="true">
              <circle cx="20" cy="13" r="7" fill="#f9f9f9" />
              <path d="M6 34c1.5-8 7.5-12 14-12s12.5 4 14 12Z" fill="#f9f9f9" />
            </svg>
          </span>
          <span className="text-[10px] font-medium uppercase tracking-wide text-slate-600">
            {agent.name}
          </span>
        </div>
      ))}
    </div>
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
                {cap.agents ? <AgentAvatars /> : null}
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
