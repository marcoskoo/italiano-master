/* ── Spaced repetition engine (simplified SM-2) ──────────────────── */

import type { SrsCard } from "./types";

export const DAY = 86400000;

export function newCard(wordId: string): SrsCard {
  return { wordId, ease: 2.5, interval: 0, due: Date.now(), reps: 0, lapses: 0 };
}

/** grade: 0 = otra vez, 1 = difícil, 2 = bien, 3 = fácil */
export function review(card: SrsCard, grade: number): SrsCard {
  const c = { ...card, reps: card.reps + 1, lastGrade: grade };
  if (grade === 0) {
    c.lapses += 1;
    c.ease = Math.max(1.3, c.ease - 0.25);
    c.interval = 0;
    c.due = Date.now() + 6 * 60000; // retry in 6 minutes
    return c;
  }
  const q = [0, 3, 4, 5][grade]; // map to SM-2 quality
  c.ease = Math.min(3.0, Math.max(1.3, c.ease + (0.1 - (5 - q) * 0.08)));
  if (c.reps === 1) c.interval = 1;
  else if (c.reps === 2) c.interval = grade === 1 ? 3 : 6;
  else c.interval = Math.round(c.interval * (grade === 1 ? 1.2 : c.ease));
  c.interval = Math.max(1, Math.min(180, c.interval));
  c.due = Date.now() + c.interval * DAY;
  return c;
}

export function isDue(card: SrsCard): boolean {
  return card.due <= Date.now();
}

export function dueCards(srs: Record<string, SrsCard>): SrsCard[] {
  return Object.values(srs)
    .filter(isDue)
    .sort((a, b) => a.due - b.due);
}

export function masteredCount(srs: Record<string, SrsCard>): number {
  return Object.values(srs).filter((c) => c.interval >= 21 && c.lapses === 0).length;
}

export function learningCount(srs: Record<string, SrsCard>): number {
  return Object.values(srs).filter((c) => c.interval < 21).length;
}

/** Ebbinghaus-style retention for the forgetting-curve simulator */
export function retention(days: number, strength: number, reviews: number[], boost: number): number {
  let r = Math.exp(-days / Math.max(1, strength));
  for (const t of reviews) {
    if (days >= t) {
      // each review multiplies remaining strength and resets decay from that point
      const d = days - t;
      r = Math.max(r * boost, Math.exp(-d / Math.max(1, strength * (1 + 0.6))));
    }
  }
  return Math.max(0, Math.min(1, r));
}
