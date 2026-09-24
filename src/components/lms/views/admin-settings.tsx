"use client";

/* ── Panel Admin · configuración global de la plataforma ───────────── */

import { useCallback, useEffect, useState } from "react";
import { AlertTriangle, Palette, Rocket, Save, Sliders, Sparkles } from "lucide-react";
import { adminFetch } from "@/lib/lms/remote";
import type { AppConfig } from "@/lib/lms/appconfig";
import { DEFAULT_APP_CONFIG } from "@/lib/lms/appconfig";
import { CEFR_LEVELS } from "@/lib/lms/types";
import { cn } from "@/lib/utils";

function inputCls() {
  return "w-full rounded-xl border border-soft bg-crema px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-verde/40 dark:bg-inchiostro/10";
}
function labelCls() {
  return "mb-1 block text-xs font-bold uppercase tracking-wide text-muted-it";
}

function Toggle({ checked, onChange, label, hint }: { checked: boolean; onChange: (v: boolean) => void; label: string; hint?: string }) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      onClick={() => onChange(!checked)}
      className="flex min-h-11 w-full items-center justify-between gap-3 rounded-xl border border-soft bg-crema-scura px-3.5 py-2.5 text-left transition-colors hover:bg-verde-tenue/60 dark:bg-inchiostro/10"
    >
      <span className="min-w-0">
        <span className="block text-sm font-bold">{label}</span>
        {hint && <span className="block text-[11px] leading-snug text-muted-it">{hint}</span>}
      </span>
      <span className={cn("relative h-6 w-11 shrink-0 rounded-full transition-colors", checked ? "bg-verde" : "bg-inchiostro/25")}>
        <span className={cn("absolute top-0.5 h-5 w-5 rounded-full bg-white shadow transition-all", checked ? "left-[22px]" : "left-0.5")} />
      </span>
    </button>
  );
}

const LEVEL_KEYS = ["zero", ...CEFR_LEVELS] as const;

