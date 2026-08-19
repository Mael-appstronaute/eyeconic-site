"use client";

import { useEffect, useRef } from "react";

/**
 * Barre de progression de scroll — 2px, dégradé de marque à 90deg
 * (règle charte : 90deg sur les barres horizontales).
 * scaleX piloté hors React pour éviter tout re-render au scroll.
 */
export function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const bar = barRef.current;
    if (!bar) return;
    let raf = 0;
    const update = () => {
      raf = 0;
      const max =
        document.documentElement.scrollHeight - window.innerHeight;
      const p = max > 0 ? window.scrollY / max : 0;
      bar.style.transform = `scaleX(${p})`;
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

  return (
    <div aria-hidden="true" className="absolute inset-x-0 top-0 h-[2px]">
      <div
        ref={barRef}
        className="bg-gradient-brand-h h-full w-full origin-left scale-x-0"
      />
    </div>
  );
}
