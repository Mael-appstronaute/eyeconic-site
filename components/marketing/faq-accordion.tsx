"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { PixelButton } from "@/components/marketing/pixel-button";
import { FAQ_ITEMS } from "@/lib/faq";

/** Section 10 — FAQ en accordéon, cellules bordées hard-edge. */
export function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-ink py-20 lg:py-32">
      <div className="container-site grid gap-12 lg:grid-cols-[minmax(0,4fr)_minmax(0,7fr)]">
        <div>
          <p className="eyebrow mb-4 flex items-center gap-2.5 text-brand-500">
            <span aria-hidden="true" className="size-2 bg-brand-500" />
            FAQ
          </p>
          <h2 className="font-display text-display-l uppercase text-paper">
            Vos questions, nos réponses
          </h2>
          <p className="mt-5 text-body-l text-sky-300">
            Pour tout le reste, l&apos;équipe répond en une journée.
          </p>
          <div className="mt-8">
            <PixelButton href="/demo" variant="outline">
              Réserver une démo
            </PixelButton>
          </div>
        </div>

        <div className="border-2 border-paper/14">
          {FAQ_ITEMS.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={item.q}
                className={cn(i > 0 && "border-t-2 border-paper/14")}
              >
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${i}`}
                    className={cn(
                      "flex w-full items-center justify-between gap-4 p-5 text-left text-body font-medium transition-colors duration-100 ease-steps-6 lg:p-6",
                      isOpen
                        ? "bg-abyss-950 text-paper"
                        : "text-paper/85 hover:bg-abyss-950/50 hover:text-paper"
                    )}
                  >
                    {item.q}
                    <span
                      aria-hidden="true"
                      className={cn(
                        "data-label shrink-0 text-brand-400 transition-transform duration-100 ease-steps-6",
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
                  className="bg-abyss-950 px-5 pb-6 lg:px-6"
                >
                  <p className="max-w-2xl text-body text-sky-300">{item.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
