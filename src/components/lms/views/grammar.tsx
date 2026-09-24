"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { BookOpen, Brain, ChevronDown, ListChecks, Volume2 } from "lucide-react";
import { GRAMMAR } from "@/lib/lms/grammar";
import { getExercises } from "@/lib/lms/exercises";
import { CEFR_LEVELS } from "@/lib/lms/types";
import { useLms } from "@/lib/lms/store";
import { QuizEngine } from "../quiz-engine";
import { StepReveal } from "../step-reveal";
import { AudioButton } from "../audio-button";
import { cn } from "@/lib/utils";

/* ── Vista: Gramática ─────────────────────────────────────────────── */

export function GrammarView() {
  const userLevel = useLms((s) => s.level);
  const [levelFilter, setLevelFilter] = useState<string>(userLevel ?? "A1");
  const [openTopic, setOpenTopic] = useState<string | null>(null);
  const [practiceTopic, setPracticeTopic] = useState<string | null>(null);

  const topics = useMemo(() => GRAMMAR.filter((g) => g.level === levelFilter), [levelFilter]);

  const practicing = practiceTopic ? GRAMMAR.find((g) => g.id === practiceTopic) : undefined;

  if (practicing) {
    const exercises = getExercises(practicing.exerciseIds);
    return (
      <div>
        <button onClick={() => setPracticeTopic(null)} className="mb-5 inline-flex min-h-11 items-center gap-2 text-sm font-bold text-muted-it transition-colors hover:text-verde">
          ← Torna alla grammatica
        </button>
        {exercises.length > 0 ? (
          <QuizEngine exercises={exercises} title={`Pratica · ${practicing.title}`} kind="prueba" label={`Gramática: ${practicing.title}`} skill="grammatica" />
        ) : (
          <p className="rounded-2xl border border-soft bg-surface p-6 text-sm text-muted-it">Este tema no tiene ejercicios asociados todavía.</p>
        )}
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* filtro de nivel */}
      <div className="flex flex-wrap items-center gap-2" role="tablist" aria-label="Filtrar por nivel">
        {CEFR_LEVELS.map((lv) => (
          <button
            key={lv}
            role="tab"
            aria-selected={levelFilter === lv}
            onClick={() => { setLevelFilter(lv); setOpenTopic(null); }}
            className={cn(
              "min-h-11 rounded-2xl border-2 px-5 py-2.5 text-sm font-bold transition-all",
              levelFilter === lv ? "border-verde bg-verde text-white shadow-md shadow-verde/20" : "border-soft bg-surface hover:border-verde/40"
            )}
          >
            {lv}
            <span className="ml-2 font-mono text-[10px] font-normal opacity-70">
              {GRAMMAR.filter((g) => g.level === lv).length} temi
            </span>
          </button>
        ))}
      </div>

      {/* lista de temas */}
      <div className="space-y-3">
        {topics.map((t, i) => {
          const open = openTopic === t.id;
          return (
            <motion.article
              key={t.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.04 }}
              className={cn("overflow-hidden rounded-3xl border-2 bg-surface transition-colors", open ? "border-verde/40" : "border-soft")}
            >
              <button
                onClick={() => setOpenTopic(open ? null : t.id)}
                aria-expanded={open}
                className="flex w-full items-center gap-4 p-5 text-left sm:p-6"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-verde-tenue text-verde-scuro dark:text-verde">
                  <Brain className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block font-display text-lg font-semibold leading-snug sm:text-xl">{t.title}</span>
                  <span className="mt-0.5 block font-mono text-xs italic text-muted-it">{t.titleIt}</span>
                  <span className="mt-1 block text-sm text-muted-it">{t.summary}</span>
                </span>
                <ChevronDown className={cn("h-5 w-5 shrink-0 text-muted-it transition-transform duration-300", open && "rotate-180")} aria-hidden="true" />
              </button>

              {open && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-5 border-t border-soft px-5 pb-6 pt-5 sm:px-6">
                  {/* explicación */}
                  {t.explanation.map((p, j) => (
                    <p key={j} className="leading-[1.8] text-inchiostro/90">{p}</p>
                  ))}

                  {/* ejemplos */}
                  <div className="rounded-2xl bg-crema-scura p-5 dark:bg-inchiostro/10">
                    <p className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-muted-it">
                      <Volume2 className="h-3.5 w-3.5" aria-hidden="true" /> Esempi
                    </p>
                    <div className="space-y-2.5">
                      {t.examples.map((ex, j) => (
                        <div key={j} className="flex items-center gap-3">
                          <AudioButton text={ex.it} size="sm" />
                          <div>
                            <p className="font-display text-lg leading-snug">{ex.it}</p>
                            <p className="text-sm text-muted-it">{ex.es}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* problemas paso a paso */}
                  <div>
                    <p className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-muted-it">
                      <BookOpen className="h-3.5 w-3.5" aria-hidden="true" /> Soluzione passo a passo
                    </p>
                    <div className="grid gap-3 lg:grid-cols-2">
                      {t.problems.map((p, j) => (
                        <StepReveal
                          key={j}
                          title={p.title}
                          question={p.question}
                          steps={p.steps}
                          conclusion={p.conclusion}
                          accent={j % 2 === 0 ? "verde" : "oro"}
                          compact
                        />
                      ))}
                    </div>
                  </div>

                  {/* practicar */}
                  {t.exerciseIds.length > 0 && (
                    <button
                      onClick={() => setPracticeTopic(t.id)}
                      className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-2xl bg-verde px-6 py-3 font-bold text-white shadow-lg shadow-verde/25 transition-all hover:scale-[1.01]"
                    >
                      <ListChecks className="h-4 w-4" aria-hidden="true" />
                      Pratica questo argomento · {t.exerciseIds.length} esercizi
                    </button>
                  )}
                </motion.div>
              )}
            </motion.article>
          );
        })}
      </div>
    </div>
  );
}
