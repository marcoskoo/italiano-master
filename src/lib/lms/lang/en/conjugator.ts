/* ═══ v9.39 · EN · Conjugador (inglés americano) ══════════════════════
   Pack de conjugación para la vista CONJUGADOR y el drill de verbos:
   7 tiempos (present simple/continuous, past simple, present perfect,
   future will, conditional would, imperative), 6 pronombres y 68
   verbos frecuentes (44 irregulares con pasado · participio · -ing
   completos). Implementa la interfaz ConjugatorPack de
   src/lib/lms/conjugators.ts; el wiring en BY_LANG lo hace el
   orquestador. Estilo EE. UU. (gotten). Solo formas afirmativas: las
   negativas con do/does/did no se muestran en la tabla.            */

import type {
  ConjugatorPack,
  ConjugatorVerb,
  PackForm,
  PackTense,
  PackTenseResult,
} from "../../conjugators";

/* ── Tiempos y pronombres ─────────────────────────────────────────── */

const TENSES: PackTense[] = [
  { id: "present-simple", label: "Present simple", hint: "presente simple (rutinas y hechos)" },
  { id: "present-continuous", label: "Present continuous", hint: "presente continuo (ocurre ahora mismo)" },
  { id: "past-simple", label: "Past simple", hint: "pasado simple" },
  { id: "present-perfect", label: "Present perfect", hint: "pretérito perfecto (have/has + participio)" },
  { id: "future-will", label: "Future (will)", hint: "futuro con will" },
  { id: "conditional-would", label: "Conditional (would)", hint: "condicional con would" },
  { id: "imperative", label: "Imperative", hint: "imperativo (2ª persona; let's para nosotros)" },
];

const PRONOUNS = ["I", "you", "he/she/it", "we", "you", "they"];

/* ── Datos de verbos (pasado · participio · -ing explícitos) ──────── */

interface EnVerbEntry {
  infinitive: string;
  es: string;
  pattern: "regular" | "irregular";
  past: string;   // pasado simple (be: "was/were", solo para infoEs)
  pp: string;     // participio pasado
  ing: string;    // forma -ing
  third?: string; // 3ª persona si no sale de la regla (have → has)
  noteEs?: string;
}

