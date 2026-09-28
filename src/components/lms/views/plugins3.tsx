"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  CheckCircle2, Eye, Lightbulb, RotateCcw, Sparkles, Trophy, XCircle,
} from "lucide-react";
import { PROVERBS } from "@/lib/lms/proverbs";
import { VOCAB, normalizeSearch } from "@/lib/lms/vocabulary";
import type { CefrLevel, Proverb, Topic } from "@/lib/lms/types";
import { useLms } from "@/lib/lms/store";
import { AudioButton } from "@/components/lms/audio-button";
import { cn } from "@/lib/utils";

/* ── Plugins v6.0 · Estensioni de Italiano Master ────────────────────
   9  · Indovinelli — adivinanzas italianas con pistas graduales
   10 · Vero o Falso — afirmaciones rápidas sobre idioma y cultura
   11 · Completa il proverbio — empareja las mitades de 193 proverbi ── */

const LEVELS: CefrLevel[] = ["A1", "A2", "B1", "B2", "C1", "C2"];

function PluginHeader({ tag, title, desc, count }: { tag: string; title: string; desc: string; count?: string }) {
  return (
    <div className="rounded-3xl border border-soft bg-surface p-5 sm:p-6">
      <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-muted-it">
        <Sparkles className="h-3.5 w-3.5" aria-hidden="true" /> Plugin · {tag}
      </p>
      <h1 className="mt-1.5 font-display text-2xl font-bold">{title} {count && <span className="text-base font-semibold text-muted-it">· {count}</span>}</h1>
      <p className="mt-2 text-sm leading-relaxed text-inchiostro/80">{desc}</p>
    </div>
  );
}

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/* ════════════════════════════════════════════════════════════════════
   9 · INDOVINELLI (adivinanzas italianas)
   ════════════════════════════════════════════════════════════════════ */

interface Riddle {
  id: string;
  it: string;          // adivinanza en italiano
  answer: string;      // respuesta (palabra italiana, sin artículo)
  es: string;          // respuesta en español
  hint: string;        // pista en español
  explain: string;     // dato cultural o lingüístico (ES)
  level: CefrLevel;
}

