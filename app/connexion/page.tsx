import type { Metadata } from "next";
import { Logo } from "@/components/marketing/logo";
import { PixelButton } from "@/components/marketing/pixel-button";

export const metadata: Metadata = {
  title: "Log in",
  description: "The Eyeconic client workspace opens with the first accounts.",
  robots: { index: false },
};

/* Page-specific design: centered card, sober — no fake login. */
export default function ConnexionPage() {
  return (
    <div className="bg-mist-100 pt-16">
      <div className="container-site flex min-h-[70svh] items-center justify-center py-16">
        <div className="w-full max-w-md border-2 border-abyss-900/15 bg-white p-8 text-center shadow-card sm:p-10">
          <div className="flex justify-center">
            <Logo height={26} linked={false} />
          </div>
          <h1 className="font-display text-display-m mt-8 text-abyss-900">
            The client workspace opens with the first accounts.
          </h1>
          <p className="mt-4 text-body text-slate-600">
            Log-in will live here. In the meantime, create your workspace:
            the Boutique plan is free.
          </p>
          <div className="mt-8 space-y-3">
            <PixelButton href="/essai" variant="brand" className="w-full">
              Start for free
            </PixelButton>
            <PixelButton href="/demo" variant="outline" className="w-full">
              Book a demo
            </PixelButton>
          </div>
        </div>
      </div>
    </div>
  );
}
