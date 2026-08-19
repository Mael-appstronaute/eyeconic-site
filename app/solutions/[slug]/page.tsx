import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Spark } from "@/components/marketing/spark";
import { PixelButton } from "@/components/marketing/pixel-button";
import { CtaBanner } from "@/components/marketing/cta-banner";

/* Contenu par secteur — douleurs métier et réponses produit.
   Citations : maisons FICTIVES du carrousel (mention affichée). */
const SECTEURS = {
  luxe: {
    title: "Luxe",
    h1: "La relation au niveau de la maison.",
    intro:
      "Vos clients attendent d'être reconnus, pas segmentés. Le clienteling est votre métier depuis toujours — Eyeconic lui donne la mémoire et la mesure qui lui manquaient.",
    pains: [
      "La relation vit dans les carnets et part avec les conseillers",
      "Les VIC d'une boutique sont des inconnus dans une autre",
      "Impossible de prouver ce que le clienteling rapporte",
    ],
    reponses: [
      ["La mémoire de la maison", "Iris unifie l'historique de chaque client, toutes boutiques confondues — la relation survit aux départs et aux mutations."],
      ["Le geste juste, au bon moment", "Signal repère l'intention discrète ; Écho aide le conseiller à écrire comme lui, en mieux préparé."],
      ["La preuve pour le comité", "L'attribution relie chaque vente au travail relationnel — par maison, par boutique, par conseiller."],
    ],
    quote: {
      text: "Nous avons comparé quatre plateformes sur un trimestre. Eyeconic est la seule que les équipes ont continué d'ouvrir une fois le pilote terminé.",
      author: "Isabelle Franchi — Chief Client Officer, Groupe Delcourt",
    },
  },
  "beaute-bien-etre": {
    title: "Beauté et bien-être",
    h1: "Du réachat, pas seulement du trafic.",
    intro:
      "Vos produits se terminent, vos soins se réservent : la relance est votre levier naturel. Encore faut-il savoir qui relancer, quand, et avec quoi.",
    pains: [
      "Les rythmes de réachat ne sont suivis nulle part",
      "Les rendez-vous en institut se remplissent au hasard du trafic",
      "Les conseillères connaissent leurs clientes, l'enseigne non",
    ],
    reponses: [
      ["Le bon moment du réachat", "Signal calcule le rythme de chaque cliente et prévient avant que le produit ne soit fini — pas trois semaines après."],
      ["Des agendas qui se remplissent", "Focus transforme les relances en rendez-vous pris, boutique par boutique, institut par institut."],
      ["La relation qui reste", "Iris garde l'historique des soins, des préférences et des conversations, même quand l'équipe change."],
    ],
    quote: {
      text: "Le pilote portait sur trois instituts. Six semaines plus tard, les autres directrices demandaient l'outil.",
      author: "Sofia Andrade — Head of Client Experience, Linéa Beauté",
    },
  },
  "mode-dtc": {
    title: "Mode et DTC",
    h1: "Le online et la boutique, enfin reliés.",
    intro:
      "Votre client essaie en boutique, achète en ligne, retourne en boutique. Vos outils, eux, le comptent comme trois personnes différentes.",
    pains: [
      "Le e-commerce et le retail se disputent l'attribution",
      "Les tailles, retours et essayages ne nourrissent aucune relance",
      "Le CRM voit des commandes, jamais des clients",
    ],
    reponses: [
      ["Un seul client, deux canaux", "Iris fusionne le profil web et le profil boutique : la wishlist en ligne devient un motif de rappel en boutique."],
      ["Les essayages qui reviennent", "Signal repère l'essayage sans achat et la fiche produit revisitée — le conseiller rappelle avec la bonne pièce."],
      ["L'attribution qui apaise", "Chaque vente est reliée à son vrai parcours : le débat online vs retail devient un tableau partagé."],
    ],
    quote: {
      text: "On mesurait le trafic, jamais la relation. Le clienteling est passé d'un acte de foi à une ligne du reporting.",
      author: "Marc-Antoine Lefebvre — Directeur Retail Europe, ORVEA Paris",
    },
  },
  "retail-specialise": {
    title: "Retail spécialisé",
    h1: "Le conseil qui fait revenir.",
    intro:
      "Horlogerie, optique, maison, sport premium : vos clients achètent rarement, mais reviennent toute une vie — si quelqu'un entretient la relation entre deux achats.",
    pains: [
      "Des cycles d'achat longs, sans contact entre deux ventes",
      "L'expertise des vendeurs ne laisse aucune trace",
      "Les occasions de service (entretien, révision) passent inaperçues",
    ],
    reponses: [
      ["La relation entre deux achats", "Signal transforme les années de silence en occasions : anniversaire d'achat, entretien à prévoir, nouveauté pertinente."],
      ["L'expertise qui reste", "Les conseils donnés, les préférences notées : Iris en fait une mémoire d'enseigne, pas un souvenir de vendeur."],
      ["Le service comme rendez-vous", "Focus planifie les rappels de service — la révision devient une visite, la visite une vente."],
    ],
    quote: {
      text: "Un client de montre revient tous les quatre ou cinq ans. Sans mémoire d'entreprise, cette relation n'existe pas.",
      author: "Thomas Berthoud — Directeur Retail Monde, Aurige",
    },
  },
} as const;

