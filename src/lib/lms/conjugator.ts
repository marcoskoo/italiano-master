/* ── Coniugatore: verb conjugation engine ────────────────────────── */

export type TenseId =
  | "presente" | "passato_prossimo" | "imperfetto" | "futuro"
  | "condizionale" | "congiuntivo" | "imperativo";

export const TENSES: { id: TenseId; label: string; hint: string }[] = [
  { id: "presente", label: "Presente", hint: "presente indicativo" },
  { id: "passato_prossimo", label: "Passato prossimo", hint: "pretérito perfecto compuesto" },
  { id: "imperfetto", label: "Imperfetto", hint: "pretérito imperfecto" },
  { id: "futuro", label: "Futuro", hint: "futuro simple" },
  { id: "condizionale", label: "Condizionale", hint: "condicional" },
  { id: "congiuntivo", label: "Congiuntivo", hint: "subjuntivo presente" },
  { id: "imperativo", label: "Imperativo", hint: "imperativo" },
];

export const PRONOUNS = ["io", "tu", "lui/lei", "noi", "voi", "loro"];
export const FORMAL_PRONOUN = "Lei";

type Forms6 = [string, string, string, string, string, string];

interface VerbEntry {
  infinitive: string;
  es: string;
  pattern: "are" | "ere" | "ire" | "ire-isc" | "irregular";
  auxiliary: "avere" | "essere";
  participle: string;
  gerund: string;
  overrides?: Partial<Record<TenseId, Partial<Forms6>>>;
}

/* Irregular essentials */
const ESSERE_PP: Forms6 = ["sono andato/a", "sei andato/a", "è andato/a", "siamo andati/e", "siete andati/e", "sono andati/e"];

