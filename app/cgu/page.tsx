import type { Metadata } from "next";
import { LegalPage } from "@/components/marketing/legal-page";

export const metadata: Metadata = {
  title: "Conditions générales d'utilisation",
  robots: { index: false },
};

export default function CguPage() {
  return (
    <LegalPage
      title="Conditions générales d'utilisation"
      intro="Conditions applicables à l'utilisation du site et du service Eyeconic."
      sections={[
        { heading: "Objet", body: "[Champ d'application des CGU : site vitrine et service SaaS — à rédiger.]" },
        { heading: "Comptes et accès", body: "[Création de compte, sécurité des identifiants, plans Boutique/Réseau/Maison — à rédiger.]" },
        { heading: "Facturation", body: "[Prix en euros, crédits IA, modalités de paiement et de résiliation — à rédiger, en cohérence avec la grille tarifaire validée.]" },
        { heading: "Responsabilités", body: "[Engagements de service, limitations, SLA du plan Maison — à rédiger.]" },
        { heading: "Droit applicable", body: "[Droit applicable et juridiction compétente — à compléter.]" },
      ]}
    />
  );
}