type Slug = keyof typeof SECTEURS;

export function generateStaticParams() {
  return Object.keys(SECTEURS).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/solutions/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const secteur = SECTEURS[slug as Slug];
  if (!secteur) return {};
  return { title: `${secteur.title} — solutions`, description: secteur.intro };
}

/* Design propre aux pages solutions : éditorial en deux temps —
   les douleurs en liste sombre, les réponses en cartes claires. */
export default async function SolutionPage({
  params,
}: PageProps<"/solutions/[slug]">) {
  const { slug } = await params;
  const secteur = SECTEURS[slug as Slug];
  if (!secteur) notFound();

  return (
    <div className="pt-16">
      <section className="bg-white">
        <div className="container-site py-16 lg:py-24">
          <p className="eyebrow mb-4 flex items-center gap-2.5 text-brand-600">
            <Spark className="size-2.5" />
            Solutions — {secteur.title}
          </p>
          <h1 className="font-display text-display-l max-w-3xl text-balance text-abyss-900">
            {secteur.h1}
          </h1>
          <p className="mt-5 max-w-2xl text-body-l text-slate-600">
            {secteur.intro}
          </p>
        </div>
      </section>

      {/* Douleurs — bande abysse */}
      <section className="dark bg-abyss-900 py-14">
        <div className="container-site">
          <p className="eyebrow mb-6 text-sky-500">Ce qui coince aujourd&apos;hui</p>
          <ul className="grid gap-4 lg:grid-cols-3">
            {secteur.pains.map((pain) => (
              <li key={pain} className="border-l-4 border-alert/70 bg-abyss-950/60 px-5 py-4 text-body text-paper">
                {pain}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Réponses produit */}
      <section className="bg-paper py-16 lg:py-24">
        <div className="container-site">
          <p className="eyebrow mb-6 text-brand-600">Ce qu&apos;Eyeconic change</p>
          <div className="grid gap-5 lg:grid-cols-3">
            {secteur.reponses.map(([title, text]) => (
              <div key={title} className="border-2 border-abyss-900/15 bg-white p-6 shadow-card">
                <h2 className="text-h3 font-medium text-abyss-900">{title}</h2>
                <p className="mt-2 text-body text-slate-600">{text}</p>
              </div>
            ))}
          </div>

          {/* Citation secteur */}
          <blockquote className="mt-12 border-l-4 border-brand-500 bg-white p-8 shadow-card">
            <p className="text-h3 font-light text-abyss-900">
              « {secteur.quote.text} »
            </p>
            <footer className="mt-4 text-caption font-medium uppercase tracking-wide text-slate-600">
              {secteur.quote.author}
              <span className="ml-3 font-normal normal-case tracking-normal text-slate-400">
                — exemple illustratif, marque fictive
              </span>
            </footer>
          </blockquote>

          <div className="mt-10 flex flex-wrap gap-4">
            <PixelButton href="/demo" variant="brand">
              Réserver une démo {secteur.title.toLowerCase()}
            </PixelButton>
            <PixelButton href="/tarifs" variant="outline">
              Voir les tarifs
            </PixelButton>
          </div>
        </div>
      </section>

      <CtaBanner />
    </div>
  );
}
