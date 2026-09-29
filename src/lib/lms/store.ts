"use client";

/* ── Italiano Master · Global store (Zustand + persist) ──────────── */

import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { CefrLevel, SrsCard, SkillStats, QuizResultEntry, ViewId, NavParams, Topic, WordCategory } from "./types";
import type { PlanId } from "./plans";
import type { AppConfig, AppConfigBundle } from "./appconfig";
import { applyRemoteBundle } from "./overrides";
import { telemetry } from "./remote";
import { generateDailyQuests, QUEST_BONUS_XP, ALL_QUESTS_BONUS_XP, generateMonthlyChallenge, monthKeyFor, monthlyTemplate, MONTHLY_REWARD_COINS, spinWheelPrize, type WheelPrize } from "./quests";
import type { DailyQuest, TrackType, MonthlyChallenge } from "./quests";
import { weekKeyFor } from "./leagues";

export interface Account {
  id: string;
  username: string;
  displayName: string;
  role: "admin" | "student";
}

export interface Settings {
  theme: "light" | "dark";
  textSize: "md" | "lg" | "xl";
  audioRate: number;      // 0.6 – 1.2
  showSubtitles: boolean; // show ES translations in dialogues by default
  dailyGoalXp: number;    // daily XP goal
  mode: "adulti" | "ragazzi"; // interface mode (adult / youth)
}

export interface StudyDay { date: string; xp: number; }

/* Pago de suscripción registrado localmente (v5.0) */
export interface PaymentRecord {
  id: string;
  reference: string;            // IM-2026-A1B2C3
  plan: PlanId;
  billing: "monthly" | "yearly";
  method: "bank" | "paypal" | "card" | "demo";
  amount: number;
  currency: string;
  date: string;                 // ISO
  status: "completato" | "in attesa";
}

/* Texto importado para estudio (v6.0 · Importatore) */
export interface ImportedText {
  id: string;
  title: string;
  text: string;
  date: string;          // ISO
  words: number;
}

/* Seguridad extrema del usuario (v5.0): bloqueo con PIN + privacidad */
export interface UserSecurity {
  pinHash: string | null;       // SHA-256(PIN + salt) — nunca el PIN en claro
  pinSalt: string | null;
  autoLockMin: number;          // 0 = solo manual
  lockOnStart: boolean;         // pedir PIN al abrir la app
  privacyMode: boolean;         // difuminar datos personales en la UI
  failedAttempts: number;       // intentos fallidos de desbloqueo
  lockoutUntil: number;         // timestamp ms de fin del bloqueo
}

export interface LmsState {
  /* profile */
  userName: string;
  level: CefrLevel | null;
  placementDone: boolean;
  xp: number;
  streakCount: number;
  lastStudyDate: string | null; // ISO yyyy-mm-dd
  studyDays: StudyDay[];        // last 30 days xp log
  dailyXp: number;
  dailyXpDate: string;

  /* content progress */
  completedLessons: string[];
  completedUnits: string[];
  quizHistory: QuizResultEntry[];
  certificates: { id: string; level: CefrLevel; date: string; score: number; label: string }[];
  writingHistory: { id: string; title: string; text: string; feedback: string; date: string }[];

  /* SRS */
  srs: Record<string, SrsCard>;

  /* adaptive */
  errorLog: Record<string, { errors: number; correct: number }>; // by topic
  skillStats: SkillStats;

  /* settings + nav */
  settings: Settings;
  view: ViewId;
  navParams: NavParams;
  onboarded: boolean;

  /* cuenta + configuración remota (Panel Admin) */
  account: Account | null;
  remoteConfig: AppConfig | null;
  configVersion: string;

  /* plan PRO/PREMIUM/PLATINUM */
  plan: PlanId;
  planBilling: "monthly" | "yearly" | null;
  planSince: string | null;
  tutorCount: number;
  tutorCountDate: string;
  writingCount: number;
  writingCountDate: string;

  /* pagos + seguridad extrema (v5.0) */
  payments: PaymentRecord[];
  security: UserSecurity;
  locked: boolean;

  /* misiones diarias + logros (v6.0) */
  quests: DailyQuest[];          // 3 misiones del día
  questsDate: string;            // fecha de generación (yyyy-mm-dd)
  questsAllBonus: boolean;       // bonus por completar las 3 ya otorgado
  counters: Record<string, number>; // contadores históricos para logros