const VERBS: VerbEntry[] = [
  { infinitive: "essere", es: "ser/estar", pattern: "irregular", auxiliary: "essere", participle: "stato", gerund: "essendo",
    overrides: {
      presente: ["sono", "sei", "è", "siamo", "siete", "sono"],
      imperfetto: ["ero", "eri", "era", "eravamo", "eravate", "erano"],
      futuro: ["sarò", "sarai", "sarà", "saremo", "sarete", "saranno"],
      condizionale: ["sarei", "saresti", "sarebbe", "saremmo", "sareste", "sarebbero"],
      congiuntivo: ["sia", "sia", "sia", "siamo", "siate", "siano"],
      imperativo: ["sii", "sia", "sia", "siamo", "siate", "siano"],
    } },
  { infinitive: "avere", es: "tener/haber", pattern: "irregular", auxiliary: "avere", participle: "avuto", gerund: "avendo",
    overrides: {
      presente: ["ho", "hai", "ha", "abbiamo", "avete", "hanno"],
      imperfetto: ["avevo", "avevi", "aveva", "avevamo", "avevate", "avevano"],
      futuro: ["avrò", "avrai", "avrà", "avremo", "avrete", "avranno"],
      condizionale: ["avrei", "avresti", "avrebbe", "avremmo", "avreste", "avrebbero"],
      congiuntivo: ["abbia", "abbia", "abbia", "abbiamo", "abbiate", "abbiano"],
      imperativo: ["abbi", "abbia", "abbia", "abbiamo", "abbiate", "abbiano"],
    } },
  { infinitive: "fare", es: "hacer", pattern: "irregular", auxiliary: "avere", participle: "fatto", gerund: "facendo",
    overrides: {
      presente: ["faccio", "fai", "fa", "facciamo", "fate", "fanno"],
      imperfetto: ["facevo", "facevi", "faceva", "facevamo", "facevate", "facevano"],
      futuro: ["farò", "farai", "farà", "faremo", "farete", "faranno"],
      condizionale: ["farei", "faresti", "farebbe", "faremmo", "fareste", "farebbero"],
      congiuntivo: ["faccia", "faccia", "faccia", "facciamo", "facciate", "facciano"],
      imperativo: ["fai", "faccia", "faccia", "facciamo", "fate", "facciano"],
    } },
  { infinitive: "andare", es: "ir", pattern: "irregular", auxiliary: "essere", participle: "andato", gerund: "andando",
    overrides: {
      presente: ["vado", "vai", "va", "andiamo", "andate", "vanno"],
      futuro: ["andrò", "andrai", "andrà", "andremo", "andrete", "andranno"],
      condizionale: ["andrei", "andresti", "andrebbe", "andremmo", "andreste", "andrebbero"],
      congiuntivo: ["vada", "vada", "vada", "andiamo", "andiate", "vadano"],
      imperativo: ["vai", "vada", "vada", "andiamo", "andate", "vadano"],
    } },
  { infinitive: "venire", es: "venir", pattern: "irregular", auxiliary: "essere", participle: "venuto", gerund: "venendo",
    overrides: {
      presente: ["vengo", "vieni", "viene", "veniamo", "venite", "vengono"],
      imperfetto: ["venivo", "venivi", "veniva", "venivamo", "venivate", "venivano"],
      futuro: ["verrò", "verrai", "verrà", "verremo", "verrete", "verranno"],
      condizionale: ["verrei", "verresti", "verrebbe", "verremmo", "verreste", "verrebbero"],
      congiuntivo: ["venga", "venga", "venga", "veniamo", "veniate", "vengano"],
      imperativo: ["vieni", "venga", "venga", "veniamo", "venite", "vengano"],
    } },
  { infinitive: "stare", es: "estar/quedarse", pattern: "irregular", auxiliary: "essere", participle: "stato", gerund: "stando",
    overrides: {
      presente: ["sto", "stai", "sta", "stiamo", "state", "stanno"],
      imperfetto: ["stavo", "stavi", "stava", "stavamo", "stavate", "stavano"],
      futuro: ["starò", "starai", "starà", "staremo", "starete", "staranno"],
      condizionale: ["starei", "staresti", "starebbe", "staremmo", "stareste", "starebbero"],
      congiuntivo: ["stia", "stia", "stia", "stiamo", "stiate", "stiano"],
      imperativo: ["stai", "stia", "stia", "stiamo", "state", "stiano"],
    } },
  { infinitive: "dare", es: "dar", pattern: "irregular", auxiliary: "avere", participle: "dato", gerund: "dando",
    overrides: {
      presente: ["do", "dai", "dà", "diamo", "date", "danno"],
      futuro: ["darò", "darai", "darà", "daremo", " darete", "daranno"],
      condizionale: ["darei", "daresti", "darebbe", "daremmo", "dareste", "darebbero"],
      congiuntivo: ["dia", "dia", "dia", "diamo", "diate", "diano"],
      imperativo: ["dai", "dia", "dia", "diamo", "date", "diano"],
    } },
  { infinitive: "dire", es: "decir", pattern: "irregular", auxiliary: "avere", participle: "detto", gerund: "dicendo",
    overrides: {
      presente: ["dico", "dici", "dice", "diciamo", "dite", "dicono"],
      imperfetto: ["dicevo", "dicevi", "diceva", "dicevamo", "dicevate", "dicevano"],
      futuro: ["dirò", "dirai", "dirà", "diremo", "direte", "diranno"],
      condizionale: ["direi", "diresti", "direbbe", "diremmo", "direste", "direbbero"],
      congiuntivo: ["dica", "dica", "dica", "diciamo", "diciate", "dicano"],
      imperativo: ["di'", "dica", "dica", "diciamo", "dite", "dicano"],
    } },
  { infinitive: "bere", es: "beber", pattern: "irregular", auxiliary: "avere", participle: "bevuto", gerund: "bevendo",
    overrides: {
      presente: ["bevo", "bevi", "beve", "beviamo", "bevete", "bevono"],
      imperfetto: ["bevevo", "bevevi", "beveva", "bevevamo", "bevevate", "bevevano"],
      futuro: ["berrò", "berrai", "berrà", "berremo", "berrete", "berranno"],
      condizionale: ["berrei", "berresti", "berrebbe", "berremmo", "berreste", "berrebbero"],
      congiuntivo: ["beva", "beva", "beva", "beviamo", "beviate", "bevano"],
      imperativo: ["bevi", "beva", "beva", "beviamo", "bevete", "bevano"],
    } },
  { infinitive: "potere", es: "poder", pattern: "irregular", auxiliary: "avere", participle: "potuto", gerund: "potendo",
    overrides: {
      presente: ["posso", "puoi", "può", "possiamo", "potete", "possono"],
      imperfetto: ["potevo", "potevi", "poteva", "potevamo", "potevate", "potevano"],
      futuro: ["potrò", "potrai", "potrà", "potremo", "potrete", "potranno"],
      condizionale: ["potrei", "potresti", "potrebbe", "potremmo", "potreste", "potrebbero"],
      congiuntivo: ["possa", "possa", "possa", "possiamo", "possiate", "possano"],
    } },
  { infinitive: "volere", es: "querer", pattern: "irregular", auxiliary: "avere", participle: "voluto", gerund: "volendo",
    overrides: {
      presente: ["voglio", "vuoi", "vuole", "vogliamo", "volete", "vogliono"],
      imperfetto: ["volevo", "volevi", "voleva", "volevamo", "volevate", "volevano"],
      futuro: ["vorrò", "vorrai", "vorrà", "vorremo", "vorrete", "voranno"],
      condizionale: ["vorrei", "vorresti", "vorrebbe", "vorremmo", "vorreste", "vorrebbero"],
      congiuntivo: ["voglia", "voglia", "voglia", "vogliamo", "vogliate", "vogliano"],
    } },
  { infinitive: "dovere", es: "deber/tener que", pattern: "irregular", auxiliary: "avere", participle: "dovuto", gerund: "dovendo",
    overrides: {
      presente: ["devo", "devi", "deve", "dobbiamo", "dovete", "devono"],
      imperfetto: ["dovevo", "dovevi", "doveva", "dovevamo", "dovevate", "dovevano"],
      futuro: ["dovrò", "dovrai", "dovrà", "dovremo", "dovrete", "dovranno"],
      condizionale: ["dovrei", "dovresti", "dovrebbe", "dovremmo", "dovreste", "dovrebbero"],
      congiuntivo: ["debba", "debba", "debba", "dobbiamo", "dobbiate", "debano"],
    } },
  { infinitive: "sapere", es: "saber", pattern: "irregular", auxiliary: "avere", participle: "saputo", gerund: "sapendo",
    overrides: {
      presente: ["so", "sai", "sa", "sappiamo", "sapete", "sanno"],
      imperfetto: ["sapevo", "sapevi", "sapeva", "sapevamo", "sapevate", "sapevano"],
      futuro: ["saprò", "saprai", "saprà", "sapremo", "saprete", "sapranno"],
      condizionale: ["saprei", "sapresti", "saprebbe", "sapremmo", "sapreste", "saprebbero"],
      congiuntivo: ["sappia", "sappia", "sappia", "sappiamo", "sappiate", "sappiano"],
    } },
  { infinitive: "uscire", es: "salir", pattern: "irregular", auxiliary: "essere", participle: "uscito", gerund: "uscendo",
    overrides: {
      presente: ["esco", "esci", "esce", "usciamo", "uscite", "escono"],
      futuro: ["uscirò", "uscirai", "uscirà", "usciremo", "uscirete", "usciranno"],
      congiuntivo: ["esca", "esca", "esca", "usciamo", "usciate", "escano"],
      imperativo: ["esci", "esca", "esca", "usciamo", "uscite", "escano"],
    } },
  { infinitive: "prendere", es: "tomar/coger", pattern: "irregular", auxiliary: "avere", participle: "preso", gerund: "prendendo",
    overrides: {
      imperfetto: ["prendevo", "prendevi", "prendeva", "prendevamo", "prendevate", "prendevano"],
      futuro: ["prenderò", "prenderai", "prenderà", "prenderemo", "prenderete", "prenderanno"],
    } },
  { infinitive: "mettere", es: "poner", pattern: "irregular", auxiliary: "avere", participle: "messo", gerund: "mettendo",
    overrides: {
      imperfetto: ["mettevo", "mettevi", "metteva", "mettevamo", "mettevate", "mettevano"],
      futuro: ["metterò", "metterai", "metterà", "metteremo", "metterete", "metteranno"],
    } },
  { infinitive: "leggere", es: "leer", pattern: "irregular", auxiliary: "avere", participle: "letto", gerund: "leggendo",
    overrides: {
      presente: ["leggo", "leggi", "legge", "leggiamo", "leggete", "leggono"],
      imperfetto: ["leggevo", "leggevi", "leggeva", "leggevamo", "leggevate", "leggevano"],
    } },
  { infinitive: "scrivere", es: "escribir", pattern: "irregular", auxiliary: "avere", participle: "scritto", gerund: "scrivendo",
    overrides: {
      presente: ["scrivo", "scrivi", "scrive", "scriviamo", "scrivete", "scrivono"],
      imperfetto: ["scrivevo", "scrivevi", "scriveva", "scrivevamo", "scrivevate", "scrivevano"],
    } },
  { infinitive: "aprire", es: "abrir", pattern: "irregular", auxiliary: "avere", participle: "aperto", gerund: "aprendo",
    overrides: {
      presente: ["apro", "apri", "apre", "apriamo", "aprite", "aprono"],
      imperfetto: ["aprivo", "aprivi", "apriva", "aprivamo", "aprivate", "aprivano"],
    } },
  { infinitive: "chiudere", es: "cerrar", pattern: "irregular", auxiliary: "avere", participle: "chiuso", gerund: "chiudendo",
    overrides: {
      presente: ["chiudo", "chiudi", "chiude", "chiudiamo", "chiudete", "chiudono"],
      imperfetto: ["chiudevo", "chiudevi", "chiudeva", "chiudevamo", "chiudevate", "chiudevano"],
    } },
  { infinitive: "vedere", es: "ver", pattern: "irregular", auxiliary: "avere", participle: "visto", gerund: "vedendo",
    overrides: {
      presente: ["vedo", "vedi", "vede", "vediamo", "vedete", "vedono"],
      imperfetto: ["vedevo", "vedevi", "vedeva", "vedevamo", "vedevate", "vedevano"],
      futuro: ["vedrò", "vedrai", "vedrà", "vedremo", "vedrete", "vedranno"],
    } },
  { infinitive: "conoscere", es: "conocer", pattern: "irregular", auxiliary: "avere", participle: "conosciuto", gerund: "conoscendo",
    overrides: {
      presente: ["conosco", "conosci", "conosce", "conosciamo", "conoscete", "conoscono"],
      imperfetto: ["conoscevo", "conoscevi", "conosceva", "conoscevamo", "conoscevate", "conoscevano"],
    } },
  /* Regular examples */
  { infinitive: "parlare", es: "hablar", pattern: "are", auxiliary: "avere", participle: "parlato", gerund: "parlando" },
  { infinitive: "mangiare", es: "comer", pattern: "are", auxiliary: "avere", participle: "mangiato", gerund: "mangiando" },
  { infinitive: "lavorare", es: "trabajar", pattern: "are", auxiliary: "avere", participle: "lavorato", gerund: "lavorando" },
  { infinitive: "studiare", es: "estudiar", pattern: "are", auxiliary: "avere", participle: "studiato", gerund: "studiando" },
  { infinitive: "ascoltare", es: "escuchar", pattern: "are", auxiliary: "avere", participle: "ascoltato", gerund: "ascoltando" },
  { infinitive: "guardare", es: "mirar/ver", pattern: "are", auxiliary: "avere", participle: "guardato", gerund: "guardando" },
  { infinitive: "amare", es: "amar", pattern: "are", auxiliary: "avere", participle: "amato", gerund: "amando" },
  { infinitive: "cantare", es: "cantar", pattern: "are", auxiliary: "avere", participle: "cantato", gerund: "cantando" },
  { infinitive: "arrivare", es: "llegar", pattern: "are", auxiliary: "essere", participle: "arrivato", gerund: "arrivando" },
  { infinitive: "tornare", es: "volver", pattern: "are", auxiliary: "essere", participle: "tornato", gerund: "tornando" },
  { infinitive: "lavarsi", es: "lavarse", pattern: "are", auxiliary: "essere", participle: "lavato", gerund: "lavandosi" },
  { infinitive: "alzarsi", es: "levantarse", pattern: "are", auxiliary: "essere", participle: "alzato", gerund: "alzandosi" },
  { infinitive: "chiamarsi", es: "llamarse", pattern: "are", auxiliary: "essere", participle: "chiamato", gerund: "chiamandosi" },
  { infinitive: "credere", es: "creer", pattern: "ere", auxiliary: "avere", participle: "creduto", gerund: "credendo" },
  { infinitive: "vendere", es: "vender", pattern: "ere", auxiliary: "avere", participle: "venduto", gerund: "vendendo" },
  { infinitive: "vivere", es: "vivir", pattern: "ere", auxiliary: "essere", participle: "vissuto", gerund: "vivendo" },
  { infinitive: "ricevere", es: "recibir", pattern: "ere", auxiliary: "avere", participle: "ricevuto", gerund: "ricevendo" },
  { infinitive: "dormire", es: "dormir", pattern: "ire", auxiliary: "avere", participle: "dormito", gerund: "dormendo" },
  { infinitive: "partire", es: "partir/salir", pattern: "ire", auxiliary: "essere", participle: "partito", gerund: "partendo" },
  { infinitive: "sentire", es: "sentir/oir", pattern: "ire", auxiliary: "avere", participle: "sentito", gerund: "sentendo" },
  { infinitive: "offrire", es: "ofrecer", pattern: "ire", auxiliary: "avere", participle: "offerto", gerund: "offrendo" },
  { infinitive: "seguire", es: "seguir", pattern: "ire", auxiliary: "avere", participle: "seguito", gerund: "seguendo" },
  { infinitive: "capire", es: "entender", pattern: "ire-isc", auxiliary: "avere", participle: "capito", gerund: "capendo" },
  { infinitive: "finire", es: "terminar", pattern: "ire-isc", auxiliary: "avere", participle: "finito", gerund: "finendo" },
  { infinitive: "preferire", es: "preferir", pattern: "ire-isc", auxiliary: "avere", participle: "preferito", gerund: "preferendo" },
  { infinitive: "costruire", es: "construir", pattern: "ire-isc", auxiliary: "avere", participle: "costruito", gerund: "costruendo" },
  { infinitive: "pulire", es: "limpiar", pattern: "ire-isc", auxiliary: "avere", participle: "pulito", gerund: "pulendo" },
];

