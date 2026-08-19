import { MockupFrame } from "./mockup-frame";

/** Mockup — Écho rédige dans la voix du conseiller, sur le bon canal. */
export function WhatsAppThread({ className }: { className?: string }) {
  return (
    <MockupFrame title="Conversation — WhatsApp" className={className}>
      <div className="space-y-3">
        <div className="max-w-[85%] border-2 border-paper/14 bg-abyss-900 p-3">
          <p className="text-caption text-paper">
            Bonjour ! Le manteau que j&apos;avais essayé est-il encore
            disponible en 38 ?
          </p>
          <p className="data-label mt-1.5 text-[10px] uppercase tracking-[0.14em] text-slate-400">
            Camille — 18:42
          </p>
        </div>

        <div className="ml-auto max-w-[85%] border-2 border-brand-500/50 bg-brand-800/40 p-3">
          <p className="text-caption text-paper">
            Bonsoir Camille, oui — je vous en ai mis un de côté. Je suis en
            boutique jeudi, je vous le présente avec la nouvelle ceinture ?
          </p>
          <p className="data-label mt-1.5 text-[10px] uppercase tracking-[0.14em] text-brand-400">
            Brouillon d&apos;Écho — voix du conseiller
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="data-label border-2 border-paper/20 px-2 py-1 text-[10px] uppercase tracking-[0.14em] text-sky-300">
            Envoyer
          </span>
          <span className="data-label px-2 py-1 text-[10px] uppercase tracking-[0.14em] text-slate-400">
            Modifier
          </span>
        </div>
      </div>
    </MockupFrame>
  );
}
