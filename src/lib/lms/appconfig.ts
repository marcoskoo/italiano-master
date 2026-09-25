/* ── AppConfig · configuración global gestionada desde el Panel Admin ──
   Compartida entre servidor (API) y cliente (aplicación de overrides).   */

export interface AppConfig {
  appName: string;
  tagline: string;
  maintenance: { enabled: boolean; message: string };
  features: {
    plans: boolean;        // sistema de planes PRO/PREMIUM/PLATINUM + gating
    tutor: boolean;        // Tutor IA (Marco)
    games: boolean;        // sección Giochi
    certificates: boolean; // certificados descargables
    weeklyPlan: boolean;   // plan semanal premium
    numberLab: boolean;    // Numeri Lab (conversor + práctica)
    verbDrill: boolean;    // Allenamento verbi (drill contrarreloj)
    planner: boolean;      // Piano settimanale (generador de plan)
    analyzer: boolean;     // Analizzatore di frasi
    printables: boolean;   // Schede di studio imprimibles
  };
  defaults: {
    dailyGoalXp: number;
    audioRate: number;
    theme: "light" | "dark";
    textSize: "md" | "lg" | "xl";
  };
  forceDefaults: boolean; // si true, los defaults del admin se imponen en cada cliente
  levels: Record<string, boolean>; // "zero" | "A1"… "C2" → nivel activo o no
  pricing: { pro: number; premium: number; platinum: number; yearlyDiscount: number };
  updatedAt: string;
}

export const DEFAULT_APP_CONFIG: AppConfig = {
  appName: "Italiano Master",
  tagline: "Tu plataforma integral de italiano, desde cero hasta C2",
  maintenance: { enabled: false, message: "Stiamo aggiornando la piattaforma. Torna tra poco!" },
  features: { plans: true, tutor: true, games: true, certificates: true, weeklyPlan: true, numberLab: true, verbDrill: true, planner: true, analyzer: true, printables: true },
  defaults: { dailyGoalXp: 120, audioRate: 0.9, theme: "light", textSize: "md" },
  forceDefaults: false,
  levels: { zero: true, A1: true, A2: true, B1: true, B2: true, C1: true, C2: true },
  pricing: { pro: 7.99, premium: 12.99, platinum: 19.99, yearlyDiscount: 20 },
  updatedAt: "",
};

/* Bundle que viaja del servidor al cliente en cada arranque */
export interface VocabOverrideEntry { word?: import("./types").VocabWord; deleted?: boolean; }
export interface LessonOverrideEntry {
  lesson?: import("./types").Lesson;      // lección custom completa (id custom-*)
  patch?: Partial<import("./types").Lesson>; // parche sobre lección base
  disabled?: boolean;
  deleted?: boolean;
}
export interface AppConfigBundle {
  config: AppConfig;
  vocabOverrides: Record<string, VocabOverrideEntry>;
  lessonOverrides: Record<string, LessonOverrideEntry>;
  customExercises: import("./types").Exercise[];
  version: string; // config.updatedAt → fuerza remount al cambiar
}

export const EMPTY_BUNDLE: AppConfigBundle = {
  config: DEFAULT_APP_CONFIG,
  vocabOverrides: {},
  lessonOverrides: {},
  customExercises: [],
  version: "",
};
