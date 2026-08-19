"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/marketing/logo";
import { PixelButton } from "@/components/marketing/pixel-button";
import { AGENTS, AgentAvatar } from "@/components/marketing/agent-avatar";
import { mainNav, solutionsColumns } from "@/lib/navigation";

type MenuKey = "produit" | "solutions" | null;

/**
 * Header v5 — barre pastille flottante (validée) + méga menus
 * redessinés : panneaux arrondis animés, pastilles d'icônes dessinées,
 * agents avec avatars, carte de mise en avant en dégradé.
 */

/* Pictos dessinés (currentColor) — jamais d'icônes génériques ×6 */
const GLYPHS = {
  overview: (
    <svg viewBox="0 0 20 20" className="size-5" aria-hidden="true">
      <path d="M2 10s3-5.5 8-5.5S18 10 18 10s-3 5.5-8 5.5S2 10 2 10Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="10" cy="10" r="2.4" fill="currentColor" />
    </svg>
  ),
  customer: (
    <svg viewBox="0 0 20 20" className="size-5" aria-hidden="true">
      <rect x="2.5" y="3.5" width="15" height="13" rx="2.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="7.5" cy="9" r="1.8" fill="currentColor" />
      <path d="M11.5 8h4M11.5 11h3M5 14c.6-1.4 1.5-2 2.5-2s1.9.6 2.5 2" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  ),
  channels: (
    <svg viewBox="0 0 20 20" className="size-5" aria-hidden="true">
      <path d="M3 5h11v7H7l-3 2.5V5Z" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M16.5 8.5v5H14l-1 1" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  ),
  analytics: (
    <svg viewBox="0 0 20 20" className="size-5" aria-hidden="true">
      <path d="M3.5 16.5v-6M8 16.5V7M12.5 16.5v-4M17 16.5V4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  ),
  mobile: (
    <svg viewBox="0 0 20 20" className="size-5" aria-hidden="true">
      <rect x="6" y="2.5" width="8" height="15" rx="2" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <path d="M9 15h2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  ),
  luxe: (
    <svg viewBox="0 0 20 20" className="size-5" aria-hidden="true">
      <path d="M10 2.5l5 4.5-5 10.5L5 7z" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      <path d="M5 7h10" stroke="currentColor" strokeWidth="1" />
    </svg>
  ),
  beaute: (
    <svg viewBox="0 0 20 20" className="size-5" aria-hidden="true">
      {[0, 72, 144, 216, 288].map((a) => (
        <ellipse key={a} cx="10" cy="6.5" rx="2.1" ry="3.6" fill="currentColor" opacity="0.55" transform={`rotate(${a} 10 10)`} />
      ))}
    </svg>
  ),
  mode: (
    <svg viewBox="0 0 20 20" className="size-5" aria-hidden="true">
      <path d="M10 4a2 2 0 1 1 2-2M10 4L3 9.5h14L10 4Z" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      <path d="M3 9.5V16h14V9.5" fill="none" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  ),
  retail: (
    <svg viewBox="0 0 20 20" className="size-5" aria-hidden="true">
      <circle cx="10" cy="10" r="7" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <path d="M10 6v4l3 2" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
};

const PRODUCT_LINKS = [
  { label: "Overview", href: "/produit", desc: "The platform at a glance", glyph: GLYPHS.overview },
  { label: "Single customer view", href: "/produit/vue-client", desc: "All your customer data, unified", glyph: GLYPHS.customer },
  { label: "Channels", href: "/produit/canaux", desc: "WhatsApp, SMS, WeChat, email", glyph: GLYPHS.channels },
  { label: "Analytics & attribution", href: "/produit/analytics", desc: "Revenue proven, not estimated", glyph: GLYPHS.analytics },
  { label: "Mobile app", href: "/produit/application-mobile", desc: "Your advisors' everyday tool", glyph: GLYPHS.mobile },
];

const SOLUTION_GLYPHS: Record<string, React.ReactNode> = {
  "/solutions/luxe": GLYPHS.luxe,
  "/solutions/beaute-bien-etre": GLYPHS.beaute,
  "/solutions/mode-dtc": GLYPHS.mode,
  "/solutions/retail-specialise": GLYPHS.retail,
};

export function SiteHeader() {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState<MenuKey>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setOpenMenu(null);
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.documentElement.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenMenu(null);
        setMobileOpen(false);
      }
    };
    const onClick = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setOpenMenu(null);
      }
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, []);

  const scheduleClose = useCallback(() => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpenMenu(null), 180);
  }, []);

  const cancelClose = useCallback(() => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  }, []);

  return (
    <header ref={headerRef} className="fixed inset-x-0 top-0 z-50">
      <div className="relative mx-auto max-w-6xl rounded-b-3xl bg-white shadow-[0_8px_30px_rgba(6,51,90,0.08)]">
        <div className="flex h-16 items-center justify-between gap-6 px-5 sm:px-8">
          <Logo height={24} />

          {/* Desktop navigation */}
          <nav aria-label="Main navigation" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {(["produit", "solutions"] as const).map((key) => (
                <li
                  key={key}
                  onMouseEnter={() => {
                    cancelClose();
                    setOpenMenu(key);
                  }}
                  onMouseLeave={scheduleClose}
                >
                  <button
                    type="button"
                    aria-expanded={openMenu === key}
                    aria-haspopup="true"
                    onClick={() => setOpenMenu(openMenu === key ? null : key)}
                    className={cn(
                      "flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium transition-colors",
                      openMenu === key
                        ? "bg-mist-100 text-abyss-900"
                        : "text-slate-600 hover:bg-mist-100 hover:text-abyss-900"
                    )}
                  >
                    {key === "produit" ? "Product" : "Solutions"}
                    <svg
                      viewBox="0 0 12 12"
                      aria-hidden="true"
                      className={cn("size-3 transition-transform", openMenu === key && "rotate-180")}
                    >
                      <path d="M2.5 4.5L6 8l3.5-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </li>
              ))}
              {mainNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="block rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-mist-100 hover:text-abyss-900"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="hidden items-center gap-4 lg:flex">
            <Link
              href="/connexion"
              className="text-sm font-medium text-slate-600 transition-colors hover:text-abyss-900"
            >
              Log in
            </Link>
            <PixelButton href="/essai" size="sm">
              Start for free
            </PixelButton>
          </div>

          {/* Mobile trigger */}
          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            aria-expanded={mobileOpen}
            aria-controls="menu-mobile"
            className="flex size-10 items-center justify-center rounded-full text-abyss-900 hover:bg-mist-100 lg:hidden"
          >
            <span className="sr-only">{mobileOpen ? "Close menu" : "Open menu"}</span>
            <svg viewBox="0 0 24 24" className="size-6" aria-hidden="true">
              {mobileOpen ? (
                <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
              ) : (
                <path d="M3 7h18M3 12h18M3 17h12" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>

        {/* Méga menus — panneaux centrés sous la barre */}
        {openMenu ? (
          <div
            onMouseEnter={cancelClose}
            onMouseLeave={scheduleClose}
            className="absolute left-1/2 top-full hidden -translate-x-1/2 pt-3 lg:block"
          >
            <div className="animate-in fade-in slide-in-from-top-2 rounded-[1.75rem] bg-white p-6 shadow-[0_30px_90px_rgba(6,51,90,0.18)] ring-1 ring-abyss-900/5 duration-200">
              {openMenu === "produit" ? <ProductPanel /> : <SolutionsPanel />}
            </div>
          </div>
        ) : null}
      </div>

      {/* Mobile menu */}
      {mobileOpen ? <MobileNav /> : null}
    </header>
  );
}

/* ————— Panneau Product : plateforme à pictos · agents · carte ————— */

function ProductPanel() {
  return (
    <div className="grid w-[880px] grid-cols-[1.2fr_1.05fr_240px] gap-8">
      <div>
        <p className="px-3 pb-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-400">
          Platform
        </p>
        <ul className="space-y-0.5">
          {PRODUCT_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="group flex items-center gap-3.5 rounded-2xl p-3 transition-colors hover:bg-mist-100"
              >
                <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-mist-100 text-brand-600 transition-colors group-hover:bg-white">
                  {link.glyph}
                </span>
                <span className="min-w-0">
                  <span className="block whitespace-nowrap text-sm font-semibold text-abyss-950">
                    {link.label}
                  </span>
                  <span className="block truncate text-[12px] text-slate-600">{link.desc}</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <p className="px-3 pb-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-400">
          The 5 agents
        </p>
        <ul className="space-y-0.5">
          {AGENTS.map((agent) => (
            <li key={agent.slug}>
              <Link
                href={agent.href}
                className="group flex items-center gap-3 rounded-2xl p-2.5 transition-colors hover:bg-mist-100"
              >
                <AgentAvatar
                  variant={agent.variant}
                  color={agent.color}
                  className="size-9 rounded-full"
                />
                <span className="min-w-0">
                  <span className="block text-sm font-semibold text-abyss-950">
                    {agent.name}
                  </span>
                  <span className="block truncate text-[12px] text-slate-600">
                    {agent.role}
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Carte de mise en avant */}
      <Link
        href="/produit/agents"
        className="group relative flex flex-col justify-between overflow-hidden rounded-2xl bg-gradient-to-br from-sky-300 via-mist-200 to-mist-100 p-5"
      >
        <span
          aria-hidden="true"
          className="absolute -right-8 -top-8 size-28 rounded-full border border-abyss-900/10"
        />
        <span
          aria-hidden="true"
          className="absolute -right-2 -top-2 size-14 rounded-full border border-abyss-900/10"
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/brand/Eyeconic_Logo_Icon.svg" alt="" className="size-9" />
        <span>
          <span className="block text-base font-bold leading-snug tracking-tight text-abyss-950">
            See. Act.
            <br />
            Prove.
          </span>
          <span className="mt-1.5 block text-[12px] leading-snug text-abyss-950/70">
            Five AI agents, working while you sell.
          </span>
          <span className="mt-3 inline-flex items-center gap-1.5 text-[13px] font-semibold text-abyss-950">
            Meet the agents
            <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">→</span>
          </span>
        </span>
      </Link>
    </div>
  );
}

/* ————— Panneau Solutions : industries en cartes · études de cas ————— */

function SolutionsPanel() {
  const secteurs = solutionsColumns[0].links;
  return (
    <div className="grid w-[680px] grid-cols-[1fr_230px] gap-8">
      <div>
        <p className="px-3 pb-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-400">
          By industry
        </p>
        <ul className="grid grid-cols-2 gap-2">
          {secteurs.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="group flex h-full items-start gap-3.5 rounded-2xl p-3 transition-colors hover:bg-mist-100"
              >
                <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-mist-100 text-brand-600 transition-colors group-hover:bg-white">
                  {SOLUTION_GLYPHS[link.href]}
                </span>
                <span>
                  <span className="block text-sm font-semibold text-abyss-950">
                    {link.label}
                  </span>
                  <span className="mt-0.5 block text-[12px] leading-snug text-slate-600">
                    {link.description}
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Carte études de cas */}
      <Link
        href="/clients"
        className="group flex flex-col justify-between rounded-2xl bg-abyss-950 p-5"
      >
        <span className="flex -space-x-2">
          {["claire", "marc", "sofia"].map((who) => (
            /* eslint-disable-next-line @next/next/no-img-element */
            <img
              key={who}
              src={`/avatars/${who}.jpg`}
              alt=""
              className="size-9 rounded-full object-cover ring-2 ring-abyss-950"
            />
          ))}
        </span>
        <span>
          <span className="block text-base font-bold leading-snug tracking-tight text-paper">
            Case studies
          </span>
          <span className="mt-1.5 block text-[12px] leading-snug text-sky-300">
            How brands put their customer data to work.
          </span>
          <span className="mt-3 inline-flex items-center gap-1.5 text-[13px] font-semibold text-brand-400">
            Read the stories
            <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">→</span>
          </span>
        </span>
      </Link>
    </div>
  );
}

function MobileNav() {
  return (
    <div
      id="menu-mobile"
      className="fixed inset-x-3 top-20 z-40 max-h-[calc(100svh-6rem)] overflow-y-auto rounded-3xl bg-white p-6 shadow-[0_24px_70px_rgba(6,51,90,0.2)] lg:hidden"
    >
      <nav aria-label="Mobile navigation">
        <p className="px-2 pb-2 text-caption font-medium uppercase tracking-wide text-slate-400">
          Product
        </p>
        <ul>
          {PRODUCT_LINKS.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="flex items-center gap-3 rounded-xl px-2 py-2 text-body font-medium text-abyss-900 hover:bg-mist-100">
                <span className="flex size-8 items-center justify-center rounded-lg bg-mist-100 text-brand-600 [&_svg]:size-4">
                  {link.glyph}
                </span>
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link href="/produit/agents" className="block rounded-xl px-2 py-2 text-body font-medium text-abyss-900 hover:bg-mist-100">
              The 5 agents
            </Link>
          </li>
        </ul>
        <p className="px-2 pb-2 pt-4 text-caption font-medium uppercase tracking-wide text-slate-400">
          Solutions
        </p>
        <ul>
          {solutionsColumns[0].links.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="block rounded-xl px-2 py-2 text-body font-medium text-abyss-900 hover:bg-mist-100">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <ul className="mt-2 border-t border-abyss-900/10 pt-2">
          {mainNav.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="block rounded-xl px-2 py-2 text-body font-medium text-abyss-900 hover:bg-mist-100">
                {item.label}
              </Link>
            </li>
          ))}
          <li>
            <Link href="/connexion" className="block rounded-xl px-2 py-2 text-body font-medium text-slate-600 hover:bg-mist-100">
              Log in
            </Link>
          </li>
        </ul>
        <div className="mt-4">
          <PixelButton href="/essai" className="w-full">
            Start for free
          </PixelButton>
        </div>
      </nav>
    </div>
  );
}
