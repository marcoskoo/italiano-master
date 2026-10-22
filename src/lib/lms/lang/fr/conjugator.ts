/* ═══ v9.39 · FR · Conjugador (français de France) ════════════════════
   Pack de conjugación para la vista CONJUGADOR y el drill de verbos:
   7 tiempos (présent, passé composé, imparfait, futur simple,
   conditionnel présent, subjonctif présent, impératif), 6 pronombres
   (je/tu/il-elle/nous/vous/ils-elles) y 77 verbos frecuentes A1-B1:
   27 irregulares completos (être, avoir, aller, faire, venir, pouvoir,
   vouloir, devoir, prendre, dire…), -er con avoir y con être, -er con
   alternancia de radical (appeler, acheter, préférer), -ir del 2º
   grupo (-iss-), -ir tipo dormir, -re y 5 reflexivos con être.
   Passé composé con avoir/être + participio con acuerdo en être:
   allé(e) / allé(e)s. La elisión (j'aime, t'es) y los clíticos
   reflexivos (me lève) van dentro de la forma, como el motor IT.
   Implementa la interfaz ConjugatorPack de src/lib/lms/conjugators.ts;
   el wiring en BY_LANG lo hace el orquestador.                       */

import type {
  ConjugatorPack,
  ConjugatorVerb,
  PackForm,
  PackTense,
  PackTenseResult,
} from "../../conjugators";

/* ── Tiempos y pronombres ─────────────────────────────────────────── */

const TENSES: PackTense[] = [
  { id: "presente", label: "Présent", hint: "presente de indicativo" },
  { id: "passe-compose", label: "Passé composé", hint: "pretérito perfecto (avoir/être + participio)" },
  { id: "imparfait", label: "Imparfait", hint: "pretérito imperfecto (descripción y hábito)" },
  { id: "futur-simple", label: "Futur simple", hint: "futuro simple" },
  { id: "conditionnel-present", label: "Conditionnel présent", hint: "condicional presente" },
  { id: "subjonctif-present", label: "Subjonctif présent", hint: "subjuntivo presente (tras que)" },
  { id: "imperatif", label: "Impératif", hint: "imperativo (tu · nous · vous)" },
];

const PRONOUNS = ["je", "tu", "il/elle", "nous", "vous", "ils/elles"];
const SUBJ_PRONOUNS = ["que je", "que tu", "qu'il/elle", "que nous", "que vous", "qu'ils/elles"];

/* ── Datos de verbos ──────────────────────────────────────────────── */

type Group = "er" | "er-alt" | "ir-iss" | "ir2" | "re" | "e-type" | "irregular";
type Forms6 = readonly [string, string, string, string, string, string];

interface FrVerbEntry {
  infinitive: string;
  es: string;
  group: Group;
  aux: "avoir" | "être";
  pp: string;      // participio pasado (masc. singular)
  altStem?: string;  // er-alt: radical del singular y 3ª plural (lève, appelle…)
  futurStem?: string; // raíz de futuro si no sale del infinitivo (ser-, ir-, enverr-…)
  pres?: Forms6;     // irregulares: presente completo
  subj?: Forms6;     // irregulares: subjonctif completo
  imp?: readonly [string, string, string] | null; // impératif (tu, nous, vous); null = sin imperativo
  reflexive?: boolean;
}

