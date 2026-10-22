"use client";

import { useEffect, useMemo, useState } from "react";
import {
  Bot, Brain, BookOpen, FlaskConical, Gamepad2, GraduationCap, Home, Menu, RefreshCcw, Search, Shield, Sparkles,
  X, Zap, Flame, Medal, LogIn, LogOut,
} from "lucide-react";
import type { ViewId } from "@/lib/lms/types";
import { useLms, rankFor } from "@/lib/lms/store";
import { dueCards } from "@/lib/lms/srs";
import { NAV_GROUPS, VIEW_TITLES, navGroupsFor, viewSupportsLang } from "@/lib/lms/nav";
import { LANG_LIST, SHIPPED_LEVELS, LANGS } from "@/lib/lms/languages";
import { useUi, navLabelFor, navGroupFor, viewTitleFor } from "@/lib/lms/ui";
import { PlanChip, UpgradeCta } from "./plan-badge";
import { loginRequest, setAdminToken, setSessionToken, logoutRequest, getAdminToken, getSessionToken } from "@/lib/lms/remote";
import { SearchPalette } from "./search-palette";
import { cn } from "@/lib/utils";

/* ── Shell del LMS: sidebar + header + vista activa ──────────────── */

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
  const u = useUi();
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
          <span className="absolute -right-0.5 -top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-rosso px-1 text-[9px] font-bold leading-none text-white shadow-sm" aria-label={u.shell.dueBadge(badge)}>
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
  /* v9.17 · lengua de estudio activa: filtra la navegación */
  const activeLang = useLms((s) => s.activeLang) ?? "it";
  const setActiveLang = useLms((s) => s.setActiveLang);
  const xp = useLms((s) => s.xp);
  const streak = useLms((s) => s.streakCount);
  const level = useLms((s) => s.level);
  const userName = useLms((s) => s.userName);
  const privacyMode = useLms((s) => s.security.privacyMode);
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
  /* v9.18 · UI en la lengua de estudio activa */
  const u = useUi();
  /* v9.5.1: vista corrupta/desconocida en el estado persistido → fallback a inicio.
     Antes VIEW_TITLES[view] era undefined y meta.title tumbaba toda la app. */
  const meta = viewTitleFor(activeLang, view ?? "inicio") ?? VIEW_TITLES.inicio;
  const appName = remoteConfig?.appName || "Políglota Master";
  const dueCount = useMemo(() => dueCards(srs).length, [srs]);

  // features activables/desactivables desde el Panel Admin
  const features = remoteConfig?.features ?? { plans: true, tutor: true, games: true, certificates: true, weeklyPlan: true };

  // pestaña contextual de la barra inferior: tutor → juegos → gramática
  // v9.17: respeta la lengua activa (esas vistas son solo-italiano)
  // v9.40: etiquetas localizadas según la lengua de estudio (navLabelFor)
  const itOnly = (id: ViewId) => viewSupportsLang(id, activeLang);
  const extraTab =
    features.tutor && itOnly("tutor")
      ? { id: "tutor" as ViewId, label: navLabelFor(activeLang, "tutor"), icon: Sparkles }
      : features.games && itOnly("giochi")
        ? { id: "giochi" as ViewId, label: navLabelFor(activeLang, "giochi"), icon: Gamepad2 }
        : itOnly("grammatica")
          ? { id: "grammatica" as ViewId, label: navLabelFor(activeLang, "grammatica"), icon: Brain }
          : { id: "legal" as ViewId, label: u.nav.items.legal ?? "Privacidad", icon: Shield };

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setLoginBusy(true);
    setLoginError(null);
    try {
      const { user, token } = await loginRequest(loginUser.trim(), loginPass);
      if (token) {
        // token de sesión separado: admin → panel, estudiante → sincronización de perfil
        if (user.role === "admin") setAdminToken(token);
        else setSessionToken(token);
      }
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
      setLoginError(err instanceof Error ? err.message : u.shell.loginErr);
    } finally {
      setLoginBusy(false);
    }
  }

  async function handleLogout() {
    await logoutRequest(getAdminToken() ?? getSessionToken());
    setAdminToken(null);
    setSessionToken(null);
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
      <nav aria-label={u.shell.navAria} className="flex h-full flex-col gap-5 overflow-y-auto px-3 py-5 scrollbar-thin">
        {/* v9.17 · selector de lengua de estudio */}
        <div className="mb-1 rounded-2xl border border-soft bg-surface p-3" role="group" aria-label={u.shell.langAria}>
          <p className="mb-2 px-1 text-[10px] font-bold uppercase tracking-[0.16em] text-inchiostro/40 dark:text-inchiostro/50">
            {u.shell.studying} · {activeLang === "it" ? LANGS[activeLang].variantEs : LANGS[activeLang].variant}
          </p>
          <div className="flex flex-wrap gap-1.5">
            {LANG_LIST.filter((L) => (SHIPPED_LEVELS[L.code] ?? []).length > 0).map((L) => (
              <button
                key={L.code}
                type="button"
                onClick={() => setActiveLang(L.code)}
                aria-pressed={activeLang === L.code}
                title={L.variantEs}
                className={activeLang === L.code
                  ? "inline-flex min-h-9 items-center gap-1.5 rounded-full bg-verde px-3 text-xs font-bold text-white"
                  : "inline-flex min-h-9 items-center gap-1.5 rounded-full bg-inchiostro/5 px-3 text-xs font-bold text-muted-it transition-colors hover:bg-verde-tenue hover:text-verde dark:bg-inchiostro/10"}
              >
                <span aria-hidden="true">{L.flag}</span> {L.name}
              </button>
            ))}
          </div>
        </div>
        {navGroupsFor(activeLang).map((g) => {
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
              <p className="mb-1.5 px-3 text-[10px] font-bold uppercase tracking-[0.16em] text-inchiostro/40 dark:text-inchiostro/50">{navGroupFor(activeLang, g.group)}</p>
              <div className="flex flex-col gap-0.5">
                {items.map((item) => (
                  <NavItem
                    key={item.id}
                    id={item.id}
                    label={navLabelFor(activeLang, item.id)}
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
            <FlaskConical className="h-3.5 w-3.5" aria-hidden="true" /> Políglota Master
            {/* v9.40 · divulgación siempre visible: construida con IA */}
            <span className="inline-flex items-center gap-1 rounded-full bg-viola-tenue px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-viola-scuro dark:bg-viola-tenue/40 dark:text-viola" title="App construida con IA · más detalles en Privacidad y legal">
              <Bot className="h-3 w-3" aria-hidden="true" /> IA
            </span>
          </p>
          <p className="mt-1 text-[11px] leading-relaxed text-muted-it">
            {u.shell.tagline}
          </p>
        </div>
      </nav>
    ),
    [view, navigate, features, activeLang, u]
  );

  return (
    <div className="flex min-h-screen flex-col bg-crema font-sans text-inchiostro">
      {/* ── header ── */}
      <header className="sticky top-0 z-40 border-b border-soft bg-crema/90 backdrop-blur-md pt-safe">
        <div className="flex h-16 items-center gap-2 px-3 sm:gap-3 sm:px-6">
          <button onClick={() => navigate("inicio")} className="flex items-center gap-2.5" aria-label={u.shell.goHome}>
            <span className={cn(
              "flex h-9 w-9 items-center justify-center rounded-xl p-[1.5px] transition-all",
              plan === "platinum" ? "plan-platinum-bg ring-platinum" : "bg-gradient-to-br from-verde via-crema to-rosso"
            )}>
              <img src="/icon-192.png" alt="" aria-hidden="true" className="h-full w-full rounded-[10px] object-cover dark:hidden" />
              <img src="/icon-dark-192.png" alt="" aria-hidden="true" className="hidden h-full w-full rounded-[10px] object-cover dark:block" />
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
            <button
              onClick={() => window.dispatchEvent(new Event("im:open-search"))}
              className="inline-flex h-9 items-center gap-1.5 rounded-xl border border-soft px-2.5 text-xs font-bold text-inchiostro/70 transition-colors hover:bg-verde-tenue sm:px-3 dark:text-inchiostro/80"
              aria-label={u.shell.searchAria}
              title={u.shell.searchTitle}
            >
              <Search className="h-4 w-4" aria-hidden="true" />
              <span className="hidden md:inline">{u.shell.search}</span>
              <kbd className="hidden rounded-md border border-soft bg-crema-scura px-1.5 py-0.5 font-mono text-[10px] text-muted-it lg:inline dark:bg-inchiostro/10">Ctrl K</kbd>
            </button>
            <span className="inline-flex items-center gap-1 rounded-full bg-oro-tenue px-2.5 py-1.5 text-[11px] font-bold text-oro-scuro sm:gap-1.5 sm:px-3 sm:text-xs dark:text-oro" title={u.shell.xpTitle}>
              <Zap className="h-3.5 w-3.5" aria-hidden="true" />
              {xp}
              <span className="hidden sm:inline">XP</span>
            </span>
            <span className="inline-flex items-center gap-1 rounded-full bg-rosso-tenue px-2.5 py-1.5 text-[11px] font-bold text-rosso-scuro sm:gap-1.5 sm:px-3 sm:text-xs dark:text-rosso" title={u.shell.streakTitle}>
              <Flame className="h-3.5 w-3.5" aria-hidden="true" />
              {streak}
            </span>
            <span className="hidden items-center gap-1.5 rounded-full bg-verde-tenue px-3 py-1.5 text-xs font-bold text-verde-scuro sm:inline-flex dark:text-verde" title={u.shell.levelTitle}>
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
                  title={account.role === "admin" ? u.shell.adminTitle : u.shell.sessionTitle}
                >
                  {account.role === "admin" ? <Shield className="h-3.5 w-3.5" aria-hidden="true" /> : null}
                  {account.username}
                </span>
                <button
                  onClick={handleLogout}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-soft transition-colors hover:bg-rosso-tenue"
                  aria-label={u.shell.logout}
                  title={u.shell.logout}
                >
                  <LogOut className="h-4.5 w-4.5" aria-hidden="true" />
                </button>
              </>
            ) : (
              <button
                onClick={() => setLoginOpen(true)}
                className="inline-flex h-9 items-center gap-1.5 rounded-xl border border-soft px-3 text-xs font-bold transition-colors hover:bg-verde-tenue"
                aria-label={u.shell.loginAria}
                title={u.shell.loginTitle}
              >
                <LogIn className="h-4 w-4" aria-hidden="true" />
                <span className="hidden sm:inline">{u.shell.signIn}</span>
              </button>
            )}
            <button
              onClick={() => updateSettings({ theme: settings.theme === "dark" ? "light" : "dark" })}
              className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-soft transition-colors hover:bg-verde-tenue"
              aria-label={settings.theme === "dark" ? u.shell.themeToLight : u.shell.themeToDark}
              title={settings.theme === "dark" ? u.shell.titleLight : u.shell.titleDark}
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
          <div className="fixed inset-0 z-50 lg:hidden" role="dialog" aria-modal="true" aria-label={u.shell.menuAria}>
            <div className="fade-overlay absolute inset-0 bg-inchiostro/50 backdrop-blur-sm" onClick={() => setMenuOpen(false)} />
            <div className="drawer-panel absolute inset-y-0 left-0 flex w-72 max-w-[85vw] flex-col bg-surface shadow-2xl">
              <div className="flex h-16 shrink-0 items-center justify-between border-b border-soft px-4">
                <p className="truncate font-display text-lg font-semibold">
                  {/* v9.8.2: invitado sin nombre → saludo en vez del marcador "Studente" */}
                  {userName && userName !== "Studente"
                    ? `${u.shell.hello}, ${privacyMode ? "•••" : userName.split(" ")[0]} 👋`
                    : `${u.shell.hello}! 👋`}
                </p>
                <button onClick={() => setMenuOpen(false)} className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-soft" aria-label={u.shell.closeMenu}>
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
                <span className="font-display text-sm font-semibold text-inchiostro">{appName}</span> · {u.shell.footer}
                {/* v9.40 · divulgación IA siempre visible también en el pie */}
                <span className="ml-2 inline-flex items-center gap-1 rounded-full bg-viola-tenue px-2 py-0.5 align-middle text-[10px] font-bold uppercase tracking-wide text-viola-scuro dark:bg-viola-tenue/40 dark:text-viola">
                  <Bot className="h-3 w-3" aria-hidden="true" /> Construida con IA
                </span>
              </p>
              <p className="font-mono">A1 → A2 → B1 → B2 → C1 → C2</p>
            </div>
          </footer>
          {/* espaciador para que la barra inferior no tape el footer (solo móvil) */}
          <div className="h-24 lg:hidden" aria-hidden="true" />
        </main>

        {/* ── barra inferior móvil ── */}
        {/* v9.8.2: sin dark:bg-inchiostro/95 — en modo oscuro --inchiostro se
            invierte a claro y la barra quedaba como un bloque claro con las
            fichas (iconos + etiquetas claras) invisibles. bg-crema-scura
            (#242019 en oscuro) da elevación sutil sobre el fondo #1b1814. */}
        <nav
          aria-label={u.shell.quickNavAria}
          className="bottom-nav-in bottom-safe fixed inset-x-0 bottom-0 z-40 border-t border-soft bg-crema/95 backdrop-blur-md lg:hidden dark:bg-crema-scura/95"
        >
          <div className="mx-auto flex max-w-md items-stretch px-1.5">
            <BottomNavItem label={u.nav.items.inicio ?? "Inicio"} icon={Home} active={view === "inicio"} onClick={() => navigate("inicio")} />
            <BottomNavItem label={u.nav.items.cursos ?? "Cursos"} icon={GraduationCap} active={view === "cursos"} onClick={() => navigate("cursos")} />
            {itOnly("repaso")
              ? <BottomNavItem label={u.nav.items.repaso ?? "Repaso"} icon={RefreshCcw} active={view === "repaso"} onClick={() => navigate("repaso")} badge={dueCount} />
              : <BottomNavItem label={u.nav.items.letture ?? "Letture"} icon={BookOpen} active={view === "letture"} onClick={() => navigate("letture")} />}
            <BottomNavItem label={extraTab.label} icon={extraTab.icon} active={view === extraTab.id} onClick={() => navigate(extraTab.id)} />
            <BottomNavItem label={u.shell.more} icon={Menu} active={menuOpen} onClick={() => setMenuOpen(true)} />
          </div>
        </nav>
        {/* ── modal de acceso ── */}
        {loginOpen && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-4" role="dialog" aria-modal="true" aria-label={u.shell.loginAria}>
            <div className="absolute inset-0 bg-inchiostro/50 backdrop-blur-sm" onClick={() => setLoginOpen(false)} />
            <form
              onSubmit={handleLogin}
              className="relative w-full max-w-sm rounded-3xl border border-soft bg-surface p-6 shadow-2xl"
            >
              <div className="mb-1 flex items-center justify-between">
                <h2 className="font-display text-xl font-semibold">{u.shell.loginHeading}</h2>
                <button type="button" onClick={() => setLoginOpen(false)} className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-soft" aria-label={u.shell.closeMenu}>
                  <X className="h-4.5 w-4.5" aria-hidden="true" />
                </button>
              </div>
              <p className="mb-4 text-xs text-muted-it">{u.shell.loginSub}</p>
              <label className="mb-1 block text-xs font-bold uppercase tracking-wide text-muted-it" htmlFor="login-user">{u.shell.userLabel}</label>
              <input
                id="login-user"
                value={loginUser}
                onChange={(e) => setLoginUser(e.target.value)}
                autoComplete="username"
                className="mb-3 w-full rounded-xl border border-soft bg-crema px-3.5 py-2.5 text-sm outline-none focus:ring-2 focus:ring-verde/40"
                placeholder={u.shell.userPh}
                required
              />
              <label className="mb-1 block text-xs font-bold uppercase tracking-wide text-muted-it" htmlFor="login-pass">{u.shell.passLabel}</label>
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
                {loginBusy ? u.shell.checking : u.shell.enter}
              </button>
              <p className="mt-3 text-center text-[11px] leading-relaxed text-muted-it">
                {u.shell.loginNote}
              </p>
            </form>
          </div>
        )}

        {/* ── ricerca globale (Ctrl+K) ── */}
        <SearchPalette />
      </div>
    </div>
  );
}

export { VIEW_TITLES };
