"use client";

/* ── Premi & Sfide (v9.0) ─────────────────────────────────────────────
   Gamificación avanzada 100% gratuita:
   · 🪙 Monete: se ganan con misiones, letture y quiz perfectos
   · 🎡 Ruota della fortuna: 1 giro al día con premios ponderados
   · 🚀 Boost XP 2× y ❄️ congelamientos comprables
   · 🏛️ Títulos de perfil y 📅 sfida del mes determinista           */

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Check, Coins, Crown, Flame, Gift, Rocket, Snowflake, Sparkles, Trophy } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLms } from "@/lib/lms/store";
import { WHEEL_PRIZES, generateMonthlyChallenge, monthKeyFor, monthlyTemplate, MONTHLY_REWARD_COINS } from "@/lib/lms/quests";

const SEG = 360 / WHEEL_PRIZES.length;

const SEG_COLORS = [
  "#128a54", "#0c5b38", "#e9a83c", "#128a54",
  "#0c5b38", "#e9a83c", "#128a54", "#b26e12",
];

export const SHOP_TITLES: { id: "titolo-storico" | "titolo-cicerone" | "titolo-poeta" | "titolo-navigatore"; emoji: string; name: string; desc: string; price: number }[] = [
  { id: "titolo-storico", emoji: "🏛️", name: "Storico", desc: "Per chi ha letto la storia d'Italia e del mondo", price: 150 },
  { id: "titolo-cicerone", emoji: "🗣️", name: "Cicerone", desc: "La guida che conosce ogni angolo d'Italia", price: 200 },
  { id: "titolo-poeta", emoji: "🖋️", name: "Poeta", desc: "Dante, Petrarca... e tu", price: 200 },
  { id: "titolo-navigatore", emoji: "⚓", name: "Navigatore", desc: "Come Colombo, ma senza perdersi", price: 150 },
];

