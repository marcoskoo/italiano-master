"use client";

import { useCallback, useEffect, useState } from "react";
import { Volume2 } from "lucide-react";
import { speak } from "@/lib/lms/tts";
import { useLms } from "@/lib/lms/store";
import { cn } from "@/lib/utils";

interface AudioButtonProps {
  text: string;
  size?: "sm" | "md" | "lg";
  rate?: number;
  label?: string;
  variant?: "icon" | "full";
  className?: string;
}

/** Botón de audio TTS con velocidad de los ajustes y estado visual. */
export function AudioButton({ text, size = "md", rate, label, variant = "icon", className }: AudioButtonProps) {
  const settingsRate = useLms((s) => s.settings.audioRate);
  const [playing, setPlaying] = useState(false);

  const handle = useCallback(() => {
    setPlaying(true);
    const ok = speak(text, { rate: rate ?? settingsRate, onEnd: () => setPlaying(false) });
    if (!ok) setPlaying(false);
  }, [text, rate, settingsRate]);

  const sizes = { sm: "h-7 w-7", md: "h-9 w-9", lg: "h-11 w-11" };
  const icons = { sm: "h-3.5 w-3.5", md: "h-4 w-4", lg: "h-5 w-5" };

  if (variant === "full") {
    return (
      <button
        type="button"
        onClick={handle}
        aria-label={label ?? `Escuchar: ${text}`}
        className={cn(
          "inline-flex min-h-11 items-center gap-2 rounded-xl border border-verde/30 bg-verde-tenue px-4 py-2.5 text-sm font-semibold text-verde-scuro transition-all hover:scale-[1.02] hover:border-verde/60 active:scale-95 dark:text-verde",
          playing && "animate-pulse",
          className
        )}
      >
        <Volume2 className={cn(icons.md, playing && "animate-bounce")} aria-hidden="true" />
        {label ?? "Ascolta"}
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={handle}
      aria-label={label ?? `Escuchar: ${text}`}
      title="Escuchar (audio italiano)"
      className={cn(
        "inline-flex shrink-0 items-center justify-center rounded-full border border-verde/30 bg-verde-tenue text-verde-scuro transition-all hover:scale-110 hover:border-verde/60 active:scale-90 dark:text-verde",
        sizes[size],
        playing && "bg-verde text-white animate-pulse",
        className
      )}
    >
      <Volume2 className={cn(icons[size], playing && "animate-bounce")} aria-hidden="true" />
    </button>
  );
}

/** Muestra un aviso si el navegador no tiene voz italiana (solo una vez). */
export function VoiceHint() {
  const [hasVoice, setHasVoice] = useState(true);
  useEffect(() => {
    const check = () => {
      if (typeof window !== "undefined" && "speechSynthesis" in window) {
        const voices = window.speechSynthesis.getVoices();
        if (voices.length > 0) {
          setHasVoice(voices.some((v) => v.lang?.toLowerCase().startsWith("it")));
        }
      }
    };
    check();
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      window.speechSynthesis.onvoiceschanged = check;
    }
  }, []);
  if (hasVoice) return null;
  return (
    <p className="rounded-xl border border-oro/40 bg-oro-tenue px-4 py-2.5 text-xs text-oro-scuro dark:text-oro">
      🔈 Tu navegador no tiene voz italiana instalada: el audio usará la voz disponible. Para mejor
      experiencia, usa Chrome o instala una voz it-IT en tu sistema.
    </p>
  );
}
