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
  { name: "Void — ink", value: "#000000", cls: "bg-ink border-2 border-paper/14" },
  { name: "Panneau — abyss-900", value: "#06335a", cls: "bg-abyss-900" },
  { name: "abyss-950", value: "#041f38", cls: "bg-abyss-950" },
  { name: "brand-500", value: "#4c92da", cls: "bg-brand-500" },
  { name: "brand-700", value: "#1a507c", cls: "bg-brand-700" },
  { name: "sky-500", value: "#6a94d3", cls: "bg-sky-500" },
  { name: "Papier", value: "#f9f9f9", cls: "bg-paper" },
  { name: "Alerte (états seulement)", value: "#e8703a", cls: "bg-alert" },
];

export default function StyleguidePage() {
  return (
    <div className="bg-ink pb-24 pt-24 text-paper">
      <div className="container-site space-y-16">
        <header>
          <p className="eyebrow text-sky-500">Outil interne — non indexé</p>
          <h1 className="font-display text-display-l mt-3 uppercase">
            Styleguide 8-bit × Eyeconic
          </h1>
          <p className="mt-4 max-w-2xl text-body-l text-sky-300">
            Zéro border-radius. Bordures 2 px. Ombres décalées non floutées.
            Motion en paliers steps(). DM Mono pour la donnée.
          </p>
        </header>

        {/* Palette */}
        <section>
          <h2 className="eyebrow mb-6 text-sky-500">Palette</h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {COLORS.map((c) => (
              <div key={c.name}>
                <div className={`h-16 ${c.cls}`} />
                <p className="data-label mt-2 text-caption text-paper">{c.name}</p>
                <p className="data-label text-caption text-slate-400">{c.value}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Les 2 dégradés */}
        <section>
          <h2 className="eyebrow mb-6 text-sky-500">Les deux dégradés — usages étanches</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="bg-gradient-brand notch-tr-bl flex h-24 items-center px-6">
              <span className="data-label text-caption text-paper">
                gradient-brand 135° — logo · 1 CTA/écran · pixels allumés
              </span>
            </div>
            <div className="bg-gradient-ambient flex h-24 items-center px-6">
              <span className="data-label text-caption text-paper">
                gradient-ambient 200° — fonds de section uniquement
              </span>
            </div>
          </div>
        </section>

        {/* Typographie */}
        <section className="space-y-5 border-2 border-paper/14 p-8">
          <p className="font-display text-display-xl uppercase">Display XL</p>
          <p className="font-display text-display-l uppercase">Display L — Orbitron Bold</p>
          <p className="font-display text-display-m uppercase">Display M — SemiBold</p>
          <p className="text-h3">H3 — DM Sans Medium, jamais Orbitron sous 28 px</p>
          <p className="text-body-l text-sky-300">
            Body L — DM Sans Regular, interlignage 1.6. Le texte courant du site.
          </p>
          <p className="eyebrow text-brand-400">Eyebrow — DM Mono 12 px · tracking 0.14em</p>
          <p className="data-label text-caption text-sky-300">
            data-label — 4 250 € · ×4,2 · chiffres tabulaires
          </p>
        </section>

        {/* Boutons + encoches + ombre dure */}
        <section>
          <h2 className="eyebrow mb-6 text-sky-500">Boutons · encoches · ombre dure</h2>
          <div className="flex flex-wrap items-center gap-4">
            <PixelButton variant="brand">CTA dégradé — 1 par écran</PixelButton>
            <PixelButton variant="outline">CTA secondaire</PixelButton>
            <span className="notch-tr border-2 border-paper/14 bg-abyss-950 px-5 py-3 shadow-hard">
              Carte notch-tr + shadow-hard
            </span>
          </div>
        </section>

        {/* Trames */}
        <section>
          <h2 className="eyebrow mb-6 text-sky-500">Trames — 8 px · hachures</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="bg-grid-8 h-24 border-2 border-paper/14" />
            <div className="bg-hatch h-24 border-2 border-paper/14" />
          </div>
        </section>

        {/* SectionHeading + compteur */}
        <section className="border-2 border-paper/14 p-8">
          <SectionHeading
            eyebrow="Exemple"
            title="Un en-tête de section"
            intro="Eyebrow DM Mono, titre Orbitron, intro DM Sans."
          />
          <div className="mt-8 max-w-56 border-t-2 border-paper/14 pt-6">
            <StatCounter value={4.2} decimals={1} prefix="×" label="Compteur en 8 paliers" />
          </div>
        </section>

        {/* Mockups */}
        <section>
          <h2 className="eyebrow mb-6 text-sky-500">Mockups produit — HTML/CSS, zéro capture</h2>
          <div className="grid gap-6 lg:grid-cols-2">
            <CustomerCard />
            <TaskList />
            <WhatsAppThread />
            <AttributionTable />
          </div>
        </section>

        {/* Section claire */}
        <section className="light bg-paper p-8 text-ink">
          <h2 className="eyebrow mb-4 text-brand-600">
            Section claire — 2 max/page, jamais consécutives
          </h2>
          <p className="text-body max-w-xl text-slate-600">
            Les moments de preuve (comparatif, tarifs). Bordures
            rgba(6,51,90,.16), même ombre dure abyss-950.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <PixelButton variant="brand">CTA dégradé</PixelButton>
            <PixelButton variant="outline-dark">Secondaire clair</PixelButton>
          </div>
        </section>
      </div>
    </div>
  );
}
