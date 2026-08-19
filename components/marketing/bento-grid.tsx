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

/* Les 5 agents en groupe illustré — silhouettes distinctes (coiffures,
   tailles), teintes de l'échelle de marque du plus clair (Iris) au plus
   profond (Focus). Une équipe, pas cinq icônes répétées. */
const AGENT_NAMES = ["Iris", "Signal", "Écho", "Prisme", "Focus"];

function AgentAvatars() {
  return (
    <div className="my-auto py-6">
      <svg
        viewBox="0 0 260 86"
        className="mx-auto w-full max-w-[260px]"
        role="img"
        aria-label="Les cinq agents : Iris, Signal, Écho, Prisme et Focus"
      >
        {/* Iris — bob, figure moyenne */}
        <g fill="#7fb0e5">
          <circle cx="26" cy="42" r="14" />
          <circle cx="26" cy="47" r="12" />
          <path d="M4 86c2-19 11-28 22-28s20 9 22 28Z" />
        </g>
        {/* Signal — grand, cheveux courts */}
        <g fill="#4c92da">
          <circle cx="78" cy="34" r="12" />
          <path d="M78 22a12 12 0 0 1 12 11H66a12 12 0 0 1 12-11Z" />
          <path d="M56 86c2-24 11-34 22-34s20 10 22 34Z" />
        </g>
        {/* Écho — chignon */}
        <g fill="#6a94d3">
          <circle cx="130" cy="27" r="6" />
          <circle cx="130" cy="42" r="12" />
          <path d="M108 86c2-19 11-28 22-28s20 9 22 28Z" />
        </g>
        {/* Prisme — plus petit, cheveux courts */}
        <g fill="#2f6fae">
          <circle cx="182" cy="46" r="11" />
          <path d="M182 35a11 11 0 0 1 11 10h-22a11 11 0 0 1 11-10Z" />
          <path d="M162 86c2-17 10-25 20-25s18 8 20 25Z" />
        </g>
        {/* Focus — cheveux longs */}
        <g fill="#1a507c">
          <path d="M220 44c0-10 6-17 14-17s14 7 14 17v32h-28Z" opacity="0.55" />
          <circle cx="234" cy="40" r="12" />
          <path d="M212 86c2-19 11-28 22-28s20 9 22 28Z" />
        </g>
      </svg>
      <div className="mx-auto mt-2 grid w-full max-w-[260px] grid-cols-5 text-center">
        {AGENT_NAMES.map((name) => (
          <span
            key={name}
            className="text-[10px] font-medium uppercase tracking-wide text-slate-600"
          >
            {name}
          </span>
        ))}
      </div>
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
