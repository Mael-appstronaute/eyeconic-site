import { cn } from "@/lib/utils";

/**
 * Fond « aquarelle » — nappes floutées dans les bleus de la charte
 * (équivalent Eyeconic du paysage peint du template).
 */
export function BlurArt({ className }: { className?: string }) {
  return (
    <div aria-hidden="true" className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}>
      <span className="absolute -top-24 left-1/2 h-96 w-[80%] -translate-x-1/2 rounded-full bg-sky-300/50 blur-3xl" />
      <span className="absolute -left-24 top-1/3 h-80 w-96 rounded-full bg-brand-400/40 blur-3xl" />
      <span className="absolute -right-32 top-1/4 h-96 w-[32rem] rounded-full bg-mist-200/80 blur-3xl" />
      <span className="absolute -bottom-32 left-1/4 h-80 w-[36rem] rounded-full bg-brand-500/25 blur-3xl" />
      <span className="absolute bottom-0 right-1/4 h-64 w-80 rounded-full bg-sky-500/30 blur-3xl" />
    </div>
  );
}
