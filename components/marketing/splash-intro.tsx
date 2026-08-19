"use client";

import { useEffect, useState } from "react";

/**
 * Intro d'arrivée — fond noir, l'icône surgit, cligne comme un œil
 * (onde concentrique), le logotype apparaît, puis le rideau se lève.
 * Une fois par session ; ignorée en prefers-reduced-motion (CSS) et
 * masquée avant peinture pour les visites suivantes (data-intro-seen,
 * script inline dans le layout).
 */
const TOTAL_MS = 2700;

export function SplashIntro() {
  const [gone, setGone] = useState(false);

  useEffect(() => {
    if (document.documentElement.dataset.introSeen) {
      setGone(true);
      return;
    }
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const t = setTimeout(
      () => {
        try {
          sessionStorage.setItem("eyeconic-intro", "1");
        } catch {}
        document.documentElement.dataset.introSeen = "1";
        setGone(true);
      },
      reduced ? 0 : TOTAL_MS
    );
    return () => clearTimeout(t);
  }, []);

  if (gone) return null;

  return (
    <div
      aria-hidden="true"
      className="splash-intro fixed inset-0 z-[100] flex flex-col items-center justify-center gap-10 bg-ink [animation:intro-exit_.6s_cubic-bezier(.7,0,.3,1)_2.1s_forwards]"
    >
      <div className="relative">
        {/* Ondes concentriques — le scan de l'œil */}
        <span className="absolute inset-0 rounded-full border-2 border-paper/25 [animation:intro-ring_1.1s_ease-out_.75s_both]" />
        <span className="absolute inset-0 rounded-full border-2 border-brand-500/40 [animation:intro-ring_1.1s_ease-out_1s_both]" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/brand/Eyeconic_Logo_Icon_White.svg"
          alt=""
          className="size-24 [animation:intro-pop_.8s_cubic-bezier(.2,1.2,.3,1)_both,intro-blink_.4s_ease-in-out_1.25s_both] sm:size-28"
        />
      </div>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/brand/Eyeconic_Logo_H_White.svg"
        alt=""
        className="h-6 w-auto [animation:intro-word_.55s_ease-out_1.55s_both] sm:h-7"
      />
    </div>
  );
}
