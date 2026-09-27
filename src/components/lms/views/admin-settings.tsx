"use client";

/* ── Panel Admin · configuración global de la plataforma ───────────── */

import { useCallback, useEffect, useState } from "react";
import { AlertTriangle, BadgeCheck, Ban, CreditCard, Landmark, Palette, Rocket, Save, ShieldAlert, Sliders, Sparkles } from "lucide-react";
import { adminFetch } from "@/lib/lms/remote";
import type { AppConfig } from "@/lib/lms/appconfig";
import { DEFAULT_APP_CONFIG } from "@/lib/lms/appconfig";
import { CEFR_LEVELS } from "@/lib/lms/types";
import { cn } from "@/lib/utils";

/* Validación IBAN en el cliente: formato + checksum mod-97 (ISO 13616) */
function isValidIbanClient(raw: string): boolean {
  const iban = raw.replace(/[\s-]/g, "").toUpperCase();
  if (!/^[A-Z]{2}\d{2}[A-Z0-9]{10,30}$/.test(iban)) return false;
  const rearranged = iban.slice(4) + iban.slice(0, 4);
  const digits = rearranged.replace(/[A-Z]/g, (c) => String(c.charCodeAt(0) - 55));
  let rest = 0;
  for (const ch of digits) rest = (rest * 10 + Number(ch)) % 97;
  return rest === 1;
}
function formatIbanClient(raw: string): string {
  return raw.replace(/[\s-]/g, "").toUpperCase().replace(/(.{4})/g, "$1 ").trim();
}

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
  const [securityMsg, setSecurityMsg] = useState<string | null>(null);
  const [revoking, setRevoking] = useState(false);

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
    if (config.billing.bank.enabled && config.billing.bank.iban && !isValidIbanClient(config.billing.bank.iban)) {
      setError("El IBAN configurado no es válido (checksum mod-97). Corrígelo antes de guardar.");
      return;
    }
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
          billing: config.billing,
          security: config.security,
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

  /* acciones de seguridad extrema (no requieren guardar el formulario) */
  async function revokeSessions(all: boolean) {
    setRevoking(true);
    setSecurityMsg(null);
    try {
      const res = await adminFetch<{ revoked: number; adminToo: boolean }>("/api/admin/security", {
        method: "POST",
        body: JSON.stringify({ action: all ? "revoke_all" : "revoke_students" }),
      });
      setSecurityMsg(
        all
          ? `Sesiones revocadas: ${res.revoked} estudiantes + la tuya. Tendrás que volver a entrar.`
          : `Sesiones de estudiante revocadas: ${res.revoked}.`,
      );
    } catch (err) {
      setSecurityMsg(err instanceof Error ? err.message : "Error");
    } finally {
      setRevoking(false);
    }
  }

  if (!config) {
    return <p className="text-sm text-muted-it">{error ?? "Cargando configuración…"}</p>;
  }

  const ibanOk = !config.billing.bank.iban || isValidIbanClient(config.billing.bank.iban);

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
          <Toggle checked={config.features.plans} onChange={(v) => set("features", { ...config.features, plans: v })} label="Sistema de planes PRO/PREMIUM/PLATINUM" hint="Si lo desactivas, desaparece el gating: todos los usuarios acceden a todo (nivel PLATINUM universal)." />
          <Toggle checked={config.features.tutor} onChange={(v) => set("features", { ...config.features, tutor: v })} label="Tutor IA (Marco)" hint="Chat con corrección y role-play basado en IA." />
          <Toggle checked={config.features.games} onChange={(v) => set("features", { ...config.features, games: v })} label="Sección Giochi (juegos)" hint="Memoria, orden de frases y quiz relámpago." />
          <Toggle checked={config.features.certificates} onChange={(v) => set("features", { ...config.features, certificates: v })} label="Certificados descargables" hint="Diplomas PNG al aprobar exámenes de nivel." />
          <Toggle checked={config.features.weeklyPlan} onChange={(v) => set("features", { ...config.features, weeklyPlan: v })} label="Plan semanal premium" hint="Agenda de estudio de 7 días generada según nivel y repaso." />
          <Toggle checked={config.features.numberLab} onChange={(v) => set("features", { ...config.features, numberLab: v })} label="Numeri lab" hint="Conversor de números/hora a italiano + práctica con XP." />
          <Toggle checked={config.features.verbDrill} onChange={(v) => set("features", { ...config.features, verbDrill: v })} label="Allenamento verbi" hint="Drill de conjugación contrarreloj con rachas." />
          <Toggle checked={config.features.planner} onChange={(v) => set("features", { ...config.features, planner: v })} label="Piano settimanale (planificador)" hint="Generador de plan semanal personalizado por nivel, días y minutos." />
          <Toggle checked={config.features.analyzer} onChange={(v) => set("features", { ...config.features, analyzer: v })} label="Analizzatore di frasi" hint="Análisis palabra por palabra con traducción y nivel estimado." />
          <Toggle checked={config.features.printables} onChange={(v) => set("features", { ...config.features, printables: v })} label="Schede di studio (imprimibles)" hint="Hojas de vocabulario, verbos y gramática para imprimir o PDF." />
        </div>

        <p className="mb-2 mt-4 border-t border-soft pt-3 text-xs font-bold uppercase tracking-wide text-muted-it">Plugins v4.0 · Estensioni</p>
        <div className="grid gap-2.5 md:grid-cols-2">
          <Toggle checked={config.features.proverbi} onChange={(v) => set("features", { ...config.features, proverbi: v })} label="Proverbi e modi di dire" hint="193 proverbios, modismos y locuciones latinas con traducción y uso." />
          <Toggle checked={config.features.falsiAmici} onChange={(v) => set("features", { ...config.features, falsiAmici: v })} label="Falsi amici IT–ES" hint="87 trampas léxicas explicadas con flip-cards." />
          <Toggle checked={config.features.dettato} onChange={(v) => set("features", { ...config.features, dettato: v })} label="Dettato lab" hint="Dictado por voz TTS con corrección palabra por palabra." />
          <Toggle checked={config.features.parolaNascosta} onChange={(v) => set("features", { ...config.features, parolaNascosta: v })} label="Parola nascosta (nuevo)" hint="Wordle italiano: adivina la palabra oculta del diccionario en 6 intentos." />
          <Toggle checked={config.features.preposizioni} onChange={(v) => set("features", { ...config.features, preposizioni: v })} label="Preposizioni lab (nuevo)" hint="Drill de preposiciones y artículos con 70 frases de relleno por nivel." />
          <Toggle checked={config.features.pomodoro} onChange={(v) => set("features", { ...config.features, pomodoro: v })} label="Pomodoro studio (nuevo)" hint="Temporizador de enfoque 25/5 con XP por sesión completada." />
          <Toggle checked={config.features.muse} onChange={(v) => set("features", { ...config.features, muse: v })} label="Muse · generador (nuevo)" hint="Frases de práctica y retos de escritura generados por nivel." />
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

      {/* ═══ PAGOS Y FACTURACIÓN (v5.0) ═══ */}
      <section className="rounded-2xl border-2 border-oro/40 bg-oro-tenue/20 p-5">
        <p className="mb-1 flex items-center gap-2 text-sm font-bold"><Landmark className="h-4 w-4 text-oro-scuro dark:text-oro" aria-hidden="true" /> Pagos y facturación</p>
        <p className="mb-3 text-[11px] leading-relaxed text-muted-it">
          Configura la cuenta bancaria y los métodos de pago que verán los alumnos en el checkout.
          El IBAN se valida con el checksum internacional mod-97 antes de guardarse.
        </p>

        <Toggle
          checked={config.billing.enabled}
          onChange={(v) => set("billing", { ...config.billing, enabled: v })}
          label="Mostrar métodos de pago en el checkout"
          hint="Al activarlo, el modal de compra pide elegir transferencia, PayPal o tarjeta antes de activar el plan."
        />

        <div className="mt-4 grid gap-3">
          {/* transferencia bancaria */}
          <div className="rounded-xl border border-soft bg-surface p-4">
            <Toggle
              checked={config.billing.bank.enabled}
              onChange={(v) => set("billing", { ...config.billing, bank: { ...config.billing.bank, enabled: v } })}
              label="Transferencia bancaria (IBAN)"
              hint="Los alumnos verán el IBAN completo con botón de copiar y una referencia de pago única."
            />
            {config.billing.bank.enabled && (
              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label htmlFor="s-iban" className={labelCls()}>
                    IBAN {config.billing.bank.iban && <span className={cn("ml-2 inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] normal-case", ibanOk ? "bg-verde-tenue text-verde-scuro dark:text-verde" : "bg-rosso-tenue text-rosso-scuro dark:text-rosso")}>{ibanOk ? <><BadgeCheck className="h-3 w-3" aria-hidden="true" /> válido</> : <><Ban className="h-3 w-3" aria-hidden="true" /> checksum inválido</>}</span>}
                  </label>
                  <input
                    id="s-iban"
                    value={config.billing.bank.iban}
                    onChange={(e) => set("billing", { ...config.billing, bank: { ...config.billing.bank, iban: formatIbanClient(e.target.value) } })}
                    className={cn(inputCls(), "font-mono tracking-wider", !ibanOk && "border-rosso/60")}
                    placeholder="IT60 X054 2811 1010 0000 0123 456"
                    inputMode="text"
                    autoComplete="off"
                    maxLength={42}
                  />
                </div>
                <div>
                  <label htmlFor="s-bic" className={labelCls()}>BIC / SWIFT</label>
                  <input id="s-bic" value={config.billing.bank.bic} onChange={(e) => set("billing", { ...config.billing, bank: { ...config.billing.bank, bic: e.target.value.toUpperCase().slice(0, 11) } })} className={cn(inputCls(), "font-mono")} placeholder="BCITITMM" maxLength={11} />
                </div>
                <div>
                  <label htmlFor="s-holder" className={labelCls()}>Titular de la cuenta</label>
                  <input id="s-holder" value={config.billing.bank.holder} onChange={(e) => set("billing", { ...config.billing, bank: { ...config.billing.bank, holder: e.target.value.slice(0, 80) } })} className={inputCls()} placeholder="Italiano Master S.r.l." maxLength={80} />
                </div>
                <div>
                  <label htmlFor="s-bankname" className={labelCls()}>Entidad bancaria</label>
                  <input id="s-bankname" value={config.billing.bank.bankName} onChange={(e) => set("billing", { ...config.billing, bank: { ...config.billing.bank, bankName: e.target.value.slice(0, 60) } })} className={inputCls()} placeholder="Intesa Sanpaolo" maxLength={60} />
                </div>
                <div>
                  <label htmlFor="s-vat" className={labelCls()}>IVA facturación (%)</label>
                  <input id="s-vat" type="number" min={0} max={40} step={1} value={config.billing.vatRate} onChange={(e) => set("billing", { ...config.billing, vatRate: Number(e.target.value) })} className={inputCls()} />
                </div>
              </div>
            )}
          </div>

          {/* otros métodos */}
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-xl border border-soft bg-surface p-4">
              <Toggle checked={config.billing.paypal.enabled} onChange={(v) => set("billing", { ...config.billing, paypal: { ...config.billing.paypal, enabled: v } })} label="PayPal" />
              {config.billing.paypal.enabled && (
                <div className="mt-3">
                  <label htmlFor="s-pp" className={labelCls()}>Email de PayPal</label>
                  <input id="s-pp" type="email" value={config.billing.paypal.email} onChange={(e) => set("billing", { ...config.billing, paypal: { ...config.billing.paypal, email: e.target.value.slice(0, 120) } })} className={inputCls()} placeholder="pagamenti@esempio.it" maxLength={120} />
                </div>
              )}
            </div>
            <div className="rounded-xl border border-soft bg-surface p-4">
              <Toggle checked={config.billing.card.enabled} onChange={(v) => set("billing", { ...config.billing, card: { ...config.billing.card, enabled: v } })} label="Tarjeta de crédito/débito" />
              {config.billing.card.enabled && (
                <div className="mt-3">
                  <label htmlFor="s-card" className={labelCls()}>Pasarela (demo)</label>
                  <input id="s-card" value={config.billing.card.provider} onChange={(e) => set("billing", { ...config.billing, card: { ...config.billing.card, provider: e.target.value.slice(0, 40) } })} className={inputCls()} placeholder="Stripe (demo)" maxLength={40} />
                  <p className="mt-1.5 text-[10px] leading-snug text-muted-it">Entorno de demostración: nunca se procesan pagos reales ni se guardan datos de tarjetas.</p>
                </div>
              )}
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <div>
              <label htmlFor="s-inv" className={labelCls()}>Prefijo de referencia de pago</label>
              <input id="s-inv" value={config.billing.invoicePrefix} onChange={(e) => set("billing", { ...config.billing, invoicePrefix: e.target.value.toUpperCase().replace(/[^A-Z0-9]/g, "").slice(0, 6) })} className={cn(inputCls(), "font-mono")} placeholder="IM" maxLength={6} />
            </div>
            <div>
              <label htmlFor="s-cur" className={labelCls()}>Moneda</label>
              <select id="s-cur" value={config.billing.currency} onChange={(e) => set("billing", { ...config.billing, currency: e.target.value as AppConfig["billing"]["currency"] })} className={inputCls()}>
                <option value="EUR">EUR (€)</option>
                <option value="USD">USD ($)</option>
                <option value="PEN">PEN (S/)</option>
                <option value="MXN">MXN ($)</option>
                <option value="ARS">ARS ($)</option>
                <option value="COP">COP ($)</option>
                <option value="CLP">CLP ($)</option>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="s-inst" className={labelCls()}>Instrucciones de pago (visibles en el checkout)</label>
            <textarea id="s-inst" value={config.billing.instructions} onChange={(e) => set("billing", { ...config.billing, instructions: e.target.value.slice(0, 300) })} className={cn(inputCls(), "min-h-20 resize-y")} maxLength={300} />
          </div>
        </div>
      </section>

      {/* ═══ SEGURIDAD EXTREMA (v5.0) ═══ */}
      <section className="rounded-2xl border-2 border-verde/40 bg-verde-tenue/20 p-5">
        <p className="mb-1 flex items-center gap-2 text-sm font-bold"><ShieldAlert className="h-4 w-4 text-verde-scuro dark:text-verde" aria-hidden="true" /> Seguridad extrema</p>
        <p className="mb-3 text-[11px] leading-relaxed text-muted-it">
          Endurecimiento activo: límites de intentos de acceso, duración de las sesiones y auditoría.
          Los cambios se aplican al guardar el formulario.
        </p>

        <div className="grid gap-3 sm:grid-cols-3">
          <div>
            <label htmlFor="s-sess" className={labelCls()}>Sesión admin (minutos)</label>
            <input id="s-sess" type="number" min={15} max={43200} step={15} value={config.security.adminSessionMinutes} onChange={(e) => set("security", { ...config.security, adminSessionMinutes: Math.max(15, Math.min(43200, Number(e.target.value) || 720)) })} className={inputCls()} />
            <p className="mt-1 text-[10px] text-muted-it">15 min (máximo rigor) – 43 200 (30 días)</p>
          </div>
          <div>
            <label htmlFor="s-maxatt" className={labelCls()}>Intentos de login máx.</label>
            <input id="s-maxatt" type="number" min={3} max={20} value={config.security.loginMaxAttempts} onChange={(e) => set("security", { ...config.security, loginMaxAttempts: Math.max(3, Math.min(20, Number(e.target.value) || 5)) })} className={inputCls()} />
            <p className="mt-1 text-[10px] text-muted-it">Antes de bloquear temporalmente la IP/usuario</p>
          </div>
          <div>
            <label htmlFor="s-lock" className={labelCls()}>Bloqueo (minutos)</label>
            <input id="s-lock" type="number" min={1} max={120} value={config.security.loginLockMinutes} onChange={(e) => set("security", { ...config.security, loginLockMinutes: Math.max(1, Math.min(120, Number(e.target.value) || 10)) })} className={inputCls()} />
            <p className="mt-1 text-[10px] text-muted-it">Duración del bloqueo tras agotar los intentos</p>
          </div>
        </div>

        <div className="mt-3 grid gap-2.5 md:grid-cols-2">
          <Toggle checked={config.security.telemetryEnabled} onChange={(v) => set("security", { ...config.security, telemetryEnabled: v })} label="Telemetría de uso" hint="Eventos anónimos de la plataforma. Desactívala para cero recogida de datos." />
          <Toggle checked={config.security.auditLog} onChange={(v) => set("security", { ...config.security, auditLog: v })} label="Registro de auditoría" hint="Anota accesos fallidos, bloqueos y acciones de seguridad en la pestaña Actividad." />
        </div>

        <div className="mt-4 rounded-xl border border-rosso/30 bg-rosso-tenue/30 p-4">
          <p className="flex items-center gap-2 text-xs font-bold text-rosso-scuro dark:text-rosso"><Ban className="h-3.5 w-3.5" aria-hidden="true" /> Revocación inmediata de sesiones</p>
          <p className="mt-1 text-[11px] leading-relaxed text-muted-it">
            Invalida los tokens activos. «Todas» incluye tu sesión actual del panel: tendrás que volver a entrar.
          </p>
          <div className="mt-3 flex flex-wrap gap-2.5">
            <button type="button" disabled={revoking} onClick={() => revokeSessions(false)} className="inline-flex min-h-11 items-center gap-2 rounded-xl border-2 border-verde/50 bg-verde-tenue px-4 py-2.5 text-xs font-bold text-verde-scuro transition-all hover:bg-verde/15 disabled:opacity-50 dark:text-verde">
              <Ban className="h-3.5 w-3.5" aria-hidden="true" /> {revoking ? "Revocando…" : "Solo estudiantes"}
            </button>
            <button type="button" disabled={revoking} onClick={() => revokeSessions(true)} className="inline-flex min-h-11 items-center gap-2 rounded-xl bg-rosso px-4 py-2.5 text-xs font-bold text-white shadow-md shadow-rosso/25 transition-all hover:scale-105 disabled:opacity-50">
              <ShieldAlert className="h-3.5 w-3.5" aria-hidden="true" /> {revoking ? "Revocando…" : "Todas (incluida la mía)"}
            </button>
          </div>
          {securityMsg && <p role="status" className="mt-3 rounded-lg bg-surface px-3 py-2 text-[11px] font-semibold text-inchiostro">{securityMsg}</p>}
        </div>

        <ul className="mt-3 space-y-1 text-[11px] leading-relaxed text-muted-it">
          <li>✓ Contraseñas migradas a scrypt con sal aleatoria (al iniciar sesión, automático)</li>
          <li>✓ Comparaciones en tiempo constante y mensajes de acceso unificados (anti timing / anti enumeración)</li>
          <li>✓ Cabeceras CSP, HSTS y anti-clickjacking activas en toda la app</li>
          <li>✓ Sincronización de perfiles protegida: cada estudiante solo puede escribir en el suyo</li>
        </ul>
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
