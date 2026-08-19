import type { Metadata } from "next";
import { Spark } from "@/components/marketing/spark";
import { WhatsAppThread } from "@/components/mockups/whatsapp-thread";
import { CtaBanner } from "@/components/marketing/cta-banner";
import { BullesMotif } from "@/components/marketing/hero-motifs";

export const metadata: Metadata = {
  title: "Canaux",
  description:
    "WhatsApp, SMS, WeChat, LINE, e-mail : le canal du client, pas celui de l'outil. Conversations reliées à la vue client unique.",
};

const CANAUX = [
  { name: "WhatsApp", note: "Le canal du luxe en Europe et au Moyen-Orient" },
  { name: "SMS", note: "Le plus court chemin vers une réponse" },
  { name: "WeChat", note: "Incontournable pour la clientèle chinoise" },
  { name: "LINE", note: "Japon et Asie du Sud-Est" },
  { name: "E-mail", note: "Les moments qui méritent de la place" },
];

const PRINCIPES = [
  [
    "Le canal du client",
    "On écrit là où le client répond, pas là où l'outil est confortable. Le choix du canal fait partie de la relation.",
  ],
  [
    "Une seule conversation",
    "Quel que soit le canal, tout revient dans la même vue client : pas d'historique éclaté entre cinq applications.",
  ],
  [
    "Le conseiller garde la main",
    "Écho prépare le message dans sa voix ; le conseiller relit, ajuste, envoie. Rien ne part tout seul.",
  ],
];

/* Design propre à la page : la rangée de canaux en bande horizontale. */
export default function CanauxPage() {
  return (
    <div className="pt-16">
      <section className="relative overflow-hidden bg-white">
        <BullesMotif className="absolute -left-10 top-6 hidden w-[340px] lg:block" />
        <BullesMotif className="absolute -right-10 top-6 hidden w-[340px] -scale-x-100 lg:block" />
        <div className="container-site relative py-16 text-center lg:py-24">
          <p className="eyebrow mb-4 flex items-center justify-center gap-2.5 text-brand-600">
            <Spark className="size-2.5" />
            Produit — Canaux
          </p>
          <h1 className="font-display text-display-l mx-auto max-w-3xl text-balance text-abyss-900">
            Le canal du client, pas celui de l&apos;outil.
          </h1>
        </div>

        {/* Bande de canaux pleine largeur */}
        <div className="border-y-2 border-abyss-900/10 bg-paper">
          <div className="container-site grid grid-cols-2 divide-abyss-900/10 sm:grid-cols-5 sm:divide-x-2">
            {CANAUX.map((c) => (
              <div key={c.name} className="px-4 py-8 text-center">
                <p className="font-display text-lg font-semibold text-abyss-900">
                  {c.name}
                </p>
                <p className="mt-2 text-caption text-slate-600">{c.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper py-16 lg:py-24">
        <div className="container-site grid items-center gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            {PRINCIPES.map(([title, text]) => (
              <div key={title} className="border-l-4 border-brand-500 bg-white p-6 shadow-card">
                <h2 className="text-h3 font-medium text-abyss-900">{title}</h2>
                <p className="mt-2 text-body text-slate-600">{text}</p>
              </div>
            ))}
          </div>
          <WhatsAppThread />
        </div>
      </section>

      <CtaBanner />
    </div>
  );
}
