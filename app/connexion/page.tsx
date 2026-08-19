import type { Metadata } from "next";
import { Logo } from "@/components/marketing/logo";
import { PixelButton } from "@/components/marketing/pixel-button";

export const metadata: Metadata = {
  title: "Connexion",
  description: "L'espace client Eyeconic ouvre avec les premiers comptes.",
  robots: { index: false },
};

/* Design propre à la page : carte centrée, sobre — pas de faux login. */
export default function ConnexionPage() {
  return (
    <div className="bg-mist-100 pt-16">
      <div className="container-site flex min-h-[70svh] items-center justify-center py-16">
        <div className="w-full max-w-md border-2 border-abyss-900/15 bg-white p-8 text-center shadow-card sm:p-10">
          <div className="flex justify-center">
            <Logo height={26} linked={false} />
          </div>
          <h1 className="font-display text-display-m mt-8 text-abyss-900">
            L&apos;espace client ouvre avec les premiers comptes.
          </h1>
          <p className="mt-4 text-body text-slate-600">
            La connexion sera disponible ici. En attendant, créez votre
            espace : le plan Boutique est gratuit.
          </p>
          <div className="mt-8 space-y-3">
            <PixelButton href="/essai" variant="brand" className="w-full">
              Démarrer gratuitement
            </PixelButton>
            <PixelButton href="/demo" variant="outline" className="w-full">
              Réserver une démo
            </PixelButton>
          </div>
        </div>
      </div>
    </div>
  );
}
