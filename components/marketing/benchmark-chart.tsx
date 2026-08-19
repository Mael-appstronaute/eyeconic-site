"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

/**
 * Section 6 — comparatif animé. Barres en piles de pixels : elles montent
 * par unités de 8, en paliers — la jauge de console, pas la courbe lissée.
 * AUCUN chiffre n'est affiché : les hauteurs sont illustratives et le
 * bloc est balisé [DONNÉES À PRODUIRE]. Ne pas fabriquer de valeurs.
 * 2e des 2 slots d'animation lourde du site (avec l'iris du hero).
 */
const TABS = [
  {
    key: "reponse",
    label: "Taux de réponse",
    units: [2, 3, 5, 7, 11],
  },
  {
    key: "ca",
    label: "Chiffre d'affaires attribué",
    units: [1, 2, 4, 6, 11],
  },
  {
    key: "adoption",
    label: "Adoption par les équipes",
    units: [3, 2, 4, 5, 11],
  },
] as const;

const CATEGORIES = [
  "Carnet papier",
  "E-mailing de masse",
  "CRM généraliste",
  "Outil de clienteling",
  "Eyeconic",
];

const MAX_UNITS = 12;

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
    <section id="comparatif" className="light bg-paper py-20 text-ink lg:py-32">
      <div className="container-site">
        <div className="max-w-3xl">
          <p className="eyebrow mb-4 flex items-center gap-2.5 text-brand-600">
            <span aria-hidden="true" className="size-2 bg-brand-600" />
            La preuve
          </p>
          <h2 className="font-display text-display-l text-balance uppercase">
            La différence ne se voit pas dans la démo.
          </h2>
          <p className="mt-4 text-body-l text-slate-600">
            Elle se voit dans le chiffre d&apos;affaires.
          </p>
        </div>

        <div ref={ref} className="mt-12 border-2 border-abyss-900/16 bg-white p-6 shadow-hard lg:p-10">
          {/* Onglets */}
          <div
            role="tablist"
            aria-label="Indicateur comparé"
            className="flex flex-wrap gap-2"
          >
            {TABS.map((t, i) => (
              <button
                key={t.key}
                role="tab"
                id={`benchmark-tab-${t.key}`}
                aria-selected={i === tab}
                aria-controls="benchmark-panel"
                onClick={() => setTab(i)}
                className={cn(
                  "data-label border-2 px-4 py-2 text-caption uppercase tracking-[0.14em] transition-colors duration-100 ease-steps-6",
                  i === tab
                    ? "notch-tr border-abyss-900 bg-abyss-900 text-paper"
                    : "border-abyss-900/20 text-slate-600 hover:border-abyss-900/50"
                )}
              >
                {t.label}
              </button>
            ))}
          </div>

          {/* Barres en piles de pixels */}
          <div
            id="benchmark-panel"
            role="tabpanel"
            aria-labelledby={`benchmark-tab-${TABS[tab].key}`}
            className="mt-10"
          >
            <div className="grid grid-cols-5 items-end gap-3 sm:gap-6" style={{ minHeight: MAX_UNITS * 18 }}>
              {TABS[tab].units.map((units, col) => {
                const isEyeconic = col === CATEGORIES.length - 1;
                return (
                  <div key={CATEGORIES[col]} className="flex flex-col items-center gap-3">
                    <div className="flex w-full max-w-16 flex-col-reverse gap-1">
                      {Array.from({ length: units }).map((_, u) => (
                        <span
                          key={`${tab}-${u}`}
                          className={cn(
                            "block h-3.5 w-full transition-opacity duration-100",
                            isEyeconic
                              ? "bg-gradient-brand"
                              : "bg-hatch-dark border-2 border-abyss-900/25 bg-mist-100"
                          )}
                          style={{
                            opacity: inView ? 1 : 0,
                            transitionDelay: `${u * 70}ms`,
                            transitionTimingFunction: "steps(2, end)",
                          }}
                        />
                      ))}
                    </div>
                    <p
                      className={cn(
                        "data-label text-center text-[10px] uppercase tracking-[0.1em] sm:text-caption sm:tracking-[0.14em]",
                        isEyeconic ? "font-medium text-abyss-900" : "text-slate-600"
                      )}
                    >
                      {CATEGORIES[col]}
                    </p>
                  </div>
                );
              })}
            </div>
            <p className="data-label mt-8 border-t-2 border-abyss-900/10 pt-4 text-[10px] uppercase tracking-[0.14em] text-slate-400">
              Hauteurs illustratives, sans échelle — [Données à produire]
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
