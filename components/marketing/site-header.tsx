"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/marketing/logo";
import { Spark } from "@/components/marketing/spark";
import { ScrollProgress } from "@/components/marketing/scroll-progress";
import {
  mainNav,
  produitColumns,
  produitHighlight,
  solutionsColumns,
  solutionsHighlight,
  type MegaMenuColumn,
  type NavLink,
} from "@/lib/navigation";

/** Pages dont le hero est sur dégradé d'ambiance : header blanc tant qu'il est transparent. */
const DARK_HERO_ROUTES = ["/"];

type MenuKey = "produit" | "solutions" | null;

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<MenuKey>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const navRef = useRef<HTMLDivElement>(null);

  const onDarkHero = DARK_HERO_ROUTES.includes(pathname) && !scrolled && !mobileOpen;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
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
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled
          ? "bg-paper/85 backdrop-blur-md border-b border-abyss-900/10"
          : "bg-transparent"
      )}
    >
      <ScrollProgress />
      <div
        ref={navRef}
        className="container-site flex h-16 items-center justify-between gap-6"
      >
        <Logo variant={onDarkHero ? "white" : "default"} height={26} />

        {/* Navigation desktop */}
        <nav aria-label="Navigation principale" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            <MegaMenuItem
              label="Produit"
              menuKey="produit"
              columns={produitColumns}
              highlight={produitHighlight}
              open={openMenu === "produit"}
              onDarkHero={onDarkHero}
              setOpen={setOpenMenu}
              scheduleClose={scheduleClose}
              cancelClose={cancelClose}
            />
            <MegaMenuItem
              label="Solutions"
              menuKey="solutions"
              columns={solutionsColumns}
              highlight={solutionsHighlight}
              open={openMenu === "solutions"}
              onDarkHero={onDarkHero}
              setOpen={setOpenMenu}
              scheduleClose={scheduleClose}
              cancelClose={cancelClose}
            />
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "rounded-sm px-3 py-2 text-sm font-medium transition-colors",
                    onDarkHero
                      ? "text-paper/90 hover:text-paper"
                      : "text-slate-600 hover:text-abyss-900"
                  )}
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
            className={cn(
              "rounded-sm px-3 py-2 text-sm font-medium transition-colors",
              onDarkHero
                ? "text-paper/90 hover:text-paper"
                : "text-slate-600 hover:text-abyss-900"
            )}
          >
            Connexion
          </Link>
          <Link
            href="/demo"
            className={cn(
              "rounded-md border px-4 py-2 text-sm font-medium transition-colors",
              onDarkHero
                ? "border-paper/40 text-paper hover:border-paper/80"
                : "border-abyss-900/20 text-abyss-900 hover:border-abyss-900/40"
            )}
          >
            Réserver une démo
          </Link>
          <Link
            href="/essai"
            className="bg-gradient-brand rounded-md px-4 py-2 text-sm font-medium text-paper shadow-card transition-shadow hover:shadow-card-hover"
          >
            Essai gratuit
          </Link>
        </div>

        {/* Déclencheur mobile */}
        <button
          type="button"
          onClick={() => setMobileOpen((v) => !v)}
          aria-expanded={mobileOpen}
          aria-controls="menu-mobile"
          className={cn(
            "flex size-10 items-center justify-center rounded-sm lg:hidden",
            onDarkHero ? "text-paper" : "text-abyss-900"
          )}
        >
          <span className="sr-only">
            {mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
          </span>
          <svg viewBox="0 0 24 24" className="size-6" aria-hidden="true">
            {mobileOpen ? (
              <path
                d="M6 6l12 12M18 6L6 18"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M3 7h18M3 12h18M3 17h12"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Menu mobile plein écran */}
      {mobileOpen ? <MobileNav /> : null}
    </header>
  );
}

function MegaMenuItem({
  label,
  menuKey,
  columns,
  highlight,
  open,
  onDarkHero,
  setOpen,
  scheduleClose,
  cancelClose,
}: {
  label: string;
  menuKey: Exclude<MenuKey, null>;
  columns: MegaMenuColumn[];
  highlight: NavLink;
  open: boolean;
  onDarkHero: boolean;
  setOpen: (key: MenuKey) => void;
  scheduleClose: () => void;
  cancelClose: () => void;
}) {
  return (
    <li
      className="relative"
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
          "flex items-center gap-1.5 rounded-sm px-3 py-2 text-sm font-medium transition-colors",
          onDarkHero
            ? "text-paper/90 hover:text-paper"
            : "text-slate-600 hover:text-abyss-900",
          open && (onDarkHero ? "text-paper" : "text-abyss-900")
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
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {open ? (
        <div
          onMouseEnter={cancelClose}
          onMouseLeave={scheduleClose}
          className="absolute left-0 top-full w-[720px] pt-3"
        >
          <div className="grid grid-cols-3 gap-8 rounded-lg border border-abyss-900/10 bg-white p-8 shadow-card">
            {columns.map((col) => (
              <div key={col.title} className={columns.length === 1 ? "col-span-2" : ""}>
                <p className="eyebrow mb-4 text-slate-400">{col.title}</p>
                <ul
                  className={cn(
                    "space-y-1",
                    columns.length === 1 && "grid grid-cols-2 gap-x-8 space-y-0"
                  )}
                >
                  {col.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="group block rounded-sm px-2 py-2 -mx-2 transition-colors hover:bg-mist-100"
                      >
                        <span className="flex items-center gap-2 text-sm font-medium text-abyss-900">
                          <Spark className="size-2 text-brand-500 opacity-0 transition-opacity group-hover:opacity-100" />
                          {link.label}
                        </span>
                        {link.description ? (
                          <span className="mt-0.5 block pl-4 text-caption text-slate-600">
                            {link.description}
                          </span>
                        ) : null}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <Link
              href={highlight.href}
              className="group flex flex-col justify-between rounded-md bg-abyss-900 p-5 transition-shadow hover:shadow-card-hover"
            >
              <Spark gradient className="size-4" />
              <div>
                <span className="block font-medium text-paper">{highlight.label}</span>
                <span className="mt-1.5 block text-caption leading-relaxed text-sky-300">
                  {highlight.description}
                </span>
                <span className="mt-3 inline-block text-caption font-medium text-brand-400 transition-transform group-hover:translate-x-0.5">
                  Découvrir →
                </span>
              </div>
            </Link>
          </div>
        </div>
      ) : null}
    </li>
  );
}

function MobileNav() {
  const sections = [
    { title: "Produit", columns: produitColumns },
    { title: "Solutions", columns: solutionsColumns },
  ];
  return (
    <div
      id="menu-mobile"
      className="fixed inset-0 top-16 z-40 overflow-y-auto bg-paper lg:hidden"
    >
      <nav aria-label="Navigation mobile" className="container-site py-8">
        <ul className="space-y-6">
          {sections.map((section) => (
            <li key={section.title}>
              <p className="eyebrow mb-3 text-brand-600">{section.title}</p>
              <ul className="space-y-1 border-l border-abyss-900/10 pl-4">
                {section.columns.flatMap((col) =>
                  col.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="block py-2 text-body-l text-abyss-900"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))
                )}
              </ul>
            </li>
          ))}
          {mainNav.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="block py-1 font-display text-2xl font-semibold text-abyss-900"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-10 space-y-3 border-t border-abyss-900/10 pt-8">
          <Link
            href="/essai"
            className="bg-gradient-brand block rounded-md px-5 py-3 text-center font-medium text-paper"
          >
            Essai gratuit
          </Link>
          <Link
            href="/demo"
            className="block rounded-md border border-abyss-900/20 px-5 py-3 text-center font-medium text-abyss-900"
          >
            Réserver une démo
          </Link>
          <Link
            href="/connexion"
            className="block rounded-md px-5 py-3 text-center font-medium text-slate-600"
          >
            Connexion
          </Link>
        </div>
      </nav>
    </div>
  );
}
