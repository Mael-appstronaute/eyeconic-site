import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Spark } from "@/components/marketing/spark";
import { PixelButton } from "@/components/marketing/pixel-button";
import { CtaBanner } from "@/components/marketing/cta-banner";
import { AGENTS, AgentAvatar } from "@/components/marketing/agent-avatar";
import { CustomerCard } from "@/components/mockups/customer-card";
import { TaskList } from "@/components/mockups/task-list";
import { WhatsAppThread } from "@/components/mockups/whatsapp-thread";
import { AttributionTable } from "@/components/mockups/attribution-table";
import {
  CadranMotif,
  FacettesMotif,
  FilMotif,
  PetalesMotif,
} from "@/components/marketing/hero-motifs";

/* ————————————————————————————————————————————————
   Solution pages — a refined, industry-specific design for each
   sector: differentiated hero + signature section (VIC timeline,
   repurchase loop, online/in-store convergence, long-cycle timeline).
   Quotes: FICTIONAL brands from the carousel, note displayed.
   ———————————————————————————————————————————————— */

const SECTEURS = {
  luxe: {
    title: "Luxury",
    h1: "The relationship, at maison level.",
    intro:
      "Your clients expect to be recognized, not segmented. Clienteling has always been your craft — Eyeconic gives it the memory and the measurement it was missing.",
    chips: ["VIC", "Notebooks recovered", "Multi-boutique", "WhatsApp & WeChat"],
    heroBg: "bg-white",
    pains: [
      "The relationship lives in notebooks and leaves with the advisors",
      "One boutique's VICs are strangers in another",
      "No way to prove what clienteling brings in",
    ],
    reponses: [
      ["The maison's memory", "Iris unifies each client's history across every boutique — the relationship survives departures and transfers."],
      ["The right gesture, at the right time", "Signal spots discreet intent; Echo helps the advisor write like themselves, better prepared."],
      ["Proof for the executive committee", "Attribution links every sale to relationship work — by maison, by boutique, by advisor."],
    ],
    agents: ["Iris", "Signal", "Echo"],
    quote: {
      text: "We benchmarked four platforms over a quarter. Eyeconic is the only one our teams kept opening once the pilot ended.",
      author: "Isabelle Franchi — Chief Client Officer, Groupe Delcourt",
      kpis: [
        ["+31%", "Attributed revenue, Europe"],
        ["11 wks", "Rollout across 214 boutiques"],
      ],
    },
  },
  "beaute-bien-etre": {
    title: "Beauty & wellness",
    h1: "Repeat purchases, not just traffic.",
    intro:
      "Your products run out, your treatments get booked: outreach is your natural lever. As long as you know who to contact, when, and with what.",
    chips: ["Repurchase", "Appointments", "Spas", "Client rhythms"],
    heroBg: "bg-mist-100",
    pains: [
      "Repurchase rhythms aren't tracked anywhere",
      "Spa calendars fill up on walk-in luck",
      "Advisors know their clients — the banner doesn't",
    ],
    reponses: [
      ["The right repurchase moment", "Signal computes each client's real rhythm and warns before the product runs out — not three weeks after."],
      ["Calendars that fill themselves", "Focus turns outreach into booked appointments, store by store, spa by spa."],
      ["A relationship that stays", "Iris keeps the history of treatments, preferences and conversations, even when the team changes."],
    ],
    agents: ["Signal", "Focus", "Iris"],
    quote: {
      text: "The pilot covered three spas. Six weeks later, the other directors were asking for the tool.",
      author: "Sofia Andrade — Head of Client Experience, Linéa Beauté",
      kpis: [
        ["+45%", "Appointments booked"],
        ["−22%", "Clients uncontacted for 90 days"],
      ],
    },
  },
  "mode-dtc": {
    title: "Fashion & DTC",
    h1: "Online and in-store, finally connected.",
    intro:
      "Your client tries on in store, buys online, returns in store. Your tools count them as three different people.",
    chips: ["Online × In-store", "Wishlist", "Fittings", "Attribution"],
    heroBg: "bg-white",
    pains: [
      "E-commerce and retail fight over attribution",
      "Sizes, returns and fittings feed no follow-up",
      "The CRM sees orders, never clients",
    ],
    reponses: [
      ["One client, two channels", "Iris merges the web profile and the store profile: the online wishlist becomes a reason to call back in store."],
      ["Fittings that come back", "Signal spots the fitting without a purchase and the revisited product page — the advisor calls back with the right piece."],
      ["Attribution that settles the debate", "Every sale is linked to its real journey: online vs retail becomes a shared dashboard."],
    ],
    agents: ["Iris", "Signal", "Echo"],
    quote: {
      text: "We measured traffic, never the relationship. Clienteling went from an act of faith to a line in the reporting.",
      author: "Marc-Antoine Lefebvre — Retail Director Europe, ORVEA Paris",
      kpis: [
        ["+27%", "Revenue attributed to clienteling"],
        ["92%", "Advisor adoption"],
      ],
    },
  },
  "retail-specialise": {
    title: "Specialty retail",
    h1: "Advice that brings clients back.",
    intro:
      "Watchmaking, eyewear, home, premium sport: your clients buy rarely but come back for a lifetime — if someone tends the relationship between two purchases.",
    chips: ["Long cycles", "Service & maintenance", "Expertise", "Reminders"],
    heroBg: "bg-paper",
    pains: [
      "Long buying cycles, with no contact between two sales",
      "Sellers' expertise leaves no trace",
      "Service opportunities (maintenance, servicing) go unnoticed",
    ],
    reponses: [
      ["The relationship between two purchases", "Signal turns years of silence into moments: purchase anniversary, servicing due, a relevant novelty."],
      ["Expertise that stays", "Advice given, preferences noted: Iris turns them into banner memory, not a seller's recollection."],
      ["Service as an appointment", "Focus schedules service reminders — the servicing becomes a visit, the visit a sale."],
    ],
    agents: ["Signal", "Iris", "Focus"],
    quote: {
      text: "A watch client comes back every four or five years. Without institutional memory, that relationship doesn't exist.",
      author: "Thomas Berthoud — Global Retail Director, Aurige",
      kpis: [
        ["×1.8", "Workshop appointments generated"],
        ["68%", "VICs recontacted each quarter"],
      ],
    },
  },
} as const;

