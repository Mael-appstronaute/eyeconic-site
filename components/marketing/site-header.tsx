"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/marketing/logo";
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

type MenuKey = "produit" | "solutions" | null;

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<MenuKey>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const navRef = useRef<HTMLDivElement>(null);

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
        "fixed inset-x-0 top-0 z-50 bg-ink transition-colors duration-100",
        scrolled ? "border-b-2 border-paper/14" : "border-b-2 border-transparent"
      )}
    >
      <ScrollProgress />
      <div
        ref={navRef}
        className="container-site flex h-16 items-center justify-between gap-6"
      >
        <Logo variant="white" height={26} />

        {/* Navigation desktop */}
        <nav aria-label="Navigation principale" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            <MegaMenuItem
              label="Produit"
              menuKey="produit"
              columns={produitColumns}
              highlight={produitHighlight}
              open={openMenu === "produit"}
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
              setOpen={setOpenMenu}
              scheduleClose={scheduleClose}
              cancelClose={cancelClose}
            />
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="px-3 py-2 text-sm font-medium text-paper/80 transition-colors hover:text-paper"
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
            className="px-3 py-2 text-sm font-medium text-paper/80 transition-colors hover:text-paper"
          >
            Connexion
          </Link>
          <Link
            href="/demo"
            className="border-2 border-paper/25 px-4 py-2 text-sm font-medium text-paper transition-colors hover:border-paper/60"
          >
            Réserver une démo
          </Link>
          {/* Solide papier, pas dégradé : le dégradé reste réservé au CTA
              de section (règle : un seul CTA en dégradé par écran) */}
          <Link
            href="/essai"
            className="notch-tr-bl bg-paper px-4 py-2.5 text-sm font-medium text-ink"
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
          className="flex size-10 items-center justify-center text-paper lg:hidden"
        >
          <span className="sr-only">
            {mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
          </span>
          <svg viewBox="0 0 24 24" className="size-6" aria-hidden="true">
            {mobileOpen ? (
              <path
                d="M6 6l12 12M18 6L6 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="square"
              />
            ) : (
              <path
                d="M3 7h18M3 12h18M3 17h12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="square"
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
  setOpen,
  scheduleClose,
  cancelClose,
}: {
  label: string;
  menuKey: Exclude<MenuKey, null>;
  columns: MegaMenuColumn[];
  highlight: NavLink;
  open: boolean;
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
          "flex items-center gap-1.5 px-3 py-2 text-sm font-medium transition-colors",
          open ? "text-paper" : "text-paper/80 hover:text-paper"
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

      {open ? (
        <div
          onMouseEnter={cancelClose}
          onMouseLeave={scheduleClose}
          className="absolute left-0 top-full w-[720px] pt-3"
        >
          <div className="grid grid-cols-3 gap-8 border-2 border-paper/14 bg-abyss-950 p-8 shadow-hard">
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
                        className="group -mx-2 block px-2 py-2 transition-colors hover:bg-abyss-900"
                      >
                        <span className="flex items-center gap-2 text-sm font-medium text-paper">
                          <span
                            aria-hidden="true"
                            className="size-1.5 bg-brand-500 opacity-0 transition-opacity group-hover:opacity-100"
                          />
                          {link.label}
                        </span>
                        {link.description ? (
                          <span className="mt-0.5 block pl-3.5 text-caption text-sky-300">
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
              className="group notch-tr flex flex-col justify-between border-2 border-paper/14 bg-abyss-900 p-5 transition-colors hover:border-paper/30"
            >
              <span aria-hidden="true" className="size-2 bg-gradient-brand" />
              <div>
                <span className="block font-medium text-paper">{highlight.label}</span>
                <span className="mt-1.5 block text-caption leading-relaxed text-sky-300">
                  {highlight.description}
                </span>
                <span className="data-label mt-3 inline-block text-caption font-medium text-brand-400">
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
      className="fixed inset-0 top-16 z-40 overflow-y-auto bg-ink lg:hidden"
    >
      <nav aria-label="Navigation mobile" className="container-site py-8">
        <ul className="space-y-6">
          {sections.map((section) => (
            <li key={section.title}>
              <p className="eyebrow mb-3 text-sky-500">{section.title}</p>
              <ul className="space-y-1 border-l-2 border-paper/14 pl-4">
                {section.columns.flatMap((col) =>
                  col.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="block py-2 text-body-l text-paper"
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
                className="block py-1 font-display text-2xl font-semibold uppercase text-paper"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-10 space-y-3 border-t-2 border-paper/14 pt-8">
          <Link
            href="/essai"
            className="notch-tr-bl block bg-paper px-5 py-3 text-center font-medium text-ink"
          >
            Essai gratuit
          </Link>
          <Link
            href="/demo"
            className="block border-2 border-paper/25 px-5 py-3 text-center font-medium text-paper"
          >
            Réserver une démo
          </Link>
          <Link
            href="/connexion"
            className="block px-5 py-3 text-center font-medium text-paper/80"
          >
            Connexion
          </Link>
        </div>
      </nav>
    </div>
  );
}
