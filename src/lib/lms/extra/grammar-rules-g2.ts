import type { GrammarRulePack } from "./grammar-rules";

/* ═══ v9.35 · Regole ed esempi · refuerzo de los temas base g-* (B1–C2) ═══ */

export const RULES_G_B_C: Record<string, GrammarRulePack> = {
  "g-b1-condizionale": {
    moreExamples: [
      { it: "Sarebbe bello vedervi.", es: "Sería bonito veros." },
      { it: "Mi piacerebbe visitare Firenze.", es: "Me gustaría visitar Florencia." },
      { it: "Che faresti al mio posto?", es: "¿Qué harías en mi lugar?" },
      { it: "Le andrebbe un caffè?", es: "¿Le apetecería un café? (cortesía formal)" },
    ],
    tables: [
      {
        title: "Come si costruisce il condizionale presente",
        headers: ["Persona", "parlare", "Raíces irregulares (como en el futuro)"],
        rows: [
          ["io", "parlerei", "vorrei · potrei · dovrei · sarei · avrei"],
          ["tu", "parleresti", "vorresti · potresti · saresti"],
          ["lui/lei", "parlerebbe", "vorrebbe · potrebbe · sarebbe"],
          ["noi", "parleremmo", "vorremmo · potremmo · dovremmo"],
          ["voi", "parlereste", "vorreste · potreste · dovreste"],
          ["loro", "parlerebbero", "vorrebbero · saprebbero · farebbero"],
        ],
        note: "El condizionale usa las mismas raíces contraídas que el futuro (avr-, sar-, vorr-) pero con terminaciones -ei/-esti/-ebbe/-emmo/-este/-ebbero. El trío de cortesía vorrei / potrebbe / dovrebbe equivale al condicional español (querría / podría / debería).",
      },
    ],
  },

  "g-b1-imperativo": {
    moreExamples: [
      { it: "Ascoltami bene.", es: "Escúchame bien (pronombre pegado al informal)." },
      { it: "Dimmi la verità.", es: "Dime la verdad (dire → di')." },
      { it: "Ragazzi, venite qui!", es: "¡Chicos, venid aquí!" },
      { it: "Non preoccuparti!", es: "¡No te preocupes (negativo con infinitivo)!" },
    ],
    tables: [
      {
        title: "Come si costruisce l'imperativo",
        headers: ["Forma", "-ARE (parlare)", "-ERE (prendere)", "-IRE (dormire)", "-ISC- (finire)"],
        rows: [
          ["tu", "parla!", "prendi!", "dormi!", "finisci!"],
          ["Lei (formal)", "parli!", "prenda!", "dorma!", "finisca!"],
          ["noi", "parliamo!", "prendiamo!", "dormiamo!", "finiamo!"],
          ["voi", "parlate!", "prendete!", "dormite!", "finite!"],
          ["tu negativo", "non parlare!", "non prendere!", "non dormire!", "non finire!"],
        ],
        note: "El formal (Lei) toma la forma del congiuntivo presente. Irregulares: essere → sii/sia, avere → abbi/abbia, andare → va'/vada, fare → fa'/faccia, dire → di'/dica, stare → sta'/stia. Con pronombres: al informal y al infinitivo se pegan (dimmi, alzarti), al formal y al plural van delante (mi dica, alzatevi).",
      },
    ],
  },

  "g-b1-pronomi": {
    moreExamples: [
      { it: "La chiamo domani.", es: "La llamo mañana (directo la)." },
      { it: "Gli ho comprato un regalo.", es: "Le he comprado un regalo (indirecto gli)." },
      { it: "Ce l'hanno detto ieri.", es: "Nos lo dijeron ayer (combinado ce lo)." },
      { it: "Ti ho mandato il file.", es: "Te he enviado el archivo." },
    ],
    tables: [
      {
        title: "Come si costruiscono: la mappa dei pronomi",
        headers: ["Persona", "Directo (¿qué/quién?)", "Indirecto (¿a quién?)"],
        rows: [
          ["io", "mi", "mi"],
          ["tu", "ti", "ti"],
          ["lui", "lo", "gli"],
          ["lei", "la", "le"],
          ["Lei (formal)", "La", "Le"],
          ["noi", "ci", "ci"],
          ["voi", "vi", "vi"],
          ["loro (directo)", "li (m.) / le (f.)", "gli (coloquial) / loro (tras el verbo)"],
        ],
        note: "Combinaciones: indirecto + directo → me lo, te lo, glielo (gli+lo y le+lo se funden en glielo), ce lo, ve lo. El indirecto LORO va siempre detrás del verbo: ho dato loro le chiavi.",
      },
    ],
  },

  "g-b1-congiuntivo": {
    moreExamples: [
      { it: "È importante che tu venga.", es: "Es importante que vengas." },
      { it: "Voglio che voi siate puntuali.", es: "Quiero que seáis puntuales." },
      { it: "Penso che abbiano fame.", es: "Creo que tienen hambre (avere → abbia)." },
      { it: "Sembra che faccia freddo.", es: "Pare que hace frío (fare → faccia)." },
    ],
    tables: [
      {
        title: "Come si costruisce il congiuntivo presente",
        headers: ["Persona", "-ARE (parlare)", "-ERE (prendere)", "-IRE (dormire)", "-ISC- (finire)"],
        rows: [
          ["che io", "parli", "prenda", "dorma", "finisca"],
          ["che tu", "parli", "prenda", "dorma", "finisca"],
          ["che lui/lei", "parli", "prenda", "dorma", "finisca"],
          ["che noi", "parliamo", "prendiamo", "dormiamo", "finiamo"],
          ["che voi", "parliate", "prendiate", "dormiate", "finiate"],
          ["che loro", "parlino", "prendano", "dormano", "finiscano"],
        ],
        note: "Es el espejo del indicativo: los -are cambian la vocal característica a -i (parlo → che parli) y los -ere/-ire a -a (prendo → che prenda). Irregulares clave: sia, abbia, vada, faccia, dia, sappia, voglia. La 1ª persona plural coincide con el indicativo (parliamo), así que solo hay 4 formas distintas por verbo.",
      },
    ],
  },

  "g-b2-ipotetico": {
    moreExamples: [
      { it: "Se studi, passi l'esame.", es: "Si estudias, apruebas el examen (1º tipo, realidad)." },
      { it: "Se fossi ricco, comprerei una barca.", es: "Si fuera rico, compraría un barco (2º tipo)." },
      { it: "Se me l'avessi detto prima, ti avrei creduto.", es: "Si me lo hubieras dicho antes, te habría creído (3º tipo)." },
      { it: "Se piovesse, rimarremmo a casa.", es: "Si lloviera, nos quedaríamos en casa (hipótesis futura)." },
    ],
    tables: [
      {
        title: "Come si costruiscono i tre tipi",
        headers: ["Tipo", "Protasis (se…)", "Apódosis (consecuencia)", "Ejemplo"],
        rows: [
          ["1º · realidad", "se + indicativo presente", "presente o futuro", "Se piove, prendo l'ombrello."],
          ["2º · posibilidad", "se + congiuntivo imperfetto", "condizionale presente", "Se avessi tempo, viaggerei."],
          ["3º · irrealidad (pasado)", "se + congiuntivo trapassato", "condizionale passato", "Se l'avessi saputo, sarei venuto."],
        ],
        note: "El español y el italiano cuadran casi perfecto: «si tuviera» = se avessi, «si hubiera tenido» = se avessi avuto. Única trampa: en italiano la apódosis NUNCA lleva subjuntivo («si l'avessi saputo, sarei venuto», no «sarei venissi»).",
      },
    ],
  },

  "g-b2-ci-ne": {
    moreExamples: [
      { it: "Ci vogliono due ore di treno.", es: "Se necesitan dos horas de tren (plural → vogliono)." },
      { it: "Non ci capisco niente.", es: "No entiendo nada de esto." },
      { it: "Quante mele vuoi? — Ne voglio tre.", es: "¿Cuántas manzanas quieres? — Quiero tres (ne partitivo)." },
      { it: "Ci penso io.", es: "De eso me ocupo yo." },
    ],
    tables: [
      {
        title: "Come si costruiscono: gli usi di CI e NE",
        headers: ["Partícula", "Función", "Ejemplo", "Equivalente ES"],
        rows: [
          ["ci", "de lugar (a/en allí)", "Vai a Roma? — Ci vado.", "allí"],
          ["ci", "hay / existencia", "C'è un problema. Ci sono problemi.", "hay / hay"],
          ["ci", "se necesita", "Ci vuole tempo. Ci vogliono due ore.", "se necesita"],
          ["ci", "objeto con ci-verbos", "Non ci capisco niente. Ci penso io.", "de esto"],
          ["ne", "partitivo (de ellos)", "Hai figli? — Ne ho due.", "(de ellos)"],
          ["ne", "de esto / de eso", "Ne parliamo domani.", "de eso"],
          ["ne", "con sicher/convinced", "Ne sono sicuro.", "de ello"],
        ],
        note: "El español no tiene partículas así y las traduce con adverbios o repitiendo el nombre. NE no significa «nel» (en el): si vas a decir «de esto» o «de ellos», ahí va ne.",
      },
    ],
  },

  "g-b2-discorso": {
    moreExamples: [
      { it: "«Partirò domani» → Ha detto che sarebbe partito il giorno dopo.", es: "«Saldré mañana» → Dijo que saldría al día siguiente." },
      { it: "«Chiudi la porta!» → Mi ha chiesto di chiudere la porta.", es: "«¡Cierra la puerta!» → Me pidió cerrar la puerta." },
      { it: "«Sono arrivato ieri» → Disse che era arrivato il giorno prima.", es: "«Llegué ayer» → Dijo que había llegado la víspera." },
      { it: "Egregio professor Rossi, Le scrivo per chiederLe un incontro.", es: "Estimado profesor Rossi, le escribo para pedirle una entrevista (formal)." },
    ],
    tables: [
      {
        title: "Come si costruisce: le trasformazioni del discorso indiretto",
        headers: ["Estilo directo", "Estilo indirecto", "Ejemplo"],
        rows: [
          ["presente", "imperfetto", "«Sono stanco» → era stanco"],
          ["passato prossimo", "trapassato prossimo", "«Ho mangiato» → aveva mangiato"],
          ["futuro", "condizionale", "«Arriverò» → sarebbe arrivato"],
          ["imperativo", "di + infinitivo", "«Chiudi!» → di chiudere"],
          ["oggi / domani / ieri", "quel giorno / il giorno dopo / il giorno prima", "«domani» → il giorno dopo"],
          ["qui / adesso", "lì / allora", "«adesso» → allora"],
        ],
        note: "En registro formal el italiano usa Lei con mayúscula (La ringrazio, Le scrivo) y aperturas fijas: Egregio/Gentile + título. La fórmula diamoci del tu pasa de la cortesía a la intimidad.",
      },
    ],
  },

  "g-c1-concordanza": {
    moreExamples: [
      { it: "Quante ne hai comprate?", es: "¿Cuántas has comprado? (ne partitivo → concordancia f. pl.)." },
      { it: "Le lettere? Gliele ho spedite ieri.", es: "¿Las cartas? Se las envié ayer (combinado → concordancia)." },
      { it: "Le ho telefonato stamattina.", es: "Le he telefoneado esta mañana (le indirecto → sin concordancia)." },
      { it: "Le abbiamo viste al cinema.", es: "Las vimos en el cine (le directo femenino plural → concordancia)." },
    ],
    tables: [
      {
        title: "Come si costruisce: le regole della concordanza",
        headers: ["Estructura", "Regla", "Ejemplo"],
        rows: [
          ["essere + participio", "concorda SIEMPRE con el sujeto", "è andata · siamo usciti · siete tornate"],
          ["avere + participio", "invariable (por defecto)", "ho mangiato · ho visto Maria"],
          ["avere + lo/la/li/le antepuestos", "concorda con el pronombre", "l'ho vista · li ho letti · le ho comprate"],
          ["avere + mi/ti/ci/vi/gli/le (indirecto)", "invariable", "le ho parlato · mi hanno telefonato"],
          ["avere + ne partitivo", "concorda con el sustantivo elidido", "quante ne hai prese?"],
          ["combinados (glielo, gliele…)", "concorda con el directo", "gliele ho spedite"],
        ],
        note: "Trampa clásica: «le» puede ser directo (la/las → concuerda: le ho viste) o indirecto (a ella → no concuerda: le ho scritto). Pregunta clave: ¿el pronombre responde a «a quién»? Entonces es indirecto.",
      },
    ],
  },

  "g-c1-impersonali": {
    moreExamples: [
      { it: "Si vive bene qui.", es: "Se vive bien aquí." },
      { it: "Bisogna essere pazienti.", es: "Hay que ser pacientes." },
      { it: "È opportuno che tu lo sappia.", es: "Es oportuno que tú lo sepas." },
      { it: "Si è partiti all'alba.", es: "Se partió al amanecer (intransitivo → participio masc. pl.)." },
    ],
    tables: [
      {
        title: "Come si costruiscono: le forme impersonali",
        headers: ["Construcción", "Fórmula", "Ejemplo"],
        rows: [
          ["si impersonale", "si + 3ª persona sing.", "Qui si mangia bene."],
          ["si + verbos intransitivos", "si è + participio masc. pl.", "Si è partiti all'alba."],
          ["si impersonale + reflexivo", "ci si + verbo", "In Italia ci si saluta con un bacio."],
          ["bisogna", "bisogna + infinito", "Bisogna chiarire."],
          ["occorrere", "occorre + infinito", "Occorre presentare la domanda."],
          ["è necessario/opportuno", "è + adj + che + congiuntivo", "È necessario che tu venga."],
          ["burocrático", "si ritiene / si considera", "Si ritiene opportuno un incontro."],
        ],
        note: "El «si» impersonal italiano = «se» español, pero con intransitivos el participio va en masculino plural (si è partiti). El español «hay que» encuentra su traducción natural en bisogna + infinitivo.",
      },
    ],
  },

  "g-c2-stile": {
    moreExamples: [
      { it: "Mi sa che piove.", es: "Me da la sensación de que va a llover (coloquial)." },
      { it: "Non vedo l'ora di partire.", es: "No veo la hora de irme (neutro expresivo)." },
      { it: "Auspico vivamente un vostro riscontro.", es: "Agradezco vivamente su respuesta (formal epistolar)." },
      { it: "Discorso chiuso, punto e basta.", es: "Tema cerrado, y punto (enfático coloquial)." },
    ],
    tables: [
      {
        title: "Come si costruisce: un concepto, tres registros",
        headers: ["Concepto", "Coloquial", "Neutro", "Alto / formal"],
        rows: [
          ["opinión", "mi sa che…", "secondo me", "ad avviso di chi scrive"],
          ["deseo", "muoio dalla voglia", "non vedo l'ora", "auspico vivamente"],
          ["cantidad", "un sacco di", "molto", "oltremodo"],
          ["inmediato", "in un batter d'occhio", "subito", "immediatamente"],
          ["negación enfática", "non è mica vero", "non è affatto vero", "tutt'altro che vero"],
          ["primero", "tanto per cominciare", "prima di tutto", "in prima battuta"],
        ],
        note: "Marcadores que delatan el registro: mica, punto e basta, insomma, cioè, tipo (coloquiales); pertanto, oltremodo, in prima battuta (formales). En italiano escrito formal se evita el condizionale de modestia excesivo y se prefieren formas como ritengo / auspico.",
      },
    ],
  },

  "g-c2-idiomi": {
    moreExamples: [
      { it: "Non ce la faccio più.", es: "No puedo más (farcela)." },
      { it: "Ne ho abbastanza!", es: "¡Estoy harto! (averne abbastanza)." },
      { it: "Diamoci del tu.", es: "Hablemos de tú (dare del tu)." },
      { it: "È alle prese con la tesi.", es: "Está enfrascado en la tesis (essere alle prese con)." },
    ],
    tables: [
      {
        title: "Come si costruiscono: i verbi idiomatici",
        headers: ["Verbo", "Locución", "Significado literal → real"],
        rows: [
          ["fare", "farcela", "hacerla → lograrlo / aguantar"],
          ["fare", "farsi avanti", "hacerse adelante → dar un paso"],
          ["avere", "avercela con", "tenerla con → estar enfadado con"],
          ["avere", "averne abbastanza", "tener bastante → estar harto"],
          ["essere", "esserci", "estar ahí → estar al quite / entender"],
          ["essere", "essere alle prese con", "estar a manos llenas con → lidiar con"],
          ["dare", "darsi per vinto", "darse por vencido"],
          ["dare", "dare del tu / del Lei", "tratarse de tú / de usted"],
        ],
        note: "Muchos modismos se construyen con pronombres partícula (ce, la, ne, ci) que no se traducen: farcela, cavarsela, entrarci, volerci. Son fosilizados: no se pueden recombinar libremente.",
      },
    ],
  },
};