/* Regular endings (passato prossimo is composed from auxiliary + participle) */
const ENDINGS: Record<string, Record<Exclude<TenseId, "passato_prossimo">, Forms6>> = {
  are: {
    presente: ["o", "i", "a", "iamo", "ate", "ano"],
    imperfetto: ["avo", "avi", "ava", "avamo", "avate", "avano"],
    futuro: ["erò", "erai", "erà", "eremo", "erete", "eranno"],
    condizionale: ["erei", "eresti", "erebbe", "eremmo", "ereste", "erebbero"],
    congiuntivo: ["i", "i", "i", "iamo", "iate", "ino"],
    imperativo: ["(tu)", "", "", "iamo", "ate", "ino"],
  },
  ere: {
    presente: ["o", "i", "e", "iamo", "ete", "ono"],
    imperfetto: ["evo", "evi", "eva", "evamo", "evate", "evano"],
    futuro: ["erò", "erai", "erà", "eremo", "erete", "eranno"],
    condizionale: ["erei", "eresti", "erebbe", "eremmo", "ereste", "erebbero"],
    congiuntivo: ["a", "a", "a", "iamo", "iate", "ano"],
    imperativo: ["(tu)", "", "", "iamo", "ete", "ano"],
  },
  ire: {
    presente: ["o", "i", "e", "iamo", "ite", "ono"],
    imperfetto: ["ivo", "ivi", "iva", "ivamo", "ivate", "ivano"],
    futuro: ["irò", "irai", "irà", "iremo", "irete", "iranno"],
    condizionale: ["irei", "iresti", "irebbe", "iremmo", "ireste", "irebbero"],
    congiuntivo: ["a", "a", "a", "iamo", "iate", "ano"],
    imperativo: ["(tu)", "", "", "iamo", "ite", "ano"],
  },
  "ire-isc": {
    presente: ["isco", "isci", "isce", "iamo", "ite", "iscono"],
    imperfetto: ["ivo", "ivi", "iva", "ivamo", "ivate", "ivano"],
    futuro: ["irò", "irai", "irà", "iremo", "irete", "iranno"],
    condizionale: ["irei", "iresti", "irebbe", "iremmo", "ireste", "irebbero"],
    congiuntivo: ["isca", "isca", "isca", "iamo", "iate", "iscano"],
    imperativo: ["(tu)", "", "", "iamo", "ite", "iscano"],
  },
};

