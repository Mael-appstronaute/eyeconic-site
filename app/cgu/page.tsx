import type { Metadata } from "next";
import { LegalPage } from "@/components/marketing/legal-page";

export const metadata: Metadata = {
  title: "Terms of service",
  robots: { index: false },
};

export default function CguPage() {
  return (
    <LegalPage
      title="Terms of service"
      intro="Terms governing the use of the Eyeconic site and service."
      sections={[
        { heading: "Scope", body: "[Scope of these terms: marketing site and SaaS service — to draft.]" },
        { heading: "Accounts and access", body: "[Account creation, credential security, Boutique/Network/Maison plans — to draft.]" },
        { heading: "Billing", body: "[Prices in euros, AI credits, payment and cancellation terms — to draft, consistent with the validated pricing grid.]" },
        { heading: "Liability", body: "[Service commitments, limitations, Maison-plan SLA — to draft.]" },
        { heading: "Governing law", body: "[Applicable law and competent jurisdiction — to complete.]" },
      ]}
    />
  );
}
