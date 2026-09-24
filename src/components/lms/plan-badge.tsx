"use client";

import { motion } from "framer-motion";
import { Crown, Gem, Lock, Sparkles, Sprout, Zap } from "lucide-react";
import { PLANS, type PlanId } from "@/lib/lms/plans";
import { useLms } from "@/lib/lms/store";
import { cn } from "@/lib/utils";

/* ── Componentes de plan: chip, overlays de bloqueo, banner ───────── */

const PLAN_STYLE: Record<PlanId, { chip: string; icon: typeof Zap; label: string }> = {
  free: { chip: "bg-inchiostro/8 text-inchiostro/70 dark:bg-inchiostro/20 dark:text-inchiostro/80", icon: Sprout, label: "FREE" },
  pro: { chip: "bg-verde-tenue text-verde-scuro dark:text-verde", icon: Zap, label: "PRO" },
  premium: { chip: "plan-gold-bg text-white", icon: Gem, label: "PREMIUM" },
  platinum: { chip: "plan-platinum-bg text-inchiostro ring-platinum", icon: Crown, label: "PLATINUM" },
};

/** Chip del plan actual (clicable → página de planes). */
export function PlanChip({ size = "md", onClick, className }: { size?: "sm" | "md"; onClick?: () => void; className?: string }) {
  const plan = useLms((s) => s.plan);
  const style = PLAN_STYLE[plan];
  const Icon = style.icon;
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={`Piano attuale: ${PLANS[plan].name} · gestisci piani`}
      title={`Piano ${PLANS[plan].name}`}
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[11px] font-bold tracking-wide transition-all hover:scale-105",
        style.chip,
        size === "sm" && "px-2.5 py-1 text-[10px]",
        className
      )}
    >
      <Icon className={cn(size === "sm" ? "h-3 w-3" : "h-3.5 w-3.5")} aria-hidden="true" />
      {style.label}
    </button>
  );
}

/** CTA dorada para usuarios FREE. */
export function UpgradeCta({ className, label = "⚡ PRO" }: { className?: string; label?: string }) {
  const navigate = useLms((s) => s.navigate);
  return (
    <button
      type="button"
      onClick={() => navigate("piani")}
      aria-label="Passa a PRO · Premium · Platinum"
      className={cn(
        "inline-flex min-h-9 items-center gap-1.5 rounded-full plan-gold-bg px-3.5 py-1.5 text-[11px] font-bold tracking-wide text-white shadow-md shadow-oro/30 transition-all hover:scale-105 active:scale-95",
        className
      )}
    >
      {label}
    </button>
  );
}

/** Overlay de bloqueo para contenido premium (el contenedor debe ser `relative`). */
export function LockedOverlay({
  required = "pro",
  title,
  desc,
  className,
}: {
  required?: PlanId;
  title: string;
  desc?: string;
  className?: string;
}) {
  const navigate = useLms((s) => s.navigate);
  return (
    <div
      className={cn(
        "absolute inset-0 z-10 flex flex-col items-center justify-center gap-2.5 rounded-[inherit] bg-crema/75 p-4 text-center backdrop-blur-[3px] dark:bg-inchiostro/75",
        className
      )}
    >
      <span className="flex h-11 w-11 animate-pop-in items-center justify-center rounded-full plan-gold-bg text-white shadow-lg">
        <Lock className="h-5 w-5" aria-hidden="true" />
      </span>
      <p className="font-display text-lg font-semibold leading-tight">{title}</p>
      {desc && <p className="max-w-xs text-xs leading-relaxed text-muted-it">{desc}</p>}
      <button
        onClick={() => navigate("piani")}
        className="mt-1 inline-flex min-h-10 items-center gap-1.5 rounded-xl plan-gold-bg px-4 py-2 text-xs font-bold text-white shadow-md shadow-oro/30 transition-all hover:scale-105"
      >
        <Crown className="h-3.5 w-3.5" aria-hidden="true" />
        Sblocca con {PLANS[required].name}
      </button>
    </div>
  );
}

/** Tarjeta de característica bloqueada (secciones enteras). */
export function LockedFeatureCard({
  title,
  bullets,
  required = "pro",
}: {
  title: string;
  bullets: string[];
  required?: PlanId;
}) {
  const navigate = useLms((s) => s.navigate);
  return (
    <div className="relative flex min-h-64 flex-col items-center justify-center gap-2 overflow-hidden rounded-3xl border-2 border-dashed border-oro/45 bg-oro-tenue/25 p-6 text-center dark:bg-oro-tenue/10">
      <span aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-[0.06]" style={{ backgroundImage: "radial-gradient(circle at 30% 20%, #c9862b 0, transparent 40%), radial-gradient(circle at 75% 80%, #128a54 0, transparent 35%)" }} />
      <span className="flex h-12 w-12 items-center justify-center rounded-2xl plan-gold-bg text-white shadow-lg">
        <Lock className="h-5 w-5" aria-hidden="true" />
      </span>
      <p className="font-display text-xl font-semibold">{title}</p>
      <ul className="mt-1 space-y-0.5">
        {bullets.map((b, i) => (
          <li key={i} className="text-xs text-muted-it">{b}</li>
        ))}
      </ul>
      <button
        onClick={() => navigate("piani")}
        className="mt-2.5 inline-flex min-h-11 items-center gap-1.5 rounded-xl plan-gold-bg px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-oro/30 transition-all hover:scale-105"
      >
        <Crown className="h-4 w-4" aria-hidden="true" />
        Disponibile dal piano {PLANS[required].name}
      </button>
    </div>
  );
}

/** Banner de upselling para el Home (usuarios FREE). */
export function PremiumBanner() {
  const navigate = useLms((s) => s.navigate);
  return (
    <motion.section
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative overflow-hidden rounded-3xl plan-platinum-bg p-6 ring-platinum sm:p-8"
    >
      <span aria-hidden="true" className="pointer-events-none absolute -right-8 -top-10 text-[120px] leading-none opacity-15 animate-crown-float">👑</span>
      <div className="relative">
        <p className="inline-flex items-center gap-1.5 rounded-full bg-inchiostro/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-inchiostro/70">
          <Sparkles className="h-3 w-3" aria-hidden="true" /> Solo per pochi
        </p>
        <h2 className="mt-3 font-display text-2xl font-bold leading-tight text-inchiostro sm:text-3xl">
          Sblocca <span className="font-extrabold">PRO · PREMIUM · <span className="italic">PLATINUM</span></span>
        </h2>
        <p className="mt-2 max-w-xl text-sm leading-relaxed text-inchiostro/75">
          Corsi B1–C2, tutor IA illimitato, analisi avanzate, contenuti esclusivi, certificati
          verificati e piano di studio settimanale. La versione completa di Italiano Master ti aspetta.
        </p>
        <div className="mt-5 flex flex-wrap items-center gap-3">
          <button
            onClick={() => navigate("piani")}
            className="inline-flex min-h-12 items-center gap-2 rounded-2xl bg-inchiostro px-6 py-3 text-sm font-bold text-crema shadow-lg transition-all hover:scale-[1.03]"
          >
            <Crown className="h-4 w-4 text-oro" aria-hidden="true" /> Scopri i piani
          </button>
          <span className="text-xs font-semibold text-inchiostro/60">A partire da 7,99 €/mese · disdici quando vuoi</span>
        </div>
      </div>
    </motion.section>
  );
}
