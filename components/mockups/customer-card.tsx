import { MockupFrame } from "./mockup-frame";

/** Mockup — la vue client unique, telle que la voit un conseiller. */
export function CustomerCard({ className }: { className?: string }) {
  return (
    <MockupFrame title="Vue client — Iris" className={className}>
      <div className="flex items-start gap-4">
        <div className="bg-gradient-brand flex size-12 shrink-0 items-center justify-center rounded-md text-sm font-medium text-paper">
          CM
        </div>
        <div className="min-w-0">
          <p className="font-medium text-abyss-900">Camille Morel</p>
          <div className="mt-1.5 flex flex-wrap gap-1.5 text-[11px] font-medium">
            <span className="rounded-sm bg-brand-500/10 px-1.5 py-0.5 text-brand-700">
              VIC
            </span>
            <span className="rounded-sm bg-mist-100 px-1.5 py-0.5 text-slate-600">
              Boutique Paris 8
            </span>
            <span className="rounded-sm bg-mist-100 px-1.5 py-0.5 text-slate-600">
              WhatsApp
            </span>
          </div>
        </div>
      </div>

      <dl className="mt-5 space-y-2.5 border-t border-abyss-900/10 pt-4">
        {[
          ["Dernier achat", "Sac cabas cuir — il y a 12 jours"],
          ["CA 12 mois", "8 420 €"],
          ["Canal préféré", "WhatsApp, en soirée"],
          ["Source", "Boutique + e-commerce + POS"],
        ].map(([k, v]) => (
          <div key={k} className="flex items-baseline justify-between gap-4">
            <dt className="shrink-0 text-caption text-slate-400">{k}</dt>
            <dd className="data-label text-right text-caption text-abyss-900">
              {v}
            </dd>
          </div>
        ))}
      </dl>

      <div className="mt-4 rounded-md border-2 border-brand-500/40 bg-mist-100 p-3">
        <p className="text-[11px] font-medium uppercase tracking-wide text-brand-600">
          Signal — détecté par Signal
        </p>
        <p className="mt-1 text-caption text-abyss-900">
          A revu deux fois la fiche du manteau laine cette semaine.
        </p>
      </div>
    </MockupFrame>
  );
}
