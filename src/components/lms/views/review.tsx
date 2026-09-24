"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { BookOpen, Play, RefreshCcw, Sparkles, TrendingUp } from "lucide-react";
import { useLms } from "@/lib/lms/store";
import { dueCards, masteredCount, learningCount, retention, DAY } from "@/lib/lms/srs";
import { weakTopics, TOPIC_LABELS } from "@/lib/lms/adaptive";
import { exercisesByTopic } from "@/lib/lms/exercises";
import { QuizEngine } from "../quiz-engine";
import { FlashcardSession } from "../flashcards";
import { cn } from "@/lib/utils";

/* ── Vista: Repaso inteligente ────────────────────────────────────── */

export function ReviewView() {
  const srs = useLms((s) => s.srs);
  const errorLog = useLms((s) => s.errorLog);
  const navigate = useLms((s) => s.navigate);
  const [mode, setMode] = useState<"menu" | "flashcards" | "weak" | "curva">("menu");
  const [weakTopic, setWeakTopic] = useState<string | null>(null);

  const due = useMemo(() => dueCards(srs), [srs]);
  const mastered = masteredCount(srs);
  const learning = learningCount(srs);
  const weaknesses = useMemo(() => weakTopics(errorLog, 5), [errorLog]);

  if (mode === "flashcards") {
    return (
      <div>
        <button onClick={() => setMode("menu")} className="mb-5 inline-flex min-h-11 items-center gap-2 text-sm font-bold text-muted-it transition-colors hover:text-verde">
          ← Torna al ripasso
        </button>
        <FlashcardSession cardIds={due.map((c) => c.wordId).slice(0, 20)} />
      </div>
    );
  }

  if (mode === "weak" && weakTopic) {
    const exercises = exercisesByTopic(weakTopic, 8);
    return (
      <div>
        <button onClick={() => { setMode("menu"); setWeakTopic(null); }} className="mb-5 inline-flex min-h-11 items-center gap-2 text-sm font-bold text-muted-it transition-colors hover:text-verde">
          ← Torna al ripasso
        </button>
        {exercises.length > 0 ? (
          <QuizEngine exercises={exercises} title={`Rinforzo · ${TOPIC_LABELS[weakTopic as keyof typeof TOPIC_LABELS] ?? weakTopic}`} kind="repaso" label={`Repaso: ${TOPIC_LABELS[weakTopic as keyof typeof TOPIC_LABELS] ?? weakTopic}`} skill="grammatica" xpPerCorrect={12} />
        ) : (
          <p className="rounded-2xl border border-soft bg-surface p-6 text-sm text-muted-it">No hay ejercicios para este tema. Vuelve al menú.</p>
        )}
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* estado de la memoria */}
      <section className="grid gap-3 sm:grid-cols-3">
        {[
          { label: "Da ripassare ora", value: due.length, tone: "rosso", desc: "tarjetas vencidas" },
          { label: "In apprendimento", value: learning, tone: "oro", desc: "intervalo < 21 días" },
          { label: "Padroneggiate", value: mastered, tone: "verde", desc: "memoria consolidada" },
        ].map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className={cn(
              "rounded-3xl border-2 p-5 text-center",
              s.tone === "rosso" && "border-rosso/30 bg-rosso-tenue/50",
              s.tone === "oro" && "border-oro/30 bg-oro-tenue/50",
              s.tone === "verde" && "border-verde/30 bg-verde-tenue/50"
            )}
          >
            <p className={cn("font-display text-4xl font-bold", s.tone === "rosso" && "text-rosso-scuro dark:text-rosso", s.tone === "oro" && "text-oro-scuro dark:text-oro", s.tone === "verde" && "text-verde-scuro dark:text-verde")}>
              {s.value}
            </p>
            <p className="mt-1 text-sm font-bold">{s.label}</p>
            <p className="text-xs text-muted-it">{s.desc}</p>
          </motion.div>
        ))}
      </section>

      {/* sesión de repaso */}
      <section className="rounded-3xl border border-soft bg-gradient-to-br from-verde-tenue to-surface p-6 dark:from-verde-tenue/30">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2 className="font-display text-2xl font-semibold">Sessione di ripasso</h2>
            <p className="mt-1.5 max-w-lg text-sm leading-relaxed text-muted-it">
              {due.length > 0
                ? `Tienes ${due.length} tarjetas vencidas. El algoritmo SM-2 ha decidido que hoy es el día perfecto para repasarlas.`
                : "Nessuna carta dovuta: ¡bien hecho! Añade palabras desde Vocabulario o Diccionario."}
            </p>
          </div>
          <button
            onClick={() => setMode("flashcards")}
            disabled={due.length === 0}
            className="inline-flex min-h-12 items-center gap-2 rounded-2xl bg-verde px-6 py-3 font-bold text-white shadow-lg shadow-verde/25 transition-all hover:scale-[1.03] disabled:opacity-40 dark:text-inchiostro"
          >
            <Play className="h-4 w-4" aria-hidden="true" /> Inizia la sessione
          </button>
        </div>
      </section>

      {/* refuerzo adaptativo */}
      <section className="rounded-3xl border border-soft bg-surface p-6">
        <h2 className="flex items-center gap-2 font-display text-xl font-semibold">
          <Sparkles className="h-5 w-5 text-oro" aria-hidden="true" /> Rinforzo mirato
        </h2>
        <p className="mt-1.5 text-sm text-muted-it">Tus errores han marcado estos temas como débiles. Un poco de práctica dirigida y vuelven a cero.</p>
        {weaknesses.length === 0 ? (
          <p className="mt-4 rounded-2xl bg-verde-tenue px-4 py-3.5 text-sm font-semibold text-verde-scuro dark:text-verde">
            Nessuna debolezza rilevata. Continua così! 🎉
          </p>
        ) : (
          <div className="mt-4 grid gap-2.5 sm:grid-cols-2">
            {weaknesses.map((w) => (
              <button
                key={w.topic}
                onClick={() => { setWeakTopic(w.topic); setMode("weak"); }}
                className="flex min-h-14 items-center gap-3 rounded-2xl border-2 border-rosso/25 bg-rosso-tenue/40 px-4 py-3 text-left transition-all hover:-translate-y-0.5 hover:border-rosso/50"
              >
                <span className="flex-1">
                  <span className="block text-sm font-bold">{TOPIC_LABELS[w.topic] ?? w.topic}</span>
                  <span className="block text-xs text-muted-it">precisione: {Math.round(w.accuracy * 100)}% · {w.errors} errori</span>
                </span>
                <span className="rounded-xl bg-rosso px-3 py-1.5 text-xs font-bold text-white">Pratica</span>
              </button>
            ))}
          </div>
        )}
      </section>

      {/* simulador de curva del olvido */}
      <section className="rounded-3xl border border-soft bg-surface p-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h2 className="flex items-center gap-2 font-display text-xl font-semibold">
              <TrendingUp className="h-5 w-5 text-verde" aria-hidden="true" /> La curva dell'oblio
            </h2>
            <p className="mt-1.5 max-w-xl text-sm leading-relaxed text-muted-it">
              Mueve los deslizadores y observa cómo la retención cae sin repaso… y cómo cada repaso
              la “resetea” más alta y más lenta. Así trabaja tu memoria (y este LMS).
            </p>
          </div>
          <button onClick={() => setMode("curva")} className="hidden" aria-hidden="true" />
        </div>
        <ForgettingCurveSim />
      </section>

      {/* guía del sistema */}
      <section className="rounded-3xl border border-soft bg-surface p-6">
        <h2 className="flex items-center gap-2 font-display text-xl font-semibold">
          <BookOpen className="h-5 w-5 text-verde" aria-hidden="true" /> Come funziona il ripasso intelligente
        </h2>
        <ol className="mt-4 space-y-3">
          {[
            ["Palabra nueva", "Entra en el sistema con intervalo 0: la verás enseguida."],
            ["Gradas la tarjeta", "Otra vez / Difícil / Bien / Fácil → ajusta el factor de facilidad (SM-2)."],
            ["Intervalos crecientes", "1 día → 3-6 días → semanas → meses. La memoria se consolida con espaciado."],
            ["Errores → motor adaptativo", "Si fallas ejercicios, el tema entra en “Rinforzo mirato” para práctica dirigida."],
            ["Dominio", "Intervalo ≥ 21 días sin fallos = parola padroneggiata 🏆"],
          ].map(([title, desc], i) => (
            <li key={i} className="flex items-start gap-3 rounded-2xl bg-crema-scura p-4 dark:bg-inchiostro/10">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-verde font-mono text-xs font-bold text-white">{i + 1}</span>
              <div>
                <p className="font-bold">{title}</p>
                <p className="mt-0.5 text-sm text-muted-it">{desc}</p>
              </div>
            </li>
          ))}
        </ol>
        <button onClick={() => navigate("vocabolario")} className="mt-5 inline-flex min-h-11 items-center gap-2 rounded-xl border-2 border-verde/40 bg-verde-tenue px-5 py-2.5 text-sm font-bold text-verde-scuro transition-all hover:scale-[1.02] dark:text-verde">
          <BookOpen className="h-4 w-4" aria-hidden="true" /> Aggiungi altre parole
        </button>
      </section>
    </div>
  );
}

