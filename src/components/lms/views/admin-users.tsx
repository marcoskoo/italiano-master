"use client";

/* ── Panel Admin · gestión de usuarios (CRUD completo) ─────────────── */

import { useCallback, useEffect, useMemo, useState } from "react";
import { Pencil, Plus, Search, ShieldCheck, Trash2, UserRound, X } from "lucide-react";
import { adminFetch } from "@/lib/lms/remote";
import { CEFR_LEVELS } from "@/lib/lms/types";
import { PLAN_ORDER } from "@/lib/lms/plans";
import { cn } from "@/lib/utils";
import type { AdminUserRow } from "./admin";

const LEVEL_OPTIONS = ["zero", ...CEFR_LEVELS];
const PLAN_BADGE: Record<string, string> = {
  free: "bg-inchiostro/10 text-inchiostro",
  pro: "bg-verde-tenue text-verde-scuro dark:text-verde",
  premium: "bg-oro-tenue text-oro-scuro dark:text-oro",
  platinum: "plan-platinum-bg text-inchiostro",
};

interface FormState {
  id: string | null; // null = nuevo
  username: string;
  password: string;
  displayName: string;
  role: "student" | "admin";
  level: string;
  plan: string;
  xp: number;
  streak: number;
  active: boolean;
}

const EMPTY_FORM: FormState = {
  id: null, username: "", password: "", displayName: "", role: "student",
  level: "A1", plan: "free", xp: 0, streak: 0, active: true,
};

function inputCls() {
  return "w-full rounded-xl border border-soft bg-crema px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-verde/40 dark:bg-inchiostro/10";
}

