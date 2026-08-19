import { cn } from "@/lib/utils";
import { SectionHeading } from "@/components/marketing/section-heading";
import { Reveal } from "@/components/marketing/reveal";
import { TaskList } from "@/components/mockups/task-list";
import { AGENTS, AgentAvatar } from "@/components/marketing/agent-avatar";

const CAPABILITIES = [
  {
    tag: "Customer view",
    title: "Single customer view",
    text: "A client's entire history in one place, including what was never logged anywhere.",
    span: "lg:col-span-2",
  },
  {
    tag: "Channels",
    title: "Native messaging",
    text: "WhatsApp, SMS, WeChat, LINE, email. The client's channel, not the tool's.",
    span: "",
  },
  {
    tag: "Agents",
    title: "Five AI agents",
    text: "Iris, Signal, Echo, Prism and Focus work while your teams sell.",
    span: "",
    agents: true,
  },
  {
    tag: "Execution",
    title: "Tasks & workflows",
    text: "Each advisor's day, prioritized. Approvals, tracked.",
    span: "lg:col-span-2",
    mockup: true,
  },
  {
    tag: "Attribution",
    title: "Revenue attribution",
    text: "Which message drove which sale. By store, by region, by advisor.",
    span: "lg:col-span-2",
  },
  {
    tag: "Compliance",
    title: "European security",
    text: "EU hosting, encryption, GDPR by design, SSO on the Maison plan.",
    span: "",
  },
];

function AgentRoster() {
  return (
    <ul className="mt-5 divide-y divide-abyss-900/10 border-t-2 border-abyss-900/10">
      {AGENTS.map((agent) => (
        <li key={agent.name} className="flex items-center gap-3 py-3">
          <AgentAvatar variant={agent.variant} color={agent.color} />
          <span className="min-w-0">
            <span className="block text-sm font-medium text-abyss-900">
              {agent.name}
            </span>
            <span className="block text-caption text-slate-600">
              {agent.role}
            </span>
          </span>
        </li>
      ))}
    </ul>
  );
}

/** Section 5 — the six-capability bento grid. No generic icons. */
export function BentoGrid() {
  return (
    <section id="capacites" className="bg-paper py-20 lg:py-32">
      <div className="container-site">
        <SectionHeading
          eyebrow="Capabilities"
          title="Six capabilities, one tool"
          intro="What your clients tell you on one side, what your teams do with it on the other."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {CAPABILITIES.map((cap, i) => (
            <Reveal key={cap.title} delay={i % 3} className={cn(cap.span)}>
              <article className="flex h-full flex-col border-2 border-abyss-900/15 bg-white p-6 shadow-card transition-shadow hover:shadow-card-hover lg:p-7">
                <p className="eyebrow text-brand-600">{cap.tag}</p>
                <h3 className="text-h3 mt-3 font-medium text-abyss-900">
                  {cap.title}
                </h3>
                <p className="mt-2 text-body text-slate-600">{cap.text}</p>
                {cap.agents ? <AgentRoster /> : null}
                {cap.mockup ? (
                  <div className="mt-5">
                    <TaskList />
                  </div>
                ) : null}
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
