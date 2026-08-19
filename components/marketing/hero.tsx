import { PixelButton } from "@/components/marketing/pixel-button";
import { StatCounter } from "@/components/marketing/stat-counter";

/**
 * Hero — fond au dégradé d'ambiance de la couverture de la charte
 * (abysse → bleu ciel), texte blanc, décor optique discret dérivé de
 * l'icône : arcs concentriques + traits radiaux fins, statiques.
 */
export function Hero() {
  return (
    <>
      <section id="top" className="dark bg-gradient-ambient relative overflow-hidden pt-16">
        <HeroOptics />

        <div className="container-site relative z-10 flex min-h-[calc(92svh-4rem)] flex-col items-start justify-center py-24">
          <p className="eyebrow mb-6 text-sky-300">
            Pour les directions retail, CRM et opérations
          </p>
          <h1 className="font-display text-display-xl max-w-4xl text-balance text-paper">
            Vos meilleurs clients envoient des{" "}
            <span className="bg-[linear-gradient(#f9f9f9,#f9f9f9)] bg-no-repeat [background-position:0_97%] [background-size:100%_0.07em]">
              signaux
            </span>
            {". Personne ne les lit."}
          </h1>
          <p className="mt-8 max-w-2xl text-body-l text-paper/85">
            Eyeconic unifie vos données boutique, e-commerce et messagerie,
            puis met cinq agents IA au service de vos équipes. Ils savent qui
            contacter, quand, avec quoi — et vous voyez ce que ça rapporte.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <PixelButton href="/essai" variant="paper">
              Démarrer gratuitement
            </PixelButton>
            <PixelButton href="/demo" variant="outline-paper">
              Réserver une démo
            </PixelButton>
          </div>
          <p className="mt-8 text-caption font-medium uppercase tracking-wide text-paper/70">
            Plan gratuit · Opérationnel en 7 jours · Données hébergées en
            Europe
          </p>
        </div>
      </section>

      {/* 3 statistiques — bande blanche sous le hero */}
      <section className="border-b border-abyss-900/10 bg-white">
        <div className="container-site grid gap-10 py-12 sm:grid-cols-3 lg:py-16">
          <StatCounter value={4.2} decimals={1} prefix="×" label="Panier moyen des clients suivis" unverified />
          <div className="sm:border-l sm:border-abyss-900/10 sm:pl-10">
            <StatCounter value={7} suffix=" jours" label="De mise en service" />
          </div>
          <div className="sm:border-l sm:border-abyss-900/10 sm:pl-10">
            <StatCounter value={40} suffix="+" label="Intégrations natives" unverified />
          </div>
        </div>
      </section>
    </>
  );
}

/** Décor : l'œil de l'icône en géométrie fine — arcs + traits radiaux. */
function HeroOptics() {
  const rays = Array.from({ length: 36 }, (_, i) => {
    const a = (i / 36) * Math.PI * 2;
    const r1 = 210;
    const r2 = 320 + (i % 5) * 40;
    return {
      x1: 720 + Math.cos(a) * r1,
      y1: 400 + Math.sin(a) * r1,
      x2: 720 + Math.cos(a) * r2,
      y2: 400 + Math.sin(a) * r2,
    };
  });
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1440 800"
      preserveAspectRatio="xMaxYMid slice"
      className="pointer-events-none absolute inset-y-0 right-0 h-full w-full opacity-[0.16] lg:w-[62%]"
    >
      <g stroke="#f9f9f9" fill="none">
        <circle cx="720" cy="400" r="180" strokeWidth="1.5" />
        <circle cx="720" cy="400" r="260" strokeWidth="1" opacity="0.7" />
        <circle cx="720" cy="400" r="340" strokeWidth="1" opacity="0.45" />
        <circle cx="720" cy="400" r="430" strokeWidth="1" opacity="0.25" />
        {rays.map((r, i) => (
          <line
            key={i}
            x1={r.x1}
            y1={r.y1}
            x2={r.x2}
            y2={r.y2}
            strokeWidth="1"
            opacity={0.25 + (i % 3) * 0.15}
          />
        ))}
        {/* L'éclat de l'icône, au centre */}
        <path
          d="M720 330c7 40 33 66 70 70-37 4-63 30-70 70-7-40-33-66-70-70 37-4 63-30 70-70Z"
          fill="#f9f9f9"
          stroke="none"
          opacity="0.5"
        />
      </g>
    </svg>
  );
}
