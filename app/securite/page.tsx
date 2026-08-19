import type { Metadata } from "next";
import { Spark } from "@/components/marketing/spark";
import { PixelButton } from "@/components/marketing/pixel-button";
import { CoffreMotif } from "@/components/marketing/hero-motifs";

export const metadata: Metadata = {
  title: "Security & GDPR",
  description:
    "EU hosting, encryption in transit and at rest, GDPR by design, SSO/SCIM on the Maison plan: Eyeconic's security spec sheet.",
};

/* Spec sheet — label on the left, commitment on the right. */
const SPEC = [
  ["Hosting", "European Union", false],
  ["Encryption", "In transit (TLS) and at rest", false],
  ["GDPR", "By design — minimization, purposes, register", false],
  ["Data-subject rights", "Access, rectification, erasure — tooled", true],
  ["SSO / SCIM", "Maison plan", false],
  ["Dedicated hosting", "Maison plan", false],
  ["Backups", "Daily, encrypted", true],
  ["Subprocessors", "List and DPA on request", true],
  ["Certification", "Program in progress", true],
  ["Billing", "In euros, EU entity", false],
] as const;

/* Page-specific design: the spec sheet on rules, zero icons. */
export default function SecuritePage() {
  return (
    <div className="pt-16">
      <section className="relative overflow-hidden bg-white">
        <CoffreMotif className="absolute right-6 top-1/2 hidden w-[300px] -translate-y-1/2 lg:block" />
        <div className="container-site relative py-16 lg:py-24">
          <p className="eyebrow mb-4 flex items-center gap-2.5 text-brand-600">
            <Spark className="size-2.5" />
            Security & GDPR
          </p>
          <h1 className="font-display text-display-l max-w-3xl text-balance text-abyss-900">
            Customer data deserves better than trust.
          </h1>
          <p className="mt-5 max-w-2xl text-body-l text-slate-600">
            Your clients entrust you with their most personal relationship.
            Here is, line by line, how it&apos;s protected.
          </p>
        </div>
      </section>

      <section className="bg-paper pb-20 lg:pb-32">
        <div className="container-site">
          <dl className="border-2 border-abyss-900/15 bg-white shadow-card">
            {SPEC.map(([label, value, toValidate], i) => (
              <div
                key={label}
                className={`grid gap-1 px-6 py-4 sm:grid-cols-[220px_1fr] sm:items-baseline lg:px-10 ${
                  i > 0 ? "border-t border-abyss-900/10" : ""
                }`}
              >
                <dt className="text-caption font-medium uppercase tracking-wide text-slate-400">
                  {label}
                </dt>
                <dd className="text-body text-abyss-900">
                  {value}
                  {toValidate ? (
                    <span className="ml-2 text-caption text-slate-400">
                      [To validate]
                    </span>
                  ) : null}
                </dd>
              </div>
            ))}
          </dl>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <PixelButton href="/demo" variant="brand">
              Ask your questions in a demo
            </PixelButton>
            <p className="text-caption text-slate-400">
              Detailed documentation (DPA, subprocessors) on request.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
