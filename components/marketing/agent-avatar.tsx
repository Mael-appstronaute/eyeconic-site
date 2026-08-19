import { cn } from "@/lib/utils";

/**
 * Les 5 agents — identité partagée (bento, méga menu, page produit).
 * Teintes de l'échelle de marque du plus clair (Iris) au plus profond
 * (Focus) ; une silhouette distincte par agent : une équipe, pas un
 * picto répété.
 */
export const AGENTS = [
  {
    name: "Iris",
    slug: "iris",
    color: "#7fb0e5",
    variant: "bob",
    role: "Construit et enrichit la vue client unique",
    href: "/produit/agents/iris",
    detail:
      "Rassemble chaque achat, message, essayage et rendez-vous depuis vos boutiques, votre site, votre POS et vos messageries — y compris ce qui n'avait jamais été saisi nulle part — et le tient à jour en continu.",
  },
  {
    name: "Signal",
    slug: "signal",
    color: "#4c92da",
    variant: "court",
    role: "Détecte les intentions d'achat et les clients qui décrochent",
    href: "/produit/agents/signal",
    detail:
      "Surveille les signaux d'intention : une fiche produit revue deux fois, un réachat habituel dépassé, une VIC qui s'éloigne. Il alerte le bon conseiller avant que l'occasion ne passe.",
  },
  {
    name: "Écho",
    slug: "echo",
    color: "#6a94d3",
    variant: "chignon",
    role: "Rédige le message, dans la voix du conseiller",
    href: "/produit/agents/echo",
    detail:
      "Prépare le message dans la voix du conseiller, sur le canal que le client utilise vraiment — WhatsApp, SMS, WeChat, LINE ou e-mail. Le conseiller garde la main : il relit, ajuste, envoie.",
  },
  {
    name: "Prisme",
    slug: "prisme",
    color: "#2f6fae",
    variant: "nu",
    role: "Orchestre les campagnes et les segments",
    href: "/produit/agents/prisme",
    detail:
      "Orchestre les campagnes et les segments : il assemble les bonnes audiences à partir de la vue client et distribue le travail aux boutiques, sans export ni tableur.",
  },
  {
    name: "Focus",
    slug: "focus",
    color: "#1a507c",
    variant: "long",
    role: "Priorise la journée de chaque conseiller",
    href: "/produit/agents/focus",
    detail:
      "Compose la journée de chaque conseiller avant l'ouverture : qui rappeler, dans quel ordre, pourquoi. Puis il suit l'exécution et fait remonter ce qui bloque.",
  },
] as const;

export type AgentVariant = (typeof AGENTS)[number]["variant"];

/* Silhouettes blanches, bas de cadre = épaules */
const SHAPES: Record<AgentVariant, React.ReactNode> = {
  bob: (
    <>
      <circle cx="16" cy="12.5" r="8" />
      <circle cx="16" cy="14.5" r="6.5" />
      <path d="M4 32c1.5-9 6.5-13 12-13s10.5 4 12 13Z" />
    </>
  ),
  court: (
    <>
      <circle cx="16" cy="13" r="6.5" />
      <path d="M16 5.5a7 7 0 0 1 7 6.5H9a7 7 0 0 1 7-6.5Z" />
      <path d="M4 32c1.5-9 6.5-13 12-13s10.5 4 12 13Z" />
    </>
  ),
  chignon: (
    <>
      <circle cx="16" cy="5.5" r="3.2" />
      <circle cx="16" cy="14" r="6.5" />
      <path d="M4 32c1.5-9 6.5-13 12-13s10.5 4 12 13Z" />
    </>
  ),
  nu: (
    <>
      <circle cx="16" cy="13" r="6.5" />
      <path d="M4 32c1.5-9 6.5-13 12-13s10.5 4 12 13Z" />
    </>
  ),
  long: (
    <>
      <path d="M8 15c0-6 3.5-10 8-10s8 4 8 10v17H8Z" opacity="0.55" />
      <circle cx="16" cy="13" r="6.5" />
      <path d="M4 32c1.5-9 6.5-13 12-13s10.5 4 12 13Z" />
    </>
  ),
};

export function AgentAvatar({
  variant,
  color,
  className,
}: {
  variant: AgentVariant;
  color: string;
  className?: string;
}) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "flex size-9 shrink-0 items-end justify-center overflow-hidden",
        className
      )}
      style={{ backgroundColor: color }}
    >
      <svg viewBox="0 0 32 32" className="w-full" fill="#f9f9f9">
        {SHAPES[variant]}
      </svg>
    </span>
  );
}
