"use client";

import { useEffect, useMemo, useState } from "react";
import {
  BookOpen, BookMarked, Brain, Calculator, Clapperboard, Compass, Crown, Ear, FlaskConical,
  Gamepad2, GraduationCap, Hash, Home, Languages, Library, LineChart, MapPin, Medal, Microscope,
  PenLine, Printer, RefreshCcw, ScrollText, Settings, Shield, Sparkles, Timer, Trophy, Volume2,
  X, Zap, Flame, Menu, CalendarDays,
  LogIn, LogOut,
} from "lucide-react";
import type { ViewId } from "@/lib/lms/types";
import { useLms, rankFor } from "@/lib/lms/store";
import { dueCards } from "@/lib/lms/srs";
import { PlanChip, UpgradeCta } from "./plan-badge";
import { loginRequest, setAdminToken, logoutRequest, getAdminToken } from "@/lib/lms/remote";
import { cn } from "@/lib/utils";

/* ── Shell del LMS: sidebar + header + vista activa ──────────────── */

const NAV_GROUPS: { group: string; items: { id: ViewId; label: string; icon: typeof Home }[] }[] = [
  {
    group: "Tu ruta",
    items: [
      { id: "inicio", label: "Inicio", icon: Home },
      { id: "pianosettimanale", label: "Piano settimanale", icon: CalendarDays },
      { id: "progreso", label: "Mi progreso", icon: LineChart },
      { id: "test", label: "Test de nivel", icon: Compass },
      { id: "piani", label: "Piani PRO", icon: Crown },
    ],
  },
  {
    group: "Cursos",
    items: [{ id: "cursos", label: "Cursos A1–C2", icon: GraduationCap }],
  },
  {
    group: "Práctica por destreza",
    items: [
      { id: "grammatica", label: "Gramática", icon: Brain },
      { id: "vocabolario", label: "Vocabulario", icon: Library },
      { id: "ascolto", label: "Escucha", icon: Ear },
      { id: "lettura", label: "Lectura", icon: BookOpen },
      { id: "scrittura", label: "Escritura", icon: PenLine },
      { id: "conversazione", label: "Conversación", icon: Languages },
      { id: "pronuncia", label: "Pronunciación", icon: Volume2 },
    ],
  },
  {
    group: "Herramientas",
    items: [
      { id: "dizionario", label: "Diccionario", icon: BookMarked },
      { id: "coniugatore", label: "Conjugador", icon: Calculator },
      { id: "verbidrill", label: "Allenamento verbi", icon: Timer },
      { id: "numerilab", label: "Numeri lab", icon: Hash },
      { id: "analizzatore", label: "Analizador de frases", icon: Microscope },
      { id: "schede", label: "Schede di studio", icon: Printer },
      { id: "situazioni", label: "Situaciones reales", icon: MapPin },
      { id: "cultura", label: "Cultura italiana", icon: Clapperboard },
      { id: "tutor", label: "Tutor IA", icon: Sparkles },
      { id: "giochi", label: "Juegos", icon: Gamepad2 },
    ],
  },
  {
    group: "Evaluación",
    items: [
      { id: "repaso", label: "Repaso inteligente", icon: RefreshCcw },
      { id: "esami", label: "Exámenes", icon: ScrollText },
      { id: "certificati", label: "Certificados", icon: Trophy },
    ],
  },
  {
    group: "Sistema",
    items: [
      { id: "impostazioni", label: "Configuración", icon: Settings },
      { id: "admin", label: "Panel Admin", icon: Shield },
    ],
  },
];