type Slug = keyof typeof SECTEURS;

const MOTIFS = {
  luxe: FacettesMotif,
  "beaute-bien-etre": PetalesMotif,
  "mode-dtc": FilMotif,
  "retail-specialise": CadranMotif,
} as const;

export function generateStaticParams() {
  return Object.keys(SECTEURS).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/solutions/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const secteur = SECTEURS[slug as Slug];
  if (!secteur) return {};
  return { title: `${secteur.title} — solutions`, description: secteur.intro };
}

export default async function SolutionPage({
  params,
}: PageProps<"/solutions/[slug]">) {
  const { slug } = await params;
  const secteur = SECTEURS[slug as Slug];
  if (!secteur) notFound();
  const Motif = MOTIFS[slug as Slug];
  const agents = AGENTS.filter((a) =>
    (secteur.agents as readonly string[]).includes(a.name)
  );

  return (
    <div className="pt-16">
      {/* Hero — industry motif + trade chips */}
      <section className={`relative overflow-hidden ${secteur.heroBg}`}>
        <Motif className="absolute -right-8 top-1/2 hidden w-[360px] -translate-y-1/2 lg:block" />
        <div className="container-site relative py-16 lg:py-24">
          <p className="eyebrow mb-4 flex items-center gap-2.5 text-brand-600">
            <Spark className="size-2.5" />
            Solutions — {secteur.title}
          </p>
          <h1 className="font-display text-display-l max-w-3xl text-balance text-abyss-900">
            {secteur.h1}
          </h1>
          <p className="mt-5 max-w-2xl text-body-l text-slate-600">
            {secteur.intro}
          </p>
          <ul className="mt-8 flex flex-wrap gap-2">
            {secteur.chips.map((chip) => (
              <li
                key={chip}
                className="border-2 border-abyss-900/15 bg-white px-3 py-1.5 text-caption font-medium text-abyss-900"
              >
                {chip}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Signature section — industry-specific */}
      {slug === "luxe" ? <ParcoursVic /> : null}
      {slug === "beaute-bien-etre" ? <CycleReachat /> : null}
      {slug === "mode-dtc" ? <DeuxMondes /> : null}
      {slug === "retail-specialise" ? <TempsLong /> : null}

      {/* Pains — abyss band */}
      <section className="dark bg-abyss-900 py-14">
        <div className="container-site">
          <p className="eyebrow mb-6 text-sky-500">What's broken today</p>
          <ul className="grid gap-4 lg:grid-cols-3">
            {secteur.pains.map((pain) => (
              <li key={pain} className="border-l-4 border-alert/70 bg-abyss-950/60 px-5 py-4 text-body text-paper">
                {pain}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Product answers + industry agents */}
      <section className="bg-paper py-16 lg:py-24">
        <div className="container-site">
          <p className="eyebrow mb-6 text-brand-600">What Eyeconic changes</p>
          <div className="grid gap-5 lg:grid-cols-3">
            {secteur.reponses.map(([title, text]) => (
              <div key={title} className="border-2 border-abyss-900/15 bg-white p-6 shadow-card">
                <h2 className="text-h3 font-medium text-abyss-900">{title}</h2>
                <p className="mt-2 text-body text-slate-600">{text}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
            <p className="eyebrow text-slate-400">Agents at work</p>
            <ul className="flex flex-wrap gap-3">
              {agents.map((agent) => (
                <li key={agent.name}>
                  <a
                    href={agent.href}
                    className="flex items-center gap-2.5 border-2 border-abyss-900/10 bg-white py-1.5 pl-1.5 pr-4 transition-colors hover:border-brand-500/50 hover:bg-mist-100"
                  >
                    <AgentAvatar variant={agent.variant} color={agent.color} className="size-8" />
                    <span className="text-sm font-medium text-abyss-900">{agent.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Industry quote + KPIs */}
          <div className="mt-12 grid gap-6 lg:grid-cols-[minmax(0,7fr)_minmax(0,3fr)]">
            <blockquote className="border-l-4 border-brand-500 bg-white p-8 shadow-card">
              <p className="text-h3 font-light text-abyss-900">
                “{secteur.quote.text}”
              </p>
              <footer className="mt-4 text-caption font-medium uppercase tracking-wide text-slate-600">
                {secteur.quote.author}
                <span className="ml-3 font-normal normal-case tracking-normal text-slate-400">
                  — illustrative example, fictional brand
                </span>
              </footer>
            </blockquote>
            <div className="grid grid-cols-2 gap-4 lg:grid-cols-1">
              {secteur.quote.kpis.map(([value, label]) => (
                <div key={label} className="flex flex-col justify-center bg-mist-100 p-5">
                  <p className="font-display text-display-m text-abyss-900">{value}</p>
                  <p className="mt-1 text-[11px] font-medium uppercase tracking-wide text-slate-600">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <PixelButton href="/demo" variant="brand">
              Book a {secteur.title.toLowerCase()} demo
            </PixelButton>
            <PixelButton href="/tarifs" variant="outline">
              See pricing
            </PixelButton>
          </div>
        </div>
      </section>

      <CtaBanner />
    </div>
  );
}

/* ————— Luxury: a VIC's journey, diamond-marker timeline ————— */

const PARCOURS = [
  { date: "March", text: "Fitting of an exceptional piece, no purchase. Logged in thirty seconds.", strong: false },
  { date: "April", text: "Silence. No classic tool worries about it.", strong: false },
  { date: "May", text: "Signal: the model's product page viewed twice this week.", strong: true },
  { date: "May", text: "Echo drafts a message in the advisor's voice — reviewed, adjusted, sent.", strong: true },
  { date: "June", text: "The sale, in boutique. Attributed to the relationship, not to luck.", strong: false },
];

function ParcoursVic() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="container-site">
        <h2 className="font-display text-display-m max-w-2xl text-abyss-900">
          A VIC&apos;s journey, with and without memory
        </h2>
        <div className="relative mt-12">
          <span
            aria-hidden="true"
            className="absolute left-[7px] top-2 h-[calc(100%-16px)] w-0.5 bg-abyss-900/10 lg:left-1/2 lg:-translate-x-1/2"
          />
          <ol className="space-y-8">
            {PARCOURS.map((step, i) => (
              <li
                key={i}
                className={`relative flex gap-6 lg:w-1/2 lg:gap-0 ${
                  i % 2 ? "lg:ml-auto lg:pl-10" : "lg:pr-10 lg:text-right"
                }`}
              >
                <span
                  aria-hidden="true"
                  className={`absolute left-0 top-2 size-4 rotate-45 ${
                    i % 2 ? "lg:-left-2" : "lg:left-auto lg:-right-2"
                  } ${step.strong ? "bg-brand-500" : "border-2 border-abyss-900/30 bg-white"}`}
                />
                <div className="pl-8 lg:pl-0">
                  <p className="eyebrow text-brand-600">{step.date}</p>
                  <p
                    className={`mt-1 max-w-md text-body ${
                      step.strong ? "font-medium text-abyss-900" : "text-slate-600"
                    } ${i % 2 ? "" : "lg:ml-auto"}`}
                  >
                    {step.text}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <CustomerCard />
          <div className="flex flex-col justify-center border-2 border-abyss-900/15 bg-paper p-8 shadow-card">
            <p className="text-h3 font-medium text-abyss-900">
              Without Eyeconic, this journey stops in April.
            </p>
            <p className="mt-3 text-body text-slate-600">
              The advisor changes boutiques, the notebook leaves with her, and
              the VIC becomes a stranger. With the single customer view, the
              maison keeps the relationship — and can prove what it's worth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ————— Beauty: the repurchase loop, as a ring ————— */

const CYCLE = [
  ["Purchase", "The cream, the treatment, the fragrance — where the rhythm starts."],
  ["In use", "Six to eight weeks: the product lives its life, nobody writes."],
  ["Running low", "Signal computes the client's real rhythm, not an average."],
  ["Outreach", "A message at the right moment, an appointment offered — before a competitor's shelf."],
];

function CycleReachat() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="container-site">
        <h2 className="font-display text-display-m max-w-2xl text-abyss-900">
          The repurchase cycle, finally visible
        </h2>
        <div className="mt-12 grid items-center gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,4fr)]">
          {/* The ring */}
          <div className="relative mx-auto aspect-square w-full max-w-[460px]">
            <span
              aria-hidden="true"
              className="absolute inset-[70px] rounded-full border-2 border-dashed border-brand-500/40"
            />
            <span className="absolute left-1/2 top-1/2 w-24 -translate-x-1/2 -translate-y-1/2 text-center">
              <span className="font-display block text-base font-semibold text-abyss-900">
                The rhythm
              </span>
              <span className="mt-1 block text-[11px] leading-snug text-slate-600">
                computed by Signal
              </span>
            </span>
            {CYCLE.map(([title, text], i) => {
              const pos = [
                "left-1/2 top-0 -translate-x-1/2",
                "right-0 top-1/2 -translate-y-1/2",
                "left-1/2 bottom-0 -translate-x-1/2",
                "left-0 top-1/2 -translate-y-1/2",
              ][i];
              return (
                <div
                  key={title}
                  className={`absolute ${pos} w-40 border-2 ${
                    i >= 2 ? "border-brand-500/50 bg-mist-100" : "border-abyss-900/15 bg-white"
                  } p-3 text-center shadow-card`}
                >
                  <p className="text-sm font-medium text-abyss-900">{title}</p>
                  <p className="mt-1 text-[11px] leading-snug text-slate-600">{text}</p>
                </div>
              );
            })}
          </div>

          <div className="space-y-5">
            <TaskList />
            <p className="text-body text-slate-600">
              Every approved follow-up becomes a task in the right advisor&apos;s
              day — Focus handles the order, she handles the relationship.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ————— Fashion & DTC: two worlds converging ————— */

const ONLINE = ["Wishlist and favorites", "Abandoned cart", "Revisited product pages", "Order history"];
const BOUTIQUE = ["Fittings, with sizes", "Advice given", "Returns and exchanges", "Preferences noted"];

function DeuxMondes() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="container-site">
        <h2 className="font-display text-display-m max-w-2xl text-abyss-900">
          Two worlds, one client
        </h2>
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <div className="border-2 border-abyss-900/15 bg-paper p-6 shadow-card">
            <p className="eyebrow text-brand-600">Online</p>
            <ul className="mt-4 space-y-2.5">
              {ONLINE.map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-body text-abyss-900">
                  <span aria-hidden="true" className="size-1.5 bg-brand-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="border-2 border-abyss-900/15 bg-paper p-6 shadow-card">
            <p className="eyebrow text-brand-600">In store</p>
            <ul className="mt-4 space-y-2.5">
              {BOUTIQUE.map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-body text-abyss-900">
                  <span aria-hidden="true" className="size-1.5 bg-brand-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div aria-hidden="true" className="my-4 flex justify-center gap-24 text-2xl text-brand-500">
          <span>↘</span>
          <span>↙</span>
        </div>

        <div className="dark grid items-center gap-8 bg-abyss-900 p-8 shadow-card-hover lg:grid-cols-2 lg:p-10">
          <div>
            <p className="eyebrow text-sky-500">The merge — Iris</p>
            <p className="font-display text-display-m mt-2 text-paper">
              One single profile.
            </p>
            <p className="mt-3 text-body text-sky-300">
              The site wishlist becomes a reason to call back in store;
              yesterday&apos;s fitting explains tomorrow&apos;s order. And
              attribution shares the credit without a fight.
            </p>
          </div>
          <WhatsAppThread />
        </div>
      </div>
    </section>
  );
}

/* ————— Specialty retail: the long-cycle timeline ————— */

const FRISE = [
  { annee: "Year 0", text: "The purchase. The piece, the advice, the preferences — all noted.", strong: false },
  { annee: "Year 1", text: "Service reminder. The servicing becomes a visit.", strong: true },
  { annee: "Years 2–3", text: "Tended silence: a note on the purchase anniversary, a relevant novelty.", strong: false },
  { annee: "Year 4", text: "The signal — a new model's page viewed. The advisor calls first.", strong: true },
] as const;

function TempsLong() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="container-site">
        <h2 className="font-display text-display-m max-w-2xl text-abyss-900">
          Four years of relationship, no gaps
        </h2>

        <div className="relative mt-14">
          <span aria-hidden="true" className="absolute left-0 right-0 top-[9px] hidden h-0.5 bg-abyss-900/10 lg:block" />
          <ol className="grid gap-8 lg:grid-cols-4 lg:gap-6">
            {FRISE.map((step) => (
              <li key={step.annee} className="relative lg:pt-8">
                <span
                  aria-hidden="true"
                  className={`absolute left-0 top-0 hidden size-5 lg:block ${
                    step.strong ? "bg-brand-500" : "border-2 border-abyss-900/30 bg-white"
                  }`}
                />
                <p className="eyebrow text-brand-600">{step.annee}</p>
                <p
                  className={`mt-2 text-body ${
                    step.strong ? "font-medium text-abyss-900" : "text-slate-600"
                  }`}
                >
                  {step.text}
                </p>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-14 grid items-center gap-8 lg:grid-cols-2">
          <AttributionTable />
          <div className="border-2 border-abyss-900/15 bg-paper p-8 shadow-card">
            <p className="text-h3 font-medium text-abyss-900">
              The long cycle can be measured too.
            </p>
            <p className="mt-3 text-body text-slate-600">
              Every workshop visit, every service reminder, every sale four
              years apart: attribution follows the relationship across its
              whole span — that&apos;s where your margin lives.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
