import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Spark } from "@/components/marketing/spark";
import { PixelButton } from "@/components/marketing/pixel-button";
import { CtaBanner } from "@/components/marketing/cta-banner";
import { AGENTS, AgentAvatar } from "@/components/marketing/agent-avatar";
import { CustomerCard } from "@/components/mockups/customer-card";
import { TaskList } from "@/components/mockups/task-list";
import { WhatsAppThread } from "@/components/mockups/whatsapp-thread";
import { AttributionTable } from "@/components/mockups/attribution-table";
import {
  CadranMotif,
  FacettesMotif,
  FilMotif,
  PetalesMotif,
} from "@/components/marketing/hero-motifs";

/* ————————————————————————————————————————————————
   Pages solutions — un design poussé et propre à chaque secteur :
   hero différencié + section signature métier (timeline VIC, cycle de
   réachat, convergence online/boutique, frise du temps long).
   Citations : maisons FICTIVES du carrousel, mention affichée.
   ———————————————————————————————————————————————— */

const SECTEURS = {
  luxe: {
    title: "Luxe",
    h1: "La relation au niveau de la maison.",
    intro:
      "Vos clients attendent d'être reconnus, pas segmentés. Le clienteling est votre métier depuis toujours — Eyeconic lui donne la mémoire et la mesure qui lui manquaient.",
    chips: ["VIC", "Carnets repris", "Multi-boutiques", "WhatsApp & WeChat"],
    heroBg: "bg-white",
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
    agents: ["Iris", "Signal", "Écho"],
    quote: {
      text: "Nous avons comparé quatre plateformes sur un trimestre. Eyeconic est la seule que les équipes ont continué d'ouvrir une fois le pilote terminé.",
      author: "Isabelle Franchi — Chief Client Officer, Groupe Delcourt",
      kpis: [
        ["+31 %", "CA attribué, périmètre Europe"],
        ["11 sem.", "Déploiement sur 214 boutiques"],
      ],
    },
  },
  "beaute-bien-etre": {
    title: "Beauté et bien-être",
    h1: "Du réachat, pas seulement du trafic.",
    intro:
      "Vos produits se terminent, vos soins se réservent : la relance est votre levier naturel. Encore faut-il savoir qui relancer, quand, et avec quoi.",
    chips: ["Réachat", "Rendez-vous", "Instituts", "Rythmes clients"],
    heroBg: "bg-mist-100",
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
    agents: ["Signal", "Focus", "Iris"],
    quote: {
      text: "Le pilote portait sur trois instituts. Six semaines plus tard, les autres directrices demandaient l'outil.",
      author: "Sofia Andrade — Head of Client Experience, Linéa Beauté",
      kpis: [
        ["+45 %", "Rendez-vous pris en institut"],
        ["−22 %", "Clientes sans contact depuis 90 j"],
      ],
    },
  },
  "mode-dtc": {
    title: "Mode et DTC",
    h1: "Le online et la boutique, enfin reliés.",
    intro:
      "Votre client essaie en boutique, achète en ligne, retourne en boutique. Vos outils, eux, le comptent comme trois personnes différentes.",
    chips: ["Online × Boutique", "Wishlist", "Essayages", "Attribution"],
    heroBg: "bg-white",
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
    agents: ["Iris", "Signal", "Écho"],
    quote: {
      text: "On mesurait le trafic, jamais la relation. Le clienteling est passé d'un acte de foi à une ligne du reporting.",
      author: "Marc-Antoine Lefebvre — Directeur Retail Europe, ORVEA Paris",
      kpis: [
        ["+27 %", "CA attribué au clienteling"],
        ["92 %", "Adoption par les conseillers"],
      ],
    },
  },
  "retail-specialise": {
    title: "Retail spécialisé",
    h1: "Le conseil qui fait revenir.",
    intro:
      "Horlogerie, optique, maison, sport premium : vos clients achètent rarement, mais reviennent toute une vie — si quelqu'un entretient la relation entre deux achats.",
    chips: ["Cycles longs", "Service & entretien", "Expertise", "Rappels"],
    heroBg: "bg-paper",
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
    agents: ["Signal", "Iris", "Focus"],
    quote: {
      text: "Un client de montre revient tous les quatre ou cinq ans. Sans mémoire d'entreprise, cette relation n'existe pas.",
      author: "Thomas Berthoud — Directeur Retail Monde, Aurige",
      kpis: [
        ["×1,8", "Rendez-vous atelier générés"],
        ["68 %", "VIC recontactés au trimestre"],
      ],
    },
  },
} as const;

