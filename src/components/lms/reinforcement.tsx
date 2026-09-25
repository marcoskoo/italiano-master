"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight, Check, Ear, Heart, Mic, PenLine, Play, Repeat2, RotateCcw, Sparkles, Trophy, Volume2, X,
} from "lucide-react";
import type { Lesson, VocabWord, Exercise } from "@/lib/lms/types";
import { VOCAB, VOCAB_BY_ID } from "@/lib/lms/vocabulary";
import { EXERCISES_BY_ID } from "@/lib/lms/exercises";
import { speak } from "@/lib/lms/tts";
import { normalizeItalian } from "@/lib/lms/numbers";
import { useLms } from "@/lib/lms/store";
import { cn } from "@/lib/utils";

/* ── Refuerzo post-lección · estilo Duolingo ──────────────────────────
   Cuatro fases auto-generadas del contenido de CADA lección:
   1. Quiz relámpago (vocabulario bidireccional + cloze + banco de palabras)
   2. Escucha (TTS → elegir lo que oíste)
   3. Pronunciación (repetir tras el audio, con reconocimiento de voz)
   4. Escritura (redacción breve con palabras obligatorias)            */

/* ── utilidades ── */
function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function levenshtein(a: string, b: string): number {
  const m = a.length, n = b.length;
  if (!m) return n;
  if (!n) return m;
  let prev = Array.from({ length: n + 1 }, (_, i) => i);
  for (let i = 1; i <= m; i++) {
    const cur = [i];
    for (let j = 1; j <= n; j++) {
      cur[j] = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
    }
    prev = cur;
  }
  return prev[n];
}

function similarity(a: string, b: string): number {
  const na = normalizeItalian(a), nb = normalizeItalian(b);
  if (!na || !nb) return 0;
  if (na === nb) return 1;
  return Math.max(0, 1 - levenshtein(na, nb) / Math.max(na.length, nb.length));
}

const includesWord = (text: string, word: string) =>
  normalizeItalian(text).includes(normalizeItalian(word));

/* distractores únicos: nunca repite la respuesta correcta ni entre sí */
function pickDistractors(all: VocabWord[], correct: VocabWord, key: "it" | "es", n: number): string[] {
  const correctVal = normalizeItalian(correct[key]);
  const seen = new Set([correctVal]);
  const out: string[] = [];
  for (const v of shuffle(all)) {
    if (v.id === correct.id) continue;
    const val = v[key];
    const nk = normalizeItalian(val);
    if (seen.has(nk)) continue;
    seen.add(nk);
    out.push(val);
    if (out.length === n) break;
  }
  return out;
}

