/**
 * Marquee de logos — maisons FICTIVES (aucune vraie marque), logotypes
 * texte en gris, piste dupliquée pour un défilement continu.
 */
const BRANDS = [
  "MAISON SÉVERIN",
  "ORVEA",
  "linéa beauté",
  "DELCOURT",
  "AURIGE",
  "CASSIOPÉE",
  "Maison Louvel",
  "NORDLYS",
];

function Track() {
  return (
    <ul aria-hidden="true" className="flex shrink-0 items-center">
      {BRANDS.map((brand, i) => (
        <li
          key={brand}
          className={`px-10 text-lg font-semibold text-slate-400/80 ${
            i % 3 === 1 ? "tracking-[0.25em]" : i % 3 === 2 ? "font-light italic" : "tracking-[0.12em]"
          }`}
        >
          {brand}
        </li>
      ))}
    </ul>
  );
}

export function LogoMarquee() {
  return (
    <div className="overflow-hidden" role="img" aria-label="Fictional client brands (illustrative)">
      <div className="flex w-max [animation:marquee_36s_linear_infinite] motion-reduce:[animation:none]">
        <Track />
        <Track />
      </div>
    </div>
  );
}
