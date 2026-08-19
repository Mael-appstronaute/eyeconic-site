import { SectionHeading } from "@/components/marketing/section-heading";
import { Reveal } from "@/components/marketing/reveal";

const PORTRAITS = [
  "Conseillère de vente",
  "Directeur de boutique",
  "Responsable CRM",
  "Conseiller de vente",
  "Directrice de région",
  "Client experience",
  "Conseillère de vente",
  "Directeur des opérations",
];

/**
 * Section 3 — la bande équipes. Placeholders explicites traités en
 * trame de points bleue : aucune photo de stock, aucun avatar généré.
 */
export function TeamStrip() {
  return (
    <section className="bg-paper py-20 lg:py-32">
      <div className="container-site">
        <SectionHeading
          eyebrow="Le terrain"
          title="Conçu pour les gens qui vendent, pas pour ceux qui regardent les tableaux"
          intro="Du conseiller en boutique au directeur de région, tout le monde travaille dans le même outil, avec le même client au centre."
        />
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-8">
          {PORTRAITS.map((role, i) => (
            <Reveal key={i} delay={i}>
              <div className="flex aspect-3/4 flex-col justify-between rounded-lg border border-abyss-900/10 bg-white p-3 shadow-card">
                <div
                  aria-hidden="true"
                  className="grow rounded-md"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle, rgba(76,146,218,0.45) 1px, transparent 1px)",
                    backgroundSize: "6px 6px",
                    maskImage:
                      "radial-gradient(ellipse 60% 45% at 50% 38%, #000 55%, transparent 72%)",
                  }}
                />
                <div>
                  <p className="text-[11px] font-medium uppercase tracking-wide text-slate-400">
                    [Portrait {i + 1}]
                  </p>
                  <p className="mt-0.5 text-[11px] font-medium uppercase tracking-wide text-brand-600">
                    {role}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