  /* textos importados (v6.0) */
  importedTexts: ImportedText[];

  /* lega settimanale + congelamento racha (v8.0) */
  weekXp: number;              // XP ganado en la semana en curso
  weekKey: string;             // lunes (yyyy-mm-dd) de la semana del weekXp
  streakFreezes: number;       // ❄️ disponibles (máx. 2)
  lastFreezeDate: string | null; // fecha del último congelamiento usado

  /* preferiti e cronologia del dizionario (v8.0) */
  dictFavorites: string[];     // ids de palabras favoritas
  dictHistory: string[];       // últimas 12 palabras consultadas

  /* ── gamificación avanzada (v9.0) ── */
  coins: number;               // 🪙 monete
  xpBoostUntil: number;        // timestamp ms: boost 2× XP activo hasta entonces
  lastWheelDate: string | null;// yyyy-mm-dd del último giro de la ruota
  readingsRead: string[];      // ids de letture con quiz completado
  monthKey: string;            // yyyy-mm del contador mensual
  monthCounters: Record<string, number>; // progreso del mes (sfida mensile)
  monthChallengeClaimed: boolean;        // premio mensial ya reclamado
  ownedTitles: string[];       // títulos de perfil comprados
  activeTitle: string | null;  // título mostrado en el perfil

  /* actions */
  navigate: (view: ViewId, params?: NavParams) => void;
  setUserName: (name: string) => void;
  setLevel: (level: CefrLevel) => void;
  updateSettings: (partial: Partial<Settings>) => void;
  addXp: (amount: number, skill?: keyof SkillStats) => void;
  markLessonComplete: (lessonId: string, unitId?: string) => void;
  recordQuiz: (entry: QuizResultEntry) => void;
  recordError: (topic: Topic) => void;
  recordCorrect: (topic: Topic) => void;
  upsertSrs: (wordId: string, card: SrsCard) => void;
  addCertificate: (cert: { id: string; level: CefrLevel; date: string; score: number; label: string }) => void;
  saveWriting: (entry: { id: string; title: string; text: string; feedback: string; date: string }) => void;
  setOnboarded: () => void;
  setPlan: (plan: PlanId, billing: "monthly" | "yearly" | null) => void;
  incrementTutor: () => void;
  incrementWriting: () => void;
  addPayment: (p: Omit<PaymentRecord, "id" | "date">) => void;
  setSecurity: (partial: Partial<UserSecurity>) => void;
  activatePin: (pinHash: string, pinSalt: string) => void;
  clearPin: () => void;
  lockApp: () => void;
  attemptUnlock: (pinHash: string) => boolean;
  trackQuest: (type: TrackType, amount?: number) => void;
  ensureDailyQuests: () => void;
  saveImportedText: (t: { title: string; text: string; words: number }) => void;
  deleteImportedText: (id: string) => void;
  toggleDictFavorite: (wordId: string) => void;
  pushDictHistory: (wordId: string) => void;
  /* v9.0 · gamificación */
  addCoins: (n: number) => void;
  spinWheelDaily: () => { prize: WheelPrize; alreadySpun: false } | { alreadySpun: true };
  buyShopItem: (id: "freeze" | "boost" | "titolo-storico" | "titolo-cicerone" | "titolo-poeta" | "titolo-navigatore") => { ok: boolean; reason?: string };
  markReadingDone: (id: string) => { coinsEarned: number; firstTime: boolean };
  claimMonthlyChallenge: () => { ok: boolean; coins: number; xp: number };
  setActiveTitle: (id: string | null) => void;
  restoreBackup: (data: Record<string, unknown>) => void;
  resetAll: () => void;
  loginAccount: (account: Account, profile?: { displayName?: string; level?: string; plan?: string; xp?: number; streak?: number }) => void;
  adoptServerProgress: (progress: { xp: number; streak: number }) => void;
  logoutAccount: () => void;
  applyRemoteConfig: (bundle: AppConfigBundle) => void;
}

const today = () => new Date().toISOString().slice(0, 10);

const DEFAULT_SKILLS: SkillStats = {
  ascolto: 0, lettura: 0, scrittura: 0, parlato: 0, pronuncia: 0, grammatica: 0, vocabolario: 0,
};

