import type { Metadata } from "next";
import { PixelButton } from "@/components/marketing/pixel-button";
import { SectionHeading } from "@/components/marketing/section-heading";
import { StatCounter } from "@/components/marketing/stat-counter";
import { CustomerCard } from "@/components/mockups/customer-card";
import { TaskList } from "@/components/mockups/task-list";
import { WhatsAppThread } from "@/components/mockups/whatsapp-thread";
import { AttributionTable } from "@/components/mockups/attribution-table";

export const metadata: Metadata = {
  title: "Styleguide",
  robots: { index: false, follow: false },
};

const COLORS = [
  { name: "Paper", value: "#f9f9f9", cls: "bg-paper border-2 border-abyss-900/15" },
  { name: "Mist — mist-100", value: "#eef3fa", cls: "bg-mist-100" },
  { name: "brand-500", value: "#4c92da", cls: "bg-brand-500" },
  { name: "brand-700", value: "#1a507c", cls: "bg-brand-700" },
  { name: "Abyss — abyss-900", value: "#06335a", cls: "bg-abyss-900" },
  { name: "Sky — sky-500", value: "#6a94d3", cls: "bg-sky-500" },
  { name: "Ink", value: "#000000", cls: "bg-ink" },
  { name: "Alert (states only)", value: "#e8703a", cls: "bg-alert" },
];

export default function StyleguidePage() {
  return (
    <div className="bg-paper pb-24 pt-24 text-ink">
      <div className="container-site space-y-16">
        <header>
          <p className="eyebrow text-brand-600">Internal tool — noindex</p>
          <h1 className="font-display text-display-l mt-3 text-abyss-900">
            Eyeconic styleguide
          </h1>
          <p className="mt-4 max-w-2xl text-body-l text-slate-600">
            Light site on Paper. Dark surfaces are abyss blue (never black).
            Square blocks, 2px borders, soft blue shadows. Orbitron + DM Sans.
          </p>
        </header>

        {/* Palette */}
        <section>
          <h2 className="eyebrow mb-6 text-brand-600">Palette</h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {COLORS.map((c) => (
              <div key={c.name}>
                <div className={`h-16 ${c.cls}`} />
                <p className="mt-2 text-caption font-medium text-abyss-900">{c.name}</p>
                <p className="data-label text-caption text-slate-400">{c.value}</p>
              </div>
            ))}
          </div>
        </section>

        {/* The 2 gradients */}
        <section>
          <h2 className="eyebrow mb-6 text-brand-600">The two gradients — strict uses</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="bg-gradient-brand notch-tr-bl flex h-24 items-center px-6">
              <span className="text-caption font-medium text-paper">
                gradient-brand 135° — logo · 1 CTA/screen · scroll bar
              </span>
            </div>
            <div className="bg-gradient-ambient flex h-24 items-center px-6">
              <span className="text-caption font-medium text-paper">
                gradient-ambient 200° — section backgrounds (hero)
              </span>
            </div>
          </div>
        </section>

        {/* Typography */}
        <section className="space-y-5 border-2 border-abyss-900/15 bg-white p-8 shadow-card">
          <p className="font-display text-display-xl text-abyss-900">Display XL</p>
          <p className="font-display text-display-l text-abyss-900">Display L — Orbitron Bold</p>
          <p className="font-display text-display-m text-abyss-900">Display M — SemiBold</p>
          <p className="text-h3">H3 — DM Sans Medium, never Orbitron below 28px</p>
          <p className="text-body-l text-slate-600">
            Body L — DM Sans Regular, 1.6 line height. The site&apos;s running text.
          </p>
          <p className="eyebrow text-brand-600">Eyebrow — Orbitron 12px · 0.12em tracking</p>
          <p className="data-label text-caption text-slate-600">
            data-label — €4,250 · ×4.2 · tabular figures
          </p>
        </section>

        {/* Buttons + notches */}
        <section>
          <h2 className="eyebrow mb-6 text-brand-600">Buttons · notches · shadows</h2>
          <div className="flex flex-wrap items-center gap-4">
            <PixelButton variant="brand">Gradient CTA — 1 per screen</PixelButton>
            <PixelButton variant="outline">Secondary CTA</PixelButton>
            <span className="border-2 border-abyss-900/15 bg-white px-5 py-3 shadow-card">
              Card with shadow-card
            </span>
          </div>
          <div className="dark mt-6 flex flex-wrap items-center gap-4 bg-abyss-900 p-6">
            <PixelButton variant="paper">CTA on abyss</PixelButton>
            <PixelButton variant="outline-paper">Secondary on abyss</PixelButton>
          </div>
        </section>

        {/* SectionHeading + counter */}
        <section className="border-2 border-abyss-900/15 bg-white p-8 shadow-card">
          <SectionHeading
            eyebrow="Example"
            title="A section heading"
            intro="Orbitron eyebrow, Orbitron title, DM Sans intro."
          />
          <div className="mt-8 max-w-56 border-t border-abyss-900/10 pt-6">
            <StatCounter value={4.2} decimals={1} prefix="×" label="Animated counter" />
          </div>
          <div className="divider-soft mt-8" />
          <p className="mt-2 text-caption text-slate-400">
            divider-soft — thin rule between blocks
          </p>
        </section>

        {/* Mockups */}
        <section>
          <h2 className="eyebrow mb-6 text-brand-600">Product mockups — HTML/CSS, zero screenshots</h2>
          <div className="grid gap-6 lg:grid-cols-2">
            <CustomerCard />
            <TaskList />
            <WhatsAppThread />
            <AttributionTable />
          </div>
        </section>
      </div>
    </div>
  );
}
