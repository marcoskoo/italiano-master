import type { CbGrammarDeep } from "./grammar-deep";

/* ═══ v9.15 · Grammatica approfondita · C1 (cu-c1-01 … cu-c1-10) ═══ */

export const GD_C1: Record<string, CbGrammarDeep> = {
  "cu-c1-01": {
    sezioni: [
      { t: "Gli strumenti della riformulazione", body: "El ensayo italiano avanza reformulando: cioè, ossia (es decir), vale a dire (o sea), in altre parole (en otras palabras), in sintesi / in conclusione (en síntesis), insomma (en fin de cuentas, coloquial). La reformulación no repite: precisa. «La gestione delle risorse — ossia l'allocazione dei fondi europei — resta il nodo critico»." },
      { t: "Quando si usa", body: "Tres funciones: (1) definir un término técnico la primera vez que aparece; (2) resumir un párrafo entero en una frase («In sintesi: senza investimento non c'è innovazione»); (3) cerrar la argumentación («In conclusione, i dati confermano l'ipotesi iniziale»). La reformulación mantiene el referente y cambia el nivel de abstracción." },
      { t: "Attenzione! · trampas para hispanohablantes", body: "«es decir» = cioè (con è cerrada, no «cioe» sin acento). «o sea» = ossia. insomma es coloquial y polisémico: puede resumir o expresar perplejidad («Insomma, non sappiamo cosa fare») — en un ensayo usa in sintesi. Non traduzcas «en otras palabras» literalmente por «in altre parole» sin coma: la fórmula correcta con inciso es «ossia» o «cioè» entre comas o rayas." },
      { t: "Nel testo accademico", body: "La técnica del buena prosa: tras dos frases densas, una reformulación alivia al lector: «Il fenomeno, vale a dire la progressiva riduzione del vocabolario politico, si osserva dal 2010». Alternar definición y síntesis es el pulso del saggio." },
    ],
    esempi: [
      { it: "La gestione delle risorse, ossia l'allocazione dei fondi europei, resta il nodo critico.", es: "La gestión de los recursos, es decir, la asignación de los fondos europeos, sigue siendo el nudo crítico." },
      { it: "In sintesi: senza investimento pubblico non c'è innovazione privata.", es: "En síntesis: sin inversión pública no hay innovación privada." },
      { it: "Il fenomeno — vale a dire la progressiva riduzione del vocabolario politico — si osserva dal 2010.", es: "El fenómeno — o sea, la progresiva reducción del vocabulario político — se observa desde 2010." },
      { it: "In conclusione, i dati confermano l'ipotesi iniziale del gruppo di ricerca.", es: "En conclusión, los datos confirman la hipótesis inicial del grupo de investigación." },
      { it: "La coesione sociale, in altre parole, non è un dato ma un processo.", es: "La cohesión social, en otras palabras, no es un dato sino un proceso." },
    ],
    usi: [
      { q: "Para definir un término técnico dentro de una frase:", options: ["ossia / cioè entre comas o rayas", "per esempio al inicio", "infatti al final"], answer: 0, explain: "La reformulación definitoria: «le risorse, ossia i fondi»." },
      { q: "«en síntesis» en un ensayo formal:", options: ["in sintesi", "insomma", "comunque"], answer: 0, explain: "insomma es coloquial; in sintesis / in conclusione son académicos." },
    ],
  },

  "cu-c1-02": {
    sezioni: [
      { t: "Come si forma", body: "Subordinadas finales: affinché / perché + congiuntivo (para que), con lo scopo di + infinito, allo scopo di. Causales cultas: poiché, giacché, siccome (cabeza de frase), dato che, in quanto (en cuanto que, por ser), a causa di / per via di + sustantivo (negativo), grazie a + sustantivo (positivo), in conseguenza di." },
      { t: "Quando si usa", body: "La trama lógica del ensayo enlaza fines y causas: «Il governo ha ristretto i criteri affinché le risorse raggiungano chi ne ha davvero bisogno». in quanto clasifica al sujeto: «Il testo è rilevante in quanto primo documento del genere». poiché introduce la causa ya conocida por el lector, como el español «puesto que»." },
      { t: "Attenzione! · trampas para hispanohablantes", body: "affinché + CONGIUNTIVO siempre (affinché si capisca), mientras que «para que» español también subjuntivo — coincide, aprovecha. perché causal (porque) lleva indicativo; perché final (para que) lleva subjuntivo: la misma palabra con dos valores que se distinguen solo por el modo. «a causa di» y «per via di» van seguidas de sustantivo, no de verbo. in quanto no es temporale: significa 'por ser/en cuanto que'." },
      { t: "Nel testo accademico", body: "El encadenamiento causal elegante: «Poiché i fondi sono limitati, e dato che le priorità sono contestate, il comitato ha scelto — affinché la decisione risulti trasparente — di pubblicare i criteri»." },
    ],
    esempi: [
      { it: "Il governo ha ristretto i criteri affinché le risorse raggiungano chi ne ha bisogno.", es: "El gobierno ha restringido los criterios para que los recursos lleguen a quien los necesita." },
      { it: "Il testo è rilevante in quanto primo documento del genere.", es: "El texto es relevante por ser el primer documento del género." },
      { it: "Poiché i fondi sono limitati, il comitato ha ridefinito le priorità.", es: "Puesto que los fondos son limitados, el comité ha redefinido las prioridades." },
      { it: "Grazie alla riforma, le iscrizioni sono aumentate del venti per cento.", es: "Gracias a la reforma, las inscripciones han aumentado en un veinte por ciento." },
      { it: "A causa della siccità, il raccolto è diminuito drasticamente.", es: "A causa de la sequía, la cosecha ha disminuido drásticamente." },
    ],
    usi: [
      { q: "affinché + verbo exige:", options: ["congiuntivo", "indicativo", "condizionale"], answer: 0, explain: "affinché si capisca / raggiungano: final + congiuntivo." },
      { q: "«por ser / en cuanto que»:", options: ["in quanto", "quando", "per quanto"], answer: 0, explain: "in quanto clasifica: «rilevante in quanto primo documento»." },
    ],
  },

  "cu-c1-03": {
    sezioni: [
      { t: "La sintassi del titolo", body: "El titular italiano usa tres técnicas: (1) nominalización pura: «Dimissioni del ministro» (sin verbo); (2) verbo antepuesto al sujeto: «Crolla il ponte a Genova» (se cae el puente en Génova); (3) presente histórico: «Il Papa incontra i delegati». Se eliden artículos y auxiliares: «Arrestato il sospetto» (= è stato arrestato)." },
      { t: "Quando si usa", body: "El orden verbo-sujeto del titular marca la noticia frente a la descripción: «Nasce il nuovo museo del Design» anuncia un evento; «Il museo nasce da un progetto…» lo comenta. Los títulos de ensayo y libros prefieren la nominalización con dos puntos: «Lingua e potere: percorsi di analisi»." },
      { t: "Attenzione! · trampas para hispanohablantes", body: "El español titula igual («Cae el puente en Génova», «Dimite el ministro»), pero el italiano elide el artículo aún más agresivamente: «Arrestato boss della mafia» (un español escribiría «Detenido el jefe…»). Cuidado con el participio elidido: «Trovate le prove» = son state trovate. Y el presente histórico del titular nunca es presente real: «Il treno deraglia» puede ser de ayer." },
      { t: "Nel testo giornalistico", body: "La jerarquía del periódico: título nominal o verbo-sujeto, subtítulo con el detalle («L'incidente di ieri sera: tre feriti lievi»), y cuerpo con la prosa completa. Imitar esta gradación en el ensayo oral: anuncio nominal, desarrollo completo." },
    ],
    esempi: [
      { it: "Crolla il ponte a Genova: quattro morti e decine di feriti.", es: "Se cae el puente en Génova: cuatro muertos y decenas de heridos." },
      { it: "Nasce a Milano il nuovo museo del Design.", es: "Nace en Milán el nuevo museo del Diseño." },
      { it: "Arrestato a Palermo il boss latitante da dieci anni.", es: "Detenido en Palermo el jefe prófugo desde hace diez años." },
      { it: "Dimissioni del ministro: crisi di governo al tramonto.", es: "Dimisión del ministro: crisis de gobierno al atardecer." },
      { it: "Trovate le prove del finanziamento illecito.", es: "Encontradas las pruebas de la financiación ilícita." },
    ],
    usi: [
      { q: "«Arrestato il sospetto» equivale a:", options: ["È stato arrestato il sospetto", "Il sospetto arresta", "Arresteranno il sospetto"], answer: 0, explain: "El titular elide l'ausiliare: participio solo = pasiva compuesta." },
      { q: "El orden típico del titular de evento:", options: ["verbo + sujeto (Crolla il ponte)", "sujeto + verbo (Il ponte crolla sempre)", "sustantivo solo siempre"], answer: 0, explain: "Verbo antepuesto anuncia la noticia; sujeto+verbo la comenta." },
    ],
  },

  "cu-c1-04": {
    sezioni: [
      { t: "Come si forma", body: "Il condizionale composto al servicio de la diplomacia: sarebbe opportuno + infinito (conviene/sería oportuno), sarebbe auspicabile (sería deseable), sarebbe preferibile, si sarebbero dovuti + infinito (se habrían debido). El condizionale passato atenúa mandatos y reproches: «Avremmo gradito una comunicazione preventiva» (habríamos agradecido — reproche elegante)." },
      { t: "Quando si usa", body: "En el ensayo y la correspondencia académica, el condizionale composto convierte órdenes en sugerencias y quejas en observaciones: «Sarebbe opportuno includere i dati al paragrafo 3», «Gli autori avrebbero dovuto discutere i limiti dello studio». La diplomacia italiana escrita evita el imperativo y el presente categorical." },
      { t: "Attenzione! · trampas para hispanohablantes", body: "El español académico usa condicional igual («sería conveniente»), pero el italiano lo combina con infinito y congiuntivo en patrones fijos: sarebbe opportuno che + congiuntivo. Cuidado con la concordancia: «si sarebbero dovuti iscrivere» (masculino plural), «si sarebbe dovuta iscrivere» (femenino). Y no confundas el uso diplomático con el hipotético: «sarebbe stato» puede ser hipótesis no realizada o reproche según contexto." },
      { t: "Nel testo accademico", body: "La fórmula de la discusión científica: «Sarebbe auspicabile che futuri studi verifichino questi risultati su campioni più ampi» — sugerencia cortés que en realidad es una recomendación de revisores." },
    ],
    esempi: [
      { it: "Sarebbe opportuno includere i dati nel paragrafo tre.", es: "Sería oportuno incluir los datos en el párrafo tres." },
      { it: "Gli autori avrebbero dovuto discutere i limiti dello studio.", es: "Los autores habrían debido discutir las limitaciones del estudio." },
      { it: "Sarebbe auspicabile una maggiore trasparenza nelle procedure.", es: "Sería deseable una mayor transparencia en los procedimientos." },
      { it: "Avremmo gradito una comunicazione preventiva della decisione.", es: "Habríamos agradecido una comunicación previa de la decisión." },
      { it: "Sarebbe stato preferibile convocare il comitato prima dell'estate.", es: "Habría sido preferible convocar el comité antes del verano." },
    ],
    usi: [
      { q: "La fórmula diplomática para pedir un cambio en un artículo:", options: ["Sarebbe opportuno includere…", "Dovete includere…", "Includete subito…"], answer: 0, explain: "El condizionale composto atenúa: sarebbe opportuno + infinito." },
      { q: "«se habrían debido inscribir» (ellos, masc.):", options: ["si sarebbero dovuti iscrivere", "si sarebbe dovuti iscrivere", "si avrebbero dovuto iscrivere"], answer: 0, explain: "Concordancia plural con essere: dovuti." },
    ],
  },

  "cu-c1-05": {
    sezioni: [
      { t: "Come si forma", body: "Il trapassato remoto: ebbe + participio (ebbe finito), fu + participio (fu arrivato). Solo indicativo, tercera persona casi siempre, y SOLO en subordinadas temporales con appena, quando, dopo che, finché, con el verbo principal en passato remoto: «Appena fu uscito, tutti si misero a ridere»." },
      { t: "Quando si usa", body: "Es el tiempo de la narración literaria decimonónica y de la prosa histórica: marca un pasado anterior a otro pasado remoto. En la narrativa moderna se sustituye por el passato remoto simple o el trapassato prossimo: «Appena uscì…» / «Appena era uscito…». Su uso correcto señala registro alto y arcaizante." },
      { t: "Attenzione! · trampas para hispanohablantes", body: "El español traduce con el pluscuamperfecto simple: «apenas hubo salido, todos se echaron a reír». El error más común es usarlo FUERA de la subordinada temporal: «Ebbe finito il lavoro» como frase principal ✗ — el trapassato remoto no existe sin su marca temporal (appena, quando, dopo che) y sin el remoto en la principal. Tampoco se usa en el habla: en conversación, «appena è uscito, tutti si sono messi a ridere»." },
      { t: "Nel testo letterario", body: "Manzoni y la prosa del Ottocento lo usan sistemáticamente: «Quando ebbe terminato il discorso, si alzò». Reconocerlo basta para leer; usarlo marca estilo cultivado o irónico-arcaico en la prosa moderna." },
    ],
    esempi: [
      { it: "Appena fu uscito, tutti si misero a ridere.", es: "Apenas hubo salido, todos se echaron a reír." },
      { it: "Quando ebbe finito il discorso, il pubblico applaudì a lungo.", es: "Cuando hubo terminado el discurso, el público aplaudió largo rato." },
      { it: "Dopo che fu calato il sipario, il teatro si svuotò in silenzio.", es: "Después de que hubo bajado el telón, el teatro se vació en silencio." },
      { it: "Non appena ebbe letto la lettera, capì tutto.", es: "Tan pronto como hubo leído la carta, lo entendió todo." },
      { it: "Finché fu rimasto in scena, nessuno osò fiatare.", es: "Mientras hubo permanecido en escena, nadie osó respirar." },
    ],
    usi: [
      { q: "El trapassato remoto solo aparece:", options: ["en subordinadas temporales con appena/quando/dopo che", "en frases principales", "en el habla cotidiana"], answer: 0, explain: "Appena fu uscito, tutti si misero…: subordinada temporal + remoto en la principal." },
      { q: "En la conversación moderna, «apenas salió, todos rieron» se dice:", options: ["Appena è uscito, tutti si sono messi a ridere.", "Appena fu uscito, tutti risero sempre.", "Appena ebbe uscito, ridono."], answer: 0, explain: "El habla usa passato prossimo; el trapassato remoto es literario." },
    ],
  },

  "cu-c1-06": {
    sezioni: [
      { t: "Le consecutiva letterarie", body: "La construcción consecutiva intensifica: così + aggettivo + che, tanto + aggettivo + che, talmente + aggettivo + che, tale (… ) da + infinito, a tal punto che. La variante literaria invierte o expande: «Tanto era il dolore che nessuno parlava» (grande era el dolor…), con el sustantivo antepuesto." },
      { t: "Quando si usa", body: "En el comentario literario, la consecutiva traduce el efecto estético: «Il paesaggio è talmente desolato che il silenzio diventa protagonista». La forma con da + infinito condensa: «un dettaglio tale da fermare il lettore» (un detalle tan… que detiene al lector). Los intensificadores de apoyo: estremamente, oltremodo, immensamente, di gran lunga." },
      { t: "Attenzione! · trampas para hispanohablantes", body: "«tan… que» = così/tanto/talmente… che — el español usa «que» y el italiano «che» también, coincidencia perfecta. La diferencia está en las variantes cultas: tale da + infinito no existe en español (*«tal de parar» ✗) y hay que construirla como «tan… como para + infinitivo». Ojo con di gran lunga: significa 'con gran diferencia' (di gran lunga il migliore = con diferencia el mejor), no 'de lejos' espacial." },
      { t: "Nel commento letterario", body: "La crítica une consecutiva e intensificadores: «Una prosa tale da rendere il lettore complice», «Il pathos raggiunge un'intensità tale che la pagina diventa insostenibile» — el patrón favorito de la contracubierta italiana." },
    ],
    esempi: [
      { it: "Il paesaggio è talmente desolato che il silenzio diventa protagonista.", es: "El paisaje es tan desolado que el silencio se vuelve protagonista." },
      { it: "Tanto era il dolore che nessuno osava parlare.", es: "Tan grande era el dolor que nadie osaba hablar." },
      { it: "È un dettaglio tale da fermare il lettore a ogni riga.", es: "Es un detalle tan intenso como para detener al lector en cada línea." },
      { it: "La luce raggiunge un'intensità tale che la scena sembra sospesa.", es: "La luz alcanza una intensidad tal que la escena parece suspendida." },
      { it: "È di gran lunga il miglior saggio sul tema.", es: "Es con diferencia el mejor ensayo sobre el tema." },
    ],
    usi: [
      { q: "«tan… que» (construccion literaria):", options: ["così/talmente + agg + che", "molto + agg + che", "tanto di + che"], answer: 0, explain: "La consecutiva: così forte che / talmente forte che." },
      { q: "«di gran lunga il migliore» significa:", options: ["con diferencia el mejor", "de lejos el mejor espacialmente", "a grandes rasgos bueno"], answer: 0, explain: "Intensificador comparativo: di gran lunga = con gran diferencia." },
    ],
  },

  "cu-c1-07": {
    sezioni: [
      { t: "Le strutture del linguaggio giuridico", body: "El lenguaje jurídico italiano combina: pasiva con venire/essere («Il contratto viene stipulato in duplice copia»), futuro de obligación («Il contraente dovrà comunicare…»), gerundio con valor de salvedad («fermo restando il diritto di…» = sin perjuicio del derecho a…), fórmulas preposicionales: ai sensi di (a los efectos de/con arreglo a), in deroga a (en derogación de), ad effetto di, a titolo di." },
      { t: "Quando si usa", body: "Contratos, normas y comunicaciones oficiales. El futuro jurídico expresa obligación normativa: «L'utente dovrà attivarsi entro trenta giorni» no predice: prescribe. La pasiva elimina al agente y universaliza el mandato. El gerundio fermo restando introduce la cláusula de reserva." },
      { t: "Attenzione! · trampas para hispanohablantes", body: "El español jurídico es igual de retorcido, pero las fórmulas no son intercambiables una a una: «a los efectos de» = ai fini di / ai sensi di según el contexto; «en adelante» = di seguito / d'ora in poi; «el/la abajo firmante» = il/la sottoscritto/a. Error típico: traducir «sentenza» por «sentencia de opinión» — sentenza es solo la resolución judicial (fallo); la opinión es parere." },
      { t: "Nel testo giuridico", body: "Una cláusula tipo: «Ai sensi dell'art. 3, il contraente dovrà comunicare per iscritto ogni variazione, fermo restando il diritto di recesso previsto dall'art. 7». Con estos cuatro patrones lees el 80% de cualquier contrato italiano." },
    ],
    esempi: [
      { it: "Ai sensi dell'articolo 3, il contraente dovrà comunicare ogni variazione per iscritto.", es: "Con arreglo al artículo 3, el contratante deberá comunicar toda variación por escrito." },
      { it: "Il contratto viene stipulato in duplice copia originale.", es: "El contrato se estipula por duplicado en copia original." },
      { it: "Fermo restando il diritto di recesso, le parti convengono quanto segue.", es: "Sin perjuicio del derecho de desistimiento, las partes convienen lo siguiente." },
      { it: "In deroga a quanto previsto dal regolamento, è ammessa la proroga.", es: "En derogación de lo previsto por el reglamento, se admite la prórroga." },
      { it: "La sentenza è passata in giudicato.", es: "La sentencia ha pasado en cosa juzgada." },
    ],
    usi: [
      { q: "«fermo restando il diritto di…» significa:", options: ["sin perjuicio del derecho a…", "queda firme el derecho de…", "se suspende el derecho de…"], answer: 0, explain: "Gerundio de salvedad: fermo restando = sin perjuicio de." },
      { q: "El futuro en el lenguaje jurídico («dovrà comunicare») expresa:", options: ["obligación normativa", "predicción estadística", "cortesía"], answer: 0, explain: "El futuro jurídico prescribe: il contraente dovrà = deberá." },
    ],
  },

  "cu-c1-08": {
    sezioni: [
      { t: "Come si forma", body: "La dislocazione a sinistra mueve un constituyente al inicio y lo retoma con un pronombre: «Il caffè, lo prendo amaro» (el café, lo tomo amargo), «A Marco, non gli ho ancora risposto», «Stasera, cinema!». El pronombre resuntivo (lo, gli, ci, ne) es obligatorio: sin él la frase resulta agramatical." },
      { t: "Quando si usa", body: "Es la marca del habla espontánea italiana: presenta el tema y luego comenta. Funciona para tópicos nuevos («Questo film, non me lo perdo manco morto») y para contrastes («I libri li leggo io, il cinema lo scegli tu»). En el norte se dislocan objetos; en el sur casi todo, incluidos subjuetos («Marco, lui non chiama mai»)." },
      { t: "Attenzione! · trampas para hispanohablantes", body: "Buena noticia: el español hace exactamente lo mismo («el café LO tomo amargo», «a Marcos no LE he contestado»). La diferencia es de frecuencia y contexto: el italiano disloca aún más y lo acepta en registros donde el español lo evitaría. En cambio, la escritura formal lo evita: un ensayo con dislocazioni suena oral. No confundas con el topicalizador per quanto riguarda (en cuanto a), que es la versión académica." },
      { t: "Nel parlato", body: "La conversación real está llena de dislocazioni: «Il pane, lo compagni tu?», «Di questo, ne parliamo domani», «Quel ristorante, ci torno volentieri». Practícalas al hablar; destiérralas al escribir." },
    ],
    esempi: [
      { it: "Il caffè, lo prendo amaro, grazie.", es: "El café lo tomo amargo, gracias." },
      { it: "A Marco non gli ho ancora risposto, poverino.", es: "A Marcos no le he contestado todavía, pobre." },
      { it: "Questo film, non me lo perdo manco morto.", es: "Esta película no me la pierdo ni muerto." },
      { it: "I libri li scelgo io, il cinema lo scegli tu.", es: "Los libros los elijo yo, el cine lo eliges tú." },
      { it: "Di questo problema, ne parleremo con calma domani.", es: "De este problema hablaremos con calma mañana." },
    ],
    usi: [
      { q: "La dislocazione a sinistra exige:", options: ["un pronombre que retome el tema (lo/gli/ci/ne)", "un verbo al inicio", "el subjuntivo"], answer: 0, explain: "«Il caffè, LO prendo»: el clitico resuntivo es obligatorio." },
      { q: "En un ensayo académico, el topicalizador correcto es:", options: ["per quanto riguarda…", "il caffè, lo prendo…", "invece…"], answer: 0, explain: "Per quanto riguarda X = en cuanto a X; la dislocazione es oral." },
    ],
  },

  "cu-c1-09": {
    sezioni: [
      { t: "La gerarchia del discorso orale", body: "El ensayo oral italiano se estructura con marcadores jerárquicos: prima di tutto / innanzitutto (antes que nada), in secondo luogo, da un lato… dall'altro (por una parte… por otra), infine / da ultimo. Los topicalizadores encuadran: per quanto riguarda (en cuanto a), quanto a, sul fronte (en el frente de)." },
      { t: "Quando si usa", body: "En seminarios y presentaciones: «Prima di tutto, il quadro teorico; in secondo luogo, i dati; da ultimo, i limiti». Los enfáticos escalonan la información: proprio (justamente), addirittura (incluso), perfino (hasta), niente meno che (nada menos que), soprattutto (sobre todo)." },
      { t: "Attenzione! · trampas para hispanohablantes", body: "«en primer lugar» = prima di tutto o innanzitutto, no «in primo luogo» (que existe pero es pesado). da un lato… dall'altro exige la pareja completa, como «por una parte… por la otra». addirittura puede expresar sorpresa positiva o escándalo («ha vinto addirittura il premio!») — más matizado que el español 'incluso'. E infine ≠ finalmente temporal: infine es 'por último' enumerativo." },
      { t: "Nel seminario", body: "La apertura canónica: «Innanzitutto, ringrazio gli organizzatori. Per quanto riguarda il metodo, abbiamo scelto un approccio misto: da un lato l'analisi quantitativa, dall'altro le interviste in profondità. Soprattutto, ci interessava la variazione generazionale»." },
    ],
    esempi: [
      { it: "Innanzitutto, ringrazio gli organizzatori dell'incontro.", es: "Antes que nada, agradezco a los organizadores del encuentro." },
      { it: "Per quanto riguarda il metodo, abbiamo scelto un approccio misto.", es: "En cuanto al método, hemos elegido un enfoque mixto." },
      { it: "Da un lato i dati confermano, dall'altro suggeriscono cautela.", es: "Por una parte los datos confirman, por otra sugieren cautela." },
      { it: "Ha vinto addirittura il premio principale, nessuno se lo aspettava.", es: "Ha ganado incluso el premio principal, nadie se lo esperaba." },
      { it: "Soprattutto, ci interessava la variazione generazionale del lessico.", es: "Sobre todo, nos interesaba la variación generacional del léxico." },
    ],
    usi: [
      { q: "«en cuanto a / con respecto a» (oral académico):", options: ["per quanto riguarda", "secondo me", "invece di"], answer: 0, explain: "Per quanto riguarda il metodo…: topicalizador estándar." },
      { q: "«por una parte… por la otra»:", options: ["da un lato… dall'altro", "prima… poi sempre", "sia… anche"], answer: 0, explain: "La pareja fija: da un lato… dall'altro (lato, no parte)." },
    ],
  },

  "cu-c1-10": {
    sezioni: [
      { t: "La mappa di C1", body: "C1 te ha dado el instrumental del ensayo: reformulación (ossia, in sintesi), finales y causales cultas (affinché, in quanto), sintaxis del titular, condizionale composto diplomático, trapassato remoto literario, consecutivas e intensificadores, lenguaje jurídico, dislocazioni del habla real y marcadores jerárquicos del discurso oral. La gramática C1 es estilo: elegir la forma según el registro." },
      { t: "Gli errori numero uno", body: "Cinco errores C1: (1) «insomma» en un ensayo formal → in sintesi; (2) affinché + indicativo ✗ → + congiuntivo; (3) trapassato remoto sin appena/quando ✗; (4) «tal de + infinitivo» calco español ✗ → tale da; (5) dislocazioni en la prosa académica → per quanto riguarda." },
      { t: "Come mescolare tutto", body: "Un párrafo C1 completo: «Innanzitutto, per quanto riguarda i dati, va detto che il campione — ossia l'insieme dei respondenti — è limitato. Sarebbe stato auspicabile un'estensione a altri contesti, tale da rafforzare la tesi; fermo restando che i risultati attuali, benché parziali, restano indicativi. In sintesi: la direzione è promettente, la verifica resta aperta»." },
      { t: "Il prossimo passo", body: "C2 es el dominio del estilo total: registros del burocratese al neostandard, sintaxis de época, figuras del humor, ritmo de la arenga y la traducción de estructuras que no coinciden entre tus dos lenguas. Bienvenido al nivel donde la gramática se vuelve retórica." },
    ],
    esempi: [
      { it: "Innanzitutto, per quanto riguarda i dati, il campione resta limitato.", es: "Antes que nada, en cuanto a los datos, la muestra sigue siendo limitada." },
      { it: "Sarebbe stato auspicabile un'estensione a altri contesti europei.", es: "Habría sido deseable una extensión a otros contextos europeos." },
      { it: "Una prosa tale da rendere il lettore complice della tesi.", es: "Una prosa tal que vuelve al lector cómplice de la tesis." },
      { it: "Affinché la decisione risulti trasparente, pubblicheremo i criteri.", es: "Para que la decisión resulte transparente, publicaremos los criterios." },
      { it: "In sintesi: la direzione è promettente, la verifica resta aperta.", es: "En síntesis: la dirección es prometedora, la verificación sigue abierta." },
    ],
    usi: [
      { q: "«para que resulte transparente»:", options: ["affinché risulti trasparente", "affinché risulta trasparente", "perché risulta trasparente finale"], answer: 0, explain: "affinché + congiuntivo (risulti)." },
      { q: "El resumen académico de cierre:", options: ["In sintesi / In conclusione", "Insomma dai", "Comunque sia"], answer: 0, explain: "in sintesi es el cierre formal; insomma es coloquial." },
    ],
  },
};
