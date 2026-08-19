import { cn } from "@/lib/utils";

/**
 * Motifs de hero — un par page, en rapport avec son sujet.
 * Géométrie abstraite aux couleurs de marque, jamais d'icône générique.
 * Tous décoratifs (aria-hidden), posés en absolu dans le hero.
 */

function Motif({
  className,
  viewBox = "0 0 400 300",
  children,
}: {
  className?: string;
  viewBox?: string;
  children: React.ReactNode;
}) {
  return (
    <svg
      aria-hidden="true"
      viewBox={viewBox}
      className={cn("pointer-events-none select-none", className)}
    >
      {children}
    </svg>
  );
}

/* Vue client — des fragments épars qui deviennent une fiche */
export function FicheMotif({ className }: { className?: string }) {
  return (
    <Motif className={className}>
      <g stroke="#4c92da" strokeWidth="2" fill="none" opacity="0.5">
        <rect x="30" y="40" width="70" height="10" fill="#dce7f5" stroke="none" />
        <rect x="20" y="90" width="50" height="10" fill="#dce7f5" stroke="none" />
        <rect x="45" y="150" width="62" height="10" fill="#dce7f5" stroke="none" />
        <rect x="28" y="210" width="44" height="10" fill="#dce7f5" stroke="none" />
        <path d="M110 45h60M80 95h90M117 155h53M82 215h88" strokeDasharray="4 6" />
      </g>
      <g>
        <rect x="180" y="30" width="190" height="240" fill="#ffffff" stroke="#06335a" strokeOpacity="0.2" strokeWidth="2" />
        <rect x="200" y="55" width="44" height="44" fill="#4c92da" />
        <rect x="256" y="60" width="90" height="10" fill="#06335a" opacity="0.75" />
        <rect x="256" y="80" width="60" height="8" fill="#8a97a5" opacity="0.6" />
        <rect x="200" y="125" width="150" height="8" fill="#dce7f5" />
        <rect x="200" y="147" width="120" height="8" fill="#dce7f5" />
        <rect x="200" y="169" width="140" height="8" fill="#dce7f5" />
        <rect x="200" y="205" width="150" height="40" fill="#eef3fa" stroke="#4c92da" strokeOpacity="0.5" strokeWidth="2" />
      </g>
    </Motif>
  );
}

/* Canaux — des bulles de conversation en escalier */
export function BullesMotif({ className }: { className?: string }) {
  return (
    <Motif className={className}>
      <g>
        <path d="M40 60h130v46H62l-22 18Z" fill="#dce7f5" />
        <path d="M230 40h130v46h-108l-22 18Z" fill="none" stroke="#4c92da" strokeWidth="2" opacity="0.6" />
        <path d="M90 150h150v46H112l-22 18Z" fill="none" stroke="#06335a" strokeOpacity="0.25" strokeWidth="2" />
        <path d="M230 230h130v46h-108l-22 18Z" fill="#4c92da" opacity="0.9" />
        <rect x="250" y="248" width="70" height="8" fill="#f9f9f9" />
      </g>
    </Motif>
  );
}

/* Intégrations — des nœuds reliés au centre */
export function NoeudsMotif({ className }: { className?: string }) {
  return (
    <Motif className={className}>
      <g stroke="#4c92da" strokeWidth="1.5" opacity="0.5">
        <path d="M200 150 60 60M200 150 340 52M200 150 52 240M200 150 344 232M200 150 200 30M200 150 200 272" />
      </g>
      <g>
        {[
          [60, 60], [340, 52], [52, 240], [344, 232], [200, 30], [200, 272],
        ].map(([x, y], i) => (
          <rect key={i} x={x - 12} y={y - 12} width="24" height="24" fill={i % 2 ? "#dce7f5" : "#ffffff"} stroke="#06335a" strokeOpacity="0.25" strokeWidth="2" />
        ))}
        <rect x="176" y="126" width="48" height="48" fill="#4c92da" />
        <circle cx="200" cy="150" r="9" fill="#f9f9f9" />
      </g>
    </Motif>
  );
}

/* Ressources — des feuilles empilées */
export function PilesMotif({ className }: { className?: string }) {
  return (
    <Motif className={className}>
      <rect x="120" y="90" width="180" height="220" fill="#dce7f5" transform="rotate(-8 210 200)" />
      <rect x="120" y="70" width="180" height="220" fill="#ffffff" stroke="#06335a" strokeOpacity="0.2" strokeWidth="2" transform="rotate(-3 210 180)" />
      <rect x="120" y="50" width="180" height="220" fill="#ffffff" stroke="#4c92da" strokeOpacity="0.7" strokeWidth="2" />
      <rect x="145" y="80" width="100" height="10" fill="#06335a" opacity="0.7" />
      <rect x="145" y="108" width="130" height="7" fill="#dce7f5" />
      <rect x="145" y="128" width="115" height="7" fill="#dce7f5" />
      <rect x="145" y="148" width="125" height="7" fill="#dce7f5" />
    </Motif>
  );
}

