/* ── Notizie · datos A1 + A2 (v9.25) ──────────────────────────────────
   Noticias adaptadas al nivel, método Voice of America Learning English.
   Contenido 100% original con fines didácticos. Cuerpo: A1 ≈ 80 parole,
   A2 ≈ 130-150. Léxico controlado, presente (A1) / passato prossimo (A2). */

import type { NewsItem } from "./news";

export const NEWS_DATA_A: NewsItem[] = [

  /* ═══ A1 · 1 — Scienza ═══ */
  {
    id: "news-a1-01", cat: "scienza", level: "A1", place: "Roma", minutes: 2,
    title: "Due caffè al giorno: uno studio",
    titleEs: "Dos cafés al día: un estudio",
    lead: {
      it: "Uno studio italiano porta una buona notizia: il caffè, con moderazione, è amico del cuore.",
      es: "Un estudio italiano trae una buena noticia: el café, con moderación, es amigo del corazón.",
    },
    paragraphs: [
      { it: "Gli scienziati italiani hanno una buona notizia per i mattinieri. Il caffè può fare bene al cuore. Ma attenzione: la parola importante è moderazione.",
      es: "Los científicos italianos tienen una buena noticia para los madrugadores. El café puede hacerle bien al corazón. Pero atención: la palabra importante es moderación." },
      { it: "Lo studio dice: due tazzine al giorno vanno bene. Tre o quattro tazzine sono troppe. Il corpo ha bisogno di equilibrio.",
      es: "El estudio dice: dos tacitas al día están bien. Tres o cuatro tacitas son demasiadas. El cuerpo necesita equilibrio." },
      { it: "Il caffè dà energia e aiuta la concentrazione. Molti italiani lo bevono al bar, in piedi, in due minuti.",
      es: "El café da energía y ayuda a la concentración. Muchos italianos lo beben en el bar, de pie, en dos minutos." },
      { it: "Gli esperti ricordano una regola semplice: il caffè è un piacere, non una medicina. Il piacere, come sempre, vuole misura.",
      es: "Los expertos recuerdan una regla simple: el café es un placer, no una medicina. El placer, como siempre, quiere mesura." },
    ],
    words: [
      { it: "la tazzina", es: "tacita (de café)", note: "diminutivo de tazza" },
      { it: "la moderazione", es: "moderación" },
      { it: "lo studio", es: "el estudio (científico)" },
      { it: "il mattiniero", es: "madrugador (persona)" },
      { it: "la concentrazione", es: "concentración" },
      { it: "l'equilibrio", es: "equilibrio" },
    ],
    questions: [
      { q: "¿Cuántas tacitas al día dice el estudio?", options: ["Due", "Tre", "Quattro", "Nessuna"], answer: 0, why: "«Due tazzine al giorno vanno bene»: la medida justa es dos." },
      { q: "¿Cuál es la palabra importante del estudio?", options: ["La energia", "La moderazione", "Il bar", "Il piacere"], answer: 1, why: "El texto insiste: «la parola importante è moderazione»." },
      { q: "¿Cómo beben el café muchos italianos, según la noticia?", options: ["A casa, seduti", "Al bar, in piedi, in due minuti", "Al ristorante", "Mai"], answer: 1, why: "«Molti italiani lo bevono al bar, in piedi, in due minuti.»" },
      { q: "Para los expertos, el café es…", options: ["una medicina", "un piacere, non una medicina", "un problema", "un sport"], answer: 1, why: "«Il caffè è un piacere, non una medicina»: el placer quiere mesura." },
    ],
    discuss: [
      { it: "Quante tazzine di caffè bevi al giorno, davvero? Sii onesto!", es: "¿Cuántas tacitas de café tomas al día, de verdad? ¡Sé honesto!" },
      { it: "Nel tuo paese il caffè si beve al bar in piedi o al tavolo, con calma?", es: "En tu país el café se toma de pie en la barra o en la mesa, con calma?" },
    ],
  },

  /* ═══ A1 · 2 — Ambiente ═══ */
  {
    id: "news-a1-02", cat: "ambiente", level: "A1", place: "Bologna", minutes: 2,
    title: "Le api tornano in città",
    titleEs: "Las abejas vuelven a la ciudad",
    lead: {
      it: "Nelle città italiane le api hanno di nuovo casa. Un piccolo insetto diventa un grande simbolo.",
      es: "En las ciudades italianas las abejas tienen de nuevo casa. Un pequeño insecto se convierte en un gran símbolo.",
    },
    paragraphs: [
      { it: "A Bologna, come in altre città, nascono nuovi giardini. Nei giardini ci sono fiori per le api. Le api arrivano, lavorano e impollinano.",
      es: "En Bolonia, como en otras ciudades, nacen nuevos jardines. En los jardines hay flores para las abejas. Las abejas llegan, trabajan y polinizan." },
      { it: "Sui tetti di alcune scuole ci sono piccoli orti. Gli studenti coltivano pomodori e basilico. Le api visitano l'orto ogni mattina.",
      es: "En los techos de algunas escuelas hay pequeños huertos. Los estudiantes cultivan tomates y albahaca. Las abejas visitan el huerto cada mañana." },
      { it: "Le api sono importanti per la natura. Senza api non ci sono fiori e non c'è frutta. Gli scienziati parlano di «insetti preziosi».",
      es: "Las abejas son importantes para la naturaleza. Sin abejas no hay flores y no hay fruta. Los científicos hablan de «insectos preciosos»." },
      { it: "Le città ora hanno una nuova regola: meno veleno, più fiori. È una piccola rivoluzione silenziosa.",
      es: "Las ciudades tienen ahora una nueva regla: menos veneno, más flores. Es una pequeña revolución silenciosa." },
    ],
    words: [
      { it: "l'ape", es: "abeja", note: "plural: le api" },
      { it: "il tetto", es: "tejado, techo" },
      { it: "l'orto", es: "huerto" },
      { it: "impollinare", es: "polinizar" },
      { it: "il fiore", es: "flor" },
      { it: "il veleno", es: "veneno" },
    ],
    questions: [
      { q: "¿Qué hay en los techos de algunas escuelas?", options: ["Piccoli orti", "Grandi parcheggi", "Nessun giardino", "Un bar"], answer: 0, why: "«Sui tetti di alcune scuole ci sono piccoli orti.»" },
      { q: "¿Qué cultivan los estudiantes?", options: ["Pomodori e basilico", "Solo fiori", "Caffè", "Niente"], answer: 0, why: "«Gli studenti coltivano pomodori e basilico.»" },
      { q: "Sin abejas, según los científicos…", options: ["non ci sono fiori e non c'è frutta", "il caffè è amaro", "le città sono vuote", "non succede niente"], answer: 0, why: "«Senza api non ci sono fiori e non c'è frutta»: por eso son «insetti preziosi»." },
      { q: "¿Cuál es la nueva regla de las ciudades?", options: ["Meno fiori, più veleno", "Meno veleno, più fiori", "Più tetti, meno orti", "Nessuna regola"], answer: 1, why: "«Meno veleno, più fiori»: una piccola rivoluzione silenciosa." },
    ],
    discuss: [
      { it: "Ci sono api, giardini o orti nella tua città? Dove?", es: "¿Hay abejas, jardines o huertos en tu ciudad? ¿Dónde?" },
      { it: "Secondo te, la città del futuro è più verde o più grigia? Perché?", es: "Según tú, ¿la ciudad del futuro es más verde o más gris? ¿Por qué?" },
    ],
  },

  /* ═══ A1 · 3 — Società ═══ */
  {
    id: "news-a1-03", cat: "societa", level: "A1", place: "Napoli", minutes: 2,
    title: "La passeggiata: un'abitudine italiana",
    titleEs: "La passeggiata: una costumbre italiana",
    lead: {
      it: "Dopo cena, gli italiani escono di casa. Non vanno lontano: camminano, chiacchierano, prendono un gelato. È la passeggiata.",
      es: "Después de cenar, los italianos salen de casa. No van lejos: caminan, charlan, toman un helado. Es la passeggiata.",
    },
    paragraphs: [
      { it: "La sera, in molte città, le piazze si riempiono. Famiglie intere camminano insieme. I nonni raccontano storie, i bambini giocano.",
      es: "Por la noche, en muchas ciudades, las plazas se llenan. Familias enteras caminan juntas. Los abuelos cuentan historias, los niños juegan." },
      { it: "La passeggiata non è sport. È un momento sociale: si incontrano gli amici, si parla del giorno, del calcio, del tempo.",
      es: "La passeggiata no es deporte. Es un momento social: se encuentran los amigos, se habla del día, del fútbol, del clima." },
      { it: "D'estate la passeggiata è più lunga. Il gelato è quasi obbligatorio. «Prendiamo un gelato?» è la frase della serata.",
      es: "En verano la passeggiata es más larga. El helado es casi obligatorio. «¿Tomamos un helado?» es la frase de la velada." },
      { it: "I sociologi dicono: la passeggiata unisce le persone. Costo: zero. Valore: molto.",
      es: "Los sociólogos dicen: la passeggiata une a las personas. Costo: cero. Valor: mucho." },
    ],
    words: [
      { it: "la passeggiata", es: "paseo (costumbre italiana)" },
      { it: "la piazza", es: "plaza" },
      { it: "il nonno / la nonna", es: "abuelo / abuela" },
      { it: "chiacchierare", es: "charlar" },
      { it: "il gelato", es: "helado" },
      { it: "obbligatorio", es: "obligatorio" },
    ],
    questions: [
      { q: "¿Qué hacen los italianos después de cenar?", options: ["Dormono subito", "Escono di casa e camminano", "Guardano la TV", "Lavorano"], answer: 1, why: "«Dopo cena, gli italiani escono di casa»: caminan, charlan, toman un helado." },
      { q: "La passeggiata è…", options: ["uno sport", "un momento sociale", "un lavoro", "una corsa"], answer: 1, why: "«La passeggiata non è sport. È un momento sociale.»" },
      { q: "¿Cuál es la frase de la velada en verano?", options: ["«Prendiamo un gelato?»", "«Andiamo a dormire?»", "«Che freddo!»", "«Non ho tempo»"], answer: 0, why: "«Il gelato è quasi obbligatorio. “Prendiamo un gelato?” è la frase della serata.»" },
      { q: "Según los sociólogos, ¿cuál es el costo y el valor de la passeggiata?", options: ["Costo alto, valore basso", "Costo zero, valore molto", "Costo zero, valore zero", "Costo molto, valore molto"], answer: 1, why: "«Costo: zero. Valore: molto.»" },
    ],
    discuss: [
      { it: "Esiste una «passeggiata» anche nella tua città? A che ora? Dove?", es: "¿Existe una «passeggiata» también en tu ciudad? ¿A qué hora? ¿Dónde?" },
      { it: "Preferisci la sera tranquilla in casa o la passeggiata con gli amici? Perché?", es: "¿Prefieres la noche tranquila en casa o la passeggiata con amigos? ¿Por qué?" },
    ],
  },

  /* ═══ A2 · 1 — Storia ═══ */
  {
    id: "news-a2-01", cat: "storia", level: "A2", place: "Pompei", minutes: 3,
    title: "Pompei: la città che racconta",
    titleEs: "Pompeya: la ciudad que cuenta",
    lead: {
      it: "A Pompei gli archeologi trovano sempre qualcosa di nuovo. La città sepolta parla ancora, dopo duemila anni.",
      es: "En Pompeya los arqueólogos encuentran siempre algo nuevo. La ciudad sepultada habla todavía, después de dos mil años.",
    },
    paragraphs: [
      { it: "Quest'anno a Pompei gli archeologi hanno scoperto una nuova stanza. Sul muro ci sono colori vivi: blu, rosso, oro. Gli esperti parlano di «piccolo gioiello».",
      es: "Este año en Pompeya los arqueólogos han descubierto una nueva habitación. En la pared hay colores vivos: azul, rojo, oro. Los expertos hablan de «pequeña joya»." },
      { it: "Pompei è morta nell'anno 79 dopo Cristo, sotto la cenere del Vesuvio. La cenere ha protetto la città come un'enorme custodia.",
      es: "Pompeya murió en el año 79 después de Cristo, bajo la ceniza del Vesubio. La ceniza ha protegido la ciudad como una enorme funda." },
      { it: "Oggi Pompei è un museo a cielo aperto. Milioni di turisti camminano nelle strade antiche e guardano le case, i negozi, i messaggi sui muri.",
      es: "Hoy Pompeya es un museo a cielo abierto. Millones de turistas caminan por las calles antiguas y miran las casas, las tiendas, los mensajes en las paredes." },
      { it: "Gli studiosi raccontano una cosa curiosa: a Pompei c'era pubblicità sui muri. C'erano scritte per le elezioni e scritte per il pane.",
      es: "Los estudiosos cuentan algo curioso: en Pompeya había publicidad en las paredes. Había inscripciones para las elecciones e inscripciones para el pan." },
      { it: "La lezione di Pompei è semplice: la vita quotidiana è più interessante della storia dei re.",
      es: "La lección de Pompeya es simple: la vida cotidiana es más interesante que la historia de los reyes." },
    ],
    words: [
      { it: "la scoperta", es: "descubrimiento" },
      { it: "la cenere", es: "ceniza" },
      { it: "sepolto", es: "sepultado" },
      { it: "a cielo aperto", es: "a cielo abierto" },
      { it: "la scritta", es: "inscripción (escrita en un muro)" },
      { it: "quotidiano", es: "cotidiano, de cada día" },
      { it: "il muro", es: "pared, muro" },
    ],
    questions: [
      { q: "¿Qué han descubierto este año los arqueólogos?", options: ["Una nuova stanza con colori vivi", "Un tesoro d'oro", "Una strada moderna", "Niente"], answer: 0, why: "«Hanno scoperto una nuova stanza. Sul muro ci sono colori vivi: blu, rosso, oro.»" },
      { q: "¿Qué protegió la ciudad como una enorme funda?", options: ["Il Vesuvio", "La cenere", "Il mare", "Un muro"], answer: 1, why: "«La cenere ha protetto la città come un'enorme custodia.»" },
      { q: "¿Qué había en las paredes de Pompeya, según los estudiosos?", options: ["Solo nomi", "Scritte per le elezioni e per il pane", "Fotografie", "Nessuna scritta"], answer: 1, why: "«C'era pubblicità sui muri: scritte per le elezioni e scritte per il pane.»" },
      { q: "¿Cuál es la lección de Pompeya?", options: ["I re sono più interessanti", "La vita quotidiana è più interessante della storia dei re", "I turisti fanno rumore", "La cenere è bella"], answer: 1, why: "«La vita quotidiana è più interessante della storia dei re.»" },
      { q: "«Museo a cielo aperto» significa…", options: ["un museo con il tetto", "un museo senza tetto, all'aperto", "un museo chiuso", "un cinema"], answer: 1, why: "A cielo aperto = al aire libre, sin techo: se dice de yacimientos como Pompeya." },
    ],
    discuss: [
      { it: "Hai mai visitato Pompei o un'altra città antica? Com'è stata?", es: "¿Has visitado alguna vez Pompeya u otra ciudad antigua? ¿Cómo fue?" },
      { it: "Se potessi salvare una sola cosa di oggi per il futuro, cosa sceglieresti? Perché?", es: "Si pudieras guardar una sola cosa de hoy para el futuro, ¿qué elegirías? ¿Por qué?" },
    ],
  },

  /* ═══ A2 · 2 — Tecnologia ═══ */
  {
    id: "news-a2-02", cat: "tecnologia", level: "A2", place: "Milano", minutes: 3,
    title: "La bici elettrica cambia la città",
    titleEs: "La bici eléctrica cambia la ciudad",
    lead: {
      it: "Sempre più italiani scelgono la bicicletta elettrica. Meno traffico, più salute, qualche litigio con i marciapiedi.",
      es: "Cada vez más italianos eligen la bicicleta eléctrica. Menos tráfico, más salud, alguna pelea con las aceras.",
    },
    paragraphs: [
      { it: "Negli ultimi anni le vendite delle bici elettriche sono cresciute in tutta Italia. In città ora si vedono bici silenziose, con batterie piccole e potenti.",
      es: "En los últimos años las ventas de las bicis eléctricas han crecido en toda Italia. En las ciudades ahora se ven bicis silenciosas, con baterías pequeñas y potentes." },
      { it: "I vantaggi sono chiari: niente benzina, niente parcheggio, zero fumo. Per le distanze corte la bici elettrica è spesso più veloce dell'auto.",
      es: "Las ventajas son claras: nada de gasolina, nada de aparcamiento, cero humo. Para las distancias cortas la bici eléctrica es a menudo más rápida que el auto." },
      { it: "Ci sono anche problemi. Le piste ciclabili non bastano. Qualche ciclista va troppo veloce sul marciapiede e i pedoni si arrabbiano.",
      es: "También hay problemas. Los carriles bici no bastan. Algún ciclista va demasiado rápido por la acera y los peatones se enojan." },
      { it: "Le città rispondono: a Milano nascono piste nuove, più larghe e più sicure. Il sindaco parla di «rivoluzione tranquilla».",
      es: "Las ciudades responden: en Milán nacen carriles nuevos, más anchos y más seguros. La alcaldía habla de «revolución tranquila»." },
      { it: "Gli esperti di mobilità hanno già deciso: il futuro urbano ha due ruote e una batteria.",
      es: "Los expertos de movilidad ya han decidido: el futuro urbano tiene dos ruedas y una batería." },
    ],
    words: [
      { it: "la pista ciclabile", es: "carril bici" },
      { it: "il marciapiede", es: "acera" },
      { it: "il pedone", es: "peatón" },
      { it: "la batteria", es: "batería" },
      { it: "la mobilità", es: "movilidad" },
      { it: "la vendita", es: "venta" },
      { it: "il sindaco", es: "alcalde" },
    ],
    questions: [
      { q: "¿Cómo son ahora las bicis eléctricas en las ciudades?", options: ["Rumorose e grandi", "Silenziose, con batterie piccole e potenti", "Lente", "Rare"], answer: 1, why: "«Si vedono bici silenziose, con batterie piccole e potenti.»" },
      { q: "¿Cuáles son las ventajas claras?", options: ["Benzina gratis", "Niente benzina, niente parcheggio, zero fumo", "Piste infinite", "Auto più veloci"], answer: 1, why: "«Niente benzina, niente parcheggio, zero fumo.»" },
      { q: "¿Por qué se enojan los peatones?", options: ["Per il fumo", "Perché qualche ciclista va troppo veloce sul marciapiede", "Per il rumore", "Per i prezzi"], answer: 1, why: "«Qualche ciclista va troppo veloce sul marciapiede e i pedoni si arrabbiano.»" },
      { q: "¿Qué dice el alcalde de Milán?", options: ["«Rivoluzione rumorosa»", "«Rivoluzione tranquilla»", "«Fine delle auto»", "«Niente bici»"], answer: 1, why: "Il sindaco parla di «rivoluzione tranquilla»: cambios seriosos sin ruido." },
      { q: "Según los expertos, el futuro urbano tiene…", options: ["Quattro ruote e un motore", "Due ruote e una batteria", "Solo i piedi", "Le auto a benzina"], answer: 1, why: "«Il futuro urbano ha due ruote e una batteria.»" },
    ],
    discuss: [
      { it: "Usi la bici in città? Elettrica o normale? Racconta.", es: "¿Usas la bici en la ciudad? ¿Eléctrica o normal? Cuenta." },
      { it: "Nella tua città le piste ciclabili sono buone? Cosa cambieresti?", es: "En tu ciudad los carriles bici son buenos? ¿Qué cambiarías?" },
    ],
  },

  /* ═══ A2 · 3 — Sport ═══ */
  {
    id: "news-a2-03", cat: "sport", level: "A2", place: "Torino", minutes: 3,
    title: "Gli italiani tornano a muoversi",
    titleEs: "Los italianos vuelven a moverse",
    lead: {
      it: "Palestre piene, parchi pieni, strade piene. Dopo anni di divano, l'Italia ha scoperto di nuovo il movimento.",
      es: "Gimnasios llenos, parques llenos, calles llenas. Después de años de sofá, Italia ha redescubierto el movimiento.",
    },
    paragraphs: [
      { it: "Secondo un'indagine recente, quasi sette italiani su dieci fanno attività fisica almeno una volta alla settimana. Dieci anni fa erano cinque.",
      es: "Según una encuesta reciente, casi siete italianos de cada diez hacen actividad física al menos una vez por semana. Hace diez años eran cinco." },
      { it: "Il modo più popolare resta la camminata: mezz'ora al giorno, passo svelto, auricolari nelle orecchie.",
      es: "El modo más popular sigue siendo la caminata: media hora al día, paso rápido, auriculares en los oídos." },
      { it: "I parchi cittadini al mattino sembrano palestre all'aperto: corsa, bicicletta, ginnastica in gruppo, gente che si saluta.",
      es: "Los parques urbanos por la mañana parecen gimnasios al aire libre: carrera, bicicleta, gimnasia en grupo, gente que se saluda." },
      { it: "I medici sono contenti: muoversi con regolarità fa bene al cuore, alla testa e all'umore.",
      es: "Los médicos están contentos: moverse con regularidad hace bien al corazón, a la cabeza y al humor." },
      { it: "Resta un problema: i giovani passano troppo tempo davanti agli schermi. La prossima sfida è convincerli a giocare all'aperto.",
      es: "Queda un problema: los jóvenes pasan demasiado tiempo frente a las pantallas. El próximo desafío es convencerlos de jugar al aire libre." },
    ],
    words: [
      { it: "l'indagine", es: "encuesta, investigación" },
      { it: "il passo svelto", es: "paso rápido" },
      { it: "l'umore", es: "humor, estado de ánimo" },
      { it: "lo schermo", es: "pantalla" },
      { it: "la sfida", es: "desafío, reto" },
      { it: "all'aperto", es: "al aire libre" },
    ],
    questions: [
      { q: "¿Cuántos italianos hacen actividad física al menos una vez por semana?", options: ["Cinque su dieci", "Quasi sette su dieci", "Due su dieci", "Tutti"], answer: 1, why: "«Quasi sette italiani su dieci fanno attività fisica almeno una volta alla settimana. Dieci anni fa erano cinque.»" },
      { q: "¿Cuál es el modo más popular?", options: ["La corsa", "La camminata", "Il nuoto", "Il calcio"], answer: 1, why: "«Il modo più popolare resta la camminata: mezz'ora al giorno, passo svelto.»" },
      { q: "¿Cómo parecen los parques por la mañana?", options: ["Palestre all'aperto", "Deserti", "Parcheggi", "Mercati"], answer: 0, why: "«I parchi cittadini al mattino sembrano palestre all'aperto.»" },
      { q: "¿Qué beneficia moverse con regularidad, según los médicos?", options: ["Solo le gambe", "Al cuore, alla testa e all'umore", "Solo il portafoglio", "Nulla"], answer: 1, why: "«Muoversi con regolarità fa bene al cuore, alla testa e all'umore.»" },
      { q: "¿Cuál es el problema que queda?", options: ["Le palestre sono chiuse", "I giovani passano troppo tempo davanti agli schermi", "I parchi costano", "I medici sono tristi"], answer: 1, why: "«Resta un problema: i giovani passano troppo tempo davanti agli schermi.»" },
    ],
    discuss: [
      { it: "Quanto ti muovi in una settimana normale? Onestamente!", es: "¿Cuánto te mueves en una semana normal? ¡Honestamente!" },
      { it: "Preferisci lo sport all'aperto o in palestra? Perché?", es: "¿Prefieres el deporte al aire libre o en gimnasio? ¿Por qué?" },
    ],
  },
];
