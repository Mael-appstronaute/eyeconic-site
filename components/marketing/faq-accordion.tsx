"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { PixelButton } from "@/components/marketing/pixel-button";
import { FAQ_ITEMS } from "@/lib/faq";

/** Section 10 — FAQ en accordéon. `items` permet d'étendre la liste
 * (FAQ longue de /tarifs) sans dupliquer le composant. */
export function FaqAccordion({
  items = FAQ_ITEMS,
}: {
  items?: { q: string; a: string }[];
}) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-white py-20 lg:py-32">
      <div className="container-site grid gap-12 lg:grid-cols-[minmax(0,4fr)_minmax(0,7fr)]">
        <div>
          <p className="eyebrow mb-4 flex items-center gap-2.5 text-brand-600">
            <span aria-hidden="true" className="size-2 bg-brand-600" />
            FAQ
          </p>
          <h2 className="font-display text-display-l text-abyss-900">
            Vos questions, nos réponses
          </h2>
          <p className="mt-5 text-body-l text-slate-600">
            Pour tout le reste, l&apos;équipe répond en une journée.
          </p>
          <div className="mt-8">
            <PixelButton href="/demo" variant="outline">
              Réserver une démo
            </PixelButton>
          </div>
        </div>

        <div className="overflow-hidden rounded-xl border-2 border-abyss-900/15 bg-white shadow-card">
          {items.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={item.q}
                className={cn(i > 0 && "border-t border-abyss-900/10")}
              >
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${i}`}
                    className={cn(
                      "flex w-full items-center justify-between gap-4 p-5 text-left text-body font-medium transition-colors lg:p-6",
                      isOpen
                        ? "bg-paper text-abyss-900"
                        : "text-abyss-900/85 hover:bg-paper"
                    )}
                  >
                    {item.q}
                    <span
                      aria-hidden="true"
                      className={cn(
                        "shrink-0 text-lg font-normal text-brand-600 transition-transform",
                        isOpen && "rotate-45"
                      )}
                    >
                      +
                    </span>
                  </button>
                </h3>
                <div
                  id={`faq-panel-${i}`}
                  hidden={!isOpen}
                  className="bg-paper px-5 pb-6 lg:px-6"
                >
                  <p className="max-w-2xl text-body text-slate-600">{item.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
