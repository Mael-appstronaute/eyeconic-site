"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Chiffre clé : Orbitron pour la valeur, DM Sans pour le libellé.
 * Compte de 0 à la valeur en ~0,9 s (ease-out) à l'entrée dans le viewport.
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
        const t0 = performance.now();
        const duration = 900;
        const tick = (now: number) => {
          const p = Math.min((now - t0) / duration, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          setDisplay(value * eased);
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
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
      <p className="font-display text-display-l text-abyss-900">
        {prefix}
        {formatted}
        {suffix}
      </p>
      <p className="mt-3 flex items-center gap-2 text-caption font-medium uppercase tracking-wide text-slate-600">
        <span aria-hidden="true" className="size-1.5 bg-brand-500" />
        {label}
      </p>
      {unverified ? (
        <p className="data-label mt-1 text-[11px] uppercase tracking-wide text-slate-400">
          [À valider]
        </p>
      ) : null}
    </div>
  );
}
