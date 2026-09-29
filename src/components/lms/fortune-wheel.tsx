"use client";

/* ── FortuneWheel · Ruota della fortuna premium (v9.1) ────────────────
   Rueda de casino estilo veneciano: aro dorado con bombillas que
   parpadean, 8 gajos con etiquetas radiales, mozzo central con la
   Stella d'Italia, puntero con rubí que "tiquea" al girar y
   celebración con destellos dorados al ganar el premio.
   La lógica del giro (ángulo → premio) vive en premi.tsx.        */

import { motion } from "framer-motion";
import { WHEEL_PRIZES } from "@/lib/lms/quests";

export const SEG = 360 / WHEEL_PRIZES.length;

const C = 160;        // centro del viewBox 320×320
const R_FACE = 126;   // radio de los gajos
const R_RIM = 141;    // radio del aro (donde van las bombillas)
const N_BULBS = 20;

/** Cara de cada gajo (id → colores fijos, funciona igual en claro y oscuro) */
const FACE: Record<string, { fill: string; text: string; outline: string }> = {
  c15:     { fill: "#128a54", text: "#ffffff", outline: "rgba(0,0,0,.32)" },
  c25:     { fill: "#f5ead0", text: "#3a2a12", outline: "rgba(255,255,255,.7)" },
  c40:     { fill: "#96261d", text: "#ffe9b0", outline: "rgba(0,0,0,.32)" },
  x20:     { fill: "#3a7ca5", text: "#ffffff", outline: "rgba(0,0,0,.32)" },
  x35:     { fill: "#0a5c38", text: "#ffffff", outline: "rgba(0,0,0,.32)" },
  freeze:  { fill: "#d9edf7", text: "#1d4257", outline: "rgba(255,255,255,.7)" },
  boost:   { fill: "#c96f45", text: "#ffffff", outline: "rgba(0,0,0,.32)" },
  jackpot: { fill: "#5b4094", text: "#ffe9b0", outline: "rgba(0,0,0,.32)" },
};

/** Texto corto que cabe en radial dentro del gajo */
const SHORT: Record<string, string> = {
  c15: "15", c25: "25", c40: "40",
  x20: "20 XP", x35: "35 XP",
  freeze: "+1", boost: "2×", jackpot: "60",
};

const rad = (deg: number) => (deg * Math.PI) / 180;
const px = (deg: number, r: number) => C + r * Math.sin(rad(deg));
const py = (deg: number, r: number) => C - r * Math.cos(rad(deg));

/** Path de un gajo: desde el centro, horario, 0° = arriba (12 en punto) */
function segPath(i: number, r = R_FACE) {
  return `M${C} ${C} L${px(i * SEG, r).toFixed(2)} ${py(i * SEG, r).toFixed(2)} A${r} ${r} 0 0 1 ${px((i + 1) * SEG, r).toFixed(2)} ${py((i + 1) * SEG, r).toFixed(2)} Z`;
}

/** Estrella de 5 puntas (la Stella d'Italia del mozzo) */
function starPoints(cx: number, cy: number, R: number, r: number) {
  const pts: string[] = [];
  for (let k = 0; k < 5; k++) {
    const ao = -Math.PI / 2 + (k * 2 * Math.PI) / 5;
    const ai = ao + Math.PI / 5;
    pts.push(`${(cx + R * Math.cos(ao)).toFixed(1)},${(cy - R * Math.sin(ao)).toFixed(1)}`);
    pts.push(`${(cx + r * Math.cos(ai)).toFixed(1)},${(cy - r * Math.sin(ai)).toFixed(1)}`);
  }
  return pts.join(" ");
}

const BULBS = Array.from({ length: N_BULBS }, (_, k) => k * (360 / N_BULBS));
const JACK_IDX = WHEEL_PRIZES.findIndex((p) => p.id === "jackpot");
const SPARKS = ["✨", "🪙", "⭐", "🪙", "✨", "💎", "🪙", "⭐", "✨", "🪙", "⭐", "✨"];

