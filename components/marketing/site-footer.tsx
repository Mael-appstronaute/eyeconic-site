import Link from "next/link";
import { Logo } from "@/components/marketing/logo";
import { BlurArt } from "@/components/marketing/blur-art";

const COLUMNS = [
  {
    title: "Menu",
    links: [
      { label: "Product", href: "/produit" },
      { label: "Pricing", href: "/tarifs" },
      { label: "Case studies", href: "/clients" },
      { label: "Integrations", href: "/integrations" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/a-propos" },
      { label: "Contact", href: "/contact" },
      { label: "Security", href: "/securite" },
      { label: "Resources", href: "/ressources" },
    ],
  },
  {
    title: "Social",
    links: [
      { label: "LinkedIn", href: "https://www.linkedin.com/" },
      { label: "Instagram", href: "https://www.instagram.com/" },
    ],
  },
];

const LEGAL = [
  { label: "Legal notice", href: "/mentions-legales" },
  { label: "Privacy", href: "/confidentialite" },
  { label: "Terms", href: "/cgu" },
];

/**
 * Footer v4 — grand conteneur bleu doux arrondi (référence template) :
 * carte CTA blanche flottante sur fond flouté, puis colonnes de liens.
 */
export function SiteFooter() {
  return (
    <footer className="bg-paper px-3 pb-3 pt-20 sm:px-4 sm:pb-4">
      <div className="relative mx-auto max-w-[1400px] rounded-[2.5rem] bg-mist-200">
        {/* Carte CTA flottante */}
        <div className="mx-auto max-w-3xl -translate-y-14 px-4">
          <div className="relative overflow-hidden rounded-3xl bg-white p-10 text-center shadow-[0_30px_80px_rgba(6,51,90,0.18)] sm:p-14">
            <BlurArt className="opacity-70" />
            <div className="relative">
              <h2 className="mx-auto max-w-lg text-4xl font-semibold tracking-tight text-abyss-950 sm:text-5xl">
                See your own data during the demo
              </h2>
              <form
                action="/essai"
                method="GET"
                className="mx-auto mt-8 flex max-w-md items-center gap-1.5 rounded-full bg-white p-1.5 shadow-[0_8px_30px_rgba(6,51,90,0.12)] ring-1 ring-abyss-900/10"
              >
                <label htmlFor="footer-cta-email" className="sr-only">
                  Work email
                </label>
                <input
                  id="footer-cta-email"
                  name="email"
                  type="email"
                  required
                  placeholder="Enter your work email"
                  autoComplete="email"
                  className="h-10 w-full rounded-full bg-transparent px-4 text-sm text-abyss-900 placeholder:text-slate-400 focus:outline-none"
                />
                <button
                  type="submit"
                  className="flex h-10 shrink-0 items-center gap-2 rounded-full bg-abyss-950 px-5 text-sm font-medium text-paper transition-colors hover:bg-abyss-900"
                >
                  Start free
                  <span aria-hidden="true">→</span>
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Colonnes */}
        <div className="px-8 pb-10 sm:px-14">
          <div className="flex flex-col gap-12 lg:flex-row lg:justify-between">
            <Logo height={26} linked={false} />
            <nav
              aria-label="Footer navigation"
              className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:gap-20"
            >
              {COLUMNS.map((col) => (
                <div key={col.title}>
                  <h3 className="text-caption font-medium uppercase tracking-wide text-brand-700/70">
                    {col.title}
                  </h3>
                  <ul className="mt-4 space-y-2.5">
                    {col.links.map((link) => (
                      <li key={link.label}>
                        <Link
                          href={link.href}
                          className="text-sm font-medium text-abyss-950/80 transition-colors hover:text-abyss-950"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </nav>
          </div>

          <div className="mt-12 flex flex-col items-center gap-3 border-t border-abyss-900/10 pt-6 text-caption text-abyss-950/60 sm:flex-row sm:justify-between">
            <p>© 2026 Eyeconic. All rights reserved.</p>
            <ul className="flex items-center gap-5">
              {LEGAL.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="transition-colors hover:text-abyss-950">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