export function SettingsTab({ onSaved }: { onSaved: () => void }) {
  const [config, setConfig] = useState<AppConfig | null>(null);
  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const load = useCallback(async () => {
    setError(null);
    try {
      const data = await adminFetch<{ config: AppConfig }>("/api/admin/settings");
      setConfig({ ...DEFAULT_APP_CONFIG, ...data.config });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error");
    }
  }, []);

  useEffect(() => { void load(); }, [load]);

  const set = <K extends keyof AppConfig>(key: K, value: AppConfig[K]) => {
    setConfig((c) => (c ? { ...c, [key]: value } : c));
  };

  async function save(e: React.FormEvent) {
    e.preventDefault();
    if (!config) return;
    setBusy(true);
    setMsg(null);
    setError(null);
    try {
      await adminFetch("/api/admin/settings", {
        method: "PUT",
        body: JSON.stringify({
          appName: config.appName,
          tagline: config.tagline,
          maintenance: config.maintenance,
          features: config.features,
          defaults: config.defaults,
          forceDefaults: config.forceDefaults,
          levels: config.levels,
          pricing: config.pricing,
        }),
      });
      setMsg("Configuración guardada. Los cambios se aplican al instante en todos los clientes.");
      onSaved();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error al guardar");
    } finally {
      setBusy(false);
    }
  }

  if (!config) {
    return <p className="text-sm text-muted-it">{error ?? "Cargando configuración…"}</p>;
  }

  return (
    <form onSubmit={save} className="flex flex-col gap-5">
      {msg && <p role="status" className="rounded-xl bg-verde-tenue px-3 py-2 text-xs font-semibold text-verde-scuro dark:text-verde">{msg}</p>}
      {error && <p role="alert" className="rounded-xl bg-rosso-tenue px-3 py-2 text-xs font-semibold text-rosso-scuro dark:text-rosso">{error}</p>}

      {/* identidad */}
      <section className="rounded-2xl border border-soft bg-surface p-5">
        <p className="mb-3 flex items-center gap-2 text-sm font-bold"><Sparkles className="h-4 w-4 text-oro-scuro dark:text-oro" aria-hidden="true" /> Identidad de la plataforma</p>
        <div className="grid gap-3 sm:grid-cols-2">
          <div>
            <label htmlFor="s-name" className={labelCls()}>Nombre de la app</label>
            <input id="s-name" value={config.appName} onChange={(e) => set("appName", e.target.value)} className={inputCls()} maxLength={40} />
          </div>
          <div>
            <label htmlFor="s-tagline" className={labelCls()}>Lema (subtitle)</label>
            <input id="s-tagline" value={config.tagline} onChange={(e) => set("tagline", e.target.value)} className={inputCls()} maxLength={90} />
          </div>
        </div>
      </section>

      {/* mantenimiento */}
      <section className="rounded-2xl border-2 border-rosso/40 bg-rosso-tenue/40 p-5">
        <p className="mb-3 flex items-center gap-2 text-sm font-bold text-rosso-scuro dark:text-rosso"><AlertTriangle className="h-4 w-4" aria-hidden="true" /> Modo mantenimiento</p>
        <Toggle
          checked={config.maintenance.enabled}
          onChange={(v) => set("maintenance", { ...config.maintenance, enabled: v })}
          label={config.maintenance.enabled ? "ATTIVO — la app está cerrada al público" : "Desactivado — la app funciona con normalidad"}
          hint="Cuando está activo, todos los visitantes ven una pantalla de mantenimiento; solo la administración puede entrar."
        />
        <div className="mt-3">
          <label htmlFor="s-maint" className={labelCls()}>Mensaje que verán los visitantes</label>
          <input id="s-maint" value={config.maintenance.message} onChange={(e) => set("maintenance", { ...config.maintenance, message: e.target.value })} className={inputCls()} maxLength={160} />
        </div>
      </section>

      {/* funciones */}
      <section className="rounded-2xl border border-soft bg-surface p-5">
        <p className="mb-3 flex items-center gap-2 text-sm font-bold"><Rocket className="h-4 w-4 text-verde-scuro dark:text-verde" aria-hidden="true" /> Funciones de la plataforma</p>
        <div className="grid gap-2.5 md:grid-cols-2">
          <Toggle
            checked={config.features.plans}
            onChange={(v) => set("features", { ...config.features, plans: v })}
            label="Sistema de planes PRO/PREMIUM/PLATINUM"
            hint="Si lo desactivas, desaparece el gating: todos los usuarios acceden a todo (nivel PLATINUM universal)."
          />
          <Toggle
            checked={config.features.tutor}
            onChange={(v) => set("features", { ...config.features, tutor: v })}
            label="Tutor IA (Marco)"
            hint="Chat con corrección y role-play basado en IA."
          />
          <Toggle
            checked={config.features.games}
            onChange={(v) => set("features", { ...config.features, games: v })}
            label="Sección Giochi (juegos)"
            hint="Memoria, orden de frases y quiz relámpago."
          />
          <Toggle
            checked={config.features.certificates}
            onChange={(v) => set("features", { ...config.features, certificates: v })}
            label="Certificados descargables"
            hint="Diplomas PNG al aprobar exámenes de nivel."
          />
          <Toggle
            checked={config.features.weeklyPlan}
            onChange={(v) => set("features", { ...config.features, weeklyPlan: v })}
            label="Plan semanal premium"
            hint="Agenda de estudio de 7 días generada según nivel y repaso."
          />
        </div>
      </section>

      {/* cursos */}
      <section className="rounded-2xl border border-soft bg-surface p-5">
        <p className="mb-3 flex items-center gap-2 text-sm font-bold"><Sliders className="h-4 w-4 text-verde-scuro dark:text-verde" aria-hidden="true" /> Cursos visibles</p>
        <div className="flex flex-wrap gap-2">
          {LEVEL_KEYS.map((lv) => {
            const active = config.levels[lv] ?? true;
            return (
              <button
                key={lv}
                type="button"
                onClick={() => set("levels", { ...config.levels, [lv]: !active })}
                className={cn(
                  "min-h-11 rounded-xl border px-4 py-2 font-mono text-sm font-bold transition-colors",
                  active ? "border-verde bg-verde text-white shadow-md shadow-verde/25" : "border-soft text-muted-it hover:bg-verde-tenue"
                )}
                aria-pressed={active}
              >
                {lv === "zero" ? "Desde cero" : lv}
              </button>
            );
          })}
        </div>
        <p className="mt-2 text-[11px] text-muted-it">Los niveles desactivados no aparecen en Cursos ni en el inicio. Los alumnos que ya estudiaban un nivel conservan su progreso.</p>
      </section>

      {/* defaults */}
      <section className="rounded-2xl border border-soft bg-surface p-5">
        <p className="mb-3 flex items-center gap-2 text-sm font-bold"><Palette className="h-4 w-4 text-oro-scuro dark:text-oro" aria-hidden="true" /> Preferencias por defecto</p>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <label htmlFor="s-goal" className={labelCls()}>Meta diaria XP</label>
            <input id="s-goal" type="number" min={20} max={1000} step={10} value={config.defaults.dailyGoalXp} onChange={(e) => set("defaults", { ...config.defaults, dailyGoalXp: Number(e.target.value) })} className={inputCls()} />
          </div>
          <div>
            <label htmlFor="s-rate" className={labelCls()}>Velocidad audio ({config.defaults.audioRate.toFixed(2)}×)</label>
            <input id="s-rate" type="range" min={0.6} max={1.2} step={0.05} value={config.defaults.audioRate} onChange={(e) => set("defaults", { ...config.defaults, audioRate: Number(e.target.value) })} className="mt-3 w-full accent-[#0E7A4E]" />
          </div>
          <div>
            <label htmlFor="s-theme" className={labelCls()}>Tema inicial</label>
            <select id="s-theme" value={config.defaults.theme} onChange={(e) => set("defaults", { ...config.defaults, theme: e.target.value as "light" | "dark" })} className={inputCls()}>
              <option value="light">Chiaro (claro)</option>
              <option value="dark">Scuro (oscuro)</option>
            </select>
          </div>
          <div>
            <label htmlFor="s-text" className={labelCls()}>Tamaño de texto</label>
            <select id="s-text" value={config.defaults.textSize} onChange={(e) => set("defaults", { ...config.defaults, textSize: e.target.value as "md" | "lg" | "xl" })} className={inputCls()}>
              <option value="md">Normale</option>
              <option value="lg">Grande</option>
              <option value="xl">Molto grande</option>
            </select>
          </div>
        </div>
        <div className="mt-3">
          <Toggle
            checked={config.forceDefaults}
            onChange={(v) => set("forceDefaults", v)}
            label="Imponer estos valores a todos los clientes"
            hint="Si está activo, cada visitante recibe el tema, tamaño, meta y velocidad que definas aquí (control total). Si no, solo se aplican a usuarios nuevos."
          />
        </div>
      </section>

      {/* precios */}
      <section className="rounded-2xl border border-soft bg-surface p-5">
        <p className="mb-3 flex items-center gap-2 text-sm font-bold"><Rocket className="h-4 w-4 text-verde-scuro dark:text-verde" aria-hidden="true" /> Precios de los planes (€/mes)</p>
        <div className="grid gap-3 sm:grid-cols-4">
          <div>
            <label htmlFor="s-pro" className={labelCls()}>PRO</label>
            <input id="s-pro" type="number" min={0} step={0.5} value={config.pricing.pro} onChange={(e) => set("pricing", { ...config.pricing, pro: Number(e.target.value) })} className={inputCls()} />
          </div>
          <div>
            <label htmlFor="s-premium" className={labelCls()}>PREMIUM</label>
            <input id="s-premium" type="number" min={0} step={0.5} value={config.pricing.premium} onChange={(e) => set("pricing", { ...config.pricing, premium: Number(e.target.value) })} className={inputCls()} />
          </div>
          <div>
            <label htmlFor="s-platinum" className={labelCls()}>PLATINUM</label>
            <input id="s-platinum" type="number" min={0} step={0.5} value={config.pricing.platinum} onChange={(e) => set("pricing", { ...config.pricing, platinum: Number(e.target.value) })} className={inputCls()} />
          </div>
          <div>
            <label htmlFor="s-disc" className={labelCls()}>Descuento anual (%)</label>
            <input id="s-disc" type="number" min={0} max={60} step={5} value={config.pricing.yearlyDiscount} onChange={(e) => set("pricing", { ...config.pricing, yearlyDiscount: Number(e.target.value) })} className={inputCls()} />
          </div>
        </div>
        <p className="mt-2 text-[11px] text-muted-it">El precio anual se calcula automáticamente: mensual × 12 con el descuento aplicado. La página «Piani PRO» se actualiza al instante.</p>
      </section>

      <div className="sticky bottom-4 flex justify-end">
        <button
          type="submit"
          disabled={busy}
          className="inline-flex min-h-12 items-center gap-2 rounded-xl bg-verde px-6 py-3 text-sm font-bold text-white shadow-xl shadow-verde/30 transition-all hover:bg-verde-scuro disabled:opacity-60"
        >
          <Save className="h-4 w-4" aria-hidden="true" />
          {busy ? "Salvando…" : "Salva impostazioni"}
        </button>
      </div>
    </form>
  );
}
