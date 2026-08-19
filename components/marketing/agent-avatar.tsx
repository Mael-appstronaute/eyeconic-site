import { cn } from "@/lib/utils";

/**
 * The 5 agents — shared identity (bento, mega menu, product pages).
 * Brand-scale tints from lightest (Iris) to deepest (Focus); one
 * distinct silhouette per agent: a team, not a repeated icon.
 */
export const AGENTS = [
  {
    name: "Iris",
    slug: "iris",
    color: "#7fb0e5",
    variant: "bob",
    role: "Builds and enriches the single customer view",
    href: "/produit/agents/iris",
    detail:
      "Gathers every purchase, message, fitting and appointment from your stores, your site, your POS and your messaging apps — including what had never been logged anywhere — and keeps it continuously up to date.",
  },
  {
    name: "Signal",
    slug: "signal",
    color: "#4c92da",
    variant: "court",
    role: "Detects buying intent and clients drifting away",
    href: "/produit/agents/signal",
    detail:
      "Watches for intent signals: a product page viewed twice, a usual repurchase overdue, a VIC drifting away. It alerts the right advisor before the moment passes.",
  },
  {
    name: "Echo",
    slug: "echo",
    color: "#6a94d3",
    variant: "chignon",
    role: "Drafts the message, in the advisor's voice",
    href: "/produit/agents/echo",
    detail:
      "Prepares the message in the advisor's own voice, on the channel the client actually uses — WhatsApp, SMS, WeChat, LINE or email. The advisor stays in charge: they review, adjust, send.",
  },
  {
    name: "Prism",
    slug: "prisme",
    color: "#2f6fae",
    variant: "nu",
    role: "Orchestrates campaigns and segments",
    href: "/produit/agents/prisme",
    detail:
      "Orchestrates campaigns and segments: it assembles the right audiences from the customer view and distributes the work to stores — no exports, no spreadsheets.",
  },
  {
    name: "Focus",
    slug: "focus",
    color: "#1a507c",
    variant: "long",
    role: "Prioritizes each advisor's day",
    href: "/produit/agents/focus",
    detail:
      "Builds each advisor's day before the store opens: who to call back, in what order, and why. Then it tracks execution and surfaces whatever is stuck.",
  },
] as const;

export type AgentVariant = (typeof AGENTS)[number]["variant"];

/* White silhouettes, frame bottom = shoulders */
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
