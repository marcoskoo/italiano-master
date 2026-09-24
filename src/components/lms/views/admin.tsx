"use client";

/* ── Panel Admin · Pannello di Controllo totale della piattaforma ────
   Acceso: usuario Mkoo. Gestiona usuarios, contenido, configuración,
   actividad y datos de toda la app.                                        */

import { useCallback, useEffect, useState } from "react";
import {
  Activity, BarChart3, Database, Download, FileJson, LayoutDashboard, Lock, LogOut,
  RefreshCcw, ScrollText, Settings as SettingsIcon, Shield, Trash2, UserPlus, Users, Wrench,
} from "lucide-react";
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { useLms } from "@/lib/lms/store";
import { adminFetch, getAdminToken, loginRequest, setAdminToken, logoutRequest, type SessionUser } from "@/lib/lms/remote";
import type { AppConfig } from "@/lib/lms/appconfig";
import { cn } from "@/lib/utils";
import { UsersTab } from "./admin-users";
import { ContentTab } from "./admin-content";
import { SettingsTab } from "./admin-settings";

/* ── tipos de las respuestas del API admin ─────────────────────────── */

export interface AdminUserRow {
  id: string; username: string; displayName: string; role: string;
  level: string; plan: string; xp: number; streak: number;
  lessonsDone: number; wordsInSrs: number; active: boolean;
  lastSeen: string; createdAt: string;
}

export interface EventRow { id: string; clientId: string; username: string | null; event: string; detail: string | null; at: string; }

export interface OverviewData {
  kpis: {
    totalUsers: number; students: number; activeStudents: number; admins: number;
    totalXp: number; events7: number; eventsToday: number;
    customWords: number; hiddenWords: number; customLessons: number; disabledLessons: number; customExercises: number;
  };
  byDay: { day: string; label: string; count: number }[];
  byType: Record<string, number>;
  byLevel: Record<string, number>;
  byPlan: Record<string, number>;
  topStudents: { username: string; displayName: string; xp: number; level: string; plan: string; streak: number }[];
  recent: EventRow[];
  configSummary: { maintenance: boolean; features: AppConfig["features"]; appName: string };
}

export const EVENT_LABELS: Record<string, string> = {
  boot: "Apertura de la app",
  login: "Inicio de sesión",
  admin_login: "Login de admin",
  admin_action: "Acción del admin",
  lesson_completed: "Lección completada",
  quiz_completed: "Quiz completado",
  plan_changed: "Cambio de plan",
  tutor_message: "Mensaje al tutor IA",
  cert_earned: "Certificado obtenido",
  level_set: "Nivel asignado",
};

export function eventLabel(event: string): string {
  return EVENT_LABELS[event] ?? event;
}

export function timeAgo(iso: string): string {
  const diff = Date.now() - new Date(iso).getTime();
  const m = Math.floor(diff / 60000);
  if (m < 1) return "ahora";
  if (m < 60) return `hace ${m} min`;
  const h = Math.floor(m / 60);
  if (h < 24) return `hace ${h} h`;
  const d = Math.floor(h / 24);
  return `hace ${d} d`;
}

/* ── gate de login ─────────────────────────────────────────────────── */

