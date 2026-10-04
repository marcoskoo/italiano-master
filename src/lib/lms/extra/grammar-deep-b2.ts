import type { CbGrammarDeep } from "./grammar-deep";

/* ═══ v9.15 · Grammatica approfondita · B2 (cu-b2-01 … cu-b2-12) ═══ */

export const GD_B2: Record<string, CbGrammarDeep> = {
  "cu-b2-01": {
    sezioni: [
      { t: "Come si forma", body: "Il congiuntivo imperfetto: -assi, -assi, -asse, -assimo, -aste, -assero (-are: parlassi…); -essi, -essi, -esse, -essimo, -este, -essero (-ere/-ire: credessi, dormissi…). Irregulares: fossi (essere), avessi (avere), dessi (dare), facessi (fare), stessi (stare), dicessi (dire)." },
      { t: "Quando si usa", body: "Tres grandes empleos: (1) hipótesis irreal en la si-cláusula: «Se avessi tempo, verrei» (si tuviera tiempo, vendría); (2) opinión/deseo en pasado: «Pensavo che fosse più facile», «Vorrei che venissi anche tu»; (3) concesivas cultas: benché fosse tardi. El hipotético de presente se completa con il condizionale: se + congiuntivo imperfetto → condizionale presente." },
      { t: "Attenzione! · trampas para hispanohablantes", body: "El español «si tuviera, iría» mapea perfecto con «se avessi, andrei» — misma estructura, aprovecha la coincidencia. El peligro viene con el pasado: «quería que vinieras» = volevo che venissi (subjuntivo imperfecto italiano, igual que español). El error clásico de nivel: mantener el congiuntivo presente tras un verbo en pasado («pensavo che sia» ✗) → pensavo che fosse. Y en el hipotético, nunca pongas condizionale tras se: «se vorrei» ✗." },
      { t: "Nel parlato", body: "El consejo hipotético es puro congiuntivo imperfetto: «Al posto tuo non lo farei», «Io al tuo posto ci penserei due volte». Fórmula social: «Magari fosse vero!» (¡ojalá fuera verdad!)." },
    ],
    esempi: [
      { it: "Se avessi più tempo, imparerei anche il tedesco.", es: "Si tuviera más tiempo, aprendería también alemán." },
      { it: "Pensavo che fosse molto più difficile, che sollievo.", es: "Pensaba que era mucho más difícil, qué alivio." },
      { it: "Vorrei che tu venissi con noi al concerto.", es: "Querría que vinieras con nosotros al concierto." },
      { it: "Se fossi in te, accetterei l'offerta senza pensarci.", es: "Yo en tu lugar aceptaría la oferta sin pensarlo." },
      { it: "Sembra che nessuno sapesse la verità fino a ieri.", es: "Parece que nadie sabía la verdad hasta ayer." },
    ],
    usi: [
      { q: "«Si tuviera dinero, viajaría»:", options: ["Se avessi soldi, viaggerei.", "Se ho soldi, viaggerei.", "Se avrò soldi, viaggerei sempre."], answer: 0, explain: "Hipótesis irreal: se + congiuntivo imperfetto + condizionale." },
      { q: "«Pensaba que estabas cansado»:", options: ["Pensavo che fossi stanco.", "Pensavo che sei stanco.", "Pensavo che eri stanco mai."], answer: 0, explain: "Verbo principal en pasado → congiuntivo imperfetto (fossi)." },
    ],
  },

  "cu-b2-02": {
    sezioni: [
      { t: "Come si forma", body: "La pasiva italiana se forma con essere o venire + participio pasado: «Il romanzo è stato scritto negli anni Sessanta», «La legge viene applicata ovunque». El agente se introduce con da: «progettato da un ingegnere spagnolo». Con venire el participio concuerda igual («vengono pubblicati»), pero venire no se usa con estados, solo con acciones." },
      { t: "Quando si usa", body: "La pasiva con essere expresa estados y resultados («La porta è chiusa»), la pasiva de acción en textos formales («Il bilancio è stato approvato») y las formas pasivas de los verbos modales («può essere acquistato online»). Venire da dinamismo a la acción y es la elección de la prosa administrativa y periodística: «vengono pubblicati i risultati domani»." },
      { t: "Attenzione! · trampas para hispanohablantes", body: "El español prefiere la pasiva refleja («se publicaron los resultados»); el italiano culto prefiere la pasiva con essere/venire, aunque también tiene la forma si passivante («si pubblicano i risultati») más coloquial. Error típico: olvidar la concordancia del participio («è stato approvato la legge» ✗) → è stata approvata la legge. Y recuerda: con venire nunca en tiempos compuestos («è venuto pubblicato» ✗)." },
      { t: "Nel parlato", body: "Titulares de periódico: «È stato arrestato il sospetto», «Verrà inaugurato il nuovo museo». En instrucciones formales: «La domanda va compilata in stampatello» (va + participio = debe ser)." },
    ],
    esempi: [
      { it: "Il romanzo è stato scritto negli anni Sessanta a Torino.", es: "La novela fue escrita en los años sesenta en Turín." },
      { it: "La legge viene applicata in tutta Italia con poca flexibilità.", es: "La ley se aplica en toda Italia con poca flexibilidad." },
      { it: "I biglietti possono essere acquistati online o in biglietteria.", es: "Las entradas pueden comprarse online o en taquilla." },
      { it: "Questo ponte è stato progettato da un ingegnere spagnolo.", es: "Este puente fue diseñado por un ingeniero español." },
      { it: "Verranno pubblicati i risultati dell'esame domani mattina.", es: "Serán publicados los resultados del examen mañana por la mañana." },
    ],
    usi: [
      { q: "«La ley fue aprobada»:", options: ["La legge è stata approvata.", "La legge è stato approvato.", "La legge ha stata approvata."], answer: 0, explain: "essere + participio concordado: è stata approvata (femenino)." },
      { q: "venire + participio se usa sobre todo:", options: ["en pasivas de acción en textos formales", "para estados permanentes", "en el habla familiar"], answer: 0, explain: "venire aporta dinamismo: viene applicata, verranno pubblicati." },
    ],
  },

  "cu-b2-03": {
    sezioni: [
      { t: "Come si forma", body: "Il condizionale composto = condizionale de avere/essere + participio: avrei fatto, sarei andato, avremmo dovuto. La hipótesis irreal del pasado se construye: se + congiuntivo trapassato (avessi fatto / fossi andato) + condizionale composto: «Se avessi studiato, avrei passato l'esame»." },
      { t: "Quando si usa", body: "Arrepentimientos y segundas oportunidades: «Avrei dovuto prenotare prima» (debería haber reservado), «Sarebbe stato meglio prendere il treno». Conjeturas no realizadas: «Non avrei mai immaginato una città così». Es el tiempo del balance: mirar el pasado y calcular qué habría pasado." },
      { t: "Attenzione! · trampas para hispanohablantes", body: "El español «si hubiera sabido, habría venido» mapea exactamente con «se avessi saputo, sarei venuto» — misma arquitectura. Los errores clásicos: (1) condizionale presente tras se + trapassato («se avessi saputo, verrei» ✗ cuando hablas del pasado) → sarei venuto; (2) usar indicativo trapassato tras se («se avevo saputo» ✗ culto) → avessi saputo; (3) olvidar el composto en la principal con verbos de movimiento: «se fossi partito prima, sarei arrivato» (essere en ambas partes)." },
      { t: "Nel parlato", body: "El lamento italiano por excelencia: «Avrei dovuto ascoltarti», «Non avrei mai dovuto dirglielo». Para suavizar un juicio sobre el pasado: «Sarebbe stato più semplice chiedere aiuto»." },
    ],
    esempi: [
      { it: "Se avessi studiato di più, avrei passato l'esame al primo tentativo.", es: "Si hubiera estudiado más, habría pasado el examen al primer intento." },
      { it: "Avrei dovuto prenotare il ristorante con una settimana d'anticipo.", es: "Debería haber reservado el restaurante con una semana de antelación." },
      { it: "Sarebbe stato meglio prendere il treno delle sei.", es: "Habría sido mejor tomar el tren de las seis." },
      { it: "Non avrei mai immaginato una città così silenziosa di notte.", es: "Nunca habría imaginado una ciudad tan silenciosa de noche." },
      { it: "Se me l'avessi detto in tempo, ti avrei aiutato volentieri.", es: "Si me lo hubieras dicho a tiempo, te habría ayudado encantado." },
    ],
    usi: [
      { q: "«Si hubiera tenido tiempo, habría venido»:", options: ["Se avessi avuto tempo, sarei venuto.", "Se avrei avuto tempo, sarei venuto.", "Se avessi tempo, sarei venuto ieri."], answer: 0, explain: "se + trapassato (avessi avuto) + condizionale composto (sarei venuto)." },
      { q: "«Debería haber descansado»:", options: ["Avrei dovuto riposare.", "Dovrei riposare avuto.", "Avevo dovuto riposare."], answer: 0, explain: "condizionale composto: avrei dovuto + infinito." },
    ],
  },

  "cu-b2-04": {
    sezioni: [
      { t: "Come si forma", body: "Las concesivas cultas: benché / sebbene + congiuntivo (qualsia tempo), nonostante + sustantivo o + congiuntivo, pur + gerundio, malgrado + sustantivo. La concesiva general con anche se + indicativo (hecho real) o + congiuntivo (hipótesis): «Anche se hai ragione…» vs «Anche se avessi ragione…»." },
      { t: "Quando si usa", body: "Argumentar admitiendo una objeción: «Benché piovesse, siamo usciti» admite la lluvia pero mantiene la decisión. La escala de formalidad: anche se (neutro) < nonostante (formal) < benché/sebbene (muy culto) < pur + gerundio (literario): «Pur essendo stanco, è uscito»." },
      { t: "Attenzione! · trampas para hispanohablantes", body: "El español «a pesar de» se traduce nonostante SIN preposición di: «nonostante la pioggia», nunca «nonostante di la pioggia» ✗. Con verbo, nonostante exige congiuntivo: «nonostante piovesse» (no indicativo, al contrario que anche se). La distinción anche se + indicativo (concesivo real: «anche se hai ragione») vs + congiuntivo (hipotético: «anche se avessi ragione») existe también en español (aunque tienes/aunque tengas razón), así que déjate guiar por el matiz." },
      { t: "Nel parlato", body: "En el debate: «Nonostante le difficoltà, il progetto va avanti», «Benché costi caro, vale la pena». La forma con pur es la joya literaria: «Pur senza saperlo, ci ha aiutati»." },
    ],
    esempi: [
      { it: "Benché piovesse a dirotto, siamo usciti lo stesso.", es: "Aunque llovía a cántaros, salimos igualmente." },
      { it: "Nonostante il traffico, siamo arrivati in orario perfetto.", es: "A pesar del tráfico, llegamos en horario perfecto." },
      { it: "Pur essendo domenica, molti negozi erano aperti.", es: "Aunque era domingo, muchas tiendas estaban abiertas." },
      { it: "Anche se hai ragione, non mi convince del tutto.", es: "Aunque tienes razón, no me convence del todo." },
      { it: "Sebbene sia caro, quel ristorante vale ogni euro.", es: "Aunque es caro, ese restaurante vale cada euro." },
    ],
    usi: [
      { q: "«A pesar de la lluvia»:", options: ["Nonostante la pioggia", "Nonostante di la pioggia", "Benché la pioggia"], answer: 0, explain: "nonostante + sustantivo sin di; con verbo exigiría congiuntivo." },
      { q: "benché + verbo exige:", options: ["congiuntivo", "indicativo", "infinito"], answer: 0, explain: "benché/sebbene + congiuntivo (benché piovesse, benché sia)." },
    ],
  },

  "cu-b2-05": {
    sezioni: [
      { t: "Come si forma", body: "Cuando el verbo principal está en pasado (riteneva, sosteneva, diceva), la subordinada con che baja a congiuntivo imperfetto (simultáneo: «sosteneva che fosse vero») o congiuntivo trapassato (anterior: «sosteneva che avesse mentito»). Con verbos en presente, se mantiene presente/passato del subjuntivo: «sostiene che sia vero»." },
      { t: "Quando si usa", body: "Es la gramática del reportaje y del ensayo que cita fuentes: «Il giornale sosteneva che il ministro avesse mentito», «Gli esperti ritenevano che i dati fossero attendibili». También en estilo indirecto culto de opinión: «Credeva che nessuno se ne fosse accorto»." },
      { t: "Attenzione! · trampas para hispanohablantes", body: "El español aquí usa INDICATIVO en el indirecto («sostenía que era/había mentido») porque su subjuntivo solo salta con opinión en presente. El italiano culto exige subjuntivo en estas estructuras de opinión/duda en pasado — es la diferencia más seria entre los dos sistemas. Error típico B2: «sosteneva che era vero» (aceptable coloquial pero sancionado en escritura formal) → fosse vero." },
      { t: "Nel parlato", body: "En la prensa oral: «Il premier ha affermato che la riforma sia necessaria» — con i verbi di dichiarazione el subjuntivo es opcional en el habla, obligatorio en la página de opinión. La concordancia estricta distingue al escritor culto." },
    ],
    esempi: [
      { it: "Riteneva che il progetto fosse troppo ambizioso.", es: "Consideraba que el proyecto era demasiado ambicioso." },
      { it: "Il giornale sosteneva che il ministro avesse mentito al parlamento.", es: "El periódico sostenía que el ministro había mentido al parlamento." },
      { it: "Nessuno credeva che fosse possibile finire in tempo.", es: "Nadie creía que fuera posible terminar a tiempo." },
      { it: "Sembrava che la situazione fosse migliorata rispetto a marzo.", es: "Parecía que la situación había mejorado respecto a marzo." },
      { it: "L'esperto ha affermato che i dati fossero attendibili.", es: "El experto afirmó que los datos eran fiables." },
    ],
    usi: [
      { q: "«Sostenía que era cierto» (registro culto):", options: ["Sosteneva che fosse vero.", "Sosteneva che è vero.", "Sosteneva che era vero culto."], answer: 0, explain: "Opinión en pasado → congiuntivo imperfetto fosse." },
      { q: "Tras «riteneva che», la subordinada culta lleva:", options: ["congiuntivo imperfetto o trapassato", "indicativo presente", "condizionale sempre"], answer: 0, explain: "La concordancia culta: fosse/avesse fatto según el tiempo." },
    ],
  },

  "cu-b2-06": {
    sezioni: [
      { t: "Come si forma", body: "La interpretación culta usa estructuras de hipótesis: sembra che, fa pensare che, suggerisce che, lascia intendere che, indurrebbe a credere che + congiuntivo. La hipótesis sobre el presente va con presente; sobre el efecto pasado, con passato: «L'autore fa pensare che il protagonista abbia perso tutto»." },
      { t: "Quando si usa", body: "En el comentario de texto, la crítica y el análisis: «Il poeta suggerisce che la vita sia breve», «La scelta dei colori fa pensare che l'artista volesse trasmettere calma». Estas estructuras permiten interpretar sin afirmar: la cortesía académica de la hipótesis." },
      { t: "Attenzione! · trampas para hispanohablantes", body: "El español de la crítica dice «sugiere que la vida es breve» con indicativo; el italiano culto prefiere subjuntivo: «suggerisce che sia breve». No es obligatorio con todos los verbos, pero con suggerire, lasciar intendere y sembrare es la norma del ensayo. Cuidado con calcar «hace pensar que + indicativo»: en italiano culto, fa pensare che + congiuntivo." },
      { t: "Nel parlato", body: "El análisis conversacional: «Questo dettaglio fa pensare che l'autore abbia vissuto lui stesso quella scena», «La luce suggerisce che sia l'alba, non il tramonto»." },
    ],
    esempi: [
      { it: "Il poeta suggerisce che la vita sia breve e preziosa.", es: "El poeta sugiere que la vida es breve y valiosa." },
      { it: "La scelta dei colori fa pensare che l'artista volesse trasmettere calma.", es: "La elección de los colores hace pensar que el artista quería transmitir calma." },
      { it: "Questo finale lascia intendere che il protagonista abbia trovato la pace.", es: "Este final deja entender que el protagonista ha encontrado la paz." },
      { it: "Il ritmo del verso suggerisce che sia una scena di corsa.", es: "El ritmo del verso sugiere que es una escena de carrera." },
      { it: "Sembra che l'autore abbia scritto tutto in una sola notte.", es: "Parece que el autor lo escribió todo en una sola noche." },
    ],
    usi: [
      { q: "«fa pensare che» en registro culto lleva:", options: ["congiuntivo", "indicativo sempre", "infinito"], answer: 0, explain: "fa pensare che + congiuntivo (sia/abbia/volesse)." },
      { q: "«La luz sugiere que es el amanecer»:", options: ["La luce suggerisce che sia l'alba.", "La luce suggerisce che è l'alba.", "La luce suggerisce l'alba essere."], answer: 0, explain: "suggerire che + congiuntivo en el análisis culto." },
    ],
  },

  "cu-b2-07": {
    sezioni: [
      { t: "Come si forma", body: "La formación de palabras italiana: prefijos (ri- repetición: rifare; s- privación: scollegare; in-/dis- negación: instabile, disagio; anti-: anticoncezionale; ri-: rinascita) y sufijos (-zione: organizzazione; -mento: pagamento; -ità: priorità; -ista: economista; -oso: costoso; -ezza: bellezza). El género de los abstractos en -zione/-tà es femenino." },
      { t: "Quando si usa", body: "El léxico económico italiano se construye sobre estas familias: inflazione, deflazione, PIL (prodotto interno lordo), bilancio, gettito, spesa pubblica, debito, PIL pro capite. Comprender la derivación multiplica el vocabulario: da spendere → spesa, spese, spendaccione; da reddito → redditività." },
      { t: "Attenzione! · trampas para hispanohablantes", body: "Falsos amigos económicos: bilancio = balance/presupuesto (no «bilancio» dental, que es equilibrio en español); spesa = gasto (¡y también la compra!); entrata/uscita = ingreso/gasto (y también entrada/salida de un local); interesse = interés financiero ✓ y también interés general. El español -ción = italiano -zione es regular (inflación/inflazione), pero la acentuación cambia: spagnolo accentúa en la ó, italiano en la à finale." },
      { t: "Nel parlato", body: "Noticias económicas: «L'inflazione ha ridotto il potere d'acquisto delle famiglie», «Il bilancio dello Stato chiude in avanzo». Si dominas 20 sufijos, lees el periódico económico sin diccionario." },
    ],
    esempi: [
      { it: "L'inflazione ha ridotto il potere d'acquisto delle famiglie.", es: "La inflación ha reducido el poder adquisitivo de las familias." },
      { it: "Le entrate non coprono le uscite di quest'anno.", es: "Los ingresos no cubren los gastos de este año." },
      { it: "Il bilancio dello Stato è in avanzo per la prima volta.", es: "El presupuesto del Estado está en superávit por primera vez." },
      { it: "Abbiamo ridotto i costi di produzione del quindici per cento.", es: "Hemos reducido los costes de producción en un quince por ciento." },
      { it: "La congiuntura economica internazionale è sfavorevole.", es: "La coyuntura económica internacional es desfavorable." },
    ],
    usi: [
      { q: "«bilancio» en economía significa:", options: ["presupuesto / balance", "equilibrio dental", "beneficio netto"], answer: 0, explain: "Il bilancio dello Stato = presupuesto; bilancio también = balance contable." },
      { q: "«gasto» (económico):", options: ["spesa", "costo", "entrata"], answer: 0, explain: "spesa pública = gasto público; costo es el precio de producción." },
    ],
  },

  "cu-b2-08": {
    sezioni: [
      { t: "Come si forma", body: "Las preguntas indirectas de duda: mi chiedo se + congiuntivo («Mi chiedo se sia vero»), non so se + congiuntivo, dubito che + congiuntivo (siempre negativa), chiedersi dove/come/perché + congiuntivo. Con verbos en pasado, la concordancia baja: «Mi chiedevo se fosse il caso»." },
      { t: "Quando si usa", body: "En las entrevistas y el debate: «Mi chiedo se questa politica sia davvero efficace», «Dubito che i dati possano confermarlo». También en el estilo del podcast culto: «Ci si chiede come sia possibile che…». La duda intelectual se expresa con subjuntivo; la pregunta real por información usa indicativo: «Non so dov'è» (no sé dónde está, hecho)." },
      { t: "Attenzione! · trampas para hispanohablantes", body: "El español dice «no sé si ES verdad» con indicativo; el italiano culto duda con subjuntivo: «non so se sia vero» — aunque el habla cotidiana italiana también admite indicativo («non so se è vero»), el registro B2/C1 prefiere subjuntivo con verbos de duda reflexiva. dubitare che es inherentemente escéptico: «dubito che venga» = dudo que venga. No confundas dubitare che (dudar que) con dubitare di (tener dudas sobre algo/sí mismo)." },
      { t: "Nel parlato", body: "El entrevistador culto: «Mi permetto di dubitare che il piano sia realizzabile». El comentarista: «Resta da chiedersi se il governo sia davvero disposto a cambiare»." },
    ],
    esempi: [
      { it: "Mi chiedo se questa politica sia davvero efficace.", es: "Me pregunto si esta política es realmente eficaz." },
      { it: "Dubito che i dati possano confermare quella tesi.", es: "Dudo que los datos puedan confirmar esa tesis." },
      { it: "Non so se sia il caso di parlarne adesso.", es: "No sé si es el caso de hablar de ello ahora." },
      { it: "Ci si chiede come sia possibile un simile errore.", es: "Uno se pregunta cómo es posible un error semejante." },
      { it: "Mi chiedevo se fosse il caso di aspettare la settimana prossima.", es: "Me preguntaba si era el caso de esperar la semana siguiente." },
    ],
    usi: [
      { q: "«Me pregunto si es verdad» (culto):", options: ["Mi chiedo se sia vero.", "Mi chiedo se è vero.", "Mi chiedo se vero sia è."], answer: 0, explain: "Duda reflexiva → congiuntivo sia." },
      { q: "«Dudo que venga»:", options: ["Dubito che venga.", "Dubito che viene.", "Dubito di che viene."], answer: 0, explain: "dubitare che + congiuntivo, con escepticismo inherente." },
    ],
  },

  "cu-b2-09": {
    sezioni: [
      { t: "Come si forma", body: "Il passato remoto: -ai, -asti, -ò, -ammo, -aste, -arono (-are: parlai, parlò, parlàrono); -etti/-etti/-ette o -etti/-esti/-ette (-ere: credetti, prese). Irregulares esenciales: fui (essere), ebbe (avere), fece (fare), disse (dire), andò (andare), venne (venire), stette (stare), nacque (nascere), morì (morire), fu/ebbi." },
      { t: "Quando si usa", body: "Es el tiempo de la narración histórica y literaria: «Dante nacque nel 1265», «Nel 1861 l'Italia si unificò». En el sur de Italia sustituye al passato prossimo incluso en la conversación: «Ieri andai al mercato» (nápoles, Puglia, Sicilia). En el norte solo se lee: en la conversación se usa sempre il prossimo." },
      { t: "Attenzione! · trampas para hispanohablantes", body: "El remoto NO equivale exactamente al indefinido español: el italiano del norte usa il prossimo («ieri ho visto Marco») donde el español usa indefinido («ayer vi a Marco»). El remoto italiano pertenece a la escritura, la historia y el sur hablado. Al leer, asocia: fu = fue/era stato, disse = dijo/ha detto, nacque = nació. La 1ª persona -ai y la 3ª -ò («io parlai, lui parlò») — cuidado con ebbe (él tuvo) vs ebbi (yo tuve)." },
      { t: "Nel parlato", body: "En las noticias históricas: «Garibaldi sbarcò in Sicilia nel 1860». En el sur: «Stamattina parlai con Maria» suena normal; en Milán marcaría al hablante como sureño o literario." },
    ],
    esempi: [
      { it: "Dante nacque a Firenze nel 1265.", es: "Dante nació en Florencia en 1265." },
      { it: "Nel 1861 l'Italia si unificò sotto i Savoia.", es: "En 1861 Italia se unificó bajo los Saboya." },
      { it: "Garibaldi sbarcò in Sicilia con i Mille.", es: "Garibaldi desembarcó en Sicilia con los Mil." },
      { it: "La capitale d'Italia fu prima Torino, poi Firenze, infine Roma.", es: "La capital de Italia fue primero Turín, luego Florencia, finalmente Roma." },
      { it: "Scrisse il suo capolavoro in soli tre mesi.", es: "Escribió su obra maestra en solo tres meses." },
    ],
    usi: [
      { q: "El passato remoto se usa hoy sobre todo:", options: ["en narración histórica y en el sur de Italia", "en la conversación del norte", "en las recetas"], answer: 0, explain: "Norte hablado = prossimo; remoto = historia, literatura y sur." },
      { q: "«Dante nació en 1265»:", options: ["Dante nacque nel 1265.", "Dante è nato nel 1265.", "Dante nasceva nel 1265."], answer: 0, explain: "Hecho histórico puntual → nacque (remoto); è nato es el italiano del norte hablado." },
    ],
  },

  "cu-b2-10": {
    sezioni: [
      { t: "Come si forma", body: "La nominalización convierte verbos y adjetivos en sustantivos: aumentare → l'aumento; decidere → la decisione; sviluppare → lo sviluppo; possibile → la possibilità; attento → l'attenzione. La estructura «il fatto che + congiuntivo» nominaliza oraciones enteras: «il fatto che sia partito» (el hecho de que haya salido)." },
      { t: "Quando si usa", body: "El estilo académico italiano evita las oraciones con verbo personal y prefiere el sintagma nominal: en vez de «i prezzi sono aumentati e questo ha creato problemi» → «l'aumento dei prezzi ha creato problemi». Otros patrones: «la mancanza di», «la presenza di», «la necessità di + infinito», «l'uso di»." },
      { t: "Attenzione! · trampas para hispanohablantes", body: "El español también nominaliza, pero tolera mejor las subordinadas con que. El italiano escrito formal considera «debole» una prosa con demasiadas oraciones finitas: nominalizar es la marca del escritor culto. Error típico: mezclar género de los abstractos (-zione, -tà, -ezza son femeninos: la decisione, la possibilità, la bellezza; -mento, -ore son masculinos: il pagamento, il valore)." },
      { t: "Nel parlato", body: "En presentaciones: «L'introduzione della nuova norma ha generato un dibattito acceso». La nominalización condensa y eleva: con diez sintagmas nominales bien construidos, cualquier informe suena profesional." },
    ],
    esempi: [
      { it: "L'aumento dei prezzi ha creato difficoltà alle famiglie.", es: "El aumento de los precios ha creado dificultades a las familias." },
      { it: "La decisione del governo ha sorpreso tutti gli analisti.", es: "La decisión del gobierno sorprendió a todos los analistas." },
      { it: "Il fatto che sia partito senza avvisare mi preoccupa.", es: "El hecho de que haya salido sin avisar me preocupa." },
      { it: "La crescita della disoccupazione giovanile resta un'emergenza.", es: "El crecimiento del desempleo juvenil sigue siendo una emergencia." },
      { it: "L'introduzione della tassa ha generato un dibattito acceso.", es: "La introducción del impuesto ha generado un debate encendido." },
    ],
    usi: [
      { q: "Los abstractos en -zione y -tà son:", options: ["femeninos (la decisione, la possibilità)", "masculinos (il decisione)", "variables"], answer: 0, explain: "-zione, -tà, -ezza → femenino; -mento, -ore → masculino." },
      { q: "«El hecho de que haya salido»:", options: ["Il fatto che sia partito", "Il fatto che è partito", "Il fatto di sia partito"], answer: 0, explain: "il fatto che + congiuntivo (sia partito)." },
    ],
  },

  "cu-b2-11": {
    sezioni: [
      { t: "Come si forma", body: "Il gerundio: presente (-ando/-endo: guardando, vedendo) para acción simultánea; passato (avendo/essendo + participio: avendo visto, essendo tornato) para causa anterior. Expresa causa, tiempo, medio y condición. NUNCA se usa para la acción en curso: eso es stare + gerundio (sto mangiando)." },
      { t: "Quando si usa", body: "Causal: «Essendo stanco, ho deciso di restare» (como estaba cansado…). Temporal: «Guardando il quadro, ho notato un dettaglio» (al mirar…). De medio/manera: «È uscito correndo» (salió corriendo). Anterioridad: «Avendo finito il lavoro, siamo andati a cena»." },
      { t: "Attenzione! · trampas para hispanohablantes", body: "La gran trampa: el gerundio simple italiano NO expresa acción en curso. «Mangiando la pasta» significa 'mientras/como como la pasta', nunca 'estoy comiendo pasta' — eso es sto mangiando la pasta. Otro error: construir el gerundio con sujeto distinto al principal («Essendo stanco, il film mi è sembrato lungo» ✗ — ¿quién está cansado?). El español «al + infinitivo» se traduce por gerundio: al mirar = guardando." },
      { t: "Nel parlato", body: "El gerundio causal es la estructura elegante por excelencia: «Non avendo ricevuto risposta, ho deciso di scrivere di nuovo». En las instrucciones: «Mescolando continuamente, aggiungere il burro»." },
    ],
    esempi: [
      { it: "Essendo stanco morto, ho deciso di restare a casa.", es: "Como estaba muerto de cansancio, decidí quedarme en casa." },
      { it: "Guardando il quadro da vicino, ho notato un dettaglio nascosto.", es: "Mirando el cuadro de cerca, noté un detalle escondido." },
      { it: "Avendo finito il lavoro prima, siamo andati a cena fuori.", es: "Habiendo terminado el trabajo antes, fuimos a cenar fuera." },
      { it: "È uscito di corsa, sbattendo la porta.", es: "Salió corriendo, azotando la puerta." },
      { it: "Sto leggendo un romanzo bellissimo in questi giorni.", es: "Estoy leyendo una novela bellísima estos días." },
    ],
    usi: [
      { q: "«Estoy comiendo» se dice:", options: ["Sto mangiando.", "Mangiando.", "Io mangiando ora."], answer: 0, explain: "La acción en curso exige stare + gerundio; el gerundio simple es causal/temporal." },
      { q: "«Como no tenía respuesta, escribí de nuevo»:", options: ["Non avendo risposta, ho scritto di nuovo.", "Non avendo risposta, scrivevo di nuovo.", "Avendo non risposta, ho scritto di nuovo."], answer: 0, explain: "Gerundio pasado con avere: avendo + participio." },
    ],
  },

  "cu-b2-12": {
    sezioni: [
      { t: "La mappa di B2", body: "B2 es el arsenal completo de la argumentación: congiuntivo imperfetto e trapassato (hipótesis), condizionale composto (arrepentimiento), pasiva con essere/venire, concesivas (benché, pur + gerundio), concordancia culta de los subjuntivos en el estilo indirecto, formación de palabras del léxico económico, preguntas indirectas de duda, passato remoto, nominalización y gerundio causal." },
      { t: "Gli errori numero uno", body: "Cinco errores B2: (1) «se avrei saputo» ✗ → se avessi saputo; (2) «nonostante di» ✗ → nonostante; (3) «è stato approvato il legge» ✗ (sin concordar) → è stata approvata; (4) «mangiando la pasta» para decir 'estoy comiendo' ✗ → sto mangiando; (5) indicativo tras «sosteneva che» en escritura formal → congiuntivo." },
      { t: "Come mescolare tutto", body: "Un párrafo B2 maduro: «Nonostante le critiche, il progetto è stato portato avanti. Se i fondi fossero stati maggiori, i risultati sarebbero stati migliori; resta comunque il fatto che, avendo completato la prima fase, il comitato possa ora puntare alla seconda. Benché i dati siano ancora parziali, nessuno dubita che la direzione sia quella giusta»." },
      { t: "Il prossimo passo", body: "C1 perfecciona el registro académico: reformulación (ossia, vale a dire), consecutivas literarias, trapassato remoto, sintaxis del título periodístico y el lenguaje jurídico. La gramática ya no es supervivencia: es estilo." },
    ],
    esempi: [
      { it: "Se i fondi fossero stati maggiori, i risultati sarebbero stati migliori.", es: "Si los fondos hubieran sido mayores, los resultados habrían sido mejores." },
      { it: "Il progetto è stato portato avanti nonostante le critiche.", es: "El proyecto fue llevado adelante a pesar de las críticas." },
      { it: "Avendo completato la prima fase, il comitato punta alla seconda.", es: "Habiendo completado la primera fase, el comité apunta a la segunda." },
      { it: "Benché i dati siano parziali, la direzione sembra giusta.", es: "Aunque los datos son parciales, la dirección parece correcta." },
      { it: "L'aumento dei costi ha reso necessario un nuovo piano industriale.", es: "El aumento de los costes ha hecho necesario un nuevo plan industrial." },
    ],
    usi: [
      { q: "«Si hubiera sabido, habría venido»:", options: ["Se avessi saputo, sarei venuto.", "Se avrei saputo, sarei venuto.", "Se sapevo, venivo già."], answer: 0, explain: "Hipótesis pasada: se + trapassato congiuntivo + condizionale composto." },
      { q: "«Habiendo terminado, fuimos a cenar»:", options: ["Avendo finito, siamo andati a cena.", "Finendo, siamo andati a cena.", "Avuto finito, andavamo a cena."], answer: 0, explain: "Gerundio passato: avendo finito." },
    ],
  },
};
