"use client";

import { useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import { AlertTriangle, ArrowRight, BookOpen, Coins, Compass, Dices, Ear, FileSpreadsheet, Flame, GraduationCap, Keyboard, Library, Quote, RefreshCcw, Sparkles, Target, Timer, Trophy, Volume2, Wand2, Zap } from "lucide-react";
import { MorphingHero } from "@/components/italian/morphing-hero";
import { useLms, rankFor } from "@/lib/lms/store";
import { VOCAB, VOCAB_BY_ID } from "@/lib/lms/vocabulary";
import { pickDaily, weakTopics, TOPIC_LABELS } from "@/lib/lms/adaptive";
import { COURSES, totalLessons } from "@/lib/lms/courses";
import { dueCards } from "@/lib/lms/srs";
import { CEFR_LEVELS, LEVEL_LABELS } from "@/lib/lms/types";
import { PLANS, levelAllowed, requiredPlanForLevel, generateWeeklyPlan, planLimits } from "@/lib/lms/plans";
import { QUEST_DEFS, ALL_QUESTS_BONUS_XP } from "@/lib/lms/quests";
import { InstallButton } from "../pwa";
import { PremiumBanner } from "../plan-badge";
import { AudioButton } from "../audio-button";
import { cn } from "@/lib/utils";
import type { ViewId } from "@/lib/lms/types";

/* ── Vista: Inicio ────────────────────────────────────────────────── */

const QUICK: { id: ViewId; label: string; it: string; icon: typeof Ear; desc: string }[] = [
  { id: "cursos", label: "Cursos", it: "corsi", icon: GraduationCap, desc: "Ruta A1→C2 con lecciones completas" },
  { id: "letture", label: "Letture & Storia", it: "letture", icon: BookOpen, desc: "Historia de Italia y el mundo con audio" },
  { id: "ascolto", label: "Escucha", it: "ascolto", icon: Ear, desc: "Diálogos y dictados con audio" },
  { id: "tutor", label: "Tutor IA", it: "tutor", icon: Sparkles, desc: "Conversa y corrige con Marco" },
];

/* títulos de perfil comprables (v9.0) */
const TITLE_EMOJIS: Record<string, string> = {
  "titolo-storico": "🏛️", "titolo-cicerone": "🗣️", "titolo-poeta": "🖋️", "titolo-navigatore": "⚓",
};
const TITLES_SHORT: Record<string, string> = {
  "titolo-storico": "Storico", "titolo-cicerone": "Cicerone", "titolo-poeta": "Poeta", "titolo-navigatore": "Navigatore",
};

const PLUGINS: { id: ViewId; label: string; it: string; icon: typeof Ear; desc: string }[] = [
  { id: "proverbi", label: "Proverbi", it: "plugin", icon: Quote, desc: "193 proverbios, modismos y locuciones latinas" },
  { id: "falsiamici", label: "Falsi amici", it: "plugin", icon: AlertTriangle, desc: "87 trampas IT–ES explicadas" },
  { id: "dettato", label: "Dettato", it: "plugin", icon: Ear, desc: "Dictado con corrección palabra a palabra" },
  { id: "ankiexport", label: "Export Anki", it: "plugin", icon: FileSpreadsheet, desc: "Mazos TSV/CSV desde el diccionario o tu SRS" },
  { id: "parolanascosta", label: "Parola nascosta", it: "gioco", icon: Dices, desc: "Wordle italiano desde el diccionario" },
  { id: "preposizioni", label: "Preposizioni", it: "drill", icon: Target, desc: "72 frases cloze con regla explicada" },
  { id: "pomodoro", label: "Pomodoro", it: "focus", icon: Timer, desc: "Sesiones de enfoque con XP" },
  { id: "muse", label: "Muse", it: "generatore", icon: Wand2, desc: "Retos de escritura por nivel" },
  { id: "shadowing", label: "Shadowing", it: "voce", icon: Volume2, desc: "Escucha, graba tu voz y compara" },
  { id: "importatore", label: "Importador", it: "testi", icon: FileSpreadsheet, desc: "Convierte cualquier texto en lección" },
];

export function HomeView() {
  const navigate = useLms((s) => s.navigate);
  const xp = useLms((s) => s.xp);
  const level = useLms((s) => s.level);
  const placementDone = useLms((s) => s.placementDone);
  const streak = useLms((s) => s.streakCount);
  const streakFreezes = useLms((s) => s.streakFreezes);
  const lastFreezeDate = useLms((s) => s.lastFreezeDate);
  const completedLessons = useLms((s) => s.completedLessons);
  const srs = useLms((s) => s.srs);
  const errorLog = useLms((s) => s.errorLog);
  const dailyXp = useLms((s) => s.dailyXp);
  const goal = useLms((s) => s.settings.dailyGoalXp);
  const userName = useLms((s) => s.userName);
  const plan = useLms((s) => s.plan);
  const remoteConfig = useLms((s) => s.remoteConfig);
  const quests = useLms((s) => s.quests);
  const ensureDailyQuests = useLms((s) => s.ensureDailyQuests);
  const coins = useLms((s) => s.coins);
  const lastWheelDate = useLms((s) => s.lastWheelDate);
  const activeTitle = useLms((s) => s.activeTitle);

  useEffect(() => { ensureDailyQuests(); }, [ensureDailyQuests]);

  const rank = rankFor(xp);
  const due = dueCards(srs).length;
  const wordOfDay = useMemo(() => pickDaily(VOCAB), []);
  const weaknesses = useMemo(() => weakTopics(errorLog, 3), [errorLog]);
  const allLessons = useMemo(() => totalLessons(), []);
  const showWeekly = planLimits(plan).weeklyPlan && (remoteConfig?.features.weeklyPlan ?? true);
  const weeklyPlan = useMemo(
    () => generateWeeklyPlan(level, due, weaknesses.map((w) => TOPIC_LABELS[w.topic] ?? w.topic)),
    [level, due, weaknesses]
  );
  // siguiente lección del nivel actual (o primera de A1/zero) — cálculo barato, sin memo
  const nextLesson = (() => {
    const targetLevel = level ?? "A1";
    const course = COURSES.find((c) => c.level === (COURSES.some((c2) => c2.level === targetLevel) ? targetLevel : "A1"));
    if (!course) return undefined;
    for (const unit of course.units) {
      const lesson = unit.lessons.find((l) => !completedLessons.includes(l.id));
      if (lesson) return { lesson, course };
    }
    return undefined;
  })();

  const missionPct = Math.min(100, Math.round((dailyXp / Math.max(1, goal)) * 100));

  return (
    <div className="space-y-10">
      {/* ── HERO ── */}
      <section className="grid items-center gap-8 lg:grid-cols-[1.15fr_1fr]">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-verde/30 bg-verde-tenue px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-verde-scuro dark:text-verde">
            <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
            LMS completo · da zero a C2
          </p>
          <h1 className="mt-5 font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            Ciao {userName.split(" ")[0]}{activeTitle ? <span className="ml-2 align-middle text-base font-bold text-terracotta dark:text-verde">{TITLE_EMOJIS[activeTitle] ?? ""} {TITLES_SHORT[activeTitle] ?? ""}</span> : ""}, <span className="italic text-verde-scuro dark:text-verde">impariamo l&apos;italiano.</span>
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-it sm:text-lg">
            Un sistema integral: lecciones conectadas, las 4 destrezas, gramática paso a paso,
            pronunciación interactiva, repaso espaciado, tutor IA y certificados.{" "}
            <span className="font-display italic text-inchiostro">La tua strada verso il dominio.</span>
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            {!placementDone ? (
              <button onClick={() => navigate("test")} className="inline-flex min-h-12 items-center gap-2 rounded-2xl bg-verde px-6 py-3 font-bold text-white shadow-lg shadow-verde/25 transition-all hover:scale-[1.03] hover:bg-verde-scuro active:scale-95">
                <Compass className="h-4 w-4" aria-hidden="true" /> Haz el test de nivel
              </button>
            ) : (
              <button onClick={() => navigate("cursos", { level: level ?? "A1" })} className="inline-flex min-h-12 items-center gap-2 rounded-2xl bg-verde px-6 py-3 font-bold text-white shadow-lg shadow-verde/25 transition-all hover:scale-[1.03] hover:bg-verde-scuro active:scale-95">
                <GraduationCap className="h-4 w-4" aria-hidden="true" />
                {nextLesson ? `Continúa: ${nextLesson.lesson.title}` : "Explora los cursos"}
              </button>
            )}
            <button onClick={() => navigate("tutor")} className="inline-flex min-h-12 items-center gap-2 rounded-2xl border-2 border-inchiostro/15 bg-surface px-6 py-3 font-bold transition-all hover:border-verde/40 active:scale-95">
              <Sparkles className="h-4 w-4 text-verde" aria-hidden="true" /> Habla con el Tutor IA
            </button>
          </div>

          <dl className="mt-9 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {([
              { label: "XP total", value: xp.toLocaleString(), icon: Zap, tone: "oro" },
              { label: streakFreezes > 0 ? `Racha · ${streakFreezes}❄️` : "Racha", value: `${streak} d`, icon: Flame, tone: "rosso" },
              { label: lastWheelDate === new Date().toISOString().slice(0, 10) ? "Monete" : "Monete · ruota!", value: coins.toLocaleString(), icon: Coins, tone: "oro", to: "premi" as const },
              { label: "Tarjetas", value: String(Object.keys(srs).length), icon: Library, tone: "terracotta" },
            ] as const).map((card) => {
              const inner = (
                <>
                  <dt className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-muted-it">
                    <card.icon className="h-3 w-3" aria-hidden="true" /> {card.label}
                  </dt>
                  <dd className="mt-1 font-display text-2xl font-bold">{card.value}</dd>
                </>
              );
              return "to" in card && card.to ? (
                <button key={card.label} onClick={() => navigate(card.to)} className={cn("rounded-2xl border border-soft bg-surface p-3.5 text-left transition-all hover:-translate-y-0.5 hover:border-oro/50", card.tone === "oro" && "border-oro/25")}>{inner}</button>
              ) : (
                <div key={card.label} className={cn("rounded-2xl border border-soft bg-surface p-3.5", card.tone === "oro" && "border-oro/25", card.tone === "rosso" && "border-rosso/25", card.tone === "terracotta" && "border-terracotta/25")}>{inner}</div>
              );
            })}
            <div className="col-span-2 flex items-center justify-center sm:col-span-1">
              <InstallButton compact className="!min-h-9 !px-4 !py-1.5 text-xs" />
            </div>
          </dl>

          {/* v8.0 · avviso congelamento racha */}
          {lastFreezeDate === new Date().toISOString().slice(0, 10) && (
            <p className="mt-3 rounded-2xl border border-rosso/25 bg-rosso-tenue/60 px-4 py-3 text-sm font-semibold text-rosso-scuro dark:text-rosso">
              ❄️ La tua racha è stata congelata oggi: i giorni persi non hanno interrotto la serie. Ti quedan {streakFreezes} congelamenti.
            </p>
          )}
        </div>
        <div className="relative">
          <MorphingHero />
        </div>
      </section>

      {/* ── BANNER PREMIUM (solo FREE) ── */}
      {plan === "free" && <PremiumBanner />}

      {/* ── PLAN SEMANAL (PREMIUM+) ── */}
      {showWeekly && (
        <section className="rounded-3xl border border-soft bg-surface p-6">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <h2 className="flex items-center gap-2 font-display text-2xl font-semibold">
                <span aria-hidden="true">🗓️</span> Il tuo piano settimanale <span className="rounded-full plan-gold-bg px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-white">{PLANS[plan].name}</span>
              </h2>
              <p className="mt-1.5 max-w-2xl text-sm leading-relaxed text-muted-it">
                Generado esta semana según tu nivel {level ?? "A1"}, {due} tarjetas por repasar y tus puntos débiles.
                Toca cada actividad para ir directo.
              </p>
            </div>
          </div>
          <div className="mt-5 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7">
            {weeklyPlan.map((d, i) => (
              <motion.div
                key={d.day}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className={cn(
                  "flex flex-col rounded-2xl border-2 p-3.5",
                  i === new Date().getDay() - 1 || (new Date().getDay() === 0 && i === 6)
                    ? "border-verde/50 bg-verde-tenue/60 dark:bg-verde-tenue/20"
                    : "border-soft bg-crema dark:bg-inchiostro/5"
                )}
              >
                <p className="font-display text-sm font-bold">{d.day}</p>
                <p className="mt-0.5 text-[10px] font-semibold uppercase tracking-wide text-muted-it">{d.focus}</p>
                <div className="mt-2.5 flex flex-1 flex-col gap-1.5">
                  {d.activities.map((a, j) => (
                    <button
                      key={j}
                      onClick={() => navigate(a.view)}
                      className="flex min-h-9 items-start gap-1.5 rounded-lg bg-surface px-2 py-1.5 text-left text-[11px] font-semibold leading-tight transition-all hover:scale-[1.02] hover:text-verde-scuro dark:bg-inchiostro/10 dark:hover:text-verde"
                    >
                      <span aria-hidden="true">{a.emoji}</span>
                      <span className="min-w-0 flex-1">{a.label}</span>
                      <span className="shrink-0 text-[9px] font-normal text-muted-it">{a.minutes}′</span>
                    </button>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      )}

      {/* ── MISIÓN DIARIA + PALABRA DEL DÍA ── */}
      <section className="grid gap-4 md:grid-cols-2">
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="rounded-3xl border border-soft bg-surface p-6">
          <div className="flex items-center justify-between">
            <h2 className="flex items-center gap-2 font-display text-xl font-semibold">
              <Target className="h-5 w-5 text-rosso" aria-hidden="true" /> Missione di oggi
            </h2>
            <span className="text-xs font-bold text-muted-it">{dailyXp} / {goal} XP</span>
          </div>
          <div className="mt-4 h-3 overflow-hidden rounded-full bg-crema-scura dark:bg-inchiostro/15">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${missionPct}%` }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className={cn("h-full rounded-full", missionPct >= 100 ? "bg-verde" : "bg-gradient-to-r from-oro to-terracotta")}
            />
          </div>
          <ul className="mt-5 space-y-3 text-sm">
            {quests.map((q) => {
              const def = QUEST_DEFS.find((d) => d.type === q.type);
              const pct = Math.min(100, Math.round((q.progress / Math.max(1, q.target)) * 100));
              return (
                <li key={q.id} className={cn("rounded-xl px-3.5 py-2.5 transition-colors", q.done ? "bg-verde-tenue dark:bg-verde-tenue/30" : "bg-crema-scura dark:bg-inchiostro/10")}>
                  <div className="flex items-center justify-between gap-3">
                    <span className="min-w-0 flex-1 font-semibold">
                      <span aria-hidden="true">{def?.emoji ?? "🎯"}</span> {def?.label(q.target) ?? q.type}
                    </span>
                    <span className={cn("shrink-0 font-mono text-xs font-bold", q.done ? "text-verde-scuro dark:text-verde" : "text-muted-it")}>
                      {q.done ? "✓" : `${q.progress}/${q.target}`}
                    </span>
                  </div>
                  <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-inchiostro/10 dark:bg-inchiostro/20">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${pct}%` }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                      className={cn("h-full rounded-full", q.done ? "bg-verde" : "bg-gradient-to-r from-oro to-terracotta")}
                    />
                  </div>
                </li>
              );
            })}
          </ul>
          {quests.length > 0 && quests.every((q) => q.done) ? (
            <p className="mt-4 rounded-xl bg-verde-tenue px-4 py-2.5 text-center text-sm font-bold text-verde-scuro dark:text-verde">
              🎉 Missioni completate! +{ALL_QUESTS_BONUS_XP} XP bonus
            </p>
          ) : (
            <p className="mt-3 text-center text-[11px] text-muted-it">
              Completa las 3 misiones → +{ALL_QUESTS_BONUS_XP} XP bonus
            </p>
          )}
          {missionPct >= 100 && (
            <p className="mt-3 rounded-xl bg-verde-tenue px-4 py-2.5 text-center text-sm font-bold text-verde-scuro dark:text-verde">
              🏁 Obiettivo giornaliero raggiunto!
            </p>
          )}
        </motion.div>

        {wordOfDay && (
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 }} className="rounded-3xl border border-soft bg-gradient-to-br from-verde-tenue to-surface p-6 dark:from-verde-tenue/40">
            <div className="flex items-center justify-between">
              <h2 className="flex items-center gap-2 font-display text-xl font-semibold">
                <Volume2 className="h-5 w-5 text-verde" aria-hidden="true" /> Parola del giorno
              </h2>
              <span className="rounded-full bg-inchiostro/5 px-2.5 py-1 font-mono text-[10px] font-bold uppercase text-muted-it dark:bg-inchiostro/15">{wordOfDay.level}</span>
            </div>
            <div className="mt-5 flex items-center gap-4">
              <div>
                <p className="font-display text-4xl font-semibold">{wordOfDay.it}</p>
                <p className="mt-1 font-mono text-sm text-muted-it">/{wordOfDay.pron}/</p>
                <p className="mt-2 text-lg text-verde-scuro dark:text-verde">{wordOfDay.es}</p>
              </div>
              <AudioButton text={wordOfDay.it} size="lg" />
            </div>
            <div className="mt-5 rounded-2xl bg-surface/70 p-4 dark:bg-inchiostro/10">
              <p className="font-display text-base italic">“{wordOfDay.example.it}”</p>
              <p className="mt-1 text-sm text-muted-it">{wordOfDay.example.es}</p>
            </div>
          </motion.div>
        )}
      </section>

      {/* ── DEBILIDADES (motor adaptativo) ── */}
      {weaknesses.length > 0 && (
        <section className="rounded-3xl border border-oro/30 bg-oro-tenue/60 p-6">
          <h2 className="flex items-center gap-2 font-display text-xl font-semibold">
            <Trophy className="h-5 w-5 text-oro-scuro dark:text-oro" aria-hidden="true" /> Il motore adattivo ti consiglia
          </h2>
          <p className="mt-1.5 text-sm text-muted-it">
            Detecté tus temas más flojos a partir de tus errores. Practícalos ahora para reforzarlos:
          </p>
          <div className="mt-4 flex flex-wrap gap-2.5">
            {weaknesses.map((w) => (
              <button
                key={w.topic}
                onClick={() => navigate("repaso")}
                className="inline-flex min-h-11 items-center gap-2 rounded-xl border border-oro/40 bg-surface px-4 py-2.5 text-sm font-bold transition-all hover:scale-[1.02]"
              >
                {TOPIC_LABELS[w.topic] ?? w.topic}
                <span className="rounded-full bg-rosso-tenue px-2 py-0.5 text-[10px] font-bold text-rosso">
                  {Math.round(w.accuracy * 100)}%
                </span>
                <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
              </button>
            ))}
          </div>
        </section>
      )}

      {/* ── ACCESO RÁPIDO ── */}
      <section>
        <h2 className="font-display text-2xl font-semibold">Esplora la piattaforma</h2>
        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {QUICK.map((q, i) => (
            <motion.button
              key={q.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              onClick={() => navigate(q.id)}
              className="group rounded-3xl border border-soft bg-surface p-5 text-left transition-all hover:-translate-y-1 hover:border-verde/40 hover:shadow-lg"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-verde-tenue text-verde-scuro transition-colors group-hover:bg-verde group-hover:text-white dark:text-verde">
                <q.icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <p className="mt-3.5 font-display text-lg font-semibold">
                {q.label} <span className="ml-1 font-mono text-[10px] font-normal uppercase text-muted-it">{q.it}</span>
              </p>
              <p className="mt-1 text-sm leading-relaxed text-muted-it">{q.desc}</p>
            </motion.button>
          ))}
        </div>
      </section>

      {/* ── PLUGIN · ESTENSIONI ── */}
      <section>
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h2 className="font-display text-2xl font-semibold">Estensioni · Plugin</h2>
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-it">v5.0 · 8 strumenti</p>
        </div>
        <p className="mt-1.5 text-sm text-muted-it">Herramientas extra que amplían tu aprendizaje más allá de las lecciones.</p>
        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {PLUGINS.map((p, i) => (
            <motion.button
              key={p.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 + i * 0.05 }}
              onClick={() => navigate(p.id)}
              className="group rounded-3xl border border-soft bg-surface p-5 text-left transition-all hover:-translate-y-1 hover:border-rosso/40 hover:shadow-lg"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-rosso-tenue text-rosso-scuro transition-colors group-hover:bg-rosso group-hover:text-white dark:text-rosso">
                <p.icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <p className="mt-3.5 font-display text-lg font-semibold">
                {p.label} <span className="ml-1 font-mono text-[10px] font-normal uppercase text-muted-it">{p.it}</span>
              </p>
              <p className="mt-1 text-sm leading-relaxed text-muted-it">{p.desc}</p>
            </motion.button>
          ))}
        </div>
      </section>

      {/* ── NIVELES ── */}
      <section>
        <h2 className="font-display text-2xl font-semibold">I sei livelli del MCER</h2>
        <p className="mt-1.5 text-sm text-muted-it">Cada nivel: objetivos, unidades, lecciones, vocabulario, gramática, práctica y examen.</p>
        <div className="mt-5 grid gap-2.5 sm:grid-cols-3 lg:grid-cols-6">
          <button
            onClick={() => navigate("cursos", { level: "zero" })}
            className="rounded-2xl border-2 border-dashed border-terracotta/40 bg-rosso-tenue/50 p-4 text-left transition-all hover:-translate-y-0.5 hover:border-terracotta"
          >
            <p className="font-display text-2xl font-bold text-terracotta">Da zero</p>
            <p className="mt-1 text-xs text-muted-it">Alfabeto, saludos, números</p>
          </button>
          {CEFR_LEVELS.map((lv) => {
            const levelOff = !(remoteConfig?.levels?.[lv] ?? true);
            if (levelOff) {
              return (
                <button key={lv} disabled className="cursor-not-allowed rounded-2xl border-2 border-dashed border-soft bg-inchiostro/5 p-4 text-left opacity-60">
                  <p className="font-display text-2xl font-bold text-muted-it">{lv}</p>
                  <p className="mt-1 text-xs text-muted-it">Disattivato dall'amministrazione</p>
                </button>
              );
            }
            const locked = !levelAllowed(plan, lv);
            const required = PLANS[requiredPlanForLevel(lv)];
            return (
              <button
                key={lv}
                onClick={() => (locked ? navigate("piani") : navigate("cursos", { level: lv }))}
                className={cn(
                  "relative rounded-2xl border-2 p-4 text-left transition-all",
                  locked
                    ? "border-dashed border-oro/50 bg-oro-tenue/25 hover:-translate-y-0.5 dark:bg-oro-tenue/10"
                    : level === lv
                      ? "border-verde bg-verde-tenue"
                      : "border-soft bg-surface hover:-translate-y-0.5 hover:border-verde/40"
                )}
              >
                <p className={cn("font-display text-2xl font-bold", locked ? "text-oro-scuro dark:text-oro" : "text-verde-scuro dark:text-verde")}>
                  {locked ? "🔒" : ""} {lv}
                </p>
                <p className="mt-1 text-xs text-muted-it">{locked ? `Sblocca con ${required.name}` : LEVEL_LABELS[lv]}</p>
                {!locked && <p className="mt-2 font-mono text-[10px] text-muted-it">{totalLessons(lv)} lezioni</p>}
              </button>
            );
          })}
        </div>
      </section>
    </div>
  );
}
