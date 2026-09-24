"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { ArrowDownRight, ArrowUpRight, Music2, Play, Zap } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { catmullRomPath, clamp, type Pt } from "@/lib/geometry";

/* ── Data ─────────────────────────────────────────────────────────── */
type Mode = "statement" | "question" | "exclaim";

interface Phrase {
  it: string;
  en: string;
  syllables: string[];
  stress: number;
  mode: Mode;
}

const PHRASES: Phrase[] = [
  {
    it: "La musica è bella",
    en: "The music is beautiful",
    syllables: ["La", "mu", "si", "ca", "è", "bel", "la"],
    stress: 2,
    mode: "statement",
  },
  {
    it: "Vieni con noi?",
    en: "Are you coming with us?",
    syllables: ["Vie", "ni", "con", "noi"],
    stress: 1,
    mode: "question",
  },
  {
    it: "Che bella sorpresa!",
    en: "What a lovely surprise!",
    syllables: ["Che", "bel", "la", "sor", "pre", "sa"],
    stress: 4,
    mode: "exclaim",
  },
];

const MODES: { id: Mode; it: string; en: string; icon: typeof ArrowUpRight }[] = [
  { id: "statement", it: "dichiarativa", en: "statement ↘", icon: ArrowDownRight },
  { id: "question", it: "interrogativa", en: "question ↗", icon: ArrowUpRight },
  { id: "exclaim", it: "esclamativa", en: "exclamation ‼", icon: Zap },
];

const PRESETS = [
  { label: "calmo", values: { base: 100, range: 28, rate: 3.5, accent: 25 } },
  { label: "neutro", values: { base: 120, range: 60, rate: 4.5, accent: 50 } },
  { label: "entusiasta", values: { base: 142, range: 88, rate: 5.2, accent: 82 } },
  { label: "frettoloso", values: { base: 128, range: 55, rate: 7.5, accent: 60 } },
];

/* ── Contour model (f0 per syllable, Hz) ──────────────────────────── */
function computeContour(
  n: number,
  stress: number,
  mode: Mode,
  base: number,
  rangePct: number,
  accentPct: number
): number[] {
  const R = rangePct / 100;
  return Array.from({ length: n }, (_, i) => {
    const p = n === 1 ? 0 : i / (n - 1);
    let f = base * (1 - 0.1 * p); // natural declination
    if (i === 0 && i !== n - 1) f *= 1 + 0.16 * R;
    if (i === stress && i !== n - 1) f *= 1 + (0.1 + (accentPct / 100) * 0.25) * R;
    if (mode === "statement") {
      if (i === n - 1) f *= 1 - 0.35 * R;
    } else if (mode === "question") {
      if (i === n - 1) f *= 1 + 0.55 * R;
      else if (i === n - 2 && n > 2) f *= 1 + 0.12 * R;
    } else {
      f *= 1 + 0.22 * R;
      if (i === stress) f *= 1 + (0.18 + (accentPct / 100) * 0.3) * R;
      if (i === n - 1) f *= 1 - 0.28 * R;
    }
    return Math.round(f);
  });
}

function computeIntensity(n: number, stress: number, mode: Mode, accentPct: number): number[] {
  return Array.from({ length: n }, (_, i) => {
    let v = 0.32;
    if (i === stress) v = 0.55 + (accentPct / 100) * 0.35;
    if (mode === "exclaim") v += 0.1;
    if (mode === "question" && i >= n - 2) v += 0.12;
    if (mode === "statement" && i === n - 1) v -= 0.06;
    return clamp(v, 0.12, 1);
  });
}

/* ── Plot geometry ────────────────────────────────────────────────── */
const PW = 640;
const PITCH_H = 268;
const INT_H = 150;
const PAD_L = 50;
const PAD_R = 22;
const PAD_T = 22;
const PAD_B = 54;
const F_MIN = 60;
const F_MAX = 340;

