"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, Copy, CreditCard, Crown, Gem, Landmark, Loader2, ShieldCheck, Sprout, Wallet, X, Zap } from "lucide-react";
import { PLANS, PLAN_ORDER, type PlanId } from "@/lib/lms/plans";
import { useLms } from "@/lib/lms/store";
import type { AppConfig } from "@/lib/lms/appconfig";
import { useUi } from "@/lib/lms/ui";
import { cn } from "@/lib/utils";

/* ── Vista: Piani PRO · PREMIUM · PLATINUM ────────────────────────── */

const PLAN_ICONS: Record<PlanId, typeof Crown> = { free: Sprout, pro: Zap, premium: Gem, platinum: Crown };

/* valores por plan de cada fila de la matriz (el label llega de ui.pricing.matrixRows) */
const MATRIX_VALUES: Record<PlanId, string>[] = [
  { free: "✓", pro: "✓", premium: "✓", platinum: "✓" },
  { free: "—", pro: "✓", premium: "✓", platinum: "✓" },
  { free: "—", pro: "—", premium: "✓", platinum: "✓" },
  { free: "5", pro: "20", premium: "100", platinum: "∞" },
  { free: "2/giorno", pro: "5/giorno", premium: "Illimitata", platinum: "Illimitata" },
  { free: "—", pro: "✓", premium: "✓", platinum: "✓" },
  { free: "—", pro: "—", premium: "✓", platinum: "✓" },
  { free: "—", pro: "—", premium: "✓", platinum: "✓" },
  { free: "—", pro: "—", premium: "—", platinum: "✓" },
  { free: "—", pro: "—", premium: "—", platinum: "✓" },
  { free: "—", pro: "—", premium: "—", platinum: "✓" },
];

type PayMethod = "bank" | "paypal" | "card";

type CheckoutStage = "summary" | "payment" | "processing" | "success";

/* Referencia de pago única: IM-2026-4F7K2Q (prefijo admin + año + sufijo aleatorio) */
function makePaymentRef(prefix: string): string {
  const clean = (prefix || "IM").toUpperCase().replace(/[^A-Z0-9]/g, "").slice(0, 6) || "IM";
  const suffix = Array.from({ length: 6 }, () => "ABCDEFGHJKMNPQRSTUVWXYZ23456789"[Math.floor(Math.random() * 31)]).join("");
  return `${clean}-${new Date().getFullYear()}-${suffix}`;
}

function formatIbanPretty(iban: string): string {
  return iban.replace(/\s/g, "").toUpperCase().replace(/(.{4})/g, "$1 ").trim();
}

const CURRENCY_SYMBOL: Record<string, string> = { EUR: "€", USD: "$", PEN: "S/", MXN: "$", ARS: "$", COP: "$", CLP: "$" };

