import Link from "next/link";
import { QrBlock } from "@/components/marketing/qr-block";
import { HomeLeadForm } from "@/components/marketing/lead-forms";

const ARGUMENTS = [
  "Démo sur vos données, pas sur un jeu de démonstration",
  "Opérationnel en 7 jours, sans remplacer l'existant",
  "Plan gratuit pour commencer, données hébergées en UE",
];

/**
 * CTA final — section abysse pleine largeur : argumentaire à gauche,
 * formulaire en carte surélevée à droite, barre basse QR + alternative.
 * Les leads partent dans le CSV Excel (+ Airtable/e-mail si configurés).
 */
export function CtaBanner() {
  return (
    <section className="dark relative overflow-hidden bg-abyss-900 py-20 lg:py-28">
      {/* Anneaux optiques en filigrane — écho du logo */}
      <svg
        aria-hidden="true"
        viewBox="0 0 600 600"
        className="pointer-events-none absolute -right-40 top-1/2 hidden w-[560px] -translate-y-1/2 lg:block"
      >
        <g fill="none" stroke="#f9f9f9">
          <circle cx="300" cy="300" r="280" strokeWidth="1" opacity="0.08" />
          <circle cx="300" cy="300" r="210" strokeWidth="1" opacity="0.12" />
          <circle cx="300" cy="300" r="140" strokeWidth="1.5" opacity="0.16" />
          <circle cx="300" cy="300" r="70" strokeWidth="2" opacity="0.2" />
        </g>
        <path
          d="M300 240c8 26 26 44 52 52-26 8-44 26-52 52-8-26-26-44-52-52 26-8 44-26 52-52Z"
          fill="#4c92da"
          opacity="0.5"
        />
      </svg>

      <div className="container-site relative">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,4fr)] lg:gap-16">
          {/* Argumentaire */}
          <div className="flex flex-col justify-center">
            <p className="eyebrow mb-4 text-sky-500">Passez de l&apos;autre côté</p>
            <h2 className="font-display text-display-l max-w-xl text-balance text-paper">
              Voyez vos propres données pendant la démo.
            </h2>
            <p className="mt-5 max-w-xl text-body-l text-sky-300">
              Connectez une boutique, importez un export, et regardez ce
              qu&apos;Eyeconic en tire. Sans engagement.
            </p>
            <ul className="mt-8 space-y-3.5">
              {ARGUMENTS.map((item) => (
                <li key={item} className="flex items-start gap-3 text-body text-paper/90">
                  <span aria-hidden="true" className="mt-2 size-2 shrink-0 bg-brand-400" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Formulaire — carte surélevée */}
          <div className="relative">
            <span
              aria-hidden="true"
              className="absolute -left-2 -top-2 hidden h-full w-full border-2 border-paper/20 lg:block"
            />
            <div className="relative border-2 border-paper/15 bg-white p-6 lg:p-8">
              <p className="eyebrow mb-5 text-brand-600">Réserver une démo</p>
              <HomeLeadForm />
            </div>
          </div>
        </div>

        {/* Barre basse : QR + alternative essai */}
        <div className="mt-14 flex flex-col gap-8 border-t-2 border-paper/14 pt-10 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-md flex-1">
            <QrBlock
              path="/demo"
              title="Ou scannez avec votre téléphone"
              caption="Le formulaire s'ouvre sur mobile — mêmes destinations, source tracée."
            />
          </div>
          <div className="lg:text-right">
            <p className="text-body text-sky-300">
              Pas besoin de démo pour vous faire une idée ?
            </p>
            <Link
              href="/essai"
              className="mt-1 inline-block text-body-l font-medium text-paper underline-offset-4 transition-colors hover:text-brand-400 hover:underline"
            >
              Démarrez gratuitement, en self-service →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
