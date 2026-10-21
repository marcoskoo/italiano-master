import type { GrammarRulePack } from "./grammar-rules";

/* ═══ v9.35 · Regole ed esempi · refuerzo de los temas gx-* (profundización) ═══ */

export const RULES_GX: Record<string, GrammarRulePack> = {
  "gx-a1-are": {
    moreExamples: [
      { it: "Io mangio a mezzogiorno.", es: "Yo como al mediodía." },
      { it: "Tu cerchi un lavoro?", es: "¿Tú buscas trabajo? (cercare → cerchi, c dura)." },
      { it: "Lei paga il caffè.", es: "Ella paga el café (pagare → paga, g dura)." },
      { it: "Loro studiano medicina.", es: "Ellos estudian medicina (studiare → studia, sin ii)." },
    ],
    tables: [
      {
        title: "Come si costruiscono i verbi in -ARE",
        headers: ["Persona", "parlare", "mangiare", "cercare / giocare", "pagare"],
        rows: [
          ["io", "parlo", "mangio", "cerco / gioco", "pago"],
          ["tu", "parli", "mangi", "cerchi / giochi", "paghi"],
          ["lui/lei", "parla", "mangia", "cerca / gioca", "paga"],
          ["noi", "parliamo", "mangiamo", "cerchiamo / giochiamo", "paghiamo"],
          ["voi", "parlate", "mangiate", "cercate / giocate", "pagate"],
          ["loro", "parlano", "mangiano", "cercano / giocano", "pagano"],
        ],
        note: "Reglas ortográficas clave: ante tu/noi el sonido duro se conserva con h (cerchi, giochi, paghi); en mangiare/cominciare/studiare/lasciare la i de la desinencia se absorbe (mangi, nunca «mangii»; lasci, cominci).",
      },
    ],
  },

  "gx-a2-pp": {
    moreExamples: [
      { it: "Sono nata a Lima.", es: "Nací en Lima (nascere → essere)." },
      { it: "Ho dovuto chiamare un taxi.", es: "Tuve que llamar un taxi (modal con avere)." },
      { it: "Maria è dovuta uscire.", es: "María tuvo que salir (el modal adopta el auxiliar del verbo: uscire → essere)." },
      { it: "Siamo restati a casa.", es: "Nos quedamos en casa (restare → essere)." },
    ],
    tables: [
      {
        title: "Come si costruisce: la scelta dell'ausiliare",
        headers: ["Clase de verbo", "Auxiliar", "Ejemplos"],
        rows: [
          ["transitivos (con objeto)", "avere", "ho mangiato · ho letto · abbiamo visto"],
          ["movimiento", "essere", "andare, venire, partire, arrivare, uscire, tornare, entrare, salire"],
          ["estancia", "essere", "stare, restare, rimanere"],
          ["cambio de estado", "essere", "nascere, morire, crescere, diventare, invecchiare"],
          ["reflexivos y pronominales", "essere (siempre)", "mi sono svegliato · ci siamo divertiti"],
          ["modales (dovere, potere, volere)", "el del verbo que sigue", "ho dovuto parlare / sono dovuto uscire"],
        ],
        note: "Regla práctica: si el verbo puede llevar objeto directo, va con avere; si describe movimiento/estancia/cambio o es pronominal, con essere. Con los modales ambos son correctos y el participio concuerda solo cuando el auxiliar es essere.",
      },
    ],
  },

  "gx-a2-riflessivi": {
    moreExamples: [
      { it: "Non mi sono accorto dell'ora.", es: "No me di cuenta de la hora (accorgersi, pronominal)." },
      { it: "Si sono arrabbiati per il ritardo.", es: "Se enfadaron por el retraso (arrabbiarsi)." },
      { it: "Ci siamo divertiti molto.", es: "Nos lo pasamos muy bien (divertirsi)." },
      { it: "Mi siedo vicino a te.", es: "Me siento cerca de ti (sedersi: io mi siedo)." },
    ],
    tables: [
      {
        title: "Come si costruiscono: i verbi pronominali",
        headers: ["Clase", "Verbo", "Conjugación modelo", "Nota contrastiva"],
        rows: [
          ["reflexivo puro", "svegliarsi, lavarsi, vestirsi", "mi sveglio, ti svegli…", "como en español"],
          ["recíproco", "vedersi, scriversi, capirsi", "ci vediamo, si scrivono", "como «verse»"],
          ["pronominal de estado", "arrabbiarsi, divertirsi, sentirsi", "mi arrabbio, ti diverti", "enfadarse, divertirse"],
          ["pronominal «inesperado»", "accorgersi, pentirsi, lamentarsi", "mi accorgo, ti penti", "darse cuenta, arrepentirse"],
          ["de movimiento", "sedersi, alzarsi, fermarsi, mettersi", "mi siedo, ci fermiamo", "sentarse, pararse"],
        ],
        note: "Falsos amigos pronominales: «me doy cuenta» = mi accorgo (nunca «do»); «lamento» no existe como «quejarse»: lamentarsi. En italiano MUCHOS verbos son pronominales donde el español no lo es, y viceversa.",
      },
    ],
  },

  "gx-b1-aspetti": {
    moreExamples: [
      { it: "Ogni inverno andavamo in montagna.", es: "Cada invierno íbamos a la montaña (hábito → imperfetto)." },
      { it: "Ieri alle otto dormivo ancora.", es: "Ayer a las ocho todavía dormía (acción en curso)." },
      { it: "Ho conosciuto Elena a una festa.", es: "Conocí a Elena en una fiesta (evento puntual)." },
      { it: "Quando ho aperto la porta, il gatto è scappato.", es: "Cuando abrí la puerta, el gato se escapó (consecución de eventos)." },
      { it: "Avevo dieci anni quando abbiamo traslocato.", es: "Tenía diez años cuando nos mudamos (edad → imperfetto)." },
    ],
    tables: [
      {
        title: "Come si costruisce la elección: sfondo o evento",
        headers: ["Significado", "Tiempo", "Ejemplo"],
        rows: [
          ["hábito / repetición en el pasado", "imperfetto", "Ogni estate andavamo al mare."],
          ["descripción / ambiente", "imperfetto", "Era buio, pioveva."],
          ["edad y hora en el pasado", "imperfetto", "Avevo dieci anni. Erano le tre."],
          ["acción concluida y puntuale", "passato prossimo", "Ho comprato il pane."],
          ["secuencia de eventos", "passato prossimo", "Sono entrato e ho chiuso la porta."],
          ["acción que interrumpe otra", "mentre + imperfetto → pp", "Mentre dormivi, ha telefonato Luca."],
        ],
        note: "Regla mental: el imperfetto es la película de fondo, el passato prossimo las fotos. Con MIENTRAS el fondo va en imperfetto; con CUANDO entra el evento: mentre cucinavo → quando è arrivato.",
      },
    ],
  },

  "gx-b2-congp": {
    moreExamples: [
      { it: "Credo di aver capito.", es: "Creo haber entendido (mismo sujeto → di + infinito)." },
      { it: "È possibile che sia già partito.", es: "Es posible que ya haya salido." },
      { it: "Mi dispiace che tu abbia avuto problemi.", es: "Siento que hayas tenido problemas." },
      { it: "Nonostante abbia studiato, è nervoso.", es: "A pesar de que ha estudiado, está nervioso." },
      { it: "Sembra che abbiano vinto.", es: "Parece que han ganado." },
    ],
    tables: [
      {
        title: "Come si costruisce il congiuntivo passato",
        headers: ["Auxiliar", "Congiuntivo presente", "+ participio", "Ejemplo"],
        rows: [
          ["avere", "che io abbia", "abbia mangiato", "Penso che abbia mangiato."],
          ["essere", "che io sia", "sia andato/a/i/e", "Credo che sia andata via."],
          ["reflexivos", "che io mi sia", "mi sia svegliato/a", "Sembra che si sia svegliato tardi."],
        ],
        note: "El congiuntivo passato expresa una acción ANTERIOR al verbo principal y a la vez no confirmada. Si el sujeto es el mismo, el italiano evita el subjuntivo y usa di + infinito passato: credo di aver capito (no «credo che io abbia capito»). Equivale al perfecto de subjuntivo español: «que haya comido».",
      },
    ],
  },

  "gx-b2-connettivi": {
    moreExamples: [
      { it: "Era tardi, tuttavia siamo rimasti.", es: "Era tarde; sin embargo, nos quedamos." },
      { it: "Pioveva, perciò siamo rimasti a casa.", es: "Llovía; por eso nos quedamos en casa." },
      { it: "Il viaggio è stato lungo, per di più costoso.", es: "El viaje fue largo y, encima, caro." },
      { it: "Insomma, non se ne fa niente.", es: "En fin, no se hace nada." },
      { it: "Non studio per dovere, bensì per passione.", es: "No estudio por deber, sino por pasión." },
    ],
    tables: [
      {
        title: "Come si costruiscono: i connettivi per función",
        headers: ["Función", "Conectores", "Ejemplo"],
        rows: [
          ["adición", "inoltre, per di più, oltretutto", "È bravo, per di più è umile."],
          ["contraste", "però, tuttavia, invece, bensì", "Non era arrabbiato, bensì stanco."],
          ["causa", "poiché, siccome, dato che", "Siccome pioveva, siamo restati."],
          ["consecuencia", "quindi, perciò, di conseguenza, pertanto", "Era tardi, perciò andammo a letto."],
          ["conclusión", "insomma, in sintesi, in conclusione", "Insomma, tutto è andato bene."],
          ["ejemplificación", "per esempio, ovvero, cioè", "Un paese freddo, cioè la Norvegia."],
        ],
        note: "Matices: bensì solo tras frase negativa («no A, bensì B»); siccome abre la frase (Siccome era tardi…), mentre perché causal no puede abrirla; cioè aclara, ovvero precisa.",
      },
    ],
  },

  "gx-c1-nominalizz": {
    moreExamples: [
      { it: "Il pagamento avviene in contanti.", es: "El pago se efectúa en efectivo (-mento)." },
      { it: "La scrittura accademica richiede precisione.", es: "La escritura académica requiere precisión (-tura)." },
      { it: "L'atterraggio è stato ritardato.", es: "El aterrizaje se retrasó (-aggio)." },
      { it: "L'urgenza della situazione è evidente.", es: "La urgencia de la situación es evidente (-enza)." },
      { it: "La costruzione della frase è corretta.", es: "La construcción de la frase es correcta (-zione)." },
    ],
    tables: [
      {
        title: "Come si costruiscono i nomi: i suffissi della nominalizzazione",
        headers: ["Base", "Sufijo", "Verbo/Adj → Nombre", "Género"],
        rows: [
          ["verbo", "-zione", "costruire → costruzione · attuare → attuazione", "femenino"],
          ["verbo", "-mento", "cambiare → cambiamento · pagare → pagamento", "masculino"],
          ["verbo", "-tura", "scrivere → scrittura · aprire → apertura", "femenino"],
          ["verbo", "-aggio", "atterrare → atterraggio · stoccare → stoccaggio", "masculino"],
          ["adjetivo", "-tà / -ità", "possibile → possibilità · unico → unicità", "femenino"],
          ["adjetivo", "-enza / -anza", "urgente → urgenza · costante → costanza", "femenino"],
          ["verbo", "-tore / -trice", "tradurre → traduttore/traduttrice (agente)", "m. / f."],
        ],
        note: "La nominalización es el alma del registro formal y burocrático: «si procede al blocco del sistema» en vez de «bloccano il sistema». El español replica con -ción/-miento/-ura: perfecta correspondencia.",
      },
    ],
  },

  "gx-c2-trapassato": {
    moreExamples: [
      { it: "Quando sono arrivato, il treno era già partito.", es: "Cuando llegué, el tren ya había salido." },
      { it: "Aveva piovuto tutta la notte.", es: "Había llovido toda la noche." },
      { it: "Appena ebbe firmato, uscì.", es: "Apenas hubo firmado, salió (trapassato remoto)." },
      { it: "Sapevano che eravamo già stati a Roma.", es: "Sabían que ya habíamos estado en Roma." },
      { it: "Non immaginavo che fosse già tutto deciso.", es: "No imaginaba que ya estuviera todo decidido (congiuntivo trapassato)." },
    ],
    tables: [
      {
        title: "Come si costruiscono i trapassati",
        headers: ["Tiempo", "Fórmula", "Ejemplo"],
        rows: [
          ["trapassato prossimo", "imperfetto ausiliare + participio", "avevo mangiato · ero andato"],
          ["trapassato remoto", "passato remoto ausiliare + participio", "ebbi mangiato · fui andato"],
          ["congiuntivo trapassato", "congiuntivo imperfetto + participio", "avessi mangiato · fossi andato"],
          ["condizionale passato", "condizionale + participio", "avrei mangiato · sarei andato"],
        ],
        note: "Falso amigo total con el español: «hubiera comido» (subjuntivo) se parece a «avevo mangiato», pero ese es el pluscuamperfecto de indicativo; su equivalente subjuntivo es «avessi mangiato». El trapassato remoto (ebbi firmato) solo vive en narrativa tras appena, quando, se.",
      },
    ],
  },
};
