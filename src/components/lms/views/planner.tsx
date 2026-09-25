"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { CalendarDays, Printer, Sparkles } from "lucide-react";
import { COURSES, COURSE_BY_LEVEL } from "@/lib/lms/courses";
import { useLms } from "@/lib/lms/store";
import { cn } from "@/lib/utils";

/* ── Vista: Piano settimanale · planificador personalizado · plugin v1.1 ── */

const DAY_NAMES = ["Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato", "Domenica"];

interface Block {
  icon: string;
  label: string;
  detail: string;
  minutes: number;
  view: Parameters<ReturnType<typeof useLms.getState>["navigate"]>[0];
  lessonId?: string;
  level?: string;
}

interface Day {
  day: string;
  focus: string;
  blocks: Block[];
  totalMinutes: number;
  xpEstimate: number;
}

function buildPlan(level: string, daysPerWeek: number, minutesPerDay: number): Day[] {
  const course = COURSE_BY_LEVEL(level) ?? COURSES[0];
  const lessons = course.units.flatMap((u) => u.lessons.map((l) => ({ lesson: l, unit: u })));
  const studyDays = [0, 1, 2, 3, 4, 5, 6].filter((d) =>
    daysPerWeek >= 7 ? true : d < daysPerWeek
  );
  const days: Day[] = [];
  let lessonCursor = 0;

  studyDays.forEach((d, i) => {
    const blocks: Block[] = [];
    const isReviewDay = i === Math.min(studyDays.length - 2, Math.floor(studyDays.length / 2));
    const isLastDay = i === studyDays.length - 1;

    if (isLastDay && minutesPerDay >= 30) {
      // último día: evaluación
      blocks.push({ icon: "📝", label: "Esame di fine settimana", detail: `Prueba del nivel ${course.label.split("·")[0].trim()}`, minutes: Math.round(minutesPerDay * 0.6), view: "esami" });
      blocks.push({ icon: "🔁", label: "Repaso de errores", detail: "Refuerzos dirigidos por el motor adaptativo", minutes: Math.round(minutesPerDay * 0.4), view: "repaso" });
    } else if (isReviewDay) {
      // día de consolidación
      blocks.push({ icon: "🃏", label: "Flashcards SRS", detail: "Tarjetas que vencen hoy", minutes: Math.max(10, Math.round(minutesPerDay * 0.35)), view: "repaso" });
      const nxt = lessons[lessonCursor];
      if (nxt) {
        blocks.push({ icon: "📘", label: `Lezione: ${nxt.lesson.titleIt}`, detail: nxt.unit.title, minutes: Math.round(minutesPerDay * 0.65), view: "cursos", lessonId: nxt.lesson.id, level });
        lessonCursor++;
      }
    } else {
      // día estándar: lección + práctica complementaria
      const main = lessons[lessonCursor];
      const mainMin = Math.round(minutesPerDay * 0.6);
      const restMin = minutesPerDay - mainMin;
      if (main) {
        blocks.push({ icon: "📘", label: `Lezione: ${main.lesson.titleIt}`, detail: main.unit.title, minutes: mainMin, view: "cursos", lessonId: main.lesson.id, level });
        lessonCursor++;
      } else {
        blocks.push({ icon: "🎯", label: "Repaso general del nivel", detail: "Ya completaste las lecciones disponibles", minutes: mainMin, view: "repaso" });
      }
      const extras: Block[] = [
        { icon: "🎧", label: "Ascolto", detail: "Diálogo con TTS a tu velocidad", minutes: restMin, view: "ascolto" },
        { icon: "📖", label: "Lettura", detail: "Lectura graduada con glosario", minutes: restMin, view: "lettura" },
        { icon: "🗣️", label: "Conversazione", detail: "Role-play con el tutor", minutes: restMin, view: "conversazione" },
        { icon: "⚡", label: "Allenamento verbi", detail: "Drill contrarreloj de conjugación", minutes: restMin, view: "verbidrill" },
        { icon: "🎮", label: "Giochi", detail: "Memoria o quiz relámpago", minutes: restMin, view: "giochi" },
        { icon: "🔢", label: "Numeri lab", detail: "Números y hora en italiano", minutes: restMin, view: "numerilab" },
      ];
      blocks.push(extras[(i * 2) % extras.length]);
      if (minutesPerDay >= 45) blocks.push(extras[(i * 2 + 1) % extras.length]);
    }

    const totalMinutes = blocks.reduce((s, b) => s + b.minutes, 0);
    days.push({
      day: DAY_NAMES[d],
      focus: isLastDay ? "Evaluación" : isReviewDay ? "Consolidación" : "Nuevos contenidos",
      blocks,
      totalMinutes,
      xpEstimate: Math.round(totalMinutes * 4), // ~4 XP/minuto de estudio activo
    });
  });
  return days;
}