const RIDDLES: Riddle[] = [
  { id: "ind-01", it: "Ho i denti ma non mordo. Chi sono?", answer: "pettine", es: "el peine", hint: "Lo usas cada mañana delante del espejo.", explain: "Adivinanza clásica de la vida cotidiana: il pettine (el peine) tiene dientes (i denti) pero no muerde (non morde).", level: "A2" },
  { id: "ind-02", it: "Più ne togli e più diventa grande. Che cos'è?", answer: "buco", es: "el agujero", hint: "Cada pala que sacas lo agranda.", explain: "Il buco: paradójico y perfecto para recordar el comparativo italiano: più… e più… (cuanto más… más…).", level: "A2" },
  { id: "ind-03", it: "Cade tutto il giorno ma non si fa mai male. Chi è?", answer: "pioggia", es: "la lluvia", hint: "Con l'ombrello non ti bagna.", explain: "La pioggia cae (cade) sin hacerse daño: verbo cadere, caída de vocabulario A1 convertida en juego.", level: "A1" },
  { id: "ind-04", it: "Ho il collo ma non ho la testa. Che cosa sono?", answer: "bottiglia", es: "la botella", hint: "Se descorcha en las cenas.", explain: "La bottiglia tiene il collo (el cuello) ma non ha la testa: contraste avere/non avere en estilo adivinanza.", level: "A2" },
  { id: "ind-05", it: "Ti segue tutto il giorno e sparisce col buio. Chi sono?", answer: "ombra", es: "la sombra", hint: "Se alarga al atardecer.", explain: "L'ombra (la sombra): sparisce (desaparece) cuando se hace de noche. Verbo sparire, muy italiano.", level: "B1" },
  { id: "ind-06", it: "Parla tutte le lingue ma non ha la bocca. Chi è?", answer: "eco", es: "el eco", hint: "La encuentras en la montaña o en un palazzo vacío.", explain: "L'eco responde (risponde) sin boca: en italiano puede ser masculino o femenino, l'eco / un'eco.", level: "B1" },
  { id: "ind-07", it: "Cammina senza gambe e non si ferma mai. Chi è?", answer: "tempo", es: "el tiempo", hint: "Non torna mai indietro.", explain: "Il tempo cammina (camina) sin piernas: metáfora del latín tempus fugit que los italianos usan a diario.", level: "B1" },
  { id: "ind-08", it: "Va su e giù ma resta sempre allo stesso posto. Che cos'è?", answer: "scala", es: "la escalera", hint: "En italiano anche 'salire in alto'.", explain: "La scala va su e giù (sube y baja) senza muoversi: juego con i contrari su/giù.", level: "A2" },
  { id: "ind-09", it: "Corre tutto il giorno ma non si muove dal muro. Chi è?", answer: "orologio", es: "el reloj", hint: "Guardalo prima de un appuntamento.", explain: "L'orologio corre con le lancette (las agujas) ma sta sul muro: lancetta, palabra clave de la casa italiana.", level: "A2" },
  { id: "ind-10", it: "Vola senza ali e brilla di notte. Chi è?", answer: "luna", es: "la luna", hint: "Cresce e cala ogni mese.", explain: "La luna vola senza alas (senza ali): coppia minima volare / volare come la luna, poesía en A1.", level: "A1" },
  { id: "ind-11", it: "Entra nell'acqua ma non si bagna mai. Che cos'è?", answer: "luce", es: "la luz", hint: "Accendila al tramonto.", explain: "La luce entra nell'acqua (en el agua) sin mojarse: preposición articolata nell' + acqua, trampa clásica.", level: "B1" },
  { id: "ind-12", it: "Più è grande e meno si vede. Chi è?", answer: "nebbia", es: "la niebla", hint: "Envuelve la Val Padana en invierno.", explain: "La nebbia: più è grande, meno si vede — comparativo de superioridad e inferioridad juntos en una frase.", level: "B2" },
  { id: "ind-13", it: "Ho le foglie ma non sono un albero. Chi sono?", answer: "libro", es: "el libro", hint: "Volti la pagina per leggermi.", explain: "Il libro ha le foglie (las hojas = las páginas): en italiano foglia es hoja de árbol y de libro, como el antiguo español 'foja'.", level: "A1" },
  { id: "ind-14", it: "Non ho gambe ma corro verso il mare. Chi sono?", answer: "fiume", es: "el río", hint: "Il Po e il Tevere sono i miei fratelli.", explain: "Il fiume corre hacia il mare: verbo correre aplicado al agua, muy habitual en la poesía italiana.", level: "A2" },
  { id: "ind-15", it: "Più mi mangi e più ho fame... anzi: più mi lasci e più cresco. Che cos'è?", answer: "buco", es: "el agujero", hint: "La segunda pista es igual que la del número 2: ¡es el mismo!", explain: "Variante del agujero (buco): las adivinanzas italianas tienen muchas versiones de la misma paradoja.", level: "A2" },
  { id: "ind-16", it: "Bianco d'autunno, freddo d'inverno, sparisce in primavera. Chi è?", answer: "neve", es: "la nieve", hint: "Sci e pupazzi si fanno con me.", explain: "La neve: pupazzo di neve (muñeco de nieve) y sci (esquíes) hacen esta adivinanza muy alpina.", level: "A1" },
  { id: "ind-17", it: "Apro e chiudo le ali senza volare mai. Chi sono?", answer: "ombrello", es: "el paraguas", hint: "Mi odi in un giorno di pioggia a Roma.", explain: "L'ombrello ha le ali (las alas) ma non vola: odiarlo en un día de lluvia es universal.", level: "A2" },
  { id: "ind-18", it: "Ho un letto ma non dormo mai. Chi è?", answer: "fiume", es: "el río", hint: "Letto anche per il mare e per la camera.", explain: "Il letto del fiume (el lecho del río): stessa metafora dello spagnolo, ma in italiano il fiume non dorme mai.", level: "B1" },
];

function riddleAnswerOk(input: string, answer: string): boolean {
  const clean = (s: string) =>
    normalizeSearch(s)
      .replace(/^(il|lo|la|l'|i|gli|le|un|uno|una|un')\s+/i, "")
      .replace(/[.!?…,;:]/g, "")
      .trim();
  const a = clean(input);
  if (!a) return false;
  if (a === clean(answer)) return true;
  return a.includes(clean(answer)) && clean(answer).length >= 3;
}

