/* ── AppConfig · configuración global gestionada desde el Panel Admin ──
   Compartida entre servidor (API) y cliente (aplicación de overrides).   */

export interface BillingConfig {
  enabled: boolean;              // métodos de pago activos en el checkout
  currency: "EUR" | "USD" | "PEN" | "MXN" | "ARS" | "COP" | "CLP";
  bank: {
    enabled: boolean;
    holder: string;              // titular de la cuenta
    bankName: string;            // entidad bancaria
    iban: string;                // IBAN (validado con checksum mod-97)
    bic: string;                 // SWIFT/BIC
  };
  paypal: { enabled: boolean; email: string };
  card: { enabled: boolean; provider: string }; // pasarela (demo)
  vatRate: number;               // IVA % para las facturas
  invoicePrefix: string;         // prefijo de referencia de pago (IM-2025-…)
  instructions: string;          // nota visible en el checkout
}

export interface SecurityConfig {
  adminSessionMinutes: number;   // TTL del token admin (15 min – 30 días)
  loginMaxAttempts: number;      // intentos de login antes del bloqueo
  loginLockMinutes: number;      // minutos de bloqueo tras agotar intentos
  telemetryEnabled: boolean;     // permitir telemetría anónima
  auditLog: boolean;             // registrar eventos de seguridad en la actividad
}

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
    printables: boolean;   // Schede di estudio imprimibles
    proverbi: boolean;     // Proverbi e modi di dire (plugin v4.0)
    falsiAmici: boolean;   // Falsi amici IT–ES (plugin v4.0)
    dettato: boolean;      // Dettato lab · dictado por voz TTS (plugin v4.0)
    parolaNascosta: boolean; // Parola nascosta · wordle IT (plugin v5.0)
    preposizioni: boolean; // Preposizioni lab · cloze (plugin v5.0)
    pomodoro: boolean;     // Pomodoro studio (plugin v5.0)
    muse: boolean;         // Muse · generador de frases (plugin v5.0)
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
  billing: BillingConfig;      // cuenta bancaria y métodos de pago (v5.0)
  security: SecurityConfig;    // configuración de seguridad extrema (v5.0)
  updatedAt: string;
}

export const DEFAULT_APP_CONFIG: AppConfig = {
  appName: "Italiano Master",
  tagline: "Tu plataforma integral de italiano, desde cero hasta C2",
  maintenance: { enabled: false, message: "Stiamo aggiornando la piattaforma. Torna tra poco!" },
  features: { plans: true, tutor: true, games: true, certificates: true, weeklyPlan: true, numberLab: true, verbDrill: true, planner: true, analyzer: true, printables: true, proverbi: true, falsiAmici: true, dettato: true, parolaNascosta: true, preposizioni: true, pomodoro: true, muse: true },
  defaults: { dailyGoalXp: 120, audioRate: 0.9, theme: "light", textSize: "md" },
  forceDefaults: false,
  levels: { zero: true, A1: true, A2: true, B1: true, B2: true, C1: true, C2: true },
  pricing: { pro: 7.99, premium: 12.99, platinum: 19.99, yearlyDiscount: 20 },
  billing: {
    enabled: true,
    currency: "EUR",
    bank: {
      enabled: true,
      holder: "Italiano Master S.r.l.",
      bankName: "Intesa Sanpaolo",
      iban: "IT60X0542811101000000123456",
      bic: "BCITITMM",
    },
    paypal: { enabled: true, email: "pagamenti@italianomaster.it" },
    card: { enabled: true, provider: "Stripe (demo)" },
    vatRate: 22,
    invoicePrefix: "IM",
    instructions: "Indica la referencia de pago en el concepto de la transferencia. La activación se completa al recibir el comprobante.",
  },
  security: {
    adminSessionMinutes: 720, // 12 h
    loginMaxAttempts: 5,
    loginLockMinutes: 10,
    telemetryEnabled: true,
    auditLog: true,
  },
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
