import type { Metadata } from "next";
import { Spark } from "@/components/marketing/spark";
import { CitationMotif } from "@/components/marketing/hero-motifs";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Retail and CRM insights: clienteling, first-party data, in-store execution. First articles coming soon.",
};

/* Announced topics — no fake articles: the content is on its way. */
const A_VENIR = [
  {
    tag: "Clienteling",
    title: "Why your best sellers hate your CRM",
    desc: "What head-office tools put shop-floor sellers through — and how to flip the logic.",
  },
  {
    tag: "Data",
    title: "Your first-party data is asleep in your stores",
    desc: "Notebooks, conversations, fittings: the gold nobody collects, and how to recover it without friction.",
  },
  {
    tag: "Measurement",
    title: "Attributing a sale to a message, properly",
    desc: "The pitfalls of retail attribution, and a method for a number the board will accept.",
  },
];

/* Page-specific design: editorial list on rules, sober. */
export default function BlogPage() {
  return (
    <div className="pt-16">
      <section className="relative overflow-hidden bg-white">
        <CitationMotif className="absolute -right-8 top-0 hidden w-[420px] lg:block" />
        <div className="container-site relative py-16 lg:py-24">
          <p className="eyebrow mb-4 flex items-center gap-2.5 text-brand-600">
            <Spark className="size-2.5" />
            Resources — Blog
          </p>
          <h1 className="font-display text-display-l max-w-3xl text-balance text-abyss-900">
            Retail & CRM insights.
          </h1>
          <p className="mt-4 max-w-2xl text-body-l text-slate-600">
            Once a month, no filler. The first articles are in the works —
            here&apos;s what&apos;s coming.
          </p>
        </div>
      </section>

      <section className="bg-paper pb-20 lg:pb-32">
        <div className="container-site">
          <ul className="divide-y-2 divide-abyss-900/10 border-y-2 border-abyss-900/10 bg-white shadow-card">
            {A_VENIR.map((post) => (
              <li key={post.title} className="grid gap-3 px-6 py-8 sm:grid-cols-[120px_1fr_auto] sm:items-baseline sm:gap-8 lg:px-10">
                <span className="eyebrow text-brand-600">{post.tag}</span>
                <div>
                  <h2 className="text-h3 font-medium text-abyss-900">{post.title}</h2>
                  <p className="mt-1.5 max-w-2xl text-body text-slate-600">{post.desc}</p>
                </div>
                <span className="border-2 border-abyss-900/15 px-3 py-1.5 text-caption font-medium text-slate-400">
                  Coming soon
                </span>
              </li>
            ))}
          </ul>

          {/* Sign-up */}
          <div className="mt-10 flex flex-col items-start gap-4 border-2 border-abyss-900/15 bg-white p-8 shadow-card sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-h3 font-medium text-abyss-900">
                Get notified at publication
              </p>
              <p className="mt-1 text-body text-slate-600">
                Once a month, one-click unsubscribe.
              </p>
            </div>
            <form className="flex w-full max-w-sm gap-2" aria-label="Blog sign-up">
              <label htmlFor="blog-email" className="sr-only">
                Work email
              </label>
              <input
                id="blog-email"
                type="email"
                required
                placeholder="you@yourbrand.com"
                className="h-11 w-full border-2 border-abyss-900/20 bg-white px-4 text-sm text-abyss-900 placeholder:text-slate-400"
              />
              <button
                type="submit"
                className="h-11 shrink-0 border-2 border-abyss-900/25 px-4 text-sm font-medium text-abyss-900 transition-colors hover:border-abyss-900/50"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
