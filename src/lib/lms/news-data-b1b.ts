/* ── Notizie · ampliamento B1 (v9.39) ─────────────────────────────────
   12 noticias nuevas (news-b1-04 … news-b1-15): el nivel B1 pasa de 3
   a 15 noticias y cubre las 9 categorías. Método VOA, 100% original:
   6 párrafos, cuerpo 145-175 parole, passato prossimo vs imperfetto
   + connettori.                                                          */

import type { NewsItem } from "./news";

export const NEWS_DATA_B1B: NewsItem[] = [

  /* ═══ B1 · 4 — Scienza ═══ */
  {
    id: "news-b1-04", cat: "scienza", level: "B1", place: "Bologna", minutes: 3,
    title: "La musica cambia il cervello: uno studio a Bologna",
    titleEs: "La música cambia el cerebro: un estudio en Bolonia",
    lead: {
      it: "Cinquecento adulti hanno imparato uno strumento per un anno. Il loro cervello è cambiato: la musica non è solo passione, è anche scienza.",
      es: "Quinientos adultos han aprendido un instrumento durante un año. Su cerebro ha cambiado: la música no es solo pasión, también es ciencia.",
    },
    paragraphs: [
      { it: "L'idea dello studio è nata nei laboratori dell'università di Bologna. Per anni i ricercatori osservavano solo i musicisti professionisti; questa volta hanno scelto cinquecento persone comuni, dai trenta ai sessant'anni.",
      es: "La idea del estudio nació en los laboratorios de la universidad de Bolonia. Durante años los investigadores observaban solo a músicos profesionales; esta vez han elegido a quinientas personas comunes, de treinta a sesenta años." },
      { it: "Per dodici mesi i volontari hanno studiato il pianoforte o la chitarra, tre volte alla settimana. All'inizio molti erano impazienti e sbagliavano tutto, però non hanno smesso di provare.",
      es: "Durante doce meses los voluntarios estudiaron piano o guitarra tres veces por semana. Al principio muchos estaban impacientes y se equivocaban en todo, pero no han dejado de intentarlo." },
      { it: "Le risonanze magnetiche hanno mostrato un risultato chiaro: mentre le mani diventavano più veloci, il cervello costruiva nuove connessioni. Le zone dell'udito e della memoria lavoravano insieme.",
      es: "Las resonancias magnéticas han mostrado un resultado claro: mientras las manos se volvían más rápidas, el cerebro construía conexiones nuevas. Las zonas del oído y de la memoria trabajaban juntas." },
      { it: "«Non è mai troppo tardi», spiega la neuroscienziata Giulia Ferraro. «Il cervello dell'adulto non era un libro chiuso: risponde ancora agli esercizi».",
      es: "«Nunca es demasiado tarde», explica la neurocientífica Giulia Ferraro. «El cerebro del adulto no era un libro cerrado: responde todavía a los ejercicios»." },
      { it: "Lo studio ha scoperto anche un effetto inatteso: chi suonava dormiva meglio e ricordava le parole più facilmente. Il gruppo di controllo, che ascoltava soltanto, non ha ottenuto risultati simili.",
      es: "El estudio ha descubierto también un efecto inesperado: quien tocaba dormía mejor y recordaba las palabras con más facilidad. El grupo de control, que solo escuchaba, no ha obtenido resultados similares." },
      { it: "Il prossimo passo sarà la terza età: a Bologna preparano già un corso per i pensionati. Magari, conclude la Ferraro, la prossima ricetta del medico sarà un violino.",
      es: "El próximo paso será la tercera edad: en Bolonia ya preparan un curso para los jubilados. Quizá, concluye Ferraro, la próxima receta del médico sea un violín." },
    ],
    words: [
      { it: "il cervello", es: "el cerebro" },
      { it: "la chitarra", es: "la guitarra" },
      { it: "la memoria", es: "la memoria" },
      { it: "il volontario / i volontari", es: "el voluntario / los voluntarios" },
      { it: "impazienti", es: "impacientes", note: "singolare: impaziente" },
      { it: "la risonanza / le risonanze magnetiche", es: "la resonancia / las resonancias magnéticas" },
    ],
    questions: [
      { q: "¿A quiénes han elegido esta vez los investigadores de Bolonia?", options: ["Solo i musicisti professionisti", "Cento bambini delle elementari", "Solo studenti di conservatorio", "Cinquecento persone comuni, dai trenta ai sessant'anni"], answer: 3, why: "«questa volta hanno scelto cinquecento persone comuni, dai trenta ai sessant'anni»." },
      { q: "¿Qué estudiaban los voluntarios tres veces por semana?", options: ["Ogni giorno", "Una volta", "Mai", "Tre volte"], answer: 3, why: "«i volontari hanno studiato il pianoforte o la chitarra, tre volte alla settimana»." },
      { q: "¿Qué grupo no obtuvo resultados similares?", options: ["I pensionati", "Il gruppo che ascoltava soltanto", "I musicisti professionisti", "I ricercatori"], answer: 1, why: "«Il gruppo di controllo, che ascoltava soltanto, non ha ottenuto risultati simili»." },
      { q: "¿Qué sugiere la metáfora final de la doctora Ferraro?", options: ["La música podrá convertirse en una verdadera medicina", "I medici smetteranno di lavorare", "Il violino è uno strumento difficile", "Gli strumenti costano troppo"], answer: 0, why: "«la prossima ricetta del medico sarà un violino»: la música como medicina del futuro." },
    ],
    discuss: [
      { it: "Suoni uno strumento o hai studiato musica da piccolo? Racconta.", es: "¿Tocas algún instrumento o estudiaste música de pequeño? Cuenta." },
      { it: "Secondo te la scuola dovrebbe insegnare la musica a tutti? Perché?", es: "Según tú, ¿la escuela debería enseñar música a todos? ¿Por qué?" },
    ],
  },

  /* ═══ B1 · 5 — Ambiente ═══ */
  {
    id: "news-b1-05", cat: "ambiente", level: "B1", place: "Genova", minutes: 3,
    title: "I delfini tornano nel golfo di Genova",
    titleEs: "Los delfines vuelven al golfo de Génova",
    lead: {
      it: "Erano spariti da decenni, e adesso saltano vicino alla diga. I delfini sono tornati nel golfo di Genova, e i cittadini li fotografano.",
      es: "Habían desaparecido durante décadas y ahora saltan cerca del dique. Los delfines han vuelto al golfo de Génova, y los ciudadanos los fotografían.",
    },
    paragraphs: [
      { it: "Per decenni i delfini evitavano il golfo di Genova: le navi erano troppe e l'acqua era sporca. I pescatori più anziani ricordavano branchi interi, ma i giovani non ne avevano mai visti.",
      es: "Durante décadas los delfines evitaban el golfo de Génova: los barcos eran demasiados y el agua estaba sucia. Los pescadores más mayores recordaban bancos enteros, pero los jóvenes no habían visto nunca ninguno." },
      { it: "Negli ultimi cinque anni, però, qualcosa è cambiato. Le regole del porto hanno limitato la velocità delle navi e i depuratori hanno ripreso a funzionare.",
      es: "En los últimos cinco años, sin embargo, algo ha cambiado. Las reglas del puerto han limitado la velocidad de los barcos y las depuradoras han vuelto a funcionar." },
      { it: "Oggi i delfini tornano a nuotare vicino alla diga. Il mese scorso una squadra di biologi marini ne ha contati quarantotto in una sola mattina.",
      es: "Hoy los delfines vuelven a nadar cerca del dique. El mes pasado un equipo de biólogos marinos contó cuarenta y ocho en una sola mañana." },
      { it: "«Il golfo era malato, adesso respira», dice il biologo Andrea Parodi. «Mentre l'acqua migliorava, i pesci piccoli tornavano, e i delfini hanno seguito il cibo».",
      es: "«El golfo estaba enfermo, ahora respira», dice el biólogo Andrea Parodi. «Mientras el agua mejoraba, los peces pequeños volvían, y los delfines han seguido la comida»." },
      { it: "I cittadini partecipano con un'app: quando vedono un delfino, mandano la foto con la posizione. Così gli scienziati hanno costruito una mappa dei passaggi più frequenti.",
      es: "Los ciudadanos participan con una aplicación: cuando ven un delfín, envían la foto con la posición. Así los científicos han construido un mapa de los pasos más frecuentes." },
      { it: "La sfida ora è il turismo: troppa gente in barca rischia di spaventare gli animali. Per questo la città prepara regole semplici, per guardare i delfini senza disturbarli.",
      es: "El desafío ahora es el turismo: demasiada gente en barco corre el riesgo de asustar a los animales. Por eso la ciudad prepara reglas simples, para mirar a los delfines sin molestarlos." },
    ],
    words: [
      { it: "il delfino / i delfini", es: "el delfín / los delfines" },
      { it: "il golfo", es: "el golfo" },
      { it: "il depuratore / i depuratori", es: "la depuradora / las depuradoras (de aguas)" },
      { it: "la diga", es: "el dique" },
      { it: "la mappa", es: "el mapa", note: "en italiano es femenino, a diferencia del español" },
      { it: "spaventare", es: "asustar" },
    ],
    questions: [
      { q: "¿Por qué evitaban los delfines el golfo durante décadas?", options: ["Perché erano protetti", "Le navi erano troppe e l'acqua era sporca", "Perché faceva freddo", "Per mancanza di pesci grandi"], answer: 1, why: "«le navi erano troppe e l'acqua era sporca»." },
      { q: "¿Cuántos delfines contaron los biólogos en una sola mañana?", options: ["Otto", "Diciotto", "Quarantotto", "Cento"], answer: 2, why: "«una squadra di biologi marini ne ha contati quarantotto in una sola mattina»." },
      { q: "¿Qué hacen los ciudadanos cuando ven un delfín?", options: ["Hanno comprato i biglietti per la barca", "Hanno pescato i pesci piccoli", "Hanno pulito la diga", "Mandano la foto con la posizione"], answer: 3, why: "«quando vedono un delfino, mandano la foto con la posizione»." },
      { q: "¿Por qué prepara la ciudad reglas para el turismo?", options: ["Per guadagnare di più", "Per chiudere il porto", "Perché troppa gente in barca rischia di spaventare gli animali", "Perché i delfini sono pericolosi"], answer: 2, why: "«troppa gente in barca rischia di spaventare gli animali»: reglas para observar sin molestar." },
    ],
    discuss: [
      { it: "Hai mai visto un delfino o un altro animale libero? Dove?", es: "¿Has visto alguna vez un delfín u otro animal en libertad? ¿Dónde?" },
      { it: "Il turismo della natura aiuta o danneggia gli animali? Fai un esempio.", es: "¿El turismo de naturaleza ayuda o daña a los animales? Pon un ejemplo." },
    ],
  },

  /* ═══ B1 · 6 — Salute ═══ */
  {
    id: "news-b1-06", cat: "salute", level: "B1", place: "Milano", minutes: 3,
    title: "La mensa scolastica cambia menu a Milano",
    titleEs: "El comedor escolar cambia de menú en Milán",
    lead: {
      it: "Meno fritture, più verdure e ingredienti dalla regione. Le mense scolastiche di Milano hanno cambiato menu, e i bambini hanno scoperto nuovi sapori.",
      es: "Menos frituras, más verduras e ingredientes de la región. Los comedores escolares de Milán han cambiado de menú y los niños han descubierto sabores nuevos.",
    },
    paragraphs: [
      { it: "Nelle mense scolastiche di Milano è arrivato un menu nuovo. Meno fritture e più verdure: l'obiettivo del comune era migliorare la salute di quarantamila bambini.",
      es: "En los comedores escolares de Milán ha llegado un menú nuevo. Menos frituras y más verduras: el objetivo del ayuntamiento era mejorar la salud de cuarenta mil niños." },
      { it: "Prima i piatti arrivavano quasi sempre congelati da lontano. Ora, invece, metà degli ingredienti viene dai mercati agricoli della regione: pomodori, zucchine e frutta di stagione.",
      es: "Antes los platos llegaban casi siempre congelados desde lejos. Ahora, en cambio, la mitad de los ingredientes viene de los mercados agrícolas de la región: tomates, calabacines y fruta de temporada." },
      { it: "Le cucine hanno anche ridotto lo zucchero e il sale. Per rendere i piatti più buoni senza grassi, gli chef hanno sperimentato erbe aromatiche e cotture lente.",
      es: "Las cocinas también han reducido el azúcar y la sal. Para hacer los platos más sabrosos sin grasas, los chefs han experimentado con hierbas aromáticas y cocciones lentas." },
      { it: "«All'inizio i bambini guardavano le verdure con sospetto», racconta la nutrizionista Chiara Bellini. «Poi hanno capito che i broccoli al forno non erano peggio delle patatine fritte».",
      es: "«Al principio los niños miraban las verduras con desconfianza», cuenta la nutricionista Chiara Bellini. «Después han entendido que el brócoli al horno no era peor que las papas fritas»." },
      { it: "I risultati sono arrivati in fretta: dopo un anno, i bambini buttano via meno cibo e provano piatti nuovi senza paura. Anche le famiglie hanno cambiato le abitudini a casa.",
      es: "Los resultados han llegado rápido: después de un año, los niños tiran menos comida y prueban platos nuevos sin miedo. También las familias han cambiado las costumbres en casa." },
      { it: "La spesa è aumentata solo del cinque per cento, ma il risparmio sulla salute sarà maggiore. La settimana del gusto, a maggio, porterà i genitori a pranzo a scuola.",
      es: "El gasto ha subido solo un cinco por ciento, pero el ahorro en salud será mayor. La semana del gusto, en mayo, llevará a los padres a almorzar a la escuela." },
    ],
    words: [
      { it: "la mensa / le mense scolastiche", es: "el comedor / los comedores escolares" },
      { it: "il menu", es: "el menú", note: "plural invariable: i menu" },
      { it: "la verdura / le verdure", es: "la verdura / las verduras" },
      { it: "lo zucchero", es: "el azúcar", note: "en italiano es masculino" },
      { it: "l'abitudine / le abitudini", es: "la costumbre / las costumbres", note: "femenina irregular: l'abitudine" },
      { it: "il risparmio", es: "el ahorro" },
    ],
    questions: [
      { q: "¿Cuál era el objetivo del ayuntamiento con el nuevo menú?", options: ["Risparmiare sulla benzina", "Migliorare la salute di quarantamila bambini", "Chiudere le cucine", "Pubblicare un libro di ricette"], answer: 1, why: "«l'obiettivo del comune era migliorare la salute di quarantamila bambini»." },
      { q: "¿De dónde viene ahora la mitad de los ingredientes?", options: ["Dai mercati agricoli della regione", "Dall'estero", "Dai supermercati di Parigi", "Dai distributori automatici"], answer: 0, why: "«metà degli ingredienti viene dai mercati agricoli della regione»." },
      { q: "¿Cómo hicieron los chefs los platos más sabrosos sin grasas?", options: ["Aggiungendo più sale", "Cuocendo tutto in padella", "Con erbe aromatiche e cotture lente", "Usando solo dolci"], answer: 2, why: "«hanno sperimentato erbe aromatiche e cotture lente»." },
      { q: "¿Qué sugiere la noticia sobre la relación entre gasto y salud?", options: ["Che il cibo sano non serve", "Che le mense devono chiudere", "Che la salute non ha prezzo", "Che spendere un po' di più oggi può far risparmiare domani"], answer: 3, why: "«La spesa è aumentata solo del cinque per cento, ma il risparmio sulla salute sarà maggiore»." },
    ],
    discuss: [
      { it: "Com'era la mensa della tua scuola? Cosa cambieresti?", es: "¿Cómo era el comedor de tu escuela? ¿Qué cambiarías?" },
      { it: "È giusto che il comune decida cosa mangiano i bambini? Perché?", es: "¿Es justo que el ayuntamiento decida lo que comen los niños? ¿Por qué?" },
    ],
  },

  /* ═══ B1 · 7 — Cultura ═══ */
  {
    id: "news-b1-07", cat: "cultura", level: "B1", place: "Firenze", minutes: 3,
    title: "Sotto un muro di Firenze riappare un affresco",
    titleEs: "Bajo un muro de Florencia reaparece un fresco",
    lead: {
      it: "Coperto da secoli di polvere e intonaco, un affresco del Quattrocento è tornato alla luce a Firenze. E adesso aspetta i visitatori.",
      es: "Cubierto por siglos de polvo y enlucido, un fresco del Quattrocento ha vuelto a la luz en Florencia. Y ahora espera a los visitantes.",
    },
    paragraphs: [
      { it: "Durante i lavori in un palazzo del centro, gli operai hanno notato una strana pittura sotto l'intonaco. Piano piano, è riapparso un affresco del Quattrocento.",
      es: "Durante las obras en un palacio del centro, los obreros han notado una extraña pintura bajo el enlucido. Poco a poco, ha reaparecido un fresco del Quattrocento." },
      { it: "L'opera, nascosta da secoli, mostra una Madonna con il bambino tra fiori e uccelli. I colori erano spenti, però la composizione era elegante e piena di vita.",
      es: "La obra, escondida durante siglos, muestra una Madonna con el niño entre flores y pájaros. Los colores estaban apagados, pero la composición era elegante y estaba llena de vida." },
      { it: "I restauratori hanno lavorato sei mesi con pennelli piccolissimi. Prima hanno tolto la polvere, poi hanno fissato i colori che rischiavano di cadere.",
      es: "Los restauradores han trabajado seis meses con pinceles pequeñísimos. Primero han quitado el polvo, después han fijado los colores que corrían el riesgo de caerse." },
      { it: "«Quando l'abbiamo pulito, sembrava che il muro respirasse», racconta la restauratrice Marta Cavalli. «Abbiamo visto sorridere la Madonna dopo cinquecento anni di buio».",
      es: "«Cuando lo hemos limpiado, parecía que el muro respirara», cuenta la restauradora Marta Cavalli. «Hemos visto sonreír a la Madonna después de quinientos años de oscuridad»." },
      { it: "La soprintendenza ha studiato i documenti antichi: forse l'autore era un allievo di un grande maestro fiorentino. La firma non c'è, ma lo stile racconta la scuola.",
      es: "La superintendencia ha estudiado los documentos antiguos: quizá el autor era un discípulo de un gran maestro florentino. La firma no está, pero el estilo cuenta la escuela." },
      { it: "Da aprile l'affresco sarà aperto ai visitatori, con un biglietto a prezzo popolare. Il palazzo, intanto, ha già ricevuto richieste di matrimonio nella saletta del muro ritrovato.",
      es: "Desde abril el fresco estará abierto a los visitantes, con una entrada a precio popular. El palacio, mientras tanto, ya ha recibido peticiones de boda en la salita del muro reaparecido." },
    ],
    words: [
      { it: "l'affresco", es: "el fresco (pintura mural)" },
      { it: "l'intonaco", es: "el enlucido, el revoque" },
      { it: "il restauratore / i restauratori", es: "el restaurador / los restauradores" },
      { it: "la polvere", es: "el polvo", note: "femenino en italiano" },
      { it: "l'allievo", es: "el discípulo, el alumno" },
      { it: "la soprintendenza", es: "la superintendencia (de bienes culturales)" },
    ],
    questions: [
      { q: "¿Qué encontraron los obreros bajo el enlucido?", options: ["Un documento antico", "Una moneta d'oro", "Una statua romana", "Un affresco del Quattrocento"], answer: 3, why: "«è riapparso un affresco del Quattrocento»." },
      { q: "¿Qué muestra la obra?", options: ["Una battaglia", "Un ritratto di famiglia", "Una Madonna con il bambino tra fiori e uccelli", "Un paesaggio marino"], answer: 2, why: "«mostra una Madonna con il bambino tra fiori e uccelli»." },
      { q: "¿Quién era quizá el autor, según los documentos antiguos?", options: ["Un allievo di un grande maestro fiorentino", "Un pittore olandese", "Uno degli operai", "Un artista moderno"], answer: 0, why: "«forse l'autore era un allievo di un grande maestro fiorentino»." },
      { q: "¿Qué significa la frase de Cavalli sobre la sonrisa de la Madonna?", options: ["Che la Madonna era allegra", "Che il restauro ha ridato luce e vita all'opera", "Che l'affresco era falsificato", "Che il buio rovina i colori"], answer: 1, why: "«Abbiamo visto sorridere la Madonna dopo cinquecento anni di buio»: la obra recupera su luz." },
    ],
    discuss: [
      { it: "C'è un monumento o un'opera d'arte che ti ha emozionato? Racconta.", es: "¿Hay un monumento o una obra de arte que te haya emocionado? Cuenta." },
      { it: "Meglio restaurare il passato o costruire il futuro? Dove andrebbero i soldi?", es: "¿Mejor restaurar el pasado o construir el futuro? ¿A dónde debería ir el dinero?" },
    ],
  },

  /* ═══ B1 · 8 — Economia ═══ */
  {
    id: "news-b1-08", cat: "economia", level: "B1", place: "Taranto", minutes: 3,
    title: "Le cozze di Taranto tornano sui mercati",
    titleEs: "Los mejillones de Táranto vuelven a los mercados",
    lead: {
      it: "Per secoli erano l'oro del mar Piccolo, poi le vendite erano cadute. Oggi le cozze di Taranto hanno un marchio europeo e i giovani tornano a lavorare sul mare.",
      es: "Durante siglos fueron el oro del mar Piccolo, luego las ventas cayeron. Hoy los mejillones de Táranto tienen un sello europeo y los jóvenes vuelven a trabajar en el mar.",
    },
    paragraphs: [
      { it: "Il mare di Taranto alleva cozze da secoli: i pescatori le appendevano a corde di canapa e le vendevano al mercato. Negli anni scorsi, però, le vendite erano cadute.",
      es: "El mar de Táranto cultiva mejillones desde hace siglos: los pescadores los colgaban de cuerdas de cáñamo y los vendían en el mercado. En los últimos años, sin embargo, las ventas habían caído." },
      { it: "Ora l'allevamento ha ottenuto un marchio di qualità europeo. I giovani mitilicoltori hanno investito in barche nuove e laboratori per la pulizia, e le vendite sono ripartite.",
      es: "Ahora el criadero ha obtenido una marca de calidad europea. Los jóvenes mitilicultores han invertido en barcas nuevas y laboratorios de limpieza, y las ventas han repuntado." },
      { it: "Il segreto è il tempo: le cozze crescono per un anno nelle acque del mar Piccolo, dove entrano le correnti dolci. Per questo hanno un sapore particolare.",
      es: "El secreto es el tiempo: los mejillones crecen durante un año en las aguas del mar Piccolo, donde entran las corrientes dulces. Por eso tienen un sabor particular." },
      { it: "«Mio nonno faceva questo lavoro e io l'avevo quasi dimenticato», dice Giuseppe Greco, trentadue anni. «Poi ho capito che il futuro della città stava nel mare, come prima».",
      es: "«Mi abuelo hacía este trabajo y yo casi lo había olvidado», dice Giuseppe Greco, de treinta y dos años. «Después he entendido que el futuro de la ciudad estaba en el mar, como antes»." },
      { it: "L'anno scorso trenta ragazzi sotto i trent'anni hanno aperto piccole imprese collegate alla pesca: vendita diretta, visite guidate sugli allevamenti, un festival della cozza in estate.",
      es: "El año pasado treinta chicos menores de treinta años han abierto pequeñas empresas ligadas a la pesca: venta directa, visitas guiadas a los criaderos, un festival del mejillón en verano." },
      { it: "I ristoranti del centro hanno rimesso le cozze nel menu, e i turisti seguono il profumo. «Il mare ci dava lavoro, il mare ce l'ha ridato», conclude Greco.",
      es: "Los restaurantes del centro han vuelto a poner los mejillones en el menú, y los turistas siguen el aroma. «El mar nos daba trabajo, el mar nos lo ha devuelto», concluye Greco." },
    ],
    words: [
      { it: "la cozza / le cozze", es: "el mejillón / los mejillones", note: "en italiano es femenino y se escribe con z" },
      { it: "l'allevamento", es: "el criadero, la cría" },
      { it: "il marchio", es: "la marca, el sello", note: "marchio di qualità = sello de calidad" },
      { it: "la vendita / le vendite", es: "la venta / las ventas" },
      { it: "la corrente / le correnti", es: "la corriente / las corrientes" },
      { it: "il sapore", es: "el sabor" },
    ],
    questions: [
      { q: "¿Qué han obtenido ahora los criaderos de Táranto?", options: ["Un premio televisivo", "Un marchio di qualità europeo", "Una nave più grande", "Un museo del mare"], answer: 1, why: "«l'allevamento ha ottenuto un marchio di qualità europeo»." },
      { q: "¿Por qué tienen las mejillonas un sabor particular?", options: ["Per le correnti dolci del mar Piccolo", "Per il sale importato", "Perché crescono in vasca", "Perché mangiano pane"], answer: 0, why: "«crescono per un anno nelle acque del mar Piccolo, dove entrano le correnti dolci»." },
      { q: "¿Qué han abierto treinta jóvenes ligados a la pesca?", options: ["Solo bar", "Un grande albergo", "Piccole imprese: vendita diretta, visite guidate, un festival", "Una fabbrica di barche"], answer: 2, why: "«trenta ragazzi sotto i trent'anni hanno aperto piccole imprese collegate alla pesca»." },
      { q: "¿Qué significa «il mare ce l'ha ridato» en boca de Greco?", options: ["Che il mare è troppo salato", "Che i giovani devono partire", "Che il lavoro è finito", "Che il mare ha restituito il lavoro alla città"], answer: 3, why: "«Il mare ci dava lavoro, il mare ce l'ha ridato»." },
    ],
    discuss: [
      { it: "C'è un prodotto tipico della tua regione? Raccontalo brevemente.", es: "¿Hay un producto típico de tu región? Cuéntalo brevemente." },
      { it: "Meglio un lavoro tradizionale o un lavoro moderno? Perché?", es: "¿Mejor un trabajo tradicional o un trabajo moderno? ¿Por qué?" },
    ],
  },

  /* ═══ B1 · 9 — Società ═══ */
  {
    id: "news-b1-09", cat: "societa", level: "B1", place: "Napoli", minutes: 3,
    title: "A Napoli la rete dei vicini per gli anziani",
    titleEs: "En Nápoles, la red de vecinos para los ancianos",
    lead: {
      it: "Uno studente, una signora sola e un elenco di nomi: così è nata la rete dei vicini di Napoli. Oggi nessun anziano del quartiere resta solo.",
      es: "Un estudiante, una señora sola y una lista de nombres: así nació la red de vecinos de Nápoles. Hoy ningún anciano del barrio queda solo.",
    },
    paragraphs: [
      { it: "In un quartiere antico di Napoli è nata una rete di vicini. Quando qualcuno non apre la porta per un giorno, il telefono della rete suona.",
      es: "En un barrio antiguo de Nápoles ha nacido una red de vecinos. Cuando alguien no abre la puerta durante un día, el teléfono de la red suena." },
      { it: "L'idea è partita da un gruppo di studenti, mentre parlavano con una signora che viveva sola da anni. Il primo elenco contava venti nomi; oggi sono più di trecento.",
      es: "La idea partió de un grupo de estudiantes, mientras hablaban con una señora que vivía sola desde hacía años. La primera lista contaba veinte nombres; hoy son más de trescientos." },
      { it: "Il metodo è semplice: ogni anziano ha un «vicino di riferimento», che passa a salutare la mattina. I negozi della strada tengono una copia delle chiavi.",
      es: "El método es simple: cada anciano tiene un «vecino de referencia», que pasa a saludar por la mañana. Los comercios de la calle guardan una copia de las llaves." },
      { it: "«Prima uscivamo solo per la spesa, adesso organiziamo tutto insieme», racconta la coordinatrice Rosa Esposito. «Il quartiere ha ritrovato la memoria e anche un po' di allegria».",
      es: "«Antes salíamos solo para la compra, ahora lo organizamos todo juntos», cuenta la coordinadora Rosa Esposito. «El barrio ha recuperado la memoria y también un poco de alegría»." },
      { it: "I dati della città dicono che gli anziani coinvolti chiamano meno i servizi sociali e vanno più spesso dal medico di base, con calma, prima che i piccoli problemi crescano.",
      es: "Los datos de la ciudad dicen que los ancianos involucrados llaman menos a los servicios sociales y van más a menudo al médico de cabecera, con calma, antes de que los problemas pequeños crezcan." },
      { it: "La rete ora cerca fondi per un furgoncino della spesa e un computer per le videochiamate con i parenti lontani. Altri tre quartieri, intanto, hanno chiesto di copiare l'idea.",
      es: "La red ahora busca fondos para una furgoneta de la compra y una computadora para las videollamadas con los parientes lejanos. Otros tres barrios, mientras tanto, han pedido copiar la idea." },
    ],
    words: [
      { it: "il vicino / i vicini", es: "el vecino / los vecinos" },
      { it: "l'anziano / gli anziani", es: "el anciano / los ancianos" },
      { it: "il quartiere", es: "el barrio" },
      { it: "la spesa", es: "la compra (de alimentos)" },
      { it: "la rete", es: "la red" },
      { it: "la chiave / le chiavi", es: "la llave / las llaves" },
    ],
    questions: [
      { q: "¿Cuándo suena el teléfono de la red?", options: ["Quando qualcuno non apre la porta per un giorno", "Ogni mattina alle otto", "Quando arrivano i turisti", "Solo la domenica"], answer: 0, why: "«Quando qualcuno non apre la porta per un giorno, il telefono della rete suona»." },
      { q: "¿Cuántos nombres cuenta hoy la lista?", options: ["Venti", "Cento", "Più di trecento", "Trecentomila"], answer: 2, why: "«Il primo elenco contava venti nomi; oggi sono più di trecento»." },
      { q: "¿Qué hacen los comercios de la calle por los ancianos?", options: ["Portano la posta", "Chiudono più tardi", "Vendono a metà prezzo", "Tengono una copia delle chiavi"], answer: 3, why: "«I negozi della strada tengono una copia delle chiavi»." },
      { q: "¿Qué ha recuperado el barrio, según Esposito?", options: ["Solo i soldi", "Un nuovo mercato", "La memoria e un po' di allegria", "Le vecchie macchine"], answer: 2, why: "«Il quartiere ha ritrovato la memoria e anche un po' di allegria»." },
    ],
    discuss: [
      { it: "Conosci i tuoi vicini di casa? Che rapporto hai con loro?", es: "¿Conoces a tus vecinos? ¿Qué relación tienes con ellos?" },
      { it: "Chi deve aiutare gli anziani soli: la famiglia, il quartiere o lo stato?", es: "¿Quién debe ayudar a los ancianos solos: la familia, el barrio o el Estado?" },
    ],
  },

  /* ═══ B1 · 10 — Storia ═══ */
  {
    id: "news-b1-10", cat: "storia", level: "B1", place: "Verona", minutes: 3,
    title: "Sotto l'Arena di Verona riemerge un tunnel romano",
    titleEs: "Bajo la Arena de Verona reaparece un túnel romano",
    lead: {
      it: "Duemila anni di concerti e, sotto i piedi del pubblico, un segreto chiuso nel buio. A Verona è tornato alla luce il cunicolo romano dell'Arena.",
      es: "Dos mil años de conciertos y, bajo los pies del público, un secreto cerrado en la oscuridad. En Verona ha vuelto a la luz el túnel romano de la Arena.",
    },
    paragraphs: [
      { it: "L'Arena di Verona ospita concerti da duemila anni, ma sotto le gradinate nascondeva ancora dei segreti. Durante un controllo tecnico, gli operai hanno trovato un cunicolo chiuso da secoli.",
      es: "La Arena de Verona acoge conciertos desde hace dos mil años, pero bajo las gradas escondía aún secretos. Durante un control técnico, los obreros han encontrado una galería cerrada desde hace siglos." },
      { it: "Il tunnel corre sotto l'anello esterno, in direzione del palcoscenico. I mattoni erano impilati con cura, e lungo le pareti correvano ancora i canali dell'acqua.",
      es: "El túnel corre bajo el anillo exterior, en dirección al escenario. Los ladrillos estaban apilados con cuidado, y a lo largo de las paredes corrían todavía los canales del agua." },
      { it: "«Era la fogna monumentale dell'anfiteatro», spiega l'archeologa Francesca Donati. «I romani scaricavano qui l'acqua dei temporali, così la sabbia dell'arena restava asciutta».",
      es: "«Era la alcantarilla monumental del anfiteatro», explica la arqueóloga Francesca Donati. «Los romanos descargaban aquí el agua de los temporales, así la arena de la pista se quedaba seca»." },
      { it: "Nella terra, gli archeologi hanno raccolto monete di bronzo, resti di ceramiche e un dado d'osso, forse perso da uno spettatore antico.",
      es: "En la tierra, los arqueólogos han recogido monedas de bronce, restos de cerámicas y un dado de hueso, quizá perdido por un espectador antiguo." },
      { it: "Il cunicolo verrà ripulito e aperto ai turisti con un percorso di trenta metri. Prima però gli ingegneri devono controllare la stabilità delle volte, che hanno subito i secoli.",
      es: "La galería será limpiada y abierta a los turistas con un recorrido de treinta metros. Antes, sin embargo, los ingenieros deben controlar la estabilidad de las bóvedas, que han sufrido los siglos." },
      { it: "Nel frattempo i ricercatori studiano le iscrizioni sui mattoni: alcune portano il timbro della fabbrica romana che li ha prodotti. Anche le pietre, a Verona, firmano la propria storia.",
      es: "Mientras tanto, los investigadores estudian las inscripciones en los ladrillos: algunas llevan el sello de la fábrica romana que los ha producido. También las piedras, en Verona, firman su propia historia." },
    ],
    words: [
      { it: "il cunicolo", es: "la galería, el túnel estrecho" },
      { it: "la gradinata / le gradinate", es: "la grada / las gradas" },
      { it: "la fogna", es: "la alcantarilla" },
      { it: "la moneta / le monete", es: "la moneda / las monedas" },
      { it: "il mattone / i mattoni", es: "el ladrillo / los ladrillos" },
      { it: "il timbro", es: "el sello, la marca de fábrica" },
    ],
    questions: [
      { q: "¿Qué encontraron los obreros durante el control técnico?", options: ["Una sala piena d'oro", "Un tunnel della metropolitana", "Una grotta naturale", "Un cunicolo chiuso da secoli"], answer: 3, why: "«Durante un controllo tecnico, gli operai hanno trovato un cunicolo chiuso da secoli»." },
      { q: "¿Para qué usaban los romanos el túnel?", options: ["Per scaricare l'acqua dei temporali", "Come magazzino del vino", "Come prigione", "Per nascondere i tesori"], answer: 0, why: "«I romani scaricavano qui l'acqua dei temporali»." },
      { q: "¿Qué objeto sugiere la presencia de antiguos espectadores?", options: ["Una chiave arrugginita", "Una scarpa moderna", "Un telefono antico", "Un dado d'osso, forse perso da uno spettatore antico"], answer: 3, why: "«un dado d'osso, forse perso da uno spettatore antico»." },
      { q: "¿Qué significa la frase final sobre las piedras que «firman» su historia?", options: ["Che i mattoni portano timbri che testimoniano la loro origine", "Che le pietre sono firmate dai turisti", "Che la storia è incerta", "Che Verona costruisce case nuove"], answer: 0, why: "«alcune portano il timbro della fabbrica romana che li ha prodotti»: las piedras llevan la marca de su origen." },
    ],
    discuss: [
      { it: "Hai mai visitato un monumento romano? Che impressione ti ha fatto?", es: "¿Has visitado alguna vez un monumento romano? ¿Qué impresión te causó?" },
      { it: "La città del passato deve restare intatta o può cambiare? Perché?", es: "¿La ciudad del pasado debe quedar intacta o puede cambiar? ¿Por qué?" },
    ],
  },

  /* ═══ B1 · 11 — Tecnologia ═══ */
  {
    id: "news-b1-11", cat: "tecnologia", level: "B1", place: "Torino", minutes: 3,
    title: "A Torino si stampa la prima casa in 3D",
    titleEs: "En Turín se imprime la primera casa en 3D",
    lead: {
      it: "Un braccio meccanico, strati di cemento e un progetto al computer: a Torino è nata una casa stampata in 3D. Costa meno e consuma poco.",
      es: "Un brazo mecánico, capas de cemento y un proyecto en la computadora: en Turín ha nacido una casa impresa en 3D. Cuesta menos y consume poco.",
    },
    paragraphs: [
      { it: "In un cantiere alla periferia di Torino una stampante grande come un braccio meccanico ha costruito le pareti di una casa. Ha lavorato venti giorni, giorno e notte, senza pause.",
      es: "En una obra a las afueras de Turín, una impresora grande como un brazo mecánico ha construido las paredes de una casa. Ha trabajado veinte días, día y noche, sin pausas." },
      { it: "La macchina depone strati di cemento speciale, uno sopra l'altro, seguendo il progetto al computer. Prima degli strati, gli operai montavano i tubi per l'acqua e la luce.",
      es: "La máquina deposita capas de cemento especial, una sobre otra, siguiendo el proyecto en la computadora. Antes de las capas, los obreros montaban los tubos para el agua y la luz." },
      { it: "Il risultato è un piccolo edificio di sessanta metri quadrati, con muri curvi e spessi che tengono caldo d'inverno e fresco d'estate.",
      es: "El resultado es un pequeño edificio de sesenta metros cuadrados, con muros curvos y gruesos que mantienen el calor en invierno y el frescor en verano." },
      { it: "«La stampante non sostituisce i muratori», avverte l'ingegnere Luca Bertero. «Fa il lavoro pesante; le finiture, le porte e i vetri restano nelle mani degli operai».",
      es: "«La impresora no sustituye a los albañiles», advierte el ingeniero Luca Bertero. «Hace el trabajo pesado; los acabados, las puertas y los cristales quedan en las manos de los obreros»." },
      { it: "La casa di Torino è un prototipo universitario: studenti e imprese hanno lavorato insieme, e i materiali arrivavano da fornitori del territorio. I costi sono scesi di un terzo.",
      es: "La casa de Turín es un prototipo universitario: estudiantes y empresas han trabajado juntos, y los materiales llegaban de proveedores del territorio. Los costos han bajado un tercio." },
      { it: "Il prossimo anno il cantiere stamperà un piccolo quartiere sperimentale. Se i test andranno bene, la tecnica potrà costruire in fretta dove servono case, dai borghi di montagna alle periferie.",
      es: "El año que viene la obra imprimirá un pequeño barrio experimental. Si las pruebas van bien, la técnica podrá construir rápido donde hacen falta casas, de los pueblos de montaña a las afueras." },
    ],
    words: [
      { it: "la stampante", es: "la impresora" },
      { it: "il cantiere", es: "la obra (de construcción)" },
      { it: "lo strato / gli strati", es: "la capa / las capas" },
      { it: "il muro / i muri", es: "el muro / los muros" },
      { it: "il costo / i costi", es: "el costo / los costos" },
      { it: "il prototipo", es: "el prototipo" },
    ],
    questions: [
      { q: "¿Cuántos días trabajó la impresora para construir las paredes?", options: ["Tre giorni", "Venti giorni", "Un anno", "Due settimane esatte"], answer: 1, why: "«Ha lavorato venti giorni, giorno e notte, senza pause»." },
      { q: "¿Qué hacían los obreros antes de las capas?", options: ["Montavano i tubi per l'acqua e la luce", "Dipingevano i muri", "Costruivano il tetto", "Riposavano"], answer: 0, why: "«Prima degli strati, gli operai montavano i tubi per l'acqua e la luce»." },
      { q: "¿Qué ventaja tienen los muros curvos y gruesos?", options: ["Costano di più", "Si rompono facilmente", "Tengono caldo d'inverno e fresco d'estate", "Non si possono dipingere"], answer: 2, why: "«muri curvi e spessi che tengono caldo d'inverno e fresco d'estate»." },
      { q: "Según Bertero, ¿la impresora elimina a los albañiles?", options: ["Sì, del tutto", "Solo nei cantieri piccoli", "Solo in montagna", "No: fa il lavoro pesante, le finiture restano agli operai"], answer: 3, why: "«La stampante non sostituisce i muratori»: hace el trabajo pesado, los acabados quedan para los obreros." },
    ],
    discuss: [
      { it: "Vorresti vivere in una casa stampata in 3D? Perché sì o no?", es: "¿Te gustaría vivir en una casa impresa en 3D? ¿Por qué sí o no?" },
      { it: "Quali lavori faranno le macchine in futuro, e quali resteranno umani?", es: "¿Qué trabajos harán las máquinas en el futuro y cuáles seguirán siendo humanos?" },
    ],
  },

  /* ═══ B1 · 12 — Sport ═══ */
  {
    id: "news-b1-12", cat: "sport", level: "B1", place: "Cortina d'Ampezzo", minutes: 3,
    title: "A Cortina lo sci entra tra i banchi di scuola",
    titleEs: "En Cortina, el esquí entra en las aulas",
    lead: {
      it: "Trenta bambini, una funivia e otto venerdì di neve: a Cortina d'Ampezzo lo sci è diventato materia di scuola. Il progetto potrà allargarsi ad altre valli.",
      es: "Treinta niños, un teleférico y ocho viernes de nieve: en Cortina d'Ampezzo el esquí se ha convertido en asignatura escolar. El proyecto podrá ampliarse a otros valles.",
    },
    paragraphs: [
      { it: "Sulle piste di Cortina d'Ampezzo è arrivata una classe speciale: trenta bambini della scuola elementare, con gli sci ai piedi e il maestro davanti.",
      es: "A las pistas de Cortina d'Ampezzo ha llegado una clase especial: treinta niños de la escuela primaria, con los esquís en los pies y el maestro delante." },
      { it: "Il progetto, nato dalla collaborazione tra comune e maestri di sci, durerà tutto l'inverno. Ogni venerdì i bambini prendono la funivia e passano la mattina sulla neve.",
      es: "El proyecto, nacido de la colaboración entre el ayuntamiento y los maestros de esquí, durará todo el invierno. Cada viernes los niños toman el teleférico y pasan la mañana en la nieve." },
      { it: "All'inizio molti non avevano mai indossato gli sci: cadevano a ogni curva e ridevano di gusto. Dopo un mese, invece, scendevano già dal percorso blu senza paura.",
      es: "Al principio muchos no se habían puesto nunca los esquís: se caían en cada curva y se reían a gusto. Después de un mes, en cambio, ya bajaban por el recorrido azul sin miedo." },
      { it: "«Lo sci insegna tre cose: equilibrio, pazienza e coraggio», dice il maestro Aldo Menardi. «E poi questi monti erano il nostro futuro: ora lo ridiamo ai bambini».",
      es: "«El esquí enseña tres cosas: equilibrio, paciencia y coraje», dice el maestro Aldo Menardi. «Y luego estas montañas eran nuestro futuro: ahora se lo devolvemos a los niños»." },
      { it: "Le famiglie pagano solo il biglietto della funivia, perché i maestri lavorano come volontari. Le scuole di altre valli hanno già chiesto di entrare nel progetto.",
      es: "Las familias pagan solo el billete del teleférico, porque los maestros trabajan como voluntarios. Las escuelas de otros valles ya han pedido entrar en el proyecto." },
      { it: "Il sogno degli organizzatori è semplice: che nessun bambino della valle finisca la scuola senza sapere sciare. Sulla neve, dicono, si impara anche a rialzarsi.",
      es: "El sueño de los organizadores es simple: que ningún niño del valle termine la escuela sin saber esquiar. En la nieve, dicen, también se aprende a levantarse." },
    ],
    words: [
      { it: "la pista / le piste", es: "la pista / las pistas" },
      { it: "lo sci / gli sci", es: "el esquí / los esquís", note: "plural irregular: gli sci" },
      { it: "il maestro (di sci)", es: "el maestro (de esquí)" },
      { it: "la funivia", es: "el teleférico" },
      { it: "la neve", es: "la nieve" },
      { it: "rialzarsi", es: "levantarse (tras una caída)" },
    ],
    questions: [
      { q: "¿Quién ha llegado a las pistas de Cortina d'Ampezzo?", options: ["Una squadra di campioni", "Un gruppo di turisti", "Gli insegnanti di ginnastica", "Trenta bambini della scuola elementare"], answer: 3, why: "«è arrivata una classe speciale: trenta bambini della scuola elementare»." },
      { q: "¿Qué hacen los niños cada viernes?", options: ["Ogni venerdì i bambini prendono la funivia e passano la mattina sulla neve", "Restano in classe", "Vanno in piscina", "Guardano la televisione"], answer: 0, why: "«Ogni venerdì i bambini prendono la funivia e passano la mattina sulla neve»." },
      { q: "¿Cuánto pagan las familias?", options: ["Tutto il corso", "Niente di niente", "Il pranzo e gli sci", "Solo il biglietto della funivia"], answer: 3, why: "«Le famiglie pagano solo il biglietto della funivia», porque los maestros trabajan como voluntarios." },
      { q: "¿Qué quieren decir los organizadores con «sulla neve si impara anche a rialzarsi»?", options: ["Che sciare è facile", "Che la neve è pericolosa", "Che la caduta e la ripresa insegnano anche la vita", "Che gli sci sono costosi"], answer: 2, why: "«Sulla neve, dicono, si impara anche a rialzarsi»: la metáfora va más allá del esquí." },
    ],
    discuss: [
      { it: "Pratichi uno sport d'inverno o d'estate? Quale e perché?", es: "¿Practicas un deporte de invierno o de verano? ¿Cuál y por qué?" },
      { it: "Lo sport a scuola serve più della matematica, uguale o meno? Discuti.", es: "¿El deporte en la escuela sirve más que las matemáticas, igual o menos? Discútelo." },
    ],
  },

  /* ═══ B1 · 13 — Scienza ═══ */
  {
    id: "news-b1-13", cat: "scienza", level: "B1", place: "Pisa", minutes: 3,
    title: "A Pisa si ascoltano i sussurri dell'universo",
    titleEs: "En Pisa se escuchan los susurros del universo",
    lead: {
      it: "Tre chilometri di tubi, uno specchio che si muove meno di un atomo e il tremito delle stelle: il laboratorio di Pisa studia le onde gravitazionali.",
      es: "Tres kilómetros de tubos, un espejo que se mueve menos que un átomo y el temblor de las estrellas: el laboratorio de Pisa estudia las ondas gravitacionales.",
    },
    paragraphs: [
      { it: "Nella campagna vicino a Pisa c'è un laboratorio lungo tre chilometri, con due braccia di tubi d'acciaio. Dentro viaggia un raggio di luce, tra specchi perfetti.",
      es: "En el campo cerca de Pisa hay un laboratorio de tres kilómetros de largo, con dos brazos de tubos de acero. Dentro viaja un rayo de luz, entre espejos perfectos." },
      { it: "Quando, molto lontano, due stelle nere si uniscono, lo spazio trema come la superficie di un lago. Il tremito arriva qui sotto forma di onda: si chiama onda gravitazionale.",
      es: "Cuando, muy lejos, dos estrellas negras se unen, el espacio tiembla como la superficie de un lago. El temblor llega aquí en forma de onda: se llama onda gravitacional." },
      { it: "Lo specchio, allora, si muove appena: molto meno di un atomo. Un raggio laser misura questo movimento minimo, e il computer lo traduce in un suono.",
      es: "El espejo, entonces, se mueve apenas: mucho menos que un átomo. Un rayo láser mide este movimiento mínimo, y la computadora lo traduce en un sonido." },
      { it: "«Il primo segnale è arrivato di notte, qualche anno fa», ricorda la fisica Roberta Landi. «Abbiamo pianto: dopo un secolo di teorie, l'universo finalmente parlava».",
      es: "«La primera señal llegó de noche, hace algunos años», recuerda la física Roberta Landi. «Lloramos: después de un siglo de teorías, el universo por fin hablaba»." },
      { it: "Da allora i ricercatori hanno raccolto decine di segnali, e ogni volta hanno capito qualcosa di nuovo: l'età delle stelle, la loro distanza, il modo in cui muoiono.",
      es: "Desde entonces los investigadores han recogido decenas de señales, y cada vez han entendido algo nuevo: la edad de las estrellas, su distancia, el modo en que mueren." },
      { it: "A primavera il laboratorio aprirà le porte alle scuole. «Quando i ragazzi vedono i tubi», conclude la Landi, «capiscono che la scienza è fatta anche di pazienza».",
      es: "En primavera el laboratorio abrirá las puertas a las escuelas. «Cuando los chicos ven los tubos», concluye Landi, «entienden que la ciencia está hecha también de paciencia»." },
    ],
    words: [
      { it: "il laboratorio", es: "el laboratorio" },
      { it: "lo specchio / gli specchi", es: "el espejo / los espejos" },
      { it: "il raggio laser", es: "el rayo láser" },
      { it: "l'onda gravitazionale", es: "la onda gravitacional" },
      { it: "il segnale / i segnali", es: "la señal / las señales" },
      { it: "la stella / le stelle", es: "la estrella / las estrellas" },
    ],
    questions: [
      { q: "¿Cuánto mide el laboratorio cerca de Pisa?", options: ["Tre metri", "Trecento metri", "Tre chilometri", "Trenta chilometri"], answer: 2, why: "«un laboratorio lungo tre chilometri, con due braccia di tubi d'acciaio»." },
      { q: "¿Qué es una onda gravitacional, según la noticia?", options: ["Il tremito dello spazio che arriva sotto forma di onda", "Un tipo di vento", "Un suono della Terra", "Una luce colorata"], answer: 0, why: "«Il tremito arriva qui sotto forma di onda: si chiama onda gravitazionale»." },
      { q: "¿Cuánto se mueve el espejo cuando llega la señal?", options: ["Di un metro", "Di un centimetro", "Molto meno di un atomo", "Non si muove mai"], answer: 2, why: "«si muove appena: molto meno di un atomo»." },
      { q: "¿Por qué lloraron los investigadores con la primera señal?", options: ["Perché avevano paura", "Perché il computer era rotto", "Perché il lavoro era finito", "Perché dopo un secolo di teorie l'universo finalmente parlava"], answer: 3, why: "«dopo un secolo di teorie, l'universo finalmente parlava»." },
    ],
    discuss: [
      { it: "Ti interessa l'astronomia? Guardi mai il cielo di notte? Racconta.", es: "¿Te interesa la astronomía? ¿Miras alguna vez el cielo de noche? Cuenta." },
      { it: "Meglio spendere i soldi pubblici nello spazio o sulla Terra? Perché?", es: "¿Mejor gastar el dinero público en el espacio o en la Tierra? ¿Por qué?" },
    ],
  },

  /* ═══ B1 · 14 — Cultura ═══ */
  {
    id: "news-b1-14", cat: "cultura", level: "B1", place: "Siena", minutes: 3,
    title: "La banda di Siena cerca giovani suonatori",
    titleEs: "La banda de Siena busca jóvenes músicos",
    lead: {
      it: "Suonava nelle feste da centocinquant'anni, ma i musicisti invecchiavano. La banda di Siena ha aperto una scuola gratuita, e i giovani sono arrivati.",
      es: "Tocaba en las fiestas desde hacía ciento cincuenta años, pero sus músicos envejecían. La banda de Siena ha abierto una escuela gratuita y los jóvenes han llegado.",
    },
    paragraphs: [
      { it: "Da centocinquant'anni la banda cittadina suona nelle feste di Siena: concerti in piazza, processioni, matrimoni. Negli ultimi anni, però, i musicisti invecchiavano e i posti restavano vuoti.",
      es: "Desde hace ciento cincuenta años la banda municipal toca en las fiestas de Siena: conciertos en la plaza, procesiones, bodas. En los últimos años, sin embargo, los músicos envejecían y los puestos quedaban vacíos." },
      { it: "L'anno scorso il direttore Tommaso Vanni ha aperto una scuola gratuita: sessanta posti, strumenti prestati dal comune. Si sono iscritti in ottanta, metà sotto i venticinque anni.",
      es: "El año pasado el director Tommaso Vanni ha abierto una escuela gratuita: sesenta plazas, instrumentos prestados por el ayuntamiento. Se han inscrito ochenta, la mitad menores de veinticinco años." },
      { it: "Le lezioni si tengono due volte alla settimana in una sala del centro. I principianti studiavano le note da zero; i più bravi suonavano già insieme, senza spartito.",
      es: "Las clases se hacen dos veces por semana en una sala del centro. Los principiantes estudiaban las notas desde cero; los más hábiles ya tocaban juntos, sin partitura." },
      { it: "«La banda è stata la mia prima università», racconta Vanni. «Qui ho imparato ad ascoltare gli altri: quando suoni con trenta persone, da solo non vai da nessuna parte».",
      es: "«La banda ha sido mi primera universidad», cuenta Vanni. «Aquí aprendí a escuchar a los demás: cuando tocas con treinta personas, en solitario no llegas a ninguna parte»." },
      { it: "Il primo concerto dei nuovi arrivati è previsto a giugno in piazza del Campo. Intanto la banda ha ripreso a suonare anche nei borghi della provincia, dove non si sentiva da anni.",
      es: "El primer concierto de los recién llegados está previsto para junio en la plaza del Campo. Mientras tanto, la banda ha vuelto a tocar también en los pueblos de la provincia, donde no se la oía desde hacía años." },
      { it: "C'è chi sogna di riportare la banda anche nei cortei storici della città. Il problema, ride Vanni, è un altro: gli strumenti bastano, gli armadietti no.",
      es: "Hay quien sueña con llevar la banda también a los desfiles históricos de la ciudad. El problema, bromea Vanni, es otro: los instrumentos bastan, los taquillos no." },
    ],
    words: [
      { it: "la banda", es: "la banda (de música)", note: "aquí, grupo de músicos de viento" },
      { it: "il direttore", es: "el director" },
      { it: "lo strumento / gli strumenti", es: "el instrumento / los instrumentos" },
      { it: "il concerto / i concerti", es: "el concierto / los conciertos" },
      { it: "lo spartito", es: "la partitura" },
      { it: "il posto / i posti", es: "el puesto / los puestos" },
    ],
    questions: [
      { q: "¿Por qué quedaban vacíos los puestos en la banda?", options: ["Perché i musicisti invecchiavano", "Perché la banda era ricca", "Perché il comune chiudeva le scuole", "Perché gli strumenti erano rotti"], answer: 0, why: "«i musicisti invecchiavano e i posti restavano vuoti»." },
      { q: "¿Cuántos se han inscrito en la escuela gratuita?", options: ["Venti", "Sessanta", "Ottanta", "Centocinquanta"], answer: 2, why: "«Si sono iscritti in ottanta, metà sotto i venticinque anni»." },
      { q: "¿Qué hacían los más hábiles mientras los principiantes estudiaban las notas?", options: ["Andavano a casa", "Cucinavano per tutti", "Suonavano già insieme, senza spartito", "Giocavano a carte"], answer: 2, why: "«i più bravi suonavano già insieme, senza spartito»." },
      { q: "¿Qué quiso decir Vanni con «da solo non vai da nessuna parte»?", options: ["Che è meglio suonare da soli", "Che nella banda conta l'ascolto e il gruppo", "Che la musica è difficile", "Che bisogna viaggiare"], answer: 1, why: "«quando suoni con trenta persone, da solo non vai da nessuna parte»: tocar en grupo exige escucharse." },
    ],
    discuss: [
      { it: "Hai mai suonato in un gruppo, un coro o una squadra? Com'era?", es: "¿Has tocado alguna vez en un grupo, un coro o un equipo? ¿Cómo fue?" },
      { it: "Nella tua città esistono tradizioni come questa? Raccontane una.", es: "¿En tu ciudad existen tradiciones como esta? Cuenta una." },
    ],
  },

  /* ═══ B1 · 15 — Sport ═══ */
  {
    id: "news-b1-15", cat: "sport", level: "B1", place: "Rimini", minutes: 3,
    title: "A Rimini la festa del ciclismo porta ottomila biciclette",
    titleEs: "En Rímini, la fiesta del ciclismo trae ocho mil bicicletas",
    lead: {
      it: "Ottomila ciclisti, tre percorsi e una spiaggia piena di biciclette: a Rimini si è corsa la granfondo più grande dell'Adriatico. E la città ha guadagnato.",
      es: "Ocho mil ciclistas, tres recorridos y una playa llena de bicicletas: en Rímini se ha corrido la marcha ciclista más grande del Adriático. Y la ciudad ha ganado.",
    },
    paragraphs: [
      { it: "All'alba la lunga spiaggia di Rimini sembrava un parcheggio di biciclette: ottomila ciclisti, con pettorale e casco, aspettavano il via della granfondo.",
      es: "Al alba, la larga playa de Rímini parecía un estacionamiento de bicicletas: ocho mil ciclistas, con dorsal y casco, esperaban la salida de la marcha." },
      { it: "I percorsi erano tre: uno breve e piano per le famiglie, uno di cento chilometri lungo il mare, e uno che saliva nelle colline dell'interno.",
      es: "Los recorridos eran tres: uno breve y llano para las familias, uno de cien kilómetros junto al mar y otro que subía hacia las colinas del interior." },
      { it: "Alla partenza c'erano nonni e nipoti, gruppi di colleghi e anche ex calciatori. Mentre molti si allenavano da mesi, altri avevano preso la bici la settimana prima, per scherzo.",
      es: "En la salida había abuelos y nietos, grupos de colegas y también exfutbolistas. Mientras muchos se entrenaban desde hacía meses, otros habían tomado la bici la semana anterior, en broma." },
      { it: "«Il segreto non è la forza, è la costanza», dice l'organizzatrice Federica Marchetti. «Chi pedala ogni weekend arriva a fine corsa; chi corre solo il giorno della gara resta indietro».",
      es: "«El secreto no es la fuerza, es la constancia», dice la organizadora Federica Marchetti. «Quien pedalea cada fin de semana llega a la meta; quien corre solo el día de la carrera se queda atrás»." },
      { it: "Per la città la corsa è un affare serio: alberghi pieni, ciclisti a tavola, officine aperte fino a notte. L'indotto del weekend ha superato i due milioni di euro.",
      es: "Para la ciudad, la carrera es un asunto serio: hoteles llenos, ciclistas en la mesa, talleres abiertos hasta la noche. Los ingresos del fin de semana han superado los dos millones de euros." },
      { it: "Il gran premio del prossimo anno avrà un percorso interamente sul litorale. E qualcuno, ridendo, propone già una gara di bici da spiaggia per gli ultimi della classifica.",
      es: "El gran premio del próximo año tendrá un recorrido enteramente por el litoral. Y alguien, entre risas, ya propone una carrera de bici de playa para los últimos de la clasificación." },
    ],
    words: [
      { it: "la granfondo", es: "la marcha ciclista (de fondo)", note: "término italiano difundido también fuera de Italia" },
      { it: "il casco", es: "el casco" },
      { it: "il percorso / i percorsi", es: "el recorrido / los recorridos" },
      { it: "la costanza", es: "la constancia, la perseverancia" },
      { it: "l'officina / le officine", es: "el taller / los talleres" },
      { it: "la bici / la bicicletta", es: "la bici / la bicicleta" },
    ],
    questions: [
      { q: "¿Cuántos ciclistas esperaban la salida de la marcha?", options: ["Ottocento", "Ottomila", "Ottantamila", "Mille"], answer: 1, why: "«ottomila ciclisti, con pettorale e casco, aspettavano il via della granfondo»." },
      { q: "¿Cuántos recorridos había?", options: ["Tre", "Due", "Cinque", "Uno solo"], answer: 0, why: "«I percorsi erano tre: uno breve e piano per le famiglie», uno de cien kilómetros y otro de montaña." },
      { q: "¿Qué ha significado el fin de semana para la economía de la ciudad?", options: ["Un problema di traffico", "Un giorno di chiusura", "Alberghi pieni, ciclisti a tavola, officine aperte: oltre due milioni di euro", "Una giornata di pioggia"], answer: 2, why: "«alberghi pieni, ciclisti a tavola, officine aperte fino a notte» y «L'indotto del weekend ha superato i due milioni di euro»." },
      { q: "Según Marchetti, ¿qué cuenta más que la fuerza?", options: ["La fortuna", "La bici costosa", "Il numero dei fan", "La costanza di chi pedala ogni weekend"], answer: 3, why: "«Il segreto non è la forza, è la costanza»." },
    ],
    discuss: [
      { it: "Andresti in bici per cento chilometri? Con chi e perché?", es: "¿Irías en bici cien kilómetros? ¿Con quién y por qué?" },
      { it: "Lo sport di massa porta bene o male a una città turistica? Discuti.", es: "¿El deporte de masas trae cosas buenas o malas a una ciudad turística? Discútelo." },
    ],
  },
];
