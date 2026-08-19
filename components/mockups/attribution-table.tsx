import { MockupFrame } from "./mockup-frame";

const ROWS = [
  ["Paris 8", "312", "47", "38 900 €"],
  ["Lyon Presqu'île", "268", "39", "29 750 €"],
  ["Genève", "191", "31", "41 200 €"],
  ["E-commerce", "540", "62", "22 400 €"],
];

/** Mockup — l'attribution du chiffre d'affaires, par boutique. */
export function AttributionTable({ className }: { className?: string }) {
  return (
    <MockupFrame title="Attribution — 30 derniers jours" className={className}>
      <table className="w-full border-collapse">
        <thead>
          <tr className="text-left text-[11px] font-medium uppercase tracking-wide text-slate-400">
            <th className="border-b border-abyss-900/10 pb-2 pr-2 font-medium">Boutique</th>
            <th className="border-b border-abyss-900/10 pb-2 pr-2 text-right font-medium">Messages</th>
            <th className="border-b border-abyss-900/10 pb-2 pr-2 text-right font-medium">Ventes</th>
            <th className="border-b border-abyss-900/10 pb-2 text-right font-medium">CA attribué</th>
          </tr>
        </thead>
        <tbody className="data-label text-caption">
          {ROWS.map(([shop, msg, sales, rev]) => (
            <tr key={shop}>
              <td className="border-b border-abyss-900/5 py-2 pr-2 text-abyss-900">{shop}</td>
              <td className="border-b border-abyss-900/5 py-2 pr-2 text-right text-slate-600">{msg}</td>
              <td className="border-b border-abyss-900/5 py-2 pr-2 text-right text-slate-600">{sales}</td>
              <td className="border-b border-abyss-900/5 py-2 text-right font-medium text-brand-700">{rev}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="mt-3 text-[11px] uppercase tracking-wide text-slate-400">
        Par boutique · par région · par conseiller
      </p>
    </MockupFrame>
  );
}
