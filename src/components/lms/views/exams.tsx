"use client";

import { useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Award, Copy, Check, CreditCard, Crown, Download, GraduationCap, Headphones, KeyRound, Landmark, Lock, ScrollText, ShieldCheck, Trophy, Upload, Wallet } from "lucide-react";
import { CEFR_LEVELS, LEVEL_LABELS, type CefrLevel } from "@/lib/lms/types";
import { exercisesByLevel } from "@/lib/lms/exercises";
import { COURSES } from "@/lib/lms/courses";
import { useLms } from "@/lib/lms/store";
import { PLANS, levelAllowed, requiredPlanForLevel, planLimits } from "@/lib/lms/plans";
import { VOCAB_BY_ID } from "@/lib/lms/vocabulary";
import { QuizEngine } from "../quiz-engine";
import { PlanChip } from "../plan-badge";
import { cn } from "@/lib/utils";

/* Hash del PIN de bloqueo: SHA-256(PIN + salt) vía WebCrypto (nunca el PIN en claro) */
async function hashPin(pin: string, salt: string): Promise<string> {
  const data = new TextEncoder().encode(`im-pin:${salt}:${pin}`);
  const digest = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(digest)).map((b) => b.toString(16).padStart(2, "0")).join("");
}

function randomSalt(): string {
  return Array.from({ length: 12 }, () => "abcdefghijklmnopqrstuvwxyz0123456789"[Math.floor(Math.random() * 36)]).join("");
}

const PAY_METHOD_LABEL: Record<string, string> = {
  bank: "Transferencia", paypal: "PayPal", card: "Tarjeta", demo: "Demo",
};
const PAY_METHOD_ICON: Record<string, typeof Landmark> = {
  bank: Landmark, paypal: Wallet, card: CreditCard, demo: Crown,
};

/* ════════ Vista: Exámenes ════════ */

