"use client";

import { useCallback, useEffect, useState } from "react";
import { Delete, Lock } from "lucide-react";
import { useLms } from "@/lib/lms/store";
import { cn } from "@/lib/utils";

/* ── LockScreen · bloqueo de la app con PIN (seguridad extrema v5.0) ──
   El PIN nunca sale del dispositivo: se calcula SHA-256(PIN+salt) con
   WebCrypto y se compara con el hash guardado. 5 fallos → lockout.   */

async function hashPinLocal(pin: string, salt: string): Promise<string> {
  const data = new TextEncoder().encode(`im-pin:${salt}:${pin}`);
  const digest = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(digest)).map((b) => b.toString(16).padStart(2, "0")).join("");
}

export function LockScreen() {
  const security = useLms((s) => s.security);
  const attemptUnlock = useLms((s) => s.attemptUnlock);
  const [pin, setPin] = useState("");
  const [error, setError] = useState(false);
  const [shake, setShake] = useState(false);
  const [now, setNow] = useState(Date.now());

  const lockoutActive = security.lockoutUntil > Date.now();

  // reloj para la cuenta atrás del lockout
  useEffect(() => {
    if (!lockoutActive) return;
    const t = setInterval(() => setNow(Date.now()), 500);
    return () => clearInterval(t);
  }, [lockoutActive]);

  const submit = useCallback(async (value: string) => {
    if (!security.pinHash || !security.pinSalt) return;
    const hash = await hashPinLocal(value, security.pinSalt);
    const ok = attemptUnlock(hash);
    if (!ok) {
      setError(true);
      setShake(true);
      setTimeout(() => setShake(false), 450);
    }
    setPin("");
  }, [attemptUnlock, security.pinHash, security.pinSalt]);

  const press = (digit: string) => {
    if (lockoutActive) return;
    setError(false);
    const next = (pin + digit).slice(0, 6);
    setPin(next);
    // si ya hay 6 dígitos, envía automáticamente
    if (next.length === 6) void submit(next);
  };

  const remove = () => {
    setError(false);
    setPin(pin.slice(0, -1));
  };

  // teclado físico
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (lockoutActive) return;
      if (/^\d$/.test(e.key)) press(e.key);
      else if (e.key === "Backspace") remove();
      else if (e.key === "Enter" && pin.length >= 4) void submit(pin);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  const attemptsLeft = Math.max(0, 5 - security.failedAttempts);
  const secondsLeft = Math.max(0, Math.ceil((security.lockoutUntil - now) / 1000));

  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-crema px-6" role="dialog" aria-modal="true" aria-label="Applicazione bloccata">
      <span aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-verde via-crema to-rosso" />
      <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br from-verde via-crema to-rosso p-[2px]">
        <span className="flex h-full w-full items-center justify-center rounded-[22px] bg-crema">
          <Lock className="h-7 w-7 text-verde-scuro" aria-hidden="true" />
        </span>
      </div>
      <h1 className="mt-5 font-display text-2xl font-semibold text-inchiostro">App bloccata</h1>
      <p className="mt-1.5 text-sm text-muted-it">Inserisci il PIN per continuare</p>

      {/* puntos del PIN */}
      <div className={cn("mt-6 flex items-center gap-3", shake && "animate-[wiggle_0.4s_ease-in-out]")} aria-live="polite">
        {Array.from({ length: 6 }).map((_, i) => (
          <span
            key={i}
            className={cn(
              "h-3.5 w-3.5 rounded-full border-2 transition-all",
              i < pin.length ? "scale-110 border-verde bg-verde" : "border-inchiostro/25",
              error && pin.length === 0 && i === 0 ? "border-rosso bg-rosso" : ""
            )}
          />
        ))}
      </div>

      {lockoutActive ? (
        <div className="mt-6 rounded-2xl border-2 border-rosso/40 bg-rosso-tenue px-5 py-4 text-center">
          <p className="text-sm font-bold text-rosso-scuro dark:text-rosso">Troppi tentativi</p>
          <p className="mt-1 font-mono text-2xl font-bold text-rosso-scuro dark:text-rosso">{secondsLeft}s</p>
          <p className="mt-1 text-xs text-muted-it">Riprova tra poco</p>
        </div>
      ) : (
        <>
          {/* teclado numérico */}
          <div className="mt-6 grid w-full max-w-64 grid-cols-3 gap-2.5">
            {["1", "2", "3", "4", "5", "6", "7", "8", "9"].map((d) => (
              <button
                key={d}
                onClick={() => press(d)}
                className="min-h-14 rounded-2xl border-2 border-soft bg-surface font-display text-xl font-bold text-inchiostro transition-all active:scale-95 hover:border-verde/50"
                aria-label={`Número ${d}`}
              >
                {d}
              </button>
            ))}
            <button onClick={() => setPin("")} className="min-h-14 rounded-2xl border-2 border-soft text-xs font-bold text-muted-it transition-all active:scale-95 hover:border-rosso/40 hover:text-rosso" aria-label="Borrar todo">
              Cancella
            </button>
            <button onClick={() => press("0")} className="min-h-14 rounded-2xl border-2 border-soft bg-surface font-display text-xl font-bold text-inchiostro transition-all active:scale-95 hover:border-verde/50" aria-label="Número 0">
              0
            </button>
            <button onClick={remove} className="min-h-14 flex items-center justify-center rounded-2xl border-2 border-soft text-muted-it transition-all active:scale-95 hover:border-rosso/40 hover:text-rosso" aria-label="Borrar último dígito">
              <Delete className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>

          {pin.length >= 4 && pin.length < 6 && (
            <button
              onClick={() => void submit(pin)}
              className="mt-4 min-h-12 rounded-2xl bg-verde px-8 text-sm font-bold text-white shadow-lg shadow-verde/25 transition-all hover:scale-105 active:scale-95 dark:text-inchiostro"
            >
              Sblocca
            </button>
          )}

          <p className="mt-5 h-5 text-xs font-semibold text-muted-it" aria-live="polite">
            {error ? `PIN errato · ${attemptsLeft} tentativi rimasti` : ""}
          </p>
        </>
      )}

      <p className="absolute bottom-6 text-center text-[10px] uppercase tracking-[0.2em] text-inchiostro/35">
        Italiano Master · Sicurezza estrema
      </p>
    </div>
  );
}
