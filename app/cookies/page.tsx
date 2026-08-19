import type { Metadata } from "next";
import { LegalPage } from "@/components/marketing/legal-page";

export const metadata: Metadata = {
  title: "Cookies",
  robots: { index: false },
};

export default function CookiesPage() {
  return (
    <LegalPage
      title="Cookie policy"
      intro="This site currently uses no analytics or advertising cookies."
      sections={[
        { heading: "Technical cookies", body: "Only cookies strictly necessary for the site to work may be set. [Exact inventory — to complete when analytics tools are added.]" },
        { heading: "Analytics", body: "[If an analytics tool is added: purposes, duration, consent — to complete before activation.]" },
        { heading: "Managing your preferences", body: "[Consent mechanism to put in place if non-essential cookies are added.]" },
      ]}
    />
  );
}
