import Link from "next/link";
import { QrBlock } from "@/components/marketing/qr-block";
import { HomeLeadForm } from "@/components/marketing/lead-forms";

/**
 * Section 11 — CTA final : le formulaire de démo directement sur
 * l'accueil (les leads partent dans le CSV Excel — et Airtable/e-mail
 * si configurés), avec le QR code pour continuer sur mobile.
 */
export function CtaBanner() {
  return (
    <section className="bg-paper py-20 lg:py-32">
      <div className="container-site">
        <div className="dark grid gap-10 bg-abyss-900 px-6 py-12 shadow-card-hover lg:grid-cols-[minmax(0,5fr)_minmax(0,4fr)] lg:gap-14 lg:px-12 lg:py-16">
          <div className="flex flex-col justify-center">
            <h2 className="font-display text-display-l max-w-xl text-balance text-paper">
              Voyez vos propres données pendant la démo.
            </h2>
            <p className="mt-5 max-w-xl text-body-l text-sky-300">
              Connectez une boutique, importez un export, et regardez ce
              qu&apos;Eyeconic en tire. Sans engagement.
            </p>
            <p className="mt-6">
              <Link
                href="/essai"
                className="text-sm font-medium text-sky-300 underline-offset-4 transition-colors hover:text-paper hover:underline"
              >
                Ou démarrez gratuitement, sans démo →
              </Link>
            </p>

            {/* QR — le même formulaire, depuis un téléphone (source tracée) */}
            <div className="mt-10">
              <QrBlock
                path="/demo"
                title="Ou scannez avec votre téléphone"
                caption="Le formulaire s'ouvre sur mobile — vos informations arrivent au même endroit."
              />
            </div>
          </div>

          <div className="border-2 border-paper/15 bg-white p-6 lg:p-8">
            <HomeLeadForm />
          </div>
        </div>
      </div>
    </section>
  );
}
