import { VOCAB } from "../vocabulary";
import type { CefrLevel, VocabWord } from "../types";
import { CEFR_LEVELS } from "../types";

/* ── Capa de presentación del Dizionario didattico v2.0 ──────────────
   Se apoya en VOCAB (ya poblado con los packs) sin mutarlo:
   · deduplicación de lemas para la vista diccionario
   · estadísticas por nivel MCER
   · índice de falsos amigos IT–ES
   Este módulo NO se importa desde vocabulary.ts (evita ciclos). */

/* Metas de vocabulario por nivel MCER (Consejo de Europa / indicadores
   comunes para italiano L2 — referencia orientativa de cobertura). */
export const CEFR_VOCAB_TARGETS: Record<CefrLevel, number> = {
  A1: 500, A2: 1000, B1: 2000, B2: 4000, C1: 8000, C2: 16000,
};

export const FREQ_LABELS: Record<number, { label: string; desc: string }> = {
  1: { label: "moltissimo", desc: "Frecuencia muy alta (top 1.000)" },
  2: { label: "molto", desc: "Frecuencia alta (1.000–2.000)" },
  3: { label: "media", desc: "Frecuencia media (2.000–3.500)" },
  4: { label: "bassa", desc: "Frecuencia baja (3.500–6.000)" },
  5: { label: "rara", desc: "Frecuencia rara (6.000+)" },
};

export const REGISTER_LABELS: Record<string, string> = {
  informale: "informal",
  neutro: "neutro",
  formale: "formal",
  colloquiale: "coloquial",
  letterario: "literario",
  tecnico: "técnico",
};

/* Normaliza un lema: quita acentos y artículos iniciales para agrupar
   duplicados (il sole / sole, pesce / pesce). */
function normalizeLemma(s: string): string {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/^(il|lo|la|l'|i|gli|le|un|uno|una|un')\s+/i, "")
    .replace(/['’\s]/g, "")
    .trim();
}

function richness(w: VocabWord): number {
  let r = 0;
  if (w.ipa) r += 2;
  if (w.freq) r += 1;
  if (w.collocations) r += 2;
  if (w.note) r += 2;
  if (w.gender) r += 1;
  if (w.plural) r += 1;
  if (w.syn?.length) r += 1;
  if (w.ant?.length) r += 1;
  if (w.related?.length) r += 1;
  if (w.register) r += 1;
  return r;
}

/* Entradas deduplicadas para la vista diccionario (VOCAB queda intacto
   para SRS, flashcards y overrides del admin). */
function buildDictionary(): VocabWord[] {
  const byLemma = new Map<string, VocabWord>();
  for (const w of VOCAB) {
    const key = normalizeLemma(w.it);
    const prev = byLemma.get(key);
    if (!prev) {
      byLemma.set(key, w);
      continue;
    }
    // mismo lema: prefiere la entrada más rica; a igualdad, la de nivel más bajo
    const rw = richness(w);
    const rp = richness(prev);
    if (rw > rp || (rw === rp && CEFR_LEVELS.indexOf(w.level) < CEFR_LEVELS.indexOf(prev.level))) {
      byLemma.set(key, w);
    }
  }
  return Array.from(byLemma.values());
}

export const DICTIONARY: VocabWord[] = buildDictionary();

/* Estadísticas por nivel MCER (sobre el diccionario deduplicado). */
export interface DictStats {
  total: number;
  byLevel: Record<CefrLevel, number>;
  withIpa: number;
  withFreq: number;
  withCollocations: number;
  withNotes: number;
  falseFriends: number;
  byFreq: Record<number, number>;
}

export const DICT_STATS: DictStats = (() => {
  const byLevel = { A1: 0, A2: 0, B1: 0, B2: 0, C1: 0, C2: 0 } as Record<CefrLevel, number>;
  const byFreq: Record<number, number> = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
  let withIpa = 0, withFreq = 0, withCollocations = 0, withNotes = 0, falseFriends = 0;
  for (const w of DICTIONARY) {
    byLevel[w.level]++;
    if (w.ipa) withIpa++;
    if (w.freq) { withFreq++; byFreq[w.freq]++; }
    if (w.collocations?.length) withCollocations++;
    if (w.note) withNotes++;
    if (w.ff) falseFriends++;
  }
  return {
    total: DICTIONARY.length, byLevel, withIpa, withFreq, withCollocations, withNotes, falseFriends, byFreq,
  };
})();

/* Cobertura acumulada MCER: A1+A2+B1… contra las metas orientativas. */
export function cefrCoverage(level: CefrLevel): number {
  const idx = CEFR_LEVELS.indexOf(level);
  const cumulative = CEFR_LEVELS.slice(0, idx + 1).reduce((acc, lv) => acc + DICT_STATS.byLevel[lv], 0);
  return Math.min(100, Math.round((cumulative / CEFR_VOCAB_TARGETS[level]) * 100));
}

/* Índice de falsos amigos para hispanohablantes. */
export const FALSI_AMICI: VocabWord[] = DICTIONARY.filter((w) => w.ff);

/* Búsqueda lexicográfica: insensible a acentos, incluye notas,
   colocaciones, sinónimos y formas alternativas. */
export function searchDictionary(query: string): VocabWord[] {
  const q = query
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
  if (!q) return [];
  const norm = (s: string) =>
    s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  return DICTIONARY.filter((w) => {
    if (norm(w.it).includes(q) || norm(w.es).includes(q)) return true;
    if (norm(w.example.it).includes(q)) return true;
    if (w.ipa && norm(w.ipa).includes(q)) return true;
    if (w.note && norm(w.note).includes(q)) return true;
    if (w.collocations?.some((c) => norm(c).includes(q))) return true;
    if (w.syn?.some((s) => norm(s).includes(q))) return true;
    if (w.ant?.some((s) => norm(s).includes(q))) return true;
    if (w.alt?.some((s) => norm(s).includes(q))) return true;
    return false;
  });
}

/* Palabra del día (determinista por fecha) — enriquece la de home.tsx. */
export function wordOfDay(): VocabWord {
  const today = new Date();
  const seed = Number(`${today.getFullYear()}${String(today.getMonth() + 1).padStart(2, "0")}${String(today.getDate()).padStart(2, "0")}`);
  const pool = DICTIONARY.filter((w) => w.freq === 1 || w.freq === 2);
  return pool[seed % pool.length] ?? DICTIONARY[0];
}
