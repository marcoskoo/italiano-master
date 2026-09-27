"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  Coffee, Dices, Eye, Headphones, HelpCircle, Lightbulb, Pause, Play,
  RotateCcw, Sparkles, Target, Timer, TrendingUp, Trophy, Wand2,
} from "lucide-react";
import { VOCAB } from "@/lib/lms/vocabulary";
import { PREPOSITION_CLOZE, clozeSession } from "@/lib/lms/prepositions";
import type { CefrLevel } from "@/lib/lms/types";
import { useLms } from "@/lib/lms/store";
import { speak } from "@/lib/lms/tts";
import { cn } from "@/lib/utils";

/* ── Plugins v5.0 · Estensioni de Italiano Master ────────────────────
   5 · Parola nascosta — wordle italiano dal dizionario (5030 lemmi)
   6 · Preposizioni lab — drill cloze a/in/di/da/su/per + articolate
   7 · Pomodoro studio — sesiones de enfoque con XP
   8 · Muse — generador de frases y retos por nivel MCER ──────────── */

const LEVELS: CefrLevel[] = ["A1", "A2", "B1", "B2", "C1", "C2"];

function LevelChips({ value, onChange, label = "Nivel" }: { value: CefrLevel | "tutti"; onChange: (v: CefrLevel | "tutti") => void; label?: string }) {
  return (
    <div className="flex flex-wrap gap-1.5" role="group" aria-label={`Filtrar por ${label.toLowerCase()}`}>
      <button
        onClick={() => onChange("tutti")}
        className={cn("min-h-9 rounded-full px-3.5 text-xs font-bold transition-colors", value === "tutti" ? "bg-verde text-white" : "border border-soft bg-surface text-muted-it hover:text-verde")}
      >
        Tutti
      </button>
      {LEVELS.map((l) => (
        <button
          key={l}
          onClick={() => onChange(l)}
          className={cn("min-h-9 rounded-full px-3.5 text-xs font-bold transition-colors", value === l ? "bg-verde text-white" : "border border-soft bg-surface text-muted-it hover:text-verde")}
        >
          {l}
        </button>
      ))}
    </div>
  );
}

function PluginHeader({ tag, title, desc, count }: { tag: string; title: string; desc: string; count?: string }) {
  return (
    <div className="rounded-3xl border border-soft bg-surface p-5 sm:p-6">
      <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-muted-it">
        <Sparkles className="h-3.5 w-3.5" aria-hidden="true" /> Plugin · {tag}
      </p>
      <h1 className="mt-1.5 font-display text-2xl font-bold">{title} {count && <span className="text-base font-semibold text-muted-it">· {count}</span>}</h1>
      <p className="mt-2 text-sm leading-relaxed text-inchiostro/80">{desc}</p>
    </div>
  );
}

/* ════════════════════════════════════════════════════════════════════
   5 · PAROLA NASCOSTA (wordle italiano)
   ════════════════════════════════════════════════════════════════════ */

interface WordleGame {
  target: { it: string; es: string; level: CefrLevel };
  guesses: string[];
  current: string;
  status: "playing" | "won" | "lost";
  len: number;
}

const WORDLE_KEYS = [
  ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
  ["a", "s", "d", "f", "g", "h", "j", "k", "l", "ò"],
  ["z", "x", "c", "v", "b", "n", "m", "à", "ù", "è"],
];

function pickWordleWord(level: CefrLevel | "tutti"): { it: string; es: string; level: CefrLevel } | null {
  const pool = VOCAB.filter(
    (w) =>
      (level === "tutti" || w.level === level) &&
      w.it.length >= 5 &&
      w.it.length <= 6 &&
      /^[a-zàèéìòù]+$/i.test(w.it) &&
      !/\s/.test(w.it),
  );
  if (pool.length === 0) return null;
  const w = pool[Math.floor(Math.random() * pool.length)];
  return { it: w.it.toLowerCase(), es: w.es, level: w.level };
}

/* feedback tipo wordle: green = posición correcta, yellow = letra presente */
function letterStates(guess: string, target: string): ("ok" | "near" | "no")[] {
  const res: ("ok" | "near" | "no")[] = Array(guess.length).fill("no");
  const targetChars = target.split("");
  // primera pasada: posiciones exactas
  for (let i = 0; i < guess.length; i++) {
    if (guess[i] === target[i]) {
      res[i] = "ok";
      targetChars[i] = "*";
    }
  }
  // segunda pasada: presentes en otra posición
  for (let i = 0; i < guess.length; i++) {
    if (res[i] === "ok") continue;
    const idx = targetChars.indexOf(guess[i]);
    if (idx !== -1) {
      res[i] = "near";
      targetChars[idx] = "*";
    }
  }
  return res;
}

