import { cn } from "@/lib/utils";
import { SectionHeading } from "@/components/marketing/section-heading";
import { PixelButton } from "@/components/marketing/pixel-button";
import { CreditsExplainer } from "@/components/marketing/credits-explainer";

const PLANS = [
  {
    name: "Boutique",
    price: "Free",
    priceNote: null,
    audience: "1 location, up to 3 advisors",
    cta: { label: "Start for free", href: "/essai" },
    lead: "Included",
    features: [
      "Single customer view",
      "SMS and email",
      "Daily tasks",
      "Shopify connector",
      "5,000 AI credits/month",
    ],
    featured: false,
  },
  {
    name: "Network",
    price: "€290",
    priceNote: "/month",
    audience: "2 to 50 stores",
    cta: { label: "Start your trial", href: "/essai" },
    lead: "Everything in Boutique, plus",
    features: [
      "WhatsApp and WeChat",
      "All 5 AI agents",
      "Custom agents",
      "Advanced attribution",
      "Workflows and approvals",
      "Dedicated CSM",
      "250,000 AI credits/month",
    ],
    featured: true,
  },
  {
    name: "Maison",
    price: "Custom",
    priceNote: null,
    audience: "International networks",
    cta: { label: "Request a quote", href: "/demo" },
    lead: "Everything in Network, plus",
    features: [
      "SLA",
      "Priority API",
      "SSO/SCIM",
      "Dedicated hosting",
      "US/EU/Asia support",
      "Tailored credits",
    ],
    featured: false,
  },
];

const FOOTNOTES = [
  "Unlimited users on every plan",
  "No limits on data, SKUs or sources",
  "Two-way sync",
  "EU hosting",
  "Onboarding included",
];

/** Section 9 — pricing. Public prices, in euros: it's a differentiator.
 * `withHeading=false` when the page provides its own hero. */
export function PricingTable({ withHeading = true }: { withHeading?: boolean }) {
  return (
    <section id="tarifs" className="bg-paper py-20 lg:py-32">
      <div className="container-site">
        {withHeading ? (
          <SectionHeading
            eyebrow="Pricing"
            title="Public pricing, in euros"
            intro="A free plan, a self-service trial, and billing by AI credits — not by seat."
          />
        ) : null}

        <div className="mt-12 grid gap-6 lg:grid-cols-3 lg:items-stretch">
          {PLANS.map((plan) => (
            <article
              key={plan.name}
              className={cn(
                "flex flex-col p-7 lg:p-8",
                plan.featured
                  ? "dark bg-abyss-900 text-paper shadow-card-hover lg:-my-4 lg:py-12"
                  : "border-2 border-abyss-900/15 bg-white shadow-card"
              )}
            >
              <div className="flex items-center justify-between gap-3">
                <p
                  className={cn(
                    "eyebrow",
                    plan.featured ? "text-sky-300" : "text-brand-600"
                  )}
                >
                  {plan.name}
                </p>
                {plan.featured ? (
                  <span className="bg-gradient-brand px-3 py-1 text-[11px] font-medium uppercase tracking-wide text-paper">
                    Recommended
                  </span>
                ) : null}
              </div>

              <p className="mt-5 flex items-baseline gap-2">
                <span className="font-display text-display-m">{plan.price}</span>
                {plan.priceNote ? (
                  <span
                    className={cn(
                      "data-label text-caption",
                      plan.featured ? "text-sky-300" : "text-slate-600"
                    )}
                  >
                    {plan.priceNote}
                  </span>
                ) : null}
              </p>
              {plan.priceNote ? (
                <p
                  className={cn(
                    "mt-1 text-[11px] uppercase tracking-wide",
                    plan.featured ? "text-sky-300/70" : "text-slate-400"
                  )}
                >
                  [Price to validate]
                </p>
              ) : null}
              <p
                className={cn(
                  "mt-3 text-body",
                  plan.featured ? "text-sky-300" : "text-slate-600"
                )}
              >
                {plan.audience}
              </p>

              <div className="mt-6">
                <PixelButton
                  href={plan.cta.href}
                  variant={plan.featured ? "brand" : "outline"}
                  className="w-full"
                >
                  {plan.cta.label}
                </PixelButton>
              </div>

              <p
                className={cn(
                  "mt-7 border-t pt-5 text-caption font-medium uppercase tracking-wide",
                  plan.featured
                    ? "border-paper/14 text-sky-300/80"
                    : "border-abyss-900/10 text-slate-400"
                )}
              >
                {plan.lead}
              </p>
              <ul className="mt-3 space-y-2.5">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-body">
                    <span
                      aria-hidden="true"
                      className={cn(
                        "mt-2 size-1.5 shrink-0",
                        plan.featured ? "bg-brand-400" : "bg-brand-500"
                      )}
                    />
                    <span className={plan.featured ? "text-paper" : "text-abyss-900"}>
                      {f}
                    </span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <ul className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2">
          {FOOTNOTES.map((note) => (
            <li
              key={note}
              className="flex items-center gap-2 text-caption font-medium text-slate-600"
            >
              <span aria-hidden="true" className="size-1.5 bg-brand-500" />
              {note}
            </li>
          ))}
        </ul>

        <CreditsExplainer className="mt-12" />
      </div>
    </section>
  );
}
