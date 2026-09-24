"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from "recharts";
import { Award, BookOpen, Calendar, Flame, Library, Sparkles, TrendingUp, Trophy, Zap } from "lucide-react";
import { useLms, BADGES, rankFor, nextRank } from "@/lib/lms/store";
import { masteredCount, learningCount, dueCards } from "@/lib/lms/srs";
import { weakTopics, topicStats, TOPIC_LABELS } from "@/lib/lms/adaptive";
import { COURSES, totalLessons } from "@/lib/lms/courses";
import { PLANS, planLimits } from "@/lib/lms/plans";
import { LockedFeatureCard } from "../plan-badge";
import { cn } from "@/lib/utils";

/* ── Vista: Mi progreso ───────────────────────────────────────────── */

const SKILL_LABELS: Record<string, string> = {
  ascolto: "Escucha", lettura: "Lectura", scrittura: "Escritura", parlato: "Conversación",
  pronuncia: "Pronunciación", grammatica: "Gramática", vocabolario: "Vocabulario",
};

export function ProgressView() {
  const xp = useLms((s) => s.xp);
  const level = useLms((s) => s.level);
  const streak = useLms((s) => s.streakCount);
  const studyDays = useLms((s) => s.studyDays);
  const skillStats = useLms((s) => s.skillStats);
  const srs = useLms((s) => s.srs);
  const errorLog = useLms((s) => s.errorLog);
  const completedLessons = useLms((s) => s.completedLessons);
  const quizHistory = useLms((s) => s.quizHistory);
  const certificates = useLms((s) => s.certificates);
  const navigate = useLms((s) => s.navigate);
  const dailyXp = useLms((s) => s.dailyXp);
  const goal = useLms((s) => s.settings.dailyGoalXp);
  const plan = useLms((s) => s.plan);
  const advanced = planLimits(plan).advancedAnalytics;

  const rank = rankFor(xp);
  const next = nextRank(xp);
  const due = dueCards(srs).length;
  const mastered = masteredCount(srs);
  const learning = learningCount(srs);
  const allLessons = useMemo(() => totalLessons(), []);
  const weaknesses = useMemo(() => weakTopics(errorLog, 4), [errorLog]);
  const allStats = useMemo(() => topicStats(errorLog), [errorLog]);
  const snapshot = useLms.getState();
  const earnedCount = useMemo(() => BADGES.filter((b) => b.test(snapshot, 0)).length, [snapshot]);

  const radarData = Object.entries(skillStats).map(([k, v]) => ({ skill: SKILL_LABELS[k] ?? k, value: Math.max(4, v) }));

  // últimos 14 días
  const days14 = useMemo(() => {
    const arr: { date: string; xp: number; label: string }[] = [];
    for (let i = 13; i >= 0; i--) {
      const d = new Date(Date.now() - i * 86400000);
      const iso = d.toISOString().slice(0, 10);
      const found = studyDays.find((s) => s.date === iso);
      arr.push({ date: iso, xp: found?.xp ?? 0, label: d.toLocaleDateString("es", { weekday: "narrow" }) });
    }
    return arr;
  }, [studyDays]);

  const avgAccuracy = useMemo(() => {
    if (quizHistory.length === 0) return 0;
    const tot = quizHistory.reduce((a, q) => a + q.total, 0);
    const cor = quizHistory.reduce((a, q) => a + q.score, 0);
    return tot ? Math.round((cor / tot) * 100) : 0;
  }, [quizHistory]);

  const maxDayXp = Math.max(10, ...days14.map((d) => d.xp));

  return (
    <div className="space-y-8">
      {/* resumen */}
      <section className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { label: "XP total", value: xp.toLocaleString(), sub: `${rank.emoji} ${rank.name}${next ? ` · faltan ${next.min - xp}` : ""}`, icon: Zap, tone: "oro" },
          { label: "Racha", value: `${streak} días`, sub: `Hoy: ${dailyXp}/${goal} XP`, icon: Flame, tone: "rosso" },
          { label: "Nivel MCER", value: level ?? "Sin test", sub: level ? "Test realizado ✓" : "Haz el test de nivel", icon: Trophy, tone: "verde" },
          { label: "Precisión", value: `${avgAccuracy}%`, sub: `${quizHistory.length} pruebas realizadas`, icon: TrendingUp, tone: "terracotta" },
        ].map((card, i) => (
          <motion.div
            key={card.label}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="rounded-3xl border border-soft bg-surface p-5"
          >
            <div className="flex items-center justify-between">
              <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-muted-it">{card.label}</p>
              <card.icon className={cn("h-4 w-4", card.tone === "oro" && "text-oro", card.tone === "rosso" && "text-rosso", card.tone === "verde" && "text-verde", card.tone === "terracotta" && "text-terracotta")} aria-hidden="true" />
            </div>
            <p className="mt-2 font-display text-3xl font-bold">{card.value}</p>
            <p className="mt-1 text-xs text-muted-it">{card.sub}</p>
          </motion.div>
        ))}
      </section>

      <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
        {/* radar de destrezas */}
        {advanced ? (
        <section className="rounded-3xl border border-soft bg-surface p-6">
          <h2 className="font-display text-xl font-semibold">Las 4 destrezas + habilidades</h2>
          <p className="mt-1 text-sm text-muted-it">Cada actividad suma a su destreza: escucha, lectura, escritura, conversación, pronunciación, gramática y vocabulario.</p>
          <div className="mt-4 h-72">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart data={radarData} outerRadius="72%">
                <PolarGrid stroke="currentColor" className="text-inchiostro/15" />
                <PolarAngleAxis dataKey="skill" tick={{ fontSize: 12, fill: "currentColor" }} className="text-inchiostro/70" />
                <Radar dataKey="value" stroke="var(--verde)" fill="var(--verde)" fillOpacity={0.35} strokeWidth={2.5} />
              </RadarChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-2 grid grid-cols-2 gap-1.5 text-xs text-muted-it sm:grid-cols-4">
            {Object.entries(skillStats).map(([k, v]) => (
              <span key={k} className="rounded-lg bg-crema-scura px-2 py-1.5 text-center dark:bg-inchiostro/10">
                {SKILL_LABELS[k]}: <strong className="text-inchiostro">{v}</strong>
              </span>
            ))}
          </div>
        </section>
        ) : (
          <LockedFeatureCard
            title="Radar delle destrezze"
            bullets={["7 dimensiones: escucha, lectura, escritura, conversación…", "Progreso por habilidad en tiempo real", "Disponible dal piano PRO"]}
            required="pro"
          />
        )}

        {/* calendario 14 días */}
        {advanced ? (
        <section className="rounded-3xl border border-soft bg-surface p-6">
          <h2 className="flex items-center gap-2 font-display text-xl font-semibold">
            <Calendar className="h-5 w-5 text-rosso" aria-hidden="true" /> Últimos 14 giorni
          </h2>
          <p className="mt-1 text-sm text-muted-it">Constancia diaria: cada barra es el XP ganado ese día.</p>
          <div className="mt-5 flex h-36 items-end gap-1.5" role="img" aria-label="Gráfico de XP diario de los últimos 14 días">
            {days14.map((d) => (
              <div key={d.date} className="group flex flex-1 flex-col items-center gap-1.5">
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: `${Math.max(3, (d.xp / maxDayXp) * 100)}%` }}
                  transition={{ duration: 0.5 }}
                  className={cn("w-full rounded-md", d.xp >= goal ? "bg-verde" : d.xp > 0 ? "bg-oro/80" : "bg-inchiostro/10 dark:bg-inchiostro/20")}
                  title={`${d.date}: ${d.xp} XP`}
                />
                <span className="text-[9px] font-semibold text-muted-it">{d.label}</span>
              </div>
            ))}
          </div>
          <div className="mt-4 flex items-center gap-4 text-[11px] text-muted-it">
            <span className="flex items-center gap-1.5"><span className="h-2.5 w-2.5 rounded-sm bg-verde" /> meta alcanzada</span>
            <span className="flex items-center gap-1.5"><span className="h-2.5 w-2.5 rounded-sm bg-oro/80" /> estudio parcial</span>
            <span className="flex items-center gap-1.5"><span className="h-2.5 w-2.5 rounded-sm bg-inchiostro/20" /> descanso</span>
          </div>
        </section>
        ) : (
          <LockedFeatureCard
            title="Calendario di studio (14 giorni)"
            bullets={["Constancia diaria con barras de XP", "Comparación con tu meta diaria", "Disponible dal piano PRO"]}
            required="pro"
          />
        )}
      </div>

      {/* repaso + lecciones */}
      <section className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-3xl border border-soft bg-surface p-6">
          <h2 className="flex items-center gap-2 font-display text-xl font-semibold">
            <Library className="h-5 w-5 text-verde" aria-hidden="true" /> Repaso inteligente
          </h2>
          <div className="mt-4 grid grid-cols-3 gap-2.5 text-center">
            <div className="rounded-2xl bg-verde-tenue p-3.5">
              <p className="font-display text-2xl font-bold text-verde-scuro dark:text-verde">{mastered}</p>
              <p className="text-[10px] font-bold uppercase tracking-wide text-muted-it">Dominadas</p>
            </div>
            <div className="rounded-2xl bg-oro-tenue p-3.5">
              <p className="font-display text-2xl font-bold text-oro-scuro dark:text-oro">{learning}</p>
              <p className="text-[10px] font-bold uppercase tracking-wide text-muted-it">En aprendizaje</p>
            </div>
            <div className="rounded-2xl bg-rosso-tenue p-3.5">
              <p className="font-display text-2xl font-bold text-rosso-scuro dark:text-rosso">{due}</p>
              <p className="text-[10px] font-bold uppercase tracking-wide text-muted-it">Vencidas hoy</p>
            </div>
          </div>
          <button onClick={() => navigate("repaso")} className="mt-4 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-xl bg-verde px-5 py-2.5 text-sm font-bold text-white transition-all hover:scale-[1.01]">
            Ir al repaso inteligente →
          </button>
        </div>

        <div className="rounded-3xl border border-soft bg-surface p-6">
          <h2 className="flex items-center gap-2 font-display text-xl font-semibold">
            <BookOpen className="h-5 w-5 text-oro" aria-hidden="true" /> Lecciones completadas
          </h2>
          <div className="mt-4 space-y-2.5">
            {COURSES.map((c) => {
              const total = c.units.reduce((n, u) => n + u.lessons.length, 0);
              const done = c.units.reduce((n, u) => n + u.lessons.filter((l) => completedLessons.includes(l.id)).length, 0);
              const pct = total ? Math.round((done / total) * 100) : 0;
              return (
                <div key={c.level}>
                  <div className="flex items-center justify-between text-xs font-semibold">
                    <span>{c.level === "zero" ? "Desde cero" : c.level} <span className="font-normal text-muted-it">· {c.label.split("·")[1] ?? ""}</span></span>
                    <span className="text-muted-it">{done}/{total}</span>
                  </div>
                  <div className="mt-1 h-2 overflow-hidden rounded-full bg-crema-scura dark:bg-inchiostro/15">
                    <motion.div initial={{ width: 0 }} animate={{ width: `${pct}%` }} className="h-full rounded-full bg-verde" />
                  </div>
                </div>
              );
            })}
          </div>
          <p className="mt-3 text-xs text-muted-it">Total: {completedLessons.length} de {allLessons} lecciones</p>
        </div>
      </section>

      {/* motor adaptativo */}
      {advanced ? (
      <section className="rounded-3xl border border-soft bg-surface p-6">
        <h2 className="flex items-center gap-2 font-display text-xl font-semibold">
          <Sparkles className="h-5 w-5 text-oro" aria-hidden="true" /> Motor adaptativo
        </h2>
        <p className="mt-1 text-sm text-muted-it">Cada error alimenta las recomendaciones. Temas con precisión menor al 70%:</p>
        {weaknesses.length === 0 ? (
          <p className={cn("mt-4 rounded-2xl px-4 py-3 text-sm font-semibold", allStats.length === 0 ? "bg-crema-scura text-muted-it dark:bg-inchiostro/10" : "bg-verde-tenue text-verde-scuro dark:text-verde")}>
            {allStats.length === 0 ? "Aún no hay datos: haz una prueba para activar el motor adaptativo." : "Nessuna debolezza: stai andando alla grande! 🎉"}
          </p>
        ) : (
          <div className="mt-4 space-y-2.5">
            {weaknesses.map((w) => (
              <div key={w.topic} className="flex items-center gap-3 rounded-2xl bg-rosso-tenue/60 px-4 py-3">
                <span className="flex-1 text-sm font-semibold">{TOPIC_LABELS[w.topic] ?? w.topic}</span>
                <div className="h-2 w-24 overflow-hidden rounded-full bg-inchiostro/10 dark:bg-inchiostro/20">
                  <div className="h-full rounded-full bg-rosso" style={{ width: `${Math.round(w.accuracy * 100)}%` }} />
                </div>
                <span className="w-10 text-right text-xs font-bold text-rosso">{Math.round(w.accuracy * 100)}%</span>
              </div>
            ))}
          </div>
        )}
      </section>
      ) : (
        <LockedFeatureCard
          title="Motor adaptativo · analisi avanzate"
          bullets={["Tus temas débiles detectados automáticamente", "Recomendaciones de práctica dirigida", "Disponible dal piano PRO"]}
          required="pro"
        />
      )}

      {/* insignias */}
      <section className="rounded-3xl border border-soft bg-surface p-6">
        <h2 className="flex items-center gap-2 font-display text-xl font-semibold">
          <Award className="h-5 w-5 text-terracotta" aria-hidden="true" /> Insignias · {certificates.length > 0 && `${certificates.length} certificados · `}{earnedCount}/{BADGES.length}
        </h2>
        <div className="mt-4 grid grid-cols-2 gap-2.5 sm:grid-cols-5">
          {BADGES.map((b) => {
            const earned = b.test(snapshot, 0);
            return (
              <div
                key={b.id}
                className={cn(
                  "rounded-2xl border-2 p-3.5 text-center transition-all",
                  earned ? "border-oro/50 bg-oro-tenue" : "border-soft bg-crema-scura/50 opacity-50 dark:bg-inchiostro/5"
                )}
              >
                <p className="text-2xl" aria-hidden="true">{b.emoji}</p>
                <p className="mt-1.5 text-xs font-bold leading-tight">{b.name}</p>
                <p className="mt-0.5 text-[10px] leading-tight text-muted-it">{b.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* historial */}
      {quizHistory.length > 0 && (
        <section className="rounded-3xl border border-soft bg-surface p-6">
          <h2 className="font-display text-xl font-semibold">Historial de pruebas</h2>
          <div className="mt-4 max-h-72 space-y-2 overflow-y-auto pr-1 scrollbar-thin">
            {quizHistory.slice(0, 15).map((q) => {
              const pct = Math.round((q.score / Math.max(1, q.total)) * 100);
              return (
                <div key={q.id} className="flex items-center gap-3 rounded-xl bg-crema-scura px-4 py-2.5 text-sm dark:bg-inchiostro/10">
                  <span className="w-16 shrink-0 rounded-full bg-inchiostro/5 px-2 py-0.5 text-center font-mono text-[10px] font-bold uppercase dark:bg-inchiostro/20">{q.kind}</span>
                  <span className="min-w-0 flex-1 truncate font-semibold">{q.label}</span>
                  <span className={cn("shrink-0 font-bold", pct >= 70 ? "text-verde" : "text-rosso")}>{q.score}/{q.total}</span>
                </div>
              );
            })}
          </div>
        </section>
      )}
    </div>
  );
}
