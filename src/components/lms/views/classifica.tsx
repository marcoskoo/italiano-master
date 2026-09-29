"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUp, Crown, Flame, Info, LogIn, RefreshCcw, Trophy, Zap } from "lucide-react";
import { useLms } from "@/lib/lms/store";
import { fetchLeaderboard, type LeaderboardData } from "@/lib/lms/remote";
import { LEAGUES, formatCountdown, leagueIndex, PROMOTION_SLOTS, DEMOTION_RATIO, MIN_ACTIVE_DEMOTION } from "@/lib/lms/leagues";
import { cn } from "@/lib/utils";

/* ── Vista: Classifica settimanale (v8.0) ───────────────────────────
   Ligas estilo Duolingo sobre la infraestructura existente de usuarios:
   XP de la semana (lunes→domingo) · top-3 asciende · último 20% baja
   (solo con 6+ activos) · reinicio automático cada lunes 00:00 UTC.   */

export function ClassificaView() {
  const account = useLms((s) => s.account);
  const weekXp = useLms((s) => s.weekXp);
  const navigate = useLms((s) => s.navigate);
  const [data, setData] = useState<LeaderboardData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [now, setNow] = useState(() => Date.now());

  const load = useCallback(async () => {
    if (!account) return;
    // todos los setState van tras el await: nunca síncronos en el efecto
    const res = await fetchLeaderboard(account.id);
    if (res) setData(res);
    setError(res ? null : "No se pudo cargar la clasificación. Comprueba tu conexión e inténtalo de nuevo.");
    setLoading(false);
  }, [account]);

  useEffect(() => {
    const t = setTimeout(() => void load(), 0);
    return () => clearTimeout(t);
  }, [load]);

  // refresco automático cuando el usuario gana XP (debounce 4 s)
  useEffect(() => {
    const t = setTimeout(() => void load(), 4000);
    return () => clearTimeout(t);
  }, [weekXp, load]);

  // cuenta atrás en vivo hacia el lunes
  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  const myRow = useMemo(() => data?.rows.find((r) => r.isMe) ?? null, [data]);
  const activeCount = useMemo(() => data?.rows.filter((r) => r.weekXp > 0).length ?? 0, [data]);
  const demoteN = activeCount >= MIN_ACTIVE_DEMOTION ? Math.max(1, Math.round(activeCount * DEMOTION_RATIO)) : 0;
  const league = data ? LEAGUES[leagueIndex(data.league)] : null;

  /* ── invitado: explicar el sistema + invitar a iniciar sesión ── */
  if (!account) {
    return (
      <div className="space-y-6">
        <section className="rounded-3xl border border-soft bg-gradient-to-br from-verde-tenue to-surface p-8 text-center dark:from-verde-tenue/25">
          <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-3xl bg-verde text-3xl shadow-lg shadow-verde/25">🏆</span>
          <h2 className="mt-4 font-display text-3xl font-semibold">Classifica settimanale</h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-muted-it">
            Compite cada semana con los demás estudiantes de Italiano Master. El XP que ganas en lecciones, juegos,
            dictados y repasos cuenta para tu liga: cada <strong>lunes</strong> se cierra la semana, los <strong>3 primeros ascienden</strong> de liga
            y la clasificación vuelve a cero.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0 })}
            className="mt-5 inline-flex min-h-12 items-center gap-2 rounded-2xl bg-verde px-6 py-3 font-bold text-white shadow-lg shadow-verde/25 transition-all hover:scale-[1.03] dark:text-inchiostro"
          >
            <LogIn className="h-4 w-4" aria-hidden="true" /> Accedi per competere
          </button>
          <p className="mt-2 text-xs text-muted-it">Usa el botón «Accedi» de la barra superior para entrar con tu cuenta.</p>
        </section>

        <section className="grid gap-3 sm:grid-cols-5">
          {LEAGUES.map((l, i) => (
            <motion.div
              key={l.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.06 }}
              className={cn("rounded-3xl border-2 border-soft p-5 text-center", l.tenue)}
            >
              <p className="text-3xl">{l.emoji}</p>
              <p className="mt-2 font-display text-lg font-bold" style={{ color: l.color }}>{l.name}</p>
              <p className="text-[11px] text-muted-it">Lega {i + 1} di {LEAGUES.length}</p>
            </motion.div>
          ))}
        </section>

        <section className="rounded-3xl border border-soft bg-surface p-6">
          <h3 className="flex items-center gap-2 font-display text-lg font-semibold"><Info className="h-4 w-4 text-verde" aria-hidden="true" /> Come funziona</h3>
          <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted-it">
            <li>· La semana va del <strong>lunes al domingo</strong> (medianoche UTC).</li>
            <li>· Cuenta TODO el XP: lecciones, juegos, dictados, shadowing, repasos, misiones…</li>
            <li>· Al cierre: <strong>top-{PROMOTION_SLOTS} asciende</strong> de liga {LEAGUES.map((l) => l.emoji).join(" → ")}.</li>
            <li>· Con {MIN_ACTIVE_DEMOTION}+ jugadores activos, el último {Math.round(DEMOTION_RATIO * 100)}% desciende.</li>
            <li>· Solo se muestra tu <strong>nombre público</strong> y tu nivel: nunca tu usuario ni datos personales.</li>
          </ul>
        </section>
      </div>
    );
  }

  /* ── conectado ── */
  return (
    <div className="space-y-6">
      {/* cabecera de la liga */}
      <section className="flex flex-wrap items-center justify-between gap-4 rounded-3xl border border-soft bg-surface p-6">
        <div className="flex items-center gap-4">
          {league && (
            <>
              <span className={cn("flex h-16 w-16 items-center justify-center rounded-3xl text-3xl", league.tenue)}>{league.emoji}</span>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-muted-it">La tua lega</p>
                <h2 className="font-display text-2xl font-bold" style={{ color: league.color }}>Lega {league.name}</h2>
                <p className="text-xs text-muted-it">
                  {data?.totals?.[league.id] ?? 1} student{(data?.totals?.[league.id] ?? 1) === 1 ? "e" : "i"} in questa lega
                </p>
              </div>
            </>
          )}
        </div>
        <div className="flex items-center gap-3">
          <div className="text-right">
            <p className="text-xs font-bold uppercase tracking-widest text-muted-it">Chiusura</p>
            <p className="font-mono text-lg font-bold text-verde-scuro tabular-nums dark:text-verde">
              {data?.resetAt ? formatCountdown(Math.max(0, data.resetAt - now)) : "—"}
            </p>
          </div>
          <button
            onClick={() => void load()}
            disabled={loading}
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-soft transition-colors hover:bg-verde-tenue disabled:opacity-50"
            aria-label="Actualizar clasificación"
            title="Aggiorna"
          >
            <RefreshCcw className={cn("h-4 w-4", loading && "animate-spin")} aria-hidden="true" />
          </button>
        </div>
      </section>

      {/* tu posición */}
      {myRow && (
        <section className="rounded-3xl border-2 border-verde/30 bg-verde-tenue/60 p-5 dark:bg-verde-tenue/25">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-verde font-display text-lg font-bold text-white dark:text-inchiostro">
                {data?.rows.findIndex((r) => r.isMe) !== -1 ? (data!.rows.findIndex((r) => r.isMe) + 1) : "—"}
              </span>
              <div>
                <p className="font-bold">La tua posizione</p>
                <p className="text-xs text-muted-it">
                  {myRow.weekXp} XP esta semana · {myRow.streak} <Flame className="inline h-3 w-3 text-rosso" aria-hidden="true" /> de racha
                </p>
              </div>
            </div>
            {myRow.weekXp === 0 && (
              <p className="text-xs font-semibold text-oro-scuro dark:text-oro">✨ Gana XP esta semana para subir en la tabla</p>
            )}
          </div>
        </section>
      )}

      {error && (
        <div className="rounded-2xl border border-rosso/30 bg-rosso-tenue/60 p-4 text-sm font-semibold text-rosso-scuro dark:text-rosso">{error}</div>
      )}

      {/* tabla */}
      <section className="overflow-hidden rounded-3xl border border-soft bg-surface">
        {loading && !data ? (
          <div className="space-y-2 p-5">
            {[0, 1, 2, 3, 4].map((i) => <div key={i} className="h-12 animate-pulse rounded-xl bg-inchiostro/5" />)}
          </div>
        ) : !data ? (
          <p className="p-6 text-sm text-muted-it">{error ?? "Clasificación no disponible."}</p>
        ) : (
          <ol className="divide-y divide-soft">
            {data.rows.map((row, i) => {
              const promotion = i < PROMOTION_SLOTS && row.weekXp > 0;
              const demotion = demoteN > 0 && i >= data.rows.length - demoteN && row.weekXp > 0;
              return (
                <li
                  key={row.id}
                  className={cn(
                    "relative flex items-center gap-3 px-4 py-3.5 transition-colors",
                    row.isMe && "bg-verde-tenue/70 dark:bg-verde-tenue/25",
                    promotion && "border-l-4 border-l-verde",
                    demotion && "border-l-4 border-l-rosso/60"
                  )}
                >
                  {/* posición */}
                  <span className={cn("w-8 shrink-0 text-center font-display text-lg font-bold", i === 0 ? "text-oro" : i === 1 ? "text-muted-it" : i === 2 ? "text-amber-700 dark:text-amber-500" : "text-inchiostro/50")}>
                    {i === 0 ? <Crown className="mx-auto h-5 w-5" aria-label="Primo posto" /> : i + 1}
                  </span>
                  {/* nombre + nivel */}
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-bold">
                      {row.displayName} {row.isMe && <span className="ml-1 rounded-full bg-verde px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white dark:text-inchiostro">tu</span>}
                    </p>
                    <p className="text-[11px] text-muted-it">
                      {row.level}
                      {row.plan !== "free" ? ` · ${row.plan === "platinum" ? "💎" : row.plan === "premium" ? "⭐" : "🦁"} ${row.plan}` : ""}
                      {" · "}{row.xp} XP totali
                    </p>
                  </div>
                  {/* zonas */}
                  {promotion && (
                    <span className="hidden items-center gap-1 rounded-full bg-verde-tenue px-2 py-1 text-[10px] font-bold uppercase tracking-wide text-verde-scuro dark:text-verde sm:inline-flex">
                      <ArrowUp className="h-3 w-3" aria-hidden="true" /> promosso
                    </span>
                  )}
                  {demotion && (
                    <span className="hidden items-center gap-1 rounded-full bg-rosso-tenue px-2 py-1 text-[10px] font-bold uppercase tracking-wide text-rosso-scuro dark:text-rosso sm:inline-flex">
                      <ArrowDown className="h-3 w-3" aria-hidden="true" /> retrocesso
                    </span>
                  )}
                  {/* XP semanal */}
                  <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-oro-tenue px-3 py-1.5 text-xs font-bold text-oro-scuro tabular-nums dark:text-oro">
                    <Zap className="h-3 w-3" aria-hidden="true" /> {row.weekXp}
                  </span>
                </li>
              );
            })}
          </ol>
        )}
      </section>

      {/* otras ligas + reglas */}
      <section className="grid gap-4 lg:grid-cols-2">
        <div className="rounded-3xl border border-soft bg-surface p-5">
          <h3 className="flex items-center gap-2 font-display text-base font-semibold"><Trophy className="h-4 w-4 text-oro-scuro dark:text-oro" aria-hidden="true" /> Tutte le leghe</h3>
          <div className="mt-3 flex flex-wrap gap-2">
            {LEAGUES.map((l) => (
              <span key={l.id} className={cn("inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-bold", data?.league === l.id ? "border-verde/50 bg-verde-tenue text-verde-scuro dark:text-verde" : "border-soft text-muted-it")}>
                {l.emoji} {l.name} · {data?.totals?.[l.id] ?? 0}
              </span>
            ))}
          </div>
        </div>
        <div className="rounded-3xl border border-soft bg-surface p-5">
          <h3 className="font-display text-base font-semibold">Regole della settimana</h3>
          <ul className="mt-2 space-y-1.5 text-xs leading-relaxed text-muted-it">
            <li>· Top-{PROMOTION_SLOTS} asciende · con {MIN_ACTIVE_DEMOTION}+ activos, el último {Math.round(DEMOTION_RATIO * 100)}% desciende.</li>
            <li>· El XP de la semana se sincroniza automáticamente con tu cuenta.</li>
            <li>· ¿Sin sesión? Tu XP local se sube al iniciar sesión: nada se pierde.</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
