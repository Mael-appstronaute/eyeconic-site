import { MockupFrame } from "./mockup-frame";

/** Mockup — Echo drafts in the advisor's voice, on the right channel. */
export function WhatsAppThread({ className }: { className?: string }) {
  return (
    <MockupFrame title="Conversation — WhatsApp" className={className}>
      <div className="space-y-3">
        <div className="max-w-[85%] bg-mist-100 p-3">
          <p className="text-caption text-abyss-900">
            Hi! Is the coat I tried on still available in a size 8?
          </p>
          <p className="mt-1.5 text-[11px] text-slate-400">Camille — 6:42 pm</p>
        </div>

        <div className="ml-auto max-w-[85%] border-2 border-brand-500/40 bg-brand-500/10 p-3">
          <p className="text-caption text-abyss-900">
            Good evening Camille — yes, I've set one aside for you. I'm in
            the boutique on Thursday; shall I show it to you with the new
            belt?
          </p>
          <p className="mt-1.5 text-[11px] font-medium uppercase tracking-wide text-brand-600">
            Echo's draft — the advisor's voice
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="bg-abyss-900 px-3 py-1.5 text-[11px] font-medium text-paper">
            Send
          </span>
          <span className="px-2 py-1.5 text-[11px] font-medium text-slate-600">
            Edit
          </span>
        </div>
      </div>
    </MockupFrame>
  );
}
