import type { CbClozeText } from "../../cambridge";

/* ═══ DE A2 · Cloze readings — 3 por unidad (inferencia léxica) ══════
   Metodología v9.12: el texto en alemán lleva marcadores {1} {2}, que
   el reproductor convierte en huecos; el estudiante deduce la palabra
   por el contexto. Campos: `.it` = alemán de Alemania, `.es` =
   español. Temas conectados con el escenario de cada unidad A2.       */

export const DE_CLOZE_A2: Record<string, CbClozeText[]> = {
  "de-cu-a2-01": [
    {
      id: "cz-de-a2-01-1", title: "Nachrichten am Montag", titleEs: "Mensajes del lunes", minutes: 2,
      paragraphs: [
        { it: "Guten Morgen, Lena! Wie war dein Wochenende? Meins war wirklich {1}. Am Samstag habe ich den Kölner Dom besucht und danach habe ich am Rhein einen Kaffee {2}. Es war sehr schön dort.", es: "¡Buenos días, Lena! ¿Qué tal tu fin de semana? El mío fue de verdad bonito. El sábado visité la catedral de Colonia y después tomé un café junto al Rin. Allí se estaba muy bien." },
        { it: "Am Sonntag habe ich bis zehn Uhr {3} und dann habe ich einen Sonntagsspaziergang gemacht. Am Nachmittag habe ich Kuchen {4} und einen Film gesehen. Und du? Was hast du {5}?", es: "El domingo dormí hasta las diez y luego di un paseo dominical. Por la tarde comí tarta y vi una película. ¿Y tú? ¿Qué hiciste?" },
      ],
      gaps: [
        { options: ["schön", "krank", "teuer"], answer: 0, why: "La valoración positiva llega enseguida (visita y café junto al Rin): el finde fue bonito." },
        { options: ["getrunken", "gegessen", "geschlafen"], answer: 0, why: "«einen Kaffee» pide el participio de trinken: getrunken." },
        { options: ["geschlafen", "gekocht", "geputzt"], answer: 0, why: "«bis zehn Uhr» en un domingo tranquilo: durmió hasta tarde." },
        { options: ["gegessen", "getrunken", "gelesen"], answer: 0, why: "El ritual Kaffee und Kuchen: la tarta se come." },
        { options: ["gemacht", "gegangen", "gesagt"], answer: 0, why: "La pregunta espejo del inicio es «Was hast du gemacht?»." },
      ],
    },
    {
      id: "cz-de-a2-01-2", title: "Kaffee und Kuchen", titleEs: "Café y tarta", minutes: 3,
      paragraphs: [
        { it: "Am Sonntag war ich bei meiner Oma. Sie hat einen Apfelkuchen {1} und wir haben ihn mit Tee gegessen. Nach dem Essen hat Oma alte Fotos {2}: «Schau mal, das bist du mit vier Jahren!»", es: "El domingo estuve en casa de mi abuela. Horneó una tarta de manzana y nos la comimos con té. Después de comer, la abuela enseñó fotos viejas: «¡Mira, este eres tú con cuatro años!»" },
        { it: "Wir haben ein bisschen {3} und über die Woche gesprochen. Am Abend bin ich müde, aber {4} nach Hause gefahren. Was für ein {5} Sonntag war das!", es: "Nos reímos un rato y hablamos de la semana. Por la noche volví a casa cansado pero feliz. ¡Qué domingo tan bonito fue ese!" },
      ],
      gaps: [
        { options: ["gebacken", "gekauft", "geschlafen"], answer: 0, why: "Con Apfelkuchen y abuela: lo horneó ella (backen → gebacken)." },
        { options: ["gezeigt", "geschenkt", "geschlossen"], answer: 0, why: "«Das bist du»: enseña las fotos de familia." },
        { options: ["gelacht", "gebohrt", "gelernt"], answer: 0, why: "Charla amable con la abuela: risas (lachen → gelacht)." },
        { options: ["glücklich", "nervös", "sauer"], answer: 0, why: "Contraste con «müde, aber»: volvió contento." },
        { options: ["schöner", "schwerer", "kälter"], answer: 0, why: "La exclamación final valora el día de forma positiva." },
      ],
    },
    {
      id: "cz-de-a2-01-3", title: "Der Sonntag in Deutschland", titleEs: "El domingo en Alemania", minutes: 3,
      paragraphs: [
        { it: "In Deutschland machen viele Familien am Sonntag einen {1} durch den Park oder den Wald. Sie gehen langsam und genießen die {2} Luft. Die meisten Geschäfte haben am Sonntag {3}, das regelt das Gesetz.", es: "En Alemania muchas familias dan el domingo un paseo por el parque o el bosque. Caminan despacio y disfrutan del aire fresco. La mayoría de las tiendas cierran en domingo: lo regula la ley." },
        { it: "Nach dem Spaziergang gibt es oft Kaffee und {4}. Oma hat einen Kuchen gebacken und alle essen ein Stück. Am Sonntag gilt auch den ganzen Tag die {5}: Man darf nicht bohren und keine laute Musik hören.", es: "Tras el paseo suele haber café y tarta. La abuela horneó una tarta y todos comen un trozo. Además, el domingo rige todo el día la Ruhezeit: no se puede taladrar ni poner música alta." },
      ],
      gaps: [
        { options: ["Spaziergang", "Marathon", "Wettkampf"], answer: 0, why: "El ritual dominical alemán: el Sonntagsspaziergang, sin prisa." },
        { options: ["frische", "teure", "laute"], answer: 0, why: "En el bosque se disfruta el aire fresco." },
        { options: ["geschlossen", "geöffnet", "belegt"], answer: 0, why: "Por ley casi todo cierra en domingo (Ladenschluss)." },
        { options: ["Kuchen", "Kartoffeln", "Suppe"], answer: 0, why: "La pareja fija de las cuatro: Kaffee und Kuchen." },
        { options: ["Ruhezeit", "Arbeitszeit", "Essenszeit"], answer: 0, why: "Ni taladro ni música alta: silencio dominical." },
      ],
    },
  ],

  "de-cu-a2-02": [
    {
      id: "cz-de-a2-02-1", title: "Der Ausflug nach Potsdam", titleEs: "La excursión a Potsdam", minutes: 3,
      paragraphs: [
        { it: "Am Samstag bin ich mit meiner Freundin nach Potsdam gefahren. Wir sind früh {1} und haben den ersten Zug genommen. Dort sind wir zuerst durch den großen {2} gelaufen und haben die Paläste gesehen.", es: "El sábado fui con mi amiga a Potsdam. Nos levantamos temprano y cogimos el primer tren. Allí primero caminamos por el gran parque y vimos los palacios." },
        { it: "Danach sind wir über die Glienicker {3} gegangen und haben Fotos gemacht. Am Nachmittag haben wir Kuchen gegessen, denn wir waren vom Laufen ganz {4}. Um acht Uhr sind wir müde, aber {5} nach Hause gekommen.", es: "Después cruzamos el puente de Glienicke e hicimos fotos. Por la tarde comimos tarta, porque estábamos agotadas de tanto andar. A las ocho volvimos a casa cansadas pero felices." },
      ],
      gaps: [
        { options: ["aufgestanden", "eingeschlafen", "umgezogen"], answer: 0, why: "Coger el primer tren exige madrugar: Perfekt de aufstehen (con sein)." },
        { options: ["Park", "Bahnhof", "Supermarkt"], answer: 0, why: "Sanssouci es famoso por su parque con palacios." },
        { options: ["Brücke", "Straße", "Tür"], answer: 0, why: "La Glienicker Brücke es el puente famoso de Potsdam." },
        { options: ["müde", "satt", "reich"], answer: 0, why: "Caminar todo el día cansa: müde vom Laufen." },
        { options: ["glücklich", "traurig", "ärgerlich"], answer: 0, why: "Día redondo: cansadas pero contentas." },
      ],
    },
    {
      id: "cz-de-a2-02-2", title: "Wandern am Sonntag", titleEs: "Senderismo el domingo", minutes: 3,
      paragraphs: [
        { it: "Wandern ist in Deutschland fast ein Volkssport. Am Sonntag packen viele Menschen ihren {1} mit Brotzeit und Wasser und gehen in den Wald. Die Wanderwege sind gut {2}: An jeder Ecke gibt es Schilder mit Farben und Zahlen.", es: "El senderismo es casi un deporte nacional en Alemania. El domingo mucha gente prepara la mochila con el tentempié y agua y se va al bosque. Los senderos están bien señalizados: en cada esquina hay carteles con colores y números." },
        { it: "Nach zwei Stunden macht die Familie eine {3} und isst die Brotzeit. Der Müll kommt wieder in den Rucksack — in der Natur bleibt er nicht {4}. Am Abend sind alle müde und {5}.", es: "A las dos horas, la familia hace una pausa y come el tentempié. La basura vuelve a la mochila: no se queda tirada en la naturaleza. Por la noche todos están cansados y satisfechos." },
      ],
      gaps: [
        { options: ["Rucksack", "Koffer", "Regenschirm"], answer: 0, why: "La Brotzeit y el agua viajan en la mochila del senderista." },
        { options: ["markiert", "bezahlt", "geschlossen"], answer: 0, why: "Los carteles de colores señalizan los senderos." },
        { options: ["Pause", "Party", "Prüfung"], answer: 0, why: "Tras dos horas caminando toca descansar." },
        { options: ["liegen", "schwimmen", "fliegen"], answer: 0, why: "La basura no se deja tirada: «nicht liegen lassen»." },
        { options: ["zufrieden", "nervös", "wütend"], answer: 0, why: "Día completo en la naturaleza: satisfechos." },
      ],
    },
    {
      id: "cz-de-a2-02-3", title: "Ein Tag am See", titleEs: "Un día en el lago", minutes: 2,
      paragraphs: [
        { it: "Gestern sind wir an den See gefahren. Zuerst sind wir um den See {1}, dann sind die anderen {2}. Ich kann nicht gut schwimmen und bin am Ufer geblieben. Das Wasser war zu kalt für mich.", es: "Ayer fuimos al lago. Primero caminamos alrededor del lago, luego los demás se bañaron. Yo no nado bien y me quedé en la orilla. El agua estaba demasiado fría para mí." },
        { it: "Am Nachmittag sind wir in ein kleines Café am {3} gegangen und haben Eis gegessen. Um 18 Uhr sind wir mit dem Bus zum Bahnhof {4}. Der Tag hat wirklich viel {5} gemacht!", es: "Por la tarde fuimos a un café pequeño de la orilla y comimos helado. A las 18:00 fuimos en bus a la estación. ¡La verdad es que nos lo pasamos genial!" },
      ],
      gaps: [
        { options: ["gelaufen", "geschwommen", "gefahren"], answer: 0, why: "«um den See» = alrededor: se camina, gelaufen." },
        { options: ["geschwommen", "geschlafen", "gekocht"], answer: 0, why: "Contraste conmigo, que no nado bien: ellos sí se bañaron." },
        { options: ["Ufer", "Dach", "Keller"], answer: 0, why: "El café está a la orilla del lago: am Ufer." },
        { options: ["gefahren", "gelaufen", "geflogen"], answer: 0, why: "Con dem Bus el movimiento es gefahren." },
        { options: ["Spaß", "Hunger", "Angst"], answer: 0, why: "Expresión fija: «Es hat Spaß gemacht»." },
      ],
    },
  ],

  "de-cu-a2-03": [
    {
      id: "cz-de-a2-03-1", title: "Das Fotoalbum", titleEs: "El álbum de fotos", minutes: 2,
      paragraphs: [
        { it: "Frau Müller holt ein altes Fotoalbum aus dem Schrank. «Schau mal, das warst du mit fünf Jahren!», sagt sie. Auf dem Foto {1} ich so klein. Ich {2} gelbe Stiefel an und einen alten Hut.", es: "La señora Müller saca un álbum de fotos viejo del armario. «¡Mira, este eras tú con cinco años!», dice. En la foto yo era tan pequeño. Llevaba botas amarillas y un sombrero viejo." },
        { it: "Jeden Sommer war ich bei meinen Großeltern auf dem Land. Dort {3} ich ein Fahrrad und einen Hund. Ich {4} jeden Tag nur spielen, aber zuerst {5} ich meine Hausaufgaben machen. Das war nicht immer lustig.", es: "Cada verano estaba con mis abuelos en el campo. Allí tenía una bici y un perro. Yo solo quería jugar, pero primero tenía que hacer los deberes. Eso no siempre era divertido." },
      ],
      gaps: [
        { options: ["war", "bin", "hatte"], answer: 0, why: "Descripción en el pasado: Präteritum de sein (war)." },
        { options: ["hatte", "war", "wurde"], answer: 0, why: "Llevar puesto en el pasado: hatte (Stiefel an)." },
        { options: ["hatte", "war", "konnte"], answer: 0, why: "Posesión infantil: hatte (ein Fahrrad, einen Hund)." },
        { options: ["wollte", "musste", "konnte"], answer: 0, why: "Solo quería jugar: wollte." },
        { options: ["musste", "wollte", "durfte"], answer: 0, why: "Los deberes eran obligación: musste." },
      ],
    },
    {
      id: "cz-de-a2-03-2", title: "Sommer bei den Großeltern", titleEs: "Verano con los abuelos", minutes: 3,
      paragraphs: [
        { it: "Als Kind war ich jeden Sommer bei meinen Großeltern auf dem Land. Der Garten war groß und voller {1}. Jeden Morgen hat Oma frische Brötchen vom {2} geholt und wir haben zusammen gefrühstückt.", es: "De niño, cada verano estaba con mis abuelos en el campo. El jardín era grande y estaba lleno de manzanos. Cada mañana la abuela traía bollos frescos de la panadería y desayunábamos juntos." },
        { it: "Nach dem Frühstück wollte ich spielen, aber zuerst {3} ich Opa im Garten helfen. Am Nachmittag bin ich mit den Nachbarkindern in den {4} gegangen. Am Abend haben wir oft Karten {5} und Radio gehört. Das war eine glückliche Zeit.", es: "Después de desayunar yo quería jugar, pero primero tenía que ayudar al abuelo en el jardín. Por la tarde me iba con los niños del vecindario al bosque. Por la noche a menudo jugábamos a cartas y escuchábamos la radio. Fue una época feliz." },
      ],
      gaps: [
        { options: ["Apfelbäumen", "Autos", "Schränken"], answer: 0, why: "En un jardín de campo, manzanos." },
        { options: ["Bäcker", "Arzt", "Friseur"], answer: 0, why: "Los Brötchen frescos vienen de la panadería." },
        { options: ["musste", "wollte", "konnte"], answer: 0, why: "«zuerst» marca la obligación antes de jugar: musste." },
        { options: ["Wald", "Zug", "Turm"], answer: 0, why: "Con los niños del vecindario, el sitio de juegos: el bosque." },
        { options: ["gespielt", "gegessen", "geschlafen"], answer: 0, why: "«Karten» se juega: Perfekt de spielen." },
      ],
    },
    {
      id: "cz-de-a2-03-3", title: "Der erste Schultag", titleEs: "El primer día de colegio", minutes: 2,
      paragraphs: [
        { it: "Mit sechs Jahren kam ich in die Schule. Am ersten Tag {1} ich eine große Schultüte voller Süßigkeiten — das ist in Deutschland Tradition. Meine Lehrerin war nett und ich {2} jeden Tag gern zur Schule.", es: "Con seis años entré en la escuela. El primer día recibí una gran carretilla llena de caramelos: en Alemania es tradición. Mi profesora era simpática e iba cada día encantado al colegio." },
        { it: "In der Musikstunde sangen wir Lieder. Mein Lehrer {3} Klavier und alle haben mitgesungen. Wir {4} keine Handys in der Schule — die gab es noch nicht! Nach der Schule {5} ich zuerst die Hausaufgaben, dann durfte ich Fußball spielen.", es: "En la clase de música cantábamos canciones. Mi profesor tocaba el piano y todos cantábamos con él. No teníamos móviles en el colegio: ¡aún no existían! Después del colegio hacía primero los deberes y luego me dejaban jugar al fútbol." },
      ],
      gaps: [
        { options: ["bekam", "gab", "war"], answer: 0, why: "La Schultüte la recibe el niño (tradición alemana): bekam." },
        { options: ["ging", "kam", "fuhr"], answer: 0, why: "Ir a la escuela es gehen: ging gern zur Schule." },
        { options: ["spielte", "kochte", "putzte"], answer: 0, why: "En la clase de música, el profesor toca el piano: spielte." },
        { options: ["hatten", "waren", "konnten"], answer: 0, why: "Posesión negativa en el pasado: hatten keine Handys." },
        { options: ["machte", "brachte", "kaufte"], answer: 0, why: "Los deberes se hacen: machte die Hausaufgaben." },
      ],
    },
  ],

  "de-cu-a2-04": [
    {
      id: "cz-de-a2-04-1", title: "Die Geschichte im Zug", titleEs: "La historia en el tren", minutes: 3,
      paragraphs: [
        { it: "Gestern war ein seltsamer Tag. Ich {1} im Zug nach Bonn und bin eingeschlafen. Als ich aufwachte, war der Zug leer — und ich war in Koblenz! Ich {2} mein Handy aus der Tasche: Der Akku war leer.", es: "Ayer fue un día raro. Yo iba sentado en el tren hacia Bonn y me quedé dormido. Cuando desperté, el tren estaba vacío: ¡y yo estaba en Coblenza! Saqué el móvil de la bolsa: la batería estaba muerta." },
        { it: "Dann kam die Fahrkontrolle. Ich {3} meine Fahrkarte, das war kein Problem. Aber ohne Handy {4} ich den Fahrplan nicht lesen. Zum Glück hatte eine Frau ein Ladekabel {5}.", es: "Entonces llegó el control de billetes. Yo tenía mi billete, eso no fue problema. Pero sin móvil no podía leer el horario. Por suerte, una mujer llevaba un cable encima." },
      ],
      gaps: [
        { options: ["saß", "stand", "lief"], answer: 0, why: "En el tren se va sentado: saß (Präteritum de sitzen)." },
        { options: ["nahm", "gab", "sah"], answer: 0, why: "Sacar el móvil de la bolsa: nahm (Präteritum de nehmen)." },
        { options: ["hatte", "war", "wurde"], answer: 0, why: "El billete lo tenía encima: Präteritum hatte." },
        { options: ["konnte", "musste", "wollte"], answer: 0, why: "Sin batería era imposible: konnte nicht lesen." },
        { options: ["dabei", "weg", "kaputt"], answer: 0, why: "Por suerte la mujer llevaba el cable encima: dabei." },
      ],
    },
    {
      id: "cz-de-a2-04-2", title: "Eine seltsame Nacht", titleEs: "Una noche extraña", minutes: 2,
      paragraphs: [
        { it: "Letzte Nacht habe ich sehr seltsam geschlafen. Im Traum war ich in einer alten {1} am Waldrand. Dort stand ein Mann mit einem Hut und sagte kein Wort. Ich {2} Angst, aber meine Beine waren schwer wie Stein.", es: "Anoche dormí de forma rarísima. En el sueño estaba en una vieja mansión al borde del bosque. Allí estaba un hombre de sombrero que no decía palabra. Tenía miedo, pero las piernas me pesaban como piedra." },
        { it: "Plötzlich hat es an der Tür {3} und ich bin aufgewacht. Es war mein Nachbar mit einem {4} in der Hand: «Das ist für Sie!» Halb wach habe ich unterschrieben und bin wieder {5}. Was für eine Nacht!", es: "De pronto sonó el timbre de la puerta y desperté. Era mi vecino con un paquete en la mano: «¡Esto es para usted!». Medio dormido firmé y me volví a dormir. ¡Menuda noche!" },
      ],
      gaps: [
        { options: ["Villa", "Bäckerei", "Kantine"], answer: 0, why: "El sueño misterioso con un hombre de sombrero pide una casa vieja." },
        { options: ["hatte", "war", "wurde"], answer: 0, why: "El miedo se tiene: expresión fija «Angst haben»." },
        { options: ["geklingelt", "gebraten", "getanzt"], answer: 0, why: "An der Tür suena el timbre: hat geklingelt." },
        { options: ["Paket", "Hund", "Besen"], answer: 0, why: "El vecino trae algo entregable: un paquete." },
        { options: ["eingeschlafen", "aufgestanden", "gefahren"], answer: 0, why: "Medio dormido tras firmar: se volvió a dormir (sein + eingeschlafen)." },
      ],
    },
    {
      id: "cz-de-a2-04-3", title: "Zwei Zeiten, eine Geschichte", titleEs: "Dos tiempos, una historia", minutes: 2,
      paragraphs: [
        { it: "Im Deutschen gibt es zwei Vergangenheiten. Im Gespräch benutzen wir meist das {1}: «Ich habe einen Film gesehen.» In Zeitungen und Büchern steht oft das {2}: «Der Zug fuhr um acht Uhr ab.» Beide meinen dasselbe.", es: "En alemán hay dos pasados. En la conversación usamos sobre todo el Perfekt: «Vi una película». En periódicos y libros aparece a menudo el Präteritum: «El tren salió a las ocho». Ambos significan lo mismo." },
        { it: "Aber Achtung: sein, haben und die Modalverben hört man auch im Gespräch im Präteritum: «Ich {3} müde», «Wir {4} keine Zeit», «Ich musste arbeiten». Die kleine {5}: Ereignisse im Perfekt erzählen, war und hatte im Präteritum — das klingt perfekt.", es: "Pero cuidado: sein, haben y los verbos modales se oyen también hablando en Präteritum: «Estaba cansado», «No teníamos tiempo», «Tenía que trabajar». La pequeña regla: contar los eventos en Perfekt y usar war y hatte en Präteritum: así suena perfecto." },
      ],
      gaps: [
        { options: ["Perfekt", "Präteritum", "Futur"], answer: 0, why: "En la conversación domina el Perfekt (haben/sein + participio)." },
        { options: ["Präteritum", "Perfekt", "Präsens"], answer: 0, why: "Prensa y libros usan el Präteritum." },
        { options: ["war", "bin", "habe"], answer: 0, why: "El pasado coloquial de sein es war." },
        { options: ["hatten", "sind", "haben"], answer: 0, why: "El pasado coloquial de haben es hatten." },
        { options: ["Regel", "Strafe", "Pause"], answer: 0, why: "La pauta que resume el uso: die Regel." },
      ],
    },
  ],

  "de-cu-a2-05": [
    {
      id: "cz-de-a2-05-1", title: "Pläne für Samstag", titleEs: "Planes para el sábado", minutes: 2,
      paragraphs: [
        { it: "Am Freitag nach der Arbeit sprechen Lena und ich über das Wochenende. «Was wirst du am Samstag machen?», fragt sie. «Ich werde am {1} ausschlafen», sage ich, «und danach werde ich durch die Stadt {2}.»", es: "El viernes después del trabajo, Lena y yo hablamos del finde. «¿Qué harás el sábado?», pregunta. «Dormiré hasta tarde por la mañana», digo, «y luego pasearé por la ciudad.»" },
        { it: "«Gute Idee!», sagt Lena. «Ich werde das {3} besuchen. Treffen wir uns am Sonntag?» — «Gern! Um zehn Uhr am {4}?» — «Abgemacht! Ich werde {5} sein, versprochen!»", es: "«¡Buena idea!», dice Lena. «Yo visitaré la casa de Goethe. ¿Quedamos el domingo?» — «¡Gusto! ¿A las diez en la estación central?» — «¡Trato hecho! ¡Seré puntual, prometido!»" },
      ],
      gaps: [
        { options: ["Morgen", "Abend", "Montag"], answer: 0, why: "Dormir hasta tarde pasa por la mañana: am Morgen ausschlafen." },
        { options: ["bummeln", "kochen", "putzen"], answer: 0, why: "Pasear sin rumbo por la ciudad: bummeln." },
        { options: ["Goethe-Haus", "Wasserwerk", "Stadion"], answer: 0, why: "El plan cultural clásico de Fráncfort: la casa de Goethe." },
        { options: ["Hauptbahnhof", "Flughafen", "Stadion"], answer: 0, why: "El punto de encuentro clásico: la estación central." },
        { options: ["pünktlich", "laut", "müde"], answer: 0, why: "La promesa alemana por excelencia: ser puntual." },
      ],
    },
    {
      id: "cz-de-a2-05-2", title: "Die Verabredung", titleEs: "La quedada", minutes: 3,
      paragraphs: [
        { it: "Eine Verabredung ist in Deutschland fast ein kleiner {1}: Tag, Uhrzeit und Ort stehen fest. «Am Samstag, um 15 Uhr, am Marktplatz» — das ist klar. Man kommt {2} oder fünf Minuten früher, nicht später.", es: "Una quedada es en Alemania casi un pequeño contrato: día, hora y lugar quedan fijados. «El sábado, a las 15:00, en la plaza del mercado»: claro. Uno llega puntual o cinco minutos antes, no después." },
        { it: "Wer eine Verabredung nicht einhalten kann, {3} vorher anrufen oder eine Nachricht schreiben — das ist höflich und wichtig. Fünf Minuten Verspätung sind okay, aber dreißig Minuten? Das findet man in Deutschland sehr {4}. Nur bei einer Party darf man {5} kommen.", es: "Quien no pueda cumplir una quedada debería llamar antes o escribir un mensaje: es cortés e importante. Cinco minutos de retraso pasan, ¿pero treinta? Eso en Alemania se considera de mala educación. Solo a una fiesta se puede llegar más tarde." },
      ],
      gaps: [
        { options: ["Vertrag", "Witz", "Traum"], answer: 0, why: "Hora y lugar fijos e inamovibles: casi un contrato." },
        { options: ["pünktlich", "zufällig", "später"], answer: 0, why: "La norma social es la puntualidad." },
        { options: ["sollte", "wollte", "hätte"], answer: 0, why: "El consejo social se expresa con sollte (debería)." },
        { options: ["unhöflich", "romantisch", "gesund"], answer: 0, why: "Llegar media hora tarde se considera mala educación." },
        { options: ["später", "nie", "früher"], answer: 0, why: "A las fiestas se llega más tarde que a las quedadas." },
      ],
    },
    {
      id: "cz-de-a2-05-3", title: "Ein ruhiges Wochenende", titleEs: "Un finde tranquilo", minutes: 2,
      paragraphs: [
        { it: "Nicht jeder will am Wochenende etwas Großes unternehmen. Mein Opa wird zu Hause {1}: Er wird im Garten arbeiten, Zeitung lesen und ein Schläfchen {2}. «Das wird ein ruhiges Wochenende», sagt er.", es: "No todo el mundo quiere hacer algo grande el finde. Mi abuelo se quedará en casa: trabajará en el jardín, leerá el periódico y echará una siestecita. «Será un finde tranquilo», dice." },
        { it: "Ich werde am Samstag Opa besuchen. Wir werden zusammen {3} spielen, wie früher. Am Sonntag werde ich meine Freundin {4} und wir werden einen Film ansehen. Und am Montag? Da werde ich wieder früh {5} — der Alltag ruft!", es: "El sábado visitaré al abuelo. Jugaremos al ajedrez juntos, como antes. El domingo quedaré con mi novia y veremos una película. ¿Y el lunes? Ese día volveré a madrugar: ¡la vida cotidiana llama!" },
      ],
      gaps: [
        { options: ["bleiben", "reisen", "tanzen"], answer: 0, why: "Jardín, periódico y siesta: se quedará en casa (bleiben)." },
        { options: ["machen", "lernen", "kochen"], answer: 0, why: "Expresión fija: ein Schläfchen machen." },
        { options: ["Schach", "Fußball", "Verstecken"], answer: 0, why: "El juego de mesa clásico de sobremesa con el abuelo: ajedrez." },
        { options: ["treffen", "verlieren", "waschen"], answer: 0, why: "Luego ven juntas una película: quedar en persona (treffen)." },
        { options: ["aufstehen", "einschlafen", "ankommen"], answer: 0, why: "El lunes llama la vida cotidiana: madrugar (aufstehen)." },
      ],
    },
  ],

  "de-cu-a2-06": [
    {
      id: "cz-de-a2-06-1", title: "Die Anzeige", titleEs: "El anuncio", minutes: 2,
      paragraphs: [
        { it: "Ich suche ein Zimmer in Berlin. Im Internet finde ich diese Anzeige: «Zimmer in 3er-WG, 18 qm, {1} — Bett und Schrank sind da —, ab sofort frei. 450 Euro warm, Nebenkosten {2}. Küche, Bad und Balkon zur gemeinsamen Nutzung.»", es: "Busco habitación en Berlín. En internet encuentro este anuncio: «Habitación en piso de tres, 18 m², amueblada (cama y armario incluidos), disponible desde ya. 450 euros con gastos, gastos de comunidad incluidos. Cocina, baño y balcón de uso común.»" },
        { it: "Ich rufe an und besichtige das Zimmer am Donnerstag. Die Mitbewohner sind {3}: ein Student, eine Köchin und eine Musikerin. Ich muss drei Fragen {4}: Wie hoch ist die Kaution? Muss ich die Küche {5}? Und darf ich hier Musik machen?", es: "Llamo y visito la habitación el jueves. Los compañeros de piso son simpáticos: un estudiante, una cocinera y una música. Tengo que hacer tres preguntas: ¿Cuánto es la fianza? ¿Tengo que compartir la cocina? ¿Y puedo hacer música aquí?" },
      ],
      gaps: [
        { options: ["möbliert", "unmöbliert", "renoviert"], answer: 0, why: "«Bett und Schrank sind da»: la habitación viene amueblada." },
        { options: ["inklusive", "extra", "fehlend"], answer: 0, why: "«warm» = con gastos: Nebenkosten inklusive." },
        { options: ["nett", "teuer", "kaputt"], answer: 0, why: "La descripción positiva de los compañeros: simpáticos." },
        { options: ["stellen", "machen", "geben"], answer: 0, why: "Colocación fija: Fragen stellen = hacer preguntas." },
        { options: ["teilen", "waschen", "verkaufen"], answer: 0, why: "En una WG la cocina se comparte: teilen." },
      ],
    },
    {
      id: "cz-de-a2-06-2", title: "Die Besichtigung", titleEs: "La visita", minutes: 3,
      paragraphs: [
        { it: "Am Donnerstag stehe ich vor dem Haus in Kreuzberg. Jonas öffnet die Tür: «Komm herein! Das Zimmer ist im ersten {1}.» Das Zimmer ist klein, aber hell. Zum {2} sieht man die Bäume der Straße.", es: "El jueves estoy delante del edificio en Kreuzberg. Jonas abre la puerta: «¡Pasa! La habitación está en el primer piso.» La habitación es pequeña, pero luminosa. Por la ventana se ven los árboles de la calle." },
        { it: "«Die Miete kostet 450 Euro warm. Die {3} sind zwei Monatsmieten — du bekommst sie zurück, wenn du ausziehst», sagt Jonas. «Und der {4}?», frage ich. «Er wohnt im Erdgeschoss und ist ganz entspannt.» Nach einer Stunde wissen wir: Das passt! Ich werde ihm sofort {5}.", es: "«El alquiler cuesta 450 euros con gastos. La fianza son dos mensualidades: te la devuelven cuando te marchas», dice Jonas. «¿Y el casero?», pregunto. «Vive en la planta baja y es súper tranquilo.» A la hora ya lo sabemos: ¡encaja! Le escribiré enseguida." },
      ],
      gaps: [
        { options: ["Stock", "Garten", "Keller"], answer: 0, why: "im ersten Stock = en el primer piso." },
        { options: ["Fenster", "Kühlschrank", "Spiegel"], answer: 0, why: "Los árboles de la calle se ven por la ventana." },
        { options: ["Kaution", "Versicherung", "Fahrkarte"], answer: 0, why: "Fianza de dos mensualidades que se devuelve al irse." },
        { options: ["Vermieter", "Briefträger", "Bürgermeister"], answer: 0, why: "Quien vive abajo y alquila el piso: el casero." },
        { options: ["schreiben", "schlafen", "putzen"], answer: 0, why: "Contactar con él: escribirle (Ich werde ihm schreiben)." },
      ],
    },
    {
      id: "cz-de-a2-06-3", title: "WG-Leben", titleEs: "La vida en el piso compartido", minutes: 3,
      paragraphs: [
        { it: "Im WG-Leben gibt es Regeln. In der Küche hängt ein {1} mit der Aufschrift: «Bitte immer abwaschen!» Jeder Mitbewohner hat sein eigenes Fach im Kühlschrank. Am Samstag putzen alle zusammen die {2}. Das nennt man Putzplan.", es: "La vida en piso compartido tiene reglas. En la cocina cuelga una nota con el rótulo: «¡Lavar siempre los platos!». Cada compañero tiene su propio hueco en la nevera. El sábado todos limpian juntos el piso: eso se llama Putzplan." },
        { it: "Manchmal gibt es {3} um die Lautstärke oder das Bad. Dann setzen sich alle zusammen an den Tisch und finden eine {4}. Meine Mitbewohnerin kocht oft für alle — das ist ihr {5} zum WG-Leben. Zusammen wohnen ist billig und selten langweilig.", es: "A veces hay problemas por el ruido o el baño. Entonces todos se sientan a la mesa y encuentran una solución. Mi compañera cocina a menudo para todos: esa es su aportación a la convivencia. Vivir juntos sale barato y rara vez aburre." },
      ],
      gaps: [
        { options: ["Zettel", "Roman", "Teppich"], answer: 0, why: "El aviso con la norma cuelga en la cocina: Zettel." },
        { options: ["Wohnung", "Wolken", "Straße"], answer: 0, why: "La limpieza semanal abarca el piso entero: Wohnung putzen." },
        { options: ["Probleme", "Prüfungen", "Ferien"], answer: 0, why: "Volumen y baño: los conflictos clásicos de la convivencia." },
        { options: ["Lösung", "Frage", "Wohnung"], answer: 0, why: "Hablar juntos sirve para hallar una solución." },
        { options: ["Beitrag", "Traum", "Fehler"], answer: 0, why: "Cocinar para todos es su aportación: Beitrag." },
      ],
    },
  ],

  "de-cu-a2-07": [
    {
      id: "cz-de-a2-07-1", title: "Beim Hausarzt", titleEs: "Del médico de cabecera", minutes: 3,
      paragraphs: [
        { it: "Ich habe seit drei Tagen Halsschmerzen und {1}. Heute habe ich endlich einen Termin beim Hausarzt. In der Praxis warte ich zwanzig Minuten im {2} und lese eine alte Zeitschrift. Endlich ruft die Ärztin meinen Namen.", es: "Llevo tres días con dolor de garganta y fiebre. Hoy por fin tengo cita con el médico de cabecera. En la consulta espero veinte minutos en la sala de espera y leo una revista vieja. Al final la doctora llama mi nombre." },
        { it: "Frau Doktor Weber fragt: «Was {3} Ihnen?» — «Ich habe Halsschmerzen und kann schlecht {4}.» Sie sieht in meinen Hals und sagt: «Das ist eine Erkältung. Sie sollen viel Wasser trinken und sich {5}. Hier ist Ihr Rezept — und eine Krankmeldung für die Arbeit.»", es: "La doctora Weber pregunta: «¿Qué le pasa?» — «Tengo dolor de garganta y me cuesta tragar.» Me mira la garganta y dice: «Es un catarro. Debe beber mucha agua y guardar reposo. Aquí tiene su receta y un parte de baja para el trabajo.»" },
      ],
      gaps: [
        { options: ["Fieber", "Urlaub", "Hunger"], answer: 0, why: "Con dolor de garganta, el síntoma que acompaña: fiebre." },
        { options: ["Wartezimmer", "Schlafzimmer", "Keller"], answer: 0, why: "En la consulta se espera en la sala de espera." },
        { options: ["fehlt", "gibt", "kostet"], answer: 0, why: "«Was fehlt Ihnen?»: la fórmula fija del médico." },
        { options: ["schlucken", "singen", "laufen"], answer: 0, why: "Con la garganta irritada cuesta tragar: schlucken." },
        { options: ["schonen", "bewegen", "freuen"], answer: 0, why: "El consejo médico: guardar reposo (sich schonen)." },
      ],
    },
    {
      id: "cz-de-a2-07-2", title: "In der Apotheke", titleEs: "En la farmacia", minutes: 2,
      paragraphs: [
        { it: "Nach dem Arzt gehe ich in die Apotheke. Die Apothekerin liest das {1} und gibt mir Tabletten und Hustensaft. «Nehmen Sie dreimal {2} eine Tablette nach dem Essen», sagt sie. «Und trinken Sie viel Tee.»", es: "Después del médico voy a la farmacia. La farmacéutica lee la receta y me da pastillas y jarabe para la tos. «Tome una pastilla tres veces al día después de comer», dice. «Y beba mucho té.»" },
        { it: "In Deutschland gibt es Medikamente nur in der {3}, nicht im Supermarkt. Die Apothekerin {4} gut: Sie erklärt die Dosierung und verkauft mir auch Tee für den Hals. Alles kostet elf Euro — die {5} zahlt bei Erkältungen meist nichts dazu.", es: "En Alemania las medicinas solo se venden en la farmacia, no en el supermercado. La farmacéutica aconseja bien: explica la dosificación y también me vende té para la garganta. Todo cuesta once euros: el seguro médico normalmente no paga nada en los catarros." },
      ],
      gaps: [
        { options: ["Rezept", "Roman", "Foto"], answer: 0, why: "El médico entrega la receta que la farmacia lee." },
        { options: ["täglich", "jährlich", "stündlich"], answer: 0, why: "«Dreimal täglich» = tres veces al día." },
        { options: ["Apotheke", "Bäckerei", "Bank"], answer: 0, why: "Las medicinas se venden solo en la farmacia." },
        { options: ["berät", "schläft", "kocht"], answer: 0, why: "Explica la dosificación: aconseja (beraten)." },
        { options: ["Krankenkasse", "Polizei", "Schule"], answer: 0, why: "El seguro médico no cubre los catarros leves." },
      ],
    },
    {
      id: "cz-de-a2-07-3", title: "Die Krankmeldung", titleEs: "El parte de baja", minutes: 2,
      paragraphs: [
        { it: "Am Morgen rufe ich in der Firma an. «Guten Tag, hier ist {1} López. Ich bin krank und kann heute nicht arbeiten.» Die Chefin antwortet freundlich: «Gute {2}! Schicken Sie uns die Krankmeldung per E-Mail.»", es: "Por la mañana llamo a la empresa. «Buenos días, soy el señor López. Estoy enfermo y hoy no puedo trabajar.» La jefa responde amable: «¡Pronta mejoría! Envíenos el parte de baja por correo electrónico.»" },
        { it: "In Deutschland braucht man die Krankmeldung vom {3} ab dem ersten Tag. Die Krankenkasse {4} den Lohn weiter — zum Glück! Ich bleibe drei Tage im Bett, trinke viel Tee und {5} Serien. Nach einer Woche bin ich wieder gesund.", es: "En Alemania hace falta el parte del médico desde el primer día. El seguro médico sigue pagando el sueldo: ¡menos mal! Me quedo tres días en la cama, bebo mucho té y veo series. En una semana estoy otra vez sano." },
      ],
      gaps: [
        { options: ["Herr", "Frau", "Doktor"], answer: 0, why: "Antes del apellido, el tratamiento: Herr López." },
        { options: ["Besserung", "Reise", "Idee"], answer: 0, why: "«Gute Besserung» = pronta mejoría, saludo fijo." },
        { options: ["Arzt", "Chef", "Nachbarn"], answer: 0, why: "El parte lo firma el médico, no el jefe." },
        { options: ["bezahlt", "verliert", "kauft"], answer: 0, why: "El seguro sigue pagando el sueldo en baja." },
        { options: ["schaue", "koche", "putze"], answer: 0, why: "El descanso en cama clásico: ver series (schauen)." },
      ],
    },
  ],

  "de-cu-a2-08": [
    {
      id: "cz-de-a2-08-1", title: "Omas Kartoffelsalat", titleEs: "La ensalada de patatas de la abuela", minutes: 2,
      paragraphs: [
        { it: "Heute kochen wir Omas Kartoffelsalat. Zuerst waschen wir uns die {1}. Dann schält Frau Müller ein Kilo {2} und ich schneide sie klein. Die Zwiebeln kommen auch auf den Tisch.", es: "Hoy cocinamos la ensalada de patatas de la abuela. Primero nos lavamos las manos. Luego la señora Müller pela un kilo de patatas y yo las corto en trozos. Las cebollas también van a la mesa." },
        { it: "«{3} die Zwiebeln klein!», sagt Frau Müller. Ich weine ein bisschen. «Keine Angst, das ist {4}.» Dann rühren wir alles gut um: Kartoffeln, Öl, Senf, eine {5} Salz und etwas Brühe. Guten Appetit!", es: "«¡Corta las cebollas finas!», dice la señora Müller. Lloro un poco. «No pasa nada, es normal.» Después removemos todo bien: patatas, aceite, mostaza, una pizca de sal y un poco de caldo. ¡Buen provecho!" },
      ],
      gaps: [
        { options: ["Hände", "Füße", "Haare"], answer: 0, why: "Antes de cocinar hay que lavarse las manos." },
        { options: ["Kartoffeln", "Tomaten", "Erdbeeren"], answer: 0, why: "Es Kartoffelsalat: se pela un kilo de patatas." },
        { options: ["Schneide", "Isst", "Kaufst"], answer: 0, why: "La orden en imperativo du: Schneide!" },
        { options: ["normal", "teuer", "gefährlich"], answer: 0, why: "Llorar con las cebollas es normal." },
        { options: ["Prise", "Kilo", "Liter"], answer: 0, why: "Una pizca de sal: eine Prise Salz." },
      ],
    },
    {
      id: "cz-de-a2-08-2", title: "Backen mit Freunden", titleEs: "Hornear con amigos", minutes: 3,
      paragraphs: [
        { it: "Am Sonntag backen Timo und ich einen Apfelkuchen. Das {1} braucht 200 Gramm Mehl, 100 Gramm Zucker, zwei Eier und drei Äpfel. Timo {2} die Äpfel und ich mache den Teig. Mehl ist überall.", es: "El domingo Timo y yo horneamos una tarta de manzana. La receta lleva 200 gramos de harina, 100 de azúcar, dos huevos y tres manzanas. Timo pela las manzanas y yo hago la masa. Hay harina por todas partes." },
        { it: "«{3} den Teig ruhig um!», sage ich. Timo probiert und sagt: «Der braucht noch {4}!» Nach vierzig Minuten im Ofen duftet die Küche wie bei Oma. Wir {5} den Kuchen mit Freunden und alle sagen: «Lecker!»", es: "«¡Remueve la masa tranquilo!», digo yo. Timo prueba y dice: «¡Le falta azúcar!» A los cuarenta minutos de horno, la cocina huele como en casa de la abuela. Compartimos la tarta con amigos y todos dicen: «¡Riquísima!»" },
      ],
      gaps: [
        { options: ["Rezept", "Wetter", "Foto"], answer: 0, why: "Con gramos e ingredientes: la receta." },
        { options: ["schält", "isst", "verkauft"], answer: 0, why: "Las manzanas se pelan para el pastel." },
        { options: ["Rühr", "Riech", "Lauf"], answer: 0, why: "Imperativo du de umrühren: Rühr um!" },
        { options: ["Zucker", "Öl", "Mehl"], answer: 0, why: "Timo prueba y echa en falta dulzor: azúcar." },
        { options: ["teilen", "verstecken", "verkaufen"], answer: 0, why: "Con amigos y «Lecker»: la tarta se comparte." },
      ],
    },
    {
      id: "cz-de-a2-08-3", title: "Kochen oder bestellen?", titleEs: "¿Cocinar o pedir?", minutes: 3,
      paragraphs: [
        { it: "Viele junge Leute in Deutschland kochen nicht mehr selbst. Sie bestellen das Essen mit dem {1} — schnell und bequem. Aber selbst kochen hat Vorteile: Es ist {2} und man weiß genau, was drin ist.", es: "Muchos jóvenes en Alemania ya no cocinan. Piden la comida con el móvil: rápido y cómodo. Pero cocinar uno mismo tiene ventajas: es más barato y sabes exactamente qué lleva." },
        { it: "Frau Müller rät: «Koche einmal pro Woche etwas {3}! Nimm frische Sachen vom Wochenmarkt. {4} die Zutaten klein und probiere viel — so lernst du kochen.» Am Samstag besuche ich den {5} und kaufe Gemüse für eine Suppe.", es: "La señora Müller aconseja: «¡Cocina una vez por semana algo sencillo! Toma cosas frescas del mercado semanal. Corta los ingredientes y prueba mucho: así aprendes a cocinar.» El sábado visitaré el mercado y compraré verdura para una sopa." },
      ],
      gaps: [
        { options: ["Handy", "Hammer", "Schlüssel"], answer: 0, why: "Pedir comida hoy se hace desde el móvil." },
        { options: ["billiger", "teurer", "lauter"], answer: 0, why: "La ventaja de cocinar en casa: más barato." },
        { options: ["Einfaches", "Kompliziertes", "Teueres"], answer: 0, why: "Para empezar a cocinar, algo fácil." },
        { options: ["Schneide", "Vergiss", "Bestelle"], answer: 0, why: "La orden tras los ingredientes: cortarlos (imperativo du)." },
        { options: ["Wochenmarkt", "Hauptbahnhof", "Flughafen"], answer: 0, why: "La compra fresca: el mercado semanal." },
      ],
    },
  ],

  "de-cu-a2-09": [
    {
      id: "cz-de-a2-09-1", title: "Das Vorstellungsgespräch", titleEs: "La entrevista", minutes: 3,
      paragraphs: [
        { it: "Heute habe ich ein Vorstellungsgespräch im Café Marlow. Frau Hansen fragt: «Erzählen Sie kurz von {1}.» Ich sage: «Ich bin 24 und komme aus Spanien. Ich habe zwei Jahre als {2} in einem Restaurant gearbeitet.»", es: "Hoy tengo una entrevista en el Café Marlow. La señora Hansen pregunta: «Hábleme brevemente de usted.» Digo: «Tengo 24 años y vengo de España. Trabajé dos años de camarero en un restaurante.»" },
        { it: "«Warum wollen Sie bei uns {3}?» — «Weil ich Kaffee liebe und gern mit {4} arbeite.» Frau Hansen nickt. «Wann können Sie anfangen?» — «Nächste Woche!» Nach dem Gespräch gebe ich ihr meine {5} und gehe glücklich nach Hause.", es: "«¿Por qué quiere trabajar con nosotros?» — «Porque me encanta el café y me gusta trabajar con personas.» La señora Hansen asiente. «¿Cuándo puede empezar?» — «¡La semana que viene!» Tras la conversación le doy mi número y me voy feliz a casa." },
      ],
      gaps: [
        { options: ["sich", "mir", "uns"], answer: 0, why: "«Erzählen Sie von sich»: hábleme de usted (pronombre sich)." },
        { options: ["Kellner", "Arzt", "Pilot"], answer: 0, why: "La experiencia típica para un café: camarero." },
        { options: ["arbeiten", "schlafen", "studieren"], answer: 0, why: "La pregunta clave de motivación: trabajar aquí." },
        { options: ["Menschen", "Maschinen", "Tieren"], answer: 0, why: "Un café es tratar con personas." },
        { options: ["Nummer", "Rechnung", "Hausaufgaben"], answer: 0, why: "Tras la entrevista se dejan los datos de contacto." },
      ],
    },
    {
      id: "cz-de-a2-09-2", title: "Der Minijob", titleEs: "El minijob", minutes: 3,
      paragraphs: [
        { it: "Viele Studierende in Deutschland haben einen Minijob. Das sind Jobs mit wenigen {1} pro Woche — ohne Steuern. Beliebt sind Jobs im Restaurant, im Café, im Supermarkt oder als Nachhilfelehrer. So verdient man Geld für das Studium.", es: "Muchos estudiantes en Alemania tienen un minijob. Son trabajos de pocas horas a la semana, sin impuestos. Los populares: restaurante, cafetería, supermercado o clases particulares. Así se gana dinero para los estudios." },
        { it: "Ein Minijob bringt Geld und Praxis. Man lernt im Job viel Deutsch, weil man den ganzen Tag mit {2} spricht. Wichtig im Gespräch: immer {3} sagen, pünktlich sein und lächeln. Wer gut {4}, bekommt am Ende oft ein gutes {5} vom Chef.", es: "Un minijob trae dinero y práctica. En el trabajo se aprende mucho alemán, porque se habla todo el día con clientes. Lo importante en la entrevista: decir siempre Sie, ser puntual y sonreír. Quien trabaja bien, al final suele recibir un buen certificado del jefe." },
      ],
      gaps: [
        { options: ["Stunden", "Kilometern", "Seiten"], answer: 0, why: "Minijob = pocas horas semanales, sin impuestos." },
        { options: ["Gästen", "Robotern", "Pflanzen"], answer: 0, why: "En gastronomía se habla con clientes (Gäste)." },
        { options: ["Sie", "du", "ihr"], answer: 0, why: "Con jefes y clientes, la forma cortés Sie." },
        { options: ["arbeitet", "schläft", "meckert"], answer: 0, why: "Quien trabaja bien, recibe buen certificado." },
        { options: ["Zeugnis", "Foto", "Geschenk"], answer: 0, why: "El certificado laboral final: das Zeugnis." },
      ],
    },
    {
      id: "cz-de-a2-09-3", title: "Der erste Arbeitstag", titleEs: "El primer día de trabajo", minutes: 2,
      paragraphs: [
        { it: "Um acht Uhr stehe ich vor dem Café Marlow. Frau Hansen zeigt mir alles: die {1}, die Kaffeemaschine und den Lagerraum. Ich treffe meine neuen {2} — alle sind freundlich und erklären mir alles zweimal.", es: "A las ocho estoy delante del Café Marlow. La señora Hansen me enseña todo: la caja, la cafetera y el almacén. Conozco a mis nuevos compañeros: todos son amables y me explican todo dos veces." },
        { it: "Der erste Tag ist {3}, weil alles neu ist. Ich habe Bestellungen {4} und viel gelacht. Um 16 Uhr bin ich müde, aber {5}. Frau Hansen sagt: «Bis morgen!» — Ich freue mich auf die Arbeit.", es: "El primer día es agotador porque todo es nuevo. Tomé pedidos y me reí mucho. A las 16:00 estoy cansado, pero satisfecho. La señora Hansen dice: «¡Hasta mañana!». Tengo ganas de ese trabajo." },
      ],
      gaps: [
        { options: ["Kasse", "Oper", "Kita"], answer: 0, why: "Lo primero que enseña la jefa en un café: la caja." },
        { options: ["Kollegen", "Kinder", "Touristen"], answer: 0, why: "El primer día se conoce a los compañeros." },
        { options: ["anstrengend", "langweilig", "gratis"], answer: 0, why: "Todo nuevo: agotador (anstrengend)." },
        { options: ["aufgenommen", "aufgegeben", "ausgeschaltet"], answer: 0, why: "Tomar pedidos: Bestellungen aufnehmen." },
        { options: ["zufrieden", "krank", "hungrig"], answer: 0, why: "Cansado pero contento tras el estreno." },
      ],
    },
  ],

  "de-cu-a2-10": [
    {
      id: "cz-de-a2-10-1", title: "Nordsee oder Alpen?", titleEs: "¿Mar del Norte o Alpes?", minutes: 2,
      paragraphs: [
        { it: "Anna und ich sprechen über die Ferien. «Wohin werden wir {1}?», frage ich. «Die Vorhersage sagt: An der Nordsee wird es {2} und windig, aber trocken. In den Alpen wird es die ganze Woche regnen.»", es: "Anna y yo hablamos de las vacaciones. «¿Adónde iremos?», pregunto. «La previsión dice: en el mar del Norte hará sol y viento, pero seco. En los Alpes lloverá toda la semana.»" },
        { it: "«Letztes Jahr waren wir in den Alpen», sagt Anna. «Es hat jeden Tag {3}! Diesmal will ich das {4} sehen: Ebbe, Flut, Wind und Möwen.» — «Gut», sage ich, «dann buche ich gleich die {5}. Die Fähre bringt uns zur Insel.»", es: "«El año pasado estuvimos en los Alpes», dice Anna. «¡Llovió cada día! Esta vez quiero ver el mar: marea baja, marea alta, viento y gaviotas.» — «Bien», digo, «entonces reservo ya el apartamento. El ferry nos lleva a la isla.»" },
      ],
      gaps: [
        { options: ["fahren", "kochen", "sitzen"], answer: 0, why: "Wohin = destino: ir en vehículo, fahren." },
        { options: ["sonnig", "neblig", "frostig"], answer: 0, why: "Contraste con la lluvia alpina: sol en la costa." },
        { options: ["geregnet", "geschienen", "geschneit"], answer: 0, why: "La vacación pasada arruinada: llovió cada día." },
        { options: ["Meer", "Bahnhof", "Supermarkt"], answer: 0, why: "Marea, viento y gaviotas: el mar." },
        { options: ["Ferienwohnung", "Krankmeldung", "Fahrkarte"], answer: 0, why: "Para las vacaciones se reserva el alojamiento." },
      ],
    },
    {
      id: "cz-de-a2-10-2", title: "Die Vorhersage", titleEs: "La previsión del tiempo", minutes: 2,
      paragraphs: [
        { it: "Guten Abend, hier ist die Wettervorhersage für morgen. Im Norden wird es {1} mit kräftigem Wind. Die Temperaturen steigen auf 18 {2}. An der Küste gibt es am Morgen Nebel, der sich schnell auflöst.", es: "Buenas noches, aquí la previsión del tiempo para mañana. En el norte estará nublado con viento fuerte. Las temperaturas subirán hasta 18 grados. En la costa habrá niebla por la mañana que se disipará rápido." },
        { it: "Im Süden wird es {3} und warm — perfekt für den Badesee. Am Abend ziehen {4} auf und es wird ein bisschen kühler. Am {5} wird es überall sonnig. Wir wünschen Ihnen einen schönen Abend!", es: "En el sur hará sol y calor: perfecto para el lago de baño. Por la noche llegarán nubes y refrescará un poco. El fin de semana hará sol en todas partes. ¡Les deseamos una buena tarde!" },
      ],
      gaps: [
        { options: ["bewölkt", "lecker", "ehrlich"], answer: 0, why: "Vocabulario del tiempo: nublado (bewölkt)." },
        { options: ["Grad", "Meter", "Kilo"], answer: 0, why: "Las temperaturas se miden en grados." },
        { options: ["sonnig", "stürmisch", "frostig"], answer: 0, why: "Contraste con el norte: sol y calor en el sur." },
        { options: ["Wolken", "Züge", "Gäste"], answer: 0, why: "«Ziehen auf» = llegan: las nubes." },
        { options: ["Wochenende", "Montag", "gestern"], answer: 0, why: "El cierre optimista de la previsión: el finde." },
      ],
    },
    {
      id: "cz-de-a2-10-3", title: "Regen in den Alpen", titleEs: "Lluvia en los Alpes", minutes: 3,
      paragraphs: [
        { it: "Letztes Jahr haben wir unseren Urlaub in den Alpen gemacht. Die Ferienwohnung war {1}, aber das Wetter war schrecklich. Es hat {2} geregnet — wirklich jeden Tag! Wir haben die Berge kaum gesehen.", es: "El año pasado pasamos las vacaciones en los Alpes. El apartamento era bonito, pero el tiempo fue espantoso. Llovió a cántaros: ¡de verdad, cada día! Apenas vimos las montañas." },
        { it: "Wir konnten nicht wandern, weil die Wege zu {3} waren. Also haben wir im Wohnzimmer gesessen, Karten gespielt und Tee {4}. Nur einmal sind wir zwischen den Regenschauern {5} — für zehn Minuten! Dieses Jahr: Nordsee!", es: "No podíamos hacer senderismo porque los caminos estaban demasiado mojados. Así que nos quedamos en el salón jugando a cartas y bebiendo té. Solo una vez salimos entre chubascos: ¡durante diez minutos! Este año: ¡mar del Norte!" },
      ],
      gaps: [
        { options: ["schön", "eng", "kalt"], answer: 0, why: "Contraste «aber das Wetter»: el piso era bonito." },
        { options: ["in Strömen", "mit Freuden", "auf Deutsch"], answer: 0, why: "Expresión fija para la lluvia torrencial: in Strömen." },
        { options: ["nass", "trocken", "breit"], answer: 0, why: "Con lluvia continua: senderos empapados." },
        { options: ["getrunken", "gegessen", "geschlafen"], answer: 0, why: "Tarde de lluvia: beber té." },
        { options: ["rausgegangen", "eingeschlafen", "umgezogen"], answer: 0, why: "Entre chubascos solo una vez salieron (rausgehen)." },
      ],
    },
  ],

  "de-cu-a2-11": [
    {
      id: "cz-de-a2-11-1", title: "Der neue Nachbar", titleEs: "El vecino nuevo", minutes: 2,
      paragraphs: [
        { it: "Ich bin neu in Leipzig und kenne noch niemanden. Heute treffe ich im Treppenhaus meinen Nachbarn Herrn Schmidt. «Guten Tag! {1} Sie mir einen Gefallen tun? Ich brauche einen Bohrer für die Wand.» — «Natürlich!», sagt er.", es: "Soy nuevo en Leipzig y todavía no conozco a nadie. Hoy me encuentro en el rellano con mi vecino, el señor Schmidt. «¡Buenos días! ¿Podría hacerme un favor? Necesito un taladro para la pared.» — «¡Claro!», dice." },
        { it: "«Ich {2} Ihnen meinen Bohrer gern. Bringen Sie ihn {3} vorbei, wenn Sie Zeit haben.» Ich bedanke mich herzlich. Dann sagt er noch: «Eine Sache: Ab 22 Uhr ist hier {4}. Keine Musik, kein Bohren.» — «Verstanden! Das {5} ich nicht.»", es: "«Le presto mi taladro con gusto. Tráigalo mañana pasado por casa, si tiene tiempo.» Le doy las gracias de corazón. Entonces añade: «Una cosa: a partir de las 22 h hay silencio aquí. Ni música, ni taladro.» — «¡Entendido! No lo sabía.»" },
      ],
      gaps: [
        { options: ["Könnten", "Mussten", "Wollten"], answer: 0, why: "La petición cortés arranca con el Konjunktiv II könnten." },
        { options: ["leihe", "schenke", "verkaufe"], answer: 0, why: "Prestar por un tiempo: leihen, no regalar." },
        { options: ["morgen", "gestern", "nie"], answer: 0, why: "La devolución es futura: mañana." },
        { options: ["Ruhezeit", "Arbeitszeit", "Essenszeit"], answer: 0, why: "Sin música ni taladro a partir de las 22: Ruhezeit." },
        { options: ["wusste", "will", "kann"], answer: 0, why: "La reacción educada: «Das wusste ich nicht»." },
      ],
    },
    {
      id: "cz-de-a2-11-2", title: "Ein Gefallen für die Nachbarin", titleEs: "Un favor para la vecina", minutes: 3,
      paragraphs: [
        { it: "Am Freitag klingelt Frau Weber. «Entschuldigung, {1} Sie mir kurz helfen? Ich habe schwere Taschen und mein Rücken tut {2}.» — «Aber natürlich!» Ich trage die Taschen in den zweiten {3}.", es: "El viernes toca el timbre la señora Weber. «Disculpe, ¿podría ayudarme un momento? Llevo bolsas pesadas y me duele la espalda.» — «¡Pues claro!» Le subo las bolsas al segundo piso." },
        { it: "Frau Weber bedankt sich und fragt: «{4} Sie vielleicht einen Kaffee? Ich habe frischen Kuchen.» — «Gern, danke!» So lerne ich meine Nachbarn kennen: mit kleinen {5} und Kaffee. Bohren werde ich ab jetzt nur vor 20 Uhr!", es: "La señora Weber me da las gracias y pregunta: «¿Le apetece un café? Tengo tarta recién hecha.» — «¡Gusto, gracias!» Así conozco a mis vecinos: con pequeños favores y café. ¡A partir de ahora solo taladraré antes de las 20!" },
      ],
      gaps: [
        { options: ["könnten", "mussten", "wollten"], answer: 0, why: "Petición amable con Konjunktiv II: könnten." },
        { options: ["weh", "gut", "laut"], answer: 0, why: "Expresión fija del dolor: wehtun (tut weh)." },
        { options: ["Stock", "Park", "Schrank"], answer: 0, why: "In den zweiten Stock = al segundo piso." },
        { options: ["Möchten", "Mussten", "Konnten"], answer: 0, why: "La oferta amable: Möchten Sie (le apetece)." },
        { options: ["Gefallen", "Rechnungen", "Prüfungen"], answer: 0, why: "Favores mutuos y café: así se conocen los vecinos." },
      ],
    },
    {
      id: "cz-de-a2-11-3", title: "Höflich bitten", titleEs: "Pedir con cortesía", minutes: 3,
      paragraphs: [
        { it: "Im Deutschen bittet man Fremde mit dem Konjunktiv II. «Könnten Sie mir helfen?» klingt viel {1} als «Helfen Sie mir!». Auch «Ich {2} gern» ist Gold: In der Bäckerei, im Café, überall im Alltag.", es: "En alemán se pide a los desconocidos con el Konjunktiv II. «¿Podría ayudarme?» suena mucho más cortés que «¡Ayúdeme!». También «querría» es oro: en la panadería, en el café, en todas partes." },
        { it: "Mit Nachbarn und Kollegen ist es ähnlich: Erst {3}, dann Vertrauen — nach drei Kaffees darf man vielleicht «du» sagen. Wichtig sind auch die {4}: «Entschuldigung» vor der Frage, «Danke» danach. Und ein Lächeln {5} immer!", es: "Con vecinos y colegas es parecido: primero Sie, luego la confianza; tras tres cafés quizá se puede tutear. Importan también las palabras: «disculpe» antes de la pregunta y «gracias» después. ¡Y una sonrisa siempre ayuda!" },
      ],
      gaps: [
        { options: ["höflicher", "lauter", "schwerer"], answer: 0, why: "El Konjunktiv II suena más cortés." },
        { options: ["hätte", "habe", "war"], answer: 0, why: "«Ich hätte gern» = querría: la fórmula para pedir." },
        { options: ["Sie", "du", "ihr"], answer: 0, why: "Con desconocidos, primero el trato formal Sie." },
        { options: ["Wörter", "Fehler", "Nummern"], answer: 0, why: "Disculpa antes y gracias después: las palabras mágicas." },
        { options: ["hilft", "kostet", "regnet"], answer: 0, why: "La sonrisa siempre ayuda." },
      ],
    },
  ],

  "de-cu-a2-12": [
    {
      id: "cz-de-a2-12-1", title: "Mission: Zug an die Nordsee", titleEs: "Misión: tren al mar del Norte", minutes: 2,
      paragraphs: [
        { it: "Timo und ich planen die große Reise. {1} fahren wir mit dem ICE nach Hamburg. {2} steigen wir in den Regionalzug um und fahren nach Norddeich. Die Fahrt dauert ungefähr vier {3}.", es: "Timo y yo planeamos el gran viaje. Primero vamos en ICE hasta Hamburgo. Después hacemos transbordo al tren regional y vamos a Norddeich. El trayecto dura unas cuatro horas." },
        { it: "{4} nehmen wir die Fähre nach Norderney. Die Überfahrt dauert 45 Minuten. Die Fähre ist die {5} Etappe der Reise — Wind, Möwen und zum ersten Mal Meerluft! Um 17 Uhr kommen wir auf der Insel an.", es: "Finalmente tomamos el ferry a Norderney. La travesía dura 45 minutos. El ferry es el tramo más bonito del viaje: ¡viento, gaviotas y por primera vez aire de mar! A las 17:00 llegamos a la isla." },
      ],
      gaps: [
        { options: ["Zuerst", "Danach", "Schließlich"], answer: 0, why: "El primer paso de la serie: zuerst." },
        { options: ["Danach", "Zuerst", "Nie"], answer: 0, why: "La segunda etapa tras el ICE: danach." },
        { options: ["Stunden", "Meter", "Kilo"], answer: 0, why: "La duración del trayecto se mide en horas." },
        { options: ["Schließlich", "Zuerst", "Danach"], answer: 0, why: "El cierre de la secuencia: schließlich." },
        { options: ["schönste", "langweiligste", "gefährlichste"], answer: 0, why: "Viento, gaviotas y aire marino: la etapa más bonita." },
      ],
    },
    {
      id: "cz-de-a2-12-2", title: "Auf der Insel", titleEs: "En la isla", minutes: 3,
      paragraphs: [
        { it: "Norderney gehört zu den ostfriesischen Inseln. Autos dürfen hier nicht fahren — alle gehen zu {1} oder radeln. Deshalb ist die Insel so {2}: Man hört nur den Wind und die Möwen. Die Luft schmeckt nach Salz.", es: "Norderney pertenece a las islas de Frisia Oriental. Aquí no pueden circular coches: todos van a pie o en bici. Por eso la isla es tan tranquila: solo se oyen el viento y las gaviotas. El aire sabe a sal." },
        { it: "Das Wattenmeer ist das {3} seiner Art in Europa. Bei Ebbe kannst du auf dem Meeresboden {4}! Ein Führer erklärt Vögel und Robben. Am Abend essen wir Fischbrötchen am {5} und sehen den Sonnenuntergang. Was für ein Tag!", es: "El mar de Watten es el mayor de su clase en Europa. ¡Con marea baja puedes caminar sobre el fondo del mar! Un guía explica aves y focas. Por la noche comemos bocadillos de pescado en la playa y vemos la puesta de sol. ¡Menudo día!" },
      ],
      gaps: [
        { options: ["Fuß", "Haus", "Bett"], answer: 0, why: "Expresión fija: a pie (zu Fuß gehen)." },
        { options: ["ruhig", "laut", "teuer"], answer: 0, why: "Solo viento y gaviotas: tranquila." },
        { options: ["größte", "kleinste", "neueste"], answer: 0, why: "El superlativo del texto: el mayor de su clase." },
        { options: ["wandern", "schwimmen", "schlafen"], answer: 0, why: "Con marea baja se camina sobre el fondo marino." },
        { options: ["Strand", "Herd", "Schreibtisch"], answer: 0, why: "Bocadillos de pescado al atardecer: en la playa." },
      ],
    },
    {
      id: "cz-de-a2-12-3", title: "Der Reisebericht", titleEs: "El relato del viaje", minutes: 3,
      paragraphs: [
        { it: "Zurück in Köln schreibe ich einen Bericht für meine Familie. Zuerst der Zug: Am Freitagmorgen war er {1} voll — viele Menschen fahren ans Meer. In Hamburg haben wir {2} und in der Stadt einen Kaffee getrunken.", es: "De vuelta en Colonia escribo un relato para mi familia. Primero el tren: el viernes por la mañana iba casi lleno, porque mucha gente viaja al mar. En Hamburgo hicimos transbordo y tomamos un café por la ciudad." },
        { it: "Danach die Fähre — die {3} Etappe! Auf der Insel haben wir zuerst das Zimmer {4}, dann eine Wattwanderung gemacht. Schließlich haben wir am Strand den {5} gesehen und sind glücklich nach Hause gefahren. Die beste Reise seit Jahren!", es: "Después el ferry: ¡la etapa más bonita! En la isla primero buscamos la habitación y luego hicimos una caminata por el Watt. Finalmente vimos la puesta de sol en la playa y volvimos felices a casa. ¡El mejor viaje en años!" },
      ],
      gaps: [
        { options: ["fast", "nie", "kaum"], answer: 0, why: "Viernes y vacaciones: el tren casi lleno." },
        { options: ["umgestiegen", "geschlafen", "gewartet"], answer: 0, why: "En Hamburgo se cambia de tren: umsteigen." },
        { options: ["schönste", "schwerste", "langweiligste"], answer: 0, why: "La exclamación positiva: la etapa más bonita." },
        { options: ["gesucht", "gekauft", "verkauft"], answer: 0, why: "Al llegar, primero localizar la habitación reservada." },
        { options: ["Sonnenuntergang", "Stau", "Regen"], answer: 0, why: "En la playa al final del día: la puesta de sol." },
      ],
    },
  ],
};