export function IndovinelliView() {
  const addXp = useLms((s) => s.addXp);
  const recordQuiz = useLms((s) => s.recordQuiz);
  const recordError = useLms((s) => s.recordError);
  const recordCorrect = useLms((s) => s.recordCorrect);
  const [session, setSession] = useState<Riddle[]>(() => shuffle(RIDDLES));
  const [idx, setIdx] = useState(0);
  const [input, setInput] = useState("");
  const [hint, setHint] = useState(false);
  const [status, setStatus] = useState<"playing" | "wrong" | "revealed">("playing");
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const riddle = session[idx];

  const restart = useCallback(() => {
    setSession(shuffle(RIDDLES));
    setIdx(0);
    setInput("");
    setHint(false);
    setStatus("playing");
    setScore(0);
    setDone(false);
    setTimeout(() => inputRef.current?.focus(), 50);
  }, []);

  const nextRiddle = useCallback(() => {
    if (idx + 1 >= session.length) {
      recordQuiz({ id: `indovinelli-${Date.now()}`, label: "Indovinelli", score, total: session.length, date: new Date().toISOString(), kind: "juego" });
      setDone(true);
      return;
    }
    setIdx((i) => i + 1);
    setInput("");
    setHint(false);
    setStatus("playing");
    setTimeout(() => inputRef.current?.focus(), 50);
  }, [idx, session.length, score, recordQuiz]);

  const submit = () => {
    if (!riddle || status !== "playing") return;
    if (riddleAnswerOk(input, riddle.answer)) {
      const gained = hint ? 4 : 8;
      setScore((s) => s + (hint ? 0 : 1));
      setStatus("revealed");
      addXp(gained, "vocabolario");
      recordCorrect("vocabolario");
    } else {
      setStatus("wrong");
      recordError("vocabolario");
      setTimeout(() => setStatus("playing"), 900);
    }
  };

  const giveUp = () => {
    if (!riddle || status !== "playing") return;
    setStatus("revealed");
  };

  useEffect(() => {
    if (status === "playing") inputRef.current?.focus();
  }, [idx, status]);

  if (done) {
    return (
      <div className="space-y-5">
        <PluginHeader
          tag="Gioco di parole"
          title="Indovinelli"
          desc="Adivinanzas italianas tradicionales: lee, escucha y escribe la respuesta. Con pistas graduales y un dato cultural tras cada acertijo."
          count={`${RIDDLES.length} indovinelli`}
        />
        <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} className="mx-auto max-w-md rounded-3xl border-2 border-verde/50 bg-verde-tenue p-6 text-center">
          <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-verde text-white shadow-lg shadow-verde/30">
            <Trophy className="h-8 w-8" aria-hidden="true" />
          </span>
          <p className="mt-3 font-display text-2xl font-bold">{score}/{session.length} sin pista</p>
          <p className="mt-1 text-sm text-muted-it">
            {score === session.length ? "Indovino perfetto! Sei un vero italiano." : score >= session.length * 0.6 ? "Bravissimo! Occhio per le metafore." : "Le metafore italiane sono difficili: riprova!"}
          </p>
          <button onClick={restart} className="mt-4 inline-flex min-h-11 items-center gap-2 rounded-xl bg-verde px-5 py-2.5 text-sm font-bold text-white shadow-md shadow-verde/25 transition-all hover:scale-105 dark:text-inchiostro">
            <RotateCcw className="h-4 w-4" aria-hidden="true" /> Nuova partita
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="space-y-5">
      <PluginHeader
        tag="Gioco di parole"
        title="Indovinelli"
        desc="Adivinanzas italianas tradicionales: lee, escucha y escribe la respuesta. Con pistas graduales y un dato cultural tras cada acertijo."
        count={`${RIDDLES.length} indovinelli`}
      />

      <div className="flex items-center justify-between gap-3">
        <p className="font-mono text-xs font-bold text-muted-it">
          {idx + 1} / {session.length} · livello {riddle.level}
        </p>
        <p className="font-mono text-xs font-bold text-verde">{score} senza indizio</p>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-inchiostro/10" role="progressbar" aria-valuenow={idx} aria-valuemin={0} aria-valuemax={session.length}>
        <div className="h-full rounded-full bg-verde transition-all duration-500" style={{ width: `${(idx / session.length) * 100}%` }} />
      </div>

      <div className="rounded-3xl border border-soft bg-surface p-5 sm:p-7">
        <div className="flex items-start justify-between gap-3">
          <p className="font-display text-xl leading-relaxed sm:text-2xl">“{riddle.it}”</p>
          <AudioButton text={riddle.it} variant="icon" label="Ascolta l'indovinello" />
        </div>

        {hint && status === "playing" && (
          <motion.p initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} className="mt-4 flex items-start gap-2 rounded-2xl border border-oro/40 bg-oro-tenue/60 p-3 text-sm text-inchiostro/90">
            <Lightbulb className="mt-0.5 h-4 w-4 shrink-0 text-oro-scuro" aria-hidden="true" /> {riddle.hint}
          </motion.p>
        )}

        {status !== "revealed" ? (
          <div className="mt-5 flex flex-col gap-2.5 sm:flex-row">
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && submit()}
              placeholder="Scrivi la risposta…"
              aria-label="Respuesta de la adivinanza"
              className={cn(
                "min-h-12 flex-1 rounded-xl border-2 bg-background px-4 font-mono text-base font-bold outline-none transition-colors placeholder:font-sans placeholder:font-medium placeholder:text-muted-it/60",
                status === "wrong" ? "border-rosso bg-rosso-tenue/40" : "border-soft focus:border-verde",
              )}
            />
            <button onClick={submit} disabled={!input.trim()} className="min-h-12 rounded-xl bg-verde px-6 text-sm font-bold text-white shadow-md shadow-verde/25 transition-all hover:scale-[1.03] disabled:opacity-40 dark:text-inchiostro">
              Controlla
            </button>
          </div>
        ) : (
          <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} className="mt-5 space-y-3">
            <p className="flex flex-wrap items-center gap-2 font-display text-lg font-bold">
              <CheckCircle2 className="h-5 w-5 text-verde" aria-hidden="true" />
              {riddle.answer} <span className="font-sans text-sm font-semibold text-muted-it">({riddle.es})</span>
              <AudioButton text={riddle.answer} variant="icon" size="sm" />
            </p>
            <p className="rounded-2xl border border-verde/30 bg-verde-tenue/50 p-3 text-sm leading-relaxed text-inchiostro/85">{riddle.explain}</p>
          </motion.div>
        )}

        <div className="mt-4 flex flex-wrap gap-2">
          {!hint && status !== "revealed" && (
            <button onClick={() => setHint(true)} className="inline-flex min-h-11 items-center gap-2 rounded-xl border border-oro/50 bg-oro-tenue/50 px-4 py-2 text-sm font-bold text-oro-scuro transition-all hover:scale-[1.02]">
              <Lightbulb className="h-4 w-4" aria-hidden="true" /> Indizio (−4 XP)
            </button>
          )}
          {status !== "revealed" && (
            <button onClick={giveUp} className="inline-flex min-h-11 items-center gap-2 rounded-xl border border-soft px-4 py-2 text-sm font-bold text-muted-it transition-all hover:text-inchiostro">
              <Eye className="h-4 w-4" aria-hidden="true" /> Mostra la risposta
            </button>
          )}
          {status === "revealed" && (
            <button onClick={nextRiddle} className="inline-flex min-h-11 items-center gap-2 rounded-xl bg-verde px-5 py-2 text-sm font-bold text-white shadow-md shadow-verde/25 transition-all hover:scale-[1.02] dark:text-inchiostro">
              {idx + 1 >= session.length ? "Fine partita" : "Prossimo indovinello"} →
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════════════════════════════
   10 · VERO O FALSO (afirmaciones sobre idioma, cultura e Italia)
   ════════════════════════════════════════════════════════════════════ */

interface VfStatement {
  id: string;
  claim: string;        // afirmación en español o italiano simple
  answer: boolean;      // true = VERO
  explain: string;      // explicación tras responder
  topic: Topic;
  source: "curata" | "dizionario";
}

const VF_CURATED: VfStatement[] = [
  { id: "vf-01", claim: "«Ciao» viene del veneciano «schiavo» (de «sono vostro schiavo», soy su esclavo).", answer: true, explain: "Cierto: el saludo más famoso nació como reverencia cortesana en la Venecia medieval.", topic: "cultura" },
  { id: "vf-02", claim: "El italiano tiene 26 letras, igual que el español.", answer: false, explain: "Falso: el alfabeto italiano tiene 21 letras; j, k, w, x, y solo aparecen en extranjerismos (jeans, wifi).", topic: "grammatica" },
  { id: "vf-03", claim: "«Subire» en italiano significa subir.", answer: false, explain: "¡Falso amigo! «Subire» = sufrir, padecer. Para subir se dice «salire» o «andare su».", topic: "vocabolario" },
  { id: "vf-04", claim: "El cappuccino en Italia se pide también después de la cena.", answer: false, explain: "Falso: el cappuccino es una bebida de la mañana (hasta las 11 más o menos). Después de comer, solo un caffè.", topic: "cultura" },
  { id: "vf-05", claim: "En italiano «burro» significa mantequilla.", answer: true, explain: "Cierto: y ojo con el falso amigo — el burro (animal) en italiano es «asino».", topic: "vocabolario" },
  { id: "vf-06", claim: "Dante escribió la Divina Comedia en el dialecto siciliano.", answer: false, explain: "Falso: la escribió en toscano florentino, la base del italiano moderno.", topic: "cultura" },
  { id: "vf-07", claim: "Las consonantes dobles cambian el significado: «nonna» (abuela) ≠ «nono» (noveno).", answer: true, explain: "Cierto: la doble consonante se alarga de verdad y es fonémica. Alargarla mal puede cambiar la palabra.", topic: "grammatica" },
  { id: "vf-08", claim: "La «h» italiana se pronuncia como una j suave.", answer: false, explain: "Falso: la h italiana es muda. Solo sirve para distinguir ho/hai/ha de o/ai/a.", topic: "grammatica" },
  { id: "vf-09", claim: "«Preservativo» en italiano significa conservante alimentario.", answer: false, explain: "Falso amigo peligroso: «preservativo» = condón. El conservante es «conservante».", topic: "vocabolario" },
  { id: "vf-10", claim: "Tras «credo che…» el italiano exige el congiuntivo.", answer: true, explain: "Cierto: «Credo che sia giusto». El español lo evita («creo que es»), el italiano no puede.", topic: "congiuntivo" },
  { id: "vf-11", claim: "El «passato remoto» se usa más hablado en el sur de Italia que en el norte.", answer: true, explain: "Cierto: en el sur es la forma normal para el pasado; en el norte se reserva para la escritura.", topic: "passato" },
  { id: "vf-12", claim: "«Largo» en italiano significa «largo» en español.", answer: false, explain: "Falso: «largo» = ancho. El largo español es «lungo».", topic: "vocabolario" },
  { id: "vf-13", claim: "El italiano es una de las lenguas oficiales de Suiza.", answer: true, explain: "Cierto: Suiza tiene cuatro lenguas oficiales: alemán, francés, italiano y romanche.", topic: "cultura" },
  { id: "vf-14", claim: "«Salve» es más formal que «buongiorno».", answer: false, explain: "Falso: «salve» es un saludo intermedio, neutro; «buongiorno» sigue siendo más formal y seguro.", topic: "situazioni" },
  { id: "vf-15", claim: "La partícula «ci» puede significar «ahí» y también «nos».", answer: true, explain: "Cierto: «Ci vado» (voy allí) y «Ci vediamo» (nos vemos). Polivalencia total.", topic: "pronomi" },
  { id: "vf-16", claim: "En Italia el espresso se pide diciendo «un caffè».", answer: true, explain: "Cierto: si pides «un espresso» te delatarás como turista. El caffè normal YA es espresso.", topic: "cultura" },
  { id: "vf-17", claim: "«Fattoria» significa fábrica.", answer: false, explain: "Falso amigo: «fattoria» = granja. La fábrica es «fabbrica».", topic: "vocabolario" },
  { id: "vf-18", claim: "El plural de «pesce» es «peschi».", answer: false, explain: "Falso: el plural es «pesci». Y suena /ˈpeʃʃi/: la «sc» ante e/i es /ʃ/.", topic: "plurale" },
  { id: "vf-19", claim: "«Andarsene» significa irse.", answer: true, explain: "Cierto: verbo pronominal de los llamados «verbi incoativi»: me ne vado = me voy.", topic: "verbi" },
  { id: "vf-20", claim: "El subjuntivo español y el congiuntivo italiano se usan exactamente igual.", answer: false, explain: "Falso: se parecen, pero el italiano lo exige en más contextos (credo che, benché, prima che…).", topic: "congiuntivo" },
  { id: "vf-21", claim: "«Lo» y «gli» son artículos masculinos: «lo zaino», «gli zaini».", answer: true, explain: "Cierto: van ante z, s+consonante, gn, ps, x, y semiconsonantes: lo studente, gli studenti.", topic: "articoli" },
  { id: "vf-22", claim: "En italiano se puede decir «sono d'accordo con te».", answer: true, explain: "Cierto: essere d'accordo = estar de acuerdo. Nunca «sto d'accordo».", topic: "situazioni" },
];

function vfFromDictionary(): VfStatement[] {
  const pool = VOCAB.filter(
    (w) => !w.it.includes(" ") && !w.es.includes(" ") && !w.es.includes("/") && w.es.length >= 3 && w.freq !== undefined && w.freq <= 3,
  );
  const picked = shuffle(pool).slice(0, 10);
  const others = shuffle(pool.filter((w) => !picked.includes(w)));
  return picked.map((w, i) => {
    const truthy = Math.random() < 0.5;
    const decoy = others[i % Math.max(1, others.length)];
    const shownEs = truthy || !decoy ? w.es : decoy.es;
    return {
      id: `vfd-${w.id}`,
      claim: `«${w.it}» significa «${shownEs}».`,
      answer: shownEs === w.es,
      explain: shownEs === w.es
        ? `Cierto: «${w.it}» = ${w.es}. ${w.example.it} — ${w.example.es}`
        : `Falso: «${w.it}» = ${w.es}, no ${shownEs}. ${w.example.it} — ${w.example.es}`,
      topic: "vocabolario" as Topic,
      source: "dizionario" as const,
    };
  });
}

function vfSession(): VfStatement[] {
  const cur = shuffle(VF_CURATED).slice(0, 7);
  const dict = vfFromDictionary().slice(0, 5);
  return shuffle([...cur, ...dict]);
}

export function VeroFalsoView() {
  const addXp = useLms((s) => s.addXp);
  const recordQuiz = useLms((s) => s.recordQuiz);
  const recordError = useLms((s) => s.recordError);
  const recordCorrect = useLms((s) => s.recordCorrect);
  const [session, setSession] = useState<VfStatement[]>(() => vfSession());
  const [idx, setIdx] = useState(0);
  const [picked, setPicked] = useState<boolean | null>(null);
  const [correct, setCorrect] = useState(0);
  const [streak, setStreak] = useState(0);
  const [bestStreak, setBestStreak] = useState(0);
  const [done, setDone] = useState(false);

  const item = session[idx];

  const restart = useCallback(() => {
    setSession(vfSession());
    setIdx(0);
    setPicked(null);
    setCorrect(0);
    setStreak(0);
    setBestStreak(0);
    setDone(false);
  }, []);

  const answer = useCallback((choice: boolean) => {
    if (!item || picked !== null) return;
    setPicked(choice);
    const ok = choice === item.answer;
    if (ok) {
      setCorrect((c) => c + 1);
      setStreak((s) => {
        const ns = s + 1;
        setBestStreak((b) => Math.max(b, ns));
        return ns;
      });
      addXp(streak >= 4 ? 5 : 3, "grammatica");
      recordCorrect(item.topic);
    } else {
      setStreak(0);
      recordError(item.topic);
    }
  }, [item, picked, streak, addXp, recordCorrect, recordError]);

  const next = useCallback(() => {
    if (idx + 1 >= session.length) {
      recordQuiz({ id: `verofalso-${Date.now()}`, label: "Vero o Falso", score: correct, total: session.length, date: new Date().toISOString(), kind: "juego" });
      setDone(true);
      return;
    }
    setIdx((i) => i + 1);
    setPicked(null);
  }, [idx, session.length, correct, recordQuiz]);

  // atajos de teclado: ← VERO · → FALSO · Enter siguiente
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (done) return;
      if (e.key === "ArrowLeft") answer(true);
      else if (e.key === "ArrowRight") answer(false);
      else if (e.key === "Enter" && picked !== null) next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [answer, next, picked, done]);

  return (
    <div className="space-y-5">
      <PluginHeader
        tag="Quiz veloce"
        title="Vero o Falso"
        desc="12 afirmaciones rápidas sobre gramática, falsos amigos y cultura italiana. Racha de 5 = XP doble. Atajos: ← vero · → falso · Enter siguiente."
        count="22 curate + dizionario"
      />

      <div className="flex items-center justify-between gap-3">
        <p className="font-mono text-xs font-bold text-muted-it">{done ? "sessione completa" : `${idx + 1} / ${session.length}`}</p>
        <p className="font-mono text-xs font-bold text-verde">racha {streak} · record {bestStreak}</p>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-inchiostro/10" role="progressbar" aria-valuenow={idx} aria-valuemin={0} aria-valuemax={session.length}>
        <div className="h-full rounded-full bg-verde transition-all duration-500" style={{ width: `${((done ? session.length : idx) / session.length) * 100}%` }} />
      </div>

      {done ? (
        <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} className="mx-auto max-w-md rounded-3xl border-2 border-verde/50 bg-verde-tenue p-6 text-center">
          <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-verde text-white shadow-lg shadow-verde/30">
            <Trophy className="h-8 w-8" aria-hidden="true" />
          </span>
          <p className="mt-3 font-display text-2xl font-bold">{correct}/{session.length} corretti</p>
          <p className="mt-1 text-sm text-muted-it">Racha más larga: {bestStreak} seguidas</p>
          <button onClick={restart} className="mt-4 inline-flex min-h-11 items-center gap-2 rounded-xl bg-verde px-5 py-2.5 text-sm font-bold text-white shadow-md shadow-verde/25 transition-all hover:scale-105 dark:text-inchiostro">
            <RotateCcw className="h-4 w-4" aria-hidden="true" /> Nuova sessione
          </button>
        </motion.div>
      ) : item ? (
        <div className="rounded-3xl border border-soft bg-surface p-5 sm:p-7">
          <p className="text-xs font-bold uppercase tracking-widest text-muted-it">
            {item.source === "curata" ? "Lingua e cultura" : "Dizionario"}
          </p>
          <p className="mt-3 font-display text-xl leading-relaxed sm:text-2xl">{item.claim}</p>

          {picked !== null && (
            <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} className={cn(
              "mt-4 rounded-2xl border p-3.5 text-sm leading-relaxed",
              picked === item.answer ? "border-verde/40 bg-verde-tenue/60 text-inchiostro" : "border-rosso/40 bg-rosso-tenue/60 text-inchiostro",
            )}>
              <p className="flex items-center gap-2 font-bold">
                {picked === item.answer
                  ? <><CheckCircle2 className="h-4 w-4 text-verde" aria-hidden="true" /> Vero! +{streak >= 4 ? 5 : 3} XP</>
                  : <><XCircle className="h-4 w-4 text-rosso" aria-hidden="true" /> Falso…</>}
              </p>
              <p className="mt-1">{item.explain}</p>
            </motion.div>
          )}

          <div className="mt-6 grid grid-cols-2 gap-3">
            <button
              onClick={() => answer(true)}
              disabled={picked !== null}
              className={cn(
                "flex min-h-14 flex-col items-center justify-center gap-1 rounded-2xl border-2 text-base font-bold transition-all disabled:opacity-50",
                picked !== null && item.answer
                  ? "border-verde bg-verde text-white dark:text-inchiostro"
                  : picked !== null ? "border-soft opacity-40" : "border-verde/50 bg-verde-tenue/50 text-verde-scuro hover:scale-[1.02] dark:text-verde",
              )}
              aria-label="Marcar como verdadero"
            >
              <span className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5" aria-hidden="true" /> VERO</span>
            </button>
            <button
              onClick={() => answer(false)}
              disabled={picked !== null}
              className={cn(
                "flex min-h-14 flex-col items-center justify-center gap-1 rounded-2xl border-2 text-base font-bold transition-all disabled:opacity-50",
                picked !== null && !item.answer
                  ? "border-rosso bg-rosso text-white dark:text-inchiostro"
                  : picked !== null ? "border-soft opacity-40" : "border-rosso/50 bg-rosso-tenue/50 text-rosso-scuro hover:scale-[1.02] dark:text-rosso",
              )}
              aria-label="Marcar como falso"
            >
              <span className="flex items-center gap-2"><XCircle className="h-5 w-5" aria-hidden="true" /> FALSO</span>
            </button>
          </div>

          {picked !== null && (
            <button onClick={next} className="mt-4 w-full min-h-12 rounded-xl bg-verde text-sm font-bold text-white shadow-md shadow-verde/25 transition-all hover:scale-[1.01] dark:text-inchiostro">
              {idx + 1 >= session.length ? "Vedi risultato →" : "Prossima affermazione →"}
            </button>
          )}
        </div>
      ) : null}
    </div>
  );
}