type Slug = keyof typeof SECTEURS;

const MOTIFS = {
  luxe: FacettesMotif,
  "beaute-bien-etre": PetalesMotif,
  "mode-dtc": FilMotif,
  "retail-specialise": CadranMotif,
} as const;

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

export default async function SolutionPage({
  params,
}: PageProps<"/solutions/[slug]">) {
  const { slug } = await params;
  const secteur = SECTEURS[slug as Slug];
  if (!secteur) notFound();
  const Motif = MOTIFS[slug as Slug];
  const agents = AGENTS.filter((a) =>
    (secteur.agents as readonly string[]).includes(a.name)
  );

  return (
    <div className="pt-16">
      {/* Hero — motif secteur + puces métier */}
      <section className={`relative overflow-hidden ${secteur.heroBg}`}>
        <Motif className="absolute -right-8 top-1/2 hidden w-[360px] -translate-y-1/2 lg:block" />
        <div className="container-site relative py-16 lg:py-24">
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
          <ul className="mt-8 flex flex-wrap gap-2">
            {secteur.chips.map((chip) => (
              <li
                key={chip}
                className="border-2 border-abyss-900/15 bg-white px-3 py-1.5 text-caption font-medium text-abyss-900"
              >
                {chip}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Section signature — propre au secteur */}
      {slug === "luxe" ? <ParcoursVic /> : null}
      {slug === "beaute-bien-etre" ? <CycleReachat /> : null}
      {slug === "mode-dtc" ? <DeuxMondes /> : null}
      {slug === "retail-specialise" ? <TempsLong /> : null}

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

      {/* Réponses + agents du secteur */}
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

          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
            <p className="eyebrow text-slate-400">Les agents à l&apos;œuvre</p>
            <ul className="flex flex-wrap gap-3">
              {agents.map((agent) => (
                <li key={agent.name}>
                  <a
                    href={agent.href}
                    className="flex items-center gap-2.5 border-2 border-abyss-900/10 bg-white py-1.5 pl-1.5 pr-4 transition-colors hover:border-brand-500/50 hover:bg-mist-100"
                  >
                    <AgentAvatar variant={agent.variant} color={agent.color} className="size-8" />
                    <span className="text-sm font-medium text-abyss-900">{agent.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Citation + KPI du secteur */}
          <div className="mt-12 grid gap-6 lg:grid-cols-[minmax(0,7fr)_minmax(0,3fr)]">
            <blockquote className="border-l-4 border-brand-500 bg-white p-8 shadow-card">
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
            <div className="grid grid-cols-2 gap-4 lg:grid-cols-1">
              {secteur.quote.kpis.map(([value, label]) => (
                <div key={label} className="flex flex-col justify-center bg-mist-100 p-5">
                  <p className="font-display text-display-m text-abyss-900">{value}</p>
                  <p className="mt-1 text-[11px] font-medium uppercase tracking-wide text-slate-600">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>

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

/* ————— Luxe : le parcours d'une VIC, en timeline à jalons losange ————— */

const PARCOURS = [
  { date: "Mars", text: "Essayage d'une pièce d'exception, sans achat. Noté en trente secondes dans la fiche.", strong: false },
  { date: "Avril", text: "Silence. Aucun outil classique ne s'en inquiète.", strong: false },
  { date: "Mai", text: "Signal : la fiche du modèle a été revue deux fois cette semaine.", strong: true },
  { date: "Mai", text: "Écho prépare un message dans la voix de la conseillère — relu, ajusté, envoyé.", strong: true },
  { date: "Juin", text: "La vente, en boutique. Attribuée à la relation, pas au hasard.", strong: false },
];

function ParcoursVic() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="container-site">
        <h2 className="font-display text-display-m max-w-2xl text-abyss-900">
          Le parcours d&apos;une VIC, avec et sans mémoire
        </h2>
        <div className="relative mt-12">
          <span
            aria-hidden="true"
            className="absolute left-[7px] top-2 h-[calc(100%-16px)] w-0.5 bg-abyss-900/10 lg:left-1/2 lg:-translate-x-1/2"
          />
          <ol className="space-y-8">
            {PARCOURS.map((step, i) => (
              <li
                key={i}
                className={`relative flex gap-6 lg:w-1/2 lg:gap-0 ${
                  i % 2 ? "lg:ml-auto lg:pl-10" : "lg:pr-10 lg:text-right"
                }`}
              >
                <span
                  aria-hidden="true"
                  className={`absolute left-0 top-2 size-4 rotate-45 ${
                    i % 2 ? "lg:-left-2" : "lg:left-auto lg:-right-2"
                  } ${step.strong ? "bg-brand-500" : "border-2 border-abyss-900/30 bg-white"}`}
                />
                <div className={`pl-8 lg:pl-0 ${step.strong ? "" : ""}`}>
                  <p className="eyebrow text-brand-600">{step.date}</p>
                  <p
                    className={`mt-1 max-w-md text-body ${
                      step.strong ? "font-medium text-abyss-900" : "text-slate-600"
                    } ${i % 2 ? "" : "lg:ml-auto"}`}
                  >
                    {step.text}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <CustomerCard />
          <div className="flex flex-col justify-center border-2 border-abyss-900/15 bg-paper p-8 shadow-card">
            <p className="text-h3 font-medium text-abyss-900">
              Sans Eyeconic, ce parcours s&apos;arrête en avril.
            </p>
            <p className="mt-3 text-body text-slate-600">
              La conseillère change de boutique, le carnet part avec elle, et
              la VIC devient une inconnue. Avec la vue client unique, la
              maison garde la relation — et peut prouver ce qu&apos;elle vaut.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ————— Beauté : le cycle du réachat, en anneau ————— */

const CYCLE = [
  ["Achat", "La crème, le soin, le parfum — le point de départ du rythme."],
  ["Utilisation", "Six à huit semaines : le produit vit sa vie, personne n'écrit."],
  ["Fin proche", "Signal calcule le rythme réel de la cliente, pas une moyenne."],
  ["Relance", "Message au bon moment, rendez-vous proposé — avant le rayon d'un concurrent."],
];

function CycleReachat() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="container-site">
        <h2 className="font-display text-display-m max-w-2xl text-abyss-900">
          Le cycle du réachat, enfin visible
        </h2>
        <div className="mt-12 grid items-center gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,4fr)]">
          {/* L'anneau */}
          <div className="relative mx-auto aspect-square w-full max-w-[460px]">
            <span
              aria-hidden="true"
              className="absolute inset-[70px] rounded-full border-2 border-dashed border-brand-500/40"
            />
            <span className="absolute left-1/2 top-1/2 w-24 -translate-x-1/2 -translate-y-1/2 text-center">
              <span className="font-display block text-base font-semibold text-abyss-900">
                Le rythme
              </span>
              <span className="mt-1 block text-[11px] leading-snug text-slate-600">
                calculé par Signal
              </span>
            </span>
            {CYCLE.map(([title, text], i) => {
              const pos = [
                "left-1/2 top-0 -translate-x-1/2",
                "right-0 top-1/2 -translate-y-1/2",
                "left-1/2 bottom-0 -translate-x-1/2",
                "left-0 top-1/2 -translate-y-1/2",
              ][i];
              return (
                <div
                  key={title}
                  className={`absolute ${pos} w-40 border-2 ${
                    i >= 2 ? "border-brand-500/50 bg-mist-100" : "border-abyss-900/15 bg-white"
                  } p-3 text-center shadow-card`}
                >
                  <p className="text-sm font-medium text-abyss-900">{title}</p>
                  <p className="mt-1 text-[11px] leading-snug text-slate-600">{text}</p>
                </div>
              );
            })}
          </div>

          <div className="space-y-5">
            <TaskList />
            <p className="text-body text-slate-600">
              Chaque relance validée devient une tâche dans la journée de la
              bonne conseillère — Focus s&apos;occupe de l&apos;ordre, elle
              s&apos;occupe de la relation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ————— Mode & DTC : deux mondes qui convergent ————— */

const ONLINE = ["Wishlist et favoris", "Panier abandonné", "Fiches produit revisitées", "Historique de commandes"];
const BOUTIQUE = ["Essayages, avec tailles", "Conseils donnés", "Retours et échanges", "Préférences notées"];

function DeuxMondes() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="container-site">
        <h2 className="font-display text-display-m max-w-2xl text-abyss-900">
          Deux mondes, un seul client
        </h2>
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <div className="border-2 border-abyss-900/15 bg-paper p-6 shadow-card">
            <p className="eyebrow text-brand-600">En ligne</p>
            <ul className="mt-4 space-y-2.5">
              {ONLINE.map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-body text-abyss-900">
                  <span aria-hidden="true" className="size-1.5 bg-brand-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="border-2 border-abyss-900/15 bg-paper p-6 shadow-card">
            <p className="eyebrow text-brand-600">En boutique</p>
            <ul className="mt-4 space-y-2.5">
              {BOUTIQUE.map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-body text-abyss-900">
                  <span aria-hidden="true" className="size-1.5 bg-brand-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div aria-hidden="true" className="my-4 flex justify-center gap-24 text-2xl text-brand-500">
          <span>↘</span>
          <span>↙</span>
        </div>

        <div className="dark grid items-center gap-8 bg-abyss-900 p-8 shadow-card-hover lg:grid-cols-2 lg:p-10">
          <div>
            <p className="eyebrow text-sky-500">La fusion — Iris</p>
            <p className="font-display text-display-m mt-2 text-paper">
              Une seule fiche.
            </p>
            <p className="mt-3 text-body text-sky-300">
              La wishlist du site devient un motif de rappel en boutique ;
              l&apos;essayage d&apos;hier explique la commande de demain. Et
              l&apos;attribution répartit le mérite sans dispute.
            </p>
          </div>
          <WhatsAppThread />
        </div>
      </div>
    </section>
  );
}

/* ————— Retail spécialisé : la frise du temps long ————— */

const FRISE = [
  { annee: "Année 0", text: "L'achat. La pièce, le conseil, les préférences — tout est noté.", strong: false },
  { annee: "Année 1", text: "Rappel d'entretien. La révision devient une visite.", strong: true },
  { annee: "Année 2–3", text: "Silence entretenu : un mot à l'anniversaire d'achat, une nouveauté pertinente.", strong: false },
  { annee: "Année 4", text: "Le signal — la fiche d'un nouveau modèle consultée. Le conseiller appelle le premier.", strong: true },
] as const;

function TempsLong() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="container-site">
        <h2 className="font-display text-display-m max-w-2xl text-abyss-900">
          Quatre ans de relation, sans trou
        </h2>

        <div className="relative mt-14">
          <span aria-hidden="true" className="absolute left-0 right-0 top-[9px] hidden h-0.5 bg-abyss-900/10 lg:block" />
          <ol className="grid gap-8 lg:grid-cols-4 lg:gap-6">
            {FRISE.map((step) => (
              <li key={step.annee} className="relative lg:pt-8">
                <span
                  aria-hidden="true"
                  className={`absolute left-0 top-0 hidden size-5 lg:block ${
                    step.strong ? "bg-brand-500" : "border-2 border-abyss-900/30 bg-white"
                  }`}
                />
                <p className="eyebrow text-brand-600">{step.annee}</p>
                <p
                  className={`mt-2 text-body ${
                    step.strong ? "font-medium text-abyss-900" : "text-slate-600"
                  }`}
                >
                  {step.text}
                </p>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-14 grid items-center gap-8 lg:grid-cols-2">
          <AttributionTable />
          <div className="border-2 border-abyss-900/15 bg-paper p-8 shadow-card">
            <p className="text-h3 font-medium text-abyss-900">
              Le temps long se mesure aussi.
            </p>
            <p className="mt-3 text-body text-slate-600">
              Chaque visite d&apos;atelier, chaque rappel de service, chaque
              vente à quatre ans d&apos;intervalle : l&apos;attribution suit
              la relation sur toute sa durée — c&apos;est là que vit votre
              marge.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
