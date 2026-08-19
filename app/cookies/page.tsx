import type { Metadata } from "next";
import { LegalPage } from "@/components/marketing/legal-page";

export const metadata: Metadata = {
  title: "Cookies",
  robots: { index: false },
};

export default function CookiesPage() {
  return (
    <LegalPage
      title="Politique cookies"
      intro="Le site n'utilise à ce jour aucun cookie de mesure d'audience ni de publicité."
      sections={[
        { heading: "Cookies techniques", body: "Seuls des cookies strictement nécessaires au fonctionnement du site peuvent être déposés. [Inventaire exact — à compléter au moment de l'ajout d'outils de mesure.]" },
        { heading: "Mesure d'audience", body: "[Si un outil d'analytics est ajouté : finalités, durée, consentement — à compléter avant activation.]" },
        { heading: "Gérer vos préférences", body: "[Mécanisme de consentement à mettre en place si des cookies non essentiels sont ajoutés.]" },
      ]}
    />
  );
}
