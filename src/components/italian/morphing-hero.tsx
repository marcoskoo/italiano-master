"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { easeInOutCubic, mixHex } from "@/lib/geometry";

/* ── Shape definitions ──────────────────────────────────────────────
   Each shape is a radius function r(t), t ∈ [0,1) around a circle.
   The morph interpolates radii (and gradient colors) between shapes. */

const N = 96; // sample points around the circle

interface ShapeDef {
  it: string;
  en: string;
  from: string;
  to: string;
  fn: (t: number) => number;
}

const SHAPES: ShapeDef[] = [
  {
    it: "la nuvola",
    en: "the cloud",
    from: "#22a168",
    to: "#0c5b38",
    fn: (t) =>
      0.74 +
      0.1 * Math.sin(2 * Math.PI * 2 * t + 0.9) +
      0.06 * Math.sin(2 * Math.PI * 3 * t + 2.1) +
      0.03 * Math.sin(2 * Math.PI * 5 * t + 4.2),
  },
  {
    it: "la stella",
    en: "the star",
    from: "#e9a83c",
    to: "#b26e12",
    fn: (t) => 0.58 + 0.4 * Math.pow(Math.abs(Math.cos(Math.PI * 6 * t)), 1.7),
  },
  {
    it: "il fiore",
    en: "the flower",
    from: "#d8574b",
    to: "#96261d",
    fn: (t) =>
      0.62 +
      0.24 * Math.pow(Math.sin(2 * Math.PI * 6 * t), 2) +
      0.02 * Math.sin(2 * Math.PI * 2 * t),
  },
  {
    it: "la gemma",
    en: "the gem",
    from: "#d97b4a",
    to: "#9e4520",
    fn: (t) => {
      const s = (t * 6) % 1;
      return 0.8 / Math.cos((s - 0.5) * (Math.PI / 6));
    },
  },
  {
    it: "il biscotto",
    en: "the biscuit",
    from: "#c08a52",
    to: "#7e5426",
    fn: (t) => {
      const th = 2 * Math.PI * t;
      const d =
        Math.pow(Math.abs(Math.cos(th)), 4) + Math.pow(Math.abs(Math.sin(th)), 4);
      return 0.82 / Math.pow(d, 0.25);
    },
  },
];

const RADII: number[][] = SHAPES.map((s) =>
  Array.from({ length: N }, (_, i) => s.fn(i / N))
);

const CX = 260;
const CY = 260;
const BASE_R = 188;
const HOLD = 1300; // ms resting on a shape
const MORPH = 2400; // ms spent morphing to the next shape
const SEGMENT = HOLD + MORPH;

function buildPath(radii: number[], rot: number, scale: number): string {
  const cos = Math.cos(rot);
  const sin = Math.sin(rot);
  let d = "";
  for (let i = 0; i < radii.length; i++) {
    const a = (i / radii.length) * Math.PI * 2 - Math.PI / 2;
    const r = radii[i] * BASE_R * scale;
    const x = CX + (r * Math.cos(a) * cos - r * Math.sin(a) * sin);
    const y = CY + (r * Math.sin(a) * cos + r * Math.cos(a) * sin);
    d += i === 0 ? `M${x.toFixed(1)},${y.toFixed(1)}` : ` L${x.toFixed(1)},${y.toFixed(1)}`;
  }
  return d + " Z";
}

const FLOATING_WORDS = [
  { it: "ciao", en: "hello", className: "top-2 left-4 sm:left-0", delay: "0s" },
  { it: "sole", en: "sun", className: "top-8 right-2", delay: "1.3s" },
  { it: "amore", en: "love", className: "top-[38%] -left-1", delay: "0.7s" },
  { it: "arte", en: "art", className: "top-[55%] -right-1", delay: "1.9s" },
  { it: "cibo", en: "food", className: "bottom-12 left-4", delay: "2.5s" },
  { it: "musica", en: "music", className: "bottom-20 right-4", delay: "1s" },
];

function subscribeReducedMotion(callback: () => void) {
  const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
  mq.addEventListener("change", callback);
  return () => mq.removeEventListener("change", callback);
}

const getReducedMotion = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const getServerReducedMotion = () => false;

