import type { GrammarRulePack } from "./grammar-rules";

/* ═══ v9.35 · Regole ed esempi · refuerzo de los temas g3-* (C1–C2) ═══ */

export const RULES_G3_C: Record<string, GrammarRulePack> = {
  "g3-c1-consecutive": {
    moreExamples: [
      { it: "Era talmente stanco che si addormentò in piedi.", es: "Estaba tan cansado que se durmió de pie." },
      { it: "Ho avuto tanto di quel lavoro che non ho dormito.", es: "Tuve tanto trabajo que no dormí (tanto di quel… che)." },
      { it: "Parla così piano che non si sente.", es: "Habla tan bajo que no se le oye." },
    ],
    tables: [
      {
        title: "Come si costruiscono: le consecutive",
        headers: ["Estructura", "Uso", "Ejemplo"],
        rows: [
          ["così + adj/avv + che", "resultado directo", "È così alto che tocca il soffitto."],
          ["tanto + adj + che", "resultado directo", "Era tanto stanco che cadde."],
          ["talmente… che", "énfasis elegante", "Talmente stanca che si addormentò."],
          ["talmente / tanto… da + infinito", "consecuencia en una palabra", "Talmente stanco da addormentarsi."],
          ["tanto di quel + nome + che", "con sustantivo", "Tanto di quel freddo che gelammo."],
          ["al punto che / fino al punto da", "registro formal", "Al punto che dovette dimettersi."],
          ["di tale intensità che", "escritura formal", "Di tale intensità che fermò tutto."],
        ],
        note: "La versión con da + infinito es más elegante y compacta que la con che: «talmente stanco DA addormentarsi» vs «talmente stanco CHE si addormentò». Ojo: «così che» aislado también puede ser final («de modo que»): el contexto decide.",
      },
    ],
  },

  "g3-c1-gerundio-participio": {
    moreExamples: [
      { it: "Avendo terminato, se ne andò.", es: "Habiendo terminado, se fue (gerundio passato)." },
      { it: "Camminando imparerai la città.", es: "Caminando aprenderás la ciudad (gerundio presente)." },
      { it: "La lettera, scritta a mano, era difficile da leggere.", es: "La carta, escrita a mano, era difícil de leer (participio con valor adjetival)." },
    ],
    tables: [
      {
        title: "Come si costruiscono: gerundio e participio",
        headers: ["Forma", "Construcción", "Significado", "Ejemplo"],
        rows: [
          ["gerundio presente", "radical + -ando / -endo", "simultaneidad", "Camminando parliamo."],
          ["gerundio passato", "avendo / essendo + participio", "anterioridad", "Essendo arrivato tardi, chiese scusa."],
          ["gerundio con pronombres", "pronombre pegado", "—", "Guardandola, sorrise."],
          ["participio presente", "-ante / -ente", "adjetivo o sustantivo (no verbo)", "una storia avvincente · un agente"],
          ["participio passato", "adjetivizado", "pasividad/resultado", "notizie sconvolgenti · un uomo rispettato"],
          ["participio absoluto", "fórmula literaria", "tras el sustantivo", "Finito il lavoro, uscì."],
        ],
        note: "Regla inquebrantable: gerundio y sujeto del verbo principal deben coincidir («morendo, Cicerone disse…» = Cicerón muere). El participio presente YA NO funciona como verbo en italiano moderno (el español «el hombre que camina» no puede ser «l'uomo camminante»): es solo adjetivo o sustantivo (docente, agente, stampante).",
      },
    ],
  },

  "g3-c1-dislocazioni": {
    moreExamples: [
      { it: "A Roma ci sono stato tre volte.", es: "A Roma he estado tres veces (ci copia el lugar)." },
      { it: "Il caffè lo prendo amaro.", es: "El café lo tomo amargo (lo copia el objeto)." },
      { it: "Sono stati loro a pagare.", es: "Han sido ellos quienes pagaron (foco en el sujeto)." },
    ],
    tables: [
      {
        title: "Come si costruiscono: le strutture del parlato",
        headers: ["Estructura", "Fórmula", "Ejemplo"],
        rows: [
          ["dislocazione a sinistra", "tema al inicio + clítico copia", "Il libro, l'ho già letto."],
          ["dislocazione a destra", "clítico primero + tema al final", "L'ho già letto, il libro."],
          ["frase scissa", "è + X + a/che + verbo", "È stato Marco a chiamare."],
          ["topicalización con sì/no", "X sì, Y no", "Il cinema sì, il teatro no."],
          ["sujeto pospuesto", "verbo + sujeto", "È arrivato Marco."],
          ["clítico redoblado posesivo", "pronombre + posesivo", "La mia idea, la mia."],
        ],
        note: "La dislocación SIN clítico copia suena a extranjero: «Il libro ho letto» ✗; lo correcto es «Il libro, L'HO letto». La frase scissa («è stato lui a…») responde a un foco contrastivo, igual que el español «fue él quien…». Son el alma del italiano hablado real.",
      },
    ],
  },

  "g3-c1-remoto-uso": {
    moreExamples: [
      { it: "L'Italia entrò in guerra nel 1915.", es: "Italia entró en guerra en 1915 (hecho histórico)." },
      { it: "Vissi anni indimenticabili a Bologna.", es: "Viví años inolvidables en Bolonia (narración meridional)." },
      { it: "Fu allora che capii tutto.", es: "Fue entonces cuando lo entendí todo (narrativo)." },
    ],
    tables: [
      {
        title: "Come si costruisce: la elección remoto / prossimo",
        headers: ["Contexto", "Tiempo preferido", "Ejemplo"],
        rows: [
          ["conversación cotidiana", "passato prossimo", "Ieri ho visto Marco."],
          ["Italia del Norte (habla)", "passato prossimo casi total", "L'anno scorso sono andato a Parigi."],
          ["Italia del Sur (habla)", "remoto también para lo reciente", "Ieri andai al mercato."],
          ["narración literaria", "passato remoto", "Pinocchio nacque sotto una penna."],
          ["hechos históricos", "passato remoto", "Nel 1861 nacque l'Italia unita."],
          ["cartas formales / prensa", "prossimo o remoto según tradición", "Il ministro dichiarò / ha dichiarato…"],
        ],
        note: "Objetivo C1: RECONOCER el remoto (formas -ai/-ò/-etti y irregulares nacque, fu, disse, venne,ebbe, seppe) y saber que en el Sur se usa hasta para el ayer. Para producir, el prossimo es seguro en todo el territorio; el remoto da sabor literario o meridional.",
      },
    ],
  },

  "g3-c1-verbi-fraseologici": {
    moreExamples: [
      { it: "Il treno sta per partire.", es: "El tren está por partir (inminencia)." },
      { it: "Va migliorando giorno dopo giorno.", es: "Va mejorando día tras día (progresión)." },
      { it: "Smettila di lamentarti!", es: "¡Deja de quejarte! (smettere di)." },
    ],
    tables: [
      {
        title: "Come si costruiscono: i verbi fraseologici (fase de la acción)",
        headers: ["Fase", "Construcción", "Ejemplo"],
        rows: [
          ["inminencia", "stare per + infinito", "Stavo per uscire."],
          ["inicio", "mettersi a / cominciare a + infinito", "Si è messo a piovere."],
          ["progresión", "andare + gerundio", "Va migliorando."],
          ["progresión gradual", "venire + gerundio", "Veniva dicendo che…"],
          ["continuidad", "continuare a + infinito", "Continua a piovere."],
          ["término", "finire per / smettere di + infinito", "Ho finito per restare."],
          ["repetición insistente", "stare + gerundio (enfático)", "Sto sempre studiando!"],
        ],
        note: "Como los perífrasis españolas: «stare per» = estar por / estar a punto de (¡pero NO «estar + gerundio», que en italiano también es stare + gerundio!); «mettersi a» = ponerse a; «andare + gerundio» = ir + gerundio. Finire per = acabar por/terminar por.",
      },
    ],
  },

  "g3-c1-formazione-parole": {
    moreExamples: [
      { it: "sfortunato = s- + fortunato", es: "desafortunado = prefijo negativo s- + afortunado." },
      { it: "rientrare = ri- + entrare", es: "reentrar = prefijo repetitivo ri- + entrar." },
      { it: "prevedere = pre- + vedere", es: "prever = prefijo anticipativo pre- + ver." },
    ],
  },

  "g3-c2-sequenza-tempi": {
    moreExamples: [
      { it: "Diceva che sarebbe arrivato in ritardo.", es: "Decía que llegaría con retraso (futuro en el pasado)." },
      { it: "Capì di aver sbagliato.", es: "Entendió haberse equivocado (anterioridad con infinito)." },
      { it: "Non sapevo che tu fossi già partito.", es: "No sabía que ya te habías ido (subjuntivo trapasado)." },
    ],
  },

  "g3-c2-substandard": {
    moreExamples: [
      { it: "Ci vediamo tipo alle sette.", es: "Nos vemos tipo a las siete (tipo como comodín coloquial)." },
      { it: "Non è mica facile!", es: "¡Qué va, no es fácil! (mica niega lo supuesto)." },
      { it: "Dai, andiamo!", es: "¡Venga, vamos! (dai anima)." },
    ],
    tables: [
      {
        title: "Come si costruisce: il parlato quotidiano",
        headers: ["Marcador", "Función", "Ejemplo"],
        rows: [
          ["che polivalente", "sustituye cosa/come", "Che fai stasera? · Che bello!"],
          ["mica", "niega una suposición", "Non è mica vero."],
          ["poi", "conclusivo/concesivo", "E poi, chi se ne importa."],
          ["tipo / cioè / insomma", "comodines discursivos", "Ci vediamo tipo alle sette."],
          ["dai / su / forza", "ánimo o impaciencia", "Dai, andiamo!"],
          ["un po' / na cosa", "apócope coloquial", "un po' stanco"],
          ["dialecto", "identidad local", "Ghe l'ho minga (milanés) · Nun se po' capì (napolitano)"],
        ],
        note: "Este registro es imprescindible para COMPRENDER series y conversaciones reales, pero conviene evitarlo en la escritura formal. «Tipo» y «cioè» son los «osea» y «estilo» del italiano; mica no existe en español estándar: niega lo que el interlocutor daba por hecho.",
      },
    ],
  },

  "g3-c2-burocratico": {
    moreExamples: [
      { it: "Il sottoscritto dichiara quanto segue.", es: "El abajo firmante declara lo siguiente." },
      { it: "Vista la normativa vigente…", es: "Vista la normativa vigente… (participio de abertura)." },
      { it: "È stato costituito un gruppo di lavoro ad hoc.", es: "Se ha constituido un grupo de trabajo ad hoc (latinismo)." },
    ],
    tables: [
      {
        title: "Come si costruisce: il registro burocratico",
        headers: ["Recurso", "Fórmula", "Equivalente normal"],
        rows: [
          ["apertura de oficio", "Il sottoscritto / La scrivente", "io"],
          ["participios de referencia", "Vista / Presa atto / Considerato", "considerando que"],
          ["pasiva impersonal", "si comunica / si invita a", "comunicamos / invita"],
          ["futuro epistolar", "sarà cura di / si prega di", "por favor, haga"],
          ["latinismos", "ex novo, ad hoc, in itinere, de iure, iter, pro tempore", "de nuevo, específico, en curso, de derecho, recorrido, temporal"],
          ["nominalización extrema", "la presentazione della domanda", "presentar la solicitud"],
          ["fechas formales", "in data odierna", "hoy"],
        ],
        note: "La prosa burocrática sustituye verbos por sustantivos (procedere al blocco en vez de bloccare) y personas por fórmulas (il sottoscritto en vez de io). Se lee en administración y acts; entenderla ahorra horas en ventanillas italianas — produciría efecto cómico en una charla informal.",
      },
    ],
  },

  "g3-c2-letterario": {
    moreExamples: [
      { it: "Tacevano le strade della città addormentata.", es: "Callaban las calles de la ciudad dormida (sujeto pospuesto lírico)." },
      { it: "Non senza esitazione, egli varcò la soglia.", es: "No sin vacilar, él cruzó el umbral (litote + egli arcaizante)." },
      { it: "Ogni cosa pareva sospesa nel tempo.", es: "Cada cosa parecía suspendida en el tiempo (imperfetto descriptivo)." },
    ],
    tables: [
      {
        title: "Come si costruisce: i tratti della lingua letteraria",
        headers: ["Rasgo", "Manifestación", "Ejemplo"],
        rows: [
          ["passato remoto narrativo", "narración en remoto", "Fu allora che capì."],
          ["participio absoluto", "sustantivo + participio", "Finito il lavoro, uscì."],
          ["sujeto pospuesto", "verbo antes del sujeto", "Tacevano le strade."],
          ["pronombres arcaizantes", "egli, essi, altrui", "Egli sapeva."],
          ["elisiones poéticas", "ond', sì ch'io, perch'io", "sì ch'io mi sciolsi…"],
          ["figuras retóricas", "anafora, litote, iperbato", "Tanto gentile e tanto onesta pare."],
          ["lexía aulica", "dimora, crucciarsi, alma", "nella sua dimora"],
        ],
        note: "Objetivo C2: reconocer estos trazos en Dante, Manzoni o Calvino y captar su efecto (tiempo suspendido, solemnidad, ritmo). Reproducirlos solo en escritura creativa deliberada: en contexto cotidiano sonarían paródicos.",
      },
    ],
  },
};