export function PricingView() {
  const u = useUi();
  const plan = useLms((s) => s.plan);
  const setPlan = useLms((s) => s.setPlan);
  const navigate = useLms((s) => s.navigate);
  const remoteConfig = useLms((s) => s.remoteConfig);
  const userName = useLms((s) => s.userName);
  const addPayment = useLms((s) => s.addPayment);

  const [billing, setBilling] = useState<"monthly" | "yearly">("yearly");
  const [checkout, setCheckout] = useState<PlanId | null>(null);
  const [stage, setStage] = useState<CheckoutStage>("summary");
  const [payMethod, setPayMethod] = useState<PayMethod>("bank");
  const [payRef, setPayRef] = useState("");
  const [copied, setCopied] = useState<string | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const checkoutDef = checkout ? PLANS[checkout] : null;
  /* v9.19 · meta por lengua (tagline/badge/features) con fallback histórico */
  const planTr = (id: PlanId) => u.data.plans[id];

  /* v9.19 · decimales por convención local: 7,99 (IT) · 7.99 (EN) */
  const fmt2 = (n: number) => n.toFixed(2).replace(".", u.pricing.decimalDot ? "." : ",");

  /* configuración de pagos del Panel Admin (con fallback demo) */
  const billingCfg: AppConfig["billing"] | null = remoteConfig?.billing ?? null;
  const cur = CURRENCY_SYMBOL[billingCfg?.currency ?? "EUR"] ?? "€"; // símbolo según moneda configurada
  const paymentsEnabled = Boolean(billingCfg?.enabled);
  const methods: { id: PayMethod; label: string; icon: typeof Landmark; hint: string }[] = [];
  if (billingCfg?.bank?.enabled && (billingCfg.bank.iban || billingCfg.bank.accountNumber)) {
    methods.push({ id: "bank", label: u.pricing.methodBank, icon: Landmark, hint: billingCfg.bank.iban ? u.pricing.methodBankIbanHint : u.pricing.methodBankSwiftHint });
  }
  if (billingCfg?.paypal?.enabled && billingCfg.paypal.email) {
    methods.push({ id: "paypal", label: u.pricing.methodPaypal, icon: Wallet, hint: billingCfg.paypal.email });
  }
  if (billingCfg?.card?.enabled) {
    methods.push({ id: "card", label: u.pricing.methodCard, icon: CreditCard, hint: u.pricing.methodCardHint(billingCfg.card.provider || "") });
  }

  const amountDue = checkoutDef
    ? billing === "yearly"
      ? checkoutDef.yearly
      : checkoutDef.monthly
    : 0;
  const vatRate = billingCfg?.vatRate ?? 0;
  const netAmount = vatRate > 0 ? amountDue / (1 + vatRate / 100) : amountDue;

  const copy = async (text: string, tag: string) => {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      /* clipboard bloqueado: se puede copiar a mano */
    }
    setCopied(tag);
    setTimeout(() => setCopied(null), 1600);
  };

  const openCheckout = (id: PlanId) => {
    setStage("summary");
    setPayMethod(methods[0]?.id ?? "bank");
    setPayRef(makePaymentRef(billingCfg?.invoicePrefix ?? "IM"));
    setCheckout(id);
  };

  const activate = (method: PayMethod | "demo") => {
    if (!checkout) return;
    if (method !== "demo") {
      addPayment({
        reference: payRef,
        plan: checkout,
        billing,
        method,
        amount: amountDue,
        currency: billingCfg?.currency ?? "EUR",
        status: method === "bank" ? "in attesa" : "completato", // valor de DATO (enum interno), no texto UI
      });
    }
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
        <h2 className="mt-4 font-display text-xl font-semibold">{u.pricing.disabledTitle}</h2>
        <p className="mt-2 text-sm leading-relaxed text-muted-it">
          {u.pricing.disabledDesc}
        </p>
        <button onClick={() => navigate("inicio")} className="mt-5 inline-flex min-h-11 items-center rounded-xl bg-verde px-5 py-2.5 text-sm font-bold text-white shadow-md shadow-verde/25 hover:bg-verde-scuro">
          {u.pricing.disabledCta}
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
            <ShieldCheck className="h-3.5 w-3.5" aria-hidden="true" /> {u.pricing.heroChip}
          </p>
          <h1 className="mt-4 font-display text-4xl font-bold leading-[1.05] tracking-tight text-inchiostro sm:text-5xl">
            PRO · PREMIUM · <span className="italic">PLATINUM</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-inchiostro/75 sm:text-base">
            {u.pricing.heroGreet(userName.split(" ")[0])}
          </p>
          {plan !== "free" && (
            <p className="mt-4 inline-flex items-center gap-2 rounded-full bg-inchiostro px-4 py-1.5 text-xs font-bold text-crema">
              <Crown className="h-3.5 w-3.5 text-oro" aria-hidden="true" />
              {u.pricing.activePlan(PLANS[plan].name)}
            </p>
          )}
        </div>
      </section>

      {/* ── TOGGLE FATTURAZIONE ── */}
      <div className="flex justify-center">
        <div className="inline-flex items-center gap-1 rounded-2xl border-2 border-soft bg-surface p-1.5" role="group" aria-label={u.pricing.billingAria}>
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
              {b === "monthly" ? u.pricing.monthly : u.pricing.yearly}
              {b === "yearly" && <span className={cn("ml-2 rounded-full px-2 py-0.5 text-[10px]", billing === b ? "bg-oro/25 text-oro-scuro dark:text-oro" : "bg-verde-tenue text-verde-scuro dark:text-verde")}>{u.pricing.off}</span>}
            </button>
          ))}
        </div>
      </div>

      {/* ── CARDS ── */}
      <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-4" aria-label={u.pricing.cardsAria}>
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
        <h2 className="font-display text-2xl font-semibold">{u.pricing.matrixTitle}</h2>
        <p className="mt-1.5 text-sm text-muted-it">{u.pricing.matrixDesc}</p>
        <div className="mt-5 overflow-x-auto rounded-2xl border border-soft scrollbar-thin">
          <table className="w-full min-w-[640px] border-collapse text-sm">
            <thead>
              <tr className="bg-crema-scura dark:bg-inchiostro/10">
                <th scope="col" className="px-4 py-3.5 text-left font-bold">{u.pricing.matrixTh}</th>
                {PLAN_ORDER.map((p) => (
                  <th key={p} scope="col" className={cn("px-4 py-3.5 text-center font-display text-sm font-bold", p === "platinum" && "text-shimmer", p === "premium" && "text-oro-scuro dark:text-oro", p === "pro" && "text-verde-scuro dark:text-verde")}>
                    {PLANS[p].name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-inchiostro/5 dark:divide-inchiostro/15">
              {MATRIX_VALUES.map((values, idx) => (
                <tr key={idx} className="transition-colors hover:bg-verde-tenue/40">
                  <th scope="row" className="px-4 py-3 text-left font-medium text-muted-it">{u.pricing.matrixRows[idx] ?? ""}</th>
                  {PLAN_ORDER.map((p) => (
                    <td key={p} className="px-4 py-3 text-center">
                      {(() => {
                        const raw = values[p];
                        const display = raw === "2/giorno" ? u.pricing.corr2 : raw === "5/giorno" ? u.pricing.corr5 : raw === "Illimitata" ? u.pricing.unlimited : raw;
                        return (
                          <span className={cn(
                            "font-bold",
                            raw === "✓" && "text-verde",
                            raw === "—" && "text-muted-it/50",
                            raw !== "✓" && raw !== "—" && "text-inchiostro"
                          )}>
                            {display}
                          </span>
                        );
                      })()}
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
        <h2 className="text-center font-display text-2xl font-semibold">{u.pricing.faqTitle}</h2>
        <div className="mt-5 space-y-2.5">
          {u.pricing.faq.map((f, i) => (
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
          {u.pricing.faqDemoNote}
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
            aria-label={u.pricing.checkoutAria(checkoutDef.name)}
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
                        <p className="font-display text-2xl font-bold leading-tight">{u.pricing.planOf(checkoutDef.name)}</p>
                        <p className="text-xs text-muted-it">{planTr(checkoutDef.id)?.tagline ?? checkoutDef.tagline}</p>
                      </div>
                    </div>
                    <button onClick={closeModal} aria-label={u.pricing.closeAria} className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-soft transition-colors hover:bg-rosso-tenue hover:text-rosso">
                      <X className="h-4 w-4" aria-hidden="true" />
                    </button>
                  </div>

                  <dl className="mt-5 space-y-2 rounded-2xl bg-crema-scura p-4 text-sm dark:bg-inchiostro/10">
                    <div className="flex justify-between">
                      <dt className="text-muted-it">{u.pricing.billingLabel}</dt>
                      <dd className="font-bold">{billing === "monthly" ? u.pricing.billingMonthly : u.pricing.billingYearly}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-muted-it">{u.pricing.priceLabel}</dt>
                      <dd className="font-bold">
                        {checkoutDef.monthly === 0
                          ? u.pricing.freeForever
                          : billing === "monthly"
                            ? u.pricing.perMonth(fmt2(checkoutDef.monthly), cur)
                            : u.pricing.perMonth(fmt2(checkoutDef.yearly / 12), cur)}
                      </dd>
                    </div>
                    {checkoutDef.monthly > 0 && (
                      <div className="flex justify-between">
                        <dt className="text-muted-it">{billing === "yearly" ? u.pricing.totalYear : u.pricing.totalMonth}</dt>
                        <dd className="font-bold text-verde-scuro dark:text-verde">
                          {billing === "yearly" ? u.pricing.perYear(checkoutDef.yearly, cur) : `${fmt2(checkoutDef.monthly)} ${cur}`}
                        </dd>
                      </div>
                    )}
                  </dl>

                  <ul className="mt-4 space-y-1.5">
                    {(planTr(checkoutDef.id)?.features ?? checkoutDef.features).slice(0, 4).map((f, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-verde" aria-hidden="true" />
                        {f}
                      </li>
                    ))}
                    {(planTr(checkoutDef.id)?.features ?? checkoutDef.features).length > 4 && (
                      <li className="pl-6 text-xs text-muted-it">{u.pricing.moreFeatures((planTr(checkoutDef.id)?.features ?? checkoutDef.features).length - 4)}</li>
                    )}
                  </ul>

                  <p className="mt-4 rounded-xl bg-oro-tenue px-3.5 py-2.5 text-[11px] leading-relaxed text-oro-scuro dark:text-oro">
                    {paymentsEnabled && methods.length > 0
                      ? u.pricing.payNote
                      : u.pricing.demoNoteShort}
                  </p>

                  <div className="mt-5 flex gap-2.5">
                    <button onClick={closeModal} className="min-h-12 flex-1 rounded-xl border-2 border-soft px-4 py-3 text-sm font-bold transition-all hover:border-inchiostro/30">
                      {u.pricing.cancel}
                    </button>
                    <button
                      onClick={() => {
                        if (paymentsEnabled && methods.length > 0) setStage("payment");
                        else activate("demo");
                      }}
                      className={cn(
                        "min-h-12 flex-[1.6] rounded-xl px-4 py-3 text-sm font-bold text-white shadow-lg transition-all hover:scale-[1.02]",
                        checkoutDef.id === "platinum" ? "plan-gold-bg shadow-oro/40" : checkoutDef.id === "premium" ? "plan-gold-bg shadow-oro/30" : "bg-verde shadow-verde/30 dark:text-inchiostro"
                      )}
                    >
                      <Crown className="mr-1.5 inline h-4 w-4" aria-hidden="true" />
                      {paymentsEnabled && methods.length > 0 ? u.pricing.toPayment : u.pricing.activateOf(checkoutDef.name)}
                    </button>
                  </div>
                </div>
              )}

              {stage === "payment" && billingCfg && (
                <div className="p-6 sm:p-7">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="font-display text-xl font-bold leading-tight">{u.pricing.paymentTitle(checkoutDef.name)}</p>
                      <p className="text-xs text-muted-it">{u.pricing.paymentSub}</p>
                    </div>
                    <button onClick={() => setStage("summary")} aria-label={u.pricing.backAria} className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-soft transition-colors hover:bg-rosso-tenue hover:text-rosso">
                      <X className="h-4 w-4" aria-hidden="true" />
                    </button>
                  </div>

                  {/* importo + IVA */}
                  <dl className="mt-4 space-y-1.5 rounded-2xl bg-crema-scura p-4 text-sm dark:bg-inchiostro/10">
                    <div className="flex justify-between">
                      <dt className="text-muted-it">{u.pricing.payRefLabel}</dt>
                      <dd className="flex items-center gap-1.5 font-mono font-bold">
                        {payRef}
                        <button onClick={() => copy(payRef, "ref")} aria-label={u.pricing.copyAria("ref")} className="rounded-lg p-1 text-muted-it hover:bg-inchiostro/10">
                          {copied === "ref" ? <Check className="h-3.5 w-3.5 text-verde" aria-hidden="true" /> : <Copy className="h-3.5 w-3.5" aria-hidden="true" />}
                        </button>
                      </dd>
                    </div>
                    {vatRate > 0 && (
                      <div className="flex justify-between">
                        <dt className="text-muted-it">{u.pricing.netBase}</dt>
                        <dd className="font-semibold">{fmt2(netAmount)} {CURRENCY_SYMBOL[billingCfg.currency] ?? "€"}</dd>
                      </div>
                    )}
                    {vatRate > 0 && (
                      <div className="flex justify-between">
                        <dt className="text-muted-it">{u.pricing.vat(vatRate)}</dt>
                        <dd className="font-semibold">{fmt2(amountDue - netAmount)} {CURRENCY_SYMBOL[billingCfg.currency] ?? "€"}</dd>
                      </div>
                    )}
                    <div className="flex justify-between border-t border-inchiostro/10 pt-1.5 dark:border-inchiostro/20">
                      <dt className="font-bold">{billing === "yearly" ? u.pricing.totalYear : u.pricing.totalMonth}</dt>
                      <dd className="font-display text-lg font-bold text-verde-scuro dark:text-verde">{fmt2(amountDue)} {CURRENCY_SYMBOL[billingCfg.currency] ?? "€"}</dd>
                    </div>
                  </dl>

                  {/* selección de método */}
                  <p className="mb-2 mt-4 text-xs font-bold uppercase tracking-wide text-muted-it">{u.pricing.methodLabel}</p>
                  <div className="grid gap-2">
                    {methods.map((m) => {
                      const I = m.icon;
                      const active = payMethod === m.id;
                      return (
                        <button
                          key={m.id}
                          onClick={() => setPayMethod(m.id)}
                          aria-pressed={active}
                          className={cn(
                            "flex min-h-14 items-center gap-3 rounded-xl border-2 px-4 py-3 text-left transition-all",
                            active ? "border-verde bg-verde-tenue/60" : "border-soft hover:border-inchiostro/25"
                          )}
                        >
                          <span className={cn("flex h-10 w-10 shrink-0 items-center justify-center rounded-xl", active ? "bg-verde text-white" : "bg-inchiostro/10 text-inchiostro/60")}>
                            <I className="h-5 w-5" aria-hidden="true" />
                          </span>
                          <span className="min-w-0 flex-1">
                            <span className="block text-sm font-bold">{m.label}</span>
                            <span className="block truncate text-[11px] text-muted-it">{m.hint}</span>
                          </span>
                          <span className={cn("h-5 w-5 shrink-0 rounded-full border-2", active ? "border-verde bg-verde" : "border-inchiostro/25")}>
                            {active && <Check className="mx-auto my-0.5 h-2.5 w-2.5 text-white" aria-hidden="true" />}
                          </span>
                        </button>
                      );
                    })}
                  </div>

                  {/* datos del método elegido */}
                  {payMethod === "bank" && billingCfg.bank.enabled && (() => {
                    /* datos que el remitente necesita para la transferencia (internacional SWIFT o IBAN) */
                    const b = billingCfg.bank;
                    const rows: { label: string; value: string; mono?: boolean; copyTag?: string }[] = [];
                    if (b.holder) rows.push({ label: u.pricing.bankBeneficiary, value: b.holder });
                    if (b.bankName) rows.push({ label: u.pricing.bankName, value: b.bankName });
                    if (b.bankAddress) rows.push({ label: u.pricing.bankAddress, value: b.bankAddress });
                    if (b.bic) rows.push({ label: "BIC/SWIFT", value: b.bic, mono: true, copyTag: "bic" });
                    if (b.accountNumber) rows.push({ label: b.accountCurrency ? u.pricing.bankAccount(b.accountCurrency) : u.pricing.bankAccountPlain, value: b.accountNumber, mono: true, copyTag: "conto" });
                    if (b.iban) rows.push({ label: u.pricing.bankIban, value: formatIbanPretty(b.iban), mono: true, copyTag: "iban" });
                    return (
                      <div className="mt-4 space-y-2 rounded-2xl border border-soft bg-crema-scura/60 p-4 dark:bg-inchiostro/5">
                        <p className="text-[11px] font-bold uppercase tracking-wide text-muted-it">{b.iban ? u.pricing.bankDataIban : u.pricing.bankDataIntl}</p>
                        {rows.map((r) => (
                          <div key={r.label} className="flex items-center justify-between gap-2 text-sm">
                            <span className="shrink-0 text-muted-it">{r.label}</span>
                            <span className="flex min-w-0 items-center gap-1.5">
                              <span className={cn("truncate text-[13px] font-bold tracking-wide", r.mono && "font-mono")}>{r.value}</span>
                              {r.copyTag && (
                                <button onClick={() => copy(r.value.replace(/\s/g, ""), r.copyTag as string)} aria-label={u.pricing.copyAria(r.label)} className="shrink-0 rounded-lg p-1.5 text-muted-it hover:bg-inchiostro/10">
                                  {copied === r.copyTag ? <Check className="h-3.5 w-3.5 text-verde" aria-hidden="true" /> : <Copy className="h-3.5 w-3.5" aria-hidden="true" />}
                                </button>
                              )}
                            </span>
                          </div>
                        ))}
                        {b.accountCurrency && !b.iban && (
                          <p className="pt-1 text-[11px] leading-relaxed text-muted-it">{u.pricing.bankAccountNote(b.accountCurrency)}</p>
                        )}
                        <p className="pt-1 text-[11px] leading-relaxed text-muted-it">
                          {billingCfg.instructions}
                        </p>
                      </div>
                    );
                  })()}

                  {payMethod === "paypal" && (
                    <div className="mt-4 space-y-2 rounded-2xl border border-soft bg-crema-scura/60 p-4 dark:bg-inchiostro/5">
                      <p className="text-[11px] font-bold uppercase tracking-wide text-muted-it">PayPal</p>
                      <div className="flex items-center justify-between gap-2 text-sm">
                        <span className="shrink-0 text-muted-it">{u.pricing.paypalSendTo}</span>
                        <span className="flex min-w-0 items-center gap-1.5">
                          <span className="truncate font-semibold">{billingCfg.paypal.email}</span>
                          <button onClick={() => copy(billingCfg.paypal.email, "pp")} aria-label={u.pricing.copyAria("PayPal")} className="shrink-0 rounded-lg p-1.5 text-muted-it hover:bg-inchiostro/10">
                            {copied === "pp" ? <Check className="h-3.5 w-3.5 text-verde" aria-hidden="true" /> : <Copy className="h-3.5 w-3.5" aria-hidden="true" />}
                          </button>
                        </span>
                      </div>
                      <p className="pt-1 text-[11px] leading-relaxed text-muted-it">{u.pricing.paypalNote(payRef)}</p>
                    </div>
                  )}

                  {payMethod === "card" && (
                    <div className="mt-4 rounded-2xl border border-soft bg-crema-scura/60 p-4 dark:bg-inchiostro/5">
                      <p className="flex items-center gap-2 text-sm font-bold"><CreditCard className="h-4 w-4 text-oro-scuro dark:text-oro" aria-hidden="true" /> {billingCfg.card.provider}</p>
                      <p className="mt-1.5 text-[11px] leading-relaxed text-muted-it">
                        {u.pricing.cardDemoNote}
                      </p>
                    </div>
                  )}

                  <p className="mt-3 rounded-xl bg-oro-tenue px-3.5 py-2.5 text-[11px] leading-relaxed text-oro-scuro dark:text-oro">
                    {u.pricing.demoWarning}
                  </p>

                  <div className="mt-5 flex gap-2.5">
                    <button onClick={() => setStage("summary")} className="min-h-12 flex-1 rounded-xl border-2 border-soft px-4 py-3 text-sm font-bold transition-all hover:border-inchiostro/30">
                      {u.pricing.back}
                    </button>
                    <button
                      onClick={() => activate(payMethod)}
                      className={cn(
                        "min-h-12 flex-[1.6] rounded-xl px-4 py-3 text-sm font-bold text-white shadow-lg transition-all hover:scale-[1.02]",
                        checkoutDef.id === "platinum" || checkoutDef.id === "premium" ? "plan-gold-bg shadow-oro/35" : "bg-verde shadow-verde/30 dark:text-inchiostro"
                      )}
                    >
                      <ShieldCheck className="mr-1.5 inline h-4 w-4" aria-hidden="true" />
                      {u.pricing.paidActivate(checkoutDef.name)}
                    </button>
                  </div>
                </div>
              )}

              {stage === "processing" && (
                <div className="flex flex-col items-center gap-4 p-12 text-center">
                  <span className="flex h-16 w-16 items-center justify-center rounded-full plan-gold-bg text-white shadow-lg">
                    <Loader2 className="h-7 w-7 animate-spin" aria-hidden="true" />
                  </span>
                  <p className="font-display text-xl font-semibold">{u.pricing.processing}</p>
                  <p className="text-sm text-muted-it">{u.pricing.processingSub(checkoutDef.name)}</p>
                </div>
              )}

              {stage === "success" && (
                <div className="flex flex-col items-center gap-4 p-8 text-center sm:p-10">
                  <span className="flex h-20 w-20 animate-pop-in items-center justify-center rounded-full plan-platinum-bg text-inchiostro ring-platinum">
                    <Crown className="h-10 w-10" aria-hidden="true" />
                  </span>
                  <p className="font-display text-3xl font-bold">{u.pricing.success(checkoutDef.name)}</p>
                  <p className="max-w-xs text-sm leading-relaxed text-muted-it">
                    {u.pricing.successSub(checkoutDef.name, userName.split(" ")[0])}
                  </p>
                  <button
                    onClick={() => { closeModal(); navigate("inicio"); }}
                    className="mt-2 inline-flex min-h-12 items-center gap-2 rounded-2xl bg-verde px-7 py-3 text-sm font-bold text-white shadow-lg shadow-verde/30 transition-all hover:scale-[1.03] dark:text-inchiostro"
                  >
                    {u.pricing.start}
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
  const u = useUi();
  const Icon = PLAN_ICONS[def.id];
  const price = def.monthly === 0 ? 0 : billing === "monthly" ? def.monthly : Math.round((def.yearly / 12) * 100) / 100;
  const isPlatinum = def.id === "platinum";
  const isPremium = def.id === "premium";
  const cur = CURRENCY_SYMBOL[useLms((s) => s.remoteConfig)?.billing?.currency ?? "EUR"] ?? "€";
  const tr = u.data.plans[def.id];
  const fmt2 = (n: number) => n.toFixed(2).replace(".", u.pricing.decimalDot ? "." : ",");

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
      {tr?.badge ?? def.badge ? (
        <span className={cn(
          "absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full px-3.5 py-1 text-[10px] font-bold uppercase tracking-widest text-white shadow-md",
          isPlatinum ? "plan-gold-bg" : "bg-oro"
        )}>
          {tr?.badge ?? def.badge}
        </span>
      ) : null}

      <div className="flex items-center gap-2.5">
        <span className={cn(
          "flex h-10 w-10 items-center justify-center rounded-xl text-white shadow-sm",
          isPlatinum ? "bg-inchiostro" : isPremium ? "plan-gold-bg" : def.id === "pro" ? "bg-verde" : "bg-inchiostro/50"
        )}>
          <Icon className="h-5 w-5" aria-hidden="true" />
        </span>
        <div>
          <p className={cn("font-display text-2xl font-bold leading-none", isPlatinum && "text-inchiostro")}>{def.name}</p>
          <p className={cn("mt-1 text-[11px]", isPlatinum ? "text-inchiostro/60" : "text-muted-it")}>{tr?.tagline ?? def.tagline}</p>
        </div>
      </div>

      <div className="mt-5">
        <p className={cn("font-display text-4xl font-bold leading-none", isPlatinum ? "text-inchiostro" : "text-inchiostro")}>
          {price === 0 ? `0 ${cur}` : `${fmt2(price)} ${cur}`}
          <span className={cn("ml-1.5 font-sans text-sm font-semibold", isPlatinum ? "text-inchiostro/60" : "text-muted-it")}>{u.pricing.perMonthShort}</span>
        </p>
        {def.monthly > 0 && billing === "yearly" && (
          <p className={cn("mt-1 text-xs font-semibold", isPlatinum ? "text-inchiostro/70" : "text-verde-scuro dark:text-verde")}>
            {u.pricing.perYear(def.yearly, cur)} · {u.pricing.saveYear}
          </p>
        )}
        {def.monthly > 0 && billing === "monthly" && (
          <p className={cn("mt-1 text-xs", isPlatinum ? "text-inchiostro/60" : "text-muted-it")}>{u.pricing.orYear(def.yearly, cur)}</p>
        )}
      </div>

      <ul className={cn("mt-5 flex-1 space-y-2", isPlatinum ? "text-inchiostro/85" : isPremium ? "text-inchiostro/90" : "text-muted-it")}>
        {(tr?.features ?? def.features).map((f, i) => (
          <li key={i} className="flex items-start gap-2 text-[13px] leading-snug">
            <Check className={cn("mt-0.5 h-4 w-4 shrink-0", isPlatinum ? "text-oro-scuro" : "text-verde")} aria-hidden="true" />
            {f}
          </li>
        ))}
      </ul>

      <div className="mt-6">
        {current ? (
          <span className="flex min-h-12 w-full items-center justify-center gap-2 rounded-xl border-2 border-verde/50 bg-verde-tenue text-sm font-bold text-verde-scuro dark:text-verde">
            <Check className="h-4 w-4" aria-hidden="true" /> {u.pricing.planActive}
          </span>
        ) : def.id === "free" ? (
          <button
            onClick={onDowngrade}
            className="min-h-12 w-full rounded-xl border-2 border-soft px-4 py-3 text-sm font-bold text-muted-it transition-all hover:border-inchiostro/30 hover:text-inchiostro"
          >
            {u.pricing.toFree}
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
            {u.pricing.switchTo(def.name)}
          </button>
        )}
      </div>
    </motion.article>
  );
}
