/**
 * Grand mockup d'application — HTML/CSS (aucune capture n'existe).
 * Barre latérale + rangée de métriques + activité, données [Demo data].
 */
const NAV = ["Dashboard", "Clients", "Signals", "Tasks", "Campaigns"];

const STATS = [
  { label: "Attributed revenue", value: "€38,900", delta: "+24%", up: true },
  { label: "Clients contacted", value: "1,234", delta: "+12%", up: true },
  { label: "Signals detected", value: "4,678", delta: "+8%", up: true },
  { label: "Response rate", value: "38%", delta: "+5pts", up: true },
];

const ROWS = [
  ["Camille Morel", "Coat signal — page viewed twice", "Paris 8", "Today"],
  ["Sofiane Benali", "Repurchase due — fragrance 100ml", "Geneva", "Today"],
  ["Louise Berg", "Back in town this week", "London Mayfair", "Yesterday"],
];

export function DashboardPreview() {
  return (
    <figure className="overflow-hidden rounded-3xl bg-white shadow-[0_40px_100px_rgba(6,51,90,0.18)] ring-1 ring-abyss-900/10">
      {/* Barre fenêtre */}
      <div className="flex items-center justify-between border-b border-abyss-900/8 px-5 py-3">
        <div className="flex items-center gap-1.5" aria-hidden="true">
          <span className="size-2.5 rounded-full bg-mist-200" />
          <span className="size-2.5 rounded-full bg-mist-200" />
          <span className="size-2.5 rounded-full bg-mist-200" />
        </div>
        <span className="rounded-full bg-mist-100 px-3 py-1 text-[11px] font-medium uppercase tracking-wide text-slate-400">
          Demo data
        </span>
      </div>

      <div className="grid sm:grid-cols-[180px_1fr]">
        {/* Sidebar */}
        <nav aria-hidden="true" className="hidden border-r border-abyss-900/8 p-4 sm:block">
          <ul className="space-y-1">
            {NAV.map((item, i) => (
              <li
                key={item}
                className={
                  i === 0
                    ? "rounded-xl bg-mist-100 px-3 py-2 text-sm font-medium text-abyss-950"
                    : "rounded-xl px-3 py-2 text-sm text-slate-600"
                }
              >
                {item}
              </li>
            ))}
          </ul>
        </nav>

        {/* Main */}
        <div className="p-5 sm:p-7">
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            {STATS.map((s) => (
              <div key={s.label} className="rounded-2xl ring-1 ring-abyss-900/8 p-4">
                <p className="text-[11px] font-medium uppercase tracking-wide text-slate-400">
                  {s.label}
                </p>
                <p className="mt-1.5 text-xl font-semibold tracking-tight text-abyss-950">
                  {s.value}
                </p>
                <p className="mt-1 text-[11px] font-medium text-brand-600">
                  {s.delta} vs last month
                </p>
              </div>
            ))}
          </div>

          {/* Activité */}
          <div className="mt-5 rounded-2xl ring-1 ring-abyss-900/8">
            <p className="border-b border-abyss-900/8 px-4 py-3 text-sm font-medium text-abyss-950">
              Today&apos;s signals
            </p>
            <ul>
              {ROWS.map(([name, note, store, when], i) => (
                <li
                  key={name}
                  className={`flex items-center gap-3 px-4 py-3 ${i > 0 ? "border-t border-abyss-900/5" : ""}`}
                >
                  <span
                    aria-hidden="true"
                    className="flex size-8 shrink-0 items-center justify-center rounded-full bg-mist-200 text-[11px] font-semibold text-abyss-900"
                  >
                    {name.split(" ").map((n) => n[0]).join("")}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block truncate text-sm font-medium text-abyss-950">{name}</span>
                    <span className="block truncate text-[12px] text-slate-600">{note}</span>
                  </span>
                  <span className="hidden rounded-full bg-mist-100 px-2.5 py-1 text-[11px] font-medium text-slate-600 md:block">
                    {store}
                  </span>
                  <span className="text-[11px] text-slate-400">{when}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </figure>
  );
}
