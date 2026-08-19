import { MockupFrame } from "./mockup-frame";

/** Mockup — the single customer view, as an advisor sees it. */
export function CustomerCard({ className }: { className?: string }) {
  return (
    <MockupFrame title="Customer view — Iris" className={className}>
      <div className="flex items-start gap-4">
        <div className="bg-gradient-brand flex size-12 shrink-0 items-center justify-center text-sm font-medium text-paper">
          CM
        </div>
        <div className="min-w-0">
          <p className="font-medium text-abyss-900">Camille Morel</p>
          <div className="mt-1.5 flex flex-wrap gap-1.5 text-[11px] font-medium">
            <span className="bg-brand-500/10 px-1.5 py-0.5 text-brand-700">
              VIC
            </span>
            <span className="bg-mist-100 px-1.5 py-0.5 text-slate-600">
              Paris 8 boutique
            </span>
            <span className="bg-mist-100 px-1.5 py-0.5 text-slate-600">
              WhatsApp
            </span>
          </div>
        </div>
      </div>

      <dl className="mt-5 space-y-2.5 border-t border-abyss-900/10 pt-4">
        {[
          ["Last purchase", "Leather tote — 12 days ago"],
          ["12-month revenue", "€8,420"],
          ["Preferred channel", "WhatsApp, evenings"],
          ["Sources", "Store + e-commerce + POS"],
        ].map(([k, v]) => (
          <div key={k} className="flex items-baseline justify-between gap-4">
            <dt className="shrink-0 text-caption text-slate-400">{k}</dt>
            <dd className="data-label text-right text-caption text-abyss-900">
              {v}
            </dd>
          </div>
        ))}
      </dl>

      <div className="mt-4 border-2 border-brand-500/40 bg-mist-100 p-3">
        <p className="text-[11px] font-medium uppercase tracking-wide text-brand-600">
          Signal — detected by Signal
        </p>
        <p className="mt-1 text-caption text-abyss-900">
          Viewed the wool coat product page twice this week.
        </p>
      </div>
    </MockupFrame>
  );
}
