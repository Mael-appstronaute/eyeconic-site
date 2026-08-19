import { MockupFrame } from "./mockup-frame";
import { cn } from "@/lib/utils";

const TASKS = [
  { label: "Call back Camille Morel — coat signal", tag: "Focus priority", done: false, hot: true },
  { label: "Repurchase follow-up — Sofiane Benali", tag: "Echo has drafted the message", done: false, hot: false },
  { label: "Confirm the 3 pm appointment", tag: "Calendar", done: true, hot: false },
  { label: "Client return — manager approval", tag: "Pending approval", done: false, hot: false },
];

/** Mockup — an advisor's day, prioritized by Focus. */
export function TaskList({ className }: { className?: string }) {
  return (
    <MockupFrame title="Advisor's day — Focus" className={className}>
      <ul className="space-y-2">
        {TASKS.map((t) => (
          <li
            key={t.label}
            className={cn(
              "flex items-start gap-3 border-2 p-3",
              t.hot
                ? "border-brand-500/40 bg-mist-100"
                : "border-abyss-900/10 bg-white"
            )}
          >
            <span
              aria-hidden="true"
              className={cn(
                "mt-0.5 flex size-4 shrink-0 items-center justify-center border",
                t.done
                  ? "border-brand-500 bg-brand-500"
                  : "border-slate-400/60 bg-white"
              )}
            >
              {t.done ? (
                <svg viewBox="0 0 8 8" className="size-2 text-white" aria-hidden="true">
                  <path d="M1 4l2 2 4-4" fill="none" stroke="currentColor" strokeWidth="1.6" />
                </svg>
              ) : null}
            </span>
            <div className="min-w-0">
              <p
                className={cn(
                  "text-caption",
                  t.done ? "text-slate-400 line-through" : "text-abyss-900"
                )}
              >
                {t.label}
              </p>
              <p className="mt-0.5 text-[11px] font-medium uppercase tracking-wide text-brand-600">
                {t.tag}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </MockupFrame>
  );
}