export function ExamsView() {
  const [examLevel, setExamLevel] = useState<CefrLevel | null>(null);
  const addCertificate = useLms((s) => s.addCertificate);
  const addXp = useLms((s) => s.addXp);
  const completedLessons = useLms((s) => s.completedLessons);
  const certificates = useLms((s) => s.certificates);
  const plan = useLms((s) => s.plan);
  const navigate = useLms((s) => s.navigate);

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
          const locked = !levelAllowed(plan, lv);
          const required = PLANS[requiredPlanForLevel(lv)];
          return (
            <motion.button
              key={lv}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              onClick={() => (locked ? navigate("piani") : setExamLevel(lv))}
              className={cn(
                "group relative rounded-3xl border-2 p-5 text-left transition-all",
                locked
                  ? "border-dashed border-oro/50 bg-oro-tenue/25 dark:bg-oro-tenue/10"
                  : certified
                    ? "border-oro/50 bg-oro-tenue hover:-translate-y-1 hover:shadow-lg"
                    : "border-soft bg-surface hover:-translate-y-1 hover:shadow-lg"
              )}
            >
              {locked && (
                <span className="absolute right-4 top-4 z-10 inline-flex items-center gap-1 rounded-full plan-gold-bg px-2.5 py-1 text-[10px] font-bold text-white shadow-md">
                  🔒 {required.name}
                </span>
              )}
              <div className={cn("flex items-center justify-between", locked && "opacity-50")}>
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-verde-tenue text-verde-scuro dark:text-verde">
                  <ScrollText className="h-5 w-5" aria-hidden="true" />
                </span>
                {locked ? null : certified ? (
                  <span className="flex items-center gap-1 rounded-full bg-oro px-2.5 py-1 text-[10px] font-bold text-white">🏆 certificato</span>
                ) : (
                  <span className="rounded-full bg-inchiostro/5 px-2.5 py-1 font-mono text-[10px] font-bold text-muted-it dark:bg-inchiostro/15">{done}/{total} lezioni</span>
                )}
              </div>
              <p className={cn("mt-3.5 font-display text-2xl font-bold", locked && "opacity-70")}>Esame {lv}</p>
              <p className="mt-1 text-sm text-muted-it">{locked ? `🔒 Sblocca con ${required.name}` : `${LEVEL_LABELS[lv]} · 12 domande · 80% per superarlo`}</p>
              {!locked && <p className="mt-2.5 text-xs font-bold text-verde-scuro group-hover:underline dark:text-verde">Inizia l'esame →</p>}
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

function verificationCode(cert: { id: string; level: string; date: string }): string {
  let h = 0;
  const s = `${cert.id}|${cert.level}|${cert.date}`;
  for (let i = 0; i < s.length; i++) h = ((h * 31) + s.charCodeAt(i)) >>> 0;
  const part = (n: number) => n.toString(36).toUpperCase().padStart(4, "0").slice(0, 4);
  return `ITM-${part(h & 0xffff)}-${part((h >> 16) & 0xffff)}`;
}

export function CertificatesView() {
  const certificates = useLms((s) => s.certificates);
  const userName = useLms((s) => s.userName);
  const navigate = useLms((s) => s.navigate);
  const remoteConfig = useLms((s) => s.remoteConfig);
  const plan = useLms((s) => s.plan);
  const verified = planLimits(plan).verifiedCerts;

  const download = (cert: { id: string; level: string; date: string; score: number }) => {
    const canvas = document.createElement("canvas");
    canvas.width = 1600; canvas.height = 1130;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const code = verificationCode(cert);

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
    ctx.fillText(verified ? "ITALIANO MASTER · PLATINUM" : "ITALIANO MASTER", 800, 220);
    ctx.font = "italic 34px Georgia, serif";
    ctx.fillStyle = "#0a5c38";
    ctx.fillText("La tua strada da A1 a C2", 800, 272);

    ctx.fillStyle = "#26221e";
    ctx.font = "30px Georgia, serif";
    ctx.fillText("si certifica che", 800, 380);
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

    if (verified) {
      // cita un poco más arriba
      ctx.font = "italic 26px Georgia, serif";
      ctx.fillStyle = "#6b6459";
      ctx.fillText("“Impara l'italiano come si impara una canzone”", 800, 872);
      // banda verificada
      const grd = ctx.createLinearGradient(300, 0, 1300, 0);
      grd.addColorStop(0, "#c9862b"); grd.addColorStop(0.5, "#f0c558"); grd.addColorStop(1, "#c9862b");
      ctx.fillStyle = grd;
      ctx.fillRect(320, 902, 960, 46);
      ctx.fillStyle = "#26221e";
      ctx.font = "bold 24px Georgia, serif";
      ctx.fillText("✔ CERTIFICATO VERIFICATO · ITALIANO MASTER PLATINUM", 800, 934);
      ctx.fillStyle = "#9c6512";
      ctx.font = "21px monospace";
      ctx.fillText(`Codice di verifica: ${code}`, 800, 986);
      ctx.fillStyle = "#6b6459";
      ctx.font = "22px Georgia, serif";
      ctx.fillText("Marco · Tutor IA · Italiano Master LMS", 800, 1030);
    } else {
      ctx.font = "italic 26px Georgia, serif";
      ctx.fillStyle = "#6b6459";
      ctx.fillText("“Impara l'italiano come si impara una canzone”", 800, 900);
      ctx.font = "22px Georgia, serif";
      ctx.fillText("Marco · Tutor IA · Italiano Master LMS", 800, 970);
    }

    const link = document.createElement("a");
    link.download = `certificato-italiano-${cert.level}${verified ? "-verificato" : ""}.png`;
    link.href = canvas.toDataURL("image/png");
    link.click();
  };

  if (certificates.length === 0) {
    // función desactivada desde el Panel Admin (tras todos los hooks)
  if (remoteConfig && !remoteConfig.features.certificates) {
    return (
      <div className="mx-auto max-w-lg rounded-3xl border border-soft bg-surface p-8 text-center">
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-inchiostro/10 text-2xl">🏆</span>
        <h2 className="mt-4 font-display text-xl font-semibold">Certificados desactivados</h2>
        <p className="mt-2 text-sm leading-relaxed text-muted-it">
          La administración ha desactivado la emisión de certificados. Podrás seguir estudiando y haciendo exámenes; tu progreso se guarda igualmente.
        </p>
        <button onClick={() => navigate("inicio")} className="mt-5 inline-flex min-h-11 items-center rounded-xl bg-verde px-5 py-2.5 text-sm font-bold text-white shadow-md shadow-verde/25 hover:bg-verde-scuro">
          Torna all'inizio
        </button>
      </div>
    );
  }

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
              <p className="mt-3 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-muted-it">Italiano Master · LMS{verified ? " · PLATINUM" : ""}</p>
              <p className="mt-4 text-sm text-muted-it">si certifica che</p>
              <p className="font-display text-3xl font-semibold">{userName}</p>
              <p className="mt-1.5 text-sm text-muted-it">ha completato il livello</p>
              <p className="font-display text-6xl font-bold text-verde-scuro dark:text-verde">{cert.level}</p>
              <p className="mt-2 text-sm font-bold text-oro-scuro dark:text-oro">🏆 {cert.score}% · {new Date(cert.date).toLocaleDateString("es", { day: "numeric", month: "long", year: "numeric" })}</p>
              {verified && (
                <p className="mt-3 inline-flex items-center gap-1.5 rounded-full plan-gold-bg px-4 py-1.5 text-[10px] font-bold text-white shadow">
                  <ShieldCheck className="h-3 w-3" aria-hidden="true" /> VERIFICATO · {verificationCode(cert)}
                </p>
              )}
            </div>
            <div className="flex items-center justify-between gap-3 p-4">
              <span className="flex items-center gap-2 text-xs font-bold text-muted-it">
                <Award className="h-4 w-4 text-oro" aria-hidden="true" /> {verified ? "Certificato verificato PLATINUM" : "Certificato di completamento"}
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
  const restoreBackup = useLms((s) => s.restoreBackup);
  const addXp = useLms((s) => s.addXp);
  const navigate = useLms((s) => s.navigate);
  const plan = useLms((s) => s.plan);
  const planSince = useLms((s) => s.planSince);
  const planBilling = useLms((s) => s.planBilling);
  const setPlan = useLms((s) => s.setPlan);
  const srs = useLms((s) => s.srs);
  const security = useLms((s) => s.security);
  const payments = useLms((s) => s.payments);
  const setSecurity = useLms((s) => s.setSecurity);
  const activatePin = useLms((s) => s.activatePin);
  const clearPinStore = useLms((s) => s.clearPin);
  const lockApp = useLms((s) => s.lockApp);
  const [confirmReset, setConfirmReset] = useState(false);
  const [backupMsg, setBackupMsg] = useState<string | null>(null);
  const backupFileRef = useRef<HTMLInputElement>(null);
  const [confirmDowngrade, setConfirmDowngrade] = useState(false);
  const [nameDraft, setNameDraft] = useState(userName);

  /* PIN flow (create/change/remove) */
  const [pinMode, setPinMode] = useState<"none" | "create" | "change" | "remove">("none");
  const [pinCurrent, setPinCurrent] = useState("");
  const [pinDraft, setPinDraft] = useState("");
  const [pinConfirm, setPinConfirm] = useState("");
  const [pinMsg, setPinMsg] = useState<string | null>(null);
  const [pinError, setPinError] = useState<string | null>(null);
  const [pinBusy, setPinBusy] = useState(false);
  const [copiedRef, setCopiedRef] = useState<string | null>(null);

  const pinValid = /^\d{4,6}$/.test(pinDraft) && pinDraft === pinConfirm;

  async function submitPin() {
    setPinError(null);
    setPinMsg(null);
    setPinBusy(true);
    try {
      if (pinMode === "create") {
        if (!pinValid) throw new Error("El PIN debe tener 4-6 dígitos y coincidir en ambos campos.");
        const salt = randomSalt();
        const hash = await hashPin(pinDraft, salt);
        activatePin(hash, salt);
        setPinMsg("PIN activado: la app se bloqueará con este código.");
      } else if (pinMode === "change") {
        if (!security.pinHash || !security.pinSalt) throw new Error("No hay PIN activo.");
        const currentHash = await hashPin(pinCurrent, security.pinSalt);
        if (currentHash !== security.pinHash) throw new Error("El PIN actual no es correcto.");
        if (!pinValid) throw new Error("El nuevo PIN debe tener 4-6 dígitos y coincidir.");
        const salt = randomSalt();
        const hash = await hashPin(pinDraft, salt);
        activatePin(hash, salt);
        setPinMsg("PIN actualizado correctamente.");
      } else if (pinMode === "remove") {
        if (!security.pinHash || !security.pinSalt) throw new Error("No hay PIN activo.");
        const currentHash = await hashPin(pinCurrent, security.pinSalt);
        if (currentHash !== security.pinHash) throw new Error("El PIN actual no es correcto.");
        clearPinStore();
        setPinMsg("PIN desactivado.");
      }
      setPinMode("none");
      setPinCurrent("");
      setPinDraft("");
      setPinConfirm("");
    } catch (err) {
      setPinError(err instanceof Error ? err.message : "Error");
    } finally {
      setPinBusy(false);
    }
  }

  const planDef = PLANS[plan];

  /* v8.0 · Backup completo: SOLO progreso (sin cuenta, seguridad, plan ni pagos) */
  const exportData = () => {
    const s = useLms.getState();
    const data = {
      app: "italiano-master", backup: 2, exportedAt: new Date().toISOString(),
      userName: s.userName, level: s.level,
      xp: s.xp, streakCount: s.streakCount, lastStudyDate: s.lastStudyDate,
      studyDays: s.studyDays, dailyXp: s.dailyXp, dailyXpDate: s.dailyXpDate,
      weekXp: s.weekXp, weekKey: s.weekKey, streakFreezes: s.streakFreezes, lastFreezeDate: s.lastFreezeDate,
      completedLessons: s.completedLessons, completedUnits: s.completedUnits,
      quizHistory: s.quizHistory, certificates: s.certificates, writingHistory: s.writingHistory,
      srs: s.srs, errorLog: s.errorLog, skillStats: s.skillStats, counters: s.counters,
      importedTexts: s.importedTexts, dictFavorites: s.dictFavorites, dictHistory: s.dictHistory,
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
    const link = document.createElement("a");
    link.download = `italiano-master-backup-${new Date().toISOString().slice(0, 10)}.json`;
    link.href = URL.createObjectURL(blob);
    link.click();
    setBackupMsg("Backup scaricato ✓ — consérvalo en lugar seguro.");
  };

  const importBackup = async (file: File) => {
    setBackupMsg(null);
    try {
      const raw = JSON.parse(await file.text());
      const data = (raw && typeof raw === "object" && raw.state && typeof raw.state === "object") ? raw.state : raw;
      if (typeof data.xp !== "number" || typeof data.srs !== "object" || data.srs === null) {
        throw new Error("Formato no reconocido");
      }
      restoreBackup(data);
      setBackupMsg(`Backup ripristinato ✓ (${data.xp} XP · ${Object.keys(data.srs).length} carte · racha ${data.streakCount ?? 0})`);
    } catch (err) {
      setBackupMsg(err instanceof Error ? `File non valido: ${err.message}` : "File non valido");
    }
  };

  const exportPack = () => {
    const state = useLms.getState();
    const srsWords = Object.keys(state.srs).map((id) => VOCAB_BY_ID[id]).filter(Boolean);
    const data = {
      pack: "ITALIANO MASTER · PLATINUM Offline Pack",
      version: 1,
      exportedAt: new Date().toISOString(),
      user: { name: state.userName, level: state.level, xp: state.xp, plan: state.plan.toUpperCase() },
      stats: { completedLessons: state.completedLessons.length, quizzes: state.quizHistory.length, certificates: state.certificates.length },
      srs: state.srs,
      parole: srsWords.map((w) => ({ it: w.it, es: w.es, pron: w.pron, esempio: w.example.it })),
      certificati: state.certificates,
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
    const link = document.createElement("a");
    link.download = "italiano-master-platinum-pack.json";
    link.href = URL.createObjectURL(blob);
    link.click();
  };

  return (
    <div className="mx-auto max-w-2xl space-y-6">
      {/* ── abbonamento ── */}
      <section className="overflow-hidden rounded-3xl border-2 border-soft bg-surface">
        <div className={cn("p-6", plan === "platinum" && "plan-platinum-bg")}>
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3.5">
              <span className="text-4xl" aria-hidden="true">{planDef.emoji}</span>
              <div>
                <p className={cn("font-display text-2xl font-bold leading-tight", plan === "platinum" && "text-inchiostro")}
                  >Piano {planDef.name}</p>
                <p className={cn("text-xs", plan === "platinum" ? "text-inchiostro/70" : "text-muted-it")}>
                  {planDef.tagline}
                  {planSince && ` · attivo dal ${new Date(planSince).toLocaleDateString("es", { day: "numeric", month: "short", year: "numeric" })}`}
                  {planBilling && ` · ${planBilling === "monthly" ? "mensile" : "annuale"}`}
                </p>
              </div>
            </div>
            <PlanChip onClick={() => navigate("piani")} />
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-2.5 border-t border-soft p-4">
          <button
            onClick={() => navigate("piani")}
            className="inline-flex min-h-11 items-center gap-2 rounded-xl plan-gold-bg px-5 py-2.5 text-sm font-bold text-white shadow-md shadow-oro/25 transition-all hover:scale-105"
          >
            <Crown className="h-4 w-4" aria-hidden="true" /> Gestisci i piani
          </button>
          {plan !== "free" && (
            !confirmDowngrade ? (
              <button
                onClick={() => setConfirmDowngrade(true)}
                className="inline-flex min-h-11 items-center gap-2 rounded-xl border-2 border-soft px-4 py-2.5 text-sm font-bold text-muted-it transition-all hover:border-rosso/40 hover:text-rosso"
              >
                Torna a FREE
              </button>
            ) : (
              <span className="inline-flex items-center gap-2 rounded-xl border-2 border-rosso/50 bg-rosso-tenue px-4 py-2 text-xs font-bold text-rosso-scuro dark:text-rosso">
                Sicuro?
                <button onClick={() => { setPlan("free", null); setConfirmDowngrade(false); }} className="rounded-lg bg-rosso px-3 py-1.5 text-white">Sì</button>
                <button onClick={() => setConfirmDowngrade(false)} className="rounded-lg border border-rosso/40 px-3 py-1.5">No</button>
              </span>
            )
          )}
        </div>
        {planDef.limits.prioritySupport && (
          <div className="flex items-start gap-3 border-t border-soft bg-verde-tenue/50 p-4 dark:bg-verde-tenue/15">
            <Headphones className="mt-0.5 h-5 w-5 shrink-0 text-verde" aria-hidden="true" />
            <div>
              <p className="text-sm font-bold">Supporto prioritario 24/7 attivo</p>
              <p className="mt-0.5 text-xs leading-relaxed text-muted-it">Come utente PLATINUM le tue richieste hanno risposta media in meno di 2 ore (demo).</p>
            </div>
          </div>
        )}
      </section>

      {/* ── sicurezza estrema (v5.0) ── */}
      <section className="rounded-3xl border-2 border-verde/40 bg-verde-tenue/20 p-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h2 className="flex items-center gap-2 font-display text-xl font-semibold"><ShieldCheck className="h-5 w-5 text-verde-scuro dark:text-verde" aria-hidden="true" /> Sicurezza estrema</h2>
          {security.pinHash ? (
            <span className="inline-flex items-center gap-1.5 rounded-full bg-verde px-3 py-1 text-[11px] font-bold text-white">
              <Lock className="h-3 w-3" aria-hidden="true" /> PIN attivo
            </span>
          ) : (
            <span className="rounded-full bg-inchiostro/10 px-3 py-1 text-[11px] font-bold text-muted-it">nessun PIN</span>
          )}
        </div>
        <p className="mt-2 text-sm leading-relaxed text-muted-it">
          Bloquea la app con un PIN de 4-6 dígitos: tus datos de progreso quedan protegidos aunque alguien tome tu dispositivo.
          El PIN se guarda solo como hash SHA-256 con sal — nunca en texto claro — y tras 5 intentos fallidos se activa un bloqueo temporal.
        </p>

        {security.pinHash ? (
          <div className="mt-4 space-y-3">
            <div className="flex flex-wrap gap-2.5">
              <button onClick={() => { setPinMode("change"); setPinError(null); setPinMsg(null); }} className="inline-flex min-h-11 items-center gap-2 rounded-xl border-2 border-verde/40 bg-verde-tenue px-4 py-2.5 text-sm font-bold text-verde-scuro transition-all hover:scale-105 dark:text-verde">
                <KeyRound className="h-4 w-4" aria-hidden="true" /> Cambia PIN
              </button>
              <button onClick={() => { setPinMode("remove"); setPinError(null); setPinMsg(null); }} className="inline-flex min-h-11 items-center gap-2 rounded-xl border-2 border-rosso/40 bg-rosso-tenue px-4 py-2.5 text-sm font-bold text-rosso-scuro transition-all hover:scale-105 dark:text-rosso">
                Desactiva PIN
              </button>
              <button onClick={lockApp} className="inline-flex min-h-11 items-center gap-2 rounded-xl bg-inchiostro px-4 py-2.5 text-sm font-bold text-crema transition-all hover:scale-105">
                <Lock className="h-4 w-4" aria-hidden="true" /> Bloquea ora
              </button>
            </div>

            {pinMode === "change" && (
              <div className="grid gap-3 rounded-2xl border border-soft bg-surface p-4 sm:grid-cols-3">
                <label className="">
                  <span className="mb-1 block text-xs font-bold uppercase tracking-wide text-muted-it">PIN attuale</span>
                  <input type="password" inputMode="numeric" value={pinCurrent} onChange={(e) => setPinCurrent(e.target.value.replace(/\D/g, "").slice(0, 6))} className="min-h-11 w-full rounded-xl border-2 border-soft bg-crema px-4 font-mono tracking-[0.3em] outline-none focus:border-verde" aria-label="PIN actual" />
                </label>
                <label>
                  <span className="mb-1 block text-xs font-bold uppercase tracking-wide text-muted-it">Nuovo PIN</span>
                  <input type="password" inputMode="numeric" value={pinDraft} onChange={(e) => setPinDraft(e.target.value.replace(/\D/g, "").slice(0, 6))} className="min-h-11 w-full rounded-xl border-2 border-soft bg-crema px-4 font-mono tracking-[0.3em] outline-none focus:border-verde" aria-label="Nuevo PIN" />
                </label>
                <label>
                  <span className="mb-1 block text-xs font-bold uppercase tracking-wide text-muted-it">Ripeti</span>
                  <input type="password" inputMode="numeric" value={pinConfirm} onChange={(e) => setPinConfirm(e.target.value.replace(/\D/g, "").slice(0, 6))} className="min-h-11 w-full rounded-xl border-2 border-soft bg-crema px-4 font-mono tracking-[0.3em] outline-none focus:border-verde" aria-label="Repite nuevo PIN" />
                </label>
                <div className="sm:col-span-3 flex justify-end">
                  <button onClick={submitPin} disabled={pinBusy} className="min-h-11 rounded-xl bg-verde px-5 py-2.5 text-sm font-bold text-white transition-all hover:scale-105 disabled:opacity-50 dark:text-inchiostro">
                    {pinBusy ? "Verificando…" : "Guarda nuovo PIN"}
                  </button>
                </div>
              </div>
            )}

            {pinMode === "remove" && (
              <div className="flex flex-wrap items-end gap-3 rounded-2xl border border-rosso/30 bg-rosso-tenue/30 p-4">
                <label className="min-w-40 flex-1">
                  <span className="mb-1 block text-xs font-bold uppercase tracking-wide text-rosso-scuro dark:text-rosso">PIN attuale per conferma</span>
                  <input type="password" inputMode="numeric" value={pinCurrent} onChange={(e) => setPinCurrent(e.target.value.replace(/\D/g, "").slice(0, 6))} className="min-h-11 w-full rounded-xl border-2 border-rosso/30 bg-surface px-4 font-mono tracking-[0.3em] outline-none focus:border-rosso" aria-label="PIN actual para confirmar" />
                </label>
                <button onClick={submitPin} disabled={pinBusy} className="min-h-11 rounded-xl bg-rosso px-5 py-2.5 text-sm font-bold text-white transition-all hover:scale-105 disabled:opacity-50">
                  {pinBusy ? "Verificando…" : "Disattiva"}
                </button>
              </div>
            )}

            <div>
              <p className="mb-2 text-xs font-bold uppercase tracking-wide text-muted-it">Blocco automatico dopo inattività</p>
              <div className="flex flex-wrap gap-2">
                {([
                  { v: 0, l: "Mai" },
                  { v: 1, l: "1 min" },
                  { v: 5, l: "5 min" },
                  { v: 15, l: "15 min" },
                ] as const).map((o) => (
                  <button
                    key={o.v}
                    onClick={() => setSecurity({ autoLockMin: o.v })}
                    aria-pressed={security.autoLockMin === o.v}
                    className={cn("min-h-11 flex-1 rounded-xl border-2 px-3 py-2.5 text-sm font-bold transition-all", security.autoLockMin === o.v ? "border-verde bg-verde-tenue text-verde-scuro dark:text-verde" : "border-soft")}
                  >
                    {o.l}
                  </button>
                ))}
              </div>
            </div>

            <label className="flex items-center justify-between gap-3 rounded-xl bg-crema-scura px-4 py-3.5 dark:bg-inchiostro/10">
              <span className="text-sm font-semibold">Richiedi il PIN a ogni avvio dell'app</span>
              <input type="checkbox" checked={security.lockOnStart} onChange={(e) => setSecurity({ lockOnStart: e.target.checked })} className="h-5 w-5 accent-[var(--verde)]" />
            </label>
          </div>
        ) : pinMode === "create" ? (
          <div className="mt-4 grid gap-3 rounded-2xl border border-soft bg-surface p-4 sm:grid-cols-2">
            <label>
              <span className="mb-1 block text-xs font-bold uppercase tracking-wide text-muted-it">Nuovo PIN (4-6 cifre)</span>
              <input type="password" inputMode="numeric" value={pinDraft} onChange={(e) => setPinDraft(e.target.value.replace(/\D/g, "").slice(0, 6))} className="min-h-11 w-full rounded-xl border-2 border-soft bg-crema px-4 font-mono tracking-[0.3em] outline-none focus:border-verde" aria-label="Nuevo PIN" />
            </label>
            <label>
              <span className="mb-1 block text-xs font-bold uppercase tracking-wide text-muted-it">Ripeti PIN</span>
              <input type="password" inputMode="numeric" value={pinConfirm} onChange={(e) => setPinConfirm(e.target.value.replace(/\D/g, "").slice(0, 6))} className="min-h-11 w-full rounded-xl border-2 border-soft bg-crema px-4 font-mono tracking-[0.3em] outline-none focus:border-verde" aria-label="Repite PIN" />
            </label>
            <div className="sm:col-span-2 flex justify-end gap-2">
              <button onClick={() => setPinMode("none")} className="min-h-11 rounded-xl border-2 border-soft px-4 py-2.5 text-sm font-bold">Annulla</button>
              <button onClick={submitPin} disabled={pinBusy} className="min-h-11 rounded-xl bg-verde px-5 py-2.5 text-sm font-bold text-white transition-all hover:scale-105 disabled:opacity-50 dark:text-inchiostro">
                {pinBusy ? "Attivando…" : "Attiva PIN"}
              </button>
            </div>
          </div>
        ) : (
          <button onClick={() => { setPinMode("create"); setPinError(null); setPinMsg(null); }} className="mt-4 inline-flex min-h-12 items-center gap-2 rounded-xl bg-verde px-5 py-3 text-sm font-bold text-white shadow-md shadow-verde/25 transition-all hover:scale-105 dark:text-inchiostro">
            <KeyRound className="h-4 w-4" aria-hidden="true" /> Attiva blocco con PIN
          </button>
        )}

        {pinError && <p role="alert" className="mt-3 rounded-xl bg-rosso-tenue px-3 py-2 text-xs font-semibold text-rosso-scuro dark:text-rosso">{pinError}</p>}
        {pinMsg && <p role="status" className="mt-3 rounded-xl bg-verde-tenue px-3 py-2 text-xs font-semibold text-verde-scuro dark:text-verde">{pinMsg}</p>}

        <label className="mt-4 flex items-center justify-between gap-3 rounded-xl bg-crema-scura px-4 py-3.5 dark:bg-inchiostro/10">
          <span className="min-w-0">
            <span className="block text-sm font-semibold">Modalità privacy</span>
            <span className="block text-[11px] text-muted-it">Nasconde nombre y estadísticas en la interfaz (hombros ajenos, capturas)</span>
          </span>
          <input type="checkbox" checked={security.privacyMode} onChange={(e) => setSecurity({ privacyMode: e.target.checked })} className="h-5 w-5 accent-[var(--verde)]" />
        </label>
      </section>

      {/* ── pagamenti (v5.0) ── */}
      <section className="rounded-3xl border border-soft bg-surface p-6">
        <h2 className="flex items-center gap-2 font-display text-xl font-semibold"><Landmark className="h-5 w-5 text-oro-scuro dark:text-oro" aria-hidden="true" /> Pagamenti e fatturazione</h2>
        <p className="mt-1.5 text-sm leading-relaxed text-muted-it">
          Historial de pagos de tus suscripciones con su referencia única. La configuración de la
          cuenta bancaria (IBAN, PayPal, tarjeta) la gestiona la administración desde el Panel Admin.
        </p>
        {payments.length === 0 ? (
          <p className="mt-4 rounded-2xl border-2 border-dashed border-soft px-4 py-6 text-center text-sm text-muted-it">
            Nessun pagamento registrato. Attiva un piano da «Piani PRO» per vedere qui le tue ricevute.
          </p>
        ) : (
          <ul className="mt-4 max-h-72 space-y-2 overflow-y-auto pr-1 scrollbar-thin">
            {payments.map((p) => {
              const M = PAY_METHOD_ICON[p.method] ?? Crown;
              return (
                <li key={p.id} className="flex items-center gap-3 rounded-2xl border border-soft bg-crema-scura/50 p-3.5 dark:bg-inchiostro/5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-inchiostro/10 text-inchiostro/70 dark:bg-inchiostro/20">
                    <M className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="flex flex-wrap items-center gap-2 text-sm font-bold">
                      {PLANS[p.plan].name} · {p.billing === "yearly" ? "Annuale" : "Mensile"}
                      <span className={cn("rounded-full px-2 py-0.5 text-[10px] font-bold", p.status === "completato" ? "bg-verde-tenue text-verde-scuro dark:text-verde" : "bg-oro-tenue text-oro-scuro dark:text-oro")}>
                        {p.status === "completato" ? "completato" : "in attesa"}
                      </span>
                    </p>
                    <p className="truncate text-[11px] text-muted-it">
                      {new Date(p.date).toLocaleDateString("es", { day: "numeric", month: "short", year: "numeric" })} · {PAY_METHOD_LABEL[p.method]} · {p.amount.toFixed(2).replace(".", ",")} {p.currency}
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      void navigator.clipboard.writeText(p.reference).catch(() => undefined);
                      setCopiedRef(p.id);
                      setTimeout(() => setCopiedRef(null), 1500);
                    }}
                    title="Copia referencia"
                    className="inline-flex shrink-0 items-center gap-1.5 rounded-xl border border-soft px-2.5 py-2 font-mono text-[11px] font-bold text-muted-it transition-colors hover:text-verde"
                  >
                    {p.reference}
                    {copiedRef === p.id ? <Check className="h-3 w-3 text-verde" aria-hidden="true" /> : <Copy className="h-3 w-3" aria-hidden="true" />}
                  </button>
                </li>
              );
            })}
          </ul>
        )}
      </section>

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
            <div className="flex flex-wrap gap-2">
              {[60, 120, 200].map((g) => (
                <button
                  key={g}
                  onClick={() => updateSettings({ dailyGoalXp: g })}
                  aria-pressed={settings.dailyGoalXp === g}
                  className={cn("min-h-11 flex-1 rounded-xl border-2 px-3 py-2.5 text-sm font-bold transition-all", settings.dailyGoalXp === g ? "border-oro bg-oro-tenue text-oro-scuro dark:text-oro" : "border-soft")}
                >
                  {g} XP<span className="hidden sm:inline">/giorno</span>
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
            <Download className="h-4 w-4" aria-hidden="true" /> Backup completo (JSON)
          </button>
          <button
            onClick={() => backupFileRef.current?.click()}
            className="inline-flex min-h-11 items-center gap-2 rounded-xl border-2 border-verde/40 bg-surface px-5 py-2.5 text-sm font-bold text-verde-scuro transition-all hover:scale-105 dark:text-verde"
          >
            <Upload className="h-4 w-4" aria-hidden="true" /> Ripristina backup
          </button>
          <input
            ref={backupFileRef}
            type="file"
            accept="application/json,.json"
            className="hidden"
            aria-label="Seleccionar archivo de backup"
            onChange={(e) => {
              const f = e.target.files?.[0];
              if (f) void importBackup(f);
              e.target.value = "";
            }}
          />
          {planDef.limits.offlinePack ? (
            <button onClick={exportPack} className="inline-flex min-h-11 items-center gap-2 rounded-xl plan-gold-bg px-5 py-2.5 text-sm font-bold text-white shadow-md shadow-oro/25 transition-all hover:scale-105">
              <Crown className="h-4 w-4" aria-hidden="true" /> Pacchetto offline PLATINUM ({Object.keys(srs).length} parole)
            </button>
          ) : (
            <span className="inline-flex min-h-11 items-center gap-2 rounded-xl border-2 border-dashed border-oro/40 px-4 py-2.5 text-xs font-bold text-oro-scuro dark:text-oro">
              🔒 Pacchetto offline · solo PLATINUM
            </span>
          )}
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
        {backupMsg && (
          <p role="status" className={cn("mt-4 rounded-xl px-4 py-3 text-sm font-semibold", backupMsg.includes("✓") ? "bg-verde-tenue text-verde-scuro dark:text-verde" : "bg-rosso-tenue text-rosso-scuro dark:text-rosso")}>
            {backupMsg}
          </p>
        )}
        <p className="mt-4 text-xs leading-relaxed text-muted-it">
          El backup incluye TODO tu progreso (XP, racha, tarjetas SRS, lecciones, certificados, escritos, textos importados y preferiti)
          y <strong>nunca</strong> contiene cuenta, PIN, plan ni datos de pago. Restáuralo en cualquier dispositivo desde este botón.
        </p>
      </section>
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
