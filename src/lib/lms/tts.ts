"use client";

/* ── TTS manager (speechSynthesis, it-IT) ─────────────────────────── */

let cachedVoice: SpeechSynthesisVoice | null = null;
const listeners = new Set<() => void>();

export function initVoices() {
  if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
  const load = () => {
    const voices = window.speechSynthesis.getVoices();
    const it = voices.find((v) => v.lang?.toLowerCase().startsWith("it"));
    cachedVoice = it ?? null;
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

export interface SpeakOptions {
  rate?: number;
  pitch?: number;
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
  if (cachedVoice) u.voice = cachedVoice;
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
