import { MockupFrame } from "./mockup-frame";

/** Mockup — la vue client unique, telle que la voit un conseiller. */
export function CustomerCard({ className }: { className?: string }) {
  return (
    <MockupFrame title="Vue client — Iris" className={className}>
      <div className="flex items-start gap-4">
        <div className="data-label flex size-12 shrink-0 items-center justify-center bg-gradient-brand text-sm font-medium text-paper">
          CM
        </div>
        <div className="min-w-0">
          <p className="font-medium text-paper">Camille Morel</p>
          <div className="data-label mt-1 flex flex-wrap gap-1.5 text-[10px] uppercase tracking-[0.14em]">
            <span className="border-2 border-brand-500/50 px-1.5 py-0.5 text-brand-400">
              VIC
            </span>
            <span className="border-2 border-paper/20 px-1.5 py-0.5 text-sky-300">
              Boutique Paris 8
            </span>
            <span className="border-2 border-paper/20 px-1.5 py-0.5 text-sky-300">
              WhatsApp
            </span>
          </div>
        </div>
      </div>

      <dl className="mt-5 space-y-2.5 border-t-2 border-paper/14 pt-4">
        {[
          ["Dernier achat", "Sac cabas cuir — il y a 12 jours"],
          ["CA 12 mois", "8 420 €"],
          ["Canal préféré", "WhatsApp, en soirée"],
          ["Source", "Boutique + e-commerce + POS"],
        ].map(([k, v]) => (
          <div key={k} className="flex items-baseline justify-between gap-4">
            <dt className="data-label shrink-0 text-caption uppercase tracking-[0.14em] text-slate-400">
              {k}
            </dt>
            <dd className="data-label text-right text-caption text-paper">{v}</dd>
          </div>
        ))}
      </dl>

      <div className="mt-4 border-2 border-brand-500/40 bg-abyss-900 p-3">
        <p className="data-label text-[10px] uppercase tracking-[0.14em] text-brand-400">
          Signal — détecté par Signal
        </p>
        <p className="mt-1 text-caption text-paper">
          A revu deux fois la fiche du manteau laine cette semaine.
        </p>
      </div>
    </MockupFrame>
  );
}
