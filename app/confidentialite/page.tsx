import type { Metadata } from "next";
import { LegalPage } from "@/components/marketing/legal-page";

export const metadata: Metadata = {
  title: "Privacy policy",
  robots: { index: false },
};

export default function ConfidentialitePage() {
  return (
    <LegalPage
      title="Privacy policy"
      intro="How Eyeconic collects and processes personal data from site visitors and product users."
      sections={[
        { heading: "Data controller", body: "[Responsible entity and DPO contact details where applicable — to complete.]" },
        { heading: "Data collected", body: "Demo, trial and contact forms: professional identity, contact details, company, message. [Full detail and purposes — to complete.]" },
        { heading: "Legal basis and retention", body: "[Legal bases per processing activity and retention periods — to complete.]" },
        { heading: "Hosting and transfers", body: "Data hosted in the European Union. [Subprocessors and transfer safeguards — to complete.]" },
        { heading: "Your rights", body: "Access, rectification, erasure, objection, portability. [How to exercise them and contact — to complete.]" },
      ]}
    />
  );
}
