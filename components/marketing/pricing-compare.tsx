"use client";

import { Fragment, useState } from "react";
import { cn } from "@/lib/utils";

/**
 * Detailed plan comparison — collapsible. Content strictly from the
 * validated pricing grid; nothing invented.
 */
type Cell = string | boolean;

const GROUPS: { title: string; rows: [string, Cell, Cell, Cell][] }[] = [
  {
    title: "Customer relationship",
    rows: [
      ["Single customer view", true, true, true],
      ["Multi-source history (store, e-commerce, POS)", true, true, true],
      ["Unlimited users", true, true, true],
    ],
  },
  {
    title: "Channels",
    rows: [
      ["SMS and email", true, true, true],
      ["WhatsApp and WeChat", false, true, true],
      ["Shopify connector", true, true, true],
    ],
  },
  {
    title: "AI agents",
    rows: [
      ["Monthly AI credits", "5,000", "250,000", "Tailored"],
      ["All 5 agents (Iris, Signal, Echo, Prism, Focus)", false, true, true],
      ["Custom agents", false, true, true],
    ],
  },
  {
    title: "Execution",
    rows: [
      ["Daily tasks", true, true, true],
      ["Workflows and approvals", false, true, true],
    ],
  },
  {
    title: "Analytics",
    rows: [
      ["Revenue attribution", false, true, true],
      ["Advanced attribution (store · region · advisor)", false, true, true],
    ],
  },
  {
    title: "Security & support",
    rows: [
      ["EU hosting, GDPR by design", true, true, true],
      ["Onboarding included", true, true, true],
      ["Dedicated CSM", false, true, true],
      ["SLA", false, false, true],
      ["Priority API", false, false, true],
      ["SSO / SCIM", false, false, true],
      ["Dedicated hosting", false, false, true],
      ["US / EU / Asia support", false, false, true],
    ],
  },
];

function CellValue({ value, featured }: { value: Cell; featured?: boolean }) {
  if (typeof value === "string") {
    return (
      <span className={cn("data-label text-caption font-medium", featured ? "text-abyss-900" : "text-slate-600")}>
        {value}
      </span>
    );
  }
  return value ? (
    <svg viewBox="0 0 16 16" className={cn("mx-auto size-4", featured ? "text-brand-600" : "text-brand-500")} aria-hidden="true">
      <path d="M3 8.5l3.5 3.5L13 5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" />
    </svg>
  ) : (
    <span aria-hidden="true" className="text-slate-400">
      —
    </span>
  );
}

export function PricingCompare() {
  const [open, setOpen] = useState(false);

  return (
    <section className="bg-paper pb-20 lg:pb-32">
      <div className="container-site">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="comparatif-plans"
          className="flex w-full items-center justify-between gap-4 border-2 border-abyss-900/15 bg-white px-6 py-5 text-left shadow-card transition-colors hover:border-abyss-900/30"
        >
          <span>
            <span className="font-display text-display-m block text-abyss-900">
              Detailed plan comparison
            </span>
            <span className="mt-1 block text-body text-slate-600">
              Everything each plan includes, line by line.
            </span>
          </span>
          <span
            aria-hidden="true"
            className={cn(
              "shrink-0 text-2xl font-light text-brand-600 transition-transform",
              open && "rotate-45"
            )}
          >
            +
          </span>
        </button>

        <div id="comparatif-plans" hidden={!open} className="border-2 border-t-0 border-abyss-900/15 bg-white px-4 pb-6 sm:px-6">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="w-[46%] py-4 text-left text-caption font-medium uppercase tracking-wide text-slate-400">
                  Feature
                </th>
                {["Boutique", "Network", "Maison"].map((plan, i) => (
                  <th
                    key={plan}
                    className={cn("py-4 text-center", i === 1 && "bg-mist-100")}
                  >
                    <span className="eyebrow text-brand-600">{plan}</span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {GROUPS.map((group) => (
                <Fragment key={group.title}>
                  <tr>
                    <td
                      colSpan={4}
                      className="border-t-2 border-abyss-900/10 pb-2 pt-5 text-caption font-medium uppercase tracking-wide text-slate-400"
                    >
                      {group.title}
                    </td>
                  </tr>
                  {group.rows.map(([label, b, r, m]) => (
                    <tr key={label}>
                      <td className="border-t border-abyss-900/5 py-2.5 pr-4 text-body text-abyss-900">
                        {label}
                      </td>
                      <td className="border-t border-abyss-900/5 py-2.5 text-center">
                        <CellValue value={b} />
                      </td>
                      <td className="border-t border-abyss-900/5 bg-mist-100 py-2.5 text-center">
                        <CellValue value={r} featured />
                      </td>
                      <td className="border-t border-abyss-900/5 py-2.5 text-center">
                        <CellValue value={m} />
                      </td>
                    </tr>
                  ))}
                </Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
