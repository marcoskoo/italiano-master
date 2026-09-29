import type { Unit } from "../types";

/* ── Cursos EXTRA · paquete v7.0 · Unidad C2 "Italiano académico/literario"
   +1 unidad / +5 lecciones · 8000 lemas del dizionario v4.0
   · u-c2-3  L'italiano accademico      (scrittura formale, impersonale, connettivi)
   · u-c2-4  Il saggio critico          (tesi-antitesi-sintesi, argomentazione)
   · u-c2-5  La lingua letteraria       (figure retoriche e analisi del testo)
   · u-c2-6  Metrica e tradizione       (endecasillabo, sonetto, Dante e Leopardi)
   · u-c2-7  Analisi del testo moderno  (Calvino, Levi, Morante)              */

export const EXTRA_UNITS_4: Record<string, Unit[]> = {
  C2: [
    { id: "u-c2-3", level: "C2", title: "El italiano académico", titleIt: "L'italiano accademico", lessons: [
      { id: "les-c2-10", level: "C2", title: "La escritura formal e impersonal", titleIt: "La scrittura formale e impersonale",
        objectives: ["Dominar el estilo impersonal con el si passivante y el si-passivo", "Usar léxico anticipativo y metatextual", "Evitar coloquialismos en textos académicos"],
        explanation: [
          "El italiano académico desactiva al autor: en questo lavoro si analizza…, si è proceduto a…, dallo studio emerge che… Esta «forma impersonale» —a diferencia del español, que prefiere la primera persona plural (analizamos, procedimos)— es la firma estilística del ensayo italiano. El llamado si passivante (in Italia si legge molto) convive con el si impersonale (si osserva che) y el C2 consiste en alternarlos sin fricción.",
          "El segundo rasgo es el léxico anticipativo: los conectivos metatextuales (in primo luogo, a tal proposito, occorre sottolineare che, giova rilevare) guían al lector como señales de tráfico. Un texto académico italiano sin estas marcas suena desnudo; con demasiadas, suena burocrático. La dosificación correcta: una cada tres o cuatro oraciones.",
          "Ojo con los falsos amigos del registro: eventualmente (posiblemente) ≠ «eventualmente» español; no a livello di (calcado de «a nivel de»), mejor quanto a o per quanto riguarda. La lista negra del corrector: fare un lavoro su (calcado), mettere in luce ripetido diez veces, e l'abusadísimo importante.",
        ],
        examples: [
          { it: "Nel presente studio si esamina il ruolo della prosodia nell'acquisizione.", es: "En el presente estudio se examina el papel de la prosodia en la adquisición." },
          { it: "Occorre sottolineare che i dati non permettono conclusioni definitive.", es: "Conviene subrayar que los datos no permiten conclusiones definitivas." },
          { it: "Quanto alla metodologia, si rimanda al paragrafo 3.", es: "En cuanto a la metodología, se remite al párrafo 3." },
        ],
        vocabIds: ["k-x26-metodologia", "k-x26-paradigma", "k-x26-epistemico"],
        exerciseIds: ["ex-c2-010"],
        conversationPrompt: { it: "Preferisce la prima persona o l'impersonale in un saggio? Perché?", es: "¿Prefiere la primera persona o la impersonal en un ensayo? ¿Por qué?" },
        checkpointIds: ["ex-c2-010"] },
      { id: "les-c2-11", level: "C2", title: "Conectivos de alto nivel", titleIt: "Connettivi di alto livello",
        objectives: ["Distinguir consecutivos y concesivos cultos", "Construir periodos hipotácticos complejos", "Evitar la yuxtaposición infinita"],
        explanation: [
          "El salto B2→C2 en conectivos: da qui discende che, ne consegue che, ove non che, per converso, semmai. La concesiva culta per quanto + subjuntivo (per quanto sia discutibile) y la condicional literaria ove (ove fosse possibile) elevan el registro sin esfuerzo. El espíritu hipotáctico italiano —subordinar en vez de coordinar— es lo contrario del estilo periodístico anglosajón.",
          "La consecutividad académica tiene su caja de herramientas: pertanto, dunque, di conseguenza, sicché, talché. Y la reformulación: vale a dire, ossia, in altre parole, d'altro canto. El C2 las encadena: «I risultati, per quanto parziali, sono coerenti; di conseguenza, si può affermare — sia pur con cautela — che…».",
          "Latín incluido: il tema della ricerca si articola in tre momenti. Advertencia contrastiva: donde el español dice «en cambio», el italiano culto dice al contrario o per converso; in cambio significa «a cambio» (compensación). Y «sin embargo» es però/tuttavia, nunca comunque (que es «de todos modos»).",
        ],
        examples: [
          { it: "Per quanto sia robusto, il modello presenta alcune lacune.", es: "Por robusto que sea, el modelo presenta algunas lagunas." },
          { it: "Ne consegue che la tesi va riformulata in termini più prudenti.", es: "Se deduce que la tesis debe reformularse en términos más prudentes." },
          { it: "Ove non emergano controindicazioni, la sperimentazione proseguirà.", es: "Si no surgen contraindicaciones, la experimentación proseguirá." },
        ],
        vocabIds: ["k-x49-per-esteso", "k-x49-in-soldoni", "k-x34-primun-non-nocere--primo-non-nocere"],
        exerciseIds: ["ex-c2-011"],
        conversationPrompt: { it: "Provi a difendere una tesi usando «per quanto» e «ne consegue che».", es: "Intente defender una tesis usando «per quanto» y «ne consegue che»." },
        checkpointIds: ["ex-c2-011"] },
      { id: "les-c2-12", level: "C2", title: "Citación y aparato crítico", titleIt: "Citazione e apparato critico",
        objectives: ["Integrar citas con verbos introductorios variados", "Usar ibidem, op. cit. e supra", "Parafrasear sin plagiar"],
        explanation: [
          "La cita en italiano tiene gramática propia: come afferma Eco (2002: 45), come osserva De Mauro, secondo quanto riporta la fonte. Los verbos introductorios se gradúan: affermare (neutral), sostenere (compromiso), arguire (deducción), addebitare a qualcuno (crítica). La cita literal usa las comillas latinas « » o las comillas altas según la tradición tipográfica de la editorial.",
          "El aparato: Eco, op. cit., p. 33; ibidem; supra, cap. 2. La nota a pie de página es el lugar del comentario discreto: «Cfr. anche Bachtin 1968, dove il concetto viene esteso al romanzo».",
          "La paráfrasis honesta: no basta cambiar palabras; hay que reestructurar la frase y citar igualmente la fuente si la idea es ajena. El autoplagio existe y en Italia se discute en las aulas: riciclare un capitolo già pubblicato sin avisar es mala praxis.",
        ],
        examples: [
          { it: "Come osserva Maria Corti, «il codice non è mai neutro».", es: "Como observa María Corti, «el código nunca es neutro»." },
          { it: "Cfr. anche il capitolo dedicato alle varianti, supra, pp. 45-60.", es: "Véase también el capítulo dedicado a las variantes, supra, pp. 45-60." },
          { it: "La fonte, per quanto citata di seconda mano, risulta attendibile.", es: "La fuente, aunque citada de segunda mano, resulta fiable." },
        ],
        vocabIds: ["k-x26-apparato-critico", "k-x26-bibliografico", "k-x26-sitografia"],
        exerciseIds: ["ex-c2-012"],
        conversationPrompt: { it: "Quando è lecito parafrasare senza citare la fonte?", es: "¿Cuándo es lícito parafrasear sin citar la fuente?" },
        checkpointIds: ["ex-c2-012"] },
    ]},
    { id: "u-c2-4", level: "C2", title: "El ensayo crítico", titleIt: "Il saggio critico", lessons: [
      { id: "les-c2-13", level: "C2", title: "Tesis, antítesis, síntesis", titleIt: "Tesi, antitesi, sintesi",
        objectives: ["Estructurar un ensayo dialéctico", "Formular la tesis con precisión", "Anticipar objeciones (confutazione)"],
        explanation: [
          "El ensayo a la italiana hereda de la tradición retórica la estructura triádica: espongo la tesi, la la metto alla prova con l'antitesi (le obiezioni più forti, non le più deboli), e approdo a una sintesi che non annulli la tensione. La tesis se formula en una oración discutible: no «la Divina Commedia è un capolavoro» (nadie lo niega), sino «la Commedia funziona, ancora oggi, come macchina antropologica che produce modernità».",
          "La confutación elegante: si può obbiettare che…; a tale obiezione si risponde che…; resta il fatto che… El ensayista C2 trata la objeción como huésped de honor: la parafrasea mejor de lo que la formularía su adversario, y solo entonces responde.",
          "El cierre no es resumen: es proiezione. Le domande che restano aperte, la ricerca futura, il limite del presente studio: se è un limite di scala, ditelo; se è di prospettiva, ammettetelo — la honestidad intelectual es el último refinamiento del registro académico.",
        ],
        examples: [
          { it: "Si può obbiettare che il corpus sia troppo esiguo; si risponde che la sua coerenza interna lo legittima.", es: "Se puede objetar que el corpus sea demasiado exiguo; se responde que su coherencia interna lo legitima." },
          { it: "Resta il fatto che l'ipotesi regge anche nei casi limite.", es: "Queda el hecho de que la hipótesis se sostiene también en los casos límite." },
          { it: "Le domande che restano aperte indicano la direzione della ricerca futura.", es: "Las preguntas que quedan abiertas indican la dirección de la investigación futura." },
        ],
        vocabIds: ["d5-confutare", "k-x23-controbattere", "k-x26-dissertazione"],
        exerciseIds: ["ex-c2-013"],
        conversationPrompt: { it: "Formuli una tesi discutibile su un autore italiano a sua scelta.", es: "Formule una tesis discutible sobre un autor italiano a su elección." },
        checkpointIds: ["ex-c2-013"] },
      { id: "les-c2-14", level: "C2", title: "El texto argumentativo en el examen", titleIt: "Il testo argomentativo all'esame",
        objectives: ["Redactar un texto argumentativo CILS/C2 en 90 minutos", "Calibrar la extensión de cada parte", "Autocorregir los errores típicos del hispanohablante"],
        explanation: [
          "En los exámenes C2 (CILS Quattro, CELI 5) la prova scritta pide un texto argumentativo de 250-300 parole en 90 minuti, a menudo a partir de un estímulo (un titolo polemico, un dato statistico, una citazione). Plantilla robusta: título aforístico, apertura que reformula el estímulo (Non a caso si sostiene che…), desarrollo en dos bloques con conectivos visibles, y cierre personal (a mio avviso, dunque).",
          "Gestión del tiempo: 15 minuti di scaletta (esquema), 50 di stesura (redacción), 25 di revisione. En la revisión, el hispanohablante caza sus fieras: subjuntivo tras sebbene/purché, concordancia del participio con essere, la preposición del infinito (di fare / a fare según el verbo), y los calcos léxicos: attenzione a «eventualmente» (possibilmente) e «actualmente» (attualmente).",
          "Los evaluadores valoran lessico vario (evitar la repetición usando sinónimos del diccionario: k-x23 y k-x49), meccanismi di coesione (anafora lessicale, sinonimia) y punteggiatura adulta: il punto e virgola separa cláusulas coordinadas largas; los dos puntos introducen explicaciones o listas.",
        ],
        examples: [
          { it: "Non a caso si sostiene che la lettura cartacea stia scomparendo.", es: "No en vano se sostiene que la lectura en papel está desapareciendo." },
          { it: "Sebbene i dati confortino gli ottimisti, resta un margine di dubbio.", es: "Aunque los datos consuelen a los optimistas, queda un margen de duda." },
          { it: "A mio avviso, dunque, la questione va riformulata più che risolta.", es: "A mi juicio, por tanto, la cuestión debe reformularse más que resolverse." },
        ],
        vocabIds: ["k-b2-a-mio-avviso", "k-x49-in-sintesi", "k-b2-se-non-altro"],
        exerciseIds: ["ex-c2-014"],
        conversationPrompt: { it: "Preferisce la penna o la tastiera all'esame scritto? Lo argomenti.", es: "¿Prefiere la pluma o el teclado en el examen escrito? Argumente." },
        checkpointIds: ["ex-c2-014"] },
    ]},
    { id: "u-c2-5", level: "C2", title: "La lengua literaria", titleIt: "La lingua letteraria", lessons: [
      { id: "les-c2-15", level: "C2", title: "Figuras retóricas en acción", titleIt: "Figure retoriche in azione",
        objectives: ["Reconocer metáfora, metonimia y sineddoche en contexto", "Analizar el efecto de la inversión (chiasmo, anastrofe)", "Comentar un pasaje con terminología precisa"],
        explanation: [
          "La metáfora di Saba «Il mio cuore è in piazza» condensa programa poético y biografía; la metonimia «bere un bicchiere» es tan doméstica que solo el análisis la hace visible. En C2 no basta nombrar la figura: hay que decir qué produce (efetto di straniamento, di accelerazione, di solennità). El comentario italiano usa fórmulas: «il verso si apre con un'anafora che…», «la sinestesia salda insieme…».",
          "El orden de palabras es retórica: l'iperbaton (inversion) de la inversione dà equilibrio — attenzione sempre alle attribuzioni. La anastrofe y el chiasmo crean equilibrio o claustrofobia; la ellissi acelera el diálogo; el oxímoron leopardiano congela el pensamiento.",
          "La lectura en voz alta revela la métrica del pensamiento: probar a leer Montale con el acento en la décima sílaba. «Spesso il male di vivere ho incontrato»: endecasillabo con cesura dopo la quinta sillaba.",
        ],
        examples: [
          { it: "«Spesso il male di vivere ho incontrato» — endecasillabo con iperbato.", es: "«Spesso il male di vivere ho incontrato» — endecasílabo con hipérbaton." },
          { it: "La sinestesia «suono dolce» fonde udito e gusto.", es: "La sinestesia «suono dulce» funde oído y gusto." },
          { it: "L'ossimoro «ghiaccio bollente» congela la speranza.", es: "El oxímoron «hielo hirviente» congela la esperanza." },
        ],
        vocabIds: ["k-x28-metonimia", "k-x28-sinestesia", "k-x28-chiasmo"],
        exerciseIds: ["ex-c2-015"],
        conversationPrompt: { it: "Quale figura retorica la colpisce di più e perché?", es: "¿Qué figura retórica le impacta más y por qué?" },
        checkpointIds: ["ex-c2-015"] },
      { id: "les-c2-16", level: "C2", title: "El análisis del texto moderno", titleIt: "L'analisi del testo moderno",
        objectives: ["Analizar un pasaje de Calvino, Levi y Morante", "Distinguir voz narrante y focalización", "Redactar un comentario estructurado"],
        explanation: [
          "El comentario al texto italiano: (1) inquadramento (autore, opera, anno); (2) parafrasi del passo; (3) análisis léxico y sintáctico; (4) figure retoriche; (5) temi e collegamenti. Con Calvino (Le città invisibili) la clave es la estructura combinatoria: cada ciudad es un aforismo narrativo; con Levi (Se questo è un uomo) la testimonianza impone el léxico de la química y de la Shoah, preciso y despojado; con Morante (La storia) la focalización infantil (Useppe) filtra la Historia sin retórica.",
          "La voz narrante: io narrante (Levi), narratore onnisciente (Manzoni), narratore interno (Morante). La focalización interna limitada produce empatía; la cero (camera obscura) produce objetividad documental. En C2 se citan las palabras exactas del pasaje: «la prosa si fa analitica, quasi processuale».",
          "Errores típicos del hispanohablante en el comentario: confundir novela y relato (romanzo/racconto), decir «argumento» por trama (intreccio), y analizar el contenido sin tocar la forma. En Italia la forma es el contenido: cambiar el orden de las palabras de un pasaje de Gadda es destruirlo.",
        ],
        examples: [
          { it: "Il passo si apre con una focalizzazione interna limitata.", es: "El pasaje se abre con una focalización interna limitada." },
          { it: "La prosa di Levi si fa analitica, quasi processuale.", es: "La prosa de Levi se vuelve analítica, casi procesal." },
          { it: "L'intreccio si dipana su tre piani temporali.", es: "La trama se despliega en tres planos temporales." },
        ],
        vocabIds: ["k-x26-focalizzazione", "k-x26-io-narrante", "k-x26-dipanarsi"],
        exerciseIds: ["ex-c2-016"],
        conversationPrompt: { it: "Quale scrittore italiano del Novecento meriterebbe più lettori?", es: "¿Qué escritor italiano del Novecientos merecería más lectores?" },
        checkpointIds: ["ex-c2-016"] },
    ]},
    { id: "u-c2-6", level: "C2", title: "Métrica y tradición", titleIt: "Metrica e tradizione", lessons: [
      { id: "les-c2-17", level: "C2", title: "El endecasílabo y sus secretos", titleIt: "L'endecasillabo e i suoi segreti",
        objectives: ["Contar sílabas con sinalefa y diéresis", "Reconocer el endecasillabo a maiore e a minore", "Leer en voz alta con el acento correcto"],
        explanation: [
          "El endecasillabo tiene 11 sílabas con acento obligatorio en la décima; el resto es juego: «Nel mezzo del cammin di nostra vita» — accenti su mezzo (2ª), cammin (6ª) e vita (10ª): el esquema clásico a maiore (4+6). «Lenta la nube al nuvol vago uguale»: a minore (el acento cae en cuarta). La sinalefe une vocales contiguas (d'e|i nostr|a v|ita); la dieresi las separa cuando la métrica lo exige.",
          "El settenario (7 sílabas, acento en 6ª) alterna con el endecasillabo en la canzone y en Leopardi: «Sempre caro mi fu quest'ermo colle» — endecasillabi 1, 3, 4; settenario il 2º («e questa siepe»)... En realidad L'infinito: endecasillabi y un settenario final («e il naufragar m'è dolce in questo mare» es endecasillabo). La lección: contar siempre, confiar nunca.",
          "La lectura en voz alta: el verso italiano no es yámbico como el español; sus acentos caen donde la palabra los trae. Leer Dante buscando el ictus en la 10ª, y dejar que la lengua haga el resto, es la mejor métrica aplicada.",
        ],
        examples: [
          { it: "Nel mez-zo del cam-min di no-stra vi-ta: 4+6, a maiore.", es: "Nel mez-zo del cam-min di no-stra vi-ta: 4+6, a maiore." },
          { it: "«e questa siepe»: settenario senza cesura interna.", es: "«y este seto»: heptasílabo sin cesura interna." },
          { it: "La sinalefe «di-no-stra» fonde la i e la o di due parole.", es: "La sinalefa funde la i y la o de dos palabras." },
        ],
        vocabIds: ["d5-endecasillabo", "k-x28-settenario", "k-x28-sinalefe"],
        exerciseIds: ["ex-c2-017"],
        conversationPrompt: { it: "Riesce a sentire l'accento sulla decima sillaba leggendo Dante?", es: "¿Consigue sentir el acento en la décima sílaba leyendo a Dante?" },
        checkpointIds: ["ex-c2-017"] },
      { id: "les-c2-18", level: "C2", title: "Del sonetto al verso libre", titleIt: "Dal sonetto al verso libero",
        objectives: ["Reconocer la estructura del sonetto (ABAB ABAB CDC DCD)", "Seguir la evolución: canzone → sonetto → verso libero", "Situar la tradición: Petrarca, Leopardi, Montale"],
        explanation: [
          "El soneto italiano: dos cuartetos y dos tercetos, con rima alterna o encadenada en los cuartetos y esquema variable en los tercetos. Petrarca lo consagra como forma del conflicto interior (proemio RVF 1: «Voi ch'ascoltate in rime sparse il suono»); Shakespeare lo toma de Italia e invierte los cuartetos; en el Novecento se rompe (Saba usa el soneto con ironía, Ungaretti lo diluye).",
          "La canzone petrarquista —stanze de endecasílabos y settenarios con fronte y sirma— culmina en «Chiare, fresche e dolci acque». Leopardi hereda y desmonta: L'infinito es un cuasi-sonetto desdoblado en 15 versos. Montale desemboca en el verso libero sciolto de Ossi di seppia: el muro, il varco, il Mediterráneo cerrado.",
          "El C2 cultural: citar de memoria un endecasillabo por autor (Dante, Petrarca, Ariosto, Tasso, Leopardi, Montale, Quasimodo «Ed è subito sera» — settenario doble). En un coloquio universitario italiano, no citar nunca es sospechoso; citar mal, imperdonable.",
        ],
        examples: [
          { it: "«Voi ch'ascoltate in rime sparse il suono» — sonetto proemiale.", es: "«Voi ch'ascoltate in rime sparse il suono» — soneto proemial." },
          { it: "«M'era mostrato pur un varco»: il varco montaliano.", es: "«Solo se me mostró un vano»: el vano montaliano." },
          { it: "«Ed è subito sera»: due settenari, una carrera poética en nueve sílabas.", es: "«Ed è subito sera»: dos heptasílabos, una carrera poética en nueve sílabas." },
        ],
        vocabIds: ["d5-sonetto", "k-x28-verso-libero", "k-x28-ottava-rima"],
        exerciseIds: ["ex-c2-018"],
        conversationPrompt: { it: "Quale verso della tradizione italiana si porterebbe su un'isola deserta?", es: "¿Qué verso de la tradición italiana se llevaría a una isla desierta?" },
        checkpointIds: ["ex-c2-018"] },
    ]},
    { id: "u-c2-7", level: "C2", title: "Prova finale C2 académica", titleIt: "Esame finale C2 accademico", lessons: [
      { id: "les-c2-19", level: "C2", title: "Examen final de la unidad académica", titleIt: "Esame finale dell'unità accademica",
        objectives: ["Demostrar dominio del registro académico y literario", "Analizar un pasaje y defender una tesis", "Integrar los 8000 lemas del diccionario"],
        explanation: [
          "Verificación global: un pasaggio de la tradición (Dante, Leopardi o Montale) para comentar con terminología precisa (focalizzazione, endecasillabo, ossimoro); un titolo polemico para un texto argumentativo de 300 palabras; y un coloquio oral en el que defender la propia tesis con conectivos cultos. El certificado de esta unidad acredita competencia C2 académica.",
          "Consejo final: el C2 no es saber más palabras, es elegir la palabra justa en el registro justo. La lengua literaria italiana es una armería: ogni strumento al suo posto — e il silenzio, quando serve.",
        ],
        examples: [{ it: "In bocca al lupo per l'esame finale C2!", es: "¡Mucha suerte en el examen final C2!" }],
        vocabIds: [],
        exerciseIds: ["ex-c2-019"],
        conversationPrompt: { it: "Ci presenti in due minuti la sua tesi di laurea ideale.", es: "Preséntenos en dos minutos su tesis de grado ideal." },
        checkpointIds: ["ex-c2-019"] },
    ]},
  ],
};
