/* ── Adaptive engine: weaknesses → recommendations ────────────────── */

import type { Topic } from "./types";

export interface TopicStat { topic: Topic; errors: number; correct: number; accuracy: number }

export function topicStats(errorLog: Record<string, { errors: number; correct: number }>): TopicStat[] {
  return Object.entries(errorLog)
    .map(([topic, v]) => ({
      topic: topic as Topic,
      errors: v.errors,
      correct: v.correct,
      accuracy: (v.correct + v.errors) === 0 ? 1 : v.correct / (v.correct + v.errors),
    }))
    .sort((a, b) => a.accuracy - b.accuracy);
}

export function weakTopics(errorLog: Record<string, { errors: number; correct: number }>, max = 3): TopicStat[] {
  return topicStats(errorLog)
    .filter((t) => t.errors >= 2 && t.accuracy < 0.7)
    .slice(0, max);
}

export const TOPIC_LABELS: Partial<Record<Topic, string>> = {
  vocabolario: "Vocabulario",
  articoli: "Artículos",
  verbi: "Verbos",
  presente: "Presente indicativo",
  passato: "Pasados (passato prossimo / imperfetto)",
  futuro: "Futuro",
  condizionale: "Condicional",
  congiuntivo: "Subjuntivo",
  imperativo: "Imperativo",
  pronomi: "Pronombres",
  preposizioni: "Preposiciones",
  plurale: "Plurales",
  genere: "Género",
  aggettivi: "Adjetivos",
  negazione: "Negación",
  domande: "Preguntas",
  numeri: "Números y hora",
  ascolto: "Comprensión auditiva",
  cultura: "Cultura",
  situazioni: "Situaciones reales",
  grammatica: "Gramática",
};

/** Deterministic daily seed for "palabra del día" / misiones */
export function daySeed(offset = 0): number {
  const d = new Date();
  const s = d.getFullYear() * 372 + (d.getMonth() + 1) * 31 + d.getDate() + offset;
  return (s * 2654435761) % 4294967296;
}

export function pickDaily<T>(arr: T[], offset = 0): T | undefined {
  if (arr.length === 0) return undefined;
  return arr[daySeed(offset) % arr.length];
}