export function FortuneWheel({ rotation, wonKey }: { rotation: number; wonKey: number }) {
  return (
    <>
      <svg
        viewBox="0 0 320 320"
        className="h-full w-full"
        role="img"
        aria-label="Ruota della fortuna"
        style={{ filter: "drop-shadow(0 12px 20px rgba(0,0,0,.30))" }}
      >
        <defs>
          <linearGradient id="fwRim" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#f6dfa0" />
            <stop offset=".35" stopColor="#c9862b" />
            <stop offset=".65" stopColor="#8a5c14" />
            <stop offset="1" stopColor="#e8c476" />
          </linearGradient>
          <radialGradient id="fwHub">
            <stop offset="0" stopColor="#ffe9b0" />
            <stop offset=".6" stopColor="#c9862b" />
            <stop offset="1" stopColor="#9c6512" />
          </radialGradient>
          <radialGradient id="fwDish">
            <stop offset="0" stopColor="rgba(255,255,255,.07)" />
            <stop offset=".45" stopColor="rgba(255,255,255,0)" />
            <stop offset=".78" stopColor="rgba(0,0,0,0)" />
            <stop offset="1" stopColor="rgba(0,0,0,.24)" />
          </radialGradient>
          <radialGradient id="fwSpec">
            <stop offset="0" stopColor="rgba(255,255,255,.16)" />
            <stop offset="1" stopColor="rgba(255,255,255,0)" />
          </radialGradient>
          <radialGradient id="fwJack">
            <stop offset="0" stopColor="rgba(255,233,176,.65)" />
            <stop offset="1" stopColor="rgba(255,233,176,0)" />
          </radialGradient>
          <linearGradient id="fwPtr" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#f2ce72" />
            <stop offset="1" stopColor="#b87f1e" />
          </linearGradient>
        </defs>

        {/* aro dorado con borde metálico (estático) */}
        <circle cx={C} cy={C} r={R_RIM} fill="none" stroke="url(#fwRim)" strokeWidth="22" />
        <circle cx={C} cy={C} r={R_RIM + 11} fill="none" stroke="#7a4f10" strokeWidth="1.6" />
        <circle cx={C} cy={C} r={R_RIM - 11} fill="none" stroke="#7a4f10" strokeWidth="1.6" />

        {/* bombillas alternas (más rápidas mientras gira vía .fw-spin) */}
        {BULBS.map((a, k) => (
          <g key={a} className={k % 2 ? "fw-bulbs-b" : "fw-bulbs-a"}>
            <circle cx={px(a, R_RIM)} cy={py(a, R_RIM)} r="7" fill="#ffd76b" opacity=".3" />
            <circle cx={px(a, R_RIM)} cy={py(a, R_RIM)} r="4" fill="#fff6d8" stroke="#e0a94e" strokeWidth=".6" />
          </g>
        ))}

        {/* disco base oscuro: separación entre gajos y aro */}
        <circle cx={C} cy={C} r={R_FACE + 2.5} fill="#1c160c" />

        {/* ── parte giratoria ── */}
        <g
          style={{
            transform: `rotate(${rotation}deg)`,
            transformOrigin: `${C}px ${C}px`,
            transformBox: "view-box",
            transition: "transform 4s cubic-bezier(0.15, 0.9, 0.28, 1)",
          }}
        >
          {WHEEL_PRIZES.map((p, i) => (
            <path key={p.id} d={segPath(i)} fill={FACE[p.id]?.fill ?? "#128a54"} />
          ))}

          {/* brillo dorado pulsante sobre el jackpot */}
          {JACK_IDX >= 0 && <path d={segPath(JACK_IDX)} fill="url(#fwJack)" className="fw-jackpot" />}

          {/* separadores dorados entre gajos */}
          {WHEEL_PRIZES.map((_, i) => (
            <line
              key={i}
              x1={px(i * SEG, 24)} y1={py(i * SEG, 24)}
              x2={px(i * SEG, R_FACE)} y2={py(i * SEG, R_FACE)}
              stroke="#e8c476" strokeWidth="2" strokeOpacity=".9" strokeLinecap="round"
            />
          ))}
          <circle cx={C} cy={C} r={R_FACE} fill="none" stroke="#e8c476" strokeWidth="3" />

          {/* etiquetas radiales: valor + emoji, leídos del centro hacia fuera */}
          {WHEEL_PRIZES.map((p, i) => {
            const f = FACE[p.id] ?? FACE.c15;
            return (
              <g key={p.id} transform={`rotate(${i * SEG + SEG / 2} ${C} ${C})`}>
                <text
                  x={C} y={C - 62}
                  transform={`rotate(-90 ${C} ${C - 62})`}
                  textAnchor="middle" dominantBaseline="middle"
                  fontSize="12.5" fontWeight="800" letterSpacing="1.2"
                  fill={f.text} stroke={f.outline} strokeWidth="2.4" paintOrder="stroke"
                  style={{ textTransform: "uppercase" }}
                >
                  {SHORT[p.id] ?? p.label}
                </text>
                <text
                  x={C} y={C - 99}
                  transform={`rotate(-90 ${C} ${C - 99})`}
                  textAnchor="middle" dominantBaseline="middle"
                  fontSize="23" className="select-none"
                  style={{ filter: "drop-shadow(0 1px 1px rgba(0,0,0,.35))" }}
                >
                  {p.emoji}
                </text>
              </g>
            );
          })}

          {/* mozzo central: anillo dorado + Stella d'Italia */}
          <circle cx={C} cy={C} r="31" fill="url(#fwHub)" stroke="#7a4f10" strokeWidth="2" />
          <circle cx={C} cy={C} r="24" fill="#0b3f28" stroke="#e8c476" strokeWidth="1.2" />
          <polygon points={starPoints(C, C, 13.5, 5.6)} fill="#f2ce72" stroke="#9c6512" strokeWidth="1" strokeLinejoin="round" />
        </g>

        {/* profundidad: sombreado cóncavo + reflejo superior */}
        <circle cx={C} cy={C} r={R_FACE} fill="url(#fwDish)" />
        <ellipse cx={C - 42} cy={C - 48} rx="92" ry="66" fill="url(#fwSpec)" />

        {/* puntero con rubí (estático, tiquea mientras gira) */}
        <g className="fw-pointer" style={{ filter: "drop-shadow(0 3px 3px rgba(0,0,0,.35))" }}>
          <path
            d={`M${C} 46 L${C - 13.5} 14 C${C - 13.5} 7 ${C + 13.5} 7 ${C + 13.5} 14 Z`}
            fill="url(#fwPtr)" stroke="#7a4f10" strokeWidth="1.5" strokeLinejoin="round"
          />
          <circle cx={C} cy={C - 143} r="5" fill="#c0392b" stroke="#7a4f10" strokeWidth="1" />
          <circle cx={C - 1.6} cy={C - 144.6} r="1.5" fill="#ff9d90" />
        </g>
      </svg>

      {/* celebración: anillo dorado expansivo + destellos radiales */}
      {wonKey > 0 && (
        <>
          <motion.div
            key={`ring-${wonKey}`}
            className="pointer-events-none absolute inset-0 z-10 rounded-full border-4 border-oro"
            initial={{ opacity: 0.85, scale: 0.7 }}
            animate={{ opacity: 0, scale: 1.15 }}
            transition={{ duration: 0.95, ease: "easeOut" }}
          />
          <div key={`sparks-${wonKey}`} className="pointer-events-none absolute inset-0 z-20">
            {SPARKS.map((s, i) => {
              const a = (i / SPARKS.length) * Math.PI * 2 + 0.35;
              const d = 118 + (i % 3) * 16;
              return (
                <motion.span
                  key={i}
                  className="absolute left-1/2 top-1/2 text-lg"
                  initial={{ x: 0, y: 0, scale: 0.3, opacity: 1 }}
                  animate={{ x: Math.cos(a) * d, y: Math.sin(a) * d, scale: 1.05, rotate: i % 2 ? 160 : -120, opacity: 0 }}
                  transition={{ duration: 0.9 + (i % 4) * 0.11, ease: "easeOut" }}
                >
                  {s}
                </motion.span>
              );
            })}
          </div>
        </>
      )}
    </>
  );
}
