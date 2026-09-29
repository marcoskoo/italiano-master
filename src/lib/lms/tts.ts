"use client";

/* ── TTS manager (speechSynthesis, it-IT) ───────────────────────────
   v9.1 multi-voz: reparto de voces por personaje en diálogos.
   · Pool de TODAS las voces italianas disponibles (intercaladas por
     género para maximizar el contraste entre los 2 primeros hablantes).
   · buildCast(): asigna a cada personaje una voz distinta; cuando se
     agotan las voces físicas, diferencia por tono (pitch) y velocidad.
   · speakDialogue(): secuencia de battute con la voz de su personaje. */

let cachedVoice: SpeechSynthesisVoice | null = null;
let voicePool: SpeechSynthesisVoice[] = [];
const listeners = new Set<() => void>();

/* Nombres de voces italianas conocidas por género (heurística multi-plataforma:
   Chrome "Google italiano" (f), Edge/Windows Elsa·Isabella·Diego·Cosimo·Federico,
   macOS/iOS Alice·Federica·Luca·Paola, Android…) */
const FEMALE_RE = /alice|federica|elsa|isabella|paola|giorgia|cosima|lucia|mia|martina|valentina|chiara|alessia|giulia|anna|elisa|fabiana|silvia|francesca|google italiano|italiana\b/i;
const MALE_RE = /\bluca\b|diego|cosimo|federico|giorgio|matteo|carlo\b|francesco|lorenzo|marco\b|davide|luigi|corrado|gianluca|fausto|alessandro|riccardo|mario\b|italiano\b/i;

