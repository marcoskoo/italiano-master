"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, Crown, Gem, Loader2, ShieldCheck, Sprout, X, Zap } from "lucide-react";
import { PLANS, PLAN_ORDER, type PlanId } from "@/lib/lms/plans";
import { useLms } from "@/lib/lms/store";
import { cn } from "@/lib/utils";

/* ── Vista: Piani PRO · PREMIUM · PLATINUM ────────────────────────── */

const PLAN_ICONS: Record<PlanId, typeof Crown> = { free: Sprout, pro: Zap, premium: Gem, platinum: Crown };

const MATRIX: { label: string; values: Record<PlanId, string> }[] = [
  { label: "Corsi Da zero · A1 · A2", values: { free: "✓", pro: "✓", premium: "✓", platinum: "✓" } },
  { label: "Corsi B1 · B2", values: { free: "—", pro: "✓", premium: "✓", platinum: "✓" } },
  { label: "Corsi C1 · C2", values: { free: "—", pro: "—", premium: "✓", platinum: "✓" } },
  { label: "Tutor IA (messaggi/giorno)", values: { free: "5", pro: "20", premium: "100", platinum: "∞" } },
  { label: "Correzione scrittura IA", values: { free: "2/giorno", pro: "5/giorno", premium: "Illimitata", platinum: "Illimitata" } },
  { label: "Analisi avanzate (radar · calendario · motore adattivo)", values: { free: "—", pro: "✓", premium: "✓", platinum: "✓" } },
  { label: "Letture B2/C1 e conversazioni avanzate", values: { free: "—", pro: "—", premium: "✓", platinum: "✓" } },
  { label: "Piano di studio settimanale", values: { free: "—", pro: "—", premium: "✓", platinum: "✓" } },
  { label: "Certificati verificati con codice", values: { free: "—", pro: "—", premium: "—", platinum: "✓" } },
  { label: "Export pacchetto offline completo", values: { free: "—", pro: "—", premium: "—", platinum: "✓" } },
  { label: "Supporto prioritario 24/7", values: { free: "—", pro: "—", premium: "—", platinum: "✓" } },
];

const FAQ = [
  { q: "È un pagamento reale?", a: "No: questa è una versione dimostrativa dell'LMS. L'attivazione di qualsiasi piano è immediata, gratuita e non richiede alcun dato di pagamento. Serve solo per esplorare l'esperienza PRO · PREMIUM · PLATINUM." },
  { q: "Posso cambiare piano quando voglio?", a: "Sì. Upgrade e downgrade sono istantanei da questa pagina o da Impostazioni → Abbonamento. I tuoi progressi, le flashcard e i certificati restano intatti anche tornando al piano FREE." },
  { q: "Cosa cambia con i certificati verificati (PLATINUM)?", a: "I certificati PLATINUM includono un codice univoco di verifica e il sigillo dorato sia nell'anteprima sia nel PNG scaricabile. Sono comunque certificati motivazionali: ti preparano al meglio per CILS, CELI e PLIDA." },
  { q: "Il piano settimanale si aggiorna da solo?", a: "Sì: PREMIUM e PLATINUM generano ogni settimana un piano di 7 giorni in base al tuo livello MCER, alle flashcard da ripassare e ai temi deboli individuati dal motore adattivo." },
];

