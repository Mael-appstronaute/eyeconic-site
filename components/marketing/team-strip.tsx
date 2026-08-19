import { SectionHeading } from "@/components/marketing/section-heading";
import { Reveal } from "@/components/marketing/reveal";

const PORTRAITS = [
  "Sales advisor",
  "Store manager",
  "CRM manager",
  "Sales advisor",
  "Regional director",
  "Client experience",
  "Sales advisor",
  "Operations director",
];

/**
 * Section 3 — the team strip. Explicit placeholders rendered as a blue
 * dot halftone: no stock photos, no generated avatars.
 */
export function TeamStrip() {
  return (
    <section className="bg-paper py-20 lg:py-32">
      <div className="container-site">
        <SectionHeading
          eyebrow="The shop floor"
          title="Built for the people who sell, not the ones watching dashboards"
          intro="From the advisor on the floor to the regional director, everyone works in the same tool, with the same client at the center."
        />
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-8">
          {PORTRAITS.map((role, i) => (
            <Reveal key={i} delay={i}>
              <div className="flex aspect-3/4 flex-col justify-between border-2 border-abyss-900/15 bg-white p-3 shadow-card">
                <div
                  aria-hidden="true"
                  className="grow"
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
