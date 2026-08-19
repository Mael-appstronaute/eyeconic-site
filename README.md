# Eyeconic — Site vitrine

SaaS B2B de clienteling augmenté par l'IA, pour les marques premium et luxe.
Baseline : **Smarter clienteling** — « Le clienteling qui voit avant les autres ».

## Stack

- **Next.js 16** (App Router, TypeScript strict, typed routes)
- **Tailwind CSS v4** — tokens en `@theme` dans `app/globals.css`, pas de `tailwind.config.js`
- **shadcn/ui** (base radix, preset nova) — primitives dans `components/ui/`
- **Motion** (ex-Framer Motion) pour les animations custom
- **react-hook-form + zod** pour les formulaires (actions serveur Next)
- Contenu éditorial : MDX dans `content/` (pas de CMS)
- Déploiement cible : Vercel

```bash
pnpm install
pnpm dev        # http://localhost:3000
pnpm build
node scripts/generate-assets.mjs   # régénère favicons + OG depuis les SVG
```

## Arborescence

```
app/
  globals.css          # tokens @theme : couleurs, typo, ombres, rayons
  layout.tsx           # polices next/font, header/footer, metadata
  page.tsx             # accueil
  styleguide/          # outil de validation interne, noindex
components/
  ui/                  # primitives shadcn
  marketing/           # Logo, Spark, SiteHeader, SiteFooter, SectionHeading…
  mockups/             # (phase 3) mockups produit HTML/CSS
content/               # MDX éditorial
docs/
  DESIGN.md            # plan de design validé et décisions
  CONTENT.md           # tout le contenu rédactionnel + registre [À VALIDER]
lib/
  navigation.ts        # source unique du menu et du footer
public/brand/          # SVG logo + favicons générés
scripts/
  generate-assets.mjs  # favicons 16/32/180/512 + favicon.ico + OG 1200×630
```

## Tokens

Définis dans `app/globals.css` (`@theme`) :

- **Couleurs** : `brand-400…800` (dégradé #4c92da → #1a507c), `abyss-900/950`,
  `sky-300/500`, `mist-100/200`, `paper`, `ink`, `slate-400/600`, `alert`.
- **Typo** : `text-display-xl/l/m`, `text-h3`, `text-body-l/body/caption`,
  utilitaire `eyebrow`. Display = Orbitron (≥ 28 px, 8 mots max), corps = DM Sans.
- **Rayons** : `rounded-sm` 8 · `md` 14 · `lg` 22 · `xl` 32 px.
- **Ombres** : `shadow-card` / `shadow-card-hover` — basses et bleutées.
- **Utilitaires maison** : `container-site` (1280 px, gouttières 24/32),
  `bg-gradient-brand` (réservé : 1 CTA par écran), `divider-radial`, `eyebrow`.
- Sections sombres : classe `dark` + `bg-abyss-950` (max 2 par page).

## Règles logo

Fichiers dans `public/brand/`. Usage via `components/marketing/logo.tsx`.

- Hauteur minimale du logo horizontal : **24 px**.
- Zone de protection : hauteur de l'icône ÷ 2 sur les 4 côtés.
- Jamais de recoloration hors des 3 variantes fournies (dégradé / blanc / noir),
  jamais d'ombre portée, jamais d'étirement non homothétique.
- Favicons et OG image générés depuis les SVG : `node scripts/generate-assets.mjs`.

## Ajouter une page

1. Créer `app/<route>/page.tsx` avec `export const metadata` (title < 60 car.,
   description < 155 car.).
2. Fond par défaut `paper` ; chambre noire = `<section className="dark bg-abyss-950">`.
3. Utiliser `container-site`, `SectionHeading`, et `Spark` comme puce.
4. Ajouter la route dans `lib/navigation.ts` si elle entre au menu/footer.
5. (Phase 6) l'ajouter au sitemap.

## Licences des polices

- **Orbitron** (Matt McInerney) — SIL Open Font License 1.1.
- **DM Sans** (Colophon Foundry, Google) — SIL Open Font License 1.1.

Les deux sont servies via `next/font/google` (sous-ensemble latin,
`display: swap`), licence OFL vérifiée sur Google Fonts — usage commercial web
autorisé, aucune obligation d'attribution dans l'interface.

## Composants externes installés

### shadcn/ui (`components/ui/`)
`button` · `input` · `label` · `accordion` · `tabs` · `sheet`
Source : registre officiel shadcn (`pnpm dlx shadcn@latest add <nom>`).

### 21st.dev
Aucun pour l'instant — **pas de clé API MCP disponible** ; les blocs marketing
sont codés à la main en respectant le design system (signalé au client).

### React Bits
Aucun installé à ce stade (phase 3 : SplitText ou BlurText pour le H1,
LogoLoop pour la bande de confiance, AnimatedContent pour les reveals —
vérifier les noms exacts sur reactbits.dev avant installation, variante TS-TW).
La signature « iris de données » est un canvas custom
(décision documentée dans `docs/DESIGN.md`).

## Budget d'animation

Maximum 2 composants lourds (canvas/WebGL) sur tout le site, 1 par page.
L'iris de données consomme 1 slot. Tout respecte `prefers-reduced-motion`.
