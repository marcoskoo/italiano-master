import type { CbGrammarDeep } from "./grammar-deep";

/* ═══ v9.15 · Grammatica approfondita · A2 (cu-a2-01 … cu-a2-12) ═══ */

export const GD_A2: Record<string, CbGrammarDeep> = {
  "cu-a2-01": {
    sezioni: [
      { t: "Come si forma", body: "Il passato prossimo se forma con avere o essere (presente) + participio pasado: -ato, -uto, -ito (mangiato, creduto, dormito). Los participios irregulares más frecuentes son fatto, detto, stato, avuto, andato, venuto, visto, preso, scritto, aperto, chiuso, letto, perso. El auxiliar essere acompaña a los verbos de movimiento (andare, venire, partire, tornare, uscire, arrivare), a los reflexivos y a los impersonales; con essere el participio concuerda con el sujeto: «Maria è andata», «Siamo tornati»." },
      { t: "Quando si usa", body: "Expresa acciones puntuales y terminadas en un momento definido del pasado: ayer, esta mañana, el año pasado. Cubre tanto el pretérito perfecto español («hoy he comido pasta») como el indefinido («ayer comí pasta»): el italiano no distingue entre ambos, usa siempre il passato prossimo en la lengua hablada del norte y centro." },
      { t: "Attenzione! · trampas para hispanohablantes", body: "El error número uno es elegir el auxiliar mal: «ho andato» ✗ → sono andato, porque andare es movimiento. Con essere, el participio concuerda: «Lei è andatA», «Loro sono arrivatI». El español usa «haber» invariable para todo; el italiano reparte entre avere y essere, y además con avere el participio nunca concuerda («Ho visto Maria», no «ho vista Maria» salvo con lo/pronombre directo: «L'ho vista»)." },
      { t: "Nel parlato", body: "La pregunta social por excelencia es «Com'è andata?» (¿cómo fue?) para cualquier evento. Respuesta típica: «È andata benissimo, abbiamo mangiato e riso tutta la sera»." },
    ],
    esempi: [
      { it: "Ieri ho mangiato una pizza fantastica in Trastevere.", es: "Ayer comí una pizza fantástica en Trastevere." },
      { it: "Siamo andati al cinema alle otto in punto.", es: "Fuimos al cine a las ocho en punto." },
      { it: "Maria è tornata tardi dal lavoro, era stanca.", es: "Maria volvió tarde del trabajo, estaba cansada." },
      { it: "Avete già visto quel film italiano nuovo?", es: "¿Ya habéis visto esa película italiana nueva?" },
      { it: "Mi sono svegliata alle sei e non ho più dormito.", es: "Me desperté a las seis y no volví a dormir." },
    ],
    usi: [
      { q: "«Ella fue a Roma»:", options: ["Lei è andata a Roma.", "Lei ha andata a Roma.", "Lei è andato a Roma."], answer: 0, explain: "andare usa essere y el participio concuerda: andata." },
      { q: "«He hecho»:", options: ["Ho fatto.", "Sono fatto.", "Ho facuto."], answer: 0, explain: "Participio irregular de fare: fatto, con auxiliar avere." },
    ],
  },

  "cu-a2-02": {
    sezioni: [
      { t: "Come si forma", body: "L'imperfetto se forma con la raíz del infinitivo + -avo/-avi/-ava/-avamo/-avate/-avano (-are), -evo/-evi/-eva/-evamo/-evate/-evano (-ere) e -ivo/-ivi/-iva/-ivamo/-ivate/-ivano (-ire). Irregulares esenciales: essere (ero, eri, era, eravamo, eravate, erano), avere (avevo…), fare (facevo…), dire (dicevo…), bere (bevevo…), stare (stavo…)." },
      { t: "Quando si usa", body: "Describe el escenario del pasado: cómo eran las cosas, las personas y el clima; los hábitos repetidos («Da piccolo giocavo a calcio ogni giorno»); la edad («Avevo dieci anni»); y las acciones en curso interrumpidas por otra: «Mentre studiavo, è arrivato Luca». Es el tiempo de los cuentos: «C'era una volta una principessa…»." },
      { t: "Attenzione! · trampas para hispanohablantes", body: "El mapeo con el español es casi perfecto (imperfecto = hablaba/comía), así que aprovecha esa ventaja. Cuidado con ero: cubre «era» y «estaba» («ero stanco» = estaba cansado). La combinación clave de la narración: imperfetto de fondo + passato prossimo de los eventos: «Pioveva e siamo rimasti a casa» — el error típico es usar il prossimo para el fondo («è piovuto e siamo rimasti» cambia el sentido a un evento puntuale)." },
      { t: "Nel parlato", body: "Para describir a alguien en el pasado: «Com'era da ragazzo? Era timido, portava sempre gli occhiali». La fórmula «da piccolo/da bambino» + imperfetto abre cualquier anécdota de infancia." },
    ],
    esempi: [
      { it: "Quando ero piccolo, abitavamo al mare d'estate.", es: "Cuando era pequeño, vivíamos en el mar en verano." },
      { it: "Ieri pioveva e sono rimasto a casa a leggere.", es: "Ayer llovía y me quedé en casa a leer." },
      { it: "Mentre cucinavo, ascoltavo la radio vecchia della nonna.", es: "Mientras cocinaba, escuchaba la radio vieja de la abuela." },
      { it: "Che facevi ieri sera alle nove?", es: "¿Qué hacías ayer a las nueve?" },
      { it: "Da bambina voleva fare la dottoressa.", es: "De niña quería ser médica." },
    ],
    usi: [
      { q: "En «Ayer LEÍA cuando llegó mi hermano», «leía» es:", options: ["leggevo", "ho letto", "leggo"], answer: 0, explain: "Acción en curso interrumpida → imperfetto." },
      { q: "«Antes vivíamos en Milán»:", options: ["Abitavamo a Milano.", "Abbiamo abitato a Milano.", "Abitiamo a Milano."], answer: 0, explain: "Hábito del pasado → imperfetto." },
    ],
  },

  "cu-a2-03": {
    sezioni: [
      { t: "Come si forma", body: "Il condizionale presente de potere es: potrei, potresti, potrebbe, potremmo, potreste, potrebbero. La forma podría formal (usted) es potrebbe; informal (tú) es potresti. Junto a questo tempo, il passato prossimo sirve para exponer el problema concreto: «Ho comprato questo ieri, ma non funziona»." },
      { t: "Quando si usa", body: "potrebbe/potresti + infinitivo convierte cualquier petición en cortés: «Potrebbe ripeterlo?» al camarero, al recepcionista, al funcionario. En la reclamación italiana el esquema ganador es: passato prossimo para los hechos («Ho pagato, ma non ho ricevuto niente») + condizionale para los pedidos («Potrebbe controllare, per favore?»)." },
      { t: "Attenzione! · trampas para hispanohablantes", body: "El español «podría» sirve para usted y tú; el italiano separa potrebbe (Lei) de potresti (tu) — elegir mal el nivel es el error más común. El español «puede que» NO se traduce con potere: es forse o è possibile che. Y «puedo pasar?» se dice posso entrare? — la cortesía se marca con la entonación o con potrei (más suave aún)." },
      { t: "Nel parlato", body: "Otras fórmulas de cortesía con condizionale: vorrei (quisiera), dovrei (debería), mi piacerebbe (me gustaría). «Mi scusi, potrebbe aiutarmi?» abre cualquier interacción con un desconocido." },
    ],
    esempi: [
      { it: "Ho comprato questo maglione ieri, ma ha un buco.", es: "Compré este jersey ayer, pero tiene un agujero." },
      { it: "Potrebbe ripetere più lentamente, per favore?", es: "¿Podría repetir más despacio, por favor?" },
      { it: "Ho perso il biglietto del treno: che posso fare?", es: "He perdido el billete del tren: ¿qué puedo hacer?" },
      { it: "Non ho ricevuto la conferma della prenotazione.", es: "No he recibido la confirmación de la reserva." },
      { it: "Potresti passarmi il sale, per favore?", es: "¿Podrías pasarme la sal, por favor?" },
    ],
    usi: [
      { q: "«¿Podría ayudarme?» (a un desconocido):", options: ["Potrebbe aiutarmi?", "Potresti aiutarmi?", "Può aiutarmi cortese?"], answer: 0, explain: "Formal → potrebbe." },
      { q: "Al reclamar, los hechos se exponen con:", options: ["passato prossimo", "imperfetto siempre", "futuro"], answer: 0, explain: "«Ho pagato ma non ho ricevuto»: hechos puntuales." },
    ],
  },

  "cu-a2-04": {
    sezioni: [
      { t: "Come si forma", body: "Il verbo sentirsi (sentirse) se conjuga: mi sento, ti senti, si sente, ci sentiamo, vi sentite, si sentono. Para el malestar físico existe la fórmula avere mal di + parte del cuerpo: ho mal di testa (dolor de cabeza), mal di pancia, mal di gola, mal di schiena, mal di denti. La alternativa con fare male: «Mi fa male la testa», «Mi fanno male i piedi» (concordando con la parte)." },
      { t: "Quando si usa", body: "En la farmacia y en el médico italiano estas estructuras son la moneda corriente: «Mi sento debole», «Ho la febbre», «Da due giorni ho mal di gola». La pregunta del médico es siempre «Come si sente oggi?» y la del farmacéuta «Come posso aiutarla?»." },
      { t: "Attenzione! · trampas para hispanohablantes", body: "«Me duele la cabeza» NO se traduce palabra por palabra: se dice ho mal di testa o mi fa male la testa — nunca «mi duole il testa». «Sto bene/male» cubre estoy bien/mal, y «come stai?» preguntta por el estado general. Ojo con sentirsi vs sentire: «sento un rumore» (oigo) es percepción; «mi sento bene» (me siento bien) es estado." },
      { t: "Nel parlato", body: "Los italianos suavizan los síntomas con un po': «Mi sento un po' giù» (me siento un poco decaído), «Ho un po' di febbre». En la farmacia pides «Qualcosa per il mal di testa?»." },
    ],
    esempi: [
      { it: "Oggi mi sento benissimo, grazie!", es: "Hoy me siento genial, ¡gracias!" },
      { it: "Ho mal di gola da due giorni.", es: "Tengo dolor de garganta desde hace dos días." },
      { it: "Mi fanno male i piedi dopo la gita.", es: "Me duelen los pies después de la excursión." },
      { it: "Come si sente sua madre oggi?", es: "¿Cómo se siente su madre hoy?" },
      { it: "Mi sento un po' strano, forse ho la febbre.", es: "Me siento un poco raro, quizá tengo fiebre." },
    ],
    usi: [
      { q: "«Tengo dolor de cabeza»:", options: ["Ho mal di testa.", "Mi dolgo la testa.", "Sono mal di testa."], answer: 0, explain: "Fórmula fija avere mal di + parte." },
      { q: "«Me duelen las piernas»:", options: ["Mi fanno male le gambe.", "Faccio male le gambe.", "Ho male le gambe."], answer: 0, explain: "Plural → fanno male + la parte con artículo." },
    ],
  },

  "cu-a2-05": {
    sezioni: [
      { t: "Come si forma", body: "El imperativo informal (tu) toma la forma de la 3ª persona del presente para los verbos en -are (mangia! guarda!) y la de la 2ª para -ere/-ire (prendi! dormi!). El negativo se forma con non + infinitivo: non mangiare!, non dire niente!. El imperativo formal (Lei) usa el congiuntivo presente: mangi!, prenda!, senta!, finisca!; negativo: non mangi!." },
      { t: "Quando si usa", body: "Da órdenes, instrucciones y consejos: recetas («Aggiungi il sale»), direcciones («Prendi la prima a destra»), sugerencias a amigos («Rilassati!»). Con los pronombres se une al final y dobla la consonante: mangialo!, dimmi!, alzati!, guardalo!." },
      { t: "Attenzione! · trampas para hispanohablantes", body: "El español «come» (tú) se dice mangia — para los verbos -are el imperativo de tú acaba en -a, igual que la 3ª persona española: «mira!» = guarda!. El negativo español usa subjuntivo («no comas»); el italiano usa infinitivo: non mangiare — nunca «non mangi» en informal. El raddoppiamento de la consonante al unir pronombres (dimmi, dammi, fammi, andiamo... fammi vedere) no existe en español y hay que oírlo para creerlo." },
      { t: "Nel parlato", body: "Los imperativos sociales fijos: scusa! (tú) / scusi! (usted), senti! / senta! (oye / oiga), prego! (de nada / pase), guarda! (mira). «Senta, mi scusi…» abre cualquier conversación formal." },
    ],
    esempi: [
      { it: "Mangia la pasta finché è calda!", es: "¡Come la pasta mientras está caliente!" },
      { it: "Prendi la prima strada a destra e poi segui dritto.", es: "Toma la primera calle a la derecha y luego sigue recto." },
      { it: "Non ti preoccupare, ci penso io!", es: "No te preocupes, ¡yo me encargo!" },
      { it: "Senta, mi scusi, dov'è la stazione?", es: "Oiga, disculpe, ¿dónde está la estación?" },
      { it: "Finisci i compiti e poi esci con gli amici.", es: "Termina los deberes y luego sal con los amigos." },
    ],
    usi: [
      { q: "«¡No fumes!» (a un amigo):", options: ["Non fumare!", "Non fuma!", "Non fumi!"], answer: 0, explain: "Negativo informal = non + infinitivo." },
      { q: "«Tome el libro» (a un desconocido):", options: ["Prenda il libro.", "Prendi il libro.", "Prendere il libro!"], answer: 0, explain: "Formal = congiuntivo: prenda." },
    ],
  },

  "cu-a2-06": {
    sezioni: [
      { t: "Come si forma", body: "Il futuro semplice tiene una sola serie de terminaciones para las tres conjugaciones: -ò, -ai, -à, -emo, -ete, -anno (parlerò, prenderò, dormirò… con la pérdida de la e del infinitivo en -are/-ere). Irregulares de alta frecuencia: essere → sarò, avere → avrò, andare → andrò, fare → farò, venire → verrò, poteré→potrò, volere → vorrò, dovere → dovrò." },
      { t: "Quando si usa", body: "Expresa planes («Domani andrò dal dentista»), predicciones («Pioverà»), promesas («Ti aiuterò, te lo prometto») y conjeturas del presente («Dov'è Marco? Sarà al bar» — estará en el bar). Muy importante: el italiano coloquial suele sustituirlo por el presente con valor de futuro: «Domani vado dal dentista»." },
      { t: "Attenzione! · trampas para hispanohablantes", body: "Tras las conjunciones temporales (quando, appena, non appena, fino a quando), el italiano usa PRESENTE donde el español usa subjuntivo futuro: «Cuando llegues, llámame» = «Quando arrivi, chiamami» — nunca «quando arriverai» en la lengua estándar. El español «voy a ir» intencional se traduce mejor por presente: «vado»." },
      { t: "Nel parlato", body: "El futuro de conjetura es un rasgo muy italiano: «Saranno le cinque» (serán las cinco), «Avrà trent'anni» (tendrá treinta años). Lo usas para estimar sin afirmar." },
    ],
    esempi: [
      { it: "Domani andrò dal dentista prestissimo.", es: "Mañana iré al dentista muy temprano." },
      { it: "L'anno prossimo viaggeremo in treno per tutta l'Italia.", es: "El año que viene viajaremos en tren por toda Italia." },
      { it: "Sarà una bella sorpresa, vedrai!", es: "Será una buena sorpresa, ¡ya verás!" },
      { it: "Quando arrivi a Roma, chiamami subito.", es: "Cuando llegues a Roma, llámame enseguida." },
      { it: "Non ti preoccupare: ti aiuterò io.", es: "No te preocupes: yo te ayudaré." },
    ],
    usi: [
      { q: "«Cuando termine, salimos»:", options: ["Quando finisco, usciamo.", "Quando finirò, usciremo.", "Quando finirò, usciamo sempre."], answer: 0, explain: "Tras quando: presente con valor de futuro." },
      { q: "«Seré»:", options: ["sarò", "sarai", "esserò"], answer: 0, explain: "Futuro irregular de essere: sarò." },
    ],
  },

  "cu-a2-07": {
    sezioni: [
      { t: "Come si forma", body: "Los tres modales se conjuguan en presente: dovere (devo, devi, deve, dobbiamo, dovete, devono), potere (posso, puoi, può, possiamo, potete, possono), volere (voglio, vuoi, vuole, vogliamo, volete, vogliono). Van seguidos de infinitivo SIN preposición, y el pronombre puede ir delante del modal o unirse al infinitivo: «Ti devo chiamare» = «Devo chiamarti»." },
      { t: "Quando si usa", body: "dovere expresa obligación («Devo studiare»), potere permiso o capacidad («Non posso venire»), volere deseo («Voglio un gelato»). El impersonal bisogna + infinitivo equivale al español «hay que»: «Bisogna prenotare» = hay que reservar." },
      { t: "Attenzione! · trampas para hispanohablantes", body: "«Tener que» = dovere, pero «hay que» = bisogna (impersonal): decir «devo prenotare» cuando quieres decir «hay que reservar» suena a que solo tú debes hacerlo. El español «puedo hacerlo» une el pronombre al infinitivo igual que el italiano (posso farlo) — mantén ese hábito. Y «quiero que vengas» con subjuntivo NO existe así en italiano: se dice «voglio che tu venga» (B1+) o se reformula con infinitivo: «vorrei venire anch'io»." },
      { t: "Nel parlato", body: "«Devo scappare!» (¡me tengo que ir!) cierra cualquier conversación con elegancia. «Posso?» con tono ascendente pide permiso para casi todo: sentarse, pasar, coger." },
    ],
    esempi: [
      { it: "Domani devo alzarmi prestissimo per il volo.", es: "Mañana tengo que madrugar para el vuelo." },
      { it: "Non posso venire stasera, mi dispiace tanto.", es: "No puedo venir esta noche, lo siento mucho." },
      { it: "Vuoi qualcosa da bere intanto?", es: "¿Quieres algo de beber mientras tanto?" },
      { it: "Bisogna prenotare il ristorante con anticipo.", es: "Hay que reservar el restaurante con antelación." },
      { it: "Possiamo pagare con la carta qui?", es: "¿Podemos pagar con tarjeta aquí?" },
    ],
    usi: [
      { q: "«Hay que estudiar todos los días»:", options: ["Bisogna studiare tutti i giorni.", "Devo studiare tutti i giorni.", "Ho che studio tutti i giorni."], answer: 0, explain: "Impersonal: bisogna + infinito." },
      { q: "«Tengo que irme»:", options: ["Devo andare.", "Devo a andare.", "Ho devo andare."], answer: 0, explain: "Modal + infinitivo directo, sin preposición." },
    ],
  },

  "cu-a2-08": {
    sezioni: [
      { t: "Come si forma", body: "Pronombres de objeto directo: mi, ti, lo, la, ci, vi, li, le. De objeto indirecto: mi, ti, gli (a él/a ellos), le (a ella), ci, vi. Todos van ANTES del verbo conjugado: «Ti chiamo stasera», «Le scrivo domani». Con infinitivo se unen al final: «chiamarti», «scriverle». Las formas de dativo y acusativo de 1ª y 2ª persona coinciden: mi, ti, ci, vi." },
      { t: "Quando si usa", body: "Sustituyen personas y cosas ya conocidas para no repetirlas: «Hai visto Marco? Sì, l'ho visto ieri». En el teléfono son imprescindibles: «Ti chiamo io dopo», «Mi mandi un messaggio quando arrivi?». El indirecto responde a «a quién?»: «Scrivo a Maria → Le scrivo»." },
      { t: "Attenzione! · trampas para hispanohablantes", body: "El español «le» (a él) se dice gli: «gli dico» = le digo (a él); «le dico» = le digo (a ella) — el italiano distingue el género en el indirecto singular, al revés de lo que esperas. El español «lo» directo masculino también es lo: «l'ho visto». Con el passato prossimo, el participio concuerda con lo/la/li/le cuando van delante: «L'ho vista» (la he visto a ella), «Li ho incontrati» — concordancia que el español no hace." },
      { t: "Nel parlato", body: "Al teléfono: «Pronto, ti senti bene?» — y las despedidas: «Ti chiamo dopo», «Scrivimi appena arrivi», «Mandami le foto!»." },
    ],
    esempi: [
      { it: "Ti chiamo stasera dopo il lavoro, promesso.", es: "Te llamo esta noche después del trabajo, prometido." },
      { it: "Le scrivo un messaggio domani mattina.", es: "Le escribo un mensaje mañana por la mañana (a ella)." },
      { it: "Questo libro? L'ho già letto due volte.", es: "¿Este libro? Ya lo he leído dos veces." },
      { it: "Ci puoi aiutare con le valigie, per favore?", es: "¿Nos puedes ayudar con las maletas, por favor?" },
      { it: "Gli ho detto la verità, finalmente.", es: "Le he dicho la verdad (a él), por fin." },
    ],
    usi: [
      { q: "«Le escribo (a él)»:", options: ["Gli scrivo.", "Le scrivo.", "Lo scrivo."], answer: 0, explain: "Indirecto masculino: gli = a él; le = a ella." },
      { q: "«¿Me ayudas?»:", options: ["Mi aiuti?", "Me aiuti?", "Aiuti mi?"], answer: 0, explain: "El pronombre va antes del verbo conjugado." },
    ],
  },

  "cu-a2-09": {
    sezioni: [
      { t: "Come si forma", body: "El comparativo se forma con più/meno + aggettivo + di: «Milano è più grande di Torino». El superlativo relativo con il/la più + aggettivo (+ di): «È il ristorante più famoso della città». El superlativo absoluto con -issimo: «buonissimo, bellissimo, grandissimo». Irregulares: migliore/migliori (mejor), peggiore/peggiori (peor), maggiore/minore (mayor/menor). El comparativo de igualdad: «alto come Marco» o «tanto… quanto»." },
      { t: "Quando si usa", body: "Comparar personas, lugares, experiencias y precios: «Questo caffè è più buono di quello di ieri». Con dos términos se usa di; comparando dos cualidades del MISMO sujeto se usa che: «È più simpatico che intelligente» (es más simpático que inteligente), «Meglio viaggiare che sognare»." },
      { t: "Attenzione! · trampas para hispanohablantes", body: "El español «mejor» de calidad es migliore, no «più buono» (que se reserva para el sabor: «questa pasta è più buona»). «peggiore» = peor. El español dice «más grande que» y el italiano exactamente più grande di — la preposición cambia: di, no che, cuando comparas dos cosas distintas. El absoluto español «muy bueno» se dice también molto buono, pero el italiano prefiere el sufijo: buonissimo." },
      { t: "Nel parlato", body: "El superlativo absoluto es el elogio italiano espontáneo: «È buonissimo!», «Sei gentilissimo!». Para exagerar: «Il miglior gelato del mondo!»." },
    ],
    esempi: [
      { it: "Questa pizza è più buona di quella di ieri.", es: "Esta pizza es mejor que la de ayer." },
      { it: "Milano è più grande di Torino, ma Torino è più elegante.", es: "Milán es más grande que Turín, pero Turín es más elegante." },
      { it: "È il ristorante più famoso della città, prenotiamo!", es: "Es el restaurante más famoso de la ciudad, ¡reservemos!" },
      { it: "Preferisco viaggiare in treno: è più comodo che in aereo.", es: "Prefiero viajar en tren: es más cómodo que en avión." },
      { it: "Il caffè napoletano è fortissimo, sveglia subito!", es: "El café napolitano es fortísimo, ¡despierta de inmediato!" },
    ],
    usi: [
      { q: "«mejor (calidad)»:", options: ["migliore", "più buono sempre", "meggio"], answer: 0, explain: "migliore = mejor en calidad; più buono para el sabor." },
      { q: "«más alto que Marco»:", options: ["più alto di Marco", "più alto che Marco", "più alto a Marco"], answer: 0, explain: "Comparación entre dos términos → di." },
    ],
  },

  "cu-a2-10": {
    sezioni: [
      { t: "Come si forma", body: "El si impersonal se construye con si + verbo en 3ª persona: «si mangia, si dice, si parte». Cuando el objeto es plural, el verbo pasa al plural: «Si mangiano spaghetti», «Si vendono case». En las recetas encadena infinitas acciones: «si aggiunge il sale, si mescola, si serve caldo»." },
      { t: "Quando si usa", body: "Expresa generalidades y normas: «In Italia si cena tardi», «Qui non si può fumare», «Come si dice…?» (¿cómo se dice?), «Come si scrive?» (¿cómo se escribe?). Es la voz del manual, de la receta y de la costumbre nacional." },
      { t: "Attenzione! · trampas para hispanohablantes", body: "El español «se come bien aquí» es «qui si mangia bene» — el mapeo es bueno. La diferencia está en el plural: el italiano concuerda con el objeto («si mangiano gli spaghetti»), mientras que el español mantiene el singular («se comen espaguetis» tiene el verbo en plural también — coincide). Cuando el verbo es reflexivo, el si impersonal se convierte en ci: «Ci si sveglia presto» (uno se despierta temprano), nunca «si si sveglia»." },
      { t: "Nel parlato", body: "«Si dice che…» (se dice que…), «Non si sa mai» (nunca se sabe) son muletillas cotidianas. En las instrucciones de uso: «Si preme il pulsante e si aspetta un minuto»." },
    ],
    esempi: [
      { it: "In Italia si cena molto tardi, alle nove.", es: "En Italia se cena muy tarde, a las nueve." },
      { it: "Come si dice «playa» in italiano?", es: "¿Cómo se dice «playa» en italiano?" },
      { it: "Si aggiunge il sale e si mescola tutto bene.", es: "Se añade la sal y se mezcla todo bien." },
      { it: "Qui non si può parcheggiare la domenica.", es: "Aquí no se puede aparcar los domingos." },
      { it: "Si dice che quel film sia bellissimo.", es: "Se dice que esa película es bellísima." },
    ],
    usi: [
      { q: "«¿Cómo se escribe?»:", options: ["Come si scrive?", "Come si scrivono?", "Come scrive si?"], answer: 0, explain: "si + 3ª singular cuando el sujeto es indefinido." },
      { q: "«Se comen espaguetis» (receta):", options: ["Si mangiano gli spaghetti.", "Si mangia gli spaghetti.", "Si mangia spaghetti."], answer: 0, explain: "Objeto plural → verbo en plural: si mangiano." },
    ],
  },

  "cu-a2-11": {
    sezioni: [
      { t: "Come si forma", body: "Il futuro sirve para prometer: «Ti chiamerò domani, te lo prometto». En las condiciones orientadas al futuro, el italiano admite DOS estructuras tras se: presente («Se piove, restiamo a casa») o futuro («Se pioverà, resteremo a casa»), ambas correctas. La principal es siempre futuro o presente con valor de futuro." },
      { t: "Quando si usa", body: "Promesas y compromisos («Non lo dirò a nessuno»), previsiones («Se farà bello, andremo in spiaggia») y amenazas afectuosas («Se continui così, mi arrabbio»). La estructura se + futuro es más formal y enfática; en el habla se prefiere el presente." },
      { t: "Attenzione! · trampas para hispanohablantes", body: "Este es UNO de los pocos puntos donde el italiano es MÁS flexible que el español: el español jamás dice «si lloverá» (✗), pero el italiano puede decir «se pioverà» ✓. No traspases la regla española al italiano ni te asustes al oír el futuro tras se: las dos opciones son nativas. Y ojo: se (it) = si (es) condicional, no el pronombre sé." },
      { t: "Nel parlato", body: "Las promesas se refuerzan: «Te lo giuro» (te lo juro), «Parola d'onore» (palabra de honor), «Ci puoi contare» (puedes contar con ello)." },
    ],
    esempi: [
      { it: "Ti prometto che ti chiamerò domani sera.", es: "Te prometo que te llamaré mañana por la noche." },
      { it: "Se avrò tempo, passerò a trovarti verso le sei.", es: "Si tengo tiempo, pasaré a verte hacia las seis." },
      { it: "Non ti preoccupare: non lo dirò a nessuno.", es: "No te preocupes: no se lo diré a nadie." },
      { it: "Se farà bello domani, andremo in spiaggia.", es: "Si hace bueno mañana, iremos a la playa." },
      { it: "Sarà un piacere rivederti presto!", es: "¡Será un placer verte pronto de nuevo!" },
    ],
    usi: [
      { q: "Tras «se» con hipótesis futura, el italiano:", options: ["puede usar presente o futuro", "solo usa subjuntivo", "solo usa condicional"], answer: 0, explain: "«Se piove / Se pioverà»: ambas son correctas en italiano." },
      { q: "«Te lo prometo: te lo devolveré»:", options: ["Te lo prometto: te lo restituirò.", "Te lo prometto: te lo restituisco domani promise.", "Prometto che restituirò te lo."], answer: 0, explain: "Promesa → futuro restituirò; pronombre antes del verbo." },
    ],
  },

  "cu-a2-12": {
    sezioni: [
      { t: "La mappa di A2", body: "En A2 has ganado el pasado y el futuro: passato prossimo (auxiliares, concordancia), imperfetto (fondo y hábitos), futuro simple (planes, promesas, conjeturas). Además: modales (dovere/potere/volere/bisogna), imperativo formal e informal con pronombres, comparativos y superlativos, si impersonal, pronombres de objeto y mal di/sentirsi para el médico." },
      { t: "Gli errori numero uno", body: "Los cinco errores A2 de hispanohablantes: (1) «ho andato» ✗ → sono andato; (2) elegir prossimo para el fondo narrativo («è piovuta tutta la sera» cuando quieres decir 'llovía toda la tarde') → pioveva; (3) «quando arriverai, chiama» ✗ → quando arrivi, chiama; (4) «le dico» para 'a él' ✗ → gli dico; (5) el condicional de cortesía olvidado: «voglio un café» al camarero → vorrei un caffè." },
      { t: "Come mescolare tutto", body: "Una anécdota A2 real mezcla todo: «Sabato sono andato al mercato. Mentre camminavo, ho incontrato Marco: non lo vedevo da un anno! Abbiamo preso un caffè e abbiamo parlato del più e del meno. Se avrà tempo la settimana prossima, ci rivedremo»." },
      { t: "Il prossimo passo", body: "B1 te espera con el congiuntivo (presente e passato), el condizionale de propuesta y cortesía, las relativas con che/cui/dove e il discorso indiretto: las herramientas para opinar y contar lo que otros dijeron." },
    ],
    esempi: [
      { it: "Ieri ho comprato delle scarpe nuove al mercato.", es: "Ayer compré unos zapatos nuevos en el mercado." },
      { it: "Mentre tornavo a casa, ho incontrato una vecchia amica.", es: "Mientras volvía a casa, me encontré a una vieja amiga." },
      { it: "Domani devo svegliarmi presto, ma non posso lamentarmi.", es: "Mañana tengo que despertarme temprano, pero no puedo quejarme." },
      { it: "Questo quartiere è più tranquillo di quello di prima.", es: "Este barrio es más tranquilo que el de antes." },
      { it: "Se pioverà sabato, resteremo a casa a guardare un film.", es: "Si llueve el sábado, nos quedaremos en casa viendo una película." },
    ],
    usi: [
      { q: "«Ayer llovía cuando salí»:", options: ["Ieri pioveva quando sono uscito.", "Ieri ho piovuto quando uscivo.", "Ieri pioveva quando uscivo sempre."], answer: 0, explain: "Fondo = imperfetto; evento = passato prossimo." },
      { q: "«Hay que reservar»:", options: ["Bisogna prenotare.", "Deve prenotare.", "Si ha prenotare."], answer: 0, explain: "Impersonal: bisogna + infinito." },
    ],
  },
};
