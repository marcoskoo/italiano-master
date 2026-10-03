/* ── Letture EXTRA · Paquete v9.10 · Parte 2: 4 informazione ─────────
   A2 street food, B1 overturismo, B2 intelligenza artificiale,
   C1 spreco alimentare. 100% contenido original.                      */

import type { CefrLevel } from "./types";
import type { Lettura } from "./letture";

/* ═══ INFORMAZIONE NUOVE ═════════════════════════════════════════════ */

export const INFORMAZIONE_EXTRA: Lettura[] = [
  {
    id: "inf-street-08",
    cat: "informazione",
    level: "A2",
    title: "Lo street food italiano: mangiare per strada",
    titleEs: "El street food italiano: comer por la calle",
    minutes: 3,
    lines: [
      { it: "In Italia si mangia benissimo anche in piedi, camminando per la strada. Lo street food è una tradizione antica: prima ancora che esistesse questa parola inglese, gli italiani compravano cibo pronto nei mercati e nelle piazze.", es: "En Italia se come muy bien también de pie, caminando por la calle. El street food es una tradición antigua: antes de que existiera esta palabra inglesa, los italianos ya compraban comida lista en los mercados y en las plazas." },
      { it: "L'esempio più famoso è la pizza al taglio a Roma: una teglia grande di pizza, tagliata con le forbici e venduta al pezzo, da mangiare calda mentre si torna a casa. Si può scegliere tra mille gusti: patate, zucchine, mortadella o la classica rossa con pomodoro.", es: "El ejemplo más famoso es la pizza al taglio en Roma: una bandeja grande de pizza, cortada con tijeras y vendida por porción, para comer caliente mientras se vuelve a casa. Se puede elegir entre mil sabores: papas, calabacines, mortadela o la clásica roja con tomate." },
      { it: "A Palermo, invece, lo street food è quasi una religione. Lo sfincione è una pizza soffice con cipolle e cacioavallo, e le arancine sono palline di riso fritte ripiene di carne o burro. Chi ha fretta mangia panelle: frittelle di ceci che si vendono nei chioschi da più di cento anni.", es: "En Palermo, en cambio, el street food es casi una religión. El sfincione es una pizza esponjosa con cebolla y caciocavallo, y los arancini son bolitas de arroz fritas rellenas de carne o mantequilla. Quien tiene prisa come panelle: frituras de garbanzos que se venden en quioscos desde hace más de cien años." },
      { it: "E a Firenze? Lì i lavoratori del mercato mangiano da sempre il lampredotto: un panino con trippa bollita, condita con salsa verde piccante. È un piatto povero della tradizione contadina, oggi diventato famoso anche tra i turisti.", es: "¿Y en Florencia? Allí los trabajadores del mercado comen desde siempre el lampredotto: un pan con mondongo hervido, aliñado con salsa verde picante. Es un plato pobre de la tradición campesina, hoy vuelto famoso también entre los turistas." },
      { it: "Lo street food ha anche un lato pratico: costa poco e fa risparmiare tempo. Ma attenzione alla qualità: le migliori friggitorie usano ingredienti freschi e olio pulito, e spesso hanno la fila fuori dalla porta. Se c'è la fila di gente del posto, avete trovato il posto giusto!", es: "El street food también tiene un lado práctico: cuesta poco y hace ahorrar tiempo. Pero atención a la calidad: las mejores friggitorie usan ingredientes frescos y aceite limpio, y a menudo tienen fila fuera de la puerta. Si hay fila de gente local, ¡encontraron el lugar correcto!" },
    ],
    glossary: [
      { it: "al taglio", es: "por porción (cortado al momento)" },
      { it: "la teglia", es: "la bandeja de horno" },
      { it: "ripieno", es: "relleno" },
      { it: "la friggitoria", es: "la freiduría (local de fritos)" },
      { it: "gente del posto", es: "gente local" },
    ],
    questions: [
      { q: "¿Dónde se vende la pizza al taglio, según el texto?", options: ["A Palermo", "A Roma", "A Firenze", "A Napoli"], answer: 1, why: "«L'esempio più famoso è la pizza al taglio a Roma»." },
      { q: "¿Qué son las panelle?", options: ["Palline di riso fritte", "Frittelle di ceci", "Panini con trippa", "Pizze con cipolle"], answer: 1, why: "Son frituras de garbanzos que se venden en los quioscos palermitanos desde hace más de cien años." },
      { q: "¿Qué come un florentino con prisa en el mercado?", options: ["Lo sfincione", "Le panelle", "Il lampredotto", "Gli arancini"], answer: 2, why: "En Florencia los trabajadores del mercado comen el lampredotto: pan con mondongo hervido y salsa verde." },
      { q: "¿Cómo reconocer un buen lugar de street food?", options: ["Ha molti turisti", "È molto caro", "C'è la fila di gente del posto", "È vicino ai monumenti"], answer: 2, why: "El texto aconseja: si hay fila de gente local, ese es el lugar correcto." },
    ],
    discuss: [
      { it: "Qual è lo street food tipico della tua città? Lo mangi spesso?", es: "¿Cuál es el street food típico de tu ciudad? ¿Lo comes a menudo?" },
      { it: "Secondo te mangiare per strada è igienico e sano? Dipende da cosa?", es: "Según tú, ¿comer por la calle es higiénico y sano? ¿De qué depende?" },
      { it: "Se dovessi presentare la cucina del tuo paese a un italiano con un solo cibo da strada, quale sceglieresti?", es: "Si tuvieras que presentar la cocina de tu país a un italiano con una sola comida de calle, ¿cuál elegirías?" },
    ],
  },
  {
    id: "inf-turismo-09",
    cat: "informazione",
    level: "B1",
    title: "Troppo turismo? Venezia cerca un equilibrio",
    titleEs: "¿Demasiado turismo? Venecia busca un equilibrio",
    minutes: 4,
    lines: [
      { it: "Venezia è una città di circa cinquantamila abitanti, ma ogni anno riceve milioni di visitatori. Nel weekend di ferragosto, per le calli e i ponti passano fino a centomila persone in un solo giorno. Gli abitanti parlano di «overtourism», un turismo eccessivo che rende difficile la vita normale.", es: "Venecia es una ciudad de unos cincuenta mil habitantes, pero cada año recibe millones de visitantes. En el fin de semana de ferragosto, por las calli y los puentes pasan hasta cien mil personas en un solo día. Los habitantes hablan de «overtourism», un turismo excesivo que dificulta la vida normal." },
      { it: "I problemi si vedono ogni giorno. I prezzi delle case crescono perché molti proprietari preferiscono affittare ai turisti, con contratti brevi e guadagni alti. Così i veneziani veri lasciano il centro storico, e i negozi di quartiere — il fornaio, il fruttivendolo — chiudono per lasciare posto a negozi di souvenir e maschere di carnevale.", es: "Los problemas se ven cada día. Los precios de las viviendas suben porque muchos propietarios prefieren alquilar a los turistas, con contratos cortos y ganancias altas. Así los venecianos de verdad dejan el centro histórico, y las tiendas de barrio —el panadero, el frutero— cierran para dar lugar a tiendas de recuerdos y máscaras de carnaval." },
      { it: "Le grandi navi da crociera sono un altro problema: per anni hanno attraversato la laguna, alte come palazzi, danneggiando gli equilibri ambientali con le loro onde. Dopo proteste e un incidente nel 2019, il governo ne ha vietato il passaggio nel centro storico: ora devono attraccare lontano, nel porto industriale di Marghera.", es: "Los grandes barcos de crucero son otro problema: durante años atravesaron la laguna, altos como edificios, dañando los equilibrios ambientales con sus olas. Tras protestas y un incidente en 2019, el gobierno prohibió su paso por el centro histórico: ahora deben atracar lejos, en el puerto industrial de Marghera." },
      { it: "Dal 2024 la città ha introdotto un contributo di accesso per i visitatori di un solo giorno: chi entra in certi giorni di alta stagione paga una piccola quota. Non è una vera biglietteria — Venezia non è un museo, dicono i critici — ma uno strumento per gestire i flussi e monitorare i numeri reali.", es: "Desde 2024 la ciudad introdujo un aporte de acceso para los visitantes de un solo día: quien entra en ciertos días de temporada alta paga una pequeña cuota. No es una verdadera taquilla —Venecia no es un museo, dicen los críticos— sino una herramienta para gestionar los flujos y monitorear los números reales." },
      { it: "Ma c'è anche un'altra Venezia, e premia chi la cerca. Chi dorme almeno una notte scopre la città all'alba, quando i turisti del giorno non sono ancora arrivati. Chi prende il vaporetto per le isole — Murano, Burano, Torcello — vede un altro mondo, fatto di artigiani del vetro e di merletti. Il turismo sostenibile esiste: basta viaggiare più lentamente.", es: "Pero también hay otra Venecia, y premia a quien la busca. Quien duerme al menos una noche descubre la ciudad al amanecer, cuando los turistas del día aún no han llegado. Quien toma el vaporetto hacia las islas —Murano, Burano, Torcello— ve otro mundo, hecho de artesanos del vidrio y encajes. El turismo sostenible existe: basta con viajar más despacio." },
      { it: "La domanda finale è semplice: vogliamo che Venezia resti una città viva, o solo una bella scenografia? La risposta dipende anche dai turisti — cioè da noi — e dalle scelte che facciamo prima di partire.", es: "La pregunta final es simple: ¿queremos que Venecia siga siendo una ciudad viva, o solo una bella escenografía? La respuesta depende también de los turistas —es decir, de nosotros— y de las elecciones que hacemos antes de partir." },
    ],
    glossary: [
      { it: "l'overtourism", es: "el sobreturismo (turismo excesivo)" },
      { it: "il centro storico", es: "el centro histórico" },
      { it: "attraccare", es: "atracar" },
      { it: "i flussi (turistici)", es: "los flujos (turísticos)" },
      { it: "il vaporetto", es: "el vaporetto (barco de transporte urbano en Venecia)" },
    ],
    questions: [
      { q: "¿Cuántos habitantes tiene Venecia, según el texto?", options: ["Cinquecentomila", "Cinquantamila", "Cinque milioni", "Cinquemila"], answer: 1, why: "«Una città di circa cinquantamila abitanti» — pero recibe millones de visitantes al año." },
      { q: "¿Por qué cierran las tiendas de barrio?", options: ["Per la concorrenza dei supermercati", "Per lasciare posto a negozi di souvenir", "Perché non hanno clienti", "Per ordine del comune"], answer: 1, why: "El alquiler turístico expulsa a los residentes y las tiendas locales dejan lugar a comercios de recuerdos." },
      { q: "¿Qué pasó con los barcos de crucero después de las protestas?", options: ["Possono ancora attraccare in piazza San Marco", "Sono stati vietati nel porto di Marghera", "Devono attraccare lontano dal centro storico", "Non esistono più crociere"], answer: 2, why: "El gobierno prohibió su paso por el centro histórico: ahora atracan en el puerto industrial de Marghera." },
      { q: "¿Qué introduce la ciudad desde 2024?", options: ["Un biglietto d'ingresso per tutti", "Un contributo di accesso per i visitatori di un giorno", "Una tassa per dormire in albergo", "Un divieto di fotografia"], answer: 1, why: "Es un aporte de acceso para los excursionistas de un solo día en temporada alta, no un billete de museo." },
      { q: "Según el texto, ¿qué premia al viajero que se queda una noche?", options: ["Paga meno tasse", "Scopre la città all'alba, senza i turisti del giorno", "Riceve un pass per i musei", "Viaggia gratis in vaporetto"], answer: 1, why: "Quien duerme allí descubre la Venecia del amanecer, antes de que lleguen los excursionistas." },
    ],
    discuss: [
      { it: "Conosci una città del tuo paese che soffre di overtourism? Racconta la situazione.", es: "¿Conoces una ciudad de tu país que sufra sobreturismo? Cuenta la situación." },
      { it: "Sei mai stato a Venezia? Qual è stato il tuo ricordo più forte?", es: "¿Has estado alguna vez en Venecia? ¿Cuál es tu recuerdo más fuerte?" },
      { it: "Da turista, cosa fai per viaggiare in modo più sostenibile? Cosa potresti migliorare?", es: "Como turista, ¿qué haces para viajar de forma más sostenible? ¿Qué podrías mejorar?" },
    ],
  },
  {
    id: "inf-ia-10",
    cat: "informazione",
    level: "B2",
    title: "L'intelligenza artificiale nella vita di tutti i giorni",
    titleEs: "La inteligencia artificial en la vida cotidiana",
    minutes: 5,
    lines: [
      { it: "Quando sentiamo «intelligenza artificiale», pensiamo subito a film di fantascienza con robot ribelli. Ma la realtà è molto più vicina e molto più tranquilla: l'IA è già dentro la nostra vita, spesso senza che ce ne accorgiamo. Il filtro che riconosce il gatto nella foto, la voce che ci legge le indicazioni stradali, la serie che ci consiglia la piattaforma la sera: tutto questo è intelligenza artificiale al lavoro.", es: "Cuando oímos «inteligencia artificial», pensamos de inmediato en películas de ciencia ficción con robots rebeldes. Pero la realidad es mucho más cercana y mucho más tranquila: la IA ya está dentro de nuestra vida, a menudo sin que nos demos cuenta. El filtro que reconoce al gato en la foto, la voz que nos lee las indicaciones en la calle, la serie que nos recomienda la plataforma por la noche: todo eso es inteligencia artificial trabajando." },
      { it: "Come funziona, in parole semplici? Un sistema di IA non riceve regole precise da un programmatore: impara dagli esempi. Se gli mostriamo milioni di fotografie etichettate «gatto» e milioni etichettate «cane», alla fine impara a distinguere i due animali, più o meno come fa un bambino che guarda il mondo. Questo processo si chiama «apprendimento automatico» ed è la base di quasi tutta l'IA moderna.", es: "¿Cómo funciona, en palabras simples? Un sistema de IA no recibe reglas precisas de un programador: aprende de los ejemplos. Si le mostramos millones de fotografías etiquetadas «gato» y millones etiquetadas «perro», al final aprende a distinguir los dos animales, más o menos como lo hace un niño que mira el mundo. Este proceso se llama «aprendizaje automático» y es la base de casi toda la IA moderna." },
      { it: "Negli ultimi anni è arrivata una novità enorme: i modelli di linguaggio, capaci di leggere e produrre testi con una qualità sorprendente. Scrivono email, riassumono documenti, traducono, spiegano la matematica e conversano con noi. Per chi studia una lingua straniera sono un compagno di studio potente: si può chiedere spiegazioni infinite, esercitarsi in dialogo, ricevere correzioni immediate.", es: "En los últimos años llegó una novedad enorme: los modelos de lenguaje, capaces de leer y producir textos con una calidad sorprendente. Escriben correos, resumen documentos, traducen, explican matemáticas y conversan con nosotros. Para quien estudia un idioma extranjero son un compañero de estudio poderoso: se pueden pedir explicaciones infinitas, ejercitarse en diálogo, recibir correcciones inmediatas." },
      { it: "Attenzione però: questi sistemi non «capiscono» come un essere umano. Prevedono semplicemente quale parola è più probabile dopo la precedente. Per questo a volte inventano informazioni con grande sicurezza — il cosiddetto «effetto allucinazione» — e per questo non bisogna fidarsi ciecamente delle loro risposte. La regola d'oro è: l'IA è un assistente, non un oracolo. Le sue risposte vanno sempre controllate.", es: "Ojo, eso sí: estos sistemas no «entienden» como un ser humano. Simplemente predicen qué palabra es más probable después de la anterior. Por eso a veces inventan información con gran seguridad —el llamado «efecto alucinación»— y por eso no hay que confiar ciegamente en sus respuestas. La regla de oro es: la IA es un asistente, no un oráculo. Sus respuestas deben verificarse siempre." },
      { it: "Ci sono anche questioni serie di lavoro e di privacy. Alcune professioni cambieranno profondamente: traduttori, grafici, programmatori già usano l'IA come strumento quotidiano, e chi non la usa parte in svantaggio. Nel frattempo i nostri dati — testi, foto, ricerche — alimentano sistemi potenti gestiti da poche grandi aziende. Sapere come funzionano questi strumenti è diventato, secondo molti esperti, una nuova forma di alfabetizzazione.", es: "Hay también cuestiones serias de trabajo y de privacidad. Algunas profesiones cambiarán profundamente: traductores, diseñadores, programadores ya usan la IA como herramienta cotidiana, y quien no la usa parte en desventaja. Mientras tanto, nuestros datos —textos, fotos, búsquedas— alimentan sistemas poderosos gestionados por pocas grandes empresas. Saber cómo funcionan estas herramientas se ha convertido, según muchos expertos, en una nueva forma de alfabetización." },
      { it: "E l'italiano, in tutto questo? L'IA può aiutarci a studiarlo, ma non può studiarlo al posto nostro. La lingua si impadronisce parlando, sbagliando, ridendo di un errore e riprovando. L'ideale, dicono gli insegnanti, è usare l'intelligenza artificiale come si usa un dizionario evoluto: uno strumento straordinario che però non sostituisce la fatica — bellissima — di imparare.", es: "¿Y el italiano, en todo esto? La IA puede ayudarnos a estudiarlo, pero no puede estudiarlo en nuestro lugar. El idioma se conquista hablando, equivocándose, riéndose de un error y volviendo a intentarlo. Lo ideal, dicen los profesores, es usar la inteligencia artificial como se usa un diccionario evolucionado: una herramienta extraordinaria que sin embargo no sustituye el esfuerzo —bellísimo— de aprender." },
    ],
    glossary: [
      { it: "l'apprendimento automatico", es: "el aprendizaje automático (machine learning)" },
      { it: "il modello di linguaggio", es: "el modelo de lenguaje" },
      { it: "l'effetto allucinazione", es: "el efecto alucinación (inventar datos con seguridad)" },
      { it: "fidarsi ciecamente", es: "confiar ciegamente" },
      { it: "l'oracolo", es: "el oráculo" },
      { it: "impadronirsi (di una lingua)", es: "adueñarse (de un idioma), dominarlo" },
    ],
    questions: [
      { q: "Según el texto, ¿cuál de estas cosas cotidianas usa IA?", options: ["Solo i robot industriali", "Il filtro che riconosce il gatto nella foto", "Solo i computer nuovi", "Solo i film di fantascienza"], answer: 1, why: "El texto cita el filtro de fotos, la voz del navegador y las recomendaciones de series como IA cotidiana." },
      { q: "¿Cómo aprende un sistema de IA moderna?", options: ["Seguendo regole scritte da un programmatore", "Da esempi, come un bambino che guarda il mondo", "Copiando altri robot", "Leggendo l'enciclopedia"], answer: 1, why: "No recibe reglas precisas: aprende de millones de ejemplos (aprendizaje automático)." },
      { q: "¿Qué es el «efecto alucinación»?", options: ["L'IA si addormenta", "L'IA inventa informazioni con grande sicurezza", "L'IA rifiuta di rispondere", "Un errore del programmatore"], answer: 1, why: "Como solo predice la palabra siguiente, a veces inventa información y la presenta con total seguridad." },
      { q: "¿Cuál es la «regla de oro» que propone el texto?", options: ["Usare l'IA solo di notte", "L'IA è un assistente, non un oracolo: le risposte vanno controllate", "Non usare mai l'IA per studiare", "Fidarsi sempre delle risposte"], answer: 1, why: "La IA es un asistente, no un oráculo: sus respuestas deben verificarse siempre." },
      { q: "¿Qué dicen los profesores sobre estudiar italiano con IA?", options: ["L'IA può studiare al posto nostro", "È uno strumento straordinario ma non sostituisce la fatica di imparare", "È inutile e dannosa", "Basta usarla per diventare fluente"], answer: 1, why: "Como un diccionario evolucionado: extraordinario, pero no sustituye el esfuerzo —bellísimo— de aprender." },
    ],
    discuss: [
      { it: "Usi strumenti di IA nella tua vita? In quali situazioni? Racconta un esempio concreto.", es: "¿Usas herramientas de IA en tu vida? ¿En qué situaciones? Cuenta un ejemplo concreto." },
      { it: "Pensi che l'IA creerà più lavoro di quanto ne distruggerà? Perché?", es: "¿Crees que la IA creará más trabajo del que destruirá? ¿Por qué?" },
      { it: "Come useresti l'IA per migliorare il tuo italiano? Quali rischi vedi?", es: "¿Cómo usarías la IA para mejorar tu italiano? ¿Qué riesgos ves?" },
    ],
  },
  {
    id: "inf-spreco-11",
    cat: "informazione",
    level: "C1",
    title: "Lo spreco alimentare: una sfida globale",
    titleEs: "El desperdicio de alimentos: un desafío global",
    minutes: 6,
    lines: [
      { it: "Ogni anno, secondo le stime dell'Organizzazione delle Nazioni Unite per l'alimentazione, circa un terzo del cibo prodotto nel mondo viene perso o sprecato: oltre un miliardo di tonnellate. È un paradosso difficile da accettare: mentre centinaia di milioni di persone soffrono la fame, un volume enorme di cibo finisce nella spazzatura lungo tutta la filiera, dal campo alla tavola.", es: "Cada año, según las estimaciones de la Organización de las Naciones Unidas para la alimentación, alrededor de un tercio de los alimentos producidos en el mundo se pierde o se desperdicia: más de mil millones de toneladas. Es una paradoja difícil de aceptar: mientras cientos de millones de personas pasan hambre, un volumen enorme de comida acaba en la basura a lo largo de toda la cadena, del campo a la mesa." },
      { it: "Lo spreco non è distribuito in modo uguale. Nei paesi in via di sviluppo le perdite maggiori avvengono all'inizio della filiera: raccolti che marciano nei magazzini, trasporti lenti, mancanza di refrigerazione. Nei paesi ricchi, invece, lo spreco avviene soprattutto alla fine: negozi che buttano prodotti ancora buoni perché «scaduti» di un giorno, ristoranti con porzioni giganti, famiglie che dimenticano verdure nel frigorifero e comprano più di quanto mangiano.", es: "El desperdicio no se distribuye de manera uniforme. En los países en desarrollo las mayores pérdidas ocurren al inicio de la cadena: cosechas que se pudren en los almacenes, transportes lentos, falta de refrigeración. En los países ricos, en cambio, el desperdicio ocurre sobre todo al final: tiendas que tiran productos aún buenos porque «caducaron» un día antes, restaurantes con porciones gigantes, familias que olvidan verduras en el refrigerador y compran más de lo que comen." },
      { it: "Le conseguenze non sono solo etiche ma anche ambientali ed economiche. Produrre cibo consuma terra, acqua ed energia: quando buttiamo un chilo di pane, buttiamo anche tutto ciò che è servito per coltivare il grano, macinarlo, trasportarlo e cuocerlo. Lo spreco alimentare, se fosse un paese, sarebbe il terzo emettitore mondiale di gas serra dopo Cina e Stati Uniti. E per le famiglie significa gettare in pattumiera centinaia di euro l'anno.", es: "Las consecuencias no son solo éticas sino también ambientales y económicas. Producir alimentos consume tierra, agua y energía: cuando tiramos un kilo de pan, tiramos también todo lo que hizo falta para cultivar el trigo, molerlo, transportarlo y cocerlo. El desperdicio alimentario, si fuera un país, sería el tercer emisor mundial de gases de efecto invernadero después de China y Estados Unidos. Y para las familias significa arrojar a la basura cientos de euros al año." },
      { it: "L'Italia ha reagito con una legge considerata tra le più avanzate d'Europa. La normativa sullo spreco alimentare semplifica le donazioni: supermercati e ristoranti possono regalare il cibo invenduto alle associazioni caritative senza passaggi burocratici pesanti, e chi dona ha sgravi fiscali. In molte città sono nati i «frigoriferi sociali», armadi frigo pubblici dove chiunque può lasciare cibo in eccesso e chi ne ha bisogno può prenderlo, gratuitamente e con dignità.", es: "Italia reaccionó con una ley considerada de las más avanzadas de Europa. La normativa sobre el desperdicio alimentario simplifica las donaciones: supermercados y restaurantes pueden regalar el alimento no vendido a las asociaciones caritativas sin trámites burocráticos pesados, y quien dona tiene desgravaciones fiscales. En muchas ciudades nacieron los «refrigeradores sociales», armarios frigoríficos públicos donde cualquiera puede dejar comida en exceso y quien lo necesita puede tomarla, gratuitamente y con dignidad." },
      { it: "Anche la tecnologia dà una mano. Diverse applicazioni mettono in contatto negozi e consumatori: poco prima della chiusura, panetterie e supermercati vendono a prezzo ridotto sacchetti «sorpreso» con pane e prodotti del giorno che altrimenti finirebbero buttati. È un affare per il portafoglio, per l'ambiente e — dicono i giovani che le usano — è anche divertente: non sai mai cosa troverai nel sacchetto.", es: "También la tecnología echa una mano. Varias aplicaciones ponen en contacto a tiendas y consumidores: poco antes del cierre, panaderías y supermercados venden a precio reducido bolsas «sorpresa» con pan y productos del día que de lo contrario acabarían tirados. Es un buen negocio para el bolsillo, para el ambiente y —dicen los jóvenes que las usan— también es divertido: nunca sabes qué encontrarás en la bolsa." },
      { it: "E a livello personale? Le buone abitudini sono antiche e semplici: fare la lista della spesa e rispettarla, cucinare gli avanzi — la cucina italiana povera è nata proprio così, con la ribollita toscana o la frittata di pasta —, congelare prima che sia tardi, capire la differenza tra «da consumare preferibilmente entro» e «scade il». Il primo è un consiglio, il secondo un limite reale. Imparare a leggerle è già mezzo lavoro fatto.", es: "¿Y a nivel personal? Los buenos hábitos son antiguos y simples: hacer la lista de compras y respetarla, cocinar las sobras —la cocina italiana pobre nació justamente así, con la ribollita toscana o la tortilla de pasta—, congelar antes de que sea tarde, entender la diferencia entre «consumirse preferentemente antes de» y «caduca el». El primero es un consejo, el segundo un límite real. Aprender a leerlas ya es media tarea hecha." },
      { it: "Lo spreco alimentare, in fondo, è la somma di mille gesti quotidiani che sembrano innocui. Per questo può essere combattuto con mille gesti contrari, altrettanto piccoli: la rivoluzione, questa volta, comincia dal frigorifero.", es: "El desperdicio alimentario, al final, es la suma de mil gestos cotidianos que parecen inofensivos. Por eso puede combatirse con mil gestos contrarios, igual de pequeños: la revolución, esta vez, empieza en el refrigerador." },
    ],
    glossary: [
      { it: "lo spreco alimentare", es: "el desperdicio de alimentos" },
      { it: "la filiera", es: "la cadena (de producción y distribución)" },
      { it: "l'emettitore di gas serra", es: "el emisor de gases de efecto invernadero" },
      { it: "gli sgravi fiscali", es: "las desgravaciones fiscales" },
      { it: "il frigorifero sociale", es: "el refrigerador social (solidario)" },
      { it: "gli avanzi", es: "las sobras" },
    ],
    questions: [
      { q: "¿Cuánta comida producida se pierde o desperdicia cada año, según la ONU?", options: ["Un decimo", "Un quinto", "Circa un terzo", "La metà"], answer: 2, why: "«Circa un terzo del cibo prodotto nel mondo»: más de mil millones de toneladas." },
      { q: "¿Dónde ocurre el desperdicio en los países ricos?", options: ["All'inizio della filiera, nei campi", "Soprattutto alla fine: negozi, ristoranti, famiglie", "Solo nei trasporti", "Nei magazzini dei porti"], answer: 1, why: "En los países ricos el desperdicio está al final de la cadena: productos «caducados», porciones gigantes, exceso de compra." },
      { q: "¿Qué significa la comparación «si fuera un país»?", options: ["Sarebbe il paese più povero", "Sarebbe il terzo emettitore mondiale di gas serra", "Sarebbe il primo produttore di cibo", "Sarebbe il paese con più fame"], answer: 1, why: "El desperdicio alimentario sería el tercer emisor mundial de gases de efecto invernadero, tras China y EE. UU." },
      { q: "¿Qué establece la ley italiana contra el desperdicio?", options: ["Vieta di buttare il cibo con multe alte", "Semplifica le donazioni e offre sgravi fiscali a chi dona", "Obbliga i supermercati a chiudere prima", "Tassa i ristoranti con porzioni grandi"], answer: 1, why: "Simplifica las donaciones a asociaciones caritativas y otorga desgravaciones fiscales a los donantes." },
      { q: "¿Cuál es la diferencia entre las dos etiquetas de fecha mencionadas?", options: ["Non c'è differenza", "«Preferibilmente entro» è un consiglio, «scade il» è un limite reale", "«Scade il» è un consiglio, «preferibilmente entro» è un limite", "Una è per i prodotti freschi, l'altra per quelli surgelati"], answer: 1, why: "«Da consumare preferibilmente entro» es un consejo de calidad; «scade il» marca un límite real de seguridad." },
    ],
    discuss: [
      { it: "Quanto cibo butti via in una settimana tipica? Sii onesto: cosa finisce più spesso nella spazzatura?", es: "¿Cuánta comida tiras en una semana típica? Sé honesto: ¿qué acaba más a menudo en la basura?" },
      { it: "Nel tuo paese esistono iniziative contro lo spreco: frigoriferi sociali, app, leggi? Raccontale.", es: "¿En tu país existen iniciativas contra el desperdicio: refrigeradores sociales, apps, leyes? Cuéntalas." },
      { it: "«La cucina povera» nasce dal riciclo degli avanzi: esiste una tradizione simile nella tua cultura?", es: "La «cocina pobre» nace del reciclaje de las sobras: ¿existe una tradición parecida en tu cultura?" },
    ],
  },
];
