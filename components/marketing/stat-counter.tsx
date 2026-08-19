"use client";

import { useEffect, useRef, useState } from "react";

const STEPS = 8; // compteur en paliers — signature 8-bit, pas d'ease-out

/**
 * Chiffre clé : Orbitron pour la valeur, DM Mono pour le libellé.
 * Compte en 8 paliers visibles à l'entrée dans le viewport.
 */
export function StatCounter({
  value,
  decimals = 0,
  prefix = "",
  suffix = "",
  label,
  unverified = false,
}: {
  value: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  label: string;
  unverified?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [display, setDisplay] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return;
        started.current = true;
        if (reduced) {
          setDisplay(value);
          return;
        }
        let step = 0;
        const tick = () => {
          step++;
          setDisplay((value * step) / STEPS);
          if (step < STEPS) setTimeout(tick, 110);
        };
        tick();
      },
      { threshold: 0.6 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [value]);

  const formatted = display.toLocaleString("fr-FR", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });

  return (
    <div ref={ref}>
      <p className="font-display text-display-l text-paper">
        {prefix}
        {formatted}
        {suffix}
      </p>
      <p className="data-label mt-3 flex items-center gap-2 text-caption uppercase tracking-[0.14em] text-sky-300">
        <span aria-hidden="true" className="size-1.5 bg-brand-500" />
        {label}
      </p>
      {unverified ? (
        <p className="data-label mt-1.5 text-[10px] uppercase tracking-[0.14em] text-slate-400">
          [À valider]
        </p>
      ) : null}
    </div>
  );
}
