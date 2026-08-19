"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/marketing/logo";
import { ScrollProgress } from "@/components/marketing/scroll-progress";
import { AGENTS, AgentAvatar } from "@/components/marketing/agent-avatar";
import { mainNav, produitColumns, solutionsColumns } from "@/lib/navigation";

type MenuKey = "produit" | "solutions" | null;

/**
 * Header — solid white bar, full-width mega menus below it:
 * descriptive columns, the 5 agents with their avatars,
 * abyss-blue highlight band.
 */
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
    closeTimer.current = setTimeout(() => setOpenMenu(null), 160);
  }, []);

  const cancelClose = useCallback(() => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  }, []);

  return (
    <header
      ref={headerRef}
      className="fixed inset-x-0 top-0 z-50 border-b-2 border-abyss-900/10 bg-white"
    >
      <ScrollProgress />
      <div className="container-site flex h-16 items-center gap-8">
        <Logo height={26} />

        {/* Desktop navigation */}
        <nav aria-label="Main navigation" className="hidden flex-1 lg:block">
          <ul className="flex items-center gap-1">
            <NavTrigger
              label="Product"
              menuKey="produit"
              open={openMenu === "produit"}
              setOpen={setOpenMenu}
              scheduleClose={scheduleClose}
              cancelClose={cancelClose}
            />
            <NavTrigger
              label="Solutions"
              menuKey="solutions"
              open={openMenu === "solutions"}
              setOpen={setOpenMenu}
              scheduleClose={scheduleClose}
              cancelClose={cancelClose}
            />
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:text-abyss-900"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/connexion"
            className="px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:text-abyss-900"
          >
            Log in
          </Link>
          <Link
            href="/demo"
            className="border-2 border-abyss-900/25 px-4 py-2 text-sm font-medium text-abyss-900 transition-colors hover:border-abyss-900/50"
          >
            Book a demo
          </Link>
          <Link
            href="/essai"
            className="bg-gradient-brand notch-tr-bl px-4 py-2.5 text-sm font-medium text-paper"
          >
            Start for free
          </Link>
        </div>

        {/* Mobile trigger */}
        <button
          type="button"
          onClick={() => setMobileOpen((v) => !v)}
          aria-expanded={mobileOpen}
          aria-controls="menu-mobile"
          className="ml-auto flex size-10 items-center justify-center text-abyss-900 lg:hidden"
        >
          <span className="sr-only">{mobileOpen ? "Close menu" : "Open menu"}</span>
          <svg viewBox="0 0 24 24" className="size-6" aria-hidden="true">
            {mobileOpen ? (
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="square" />
            ) : (
              <path d="M3 7h18M3 12h18M3 17h12" stroke="currentColor" strokeWidth="2" strokeLinecap="square" />
            )}
          </svg>
        </button>
      </div>

      {/* Mega menus — full-width panels below the bar */}
      {openMenu ? (
        <div
          onMouseEnter={cancelClose}
          onMouseLeave={scheduleClose}
          className="absolute inset-x-0 top-full hidden border-b-2 border-abyss-900/10 bg-white shadow-card lg:block"
        >
          {openMenu === "produit" ? <ProduitPanel /> : <SolutionsPanel />}
        </div>
      ) : null}

      {/* Full-screen mobile menu */}
      {mobileOpen ? <MobileNav /> : null}
    </header>
  );
}

function NavTrigger({
  label,
  menuKey,
  open,
  setOpen,
  scheduleClose,
  cancelClose,
}: {
  label: string;
  menuKey: Exclude<MenuKey, null>;
  open: boolean;
  setOpen: (key: MenuKey) => void;
  scheduleClose: () => void;
  cancelClose: () => void;
}) {
  return (
    <li
      onMouseEnter={() => {
        cancelClose();
        setOpen(menuKey);
      }}
      onMouseLeave={scheduleClose}
    >
      <button
        type="button"
        aria-expanded={open}
        aria-haspopup="true"
        onClick={() => setOpen(open ? null : menuKey)}
        className={cn(
          "flex items-center gap-1.5 border-b-2 px-3 py-2 text-sm font-medium transition-colors",
          open
            ? "border-brand-500 text-abyss-900"
            : "border-transparent text-slate-600 hover:text-abyss-900"
        )}
      >
        {label}
        <svg
          viewBox="0 0 12 12"
          aria-hidden="true"
          className={cn("size-3 transition-transform", open && "rotate-180")}
        >
          <path
            d="M2.5 4.5L6 8l3.5-3.5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="square"
          />
        </svg>
      </button>
    </li>
  );
}

/* ————— Product panel: compact platform list · 5 agent tiles ·
   full-width highlight band ————— */