/* ── Simulador de la curva del olvido (sliders → plot) ── */
function ForgettingCurveSim() {
  const [strength, setStrength] = useState(3);      // días de "vida" inicial de la memoria
  const [reviews, setReviews] = useState(3);        // nº de repasos
  const [boost, setBoost] = useState(1.6);          // cuánto "repara" cada repaso

  const maxDays = 30;
  const days = useMemo(() => Array.from({ length: maxDays * 4 + 1 }, (_, i) => (i / 4)), []);
  const reviewTimes = useMemo(() => {
    // repasos espaciados exponencialmente: 1, 3, 7, 14, 21…
    const times: number[] = [];
    let t = 1;
    for (let i = 0; i < reviews; i++) { times.push(t); t = Math.min(maxDays, Math.round(t * 2.2)); if (t === times[times.length - 1]) break; }
    return times;
  }, [reviews]);

  const withReviews = days.map((d) => retention(d, strength, reviewTimes, boost));
  const noReviews = days.map((d) => Math.exp(-d / Math.max(1, strength)));

  // svg geometry
  const W = 720, H = 300, PAD = 42;
  const x = (d: number) => PAD + (d / maxDays) * (W - PAD - 12);
  const y = (r: number) => H - PAD - r * (H - PAD - 18);

  const path = (vals: number[]) => vals.map((v, i) => `${i === 0 ? "M" : "L"}${x(days[i]).toFixed(1)},${y(v).toFixed(1)}`).join(" ");

  // retención a 30 días
  const r30 = withReviews[withReviews.length - 1];
  const r30No = noReviews[noReviews.length - 1];

  return (
    <div className="mt-5 grid gap-6 lg:grid-cols-[280px_1fr]">
      {/* sliders */}
      <div className="space-y-5">
        {[
          { label: "Fortezza iniziale della memoria", value: strength, min: 1, max: 10, step: 0.5, unit: ` giorni`, set: setStrength },
          { label: "Numero di ripassi", value: reviews, min: 0, max: 5, step: 1, unit: ` → ${reviewTimes.join(", ")} gg`, set: setReviews },
          { label: "Potenza di ogni ripasso", value: boost, min: 1.1, max: 2.5, step: 0.1, unit: "×", set: setBoost },
        ].map((s) => (
          <div key={s.label}>
            <div className="flex items-baseline justify-between">
              <label className="text-xs font-bold uppercase tracking-wide text-muted-it" htmlFor={`slider-${s.label}`}>{s.label}</label>
              <span className="font-mono text-xs font-bold text-verde-scuro dark:text-verde">{s.value}{s.unit}</span>
            </div>
            <input
              id={`slider-${s.label}`}
              type="range"
              min={s.min}
              max={s.max}
              step={s.step}
              value={s.value}
              onChange={(e) => s.set(parseFloat(e.target.value))}
              className="mt-2 h-2 w-full cursor-pointer appearance-none rounded-full bg-inchiostro/10 accent-[var(--verde)] dark:bg-inchiostro/20"
            />
          </div>
        ))}
        <div className="rounded-2xl bg-crema-scura p-4 text-sm leading-relaxed text-muted-it dark:bg-inchiostro/10">
          Retención a 30 días:
          <p className="mt-1.5 font-mono text-base font-bold text-verde-scuro dark:text-verde">con ripassi: {Math.round(r30 * 100)}%</p>
          <p className="font-mono text-base font-bold text-rosso">senza ripassi: {Math.round(r30No * 100)}%</p>
        </div>
      </div>

      {/* plot */}
      <div className="overflow-x-auto rounded-2xl bg-crema-scura p-3 dark:bg-inchiostro/10">
        <svg viewBox={`0 0 ${W} ${H}`} className="min-w-[540px]" role="img" aria-label={`Curva del olvido: con ${reviews} repasos la retención a 30 días es ${Math.round(r30 * 100)}%`}>
          {/* grid */}
          {[0, 0.25, 0.5, 0.75, 1].map((g) => (
            <g key={g}>
              <line x1={PAD} x2={W - 12} y1={y(g)} y2={y(g)} stroke="currentColor" strokeWidth="1" className="text-inchiostro/10" />
              <text x={PAD - 6} y={y(g) + 4} textAnchor="end" fontSize="10" fill="currentColor" className="text-inchiostro/50">{Math.round(g * 100)}%</text>
            </g>
          ))}
          {[0, 10, 20, 30].map((d) => (
            <text key={d} x={x(d)} y={H - PAD + 16} textAnchor="middle" fontSize="10" fill="currentColor" className="text-inchiostro/50">{d}g</text>
          ))}
          <text x={(W + PAD) / 2} y={H - 4} textAnchor="middle" fontSize="11" fill="currentColor" className="text-inchiostro/60">tempo (giorni)</text>

          {/* zona de olvido (<50%) */}
          <rect x={PAD} y={y(0.5)} width={W - PAD - 12} height={H - PAD - y(0.5)} fill="var(--rosso)" opacity="0.05" />
          <text x={W - 20} y={H - PAD - 8} textAnchor="end" fontSize="10" className="text-inchiostro/40" fill="currentColor">zona dell'oblio (&lt;50%)</text>

          {/* curva sin repaso */}
          <path d={path(noReviews)} fill="none" stroke="var(--rosso)" strokeWidth="2.5" strokeDasharray="6 4" />
          {/* curva con repasos */}
          <path d={path(withReviews)} fill="none" stroke="var(--verde)" strokeWidth="3.5" strokeLinejoin="round" />
          {/* marcadores de repaso */}
          {reviewTimes.map((t, i) => (
            <g key={i}>
              <line x1={x(t)} x2={x(t)} y1={y(0)} y2={y(1)} stroke="var(--verde)" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.5" />
              <circle cx={x(t)} cy={y(retention(t, strength, reviewTimes, boost))} r="5" fill="var(--verde)" />
              <text x={x(t)} y={y(1) - 6 - (i % 2) * 14} textAnchor="middle" fontSize="10" fontWeight="bold" fill="var(--verde)">ripasso {i + 1}</text>
            </g>
          ))}

          {/* leyenda */}
          <g fontSize="11">
            <line x1={W - 210} y1={20} x2={W - 186} y2={20} stroke="var(--verde)" strokeWidth="3.5" />
            <text x={W - 180} y={24} fill="currentColor" className="text-inchiostro/80">con ripassi (SM-2)</text>
            <line x1={W - 210} y1={38} x2={W - 186} y2={38} stroke="var(--rosso)" strokeWidth="2.5" strokeDasharray="6 4" />
            <text x={W - 180} y={42} fill="currentColor" className="text-inchiostro/80">senza ripassi</text>
          </g>
        </svg>
        <p className="mt-1 px-2 pb-1 text-center text-[11px] leading-relaxed text-muted-it">
          Cada repaso (línea verde vertical) eleva la curva y la hace caer más despacio: es el efecto de
          espaciado que aprovecha tu Repaso inteligente.
        </p>
      </div>
    </div>
  );
}
