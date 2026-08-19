import type { Metadata } from "next";
import { Spark } from "@/components/marketing/spark";
import { WhatsAppThread } from "@/components/mockups/whatsapp-thread";
import { CtaBanner } from "@/components/marketing/cta-banner";
import { BullesMotif } from "@/components/marketing/hero-motifs";

export const metadata: Metadata = {
  title: "Channels",
  description:
    "WhatsApp, SMS, WeChat, LINE, email: the client's channel, not the tool's. Conversations connected to the single customer view.",
};

const CANAUX = [
  { name: "WhatsApp", note: "The luxury channel in Europe and the Middle East" },
  { name: "SMS", note: "The shortest path to a reply" },
  { name: "WeChat", note: "Essential for Chinese clientele" },
  { name: "LINE", note: "Japan and Southeast Asia" },
  { name: "Email", note: "For the moments that deserve room" },
];

const PRINCIPES = [
  [
    "The client's channel",
    "You write where the client replies, not where the tool is comfortable. Channel choice is part of the relationship.",
  ],
  [
    "One conversation",
    "Whatever the channel, everything lands in the same customer view: no history scattered across five apps.",
  ],
  [
    "The advisor stays in charge",
    "Echo drafts the message in their voice; the advisor reviews, adjusts, sends. Nothing goes out on its own.",
  ],
];

/* Page-specific design: the channel row as a horizontal band. */
export default function CanauxPage() {
  return (
    <div className="pt-16">
      <section className="relative overflow-hidden bg-white">
        <BullesMotif className="absolute -left-10 top-6 hidden w-[340px] lg:block" />
        <BullesMotif className="absolute -right-10 top-6 hidden w-[340px] -scale-x-100 lg:block" />
        <div className="container-site relative py-16 text-center lg:py-24">
          <p className="eyebrow mb-4 flex items-center justify-center gap-2.5 text-brand-600">
            <Spark className="size-2.5" />
            Product — Channels
          </p>
          <h1 className="font-display text-display-l mx-auto max-w-3xl text-balance text-abyss-900">
            The client&apos;s channel, not the tool&apos;s.
          </h1>
        </div>

        {/* Full-width channel band */}
        <div className="border-y-2 border-abyss-900/10 bg-paper">
          <div className="container-site grid grid-cols-2 divide-abyss-900/10 sm:grid-cols-5 sm:divide-x-2">
            {CANAUX.map((c) => (
              <div key={c.name} className="px-4 py-8 text-center">
                <p className="font-display text-lg font-semibold text-abyss-900">
                  {c.name}
                </p>
                <p className="mt-2 text-caption text-slate-600">{c.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper py-16 lg:py-24">
        <div className="container-site grid items-center gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            {PRINCIPES.map(([title, text]) => (
              <div key={title} className="border-l-4 border-brand-500 bg-white p-6 shadow-card">
                <h2 className="text-h3 font-medium text-abyss-900">{title}</h2>
                <p className="mt-2 text-body text-slate-600">{text}</p>
              </div>
            ))}
          </div>
          <WhatsAppThread />
        </div>
      </section>

      <CtaBanner />
    </div>
  );
}
