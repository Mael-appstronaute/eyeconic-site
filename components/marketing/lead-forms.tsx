"use client";

import { useActionState } from "react";
import { submitLead, type LeadState } from "@/app/actions/lead";
import { PixelButton } from "@/components/marketing/pixel-button";
import { cn } from "@/lib/utils";

/* Champs partagés — arêtes dures, focus dessiné */
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
      <p className="font-display text-display-m text-abyss-900">Bien reçu.</p>
      <p className="mx-auto mt-3 max-w-md text-body text-slate-600">{message}</p>
    </div>
  );
}

/** Formulaire long — tunnel démo. */
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
            Nom et prénom
          </label>
          <input id="demo-nom" name="nom" required autoComplete="name" className={inputCls} />
        </div>
        <div>
          <label htmlFor="demo-fonction" className={labelCls}>
            Fonction
          </label>
          <input id="demo-fonction" name="fonction" required className={inputCls} placeholder="Directrice CRM, DG retail…" />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="demo-email" className={labelCls}>
            E-mail professionnel
          </label>
          <input id="demo-email" name="email" type="email" required autoComplete="email" className={inputCls} placeholder="prenom@votremarque.com" />
        </div>
        <div>
          <label htmlFor="demo-tel" className={labelCls}>
            Téléphone <span className="font-normal text-slate-400">(optionnel)</span>
          </label>
          <input id="demo-tel" name="telephone" type="tel" autoComplete="tel" className={inputCls} />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="demo-societe" className={labelCls}>
            Marque ou enseigne
          </label>
          <input id="demo-societe" name="societe" required autoComplete="organization" className={inputCls} />
        </div>
        <div>
          <label htmlFor="demo-boutiques" className={labelCls}>
            Points de vente
          </label>
          <select id="demo-boutiques" name="boutiques" required className={cn(inputCls, "appearance-none")}>
            <option value="">Choisir…</option>
            <option>1 à 5</option>
            <option>5 à 20</option>
            <option>20 à 50</option>
            <option>50 à 300</option>
            <option>Plus de 300</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="demo-secteur" className={labelCls}>
          Secteur
        </label>
        <select id="demo-secteur" name="secteur" required className={cn(inputCls, "appearance-none")}>
          <option value="">Choisir…</option>
          <option>Luxe</option>
          <option>Beauté et bien-être</option>
          <option>Mode et DTC</option>
          <option>Retail spécialisé</option>
          <option>Autre</option>
        </select>
      </div>

      <div>
        <label htmlFor="demo-message" className={labelCls}>
          Votre contexte <span className="font-normal text-slate-400">(optionnel)</span>
        </label>
        <textarea
          id="demo-message"
          name="message"
          rows={4}
          className={cn(inputCls, "h-auto py-3")}
          placeholder="Vos outils actuels, ce que vous cherchez à prouver…"
        />
      </div>

      <label className="flex items-start gap-3 text-caption text-slate-600">
        <input
          type="checkbox"
          name="consent"
          required
          className="mt-0.5 size-4 shrink-0 appearance-none border-2 border-abyss-900/30 bg-white checked:border-brand-600 checked:bg-brand-600"
        />
        J&apos;accepte qu&apos;Eyeconic me contacte au sujet de ma demande.
        Données traitées en UE, jamais revendues.
      </label>

      <FormStatus state={state} />

      <PixelButton type="submit" variant="brand" className="w-full sm:w-auto" disabled={pending}>
        {pending ? "Envoi en cours…" : "Réserver ma démo"}
      </PixelButton>
    </form>
  );
}

/** Formulaire compact de l'accueil — envoyé dans le même circuit
 * (CSV Excel toujours, Airtable/e-mail si configurés). */
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
          Nom et prénom
        </label>
        <input id="home-nom" name="nom" required autoComplete="name" className={inputCls} />
      </div>
      <div>
        <label htmlFor="home-email" className={labelCls}>
          E-mail professionnel
        </label>
        <input
          id="home-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className={inputCls}
          placeholder="prenom@votremarque.com"
        />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="home-societe" className={labelCls}>
            Marque ou enseigne
          </label>
          <input id="home-societe" name="societe" required autoComplete="organization" className={inputCls} />
        </div>
        <div>
          <label htmlFor="home-tel" className={labelCls}>
            Téléphone <span className="font-normal text-slate-400">(optionnel)</span>
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
        J&apos;accepte qu&apos;Eyeconic me contacte au sujet de ma demande.
      </label>

      <FormStatus state={state} />

      <PixelButton type="submit" variant="brand" className="w-full" disabled={pending}>
        {pending ? "Envoi en cours…" : "Réserver ma démo"}
      </PixelButton>
    </form>
  );
}

/** Formulaire court — tunnel essai gratuit, 2 champs. */
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
          E-mail professionnel
        </label>
        <input
          id="essai-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          defaultValue={defaultEmail}
          className={inputCls}
          placeholder="prenom@votremarque.com"
        />
      </div>
      <div>
        <label htmlFor="essai-societe" className={labelCls}>
          Marque ou enseigne
        </label>
        <input id="essai-societe" name="societe" required autoComplete="organization" className={inputCls} />
      </div>

      <FormStatus state={state} />

      <PixelButton type="submit" variant="brand" className="w-full" disabled={pending}>
        {pending ? "Création en cours…" : "Démarrer gratuitement"}
      </PixelButton>
      <p className="text-caption text-slate-400">
        Plan Boutique gratuit · sans carte bancaire · données hébergées en UE.
      </p>
    </form>
  );
}
