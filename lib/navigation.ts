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
    title: "Platform",
    links: [
      {
        label: "Overview",
        href: "/produit",
        description: "The clienteling platform at a glance",
      },
      {
        label: "Single customer view",
        href: "/produit/vue-client",
        description: "All your customer data, unified",
      },
      {
        label: "Channels",
        href: "/produit/canaux",
        description: "WhatsApp, SMS, WeChat, email, LINE",
      },
      {
        label: "Analytics & attribution",
        href: "/produit/analytics",
        description: "Revenue proven, not estimated",
      },
      {
        label: "Mobile app",
        href: "/produit/application-mobile",
        description: "Your advisors' everyday tool",
      },
    ],
  },
  {
    title: "The agents",
    links: [
      {
        label: "Iris",
        href: "/produit/agents/iris",
        description: "Builds the single customer view",
      },
      {
        label: "Signal",
        href: "/produit/agents/signal",
        description: "Detects buying intent",
      },
      {
        label: "Echo",
        href: "/produit/agents/echo",
        description: "Writes in the advisor's voice",
      },
      {
        label: "Prism",
        href: "/produit/agents/prisme",
        description: "Orchestrates campaigns and segments",
      },
      {
        label: "Focus",
        href: "/produit/agents/focus",
        description: "Prioritizes each advisor's day",
      },
    ],
  },
];

export const produitHighlight: NavLink = {
  label: "New — Focus",
  href: "/produit/agents/focus",
  description:
    "The agent that prepares each advisor's day, before the store opens.",
};

export const solutionsColumns: MegaMenuColumn[] = [
  {
    title: "By industry",
    links: [
      {
        label: "Luxury",
        href: "/solutions/luxe",
        description: "The relationship, at maison level",
      },
      {
        label: "Beauty & wellness",
        href: "/solutions/beaute-bien-etre",
        description: "Repeat purchases, not just traffic",
      },
      {
        label: "Fashion & DTC",
        href: "/solutions/mode-dtc",
        description: "Online and in-store, finally connected",
      },
      {
        label: "Specialty retail",
        href: "/solutions/retail-specialise",
        description: "Advice that brings clients back",
      },
    ],
  },
];

export const solutionsHighlight: NavLink = {
  label: "Case studies",
  href: "/clients",
  description: "How brands like yours put their customer data to work.",
};

export const mainNav: NavLink[] = [
  { label: "Integrations", href: "/integrations" },
  { label: "Pricing", href: "/tarifs" },
  { label: "Resources", href: "/ressources" },
];

export const footerColumns: MegaMenuColumn[] = [
  {
    title: "Product",
    links: [
      { label: "Overview", href: "/produit" },
      { label: "Single customer view", href: "/produit/vue-client" },
      { label: "The 5 agents", href: "/produit/agents" },
      { label: "Channels", href: "/produit/canaux" },
      { label: "Analytics & attribution", href: "/produit/analytics" },
      { label: "Mobile app", href: "/produit/application-mobile" },
      { label: "Pricing", href: "/tarifs" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "Luxury", href: "/solutions/luxe" },
      { label: "Beauty & wellness", href: "/solutions/beaute-bien-etre" },
      { label: "Fashion & DTC", href: "/solutions/mode-dtc" },
      { label: "Specialty retail", href: "/solutions/retail-specialise" },
      { label: "Integrations", href: "/integrations" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Resource hub", href: "/ressources" },
      { label: "Blog", href: "/ressources/blog" },
      { label: "ROI calculator", href: "/ressources/calculateur-roi" },
      { label: "Case studies", href: "/clients" },
      { label: "Security & GDPR", href: "/securite" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/a-propos" },
      { label: "Contact", href: "/contact" },
      { label: "Book a demo", href: "/demo" },
      { label: "Start for free", href: "/essai" },
    ],
  },
];

/* Footer bottom bar — the brief mandates 4 columns, legal lives here */
export const legalLinks: NavLink[] = [
  { label: "Legal notice", href: "/mentions-legales" },
  { label: "Privacy", href: "/confidentialite" },
  { label: "Terms", href: "/cgu" },
  { label: "Cookies", href: "/cookies" },
];
