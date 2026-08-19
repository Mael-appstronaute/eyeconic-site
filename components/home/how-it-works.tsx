import { PixelButton } from "@/components/marketing/pixel-button";

/**
 * « How it works » — section pleine largeur brume : titre + CTA à
 * gauche, étapes à pastilles reliées à droite (référence template).
 */
const STEPS = [
  {
    icon: (
      <svg viewBox="0 0 20 20" className="size-5" aria-hidden="true">
        <path d="M4 10h12M10 4v12" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
    title: "Connect your stack",
    text: "POS, e-commerce, messaging: synced both ways, live in 7 days — without replacing anything. A CSV export is enough to start.",
  },
  {
    icon: (
      <svg viewBox="0 0 20 20" className="size-5" aria-hidden="true">
        <circle cx="10" cy="10" r="6.5" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="10" cy="10" r="2" fill="currentColor" />
      </svg>
    ),
    title: "The agents go to work",
    text: "Iris unifies every profile, Signal detects intent, Echo drafts in each advisor's voice, Focus prioritizes every day. Your team stays in charge.",
  },
  {
    icon: (
      <svg viewBox="0 0 20 20" className="size-5" aria-hidden="true">
        <path d="M4 14l4-4 3 3 5-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Prove it in revenue",
    text: "Every sale is attributed to the message that drove it — by store, by region, by advisor. Each cycle makes the next one sharper.",
  },
];

export function HowItWorks() {
  return (
    <section className="bg-mist-100 py-24 lg:py-36">
      <div className="container-site grid gap-14 lg:grid-cols-[minmax(0,4fr)_minmax(0,5fr)] lg:gap-24">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <h2 className="text-4xl font-semibold tracking-tight text-abyss-950 sm:text-5xl">
            How it works
          </h2>
          <p className="mt-5 max-w-md text-body-l text-slate-600">
            Your platform, configured with a retail specialist and ready to
            grow with you — <span className="font-semibold text-abyss-950">free to start</span>.
          </p>
          <div className="mt-8">
            <PixelButton href="/demo">Book a demo</PixelButton>
          </div>
        </div>

        <ol className="relative">
          <span
            aria-hidden="true"
            className="absolute bottom-8 left-6 top-8 w-px bg-abyss-900/15"
          />
          {STEPS.map((step, i) => (
            <li key={step.title} className={i > 0 ? "relative mt-20 flex gap-6" : "relative flex gap-6"}>
              <span className="relative z-10 flex size-12 shrink-0 items-center justify-center rounded-full bg-brand-500 text-paper ring-8 ring-mist-100">
                {step.icon}
              </span>
              <div className="pt-1.5">
                <h3 className="text-xl font-semibold tracking-tight text-abyss-950">
                  {step.title}
                </h3>
                <p className="mt-2 max-w-md text-body text-slate-600">{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
