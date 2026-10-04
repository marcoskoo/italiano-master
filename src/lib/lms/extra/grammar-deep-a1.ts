import type { CbGrammarDeep } from "./grammar-deep";

/* ═══ v9.15 · Grammatica approfondita · A1 (cu-a1-01 … cu-a1-12) ═══ */

export const GD_A1: Record<string, CbGrammarDeep> = {
  "cu-a1-01": {
    sezioni: [
      { t: "Come si forma", body: "Il verbo essere (ser/estar) si coniuga: io sono, tu sei, lui/lei è, noi siamo, voi siete, loro sono. Fíjate en dos trampas de escritura: la tercera persona è lleva siempre acento para distinguirse de e (y), y io y loro comparten la misma forma, sono. En la lengua hablada el acento no se oye, así que la persona se entiende por el contexto o por el pronombre." },
      { t: "Quando si usa", body: "essere expresa identidad, nombre, origen, profesión, nacionalidad y descripción física o de carácter: «Io sono Alejandro, sono peruviano e sono studente». Con adjetivos que describen estados, cubre tanto al ser como al estar del español: sono felice (soy feliz), sono stanco (estoy cansado). También sirve para presentar a otros: «Lei è Marta, una mia amica»." },
      { t: "Attenzione! · trampas para hispanohablantes", body: "El español reparte el significado entre ser y estar; el italiano lo concentra todo en essere: «estoy en casa» = sono a casa, «está frío» (la comida) = è freddo. Las nacionalidades son adjetivos y por tanto concuerdan en género y número — spagnolo, spagnola, spagnoli, spagnole — y se escriben SIEMPRE en minúscula, a diferencia del inglés. No traduzcas el «estoy + gerundio» español con essere: se construye con stare (sto mangiando)." },
      { t: "Nel parlato", body: "En las presentaciones reales los italianos casi nunca dicen el pronombre: «Sono Alejandro, piacere». Para preguntar por la identidad de alguien: «Chi è?». Y para despedirse de un nuevo conocido se usa el nombre o «Piacere mio»." },
    ],
    esempi: [
      { it: "Io sono peruviano, ma vivo a Madrid da due anni.", es: "Yo soy peruano, pero vivo en Madrid desde hace dos años." },
      { it: "Lei è insegnante di italiano in una scuola privata.", es: "Ella es profesora de italiano en una escuela privada." },
      { it: "Siamo molto stanchi stasera: andiamo a dormire.", es: "Estamos muy cansados esta noche: vamos a dormir." },
      { it: "Voi siete studenti o lavorate già?", es: "¿Vosotros sois estudiantes o ya trabajáis?" },
      { it: "Loro sono italiani del sud, di Bari.", es: "Ellos son italianos del sur, de Bari." },
    ],
    usi: [
      { q: "«Estoy cansado» en italiano:", options: ["Sono stanco.", "Sto stanco.", "Ho stanco."], answer: 0, explain: "essere cubre ser y estar: sono stanco." },
      { q: "«Marta y Luca son españoles»:", options: ["Marta e Luca sono spagnoli.", "Marta e Luca è spagnoli.", "Marta e Luca sono spagnola."], answer: 0, explain: "Sujeto mixto o masculino plural → spagnoli." },
    ],
  },

  "cu-a1-02": {
    sezioni: [
      { t: "Come si forma", body: "avere (tener) si coniuga: io ho, tu hai, lui/lei ha, noi abbiamo, voi avete, loro hanno. La h se pronuncia aspirada muy suave o no se pronuncia según la región, pero se escribe siempre. Las formas ho, hai, hanno empiezan con h muda, cosa que sorprende a los hispanohablantes, que no la tienen." },
      { t: "Quando si usa", body: "avere expresa posesión («Ho una casa a Firenze»), la edad («Ho vent'anni»), y un grupo enorme de sensaciones físicas que en español se construyen con tener igual que en italiano: ho fame (hambre), ho sete (sed), ho freddo (frío), ho caldo (calor), ho sonno (sueño), ho paura (miedo). Con los años de vida, Italia y España coinciden: se dice avere, no essere." },
      { t: "Attenzione! · trampas para hispanohablantes", body: "Los posesivos italianos concuerdan con la COSA poseída, no con el poseedor, exactamente como en español: mio fratello, mia sorella, i miei genitori. Ante parientes en singular no se usa artículo (mia madre, tuo zio), pero ante cualquier otro nombre sí (il mio libro, la mia macchina) — aquí el español dice «mi libro» sin artículo y el italiano exige il/la. Error típico: decir «mia la madre» invirtiendo el orden." },
      { t: "Nel parlato", body: "Los italianos preguntan «Quanti anni hai?» y responden «Ne ho ventidue» (con ne, que verás en la unidad 11). Para hablar de la familia: «Hai fratelli?» — nota que el plural fratelli/sorelle puede significar hermanos y hermanas juntos." },
    ],
    esempi: [
      { it: "Hanno una casa bellissima vicino a Firenze.", es: "Tienen una casa bellísima cerca de Florencia." },
      { it: "Ho ventotto anni e mia sorella ne ha trenta.", es: "Tengo veintiocho años y mi hermana tiene treinta." },
      { it: "Avete fame? C'è della pasta già pronta.", es: "¿Tenéis hambre? Hay pasta ya lista." },
      { it: "I miei genitori hanno due gatti e un cane.", es: "Mis padres tienen dos gatos y un perro." },
      { it: "Ho sonno: buonanotte a tutti!", es: "Tengo sueño: ¡buenas noches a todos!" },
    ],
    usi: [
      { q: "«Tengo frío»:", options: ["Ho freddo.", "Sono freddo.", "Faccio freddo."], answer: 0, explain: "Sensación personal con avere; fa freddo se refiere al tiempo." },
      { q: "«Mis hermanas»:", options: ["le mie sorelle", "la mia sorelle", "le mia sorelle"], answer: 0, explain: "Plural femenino: le + mie + sorelle." },
    ],
  },

  "cu-a1-03": {
    sezioni: [
      { t: "Come si forma", body: "El presente de indicativo tiene tres conjugaciones: -are (parlare: parlo, parli, parla, parliamo, parlate, parlano), -ere (prendere: prendo, prendi, prende…), -ire (dormire: dormo, dormi, dorme…). Atención a los verbos en -ire con sufijo -isc-: capire → capisco, capisci, capisce, capiamo, capite, capiscono; el -isc- aparece en todas las personas excepto noi y voi. Los reflexivos se conjugan igual pero con el pronombre delante: mi sveglio, ti svegli, si sveglia." },
      { t: "Quando si usa", body: "El presente italiano expresa la acción actual («Studio italiano»), los hábitos («Il sabato lavoro fino alle due») y también el futuro cercano e inmediato («Domani vado dal dentista»), igual que el español coloquial «mañana voy». Los verbos reflexivos describen la rutina diaria: svegliarsi, alzarsi, lavarsi, vestirsi, riposarsi." },
      { t: "Attenzione! · trampas para hispanohablantes", body: "El verbo «vivir» se traduce vivo/abito: abitare suena antiguo en español pero es totalmente normal en italiano («Abito a Milano»). No olvides el -isc- de la primera conjugación -ire: finire → finisco, nunca «fino». El español «me llamo» se construye igual: mi chiamo — el pronombre reflexivo va delante del verbo en las dos lenguas." },
      { t: "Nel parlato", body: "Los verbos con -isc- más frecuentes son capisco, preferisco, finisco, pulisco, spedisco, spediamo... Escúchalos en las frases de los ejemplos: la diferencia tra «capo» (cabo) y «capisco» (entiendo) es solo ese sufijo." },
    ],
    esempi: [
      { it: "Abito a Barcellona ma lavoro da casa.", es: "Vivo en Barcelona pero trabajo desde casa." },
      { it: "Capisci l'italiano quando parlano lentamente?", es: "¿Entiendes el italiano cuando hablan lentamente?" },
      { it: "Finiamo di lavorare alle sei di sera.", es: "Terminamos de trabajar a las seis de la tarde." },
      { it: "Mi sveglio presto, mi lavo e faccio colazione.", es: "Me despierto temprano, me lavo y desayuno." },
      { it: "Preferisco il tè al caffè la sera.", es: "Prefiero el té al café por la tarde." },
    ],
    usi: [
      { q: "«Entiendo»:", options: ["Capisco.", "Capo.", "Compisco."], answer: 0, explain: "capire es un verbo -ire con -isc-: io capisco." },
      { q: "«Nos despertamos a las siete»:", options: ["Ci svegliamo alle sette.", "Svegliamo alle sette.", "Ci svegliate alle sette."], answer: 0, explain: "Reflexivo de noi: ci + svegliamo." },
    ],
  },

  "cu-a1-04": {
    sezioni: [
      { t: "Come si forma", body: "La existencia se expresa con c'è (singular) y ci sono (plural). El artículo indeterminado tiene cuatro formas masculinas y femeninas: un (cono consonante), uno (ante z, s + consonante, ps, gn: uno studente, uno zaino), una (una casa) y un' ante vocal femenina (un'amica, un'opera). El femenino «una» solo se apocopa ante vocal, y entonces se escribe con apóstrofo." },
      { t: "Quando si usa", body: "c'è/ci sono presentan algo nuevo o anuncian su presencia: «C'è un problema», «Ci sono due nuove studentesse in classe». Van también en preguntas («C'è qualcuno?») y con números («Ci sono tre caffè in questa strada»). El artículo indeterminado presenta por primera vez la cosa de la que luego hablaremos con el determinado." },
      { t: "Attenzione! · trampas para hispanohablantes", body: "El español tiene un «hay» invariable para todo; el italiano obliga a elegir: hay un problema → c'è un problema, pero hay dos problemas → ci sono due problemi. Es el error número uno de los principiantes hispanos. Y ojo: el «hace calor/frío» del tiempo no usa c'è: se dice fa caldo, fa freddo." },
      { t: "Nel parlato", body: "«Non c'è problema!» es la respuesta italiana por excelencia a un agradecimiento o una disculpa. Para el clima y las sensaciones ambientales: c'è sole (hace sol) se acepta, pero fa caldo es la forma estándar." },
    ],
    esempi: [
      { it: "C'è un mercato bellissimo in piazza la domenica.", es: "Hay un mercado bellísimo en la plaza los domingos." },
      { it: "Ci sono molti turisti oggi in centro.", es: "Hay muchos turistas hoy en el centro." },
      { it: "Non c'è problema, ti aspetto!", es: "No hay problema, ¡te espero!" },
      { it: "C'è uno studente nuovo in classe con noi.", es: "Hay un estudiante nuevo en clase con nosotros." },
      { it: "Un'amica mi aspetta al bar tra dieci minuti.", es: "Una amiga me espera en el bar en diez minutos." },
    ],
    usi: [
      { q: "«Hay dos museos interesantes»:", options: ["Ci sono due musei interessanti.", "C'è due musei interessanti.", "Sono due musei interessanti."], answer: 0, explain: "Plural → ci sono." },
      { q: "«___ zaino» (una mochila):", options: ["uno", "un", "una"], answer: 0, explain: "Ante z se usa uno: uno zaino." },
    ],
  },

  "cu-a1-05": {
    sezioni: [
      { t: "Come si forma", body: "El partitivo se forma con di + artículo determinado: del, dello, dell', della, dei, degli, delle. Selecciona la misma forma que el artículo determinado: del pane, dello zucchero, dell'acqua, della frutta, dei biscotti, degli amici, delle verdure. Existe también la variante con un po' di (un poco de), más coloquial y muy usada en el habla." },
      { t: "Quando si usa", body: "El partitivo expresa una cantidad indeterminada de algo: «Prendo del pane» (tomo pan — una parte, no todo el pan del mundo). Es el artículo típico de las compras y los restaurantes: «Vorrei della mozzarella». Con verbos como mangiare, comprare, prendere, volere, el partitivo es la elección natural cuando no especificas cuánto." },
      { t: "Attenzione! · trampas para hispanohablantes", body: "El español dice «como pan» con el sustantivo solo; el italiano no admite el nombre desnudo en estos contextos: mangio del pane, o bien mangio il pane si hablas del pan en general como categoría. La diferencia entre il pane (todo el pan, el concepto) y del pane (una parte) no tiene traducción directa en español, y por eso hay que pensarla en italiano. No siempre «algo de» español es partitivo: a veces es «un po' di»." },
      { t: "Nel parlato", body: "En la lengua hablada el italiano tiende al partitivo con plural (degli amici, delle cose) donde el español usa el sustantivo solo: «Ho conosciuto degli italiani simpaticissimi» = conocí a unos italianos simpatiquísimos." },
    ],
    esempi: [
      { it: "Vorrei del pane e dell'acqua, per favore.", es: "Quisiera algo de pan y (algo de) agua, por favor." },
      { it: "Compriamo della frutta fresca al mercato.", es: "Compramos fruta fresca en el mercado." },
      { it: "C'è ancora dello zucchero per il caffè?", es: "¿Queda (algo de) azúcar para el café?" },
      { it: "Ho preso dei biscotti con il cappuccino.", es: "He tomado unas galletas con el capuchino." },
      { it: "Vuoi un po' di formaggio con la pasta?", es: "¿Quieres un poco de queso con la pasta?" },
    ],
    usi: [
      { q: "«Compro vino» (cantidad indeterminada):", options: ["Compro del vino.", "Compro il vino.", "Compro vino."], answer: 0, explain: "Cantidad indeterminada → partitivo del; il vino sería el género entero o un vino concreto ya conocido." },
      { q: "dello se usa ante:", options: ["z, s+consonante, ps, gn", "cualquier vocal", "todas las consonantes"], answer: 0, explain: "Mismo reparto que el artículo: dello zucchero, dello spazio." },
    ],
  },

  "cu-a1-06": {
    sezioni: [
      { t: "Come si forma", body: "questo/questa/questi/queste (este) no cambia nunca de forma ante el nombre. quello (ese/ aquel) se comporta exactamente como el artículo determinado cuando va delante del nombre: quel ragazzo, quello studente, quell'amica, quella casa, quei ragazzi, quegli amici, quelle case. A distancia o solo, vuelve a la forma plena: quello, quella, quelli, quelle." },
      { t: "Quando si usa", body: "questo señala lo cercano y quello lo lejano, en el espacio y en el discurso: «Prendo questa borsa, non quella». Con gestos, el italiano añade qui/là: questo qui, quello là. Para los adjetivos calificativos, la posición normal italiana es DETRÁS del nombre: una città grande, un film bellissimo; solo unos pocos adjetivos muy frecuentes (bello, bravo, grande, nuovo, vecchio, buono) van delante y a veces cambian de sentido." },
      { t: "Attenzione! · trampas para hispanohablantes", body: "El español «ese» y el italiano quello cubren también el «aquel» español: el italiano no distingue dos grados de lejanía. La apócope de quello ante nombre es idéntica a la del artículo y hay que memorizarla con el mismo cuadro: quel libro / quegli studenti / quell'università. Y no traduzcas «bello» siempre como bel: ante consonante se apocopa (un bel film), ante vocal bel l'universale... en la práctica: bel film, bell'amico, bei film, begli amici." },
      { t: "Nel parlato", body: "El italiano señala con questo y quello mientras habla de cosas abstractas: «questo è il punto» (este es el punto), «quella dell'altra sera è un'altra storia» (lo del otro día es otra historia)." },
    ],
    esempi: [
      { it: "Questa pizza è buonissima, davvero!", es: "Esta pizza está buenísima, de verdad." },
      { it: "Quel ragazzo parla spagnolo con la madre.", es: "Ese chico habla español con su madre." },
      { it: "Quegli studenti vengono da Siviglia.", es: "Esos estudiantes vienen de Sevilla." },
      { it: "Prendo questa borsa, non quella rossa.", es: "Cojo esta bolsa, no esa roja." },
      { it: "È un bel film italiano degli anni Novanta.", es: "Es una buena película italiana de los años noventa." },
    ],
    usi: [
      { q: "«___ amici spagnoli» (esos):", options: ["Quegli", "Quei", "Quel"], answer: 0, explain: "Ante vocal se usa quegli: quegli amici." },
      { q: "La posición normal del adjetivo calificativo italiano:", options: ["después del nombre", "siempre antes del nombre", "nunca junto al nombre"], answer: 0, explain: "una casa grande; solo bello/grande/nuovo/bravo… van delante con matices." },
    ],
  },

  "cu-a1-07": {
    sezioni: [
      { t: "Come si forma", body: "Las preposiciones a, in, di, da, su se contraen con el artículo: a + il = al, a + lo = allo, a + l' = all', a + i = ai, a + gli = agli, a + la = alla, a + le = alle. Lo mismo ocurre con del/dello/dell'/dei/degli/della/delle (di), nel/nello/nell'/nei/negli/nella/nelle (in), dal/dallo/dall'/dai/dagli/dalla/dalle (da), sul/sullo/sull'/sui/sugli/sulla/sulle (su). Las preposiciones con, per, tra/fra nunca se contraen." },
      { t: "Quando si usa", body: "a indica ciudad y destino puntual (vado a Roma), in indica países y regiones grandes (vivo in Italia, in Toscana) y medios de transporte (in treno, in macchina, in aereo — pero a piedi), di indica posesión y especificación (il libro di Marco), da indica origen y procedencia (vengo da Madrid) y su funciona como el español sobre (il libro è sul tavolo)." },
      { t: "Attenzione! · trampas para hispanohablantes", body: "El español usa «a» para ciudad y país («voy a Italia»); el italiano separa: a + ciudad, in + país. Error típicísimo: «vado a Italia» ✗ → vado in Italia. Con lugares de función hay que memorizar los fijos: a casa, a scuola, a teatro, al mare, al cinema, in ufficio, in banca, in farmacia, in montagna. La preposición española «de» posesiva siempre es di: la casa di mia zia." },
      { t: "Nel parlato", body: "Los italianos usan las formas contraídas incluso cuando la contracción crea ambigüedad: «dal dottore» (del médico), «all'università» (en la universidad). Escucha la música de la frase: la preposición articulada fluye mucho más que la secuencia separada, que suena extranjera." },
    ],
    esempi: [
      { it: "Vado al lavoro in bicicletta quando fa bello.", es: "Voy al trabajo en bicicleta cuando hace bueno." },
      { it: "La chiave è sul tavolo della cucina.", es: "La llave está sobre la mesa de la cocina." },
      { it: "Torniamo dalla spiaggia alle sei.", es: "Volvemos de la playa a las seis." },
      { it: "I miei cugini abitano negli Stati Uniti.", es: "Mis primos viven en los Estados Unidos." },
      { it: "Vengo da Barcellona, e tu?", es: "Vengo de Barcelona, ¿y tú?" },
    ],
    usi: [
      { q: "«Voy ___ Italia en verano»:", options: ["in", "a", "da"], answer: 0, explain: "Países con in: in Italia, in Spagna; a se usa con ciudades." },
      { q: "«Voy a escuela ___ piedi» (a pie):", options: ["a", "in", "su"], answer: 0, explain: "La excepción del medio: a piedi; el resto lleva in (in macchina, in treno)." },
    ],
  },

  "cu-a1-08": {
    sezioni: [
      { t: "Come si forma", body: "Los números hasta mil son regulares: venti, trenta, quaranta… y se unen a la unidad perdiendo la vocal final ante uno y otto: ventuno, ventotto, trentuno. La hora se dice: è l'una (es la una), sono le due/tre/quattro (son las…). Los minutos se añaden con e: le due e dieci, le due e mezza (o e trenta), le due e un quarto (o e quindici). Para las horas siguientes se usa meno: le tre meno un quarto (las tres menos cuarto)." },
      { t: "Quando si usa", body: "Para preguntar la hora: «Che ore sono?» o «Che ora è?». Para preguntar el momento de un evento: «A che ora…?» con la respuesta en all'/alle: all'una, alle tre, a mezzogiorno, a mezzanotte. Los horarios públicos usan el formato de 24 horas: «Il treno parte alle diciotto e trenta». Con precios y números de teléfono, los italianos dicen las cifras una a una." },
      { t: "Attenzione! · trampas para hispanohablantes", body: "El español «son las dos» traduce sono le due — nunca «è le due». El «y media» concuerda en femenino con ora: e mezza, no «e medio». El «en punto» italiano existe pero es enfático: le otto in punto; lo normal es decir solo alle otto. Y el verbo español «salir» del tren se dice partire: «Il treno parte alle nove»." },
      { t: "Nel parlato", body: "Para quedar, los italianos dicen «Ci vediamo alle sette e un quarto davanti al bar». mezzogiorno y mezzanotte son sustantivos fijos que se usan sin artículo: a mezzogiorno, dopo mezzanotte." },
    ],
    esempi: [
      { it: "Il treno per Roma parte alle nove e mezza.", es: "El tren a Roma sale a las nueve y media." },
      { it: "È l'una e un quarto: andiamo a mangiare!", es: "Es la una y cuarto: ¡vamos a comer!" },
      { it: "A che ora apri il negozio? Alle nove in punto.", es: "¿A qué hora abres la tienda? A las nueve en punto." },
      { it: "Questo vino costa diciotto euro la bottiglia.", es: "Este vino cuesta dieciocho euros la botella." },
      { it: "Ci vediamo a mezzogiorno in piazza.", es: "Nos vemos al mediodía en la plaza." },
    ],
    usi: [
      { q: "«Son las tres»:", options: ["Sono le tre.", "È le tre.", "Sono la tre."], answer: 0, explain: "Plural + artículo femenino plural: sono le tre." },
      { q: "«a las ocho»:", options: ["alle otto", "all'otto", "ai otto"], answer: 0, explain: "a + le = alle; all' solo ante vocal: all'una." },
    ],
  },

  "cu-a1-09": {
    sezioni: [
      { t: "Come si forma", body: "piace se conjuga en tercera persona singular o plural: mi piace (me gusta, cosa singular o infinitivo) y mi piacciono (me gustan, cosas plurales). Los pronombres de persona son indirectos: mi, ti, gli (a él), le (a ella), Le (a usted), ci, vi, gli (a ellos). Para enfatizar la persona se añade a + nombre: «A Marco piace il tè»." },
      { t: "Quando si usa", body: "La estructura expresa gustos y preferencias: lo que gusta es el SUJETO gramatical, y la persona que gusta va en pronombre indirecto. Funciona con infinitivos («Mi piace viaggiare»), con sustantivos singulares («Mi piace questa città») y plurales («Mi piacciono i dolci»). En negativo: «Non mi piace il caffè amaro»." },
      { t: "Attenzione! · trampas para hispanohablantes", body: "El español mantiene «me gusta» invariable y cambia el artículo («me gustan los libros» solo cambia el objeto); el italiano obliga a concordar el verbo con la cosa: mi piace il libro / mi piacciono i libri. Y cuando lo que gusta es una PERSONA, el verbo concuerda con ella: «Mi piaci» (me gustas tú), «Ti piaccio?» (¿te gusto?). También existen i miei gusti con piacere: «Che piacevol sorpresa» — registro literario." },
      { t: "Nel parlato", body: "Para intensificar: «Mi piace un sacco» (me gusta un montón), «Mi piace da morire» (me gusta muchísimo). Preguntas sociales típicas: «Ti piace l'Italia?», «Cosa ti piace fare nel tempo libero?»." },
    ],
    esempi: [
      { it: "Mi piace la musica italiana degli anni Ottanta.", es: "Me gusta la música italiana de los años ochenta." },
      { it: "Ti piacciono i dolci al cioccolato?", es: "¿Te gustan los dulces de chocolate?" },
      { it: "A Marco piace viaggiare in treno lentamente.", es: "A Marco le gusta viajar en tren tranquilamente." },
      { it: "Non ci piace arrivare tardi agli appuntamenti.", es: "No nos gusta llegar tarde a las citas." },
      { it: "Mi piaci molto, sei una persona sincera.", es: "Me gustas mucho, eres una persona sincera." },
    ],
    usi: [
      { q: "«Me gustan las películas italianas»:", options: ["Mi piacciono i film italiani.", "Mi piace i film italiani.", "Mi piacciono la film italiani."], answer: 0, explain: "Cosa plural → piacciono." },
      { q: "«A ella le gusta el café»:", options: ["Le piace il caffè.", "Piace il caffè.", "Le piacciono il caffè."], answer: 0, explain: "Pronombre indirecto le + cosa singular → piace." },
    ],
  },

  "cu-a1-10": {
    sezioni: [
      { t: "Come si forma", body: "El artículo determinado tiene siete formas: il (consonante normal), lo (ante z, s + consonante, ps, gn, y semiconsonante: lo studente, lo zaino, lo psicologo), l' (ante vocal: l'amico), la (la casa), l' femenino ante vocal (l'amica), i (i ragazzi), gli (gli amici, gli studenti, gli zaini) y le (le ragazze). La elección depende solo de la palabra que sigue, no del género." },
      { t: "Quando si usa", body: "Con las preposiciones de lugar, el italiano reparte el espacio así: su (sobre: sul tavolo), in (dentro: nel cassetto), sotto (bajo: sotto il letto), davanti a (delante), dietro a (detrás), vicino a (cerca), lontano da (lejos), accanto a (al lado). Los lugares de función llevan formas fijas: a casa, a scuola, in ufficio, in cucina, al mare, in montagna." },
      { t: "Attenzione! · trampas para hispanohablantes", body: "El español tiene un «el» y una «la»; el italiano siete formas que hay que automatizar escuchando. «En casa» español = a casa italiano, SIN preposición in: «Sono a casa» — decir «in casa» suena a dentro de la casa físicamente. Y el plural de lo es gli (gli studenti), mientras que el plural de il es i (i professori): la regla es la misma del singular." },
      { t: "Nel parlato", body: "Para localizar objetos los italianos preguntan «Dov'è…?» y responden con la preposición articulada: «È nel cassetto della cucina». La combinación preposición + artículo es automática para un italiano: sul tavolo, nel piatto, dalla finestra hay que decirlas como si fueran una sola palabra." },
    ],
    esempi: [
      { it: "Lo zaino è sotto il letto, come sempre.", es: "La mochila está debajo de la cama, como siempre." },
      { it: "Gli spaghetti sono nel piatto ancora caldi.", es: "Los espaguetis están en el plato todavía calientes." },
      { it: "Sono a casa tutto il giorno a studiare.", es: "Estoy en casa todo el día estudiando." },
      { it: "Le chiavi sono vicino alla porta d'ingresso.", es: "Las llaves están cerca de la puerta de entrada." },
      { it: "L'amico di Luca è di Napoli, lo conosco bene.", es: "El amigo de Luca es de Nápoles, lo conozco bien." },
    ],
    usi: [
      { q: "«___ studente spagnolo» (el estudiante):", options: ["lo", "il", "l'"], answer: 0, explain: "Ante s + consonante se usa lo: lo studente." },
      { q: "«Estoy en casa»:", options: ["Sono a casa.", "Sono in casa.", "Sono alla casa."], answer: 0, explain: "Locución fija: a casa; in casa solo si insistes en 'dentro'." },
    ],
  },

  "cu-a1-11": {
    sezioni: [
      { t: "Come si forma", body: "ne es un pronombre invariable que sustituye a «di + nombre» o a una cantidad de algo ya mencionado. Se coloca antes del verbo conjugado, como todos los pronombres: «Ne voglio tre». Con los verbos en infinitivo se une al final: «Vorrei prenderne due»." },
      { t: "Quando si usa", body: "Sus dos usos principales son: (1) cantidades — «Quante mele vuoi? Ne voglio tre» (quiero tres [de ellas]); (2) temas y especificaciones — «Parliamo di politica? Ne parliamo domani» (hablamos de eso mañana). Con la edad: «Quanti anni hai? Ne ho ventidue», porque gli anni son «de tu vida»." },
      { t: "Attenzione! · trampas para hispanohablantes", body: "El español no tiene un equivalente directo: «Ne voglio tre» = «quiero tres (de ellos)», con el «de ellos» omitido. No confundas ne con ci: ci sustituye lugares (a Roma → ci vado), ne sustituye cosas con di o cantidades. Error típico: responder «Voglio tre» sin ne cuando se pregunta «Quante ne vuoi?» — el italiano necesita el ne." },
      { t: "Nel parlato", body: "En las compras y los bares el ne es omnipresente: «Ne prendo due, grazie», «Quanto ne vuole?», «Non ne ho più» (no me queda). Es imposible pedir en italiano sin él." },
    ],
    esempi: [
      { it: "Quante mele vuoi? Ne voglio tre, grazie.", es: "¿Cuántas manzanas quieres? Quiero tres, gracias." },
      { it: "C'è del vino? Sì, ne ho ancora una bottiglia.", es: "¿Hay vino? Sí, todavía me queda una botella." },
      { it: "Che pensi di Marco? Ne parlo volentieri: è bravissimo.", es: "¿Qué piensas de Marco? Hablo de él encantado: es buenísimo." },
      { it: "Hai figli? Sì, ne ho due piccolissimi.", es: "¿Tienes hijos? Sí, tengo dos pequeñísimos." },
      { it: "Bella macchina! Ne vorrei una uguale.", es: "¡Qué coche! Querría uno igual." },
    ],
    usi: [
      { q: "«¿Cuántos años tienes? Tengo 28»:", options: ["Quanti anni hai? Ne ho ventotto.", "Quanti anni hai? Ho ventotto.", "Quanti anni hai? Ci ho ventotto."], answer: 0, explain: "La edad se responde con ne: ne ho ventotto." },
      { q: "«Hablamos de eso mañana»:", options: ["Ne parliamo domani.", "Ci parliamo domani.", "Parliamo domani di questo sì."], answer: 0, explain: "di + eso → ne; ci sería 'allí'." },
    ],
  },

  "cu-a1-12": {
    sezioni: [
      { t: "La mappa di A1", body: "En este nivel has aprendido: essere y avere (identidad, posesión, edad, sensaciones), el presente regular y los reflexivos, c'è/ci sono, los artículos determinado, indeterminado y partitivo, questo/quello, las preposiciones articuladas, la hora, mi piace e il pronombre ne. Todas estas piezas trabajan juntas en cualquier conversación real de supervivencia." },
      { t: "Gli errori numero uno", body: "Los cinco errores más frecuentes de hispanohablantes en A1: (1) «è le due» ✗ → sono le due; (2) «ci sono un problema» ✗ → c'è un problema; (3) «sono stanco» dicho con estar/ser confundido — essere cubre ambos; (4) «mi piace i film» ✗ → mi piacciono i film; (5) «vado a Italia» ✗ → vado in Italia. Corregirlos eleva tu italiano instantáneamente." },
      { t: "Come mescolare tutto", body: "Una presentación real encadena todas las estructuras: «Sono Alejandro, sono peruviano, ho ventotto anni e sono studente. Abito a Milano in periferia, mi piace la città e ci sono tanti parchi vicino a casa. Il sabato vado al mercato con degli amici: compriamo della frutta e poi mangiamo insieme»." },
      { t: "Il prossimo passo", body: "Con A1 puedes presentarte, localizar objetos, pedir comida y hablar de tu rutina. En A2 llegarán los pasados (passato prossimo e imperfetto), el futuro y los mandatos: la llave para contar historias y hacer planes." },
    ],
    esempi: [
      { it: "Ciao! Sono Marta e vengo da Siviglia.", es: "¡Hola! Soy Marta y vengo de Sevilla." },
      { it: "Ci sono due caffè italiani bellissimi in questa strada.", es: "Hay dos cafés italianos bellísimos en esta calle." },
      { it: "Mi piacciono molto le città tranquille come Firenze.", es: "Me gustan mucho las ciudades tranquilas como Florencia." },
      { it: "Ho vent'anni, sono studente e abito con degli amici.", es: "Tengo veinte años, soy estudiante y vivo con unos amigos." },
      { it: "Il venerdì vado al cinema con i miei colleghi.", es: "Los viernes voy al cine con mis colegas." },
    ],
    usi: [
      { q: "«Hay un problema con la reserva»:", options: ["C'è un problema con la prenotazione.", "Ci sono un problema con la prenotazione.", "È un problema con la prenotazione."], answer: 0, explain: " Singular → c'è." },
      { q: "«Estamos cansados y tenemos hambre»:", options: ["Siamo stanchi e abbiamo fame.", "Abbiamo stanchi e siamo fame.", "Stiamo stanchi e abbiamo fame."], answer: 0, explain: "essere para el estado, avere para el hambre." },
    ],
  },
};
