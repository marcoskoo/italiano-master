"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, Eraser, Lightbulb, RotateCcw, Trophy, X } from "lucide-react";
import type { Exercise } from "@/lib/lms/types";
import { useLms } from "@/lib/lms/store";
import { speak } from "@/lib/lms/tts";
import { AudioButton, VoiceHint } from "./audio-button";
import { cn } from "@/lib/utils";

/* ── Motor de ejercicios con feedback de pulso de color ──────────── */

export interface QuizEngineProps {
  exercises: Exercise[];
  title?: string;
  kind?: "lección" | "prueba" | "examen" | "test" | "repaso" | "juego";
  label?: string;
  onFinish?: (score: number, total: number) => void;
  xpPerCorrect?: number;
  skill?: "ascolto" | "lettura" | "scrittura" | "parlato" | "pronuncia" | "grammatica" | "vocabolario";
}

const norm = (s: string) =>
  s.toLowerCase().trim().replace(/[.,!?;:]/g, "").replace(/[\u2018\u2019\u201B]/g, "'").replace(/\s+/g, " ");

export function QuizEngine({ exercises, title, kind = "prueba", label, onFinish, xpPerCorrect = 10, skill }: QuizEngineProps) {
  const addXp = useLms((s) => s.addXp);
  const recordError = useLms((s) => s.recordError);
  const recordCorrect = useLms((s) => s.recordCorrect);
  const recordQuiz = useLms((s) => s.recordQuiz);
  const audioRate = useLms((s) => s.settings.audioRate);

  const [idx, setIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState<null | { correct: boolean }>(null);
  const [choice, setChoice] = useState<number | null>(null);
  const [typed, setTyped] = useState("");
  const [orderWords, setOrderWords] = useState<{ w: string; used: boolean }[]>([]);
  const [built, setBuilt] = useState<{ w: string; i: number }[]>([]);
  const [done, setDone] = useState(false);

  const ex = exercises[idx];

  const resetFor = useCallback((e: Exercise) => {
    setAnswered(null); setChoice(null); setTyped(""); setBuilt([]);
    if (e.type === "order") {
      const shuffled = [...e.words].sort(() => Math.random() - 0.5);
      setOrderWords(shuffled.map((w) => ({ w, used: false })));
    }
  }, []);

  useEffect(() => {
    // dictation: reproducir automáticamente al entrar
    if (ex && ex.type === "dictation" && !answered) {
      const t = setTimeout(() => speak(ex.text, { rate: audioRate }), 400);
      return () => clearTimeout(t);
    }
  }, [ex, audioRate, answered]);

  const finish = useCallback((finalScore: number) => {
    setDone(true);
    recordQuiz({ id: `${Date.now()}`, label: label ?? title ?? "Práctica", score: finalScore, total: exercises.length, date: new Date().toISOString(), kind });
    onFinish?.(finalScore, exercises.length);
  }, [exercises.length, onFinish, recordQuiz, kind, label, title]);

  const submit = useCallback(() => {
    if (!ex || answered) return;
    let correct = false;
    if (ex.type === "mc") correct = choice === ex.answer;
    else if (ex.type === "tf") correct = (choice === 1) === ex.answer;
    else if (ex.type === "fill" || ex.type === "translate") correct = ex.accepted.some((a) => norm(a) === norm(typed));
    else if (ex.type === "dictation") correct = norm(ex.text) === norm(typed);
    else if (ex.type === "order") correct = built.map((b) => b.w).join(" ") === ex.answer.join(" ");

    setAnswered({ correct });
    if (correct) {
      const ns = score + 1;
      setScore(ns);
      addXp(xpPerCorrect, skill);
      recordCorrect(ex.topic);
    } else {
      recordError(ex.topic);
      if (ex.type === "dictation") speak(ex.text, { rate: audioRate });
    }
  }, [ex, answered, choice, typed, built, score, addXp, recordCorrect, recordError, skill, xpPerCorrect, audioRate]);

  const next = useCallback(() => {
    if (idx + 1 >= exercises.length) {
      finish(score);
    } else {
      const target = exercises[idx + 1];
      if (target) resetFor(target);
      setIdx(idx + 1);
    }
  }, [idx, exercises.length, score, finish, resetFor, exercises]);

  const restart = () => {
    const target = exercises[0];
    if (target) resetFor(target);
    setIdx(0); setScore(0); setDone(false);
  };

  const pct = useMemo(() => Math.round((score / Math.max(1, exercises.length)) * 100), [score, exercises.length]);

  if (!ex && !done) {
    return <p className="rounded-2xl border border-soft bg-surface p-6 text-sm text-muted-it">No hay ejercicios disponibles todavía.</p>;
  }

  if (done) {
    const passed = pct >= 70;
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }}
        className="mx-auto max-w-lg rounded-3xl border border-soft bg-surface p-8 text-center shadow-sm"
        aria-live="polite"
      >
        <div className={cn("mx-auto flex h-20 w-20 items-center justify-center rounded-full", passed ? "bg-verde-tenue" : "bg-rosso-tenue")}>
          <Trophy className={cn("h-9 w-9", passed ? "text-verde" : "text-rosso")} aria-hidden="true" />
        </div>
        <h3 className="mt-4 font-display text-2xl font-semibold">{passed ? "Bravissimo!" : "Quasi!"}</h3>
        <p className="mt-2 text-muted-it">
          {score} / {exercises.length} correctas · {pct}%
        </p>
        <div className="mx-auto mt-5 h-2.5 w-full max-w-xs overflow-hidden rounded-full bg-crema-scura dark:bg-inchiostro/20">
          <motion.div
            initial={{ width: 0 }} animate={{ width: `${pct}%` }} transition={{ duration: 0.9, ease: "easeOut" }}
            className={cn("h-full rounded-full", passed ? "bg-verde" : "bg-oro")}
          />
        </div>
        <p className="mt-4 text-sm text-muted-it">
          {passed ? "Has superado la prueba. +XP acreditados." : "Repasa los errores: el motor adaptativo te propondrá práctica extra."}
        </p>
        <div className="mt-6 flex justify-center gap-3">
          <button onClick={restart} className="inline-flex min-h-11 items-center gap-2 rounded-xl border border-soft bg-crema px-5 py-2.5 text-sm font-semibold transition-all hover:scale-[1.02] active:scale-95">
            <RotateCcw className="h-4 w-4" aria-hidden="true" /> Riprova
          </button>
        </div>
      </motion.div>
    );
  }

  const isCorrect = answered?.correct === true;
  const isWrong = answered?.correct === false;

  return (
    <div className="mx-auto max-w-2xl">
      {title && (
        <div className="mb-4 flex items-center justify-between">
          <h3 className="font-display text-lg font-semibold">{title}</h3>
          <span className="rounded-full bg-verde-tenue px-3 py-1 text-xs font-bold text-verde-scuro dark:text-verde">
            {idx + 1} / {exercises.length}
          </span>
        </div>
      )}
      {/* barra de progreso segmentada */}
      <div className="mb-6 flex gap-1.5" role="progressbar" aria-valuenow={idx + 1} aria-valuemin={0} aria-valuemax={exercises.length}>
        {exercises.map((_, i) => (
          <div key={i} className={cn("h-1.5 flex-1 rounded-full transition-colors", i < idx ? "bg-verde" : i === idx ? "bg-oro" : "bg-inchiostro/10 dark:bg-inchiostro/20")} />
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={ex.id}
          initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -24 }}
          transition={{ duration: 0.25 }}
          className={cn(
            "rounded-3xl border border-soft bg-surface p-6 shadow-sm sm:p-8",
            isCorrect && "card-flash-good",
            isWrong && "card-flash-bad"
          )}
        >
          <VoiceHint />
          <div className="mt-2 flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-inchiostro/5 px-2.5 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-muted-it dark:bg-inchiostro/15">
              {ex.type === "mc" ? "selección múltiple" : ex.type === "tf" ? "verdadero / falso" : ex.type === "fill" ? "completar" : ex.type === "order" ? "ordenar" : ex.type === "dictation" ? "dictado" : "traducción"}
            </span>
            <span className="rounded-full bg-oro-tenue px-2.5 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-oro-scuro dark:text-oro">{ex.level}</span>
          </div>

          <p className="mt-4 text-lg font-semibold leading-snug">{ex.prompt}</p>

          {/* ── MC ── */}
          {ex.type === "mc" && (
            <div className="mt-5 grid gap-2.5">
              {ex.options.map((opt, i) => {
                const isRight = i === ex.answer;
                const showRight = answered && isRight;
                const showWrong = answered && choice === i && !isRight;
                const dimmed = answered && choice !== i && !isRight;
                return (
                  <button
                    key={i}
                    onClick={() => !answered && setChoice(i)}
                    disabled={!!answered}
                    aria-label={`Opción ${i + 1}: ${opt}`}
                    className={cn(
                      "flex min-h-12 items-center justify-between gap-3 rounded-2xl border-2 border-soft bg-crema px-4 py-3 text-left font-medium transition-all",
                      !answered && choice === i && "border-verde bg-verde-tenue",
                      !answered && choice !== i && "hover:border-verde/40",
                      showRight && "border-verde bg-verde-tenue font-bold text-verde-scuro dark:text-verde quiz-reveal",
                      showWrong && "border-rosso bg-rosso-tenue text-rosso-scuro dark:text-rosso quiz-wrong",
                      dimmed && "opacity-40",
                      isCorrect && showRight && "quiz-correct"
                    )}
                  >
                    <span>{opt}</span>
                    {showRight && <Check className="h-5 w-5 shrink-0 text-verde" aria-hidden="true" />}
                    {showWrong && <X className="h-5 w-5 shrink-0 text-rosso" aria-hidden="true" />}
                  </button>
                );
              })}
            </div>
          )}

          {/* ── TF ── */}
          {ex.type === "tf" && (
            <div className="mt-5 grid grid-cols-2 gap-3">
              {[["Vero", true, "✔"], ["Falso", false, "✘"]].map(([lbl, val, sym]) => {
                const isRight = ex.answer === val;
                const showRight = answered && isRight;
                const showWrong = answered && choice === (val ? 1 : 0) && !isRight;
                return (
                  <button
                    key={String(lbl)}
                    onClick={() => !answered && setChoice(val ? 1 : 0)}
                    disabled={!!answered}
                    className={cn(
                      "flex min-h-14 flex-col items-center justify-center gap-1 rounded-2xl border-2 border-soft bg-crema px-4 py-4 font-display text-lg font-semibold transition-all",
                      !answered && choice === (val ? 1 : 0) && "border-verde bg-verde-tenue",
                      !answered && choice !== (val ? 1 : 0) && "hover:border-verde/40",
                      showRight && "border-verde bg-verde-tenue text-verde-scuro dark:text-verde quiz-reveal",
                      showWrong && "border-rosso bg-rosso-tenue text-rosso-scuro dark:text-rosso quiz-wrong",
                      isCorrect && showRight && "quiz-correct"
                    )}
                  >
                    <span>{sym}</span>
                    <span className="text-sm font-sans font-semibold">{lbl}</span>
                  </button>
                );
              })}
            </div>
          )}
          {ex.type === "tf" && <p className="mt-4 rounded-2xl bg-crema-scura p-4 font-display text-lg italic dark:bg-inchiostro/10">“{ex.statement}”</p>}

          {/* ── FILL / TRANSLATE / DICTATION ── */}
          {(ex.type === "fill" || ex.type === "translate" || ex.type === "dictation") && (
            <div className="mt-5">
              {ex.type === "fill" && (
                <p className="rounded-2xl bg-crema-scura p-4 font-display text-xl leading-relaxed dark:bg-inchiostro/10">
                  {ex.sentence.split("___").map((part, i, arr) => (
                    <span key={i}>
                      {part}
                      {i < arr.length - 1 && (
                        <span className={cn(
                          "mx-1 inline-block min-w-16 border-b-2 px-2 text-center font-sans",
                          answered && answered.correct ? "border-verde text-verde" : answered ? "border-rosso text-rosso line-through" : "border-oro"
                        )}>
                          {answered ? typed : (choice === null ? "___" : typed)}
                        </span>
                      )}
                    </span>
                  ))}
                </p>
              )}
              {ex.type === "translate" && (
                <p className="rounded-2xl bg-crema-scura p-4 text-lg font-medium dark:bg-inchiostro/10">🌍 {ex.source}</p>
              )}
              {ex.type === "dictation" && (
                <div className="flex items-center gap-3 rounded-2xl bg-crema-scura p-4 dark:bg-inchiostro/10">
                  <AudioButton text={ex.text} size="lg" label={`Escuchar de nuevo (velocidad ${audioRate}x)`} variant="full" />
                  <span className="text-xs text-muted-it">Escribe exactamente lo que oyes.</span>
                </div>
              )}
              <input
                type="text"
                value={typed}
                onChange={(e) => setTyped(e.target.value)}
                onKeyDown={(e) => { if (e.key === "Enter") { if (answered) { next(); } else { submit(); } } }}
                disabled={!!answered}
                placeholder={ex.type === "dictation" ? "Scrivi qui…" : "Escribe tu respuesta…"}
                aria-label="Respuesta"
                className={cn(
                  "mt-4 min-h-12 w-full rounded-2xl border-2 border-soft bg-crema px-4 py-3 text-base outline-none transition-colors focus:border-verde",
                  answered && answered.correct && "border-verde bg-verde-tenue quiz-correct",
                  answered && !answered.correct && "border-rosso bg-rosso-tenue"
                )}
              />
              {answered && !answered.correct && (
                <p className="mt-2 text-sm text-verde-scuro dark:text-verde">
                  ✔ Respuesta correcta: <strong>{ex.type === "dictation" ? ex.text : (ex as { accepted?: string[] }).accepted?.[0]}</strong>
                </p>
              )}
            </div>
          )}

          {/* ── ORDER ── */}
          {ex.type === "order" && (
            <div className="mt-5">
              <div
                className="flex min-h-14 flex-wrap items-center gap-2 rounded-2xl border-2 border-dashed border-soft bg-crema-scura p-3 dark:bg-inchiostro/10"
                aria-label="Frase construida"
              >
                {built.length === 0 && <span className="px-2 text-sm text-muted-it">Toca las palabras en orden…</span>}
                {built.map((b, pos) => (
                  <button
                    key={`${b.w}-${b.i}`}
                    onClick={() => { if (!answered) { setBuilt(built.filter((_, j) => j !== pos)); setOrderWords(orderWords.map((o, j) => (j === b.i ? { ...o, used: false } : o))); } }}
                    disabled={!!answered}
                    className="rounded-xl border border-verde/40 bg-verde-tenue px-3 py-1.5 text-sm font-semibold text-verde-scuro transition-colors hover:border-rosso/50 dark:text-verde"
                  >
                    {b.w}
                  </button>
                ))}
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {orderWords.map((ow, i) => (
                  <button
                    key={`${ow.w}-${i}`}
                    onClick={() => { if (!answered && !ow.used) { setBuilt([...built, { w: ow.w, i }]); setOrderWords(orderWords.map((o, j) => (j === i ? { ...o, used: true } : o))); } }}
                    disabled={ow.used || !!answered}
                    className={cn(
                      "min-h-11 rounded-xl border-2 border-soft bg-surface px-3.5 py-2 text-sm font-semibold transition-all",
                      ow.used ? "opacity-20" : "hover:border-verde/50 hover:scale-105 active:scale-95"
                    )}
                  >
                    {ow.w}
                  </button>
                ))}
              </div>
              {answered && !answered.correct && (
                <p className="mt-2 text-sm text-verde-scuro dark:text-verde">
                  ✔ Orden correcto: <strong>{ex.answer.join(" ")}</strong>
                </p>
              )}
            </div>
          )}

          {/* ── explicación ── */}
          {answered && "explain" in ex && ex.explain && (
            <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="mt-5 flex gap-3 rounded-2xl bg-oro-tenue p-4">
              <Lightbulb className="mt-0.5 h-5 w-5 shrink-0 text-oro-scuro dark:text-oro" aria-hidden="true" />
              <p className="text-sm leading-relaxed text-oro-scuro dark:text-oro">{ex.explain}</p>
            </motion.div>
          )}
          {answered && ex.type === "dictation" && (
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-3 text-sm text-muted-it">🇪🇸 {ex.es}</motion.p>
          )}

          {/* ── acciones ── */}
          <div className="mt-6 flex items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-sm font-bold">
              {answered && (isCorrect
                ? <span className="inline-flex items-center gap-1.5 text-verde"><Check className="h-4 w-4" aria-hidden /> Corretto! +{xpPerCorrect} XP</span>
                : <span className="inline-flex items-center gap-1.5 text-rosso"><X className="h-4 w-4" aria-hidden /> Sbagliato</span>)}
            </div>
            {!answered ? (
              <button
                onClick={submit}
                disabled={ex.type === "mc" || ex.type === "tf" ? choice === null : (ex.type === "order" ? built.length === 0 : typed.trim() === "")}
                className="inline-flex min-h-11 items-center gap-2 rounded-xl bg-verde px-6 py-2.5 text-sm font-bold text-white shadow-md shadow-verde/25 transition-all hover:scale-[1.03] hover:bg-verde-scuro disabled:cursor-not-allowed disabled:opacity-40 dark:hover:bg-verde dark:hover:text-inchiostro"
              >
                Verifica <Check className="h-4 w-4" aria-hidden="true" />
              </button>
            ) : (
              <button
                onClick={next}
                autoFocus
                className="inline-flex min-h-11 items-center gap-2 rounded-xl bg-inchiostro px-6 py-2.5 text-sm font-bold text-crema transition-all hover:scale-[1.03] active:scale-95 dark:bg-verde dark:text-inchiostro"
              >
                {idx + 1 >= exercises.length ? "Finisci" : "Avanti"} →
              </button>
            )}
          </div>
          {ex.type === "fill" && !answered && typed === "" && (
            <p className="mt-3 text-right"><Eraser className="ml-auto h-3.5 w-3.5 text-muted-it" aria-hidden="true" /></p>
          )}
        </motion.div>
      </AnimatePresence>
      <div className="mt-4 text-center text-xs text-muted-it">
        Puntuación actual: <strong>{score}</strong> de {exercises.length}
      </div>
    </div>
  );
}
