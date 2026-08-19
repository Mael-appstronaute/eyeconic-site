"use client";

import dynamic from "next/dynamic";
import { PixelButton } from "@/components/marketing/pixel-button";
import { StatCounter } from "@/components/marketing/stat-counter";

/* Signature — 1 des 2 slots d'animation lourde du site */
const PixelIris = dynamic(
  () => import("@/components/marketing/pixel-iris").then((m) => m.PixelIris),
  { ssr: false, loading: () => <div aria-hidden="true" className="bg-grid-8 absolute inset-0" /> }
);

/**
 * Hero direction B — « le scan traverse tout » : l'iris pixel occupe
 * tout le fond, le texte vit dans sa pupille (zone vide de la grille).
 * Le soulignement de « signaux » est un background inline : un élément
 * positionné dans le H1 casserait les opportunités de coupure du texte.
 */
export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-ink pt-16">
      <div className="relative flex min-h-[calc(100svh-4rem)] flex-col justify-center">
        <PixelIris />
        {/* Sur mobile la pupille ne couvre pas tout le texte : voile de lisibilité */}
        <div aria-hidden="true" className="absolute inset-0 bg-ink/55 sm:hidden" />

        <div className="container-site pointer-events-none relative z-10 w-full min-w-0 py-24 text-center">
          <p className="eyebrow mb-6 text-sky-500">
            Pour les directions retail, CRM et opérations
          </p>
          <h1 className="font-display text-display-xl mx-auto max-w-5xl text-balance uppercase text-paper max-sm:text-[1.75rem] max-sm:leading-none">
            Vos meilleurs clients envoient des{" "}
            <span className="bg-gradient-brand-h bg-no-repeat [background-position:0_96%] [background-size:100%_0.08em]">
              signaux
            </span>
            {". Personne ne les lit."}
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-body-l text-sky-300">
            Eyeconic unifie vos données boutique, e-commerce et messagerie,
            puis met cinq agents IA au service de vos équipes. Ils savent qui
            contacter, quand, avec quoi — et vous voyez ce que ça rapporte.
          </p>
          <div className="pointer-events-auto mt-10 flex flex-wrap items-center justify-center gap-4">
            <PixelButton href="/essai" variant="brand">
              Démarrer gratuitement
            </PixelButton>
            <PixelButton href="/demo" variant="outline">
              Réserver une démo
            </PixelButton>
          </div>
          <p className="data-label mt-8 text-caption uppercase tracking-[0.14em] text-slate-400">
            Plan gratuit · Opérationnel en 7 jours · Données hébergées en
            Europe
          </p>
        </div>
      </div>

      {/* Bande hachurée — séparateur, référence template */}
      <div aria-hidden="true" className="bg-hatch container-site h-10 border-y-2 border-paper/14" />

      {/* 3 statistiques — compteurs en paliers */}
      <div className="container-site">
        <div className="grid border-x-2 border-b-2 border-paper/14 sm:grid-cols-3">
          <div className="border-b-2 border-paper/14 p-8 sm:border-b-0 lg:p-10">
            <StatCounter value={4.2} decimals={1} prefix="×" label="Panier moyen des clients suivis" unverified />
          </div>
          <div className="border-b-2 border-paper/14 p-8 sm:border-b-0 sm:border-l-2 lg:p-10">
            <StatCounter value={7} suffix=" jours" label="De mise en service" />
          </div>
          <div className="p-8 sm:border-l-2 sm:border-paper/14 lg:p-10">
            <StatCounter value={40} suffix="+" label="Intégrations natives" unverified />
          </div>
        </div>
      </div>
    </section>
  );
}
