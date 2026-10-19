"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import { BarChart3, BookOpen, Brain, CalendarDays, Ear, Flame, Gauge, GraduationCap, Languages, Library, Medal, Mic, PenLine, Sparkles, Target, Trophy, Volume2, Zap } from "lucide-react";
import { useLms } from "@/lib/lms/store";
import { dueCards, learningCount, masteredCount } from "@/lib/lms/srs";
import { weakTopics } from "@/lib/lms/adaptive";
import type { SkillStats } from "@/lib/lms/types";
import { useUi } from "@/lib/lms/ui";
import { cn } from "@/lib/utils";

/* ── Vista: Statistiche (v8.0) · dashboard analítico ────────────────
   Todo con los datos que YA se registran (studyDays, quizHistory,
   skillStats, SRS, errorLog): gráficos 100% CSS, sin librerías.       */

const DAY_MS = 86400000;

function skillStatsOf(): SkillStats {
  return { ascolto: 0, lettura: 0, scrittura: 0, parlato: 0, pronuncia: 0, grammatica: 0, vocabolario: 0 };
}

export function StatisticheView() {
  const u = useUi();
  const xp = useLms((s) => s.xp);
  const weekXp = useLms((s) => s.weekXp);
  const streak = useLms((s) => s.streakCount);
  const freezes = useLms((s) => s.streakFreezes);
  const studyDays = useLms((s) => s.studyDays);
  const quizHistory = useLms((s) => s.quizHistory);
  const skillStats = useLms((s) => s.skillStats);
  const srs = useLms((s) => s.srs);
  const errorLog = useLms((s) => s.errorLog);
  const completedLessons = useLms((s) => s.completedLessons);
  const certificates = useLms((s) => s.certificates);
  const writingHistory = useLms((s) => s.writingHistory);
  const dailyGoal = useLms((s) => s.settings.dailyGoalXp);
  const navigate = useLms((s) => s.navigate);
  const activeLang = useLms((s) => s.activeLang);

  const SKILLS: { key: keyof SkillStats; label: string; icon: typeof Ear }[] = [
    { key: "ascolto", label: u.progress.skills.ascolto, icon: Ear },
    { key: "lettura", label: u.progress.skills.lettura, icon: BookOpen },
    { key: "scrittura", label: u.progress.skills.scrittura, icon: PenLine },
    { key: "parlato", label: u.progress.skills.parlato, icon: Languages },
    { key: "pronuncia", label: u.progress.skills.pronuncia, icon: Volume2 },
    { key: "grammatica", label: u.progress.skills.grammatica, icon: Brain },
    { key: "vocabolario", label: u.progress.skills.vocabolario, icon: Library },
  ];

  /* mapa fecha → xp */
  const xpByDate = useMemo(() => {
    const m = new Map<string, number>();
    for (const d of studyDays) m.set(d.date, d.xp);
    return m;
  }, [studyDays]);

  const todayStr = new Date().toISOString().slice(0, 10);

  /* últimas 4 semanas para el calendario */
  const calendar = useMemo(() => {
    const cells: { date: string; xp: number; future: boolean }[] = [];
    const today = new Date();
    for (let i = 27; i >= 0; i--) {
      const d = new Date(today.getTime() - i * DAY_MS);
      const ds = d.toISOString().slice(0, 10);
      cells.push({ date: ds, xp: xpByDate.get(ds) ?? 0, future: false });
    }
    return cells; // 28 celdas: 4 filas × 7 columnas
  }, [xpByDate]);

  /* barras: últimos 14 días */
  const bars = useMemo(() => {
    const out: { date: string; label: string; xp: number }[] = [];
    const today = new Date();
    for (let i = 13; i >= 0; i--) {
      const d = new Date(today.getTime() - i * DAY_MS);
      const ds = d.toISOString().slice(0, 10);
      out.push({ date: ds, label: `${d.getDate()}/${d.getMonth() + 1}`, xp: xpByDate.get(ds) ?? 0 });
    }
    return out;
  }, [xpByDate]);
  const maxBar = Math.max(dailyGoal, ...bars.map((b) => b.xp), 1);

  /* KPIs */
  const last7 = bars.slice(-7);
  const avg7 = Math.round(last7.reduce((a, b) => a + b.xp, 0) / 7);
  const bestDay = useMemo(() => studyDays.reduce((best, d) => (d.xp > (best?.xp ?? 0) ? d : best), studyDays[0]), [studyDays]);
  const activeDays30 = calendar.filter((c) => c.xp > 0).length;

  /* quizzes */
  const quizTotals = useMemo(() => {
    if (quizHistory.length === 0) return { count: 0, acc: 0, byLabel: [] as { label: string; plays: number; acc: number }[] };
    const totalCorrect = quizHistory.reduce((a, q) => a + q.score, 0);
    const totalItems = quizHistory.reduce((a, q) => a + q.total, 0);
    const map = new Map<string, { plays: number; correct: number; total: number }>();
    for (const q of quizHistory) {
      const e = map.get(q.label) ?? { plays: 0, correct: 0, total: 0 };
      e.plays += 1; e.correct += q.score; e.total += q.total;
      map.set(q.label, e);
    }
    const byLabel = [...map.entries()]
      .map(([label, e]) => ({ label, plays: e.plays, acc: Math.round((e.correct / Math.max(1, e.total)) * 100) }))
      .sort((a, b) => b.plays - a.plays || b.acc - a.acc)
      .slice(0, 5);
    return { count: quizHistory.length, acc: Math.round((totalCorrect / Math.max(1, totalItems)) * 100), byLabel };
  }, [quizHistory]);

  /* SRS */
  const due = useMemo(() => dueCards(srs), [srs]);
  const learning = learningCount(srs);
  const mastered = masteredCount(srs);
  const totalCards = Object.keys(srs).length;
  const fresh = Math.max(0, totalCards - learning - mastered);

  const weaknesses = useMemo(() => weakTopics(errorLog, 3), [errorLog]);

  const goalHits = bars.filter((b) => b.xp >= dailyGoal).length;

  const heat = (v: number) =>
    v <= 0 ? "bg-inchiostro/[0.06] dark:bg-inchiostro/10"
    : v < dailyGoal / 2 ? "bg-verde/25 dark:bg-verde/30"
    : v < dailyGoal ? "bg-verde/50 dark:bg-verde/50"
    : v < dailyGoal * 2 ? "bg-verde/75 dark:bg-verde/70"
    : "bg-verde dark:bg-verde";

  return (
    <div className="space-y-6">
      {/* ── KPIs ── */}
      <section className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        {[
          { label: u.stats.kpis.xp, value: xp, sub: u.stats.kpis.week(weekXp), icon: Zap, tone: "oro" },
          { label: u.stats.kpis.avg, value: avg7, sub: u.stats.kpis.goalDay(dailyGoal), icon: Gauge, tone: "verde" },
          { label: u.stats.kpis.streak, value: u.stats.kpis.streakUnit(streak), sub: freezes > 0 ? u.stats.kpis.freezes(freezes) : u.stats.kpis.noFreeze, icon: Flame, tone: "rosso" },
          { label: u.stats.kpis.quizAcc, value: quizTotals.count ? `${quizTotals.acc}%` : "—", sub: u.stats.kpis.plays(quizTotals.count), icon: Target, tone: "verde" },
        ].map((k, i) => (
          <motion.div
            key={k.label}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="rounded-3xl border border-soft bg-surface p-4"
          >
            <div className="flex items-center justify-between">
              <p className="text-[10px] font-bold uppercase tracking-widest text-muted-it">{k.label}</p>
              <k.icon className={cn("h-4 w-4", k.tone === "oro" && "text-oro-scuro dark:text-oro", k.tone === "verde" && "text-verde", k.tone === "rosso" && "text-rosso")} aria-hidden="true" />
            </div>
            <p className="mt-1.5 font-display text-3xl font-bold tabular-nums">{k.value}</p>
            <p className="mt-0.5 text-[11px] text-muted-it">{k.sub}</p>
          </motion.div>
        ))}
      </section>

      {/* ── barras XP 14 días + calendario ── */}
      <section className="grid gap-4 lg:grid-cols-5">
        <div className="rounded-3xl border border-soft bg-surface p-6 lg:col-span-3">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="flex items-center gap-2 font-display text-lg font-semibold"><BarChart3 className="h-4 w-4 text-verde" aria-hidden="true" /> {u.stats.barsTitle}</h2>
            <span className="rounded-full bg-verde-tenue px-2.5 py-1 text-[10px] font-bold text-verde-scuro dark:text-verde">{u.stats.goalHits(goalHits)}</span>
          </div>
          <div className="flex h-40 items-end gap-1" role="img" aria-label={u.stats.barsAria}>
            {bars.map((b) => (
              <div key={b.date} className="group relative flex h-full flex-1 flex-col justify-end">
                <div
                  className={cn("w-full rounded-t-md transition-all", b.xp >= dailyGoal ? "bg-verde" : b.xp > 0 ? "bg-verde/45 dark:bg-verde/50" : "bg-inchiostro/[0.07] dark:bg-inchiostro/10")}
                  style={{ height: `${Math.max(4, (b.xp / maxBar) * 100)}%` }}
                />
                <span className="pointer-events-none absolute -top-7 left-1/2 z-10 hidden -translate-x-1/2 whitespace-nowrap rounded-lg bg-inchiostro px-2 py-1 text-[10px] font-bold text-crema group-hover:block">
                  {b.label} · {b.xp} XP
                </span>
              </div>
            ))}
          </div>
          <div className="mt-1.5 flex justify-between text-[10px] text-muted-it">
            <span>{bars[0]?.label}</span><span>{bars[13]?.label} {u.stats.today}</span>
          </div>
        </div>

        <div className="rounded-3xl border border-soft bg-surface p-6 lg:col-span-2">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="flex items-center gap-2 font-display text-lg font-semibold"><CalendarDays className="h-4 w-4 text-verde" aria-hidden="true" /> {u.stats.calTitle}</h2>
          </div>
          <div className="grid grid-cols-7 gap-1.5" role="img" aria-label={u.stats.calAria}>
            {u.stats.dow.map((d, i) => (
              <span key={i} className="text-center text-[9px] font-bold text-muted-it">{d}</span>
            ))}
            {calendar.map((c) => (
              <span
                key={c.date}
                title={`${c.date}: ${c.xp} XP`}
                className={cn("aspect-square rounded-md transition-transform hover:scale-110", heat(c.xp), c.date === todayStr && "ring-2 ring-oro ring-offset-1 ring-offset-surface")}
              />
            ))}
          </div>
          <p className="mt-3 text-[11px] text-muted-it">
            {u.stats.activeDays(activeDays30)} {bestDay ? u.stats.recordLine(bestDay.xp, bestDay.date) : ""}
          </p>
        </div>
      </section>

      {/* ── memoria SRS + destrezas ── */}
      <section className="grid gap-4 lg:grid-cols-2">
        <div className="rounded-3xl border border-soft bg-surface p-6">
          <h2 className="font-display text-lg font-semibold">{u.stats.srsTitle}</h2>
          {totalCards === 0 ? (
            <div className="mt-4 rounded-2xl bg-crema-scura p-4 text-sm text-muted-it dark:bg-inchiostro/10">
              {u.stats.srsEmptyA}
              {/* v9.19: vocabolario es solo-italiano; en EN el primer destino es el importador */}
              <button onClick={() => navigate(activeLang === "it" ? "vocabolario" : "importatore")} className="font-bold text-verde underline">{u.stats.srsEmptyVocab}</button>
              {u.stats.srsEmptyMid}
              <button onClick={() => navigate("dizionario")} className="font-bold text-verde underline">{u.stats.srsEmptyDict}</button>
              {u.stats.srsEmptyPost}
            </div>
          ) : (
            <>
              <div className="mt-4 flex h-4 overflow-hidden rounded-full" role="img" aria-label={u.stats.srsAria}>
                <span className="bg-rosso/70" style={{ width: `${(due.length / totalCards) * 100}%` }} title={`${u.stats.srsLabels.due}: ${due.length}`} />
                <span className="bg-oro/80" style={{ width: `${(fresh / totalCards) * 100}%` }} title={`${u.stats.srsLabels.fresh}: ${fresh}`} />
                <span className="bg-verde/60" style={{ width: `${(learning / totalCards) * 100}%` }} title={`${u.stats.srsLabels.learning}: ${learning}`} />
                <span className="bg-verde" style={{ width: `${(mastered / totalCards) * 100}%` }} title={`${u.stats.srsLabels.mastered}: ${mastered}`} />
              </div>
              <div className="mt-4 grid grid-cols-2 gap-2 text-sm sm:grid-cols-4">
                {[
                  { v: due.length, l: u.stats.srsLabels.due, c: "text-rosso-scuro dark:text-rosso" },
                  { v: fresh, l: u.stats.srsLabels.fresh, c: "text-oro-scuro dark:text-oro" },
                  { v: learning, l: u.stats.srsLabels.learning, c: "text-verde-scuro dark:text-verde" },
                  { v: mastered, l: u.stats.srsLabels.mastered, c: "text-verde-scuro dark:text-verde" },
                ].map((s) => (
                  <div key={s.l} className="rounded-2xl bg-crema-scura p-3 text-center dark:bg-inchiostro/10">
                    <p className={cn("font-display text-xl font-bold tabular-nums", s.c)}>{s.v}</p>
                    <p className="text-[10px] font-semibold text-muted-it">{s.l}</p>
                  </div>
                ))}
              </div>
              {/* v9.19: repaso es vista solo-italiana; CTA solo en IT */}
              {activeLang === "it" && (
                <button onClick={() => navigate("repaso")} className="mt-4 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-2xl bg-verde px-4 py-2.5 text-sm font-bold text-white shadow-md shadow-verde/25 transition-all hover:bg-verde-scuro dark:text-inchiostro">
                  {u.stats.reviewNow(due.length)}
                </button>
              )}
            </>
          )}
        </div>

        <div className="rounded-3xl border border-soft bg-surface p-6">
          <h2 className="font-display text-lg font-semibold">{u.stats.skillsTitle}</h2>
          <div className="mt-4 space-y-2.5">
            {SKILLS.map(({ key, label, icon: Icon }) => {
              const v = skillStats[key] ?? 0;
              return (
                <div key={key} className="flex items-center gap-3">
                  <Icon className="h-4 w-4 shrink-0 text-inchiostro/45" aria-hidden="true" />
                  <span className="w-24 shrink-0 text-xs font-bold">{label}</span>
                  <div className="h-3 flex-1 overflow-hidden rounded-full bg-inchiostro/[0.07] dark:bg-inchiostro/15">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${v}%` }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                      className={cn("h-full rounded-full", v >= 66 ? "bg-verde" : v >= 33 ? "bg-oro" : "bg-rosso/70")}
                    />
                  </div>
                  <span className="w-8 text-right text-xs font-bold tabular-nums text-muted-it">{v}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── rendimiento por juego + puntos débiles ── */}
      <section className="grid gap-4 lg:grid-cols-2">
        <div className="rounded-3xl border border-soft bg-surface p-6">
          <h2 className="flex items-center gap-2 font-display text-lg font-semibold"><Sparkles className="h-4 w-4 text-oro-scuro dark:text-oro" aria-hidden="true" /> {u.stats.gamesTitle}</h2>
          {quizTotals.byLabel.length === 0 ? (
            <p className="mt-4 text-sm text-muted-it">{u.stats.gamesEmpty}</p>
          ) : (
            <ul className="mt-4 space-y-2.5">
              {quizTotals.byLabel.map((g) => (
                <li key={g.label} className="flex items-center gap-3">
                  <span className="w-40 shrink-0 truncate text-xs font-bold" title={g.label}>{g.label}</span>
                  <div className="h-2.5 flex-1 overflow-hidden rounded-full bg-inchiostro/[0.07] dark:bg-inchiostro/15">
                    <div className={cn("h-full rounded-full", g.acc >= 70 ? "bg-verde" : g.acc >= 45 ? "bg-oro" : "bg-rosso/70")} style={{ width: `${g.acc}%` }} />
                  </div>
                  <span className="w-20 shrink-0 text-right text-[11px] font-bold tabular-nums text-muted-it">{g.plays}× · {g.acc}%</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="rounded-3xl border border-soft bg-surface p-6">
          <h2 className="flex items-center gap-2 font-display text-lg font-semibold"><Target className="h-4 w-4 text-rosso" aria-hidden="true" /> {u.stats.weakTitle}</h2>
          {weaknesses.length === 0 ? (
            <p className="mt-4 text-sm text-muted-it">{u.stats.weakEmpty}</p>
          ) : (
            <ul className="mt-4 space-y-2">
              {weaknesses.map((w) => (
                <li key={w.topic} className="flex items-center justify-between gap-3 rounded-2xl bg-crema-scura px-4 py-3 dark:bg-inchiostro/10">
                  <span className="text-sm font-bold">{u.data.topics[w.topic] ?? w.topic}</span>
                  <span className="text-xs font-bold tabular-nums text-rosso-scuro dark:text-rosso">{u.stats.weakErrors(Math.round(100 - w.accuracy))}</span>
                </li>
              ))}
            </ul>
          )}
          {/* v9.19: repaso es vista solo-italiana; CTA solo en IT */}
          {activeLang === "it" && (
            <button onClick={() => navigate("repaso")} className="mt-4 inline-flex min-h-11 items-center gap-2 rounded-2xl border-2 border-verde/40 px-4 py-2.5 text-sm font-bold text-verde-scuro transition-colors hover:bg-verde-tenue dark:text-verde">
              {u.stats.targeted}
            </button>
          )}
        </div>
      </section>

      {/* ── récord ── */}
      <section className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
        {[
          { label: u.stats.records.lessons, value: completedLessons.length, icon: GraduationCap },
          { label: u.stats.records.diplomas, value: certificates.length, icon: Trophy },
          { label: u.stats.records.writings, value: writingHistory.length, icon: PenLine },
          { label: u.stats.records.srsWords, value: totalCards, icon: Library },
          { label: u.stats.records.recordXp, value: bestDay?.xp ?? 0, icon: Medal },
          { label: u.stats.records.activeDays, value: activeDays30, icon: CalendarDays },
        ].map((r, i) => (
          <motion.div key={r.label} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.04 }} className="rounded-3xl border border-soft bg-surface p-4 text-center">
            <r.icon className="mx-auto h-5 w-5 text-verde" aria-hidden="true" />
            <p className="mt-1.5 font-display text-2xl font-bold tabular-nums">{r.value}</p>
            <p className="text-[10px] font-bold uppercase tracking-wide text-muted-it">{r.label}</p>
          </motion.div>
        ))}
      </section>

      <p className="text-center text-[11px] text-muted-it">
        <Mic className="mr-1 inline h-3 w-3" aria-hidden="true" />
        {u.stats.privacyNote}
      </p>
    </div>
  );
}
