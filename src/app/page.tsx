"use client";

import { useEffect, useSyncExternalStore } from "react";
import { AppShell } from "@/components/lms/shell";
import { useLms } from "@/lib/lms/store";
import { initVoices } from "@/lib/lms/tts";
import { HomeView } from "@/components/lms/views/home";
import { ProgressView } from "@/components/lms/views/progress";
import { LevelTestView } from "@/components/lms/views/leveltest";
import { CoursesView } from "@/components/lms/views/courses";
import { GrammarView } from "@/components/lms/views/grammar";
import { VocabularyView } from "@/components/lms/views/vocabulary";
import { ListeningView, ReadingView, WritingView, ConversationView } from "@/components/lms/views/skills";
import { PronunciationView } from "@/components/lms/views/pronunciation";
import { ConjugatorView, DictionaryView } from "@/components/lms/views/tools";
import { SituationsView } from "@/components/lms/views/situations";
import { CultureView } from "@/components/lms/views/culture";
import { TutorView } from "@/components/lms/views/tutor";
import { GamesView } from "@/components/lms/views/games";
import { ReviewView } from "@/components/lms/views/review";
import { ExamsView, CertificatesView, SettingsView } from "@/components/lms/views/exams";
import { PricingView } from "@/components/lms/views/pricing";

/* ── Italiano Master · LMS completo de italiano (SPA) ─────────────── */

const emptySubscribe = () => () => {};

export default function Home() {
  const view = useLms((s) => s.view);
  // mounted sin setState-in-effect: snapshot del servidor = false, del cliente = true
  const mounted = useSyncExternalStore(emptySubscribe, () => true, () => false);

  useEffect(() => {
    initVoices();
  }, []);

  if (!mounted) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-crema">
        <div className="text-center">
          <p className="font-display text-4xl font-semibold text-inchiostro">
            Italiano <span className="italic text-verde-scuro">Master</span>
          </p>
          <p className="mt-3 font-mono text-xs uppercase tracking-[0.2em] text-inchiostro/40">caricamento…</p>
          <div className="mx-auto mt-6 h-1.5 w-40 overflow-hidden rounded-full bg-inchiostro/10">
            <div className="h-full w-1/2 animate-pulse rounded-full bg-verde" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <AppShell>
      {view === "inicio" && <HomeView />}
      {view === "progreso" && <ProgressView />}
      {view === "test" && <LevelTestView />}
      {view === "cursos" && <CoursesView />}
      {view === "grammatica" && <GrammarView />}
      {view === "vocabolario" && <VocabularyView />}
      {view === "ascolto" && <ListeningView />}
      {view === "lettura" && <ReadingView />}
      {view === "scrittura" && <WritingView />}
      {view === "conversazione" && <ConversationView />}
      {view === "pronuncia" && <PronunciationView />}
      {view === "coniugatore" && <ConjugatorView />}
      {view === "dizionario" && <DictionaryView />}
      {view === "situazioni" && <SituationsView />}
      {view === "cultura" && <CultureView />}
      {view === "tutor" && <TutorView />}
      {view === "giochi" && <GamesView />}
      {view === "repaso" && <ReviewView />}
      {view === "esami" && <ExamsView />}
      {view === "certificati" && <CertificatesView />}
      {view === "impostazioni" && <SettingsView />}
      {view === "piani" && <PricingView />}
    </AppShell>
  );
}
