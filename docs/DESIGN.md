# Eyeconic — Plan de design (v3.1, « charte pure, blocs carrés », validé 19/08)

Historique : v1 « mise au point optique » (clair, iris radial) → v2 pivot
8-bit sombre (rejetée par Maël : trop de noir, fond du hero refusé) →
v3 claire arrondie → **v3.1 retenue : palette et fonds de la v3 claire,
mais boutons et blocs repris de la v2** (demande Maël : « remet les
boutons comme avant et les blocs carrés »). La structure 13 sections et
le contenu du brief sont conservés tels quels.

## Principes

1. Dominante Papier `#f9f9f9`, cartes blanches. **Zéro border-radius**
   (exception : carré arrondi de l'icône du logo).
2. Blocs : bordures 2 px + **ombres décalées non floutées**
   `4px 4px 0 0 #041f38` (`shadow-card`, hover 6 px). Teinte abysse,
   jamais noires.
3. Boutons : CTA plein encoché `notch-tr-bl` (dégradé de marque, ou blanc
   sur fond dégradé), secondaires en bordure 2 px, enfoncement d'un cran
   au clic. Pas d'ombre sur les variantes encochées (le clip-path la
   rognerait).
4. **Aucune surface noire.** Les moments sombres sont bleu abysse
   `#06335a` (scope `.dark`) : carte tarifs mise en avant, panneau CTA
   final, footer.
5. Typographie charte stricte : Orbitron (display ≥ 28 px, 8 mots max) +
   DM Sans. Eyebrow = Orbitron 12 px caps tracking 0.12em (exception
   documentée). DM Mono retirée (v2 uniquement).
6. Motion douce ease-out (reveal, compteurs, barres). Pas de steps().

## Les deux dégradés — usages étanches

- `--gradient-brand` 135° `#4c92da → #1a507c` (90° sur barres) : logo,
  **1 CTA par écran** (header « Essai gratuit », carte Réseau), barre de
  progression de scroll, soulignement du mot « signaux » du H1 (blanc sur
  le hero dégradé, le dégradé ne se verrait pas sur lui-même).
- `--gradient-ambient` 200° `#06335a → #1a507c → #4c92da → #6a94d3`
  (couverture de la charte) : fonds de section uniquement — **hero** et
  **clôture**. Jamais sur un élément d'interface.

## Le hero

Fond `bg-gradient-ambient`, texte blanc aligné à gauche, CTA blanc plein +
bordure blanche. Décor `HeroOptics` : géométrie fine dérivée de l'icône
(arcs concentriques + 36 traits radiaux + l'éclat), SVG statique blanc à
16 % d'opacité, côté droit. Bande de 3 statistiques sur blanc sous le hero
(compteurs ease-out 0,9 s).

## Sections (contenu brief inchangé)

Équipes : cartes blanches, portraits en trame de points bleue
([PORTRAIT n], zéro photo) · Mécanisme : accordéon cartes blanches +
mockups clairs (fiche client / WhatsApp / attribution) · Bento : 6 cartes
blanches shadow-card, eyebrow Orbitron, mockup tâches · Comparatif :
panneau papier, onglets pill, barres animées en hauteur (Eyeconic en
dégradé de marque), valeurs [Données à produire] · Témoignages :
carrousel carte blanche, placeholders · Cas d'usage : 3 cartes papier ·
Tarifs : carte Réseau en abysse `.dark` surélevée, CTA dégradé, encart
crédits IA + micro-schéma · FAQ : carte blanche accordéon · CTA final :
panneau abysse arrondi · Clôture : gradient-ambient display-xl · Footer :
abysse, 4 colonnes + newsletter + FR/EN + badges + légal.

## Mockups

`components/mockups/` — fenêtres blanches, barre de titre Brume, tags et
accents aux bleus de marque. Données fictives balisées [Données démo].

## Reste à faire (phases 4–5)

/tarifs (grille + comparatif + calculateur ROI + FAQ longue) · /produit ·
/demo · /essai · structure [locale] · stubs 404 footer · SEO complet ·
audit Lighthouse/WCAG · README. Registre des [À VALIDER] :
docs/CONTENT.md.
