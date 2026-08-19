"use server";

import { z } from "zod";
import { existsSync } from "fs";
import { appendFile, mkdir, writeFile } from "fs/promises";
import path from "path";

/**
 * Pipeline de leads — mission Antoine 19/08 :
 * formulaire (+ QR tracé en source) → Airtable + e-mail.
 * Sans clés configurées (.env.local, voir docs/INTEGRATIONS.md), chaque
 * lead est ajouté à data/leads.csv, ouvrable directement dans Excel.
 * ⚠ Le CSV vit sur le disque du serveur : fiable en local/VPS, éphémère
 * sur serverless (Vercel) — configurer Airtable avant la mise en ligne.
 */

const leadSchema = z.object({
  type: z.enum(["demo", "essai"]),
  source: z.string().max(40).default("site"),
  nom: z.string().trim().max(120).default(""),
  email: z.email("Adresse e-mail invalide"),
  societe: z.string().trim().min(1, "Indiquez votre marque").max(120),
  fonction: z.string().trim().max(120).default(""),
  boutiques: z.string().trim().max(40).default(""),
  secteur: z.string().trim().max(60).default(""),
  telephone: z.string().trim().max(30).default(""),
  message: z.string().trim().max(2000).default(""),
});

export type LeadState = {
  ok: boolean;
  message: string;
} | null;

export async function submitLead(
  _prev: LeadState,
  formData: FormData
): Promise<LeadState> {
  const raw = Object.fromEntries(
    [
      "type",
      "source",
      "nom",
      "email",
      "societe",
      "fonction",
      "boutiques",
      "secteur",
      "telephone",
      "message",
    ].map((k) => [k, (formData.get(k) as string) ?? ""])
  );

  const parsed = leadSchema.safeParse(raw);
  if (!parsed.success) {
    const first = parsed.error.issues[0];
    return {
      ok: false,
      message: first?.message ?? "Vérifiez les champs du formulaire.",
    };
  }
  if (parsed.data.type === "demo" && formData.get("consent") !== "on") {
    return {
      ok: false,
      message: "Cochez la case de consentement pour envoyer la demande.",
    };
  }

  const lead = { ...parsed.data, date: new Date().toISOString() };

  const results = await Promise.allSettled([
    pushToAirtable(lead),
    appendToCsv(lead),
    sendNotificationEmail(lead),
  ]);

  const anySuccess = results.some(
    (r) => r.status === "fulfilled" && r.value === true
  );
  if (!anySuccess) {
    return {
      ok: false,
      message:
        "Votre demande n'a pas pu être enregistrée. Réessayez, ou écrivez-nous directement.",
    };
  }

  return {
    ok: true,
    message:
      parsed.data.type === "demo"
        ? "Demande envoyée. Nous vous proposons un créneau sous 24 h ouvrées."
        : "C'est parti. Vérifiez votre boîte mail pour activer votre espace.",
  };
}

type Lead = z.infer<typeof leadSchema> & { date: string };

/* — Airtable (si AIRTABLE_TOKEN + AIRTABLE_BASE_ID configurés) — */
async function pushToAirtable(lead: Lead): Promise<boolean> {
  const token = process.env.AIRTABLE_TOKEN;
  const baseId = process.env.AIRTABLE_BASE_ID;
  const table = process.env.AIRTABLE_TABLE_NAME ?? "Leads";
  if (!token || !baseId) return false;

  const res = await fetch(
    `https://api.airtable.com/v0/${baseId}/${encodeURIComponent(table)}`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        records: [
          {
            fields: {
              Type: lead.type,
              Source: lead.source,
              Nom: lead.nom,
              Email: lead.email,
              "Société": lead.societe,
              Fonction: lead.fonction,
              Boutiques: lead.boutiques,
              Secteur: lead.secteur,
              "Téléphone": lead.telephone,
              Message: lead.message,
              Date: lead.date,
            },
          },
        ],
      }),
    }
  );
  if (!res.ok) {
    console.error("[lead] Airtable :", res.status, await res.text());
    return false;
  }
  return true;
}

/* — Repli CSV (Excel) : data/leads.csv — */
const CSV_HEADER =
  "date;type;source;nom;email;societe;fonction;boutiques;secteur;telephone;message\n";

function csvEscape(value: string) {
  return `"${value.replaceAll('"', '""').replaceAll(/\r?\n/g, " ")}"`;
}

async function appendToCsv(lead: Lead): Promise<boolean> {
  try {
    const dir = path.join(process.cwd(), "data");
    const file = path.join(dir, "leads.csv");
    await mkdir(dir, { recursive: true });
    if (!existsSync(file)) {
      // BOM UTF-8 pour qu'Excel lise correctement les accents
      await writeFile(file, "﻿" + CSV_HEADER, "utf8");
    }
    const row =
      [
        lead.date,
        lead.type,
        lead.source,
        lead.nom,
        lead.email,
        lead.societe,
        lead.fonction,
        lead.boutiques,
        lead.secteur,
        lead.telephone,
        lead.message,
      ]
        .map(csvEscape)
        .join(";") + "\n";
    await appendFile(file, row, "utf8");
    return true;
  } catch (err) {
    console.error("[lead] CSV :", err);
    return false;
  }
}

/* — Notification e-mail via Resend (si RESEND_API_KEY configurée) — */
async function sendNotificationEmail(lead: Lead): Promise<boolean> {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.LEAD_NOTIFY_EMAIL;
  if (!apiKey || !to) return false;

  const lines = [
    `Type : ${lead.type === "demo" ? "Demande de démo" : "Essai gratuit"}`,
    `Source : ${lead.source}`,
    lead.nom && `Nom : ${lead.nom}`,
    `E-mail : ${lead.email}`,
    `Société : ${lead.societe}`,
    lead.fonction && `Fonction : ${lead.fonction}`,
    lead.boutiques && `Points de vente : ${lead.boutiques}`,
    lead.secteur && `Secteur : ${lead.secteur}`,
    lead.telephone && `Téléphone : ${lead.telephone}`,
    lead.message && `Message :\n${lead.message}`,
    `Date : ${lead.date}`,
  ].filter(Boolean);

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: process.env.LEAD_FROM_EMAIL ?? "Eyeconic <onboarding@resend.dev>",
      to: [to],
      subject: `[Eyeconic] Nouveau lead ${lead.type} — ${lead.societe}`,
      text: lines.join("\n"),
    }),
  });
  if (!res.ok) {
    console.error("[lead] Resend :", res.status, await res.text());
    return false;
  }
  return true;
}
