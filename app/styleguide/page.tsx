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
  { name: "Papier", value: "#f9f9f9", cls: "bg-paper border-2 border-abyss-900/15" },
  { name: "Brume — mist-100", value: "#eef3fa", cls: "bg-mist-100" },
  { name: "brand-500", value: "#4c92da", cls: "bg-brand-500" },
  { name: "brand-700", value: "#1a507c", cls: "bg-brand-700" },
  { name: "Abysse — abyss-900", value: "#06335a", cls: "bg-abyss-900" },
  { name: "Ciel — sky-500", value: "#6a94d3", cls: "bg-sky-500" },
  { name: "Encre", value: "#000000", cls: "bg-ink" },
  { name: "Alerte (états seulement)", value: "#e8703a", cls: "bg-alert" },
];

export default function StyleguidePage() {
  return (
    <div className="bg-paper pb-24 pt-24 text-ink">
      <div className="container-site space-y-16">
        <header>
          <p className="eyebrow text-brand-600">Outil interne — non indexé</p>
          <h1 className="font-display text-display-l mt-3 text-abyss-900">
            Styleguide Eyeconic
          </h1>
          <p className="mt-4 max-w-2xl text-body-l text-slate-600">
            Site clair à dominante Papier. Surfaces sombres en bleu abysse
            (jamais de noir). Ombres basses et bleutées. Orbitron + DM Sans.
          </p>
        </header>

        {/* Palette */}
        <section>
          <h2 className="eyebrow mb-6 text-brand-600">Palette</h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {COLORS.map((c) => (
              <div key={c.name}>
                <div className={`h-16 rounded-md ${c.cls}`} />
                <p className="mt-2 text-caption font-medium text-abyss-900">{c.name}</p>
                <p className="data-label text-caption text-slate-400">{c.value}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Les 2 dégradés */}
        <section>
          <h2 className="eyebrow mb-6 text-brand-600">Les deux dégradés — usages étanches</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="bg-gradient-brand flex h-24 items-center rounded-lg px-6">
              <span className="text-caption font-medium text-paper">
                gradient-brand 135° — logo · 1 CTA/écran · barre de scroll
              </span>
            </div>
            <div className="bg-gradient-ambient flex h-24 items-center rounded-lg px-6">
              <span className="text-caption font-medium text-paper">
                gradient-ambient 200° — fonds de section (hero, clôture)
              </span>
            </div>
          </div>
        </section>

        {/* Typographie */}
        <section className="space-y-5 rounded-lg border-2 border-abyss-900/15 bg-white p-8 shadow-card">
          <p className="font-display text-display-xl text-abyss-900">Display XL</p>
          <p className="font-display text-display-l text-abyss-900">Display L — Orbitron Bold</p>
          <p className="font-display text-display-m text-abyss-900">Display M — SemiBold</p>
          <p className="text-h3">H3 — DM Sans Medium, jamais Orbitron sous 28 px</p>
          <p className="text-body-l text-slate-600">
            Body L — DM Sans Regular, interlignage 1.6. Le texte courant du site.
          </p>
          <p className="eyebrow text-brand-600">Eyebrow — Orbitron 12 px · tracking 0.12em</p>
          <p className="data-label text-caption text-slate-600">
            data-label — 4 250 € · ×4,2 · chiffres tabulaires
          </p>
        </section>

        {/* Boutons + ombres */}
        <section>
          <h2 className="eyebrow mb-6 text-brand-600">Boutons · ombres bleutées</h2>
          <div className="flex flex-wrap items-center gap-4">
            <PixelButton variant="brand">CTA dégradé — 1 par écran</PixelButton>
            <PixelButton variant="outline">CTA secondaire</PixelButton>
            <span className="rounded-lg border-2 border-abyss-900/15 bg-white px-5 py-3 shadow-card">
              Carte shadow-card
            </span>
          </div>
          <div className="dark mt-6 flex flex-wrap items-center gap-4 rounded-lg bg-abyss-900 p-6">
            <PixelButton variant="paper">CTA sur fond abysse</PixelButton>
            <PixelButton variant="outline-paper">Secondaire abysse</PixelButton>
          </div>
        </section>

        {/* SectionHeading + compteur */}
        <section className="rounded-lg border-2 border-abyss-900/15 bg-white p-8 shadow-card">
          <SectionHeading
            eyebrow="Exemple"
            title="Un en-tête de section"
            intro="Eyebrow Orbitron 12 px, titre Orbitron, intro DM Sans."
          />
          <div className="mt-8 max-w-56 border-t border-abyss-900/10 pt-6">
            <StatCounter value={4.2} decimals={1} prefix="×" label="Compteur animé" />
          </div>
          <div className="divider-soft mt-8" />
          <p className="mt-2 text-caption text-slate-400">
            divider-soft — trait fin entre blocs
          </p>
        </section>

        {/* Mockups */}
        <section>
          <h2 className="eyebrow mb-6 text-brand-600">Mockups produit — HTML/CSS, zéro capture</h2>
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
