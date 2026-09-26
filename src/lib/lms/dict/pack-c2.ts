import { D } from "./entry";

/* ── Pack C2 · dominio total, literario y especializado (MCER C2) ── */

export const PACK_C2: import("../types").VocabWord[] = [
  /* ══ literario y raro C2 ══ */
  D("d6-lustro", "lustro", "lustro (cinco años)", "ˈlustro", "sostantivo", "tempo", "C2", 5, { it: "È passato un lustro dal nostro ultimo incontro.", es: "Ha pasado un lustro desde nuestro último encuentro." }, { gender: "m", register: "letterario" }),
  D("d6-letargo", "letargo", "letargo", "leˈtargo", "sostantivo", "salud", "C2", 5, { it: "Sveglio dal letargo invernale.", es: "Despierto del letargo invernal." }, { gender: "m", register: "letterario" }),
  D("d6-effimero", "effimero", "efímero", "efˈfiːmero", "aggettivo", "astratto", "C2", 5, { it: "La gloria effimera dei social.", es: "La gloria efímera de las redes." }, { register: "letterario", ant: ["duraturo", "perenne"] }),
  D("d6-caduco", "caduco", "caduco / pasajero", "kaˈduːko", "aggettivo", "astratto", "C2", 5, { it: "I beni caduchi di questo mondo.", es: "Los bienes caducos de este mundo." }, { register: "letterario" }),
  D("d6-perenne", "perenne", "perenne / eterno", "peˈrɛnne", "aggettivo", "astratto", "C2", 5, { it: "Un dilemma perenne della filosofia.", es: "Un dilema perenne de la filosofía." }, { ant: ["effimero", "caduco"] }),
  D("d6-atavico", "atavico", "atávico", "ataˈviːko", "aggettivo", "astratto", "C2", 5, { it: "Una paura atavica del buio.", es: "Un miedo atávico a la oscuridad." }, { register: "letterario" }),
  D("d6-connaturale", "connaturale", "connatural / inherente", "konnatuˈraːle", "aggettivo", "astratto", "C2", 5, { it: "Un istinto connaturale all'uomo.", es: "Un instinto connatural al hombre." }, { register: "tecnico" }),
  D("d6-assuefazione", "assuefazione", "habitución / acostumbramiento", "assuefatˈtsjoːne", "sostantivo", "salud", "C2", 5, { it: "L'assuefazione rende il piacere più debole.", es: "La habituación hace el placer más débil." }, { gender: "f", register: "tecnico" }),
  D("d6-sconforto", "sconforto", "desaliento / abatimiento", "skonˈforto", "sostantivo", "emozioni", "C2", 5, { it: "Un attimo di sconforto, poi la forza di riprovare.", es: "Un momento de desaliento, luego la fuerza de reintentar." }, { gender: "m", ant: ["conforto"] }),
  D("d6-letizia", "letizia", "alborozo / alegría", "letitˈtsia", "sostantivo", "emozioni", "C2", 5, { it: "Con infantile letizia aprì i regali.", es: "Con alborozo infantil abrió los regalos." }, { gender: "f", register: "letterario", syn: ["gioia", "allegria"] }),
  D("d6-gaudi", "gaudio", "gozo", "ˈɡaudio", "sostantivo", "emozioni", "C2", 5, { it: "Il gaudio della lettura silenziosa.", es: "El gozo de la lectura silenciosa." }, { gender: "m", register: "letterario", note: "En desuso: hoy suena irónico o muy culto. 'Che gaudio!'" }),
  D("d6-taciturno", "taciturno", "taciturno", "tatʃiˈturno", "aggettivo", "emozioni", "C2", 5, { it: "Un ospite taciturno osserva tutto.", es: "Un invitado taciturno lo observa todo." }, { syn: ["silenzioso"], ant: ["loquace"] }),
  D("d6-loquace", "loquace", "locuaz / hablador", "loˈkwatʃe", "aggettivo", "emozioni", "C2", 5, { it: "Un venditore loquace e simpatico.", es: "Un vendedor locuaz y simpático." }, { ant: ["taciturno"] }),
  D("d6-estolto", "stolto", "necio / insensato", "ˈstolto", "aggettivo", "emozioni", "C2", 5, { it: "Lo stolto parla, il saggio tace.", es: "El necio habla, el sabio calla." }, { register: "letterario", syn: ["sciocco"], note: "Muy literario: aparece en Dante e Evangelio («lo stolto costruisce sulla sabbia»)." }),
  D("d6-viltà", "viltà", "bajeza / cobardía", "vilˈta", "sostantivo", "emozioni", "C2", 5, { it: "La viltà di chi tace davanti all'ingiustizia.", es: "La bajeza de quien calla ante la injusticia." }, { gender: "f", register: "letterario", ant: ["coraggio", "nobiltà"] }),
  D("d6-fermento", "fermento", "efervescencia / agitación", "ferˈmento", "sostantivo", "attualita", "C2", 5, { it: "Un fermento culturale percorre la città.", es: "Una efervescencia cultural recorre la ciudad." }, { gender: "m", register: "formale" }),
  D("d6-estasi", "estasi", "éxtasis", "eˈstasi", "sostantivo", "emozioni", "C2", 4, { it: "Guardava il tramonto in estasi.", es: "Miraba el atardecer en éxtasis." }, { gender: "f" }),
  D("d6-estenuante", "estenuante", "agotador", "estenuante", "aggettivo", "lavoro", "C2", 5, { it: "Una giornata estenuante di riunioni.", es: "Una jornada agotadora de reuniones." }),
  D("d6-diligenza2", "diligenza", "diligencia (carroza) / celo", "diliˈdʒenttsa", "sostantivo", "astratto", "C2", 5, { it: "Con grande diligenza archiviò i documenti.", es: "Con gran celo archivó los documentos." }, { gender: "f", note: "Doble sentido: celo/esmero Y la diligencia del Oeste (carrozza)." }),

  /* ══ giros idiomáticos y coloquiales cultos C2 ══ */
  D("d6-capitombolo", "capitombolo", "voltereta / traspié", "kapitˈtɔmbolo", "sostantivo", "sport", "C2", 5, { it: "Un capitombolo in bicicletta davanti a tutti.", es: "Una voltereta en bicicleta delante de todos." }, { gender: "m", register: "colloquiale" }),
  D("d6-sbandierare", "sbandierare", "pregonar / exhibir con fanfarria", "zbandieˈraːre", "verbo", "comunicazione", "C2", 5, { it: "Sbandiera i suoi successi a ogni cena.", es: "Pregona sus éxitos en cada cena." }, { register: "colloquiale" }),
  D("d6-pistolotto", "pistolotto", "sermón / perorata", "pistoˈlɔtto", "sostantivo", "comunicazione", "C2", 5, { it: "Mio padre fa il solito pistolotto sul risparmio.", es: "Mi padre suelta el sermón de siempre sobre el ahorro." }, { gender: "m", register: "colloquiale" }),
  D("d6-chiacchiericcio", "chiacchiericcio", "murmullo / parloterío", "kjakkeˈrittʃo", "sostantivo", "comunicazione", "C2", 5, { it: "Un chiacchiericcio sommesso riempie il salone.", es: "Un murmullo tenue llena el salón." }, { gender: "m", register: "letterario" }),
  D("d6-borbottio", "borbottio", "borboteo / refunfuño", "borˈbɔttio", "sostantivo", "comunicazione", "C2", 5, { it: "Dal piano di sopra arriva un borbottio.", es: "Del piso de arriba llega un borboteo." }, { gender: "m" }),
  D("d6-tamtam", "tam tam", "boca a boca / runrun", "tam tam", "sostantivo", "comunicazione", "C2", 5, { it: "Il tam tam sul web ha amplificato la notizia.", es: "El boca a boca en la red amplificó la noticia." }, { gender: "m", register: "colloquiale" }),
  D("d6-farsa", "farsa", "farsa", "ˈfarsa", "sostantivo", "cinema", "C2", 4, { it: "Il processo si è rivelato una farsa.", es: "El proceso resultó una farsa." }, { gender: "f" }),
  D("d6-capolavoro", "capolavoro", "obra maestra", "kapolaˈvoːro", "sostantivo", "letteratura", "C2", 3, { it: "La Commedia è il capolavoro di Dante.", es: "La Comedia es la obra maestra de Dante." }, { gender: "m", collocations: ["capolavoro letterario"] }),
  D("d6-abborracciato", "alla bell'e meglio", "a lo hecho / malamente", "alla ˌbelle ˈmeʎʎo", "espressione", "astratto", "C2", 5, { it: "Sistemai la valigia alla bell'e meglio e corsi.", es: "Arreglé la maleta a lo hecho y corrí." }, { register: "colloquiale" }),
  D("d6-per-fatti-suoi", "per i fatti suoi", "por su cuenta / a lo suyo", "per i ˈfatti swɔi", "espressione", "astratto", "C2", 4, { it: "Camminava per i fatti suoi, ignaro di tutto.", es: "Caminaba a lo suyo, ajeno a todo." }),
  D("d6-di-tacito", "di tacito accordo", "de mutuo acuerdo (tácito)", "di ˈtatʃito akˈkordo", "espressione", "relazioni", "C2", 5, { it: "Si separarono di tacito accordo.", es: "Se separaron de tácito acuerdo." }),
  D("d6-senzatte", "senz'altro", "sin duda / desde luego", "senˈtsatro", "avverbio", "connettivi", "C2", 3, { it: "Senz'altro è il miglior ristorante del quartiere.", es: "Sin duda es el mejor restaurante del barrio." }, { note: "senz'altro = sin duda. ¡Ojo! como respuesta también = 'de nada / no es nada' (grazie! — senz'altro)." }),

  /* ══ especializado y técnico C2 ══ */
  D("d6-onere", "onere", "carga / gravamen (obligación)", "ˈoːnere", "sostantivo", "istituzioni", "C2", 5, { it: "L'onere della prova spetta all'accusa.", es: "La carga de la prueba corresponde a la acusación." }, { gender: "m", register: "tecnico", collocations: ["onere della prova"] }),
  D("d6-escussione", "escussione", "ejecución / exigencia (legal)", "eskusˈsjoːne", "sostantivo", "istituzioni", "C2", 5, { it: "L'escussione della fideiussione.", es: "La ejecución del aval." }, { gender: "f", register: "tecnico" }),
  D("d6-sopravvenienza", "sopravvenienza", "sobrevenida (hecho nuevo)", "sopravvenjenˈntsa", "sostantivo", "istituzioni", "C2", 5, { it: "Una sopravvenienza economica cambia il quadro.", es: "Una sobrevenida económica cambia el cuadro." }, { gender: "f", register: "tecnico" }),
  D("d6-esodati", "esodo", "éxodo", "ˈɛːzodo", "sostantivo", "istituzioni", "C2", 5, { it: "L'esodo rurale degli anni Sessanta.", es: "El éxodo rural de los años sesenta." }, { gender: "m" }),
  D("d6-usura", "usura", "usura (legal)", "ˈuːzura", "sostantivo", "istituzioni", "C2", 5, { it: "Condannato per usura e riciclaggio.", es: "Condenado por usura y blanqueo." }, { gender: "f", register: "tecnico", note: "usura = usura (crimen financiero). Diverso de 'usura' = desgaste (de un telaio: l'usura del tempo)." }),
  D("d6-pignoramento", "pignoramento", "embargo", "piɲoraˈmento", "sostantivo", "istituzioni", "C2", 5, { it: "Il pignoramento dello stipendio.", es: "El embargo del sueldo." }, { gender: "m", register: "tecnico" }),
  D("d6-catasto", "catasto", "catastro", "kaˈtasto", "sostantivo", "istituzioni", "C2", 5, { it: "Visura al catasto urbano.", es: "Consulta al catastro urbano." }, { gender: "m", register: "tecnico" }),

  /* ═† matices de estilo C2 ══ */
  D("d6-quindi-dunque", "dunque / dunque dunque", "por lo tanto / veamos", "ˈdunke", "congiunzione", "connettivi", "C2", 2, { it: "Dunque dunque, signori, decidiamo.", es: "Veamos entonces, señores, decidamos." }, { register: "formale", note: "Repetido, abre deliberaciones o razonamientos — giro retórico típico." }),
  D("d6-orbene", "orbene", "bien / pues bien", "orˈbɛne", "congiunzione", "connettivi", "C2", 5, { it: "Orbene, vediamo i fatti concreti.", es: "Pues bien, veamos los hechos concretos." }, { register: "formale" }),
  D("d6-insomma", "insomma", "en fin / o sea / en resumen", "inˈsɔmma", "avverbio", "connettivi", "C2", 3, { it: "Insomma, non mi hai convinto.", es: "En fin, no me has convencido." }),
  D("d6-tuttogià", "per giunta", "para colmo / además", "per ˈdʒunta", "espressione", "connettivi", "C2", 4, { it: "È in ritardo e, per giunta, di cattivo umore.", es: "Llega tarde y, para colmo, de mal humor." }),
  D("d6-mica-male", "niente male", "nada mal / bastante bien", "ˈnjɛnte ˈmale", "espressione", "emozioni", "C2", 2, { it: "Niente male, il tuo italiano!", es: "Nada mal, ¡tu italiano!" }, { register: "colloquiale" }),
  D("d6-pane-al-pane", "pane al pane e vino al vino", "llamar pan al pan", "ˈpaːne al ˈpaːne e ˈviːno al ˈviːno", "espressione", "comunicazione", "C2", 4, { it: "Io dico pane al pane e vino al vino.", es: "Yo llamo al pan, pan y al vino, vino." }),
  D("d6-nonvedo", "non vedere l'ora di", "no ver la hora de", "non veˈdere lˈoːra", "espressione", "emozioni", "C2", 2, { it: "Non vedo l'ora di visitare Venezia!", es: "¡No veo la hora de visitar Venecia!" }, { note: "non vedere l'ora DI + infinitivo — construcción esencial C1." }),
  D("d6-inbocca", "in bocca al lupo", "¡mucha mierda! / ¡buena suerte!", "in ˈbokka al ˈlupo", "espressione", "saluti", "C2", 3, { it: "— In bocca al lupo! — Crepi!", es: "— ¡Mucha mierda! — ¡Gracias!" }, { note: "La respuesta ritual es ¡Crepi! (que muera). NO se dice 'grazie', trae mala suerte." }),
  D("d6-inpetto", "avere un asso nella manica", "tener un as bajo la manga", "avere un ˈasso nella ˈmannitʃa", "espressione", "astratto", "C2", 4, { it: "Il capitano ha un asso nella manica.", es: "El capitán tiene un as bajo la manga." }),
  D("d6-malpance", "avere lo stomaco", "tener estómago (para algo)", "avere lo ˈstomako", "espressione", "astratto", "C2", 4, { it: "Non ho lo stomaco per certi discorsi.", es: "No tengo estómago para ciertos discursos." }),
];
