import type { CbClozeText } from "../cambridge";
import { CLOZE_A1 } from "./readings-cloze-a1";
import { CLOZE_A2 } from "./readings-cloze-a2";
import { CLOZE_B1 } from "./readings-cloze-b1";
import { CLOZE_B2 } from "./readings-cloze-b2";
import { CLOZE_C1 } from "./readings-cloze-c1";
import { CLOZE_C2 } from "./readings-cloze-c2";

/* ═══ v9.12 · Registro central de lecturas cloze por unidad ═════════
   CB_CLOZE[unitId] → 3 lecturas con comprensión inferencial.        */

export const CB_CLOZE: Record<string, CbClozeText[]> = {
  ...CLOZE_A1,
  ...CLOZE_A2,
  ...CLOZE_B1,
  ...CLOZE_B2,
  ...CLOZE_C1,
  ...CLOZE_C2,
};

export const clozeCount = Object.values(CB_CLOZE).reduce((n, arr) => n + arr.length, 0);
