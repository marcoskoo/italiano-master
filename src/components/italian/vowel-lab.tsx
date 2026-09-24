"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Keyboard, MousePointer2, Volume2 } from "lucide-react";
import { clamp, easeOutCubic } from "@/lib/geometry";

/* ── Chart geometry (SVG user units) ─────────────────────────────── */
const W = 560;
const H = 420;
const TOP = 64;
const BOT = 336;
const TL = { x: 128, y: TOP }; // close front  (i)
const TR = { x: 432, y: TOP }; // close back   (u)
const BL = { x: 74, y: BOT }; // open front   (a)
const BR = { x: 486, y: BOT }; // open back   (ɑ)

/** normalized (b = backness 0..1, h = openness 0..1) → pixel */
function toPx(b: number, h: number) {
  const y = TOP + (BOT - TOP) * h;
  const lx = TL.x + (BL.x - TL.x) * h;
  const rx = TR.x + (BR.x - TR.x) * h;
  return { x: lx + (rx - lx) * b, y };
}

/** pixel → normalized, clamped inside the trapezoid */
function toNorm(px: number, py: number) {
  const h = clamp((py - TOP) / (BOT - TOP), 0, 1);
  const lx = TL.x + (BL.x - TL.x) * h;
  const rx = TR.x + (BR.x - TR.x) * h;
  const b = clamp((px - lx) / (rx - lx), 0, 1);
  return { b, h };
}

/* ── The seven pure Italian vowels ───────────────────────────────── */
interface Vowel {
  letter: string;
  ipa: string;
  b: number; // backness
  h: number; // openness (height)
  word: string;
  gloss: string;
  approx: string;
  rounded: boolean;
}

const VOWELS: Vowel[] = [
  { letter: "i", ipa: "i", b: 0, h: 0, word: "vino", gloss: "wine", approx: "the “ee” of see", rounded: false },
  { letter: "é", ipa: "e", b: 0.05, h: 1 / 3, word: "pane", gloss: "bread", approx: "“ay” of say, held short", rounded: false },
  { letter: "è", ipa: "ɛ", b: 0.12, h: 2 / 3, word: "bene", gloss: "well / good", approx: "the “e” of met", rounded: false },
  { letter: "a", ipa: "a", b: 0.44, h: 1, word: "casa", gloss: "home", approx: "the “a” of father", rounded: false },
  { letter: "ò", ipa: "ɔ", b: 0.88, h: 2 / 3, word: "otto", gloss: "eight", approx: "the “aw” of law", rounded: true },
  { letter: "ó", ipa: "o", b: 0.95, h: 1 / 3, word: "sole", gloss: "sun", approx: "“o” of go, without the glide", rounded: true },
  { letter: "u", ipa: "u", b: 1, h: 0, word: "luna", gloss: "moon", approx: "the “oo” of boot", rounded: true },
];

function heightLabel(h: number) {
  if (h < 0.17) return { it: "chiusa", en: "close" };
  if (h < 0.42) return { it: "semi-chiusa", en: "close-mid" };
  if (h < 0.58) return { it: "media", en: "mid" };
  if (h < 0.83) return { it: "semi-aperta", en: "open-mid" };
  return { it: "aperta", en: "open" };
}

function backnessLabel(b: number) {
  if (b < 0.33) return { it: "anteriore", en: "front" };
  if (b < 0.67) return { it: "centrale", en: "central" };
  return { it: "posteriore", en: "back" };
}