/* Blog — les guillemets français, très grands */
export function CitationMotif({ className }: { className?: string }) {
  return (
    <Motif className={className}>
      <text x="30" y="220" fontSize="240" fontFamily="serif" fill="#dce7f5">
        «
      </text>
      <text x="230" y="220" fontSize="240" fontFamily="serif" fill="#4c92da" opacity="0.35">
        »
      </text>
    </Motif>
  );
}

/* Calculateur — les opérateurs du calcul */
export function OperateursMotif({ className }: { className?: string }) {
  return (
    <Motif className={className}>
      <text x="40" y="120" fontSize="90" fontWeight="700" fill="#dce7f5">
        ×
      </text>
      <text x="170" y="180" fontSize="90" fontWeight="700" fill="#4c92da" opacity="0.4">
        %
      </text>
      <text x="290" y="120" fontSize="90" fontWeight="700" fill="#dce7f5">
        €
      </text>
      <path d="M60 240h280" stroke="#06335a" strokeOpacity="0.3" strokeWidth="3" />
      <text x="150" y="292" fontSize="44" fontWeight="700" fill="#06335a" opacity="0.55">
        = ROI
      </text>
    </Motif>
  );
}

/* Sécurité — le coffre : enceintes concentriques, la donnée au centre */
export function CoffreMotif({ className }: { className?: string }) {
  return (
    <Motif className={className} viewBox="0 0 300 300">
      <rect x="30" y="30" width="240" height="240" fill="none" stroke="#dce7f5" strokeWidth="3" />
      <rect x="65" y="65" width="170" height="170" fill="none" stroke="#4c92da" strokeWidth="2" opacity="0.5" />
      <rect x="100" y="100" width="100" height="100" fill="none" stroke="#06335a" strokeOpacity="0.35" strokeWidth="2" />
      <rect x="132" y="132" width="36" height="36" fill="#4c92da" />
      <path d="M270 30l-24 24M30 270l24-24M270 270l-24-24M30 30l24 24" stroke="#dce7f5" strokeWidth="3" />
    </Motif>
  );
}

/* À propos — l'éclat de l'icône, en très grand */
export function EclatMotif({ className }: { className?: string }) {
  return (
    <Motif className={className} viewBox="0 0 300 300">
      <path
        d="M150 10c14 76 64 126 140 140-76 14-126 64-140 140-14-76-64-126-140-140C86 136 136 86 150 10Z"
        fill="#4c92da"
        opacity="0.16"
      />
      <path
        d="M150 80c9 39 31 61 70 70-39 9-61 31-70 70-9-39-31-61-70-70 39-9 61-31 70-70Z"
        fill="#4c92da"
        opacity="0.3"
      />
    </Motif>
  );
}

/* Tarifs — le symbole euro sur grille */
export function EuroMotif({ className }: { className?: string }) {
  return (
    <Motif className={className} viewBox="0 0 300 300">
      <g stroke="#dce7f5" strokeWidth="1.5">
        <path d="M20 75h260M20 150h260M20 225h260M75 20v260M150 20v260M225 20v260" />
      </g>
      <text x="82" y="215" fontSize="190" fontWeight="700" fill="#4c92da" opacity="0.35">
        €
      </text>
    </Motif>
  );
}

/* Démo — l'écran qui se lance */
export function EcranMotif({ className }: { className?: string }) {
  return (
    <Motif className={className}>
      <rect x="60" y="40" width="280" height="180" fill="#ffffff" stroke="#06335a" strokeOpacity="0.25" strokeWidth="2" />
      <rect x="60" y="40" width="280" height="26" fill="#eef3fa" />
      <circle cx="78" cy="53" r="4" fill="#4c92da" />
      <circle cx="94" cy="53" r="4" fill="#dce7f5" />
      <path d="M180 110l52 30-52 30Z" fill="#4c92da" opacity="0.85" />
      <path d="M120 250h160" stroke="#dce7f5" strokeWidth="6" />
      <path d="M160 270h80" stroke="#dce7f5" strokeWidth="6" />
    </Motif>
  );
}

/* Essai — l'interrupteur qui passe à on */
export function EssaiMotif({ className }: { className?: string }) {
  return (
    <Motif className={className} viewBox="0 0 300 300">
      <rect x="40" y="110" width="220" height="80" fill="#dce7f5" />
      <rect x="150" y="120" width="100" height="60" fill="#4c92da" />
      <path d="M186 150l10 12 20-24" stroke="#f9f9f9" strokeWidth="6" fill="none" />
      <path d="M60 60h60M60 80h90" stroke="#dce7f5" strokeWidth="8" />
      <path d="M150 240h90M180 262h60" stroke="#dce7f5" strokeWidth="8" />
    </Motif>
  );
}

