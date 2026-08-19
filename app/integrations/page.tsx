import type { Metadata } from "next";
import { Spark } from "@/components/marketing/spark";
import { PixelButton } from "@/components/marketing/pixel-button";
import { CtaBanner } from "@/components/marketing/cta-banner";
import { NoeudsMotif } from "@/components/marketing/hero-motifs";

export const metadata: Metadata = {
  title: "Integrations",
  description:
    "Eyeconic connects to your existing stack — e-commerce, POS, CRM, messaging — with two-way sync. Without replacing anything.",
};

const FAMILLES = [
  {
    title: "E-commerce",
    named: ["Shopify"],
    desc: "Orders, customers, wishlists and browsing, synced both ways.",
  },
  {
    title: "Messaging",
    named: ["WhatsApp Business", "SMS", "WeChat", "LINE", "Email"],
    desc: "Conversations leave from — and return to — the single customer view.",
  },
  {
    title: "POS & checkout",
    named: [],
    desc: "Receipts, returns and credit notes flow up to the customer profile, store by store.",
  },
  {
    title: "CRM & marketing",
    named: [],
    desc: "Your existing segments and histories are carried over, not started over.",
  },
  {
    title: "Appointments & calendar",
    named: [],
    desc: "Booked appointments feed the advisors' day in Focus.",
  },
  {
    title: "Files & imports",
    named: [],
    desc: "A CSV export is enough to get started — including those famous digitized notebooks.",
  },
];

/* Page-specific design: family wall with named chips. */
export default function IntegrationsPage() {
  return (
    <div className="pt-16">
      <section className="relative overflow-hidden bg-mist-100">
        <NoeudsMotif className="absolute -right-6 top-1/2 hidden w-[420px] -translate-y-1/2 lg:block" />
        <div className="container-site relative py-16 lg:py-24">
          <p className="eyebrow mb-4 flex items-center gap-2.5 text-brand-600">
            <Spark className="size-2.5" />
            Integrations
          </p>
          <h1 className="font-display text-display-l max-w-3xl text-balance text-abyss-900">
            Plugged into your stack, not in its place.
          </h1>
          <p className="mt-5 max-w-2xl text-body-l text-slate-600">
            Live in 7 days, without replacing your tools: Eyeconic connects
            and syncs both ways. 40+ native integrations{" "}
            <span className="text-slate-400">[to validate]</span>.
          </p>
        </div>
      </section>

      <section className="bg-paper py-16 lg:py-24">
        <div className="container-site grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FAMILLES.map((f) => (
            <div key={f.title} className="flex flex-col border-2 border-abyss-900/15 bg-white p-6 shadow-card">
              <h2 className="text-h3 font-medium text-abyss-900">{f.title}</h2>
              <p className="mt-2 grow text-body text-slate-600">{f.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {f.named.map((n) => (
                  <span key={n} className="border-2 border-brand-500/40 bg-mist-100 px-2.5 py-1 text-caption font-medium text-brand-700">
                    {n}
                  </span>
                ))}
                <span className="border-2 border-abyss-900/10 px-2.5 py-1 text-caption text-slate-400">
                  Full catalog [to validate]
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="container-site mt-12">
          <p className="max-w-2xl text-body text-slate-600">
            A tool missing from the list? The Maison plan includes priority
            API access, and a CSV import always gets you started.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <PixelButton href="/demo" variant="brand">
              Check my stack in a demo
            </PixelButton>
          </div>
        </div>
      </section>

      <CtaBanner />
    </div>
  );
}
