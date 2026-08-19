import type { Metadata } from "next";
import { Hero } from "@/components/marketing/hero";
import { TeamStrip } from "@/components/marketing/team-strip";
import { MechanismAccordion } from "@/components/marketing/mechanism-accordion";
import { BentoGrid } from "@/components/marketing/bento-grid";
import { BenchmarkChart } from "@/components/marketing/benchmark-chart";
import { TestimonialCarousel } from "@/components/marketing/testimonial-carousel";
import { UseCases } from "@/components/marketing/use-cases";
import { PricingTable } from "@/components/marketing/pricing-table";
import { FaqAccordion } from "@/components/marketing/faq-accordion";
import { CtaBanner } from "@/components/marketing/cta-banner";
import { ClosingStatement } from "@/components/marketing/closing-statement";
import { FAQ_ITEMS } from "@/lib/faq";

export const metadata: Metadata = {
  title: "Eyeconic — Smarter clienteling",
  description:
    "Eyeconic unifie vos données boutique, e-commerce et messagerie, puis met cinq agents IA au service de vos équipes de vente. Prix publics en euros, hébergement UE, opérationnel en 7 jours.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: "Eyeconic",
      url: "https://eyeconic.example.com",
      logo: "https://eyeconic.example.com/brand/Eyeconic_Logo_Icon.svg",
      slogan: "Smarter clienteling.",
    },
    {
      "@type": "SoftwareApplication",
      name: "Eyeconic",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web, iOS, Android",
      description:
        "Plateforme de clienteling : vue client unique, cinq agents IA et pilotage de l'exécution des équipes retail.",
      offers: [
        {
          "@type": "Offer",
          name: "Boutique",
          price: "0",
          priceCurrency: "EUR",
        },
        {
          "@type": "Offer",
          name: "Réseau",
          price: "290",
          priceCurrency: "EUR",
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: FAQ_ITEMS.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      })),
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <TeamStrip />
      <MechanismAccordion />
      <BentoGrid />
      <BenchmarkChart />
      <TestimonialCarousel />
      <UseCases />
      <PricingTable />
      <FaqAccordion />
      <CtaBanner />
      <ClosingStatement />
    </>
  );
}
