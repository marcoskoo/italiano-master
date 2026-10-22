/* ── Notizie · ampliamento A1 (v9.39) ─────────────────────────────────
   12 noticias nuevas (news-a1-04 … news-a1-15): el nivel A1 pasa de 3
   a 15 noticias y cubre las 9 categorías. Método VOA, 100% original:
   4 párrafos, cuerpo 70-95 parole, presente simple.                  */

import type { NewsItem } from "./news";

export const NEWS_DATA_A1B: NewsItem[] = [

  /* ═══ A1 · 4 — Tecnologia ═══ */
  {
    id: "news-a1-04", cat: "tecnologia", level: "A1", place: "Torino", minutes: 2,
    title: "Il tram arriva: a Torino lo dice l'app",
    titleEs: "El tranvía llega: en Turín lo dice la app",
    lead: {
      it: "A Torino una nuova app dice quando arriva il tram, al minuto. Aspettare al freddo, per molti, finisce oggi.",
      es: "En Turín una nueva app dice cuándo llega el tranvía, al minuto. Para muchos, esperar al frío se acaba hoy.",
    },
    paragraphs: [
      { it: "A Torino c'è una novità per i pendolari. Una nuova app dice quando arriva il tram, al minuto. Sullo schermo si vede il nome della fermata e i minuti rimasti.",
      es: "En Turín hay una novedad para los viajeros. Una nueva app dice cuándo llega el tranvía, al minuto. En la pantalla se ve el nombre de la parada y los minutos que quedan." },
      { it: "La mattina la gente aspetta meno al freddo. La fila alla fermata è più tranquilla.",
      es: "Por la mañana la gente espera menos al frío. La fila en la parada se vuelve tranquila." },
      { it: "L'ingegnere Marta Ricci lavora nell'ufficio trasporti. Dice: «I dati del viaggio ora sono di tutti. È un servizio piccolo, ma utile».",
      es: "La ingeniera Marta Ricci trabaja en la oficina de transportes. Dice: «Los datos del viaje ahora son de todos. Es un servicio pequeño, pero útil»." },
      { it: "La prossima idea è la bici: l'app mostra anche le piste ciclabili. A Torino il tram viaggia ormai nel telefono.",
      es: "La próxima idea es la bici: la app muestra también los carriles bici. En Turín el tranvía viaja ya en el teléfono." },
    ],
    words: [
      { it: "la fermata", es: "la parada" },
      { it: "lo schermo", es: "la pantalla" },
      { it: "l'app", es: "la app", note: "femenino: se dice l'app nuova" },
      { it: "il tram", es: "el tranvía" },
      { it: "la bici", es: "la bicicleta" },
      { it: "la novità", es: "la novedad" },
    ],
    questions: [
      { q: "¿Qué muestra la nueva app de Turín sobre el transporte?", options: ["Quando arriva il tram, al minuto", "Il prezzo del biglietto", "Il meteo del weekend", "Le partite di calcio"], answer: 0, why: "«Una nuova app dice quando arriva il tram, al minuto. Sullo schermo si vede il nome della fermata.»" },
      { q: "¿Quién es Marta Ricci?", options: ["Un'insegnante", "Un'ingegnere dell'ufficio trasporti", "Un'autista di tram", "Una studentessa"], answer: 1, why: "«L'ingegnere Marta Ricci lavora nell'ufficio trasporti.»" },
      { q: "¿Cómo cambia la espera en la parada gracias a la app?", options: ["La gente aspetta di più", "La gente torna a casa", "La gente aspetta meno al freddo", "Nessuno esce più"], answer: 2, why: "«La mattina la gente aspetta meno al freddo»: y la fila en la parada es más tranquila." },
      { q: "¿Cuál es la próxima idea de la ciudad, según la noticia?", options: ["Il motorino", "L'aereo", "Il taxi", "La bici, con le piste ciclabili"], answer: 3, why: "«La prossima idea è la bici: l'app mostra anche le piste ciclabili.»" },
    ],
    discuss: [
      { it: "Usi le app dei mezzi pubblici nella tua città? Funzionano bene?", es: "¿Usas las apps del transporte público en tu ciudad? ¿Funcionan bien?" },
      { it: "Il telefono ci fa aspettare meno o ci ruba tempo? Secondo te?", es: "¿El teléfono nos hace esperar menos o nos roba tiempo? ¿Tú qué opinas?" },
    ],
  },

  /* ═══ A1 · 5 — Salute ═══ */
  {
    id: "news-a1-05", cat: "salute", level: "A1", place: "Firenze", minutes: 2,
    title: "La dieta mediterranea convince i medici",
    titleEs: "La dieta mediterránea convence a los médicos",
    lead: {
      it: "A Firenze i medici parlano di cibo. La vecchia dieta della nonna è, oggi, una ricetta di salute.",
      es: "En Florencia los médicos hablan de comida. La vieja dieta de la abuela es hoy una receta de salud.",
    },
    paragraphs: [
      { it: "All'ospedale di Careggi i dottori spiegano la dieta mediterranea: olio, pane, verdura, pesce. Poco zucchero, poca carne rossa.",
      es: "En el hospital de Careggi los médicos explican la dieta mediterránea: aceite, pan, verdura, pescado. Poco azúcar, poca carne roja." },
      { it: "«Il cibo buono è anche medicina», dice la dottoressa Elena Morelli, nutrizionista. «Mangiare bene costa meno che curarsi».",
      es: "«La buena comida es también medicina», dice la doctora Elena Morelli, nutricionista. «Comer bien cuesta menos que curarse»." },
      { it: "A Firenze nasce anche una scuola del gusto per i bambini. Loro assaggiano l'olio buono e la frutta di stagione.",
      es: "En Florencia nace también una escuela del gusto para los niños. Ellos prueban el buen aceite y la fruta de temporada." },
      { it: "La regola finale è semplice: mangia con calma, insieme alla famiglia. La tavola lenta fa bene al corpo e all'umore.",
      es: "La regla final es simple: come con calma, junto a la familia. La mesa lenta hace bien al cuerpo y al ánimo." },
    ],
    words: [
      { it: "la dieta", es: "la dieta" },
      { it: "l'olio", es: "el aceite", note: "de oliva: olio d'oliva" },
      { it: "la verdura", es: "la verdura (hortalizas)" },
      { it: "il pesce", es: "el pescado", note: "sc se pronuncia como sh inglesa" },
      { it: "di stagione", es: "de temporada" },
      { it: "la tavola", es: "la mesa (para comer)" },
    ],
    questions: [
      { q: "¿Qué explican los médicos del hospital de Careggi?", options: ["La dieta giapponese", "Il digiuno", "La dieta mediterranea", "La dieta vegana"], answer: 2, why: "«I dottori spiegano la dieta mediterranea: olio, pane, verdura, pesce.»" },
      { q: "¿Quién es Elena Morelli?", options: ["Una nutrizionista", "Una cuoca", "Un'infermiera", "Una paziente"], answer: 0, why: "«La dottoressa Elena Morelli, nutrizionista», cita el texto." },
      { q: "¿Qué hacen los niños en la escuela del gusto?", options: ["Dormono", "Cucinano da soli", "Assaggiano l'olio buono e la frutta di stagione", "Mangiano solo dolci"], answer: 2, why: "«Loro assaggiano l'olio buono e la frutta di stagione.»" },
      { q: "¿Cómo hay que comer, según la regla final?", options: ["Con calma, insieme alla famiglia", "In fretta, da soli", "In piedi, al bar", "Davanti alla TV"], answer: 0, why: "«Mangia con calma, insieme alla famiglia»: la tavola lenta fa bene al corpo e all'umore." },
    ],
    discuss: [
      { it: "Quali piatti della tua cucina assomigliano alla dieta mediterranea?", es: "¿Qué platos de tu cocina se parecen a la dieta mediterránea?" },
      { it: "Mangi con calma o di fretta? Quando, dove, con chi?", es: "¿Comes con calma o con prisa? ¿Cuándo, dónde, con quién?" },
    ],
  },

  /* ═══ A1 · 6 — Cultura ═══ */
  {
    id: "news-a1-06", cat: "cultura", level: "A1", place: "Verona", minutes: 2,
    title: "L'opera all'aperto: l'estate di Verona",
    titleEs: "La ópera al aire libre: el verano de Verona",
    lead: {
      it: "D'estate, a Verona, l'Arena romana diventa un palcoscenico. Migliaia di persone ascoltano l'opera sotto le stelle.",
      es: "En verano, en Verona, la Arena romana se convierte en un escenario. Miles de personas escuchan ópera bajo las estrellas.",
    },
    paragraphs: [
      { it: "L'Arena di Verona è un anfiteatro romano, quasi intatto. Da novant'anni, in estate, ospita l'opera lirica. Il pubblico siede sulla pietra antica.",
      es: "La Arena de Verona es un anfiteatro romano, casi intacto. Desde hace noventa años, en verano, acoge la ópera. El público se sienta sobre la piedra antigua." },
      { it: "La sera le luci si spengono. Restano le stelle e la musica. Molti portano un cuscino: la pietra è dura, la notte è lunga.",
      es: "Por la noche las luces se apagan. Quedan las estrellas y la música. Muchos llevan un cojín: la piedra es dura, la noche es larga." },
      { it: "«L'Arena è una casa speciale», dice il maestro Aldo Ferrari, direttore d'orchestra. «Qui la voce vola senza microfoni».",
      es: "«La Arena es una casa especial», dice el maestro Aldo Ferrari, director de orquesta. «Aquí la voz vuela sin micrófonos»." },
      { it: "Quest'anno il cartellone offre anche concerti di musica leggera. L'estate di Verona, sembra, non finisce mai.",
      es: "Este año el programa ofrece también conciertos de música ligera. El verano de Verona, parece, no termina nunca." },
    ],
    words: [
      { it: "l'arena", es: "la arena (anfiteatro romano)" },
      { it: "l'anfiteatro", es: "el anfiteatro" },
      { it: "la pietra", es: "la piedra" },
      { it: "il cuscino", es: "el cojín" },
      { it: "la voce", es: "la voz" },
      { it: "l'opera lirica", es: "la ópera (lírica)" },
    ],
    questions: [
      { q: "¿Qué es la Arena de Verona?", options: ["Un anfiteatro romano, quasi intatto", "Un teatro nuovo", "Un cinema", "Uno stadio"], answer: 0, why: "«L'Arena di Verona è un anfiteatro romano, quasi intatto.»" },
      { q: "¿Qué llevan muchos espectadores y por qué?", options: ["Un ombrello", "Un binocolo", "Un cuscino, perché la pietra è dura", "Una sedia"], answer: 2, why: "«Molti portano un cuscino: la pietra è dura, la notte è lunga.»" },
      { q: "¿Qué ocurre cuando se apagan las luces?", options: ["Restano le stelle e la musica", "Finisce lo spettacolo", "Piove", "Si accende lo schermo"], answer: 0, why: "«La sera le luci si spengono. Restano le stelle e la musica.»" },
      { q: "¿Qué dice el maestro Ferrari sobre la voz en la Arena?", options: ["Ha bisogno di microfoni", "È troppo piccola", "Non si sente", "Vola senza microfoni"], answer: 3, why: "«Qui la voce vola senza microfoni.»" },
    ],
    discuss: [
      { it: "Ti piace la musica all'aperto o al chiuso? Perché?", es: "¿Te gusta la música al aire libre o en sala? ¿Por qué?" },
      { it: "Nella tua città c'è un posto antico per i concerti? Quale?", es: "¿En tu ciudad hay un lugar antiguo para conciertos? ¿Cuál?" },
    ],
  },

  /* ═══ A1 · 7 — Storia ═══ */
  {
    id: "news-a1-07", cat: "storia", level: "A1", place: "Matera", minutes: 2,
    title: "Matera, la città dei sassi",
    titleEs: "Matera, la ciudad de los sassi",
    lead: {
      it: "Matera è una città molto antica, nel sud dell'Italia. Le sue case sono scavate nella roccia di una valle profonda.",
      es: "Matera es una ciudad muy antigua, en el sur de Italia. Sus casas están excavadas en la roca de un valle profundo.",
    },
    paragraphs: [
      { it: "A Matera le case si chiamano «sassi». Sono abitate da novemila anni. Oggi i sassi sono patrimonio dell'umanità, insieme alle chiese rupestri.",
      es: "En Matera las casas se llaman «sassi». Están habitadas desde hace nueve mil años. Hoy los sassi son patrimonio de la humanidad, junto con las iglesias rupestres." },
      { it: "I sassi vecchi hanno una storia difficile: prima case povere, senza acqua e senza luce. Poi, piano piano, tornano a vivere.",
      es: "Los sassi viejos tienen una historia difícil: primero casas pobres, sin agua y sin luz. Luego, poco a poco, vuelven a vivir." },
      { it: "Oggi i sassi sono alberghi e musei, case scavate nella roccia, con il giardino sul tetto. I turisti camminano nei vicoli stretti e guardano la valle.",
      es: "Hoy los sassi son hoteles y museos, casas excavadas en la roca, con el jardín en el tejado. Los turistas caminan por los callejones estrechos y miran el valle." },
      { it: "«Matera insegna una lezione», dice l'architetta Sofia Greco. «Le case povere diventano tesori, con pazienza e rispetto».",
      es: "«Matera enseña una lección», dice la arquitecta Sofia Greco. «Las casas pobres se convierten en tesoros, con paciencia y respeto»." },
    ],
    words: [
      { it: "il sasso / i sassi", es: "el sasso / los sassi", note: "aquí: casas excavadas, no piedras sueltas" },
      { it: "la roccia", es: "la roca" },
      { it: "il vicolo / i vicoli", es: "el callejón / los callejones" },
      { it: "il tetto", es: "el tejado, el techo" },
      { it: "la valle", es: "el valle" },
      { it: "la pazienza", es: "la paciencia" },
    ],
    questions: [
      { q: "¿Cómo se llaman las casas antiguas de Matera?", options: ["Le torri", "I sassi", "I palazzi", "Le grotte"], answer: 1, why: "«A Matera le case si chiamano “sassi”.»" },
      { q: "¿Desde cuándo están habitadas?", options: ["Da novemila anni", "Da cento anni", "Da dieci anni", "Da ieri"], answer: 0, why: "«Sono abitate da novemila anni.»" },
      { q: "¿Cómo eran los sassi hace tiempo y qué pasó después?", options: ["Case ricche, poi musei", "Case povere, poi tornano a vivere", "Alberghi da sempre", "Case vuote anche oggi"], answer: 1, why: "«Prima case povere, senza acqua e senza luce. Poi, piano piano, tornano a vivere.»" },
      { q: "¿Qué lección enseña Matera, según la arquitecta Greco?", options: ["Le case vecchie si abbandonano", "Il nuovo è sempre meglio", "Le pietre non servono", "Le case povere diventano tesori"], answer: 3, why: "«Le case povere diventano tesori, con pazienza e rispetto.»" },
    ],
    discuss: [
      { it: "C'è un posto antico come Matera vicino a casa tua? Raccontalo.", es: "¿Hay un lugar antiguo como Matera cerca de tu casa? Cuéntalo." },
      { it: "Meglio restaurare le case vecchie o costruirne di nuove? Perché?", es: "¿Mejor restaurar las casas viejas o construir unas nuevas? ¿Por qué?" },
    ],
  },

  /* ═══ A1 · 8 — Economia ═══ */
  {
    id: "news-a1-08", cat: "economia", level: "A1", place: "Parma", minutes: 2,
    title: "Il parmigiano viaggia nel mondo",
    titleEs: "El parmesano viaja por el mundo",
    lead: {
      it: "Il formaggio più famoso d'Italia attraversa i confini. Da Parma parte un viaggio lungo, in treno e in nave.",
      es: "El queso más famoso de Italia cruza las fronteras. De Parma parte un viaje largo, en tren y en barco.",
    },
    paragraphs: [
      { it: "A Parma il parmigiano reggiano matura due anni in grandi magazzini. Ogni forma pesa quaranta chili. Le forme si contano a migliaia.",
      es: "En Parma el parmigiano reggiano madura dos años en grandes almacenes. Cada forma pesa cuarenta kilos. Las formas se cuentan por miles." },
      { it: "Ora il formaggio viaggia. Parte per la Francia, la Germania, gli Stati Uniti e anche il Giappone. Le vendite crescono ogni anno.",
      es: "Ahora el queso viaja. Parte hacia Francia, Alemania, Estados Unidos y también Japón. Las ventas crecen cada año." },
      { it: "Il lavoro comincia all'alba, in cascina. I casari controllano il latte e il sale. Poi il formaggio riposa, con pazienza.",
      es: "El trabajo empieza al alba, en la granja. Los queseros controlan la leche y la sal. Luego el queso descansa, con paciencia." },
      { it: "«Il segreto è il tempo», dice il casaro Bruno Fontana. «Il formaggio buono non ha fretta, come il vino».",
      es: "«El secreto es el tiempo», dice el quesero Bruno Fontana. «El buen queso no tiene prisa, como el vino»." },
    ],
    words: [
      { it: "il formaggio", es: "el queso" },
      { it: "la forma", es: "la forma (rueda de queso)", note: "la forma intera del parmigiano" },
      { it: "il casaro", es: "el quesero (maestro del queso)" },
      { it: "il latte", es: "la leche", note: "masculino en italiano: il latte" },
      { it: "l'alba", es: "el alba", note: "all'alba = al amanecer" },
      { it: "la fretta", es: "las prisas", note: "di fretta = con prisa" },
    ],
    questions: [
      { q: "¿Cuánto tiempo madura el parmigiano y cuánto pesa cada forma?", options: ["Due mesi, quattro chili", "Due anni, quaranta chili", "Due settimane, quaranta chili", "Dieci anni, quattro chili"], answer: 1, why: "«Il parmigiano reggiano matura due anni» y «ogni forma pesa quaranta chili»." },
      { q: "¿A qué países viaja el queso?", options: ["Solo in Francia", "Francia, Germania, Stati Uniti e Giappone", "Solo in Germania", "Nessun paese"], answer: 1, why: "«Parte per la Francia, la Germania, gli Stati Uniti e anche il Giappone.»" },
      { q: "¿Cuándo empieza el trabajo del casaro?", options: ["A mezzanotte", "Il sabato", "All'alba, in cascina", "Dopo cena"], answer: 2, why: "«Il lavoro comincia all'alba, in cascina.»" },
      { q: "¿Cuál es el secreto del parmesano, según Bruno Fontana?", options: ["Il prezzo alto", "La pubblicità", "Il latte straniero", "Il tempo: il formaggio buono non ha fretta"], answer: 3, why: "«Il segreto è il tempo. Il formaggio buono non ha fretta, come il vino.»" },
    ],
    discuss: [
      { it: "Quali prodotti tipici del tuo paese viaggiano nel mondo? Fai un esempio.", es: "¿Qué productos típicos de tu país viajan por el mundo? Pon un ejemplo." },
      { it: "Secondo te, val la pena pagare di più per un prodotto lento?", es: "Según tú, ¿vale la pena pagar más por un producto lento?" },
    ],
  },

  /* ═══ A1 · 9 — Sport ═══ */
  {
    id: "news-a1-09", cat: "sport", level: "A1", place: "Cortina d'Ampezzo", minutes: 2,
    title: "A Cortina i bambini imparano a sciare",
    titleEs: "En Cortina los niños aprenden a esquiar",
    lead: {
      it: "Sulle Dolomiti la scuola di sci apre le piste ai più piccoli. Lo sport invernale, a Cortina, comincia da bambini.",
      es: "En los Dolomitas la escuela de esquí abre sus pistas a los más pequeños. El deporte de invierno, en Cortina, empieza de niños.",
    },
    paragraphs: [
      { it: "A Cortina d'Ampezzo, sulle Dolomiti, la neve arriva presto. Le piste bianche aspettano gli sciatori. La scuola di sci apre le porte ai bambini.",
      es: "En Cortina d'Ampezzo, en los Dolomitas, la nieve llega pronto. Las pistas blancas esperan a los esquiadores. La escuela de esquí abre las puertas a los niños." },
      { it: "I maestri insegnano la posizione giusta: ginocchia piegate, occhi avanti. Il primo giorno si cade spesso. Poi si ride e si riprova.",
      es: "Los maestros enseñan la posición correcta: rodillas dobladas, ojos al frente. El primer día se cae a menudo. Luego se ríe y se vuelve a probar." },
      { it: "«Lo sci insegna l'equilibrio», dice la maestra Chiara Bonaldi. «La montagna premia chi impara con calma».",
      es: "«El esquí enseña el equilibrio», dice la maestra Chiara Bonaldi. «La montaña premia a quien aprende con calma»." },
      { it: "Il sabato i genitori guardano dal bordo della pista. Alla fine tutti bevono una cioccolata calda. Il freddo, oggi, è un amico.",
      es: "El sábado los padres miran desde el borde de la pista. Al final todos beben un chocolate caliente. El frío, hoy, es un amigo." },
    ],
    words: [
      { it: "la neve", es: "la nieve" },
      { it: "la pista / le piste", es: "la pista / las pistas" },
      { it: "il maestro / i maestri", es: "el maestro / los maestros", note: "maestro di sci: monitor de esquí" },
      { it: "il ginocchio / le ginocchia", es: "la rodilla / las rodillas", note: "singular masculino, plural femenino: irregular" },
      { it: "lo sciatore / gli sciatori", es: "el esquiador / los esquiadores" },
      { it: "la cioccolata calda", es: "el chocolate caliente" },
    ],
    questions: [
      { q: "¿Dónde está Cortina d'Ampezzo?", options: ["In Sicilia", "In pianura", "Sull'Appennino", "Sulle Dolomiti"], answer: 3, why: "«A Cortina d'Ampezzo, sulle Dolomiti, la neve arriva presto.»" },
      { q: "¿Qué enseñan los maestros de esquí?", options: ["La posizione giusta: ginocchia piegate, occhi avanti", "La storia delle Dolomiti", "La corsa", "Il nuoto"], answer: 0, why: "«I maestri insegnano la posizione giusta: ginocchia piegate, occhi avanti.»" },
      { q: "¿Qué pasa el primer día de esquí?", options: ["Non si cade mai", "Si parte subito in pista nera", "Si cade spesso, poi si ride e si riprova", "Si torna a casa"], answer: 2, why: "«Il primo giorno si cade spesso. Poi si ride e si riprova.»" },
      { q: "¿Qué enseña el esquí, según la maestra Bonaldi?", options: ["L'equilibrio: la montagna premia chi impara con calma", "La velocità", "Solo la competizione", "Il conto in banca"], answer: 0, why: "«Lo sci insegna l'equilibrio. La montagna premia chi impara con calma.»" },
    ],
    discuss: [
      { it: "Fai uno sport d'inverno o d'estate? Quale preferisci?", es: "¿Haces un deporte de invierno o de verano? ¿Cuál prefieres?" },
      { it: "Per i bambini è meglio la montagna o il mare? Perché?", es: "¿Para los niños es mejor la montaña o el mar? ¿Por qué?" },
    ],
  },

  /* ═══ A1 · 10 — Scienza ═══ */
  {
    id: "news-a1-10", cat: "scienza", level: "A1", place: "Trieste", minutes: 2,
    title: "A Trieste si studia il mare",
    titleEs: "En Trieste se estudia el mar",
    lead: {
      it: "A Trieste, davanti all'Adriatico, i ricercatori guardano il mare ogni giorno. Piccoli animali, grandi domande.",
      es: "En Trieste, frente al Adriático, los investigadores miran el mar cada día. Pequeños animales, grandes preguntas.",
    },
    paragraphs: [
      { it: "A Trieste c'è un grande istituto di biologia marina. I ricercatori controllano l'acqua dell'Adriatico: la temperatura, il sale, la luce.",
      es: "En Trieste hay un gran instituto de biología marina. Los investigadores controlan el agua del Adriático: la temperatura, la sal, la luz." },
      { it: "Studiano anche animali strani, come la medusa. La medusa naviga con la corrente e cambia casa quando il mare cambia.",
      es: "Estudian también animales extraños, como la medusa. La medusa navega con la corriente y cambia de casa cuando el mar cambia." },
      { it: "«Il mare racconta il clima», dice la biologa Francesca Vitale. «Ascoltiamo con i nostri strumenti, come si ascolta un amico».",
      es: "«El mar cuenta el clima», dice la bióloga Francesca Vitale. «Escuchamos con nuestros instrumentos, como se escucha a un amigo»." },
      { it: "I dati viaggiano fino alle scuole: gli studenti seguono il mare dalla classe. La scienza, così, diventa un gioco di squadra.",
      es: "Los datos viajan hasta las escuelas: los estudiantes siguen el mar desde el aula. La ciencia, así, se convierte en un juego de equipo." },
    ],
    words: [
      { it: "il ricercatore / i ricercatori", es: "el investigador / los investigadores" },
      { it: "la medusa", es: "la medusa (medusa)" },
      { it: "la corrente", es: "la corriente" },
      { it: "il sale", es: "la sal", note: "masculino en italiano: il sale" },
      { it: "lo strumento / gli strumenti", es: "el instrumento / los instrumentos" },
      { it: "il dato / i dati", es: "el dato / los datos" },
    ],
    questions: [
      { q: "¿Qué controlan los investigadores de Trieste en el agua?", options: ["La temperatura, il sale e la luce", "Solo i pesci", "Il traffico delle barche", "Solo le meduse"], answer: 0, why: "«I ricercatori controllano l'acqua dell'Adriatico: la temperatura, il sale, la luce.»" },
      { q: "¿Cómo se mueve la medusa?", options: ["Con la coda", "Con le ali", "Con la corrente", "A remi"], answer: 2, why: "«La medusa naviga con la corrente e cambia casa quando il mare cambia.»" },
      { q: "¿Qué cuenta el mar, según la bióloga Vitale?", options: ["Le ricette di pesce", "Il clima", "La storia d'Italia", "Il futuro dei bambini"], answer: 1, why: "«Il mare racconta il clima»: se escucha con los instrumentos." },
      { q: "¿Adónde viajan los datos del instituto?", options: ["In banca", "Alle scuole: gli studenti seguono il mare dalla classe", "In farmacia", "Non viaggiano"], answer: 1, why: "«I dati viaggiano fino alle scuole: gli studenti seguono il mare dalla classe.»" },
    ],
    discuss: [
      { it: "Il mare o la montagna: dove ti rilassi meglio? Perché?", es: "¿El mar o la montaña? ¿Dónde te relajas mejor? ¿Por qué?" },
      { it: "Nella tua scuola si fa scienza con dati veri? Racconta.", es: "¿En tu escuela se hace ciencia con datos reales? Cuenta." },
    ],
  },

  /* ═══ A1 · 11 — Ambiente ═══ */
  {
    id: "news-a1-11", cat: "ambiente", level: "A1", place: "Genova", minutes: 2,
    title: "La plastica vecchia diventa una panchina",
    titleEs: "El plástico viejo se convierte en un banco",
    lead: {
      it: "A Genova la plastica raccolta non finisce nella spazzatura. Torna in città sotto un'altra forma: una panchina, un vaso.",
      es: "En Génova el plástico recogido no acaba en la basura. Vuelve a la ciudad con otra forma: un banco, una jardinera.",
    },
    paragraphs: [
      { it: "A Genova la raccolta differenziata funziona bene. I cittadini separano la plastica, il vetro, la carta. Il porto e i vicoli si sporcano meno.",
      es: "En Génova la recogida selectiva funciona bien. Los vecinos separan el plástico, el vidrio, el papel. El puerto y los callejones se ensucian menos." },
      { it: "La plastica raccolta diventa materiale nuovo: panchine per i parchi, vasi per i fiori, giochi per i bambini.",
      es: "El plástico recogido se convierte en material nuevo: bancos para los parques, jardineras para las flores, juegos para los niños." },
      { it: "«Piccoli gesti, grandi risultati», dice l'ingegnere ambientale Pietro Salvi. «Una panchina parla di futuro».",
      es: "«Pequeños gestos, grandes resultados», dice el ingeniero ambiental Pietro Salvi. «Un banco habla de futuro»." },
      { it: "Le scuole visitano il centro di riciclaggio e guardano le macchine. I bambini tornano a casa e spiegano le regole ai genitori.",
      es: "Las escuelas visitan el centro de reciclaje y miran las máquinas. Los niños vuelven a casa y explican las reglas a los padres." },
    ],
    words: [
      { it: "la raccolta differenziata", es: "la recogida selectiva" },
      { it: "la panchina / le panchine", es: "el banco / los bancos (de parque)" },
      { it: "il vetro", es: "el vidrio" },
      { it: "la carta", es: "el papel", note: "aquí papel, no carta de jugar" },
      { it: "il riciclaggio", es: "el reciclaje" },
      { it: "il gesto / i gesti", es: "el gesto / los gestos" },
    ],
    questions: [
      { q: "¿Qué separan los vecinos de Génova?", options: ["Solo il vetro", "La plastica, il vetro e la carta", "Solo la carta", "Niente"], answer: 1, why: "«I cittadini separano la plastica, il vetro, la carta.»" },
      { q: "¿En qué se convierte el plástico recogido?", options: ["Panchine, vasi e giochi", "Solo sacchi nuovi", "Bottiglie di vetro", "Niente"], answer: 0, why: "«La plastica raccolta diventa materiale nuovo: panchine, vasi, giochi.»" },
      { q: "¿Quién enseña las reglas del reciclaje en casa?", options: ["I professori", "I vicini", "I nonni", "I bambini, dopo la visita al centro"], answer: 3, why: "«I bambini tornano a casa e spiegano le regole ai genitori.»" },
      { q: "¿Qué significa «una panchina parla di futuro»?", options: ["Che le panchine parlano", "Che il riciclo è un piccolo gesto con grandi risultati", "Che il futuro è di legno", "Che le panchine costano care"], answer: 1, why: "«Piccoli gesti, grandi risultati»: el reciclaje ya cuenta una historia de futuro." },
    ],
    discuss: [
      { it: "Fai la raccolta differenziata a casa tua? Con quali regole?", es: "¿Haces reciclaje separado en tu casa? ¿Con qué reglas?" },
      { it: "Che cosa ricicli con più facilità: carta, vetro o plastica?", es: "¿Qué reciclas con más facilidad: papel, vidrio o plástico?" },
    ],
  },

  /* ═══ A1 · 12 — Società ═══ */
  {
    id: "news-a1-12", cat: "societa", level: "A1", place: "Palermo", minutes: 2,
    title: "A Palermo il mercato apre all'alba",
    titleEs: "En Palermo el mercado abre al alba",
    lead: {
      it: "A Palermo i mercati sono piazze vive. Si compra il pesce, si chiacchiera, si impara una parola nuova.",
      es: "En Palermo los mercados son plazas vivas. Se compra pescado, se charla, se aprende una palabra nueva.",
    },
    paragraphs: [
      { it: "A Palermo i mercati storici aprono alle cinque del mattino. I venditori gridano il nome della merce: pesce fresco, arance, olive.",
      es: "En Palermo los mercados históricos abren a las cinco de la mañana. Los vendedores gritan el nombre de la mercancía: pescado fresco, naranjas, aceitunas." },
      { it: "Ballarò è il mercato più famoso. Qui i turisti chiedono il prezzo e imparano il dialetto. I palermitani rispondono con un sorriso.",
      es: "Ballarò es el mercado más famoso. Aquí los turistas preguntan el precio y aprenden el dialecto. Los palermitanos responden con una sonrisa." },
      { it: "«Il mercato è la scuola della città», dice l'antropologa Rosa Terranova. «Qui la lingua si impara cantando».",
      es: "«El mercado es la escuela de la ciudad», dice la antropóloga Rosa Terranova. «Aquí la lengua se aprende cantando»." },
      { it: "A mezzogiorno arriva l'ora del cibo di strada: panelle e crocchè. La sera il quartiere dorme, ma sogna già domani.",
      es: "Al mediodía llega la hora de la comida callejera: panelle y crocchè. Por la noche el barrio duerme, pero ya sueña el mañana." },
    ],
    words: [
      { it: "il mercato", es: "el mercado" },
      { it: "il venditore / i venditori", es: "el vendedor / los vendedores" },
      { it: "la merce", es: "la mercancía" },
      { it: "il dialetto", es: "el dialecto" },
      { it: "il quartiere", es: "el barrio" },
      { it: "la panella / le panelle", es: "las panelle (buñuelos de garbanzo)", note: "street food palermitano" },
    ],
    questions: [
      { q: "¿A qué hora abren los mercados históricos de Palermo?", options: ["Alle cinque del mattino", "Alle otto di sera", "A mezzanotte", "Dopo pranzo"], answer: 0, why: "«I mercati storici aprono alle cinque del mattino.»" },
      { q: "¿Cuál es el mercado más famoso?", options: ["Il Rialto", "Porta Portese", "Ballarò", "Il mercato centrale"], answer: 2, why: "«Ballarò è il mercato più famoso.»" },
      { q: "¿Qué aprenden los turistas en Ballarò?", options: ["A nuotare", "Il prezzo delle cose e il dialetto", "Le canzoni", "A cucinare"], answer: 1, why: "«I turisti chiedono il prezzo e imparano il dialetto.»" },
      { q: "¿Por qué el mercado es la escuela de la ciudad, según la antropóloga?", options: ["Perché ci sono i professori", "Perché vende libri", "Perché è chiuso", "Perché la lingua si impara cantando"], answer: 3, why: "«Il mercato è la scuola della città. Qui la lingua si impara cantando.»" },
    ],
    discuss: [
      { it: "Com'è il mercato della tua città? Colori, voci, odori?", es: "¿Cómo es el mercado de tu ciudad? ¿Colores, voces, olores?" },
      { it: "I mercati restano o scompaiono, secondo te? Perché?", es: "¿Los mercados quedan o desaparecen, según tú? ¿Por qué?" },
    ],
  },

  /* ═══ A1 · 13 — Tecnologia ═══ */
  {
    id: "news-a1-13", cat: "tecnologia", level: "A1", place: "Bari", minutes: 2,
    title: "I nonni di Bari imparano lo smartphone",
    titleEs: "Los abuelos de Bari aprenden el smartphone",
    lead: {
      it: "A Bari gli studenti insegnano il telefono ai nonni. Videochiamate, foto, messaggi: nessuno resta indietro.",
      es: "En Bari los estudiantes enseñan el teléfono a los abuelos. Videollamadas, fotos, mensajes: nadie se queda atrás.",
    },
    paragraphs: [
      { it: "A Bari nasce un corso speciale: «Lo smartphone per tutti». Gli studenti delle superiori insegnano il telefono agli anziani, gratis.",
      es: "En Bari nace un curso especial: «El smartphone para todos». Los estudiantes de secundaria enseñan el teléfono a los mayores, gratis." },
      { it: "Si impara a fare le videochiamate e a mandare le foto. I nonni parlano con i nipoti lontani, a Milano o a Londra.",
      es: "Se aprende a hacer videollamadas y a enviar fotos. Los abuelos hablan con los nietos lejanos, en Milán o en Londres." },
      { it: "«Il telefono è un ponte», dice la professoressa Anna Loconsole. «La distanza resta, ma la voce arriva subito».",
      es: "«El teléfono es un puente», dice la profesora Anna Loconsole. «La distancia se queda, pero la voz llega enseguida»." },
      { it: "Ora i nonni scrivono nel gruppo di famiglia. Qualche volta sbagliano tasto e mandano baci a tutti. Nessuno si lamenta.",
      es: "Ahora los abuelos escriben en el grupo de familia. Alguna vez se equivocan de tecla y mandan besos a todos. Nadie se queja." },
    ],
    words: [
      { it: "lo smartphone", es: "el smartphone", note: "se dice también: il telefonino" },
      { it: "la videochiamata / le videochiamate", es: "la videollamada / las videollamadas" },
      { it: "l'anziano / gli anziani", es: "el mayor / los mayores" },
      { it: "il nipote / i nipoti", es: "el nieto / los nietos", note: "nipote significa nieto y también sobrino" },
      { it: "il corso", es: "el curso" },
      { it: "gratis", es: "gratis", note: "invariable: igual en singular y plural" },
    ],
    questions: [
      { q: "¿Cómo se llama el curso de Bari?", options: ["«Il computer per pochi»", "«Lo smartphone per tutti»", "«Il telefono antico»", "«La scuola dei nonni»"], answer: 1, why: "«Nasce un corso speciale: “Lo smartphone per tutti”.»" },
      { q: "¿Quién enseña el teléfono a los mayores?", options: ["Gli studenti delle superiori, gratis", "I professori", "I negozianti", "I medici"], answer: 0, why: "«Gli studenti delle superiori insegnano il telefono agli anziani, gratis.»" },
      { q: "¿Con quién hablan los abuelos por videollamada?", options: ["Con il barista", "Con i vicini", "Con i nipoti lontani, a Milano o a Londra", "Con nessuno"], answer: 2, why: "«I nonni parlano con i nipoti lontani, a Milano o a Londra.»" },
      { q: "¿Qué es el teléfono para la profesora Loconsole?", options: ["Un gioco", "Un problema", "Una macchina fotografica", "Un ponte: la distanza resta, ma la voce arriva subito"], answer: 3, why: "«Il telefono è un ponte. La distanza resta, ma la voce arriva subito.»" },
    ],
    discuss: [
      { it: "Chi ti insegna le cose nuove del telefono? E tu insegni a qualcuno?", es: "¿Quién te enseña las cosas nuevas del teléfono? ¿Y tú enseñas a alguien?" },
      { it: "Le videochiamate avvicinano o allontanano le persone? Perché?", es: "¿Las videollamadas acercan o alejan a las personas? ¿Por qué?" },
    ],
  },

  /* ═══ A1 · 14 — Cultura ═══ */
  {
    id: "news-a1-14", cat: "cultura", level: "A1", place: "Siena", minutes: 2,
    title: "Il Palio di Siena: una festa di piazza",
    titleEs: "El Palio de Siena: una fiesta de plaza",
    lead: {
      it: "A Siena, due volte all'anno, la piazza del Campo diventa una pista di terra. Il Palio è una festa antica e piena di colori.",
      es: "En Siena, dos veces al año, la piazza del Campo se convierte en una pista de tierra. El Palio es una fiesta antigua llena de colores.",
    },
    paragraphs: [
      { it: "Il Palio di Siena è una corsa di cavalli, nella piazza del Campo. Si corre da secoli, il due luglio e il sedici agosto.",
      es: "El Palio de Siena es una carrera de caballos, en la piazza del Campo. Se corre desde hace siglos, el dos de julio y el dieciséis de agosto." },
      { it: "Ogni quartiere, la «contrada», ha il proprio stendardo e i propri colori. Prima della corsa c'è una cena enorme in mezzo alla strada.",
      es: "Cada barrio, la «contrada», tiene su estandarte y sus colores. Antes de la carrera hay una cena enorme en medio de la calle." },
      { it: "«Il Palio è la nostra storia viva», dice lo storico Gabriele Martini. «Le contrade sono diciassette: come diciassette famiglie».",
      es: "«El Palio es nuestra historia viva», dice el historiador Gabriele Martini. «Las contradas son diecisiete: como diecisiete familias»." },
      { it: "La corsa dura pochi minuti, ma la festa dura giorni. Chi vince porta il drappo a casa e canta fino a tarda notte.",
      es: "La carrera dura pocos minutos, pero la fiesta dura días. Quien gana se lleva el palio a casa y canta hasta altas horas de la noche." },
    ],
    words: [
      { it: "la corsa", es: "la carrera" },
      { it: "il cavallo / i cavalli", es: "el caballo / los caballos" },
      { it: "la contrada", es: "la contrada (barrio de Siena)", note: "le contrade: i diciassette quartieri" },
      { it: "lo stendardo", es: "el estandarte" },
      { it: "il drappo", es: "el palio (tela del premio)", note: "drappo = la tela che si vince" },
      { it: "la festa", es: "la fiesta" },
    ],
    questions: [
      { q: "¿Qué es el Palio y dónde se corre?", options: ["Una corsa di cavalli, nella piazza del Campo", "Una corsa di auto", "Una partita di calcio", "Una gara di bici"], answer: 0, why: "«Il Palio di Siena è una corsa di cavalli, nella piazza del Campo.»" },
      { q: "¿Cuándo se corre?", options: ["Il due luglio e il sedici agosto", "Ogni domenica", "Una volta al mese", "Solo a Natale"], answer: 0, why: "«Si corre da secoli, il due luglio e il sedici agosto.»" },
      { q: "¿Qué hay antes de la carrera?", options: ["Un film in piazza", "Una cena enorme in mezzo alla strada", "Una processione di auto", "Niente di speciale"], answer: 1, why: "«Prima della corsa c'è una cena enorme in mezzo alla strada.»" },
      { q: "¿Cuánto duran la carrera y la fiesta?", options: ["La corsa dura giorni", "La corsa dura pochi minuti, la festa dura giorni", "Tutto dura un'ora", "La festa dura dieci minuti"], answer: 1, why: "«La corsa dura pochi minuti, ma la festa dura giorni.»" },
    ],
    discuss: [
      { it: "C'è una festa di piazza nella tua città? Come si chiama?", es: "¿Hay una fiesta de plaza en tu ciudad? ¿Cómo se llama?" },
      { it: "Le feste antiche uniscono la gente o la dividono? Perché?", es: "¿Las fiestas antiguas unen a la gente o la dividen? ¿Por qué?" },
    ],
  },

  /* ═══ A1 · 15 — Sport ═══ */
  {
    id: "news-a1-15", cat: "sport", level: "A1", place: "Ferrara", minutes: 2,
    title: "A Ferrara si va a scuola in bicicletta",
    titleEs: "En Ferrara se va a la escuela en bicicleta",
    lead: {
      it: "A Ferrara la bicicletta è un mezzo normale, come le scarpe. Le strade sono piatte e le piste protette.",
      es: "En Ferrara la bicicleta es un medio normal, como los zapatos. Las calles son llanas y los carriles protegidos.",
    },
    paragraphs: [
      { it: "Ferrara è una città piatta, con le mura antiche intorno. Le piste ciclabili sono larghe e protette. I bambini ci vanno a scuola con i genitori.",
      es: "Ferrara es una ciudad llana, con las murallas antiguas alrededor. Los carriles bici son anchos y protegidos. Los niños van en ellos a la escuela con los padres." },
      { it: "Il Comune conta più di centomila bici in città. La domenica le mura diventano una pista: si pedala in famiglia, piano piano.",
      es: "El ayuntamiento cuenta más de cien mil bicis en la ciudad. El domingo las murallas se convierten en una pista: se pedalea en familia, sin prisa." },
      { it: "«La bici rende la città più gentile», dice l'urbanista Carlo Maffei. «Le auto fanno rumore, le ruote no».",
      es: "«La bici hace la ciudad más amable», dice el urbanista Carlo Maffei. «Los autos hacen ruido, las ruedas no»." },
      { it: "Adesso altre città copiano l'esempio di Ferrara. La scuola del futuro, si dice, arriva con due ruote e una campanella.",
      es: "Ahora otras ciudades copian el ejemplo de Ferrara. La escuela del futuro, se dice, llega con dos ruedas y una campanilla." },
    ],
    words: [
      { it: "la pista ciclabile / le piste ciclabili", es: "el carril bici / los carriles bici" },
      { it: "il muro / le mura", es: "el muro / las murallas", note: "mura: plural femenino de muro" },
      { it: "la bici", es: "la bicicleta" },
      { it: "la ruota / le ruote", es: "la rueda / las ruedas" },
      { it: "la campanella", es: "la campanilla", note: "la campanella: el timbre de la bici" },
      { it: "piatto / piatta", es: "llano / llana", note: "concordancia: città piatta" },
    ],
    questions: [
      { q: "¿Cómo es Ferrara y qué tiene alrededor?", options: ["Una città di montagna", "Una città di mare", "Una città piatta, con le mura antiche intorno", "Una città caotica"], answer: 2, why: "«Ferrara è una città piatta, con le mura antiche intorno.»" },
      { q: "¿Cuántas bicicletas cuenta el ayuntamiento?", options: ["Cento", "Diecimila", "Nessuna", "Più di centomila"], answer: 3, why: "«Il Comune conta più di centomila bici in città.»" },
      { q: "¿Qué pasa los domingos en las murallas?", options: ["Si pedala in famiglia, piano piano", "Si dorme", "C'è il mercato", "Si corre in auto"], answer: 0, why: "«La domenica le mura diventano una pista: si pedala in famiglia, piano piano.»" },
      { q: "¿Cómo se vuelve la ciudad gracias a la bici, según el urbanista Maffei?", options: ["Più ricca", "Più grande", "Più gentile: le auto fanno rumore, le ruote no", "Più veloce"], answer: 2, why: "«La bici rende la città più gentile. Le auto fanno rumore, le ruote no.»" },
    ],
    discuss: [
      { it: "Nella tua città si va a scuola in bici? È sicuro?", es: "¿En tu ciudad se va a la escuela en bici? ¿Es seguro?" },
      { it: "Preferisci la bici, i piedi o il bus? Perché?", es: "¿Prefieres la bici, ir a pie o el bus? ¿Por qué?" },
    ],
  },
];
