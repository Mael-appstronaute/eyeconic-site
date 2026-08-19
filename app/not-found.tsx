import { Spark } from "@/components/marketing/spark";
import { PixelButton } from "@/components/marketing/pixel-button";

/**
 * Clean 404 — also serves as the holding page for footer links whose
 * pages aren't built yet.
 */
export default function NotFound() {
  return (
    <div className="bg-paper pt-16">
      <div className="container-site flex min-h-[60svh] flex-col items-center justify-center py-24 text-center">
        <p className="eyebrow mb-4 flex items-center gap-2.5 text-brand-600">
          <Spark className="size-2.5" />
          Page not found
        </p>
        <h1 className="font-display text-display-l max-w-2xl text-balance text-abyss-900">
          This page doesn&apos;t exist yet.
        </h1>
        <p className="mt-5 max-w-md text-body-l text-slate-600">
          The site is under construction: this section is on its way. In the
          meantime, here are the right places to start.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <PixelButton href="/" variant="brand">
            Back to home
          </PixelButton>
          <PixelButton href="/tarifs" variant="outline">
            See pricing
          </PixelButton>
          <PixelButton href="/demo" variant="outline">
            Book a demo
          </PixelButton>
        </div>
      </div>
    </div>
  );
}
