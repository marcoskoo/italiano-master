import type { CbGrammarDeep } from "../../extra/grammar-deep";

/* ═══ DE A2 · Grammar deep — 12 unidades (Hochdeutsch de Alemania) ═══
   Explicación amplia de la gramática de cada unidad, con las trampas
   específicas del hispanohablante. Campos `.it` = alemán de Alemania,
   `.es` = español (tuteo). Secciones: So funktioniert es / Wann man es
   benutzt / Achtung (für Spanischsprachige) / Im echten Gespräch.     */

export const DE_DEEP_A2: Record<string, CbGrammarDeep> = {
  "de-cu-a2-01": {
    sezioni: [
      { t: "So funktioniert es", body: "El Perfekt es el pasado de la conversación: haben conjugado en posición 2 y el participio II al final. Los verbos regulares forman el participio con ge- + raíz + -t: machen → gemacht, kaufen → gekauft, arbeiten → gearbeitet. Los fuertes cambian la vocal y terminan en -en: trinken → getrunken, lesen → gelesen, schlafen → geschlafen, treffen → getroffen." },
      { t: "Wann man es benutzt", body: "Sirve para contar acciones pasadas: el finde, ayer, la última semana. «Am Samstag habe ich einen Film gesehen», «Ich habe lange geschlafen», «Ich habe eine Nachricht geschickt». Los verbos en -ieren y los que llevan prefijo inseparable (be-, ver-, er-) no añaden ge-: telefonieren → telefoniert, besuchen → besucht; los separables meten el ge- en medio: einkaufen → eingekauft." },
      { t: "Achtung (für Spanischsprachige)", body: "1) «Ich habe gemacht» NO equivale a «he hecho»: el Perfekt alemán es el pasado normal del habla y corresponde a nuestro pretérito indefinido («hice»); la diferencia entre perfecto e indefinido no existe aquí. 2) El participio cierra siempre la frase: nunca «Ich habe gemacht einen Film», sino «Ich habe einen Film gemacht». 3) Con -ieren jamás ge-: «Ich habe in Madrid studiert», no «gestudiert»." },
      { t: "Im echten Gespräch", body: "El lunes alemán arranca con «Na, wie war dein Wochenende?». Responde con dos o tres Perfekt y valora el día: «Es war super». La partícula denn suaviza la pregunta: «Was hast du denn gemacht?». Para reaccionar al finde del otro: «Schön!», «Toll!», «Was für ein Wochenende!». Y ojo: quien pregunta de verdad escucha la respuesta." },
    ],
    esempi: [
      { it: "Ich habe gestern einen Film gesehen.", es: "Ayer vi una película." },
      { it: "Wir haben Pizza gemacht und Musik gehört.", es: "Hicimos pizza y escuchamos música." },
      { it: "Hast du schon gegessen?", es: "¿Ya comiste?" },
      { it: "Sie hat ein Buch über Berlin gelesen.", es: "Leyó un libro sobre Berlín." },
      { it: "Ich habe meine Oma angerufen.", es: "Llamé a mi abuela." },
    ],
    usi: [
      { q: "Quieres contar que esta mañana compraste pan. ¿Qué dices?", options: ["Ich habe Brot gekauft.", "Ich habe Brot kaufen.", "Ich kaufe Brot gekauft."], answer: 0, explain: "Perfekt correcto: haben + participio gekauft cerrando la frase." },
      { q: "El participio de telefonieren es:", options: ["getelefoniert", "telefoniert", "telefoniert haben"], answer: 1, explain: "Los verbos en -ieren forman el participio sin ge-: telefoniert." },
    ],
  },

  "de-cu-a2-02": {
    sezioni: [
      { t: "So funktioniert es", body: "Los verbos de movimiento (fahren, gehen, laufen, fliegen, kommen, umsteigen) y los de cambio de estado (aufstehen, einschlafen) forman el Perfekt con sein: «Wir sind nach Potsdam gefahren». También bleiben usa sein, aunque no haya movimiento: «Ich bin in Berlin geblieben». El español dice «fui» en una sola palabra; el alemán necesita ist/bin/sind + participio: «Ich bin gelaufen»." },
      { t: "Wann man es benutzt", body: "Para contar trayectos y excursiones: «Wir sind mit dem Zug gefahren», «Wir sind durch den Park gelaufen», «Wir sind um 20 Uhr zurückgekommen». En una misma historia se mezclan con haben: «Wir haben Kuchen gegessen und sind dann gelaufen». El destino va con nach + ciudad («nach Potsdam»), y «a casa» es fijo: «Wir sind nach Hause gegangen»." },
      { t: "Achtung (für Spanischsprachige)", body: "1) «Wir haben gefahren» es imposible: movimiento → sein. 2) fahren (con vehículo) no es gehen (a pie): «Ich bin zur Arbeit gegangen» = fui andando. 3) Con los verbos separables el prefijo se pega al participio: aufstehen → aufgestanden, zurückkommen → zurückgekommen, einsteigen → eingestiegen; nunca «geaufstanden»." },
      { t: "Im echten Gespräch", body: "La pregunta amable es «Wie war dein Ausflug?». Encadena etapas con zuerst, danach, dann: «Zuerst sind wir gelaufen, danach sind wir essen gegangen». El cierre clásico es «Es hat Spaß gemacht!» — pasárselo bien lleva haben aunque la excursión sea toda movimiento. Para apuntarte a la próxima: «Nächstes Mal komme ich mit»." },
    ],
    esempi: [
      { it: "Wir sind mit dem Fahrrad gefahren.", es: "Fuimos en bici." },
      { it: "Ich bin um 6 Uhr aufgestanden.", es: "Me levanté a las 6." },
      { it: "Wann seid ihr angekommen?", es: "¿Cuándo llegasteis?" },
      { it: "Er ist zu Hause geblieben.", es: "Él se quedó en casa." },
      { it: "Ich bin schnell eingeschlafen.", es: "Me dormí enseguida." },
    ],
    usi: [
      { q: "«Wir ___ nach München gefahren.»", options: ["sind", "haben", "seid"], answer: 0, explain: "fahren es movimiento: Perfekt con sein; con wir la forma es sind." },
      { q: "«Me fui a casa andando» se dice:", options: ["Ich habe nach Hause gegangen.", "Ich bin nach Hause gegangen.", "Ich bin nach Hause gehen."], answer: 1, explain: "gehen lleva sein y el participio gegangen va al final." },
    ],
  },

  "de-cu-a2-03": {
    sezioni: [
      { t: "So funktioniert es", body: "Para sein, haben y los modales, el pasado coloquial es el Präteritum: war/waren, hatte/hatten, konnte, musste, wollte, durfte, sollte. Los modales pierden la diéresis: können → konnte (nunca «könnte», que es el condicional). Con ich y con er/sie/es la forma coincide: ich konnte = er konnte; y el verbo principal se queda en infinitivo al final: «Ich musste jeden Tag lernen»." },
      { t: "Wann man es benutzt", body: "Es el tiempo del fondo del pasado: infancia, escenarios, posesiones y sensaciones: «Ich war bei meinen Großeltern», «Ich hatte ein Fahrrad», «Ich wollte immer spielen», «Ich durfte nicht lange fernsehen». Mientras los acontecimientos puntuales van en Perfekt, lo que rodea la escena se cuenta con war/hatte y modales." },
      { t: "Achtung (für Spanischsprachige)", body: "1) El imperfecto español («tenía ocho años») se traduce por hatte o war: «Ich war acht Jahre alt», sin Perfekt. 2) Para sein el Präteritum manda incluso hablando: «Ich war krank», no «Ich bin krank gewesen». 3) El verbo principal del modal no se conjuga: «Ich musste Hausaufgaben machen», jamás «Ich musste Hausaufgaben machte»." },
      { t: "Im echten Gespräch", body: "Ante el álbum de fotos salta el Präteritum: «Wo war das?», «Du warst so klein!», «Wir hatten so viel Glück». Preguntas de infancia: «Konntest du schon schwimmen?», «Musstest du viel lernen?». Y el aprendizaje también tiene su Perfekt: «Mein Opa hat es mir beigebracht» — beibringen va con haben." },
    ],
    esempi: [
      { it: "Mit sechs konnte ich Rad fahren.", es: "Con seis años sabía montar en bici." },
      { it: "Wir hatten einen Garten mit Apfelbäumen.", es: "Teníamos un jardín con manzanos." },
      { it: "Als Kind wollte ich Astronaut werden.", es: "De pequeño quería ser astronauta." },
      { it: "Ich war oft bei meiner Tante.", es: "Estaba a menudo en casa de mi tía." },
      { it: "Durftest du abends lange fernsehen?", es: "¿Te dejaban ver la tele hasta tarde?" },
    ],
    usi: [
      { q: "«De pequeño tenía que estudiar mucho» se dice:", options: ["Als Kind musste ich viel lernen.", "Als Kind ich musste viel lernen.", "Als Kind musste ich viel gelernt."], answer: 0, explain: "muss → musste; el verbo principal queda en infinitivo al final." },
      { q: "El pasado de können es:", options: ["könnte", "konnte", "gekönnt"], answer: 1, explain: "Präteritum sin diéresis: konnte; hätte/könnte serían Konjunktiv II." },
    ],
  },

  "de-cu-a2-04": {
    sezioni: [
      { t: "So funktioniert es", body: "Alemán hablado: Perfekt para los hechos («Ich bin eingeschlafen», «Ich habe viel Glück gehabt» —mejor dicho hatte—). Alemán escrito (periódico, novela, informe): Präteritum («Der Zug fuhr um acht Uhr ab»). Y hay un club selecto que usa Präteritum incluso hablando: sein, haben y los modales: «Dann kam die Kontrolle. Ich hatte meine Fahrkarte.»" },
      { t: "Wann man es benutzt", body: "Al contar una anécdota mezclas ambos: los eventos sueltos en Perfekt y el hilo descriptivo en Präteritum: «Ich war im Zug und habe geschlafen. Dann kam eine Frau. Sie hatte ein Ladekabel.» En un correo formal o un texto narrativo cambia todo a Präteritum: la frontera entre ambos es el registro, no el matiz temporal." },
      { t: "Achtung (für Spanischsprachige)", body: "1) El español elige entre indefinido e imperfecto; el alemán elige entre Perfekt (oral) y Präteritum (escrito): no busques el matiz español. 2) «Ich war eingeschlafen» existe pero es Plusquamperfekt (anterior a otra acción pasada), no lo uses como pasado normal. 3) kam en Präteritum suena narrativo y perfecto en una historia: «Dann kam die Fahrkontrolle»." },
      { t: "Im echten Gespräch", body: "Para pedir la historia: «Erzähl!», «Was ist denn passiert?». Cuéntala con ritmo: «Zuerst war alles normal. Dann». Cierra con valoración: «Was für ein Tag!», «Zum Glück hatte jemand ein Ladekabel». El oyente alemán asiente: así se cuentan historias — hechos en Perfekt, tela de fondo en war und hatte." },
    ],
    esempi: [
      { it: "Letzte Woche habe ich eine komische Geschichte erlebt.", es: "La semana pasada me pasó una historia cómica." },
      { it: "Plötzlich kam ein Mann mit einem Hund.", es: "De pronto llegó un hombre con un perro." },
      { it: "Ich hatte kein Glück, aber viel Zeit.", es: "No tuve suerte, pero sí mucho tiempo." },
      { it: "Zum Glück war der letzte Zug noch da.", es: "Por suerte, el último tren seguía allí." },
      { it: "Am Ende haben wir zusammen Kaffee getrunken.", es: "Al final tomamos un café juntos." },
    ],
    usi: [
      { q: "En un mensaje informal a un amigo, «fui al cine» se dice:", options: ["Ich ging ins Kino.", "Ich bin ins Kino gegangen.", "Ich war ins Kino gegangen."], answer: 1, explain: "En el habla domina el Perfekt con sein; ging suena a lengua escrita." },
      { q: "¿Qué frase encaja en una narración escrita?", options: ["Dann hat die Kontrolle gekommen.", "Dann kam die Kontrolle.", "Dann die Kontrolle kam."], answer: 1, explain: "La narrativa escrita usa Präteritum (kam) con el verbo en posición 2." },
    ],
  },

  "de-cu-a2-05": {
    sezioni: [
      { t: "So funktioniert es", body: "Futur I: werden conjugado en posición 2 + infinitivo al final: ich werde, du wirst, er/sie/es wird, wir werden, ihr werdet, sie werden. «Ich werde zu Hause bleiben», «Wir werden am Main spazieren gehen». Para prometer: «Ich werde pünktlich sein». La forma du wirst es irregular: no «du werdest»." },
      { t: "Wann man es benutzt", body: "Para planes, intenciones y predicciones: «Ich werde am Samstag ausschlafen», «Es wird bestimmt lustig». Con sicher, bestimmt, wahrscheinlich marcas el grado de seguridad. Matiz importante: para planes concretos los alemanes usan a menudo el presente con marcador temporal («Ich bleibe zu Hause»); el Futur I añade promesa o predicción." },
      { t: "Achtung (für Spanischsprachige)", body: "1) werden no es «volver»: significa «llegar a ser» o es el auxiliar del futuro; «volver» es zurückkommen. 2) El infinitivo cierra la frase: nunca «Ich werde bleiben zu Hause», sino «Ich werde zu Hause bleiben». 3) Con wollen no necesitas werden: «Ich will mitkommen» ya es futuro intencional." },
      { t: "Im echten Gespräch", body: "El viernes se pregunta «Was machst du am Wochenende?» o «Was wirst du am Samstag machen?». Fijar la quedada (Verabredung) es casi ceremonial: «Wo treffen wir uns? — Am Hauptbahnhof, um 10 Uhr». Se sella con «Abgemacht!». Llegar tarde sin avisar rompe un contrato invisible: mejor escribe «Ich werde pünktlich sein»." },
    ],
    esempi: [
      { it: "Ich werde am Samstag ausschlafen.", es: "El sábado dormiré hasta tarde." },
      { it: "Wir werden durch die Altstadt bummeln.", es: "Pasearemos por el casco viejo." },
      { it: "Du wirst das Museum toll finden.", es: "El museo te va a encantar." },
      { it: "Es wird bestimmt lustig.", es: "Seguramente será divertido." },
      { it: "Ich werde dich vom Bahnhof abholen.", es: "Te recogeré en la estación." },
    ],
    usi: [
      { q: "«El domingo leeré un libro» se dice:", options: ["Ich werde am Sonntag ein Buch lesen.", "Ich werde lesen ein Buch am Sonntag.", "Ich werde am Sonntag ein Buch gelesen."], answer: 0, explain: "werden en posición 2 y el infinitivo lesen cierra la frase." },
      { q: "Al fijar una quedada, un alemán concreta:", options: ["Día, hora y punto de encuentro exactos", "Solo el barrio, y ya", "Nada: se improvisa allí"], answer: 0, explain: "La Verabredung fija hora y lugar; improvisar es la excepción." },
    ],
  },

  "de-cu-a2-06": {
    sezioni: [
      { t: "So funktioniert es", body: "Anatomía del anuncio alemán: «Zimmer in 3er-WG, 18 qm, möbliert, ab sofort» = habitación en piso compartido de tres, 18 metros, amueblada, disponible desde ya. «450 Euro warm» incluye los Nebenkosten (gastos de calefacción, agua, basura); «kalt» es el alquiler base sin ellos. «Kaution: zwei Monatsmieten» = fianza de dos mensualidades, que se devuelve al marcharte. «Provisionsfrei» = sin comisión de agencia." },
      { t: "Wann man es benutzt", body: "Para buscar: «Ich suche ein Zimmer», «Ich habe die Anzeige gelesen». En la visita: «Wie hoch ist die Kaution?», «Muss ich die Küche teilen?», «Wann kann ich einziehen?». Con el Vermieter (casero) y con Mitbewohner desconocidos, el trato cortés de Sie es la opción segura hasta que ofrezcan el du." },
      { t: "Achtung (für Spanischsprachige)", body: "1) Falso amigo: die Miete es el alquiler que pagas; la renta como ingreso mensual es das Einkommen. 2) die Wohnung es el piso entero; una habitación es das Zimmer: buscar «eine Wohnung» cuando quieres «ein Zimmer» te saca del mercado de WGs. 3) warm y kalt no hablan de temperatura: significan con gastos y sin gastos." },
      { t: "Im echten Gespräch", body: "En la Besichtigung de una WG te examinan tanto tú al piso como ellos a ti: la convivencia importa. Preguntas estrella: «Wie ist die Lage?», «Wer putzt wann?», «Wie wohnt ihr zusammen?». Cierre educado: «Danke für die Zeit — ich werde Ihnen schreiben». Y si te gusta, responde rápido: en Berlín una buena habitación dura horas." },
    ],
    esempi: [
      { it: "Das Zimmer ist möbliert und ab sofort frei.", es: "La habitación está amueblada y libre desde ya." },
      { it: "Die Miete kostet 450 Euro warm.", es: "El alquiler cuesta 450 euros con gastos incluidos." },
      { it: "Die Kaution beträgt zwei Monatsmieten.", es: "La fianza asciende a dos mensualidades." },
      { it: "Ich teile die Küche mit zwei Mitbewohnern.", es: "Comparto la cocina con dos compañeros de piso." },
      { it: "Der Vermieter wohnt im Erdgeschoss.", es: "El casero vive en la planta baja." },
    ],
    usi: [
      { q: "En un anuncio lees «400 Euro kalt». Significa:", options: ["400 euros con todos los gastos", "400 euros sin los Nebenkosten", "400 euros de fianza"], answer: 1, explain: "kalt = alquiler base; los Nebenkosten se suman aparte (warm los incluye)." },
      { q: "«La renta que ingresas cada mes» en alemán es:", options: ["die Miete", "das Einkommen", "die Kaution"], answer: 1, explain: "die Miete es lo que pagas; el ingreso mensual es das Einkommen (falso amigo)." },
    ],
  },

  "de-cu-a2-07": {
    sezioni: [
      { t: "So funktioniert es", body: "El malestar tiene dos fórmulas: «Ich habe Halsschmerzen / Kopfschmerzen / Bauchschmerzen» (nombre del dolor en plural) y «Mir tut der Kopf weh»: pronombre en dativo + tun/tut + la parte del cuerpo + weh. En plural el verbo cambia: «Mir tun die Augen weh». Para la duración, presente con seit: «Ich habe seit drei Tagen Fieber»." },
      { t: "Wann man es benutzt", body: "sollen recoge la orden o el consejo de otra persona: «Sie sollen viel Wasser trinken» (te lo manda el médico), «Ich soll mich schonen» (me lo han recetado). Guion de la consulta: «Was fehlt Ihnen?», «Seit wann?», «Ich verschreibe Ihnen Tabletten». Con Rezept y Krankmeldung sales resuelto." },
      { t: "Achtung (für Spanischsprachige)", body: "1) Lo estándar es «Mir tut der Kopf weh»; Kopfweh es coloquial y no basta en la consulta. 2) tut/tun concuerda con la parte del cuerpo, no contigo: «Mir tut der Rücken weh, aber mir tun die Füße weh». 3) sollen ≠ müssen: sollen informa de la norma ajena (la del médico); müssen expresa tu obligación propia." },
      { t: "Im echten Gespräch", body: "Guion de la Praxis: recepción («Sie sind dran»), síntomas, exploración y diagnóstico suave: «Das ist nur eine Erkältung». La despedida doble: «Gute Besserung!» del personal. En la Apotheke: «Haben Sie das Rezept? — Nehmen Sie dreimal täglich eine, nach dem Essen.» Y para el trabajo: «Ich brauche eine Krankmeldung ab heute.»" },
    ],
    esempi: [
      { it: "Was fehlt Ihnen?", es: "¿Qué le pasa?" },
      { it: "Mir tun die Augen weh.", es: "Me duelen los ojos." },
      { it: "Ich habe seit zwei Tagen Husten.", es: "Llevo dos días con tos." },
      { it: "Sie sollen dreimal täglich eine Tablette nehmen.", es: "Debe tomar una pastilla tres veces al día." },
      { it: "Ich soll drei Tage im Bett bleiben.", es: "Debo quedarme tres días en la cama." },
    ],
    usi: [
      { q: "«Me duelen los pies» se dice:", options: ["Mir tut die Füße weh.", "Mir tun die Füße weh.", "Mich tun die Füße weh."], answer: 1, explain: "Con plural (Füße) el verbo es tun; el pronombre va en dativo: mir." },
      { q: "El médico te ha mandado beber mucha agua y lo cuentas:", options: ["Ich muss viel Wasser trinken.", "Ich soll viel Wasser trinken.", "Ich will viel Wasser trinken."], answer: 1, explain: "sollen recoge la indicación del médico; müssen sería tu obligación propia." },
    ],
  },

  "de-cu-a2-08": {
    sezioni: [
      { t: "So funktioniert es", body: "Tres imperativos: du = raíz sin -st (mach!, nimm!, iss!, lies!, gib!), a menudo con diéresis (du fährst → fahr!); ihr = raíz + t (macht!, nehmt!, esst!); Sie = infinitivo + Sie (Machen Sie!, Nehmen Sie!). Con verbos separables el prefijo se va al final: «Rühr alles gut um!». El bitte suaviza cualquier orden: «Hol bitte die Kartoffeln!»." },
      { t: "Wann man es benutzt", body: "Para recetas e instrucciones en la cocina familiar (du/ihr) y para órdenes corteses a desconocidos (Sie): «Kommen Sie herein!». Las cantidades alemanas de cocina: ein Kilo Kartoffeln, 500 Gramm Mehl, zwei Esslöffel Öl, ein Teelöffel Senf, eine Prise Salz, ein Glas Gurken, eine Tasse Zucker, ein Päckchen Backpulver." },
      { t: "Achtung (für Spanischsprachige)", body: "1) El imperativo negativo usa la forma afirmativa + nicht: «Mach das nicht!», no un subjuntivo como el español «no hagas». 2) Varios monosílabos conservan una -e hablada: «Gib mir das Salz!», «Hab keine Angst!» — la -e escrita es opcional (mach/mache). 3) sein es irregular: sei! (du) y seid! (ihr): «Sei ruhig!», «Seid vorsichtig!»." },
      { t: "Im echten Gespräch", body: "En la cocina suenan órdenes cortas con afecto: «Schneide die Zwiebeln klein!», «Probier mal!», «Deck bitte den Tisch!». Antes de comer, el «Guten Appetit!» es casi obligatorio y se responde «Danke, gleichfalls!». El mejor premio para quien cocinó: «Das war wirklich lecker!» — dicho con la boca llena funciona igual." },
    ],
    esempi: [
      { it: "Nimm zwei Eier aus dem Kühlschrank!", es: "¡Toma dos huevos de la nevera!" },
      { it: "Wascht euch gründlich die Hände!", es: "¡Lavaos bien las manos!" },
      { it: "Kochen Sie zuerst das Wasser!", es: "¡Hierva primero el agua!" },
      { it: "Probier mal! Ist es salzig genug?", es: "¡Prueba! ¿Está bastante salado?" },
      { it: "Sei bitte vorsichtig mit dem Messer!", es: "¡Ten cuidado con el cuchillo, por favor!" },
    ],
    usi: [
      { q: "«¡Siéntese usted, por favor!» se dice:", options: ["Setzen Sie sich bitte!", "Setzen sich Sie bitte!", "Sie setzen bitte sich!"], answer: 0, explain: "Imperativo de Sie = infinitivo + Sie; el reflexivo sich se mantiene." },
      { q: "El imperativo de du para lesen es:", options: ["Lies den Text!", "Les den Text!", "Lest den Text!"], answer: 0, explain: "lesen → lies (cambia la vocal y pierde la -st); lest sería la forma de ihr." },
    ],
  },

  "de-cu-a2-09": {
    sezioni: [
      { t: "So funktioniert es", body: "La experiencia laboral se cuenta en Perfekt: «Ich habe zwei Jahre als Kellner gearbeitet», «Ich habe Bestellungen aufgenommen und Rechnungen geschrieben». weil introduce la causa con coma obligatoria y el verbo al final: «Ich möchte hier arbeiten, weil ich Kaffee liebe». También dass funciona igual: «Ich finde gut, dass Sie Erfahrung haben»." },
      { t: "Wann man es benutzt", body: "En la entrevista (siempre Sie): «Erzählen Sie kurz von sich», «Warum wollen Sie bei uns arbeiten?», «Wann können Sie anfangen?». Respuestas modelo: «Ich habe ein Praktikum gemacht», «Ich war für die Getränke zuständig», «Ich kann am Wochenende arbeiten, weil ich unter der Woche Kurse habe»." },
      { t: "Achtung (für Spanischsprachige)", body: "1) La trampa número uno del alemán: weil manda el verbo al final — «weil ich Kaffee liebe», nunca «weil ich liebe Kaffee». 2) La coma ante weil es obligatoria, al revés que con «porque» en español. 3) No respondas a un porque con un sintagma suelto: «Weil Kaffee» no basta; hace falta oración completa con el verbo conjugado al final." },
      { t: "Im echten Gespräch", body: "Frau Hansen abre con «Erzählen Sie kurz von sich»: dos frases de trayectoria en Perfekt y una de motivación con weil bastan. Cierra mostrando ganas: «Ich freue mich auf die Arbeit». Preguntar condiciones es legítimo: «Wie sind die Arbeitszeiten?». Y tras el apretón de manos: «Vielen Dank für das Gespräch»." },
    ],
    esempi: [
      { it: "Ich habe ein Praktikum in einem Café gemacht.", es: "Hice unas prácticas en una cafetería." },
      { it: "Ich war für die Getränke zuständig.", es: "Me encargaba de las bebidas." },
      { it: "Ich möchte hier arbeiten, weil ich Gäste gern bediene.", es: "Quiero trabajar aquí porque me gusta atender a los clientes." },
      { it: "Ich kann am Wochenende arbeiten, weil ich unter der Woche Kurse habe.", es: "Puedo trabajar los findes porque entre semana tengo clases." },
      { it: "Warum haben Sie Ihren letzten Job gewechselt?", es: "¿Por qué cambió su último trabajo?" },
    ],
    usi: [
      { q: "«Quiero el trabajo porque me gusta la ciudad» se dice:", options: ["Ich will den Job, weil ich die Stadt mag.", "Ich will den Job, weil ich mag die Stadt.", "Ich will den Job, weil die Stadt gefällt mich."], answer: 0, explain: "Con weil el verbo va al final: mag; y la coma ante weil es obligatoria." },
      { q: "En la entrevista con la jefa usas:", options: ["Kannst du am Wochenende arbeiten?", "Können Sie am Wochenende arbeiten?", "Könnt ihr am Wochenende arbeiten?"], answer: 1, explain: "Con jefas y desconocidos, el trato formal de Sie." },
    ],
  },

  "de-cu-a2-10": {
    sezioni: [
      { t: "So funktioniert es", body: "La previsión usa Futur I impersonal: «Es wird sonnig», «Es wird regnen», «Die Temperaturen werden steigen». Con adjetivos del tiempo: sonnig, windig, bewölkt, neblig, stürmisch, kalt. El pasado meteorológico va en Perfekt: «Es hat jeden Tag geregnet»; y la lluvia torrencial tiene su expresión fija: «Es regnet in Strömen»." },
      { t: "Wann man es benutzt", body: "Para decidir vacaciones: «Die Vorhersage sagt, es wird morgen windig». Ubicaciones útiles: an der Küste, in den Bergen, an der Nordsee, in den Alpen. Con grados de certeza: «Es wird bestimmt schön», «Es wird wahrscheinlich kalt». Y el plan resultante: «Wir werden am Strand spazieren gehen»." },
      { t: "Achtung (für Spanischsprachige)", body: "1) El sujeto del tiempo es es, sin artículo: «Es regnet», «Es wird kalt» — no «Das Wetter regnet». 2) No traduzcas «va a llover» con ir: el futuro alemán es werden + infinitivo: «Es wird regnen». 3) La meteorología y los horarios alemanes van a 24 horas: «um 14 Uhr», nunca «a las 2 de la tarde»." },
      { t: "Im echten Gespräch", body: "Comparar destinos: «Letztes Jahr hat es in den Alpen jeden Tag geregnet. An der Nordsee wird es windig, aber trocken.» El viento costero tiene defensores: «Der Wind macht den Kopf frei». Y la reserva se confirma en Perfekt: «Ich habe die Ferienwohnung schon gebucht» — el schon alemán transmite la tranquilidad del que se adelantó." },
    ],
    esempi: [
      { it: "An der Küste wird es morgen sonnig und mild.", es: "En la costa mañana hará sol y temperatura suave." },
      { it: "Am Wochenende wird es regnen.", es: "El fin de semana lloverá." },
      { it: "Die Temperaturen werden steigen.", es: "Las temperaturas subirán." },
      { it: "Es wird bestimmt windig an der Küste.", es: "Seguramente hará viento en la costa." },
      { it: "Vielleicht werden wir ans Meer fahren.", es: "Quizá vayamos al mar." },
    ],
    usi: [
      { q: "«Esta noche habrá tormenta» se dice:", options: ["Heute Nacht wird es gewittern.", "Heute Nacht es wird gewittern.", "Heute Nacht wird es Gewitter haben."], answer: 0, explain: "Predicción impersonal: es wird + infinitivo (gewittern)." },
      { q: "«Llovió cada día» (hablando de unas vacaciones pasadas):", options: ["Es wird jeden Tag regnen.", "Es hat jeden Tag geregnet.", "Es ist jeden Tag geregnet."], answer: 1, explain: "El pasado del tiempo en el habla es Perfekt con haben: es hat geregnet." },
    ],
  },

  "de-cu-a2-11": {
    sezioni: [
      { t: "So funktioniert es", body: "Konjunktiv II de cortesía: könnten (Könnten Sie?), hätte (Ich hätte gern), wäre, würde. «Könnten Sie mir einen Gefallen tun?», «Ich hätte gern einen Kaffee». La persona beneficiada va en dativo: mir, Ihnen: «Ich bringe es Ihnen vorbei», «Schmeckt Ihnen der Kuchen?». Para ofertas: «Möchten Sie?» también cortesísimo." },
      { t: "Wann man es benutzt", body: "Para pedir favores a vecinos y desconocidos: «Könnten Sie mir Ihren Bohrer leihen?», «Könnten Sie das bitte leiser machen?». Entre amigos se baja a du: «Kannst du mir kurz helfen?». El dativo también rige con helfen, danken, gefallen, gehören, antworten: «Ich helfe Ihnen gern», «Das gehört dem Vermieter»." },
      { t: "Achtung (für Spanischsprachige)", body: "1) «Ich hätte gern» es pedir (querría); «Ich habe gern» no funciona como pedido: confundirlos cambia la escena. 2) ayudar, prestar y gustar llevan dativo de persona: «Ich helfe Ihnen», nunca «Ich helfe Sie»; el español «me/le» no distingue acusativo y dativo, el alemán sí. 3) könnten ≠ konnten: condicional cortés frente a pasado — no los mezcles." },
      { t: "Im echten Gespräch", body: "En el rellano: «Entschuldigung, könnten Sie mir einen Gefallen tun?» abre todas las puertas. El vecino avisa: «Ab 22 Uhr ist Ruhezeit». Responde educadísimo: «Das wusste ich nicht — danke für den Hinweis!». Y la devolución se promete con dativo: «Ich bringe Ihnen den Bohrer morgen zurück». Así se hacen amigos los vecinos alemanes." },
    ],
    esempi: [
      { it: "Könnten Sie mir kurz helfen?", es: "¿Podría ayudarme un momento?" },
      { it: "Ich hätte gern ein Stück Kuchen.", es: "Querría un trozo de tarta." },
      { it: "Würden Sie das Fenster schließen?", es: "¿Le importaría cerrar la ventana?" },
      { it: "Schmeckt Ihnen der Kuchen?", es: "¿Le gusta la tarta?" },
      { it: "Ich bringe Ihnen den Bohrer morgen zurück.", es: "Le devuelvo el taladro mañana." },
    ],
    usi: [
      { q: "«¿Podría prestarme su taladro?» se dice:", options: ["Könnten Sie mich Ihren Bohrer leihen?", "Könnten Sie mir Ihren Bohrer leihen?", "Könnten Sie Ihren Bohrer mich leihen geben?"], answer: 1, explain: "leihen lleva dativo de persona (mir) y könnten es la forma cortés." },
      { q: "En la panadería pides un pan:", options: ["Ich habe gern ein Brot.", "Ich hätte gern ein Brot.", "Ich wäre gern ein Brot."], answer: 1, explain: "hätte gern = querría (Konjunktiv II de haben); con wäre no se expresa un pedido." },
    ],
  },

  "de-cu-a2-12": {
    sezioni: [
      { t: "So funktioniert es", body: "Los conectores ordenan la narración: zuerst (primero), dann y danach (luego/después), schließlich (finalmente). Van en posición 1 y el verbo pasa a la posición 2: «Danach steigen wir um». El superlativo se forma con artículo + adjetivo + -ste ante el nombre («die schönste Etappe») y con am + -sten como predicado («Der Zug ist am vollsten»)." },
      { t: "Wann man es benutzt", body: "Para itinerarios y planes por etapas: «Zuerst fahren wir mit dem ICE, danach steigen wir um, schließlich nehmen wir die Fähre». Vocabulario del viaje: umsteigen (transbordo), abfahren (salir), ankommen (llegar), die Fahrt dauert (dura el trayecto) — los cuatro con sein en Perfekt: «Wir sind umgestiegen», «Der Zug ist abgefahren»." },
      { t: "Achtung (für Spanischsprachige)", body: "1) La trampa clásica de palabra: «Danach wir steigen um» es imposible; el conector ocupa la posición 1 y empuja al verbo a la 2. 2) El español «más bonito» es schönER (nunca «mehr schön») y «el más bonito» es die schönSTE. 3) Irregulares frecuentes: groß → die größte (la ß se mantiene con vocal larga), gut → die beste, viel → die meiste, gern → am liebsten." },
      { t: "Im echten Gespräch", body: "Vende el plan con superlativos: «Die Fähre ist die schönste Etappe!», «Das ist das größte Watt der Welt». Preguntas de logística: «Wie lange dauert die Fahrt?», «Wo steigen wir um?». Cierre entusiasta: «Das wird die beste Reise seit Jahren!». Con conectores + superlativos, tu plan suena a guía turística profesional." },
    ],
    esempi: [
      { it: "Zuerst kaufen wir die Fahrkarten, dann steigen wir ein.", es: "Primero compramos los billetes, luego subimos al tren." },
      { it: "Danach fahren wir mit dem Regionalzug weiter.", es: "Después seguimos en el tren regional." },
      { it: "Schließlich nehmen wir die Fähre zur Insel.", es: "Finalmente tomamos el ferry a la isla." },
      { it: "Die Fähre war die schönste Etappe der Reise.", es: "El ferry fue el tramo más bonito del viaje." },
      { it: "Am Sonntag ist der Zug am vollsten.", es: "El domingo el tren está llenísimo." },
    ],
    usi: [
      { q: "«Después desayunaremos algo» se dice:", options: ["Danach wir frühstücken etwas.", "Danach frühstücken wir etwas.", "Danach etwas frühstücken wir."], answer: 1, explain: "El conector ocupa la posición 1 y el verbo conjugado va en posición 2." },
      { q: "«La etapa más bonita del viaje» se dice:", options: ["die schönere Etappe", "die schönste Etappe", "die mehr schöne Etappe"], answer: 1, explain: "Superlativo ante nombre: die + adjetivo + -ste (schönste); schöner sería comparativo." },
    ],
  },
};
