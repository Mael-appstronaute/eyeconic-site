import { MockupFrame } from "./mockup-frame";
import { cn } from "@/lib/utils";

const TASKS = [
  { label: "Rappeler Camille Morel — signal manteau", tag: "Priorité Focus", done: false, hot: true },
  { label: "Relance réachat — Sofiane Benali", tag: "Écho a préparé le message", done: false, hot: false },
  { label: "Confirmer le rendez-vous de 15 h", tag: "Agenda", done: true, hot: false },
  { label: "Retour client — validation directrice", tag: "En validation", done: false, hot: false },
];

/** Mockup — la journée d'un conseiller, priorisée par Focus. */
export function TaskList({ className }: { className?: string }) {
  return (
    <MockupFrame title="Journée du conseiller — Focus" className={className}>
      <ul className="space-y-2">
        {TASKS.map((t) => (
          <li
            key={t.label}
            className={cn(
              "flex items-start gap-3 border-2 p-3",
              t.hot ? "border-brand-500/50 bg-abyss-900" : "border-paper/14"
            )}
          >
            <span
              aria-hidden="true"
              className={cn(
                "mt-0.5 flex size-4 shrink-0 items-center justify-center border-2",
                t.done ? "border-brand-400 bg-brand-500" : "border-paper/30"
              )}
            >
              {t.done ? (
                <svg viewBox="0 0 8 8" className="size-2 text-ink" aria-hidden="true">
                  <path d="M1 4l2 2 4-4" fill="none" stroke="currentColor" strokeWidth="1.6" />
                </svg>
              ) : null}
            </span>
            <div className="min-w-0">
              <p
                className={cn(
                  "text-caption",
                  t.done ? "text-slate-400 line-through" : "text-paper"
                )}
              >
                {t.label}
              </p>
              <p className="data-label mt-0.5 text-[10px] uppercase tracking-[0.14em] text-sky-300">
                {t.tag}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </MockupFrame>
  );
}
