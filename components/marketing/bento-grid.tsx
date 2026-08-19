import { cn } from "@/lib/utils";
import { SectionHeading } from "@/components/marketing/section-heading";
import { Reveal } from "@/components/marketing/reveal";
import { TaskList } from "@/components/mockups/task-list";

const CAPABILITIES = [
  {
    tag: "Vue client — 1 fiche / n sources",
    title: "Vue client unique",
    text: "Tout l'historique d'un client au même endroit, y compris ce qui n'a jamais été saisi nulle part.",
    span: "lg:col-span-2",
    notch: "notch-tr",
  },
  {
    tag: "Canaux — WhatsApp·SMS·WeChat·LINE·E-mail",
    title: "Messagerie native",
    text: "Le canal du client, pas celui de l'outil.",
    span: "",
    notch: "notch-bl",
  },
  {
    tag: "Agents — Iris·Signal·Écho·Prisme·Focus",
    title: "Cinq agents IA",
    text: "Iris, Signal, Écho, Prisme et Focus travaillent pendant que vos équipes vendent.",
    span: "",
    notch: "notch-tl",
  },
  {
    tag: "Exécution — tâches·validations",
    title: "Tâches et workflows",
    text: "La journée de chaque conseiller, priorisée. Les validations, tracées.",
    span: "lg:col-span-2",
    notch: "notch-br",
    mockup: true,
  },
  {
    tag: "Attribution — message → vente",
    title: "Attribution du chiffre d'affaires",
    text: "Quel message a généré quelle vente. Par boutique, par région, par conseiller.",
    span: "lg:col-span-2",
    notch: "notch-tr",
  },
  {
    tag: "Conformité — UE·RGPD·SSO",
    title: "Sécurité européenne",
    text: "Hébergement UE, chiffrement, RGPD par conception, SSO sur le plan Maison.",
    span: "",
    notch: "notch-bl",
  },
];

/** Section 5 — grille bento des 6 capacités. Zéro icône : des libellés de données. */
export function BentoGrid() {
  return (
    <section id="capacites" className="bg-ink py-20 lg:py-32">
      <div className="container-site">
        <SectionHeading
          eyebrow="Les capacités"
          title="Six capacités, un seul outil"
          intro="Ce que vos clients vous disent d'un côté, ce que vos équipes en font de l'autre."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {CAPABILITIES.map((cap, i) => (
            <Reveal key={cap.title} delay={i % 3} className={cn(cap.span)}>
              <article
                className={cn(
                  "flex h-full flex-col border-2 border-paper/14 bg-abyss-950/60 p-6 transition-colors duration-100 ease-steps-6 hover:border-paper/30 lg:p-7",
                  cap.notch
                )}
              >
                <p className="data-label text-[10px] uppercase tracking-[0.14em] text-brand-400">
                  {cap.tag}
                </p>
                <h3 className="text-h3 mt-3 font-medium text-paper">
                  {cap.title}
                </h3>
                <p className="mt-2 text-body text-sky-300">{cap.text}</p>
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