function ProduitPanel() {
  const plateforme = produitColumns[0];
  return (
    <div className="container-site py-8">
      <div className="grid grid-cols-[minmax(0,1fr)_minmax(0,2.5fr)] gap-12">
        <div className="border-r-2 border-abyss-900/10 pr-10">
          <p className="eyebrow mb-4 text-slate-400">{plateforme.title}</p>
          <ul className="-mx-3">
            {plateforme.links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="group flex items-center justify-between gap-3 px-3 py-2.5 text-sm font-medium text-abyss-900 transition-colors hover:bg-mist-100"
                >
                  {link.label}
                  <span
                    aria-hidden="true"
                    className="text-brand-500 opacity-0 transition-opacity group-hover:opacity-100"
                  >
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow mb-4 text-slate-400">The 5 agents</p>
          <ul className="grid grid-cols-5 gap-3">
            {AGENTS.map((agent) => (
              <li key={agent.name}>
                <Link
                  href={agent.href}
                  className="flex h-full flex-col items-center gap-2.5 border-2 border-abyss-900/10 px-3 py-4 text-center transition-colors hover:border-brand-500/50 hover:bg-mist-100"
                >
                  <AgentAvatar
                    variant={agent.variant}
                    color={agent.color}
                    className="size-11"
                  />
                  <span className="text-sm font-medium text-abyss-900">
                    {agent.name}
                  </span>
                  <span className="text-[11px] leading-snug text-slate-600">
                    {agent.role}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Highlight band */}
      <Link
        href="/produit"
        className="dark group mt-8 flex items-center justify-between gap-6 bg-abyss-900 px-6 py-4 transition-colors hover:bg-abyss-950"
      >
        <span className="flex items-baseline gap-4">
          <span className="font-display text-sm font-semibold uppercase tracking-wide text-paper">
            See. Act. Prove.
          </span>
          <span className="hidden text-caption text-sky-300 xl:inline">
            Customer data on one side, in-store execution on the other — in a
            single tool.
          </span>
        </span>
        <span className="shrink-0 text-sm font-medium text-brand-400 transition-transform group-hover:translate-x-0.5">
          Explore the platform →
        </span>
      </Link>
    </div>
  );
}

/* ————— Solutions panel: industry cards · highlight ————— */

function SolutionsPanel() {
  const secteurs = solutionsColumns[0];
  return (
    <div className="container-site grid grid-cols-[minmax(0,2fr)_minmax(0,1fr)] gap-10 py-8">
      <div>
        <p className="eyebrow mb-4 text-slate-400">{secteurs.title}</p>
        <ul className="grid grid-cols-2 gap-3">
          {secteurs.links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="block border-2 border-abyss-900/10 px-4 py-3.5 transition-colors hover:border-brand-500/50 hover:bg-mist-100"
              >
                <span className="block text-sm font-medium text-abyss-900">
                  {link.label}
                </span>
                {link.description ? (
                  <span className="mt-0.5 block text-caption text-slate-600">
                    {link.description}
                  </span>
                ) : null}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <Link
        href="/clients"
        className="dark group flex flex-col justify-between bg-abyss-900 p-6 transition-colors hover:bg-abyss-950"
      >
        <p className="eyebrow text-sky-500">Case studies</p>
        <div>
          <span className="font-display block text-xl font-semibold text-paper">
            Brands like yours
          </span>
          <span className="mt-2 block text-caption leading-relaxed text-sky-300">
            How they put their customer data to work, store by store.
          </span>
          <span className="mt-4 inline-block text-sm font-medium text-brand-400 transition-transform group-hover:translate-x-0.5">
            Read the case studies →
          </span>
        </div>
      </Link>
    </div>
  );
}

function MobileNav() {
  return (
    <div
      id="menu-mobile"
      className="fixed inset-0 top-16 z-40 overflow-y-auto border-t-2 border-abyss-900/10 bg-white lg:hidden"
    >
      <nav aria-label="Mobile navigation" className="container-site py-8">
        <ul className="space-y-8">
          <li>
            <p className="eyebrow mb-3 text-slate-400">Product</p>
            <ul className="space-y-0.5">
              {produitColumns[0].links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="block py-2 text-body-l text-abyss-900">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="eyebrow mb-2 mt-5 text-slate-400">The 5 agents</p>
            <ul className="space-y-0.5">
              {AGENTS.map((agent) => (
                <li key={agent.name}>
                  <Link
                    href={agent.href}
                    className="flex items-center gap-3 py-2 text-body-l text-abyss-900"
                  >
                    <AgentAvatar variant={agent.variant} color={agent.color} className="size-7" />
                    {agent.name}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
          <li>
            <p className="eyebrow mb-3 text-slate-400">Solutions</p>
            <ul className="space-y-0.5">
              {solutionsColumns[0].links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="block py-2 text-body-l text-abyss-900">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
          {mainNav.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="font-display block py-1 text-2xl font-semibold text-abyss-900"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-10 space-y-3 border-t-2 border-abyss-900/10 pt-8">
          <Link
            href="/essai"
            className="bg-gradient-brand notch-tr-bl block px-5 py-3 text-center font-medium text-paper"
          >
            Start for free
          </Link>
          <Link
            href="/demo"
            className="block border-2 border-abyss-900/25 px-5 py-3 text-center font-medium text-abyss-900"
          >
            Book a demo
          </Link>
          <Link
            href="/connexion"
            className="block px-5 py-3 text-center font-medium text-slate-600"
          >
            Log in
          </Link>
        </div>
      </nav>
    </div>
  );
}