/* ════════════════════════════════════════════════════════════════════
   11 · COMPLETA IL PROVERBIO (empareja las mitades)
   ════════════════════════════════════════════════════════════════════ */

interface ProverbPiece {
  proverb: Proverb;
  prompt: string;                 // parte visible del proverbio
  answer: string;                 // lo que hay que adivinar
  mode: "meta" | "parola";        // segunda mitad · palabra final
}

function proverbPieces(level: CefrLevel | "tutti"): ProverbPiece[] {
  const base = level === "tutti" ? PROVERBS : PROVERBS.filter((p) => p.level === level);
  const out: ProverbPiece[] = [];
  for (const p of base) {
    const i = p.it.lastIndexOf(",");
    if (i > 0 && i < p.it.length - 2) {
      const first = p.it.slice(0, i).trim();
      const second = p.it.slice(i + 1).trim();
      if (first.length >= 4 && second.length >= 4) {
        out.push({ proverb: p, prompt: first, answer: second, mode: "meta" });
        continue;
      }
    }
    const words = p.it.split(" ");
    const last = words[words.length - 1];
    if (words.length >= 2 && last.length >= 3 && last !== "...") {
      out.push({ proverb: p, prompt: words.slice(0, -1).join(" "), answer: last, mode: "parola" });
    }
  }
  return out;
}

