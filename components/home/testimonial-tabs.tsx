"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

import {
  AurigeLogo,
  DelcourtLogo,
  LineaLogo,
  OrveaLogo,
  SeverinLogo,
} from "@/components/home/brand-logos";

/**
 * Témoignages à onglets-avatars (référence template). Marques et
 * personnes FICTIVES — pastilles à initiales (aucune photo de stock),
 * logos = lockups SVG dessinés partagés (brand-logos.tsx).
 */
const ITEMS = [
  {
    initials: "CV",
    tint: "#7fb0e5",
    quote:
      "Our advisors already knew everything about their clients — but it all lived in their notebooks. Today every signal surfaces, and the relationship no longer depends on one person's memory.",
    name: "Claire Vasseur",
    role: "CRM Director @ Maison Séverin",
    logo: <SeverinLogo />,
  },
  {
    initials: "ML",
    tint: "#4c92da",
    quote:
      "We measured traffic, never the relationship. Eyeconic attributes every sale to the message that triggered it: clienteling went from an act of faith to a line in the reporting.",
    name: "Marc-Antoine Lefebvre",
    role: "Retail Director Europe @ ORVEA Paris",
    logo: <OrveaLogo />,
  },
  {
    initials: "SA",
    tint: "#6a94d3",
    quote:
      "The pilot covered three spas. Six weeks later, the other directors were asking for the tool — nobody wants to be the location that calls its clients back last.",
    name: "Sofia Andrade",
    role: "Head of Client Experience @ Linéa Beauté",
    logo: <LineaLogo />,
  },
  {
    initials: "IF",
    tint: "#2f6fae",
    quote:
      "We benchmarked four platforms over a quarter. Eyeconic is the only one our teams kept opening once the pilot ended — the rest were just CRMs under another name.",
    name: "Isabelle Franchi",
    role: "Chief Client Officer @ Groupe Delcourt",
    logo: <DelcourtLogo />,
  },
  {
    initials: "TB",
    tint: "#1a507c",
    quote:
      "A watch client comes back every four or five years. Without institutional memory, that relationship doesn't exist. Eyeconic became that memory.",
    name: "Thomas Berthoud",
    role: "Global Retail Director @ Aurige",
    logo: <AurigeLogo />,
  },
];

export function TestimonialTabs() {
  const [index, setIndex] = useState(0);
  const active = ITEMS[index];

  return (
    <section className="bg-paper py-24 lg:py-36">
      <div className="container-site">
        <h2 className="max-w-3xl text-4xl font-semibold tracking-tight text-abyss-950 sm:text-5xl">
          Trusted by teams that sell through relationships
        </h2>

        <div className="mt-14 grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Avatars */}
          <div role="tablist" aria-label="Testimonials" className="flex items-center gap-4">
            {ITEMS.map((item, i) => (
              <button
                key={item.name}
                role="tab"
                aria-selected={i === index}
                aria-label={`Testimonial from ${item.name}`}
                onClick={() => setIndex(i)}
                className={cn(
                  "flex items-center justify-center rounded-full font-semibold text-paper transition-all",
                  i === index
                    ? "size-16 text-lg ring-4 ring-brand-500 ring-offset-4 ring-offset-paper"
                    : "size-12 text-sm opacity-50 hover:opacity-80"
                )}
                style={{ backgroundColor: item.tint }}
              >
                {item.initials}
              </button>
            ))}
          </div>

          {/* Quote */}
          <div aria-live="polite">
            <blockquote className="text-lg leading-relaxed text-abyss-950">
              “{active.quote}”
            </blockquote>
            <p className="mt-4 text-sm">
              <span className="font-semibold text-abyss-950">{active.name}</span>
              <span className="text-slate-600">, {active.role}</span>
            </p>
          </div>
        </div>

        {/* Logos — lockups dessinés, l'actif en foncé */}
        <ul className="mt-14 flex flex-wrap items-center justify-between gap-x-10 gap-y-6">
          {ITEMS.map((item, i) => (
            <li
              key={item.name}
              className={cn(
                "transition-colors",
                i === index ? "text-abyss-950" : "text-slate-400/60"
              )}
            >
              {item.logo}
            </li>
          ))}
        </ul>
        <p className="mt-6 text-[11px] uppercase tracking-wide text-slate-400">
          Illustrative examples — fictional brands and figures
        </p>
      </div>
    </section>
  );
}
