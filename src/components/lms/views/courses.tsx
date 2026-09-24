"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft, ArrowRight, BookOpen, CheckCircle2, Circle, Ear, GraduationCap, Languages,
  Library, ListChecks, Sparkles, Target, Volume2,
} from "lucide-react";
import { COURSES, findLesson, totalLessons } from "@/lib/lms/courses";
import { getExercises } from "@/lib/lms/exercises";
import { VOCAB_BY_ID } from "@/lib/lms/vocabulary";
import { useLms } from "@/lib/lms/store";
import { newCard } from "@/lib/lms/srs";
import { QuizEngine } from "../quiz-engine";
import { AudioButton } from "../audio-button";
import { cn } from "@/lib/utils";
import type { CefrLevel } from "@/lib/lms/types";

/* ── Vista: Cursos (lista) + Visor de lección (pipeline) ──────────── */

const LEVEL_COLORS: Record<string, string> = {
  zero: "terracotta", A1: "verde", A2: "verde-scuro", B1: "oro", B2: "oro-scuro", C1: "rosso", C2: "rosso-scuro",
};

export function CoursesView() {
  const navParams = useLms((s) => s.navParams);
  const navigate = useLms((s) => s.navigate);
  const completedLessons = useLms((s) => s.completedLessons);
  const userLevel = useLms((s) => s.level);
  const [openLevel, setOpenLevel] = useState<string | null>(navParams.level ?? null);
  const [openLesson, setOpenLesson] = useState<string | null>(navParams.lessonId ?? null);

  const lessonData = useMemo(() => (openLesson ? findLesson(openLesson) : undefined), [openLesson]);

  if (lessonData) {
    return <LessonView lessonId={lessonData.lesson.id} onBack={() => { setOpenLesson(null); setOpenLevel(lessonData.course.level); }} />;
  }

  const course = COURSES.find((c) => c.level === openLevel);

  /* ── lista de niveles ── */
  if (!course) {
    return (
      <div className="space-y-6">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {COURSES.map((c, i) => {
            const total = c.units.reduce((n, u) => n + u.lessons.length, 0);
            const done = c.units.reduce((n, u) => n + u.lessons.filter((l) => completedLessons.includes(l.id)).length, 0);
            const isCurrent = userLevel === c.level;
            return (
              <motion.button
                key={c.level}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.04 }}
                onClick={() => setOpenLevel(c.level)}
                className={cn(
                  "group rounded-3xl border-2 p-5 text-left transition-all hover:-translate-y-1 hover:shadow-lg",
                  isCurrent ? "border-verde bg-verde-tenue" : "border-soft bg-surface hover:border-verde/40"
                )}
              >
                <div className="flex items-center justify-between">
                  <p className="font-display text-3xl font-bold">{c.level === "zero" ? "Da zero" : c.level}</p>
                  {isCurrent && <span className="rounded-full bg-verde px-2.5 py-1 text-[10px] font-bold uppercase text-white">tu nivel</span>}
                </div>
                <p className="mt-1 text-sm font-semibold">{c.label.includes("·") ? c.label.split("·")[1].trim() : c.label}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-it">{c.goal}</p>
                <div className="mt-4 flex items-center gap-3 text-xs text-muted-it">
                  <span className="flex items-center gap-1"><BookOpen className="h-3.5 w-3.5" aria-hidden="true" /> {total} lezioni</span>
                  <span className="flex items-center gap-1"><GraduationCap className="h-3.5 w-3.5" aria-hidden="true" /> ~{c.hours}h</span>
                  <span className="ml-auto font-bold text-verde-scuro dark:text-verde">{done}/{total} ✓</span>
                </div>
              </motion.button>
            );
          })}
        </div>
        <p className="rounded-2xl border border-soft bg-surface p-4 text-sm leading-relaxed text-muted-it">
          💡 Cada lección sigue el pipeline completo: <strong>objetivos → explicación → ejemplos con audio →
          vocabulario → práctica → conversación → evaluación</strong>. Al superar la evaluación, la lección queda
          completada y alimenta tu progreso y el motor adaptativo.
        </p>
      </div>
    );
  }

  /* ── detalle de un nivel ── */
  return (
    <div>
      <button onClick={() => setOpenLevel(null)} className="mb-5 inline-flex min-h-11 items-center gap-2 text-sm font-bold text-muted-it transition-colors hover:text-verde">
        <ArrowLeft className="h-4 w-4" aria-hidden="true" /> Tutti i corsi
      </button>

      <div className="rounded-3xl border border-soft bg-gradient-to-br from-verde-tenue to-surface p-6 dark:from-verde-tenue/30">
        <div className="flex flex-wrap items-center gap-3">
          <p className="font-display text-4xl font-bold">{course.level === "zero" ? "Da zero" : course.level}</p>
          <span className="rounded-full bg-inchiostro/5 px-3 py-1.5 text-xs font-bold text-muted-it dark:bg-inchiostro/15">
            {totalLessons(course.level)} lezioni · ~{course.hours}h
          </span>
        </div>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-it"><strong className="text-inchiostro">Obiettivo:</strong> {course.goal}</p>
      </div>

      <div className="mt-6 space-y-5">
        {course.units.map((unit, ui) => (
          <section key={unit.id} className="rounded-3xl border border-soft bg-surface p-5 sm:p-6">
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-inchiostro font-display text-sm font-bold text-crema">
                {ui + 1}
              </span>
              <div>
                <h2 className="font-display text-xl font-semibold leading-tight">{unit.title}</h2>
                <p className="font-mono text-xs italic text-muted-it">{unit.titleIt}</p>
              </div>
            </div>
            <div className="mt-4 grid gap-2.5 md:grid-cols-2 lg:grid-cols-3">
              {unit.lessons.map((lesson, li) => {
                const done = completedLessons.includes(lesson.id);
                return (
                  <button
                    key={lesson.id}
                    onClick={() => setOpenLesson(lesson.id)}
                    className={cn(
                      "group flex flex-col rounded-2xl border-2 p-4 text-left transition-all hover:-translate-y-0.5 hover:shadow-md",
                      done ? "border-verde/40 bg-verde-tenue/50" : "border-soft bg-crema hover:border-verde/40"
                    )}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-muted-it">
                        {ui + 1}.{li + 1} · {lesson.level === "zero" ? "base" : lesson.level}
                      </span>
                      {done ? (
                        <CheckCircle2 className="h-4 w-4 text-verde" aria-label="Lección completada" />
                      ) : (
                        <Circle className="h-4 w-4 text-inchiostro/20" aria-hidden="true" />
                      )}
                    </div>
                    <p className="mt-2 font-display text-base font-semibold leading-snug">{lesson.title}</p>
                    <p className="mt-0.5 font-mono text-[11px] italic text-muted-it">{lesson.titleIt}</p>
                    <div className="mt-auto flex items-center gap-2.5 pt-3 text-[10px] font-semibold text-muted-it">
                      <span className="flex items-center gap-1"><Library className="h-3 w-3" aria-hidden="true" />{lesson.vocabIds.length} parole</span>
                      <span className="flex items-center gap-1"><ListChecks className="h-3 w-3" aria-hidden="true" />{lesson.exerciseIds.length} esercizi</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

/* ── Visor de lección: pipeline completo ──────────────────────────── */

const STAGES = [
  { id: "obiettivi", label: "Objetivos", icon: Target },
  { id: "spiegazione", label: "Explicación", icon: BookOpen },
  { id: "esempi", label: "Ejemplos", icon: Volume2 },
  { id: "vocabolario", label: "Vocabulario", icon: Library },
  { id: "pratica", label: "Práctica", icon: ListChecks },
  { id: "conversazione", label: "Conversación", icon: Languages },
  { id: "valutazione", label: "Evaluación", icon: GraduationCap },
] as const;

function LessonView({ lessonId, onBack }: { lessonId: string; onBack: () => void }) {
  const navigate = useLms((s) => s.navigate);
  const completedLessons = useLms((s) => s.completedLessons);
  const markLessonComplete = useLms((s) => s.markLessonComplete);
  const addXp = useLms((s) => s.addXp);
  const upsertSrs = useLms((s) => s.upsertSrs);
  const srs = useLms((s) => s.srs);
  const setTutorSeed = useLms((s) => s.navigate);

  const [stage, setStage] = useState(0);
  const [evalPassed, setEvalPassed] = useState(false);

  const data = findLesson(lessonId);
  const practiceExercises = useMemo(() => getExercises(data?.lesson.exerciseIds ?? []), [data?.lesson.exerciseIds]);
  const checkpointExercises = useMemo(() => getExercises(data?.lesson.checkpointIds ?? []), [data?.lesson.checkpointIds]);

  if (!data) return <p className="text-muted-it">Lección no encontrada.</p>;
  const { lesson, unit, course } = data;
  const isExamLesson = lesson.id.includes("-12") || lesson.title.includes("Examen") || lesson.checkpointIds.length >= 4;
  const alreadyDone = completedLessons.includes(lesson.id);

  const addVocabToSrs = (wordId: string) => {
    if (!srs[wordId]) {
      upsertSrs(wordId, newCard(wordId));
      addXp(2, "vocabolario");
    }
  };

  const handleEvalFinish = (score: number, total: number) => {
    const pct = total ? (score / total) * 100 : 0;
    if (pct >= 60 || isExamLesson === false) {
      setEvalPassed(true);
      if (!alreadyDone) {
        markLessonComplete(lesson.id, unit.id);
        addXp(isExamLesson ? 200 : 80);
      }
    }
  };

  const stage_ = STAGES[stage];

  return (
    <div>
      <button onClick={onBack} className="mb-5 inline-flex min-h-11 items-center gap-2 text-sm font-bold text-muted-it transition-colors hover:text-verde">
        <ArrowLeft className="h-4 w-4" aria-hidden="true" /> {course.level === "zero" ? "Da zero" : course.level} · {unit.title}
      </button>

      <header className="rounded-3xl border border-soft bg-gradient-to-br from-verde-tenue to-surface p-6 dark:from-verde-tenue/30">
        <p className="font-mono text-xs font-bold uppercase tracking-widest text-verde-scuro dark:text-verde">
          {course.level === "zero" ? "Da zero" : `Corso ${course.level}`} · {unit.titleIt}
        </p>
        <h1 className="mt-2 font-display text-3xl font-semibold leading-tight sm:text-4xl">{lesson.title}</h1>
        <p className="mt-1 font-display text-lg italic text-muted-it">{lesson.titleIt}</p>
        {alreadyDone && (
          <span className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-verde px-3 py-1.5 text-xs font-bold text-white">
            <CheckCircle2 className="h-3.5 w-3.5" aria-hidden="true" /> Lezione completata
          </span>
        )}
      </header>

      {/* pestañas del pipeline */}
      <div className="sticky top-16 z-30 -mx-4 mt-6 overflow-x-auto border-b border-soft bg-crema/90 px-4 py-2.5 backdrop-blur-md sm:-mx-6 sm:px-6">
        <div className="flex gap-1.5" role="tablist" aria-label="Etapas de la lección">
          {STAGES.map((s, i) => (
            <button
              key={s.id}
              role="tab"
              aria-selected={stage === i}
              onClick={() => setStage(i)}
              className={cn(
                "flex min-h-10 shrink-0 items-center gap-1.5 rounded-xl px-3.5 py-2 text-xs font-bold transition-all",
                stage === i ? "bg-verde text-white shadow-md shadow-verde/20" : "text-muted-it hover:bg-verde-tenue hover:text-verde-scuro dark:hover:text-verde"
              )}
            >
              <s.icon className="h-3.5 w-3.5" aria-hidden="true" />
              {i + 1}. {s.label}
            </button>
          ))}
        </div>
      </div>

      <motion.main key={stage_.id} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="mt-6">
        {/* 1 · OBJETIVOS */}
        {stage === 0 && (
          <div className="rounded-3xl border border-soft bg-surface p-6 sm:p-8">
            <h2 className="flex items-center gap-2 font-display text-2xl font-semibold">
              <Target className="h-5 w-5 text-rosso" aria-hidden="true" /> In questa lezione imparerai…
            </h2>
            <ul className="mt-5 space-y-3">
              {lesson.objectives.map((obj, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-start gap-3 rounded-2xl bg-crema-scura p-4 dark:bg-inchiostro/10"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-verde font-mono text-xs font-bold text-white">{i + 1}</span>
                  <span className="leading-relaxed">{obj}</span>
                </motion.li>
              ))}
            </ul>
            <p className="mt-6 rounded-2xl border border-oro/30 bg-oro-tenue p-4 text-sm leading-relaxed text-oro-scuro dark:text-oro">
              🎧 Esta lección incluye audio en italiano (síntesis de voz de tu navegador), ejercicios interactivos y
              una conversación con el Tutor IA.
            </p>
          </div>
        )}

        {/* 2 · EXPLICACIÓN */}
        {stage === 1 && (
          <div className="space-y-4">
            {lesson.explanation.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="rounded-3xl border border-soft bg-surface p-6 text-base leading-[1.8] sm:p-7"
              >
                {p}
              </motion.div>
            ))}
            <div className="rounded-2xl bg-verde-tenue p-4 text-sm leading-relaxed text-verde-scuro dark:text-verde">
              📖 ¿Quieres profundizar? Visita la sección <button onClick={() => navigate("grammatica")} className="font-bold underline underline-offset-2">Gramática</button> para
              ver estos temas explicados paso a paso.
            </div>
          </div>
        )}

        {/* 3 · EJEMPLOS */}
        {stage === 2 && (
          <div className="space-y-3">
            {lesson.examples.map((ex, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -14 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-4 rounded-3xl border border-soft bg-surface p-5"
              >
                <AudioButton text={ex.it} />
                <div className="min-w-0">
                  <p className="font-display text-xl leading-snug">{ex.it}</p>
                  <p className="mt-1 text-sm text-muted-it">{ex.es}</p>
                </div>
              </motion.div>
            ))}
            <p className="text-center text-xs text-muted-it">Toca el botón verde para escuchar cada frase en italiano.</p>
          </div>
        )}

        {/* 4 · VOCABULARIO */}
        {stage === 3 && (
          <div>
            {lesson.vocabIds.length === 0 ? (
              <p className="rounded-3xl border border-soft bg-surface p-6 text-sm text-muted-it">
                Esta lección trabaja el vocabulario de las lecciones anteriores. Repásalo en la sección{" "}
                <button onClick={() => navigate("vocabolario")} className="font-bold text-verde underline underline-offset-2">Vocabolario</button>.
              </p>
            ) : (
              <div className="grid gap-2.5 sm:grid-cols-2">
                {lesson.vocabIds.map((vid, i) => {
                  const w = VOCAB_BY_ID[vid];
                  if (!w) return null;
                  const inSrs = !!srs[vid];
                  return (
                    <motion.div
                      key={vid}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.06 }}
                      className="flex items-center gap-3 rounded-2xl border border-soft bg-surface p-4"
                    >
                      <AudioButton text={w.it} size="sm" />
                      <div className="min-w-0 flex-1">
                        <p className="font-semibold">
                          {w.it} {w.gender && <span className={cn("text-xs", w.gender === "m" ? "noun-m" : "noun-f")}>{w.gender === "m" ? "· m." : "· f."}</span>}
                        </p>
                        <p className="truncate text-sm text-muted-it">{w.es} · <span className="font-mono text-xs">/{w.pron}/</span></p>
                      </div>
                      <button
                        onClick={() => addVocabToSrs(vid)}
                        disabled={inSrs}
                        className={cn(
                          "shrink-0 rounded-xl border px-2.5 py-1.5 text-[10px] font-bold transition-all",
                          inSrs ? "border-verde/30 bg-verde-tenue text-verde-scuro dark:text-verde" : "border-oro/40 bg-oro-tenue text-oro-scuro hover:scale-105 dark:text-oro"
                        )}
                      >
                        {inSrs ? "✓ en repaso" : "+ repaso"}
                      </button>
                    </motion.div>
                  );
                })}
              </div>
            )}
          </div>
        )}

        {/* 5 · PRÁCTICA */}
        {stage === 4 && (
          <div>
            {practiceExercises.length === 0 ? (
              <p className="rounded-3xl border border-soft bg-surface p-6 text-sm text-muted-it">Esta lección pasa directo a la conversación y evaluación. Avanti!</p>
            ) : (
              <QuizEngine
                exercises={practiceExercises}
                title="Pratica · práctica de la lección"
                kind="lección"
                label={`Lección: ${lesson.title}`}
                skill="grammatica"
              />
            )}
          </div>
        )}

        {/* 6 · CONVERSACIÓN */}
        {stage === 5 && (
          <div className="rounded-3xl border border-soft bg-surface p-6 sm:p-8">
            <h2 className="flex items-center gap-2 font-display text-2xl font-semibold">
              <Ear className="h-5 w-5 text-verde" aria-hidden="true" /> Ora parliamo!
            </h2>
            <p className="mt-2 text-sm text-muted-it">Lee (o escucha) el siguiente estímulo y practica con el Tutor IA. Marco adaptará su italiano a tu nivel.</p>

            <div className="mt-5 rounded-2xl bg-verde-tenue/70 p-5 dark:bg-verde-tenue/30">
              <div className="flex items-start justify-between gap-3">
                <p className="font-display text-2xl font-semibold italic leading-snug">{lesson.conversationPrompt.it}</p>
                <AudioButton text={lesson.conversationPrompt.it} />
              </div>
              <p className="mt-2 text-sm text-muted-it">{lesson.conversationPrompt.es}</p>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <button
                onClick={() => setTutorSeed("tutor", { tutorSeed: `Sono uno studente di livello ${lesson.level === "zero" ? "A1" : lesson.level}. Conversemos sobre el tema de esta lección (${lesson.titleIt}): ${lesson.conversationPrompt.it}` })}
                className="inline-flex min-h-12 items-center gap-2 rounded-2xl bg-verde px-6 py-3 font-bold text-white shadow-lg shadow-verde/25 transition-all hover:scale-[1.03]"
              >
                <Sparkles className="h-4 w-4" aria-hidden="true" /> Practica con el Tutor IA
              </button>
            </div>
            <p className="mt-4 text-xs leading-relaxed text-muted-it">
              Il tutor ti correggerà con cariño: si comete un error, Marco responde naturalmente y añade la corrección en español.
            </p>
          </div>
        )}

        {/* 7 · EVALUACIÓN */}
        {stage === 6 && (
          <div>
            {evalPassed ? (
              <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} className="mx-auto max-w-lg rounded-3xl border border-verde/40 bg-verde-tenue/60 p-8 text-center">
                <p className="text-5xl" aria-hidden="true">🎉</p>
                <h2 className="mt-3 font-display text-3xl font-semibold">Lezione superata!</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-it">
                  {isExamLesson ? "+200 XP · ¡Nivel completado! Pasa por Exámenes para obtener tu certificado." : "+80 XP · La lección quedó registrada en tu progreso."}
                </p>
                <div className="mt-6 flex flex-wrap justify-center gap-3">
                  <button onClick={onBack} className="inline-flex min-h-11 items-center gap-2 rounded-xl bg-verde px-5 py-2.5 text-sm font-bold text-white transition-all hover:scale-[1.02]">
                    Continúa con otras lecciones <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </button>
                </div>
              </motion.div>
            ) : (
              <div>
                <p className="mb-4 rounded-2xl border border-oro/30 bg-oro-tenue p-4 text-sm text-oro-scuro dark:text-oro">
                  🏁 Prueba de evaluación: necesitas al menos <strong>60%</strong> de aciertos para completar la lección.
                </p>
                {checkpointExercises.length > 0 ? (
                  <QuizEngine
                    exercises={checkpointExercises}
                    title="Valutazione · prueba final"
                    kind="prueba"
                    label={`Evaluación: ${lesson.title}`}
                    skill="grammatica"
                    xpPerCorrect={15}
                    onFinish={handleEvalFinish}
                  />
                ) : (
                  <div className="rounded-3xl border border-soft bg-surface p-6 text-center">
                    <p className="text-sm text-muted-it">No hay evaluación para esta lección. ¡Marcar como completada!</p>
                    <button
                      onClick={() => handleEvalFinish(1, 1)}
                      className="mt-4 inline-flex min-h-11 items-center gap-2 rounded-xl bg-verde px-5 py-2.5 text-sm font-bold text-white transition-all hover:scale-[1.02]"
                    >
                      Completa lección ✓
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </motion.main>

      {/* navegación inferior */}
      <div className="mt-8 flex items-center justify-between border-t border-soft pt-5">
        <button
          onClick={() => setStage(Math.max(0, stage - 1))}
          disabled={stage === 0}
          className="inline-flex min-h-11 items-center gap-2 rounded-xl border border-soft px-5 py-2.5 text-sm font-bold transition-all hover:border-verde/40 disabled:opacity-30"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" /> Atrás
        </button>
        <span className="text-xs font-bold text-muted-it">{stage + 1} / {STAGES.length}</span>
        <button
          onClick={() => setStage(Math.min(STAGES.length - 1, stage + 1))}
          disabled={stage === STAGES.length - 1}
          className="inline-flex min-h-11 items-center gap-2 rounded-xl bg-inchiostro px-5 py-2.5 text-sm font-bold text-crema transition-all hover:scale-[1.02] disabled:opacity-30 dark:bg-verde dark:text-inchiostro"
        >
          Siguiente <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