const VIEW_TITLES: Record<ViewId, { title: string; sub: string }> = {
  inicio: { title: "Benvenuto!", sub: "Tu plataforma integral de italiano, desde cero hasta C2" },
  progreso: { title: "Mi progreso", sub: "XP, racha, destrezas y recomendaciones adaptativas" },
  test: { title: "Test de nivel", sub: "20 preguntas graduadas para ubicarte en el MCER" },
  cursos: { title: "Cursos", sub: "Ruta completa: Desde cero → A1 → A2 → B1 → B2 → C1 → C2" },
  grammatica: { title: "Grammatica", sub: "La gramática italiana paso a paso, de A1 a C2" },
  vocabolario: { title: "Vocabolario", sub: "25 categorías temáticas con audio y repaso espaciado" },
  ascolto: { title: "Ascolto", sub: "Comprensión auditiva con diálogos, palabras y dictados" },
  lettura: { title: "Lettura", sub: "Lecturas graduadas con preguntas y glosario" },
  scrittura: { title: "Scrittura", sub: "Redacción guiada con corrección por IA y modelo" },
  conversazione: { title: "Conversazione", sub: "Escenarios reales con frases útiles y tutor IA" },
  pronuncia: { title: "Pronuncia", sub: "Laboratorio interactivo de sonidos y entonación" },
  dizionario: { title: "Dizionario", sub: "Diccionario italiano–español de aprendizaje" },
  coniugatore: { title: "Coniugatore", sub: "Conjugador de verbos con 7 tiempos y práctica" },
  situazioni: { title: "Situazioni reali", sub: "El italiano que de verdad se usa: aeropuerto, hotel, médico…" },
  cultura: { title: "Cultura italiana", sub: "Historia, arte, gastronomía y gestos: el idioma en contexto" },
  tutor: { title: "Tutor IA", sub: "Tu profesor italiano disponible 24/7" },
  giochi: { title: "Giochi", sub: "Memoria, orden de frases, quiz relámpago e impiccato" },
  repaso: { title: "Repaso inteligente", sub: "Repetición espaciada adaptada a tu memoria" },
  esami: { title: "Esami", sub: "Pruebas por nivel con certificado al aprobar" },
  certificati: { title: "Certificati", sub: "Tus diplomas de italiano, listos para descargar" },
  impostazioni: { title: "Impostazioni", sub: "Tema, tamaño de texto, audio y perfil" },
  piani: { title: "Piani PRO · Premium · Platinum", sub: "Sblocca tutto il potenziale di Italiano Master" },
  admin: { title: "Pannello di Controllo", sub: "Amministrazione totale de la plataforma" },
  numerilab: { title: "Numeri lab", sub: "Conversor de números y hora + práctica con XP" },
  verbidrill: { title: "Allenamento verbi", sub: "Drill de conjugación contrarreloj con rachas" },
  pianosettimanale: { title: "Piano settimanale", sub: "Tu semana de estudio en un plan generado a medida" },
  analizzatore: { title: "Analizzatore di frasi", sub: "Analiza frases italianas palabra por palabra con traducción" },
  schede: { title: "Schede di studio", sub: "Hojas de vocabulario, verbos y gramática listas para imprimir" },
};

function NavItem({ id, label, icon: Icon, onNav, active }: { id: ViewId; label: string; icon: typeof Home; onNav: () => void; active: boolean }) {
  return (
    <button
      onClick={onNav}
      aria-current={active ? "page" : undefined}
      className={cn(
        "flex min-h-11 w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold transition-all",
        active ? "bg-verde text-white shadow-md shadow-verde/20" : "text-inchiostro/70 hover:bg-verde-tenue hover:text-verde-scuro dark:text-inchiostro/80 dark:hover:text-verde"
      )}
    >
      <Icon className={cn("h-[18px] w-[18px] shrink-0", active ? "text-white" : "text-inchiostro/50 dark:text-inchiostro/60")} aria-hidden="true" />
      <span className="truncate">{label}</span>
    </button>
  );
}

