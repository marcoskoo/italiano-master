import { ArrowRight, Ear, GraduationCap, LineChart, Languages, ListChecks } from "lucide-react";
import { MorphingHero } from "@/components/italian/morphing-hero";
import { VowelLab } from "@/components/italian/vowel-lab";
import { IntonationStudio } from "@/components/italian/intonation-studio";
import { QuizSection } from "@/components/italian/quiz-section";
import { StepSolutions } from "@/components/italian/step-solutions";

const NAV = [
  { href: "#suoni", label: "Suoni", en: "sounds" },
  { href: "#intonazione", label: "Intonazione", en: "melody" },
  { href: "#quiz", label: "Quiz", en: "quiz" },
  { href: "#grammatica", label: "Grammatica", en: "grammar" },
];

function SectionHeading({
  num,
  it,
  en,
  desc,
  icon: Icon,
}: {
  num: string;
  it: string;
  en: string;
  desc: string;
  icon: typeof Ear;
}) {
  return (
    <div className="mb-8 max-w-2xl sm:mb-10">
      <div className="flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-inchiostro text-crema">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </span>
        <p className="font-mono text-sm font-bold tracking-widest text-stone-400">
          {num} · {en}
        </p>
      </div>
      <h2 className="mt-4 font-display text-4xl leading-tight text-inchiostro sm:text-5xl">
        {it}
      </h2>
      <p className="mt-3 text-base leading-relaxed text-stone-500 sm:text-lg">{desc}</p>
    </div>
  );
}

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-crema font-sans text-inchiostro">
      {/* ── Header ─────────────────────────────────────────────── */}
      <header className="sticky top-0 z-50 border-b border-inchiostro/8 bg-crema/85 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
          <a href="#top" className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-verde via-oro to-rosso p-[1.5px]">
              <span className="flex h-full w-full items-center justify-center rounded-[10px] bg-crema">
                <span className="font-display text-lg font-bold italic text-verde-scuro">L</span>
              </span>
            </span>
            <span className="font-display text-xl font-semibold tracking-tight">
              Lingua <span className="italic text-verde-scuro">Viva</span>
            </span>
          </a>
          <nav className="hidden items-center gap-1 md:flex" aria-label="Sezioni">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="group rounded-xl px-3.5 py-2 text-sm font-semibold text-stone-600 transition-colors hover:bg-verde-tenue hover:text-verde-scuro"
              >
                {n.label}
                <span className="ml-1.5 font-mono text-[10px] uppercase text-stone-400 transition-colors group-hover:text-verde/70">
                  {n.en}
                </span>
              </a>
            ))}
          </nav>
          <a
            href="#quiz"
            className="inline-flex min-h-11 items-center gap-2 rounded-2xl bg-inchiostro px-4 py-2.5 text-sm font-semibold text-crema transition-all hover:scale-[1.03] hover:bg-verde-scuro active:scale-95"
          >
            fai il quiz
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </header>

      <main id="top" className="flex-1">
        {/* ── Hero ──────────────────────────────────────────────── */}
        <section className="relative overflow-hidden">
          <div aria-hidden="true" className="pointer-events-none absolute -left-32 top-10 h-80 w-80 rounded-full bg-verde/10 blur-3xl" />
          <div aria-hidden="true" className="pointer-events-none absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-rosso/8 blur-3xl" />
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:gap-8 lg:py-24">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-verde/30 bg-verde-tenue px-4 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-verde-scuro">
                <Languages className="h-3.5 w-3.5" aria-hidden="true" />
                corso interattivo d'italiano
              </p>
              <h1 className="mt-6 font-display text-5xl font-semibold leading-[1.05] tracking-tight text-inchiostro sm:text-6xl lg:text-7xl">
                Parla italiano.
                <br />
                <span className="italic text-verde-scuro">Vivi italiano.</span>
              </h1>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-stone-600">
                A playground of living language — sculpt vowels with your cursor, bend the
                melody of real sentences with sliders, and let grammar unfold one honest step
                at a time. No drills. Just <span className="font-display italic text-inchiostro">la bella lingua</span>.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="#suoni"
                  className="inline-flex min-h-12 items-center gap-2 rounded-2xl bg-verde px-6 py-3 font-semibold text-white shadow-lg shadow-verde/25 transition-all hover:scale-[1.03] hover:bg-verde-scuro active:scale-95"
                >
                  esplora i suoni
                  <Ear className="h-4 w-4" aria-hidden="true" />
                </a>
                <a
                  href="#grammatica"
                  className="inline-flex min-h-12 items-center gap-2 rounded-2xl border-2 border-inchiostro/15 bg-white/60 px-6 py-3 font-semibold text-inchiostro transition-all hover:border-inchiostro/40 active:scale-95"
                >
                  grammatica passo a passo
                </a>
              </div>
              <dl className="mt-10 flex flex-wrap gap-x-8 gap-y-3">
                {[
                  ["7", "vocali pure · pure vowels"],
                  ["3", "melodie · intonation moods"],
                  ["11", "prove · live challenges"],
                ].map(([n, label]) => (
                  <div key={label} className="flex items-baseline gap-2">
                    <dt className="sr-only">{label}</dt>
                    <dd className="font-display text-3xl font-bold text-verde-scuro">{n}</dd>
                    <dd className="text-xs font-medium uppercase tracking-wide text-stone-400">{label}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <MorphingHero />
          </div>
        </section>

        {/* ── 01 · Vowel Lab ────────────────────────────────────── */}
        <section id="suoni" className="scroll-mt-20 border-t border-inchiostro/8">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
            <SectionHeading
              num="01"
              it="Il laboratorio dei suoni"
              en="the vowel lab"
              desc="Italian has just seven pure vowels — they are the skeleton of the accent. Drag the green dot to feel where your tongue sits, and watch the readouts react in real time: height, backness, even estimated formants."
              icon={Ear}
            />
            <VowelLab />
          </div>
        </section>

        {/* ── 02 · Intonation Studio ────────────────────────────── */}
        <section id="intonazione" className="scroll-mt-20 border-t border-inchiostro/8 bg-crema-scura/50">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
            <SectionHeading
              num="02"
              it="Studio dell'intonazione"
              en="melody you can slide"
              desc="Italian isn't flat — it sings. Pull the sliders to reshape the pitch and loudness of real sentences, watch both curves redraw instantly, then listen to the melody you built."
              icon={LineChart}
            />
            <IntonationStudio />
          </div>
        </section>

        {/* ── 03 · Quiz ─────────────────────────────────────────── */}
        <section id="quiz" className="scroll-mt-20 border-t border-inchiostro/8">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
            <SectionHeading
              num="03"
              it="Quiz lampo"
              en="the lightning quiz"
              desc="Eight quick challenges on words, articles and verbs. Right answers pulse green, mistakes pulse red — and every reveal leaves you a little souvenir of why."
              icon={ListChecks}
            />
            <QuizSection />
          </div>
        </section>

        {/* ── 04 · Step-by-step grammar ─────────────────────────── */}
        <section id="grammatica" className="scroll-mt-20 border-t border-inchiostro/8 bg-crema-scura/50">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
            <SectionHeading
              num="04"
              it="Grammatica passo a passo"
              en="grammar, step by step"
              desc="No more jumping to the back of the book. Reveal the solution line by line and watch the reasoning unfold at your own pace — the blank fills only when you've earned it."
              icon={GraduationCap}
            />
            <StepSolutions />
          </div>
        </section>
      </main>

      {/* ── Footer (sticky at bottom) ──────────────────────────── */}
      <footer className="mt-auto bg-inchiostro text-crema">
        <div className="h-1.5 w-full bg-gradient-to-r from-verde via-crema to-rosso" aria-hidden="true" />
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="font-display text-2xl font-semibold">
              Lingua <span className="italic text-verde" style={{ color: "#5cba8f" }}>Viva</span>
            </p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-crema/60">
              L'italiano si impara vivendolo — Italian is learned by living it.
              Made for students of <span className="font-display italic text-crema/80">la bella lingua</span>.
            </p>
          </div>
          <nav aria-label="Navigazione del sito">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-crema/40">esplora</p>
            <ul className="flex flex-col gap-2 text-sm">
              {NAV.map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="text-crema/75 transition-colors hover:text-verde" style={{}}>
                    {n.label} <span className="font-mono text-[10px] text-crema/40">{n.en}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-crema/40">un consiglio</p>
            <p className="font-display text-lg italic leading-relaxed text-crema/85">
              “Impara l'italiano come si impara una canzone: prima la melodia, poi le parole.”
            </p>
          </div>
        </div>
        <div className="border-t border-crema/10 py-5">
          <p className="text-center font-mono text-xs text-crema/40">
            © 2026 Lingua Viva · fatto a mano, come la pasta
          </p>
        </div>
      </footer>
    </div>
  );
}
