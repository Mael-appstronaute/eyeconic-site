"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { BlurArt } from "@/components/marketing/blur-art";

/* Fond du hero — React Bits « Aurora » (WebGL, ogl) recolorée dans les
   bleus de la charte. Chargée côté client uniquement ; repli statique
   BlurArt pendant le chargement et en prefers-reduced-motion. */
const Aurora = dynamic(() => import("@/components/Aurora"), {
  ssr: false,
  loading: () => <BlurArt />,
});

export function HeroAurora() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  if (reduced) return <BlurArt />;

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-[85%]">
        <Aurora
          colorStops={["#4c92da", "#a8c5e8", "#6a94d3"]}
          amplitude={1.1}
          blend={0.55}
          speed={0.7}
        />
      </div>
      {/* Fondu vers le papier en bas du hero */}
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-b from-transparent to-paper" />
    </div>
  );
}
