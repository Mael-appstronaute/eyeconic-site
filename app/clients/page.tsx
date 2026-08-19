import type { Metadata } from "next";
import { Spark } from "@/components/marketing/spark";
import { CtaBanner } from "@/components/marketing/cta-banner";
import { PlaquesMotif } from "@/components/marketing/hero-motifs";

export const metadata: Metadata = {
  title: "Case studies",
  description:
    "How retail brands put their customer data to work with Eyeconic — illustrative examples.",
};

/* Same fictional maisons as the carousel — narrative consistency. */
const CAS = [
  {
    brand: "Groupe Delcourt",
    sector: "Luxury — 214 boutiques, 12 countries",
    story:
      "Four platforms benchmarked over a quarter, an 11-week rollout, and one rule: no tool the teams don't open on their own.",
    kpis: [
      ["+31%", "Attributed revenue, Europe"],
      ["11 wks", "Full rollout"],
    ],
    big: true,
  },
  {
    brand: "Maison Séverin",
    sector: "Fine jewelry — 14 boutiques",
    story:
      "Getting the relationship out of the notebooks without dehumanizing it: advisors keep their voice, the maison gains a memory.",
    kpis: [
      ["+38%", "Response rate"],
      ["×2.3", "VIC repeat purchases"],
    ],
  },
  {
    brand: "ORVEA Paris",
    sector: "Premium fashion — 46 stores",
    story:
      "Reconciling online and in-store, and turning clienteling into a reporting line.",
    kpis: [
      ["+27%", "Attributed revenue"],
      ["92%", "Advisor adoption"],
    ],
  },
  {
    brand: "Linéa Beauté",
    sector: "Beauty & spa — 28 locations",
    story:
      "A pilot on three spas that became a banner-wide standard in six weeks.",
    kpis: [
      ["+45%", "Appointments booked"],
      ["−22%", "Clients uncontacted for 90 days"],
    ],
  },
  {
    brand: "Aurige",
    sector: "Watchmaking — 37 boutiques and corners",
    story:
      "Buying cycles several years long, finally tended between two sales.",
    kpis: [
      ["×1.8", "Workshop appointments"],
      ["68%", "VICs recontacted each quarter"],
    ],
  },
];

/* Page-specific design: magazine grid, first study full width. */
export default function ClientsPage() {
  return (
    <div className="pt-16">
      <section className="relative overflow-hidden bg-white">
        <PlaquesMotif className="absolute -right-10 top-1/2 hidden w-[400px] -translate-y-1/2 lg:block" />
        <div className="container-site relative py-16 lg:py-24">
          <p className="eyebrow mb-4 flex items-center gap-2.5 text-brand-600">
            <Spark className="size-2.5" />
            Case studies
          </p>
          <h1 className="font-display text-display-l max-w-3xl text-balance text-abyss-900">
            Brands that sell through relationships.
          </h1>
          <p className="mt-4 max-w-2xl text-body-l text-slate-600">
            Illustrative examples — fictional brands and figures, pending the
            first public references.
          </p>
        </div>
      </section>

      <section className="bg-paper pb-20 lg:pb-32">
        <div className="container-site grid gap-6 lg:grid-cols-2">
          {CAS.map((c) => (
            <article
              key={c.brand}
              className={
                c.big
                  ? "dark bg-abyss-900 p-8 shadow-card-hover lg:col-span-2 lg:p-12"
                  : "border-2 border-abyss-900/15 bg-white p-8 shadow-card"
              }
            >
              <p className={`eyebrow ${c.big ? "text-sky-500" : "text-brand-600"}`}>
                {c.sector}
              </p>
              <h2
                className={`font-display text-display-m mt-3 ${c.big ? "text-paper" : "text-abyss-900"}`}
              >
                {c.brand}
              </h2>
              <p className={`mt-3 max-w-2xl text-body-l ${c.big ? "text-sky-300" : "text-slate-600"}`}>
                {c.story}
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                {c.kpis.map(([value, label]) => (
                  <div
                    key={label}
                    className={c.big ? "bg-abyss-950/60 px-5 py-3" : "bg-mist-100 px-5 py-3"}
                  >
                    <p className={`font-display text-2xl font-bold ${c.big ? "text-paper" : "text-abyss-900"}`}>
                      {value}
                    </p>
                    <p className={`mt-0.5 text-[11px] font-medium uppercase tracking-wide ${c.big ? "text-sky-300" : "text-slate-600"}`}>
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <CtaBanner />
    </div>
  );
}
