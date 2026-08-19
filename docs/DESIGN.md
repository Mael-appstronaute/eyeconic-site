# Eyeconic — Plan de design (v2, DA « 8-bit × Eyeconic », validé 19/08)

Pivot : l'ancienne direction (site clair, iris à traits radiaux) est
remplacée par la DA 8-bit calquée sur la structure du template React Bits
Pro « 8-bit » (rbp-8-bit-template.vercel.app). Structure reprise, code non
copié (produit commercial — aucune ligne empruntée).

**Hero retenu : direction B — « Le scan traverse tout »** (choix Maël 19/08).

## Les 8 règles de la DA

1. Zéro border-radius (exception : carré arrondi de l'icône du logo).
2. Bordures 2 px · ombres décalées non floutées `4px 4px 0 0 #041f38`.
3. Trame 8 px en faible opacité sur les sections sombres (`bg-grid-8`).
4. Encoches d'angle 8 px en clip-path (`notch-*`), 1 ou 2 angles, jamais 4.
5. Motion en paliers `steps(6)`/`steps(8)` — compteurs, scan, transitions.
6. DM Mono = 3e police (données, chiffres, eyebrows, tags, prix).
7. Fond dominant sombre (#000, panneaux #06335a) ; 2 sections claires max
   par page, jamais consécutives (ici : comparatif + tarifs).
8. Interdits : emoji, glassmorphisme, blobs violets, icônes Lucide ×6,
   numérotation décorative, crème+terracotta, vert acide.

## Palette — 6 valeurs nommées

| Nom | Valeur | Rôle |
|---|---|---|
| Void | `#000000` | Fond de base, dominant |
| Panneau | `#06335a` | Panneaux/cartes sombres, départ dégradé d'ambiance |
| Papier | `#f9f9f9` | Texte sur sombre + sections claires |
| Faisceau | `#4c92da` | Départ dégradé de marque |
| Profond | `#1a507c` | Arrivée dégradé de marque |
| Ciel | `#6a94d3` | Accent secondaire ; resserrage sombre `#6a94d3→#4c92da` |

Alerte `#e8703a` : états d'alerte uniquement. Échelle étendue : `@theme`
dans `app/globals.css`.

**Deux dégradés, usages étanches :**
- `--gradient-brand` 135° (`bg-gradient-brand`, 90° barres) — logo, 1 CTA
  par écran, barre de scroll, pixels allumés, soulignement d'un mot du H1.
- `--gradient-ambient` 200° — fonds de section uniquement (clôture).

## Typographie

Orbitron (display, ≥28 px, uppercase) · DM Sans (corps) · DM Mono
(eyebrow 12 px caps tracking 0.14em, données, prix). Échelle fluide :
`--text-*` dans `globals.css`.

## La signature « l'iris qui scanne » — direction B

`components/marketing/pixel-iris.tsx` — canvas 2D custom (React Bits
PixelCard/Dither écartés : géométrie et steps() impossibles hors boîte).
Grille 16 px (carrés 12 + gap 4, base 8), œil en vesica plein fond du hero,
pupille elliptique **vide** où vit le texte.

1. Repos : respiration de l'anneau de pupille, 6 paliers sur 7 s.
2. Scan : colonne qui traverse la grille colonne par colonne (7 s/cycle),
   allume ~10 % des cellules par grappes de 2–4 dans `#6a94d3→#4c92da`
   (dégradé resserré — contraste sur sombre). La rareté est le message.
3. Survol : le pixel allumé le plus proche se détache d'un cran de grille,
   micro-carte client `[Données démo]`.

PRNG déterministe (motif stable), `dynamic(ssr:false)`, fallback statique =
rendu `prefers-reduced-motion`, DPR ≤ 2, rAF coupé hors viewport.
**Hero uniquement.** Slot lourd 1/2 ; slot 2 = benchmark.

## Décisions issues de l'auto-critique

1. **Benchmark en piles de pixels** : les barres montent par unités 8-bit
   en paliers — le steps() y est fonctionnel, pas décoratif. Aucune valeur
   affichée : hauteurs illustratives balisées `[Données à produire]`.
2. **Bento sans icônes** : libellés de données DM Mono en tête de carte
   (`Vue client — 1 fiche / n sources`), fiche technique plutôt que plaquette.
3. **Portraits en trame de points** (halftone bleu 2 px, référence gravure),
   pas d'avatars pixel-art : la clientèle luxe ne supporte pas le gadget.

## Décisions prises pendant la phase 3 (à arbitrer si besoin)

- CTA header « Essai gratuit » en **papier solide**, pas en dégradé : la
  règle « un seul CTA dégradé par écran » est réservée au CTA de section.
- H1 et certains titres du brief dépassent la règle « 8 mots Orbitron »
  (contenu verbatim prioritaire). Le titre du comparatif est scindé :
  Orbitron pour la 1re phrase (8 mots), DM Sans pour la seconde.
- Titre section 6 : la 2e phrase (« Elle se voit dans le chiffre
  d'affaires. ») passe en intro sous le titre.
- Sur mobile, H1 à 28 px (minimum charte) + voile `bg-ink/55` sous le
  texte du hero (la pupille ne couvre pas tout).
- Footer : 4 colonnes conformes au brief, liens légaux dans la barre basse.
- FAQ : réponses rédigées à partir des seuls faits produit du brief ;
  la politique exacte de dépassement de crédits est balisée `[À valider]`.

## Reste à faire (phases 4–5)

/tarifs (grille + comparatif + calculateur ROI + FAQ longue) · /produit ·
/demo · /essai · structure [locale] · stubs 404 des liens footer · SEO
complet (sitemap, robots, OG par page) · audit Lighthouse/WCAG · README.