/* Produit — les anneaux optiques du logo */
export function AnneauxMotif({ className }: { className?: string }) {
  return (
    <Motif className={className} viewBox="0 0 300 300">
      <g fill="none" stroke="#4c92da">
        <circle cx="150" cy="150" r="130" strokeWidth="1.5" opacity="0.25" />
        <circle cx="150" cy="150" r="95" strokeWidth="1.5" opacity="0.4" />
        <circle cx="150" cy="150" r="60" strokeWidth="2" opacity="0.6" />
      </g>
      <circle cx="150" cy="150" r="26" fill="#4c92da" opacity="0.85" />
      <path
        d="M150 128c4 12 10 18 22 22-12 4-18 10-22 22-4-12-10-18-22-22 12-4 18-10 22-22Z"
        fill="#f9f9f9"
      />
    </Motif>
  );
}

/* Clients — le mur de plaques */
export function PlaquesMotif({ className }: { className?: string }) {
  return (
    <Motif className={className}>
      {[
        [30, 40], [220, 40], [30, 130], [220, 130], [30, 220], [220, 220],
      ].map(([x, y], i) => (
        <g key={i}>
          <rect x={x} y={y} width="150" height="70" fill={i === 3 ? "#4c92da" : "#ffffff"} stroke="#06335a" strokeOpacity="0.2" strokeWidth="2" />
          <rect x={x + 22} y={y + 30} width={80 - (i % 3) * 14} height="10" fill={i === 3 ? "#f9f9f9" : "#dce7f5"} />
        </g>
      ))}
    </Motif>
  );
}

/* Solutions — un motif par secteur */
export function FacettesMotif({ className }: { className?: string }) {
  /* Luxe — la pierre taillée */
  return (
    <Motif className={className} viewBox="0 0 300 300">
      <g stroke="#4c92da" strokeWidth="2" fill="none">
        <path d="M150 40 260 120 150 270 40 120Z" opacity="0.7" />
        <path d="M40 120h220M150 40 95 120l55 150 55-150Z" opacity="0.45" />
        <path d="M95 120h110" opacity="0.45" />
      </g>
      <path d="M150 40 260 120H40Z" fill="#dce7f5" opacity="0.6" />
    </Motif>
  );
}

export function PetalesMotif({ className }: { className?: string }) {
  /* Beauté — la fleur géométrique */
  return (
    <Motif className={className} viewBox="0 0 300 300">
      {[0, 60, 120, 180, 240, 300].map((a) => (
        <ellipse
          key={a}
          cx="150"
          cy="95"
          rx="34"
          ry="62"
          fill="#4c92da"
          opacity="0.16"
          transform={`rotate(${a} 150 150)`}
        />
      ))}
      <circle cx="150" cy="150" r="22" fill="#4c92da" opacity="0.6" />
    </Motif>
  );
}

export function FilMotif({ className }: { className?: string }) {
  /* Mode — la surpiqûre */
  return (
    <Motif className={className}>
      <path
        d="M20 240C90 140 150 260 210 130s110-40 170-80"
        fill="none"
        stroke="#4c92da"
        strokeWidth="3"
        strokeDasharray="14 10"
        opacity="0.6"
      />
      <path
        d="M20 280C90 180 150 300 210 170s110-40 170-80"
        fill="none"
        stroke="#dce7f5"
        strokeWidth="3"
        strokeDasharray="14 10"
      />
      <circle cx="368" cy="56" r="10" fill="none" stroke="#06335a" strokeOpacity="0.4" strokeWidth="3" />
    </Motif>
  );
}

export function CadranMotif({ className }: { className?: string }) {
  /* Retail spécialisé — le cadran, le temps long */
  return (
    <Motif className={className} viewBox="0 0 300 300">
      <circle cx="150" cy="150" r="120" fill="none" stroke="#dce7f5" strokeWidth="3" />
      {Array.from({ length: 12 }).map((_, i) => {
        const a = (i / 12) * Math.PI * 2;
        return (
          <line
            key={i}
            x1={150 + Math.cos(a) * 104}
            y1={150 + Math.sin(a) * 104}
            x2={150 + Math.cos(a) * 118}
            y2={150 + Math.sin(a) * 118}
            stroke="#4c92da"
            strokeWidth="3"
            opacity="0.5"
          />
        );
      })}
      <path d="M150 150V72M150 150l52 36" stroke="#06335a" strokeOpacity="0.5" strokeWidth="4" />
      <circle cx="150" cy="150" r="8" fill="#4c92da" />
    </Motif>
  );
}

/* Contact — l'accusé de réception */
export function EnveloppeMotif({ className }: { className?: string }) {
  return (
    <Motif className={className}>
      <rect x="70" y="70" width="260" height="160" fill="#ffffff" stroke="#06335a" strokeOpacity="0.25" strokeWidth="2" />
      <path d="M70 70l130 100L330 70" fill="none" stroke="#4c92da" strokeWidth="2.5" opacity="0.7" />
      <rect x="256" y="180" width="96" height="30" fill="#4c92da" opacity="0.85" />
      <path d="M270 195l8 9 16-18" stroke="#f9f9f9" strokeWidth="4" fill="none" />
    </Motif>
  );
}
