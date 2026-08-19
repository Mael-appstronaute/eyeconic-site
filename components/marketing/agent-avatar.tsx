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
    color: "#7fb0e5",
    variant: "bob",
    role: "Construit et enrichit la vue client unique",
    href: "/produit/agents/iris",
  },
  {
    name: "Signal",
    color: "#4c92da",
    variant: "court",
    role: "Détecte les intentions d'achat et les clients qui décrochent",
    href: "/produit/agents/signal",
  },
  {
    name: "Écho",
    color: "#6a94d3",
    variant: "chignon",
    role: "Rédige le message, dans la voix du conseiller",
    href: "/produit/agents/echo",
  },
  {
    name: "Prisme",
    color: "#2f6fae",
    variant: "nu",
    role: "Orchestre les campagnes et les segments",
    href: "/produit/agents/prisme",
  },
  {
    name: "Focus",
    color: "#1a507c",
    variant: "long",
    role: "Priorise la journée de chaque conseiller",
    href: "/produit/agents/focus",
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
