"use client";

import { useEffect, useRef, useState } from "react";

const SENTENCE =
  "Eyeconic brings together what your clients tell you and what your teams do with it — customer data on one side, in-store execution on the other, in one tool that proves its revenue.";

/**
 * Paragraphe révélé mot à mot au scroll (référence template) :
 * chaque mot passe du gris clair à l'encre selon la progression.
 */
export function WordReveal() {
  const ref = useRef<HTMLParagraphElement>(null);
  const [progress, setProgress] = useState(0);
  const words = SENTENCE.split(" ");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setProgress(1);
      return;
    }
    let raf = 0;
    const update = () => {
      raf = 0;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      // 0 quand le haut entre à 85% du viewport, 1 quand le bas atteint 35%
      const start = vh * 0.85;
      const end = vh * 0.35;
      const p = (start - rect.top) / (start - end + rect.height);
      setProgress(Math.min(1, Math.max(0, p)));
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  const lit = Math.floor(progress * words.length);

  return (
    <section className="bg-paper py-24 lg:py-36">
      <div className="container-site">
        <p
          ref={ref}
          className="mx-auto max-w-4xl text-3xl font-medium leading-snug tracking-tight sm:text-4xl lg:text-[2.75rem]"
        >
          {words.map((word, i) => (
            <span
              key={i}
              className={
                i < lit
                  ? "text-abyss-950 transition-colors duration-200"
                  : "text-abyss-950/20 transition-colors duration-200"
              }
            >
              {word}{" "}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}