const AUX_PRESENTE: Record<string, Forms6> = {
  avere: ["ho", "hai", "ha", "abbiamo", "avete", "hanno"],
  essere: ["sono", "sei", "è", "siamo", "siete", "sono"],
};

export function findVerb(infinitive: string): VerbEntry | undefined {
  const q = infinitive.trim().toLowerCase();
  return VERBS.find((v) => v.infinitive === q);
}

export function searchVerbs(query: string, limit = 8): VerbEntry[] {
  const q = query.trim().toLowerCase();
  if (!q) return VERBS.slice(0, limit);
  return VERBS.filter((v) => v.infinitive.startsWith(q) || v.es.includes(q)).slice(0, limit);
}

export interface ConjugatedTense {
  tense: TenseId;
  forms: { pronoun: string; form: string; irregular: boolean }[];
}

export function conjugate(verb: VerbEntry, tense: TenseId): ConjugatedTense {
  // passato prossimo: auxiliary + participle
  if (tense === "passato_prossimo") {
    const aux = AUX_PRESENTE[verb.auxiliary];
    const forms = aux.map((a, i) => {
      let p = verb.participle;
      if (verb.auxiliary === "essere") {
        p = i === 0 || i === 1 || i === 2 ? `${p}/a` : `${p}/e`;
      }
      return { pronoun: PRONOUNS[i], form: `${a} ${p}`, irregular: true };
    });
    return { tense, forms };
  }

  const overrides = verb.overrides?.[tense];
  const base = verb.infinitive.replace(/si$/, "").replace(/(are|ere|ire)$/, "");
  const stemDrop = verb.infinitive.endsWith("si") ? verb.infinitive.slice(0, -3) : verb.infinitive; // for reflexives
  const pattern = verb.pattern === "irregular" ? "are" : verb.pattern;

  const forms = PRONOUNS.map((pronoun, i) => {
    if (overrides && overrides[i]) return { pronoun, form: overrides[i], irregular: true };
    const ending = ENDINGS[pattern][tense][i];
    // reflexive verbs: pronoun attached (mi/ti/si/ci/vi/si + form)
    if (verb.infinitive.endsWith("si") && (tense === "presente" || tense === "imperfetto" || tense === "futuro")) {
      const clitics = ["mi", "ti", "si", "ci", "vi", "si"];
      const dropVowel = /[ae]$/.test(ending) ? ending.slice(1) : ending;
      return { pronoun, form: `${clitics[i]} ${base}${dropVowel}`, irregular: false };
    }
    if (tense === "imperativo") {
      if (i === 0) return { pronoun, form: "—", irregular: false };
      if (i === 1) return { pronoun, form: `${stemDrop.replace(/(are|ere|ire)$/, "a")}!`, irregular: false };
      if (i === 2) return { pronoun, form: `${stemDrop.replace(/(are|ere|ire)$/, "i")}!`, irregular: false };
      if (i === 3) return { pronoun, form: `${base}iamo!`, irregular: false };
      if (i === 4) return { pronoun, form: `${stemDrop.replace(/(are|ere|ire)$/, "ate")}!`.replace("aate", "ate"), irregular: false };
      return { pronoun, form: `${stemDrop.replace(/(are|ere|ire)$/, "ino")}!`, irregular: false };
    }
    if (tense === "congiuntivo") {
      return { pronoun: `che ${pronoun}`, form: `${base}${ending}`, irregular: false };
    }
    return { pronoun, form: `${base}${ending}`, irregular: false };
  });

  return { tense, forms };
}

export function verbInfo(verb: VerbEntry) {
  return {
    infinitive: verb.infinitive,
    es: verb.es,
    pattern: verb.pattern,
    auxiliary: verb.auxiliary,
    participle: verb.participle,
    gerund: verb.gerund,
  };
}

export const VERB_LIST = VERBS.map((v) => ({ infinitive: v.infinitive, es: v.es, pattern: v.pattern }));
