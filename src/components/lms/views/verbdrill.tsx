"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Play, RefreshCcw, Timer, Trophy, Zap } from "lucide-react";
import { VERB_LIST, TENSES, PRONOUNS, findVerb, conjugate, type TenseId } from "@/lib/lms/conjugator";
import type { Topic } from "@/lib/lms/types";
import { normalizeItalian } from "@/lib/lms/numbers";
import { useLms } from "@/lib/lms/store";
import { AudioButton } from "../audio-button";
import { cn } from "@/lib/utils";

/* ── Vista: Allenamento verbi · drill contrarreloj · plugin v1.1 ──── */

const DEFAULT_TENSES: TenseId[] = ["presente", "passato_prossimo"];

interface Question {
  verb: string;
  es: string;
  tense: TenseId;
  tenseLabel: string;
  personIdx: number;
  answer: string;        // forma canónica (puede contener "/" para variantes)
  accepted: string[];    // variantes aceptadas
  irregular: boolean;
}

function pickQuestion(tenses: TenseId[]): Question {
  // excluye reflexivos: la forma con clítico complica el drill
  const pool = VERB_LIST.filter((v) => !v.infinitive.endsWith("si"));
  const verb = pool[Math.floor(Math.random() * pool.length)];
  const entry = findVerb(verb.infinitive)!;
  const tense = tenses[Math.floor(Math.random() * tenses.length)];
  const personIdx = Math.floor(Math.random() * 6);
  const conj = conjugate(entry, tense);
  const form = conj.forms[personIdx].form.replace(/!$/, "").replace(/—/, "");
  const variants = form.split("/").flatMap((f) => {
    const base = f.trim();
    return tense === "passato_prossimo" && !base.includes(" ")
      ? [base]
      : [base, base.replace(/o$/, "a"), base.replace(/i$/, "e")].filter((v, i, a) => a.indexOf(v) === i);
  });
  // si el oficial trae "/", añade también las combinaciones
  const canonical = conj.forms[personIdx].form.replace(/!$/, "");
  if (canonical.includes("/")) {
    const [m, f] = canonical.split("/");
    const aux = m.split(" ")[0];
    variants.push(`${aux} ${f.trim()}`);
    variants.push(m.trim());
  }
  return {
    verb: verb.infinitive,
    es: verb.es,
    tense,
    tenseLabel: TENSES.find((t) => t.id === tense)!.label,
    personIdx,
    answer: canonical,
    accepted: Array.from(new Set(variants.map((v) => v.trim()).filter(Boolean))),
    irregular: conj.forms[personIdx].irregular,
  };
}

function FeatureOff() {
  const navigate = useLms((s) => s.navigate);
  return (
    <div className="mx-auto max-w-lg rounded-3xl border border-soft bg-surface p-8 text-center">
      <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-inchiostro/10 text-2xl">⚡</span>
      <h2 className="mt-4 font-display text-xl font-semibold">Allenamento verbi non disponibile</h2>
      <p className="mt-2 text-sm leading-relaxed text-muted-it">La administración ha desactivado este entrenamiento.</p>
      <button onClick={() => navigate("inicio")} className="mt-5 inline-flex min-h-11 items-center rounded-xl bg-verde px-5 py-2.5 text-sm font-bold text-white shadow-md shadow-verde/25 hover:bg-verde-scuro">Torna all'inizio</button>
    </div>
  );
}

