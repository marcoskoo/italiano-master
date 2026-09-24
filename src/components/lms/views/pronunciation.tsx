"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Ear, Info, Mic, Volume2 } from "lucide-react";
import { VowelLab } from "@/components/italian/vowel-lab";
import { IntonationStudio } from "@/components/italian/intonation-studio";
import { speak } from "@/lib/lms/tts";
import { useLms } from "@/lib/lms/store";
import { AudioButton } from "../audio-button";
import { cn } from "@/lib/utils";

/* ── Vista: Pronunciación ─────────────────────────────────────────── */

const SOUNDS: { id: string; title: string; rule: string; words: { w: string; es: string }[]; level: string }[] = [
  {
    id: "c-g", title: "C y G duras / suaves", level: "A1",
    rule: "Ante a/o/u suenan duras (casa, gatto); ante e/i suenan suaves como “ch” y “j” (cena, gelato). Con h intermedia vuelven a ser duras (chiave, spaghetti).",
    words: [
      { w: "cena", es: "cena (suave)" }, { w: "casa", es: "casa (dura)" },
      { w: "gelato", es: "helado (suave)" }, { w: "spaghetti", es: "espaguetis (dura)" },
    ],
  },
  {
    id: "gn", title: "GN = ñ", level: "A1",
    rule: "El dígrafo gn suena exactamente como la ñ española. Bagno = baño. Es el sonido más fácil para hispanohablantes… y el más difícil para el resto del mundo.",
    words: [
      { w: "bagno", es: "baño" }, { w: "gnocchi", es: "ñoquis" },
      { w: "lasagne", es: "lasaña" }, { w: "ogni", es: "cada" },
    ],
  },
  {
    id: "gl", title: "GLI = lli", level: "A2",
    rule: "gl + i suena como “lli” (familia = famiglia). Ojo: solo cuando va seguido de i o al final de palabra (figli, foglie).",
    words: [
      { w: "famiglia", es: "familia" }, { w: "figli", es: "hijos" },
      { w: "fioriglia", es: "floristería" }, { w: "bottiglia", es: "botella" },
    ],
  },
  {
    id: "sc", title: "SC = sh / sk", level: "A2",
    rule: "Ante e/i suena “sh” (pesce, lasciare); ante a/o/u suena “sk” (scarpa, scala).",
    words: [
      { w: "pesce", es: "pescado (sh)" }, { w: "scarpa", es: "zapato (sk)" },
      { w: "lasciare", es: "dejar (sh)" }, { w: "scuola", es: "escuela (sk)" },
    ],
  },
  {
    id: "doppie", title: "Consonantes dobles", level: "A2",
    rule: "Las consonantes dobles se pronuncian MÁS LARGAS, y son distintivas: nono (noveno) ≠ nonno (abuelo). Alarga el sonido como si sostuvieras la consonante un instante.",
    words: [
      { w: "nonno / nono", es: "abuelo / noveno" }, { w: "cane / canne", es: "perro / cañas" },
      { w: "sete / sette", es: "sed / siete" }, { w: "pala / palla", es: "pala / pelota" },
    ],
  },
  {
    id: "r", title: "La R italiana", level: "B1",
    rule: "La r italiana es vibrante simple (una vibración, como la “r” suave española) o múltiple a principio de palabra (como la “rr”). Error típico: pronunciarla como la r francesa o inglesa.",
    words: [
      { w: "Roma", es: "Roma" }, { w: "caro / carro", es: "querido / carro" },
      { w: "presto", es: "rápido" }, { w: "birra", es: "cerveza" },
    ],
  },
];

const MINIMAL_PAIRS: { a: string; b: string; esA: string; esB: string }[] = [
  { a: "pena", b: "penna", esA: "pena", esB: "pluma" },
  { a: "sete", b: "sette", esA: "sed", esB: "siete" },
  { a: "casa", b: "cassa", esA: "casa", esB: "caja" },
  { a: "nono", b: "nonno", esA: "noveno", esB: "abuelo" },
  { a: "cane", b: "canne", esA: "perro", esB: "cañas" },
  { a: "pala", b: "palla", esA: "pala", esB: "pelota" },
];

