import type { Metadata } from "next";
import { Spark } from "@/components/marketing/spark";
import { CitationMotif } from "@/components/marketing/hero-motifs";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Analyses retail et CRM : clienteling, first-party data, exécution en boutique. Premiers articles à venir.",
};

/* Sujets annoncés — pas d'articles factices : le contenu arrive. */
const A_VENIR = [
  {
    tag: "Clienteling",
    title: "Pourquoi vos meilleurs vendeurs détestent votre CRM",
    desc: "Ce que les outils construits pour le siège font subir à ceux qui vendent — et comment inverser la logique.",
  },
  {
    tag: "Données",
    title: "La first-party data dort dans vos boutiques",
    desc: "Carnets, conversations, essayages : l'or que personne ne collecte, et comment le récupérer sans friction.",
  },
  {
    tag: "Mesure",
    title: "Attribuer une vente à un message, proprement",
    desc: "Les pièges de l'attribution en retail, et la méthode pour un chiffre que le comité accepte.",
  },
];

/* Design propre à la page : liste éditoriale sur filets, sobre. */
export default function BlogPage() {
  return (
    <div className="pt-16">
      <section className="relative overflow-hidden bg-white">
        <CitationMotif className="absolute -right-8 top-0 hidden w-[420px] lg:block" />
        <div className="container-site relative py-16 lg:py-24">
          <p className="eyebrow mb-4 flex items-center gap-2.5 text-brand-600">
            <Spark className="size-2.5" />
            Ressources — Blog
          </p>
          <h1 className="font-display text-display-l max-w-3xl text-balance text-abyss-900">
            Analyses retail et CRM.
          </h1>
          <p className="mt-4 max-w-2xl text-body-l text-slate-600">
            Une fois par mois, sans remplissage. Les premiers articles sont
            en préparation — voici ce qui arrive.
          </p>
        </div>
      </section>

      <section className="bg-paper pb-20 lg:pb-32">
        <div className="container-site">
          <ul className="divide-y-2 divide-abyss-900/10 border-y-2 border-abyss-900/10 bg-white shadow-card">
            {A_VENIR.map((post) => (
              <li key={post.title} className="grid gap-3 px-6 py-8 sm:grid-cols-[120px_1fr_auto] sm:items-baseline sm:gap-8 lg:px-10">
                <span className="eyebrow text-brand-600">{post.tag}</span>
                <div>
                  <h2 className="text-h3 font-medium text-abyss-900">{post.title}</h2>
                  <p className="mt-1.5 max-w-2xl text-body text-slate-600">{post.desc}</p>
                </div>
                <span className="border-2 border-abyss-900/15 px-3 py-1.5 text-caption font-medium text-slate-400">
                  À venir
                </span>
              </li>
            ))}
          </ul>

          {/* Inscription */}
          <div className="mt-10 flex flex-col items-start gap-4 border-2 border-abyss-900/15 bg-white p-8 shadow-card sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-h3 font-medium text-abyss-900">
                Être prévenu à la publication
              </p>
              <p className="mt-1 text-body text-slate-600">
                Une fois par mois, désinscription en un clic.
              </p>
            </div>
            <form className="flex w-full max-w-sm gap-2" aria-label="Inscription au blog">
              <label htmlFor="blog-email" className="sr-only">
                Adresse e-mail professionnelle
              </label>
              <input
                id="blog-email"
                type="email"
                required
                placeholder="prenom@votremarque.com"
                className="h-11 w-full border-2 border-abyss-900/20 bg-white px-4 text-sm text-abyss-900 placeholder:text-slate-400"
              />
              <button
                type="submit"
                className="h-11 shrink-0 border-2 border-abyss-900/25 px-4 text-sm font-medium text-abyss-900 transition-colors hover:border-abyss-900/50"
              >
                S&apos;inscrire
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
