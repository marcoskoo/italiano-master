"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Microscope, Sparkles } from "lucide-react";
import { VOCAB } from "@/lib/lms/vocabulary";
import { VERB_LIST, findVerb, conjugate, TENSES, type TenseId } from "@/lib/lms/conjugator";
import { CEFR_LEVELS, type CefrLevel } from "@/lib/lms/types";
import { useLms } from "@/lib/lms/store";
import { cn } from "@/lib/utils";

/* ── Vista: Analizzatore di frasi · plugin v1.1 ────────────────────── */

/* léxico cerrado (artículos, preposiciones, pronombres, conjunciones…) */
const CLOSED: Record<string, string> = {
  il: "el", lo: "el", la: "la", i: "los", gli: "los", le: "las", un: "un", uno: "un", una: "una",
  un_: "un", di: "de", a: "a", da: "de/desde", in: "en", con: "con", su: "sobre", per: "para",
  del: "del", della: "de la", dei: "de los", degli: "de los", delle: "de las", al: "al", alla: "a la",
  ai: "a los", agli: "a los", alle: "a las", dal: "del", dalla: "de la", dai: "de los", dagli: "de los",
  dalle: "de las", nel: "en el", nella: "en la", nei: "en los", negli: "en los", nelle: "en las",
  sul: "sobre el", sulla: "sobre la", sui: "sobre los", sulle: "sobre las", col: "con el",
  e: "y", o: "o", ma: "pero", però: "sin embargo", che: "que", se: "si", perché: "porque/por qué",
  come: "cómo/como", dove: "dónde", quando: "cuándo", quanto: "cuánto", quale: "cuál", chi: "quién",
  cosa: "qué", non: "no", anche: "también", molto: "mucho", poco: "poco", più: "más", meno: "menos",
  già: "ya", ancora: "todavía", sempre: "siempre", mai: "nunca", oggi: "hoy", domani: "mañana", ieri: "ayer",
  qui: "aquí", là: "allí", adesso: "ahora", poi: "después", prima: "antes", bene: "bien", male: "mal",
  io: "yo", tu: "tú", lui: "él", lei: "ella", noi: "nosotros", voi: "vosotros", loro: "ellos",
  mi: "me", ti: "te", si: "se", ci: "nos", vi: "os", è: "es", sono: "son/soy", era: "era", erano: "eran",
  ho: "he/tengo", hai: "has/tienes", ha: "ha/tiene", abbiamo: "hemos/tenemos", avete: "habéis/tenéis",
  hanno: "han/tienen", "c'è": "hay (sing.)", "ci sono": "hay (plural)",
  questo: "este", questa: "esta", questi: "estos", quello: "ese/aquél", quella: "esa/aquélla",
  sì: "sí", no: "no", grazie: "gracias", prego: "de nada", tutto: "todo", tutti: "todos",
  ogni: "cada", tra: "entre", fra: "entre", verso: "hacia", senza: "sin", sotto: "debajo", sopra: "encima",
  davanti: "delante", dietro: "detrás", mentre: "mientras", quindi: "por lo tanto", invece: "en cambio",
};

interface Token {
  raw: string;
  clean: string;      // sin puntuación, minúscula
  es?: string;
  kind?: "vocab" | "verbo" | "grammatica" | "ignota";
  level?: CefrLevel;
  verbInfo?: { infinitive: string; tense: string; person: string; es: string };
}

const LEVEL_ORDER: CefrLevel[] = ["A1", "A2", "B1", "B2", "C1", "C2"];