const DATA: EnVerbEntry[] = [
  /* ── Irregulares (44) ── */
  { infinitive: "be", es: "ser/estar", pattern: "irregular", past: "was/were", pp: "been", ing: "being",
    noteEs: "en presente usa am/are/is" },
  { infinitive: "have", es: "tener", pattern: "irregular", past: "had", pp: "had", ing: "having", third: "has" },
  { infinitive: "do", es: "hacer", pattern: "irregular", past: "did", pp: "done", ing: "doing" },
  { infinitive: "go", es: "ir", pattern: "irregular", past: "went", pp: "gone", ing: "going" },
  { infinitive: "say", es: "decir", pattern: "irregular", past: "said", pp: "said", ing: "saying" },
  { infinitive: "get", es: "conseguir", pattern: "irregular", past: "got", pp: "gotten", ing: "getting",
    noteEs: "participio gotten en EE. UU.; got en británico" },
  { infinitive: "make", es: "hacer/fabricar", pattern: "irregular", past: "made", pp: "made", ing: "making" },
  { infinitive: "know", es: "saber/conocer", pattern: "irregular", past: "knew", pp: "known", ing: "knowing" },
  { infinitive: "think", es: "pensar", pattern: "irregular", past: "thought", pp: "thought", ing: "thinking" },
  { infinitive: "come", es: "venir", pattern: "irregular", past: "came", pp: "come", ing: "coming",
    noteEs: "participio igual al presente (come)" },
  { infinitive: "see", es: "ver", pattern: "irregular", past: "saw", pp: "seen", ing: "seeing" },
  { infinitive: "take", es: "tomar", pattern: "irregular", past: "took", pp: "taken", ing: "taking" },
  { infinitive: "find", es: "encontrar", pattern: "irregular", past: "found", pp: "found", ing: "finding" },
  { infinitive: "give", es: "dar", pattern: "irregular", past: "gave", pp: "given", ing: "giving" },
  { infinitive: "tell", es: "contar/decir", pattern: "irregular", past: "told", pp: "told", ing: "telling" },
  { infinitive: "feel", es: "sentir(se)", pattern: "irregular", past: "felt", pp: "felt", ing: "feeling" },
  { infinitive: "leave", es: "irse/dejar", pattern: "irregular", past: "left", pp: "left", ing: "leaving" },
  { infinitive: "put", es: "poner", pattern: "irregular", past: "put", pp: "put", ing: "putting",
    noteEs: "las tres formas se escriben igual (put/put/put)" },
  { infinitive: "begin", es: "empezar", pattern: "irregular", past: "began", pp: "begun", ing: "beginning" },
  { infinitive: "write", es: "escribir", pattern: "irregular", past: "wrote", pp: "written", ing: "writing" },
  { infinitive: "read", es: "leer", pattern: "irregular", past: "read", pp: "read", ing: "reading",
    noteEs: "pasado y participio se escriben igual pero se pronuncian /red/" },
  { infinitive: "speak", es: "hablar", pattern: "irregular", past: "spoke", pp: "spoken", ing: "speaking" },
  { infinitive: "eat", es: "comer", pattern: "irregular", past: "ate", pp: "eaten", ing: "eating" },
  { infinitive: "drink", es: "beber", pattern: "irregular", past: "drank", pp: "drunk", ing: "drinking" },
  { infinitive: "buy", es: "comprar", pattern: "irregular", past: "bought", pp: "bought", ing: "buying" },
  { infinitive: "teach", es: "enseñar", pattern: "irregular", past: "taught", pp: "taught", ing: "teaching" },
  { infinitive: "catch", es: "atrapar", pattern: "irregular", past: "caught", pp: "caught", ing: "catching" },
  { infinitive: "build", es: "construir", pattern: "irregular", past: "built", pp: "built", ing: "building" },
  { infinitive: "pay", es: "pagar", pattern: "irregular", past: "paid", pp: "paid", ing: "paying",
    noteEs: "la y se convierte en -id (paid)" },
  { infinitive: "run", es: "correr", pattern: "irregular", past: "ran", pp: "run", ing: "running",
    noteEs: "participio igual al presente (run)" },
  { infinitive: "bring", es: "traer", pattern: "irregular", past: "brought", pp: "brought", ing: "bringing" },
  { infinitive: "understand", es: "entender", pattern: "irregular", past: "understood", pp: "understood", ing: "understanding" },
  { infinitive: "become", es: "llegar a ser", pattern: "irregular", past: "became", pp: "become", ing: "becoming" },
  { infinitive: "keep", es: "guardar/mantener", pattern: "irregular", past: "kept", pp: "kept", ing: "keeping" },
  { infinitive: "mean", es: "significar", pattern: "irregular", past: "meant", pp: "meant", ing: "meaning" },
  { infinitive: "meet", es: "conocer(se)", pattern: "irregular", past: "met", pp: "met", ing: "meeting" },
  { infinitive: "sleep", es: "dormir", pattern: "irregular", past: "slept", pp: "slept", ing: "sleeping" },
  { infinitive: "wear", es: "llevar puesto", pattern: "irregular", past: "wore", pp: "worn", ing: "wearing" },
  { infinitive: "win", es: "ganar", pattern: "irregular", past: "won", pp: "won", ing: "winning" },
  { infinitive: "lose", es: "perder", pattern: "irregular", past: "lost", pp: "lost", ing: "losing" },
  { infinitive: "spend", es: "gastar", pattern: "irregular", past: "spent", pp: "spent", ing: "spending" },
  { infinitive: "send", es: "enviar", pattern: "irregular", past: "sent", pp: "sent", ing: "sending" },
  { infinitive: "sit", es: "sentarse", pattern: "irregular", past: "sat", pp: "sat", ing: "sitting" },
  { infinitive: "stand", es: "estar de pie", pattern: "irregular", past: "stood", pp: "stood", ing: "standing" },
  /* ── Regulares (24) ── */
  { infinitive: "work", es: "trabajar", pattern: "regular", past: "worked", pp: "worked", ing: "working" },
  { infinitive: "want", es: "querer", pattern: "regular", past: "wanted", pp: "wanted", ing: "wanting" },
  { infinitive: "need", es: "necesitar", pattern: "regular", past: "needed", pp: "needed", ing: "needing" },
  { infinitive: "like", es: "gustar", pattern: "regular", past: "liked", pp: "liked", ing: "liking" },
  { infinitive: "love", es: "amar/encantar", pattern: "regular", past: "loved", pp: "loved", ing: "loving" },
  { infinitive: "live", es: "vivir", pattern: "regular", past: "lived", pp: "lived", ing: "living" },
  { infinitive: "help", es: "ayudar", pattern: "regular", past: "helped", pp: "helped", ing: "helping" },
  { infinitive: "talk", es: "conversar", pattern: "regular", past: "talked", pp: "talked", ing: "talking" },
  { infinitive: "call", es: "llamar", pattern: "regular", past: "called", pp: "called", ing: "calling" },
  { infinitive: "try", es: "intentar", pattern: "regular", past: "tried", pp: "tried", ing: "trying" },
  { infinitive: "play", es: "jugar/tocar", pattern: "regular", past: "played", pp: "played", ing: "playing" },
  { infinitive: "watch", es: "mirar", pattern: "regular", past: "watched", pp: "watched", ing: "watching" },
  { infinitive: "study", es: "estudiar", pattern: "regular", past: "studied", pp: "studied", ing: "studying" },
  { infinitive: "walk", es: "caminar", pattern: "regular", past: "walked", pp: "walked", ing: "walking" },
  { infinitive: "open", es: "abrir", pattern: "regular", past: "opened", pp: "opened", ing: "opening" },
  { infinitive: "listen", es: "escuchar", pattern: "regular", past: "listened", pp: "listened", ing: "listening" },
  { infinitive: "wait", es: "esperar", pattern: "regular", past: "waited", pp: "waited", ing: "waiting" },
  { infinitive: "cook", es: "cocinar", pattern: "regular", past: "cooked", pp: "cooked", ing: "cooking" },
  { infinitive: "clean", es: "limpiar", pattern: "regular", past: "cleaned", pp: "cleaned", ing: "cleaning" },
  { infinitive: "ask", es: "preguntar", pattern: "regular", past: "asked", pp: "asked", ing: "asking" },
  { infinitive: "answer", es: "responder", pattern: "regular", past: "answered", pp: "answered", ing: "answering" },
  { infinitive: "smile", es: "sonreír", pattern: "regular", past: "smiled", pp: "smiled", ing: "smiling" },
  { infinitive: "arrive", es: "llegar", pattern: "regular", past: "arrived", pp: "arrived", ing: "arriving" },
  { infinitive: "stay", es: "quedarse", pattern: "regular", past: "stayed", pp: "stayed", ing: "staying" },
];

