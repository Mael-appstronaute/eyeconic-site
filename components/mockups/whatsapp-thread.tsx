import { MockupFrame } from "./mockup-frame";

/** Mockup — Écho rédige dans la voix du conseiller, sur le bon canal. */
export function WhatsAppThread({ className }: { className?: string }) {
  return (
    <MockupFrame title="Conversation — WhatsApp" className={className}>
      <div className="space-y-3">
        <div className="max-w-[85%] rounded-lg rounded-bl-sm bg-mist-100 p-3">
          <p className="text-caption text-abyss-900">
            Bonjour ! Le manteau que j&apos;avais essayé est-il encore
            disponible en 38 ?
          </p>
          <p className="mt-1.5 text-[11px] text-slate-400">Camille — 18:42</p>
        </div>

        <div className="ml-auto max-w-[85%] rounded-lg rounded-br-sm border-2 border-brand-500/40 bg-brand-500/10 p-3">
          <p className="text-caption text-abyss-900">
            Bonsoir Camille, oui — je vous en ai mis un de côté. Je suis en
            boutique jeudi, je vous le présente avec la nouvelle ceinture ?
          </p>
          <p className="mt-1.5 text-[11px] font-medium uppercase tracking-wide text-brand-600">
            Brouillon d&apos;Écho — voix du conseiller
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="rounded-md bg-abyss-900 px-3 py-1.5 text-[11px] font-medium text-paper">
            Envoyer
          </span>
          <span className="px-2 py-1.5 text-[11px] font-medium text-slate-600">
            Modifier
          </span>
        </div>
      </div>
    </MockupFrame>
  );
}
