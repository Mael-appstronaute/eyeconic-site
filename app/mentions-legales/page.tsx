import type { Metadata } from "next";
import { LegalPage } from "@/components/marketing/legal-page";

export const metadata: Metadata = {
  title: "Mentions légales",
  robots: { index: false },
};

export default function MentionsLegalesPage() {
  return (
    <LegalPage
      title="Mentions légales"
      intro="Informations légales relatives à l'éditeur et à l'hébergement du site."
      sections={[
        { heading: "Éditeur du site", body: "[Raison sociale, forme juridique, capital, RCS, siège social, e-mail de contact — à compléter.]" },
        { heading: "Directeur de la publication", body: "[Nom et qualité — à compléter.]" },
        { heading: "Hébergement", body: "[Hébergeur du site : nom, adresse, contact — à compléter selon l'hébergement retenu.]" },
        { heading: "Propriété intellectuelle", body: "[Marques, logos et contenus du site — clause à rédiger.]" },
      ]}
    />
  );
}
