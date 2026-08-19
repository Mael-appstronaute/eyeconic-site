import { cn } from "@/lib/utils";

/**
 * L'encart « Pourquoi des crédits IA plutôt que des sièges » —
 * c'est notre argument face à la vente par paquets de sièges.
 * Micro-schéma : des sièges facturés un à un vs toute la boutique équipée.
 */
export function CreditsExplainer({ className }: { className?: string }) {
  return (
    <aside
      className={cn(
        "grid gap-8 rounded-xl border border-abyss-900/10 bg-white p-7 shadow-card lg:grid-cols-[1fr_auto] lg:items-center lg:p-9",
        className
      )}
    >
      <div>
        <p className="eyebrow text-brand-600">
          Pourquoi des crédits IA plutôt que des sièges
        </p>
        <p className="mt-4 max-w-2xl text-body text-slate-600">
          Un logiciel vendu au siège vous force à choisir qui aura le droit de
          bien travailler. Chez Eyeconic, chaque conseiller a un compte, du
          vendeur saisonnier à la directrice de région&nbsp;: vous ne payez que
          ce que les agents IA produisent. Quand une boutique vend plus, elle
          consomme plus de crédits — jamais plus de licences.
        </p>
      </div>

      {/* Micro-schéma : sièges comptés vs boutique entière */}
      <div aria-hidden="true" className="flex items-end gap-8">
        <div>
          <div className="flex gap-1.5">
            {[0, 1, 2, 3, 4].map((i) => (
              <span
                key={i}
                className={cn(
                  "size-4 rounded-sm border",
                  i < 2
                    ? "border-slate-400/60 bg-mist-200"
                    : "border-dashed border-slate-400/60 bg-transparent"
                )}
              />
            ))}
          </div>
          <p className="mt-2 text-[11px] font-medium uppercase tracking-wide text-slate-400">
            Par siège — 5 licences
          </p>
        </div>
        <div>
          <div className="grid grid-cols-5 gap-1.5">
            {Array.from({ length: 10 }).map((_, i) => (
              <span key={i} className="bg-gradient-brand size-4 rounded-sm" />
            ))}
          </div>
          <p className="mt-2 text-[11px] font-medium uppercase tracking-wide text-brand-600">
            Aux crédits — toute la boutique
          </p>
        </div>
      </div>
    </aside>
  );
}
