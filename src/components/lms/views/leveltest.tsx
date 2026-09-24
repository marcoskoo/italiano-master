"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Compass, GraduationCap, RotateCcw } from "lucide-react";
import { LEVEL_TEST, computeLevel } from "@/lib/lms/leveltest";
import { useLms } from "@/lib/lms/store";
import { CEFR_LEVELS, LEVEL_LABELS } from "@/lib/lms/types";
import { cn } from "@/lib/utils";

/* ── Vista: Test de nivel ─────────────────────────────────────────── */

export function LevelTestView() {
  const setLevel = useLms((s) => s.setLevel);
  const addXp = useLms((s) => s.addXp);
  const recordQuiz = useLms((s) => s.recordQuiz);
  const navigate = useLms((s) => s.navigate);
  const currentLevel = useLms((s) => s.level);

  const [idx, setIdx] = useState(0);
  const [choice, setChoice] = useState<number | null>(null);
  const [bandCorrect, setBandCorrect] = useState<Record<string, number>>({});
  const [result, setResult] = useState<string | null>(null);

  const item = LEVEL_TEST[idx];
  const isLast = idx === LEVEL_TEST.length - 1;

  const finishTest = (finalBands: Record<string, number>) => {
    const lv = computeLevel(finalBands);
    setResult(lv);
    setLevel(lv);
    addXp(50);
    recordQuiz({ id: `test-${Date.now()}`, label: "Test de nivel", score: Object.values(finalBands).reduce((a, b) => a + b, 0), total: LEVEL_TEST.length, date: new Date().toISOString(), kind: "test" });
  };

  const next = () => {
    if (choice === null) return;
    const band = item.band;
    const bands = { ...bandCorrect, [band]: (bandCorrect[band] ?? 0) + (choice === item.answer ? 1 : 0) };
    setBandCorrect(bands);
    setChoice(null);
    if (isLast) finishTest(bands);
    else setIdx(idx + 1);
  };

  const restart = () => { setIdx(0); setChoice(null); setBandCorrect({}); setResult(null); };

  if (result) {
    return (
      <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} className="mx-auto max-w-xl rounded-3xl border border-soft bg-surface p-8 text-center shadow-sm">
        <p className="text-5xl" aria-hidden="true">🎯</p>
        <h2 className="mt-4 font-display text-3xl font-semibold">Il tuo livello:</h2>
        <motion.p
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.25, type: "spring" }}
          className="mt-2 font-display text-7xl font-bold text-verde-scuro dark:text-verde"
        >
          {result}
        </motion.p>
        <p className="mt-2 text-lg text-muted-it">{LEVEL_LABELS[result as keyof typeof LEVEL_LABELS]}</p>

        <div className="mt-6 flex justify-center gap-1.5">
          {CEFR_LEVELS.map((lv) => (
            <span
              key={lv}
              className={cn(
                "flex h-10 w-10 items-center justify-center rounded-xl text-sm font-bold",
                lv === result ? "bg-verde text-white" : lv < result ? "bg-verde-tenue text-verde-scuro dark:text-verde" : "bg-crema-scura text-muted-it dark:bg-inchiostro/15"
              )}
            >
              {lv}
            </span>
          ))}
        </div>

        <p className="mt-6 text-sm leading-relaxed text-muted-it">
          +50 XP por completar el test. Tu ruta personalizada empieza en el nivel{" "}
          <strong>{result}</strong>: cada lección, ejercicio y repaso se ha ajustado a tu nivel.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <button onClick={() => navigate("cursos", { level: result as import("@/lib/lms/types").CefrLevel })} className="inline-flex min-h-12 items-center gap-2 rounded-2xl bg-verde px-6 py-3 font-bold text-white shadow-lg shadow-verde/25 transition-all hover:scale-[1.03]">
            <GraduationCap className="h-4 w-4" aria-hidden="true" /> Empieza el curso {result}
          </button>
          <button onClick={restart} className="inline-flex min-h-12 items-center gap-2 rounded-2xl border-2 border-inchiostro/15 px-6 py-3 font-bold transition-all hover:border-verde/40">
            <RotateCcw className="h-4 w-4" aria-hidden="true" /> Riprova
          </button>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="mx-auto max-w-2xl">
      <div className="mb-6 flex items-center justify-between">
        <p className="flex items-center gap-2 text-sm font-semibold text-muted-it">
          <Compass className="h-4 w-4 text-verde" aria-hidden="true" />
          20 preguntas · 5 minutos · sin ayudas
        </p>
        {currentLevel && (
          <span className="rounded-full bg-oro-tenue px-3 py-1 text-xs font-bold text-oro-scuro dark:text-oro">
            Nivel actual: {currentLevel}
          </span>
        )}
      </div>

      <div className="mb-6 flex gap-1" role="progressbar" aria-valuenow={idx + 1} aria-valuemin={1} aria-valuemax={LEVEL_TEST.length}>
        {LEVEL_TEST.map((q, i) => (
          <span
            key={q.id}
            className={cn("h-1.5 flex-1 rounded-full", i < idx ? "bg-verde" : i === idx ? "bg-oro" : "bg-inchiostro/10 dark:bg-inchiostro/20")}
            aria-label={`Banda ${q.band}`}
          />
        ))}
      </div>

      <motion.div
        key={item.id}
        initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
        className="rounded-3xl border border-soft bg-surface p-6 shadow-sm sm:p-8"
      >
        <span className="rounded-full bg-verde-tenue px-2.5 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-verde-scuro dark:text-verde">
          banda {item.band}
        </span>
        <p className="mt-4 font-display text-xl font-semibold leading-snug sm:text-2xl">{item.prompt}</p>
        <div className="mt-6 grid gap-2.5">
          {item.options.map((opt, i) => (
            <button
              key={i}
              onClick={() => setChoice(i)}
              className={cn(
                "min-h-12 rounded-2xl border-2 px-4 py-3 text-left font-medium transition-all",
                choice === i ? "border-verde bg-verde-tenue font-bold" : "border-soft bg-crema hover:border-verde/40"
              )}
            >
              {opt}
            </button>
          ))}
        </div>
        <div className="mt-6 flex items-center justify-between">
          <span className="text-xs text-muted-it">Pregunta {idx + 1} de {LEVEL_TEST.length}</span>
          <button
            onClick={next}
            disabled={choice === null}
            className="inline-flex min-h-11 items-center gap-2 rounded-xl bg-verde px-6 py-2.5 text-sm font-bold text-white transition-all hover:scale-[1.03] disabled:cursor-not-allowed disabled:opacity-40"
          >
            {isLast ? "Vedi risultato" : "Avanti"} →
          </button>
        </div>
      </motion.div>

      <p className="mt-5 text-center text-xs leading-relaxed text-muted-it">
        Las preguntas suben de dificultad (A1 → C2). No hay penalización: si no sabes una respuesta,
        elige la que te parezca más natural y sigue adelante.
      </p>
    </div>
  );
}