/* extrae palabras del diccionario presentes en un texto (para lecciones sin vocabIds) */
function wordsInText(text: string, all: VocabWord[]): VocabWord[] {
  const t = ` ${normalizeItalian(text)} `;
  return all.filter((v) => {
    const bare = normalizeItalian(v.it.replace(/^(il|lo|la|l'|un|una|le|gli|i)\s+/, ""));
    return bare.length >= 3 && t.includes(` ${bare} `);
  });
}

/* ── tipos de pregunta del quiz ── */
type QuizQ =
  | { kind: "mc"; word: VocabWord; options: string[]; answer: number }            // IT→ES
  | { kind: "rev"; word: VocabWord; options: string[]; answer: number }            // ES→IT
  | { kind: "cloze"; sentence: string; es: string; word: string; options: string[]; answer: number }
  | { kind: "bank"; es: string; tiles: string[]; answer: string[] }                // construir frase
  | { kind: "ex"; ex: Exercise };                                                   // ejercicio de la lección

interface ListenQ { audio: string; options: string[]; answer: number; es: string; long: boolean }

/* ── generadores ── */
export function buildQuiz(lesson: Lesson, allVocab: VocabWord[]): QuizQ[] {
  const words = lesson.vocabIds.map((id) => VOCAB_BY_ID[id]).filter(Boolean);
  const qs: QuizQ[] = [];

  // 1) IT→ES con distractores únicos (mismo nivel si es posible)
  for (const w of words.slice(0, 3)) {
    const sameLevel = allVocab.filter((v) => v.id !== w.id && v.level === w.level);
    const distractors = pickDistractors(sameLevel.length >= 3 ? sameLevel : allVocab, w, "es", 3);
    const options = shuffle([w.es, ...distractors]);
    qs.push({ kind: "mc", word: w, options, answer: options.indexOf(w.es) });
  }

  // 2) ES→IT (2 preguntas)
  for (const w of shuffle(words).slice(0, 2)) {
    const distractors = pickDistractors(allVocab, w, "it", 3);
    const options = shuffle([w.it, ...distractors]);
    qs.push({ kind: "rev", word: w, options, answer: options.indexOf(w.it) });
  }

  // 3) cloze: sustituir una palabra del vocabulario que aparezca en un ejemplo
  const clozeReady = lesson.examples.filter((ex) =>
    words.some((w) => ex.it.toLowerCase().includes(w.it.toLowerCase().replace(/^(il|lo|la|l'|un|una)\s+/, "")))
  );
  for (const ex of shuffle(clozeReady).slice(0, 1)) {
    const w = shuffle(words.filter((v) =>
      ex.it.toLowerCase().includes(v.it.toLowerCase().replace(/^(il|lo|la|l'|un|una)\s+/, ""))
    ))[0];
    if (!w) continue;
    const bare = w.it.replace(/^(il|lo|la|l'|un|una)\s+/, "");
    const distractors = pickDistractors(allVocab, w, "it", 3).map((d) => d.replace(/^(il|lo|la|l'|un|una)\s+/, ""));
    const options = shuffle([bare, ...distractors]);
    qs.push({
      kind: "cloze",
      sentence: ex.it.replace(new RegExp(bare, "i"), "___"),
      es: ex.es,
      word: bare,
      options,
      answer: options.indexOf(bare),
    });
  }

  // 4) banco de palabras: construir la frase italiana a partir del español
  const bankEx = shuffle(lesson.examples)[0];
  if (bankEx && bankEx.it.split(" ").length >= 3 && bankEx.it.split(" ").length <= 9) {
    const tiles = bankEx.it.replace(/[.!?]$/, "").split(" ");
    qs.push({ kind: "bank", es: bankEx.es, tiles: shuffle(tiles), answer: tiles });
  }

  // 5) 1-2 ejercicios de la propia lección (mc preferidos)
  const lessonEx = lesson.exerciseIds.map((id) => EXERCISES_BY_ID[id]).filter((e): e is Exercise =>
    Boolean(e) && (e.type === "mc" || e.type === "tf" || e.type === "fill")
  );
  for (const ex of shuffle(lessonEx).slice(0, 2)) qs.push({ kind: "ex", ex });

  return shuffle(qs).slice(0, 8);
}

export function buildListening(lesson: Lesson, allVocab: VocabWord[]): ListenQ[] {
  const words = lesson.vocabIds.map((id) => VOCAB_BY_ID[id]).filter(Boolean);
  const qs: ListenQ[] = [];

  // 3 palabras sueltas (o detectadas en los ejemplos si no hay vocabIds)
  const pool = words.length ? words : wordsInText(lesson.examples.map((e) => e.it).join(" "), allVocab);
  for (const w of shuffle(pool).slice(0, 3)) {
    const distractors = pickDistractors(allVocab, w, "it", 2);
    const options = shuffle([w.it, ...distractors]);
    qs.push({ audio: w.it, options, answer: options.indexOf(w.it), es: w.es, long: false });
  }
  // 1 frase completa (ejemplo corto)
  const shortEx = shuffle(lesson.examples.filter((e) => e.it.split(" ").length <= 8))[0];
  if (shortEx) {
    const others = shuffle(lesson.examples.filter((e) => e.it !== shortEx.it)).slice(0, 2);
    const filler = shuffle(allVocab).slice(0, 2 - others.length).map((v) => ({ it: v.it, es: v.es }));
    const opts = [shortEx.it, ...others.map((p) => p.it), ...filler.map((p) => p.it)].slice(0, 3);
    const options = shuffle(opts);
    qs.push({ audio: shortEx.it, options, answer: options.indexOf(shortEx.it), es: shortEx.es, long: true });
  }
  return qs.slice(0, 4);
}

export function buildPronunciation(lesson: Lesson) {
  return shuffle(lesson.examples).slice(0, 3);
}

export function buildWriting(lesson: Lesson) {
  const dictWords = lesson.vocabIds.map((id) => VOCAB_BY_ID[id]).filter(Boolean);
  // fallback para lecciones de repaso/examen sin vocabIds: palabras que aparecen en los ejemplos
  const required = dictWords.length >= 3
    ? dictWords
    : [...dictWords, ...wordsInText(lesson.examples.map((e) => e.it).join(" "), VOCAB).filter((v) => !dictWords.some((d) => d.id === v.id))];
  const picked = shuffle(required).slice(0, 3);
  const beginner = lesson.level === "zero" || lesson.level === "A1";
  return {
    required: picked,
    task: picked.length === 0
      ? `Escritura libre: escribe un mini-texto (mínimo ${beginner ? 8 : 15} palabras) resumiendo lo que aprendiste en esta lección.`
      : beginner
        ? "Escribe 2 frases cortas (mínimo 8 palabras en total) usando las tres palabras obligatorias."
        : "Escribe un mini-texto de al menos 15 palabras usando las tres palabras obligatorias.",
    minWords: beginner ? 8 : 15,
    model: lesson.examples,
  };
}

/* ── detección de SpeechRecognition ── */
function getSR(): any | null {
  if (typeof window === "undefined") return null;
  return (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition || null;
}

/* ═══════════════ COMPONENTE PRINCIPAL ═══════════════ */

type Phase = "intro" | "quiz" | "ascolto" | "pronuncia" | "scrittura" | "summary";

const PHASES: { id: Exclude<Phase, "intro" | "summary">; label: string; icon: typeof Ear; emoji: string }[] = [
  { id: "quiz", label: "Quiz", icon: Sparkles, emoji: "⚡" },
  { id: "ascolto", label: "Escucha", icon: Ear, emoji: "🎧" },
  { id: "pronuncia", label: "Pronunciación", icon: Mic, emoji: "🗣️" },
  { id: "scrittura", label: "Escritura", icon: PenLine, emoji: "✍️" },
];

export function LessonReinforcement({ lesson, onDone }: { lesson: Lesson; onDone?: (totalXp: number) => void }) {
  const [phase, setPhase] = useState<Phase>("intro");
  const [xpTotal, setXpTotal] = useState(0);

  const bumpXp = (n: number) => setXpTotal((x) => x + n);

  const finishAll = useCallback((extra: number) => {
    const total = xpTotal + extra;
    setXpTotal(total);
    setPhase("summary");
    onDone?.(total);
  }, [xpTotal, onDone]);

  const quizQs = useMemo(() => buildQuiz(lesson, VOCAB), [lesson]);
  const listenQs = useMemo(() => buildListening(lesson, VOCAB), [lesson]);
  const pronItems = useMemo(() => buildPronunciation(lesson), [lesson]);
  const writing = useMemo(() => buildWriting(lesson), [lesson]);

  const srAvailable = useMemo(() => getSR() !== null, []);

  return (
    <div className="mx-auto max-w-2xl">
      {/* stepper de fases */}
      {phase !== "intro" && phase !== "summary" && (
        <div className="mb-5 flex items-center justify-center gap-1.5 sm:gap-2" aria-label="Fases del refuerzo">
          {PHASES.map((p, i) => {
            const active = phase === p.id;
            const done = PHASES.findIndex((x) => x.id === phase) > i;
            return (
              <span
                key={p.id}
                className={cn(
                  "inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[11px] font-bold transition-all",
                  active ? "bg-verde text-white shadow-md shadow-verde/25" : done ? "bg-verde-tenue text-verde-scuro dark:text-verde" : "bg-inchiostro/5 text-muted-it"
                )}
              >
                {done ? <Check className="h-3.5 w-3.5" aria-hidden="true" /> : <p.icon className="h-3.5 w-3.5" aria-hidden="true" />}
                <span className="hidden sm:inline">{p.label}</span>
              </span>
            );
          })}
        </div>
      )}

      {phase === "intro" && <Intro lessonTitle={lesson.title} onStart={() => setPhase("quiz")} nQuiz={quizQs.length} nListen={listenQs.length} nPron={pronItems.length} />}
      {phase === "quiz" && <QuizPhase qs={quizQs} onXp={bumpXp} onNext={() => setPhase("ascolto")} />}
      {phase === "ascolto" && <ListenPhase qs={listenQs} onXp={bumpXp} onNext={() => setPhase("pronuncia")} />}
      {phase === "pronuncia" && <PronPhase items={pronItems} srAvailable={srAvailable} onXp={bumpXp} onNext={() => setPhase("scrittura")} />}
      {phase === "scrittura" && <WritingPhase writing={writing} level={lesson.level} onXp={bumpXp} onDone={finishAll} />}
      {phase === "summary" && <Summary xp={xpTotal} onRepeat={() => { setXpTotal(0); setPhase("quiz"); }} />}
    </div>
  );
}

/* ── pantalla de introducción ── */
function Intro({ lessonTitle, onStart, nQuiz, nListen, nPron }: { lessonTitle: string; onStart: () => void; nQuiz: number; nListen: number; nPron: number }) {
  return (
    <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="rounded-3xl border-2 border-verde/40 bg-verde-tenue/50 p-8 text-center dark:bg-verde-tenue/20">
      <p className="text-5xl" aria-hidden="true">🎯</p>
      <h2 className="mt-3 font-display text-3xl font-semibold">Rinforzo della lezione</h2>
      <p className="mt-2 text-sm leading-relaxed text-muted-it">
        Refuerzo de <b>{lessonTitle}</b>: cuatro bloques rápidos para fijar lo aprendido. Como en Duolingo:
        vidas, barra de progreso y feedback inmediato.
      </p>
      <ul className="mx-auto mt-6 flex max-w-md flex-col gap-2 text-left text-sm">
        {[
          { emoji: "⚡", t: `Quiz relámpago (${nQuiz} preguntas)`, d: "Vocabulario, huecos y construcción de frases · 3 vidas" },
          { emoji: "🎧", t: `Escucha (${nListen} audios)`, d: "Escucha el italiano y elige lo que oíste" },
          { emoji: "🗣️", t: `Pronunciación (${nPron} frases)`, d: "Repite tras el audio y compara tu voz" },
          { emoji: "✍️", t: "Escritura breve", d: "Redacta con palabras obligatorias de la lección" },
        ].map((it) => (
          <li key={it.t} className="flex items-start gap-3 rounded-2xl bg-surface p-3.5">
            <span className="text-xl leading-none" aria-hidden="true">{it.emoji}</span>
            <span><b className="block">{it.t}</b><span className="text-xs text-muted-it">{it.d}</span></span>
          </li>
        ))}
      </ul>
      <button onClick={onStart} className="mt-7 inline-flex min-h-14 items-center gap-2 rounded-2xl bg-verde px-8 py-4 text-lg font-bold text-white shadow-xl shadow-verde/30 transition-all hover:scale-[1.02]">
        <Play className="h-5 w-5" aria-hidden="true" /> Inizia!
      </button>
    </motion.div>
  );
}

/* ── barra de feedback tipo Duolingo ── */
function FeedbackBar({ correct, title, detail, onContinue }: { correct: boolean; title: string; detail?: string; onContinue: () => void }) {
  return (
    <motion.div
      initial={{ y: 80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={cn("fixed inset-x-0 bottom-0 z-40 border-t-4 px-4 py-4 sm:px-6", correct ? "border-verde bg-verde-tenue quiz-correct" : "border-rosso bg-rosso-tenue quiz-wrong")}
      role="status"
    >
      <div className="mx-auto flex max-w-2xl items-center justify-between gap-4">
        <div className="min-w-0">
          <p className={cn("flex items-center gap-2 font-display text-lg font-bold", correct ? "text-verde-scuro dark:text-verde" : "text-rosso-scuro dark:text-rosso")}>
            {correct ? <Check className="h-5 w-5" aria-hidden="true" /> : <X className="h-5 w-5" aria-hidden="true" />}
            {title}
          </p>
          {detail && <p className="mt-0.5 truncate text-xs text-muted-it sm:whitespace-normal">{detail}</p>}
        </div>
        <button
          onClick={onContinue}
          autoFocus
          className="inline-flex min-h-12 shrink-0 items-center gap-2 rounded-xl bg-inchiostro px-6 py-3 text-sm font-bold uppercase tracking-wide text-crema transition-all hover:scale-105 dark:bg-verde dark:text-inchiostro"
        >
          Continua <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </button>
      </div>
    </motion.div>
  );
}

/* ── FASE 1 · Quiz con vidas ── */
function QuizPhase({ qs, onXp, onNext }: { qs: QuizQ[]; onXp: (n: number) => void; onNext: () => void }) {
  const [idx, setIdx] = useState(0);
  const [hearts, setHearts] = useState(3);
  const [correctCount, setCorrectCount] = useState(0);
  const [feedback, setFeedback] = useState<{ ok: boolean; detail?: string } | null>(null);
  const [choice, setChoice] = useState<number | null>(null);
  const [tiles, setTiles] = useState<{ w: string; used: boolean }[]>([]);
  const [built, setBuilt] = useState<string[]>([]);
  const [typed, setTyped] = useState("");
  const [finished, setFinished] = useState(false);
  const addXp = useLms((s) => s.addXp);
  const recordCorrect = useLms((s) => s.recordCorrect);
  const recordError = useLms((s) => s.recordError);
  const recordQuiz = useLms((s) => s.recordQuiz);

  const q = qs[idx];

  useEffect(() => {
    setChoice(null); setTyped(""); setBuilt([]);
    if (q?.kind === "bank") setTiles(q.tiles.map((w) => ({ w, used: false })));
  }, [idx, q]);

  const total = qs.length;
  const dead = hearts <= 0;

  const submit = () => {
    if (!q || feedback) return;
    let ok = false;
    let detail = "";
    if (q.kind === "mc" || q.kind === "rev") {
      ok = choice === q.answer;
      detail = `«${q.word.it}» = ${q.word.es}`;
    } else if (q.kind === "cloze") {
      ok = choice === q.answer;
      detail = `La palabra correcta era «${q.word}».`;
    } else if (q.kind === "bank") {
      ok = built.join(" ") === q.answer.join(" ");
      detail = `Frase correcta: «${q.answer.join(" ")}»`;
    } else if (q.kind === "ex") {
      const ex = q.ex;
      if (ex.type === "mc") { ok = choice === ex.answer; detail = ex.explain; }
      else if (ex.type === "tf") { ok = (choice === 1) === ex.answer; detail = ex.explain; }
      else if (ex.type === "fill") {
        ok = ex.accepted.some((a) => normalizeItalian(a) === normalizeItalian(typed));
        detail = `Correcto: «${ex.accepted[0]}» · ${ex.explain}`;
      }
    }
    setFeedback({ ok, detail });
    const topic = q.kind === "ex" ? q.ex.topic : "vocabolario";
    const skill = q.kind === "mc" || q.kind === "rev" ? "vocabolario" : "grammatica";
    if (ok) {
      setCorrectCount((c) => c + 1);
      addXp(6, skill);
      onXp(6);
      recordCorrect(topic);
    } else {
      setHearts((h) => Math.max(0, h - 1));
      recordError(topic);
    }
  };

  const advance = () => {
    setFeedback(null);
    if (dead || idx + 1 >= total) {
      recordQuiz({ id: `${Date.now()}`, label: "Rinforzo · Quiz", score: correctCount, total, date: new Date().toISOString(), kind: "repaso" });
      setFinished(true);
    } else {
      setIdx(idx + 1);
    }
  };

  if (finished || dead) {
    return (
      <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} className="rounded-3xl border border-soft bg-surface p-8 text-center">
        <p className="text-5xl" aria-hidden="true">{dead ? "💔" : correctCount === total ? "🏆" : "✅"}</p>
        <h3 className="mt-3 font-display text-2xl font-semibold">
          {dead ? "Vidas agotadas!" : "Quiz completato!"}
        </h3>
        <p className="mt-2 text-sm text-muted-it">
          {dead
            ? `Acertaste ${correctCount} de ${idx + (feedback ? 1 : 0)}. Sin problema: el repaso SRS recuperará estas palabras.`
            : `${correctCount}/${total} correctas · +${correctCount * 6} XP`}
        </p>
        <button onClick={onNext} className="mt-6 inline-flex min-h-12 items-center gap-2 rounded-xl bg-verde px-6 py-3 font-bold text-white shadow-md shadow-verde/25 transition-all hover:scale-[1.02]">
          Continua con la escucha <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </button>
      </motion.div>
    );
  }

  if (!q) {
    return (
      <div className="rounded-3xl border border-soft bg-surface p-8 text-center">
        <p className="text-sm text-muted-it">Esta lección no genera preguntas de quiz para el refuerzo.</p>
        <button onClick={onNext} className="mt-5 inline-flex min-h-11 items-center gap-2 rounded-xl bg-verde px-5 py-2.5 text-sm font-bold text-white">Continua con la escucha <ArrowRight className="h-4 w-4" aria-hidden="true" /></button>
      </div>
    );
  }
  const progress = Math.round((idx / total) * 100);

  return (
    <div className={cn("rounded-3xl border-2 bg-surface transition-colors", feedback?.ok === true ? "border-verde" : feedback?.ok === false ? "border-rosso" : "border-soft")}>
      {/* progreso + vidas */}
      <div className="flex items-center gap-3 border-b border-soft px-5 py-3.5">
        <div className="h-3 flex-1 overflow-hidden rounded-full bg-inchiostro/10">
          <motion.div className="h-full rounded-full bg-verde" animate={{ width: `${progress}%` }} transition={{ type: "spring", stiffness: 120 }} />
        </div>
        <span className="flex items-center gap-1" aria-label={`${hearts} vidas`}>
          {Array.from({ length: 3 }).map((_, i) => (
            <Heart key={i} className={cn("h-5 w-5", i < hearts ? "fill-rosso text-rosso" : "text-inchiostro/20")} aria-hidden="true" />
          ))}
        </span>
      </div>

      <div className="p-6 sm:p-8">
        {/* enunciado según tipo */}
        {q.kind === "mc" && (
          <>
            <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-muted-it">Che cosa significa?</p>
            <p className="mt-3 text-center font-display text-3xl font-semibold italic">{q.word.it}</p>
            <div className="mt-6 grid gap-2.5 sm:grid-cols-2">
              {q.options.map((o, i) => (
                <button key={i} onClick={() => !feedback && setChoice(i)} disabled={!!feedback}
                  className={cn("min-h-12 rounded-2xl border-2 px-4 py-3 text-left text-sm font-bold transition-all",
                    choice === i ? "border-verde bg-verde-tenue" : "border-soft hover:border-verde/40",
                    feedback && i === q.answer ? "border-verde bg-verde-tenue" : "",
                    feedback && choice === i && i !== q.answer ? "border-rosso bg-rosso-tenue" : "")}>
                  {o}
                </button>
              ))}
            </div>
          </>
        )}

        {q.kind === "rev" && (
          <>
            <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-muted-it">Come si dice in italiano?</p>
            <p className="mt-3 text-center font-display text-2xl font-semibold">«{q.word.es}»</p>
            <div className="mt-6 grid gap-2.5 sm:grid-cols-2">
              {q.options.map((o, i) => (
                <button key={i} onClick={() => !feedback && setChoice(i)} disabled={!!feedback}
                  className={cn("min-h-12 rounded-2xl border-2 px-4 py-3 text-left text-sm font-bold italic transition-all",
                    choice === i ? "border-verde bg-verde-tenue" : "border-soft hover:border-verde/40",
                    feedback && i === q.answer ? "border-verde bg-verde-tenue" : "",
                    feedback && choice === i && i !== q.answer ? "border-rosso bg-rosso-tenue" : "")}>
                  {o}
                </button>
              ))}
            </div>
          </>
        )}

        {q.kind === "cloze" && (
          <>
            <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-muted-it">Completa la frase</p>
            <p className="mt-4 text-center font-display text-xl font-semibold leading-relaxed">{q.sentence}</p>
            <p className="mt-1 text-center text-sm text-muted-it">({q.es})</p>
            <div className="mt-6 grid gap-2.5 sm:grid-cols-2">
              {q.options.map((o, i) => (
                <button key={i} onClick={() => !feedback && setChoice(i)} disabled={!!feedback}
                  className={cn("min-h-12 rounded-2xl border-2 px-4 py-3 text-sm font-bold transition-all",
                    choice === i ? "border-verde bg-verde-tenue" : "border-soft hover:border-verde/40",
                    feedback && i === q.answer ? "border-verde bg-verde-tenue" : "",
                    feedback && choice === i && i !== q.answer ? "border-rosso bg-rosso-tenue" : "")}>
                  {o}
                </button>
              ))}
            </div>
          </>
        )}

        {q.kind === "bank" && (
          <>
            <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-muted-it">Costruisci la frase</p>
            <p className="mt-3 rounded-2xl bg-verde-tenue/60 p-4 text-center font-display text-lg font-semibold">«{q.es}»</p>
            <div className="mt-4 flex min-h-14 flex-wrap items-center gap-2 rounded-2xl border-2 border-dashed border-soft p-3">
              {built.length === 0 && <span className="px-1 text-sm text-muted-it">Toca las palabras en orden…</span>}
              {built.map((w, i) => (
                <button key={`${w}-${i}`} onClick={() => { if (feedback) return; setBuilt(built.filter((_, j) => j !== i)); setTiles(tiles.map((t) => (t.w === w && t.used ? { ...t, used: false } : t))); }}
                  className="rounded-xl border border-verde/40 bg-verde-tenue px-3 py-1.5 text-sm font-bold text-verde-scuro dark:text-verde">
                  {w}
                </button>
              ))}
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              {tiles.map((t, i) => (
                <button key={`${t.w}-${i}`} disabled={t.used || !!feedback}
                  onClick={() => { setBuilt([...built, t.w]); setTiles(tiles.map((x, j) => (j === i ? { ...x, used: true } : x))); }}
                  className={cn("min-h-11 rounded-xl border-2 border-soft bg-crema px-3.5 py-2 text-sm font-semibold transition-all", t.used ? "opacity-20" : "hover:-translate-y-0.5 hover:border-verde/50")}>
                  {t.w}
                </button>
              ))}
            </div>
          </>
        )}

        {q.kind === "ex" && q.ex.type === "mc" && (() => {
          const mc = q.ex as Extract<Exercise, { type: "mc" }>;
          return (
            <>
              <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-muted-it">Dalla lezione</p>
              <p className="mt-3 text-center font-display text-xl font-semibold leading-relaxed">{mc.prompt}</p>
              <div className="mt-6 grid gap-2.5 sm:grid-cols-2">
                {mc.options.map((o, i) => (
                  <button key={i} onClick={() => !feedback && setChoice(i)} disabled={!!feedback}
                    className={cn("min-h-12 rounded-2xl border-2 px-4 py-3 text-left text-sm font-bold transition-all",
                      choice === i ? "border-verde bg-verde-tenue" : "border-soft hover:border-verde/40",
                      feedback && i === mc.answer ? "border-verde bg-verde-tenue" : "")}>
                    {o}
                  </button>
                ))}
              </div>
            </>
          );
        })()}

        {q.kind === "ex" && q.ex.type === "tf" && (
          <>
            <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-muted-it">Vero o falso?</p>
            <p className="mt-3 text-center font-display text-xl font-semibold">{q.ex.statement}</p>
            <div className="mt-6 grid grid-cols-2 gap-3">
              {[falso, vero].map((o, i) => (
                <button key={o} onClick={() => !feedback && setChoice(i)} disabled={!!feedback}
                  className={cn("min-h-14 rounded-2xl border-2 text-lg font-bold transition-all",
                    choice === i ? "border-verde bg-verde-tenue" : "border-soft hover:border-verde/40")}>
                  {o === vero ? "✅ Vero" : "❌ Falso"}
                </button>
              ))}
            </div>
          </>
        )}

        {q.kind === "ex" && q.ex.type === "fill" && (
          <>
            <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-muted-it">Completa</p>
            <p className="mt-3 text-center font-display text-xl font-semibold leading-relaxed">{q.ex.prompt}</p>
            <input value={typed} onChange={(e) => setTyped(e.target.value)} disabled={!!feedback} onKeyDown={(e) => e.key === "Enter" && (feedback ? advance() : submit())}
              placeholder="scrivi qui…" aria-label="Respuesta"
              className="mx-auto mt-6 block w-full max-w-sm rounded-2xl border border-soft bg-crema px-4 py-3 text-center text-lg font-semibold outline-none focus:ring-2 focus:ring-verde/40" />
          </>
        )}

        {/* botón verificar */}
        {!feedback && (
          <button
            onClick={submit}
            disabled={q.kind === "bank" ? built.length !== q.answer.length : q.kind === "ex" && q.ex.type === "fill" ? !typed.trim() : choice === null}
            className="mt-7 inline-flex min-h-12 w-full items-center justify-center rounded-2xl bg-verde px-6 py-3 font-bold uppercase tracking-wide text-white shadow-lg shadow-verde/25 transition-all hover:scale-[1.01] disabled:opacity-40"
          >
            Verifica
          </button>
        )}
      </div>

      {feedback && <FeedbackBar correct={feedback.ok} title={feedback.ok ? "Corretto! +6 XP" : "Quasi!"} detail={feedback.detail} onContinue={advance} />}
    </div>
  );
}
const vero = "vero", falso = "falso";

/* ── FASE 2 · Escucha ── */
function ListenPhase({ qs, onXp, onNext }: { qs: ListenQ[]; onXp: (n: number) => void; onNext: () => void }) {
  const [idx, setIdx] = useState(0);
  const [choice, setChoice] = useState<number | null>(null);
  const [feedback, setFeedback] = useState<{ ok: boolean } | null>(null);
  const [correct, setCorrect] = useState(0);
  const [finished, setFinished] = useState(false);
  const audioRate = useLms((s) => s.settings.audioRate);
  const addXp = useLms((s) => s.addXp);
  const recordCorrect = useLms((s) => s.recordCorrect);
  const recordError = useLms((s) => s.recordError);

  const q = qs[idx];

  useEffect(() => {
    if (q && !feedback) {
      const t = setTimeout(() => speak(q.audio, { rate: audioRate }), 350);
      return () => clearTimeout(t);
    }
  }, [q, audioRate, feedback]);

  if (!q) {
    return (
      <div className="rounded-3xl border border-soft bg-surface p-8 text-center">
        <p className="text-sm text-muted-it">Esta lección no genera audios de escucha para el refuerzo.</p>
        <button onClick={onNext} className="mt-5 inline-flex min-h-11 items-center gap-2 rounded-xl bg-verde px-5 py-2.5 text-sm font-bold text-white">Continua con la pronunciación <ArrowRight className="h-4 w-4" aria-hidden="true" /></button>
      </div>
    );
  }

  if (finished) {
    return (
      <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} className="rounded-3xl border border-soft bg-surface p-8 text-center">
        <p className="text-5xl" aria-hidden="true">🎧</p>
        <h3 className="mt-3 font-display text-2xl font-semibold">Ascolto completato!</h3>
        <p className="mt-2 text-sm text-muted-it">{correct}/{qs.length} aciertos · +{correct * 6} XP</p>
        <button onClick={onNext} className="mt-6 inline-flex min-h-12 items-center gap-2 rounded-xl bg-verde px-6 py-3 font-bold text-white shadow-md shadow-verde/25 transition-all hover:scale-[1.02]">
          Continua con la pronunciación <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </button>
      </motion.div>
    );
  }

  const submit = () => {
    if (feedback) return;
    const ok = choice === q.answer;
    setFeedback({ ok });
    if (ok) {
      setCorrect((c) => c + 1);
      addXp(6, "ascolto");
      onXp(6);
      recordCorrect("ascolto");
    } else {
      recordError("ascolto");
    }
  };

  const advance = () => {
    setFeedback(null);
    if (idx + 1 >= qs.length) setFinished(true);
    else { setIdx(idx + 1); setChoice(null); }
  };

  const progress = Math.round((idx / qs.length) * 100);

  return (
    <div className={cn("rounded-3xl border-2 bg-surface transition-colors", feedback?.ok === true ? "border-verde" : feedback?.ok === false ? "border-rosso" : "border-soft")}>
      <div className="flex items-center gap-3 border-b border-soft px-5 py-3.5">
        <div className="h-3 flex-1 overflow-hidden rounded-full bg-inchiostro/10">
          <motion.div className="h-full rounded-full bg-oro" animate={{ width: `${progress}%` }} />
        </div>
        <span className="text-xs font-bold text-muted-it">{idx + 1}/{qs.length}</span>
      </div>

      <div className="p-6 sm:p-8">
        <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-muted-it">Ascolta e scegli</p>

        <button
          onClick={() => speak(q.audio, { rate: audioRate })}
          className="mx-auto mt-6 flex h-24 w-24 items-center justify-center rounded-full bg-verde text-white shadow-xl shadow-verde/30 transition-all hover:scale-105 active:scale-95"
          aria-label="Riproduci l'audio"
        >
          <Volume2 className="h-10 w-10" aria-hidden="true" />
        </button>
        <p className="mt-3 text-center text-xs text-muted-it">
          {q.long ? "Frase completa · puoi riascoltare quante volte vuoi" : "Parola · puoi riascoltare quante volte vuoi"}
        </p>

        <div className="mt-6 grid gap-2.5">
          {q.options.map((o, i) => (
            <button key={i} onClick={() => !feedback && setChoice(i)} disabled={!!feedback}
              className={cn("min-h-12 rounded-2xl border-2 px-4 py-3 text-center text-sm font-bold transition-all",
                choice === i ? "border-verde bg-verde-tenue" : "border-soft hover:border-verde/40",
                feedback && i === q.answer ? "border-verde bg-verde-tenue" : "",
                feedback && choice === i && i !== q.answer ? "border-rosso bg-rosso-tenue" : "")}>
              {o}
            </button>
          ))}
        </div>

        {!feedback && (
          <button onClick={submit} disabled={choice === null}
            className="mt-7 inline-flex min-h-12 w-full items-center justify-center rounded-2xl bg-verde px-6 py-3 font-bold uppercase tracking-wide text-white shadow-lg shadow-verde/25 transition-all hover:scale-[1.01] disabled:opacity-40">
            Verifica
          </button>
        )}
      </div>

      {feedback && (
        <FeedbackBar
          correct={feedback.ok}
          title={feedback.ok ? "Esatto! +6 XP" : "Quasi!"}
          detail={feedback.ok ? `«${q.audio}» = ${q.es}` : `Era «${q.audio}» = ${q.es}`}
          onContinue={advance}
        />
      )}
    </div>
  );
}

/* ── FASE 3 · Pronunciación ── */
function PronPhase({ items, srAvailable, onXp, onNext }: { items: { it: string; es: string }[]; srAvailable: boolean; onXp: (n: number) => void; onNext: () => void }) {
  const [idx, setIdx] = useState(0);
  const [listening, setListening] = useState(false);
  const [transcript, setTranscript] = useState<string | null>(null);
  const [score, setScore] = useState<number | null>(null);
  const [finished, setFinished] = useState(false);
  const recRef = useRef<any>(null);
  const audioRate = useLms((s) => s.settings.audioRate);
  const addXp = useLms((s) => s.addXp);
  const recordCorrect = useLms((s) => s.recordCorrect);

  const item = items[idx];

  const startListening = () => {
    const SR = getSR();
    if (!SR || listening) return;
    const rec = new SR();
    recRef.current = rec;
    rec.lang = "it-IT";
    rec.interimResults = false;
    rec.maxAlternatives = 1;
    setListening(true);
    setTranscript(null);
    setScore(null);
    rec.onresult = (e: any) => {
      const text = e.results?.[0]?.[0]?.transcript ?? "";
      setTranscript(text);
      const sim = similarity(text, item.it);
      setScore(sim);
      const xp = sim >= 0.8 ? 12 : sim >= 0.5 ? 8 : 4;
      addXp(xp, "pronuncia");
      onXp(xp);
      if (sim >= 0.5) recordCorrect("ascolto");
    };
    rec.onerror = () => { setListening(false); setTranscript(""); };
    rec.onend = () => setListening(false);
    rec.start();
  };

  const selfAssess = (xp: number, label: string) => {
    if (listening) return;
    setTranscript(`(autoevaluación: ${label})`);
    setScore(xp >= 10 ? 0.9 : xp >= 6 ? 0.6 : 0.3);
    addXp(xp, "pronuncia");
    onXp(xp);
  };

  const advance = () => {
    setTranscript(null); setScore(null);
    if (idx + 1 >= items.length) setFinished(true);
    else setIdx(idx + 1);
  };

  if (finished) {
    return (
      <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} className="rounded-3xl border border-soft bg-surface p-8 text-center">
        <p className="text-5xl" aria-hidden="true">🗣️</p>
        <h3 className="mt-3 font-display text-2xl font-semibold">Pronuncia completata!</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-it">
          {srAvailable ? "Reconocimiento de voz registrado. La pronunciación se fija repitiendo en voz alta: inténtalo también sin micrófono." : "Micrófono no disponible en este navegador: has practicado con autoevaluación."}
        </p>
        <button onClick={onNext} className="mt-6 inline-flex min-h-12 items-center gap-2 rounded-xl bg-verde px-6 py-3 font-bold text-white shadow-md shadow-verde/25 transition-all hover:scale-[1.02]">
          Continua con la escritura <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </button>
      </motion.div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="rounded-3xl border border-soft bg-surface p-8 text-center">
        <p className="text-sm text-muted-it">Esta lección no tiene frases de ejemplo para pronunciar.</p>
        <button onClick={onNext} className="mt-5 inline-flex min-h-11 items-center rounded-xl bg-verde px-5 py-2.5 text-sm font-bold text-white">Saltar →</button>
      </div>
    );
  }

  const progress = Math.round((idx / items.length) * 100);

  return (
    <div className="rounded-3xl border border-soft bg-surface">
      <div className="flex items-center gap-3 border-b border-soft px-5 py-3.5">
        <div className="h-3 flex-1 overflow-hidden rounded-full bg-inchiostro/10">
          <motion.div className="h-full rounded-full bg-rosso" animate={{ width: `${progress}%` }} />
        </div>
        <span className="text-xs font-bold text-muted-it">{idx + 1}/{items.length}</span>
      </div>

      <div className="p-6 sm:p-8">
        <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-muted-it">Ascolta e ripeti</p>
        <p className="mt-4 text-center font-display text-2xl font-semibold leading-snug">{item.it}</p>
        <p className="mt-1 text-center text-sm text-muted-it">{item.es}</p>

        <div className="mt-6 flex items-center justify-center gap-4">
          <button onClick={() => speak(item.it, { rate: audioRate })}
            className="flex h-16 w-16 items-center justify-center rounded-full bg-verde text-white shadow-lg shadow-verde/25 transition-all hover:scale-105"
            aria-label="Ascolta la frase modello">
            <Volume2 className="h-7 w-7" aria-hidden="true" />
          </button>
          <button onClick={() => speak(item.it, { rate: Math.max(0.5, audioRate - 0.3) })}
            className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-verde text-verde-scuro transition-all hover:scale-105 dark:text-verde"
            aria-label="Ascolta più lentamente" title="Lento">
            🐢
          </button>
          {srAvailable && (
            <button
              onClick={startListening}
              disabled={listening}
              className={cn("relative flex h-16 w-16 items-center justify-center rounded-full text-white shadow-lg transition-all", listening ? "bg-rosso scale-110" : "bg-inchiostro hover:scale-105 dark:bg-verde dark:text-inchiostro")}
              aria-label={listening ? "Registrando…" : "Ripeti al microfono"}
            >
              {listening && <span className="absolute inset-0 animate-ping rounded-full bg-rosso/40" aria-hidden="true" />}
              <Mic className="h-7 w-7" aria-hidden="true" />
            </button>
          )}
        </div>
        <p className="mt-3 text-center text-xs text-muted-it">
          {listening ? "Sto ascoltando… parla ora!" : srAvailable ? "1) Ascolta · 2) Ripeti al microfono" : "Micrófono no disponible: escucha, repite en voz alta y autoevalúate"}
        </p>

        {/* resultado del reconocimiento */}
        {transcript !== null && (
          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="mt-5">
            {score !== null && (
              <div className={cn("rounded-2xl p-4 text-center", score >= 0.8 ? "bg-verde-tenue" : score >= 0.5 ? "bg-oro-tenue" : "bg-rosso-tenue")}>
                <p className="font-display text-2xl font-bold">
                  {score >= 0.8 ? "🎉 Perfetto!" : score >= 0.5 ? "👍 Quasi!" : "💪 Riprova!"} {Math.round(score * 100)}%
                </p>
                {!transcript.startsWith("(autoevaluación") && (
                  <p className="mt-1 text-sm text-muted-it">He oído: «{transcript}»</p>
                )}
              </div>
            )}
            <button onClick={advance} className="mt-4 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-2xl bg-verde px-6 py-3 font-bold uppercase tracking-wide text-white shadow-lg shadow-verde/25 transition-all hover:scale-[1.01]">
              Continua <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </motion.div>
        )}

        {/* fallback de autoevaluación */}
        {transcript === null && !srAvailable && (
          <div className="mt-6 grid grid-cols-3 gap-2">
            <button onClick={() => selfAssess(10, "perfecto")} className="min-h-11 rounded-xl border-2 border-verde/40 bg-verde-tenue text-sm font-bold text-verde-scuro dark:text-verde">😊 Perfetto</button>
            <button onClick={() => selfAssess(6, "regular")} className="min-h-11 rounded-xl border-2 border-oro/40 bg-oro-tenue text-sm font-bold text-oro-scuro">🙂 Quasi</button>
            <button onClick={() => selfAssess(3, "otra vez")} className="min-h-11 rounded-xl border-2 border-rosso/40 bg-rosso-tenue text-sm font-bold text-rosso-scuro dark:text-rosso">😅 Ci riprovo</button>
          </div>
        )}
        {transcript === null && srAvailable && (
          <p className="mt-4 text-center text-xs text-muted-it">¿Sin micrófono ahora? <button onClick={() => selfAssess(5, "practicado en voz alta")} className="underline">Marcar como practicado en voz alta</button></p>
        )}
      </div>
    </div>
  );
}

/* ── FASE 4 · Escritura ── */
interface WritingData {
  required: VocabWord[];
  task: string;
  minWords: number;
  model: { it: string; es: string }[];
}

function WritingPhase({ writing, level, onXp, onDone }: { writing: WritingData; level: string; onXp: (n: number) => void; onDone: (xp: number) => void }) {
  const [text, setText] = useState("");
  const [checked, setChecked] = useState(false);
  const [showModel, setShowModel] = useState(false);
  const addXp = useLms((s) => s.addXp);
  const recordQuiz = useLms((s) => s.recordQuiz);

  const wordCount = text.trim() ? text.trim().split(/\s+/).length : 0;
  const usedAll = writing.required.every((w) => includesWord(text, w.it));
  const enough = wordCount >= writing.minWords;
  const perfect = usedAll && enough;

  const check = () => {
    if (checked) return;
    setChecked(true);
    const xp = perfect ? 25 : usedAll || enough ? 15 : 8;
    addXp(xp, "scrittura");
    onXp(xp);
    recordQuiz({ id: `${Date.now()}`, label: "Rinforzo · Scrittura", score: perfect ? 1 : 0, total: 1, date: new Date().toISOString(), kind: "repaso" });
  };

  return (
    <div className="rounded-3xl border border-soft bg-surface">
      <div className="border-b border-soft px-5 py-3.5">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-muted-it">✍️ Scrivi!</p>
      </div>
      <div className="p-6 sm:p-8">
        <p className="leading-relaxed">{writing.task}</p>

        {/* palabras obligatorias */}
        {writing.required.length > 0 && (
          <div className="mt-4 flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wide text-muted-it">Parole obbligatorie:</span>
            {writing.required.map((w) => {
              const used = includesWord(text, w.it);
              return (
                <span key={w.id} className={cn("inline-flex items-center gap-1 rounded-full px-3 py-1.5 text-sm font-bold transition-all", used ? "bg-verde-tenue text-verde-scuro dark:text-verde" : "bg-rosso-tenue text-rosso-scuro dark:text-rosso")}>
                  {used ? <Check className="h-3.5 w-3.5" aria-hidden="true" /> : null}
                  {w.it}
                </span>
              );
            })}
          </div>
        )}

        <textarea
          value={text}
          onChange={(e) => { if (!checked) setText(e.target.value); }}
          rows={5}
          maxLength={600}
          disabled={checked}
          placeholder="Scrivi qui il tuo testo in italiano…"
          aria-label="Tu texto en italiano"
          className="mt-5 w-full resize-none rounded-2xl border border-soft bg-crema px-4 py-3 text-base leading-relaxed outline-none focus:ring-2 focus:ring-verde/40"
        />
        <div className="mt-1 flex items-center justify-between text-xs">
          <span className={cn("font-bold", enough ? "text-verde-scuro dark:text-verde" : "text-muted-it")}>
            {wordCount}/{writing.minWords} palabras {level === "zero" || level === "A1" ? "(mínimo)" : "(mínimo)"}
          </span>
          <span className="text-muted-it">Nivel {level === "zero" ? "0" : level}</span>
        </div>

        {!checked ? (
          <button onClick={check} disabled={wordCount < 3}
            className="mt-5 inline-flex min-h-12 w-full items-center justify-center rounded-2xl bg-verde px-6 py-3 font-bold uppercase tracking-wide text-white shadow-lg shadow-verde/25 transition-all hover:scale-[1.01] disabled:opacity-40">
            Consegna
          </button>
        ) : (
          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="mt-5">
            <div className={cn("rounded-2xl p-5 text-center", perfect ? "bg-verde-tenue" : "bg-oro-tenue")}>
              <p className="font-display text-2xl font-bold">{perfect ? "🎉 Eccellente!" : "👍 Buon lavoro!"}</p>
              <p className="mt-1 text-sm text-muted-it">
                {perfect
                  ? "Usaste todas las palabras obligatorias y alcanzaste el mínimo. +25 XP"
                  : `Faltó algo: ${!usedAll ? "alguna palabra obligatoria" : "extensión mínima"}. Igual sumas +${usedAll || enough ? 15 : 8} XP.`}
              </p>
            </div>

            <button onClick={() => setShowModel((s) => !s)} className="mt-4 inline-flex min-h-11 items-center gap-2 rounded-xl border border-soft px-4 py-2.5 text-sm font-bold hover:bg-verde-tenue">
              <Repeat2 className="h-4 w-4" aria-hidden="true" /> {showModel ? "Nascondi" : "Vedi"} le frasi modello
            </button>
            {showModel && (
              <ul className="mt-3 space-y-2">
                {writing.model.map((m, i) => (
                  <li key={i} className="rounded-xl bg-crema-scura p-3 text-sm dark:bg-inchiostro/10">
                    <b className="italic">{m.it}</b> <span className="text-muted-it">— {m.es}</span>
                  </li>
                ))}
              </ul>
            )}

            <button onClick={() => onDone(0)}
              className="mt-5 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-2xl bg-verde px-6 py-3 font-bold uppercase tracking-wide text-white shadow-lg shadow-verde/25 transition-all hover:scale-[1.01]">
              <Trophy className="h-5 w-5" aria-hidden="true" /> Finisci il rinforzo
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
}

/* ── resumen final ── */
function Summary({ xp, onRepeat }: { xp: number; onRepeat: () => void }) {
  return (
    <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="mx-auto max-w-lg rounded-3xl border-2 border-verde/50 bg-verde-tenue/50 p-8 text-center dark:bg-verde-tenue/20">
      <p className="text-6xl" aria-hidden="true">🏆</p>
      <h2 className="mt-3 font-display text-3xl font-semibold">Rinforzo completato!</h2>
      <p className="mt-3 rounded-2xl bg-surface px-4 py-3 font-display text-2xl font-bold text-verde-scuro dark:text-verde">+{xp} XP totales</p>
      <p className="mt-3 text-sm leading-relaxed text-muted-it">
        Has reforzado la lección con quiz, escucha, pronunciación y escritura. El repaso espaciado (SRS) se encargará de que estas palabras no se olviden.
      </p>
      <div className="mt-6 flex flex-wrap justify-center gap-3">
        <button onClick={onRepeat} className="inline-flex min-h-11 items-center gap-2 rounded-xl border border-soft bg-surface px-5 py-2.5 text-sm font-bold transition-all hover:scale-[1.02]">
          <RotateCcw className="h-4 w-4" aria-hidden="true" /> Ripeti
        </button>
      </div>
    </motion.div>
  );
}
