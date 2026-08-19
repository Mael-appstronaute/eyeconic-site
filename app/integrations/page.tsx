import type { Metadata } from "next";
import { Spark } from "@/components/marketing/spark";
import { PixelButton } from "@/components/marketing/pixel-button";
import { CtaBanner } from "@/components/marketing/cta-banner";

export const metadata: Metadata = {
  title: "Intégrations",
  description:
    "Eyeconic se connecte à votre existant — e-commerce, POS, CRM, messageries — en synchronisation bidirectionnelle. Sans rien remplacer.",
};

const FAMILLES = [
  {
    title: "E-commerce",
    named: ["Shopify"],
    desc: "Commandes, clients, wishlists et navigation, synchronisés dans les deux sens.",
  },
  {
    title: "Messageries",
    named: ["WhatsApp Business", "SMS", "WeChat", "LINE", "E-mail"],
    desc: "Les conversations partent et reviennent dans la vue client unique.",
  },
  {
    title: "Caisse et POS",
    named: [],
    desc: "Tickets, retours et avoirs remontent vers la fiche client, boutique par boutique.",
  },
  {
    title: "CRM et marketing",
    named: [],
    desc: "Vos segments et historiques existants sont repris, pas recommencés.",
  },
  {
    title: "Rendez-vous et agenda",
    named: [],
    desc: "Les rendez-vous pris nourrissent la journée des conseillers dans Focus.",
  },
  {
    title: "Fichiers et imports",
    named: [],
    desc: "Un export CSV suffit pour démarrer — y compris les fameux carnets numérisés.",
  },
];

/* Design propre à la page : mur de familles avec chips nommées. */
export default function IntegrationsPage() {
  return (
    <div className="pt-16">
      <section className="bg-mist-100">
        <div className="container-site py-16 lg:py-24">
          <p className="eyebrow mb-4 flex items-center gap-2.5 text-brand-600">
            <Spark className="size-2.5" />
            Intégrations
          </p>
          <h1 className="font-display text-display-l max-w-3xl text-balance text-abyss-900">
            Branché sur l&apos;existant, pas à sa place.
          </h1>
          <p className="mt-5 max-w-2xl text-body-l text-slate-600">
            Opérationnel en 7 jours, sans remplacer vos outils : Eyeconic se
            connecte et synchronise dans les deux sens. 40+ intégrations
            natives <span className="text-slate-400">[à valider]</span>.
          </p>
        </div>
      </section>

      <section className="bg-paper py-16 lg:py-24">
        <div className="container-site grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FAMILLES.map((f) => (
            <div key={f.title} className="flex flex-col border-2 border-abyss-900/15 bg-white p-6 shadow-card">
              <h2 className="text-h3 font-medium text-abyss-900">{f.title}</h2>
              <p className="mt-2 grow text-body text-slate-600">{f.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {f.named.map((n) => (
                  <span key={n} className="border-2 border-brand-500/40 bg-mist-100 px-2.5 py-1 text-caption font-medium text-brand-700">
                    {n}
                  </span>
                ))}
                <span className="border-2 border-abyss-900/10 px-2.5 py-1 text-caption text-slate-400">
                  Catalogue complet [à valider]
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="container-site mt-12">
          <p className="max-w-2xl text-body text-slate-600">
            Un outil absent de la liste ? Le plan Maison inclut l&apos;API
            prioritaire, et un import CSV permet toujours de démarrer.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <PixelButton href="/demo" variant="brand">
              Vérifier mes outils en démo
            </PixelButton>
          </div>
        </div>
      </section>

      <CtaBanner />
    </div>
  );
}