/* ── Morfología ───────────────────────────────────────────────────── */

/** 3ª persona del presente simple: work→works, watch→watches, study→studies, have→has */
function thirdPerson(base: string): string {
  if (base === "have") return "has";
  if (/(s|sh|ch|x|z|o)$/.test(base)) return `${base}es`;
  if (/[^aeiou]y$/.test(base)) return `${base.slice(0, -1)}ies`;
  return `${base}s`;
}

/** conjugación completa de "be" por tiempo (único verbo con raíces distintas por persona) */
const BE_FORMS: Record<string, string[]> = {
  "present-simple": ["am", "are", "is", "are", "are", "are"],
  "past-simple": ["was", "were", "was", "were", "were", "were"],
};

function toPackVerb(d: EnVerbEntry): ConjugatorVerb {
  return {
    infinitive: d.infinitive,
    es: d.es,
    patternLabel: d.pattern === "irregular" ? "irregular" : "regular",
    infoEs: `pasado ${d.past} · participio ${d.pp} · -ing ${d.ing}${d.noteEs ? ` · ${d.noteEs}` : ""}`,
  };
}

const EN_VERBS: ConjugatorVerb[] = DATA.map(toPackVerb);

function entryOf(infinitive: string): EnVerbEntry | undefined {
  const q = infinitive.trim().toLowerCase();
  return DATA.find((d) => d.infinitive === q);
}

/* ── Pack ─────────────────────────────────────────────────────────── */