function UserDialog({ initial, onClose, onSaved }: { initial: FormState; onClose: () => void; onSaved: (msg: string) => void }) {
  const [form, setForm] = useState<FormState>(initial);
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  const set = <K extends keyof FormState>(key: K, value: FormState[K]) => setForm((f) => ({ ...f, [key]: value }));

  async function save(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    setError(null);
    try {
      if (form.id) {
        const body: Record<string, unknown> = {
          displayName: form.displayName, role: form.role, level: form.level,
          plan: form.plan, xp: form.xp, streak: form.streak, active: form.active,
        };
        if (form.password) body.password = form.password;
        await adminFetch(`/api/admin/users?id=${form.id}`, { method: "PATCH", body: JSON.stringify(body) });
        onSaved(`Usuario «${form.username}» actualizado.`);
      } else {
        await adminFetch("/api/admin/users", {
          method: "POST",
          body: JSON.stringify({
            username: form.username, password: form.password, displayName: form.displayName,
            role: form.role, level: form.level, plan: form.plan, xp: form.xp, streak: form.streak,
          }),
        });
        onSaved(`Usuario «${form.username}» creado.`);
      }
      onClose();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error");
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center p-4" role="dialog" aria-modal="true" aria-label={form.id ? "Editar usuario" : "Nuevo usuario"}>
      <div className="absolute inset-0 bg-inchiostro/50 backdrop-blur-sm" onClick={onClose} />
      <form onSubmit={save} className="relative max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-3xl border border-soft bg-surface p-6 shadow-2xl scrollbar-thin">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="font-display text-lg font-semibold">{form.id ? `Editar a ${form.username}` : "Nuovo utente"}</h3>
          <button type="button" onClick={onClose} className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-soft" aria-label="Cerrar">
            <X className="h-4.5 w-4.5" aria-hidden="true" />
          </button>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          <div className={cn(form.id && "opacity-50")}>
            <label htmlFor="f-username" className="mb-1 block text-xs font-bold uppercase tracking-wide text-muted-it">Usuario</label>
            <input id="f-username" value={form.username} onChange={(e) => set("username", e.target.value)} disabled={!!form.id} className={inputCls()} placeholder="p. ej. mario" required={!form.id} />
          </div>
          <div>
            <label htmlFor="f-password" className="mb-1 block text-xs font-bold uppercase tracking-wide text-muted-it">
              Contraseña {form.id && <span className="normal-case text-muted-it/70">(déjala vacía para no cambiar)</span>}
            </label>
            <input id="f-password" value={form.password} onChange={(e) => set("password", e.target.value)} className={inputCls()} placeholder="••••••••" required={!form.id} />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="f-name" className="mb-1 block text-xs font-bold uppercase tracking-wide text-muted-it">Nombre visible</label>
            <input id="f-name" value={form.displayName} onChange={(e) => set("displayName", e.target.value)} className={inputCls()} placeholder="p. ej. Mario Rossi" required />
          </div>
          <div>
            <label htmlFor="f-role" className="mb-1 block text-xs font-bold uppercase tracking-wide text-muted-it">Rol</label>
            <select id="f-role" value={form.role} onChange={(e) => set("role", e.target.value as "student" | "admin")} className={inputCls()}>
              <option value="student">Estudiante</option>
              <option value="admin">Administrador</option>
            </select>
          </div>
          <div>
            <label htmlFor="f-level" className="mb-1 block text-xs font-bold uppercase tracking-wide text-muted-it">Nivel MCER</label>
            <select id="f-level" value={form.level} onChange={(e) => set("level", e.target.value)} className={inputCls()}>
              {LEVEL_OPTIONS.map((l) => <option key={l} value={l}>{l === "zero" ? "Desde cero" : l}</option>)}
            </select>
          </div>
          <div>
            <label htmlFor="f-plan" className="mb-1 block text-xs font-bold uppercase tracking-wide text-muted-it">Plan</label>
            <select id="f-plan" value={form.plan} onChange={(e) => set("plan", e.target.value)} className={inputCls()}>
              {PLAN_ORDER.map((p) => <option key={p} value={p}>{p.toUpperCase()}</option>)}
            </select>
          </div>
          <div>
            <label htmlFor="f-xp" className="mb-1 block text-xs font-bold uppercase tracking-wide text-muted-it">XP</label>
            <input id="f-xp" type="number" min={0} value={form.xp} onChange={(e) => set("xp", Number(e.target.value))} className={inputCls()} />
          </div>
          <div>
            <label htmlFor="f-streak" className="mb-1 block text-xs font-bold uppercase tracking-wide text-muted-it">Racha (días)</label>
            <input id="f-streak" type="number" min={0} value={form.streak} onChange={(e) => set("streak", Number(e.target.value))} className={inputCls()} />
          </div>
          <label className="flex items-center gap-2.5 self-end rounded-xl border border-soft px-3 py-2.5 text-sm font-semibold">
            <input type="checkbox" checked={form.active} onChange={(e) => set("active", e.target.checked)} className="h-4 w-4 accent-[#0E7A4E]" />
            Cuenta activa
          </label>
        </div>

        {error && <p role="alert" className="mt-3 rounded-xl bg-rosso-tenue px-3 py-2 text-xs font-semibold text-rosso-scuro dark:text-rosso">{error}</p>}

        <div className="mt-5 flex gap-2">
          <button type="submit" disabled={busy} className="min-h-11 flex-1 rounded-xl bg-verde px-4 py-2.5 text-sm font-bold text-white shadow-md shadow-verde/25 hover:bg-verde-scuro disabled:opacity-60">
            {busy ? "Guardando…" : form.id ? "Guardar cambios" : "Crear usuario"}
          </button>
          <button type="button" onClick={onClose} className="min-h-11 rounded-xl border border-soft px-4 py-2.5 text-sm font-bold hover:bg-inchiostro/5">
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
}

export function UsersTab() {
  const [users, setUsers] = useState<AdminUserRow[] | null>(null);
  const [query, setQuery] = useState("");
  const [dialog, setDialog] = useState<FormState | null>(null);
  const [msg, setMsg] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const load = useCallback(async () => {
    setUsers(null);
    setError(null);
    try {
      const data = await adminFetch<{ users: AdminUserRow[] }>("/api/admin/users");
      setUsers(data.users);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error");
    }
  }, []);

  useEffect(() => {
    const t = setTimeout(() => void load(), 0);
    return () => clearTimeout(t);
  }, [load]);

  const filtered = useMemo(() => {
    if (!users) return null;
    const q = query.trim().toLowerCase();
    if (!q) return users;
    return users.filter((u) => u.username.toLowerCase().includes(q) || u.displayName.toLowerCase().includes(q));
  }, [users, query]);

  async function remove(u: AdminUserRow) {
    const sure = window.confirm(`¿Eliminar a «${u.displayName}» (${u.username})? Esta acción es permanente.`);
    if (!sure) return;
    try {
      await adminFetch(`/api/admin/users?id=${u.id}`, { method: "DELETE" });
      setMsg(`Usuario «${u.username}» eliminado.`);
      void load();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error");
    }
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap items-center gap-2">
        <div className="relative min-w-52 flex-1">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-it" aria-hidden="true" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Buscar por usuario o nombre…"
            aria-label="Buscar usuarios"
            className="w-full rounded-xl border border-soft bg-crema py-2.5 pl-9 pr-3 text-sm outline-none focus:ring-2 focus:ring-verde/40 dark:bg-inchiostro/10"
          />
        </div>
        <button
          onClick={() => setDialog({ ...EMPTY_FORM })}
          className="inline-flex min-h-11 items-center gap-2 rounded-xl bg-verde px-4 py-2.5 text-sm font-bold text-white shadow-md shadow-verde/25 hover:bg-verde-scuro"
        >
          <Plus className="h-4 w-4" aria-hidden="true" /> Nuovo utente
        </button>
      </div>

      {msg && <p role="status" className="rounded-xl bg-verde-tenue px-3 py-2 text-xs font-semibold text-verde-scuro dark:text-verde">{msg}</p>}
      {error && <p role="alert" className="rounded-xl bg-rosso-tenue px-3 py-2 text-xs font-semibold text-rosso-scuro dark:text-rosso">{error}</p>}
      {!filtered && <p className="text-sm text-muted-it">Cargando usuarios…</p>}

      {filtered && (
        <div className="overflow-hidden rounded-2xl border border-soft bg-surface">
          <div className="overflow-x-auto scrollbar-thin">
            <table className="w-full min-w-[760px] text-left text-xs">
              <thead className="bg-crema-scura text-[10px] uppercase tracking-wide text-muted-it dark:bg-inchiostro/20">
                <tr>
                  <th className="px-3 py-2.5 font-bold">Usuario</th>
                  <th className="px-3 py-2.5 font-bold">Rol</th>
                  <th className="px-3 py-2.5 font-bold">Nivel</th>
                  <th className="px-3 py-2.5 font-bold">Plan</th>
                  <th className="px-3 py-2.5 font-bold">XP</th>
                  <th className="px-3 py-2.5 font-bold">Racha</th>
                  <th className="px-3 py-2.5 font-bold">Lecciones</th>
                  <th className="px-3 py-2.5 font-bold">Visto</th>
                  <th className="px-3 py-2.5 text-right font-bold">Acciones</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((u) => (
                  <tr key={u.id} className={cn("border-t border-soft", !u.active && "opacity-50")}>
                    <td className="px-3 py-2.5">
                      <p className="font-bold">{u.displayName}</p>
                      <p className="font-mono text-[10px] text-muted-it">@{u.username}{!u.active && " · desactivado"}</p>
                    </td>
                    <td className="px-3 py-2.5">
                      <span className={cn(
                        "inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-bold",
                        u.role === "admin" ? "bg-rosso-tenue text-rosso-scuro dark:text-rosso" : "bg-inchiostro/10 text-inchiostro"
                      )}>
                        {u.role === "admin" ? <ShieldCheck className="h-3 w-3" aria-hidden="true" /> : <UserRound className="h-3 w-3" aria-hidden="true" />}
                        {u.role === "admin" ? "admin" : "estudiante"}
                      </span>
                    </td>
                    <td className="px-3 py-2.5 font-mono font-bold">{u.level}</td>
                    <td className="px-3 py-2.5">
                      <span className={cn("rounded-full px-2 py-0.5 text-[10px] font-bold uppercase", PLAN_BADGE[u.plan] ?? PLAN_BADGE.free)}>{u.plan}</span>
                    </td>
                    <td className="px-3 py-2.5 font-mono">{u.xp.toLocaleString("es-ES")}</td>
                    <td className="px-3 py-2.5 font-mono">{u.streak}🔥</td>
                    <td className="px-3 py-2.5 font-mono">{u.lessonsDone}</td>
                    <td className="whitespace-nowrap px-3 py-2.5 text-muted-it">{timeAgo(u.lastSeen)}</td>
                    <td className="px-3 py-2.5">
                      <div className="flex items-center justify-end gap-1.5">
                        <button
                          onClick={() => setDialog({
                            id: u.id, username: u.username, password: "", displayName: u.displayName,
                            role: u.role as "student" | "admin", level: u.level, plan: u.plan,
                            xp: u.xp, streak: u.streak, active: u.active,
                          })}
                          className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-soft hover:bg-verde-tenue"
                          aria-label={`Editar a ${u.username}`}
                          title="Editar"
                        >
                          <Pencil className="h-4 w-4" aria-hidden="true" />
                        </button>
                        <button
                          onClick={() => void remove(u)}
                          disabled={u.username === "Mkoo"}
                          className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-rosso/30 text-rosso-scuro hover:bg-rosso-tenue disabled:opacity-30 dark:text-rosso"
                          aria-label={`Eliminar a ${u.username}`}
                          title={u.username === "Mkoo" ? "La cuenta Mkoo no se puede eliminar" : "Eliminar"}
                        >
                          <Trash2 className="h-4 w-4" aria-hidden="true" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
                {filtered.length === 0 && (
                  <tr><td colSpan={9} className="px-3 py-6 text-center text-muted-it">No hay usuarios que coincidan con la búsqueda.</td></tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {dialog && (
        <UserDialog
          initial={dialog}
          onClose={() => setDialog(null)}
          onSaved={(m) => { setMsg(m); void load(); }}
        />
      )}
    </div>
  );
}

function timeAgo(iso: string): string {
  const diff = Date.now() - new Date(iso).getTime();
  const m = Math.floor(diff / 60000);
  if (m < 1) return "ahora";
  if (m < 60) return `hace ${m} min`;
  const h = Math.floor(m / 60);
  if (h < 24) return `hace ${h} h`;
  const d = Math.floor(h / 24);
  return `hace ${d} d`;
}