function LoginGate({ onLogin }: { onLogin: () => void }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const loginAccount = useLms((s) => s.loginAccount);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    setError(null);
    try {
      const { user, token } = await loginRequest(username.trim(), password);
      if (user.role !== "admin" || !token) {
        setError("Esta cuenta no tiene permisos de administración.");
        return;
      }
      setAdminToken(token);
      // refleja la sesión en toda la app (header + guard de mantenimiento)
      loginAccount({ id: user.id, username: user.username, displayName: user.displayName, role: user.role });
      onLogin();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error de acceso");
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="mx-auto max-w-md py-10">
      <div className="rounded-3xl border border-soft bg-surface p-8 shadow-xl">
        <div className="mb-6 flex flex-col items-center text-center">
          <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-rosso-tenue">
            <Shield className="h-8 w-8 text-rosso-scuro dark:text-rosso" aria-hidden="true" />
          </span>
          <h2 className="mt-4 font-display text-2xl font-semibold">Area Riservata</h2>
          <p className="mt-1 text-sm text-muted-it">Acceso exclusivo para la administración de la plataforma</p>
        </div>
        <form onSubmit={submit} className="flex flex-col gap-3">
          <div>
            <label htmlFor="admin-user" className="mb-1 block text-xs font-bold uppercase tracking-wide text-muted-it">Usuario</label>
            <input
              id="admin-user" value={username} onChange={(e) => setUsername(e.target.value)} autoComplete="username"
              className="w-full rounded-xl border border-soft bg-crema px-3.5 py-2.5 text-sm outline-none focus:ring-2 focus:ring-rosso/40"
              placeholder="Usuario administrador" required
            />
          </div>
          <div>
            <label htmlFor="admin-pass" className="mb-1 block text-xs font-bold uppercase tracking-wide text-muted-it">Contraseña</label>
            <input
              id="admin-pass" type="password" value={password} onChange={(e) => setPassword(e.target.value)} autoComplete="current-password"
              className="w-full rounded-xl border border-soft bg-crema px-3.5 py-2.5 text-sm outline-none focus:ring-2 focus:ring-rosso/40"
              placeholder="••••••••••" required
            />
          </div>
          {error && <p role="alert" className="rounded-xl bg-rosso-tenue px-3 py-2 text-xs font-semibold text-rosso-scuro dark:text-rosso">{error}</p>}
          <button
            type="submit" disabled={busy}
            className="mt-2 inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-rosso px-4 py-2.5 text-sm font-bold text-white shadow-md shadow-rosso/25 transition-all hover:bg-rosso-scuro disabled:opacity-60"
          >
            <Lock className="h-4 w-4" aria-hidden="true" />
            {busy ? "Verificando…" : "Entra nel pannello"}
          </button>
        </form>
        <p className="mt-4 text-center text-[11px] leading-relaxed text-muted-it">
          Las credenciales de administración las define el propietario de la plataforma. Los estudiantes inician sesión desde el botón «Accedi» de la barra superior.
        </p>
      </div>
    </div>
  );
}

/* ── dashboard ─────────────────────────────────────────────────────── */

function KpiCard({ label, value, hint, tone = "verde" }: { label: string; value: string | number; hint?: string; tone?: "verde" | "rosso" | "oro" | "neutral" }) {
  return (
    <div className="rounded-2xl border border-soft bg-surface p-4">
      <p className="text-[11px] font-bold uppercase tracking-wide text-muted-it">{label}</p>
      <p className={cn(
        "mt-1.5 font-display text-2xl font-semibold",
        tone === "verde" && "text-verde-scuro dark:text-verde",
        tone === "rosso" && "text-rosso-scuro dark:text-rosso",
        tone === "oro" && "text-oro-scuro dark:text-oro",
        tone === "neutral" && "text-inchiostro"
      )}>{value}</p>
      {hint && <p className="mt-0.5 text-[11px] text-muted-it">{hint}</p>}
    </div>
  );
}

