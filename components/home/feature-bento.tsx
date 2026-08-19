import { AGENTS, AgentAvatar } from "@/components/marketing/agent-avatar";

/**
 * Bento v5 — visuels riches en haut (téléphones inclinés, orbite
 * d'avatars, éventail de cartes, cascade de notifications), titre gras
 * + description grise en bas (référence maquette Tchil fournie).
 */
export function FeatureBento() {
  return (
    <section className="bg-paper pb-24 lg:pb-36">
      <div className="container-site grid gap-6 lg:grid-cols-5">
        {/* 1 — Orbite : les 5 agents autour de l'icône */}
        <article className="rounded-[2rem] bg-white p-8 shadow-[0_20px_60px_rgba(6,51,90,0.08)] ring-1 ring-abyss-900/5 lg:col-span-2">
          <div className="relative mx-auto aspect-square w-full max-w-[300px]">
            {/* Anneau */}
            <span aria-hidden="true" className="absolute inset-4 rounded-full border border-brand-500/25" />
            <span aria-hidden="true" className="absolute inset-12 rounded-full border border-brand-500/15" />
            {/* Centre — icône Eyeconic */}
            <span className="absolute left-1/2 top-1/2 flex size-32 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-[0_16px_44px_rgba(6,51,90,0.16)]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/brand/Eyeconic_Logo_Icon.svg" alt="" className="size-14" />
            </span>
            {/* Avatars sur l'anneau */}
            {AGENTS.map((agent, i) => {
              const angle = (i / AGENTS.length) * Math.PI * 2 - Math.PI / 2;
              const x = 50 + Math.cos(angle) * 46;
              const y = 50 + Math.sin(angle) * 46;
              return (
                <span
                  key={agent.name}
                  className="absolute -translate-x-1/2 -translate-y-1/2"
                  style={{ left: `${x}%`, top: `${y}%` }}
                >
                  <AgentAvatar
                    variant={agent.variant}
                    color={agent.color}
                    className="size-12 rounded-full shadow-[0_10px_24px_rgba(6,51,90,0.22)] ring-4 ring-white"
                  />
                </span>
              );
            })}
          </div>
          <h3 className="mt-8 text-2xl font-bold tracking-tight text-abyss-950">
            Five agents included.
          </h3>
          <p className="mt-2 text-sm text-slate-600">
            Iris, Signal, Echo, Prism and Focus — working while you sell.
          </p>
        </article>

        {/* 2 — Téléphones inclinés : onboarding boutique */}
        <article className="overflow-hidden rounded-[2rem] bg-white shadow-[0_20px_60px_rgba(6,51,90,0.08)] ring-1 ring-abyss-900/5 lg:col-span-3">
          <div className="relative h-72 overflow-hidden bg-gradient-to-b from-mist-100 to-white sm:h-80">
            {/* Téléphone arrière */}
            <div className="absolute left-1/2 top-8 w-52 -translate-x-[110%] rotate-[-9deg] rounded-[1.8rem] bg-abyss-950 p-2.5 shadow-[0_30px_60px_rgba(6,51,90,0.3)]">
              <div className="rounded-[1.4rem] bg-abyss-900 px-4 pb-16 pt-4">
                <p className="text-[10px] text-sky-300">Today&apos;s signals</p>
                <p className="mt-1 text-lg font-semibold text-paper">24 waiting</p>
                <div className="mt-3 space-y-2">
                  {["Camille M. — coat signal", "Sofiane B. — repurchase", "Louise B. — in town"].map((row) => (
                    <p key={row} className="truncate rounded-lg bg-abyss-950/60 px-2.5 py-1.5 text-[10px] text-paper/80">
                      {row}
                    </p>
                  ))}
                </div>
              </div>
            </div>
            {/* Téléphone avant */}
            <div className="absolute left-1/2 top-6 w-56 -translate-x-[8%] rotate-[7deg] rounded-[1.8rem] bg-white p-2.5 shadow-[0_30px_60px_rgba(6,51,90,0.22)] ring-1 ring-abyss-900/10">
              <div className="rounded-[1.4rem] bg-white px-4 pb-14 pt-3">
                <div aria-hidden="true" className="mx-auto mb-3 h-1 w-12 rounded-full bg-abyss-900/10" />
                <p className="text-xl font-bold tracking-tight text-abyss-950">
                  Paris 8<br />is ready!
                </p>
                <p className="mt-1.5 text-[11px] text-slate-600">
                  Invite your advisors and start clienteling today.
                </p>
                <div className="mt-4 rounded-2xl bg-mist-100 p-3.5">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-semibold text-abyss-950">
                      Store<br />Paris 8
                    </p>
                    <span aria-hidden="true" className="flex size-6 items-center justify-center rounded-full bg-brand-500 text-paper">
                      <svg viewBox="0 0 12 12" className="size-3"><path d="M2 6.5L5 9l5-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg>
                    </span>
                  </div>
                  <p className="mt-3 text-[9px] font-semibold uppercase tracking-[0.22em] text-slate-400">
                    STR · 2026 · LIVE
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="p-8 pt-6">
            <h3 className="text-2xl font-bold tracking-tight text-abyss-950">
              Live in 7 days, store by store.
            </h3>
            <p className="mt-2 max-w-md text-sm text-slate-600">
              Connect your stack and onboard each team with guided setup.
            </p>
          </div>
        </article>

        {/* 3 — Éventail : du message à la vente */}
        <article className="overflow-hidden rounded-[2rem] bg-white shadow-[0_20px_60px_rgba(6,51,90,0.08)] ring-1 ring-abyss-900/5 lg:col-span-3">
          <div className="relative h-64 overflow-hidden bg-gradient-to-b from-mist-100 to-white sm:h-72">
            {[
              { label: "Message", sub: "Echo's draft, sent by Amélie", tone: "bg-sky-300 text-abyss-950", rotate: "-rotate-[10deg]", pos: "left-[6%] top-14", z: "z-10" },
              { label: "Visit", sub: "Camille, Paris 8 — Thursday", tone: "bg-brand-500 text-paper", rotate: "rotate-[2deg]", pos: "left-1/2 top-8 -translate-x-1/2", z: "z-20" },
              { label: "Sale", sub: "€890 — attributed ✓", tone: "bg-abyss-950 text-paper", rotate: "rotate-[10deg]", pos: "right-[6%] top-16", z: "z-30" },
            ].map((card) => (
              <div
                key={card.label}
                className={`absolute ${card.pos} ${card.z} w-44 ${card.rotate} rounded-3xl ${card.tone} p-5 shadow-[0_26px_50px_rgba(6,51,90,0.28)]`}
              >
                <p className="text-[10px] font-medium uppercase tracking-[0.18em] opacity-70">
                  Step
                </p>
                <p className="mt-6 text-2xl font-bold tracking-tight">{card.label}</p>
                <p className="mt-1 text-[11px] opacity-80">{card.sub}</p>
              </div>
            ))}
          </div>
          <div className="p-8 pt-6">
            <h3 className="text-2xl font-bold tracking-tight text-abyss-950">
              Real-time attribution.
            </h3>
            <p className="mt-2 max-w-md text-sm text-slate-600">
              Watch messages turn into visits and sales, as it happens.
            </p>
          </div>
        </article>

        {/* 4 — Cascade de notifications */}
        <article className="flex flex-col rounded-[2rem] bg-white p-8 shadow-[0_20px_60px_rgba(6,51,90,0.08)] ring-1 ring-abyss-900/5 lg:col-span-2">
          <div className="flex grow flex-col justify-center">
            <div className="mx-auto w-full max-w-[320px]">
              {[
                { title: "Eyeconic", sub: "Camille just viewed the coat page…", dim: "scale-[0.88] opacity-40", mb: "-mb-5" },
                { title: "New signal!", sub: "Echo drafted a reply — review and send", dim: "scale-[0.94] opacity-70", mb: "-mb-5" },
                { title: "You made a sale!", sub: "€890 attributed to Amélie, Paris 8", dim: "", mb: "" },
              ].map((n) => (
                <div
                  key={n.sub}
                  className={`${n.dim} ${n.mb} relative flex items-center gap-3 rounded-2xl bg-white p-3.5 shadow-[0_14px_36px_rgba(6,51,90,0.14)] ring-1 ring-abyss-900/5`}
                >
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-gradient-brand">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/brand/Eyeconic_Logo_Icon_White.svg" alt="" className="size-5" />
                  </span>
                  <span className="min-w-0">
                    <span className="block truncate text-sm font-semibold text-abyss-950">
                      {n.title}
                    </span>
                    <span className="block truncate text-[12px] text-slate-600">{n.sub}</span>
                  </span>
                </div>
              ))}
            </div>
          </div>
          <h3 className="mt-8 text-2xl font-bold tracking-tight text-abyss-950">
            Built for the shop floor.
          </h3>
          <p className="mt-2 text-sm text-slate-600">
            Unlimited users on every plan — never billed by seat. 250,000 AI
            credits/month on Network.
          </p>
        </article>
      </div>
    </section>
  );
}
