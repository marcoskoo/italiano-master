import type { VocabWord, WordCategory } from "../types";

/* ── Vocabolario EXTRA · paquete de expansión v1.1 ─────────────────── */

const W = (
  id: string, it: string, es: string, pron: string,
  type: VocabWord["type"], cat: WordCategory, level: VocabWord["level"],
  example: { it: string; es: string },
  extra?: Partial<Pick<VocabWord, "gender" | "plural" | "syn" | "ant" | "related">>
): VocabWord => ({ id, it, es, pron, type, cat, level, example, ...extra });

export const VOCAB_EXTRA: VocabWord[] = [
  /* ══ tempo · días, meses, estaciones ══ */
  W("w2-lunedi", "lunedì", "lunes", "lunedí", "sostantivo", "tempo", "A1", { it: "Il lunedì vado in palestra.", es: "Los lunes voy al gimnasio." }, { gender: "m", plural: "lunedì" }),
  W("w2-martedi", "martedì", "martes", "martedí", "sostantivo", "tempo", "A1", { it: "Ci vediamo martedì sera.", es: "Nos vemos el martes por la noche." }, { gender: "m", plural: "martedì" }),
  W("w2-mercoledi", "mercoledì", "miércoles", "merkoledí", "sostantivo", "tempo", "A1", { it: "Mercoledì ho l'italiano.", es: "El miércoles tengo italiano." }, { gender: "m", plural: "mercoledì" }),
  W("w2-giovedi", "giovedì", "jueves", "yovedí", "sostantivo", "tempo", "A1", { it: "Giovedì c'è il mercato.", es: "El jueves hay mercado." }, { gender: "m", plural: "giovedì" }),
  W("w2-venerdi", "venerdì", "viernes", "venerdí", "sostantivo", "tempo", "A1", { it: "Venerdì pizza con gli amici!", es: "¡El viernes pizza con los amigos!" }, { gender: "m", plural: "venerdì" }),
  W("w2-sabato", "sabato", "sábado", "sábato", "sostantivo", "tempo", "A1", { it: "Il sabato dormo fino a tardi.", es: "El sábado duermo hasta tarde." }, { gender: "m", plural: "sabati" }),
  W("w2-domenica", "domenica", "domingo", "doménika", "sostantivo", "tempo", "A1", { it: "La domenica pranzo dai nonni.", es: "El domingo almuerzo en casa de los abuelos." }, { gender: "f", plural: "domeniche" }),
  W("w2-oggi", "oggi", "hoy", "óyyi", "avverbio", "tempo", "A1", { it: "Oggi fa caldo.", es: "Hoy hace calor." }, { ant: ["ieri", "domani"] }),
  W("w2-domani", "domani", "mañana (día siguiente)", "dománi", "avverbio", "tempo", "A1", { it: "A domani!", es: "¡Hasta mañana!" }, { ant: ["ieri"] }),
  W("w2-ieri", "ieri", "ayer", "iéri", "avverbio", "tempo", "A1", { it: "Ieri sono andato al cinema.", es: "Ayer fui al cine." }, { ant: ["domani"] }),
  W("w2-primavera", "primavera", "primavera", "primavéra", "sostantivo", "tempo", "A1", { it: "In primavera fioriscono i ciliegi.", es: "En primavera florecen los cerezos." }, { gender: "f", plural: "primavere" }),
  W("w2-estate", "estate", "verano", "estáte", "sostantivo", "tempo", "A1", { it: "In estate vado al mare.", es: "En verano voy al mar." }, { gender: "f", plural: "estati" }),
  W("w2-autunno", "autunno", "otoño", "autúnno", "sostantivo", "tempo", "A1", { it: "D'autunno piove spesso.", es: "En otoño llueve a menudo." }, { gender: "m", plural: "autunni" }),
  W("w2-inverno", "inverno", "invierno", "invérno", "sostantivo", "tempo", "A1", { it: "D'inverno scio in montagna.", es: "En invierno esquío en la montaña." }, { gender: "m", plural: "inverni" }),

  /* ══ colori ══ */
  W("w2-rosso", "rosso", "rojo", "rósso", "aggettivo", "colori", "A1", { it: "Mi colore preferito è il rosso.", es: "Mi color preferido es el rojo." }),
  W("w2-blu", "blu", "azul", "blu", "aggettivo", "colori", "A1", { it: "Il mare oggi è blu intenso.", es: "El mar hoy es azul intenso." }),
  W("w2-giallo", "giallo", "amarillo", "yállo", "aggettivo", "colori", "A1", { it: "Ho comprato un ombrello giallo!", es: "¡Compré un paraguas amarillo!" }),
  W("w2-verde", "verde", "verde", "vérde", "aggettivo", "colori", "A1", { it: "Il semaforo è verde, puoi passare.", es: "El semáforo está en verde, puedes pasar." }),
  W("w2-bianco", "bianco", "blanco", "biánko", "aggettivo", "colori", "A1", { it: "Una mozzarella bianca e fresca.", es: "Una mozzarella blanca y fresca." }),
  W("w2-nero", "nero", "negro", "néro", "aggettivo", "colori", "A1", { it: "Portavo un vestito nero.", es: "Llevaba un vestido negro." }),
  W("w2-grigio", "grigio", "gris", "gríyo", "aggettivo", "colori", "A1", { it: "Il cielo grigio annuncia pioggia.", es: "El cielo gris anuncia lluvia." }),
  W("w2-rosa", "rosa", "rosa", "rósa", "aggettivo", "colori", "A1", { it: "Le rose rosa sono le mie preferite.", es: "Las rosas rosas son mis preferidas." }),

  /* ══ corpo ══ */
  W("w2-testa", "testa", "cabeza", "tésta", "sostantivo", "corpo", "A2", { it: "Mi fa male la testa.", es: "Me duele la cabeza." }, { gender: "f", plural: "teste" }),
  W("w2-occhio", "occhio", "ojo", "ókio", "sostantivo", "corpo", "A2", { it: "Chiudi gli occhi e desidera qualcosa.", es: "Cierra los ojos y pide un deseo." }, { gender: "m", plural: "occhi" }),
  W("w2-orecchio", "orecchio", "oreja", "orékio", "sostantivo", "corpo", "A2", { it: "Ho l'orecchio assoluto per la musica.", es: "Tengo oído absoluto para la música." }, { gender: "m", plural: "orecchi" }),
  W("w2-naso", "naso", "nariz", "násso", "sostantivo", "corpo", "A2", { it: "Il profumo del caffè si sente col naso.", es: "El aroma del café se siente con la nariz." }, { gender: "m", plural: "nasi" }),
  W("w2-bocca", "bocca", "boca", "bókka", "sostantivo", "corpo", "A2", { it: "Apri la bocca e di' ah.", es: "Abre la boca y di ah." }, { gender: "f", plural: "bocche" }),
  W("w2-braccio", "braccio", "brazo", "brátcho", "sostantivo", "corpo", "A2", { it: "Ho un tatuaggio sul braccio.", es: "Tengo un tatuaje en el brazo." }, { gender: "m", plural: "braccia" }),
  W("w2-gamba", "gamba", "pierna", "gámba", "sostantivo", "corpo", "A2", { it: "Dopo la maratona mi facevano male le gambe.", es: "Después del maratón me dolían las piernas." }, { gender: "f", plural: "gambe" }),
  W("w2-cuore", "cuore", "corazón", "kuóre", "sostantivo", "corpo", "A2", { it: "Il cuore batte più forte quando sei innamorato.", es: "El corazón late más fuerte cuando estás enamorado." }, { gender: "m", plural: "cuori" }),
  W("w2-stomaco", "stomaco", "estómago", "stómako", "sostantivo", "corpo", "A2", { it: "Ho lo stomaco sottosopra per l'emozione.", es: "Tengo el estómago del revés por la emoción." }, { gender: "m", plural: "stomachi" }),
  W("w2-schiena", "schiena", "espalda", "skiéna", "sostantivo", "corpo", "A2", { it: "Il massaggiatore mi ha sistemato la schiena.", es: "El masajista me arregló la espalda." }, { gender: "f", plural: "schiene" }),

  /* ══ animali ══ */
  W("w2-cane", "cane", "perro", "káne", "sostantivo", "animali", "A1", { it: "Il cane scodinzola quando è felice.", es: "El perro mueve la cola cuando está feliz." }, { gender: "m", plural: "cani" }),
  W("w2-gatto", "gatto", "gato", "gátto", "sostantivo", "animali", "A1", { it: "Il gatto dorme sul divano.", es: "El gato duerme en el sofá." }, { gender: "m", plural: "gatti" }),
  W("w2-uccello", "uccello", "pájaro", "uchéllo", "sostantivo", "animali", "A1", { it: "Un uccello canta sul davanzale.", es: "Un pájaro canta en el alféizar." }, { gender: "m", plural: "uccelli" }),
  W("w2-cavallo", "cavallo", "caballo", "kávallo", "sostantivo", "animali", "A1", { it: "Cavalco un cavallo nero.", es: "Monto un caballo negro." }, { gender: "m", plural: "cavalli" }),
  W("w2-pesce", "pesce", "pez", "pésshe", "sostantivo", "animali", "A1", { it: "Nel Mediterraneo nuotano pesci colorati.", es: "En el Mediterráneo nadan peces de colores." }, { gender: "m", plural: "pesci" }),
  W("w2-farfalla", "farfalla", "mariposa", "farfálla", "sostantivo", "animali", "A1", { it: "Una farfalla si è posata sul fiore.", es: "Una mariposa se posó en la flor." }, { gender: "f", plural: "farfalle" }),
  W("w2-lupo", "lupo", "lobo", "lúpo", "sostantivo", "animali", "A2", { it: "Nello stemma di L'Aquila c'è un lupo.", es: "En el escudo de L'Aquila hay un lobo." }, { gender: "m", plural: "lupi" }),
  W("w2-delfino", "delfino", "delfín", "delfíno", "sostantivo", "animali", "A2", { it: "Nel golfo di Napoli si vedono i delfini.", es: "En el golfo de Nápoles se ven los delfines." }, { gender: "m", plural: "delfini" }),

  /* ══ natura ══ */
  W("w2-sole", "il sole", "el sol", "sóle", "sostantivo", "natura", "A1", { it: "Il sole tramonta sul mare.", es: "El sol se pone sobre el mar." }, { gender: "m", plural: "i soli" }),
  W("w2-luna", "luna", "luna", "lúna", "sostantivo", "natura", "A1", { it: "Stasera c'è la luna piena.", es: "Esta noche hay luna llena." }, { gender: "f", plural: "lune" }),
  W("w2-mare", "il mare", "el mar", "máre", "sostantivo", "natura", "A1", { it: "D'estate vivo in riva al mare.", es: "En verano vivo a orillas del mar." }, { gender: "m", plural: "i mari" }),
  W("w2-montagna", "montagna", "montaña", "montánya", "sostantivo", "natura", "A1", { it: "In montagna l'aria è pulita.", es: "En la montaña el aire es limpio." }, { gender: "f", plural: "montagne" }),
  W("w2-albero", "albero", "árbol", "álbero", "sostantivo", "natura", "A1", { it: "Un albero di limoni nel giardino.", es: "Un árbol de limones en el jardín." }, { gender: "m", plural: "alberi" }),
  W("w2-fiore", "fiore", "flor", "fióre", "sostantivo", "natura", "A1", { it: "Le hai portato un mazzo di fiori?", es: "¿Le llevaste un ramo de flores?" }, { gender: "m", plural: "fiori" }),

  /* ══ svago · tiempo libre ══ */
  W("w2-hobby", "hobby", "pasatiempo", "hóbby", "sostantivo", "svago", "A1", { it: "Il mio hobby è cucinare.", es: "Mi pasatiempo es cocinar." }, { gender: "m", plural: "hobby" }),
  W("w2-fotografia", "fotografia", "fotografía", "fotografía", "sostantivo", "svago", "A2", { it: "La fotografia in bianco e nero mi affascina.", es: "La fotografía en blanco y negro me fascina." }, { gender: "f", plural: "fotografie" }),
  W("w2-cucinare", "cucinare", "cocinar", "kuchináre", "verbo", "svago", "A1", { it: "Mi piace cucinare la pasta al pomodoro.", es: "Me gusta cocinar la pasta al tomate." }),
  W("w2-passeggiata", "passeggiata", "paseo", "pasesyyáta", "sostantivo", "svago", "A2", { it: "La passeggiata del dopo cena è un rito italiano.", es: "El paseo de después de cenar es un rito italiano." }, { gender: "f", plural: "passeggiate" }),
  W("w2-giardino", "giardino", "jardín", "yardíno", "sostantivo", "svago", "A1", { it: "Coltivo le erbe aromatiche in giardino.", es: "Cultivo hierbas aromáticas en el jardín." }, { gender: "m", plural: "giardini" }),
  W("w2-campeggio", "campeggio", "camping", "kampéyyo", "sostantivo", "svago", "A2", { it: "Facciamo campeggio in Sardegna.", es: "Hacemos camping en Cerdeña." }, { gender: "m", plural: "campeggi" }),
  W("w2-gita", "gita", "excursión", "yíta", "sostantivo", "svago", "A2", { it: "Domenica gita al lago di Como.", es: "El domingo, excursión al lago de Como." }, { gender: "f", plural: "gite", syn: ["escursione"] }),
  W("w2-festival", "festival", "festival", "féstival", "sostantivo", "svago", "B1", { it: "Il Festival di Sanremo unisce generazioni.", es: "El Festival de Sanremo une generaciones." }, { gender: "m", plural: "festival" }),

  /* ══ ristorante (ampliación) ══ */
  W("w2-antipasto", "antipasto", "entrante", "antipásto", "sostantivo", "ristorante", "A2", { it: "Da antipasto prendo una caprese.", es: "De entrante pido una caprese." }, { gender: "m", plural: "antipasti" }),
  W("w2-primopiatto", "primo piatto", "primer plato", "prímo piátto", "sostantivo", "ristorante", "A2", { it: "Il primo piatto era una carbonara!", es: "¡El primer plato era una carbonara!" }, { gender: "m", plural: "primi piatti" }),
  W("w2-secondopiatto", "secondo piatto", "segundo plato", "sekóndo piátto", "sostantivo", "ristorante", "A2", { it: "Per secondo, orata al forno.", es: "De segundo, dorada al horno." }, { gender: "m", plural: "secondi piatti" }),
  W("w2-dolce", "il dolce", "el postre", "dólche", "sostantivo", "ristorante", "A2", { it: "Il tiramisù è il dolce della casa.", es: "El tiramisú es el postre de la casa." }, { gender: "m", plural: "i dolci" }),
  W("w2-contorno", "contorno", "guarnición", "kontórno", "sostantivo", "ristorante", "A2", { it: "Come contorno, patate al rosmarino.", es: "De guarnición, patatas al romero." }, { gender: "m", plural: "contorni" }),
  W("w2-prenotare", "prenotare", "reservar", "prenotáre", "verbo", "ristorante", "A2", { it: "Ho prenotato un tavolo per quattro.", es: "Reservé una mesa para cuatro." }),
  W("w2-cameriere", "cameriere", "camarero", "kameiére", "sostantivo", "ristorante", "A2", { it: "Cameriere, il conto per favore!", es: "¡Camarero, la cuenta por favor!" }, { gender: "m", plural: "camerieri" }),
  W("w2-mancia", "mancia", "propina", "máncha", "sostantivo", "ristorante", "B1", { it: "In Italia la mancia non è obbligatoria, ma si lascia.", es: "En Italia la propina no es obligatoria, pero se deja." }, { gender: "f", plural: "mance" }),

  /* ══ salud (ampliación) ══ */
  W("w2-farmacia", "farmacia", "farmacia", "farmachía", "sostantivo", "salud", "A2", { it: "La farmacia di turno è in piazza.", es: "La farmacia de guardia está en la plaza." }, { gender: "f", plural: "farmacie" }),
  W("w2-ricettamedica", "ricetta medica", "receta médica", "richétta médika", "sostantivo", "salud", "B1", { it: "Serve la ricetta per questo antibiotico.", es: "Se necesita receta para este antibiótico." }, { gender: "f", plural: "ricette mediche" }),
  W("w2-febbre", "febbre", "fiebre", "fébbre", "sostantivo", "salud", "A2", { it: "Ho la febbre a 38.", es: "Tengo 38 de fiebre." }, { gender: "f", plural: "febbri" }),
  W("w2-tosse", "tosse", "tos", "tósse", "sostantivo", "salud", "A2", { it: "La tosse mi tiene sveglio.", es: "La tos me mantiene despierto." }, { gender: "f", plural: "tossi" }),
  W("w2-ambulatorio", "ambulatorio", "consultorio", "ambulatorio", "sostantivo", "salud", "B1", { it: "L'ambulatorio apre alle 8.", es: "El consultorio abre a las 8." }, { gender: "m", plural: "ambulatori" }),
  W("w2-guarire", "guarire", "sanar / mejorar", "guaríre", "verbo", "salud", "B1", { it: "Guarisci presto!", es: "¡Que te mejores pronto!" }),

  /* ══ viaggi (ampliación) ══ */
  W("w2-biglietto", "biglietto", "billete", "bilyétto", "sostantivo", "viaggi", "A1", { it: "Un biglietto di andata e ritorno per Firenze.", es: "Un billete de ida y vuelta a Florencia." }, { gender: "m", plural: "biglietti" }),
  W("w2-binario", "binario", "andén", "binário", "sostantivo", "viaggi", "A2", { it: "Il treno parte dal binario 9.", es: "El tren sale del andén 9." }, { gender: "m", plural: "binari" }),
  W("w2-andataritorno", "andata e ritorno", "ida y vuelta", "andáta e ritórno", "espressione", "viaggi", "A2", { it: "Vorrei un'andata e ritorno aperta.", es: "Querría una ida y vuelta abierta." }),
  W("w2-ritardo", "ritardo", "retraso", "ritárdo", "sostantivo", "viaggi", "A2", { it: "Il volo è in ritardo di un'ora.", es: "El vuelo va con una hora de retraso." }, { gender: "m", plural: "ritardi" }),
  W("w2-valigia", "valigia", "maleta", "valíya", "sostantivo", "viaggi", "A1", { it: "Ho perso la valigia all'aeroporto!", es: "¡Perdí la maleta en el aeropuerto!" }, { gender: "f", plural: "valigie" }),
  W("w2-passeggero", "passeggero", "pasajero", "paseshéro", "sostantivo", "viaggi", "A2", { it: "Passeggeri in partenza dal gate 12.", es: "Pasajeros con salida por la puerta 12." }, { gender: "m", plural: "passeggeri" }),

  /* ══ hotel (ampliación) ══ */
  W("w2-prenotazione", "prenotazione", "reserva", "prenotatsióne", "sostantivo", "hotel", "A2", { it: "Ho una prenotazione a nome Rossi.", es: "Tengo una reserva a nombre de Rossi." }, { gender: "f", plural: "prenotazioni" }),
  W("w2-colazione", "colazione", "desayuno", "kolatsióne", "sostantivo", "hotel", "A1", { it: "La colazione è inclusa?", es: "¿El desayuno está incluido?" }, { gender: "f", plural: "colazioni" }),
  W("w2-cassaforte", "cassaforte", "caja fuerte", "kasafórte", "sostantivo", "hotel", "B1", { it: "La cassaforte è nell'armadio.", es: "La caja fuerte está en el armario." }, { gender: "f", plural: "casseforti" }),
  W("w2-affaccio", "affaccio sul mare", "vistas al mar", "affátcho", "sostantivo", "hotel", "B1", { it: "Vorrei una camera con affaccio sul mare.", es: "Querría una habitación con vistas al mar." }, { gender: "m" }),

  /* ══ tecnologia (ampliación) ══ */
  W("w2-caricatore", "caricatore", "cargador", "karikatóre", "sostantivo", "tecnologia", "A2", { it: "Hai un caricatore in prestito?", es: "¿Tienes un cargador de préstamo?" }, { gender: "m", plural: "caricatori" }),
  W("w2-password", "password", "contraseña", "pássuord", "sostantivo", "tecnologia", "A1", { it: "Non ricordo la password del wifi.", es: "No recuerdo la contraseña del wifi." }, { gender: "f", plural: "password" }),
  W("w2-schermo", "schermo", "pantalla", "skérmo", "sostantivo", "tecnologia", "A2", { it: "Lo schermo del portatile è rotto.", es: "La pantalla del portátil está rota." }, { gender: "m", plural: "schermi" }),
  W("w2-messaggio", "messaggio", "mensaje", "meságio", "sostantivo", "tecnologia", "A1", { it: "Ti ho mandato un messaggio vocale.", es: "Te envié un mensaje de voz." }, { gender: "m", plural: "messaggi" }),
  W("w2-videochiamata", "videochiamata", "videollamada", "videokiamáta", "sostantivo", "tecnologia", "A2", { it: "Facciamo una videochiamata stasera?", es: "¿Hacemos una videollamada esta noche?" }, { gender: "f", plural: "videochiamate" }),

  /* ══ lavoro (ampliación) ══ */
  W("w2-riunione", "riunione", "reunión", "riunióne", "sostantivo", "lavoro", "B1", { it: "La riunione è fissata per le 10.", es: "La reunión está fijada para las 10." }, { gender: "f", plural: "riunioni" }),
  W("w2-collega", "collega", "colega", "kólega", "sostantivo", "lavoro", "A2", { it: "Il mio collega prepara un caffè eccellente.", es: "Mi colega prepara un café excelente." }, { gender: "m", plural: "colleghi" }),
  W("w2-stipendio", "stipendio", "sueldo", "stipéndio", "sostantivo", "lavoro", "B1", { it: "Lo stipendio arriva a fine mese.", es: "El sueldo llega a fin de mes." }, { gender: "m", plural: "stipendi" }),
  W("w2-curriculum", "curriculum", "currículum", "kurríkulum", "sostantivo", "lavoro", "B1", { it: "Allega il curriculum alla candidatura.", es: "Adjunta el currículum a la candidatura." }, { gender: "m", plural: "curricula" }),
  W("w2-ferie", "ferie", "vacaciones (laborales)", "férie", "sostantivo", "lavoro", "B1", { it: "Vado in ferie ad agosto.", es: "Voy de vacaciones en agosto." }, { gender: "f", plural: "ferie" }),
  W("w2-candidatura", "candidatura", "candidatura", "kandidatúra", "sostantivo", "lavoro", "B2", { it: "La tua candidatura ci ha convinto.", es: "Tu candidatura nos convenció." }, { gender: "f", plural: "candidature" }),

  /* ══ sport (ampliación) ══ */
  W("w2-calcio", "calcio", "fútbol", "kálcho", "sostantivo", "sport", "A1", { it: "Andiamo a vedere la partita di calcio?", es: "¿Vamos a ver el partido de fútbol?" }, { gender: "m" }),
  W("w2-palestra", "palestra", "gimnasio", "paléstra", "sostantivo", "sport", "A1", { it: "Mi iscrivo in palestra a gennaio.", es: "Me apunto al gimnasio en enero." }, { gender: "f", plural: "palestre" }),
  W("w2-nuoto", "nuoto", "natación", "nuóto", "sostantivo", "sport", "A1", { it: "Il nuoto è il mio sport.", es: "La natación es mi deporte." }, { gender: "m" }),
  W("w2-corsa", "corsa", "carrera (correr)", "kórsa", "sostantivo", "sport", "A2", { it: "Faccio corsa al parco ogni domenica.", es: "Corro en el parque cada domingo." }, { gender: "f", plural: "corse" }),
  W("w2-allenamento", "allenamento", "entrenamiento", "allenaménto", "sostantivo", "sport", "B1", { it: "L'allenamento dura un'ora e mezza.", es: "El entrenamiento dura hora y media." }, { gender: "m", plural: "allenamenti" }),

  /* ══ clima (ampliación) ══ */
  W("w2-piove", "piove", "llueve", "pióve", "espressione", "clima", "A1", { it: "Piove a catinelle!", es: "¡Llueve a cántaros!" }),
  W("w2-neve", "neve", "nieve", "néve", "sostantivo", "clima", "A1", { it: "La neve ha coperto le Dolomiti.", es: "La nieve cubrió los Dolomitas." }, { gender: "f" }),
  W("w2-vento", "vento", "viento", "vénto", "sostantivo", "clima", "A1", { it: "C'è il vento di tramontana.", es: "Hay viento de tramontana." }, { gender: "m", plural: "venti" }),
  W("w2-afa", "afa", "bochorno", "áfa", "sostantivo", "clima", "B1", { it: "Che afa oggi a Milano!", es: "¡Qué bochorno hoy en Milán!" }, { gender: "f" }),
  W("w2-tempesta", "tempesta", "tormenta", "tempésta", "sostantivo", "clima", "A2", { it: "La tempesta ha ritardato i voli.", es: "La tormenta retrasó los vuelos." }, { gender: "f", plural: "tempeste" }),

  /* ══ relazioni (ampliación) ══ */
  W("w2-amicizia", "amicizia", "amistad", "amichítsia", "sostantivo", "relazioni", "A2", { it: "L'amicizia vera non conosce distanza.", es: "La amistad verdadera no conoce distancia." }, { gender: "f", plural: "amicizie" }),
  W("w2-fidanzato", "fidanzato", "novio", "fidantsáto", "sostantivo", "relazioni", "A2", { it: "Il mio fidanzato cucina divinamente.", es: "Mi novio cocina divinamente." }, { gender: "m", plural: "fidanzati" }),
  W("w2-appuntamento", "appuntamento", "cita", "apuntaménto", "sostantivo", "relazioni", "A2", { it: "Ho un appuntamento al buio stasera.", es: "Tengo una cita a ciegas esta noche." }, { gender: "m", plural: "appuntamenti" }),
  W("w2-litigare", "litigare", "discutir / pelear", "litigáre", "verbo", "relazioni", "B1", { it: "Meglio parlare che litigare.", es: "Mejor hablar que discutir." }),

  /* ══ finanze (ampliación) ══ */
  W("w2-contocorrente", "conto corrente", "cuenta corriente", "kónto korrénte", "sostantivo", "finanze", "B1", { it: "Vorrei aprire un conto corrente.", es: "Querría abrir una cuenta corriente." }, { gender: "m", plural: "conti correnti" }),
  W("w2-prelievo", "prelievo", "retiro (de dinero)", "preliévo", "sostantivo", "finanze", "B1", { it: "Il prelievo minimo è di 20 euro.", es: "El retiro mínimo es de 20 euros." }, { gender: "m", plural: "prelievi" }),
  W("w2-tassocambio", "tasso di cambio", "tipo de cambio", "tásso di kámbio", "sostantivo", "finanze", "B2", { it: "Qual è il tasso di cambio euro-peso?", es: "¿Cuál es el tipo de cambio euro-peso?" }, { gender: "m" }),

  /* ══ professioni (ampliación) ══ */
  W("w2-ingegnere", "ingegnere", "ingeniero", "inyenyére", "sostantivo", "professioni", "A2", { it: "L'ingegnere progetta il ponte.", es: "El ingeniero diseña el puente." }, { gender: "m", plural: "ingegneri" }),
  W("w2-avvocato", "avvocato", "abogado", "avvokáto", "sostantivo", "professioni", "A2", { it: "L'avvocato difende l'imputato.", es: "El abogado defiende al acusado." }, { gender: "m", plural: "avvocati" }),
  W("w2-infermiere", "infermiere", "enfermero", "infermiére", "sostantivo", "professioni", "A2", { it: "L'infermiere misura la pressione.", es: "El enfermero mide la presión." }, { gender: "m", plural: "infermieri" }),
  W("w2-traduttore", "traduttore", "traductor", "traduttóre", "sostantivo", "professioni", "B1", { it: "Il traduttore vive tra due lingue.", es: "El traductor vive entre dos lenguas." }, { gender: "m", plural: "traduttori" }),

  /* ══ attualita / scienza / letteratura (ampliación) ══ */
  W("w2-notizia", "notizia", "noticia", "notítsia", "sostantivo", "attualita", "A2", { it: "Hai sentito la notizia?", es: "¿Escuchaste la noticia?" }, { gender: "f", plural: "notizie" }),
  W("w2-inchiesta", "inchiesta", "investigación periodística", "inkiésta", "sostantivo", "attualita", "C1", { it: "L'inchiesta ha rivelato lo scandalo.", es: "La investigación reveló el escándalo." }, { gender: "f", plural: "inchieste" }),
  W("w2-esperimento", "esperimento", "experimento", "esperiménto", "sostantivo", "scienza", "A2", { it: "L'esperimento conferma l'ipotesi.", es: "El experimento confirma la hipótesis." }, { gender: "m", plural: "esperimenti" }),
  W("w2-poeta", "poeta", "poeta", "poéta", "sostantivo", "letteratura", "A2", { it: "Montale è un poeta del Novecento.", es: "Montale es un poeta del Novecientos." }, { gender: "m", plural: "poeti" }),
  W("w2-verso", "verso", "verso", "vérso", "sostantivo", "letteratura", "B1", { it: "Questa poesia ha dodici versi.", es: "Este poema tiene doce versos." }, { gender: "m", plural: "versi" }),
  W("w2-trama", "trama", "trama", "tráma", "sostantivo", "letteratura", "A2", { it: "La trama del romanzo è avvincente.", es: "La trama de la novela es apasionante." }, { gender: "f", plural: "trame" }),

  /* ══ musica / cinema (ampliación) ══ */
  W("w2-opera", "opera", "ópera", "ópera", "sostantivo", "musica", "B1", { it: "La Scala è il tempio dell'opera.", es: "La Scala es el templo de la ópera." }, { gender: "f", plural: "opere" }),
  W("w2-colonnasonora", "colonna sonora", "banda sonora", "kolónna sonóra", "sostantivo", "cinema", "B1", { it: "La colonna sonora di Morricone è leggendaria.", es: "La banda sonora de Morricone es legendaria." }, { gender: "f", plural: "colonne sonore" }),
  W("w2-regista", "regista", "director/a de cine", "reyísta", "sostantivo", "cinema", "A2", { it: "La regista ha vinto il Leone d'Oro.", es: "La directora ganó el León de Oro." }, { gender: "m", plural: "registi" }),

  /* ══ citta / studi (ampliación) ══ */
  W("w2-duomo", "duomo", "catedral", "duómo", "sostantivo", "citta", "A1", { it: "Il duomo di Milano è imponente.", es: "El duomo de Milán es imponente." }, { gender: "m", plural: "duomi" }),
  W("w2-vicolo", "vicolo", "callejón", "víkolo", "sostantivo", "citta", "B1", { it: "I vicoli del centro si perdono nel tempo.", es: "Los callejones del centro se pierden en el tiempo." }, { gender: "m", plural: "vicoli" }),
  W("w2-esame", "esame", "examen", "esáme", "sostantivo", "studi", "A2", { it: "L'esame di italiano è andato bene.", es: "El examen de italiano fue bien." }, { gender: "m", plural: "esami" }),
  W("w2-laurea", "laurea", "título universitario", "laurea", "sostantivo", "studi", "B1", { it: "Mi sono laureato in lettere.", es: "Me licencié en letras." }, { gender: "f", plural: "lauree" }),
  W("w2-lezione", "lezione", "lección", "letsióne", "sostantivo", "studi", "A1", { it: "La lezione comincia alle nove.", es: "La lección empieza a las nueve." }, { gender: "f", plural: "lezioni" }),
];
