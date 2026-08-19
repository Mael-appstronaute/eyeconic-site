import type { Metadata } from "next";
import { LegalPage } from "@/components/marketing/legal-page";

export const metadata: Metadata = {
  title: "Legal notice",
  robots: { index: false },
};

export default function MentionsLegalesPage() {
  return (
    <LegalPage
      title="Legal notice"
      intro="Legal information about the publisher and hosting of this site."
      sections={[
        { heading: "Publisher", body: "[Company name, legal form, capital, registration, registered office, contact email — to complete.]" },
        { heading: "Publishing director", body: "[Name and role — to complete.]" },
        { heading: "Hosting", body: "[Site host: name, address, contact — to complete once hosting is chosen.]" },
        { heading: "Intellectual property", body: "[Trademarks, logos and site content — clause to draft.]" },
      ]}
    />
  );
}
