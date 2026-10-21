import type { GrammarRulePack } from "./grammar-rules";

/* ═══ v9.35 · Regole ed esempi · refuerzo de los temas g3-* (A1–A2) ═══ */

export const RULES_G3_A: Record<string, GrammarRulePack> = {
  "g3-a1-alfabeto": {
    moreExamples: [
      { it: "Come si scrive il tuo nome? — M-A-R-C-O.", es: "¿Cómo se escribe tu nombre? — M-A-R-C-O (deletrear)." },
      { it: "pala ≠ palla: una pala / una palla", es: "pala ≠ pelota: la consonante doble cambia la palabra." },
      { it: "zio e zaino: la Z suena [ts] o [dz]", es: "tío y mochila: la z tiene dos sonidos según la palabra." },
    ],
  },

  "g3-a1-articoli-ind": {
    moreExamples: [
      { it: "Vorrei uno spuntino veloce.", es: "Quisiera un tentempié rápido (uno ante sp)." },
      { it: "Ho comprato della mortadella e del pane.", es: "Compré mortadela y pan (partitivo)." },
      { it: "C'è una nuova studentessa in classe.", es: "Hay una estudiante nueva en clase." },
    ],
  },

  "g3-a1-numeri": {
    moreExamples: [
      { it: "Siamo in trentadue.", es: "Somos treinta y dos." },
      { it: "È la terza volta che chiamo.", es: "Es la tercera vez que llamo (ordinal)." },
      { it: "Roma ha quasi tre milioni di abitanti.", es: "Roma tiene casi tres millones de habitantes." },
    ],
  },

  "g3-a1-ora": {
    moreExamples: [
      { it: "Ci vediamo alle otto e mezza.", es: "Nos vemos a las ocho y media." },
      { it: "Sono nato il tre di aprile.", es: "Nací el tres de abril." },
      { it: "Mercoledì prossimo ho l'esame.", es: "El próximo miércoles tengo el examen." },
    ],
  },

  "g3-a1-avere-essere-espressioni": {
    moreExamples: [
      { it: "Ho fretta, scappo!", es: "¡Tengo prisa, me escapo!" },
      { it: "Hai sonno? Va' a dormire.", es: "¿Tienes sueño? Ve a dormir." },
      { it: "Siamo arrabbiati con lui.", es: "Estamos enfadados con él." },
    ],
    tables: [
      {
        title: "Come si costruiscono: avere o essere nelle espressioni di stato",
        headers: ["Con avere (tener)", "Con essere (ser/estar)", "Español"],
        rows: [
          ["ho fame / sete / sonno", "sono stanco / affamato", "hambre, sed, sueño / cansado"],
          ["ho freddo / caldo", "sono gelato / accaldato", "frío, calor"],
          ["ho paura", "sono impaurito", "miedo"],
          ["ho ragione / torto", "sono nel giusto", "razón / estar equivocado"],
          ["ho fretta", "sono di corsa", "prisa"],
          ["ho 20 anni", "sono giovane / vecchio", "años / joven, viejo"],
        ],
        note: "El italiano divide las sensaciones igual que el español «tener»: ho fame = tengo hambre, nunca «sono fame». Los ESTADOS van con essere: sono stanco (estoy cansado), sono felice (soy/estoy feliz).",
      },
    ],
  },

  "g3-a1-verbi-irregolari": {
    moreExamples: [
      { it: "Facciamo una gita domani?", es: "¿Hacemos una excursión mañana?" },
      { it: "Ti do un passaggio.", es: "Te doy un aventón." },
      { it: "Stanno arrivando.", es: "Están llegando." },
    ],
  },

  "g3-a1-possessivi": {
    moreExamples: [
      { it: "Il mio telefono è morto.", es: "Mi teléfono se murió." },
      { it: "Dov'è la tua borsa?", es: "¿Dónde está tu bolso?" },
      { it: "La loro casa è al mare.", es: "Su casa (de ellos) está en el mar." },
    ],
  },

  "g3-a1-ce-sono": {
    moreExamples: [
      { it: "C'era molta gente alla festa.", es: "Había mucha gente en la fiesta." },
      { it: "Ci vorranno almeno due ore.", es: "Se necesitarán al menos dos horas." },
      { it: "Non c'è niente da fare.", es: "No hay nada que hacer." },
    ],
    tables: [
      {
        title: "Come si costruisce: c'è in tutti i tempi",
        headers: ["Tiempo", "Singular", "Plural"],
        rows: [
          ["presente", "c'è", "ci sono"],
          ["imperfetto", "c'era", "c'erano"],
          ["futuro", "ci sarà", "ci saranno"],
          ["passato prossimo", "c'è stato", "ci sono stati"],
          ["negación", "non c'è", "non ci sono"],
          ["«se necesita»", "ci vuole (+ sing.)", "ci vogliono (+ pl.)"],
        ],
        note: "El español usa «hay» para todo; el italiano distingue singular (c'è) y plural (ci sono) en TODOS los tiempos. Y una construcción propia: ci vuole/ci vogliono = se necesita (tiempo o medio).",
      },
    ],
  },

  "g3-a1-bello-buono": {
    moreExamples: [
      { it: "Che bella sorpresa!", es: "¡Qué sorpresa tan bonita!" },
      { it: "Begli occhi!", es: "¡Qué ojos tan bonitos (begli ante vocal)!" },
      { it: "È un buon ristorante.", es: "Es un buen restaurante (buon ante consonante)." },
    ],
  },

  "g3-a2-irregolari-venire": {
    moreExamples: [
      { it: "Vengono a cena sabato.", es: "Vienen a cenar el sábado." },
      { it: "Beviamo qualcosa insieme.", es: "Bebemos algo juntos." },
      { it: "Tieni il posto per me.", es: "Guárdame el sitio (tenere = sostener, no «tener» posesivo)." },
    ],
  },

  "g3-a2-modali": {
    moreExamples: [
      { it: "Devo uscire presto.", es: "Tengo que salir temprano." },
      { it: "Puoi abbassare il volume?", es: "¿Puedes bajar el volumen?" },
      { it: "Non riesco a dormire.", es: "No consigo dormir (riuscire a = lograr)." },
    ],
  },

  "g3-a2-comparativo": {
    moreExamples: [
      { it: "Luca è meno timido di Marco.", es: "Luca es menos tímido que Marco." },
      { it: "È brava quanto te.", es: "Es tan buena como tú." },
      { it: "Il treno è più comodo dell'aereo.", es: "El tren es más cómodo que el avión." },
    ],
  },

  "g3-a2-pronomi-tonici": {
    moreExamples: [
      { it: "Vengo anch'io.", es: "Yo también voy." },
      { it: "Parlami di te.", es: "Háblame de ti." },
      { it: "Sono io, apri!", es: "Soy yo, ¡abre!" },
    ],
  },

  "g3-a2-indefiniti": {
    moreExamples: [
      { it: "Non ho visto nessuno.", es: "No he visto a nadie (doble non…nessuno)." },
      { it: "Ogni giorno impara una parola.", es: "Cada día aprende una palabra (ogni + singular)." },
      { it: "Alcuni studenti sono in ritardo.", es: "Algunos estudiantes llegan tarde." },
    ],
    tables: [
      {
        title: "Come si costruiscono: gli indefiniti",
        headers: ["Indefinido", "Concordancia", "Ejemplo"],
        rows: [
          ["qualcosa", "invariable", "Ho qualcosa per te."],
          ["qualcuno", "invariable", "C'è qualcuno alla porta."],
          ["niente / nulla", "invariable, con non", "Non ho detto niente."],
          ["nessuno / nessuna", "con non, + verbo sing.", "Non viene nessuno."],
          ["qualche + sing.", "solo singular", "Qualche volta esco."],
          ["alcuni / alcune", "plural", "Alcune volte… · alcuni amici"],
          ["ogni + sing.", "solo singular", "Ogni tanto mi manca."],
          ["molto / poco / troppo", "variable o adverbio", "molti amici · molto bello"],
        ],
        note: "Trampas: qualche SIEMPRE singular (qualche volta = algunas veces); la doble negación es obligatoria (non…niente, non…nessuno); todo/toda/tutti/tutte concuerdan y van delante del nombre.",
      },
    ],
  },

  "g3-a2-trapassato": {
    moreExamples: [
      { it: "Quando sono uscito, aveva già smesso di piovere.", es: "Cuando salí, ya había dejado de llover." },
      { it: "Avevamo prenotato un mese prima.", es: "Habíamos reservado un mes antes." },
      { it: "Erano le nove e non era ancora rientrata.", es: "Eran las nueve y todavía no había vuelto a casa." },
    ],
    tables: [
      {
        title: "Come si costruisce il trapassato prossimo",
        headers: ["Auxiliar (imperfetto)", "+ participio", "Ejemplo"],
        rows: [
          ["avevo / avevi / aveva", "mangiato, visto, fatto", "Avevo già mangiato."],
          ["avevamo / avevate / avevano", "", "Avevamo prenotato."],
          ["ero / eri / era", "andato/a, uscito/a, nato/a", "Era già uscita."],
          ["eravamo / eravate / erano", "andati/e, usciti/e", "Eravamo tornati."],
        ],
        note: "Es el «antes del pasado»: acción anterior a otra pasada. Cuidado: se forma CON INDICATIVO (avevo mangiato), igual que el español «había comido»; el subjuntivo «hubiera comido» es otra cosa (congiuntivo trapassato: avessi mangiato).",
      },
    ],
  },

  "g3-a2-progressivo": {
    moreExamples: [
      { it: "Che stai guardando?", es: "¿Qué estás mirando?" },
      { it: "Sto aspettando da un'ora.", es: "Llevo una hora esperando." },
      { it: "Stanno ristrutturando il palazzo.", es: "Están reformando el edificio." },
    ],
    tables: [
      {
        title: "Come si costruisce: stare + gerundio",
        headers: ["Paso", "Regla", "Ejemplo"],
        rows: [
          ["gerundio de -are", "-ando", "parlare → parlando · mangiando"],
          ["gerundio de -ere / -ire", "-endo", "prendere → prendendo · dormendo"],
          ["stare conjugado", "sto/stai/sta/stiamo/state/stanno", "sto leggendo"],
          ["pasado progresivo", "stavo + gerundio", "Stavo cucinando."],
          ["verbos con pronombres", "pronombre + verbo (pegado)", "sto aspettandolo · mi sto lavando"],
        ],
        note: "Igual que «estar + gerundio» español, pero MUCHO menos frecuente: el italiano usa el presente simple (leggo) donde el español diría «estoy leyendo». stare + gerundio se reserva para enfatizar la acción en curso AHORA MISMO.",
      },
    ],
  },

  "g3-a2-posizione-aggettivo": {
    moreExamples: [
      { it: "Mi ha chiamato un vecchio amico.", es: "Me llamó un viejo amigo (amigo de hace tiempo)." },
      { it: "È un pover'uomo: ha perso tutto.", es: "Es un pobre hombre: lo perdió todo (desgraciado, no sin dinero)." },
      { it: "Cerco un lavoro nuovo.", es: "Busco un trabajo nuevo (recién distinto, con valorativo)." },
    ],
    tables: [
      {
        title: "Come si costruisce: la posición cambia el significado",
        headers: ["Adjetivo", "Antes del nombre", "Después del nombre"],
        rows: [
          ["grande", "un grande uomo (importante)", "un uomo grande (de gran tamaño)"],
          ["vecchio", "un vecchio amigo (de hace tiempo)", "un amico vecchio (mayor)"],
          ["povero", "un pover'uomo (desgraciado)", "un uomo povero (sin dinero)"],
          ["caro", "un caro amico (querido)", "un orologio caro (costoso)"],
          ["bello", "un bel film (valorativo)", "un film bello (descripción neutra)"],
          ["nuovo", "una nuova casa (de nueva construcción)", "una casa nuova (recién comprada/usada por mí)"],
        ],
        note: "Como en español («un gran hombre» ≠ «un hombre grande»): delante = valoración afectiva o figurada; detrás = descripción objetiva. La forma antepuesta a menudo se apocopa: gran, pover', bel.",
      },
    ],
  },

  "g3-a2-remoto-intro": {
    moreExamples: [
      { it: "Dante morì nel 1321.", es: "Dante murió en 1321 (morire → morì, irregular)." },
      { it: "Nel 1492 Colombo sbarcò in America.", es: "En 1492 Colón desembarcó en América." },
      { it: "Tutto avvenne in fretta.", es: "Todo sucedió deprisa (avvenire → avvenne)." },
    ],
  },
};
