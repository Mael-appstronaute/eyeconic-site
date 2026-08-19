import { PixelButton } from "@/components/marketing/pixel-button";

/** Section 11 — CTA final : voir ses propres données pendant la démo. */
export function CtaBanner() {
  return (
    <section className="bg-ink py-20 lg:py-32">
      <div className="container-site">
        <div className="bg-grid-8 notch-tr-bl border-2 border-paper/14 px-6 py-16 text-center lg:px-12 lg:py-20">
          <h2 className="font-display text-display-l mx-auto max-w-3xl text-balance uppercase text-paper">
            Voyez vos propres données pendant la démo.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-body-l text-sky-300">
            Connectez une boutique, importez un export, et regardez ce
            qu&apos;Eyeconic en tire. Sans engagement.
          </p>
          <form
            action="/essai"
            method="GET"
            className="mx-auto mt-10 flex w-full max-w-xl flex-col justify-center gap-3 sm:flex-row"
          >
            <label htmlFor="cta-email" className="sr-only">
              Adresse e-mail professionnelle
            </label>
            <input
              id="cta-email"
              name="email"
              type="email"
              required
              placeholder="prenom@votremarque.com"
              autoComplete="email"
              className="h-12 w-full border-2 border-paper/25 bg-ink px-4 text-sm text-paper placeholder:text-slate-400"
            />
            <PixelButton type="submit" variant="brand" className="shrink-0">
              Démarrer gratuitement
            </PixelButton>
          </form>
          <p className="mt-6">
            <a
              href="/demo"
              className="data-label text-caption uppercase tracking-[0.14em] text-sky-300 underline-offset-4 transition-colors hover:text-paper hover:underline"
            >
              Réserver une démo →
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
