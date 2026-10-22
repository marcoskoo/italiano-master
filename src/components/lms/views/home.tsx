"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { AlertTriangle, ArrowRight, BookOpen, Coins, Compass, Dices, Ear, FileSpreadsheet, Flame, GraduationCap, Keyboard, Library, Pencil, Quote, RefreshCcw, Sparkles, Bot, Target, Timer, Trophy, Volume2, Wand2, Zap } from "lucide-react";
import { MorphingHero } from "@/components/italian/morphing-hero";
import { useLms, rankFor } from "@/lib/lms/store";
import { VOCAB, VOCAB_BY_ID } from "@/lib/lms/vocabulary";
import { pickDaily, weakTopics, TOPIC_LABELS } from "@/lib/lms/adaptive";
import { CAMBRIDGE } from "@/lib/lms/cambridge";
import { langContent } from "@/lib/lms/lang";
import { LANGS, SHIPPED_LEVELS } from "@/lib/lms/languages";
import type { LangCode } from "@/lib/lms/types";
import { dueCards } from "@/lib/lms/srs";
import { CEFR_LEVELS, LEVEL_LABELS } from "@/lib/lms/types";
import { PLANS, levelAllowed, requiredPlanForLevel, generateWeeklyPlan, planLimits } from "@/lib/lms/plans";
import { QUEST_DEFS, ALL_QUESTS_BONUS_XP } from "@/lib/lms/quests";
import { useUi } from "@/lib/lms/ui";
import { viewSupportsLang } from "@/lib/lms/nav";
import { dictListFor } from "@/lib/lms/dict/active";
import { InstallButton } from "../pwa";
import { PremiumBanner } from "../plan-badge";
import { AudioButton } from "../audio-button";
import { cn } from "@/lib/utils";
import type { ViewId } from "@/lib/lms/types";

/* ── Vista: Inicio ────────────────────────────────────────────────── */

