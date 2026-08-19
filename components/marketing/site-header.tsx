"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/marketing/logo";
import { mainNav, produitColumns, solutionsColumns } from "@/lib/navigation";

type MenuKey = "produit" | "solutions" | null;

/**
 * Header v4 « SaaS airy » — barre pastille flottante (référence
 * rbp-saas-template) : logo, liens à dropdowns arrondis, Log in +
 * bouton scindé « Start for free » avec carré fléché accolé.
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
    <header ref={headerRef} className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-6xl rounded-b-3xl bg-white shadow-[0_8px_30px_rgba(6,51,90,0.08)]">
        <div className="flex h-16 items-center justify-between gap-6 px-5 sm:px-8">
          <Logo height={24} />

          {/* Desktop navigation */}
          <nav aria-label="Main navigation" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              <Dropdown
                label="Product"
                menuKey="produit"
                open={openMenu === "produit"}
                setOpen={setOpenMenu}
                scheduleClose={scheduleClose}
                cancelClose={cancelClose}
                links={[
                  ...produitColumns[0].links,
                  { label: "The 5 agents", href: "/produit/agents" },
                ]}
              />
              <Dropdown
                label="Solutions"
                menuKey="solutions"
                open={openMenu === "solutions"}
                setOpen={setOpenMenu}
                scheduleClose={scheduleClose}
                cancelClose={cancelClose}
                links={solutionsColumns[0].links}
              />
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
            {/* Bouton scindé — pastille sombre + carré fléché brand accolé */}
            <Link href="/essai" className="group flex items-center">
              <span className="rounded-l-full rounded-r-md bg-abyss-950 py-2.5 pl-5 pr-4 text-sm font-medium text-paper transition-colors group-hover:bg-abyss-900">
                Start for free
              </span>
              <span className="ml-0.5 flex size-10 items-center justify-center rounded-l-md rounded-r-full bg-brand-500 text-paper transition-transform group-hover:translate-x-0.5">
                <svg viewBox="0 0 16 16" className="size-3.5" aria-hidden="true">
                  <path d="M4 4h8v8M12 4L4 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" transform="rotate(90 8 8)" />
                </svg>
              </span>
            </Link>
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
      </div>

      {/* Mobile menu */}
      {mobileOpen ? <MobileNav /> : null}
    </header>
  );
}

function Dropdown({
  label,
  menuKey,
  open,
  setOpen,
  scheduleClose,
  cancelClose,
  links,
}: {
  label: string;
  menuKey: Exclude<MenuKey, null>;
  open: boolean;
  setOpen: (key: MenuKey) => void;
  scheduleClose: () => void;
  cancelClose: () => void;
  links: { label: string; href: string }[];
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
          "flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium transition-colors",
          open
            ? "bg-mist-100 text-abyss-900"
            : "text-slate-600 hover:bg-mist-100 hover:text-abyss-900"
        )}
      >
        {label}
        <svg
          viewBox="0 0 12 12"
          aria-hidden="true"
          className={cn("size-3 transition-transform", open && "rotate-180")}
        >
          <path d="M2.5 4.5L6 8l3.5-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {open ? (
        <div
          onMouseEnter={cancelClose}
          onMouseLeave={scheduleClose}
          className="absolute left-0 top-full w-64 pt-3"
        >
          <ul className="rounded-2xl bg-white p-2 shadow-[0_16px_50px_rgba(6,51,90,0.14)]">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block rounded-xl px-4 py-2.5 text-sm font-medium text-abyss-900 transition-colors hover:bg-mist-100"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </li>
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
          {[...produitColumns[0].links, { label: "The 5 agents", href: "/produit/agents" }].map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="block rounded-xl px-2 py-2 text-body font-medium text-abyss-900 hover:bg-mist-100">
                {link.label}
              </Link>
            </li>
          ))}
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
        <Link
          href="/essai"
          className="mt-4 block rounded-full bg-abyss-950 px-5 py-3 text-center text-sm font-medium text-paper"
        >
          Start for free
        </Link>
      </nav>
    </div>
  );
}