const DATA: FrVerbEntry[] = [
  /* ── Irregulares (27) ── */
  { infinitive: "être", es: "ser/estar", group: "irregular", aux: "avoir", pp: "été", futurStem: "ser",
    pres: ["suis", "es", "est", "sommes", "êtes", "sont"],
    subj: ["sois", "sois", "soit", "soyons", "soyez", "soient"],
    imp: ["Sois", "Soyons", "Soyez"] },
  { infinitive: "avoir", es: "tener/haber", group: "irregular", aux: "avoir", pp: "eu", futurStem: "aur",
    pres: ["ai", "as", "a", "avons", "avez", "ont"],
    subj: ["aie", "aies", "ait", "ayons", "ayez", "aient"],
    imp: ["Aie", "Ayons", "Ayez"] },
  { infinitive: "faire", es: "hacer", group: "irregular", aux: "avoir", pp: "fait", futurStem: "fer",
    pres: ["fais", "fais", "fait", "faisons", "faites", "font"],
    subj: ["fasse", "fasses", "fasse", "fassions", "fassiez", "fassent"] },
  { infinitive: "aller", es: "ir", group: "irregular", aux: "être", pp: "allé", futurStem: "ir",
    pres: ["vais", "vas", "va", "allons", "allez", "vont"],
    subj: ["aille", "ailles", "aille", "allions", "alliez", "aillent"],
    imp: ["Va", "Allons", "Allez"] },
  { infinitive: "venir", es: "venir", group: "irregular", aux: "être", pp: "venu", futurStem: "viendr",
    pres: ["viens", "viens", "vient", "venons", "venez", "viennent"],
    subj: ["vienne", "viennes", "vienne", "venions", "veniez", "viennent"] },
  { infinitive: "devenir", es: "llegar a ser", group: "irregular", aux: "être", pp: "devenu", futurStem: "deviendr",
    pres: ["deviens", "deviens", "devient", "devenons", "devenez", "deviennent"],
    subj: ["devienne", "deviennes", "devienne", "devenions", "deveniez", "deviennent"] },
  { infinitive: "revenir", es: "volver/regresar", group: "irregular", aux: "être", pp: "revenu", futurStem: "reviendr",
    pres: ["reviens", "reviens", "revient", "revenons", "revenez", "reviennent"],
    subj: ["revienne", "reviennes", "revienne", "revenions", "reveniez", "reviennent"] },
  { infinitive: "tenir", es: "tener/sostener", group: "irregular", aux: "avoir", pp: "tenu", futurStem: "tiendr",
    pres: ["tiens", "tiens", "tient", "tenons", "tenez", "tiennent"],
    subj: ["tienne", "tiennes", "tienne", "tenions", "teniez", "tiennent"] },
  { infinitive: "pouvoir", es: "poder", group: "irregular", aux: "avoir", pp: "pu", futurStem: "pourr",
    pres: ["peux", "peux", "peut", "pouvons", "pouvez", "peuvent"],
    subj: ["puisse", "puisses", "puisse", "puissions", "puissiez", "puissent"],
    imp: null },
  { infinitive: "vouloir", es: "querer", group: "irregular", aux: "avoir", pp: "voulu", futurStem: "voudr",
    pres: ["veux", "veux", "veut", "voulons", "voulez", "veulent"],
    subj: ["veuille", "veuilles", "veuille", "voulions", "vouliez", "veuillent"],
    imp: null },
  { infinitive: "devoir", es: "deber/tener que", group: "irregular", aux: "avoir", pp: "dû", futurStem: "devr",
    pres: ["dois", "dois", "doit", "devons", "devez", "doivent"],
    subj: ["doive", "doives", "doive", "devions", "deviez", "doivent"],
    imp: null },
  { infinitive: "savoir", es: "saber", group: "irregular", aux: "avoir", pp: "su", futurStem: "saur",
    pres: ["sais", "sais", "sait", "savons", "savez", "savent"],
    subj: ["sache", "saches", "sache", "sachions", "sachiez", "sachent"],
    imp: ["Sache", "Sachons", "Sachez"] },
  { infinitive: "prendre", es: "tomar/coger", group: "irregular", aux: "avoir", pp: "pris", futurStem: "prendr",
    pres: ["prends", "prends", "prend", "prenons", "prenez", "prennent"],
    subj: ["prenne", "prennes", "prenne", "prenions", "preniez", "prennent"] },
  { infinitive: "comprendre", es: "entender", group: "irregular", aux: "avoir", pp: "compris", futurStem: "comprendr",
    pres: ["comprends", "comprends", "comprend", "comprenons", "comprenez", "comprennent"],
    subj: ["comprenne", "comprennes", "comprenne", "comprenions", "compreniez", "comprennent"] },
  { infinitive: "apprendre", es: "aprender", group: "irregular", aux: "avoir", pp: "appris", futurStem: "apprendr",
    pres: ["apprends", "apprends", "apprend", "apprenons", "apprenez", "apprennent"],
    subj: ["apprenne", "apprennes", "apprenne", "apprenions", "appreniez", "apprennent"] },
  { infinitive: "mettre", es: "poner(se)", group: "irregular", aux: "avoir", pp: "mis", futurStem: "mettr",
    pres: ["mets", "mets", "met", "mettons", "mettez", "mettent"],
    subj: ["mette", "mettes", "mette", "mettions", "mettiez", "mettent"] },
  { infinitive: "dire", es: "decir", group: "irregular", aux: "avoir", pp: "dit", futurStem: "dir",
    pres: ["dis", "dis", "dit", "disons", "dites", "disent"],
    subj: ["dise", "dises", "dise", "disions", "disiez", "disent"] },
  { infinitive: "voir", es: "ver", group: "irregular", aux: "avoir", pp: "vu", futurStem: "verr",
    pres: ["vois", "vois", "voit", "voyons", "voyez", "voient"],
    subj: ["voie", "voies", "voie", "voyions", "voyiez", "voient"] },
  { infinitive: "boire", es: "beber", group: "irregular", aux: "avoir", pp: "bu", futurStem: "boir",
    pres: ["bois", "bois", "boit", "buvons", "buvez", "boivent"],
    subj: ["boive", "boives", "boive", "buvions", "buviez", "boivent"] },
  { infinitive: "lire", es: "leer", group: "irregular", aux: "avoir", pp: "lu", futurStem: "lir",
    pres: ["lis", "lis", "lit", "lisons", "lisez", "lisent"],
    subj: ["lise", "lises", "lise", "lisions", "lisiez", "lisent"] },
  { infinitive: "écrire", es: "escribir", group: "irregular", aux: "avoir", pp: "écrit", futurStem: "écrir",
    pres: ["écris", "écris", "écrit", "écrivons", "écrivez", "écrivent"],
    subj: ["écrive", "écrives", "écrive", "écrivions", "écriviez", "écrivent"] },
  { infinitive: "recevoir", es: "recibir", group: "irregular", aux: "avoir", pp: "reçu", futurStem: "recevr",
    pres: ["reçois", "reçois", "reçoit", "recevons", "recevez", "reçoivent"],
    subj: ["reçoive", "reçoives", "reçoive", "recevions", "receviez", "reçoivent"] },
  { infinitive: "connaître", es: "conocer (a alguien)", group: "irregular", aux: "avoir", pp: "connu", futurStem: "connaîtr",
    pres: ["connais", "connais", "connaît", "connaissons", "connaissez", "connaissent"],
    subj: ["connaisse", "connaisses", "connaisse", "connaissions", "connaissiez", "connaissent"] },
  { infinitive: "vivre", es: "vivir", group: "irregular", aux: "avoir", pp: "vécu", futurStem: "vivr",
    pres: ["vis", "vis", "vit", "vivons", "vivez", "vivent"],
    subj: ["vive", "vives", "vive", "vivions", "viviez", "vivent"] },
  { infinitive: "envoyer", es: "enviar", group: "irregular", aux: "avoir", pp: "envoyé", futurStem: "enverr",
    pres: ["envoie", "envoies", "envoie", "envoyons", "envoyez", "envoient"],
    subj: ["envoie", "envoies", "envoie", "envoyions", "envoyiez", "envoient"] },
  { infinitive: "mourir", es: "morir", group: "irregular", aux: "être", pp: "mort", futurStem: "mourr",
    pres: ["meurs", "meurs", "meurt", "mourons", "mourez", "meurent"],
    subj: ["meure", "meures", "meure", "mourions", "mouriez", "meurent"] },
  { infinitive: "naître", es: "nacer", group: "irregular", aux: "être", pp: "né", futurStem: "naîtr",
    pres: ["nais", "nais", "naît", "naissons", "naissez", "naissent"],
    subj: ["naisse", "naisses", "naisse", "naissions", "naissiez", "naissent"] },

  /* ── Tipo ouvrir: presente en -e, participio en -ert (2) ── */
  { infinitive: "ouvrir", es: "abrir", group: "e-type", aux: "avoir", pp: "ouvert" },
  { infinitive: "offrir", es: "ofrecer", group: "e-type", aux: "avoir", pp: "offert" },

  /* ── -ir tipo dormir: singular sin la consonante final (5) ── */
  { infinitive: "partir", es: "irse/partir", group: "ir2", aux: "être", pp: "parti" },
  { infinitive: "sortir", es: "salir", group: "ir2", aux: "être", pp: "sorti" },
  { infinitive: "dormir", es: "dormir", group: "ir2", aux: "avoir", pp: "dormi" },
  { infinitive: "sentir", es: "sentir/oler", group: "ir2", aux: "avoir", pp: "senti" },
  { infinitive: "servir", es: "servir", group: "ir2", aux: "avoir", pp: "servi" },

  /* ── -ir del 2º grupo con -iss- (5) ── */
  { infinitive: "finir", es: "terminar", group: "ir-iss", aux: "avoir", pp: "fini" },
  { infinitive: "choisir", es: "elegir", group: "ir-iss", aux: "avoir", pp: "choisi" },
  { infinitive: "réussir", es: "lograr/tener éxito", group: "ir-iss", aux: "avoir", pp: "réussi" },
  { infinitive: "réfléchir", es: "pensar/reflexionar", group: "ir-iss", aux: "avoir", pp: "réfléchi" },
  { infinitive: "grandir", es: "crecer", group: "ir-iss", aux: "avoir", pp: "grandi" },

  /* ── -re regulares (7) ── */
  { infinitive: "vendre", es: "vender", group: "re", aux: "avoir", pp: "vendu" },
  { infinitive: "attendre", es: "esperar", group: "re", aux: "avoir", pp: "attendu" },
  { infinitive: "entendre", es: "oír", group: "re", aux: "avoir", pp: "entendu" },
  { infinitive: "répondre", es: "responder", group: "re", aux: "avoir", pp: "répondu" },
  { infinitive: "perdre", es: "perder", group: "re", aux: "avoir", pp: "perdu" },
  { infinitive: "rendre", es: "devolver", group: "re", aux: "avoir", pp: "rendu" },
  { infinitive: "descendre", es: "bajar", group: "re", aux: "être", pp: "descendu" },

  /* ── -er regulares con avoir (17) ── */
  { infinitive: "parler", es: "hablar", group: "er", aux: "avoir", pp: "parlé" },
  { infinitive: "aimer", es: "amar/gustar", group: "er", aux: "avoir", pp: "aimé" },
  { infinitive: "manger", es: "comer", group: "er", aux: "avoir", pp: "mangé" },
  { infinitive: "travailler", es: "trabajar", group: "er", aux: "avoir", pp: "travaillé" },
  { infinitive: "étudier", es: "estudiar", group: "er", aux: "avoir", pp: "étudié" },
  { infinitive: "écouter", es: "escuchar", group: "er", aux: "avoir", pp: "écouté" },
  { infinitive: "regarder", es: "mirar", group: "er", aux: "avoir", pp: "regardé" },
  { infinitive: "habiter", es: "vivir/residir", group: "er", aux: "avoir", pp: "habité" },
  { infinitive: "chanter", es: "cantar", group: "er", aux: "avoir", pp: "chanté" },
  { infinitive: "danser", es: "bailar", group: "er", aux: "avoir", pp: "dansé" },
  { infinitive: "jouer", es: "jugar/tocar", group: "er", aux: "avoir", pp: "joué" },
  { infinitive: "penser", es: "pensar", group: "er", aux: "avoir", pp: "pensé" },
  { infinitive: "trouver", es: "encontrar", group: "er", aux: "avoir", pp: "trouvé" },
  { infinitive: "donner", es: "dar", group: "er", aux: "avoir", pp: "donné" },
  { infinitive: "demander", es: "pedir/preguntar", group: "er", aux: "avoir", pp: "demandé" },
  { infinitive: "chercher", es: "buscar", group: "er", aux: "avoir", pp: "cherché" },
  { infinitive: "commencer", es: "empezar", group: "er", aux: "avoir", pp: "commencé" },

  /* ── -er de movimiento/estado con être + acuerdo (6) ── */
  { infinitive: "arriver", es: "llegar", group: "er", aux: "être", pp: "arrivé" },
  { infinitive: "rester", es: "quedarse", group: "er", aux: "être", pp: "resté" },
  { infinitive: "tomber", es: "caer", group: "er", aux: "être", pp: "tombé" },
  { infinitive: "monter", es: "subir", group: "er", aux: "être", pp: "monté" },
  { infinitive: "passer", es: "pasar (por)", group: "er", aux: "être", pp: "passé" },
  { infinitive: "retourner", es: "regresar", group: "er", aux: "être", pp: "retourné" },

  /* ── -er con alternancia de radical (3) ── */
  { infinitive: "appeler", es: "llamar", group: "er-alt", aux: "avoir", pp: "appelé", altStem: "appell", futurStem: "appeller" },
  { infinitive: "acheter", es: "comprar", group: "er-alt", aux: "avoir", pp: "acheté", altStem: "achèt", futurStem: "achèter" },
  { infinitive: "préférer", es: "preferir", group: "er-alt", aux: "avoir", pp: "préféré", altStem: "préfèr" },

  /* ── Reflexivos con être (5) ── */
  { infinitive: "se lever", es: "levantarse", group: "er-alt", aux: "être", pp: "levé", altStem: "lèv", futurStem: "lèver", reflexive: true },
  { infinitive: "se laver", es: "lavarse", group: "er", aux: "être", pp: "lavé", reflexive: true },
  { infinitive: "s'appeler", es: "llamarse", group: "er-alt", aux: "être", pp: "appelé", altStem: "appell", futurStem: "appeller", reflexive: true },
  { infinitive: "se coucher", es: "acostarse", group: "er", aux: "être", pp: "couché", reflexive: true },
  { infinitive: "se réveiller", es: "despertarse", group: "er", aux: "être", pp: "réveillé", reflexive: true },
];

