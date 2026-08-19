import type { Metadata } from "next";
import Link from "next/link";
import { Spark } from "@/components/marketing/spark";
import { CtaBanner } from "@/components/marketing/cta-banner";
import { PilesMotif } from "@/components/marketing/hero-motifs";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Retail and CRM insights, ROI calculator, case studies and security documentation: the Eyeconic resource hub.",
};

const RESSOURCES = [
  {
    tag: "Blog",
    title: "Retail & CRM insights",
    desc: "Clienteling, first-party data and in-store execution, once a month.",
    href: "/ressources/blog",
  },
  {
    tag: "Tool",
    title: "ROI calculator",
    desc: "Your assumptions, transparent math: what outreach can bring to your network.",
    href: "/ressources/calculateur-roi",
  },
  {
    tag: "Proof",
    title: "Case studies",
    desc: "How brands put their customer data to work, store by store.",
    href: "/clients",
  },
  {
    tag: "Trust",
    title: "Security & GDPR",
    desc: "EU hosting, encryption, compliance: the full spec sheet.",
    href: "/securite",
  },
];

/* Page-specific design: editorial index in two wide columns. */
export default function RessourcesPage() {
  return (
    <div className="pt-16">
      <section className="relative overflow-hidden bg-white">
        <PilesMotif className="absolute -right-4 -top-6 hidden w-[360px] lg:block" />
        <div className="container-site relative py-16 lg:py-24">
          <p className="eyebrow mb-4 flex items-center gap-2.5 text-brand-600">
            <Spark className="size-2.5" />
            Resources
          </p>
          <h1 className="font-display text-display-l max-w-3xl text-balance text-abyss-900">
            Enough to decide, not just to read.
          </h1>
        </div>
      </section>

      <section className="bg-paper pb-20 lg:pb-32">
        <div className="container-site grid gap-6 sm:grid-cols-2">
          {RESSOURCES.map((r) => (
            <Link
              key={r.href}
              href={r.href}
              className="group flex flex-col border-2 border-abyss-900/15 bg-white p-8 shadow-card transition-shadow hover:shadow-card-hover"
            >
              <p className="eyebrow text-brand-600">{r.tag}</p>
              <h2 className="font-display text-display-m mt-3 text-abyss-900">
                {r.title}
              </h2>
              <p className="mt-3 grow text-body text-slate-600">{r.desc}</p>
              <span className="mt-6 text-sm font-medium text-brand-600 transition-transform group-hover:translate-x-0.5">
                Open →
              </span>
            </Link>
          ))}
        </div>
      </section>

      <CtaBanner />
    </div>
  );
}
