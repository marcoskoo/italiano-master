"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { AppShell } from "@/components/lms/shell";
import { useLms } from "@/lib/lms/store";
import { VIEW_TITLES } from "@/lib/lms/nav";
import { initVoices } from "@/lib/lms/tts";
import { fetchAppConfig, telemetry, getClientId, syncProfileRequest, fetchServerProgress, loginRequest, setAdminToken, type ProfileSyncPayload } from "@/lib/lms/remote";
import { HomeView } from "@/components/lms/views/home";
import { ProgressView } from "@/components/lms/views/progress";
import { LevelTestView } from "@/components/lms/views/leveltest";
import { CoursesView } from "@/components/lms/views/courses";
import { GrammarView } from "@/components/lms/views/grammar";
import { VocabularyView } from "@/components/lms/views/vocabulary";
import { ListeningView, ReadingView, WritingView, ConversationView } from "@/components/lms/views/skills";
import { PronunciationView } from "@/components/lms/views/pronunciation";
import { ConjugatorView } from "@/components/lms/views/tools";
import { DictionaryView } from "@/components/lms/views/dictionary";
import { SituationsView } from "@/components/lms/views/situations";
import { CultureView } from "@/components/lms/views/culture";
import { TutorView } from "@/components/lms/views/tutor";
import { GamesView } from "@/components/lms/views/games";
import { ReviewView } from "@/components/lms/views/review";
import { ExamsView, CertificatesView, SettingsView } from "@/components/lms/views/exams";
import { CilsView } from "@/components/lms/views/cils";
import { PricingView } from "@/components/lms/views/pricing";
import { AdminView } from "@/components/lms/views/admin";
import { NumberLabView } from "@/components/lms/views/numberlab";
import { VerbDrillView } from "@/components/lms/views/verbdrill";
import { PlannerView } from "@/components/lms/views/planner";
import { AnalyzerView } from "@/components/lms/views/analyzer";
import { PrintablesView } from "@/components/lms/views/printables";
import { ProverbiView, FalsiAmiciView, DettatoView, AnkiExportView } from "@/components/lms/views/plugins";
import { ParolaNascostaView, PreposizioniView, PomodoroView, MuseView } from "@/components/lms/views/plugins2";
import { IndovinelliView, VeroFalsoView, ProverbioView } from "@/components/lms/views/plugins3";
import { ShadowingView } from "@/components/lms/views/shadowing";
import { ImporterView } from "@/components/lms/views/importer";
import { StatisticheView } from "@/components/lms/views/statistiche";
import { ClassificaView } from "@/components/lms/views/classifica";
import { LettureView } from "@/components/lms/views/letture";
import { PremiView } from "@/components/lms/views/premi";
import { PwaRegister, InstallBanner } from "@/components/lms/pwa";
import { LockScreen } from "@/components/lms/lock-screen";

/* ── Italiano Master · LMS completo de italiano (SPA) ─────────────── */

const emptySubscribe = () => () => {};

function MaintenanceScreen({ message, onAdminLogin }: { message: string; onAdminLogin: (username: string, password: string) => Promise<string | null> }) {
  const [open, setOpen] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    setError(null);
    const err = await onAdminLogin(username.trim(), password);
    if (err) setError(err);
    setBusy(false);
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-crema px-6 text-center">
      <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-verde via-crema to-rosso p-[2px]">
        <span className="flex h-full w-full items-center justify-center rounded-[22px] bg-crema font-display text-4xl font-bold italic text-verde-scuro">I</span>
      </div>
      <h1 className="mt-6 font-display text-3xl font-semibold text-inchiostro">Manutenzione in corso</h1>
      <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-it">{message}</p>

      {!open ? (
        <button
          onClick={() => setOpen(true)}
          className="mt-8 inline-flex min-h-11 items-center gap-2 rounded-xl border border-soft px-5 py-2.5 text-xs font-bold text-muted-it transition-colors hover:bg-inchiostro/5"
        >
          Area riservata · acceso administración
        </button>
      ) : (
        <form onSubmit={submit} className="mt-8 flex w-full max-w-xs flex-col gap-2.5 rounded-2xl border border-soft bg-surface p-5 text-left shadow-lg">
          <label htmlFor="maint-user" className="text-xs font-bold uppercase tracking-wide text-muted-it">Usuario</label>
          <input id="maint-user" value={username} onChange={(e) => setUsername(e.target.value)} autoComplete="username" required className="rounded-xl border border-soft bg-crema px-3.5 py-2.5 text-sm outline-none focus:ring-2 focus:ring-verde/40" />
          <label htmlFor="maint-pass" className="text-xs font-bold uppercase tracking-wide text-muted-it">Contraseña</label>
          <input id="maint-pass" type="password" value={password} onChange={(e) => setPassword(e.target.value)} autoComplete="current-password" required className="rounded-xl border border-soft bg-crema px-3.5 py-2.5 text-sm outline-none focus:ring-2 focus:ring-verde/40" />
          {error && <p role="alert" className="rounded-xl bg-rosso-tenue px-3 py-2 text-xs font-semibold text-rosso-scuro dark:text-rosso">{error}</p>}
          <button type="submit" disabled={busy} className="mt-1 min-h-11 rounded-xl bg-verde px-4 py-2.5 text-sm font-bold text-white shadow-md shadow-verde/25 hover:bg-verde-scuro disabled:opacity-60">
            {busy ? "Verificando…" : "Entra"}
          </button>
        </form>
      )}

      <p className="mt-10 font-mono text-[10px] uppercase tracking-[0.24em] text-inchiostro/40">italiano master · admin panel</p>
    </div>
  );
}