export function PremiView() {
  const coins = useLms((s) => s.coins);
  const xpBoostUntil = useLms((s) => s.xpBoostUntil);
  const lastWheelDate = useLms((s) => s.lastWheelDate);
  const streakFreezes = useLms((s) => s.streakFreezes);
  const ownedTitles = useLms((s) => s.ownedTitles);
  const activeTitle = useLms((s) => s.activeTitle);
  const monthCounters = useLms((s) => s.monthCounters);
  const monthKey = useLms((s) => s.monthKey);
  const monthClaimed = useLms((s) => s.monthChallengeClaimed);
  const spinWheelDaily = useLms((s) => s.spinWheelDaily);
  const buyShopItem = useLms((s) => s.buyShopItem);
  const claimMonthlyChallenge = useLms((s) => s.claimMonthlyChallenge);
  const setActiveTitle = useLms((s) => s.setActiveTitle);

  const today = new Date().toISOString().slice(0, 10);
  const spunToday = lastWheelDate === today;

  /* ruota */
  const [rotation, setRotation] = useState(0);
  const [spinning, setSpinning] = useState(false);
  const [prizeMsg, setPrizeMsg] = useState<string | null>(null);
  const [msg, setMsg] = useState<{ ok: boolean; text: string } | null>(null);

  const spin = () => {
    if (spinning || spunToday) return;
    setSpinning(true);
    setPrizeMsg(null);
    const res = spinWheelDaily();
    if (res.alreadySpun) { setSpinning(false); return; }
    const idx = WHEEL_PRIZES.findIndex((p) => p.id === res.prize.id);
    const target = 360 * 5 + (360 - idx * SEG - SEG / 2);
    setRotation((r) => r + target);
    setTimeout(() => {
      setSpinning(false);
      setPrizeMsg(`${res.prize.emoji} ${res.prize.label}!`);
    }, 4100);
  };

  /* boost: countdown en vivo */
  const [now, setNow] = useState(() => Date.now());
  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);
  const boostLeft = Math.max(0, xpBoostUntil - now);
  const boostActive = boostLeft > 0;
  const boostMins = Math.floor(boostLeft / 60000);
  const boostSecs = Math.floor((boostLeft % 60000) / 1000);

  /* sfida del mese */
  const mk = monthKeyFor();
  const challenge = useMemo(() => generateMonthlyChallenge(mk), [mk]);
  const tpl = monthlyTemplate(challenge.type);
  const progress = monthKey === mk ? (monthCounters[challenge.type] ?? 0) : 0;
  const done = progress >= challenge.target;
  const daysLeft = useMemo(() => {
    const d = new Date();
    return new Date(d.getFullYear(), d.getMonth() + 1, 0).getDate() - d.getDate();
  }, []);
  const [claimMsg, setClaimMsg] = useState<string | null>(null);

  const buy = (id: Parameters<typeof buyShopItem>[0], name: string, price: number) => {
    const res = buyShopItem(id);
    setMsg(res.ok ? { ok: true, text: `${name} acquistato! −${price} 🪙` } : { ok: false, text: res.reason ?? "Acquisto non riuscito" });
    setTimeout(() => setMsg(null), 3200);
  };

  const claim = () => {
    const res = claimMonthlyChallenge();
    setClaimMsg(res.ok ? `Premio riscattato: +${res.coins} 🪙 e +${res.xp} XP!` : "Non ancora completata");
  };

  return (
    <div className="space-y-6">
      {/* saldo */}
      <section className="flex flex-wrap items-center gap-4 rounded-3xl border border-oro/30 bg-gradient-to-r from-oro-tenue to-surface p-6 dark:from-oro-tenue/20">
        <div className="flex items-center gap-3">
          <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-oro-tenue text-3xl shadow-inner">🪙</span>
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-muted-it">Le tue monete</p>
            <p className="font-display text-3xl font-bold text-oro-scuro dark:text-oro">{coins.toLocaleString()}</p>
          </div>
        </div>
        {boostActive && (
          <span className="inline-flex items-center gap-2 rounded-full border-2 border-verde/50 bg-verde-tenue px-4 py-2 text-sm font-bold text-verde-scuro dark:text-verde">
            <Rocket className="h-4 w-4" aria-hidden="true" /> Boost 2× · {boostMins}:{String(boostSecs).padStart(2, "0")}
          </span>
        )}
        <span className="inline-flex items-center gap-2 rounded-full border-2 border-azzurro/40 bg-azzurro/10 px-4 py-2 text-sm font-bold text-azzurro-scuro dark:text-azzurro">
          <Snowflake className="h-4 w-4" aria-hidden="true" /> {streakFreezes}/2 congelamenti
        </span>
        {activeTitle && (
          <span className="inline-flex items-center gap-2 rounded-full border-2 border-terracotta/40 bg-terracotta/10 px-4 py-2 text-sm font-bold text-terracotta-scuro dark:text-terracotta">
            <Crown className="h-4 w-4" aria-hidden="true" /> {SHOP_TITLES.find((t) => t.id === activeTitle)?.emoji} {SHOP_TITLES.find((t) => t.id === activeTitle)?.name}
          </span>
        )}
      </section>

      {msg && (
        <p className={cn("rounded-2xl border px-4 py-3 text-sm font-semibold", msg.ok ? "border-verde/40 bg-verde-tenue text-verde-scuro dark:text-verde" : "border-rosso/40 bg-rosso-tenue text-rosso-scuro dark:text-rosso")}>
          {msg.text}
        </p>
      )}

      <div className="grid gap-6 lg:grid-cols-2">
        {/* ── ruota ── */}
        <section className="rounded-3xl border border-soft bg-surface p-6">
          <h2 className="flex items-center gap-2 font-display text-2xl font-semibold">
            <Sparkles className="h-5 w-5 text-oro" aria-hidden="true" /> Ruota della fortuna
          </h2>
          <p className="mt-1.5 text-sm leading-relaxed text-muted-it">
            Un giro al giorno: monete, XP, congelamenti ❄️ y boost 2×. Vuelve mañana para girar otra vez.
          </p>

          <div className="mt-6 flex flex-col items-center gap-5 sm:flex-row sm:items-center sm:justify-center">
            <div className="relative h-52 w-52 shrink-0">
              {/* puntero */}
              <div className="absolute left-1/2 top-[-10px] z-10 h-0 w-0 -translate-x-1/2 border-x-[10px] border-t-[18px] border-x-transparent border-t-rosso" aria-hidden="true" />
              <div
                className="h-full w-full rounded-full border-8 border-oro shadow-xl"
                style={{
                  background: `conic-gradient(${SEG_COLORS.map((c, i) => `${c} ${i * SEG}deg ${(i + 1) * SEG}deg`).join(", ")})`,
                  transform: `rotate(${rotation}deg)`,
                  transition: "transform 4s cubic-bezier(0.15, 0.9, 0.28, 1)",
                }}
              >
                {WHEEL_PRIZES.map((p, i) => (
                  <span
                    key={p.id}
                    className="absolute left-1/2 top-1/2 text-xl drop-shadow"
                    style={{ transform: `translate(-50%, -50%) rotate(${i * SEG + SEG / 2}deg) translateY(-72px)` }}
                    aria-hidden="true"
                  >
                    {p.emoji}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex flex-col items-center gap-3">
              <button
                onClick={spin}
                disabled={spinning || spunToday}
                className={cn(
                  "inline-flex min-h-12 items-center gap-2 rounded-2xl px-6 py-3 font-bold text-white shadow-lg transition-all",
                  spunToday ? "cursor-not-allowed bg-inchiostro/20" : "bg-verde shadow-verde/25 hover:scale-105"
                )}
              >
                <Gift className="h-4 w-4" aria-hidden="true" />
                {spunToday ? "Torna domani" : spinning ? "Gira..." : "Gira la ruota!"}
              </button>
              {prizeMsg && <motion.p initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="font-display text-lg font-bold text-oro-scuro dark:text-oro">{prizeMsg}</motion.p>}
              <p className="text-xs text-muted-it">Premi: {WHEEL_PRIZES.map((p) => p.emoji).join(" ")}</p>
            </div>
          </div>
        </section>

        {/* ── sfida del mese ── */}
        <section className="rounded-3xl border border-soft bg-surface p-6">
          <h2 className="flex items-center gap-2 font-display text-2xl font-semibold">
            <Trophy className="h-5 w-5 text-oro" aria-hidden="true" /> Sfida del mese · {mk}
          </h2>
          <p className="mt-1.5 text-sm leading-relaxed text-muted-it">
            La misma sfida para todos, generada por el mes. Complétala antes de que acabe para reclamar el premio.
          </p>

          <div className="mt-5 rounded-2xl bg-crema-scura p-5 dark:bg-inchiostro/10">
            <p className="font-display text-lg font-semibold">
              {tpl.emoji} {tpl.label(challenge.target)}
            </p>
            <div className="mt-3 h-3.5 overflow-hidden rounded-full bg-inchiostro/10 dark:bg-inchiostro/25">
              <div
                className={cn("h-full rounded-full transition-all duration-700", done ? "bg-oro" : "bg-verde")}
                style={{ width: `${Math.min(100, (progress / challenge.target) * 100)}%` }}
              />
            </div>
            <p className="mt-2 text-sm font-semibold text-muted-it">
              {Math.min(progress, challenge.target).toLocaleString()} / {challenge.target.toLocaleString()} · quedan {daysLeft} giorni
            </p>
            <button
              onClick={claim}
              disabled={!done || monthClaimed}
              className={cn(
                "mt-4 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-2xl px-6 py-3 font-bold shadow-lg transition-all",
                monthClaimed ? "cursor-default bg-inchiostro/15 text-muted-it" : done ? "bg-oro text-white shadow-oro/25 hover:scale-[1.02]" : "cursor-not-allowed bg-inchiostro/10 text-muted-it"
              )}
            >
              {monthClaimed ? <><Check className="h-4 w-4" aria-hidden="true" /> Premio riscattato</> : done ? "Riscatta il premio!" : `Completa la sfida · +${MONTHLY_REWARD_COINS} 🪙 +${tpl.xpReward} XP`}
            </button>
            {claimMsg && <p className="mt-2 text-center text-sm font-semibold text-oro-scuro dark:text-oro">{claimMsg}</p>}
          </div>
        </section>
      </div>

      {/* ── negozio ── */}
      <section className="rounded-3xl border border-soft bg-surface p-6">
        <h2 className="flex items-center gap-2 font-display text-2xl font-semibold">
          <Coins className="h-5 w-5 text-oro" aria-hidden="true" /> Il negozio
        </h2>
        <p className="mt-1.5 text-sm leading-relaxed text-muted-it">
          ¿Cómo ganar monete? Completa misiones diarias (+10 cada una, +25 las 3), termina letture con quiz (+20), gira la ruota y completa la sfida del mese (+300).
        </p>

        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          <ShopCard
            emoji="❄️"
            name="Congelamento racha"
            desc="Protege tu racha cuando falte un día. Máx. 2 en reserva."
            price={80}
            coins={coins}
            disabled={streakFreezes >= 2}
            disabledText="Riserva piena (2/2)"
            onBuy={() => buy("freeze", "Congelamento", 80)}
          />
          <ShopCard
            emoji="🚀"
            name="Boost XP 2× (15 min)"
            desc="Toda la XP que ganes en 15 minutos cuenta doble."
            price={60}
            coins={coins}
            disabled={false}
            onBuy={() => buy("boost", "Boost XP", 60)}
          />
          {SHOP_TITLES.map((t) => (
            <ShopCard
              key={t.id}
              emoji={t.emoji}
              name={`Titolo: ${t.name}`}
              desc={t.desc}
              price={t.price}
              coins={coins}
              disabled={ownedTitles.includes(t.id)}
              disabledText="Già tuo — equipalo"
              onBuy={() => buy(t.id, `Titolo ${t.name}`, t.price)}
              owned={ownedTitles.includes(t.id)}
              equipped={activeTitle === t.id}
              onEquip={() => setActiveTitle(activeTitle === t.id ? null : t.id)}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

function ShopCard({ emoji, name, desc, price, coins, disabled, disabledText, onBuy, owned, equipped, onEquip }: {
  emoji: string; name: string; desc: string; price: number; coins: number;
  disabled: boolean; disabledText?: string; onBuy: () => void;
  owned?: boolean; equipped?: boolean; onEquip?: () => void;
}) {
  const cannotAfford = coins < price;
  return (
    <div className={cn("rounded-3xl border-2 p-5 transition-all", equipped ? "border-verde/60 bg-verde-tenue" : "border-soft bg-surface")}>
      <div className="flex items-center justify-between">
        <span className="text-3xl" aria-hidden="true">{emoji}</span>
        <span className="inline-flex items-center gap-1 rounded-full bg-oro-tenue px-2.5 py-1 text-xs font-bold text-oro-scuro dark:text-oro">
          <Coins className="h-3 w-3" aria-hidden="true" /> {price}
        </span>
      </div>
      <p className="mt-3 font-display text-lg font-semibold">{name}</p>
      <p className="mt-1 text-sm leading-relaxed text-muted-it">{desc}</p>
      {owned && onEquip ? (
        <button
          onClick={onEquip}
          className={cn("mt-4 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-2xl px-4 py-2.5 text-sm font-bold transition-all", equipped ? "bg-verde text-white" : "border-2 border-verde/40 bg-verde-tenue text-verde-scuro hover:scale-105 dark:text-verde")}
        >
          {equipped ? <><Check className="h-4 w-4" aria-hidden="true" /> Equipato</> : "Equipa il titolo"}
        </button>
      ) : (
        <button
          onClick={onBuy}
          disabled={disabled || cannotAfford}
          className={cn(
            "mt-4 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-2xl px-4 py-2.5 text-sm font-bold transition-all",
            disabled ? "cursor-not-allowed bg-inchiostro/10 text-muted-it" : cannotAfford ? "cursor-not-allowed bg-inchiostro/10 text-muted-it" : "bg-verde text-white shadow-md shadow-verde/25 hover:scale-105"
          )}
        >
          {disabled ? disabledText ?? "Non disponibile" : cannotAfford ? `Ti servono ${price - coins} 🪙` : "Compra"}
        </button>
      )}
    </div>
  );
}
