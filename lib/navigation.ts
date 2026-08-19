export type NavLink = {
  label: string;
  href: string;
  description?: string;
};

export type MegaMenuColumn = {
  title: string;
  links: NavLink[];
};

export const produitColumns: MegaMenuColumn[] = [
  {
    title: "Plateforme",
    links: [
      {
        label: "Vue d'ensemble",
        href: "/produit",
        description: "La plateforme de clienteling en un coup d'œil",
      },
      {
        label: "Vue client unique",
        href: "/produit/vue-client",
        description: "Toutes vos données client, réunies",
      },
      {
        label: "Canaux",
        href: "/produit/canaux",
        description: "WhatsApp, SMS, WeChat, e-mail, LINE",
      },
      {
        label: "Analyses et attribution",
        href: "/produit/analytics",
        description: "Le chiffre d'affaires prouvé, pas estimé",
      },
      {
        label: "Application mobile",
        href: "/produit/application-mobile",
        description: "L'outil quotidien de vos conseillers",
      },
    ],
  },
  {
    title: "Les agents",
    links: [
      {
        label: "Iris",
        href: "/produit/agents/iris",
        description: "Construit la vue client unique",
      },
      {
        label: "Signal",
        href: "/produit/agents/signal",
        description: "Détecte les intentions d'achat",
      },
      {
        label: "Écho",
        href: "/produit/agents/echo",
        description: "Rédige dans la voix du conseiller",
      },
      {
        label: "Prisme",
        href: "/produit/agents/prisme",
        description: "Orchestre campagnes et segments",
      },
      {
        label: "Focus",
        href: "/produit/agents/focus",
        description: "Priorise la journée de chaque conseiller",
      },
    ],
  },
];

export const produitHighlight: NavLink = {
  label: "Nouveau — Focus",
  href: "/produit/agents/focus",
  description:
    "L'agent qui prépare la journée de chaque conseiller, avant l'ouverture de la boutique.",
};

export const solutionsColumns: MegaMenuColumn[] = [
  {
    title: "Par secteur",
    links: [
      {
        label: "Luxe",
        href: "/solutions/luxe",
        description: "La relation au niveau de la maison",
      },
      {
        label: "Beauté et bien-être",
        href: "/solutions/beaute-bien-etre",
        description: "Du réachat, pas seulement du trafic",
      },
      {
        label: "Mode et DTC",
        href: "/solutions/mode-dtc",
        description: "Le online et la boutique, enfin reliés",
      },
      {
        label: "Retail spécialisé",
        href: "/solutions/retail-specialise",
        description: "Le conseil qui fait revenir",
      },
    ],
  },
];

export const solutionsHighlight: NavLink = {
  label: "Études de cas",
  href: "/clients",
  description: "Comment des marques comme la vôtre font travailler leur donnée client.",
};

export const mainNav: NavLink[] = [
  { label: "Intégrations", href: "/integrations" },
  { label: "Tarifs", href: "/tarifs" },
  { label: "Ressources", href: "/ressources" },
];

export const footerColumns: MegaMenuColumn[] = [
  {
    title: "Produit",
    links: [
      { label: "Vue d'ensemble", href: "/produit" },
      { label: "Vue client unique", href: "/produit/vue-client" },
      { label: "Les 5 agents", href: "/produit/agents" },
      { label: "Canaux", href: "/produit/canaux" },
      { label: "Analyses et attribution", href: "/produit/analytics" },
      { label: "Application mobile", href: "/produit/application-mobile" },
      { label: "Tarifs", href: "/tarifs" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "Luxe", href: "/solutions/luxe" },
      { label: "Beauté et bien-être", href: "/solutions/beaute-bien-etre" },
      { label: "Mode et DTC", href: "/solutions/mode-dtc" },
      { label: "Retail spécialisé", href: "/solutions/retail-specialise" },
      { label: "Intégrations", href: "/integrations" },
    ],
  },
  {
    title: "Ressources",
    links: [
      { label: "Hub ressources", href: "/ressources" },
      { label: "Blog", href: "/ressources/blog" },
      { label: "Calculateur de ROI", href: "/ressources/calculateur-roi" },
      { label: "Études de cas", href: "/clients" },
      { label: "Sécurité et RGPD", href: "/securite" },
    ],
  },
  {
    title: "Entreprise",
    links: [
      { label: "À propos", href: "/a-propos" },
      { label: "Contact", href: "/contact" },
      { label: "Réserver une démo", href: "/demo" },
      { label: "Essai gratuit", href: "/essai" },
    ],
  },
];

/* Barre basse du footer — le brief impose 4 colonnes, le légal vit ici */
export const legalLinks: NavLink[] = [
  { label: "Mentions légales", href: "/mentions-legales" },
  { label: "Confidentialité", href: "/confidentialite" },
  { label: "CGU", href: "/cgu" },
  { label: "Cookies", href: "/cookies" },
];
