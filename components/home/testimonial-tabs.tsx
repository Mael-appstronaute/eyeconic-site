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
 * Témoignages à onglets-portraits (référence template) : photos de
 * banque de portraits-placeholder (public/avatars), identités FICTIVES
 * — gris quand inactif, couleur + anneau brand quand actif. Lockups
 * des marques dans la rangée du bas.
 */
const ITEMS: {
  photo: string;
  tint: string;
  quote: string;
  name: string;
  role: string;
  logo: React.ReactNode;
}[] = [
  {
    photo: "/avatars/claire.jpg",
    tint: "#7fb0e5",
    quote:
      "Our advisors already knew everything about their clients — but it all lived in their notebooks. Today every signal surfaces, and the relationship no longer depends on one person's memory.",
    name: "Claire Vasseur",
    role: "CRM Director @ Maison Séverin",
    logo: <SeverinLogo />,
  },
  {
    photo: "/avatars/marc.jpg",
    tint: "#4c92da",
    quote:
      "We measured traffic, never the relationship. Eyeconic attributes every sale to the message that triggered it: clienteling went from an act of faith to a line in the reporting.",
    name: "Marc-Antoine Lefebvre",
    role: "Retail Director Europe @ ORVEA Paris",
    logo: <OrveaLogo />,
  },
  {
    photo: "/avatars/sofia.jpg",
    tint: "#6a94d3",
    quote:
      "The pilot covered three spas. Six weeks later, the other directors were asking for the tool — nobody wants to be the location that calls its clients back last.",
    name: "Sofia Andrade",
    role: "Head of Client Experience @ Linéa Beauté",
    logo: <LineaLogo />,
  },
  {
    photo: "/avatars/isabelle.jpg",
    tint: "#2f6fae",
    quote:
      "We benchmarked four platforms over a quarter. Eyeconic is the only one our teams kept opening once the pilot ended — the rest were just CRMs under another name.",
    name: "Isabelle Franchi",
    role: "Chief Client Officer @ Groupe Delcourt",
    logo: <DelcourtLogo />,
  },
  {
    photo: "/avatars/thomas.jpg",
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
                  "overflow-hidden rounded-full transition-all",
                  i === index
                    ? "size-16 shadow-[0_10px_30px_rgba(6,51,90,0.2)] ring-4 ring-brand-500 ring-offset-4 ring-offset-paper"
                    : "size-12 opacity-80 grayscale hover:opacity-100"
                )}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.photo}
                  alt=""
                  className="size-full rounded-full object-cover"
                />
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
