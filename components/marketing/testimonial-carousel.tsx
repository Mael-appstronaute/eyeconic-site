"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { SectionHeading } from "@/components/marketing/section-heading";

/**
 * Section 7 — testimonials. FICTIONAL brands with drawn wordmarks,
 * written quotes and fictional KPIs ("illustrative" note displayed).
 * Never use real companies or logos: false endorsement + trademark risk.
 */
const TESTIMONIALS = [
  {
    brand: "Maison Séverin",
    sector: "Fine jewelry — 14 boutiques",
    logo: (
      <span className="flex items-center gap-2.5">
        <span aria-hidden="true" className="size-2.5 rotate-45 bg-abyss-900" />
        <span className="font-display text-lg font-semibold tracking-[0.18em] text-abyss-900">
          MAISON SÉVERIN
        </span>
      </span>
    ),
    quote:
      "Our advisors already knew everything about their clients — but it all lived in their notebooks. Today every signal surfaces, and the relationship no longer depends on one person's memory.",
    name: "Claire Vasseur",
    role: "CRM Director",
    kpis: [
      { value: "+38%", label: "Message response rate" },
      { value: "×2.3", label: "VIC repeat purchases" },
    ],
  },
  {
    brand: "ORVEA Paris",
    sector: "Premium fashion — 46 stores",
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
      "We measured traffic, never the relationship. Eyeconic attributes every sale to the message that triggered it: clienteling went from an act of faith to a line in the reporting.",
    name: "Marc-Antoine Lefebvre",
    role: "Retail Director, Europe",
    kpis: [
      { value: "+27%", label: "Revenue attributed to clienteling" },
      { value: "92%", label: "Advisor adoption" },
    ],
  },
  {
    brand: "Linéa Beauté",
    sector: "Beauty & spa — 28 locations",
    logo: (
      <span className="flex items-center gap-2.5">
        <span aria-hidden="true" className="h-4 w-1 bg-abyss-900" />
        <span className="text-lg font-medium lowercase tracking-[0.08em] text-abyss-900">
          linéa <span className="font-light italic">beauté</span>
        </span>
      </span>
    ),
    quote:
      "The pilot covered three spas. Six weeks later, the other directors were asking for the tool — nobody wants to be the location that calls its clients back last.",
    name: "Sofia Andrade",
    role: "Head of Client Experience",
    kpis: [
      { value: "+45%", label: "Appointments booked" },
      { value: "−22%", label: "Clients uncontacted for 90 days" },
    ],
  },
  {
    brand: "Groupe Delcourt",
    sector: "Global luxury group — 214 boutiques, 12 countries",
    logo: (
      <span className="flex items-center gap-3">
        <span aria-hidden="true" className="grid grid-cols-2 gap-[3px]">
          <span className="size-1.5 bg-abyss-900" />
          <span className="size-1.5 bg-abyss-900" />
          <span className="size-1.5 bg-abyss-900" />
          <span className="size-1.5 bg-abyss-900/40" />
        </span>
        <span className="font-display text-lg font-bold uppercase tracking-[0.12em] text-abyss-900">
          Delcourt
        </span>
      </span>
    ),
    quote:
      "We benchmarked four platforms over a quarter. Eyeconic is the only one our teams kept opening once the pilot ended — the rest were just CRMs under another name.",
    name: "Isabelle Franchi",
    role: "Chief Client Officer, Group",
    kpis: [
      { value: "+31%", label: "Attributed revenue, Europe" },
      { value: "11 wks", label: "Rollout across 214 boutiques" },
    ],
  },
  {
    brand: "Aurige",
    sector: "Swiss watchmaking — 37 boutiques and corners",
    logo: (
      <span className="flex items-center gap-2.5">
        <svg viewBox="0 0 20 20" className="size-5 text-abyss-900" aria-hidden="true">
          <circle cx="10" cy="10" r="8.5" fill="none" stroke="currentColor" strokeWidth="1.8" />
          <path d="M10 4.5V10l3.5 2" fill="none" stroke="currentColor" strokeWidth="1.8" />
        </svg>
        <span className="text-lg font-semibold uppercase tracking-[0.35em] text-abyss-900">
          Aurige
        </span>
      </span>
    ),
    quote:
      "A watch client comes back every four or five years. Without institutional memory, that relationship doesn't exist. Eyeconic became that memory — and the next appointment starts from there.",
    name: "Thomas Berthoud",
    role: "Global Retail Director",
    kpis: [
      { value: "×1.8", label: "Workshop appointments generated" },
      { value: "68%", label: "VICs recontacted each quarter" },
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
          eyebrow="They sell through relationships"
          title="What the teams say"
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
              <p className="text-h3 font-light text-abyss-900">“{t.quote}”</p>
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

          {/* Controls */}
          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={() =>
                setIndex((index + TESTIMONIALS.length - 1) % TESTIMONIALS.length)
              }
              aria-label="Previous testimonial"
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
              aria-label="Next testimonial"
              className="flex size-11 items-center justify-center border-2 border-abyss-900/20 text-abyss-900 transition-colors hover:border-abyss-900/40 hover:bg-white"
            >
              <svg viewBox="0 0 16 16" className="size-4" aria-hidden="true">
                <path d="M6 3l5 5-5 5" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="square" />
              </svg>
            </button>
          </div>

          <p className="mt-4 text-center text-[11px] uppercase tracking-wide text-slate-400">
            Illustrative examples — fictional brands and figures
          </p>
        </div>
      </div>
    </section>
  );
}
