"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft, ArrowRight, BookOpen, CheckCircle2, Circle, Dumbbell, Ear, GraduationCap, Languages,
  Library, ListChecks, Sparkles, Target, Volume2,
} from "lucide-react";
import { COURSES, findLesson, totalLessons } from "@/lib/lms/courses";
import { CAMBRIDGE, SKILL_MATRIX } from "@/lib/lms/cambridge";
import { CambridgeUnitView } from "../cambridge-unit";
import { ThemeImg } from "../theme-img";
import { getExercises } from "@/lib/lms/exercises";
import { VOCAB_BY_ID } from "@/lib/lms/vocabulary";
import { useLms } from "@/lib/lms/store";
import { newCard } from "@/lib/lms/srs";
import { levelAllowed, requiredPlanForLevel, PLANS } from "@/lib/lms/plans";
import { QuizEngine } from "../quiz-engine";
import { LessonReinforcement } from "../reinforcement";
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
  const cambridgeProgress = useLms((s) => s.cambridgeProgress);
  const skillStats = useLms((s) => s.skillStats);
  const userLevel = useLms((s) => s.level);
  const plan = useLms((s) => s.plan);
  const remoteConfig = useLms((s) => s.remoteConfig);
  const [openLevel, setOpenLevel] = useState<string | null>(navParams.level ?? null);
  const [openLesson, setOpenLesson] = useState<string | null>(navParams.lessonId ?? null);
  /* v9.8.1: deep-link desde Inicio ("Continúa: <unidad>") — solo si el plan permite el nivel */
  const [openUnit, setOpenUnit] = useState<string | null>(() => {
    if (!navParams.unitId) return null;
    const unit = CAMBRIDGE.flatMap((l) => l.units).find((u) => u.id === navParams.unitId);
    return unit && levelAllowed(plan, unit.level) ? unit.id : null;
  });

  /* ── unidad comunicativa Cambridge ── */
  if (openUnit) {
    return <CambridgeUnitView unitId={openUnit} onBack={() => setOpenUnit(null)} />;
  }

  /* ── lección del curso "Da zero" (flujo clásico) ── */
  const lessonData = openLesson ? findLesson(openLesson) : undefined;
  if (lessonData) {
    return <LessonView lessonId={lessonData.lesson.id} onBack={() => { setOpenLesson(null); setOpenLevel(lessonData.course.level); }} />;
  }

  const course = COURSES.find((c) => c.level === openLevel);

  /* ═══ PATHWAY COMUNICATIVO (arquitectura Cambridge) ═══ */
  const levelDone = (lv: string) => CAMBRIDGE.find((l) => l.level === lv)!.units.filter((u) => cambridgeProgress[u.id]?.done).length;
  const levelSections = (lv: string) => CAMBRIDGE.find((l) => l.level === lv)!.units.reduce((n, u) => n + (cambridgeProgress[u.id]?.sections.length ?? 0), 0);
  const levelTotalSections = (lv: string) => CAMBRIDGE.find((l) => l.level === lv)!.units.length * 12;
  const totalCbUnits = CAMBRIDGE.reduce((n, l) => n + l.units.length, 0);
  const totalCbDone = CAMBRIDGE.reduce((n, l) => n + levelDone(l.level), 0);

  /* ── lista de niveles ── */
  if (!course) {
    return (
      <div className="space-y-6">
        {/* cabecera del percorso */}
        <motion.header
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="overflow-hidden rounded-3xl border border-soft bg-gradient-to-br from-verde-tenue via-surface to-oro-tenue/50 p-6 sm:p-8 dark:from-verde-tenue/30"
        >
          <p className="font-mono text-xs font-bold uppercase tracking-widest text-verde-scuro dark:text-verde">Percorso comunicativo · metodologia Cambridge</p>
          <h1 className="mt-2 font-display text-3xl font-semibold leading-tight sm:text-4xl">Aprende italiano per fare cose in italiano</h1>
          <p className="mt-3 max-w-3xl leading-relaxed text-muted-it">
            66 unidades comunicativas de A1 a C2. Cada unidad es una secuencia pedagógica completa de 12 pasos —
            de la situación real a la misión final — donde la gramática es herramienta, no destino. La
            <strong> evaluación por competencias</strong> mide qué puedes <em>hacer</em>, no cuánto recuerdas.
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-3 text-xs font-bold">
            <span className="rounded-full bg-verde px-3 py-1.5 text-white">{totalCbUnits} unità A1–C2</span>
            <span className="rounded-full bg-inchiostro/5 px-3 py-1.5 text-muted-it dark:bg-inchiostro/15">12 passi per unità</span>
            <span className="rounded-full bg-oro-tenue px-3 py-1.5 text-oro-scuro dark:text-oro">{totalCbDone}/{totalCbUnits} completate</span>
          </div>
        </motion.header>

        {/* profilo competenze */}
        <section className="rounded-3xl border border-soft bg-surface p-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h2 className="font-display text-xl font-semibold">Profilo delle competenze</h2>
            <span className="rounded-full bg-inchiostro/5 px-3 py-1.5 text-xs font-bold text-muted-it dark:bg-inchiostro/15">
              MCER {userLevel ?? "—"} · matriz de evaluación
            </span>
          </div>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {SKILL_MATRIX.map((s) => (
              <div key={s.key} className="rounded-2xl border border-soft bg-crema p-4 dark:bg-inchiostro/5">
                <div className="flex items-center justify-between">
                  <p className="font-display font-semibold">{s.skill}</p>
                  <span className="font-mono text-xs font-bold text-verde-scuro dark:text-verde">{skillStats[s.key]}%</span>
                </div>
                <div className="mt-2 h-2.5 overflow-hidden rounded-full bg-inchiostro/10">
                  <div className="h-full rounded-full bg-gradient-to-r from-verde to-verde-scuro transition-all" style={{ width: `${Math.min(100, skillStats[s.key])}%` }} />
                </div>
                <p className="mt-2.5 text-xs leading-relaxed text-muted-it">
                  <strong className="text-inchiostro">{userLevel ?? "A1"}:</strong> {s.descriptors[userLevel ?? "A1"]}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* tarjetas de nivel */}
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {CAMBRIDGE.map((lv, i) => {
            const doneUnits = levelDone(lv.level);
            const isCurrent = userLevel === lv.level;
            const levelOff = !(remoteConfig?.levels?.[lv.level] ?? true);
            const locked = !levelAllowed(plan, lv.level);
            const required = PLANS[requiredPlanForLevel(lv.level)];
            const pct = Math.round(doneUnits / lv.units.length * 100);
            return (
              <motion.button
                key={lv.level}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.04 }}
                onClick={() => (levelOff ? undefined : locked ? navigate("piani") : setOpenLevel(lv.level))}
                disabled={levelOff}
                className={cn(
                  "group relative overflow-hidden rounded-3xl border-2 p-5 text-left transition-all",
                  levelOff
                    ? "cursor-not-allowed border-dashed border-soft bg-inchiostro/5 opacity-60"
                    : locked
                      ? "border-dashed border-oro/50 bg-oro-tenue/25 hover:shadow-lg dark:bg-oro-tenue/10"
                      : isCurrent
                        ? "border-verde bg-verde-tenue hover:-translate-y-1 hover:shadow-lg"
                        : "border-soft bg-surface hover:-translate-y-1 hover:border-verde/40 hover:shadow-lg"
                )}
              >
                {locked && !levelOff && (
                  <span className="absolute right-4 top-4 z-10 inline-flex items-center gap-1 rounded-full plan-gold-bg px-2.5 py-1 text-[10px] font-bold text-white shadow-md">
                    🔒 {required.name}
                  </span>
                )}
                {!locked && isCurrent && <span className="absolute right-4 top-4 rounded-full bg-verde px-2.5 py-1 text-[10px] font-bold uppercase text-white">tu nivel</span>}
                <p className="font-display text-4xl font-bold">{lv.level}</p>
                <p className="mt-1 text-sm font-semibold">{lv.label}</p>
                <p className={cn("mt-2 text-sm leading-relaxed text-muted-it", locked && "line-clamp-2 opacity-70")}>{lv.subtitle}</p>
                {locked ? (
                  <p className="mt-4 flex items-center gap-1.5 text-xs font-bold text-oro-scuro dark:text-oro">
                    🔒 Contenuto a pagamento — sblocca con {required.name}
                  </p>
                ) : (
                  <>
                    <div className="mt-4 h-2 overflow-hidden rounded-full bg-inchiostro/10">
                      <div className="h-full rounded-full bg-verde transition-all" style={{ width: `${pct}%` }} />
                    </div>
                    <div className="mt-3 flex items-center gap-3 text-xs text-muted-it">
                      <span className="flex items-center gap-1"><Target className="h-3.5 w-3.5" aria-hidden="true" /> {lv.units.length} unità</span>
                      <span className="flex items-center gap-1"><GraduationCap className="h-3.5 w-3.5" aria-hidden="true" /> ~{lv.hours}h</span>
                      <span className="ml-auto font-bold text-verde-scuro dark:text-verde">{doneUnits}/{lv.units.length} ✓</span>
                    </div>
                  </>
                )}
              </motion.button>
            );
          })}

          {/* curso Da zero (flujo clásico intacto) */}
          <motion.button
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.28 }}
            onClick={() => setOpenLevel("zero")}
            className="group relative overflow-hidden rounded-3xl border-2 border-dashed border-soft bg-surface p-5 text-left transition-all hover:-translate-y-1 hover:border-verde/40 hover:shadow-lg"
          >
            <p className="font-display text-4xl font-bold">0</p>
            <p className="mt-1 text-sm font-semibold">Primi passi · Desde cero</p>
            <p className="mt-2 text-sm leading-relaxed text-muted-it">Alfabeto, saludos y números: el póliza previa al curso comunicativo.</p>
            <div className="mt-4 flex items-center gap-3 text-xs text-muted-it">
              <span className="flex items-center gap-1"><BookOpen className="h-3.5 w-3.5" aria-hidden="true" /> {totalLessons("zero")} lezioni</span>
            </div>
          </motion.button>
        </div>

        <p className="rounded-2xl border border-soft bg-surface p-4 text-sm leading-relaxed text-muted-it">
          💡 Cada unidad comunicativa sigue la secuencia completa: <strong>situación → escucha → comprensión →
          vocabulario en bloques → gramática inductiva → pronunciación → expresión oral → lectura → escritura →
          cultura → misión real → autoevaluación</strong>. Las secciones alimentan tu perfil de competencias y el
          motor adaptativo.
        </p>
      </div>
    );
  }

  /* ═══ DETALLE DE NIVEL ═══ */
  if (course.level !== "zero") {
    const cbLevel = CAMBRIDGE.find((l) => l.level === course.level)!;
    const doneUnits = levelDone(cbLevel.level);
    return (
      <div>
        <button onClick={() => setOpenLevel(null)} className="mb-5 inline-flex min-h-11 items-center gap-2 text-sm font-bold text-muted-it transition-colors hover:text-verde">
          <ArrowLeft className="h-4 w-4" aria-hidden="true" /> Percorso comunicativo
        </button>

        <div className="rounded-3xl border border-soft bg-gradient-to-br from-verde-tenue to-surface p-6 dark:from-verde-tenue/30">
          <div className="flex flex-wrap items-center gap-3">
            <p className="font-display text-4xl font-bold">{cbLevel.level}</p>
            <p className="font-display text-xl font-semibold">{cbLevel.label}</p>
            <span className="rounded-full bg-inchiostro/5 px-3 py-1.5 text-xs font-bold text-muted-it dark:bg-inchiostro/15">
              {cbLevel.units.length} unità · ~{cbLevel.hours}h · {doneUnits} completate
            </span>
          </div>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-it"><strong className="text-inchiostro">Obiettivo:</strong> {cbLevel.subtitle}</p>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {cbLevel.units.map((u, i) => {
            const prog = cambridgeProgress[u.id];
            const secs = prog?.sections.length ?? 0;
            const isDone = prog?.done ?? false;
            const locked = !levelAllowed(plan, u.level);
            return (
              <motion.button
                key={u.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.03 }}
                onClick={() => (locked ? navigate("piani") : setOpenUnit(u.id))}
                className={cn(
                  "group flex flex-col overflow-hidden rounded-3xl border-2 text-left transition-all",
                  isDone ? "border-verde/40 bg-verde-tenue/40" : "border-soft bg-surface hover:-translate-y-1 hover:border-verde/40 hover:shadow-lg",
                )}
              >
                <div className="relative h-32 w-full overflow-hidden">
                  <ThemeImg src={u.img} alt={u.titleIt} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-inchiostro/70 to-transparent" />
                  <span className="absolute left-3 top-3 rounded-full bg-inchiostro/70 px-2.5 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-white">Unità {u.n}</span>
                  {isDone && (
                    <span className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-full bg-verde px-2.5 py-1 text-[10px] font-bold text-white">
                      <CheckCircle2 className="h-3 w-3" aria-hidden="true" /> Completata
                    </span>
                  )}
                  <p className="absolute bottom-2.5 left-3 right-3 font-display text-base font-semibold leading-tight text-white">{u.titleIt}</p>
                </div>
                <div className="flex flex-1 flex-col p-4">
                  <p className="text-sm font-semibold">{u.title}</p>
                  <p className="mt-1.5 line-clamp-2 text-xs leading-relaxed text-muted-it">{u.goal}</p>
                  <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-inchiostro/10">
                    <div className="h-full rounded-full bg-verde transition-all" style={{ width: `${Math.round(secs / 12 * 100)}%` }} />
                  </div>
                  <div className="mt-2.5 flex items-center justify-between text-[11px] font-bold text-muted-it">
                    <span>{secs}/12 passi</span>
                    {u.grammar.topicId && <span className="text-verde-scuro dark:text-verde">+10 XP per passo</span>}
                  </div>
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>
    );
  }

  /* ═══ "DA ZERO": flujo clásico de unidades y lecciones ═══ */
  return (
    <div>
      <button onClick={() => setOpenLevel(null)} className="mb-5 inline-flex min-h-11 items-center gap-2 text-sm font-bold text-muted-it transition-colors hover:text-verde">
        <ArrowLeft className="h-4 w-4" aria-hidden="true" /> Tutti i corsi
      </button>

      <div className="rounded-3xl border border-soft bg-gradient-to-br from-verde-tenue to-surface p-6 dark:from-verde-tenue/30">
        <div className="flex flex-wrap items-center gap-3">
          <p className="font-display text-4xl font-bold">Da zero</p>
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
                        {ui + 1}.{li + 1} · base
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
  { id: "rinforzo", label: "Refuerzo", icon: Dumbbell },
] as const;

