# Eyeconic — Plan de design (validé)

Direction hero retenue : **B — « Le regard entre dans le cadre »** (validée par Maël, confiance donnée sur le design).

## L'idée directrice

Le regard. Eyeconic voit ce que les autres outils manquent. L'icône est un œil
stylisé contenant un éclat. Toute la direction découle de là.

**Concept de mise en page :** la page fonctionne comme une mise au point
optique — un axe radial vertical de 1 px guide l'œil du hero au CTA final, les
sections claires sont le champ net où l'on démontre, et les deux chambres
noires (hero, agents) sont les moments où l'écran s'éteint pour que les
signaux s'illuminent.

## Palette — 6 valeurs nommées

| Nom | Valeur | Rôle |
|---|---|---|
| Papier | `#f9f9f9` | Fond par défaut, ~80 % des sections |
| Encre | `#000000` | Texte courant, titres sur fond clair |
| Abysse | `#041f38` | Chambres noires : hero, agents — max 2/page, jamais consécutives |
| Faisceau | `#4c92da → #1a507c` | Dégradé réservé : logo, 1 CTA primaire/écran, signaux de l'iris |
| Ciel | `#6a94d3` | Accent secondaire : liens, hover, lignes actives |
| Brume | `#eef3fa` | Surfaces : cartes, fonds de mockups, manifeste |

Hors palette décorative : Alerte `#e8703a`, états d'alerte uniquement.
Échelle étendue : voir `@theme` dans `app/globals.css`.

## Typographie

Orbitron (display, ≥ 28 px, 8 mots max par titre) + DM Sans (corps).
Exception unique : eyebrow Orbitron SemiBold 12 px capitales tracking 0.12em.
Échelle fluide complète dans `app/globals.css` (`--text-*`).

## La signature : l'iris de données

Canvas 2D custom (React Bits Orb/Galaxy écartés : ils ne racontent pas des
clients). ~1 400 traits radiaux fins, longueurs en distribution log-normale
(beaucoup de clients discrets, quelques VIC longs). Pupille centrale vide au
rapport géométrique de l'icône.

1. **Repos** : respiration ±1,5 % du rayon, cycle 7 s, scintillement lent.
2. **Scroll** : 8–12 % des traits s'illuminent dans le dégradé Faisceau, par
   grappes — les signaux détectés. Jamais plus : la rareté est le message.
3. **Survol** : le trait le plus proche s'étend de 20 %, mini-carte client
   HTML à son extrémité (données fictives balisées `[DONNÉES DÉMO]`).

Technique : `dynamic(…, { ssr: false })`, fallback SVG statique (~120 traits)
qui sert aussi de rendu `prefers-reduced-motion`. DPR plafonné à 2, rAF coupé
hors viewport. Plein format uniquement sur le hero home ; déclinaison figée
(secteur d'arc 60°, SVG statique) sur les pages agents.

Budget animation : l'iris = 1 des 2 slots lourds. Le second reste en réserve.

## Hero retenu — « Le regard entre dans le cadre »

Grille 7/5 : texte à gauche sur Abysse, iris coupé par le bord droit du
viewport (~60 % visible), comme un œil qui entre dans le champ. Trois ou
quatre traits radiaux s'échappent de l'iris, traversent la zone de texte et
soulignent les mots « signaux » et « lit » du H1. Mini-cartes client au survol
entre texte et iris.

## Décisions issues de l'auto-critique

1. **Agents : « banc optique » au lieu du bento générique.** Un faisceau 1 px
   au dégradé Faisceau traverse physiquement les cartes dans l'ordre réel du
   flux : Iris construit → Signal détecte → Prisme segmente → Focus priorise
   → Écho rédige. Le faisceau se disperse en 3 branches en sortant de Prisme,
   converge en entrant dans Focus. Hover = illumination du segment de
   faisceau. Pas de numérotation.
2. **Preuve et confiance : « fiche technique » au lieu de 6 cartes à icônes.**
   Spec-sheet à filets radiaux fins, libellé à gauche, valeur factuelle à
   droite, zéro icône — comme la fiche de caractéristiques d'un objectif.
3. **Manifeste sur Brume, pas sur Abysse.** Typographie Encre en display-xl,
   éclat de l'icône en puce géante. Respecte la règle des 2 chambres noires.

## Interdits (rappel brief)

Fond crème + serif + terracotta · noir + vert acide · mise en page journal ·
grilles de cartes à icône Lucide · numérotation 01/02/03 décorative · emoji ·
blobs violets · glassmorphisme gratuit · dégradé sur fonds/cartes/texte.

## Motifs autorisés

L'éclat (`components/marketing/spark.tsx`) comme puce et marqueur · l'arc de
l'œil comme découpe de section · le trait radial fin comme divider
(`divider-radial`).
