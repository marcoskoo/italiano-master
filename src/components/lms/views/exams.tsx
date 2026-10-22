"use client";

import { useMemo, useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Award, Bell, Copy, Check, CreditCard, Crown, Download, GraduationCap, Headphones, KeyRound, Landmark, Lock, ScrollText, ShieldCheck, Trash2, Trophy, Upload, Wallet } from "lucide-react";
import { CEFR_LEVELS, LEVEL_LABELS, type CefrLevel } from "@/lib/lms/types";
import { exercisesByLevel } from "@/lib/lms/exercises";
import { COURSES } from "@/lib/lms/courses";
import { useLms } from "@/lib/lms/store";
import { PLANS, levelAllowed, requiredPlanForLevel, planLimits } from "@/lib/lms/plans";
import { VOCAB_BY_ID } from "@/lib/lms/vocabulary";
import { pushSupported, currentSubscription, enablePush, disablePush, sendTestPush } from "@/lib/push/client";
import { QuizEngine } from "../quiz-engine";
import { PlanChip } from "../plan-badge";
import { useUi } from "@/lib/lms/ui";
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
          obtener tu attestato de finalización. Buonafortuna — <em>in bocca al lupo!</em>
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
              addCertificate({ id: `cert-${examLevel}`, level: examLevel, date: new Date().toISOString(), score: Math.round((score / total) * 100), label: `Attestato di completamento · Corso livello ${examLevel} (QCER)` });
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
                  <span className="flex items-center gap-1 rounded-full bg-oro px-2.5 py-1 text-[10px] font-bold text-white">🏆 attestato</span>
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
          <GraduationCap className="h-5 w-5 text-verde" aria-hidden="true" /> Come funzionano gli attestati
        </h2>
        <ol className="mt-4 grid gap-3 sm:grid-cols-3">
          {[
            ["1 · Estudia", "Completa las lecciones del nivel en Cursos."],
            ["2 · Examínate", "Supera el examen de nivel con 80% o más."],
            ["3 · Descarga", "Recibe tu attestato con tu nombre y puntuación."],
          ].map(([t, d]) => (
            <li key={t} className="rounded-2xl bg-crema-scura p-4 dark:bg-inchiostro/10">
              <p className="font-bold">{t}</p>
              <p className="mt-1 text-sm text-muted-it">{d}</p>
            </li>
          ))}
        </ol>
        <p className="mt-4 text-xs leading-relaxed text-muted-it">
          <strong>Nota legale:</strong> los attestati de Políglota Master son <strong>constancias de finalización</strong> del
          curso interno y de su examen — un reconocimiento motivacional de tu esfuerzo. <strong>No son certificaciones
          lingüísticas oficiales</strong> ni títulos reconocidos por Estados, universidades o empleadores: para eso existen
          CILS, CELI, PLIDA y Cert.it (exámenes oficiales con acreditación), a los que este curso te prepara de maravilla.
          Los niveles A1–C2 se citan como referencia descriptiva del contenido según el Quadro Comune Europeo di
          Riferimento (QCER), no como título otorgado. Más detalles en <em>Información legal</em>.
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
  return `PM-${part(h & 0xffff)}-${part((h >> 16) & 0xffff)}`;
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
    ctx.fillText(verified ? "POLÍGLOTA MASTER · PLATINUM" : "POLÍGLOTA MASTER", 800, 220);
    ctx.font = "italic 34px Georgia, serif";
    ctx.fillStyle = "#0a5c38";
    ctx.fillText("Il tuo percorso da A1 a C2", 800, 272);

    ctx.fillStyle = "#26221e";
    ctx.font = "30px Georgia, serif";
    ctx.fillText("attesta che", 800, 380);
    ctx.font = "bold 76px Georgia, serif";
    ctx.fillText(userName, 800, 470);
    ctx.font = "30px Georgia, serif";
    ctx.fillText("ha completato con successo il corso di livello", 800, 550);
    ctx.font = "bold 150px Georgia, serif";
    ctx.fillStyle = "#128a54";
    ctx.fillText(cert.level, 800, 730);
    ctx.fillStyle = "#26221e";
    ctx.font = "28px Georgia, serif";
    ctx.fillText(`punteggio: ${cert.score}% · ${new Date(cert.date).toLocaleDateString("es", { day: "numeric", month: "long", year: "numeric" })}`, 800, 800);
    ctx.font = "22px Georgia, serif";
    ctx.fillStyle = "#6b6459";
    ctx.fillText("Corso interno di Políglota Master · livello di riferimento QCER", 800, 840);

    if (verified) {
      // cita un poco más arriba
      ctx.font = "italic 26px Georgia, serif";
      ctx.fillStyle = "#6b6459";
      ctx.fillText("“Impara l'italiano come si impara una canzone”", 800, 892);
      // banda con codice di verifica interna (v9.34: wording legal)
      const grd = ctx.createLinearGradient(300, 0, 1300, 0);
      grd.addColorStop(0, "#c9862b"); grd.addColorStop(0.5, "#f0c558"); grd.addColorStop(1, "#c9862b");
      ctx.fillStyle = grd;
      ctx.fillRect(320, 918, 960, 42);
      ctx.fillStyle = "#26221e";
      ctx.font = "bold 22px Georgia, serif";
      ctx.fillText("ATTESTATO DI COMPLETAMENTO · CODICE DI VERIFICA INTERNA", 800, 947);
      ctx.fillStyle = "#9c6512";
      ctx.font = "21px monospace";
      ctx.fillText(`Codice interno: ${code}`, 800, 994);
      ctx.fillStyle = "#6b6459";
      ctx.font = "22px Georgia, serif";
      ctx.fillText("Políglota Master · LMS gratuito", 800, 1030);
    } else {
      ctx.font = "italic 26px Georgia, serif";
      ctx.fillStyle = "#6b6459";
      ctx.fillText("“Impara l'italiano come si impara una canzone”", 800, 900);
      ctx.font = "22px Georgia, serif";
      ctx.fillText("Políglota Master · LMS gratuito", 800, 950);
    }

    // v9.34 · disclaimer legal impreso en el propio attestato (ambas variantes)
    ctx.fillStyle = "#8a8274";
    ctx.font = "20px Georgia, serif";
    ctx.fillText("Attestato di completamento del corso interno — non costituisce certificazione linguistica ufficiale", 800, 1064);
    ctx.fillText("(per titoli validi a fini pubblici: CILS, CELI, PLIDA, Cert.it e altri esami accreditati)", 800, 1094);

    const link = document.createElement("a");
    link.download = `attestato-italiano-${cert.level}${verified ? "-verificato" : ""}.png`;
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
        {/* v9.34 · Pappagallo con pose study en el estado vacío */}
        <img src="/mascot/study.webp" alt="" aria-hidden="true" loading="lazy" className="mx-auto h-28 w-28 rounded-[1.75rem] bg-crema object-cover shadow-sm" />
        <h2 className="mt-4 font-display text-2xl font-semibold">Nessun attestato ancora</h2>
        <p className="mt-2.5 text-sm leading-relaxed text-muted-it">
          Supera un examen de nivel (80% o más) y tu attestato de finalización aparecerá aquí, listo para
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
              <p className="mt-3 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-muted-it">Políglota Master · LMS{verified ? " · PLATINUM" : ""}</p>
              <p className="mt-4 text-sm text-muted-it">attesta che</p>
              <p className="font-display text-3xl font-semibold">{userName}</p>
              <p className="mt-1.5 text-sm text-muted-it">ha completato il corso di livello</p>
              <p className="font-display text-6xl font-bold text-verde-scuro dark:text-verde">{cert.level}</p>
              <p className="mt-2 text-sm font-bold text-oro-scuro dark:text-oro">🏆 {cert.score}% · {new Date(cert.date).toLocaleDateString("es", { day: "numeric", month: "long", year: "numeric" })}</p>
              {verified && (
                <p className="mt-3 inline-flex items-center gap-1.5 rounded-full plan-gold-bg px-4 py-1.5 text-[10px] font-bold text-white shadow">
                  <ShieldCheck className="h-3 w-3" aria-hidden="true" /> VERIFICA INTERNA · {verificationCode(cert)}
                </p>
              )}
            </div>
            <div className="flex items-center justify-between gap-3 p-4">
              <span className="flex items-center gap-2 text-xs font-bold text-muted-it">
                <Award className="h-4 w-4 text-oro" aria-hidden="true" /> {verified ? "Attestato PLATINUM · verifica interna" : "Attestato di completamento"}
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
  const u = useUi();
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

  /* v9.0 · notifiche push */
  const account = useLms((s) => s.account);
  const [pushStatus, setPushStatus] = useState<"checking" | "off" | "on" | "denied" | "unsupported">("checking");
  const [pushMsg, setPushMsg] = useState<string | null>(null);
  useEffect(() => {
    let alive = true;
    const check = async () => {
      if (!pushSupported()) { if (alive) setPushStatus("unsupported"); return; }
      const sub = await currentSubscription();
      if (!alive) return;
      if (sub && Notification.permission === "granted") setPushStatus("on");
      else if (Notification.permission === "denied") setPushStatus("denied");
      else setPushStatus("off");
    };
    void check();
    return () => { alive = false; };
  }, []);
  const handleEnablePush = async () => {
    setPushMsg(null);
    const res = await enablePush(account?.username ?? null, userName);
    if (res.ok) {
      setPushStatus("on");
      setPushMsg(u.impostazioni.msgOn);
    } else {
      setPushMsg(
        res.reason === "denied" ? u.impostazioni.msgDenied
        : res.reason === "unsupported" ? u.impostazioni.msgUnsupported
        : res.reason === "nokey" ? u.impostazioni.msgNokey
        : u.impostazioni.msgFail
      );
    }
  };
  const handleDisablePush = async () => {
    setPushMsg(null);
    await disablePush();
    setPushStatus("off");
    setPushMsg(u.impostazioni.msgOff);
  };
  const handleTestPush = async () => {
    setPushMsg(null);
    const res = await sendTestPush(account?.username ?? null);
    setPushMsg(res.ok ? u.impostazioni.msgTest(res.message) : res.message);
  };

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
        if (!pinValid) throw new Error(u.impostazioni.pinMustMatch);
        const salt = randomSalt();
        const hash = await hashPin(pinDraft, salt);
        activatePin(hash, salt);
        setPinMsg(u.impostazioni.pinActivated);
      } else if (pinMode === "change") {
        if (!security.pinHash || !security.pinSalt) throw new Error(u.impostazioni.noPinActive);
        const currentHash = await hashPin(pinCurrent, security.pinSalt);
        if (currentHash !== security.pinHash) throw new Error(u.impostazioni.wrongCurrent);
        if (!pinValid) throw new Error(u.impostazioni.pinMustMatchNew);
        const salt = randomSalt();
        const hash = await hashPin(pinDraft, salt);
        activatePin(hash, salt);
        setPinMsg(u.impostazioni.pinUpdated);
      } else if (pinMode === "remove") {
        if (!security.pinHash || !security.pinSalt) throw new Error(u.impostazioni.noPinActive);
        const currentHash = await hashPin(pinCurrent, security.pinSalt);
        if (currentHash !== security.pinHash) throw new Error(u.impostazioni.wrongCurrent);
        clearPinStore();
        setPinMsg(u.impostazioni.pinRemoved);
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
      cambridgeProgress: s.cambridgeProgress,
      quizHistory: s.quizHistory, certificates: s.certificates, writingHistory: s.writingHistory,
      srs: s.srs, errorLog: s.errorLog, skillStats: s.skillStats, counters: s.counters,
      importedTexts: s.importedTexts, dictFavorites: s.dictFavorites, dictHistory: s.dictHistory,
      coins: s.coins, xpBoostUntil: s.xpBoostUntil, lastWheelDate: s.lastWheelDate,
      readingsRead: s.readingsRead, monthKey: s.monthKey, monthCounters: s.monthCounters,
      monthChallengeClaimed: s.monthChallengeClaimed, ownedTitles: s.ownedTitles, activeTitle: s.activeTitle,
      cefrSelf: s.cefrSelf, candoDone: s.candoDone,
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
    const link = document.createElement("a");
    link.download = `italiano-master-backup-${new Date().toISOString().slice(0, 10)}.json`;
    link.href = URL.createObjectURL(blob);
    link.click();
    setBackupMsg(u.impostazioni.backupOk);
  };

  const importBackup = async (file: File) => {
    setBackupMsg(null);
    try {
      const raw = JSON.parse(await file.text());
      const data = (raw && typeof raw === "object" && raw.state && typeof raw.state === "object") ? raw.state : raw;
      if (typeof data.xp !== "number" || typeof data.srs !== "object" || data.srs === null) {
        throw new Error(u.impostazioni.formatErr);
      }
      restoreBackup(data);
      setBackupMsg(u.impostazioni.backupRestored(data.xp, Object.keys(data.srs).length, data.streakCount ?? 0));
    } catch (err) {
      setBackupMsg(err instanceof Error ? u.impostazioni.invalidFile(err.message) : u.impostazioni.invalidFile(""));
    }
  };

  const exportPack = () => {
    const state = useLms.getState();
    const srsWords = Object.keys(state.srs).map((id) => VOCAB_BY_ID[id]).filter(Boolean);
    const data = {
      pack: "POLÍGLOTA MASTER · PLATINUM Offline Pack",
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
                  >{u.impostazioni.planOf(planDef.name)}</p>
                <p className={cn("text-xs", plan === "platinum" ? "text-inchiostro/70" : "text-muted-it")}>
                  {(u.data.plans[plan]?.tagline ?? planDef.tagline)}
                  {planSince && ` · ${u.impostazioni.activeSince(new Date(planSince).toLocaleDateString("es", { day: "numeric", month: "short", year: "numeric" }))}`}
                  {planBilling && ` · ${planBilling === "monthly" ? u.impostazioni.billingM : u.impostazioni.billingY}`}
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
            <Crown className="h-4 w-4" aria-hidden="true" /> {u.impostazioni.manage}
          </button>
          {plan !== "free" && (
            !confirmDowngrade ? (
              <button
                onClick={() => setConfirmDowngrade(true)}
                className="inline-flex min-h-11 items-center gap-2 rounded-xl border-2 border-soft px-4 py-2.5 text-sm font-bold text-muted-it transition-all hover:border-rosso/40 hover:text-rosso"
              >
                {u.impostazioni.toFree}
              </button>
            ) : (
              <span className="inline-flex items-center gap-2 rounded-xl border-2 border-rosso/50 bg-rosso-tenue px-4 py-2 text-xs font-bold text-rosso-scuro dark:text-rosso">
                {u.impostazioni.sure}
                <button onClick={() => { setPlan("free", null); setConfirmDowngrade(false); }} className="rounded-lg bg-rosso px-3 py-1.5 text-white">{u.impostazioni.yes}</button>
                <button onClick={() => setConfirmDowngrade(false)} className="rounded-lg border border-rosso/40 px-3 py-1.5">{u.impostazioni.no}</button>
              </span>
            )
          )}
        </div>
        {planDef.limits.prioritySupport && (
          <div className="flex items-start gap-3 border-t border-soft bg-verde-tenue/50 p-4 dark:bg-verde-tenue/15">
            <Headphones className="mt-0.5 h-5 w-5 shrink-0 text-verde" aria-hidden="true" />
            <div>
              <p className="text-sm font-bold">{u.impostazioni.supportTitle}</p>
              <p className="mt-0.5 text-xs leading-relaxed text-muted-it">{u.impostazioni.supportSub}</p>
            </div>
          </div>
        )}
      </section>

      {/* ── sicurezza estrema (v5.0) ── */}
      <section className="rounded-3xl border-2 border-verde/40 bg-verde-tenue/20 p-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h2 className="flex items-center gap-2 font-display text-xl font-semibold"><ShieldCheck className="h-5 w-5 text-verde-scuro dark:text-verde" aria-hidden="true" /> {u.impostazioni.secTitle}</h2>
          {security.pinHash ? (
            <span className="inline-flex items-center gap-1.5 rounded-full bg-verde px-3 py-1 text-[11px] font-bold text-white">
              <Lock className="h-3 w-3" aria-hidden="true" /> {u.impostazioni.pinOn}
            </span>
          ) : (
            <span className="rounded-full bg-inchiostro/10 px-3 py-1 text-[11px] font-bold text-muted-it">{u.impostazioni.pinOff}</span>
          )}
        </div>
        <p className="mt-2 text-sm leading-relaxed text-muted-it">
          {u.impostazioni.secDesc}
        </p>

        {security.pinHash ? (
          <div className="mt-4 space-y-3">
            <div className="flex flex-wrap gap-2.5">
              <button onClick={() => { setPinMode("change"); setPinError(null); setPinMsg(null); }} className="inline-flex min-h-11 items-center gap-2 rounded-xl border-2 border-verde/40 bg-verde-tenue px-4 py-2.5 text-sm font-bold text-verde-scuro transition-all hover:scale-105 dark:text-verde">
                <KeyRound className="h-4 w-4" aria-hidden="true" /> {u.impostazioni.changePin}
              </button>
              <button onClick={() => { setPinMode("remove"); setPinError(null); setPinMsg(null); }} className="inline-flex min-h-11 items-center gap-2 rounded-xl border-2 border-rosso/40 bg-rosso-tenue px-4 py-2.5 text-sm font-bold text-rosso-scuro transition-all hover:scale-105 dark:text-rosso">
                {u.impostazioni.disablePin}
              </button>
              <button onClick={lockApp} className="inline-flex min-h-11 items-center gap-2 rounded-xl bg-inchiostro px-4 py-2.5 text-sm font-bold text-crema transition-all hover:scale-105">
                <Lock className="h-4 w-4" aria-hidden="true" /> {u.impostazioni.lockNow}
              </button>
            </div>

            {pinMode === "change" && (
              <div className="grid gap-3 rounded-2xl border border-soft bg-surface p-4 sm:grid-cols-3">
                <label className="">
                  <span className="mb-1 block text-xs font-bold uppercase tracking-wide text-muted-it">{u.impostazioni.curPin}</span>
                  <input type="password" inputMode="numeric" value={pinCurrent} onChange={(e) => setPinCurrent(e.target.value.replace(/\D/g, "").slice(0, 6))} className="min-h-11 w-full rounded-xl border-2 border-soft bg-crema px-4 font-mono tracking-[0.3em] outline-none focus:border-verde" aria-label={u.impostazioni.curPin} />
                </label>
                <label>
                  <span className="mb-1 block text-xs font-bold uppercase tracking-wide text-muted-it">{u.impostazioni.newPin}</span>
                  <input type="password" inputMode="numeric" value={pinDraft} onChange={(e) => setPinDraft(e.target.value.replace(/\D/g, "").slice(0, 6))} className="min-h-11 w-full rounded-xl border-2 border-soft bg-crema px-4 font-mono tracking-[0.3em] outline-none focus:border-verde" aria-label={u.impostazioni.newPin} />
                </label>
                <label>
                  <span className="mb-1 block text-xs font-bold uppercase tracking-wide text-muted-it">{u.impostazioni.repeat}</span>
                  <input type="password" inputMode="numeric" value={pinConfirm} onChange={(e) => setPinConfirm(e.target.value.replace(/\D/g, "").slice(0, 6))} className="min-h-11 w-full rounded-xl border-2 border-soft bg-crema px-4 font-mono tracking-[0.3em] outline-none focus:border-verde" aria-label={u.impostazioni.repeat} />
                </label>
                <div className="sm:col-span-3 flex justify-end">
                  <button onClick={submitPin} disabled={pinBusy} className="min-h-11 rounded-xl bg-verde px-5 py-2.5 text-sm font-bold text-white transition-all hover:scale-105 disabled:opacity-50 dark:text-inchiostro">
                    {pinBusy ? u.impostazioni.verifying : u.impostazioni.savePin}
                  </button>
                </div>
              </div>
            )}

            {pinMode === "remove" && (
              <div className="flex flex-wrap items-end gap-3 rounded-2xl border border-rosso/30 bg-rosso-tenue/30 p-4">
                <label className="min-w-40 flex-1">
                  <span className="mb-1 block text-xs font-bold uppercase tracking-wide text-rosso-scuro dark:text-rosso">{u.impostazioni.curPinConfirm}</span>
                  <input type="password" inputMode="numeric" value={pinCurrent} onChange={(e) => setPinCurrent(e.target.value.replace(/\D/g, "").slice(0, 6))} className="min-h-11 w-full rounded-xl border-2 border-rosso/30 bg-surface px-4 font-mono tracking-[0.3em] outline-none focus:border-rosso" aria-label={u.impostazioni.curPinConfirm} />
                </label>
                <button onClick={submitPin} disabled={pinBusy} className="min-h-11 rounded-xl bg-rosso px-5 py-2.5 text-sm font-bold text-white transition-all hover:scale-105 disabled:opacity-50">
                  {pinBusy ? u.impostazioni.verifying : u.impostazioni.deactivate}
                </button>
              </div>
            )}

            <div>
              <p className="mb-2 text-xs font-bold uppercase tracking-wide text-muted-it">{u.impostazioni.autoLock}</p>
              <div className="flex flex-wrap gap-2">
                {([
                  { v: 0, l: u.impostazioni.never },
                  { v: 1, l: u.impostazioni.min1 },
                  { v: 5, l: u.impostazioni.min5 },
                  { v: 15, l: u.impostazioni.min15 },
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
              <span className="text-sm font-semibold">{u.impostazioni.lockOnStart}</span>
              <input type="checkbox" checked={security.lockOnStart} onChange={(e) => setSecurity({ lockOnStart: e.target.checked })} className="h-5 w-5 accent-[var(--verde)]" />
            </label>
          </div>
        ) : pinMode === "create" ? (
          <div className="mt-4 grid gap-3 rounded-2xl border border-soft bg-surface p-4 sm:grid-cols-2">
            <label>
              <span className="mb-1 block text-xs font-bold uppercase tracking-wide text-muted-it">{u.impostazioni.newPinFull}</span>
              <input type="password" inputMode="numeric" value={pinDraft} onChange={(e) => setPinDraft(e.target.value.replace(/\D/g, "").slice(0, 6))} className="min-h-11 w-full rounded-xl border-2 border-soft bg-crema px-4 font-mono tracking-[0.3em] outline-none focus:border-verde" aria-label="Nuevo PIN" />
            </label>
            <label>
              <span className="mb-1 block text-xs font-bold uppercase tracking-wide text-muted-it">{u.impostazioni.repeatPin}</span>
              <input type="password" inputMode="numeric" value={pinConfirm} onChange={(e) => setPinConfirm(e.target.value.replace(/\D/g, "").slice(0, 6))} className="min-h-11 w-full rounded-xl border-2 border-soft bg-crema px-4 font-mono tracking-[0.3em] outline-none focus:border-verde" aria-label={u.impostazioni.repeatPin} />
            </label>
            <div className="sm:col-span-2 flex justify-end gap-2">
              <button onClick={() => setPinMode("none")} className="min-h-11 rounded-xl border-2 border-soft px-4 py-2.5 text-sm font-bold">{u.impostazioni.cancel}</button>
              <button onClick={submitPin} disabled={pinBusy} className="min-h-11 rounded-xl bg-verde px-5 py-2.5 text-sm font-bold text-white transition-all hover:scale-105 disabled:opacity-50 dark:text-inchiostro">
                {pinBusy ? u.impostazioni.activating : u.impostazioni.activateBtn}
              </button>
            </div>
          </div>
        ) : (
          <button onClick={() => { setPinMode("create"); setPinError(null); setPinMsg(null); }} className="mt-4 inline-flex min-h-12 items-center gap-2 rounded-xl bg-verde px-5 py-3 text-sm font-bold text-white shadow-md shadow-verde/25 transition-all hover:scale-105 dark:text-inchiostro">
            <KeyRound className="h-4 w-4" aria-hidden="true" /> {u.impostazioni.activatePin}
          </button>
        )}

        {pinError && <p role="alert" className="mt-3 rounded-xl bg-rosso-tenue px-3 py-2 text-xs font-semibold text-rosso-scuro dark:text-rosso">{pinError}</p>}
        {pinMsg && <p role="status" className="mt-3 rounded-xl bg-verde-tenue px-3 py-2 text-xs font-semibold text-verde-scuro dark:text-verde">{pinMsg}</p>}

        <label className="mt-4 flex items-center justify-between gap-3 rounded-xl bg-crema-scura px-4 py-3.5 dark:bg-inchiostro/10">
          <span className="min-w-0">
            <span className="block text-sm font-semibold">{u.impostazioni.privacyMode}</span>
            <span className="block text-[11px] text-muted-it">{u.impostazioni.privacyModeDesc}</span>
          </span>
          <input type="checkbox" checked={security.privacyMode} onChange={(e) => setSecurity({ privacyMode: e.target.checked })} className="h-5 w-5 accent-[var(--verde)]" />
        </label>
      </section>

      {/* ── pagamenti (v5.0) ── */}
      <section className="rounded-3xl border border-soft bg-surface p-6">
        <h2 className="flex items-center gap-2 font-display text-xl font-semibold"><Landmark className="h-5 w-5 text-oro-scuro dark:text-oro" aria-hidden="true" /> {u.impostazioni.payTitle}</h2>
        <p className="mt-1.5 text-sm leading-relaxed text-muted-it">
          {u.impostazioni.payDesc}
        </p>
        {payments.length === 0 ? (
          <p className="mt-4 rounded-2xl border-2 border-dashed border-soft px-4 py-6 text-center text-sm text-muted-it">
            {u.impostazioni.payEmpty}
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
                        {p.status === "completato" ? u.impostazioni.payDone : u.impostazioni.payWaiting}
                      </span>
                    </p>
                    <p className="truncate text-[11px] text-muted-it">
                      {new Date(p.date).toLocaleDateString("es", { day: "numeric", month: "short", year: "numeric" })} · {u.impostazioni.payMethods[p.method] ?? PAY_METHOD_LABEL[p.method]} · {p.amount.toFixed(2).replace(".", ",")} {p.currency}
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      void navigator.clipboard.writeText(p.reference).catch(() => undefined);
                      setCopiedRef(p.id);
                      setTimeout(() => setCopiedRef(null), 1500);
                    }}
                    title={u.impostazioni.copyRefAria}
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
        <h2 className="font-display text-xl font-semibold">{u.impostazioni.profileTitle}</h2>
        <div className="mt-4 flex flex-wrap items-end gap-3">
          <label className="min-w-56 flex-1">
            <span className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-muted-it">{u.impostazioni.nameLabel}</span>
            <input
              type="text"
              value={nameDraft}
              onChange={(e) => setNameDraft(e.target.value)}
              className="min-h-11 w-full rounded-xl border-2 border-soft bg-crema px-4 outline-none transition-colors focus:border-verde"
              aria-label={u.impostazioni.nameAria}
            />
          </label>
          <button
            onClick={() => { setUserName(nameDraft); addXp(1); }}
            className="min-h-11 rounded-xl bg-verde px-5 py-2.5 text-sm font-bold text-white transition-all hover:scale-105 dark:text-inchiostro"
          >
            {u.impostazioni.save}
          </button>
        </div>
      </section>

      {/* apariencia */}
      <section className="rounded-3xl border border-soft bg-surface p-6">
        <h2 className="font-display text-xl font-semibold">{u.impostazioni.lookTitle}</h2>
        <div className="mt-4 space-y-5">
          <div>
            <p className="mb-2 text-xs font-bold uppercase tracking-wide text-muted-it">{u.impostazioni.theme}</p>
            <div className="flex gap-2">
              {(["light", "dark"] as const).map((t) => (
                <button
                  key={t}
                  onClick={() => updateSettings({ theme: t })}
                  aria-pressed={settings.theme === t}
                  className={cn("min-h-11 flex-1 rounded-xl border-2 px-4 py-2.5 text-sm font-bold transition-all", settings.theme === t ? "border-verde bg-verde-tenue text-verde-scuro dark:text-verde" : "border-soft")}
                >
                  {t === "light" ? u.impostazioni.light : u.impostazioni.dark}
                </button>
              ))}
            </div>
          </div>
          <div>
            <p className="mb-2 text-xs font-bold uppercase tracking-wide text-muted-it">{u.impostazioni.textSize}</p>
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
        <h2 className="font-display text-xl font-semibold">{u.impostazioni.audioTitle}</h2>
        <div className="mt-4 space-y-5">
          <div>
            <div className="flex items-baseline justify-between">
              <label htmlFor="rate" className="text-xs font-bold uppercase tracking-wide text-muted-it">{u.impostazioni.rate}</label>
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
            <p className="mt-1.5 text-xs text-muted-it">{u.impostazioni.rateHint}</p>
          </div>
          <div>
            <p className="mb-2 text-xs font-bold uppercase tracking-wide text-muted-it">{u.impostazioni.goal}</p>
            <div className="flex flex-wrap gap-2">
              {[60, 120, 200].map((g) => (
                <button
                  key={g}
                  onClick={() => updateSettings({ dailyGoalXp: g })}
                  aria-pressed={settings.dailyGoalXp === g}
                  className={cn("min-h-11 flex-1 rounded-xl border-2 px-3 py-2.5 text-sm font-bold transition-all", settings.dailyGoalXp === g ? "border-oro bg-oro-tenue text-oro-scuro dark:text-oro" : "border-soft")}
                >
                  {g} XP<span className="hidden sm:inline">{u.impostazioni.perDay}</span>
                </button>
              ))}
            </div>
          </div>
          <label className="flex items-center justify-between gap-3 rounded-xl bg-crema-scura px-4 py-3.5 dark:bg-inchiostro/10">
            <span className="text-sm font-semibold">{u.impostazioni.subtitles}</span>
            <input
              type="checkbox"
              checked={settings.showSubtitles}
              onChange={(e) => updateSettings({ showSubtitles: e.target.checked })}
              className="h-5 w-5 accent-[var(--verde)]"
            />
          </label>
        </div>
      </section>

      {/* notifiche push (v9.0) */}
      <section className="rounded-3xl border border-soft bg-surface p-6">
        <h2 className="flex items-center gap-2 font-display text-xl font-semibold">
          <Bell className="h-5 w-5 text-verde" aria-hidden="true" /> {u.impostazioni.notifTitle}
        </h2>
        <p className="mt-1.5 text-sm leading-relaxed text-muted-it">
          {u.impostazioni.notifDesc}
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          {pushStatus === "on" ? (
            <>
              <span className="inline-flex min-h-11 items-center gap-2 rounded-xl border-2 border-verde/50 bg-verde-tenue px-4 py-2.5 text-sm font-bold text-verde-scuro dark:text-verde">
                <Check className="h-4 w-4" aria-hidden="true" /> {u.impostazioni.notifOn}
              </span>
              <button onClick={() => void handleTestPush()} className="inline-flex min-h-11 items-center gap-2 rounded-xl border-2 border-verde/40 bg-surface px-4 py-2.5 text-sm font-bold text-verde-scuro transition-all hover:scale-105 dark:text-verde">
                {u.impostazioni.notifTest}
              </button>
              <button onClick={() => void handleDisablePush()} className="inline-flex min-h-11 items-center gap-2 rounded-xl border-2 border-rosso/30 px-4 py-2.5 text-sm font-bold text-rosso-scuro transition-all hover:scale-105 dark:text-rosso">
                {u.impostazioni.notifOff}
              </button>
            </>
          ) : pushStatus === "denied" ? (
            <p className="rounded-xl border border-rosso/30 bg-rosso-tenue px-4 py-2.5 text-sm font-semibold text-rosso-scuro dark:text-rosso">
              {u.impostazioni.notifDenied}
            </p>
          ) : pushStatus === "unsupported" ? (
            <p className="rounded-xl bg-crema-scura px-4 py-2.5 text-sm text-muted-it dark:bg-inchiostro/10">
              {u.impostazioni.notifUnsupported}
            </p>
          ) : pushStatus === "checking" ? (
            <p className="text-sm text-muted-it">{u.impostazioni.notifChecking}</p>
          ) : (
            <button onClick={() => void handleEnablePush()} className="inline-flex min-h-11 items-center gap-2 rounded-xl bg-verde px-5 py-2.5 text-sm font-bold text-white shadow-md shadow-verde/25 transition-all hover:scale-105">
              <Bell className="h-4 w-4" aria-hidden="true" /> {u.impostazioni.notifEnable}
            </button>
          )}
        </div>
        {pushMsg && <p className="mt-3 rounded-xl bg-crema-scura px-4 py-2.5 text-sm font-semibold dark:bg-inchiostro/10">{pushMsg}</p>}
      </section>

      {/* datos */}
      <section className="rounded-3xl border border-soft bg-surface p-6">
        <h2 className="font-display text-xl font-semibold">{u.impostazioni.dataTitle}</h2>
        <p className="mt-1.5 text-sm leading-relaxed text-muted-it">
          {u.impostazioni.dataDesc}
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <button onClick={exportData} className="inline-flex min-h-11 items-center gap-2 rounded-xl border-2 border-verde/40 bg-verde-tenue px-5 py-2.5 text-sm font-bold text-verde-scuro transition-all hover:scale-105 dark:text-verde">
            <Download className="h-4 w-4" aria-hidden="true" /> {u.impostazioni.backupBtn}
          </button>
          <button
            onClick={() => backupFileRef.current?.click()}
            className="inline-flex min-h-11 items-center gap-2 rounded-xl border-2 border-verde/40 bg-surface px-5 py-2.5 text-sm font-bold text-verde-scuro transition-all hover:scale-105 dark:text-verde"
          >
            <Upload className="h-4 w-4" aria-hidden="true" /> {u.impostazioni.restoreBtn}
          </button>
          <input
            ref={backupFileRef}
            type="file"
            accept="application/json,.json"
            className="hidden"
            aria-label={u.impostazioni.fileAria}
            onChange={(e) => {
              const f = e.target.files?.[0];
              if (f) void importBackup(f);
              e.target.value = "";
            }}
          />
          {planDef.limits.offlinePack ? (
            <button onClick={exportPack} className="inline-flex min-h-11 items-center gap-2 rounded-xl plan-gold-bg px-5 py-2.5 text-sm font-bold text-white shadow-md shadow-oro/25 transition-all hover:scale-105">
              <Crown className="h-4 w-4" aria-hidden="true" /> {u.impostazioni.platinumPack(Object.keys(srs).length)}
            </button>
          ) : (
            <span className="inline-flex min-h-11 items-center gap-2 rounded-xl border-2 border-dashed border-oro/40 px-4 py-2.5 text-xs font-bold text-oro-scuro dark:text-oro">
              {u.impostazioni.packLocked}
            </span>
          )}
          {!confirmReset ? (
            <button onClick={() => setConfirmReset(true)} className="inline-flex min-h-11 items-center gap-2 rounded-xl border-2 border-rosso/40 bg-rosso-tenue px-5 py-2.5 text-sm font-bold text-rosso-scuro transition-all hover:scale-105 dark:text-rosso">
              {u.impostazioni.resetBtn}
            </button>
          ) : (
            <div className="flex items-center gap-2 rounded-xl border-2 border-rosso bg-rosso-tenue px-4 py-2.5">
              <span className="text-sm font-bold text-rosso-scuro dark:text-rosso">{u.impostazioni.sure}</span>
              <button onClick={() => { resetAll(); setConfirmReset(false); }} className="min-h-9 rounded-lg bg-rosso px-3 py-1.5 text-xs font-bold text-white">{u.impostazioni.yesReset}</button>
              <button onClick={() => setConfirmReset(false)} className="min-h-9 rounded-lg border border-rosso/40 px-3 py-1.5 text-xs font-bold text-rosso-scuro dark:text-rosso">{u.impostazioni.no}</button>
            </div>
          )}
        </div>
        {backupMsg && (
          <p role="status" className={cn("mt-4 rounded-xl px-4 py-3 text-sm font-semibold", backupMsg.includes("✓") ? "bg-verde-tenue text-verde-scuro dark:text-verde" : "bg-rosso-tenue text-rosso-scuro dark:text-rosso")}>
            {backupMsg}
          </p>
        )}
        <p className="mt-4 text-xs leading-relaxed text-muted-it">
          {u.impostazioni.dataNote}
        </p>
        {/* v9.40 · acceso rápido al borrado total o parcial de datos */}
        <div className="mt-4 flex flex-wrap items-center gap-3 rounded-2xl border-2 border-viola/25 bg-viola-tenue/30 p-4 dark:bg-viola-tenue/15">
          <ShieldCheck className="h-5 w-5 shrink-0 text-viola-scuro dark:text-viola" aria-hidden="true" />
          <p className="min-w-0 flex-1 text-sm leading-relaxed text-inchiostro dark:text-crema">
            <strong>Tus datos son tuyos:</strong> bórralos total o parcialmente (tarjetas, escritos, historial…)
            cuando quieras desde el Centro de privacidad. Nadie más tiene acceso a ellos.
          </p>
          <button
            onClick={() => navigate("legal")}
            className="inline-flex min-h-11 shrink-0 items-center gap-2 rounded-xl bg-viola-scuro px-4 py-2.5 text-sm font-bold text-white transition-transform hover:scale-[1.02] dark:bg-viola"
          >
            <Trash2 className="h-4 w-4" aria-hidden="true" /> Gestionar mis datos
          </button>
        </div>
      </section>
      <section className="rounded-3xl border border-soft bg-surface p-6">
        <h2 className="font-display text-xl font-semibold">{u.impostazioni.a11yTitle}</h2>
        <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted-it">
          {u.impostazioni.a11y.map((t) => <li key={t}>{t}</li>)}
        </ul>
      </section>
    </div>
  );
}
