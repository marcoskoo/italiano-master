"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Award, Download, GraduationCap, ScrollText, Trophy } from "lucide-react";
import { CEFR_LEVELS, LEVEL_LABELS, type CefrLevel } from "@/lib/lms/types";
import { exercisesByLevel } from "@/lib/lms/exercises";
import { COURSES } from "@/lib/lms/courses";
import { useLms } from "@/lib/lms/store";
import { QuizEngine } from "../quiz-engine";
import { cn } from "@/lib/utils";

/* ════════ Vista: Exámenes ════════ */

export function ExamsView() {
  const [examLevel, setExamLevel] = useState<CefrLevel | null>(null);
  const addCertificate = useLms((s) => s.addCertificate);
  const addXp = useLms((s) => s.addXp);
  const completedLessons = useLms((s) => s.completedLessons);
  const certificates = useLms((s) => s.certificates);

  const examExercises = useMemo(() => (examLevel ? exercisesByLevel(examLevel, 12) : []), [examLevel]);

  if (examLevel) {
    return (
      <div>
        <button onClick={() => setExamLevel(null)} className="mb-5 inline-flex min-h-11 items-center gap-2 text-sm font-bold text-muted-it transition-colors hover:text-verde">
          <ArrowLeft className="h-4 w-4" aria-hidden="true" /> Tutti gli esami
        </button>
        <p className="mb-4 rounded-2xl border border-oro/30 bg-oro-tenue p-4 text-sm text-oro-scuro dark:text-oro">
          🏁 <strong>Esame di livello {examLevel}</strong>: 12 preguntas. Necesitas <strong>80%</strong> (10/12) para
          obtener el certificado. Buonafortuna — <em>in bocca al lupo!</em>
        </p>
        <QuizEngine
          exercises={examExercises}
          title={`Esame finale · ${examLevel}`}
          kind="examen"
          label={`Examen ${examLevel}`}
          xpPerCorrect={20}
          skill="grammatica"
          onFinish={(score, total) => {
            if (score / Math.max(1, total) >= 0.8) {
              addCertificate({ id: `cert-${examLevel}`, level: examLevel, date: new Date().toISOString(), score: Math.round((score / total) * 100), label: `Certificato di completamento · Livello ${examLevel}` });
              addXp(200);
            }
          }}
        />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {CEFR_LEVELS.map((lv, i) => {
          const course = COURSES.find((c) => c.level === lv);
          const total = course?.units.reduce((n, u) => n + u.lessons.length, 0) ?? 0;
          const done = course?.units.reduce((n, u) => n + u.lessons.filter((l) => completedLessons.includes(l.id)).length, 0) ?? 0;
          const certified = certificates.some((c) => c.level === lv);
          return (
            <motion.button
              key={lv}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              onClick={() => setExamLevel(lv)}
              className={cn(
                "group rounded-3xl border-2 p-5 text-left transition-all hover:-translate-y-1 hover:shadow-lg",
                certified ? "border-oro/50 bg-oro-tenue" : "border-soft bg-surface hover:border-verde/40"
              )}
            >
              <div className="flex items-center justify-between">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-verde-tenue text-verde-scuro dark:text-verde">
                  <ScrollText className="h-5 w-5" aria-hidden="true" />
                </span>
                {certified ? (
                  <span className="flex items-center gap-1 rounded-full bg-oro px-2.5 py-1 text-[10px] font-bold text-white">🏆 certificato</span>
                ) : (
                  <span className="rounded-full bg-inchiostro/5 px-2.5 py-1 font-mono text-[10px] font-bold text-muted-it dark:bg-inchiostro/15">{done}/{total} lezioni</span>
                )}
              </div>
              <p className="mt-3.5 font-display text-2xl font-bold">Esame {lv}</p>
              <p className="mt-1 text-sm text-muted-it">{LEVEL_LABELS[lv]} · 12 domande · 80% per superarlo</p>
              <p className="mt-2.5 text-xs font-bold text-verde-scuro group-hover:underline dark:text-verde">Inizia l'esame →</p>
            </motion.button>
          );
        })}
      </div>

      <div className="rounded-3xl border border-soft bg-surface p-6">
        <h2 className="flex items-center gap-2 font-display text-xl font-semibold">
          <GraduationCap className="h-5 w-5 text-verde" aria-hidden="true" /> Come funziona la certificazione
        </h2>
        <ol className="mt-4 grid gap-3 sm:grid-cols-3">
          {[
            ["1 · Estudia", "Completa las lecciones del nivel en Cursos."],
            ["2 · Examínate", "Supera el examen de nivel con 80% o más."],
            ["3 · Certifica", "Descarga tu certificado con tu nombre y puntuación."],
          ].map(([t, d]) => (
            <li key={t} className="rounded-2xl bg-crema-scura p-4 dark:bg-inchiostro/10">
              <p className="font-bold">{t}</p>
              <p className="mt-1 text-sm text-muted-it">{d}</p>
            </li>
          ))}
        </ol>
        <p className="mt-4 text-xs leading-relaxed text-muted-it">
          Nota: los certificados de esta plataforma son motivacionales y no sustituyen las certificaciones
          oficiales (CILS, CELI, PLIDA, Cert.it). Te preparan, eso sí, de maravilla para ellas.
        </p>
      </div>
    </div>
  );
}

/* ════════ Vista: Certificados ════════ */

export function CertificatesView() {
  const certificates = useLms((s) => s.certificates);
  const userName = useLms((s) => s.userName);
  const navigate = useLms((s) => s.navigate);

  const download = (cert: { level: string; date: string; score: number }) => {
    const canvas = document.createElement("canvas");
    canvas.width = 1600; canvas.height = 1130;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // fondo crema
    ctx.fillStyle = "#faf6ee";
    ctx.fillRect(0, 0, 1600, 1130);
    // marco doble
    ctx.strokeStyle = "#128a54"; ctx.lineWidth = 14; ctx.strokeRect(46, 46, 1508, 1038);
    ctx.strokeStyle = "#c9862b"; ctx.lineWidth = 3; ctx.strokeRect(74, 74, 1452, 982);
    // banda tricolor
    ctx.fillStyle = "#128a54"; ctx.fillRect(74, 74, 484, 16);
    ctx.fillStyle = "#ece7dc"; ctx.fillRect(558, 74, 484, 16);
    ctx.fillStyle = "#c0392b"; ctx.fillRect(1042, 74, 484, 16);

    ctx.textAlign = "center";
    ctx.fillStyle = "#26221e";
    ctx.font = "600 54px Georgia, serif";
    ctx.fillText("ITALIANO MASTER", 800, 220);
    ctx.font = "italic 34px Georgia, serif";
    ctx.fillStyle = "#0a5c38";
    ctx.fillText("La tua strada da A1 a C2", 800, 272);

    ctx.fillStyle = "#26221e";
    ctx.font = "30px Georgia, serif";
    ctx.fillText("Si certifica che", 800, 380);
    ctx.font = "bold 76px Georgia, serif";
    ctx.fillText(userName, 800, 470);
    ctx.font = "30px Georgia, serif";
    ctx.fillText("ha completato con successo il livello", 800, 550);
    ctx.font = "bold 150px Georgia, serif";
    ctx.fillStyle = "#128a54";
    ctx.fillText(cert.level, 800, 730);
    ctx.fillStyle = "#26221e";
    ctx.font = "28px Georgia, serif";
    ctx.fillText(`punteggio: ${cert.score}% · ${new Date(cert.date).toLocaleDateString("es", { day: "numeric", month: "long", year: "numeric" })}`, 800, 800);

    ctx.font = "italic 26px Georgia, serif";
    ctx.fillStyle = "#6b6459";
    ctx.fillText("“Impara l'italiano come si impara una canzone”", 800, 900);
    ctx.font = "22px Georgia, serif";
    ctx.fillText("Marco · Tutor IA · Italiano Master LMS", 800, 970);

    const link = document.createElement("a");
    link.download = `certificato-italiano-${cert.level}.png`;
    link.href = canvas.toDataURL("image/png");
    link.click();
  };

  if (certificates.length === 0) {
    return (
      <div className="mx-auto max-w-lg rounded-3xl border border-soft bg-surface p-8 text-center">
        <p className="text-5xl" aria-hidden="true">🏆</p>
        <h2 className="mt-4 font-display text-2xl font-semibold">Nessun certificato ancora</h2>
        <p className="mt-2.5 text-sm leading-relaxed text-muted-it">
          Supera un examen de nivel (80% o más) y tu certificado aparecerá aquí, listo para
          descargar en PNG con tu nombre y puntuación.
        </p>
        <button onClick={() => navigate("esami")} className="mt-6 inline-flex min-h-12 items-center gap-2 rounded-2xl bg-verde px-6 py-3 font-bold text-white shadow-lg shadow-verde/25 transition-all hover:scale-[1.03]">
          <ScrollText className="h-4 w-4" aria-hidden="true" /> Vai agli esami
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="grid gap-5 md:grid-cols-2">
        {certificates.map((cert, i) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
            className="overflow-hidden rounded-3xl border-2 border-oro/40 bg-surface"
          >
            {/* preview del certificado */}
            <div className="relative bg-gradient-to-br from-crema to-crema-scura p-8 text-center">
              <div className="absolute inset-x-6 top-0 h-1.5 bg-gradient-to-r from-verde via-white to-rosso" aria-hidden="true" />
              <p className="mt-3 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-muted-it">Italiano Master · LMS</p>
              <p className="mt-4 text-sm text-muted-it">si certifica che</p>
              <p className="font-display text-3xl font-semibold">{userName}</p>
              <p className="mt-1.5 text-sm text-muted-it">ha completato il livello</p>
              <p className="font-display text-6xl font-bold text-verde-scuro dark:text-verde">{cert.level}</p>
              <p className="mt-2 text-sm font-bold text-oro-scuro dark:text-oro">🏆 {cert.score}% · {new Date(cert.date).toLocaleDateString("es", { day: "numeric", month: "long", year: "numeric" })}</p>
            </div>
            <div className="flex items-center justify-between gap-3 p-4">
              <span className="flex items-center gap-2 text-xs font-bold text-muted-it">
                <Award className="h-4 w-4 text-oro" aria-hidden="true" /> Certificato di completamento
              </span>
              <button
                onClick={() => download(cert)}
                className="inline-flex min-h-10 items-center gap-2 rounded-xl bg-verde px-4 py-2 text-xs font-bold text-white transition-all hover:scale-105 dark:text-inchiostro"
              >
                <Download className="h-3.5 w-3.5" aria-hidden="true" /> Scarica PNG
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/* ════════ Vista: Configuración ════════ */

export function SettingsView() {
  const settings = useLms((s) => s.settings);
  const updateSettings = useLms((s) => s.updateSettings);
  const userName = useLms((s) => s.userName);
  const setUserName = useLms((s) => s.setUserName);
  const resetAll = useLms((s) => s.resetAll);
  const addXp = useLms((s) => s.addXp);
  const [confirmReset, setConfirmReset] = useState(false);
  const [nameDraft, setNameDraft] = useState(userName);

  const exportData = () => {
    const state = useLms.getState();
    const data = {
      userName: state.userName, level: state.level, xp: state.xp, streakCount: state.streakCount,
      completedLessons: state.completedLessons, quizHistory: state.quizHistory,
      certificates: state.certificates, srsSize: Object.keys(state.srs).length,
      exportedAt: new Date().toISOString(),
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
    const link = document.createElement("a");
    link.download = "italiano-master-progreso.json";
    link.href = URL.createObjectURL(blob);
    link.click();
  };

  return (
    <div className="mx-auto max-w-2xl space-y-6">
      {/* perfil */}
      <section className="rounded-3xl border border-soft bg-surface p-6">
        <h2 className="font-display text-xl font-semibold">Il tuo profilo</h2>
        <div className="mt-4 flex flex-wrap items-end gap-3">
          <label className="min-w-56 flex-1">
            <span className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-muted-it">Nome</span>
            <input
              type="text"
              value={nameDraft}
              onChange={(e) => setNameDraft(e.target.value)}
              className="min-h-11 w-full rounded-xl border-2 border-soft bg-crema px-4 outline-none transition-colors focus:border-verde"
              aria-label="Tu nombre"
            />
          </label>
          <button
            onClick={() => { setUserName(nameDraft); addXp(1); }}
            className="min-h-11 rounded-xl bg-verde px-5 py-2.5 text-sm font-bold text-white transition-all hover:scale-105 dark:text-inchiostro"
          >
            Salva
          </button>
        </div>
      </section>

      {/* apariencia */}
      <section className="rounded-3xl border border-soft bg-surface p-6">
        <h2 className="font-display text-xl font-semibold">Aspetto</h2>
        <div className="mt-4 space-y-5">
          <div>
            <p className="mb-2 text-xs font-bold uppercase tracking-wide text-muted-it">Tema</p>
            <div className="flex gap-2">
              {(["light", "dark"] as const).map((t) => (
                <button
                  key={t}
                  onClick={() => updateSettings({ theme: t })}
                  aria-pressed={settings.theme === t}
                  className={cn("min-h-11 flex-1 rounded-xl border-2 px-4 py-2.5 text-sm font-bold transition-all", settings.theme === t ? "border-verde bg-verde-tenue text-verde-scuro dark:text-verde" : "border-soft")}
                >
                  {t === "light" ? "☀️ Chiaro" : "🌙 Scuro"}
                </button>
              ))}
            </div>
          </div>
          <div>
            <p className="mb-2 text-xs font-bold uppercase tracking-wide text-muted-it">Dimensione del testo (accesibilidad)</p>
            <div className="flex gap-2">
              {(["md", "lg", "xl"] as const).map((t) => (
                <button
                  key={t}
                  onClick={() => updateSettings({ textSize: t })}
                  aria-pressed={settings.textSize === t}
                  className={cn("min-h-11 flex-1 rounded-xl border-2 px-4 py-2.5 font-bold transition-all", settings.textSize === t ? "border-verde bg-verde-tenue text-verde-scuro dark:text-verde" : "border-soft")}
                >
                  {t === "md" ? "A" : t === "lg" ? "A+" : "A++"}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* audio y estudio */}
      <section className="rounded-3xl border border-soft bg-surface p-6">
        <h2 className="font-display text-xl font-semibold">Audio e studio</h2>
        <div className="mt-4 space-y-5">
          <div>
            <div className="flex items-baseline justify-between">
              <label htmlFor="rate" className="text-xs font-bold uppercase tracking-wide text-muted-it">Velocità dell'audio</label>
              <span className="font-mono text-xs font-bold text-verde-scuro dark:text-verde">{settings.audioRate.toFixed(2)}×</span>
            </div>
            <input
              id="rate"
              type="range"
              min={0.6}
              max={1.2}
              step={0.05}
              value={settings.audioRate}
              onChange={(e) => updateSettings({ audioRate: parseFloat(e.target.value) })}
              className="mt-2 h-2 w-full cursor-pointer appearance-none rounded-full bg-inchiostro/10 accent-[var(--verde)] dark:bg-inchiostro/20"
            />
            <p className="mt-1.5 text-xs text-muted-it">0.6× lento per dettati · 0.9× consigliato · 1.2× veloce</p>
          </div>
          <div>
            <p className="mb-2 text-xs font-bold uppercase tracking-wide text-muted-it">Obiettivo giornaliero</p>
            <div className="flex gap-2">
              {[60, 120, 200].map((g) => (
                <button
                  key={g}
                  onClick={() => updateSettings({ dailyGoalXp: g })}
                  aria-pressed={settings.dailyGoalXp === g}
                  className={cn("min-h-11 flex-1 rounded-xl border-2 px-3 py-2.5 text-sm font-bold transition-all", settings.dailyGoalXp === g ? "border-oro bg-oro-tenue text-oro-scuro dark:text-oro" : "border-soft")}
                >
                  {g} XP/giorno
                </button>
              ))}
            </div>
          </div>
          <label className="flex items-center justify-between gap-3 rounded-xl bg-crema-scura px-4 py-3.5 dark:bg-inchiostro/10">
            <span className="text-sm font-semibold">Sottotitoli (traduzione ES) nei dialoghi</span>
            <input
              type="checkbox"
              checked={settings.showSubtitles}
              onChange={(e) => updateSettings({ showSubtitles: e.target.checked })}
              className="h-5 w-5 accent-[var(--verde)]"
            />
          </label>
        </div>
      </section>

      {/* datos */}
      <section className="rounded-3xl border border-soft bg-surface p-6">
        <h2 className="font-display text-xl font-semibold">I tuoi dati</h2>
        <p className="mt-1.5 text-sm leading-relaxed text-muted-it">
          Todo tu progreso se guarda localmente en tu navegador (localStorage). Sin cuentas, sin nube:
          tus datos son tuyos.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <button onClick={exportData} className="inline-flex min-h-11 items-center gap-2 rounded-xl border-2 border-verde/40 bg-verde-tenue px-5 py-2.5 text-sm font-bold text-verde-scuro transition-all hover:scale-105 dark:text-verde">
            <Download className="h-4 w-4" aria-hidden="true" /> Esporta progressi (JSON)
          </button>
          {!confirmReset ? (
            <button onClick={() => setConfirmReset(true)} className="inline-flex min-h-11 items-center gap-2 rounded-xl border-2 border-rosso/40 bg-rosso-tenue px-5 py-2.5 text-sm font-bold text-rosso-scuro transition-all hover:scale-105 dark:text-rosso">
              Azzera tutto
            </button>
          ) : (
            <div className="flex items-center gap-2 rounded-xl border-2 border-rosso bg-rosso-tenue px-4 py-2.5">
              <span className="text-sm font-bold text-rosso-scuro dark:text-rosso">Sicuro?</span>
              <button onClick={() => { resetAll(); setConfirmReset(false); }} className="min-h-9 rounded-lg bg-rosso px-3 py-1.5 text-xs font-bold text-white">Sì, azzera</button>
              <button onClick={() => setConfirmReset(false)} className="min-h-9 rounded-lg border border-rosso/40 px-3 py-1.5 text-xs font-bold text-rosso-scuro dark:text-rosso">No</button>
            </div>
          )}
        </div>
      </section>

      {/* accesibilidad info */}
      <section className="rounded-3xl border border-soft bg-surface p-6">
        <h2 className="font-display text-xl font-semibold">Accessibilità</h2>
        <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted-it">
          <li>⌨️ Navegación completa por teclado: todas las secciones y botones son enfocables.</li>
          <li>🔊 Audio con control de velocidad (0.6×–1.2×) para dictados y escucha.</li>
          <li>👁️ Tres tamaños de texto (A / A+ / A++) que escalan toda la interfaz.</li>
          <li>🌙 Modo oscuro con paleta cálida italiana en ambas variantes.</li>
          <li>📱 Diseño responsive: móvil, tablet y escritorio.</li>
        </ul>
      </section>
    </div>
  );
}
