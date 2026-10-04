import { MIND_A1 } from "./readings-mind-a1";
import { MIND_A2 } from "./readings-mind-a2";
import { MIND_B1 } from "./readings-mind-b1";
import { MIND_B2 } from "./readings-mind-b2";
import { MIND_C1 } from "./readings-mind-c1";
import { MIND_C2 } from "./readings-mind-c2";
import type { MindReading } from "../cambridge-mind";

/* v9.13 · Combinador: unitId → 3 letture tematiche (meditazione/spiritualità/
   qui e ora/relax) con las 7 estrategias de comprensión. */
export const MIND_READINGS: Record<string, MindReading[]> = {
  ...MIND_A1, ...MIND_A2, ...MIND_B1, ...MIND_B2, ...MIND_C1, ...MIND_C2,
};

/* ── v9.14 · Biblioteca "Meditazione e consapevolezza" ──────────────
   Las mismas 198 letture tematiche, aplanadas y navegables desde la
   sección Letture con filtros por tema y nivel MCER.                 */
export interface MindLibraryEntry {
  unitId: string;          // "cu-a1-01"
  reading: MindReading;
}

export const MIND_LIBRARY: MindLibraryEntry[] = Object.entries(MIND_READINGS)
  .flatMap(([unitId, rs]) => rs.map((reading) => ({ unitId, reading })))
  .sort((a, b) => a.unitId.localeCompare(b.unitId) || a.reading.id.localeCompare(b.reading.id));

/** Nivel MCER derivado del id de lectura ("md-a1-01-1" → "A1"). */
export function mindLevel(id: string): "A1" | "A2" | "B1" | "B2" | "C1" | "C2" {
  const m = id.match(/^md-([a-c][12])-/);
  if (!m) return "A1";
  return m[1].toUpperCase() as "A1" | "A2" | "B1" | "B2" | "C1" | "C2";
}

export const MIND_LIBRARY_BY_ID: Record<string, MindLibraryEntry> = Object.fromEntries(
  MIND_LIBRARY.map((e) => [e.reading.id, e])
);