export const EN_CONJUGATOR: ConjugatorPack = {
  code: "en",
  tenses: TENSES,
  pronouns: PRONOUNS,
  popular: ["be", "have", "do", "go", "say", "get", "make", "know", "think", "work"],
  verbs: EN_VERBS,

  findVerb(infinitive: string) {
    const q = infinitive.trim().toLowerCase();
    return EN_VERBS.find((v) => v.infinitive === q);
  },

  searchVerbs(query: string, limit = 8) {
    const q = query.trim().toLowerCase();
    if (!q) return EN_VERBS.slice(0, limit);
    return EN_VERBS.filter((v) => v.infinitive.startsWith(q) || v.es.includes(q)).slice(0, limit);
  },

  conjugate(verb: ConjugatorVerb, tenseId: string): PackTenseResult {
    const entry = entryOf(verb.infinitive);
    if (!entry) return { tense: tenseId, forms: [] };
    const base = entry.infinitive;
    const irregular = entry.pattern === "irregular";
    const isBe = base === "be";

    switch (tenseId) {
      /* I work · you work · he/she/it works (-s/-es/-ies; have→has) */
      case "present-simple": {
        if (isBe) {
          const forms = BE_FORMS["present-simple"].map((f, i) => ({
            pronoun: PRONOUNS[i], form: f, irregular: true,
          }));
          return { tense: tenseId, forms };
        }
        const third = entry.third ?? thirdPerson(base);
        const forms: PackForm[] = PRONOUNS.map((p, i) => ({
          pronoun: p,
          form: i === 2 ? third : base,
          irregular: i === 2 && entry.third !== undefined,
        }));
        return { tense: tenseId, forms };
      }

      /* I am working · he is working (-ing tras am/are/is; be → am being) */
      case "present-continuous": {
        const be = ["am", "are", "is", "are", "are", "are"];
        const forms: PackForm[] = be.map((b, i) => ({
          pronoun: PRONOUNS[i], form: `${b} ${entry.ing}`, irregular: false,
        }));
        return { tense: tenseId, forms };
      }

      /* I worked (-ed/-d) · I went (irregulares) · be: was/were */
      case "past-simple": {
        if (isBe) {
          const forms = BE_FORMS["past-simple"].map((f, i) => ({
            pronoun: PRONOUNS[i], form: f, irregular: true,
          }));
          return { tense: tenseId, forms };
        }
        const forms: PackForm[] = PRONOUNS.map((p) => ({
          pronoun: p, form: entry.past, irregular,
        }));
        return { tense: tenseId, forms };
      }

      /* I have worked · he has worked (have/has + participio) */
      case "present-perfect": {
        const pp = isBe ? "been" : entry.pp;
        const irr = isBe ? true : irregular;
        const forms: PackForm[] = PRONOUNS.map((p, i) => ({
          pronoun: p, form: `${i === 2 ? "has" : "have"} ${pp}`, irregular: irr,
        }));
        return { tense: tenseId, forms };
      }

      /* I will work (base tras will, igual para todas las personas) */
      case "future-will": {
        const forms: PackForm[] = PRONOUNS.map((p) => ({
          pronoun: p, form: `will ${base}`, irregular: false,
        }));
        return { tense: tenseId, forms };
      }

      /* I would work (base tras would) */
      case "conditional-would": {
        const forms: PackForm[] = PRONOUNS.map((p) => ({
          pronoun: p, form: `would ${base}`, irregular: false,
        }));
        return { tense: tenseId, forms };
      }

      /* — · work! · — · let's work! · work! · — (solo 2ª persona + let's) */
      case "imperative": {
        const imp = isBe
          ? ["—", "be!", "—", "let's be!", "be!", "—"]
          : ["—", `${base}!`, "—", `let's ${base}!`, `${base}!`, "—"];
        const forms: PackForm[] = imp.map((f, i) => ({
          pronoun: PRONOUNS[i], form: f, irregular: false,
        }));
        return { tense: tenseId, forms };
      }

      default:
        return { tense: tenseId, forms: [] };
    }
  },

  formalNote(verb: ConjugatorVerb, tenseId: string) {
    const entry = entryOf(verb.infinitive);
    const b = verb.infinitive;
    const pp = entry?.pp ?? b;
    const ing = entry?.ing ?? `${b}ing`;
    switch (tenseId) {
      case "present-simple":
        return `El inglés no distingue tú y usted: *you* vale para todo. La cortesía se expresa con modales: **Could you ${b}…?** suena mucho más formal que el presente simple.`;
      case "present-continuous":
        return `Este tiempo no tiene variante de cortesía: la formalidad se marca con *please* y con los modales en las peticiones (p. ej. *Could you ${b} now, please?*).`;
      case "past-simple":
        return `El pasado simple es idéntico en cualquier registro. Para preguntas formales sobre experiencias prefiere el present perfect: **Have you ${pp}…?**`;
      case "present-perfect":
        return `El present perfect es el tiempo del registro formal (entrevistas, correos): *I have ${pp}…*. La pregunta cortés clásica es **Have you ever ${pp}…?**`;
      case "future-will":
        return `Para suavizar *will* en tono formal usa **would**: *I would like to ${b}* (me gustaría) es más cortés que *I will ${b}*.`;
      case "conditional-would":
        return `*Would* ya es de por sí la forma cortés: **Would you ${b}…?** equivale al condicional de cortesía del español; **Could you ${b}…?** es la petición más neutra.`;
      case "imperative":
        return `El imperativo a secas puede sonar brusco: añade *please* o pide con **Could you ${b}, please?** / **Would you mind ${ing}…?**`;
      default:
        return `El inglés no tiene forma de usted: la cortesía se expresa con los modales **could** y **would** (p. ej. *Could you ${b}, please?*).`;
    }
  },
};
