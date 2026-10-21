import type { GrammarRulePack } from "./grammar-rules";

/* ═══ v9.35 · Regole ed esempi · refuerzo de los temas base g-* (A1–A2)
   Cada tema recibe: +ejemplos (lista completa) y una tavola de reglas de
   construcción (terminaciones, paradigmas, transformaciones) ═══ */

export const RULES_G_A1_A2: Record<string, GrammarRulePack> = {
  "g-a1-genero": {
    moreExamples: [
      { it: "il problema → i problemi", es: "el problema → los problemas (masculino en -a, como el griego)" },
      { it: "la mano → le mani", es: "la mano → las manos (femenino irregular en -o)" },
      { it: "l'amica → le amiche", es: "la amiga → las amigas (-ca → -che para conservar el sonido)" },
      { it: "il negozio → i negozi", es: "la tienda → las tiendas (-io → -i, la i tónica se absorbe)" },
    ],
    tables: [
      {
        title: "Regole di costruzione del plurale",
        headers: ["Terminación sing.", "Regla del plural", "Ejemplos"],
        rows: [
          ["-o (m.)", "-o → -i", "libro → libri · giorno → giorni"],
          ["-a (f.)", "-a → -e", "casa → case · porta → porte"],
          ["-e (m. o f.)", "-e → -i", "pane → pani · chiave → chiavi"],
          ["-ca (f.)", "-ca → -che", "amica → amiche · banca → banche"],
          ["-ga (f.)", "-ga → -ghe", "riga → righe · cuoca → cuoche"],
          ["-co / -go (m.)", "-chi / -ghi (a menudo)", "banco → banchi · luogo → luoghi"],
          ["-io", "-io → -i", "negozio → negozi · inizio → inizi"],
          ["vocal tónica (à/è/ù)", "invariable", "città → città · caffè → caffè"],
        ],
        note: "Excepciones de género que hay que memorizar: il problema, il programma, il cinema (masculinos en -a); la mano, la foto, la moto (femeninos). Y algunos plurales irregulares: il dito → le dita, l'uomo → gli uomini.",
      },
    ],
  },

  "g-a1-articoli": {
    moreExamples: [
      { it: "il tavolo → i tavoli", es: "la mesa → las mesas" },
      { it: "lo zaino → gli zaini", es: "la mochila → las mochilas" },
      { it: "l'orologio → gli orologi", es: "el reloj → los relojes" },
      { it: "l'università → le università", es: "la universidad → las universidades (le nunca se apocopa ante vocal)" },
    ],
    tables: [
      {
        title: "Come si costruisce: la regola de las iniciales",
        headers: ["Tipo de palabra", "Sing.", "Pl.", "Ejemplos"],
        rows: [
          ["m. consonante normal", "il", "i", "il libro → i libri · il tavolo → i tavoli"],
          ["m. s+consonante, z, ps, gn, pn, x", "lo", "gli", "lo studente → gli studenti · lo zaino → gli zaini"],
          ["m. vocal", "l'", "gli", "l'amico → gli amici · l'orologio → gli orologi"],
          ["f. consonante", "la", "le", "la casa → le case · la zia → le zie"],
          ["f. vocal", "l'", "le", "l'amica → le amiche · l'università → le università"],
        ],
        note: "El plural de lo y l' es siempre gli; el plural de la es siempre le. La h delante de vocal no impide la elisión: l'hotel, l'hobby.",
      },
    ],
  },

  "g-a1-presente": {
    moreExamples: [
      { it: "Voi prendete l'aperitivo?", es: "¿Vosotros tomáis el aperitivo?" },
      { it: "Loro finiscono alle otto.", es: "Ellos terminan a las ocho." },
      { it: "Io apro la finestra.", es: "Yo abro la ventana." },
      { it: "Tu scrivi molto bene.", es: "Tú escribes muy bien." },
    ],
    tables: [
      {
        title: "Come si costruisce il presente indicativo",
        headers: ["Persona", "-ARE (parlare)", "-ERE (prendere)", "-IRE (dormire)", "-IRE con -ISC- (capire)"],
        rows: [
          ["io", "parlo", "prendo", "dormo", "capisco"],
          ["tu", "parli", "prendi", "dormi", "capisci"],
          ["lui/lei", "parla", "prende", "dorme", "capisce"],
          ["noi", "parliamo", "prendiamo", "dormiamo", "capiamo"],
          ["voi", "parlate", "prendete", "dormite", "capite"],
          ["loro", "parlano", "prendono", "dormono", "capiscono"],
        ],
        note: "El sufijo -isc- aparece en io/tu/lui/lei/loro, pero NUNCA en noi/voi: capisco, capisci, capisce, capiamo, capite, capiscono. Verbos -isc frecuentes: capire, finire, preferire, pulire, spedire, costruire.",
      },
    ],
  },

  "g-a1-essere-avere": {
    moreExamples: [
      { it: "Tu sei molto gentile.", es: "Tú eres muy amable." },
      { it: "Loro sono in ritardo.", es: "Ellos van con retraso." },
      { it: "Io ho un cane e due gatti.", es: "Yo tengo un perro y dos gatos." },
      { it: "Voi avete freddo?", es: "¿Tenéis frío?" },
    ],
    tables: [
      {
        title: "Come si costruiscono: i due ausiliari",
        headers: ["Persona", "essere (ser/estar)", "avere (tener/haber)"],
        rows: [
          ["io", "sono", "ho"],
          ["tu", "sei", "hai"],
          ["lui/lei", "è", "ha"],
          ["noi", "siamo", "abbiamo"],
          ["voi", "siete", "avete"],
          ["loro", "sono", "hanno"],
        ],
        note: "Trampas de escritura: la h de ho/hai/ha/hanno es muda pero obligatoria; è con acento significa «es», sin acento e significa «y». io sono y loro sono son idénticas: el contexto (o el pronombre) decide.",
      },
    ],
  },

  "g-a1-aggettivi": {
    moreExamples: [
      { it: "due ragazze alte", es: "dos chicas altas" },
      { it: "Le strade sono lunghe.", es: "Las calles son largas." },
      { it: "Marco è alto e magro.", es: "Marco es alto y delgado." },
      { it: "un film interessante", es: "una película interesante" },
    ],
    tables: [
      {
        title: "Come si costruisce: le quattro terminazioni",
        headers: ["Tipo", "m. sing.", "f. sing.", "m. pl.", "f. pl.", "Ejemplo completo"],
        rows: [
          ["adjetivo en -o", "alto", "alta", "alti", "alte", "un ragazzo alto → ragazze alte"],
          ["adjetivo en -e", "grande", "grande", "grandi", "grandi", "una città grande → città grandi"],
          ["invariables", "blu", "blu", "blu", "blu", "una gonna blu → gonne blu"],
          ["invariables (2ª clase)", "pari", "pari", "pari", "pari", "numeri pari → cifre pari"],
        ],
        note: "El español solo tiene dos terminaciones (alto/alta); el italiano distingue también el plural (alti/alte). Los acabados en -e tienen UNA sola forma de singular y una de plural: grande/grandi.",
      },
    ],
  },

  "g-a1-domande": {
    moreExamples: [
      { it: "Chi è quella ragazza?", es: "¿Quién es esa chica?" },
      { it: "Quando parte il treno?", es: "¿Cuándo sale el tren?" },
      { it: "Non ho niente da dire.", es: "No tengo nada que decir (doble negación obligatoria: non…niente)." },
      { it: "Non è vero.", es: "No es verdad." },
    ],
    tables: [
      {
        title: "Come si costruisce: le parole interrogative",
        headers: ["Palabra", "Significado", "Ejemplo"],
        rows: [
          ["chi", "quién", "Chi telefona?"],
          ["che cosa / cosa", "qué", "Cosa mangi?"],
          ["dove", "dónde", "Dove abiti?"],
          ["quando", "cuándo", "Quando arrivi?"],
          ["perché", "por qué", "Perché ridi?"],
          ["come", "cómo", "Come stai?"],
          ["quale / quali", "cuál / cuáles", "Quale preferisci?"],
          ["quanto / quanta / quanti / quante", "cuánto/a/os/as", "Quanti anni hai?"],
        ],
        note: "El italiano NO usa signos de interrogación de apertura (¿): la pregunta se reconoce por el orden y la entonación. La negación es non + verbo, y con niente/nessuno la doble negación es obligatoria: non ho visto niente.",
      },
    ],
  },

  "g-a2-passato-prossimo": {
    moreExamples: [
      { it: "Ho scritto una mail stamattina.", es: "He escrito un correo esta mañana (participio irregular scritto)." },
      { it: "Hanno chiuso la porta a chiave.", es: "Han cerrado la puerta con llave." },
      { it: "Siamo tornati tardi ieri sera.", es: "Volvimos tarde anoche (con essere, participio en plural)." },
      { it: "Che cosa hai fatto nel weekend?", es: "¿Qué has hecho el fin de semana (fatto, irregular)?" },
    ],
    tables: [
      {
        title: "Come si costruisce il participio passato",
        headers: ["Infinitivo", "Regla", "Ejemplos regulares"],
        rows: [
          ["-are", "-ato", "mangiare → mangiato · parlare → parlato"],
          ["-ere", "-uto", "credere → creduto · vendere → venduto"],
          ["-ire", "-ito", "dormire → dormito · finire → finito"],
        ],
        note: "Participios irregulares imprescindibles: fare→fatto, dire→detto, prendere→preso, vedere→visto, scrivere→scritto, aprire→aperto, chiudere→chiuso, leggere→letto, mettere→messo, venire→venuto, essere→stato, rimanere→rimasto.",
      },
      {
        title: "Come si costruisce: la elección del auxiliar",
        headers: ["Tipo de verbo", "Auxiliar", "Ejemplo"],
        rows: [
          ["transitivos (con objeto directo)", "avere", "Ho mangiato una pizza."],
          ["movimiento y estancia (andare, venire, partire, arrivare, uscire, tornare, restare)", "essere", "Siamo andati al cinema."],
          ["reflexivos y pronominales", "essere", "Mi sono svegliato alle sette."],
          ["cambios de estado (nascere, morire, crescere, diventare)", "essere", "Maria è nata a Lima."],
        ],
        note: "Con essere el participio concuerda con el sujeto (è partita / sono partiti / siamo partite); con avere queda invariable. Los modales aceptan ambos: ho dovuto uscire / sono dovuto uscire.",
      },
    ],
  },

  "g-a2-imperfetto": {
    moreExamples: [
      { it: "Da piccolo giocavo a calcio.", es: "De pequeño jugaba al fútbol." },
      { it: "Mentre cucinavo, ascoltavo la radio.", es: "Mientras cocinaba, escuchaba la radio." },
      { it: "Abitavamo in campagna.", es: "Vivíamos en el campo." },
      { it: "Faceva freddo quella sera.", es: "Hacía frío esa noche (faceva, irregular de fare)." },
    ],
    tables: [
      {
        title: "Come si costruisce l'imperfetto",
        headers: ["Persona", "-ARE (parlare)", "-ERE (credere)", "-IRE (dormire)"],
        rows: [
          ["io", "parlavo", "credevo", "dormivo"],
          ["tu", "parlavi", "credevi", "dormivi"],
          ["lui/lei", "parlava", "credeva", "dormiva"],
          ["noi", "parlavamo", "credevamo", "dormivamo"],
          ["voi", "parlavate", "credevate", "dormivate"],
          ["loro", "parlavano", "credevano", "dormivano"],
        ],
        note: "Es el tiempo más regular del italiano: SIEMPRE -vo, -vi, -va, -vamo, -vate, -vano. Raíces irregulares solo en pocos verbos: essere → ero/eri/era, fare → facevo, dire → dicevo, bere → bevevo.",
      },
    ],
  },

  "g-a2-preposizioni": {
    moreExamples: [
      { it: "La chiave è nella porta.", es: "La llave está en la puerta." },
      { it: "Torniamo dagli amici.", es: "Volvemos de casa de los amigos." },
      { it: "Vengo dalla Spagna.", es: "Vengo de España." },
      { it: "Sulla parete c'è un poster.", es: "En la pared hay un póster." },
    ],
    tables: [
      {
        title: "Come si costruiscono: preposizione + articolo",
        headers: ["", "il", "lo", "la", "l'", "i", "gli", "le"],
        rows: [
          ["di (de)", "del", "dello", "della", "dell'", "dei", "degli", "delle"],
          ["a (a)", "al", "allo", "alla", "all'", "ai", "agli", "alle"],
          ["da (desde/en)", "dal", "dallo", "dalla", "dall'", "dai", "dagli", "dalle"],
          ["in (en)", "nel", "nello", "nella", "nell'", "nei", "negli", "nelle"],
          ["su (sobre)", "sul", "sullo", "sulla", "sull'", "sui", "sugli", "sulle"],
          ["con (con)", "col", "collo", "colla", "coll'", "coi", "cogli", "cole"],
        ],
        note: "Cuidado con los falsos amigos: «vado dal dottore» = voy al médico (da + persona), «vengo dalla Spagna» = vengo de España. per y tra/frá nunca se combinan: per il lavoro, tra gli amici.",
      },
    ],
  },

  "g-a2-riflessivi": {
    moreExamples: [
      { it: "Ti lavi le mani prima di mangiare.", es: "Te lavas las manos antes de comer." },
      { it: "Si mette la giacca ed esce.", es: "Se pone la chaqueta y sale." },
      { it: "Vi divertite qui?", es: "¿Os divertís aquí?" },
      { it: "Ci siamo conosciuti a Lima.", es: "Nos conocimos en Lima (recíproco, con essere)." },
    ],
    tables: [
      {
        title: "Come si costruiscono: i pronomi riflessivi",
        headers: ["Persona", "Pronombre", "svegliarsi (despertarse)", "Passato prossimo"],
        rows: [
          ["io", "mi", "mi sveglio", "mi sono svegliato/a"],
          ["tu", "ti", "ti svegli", "ti sei svegliato/a"],
          ["lui/lei", "si", "si sveglia", "si è svegliato/a"],
          ["noi", "ci", "ci svegliamo", "ci siamo svegliati/e"],
          ["voi", "vi", "vi svegliate", "vi siete svegliati/e"],
          ["loro", "si", "si svegliano", "si sono svegliati/e"],
        ],
        note: "Todos los reflexivos van con essere, y el participio concuerda. Los recíprocos funcionan igual: vedersi (verse), scriversi (escribirse), capirsi (entenderse): ci siamo visti ieri.",
      },
    ],
  },

  "g-a2-futuro": {
    moreExamples: [
      { it: "Fra un anno parlerò bene.", es: "Dentro de un año hablaré bien." },
      { it: "Sarà stanco dopo il viaggio.", es: "Estará cansado después del viaje." },
      { it: "Verrò alla festa con Luca.", es: "Vendré a la fiesta con Luca (venire → verr-)." },
      { it: "È più facile dirlo che farlo.", es: "Es más fácil decirlo que hacerlo (comparación con che)." },
    ],
    tables: [
      {
        title: "Come si costruisce il futuro semplice",
        headers: ["Persona", "parlare (-are)", "credere (-ere)", "Raíces irregulares"],
        rows: [
          ["io", "parlerò", "crederò", "essere → sarò · avere → avrò"],
          ["tu", "parlerai", "crederai", "andare → andrò · fare → farò"],
          ["lui/lei", "parlerà", "crederà", "venire → verrà · volere → vorrà"],
          ["noi", "parleremo", "crederemo", "potere → potremo · dovere → dovremo"],
          ["voi", "parlerete", "crederete", "vedere → vedrete · sapere → saprete"],
          ["loro", "parleranno", "crederanno", "bere → berranno · stare → staranno"],
        ],
        note: "El futuro del español usa el infinitivo (hablaré); el italiano lo contrae: parlare → parlerò, dormire → dormirò. En la lengua hablada el futuro muchas veces se sustituye por el presente: stasera esco (esta noche salgo).",
      },
      {
        title: "Come si costruiscono i comparativi",
        headers: ["Tipo", "Fórmula", "Ejemplo"],
        rows: [
          ["mayoría", "più + adj + di / che", "Marco è più alto di Luca."],
          ["minoría", "meno + adj + di / che", "Questa è meno cara di quella."],
          ["igualdad", "così/tanto + adj + quanto / come", "È così alto quanto te."],
          ["superlativo relativo", "il/la più + adj + di", "È il libro più bello dell'anno."],
          ["comparar dos cualidades", "più…che (no di)", "È più bello che utile."],
        ],
        note: "Se usa di ante nombre o pronombre (più alto di Luca) y che ante infinitivo, adverbio u otra cualidad (più facile dirlo che farlo). Ante artículo el di se contrae: dell'anno.",
      },
    ],
  },
};