/* ── Pestaña de la barra inferior móvil ───────────────────────────── */
function BottomNavItem({ label, icon: Icon, active, onClick, badge }: { label: string; icon: typeof Home; active?: boolean; onClick: () => void; badge?: number }) {
  return (
    <button
      onClick={onClick}
      aria-current={active ? "page" : undefined}
      className="relative flex min-h-14 flex-1 flex-col items-center justify-center gap-1 px-1"
    >
      <span className={cn(
        "relative flex h-7 w-12 items-center justify-center rounded-full transition-colors",
        active ? "bg-verde-tenue text-verde-scuro dark:bg-verde/25 dark:text-verde" : "text-inchiostro/55"
      )}>
        <Icon className="h-5 w-5" aria-hidden="true" />
        {badge != null && badge > 0 && (
          <span className="absolute -right-0.5 -top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-rosso px-1 text-[9px] font-bold leading-none text-white shadow-sm" aria-label={`${badge} tarjetas por repasar`}>
            {badge > 99 ? "99+" : badge}
          </span>
        )}
      </span>
      <span className={cn("text-[10px] font-bold leading-none", active ? "text-verde-scuro dark:text-verde" : "text-inchiostro/55")}>{label}</span>
    </button>
  );
}

export function AppShell({ children }: { children: React.ReactNode }) {
  const view = useLms((s) => s.view);
  const navigate = useLms((s) => s.navigate);
  const xp = useLms((s) => s.xp);
  const streak = useLms((s) => s.streakCount);
  const level = useLms((s) => s.level);
  const userName = useLms((s) => s.userName);
  const settings = useLms((s) => s.settings);
  const plan = useLms((s) => s.plan);
  const updateSettings = useLms((s) => s.updateSettings);
  const account = useLms((s) => s.account);
  const loginAccount = useLms((s) => s.loginAccount);
  const logoutAccount = useLms((s) => s.logoutAccount);
  const remoteConfig = useLms((s) => s.remoteConfig);
  const srs = useLms((s) => s.srs);

  const [menuOpen, setMenuOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [loginUser, setLoginUser] = useState("");
  const [loginPass, setLoginPass] = useState("");
  const [loginError, setLoginError] = useState<string | null>(null);
  const [loginBusy, setLoginBusy] = useState(false);

  const rank = rankFor(xp);
  const meta = VIEW_TITLES[view];
  const appName = remoteConfig?.appName || "Italiano Master";
  const dueCount = useMemo(() => dueCards(srs).length, [srs]);

  // features activables/desactivables desde el Panel Admin
  const features = remoteConfig?.features ?? { plans: true, tutor: true, games: true, certificates: true, weeklyPlan: true };

  // pestaña contextual de la barra inferior: tutor → juegos → gramática
  const extraTab = features.tutor
    ? { id: "tutor" as ViewId, label: "Tutor IA", icon: Sparkles }
    : features.games
      ? { id: "giochi" as ViewId, label: "Juegos", icon: Gamepad2 }
      : { id: "grammatica" as ViewId, label: "Gramática", icon: Brain };

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setLoginBusy(true);
    setLoginError(null);
    try {
      const { user, token } = await loginRequest(loginUser.trim(), loginPass);
      if (token) setAdminToken(token);
      loginAccount({ id: user.id, username: user.username, displayName: user.displayName, role: user.role }, {
        displayName: user.displayName,
        level: user.role === "student" ? user.level : undefined,
        plan: user.role === "student" ? user.plan : undefined,
        xp: user.role === "student" ? user.xp : undefined,
        streak: user.role === "student" ? user.streak : undefined,
      });
      setLoginOpen(false);
      setLoginUser("");
      setLoginPass("");
      if (user.role === "admin") navigate("admin");
    } catch (err) {
      setLoginError(err instanceof Error ? err.message : "Error de acceso");
    } finally {
      setLoginBusy(false);
    }
  }

  async function handleLogout() {
    await logoutRequest(getAdminToken());
    setAdminToken(null);
    logoutAccount();
    if (view === "admin") navigate("inicio");
  }

  // aplica tema + tamaño de texto al <html>
  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", settings.theme === "dark");
    root.dataset.textsize = settings.textSize;
  }, [settings.theme, settings.textSize]);

  // al cambiar de vista, scroll arriba
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [view]);

  // drawer abierto: bloquea el scroll de fondo y cierra con Escape
  useEffect(() => {
    if (!menuOpen) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

  const sidebar = useMemo(
    () => (
      <nav aria-label="Secciones del curso" className="flex h-full flex-col gap-5 overflow-y-auto px-3 py-5 scrollbar-thin">
        {NAV_GROUPS.map((g) => {
          const items = g.items.filter((item) => {
            if (item.id === "piani" && !features.plans) return false;
            if (item.id === "tutor" && !features.tutor) return false;
            if (item.id === "giochi" && !features.games) return false;
            if (item.id === "certificati" && !features.certificates) return false;
            return true;
          });
          if (items.length === 0) return null;
          return (
            <div key={g.group}>
              <p className="mb-1.5 px-3 text-[10px] font-bold uppercase tracking-[0.16em] text-inchiostro/40 dark:text-inchiostro/50">{g.group}</p>
              <div className="flex flex-col gap-0.5">
                {items.map((item) => (
                  <NavItem
                    key={item.id}
                    id={item.id}
                    label={item.label}
                    icon={item.icon}
                    active={view === item.id}
                    onNav={() => { navigate(item.id); setMenuOpen(false); }}
                  />
                ))}
              </div>
            </div>
          );
        })}
        <div className="mt-auto rounded-2xl border border-soft bg-crema-scura p-3.5 dark:bg-inchiostro/10">
          <p className="flex items-center gap-2 text-xs font-bold text-muted-it">
            <FlaskConical className="h-3.5 w-3.5" aria-hidden="true" /> Italiano Master
          </p>
          <p className="mt-1 text-[11px] leading-relaxed text-muted-it">
            Di livello in livello: la tua strada da A1 a C2, con repaso inteligente e tutor IA.
          </p>
        </div>
      </nav>
    ),
    [view, navigate, features]
  );

  return (
    <div className="flex min-h-screen flex-col bg-crema font-sans text-inchiostro">
      {/* ── header ── */}
      <header className="sticky top-0 z-40 border-b border-soft bg-crema/90 backdrop-blur-md pt-safe">
        <div className="flex h-16 items-center gap-2 px-3 sm:gap-3 sm:px-6">
          <button onClick={() => navigate("inicio")} className="flex items-center gap-2.5" aria-label="Ir al inicio">
            <span className={cn(
              "flex h-9 w-9 items-center justify-center rounded-xl p-[1.5px] transition-all",
              plan === "platinum" ? "plan-platinum-bg ring-platinum" : "bg-gradient-to-br from-verde via-crema to-rosso"
            )}>
              <span className="flex h-full w-full items-center justify-center rounded-[10px] bg-crema">
                <span className="font-display text-lg font-bold italic text-verde-scuro dark:text-verde">I</span>
              </span>
            </span>
            <span className="hidden font-display text-lg font-semibold tracking-tight sm:block">
              {appName.split(" ")[0]} <span className="italic text-verde-scuro dark:text-verde">{appName.split(" ").slice(1).join(" ") || "Master"}</span>
            </span>
          </button>

          <div className="mx-auto hidden min-w-0 flex-col items-center md:flex">
            <p className="truncate font-display text-lg font-semibold leading-tight">{meta.title}</p>
            <p className="hidden max-w-xl truncate text-xs text-muted-it lg:block">{meta.sub}</p>
          </div>

          <div className="ml-auto flex items-center gap-1.5 sm:gap-2">
            <span className="inline-flex items-center gap-1 rounded-full bg-oro-tenue px-2.5 py-1.5 text-[11px] font-bold text-oro-scuro sm:gap-1.5 sm:px-3 sm:text-xs dark:text-oro" title="Puntos de experiencia">
              <Zap className="h-3.5 w-3.5" aria-hidden="true" />
              {xp}
              <span className="hidden sm:inline">XP</span>
            </span>
            <span className="inline-flex items-center gap-1 rounded-full bg-rosso-tenue px-2.5 py-1.5 text-[11px] font-bold text-rosso-scuro sm:gap-1.5 sm:px-3 sm:text-xs dark:text-rosso" title="Racha de estudio">
              <Flame className="h-3.5 w-3.5" aria-hidden="true" />
              {streak}
            </span>
            <span className="hidden items-center gap-1.5 rounded-full bg-verde-tenue px-3 py-1.5 text-xs font-bold text-verde-scuro sm:inline-flex dark:text-verde" title="Nivel y rango">
              <Medal className="h-3.5 w-3.5" aria-hidden="true" />
              {level ?? "—"} · {rank.name}
            </span>
            {plan === "free" && features.plans ? (
              <UpgradeCta />
            ) : plan !== "free" ? (
              <PlanChip onClick={() => navigate("piani")} className="hidden sm:inline-flex" />
            ) : null}
            {account ? (
              <>
                <span
                  className={cn(
                    "hidden items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-bold sm:inline-flex",
                    account.role === "admin" ? "bg-rosso-tenue text-rosso-scuro dark:text-rosso" : "bg-verde-tenue text-verde-scuro dark:text-verde"
                  )}
                  title={account.role === "admin" ? "Administrador de la plataforma" : "Sesión iniciada"}
                >
                  {account.role === "admin" ? <Shield className="h-3.5 w-3.5" aria-hidden="true" /> : null}
                  {account.username}
                </span>
                <button
                  onClick={handleLogout}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-soft transition-colors hover:bg-rosso-tenue"
                  aria-label="Cerrar sesión"
                  title="Cerrar sesión"
                >
                  <LogOut className="h-4.5 w-4.5" aria-hidden="true" />
                </button>
              </>
            ) : (
              <button
                onClick={() => setLoginOpen(true)}
                className="inline-flex h-9 items-center gap-1.5 rounded-xl border border-soft px-3 text-xs font-bold transition-colors hover:bg-verde-tenue"
                aria-label="Iniciar sesión"
                title="Iniciar sesión (estudiantes y administración)"
              >
                <LogIn className="h-4 w-4" aria-hidden="true" />
                <span className="hidden sm:inline">Accedi</span>
              </button>
            )}
            <button
              onClick={() => updateSettings({ theme: settings.theme === "dark" ? "light" : "dark" })}
              className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-soft transition-colors hover:bg-verde-tenue"
              aria-label={settings.theme === "dark" ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
              title={settings.theme === "dark" ? "Modo claro" : "Modo oscuro"}
            >
              {settings.theme === "dark" ? "☀️" : "🌙"}
            </button>
          </div>
        </div>
        {/* móvil: título */}
        <div className="border-t border-soft px-3 py-1.5 md:hidden sm:px-6">
          <p className="truncate text-sm font-semibold">{meta.title}</p>
        </div>
      </header>

      <div className="flex flex-1">
        {/* ── sidebar desktop ── */}
        <aside className="sticky top-16 hidden h-[calc(100vh-4rem)] w-64 shrink-0 border-r border-soft bg-surface lg:block">
          {sidebar}
        </aside>

        {/* ── drawer móvil ── */}
        {menuOpen && (
          <div className="fixed inset-0 z-50 lg:hidden" role="dialog" aria-modal="true" aria-label="Menú de navegación">
            <div className="fade-overlay absolute inset-0 bg-inchiostro/50 backdrop-blur-sm" onClick={() => setMenuOpen(false)} />
            <div className="drawer-panel absolute inset-y-0 left-0 flex w-72 max-w-[85vw] flex-col bg-surface shadow-2xl">
              <div className="flex h-16 shrink-0 items-center justify-between border-b border-soft px-4">
                <p className="truncate font-display text-lg font-semibold">
                  Ciao, {userName.split(" ")[0]} 👋
                </p>
                <button onClick={() => setMenuOpen(false)} className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-soft" aria-label="Cerrar menú">
                  <X className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>
              <div className="min-h-0 flex-1">{sidebar}</div>
            </div>
          </div>
        )}

        {/* ── contenido ── */}
        <main className="min-w-0 flex-1" id="contenido">
          <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:py-10">{children}</div>
          <footer className="mt-16 border-t border-soft">
            <div className="h-1.5 w-full bg-gradient-to-r from-verde via-crema to-rosso" aria-hidden="true" />
            <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-6 text-xs text-muted-it sm:flex-row sm:px-6">
              <p>
                <span className="font-display text-sm font-semibold text-inchiostro">{appName}</span> · LMS de
                italiano para hispanohablantes · desde cero hasta C2
              </p>
              <p className="font-mono">A1 → A2 → B1 → B2 → C1 → C2</p>
            </div>
          </footer>
          {/* espaciador para que la barra inferior no tape el footer (solo móvil) */}
          <div className="h-24 lg:hidden" aria-hidden="true" />
        </main>

        {/* ── barra inferior móvil ── */}
        <nav
          aria-label="Navegación rápida"
          className="bottom-nav-in bottom-safe fixed inset-x-0 bottom-0 z-40 border-t border-soft bg-crema/95 backdrop-blur-md lg:hidden dark:bg-inchiostro/95"
        >
          <div className="mx-auto flex max-w-md items-stretch px-1.5">
            <BottomNavItem label="Inicio" icon={Home} active={view === "inicio"} onClick={() => navigate("inicio")} />
            <BottomNavItem label="Cursos" icon={GraduationCap} active={view === "cursos"} onClick={() => navigate("cursos")} />
            <BottomNavItem label="Repaso" icon={RefreshCcw} active={view === "repaso"} onClick={() => navigate("repaso")} badge={dueCount} />
            <BottomNavItem label={extraTab.label} icon={extraTab.icon} active={view === extraTab.id} onClick={() => navigate(extraTab.id)} />
            <BottomNavItem label="Más" icon={Menu} active={menuOpen} onClick={() => setMenuOpen(true)} />
          </div>
        </nav>
        {/* ── modal de acceso ── */}
        {loginOpen && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-4" role="dialog" aria-modal="true" aria-label="Iniciar sesión">
            <div className="absolute inset-0 bg-inchiostro/50 backdrop-blur-sm" onClick={() => setLoginOpen(false)} />
            <form
              onSubmit={handleLogin}
              className="relative w-full max-w-sm rounded-3xl border border-soft bg-surface p-6 shadow-2xl"
            >
              <div className="mb-1 flex items-center justify-between">
                <h2 className="font-display text-xl font-semibold">Accedi al tuo account</h2>
                <button type="button" onClick={() => setLoginOpen(false)} className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-soft" aria-label="Cerrar">
                  <X className="h-4.5 w-4.5" aria-hidden="true" />
                </button>
              </div>
              <p className="mb-4 text-xs text-muted-it">Estudiantes y administración de la plataforma</p>
              <label className="mb-1 block text-xs font-bold uppercase tracking-wide text-muted-it" htmlFor="login-user">Usuario</label>
              <input
                id="login-user"
                value={loginUser}
                onChange={(e) => setLoginUser(e.target.value)}
                autoComplete="username"
                className="mb-3 w-full rounded-xl border border-soft bg-crema px-3.5 py-2.5 text-sm outline-none focus:ring-2 focus:ring-verde/40"
                placeholder="p. ej. giulia"
                required
              />
              <label className="mb-1 block text-xs font-bold uppercase tracking-wide text-muted-it" htmlFor="login-pass">Contraseña</label>
              <input
                id="login-pass"
                type="password"
                value={loginPass}
                onChange={(e) => setLoginPass(e.target.value)}
                autoComplete="current-password"
                className="mb-1 w-full rounded-xl border border-soft bg-crema px-3.5 py-2.5 text-sm outline-none focus:ring-2 focus:ring-verde/40"
                placeholder="••••••••"
                required
              />
              {loginError && (
                <p role="alert" className="mb-3 rounded-xl bg-rosso-tenue px-3 py-2 text-xs font-semibold text-rosso-scuro dark:text-rosso">{loginError}</p>
              )}
              <button
                type="submit"
                disabled={loginBusy}
                className="mt-2 w-full rounded-xl bg-verde px-4 py-2.5 text-sm font-bold text-white shadow-md shadow-verde/25 transition-all hover:bg-verde-scuro disabled:opacity-60"
              >
                {loginBusy ? "Verifica…" : "Entra"}
              </button>
              <p className="mt-3 text-center text-[11px] leading-relaxed text-muted-it">
                ¿No tienes cuenta? Puedes estudiar como invitado; la administración puede crear cuentas de estudiante desde el Panel Admin.
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export { VIEW_TITLES };
