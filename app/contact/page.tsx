import type { Metadata } from "next";
import { Spark } from "@/components/marketing/spark";
import { HomeLeadForm } from "@/components/marketing/lead-forms";
import { QrBlock } from "@/components/marketing/qr-block";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Écrivez-nous : démo, partenariat, presse ou question produit. Réponse en une journée ouvrée.",
};

const COORDONNEES = [
  ["Général", "contact@eyeconic.example.com [À valider]"],
  ["Presse", "presse@eyeconic.example.com [À valider]"],
  ["Adresse", "[Adresse à valider] — Paris, France"],
] as const;

/* Design propre à la page : minimal, coordonnées sur filets + formulaire. */
export default function ContactPage() {
  return (
    <div className="bg-paper pt-16">
      <div className="container-site grid gap-12 py-16 lg:grid-cols-[minmax(0,4fr)_minmax(0,5fr)] lg:gap-16 lg:py-24">
        <div>
          <p className="eyebrow mb-4 flex items-center gap-2.5 text-brand-600">
            <Spark className="size-2.5" />
            Contact
          </p>
          <h1 className="font-display text-display-l text-abyss-900">
            On répond en une journée.
          </h1>
          <p className="mt-4 max-w-md text-body-l text-slate-600">
            Démo, partenariat, presse ou question produit : écrivez-nous, un
            humain répond.
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
              title="Continuer sur mobile"
              caption="Scannez pour ouvrir cette page sur votre téléphone."
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