export function MorphingHero() {
  const pathRef = useRef<SVGPathElement>(null);
  const glowRef = useRef<SVGPathElement>(null);
  const stopFromRef = useRef<SVGStopElement>(null);
  const stopToRef = useRef<SVGStopElement>(null);
  const shapeIdxRef = useRef(0);
  const [captionIdx, setCaptionIdx] = useState(0);
  const reduced = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotion,
    getServerReducedMotion
  );

  useEffect(() => {
    if (reduced) {
      // Static render of the first shape — no continuous animation.
      if (pathRef.current && glowRef.current) {
        const d = buildPath(RADII[0], 0, 1);
        pathRef.current.setAttribute("d", d);
        glowRef.current.setAttribute("d", d);
      }
      return;
    }

    let raf = 0;
    const radii = new Array<number>(N);
    const start = performance.now();

    const tick = (now: number) => {
      const elapsed = now - start;
      const cycle = elapsed % (SEGMENT * SHAPES.length);
      const seg = Math.floor(cycle / SEGMENT);
      const within = cycle % SEGMENT;
      const nextSeg = (seg + 1) % SHAPES.length;
      const p =
        within <= HOLD ? 0 : easeInOutCubic((within - HOLD) / MORPH);

      const fromR = RADII[seg];
      const toR = RADII[nextSeg];
      for (let i = 0; i < N; i++) {
        radii[i] = fromR[i] + (toR[i] - fromR[i]) * p;
      }

      const a = SHAPES[seg];
      const b = SHAPES[nextSeg];
      const rot = elapsed * 0.00008; // ~4.6°/s slow spin
      const scale = 1 + 0.014 * Math.sin(elapsed * 0.0011); // breathing
      const d = buildPath(radii, rot, scale);

      pathRef.current?.setAttribute("d", d);
      glowRef.current?.setAttribute("d", d);
      stopFromRef.current?.setAttribute("stop-color", mixHex(a.from, b.from, p));
      stopToRef.current?.setAttribute("stop-color", mixHex(a.to, b.to, p));

      const target = within > HOLD ? nextSeg : seg;
      if (target !== shapeIdxRef.current) {
        shapeIdxRef.current = target;
        setCaptionIdx(target);
      }

      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [reduced]);

  const caption = SHAPES[captionIdx];

  return (
    <div className="mx-auto w-full max-w-[420px] md:max-w-[500px]">
      <div className="relative">
        {/* Floating Italian micro-vocabulary around the shape */}
        {FLOATING_WORDS.map((w) => (
          <div
            key={w.it}
            className={`animate-float absolute z-10 hidden items-center gap-1.5 rounded-full border border-stone-200/80 bg-white/85 px-3 py-1.5 shadow-sm backdrop-blur-sm sm:flex ${w.className}`}
            style={{ animationDelay: w.delay }}
          >
            <span className="font-display text-sm italic text-inchiostro">{w.it}</span>
            <span className="text-[11px] text-stone-400">{w.en}</span>
          </div>
        ))}

        <svg
        viewBox="0 0 520 520"
        className="h-auto w-full"
        role="img"
        aria-label={`Forma che si trasforma continuamente: ${caption.it}, ${caption.en}`}
      >
        <defs>
          <linearGradient id="morphGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop ref={stopFromRef} offset="0%" stopColor={SHAPES[0].from} />
            <stop ref={stopToRef} offset="100%" stopColor={SHAPES[0].to} />
          </linearGradient>
          <filter id="softGlow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="20" />
          </filter>
        </defs>

        {/* morphing aura */}
        <g transform="translate(260,260) scale(1.14) translate(-260,-260)">
          <path
            ref={glowRef}
            fill="url(#morphGrad)"
            opacity={reduced ? 0.14 : 0.22}
            filter="url(#softGlow)"
            d=""
          />
        </g>

        {/* main morphing shape */}
        <path ref={pathRef} fill="url(#morphGrad)" d="" />

        {/* specular sheen */}
        <ellipse
          cx="205"
          cy="175"
          rx="95"
          ry="60"
          fill="#ffffff"
          opacity="0.10"
          transform="rotate(-28 205 175)"
        />
      </svg>
      </div>

      {/* live caption: the morph doubles as a vocabulary micro-lesson */}
      <div className="mt-4 flex flex-col items-center gap-2">
        <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-stone-400">
          la forma si trasforma · the shape morphs
        </p>
        <p className="font-display text-xl italic text-inchiostro">
          {caption.it} <span className="not-italic text-stone-500">· {caption.en}</span>
        </p>
        <div className="flex items-center gap-1.5" aria-hidden="true">
          {SHAPES.map((s, i) => (
            <span
              key={s.it}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                i === captionIdx ? "w-5 bg-verde" : "w-1.5 bg-stone-300"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