export default function Home() {
  const rawView = useLms((s) => s.view);
  /* v9.5.1: estado persistido corrupto (vista inexistente) → inicio en vez de pantalla vacía */
  const view = (typeof rawView === "string" && rawView in VIEW_TITLES ? rawView : "inicio") as typeof rawView;
  const account = useLms((s) => s.account);
  const remoteConfig = useLms((s) => s.remoteConfig);
  const configVersion = useLms((s) => s.configVersion);
  const applyRemoteConfig = useLms((s) => s.applyRemoteConfig);
  const locked = useLms((s) => s.locked);
  const pinHash = useLms((s) => s.security.pinHash);
  const lockOnStart = useLms((s) => s.security.lockOnStart);
  const autoLockMin = useLms((s) => s.security.autoLockMin);
  const lockApp = useLms((s) => s.lockApp);
  // mounted sin setState-in-effect: snapshot del servidor = false, del cliente = true
  const mounted = useSyncExternalStore(emptySubscribe, () => true, () => false);

  useEffect(() => {
    initVoices();
  }, []);

  /* ── seguridad extrema: bloqueo al arrancar + auto-bloqueo por inactividad ── */
  useEffect(() => {
    if (pinHash && lockOnStart) lockApp();
  }, []);

  useEffect(() => {
    if (!pinHash || autoLockMin <= 0) return;
    let timer: ReturnType<typeof setTimeout> | null = null;
    const arm = () => {
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        lockApp();
      }, autoLockMin * 60 * 1000);
    };
    const events: (keyof WindowEventMap)[] = ["mousemove", "keydown", "click", "scroll", "touchstart"];
    events.forEach((ev) => window.addEventListener(ev, arm, { passive: true }));
    document.addEventListener("visibilitychange", arm); // ojo: visibilitychange vive en document, no en window
    arm();
    return () => {
      if (timer) clearTimeout(timer);
      events.forEach((ev) => window.removeEventListener(ev, arm));
      document.removeEventListener("visibilitychange", arm);
    };
  }, [pinHash, autoLockMin, lockApp]);

  /* config remota: carga inicial + refetch al volver a la pestaña (máx. 1/min) */
  useEffect(() => {
    let last = 0;
    let alive = true;
    const load = async () => {
      try {
        const bundle = await fetchAppConfig();
        if (alive && bundle.version !== useLms.getState().configVersion) {
          applyRemoteConfig(bundle);
        }
      } catch {
        /* sin conexión con el panel: la app funciona con contenido estático */
      }
    };
    void load();
    if (!sessionStorage.getItem("im-boot-telemetry")) {
      sessionStorage.setItem("im-boot-telemetry", "1");
      telemetry("boot", { ts: Date.now() }, useLms.getState().account?.username);
    }
    const onFocus = () => {
      if (Date.now() - last > 60000) {
        last = Date.now();
        void load();
      }
    };
    window.addEventListener("focus", onFocus);
    return () => {
      alive = false;
      window.removeEventListener("focus", onFocus);
    };
  }, [applyRemoteConfig]);

  /* sincronización del perfil del estudiante con el servidor (debounce) */
  useEffect(() => {
    let timer: ReturnType<typeof setTimeout> | null = null;
    const unsub = useLms.subscribe((state) => {
      if (!state.account || state.account.role !== "student") return;
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        const s = useLms.getState();
        if (!s.account || s.account.role !== "student") return;
        const payload: ProfileSyncPayload = {
          xp: s.xp,
          level: s.level ?? "A1",
          plan: s.plan,
          streak: s.streakCount,
          lessonsDone: s.completedLessons.length,
          wordsInSrs: Object.keys(s.srs).length,
          weekXp: s.weekXp,
          weekKey: s.weekKey,
        };
        void syncProfileRequest(s.account.id, payload);
      }, 1200);
    });
    return () => {
      unsub();
      if (timer) clearTimeout(timer);
    };
  }, []);

  /* al arrancar con sesión iniciada: adoptar el progreso del servidor si es mayor */
  useEffect(() => {
    const acc = useLms.getState().account;
    if (!acc || acc.role !== "student") return;
    void fetchServerProgress(acc.id).then((progress) => {
      if (progress) useLms.getState().adoptServerProgress(progress);
    }).catch(() => undefined);
  }, []);

  if (!mounted) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-crema">
        <div className="text-center">
          <p className="font-display text-4xl font-semibold text-inchiostro">
            Italiano <span className="italic text-verde-scuro">Master</span>
          </p>
          <p className="mt-3 font-mono text-xs uppercase tracking-[0.2em] text-inchiostro/40">caricamento…</p>
          <div className="mx-auto mt-6 h-1.5 w-40 overflow-hidden rounded-full bg-inchiostro/10">
            <div className="h-full w-1/2 animate-pulse rounded-full bg-verde" />
          </div>
        </div>
      </div>
    );
  }

  /* bloqueo con PIN: cubre TODO (incluido el modo mantenimiento) */
  if (locked && pinHash) {
    return <LockScreen />;
  }

  /* modo mantenimiento: solo el admin sigue dentro */
  if (remoteConfig?.maintenance.enabled && account?.role !== "admin") {
    const adminLogin = async (username: string, password: string): Promise<string | null> => {
      try {
        const { user, token } = await loginRequest(username, password);
        if (user.role !== "admin" || !token) {
          return "Esta cuenta no tiene permisos de administración.";
        }
        setAdminToken(token);
        useLms.getState().loginAccount({ id: user.id, username: user.username, displayName: user.displayName, role: user.role });
        return null;
      } catch (err) {
        return err instanceof Error ? err.message : "Error de acceso";
      }
    };
    return <MaintenanceScreen message={remoteConfig.maintenance.message} onAdminLogin={adminLogin} />;
  }

  return (
    <AppShell>
      {/* key: al cambiar la config remota (versión) las vistas se remontan con el contenido actualizado */}
      <div key={`${configVersion}-${getClientId() === "ssr" ? "x" : "c"}`}>
        {view === "inicio" && <HomeView />}
        {view === "progreso" && <ProgressView />}
        {view === "test" && <LevelTestView />}
        {view === "cursos" && <CoursesView />}
        {view === "grammatica" && <GrammarView />}
        {view === "vocabolario" && <VocabularyView />}
        {view === "ascolto" && <ListeningView />}
        {view === "lettura" && <ReadingView />}
        {view === "scrittura" && <WritingView />}
        {view === "conversazione" && <ConversationView />}
        {view === "pronuncia" && <PronunciationView />}
        {view === "coniugatore" && <ConjugatorView />}
        {view === "dizionario" && <DictionaryView />}
        {view === "situazioni" && <SituationsView />}
        {view === "cultura" && <CultureView />}
        {view === "tutor" && <TutorView />}
        {view === "giochi" && <GamesView />}
        {view === "repaso" && <ReviewView />}
        {view === "esami" && <ExamsView />}
        {view === "cils" && <CilsView />}
        {view === "certificati" && <CertificatesView />}
        {view === "impostazioni" && <SettingsView />}
        {view === "piani" && <PricingView />}
        {view === "admin" && <AdminView />}
        {view === "numerilab" && <NumberLabView />}
        {view === "verbidrill" && <VerbDrillView />}
        {view === "pianosettimanale" && <PlannerView />}
        {view === "analizzatore" && <AnalyzerView />}
        {view === "schede" && <PrintablesView />}
        {view === "proverbi" && <ProverbiView />}
        {view === "falsiamici" && <FalsiAmiciView />}
        {view === "dettato" && <DettatoView />}
        {view === "ankiexport" && <AnkiExportView />}
        {view === "parolanascosta" && <ParolaNascostaView />}
        {view === "preposizioni" && <PreposizioniView />}
        {view === "pomodoro" && <PomodoroView />}
        {view === "muse" && <MuseView />}
        {view === "indovinelli" && <IndovinelliView />}
        {view === "verofalso" && <VeroFalsoView />}
        {view === "proverbio" && <ProverbioView />}
        {view === "shadowing" && <ShadowingView />}
        {view === "importatore" && <ImporterView />}
        {view === "statistiche" && <StatisticheView />}
        {view === "classifica" && <ClassificaView />}
        {view === "letture" && <LettureView />}
        {view === "premi" && <PremiView />}
      </div>
      <PwaRegister />
      <InstallBanner />
    </AppShell>
  );
}
