"use client";

import { useMemo, useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, BookOpen, CheckCircle2, Clock, GraduationCap, Headphones, Info, PenLine, Play, RotateCcw, ScrollText, Timer, Trophy, XCircle } from "lucide-react";
import { CEFR_LEVELS, LEVEL_LABELS, type CefrLevel } from "@/lib/lms/types";
import { CILS_LEVELS, CILS_SECTIONS_META, CILS_FAQ, cilsInfo, cilsExercisesBySection, cilsTasks, cilsVerdict, type CilsSectionId } from "@/lib/lms/cils";
import { useLms } from "@/lib/lms/store";
import { QuizEngine } from "../quiz-engine";
import { cn } from "@/lib/utils";

/* ════════ Vista: Preparación CILS ════════
   Tres modos: struttura del examen, allenamento por sección
   (con tareas de escritura/oral y modelo) y simulacro cronometrado. */

type Mode = { kind: "intro" } | { kind: "level"; level: CefrLevel } | { kind: "sezione"; level: CefrLevel; section: CilsSectionId } | { kind: "simulazione"; level: CefrLevel };

const SECTION_ICON: Record<CilsSectionId, typeof Headphones> = {
  ascolto: Headphones, lettura: BookOpen, strutture: ScrollText, scrittura: PenLine, orale: Play,
};

