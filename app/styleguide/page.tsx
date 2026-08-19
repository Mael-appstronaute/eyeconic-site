import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Spark } from "@/components/marketing/spark";
import { SectionHeading } from "@/components/marketing/section-heading";

export const metadata: Metadata = {
  title: "Styleguide",
  robots: { index: false, follow: false },
};

const colors = [
  { name: "brand-400", value: "#7fb0e5", cls: "bg-brand-400" },
  { name: "brand-500", value: "#4c92da", cls: "bg-brand-500" },
  { name: "brand-600", value: "#2f6fae", cls: "bg-brand-600" },
  { name: "brand-700", value: "#1a507c", cls: "bg-brand-700" },
  { name: "brand-800", value: "#123c5e", cls: "bg-brand-800" },
  { name: "abyss-900", value: "#06335a", cls: "bg-abyss-900" },
  { name: "abyss-950", value: "#041f38", cls: "bg-abyss-950" },
  { name: "sky-500", value: "#6a94d3", cls: "bg-sky-500" },
  { name: "sky-300", value: "#a8c5e8", cls: "bg-sky-300" },
  { name: "mist-200", value: "#dce7f5", cls: "bg-mist-200" },
  { name: "mist-100", value: "#eef3fa", cls: "bg-mist-100" },
  { name: "paper", value: "#f9f9f9", cls: "bg-paper border border-abyss-900/10" },
  { name: "ink", value: "#000000", cls: "bg-ink" },
  { name: "slate-600", value: "#4a5a6a", cls: "bg-slate-600" },
  { name: "slate-400", value: "#8a97a5", cls: "bg-slate-400" },
  { name: "alert (états d'alerte uniquement)", value: "#e8703a", cls: "bg-alert" },
];

const radii = [
  { name: "radius-sm — 8px", cls: "rounded-sm" },
  { name: "radius-md — 14px", cls: "rounded-md" },
  { name: "radius-lg — 22px", cls: "rounded-lg" },
  { name: "radius-xl — 32px", cls: "rounded-xl" },
];

