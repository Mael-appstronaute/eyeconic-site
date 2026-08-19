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