const DEFAULT_SETTINGS: Settings = {
  theme: "light",
  textSize: "md",
  audioRate: 0.9,
  showSubtitles: true,
  dailyGoalXp: 120,
  mode: "adulti",
};

const DEFAULT_SECURITY: UserSecurity = {
  pinHash: null,
  pinSalt: null,
  autoLockMin: 0,
  lockOnStart: false,
  privacyMode: false,
  failedAttempts: 0,
  lockoutUntil: 0,
};

export const useLms = create<LmsState>()(
  persist(
    (set, get) => ({
      userName: "Studente",
      level: null,
      placementDone: false,
      xp: 0,
      streakCount: 0,
      lastStudyDate: null,
      studyDays: [],
      dailyXp: 0,
      dailyXpDate: today(),

      completedLessons: [],
      completedUnits: [],
      quizHistory: [],
      certificates: [],
      writingHistory: [],

      srs: {},
      errorLog: {},
      skillStats: { ...DEFAULT_SKILLS },

      settings: { ...DEFAULT_SETTINGS },
      view: "inicio",
      navParams: {},
      onboarded: false,

      account: null,
      remoteConfig: null,
      configVersion: "",

      plan: "free",
      planBilling: null,
      planSince: null,
      tutorCount: 0,
      tutorCountDate: today(),
      writingCount: 0,
      writingCountDate: today(),

      payments: [],
      security: { ...DEFAULT_SECURITY },
      locked: false,

      quests: generateDailyQuests(today()),
      questsDate: today(),
      questsAllBonus: false,
      counters: {},

      importedTexts: [],

      weekXp: 0,
      weekKey: weekKeyFor(),
      streakFreezes: 0,
      lastFreezeDate: null,
      dictFavorites: [],
      dictHistory: [],

      /* v9.0 · gamificación */
      coins: 0,
      xpBoostUntil: 0,
      lastWheelDate: null,
      readingsRead: [],
      monthKey: monthKeyFor(),
      monthCounters: {},
      monthChallengeClaimed: false,
      ownedTitles: [],
      activeTitle: null,

      navigate: (view, params = {}) => set({ view, navParams: params }),

      setUserName: (name) => set({ userName: name.trim() || "Studente" }),

      setLevel: (level) => {
        set({ level, placementDone: true });
        telemetry("level_set", { level }, get().account?.username);
      },

      updateSettings: (partial) => set({ settings: { ...get().settings, ...partial } }),

      addXp: (amountIn, skill) => {
        const s = get();
        const t = today();
        // boost 2× (v9.0): si hay un boost activo, el XP se duplica
        const amount = Date.now() < s.xpBoostUntil ? amountIn * 2 : amountIn;
        const studyDays = [...s.studyDays.filter((d) => d.date !== t), { date: t, xp: (s.dailyXpDate === t ? s.dailyXp : 0) + amount }].slice(-30);

        // lega settimanale (v8.0): XP de la semana; al cambiar la semana arranca de cero
        const wk = weekKeyFor();
        const weekXp = s.weekKey === wk ? s.weekXp + amount : amount;

        // streak: días consecutivos, con congelamiento ❄️ (v8.0)
        let streak = s.streakCount;
        let streakFreezes = s.streakFreezes;
        let lastFreezeDate = s.lastFreezeDate;
        if (s.lastStudyDate !== t) {
          const yest = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
          if (s.lastStudyDate === yest) {
            streak = s.streakCount + 1;
          } else {
            // hueco de 1+ días sin estudiar: cada ❄️ cubre UN día perdido
            const gapDays = s.lastStudyDate
              ? Math.round((Date.parse(t) - Date.parse(s.lastStudyDate)) / 86400000) - 1
              : 99;
            if (gapDays >= 1 && gapDays <= streakFreezes) {
              streakFreezes -= gapDays;
              lastFreezeDate = t;
              streak = s.streakCount + gapDays + 1; // días congelados + hoy
            } else {
              streak = 1;
            }
          }
        }
        // premio de constancia: cada 7 días de racha → +1 ❄️ (máx. 2)
        if (streak > 0 && streak % 7 === 0 && streakFreezes < 2) streakFreezes += 1;

        const skills = { ...s.skillStats };
        if (skill) skills[skill] = Math.min(100, skills[skill] + Math.round(amount / 4));

        set({
          xp: s.xp + amount,
          dailyXp: s.dailyXpDate === t ? s.dailyXp + amount : amount,
          dailyXpDate: t,
          studyDays,
          streakCount: streak,
          lastStudyDate: t,
          skillStats: skills,
          weekXp,
          weekKey: wk,
          streakFreezes,
          lastFreezeDate,
        });
        // misión diaria de XP (el bonus de misión vuelve a entrar por aquí y termina en profundidad finita)
        get().trackQuest("xp", amount);
      },

      markLessonComplete: (lessonId, unitId) => {
        const s = get();
        set({
          completedLessons: s.completedLessons.includes(lessonId) ? s.completedLessons : [...s.completedLessons, lessonId],
          completedUnits: unitId && !s.completedUnits.includes(unitId) ? [...s.completedUnits, unitId] : s.completedUnits,
        });
        telemetry("lesson_completed", { lessonId, total: s.completedLessons.length + 1 }, s.account?.username);
        get().trackQuest("lesson");
      },

      recordQuiz: (entry) => {
        set({ quizHistory: [entry, ...get().quizHistory].slice(0, 60) });
        telemetry("quiz_completed", { label: entry.label, score: entry.score, total: entry.total }, get().account?.username);
        // misiones: partidas de juego y dictados completados
        if (entry.kind === "juego") get().trackQuest("game");
        if (/dettato/i.test(entry.label)) get().trackQuest("dictation");
      },

      recordError: (topic) => {
        const el = { ...get().errorLog };
        el[topic] = { errors: (el[topic]?.errors ?? 0) + 1, correct: el[topic]?.correct ?? 0 };
        set({ errorLog: el });
      },

      recordCorrect: (topic) => {
        const el = { ...get().errorLog };
        el[topic] = { errors: el[topic]?.errors ?? 0, correct: (el[topic]?.correct ?? 0) + 1 };
        set({ errorLog: el });
        get().trackQuest("correct");
      },

      upsertSrs: (wordId, card) => {
        set({ srs: { ...get().srs, [wordId]: card } });
        get().trackQuest("review");
      },

      addCertificate: (cert) => {
        const s = get();
        if (s.certificates.some((c) => c.id === cert.id)) return;
        set({ certificates: [...s.certificates, cert] });
        telemetry("cert_earned", { level: cert.level, score: cert.score }, s.account?.username);
      },

      saveWriting: (entry) => {
        set({ writingHistory: [entry, ...get().writingHistory].slice(0, 20) });
        get().trackQuest("writing");
      },

      setOnboarded: () => set({ onboarded: true }),

      setPlan: (plan, billing) =>
        set({
          plan,
          planBilling: plan === "free" ? null : billing,
          planSince: plan === "free" ? null : today(),
        }),

      incrementTutor: () => {
        const s = get();
        const t = today();
        set({ tutorCount: s.tutorCountDate === t ? s.tutorCount + 1 : 1, tutorCountDate: t });
        get().trackQuest("tutor");
      },

      incrementWriting: () => {
        const s = get();
        const t = today();
        set({ writingCount: s.writingCountDate === t ? s.writingCount + 1 : 1, writingCountDate: t });
      },

      addPayment: (p) => {
        const record: PaymentRecord = {
          ...p,
          id: `pay-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 6)}`,
          date: new Date().toISOString(),
        };
        set({ payments: [record, ...get().payments].slice(0, 50) });
        telemetry("payment_started", { plan: p.plan, method: p.method, reference: p.reference }, get().account?.username);
      },

      setSecurity: (partial) => set({ security: { ...get().security, ...partial } }),

      activatePin: (pinHash, pinSalt) => {
        set({ security: { ...get().security, pinHash, pinSalt, failedAttempts: 0, lockoutUntil: 0 } });
        telemetry("security_pin_enabled", {}, get().account?.username);
      },

      clearPin: () => {
        set({ security: { ...get().security, pinHash: null, pinSalt: null, failedAttempts: 0, lockoutUntil: 0 }, locked: false });
        telemetry("security_pin_disabled", {}, get().account?.username);
      },

      /* ── Misiones diarias (v6.0) ──
         Registra progreso de misión y contadores de logros. Al completar
         una misión otorga +15 XP (bonus); las 3 completadas → +50 XP extra. */
      ensureDailyQuests: () => {
        const s = get();
        const t = today();
        if (s.questsDate !== t) {
          set({ quests: generateDailyQuests(t), questsDate: t, questsAllBonus: false });
        }
      },

      trackQuest: (type, amount = 1) => {
        get().ensureDailyQuests();
        const s = get();
        const t = today();
        const quests = s.quests;
        let allBonus = s.questsAllBonus;

        // contador histórico (logros)
        const counters = { ...s.counters, [type]: (s.counters[type] ?? 0) + amount };

        // progreso de misión + bonus
        let bonusXp = 0;
        const isQuestType = quests.some((q) => q.type === type);
        const updated = isQuestType
          ? quests.map((q) => {
              if (q.type !== type || q.done) return q;
              const progress = Math.min(q.target, q.progress + amount);
              const done = progress >= q.target;
              if (done) bonusXp += QUEST_BONUS_XP;
              return { ...q, progress, done };
            })
          : quests;

        if (!allBonus && updated.length > 0 && updated.every((q) => q.done)) {
          bonusXp += ALL_QUESTS_BONUS_XP;
          allBonus = true;
        }

        set({ counters, quests: updated, questsDate: t, questsAllBonus: allBonus });

        // monete por misión completada (v9.0): +10 al completar, +25 por las 3
        let coinsEarned = 0;
        if (isQuestType) {
          for (const q of updated) {
            if (q.type === type && q.done && !(s.quests.find((o) => o.id === q.id)?.done)) coinsEarned += 10;
          }
        }
        if (!s.questsAllBonus && allBonus) coinsEarned += 25;
        if (coinsEarned > 0) set({ coins: get().coins + coinsEarned });

        // sfida del mese (v9.0): los contadores del mes se actualizan aquí;
        // al cambiar de mes el contador y el flag de premio se reinician
        const mk = monthKeyFor();
        const monthChanged = s.monthKey !== mk;
        const mc = monthChanged ? {} : { ...s.monthCounters };
        mc[type] = (mc[type] ?? 0) + amount;
        set(monthChanged ? { monthCounters: mc, monthKey: mk, monthChallengeClaimed: false } : { monthCounters: mc });

        // el bonus entra por addXp → también alimenta la misión de XP (recursión finita)
        if (bonusXp > 0) get().addXp(bonusXp);
      },

      /* ── Textos importados (v6.0) ── */
      saveImportedText: (t) => {
        const entry: ImportedText = {
          ...t,
          id: `imp-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 6)}`,
          date: new Date().toISOString(),
        };
        set({ importedTexts: [entry, ...get().importedTexts].slice(0, 8) });
      },

      deleteImportedText: (id) => set({ importedTexts: get().importedTexts.filter((t) => t.id !== id) }),

      /* ── Preferiti e cronologia del dizionario (v8.0) ── */
      toggleDictFavorite: (wordId) => {
        const favs = get().dictFavorites;
        set({ dictFavorites: favs.includes(wordId) ? favs.filter((f) => f !== wordId) : [...favs, wordId] });
      },

      pushDictHistory: (wordId) => {
        const h = get().dictHistory.filter((x) => x !== wordId);
        set({ dictHistory: [wordId, ...h].slice(0, 12) });
      },

      /* ── Gamificación avanzada (v9.0) ── */
      addCoins: (n) => set({ coins: Math.max(0, get().coins + n) }),

      /* Ruota della fortuna: 1 giro al día; premios ponderados */
      spinWheelDaily: () => {
        const s = get();
        const t = today();
        if (s.lastWheelDate === t) return { alreadySpun: true as const };
        const prize = spinWheelPrize();
        const patch: Partial<LmsState> = {
          lastWheelDate: t,
          coins: s.coins + (prize.coins ?? 0),
          xpBoostUntil: prize.boost ? Date.now() + 15 * 60 * 1000 : s.xpBoostUntil,
          streakFreezes: prize.freeze ? Math.min(2, s.streakFreezes + 1) : s.streakFreezes,
          counters: { ...s.counters, spin: (s.counters.spin ?? 0) + 1, wheelCoins: (s.counters.wheelCoins ?? 0) + (prize.coins ?? 0) },
        };
        set(patch);
        if (prize.xp) get().addXp(prize.xp);
        telemetry("wheel_spun", { prize: prize.id, coins: prize.coins ?? 0, xp: prize.xp ?? 0 }, get().account?.username);
        return { prize, alreadySpun: false as const };
      },

      /* Negozio: congelamiento / boost / títulos de perfil */
      buyShopItem: (id) => {
        const s = get();
        const PRICES: Record<typeof id, number> = {
          freeze: 80, boost: 60,
          "titolo-storico": 150, "titolo-cicerone": 200, "titolo-poeta": 200, "titolo-navigatore": 150,
        };
        const price = PRICES[id];
        if (id.startsWith("titolo-") && s.ownedTitles.includes(id)) return { ok: false, reason: "Ya lo tienes" };
        if (s.coins < price) return { ok: false, reason: "Monete insufficienti" };
        const patch: Partial<LmsState> = { coins: s.coins - price };
        if (id === "freeze") {
          if (s.streakFreezes >= 2) return { ok: false, reason: "Máximo 2 congelamientos" };
          patch.streakFreezes = s.streakFreezes + 1;
        } else if (id === "boost") {
          patch.xpBoostUntil = Math.max(Date.now(), s.xpBoostUntil) + 15 * 60 * 1000;
        } else {
          patch.ownedTitles = [...s.ownedTitles, id];
          if (!s.activeTitle) patch.activeTitle = id;
        }
        set(patch);
        telemetry("item_bought", { item: id, price }, s.account?.username);
        return { ok: true };
      },

      /* Lettura completada: +20 monete la primera vez */
      markReadingDone: (id) => {
        const s = get();
        const first = !s.readingsRead.includes(id);
        if (first) {
          set({ readingsRead: [...s.readingsRead, id], coins: s.coins + 20 });
        }
        get().trackQuest("reading");
        telemetry("reading_done", { id, first }, s.account?.username);
        return { coinsEarned: first ? 20 : 0, firstTime: first };
      },

      /* Sfida del mese: reclama 300 monete + XP del template */
      claimMonthlyChallenge: () => {
        const s = get();
        const mk = monthKeyFor();
        const ch = generateMonthlyChallenge(mk); // determinista: mismo mes = misma sfida
        const progress = s.monthKey === mk ? (s.monthCounters[ch.type] ?? 0) : 0;
        if (s.monthChallengeClaimed || progress < ch.target) return { ok: false, coins: 0, xp: 0 };
        const tpl = monthlyTemplate(ch.type);
        set({ coins: s.coins + MONTHLY_REWARD_COINS, monthChallengeClaimed: true });
        get().addXp(tpl.xpReward);
        telemetry("monthly_challenge_claimed", { month: mk, type: ch.type }, s.account?.username);
        return { ok: true, coins: MONTHLY_REWARD_COINS, xp: tpl.xpReward };
      },

      setActiveTitle: (id) => set({ activeTitle: id }),

      /* ── Backup e ripristino (v8.0) ──
         Restaura SOLO progreso: nunca cuenta, seguridad, plan ni pagos
         (un archivo manipulado no puede escalar privilegios).          */
      restoreBackup: (data) => {
        const s = get();
        const num = (v: unknown, fb: number) => (typeof v === "number" && Number.isFinite(v) ? v : fb);
        const str = (v: unknown, fb: string | null) => (typeof v === "string" && v ? v : fb);
        const arr = <T,>(v: unknown): T[] => (Array.isArray(v) ? (v as T[]) : []);
        const rec = (v: unknown): Record<string, unknown> =>
          v && typeof v === "object" && !Array.isArray(v) ? (v as Record<string, unknown>) : {};
        set({
          userName: (str(data.userName, null) ?? s.userName).trim() || "Studente",
          level: (str(data.level, null) ?? s.level) as CefrLevel | null,
          xp: num(data.xp, s.xp),
          streakCount: num(data.streakCount, s.streakCount),
          lastStudyDate: str(data.lastStudyDate, s.lastStudyDate),
          studyDays: arr<StudyDay>(data.studyDays),
          dailyXp: num(data.dailyXp, s.dailyXp),
          dailyXpDate: str(data.dailyXpDate, null) ?? today(),
          weekXp: num(data.weekXp, s.weekXp),
          weekKey: str(data.weekKey, null) ?? s.weekKey,
          streakFreezes: Math.min(2, Math.max(0, num(data.streakFreezes, s.streakFreezes))),
          lastFreezeDate: str(data.lastFreezeDate, s.lastFreezeDate),
          completedLessons: arr<string>(data.completedLessons),
          completedUnits: arr<string>(data.completedUnits),
          quizHistory: arr<QuizResultEntry>(data.quizHistory).slice(0, 60),
          certificates: arr<LmsState["certificates"][number]>(data.certificates),
          writingHistory: arr<LmsState["writingHistory"][number]>(data.writingHistory).slice(0, 20),
          srs: rec(data.srs) as Record<string, SrsCard>,
          errorLog: rec(data.errorLog) as LmsState["errorLog"],
          skillStats: { ...DEFAULT_SKILLS, ...rec(data.skillStats) } as SkillStats,
          counters: rec(data.counters) as Record<string, number>,
          importedTexts: arr<ImportedText>(data.importedTexts).slice(0, 8),
          dictFavorites: arr<string>(data.dictFavorites),
          dictHistory: arr<string>(data.dictHistory).slice(0, 12),
          coins: Math.max(0, num(data.coins, s.coins)),
          xpBoostUntil: num(data.xpBoostUntil, 0),
          lastWheelDate: str(data.lastWheelDate, null),
          readingsRead: arr<string>(data.readingsRead),
          monthKey: str(data.monthKey, null) ?? monthKeyFor(),
          monthCounters: rec(data.monthCounters) as Record<string, number>,
          monthChallengeClaimed: data.monthChallengeClaimed === true,
          ownedTitles: arr<string>(data.ownedTitles),
          activeTitle: str(data.activeTitle, null),
        });
        telemetry("backup_restored", { xp: num(data.xp, 0) }, s.account?.username);
      },

      lockApp: () => {
        if (!get().security.pinHash) return; // sin PIN no hay bloqueo posible
        set({ locked: true });
        telemetry("app_locked", {}, get().account?.username);
      },

      attemptUnlock: (pinHash) => {
        const s = get();
        // bloqueo temporal tras 5 fallos: 30 s adicionales por intento extra
        if (Date.now() < s.security.lockoutUntil) return false;
        if (s.security.pinHash && pinHash === s.security.pinHash) {
          set({ locked: false, security: { ...s.security, failedAttempts: 0, lockoutUntil: 0 } });
          telemetry("app_unlocked", {}, s.account?.username);
          return true;
        }
        const failed = s.security.failedAttempts + 1;
        const locked = failed >= 5;
        set({
          security: {
            ...s.security,
            failedAttempts: failed,
            lockoutUntil: locked ? Date.now() + Math.min(300, 30 * (failed - 4)) * 1000 : 0,
          },
        });
        if (locked) telemetry("security_lock", { attempts: failed }, s.account?.username);
        return false;
      },

      resetAll: () =>
        set({
          userName: "Studente", level: null, placementDone: false, xp: 0, streakCount: 0,
          lastStudyDate: null, studyDays: [], dailyXp: 0, dailyXpDate: today(),
          completedLessons: [], completedUnits: [], quizHistory: [], certificates: [],
          writingHistory: [], srs: {}, errorLog: {}, skillStats: { ...DEFAULT_SKILLS },
          view: "inicio", navParams: {},
          plan: "free", planBilling: null, planSince: null,
          tutorCount: 0, tutorCountDate: today(), writingCount: 0, writingCountDate: today(),
          quests: generateDailyQuests(today()), questsDate: today(), questsAllBonus: false, counters: {},
          importedTexts: [],
          weekXp: 0, weekKey: weekKeyFor(), streakFreezes: 0, lastFreezeDate: null,
          dictFavorites: [], dictHistory: [],
          coins: 0, xpBoostUntil: 0, lastWheelDate: null, readingsRead: [],
          monthKey: monthKeyFor(), monthCounters: {}, monthChallengeClaimed: false,
          ownedTitles: [], activeTitle: null,
        }),

      loginAccount: (account, profile) => {
        const s = get();
        const patch: Partial<LmsState> = { account };
        if (profile?.displayName) patch.userName = profile.displayName;
        if (profile?.plan && profile.plan !== "free") {
          patch.plan = profile.plan as PlanId;
          patch.planBilling = "monthly";
          patch.planSince = today();
        }
        if (profile?.level) {
          patch.level = profile.level as CefrLevel;
          patch.placementDone = true;
        }
        // continuidad: si el servidor tiene más progreso que este dispositivo, se adopta
        const serverXp = typeof profile?.xp === "number" ? profile.xp : -1;
        if (serverXp > s.xp) {
          patch.xp = serverXp;
          patch.dailyXp = s.dailyXpDate === today() ? s.dailyXp : 0;
        }
        const serverStreak = typeof profile?.streak === "number" ? profile.streak : -1;
        if (serverStreak > s.streakCount) patch.streakCount = serverStreak;
        set(patch);
        telemetry("login", { role: account.role }, account.username);
      },

      logoutAccount: () => set({ account: null }),

      adoptServerProgress: (progress) => {
        const s = get();
        const patch: Partial<LmsState> = {};
        if (progress.xp > s.xp) patch.xp = progress.xp;
        if (progress.streak > s.streakCount) patch.streakCount = progress.streak;
        if (Object.keys(patch).length > 0) set(patch);
      },

      applyRemoteConfig: (bundle) => {
        applyRemoteBundle(bundle);
        const patch: Partial<LmsState> = {
          remoteConfig: bundle.config,
          configVersion: bundle.version,
        };
        // el admin puede forzar los defaults (tema, tamaño, meta, audio)
        if (bundle.config.forceDefaults) {
          patch.settings = {
            ...get().settings,
            theme: bundle.config.defaults.theme,
            textSize: bundle.config.defaults.textSize,
            audioRate: bundle.config.defaults.audioRate,
            dailyGoalXp: bundle.config.defaults.dailyGoalXp,
          };
        }
        set(patch);
      },
    }),
    { name: "italiano-master-v1" }
  )
);