export default function StyleguidePage() {
  return (
    <div className="pt-24 pb-32">
      <div className="container-site space-y-20">
        <header>
          <p className="eyebrow mb-3 text-brand-600">Outil interne — non indexé</p>
          <h1 className="font-display text-display-l">Styleguide</h1>
          <p className="mt-4 max-w-xl text-body-l text-slate-600">
            Tous les tokens et composants de base du design system Eyeconic.
            Page de validation, hors sitemap.
          </p>
        </header>

        {/* Couleurs */}
        <section>
          <h2 className="font-display text-display-m mb-8">Couleurs</h2>
          <div className="mb-8">
            <p className="eyebrow mb-3 text-slate-400">
              Dégradé réservé — logo, 1 CTA par écran, signature
            </p>
            <div className="bg-gradient-brand flex h-20 items-center justify-between rounded-md px-6 font-display text-sm text-paper">
              <span>#4c92da</span>
              <span>#1a507c</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-8">
            {colors.map((c) => (
              <div key={c.name}>
                <div className={`h-16 rounded-sm ${c.cls}`} />
                <p className="mt-2 text-caption font-medium">{c.name}</p>
                <p className="text-caption text-slate-400">{c.value}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Typographie */}
        <section>
          <h2 className="font-display text-display-m mb-8">Typographie</h2>
          <div className="space-y-8 rounded-lg border border-abyss-900/10 bg-white p-8 shadow-card">
            <div>
              <p className="text-caption text-slate-400 mb-2">
                display-xl — Orbitron ExtraBold — H1 home uniquement — 8 mots max
              </p>
              <p className="font-display text-display-xl">Voir avant les autres</p>
            </div>
            <div>
              <p className="text-caption text-slate-400 mb-2">display-l — Orbitron Bold — H2</p>
              <p className="font-display text-display-l">Smarter clienteling</p>
            </div>
            <div>
              <p className="text-caption text-slate-400 mb-2">
                display-m — Orbitron SemiBold — H2 sous-pages, chiffres clés
              </p>
              <p className="font-display text-display-m">7 jours pour démarrer</p>
            </div>
            <div>
              <p className="text-caption text-slate-400 mb-2">h3 — DM Sans Medium</p>
              <p className="text-h3">Une vue client unique, enfin complète</p>
            </div>
            <div>
              <p className="text-caption text-slate-400 mb-2">body-l — DM Sans Regular</p>
              <p className="text-body-l max-w-xl">
                Eyeconic unifie vos données boutique, e-commerce et messagerie,
                puis met cinq agents IA au service de vos conseillers.
              </p>
            </div>
            <div>
              <p className="text-caption text-slate-400 mb-2">body — DM Sans Regular</p>
              <p className="text-body max-w-xl">
                Chaque achat, chaque message, chaque essayage, chaque rendez-vous.
                Y compris ce qui dormait dans un carnet ou sur le téléphone d&apos;un vendeur.
              </p>
            </div>
            <div>
              <p className="text-caption text-slate-400 mb-2">caption — DM Sans</p>
              <p className="text-caption text-slate-600 max-w-xl">
                Opérationnel en 7 jours · Sans remplacer vos outils · Données hébergées en Europe
              </p>
            </div>
            <div>
              <p className="text-caption text-slate-400 mb-2">
                eyebrow — Orbitron SemiBold 12px — seule exception à la règle des 28px
              </p>
              <p className="eyebrow flex items-center gap-2.5 text-brand-600">
                <Spark className="size-2.5" />
                Pour les directions retail et CRM
              </p>
            </div>
          </div>
        </section>

        {/* SectionHeading composé */}
        <section>
          <h2 className="font-display text-display-m mb-8">SectionHeading</h2>
          <div className="rounded-lg border border-abyss-900/10 bg-white p-8 shadow-card">
            <SectionHeading
              eyebrow="Unifier"
              title="Voir"
              intro="Chaque achat, chaque message, chaque essayage, chaque rendez-vous. Eyeconic relie vos boutiques, votre site, votre POS et vos messageries en une seule vue client."
            />
          </div>
        </section>

        {/* Boutons et formulaires */}
        <section>
          <h2 className="font-display text-display-m mb-8">Boutons et formulaires</h2>
          <div className="space-y-6 rounded-lg border border-abyss-900/10 bg-white p-8 shadow-card">
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#cta"
                className="bg-gradient-brand rounded-md px-5 py-2.5 text-sm font-medium text-paper shadow-card transition-shadow hover:shadow-card-hover"
              >
                Démarrer l&apos;essai gratuit
              </a>
              <Button>Bouton primaire</Button>
              <Button variant="secondary">Secondaire</Button>
              <Button variant="outline">Contour</Button>
              <Button variant="ghost">Fantôme</Button>
            </div>
            <p className="text-caption text-slate-400">
              Le bouton dégradé est le CTA primaire : un seul par écran.
            </p>
            <div className="max-w-sm space-y-2">
              <Label htmlFor="sg-email">E-mail professionnel</Label>
              <Input id="sg-email" type="email" placeholder="prenom@votremarque.com" />
              <p className="text-caption text-alert">
                Exemple d&apos;état d&apos;alerte : utilisez votre adresse professionnelle
                pour activer l&apos;essai.
              </p>
            </div>
          </div>
        </section>

        {/* Rayons et ombres */}
        <section>
          <h2 className="font-display text-display-m mb-8">Rayons, ombres, bordures</h2>
          <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
            {radii.map((r) => (
              <div
                key={r.name}
                className={`flex h-28 items-center justify-center border border-abyss-900/10 bg-white shadow-card ${r.cls}`}
              >
                <span className="text-caption text-slate-600">{r.name}</span>
              </div>
            ))}
          </div>
          <div className="divider-radial mt-10" />
          <p className="mt-3 text-caption text-slate-400">
            divider-radial — trait fin signature entre sections
          </p>
        </section>

        {/* Logos */}
        <section>
          <h2 className="font-display text-display-m mb-8">Logo</h2>
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="flex h-36 items-center justify-center rounded-lg border border-abyss-900/10 bg-white p-8">
              <Image src="/brand/Eyeconic_Logo_Horizontal.svg" alt="Logo Eyeconic dégradé sur fond clair" width={180} height={60} />
            </div>
            <div className="flex h-36 items-center justify-center rounded-lg bg-abyss-950 p-8">
              <Image src="/brand/Eyeconic_Logo_H_White.svg" alt="Logo Eyeconic blanc sur fond sombre" width={180} height={60} />
            </div>
            <div className="flex h-36 items-center justify-center rounded-lg border border-abyss-900/10 bg-mist-100 p-8">
              <Image src="/brand/Eyeconic_Logo_H_Dark.svg" alt="Logo Eyeconic monochrome noir" width={180} height={60} />
            </div>
          </div>
          <p className="mt-4 text-caption text-slate-400">
            Hauteur minimale 24 px · zone de protection = hauteur de l&apos;icône ÷ 2 ·
            jamais de recoloration, d&apos;ombre portée ni d&apos;étirement.
          </p>
        </section>

        {/* Chambre noire */}
        <section>
          <h2 className="font-display text-display-m mb-8">Chambre noire (section sombre)</h2>
          <div className="dark rounded-lg bg-abyss-950 p-10">
            <SectionHeading
              eyebrow="Les 5 agents"
              title="Cinq agents, un seul regard"
              intro="Chaque agent couvre un angle du clienteling. Ensemble, ils voient toute la relation."
            />
            <div className="mt-8 flex flex-wrap gap-3">
              <span className="rounded-sm border border-paper/12 px-3 py-1.5 text-caption text-paper/80">
                Bordure sombre : rgba(249,249,249,.12)
              </span>
              <span className="rounded-sm border border-paper/12 bg-abyss-900 px-3 py-1.5 text-caption text-paper/80">
                Carte : abyss-900
              </span>
            </div>
          </div>
          <p className="mt-3 text-caption text-slate-400">
            Maximum 2 chambres noires par page, jamais consécutives.
          </p>
        </section>
      </div>
    </div>
  );
}