interface ProverbRound extends ProverbPiece { options: string[]; }

function proverbSession(level: CefrLevel | "tutti", count: number): ProverbRound[] {
  const pool = proverbPieces(level);
  const all = proverbPieces("tutti");
  return shuffle(pool).slice(0, count).map((h) => {
    const sameMode = all.filter((o) => o.answer !== h.answer && o.mode === h.mode);
    const distractors = shuffle(sameMode).slice(0, 3).map((o) => o.answer);
    return { ...h, options: shuffle([h.answer, ...distractors]) };
  });
}

export function ProverbioView() {
  const addXp = useLms((s) => s.addXp);
  const recordQuiz = useLms((s) => s.recordQuiz);
  const recordError = useLms((s) => s.recordError);
  const recordCorrect = useLms((s) => s.recordCorrect);
  const [level, setLevel] = useState<CefrLevel | "tutti">("tutti");
  const [session, setSession] = useState<ProverbRound[]>(() => proverbSession("tutti", 8));
  const [idx, setIdx] = useState(0);
  const [picked, setPicked] = useState<string | null>(null);
  const [correct, setCorrect] = useState(0);
  const [done, setDone] = useState(false);

  const item = session[idx];
  const poolCount = useMemo(() => proverbPieces("tutti").length, []);

  const restart = useCallback((lv: CefrLevel | "tutti") => {
    setLevel(lv);
    setSession(proverbSession(lv, 8));
    setIdx(0);
    setPicked(null);
    setCorrect(0);
    setDone(false);
  }, []);

  const pick = (opt: string) => {
    if (!item || picked) return;
    setPicked(opt);
    if (opt === item.answer) {
      setCorrect((c) => c + 1);
      addXp(6, "vocabolario");
      recordCorrect("vocabolario");
    } else {
      recordError("vocabolario");
    }
  };

  const next = () => {
    if (idx + 1 >= session.length) {
      recordQuiz({ id: `proverbio-${Date.now()}`, label: "Completa il proverbio", score: correct, total: session.length, date: new Date().toISOString(), kind: "juego" });
      setDone(true);
      return;
    }
    setIdx(idx + 1);
    setPicked(null);
  };

  return (
    <div className="space-y-5">
      <PluginHeader
        tag="Gioco di memoria"
        title="Completa il proverbio"
        desc="Dos modos: completa la segunda mitad del proverbio o adivina su última palabra. Tras cada respuesta ves el equivalente español y el contexto de uso."
        count={`${poolCount} proverbi`}
      />

      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap gap-1.5" role="group" aria-label="Filtrar por nivel">
          <button onClick={() => restart("tutti")} className={cn("min-h-9 rounded-full px-3.5 text-xs font-bold transition-colors", level === "tutti" ? "bg-verde text-white" : "border border-soft bg-surface text-muted-it hover:text-verde")}>Tutti</button>
          {LEVELS.map((l) => (
            <button key={l} onClick={() => restart(l)} className={cn("min-h-9 rounded-full px-3.5 text-xs font-bold transition-colors", level === l ? "bg-verde text-white" : "border border-soft bg-surface text-muted-it hover:text-verde")}>{l}</button>
          ))}
        </div>
        <p className="font-mono text-xs font-bold text-muted-it">{done ? "sessione completa" : `${idx + 1} / ${session.length}`}</p>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-inchiostro/10" role="progressbar" aria-valuenow={idx} aria-valuemin={0} aria-valuemax={session.length}>
        <div className="h-full rounded-full bg-verde transition-all duration-500" style={{ width: `${((done ? session.length : idx) / session.length) * 100}%` }} />
      </div>

      {done ? (
        <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} className="mx-auto max-w-md rounded-3xl border-2 border-verde/50 bg-verde-tenue p-6 text-center">
          <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-verde text-white shadow-lg shadow-verde/30">
            <Trophy className="h-8 w-8" aria-hidden="true" />
          </span>
          <p className="mt-3 font-display text-2xl font-bold">{correct}/{session.length} completati</p>
          <p className="mt-1 text-sm text-muted-it">
            {correct === session.length ? "Come un nonno italiano! Proverbi nel sangue." : correct >= session.length * 0.6 ? "Buona memoria proverbiale!" : "I proverbi si imparano con l'uso: riprova!"}
          </p>
          <button onClick={() => restart(level)} className="mt-4 inline-flex min-h-11 items-center gap-2 rounded-xl bg-verde px-5 py-2.5 text-sm font-bold text-white shadow-md shadow-verde/25 transition-all hover:scale-105 dark:text-inchiostro">
            <RotateCcw className="h-4 w-4" aria-hidden="true" /> Nuova sessione
          </button>
        </motion.div>
      ) : item ? (
        <div className="rounded-3xl border border-soft bg-surface p-5 sm:p-7">
          <p className="text-xs font-bold uppercase tracking-widest text-muted-it">
            Livello {item.proverb.level} · {item.proverb.kind} · {item.mode === "meta" ? "completa la mitad" : "última palabra"}
          </p>
          <p className="mt-3 font-display text-xl leading-relaxed sm:text-2xl">
            {item.mode === "meta" ? `${item.prompt},` : `${item.prompt} …`}
            <span className={cn(
              "mx-1 inline-block min-w-24 rounded-lg border-b-4 px-2 pb-0.5 text-center",
              picked === item.answer ? "border-verde bg-verde-tenue text-verde-scuro dark:text-verde"
                : picked ? "border-rosso bg-rosso-tenue text-rosso-scuro dark:text-rosso"
                : "border-oro bg-oro-tenue/50 text-muted-it",
            )}>
              {picked ?? (item.mode === "meta" ? "…?" : "?")}
            </span>
          </p>
          <div className="mt-1 flex justify-end">
            <AudioButton text={item.proverb.it} variant="icon" size="sm" label="Ascolta il proverbio" />
          </div>

          <div className="mt-5 grid gap-2.5 sm:grid-cols-2">
            {item.options.map((opt) => {
              const isAnswer = opt === item.answer;
              const isPicked = picked === opt;
              return (
                <button
                  key={opt}
                  onClick={() => pick(opt)}
                  disabled={Boolean(picked)}
                  className={cn(
                    "min-h-12 rounded-xl border-2 px-4 py-2.5 text-left text-sm font-semibold transition-all",
                    picked
                      ? isAnswer
                        ? "border-verde bg-verde-tenue text-verde-scuro dark:text-verde"
                        : isPicked ? "border-rosso bg-rosso-tenue text-rosso-scuro dark:text-rosso" : "border-soft opacity-50"
                      : "border-soft bg-background hover:border-verde/60 hover:scale-[1.01]",
                  )}
                >
                  {opt}
                </button>
              );
            })}
          </div>

          {picked && (
            <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} className="mt-4 space-y-1.5 rounded-2xl border border-oro/40 bg-oro-tenue/50 p-3.5 text-sm leading-relaxed">
              <p className="font-bold">«{item.proverb.it}»</p>
              <p className="text-muted-it">≈ {item.proverb.es} · {item.proverb.literal}</p>
              <p>{item.proverb.meaning}</p>
            </motion.div>
          )}

          {picked && (
            <button onClick={next} className="mt-4 w-full min-h-12 rounded-xl bg-verde text-sm font-bold text-white shadow-md shadow-verde/25 transition-all hover:scale-[1.01] dark:text-inchiostro">
              {idx + 1 >= session.length ? "Vedi risultato →" : "Prossimo proverbio →"}
            </button>
          )}
        </div>
      ) : null}
    </div>
  );
}

