"use client";

/* ── Italiano Master · Global store (Zustand + persist) ──────────── */

import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { CefrLevel, SrsCard, SkillStats, QuizResultEntry, ViewId, NavParams, Topic, WordCategory } from "./types";
import type { PlanId } from "./plans";

export interface Settings {
  theme: "light" | "dark";
  textSize: "md" | "lg" | "xl";
  audioRate: number;      // 0.6 – 1.2
  showSubtitles: boolean; // show ES translations in dialogues by default
  dailyGoalXp: number;    // daily XP goal
  mode: "adulti" | "ragazzi"; // interface mode (adult / youth)
}

export interface StudyDay { date: string; xp: number; }

interface LmsState {
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

  /* plan PRO/PREMIUM/PLATINUM */
  plan: PlanId;
  planBilling: "monthly" | "yearly" | null;
  planSince: string | null;
  tutorCount: number;
  tutorCountDate: string;
  writingCount: number;
  writingCountDate: string;

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
  resetAll: () => void;
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

      plan: "free",
      planBilling: null,
      planSince: null,
      tutorCount: 0,
      tutorCountDate: today(),
      writingCount: 0,
      writingCountDate: today(),

      navigate: (view, params = {}) => set({ view, navParams: params }),

      setUserName: (name) => set({ userName: name.trim() || "Studente" }),

      setLevel: (level) => set({ level, placementDone: true }),

      updateSettings: (partial) => set({ settings: { ...get().settings, ...partial } }),

      addXp: (amount, skill) => {
        const s = get();
        const t = today();
        const studyDays = [...s.studyDays.filter((d) => d.date !== t), { date: t, xp: (s.dailyXpDate === t ? s.dailyXp : 0) + amount }].slice(-30);

        // streak: consecutive days
        let streak = s.streakCount;
        if (s.lastStudyDate !== t) {
          const yest = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
          streak = s.lastStudyDate === yest ? s.streakCount + 1 : 1;
        }

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
        });
      },

      markLessonComplete: (lessonId, unitId) => {
        const s = get();
        set({
          completedLessons: s.completedLessons.includes(lessonId) ? s.completedLessons : [...s.completedLessons, lessonId],
          completedUnits: unitId && !s.completedUnits.includes(unitId) ? [...s.completedUnits, unitId] : s.completedUnits,
        });
      },

      recordQuiz: (entry) => set({ quizHistory: [entry, ...get().quizHistory].slice(0, 60) }),

      recordError: (topic) => {
        const el = { ...get().errorLog };
        el[topic] = { errors: (el[topic]?.errors ?? 0) + 1, correct: el[topic]?.correct ?? 0 };
        set({ errorLog: el });
      },

      recordCorrect: (topic) => {
        const el = { ...get().errorLog };
        el[topic] = { errors: el[topic]?.errors ?? 0, correct: (el[topic]?.correct ?? 0) + 1 };
        set({ errorLog: el });
      },

      upsertSrs: (wordId, card) => set({ srs: { ...get().srs, [wordId]: card } }),

      addCertificate: (cert) => {
        const s = get();
        if (s.certificates.some((c) => c.id === cert.id)) return;
        set({ certificates: [...s.certificates, cert] });
      },

      saveWriting: (entry) => set({ writingHistory: [entry, ...get().writingHistory].slice(0, 20) }),

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
      },

      incrementWriting: () => {
        const s = get();
        const t = today();
        set({ writingCount: s.writingCountDate === t ? s.writingCount + 1 : 1, writingCountDate: t });
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
        }),
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
