import Link from "next/link";

/**
 * Placeholder phase 2 — la home complète (14 sections, iris de données)
 * arrive en phase 3. Ce hero valide le header transparent sur chambre noire.
 */
export default function HomePage() {
  return (
    <section className="dark flex min-h-svh flex-col justify-center bg-abyss-950 pt-16">
      <div className="container-site py-24">
        <p className="eyebrow mb-6 text-sky-500">
          Pour les directions retail et CRM
        </p>
        <h1 className="font-display text-display-xl max-w-4xl text-paper">
          Vos meilleurs clients envoient des signaux. Personne ne les lit.
        </h1>
        <p className="mt-6 max-w-2xl text-body-l text-sky-300">
          Eyeconic unifie vos données boutique, e-commerce et messagerie, puis
          met cinq agents IA au service de vos conseillers. Ils savent qui
          contacter, quand, et avec quoi.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <Link
            href="/essai"
            className="bg-gradient-brand rounded-md px-6 py-3 font-medium text-paper shadow-card transition-shadow hover:shadow-card-hover"
          >
            Démarrer l&apos;essai gratuit
          </Link>
          <Link
            href="/demo"
            className="rounded-md border border-paper/20 px-6 py-3 font-medium text-paper transition-colors hover:bg-paper/10"
          >
            Réserver une démo
          </Link>
        </div>
        <p className="mt-8 text-caption text-slate-400">
          Opérationnel en 7 jours · Sans remplacer vos outils · Données
          hébergées en Europe
        </p>
      </div>
    </section>
  );
}