export function VowelLab() {
  const [pos, setPos] = useState({ b: 0.16, h: 0.44 });
  const [dragging, setDragging] = useState(false);
  const svgRef = useRef<SVGSVGElement>(null);
  const tweenRef = useRef<number>(0);

  /* ── derived live readouts ───────────────────────────────────── */
  const readout = useMemo(() => {
    let nearest = VOWELS[0];
    let bestDist = Infinity;
    for (const v of VOWELS) {
      const d = Math.hypot(v.b - pos.b, v.h - pos.h);
      if (d < bestDist) {
        bestDist = d;
        nearest = v;
      }
    }
    const match = Math.max(0, Math.round(100 - bestDist * 220));
    const hLab = heightLabel(pos.h);
    const bLab = backnessLabel(pos.b);
    const f1 = Math.round(280 + pos.h * 560);
    const f2 = Math.round(2250 - pos.b * 1500);
    return { nearest, match, hLab, bLab, f1, f2, dist: bestDist };
  }, [pos]);

  const handle = toPx(pos.b, pos.h);

  /* ── pointer dragging with capture ───────────────────────────── */
  const posFromPointer = useCallback((e: React.PointerEvent) => {
    const svg = svgRef.current;
    if (!svg) return null;
    const rect = svg.getBoundingClientRect();
    const scaleX = W / rect.width;
    const scaleY = H / rect.height;
    return toNorm((e.clientX - rect.left) * scaleX, (e.clientY - rect.top) * scaleY);
  }, []);

  const onPointerDown = useCallback(
    (e: React.PointerEvent) => {
      cancelAnimationFrame(tweenRef.current);
      const p = posFromPointer(e);
      if (p) setPos(p);
      setDragging(true);
      svgRef.current?.setPointerCapture(e.pointerId);
    },
    [posFromPointer]
  );

  const onPointerMove = useCallback(
    (e: React.PointerEvent) => {
      if (!dragging) return;
      const p = posFromPointer(e);
      if (p) setPos(p);
    },
    [dragging, posFromPointer]
  );

  const endDrag = useCallback((e: React.PointerEvent) => {
    setDragging(false);
    if (svgRef.current?.hasPointerCapture(e.pointerId)) {
      svgRef.current.releasePointerCapture(e.pointerId);
    }
  }, []);

  /* ── click a vowel dot → snap with a smooth tween ─────────────── */
  const snapTo = useCallback(
    (v: Vowel) => {
      cancelAnimationFrame(tweenRef.current);
      const from = { ...pos };
      const to = { b: v.b, h: v.h };
      const t0 = performance.now();
      const DUR = 300;
      const step = (now: number) => {
        const p = easeOutCubic(clamp((now - t0) / DUR, 0, 1));
        setPos({
          b: from.b + (to.b - from.b) * p,
          h: from.h + (to.h - from.h) * p,
        });
        if (p < 1) tweenRef.current = requestAnimationFrame(step);
      };
      tweenRef.current = requestAnimationFrame(step);
    },
    [pos]
  );

  useEffect(() => () => cancelAnimationFrame(tweenRef.current), []);

  /* ── keyboard nudges on the handle ────────────────────────────── */
  const onKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      const step = e.shiftKey ? 0.1 : 0.04;
      const map: Record<string, { b: number; h: number }> = {
        ArrowLeft: { b: -step, h: 0 },
        ArrowRight: { b: step, h: 0 },
        ArrowUp: { b: 0, h: -step },
        ArrowDown: { b: 0, h: step },
      };
      const d = map[e.key];
      if (!d) return;
      e.preventDefault();
      cancelAnimationFrame(tweenRef.current);
      setPos((p) => ({
        b: clamp(p.b + d.b, 0, 1),
        h: clamp(p.h + d.h, 0, 1),
      }));
    },
    []
  );

  const speak = useCallback((text: string) => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = "it-IT";
    u.rate = 0.85;
    window.speechSynthesis.speak(u);
  }, []);

  const v = readout.nearest;

  return (
    <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8">
      {/* ── Chart card ─────────────────────────────────────────── */}
      <div className="rounded-3xl border border-stone-200/80 bg-white p-4 shadow-sm sm:p-6">
        <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-stone-400">
            Il trapezio vocalico · IPA vowel chart
          </p>
          <div className="flex items-center gap-3 text-[11px] text-stone-400">
            <span className="inline-flex items-center gap-1">
              <MousePointer2 className="h-3 w-3" /> trascina · drag
            </span>
            <span className="inline-flex items-center gap-1">
              <Keyboard className="h-3 w-3" /> frecce · arrows
            </span>
          </div>
        </div>

        <svg
          ref={svgRef}
          viewBox={`0 0 ${W} ${H}`}
          className="h-auto w-full cursor-crosshair touch-none select-none"
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endDrag}
          onPointerCancel={endDrag}
          role="application"
          aria-label="Grafico delle vocali italiane. Trascina il punto o usa i tasti freccia per muovere la posizione della lingua."
        >
          {/* trapezoid body */}
          <polygon
            points={`${TL.x},${TL.y} ${TR.x},${TR.y} ${BR.x},${BR.y} ${BL.x},${BL.y}`}
            fill="#faf6ee"
            stroke="#d8cfbe"
            strokeWidth="1.5"
          />

          {/* grid: close-mid / open-mid horizontals, thirds verticals */}
          {[1 / 3, 2 / 3].map((h) => {
            const a = toPx(0, h);
            const b = toPx(1, h);
            return (
              <line key={`h${h}`} x1={a.x} y1={a.y} x2={b.x} y2={b.y} stroke="#e5ddcd" strokeDasharray="4 5" />
            );
          })}
          {[1 / 3, 2 / 3].map((b) => {
            const a = toPx(b, 0);
            const c = toPx(b, 1);
            return (
              <line key={`v${b}`} x1={a.x} y1={a.y} x2={c.x} y2={c.y} stroke="#efe8da" strokeDasharray="4 5" />
            );
          })}

          {/* edge labels */}
          <text x={(TL.x + TR.x) / 2} y={TOP - 14} textAnchor="middle" className="fill-stone-400" fontSize="11" fontWeight="600">chiusa · close</text>
          <text x={(BL.x + BR.x) / 2} y={BOT + 22} textAnchor="middle" className="fill-stone-400" fontSize="11" fontWeight="600">aperta · open</text>
          <text x={TL.x - 34} y={TOP - 6} textAnchor="end" className="fill-stone-400" fontSize="11" fontWeight="600">anteriore</text>
          <text x={TL.x - 34} y={TOP + 8} textAnchor="end" className="fill-stone-400" fontSize="10">front</text>
          <text x={TR.x + 34} y={TOP - 6} className="fill-stone-400" fontSize="11" fontWeight="600">posteriore</text>
          <text x={TR.x + 34} y={TOP + 8} className="fill-stone-400" fontSize="10">back</text>

          {/* crosshair guide lines from the handle */}
          <line x1={handle.x} y1={handle.y} x2={toPx(0, pos.h).x} y2={handle.y} stroke="#128a54" strokeOpacity="0.25" strokeDasharray="3 4" />
          <line x1={handle.x} y1={handle.y} x2={handle.x} y2={TOP} stroke="#128a54" strokeOpacity="0.25" strokeDasharray="3 4" />

          {/* vowel dots */}
          {VOWELS.map((vw) => {
            const p = toPx(vw.b, vw.h);
            const active = vw.letter === v.letter;
            return (
              <g
                key={vw.letter}
                onPointerDown={(e) => {
                  e.stopPropagation();
                  snapTo(vw);
                }}
                className="cursor-pointer"
                role="button"
                aria-label={`Vocale ${vw.letter}, esempio ${vw.word}`}
              >
                {active && (
                  <circle cx={p.x} cy={p.y} r="20" fill="none" stroke="#128a54" strokeOpacity="0.5" strokeWidth="1.5" className="animate-dot-breathe" style={{ transformOrigin: `${p.x}px ${p.y}px` }} />
                )}
                <circle cx={p.x} cy={p.y} r="26" fill="transparent" />
                <circle
                  cx={p.x}
                  cy={p.y}
                  r="14"
                  fill={active ? "#e7f4ec" : "#ffffff"}
                  stroke={active ? "#128a54" : "#d8cfbe"}
                  strokeWidth={active ? 2 : 1.5}
                />
                <text
                  x={p.x}
                  y={p.y + 1}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fontSize="12"
                  fontStyle="italic"
                  className={`font-display ${active ? "fill-verde-scuro" : "fill-stone-500"}`}
                >
                  {vw.ipa}
                </text>
              </g>
            );
          })}

          {/* the draggable vertex */}
          <g
            tabIndex={0}
            role="slider"
            aria-label="Posizione della lingua · tongue position"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuetext={`${readout.hLab.en} ${readout.hLab.it}, ${readout.bLab.en} ${readout.bLab.it}`}
            onKeyDown={onKeyDown}
            onFocus={() => setDragging(true)}
            onBlur={() => setDragging(false)}
            className="cursor-grab outline-none focus-visible:opacity-80"
            style={{ transform: `translate(${handle.x}px, ${handle.y}px)` }}
          >
            <circle r="24" fill="transparent" />
            <circle r="17" fill="#128a54" fillOpacity={dragging ? 0.28 : 0.16} />
            <circle r="12" fill="#128a54" stroke="#ffffff" strokeWidth="3" />
            <circle r="4.5" fill="#ffffff" />
          </g>
        </svg>
      </div>

      {/* ── Live readout panel ─────────────────────────────────── */}
      <div className="flex flex-col gap-4">
        <div className="relative overflow-hidden rounded-3xl border border-verde/25 bg-gradient-to-br from-verde-tenue to-white p-5 shadow-sm sm:p-6">
          <div className="mb-4 flex items-center justify-between">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-verde-scuro">
              Lettura dal vivo · live readout
            </p>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/80 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-rosso">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-rosso" />
              live
            </span>
          </div>

          {/* nearest vowel */}
          <div className="flex items-center gap-4">
            <div
              className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-white shadow-inner ring-1 ring-verde/20"
              aria-live="polite"
            >
              <span className="font-display text-5xl italic text-verde-scuro">{v.letter}</span>
            </div>
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-1.5">
                <span className="rounded-md bg-inchiostro/90 px-1.5 py-0.5 font-mono text-xs text-white">
                  [{v.ipa}]
                </span>
                <span
                  className={`rounded-md px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wide ${
                    v.rounded ? "bg-oro-tenue text-oro-scuro" : "bg-crema-scura text-stone-500"
                  }`}
                >
                  {v.rounded ? "arrotondata · rounded" : "non arrotondata · unrounded"}
                </span>
              </div>
              <p className="mt-2 truncate font-display text-2xl italic text-inchiostro">
                {v.word} <span className="not-italic text-base text-stone-400">· {v.gloss}</span>
              </p>
              <button
                type="button"
                onClick={() => speak(v.word)}
                className="mt-1.5 inline-flex items-center gap-1.5 rounded-full bg-verde px-3 py-1 text-xs font-semibold text-white transition-transform hover:scale-105 active:scale-95"
                aria-label={`Ascolta la parola ${v.word}`}
              >
                <Volume2 className="h-3.5 w-3.5" /> ascolta
              </button>
            </div>
          </div>

          {/* match meter */}
          <div className="mt-5">
            <div className="mb-1 flex items-baseline justify-between text-xs">
              <span className="font-medium text-stone-500">corrispondenza · match</span>
              <span className="font-mono font-bold text-verde-scuro">{readout.match}%</span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-white">
              <div
                className="h-full rounded-full bg-gradient-to-r from-verde to-oro transition-[width] duration-75"
                style={{ width: `${readout.match}%` }}
              />
            </div>
            <p className="mt-2 text-xs leading-relaxed text-stone-500">
              Sounds like <span className="font-display italic text-inchiostro">{v.approx}</span>. Keep the dot
              inside the pulsing ring to hold a pure Italian vowel.
            </p>
          </div>
        </div>

        {/* height + backness bars */}
        <div className="grid gap-4 rounded-3xl border border-stone-200/80 bg-white p-5 shadow-sm sm:grid-cols-2 sm:p-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-stone-400">
              altezza · height
            </p>
            <p className="mt-1 font-display text-lg italic text-inchiostro">
              {readout.hLab.it} <span className="not-italic text-xs text-stone-400">({readout.hLab.en})</span>
            </p>
            <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-crema-scura">
              <div className="h-full rounded-full bg-verde transition-[width] duration-75" style={{ width: `${pos.h * 100}%` }} />
            </div>
            <p className="mt-1 font-mono text-[11px] text-stone-400">{Math.round(pos.h * 100)}% aperta</p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-stone-400">
              posizione · backness
            </p>
            <p className="mt-1 font-display text-lg italic text-inchiostro">
              {readout.bLab.it} <span className="not-italic text-xs text-stone-400">({readout.bLab.en})</span>
            </p>
            <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-crema-scura">
              <div className="h-full rounded-full bg-oro transition-[width] duration-75" style={{ width: `${pos.b * 100}%` }} />
            </div>
            <p className="mt-1 font-mono text-[11px] text-stone-400">{Math.round(pos.b * 100)}% posteriore</p>
          </div>
        </div>

        {/* formant readouts */}
        <div className="rounded-3xl border border-stone-200/80 bg-inchiostro p-5 text-crema shadow-sm sm:p-6">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-crema/50">
            formanti stimati · estimated formants
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="font-mono text-3xl font-bold text-verde" style={{ color: "#5cba8f" }}>
                {readout.f1}
                <span className="ml-1 text-sm font-normal text-crema/50">Hz</span>
              </p>
              <p className="text-[11px] text-crema/50">F1 · apertura della bocca</p>
              <div className="mt-2 h-1 overflow-hidden rounded-full bg-white/10">
                <div className="h-full rounded-full" style={{ width: `${((readout.f1 - 280) / 560) * 100}%`, background: "#5cba8f" }} />
              </div>
            </div>
            <div>
              <p className="font-mono text-3xl font-bold" style={{ color: "#e0a94e" }}>
                {readout.f2}
                <span className="ml-1 text-sm font-normal text-crema/50">Hz</span>
              </p>
              <p className="text-[11px] text-crema/50">F2 · posizione della lingua</p>
              <div className="mt-2 h-1 overflow-hidden rounded-full bg-white/10">
                <div className="h-full rounded-full" style={{ width: `${((readout.f2 - 750) / 1500) * 100}%`, background: "#e0a94e" }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
