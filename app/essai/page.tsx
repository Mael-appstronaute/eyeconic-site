import type { Metadata } from "next";
import { Spark } from "@/components/marketing/spark";
import { QrBlock } from "@/components/marketing/qr-block";
import { EssaiForm } from "@/components/marketing/lead-forms";

export const metadata: Metadata = {
  title: "Essai gratuit",
  description:
    "Créez votre espace Eyeconic en self-service : plan Boutique gratuit, sans carte bancaire, données hébergées en UE.",
};

export default async function EssaiPage({ searchParams }: PageProps<"/essai">) {
  const params = await searchParams;
  const source = params.src === "qr" ? "qr" : "site";
  const defaultEmail = typeof params.email === "string" ? params.email : "";

  return (
    <div className="bg-paper pb-24 pt-16">
      <div className="container-site flex flex-col items-center py-16">
        <div className="w-full max-w-md">
          <p className="eyebrow mb-4 flex items-center justify-center gap-2.5 text-brand-600">
            <Spark className="size-2.5" />
            Essai gratuit
          </p>
          <h1 className="font-display text-display-l text-center text-abyss-900">
            Deux champs, et c&apos;est ouvert.
          </h1>
          <p className="mt-4 text-center text-body-l text-slate-600">
            Le plan Boutique est gratuit : 1 point de vente, 3 conseillers,
            5 000 crédits IA par mois.
          </p>

          <div className="mt-10 border-2 border-abyss-900/15 bg-white p-6 shadow-card sm:p-8">
            <EssaiForm source={source} defaultEmail={defaultEmail} />
          </div>

          <div className="mt-8">
            <QrBlock
              path="/essai"
              title="Ouvrir sur mobile"
              caption="Scannez pour créer votre espace depuis votre téléphone."
            />
          </div>
        </div>
      </div>
    </div>
  );
}
