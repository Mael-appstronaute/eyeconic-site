/* FAQ de l'accueil — partagée entre l'accordéon (client) et le JSON-LD (serveur) */
export const FAQ_ITEMS = [
  {
    q: "Comment fonctionnent les crédits IA ?",
    a: "Chaque action d'un agent — enrichir une fiche, détecter un signal, rédiger un message, prioriser une journée — consomme des crédits. Le plan Boutique en inclut 5 000 par mois, le plan Réseau 250 000, le plan Maison est sur mesure. Les utilisateurs, eux, sont illimités sur tous les plans.",
  },
  {
    q: "Que se passe-t-il en cas de dépassement ?",
    a: "Vous êtes alerté avant d'atteindre le seuil. Au-delà, seuls les agents IA se mettent en pause : la vue client, la messagerie et les tâches continuent de fonctionner. Vous rechargez des crédits ou passez au plan supérieur, sans interruption de service. [Politique exacte à valider]",
  },
  {
    q: "Faut-il remplacer notre CRM ou notre POS ?",
    a: "Non. Eyeconic se connecte à votre existant — CRM, POS, e-commerce, messageries — et synchronise les données dans les deux sens. C'est un principe du produit : opérationnel en 7 jours, sans rien remplacer.",
  },
  {
    q: "Combien de temps prend le déploiement ?",
    a: "Sept jours en configuration standard : connexion des sources la première semaine, équipes formées dans la foulée. L'onboarding est inclus dans tous les plans, et un CSM dédié accompagne les plans Réseau et Maison.",
  },
  {
    q: "Où sont hébergées les données ?",
    a: "En Union européenne, chiffrées en transit et au repos, avec le RGPD appliqué dès la conception. Le plan Maison peut disposer d'un hébergement dédié. La facturation est en euros.",
  },
  {
    q: "Comment WhatsApp Business est-il géré ?",
    a: "Via l'API officielle WhatsApp Business, avec les numéros de votre marque et la gestion du consentement des clients. Les conversations alimentent directement la vue client unique. Disponible à partir du plan Réseau.",
  },
  {
    q: "Comment mesure-t-on le ROI ?",
    a: "Par l'attribution : chaque vente est reliée au message, au conseiller et à la boutique qui l'ont générée. Vous comparez le panier et le réachat des clients suivis à ceux des autres — par boutique, par région, par conseiller.",
  },
  {
    q: "Peut-on commencer par un pilote sur quelques boutiques ?",
    a: "Oui, c'est même le chemin que nous recommandons : un périmètre de quelques boutiques, des objectifs mesurables, puis l'extension au réseau. Le plan Boutique gratuit permet aussi de tester en conditions réelles sur un point de vente.",
  },
];

/* Questions supplémentaires — page /tarifs uniquement */
export const TARIFS_FAQ_ITEMS = [
  {
    q: "Y a-t-il un engagement de durée ?",
    a: "Le plan Boutique est gratuit, sans limite de durée. Le plan Réseau est mensuel, sans engagement annuel imposé ; un engagement annuel avec conditions préférentielles est possible. [Politique exacte à valider] Le plan Maison est contractualisé sur mesure.",
  },
  {
    q: "Peut-on changer de plan en cours de route ?",
    a: "Oui, à tout moment. Le passage de Boutique à Réseau conserve toutes vos données et votre configuration : rien n'est à refaire, vos vues client et vos historiques suivent.",
  },
  {
    q: "Le prix dépend-il du nombre d'utilisateurs ?",
    a: "Non — c'est le principe de la facturation aux crédits IA. Les utilisateurs sont illimités sur tous les plans : chaque conseiller, chaque directeur de boutique, chaque personne du siège a son compte, sans surcoût par siège.",
  },
  {
    q: "Comment se passe la facturation ?",
    a: "En euros, par prélèvement mensuel ou virement sur facture pour les plans Réseau et Maison. La TVA applicable est celle de votre pays de facturation. [Modalités exactes à valider]",
  },
];
