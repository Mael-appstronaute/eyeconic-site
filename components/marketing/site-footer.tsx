import Link from "next/link";
import { Logo } from "@/components/marketing/logo";
import { Spark } from "@/components/marketing/spark";
import { footerColumns, legalLinks } from "@/lib/navigation";

export function SiteFooter() {
  return (
    <footer className="dark bg-abyss-900 text-paper">
      <div className="container-site py-16 lg:py-20">
        {/* Newsletter */}
        <div className="flex flex-col gap-8 border-b border-paper/14 pb-12 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <Logo variant="white" height={30} linked={false} />
            <p className="mt-4 max-w-md text-body text-sky-300">
              Le clienteling qui voit avant les autres. Recevez nos analyses
              retail et CRM, une fois par mois.
            </p>
          </div>
          <form
            className="flex w-full max-w-md gap-2"
            aria-label="Inscription à la newsletter"
          >
            <label htmlFor="footer-email" className="sr-only">
              Adresse e-mail professionnelle
            </label>
            <input
              id="footer-email"
              type="email"
              required
              placeholder="prenom@votremarque.com"
              autoComplete="email"
              className="h-11 w-full rounded-md border border-paper/20 bg-paper/5 px-4 text-sm text-paper placeholder:text-sky-300/60"
            />
            <button
              type="submit"
              className="h-11 shrink-0 rounded-md border border-paper/25 px-4 text-sm font-medium text-paper transition-colors hover:bg-paper/10"
            >
              S&apos;inscrire
            </button>
          </form>
        </div>

        {/* 4 colonnes */}
        <nav
          aria-label="Navigation pied de page"
          className="grid grid-cols-2 gap-x-8 gap-y-10 py-12 sm:grid-cols-2 lg:grid-cols-4"
        >
          {footerColumns.map((col) => (
            <div key={col.title}>
              <p className="eyebrow mb-4 text-sky-500">{col.title}</p>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-paper/80 transition-colors hover:text-paper"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>

        {/* Barre basse */}
        <div className="flex flex-col gap-6 border-t border-paper/14 pt-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-sm border border-paper/20 px-3 py-1.5 text-caption text-paper/80">
              <Spark className="size-2 text-brand-400" />
              Données hébergées en Union européenne
            </span>
            <span className="inline-flex items-center gap-2 rounded-sm border border-paper/20 px-3 py-1.5 text-caption text-paper/80">
              <Spark className="size-2 text-brand-400" />
              RGPD par conception
            </span>
          </div>

          <div className="flex items-center gap-6">
            {/* Sélecteur de langue — EN à venir avec l'i18n [locale] */}
            <div
              className="flex items-center gap-1 text-caption"
              aria-label="Choix de la langue"
            >
              <span
                aria-current="true"
                className="rounded-sm bg-paper/10 px-2 py-1 font-medium text-paper"
              >
                FR
              </span>
              <span
                className="px-2 py-1 text-sky-300/70"
                title="Version anglaise à venir"
              >
                EN
              </span>
            </div>

            <ul className="flex items-center gap-4" aria-label="Réseaux sociaux">
              <li>
                <a
                  href="https://www.linkedin.com/"
                  className="text-paper/70 transition-colors hover:text-paper"
                  aria-label="Eyeconic sur LinkedIn"
                >
                  <svg viewBox="0 0 24 24" className="size-5" fill="currentColor" aria-hidden="true">
                    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/"
                  className="text-paper/70 transition-colors hover:text-paper"
                  aria-label="Eyeconic sur Instagram"
                >
                  <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
                    <rect x="3" y="3" width="18" height="18" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" stroke="none" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-caption text-sky-300/70">
            © 2026 Eyeconic. Tous droits réservés.
          </p>
          <ul className="flex flex-wrap items-center gap-4">
            {legalLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-caption text-sky-300/70 transition-colors hover:text-paper"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
