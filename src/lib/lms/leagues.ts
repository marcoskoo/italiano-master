/* ── Leghe settimanali (v8.0) · lógica compartida cliente/servidor ────
   Duolingo-style: la semana empieza el LUNES (UTC), se gana XP durante
   la semana, el lunes siguiente: top-3 asciende · último 20% desciende.
   100% gratis: reutiliza el store de usuarios ya existente.            */

export const LEAGUES = [
  { id: "bronzo", name: "Bronzo", emoji: "🥉", color: "#b0713c", tenue: "bg-amber-100 dark:bg-amber-900/30" },
  { id: "argento", name: "Argento", emoji: "🥈", color: "#8b9bab", tenue: "bg-slate-100 dark:bg-slate-800/50" },
  { id: "oro", name: "Oro", emoji: "🥇", color: "#d19a0a", tenue: "bg-yellow-100 dark:bg-yellow-900/30" },
  { id: "smeraldo", name: "Smeraldo", emoji: "💠", color: "#0d9488", tenue: "bg-teal-100 dark:bg-teal-900/30" },
  { id: "diamante", name: "Diamante", emoji: "💎", color: "#3b82f6", tenue: "bg-blue-100 dark:bg-blue-900/30" },
] as const;

export type LeagueId = (typeof LEAGUES)[number]["id"];

export const PROMOTION_SLOTS = 3;   // top-3 asciende
export const DEMOTION_RATIO = 0.2;  // último 20% desciende…
export const MIN_ACTIVE_DEMOTION = 6; // …solo si hay 6+ activos (con pocos jugadores, nadie baja)

export function leagueIndex(id: string | undefined | null): number {
  const i = LEAGUES.findIndex((l) => l.id === id);
  return i === -1 ? 0 : i;
}

export function leagueMeta(id: string | undefined | null) {
  return LEAGUES[leagueIndex(id)];
}

export function promoteLeague(id: string | undefined | null): LeagueId {
  return LEAGUES[Math.min(LEAGUES.length - 1, leagueIndex(id) + 1)].id;
}

export function demoteLeague(id: string | undefined | null): LeagueId {
  return LEAGUES[Math.max(0, leagueIndex(id) - 1)].id;
}

/** Clave de la semana = fecha ISO (yyyy-mm-dd) del LUNES de esa semana (UTC). */
export function weekKeyFor(d: Date = new Date()): string {
  const day = (d.getUTCDay() + 6) % 7; // lunes = 0
  const monday = new Date(Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate() - day));
  return monday.toISOString().slice(0, 10);
}

/** Timestamp (ms) del próximo lunes 00:00 UTC: fin de la semana actual. */
export function nextResetMs(now: Date = new Date()): number {
  const day = (now.getUTCDay() + 6) % 7;
  return Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate() - day + 7);
}

/** Cuántos días completos quedan hasta el reinicio (para el contador). */
export function msUntilReset(now: Date = new Date()): number {
  return Math.max(0, nextResetMs(now) - now.getTime());
}

/** Formato "3g 04:12:33" para la cuenta atrás de la liga. */
export function formatCountdown(ms: number): string {
  const s = Math.floor(ms / 1000);
  const days = Math.floor(s / 86400);
  const h = String(Math.floor((s % 86400) / 3600)).padStart(2, "0");
  const m = String(Math.floor((s % 3600) / 60)).padStart(2, "0");
  const sec = String(s % 60).padStart(2, "0");
  return days > 0 ? `${days}g ${h}:${m}:${sec}` : `${h}:${m}:${sec}`;
}
