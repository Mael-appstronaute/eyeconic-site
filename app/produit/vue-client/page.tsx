import type { Metadata } from "next";
import { Spark } from "@/components/marketing/spark";
import { PixelButton } from "@/components/marketing/pixel-button";
import { CustomerCard } from "@/components/mockups/customer-card";
import { CtaBanner } from "@/components/marketing/cta-banner";
import { FicheMotif } from "@/components/marketing/hero-motifs";

export const metadata: Metadata = {
  title: "Single customer view",
  description:
    "All your customer data, unified: store, e-commerce, POS, messaging — including what used to sleep in a notebook.",
};

const SOURCES = [
  ["Store", "Purchases, fittings, appointments"],
  ["E-commerce", "Orders, browsing, wishlist"],
  ["POS", "Receipts, returns, credit notes"],
  ["Messaging", "WhatsApp, SMS, WeChat, LINE, email"],
  ["Notebooks", "What had never been logged"],
];

/* Page-specific design: sources converging into the customer card. */
export default function VueClientPage() {
  return (
    <div className="pt-16">
      <section className="relative overflow-hidden bg-white">
        <FicheMotif className="absolute -right-8 top-1/2 hidden w-[420px] -translate-y-1/2 lg:block" />
        <div className="container-site relative py-16 lg:py-24">
          <p className="eyebrow mb-4 flex items-center gap-2.5 text-brand-600">
            <Spark className="size-2.5" />
            Product — Single customer view
          </p>
          <h1 className="font-display text-display-l max-w-3xl text-balance text-abyss-900">
            One client, one profile. At last.
          </h1>
          <p className="mt-5 max-w-2xl text-body-l text-slate-600">
            Every purchase, every message, every fitting, every appointment.
            Iris connects all your sources into a single customer view, kept
            up to date continuously.
          </p>
        </div>
      </section>

      {/* Convergence: sources → profile */}
      <section className="bg-paper py-16 lg:py-24">
        <div className="container-site grid items-center gap-10 lg:grid-cols-[minmax(0,5fr)_auto_minmax(0,4fr)]">
          <ul className="space-y-3">
            {SOURCES.map(([name, desc]) => (
              <li
                key={name}
                className="flex items-baseline justify-between gap-4 border-2 border-abyss-900/15 bg-white px-5 py-3.5 shadow-card"
              >
                <span className="text-sm font-medium text-abyss-900">{name}</span>
                <span className="text-right text-caption text-slate-600">{desc}</span>
              </li>
            ))}
          </ul>

          <div aria-hidden="true" className="hidden flex-col items-center gap-1 lg:flex">
            <span className="text-2xl text-brand-500">→</span>
          </div>

          <CustomerCard />
        </div>

        <div className="container-site mt-12 flex flex-wrap gap-4">
          <PixelButton href="/demo" variant="brand">
            See it on your data
          </PixelButton>
          <PixelButton href="/produit" variant="outline">
            Back to product
          </PixelButton>
        </div>
      </section>

      <CtaBanner />
    </div>
  );
}
