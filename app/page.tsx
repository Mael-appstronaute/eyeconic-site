import type { Metadata } from "next";
import { HeroSaas } from "@/components/home/hero-saas";
import { WordReveal } from "@/components/home/word-reveal";
import { FeatureBento } from "@/components/home/feature-bento";
import { TestimonialTabs } from "@/components/home/testimonial-tabs";
import { HowItWorks } from "@/components/home/how-it-works";
import { PricingSaas } from "@/components/home/pricing-saas";
import { FaqSaas } from "@/components/home/faq-saas";
import { FAQ_ITEMS } from "@/lib/faq";

export const metadata: Metadata = {
  title: "Eyeconic — Smarter clienteling",
  description:
    "Eyeconic unifies your store, e-commerce and messaging data, then puts five AI agents to work for your sales teams. Public pricing in euros, EU hosting, live in 7 days.",
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
        "Clienteling platform: single customer view, five AI agents, and retail execution management.",
      offers: [
        { "@type": "Offer", name: "Boutique", price: "0", priceCurrency: "EUR" },
        { "@type": "Offer", name: "Network", price: "290", priceCurrency: "EUR" },
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
      <HeroSaas />
      <WordReveal />
      <FeatureBento />
      <TestimonialTabs />
      <HowItWorks />
      <PricingSaas />
      <FaqSaas />
    </>
  );
}
