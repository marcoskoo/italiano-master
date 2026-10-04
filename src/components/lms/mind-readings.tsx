"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  BookOpen, CheckCircle2, Circle, Ear, Eye, EyeOff, HelpCircle, Lightbulb,
  ListOrdered, Music4, Search, Sparkles, Target,
} from "lucide-react";
import type { MindIdeas, MindIntruder, MindQuiz, MindReading, MindSequence, MindVF } from "@/lib/lms/cambridge-mind";
import { MIND_THEME_LABEL } from "@/lib/lms/cambridge-mind";
import { MIND_READINGS } from "@/lib/lms/extra/readings-mind";
import { useLms } from "@/lib/lms/store";
import { speak } from "@/lib/lms/tts";
import { AudioButton } from "./audio-button";
import { cn } from "@/lib/utils";

/* ═══ v9.13 · Letture tematiche: meditazione, spiritualità, qui e ora,
   relax fisico e mentale — con las 7 estrategias de comprensión:
   predizione, cuestionario (lit/inf/crítico), V/F con justificación,
   idea principal/secundarias, intruso, orden temporal, escucha (TTS). ═══ */

/* ── utilidades ──────────────────────────────────────────────────── */
function hashStr(s: string): number {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); }
  return h >>> 0;
}
function seededPerm(seed: number, len: number): number[] {
  let a = seed >>> 0;
  const rnd = () => {
    a |= 0; a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
  const idx = Array.from({ length: len }, (_, i) => i);
  for (let i = len - 1; i > 0; i--) {
    const j = Math.floor(rnd() * (i + 1));
    [idx[i], idx[j]] = [idx[j], idx[i]];
  }
  return idx;
}
const KIND_LABEL: Record<MindQuiz["kind"], string> = { literal: "Literal", inferencial: "Inferencial", critica: "Crítica" };
const KIND_STYLE: Record<MindQuiz["kind"], string> = {
  literal: "bg-verde-tenue text-verde-scuro dark:text-verde",
  inferencial: "bg-oro-tenue text-oro-scuro dark:text-oro",
  critica: "bg-rosso-tenue text-rosso-scuro dark:text-rosso",
};

/* ── bloques de ejercicio ────────────────────────────────────────── */

function BlockTitle({ icon, label, hint }: { icon: React.ReactNode; label: string; hint?: string }) {
  return (
    <div className="mb-3">
      <h4 className="flex items-center gap-2 font-display text-base font-semibold">
        {icon} {label}
      </h4>
      {hint && <p className="mt-0.5 text-xs leading-relaxed text-muted-it">{hint}</p>}
    </div>
  );
}

/* Cuestionario (literal / inferencial / crítico) — también sirve para la escucha */
function QuizBlock({ items, answers, onPick }: { items: MindQuiz[]; answers: Record<number, number>; onPick: (i: number, oi: number) => void }) {
  const shuffled = useMemo(() => items.map((it) => {
    const perm = seededPerm(hashStr(it.q + it.kind), it.options.length);
    return { ...it, options: perm.map((i) => it.options[i]), answer: perm.indexOf(it.answer) };
  }), [items]);
  return (
    <div className="space-y-4">
      {shuffled.map((it, i) => (
        <div key={i} className={cn("rounded-2xl border-2 p-4 transition-colors", answers[i] === undefined ? "border-soft bg-surface" : answers[i] === it.answer ? "border-verde/50 bg-verde-tenue/40" : "border-rosso/40 bg-rosso-tenue/20")}>
          <div className="flex flex-wrap items-center gap-2">
            <span className={cn("rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide", KIND_STYLE[it.kind])}>{KIND_LABEL[it.kind]}</span>
            <p className="flex-1 font-semibold leading-snug">{it.q}</p>
          </div>
          <div className="mt-3 grid gap-2">
            {it.options.map((op, oi) => {
              const chosen = answers[i] === oi;
              const reveal = answers[i] !== undefined;
              const isCorrect = oi === it.answer;
              return (
                <button
                  key={oi}
                  type="button"
                  disabled={reveal}
                  onClick={() => onPick(i, oi)}
                  className={cn(
                    "min-h-11 rounded-xl border-2 px-3 py-2 text-left text-sm font-semibold transition-all",
                    !reveal && "border-soft bg-crema hover:border-verde/50 hover:bg-verde-tenue dark:bg-inchiostro/10",
                    reveal && isCorrect && "border-verde bg-verde text-white",
                    reveal && !isCorrect && chosen && "border-rosso bg-rosso/90 text-white",
                    reveal && !isCorrect && !chosen && "border-soft bg-crema opacity-50 dark:bg-inchiostro/10",
                  )}
                >
                  {op}
                </button>
              );
            })}
          </div>
          {answers[i] !== undefined && (
            <p className="mt-2 text-xs font-semibold leading-relaxed text-muted-it">
              {answers[i] === it.answer ? "✔ Esatto! " : "✘ "}{it.why}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}

/* Vero/Falso con justificación */
function VfBlock({ items, answers, onPick }: { items: MindVF[]; answers: Record<number, boolean>; onPick: (i: number, v: boolean) => void }) {
  return (
    <div className="space-y-3">
      {items.map((it, i) => {
        const picked = answers[i] !== undefined;
        const correct = picked && answers[i] === it.value;
        return (
          <div key={i} className={cn("rounded-2xl border-2 p-4 transition-colors", !picked ? "border-soft bg-surface" : correct ? "border-verde/50 bg-verde-tenue/40" : "border-rosso/40 bg-rosso-tenue/20")}>
            <p className="font-semibold leading-snug">{it.text}</p>
            <div className="mt-3 grid grid-cols-2 gap-2">
              {([true, false] as const).map((v) => (
                <button
                  key={String(v)}
                  type="button"
                  disabled={picked}
                  onClick={() => onPick(i, v)}
                  className={cn(
                    "min-h-11 rounded-xl border-2 px-3 py-2 text-sm font-bold transition-all",
                    !picked && "border-soft bg-crema hover:border-verde/50 hover:bg-verde-tenue dark:bg-inchiostro/10",
                    picked && v === it.value && "border-verde bg-verde text-white",
                    picked && v !== it.value && answers[i] === v && "border-rosso bg-rosso/90 text-white",
                    picked && v !== it.value && answers[i] !== v && "border-soft bg-crema opacity-50 dark:bg-inchiostro/10",
                  )}
                >
                  {v ? "Vero" : "Falso"}
                </button>
              ))}
            </div>
            {picked && (
              <p className="mt-2 text-xs font-semibold leading-relaxed text-muted-it">
                {correct ? "✔ Justificación: " : "✘ La respuesta correcta es «" + (it.value ? "Vero" : "Falso") + "». "}{it.why}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}

/* Idea principal + ideas secundarias */
function IdeasBlock({ ideas, mainPick, onMainPick, picks, onToggle, checked, onCheck }: {
  ideas: MindIdeas;
  mainPick: number | null;
  onMainPick: (i: number) => void;
  picks: number[];
  onToggle: (i: number) => void;
  checked: boolean;
  onCheck: () => void;
}) {
  const statements = useMemo(() => {
    const all = [...ideas.secondary, ...ideas.distractors];
    const perm = seededPerm(hashStr(ideas.mainQ + ideas.secQ), all.length);
    return perm.map((i) => ({ text: all[i], isSecondary: i < ideas.secondary.length }));
  }, [ideas]);
  const mainShuffled = useMemo(() => {
    const perm = seededPerm(hashStr(ideas.mainQ + "main"), ideas.mainOptions.length);
    return { options: perm.map((i) => ideas.mainOptions[i]), answer: perm.indexOf(ideas.mainAnswer) };
  }, [ideas]);
  return (
    <div className="space-y-4">
      <div className="rounded-2xl border-2 border-soft bg-surface p-4">
        <p className="font-semibold leading-snug">{ideas.mainQ}</p>
        <div className="mt-3 grid gap-2">
          {mainShuffled.options.map((op, oi) => {
            const reveal = mainPick !== null;
            return (
              <button
                key={oi}
                type="button"
                disabled={reveal}
                onClick={() => onMainPick(oi)}
                className={cn(
                  "min-h-11 rounded-xl border-2 px-3 py-2 text-left text-sm font-semibold transition-all",
                  !reveal && "border-soft bg-crema hover:border-verde/50 hover:bg-verde-tenue dark:bg-inchiostro/10",
                  reveal && oi === mainShuffled.answer && "border-verde bg-verde text-white",
                  reveal && oi !== mainShuffled.answer && mainPick === oi && "border-rosso bg-rosso/90 text-white",
                  reveal && oi !== mainShuffled.answer && mainPick !== oi && "border-soft bg-crema opacity-50 dark:bg-inchiostro/10",
                )}
              >
                {op}
              </button>
            );
          })}
        </div>
      </div>
      <div className="rounded-2xl border-2 border-soft bg-surface p-4">
        <p className="font-semibold leading-snug">{ideas.secQ}</p>
        <div className="mt-3 space-y-2">
          {statements.map((st, i) => {
            const picked = picks.includes(i);
            return (
              <button
                key={i}
                type="button"
                disabled={checked}
                onClick={() => onToggle(i)}
                className={cn(
                  "flex min-h-11 w-full items-start gap-3 rounded-xl border-2 px-3 py-2 text-left text-sm font-semibold transition-all",
                  !checked && (picked ? "border-verde bg-verde-tenue" : "border-soft bg-crema hover:border-verde/40 dark:bg-inchiostro/10"),
                  checked && st.isSecondary && "border-verde bg-verde-tenue",
                  checked && !st.isSecondary && picked && "border-rosso bg-rosso-tenue/40 line-through",
                  checked && !st.isSecondary && !picked && "border-soft bg-crema opacity-60 dark:bg-inchiostro/10",
                )}
              >
                {picked || (checked && st.isSecondary) ? <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-verde" aria-hidden="true" /> : <Circle className="mt-0.5 h-4 w-4 shrink-0 text-inchiostro/25" aria-hidden="true" />}
                <span className="leading-snug">{st.text}</span>
                {checked && st.isSecondary && <span className="ml-auto shrink-0 text-xs font-bold text-verde">✔</span>}
                {checked && !st.isSecondary && !picked && <span className="ml-auto shrink-0 text-xs font-bold text-rosso">✘</span>}
              </button>
            );
          })}
        </div>
        {!checked ? (
          <button
            type="button"
            onClick={onCheck}
            disabled={mainPick === null || picks.length === 0}
            className="mt-3 min-h-11 rounded-2xl bg-verde px-5 py-2.5 text-sm font-bold text-white shadow-md shadow-verde/25 transition-all enabled:hover:scale-[1.03] disabled:opacity-40"
          >
            Controlla le idee
          </button>
        ) : (
          <p className="mt-3 rounded-xl bg-verde-tenue p-3 text-xs font-semibold leading-relaxed text-verde-scuro dark:text-verde">
            ✔ Verde = idea secundaria presente en el texto · Tachado en rojo = distractor plausible que el texto no dice.
          </p>
        )}
      </div>
    </div>
  );
}

/* Búsqueda del intruso */
function IntruderBlock({ intruder, pick, onPick }: { intruder: MindIntruder; pick: number | null; onPick: (i: number) => void }) {
  const shuffled = useMemo(() => {
    const perm = seededPerm(hashStr(intruder.instr), intruder.sentences.length);
    return perm.map((orig, disp) => ({ text: intruder.sentences[orig], orig, isAnswer: orig === intruder.intruder }));
  }, [intruder]);
  return (
    <div className="space-y-2">
      {shuffled.map((s, i) => {
        const reveal = pick !== null;
        return (
          <button
            key={i}
            type="button"
            disabled={reveal}
            onClick={() => onPick(i)}
            className={cn(
              "flex min-h-11 w-full items-start gap-3 rounded-xl border-2 px-3 py-2.5 text-left text-sm font-semibold transition-all",
              !reveal && "border-soft bg-crema hover:border-rosso/50 dark:bg-inchiostro/10",
              reveal && s.isAnswer && "border-rosso bg-rosso text-white",
              reveal && !s.isAnswer && pick === i && "border-rosso/50 bg-rosso-tenue/30 line-through opacity-70",
              reveal && !s.isAnswer && pick !== i && "border-soft bg-crema opacity-60 dark:bg-inchiostro/10",
            )}
          >
            <span className="font-mono text-xs opacity-60">{i + 1}</span>
            <span className="leading-snug">{s.text}</span>
            {reveal && s.isAnswer && <span className="ml-auto shrink-0 text-xs font-bold uppercase">Intruso 👀</span>}
          </button>
        );
      })}
      {pick !== null && (
        <p className={cn("rounded-xl p-3 text-xs font-semibold leading-relaxed", shuffled[pick]?.isAnswer ? "bg-verde-tenue text-verde-scuro dark:text-verde" : "bg-rosso-tenue/40 text-rosso-scuro dark:text-rosso")}>
          {shuffled[pick]?.isAnswer ? "✔ Bien visto! " : `✘ El intruso era otra frase. `}{intruder.why}
        </p>
      )}
    </div>
  );
}

/* Reconstrucción de secuencias / orden temporal */
function SequenceBlock({ sequence, order, checked, onToggleEvent, onCheck, onReset }: {
  sequence: MindSequence;
  order: number[];
  checked: boolean;
  onToggleEvent: (i: number) => void;
  onCheck: () => void;
  onReset: () => void;
}) {
  const shuffled = useMemo(() => {
    const perm = seededPerm(hashStr(sequence.events.join("|")), sequence.events.length);
    return perm.map((orig) => ({ text: sequence.events[orig], orig }));
  }, [sequence]);
  return (
    <div>
      <div className="space-y-2">
        {shuffled.map((ev, disp) => {
          const pos = order.indexOf(disp);
          return (
            <button
              key={disp}
              type="button"
              disabled={checked}
              onClick={() => onToggleEvent(disp)}
              className={cn(
                "flex min-h-11 w-full items-center gap-3 rounded-xl border-2 px-3 py-2.5 text-left text-sm font-semibold transition-all",
                !checked && (pos !== -1 ? "border-verde bg-verde-tenue" : "border-soft bg-crema hover:border-verde/40 dark:bg-inchiostro/10"),
                checked && shuffled[disp].orig === pos && "border-verde bg-verde-tenue",
                checked && shuffled[disp].orig !== pos && "border-rosso bg-rosso-tenue/30",
              )}
            >
              <span className={cn("flex h-7 w-7 shrink-0 items-center justify-center rounded-full font-mono text-xs font-bold", pos !== -1 || checked ? "bg-verde text-white" : "bg-crema-scura text-muted-it dark:bg-inchiostro/10")}>
                {checked ? shuffled[disp].orig + 1 : pos !== -1 ? pos + 1 : "·"}
              </span>
              <span className="leading-snug">{ev.text}</span>
            </button>
          );
        })}
      </div>
      {!checked ? (
        <div className="mt-3 flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={onCheck}
            disabled={order.length !== sequence.events.length}
            className="min-h-11 rounded-2xl bg-verde px-5 py-2.5 text-sm font-bold text-white shadow-md shadow-verde/25 transition-all enabled:hover:scale-[1.03] disabled:opacity-40"
          >
            Verifica l'ordine
          </button>
          <p className="text-xs font-semibold text-muted-it">{order.length}/{sequence.events.length} ordenadas — toca las frases en el orden correcto</p>
        </div>
      ) : (
        <div className="mt-3 flex flex-wrap items-center justify-between gap-3 rounded-2xl bg-oro-tenue/50 p-4">
          <p className="text-xs font-semibold leading-relaxed">
            {shuffled.every((_, i) => shuffled[i].orig === (order.indexOf(i))) ? "✔ Sequenza perfetta! " : "✘ Casi: el orden correcto es el número de cada frase. "}
            {checked ? "Los números verdes marcan la posición correcta." : ""}
          </p>
          <button type="button" onClick={onReset} className="min-h-10 rounded-xl border-2 border-soft bg-crema px-4 py-2 text-xs font-bold transition-all hover:border-verde/40 dark:bg-inchiostro/10">
            Riprova
          </button>
        </div>
      )}
    </div>
  );
}

/* Comprensión de escucha: audio con texto oculto + preguntas */
function ListenBlock({ audioIt, intro, questions, answers, onPick }: {
  audioIt: string;
  intro: string;
  questions: MindQuiz[];
  answers: Record<number, number>;
  onPick: (i: number, oi: number) => void;
}) {
  const [playing, setPlaying] = useState(false);
  const [revealed, setRevealed] = useState(false);
  const play = () => {
    if (playing) { setPlaying(false); return; }
    setPlaying(true);
    speak(audioIt, { rate: 0.88, onDone: () => setPlaying(false) });
  };
  return (
    <div>
      <div className="rounded-2xl border-2 border-verde/40 bg-verde-tenue/30 p-5">
        <p className="text-sm font-semibold leading-relaxed">{intro}</p>
        <div className="mt-4 flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={play}
            className="inline-flex min-h-12 items-center gap-2 rounded-2xl bg-verde px-5 py-3 text-sm font-bold text-white shadow-md shadow-verde/25 transition-all hover:scale-[1.03]"
          >
            <Ear className="h-4 w-4" aria-hidden="true" />
            {playing ? "Sto ascoltando…" : "Ascolta l'audio"}
          </button>
          <button
            type="button"
            onClick={() => setRevealed(!revealed)}
            className="inline-flex min-h-11 items-center gap-2 rounded-2xl border-2 border-soft bg-crema px-4 py-2.5 text-xs font-bold transition-all hover:border-verde/40 dark:bg-inchiostro/10"
          >
            {revealed ? <EyeOff className="h-4 w-4" aria-hidden="true" /> : <Eye className="h-4 w-4" aria-hidden="true" />}
            {revealed ? "Nascondi il testo" : "Mostra il testo (dopo aver ascoltato)"}
          </button>
        </div>
        {revealed && (
          <motion.p initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} className="mt-4 rounded-xl bg-surface p-4 text-base leading-[1.9]">
            {audioIt}
          </motion.p>
        )}
      </div>
      <div className="mt-4">
        <QuizBlock items={questions} answers={answers} onPick={onPick} />
      </div>
    </div>
  );
}

/* ── Lectura individual ──────────────────────────────────────────── */
function MindReadingCard({ reading, onCompleted }: { reading: MindReading; onCompleted: () => void }) {
  const [phase, setPhase] = useState<"predict" | "read">("predict");
  const [predictPick, setPredictPick] = useState<number | null>(null);
  const [showEs, setShowEs] = useState(false);
  // cuestionario
  const [quizAnswers, setQuizAnswers] = useState<Record<number, number>>({});
  // V/F
  const [vfAnswers, setVfAnswers] = useState<Record<number, boolean>>({});
  // ideas
  const [mainPick, setMainPick] = useState<number | null>(null);
  const [ideaPicks, setIdeaPicks] = useState<number[]>([]);
  const [ideasChecked, setIdeasChecked] = useState(false);
  // intruso
  const [intruderPick, setIntruderPick] = useState<number | null>(null);
  // secuencia
  const [seqOrder, setSeqOrder] = useState<number[]>([]);
  const [seqChecked, setSeqChecked] = useState(false);
  // escucha
  const [listenAnswers, setListenAnswers] = useState<Record<number, number>>({});
  const [done, setDone] = useState(false);
  const predictShuffled = useMemo(() => {
    const pr = reading.predict;
    const perm = seededPerm(hashStr(pr.q), pr.options.length);
    return { options: perm.map((i) => pr.options[i]), answer: perm.indexOf(pr.answer) };
  }, [reading]);

  const quizDone = !reading.quiz || reading.quiz.every((_, i) => quizAnswers[i] !== undefined);
  const vfDone = !reading.vf || reading.vf.every((_, i) => vfAnswers[i] !== undefined);
  const ideasDone = !reading.ideas || (ideasChecked && mainPick !== null);
  const intruderDone = !reading.intruder || intruderPick !== null;
  const seqDone = !reading.sequence || seqChecked;
  const listenDone = !reading.listen || reading.listen.questions.every((_, i) => listenAnswers[i] !== undefined);
  const allDone = predictPick !== null && quizDone && vfDone && ideasDone && intruderDone && seqDone && listenDone;

  useEffect(() => {
    if (allDone && !done) { setDone(true); onCompleted(); }
  }, [allDone, done, onCompleted]);

  const toggleSeq = (disp: number) => {
    setSeqOrder((o) => (o.includes(disp) ? o.filter((x) => x !== disp) : [...o, disp]));
  };

  /* fase 1 · predizione dal titolo */
  if (phase === "predict") {
    return (
      <div>
        <p className="font-mono text-[10px] font-bold uppercase tracking-wider text-oro-scuro dark:text-oro">
          Tema: {MIND_THEME_LABEL[reading.theme]} · {reading.minutes} min
        </p>
        <h4 className="mt-1 font-display text-2xl font-semibold">{reading.title}</h4>
        <p className="text-sm italic text-muted-it">{reading.titleEs}</p>
        <div className="mt-5 rounded-2xl border-2 border-dashed border-oro/50 bg-oro-tenue/25 p-5">
          <p className="flex items-center gap-2 font-display text-base font-semibold">
            <Sparkles className="h-4 w-4 text-oro" aria-hidden="true" /> {reading.predict.q}
          </p>
          <div className="mt-4 grid gap-2">
            {predictShuffled.options.map((op, oi) => {
              const reveal = predictPick !== null;
              const isCorrect = oi === predictShuffled.answer;
              return (
                <button
                  key={oi}
                  type="button"
                  disabled={reveal}
                  onClick={() => setPredictPick(oi)}
                  className={cn(
                    "min-h-11 rounded-xl border-2 px-3 py-2 text-left text-sm font-semibold transition-all",
                    !reveal && "border-soft bg-crema hover:border-oro hover:bg-oro-tenue/50 dark:bg-inchiostro/10",
                    reveal && isCorrect && "border-verde bg-verde text-white",
                    reveal && !isCorrect && predictPick === oi && "border-rosso bg-rosso/90 text-white",
                    reveal && !isCorrect && predictPick !== oi && "border-soft bg-crema opacity-50 dark:bg-inchiostro/10",
                  )}
                >
                  {op}
                </button>
              );
            })}
          </div>
          {predictPick !== null && (
            <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }}>
              <p className="mt-3 text-xs font-semibold leading-relaxed text-muted-it">
                {predictPick === predictShuffled.answer ? "✔ Ottima previsione! " : "✘ "}{reading.predict.why}
              </p>
              <button
                type="button"
                onClick={() => setPhase("read")}
                className="mt-4 inline-flex min-h-12 items-center gap-2 rounded-2xl bg-verde px-6 py-3 text-sm font-bold text-white shadow-md shadow-verde/25 transition-all hover:scale-[1.03]"
              >
                <BookOpen className="h-4 w-4" aria-hidden="true" /> Leggi il testo
              </button>
            </motion.div>
          )}
        </div>
      </div>
    );
  }

  /* fase 2 · lectura + estrategias */
  return (
    <div>
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="font-mono text-[10px] font-bold uppercase tracking-wider text-oro-scuro dark:text-oro">
            Tema: {MIND_THEME_LABEL[reading.theme]} · {reading.minutes} min
          </p>
          <h4 className="font-display text-xl font-semibold">{reading.title}</h4>
          <p className="text-sm italic text-muted-it">{reading.titleEs}</p>
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => setPhase("predict")}
            className="inline-flex min-h-11 items-center gap-2 rounded-2xl border-2 border-soft bg-crema px-4 py-2.5 text-xs font-bold transition-all hover:border-verde/40 dark:bg-inchiostro/10"
          >
            <Sparkles className="h-4 w-4 text-oro" aria-hidden="true" /> Predizione
          </button>
          <button
            type="button"
            onClick={() => setShowEs(!showEs)}
            className="inline-flex min-h-11 items-center gap-2 rounded-2xl border-2 border-soft bg-crema px-4 py-2.5 text-xs font-bold transition-all hover:border-verde/40 dark:bg-inchiostro/10"
          >
            {showEs ? <EyeOff className="h-4 w-4" aria-hidden="true" /> : <Eye className="h-4 w-4" aria-hidden="true" />}
            {showEs ? "Nascondi lo spagnolo" : "Mostra lo spagnolo"}
          </button>
        </div>
      </div>

      {/* texto */}
      <div className="mt-4 space-y-5">
        {reading.paragraphs.map((p, i) => (
          <div key={i}>
            <div className="flex items-start gap-2">
              <p className="flex-1 text-base leading-[1.95]">{p.it}</p>
              <AudioButton text={p.it} size="sm" />
            </div>
            {showEs && <p className="mt-1.5 text-sm italic leading-relaxed text-muted-it">{p.es}</p>}
          </div>
        ))}
      </div>

      {/* estrategias */}
      <div className="mt-8 space-y-8">
        {reading.quiz && (
          <section>
            <BlockTitle icon={<HelpCircle className="h-5 w-5 text-verde" aria-hidden="true" />} label="Cuestionario · literal, inferencial y crítico" hint="Preguntas de comprensión: la primera responde al texto, la segunda se deduce, la tercera te pide opinión razonada." />
            <QuizBlock items={reading.quiz} answers={quizAnswers} onPick={(i, oi) => setQuizAnswers((a) => ({ ...a, [i]: oi }))} />
          </section>
        )}
        {reading.vf && (
          <section>
            <BlockTitle icon={<Target className="h-5 w-5 text-rosso" aria-hidden="true" />} label="Vero o Falso · con justificación" hint="Elige Vero o Falso; después lee la justificación del texto." />
            <VfBlock items={reading.vf} answers={vfAnswers} onPick={(i, v) => setVfAnswers((a) => ({ ...a, [i]: v }))} />
          </section>
        )}
        {reading.ideas && (
          <section>
            <BlockTitle icon={<Lightbulb className="h-5 w-5 text-oro" aria-hidden="true" />} label="Idea principal e ideas secundarias" hint="Primero elige la idea principal; luego marca las ideas secundarias que de verdad aparecen en el texto." />
            <IdeasBlock
              ideas={reading.ideas}
              mainPick={mainPick}
              onMainPick={setMainPick}
              picks={ideaPicks}
              onToggle={(i) => setIdeaPicks((p) => (p.includes(i) ? p.filter((x) => x !== i) : [...p, i]))}
              checked={ideasChecked}
              onCheck={() => setIdeasChecked(true)}
            />
          </section>
        )}
        {reading.intruder && (
          <section>
            <BlockTitle icon={<Search className="h-5 w-5 text-verde-scuro" aria-hidden="true" />} label="Búsqueda del intruso" hint={reading.intruder.instr} />
            <IntruderBlock intruder={reading.intruder} pick={intruderPick} onPick={setIntruderPick} />
          </section>
        )}
        {reading.sequence && (
          <section>
            <BlockTitle icon={<ListOrdered className="h-5 w-5 text-oro" aria-hidden="true" />} label="Reconstrucción de secuencias" hint={reading.sequence.instr} />
            <SequenceBlock
              sequence={reading.sequence}
              order={seqOrder}
              checked={seqChecked}
              onToggleEvent={toggleSeq}
              onCheck={() => setSeqChecked(true)}
              onReset={() => { setSeqOrder([]); setSeqChecked(false); }}
            />
          </section>
        )}
        {reading.listen && (
          <section>
            <BlockTitle icon={<Music4 className="h-5 w-5 text-verde" aria-hidden="true" />} label="Ascolto · comprensión de escucha" hint="Escucha el audio sin leerlo (puedes escucharlo dos veces) y responde." />
            <ListenBlock
              audioIt={reading.listen.audioIt}
              intro={reading.listen.intro}
              questions={reading.listen.questions}
              answers={listenAnswers}
              onPick={(i, oi) => setListenAnswers((a) => ({ ...a, [i]: oi }))}
            />
          </section>
        )}
      </div>

      {allDone ? (
        <motion.div initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} className="mt-8 rounded-2xl bg-verde-tenue p-5 text-center dark:bg-verde-tenue/30">
          <p className="font-display text-lg font-bold text-verde-scuro dark:text-verde">
            <CheckCircle2 className="mr-1.5 inline h-5 w-5" aria-hidden="true" />
            Lettura completata · tutte le strategie superate
          </p>
          <p className="mt-1 text-xs text-muted-it">Predizione ✔ Cuestionario ✔ Ideas ✔ Intruso ✔ Secuencia ✔ Ascolto ✔ · +5 XP</p>
        </motion.div>
      ) : (
        <p className="mt-6 text-center text-xs font-semibold text-muted-it">
          Completa todas las estrategias para cerrar la lectura
        </p>
      )}
    </div>
  );
}

/* ── Sección completa: 3 lecturas temáticas con pestañas ─────────── */
export function MindReadings({ unitId }: { unitId: string }) {
  const readings = MIND_READINGS[unitId] ?? [];
  const addXp = useLms((s) => s.addXp);
  const markCambridgeSection = useLms((s) => s.markCambridgeSection);
  const progress = useLms((s) => s.cambridgeProgress[unitId]);
  const [tab, setTab] = useState(0);
  const [completed, setCompleted] = useState<Record<number, boolean>>({});

  if (readings.length === 0) return null;

  const allDone = readings.every((_, i) => completed[i]);

  const handleComplete = (i: number) => {
    if (completed[i]) return;
    const next = { ...completed, [i]: true };
    setCompleted(next);
    addXp(5, "lettura");
    if (readings.every((_, k) => k === i || next[k])) {
      if (!progress?.sections.includes("lettura")) markCambridgeSection(unitId, "lettura");
    }
  };

  return (
    <div className="rounded-3xl border border-soft bg-surface p-5 sm:p-7">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h3 className="flex items-center gap-2 font-display text-lg font-semibold">
          <BookOpen className="h-5 w-5 text-oro" aria-hidden="true" />
          Tre letture di consapevolezza
        </h3>
        <span className="rounded-full bg-oro-tenue px-3 py-1.5 text-[11px] font-bold text-oro-scuro dark:text-oro">
          {Object.keys(completed).length}/{readings.length} completate
        </span>
      </div>
      <p className="mt-1.5 text-sm leading-relaxed text-muted-it">
        Meditación, espiritualidad, permanecer en el aquí y ahora, relajación física y mental:{" "}
        <strong>3 textos con todas las estrategias de comprensión</strong> — predicción, cuestionario,
        V/F con justificación, ideas, intruso, secuencia temporal y escucha.
      </p>
      <div className="mt-3 flex flex-wrap gap-1.5">
        {["Predizione", "Cuestionario", "V/F", "Idee", "Intruso", "Sequenza", "Ascolto"].map((s) => (
          <span key={s} className="rounded-full bg-crema-scura px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-muted-it dark:bg-inchiostro/10">{s}</span>
        ))}
      </div>

      {/* pestañas */}
      <div className="mt-4 flex gap-1.5" role="tablist" aria-label="Lecturas temáticas de la unidad">
        {readings.map((r, i) => (
          <button
            key={r.id}
            role="tab"
            aria-selected={tab === i}
            onClick={() => setTab(i)}
            className={cn(
              "flex min-h-10 flex-1 items-center justify-center gap-1.5 rounded-xl px-3 py-2 text-xs font-bold transition-all",
              tab === i
                ? "bg-verde text-white shadow-md shadow-verde/20"
                : "bg-crema-scura text-muted-it hover:bg-verde-tenue hover:text-verde-scuro dark:bg-inchiostro/10 dark:hover:text-verde",
            )}
          >
            {completed[i] && <CheckCircle2 className="h-3.5 w-3.5" aria-hidden="true" />}
            Lettura {i + 1}
          </button>
        ))}
      </div>

      <div className="mt-5">
        <MindReadingCard key={readings[tab].id} reading={readings[tab]} onCompleted={() => handleComplete(tab)} />
      </div>

      {allDone && (
        <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="mt-6 rounded-2xl bg-verde p-4 text-center text-white">
          <p className="font-display text-lg font-bold">🧘 Tutte e tre le letture completate!</p>
          <p className="mt-1 text-sm opacity-90">Comprensión lectora y de escucha superadas · +15 XP · sección registrada</p>
        </motion.div>
      )}
    </div>
  );
}