function DashboardTab({ overview, onChanged }: { overview: OverviewData; onChanged: () => void }) {
  const [busyMaintenance, setBusyMaintenance] = useState(false);

  async function toggleMaintenance() {
    setBusyMaintenance(true);
    try {
      await adminFetch("/api/admin/settings", {
        method: "PUT",
        body: JSON.stringify({ maintenance: { enabled: !overview.configSummary.maintenance } }),
      });
      onChanged();
    } catch (err) {
      alert(err instanceof Error ? err.message : "Error");
    } finally {
      setBusyMaintenance(false);
    }
  }

  const levelEntries = Object.entries(overview.byLevel).sort(([a], [b]) => a.localeCompare(b));
  const maxLevel = Math.max(1, ...levelEntries.map(([, n]) => n));

  return (
    <div className="flex flex-col gap-6">
      <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
        <KpiCard label="Usuarios totales" value={overview.kpis.totalUsers} hint={`${overview.kpis.students} estudiantes · ${overview.kpis.admins} admin`} />
        <KpiCard label="Estudiantes activos" value={overview.kpis.activeStudents} hint="con actividad en 7 días" tone="verde" />
        <KpiCard label="XP de la plataforma" value={overview.kpis.totalXp.toLocaleString("es-ES")} tone="oro" />
        <KpiCard label="Eventos hoy" value={overview.kpis.eventsToday} hint={`${overview.kpis.events7} en 7 días`} tone="rosso" />
      </div>

      <div className="grid gap-4 lg:grid-cols-5">
        <div className="rounded-2xl border border-soft bg-surface p-4 lg:col-span-3">
          <p className="mb-3 flex items-center gap-2 text-sm font-bold"><BarChart3 className="h-4 w-4 text-verde-scuro dark:text-verde" aria-hidden="true" /> Actividad (eventos · últimos 7 días)</p>
          <div className="h-56">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={overview.byDay} margin={{ top: 4, right: 4, left: -22, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="currentColor" className="text-inchiostro/10" />
                <XAxis dataKey="label" tick={{ fontSize: 12 }} stroke="currentColor" className="text-inchiostro/50" />
                <YAxis allowDecimals={false} tick={{ fontSize: 12 }} stroke="currentColor" className="text-inchiostro/50" />
                <Tooltip
                  cursor={{ fill: "rgba(0,0,0,0.04)" }}
                  contentStyle={{ borderRadius: 12, border: "1px solid rgba(0,0,0,0.08)", fontSize: 12 }}
                />
                <Bar dataKey="count" name="Eventos" fill="#0E7A4E" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="flex flex-col gap-4 lg:col-span-2">
          <div className="rounded-2xl border border-soft bg-surface p-4">
            <p className="mb-2 text-sm font-bold">Estudiantes por nivel</p>
            <div className="flex flex-col gap-1.5">
              {levelEntries.length === 0 && <p className="text-xs text-muted-it">Todavía no hay estudiantes.</p>}
              {levelEntries.map(([level, n]) => (
                <div key={level} className="flex items-center gap-2">
                  <span className="w-8 font-mono text-xs font-bold text-muted-it">{level}</span>
                  <div className="h-2.5 flex-1 overflow-hidden rounded-full bg-inchiostro/10">
                    <div className="h-full rounded-full bg-gradient-to-r from-verde to-verde-scuro" style={{ width: `${(n / maxLevel) * 100}%` }} />
                  </div>
                  <span className="w-6 text-right text-xs font-bold">{n}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-soft bg-surface p-4">
            <p className="mb-2 text-sm font-bold">Top estudiantes por XP</p>
            <ol className="flex flex-col gap-1.5">
              {overview.topStudents.length === 0 && <p className="text-xs text-muted-it">Sin datos todavía.</p>}
              {overview.topStudents.map((s, i) => (
                <li key={s.username} className="flex items-center gap-2 text-xs">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-oro-tenue font-bold text-oro-scuro dark:text-oro">{i + 1}</span>
                  <span className="min-w-0 flex-1 truncate font-semibold">{s.displayName}</span>
                  <span className="rounded-full bg-verde-tenue px-2 py-0.5 font-mono text-[10px] font-bold text-verde-scuro dark:text-verde">{s.level}</span>
                  <span className="font-mono font-bold text-oro-scuro dark:text-oro">{s.xp} XP</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <div className="rounded-2xl border border-soft bg-surface p-4">
          <p className="mb-3 flex items-center gap-2 text-sm font-bold"><Wrench className="h-4 w-4 text-rosso-scuro dark:text-rosso" aria-hidden="true" /> Acciones rápidas</p>
          <div className="flex flex-col gap-2.5">
            <button
              onClick={toggleMaintenance}
              disabled={busyMaintenance}
              className={cn(
                "flex min-h-11 items-center justify-between gap-3 rounded-xl border px-4 py-2.5 text-left text-sm font-semibold transition-colors disabled:opacity-60",
                overview.configSummary.maintenance
                  ? "border-rosso/40 bg-rosso-tenue text-rosso-scuro dark:text-rosso"
                  : "border-soft hover:bg-verde-tenue"
              )}
            >
              <span>Modo mantenimiento {overview.configSummary.maintenance ? "(ATTIVO — la app está cerrada para estudiantes)" : "(disattivo)"}</span>
              <span className={cn("rounded-full px-2.5 py-1 text-[10px] font-bold uppercase", overview.configSummary.maintenance ? "bg-rosso text-white" : "bg-verde text-white")}>
                {overview.configSummary.maintenance ? "ON" : "OFF"}
              </span>
            </button>
            <p className="text-[11px] leading-relaxed text-muted-it">
              Con el mantenimiento activo, cualquier visitante ve una pantalla de «Manutenzione in corso» y solo la administración puede entrar. El mensaje personalizado se edita en Impostazioni.
            </p>
          </div>
        </div>

        <div className="rounded-2xl border border-soft bg-surface p-4">
          <p className="mb-3 flex items-center gap-2 text-sm font-bold"><Activity className="h-4 w-4 text-verde-scuro dark:text-verde" aria-hidden="true" /> Actividad reciente</p>
          <ul className="flex max-h-64 flex-col gap-1.5 overflow-y-auto scrollbar-thin">
            {overview.recent.map((e) => (
              <li key={e.id} className="flex items-center gap-2 rounded-xl bg-crema-scura px-3 py-2 text-xs dark:bg-inchiostro/10">
                <span className="min-w-0 flex-1 truncate">
                  <span className="font-bold">{e.username ?? "invitado"}</span>
                  <span className="text-muted-it"> · {eventLabel(e.event)}</span>
                </span>
                <span className="shrink-0 font-mono text-[10px] text-muted-it">{timeAgo(e.at)}</span>
              </li>
            ))}
            {overview.recent.length === 0 && <p className="text-xs text-muted-it">Sin eventos todavía.</p>}
          </ul>
        </div>
      </div>
    </div>
  );
}

/* ── actividad ─────────────────────────────────────────────────────── */

function ActivityTab() {
  const [events, setEvents] = useState<EventRow[] | null>(null);
  const [types, setTypes] = useState<{ event: string; count: number }[]>([]);
  const [filter, setFilter] = useState("");
  const [error, setError] = useState<string | null>(null);

  const load = useCallback(async (event?: string) => {
    setEvents(null);
    setError(null);
    try {
      const data = await adminFetch<{ events: EventRow[]; types: { event: string; count: number }[] }>(
        `/api/admin/activity?limit=150${event ? `&event=${encodeURIComponent(event)}` : ""}`
      );
      setEvents(data.events);
      setTypes(data.types);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error");
    }
  }, []);

  useEffect(() => {
    const t = setTimeout(() => void load(), 0);
    return () => clearTimeout(t);
  }, [load]);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap items-center gap-2">
        <button
          onClick={() => { setFilter(""); void load(); }}
          className={cn("min-h-9 rounded-full border px-3.5 py-1.5 text-xs font-bold transition-colors", !filter ? "border-verde bg-verde text-white" : "border-soft hover:bg-verde-tenue")}
        >
          Todos
        </button>
        {types.map((t) => (
          <button
            key={t.event}
            onClick={() => { setFilter(t.event); void load(t.event); }}
            className={cn("min-h-9 rounded-full border px-3.5 py-1.5 text-xs font-bold transition-colors", filter === t.event ? "border-verde bg-verde text-white" : "border-soft hover:bg-verde-tenue")}
          >
            {eventLabel(t.event)} <span className="opacity-70">({t.count})</span>
          </button>
        ))}
        <button onClick={() => void load(filter)} className="ml-auto inline-flex min-h-9 items-center gap-1.5 rounded-full border border-soft px-3.5 py-1.5 text-xs font-bold hover:bg-verde-tenue" aria-label="Recargar actividad">
          <RefreshCcw className="h-3.5 w-3.5" aria-hidden="true" /> Recargar
        </button>
      </div>

      {error && <p role="alert" className="rounded-xl bg-rosso-tenue px-3 py-2 text-xs font-semibold text-rosso-scuro dark:text-rosso">{error}</p>}
      {events === null && <p className="text-sm text-muted-it">Cargando actividad…</p>}

      {events && (
        <div className="overflow-hidden rounded-2xl border border-soft bg-surface">
          <div className="max-h-[560px] overflow-y-auto scrollbar-thin">
            <table className="w-full text-left text-xs">
              <thead className="sticky top-0 bg-crema-scura text-[10px] uppercase tracking-wide text-muted-it dark:bg-inchiostro/20">
                <tr>
                  <th className="px-3 py-2.5 font-bold">Cuando</th>
                  <th className="px-3 py-2.5 font-bold">Usuario</th>
                  <th className="px-3 py-2.5 font-bold">Evento</th>
                  <th className="px-3 py-2.5 font-bold">Detalle</th>
                </tr>
              </thead>
              <tbody>
                {events.map((e) => (
                  <tr key={e.id} className="border-t border-soft">
                    <td className="whitespace-nowrap px-3 py-2.5 font-mono text-[11px] text-muted-it">
                      {new Date(e.at).toLocaleString("es-ES", { day: "2-digit", month: "short", hour: "2-digit", minute: "2-digit" })}
                    </td>
                    <td className="px-3 py-2.5 font-semibold">{e.username ?? <span className="text-muted-it">invitado</span>}</td>
                    <td className="px-3 py-2.5">{eventLabel(e.event)}</td>
                    <td className="max-w-[220px] truncate px-3 py-2.5 font-mono text-[10px] text-muted-it">{e.detail ?? "—"}</td>
                  </tr>
                ))}
                {events.length === 0 && (
                  <tr><td colSpan={4} className="px-3 py-6 text-center text-muted-it">No hay eventos con este filtro.</td></tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}

/* ── datos ─────────────────────────────────────────────────────────── */

function DataTab({ onGlobalChanged }: { onGlobalChanged: () => void }) {
  const [confirmText, setConfirmText] = useState("");
  const [busy, setBusy] = useState<string | null>(null);
  const [msg, setMsg] = useState<string | null>(null);

  async function exportJson() {
    setBusy("export");
    try {
      const res = await fetch("/api/admin/export", { headers: { Authorization: `Bearer ${getAdminToken() ?? ""}` } });
      if (!res.ok) throw new Error(`Error ${res.status}`);
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `italiano-master-backup-${new Date().toISOString().slice(0, 10)}.json`;
      a.click();
      URL.revokeObjectURL(url);
      setMsg("Copia de seguridad descargada.");
    } catch (err) {
      setMsg(err instanceof Error ? err.message : "Error al exportar");
    } finally {
      setBusy(null);
    }
  }

  async function resetPlatform() {
    setBusy("reset");
    try {
      const data = await adminFetch<{ report: Record<string, number> }>("/api/admin/reset", {
        method: "POST",
        body: JSON.stringify({ mode: "all" }),
      });
      setMsg(`Plataforma reiniciada: ${data.report.usersDeleted ?? 0} usuarios eliminados, ${data.report.telemetryDeleted ?? 0} eventos borrados, contenido restaurado.`);
      setConfirmText("");
      onGlobalChanged();
    } catch (err) {
      setMsg(err instanceof Error ? err.message : "Error");
    } finally {
      setBusy(null);
    }
  }

  async function seedDemo() {
    setBusy("seed");
    try {
      const data = await adminFetch<{ created: number; events: number }>("/api/admin/seed", { method: "POST" });
      setMsg(`Datos demo generados: ${data.created} estudiantes nuevos, ${data.events} eventos.`);
      onGlobalChanged();
    } catch (err) {
      setMsg(err instanceof Error ? err.message : "Error");
    } finally {
      setBusy(null);
    }
  }

  return (
    <div className="flex flex-col gap-4">
      {msg && <p role="status" className="rounded-xl bg-verde-tenue px-3 py-2 text-xs font-semibold text-verde-scuro dark:text-verde">{msg}</p>}

      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-soft bg-surface p-5">
          <p className="flex items-center gap-2 text-sm font-bold"><Download className="h-4 w-4 text-verde-scuro dark:text-verde" aria-hidden="true" /> Exportar todo (backup)</p>
          <p className="mt-1.5 text-xs leading-relaxed text-muted-it">
            Descarga un JSON completo con usuarios, configuración, overrides de contenido y telemetría. Ideal para copias de seguridad o migrar la plataforma.
          </p>
          <button
            onClick={exportJson}
            disabled={busy === "export"}
            className="mt-3 inline-flex min-h-11 items-center gap-2 rounded-xl bg-verde px-4 py-2.5 text-sm font-bold text-white shadow-md shadow-verde/25 hover:bg-verde-scuro disabled:opacity-60"
          >
            <FileJson className="h-4 w-4" aria-hidden="true" />
            {busy === "export" ? "Generando…" : "Descargar backup JSON"}
          </button>
        </div>

        <div className="rounded-2xl border border-soft bg-surface p-5">
          <p className="flex items-center gap-2 text-sm font-bold"><UserPlus className="h-4 w-4 text-oro-scuro dark:text-oro" aria-hidden="true" /> Generar datos demo</p>
          <p className="mt-1.5 text-xs leading-relaxed text-muted-it">
            Crea estudiantes de ejemplo con progreso y telemetría para probar el panel y llenar el dashboard. No toca los datos existentes.
          </p>
          <button
            onClick={seedDemo}
            disabled={busy === "seed"}
            className="mt-3 inline-flex min-h-11 items-center gap-2 rounded-xl bg-oro px-4 py-2.5 text-sm font-bold text-white shadow-md shadow-oro/25 hover:bg-oro-scuro disabled:opacity-60"
          >
            <Users className="h-4 w-4" aria-hidden="true" />
            {busy === "seed" ? "Generando…" : "Crear estudiantes demo"}
          </button>
        </div>
      </div>

      <div className="rounded-2xl border-2 border-rosso/40 bg-rosso-tenue/50 p-5">
        <p className="flex items-center gap-2 text-sm font-bold text-rosso-scuro dark:text-rosso"><Trash2 className="h-4 w-4" aria-hidden="true" /> Zona peligrosa · Reset total de la plataforma</p>
        <p className="mt-1.5 text-xs leading-relaxed text-rosso-scuro/80 dark:text-rosso/80">
          Elimina todos los usuarios (excepto Mkoo), toda la telemetría y restaura la configuración y el contenido a los valores de fábrica. Esta acción no se puede deshacer.
        </p>
        <div className="mt-3 flex flex-col gap-2 sm:flex-row">
          <input
            value={confirmText}
            onChange={(e) => setConfirmText(e.target.value)}
            placeholder='Escribe RESET para confirmar'
            aria-label="Confirmación de reset"
            className="w-full rounded-xl border border-rosso/30 bg-crema px-3.5 py-2.5 text-sm outline-none focus:ring-2 focus:ring-rosso/40 sm:max-w-xs"
          />
          <button
            onClick={resetPlatform}
            disabled={confirmText !== "RESET" || busy === "reset"}
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-rosso px-4 py-2.5 text-sm font-bold text-white shadow-md shadow-rosso/25 hover:bg-rosso-scuro disabled:opacity-40"
          >
            {busy === "reset" ? "Reiniciando…" : "Reiniciar plataforma"}
          </button>
        </div>
      </div>

      <div className="rounded-2xl border border-soft bg-surface p-5">
        <p className="flex items-center gap-2 text-sm font-bold"><Database className="h-4 w-4 text-verde-scuro dark:text-verde" aria-hidden="true" /> Sobre esta plataforma</p>
        <ul className="mt-2 flex flex-col gap-1 text-xs text-muted-it">
          <li>· Base de datos SQLite con Prisma ORM (usuarios, configuración, telemetría).</li>
          <li>· Contenido gestionado mediante overrides: el contenido base nunca se pierde, todo cambio es reversible.</li>
          <li>· Los cambios de configuración se aplican al instante en todos los clientes (recarga al enfocar la pestaña).</li>
        </ul>
      </div>
    </div>
  );
}

/* ── panel principal ───────────────────────────────────────────────── */

type TabId = "panoramica" | "utenti" | "contenuti" | "impostazioni" | "attivita" | "dati";

const TABS: { id: TabId; label: string; icon: typeof LayoutDashboard }[] = [
  { id: "panoramica", label: "Panorámica", icon: LayoutDashboard },
  { id: "utenti", label: "Usuarios", icon: Users },
  { id: "contenuti", label: "Contenido", icon: ScrollText },
  { id: "impostazioni", label: "Impostazioni", icon: SettingsIcon },
  { id: "attivita", label: "Actividad", icon: Activity },
  { id: "dati", label: "Datos", icon: Database },
];

export function AdminView() {
  const account = useLms((s) => s.account);
  const logoutAccount = useLms((s) => s.logoutAccount);
  const navigate = useLms((s) => s.navigate);

  const [session, setSession] = useState<"checking" | "anon" | "admin">("checking");
  const [tab, setTab] = useState<TabId>("panoramica");
  const [overview, setOverview] = useState<OverviewData | null>(null);
  const [overviewError, setOverviewError] = useState<string | null>(null);

  const loadOverview = useCallback(async () => {
    setOverviewError(null);
    try {
      const data = await adminFetch<OverviewData>("/api/admin/overview");
      setOverview(data);
      setSession("admin");
    } catch (err) {
      const msg = err instanceof Error ? err.message : "";
      if (msg.includes("Non autorizzato") || msg.includes("Sessione scaduta")) {
        setAdminToken(null);
        setSession("anon");
      } else {
        setOverviewError(msg || "Error");
        setSession("admin");
      }
    }
  }, []);

  useEffect(() => {
    if (!getAdminToken()) {
      const t = setTimeout(() => setSession("anon"), 0);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => void loadOverview(), 0);
    return () => clearTimeout(t);
  }, [loadOverview]);

  async function handleLogout() {
    await logoutRequest(getAdminToken());
    setAdminToken(null);
    logoutAccount();
    setSession("anon");
    navigate("inicio");
  }

  if (session === "checking") {
    return (
      <div className="flex min-h-[50vh] items-center justify-center">
        <p className="flex items-center gap-2 text-sm text-muted-it"><Shield className="h-4 w-4 animate-pulse" aria-hidden="true" /> Verificando sesión de administración…</p>
      </div>
    );
  }

  if (session === "anon") {
    return <LoginGate onLogin={() => { setSession("checking"); void loadOverview(); }} />;
  }

  return (
    <div className="flex flex-col gap-5">
      {/* cabecera del panel */}
      <div className="flex flex-wrap items-center gap-3 rounded-2xl border border-soft bg-gradient-to-r from-rosso-tenue via-surface to-verde-tenue p-4">
        <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-rosso text-white shadow-md shadow-rosso/30">
          <Shield className="h-5.5 w-5.5" aria-hidden="true" />
        </span>
        <div className="min-w-0">
          <h2 className="font-display text-xl font-semibold leading-tight">Pannello di Controllo</h2>
          <p className="text-xs text-muted-it">
            Benvenuto, <span className="font-bold text-inchiostro">{account?.displayName ?? "Mkoo"}</span> · acceso total a la plataforma
          </p>
        </div>
        <div className="ml-auto flex items-center gap-2">
          <button
            onClick={() => void loadOverview()}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-soft transition-colors hover:bg-verde-tenue"
            aria-label="Actualizar datos del panel"
            title="Actualizar"
          >
            <RefreshCcw className="h-4 w-4" aria-hidden="true" />
          </button>
          <button
            onClick={handleLogout}
            className="inline-flex min-h-10 items-center gap-2 rounded-xl border border-rosso/40 px-3.5 py-2 text-xs font-bold text-rosso-scuro transition-colors hover:bg-rosso-tenue dark:text-rosso"
          >
            <LogOut className="h-4 w-4" aria-hidden="true" /> Esci
          </button>
        </div>
      </div>

      {/* tabs */}
      <div className="flex gap-1.5 overflow-x-auto rounded-2xl border border-soft bg-surface p-1.5 scrollbar-thin" role="tablist" aria-label="Secciones del panel">
        {TABS.map((t) => (
          <button
            key={t.id}
            role="tab"
            aria-selected={tab === t.id}
            onClick={() => setTab(t.id)}
            className={cn(
              "flex min-h-11 shrink-0 items-center gap-2 rounded-xl px-3.5 py-2 text-sm font-bold transition-colors",
              tab === t.id ? "bg-verde text-white shadow-md shadow-verde/25" : "text-inchiostro/70 hover:bg-verde-tenue"
            )}
          >
            <t.icon className="h-4 w-4" aria-hidden="true" />
            {t.label}
          </button>
        ))}
      </div>

      {/* contenido de la tab activa */}
      {overviewError && <p role="alert" className="rounded-xl bg-rosso-tenue px-3 py-2 text-xs font-semibold text-rosso-scuro dark:text-rosso">{overviewError}</p>}

      {tab === "panoramica" && (overview
        ? <DashboardTab overview={overview} onChanged={() => void loadOverview()} />
        : <p className="text-sm text-muted-it">Cargando métricas…</p>)}

      {tab === "utenti" && <UsersTab />}
      {tab === "contenuti" && <ContentTab />}
      {tab === "impostazioni" && <SettingsTab onSaved={() => void loadOverview()} />}

      {tab === "attivita" && <ActivityTab />}
      {tab === "dati" && <DataTab onGlobalChanged={() => void loadOverview()} />}
    </div>
  );
}
