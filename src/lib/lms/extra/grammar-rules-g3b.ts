import type { GrammarRulePack } from "./grammar-rules";

/* ═══ v9.35 · Regole ed esempi · refuerzo de los temas g3-* (B1–B2) ═══ */

export const RULES_G3_B: Record<string, GrammarRulePack> = {
  "g3-b1-congiuntivo-imperfetto": {
    moreExamples: [
      { it: "Se avessi i soldi, viaggerei tutto l'anno.", es: "Si tuviera el dinero, viajaría todo el año." },
      { it: "Come se fosse facile.", es: "Como si fuera fácil." },
      { it: "Magari fosse vero!", es: "¡Ojalá fuera verdad!" },
    ],
  },

  "g3-b1-futuro-anteriore": {
    moreExamples: [
      { it: "Quando avremo finito, andiamo a cena.", es: "Cuando hayamos terminado, vamos a cenar." },
      { it: "Saranno già a casa a quest'ora.", es: "Ya estarán en casa a esta hora (probabilidad)." },
      { it: "Appena sarai arrivato, scrivimi.", es: "Apenas llegues, escríbeme." },
    ],
    tables: [
      {
        title: "Come si costruisce il futuro anteriore",
        headers: ["Auxiliar (futuro)", "+ participio", "Ejemplo"],
        rows: [
          ["avrò / avrai / avrà", "mangiato, visto", "Avrò finito entro venerdì."],
          ["avremo / avrete / avranno", "", "Avranno perso il volo."],
          ["sarò / sarai / sarà", "andato/a, uscito/a", "Sarà già uscita."],
          ["saremo / sarete / saranno", "andati/e", "Quando saremo arrivati…"],
        ],
        note: "Dos usos: 1) futuro anterior a otro futuro (quando avrò finito = cuando haya terminado); 2) ESPECULACIÓN sobre el presente con confianza: sarà in ufficio = (probablemente) está en la oficina. El español hace lo mismo con el futuro perfecto: «habrá salido».",
      },
    ],
  },

  "g3-b1-imperativo-pronomi": {
    moreExamples: [
      { it: "Alzati, è tardi!", es: "¡Levántate, es tarde!" },
      { it: "Passami il sale, per favore.", es: "Pásame la sal, por favor." },
      { it: "Ragazzi, calmatevi!", es: "¡Chicos, calmaos!" },
    ],
  },

  "g3-b1-relative": {
    moreExamples: [
      { it: "La ragazza di cui ti ho parlato.", es: "La chica de la que te hablé (di + cui)." },
      { it: "Il giorno in cui ci siamo conosciuti.", es: "El día en que nos conocimos (in cui = en que)." },
      { it: "Il motivo per cui l'ho fatto.", es: "La razón por la que lo hice (per cui = por la que)." },
    ],
  },

  "g3-b1-passivo": {
    moreExamples: [
      { it: "La mail è stata inviata stamattina.", es: "El correo fue enviado esta mañana." },
      { it: "Quest'app è usata da milioni di persone.", es: "Esta app es usada por millones de personas (agente con da)." },
      { it: "In Italia si beve molto caffè.", es: "En Italia se bebe mucho café (si passivante)." },
    ],
    tables: [
      {
        title: "Come si costruiscono: le tre passivi",
        headers: ["Fórmula", "Uso", "Ejemplo"],
        rows: [
          ["essere + participio", "estado / todas las personas y tiempos", "Il Duomo è stato costruito in sei secoli."],
          ["venire + participio", "acción en curso, más dinámico", "La pasta viene servita calda."],
          ["si passivante (si + verbo)", "generalización; el verbo concuerda", "Si parlano molte lingue qui."],
          ["agente: da + persona", "quién realiza la acción", "È stato licenziato dal direttore."],
        ],
        note: "El español usa casi siempre el «se» (se habla italiano); el italiano prefiere essere/venire cuando importa el proceso o el agente. Si passivante con objeto plural pone el verbo en plural: si vendono case.",
      },
    ],
  },

  "g3-b1-si-impersonale": {
    moreExamples: [
      { it: "In montagna si dorme benissimo.", es: "En la montaña se duerme genial." },
      { it: "Qui si affittano biciclette.", es: "Aquí se alquilan bicicletas (objeto plural → verbo plural)." },
      { it: "A cena ci si siede alle otto.", es: "A la cena uno se sienta a las ocho (si reflexivo → ci si)." },
    ],
    tables: [
      {
        title: "Come si costruiscono: i tre usi del SI",
        headers: ["Tipo", "Fórmula", "Ejemplo", "Señal distintiva"],
        rows: [
          ["si impersonale", "si + 3ª sing. (transitivo sin objeto)", "Qui si mangia bene.", "sujeto indeterminado"],
          ["si passivante", "si + verbo que concuerda con el objeto", "Si affittano biciclette.", "objeto plural → plural"],
          ["si riflessivo/reciproco", "sujeto real que actúa sobre sí", "Luca si lava. · Si abbracciano.", "hay sujeto concreto"],
          ["si impersonale + reflexivo", "ci si + verbo", "Ci si saluta con un bacio.", "nunca «si si»"],
          ["si + intransitivo", "si è + participio masc. pl.", "Si è partiti all'alba.", "concordancia masc. pl."],
        ],
        note: "La secuencia «si si» está prohibida: impersonal + reflexivo = ci si (ci si vede domani = nos vemos mañana, con sujeto indefinido). Regla fina y muy de examen CILS.",
      },
    ],
  },

  "g3-b1-verbi-preposizioni": {
    moreExamples: [
      { it: "Spero di rivederti presto.", es: "Espero volver a verte pronto (sperare di)." },
      { it: "Hai provato a chiamarlo?", es: "¿Has probado a llamarlo? (provare a)." },
      { it: "Mi sono dimenticato di pagare.", es: "Me he olvidado de pagar (dimenticarsi di)." },
    ],
  },

  "g3-b1-temporali": {
    moreExamples: [
      { it: "Ti chiamo appena esco dall'ufficio.", es: "Te llamo en cuanto salga de la oficina." },
      { it: "Dopo che sei partito, tutto è cambiato.", es: "Después de que te fuiste, todo cambió." },
      { it: "Prima di uscire, spegni la luce.", es: "Antes de salir, apaga la luz (prima di + infinito)." },
    ],
    tables: [
      {
        title: "Come si costruiscono: le congiunzioni temporali",
        headers: ["Conjunción", "Modo/tiempo que exige", "Ejemplo"],
        rows: [
          ["quando", "indicativo", "Quando sono arrivato, dormivano."],
          ["mentre", "imperfetto / gerundio", "Mentre dormivi, ho lavorato."],
          ["appena / non appena", "indicativo", "Appena hai finito, avisami."],
          ["prima che", "congiuntivo", "Esci prima che sia tardi."],
          ["prima di", "+ infinito", "Prima di uscire, chiudi tutto."],
          ["dopo che", "indicativo", "Dopo che è partito, ho pianto."],
          ["dopo (di)", "+ infinito passato", "Dopo aver mangiato, uscimmo."],
          ["finché (non)", "indicativo", "Finché non torni, non esco."],
        ],
        note: "Pares engañosos: prima CHE + subjuntivo (con verbo conjugado) pero prima DI + infinitivo; finché non = «hasta que» (el non no niega, es parte de la construcción). Mientras el español alterna subjuntivo/indicativo, el italiano aquí casi siempre usa indicativo, salvo prima che.",
      },
    ],
  },

  "g3-b1-condizionale-passato": {
    moreExamples: [
      { it: "Avrei voluto salutarti.", es: "Habría querido despedirme de ti." },
      { it: "Sarei rimasto volentieri.", es: "Me habría quedado con gusto." },
      { it: "Secondo la radio sarebbe scoppiato un incendio.", es: "Según la radio habría estallado un incendio (rumor, no confirmado)." },
    ],
    tables: [
      {
        title: "Come si costruisce il condizionale passato",
        headers: ["Auxiliar (condizionale)", "+ participio", "Ejemplo"],
        rows: [
          ["avrei / avresti / avrebbe", "mangiato, visto, detto", "Avrei detto la verità."],
          ["avremmo / avreste / avrebbero", "", "Avremmo pagato volentieri."],
          ["sarei / saresti / sarebbe", "andato/a, uscito/a, nato/a", "Sarei venuto volentieri."],
          ["saremmo / sareste / sarebbero", "andati/e", "Sarebbero partiti ieri."],
        ],
        note: "Tres usos: 1) hipótesis irreal del pasado (3º ipotetico); 2) futuro en el pasado (disse che sarebbe arrivato); 3) rumor/información no confirmada (la nota sarebbe di 500 euro). Este último uso «epistémico» es típico del italiano periodístico.",
      },
    ],
  },

  "g3-b1-congiuntivo-uso": {
    moreExamples: [
      { it: "È strano che non risponda.", es: "Es raro que no responda." },
      { it: "Ti auguro che tutto vada bene.", es: "Te deseo que todo vaya bien." },
      { it: "Spero di vederti presto.", es: "Espero verte pronto (mismo sujeto → di + infinito)." },
    ],
    tables: [
      {
        title: "Come si costruisce: i trigger del congiuntivo",
        headers: ["Categoría", "Palabras disparadoras", "Ejemplo"],
        rows: [
          ["opinión / duda", "penso che, credo che, dubito che, mi sembra che", "Penso che sia tardi."],
          ["deseo / miedo", "voglio che, spero che, temo che, auguro che", "Spero che tu stia bene."],
          ["emoción / valoración", "è felice/peccato/strano/importante che", "È strano che non chiami."],
          ["impersonal", "bisogna che, è possibile che, può darsi che", "Può darsi che abbia ragione."],
          ["conjunciones", "benché, sebbene, prima che, affinché, senza che, nonostante che", "Benché sia tardi, esco."],
          ["mismo sujeto", "→ di + infinito (NO subjuntivo)", "Spero di venire. · Credo di sì."],
        ],
        note: "Diferencia clave con el español: los «verbos de no-creencia» (non penso che…) reclaman subjuntivo aún más fuerte. Y con el MISMO sujeto el italiano prohíbe que + subjuntivo: spero DI venire, nunca «spero che io venga».",
      },
    ],
  },

  "g3-b2-congiuntivo-trapassato": {
    moreExamples: [
      { it: "Come se non fosse successo niente.", es: "Como si no hubiera pasado nada." },
      { it: "Magari avessi accettato quel lavoro!", es: "¡Ojalá hubiera aceptado ese trabajo!" },
      { it: "Non pensavo che fossi già stato a Roma.", es: "No pensaba que ya hubieras estado en Roma." },
    ],
    tables: [
      {
        title: "Come si costruisce il congiuntivo trapassato",
        headers: ["Auxiliar (congiuntivo imperfetto)", "+ participio", "Ejemplo"],
        rows: [
          ["avessi / avesse / avessimo / avessero", "mangiato, visto, saputo", "Se l'avessi saputo…"],
          ["fossi / fosse / fossimo / fossero", "andato/a/i/e, stato/a/i/e", "Se fossi arrivato prima…"],
        ],
        note: "Vive sobre todo en: 1) el 3º tipo del periodo ipotetico (se avessi saputo, sarei venuto); 2) detrás de come se / come fosse (como si fuera/hubiera); 3) deseos irrealizables con magari (magari avessi detto sì!). Es el calco exacto del español «hubiera + participio».",
      },
    ],
  },

  "g3-b2-concessive": {
    moreExamples: [
      { it: "Sebbene fosse tardi, continuammo a ridere.", es: "Aunque era tarde, seguimos riendo." },
      { it: "Anche se mi pagassi, non lo farei.", es: "Aunque me pagaras, no lo haría (hipótesis → subjuntivo)." },
      { it: "Per quanto ne so, non è vero.", es: "Por lo que sé, no es verdad." },
    ],
    tables: [
      {
        title: "Come si costruiscono: le concessive",
        headers: ["Conector", "Modo exigido", "Ejemplo"],
        rows: [
          ["anche se (hecho real)", "indicativo", "Anche se piove, esco."],
          ["anche se (hipótesis)", "congiuntivo", "Anche se piovesse, uscirei."],
          ["benché / sebbene", "congiuntivo", "Benché sia stanco, esco."],
          ["nonostante (che) / malgrado (che)", "congiuntivo (con che); + sustantivo sin che", "Nonostante il traffico, arrivai."],
          ["per quanto", "congiuntivo", "Per quanto gridasse, niente."],
          ["comunque / in ogni caso", "invariable", "Comunque vada, resto."],
        ],
        note: "Como «aunque»: anche se alterna indicativo (realidad) y subjuntivo (hipótesis); benché/sebbene/nonostante che SIEMPRE subjuntivo. Nonostante + sustantivo va sin che: nonostante il ritardo.",
      },
    ],
  },

  "g3-b2-finali-causali": {
    moreExamples: [
      { it: "Ti spiego la regola perché tu capisca.", es: "Te explico la regla para que entiendas (porqué final → subjuntivo)." },
      { it: "Dato che piove, prendi l'ombrello.", es: "Ya que llueve, coge el paraguas (causal → indicativo)." },
      { it: "Sono qui per aiutarti.", es: "Estoy aquí para ayudarte (per + infinito)." },
    ],
    tables: [
      {
        title: "Come si costruiscono: finali e causali",
        headers: ["Función", "Conector", "Modo", "Ejemplo"],
        rows: [
          ["final (para que)", "affinché / perché", "congiuntivo", "Te lo dico affinché tu sappia."],
          ["final simple", "per + infinito", "infinito", "Studio per lavorare in Italia."],
          ["causal (porque)", "perché / poiché / siccome / dato che / giacché", "indicativo", "Siccome piove, resto."],
          ["causal formal", "in quanto / visto che", "indicativo", "Visto che sei qui, aiutami."],
          ["posición inicial", "solo siccome / visto che / poiché", "—", "Siccome era tardi… (perché causal no abre frase)"],
        ],
        note: "La palabra perché hace doble trabajo: FINAL (para que) con subjuntivo, CAUSAL (porque) con indicativo. Siccome abre la frase; perché causal nunca puede ir en primer puesto. Affinché es la versión elegante de «porque final».",
      },
    ],
  },

  "g3-b2-relative-avanzate": {
    moreExamples: [
      { it: "Chi dorme non piglia pesci.", es: "Quien duerme no pesca peces (proverbio con chi)." },
      { it: "Non intendevo ciò che ho detto.", es: "No quería decir lo que dije (ciò che = lo que)." },
      { it: "Vado dove mi porta il cuore.", es: "Voy a donde me lleva el corazón." },
    ],
    tables: [
      {
        title: "Come si costruiscono: le relative avanzate",
        headers: ["Pronombre", "Significado", "Ejemplo"],
        rows: [
          ["chi", "el que / quien (sin antecedente)", "Chi studia, impara."],
          ["ciò che / quello che", "lo que", "Non capisco ciò che dici."],
          ["colui che / colei che / coloro che", "el/la/los que (formal)", "Colui che sa, tace."],
          ["il quale / la quale / i quali / le quali", "que (formal, con preposición)", "la città nella quale vivo"],
          ["chiunque / ovunque / comunque", "cualquiera que / dondequiera / comoquiera", "Chiunque bussi, non aprire."],
          ["cui (sin preposición)", "a quien (dativo)", "un amico cui telefono spesso"],
        ],
        note: "Chi nunca retoma un antecedente («chi lavora…» = quien trabaja), mientras che/cui siempre lo tienen detrás. Il quale se usa en registros formales sobre todo con preposiciones: il motivo per il quale (la razón por la cual).",
      },
    ],
  },

  "g3-b2-infinito-passato": {
    moreExamples: [
      { it: "Dopo aver mangiato, uscimmo a passeggio.", es: "Después de comer, salimos a pasear." },
      { it: "Senza avertelo detto, non potevo partire.", es: "Sin habértelo dicho, no podía partir." },
      { it: "Per aver taciuto, fu accusato di complicità.", es: "Por haber callado, fue acusado de complicidad." },
    ],
    tables: [
      {
        title: "Come si costruisce l'infinito passato",
        headers: ["Fórmula", "Estructura", "Ejemplo"],
        rows: [
          ["avere + participio", "aver mangiato (la e cae)", "Dopo aver finito, chiamami."],
          ["essere + participio", "essere uscito / essersi alzato", "Dopo essere uscita, chiuse a chiave."],
          ["reflexivos", "essersi + participio", "Dopo essersi svegliato…"],
          ["con dopo", "dopo + infinito passato", "Dopo aver letto, dormì."],
          ["con senza / per", "sin / por + infinito passato", "Senza averlo visto, lo giudicò."],
        ],
        note: "Regla de oro: el infinito passato exige el MISMO sujeto que el verbo principal; si los sujetos difieren, se usa di + che + verbo conjugado (dopo che ho mangiato). En el infinito avere la e final cae: aver, non «avere».",
      },
    ],
  },

  "g3-b2-interrogative-indirette": {
    moreExamples: [
      { it: "Non so dove sia finito.", es: "No sé dónde ha ido a parar (duda → subjuntivo)." },
      { it: "Vorrei sapere quando arriva il treno.", es: "Quisiera saber cuándo llega el tren (hecho → indicativo)." },
      { it: "Dimmi se ti piace.", es: "Dime si te gusta (se = si)." },
    ],
    tables: [
      {
        title: "Come si costruiscono: le interrogative indirette",
        headers: ["Pregunta directa", "Indirecta", "Nota"],
        rows: [
          ["Dove abiti?", "Non so dove abiti.", "mismo introductor"],
          ["È arrivato?", "Non so se è arrivato.", "se = si (dubitativo)"],
          ["Chi è quella donna?", "Mi chiedo chi sia quella donna.", "duda → subjuntivo"],
          ["Che cosa pensano?", "Chissà che cosa pensano.", "con chissà caben ambos modos"],
          ["Quando parti?", "Dimmi quando parti.", "certeza → indicativo"],
          ["Perché l'hai fatto?", "Spiegami perché l'hai fatto.", "perché se mantiene"],
        ],
        note: "La interrogativa indirecta se anuncia con non so / mi chiedo / dimmi / vorrei sapere / chissà. Con verbos de certeza va indicativo; con duda o cortesía el subjuntivo brilla: non so dove sia. El «se» italiano = «si» español, nunca «¿qué?».",
      },
    ],
  },

  "g3-b2-pronomi-combinati": {
    moreExamples: [
      { it: "Ce l'ho io.", es: "Lo tengo yo (ce lo = contracción de lo)." },
      { it: "Gliene parlerò domani.", es: "Le hablaré de ello mañana (gliene = a él + de eso)." },
      { it: "Ve la siete cavata bene.", es: "Os habéis apañado bien (ve la)." },
    ],
  },
};
