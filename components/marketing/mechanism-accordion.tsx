"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { SectionHeading } from "@/components/marketing/section-heading";
import { CustomerCard } from "@/components/mockups/customer-card";
import { WhatsAppThread } from "@/components/mockups/whatsapp-thread";
import { AttributionTable } from "@/components/mockups/attribution-table";

const STEPS = [
  {
    eyebrow: "Unifier",
    title: "Voir",
    text: "Chaque achat, chaque message, chaque essayage, chaque rendez-vous. Eyeconic relie vos boutiques, votre site, votre POS et vos messageries en une seule vue client. Y compris ce qui dormait dans un carnet ou sur le téléphone d'un vendeur.",
    visual: CustomerCard,
  },
  {
    eyebrow: "Activer",
    title: "Agir",
    text: "Signal repère qui est prêt à acheter. Focus le place en tête de la journée du bon conseiller. Écho prépare le message, dans sa voix, sur le canal que le client utilise vraiment.",
    visual: WhatsAppThread,
  },
  {
    eyebrow: "Mesurer",
    title: "Prouver",
    text: "Portée, réponses, conversions, réachat, chiffre d'affaires attribué — par boutique, par région, par conseiller. Chaque cycle rend le suivant plus précis.",
    visual: AttributionTable,
  },
] as const;

/** Section 4 — le mécanisme en 3 temps, items dépliables + visuel. */
export function MechanismAccordion() {
  const [active, setActive] = useState(0);
  const Visual = STEPS[active].visual;

  return (
    <section id="mecanisme" className="bg-white py-20 lg:py-32">
      <div className="container-site">
        <SectionHeading
          eyebrow="Le mécanisme"
          title="Voir. Agir. Prouver."
          intro="La donnée client d'un côté, l'exécution en boutique de l'autre, dans un seul outil."
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:gap-16">
          <ul className="space-y-3">
            {STEPS.map((step, i) => {
              const open = i === active;
              return (
                <li key={step.title}>
                  <button
                    type="button"
                    onClick={() => setActive(i)}
                    aria-expanded={open}
                    aria-controls={`mecanisme-panel-${i}`}
                    className={cn(
                      "w-full border-2 p-5 text-left transition-all lg:p-6",
                      open
                        ? "border-brand-500/40 bg-paper shadow-card"
                        : "border-abyss-900/10 bg-white hover:border-abyss-900/25"
                    )}
                  >
                    <span className="eyebrow flex items-center gap-2.5 text-brand-600">
                      <span
                        aria-hidden="true"
                        className={cn(
                          "size-1.5",
                          open ? "bg-gradient-brand" : "bg-slate-400/50"
                        )}
                      />
                      {step.eyebrow}
                    </span>
                    <span className="font-display text-display-m mt-2 block text-abyss-900">
                      {step.title}
                    </span>
                    <span
                      id={`mecanisme-panel-${i}`}
                      className={cn(
                        "mt-3 text-body text-slate-600",
                        open ? "block" : "hidden"
                      )}
                    >
                      {step.text}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>

          <div className="lg:sticky lg:top-24 lg:self-start">
            <Visual key={active} />
          </div>
        </div>
      </div>
    </section>
  );
}
