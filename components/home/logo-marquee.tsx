import {
  AurigeLogo,
  CassiopeeLogo,
  DelcourtLogo,
  LineaLogo,
  LouvelLogo,
  NordlysLogo,
  OrveaLogo,
  SeverinLogo,
} from "@/components/home/brand-logos";

/**
 * Marquee de logos — lockups SVG des maisons FICTIVES (aucune vraie
 * marque), en gris, piste dupliquée pour un défilement continu.
 */
const LOGOS = [
  SeverinLogo,
  OrveaLogo,
  LineaLogo,
  DelcourtLogo,
  AurigeLogo,
  CassiopeeLogo,
  LouvelLogo,
  NordlysLogo,
];

function Track() {
  return (
    <ul aria-hidden="true" className="flex shrink-0 items-center text-slate-400/80">
      {LOGOS.map((LogoComp, i) => (
        <li key={i} className="px-10">
          <LogoComp />
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