export function PricingView() {
  const plan = useLms((s) => s.plan);
  const setPlan = useLms((s) => s.setPlan);
  const navigate = useLms((s) => s.navigate);
  const remoteConfig = useLms((s) => s.remoteConfig);
  const userName = useLms((s) => s.userName);

  const [billing, setBilling] = useState<"monthly" | "yearly">("yearly");
  const [checkout, setCheckout] = useState<PlanId | null>(null);
  const [stage, setStage] = useState<"summary" | "processing" | "success">("summary");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const checkoutDef = checkout ? PLANS[checkout] : null;

  const openCheckout = (id: PlanId) => {
    setStage("summary");
    setCheckout(id);
  };

  const activate = () => {
    if (!checkout) return;
    setStage("processing");
    setTimeout(() => {
      setPlan(checkout, billing);
      setStage("success");
    }, 1400);
  };

  const closeModal = () => {
    setCheckout(null);
    setStage("summary");
  };

  // sistema de planes desactivado desde el Panel Admin (tras todos los hooks)
  if (remoteConfig && !remoteConfig.features.plans) {
    return (
      <div className="mx-auto max-w-lg rounded-3xl border border-soft bg-surface p-8 text-center">
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-verde-tenue text-2xl">🎁</span>
        <h2 className="mt-4 font-display text-xl font-semibold">Tutto sbloccato per tutti</h2>
        <p className="mt-2 text-sm leading-relaxed text-muted-it">
          La administración ha desactivado el sistema de planes: todos los cursos, el tutor IA y las analíticas avanzadas están abiertos para toda la comunidad. Buono studio!
        </p>
        <button onClick={() => navigate("inicio")} className="mt-5 inline-flex min-h-11 items-center rounded-xl bg-verde px-5 py-2.5 text-sm font-bold text-white shadow-md shadow-verde/25 hover:bg-verde-scuro">
          Torna all'inizio
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-12">
      {/* ── HERO ── */}
      <section className="relative overflow-hidden rounded-3xl plan-platinum-bg p-8 text-center ring-platinum sm:p-12">
        <span aria-hidden="true" className="pointer-events-none absolute -left-10 -top-12 text-[130px] leading-none opacity-15 animate-crown-float">👑</span>
        <span aria-hidden="true" className="pointer-events-none absolute -bottom-14 -right-8 text-[130px] leading-none opacity-15 animate-crown-float" style={{ animationDelay: "1.2s" }}>💎</span>
        <div className="relative">
          <p className="inline-flex items-center gap-1.5 rounded-full bg-inchiostro/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-inchiostro/70">
            <ShieldCheck className="h-3.5 w-3.5" aria-hidden="true" /> Italiano Master · Edizione a pagamento
          </p>
          <h1 className="mt-4 font-display text-4xl font-bold leading-[1.05] tracking-tight text-inchiostro sm:text-5xl">
            PRO · PREMIUM · <span className="italic">PLATINUM</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-inchiostro/75 sm:text-base">
            Ciao {userName.split(" ")[0]}: sblocca tutto il potenziale della piattaforma. Corsi fino a C2,
            tutor IA senza limiti, analisi avanzate, contenuti esclusivi e certificati verificati.
          </p>
          {plan !== "free" && (
            <p className="mt-4 inline-flex items-center gap-2 rounded-full bg-inchiostro px-4 py-1.5 text-xs font-bold text-crema">
              <Crown className="h-3.5 w-3.5 text-oro" aria-hidden="true" />
              Piano attivo: {PLANS[plan].name}
            </p>
          )}
        </div>
      </section>

      {/* ── TOGGLE FATTURAZIONE ── */}
      <div className="flex justify-center">
        <div className="inline-flex items-center gap-1 rounded-2xl border-2 border-soft bg-surface p-1.5" role="group" aria-label="Periodo di fatturazione">
          {(["monthly", "yearly"] as const).map((b) => (
            <button
              key={b}
              onClick={() => setBilling(b)}
              aria-pressed={billing === b}
              className={cn(
                "min-h-10 rounded-xl px-5 py-2 text-sm font-bold transition-all",
                billing === b ? "bg-inchiostro text-crema dark:bg-verde dark:text-inchiostro" : "text-muted-it hover:text-inchiostro"
              )}
            >
              {b === "monthly" ? "Mensile" : "Annuale"}
              {b === "yearly" && <span className={cn("ml-2 rounded-full px-2 py-0.5 text-[10px]", billing === b ? "bg-oro/25 text-oro-scuro dark:text-oro" : "bg-verde-tenue text-verde-scuro dark:text-verde")}>−20%</span>}
            </button>
          ))}
        </div>
      </div>

      {/* ── CARDS ── */}
      <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-4" aria-label="Piani disponibili">
        {PLAN_ORDER.map((id, i) => (
          <PlanCard
            key={id}
            def={PLANS[id]}
            billing={billing}
            current={plan === id}
            index={i}
            onSelect={() => openCheckout(id)}
            onDowngrade={() => setPlan("free", null)}
          />
        ))}
      </section>

      {/* ── MATRICE ── */}
      <section className="rounded-3xl border border-soft bg-surface p-6 sm:p-8">
        <h2 className="font-display text-2xl font-semibold">Confronto completo</h2>
        <p className="mt-1.5 text-sm text-muted-it">Tutto quello che include ogni piano, in una tabella.</p>
        <div className="mt-5 overflow-x-auto rounded-2xl border border-soft scrollbar-thin">
          <table className="w-full min-w-[640px] border-collapse text-sm">
            <thead>
              <tr className="bg-crema-scura dark:bg-inchiostro/10">
                <th scope="col" className="px-4 py-3.5 text-left font-bold">Caratteristica</th>
                {PLAN_ORDER.map((p) => (
                  <th key={p} scope="col" className={cn("px-4 py-3.5 text-center font-display text-sm font-bold", p === "platinum" && "text-shimmer", p === "premium" && "text-oro-scuro dark:text-oro", p === "pro" && "text-verde-scuro dark:text-verde")}>
                    {PLANS[p].name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-inchiostro/5 dark:divide-inchiostro/15">
              {MATRIX.map((row) => (
                <tr key={row.label} className="transition-colors hover:bg-verde-tenue/40">
                  <th scope="row" className="px-4 py-3 text-left font-medium text-muted-it">{row.label}</th>
                  {PLAN_ORDER.map((p) => (
                    <td key={p} className="px-4 py-3 text-center">
                      <span className={cn(
                        "font-bold",
                        row.values[p] === "✓" && "text-verde",
                        row.values[p] === "—" && "text-muted-it/50",
                        row.values[p] !== "✓" && row.values[p] !== "—" && "text-inchiostro"
                      )}>
                        {row.values[p]}
                      </span>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="mx-auto max-w-3xl">
        <h2 className="text-center font-display text-2xl font-semibold">Domande frequenti</h2>
        <div className="mt-5 space-y-2.5">
          {FAQ.map((f, i) => (
            <div key={i} className={cn("overflow-hidden rounded-2xl border-2 transition-colors", openFaq === i ? "border-verde/40 bg-surface" : "border-soft bg-surface")}>
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                aria-expanded={openFaq === i}
                className="flex min-h-14 w-full items-center justify-between gap-3 px-5 py-4 text-left font-semibold"
              >
                {f.q}
                <span className={cn("text-lg transition-transform", openFaq === i && "rotate-45")}>+</span>
              </button>
              <AnimatePresence>
                {openFaq === i && (
                  <motion.p
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden px-5 pb-4 text-sm leading-relaxed text-muted-it"
                  >
                    {f.a}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
        <p className="mt-6 rounded-2xl border border-oro/30 bg-oro-tenue px-4 py-3 text-center text-xs leading-relaxed text-oro-scuro dark:text-oro">
          ⚠️ Modalità demo: nessun pagamento reale verrà mai richiesto. I piani servono per esplorare
          l'esperienza completa della piattaforma in questo ambiente di prova.
        </p>
      </section>

      {/* ── CHECKOUT MODALE ── */}
      <AnimatePresence>
        {checkoutDef && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] flex items-center justify-center p-4"
            role="dialog"
            aria-modal="true"
            aria-label={`Attiva piano ${checkoutDef.name}`}
          >
            <div className="absolute inset-0 bg-inchiostro/60 backdrop-blur-sm" onClick={stage === "processing" ? undefined : closeModal} />
            <motion.div
              initial={{ scale: 0.94, y: 16 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.94, y: 16 }}
              className="relative w-full max-w-md overflow-hidden rounded-3xl border border-soft bg-surface shadow-2xl"
            >
              {stage === "summary" && (
                <div className="p-6 sm:p-7">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <span className={cn(
                        "flex h-12 w-12 items-center justify-center rounded-2xl text-white shadow-md",
                        checkoutDef.id === "platinum" ? "plan-platinum-bg !text-inchiostro ring-platinum" : checkoutDef.id === "premium" ? "plan-gold-bg" : checkoutDef.id === "pro" ? "bg-verde" : "bg-inchiostro/60"
                      )}>
                        {(() => { const I = PLAN_ICONS[checkoutDef.id]; return <I className="h-6 w-6" aria-hidden="true" />; })()}
                      </span>
                      <div>
                        <p className="font-display text-2xl font-bold leading-tight">Piano {checkoutDef.name}</p>
                        <p className="text-xs text-muted-it">{checkoutDef.tagline}</p>
                      </div>
                    </div>
                    <button onClick={closeModal} aria-label="Chiudi" className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-soft transition-colors hover:bg-rosso-tenue hover:text-rosso">
                      <X className="h-4 w-4" aria-hidden="true" />
                    </button>
                  </div>

                  <dl className="mt-5 space-y-2 rounded-2xl bg-crema-scura p-4 text-sm dark:bg-inchiostro/10">
                    <div className="flex justify-between">
                      <dt className="text-muted-it">Fatturazione</dt>
                      <dd className="font-bold">{billing === "monthly" ? "Mensile" : "Annuale (−20%)"}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-muted-it">Prezzo</dt>
                      <dd className="font-bold">
                        {checkoutDef.monthly === 0
                          ? "Gratuito per sempre"
                          : billing === "monthly"
                            ? `${checkoutDef.monthly.toFixed(2).replace(".", ",")} €/mese`
                            : `${(checkoutDef.yearly / 12).toFixed(2).replace(".", ",")} €/mese`}
                      </dd>
                    </div>
                    {checkoutDef.monthly > 0 && (
                      <div className="flex justify-between">
                        <dt className="text-muted-it">Totale {billing === "yearly" ? "annuale" : "al mese"}</dt>
                        <dd className="font-bold text-verde-scuro dark:text-verde">
                          {billing === "yearly" ? `${checkoutDef.yearly} €/anno` : `${checkoutDef.monthly.toFixed(2).replace(".", ",")} €`}
                        </dd>
                      </div>
                    )}
                  </dl>

                  <ul className="mt-4 space-y-1.5">
                    {checkoutDef.features.slice(0, 4).map((f, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-verde" aria-hidden="true" />
                        {f}
                      </li>
                    ))}
                    {checkoutDef.features.length > 4 && (
                      <li className="pl-6 text-xs text-muted-it">+ altre {checkoutDef.features.length - 4} funzionalità…</li>
                    )}
                  </ul>

                  <p className="mt-4 rounded-xl bg-oro-tenue px-3.5 py-2.5 text-[11px] leading-relaxed text-oro-scuro dark:text-oro">
                    ⚠️ Demo: nessun pagamento reale, nessun dato richiesto. Attivazione istantanea.
                  </p>

                  <div className="mt-5 flex gap-2.5">
                    <button onClick={closeModal} className="min-h-12 flex-1 rounded-xl border-2 border-soft px-4 py-3 text-sm font-bold transition-all hover:border-inchiostro/30">
                      Annulla
                    </button>
                    <button
                      onClick={activate}
                      className={cn(
                        "min-h-12 flex-[1.6] rounded-xl px-4 py-3 text-sm font-bold text-white shadow-lg transition-all hover:scale-[1.02]",
                        checkoutDef.id === "platinum" ? "plan-gold-bg shadow-oro/40" : checkoutDef.id === "premium" ? "plan-gold-bg shadow-oro/30" : "bg-verde shadow-verde/30 dark:text-inchiostro"
                      )}
                    >
                      <Crown className="mr-1.5 inline h-4 w-4" aria-hidden="true" />
                      Attiva {checkoutDef.name}
                    </button>
                  </div>
                </div>
              )}

              {stage === "processing" && (
                <div className="flex flex-col items-center gap-4 p-12 text-center">
                  <span className="flex h-16 w-16 items-center justify-center rounded-full plan-gold-bg text-white shadow-lg">
                    <Loader2 className="h-7 w-7 animate-spin" aria-hidden="true" />
                  </span>
                  <p className="font-display text-xl font-semibold">Elaborazione…</p>
                  <p className="text-sm text-muted-it">Attivazione del piano {checkoutDef.name} in corso</p>
                </div>
              )}

              {stage === "success" && (
                <div className="flex flex-col items-center gap-4 p-8 text-center sm:p-10">
                  <span className="flex h-20 w-20 animate-pop-in items-center justify-center rounded-full plan-platinum-bg text-inchiostro ring-platinum">
                    <Crown className="h-10 w-10" aria-hidden="true" />
                  </span>
                  <p className="font-display text-3xl font-bold">Benvenuto nel piano {checkoutDef.name}!</p>
                  <p className="max-w-xs text-sm leading-relaxed text-muted-it">
                    Grazie {userName.split(" ")[0]}: tutti i vantaggi {checkoutDef.name} sono già attivi sul tuo account.
                  </p>
                  <button
                    onClick={() => { closeModal(); navigate("inicio"); }}
                    className="mt-2 inline-flex min-h-12 items-center gap-2 rounded-2xl bg-verde px-7 py-3 text-sm font-bold text-white shadow-lg shadow-verde/30 transition-all hover:scale-[1.03] dark:text-inchiostro"
                  >
                    Inizia a imparare →
                  </button>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ── tarjeta individual de plan ── */
function PlanCard({
  def, billing, current, index, onSelect, onDowngrade,
}: {
  def: (typeof PLANS)[PlanId];
  billing: "monthly" | "yearly";
  current: boolean;
  index: number;
  onSelect: () => void;
  onDowngrade: () => void;
}) {
  const Icon = PLAN_ICONS[def.id];
  const price = def.monthly === 0 ? 0 : billing === "monthly" ? def.monthly : Math.round((def.yearly / 12) * 100) / 100;
  const isPlatinum = def.id === "platinum";
  const isPremium = def.id === "premium";

  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.06 }}
      className={cn(
        "relative flex flex-col rounded-3xl border-2 p-6",
        isPlatinum && "plan-platinum-bg border-oro/50 ring-platinum",
        isPremium && "border-oro/45 bg-oro-tenue/40 dark:bg-oro-tenue/15",
        def.id === "pro" && "border-verde/40 bg-verde-tenue/30 dark:bg-verde-tenue/15",
        def.id === "free" && "border-soft bg-surface"
      )}
    >
      {def.badge && (
        <span className={cn(
          "absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full px-3.5 py-1 text-[10px] font-bold uppercase tracking-widest text-white shadow-md",
          isPlatinum ? "plan-gold-bg" : "bg-oro"
        )}>
          {def.badge}
        </span>
      )}

      <div className="flex items-center gap-2.5">
        <span className={cn(
          "flex h-10 w-10 items-center justify-center rounded-xl text-white shadow-sm",
          isPlatinum ? "bg-inchiostro" : isPremium ? "plan-gold-bg" : def.id === "pro" ? "bg-verde" : "bg-inchiostro/50"
        )}>
          <Icon className="h-5 w-5" aria-hidden="true" />
        </span>
        <div>
          <p className={cn("font-display text-2xl font-bold leading-none", isPlatinum && "text-inchiostro")}>{def.name}</p>
          <p className={cn("mt-1 text-[11px]", isPlatinum ? "text-inchiostro/60" : "text-muted-it")}>{def.tagline}</p>
        </div>
      </div>

      <div className="mt-5">
        <p className={cn("font-display text-4xl font-bold leading-none", isPlatinum ? "text-inchiostro" : "text-inchiostro")}>
          {price === 0 ? "0 €" : `${price.toFixed(2).replace(".", ",")} €`}
          <span className={cn("ml-1.5 font-sans text-sm font-semibold", isPlatinum ? "text-inchiostro/60" : "text-muted-it")}>/mese</span>
        </p>
        {def.monthly > 0 && billing === "yearly" && (
          <p className={cn("mt-1 text-xs font-semibold", isPlatinum ? "text-inchiostro/70" : "text-verde-scuro dark:text-verde")}>
            {def.yearly} €/anno · risparmia il 20%
          </p>
        )}
        {def.monthly > 0 && billing === "monthly" && (
          <p className={cn("mt-1 text-xs", isPlatinum ? "text-inchiostro/60" : "text-muted-it")}>oppure {def.yearly} €/anno con il 20% di sconto</p>
        )}
      </div>

      <ul className={cn("mt-5 flex-1 space-y-2", isPlatinum ? "text-inchiostro/85" : isPremium ? "text-inchiostro/90" : "text-muted-it")}>
        {def.features.map((f, i) => (
          <li key={i} className="flex items-start gap-2 text-[13px] leading-snug">
            <Check className={cn("mt-0.5 h-4 w-4 shrink-0", isPlatinum ? "text-oro-scuro" : "text-verde")} aria-hidden="true" />
            {f}
          </li>
        ))}
      </ul>

      <div className="mt-6">
        {current ? (
          <span className="flex min-h-12 w-full items-center justify-center gap-2 rounded-xl border-2 border-verde/50 bg-verde-tenue text-sm font-bold text-verde-scuro dark:text-verde">
            <Check className="h-4 w-4" aria-hidden="true" /> PIANO ATTIVO
          </span>
        ) : def.id === "free" ? (
          <button
            onClick={onDowngrade}
            className="min-h-12 w-full rounded-xl border-2 border-soft px-4 py-3 text-sm font-bold text-muted-it transition-all hover:border-inchiostro/30 hover:text-inchiostro"
          >
            Torna a FREE
          </button>
        ) : (
          <button
            onClick={onSelect}
            className={cn(
              "min-h-12 w-full rounded-xl px-4 py-3 text-sm font-bold shadow-lg transition-all hover:scale-[1.02] active:scale-95",
              isPlatinum || isPremium ? "plan-gold-bg text-white shadow-oro/35" : "bg-verde text-white shadow-verde/30 dark:text-inchiostro"
            )}
          >
            {def.id === "platinum" && <Crown className="mr-1.5 inline h-4 w-4" aria-hidden="true" />}
            Passa a {def.name}
          </button>
        )}
      </div>
    </motion.article>
  );
}