function makeGame(level: CefrLevel | "tutti"): WordleGame | null {
  const word = pickWordleWord(level) ?? pickWordleWord("tutti");
  if (!word) return null;
  return { target: word, guesses: [], current: "", status: "playing", len: word.it.length };
}

export function ParolaNascostaView() {
  const addXp = useLms((s) => s.addXp);
  const recordQuiz = useLms((s) => s.recordQuiz);
  const [level, setLevel] = useState<CefrLevel | "tutti">("A1");
  const [game, setGame] = useState<WordleGame | null>(() => makeGame("A1"));
  const [shake, setShake] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [stats, setStats] = useState({ played: 0, won: 0 });

  const start = useCallback((lv: CefrLevel | "tutti") => {
    setGame(makeGame(lv));
    setShowHint(false);
  }, []);

  const submitGuess = useCallback(() => {
    if (!game || game.status !== "playing") return;
    if (game.current.length !== game.len) {
      setShake(true);
      setTimeout(() => setShake(false), 400);
      return;
    }
    const guesses = [...game.guesses, game.current];
    const won = game.current === game.target.it;
    const lost = !won && guesses.length >= 6;
    if (won || lost) {
      const newStats = { played: stats.played + 1, won: stats.won + (won ? 1 : 0) };
      setStats(newStats);
      if (won) {
        addXp(15, "vocabolario");
        recordQuiz({ label: "Parola nascosta", score: 6 - guesses.length, total: 6, date: new Date().toISOString() });
      }
      setGame({ ...game, guesses, current: "", status: won ? "won" : "lost" });
    } else {
      setGame({ ...game, guesses, current: "" });
    }
  }, [game, stats, addXp, recordQuiz]);

  const pressKey = useCallback((k: string) => {
    if (!game || game.status !== "playing") return;
    if (k === "enter") { submitGuess(); return; }
    if (k === "del") { setGame({ ...game, current: game.current.slice(0, -1) }); return; }
    if (/^[a-zàèéìòù]$/.test(k) && game.current.length < game.len) {
      setGame({ ...game, current: game.current + k });
    }
  }, [game, submitGuess]);

  // teclado físico
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      if (e.key === "Enter") pressKey("enter");
      else if (e.key === "Backspace") pressKey("del");
      else if (/^[a-zA-Z]$/.test(e.key)) pressKey(e.key.toLowerCase());
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [pressKey]);

  /* mapa de estados por letra para colorear el teclado */
  const keyState = useMemo(() => {
    const map = new Map<string, "ok" | "near" | "no">();
    if (!game) return map;
    for (const g of game.guesses) {
      const states = letterStates(g, game.target.it);
      g.split("").forEach((ch, i) => {
        const prev = map.get(ch);
        const cur = states[i];
        if (cur === "ok" || (cur === "near" && prev !== "ok") || (cur === "no" && !prev)) map.set(ch, cur);
      });
    }
    return map;
  }, [game]);

  if (!game) {
    return <p className="text-sm text-muted-it">Preparando il gioco…</p>;
  }

  const rows = Array.from({ length: 6 }, (_, i) => game.guesses[i] ?? (i === game.guesses.length ? game.current.padEnd(game.len) : " ".repeat(game.len)));
  const activeRow = game.status === "playing" ? game.guesses.length : -1;

  return (
    <div className="space-y-5">
      <PluginHeader
        tag="Gioco di parole"
        title="Parola nascosta"
        desc="Adivina la palabra italiana en 6 intentos: verde = letra y posición correctas, amarillo = la letra existe pero en otro sitio. Las palabras salen del diccionario completo de la plataforma."
        count={`${stats.won}/${stats.played} vinte`}
      />

      <div className="flex flex-wrap items-center justify-between gap-3">
        <LevelChips value={level} onChange={(v) => { setLevel(v); start(v); }} label="Origen de la palabra" />
        <div className="flex gap-2">
          <button
            onClick={() => setShowHint(!showHint)}
            className="inline-flex min-h-9 items-center gap-1.5 rounded-full border border-soft bg-surface px-3.5 text-xs font-bold text-muted-it transition-colors hover:text-oro-scuro dark:hover:text-oro"
            aria-pressed={showHint}
          >
            <HelpCircle className="h-3.5 w-3.5" aria-hidden="true" /> Aiuto
          </button>
          <button onClick={() => start(level)} className="inline-flex min-h-9 items-center gap-1.5 rounded-full bg-inchiostro px-3.5 text-xs font-bold text-crema transition-all hover:scale-105">
            <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" /> Nuova partita
          </button>
        </div>
      </div>

      {showHint && game.status === "playing" && (
        <motion.p initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} className="rounded-2xl border border-oro/30 bg-oro-tenue px-4 py-3 text-sm text-oro-scuro dark:text-oro">
          <Eye className="mr-1.5 inline h-4 w-4" aria-hidden="true" />
          Nivel {game.target.level} · significado: <strong>{game.target.es}</strong>
        </motion.p>
      )}

      {/* tablero */}
      <div className={cn("mx-auto flex w-fit flex-col gap-1.5", shake && "animate-[wiggle_0.4s_ease-in-out]")}>
        {rows.map((row, r) => {
          const states = row.trim() && row !== game.current && game.guesses[r] ? letterStates(game.guesses[r], game.target.it) : null;
          const isCurrent = r === activeRow;
          return (
            <div key={r} className="flex gap-1.5">
              {row.split("").map((ch, c) => (
                <span
                  key={c}
                  className={cn(
                    "flex h-12 w-12 items-center justify-center rounded-xl border-2 font-display text-xl font-bold uppercase sm:h-14 sm:w-14 sm:text-2xl",
                    states
                      ? states[c] === "ok"
                        ? "border-verde bg-verde text-white"
                        : states[c] === "near"
                          ? "border-oro bg-oro/80 text-white"
                          : "border-soft bg-inchiostro/5 text-muted-it"
                      : isCurrent
                        ? "border-inchiostro/30 bg-surface text-inchiostro"
                        : "border-soft bg-surface/60 text-transparent",
                  )}
                >
                  {ch.trim() || ""}
                </span>
              ))}
            </div>
          );
        })}
      </div>

      {/* resultado */}
      {game.status !== "playing" && (
        <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} className={cn("mx-auto max-w-md rounded-3xl border-2 p-5 text-center", game.status === "won" ? "border-verde/50 bg-verde-tenue" : "border-rosso/40 bg-rosso-tenue")}>
          <p className="text-3xl" aria-hidden="true">{game.status === "won" ? "🎉" : "😵"}</p>
          <p className="mt-2 font-display text-xl font-bold">
            {game.status === "won" ? `Bravissimo! +15 XP` : "Game over"}
          </p>
          <p className="mt-1 text-sm text-muted-it">
            La palabra era <strong className="font-display text-inchiostro">{game.target.it}</strong> — {game.target.es}
          </p>
          <button onClick={() => start(level)} className="mt-4 inline-flex min-h-11 items-center gap-2 rounded-xl bg-verde px-5 py-2.5 text-sm font-bold text-white shadow-md shadow-verde/25 transition-all hover:scale-105 dark:text-inchiostro">
            <RotateCcw className="h-4 w-4" aria-hidden="true" /> Rigioca
          </button>
        </motion.div>
      )}

      {/* teclado */}
      <div className="mx-auto flex w-full max-w-lg flex-col gap-1.5">
        {WORDLE_KEYS.map((row, i) => (
          <div key={i} className="flex justify-center gap-1">
            {i === 2 && (
              <button onClick={() => pressKey("enter")} className="min-h-11 flex-[1.6] rounded-lg bg-verde px-2 text-[11px] font-bold text-white transition-all hover:brightness-110" aria-label="Conferma">
                INVIO
              </button>
            )}
            {row.map((k) => (
              <button
                key={k}
                onClick={() => pressKey(k)}
                className={cn(
                  "h-11 flex-1 rounded-lg text-sm font-bold uppercase transition-all hover:brightness-110 active:scale-95",
                  keyState.get(k) === "ok" ? "bg-verde text-white"
                    : keyState.get(k) === "near" ? "bg-oro text-white"
                    : keyState.get(k) === "no" ? "bg-inchiostro/10 text-muted-it/60"
                    : "bg-inchiostro/15 text-inchiostro",
                )}
              >
                {k}
              </button>
            ))}
            {i === 2 && (
              <button onClick={() => pressKey("del")} className="min-h-11 flex-[1.6] rounded-lg bg-inchiostro/15 px-2 text-sm font-bold text-inchiostro transition-all hover:bg-inchiostro/25" aria-label="Cancella lettera">
                ⌫
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════════════════════════════
   6 · PREPOSIZIONI LAB (cloze drill)
   ════════════════════════════════════════════════════════════════════ */

export function PreposizioniView() {
  const addXp = useLms((s) => s.addXp);
  const recordQuiz = useLms((s) => s.recordQuiz);
  const recordError = useLms((s) => s.recordError);
  const recordCorrect = useLms((s) => s.recordCorrect);
  const [level, setLevel] = useState<CefrLevel | "tutti">("tutti");
  const [session, setSession] = useState(() => clozeSession("tutti", 12));
  const [idx, setIdx] = useState(0);
  const [picked, setPicked] = useState<string | null>(null);
  const [correct, setCorrect] = useState(0);
  const [done, setDone] = useState(false);

  const item = session[idx];

  const restart = useCallback((lv: CefrLevel | "tutti") => {
    setSession(clozeSession(lv, 12));
    setIdx(0);
    setPicked(null);
    setCorrect(0);
    setDone(false);
  }, []);

  const pick = (opt: string) => {
    if (picked || !item) return;
    setPicked(opt);
    const ok = opt === item.answer;
    if (ok) {
      setCorrect((c) => c + 1);
      recordCorrect("preposizioni" as never);
      addXp(5, "grammatica");
    } else {
      recordError("preposizioni" as never);
    }
  };

  const next = () => {
    if (idx + 1 >= session.length) {
      const score = correct;
      recordQuiz({ label: "Preposizioni lab", score, total: session.length, date: new Date().toISOString() });
      setDone(true);
      return;
    }
    setIdx(idx + 1);
    setPicked(null);
  };

  const levelsCount = useMemo(() => {
    const m = new Map<string, number>();
    for (const c of PREPOSITION_CLOZE) m.set(c.level, (m.get(c.level) ?? 0) + 1);
    return m;
  }, []);

  return (
    <div className="space-y-5">
      <PluginHeader
        tag="Drill di grammatica"
        title="Preposizioni lab"
        desc="El punto débil clásico del hispanohablante: 72 frases de relleno sobre a/in/di/da/su/per/tra y todas las articuladas (al, nel, dal, dei…), con la regla explicada tras cada respuesta."
        count={`${PREPOSITION_CLOZE.length} frasi`}
      />

      <div className="flex flex-wrap items-center justify-between gap-3">
        <LevelChips value={level} onChange={(v) => { setLevel(v); restart(v); }} />
        <p className="font-mono text-xs font-bold text-muted-it">
          {done ? "sessione completa" : `${idx + 1} / ${session.length}`}
          {` · A1:${levelsCount.get("A1") ?? 0} A2:${levelsCount.get("A2") ?? 0} B1:${levelsCount.get("B1") ?? 0} B2:${levelsCount.get("B2") ?? 0}`}
        </p>
      </div>

      {/* barra de progreso */}
      <div className="h-2 overflow-hidden rounded-full bg-inchiostro/10" role="progressbar" aria-valuenow={idx} aria-valuemin={0} aria-valuemax={session.length}>
        <div className="h-full rounded-full bg-verde transition-all duration-500" style={{ width: `${((done ? session.length : idx) / session.length) * 100}%` }} />
      </div>

      {done ? (
        <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} className="mx-auto max-w-md rounded-3xl border-2 border-verde/50 bg-verde-tenue p-6 text-center">
          <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-verde text-white shadow-lg shadow-verde/30">
            <Trophy className="h-8 w-8" aria-hidden="true" />
          </span>
          <p className="mt-3 font-display text-2xl font-bold">{correct}/{session.length} correctas</p>
          <p className="mt-1 text-sm text-muted-it">
            {correct === session.length ? "Perfetto! Tutte le preposizioni al posto giusto." : correct >= session.length * 0.7 ? "Buon lavoro! Rivedi le regole che hai sbagliato." : "Ripassa le regole e riprova: la costanza paga."}
          </p>
          <button onClick={() => restart(level)} className="mt-4 inline-flex min-h-11 items-center gap-2 rounded-xl bg-verde px-5 py-2.5 text-sm font-bold text-white shadow-md shadow-verde/25 transition-all hover:scale-105 dark:text-inchiostro">
            <RotateCcw className="h-4 w-4" aria-hidden="true" /> Nuova sessione
          </button>
        </motion.div>
      ) : item ? (
        <div className="rounded-3xl border border-soft bg-surface p-5 sm:p-7">
          <p className="text-xs font-bold uppercase tracking-widest text-muted-it">Livello {item.level}</p>
          <p className="mt-3 font-display text-xl leading-relaxed sm:text-2xl">
            {item.sentence.split("___").map((part, i, arr) => (
              <span key={i}>
                {part}
                {i < arr.length - 1 && (
                  <span className={cn(
                    "mx-1 inline-block min-w-16 rounded-lg border-b-4 px-2 pb-0.5 text-center font-mono font-bold",
                    picked === item.answer ? "border-verde bg-verde-tenue text-verde-scuro dark:text-verde"
                      : picked ? "border-rosso bg-rosso-tenue text-rosso-scuro dark:text-rosso"
                      : "border-oro bg-oro-tenue/50 text-inchiostro",
                  )}>
                    {picked ?? "?"}
                  </span>
                )}
              </span>
            ))}
          </p>
          <p className="mt-2 text-sm italic text-muted-it">{item.translation}</p>

          <div className="mt-5 grid grid-cols-2 gap-2.5 sm:grid-cols-4">
            {item.options.map((opt) => {
              const isAnswer = opt === item.answer;
              const isPicked = picked === opt;
              return (
                <button
                  key={opt}
                  onClick={() => pick(opt)}
                  disabled={Boolean(picked)}
                  className={cn(
                    "min-h-12 rounded-xl border-2 font-mono text-base font-bold transition-all",
                    !picked && "border-soft bg-surface hover:border-verde hover:bg-verde-tenue/50 active:scale-95",
                    picked && isAnswer && "border-verde bg-verde text-white shadow-md shadow-verde/25",
                    picked && isPicked && !isAnswer && "border-rosso bg-rosso text-white",
                    picked && !isPicked && !isAnswer && "border-soft opacity-50",
                  )}
                >
                  {opt}
                </button>
              );
            })}
          </div>

          {picked && (
            <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className={cn("mt-4 rounded-2xl border p-4", picked === item.answer ? "border-verde/40 bg-verde-tenue/60" : "border-oro/40 bg-oro-tenue/50")}>
              <p className="flex items-start gap-2 text-sm leading-relaxed">
                <Lightbulb className="mt-0.5 h-4 w-4 shrink-0 text-oro-scuro dark:text-oro" aria-hidden="true" />
                <span>
                  <strong>{picked === item.answer ? "Esatto! " : `No: era "${item.answer}". `}</strong>
                  {item.rule}
                </span>
              </p>
              <button onClick={next} className="mt-3 inline-flex min-h-11 items-center gap-2 rounded-xl bg-verde px-5 py-2.5 text-sm font-bold text-white transition-all hover:scale-105 dark:text-inchiostro">
                {idx + 1 >= session.length ? "Vedi risultato →" : "Avanti →"}
              </button>
            </motion.div>
          )}
        </div>
      ) : (
        <p className="text-sm text-muted-it">Nessuna frase disponibile per questo livello.</p>
      )}
    </div>
  );
}

/* ════════════════════════════════════════════════════════════════════
   7 · POMODORO STUDIO
   ════════════════════════════════════════════════════════════════════ */

const POMODORO_MODES = [
  { id: "classic", label: "Classico", focus: 25, pause: 5, desc: "25 min studio · 5 min pausa" },
  { id: "deep", label: "Deep work", focus: 50, pause: 10, desc: "50 min studio · 10 min pausa" },
  { id: "sprint", label: "Sprint", focus: 15, pause: 3, desc: "15 min studio · 3 min pausa" },
] as const;

export function PomodoroView() {
  const addXp = useLms((s) => s.addXp);
  const [modeId, setModeId] = useState<(typeof POMODORO_MODES)[number]["id"]>("classic");
  const mode = POMODORO_MODES.find((m) => m.id === modeId) ?? POMODORO_MODES[0];
  const [phase, setPhase] = useState<"focus" | "pause">("focus");
  const [secondsLeft, setSecondsLeft] = useState(mode.focus * 60);
  const [running, setRunning] = useState(false);
  const [todayKey] = useState(() => new Date().toISOString().slice(0, 10));
  const [sessions, setSessions] = useState<number>(() => {
    if (typeof window === "undefined") return 0;
    const raw = window.localStorage.getItem(`im-pomodoro-${new Date().toISOString().slice(0, 10)}`);
    return raw ? Number(raw) || 0 : 0;
  });
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const total = (phase === "focus" ? mode.focus : mode.pause) * 60;
  const progress = 1 - secondsLeft / total;

  useEffect(() => {
    if (!running) return;
    intervalRef.current = setInterval(() => {
      setSecondsLeft((s) => {
        if (s > 1) return s - 1;
        // fin de fase
        if (phase === "focus") {
          const n = sessions + 1;
          setSessions(n);
          window.localStorage.setItem(`im-pomodoro-${todayKey}`, String(n));
          addXp(10);
          speak("Pausa! Ottimo lavoro.", { rate: 0.9 });
          setPhase("pause");
          return mode.pause * 60;
        }
        speak("Si ricomincia! Testa sui libri.", { rate: 0.9 });
        setPhase("focus");
        return mode.focus * 60;
      });
    }, 1000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [running, phase, mode, sessions]);

  const switchMode = (id: (typeof POMODORO_MODES)[number]["id"]) => {
    setModeId(id);
    const m = POMODORO_MODES.find((x) => x.id === id) ?? POMODORO_MODES[0];
    setRunning(false);
    setPhase("focus");
    setSecondsLeft(m.focus * 60);
  };

  const reset = () => {
    setRunning(false);
    setPhase("focus");
    setSecondsLeft(mode.focus * 60);
  };

  const mm = String(Math.floor(secondsLeft / 60)).padStart(2, "0");
  const ss = String(secondsLeft % 60).padStart(2, "0");
  const circumference = 2 * Math.PI * 88;

  return (
    <div className="space-y-5">
      <PluginHeader
        tag="Focus e disciplina"
        title="Pomodoro studio"
        desc="Sesiones de concentración con la técnica Pomodoro: elige tu ritmo, estudia sin interrupciones y gana 10 XP por cada pomodoro completado. El aviso de cambio de fase llega por voz."
        count={`${sessions} sessioni oggi`}
      />

      <div className="flex flex-wrap gap-2" role="group" aria-label="Modalità pomodoro">
        {POMODORO_MODES.map((m) => (
          <button
            key={m.id}
            onClick={() => switchMode(m.id)}
            aria-pressed={modeId === m.id}
            className={cn(
              "min-h-11 flex-1 rounded-xl border-2 px-3 py-2.5 text-sm font-bold transition-all",
              modeId === m.id ? "border-verde bg-verde-tenue text-verde-scuro dark:text-verde" : "border-soft hover:border-inchiostro/25",
            )}
          >
            {m.label}
            <span className="mt-0.5 block text-[10px] font-medium text-muted-it">{m.desc}</span>
          </button>
        ))}
      </div>

      <div className="flex flex-col items-center rounded-3xl border border-soft bg-surface p-6 sm:p-10">
        {/* círculo */}
        <div className="relative h-56 w-56 sm:h-64 sm:w-64" role="timer" aria-label={`${mm} minuti e ${ss} secondi`}>
          <svg viewBox="0 0 200 200" className="h-full w-full -rotate-90">
            <circle cx="100" cy="100" r="88" fill="none" strokeWidth="10" className="stroke-inchiostro/10" />
            <circle
              cx="100" cy="100" r="88" fill="none" strokeWidth="10" strokeLinecap="round"
              className={phase === "focus" ? "stroke-verde" : "stroke-oro"}
              strokeDasharray={circumference}
              strokeDashoffset={circumference * (1 - progress)}
              style={{ transition: "stroke-dashoffset 1s linear" }}
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <p className={cn("flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-widest", phase === "focus" ? "text-verde-scuro dark:text-verde" : "text-oro-scuro dark:text-oro")}>
              {phase === "focus" ? <><Target className="h-3.5 w-3.5" aria-hidden="true" /> Studio</> : <><Coffee className="h-3.5 w-3.5" aria-hidden="true" /> Pausa</>}
            </p>
            <p className="mt-1 font-display text-5xl font-bold tabular-nums sm:text-6xl">{mm}:{ss}</p>
            <p className="mt-1 text-[11px] text-muted-it">{mode.label} · {mode.focus}/{mode.pause} min</p>
          </div>
        </div>

        <div className="mt-6 flex gap-3">
          <button
            onClick={() => setRunning(!running)}
            className={cn(
              "inline-flex min-h-12 items-center gap-2 rounded-2xl px-7 py-3 text-sm font-bold text-white shadow-lg transition-all hover:scale-105 active:scale-95",
              running ? "bg-oro shadow-oro/30" : "bg-verde shadow-verde/30 dark:text-inchiostro",
            )}
          >
            {running ? <><Pause className="h-4 w-4" aria-hidden="true" /> Pausa</> : <><Play className="h-4 w-4" aria-hidden="true" /> Avvia</>}
          </button>
          <button onClick={reset} className="inline-flex min-h-12 items-center gap-2 rounded-2xl border-2 border-soft px-5 py-3 text-sm font-bold transition-all hover:border-inchiostro/30">
            <RotateCcw className="h-4 w-4" aria-hidden="true" /> Reset
          </button>
        </div>

        <div className="mt-6 flex items-center gap-4 rounded-2xl bg-crema-scura px-5 py-3 dark:bg-inchiostro/10">
          <span className="flex items-center gap-2 text-sm font-bold"><TrendingUp className="h-4 w-4 text-verde-scuro dark:text-verde" aria-hidden="true" /> {sessions} pomodoro oggi</span>
          <span className="text-xs text-muted-it">+{sessions * 10} XP guadagnati</span>
        </div>
        <p className="mt-3 max-w-sm text-center text-[11px] leading-relaxed text-muted-it">
          Il timer continua finché la scheda resta aperta. Suggerimento: metti il telefono in modalità aereo e lascia lavorare il pomodoro.
        </p>
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════════════════════════════
   8 · MUSE · generador de frases y retos
   ════════════════════════════════════════════════════════════════════ */

const MUSE_THEMES = [
  "la tua routine mattutina", "un ricordo d'infanzia", "il tuo piatto italiano preferito", "una giornata al mare",
  "il tuo lavoro o i tuoi studi", "una città che vorresti visitare", "la tua famiglia", "un weekend ideale",
  "il tuo film o serie preferita", "una volta che hai perso il treno", "la musica che ascolti", "un sogno che vorresti realizzare",
  "la tua casa ideale", "il migliore consiglio ricevuto", "una cena con amici", "la prima neve dell'anno",
];

const MUSE_STRUCTURES: Record<CefrLevel, string[]> = {
  A1: ["usando solo il presente indicativo", "con tre verbi all'infinito (mi piace…)", "elencando 5 cose che hai", "con mi chiamo / ho / abito"],
  A2: ["usando il passato prossimo", "con stare per + infinitivo (futuro vicino)", "usando molto / molto / tanti", "con perché e quindi"],
  B1: ["usando l'imperfetto per il contesto", "con un periodo ipotetico di primo tipo", "usando il condizionale per i desideri", "con pronomi combinati (me lo, gliene)"],
  B2: ["con il congiuntivo presente (penso che…)", "usando la forma passiva almeno una volta", "con un periodo ipotetico di secondo tipo", "usando gerundio e participio"],
  C1: ["con il congiuntivo imperfetto (come se…)", "alternando registri formale e informale", "usando almeno due locuzioni latine", "con la concordanza dei tempi al congiuntivo"],
  C2: ["con subordinate implicite (gerundio, infinito)", "in stile giornalistico", "con il periodo ipotetico di terzo tipo", "in un registro letterario curato"],
};

const MUSE_OPENERS = [
  "Racconta", "Descrivi", "Immagina e racconta", "Spiega a un amico",
  "Scrivi un messaggio su", "Fai un monologo di 2 minuti su",
];

const MUSE_SENTENCE_SEEDS: { subject: string; verb: string; rest: string }[] = [
  { subject: "Ogni mattina", verb: "prendo", rest: "il caffè al bar sotto casa" },
  { subject: "Il sabato", verb: "vado", rest: "al mercato a comprare frutta fresca" },
  { subject: "D'estate", verb: "preferisco", rest: "le montagne al mare" },
  { subject: "Quando piove", verb: "resto", rest: "a casa a leggere" },
  { subject: "I miei amici", verb: "dicono", rest: "che parlo troppo velocemente" },
  { subject: "L'anno scorso", verb: "ho visitato", rest: "la Sicilia per la prima volta" },
  { subject: "Mia nonna", verb: "preparava", rest: "la pasta fatta a mano ogni domenica" },
  { subject: "Stasera", verb: "cucinerò", rest: "una cena per quattro persone" },
  { subject: "Al lavoro", verb: "devo", rest: "rispondere a troppe email" },
  { subject: "In vacanza", verb: "mangerei", rest: "gelato tutti i giorni" },
  { subject: "Questo weekend", verb: "vorrei", rest: "fare un'escursione in montagna" },
  { subject: "Da bambino", verb: "giocavo", rest: "a calcio nel cortile del palazzo" },
];

function makeMusePrompt(level: CefrLevel) {
  return {
    opener: MUSE_OPENERS[Math.floor(Math.random() * MUSE_OPENERS.length)],
    theme: MUSE_THEMES[Math.floor(Math.random() * MUSE_THEMES.length)],
    structure: MUSE_STRUCTURES[level][Math.floor(Math.random() * MUSE_STRUCTURES[level].length)],
    seed: MUSE_SENTENCE_SEEDS[Math.floor(Math.random() * MUSE_SENTENCE_SEEDS.length)],
  };
}

export function MuseView() {
  const [level, setLevel] = useState<CefrLevel>("A2");
  const [prompt, setPrompt] = useState(() => makeMusePrompt("A2"));
  const [copied, setCopied] = useState(false);

  const generate = useCallback((lv: CefrLevel) => {
    setCopied(false);
    setPrompt(makeMusePrompt(lv));
  }, []);

  const copyPrompt = async () => {
    if (!prompt) return;
    try {
      await navigator.clipboard.writeText(`${prompt.opener} ${prompt.theme} ${prompt.structure}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      /* clipboard no disponible */
    }
  };

  return (
    <div className="space-y-5">
      <PluginHeader
        tag="Ispirazione per scrivere e parlare"
        title="Muse · generatore"
        desc="La musa te propone retos de producción escrita y oral por nivel MCER: un tema, una restricción gramatical y una frase semilla para calentar. Perfecta para la sección Scrittura o para practicar en voz alta."
      />

      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap gap-1.5" role="group" aria-label="Livello del prompt">
          {LEVELS.map((l) => (
            <button
              key={l}
              onClick={() => { setLevel(l); generate(l); }}
              className={cn("min-h-9 rounded-full px-3.5 text-xs font-bold transition-colors", level === l ? "bg-verde text-white" : "border border-soft bg-surface text-muted-it hover:text-verde")}
            >
              {l}
            </button>
          ))}
        </div>
        <button onClick={() => generate(level)} className="inline-flex min-h-10 items-center gap-2 rounded-xl bg-inchiostro px-4 py-2 text-sm font-bold text-crema shadow-md transition-all hover:scale-105">
          <Dices className="h-4 w-4" aria-hidden="true" /> Ispirami
        </button>
      </div>

      {prompt && (
        <motion.div
          key={`${prompt.theme}-${prompt.structure}`}
          initial={{ opacity: 0, y: 12, rotate: -0.5 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          className="relative overflow-hidden rounded-3xl border-2 border-oro/40 bg-oro-tenue/30 p-6 sm:p-8"
        >
          <span aria-hidden="true" className="pointer-events-none absolute -right-2 -top-6 font-display text-[110px] leading-none text-oro/20">”</span>
          <p className="relative font-display text-xl leading-relaxed sm:text-2xl">
            <strong className="text-oro-scuro dark:text-oro">{prompt.opener}</strong> {prompt.theme}{" "}
            <span className="text-muted-it">— {prompt.structure}</span>
          </p>
          <div className="relative mt-4 flex flex-wrap gap-2">
            <button onClick={() => speak(prompt.opener + " " + prompt.theme, { rate: 0.9 })} className="inline-flex min-h-10 items-center gap-2 rounded-xl border border-soft bg-surface px-4 py-2 text-xs font-bold transition-all hover:scale-105">
              <Headphones className="h-3.5 w-3.5 text-verde-scuro dark:text-verde" aria-hidden="true" /> Ascolta
            </button>
            <button onClick={copyPrompt} className="inline-flex min-h-10 items-center gap-2 rounded-xl border border-soft bg-surface px-4 py-2 text-xs font-bold transition-all hover:scale-105">
              {copied ? "✓ Copiato!" : "Copia prompt"}
            </button>
          </div>
        </motion.div>
      )}

      <div className="rounded-3xl border border-soft bg-surface p-5 sm:p-6">
          <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-muted-it">
            <Wand2 className="h-3.5 w-3.5" aria-hidden="true" /> Frase semilla · calentamiento
          </p>
          <p className="mt-2.5 font-display text-lg leading-relaxed">
            «{prompt.seed.subject} {prompt.seed.verb} {prompt.seed.rest}.»
          </p>
          <p className="mt-2 text-xs text-muted-it">
            Léela en voz alta, escúchala y después transfórmala a tu vida cambiando sujeto, verbo y final: es el calentamiento perfecto antes del reto.
          </p>
          <button onClick={() => speak(`${prompt.seed.subject} ${prompt.seed.verb} ${prompt.seed.rest}`, { rate: 0.9 })} className="mt-3 inline-flex min-h-10 items-center gap-2 rounded-xl border border-soft bg-crema-scura px-4 py-2 text-xs font-bold transition-all hover:scale-105 dark:bg-inchiostro/10">
            <Headphones className="h-3.5 w-3.5 text-verde-scuro dark:text-verde" aria-hidden="true" /> Ascolta la frase
          </button>
        </div>

      <div className="rounded-2xl border border-soft bg-verde-tenue/40 p-4 text-[11px] leading-relaxed text-muted-it">
        <Timer className="mr-1 inline h-3.5 w-3.5" aria-hidden="true" />
        Sugerencia de uso: 5 minutos para el calentamiento con la frase semilla, 15 para el reto del nivel y 5 para releer
        en voz alta. Llévalo a Scrittura para recibir corrección o repítelo con el Tutor IA en modo role-play.
      </div>
    </div>
  );
}
