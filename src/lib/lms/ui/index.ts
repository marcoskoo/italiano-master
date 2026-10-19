"use client";

import { useLms } from "../store";
import { NAV_FLAT, NAV_GROUPS, VIEW_TITLES } from "../nav";
import type { LangCode, ViewId } from "../types";
import type { UiStrings } from "./types";
import { IT } from "./it";
import { EN } from "./en";
import { PT_CORE, FR_CORE, DE_CORE } from "./core";

/* ═══ v9.18 · Resolutor de la interfaz por lengua de estudio ════════
   uiFor(lang) devuelve el diccionario de la lengua activa con
   fallback por sección al italiano (pt/fr/de traen el esqueleto).
   useUi() es el hook reactivo que usan los componentes.           */

const CORES: Partial<Record<LangCode, Partial<UiStrings>>> = {
  pt: PT_CORE, fr: FR_CORE, de: DE_CORE,
};

function mergeCore(core: Partial<UiStrings>): UiStrings {
  const out = { ...IT } as UiStrings & Record<string, unknown>;
  for (const [k, v] of Object.entries(core)) {
    if (v && typeof v === "object" && !Array.isArray(v) && typeof out[k as keyof UiStrings] === "object") {
      // fusión por sección: el core trae secciones completas
      (out as Record<string, unknown>)[k] = { ...(out[k as keyof UiStrings] as object), ...(v as object) };
    } else {
      (out as Record<string, unknown>)[k] = v;
    }
  }
  return out;
}

const BY_LANG: Record<LangCode, UiStrings> = {
  it: IT,
  en: EN,
  pt: mergeCore(PT_CORE),
  fr: mergeCore(FR_CORE),
  de: mergeCore(DE_CORE),
};

export function uiFor(lang: LangCode): UiStrings {
  return BY_LANG[lang] ?? IT;
}

/** Hook reactivo: se actualiza al cambiar la lengua de estudio. */
export function useUi(): UiStrings {
  const lang = (useLms((s) => s.activeLang) ?? "it") as LangCode;
  return uiFor(lang);
}

/** Etiqueta de un item de navegación en la lengua activa (fallback NAV label). */
export function navLabelFor(lang: LangCode, id: ViewId): string {
  const u = uiFor(lang);
  return u.nav.items[id] ?? NAV_FLAT.find((i) => i.id === id)?.label ?? id;
}

/** Nombre del grupo de navegación en la lengua activa. */
export function navGroupFor(lang: LangCode, group: string): string {
  const u = uiFor(lang);
  const key = NAV_GROUPS.find((g) => g.group === group)?.groupId;
  return (key && (u.nav.groups as Record<string, string>)[key]) ?? group;
}

/** Título+subtítulo de la vista en la lengua activa (fallback VIEW_TITLES). */
export function viewTitleFor(lang: LangCode, view: ViewId): { title: string; sub: string } {
  const fallback = VIEW_TITLES[view] ?? VIEW_TITLES.inicio;
  if (lang === "it") return fallback;
  const u = uiFor(lang);
  // las vistas IT_ONLY no tienen override → fallback italiano histórico
  return u.titles?.[view] ?? fallback;
}

export type { UiStrings } from "./types";
