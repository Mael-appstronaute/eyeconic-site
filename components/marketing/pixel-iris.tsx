"use client";

import { useEffect, useRef, useState } from "react";

/**
 * La signature « l'iris qui scanne » — direction B : le scan traverse tout.
 *
 * Grille de pixels plein fond du hero, en forme d'œil (vesica) dont la
 * pupille — vide — accueille le texte. Une colonne de balayage traverse
 * la grille en paliers (jamais d'easing continu) et allume 8–12 % des
 * cellules par grappes de 2 à 4 : chaque grappe est un signal client.
 * Au survol d'un pixel allumé, une micro-carte client s'affiche
 * ([DONNÉES DÉMO]). N'existe sous cette forme que sur le hero.
 *
 * Contrat charte : pixels allumés = seul emploi du dégradé de marque ici,
 * resserré #6a94d3 → #4c92da (contraste sur fond sombre).
 */

const CELL = 16; // grille alignée base 8
const SQUARE = 12;
const SWEEP_MS = 7000; // durée d'un balayage complet
const LIT_RATIO = 0.1; // 8–12 % : la rareté est le message

type Cell = {
  col: number;
  row: number;
  inEye: boolean;
  onPupilEdge: boolean;
  baseAlpha: number;
  signal: boolean; // appartient à une grappe
  litAt: number | null; // colonne de scan qui l'a allumé
};

type HoverCard = {
  x: number;
  y: number;
  profile: (typeof DEMO_PROFILES)[number];
};

const DEMO_PROFILES = [
  { name: "C. Morel", last: "Sac cabas — il y a 12 j", signal: "A revu la fiche produit hier" },
  { name: "A. Nakamura", last: "Escarpins — il y a 34 j", signal: "Demande de taille en DM" },
  { name: "S. Benali", last: "Parfum 100 ml — il y a 61 j", signal: "Réachat habituel dépassé" },
  { name: "M. Fournier", last: "Montre acier — il y a 8 j", signal: "A cliqué l'invitation privée" },
  { name: "L. Berg", last: "Manteau laine — il y a 90 j", signal: "De passage en ville cette semaine" },
];

/* PRNG déterministe — le motif est identique à chaque visite */
function mulberry32(seed: number) {
  return () => {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function buildGrid(width: number, height: number): Cell[] {
  const cols = Math.ceil(width / CELL);
  const rows = Math.ceil(height / CELL);
  const rand = mulberry32(20260819);
  const cells: Cell[] = [];

  const cx = cols / 2;
  const cy = rows / 2;
  /* Pupille elliptique : la zone vide où vit le texte */
  const pupilRx = Math.min(cols * 0.36, 48);
  const pupilRy = Math.min(rows * 0.48, 21);

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      /* Œil en vesica : hauteur maximale au centre, pointes aux bords */
      const nx = (col - cx) / cx; // -1 → 1
      const eyeHalf = rows * 0.5 * Math.pow(Math.max(0, 1 - nx * nx), 0.65);
      const inEye = Math.abs(row - cy) < eyeHalf;

      const pd =
        ((col - cx) * (col - cx)) / (pupilRx * pupilRx) +
        ((row - cy) * (row - cy)) / (pupilRy * pupilRy);
      const inPupil = pd < 1;
      const onPupilEdge = !inPupil && pd < 1.35;

      cells.push({
        col,
        row,
        inEye: inEye && !inPupil,
        onPupilEdge,
        baseAlpha: 0.05 + rand() * 0.07,
        signal: false,
        litAt: null,
      });
    }
  }

  /* Grappes de signaux : 2–4 cellules adjacentes, budget LIT_RATIO */
  const eligible = cells.filter((c) => c.inEye && !c.onPupilEdge);
  const budget = Math.floor(eligible.length * LIT_RATIO);
  const byKey = new Map(cells.map((c) => [`${c.col}:${c.row}`, c]));
  let lit = 0;
  let guard = 0;
  while (lit < budget && guard < 5000) {
    guard++;
    const seed = eligible[Math.floor(rand() * eligible.length)];
    if (seed.signal) continue;
    const size = 2 + Math.floor(rand() * 3);
    let c: Cell | undefined = seed;
    for (let i = 0; i < size && c; i++) {
      if (!c.signal && c.inEye) {
        c.signal = true;
        lit++;
      }
      const dir = Math.floor(rand() * 4);
      const nk =
        dir === 0
          ? `${c.col + 1}:${c.row}`
          : dir === 1
            ? `${c.col - 1}:${c.row}`
            : dir === 2
              ? `${c.col}:${c.row + 1}`
              : `${c.col}:${c.row - 1}`;
      c = byKey.get(nk);
    }
  }
  return cells;
}