export function IntonationStudio() {
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [mode, setMode] = useState<Mode>("statement");
  const [base, setBase] = useState(120);
  const [range, setRange] = useState(60);
  const [rate, setRate] = useState(4.5);
  const [accent, setAccent] = useState(50);
  const [playing, setPlaying] = useState(false);
  const [audioError, setAudioError] = useState(false);

  const audioRef = useRef<AudioContext | null>(null);
  const timerRef = useRef<number>(0);

  useEffect(
    () => () => {
      window.clearTimeout(timerRef.current);
      void audioRef.current?.close().catch(() => undefined);
    },
    []
  );

  const phrase = PHRASES[phraseIdx];

  const { contour, intensity, xs } = useMemo(() => {
    const n = phrase.syllables.length;
    const c = computeContour(n, phrase.stress, mode, base, range, accent);
    const inten = computeIntensity(n, phrase.stress, mode, accent);
    const xs = Array.from(
      { length: n },
      (_, i) =>
        PAD_L +
        (n === 1 ? 0.5 : i / (n - 1)) * (PW - PAD_L - PAD_R)
    );
    return { contour: c, intensity: inten, xs };
  }, [phrase, mode, base, range, accent]);

  const peak = Math.max(...contour);
  const final = contour[contour.length - 1];
  const delta = final - contour[0];
  const duration = contour.length / rate;
  const rising = mode === "question" || delta > 0;

  /* ── plot path builders ─────────────────────────────────────── */
  const pitchPts: Pt[] = contour.map((f, i) => ({
    x: xs[i],
    y: PAD_T + (1 - (f - F_MIN) / (F_MAX - F_MIN)) * (PITCH_H - PAD_T - PAD_B),
  }));
  const pitchLine = catmullRomPath(pitchPts);
  const pitchArea = `${pitchLine} L${xs[xs.length - 1]},${PITCH_H - PAD_B + 6} L${xs[0]},${PITCH_H - PAD_B + 6} Z`;

  const intPts: Pt[] = intensity.map((v, i) => ({
    x: xs[i],
    y: 16 + (1 - v) * (INT_H - 16 - 34),
  }));
  const intLine = catmullRomPath(intPts);
  const intArea = `${intLine} L${xs[xs.length - 1]},${INT_H - 30} L${xs[0]},${INT_H - 30} Z`;

  /* ── Web Audio: play the sculpted melody ────────────────────── */
  const play = useCallback(() => {
    if (playing) return;
    try {
      const Ctor =
        window.AudioContext ??
        (window as unknown as { webkitAudioContext?: typeof AudioContext })
          .webkitAudioContext;
      if (!Ctor) throw new Error("AudioContext unavailable");
      const ctx = (audioRef.current ??= new Ctor());
      void ctx.resume();

      const t0 = ctx.currentTime + 0.08;
      const sylDur = 1 / rate;
      const osc = ctx.createOscillator();
      osc.type = "triangle";
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.frequency.setValueAtTime(contour[0], t0);
      gain.gain.setValueAtTime(0.0001, t0);
      contour.forEach((f, i) => {
        const s = t0 + i * sylDur;
        osc.frequency.linearRampToValueAtTime(f, s + sylDur * 0.55);
        const amp = 0.015 + intensity[i] * 0.11;
        gain.gain.linearRampToValueAtTime(amp, s + sylDur * 0.25);
        gain.gain.linearRampToValueAtTime(0.02, s + sylDur * 0.9);
      });
      const end = t0 + contour.length * sylDur;
      gain.gain.linearRampToValueAtTime(0.0001, end);
      osc.start(t0);
      osc.stop(end + 0.08);

      setPlaying(true);
      window.clearTimeout(timerRef.current);
      timerRef.current = window.setTimeout(
        () => setPlaying(false),
        (end - ctx.currentTime) * 1000 + 180
      );
    } catch {
      setAudioError(true);
    }
  }, [playing, contour, intensity, rate]);

  const sliderCls =
    "[&_[data-slot=slider-range]]:bg-verde [&_[data-slot=slider-thumb]]:border-verde [&_[data-slot=slider-thumb]]:bg-white";

  return (
    <div className="rounded-3xl border border-stone-200/80 bg-white p-5 shadow-sm sm:p-7">
      {/* header */}
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-stone-400">
            curves you conduct · le curve che dirigi
          </p>
          <p className="mt-0.5 font-display text-xl italic text-inchiostro">
            modella la melodia della frase
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-1.5">
          {PRESETS.map((p) => (
            <button
              key={p.label}
              type="button"
              onClick={() => {
                setBase(p.values.base);
                setRange(p.values.range);
                setRate(p.values.rate);
                setAccent(p.values.accent);
              }}
              className="rounded-full border border-stone-200 bg-crema px-3 py-1.5 text-xs font-semibold text-stone-600 transition-colors hover:border-verde hover:bg-verde-tenue hover:text-verde-scuro"
            >
              {p.label}
            </button>
          ))}
        </div>
      </div>

      {/* phrase + mode selectors */}
      <div className="mb-6 grid gap-3 md:grid-cols-[1.2fr_1fr]">
        <div className="flex flex-col gap-1.5" role="group" aria-label="Scegli la frase">
          {PHRASES.map((p, i) => (
            <button
              key={p.it}
              type="button"
              onClick={() => {
                setPhraseIdx(i);
                setMode(p.mode);
              }}
              aria-pressed={phraseIdx === i}
              className={`flex min-h-11 items-center justify-between gap-2 rounded-2xl border px-4 py-2.5 text-left transition-all ${
                phraseIdx === i
                  ? "border-verde bg-verde-tenue shadow-sm"
                  : "border-stone-200 bg-white hover:border-verde/50"
              }`}
            >
              <span className="font-display text-base italic text-inchiostro">{p.it}</span>
              <span className="hidden text-xs text-stone-400 sm:block">{p.en}</span>
            </button>
          ))}
        </div>
        <div className="flex flex-col gap-1.5" role="group" aria-label="Modalità della frase">
          {MODES.map((m) => {
            const Icon = m.icon;
            const active = mode === m.id;
            return (
              <button
                key={m.id}
                type="button"
                onClick={() => setMode(m.id)}
                aria-pressed={active}
                className={`flex min-h-11 flex-1 items-center justify-center gap-2 rounded-2xl border px-4 py-2.5 text-sm font-semibold transition-all ${
                  active
                    ? m.id === "question"
                      ? "border-rosso bg-rosso-tenue text-rosso-scuro"
                      : "border-verde bg-verde-tenue text-verde-scuro"
                    : "border-stone-200 bg-white text-stone-500 hover:border-stone-300"
                }`}
              >
                <Icon className="h-4 w-4" />
                {m.it}
                <span className="text-[11px] font-normal opacity-60">{m.en}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-[270px_1fr]">
        {/* ── sliders + readouts ─────────────────────────────── */}
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-4">
            <div>
              <div className="mb-1.5 flex items-baseline justify-between">
                <label className="text-xs font-semibold uppercase tracking-wide text-stone-500">
                  tono di base · pitch
                </label>
                <span className="font-mono text-xs font-bold text-verde-scuro">{base} Hz</span>
              </div>
              <Slider min={90} max={200} step={1} value={[base]} onValueChange={([v]) => setBase(v)} className={sliderCls} aria-label="Tono di base" />
            </div>
            <div>
              <div className="mb-1.5 flex items-baseline justify-between">
                <label className="text-xs font-semibold uppercase tracking-wide text-stone-500">
                  carica emotiva · range
                </label>
                <span className="font-mono text-xs font-bold text-verde-scuro">{range}%</span>
              </div>
              <Slider min={15} max={100} step={1} value={[range]} onValueChange={([v]) => setRange(v)} className={sliderCls} aria-label="Carica emotiva" />
            </div>
            <div>
              <div className="mb-1.5 flex items-baseline justify-between">
                <label className="text-xs font-semibold uppercase tracking-wide text-stone-500">
                  velocità · rate
                </label>
                <span className="font-mono text-xs font-bold text-verde-scuro">{rate.toFixed(1)} syl/s</span>
              </div>
              <Slider min={2} max={8} step={0.1} value={[rate]} onValueChange={([v]) => setRate(v)} className={sliderCls} aria-label="Velocità" />
            </div>
            <div>
              <div className="mb-1.5 flex items-baseline justify-between">
                <label className="text-xs font-semibold uppercase tracking-wide text-stone-500">
                  accento · stress boost
                </label>
                <span className="font-mono text-xs font-bold text-verde-scuro">{accent}%</span>
              </div>
              <Slider min={0} max={100} step={1} value={[accent]} onValueChange={([v]) => setAccent(v)} className={sliderCls} aria-label="Accento" />
            </div>
          </div>

          {/* live numbers */}
          <div className="grid grid-cols-2 gap-2 font-mono text-xs">
            <div className="rounded-xl bg-crema px-3 py-2">
              <p className="text-[10px] uppercase text-stone-400">picco · peak</p>
              <p className="text-sm font-bold text-inchiostro">{peak} Hz</p>
            </div>
            <div className="rounded-xl bg-crema px-3 py-2">
              <p className="text-[10px] uppercase text-stone-400">finale · final</p>
              <p className="text-sm font-bold text-inchiostro">{final} Hz</p>
            </div>
            <div className="rounded-xl bg-crema px-3 py-2">
              <p className="text-[10px] uppercase text-stone-400">Δ melodia</p>
              <p className={`text-sm font-bold ${rising ? "text-rosso" : "text-verde-scuro"}`}>
                {delta >= 0 ? "+" : ""}{delta} Hz {rising ? "↗" : "↘"}
              </p>
            </div>
            <div className="rounded-xl bg-crema px-3 py-2">
              <p className="text-[10px] uppercase text-stone-400">durata</p>
              <p className="text-sm font-bold text-inchiostro">{duration.toFixed(1)} s</p>
            </div>
          </div>

          <button
            type="button"
            onClick={play}
            disabled={playing}
            className={`inline-flex min-h-12 items-center justify-center gap-2.5 rounded-2xl px-5 py-3 font-semibold text-white shadow-md transition-all ${
              playing ? "cursor-wait bg-verde-scuro/70" : "bg-verde hover:scale-[1.02] hover:bg-verde-scuro active:scale-95"
            }`}
          >
            {playing ? (
              <>
                <span className="flex h-4 items-end gap-[3px]" aria-hidden="true">
                  {[0, 1, 2].map((i) => (
                    <span key={i} className="animate-eq block h-4 w-[3px] origin-bottom rounded-full bg-white" style={{ animationDelay: `${i * 0.15}s` }} />
                  ))}
                </span>
                in riproduzione…
              </>
            ) : (
              <>
                <Play className="h-4 w-4" fill="currentColor" /> ascolta la curva
              </>
            )}
          </button>
          {audioError && (
            <p className="text-center text-xs text-rosso" role="alert">
              Audio non disponibile su questo dispositivo — ma le curve restano vive.
            </p>
          )}
        </div>

        {/* ── the two live plots ──────────────────────────────── */}
        <div className="flex flex-col gap-4">
          {/* pitch contour */}
          <figure className="m-0">
            <figcaption className="mb-1 flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-[0.14em] text-stone-400">
                intonazione · pitch contour (Hz)
              </span>
              <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-stone-400">
                <Music2 className="h-3.5 w-3.5 text-oro" /> sillaba tonica = oro
              </span>
            </figcaption>
            <svg viewBox={`0 0 ${PW} ${PITCH_H}`} className="h-auto w-full" role="img" aria-label="Grafico dell'intonazione della frase">
              {/* grid */}
              {[100, 150, 200, 250, 300].map((f) => {
                const y = PAD_T + (1 - (f - F_MIN) / (F_MAX - F_MIN)) * (PITCH_H - PAD_T - PAD_B);
                return (
                  <g key={f}>
                    <line x1={PAD_L} y1={y} x2={PW - PAD_R} y2={y} stroke="#efe8da" />
                    <text x={PAD_L - 8} y={y + 3.5} textAnchor="end" fontSize="10" className="fill-stone-400" fontFamily="var(--font-geist-mono)">
                      {f}
                    </text>
                  </g>
                );
              })}
              {/* area + line */}
              <path d={pitchArea} fill="url(#pitchFill)" opacity="0.5" />
              <defs>
                <linearGradient id="pitchFill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#128a54" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="#128a54" stopOpacity="0.02" />
                </linearGradient>
              </defs>
              <path d={pitchLine} fill="none" stroke="#128a54" strokeWidth="3" strokeLinecap="round" />
              {/* syllable points */}
              {pitchPts.map((p, i) => {
                const stressed = i === phrase.stress;
                const isFinal = i === contour.length - 1;
                return (
                  <g key={i}>
                    {isFinal && (
                      <circle cx={p.x} cy={p.y} r="11" fill="none" stroke={rising ? "#c0392b" : "#128a54"} strokeDasharray="3 3" strokeOpacity="0.8" />
                    )}
                    <circle cx={p.x} cy={p.y} r={stressed ? 6.5 : 4.5} fill={stressed ? "#c9862b" : "#0a5c38"} stroke="#fff" strokeWidth="2" />
                  </g>
                );
              })}
              {/* syllable labels */}
              {phrase.syllables.map((s, i) => (
                <text
                  key={i}
                  x={xs[i]}
                  y={PITCH_H - PAD_B + 22}
                  textAnchor="middle"
                  fontSize="12"
                  fontStyle="italic"
                  fontFamily="var(--font-playfair)"
                  className={i === phrase.stress ? "fill-oro-scuro" : "fill-stone-500"}
                  fontWeight={i === phrase.stress ? 700 : 400}
                >
                  {s}
                </text>
              ))}
              <text x={PAD_L - 8} y={PITCH_H - PAD_B + 22} textAnchor="end" fontSize="9" className="fill-stone-300" fontFamily="var(--font-geist-mono)">f0</text>
            </svg>
          </figure>

          {/* intensity envelope */}
          <figure className="m-0">
            <figcaption className="mb-1 flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-[0.14em] text-stone-400">
                intensità · loudness envelope
              </span>
              <span className="text-[11px] font-semibold text-stone-400">forte → piano</span>
            </figcaption>
            <svg viewBox={`0 0 ${PW} ${INT_H}`} className="h-auto w-full" role="img" aria-label="Grafico dell'intensità">
              <defs>
                <linearGradient id="intFill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#c96f45" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#c96f45" stopOpacity="0.02" />
                </linearGradient>
              </defs>
              <line x1={PAD_L} y1={20} x2={PW - PAD_R} y2={20} stroke="#efe8da" />
              <line x1={PAD_L} y1={INT_H - 30} x2={PW - PAD_R} y2={INT_H - 30} stroke="#efe8da" />
              <path d={intArea} fill="url(#intFill)" />
              <path d={intLine} fill="none" stroke="#c96f45" strokeWidth="2.5" strokeLinecap="round" />
              {intPts.map((p, i) => (
                <circle key={i} cx={p.x} cy={p.y} r={i === phrase.stress ? 5.5 : 3.5} fill="#c96f45" stroke="#fff" strokeWidth="1.8" />
              ))}
            </svg>
          </figure>

          <p className="text-xs leading-relaxed text-stone-500">
            Le frasi italiane scendono quando affermano e salgono quando chiedono —{" "}
            <span className="font-display italic text-inchiostro">
              {mode === "question" ? "contorno ascendente" : "contorno discendente"}
            </span>
            . Muovi i cursori e ascolta la curva che hai costruito.
          </p>
        </div>
      </div>
    </div>
  );
}