/* ── Morfología ───────────────────────────────────────────────────── */

type SimpleTense = "presente" | "imparfait" | "futur-simple" | "conditionnel-present" | "subjonctif-present" | "imperatif";

const FUT_ENDINGS: Forms6 = ["ai", "as", "a", "ons", "ez", "ont"];
const COND_ENDINGS: Forms6 = ["ais", "ais", "ait", "ions", "iez", "aient"];

const AUX_PRESENT: Record<"avoir" | "être", Forms6> = {
  avoir: ["ai", "as", "a", "avons", "avez", "ont"],
  être: ["suis", "es", "est", "sommes", "êtes", "sont"],
};

const CLITICS = ["me", "te", "se", "nous", "vous", "se"];
const REFLEXIVE_IMP = ["", "toi", "", "nous", "vous", ""];

const PATTERN_LABEL: Record<Group, string> = {
  "er": "-er régulier",
  "er-alt": "-er (alternance)",
  "ir-iss": "-ir régulier (-iss-)",
  "ir2": "-ir (type dormir)",
  "re": "-re régulier",
  "e-type": "irrégulier (type ouvrir)",
  "irregular": "irrégulier",
};

/** infinitivo sin el pronombre reflexivo (se lever → lever) */
function baseInfinitive(v: FrVerbEntry): string {
  return v.reflexive ? v.infinitive.replace(/^s'|^se /, "") : v.infinitive;
}

/** radical: infinitivo sin la terminación (parler → parl) */
function stemOf(v: FrVerbEntry): string {
  return baseInfinitive(v).slice(0, -2);
}

/** une dos palabras con elisión: me + appelle → m'appelle · te + es → t'es */
function elide(left: string, right: string): string {
  if (/[aeiou]$/.test(left) && /^[aeiouhéèêàâîôû]/.test(right)) return `${left.slice(0, -1)}'${right}`;
  return `${left} ${right}`;
}

/** apóstrofo de je: ai → j'ai · aime → j'aime · parle → parle */
function jeElision(form: string): string {
  return /^[aeiouhéèêàâîôû]/.test(form) ? `j'${form}` : form;
}

function cap(s: string): string {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

/** nosotros del presente -er con g → -eons (mangeons) y c → -çons (commençons) */
function nousEr(rad: string): string {
  if (rad.endsWith("g")) return `${rad}eons`;
  if (rad.endsWith("c")) return `${rad.slice(0, -1)}çons`;
  return `${rad}ons`;
}

/** presente por grupo (los irregulares traen las 6 formas) */
function presentForms(v: FrVerbEntry): Forms6 {
  if (v.group === "irregular" && v.pres) return v.pres;
  const rad = stemOf(v);
  switch (v.group) {
    case "er":
      return [`${rad}e`, `${rad}es`, `${rad}e`, nousEr(rad), `${rad}ez`, `${rad}ent`];
    case "er-alt": {
      const alt = v.altStem ?? rad;
      return [`${alt}e`, `${alt}es`, `${alt}e`, nousEr(rad), `${rad}ez`, `${alt}ent`];
    }
    case "ir-iss":
      return [`${rad}is`, `${rad}is`, `${rad}it`, `${rad}issons`, `${rad}issez`, `${rad}issent`];
    case "ir2": {
      const sing = rad.slice(0, -1); // dorm → dor, part → par
      return [`${sing}s`, `${sing}s`, `${sing}t`, `${rad}ons`, `${rad}ez`, `${rad}ent`];
    }
    case "re":
      return [`${rad}s`, `${rad}s`, rad, `${rad}ons`, `${rad}ez`, `${rad}ent`];
    case "e-type":
      return [`${rad}e`, `${rad}es`, `${rad}e`, `${rad}ons`, `${rad}ez`, `${rad}ent`];
    default:
      return v.pres ?? [rad, rad, rad, rad, rad, rad];
  }
}

/** subjonctif présent por grupo (los irregulares traen las 6 formas) */
function subjunctiveForms(v: FrVerbEntry): Forms6 {
  if (v.group === "irregular" && v.subj) return v.subj;
  const rad = stemOf(v);
  switch (v.group) {
    case "er":
      // g/c ya son suaves ante i: mangions, commencions (sin e ni ç)
      return [`${rad}e`, `${rad}es`, `${rad}e`, `${rad}ions`, `${rad}iez`, `${rad}ent`];
    case "er-alt": {
      const alt = v.altStem ?? rad;
      return [`${alt}e`, `${alt}es`, `${alt}e`, `${rad}ions`, `${rad}iez`, `${alt}ent`];
    }
    case "ir-iss":
      return [`${rad}isse`, `${rad}isses`, `${rad}isse`, `${rad}issions`, `${rad}issiez`, `${rad}issent`];
    case "ir2":
    case "re":
    case "e-type":
      return [`${rad}e`, `${rad}es`, `${rad}e`, `${rad}ions`, `${rad}iez`, `${rad}ent`];
    default:
      return v.subj ?? [rad, rad, rad, rad, rad, rad];
  }
}

/** imparfait por grupo: être es la única raíz propia; el resto sale del
    nous (finissons → finiss, faisons → fais). En -ger/-cer la e/ç solo va
    ante -ais: je mangeais / nous mangions, je commençais / nous commencions. */
function imparfaitForms(v: FrVerbEntry): Forms6 {
  if (v.infinitive === "être") return ["étais", "étais", "était", "étions", "étiez", "étaient"];
  if (v.group === "er" || v.group === "er-alt") {
    const s = stemOf(v);
    if (s.endsWith("g")) {
      return [`${s}eais`, `${s}eais`, `${s}eait`, `${s}ions`, `${s}iez`, `${s}eaient`];
    }
    if (s.endsWith("c")) {
      const c = s.slice(0, -1);
      return [`${c}çais`, `${c}çais`, `${c}çait`, `${s}ions`, `${s}iez`, `${c}çaient`];
    }
    return [`${s}ais`, `${s}ais`, `${s}ait`, `${s}ions`, `${s}iez`, `${s}aient`];
  }
  let rad: string;
  switch (v.group) {
    case "ir-iss":
      rad = `${stemOf(v)}iss`; // finissais / finissions
      break;
    case "ir2":
    case "re":
    case "e-type":
      rad = stemOf(v); // dormais / dormions
      break;
    default:
      rad = (v.pres?.[3] ?? stemOf(v)).slice(0, -3); // faisons → fais, buvons → buv
  }
  return [`${rad}ais`, `${rad}ais`, `${rad}ait`, `${rad}ions`, `${rad}iez`, `${rad}aient`];
}

/** raíz de futuro: vendre → vendr · parler → parler · être → ser */
function futurStem(v: FrVerbEntry): string {
  if (v.futurStem) return v.futurStem;
  const base = baseInfinitive(v);
  return v.group === "re" ? base.slice(0, -1) : base;
}

/** impératif (tu, nous, vous); null = verbo sin imperativo (pouvoir…) */
function imperativeForms(v: FrVerbEntry): readonly [string, string, string] | null {
  if (v.imp === null) return null;
  if (v.imp) return v.imp;
  const pres = presentForms(v);
  // el tu pierde la s final solo si acaba en -es (Parle, Ouvre; no Finis, Vends)
  const tu = pres[1].endsWith("es") ? pres[1].slice(0, -1) : pres[1];
  return [tu, pres[3], pres[4]];
}

/** gerundio (en parlant) con las 3 excepciones del participio presente */
function gerundOf(v: FrVerbEntry): string {
  const EXC: Record<string, string> = { "être": "étant", "avoir": "ayant", "savoir": "sachant" };
  const participe = EXC[v.infinitive] ?? `${presentForms(v)[3].slice(0, -3)}ant`;
  return v.reflexive ? `en ${elide("se", participe)}` : `en ${participe}`;
}

/** marca las formas irregulares (se pintan en rojo en la vista) */
function irregularFlag(v: FrVerbEntry, tense: SimpleTense, i: number): boolean {
  switch (v.group) {
    case "irregular":
      return true;
    case "e-type":
    case "ir2":
      return tense === "presente" || tense === "subjonctif-present" || tense === "imperatif";
    case "er-alt":
      if (tense === "presente" || tense === "subjonctif-present") return i !== 3 && i !== 4;
      if (tense === "imperatif") return true;
      if (tense === "futur-simple" || tense === "conditionnel-present") {
        return v.futurStem !== undefined && v.futurStem !== baseInfinitive(v); // lèverai sí, préférerai no
      }
      return false;
    default:
      return false;
  }
}

/** forma final de la persona: clítico reflexivo (me lève) o elisión j' */
function personForm(v: FrVerbEntry, f: string, i: number): string {
  if (v.reflexive) return elide(CLITICS[i], f);
  return i === 0 ? jeElision(f) : f;
}

function conjugateEntry(v: FrVerbEntry, tenseId: string): PackTenseResult {
  switch (tenseId) {
    /* je parle · tu parles · il/elle parle… (j'ai, j'aime con elisión) */
    case "presente": {
      const forms: PackForm[] = presentForms(v).map((f, i) => ({
        pronoun: PRONOUNS[i],
        form: personForm(v, f, i),
        irregular: irregularFlag(v, "presente", i),
      }));
      return { tense: tenseId, forms };
    }

    /* j'ai parlé · je suis allé(e) · je me suis lavé(e) (être con acuerdo) */
    case "passe-compose": {
      const aux = AUX_PRESENT[v.aux];
      const forms: PackForm[] = aux.map((a, i) => {
        const accord = v.aux === "être"
          ? (i < 3 ? `${v.pp}(e)` : `${v.pp}(e)s`)
          : v.pp;
        const head = v.reflexive ? elide(CLITICS[i], a) : i === 0 ? jeElision(a) : a;
        return { pronoun: PRONOUNS[i], form: `${head} ${accord}`, irregular: true };
      });
      return { tense: tenseId, forms };
    }

    /* je parlais · je mangeais / nous mangions · j'étais */
    case "imparfait": {
      const forms: PackForm[] = imparfaitForms(v).map((f, i) => ({
        pronoun: PRONOUNS[i],
        form: personForm(v, f, i),
        irregular: irregularFlag(v, "imparfait", i),
      }));
      return { tense: tenseId, forms };
    }

    /* je parlerai · j'irai · nous serons */
    case "futur-simple": {
      const rad = futurStem(v);
      const forms: PackForm[] = FUT_ENDINGS.map((e, i) => ({
        pronoun: PRONOUNS[i],
        form: personForm(v, rad + e, i),
        irregular: irregularFlag(v, "futur-simple", i),
      }));
      return { tense: tenseId, forms };
    }

    /* je parlerais · je voudrais (misma raíz que el futuro) */
    case "conditionnel-present": {
      const rad = futurStem(v);
      const forms: PackForm[] = COND_ENDINGS.map((e, i) => ({
        pronoun: PRONOUNS[i],
        form: personForm(v, rad + e, i),
        irregular: irregularFlag(v, "conditionnel-present", i),
      }));
      return { tense: tenseId, forms };
    }

    /* que je parle · que tu finisses · qu'il aille (pronombre con que) */
    case "subjonctif-present": {
      const forms: PackForm[] = subjunctiveForms(v).map((f, i) => ({
        pronoun: SUBJ_PRONOUNS[i],
        form: personForm(v, f, i),
        irregular: irregularFlag(v, "subjonctif-present", i),
      }));
      return { tense: tenseId, forms };
    }

    /* — · Parle ! · — · Parlons ! · Parlez ! · — (sin pronombre) */
    case "imperatif": {
      const imp = imperativeForms(v);
      const forms: PackForm[] = PRONOUNS.map((p, i) => {
        let form = "—";
        if (imp) {
          if (i === 1) form = imp[0];
          else if (i === 3) form = imp[1];
          else if (i === 4) form = imp[2];
        }
        if (form !== "—") {
          form = v.reflexive ? `${cap(form)}-${REFLEXIVE_IMP[i]} !` : `${cap(form)} !`;
        }
        return { pronoun: p, form, irregular: irregularFlag(v, "imperatif", i) };
      });
      return { tense: tenseId, forms };
    }

    default:
      return { tense: tenseId, forms: [] };
  }
}

/* ── Pack ─────────────────────────────────────────────────────────── */

function toPackVerb(v: FrVerbEntry): ConjugatorVerb {
  return {
    infinitive: v.infinitive,
    es: v.es,
    patternLabel: PATTERN_LABEL[v.group],
    infoEs: `auxiliar ${v.aux}${v.aux === "être" ? " (acuerdo)" : ""} · participio ${v.pp} · gerundio ${gerundOf(v)}`,
  };
}

const FR_VERBS: ConjugatorVerb[] = DATA.map(toPackVerb);

function entryOf(infinitive: string): FrVerbEntry | undefined {
  const q = infinitive.trim().toLowerCase();
  return DATA.find((v) => v.infinitive === q);
}

export const FR_CONJUGATOR: ConjugatorPack = {
  code: "fr",
  tenses: TENSES,
  pronouns: PRONOUNS,
  popular: ["être", "avoir", "faire", "aller", "pouvoir", "vouloir", "devoir", "venir", "prendre", "parler"],
  verbs: FR_VERBS,

  findVerb(infinitive: string) {
    const q = infinitive.trim().toLowerCase();
    return FR_VERBS.find((v) => v.infinitive === q);
  },

  searchVerbs(query: string, limit = 8) {
    const q = query.trim().toLowerCase();
    if (!q) return FR_VERBS.slice(0, limit);
    return FR_VERBS
      .filter((v) => v.infinitive.startsWith(q) || v.infinitive.replace(/^s'|^se /, "").startsWith(q) || v.es.includes(q))
      .slice(0, limit);
  },

  conjugate(verb: ConjugatorVerb, tenseId: string): PackTenseResult {
    const entry = entryOf(verb.infinitive);
    if (!entry) return { tense: tenseId, forms: [] };
    return conjugateEntry(entry, tenseId);
  },

  formalNote(verb: ConjugatorVerb, tenseId: string) {
    const entry = entryOf(verb.infinitive);
    if (!entry) return "Verbo no encontrado en el pack de francés.";
    const res = conjugateEntry(entry, tenseId);
    const vousForm = res.forms[4]?.form ?? "—";
    if (tenseId === "imperatif" && vousForm === "—") {
      return `Este verbo casi no se usa en imperativo. Para pedir algo con cortesía usa el condicional: «pourriez-vous… ?» (¿podría usted…?) o «voudriez-vous… ?» (¿le gustaría…?).`;
    }
    if (tenseId === "imperatif") {
      const tuForm = res.forms[1]?.form ?? "—";
      return `La orden cortés se forma con **vous**: **${vousForm}** La forma de tu (**${tuForm}**) queda para íntimos y niños; añade «s'il vous plaît» para suavizar cualquier orden.`;
    }
    const que = tenseId === "subjonctif-present" ? "que " : "";
    return `Para el registro formal usa **vous** con el verbo en 2ª persona plural (aunque hables con una sola persona): **${que}vous ${vousForm}**. Es la norma con desconocidos, en tiendas, cafés y en el trabajo; el tuteo con **tu** queda para la familia y los amigos. Las formas irregulares se pintan en rojo.`;
  },
};