/* ── derived helpers ──────────────────────────────────────────────── */

export const XP_RANKS = [
  { min: 0, name: "Principiante", emoji: "🌱" },
  { min: 200, name: "Apprendista", emoji: "📗" },
  { min: 500, name: "Esploratore", emoji: "🧭" },
  { min: 1000, name: "Cavaliere", emoji: " ⚜️" },
  { min: 2000, name: "Maestro", emoji: "🏅" },
  { min: 4000, name: "Gran Maestro", emoji: "👑" },
];

export function rankFor(xp: number) {
  let r = XP_RANKS[0];
  for (const rank of XP_RANKS) if (xp >= rank.min) r = rank;
  return r;
}

export function nextRank(xp: number) {
  return XP_RANKS.find((r) => r.min > xp) ?? null;
}

export const BADGES: { id: string; name: string; desc: string; emoji: string; test: (s: LmsState, vocabCount: number) => boolean }[] = [
  { id: "primo-passo", name: "Primo passo", desc: "Completa tu primera lección", emoji: "👣", test: (s) => s.completedLessons.length >= 1 },
  { id: "cento-xp", name: "Cento XP", desc: "Alcanza 100 XP", emoji: "💯", test: (s) => s.xp >= 100 },
  { id: "quiz-master", name: "Quiz master", desc: "Supera 5 pruebas", emoji: "🎯", test: (s) => s.quizHistory.filter((q) => q.score / Math.max(1, q.total) >= 0.7).length >= 5 },
  { id: "parole-25", name: "Vocabolista", desc: "25 palabras en repaso", emoji: "📖", test: (s) => Object.keys(s.srs).length >= 25 },
  { id: "parole-100", name: "Dizionario vivente", desc: "100 palabras en repaso", emoji: "📚", test: (s) => Object.keys(s.srs).length >= 100 },
  { id: "settimana", name: "Settimana di fuoco", desc: "Racha de 7 días", emoji: "🔥", test: (s) => s.streakCount >= 7 },
  { id: "esame", name: "Diplomato", desc: "Aprueba un examen de nivel", emoji: "🎓", test: (s) => s.certificates.length >= 1 },
  { id: "corsaro", name: "Corsaro", desc: "10 lecciones completadas", emoji: "⛵", test: (s) => s.completedLessons.length >= 10 },
  { id: "mille", name: "Mille XP", desc: "Alcanza 1000 XP", emoji: "🚀", test: (s) => s.xp >= 1000 },
  { id: "perfetto", name: "Perfetto!", desc: "Un examen sin fallos", emoji: "✨", test: (s) => s.certificates.some((c) => c.score === 100) },
];
