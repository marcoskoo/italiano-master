/* ── Notizie · ampliamento A2 (v9.39) ─────────────────────────────────
   12 noticias nuevas (news-a2-04 … news-a2-15): el nivel A2 pasa de 3
   a 15 noticias y cubre las 9 categorías. Método VOA, 100% original:
   5 párrafos, cuerpo 80-125 parole, presente + passato prossimo.      */

import type { NewsItem } from "./news";

export const NEWS_DATA_A2B: NewsItem[] = [

  /* ═══ A2 · 4 — Scienza ═══ */
  {
    id: "news-a2-04", cat: "scienza", level: "A2", place: "Trento", minutes: 3,
    title: "A Trento un modello per prevedere le frane",
    titleEs: "En Trento, un modelo para prever los derrumbes",
    lead: {
      it: "Le frane sono un pericolo antico per le montagne italiane. A Trento un gruppo di scienziati ha costruito un sistema che le prevede.",
      es: "Los derrumbes son un peligro antiguo de las montañas italianas. En Trento, un grupo de científicos ha construido un sistema que los prevé.",
    },
    paragraphs: [
      { it: "Le Dolomiti sono belle, ma fragili. Con la pioggia forte, qualche pendio si muove. A volte una frana ha distrutto strade e paesi.",
      es: "Los Dolomitas son hermosos, pero frágiles. Con la lluvia fuerte, alguna ladera se mueve. A veces un derrumbe ha destruido carreteras y pueblos." },
      { it: "I ricercatori dell'università di Trento hanno installato piccole antenne sulle montagne. Ogni antenna misura i movimenti del terreno, giorno e notte.",
      es: "Los investigadores de la universidad de Trento han instalado pequeñas antenas en las montañas. Cada antena mide los movimientos del terreno, día y noche." },
      { it: "I dati arrivano in città, su un grande schermo. Quando il terreno si muove troppo, il computer manda subito un avviso.",
      es: "Los datos llegan a la ciudad, a una gran pantalla. Cuando el terreno se mueve demasiado, la computadora envía de inmediato un aviso." },
      { it: "«Abbiamo già previsto due frane piccole», dice la geologa Elena Bassani. «Il sistema non ferma la montagna, ma ci dà tempo».",
      es: "«Ya hemos previsto dos derrumbes pequeños», dice la geóloga Elena Bassani. «El sistema no detiene la montaña, pero nos da tiempo»." },
      { it: "Il prossimo passo è il telefono: gli avvisi arriveranno anche agli abitanti dei paesi.",
      es: "El próximo paso es el teléfono: los avisos llegarán también a los habitantes de los pueblos." },
    ],
    words: [
      { it: "la frana", es: "el derrumbe", note: "plural: le frane" },
      { it: "il pendio", es: "la ladera" },
      { it: "il terreno", es: "el terreno" },
      { it: "l'antenna", es: "la antena" },
      { it: "l'avviso", es: "el aviso, la alerta" },
      { it: "la geologa", es: "la geóloga" },
    ],
    questions: [
      { q: "¿Dónde han instalado las antenas los investigadores?", options: ["Sui tetti della città", "Sulle montagne, vicino a Trento", "Nel deserto", "In barca sul lago"], answer: 1, why: "«I ricercatori dell'università di Trento hanno installato piccole antenne sulle montagne.»" },
      { q: "¿Qué mide cada antena?", options: ["Il numero dei turisti", "La pioggia del weekend", "I movimenti del terreno", "Il rumore del vento"], answer: 2, why: "«Ogni antenna misura i movimenti del terreno, giorno e notte.»" },
      { q: "¿Qué ha conseguido ya el sistema, según la geóloga Bassani?", options: ["Ha fermato la montagna", "Ha costruito strade nuove", "Ha spostato i paesi", "Ha previsto due frane piccole"], answer: 3, why: "«Abbiamo già previsto due frane piccole»: el sistema no detiene la montaña, pero da tiempo." },
      { q: "¿Para qué sirve el aviso del sistema?", options: ["Per dare tempo alla gente di mettersi in sicurezza", "Per fermare la pioggia", "Per vendere telefoni nuovi", "Per abbellire le montagne"], answer: 0, why: "«Il sistema non ferma la montagna, ma ci dà tempo»: el aviso permite reaccionar a tiempo." },
    ],
    discuss: [
      { it: "Ci sono montagne o colli nella tua zona? Che problemi hanno con la pioggia?", es: "¿Hay montañas o colinas en tu zona? ¿Qué problemas tienen con la lluvia?" },
      { it: "La tecnologia può proteggere le persone dalla natura? Fai un esempio.", es: "¿Puede la tecnología proteger a las personas de la naturaleza? Pon un ejemplo." },
    ],
  },

  /* ═══ A2 · 5 — Ambiente ═══ */
  {
    id: "news-a2-05", cat: "ambiente", level: "A2", place: "Venezia", minutes: 3,
    title: "Venezia: la laguna respira di nuovo",
    titleEs: "Venecia: la laguna respira de nuevo",
    lead: {
      it: "Nella laguna di Venezia tecnici e pescatori hanno piantato nuove canne. Le isole verdi proteggono la città dell'acqua.",
      es: "En la laguna de Venecia técnicos y pescadores han plantado nuevas cañas. Las islas verdes protegen la ciudad del agua.",
    },
    paragraphs: [
      { it: "La laguna di Venezia è un mondo fragile. Con le onde delle barche, le barene, le piccole isole di fango, sono sparite una dopo l'altra.",
      es: "La laguna de Venecia es un mundo frágil. Con las olas de las barcas, las barene, las pequeñas islas de fango, han desaparecido una tras otra." },
      { it: "Negli ultimi anni, però, qualcosa è cambiato. Tecnici e volontari hanno piantato migliaia di canne e piante. Le barene sono tornate a crescere.",
      es: "En los últimos años, sin embargo, algo ha cambiado. Técnicos y voluntarios han plantado miles de cañas y plantas. Las barene han vuelto a crecer." },
      { it: "Le nuove isole verdi lavorano per la città: fermano le onde, puliscono l'acqua e offrono casa a uccelli e pesci.",
      es: "Las nuevas islas verdes trabajan para la ciudad: frenan las olas, limpian el agua y ofrecen casa a pájaros y peces." },
      { it: "«La laguna è viva, non è un quadro», dice l'ingegnere Marco Tiozzo. «Se la proteggiamo, lei protegge noi».",
      es: "«La laguna está viva, no es un cuadro», dice el ingeniero Marco Tiozzo. «Si la protegemos, ella nos protege»." },
      { it: "Il prossimo obiettivo è piantare un milione di piante. Venezia ha capito una cosa: il futuro passa dalla natura.",
      es: "El próximo objetivo es plantar un millón de plantas. Venecia ha entendido una cosa: el futuro pasa por la naturaleza." },
    ],
    words: [
      { it: "la laguna", es: "la laguna" },
      { it: "la barena / le barene", es: "el humedal / los humedales de la laguna", note: "palabra típica de Venecia" },
      { it: "l'onda / le onde", es: "la ola / las olas" },
      { it: "piantare", es: "plantar" },
      { it: "l'acqua", es: "el agua" },
      { it: "il futuro", es: "el futuro" },
    ],
    questions: [
      { q: "¿Qué son las barene?", options: ["Barche da pesca", "Piccole isole di fango", "Ponti di legno", "Grandi alberghi"], answer: 1, why: "«Le barene, le piccole isole di fango, sono sparite una dopo l'altra.»" },
      { q: "¿Quiénes han plantado miles de cañas y plantas?", options: ["Tecnici e volontari", "Solo i pescatori", "I turisti", "Nessuno"], answer: 0, why: "«Tecnici e volontari hanno piantato migliaia di canne e piante.»" },
      { q: "¿Qué trabajo hacen las nuevas islas verdes por la ciudad?", options: ["Solo decorano il paesaggio", "Chiudono il porto", "Fermano le onde, puliscono l'acqua e offrono casa a uccelli e pesci", "Producono elettricità"], answer: 2, why: "«Fermano le onde, puliscono l'acqua e offrono casa a uccelli e pesci.»" },
      { q: "¿Qué quiere decir Tiozzo con «la laguna è viva»?", options: ["La laguna è un museo chiuso", "La laguna cambia e reagisce: se la proteggiamo, lei protegge noi", "Nella laguna non succede mai niente", "La laguna è solo un quadro da guardare"], answer: 1, why: "«La laguna è viva, non è un quadro. Se la proteggiamo, lei protegge noi»: la protección es recíproca." },
    ],
    discuss: [
      { it: "Conosci Venezia o un'altra città sull'acqua? Com'è la vita laggiù?", es: "¿Conoces Venecia u otra ciudad sobre el agua? ¿Cómo es la vida allí?" },
      { it: "Chi deve pagare la protezione della natura: la città, lo stato o tutti?", es: "¿Quién debe pagar la protección de la naturaleza: la ciudad, el Estado o todos?" },
    ],
  },

  /* ═══ A2 · 6 — Salute ═══ */
  {
    id: "news-a2-06", cat: "salute", level: "A2", place: "Padova", minutes: 3,
    title: "A Padova i cani entrano in ospedale",
    titleEs: "En Padua los perros entran en el hospital",
    lead: {
      it: "Non sono medici, ma fanno stare meglio. A Padova i cani addestrati hanno cominciato a visitare i reparti del grande ospedale.",
      es: "No son médicos, pero hacen sentir mejor. En Padua, los perros adiestrados han empezado a visitar las salas del gran hospital.",
    },
    paragraphs: [
      { it: "Nel grande ospedale di Padova è arrivata una squadra speciale: sei cani addestrati, con i loro conduttori. Sono entrati nei reparti di pediatria e di geriatria.",
      es: "Al gran hospital de Padua ha llegado un equipo especial: seis perros adiestrados con sus guías. Han entrado en las salas de pediatría y de geriatría." },
      { it: "I pazienti hanno aspettato i cani con ansia. Quando sono arrivati, i volti sono cambiati: i bambini hanno riso, i nonni hanno raccontato storie.",
      es: "Los pacientes han esperado a los perros con ansia. Cuando han llegado, los rostros han cambiado: los niños han reído, los abuelos han contado historias." },
      { it: "I medici hanno misurato gli effetti: meno stress, pressione più bassa, più parole. «La terapia non sostituisce le medicine», dice la dottoressa Silvia Renzi, «ma le rende più leggere».",
      es: "Los médicos han medido los efectos: menos estrés, presión más baja, más palabras. «La terapia no sustituye a las medicinas», dice la doctora Silvia Renzi, «pero las hace más ligeras»." },
      { it: "Le visite continuano ogni martedì. I cani portano una pettorina blu. Prima di entrare, il veterinario ha controllato la loro salute.",
      es: "Las visitas continúan cada martes. Los perros llevan un chaleco azul. Antes de entrar, el veterinario ha controlado su salud." },
      { it: "Il progetto ha già ricevuto richieste da altri ospedali. Il prossimo passo? Portare i cani anche nelle case di riposo.",
      es: "El proyecto ya ha recibido peticiones de otros hospitales. ¿El próximo paso? Llevar los perros también a las residencias de ancianos." },
    ],
    words: [
      { it: "il cane / i cani", es: "el perro / los perros" },
      { it: "l'ospedale", es: "el hospital" },
      { it: "il reparto / i reparti", es: "la sala / las salas (del hospital)" },
      { it: "la pettorina", es: "el chaleco (identificativo)" },
      { it: "la terapia", es: "la terapia" },
      { it: "la salute", es: "la salud" },
    ],
    questions: [
      { q: "¿Qué equipo especial ha llegado al hospital de Padua?", options: ["Sei nuovi medici", "Un gruppo di cantanti", "Sei cani addestrati con i loro conduttori", "Dei gatti selvatici"], answer: 2, why: "«È arrivata una squadra speciale: sei cani addestrati, con i loro conduttori.»" },
      { q: "¿Qué han medido los médicos?", options: ["Gli effetti: meno stress, pressione più bassa, più parole", "Il costo dei biglietti", "Il peso dei cani", "La lunghezza dei corridoi"], answer: 0, why: "«I medici hanno misurato gli effetti: meno stress, pressione più bassa, più parole.»" },
      { q: "¿Qué significa que la terapia «rende più leggere» las medicinas?", options: ["Le medicine diventano piccole", "Le medicine costano meno", "I cani prendono le medicine", "La terapia accompagna le medicine e aiuta i pazienti a stare meglio"], answer: 3, why: "«La terapia non sostituisce le medicine, ma le rende più leggere»: las acompaña." },
      { q: "¿Cuándo continúan las visitas de los perros?", options: ["Ogni martedì", "Ogni domenica", "Solo a Natale", "Mai"], answer: 0, why: "«Le visite continuano ogni martedì.»" },
    ],
    discuss: [
      { it: "Gli animali possono davvero aiutare la salute delle persone? Hai esperienze da raccontare?", es: "¿Pueden los animales ayudar de verdad la salud de las personas? ¿Tienes experiencias que contar?" },
      { it: "Preferisci cani o gatti? Racconta il tuo animale preferito.", es: "¿Prefieres perros o gatos? Cuenta tu animal preferido." },
    ],
  },

  /* ═══ A2 · 7 — Cultura ═══ */
  {
    id: "news-a2-07", cat: "cultura", level: "A2", place: "Ravenna", minutes: 3,
    title: "A Ravenna il mosaico ha un futuro giovane",
    titleEs: "En Rávena el mosaico tiene un futuro joven",
    lead: {
      it: "La città dei mosaici antichi ha aperto una scuola internazionale. Studenti da venti paesi imparano l'arte dei piccoli pezzi di vetro.",
      es: "La ciudad de los mosaicos antiguos ha abierto una escuela internacional. Estudiantes de veinte países aprenden el arte de los pequeños trozos de vidrio.",
    },
    paragraphs: [
      { it: "Ravenna ha i mosaici bizantini più famosi del mondo. Nelle chiese antiche, l'oro delle tessere brilla ancora dopo millecinquecento anni.",
      es: "Rávena tiene los mosaicos bizantinos más famosos del mundo. En las iglesias antiguas, el oro de las teselas brilla todavía después de mil quinientos años." },
      { it: "Quest'anno la città ha aperto una scuola internazionale di mosaico. Gli studenti arrivano da venti paesi: Giappone, Brasile, Stati Uniti e altri.",
      es: "Este año la ciudad ha abierto una escuela internacional de mosaico. Los estudiantes llegan de veinte países: Japón, Brasil, Estados Unidos y otros." },
      { it: "Il lavoro è lento e paziente. Ogni tessera si taglia a mano e si mette nel posto giusto. Un metro quadrato chiede settimane di lavoro.",
      es: "El trabajo es lento y paciente. Cada tesela se corta a mano y se coloca en el lugar correcto. Un metro cuadrado pide semanas de trabajo." },
      { it: "«Con il mosaico non hai fretta», dice la restauratrice Elisa Neri. «Prima hai imparato a guardare: prima gli occhi, poi le mani».",
      es: "«Con el mosaico no tienes prisa», dice la restauradora Elisa Neri. «Primero has aprendido a mirar: primero los ojos, luego las manos»." },
      { it: "A fine corso, gli studenti hanno restaurato un pavimento vero della città. La tradizione, così, ha trovato mani nuove.",
      es: "Al final del curso, los estudiantes han restaurado un suelo verdadero de la ciudad. La tradición, así, ha encontrado manos nuevas." },
    ],
    words: [
      { it: "il mosaico", es: "el mosaico" },
      { it: "la tessera", es: "la tesela (piececita del mosaico)" },
      { it: "la chiesa / le chiese", es: "la iglesia / las iglesias" },
      { it: "a mano", es: "a mano" },
      { it: "la fretta", es: "las prisas", note: "avere fretta = tener prisa" },
      { it: "la tradizione", es: "la tradición" },
    ],
    questions: [
      { q: "¿De dónde llegan los estudiantes de la nueva escuela?", options: ["Solo da Ravenna", "Da venti paesi: Giappone, Brasile, Stati Uniti e altri", "Solo dalla Spagna", "Da nessun paese"], answer: 1, why: "«Gli studenti arrivano da venti paesi: Giappone, Brasile, Stati Uniti e altri.»" },
      { q: "¿Cómo se corta cada tesela y dónde se coloca?", options: ["A macchina, in fabbrica", "Col computer", "A mano, nel posto giusto", "Non si taglia"], answer: 2, why: "«Ogni tessera si taglia a mano e si mette nel posto giusto.»" },
      { q: "¿Cuánto trabajo pide un metro cuadrado de mosaico?", options: ["Un'ora", "Un giorno", "Dieci anni", "Settimane di lavoro"], answer: 3, why: "«Un metro quadrato chiede settimane di lavoro»: el mosaico es un arte lento." },
      { q: "¿Qué han conseguido los estudiantes al final del curso?", options: ["Hanno dipinto un quadro", "Hanno comprato una chiesa", "Hanno restaurato un pavimento vero della città", "Hanno aperto un museo"], answer: 2, why: "«A fine corso, gli studenti hanno restaurato un pavimento vero della città. La tradizione, così, ha trovato mani nuove.»" },
    ],
    discuss: [
      { it: "Nella tua città c'è un'arte antica ancora viva? Quale?", es: "¿En tu ciudad hay un arte antigua todavía viva? ¿Cuál?" },
      { it: "Il mondo va veloce: ha ancora senso un lavoro lento come il mosaico?", es: "El mundo va rápido: ¿todavía tiene sentido un trabajo lento como el mosaico?" },
    ],
  },

  /* ═══ A2 · 8 — Economia ═══ */
  {
    id: "news-a2-08", cat: "economia", level: "A2", place: "Alba", minutes: 3,
    title: "Il tartufo bianco di Alba vale oro",
    titleEs: "La trufa blanca de Alba vale oro",
    lead: {
      it: "Nel Piemonte è cominciata la stagione del tartufo bianco. Quest'anno i prezzi sono alti e i cercatori non dormono.",
      es: "En el Piamonte ha comenzado la temporada de la trufa blanca. Este año los precios son altos y los buscadores no duermen.",
    },
    paragraphs: [
      { it: "D'autunno, nei boschi del Piemonte, i trifolau escono di notte con i cani. Cercano il tartufo bianco, il più pregiato del mondo.",
      es: "En otoño, en los bosques del Piamonte, los trifolau salen de noche con los perros. Buscan la trufa blanca, la más apreciada del mundo." },
      { it: "Quest'anno la stagione è cominciata bene. La pioggia d'agosto ha aiutato il tartufo e i prezzi sono saliti alle stelle.",
      es: "Este año la temporada ha comenzado bien. La lluvia de agosto ha ayudado a la trufa y los precios han subido a las estrellas." },
      { it: "All'asta internazionale di Alba, un tartufo di ottocento grammi ha raggiunto un prezzo da record. Il compratore è arrivato dall'Asia.",
      es: "En la subasta internacional de Alba, una trufa de ochocientos gramos ha alcanzado un precio récord. El comprador ha llegado de Asia." },
      { it: "«Il tartufo è come la natura: non si comanda», dice Giovanni Rota, trifolau da trent'anni. «Noi cerchiamo, il bosco decide».",
      es: "«La trufa es como la naturaleza: no se le puede dar órdenes», dice Giovanni Rota, trifolau desde hace treinta años. «Nosotros buscamos, el bosque decide»." },
      { it: "Il tartufo porta ricchezza anche al turismo: ristoranti, alberghi e fiere hanno registrato un autunno pieno.",
      es: "La trufa trae riqueza también al turismo: restaurantes, hoteles y ferias han registrado un otoño lleno." },
    ],
    words: [
      { it: "il tartufo", es: "la trufa" },
      { it: "il trifolau", es: "el buscador de trufas", note: "término dialectal piamontés" },
      { it: "il bosco", es: "el bosque" },
      { it: "l'asta", es: "la subasta" },
      { it: "il prezzo", es: "el precio" },
      { it: "il turismo", es: "el turismo" },
    ],
    questions: [
      { q: "¿Cuándo y cómo salen los trifolau al bosque?", options: ["Di mattina, col trattore", "D'estate, al mare", "Di notte, con i cani", "Mai"], answer: 2, why: "«D'autunno, nei boschi del Piemonte, i trifolau escono di notte con i cani.»" },
      { q: "¿Qué ha ayudado a la trufa este año?", options: ["La pioggia d'agosto", "Il caldo di luglio", "La neve d'inverno", "I trattori nuovi"], answer: 0, why: "«La pioggia d'agosto ha aiutato il tartufo e i prezzi sono saliti alle stelle.»" },
      { q: "¿Qué ha pasado en la subasta internacional de Alba?", options: ["Nessuno ha comprato il tartufo", "Un tartufo di ottocento grammi ha raggiunto un prezzo da record", "Il tartufo è stato regalato", "L'asta è stata annullata"], answer: 1, why: "«Un tartufo di ottocento grammi ha raggiunto un prezzo da record.»" },
      { q: "¿Qué quiere decir Rota con «il bosco decide»?", options: ["La natura decide quanto tartufo si trova: l'uomo non comanda", "Il bosco è chiuso al pubblico", "I cani scelgono i prezzi", "Il tartufo non esiste più"], answer: 0, why: "«Il tartufo è come la natura: non si comanda. Noi cerchiamo, il bosco decide.»" },
    ],
    discuss: [
      { it: "Quali prodotti «d'oro» esistono nella tua regione? Chi li cerca o li produce?", es: "¿Qué productos «de oro» existen en tu región? ¿Quién los busca o los produce?" },
      { it: "Vale la pena pagare molto per un prodotto raro, come il tartufo? Perché?", es: "¿Vale la pena pagar mucho por un producto raro, como la trufa? ¿Por qué?" },
    ],
  },

  /* ═══ A2 · 9 — Società ═══ */
  {
    id: "news-a2-09", cat: "societa", level: "A2", place: "Lecce", minutes: 3,
    title: "I giovani tornano al Sud: il caso di Lecce",
    titleEs: "Los jóvenes vuelven al Sur: el caso de Lecce",
    lead: {
      it: "Per anni i giovani del Sud sono partiti per il Nord. Ora qualcosa è cambiato: a Lecce sono tornati e hanno aperto bottega.",
      es: "Durante años los jóvenes del Sur se han ido al Norte. Ahora algo ha cambiado: en Lecce han vuelto y han abierto tienda.",
    },
    paragraphs: [
      { it: "Negli ultimi dieci anni, molti giovani del Sud hanno lasciato le loro città per lavorare a Milano o all'estero.",
      es: "En los últimos diez años, muchos jóvenes del Sur han dejado sus ciudades para trabajar en Milán o en el extranjero." },
      { it: "Ma a Lecce, nel cuore del Salento, la storia ha preso un'altra direzione. Quest'anno centinaia di ragazzi sono tornati.",
      es: "Pero en Lecce, en el corazón del Salento, la historia ha tomado otra dirección. Este año, cientos de chicos han vuelto." },
      { it: "Hanno aperto laboratori di ceramica, piccole case editrici, caffè con libri, aziende agricole di olio e vino.",
      es: "Han abierto talleres de cerámica, pequeñas editoriales, cafés con libros, empresas agrícolas de aceite y vino." },
      { it: "«Il Sud non è un problema, è una risorsa», dice la sociologa Angela De Santis. «I giovani hanno capito che qui c'è spazio e bellezza».",
      es: "«El Sur no es un problema, es un recurso», dice la socióloga Angela De Santis. «Los jóvenes han entendido que aquí hay espacio y belleza»." },
      { it: "Le vecchie case del centro sono tornate a vivere. E il turismo, d'estate, ha portato lavoro anche d'inverno.",
      es: "Las viejas casas del centro han vuelto a vivir. Y el turismo, en verano, ha traído trabajo también en invierno." },
    ],
    words: [
      { it: "il giovane / i giovani", es: "el joven / los jóvenes" },
      { it: "il Sud", es: "el Sur (de Italia)" },
      { it: "il laboratorio / i laboratori", es: "el taller / los talleres" },
      { it: "la ceramica", es: "la cerámica" },
      { it: "la risorsa", es: "el recurso" },
      { it: "il turismo", es: "el turismo" },
    ],
    questions: [
      { q: "¿Para qué han dejado sus ciudades muchos jóvenes del Sur?", options: ["Per studiare il mare", "Per lavorare a Milano o all'estero", "Per il clima", "Per le vacanze"], answer: 1, why: "«Molti giovani del Sud hanno lasciato le loro città per lavorare a Milano o all'estero.»" },
      { q: "¿Qué han abierto los chicos que han vuelto a Lecce?", options: ["Laboratori di ceramica, piccole case editrici, caffè con libri, aziende agricole", "Solo banche", "Fabbriche di auto", "Niente"], answer: 0, why: "«Hanno aperto laboratori di ceramica, piccole case editrici, caffè con libri, aziende agricole.»" },
      { q: "¿Cómo define al Sur la socióloga De Santis?", options: ["Un museo", "Un deserto", "Una risorsa, non un problema", "Un problema da risolvere"], answer: 2, why: "«Il Sud non è un problema, è una risorsa», dice la sociologa." },
      { q: "¿Qué doble efecto ha tenido el regreso de los jóvenes?", options: ["Le case del centro sono tornate a vivere e il turismo ha portato lavoro anche d'inverno", "Il centro è vuoto e il turismo è finito", "I prezzi sono caduti", "Nessun effetto"], answer: 0, why: "«Le vecchie case del centro sono tornate a vivere» y «il turismo ha portato lavoro anche d'inverno»." },
    ],
    discuss: [
      { it: "Nel tuo paese i giovani partono o restano? Perché?", es: "En tu país, ¿los jóvenes se van o se quedan? ¿Por qué?" },
      { it: "Cosa serve perché un territorio diventi una risorsa per i giovani?", es: "¿Qué hace falta para que un territorio se convierta en un recurso para los jóvenes?" },
    ],
  },

  /* ═══ A2 · 10 — Storia ═══ */
  {
    id: "news-a2-10", cat: "storia", level: "A2", place: "Siracusa", minutes: 3,
    title: "Siracusa: una strada greca torna alla luce",
    titleEs: "Siracusa: una calle griega sale a la luz",
    lead: {
      it: "Sotto la città moderna, Siracusa nasconde il suo passato greco. Gli archeologi hanno trovato una strada di duemilacinquecento anni fa.",
      es: "Debajo de la ciudad moderna, Siracusa esconde su pasado griego. Los arqueólogos han encontrado una calle de hace dos mil quinientos años.",
    },
    paragraphs: [
      { it: "Siracusa, in Sicilia, è stata una delle città più potenti del mondo antico. Atene l'ha invidiata per anni.",
      es: "Siracusa, en Sicilia, ha sido una de las ciudades más poderosas del mundo antiguo. Atenas la envidió durante años." },
      { it: "Sotto le case e le strade di oggi, la città greca dorme da secoli. Quest'estate gli archeologi hanno scoperto una strada lastricata, con fogne e botteghe.",
      es: "Debajo de las casas y de las calles de hoy, la ciudad griega duerme desde hace siglos. Este verano, los arqueólogos han descubierto una calle empedrada, con cloacas y tiendas." },
      { it: "Il ritrovamento ha sorpreso tutti: la strada è in ottimo stato. I ciottoli hanno ancora i segni dei carri.",
      es: "El hallazgo ha sorprendido a todos: la calle está en excelente estado. Los adoquines todavía conservan las marcas de los carros." },
      { it: "«Questa strada racconta la vita di tutti i giorni», dice l'archeologa Roberta Caruso. «Non i re, ma la gente».",
      es: "«Esta calle cuenta la vida de todos los días», dice la arqueóloga Roberta Caruso. «No la de los reyes, sino la de la gente»." },
      { it: "Il comune ha già preparato un progetto: tra due anni i visitatori potranno camminare sulla strada greca, sotto la città moderna.",
      es: "El municipio ya ha preparado un proyecto: dentro de dos años, los visitantes podrán caminar sobre la calle griega, debajo de la ciudad moderna." },
    ],
    words: [
      { it: "la strada", es: "la calle" },
      { it: "il ritrovamento", es: "el hallazgo" },
      { it: "il ciottolo / i ciottoli", es: "el adoquín / los adoquines" },
      { it: "la fogna / le fogne", es: "la cloaca, la alcantarilla" },
      { it: "l'archeologa", es: "la arqueóloga" },
      { it: "il carro / i carri", es: "el carro / los carros" },
    ],
    questions: [
      { q: "¿Qué han descubierto los arqueólogos este verano?", options: ["Un tesoro d'oro", "Una strada lastricata, con fogne e botteghe", "Un palazzo moderno", "Niente"], answer: 1, why: "«Quest'estate gli archeologi hanno scoperto una strada lastricata, con fogne e botteghe.»" },
      { q: "¿Qué conservan todavía los adoquines?", options: ["I segni dei carri", "I nomi dei re", "Le ricette di cucina", "Il meteo"], answer: 0, why: "«I ciottoli hanno ancora i segni dei carri.»" },
      { q: "¿Cómo está la calle, según la noticia?", options: ["Distrutta", "Sott'acqua", "In ottimo stato", "Chiusa"], answer: 2, why: "«La strada è in ottimo stato»: el hallazgo ha sorprendido a todos." },
      { q: "¿Qué historia cuenta esta calle para la arqueóloga Caruso?", options: ["Quella dei re e delle guerre", "Quella degli dei", "Nessuna storia", "La vita di tutti i giorni, della gente"], answer: 3, why: "«Questa strada racconta la vita di tutti i giorni. Non i re, ma la gente.»" },
    ],
    discuss: [
      { it: "Preferisci la storia dei re o la storia della vita quotidiana? Perché?", es: "¿Prefieres la historia de los reyes o la historia de la vida cotidiana? ¿Por qué?" },
      { it: "La tua città nasconde qualcosa sotto le strade? Sai qualcosa?", es: "¿Tu ciudad esconde algo bajo sus calles? ¿Sabes algo?" },
    ],
  },

  /* ═══ A2 · 11 — Tecnologia ═══ */
  {
    id: "news-a2-11", cat: "tecnologia", level: "A2", place: "Bolzano", minutes: 3,
    title: "A Bolzano i bus elettrici silenziosi",
    titleEs: "En Bolzano, los autobuses eléctricos silenciosos",
    lead: {
      it: "I bus della città dell'Alto Adige non fanno più rumore. La flotta è diventata elettrica e l'aria del centro è cambiata.",
      es: "Los autobuses de la ciudad del Alto Adige ya no hacen ruido. La flota se ha vuelto eléctrica y el aire del centro ha cambiado.",
    },
    paragraphs: [
      { it: "Bolzano ha comprato trenta bus elettrici. Le batterie si caricano di notte, nel deposito, con l'energia di una centrale idroelettrica della valle.",
      es: "Bolzano ha comprado treinta autobuses eléctricos. Las baterías se cargan de noche, en el depósito, con la energía de una central hidroeléctrica del valle." },
      { it: "I nuovi bus non fanno rumore e non producono fumo. Nel centro, l'aria è diventata più pulita.",
      es: "Los nuevos autobuses no hacen ruido y no producen humo. En el centro, el aire se ha vuelto más limpio." },
      { it: "Gli autisti hanno fatto un corso speciale. «Il silenzio all'inizio era strano», racconta Paolo, autista da vent'anni. «Ora non torno più indietro».",
      es: "Los conductores han hecho un curso especial. «El silencio, al principio, era extraño», cuenta Paolo, conductor desde hace veinte años. «Ahora no vuelvo atrás»." },
      { it: "La tecnologia porta anche piccoli problemi. D'inverno, con il freddo, le batterie durano meno.",
      es: "La tecnología trae también pequeños problemas. En invierno, con el frío, las baterías duran menos." },
      { it: "«La soluzione non è un miracolo», dice l'ingegnere Pietro Lombardi. «È una lunga strada, fatta di piccoli passi».",
      es: "«La solución no es un milagro», dice el ingeniero Pietro Lombardi. «Es un largo camino, hecho de pequeños pasos»." },
    ],
    words: [
      { it: "il bus", es: "el autobús" },
      { it: "la batteria / le batterie", es: "la batería / las baterías" },
      { it: "il rumore", es: "el ruido" },
      { it: "il fumo", es: "el humo" },
      { it: "l'autista", es: "el conductor, el chófer" },
      { it: "la centrale idroelettrica", es: "la central hidroeléctrica" },
    ],
    questions: [
      { q: "¿Cuándo y dónde se cargan las baterías de los autobuses?", options: ["Di mattina, in piazza", "Di notte, nel deposito", "Mai", "Con il sole d'estate"], answer: 1, why: "«Le batterie si caricano di notte, nel deposito.»" },
      { q: "¿Con qué energía se cargan?", options: ["Con l'energia di una centrale idroelettrica della valle", "Con il carbone", "Con energia dall'estero", "Con i pannelli dei bus"], answer: 0, why: "«Con l'energia di una centrale idroelettrica della valle.»" },
      { q: "¿Qué pequeña dificultad traen las baterías en invierno?", options: ["Costano troppo", "Si sporcano", "Durano meno con il freddo", "Si perdono"], answer: 2, why: "«D'inverno, con il freddo, le batterie durano meno.»" },
      { q: "¿Cómo define Lombardi el cambio hacia lo eléctrico?", options: ["Un miracolo", "Un errore", "Un gioco", "Una lunga strada, fatta di piccoli passi"], answer: 3, why: "«La soluzione non è un miracolo. È una lunga strada, fatta di piccoli passi.»" },
    ],
    discuss: [
      { it: "Com'è il trasporto pubblico della tua città: rumoroso o silenzioso?", es: "¿Cómo es el transporte público de tu ciudad: ruidoso o silencioso?" },
      { it: "Elettrico o bicicletta: come viaggerai in città tra vent'anni?", es: "¿Eléctrico o bicicleta: cómo viajarás por la ciudad dentro de veinte años?" },
    ],
  },

  /* ═══ A2 · 12 — Sport ═══ */
  {
    id: "news-a2-12", cat: "sport", level: "A2", place: "Cagliari", minutes: 3,
    title: "Il padel conquista Cagliari",
    titleEs: "El pádel conquista Cagliari",
    lead: {
      it: "Campi pieni dalle otto di mattina alle undici di sera. A Cagliari il padel è diventato lo sport di tutti.",
      es: "Pistas llenas desde las ocho de la mañana hasta las once de la noche. En Cagliari, el pádel se ha convertido en el deporte de todos.",
    },
    paragraphs: [
      { it: "Dieci anni fa, a Cagliari, c'era un solo campo da padel, semivuoto. Oggi i campi sono venti e la lista d'attesa è lunga.",
      es: "Hace diez años, en Cagliari, había una sola pista de pádel, medio vacía. Hoy las pistas son veinte y la lista de espera es larga." },
      { it: "Il segreto del successo? È uno sport sociale. Si gioca in quattro, si ride, si parla. Il punteggio assomiglia al tennis.",
      es: "¿El secreto del éxito? Es un deporte social. Se juega entre cuatro, se ríe, se conversa. El marcador se parece al del tenis." },
      { it: "Le scuole hanno aperto corsi per bambini e per nonni: intere famiglie giocano insieme la domenica mattina.",
      es: "Las escuelas han abierto cursos para niños y para abuelos: familias enteras juegan juntas el domingo por la mañana." },
      { it: "«Ho conosciuto più gente in un mese di padel che in dieci anni di palestra», dice l'istruttore Massimo Fadda.",
      es: "«He conocido a más gente en un mes de pádel que en diez años de gimnasio», dice el instructor Massimo Fadda." },
      { it: "Il comune ha presentato un piano: altri dieci campi nei quartieri. Il futuro dello sport sardo, forse, ha le mura di vetro.",
      es: "El municipio ha presentado un plan: otras diez pistas en los barrios. El futuro del deporte sardo, quizás, tiene muros de cristal." },
    ],
    words: [
      { it: "il campo", es: "la pista, el campo" },
      { it: "la lista d'attesa", es: "la lista de espera" },
      { it: "il punteggio", es: "el marcador, el puntaje" },
      { it: "la palestra", es: "el gimnasio" },
      { it: "l'istruttore", es: "el instructor" },
      { it: "il quartiere / i quartieri", es: "el barrio / los barrios" },
    ],
    questions: [
      { q: "¿Cuántas pistas de pádel hay hoy en Cagliari?", options: ["Uno solo", "Cento", "Nessuno", "Venti"], answer: 3, why: "«Oggi i campi sono venti e la lista d'attesa è lunga.»" },
      { q: "¿Por qué tiene éxito el pádel?", options: ["Perché è gratis", "Perché è uno sport sociale: si gioca in quattro, si ride, si parla", "Perché è facilissimo", "Perché dura poco"], answer: 1, why: "«È uno sport sociale. Si gioca in quattro, si ride, si parla.»" },
      { q: "¿Quiénes juegan juntos el domingo por la mañana?", options: ["Solo i professionisti", "Solo i bambini", "Intere famiglie, bambini e nonni", "Solo gli stranieri"], answer: 2, why: "«Corsi per bambini e per nonni: intere famiglie giocano insieme la domenica mattina.»" },
      { q: "¿Qué ha presentado el municipio?", options: ["La chiusura dei campi", "Un campionato professionistico", "Niente di nuovo", "Un piano: altri dieci campi nei quartieri"], answer: 3, why: "«Il comune ha presentato un piano: altri dieci campi nei quartieri.»" },
    ],
    discuss: [
      { it: "Pratichi uno sport sociale o uno sport solitario? Quale e perché?", es: "¿Practicas un deporte social o un deporte solitario? ¿Cuál y por qué?" },
      { it: "Il tuo quartiere ha abbastanza spazi per lo sport? Cosa manca?", es: "¿Tu barrio tiene suficientes espacios para el deporte? ¿Qué falta?" },
    ],
  },

  /* ═══ A2 · 13 — Storia ═══ */
  {
    id: "news-a2-13", cat: "storia", level: "A2", place: "Tarquinia", minutes: 3,
    title: "Tarquinia: le pitture degli Etruschi tornano a parlare",
    titleEs: "Tarquinia: las pinturas de los etruscos vuelven a hablar",
    lead: {
      it: "Necropoli etrusca di Tarquinia, nel Lazio. I restauratori hanno finito i lavori in dieci tombe famose: i colori sono tornati vivi.",
      es: "Necrópolis etrusca de Tarquinia, en el Lacio. Los restauradores han terminado los trabajos en diez tumbas famosas: los colores han vuelto a estar vivos.",
    },
    paragraphs: [
      { it: "A Tarquinia, nella campagna del Lazio, si trovano migliaia di tombe etrusche, scavate nella roccia.",
      es: "En Tarquinia, en el campo del Lacio, se encuentran miles de tumbas etruscas, excavadas en la roca." },
      { it: "Le pareti delle tombe più ricche sono dipinte: banchetti, danze, pesci, delfini. Gli Etruschi amavano i colori e la vita.",
      es: "Las paredes de las tumbas más ricas están pintadas: banquetes, danzas, peces, delfines. Los etruscos amaban los colores y la vida." },
      { it: "Questa primavera i restauratori hanno completato il lavoro in dieci tombe. Lo sporco di secoli è sparito e il rosso è tornato rosso.",
      es: "Esta primavera, los restauradores han completado el trabajo en diez tumbas. La suciedad de siglos ha desaparecido y el rojo ha vuelto a ser rojo." },
      { it: "«Gli Etruschi hanno insegnato molto ai Romani», dice l'archeologo Enrico Longhi. «Ma la loro lingua resta un mistero: noi leggiamo le parole, non capiamo tutto».",
      es: "«Los etruscos enseñaron mucho a los romanos», dice el arqueólogo Enrico Longhi. «Pero su lengua sigue siendo un misterio: leemos las palabras, no lo entendemos todo»." },
      { it: "La necropoli è patrimonio dell'umanità. Quest'anno i visitatori sono aumentati: la storia antica, a quanto pare, non annoia.",
      es: "La necrópolis es patrimonio de la humanidad. Este año, los visitantes han aumentado: la historia antigua, al parecer, no aburre." },
    ],
    words: [
      { it: "la tomba / le tombe", es: "la tumba / las tumbas" },
      { it: "la parete / le pareti", es: "la pared / las paredes" },
      { it: "la roccia", es: "la roca" },
      { it: "il banchetto / i banchetti", es: "el banquete / los banquetes" },
      { it: "la lingua", es: "la lengua, el idioma" },
      { it: "il mistero", es: "el misterio" },
    ],
    questions: [
      { q: "¿Dónde se encuentran las tumbas etruscas?", options: ["A Tarquinia, nella campagna del Lazio", "A Venezia, nella laguna", "Sulle Alpi", "In Sardegna, al mare"], answer: 0, why: "«A Tarquinia, nella campagna del Lazio, si trovano migliaia di tombe etrusche.»" },
      { q: "¿Qué representan las pinturas de las tumbas más ricas?", options: ["Solo guerre", "Mappe moderne", "Banchetti, danze, pesci, delfini", "Niente"], answer: 2, why: "«Le pareti delle tombe più ricche sono dipinte: banchetti, danze, pesci, delfini.»" },
      { q: "¿Qué resultado han logrado los restauradores esta primavera?", options: ["Hanno chiuso le tombe al pubblico", "Hanno spostato le pitture in un museo", "Hanno costruito una tomba nuova", "Lo sporco di secoli è sparito e il rosso è tornato rosso"], answer: 3, why: "«Lo sporco di secoli è sparito e il rosso è tornato rosso.»" },
      { q: "¿Por qué la lengua etrusca sigue siendo «un mistero»?", options: ["Perché non esistono scritture", "Perché i Romani l'hanno distrutta tutta", "Perché leggiamo le parole ma non capiamo tutto", "Perché nessuno la studia"], answer: 2, why: "«Noi leggiamo le parole, non capiamo tutto», explica el arqueólogo Longhi." },
    ],
    discuss: [
      { it: "Vuoi sapere di più su un popolo antico? Quale e perché?", es: "¿Quieres saber más sobre algún pueblo antiguo? ¿Cuál y por qué?" },
      { it: "Perché, secondo te, milioni di persone visitano le tombe e i musei antichi?", es: "¿Por qué, según tú, millones de personas visitan las tumbas y los museos antiguos?" },
    ],
  },

  /* ═══ A2 · 14 — Ambiente ═══ */
  {
    id: "news-a2-14", cat: "ambiente", level: "A2", place: "Treviso", minutes: 3,
    title: "Rifiuti: a Treviso il record della raccolta differenziata",
    titleEs: "Residuos: en Treviso el récord de recogida selectiva",
    lead: {
      it: "Novantaquattro per cento: è il numero di Treviso. La città veneta ha vinto una sfida silenziosa contro lo spreco.",
      es: "Noventa y cuatro por ciento: es el número de Treviso. La ciudad veneta ha ganado un desafío silencioso contra el desperdicio.",
    },
    paragraphs: [
      { it: "A Treviso la raccolta differenziata ha raggiunto il novantaquattro per cento. Quasi niente finisce in discarica.",
      es: "En Treviso, la recogida selectiva ha alcanzado el noventa y cuatro por ciento. Casi nada termina en el vertedero." },
      { it: "Il segreto è iniziato trent'anni fa, con il porta a porta. La gente ha imparato a separare carta, vetro, plastica e organico.",
      es: "El secreto empezó hace treinta años, con el puerta a puerta. La gente ha aprendido a separar papel, vidrio, plástico y orgánico." },
      { it: "Il vetro è tornato bottiglia, la carta è diventata nuova carta. L'organico ha prodotto compost per i campi.",
      es: "El vidrio ha vuelto a ser botella, el papel se ha convertido en papel nuevo. El orgánico ha producido compost para los campos." },
      { it: "«I rifiuti non esistono, esiste la materia», dice l'ingegnera Paola Sartori. «Ogni oggetto ha una seconda vita».",
      es: "«Los residuos no existen, existe la materia», dice la ingeniera Paola Sartori. «Cada objeto tiene una segunda vida»." },
      { it: "Altre città italiane hanno copiato il modello. La prossima sfida è il riuso: riparare e condividere, non buttare via.",
      es: "Otras ciudades italianas han copiado el modelo. El próximo desafío es reutilizar: reparar y compartir, no tirar." },
    ],
    words: [
      { it: "il rifiuto / i rifiuti", es: "el residuo / los residuos" },
      { it: "la raccolta differenziata", es: "la recogida selectiva de residuos" },
      { it: "la discarica", es: "el vertedero" },
      { it: "il vetro", es: "el vidrio" },
      { it: "il compost", es: "el compost" },
      { it: "la materia", es: "la materia" },
    ],
    questions: [
      { q: "¿Qué porcentaje ha alcanzado la recogida selectiva de Treviso?", options: ["Il cinquanta per cento", "Il novantaquattro per cento", "Il dieci per cento", "Il cento per cento"], answer: 1, why: "«La raccolta differenziata ha raggiunto il novantaquattro per cento.»" },
      { q: "¿Con qué sistema empezó todo hace treinta años?", options: ["Col porta a porta", "Con le discariche grandi", "Con i camion nuovi", "Per caso"], answer: 0, why: "«Il segreto è iniziato trent'anni fa, con il porta a porta.»" },
      { q: "¿Qué ha producido la fracción orgánica?", options: ["Energia nucleare", "Nuova plastica", "Compost per i campi", "Niente"], answer: 2, why: "«L'organico ha prodotto compost per i campi.»" },
      { q: "¿Qué idea defiende la ingeniera Sartori?", options: ["La discarica è la soluzione migliore", "I rifiuti non esistono, esiste materia: ogni oggetto ha una seconda vita", "È tardi per cambiare", "Il problema non esiste"], answer: 1, why: "«I rifiuti non esistono, esiste materia. Ogni oggetto ha una seconda vita.»" },
    ],
    discuss: [
      { it: "Come funziona la raccolta dei rifiuti nella tua città? Racconta.", es: "¿Cómo funciona la recogida de residuos en tu ciudad? Cuenta." },
      { it: "Cosa hai buttato via di recente che poteva avere una seconda vita?", es: "¿Qué tiraste hace poco que podía tener una segunda vida?" },
    ],
  },

  /* ═══ A2 · 15 — Scienza ═══ */
  {
    id: "news-a2-15", cat: "scienza", level: "A2", place: "L'Aquila", minutes: 3,
    title: "Sotto la montagna: il laboratorio dei fisici",
    titleEs: "Bajo la montaña: el laboratorio de los físicos",
    lead: {
      it: "A millequattrocento metri sotto il Gran Sasso, i ricercatori cercano particelle misteriose. Il silenzio della roccia aiuta la scienza.",
      es: "A mil cuatrocientos metros bajo el Gran Sasso, los investigadores buscan partículas misteriosas. El silencio de la roca ayuda a la ciencia.",
    },
    paragraphs: [
      { it: "Sotto la montagna del Gran Sasso, vicino all'Aquila, c'è un laboratorio unico al mondo.",
      es: "Debajo de la montaña del Gran Sasso, cerca de L'Aquila, hay un laboratorio único en el mundo." },
      { it: "Per studiare le particelle più rare, i fisici hanno bisogno di silenzio. La roccia, sopra le sale, ferma i raggi cosmici.",
      es: "Para estudiar las partículas más raras, los físicos necesitan silencio. La roca, sobre las salas, detiene los rayos cósmicos." },
      { it: "Gli strumenti sono enormi: le bilance più sensibili del mondo hanno misurato movimenti piccolissimi, come il battito di una mosca.",
      es: "Los instrumentos son enormes: las balanzas más sensibles del mundo han medido movimientos pequeñísimos, como el aleteo de una mosca." },
      { it: "«Qui abbiamo catturato segnali venuti dal sole», dice la fisica Chiara Monti. «E forse, un giorno, il mistero della materia oscura».",
      es: "«Aquí hemos capturado señales venidas del sol», dice la física Chiara Monti. «Y quizás, algún día, el misterio de la materia oscura»." },
      { it: "Il laboratorio ha aperto le porte anche alle scuole. Gli studenti scendono e capiscono che la fisica non abita solo nei libri.",
      es: "El laboratorio ha abierto las puertas también a las escuelas. Los estudiantes bajan y entienden que la física no vive solo en los libros." },
    ],
    words: [
      { it: "il laboratorio", es: "el laboratorio" },
      { it: "la roccia", es: "la roca" },
      { it: "la particella / le particelle", es: "la partícula / las partículas" },
      { it: "il silenzio", es: "el silencio" },
      { it: "lo strumento / gli strumenti", es: "el instrumento / los instrumentos" },
      { it: "la fisica", es: "la física (también: la física, la científica)" },
    ],
    questions: [
      { q: "¿Dónde está el laboratorio único en el mundo?", options: ["Sopra un grattacielo di Milano", "In un'isola", "Nel centro di Roma", "Sotto la montagna del Gran Sasso, vicino all'Aquila"], answer: 3, why: "«Sotto la montagna del Gran Sasso, vicino all'Aquila, c'è un laboratorio unico al mondo.»" },
      { q: "¿Qué hace la roca sobre las salas?", options: ["Ferma i raggi cosmici", "Produce luce", "Scalda le sale", "Fa rumore"], answer: 0, why: "«La roccia, sopra le sale, ferma i raggi cosmici.»" },
      { q: "¿Qué han medido las balanzas más sensibles del mundo?", options: ["Il peso dei turisti", "Movimenti piccolissimi, come il battito di una mosca", "La pioggia", "Il traffico"], answer: 1, why: "«Hanno misurato movimenti piccolissimi, come il battito di una mosca.»" },
      { q: "¿Qué misterio esperan resolver algún día, según la física Monti?", options: ["Il mistero dei dinosauri", "Il mistero del traffico", "Il mistero della materia oscura", "Nessun mistero"], answer: 2, why: "«E forse, un giorno, il mistero della materia oscura.»" },
    ],
    discuss: [
      { it: "Preferisci la scienza sotto la montagna o nello spazio? Perché?", es: "¿Prefieres la ciencia bajo la montaña o en el espacio? ¿Por qué?" },
      { it: "Quali scoperte scientifiche ti hanno sorpreso di più nella vita?", es: "¿Qué descubrimientos científicos te han sorprendido más en la vida?" },
    ],
  },
];
