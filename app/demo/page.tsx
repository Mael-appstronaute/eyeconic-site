import type { Metadata } from "next";
import { Spark } from "@/components/marketing/spark";
import { QrBlock } from "@/components/marketing/qr-block";
import { DemoForm } from "@/components/marketing/lead-forms";
import { EcranMotif } from "@/components/marketing/hero-motifs";

export const metadata: Metadata = {
  title: "Book a demo",
  description:
    "See your own data during the demo: connect a store, import an export, and watch what Eyeconic makes of it. No commitment.",
};

const REASSURANCE = [
  "A demo on your data, not on a demo dataset",
  "45 minutes, with a retail specialist",
  "Live in 7 days, without replacing your stack",
  "Data hosted in Europe, GDPR by design",
];

export default async function DemoPage({ searchParams }: PageProps<"/demo">) {
  const params = await searchParams;
  const source = params.src === "qr" ? "qr" : "site";

  return (
    <div className="relative overflow-hidden bg-paper pb-24 pt-16">
      <EcranMotif className="absolute -left-20 bottom-10 hidden w-[380px] opacity-60 xl:block" />
      <div className="container-site relative grid gap-12 py-16 lg:grid-cols-[minmax(0,4fr)_minmax(0,5fr)] lg:gap-16">
        <div>
          <p className="eyebrow mb-4 flex items-center gap-2.5 text-brand-600">
            <Spark className="size-2.5" />
            Book a demo
          </p>
          <h1 className="font-display text-display-l text-abyss-900">
            See your own data during the demo.
          </h1>
          <p className="mt-5 text-body-l text-slate-600">
            Connect a store, import an export, and watch what Eyeconic makes
            of it. No commitment.
          </p>

          <ul className="mt-8 space-y-3">
            {REASSURANCE.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-body text-abyss-900">
                <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 bg-brand-500" />
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-10">
            <QrBlock path="/demo" />
          </div>
        </div>

        <div className="h-fit border-2 border-abyss-900/15 bg-white p-6 shadow-card lg:p-10">
          <DemoForm source={source} />
        </div>
      </div>
    </div>
  );
}
