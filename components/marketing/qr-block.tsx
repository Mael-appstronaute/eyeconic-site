import QRCode from "qrcode";

/**
 * QR code généré localement (aucun service tiers) — pointe vers un
 * formulaire du site avec ?src=qr : chaque scan est tracé comme source
 * « qr » dans le pipeline de leads (Airtable/CSV/e-mail).
 * NEXT_PUBLIC_SITE_URL à renseigner en prod pour un QR scannable
 * hors localhost.
 */
export async function QrBlock({
  path,
  title = "Continuez sur mobile",
  caption = "Scannez pour ouvrir ce formulaire sur votre téléphone — vos informations partent au même endroit.",
}: {
  path: string;
  title?: string;
  caption?: string;
}) {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
  const url = `${base}${path}${path.includes("?") ? "&" : "?"}src=qr`;
  const svg = await QRCode.toString(url, {
    type: "svg",
    margin: 0,
    errorCorrectionLevel: "M",
    color: { dark: "#06335a", light: "#ffffff" },
  });

  return (
    <div className="border-2 border-abyss-900/15 bg-white p-5 shadow-card">
      <div className="flex items-start gap-5">
        <div
          aria-hidden="true"
          className="w-28 shrink-0 border-2 border-abyss-900/10 bg-white p-2 [&_svg]:h-auto [&_svg]:w-full"
          dangerouslySetInnerHTML={{ __html: svg }}
        />
        <div className="min-w-0">
          <p className="text-sm font-medium text-abyss-900">{title}</p>
          <p className="mt-1.5 text-caption text-slate-600">{caption}</p>
          <p className="mt-2 break-all text-[11px] text-slate-400">{url}</p>
        </div>
      </div>
    </div>
  );
}