export function AnalyzerView() {
  const [text, setText] = useState("Ieri sono andato al mercato e ho comprato delle pesche squisite.");
  const [analyzed, setAnalyzed] = useState(false);
  const addXp = useLms((s) => s.addXp);
  const navigate = useLms((s) => s.navigate);
  const remoteConfig = useLms((s) => s.remoteConfig);

  /* índice inverso de formas verbales: forma → {infinitivo, tiempo, persona} */
  const verbIndex = useMemo(() => {
    const map = new Map<string, { infinitive: string; tense: string; person: string; es: string }>();
    for (const v of VERB_LIST) {
      const entry = findVerb(v.infinitive);
      if (!entry) continue;
      for (const t of TENSES) {
        const conj = conjugate(entry, t.id as TenseId);
        conj.forms.forEach((f) => {
          const form = f.form.replace(/!$/, "").split(" / ")[0];
          const single = form.split("/")[0].trim();
          if (single.length > 2 && !map.has(single)) {
            map.set(single, { infinitive: v.infinitive, tense: t.label, person: f.pronoun, es: v.es });
          }
        });
      }
    }
    return map;
  }, []);

  /* índice del diccionario: palabra → VocabWord */
  const vocabIndex = useMemo(() => {
    const map = new Map<string, typeof VOCAB[number]>();
    for (const w of VOCAB) {
      const key = w.it.toLowerCase().replace(/^(il|lo|la|l'|un|una)\s+/, "");
      if (!map.has(key)) map.set(key, w);
    }
    return map;
  }, []);

  const tokens = useMemo<Token[]>(() => {
    if (!analyzed) return [];
    const parts = text.match(/[\p{L}]+(?:'[\p{L}]+)?/gu) ?? [];
    return parts.map((raw) => {
      const clean = raw.toLowerCase().replace(/[.,;:!?¡¿"«»()]/g, "");
      if (!clean) return { raw, clean };
      const vocab = vocabIndex.get(clean);
      if (vocab) return { raw, clean, es: vocab.es, kind: "vocab" as const, level: vocab.level };
      const verb = verbIndex.get(clean);
      if (verb) return { raw, clean, es: `${verb.es} (${verb.tense}, ${verb.person})`, kind: "verbo" as const, verbInfo: verb };
      if (CLOSED[clean]) return { raw, clean, es: CLOSED[clean], kind: "grammatica" as const };
      return { raw, clean, kind: "ignota" as const };
    });
  }, [text, analyzed, vocabIndex, verbIndex]);

  const stats = useMemo(() => {
    const known = tokens.filter((t) => t.kind && t.kind !== "ignota");
    const levels = tokens.map((t) => t.level).filter(Boolean) as CefrLevel[];
    const estLevel = levels.length
      ? levels.reduce((max, l) => (LEVEL_ORDER.indexOf(l) > LEVEL_ORDER.indexOf(max) ? l : max), "A1" as CefrLevel)
      : null;
    return {
      total: tokens.length,
      known: known.length,
      coverage: tokens.length ? Math.round((known.length / tokens.length) * 100) : 0,
      estLevel,
      verbs: tokens.filter((t) => t.kind === "verbo").length,
      unknown: tokens.filter((t) => t.kind === "ignota").map((t) => t.raw),
    };
  }, [tokens]);

  function run() {
    setAnalyzed(true);
    addXp(2, "vocabolario");
  }

  if (remoteConfig && remoteConfig.features.analyzer === false) {
    return (
      <div className="mx-auto max-w-lg rounded-3xl border border-soft bg-surface p-8 text-center">
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-inchiostro/10 text-2xl">🔬</span>
        <h2 className="mt-4 font-display text-xl font-semibold">Analizzatore non disponibile</h2>
        <p className="mt-2 text-sm text-muted-it">La administración ha desactivado esta herramienta.</p>
        <button onClick={() => navigate("inicio")} className="mt-5 inline-flex min-h-11 items-center rounded-xl bg-verde px-5 py-2.5 text-sm font-bold text-white shadow-md shadow-verde/25 hover:bg-verde-scuro">Torna all'inizio</button>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl">
      <section className="rounded-3xl border border-soft bg-surface p-6">
        <label htmlFor="an-text" className="mb-1 block text-xs font-bold uppercase tracking-wide text-muted-it">Frase o texto italiano</label>
        <textarea
          id="an-text"
          value={text}
          onChange={(e) => { setText(e.target.value); setAnalyzed(false); }}
          rows={3}
          maxLength={400}
          placeholder="Incolla qui una frase italiana…"
          className="w-full resize-none rounded-2xl border border-soft bg-crema px-4 py-3 text-base outline-none focus:ring-2 focus:ring-verde/40"
        />
        <div className="mt-3 flex flex-wrap items-center gap-2">
          <button onClick={run} disabled={!text.trim()} className="inline-flex min-h-12 items-center gap-2 rounded-xl bg-verde px-5 py-3 text-sm font-bold text-white shadow-md shadow-verde/25 hover:bg-verde-scuro disabled:opacity-40">
            <Microscope className="h-4 w-4" aria-hidden="true" /> Analizza
          </button>
          {["Ciao, come stai?", "Mi piacciono le tagliatelle al ragù.", "Se avessi saputo, sarei venuto prima.", "Nonostante il traffico, siamo arrivati in orario."].map((s) => (
            <button key={s} onClick={() => { setText(s); setAnalyzed(false); }} className="min-h-9 max-w-full truncate rounded-lg border border-soft bg-crema px-2.5 py-1.5 text-xs font-semibold hover:border-verde/40" title={s}>
              {s}
            </button>
          ))}
        </div>
      </section>

      {analyzed && (
        <motion.section initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-5">
          {/* estadísticas */}
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {[
              { label: "Palabras", value: String(stats.total) },
              { label: "Cobertura", value: `${stats.coverage}%` },
              { label: "Verbos detectados", value: String(stats.verbs) },
              { label: "Nivel estimado", value: stats.estLevel ?? "—" },
            ].map((s) => (
              <div key={s.label} className="rounded-2xl border border-soft bg-surface p-4 text-center">
                <p className="font-display text-2xl font-semibold text-verde-scuro dark:text-verde">{s.value}</p>
                <p className="mt-0.5 text-[11px] font-bold uppercase tracking-wide text-muted-it">{s.label}</p>
              </div>
            ))}
          </div>

          {/* tokens */}
          <div className="mt-4 rounded-3xl border border-soft bg-surface p-5">
            <p className="mb-3 text-xs font-bold uppercase tracking-wide text-muted-it">Análisis palabra por palabra</p>
            <div className="flex flex-wrap gap-2">
              {tokens.map((t, i) => (
                <span
                  key={i}
                  title={t.es ?? "palabra no encontrada"}
                  className={cn(
                    "inline-flex max-w-full flex-col rounded-xl border px-3 py-1.5 text-sm font-bold",
                    t.kind === "vocab" ? "border-verde/40 bg-verde-tenue text-verde-scuro dark:text-verde"
                      : t.kind === "verbo" ? "border-rosso/40 bg-rosso-tenue text-rosso-scuro dark:text-rosso"
                      : t.kind === "grammatica" ? "border-soft bg-crema-scura text-inchiostro/80 dark:bg-inchiostro/10"
                      : "border-dashed border-oro/50 bg-oro-tenue text-oro-scuro"
                  )}
                >
                  <span>{t.raw}</span>
                  {t.es && <span className="text-[11px] font-medium opacity-80">{t.es}</span>}
                </span>
              ))}
            </div>
            <div className="mt-4 flex flex-wrap gap-3 text-[11px] font-semibold text-muted-it">
              <span className="inline-flex items-center gap-1"><span className="h-2.5 w-2.5 rounded-sm bg-verde" /> vocabulario</span>
              <span className="inline-flex items-center gap-1"><span className="h-2.5 w-2.5 rounded-sm bg-rosso" /> verbo conjugado</span>
              <span className="inline-flex items-center gap-1"><span className="h-2.5 w-2.5 rounded-sm bg-inchiostro/30" /> gramática/cerradas</span>
              <span className="inline-flex items-center gap-1"><span className="h-2.5 w-2.5 rounded-sm bg-oro" /> no encontrada</span>
            </div>
          </div>

          {stats.unknown.length > 0 && (
            <p className="mt-3 rounded-2xl bg-oro-tenue px-4 py-3 text-xs leading-relaxed text-oro-scuro">
              <Sparkles className="mr-1 inline h-3.5 w-3.5" aria-hidden="true" />
              Palabras fuera del diccionario ({stats.unknown.length}): {stats.unknown.join(", ")}. Añádelas al Panel Admin → Contenido para que el analizador las reconozca.
            </p>
          )}
          <p className="mt-3 text-center text-xs text-muted-it">El nivel estimado es el más alto entre las palabras reconocidas ({CEFR_LEVELS.join(" → ")}).</p>
        </motion.section>
      )}
    </div>
  );
}
