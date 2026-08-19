"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { SectionHeading } from "@/components/marketing/section-heading";

/**
 * Section 7 — témoignages. Intégralement en placeholders explicites :
 * aucun client, aucune citation, aucun logo, aucun chiffre inventés.
 */
const SLOTS = [1, 2, 3];

export function TestimonialCarousel() {
  const [index, setIndex] = useState(0);

  return (
    <section id="temoignages" className="bg-ink py-20 lg:py-32">
      <div className="container-site">
        <SectionHeading
          eyebrow="Ils vendent par la relation"
          title="Ce que les équipes en disent"
          align="center"
        />

        <div className="relative mx-auto mt-12 max-w-3xl">
          <div
            aria-live="polite"
            className="notch-tr-bl border-2 border-paper/14 bg-abyss-950 p-8 text-center shadow-hard lg:p-12"
          >
            <div className="data-label mx-auto flex h-10 w-32 items-center justify-center border-2 border-paper/20 text-[10px] uppercase tracking-[0.14em] text-slate-400">
              [Logo client]
            </div>
            <blockquote className="mt-8">
              <p className="text-h3 font-light text-paper">
                « [Placeholder témoignage {SLOTS[index]} — citation d&apos;un
                client à venir] »
              </p>
            </blockquote>
            <p className="data-label mt-6 text-caption uppercase tracking-[0.14em] text-sky-300">
              [Nom] — [Fonction], [Marque]
            </p>
            <div className="mx-auto mt-8 grid max-w-md grid-cols-2 gap-px border-2 border-paper/14 bg-paper/14">
              {["KPI 1", "KPI 2"].map((kpi) => (
                <div key={kpi} className="bg-abyss-950 p-4">
                  <p className="font-display text-display-m text-paper">—</p>
                  <p className="data-label mt-1 text-[10px] uppercase tracking-[0.14em] text-slate-400">
                    [{kpi} à valider]
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Commandes */}
          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => setIndex((index + SLOTS.length - 1) % SLOTS.length)}
              aria-label="Témoignage précédent"
              className="flex size-11 items-center justify-center border-2 border-paper/25 text-paper transition-colors hover:border-paper/60"
            >
              <svg viewBox="0 0 16 16" className="size-4" aria-hidden="true">
                <path d="M10 3L5 8l5 5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" />
              </svg>
            </button>
            <div className="flex items-center gap-2" aria-hidden="true">
              {SLOTS.map((s, i) => (
                <span
                  key={s}
                  className={cn(
                    "size-2",
                    i === index ? "bg-gradient-brand" : "bg-paper/25"
                  )}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={() => setIndex((index + 1) % SLOTS.length)}
              aria-label="Témoignage suivant"
              className="flex size-11 items-center justify-center border-2 border-paper/25 text-paper transition-colors hover:border-paper/60"
            >
              <svg viewBox="0 0 16 16" className="size-4" aria-hidden="true">
                <path d="M6 3l5 5-5 5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
