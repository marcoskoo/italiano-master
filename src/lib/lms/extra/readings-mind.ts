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
