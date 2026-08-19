import { AGENTS, AgentAvatar } from "@/components/marketing/agent-avatar";

/**
 * Bento 4 cartes (référence template) : deux cartes bleu ciel, deux
 * cartes brume, mini-mockups « téléphone » en HTML/CSS.
 */
export function FeatureBento() {
  return (
    <section className="bg-paper pb-24 lg:pb-36">
      <div className="container-site grid gap-5 lg:grid-cols-2">
        {/* Carte 1 — grande, bleu ciel, téléphone onboarding */}
        <article className="flex flex-col rounded-3xl bg-sky-300 p-8 lg:row-span-2 lg:p-10">
          <h3 className="text-center text-2xl font-semibold tracking-tight text-abyss-950 sm:text-3xl">
            Live in 7 days,
            <br />
            store by store
          </h3>
          <p className="mx-auto mt-3 max-w-xs text-center text-sm text-abyss-950/70">
            Connect your stack and onboard each team with guided setup
          </p>

          {/* Téléphone */}
          <div className="mx-auto mt-10 w-full max-w-[260px] grow">
            <div className="rounded-[2rem] bg-white p-3 shadow-[0_30px_60px_rgba(6,51,90,0.25)]">
              <div aria-hidden="true" className="mx-auto mb-4 h-1.5 w-14 rounded-full bg-abyss-900/10" />
              <div className="px-2 pb-4">
                <p className="text-xl font-semibold tracking-tight text-abyss-950">
                  Paris 8
                  <br />
                  is ready!
                </p>
                <p className="mt-2 text-[12px] text-slate-600">
                  Invite your advisors and start clienteling today.
                </p>
                <div className="mt-5 rounded-2xl bg-mist-100 p-4">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-abyss-950">
                      Store
                      <br />
                      Paris 8
                    </p>
                    <span aria-hidden="true" className="flex size-6 items-center justify-center rounded-full bg-brand-500 text-paper">
                      <svg viewBox="0 0 12 12" className="size-3"><path d="M2 6.5L5 9l5-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg>
                    </span>
                  </div>
                  <p className="mt-4 text-[10px] font-medium uppercase tracking-[0.2em] text-slate-400">
                    STR · 2026 · LIVE
                  </p>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* Carte 2 — brume, données temps réel */}
        <article className="rounded-3xl bg-mist-100 p-8 lg:p-10">
          <div className="grid items-center gap-8 sm:grid-cols-2">
            <div>
              <h3 className="text-2xl font-semibold tracking-tight text-abyss-950">
                Real-time attribution
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                Watch messages turn into visits and sales, as it happens
              </p>
            </div>
            <div className="mx-auto w-full max-w-[220px]">
              <div className="rounded-[1.75rem] bg-white p-3 shadow-[0_24px_50px_rgba(6,51,90,0.18)]">
                <div className="rounded-2xl bg-mist-100 px-3 py-2 text-[11px] text-slate-400">
                  Search clients…
                </div>
                <p className="mt-3 px-1 text-[11px] font-medium uppercase tracking-wide text-slate-400">
                  Active signals
                </p>
                <p className="px-1 text-lg font-semibold text-abyss-950">24 today</p>
                <div className="mt-2 flex gap-1.5 px-1">
                  <span className="rounded-full bg-brand-500 px-2.5 py-1 text-[10px] font-medium text-paper">Reply</span>
                  <span className="rounded-full bg-mist-100 px-2.5 py-1 text-[10px] font-medium text-slate-600">Visit</span>
                  <span className="rounded-full bg-mist-100 px-2.5 py-1 text-[10px] font-medium text-slate-600">Sale</span>
                </div>
                <div className="mt-3 rounded-2xl bg-abyss-950 p-3">
                  <p className="text-[10px] text-sky-300">Attribution</p>
                  <p className="flex items-center justify-between text-sm font-medium text-paper">
                    All linked
                    <span className="rounded-full bg-brand-500 px-2 py-0.5 text-[10px]">✓ 100%</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* Cartes 3 & 4 */}
        <div className="grid gap-5 sm:grid-cols-2">
          <article className="rounded-3xl bg-mist-100 p-8 text-center">
            <h3 className="text-2xl font-semibold tracking-tight text-abyss-950">
              Five agents
              <br />
              included
            </h3>
            <div className="mt-6 flex items-center justify-center -space-x-2">
              {AGENTS.map((agent) => (
                <AgentAvatar
                  key={agent.name}
                  variant={agent.variant}
                  color={agent.color}
                  className="size-10 rounded-full ring-2 ring-mist-100"
                />
              ))}
            </div>
            <p className="mt-4 text-sm text-slate-600">
              Iris, Signal, Echo, Prism and Focus — working while you sell
            </p>
          </article>

          <article className="rounded-3xl bg-sky-300 p-8">
            <h3 className="text-2xl font-semibold tracking-tight text-abyss-950">
              Built for the shop floor
            </h3>
            <p className="mt-2 text-sm text-abyss-950/70">
              Unlimited users on every plan — never billed by seat
            </p>
            <div className="mt-6 space-y-3">
              <div className="flex items-center justify-between rounded-full bg-white px-4 py-2.5 shadow-sm">
                <span className="text-sm font-medium text-abyss-950">250,000 AI credits</span>
                <span className="text-[11px] font-medium text-brand-600">/month</span>
              </div>
              <div className="flex items-center justify-between rounded-full bg-white px-4 py-2.5 shadow-sm">
                <span className="text-sm font-medium text-abyss-950">99.9% uptime</span>
                <span className="text-[11px] font-medium text-slate-400">[To validate]</span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