/* Couleur d'un signal selon sa colonne — dégradé resserré, 90deg */
function signalColor(col: number, cols: number): [number, number, number] {
  const t = col / cols;
  // #6a94d3 → #4c92da
  return [
    Math.round(0x6a + (0x4c - 0x6a) * t),
    Math.round(0x94 + (0x92 - 0x94) * t),
    Math.round(0xd3 + (0xda - 0xd3) * t),
  ];
}

export function PixelIris() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const [card, setCard] = useState<HoverCard | null>(null);
  const cardRef = useRef<HoverCard | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let cells: Cell[] = [];
    let cols = 0;
    let rows = 0;
    let raf = 0;
    let running = false;
    let start = performance.now();
    const mouse = { x: -1, y: -1 };

    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      const rect = wrap.getBoundingClientRect();
      canvas.width = Math.round(rect.width * dpr);
      canvas.height = Math.round(rect.height * dpr);
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      cells = buildGrid(rect.width, rect.height);
      cols = Math.ceil(rect.width / CELL);
      rows = Math.ceil(rect.height / CELL);
      if (reduced) drawStatic();
    };

    const draw = (now: number) => {
      const rect = wrap.getBoundingClientRect();
      ctx.clearRect(0, 0, rect.width, rect.height);

      const elapsed = now - start;
      /* Le scan avance par colonne entière — steps(cols), pas d'easing */
      const sweep = (elapsed % SWEEP_MS) / SWEEP_MS;
      const scanCol = Math.floor(sweep * cols);
      const cycle = Math.floor(elapsed / SWEEP_MS);
      /* Respiration de la pupille : 6 paliers sur le cycle de 7 s */
      const breath = Math.floor((elapsed % SWEEP_MS) / (SWEEP_MS / 6)) % 6;
      const breathAlpha = 0.1 + 0.06 * Math.abs(3 - breath);

      let hovered: Cell | null = null;
      let hoverDist = 96;

      for (const c of cells) {
        if (!c.inEye && !c.onPupilEdge) continue;
        const x = c.col * CELL + (CELL - SQUARE) / 2;
        const y = c.row * CELL + (CELL - SQUARE) / 2;

        if (c.onPupilEdge) {
          ctx.fillStyle = `rgba(106,148,211,${breathAlpha.toFixed(3)})`;
          ctx.fillRect(x, y, SQUARE, SQUARE);
          continue;
        }

        const isLitThisCycle = c.signal && c.col <= scanCol;
        if (isLitThisCycle) {
          if (c.litAt === null) c.litAt = cycle;
          const [r, g, b] = signalColor(c.col, cols);
          ctx.fillStyle = `rgba(${r},${g},${b},0.9)`;
          ctx.fillRect(x, y, SQUARE, SQUARE);
          const dx = mouse.x - (x + SQUARE / 2);
          const dy = mouse.y - (y + SQUARE / 2);
          const d = Math.hypot(dx, dy);
          if (d < hoverDist) {
            hoverDist = d;
            hovered = c;
          }
          continue;
        }
        if (c.signal) c.litAt = null;

        /* Colonne de scan : flash de la trame sur son passage */
        const alpha =
          c.col === scanCol ? Math.min(c.baseAlpha + 0.22, 0.4) : c.baseAlpha;
        ctx.fillStyle = `rgba(106,148,211,${alpha.toFixed(3)})`;
        ctx.fillRect(x, y, SQUARE, SQUARE);
      }

      /* Pixel survolé : il se détache — translation d'un cran de grille */
      if (hovered) {
        const x = hovered.col * CELL + (CELL - SQUARE) / 2;
        const y = hovered.row * CELL + (CELL - SQUARE) / 2 - 8;
        const [r, g, b] = signalColor(hovered.col, cols);
        ctx.fillStyle = `rgb(${r},${g},${b})`;
        ctx.fillRect(x - 2, y - 2, SQUARE + 4, SQUARE + 4);
        const next: HoverCard = {
          x: x + SQUARE / 2,
          y,
          profile:
            DEMO_PROFILES[(hovered.col + hovered.row) % DEMO_PROFILES.length],
        };
        if (
          !cardRef.current ||
          cardRef.current.x !== next.x ||
          cardRef.current.y !== next.y
        ) {
          cardRef.current = next;
          setCard(next);
        }
      } else if (cardRef.current) {
        cardRef.current = null;
        setCard(null);
      }
    };

    /* Fallback reduced-motion : une seule passe, grappes déjà allumées */
    const drawStatic = () => {
      const rect = wrap.getBoundingClientRect();
      ctx.clearRect(0, 0, rect.width, rect.height);
      for (const c of cells) {
        if (!c.inEye && !c.onPupilEdge) continue;
        const x = c.col * CELL + (CELL - SQUARE) / 2;
        const y = c.row * CELL + (CELL - SQUARE) / 2;
        if (c.signal) {
          const [r, g, b] = signalColor(c.col, cols);
          ctx.fillStyle = `rgba(${r},${g},${b},0.9)`;
        } else {
          ctx.fillStyle = `rgba(106,148,211,${(c.onPupilEdge ? 0.14 : c.baseAlpha).toFixed(3)})`;
        }
        ctx.fillRect(x, y, SQUARE, SQUARE);
      }
    };

    const loop = (now: number) => {
      draw(now);
      if (running) raf = requestAnimationFrame(loop);
    };

    const startLoop = () => {
      if (running || reduced) return;
      running = true;
      raf = requestAnimationFrame(loop);
    };
    const stopLoop = () => {
      running = false;
      if (raf) cancelAnimationFrame(raf);
    };

    const onMouse = (e: MouseEvent) => {
      const rect = wrap.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    resize();
    if (reduced) {
      drawStatic();
    } else {
      start = performance.now();
      window.addEventListener("mousemove", onMouse, { passive: true });
    }

    /* rAF coupé hors viewport */
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) startLoop();
        else stopLoop();
      },
      { threshold: 0.05 }
    );
    io.observe(wrap);

    const onVis = () => {
      if (document.hidden) stopLoop();
      else startLoop();
    };
    document.addEventListener("visibilitychange", onVis);
    window.addEventListener("resize", resize);

    return () => {
      stopLoop();
      io.disconnect();
      document.removeEventListener("visibilitychange", onVis);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouse);
    };
  }, []);

  return (
    <div ref={wrapRef} aria-hidden="true" className="absolute inset-0">
      <canvas ref={canvasRef} className="absolute inset-0" />
      {card ? (
        <div
          className="pointer-events-none absolute z-10 w-56 -translate-x-1/2 -translate-y-full border-2 border-paper/25 bg-abyss-950 p-3 shadow-hard"
          style={{ left: card.x, top: card.y - 12 }}
        >
          <p className="data-label text-caption font-medium text-paper">
            {card.profile.name}
          </p>
          <p className="mt-1 text-caption text-sky-300">{card.profile.last}</p>
          <p className="mt-0.5 text-caption text-brand-400">
            {card.profile.signal}
          </p>
          <p className="data-label mt-2 text-[10px] uppercase tracking-[0.14em] text-slate-400">
            [Données démo]
          </p>
        </div>
      ) : null}
    </div>
  );
}
