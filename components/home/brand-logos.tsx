/**
 * Logos des maisons FICTIVES — lockups SVG dessinés (symbole +
 * logotype) en currentColor, comme les fausses marques du template.
 * Jamais de vraies entreprises : fausse recommandation + marques.
 */

export function SeverinLogo() {
  return (
    <span className="flex items-center gap-2.5">
      <svg viewBox="0 0 24 24" className="size-6" aria-hidden="true">
        <path d="M12 2l6 6-6 14L6 8Z" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        <path d="M6 8h12M12 2l-2.5 6L12 22l2.5-14Z" fill="none" stroke="currentColor" strokeWidth="0.9" strokeLinejoin="round" />
      </svg>
      <span className="text-lg font-semibold tracking-[0.14em]">SÉVERIN</span>
    </span>
  );
}

export function OrveaLogo() {
  return (
    <span className="flex items-center gap-2">
      <svg viewBox="0 0 24 24" className="size-6" aria-hidden="true">
        <circle cx="12" cy="12" r="8.5" fill="none" stroke="currentColor" strokeWidth="2.4" />
        <path d="M12 3.5v6" stroke="currentColor" strokeWidth="2.4" />
      </svg>
      <span className="text-lg font-light uppercase tracking-[0.28em]">Orvea</span>
    </span>
  );
}

export function LineaLogo() {
  return (
    <span className="flex items-center gap-2">
      <svg viewBox="0 0 24 24" className="size-6" aria-hidden="true">
        <path d="M12 21C7 16 7 9 12 3c5 6 5 13 0 18Z" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <path d="M12 21V3" stroke="currentColor" strokeWidth="1" />
      </svg>
      <span className="text-lg font-medium lowercase">
        linéa <em className="font-light">beauté</em>
      </span>
    </span>
  );
}

export function DelcourtLogo() {
  return (
    <span className="flex items-center gap-2.5">
      <svg viewBox="0 0 24 24" className="size-5" aria-hidden="true">
        <rect x="3" y="3" width="8" height="8" fill="currentColor" />
        <rect x="13" y="3" width="8" height="8" fill="currentColor" opacity="0.7" />
        <rect x="3" y="13" width="8" height="8" fill="currentColor" opacity="0.7" />
        <rect x="13" y="13" width="8" height="8" fill="currentColor" opacity="0.35" />
      </svg>
      <span className="text-lg font-bold uppercase tracking-[0.1em]">Delcourt</span>
    </span>
  );
}

export function AurigeLogo() {
  return (
    <span className="flex items-center gap-2.5">
      <svg viewBox="0 0 24 24" className="size-6" aria-hidden="true">
        <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <path d="M12 6.5V12l4 2.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M12 3v1.5M21 12h-1.5M12 21v-1.5M3 12h1.5" stroke="currentColor" strokeWidth="1.4" />
      </svg>
      <span className="text-lg font-semibold uppercase tracking-[0.3em]">Aurige</span>
    </span>
  );
}

export function CassiopeeLogo() {
  return (
    <span className="flex items-center gap-2">
      <svg viewBox="0 0 24 24" className="size-6" aria-hidden="true">
        <path d="M12 3l2 6 6 2-6 2-2 6-2-6-6-2 6-2Z" fill="currentColor" />
        <circle cx="19" cy="5" r="1.4" fill="currentColor" opacity="0.6" />
      </svg>
      <span className="text-lg font-medium tracking-[0.08em]">Cassiopée</span>
    </span>
  );
}

export function LouvelLogo() {
  return (
    <span className="flex items-center gap-2.5">
      <svg viewBox="0 0 24 24" className="size-6" aria-hidden="true">
        <path d="M4 21V10a8 8 0 0 1 16 0v11" fill="none" stroke="currentColor" strokeWidth="2" />
        <path d="M9 21v-6a3 3 0 0 1 6 0v6" fill="none" stroke="currentColor" strokeWidth="1.4" />
      </svg>
      <span className="text-lg font-semibold">
        Maison <span className="font-light">Louvel</span>
      </span>
    </span>
  );
}

export function NordlysLogo() {
  return (
    <span className="flex items-center gap-2">
      <svg viewBox="0 0 24 24" className="size-6" aria-hidden="true">
        <path d="M3 20L9 6l4 9 3-5 5 10Z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        <circle cx="18.5" cy="5.5" r="1.6" fill="currentColor" />
      </svg>
      <span className="text-lg font-bold uppercase tracking-[0.18em]">Nordlys</span>
    </span>
  );
}
