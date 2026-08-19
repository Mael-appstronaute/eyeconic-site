import type { Metadata } from "next";
import { Orbitron, DM_Sans, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/marketing/site-header";
import { SiteFooter } from "@/components/marketing/site-footer";
import { SplashIntro } from "@/components/marketing/splash-intro";

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: "italic",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://eyeconic.example.com"), // [To validate] final domain
  title: {
    default: "Eyeconic — Smarter clienteling",
    template: "%s — Eyeconic",
  },
  description:
    "Eyeconic unifies your store, e-commerce and messaging data, then puts five AI agents to work for your sales teams. Public pricing in euros, EU hosting, live in 7 days.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${orbitron.variable} ${dmSans.variable} ${instrumentSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {/* Before paint: hide the intro if already seen this session */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "try{if(sessionStorage.getItem('eyeconic-intro'))document.documentElement.dataset.introSeen='1'}catch(e){}",
          }}
        />
        <SplashIntro />
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
