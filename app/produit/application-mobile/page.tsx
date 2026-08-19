import type { Metadata } from "next";
import { Spark } from "@/components/marketing/spark";
import { TaskList } from "@/components/mockups/task-list";
import { PixelButton } from "@/components/marketing/pixel-button";
import { CtaBanner } from "@/components/marketing/cta-banner";

export const metadata: Metadata = {
  title: "Mobile app",
  description:
    "Your advisors' everyday tool: the day prioritized by Focus, the customer view and messaging, on the phone, between two clients.",
};

const MOMENTS = [
  [
    "Before opening",
    "The day is already set: Focus has ranked who to call back, in what order, and why.",
  ],
  [
    "Between two clients",
    "Thirty seconds is enough: the next client's profile, Echo's draft, send.",
  ],
  [
    "During an appointment",
    "The full history in your pocket — last purchase, preferences, ongoing conversation.",
  ],
];

/* Page-specific design: the CSS phone, centered in the hero. */
export default function ApplicationMobilePage() {
  return (
    <div className="pt-16">
      <section className="bg-paper">
        <div className="container-site grid items-center gap-12 py-16 lg:grid-cols-2 lg:py-24">
          <div>
            <p className="eyebrow mb-4 flex items-center gap-2.5 text-brand-600">
              <Spark className="size-2.5" />
              Product — Mobile app
            </p>
            <h1 className="font-display text-display-l max-w-xl text-balance text-abyss-900">
              On mobile, between two clients.
            </h1>
            <p className="mt-5 max-w-xl text-body-l text-slate-600">
              Eyeconic&apos;s end user is the sales advisor — standing on the
              shop floor, phone in hand. The app is built for those moments.
            </p>

            <ul className="mt-8 space-y-5">
              {MOMENTS.map(([title, text]) => (
                <li key={title} className="flex gap-4">
                  <span aria-hidden="true" className="mt-2.5 size-1.5 shrink-0 bg-brand-500" />
                  <div>
                    <p className="text-body font-medium text-abyss-900">{title}</p>
                    <p className="mt-0.5 text-body text-slate-600">{text}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-10">
              <PixelButton href="/essai" variant="brand">
                Start for free
              </PixelButton>
            </div>
          </div>

          {/* CSS phone — the task mockup inside a device frame */}
          <div className="mx-auto w-full max-w-[340px]">
            <div className="rounded-[2.5rem] border-2 border-abyss-900/20 bg-white p-3 shadow-card-hover">
              <div
                aria-hidden="true"
                className="mx-auto mb-3 h-1.5 w-16 rounded-full bg-abyss-900/15"
              />
              <TaskList className="shadow-none" />
              <div
                aria-hidden="true"
                className="mx-auto mt-3 h-1 w-24 rounded-full bg-abyss-900/15"
              />
            </div>
            <p className="mt-3 text-center text-[11px] uppercase tracking-wide text-slate-400">
              iOS and Android — [Availability to validate]
            </p>
          </div>
        </div>
      </section>

      <CtaBanner />
    </div>
  );
}
