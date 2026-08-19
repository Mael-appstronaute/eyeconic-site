import type { Metadata } from "next";
import { Spark } from "@/components/marketing/spark";
import { AttributionTable } from "@/components/mockups/attribution-table";
import { PixelButton } from "@/components/marketing/pixel-button";
import { CtaBanner } from "@/components/marketing/cta-banner";

export const metadata: Metadata = {
  title: "Analytics & attribution",
  description:
    "Revenue proven, not estimated: every sale linked to the message, advisor and store that generated it.",
};

const CHAINE = [
  ["The message", "Sent by an advisor, drafted by Echo"],
  ["The visit", "The client comes back — in store or online"],
  ["The sale", "Rung up on the POS or the site"],
  ["The attribution", "Linked to the original message, no guesswork"],
];

/* Page-specific design: abyss hero + attribution chain. */
export default function AnalyticsPage() {
  return (
    <div className="pt-16">
      {/* Abyss hero — the only dark product subpage */}
      <section className="dark bg-abyss-900">
        <div className="container-site grid items-center gap-12 py-16 lg:grid-cols-2 lg:py-24">
          <div>
            <p className="eyebrow mb-4 flex items-center gap-2.5 text-sky-500">
              <Spark className="size-2.5" />
              Product — Analytics & attribution
            </p>
            <h1 className="font-display text-display-l max-w-xl text-balance text-paper">
              Revenue proven, not estimated.
            </h1>
            <p className="mt-5 max-w-xl text-body-l text-sky-300">
              Which message drove which sale — by store, by region, by
              advisor. Every cycle makes the next one sharper.
            </p>
            <div className="mt-8">
              <PixelButton href="/demo" variant="paper">
                See it on your data
              </PixelButton>
            </div>
          </div>
          <AttributionTable />
        </div>
      </section>

      {/* The attribution chain */}
      <section className="bg-white py-16 lg:py-24">
        <div className="container-site">
          <h2 className="font-display text-display-m text-abyss-900">
            From message to sale, no gaps
          </h2>
          <ol className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {CHAINE.map(([title, text], i) => (
              <li key={title} className="relative border-2 border-abyss-900/15 bg-paper p-6 shadow-card">
                {i < CHAINE.length - 1 ? (
                  <span
                    aria-hidden="true"
                    className="absolute -right-4 top-1/2 z-10 hidden -translate-y-1/2 text-lg text-brand-500 lg:block"
                  >
                    →
                  </span>
                ) : null}
                <p className="text-h3 font-medium text-abyss-900">{title}</p>
                <p className="mt-2 text-body text-slate-600">{text}</p>
              </li>
            ))}
          </ol>
          <p className="mt-8 max-w-2xl text-body text-slate-600">
            Reach, replies, conversions, repeat purchases, attributed
            revenue: the same metrics at every level, from the advisor to the
            executive committee.
          </p>
        </div>
      </section>

      <CtaBanner />
    </div>
  );
}
