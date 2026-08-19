import type { Metadata } from "next";
import { Spark } from "@/components/marketing/spark";
import { PixelButton } from "@/components/marketing/pixel-button";

export const metadata: Metadata = {
  title: "Sécurité et RGPD",
  description:
    "Hébergement UE, chiffrement en transit et au repos, RGPD par conception, SSO/SCIM sur le plan Maison : la fiche technique sécurité d'Eyeconic.",
};

/* Fiche technique — libellé à gauche, engagement à droite. */
const SPEC = [
  ["Hébergement", "Union européenne", false],
  ["Chiffrement", "En transit (TLS) et au repos", false],
  ["RGPD", "Par conception — minimisation, finalités, registre", false],
  ["Droit des personnes", "Accès, rectification, effacement outillés", true],
  ["SSO / SCIM", "Plan Maison", false],
  ["Hébergement dédié", "Plan Maison", false],
  ["Sauvegardes", "Quotidiennes, chiffrées", true],
  ["Sous-traitants", "Liste et DPA sur demande", true],
  ["Certification", "Programme en cours", true],
  ["Facturation", "En euros, entité UE", false],
] as const;

/* Design propre à la page : la fiche technique sur filets, zéro icône. */
export default function SecuritePage() {
  return (
    <div className="pt-16">
      <section className="bg-white">
        <div className="container-site py-16 lg:py-24">
          <p className="eyebrow mb-4 flex items-center gap-2.5 text-brand-600">
            <Spark className="size-2.5" />
            Sécurité et RGPD
          </p>
          <h1 className="font-display text-display-l max-w-3xl text-balance text-abyss-900">
            La donnée client mérite mieux que la confiance.
          </h1>
          <p className="mt-5 max-w-2xl text-body-l text-slate-600">
            Vos clients vous confient leur relation la plus personnelle.
            Voici, ligne par ligne, comment elle est protégée.
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
                      [À valider]
                    </span>
                  ) : null}
                </dd>
              </div>
            ))}
          </dl>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <PixelButton href="/demo" variant="brand">
              Poser vos questions en démo
            </PixelButton>
            <p className="text-caption text-slate-400">
              Documentation détaillée (DPA, sous-traitants) sur demande.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
