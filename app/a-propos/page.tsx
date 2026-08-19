import type { Metadata } from "next";
import { Spark } from "@/components/marketing/spark";
import { PixelButton } from "@/components/marketing/pixel-button";
import { EclatMotif } from "@/components/marketing/hero-motifs";

export const metadata: Metadata = {
  title: "About",
  description:
    "Eyeconic brings together what your clients tell you and what your teams do with it. Why we're building this tool, and how.",
};

const CONVICTIONS = [
  [
    "The advisor first",
    "A clienteling tool sellers don't open is worthless. Every screen is designed for someone standing on the shop floor, between two clients.",
  ],
  [
    "AI that steps back",
    "Our agents prepare, prioritize, draft — but the relationship belongs to the advisor. Nothing goes out without a human hand.",
  ],
  [
    "Proof, not promises",
    "Clienteling has always suffered from being unmeasurable. Attribution has been in the product since day one, not in an optional module.",
  ],
];

/* Page-specific design: typographic manifesto on mist. */
export default function AProposPage() {
  return (
    <div className="pt-16">
      {/* Manifesto */}
      <section className="relative overflow-hidden bg-mist-100">
        <EclatMotif className="absolute -right-20 -top-20 hidden w-[440px] lg:block" />
        <div className="container-site relative py-20 lg:py-32">
          <p className="eyebrow mb-6 flex items-center gap-2.5 text-brand-600">
            <Spark className="size-2.5" />
            About
          </p>
          <p className="font-display text-display-l max-w-4xl text-balance text-abyss-900">
            Eyeconic brings together what your clients tell you and what your
            teams do with it.
          </p>
          <p className="mt-8 max-w-2xl text-body-l text-slate-600">
            Customer data on one side, in-store execution on the other, in a
            single tool. We build Eyeconic for premium and luxury brands with
            5 to 300 locations — and first of all for the people who sell.
          </p>
        </div>
      </section>

      {/* Convictions */}
      <section className="bg-paper py-16 lg:py-24">
        <div className="container-site">
          <div className="grid gap-x-10 gap-y-12 lg:grid-cols-3">
            {CONVICTIONS.map(([title, text]) => (
              <div key={title} className="border-t-4 border-brand-500 pt-5">
                <h2 className="text-h3 font-medium text-abyss-900">{title}</h2>
                <p className="mt-3 text-body text-slate-600">{text}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 border-2 border-abyss-900/15 bg-white p-8 shadow-card lg:p-10">
            <p className="eyebrow text-brand-600">The team</p>
            <p className="mt-3 max-w-2xl text-body-l text-slate-600">
              A team from retail, CRM and product. Portraits and backgrounds
              coming — <span className="text-slate-400">[Team to present]</span>.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <PixelButton href="/contact" variant="brand">
                Write to us
              </PixelButton>
              <PixelButton href="/demo" variant="outline">
                Book a demo
              </PixelButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
