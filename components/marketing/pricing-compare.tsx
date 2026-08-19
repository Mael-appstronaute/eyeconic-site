"use client";

import { Fragment, useState } from "react";
import { cn } from "@/lib/utils";

/**
 * Comparatif détaillé des plans — repliable. Contenu strictement issu
 * des grilles du brief ; rien d'inventé.
 */
type Cell = string | boolean;

const GROUPS: { title: string; rows: [string, Cell, Cell, Cell][] }[] = [
  {
    title: "Relation client",
    rows: [
      ["Vue client unique", true, true, true],
      ["Historique multi-sources (boutique, e-commerce, POS)", true, true, true],
      ["Utilisateurs illimités", true, true, true],
    ],
  },
  {
    title: "Canaux",
    rows: [
      ["SMS et e-mail", true, true, true],
      ["WhatsApp et WeChat", false, true, true],
      ["Connecteur Shopify", true, true, true],
    ],
  },
  {
    title: "Agents IA",
    rows: [
      ["Crédits IA mensuels", "5 000", "250 000", "Sur mesure"],
      ["Les 5 agents (Iris, Signal, Écho, Prisme, Focus)", false, true, true],
      ["Agents personnalisés", false, true, true],
    ],
  },
  {
    title: "Exécution",
    rows: [
      ["Tâches quotidiennes", true, true, true],
      ["Workflows et validations", false, true, true],
    ],
  },
  {
    title: "Analyses",
    rows: [
      ["Attribution du chiffre d'affaires", false, true, true],
      ["Attribution avancée (boutique · région · conseiller)", false, true, true],
    ],
  },
  {
    title: "Sécurité et accompagnement",
    rows: [
      ["Hébergement UE, RGPD par conception", true, true, true],
      ["Onboarding inclus", true, true, true],
      ["CSM dédié", false, true, true],
      ["SLA", false, false, true],
      ["API prioritaire", false, false, true],
      ["SSO / SCIM", false, false, true],
      ["Hébergement dédié", false, false, true],
      ["Support US / UE / Asie", false, false, true],
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
              Comparatif détaillé des plans
            </span>
            <span className="mt-1 block text-body text-slate-600">
              Tout ce que contient chaque plan, ligne par ligne.
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
                  Fonctionnalité
                </th>
                {["Boutique", "Réseau", "Maison"].map((plan, i) => (
                  <th
                    key={plan}
                    className={cn(
                      "py-4 text-center",
                      i === 1 && "bg-mist-100"
                    )}
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
