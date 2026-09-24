"use client";

import { useEffect, useMemo, useState } from "react";
import {
  BookOpen, BookMarked, Brain, Calculator, Clapperboard, Compass, Ear, FlaskConical,
  Gamepad2, GraduationCap, Home, Languages, Library, LineChart, MapPin, Medal, PenLine,
  RefreshCcw, ScrollText, Settings, Sparkles, Trophy, Volume2, X, Zap, Flame, Menu,
} from "lucide-react";
import type { ViewId } from "@/lib/lms/types";
import { useLms, rankFor } from "@/lib/lms/store";
import { cn } from "@/lib/utils";

/* ── Shell del LMS: sidebar + header + vista activa ──────────────── */

const NAV_GROUPS: { group: string; items: { id: ViewId; label: string; icon: typeof Home }[] }[] = [
  {
    group: "Tu ruta",
    items: [
      { id: "inicio", label: "Inicio", icon: Home },
      { id: "progreso", label: "Mi progreso", icon: LineChart },
      { id: "test", label: "Test de nivel", icon: Compass },
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
    items: [{ id: "impostazioni", label: "Configuración", icon: Settings }],
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
  giochi: { title: "Giochi", sub: "Memoria, orden de frases y quiz relámpago" },
  repaso: { title: "Repaso inteligente", sub: "Repetición espaciada adaptada a tu memoria" },
  esami: { title: "Esami", sub: "Pruebas por nivel con certificado al aprobar" },
  certificati: { title: "Certificati", sub: "Tus diplomas de italiano, listos para descargar" },
  impostazioni: { title: "Impostazioni", sub: "Tema, tamaño de texto, audio y perfil" },
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

export function AppShell({ children }: { children: React.ReactNode }) {
  const view = useLms((s) => s.view);
  const navigate = useLms((s) => s.navigate);
  const xp = useLms((s) => s.xp);
  const streak = useLms((s) => s.streakCount);
  const level = useLms((s) => s.level);
  const userName = useLms((s) => s.userName);
  const settings = useLms((s) => s.settings);
  const updateSettings = useLms((s) => s.updateSettings);

  const [menuOpen, setMenuOpen] = useState(false);
  const rank = rankFor(xp);
  const meta = VIEW_TITLES[view];

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

  const sidebar = useMemo(
    () => (
      <nav aria-label="Secciones del curso" className="flex h-full flex-col gap-5 overflow-y-auto px-3 py-5 scrollbar-thin">
        {NAV_GROUPS.map((g) => (
          <div key={g.group}>
            <p className="mb-1.5 px-3 text-[10px] font-bold uppercase tracking-[0.16em] text-inchiostro/40 dark:text-inchiostro/50">{g.group}</p>
            <div className="flex flex-col gap-0.5">
              {g.items.map((item) => (
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
        ))}
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
    [view, navigate]
  );

  return (
    <div className="flex min-h-screen flex-col bg-crema font-sans text-inchiostro">
      {/* ── header ── */}
      <header className="sticky top-0 z-40 border-b border-soft bg-crema/90 backdrop-blur-md">
        <div className="flex h-16 items-center gap-3 px-4 sm:px-6">
          <button
            onClick={() => setMenuOpen(true)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-soft lg:hidden"
            aria-label="Abrir menú de navegación"
          >
            <Menu className="h-5 w-5" aria-hidden="true" />
          </button>

          <button onClick={() => navigate("inicio")} className="flex items-center gap-2.5" aria-label="Ir al inicio">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-verde via-crema to-rosso p-[1.5px]">
              <span className="flex h-full w-full items-center justify-center rounded-[10px] bg-crema">
                <span className="font-display text-lg font-bold italic text-verde-scuro dark:text-verde">I</span>
              </span>
            </span>
            <span className="hidden font-display text-lg font-semibold tracking-tight sm:block">
              Italiano <span className="italic text-verde-scuro dark:text-verde">Master</span>
            </span>
          </button>

          <div className="mx-auto hidden min-w-0 flex-col items-center md:flex">
            <p className="truncate font-display text-lg font-semibold leading-tight">{meta.title}</p>
            <p className="hidden max-w-xl truncate text-xs text-muted-it lg:block">{meta.sub}</p>
          </div>

          <div className="ml-auto flex items-center gap-1.5 sm:gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-oro-tenue px-3 py-1.5 text-xs font-bold text-oro-scuro dark:text-oro" title="Puntos de experiencia">
              <Zap className="h-3.5 w-3.5" aria-hidden="true" />
              {xp} XP
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-rosso-tenue px-3 py-1.5 text-xs font-bold text-rosso-scuro dark:text-rosso" title="Racha de estudio">
              <Flame className="h-3.5 w-3.5" aria-hidden="true" />
              {streak}
            </span>
            <span className="hidden items-center gap-1.5 rounded-full bg-verde-tenue px-3 py-1.5 text-xs font-bold text-verde-scuro sm:inline-flex dark:text-verde" title="Nivel y rango">
              <Medal className="h-3.5 w-3.5" aria-hidden="true" />
              {level ?? "—"} · {rank.name}
            </span>
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
        <div className="border-t border-soft px-4 py-2 md:hidden">
          <p className="text-sm font-semibold">{meta.title}</p>
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
            <div className="absolute inset-0 bg-inchiostro/50 backdrop-blur-sm" onClick={() => setMenuOpen(false)} />
            <div className="absolute inset-y-0 left-0 flex w-72 max-w-[85vw] flex-col bg-surface shadow-2xl">
              <div className="flex h-16 items-center justify-between border-b border-soft px-4">
                <p className="font-display text-lg font-semibold">
                  Ciao, {userName.split(" ")[0]} 👋
                </p>
                <button onClick={() => setMenuOpen(false)} className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-soft" aria-label="Cerrar menú">
                  <X className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>
              <div className="flex-1">{sidebar}</div>
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
                <span className="font-display text-sm font-semibold text-inchiostro">Italiano Master</span> · LMS de
                italiano para hispanohablantes · desde cero hasta C2
              </p>
              <p className="font-mono">A1 → A2 → B1 → B2 → C1 → C2</p>
            </div>
          </footer>
        </main>
      </div>
    </div>
  );
}

export { VIEW_TITLES };
