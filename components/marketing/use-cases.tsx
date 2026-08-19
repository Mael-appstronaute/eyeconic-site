import Link from "next/link";
import { SectionHeading } from "@/components/marketing/section-heading";
import { Reveal } from "@/components/marketing/reveal";

const CASES = [
  {
    eyebrow: "For advisors",
    title: "Know who to call back before the store even opens.",
  },
  {
    eyebrow: "For store managers",
    title: "See your team's activity without chasing reports.",
  },
  {
    eyebrow: "For head office",
    title: "Compare regions on the same metrics, in real time.",
  },
];

/** Section 8 — three "For X" use cases. */
export function UseCases() {
  return (
    <section id="cas-usage" className="bg-white py-20 lg:py-32">
      <div className="container-site">
        <SectionHeading
          eyebrow="On the floor"
          title="One tool, three jobs"
        />
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {CASES.map((c, i) => (
            <Reveal key={c.eyebrow} delay={i}>
              <article className="group flex h-full flex-col justify-between border-2 border-abyss-900/15 bg-paper p-7 shadow-card transition-shadow hover:shadow-card-hover lg:p-8">
                <p className="eyebrow text-brand-600">{c.eyebrow}</p>
                <h3 className="text-h3 mt-14 font-medium text-abyss-900 lg:mt-20">
                  {c.title}
                </h3>
                <Link
                  href="/demo"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-brand-600 transition-colors group-hover:text-brand-700"
                >
                  Book a demo
                  <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">→</span>
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
