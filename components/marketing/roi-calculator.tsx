"use client";

import { useState } from "react";
import { SectionHeading } from "@/components/marketing/section-heading";

/**
 * Calculateur de ROI — estimation indicative, hypothèses modifiables
 * par le visiteur. Aucune promesse chiffrée : le calcul est transparent
 * (clients relancés × conversion × panier) et affiché comme tel.
 */
const PLAN_RESEAU = 290;

const fmt = new Intl.NumberFormat("fr-FR", {
  style: "currency",
  currency: "EUR",
  maximumFractionDigits: 0,
});

function Field({
  id,
  label,
  suffix,
  value,
  min,
  max,
  step,
  onChange,
}: {
  id: string;
  label: string;
  suffix: string;
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (v: number) => void;
}) {
  return (
    <div>
      <div className="flex items-baseline justify-between gap-4">
        <label htmlFor={id} className="text-sm font-medium text-abyss-900">
          {label}
        </label>
        <span className="data-label text-sm font-medium text-brand-700">
          {value.toLocaleString("fr-FR")}
          {suffix}
        </span>
      </div>
      <input
        id={id}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="mt-2 h-1.5 w-full cursor-pointer appearance-none bg-mist-200 accent-brand-600"
      />
    </div>
  );
}

export function RoiCalculator() {
  const [boutiques, setBoutiques] = useState(10);
  const [clients, setClients] = useState(60);
  const [conversion, setConversion] = useState(12);
  const [panier, setPanier] = useState(350);

  const ventes = Math.round(boutiques * clients * (conversion / 100));
  const ca = ventes * panier;
  const cout = PLAN_RESEAU;
  const multiple = cout > 0 ? ca / cout : 0;

  return (
    <section className="bg-white py-20 lg:py-32">
      <div className="container-site">
        <SectionHeading
          eyebrow="Calculateur"
          title="Ce que la relance peut rapporter"
          intro="Ajustez les hypothèses à votre réseau — le calcul est transparent : clients relancés × taux de conversion × panier moyen."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-[minmax(0,5fr)_minmax(0,4fr)]">
          {/* Hypothèses */}
          <div className="space-y-7 border-2 border-abyss-900/15 bg-paper p-6 shadow-card lg:p-8">
            <Field
              id="roi-boutiques"
              label="Points de vente"
              suffix=""
              value={boutiques}
              min={1}
              max={100}
              step={1}
              onChange={setBoutiques}
            />
            <Field
              id="roi-clients"
              label="Clients relancés par boutique et par mois"
              suffix=""
              value={clients}
              min={10}
              max={300}
              step={10}
              onChange={setClients}
            />
            <Field
              id="roi-conversion"
              label="Taux de conversion estimé"
              suffix=" %"
              value={conversion}
              min={2}
              max={40}
              step={1}
              onChange={setConversion}
            />
            <Field
              id="roi-panier"
              label="Panier moyen"
              suffix=" €"
              value={panier}
              min={50}
              max={2000}
              step={50}
              onChange={setPanier}
            />
          </div>

          {/* Résultat */}
          <div className="flex flex-col justify-between border-2 border-abyss-900/15 bg-white p-6 shadow-card lg:p-8">
            <div>
              <p className="eyebrow text-brand-600">Estimation mensuelle</p>
              <p className="font-display text-display-l mt-4 text-abyss-900">
                {fmt.format(ca)}
              </p>
              <p className="mt-1 text-body text-slate-600">
                de chiffre d&apos;affaires généré par la relance, soit{" "}
                <span className="data-label font-medium text-abyss-900">
                  {ventes.toLocaleString("fr-FR")}
                </span>{" "}
                ventes.
              </p>

              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="bg-mist-100 p-4">
                  <p className="font-display text-display-m text-abyss-900">
                    ×{multiple >= 100 ? Math.round(multiple) : multiple.toFixed(1)}
                  </p>
                  <p className="mt-1 text-[11px] font-medium uppercase tracking-wide text-slate-600">
                    Retour vs plan Réseau ({fmt.format(cout)}/mois)
                  </p>
                </div>
                <div className="bg-mist-100 p-4">
                  <p className="font-display text-display-m text-abyss-900">
                    {fmt.format(Math.max(ca - cout, 0))}
                  </p>
                  <p className="mt-1 text-[11px] font-medium uppercase tracking-wide text-slate-600">
                    Marge après abonnement
                  </p>
                </div>
              </div>
            </div>

            <p className="mt-6 text-[11px] uppercase tracking-wide text-slate-400">
              Estimation indicative — vos hypothèses, pas une promesse.
              Prix Réseau [à valider].
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
