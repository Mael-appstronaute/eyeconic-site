import type { Metadata } from "next";
import { Spark } from "@/components/marketing/spark";
import { HomeLeadForm } from "@/components/marketing/lead-forms";
import { QrBlock } from "@/components/marketing/qr-block";
import { EnveloppeMotif } from "@/components/marketing/hero-motifs";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Write to us: demo, partnership, press or product question. Reply within one business day.",
};

const COORDONNEES = [
  ["General", "contact@eyeconic.example.com [To validate]"],
  ["Press", "press@eyeconic.example.com [To validate]"],
  ["Address", "[Address to validate] — Paris, France"],
] as const;

/* Page-specific design: minimal, contact details on rules + form. */
export default function ContactPage() {
  return (
    <div className="relative overflow-hidden bg-paper pt-16">
      <EnveloppeMotif className="absolute -right-16 top-10 hidden w-[380px] opacity-70 xl:block" />
      <div className="container-site relative grid gap-12 py-16 lg:grid-cols-[minmax(0,4fr)_minmax(0,5fr)] lg:gap-16 lg:py-24">
        <div>
          <p className="eyebrow mb-4 flex items-center gap-2.5 text-brand-600">
            <Spark className="size-2.5" />
            Contact
          </p>
          <h1 className="font-display text-display-l text-abyss-900">
            We reply within a day.
          </h1>
          <p className="mt-4 max-w-md text-body-l text-slate-600">
            Demo, partnership, press or product question: write to us, a
            human replies.
          </p>

          <dl className="mt-10 border-t-2 border-abyss-900/10">
            {COORDONNEES.map(([label, value]) => (
              <div
                key={label}
                className="flex items-baseline justify-between gap-6 border-b border-abyss-900/10 py-4"
              >
                <dt className="text-caption font-medium uppercase tracking-wide text-slate-400">
                  {label}
                </dt>
                <dd className="text-right text-body text-abyss-900">{value}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-10">
            <QrBlock
              path="/contact"
              title="Continue on mobile"
              caption="Scan to open this page on your phone."
            />
          </div>
        </div>

        <div className="h-fit border-2 border-abyss-900/15 bg-white p-6 shadow-card lg:p-8">
          <HomeLeadForm />
        </div>
      </div>
    </div>
  );
}
