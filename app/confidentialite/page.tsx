import type { Metadata } from "next";
import { LegalPage } from "@/components/marketing/legal-page";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  robots: { index: false },
};

export default function ConfidentialitePage() {
  return (
    <LegalPage
      title="Politique de confidentialité"
      intro="Comment Eyeconic collecte et traite les données personnelles des visiteurs du site et des utilisateurs du produit."
      sections={[
        { heading: "Responsable de traitement", body: "[Entité responsable et coordonnées du DPO le cas échéant — à compléter.]" },
        { heading: "Données collectées", body: "Formulaires de démo, d'essai et de contact : identité professionnelle, coordonnées, société, message. [Détail complet et finalités — à compléter.]" },
        { heading: "Base légale et durées", body: "[Bases légales par traitement et durées de conservation — à compléter.]" },
        { heading: "Hébergement et transferts", body: "Données hébergées en Union européenne. [Sous-traitants et garanties de transfert — à compléter.]" },
        { heading: "Vos droits", body: "Accès, rectification, effacement, opposition, portabilité. [Modalités d'exercice et contact — à compléter.]" },
      ]}
    />
  );
}