function fmt(seconds: number): string {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

export function CilsView() {
  const [mode, setMode] = useState<Mode>({ kind: "intro" });
  const addXp = useLms((s) => s.addXp);
  const addXpRef = useRef(addXp);
  addXpRef.current = addXp;

  /* hooks siempre al inicio: memoriza por nivel/sección actuales (si aplica) */
  const activeLevel = mode.kind !== "intro" ? mode.level : null;
  const activeSection = mode.kind === "sezione" ? mode.section : null;
  const sectionExercises = useMemo(
    () => (activeLevel && activeSection ? cilsExercisesBySection(activeLevel, activeSection) : []),
    [activeLevel, activeSection]
  );
  const sectionTasks = useMemo(
    () => (activeLevel && activeSection ? cilsTasks(activeLevel, activeSection) : []),
    [activeLevel, activeSection]
  );

  /* ── Nivel elegido: vista de las 5 secciones ── */
  if (mode.kind === "level") {
    const info = cilsInfo(mode.level);
    return (
      <div>
        <button onClick={() => setMode({ kind: "intro" })} className="mb-5 inline-flex min-h-11 items-center gap-2 text-sm font-bold text-muted-it transition-colors hover:text-verde">
          <ArrowLeft className="h-4 w-4" aria-hidden="true" /> Tutti i livelli
        </button>
        <div className="rounded-3xl border border-verde/30 bg-verde-tenue/60 p-6 dark:bg-verde/10">
          <h2 className="font-display text-3xl font-bold text-verde-scuro dark:text-verde">{info.nome}</h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-inchiostro/75 dark:text-inchiostro/85">{info.desc}</p>
          <p className="mt-3 flex flex-wrap items-center gap-2 text-xs font-bold text-muted-it">
            <span className="inline-flex items-center gap-1 rounded-full bg-white/70 px-3 py-1.5 dark:bg-inchiostro/20"><Clock className="h-3.5 w-3.5" aria-hidden /> ~{info.totalMinutes} min totali</span>
            <span className="inline-flex items-center gap-1 rounded-full bg-white/70 px-3 py-1.5 dark:bg-inchiostro/20">5 prove scritte/orali</span>
            <span className="inline-flex items-center gap-1 rounded-full bg-white/70 px-3 py-1.5 dark:bg-inchiostro/20">min. 45% per prova</span>
          </p>
          <button onClick={() => setMode({ kind: "simulazione", level: mode.level })} className="mt-4 inline-flex min-h-11 items-center gap-2 rounded-xl bg-verde px-5 py-2.5 text-sm font-bold text-white shadow-md shadow-verde/25 transition-transform hover:-translate-y-0.5">
            <Timer className="h-4 w-4" aria-hidden="true" /> Simulazione cronometrata
          </button>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {info.sections.map((sec, i) => {
            const Icon = SECTION_ICON[sec.id];
            return (
              <motion.button
                key={sec.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                onClick={() => setMode({ kind: "sezione", level: mode.level, section: sec.id })}
                className="group rounded-3xl border border-soft bg-surface p-5 text-left transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-verde-tenue text-verde-scuro dark:text-verde">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="rounded-full bg-inchiostro/5 px-2.5 py-1 font-mono text-[10px] font-bold text-muted-it dark:bg-inchiostro/15">{sec.minutes}′</span>
                </div>
                <p className="mt-3 font-display text-lg font-bold">{sec.label}</p>
                <p className="text-xs font-semibold uppercase tracking-wide text-muted-it">{sec.labelEs}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-it">{sec.desc}</p>
                <p className="mt-3 text-xs font-bold text-verde-scuro group-hover:underline dark:text-verde">Allena questa prova →</p>
              </motion.button>
            );
          })}
        </div>
      </div>
    );
  }

  /* ── Sección: entrenamiento específico ── */
  if (mode.kind === "sezione") {
    const info = cilsInfo(mode.level);
    const sec = info.sections.find((s) => s.id === mode.section)!;
    const exercises = sectionExercises;
    const tasks = sectionTasks;
    return (
      <div>
        <button onClick={() => setMode({ kind: "level", level: mode.level })} className="mb-5 inline-flex min-h-11 items-center gap-2 text-sm font-bold text-muted-it transition-colors hover:text-verde">
          <ArrowLeft className="h-4 w-4" aria-hidden="true" /> {info.nome}
        </button>
        <div className="rounded-3xl border border-soft bg-surface p-6">
          <h2 className="flex items-center gap-2 font-display text-2xl font-semibold">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-verde-tenue text-verde-scuro dark:text-verde"><GraduationCap className="h-4.5 w-4.5" aria-hidden /></span>
            {sec.label} · {info.nome}
          </h2>
          <div className="mt-3 grid gap-2 sm:grid-cols-3">
            <p className="rounded-2xl bg-crema-scura p-3 text-xs font-bold text-inchiostro/80 dark:bg-inchiostro/10"><Clock className="mr-1 inline h-3.5 w-3.5" aria-hidden /> {sec.minutes} min en el examen</p>
            <p className="rounded-2xl bg-crema-scura p-3 text-xs font-bold text-inchiostro/80 dark:bg-inchiostro/10">Puntuación máx: {sec.maxScore} · aprobado ≥ {sec.passScore}</p>
            <p className="rounded-2xl bg-crema-scura p-3 text-xs font-bold text-inchiostro/80 dark:bg-inchiostro/10">{sec.desc}</p>
          </div>
          <div className="mt-4 rounded-2xl border border-oro/30 bg-oro-tenue/60 p-4 dark:bg-oro/10">
            <p className="text-xs font-bold uppercase tracking-wide text-oro-scuro dark:text-oro">Strategy · consigli della prova</p>
            <ul className="mt-2 space-y-1.5">
              {sec.tips.map((t) => (
                <li key={t} className="flex items-start gap-2 text-sm text-inchiostro/80 dark:text-inchiostro/85">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-oro" aria-hidden="true" /> {t}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {tasks.length > 0 && (
          <div className="mt-6 space-y-4">
            {tasks.map((t) => (
              <CilsTaskCard key={t.id} task={t} onXp={() => addXpRef.current(30)} />
            ))}
          </div>
        )}

        {exercises.length > 0 ? (
          <div className="mt-6">
            <h3 className="mb-3 font-display text-xl font-semibold">Compiti a risposta chiusa</h3>
            <QuizEngine
              exercises={exercises}
              title={`CILS · ${sec.label}`}
              kind="esame"
              label={`CILS ${info.level} · ${sec.labelEs}`}
              xpPerCorrect={12}
              skill={mode.section === "ascolto" ? "ascolto" : mode.section === "lettura" ? "lettura" : "grammatica"}
            />
          </div>
        ) : tasks.length === 0 ? (
          <p className="mt-6 rounded-2xl border border-soft bg-surface p-5 text-sm text-muted-it">Para esta sección el examen se entrena sobre todo con las tracce: usa las tareas de arriba con cronómetro.</p>
        ) : null}
      </div>
    );
  }

  /* ── Simulacro cronometrado ── */
  if (mode.kind === "simulazione") {
    return <CilsSimulazione level={mode.level} onExit={() => setMode({ kind: "level", level: mode.level })} />;
  }

  /* ── Intro: elegir nivel + FAQ ── */
  return (
    <div className="space-y-6">
      <div className="rounded-3xl border border-rosso/25 bg-gradient-to-br from-rosso-tenue/50 to-verde-tenue/40 p-6 dark:from-rosso/10 dark:to-verde/10">
        <h2 className="flex items-center gap-2 font-display text-2xl font-bold text-rosso-scuro dark:text-rosso">
          <GraduationCap className="h-6 w-6" aria-hidden="true" /> Preparazione CILS
        </h2>
        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-inchiostro/80 dark:text-inchiostro/85">
          La <strong>Certificazione di Italiano come Lingua Straniera</strong>, emitida por la Università per Stranieri di Siena,
          certifica tu dominio del italiano en los seis niveles del MCER. Aquí tienes la estructura de cada examen,
          estrategias por prueba, tareas reales con modelo de corrección y un <strong>simulacro cronometrado</strong> con el
          veredicto final <em>promosso / bocciato</em> según los umbrales oficiales.
        </p>
        <p className="mt-3 flex items-start gap-2 rounded-2xl bg-white/60 p-3 text-xs leading-relaxed text-muted-it dark:bg-inchiostro/20">
          <Info className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
          Estructura y umbrales orientativos basados en los formatos públicos del CILS: consulta siempre la convocatoria
          oficial en <span className="font-bold">cils.unistrasi.it</span>.
        </p>
      </div>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
        {CILS_LEVELS.map((lv, i) => (
          <motion.button
            key={lv.level}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            onClick={() => setMode({ kind: "level", level: lv.level })}
            className="group rounded-3xl border-2 border-soft bg-surface p-5 text-left transition-all hover:-translate-y-1 hover:border-verde/40 hover:shadow-lg"
          >
            <span className="font-display text-3xl font-extrabold text-verde-scuro dark:text-verde">{lv.level}</span>
            <p className="mt-1 text-xs font-bold uppercase tracking-wide text-muted-it">{lv.nome}</p>
            <p className="mt-2 text-sm leading-snug text-muted-it">{lv.desc.split(".")[0]}.</p>
            <p className="mt-3 text-xs font-bold text-verde-scuro group-hover:underline dark:text-verde">Struttura e allenamento →</p>
          </motion.button>
        ))}
      </div>

      <div className="rounded-3xl border border-soft bg-surface p-6">
        <h3 className="flex items-center gap-2 font-display text-xl font-semibold"><Trophy className="h-5 w-5 text-oro" aria-hidden="true" /> Come funziona l'esame</h3>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {(Object.keys(CILS_SECTIONS_META) as CilsSectionId[]).map((id) => {
            const Icon = SECTION_ICON[id];
            const meta = CILS_SECTIONS_META[id];
            return (
              <div key={id} className="rounded-2xl bg-crema-scura p-4 dark:bg-inchiostro/10">
                <Icon className="h-5 w-5 text-verde-scuro dark:text-verde" aria-hidden="true" />
                <p className="mt-2 text-sm font-bold">{meta.label}</p>
                <p className="text-xs leading-snug text-muted-it">{meta.labelEs}</p>
              </div>
            );
          })}
        </div>
        <p className="mt-4 text-sm leading-relaxed text-muted-it">
          Cada sección se puntúa sobre {CILS_LEVELS[2].sections[0].maxScore} y se aprueba con el 45% aprox. En muchas
          convocatorias las secciones aprobadas se conservan para la siguiente: conviene preparar <strong>todas</strong>,
          pero presentar las fuertes primero no es mala estrategia.
        </p>
      </div>

      <div className="rounded-3xl border border-soft bg-surface p-6">
        <h3 className="flex items-center gap-2 font-display text-xl font-semibold"><Info className="h-5 w-5 text-verde" aria-hidden="true" /> Domande frequenti</h3>
        <div className="mt-4 space-y-3">
          {CILS_FAQ.map((f) => (
            <details key={f.q} className="group rounded-2xl border border-soft bg-crema-scura/50 p-4 dark:bg-inchiostro/5">
              <summary className="cursor-pointer list-none text-sm font-bold text-inchiostro/85 marker:hidden dark:text-inchiostro/90">
                <span className="mr-2 text-verde group-open:hidden">+</span><span className="mr-2 hidden text-verde group-open:inline">−</span>{f.q}
              </summary>
              <p className="mt-2 pl-6 text-sm leading-relaxed text-muted-it">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── Tarjeta de tarea de escritura/oral con checklist y modelo ── */
function CilsTaskCard({ task, onXp }: { task: import("@/lib/lms/cils").CilsTask; onXp: () => void }) {
  const [showModel, setShowModel] = useState(false);
  const [checks, setChecks] = useState<boolean[]>(() => task.checklist.map(() => false));
  const done = checks.length > 0 && checks.every(Boolean);
  return (
    <div className="rounded-3xl border border-soft bg-surface p-6">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h4 className="font-display text-lg font-bold">{task.title}</h4>
        <span className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-wide text-muted-it">
          <span className="rounded-full bg-verde-tenue px-2.5 py-1 text-verde-scuro dark:text-verde">{task.parole} parole</span>
          <span className="inline-flex items-center gap-1 rounded-full bg-inchiostro/5 px-2.5 py-1 dark:bg-inchiostro/15"><Clock className="h-3 w-3" aria-hidden /> {task.minutes}′</span>
        </span>
      </div>
      <p className="mt-3 rounded-2xl bg-crema-scura p-4 text-sm leading-relaxed text-inchiostro/85 dark:bg-inchiostro/10 dark:text-inchiostro/90"><strong>Traccia:</strong> {task.traccia}</p>
      <p className="mt-2 text-xs italic text-muted-it">{task.tracciaEs}</p>
      <div className="mt-4">
        <p className="text-xs font-bold uppercase tracking-wide text-muted-it">Autovalutazione</p>
        <div className="mt-2 flex flex-wrap gap-2">
          {task.checklist.map((c, i) => (
            <button
              key={c}
              onClick={() => setChecks((prev) => prev.map((v, j) => (j === i ? !v : v)))}
              className={cn(
                "rounded-full border px-3 py-1.5 text-xs font-bold transition-all",
                checks[i] ? "border-verde bg-verde text-white" : "border-soft bg-crema-scura text-inchiostro/70 hover:border-verde/40 dark:bg-inchiostro/10"
              )}
            >
              {checks[i] ? "✓ " : ""}{c}
            </button>
          ))}
        </div>
      </div>
      <div className="mt-4 flex flex-wrap items-center gap-3">
        <button onClick={() => setShowModel((v) => !v)} className="inline-flex min-h-11 items-center gap-2 rounded-xl border border-soft px-4 py-2 text-xs font-bold text-inchiostro/75 transition-colors hover:bg-inchiostro/5 dark:text-inchiostro/85">
          {showModel ? "Nascondi" : "Mostra"} il modello
        </button>
        {done && (
          <button onClick={onXp} className="inline-flex min-h-11 items-center gap-2 rounded-xl bg-oro px-4 py-2 text-xs font-bold text-white shadow-md">
            <Trophy className="h-4 w-4" aria-hidden="true" /> +30 XP
          </button>
        )}
      </div>
      {showModel && (
        <div className="mt-3 rounded-2xl border border-oro/30 bg-oro-tenue/50 p-4 dark:bg-oro/10">
          <p className="text-xs font-bold uppercase tracking-wide text-oro-scuro dark:text-oro">Modello di riferimento</p>
          <p className="mt-2 whitespace-pre-line text-sm leading-relaxed text-inchiostro/85 dark:text-inchiostro/90">{task.modello}</p>
        </div>
      )}
    </div>
  );
}

/* ── Simulacro: 5 secciones cronometradas + veredicto ── */
function CilsSimulazione({ level, onExit }: { level: CefrLevel; onExit: () => void }) {
  const info = useMemo(() => cilsInfo(level), [level]);
  const [phase, setPhase] = useState<"menu" | "running" | "done">("menu");
  const [secIdx, setSecIdx] = useState(0);
  const [secondsLeft, setSecondsLeft] = useState(0);
  const [scores, setScores] = useState<Partial<Record<CilsSectionId, { got: number; max: number }>>>({});
  const addXp = useLms((s) => s.addXp);

  useEffect(() => {
    if (phase !== "running") return;
    if (secondsLeft <= 0) return;
    const t = setTimeout(() => setSecondsLeft((s) => s - 1), 1000);
    return () => clearTimeout(t);
  }, [phase, secondsLeft]);

  const sec = info.sections[secIdx];

  function startSection() {
    setSecondsLeft(sec.minutes * 60);
    setPhase("running");
  }

  function scoreSection(got: number, max: number) {
    const next = { ...scores, [sec.id]: { got, max } };
    setScores(next);
    if (secIdx + 1 < info.sections.length) {
      setSecIdx(secIdx + 1);
      setPhase("menu");
    } else {
      const v = cilsVerdict(next);
      addXp(v.promosso ? 250 : 80);
      setPhase("done");
    }
  }

  const verdict = useMemo(() => cilsVerdict(scores), [scores]);
  const exercises = useMemo(() => (sec ? cilsExercisesBySection(level, sec.id) : []), [level, sec]);
  const tasks = useMemo(() => (sec ? cilsTasks(level, sec.id) : []), [level, sec]);

  if (phase === "done") {
    return (
      <div>
        <button onClick={onExit} className="mb-5 inline-flex min-h-11 items-center gap-2 text-sm font-bold text-muted-it transition-colors hover:text-verde">
          <ArrowLeft className="h-4 w-4" aria-hidden="true" /> {info.nome}
        </button>
        <div className={cn("rounded-3xl border-2 p-6 text-center", verdict.promosso ? "border-verde/50 bg-verde-tenue/50 dark:bg-verde/10" : "border-rosso/40 bg-rosso-tenue/50 dark:bg-rosso/10")}>
          <p className="font-display text-4xl font-extrabold">{verdict.promosso ? "Promosso! 🎓" : "Bocciato (per ora)"}</p>
          <p className="mt-2 text-sm text-muted-it">
            {verdict.promosso
              ? "Hai superato la soglia del 45% in tutte le prove: livello da certificato."
              : "Non disperare: ogni prova approvata spesso si conserva. Rivedi le sezioni sotto la soglia e riprova."}
          </p>
        </div>
        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {verdict.details.map((d) => {
            const meta = CILS_SECTIONS_META[d.section];
            return (
              <div key={d.section} className={cn("rounded-3xl border-2 p-4 text-center", d.passed ? "border-verde/40 bg-verde-tenue/40 dark:bg-verde/10" : "border-rosso/40 bg-rosso-tenue/40 dark:bg-rosso/10")}>
                {d.passed ? <CheckCircle2 className="mx-auto h-6 w-6 text-verde" aria-hidden /> : <XCircle className="mx-auto h-6 w-6 text-rosso" aria-hidden />}
                <p className="mt-2 text-xs font-bold uppercase tracking-wide">{meta.label}</p>
                <p className="mt-1 font-display text-2xl font-bold">{d.got}/{d.max}</p>
                <p className="text-[10px] font-bold text-muted-it">{d.passed ? "soglia superata" : "sotto la soglia"}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  if (phase === "menu") {
    return (
      <div>
        <button onClick={onExit} className="mb-5 inline-flex min-h-11 items-center gap-2 text-sm font-bold text-muted-it transition-colors hover:text-verde">
          <ArrowLeft className="h-4 w-4" aria-hidden="true" /> {info.nome}
        </button>
        <div className="mx-auto max-w-xl rounded-3xl border border-soft bg-surface p-6 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-muted-it">Simulazione · {info.nome}</p>
          <p className="mt-2 font-display text-2xl font-bold">Prova {secIdx + 1} di {info.sections.length}</p>
          <p className="mt-1 text-lg font-bold text-verde-scuro dark:text-verde">{sec.label}</p>
          <p className="mt-2 text-sm text-muted-it">{sec.labelEs} · {sec.minutes} minuti</p>
          <button onClick={startSection} className="mt-5 inline-flex min-h-11 items-center gap-2 rounded-xl bg-verde px-6 py-2.5 text-sm font-bold text-white shadow-md shadow-verde/25 transition-transform hover:-translate-y-0.5">
            <Play className="h-4 w-4" aria-hidden="true" /> Avvia il cronometro
          </button>
        </div>
      </div>
    );
  }

  /* running */
  const timeUp = secondsLeft <= 0;
  return (
    <div>
      <div className="sticky top-0 z-10 -mx-1 mb-5 flex items-center justify-between gap-3 rounded-2xl border border-soft bg-surface/95 px-4 py-3 shadow-sm backdrop-blur">
        <p className="text-sm font-bold">{info.nome} · {sec.label}</p>
        <p className={cn("rounded-xl px-3 py-1.5 font-mono text-lg font-bold tabular-nums", timeUp ? "bg-rosso-tenue text-rosso-scuro dark:text-rosso" : "bg-verde-tenue text-verde-scuro dark:text-verde")}>
          ⏱ {fmt(secondsLeft)}
        </p>
      </div>
      <div className={cn("rounded-2xl border p-4", timeUp ? "border-rosso/40 bg-rosso-tenue/50 dark:bg-rosso/10" : "border-soft bg-surface")}>
        <p className="text-sm font-bold">
          {timeUp ? "Tempo scaduto! " : ""}
          {sec.label} · {sec.minutes}′ · {sec.labelEs}
        </p>
        {!timeUp && <p className="mt-1 text-xs text-muted-it">Svolgi la prova con il cronometro: quando hai finito (o allo scadere), registra l'autovalutazione.</p>}
        {tasks.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-2">
            {tasks.map((t) => (
              <span key={t.id} className="rounded-full bg-crema-scura px-3 py-1.5 text-xs font-bold text-inchiostro/70 dark:bg-inchiostro/10">{t.title}</span>
            ))}
          </div>
        )}
        <div className="mt-4 flex flex-wrap items-center gap-2">
          <span className="text-xs font-bold uppercase tracking-wide text-muted-it">Autovalutazione:</span>
          {[0.45, 0.6, 0.75, 0.9, 1].map((r) => (
            <button
              key={r}
              onClick={() => scoreSection(Math.round(sec.maxScore * r), sec.maxScore)}
              className="rounded-xl border border-soft bg-crema-scura px-3 py-2 text-xs font-bold transition-all hover:-translate-y-0.5 hover:border-verde/40 dark:bg-inchiostro/10"
            >
              {Math.round(r * 100)}% · {Math.round(sec.maxScore * r)}/{sec.maxScore}
            </button>
          ))}
        </div>
      </div>
      {exercises.length > 0 && (
        <div className="mt-6">
          <QuizEngine
            exercises={exercises}
            title={`Simulazione · ${sec.label}`}
            kind="esame"
            label={`CILS ${level} · ${sec.labelEs}`}
            xpPerCorrect={10}
            skill={sec.id === "ascolto" ? "ascolto" : sec.id === "lettura" ? "lettura" : "grammatica"}
          />
        </div>
      )}
      {timeUp && (
        <button onClick={() => scoreSection(Math.round(sec.maxScore * 0.45), sec.maxScore)} className="mt-4 inline-flex min-h-11 items-center gap-2 rounded-xl border border-rosso/40 px-4 py-2 text-xs font-bold text-rosso-scuro dark:text-rosso">
          <RotateCcw className="h-4 w-4" aria-hidden="true" /> Prossima prova
        </button>
      )}
    </div>
  );
}
