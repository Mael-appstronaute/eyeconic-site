"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

/**
 * Section 6 — comparatif animé (onglets + barres).
 * AUCUN chiffre n'est affiché : les hauteurs sont illustratives et le
 * bloc est balisé [DONNÉES À PRODUIRE]. Ne pas fabriquer de valeurs.
 */
const TABS = [
  { key: "reponse", label: "Taux de réponse", heights: [16, 26, 40, 58, 92] },
  { key: "ca", label: "Chiffre d'affaires attribué", heights: [10, 18, 34, 52, 92] },
  { key: "adoption", label: "Adoption par les équipes", heights: [24, 18, 34, 44, 92] },
] as const;

const CATEGORIES = [
  "Carnet papier",
  "E-mailing de masse",
  "CRM généraliste",
  "Outil de clienteling",
  "Eyeconic",
];

export function BenchmarkChart() {
  const [tab, setTab] = useState(0);
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section id="comparatif" className="bg-white py-20 lg:py-32">
      <div className="container-site">
        <div className="max-w-3xl">
          <p className="eyebrow mb-4 flex items-center gap-2.5 text-brand-600">
            <span aria-hidden="true" className="size-2 rounded-full bg-brand-600" />
            La preuve
          </p>
          <h2 className="font-display text-display-l text-balance text-abyss-900">
            La différence ne se voit pas dans la démo.
          </h2>
          <p className="mt-4 text-body-l text-slate-600">
            Elle se voit dans le chiffre d&apos;affaires.
          </p>
        </div>

        <div
          ref={ref}
          className="mt-12 rounded-xl border border-abyss-900/10 bg-paper p-6 shadow-card lg:p-10"
        >
          {/* Onglets */}
          <div role="tablist" aria-label="Indicateur comparé" className="flex flex-wrap gap-2">
            {TABS.map((t, i) => (
              <button
                key={t.key}
                role="tab"
                id={`benchmark-tab-${t.key}`}
                aria-selected={i === tab}
                aria-controls="benchmark-panel"
                onClick={() => setTab(i)}
                className={cn(
                  "rounded-md px-4 py-2 text-sm font-medium transition-colors",
                  i === tab
                    ? "bg-abyss-900 text-paper shadow-card"
                    : "border border-abyss-900/15 bg-white text-slate-600 hover:border-abyss-900/35"
                )}
              >
                {t.label}
              </button>
            ))}
          </div>

          {/* Barres */}
          <div
            id="benchmark-panel"
            role="tabpanel"
            aria-labelledby={`benchmark-tab-${TABS[tab].key}`}
            className="mt-10"
          >
            <div className="grid h-56 grid-cols-5 items-end gap-3 sm:gap-6 lg:h-64">
              {TABS[tab].heights.map((h, col) => {
                const isEyeconic = col === CATEGORIES.length - 1;
                return (
                  <div key={CATEGORIES[col]} className="flex h-full flex-col items-center justify-end gap-3">
                    <div
                      className={cn(
                        "w-full max-w-16 rounded-t-md transition-[height] duration-700 ease-out",
                        isEyeconic ? "bg-gradient-brand shadow-card" : "bg-mist-200"
                      )}
                      style={{ height: inView ? `${h}%` : "0%" }}
                    />
                    <p
                      className={cn(
                        "text-center text-[11px] font-medium uppercase tracking-wide sm:text-caption",
                        isEyeconic ? "text-abyss-900" : "text-slate-400"
                      )}
                    >
                      {CATEGORIES[col]}
                    </p>
                  </div>
                );
              })}
            </div>
            <p className="divider-soft mt-8" aria-hidden="true" />
            <p className="mt-4 text-[11px] uppercase tracking-wide text-slate-400">
              Hauteurs illustratives, sans échelle — [Données à produire]
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
