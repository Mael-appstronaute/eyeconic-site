"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { SectionHeading } from "@/components/marketing/section-heading";
import { AGENTS, AgentAvatar } from "@/components/marketing/agent-avatar";
import { CustomerCard } from "@/components/mockups/customer-card";
import { WhatsAppThread } from "@/components/mockups/whatsapp-thread";
import { AttributionTable } from "@/components/mockups/attribution-table";

const STEPS = [
  {
    eyebrow: "Unify",
    title: "See",
    text: "Every purchase, every message, every fitting, every appointment. Eyeconic connects your stores, your site, your POS and your messaging apps into a single customer view — including what used to live in a notebook or on an advisor's phone.",
    agents: ["Iris"],
    visual: CustomerCard,
  },
  {
    eyebrow: "Activate",
    title: "Act",
    text: "Signal spots who is ready to buy. Focus puts them at the top of the right advisor's day. Echo drafts the message, in their voice, on the channel the client actually uses.",
    agents: ["Signal", "Focus", "Echo"],
    visual: WhatsAppThread,
  },
  {
    eyebrow: "Measure",
    title: "Prove",
    text: "Reach, replies, conversions, repeat purchases, attributed revenue — by store, by region, by advisor. Every cycle makes the next one sharper.",
    agents: [],
    tags: ["By store", "By region", "By advisor"],
    visual: AttributionTable,
  },
] as const;

/**
 * Section 4 — the mechanism in 3 beats, as a horizontal stepper:
 * three blocks linked by arrows, detail panel below
 * (copy + agents at work on the left, mockup on the right).
 */
export function MechanismAccordion() {
  const [active, setActive] = useState(0);
  const step = STEPS[active];
  const Visual = step.visual;
  const stepAgents = AGENTS.filter((a) =>
    (step.agents as readonly string[]).includes(a.name)
  );

  return (
    <section id="mecanisme" className="bg-white py-20 lg:py-32">
      <div className="container-site">
        <SectionHeading
          eyebrow="The mechanism"
          title="The mechanism, in three beats"
          intro="Customer data on one side, in-store execution on the other — in a single tool."
        />

        {/* Stepper — 3 linked blocks */}
        <div
          role="tablist"
          aria-label="The three beats of the mechanism"
          className="relative mt-12 grid gap-3 sm:grid-cols-3 sm:gap-6"
        >
          {STEPS.map((s, i) => {
            const isActive = i === active;
            return (
              <div key={s.title} className="relative">
                {i > 0 ? (
                  <span
                    aria-hidden="true"
                    className="absolute -left-[1.15rem] top-1/2 hidden -translate-y-1/2 text-lg text-slate-400 sm:block"
                  >
                    →
                  </span>
                ) : null}
                <button
                  type="button"
                  role="tab"
                  id={`mecanisme-tab-${i}`}
                  aria-selected={isActive}
                  aria-controls="mecanisme-panel"
                  onClick={() => setActive(i)}
                  className={cn(
                    "w-full border-2 text-left transition-colors",
                    isActive
                      ? "border-brand-500/60 bg-mist-100"
                      : "border-abyss-900/10 bg-white hover:border-abyss-900/30"
                  )}
                >
                  <span
                    aria-hidden="true"
                    className={cn(
                      "block h-1 w-full",
                      isActive ? "bg-brand-500" : "bg-transparent"
                    )}
                  />
                  <span className="block p-5 pt-4 lg:p-6 lg:pt-5">
                    <span
                      className={cn(
                        "eyebrow block",
                        isActive ? "text-brand-600" : "text-slate-400"
                      )}
                    >
                      {s.eyebrow}
                    </span>
                    <span className="font-display text-display-m mt-1.5 block text-abyss-900">
                      {s.title}
                    </span>
                  </span>
                </button>
              </div>
            );
          })}
        </div>

        {/* Detail panel */}
        <div
          id="mecanisme-panel"
          role="tabpanel"
          aria-labelledby={`mecanisme-tab-${active}`}
          className="mt-6 grid gap-10 border-2 border-abyss-900/15 bg-paper p-6 shadow-card lg:grid-cols-2 lg:gap-14 lg:p-10"
        >
          <div className="flex flex-col justify-center">
            <p className="text-body-l text-slate-600">{step.text}</p>

            {stepAgents.length > 0 ? (
              <div className="mt-8">
                <p className="eyebrow mb-3 text-slate-400">Agents at work</p>
                <ul className="flex flex-wrap gap-3">
                  {stepAgents.map((agent) => (
                    <li
                      key={agent.name}
                      className="flex items-center gap-2.5 border-2 border-abyss-900/10 bg-white py-1.5 pl-1.5 pr-4"
                    >
                      <AgentAvatar
                        variant={agent.variant}
                        color={agent.color}
                        className="size-8"
                      />
                      <span className="text-sm font-medium text-abyss-900">
                        {agent.name}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            {"tags" in step && step.tags ? (
              <ul className="mt-8 flex flex-wrap gap-2">
                {step.tags.map((tag) => (
                  <li
                    key={tag}
                    className="border-2 border-abyss-900/10 bg-white px-3 py-1.5 text-caption font-medium text-slate-600"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            ) : null}
          </div>

          <div>
            <Visual key={active} />
          </div>
        </div>
      </div>
    </section>
  );
}