export function PronunciationView() {
  const [tab, setTab] = useState<"suoni" | "vocali" | "intonazione" | "coppie">("vocali");
  const addXp = useLms((s) => s.addXp);
  const [pairIdx, setPairIdx] = useState(0);

  const pair = MINIMAL_PAIRS[pairIdx];

  return (
    <div className="space-y-6">
      {/* pestañas */}
      <div className="flex flex-wrap gap-2" role="tablist" aria-label="Secciones de pronunciación">
        {[
          { id: "vocali", label: "🎨 Laboratorio de vocales", it: "vocali" },
          { id: "intonazione", label: "🎵 Estudio de entonación", it: "intonazione" },
          { id: "suoni", label: "🔤 Sonidos especiales", it: "suoni" },
          { id: "coppie", label: "👂 Pares mínimos", it: "coppie minime" },
        ].map((t) => (
          <button
            key={t.id}
            role="tab"
            aria-selected={tab === t.id}
            onClick={() => setTab(t.id as typeof tab)}
            className={cn(
              "min-h-11 rounded-2xl border-2 px-4 py-2.5 text-sm font-bold transition-all",
              tab === t.id ? "border-verde bg-verde text-white shadow-md shadow-verde/20" : "border-soft bg-surface hover:border-verde/40"
            )}
          >
            {t.label}
          </button>
        ))}
      </div>

      {tab === "vocali" && (
        <div>
          <SectionIntro
            title="Il laboratorio dei suoni"
            desc="Las 7 vocales puras del italiano son el esqueleto del acento. Arrastra el punto verde para sentir dónde va tu lengua: los indicadores (altura, anterioridad, formantes) reaccionan en tiempo real. Toca cada vocal para escucharla."
          />
          <VowelLab />
        </div>
      )}

      {tab === "intonazione" && (
        <div>
          <SectionIntro
            title="Studio dell'intonazione"
            desc="El italiano canta: es una lengua silábica con acento rítmico. Mueve los deslizadores para esculpir la curva melódica (y la intensidad) de frases reales, observa cómo se redibujan al instante y escucha la melodía que construiste."
          />
          <IntonationStudio />
        </div>
      )}

      {tab === "suoni" && (
        <div className="grid gap-3 md:grid-cols-2">
          {SOUNDS.map((s, i) => (
            <motion.article
              key={s.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="rounded-3xl border border-soft bg-surface p-5 sm:p-6"
            >
              <div className="flex items-center justify-between">
                <h3 className="font-display text-xl font-semibold">{s.title}</h3>
                <span className="rounded-full bg-verde-tenue px-2.5 py-1 font-mono text-[10px] font-bold uppercase text-verde-scuro dark:text-verde">{s.level}</span>
              </div>
              <p className="mt-2.5 text-sm leading-relaxed text-muted-it">{s.rule}</p>
              <div className="mt-4 grid grid-cols-2 gap-2">
                {s.words.map((w, j) => (
                  <button
                    key={j}
                    onClick={() => { speak(w.w, { rate: 0.8 }); addXp(1, "pronuncia"); }}
                    className="flex min-h-11 items-center gap-2 rounded-xl border border-soft bg-crema px-3 py-2 text-left transition-all hover:border-verde/40 hover:scale-[1.02] dark:bg-inchiostro/10"
                  >
                    <Volume2 className="h-3.5 w-3.5 shrink-0 text-verde" aria-hidden="true" />
                    <span className="min-w-0">
                      <span className="block truncate text-sm font-semibold">{w.w}</span>
                      <span className="block truncate text-[11px] text-muted-it">{w.es}</span>
                    </span>
                  </button>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      )}

      {tab === "coppie" && (
        <div className="mx-auto max-w-2xl">
          <SectionIntro
            title="Coppie minime"
            desc="Dos palabras que solo se distinguen por un sonido. Escucha, repite en voz alta y entrena el oído: si distingues estas, dominas el 90% de la fonología italiana."
          />
          <div className="rounded-3xl border border-soft bg-surface p-6 sm:p-8">
            <div className="flex items-center justify-between gap-2">
              <span className="font-mono text-xs font-bold text-muted-it">PAR {pairIdx + 1} / {MINIMAL_PAIRS.length}</span>
              <div className="flex gap-1.5">
                {MINIMAL_PAIRS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setPairIdx(i)}
                    aria-label={`Par mínimo ${i + 1}`}
                    className={cn("h-2.5 w-2.5 rounded-full transition-colors", i === pairIdx ? "bg-verde" : "bg-inchiostro/15")}
                  />
                ))}
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4">
              {[{ w: pair.a, es: pair.esA, tone: "verde" }, { w: pair.b, es: pair.esB, tone: "terracotta" }].map((side, i) => (
                <motion.button
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  onClick={() => { speak(side.w, { rate: 0.75 }); addXp(1, "pronuncia"); }}
                  className={cn(
                    "flex min-h-40 flex-col items-center justify-center gap-2 rounded-3xl border-2 p-6 transition-all hover:scale-[1.02] active:scale-95",
                    side.tone === "verde" ? "border-verde/40 bg-verde-tenue/60" : "border-terracotta/40 bg-rosso-tenue/50"
                  )}
                >
                  <p className="font-display text-4xl font-semibold">{side.w}</p>
                  <p className="text-sm text-muted-it">{side.es}</p>
                  <span className="mt-1 flex items-center gap-1.5 text-xs font-bold text-muted-it">
                    <Ear className="h-3.5 w-3.5" aria-hidden="true" /> tocca e ripeti
                  </span>
                </motion.button>
              ))}
            </div>

            <div className="mt-6 flex justify-between">
              <button
                onClick={() => setPairIdx((pairIdx - 1 + MINIMAL_PAIRS.length) % MINIMAL_PAIRS.length)}
                className="min-h-11 rounded-xl border border-soft px-5 py-2.5 text-sm font-bold transition-all hover:border-verde/40"
              >
                ← Anteriore
              </button>
              <button
                onClick={() => setPairIdx((pairIdx + 1) % MINIMAL_PAIRS.length)}
                className="min-h-11 rounded-xl bg-inchiostro px-5 py-2.5 text-sm font-bold text-crema transition-all hover:scale-105 dark:bg-verde dark:text-inchiostro"
              >
                Successivo →
              </button>
            </div>

            <div className="mt-6 flex items-start gap-3 rounded-2xl bg-oro-tenue p-4">
              <Info className="mt-0.5 h-4 w-4 shrink-0 text-oro-scuro dark:text-oro" aria-hidden="true" />
              <p className="text-sm leading-relaxed text-oro-scuro dark:text-oro">
                <strong>Técnica de estudio:</strong> escucha → repite en voz alta (grábate con el micrófono de tu
                móvil si quieres) → compara → corrige → repite. La clave de la doble consonante es la DURACIÓN:
                sostén la consonante un instante más.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function SectionIntro({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="mb-6 max-w-3xl">
      <h2 className="font-display text-2xl font-semibold sm:text-3xl">{title}</h2>
      <p className="mt-2 text-sm leading-relaxed text-muted-it sm:text-base">{desc}</p>
    </div>
  );
}