export function VerbDrillView() {
  const remoteConfig = useLms((s) => s.remoteConfig);
  const [tenses, setTenses] = useState<TenseId[]>(DEFAULT_TENSES);
  const [running, setRunning] = useState(false);
  const [timeLeft, setTimeLeft] = useState(60);
  const [q, setQ] = useState<Question | null>(null);
  const [input, setInput] = useState("");
  const [feedback, setFeedback] = useState<"idle" | "ok" | "ko">("idle");
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [bestStreak, setBestStreak] = useState(0);
  const [history, setHistory] = useState<{ verb: string; form: string; ok: boolean }[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const addXp = useLms((s) => s.addXp);
  const recordCorrect = useLms((s) => s.recordCorrect);
  const recordError = useLms((s) => s.recordError);

  const topicFor = (t: TenseId): Topic =>
    t === "presente" ? "presente"
      : t === "passato_prossimo" || t === "imperfetto" ? "passato"
        : t === "futuro" ? "futuro"
          : t === "condizionale" ? "condizionale"
            : t === "congiuntivo" ? "congiuntivo"
              : "grammatica";

  const nextQuestion = useCallback(() => {
    setQ(pickQuestion(tenses.length ? tenses : DEFAULT_TENSES));
    setInput("");
    setFeedback("idle");
    inputRef.current?.focus();
  }, [tenses]);

  const start = () => {
    setRunning(true);
    setTimeLeft(60);
    setScore(0);
    setStreak(0);
    setBestStreak(0);
    setHistory([]);
    setQ(pickQuestion(tenses.length ? tenses : DEFAULT_TENSES));
    setInput("");
    setFeedback("idle");
    setTimeout(() => inputRef.current?.focus(), 50);
  };

  useEffect(() => {
    if (!running) return;
    if (timeLeft <= 0) {
      setRunning(false);
      setQ(null);
      return;
    }
    const t = setTimeout(() => setTimeLeft((s) => s - 1), 1000);
    return () => clearTimeout(t);
  }, [running, timeLeft]);

  const check = () => {
    if (!q || feedback !== "idle") return;
    const norm = normalizeItalian(input);
    const good = norm.length > 0 && q.accepted.some((a) => normalizeItalian(a) === norm);
    setFeedback(good ? "ok" : "ko");
    setHistory((h) => [{ verb: q.verb, form: q.answer, ok: good }, ...h].slice(0, 12));
    if (good) {
      const gained = 8 + Math.min(streak, 5); // racha hasta +13
      setScore((s) => s + gained);
      setStreak((s) => { const ns = s + 1; setBestStreak((b) => Math.max(b, ns)); return ns; });
      addXp(8, "grammatica");
      recordCorrect(topicFor(q.tense));
      setTimeout(nextQuestion, 550);
    } else {
      setStreak(0);
      recordError(topicFor(q.tense));
    }
  };

  if (remoteConfig && remoteConfig.features.verbDrill === false) return <FeatureOff />;

  const finished = !running && score > 0 && !q;

  return (
    <div className="mx-auto max-w-2xl">
      {/* selección de tiempos */}
      {!running && (
        <section className="mb-5 rounded-3xl border border-soft bg-surface p-5">
          <p className="mb-2 text-sm font-bold">Tiempos a entrenar</p>
          <div className="flex flex-wrap gap-2">
            {TENSES.map((t) => {
              const on = tenses.includes(t.id);
              return (
                <button
                  key={t.id}
                  onClick={() => setTenses((cur) => (on ? cur.filter((x) => x !== t.id) : cur.length ? [...cur, t.id] : cur))}
                  aria-pressed={on}
                  className={cn("min-h-11 rounded-xl border px-3.5 text-sm font-bold transition-all", on ? "border-verde bg-verde text-white" : "border-soft bg-crema hover:border-verde/40")}
                >
                  {t.label}
                </button>
              );
            })}
          </div>
          <p className="mt-2 text-[11px] text-muted-it">60 segundos · +8 XP por acierto (+1 por racha, máx. +5) · las formas aceptan acentos opcionales y con/sin pronombre.</p>
        </section>
      )}

      {/* marcador */}
      {(running || finished) && (
        <div className="mb-4 flex items-center justify-between gap-3 rounded-2xl border border-soft bg-surface px-5 py-3">
          <span className={cn("inline-flex items-center gap-1.5 text-sm font-bold", timeLeft <= 10 && running ? "text-rosso-scuro dark:text-rosso" : "text-muted-it")}>
            <Timer className="h-4 w-4" aria-hidden="true" /> {running ? `${timeLeft}s` : "—"}
          </span>
          <span className="inline-flex items-center gap-1.5 text-sm font-bold text-oro-scuro dark:text-oro"><Zap className="h-4 w-4" aria-hidden="true" /> {score} pt</span>
          <span className="inline-flex items-center gap-1.5 text-sm font-bold text-verde-scuro dark:text-verde"><Trophy className="h-4 w-4" aria-hidden="true" /> racha ×{streak} (record {bestStreak})</span>
        </div>
      )}

      {!running && !finished && (
        <button onClick={start} disabled={tenses.length === 0} className="inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-2xl bg-verde px-6 py-4 text-lg font-bold text-white shadow-xl shadow-verde/25 transition-all hover:scale-[1.01] disabled:opacity-40">
          <Play className="h-5 w-5" aria-hidden="true" /> Via! (60 secondi)
        </button>
      )}

      {finished && (
        <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} className="rounded-3xl border-2 border-oro/50 bg-oro-tenue p-8 text-center">
          <p className="font-display text-3xl font-semibold">Tempo scaduto! 🏁</p>
          <p className="mt-2 text-sm text-muted-it">{score} puntos · mejor racha ×{bestStreak} · {history.filter((h) => h.ok).length}/{history.length} aciertos recientes</p>
          <button onClick={start} className="mt-5 inline-flex min-h-12 items-center gap-2 rounded-xl bg-verde px-6 py-3 font-bold text-white shadow-md shadow-verde/25 hover:bg-verde-scuro">
            <RefreshCcw className="h-4 w-4" aria-hidden="true" /> Ancora!
          </button>
        </motion.div>
      )}

      {running && q && (
        <div className={cn(
          "rounded-3xl border-2 bg-surface p-6 transition-colors sm:p-8",
          feedback === "ok" ? "border-verde bg-verde-tenue quiz-correct" : feedback === "ko" ? "border-rosso bg-rosso-tenue quiz-wrong" : "border-soft"
        )}>
          <div className="flex flex-wrap items-center justify-between gap-2">
            <p className="font-display text-2xl font-semibold">{q.verb}</p>
            <span className="rounded-full bg-inchiostro/5 px-3 py-1 text-xs font-bold text-muted-it">{q.es}</span>
          </div>
          <p className="mt-1 text-sm font-bold text-verde-scuro dark:text-verde">{q.tenseLabel} · {PRONOUNS[q.personIdx]}</p>

          <input
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                if (feedback === "ko") nextQuestion();
                else check();
              }
            }}
            disabled={feedback === "ok"}
            placeholder="la forma coniugata…"
            aria-label={`Forma conjugada de ${q.verb} en ${q.tenseLabel}`}
            className="mt-5 w-full rounded-2xl border border-soft bg-crema px-4 py-3 text-center text-lg font-semibold outline-none focus:ring-2 focus:ring-verde/40"
          />

          {feedback === "idle" && (
            <button onClick={check} disabled={!input.trim()} className="mt-4 inline-flex min-h-12 w-full items-center justify-center rounded-2xl bg-verde px-6 py-3 font-bold text-white shadow-lg shadow-verde/25 disabled:opacity-40">
              Verifica (Invio)
            </button>
          )}
          {feedback === "ok" && <p className="mt-4 rounded-2xl bg-verde-tenue p-3 text-center font-bold text-verde-scuro dark:text-verde">✓ Corretto! +{8 + Math.min(streak - 1, 5)} XP</p>}
          {feedback === "ko" && (
            <div className="mt-4 rounded-2xl bg-rosso-tenue p-4 text-center">
              <p className="font-bold text-rosso-scuro dark:text-rosso">La forma corretta: <span className="font-display text-lg">{q.answer}</span></p>
              <div className="mt-3 flex items-center justify-center gap-3">
                <AudioButton text={q.answer.replace(/\//g, " o ")} variant="full" label="Escucha" />
                <button onClick={nextQuestion} className="inline-flex min-h-11 items-center gap-2 rounded-xl bg-inchiostro px-5 py-2.5 text-sm font-bold text-crema hover:scale-105 dark:bg-verde dark:text-inchiostro">
                  Prossimo →
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* historial */}
      {history.length > 0 && (
        <section className="mt-5 rounded-2xl border border-soft bg-surface p-4">
          <p className="mb-2 text-xs font-bold uppercase tracking-wide text-muted-it">Últimas formas</p>
          <div className="flex flex-wrap gap-1.5">
            {history.map((h, i) => (
              <span key={i} className={cn("rounded-lg px-2 py-1 font-mono text-xs font-bold", h.ok ? "bg-verde-tenue text-verde-scuro dark:text-verde" : "bg-rosso-tenue text-rosso-scuro dark:text-rosso")}>
                {h.verb}: {h.form}
              </span>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
