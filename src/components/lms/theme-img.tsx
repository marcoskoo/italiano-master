"use client";

import { useState, type ImgHTMLAttributes } from "react";
import { useLms } from "@/lib/lms/store";
import { cn } from "@/lib/utils";

/* ═══ v9.4 · Imágenes adaptadas al modo oscuro ═══════════════════════
   Dos mecanismos complementarios:
   1) .ita-img (CSS): todas las imágenes reciben en modo oscuro una
      suave reducción de luminosidad y un borde tenue — pensado para
      escenas/fotos, que se ven naturales sobre superficies oscuras.
   2) ThemeImg: para las familias de iconos ilustrados (vocabulario,
      gramática, falsi amici, printables) existe además una variante
      nocturna dedicada (mismo nombre + «-dark» antes de la extensión,
      fondo verde noche y trazos luminosos) que se intercambia
      automáticamente. Si la variante nocturna no existe, cae con
      elegancia a la clara.                                              */

export function useIsDark(): boolean {
  return useLms((s) => s.settings.theme === "dark");
}

/** /img/vocab/saluti.webp → /img/vocab/saluti-dark.webp */
export function darkSrc(src: string): string {
  return src.replace(/\.(webp|jpe?g|png)$/, "-dark.$1");
}

type ThemeImgProps = Omit<ImgHTMLAttributes<HTMLImageElement>, "src"> & {
  src: string;
  /** desactiva el intercambio de variante (para escenas sin -dark) */
  noSwap?: boolean;
};

export function ThemeImg({ src, noSwap = false, className, alt = "", ...rest }: ThemeImgProps) {
  const dark = useIsDark();
  const want = dark && !noSwap ? darkSrc(src) : src;

  /* la variante nocturna falló → caer a la clara;
     el flag se resetea por render cuando cambia el objetivo
     (patrón oficial de React, sin efectos) */
  const [failedWant, setFailedWant] = useState<string | null>(null);
  if (failedWant !== null && failedWant !== want) setFailedWant(null);
  const current = failedWant === want ? src : want;

  return (
    <img
      src={current}
      alt={alt}
      loading="lazy"
      decoding="async"
      className={cn("ita-img", className)}
      onError={() => setFailedWant(want)}
      {...rest}
    />
  );
}
