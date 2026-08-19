import { cn } from "@/lib/utils";

/**
 * "Why AI credits instead of seats" — our argument against per-seat
 * bundles. Micro-diagram: seats billed one by one vs the whole store
 * equipped.
 */
export function CreditsExplainer({ className }: { className?: string }) {
  return (
    <aside
      className={cn(
        "grid gap-8 border-2 border-abyss-900/15 bg-white p-7 shadow-card lg:grid-cols-[1fr_auto] lg:items-center lg:p-9",
        className
      )}
    >
      <div>
        <p className="eyebrow text-brand-600">
          Why AI credits instead of seats
        </p>
        <p className="mt-4 max-w-2xl text-body text-slate-600">
          Software sold by the seat forces you to choose who gets to do their
          job well. With Eyeconic, every advisor has an account — from the
          seasonal hire to the regional director. You only pay for what the
          AI agents produce: when a store sells more, it uses more credits —
          never more licenses.
        </p>
      </div>

      {/* Micro-diagram: counted seats vs the whole store */}
      <div aria-hidden="true" className="flex items-end gap-8">
        <div>
          <div className="flex gap-1.5">
            {[0, 1, 2, 3, 4].map((i) => (
              <span
                key={i}
                className={cn(
                  "size-4 border",
                  i < 2
                    ? "border-slate-400/60 bg-mist-200"
                    : "border-dashed border-slate-400/60 bg-transparent"
                )}
              />
            ))}
          </div>
          <p className="mt-2 text-[11px] font-medium uppercase tracking-wide text-slate-400">
            Per seat — 5 licenses
          </p>
        </div>
        <div>
          <div className="grid grid-cols-5 gap-1.5">
            {Array.from({ length: 10 }).map((_, i) => (
              <span key={i} className="bg-gradient-brand size-4" />
            ))}
          </div>
          <p className="mt-2 text-[11px] font-medium uppercase tracking-wide text-brand-600">
            Credits — the whole store
          </p>
        </div>
      </div>
    </aside>
  );
}
