import Link from "next/link";
import { Spark } from "@/components/marketing/spark";
import { PixelButton } from "@/components/marketing/pixel-button";

/**
 * 404 propre — sert aussi de page d'attente pour les liens du footer
 * dont les pages ne sont pas encore construites.
 */
export default function NotFound() {
  return (
    <div className="bg-paper pt-16">
      <div className="container-site flex min-h-[60svh] flex-col items-center justify-center py-24 text-center">
        <p className="eyebrow mb-4 flex items-center gap-2.5 text-brand-600">
          <Spark className="size-2.5" />
          Page introuvable
        </p>
        <h1 className="font-display text-display-l max-w-2xl text-balance text-abyss-900">
          Cette page n&apos;existe pas encore.
        </h1>
        <p className="mt-5 max-w-md text-body-l text-slate-600">
          Le site est en construction : cette section arrive. En attendant,
          voici les bons points d&apos;entrée.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <PixelButton href="/" variant="brand">
            Retour à l&apos;accueil
          </PixelButton>
          <PixelButton href="/tarifs" variant="outline">
            Voir les tarifs
          </PixelButton>
          <PixelButton href="/demo" variant="outline">
            Réserver une démo
          </PixelButton>
        </div>
      </div>
    </div>
  );
}
