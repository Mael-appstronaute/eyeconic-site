import Link from "next/link";
import { cn } from "@/lib/utils";
import { PixelButton } from "@/components/marketing/pixel-button";

/**
 * Pricing v4 — trois cartes arrondies, la carte du milieu cerclée
 * brand avec pastille « Most popular » (référence template).
 */
const PLANS = [
  {
    name: "Boutique",
    price: "Free",
    note: "1 location, up to 3 advisors",
    cta: "Start for free",
    href: "/essai",
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
    suffix: "/month",
    note: "2 to 50 stores · [Price to validate]",
    cta: "Start your trial",
    href: "/essai",
    features: [
      "All 5 AI agents",
      "WhatsApp and WeChat",
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
    note: "International networks",
    cta: "Request a quote",
    href: "/demo",
    features: [
      "SLA and priority API",
      "SSO/SCIM",
      "Dedicated hosting",
      "US/EU/Asia support",
      "Tailored credits",
    ],
    featured: false,
  },
];

export function PricingSaas() {
  return (
    <section id="tarifs" className="bg-paper py-24 lg:py-36">
      <div className="container-site">
        <div className="mx-auto max-w-xl text-center">
          <p className="text-sm font-medium text-slate-600">Pricing</p>
          <h2 className="mt-2 text-4xl font-semibold tracking-tight text-abyss-950 sm:text-5xl">
            Public pricing, in euros
          </h2>
          <p className="mt-4 text-body-l text-slate-600">
            Free to start, unlimited users on every plan — billed by AI
            credits, not by seat.
          </p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {PLANS.map((plan) => (
            <article
              key={plan.name}
              className={cn(
                "relative rounded-3xl bg-white p-8",
                plan.featured
                  ? "ring-2 ring-brand-500 shadow-[0_30px_70px_rgba(6,51,90,0.14)]"
                  : "ring-1 ring-abyss-900/10"
              )}
            >
              {plan.featured ? (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-brand-500 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-wide text-paper">
                  Most popular
                </span>
              ) : null}

              <h3 className="text-lg font-semibold text-abyss-950">{plan.name}</h3>
              <p className="mt-4 flex items-baseline gap-1.5">
                <span className="text-5xl font-semibold tracking-tight text-abyss-950">
                  {plan.price}
                </span>
                {plan.suffix ? (
                  <span className="text-sm text-slate-600">{plan.suffix}</span>
                ) : null}
              </p>
              <p className="mt-2 text-sm text-slate-600">{plan.note}</p>

              {plan.featured ? (
                <PixelButton href={plan.href} size="sm" className="mt-6 w-full">
                  {plan.cta}
                </PixelButton>
              ) : (
                <Link
                  href={plan.href}
                  className="mt-6 block rounded-full bg-mist-100 py-3 text-center text-sm font-medium text-abyss-950 transition-colors hover:bg-mist-200"
                >
                  {plan.cta}
                </Link>
              )}

              <p className="mt-7 text-sm font-medium text-abyss-950">Includes:</p>
              <ul className="mt-3 space-y-2.5">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-slate-600">
                    <span
                      aria-hidden="true"
                      className="mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-full bg-brand-500/15 text-brand-600"
                    >
                      <svg viewBox="0 0 10 10" className="size-2.5">
                        <path d="M2 5.5L4 7.5 8 3" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                      </svg>
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
