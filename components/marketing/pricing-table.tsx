import { cn } from "@/lib/utils";
import { SectionHeading } from "@/components/marketing/section-heading";
import { PixelButton } from "@/components/marketing/pixel-button";
import { CreditsExplainer } from "@/components/marketing/credits-explainer";

const PLANS = [
  {
    name: "Boutique",
    price: "Gratuit",
    priceNote: null,
    audience: "1 point de vente, jusqu'à 3 conseillers",
    cta: { label: "Démarrer gratuitement", href: "/essai" },
    lead: "Inclus",
    features: [
      "Vue client unique",
      "SMS et e-mail",
      "Tâches quotidiennes",
      "Connecteur Shopify",
      "5 000 crédits IA/mois",
    ],
    featured: false,
  },
  {
    name: "Réseau",
    price: "290 €",
    priceNote: "/mois",
    audience: "2 à 50 boutiques",
    cta: { label: "Démarrer l'essai", href: "/essai" },
    lead: "Tout Boutique, plus",
    features: [
      "WhatsApp et WeChat",
      "Les 5 agents IA",
      "Agents personnalisés",
      "Attribution avancée",
      "Workflows et validations",
      "CSM dédié",
      "250 000 crédits IA/mois",
    ],
    featured: true,
  },
  {
    name: "Maison",
    price: "Sur devis",
    priceNote: null,
    audience: "Réseaux internationaux",
    cta: { label: "Demander un devis", href: "/demo" },
    lead: "Tout Réseau, plus",
    features: [
      "SLA",
      "API prioritaire",
      "SSO/SCIM",
      "Hébergement dédié",
      "Support US/UE/Asie",
      "Crédits sur mesure",
    ],
    featured: false,
  },
];

const FOOTNOTES = [
  "Utilisateurs illimités sur tous les plans",
  "Aucune limite de données, de SKU ou de sources",
  "Synchronisation bidirectionnelle",
  "Hébergement UE",
  "Onboarding inclus",
];

/** Section 9 — tarifs. Des prix publics, en euros : c'est un différenciant. */
export function PricingTable() {
  return (
    <section id="tarifs" className="bg-paper py-20 lg:py-32">
      <div className="container-site">
        <SectionHeading
          eyebrow="Tarifs"
          title="Des prix publics, en euros"
          intro="Un plan gratuit, un essai en self-service, une facturation aux crédits IA — pas au siège."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3 lg:items-stretch">
          {PLANS.map((plan) => (
            <article
              key={plan.name}
              className={cn(
                "flex flex-col rounded-xl p-7 lg:p-8",
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
                    Recommandé
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
                  [Prix à valider]
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