const QUICK: { id: ViewId; label: string; it: string; icon: typeof Ear; desc: string }[] = [
  { id: "cursos", label: "Cursos", it: "corsi", icon: GraduationCap, desc: "66 unidades comunicativas A1→C2 (método Cambridge)" },
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
  const activeLang = (useLms((s) => s.activeLang) ?? "it") as LangCode;
  const CAMB = langContent(activeLang)?.courses ?? CAMBRIDGE;
  const placementDone = useLms((s) => s.placementDone);
  const streak = useLms((s) => s.streakCount);
  const streakFreezes = useLms((s) => s.streakFreezes);
  const lastFreezeDate = useLms((s) => s.lastFreezeDate);
  const srs = useLms((s) => s.srs);
  const cambridgeProgress = useLms((s) => s.cambridgeProgress);
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
  /* v9.8.2: saludo personalizado editable desde Inicio — antes el nombre solo
     se podía poner en Configuración y el saludo nunca lo pedía. */
  const setUserName = useLms((s) => s.setUserName);
  const addXp = useLms((s) => s.addXp);
  const [editingName, setEditingName] = useState(false);
  const [nameDraft, setNameDraft] = useState("");
  const [nameJustSaved, setNameJustSaved] = useState(false);

  const saveName = (e: React.FormEvent) => {
    e.preventDefault();
    const n = nameDraft.trim();
    if (!n) return;
    setUserName(n);
    addXp(1);
    setEditingName(false);
    setNameJustSaved(true);
    window.setTimeout(() => setNameJustSaved(false), 2600);
  };

  useEffect(() => { ensureDailyQuests(); }, [ensureDailyQuests]);

  const rank = rankFor(xp);
  /* v9.18 · UI en la lengua de estudio activa */
  const u = useUi();
  const due = dueCards(srs).length;
  /* v9.18→v9.24 · palabra del día del diccionario de la lengua activa
     (despacho central: en/pt/fr/de; it conserva VOCAB histórico) */
  const DAILY_SOURCE = activeLang === "it" ? VOCAB : dictListFor(activeLang);
  const wordOfDay = useMemo(() => pickDaily(DAILY_SOURCE), [DAILY_SOURCE]);
  const weaknesses = useMemo(() => weakTopics(errorLog, 3), [errorLog]);
  const showWeekly = planLimits(plan).weeklyPlan && (remoteConfig?.features.weeklyPlan ?? true);
  const weeklyPlan = useMemo(
    () => generateWeeklyPlan(
      level,
      due,
      /* v9.27 · etiquetas de tema en la lengua activa (it → histórico ES) */
      weaknesses.map((wk) => u.data.topics[wk.topic] ?? TOPIC_LABELS[wk.topic] ?? wk.topic),
      u.weekly
    ),
    [level, due, weaknesses, u]
  );
  /* v9.8.1: "Continúa" apunta al curso comunicativo (metodologia Cambridge), no al
     curso gramatical clásico. Primera unidad no completada desde el nivel del usuario;
     si el nivel está completo, salta al siguiente. Sin memo: recorrido barato. */
  const nextUnit = (() => {
    const start = CAMB.findIndex((l) => l.level === (level ?? "A1"));
    if (start < 0) return undefined;
    for (let i = start; i < CAMB.length; i++) {
      const l = CAMB[i];
      const u = l.units.find((unit) => !cambridgeProgress[unit.id]?.done);
      if (u) return u;
    }
    return undefined;
  })();
  /* v9.8.1: saludo sin nombre → "Ciao!" en vez del marcador "Studente" crudo. */
  const firstName = userName && userName !== "Studente" ? userName.split(" ")[0].trim() : "";

  const missionPct = Math.min(100, Math.round((dailyXp / Math.max(1, goal)) * 100));

  return (
    <div className="space-y-10">
      {/* ── HERO ── */}
      <section className="grid items-center gap-8 lg:grid-cols-[1.15fr_1fr]">
        <div>
          {/* v9.33 · Pappagallo, la mascota de Políglota Master */}
          <img src="/mascot/hello.webp" alt="" aria-hidden="true" loading="lazy" className="mb-4 h-28 w-28 rounded-[2rem] bg-crema object-cover shadow-sm sm:h-32 sm:w-32" />
          <p className="inline-flex items-center gap-2 rounded-full border border-verde/30 bg-verde-tenue px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-verde-scuro dark:text-verde">
            <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
            {u.home.heroChip}
          </p>
          {/* v9.40 · divulgación permanente: la app fue construida con IA */}
          <button
            type="button"
            onClick={() => navigate("legal")}
            title="Construida con IA · transparencia y detalles en Privacidad y legal"
            className="mt-2.5 inline-flex items-center gap-1.5 rounded-full border border-viola/30 bg-viola-tenue/60 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-viola-scuro transition-colors hover:bg-viola-tenue dark:bg-viola-tenue/25 dark:text-viola"
          >
            <Bot className="h-3 w-3" aria-hidden="true" /> App construida con IA
          </button>
          {/* v9.8.2: saludo con nombre editable en línea (lápiz si ya hay nombre,
              "Come ti chiami?" si es invitado sin nombre). */}
          {editingName ? (
            <form onSubmit={saveName} className="mt-5 flex max-w-lg flex-wrap items-center gap-2.5">
              <span className="font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">{u.home.greetWord}</span>
              <input
                autoFocus
                value={nameDraft}
                onChange={(e) => setNameDraft(e.target.value)}
                maxLength={40}
                enterKeyHint="done"
                placeholder={u.home.namePh}
                aria-label={u.home.nameAria}
                className="min-h-12 w-40 flex-1 rounded-2xl border-2 border-verde/40 bg-surface px-4 font-display text-2xl font-semibold tracking-tight outline-none transition-colors focus:border-verde sm:w-52"
              />
              <button
                type="submit"
                disabled={!nameDraft.trim()}
                className="inline-flex min-h-12 items-center gap-1.5 rounded-2xl bg-verde px-5 py-3 text-sm font-bold text-white shadow-md shadow-verde/25 transition-all hover:scale-[1.03] hover:bg-verde-scuro active:scale-95 disabled:opacity-50"
              >
                {u.home.save}
              </button>
              <button
                type="button"
                onClick={() => setEditingName(false)}
                className="inline-flex min-h-12 items-center rounded-2xl border-2 border-soft px-4 py-3 text-sm font-bold text-muted-it transition-colors hover:border-rosso/40 hover:text-rosso"
                aria-label={u.home.cancel}
              >
                ✕
              </button>
            </form>
          ) : (
            <h1 className="mt-5 font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              {u.home.greetWord}{firstName ? ` ${firstName}` : "!"}
              {firstName && activeTitle ? <span className="ml-2 align-middle text-base font-bold text-terracotta dark:text-verde">{TITLE_EMOJIS[activeTitle] ?? ""} {TITLES_SHORT[activeTitle] ?? ""}</span> : null}{firstName ? "," : ""}{" "}
              <span className="italic text-verde-scuro dark:text-verde">{u.home.greetTail}</span>
              {firstName && (
                <button
                  onClick={() => { setNameDraft(firstName); setEditingName(true); }}
                  className="ml-2 inline-flex h-9 w-9 items-center justify-center rounded-xl border border-soft align-middle text-muted-it transition-colors hover:border-verde/40 hover:text-verde-scuro dark:hover:text-verde"
                  aria-label={u.home.changeName}
                  title={u.home.changeName}
                >
                  <Pencil className="h-4 w-4" aria-hidden="true" />
                </button>
              )}
            </h1>
          )}
          {!editingName && !firstName && (
            <button
              onClick={() => { setNameDraft(""); setEditingName(true); }}
              className="mt-4 inline-flex min-h-11 items-center gap-2 rounded-2xl border-2 border-dashed border-verde/40 bg-verde-tenue/60 px-5 py-2.5 text-sm font-bold text-verde-scuro transition-all hover:border-verde hover:bg-verde-tenue active:scale-95 dark:text-verde"
            >
              <Pencil className="h-4 w-4" aria-hidden="true" /> {u.home.askName}
            </button>
          )}
          {nameJustSaved && (
            <p className="mt-3 inline-flex items-center gap-2 rounded-2xl bg-verde-tenue px-4 py-2 text-sm font-bold text-verde-scuro dark:text-verde" role="status">
              {u.home.nameSaved(firstName)}
            </p>
          )}
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-it sm:text-lg">
            {u.home.heroDescA}{" "}
            <span className="font-display italic text-inchiostro">{u.home.heroDescB}</span>
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            {/* v9.18 · el test de ubicación es del curso italiano: en otras lenguas se ofrece el curso directo */}
            {!placementDone && activeLang === "it" ? (
              <button onClick={() => navigate("test")} className="inline-flex min-h-12 items-center gap-2 rounded-2xl bg-verde px-6 py-3 font-bold text-white shadow-lg shadow-verde/25 transition-all hover:scale-[1.03] hover:bg-verde-scuro active:scale-95">
                <Compass className="h-4 w-4" aria-hidden="true" /> {u.home.testCta}
              </button>
            ) : (
              <button onClick={() => (nextUnit ? navigate("cursos", { level: nextUnit.level, unitId: nextUnit.id }) : navigate("cursos", { level: level ?? "A1" }))} className="inline-flex min-h-12 items-center gap-2 rounded-2xl bg-verde px-6 py-3 font-bold text-white shadow-lg shadow-verde/25 transition-all hover:scale-[1.03] hover:bg-verde-scuro active:scale-95">
                <GraduationCap className="h-4 w-4" aria-hidden="true" />
                {nextUnit ? u.home.continueCta(nextUnit.title) : u.home.exploreCta}
              </button>
            )}
            {activeLang === "it" && (
              <button onClick={() => navigate("tutor")} className="inline-flex min-h-12 items-center gap-2 rounded-2xl border-2 border-inchiostro/15 bg-surface px-6 py-3 font-bold transition-all hover:border-verde/40 active:scale-95">
                <Sparkles className="h-4 w-4 text-verde" aria-hidden="true" /> {u.home.tutorCta}
              </button>
            )}
          </div>

          <dl className="mt-9 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {([
              { label: u.home.xpTotal, value: xp.toLocaleString(), icon: Zap, tone: "oro" },
              { label: streakFreezes > 0 ? u.home.streakF(streakFreezes) : u.home.streak, value: `${streak} d`, icon: Flame, tone: "rosso" },
              { label: lastWheelDate === new Date().toISOString().slice(0, 10) ? u.home.coins : u.home.coinsSpin, value: coins.toLocaleString(), icon: Coins, tone: "oro", to: "premi" as const },
              { label: u.home.cards, value: String(Object.keys(srs).length), icon: Library, tone: "terracotta" },
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
              ❄️ {u.home.freezeNote(streakFreezes)}
            </p>
          )}
        </div>
        {activeLang === "it" && (
          <div className="relative">
            <MorphingHero />
          </div>
        )}
      </section>

      {/* ── BANNER PREMIUM (solo FREE) ── */}
      {plan === "free" && <PremiumBanner />}

      {/* ── PLAN SEMANAL (PREMIUM+) ── */}
      {showWeekly && (
        <section className="rounded-3xl border border-soft bg-surface p-6">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <h2 className="flex items-center gap-2 font-display text-2xl font-semibold">
                <span aria-hidden="true">🗓️</span> {u.weekly.title} <span className="rounded-full plan-gold-bg px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-white">{PLANS[plan].name}</span>
              </h2>
              <p className="mt-1.5 max-w-2xl text-sm leading-relaxed text-muted-it">
                {u.weekly.subtitle(level ?? "A1", due)}
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
              <Target className="h-5 w-5 text-rosso" aria-hidden="true" /> {u.home.missionTitle}
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
                      <span aria-hidden="true">{def?.emoji ?? "🎯"}</span> {u.questLabels[q.type] ? u.questLabels[q.type](q.target) : (def?.label(q.target) ?? q.type)}
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
              🎉 {u.home.missionsDone(ALL_QUESTS_BONUS_XP)}
            </p>
          ) : (
            <p className="mt-3 text-center text-[11px] text-muted-it">
              {u.home.missionsHint(ALL_QUESTS_BONUS_XP)}
            </p>
          )}
          {missionPct >= 100 && (
            <p className="mt-3 rounded-xl bg-verde-tenue px-4 py-2.5 text-center text-sm font-bold text-verde-scuro dark:text-verde">
              🏁 {u.home.dailyGoalDone}
            </p>
          )}
        </motion.div>

        {wordOfDay && (
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 }} className="rounded-3xl border border-soft bg-gradient-to-br from-verde-tenue to-surface p-6 dark:from-verde-tenue/40">
            <div className="flex items-center justify-between">
              <h2 className="flex items-center gap-2 font-display text-xl font-semibold">
                <Volume2 className="h-5 w-5 text-verde" aria-hidden="true" /> {u.home.wordOfDay}
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

      {/* ── DEBILIDADES (motor adaptativo · curso italiano) ── */}
      {weaknesses.length > 0 && activeLang === "it" && (
        <section className="rounded-3xl border border-oro/30 bg-oro-tenue/60 p-6">
          <h2 className="flex items-center gap-2 font-display text-xl font-semibold">
            <Trophy className="h-5 w-5 text-oro-scuro dark:text-oro" aria-hidden="true" /> {u.home.weakTitle}
          </h2>
          <p className="mt-1.5 text-sm text-muted-it">
            {u.home.weakDesc}
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
        <h2 className="font-display text-2xl font-semibold">{u.home.exploreTitle}</h2>
        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {QUICK.filter((q) => viewSupportsLang(q.id, activeLang)).map((q, i) => {
            const qd = u.home.quick[q.id] ?? { label: q.label, tag: q.it, desc: q.desc };
            return (
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
                {qd.label} <span className="ml-1 font-mono text-[10px] font-normal uppercase text-muted-it">{qd.tag}</span>
              </p>
              <p className="mt-1 text-sm leading-relaxed text-muted-it">{qd.desc}</p>
            </motion.button>
            );
          })}
        </div>
      </section>

      {/* ── PLUGIN · ESTENSIONI (solo curso italiano) ── */}
      {activeLang === "it" && (
      <section>
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h2 className="font-display text-2xl font-semibold">{u.home.pluginsTitle}</h2>
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-it">v5.0 · 8 strumenti</p>
        </div>
        <p className="mt-1.5 text-sm text-muted-it">{u.home.pluginsNote}</p>
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
      )}

      {/* ── NIVELES ── */}
      <section>
        <h2 className="font-display text-2xl font-semibold">{u.home.levelsTitle}</h2>
        <p className="mt-1.5 text-sm text-muted-it">{u.home.levelsDesc(CAMB.reduce((n, l) => n + l.units.length, 0))}</p>
        <div className="mt-5 grid gap-2.5 sm:grid-cols-3 lg:grid-cols-6">
          {activeLang === "it" && (
          <button
            onClick={() => navigate("cursos", { level: "zero" })}
            className="rounded-2xl border-2 border-dashed border-terracotta/40 bg-rosso-tenue/50 p-4 text-left transition-all hover:-translate-y-0.5 hover:border-terracotta"
          >
            <p className="font-display text-2xl font-bold text-terracotta">{u.home.fromZero}</p>
            <p className="mt-1 text-xs text-muted-it">{u.home.fromZeroDesc}</p>
          </button>
          )}
          {CEFR_LEVELS.map((lv) => {
            const levelOff = !(remoteConfig?.levels?.[lv] ?? true);
            if (levelOff) {
              return (
                <button key={lv} disabled className="cursor-not-allowed rounded-2xl border-2 border-dashed border-soft bg-inchiostro/5 p-4 text-left opacity-60">
                  <p className="font-display text-2xl font-bold text-muted-it">{lv}</p>
                  <p className="mt-1 text-xs text-muted-it">{u.home.levelOff}</p>
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
                <p className="mt-1 text-xs text-muted-it">{locked ? u.home.unlockWith(required.name) : u.home.levelLabels[lv]}</p>
                {!locked && <p className="mt-2 font-mono text-[10px] text-muted-it">{u.home.commUnits(CAMB.find((l) => l.level === lv)?.units.length ?? 0)}</p>}
              </button>
            );
          })}
        </div>
      </section>
    </div>
  );
}
