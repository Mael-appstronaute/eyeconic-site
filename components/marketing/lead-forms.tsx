"use client";

import { useActionState } from "react";
import { submitLead, type LeadState } from "@/app/actions/lead";
import { PixelButton } from "@/components/marketing/pixel-button";
import { cn } from "@/lib/utils";

/* Shared fields — hard edges, drawn focus */
const inputCls =
  "h-12 w-full border-2 border-abyss-900/20 bg-white px-4 text-sm text-abyss-900 placeholder:text-slate-400 focus:border-brand-500 focus:outline-none";
const labelCls = "mb-1.5 block text-sm font-medium text-abyss-900";

function FormStatus({ state }: { state: LeadState }) {
  if (!state || state.ok) return null;
  return (
    <p
      role="alert"
      className="border-2 border-alert/50 bg-alert/10 px-4 py-3 text-sm text-abyss-900"
    >
      {state.message}
    </p>
  );
}

function SuccessPanel({ message }: { message: string }) {
  return (
    <div className="border-2 border-brand-500/50 bg-mist-100 p-8 text-center">
      <p className="font-display text-display-m text-abyss-900">Got it.</p>
      <p className="mx-auto mt-3 max-w-md text-body text-slate-600">{message}</p>
    </div>
  );
}

/** Long form — demo funnel. */
export function DemoForm({ source = "site" }: { source?: string }) {
  const [state, formAction, pending] = useActionState<LeadState, FormData>(
    submitLead,
    null
  );

  if (state?.ok) return <SuccessPanel message={state.message} />;

  return (
    <form action={formAction} className="space-y-5">
      <input type="hidden" name="type" value="demo" />
      <input type="hidden" name="source" value={source} />

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="demo-nom" className={labelCls}>
            Full name
          </label>
          <input id="demo-nom" name="nom" required autoComplete="name" className={inputCls} />
        </div>
        <div>
          <label htmlFor="demo-fonction" className={labelCls}>
            Role
          </label>
          <input id="demo-fonction" name="fonction" required className={inputCls} placeholder="CRM Director, Head of Retail…" />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="demo-email" className={labelCls}>
            Work email
          </label>
          <input id="demo-email" name="email" type="email" required autoComplete="email" className={inputCls} placeholder="you@yourbrand.com" />
        </div>
        <div>
          <label htmlFor="demo-tel" className={labelCls}>
            Phone <span className="font-normal text-slate-400">(optional)</span>
          </label>
          <input id="demo-tel" name="telephone" type="tel" autoComplete="tel" className={inputCls} />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="demo-societe" className={labelCls}>
            Brand or banner
          </label>
          <input id="demo-societe" name="societe" required autoComplete="organization" className={inputCls} />
        </div>
        <div>
          <label htmlFor="demo-boutiques" className={labelCls}>
            Locations
          </label>
          <select id="demo-boutiques" name="boutiques" required className={cn(inputCls, "appearance-none")}>
            <option value="">Select…</option>
            <option>1 to 5</option>
            <option>5 to 20</option>
            <option>20 to 50</option>
            <option>50 to 300</option>
            <option>300+</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="demo-secteur" className={labelCls}>
          Industry
        </label>
        <select id="demo-secteur" name="secteur" required className={cn(inputCls, "appearance-none")}>
          <option value="">Select…</option>
          <option>Luxury</option>
          <option>Beauty & wellness</option>
          <option>Fashion & DTC</option>
          <option>Specialty retail</option>
          <option>Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="demo-message" className={labelCls}>
          Your context <span className="font-normal text-slate-400">(optional)</span>
        </label>
        <textarea
          id="demo-message"
          name="message"
          rows={4}
          className={cn(inputCls, "h-auto py-3")}
          placeholder="Your current tools, what you're trying to prove…"
        />
      </div>

      <label className="flex items-start gap-3 text-caption text-slate-600">
        <input
          type="checkbox"
          name="consent"
          required
          className="mt-0.5 size-4 shrink-0 appearance-none border-2 border-abyss-900/30 bg-white checked:border-brand-600 checked:bg-brand-600"
        />
        I agree to be contacted by Eyeconic about my request. Data processed
        in the EU, never resold.
      </label>

      <FormStatus state={state} />

      <PixelButton type="submit" variant="brand" className="w-full sm:w-auto" disabled={pending}>
        {pending ? "Sending…" : "Book my demo"}
      </PixelButton>
    </form>
  );
}

/** Compact homepage form — same pipeline (Excel CSV always,
 * Airtable/email when configured). */
export function HomeLeadForm() {
  const [state, formAction, pending] = useActionState<LeadState, FormData>(
    submitLead,
    null
  );

  if (state?.ok) return <SuccessPanel message={state.message} />;

  return (
    <form action={formAction} className="space-y-4">
      <input type="hidden" name="type" value="demo" />
      <input type="hidden" name="source" value="accueil" />

      <div>
        <label htmlFor="home-nom" className={labelCls}>
          Full name
        </label>
        <input id="home-nom" name="nom" required autoComplete="name" className={inputCls} />
      </div>
      <div>
        <label htmlFor="home-email" className={labelCls}>
          Work email
        </label>
        <input
          id="home-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className={inputCls}
          placeholder="you@yourbrand.com"
        />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="home-societe" className={labelCls}>
            Brand or banner
          </label>
          <input id="home-societe" name="societe" required autoComplete="organization" className={inputCls} />
        </div>
        <div>
          <label htmlFor="home-tel" className={labelCls}>
            Phone <span className="font-normal text-slate-400">(optional)</span>
          </label>
          <input id="home-tel" name="telephone" type="tel" autoComplete="tel" className={inputCls} />
        </div>
      </div>

      <label className="flex items-start gap-3 text-caption text-slate-600">
        <input
          type="checkbox"
          name="consent"
          required
          className="mt-0.5 size-4 shrink-0 appearance-none border-2 border-abyss-900/30 bg-white checked:border-brand-600 checked:bg-brand-600"
        />
        I agree to be contacted by Eyeconic about my request.
      </label>

      <FormStatus state={state} />

      <PixelButton type="submit" variant="brand" className="w-full" disabled={pending}>
        {pending ? "Sending…" : "Book my demo"}
      </PixelButton>
    </form>
  );
}

/** Short form — free-trial funnel, 2 fields. */
export function EssaiForm({
  source = "site",
  defaultEmail = "",
}: {
  source?: string;
  defaultEmail?: string;
}) {
  const [state, formAction, pending] = useActionState<LeadState, FormData>(
    submitLead,
    null
  );

  if (state?.ok) return <SuccessPanel message={state.message} />;

  return (
    <form action={formAction} className="space-y-5">
      <input type="hidden" name="type" value="essai" />
      <input type="hidden" name="source" value={source} />

      <div>
        <label htmlFor="essai-email" className={labelCls}>
          Work email
        </label>
        <input
          id="essai-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          defaultValue={defaultEmail}
          className={inputCls}
          placeholder="you@yourbrand.com"
        />
      </div>
      <div>
        <label htmlFor="essai-societe" className={labelCls}>
          Brand or banner
        </label>
        <input id="essai-societe" name="societe" required autoComplete="organization" className={inputCls} />
      </div>

      <FormStatus state={state} />

      <PixelButton type="submit" variant="brand" className="w-full" disabled={pending}>
        {pending ? "Creating…" : "Start for free"}
      </PixelButton>
      <p className="text-caption text-slate-400">
        Free Boutique plan · no credit card · data hosted in the EU.
      </p>
    </form>
  );
}