export function PlannerView() {
  const userLevel = useLms((s) => s.level);
  const remoteConfig = useLms((s) => s.remoteConfig);
  const navigate = useLms((s) => s.navigate);
  const [level, setLevel] = useState<string>(userLevel ?? "A1");
  const [days, setDays] = useState(5);
  const [minutes, setMinutes] = useState(30);
  const [generated, setGenerated] = useState(false);

  const plan = useMemo(() => (generated ? buildPlan(level, days, minutes) : []), [generated, level, days, minutes]);
  const totalXp = plan.reduce((s, d) => s + d.xpEstimate, 0);
  const totalMin = plan.reduce((s, d) => s + d.totalMinutes, 0);

  if (remoteConfig && remoteConfig.features.planner === false) {
    return (
      <div className="mx-auto max-w-lg rounded-3xl border border-soft bg-surface p-8 text-center">
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-inchiostro/10 text-2xl">📅</span>
        <h2 className="mt-4 font-display text-xl font-semibold">Piano settimanale non disponibile</h2>
        <p className="mt-2 text-sm leading-relaxed text-muted-it">La administración ha desactivado el planificador.</p>
        <button onClick={() => navigate("inicio")} className="mt-5 inline-flex min-h-11 items-center rounded-xl bg-verde px-5 py-2.5 text-sm font-bold text-white shadow-md shadow-verde/25 hover:bg-verde-scuro">Torna all'inizio</button>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-4xl">
      {/* configuración */}
      <section className="rounded-3xl border border-soft bg-surface p-6">
        <h2 className="flex items-center gap-2 font-display text-xl font-semibold"><CalendarDays className="h-5 w-5 text-verde-scuro dark:text-verde" aria-hidden="true" /> Il tuo piano su misura</h2>
        <div className="mt-4 grid gap-5 sm:grid-cols-3">
          <div>
            <label htmlFor="pl-level" className="mb-1 block text-xs font-bold uppercase tracking-wide text-muted-it">Nivel</label>
            <select id="pl-level" value={level} onChange={(e) => { setLevel(e.target.value); setGenerated(false); }} className="w-full rounded-xl border border-soft bg-crema px-3 py-2.5 text-sm font-semibold outline-none focus:ring-2 focus:ring-verde/40">
              {COURSES.map((c) => <option key={c.level} value={c.level}>{c.label}</option>)}
            </select>
          </div>
          <div>
            <label htmlFor="pl-days" className="mb-1 block text-xs font-bold uppercase tracking-wide text-muted-it">Días por semana: <span className="text-verde-scuro dark:text-verde">{days}</span></label>
            <input id="pl-days" type="range" min={3} max={7} value={days} onChange={(e) => { setDays(Number(e.target.value)); setGenerated(false); }} className="mt-3 w-full accent-[#0E7A4E]" />
          </div>
          <div>
            <label htmlFor="pl-min" className="mb-1 block text-xs font-bold uppercase tracking-wide text-muted-it">Minutos al día: <span className="text-verde-scuro dark:text-verde">{minutes}</span></label>
            <input id="pl-min" type="range" min={15} max={60} step={15} value={minutes} onChange={(e) => { setMinutes(Number(e.target.value)); setGenerated(false); }} className="mt-3 w-full accent-[#0E7A4E]" />
          </div>
        </div>
        <button onClick={() => setGenerated(true)} className="mt-5 inline-flex min-h-12 items-center gap-2 rounded-xl bg-verde px-6 py-3 text-sm font-bold text-white shadow-lg shadow-verde/25 transition-all hover:scale-[1.01]">
          <Sparkles className="h-4 w-4" aria-hidden="true" /> Genera il piano
        </button>
      </section>

      {generated && (
        <>
          <div className="mt-5 grid grid-cols-3 gap-3">
            {[
              { label: "Sesiones", value: String(plan.length) },
              { label: "Minutos totales", value: String(totalMin) },
              { label: "XP estimado", value: `+${totalXp}` },
            ].map((s) => (
              <div key={s.label} className="rounded-2xl border border-soft bg-surface p-4 text-center">
                <p className="font-display text-2xl font-semibold text-verde-scuro dark:text-verde">{s.value}</p>
                <p className="mt-0.5 text-[11px] font-bold uppercase tracking-wide text-muted-it">{s.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {plan.map((d, i) => (
              <motion.article
                key={d.day}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="rounded-3xl border border-soft bg-surface p-5"
              >
                <div className="flex items-center justify-between">
                  <p className="font-display text-lg font-semibold">{d.day}</p>
                  <span className={cn(
                    "rounded-full px-3 py-1 text-[11px] font-bold",
                    d.focus === "Evaluación" ? "bg-rosso-tenue text-rosso-scuro dark:text-rosso"
                      : d.focus === "Consolidación" ? "bg-oro-tenue text-oro-scuro"
                      : "bg-verde-tenue text-verde-scuro dark:text-verde"
                  )}>{d.focus}</span>
                </div>
                <ul className="mt-3 flex flex-col gap-2">
                  {d.blocks.map((b, j) => (
                    <li key={j}>
                      <button
                        onClick={() => navigate(b.view, { lessonId: b.lessonId, level: b.level as never })}
                        className="flex w-full min-h-11 items-start gap-3 rounded-2xl border border-soft bg-crema px-3.5 py-3 text-left transition-all hover:border-verde/40 hover:shadow-sm"
                      >
                        <span className="text-xl leading-none" aria-hidden="true">{b.icon}</span>
                        <span className="min-w-0 flex-1">
                          <span className="block truncate text-sm font-bold">{b.label}</span>
                          <span className="block truncate text-xs text-muted-it">{b.detail}</span>
                        </span>
                        <span className="shrink-0 rounded-lg bg-inchiostro/5 px-2 py-1 font-mono text-[11px] font-bold text-muted-it">{b.minutes}′</span>
                      </button>
                    </li>
                  ))}
                </ul>
                <p className="mt-3 text-right text-[11px] font-bold text-muted-it">{d.totalMinutes} min · ~{d.xpEstimate} XP</p>
              </motion.article>
            ))}
          </div>

          <p className="mt-4 text-center text-xs text-muted-it">
            Toca cada bloque para ir directo a la actividad. El plan se reequilibra con tu progreso: si adelantas lecciones, el próximo plan continúa desde donde llegaste.
          </p>
        </>
      )}
    </div>
  );
}