/** Nombre limpio y legible de una voz ("Microsoft Elsa Online (Natural) - Italian (Italy)" → "Elsa"). */
export function prettyVoiceName(v: SpeechSynthesisVoice | null): string {
  if (!v) return "voce di sistema";
  let n = v.name
    .replace(/^(Microsoft|Google|Apple)\s+/i, "")
    .replace(/\s*(Online|Server)?\s*(\((Natural|Enhanced|Premium|Compact)\))?\s*-\s*.*$/i, "")
    .replace(/\s*\((Natural|Enhanced|Premium|Compact)\)\s*/i, " ")
    .replace(/\s*-\s*Italian.*$/i, "")
    .trim();
  if (!n || /^(italian|italia)$/i.test(n)) n = v.name.split(/[-–(]/)[0].trim() || "italiano";
  return n;
}

function genderOf(v: SpeechSynthesisVoice): "f" | "m" | "?" {
  if (FEMALE_RE.test(v.name)) return "f";
  if (MALE_RE.test(v.name)) return "m";
  return "?";
}

/** Intercala femeninas y masculinas: [f1, m1, f2, m2, …] para que los 2
    primeros personajes suenen lo más distinto posible. Dedupe por nombre. */
function interleaveByGender(voices: SpeechSynthesisVoice[]): SpeechSynthesisVoice[] {
  const seen = new Set<string>();
  const uniq: SpeechSynthesisVoice[] = [];
  for (const v of voices) {
    const key = prettyVoiceName(v).toLowerCase();
    if (seen.has(key)) {
      // misma voz local/remota: prefiere la local (funciona offline)
      const existing = uniq.find((u) => prettyVoiceName(u).toLowerCase() === key);
      if (existing && !existing.localService && v.localService) uniq[uniq.indexOf(existing)] = v;
      continue;
    }
    seen.add(key);
    uniq.push(v);
  }
  const fem = uniq.filter((v) => genderOf(v) === "f");
  const male = uniq.filter((v) => genderOf(v) === "m");
  const rest = uniq.filter((v) => genderOf(v) === "?");
  const out: SpeechSynthesisVoice[] = [];
  const max = Math.max(fem.length, male.length);
  for (let i = 0; i < max; i++) {
    if (fem[i]) out.push(fem[i]);
    if (male[i]) out.push(male[i]);
  }
  return [...out, ...rest];
}

export function initVoices() {
  if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
  const load = () => {
    const voices = window.speechSynthesis.getVoices();
    const it = voices.filter((v) => v.lang?.toLowerCase().startsWith("it"));
    cachedVoice = it[0] ?? null;
    voicePool = interleaveByGender(it);
    listeners.forEach((l) => l());
  };
  load();
  window.speechSynthesis.onvoiceschanged = load;
}

export function onVoices(cb: () => void) {
  listeners.add(cb);
  return () => listeners.delete(cb);
}

export function hasItalianVoice() {
  return cachedVoice !== null;
}

/** Número de voces italianas distintas disponibles. */
export function italianVoiceCount() {
  return voicePool.length;
}

/* ── Reparto de voces por personaje ───────────────────────────────── */

export interface SpeakerVoice {
  voice: SpeechSynthesisVoice | null;  // null → voz por defecto del navegador
  pitch: number;                        // diferenciación por tono
  rateFactor: number;                   // micro-variación de velocidad
  distinct: boolean;                    // true = voz físicamente distinta
  voiceName: string;                    // nombre legible (para la UI)
}

/* Tonos de reserva cuando no hay voces físicas suficientes: el contraste
   grave/agudo hace perceptible el cambio de interlocutor. */
const FALLBACK_PITCHES = [1.05, 0.76, 1.24, 0.86, 1.14, 0.7];
const FALLBACK_RATES = [1, 0.97, 1.04, 0.95, 1.02, 0.93];

/** Asigna una voz a cada personaje (orden de primera aparición).
    Personaje 0 → voz 1 del pool, personaje 1 → voz 2 (idealmente de otro
    género), etc. Cuando el pool se agota, rota voces con tonos distintos. */
export function buildCast(speakerNames: (string | undefined)[]): Record<string, SpeakerVoice> {
  const unique: string[] = [];
  for (const s of speakerNames) if (s && !unique.includes(s)) unique.push(s);
  const cast: Record<string, SpeakerVoice> = {};
  unique.forEach((name, k) => {
    if (voicePool.length === 0) {
      const j = k % FALLBACK_PITCHES.length;
      cast[name] = { voice: null, pitch: FALLBACK_PITCHES[j], rateFactor: FALLBACK_RATES[j], distinct: false, voiceName: "voce di sistema" };
    } else if (k < voicePool.length) {
      cast[name] = { voice: voicePool[k], pitch: 1, rateFactor: 1, distinct: true, voiceName: prettyVoiceName(voicePool[k]) };
    } else {
      const j = (k - voicePool.length) % (FALLBACK_PITCHES.length - 1) + 1; // nunca pitch neutro al reutilizar
      cast[name] = {
        voice: voicePool[k % voicePool.length],
        pitch: FALLBACK_PITCHES[j],
        rateFactor: FALLBACK_RATES[j],
        distinct: false,
        voiceName: prettyVoiceName(voicePool[k % voicePool.length]),
      };
    }
  });
  return cast;
}

/* ── Reproducción ─────────────────────────────────────────────────── */

export interface SpeakOptions {
  rate?: number;
  pitch?: number;
  voice?: SpeechSynthesisVoice | null;
  onEnd?: () => void;
  onStart?: () => void;
}

export function speak(text: string, opts: SpeakOptions = {}) {
  if (typeof window === "undefined" || !("speechSynthesis" in window)) {
    opts.onEnd?.();
    return false;
  }
  window.speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = "it-IT";
  const v = opts.voice !== undefined ? opts.voice : cachedVoice;
  if (v) u.voice = v;
  u.rate = opts.rate ?? 0.9;
  u.pitch = opts.pitch ?? 1;
  u.onstart = () => opts.onStart?.();
  u.onend = () => opts.onEnd?.();
  u.onerror = () => opts.onEnd?.();
  window.speechSynthesis.speak(u);
  return true;
}

export function stopSpeaking() {
  if (typeof window !== "undefined" && "speechSynthesis" in window) {
    window.speechSynthesis.cancel();
  }
}

/** Speak a sequence of lines, one after another. Returns cancel function. */
export function speakSequence(lines: string[], rate = 0.9, onIndex?: (i: number) => void, onDone?: () => void) {
  let i = 0;
  let cancelled = false;
  const next = () => {
    if (cancelled) return;
    if (i >= lines.length) { onDone?.(); return; }
    const idx = i;
    i += 1;
    onIndex?.(idx);
    speak(lines[idx], { rate, onEnd: () => setTimeout(next, 350) });
  };
  next();
  return () => { cancelled = true; stopSpeaking(); };
}

/* ── Diálogo multi-voz ────────────────────────────────────────────── */

export interface DialogueLine {
  it: string;
  speaker?: string;
}

export interface DialogueOptions {
  rate?: number;
  gap?: number;               // pausa entre battute (ms)
  onIndex?: (i: number) => void;
  onDone?: () => void;
}

/** Reproduce un diálogo completo: cada battute con la voz de su personaje.
    Devuelve una función de cancelación. */
export function speakDialogue(lines: DialogueLine[], cast: Record<string, SpeakerVoice>, opts: DialogueOptions = {}) {
  const rate = opts.rate ?? 0.9;
  const gap = opts.gap ?? 420;
  let i = 0;
  let cancelled = false;
  const next = () => {
    if (cancelled) return;
    if (i >= lines.length) { opts.onDone?.(); return; }
    const idx = i;
    i += 1;
    opts.onIndex?.(idx);
    const line = lines[idx];
    const p = line.speaker ? cast[line.speaker] : undefined;
    const ok = speak(line.it, {
      rate: rate * (p?.rateFactor ?? 1),
      pitch: p?.pitch ?? 1,
      voice: p?.voice ?? null,
      onEnd: () => setTimeout(next, gap),
    });
    if (!ok) { opts.onDone?.(); return; }
  };
  next();
  return () => { cancelled = true; stopSpeaking(); };
}
