# Pipeline de leads — QR code · formulaires · Airtable · e-mail

Mission Antoine (19/08) : un QR code en plus des formulaires classiques,
et chaque lead poussé vers un tableur et par e-mail.

## Le circuit

1. **Formulaires** : `/demo` (long, avec consentement RGPD) et `/essai`
   (2 champs). Le champ e-mail du CTA final de l'accueil pré-remplit
   `/essai`.
2. **QR codes** : générés localement (`qrcode`, aucun service tiers) sur
   `/demo` et `/essai`. Ils pointent vers la même page avec `?src=qr` :
   chaque scan est tracé `source = qr` dans les données (mesure
   web vs terrain/print).
3. **Server action** `app/actions/lead.ts` (validation zod) qui pousse
   en parallèle vers :
   - **Airtable** — si `AIRTABLE_TOKEN` + `AIRTABLE_BASE_ID` sont
     configurés (voir `.env.example` pour le schéma de la table) ;
   - **CSV Excel** — `data/leads.csv` (UTF-8 BOM, séparateur `;`,
     s'ouvre proprement dans Excel). Toujours actif. ⚠ Fichier local au
     serveur : fiable en local/VPS, éphémère sur Vercel — configurer
     Airtable avant la mise en production ;
   - **E-mail** — notification à `LEAD_NOTIFY_EMAIL` via Resend si
     `RESEND_API_KEY` est configurée.

La soumission réussit si au moins une destination a accepté le lead ;
sinon le formulaire affiche une erreur actionnable.

## À configurer (aucun compte créé à ta place)

- [ ] `NEXT_PUBLIC_SITE_URL` — sinon les QR pointent sur localhost.
- [ ] Compte Airtable + token + base « Leads » (`.env.local`).
- [ ] Compte Resend (gratuit) + clé API + e-mail destinataire.
- [ ] Vérifier un domaine expéditeur chez Resend (sinon
  `onboarding@resend.dev`).

## Alternative « Excel en ligne »

Si tu préfères Google Sheets/Excel 365 à Airtable : remplacer
`pushToAirtable` par un webhook Make/Zapier ou l'API Graph — me
demander, c'est une fonction à changer dans `app/actions/lead.ts`.
