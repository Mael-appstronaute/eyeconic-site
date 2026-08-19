import type { Metadata } from "next";
import { Orbitron, DM_Sans, DM_Mono } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/marketing/site-header";
import { SiteFooter } from "@/components/marketing/site-footer";

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://eyeconic.example.com"), // [À VALIDER] domaine définitif
  title: {
    default: "Eyeconic — Le clienteling qui voit avant les autres",
    template: "%s — Eyeconic",
  },
  description:
    "Eyeconic unifie vos données boutique, e-commerce et messagerie, puis met cinq agents IA au service de vos conseillers de vente. Hébergé en Europe, opérationnel en 7 jours.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
      className={`${orbitron.variable} ${dmSans.variable} ${dmMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
