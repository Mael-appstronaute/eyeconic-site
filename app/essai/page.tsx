import type { Metadata } from "next";
import { Spark } from "@/components/marketing/spark";
import { QrBlock } from "@/components/marketing/qr-block";
import { EssaiForm } from "@/components/marketing/lead-forms";
import { EssaiMotif } from "@/components/marketing/hero-motifs";

export const metadata: Metadata = {
  title: "Start for free",
  description:
    "Create your Eyeconic workspace in self-service: free Boutique plan, no credit card, data hosted in the EU.",
};

export default async function EssaiPage({ searchParams }: PageProps<"/essai">) {
  const params = await searchParams;
  const source = params.src === "qr" ? "qr" : "site";
  const defaultEmail = typeof params.email === "string" ? params.email : "";

  return (
    <div className="relative overflow-hidden bg-paper pb-24 pt-16">
      <EssaiMotif className="absolute -left-16 top-24 hidden w-[300px] opacity-70 xl:block" />
      <EssaiMotif className="absolute -right-16 bottom-16 hidden w-[300px] -scale-x-100 opacity-70 xl:block" />
      <div className="container-site relative flex flex-col items-center py-16">
        <div className="w-full max-w-md">
          <p className="eyebrow mb-4 flex items-center justify-center gap-2.5 text-brand-600">
            <Spark className="size-2.5" />
            Start for free
          </p>
          <h1 className="font-display text-display-l text-center text-abyss-900">
            Two fields, and you&apos;re in.
          </h1>
          <p className="mt-4 text-center text-body-l text-slate-600">
            The Boutique plan is free: 1 location, 3 advisors, 5,000 AI
            credits per month.
          </p>

          <div className="mt-10 border-2 border-abyss-900/15 bg-white p-6 shadow-card sm:p-8">
            <EssaiForm source={source} defaultEmail={defaultEmail} />
          </div>

          <div className="mt-8">
            <QrBlock
              path="/essai"
              title="Open on mobile"
              caption="Scan to create your workspace from your phone."
            />
          </div>
        </div>
      </div>
    </div>
  );
}