function LessonView({ lessonId, onBack }: { lessonId: string; onBack: () => void }) {
  const navigate = useLms((s) => s.navigate);
  const completedLessons = useLms((s) => s.completedLessons);
  const markLessonComplete = useLms((s) => s.markLessonComplete);
  const addXp = useLms((s) => s.addXp);
  const upsertSrs = useLms((s) => s.upsertSrs);
  const srs = useLms((s) => s.srs);
  const setTutorSeed = useLms((s) => s.navigate);
  const plan = useLms((s) => s.plan);

  const [stage, setStage] = useState(0);
  const [evalPassed, setEvalPassed] = useState(false);
  const [rinforzoDone, setRinforzoDone] = useState(false);

  const data = findLesson(lessonId);
  const practiceExercises = useMemo(() => getExercises(data?.lesson.exerciseIds ?? []), [data?.lesson.exerciseIds]);
  const checkpointExercises = useMemo(() => getExercises(data?.lesson.checkpointIds ?? []), [data?.lesson.checkpointIds]);

  if (!data) return <p className="text-muted-it">Lección no encontrada.</p>;
  const { lesson, unit, course } = data;

  /* guard de plan: curso bloqueado */
  if (!levelAllowed(plan, lesson.level)) {
    const required = PLANS[requiredPlanForLevel(lesson.level)];
    return (
      <div className="mx-auto max-w-lg rounded-3xl border-2 border-dashed border-oro/50 bg-oro-tenue/25 p-10 text-center dark:bg-oro-tenue/10">
        <span className="mx-auto flex h-16 w-16 animate-pop-in items-center justify-center rounded-full plan-gold-bg text-white shadow-lg">
          <GraduationCap className="h-8 w-8" aria-hidden="true" />
        </span>
        <h2 className="mt-5 font-display text-2xl font-semibold">Corso {lesson.level} · {course.level === "zero" ? "Da zero" : course.label.split("·")[1] ?? ""}</h2>
        <p className="mt-2 text-sm leading-relaxed text-muted-it">
          Questo corso fa parte del piano <strong>{required.name}</strong>. Passa a PRO · PREMIUM · PLATINUM
          per sbloccare {course.units.reduce((n, u) => n + u.lessons.length, 0)} lezioni, esercizi e certificati.
        </p>
        <button
          onClick={() => navigate("piani")}
          className="mt-6 inline-flex min-h-12 items-center gap-2 rounded-2xl plan-gold-bg px-7 py-3 text-sm font-bold text-white shadow-lg shadow-oro/30 transition-all hover:scale-[1.03]"
        >
          Vedi i piani →
        </button>
      </div>
    );
  }

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
      <div className="sticky top-[98px] z-30 -mx-4 mt-6 overflow-x-auto border-b border-soft bg-crema/90 px-4 py-2.5 backdrop-blur-md sm:-mx-6 sm:px-6 md:top-16">
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
                  <button onClick={() => setStage(7)} className="inline-flex min-h-12 items-center gap-2 rounded-2xl bg-verde px-6 py-3 text-sm font-bold text-white shadow-lg shadow-verde/25 transition-all hover:scale-[1.02]">
                    <Dumbbell className="h-4 w-4" aria-hidden="true" /> Fai il rinforzo · quiz, escucha, pronunciación y escritura
                  </button>
                  <button onClick={onBack} className="inline-flex min-h-11 items-center gap-2 rounded-xl border border-soft px-5 py-2.5 text-sm font-bold transition-all hover:border-verde/40">
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
        {/* 8 · REFUERZO (quiz duolingo + escucha + pronunciación + escritura) */}
        {stage === 7 && (
          <div>
            {rinforzoDone && (
              <p className="mb-4 inline-flex items-center gap-1.5 rounded-full bg-verde px-3 py-1.5 text-xs font-bold text-white">
                <CheckCircle2 className="h-3.5 w-3.5" aria-hidden="true" /> Rinforzo completato · puedes repetirlo cuando quieras
              </p>
            )}
            <LessonReinforcement
              key={`${lesson.id}-${rinforzoDone ? "done" : "new"}`}
              lesson={lesson}
              onDone={() => setRinforzoDone(true)}
            />
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
