import Link from "next/link";
import { BlurArt } from "@/components/marketing/blur-art";
import { DashboardPreview } from "@/components/home/dashboard-preview";
import { LogoMarquee } from "@/components/home/logo-marquee";

/**
 * Hero v4 — fond « aquarelle » flouté, badge pastille, H1 avec mot
 * d'accent en serif italique, CTA pastille sombre, grand mockup
 * dashboard, marquee de logos (référence rbp-saas-template).
 */
export function HeroSaas() {
  return (
    <section className="relative overflow-hidden bg-paper pt-16">
      <BlurArt />

      <div className="container-site relative">
        <div className="mx-auto max-w-3xl pt-16 text-center sm:pt-24">
          {/* Badge */}
          <p className="mx-auto flex w-fit items-center gap-2 rounded-full bg-white/80 px-4 py-1.5 text-caption font-medium text-abyss-900 shadow-[0_4px_20px_rgba(6,51,90,0.1)] ring-1 ring-abyss-900/10">
            Now in early access
            <span aria-hidden="true" className="text-brand-500">✦</span>
          </p>

          <h1 className="mt-8 text-5xl font-semibold leading-[1.05] tracking-tight text-abyss-950 sm:text-6xl lg:text-7xl">
            <span className="block">Read the signals</span>
            <span className="block">
              Sell with <em className="font-serif-accent text-brand-600">confidence</em>
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-body-l text-slate-600">
            The clienteling platform that unifies your customer data and puts
            five AI agents to work for your stores
          </p>

          <div className="mt-9 flex items-center justify-center">
            <Link href="/essai" className="group flex items-center">
              <span className="rounded-full bg-abyss-950 py-3.5 pl-7 pr-5 text-sm font-medium text-paper transition-colors group-hover:bg-abyss-900">
                Start for free
              </span>
              <span className="-ml-2 flex size-12 items-center justify-center rounded-full bg-brand-500 text-paper ring-4 ring-paper transition-transform group-hover:translate-x-0.5">
                <svg viewBox="0 0 16 16" className="size-4" aria-hidden="true">
                  <path d="M3 8h10M9 4l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </Link>
          </div>
        </div>

        {/* Dashboard preview */}
        <div className="relative mx-auto mt-14 max-w-5xl sm:mt-20">
          <DashboardPreview />
        </div>
      </div>

      {/* Logo marquee */}
      <div className="relative pb-16 pt-12 sm:pb-20">
        <LogoMarquee />
      </div>
    </section>
  );
}
