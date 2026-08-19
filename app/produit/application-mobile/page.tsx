import type { Metadata } from "next";
import { Spark } from "@/components/marketing/spark";
import { TaskList } from "@/components/mockups/task-list";
import { PixelButton } from "@/components/marketing/pixel-button";
import { CtaBanner } from "@/components/marketing/cta-banner";

export const metadata: Metadata = {
  title: "Application mobile",
  description:
    "L'outil quotidien de vos conseillers : la journée priorisée par Focus, la vue client et la messagerie, sur le téléphone, entre deux clients.",
};

const MOMENTS = [
  [
    "Avant l'ouverture",
    "La journée est déjà prête : Focus a classé qui rappeler, dans quel ordre, et pourquoi.",
  ],
  [
    "Entre deux clients",
    "Trente secondes suffisent : la fiche du client suivant, le brouillon d'Écho, envoyer.",
  ],
  [
    "En rendez-vous",
    "Tout l'historique dans la poche — dernier achat, préférences, conversation en cours.",
  ],
];

/* Design propre à la page : le téléphone en CSS, centré dans le hero. */
export default function ApplicationMobilePage() {
  return (
    <div className="pt-16">
      <section className="bg-paper">
        <div className="container-site grid items-center gap-12 py-16 lg:grid-cols-2 lg:py-24">
          <div>
            <p className="eyebrow mb-4 flex items-center gap-2.5 text-brand-600">
              <Spark className="size-2.5" />
              Produit — Application mobile
            </p>
            <h1 className="font-display text-display-l max-w-xl text-balance text-abyss-900">
              Sur mobile, entre deux clients.
            </h1>
            <p className="mt-5 max-w-xl text-body-l text-slate-600">
              L&apos;utilisateur final d&apos;Eyeconic, c&apos;est le
              conseiller de vente — debout, en boutique, le téléphone à la
              main. L&apos;application est pensée pour ces moments-là.
            </p>

            <ul className="mt-8 space-y-5">
              {MOMENTS.map(([title, text]) => (
                <li key={title} className="flex gap-4">
                  <span aria-hidden="true" className="mt-2.5 size-1.5 shrink-0 bg-brand-500" />
                  <div>
                    <p className="text-body font-medium text-abyss-900">{title}</p>
                    <p className="mt-0.5 text-body text-slate-600">{text}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-10">
              <PixelButton href="/essai" variant="brand">
                Démarrer gratuitement
              </PixelButton>
            </div>
          </div>

          {/* Téléphone en CSS — le mockup tâches dans un cadre d'appareil */}
          <div className="mx-auto w-full max-w-[340px]">
            <div className="rounded-[2.5rem] border-2 border-abyss-900/20 bg-white p-3 shadow-card-hover">
              <div
                aria-hidden="true"
                className="mx-auto mb-3 h-1.5 w-16 rounded-full bg-abyss-900/15"
              />
              <TaskList className="shadow-none" />
              <div
                aria-hidden="true"
                className="mx-auto mt-3 h-1 w-24 rounded-full bg-abyss-900/15"
              />
            </div>
            <p className="mt-3 text-center text-[11px] uppercase tracking-wide text-slate-400">
              iOS et Android — [Disponibilité à valider]
            </p>
          </div>
        </div>
      </section>

      <CtaBanner />
    </div>
  );
}
