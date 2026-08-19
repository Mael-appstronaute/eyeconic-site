"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { SectionHeading } from "@/components/marketing/section-heading";

/**
 * Section 7 — témoignages. Marques FICTIVES avec logotypes dessinés,
 * avis rédigés et KPI fictifs (mention « illustratifs » affichée).
 * Ne jamais utiliser de vraies entreprises ni de vrais logos :
 * fausse recommandation + usage de marque = risque juridique.
 */
const TESTIMONIALS = [
  {
    brand: "Maison Séverin",
    sector: "Joaillerie — 14 boutiques",
    logo: (
      <span className="flex items-center gap-2.5">
        <span aria-hidden="true" className="size-2.5 rotate-45 bg-abyss-900" />
        <span className="font-display text-lg font-semibold tracking-[0.18em] text-abyss-900">
          MAISON SÉVERIN
        </span>
      </span>
    ),
    quote:
      "Nos conseillères savaient déjà tout de leurs clientes — mais tout était dans leurs carnets. Aujourd'hui, chaque signal remonte, et la relation ne dépend plus de la mémoire d'une seule personne.",
    name: "Claire Vasseur",
    role: "Directrice CRM",
    kpis: [
      { value: "+38 %", label: "Taux de réponse aux messages" },
      { value: "×2,3", label: "Réachat des clientes VIC" },
    ],
  },
  {
    brand: "ORVEA Paris",
    sector: "Mode premium — 46 boutiques",
    logo: (
      <span className="flex items-center gap-2">
        <span
          aria-hidden="true"
          className="flex size-5 items-center justify-center border-2 border-abyss-900 text-[10px] font-bold text-abyss-900"
        >
          O
        </span>
        <span className="text-lg font-light uppercase tracking-[0.3em] text-abyss-900">
          Orvea
        </span>
      </span>
    ),
    quote:
      "On mesurait le trafic, jamais la relation. Eyeconic attribue chaque vente au message qui l'a déclenchée : le clienteling est passé d'un acte de foi à une ligne du reporting.",
    name: "Marc-Antoine Lefebvre",
    role: "Directeur Retail Europe",
    kpis: [
      { value: "+27 %", label: "CA attribué au clienteling" },
      { value: "92 %", label: "Adoption par les conseillers" },
    ],
  },
  {
    brand: "Linéa Beauté",
    sector: "Beauté & spa — 28 points de vente",
    logo: (
      <span className="flex items-center gap-2.5">
        <span aria-hidden="true" className="h-4 w-1 bg-abyss-900" />
        <span className="text-lg font-medium lowercase tracking-[0.08em] text-abyss-900">
          linéa <span className="font-light italic">beauté</span>
        </span>
      </span>
    ),
    quote:
      "Le pilote portait sur trois instituts. Six semaines plus tard, les autres directrices demandaient l'outil — personne ne veut être la boutique qui rappelle ses clientes en dernier.",
    name: "Sofia Andrade",
    role: "Head of Client Experience",
    kpis: [
      { value: "+45 %", label: "Rendez-vous pris en institut" },
      { value: "−22 %", label: "Clientes sans contact depuis 90 j" },
    ],
  },
];

export function TestimonialCarousel() {
  const [index, setIndex] = useState(0);
  const t = TESTIMONIALS[index];

  return (
    <section id="temoignages" className="bg-paper py-20 lg:py-32">
      <div className="container-site">
        <SectionHeading
          eyebrow="Ils vendent par la relation"
          title="Ce que les équipes en disent"
          align="center"
        />

        <div className="relative mx-auto mt-12 max-w-3xl">
          <div
            aria-live="polite"
            className="border-2 border-abyss-900/15 bg-white p-8 text-center shadow-card lg:p-12"
          >
            <div className="flex flex-col items-center gap-1.5">
              {t.logo}
              <p className="text-caption text-slate-400">{t.sector}</p>
            </div>
            <blockquote className="mt-8">
              <p className="text-h3 font-light text-abyss-900">« {t.quote} »</p>
            </blockquote>
            <p className="mt-6 text-caption font-medium uppercase tracking-wide text-slate-600">
              {t.name} — {t.role}, {t.brand}
            </p>
            <div className="mx-auto mt-8 grid max-w-md grid-cols-2 gap-4">
              {t.kpis.map((kpi) => (
                <div key={kpi.label} className="bg-mist-100 p-4">
                  <p className="font-display text-display-m text-abyss-900">
                    {kpi.value}
                  </p>
                  <p className="mt-1 text-[11px] font-medium uppercase tracking-wide text-slate-600">
                    {kpi.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Commandes */}
          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={() =>
                setIndex((index + TESTIMONIALS.length - 1) % TESTIMONIALS.length)
              }
              aria-label="Témoignage précédent"
              className="flex size-11 items-center justify-center border-2 border-abyss-900/20 text-abyss-900 transition-colors hover:border-abyss-900/40 hover:bg-white"
            >
              <svg viewBox="0 0 16 16" className="size-4" aria-hidden="true">
                <path d="M10 3L5 8l5 5" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="square" />
              </svg>
            </button>
            <div className="flex items-center gap-2" aria-hidden="true">
              {TESTIMONIALS.map((s, i) => (
                <span
                  key={s.brand}
                  className={cn(
                    "size-2",
                    i === index ? "bg-gradient-brand" : "bg-mist-200"
                  )}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={() => setIndex((index + 1) % TESTIMONIALS.length)}
              aria-label="Témoignage suivant"
              className="flex size-11 items-center justify-center border-2 border-abyss-900/20 text-abyss-900 transition-colors hover:border-abyss-900/40 hover:bg-white"
            >
              <svg viewBox="0 0 16 16" className="size-4" aria-hidden="true">
                <path d="M6 3l5 5-5 5" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="square" />
              </svg>
            </button>
          </div>

          <p className="mt-4 text-center text-[11px] uppercase tracking-wide text-slate-400">
            Exemples illustratifs — marques et chiffres fictifs
          </p>
        </div>
      </div>
    </section>
  );
}
