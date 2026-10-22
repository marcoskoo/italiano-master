import type { CbClozeText } from "../../cambridge";

/* ═══ DE B1 · Cloze readings — 3 por unidad (inferencia léxica) ══════
   Metodología v9.12: el texto en alemán lleva marcadores {1} {2}, que
   el reproductor convierte en huecos; el estudiante deduce la palabra
   por el contexto. Campos: `.it` = alemán de Alemania, `.es` = español.
   Temas conectados con el escenario de cada unidad B1.                 */

export const DE_CLOZE_B1: Record<string, CbClozeText[]> = {
  "de-cu-b1-01": [
    {
      id: "cz-de-b1-01-1", title: "Das Diskussionsforum", titleEs: "El foro de discusión", minutes: 3,
      paragraphs: [
        { it: "Der B1-Kurs in München diskutiert diese Woche eine Frage: Sollten Handys im Unterricht verboten sein? Im Online-Forum der Volkshochschule schreibt jeder seine Meinung. Lena beginnt: «Ich denke, dass Handys {1} sind, weil man Wörter schnell nachschlagen kann.»", es: "El curso B1 de Múnich debate esta semana una pregunta: ¿deberían prohibirse los móviles en clase? En el foro online de la Volkshochschule cada uno escribe su opinión. Lena empieza: «Creo que los móviles son útiles, porque se pueden buscar palabras rápidamente.»" },
        { it: "Jonas antwortet: «Da sehe ich das {2}. Obwohl fast alle ein Handy haben, benutzt es nicht jeder im Unterricht.» Nach einer langen Diskussion findet der Kurs eine {3}: Die Handys bleiben bis zur Pause in der Tasche. Am Ende sind alle einverstanden, und die Kursleiterin schreibt die neue Regel an die {4}. «Das war eine gute {5}», sagt sie, «so funktioniert Streitkultur.»", es: "Jonas responde: «Eso lo veo distinto. Aunque casi todos tienen móvil, no todo el mundo lo usa en clase.» Tras una larga discusión el curso encuentra una solución intermedia: los móviles se quedan en la mochila hasta el recreo. Al final todos están de acuerdo, y la profesora escribe la nueva regla en la pizarra. «Ha sido una buena discusión», dice, «así funciona la cultura del debate.»" },
      ],
      gaps: [
        { options: ["nützlich", "gefährlich", "kaputt"], answer: 0, why: "Buscar palabras rápidamente es un argumento a favor: los móviles son útiles." },
        { options: ["genauso", "anders", "fertig"], answer: 1, why: "Jonas contraargumenta con obwohl: lo ve de otra manera." },
        { options: ["Katastrophe", "Lösung", "Prüfung"], answer: 1, why: "Los móviles solo se guardan hasta el recreo: ni prohibición total ni libertad total, una solución intermedia." },
        { options: ["Tafel", "Wand", "Tür"], answer: 0, why: "En un aula, la regla común se escribe en la pizarra." },
        { options: ["Diskussion", "Rechnung", "Reise"], answer: 0, why: "Opiniones, aunque y propuesta final: eso es una discusión, y en Alemania se aprecia." },
      ],
    },
    {
      id: "cz-de-b1-01-2", title: "Die Vereinsversammlung", titleEs: "La asamblea del club", minutes: 3,
      paragraphs: [
        { it: "Am Dienstagabend trifft sich der Kulturverein am Rhein zu seiner Jahreshauptversammlung. Tagesordnungspunkt drei sorgt für Streit: Soll das Sommerfest diesmal größer werden? Herr Weber ist {1}, weil ein großes Fest viel Arbeit macht.", es: "El martes por la tarde, el club cultural del Rin se reúne en su asamblea anual. El punto tres del orden del día trae disputa: ¿debería ser más grande este año la fiesta de verano? El señor Weber está en contra, porque una fiesta grande supone mucho trabajo." },
        { it: "Frau Sommer argumentiert: «Ich denke, dass ein großes Fest auch neue {2} in den Verein bringt.» Obwohl die Kasse knapp ist, stimmen am Ende die meisten {3}. Das Fest wird organisiert, und jeder verspricht, ein Stück {4} mitzunehmen. Am Ende applaudieren alle — so funktioniert {5} im Verein.", es: "La señora Sommer argumenta: «Creo que una fiesta grande trae también nuevos socios al club.» Aunque las cuentas están justas, al final la mayoría vota a favor. La fiesta se organiza, y cada uno promete llevar un trozo de tarta. Al final todos aplauden: así funciona la democracia en el club." },
      ],
      gaps: [
        { options: ["dafür", "dagegen", "danach"], answer: 1, why: "«Viel Arbeit» es un argumento en contra: Herr Weber se opone." },
        { options: ["Probleme", "Mitglieder", "Rechnungen"], answer: 1, why: "Una fiesta grande atrae gente nueva: nuevos socios para el club." },
        { options: ["dagegen", "davon", "dafür"], answer: 2, why: "Se decide organizar la fiesta a pesar de la caja justa: la mayoría vota que sí." },
        { options: ["Kuchen", "Möbel", "Wasser"], answer: 0, why: "Cada uno lleva algo para la mesa del fest: lo típico es un trozo de tarta casera." },
        { options: ["Wirtschaft", "Grammatik", "Demokratie"], answer: 2, why: "Debate, votación y aplauso final: en el club se practica la democracia en pequeño." },
      ],
    },
    {
      id: "cz-de-b1-01-3", title: "Meiner Meinung nach", titleEs: "Según mi opinión", minutes: 3,
      paragraphs: [
        { it: "In Deutschland wird viel und direkt diskutiert, schon in der Schule. Wer seine Meinung sagt, muss sie auch {1}, denn ein Argument ohne Grund zählt nicht. Man sagt: Wer nur schimpft, hat schon {2}.", es: "En Alemania se discute mucho y directamente, ya en la escuela. Quien da su opinión debe también fundamentarla, porque un argumento sin motivo no cuenta. Se dice: quien solo protesta, ya ha perdido." },
        { it: "Deshalb lernen Schüler schon früh, eine Erörterung zu schreiben: erst beide Seiten {3}, dann die eigene Meinung. Obwohl man hart argumentiert, bleibt man freundlich: Es geht um die {4}, nicht um die Person. Und wer in einer Besprechung schweigt, riskiert, dass die anderen denken, er hat kein {5} am Thema.", es: "Por eso los alumnos aprenden pronto a escribir una argumentación: primero presentar las dos partes y después la opinión propia. Aunque se argumente con dureza, se sigue siendo amable: se trata del asunto, no de la persona. Y quien calla en una reunión corre el riesgo de que los demás piensen que no le interesa el tema." },
      ],
      gaps: [
        { options: ["wiederholen", "begründen", "übersetzen"], answer: 1, why: "«Ein Argument ohne Grund zählt nicht»: la opinión hay que fundamentarla." },
        { options: ["gewonnen", "geschlafen", "verloren"], answer: 2, why: "Quien solo protesta, sin argumentos, ya ha perdido la discusión." },
        { options: ["verlieren", "nennen", "bezahlen"], answer: 1, why: "En la Erörterung primero se nombran los argumentos de las dos partes." },
        { options: ["Sache", "Miete", "Party"], answer: 0, why: "El contraste «nicht um die Person» marca la palabra: se discute el asunto." },
        { options: ["Interesse", "Geld", "Urlaub"], answer: 0, why: "Quien calla parece desinteresado: no muestra interés por el tema." },
      ],
    },
  ],

  "de-cu-b1-02": [
    {
      id: "cz-de-b1-02-1", title: "Der Praktikumsbericht", titleEs: "El informe de prácticas", minutes: 3,
      paragraphs: [
        { it: "Letzten Monat habe ich ein Praktikum bei einer Maschinenbaufirma in Stuttgart gemacht. Vor dem Praktikum hatte ich noch nie in einem {1} gearbeitet und war sehr nervös. Am ersten Tag hatte ich große {2}, weil ich noch nie mit Kunden telefoniert hatte.", es: "El mes pasado hice unas prácticas en una empresa de máquinas de Stuttgart. Antes de las prácticas nunca había trabajado en una oficina y estaba muy nervioso. El primer día tenía mucho miedo, porque nunca había hablado por teléfono con clientes." },
        { it: "Aber die Kollegen hatten mir vorher alles {3}, und nach einer Woche lief es gut. Seit drei Jahren lerne ich Deutsch, aber erst in Stuttgart habe ich zum ersten Mal eine ganze Besprechung {4}. Die Erfahrung hat mich {5}: Jetzt weiß ich, wo ich später arbeiten möchte.", es: "Pero los colegas me lo habían explicado todo antes, y a la semana siguiente todo iba bien. Desde hace tres años aprendo alemán, pero solo en Stuttgart entendí por primera vez una reunión entera. La experiencia me marcó: ahora sé dónde quiero trabajar más adelante." },
      ],
      gaps: [
        { options: ["Büro", "Schwimmbad", "Kino"], answer: 0, why: "Las prácticas son en una empresa: nunca había trabajado en una oficina." },
        { options: ["Freude", "Angst", "Lust"], answer: 1, why: "Llamadas por primera vez y nervios del primer día: tenía miedo." },
        { options: ["versteckt", "erklärt", "verboten"], answer: 1, why: "Los colegas ayudan antes de empezar: me lo habían explicado todo." },
        { options: ["verstanden", "geplant", "gekocht"], answer: 0, why: "Tras tres años de alemán, por fin entendió una reunión completa." },
        { options: ["geprägt", "gelangweilt", "gestört"], answer: 0, why: "Ahora sabe dónde quiere trabajar: la experiencia lo marcó." },
      ],
    },
    {
      id: "cz-de-b1-02-2", title: "Zwei Praktika im Vergleich", titleEs: "Dos prácticas comparadas", minutes: 3,
      paragraphs: [
        { it: "Timo erzählt im Kurs von seinen zwei Praktika: Beide hatte er im {1} gemacht. Vor dem ersten Praktikum hatte er keine {2}, wie eine Kasse funktioniert, und die Kollegen mussten ihm alles zeigen.", es: "Timo cuenta en clase sus dos prácticas: las dos las había hecho en el supermercado. Antes de la primera no tenía ni idea de cómo funciona una caja, y los colegas tuvieron que enseñárselo todo." },
        { it: "«Ich hatte immer {3}, dass etwas schiefgeht», sagt er. «Aber am Ende hat alles geklappt.» Seit dem Praktikum weiß er genau, was er später machen will: Er studiert jetzt {4} und bereitet sich auf seinen ersten richtigen {5} vor. Erfahrungen, die prägen, bleiben eben im Kopf.", es: "«Siempre tenía la preocupación de que algo saliera mal», dice. «Pero al final todo salió bien.» Desde las prácticas sabe exactamente lo que quiere hacer más adelante: ahora estudia logística y se prepara su primer puesto de verdad. Las experiencias que marcan se quedan en la cabeza." },
      ],
      gaps: [
        { options: ["Supermarkt", "Museum", "Krankenhaus"], answer: 0, why: "Cajas y colegas que enseñan: las prácticas fueron en un supermercado." },
        { options: ["Ahnung", "Zeit", "Angst"], answer: 0, why: "«Wie eine Kasse funktioniert»: no tenía ni idea del funcionamiento." },
        { options: ["Sorgen", "Träume", "Lieder"], answer: 0, why: "«Dass etwas schiefgeht»: era la preocupación de que algo saliera mal." },
        { options: ["Logistik", "Musik", "Sport"], answer: 0, why: "Cajas, supermercado y organización del negocio: estudia logística." },
        { options: ["Job", "Urlaub", "Führerschein"], answer: 0, why: "«Studiert und bereitet sich vor»: se prepara su primer puesto de verdad." },
      ],
    },
    {
      id: "cz-de-b1-02-3", title: "Vor einem Jahr, seit einem Jahr", titleEs: "Hace un año, desde hace un año", minutes: 2,
      paragraphs: [
        { it: "Liebes Tagebuch: Vor einem Jahr bin ich nach Deutschland {1}. Damals hatte ich kaum Freunde und verstand nur wenige Wörter. Seit einem Jahr wohne ich jetzt hier — und das Land fühlt sich langsam wie {2} an.", es: "Querido diario: hace un año vine a Alemania. Entonces apenas tenía amigos y entendía pocas palabras. Desde hace un año vivo aquí, y el país se siente ya despacio como mi casa." },
        { it: "Vor dem Deutschkurs hatte ich noch nie eine Prüfung {3}. Seit sechs Monaten gehe ich in den B1-Kurs, und vor zwei Wochen habe ich meine erste Präsentation {4}. Meine Lehrerin sagt: «Du hast enorme Fortschritte gemacht.» Vor einem Jahr hätte ich diesen Satz noch nicht {5}.", es: "Antes del curso de alemán nunca había hecho un examen. Desde hace seis meses voy al curso B1, y hace dos semanas hice mi primera presentación. Mi profesora dice: «Has hecho progresos enormes.» Hace un año todavía no habría entendido esta frase." },
      ],
      gaps: [
        { options: ["gekommen", "gegangen", "geflogen"], answer: 0, why: "Llegada a Alemania con sein: venir = kommen → gekommen." },
        { options: ["Zuhause", "Büro", "Hotel"], answer: 0, why: "Tras un año, amigos y idioma: el país ya se siente como casa." },
        { options: ["gemacht", "verpasst", "geschenkt"], answer: 0, why: "Antes del curso, ninguna experiencia: nunca había hecho un examen." },
        { options: ["gehalten", "verloren", "bestellt"], answer: 0, why: "Una presentación se hace (halten): Presentación → halten." },
        { options: ["verstanden", "geschrieben", "gesungen"], answer: 0, why: "Hace un año, con pocas palabras, no habría entendido la frase." },
      ],
    },
  ],

  "de-cu-b1-03": [
    {
      id: "cz-de-b1-03-1", title: "Drei Millionen am Freitag", titleEs: "Tres millones el viernes", minutes: 3,
      paragraphs: [
        { it: "Es ist Freitagabend in einem Café in Köln. Plötzlich ruft Lena: «Schau mal, im Fernsehen! Jemand hat drei Millionen im Lotto {1}!» Jonas stellt sofort die Frage des Abends: «Was {2} du machen, wenn du so viel Geld hättest?»", es: "Es viernes por la noche en un café de Colonia. De pronto Lena grita: «¡Mira, en la tele! ¡Alguien ha ganado tres millones en la lotería!» Jonas lanza enseguida la pregunta de la noche: «¿Qué harías tú si tuvieras tanto dinero?»" },
        { it: "«Ich würde sofort eine Weltreise machen», sagt der Student. «Ich {3} Angst, alles auf einmal auszugeben», sagt Lena. «Ich würde das Geld anlegen.» Nach einer Stunde hat jeder seinen Traum erzählt — und am Ende zahlen alle {4} ihre kleinen Rechnungen. Denn Träume sind {5}: Sie kosten nichts.", es: "«Yo haría inmediatamente un viaje por el mundo», dice el estudiante. «Yo tendría miedo de gastarlo todo de golpe», dice Lena. «Yo invertiría el dinero.» Tras una hora cada uno ha contado su sueño, y al final todos pagan de todos modos sus cuentas pequeñas. Porque los sueños son gratis: no cuestan nada." },
      ],
      gaps: [
        { options: ["gewonnen", "bezahlt", "verloren"], answer: 0, why: "Tres millones en la lotería: alguien los ha ganado." },
        { options: ["willst", "würdest", "kannst"], answer: 1, why: "La pregunta del juego irreal: «¿qué harías tú si tuvieras?»" },
        { options: ["hätte", "habe", "hatte"], answer: 0, why: "Miedo irreal ante la hipótesis de gastarlo todo: Konjunktiv II hätte." },
        { options: ["trotzdem", "deshalb", "vielleicht"], answer: 0, why: "Sueños aparte, al final pagan sus cuentas de todos modos." },
        { options: ["gratis", "teuer", "schwer"], answer: 0, why: "«Sie kosten nichts»: los sueños son gratis." },
      ],
    },
    {
      id: "cz-de-b1-03-2", title: "Die Straßenumfrage", titleEs: "La encuesta callejera", minutes: 3,
      paragraphs: [
        { it: "Ein Radiosender in Köln macht eine Straßenumfrage: «Was würden Sie mit einer Million Euro machen?» Die erste Frau antwortet: «Ich würde zuerst alle meine {1} bezahlen.» Ein älterer Herr sagt: «Ich würde ein kleines Haus am {2} kaufen, mit Garten und Ruhe.»", es: "Una emisora de radio de Colonia hace una encuesta callejera: «¿Qué haría usted con un millón de euros?» La primera mujer responde: «Primero pagaría todas mis deudas.» Un señor mayor dice: «Compraría una casita junto al lago, con jardín y tranquilidad.»" },
        { it: "Ein junger Mann lacht: «Ich wüsste es nicht. Eine Million wäre zu viel {3} für mich.» Die Reporterin fragt weiter: «Wären Sie {4}, wenn plötzlich alle Nachbarn von Ihrem Geld wüssten?» Ein Lehrer antwortet: «Nein, ich würde ruhig bleiben.» Würden die meisten weiterarbeiten? «Ja» — denn Geld allein macht laut Umfrage nicht {5}.", es: "Un joven se ríe: «No lo sabría. Un millón sería demasiado estrés para mí.» La reportera sigue: «¿Estaría usted intranquilo si de pronto todos los vecinos supieran de su dinero?» Un profesor responde: «No, me mantendría tranquilo.» ¿Seguirían trabajando la mayoría? «Sí», porque el dinero solo, según la encuesta, no hace feliz." },
      ],
      gaps: [
        { options: ["Schulden", "Schuhe", "Schlüssel"], answer: 0, why: "Lo primero y más modesto: pagar todas las deudas." },
        { options: ["Bahnhof", "See", "Markt"], answer: 1, why: "«Mit Garten und Ruhe»: la casita soñada junto al lago." },
        { options: ["Stress", "Musik", "Honig"], answer: 0, why: "«Ich wüsste es nicht»: un millón sería demasiado agobio." },
        { options: ["unruhig", "glücklich", "allein"], answer: 0, why: "Que todos los vecinos sepan de tu dinero pone nervioso: intranquilo." },
        { options: ["müde", "reich", "glücklich"], answer: 2, why: "Cierre proverbial: el dinero solo no hace feliz." },
      ],
    },
    {
      id: "cz-de-b1-03-3", title: "Fernweh", titleEs: "La añoranza de lo lejano", minutes: 3,
      paragraphs: [
        { it: "Die Deutschen haben für jede Sehnsucht ein Wort. Das Gegenteil von Heimweh heißt {1}: die Sehnsucht nach der Ferne. Laut Umfragen träumen viele vom eigenen Haus mit {2} — das typisch deutsche Eigenheim.", es: "Los alemanes tienen una palabra para cada añoranza. Lo contrario de la nostalgia de casa se llama Fernweh: la añoranza de lo lejano. Según las encuestas, muchos sueñan con una casa propia con jardín: el Eigenheim, típico alemán." },
        { it: "Wenn sie plötzlich reich wären, würden die meisten zuerst ihre {3} bezahlen und dann eine lange Reise machen. Interessant: Die Antworten sind meist {4} — der Familie helfen, reisen, Ruhe suchen. Der deutsche Traum ist nicht der Luxus, sondern die {5}: das Polster, das einem die Freiheit gibt, in Ruhe zu wählen.", es: "Si de repente fueran ricos, la mayoría pagaría primero sus deudas y luego haría un largo viaje. Lo interesante: las respuestas suelen ser modestas: ayudar a la familia, viajar, buscar tranquilidad. El sueño alemán no es el lujo, sino la seguridad: el colchón que da la libertad de elegir con calma." },
      ],
      gaps: [
        { options: ["Fernweh", "Heimweh", "Durst"], answer: 0, why: "«Das Gegenteil von Heimweh» y «Sehnsucht nach der Ferne» definen la palabra." },
        { options: ["Garage", "Garten", "Pool"], answer: 1, why: "El Eigenheim alemán clásico: casa propia con jardín." },
        { options: ["Schulden", "Mieten", "Steuern"], answer: 0, why: "La respuesta más común ante la riqueza súbita: pagar primero las deudas." },
        { options: ["bescheiden", "teuer", "witzig"], answer: 0, why: "Ayudar a la familia y viajar: respuestas modestas." },
        { options: ["Sicherheit", "Spannung", "Geschwindigkeit"], answer: 0, why: "«Nicht der Luxus» y «das Polster»: lo que buscan es seguridad." },
      ],
    },
  ],

  "de-cu-b1-04": [
    {
      id: "cz-de-b1-04-1", title: "Die Vereinsversammlung", titleEs: "La reunión del club", minutes: 3,
      paragraphs: [
        { it: "Im Kulturverein in Hamburg steht das Sommerfest vor der Tür. «Wer {1} uns helfen?» fragt Herr Schmidt in die Runde. Petra hebt die Hand: «Ich werde die Getränke {2} — das ist mein Versprechen.» Timo sagt: «Ich kümmere mich um die Musik und bringe die Boxen und die {3} mit.»", es: "En el club cultural de Hamburgo se acerca la fiesta de verano. «¿Quién nos ayudará?», pregunta el señor Schmidt a la mesa. Petra alza la mano: «Yo organizaré las bebidas: esa es mi promesa.» Timo dice: «Yo me encargo de la música y llevaré los altavoces y las listas de reproducción.»" },
        { it: "Der neue spanische Kollege verspricht: «Ich {4} einen spanischen Kuchen mitbringen!» Und wenn es am Festtag regnet? «Keine Sorge», sagt Petra, «ich werde ein großes Zelt {5}, damit wir bei jedem Wetter feiern können.» Am Ende sagt Herr Schmidt: «Auf euch ist Verlass.»", es: "El nuevo socio español promete: «¡Yo traeré una tarta española!» ¿Y si llueve el día de la fiesta? «Tranquilo», dice Petra, «conseguiré una carpa grande para que podamos celebrar con cualquier tiempo.» Al final el señor Schmidt dice: «Se puede contar con vosotros.»" },
      ],
      gaps: [
        { options: ["wird", "wurde", "wärst"], answer: 0, why: "Pregunta sobre el futuro de la reunión: ¿quién nos ayudará?" },
        { options: ["organisieren", "organisiert", "organisierte"], answer: 0, why: "Tras werde, el infinitivo cierra la promesa." },
        { options: ["Playlists", "Rechnungen", "Kartons"], answer: 0, why: "Se encarga de la música: altavoces y listas de reproducción." },
        { options: ["werde", "wurde", "wäre"], answer: 0, why: "La promesa del nuevo socio va en Futur I: ich werde." },
        { options: ["besorgen", "besorgt", "besorgst"], answer: 0, why: "Promesa futura: werde + infinitivo besorgen al final." },
      ],
    },
    {
      id: "cz-de-b1-04-2", title: "Die E-Mail vor dem Fest", titleEs: "El correo antes de la fiesta", minutes: 3,
      paragraphs: [
        { it: "Von: Herr Schmidt, Kulturverein Hamburg. Liebe Mitglieder, in zwei Wochen ist unser Sommerfest. Ich {1} morgen beim Bezirksamt anrufen und nach der Erlaubnis fragen. Petra wird die Getränke {2}, und Timo kümmert sich um die Musik.", es: "De: señor Schmidt, club cultural de Hamburgo. Queridos socios: en dos semanas es nuestra fiesta de verano. Mañana llamaré a la oficina del distrito y preguntaré por el permiso. Petra comprará las bebidas, y Timo se encarga de la música." },
        { it: "Bitte denkt an das {3} unseres Vereins: Jeder bringt etwas mit, so bleibt das Fest günstig. Ich werde pünktlich sein — {4}! Und ich werde beim {5} helfen, damit wir um 16 Uhr fertig sind. Bis Samstag, euer Herr Schmidt.", es: "Recordad el principio de nuestro club: cada uno trae algo, así la fiesta sigue barata. Seré puntual, ¡prometido! Y ayudaré con el montaje para que estemos listos a las 16. Hasta el sábado, vuestro señor Schmidt." },
      ],
      gaps: [
        { options: ["werde", "wollte", "muss"], answer: 0, why: "Anuncio de intención para mañana: Futur I ich werde." },
        { options: ["kaufen", "kauft", "gekauft"], answer: 0, why: "Tras wird, el infinitivo: Petra comprará las bebidas." },
        { options: ["Prinzip", "Problem", "Programm"], answer: 0, why: "«Jeder bringt etwas mit»: es el principio del club, no un problema." },
        { options: ["versprochen", "vergessen", "geplant"], answer: 0, why: "Cierre clásico de una promesa alemana: ¡prometido!" },
        { options: ["Aufbau", "Abbau", "Schlaf"], answer: 0, why: "«Damit wir um 16 Uhr fertig sind»: ayuda con el montaje previo." },
      ],
    },
    {
      id: "cz-de-b1-04-3", title: "Nach dem Sommerfest", titleEs: "Después de la fiesta de verano", minutes: 3,
      paragraphs: [
        { it: "Das Sommerfest des Kulturvereins ist vorbei, und fast alle Versprechen wurden {1}: Petra hatte die Getränke organisiert, Timo hatte die Boxen mitgebracht, und der spanische Kuchen war in zehn Minuten {2}. Nur das Wetter machte einen Strich durch die Rechnung.", es: "La fiesta de verano del club cultural ha terminado, y casi todas las promesas se cumplieron: Petra había organizado las bebidas, Timo había traído los altavoces, y la tarta española desapareció en diez minutos. Solo el tiempo desbarató los planes." },
        { it: "Aber Petras großes Zelt {3} das Fest gerettet. Beim Abbau sagt Herr Schmidt: «Ihr wart großartig. Nächstes Jahr wird das Fest {4} schöner: Wir werden neue Mitglieder suchen, und ich werde wieder beim Bezirksamt {5}.» Alle lachen und machen sich an die Arbeit — ein Verein hält zusammen.", es: "Pero la gran carpa de Petra salvó la fiesta. Al desmontar, el señor Schmidt dice: «Habéis sido estupendos. El año que viene la fiesta será aún más bonita: buscaremos socios nuevos, y yo volveré a llamar a la oficina del distrito.» Todos se ríen y se ponen manos a la obra: un club se mantiene unido." },
      ],
      gaps: [
        { options: ["gehalten", "gelacht", "gefragt"], answer: 0, why: "Versprechen werden gehalten: las promesas se cumplen." },
        { options: ["weg", "kalt", "groß"], answer: 0, why: "Diez minutos y todos querían probarla: la tarta desapareció." },
        { options: ["hat", "wird", "war"], answer: 0, why: "Acción pasada que salvó la fiesta: hat gerettet." },
        { options: ["noch", "nicht", "nie"], answer: 0, why: "Comparación con este año: el año que viene aún más bonito." },
        { options: ["anrufen", "anruft", "angerufen"], answer: 0, why: "Tras werde, infinitivo con prefijo pegado: anrufen." },
      ],
    },
  ],

  "de-cu-b1-05": [
    {
      id: "cz-de-b1-05-1", title: "Die Hausordnung der WG", titleEs: "El reglamento del piso compartido", minutes: 3,
      paragraphs: [
        { it: "Die neue WG in Berlin-Kreuzberg hat eine Hausordnung an der Küchentür. Zwischen 22 und 6 Uhr ist {1}: Man darf keine laute Musik spielen. Und am Sonntagmorgen muss man besonders {2} sein, da schläft die halbe Nachbarschaft.", es: "El nuevo piso compartido de Berlín-Kreuzberg tiene un reglamento en la puerta de la cocina. Entre las 22 y las 6 hay silencio nocturno: no se puede poner música alta. Y el domingo por la mañana hay que ser especialmente silencioso, porque duerme medio vecindario." },
        { it: "Der Müll wird streng getrennt: Papier kommt in die {3} Tonne, Verpackungen in die gelbe, Biomüll in die braune. Der Putzplan hängt im Flur: Jede {4} ist jemand anders dran. Und drinnen ist es verboten zu {5} — der Balkon ist dafür da.", es: "La basura se separa estrictamente: el papel va al contenedor azul, los envases al amarillo y los restos orgánicos al marrón. El plan de limpieza cuelga en el pasillo: cada semana le toca a otro. Y dentro está prohibido fumar: para eso está el balcón." },
      ],
      gaps: [
        { options: ["Nachtruhe", "Partyzeit", "Arbeitszeit"], answer: 0, why: "Franja de 22 a 6 y sin música alta: silencio nocturno." },
        { options: ["laut", "leise", "schnell"], answer: 1, why: "El domingo duerme el vecindario: hay que ser especialmente silencioso." },
        { options: ["blaue", "rote", "schwarze"], answer: 0, why: "El sistema alemán: papel azul, envases amarillos, orgánico marrón." },
        { options: ["Woche", "Stunde", "Monat"], answer: 0, why: "«Jemand anders dran»: el turno de limpieza rota cada semana." },
        { options: ["rauchen", "kochen", "lesen"], answer: 0, why: "«Der Balkon ist dafür da»: lo prohibido dentro solo puede ser fumar." },
      ],
    },
    {
      id: "cz-de-b1-05-2", title: "E-Mail an die Vermieterin", titleEs: "Correo a la casera", minutes: 3,
      paragraphs: [
        { it: "Sehr geehrte Frau Meier, ich ziehe am ersten Oktober in die WG in der Bergmannstraße ein und habe zwei Fragen zur Hausordnung. Darf ich am Wochenende {1} mitbringen, der bis Sonntag bleibt? Wir würden natürlich leise sein.", es: "Muy señora mía: me mudo el 1 de octubre al piso compartido de la calle Bergmann y tengo dos dudas sobre el reglamento. ¿Puedo traer de fin de semana a una visita que se queda hasta el domingo? Seríamos, por supuesto, silenciosos." },
        { it: "Frau Meier antwortet am selben Tag: «Besuch ist erlaubt, aber ab 22 Uhr ist {2}, und am Sonntagmorgen gilt die Ruhezeit.» Sie erklärt auch die Tonne: «Ihr {3} ist die braune im Hof.» Zum Schluss schreibt sie: «Willkommen im Haus! Die Nachbarn sind {4}, aber sehr korrekt. Wenn Sie Fragen haben, schreiben Sie einfach eine {5}.»", es: "La señora Meier responde el mismo día: «Las visitas están permitidas, pero a partir de las 22 se acabó, y el domingo por la mañana rige el horario de descanso.» También explica el contenedor: «El vuestro es el marrón del patio.» Para terminar escribe: «¡Bienvenido a la casa! Los vecinos son amables, pero muy correctos. Si tiene dudas, escríbame simplemente un correo.»" },
      ],
      gaps: [
        { options: ["Besuch", "Möbel", "Obst"], answer: 0, why: "Alguien que se queda hasta el domingo y hay que ser silencioso: una visita." },
        { options: ["Schluss", "Anfang", "Pause"], answer: 0, why: "A partir de las 22 la parte ruidosa del día se acaba." },
        { options: ["Behälter", "Zimmer", "Stuhl"], answer: 0, why: "«Die braune im Hof»: habla del contenedor de la basura." },
        { options: ["nett", "streng", "müde"], answer: 0, why: "«Aber sehr korrekt»: amables, aunque muy formales." },
        { options: ["Nachricht", "Rechnung", "Karte"], answer: 0, why: "Ella misma responde por correo: invita a escribir un mensaje." },
      ],
    },
    {
      id: "cz-de-b1-05-3", title: "Mülltrennung für Anfänger", titleEs: "Separar la basura para principiantes", minutes: 3,
      paragraphs: [
        { it: "In Deutschland trennt man den Müll in verschiedene Tonnen. Papier kommt in die blaue Tonne, Verpackungen in die {1}. Bioabfall kommt in die braune, und der ganze Rest kommt in die {2}. Glas wirft man in die großen Container auf der {3}, aber nur tagsüber — nachts ist Ruhezeit.", es: "En Alemania se separa la basura en varios contenedores. El papel va al azul, los envases al amarillo. Los restos orgánicos van al marrón, y todo el resto al negro. El vidrio se echa en los grandes contenedores de la calle, pero solo de día: de noche rige el silencio." },
        { it: "Warum so viel Ordnung? Weil recycelte {4} Geld sparen und die Umwelt schützen. Wer den Müll falsch trennt, riskiert einen Hinweisbrief vom Ordnungsamt — und von den Nachbarn {5} Blicke, denn beim Thema Müll sind viele Deutsche sehr genau.", es: "¿Por qué tanto orden? Porque las materias primas recicladas ahorran dinero y protegen el medio ambiente. Quien separa mal la basura se arriesga a una carta de aviso de la oficina de orden público y a miradas molestas de los vecinos, porque con el tema de la basura muchos alemanes son muy meticulosos." },
      ],
      gaps: [
        { options: ["gelbe", "grüne", "graue"], answer: 0, why: "El sistema alemán: papel azul, envases al contenedor amarillo." },
        { options: ["schwarze", "gelbe", "blaue"], answer: 0, why: "«Der ganze Rest»: lo que no es papel, envase ni orgánico va al negro." },
        { options: ["Straße", "Schule", "Küche"], answer: 0, why: "Los grandes contenedores de vidrio están en la calle, y de noche guardan silencio." },
        { options: ["Rohstoffe", "Getränke", "Spielsachen"], answer: 0, why: "Reciclar ahorra dinero y protege el entorno: materias primas." },
        { options: ["böse", "gute", "müde"], answer: 0, why: "Separar mal la basura provoca miradas de enfado en los vecinos." },
      ],
    },
  ],

  "de-cu-b1-06": [
    {
      id: "cz-de-b1-06-1", title: "Im Treppenhaus", titleEs: "En la escalera", minutes: 3,
      paragraphs: [
        { it: "Am Montagmorgen hält Frau Krause den Studenten im Treppenhaus auf. «Hast du schon {1}? Die Bäckerei an der Ecke soll schließen!» Der Student ist überrascht: «Wirklich? Wissen Sie, ob das {2}?»", es: "El lunes por la mañana, la señora Krause para al estudiante en la escalera. «¿Ya te has enterado? ¡Dicen que la panadería de la esquina va a cerrar!» El estudiante se sorprende: «¿De verdad? ¿Sabe usted si eso es cierto?»" },
        { it: "«Ich weiß nur, dass der Bäcker schon lange müde ist», sagt Frau Krause. «{3} er wirklich aufhört, weiß niemand.» Und was ist mit der Wohnung im dritten Stock? «Eine Familie mit zwei Kindern, {4} man.» Am Ende bittet Frau Krause: «Erzähl es nicht {5} — das ist nur Klatsch und Tratsch.»", es: "«Solo sé que el panadero lleva mucho tiempo cansado», dice la señora Krause. «Si de verdad deja, no lo sabe nadie.» ¿Y qué hay del piso del tercero? «Una familia con dos niños, dicen.» Al final, la señora Krause pide: «No lo difundas: son solo cotilleos.»" },
      ],
      gaps: [
        { options: ["gehört", "gesehen", "getan"], answer: 0, why: "«Hast du schon gehört?» es la apertura clásica del cotilleo: ¿te has enterado?" },
        { options: ["stimmt", "kostet", "regnet"], answer: 0, why: "Pregunta con tacto ante un rumor: ¿es cierto?" },
        { options: ["Ob", "Dass", "Weil"], answer: 0, why: "«Weiß niemand» con verbo al final: la duda abierta se introduce con ob." },
        { options: ["sagt", "fragt", "weiß"], answer: 0, why: "«Eine Familie mit zwei Kindern, sagt man»: así se cuenta un rumor sin firmarlo." },
        { options: ["weiter", "weg", "mit"], answer: 0, why: "«Das ist nur Klatsch»: no lo cuentes más, no lo difundas." },
      ],
    },
    {
      id: "cz-de-b1-06-2", title: "Beim Hausmeister", titleEs: "Con el portero", minutes: 3,
      paragraphs: [
        { it: "Nach dem Gespräch mit Frau Krause beschließt der Student, den Hausmeister zu fragen. «Entschuldigung, Herr Meier, wissen Sie vielleicht, {1} die Geschichte von der Bäckerei stimmt?» Der Hausmeister lächelt: «Ich habe gehört, dass der Bäcker bald in {2} gehen will.»", es: "Tras hablar con la señora Krause, el estudiante decide preguntar al portero. «Disculpe, señor Meier, ¿sabe quizá si la historia de la panadería es cierta?» El portero sonríe: «He oído que el panadero quiere jubilarse pronto.»" },
        { it: "«Und die Familie im dritten Stock? Wissen Sie, {3} sie ankommt?» Der Hausmeister nickt: «Am ersten November. Ich frage mich nur, {4} sie so viele Kartons haben.» Am Ende weiß der Student mehr als Frau Krause — aber er beschließt, den Rest für sich zu {5}.", es: "«¿Y la familia del tercero? ¿Sabe cuándo llegan?» El portero asiente: «El uno de noviembre. Solo me pregunto por qué tienen tantas cajas.» Al final, el estudiante sabe más que la señora Krause, pero decide guardar el resto para sí." },
      ],
      gaps: [
        { options: ["ob", "dass", "weil"], answer: 0, why: "Pregunta de sí/no en indirecta: ob + verbo al final." },
        { options: ["Rente", "Schule", "Ferien"], answer: 0, why: "El panadero está cansado y es mayor: quiere jubilarse (in Rente gehen)." },
        { options: ["wann", "ob", "dass"], answer: 0, why: "La respuesta es una fecha: la pregunta era cuándo llegan." },
        { options: ["warum", "wer", "wo"], answer: 0, why: "Tantas cajas provocan la pregunta del portero: por qué." },
        { options: ["behalten", "bringen", "bezahlen"], answer: 0, why: "Guardar algo para sí: den Rest für sich behalten." },
      ],
    },
    {
      id: "cz-de-b1-06-3", title: "Klatsch mit Grenzen", titleEs: "El cotilleo con fronteras", minutes: 3,
      paragraphs: [
        { it: "In jedem Viertel gibt es Orte, wo man alles erfährt: die Bäckerei, den Friseur, den {1} mit den Müttern und Vätern. Dort tauscht man Neuigkeiten aus, ob sie stimmen oder {2}. Die Deutschen nennen das «Klatsch und Tratsch».", es: "En cada barrio hay sitios donde uno se entera de todo: la panadería, la peluquería, el parque infantil con las madres y los padres. Allí se intercambian noticias, sean ciertas o no. Los alemanes lo llaman «Klatsch und Tratsch»." },
        { it: "Sie finden es schlimm — und machen doch alle {3}. Aber es gibt Grenzen: Nach dem Gehalt oder der Gesundheit von Bekannten zu fragen, gilt als unhöflich, denn der Datenschutz ist den Deutschen wichtig. Wer ein Gerücht weitererzählt, sagt am besten: «Man erzählt {4}» — so bleibt es ein Gerücht und niemand muss für die {5} verantwortlich sein.", es: "Lo critican y aun así todos participan. Pero hay límites: preguntar a un conocido por su sueldo o su salud se considera de mala educación, porque los alemanes dan mucha importancia a la protección de datos. Quien difunde un rumor dice mejor «se cuenta que», así sigue siendo un rumor y nadie tiene que responder por la verdad." },
      ],
      gaps: [
        { options: ["Spielplatz", "Supermarkt", "Bahnhof"], answer: 0, why: "Con madres y padres intercambiando noticias: el parque infantil." },
        { options: ["nicht", "schön", "gratis"], answer: 0, why: "«Ob sie stimmen oder nicht»: ciertas o no." },
        { options: ["mit", "ohne", "nach"], answer: 0, why: "«Machen doch alle mit»: aun criticándolo, todos participan." },
        { options: ["sich", "mich", "dich"], answer: 0, why: "Fórmula fija del rumor sin firma: «man erzählt sich»." },
        { options: ["Wahrheit", "Miete", "Party"], answer: 0, why: "Sin firmar el rumor, nadie responde por la verdad." },
      ],
    },
  ],

  "de-cu-b1-07": [
    {
      id: "cz-de-b1-07-1", title: "Die Stadtführung durch Dresden", titleEs: "La visita guiada por Dresde", minutes: 3,
      paragraphs: [
        { it: "Die Freunde aus Spanien kommen am Freitagnachmittag an. Am Samstag beginnt die Führung mit der Frauenkirche, deren {1} man von überall in der Stadt sieht. Die Kirche, die im Krieg zerstört wurde, ist heute ein Symbol der {2}: Aus alten und neuen Steinen wurde sie wieder aufgebaut.", es: "Los amigos españoles llegan el viernes por la tarde. El sábado la visita empieza con la Frauenkirche, cuya cúpula se ve desde cualquier punto de la ciudad. La iglesia, destruida en la guerra, es hoy un símbolo de reconciliación: con piedras viejas y nuevas se reconstruyó." },
        { it: "Danach besucht die Gruppe den Zwinger, einen Palast, in dem Museen und Konzerte stattfinden. Am Nachmittag spazieren sie an der {3} entlang, wo die alten Raddampfer anlegen. Von der Brücke aus sehen sie die Altstadt, die im Abendlicht golden {4}. Zum Abschluss gibt es eine Eierschecke — ein Kuchen, den man fast nur hier {5}.", es: "Después, el grupo visita el Zwinger, un palacio donde hay museos y conciertos. Por la tarde pasean junto al Elba, donde atracan los viejos barcos de ruedas. Desde el puente ven el casco antiguo, que brilla dorado a la luz del atardecer. Para terminar, prueban un Eierschecke: una tarta que casi solo aquí se consigue." },
      ],
      gaps: [
        { options: ["Kuppel", "Küche", "Kasse"], answer: 0, why: "Parte de la iglesia visible desde toda la ciudad: la cúpula." },
        { options: ["Versöhnung", "Verwirrung", "Verabredung"], answer: 0, why: "Reconstrucción tras la destrucción: la iglesia es símbolo de reconciliación." },
        { options: ["Elbe", "Spree", "Isar"], answer: 0, why: "El río de Dresde, con Raddampfer y paseo ribereño, es el Elba." },
        { options: ["glänzt", "regnet", "schläft"], answer: 0, why: "La ciudad vieja a la luz dorada del atardecer: brilla." },
        { options: ["bekommt", "verliert", "vergisst"], answer: 0, why: "Especialidad local: una tarta que casi solo aquí se consigue." },
      ],
    },
    {
      id: "cz-de-b1-07-2", title: "Ein Reiseblog aus Sachsen", titleEs: "Un blog de viaje por Sajonia", minutes: 3,
      paragraphs: [
        { it: "Gestern habe ich Dresden besucht, eine Stadt, die viele «Elbflorenz» nennen. Mein Highlight war die Frauenkirche: Man darf bis ganz nach oben steigen, und die {1} ist atemberaubend. Der Eintritt ist {2} — man darf nur spenden.", es: "Ayer visité Dresde, una ciudad a la que muchos llaman «la Florencia del Elba». Lo mejor fue la Frauenkirche: se puede subir hasta arriba del todo y la vista quita el aliento. La entrada es gratuita: solo se puede dejar un donativo." },
        { it: "Am Abend saß ich auf einer {3} über dem Fluss, von der man den Sonnenuntergang sieht. Auf dem Wasser fuhren alte Dampfer, die noch mit großen {4} fahren. Im Café probierte ich eine Eierschecke — ein echter {5}, den man unbedingt ausprobieren muss, bevor man wieder abreist.", es: "Por la tarde me senté en una terraza sobre el río, desde la que se ve la puesta de sol. Por el agua iban viejos barcos de vapor que aún navegan con grandes ruedas. En el café probé un Eierschecke: todo un consejo secreto que hay que probar antes de seguir viaje." },
      ],
      gaps: [
        { options: ["Aussicht", "Rechnung", "Küche"], answer: 0, why: "Subir hasta arriba del todo: la vista quita el aliento." },
        { options: ["frei", "teuer", "geschlossen"], answer: 0, why: "«Man darf nur spenden»: la entrada es gratuita." },
        { options: ["Terrasse", "Treppe", "Theater"], answer: 0, why: "Sobre el río y con puesta de sol: una terraza." },
        { options: ["Rädern", "Segeln", "Motoren"], answer: 0, why: "Son Raddampfer: barcos que avanzan con grandes ruedas." },
        { options: ["Geheimtipp", "Irrtum", "Unfall"], answer: 0, why: "Especialidad que solo se consigue allí: un consejo secreto." },
      ],
    },
    {
      id: "cz-de-b1-07-3", title: "Der Prospekt für Touristen", titleEs: "El folleto para turistas", minutes: 3,
      paragraphs: [
        { it: "Dresden: Kommen Sie in eine Stadt, deren {1} Sie überall spüren werden! Besuchen Sie den Zwinger, den berühmten Barockpalast, dessen {2} im Sommer tausende Besucher bewundern. Und bleiben Sie bis zum Abend: Wenn die Altstadt golden leuchtet, verstehen Sie, warum man Dresden «Elbflorenz» nennt.", es: "Dresde: venga a una ciudad cuya historia notará en todas partes. Visite el Zwinger, el famoso palacio barroco, cuyos jardines admiran miles de visitantes en verano. Y quédese hasta el anochecer: cuando el casco antiguo brilla en oro, entenderá por qué a Dresde la llaman «la Florencia del Elba»." },
        { it: "Bummeln Sie an der Elbe, an der Stelle, {3} die alten Raddampfer anlegen. Bestellen Sie eine Eierschecke: Das Rezept ist ein {4} der Dresdner Konditoren. Und wenn Sie abends über die Brücke gehen, werden Sie verstehen, warum die Bewohner so {5} auf ihre Stadt sind.", es: "Pasee junto al Elba, por el sitio donde atracan los viejos barcos de ruedas. Pida un Eierschecke: la receta es un secreto de los pasteleros de Dresde. Y si al atardecer cruza el puente, entenderá por qué sus habitantes están tan orgullosos de su ciudad." },
      ],
      gaps: [
        { options: ["Geschichte", "Miete", "Wetter"], answer: 0, why: "Ciudad barroca reconstruida: su historia se nota en todas partes." },
        { options: ["Gärten", "Rechnungen", "Keller"], answer: 0, why: "Del palacio barroco se admiran en verano sus jardines." },
        { options: ["wo", "wann", "warum"], answer: 0, why: "Para lugares, el relativo wo: el sitio donde atracan los barcos." },
        { options: ["Geheimnis", "Problem", "Witz"], answer: 0, why: "Receta típica que solo aquí se encuentra: un secreto de los pasteleros." },
        { options: ["stolz", "müde", "wütend"], answer: 0, why: "Ciudad dorada y reconstruida: sus habitantes están orgullosos de ella." },
      ],
    },
  ],

  "de-cu-b1-08": [
    {
      id: "cz-de-b1-08-1", title: "Das Eco-Debatt", titleEs: "El debate ecológico", minutes: 3,
      paragraphs: [
        { it: "In der Volkshochschule diskutiert der Kurs, wie man ökologischer leben kann. Marie ist begeistert: «Weil wir Windkraft und Solarenergie nutzen, produzieren wir {1} Strom.» Jonas sieht das kritischer: «Die Windräder verändern die {2}, und das nervt viele Anwohner.»", es: "En la escuela popular, el curso debate cómo vivir de forma más ecológica. Marie está entusiasmada: «Como usamos energía eólica y solar, producimos electricidad limpia.» Jonas lo ve más crítico: «Los aerogeneradores cambian el paisaje, y eso molesta a muchos vecinos.»" },
        { it: "«Verstehe», sagt der Student, «aber deshalb sollten wir die Erneuerbaren nicht {3}. Deshalb müssen wir besser {4}.» Am Ende sind sich alle einig: Man braucht einen {5} aus erneuerbaren Energien und sparsamem Verbrauch.", es: "«Entiendo», dice el estudiante, «pero por eso no deberíamos frenar las renovables; por eso debemos planificar mejor.» Al final todos están de acuerdo: hace falta una combinación de energías renovables y consumo ahorrador." },
      ],
      gaps: [
        { options: ["sauberen", "teuren", "lauten"], answer: 0, why: "Eólica y solar frente al carbón: electricidad limpia." },
        { options: ["Landschaft", "Sprache", "Währung"], answer: 0, why: "Aerogeneradores enormes que molestan al vecino: cambian el paisaje." },
        { options: ["stoppen", "loben", "bezahlen"], answer: 0, why: "Crítica, pero «nicht»: no hay que frenar las renovables." },
        { options: ["planen", "schlafen", "reisen"], answer: 0, why: "La conclusión positiva: planificar mejor la ubicación y la red." },
        { options: ["Mix", "Preis", "Witz"], answer: 0, why: "Renovables más consumo ahorrador: una combinación, un mix." },
      ],
    },
    {
      id: "cz-de-b1-08-2", title: "Das Pfand-System", titleEs: "El sistema de depósito", minutes: 3,
      paragraphs: [
        { it: "In Deutschland gibt es seit Jahren ein Pfandsystem: Wer eine Plastikflasche kauft, zahlt automatisch 25 Cent {1} extra. Die Flasche bringt man später zum Supermarkt zurück, und das Geld gibt es {2} — ganz einfach an der Maschine.", es: "En Alemania existe desde hace años un sistema de depósito: quien compra una botella de plástico paga automáticamente 25 céntimos de depósito extra. La botella se devuelve luego al supermercado y el dinero se recupera: muy fácil, en la máquina." },
        { it: "Weil es das Pfand gibt, nimmt fast {3} seine Flasche zurück. Deshalb liegt weniger Müll auf der {4}. Das System funktioniert so gut, dass mehrere europäische Länder es jetzt {5} wollen.", es: "Como existe el depósito, casi todo el mundo devuelve su botella. Por eso hay menos basura en la calle. El sistema funciona tan bien que varios países europeos quieren ahora copiarlo." },
      ],
      gaps: [
        { options: ["Pfand", "Zins", "Trinkgeld"], answer: 0, why: "25 centavos extra que se recuperan al devolver la botella: el depósito." },
        { options: ["zurück", "weg", "dazu"], answer: 0, why: "Devuelves la botella y el dinero te lo dan de vuelta." },
        { options: ["jeder", "niemand", "keiner"], answer: 0, why: "Por eso hay menos basura: casi todo el mundo devuelve su botella." },
        { options: ["Straße", "Tafel", "Speisekarte"], answer: 0, why: "Menos basura tirada: menos residuos en la calle." },
        { options: ["kopieren", "verbieten", "vergessen"], answer: 0, why: "Funciona tan bien que otros países quieren copiarlo." },
      ],
    },
    {
      id: "cz-de-b1-08-3", title: "Familie Grün spart Strom", titleEs: "La familia Grün ahorra luz", minutes: 3,
      paragraphs: [
        { it: "Familie Grün aus Freiburg möchte ihre Stromrechnung senken. «Weil die Preise steigen, {1} wir überall», sagt Frau Grün. Die Kinder duschen jetzt kürzer, und der Vater lässt das {2} öfter stehen und fährt mit dem Fahrrad zur Arbeit.", es: "La familia Grün de Friburgo quiere bajar su factura de la luz. «Como los precios suben, ahorramos en todo», dice la señora Grün. Los hijos se duchan más rápido, y el padre deja más veces el coche aparcado y va en bici al trabajo." },
        { it: "Deshalb wird die Rechnung jeden Monat ein bisschen {3}. «Außerdem hilft es, Geräte ganz auszuschalten», sagt die Tochter. Sie hat gelesen, dass Geräte im Standby viel Strom {4}. Am Ende des Jahres feiert die Familie kein großes Fest — aber sie hat 200 Euro {5}.", es: "Por eso la factura baja cada mes un poco. «Además ayuda apagar los aparatos del todo», dice la hija. Ha leído que los aparatos en modo de espera consumen mucha electricidad. Al final del año, la familia no celebra ninguna fiesta grande, pero ha ahorrado 200 euros." },
      ],
      gaps: [
        { options: ["sparen", "ausgeben", "verdienen"], answer: 0, why: "Suben los precios y quieren bajar la factura: ahorran." },
        { options: ["Auto", "Fahrrad", "Fenster"], answer: 0, why: "Deja aparcado algo para ir en bici al trabajo: el coche." },
        { options: ["kleiner", "größer", "bunter"], answer: 0, why: "Con todos los ahorros, la factura se hace cada vez más pequeña." },
        { options: ["verbrauchen", "produzieren", "verschenken"], answer: 0, why: "El modo de espera gasta electricidad: consume corriente." },
        { options: ["gespart", "gewettet", "gewartet"], answer: 0, why: "Resultado del año de ahorro: 200 euros ahorrados." },
      ],
    },
  ],

  "de-cu-b1-09": [
    {
      id: "cz-de-b1-09-1", title: "Das Vorstellungsgespräch", titleEs: "La entrevista de trabajo", minutes: 3,
      paragraphs: [
        { it: "Um 10 Uhr klingelt Alejandro bei der Hamburger Firma. Frau Hoffmann empfängt ihn: «Schön, dass Sie {1} sind. Setzen Sie sich doch.» Dann stellt sie die erste Frage: «Erzählen Sie kurz von {2}.»", es: "A las 10 en punto, Alejandro toca el timbre de la empresa hamburguesa. La señora Hoffmann lo recibe: «Me alegra que sea puntual. Siéntese, por favor.» Después lanza la primera pregunta: «Hábleme brevemente de usted.»" },
        { it: "Alejandro erzählt von seinem {3}: Nach dem Studium arbeitete er zwei Jahre in Madrid, dann zog er nach Hamburg. «Ich interessiere mich für lateinamerikanische {4}», erklärt er, «und Ihre Firma arbeitet genau dort.» Am Ende stellt er selbst eine Frage — denn wer keine Frage hat, wirkt nicht {5}.", es: "Alejandro cuenta su trayectoria: tras la universidad trabajó dos años en Madrid y luego se mudó a Hamburgo. «Me intereso por los mercados latinoamericanos», explica, «y su empresa trabaja justamente allí.» Al final, él mismo hace una pregunta, porque quien no pregunta no parece interesado." },
      ],
      gaps: [
        { options: ["pünktlich", "spät", "krank"], answer: 0, why: "Llegar a la hora exacta es lo esperado en una entrevista alemana." },
        { options: ["sich", "mir", "dir"], answer: 0, why: "Frase fija de la entrevista: «Erzählen Sie kurz von sich»." },
        { options: ["Werdegang", "Wochenende", "Wortschatz"], answer: 0, why: "Estudios, Madrid y Hamburgo: eso es la trayectoria profesional." },
        { options: ["Märkte", "Museen", "Märchen"], answer: 0, why: "Comercio internacional y Latinoamérica: los mercados." },
        { options: ["interessiert", "müde", "nervös"], answer: 0, why: "Quien no pregunta no muestra interés por el puesto." },
      ],
    },
    {
      id: "cz-de-b1-09-2", title: "Die Bewerbung", titleEs: "La candidatura", minutes: 3,
      paragraphs: [
        { it: "Alejandro hatte die Stellenanzeige im Internet gefunden und sich noch am selben Tag {1} das Praktikum beworben. Er aktualisierte seinen Lebenslauf und schrieb ein {2}, in dem er erklärte, warum er zu der Firma passt.", es: "Alejandro había encontrado el anuncio en internet y ese mismo día se presentó a las prácticas. Actualizó su currículum y escribió una carta de presentación en la que explicaba por qué encajaba en la empresa." },
        { it: "Vor dem Gespräch hatte er sich gut {3}: Er las die Website der Firma und übte die wichtigsten Antworten. «Ich freue mich {4}, mit dem Team zu arbeiten», sagte er im Gespräch. Nach drei Tagen bekam er die {5}: Er hat das Praktikum!", es: "Antes de la entrevista se había preparado bien: leyó la web de la empresa y ensayó las respuestas clave. «Me ilusiona trabajar con el equipo», dijo en la entrevista. A los tres días recibió la aceptación: ¡tiene las prácticas!" },
      ],
      gaps: [
        { options: ["für", "um", "auf"], answer: 1, why: "La preposición fija de sich bewerben es um: presentarse a." },
        { options: ["Anschreiben", "Fotoalbum", "Gedicht"], answer: 0, why: "Documento que acompaña al CV y explica el encaje: la carta de presentación." },
        { options: ["vorbereitet", "verlaufen", "verkleidet"], answer: 0, why: "Leer la web y ensayar respuestas: se preparó bien." },
        { options: ["darauf", "darüber", "daran"], answer: 0, why: "sich freuen auf + futuro: ich freue mich darauf, zu arbeiten." },
        { options: ["Zusage", "Absage", "Rechnung"], answer: 0, why: "¡Tiene las prácticas! La respuesta positiva es la aceptación." },
      ],
    },
    {
      id: "cz-de-b1-09-3", title: "Tipps fürs Vorstellungsgespräch", titleEs: "Consejos para la entrevista", minutes: 3,
      paragraphs: [
        { it: "In Deutschland beginnt ein Vorstellungsgespräch oft mit dem Satz: «Erzählen Sie kurz von sich.» Deshalb sollte man eine kurze {1} vorbereiten. Bringen Sie außerdem Ihren Lebenslauf mit — und wenn möglich {2} von früheren Arbeitgebern und Schulen.", es: "En Alemania, una entrevista suele empezar con la frase: «Hábleme brevemente de usted.» Por eso conviene preparar una breve autopresentación. Lleve además su currículum y, si es posible, referencias de anteriores jefes y centros de estudio." },
        { it: "Pünktlichkeit ist extrem wichtig: Kommen Sie fünf Minuten {3} an. Achten Sie auf einen festen {4} und Blickkontakt — der erste Eindruck zählt. Und am Ende dürfen Sie selbst Fragen {5}: Das zeigt Interesse an der Firma und macht einen guten Eindruck.", es: "La puntualidad es importantísima: llegue cinco minutos antes. Cuide un apretón firme y el contacto visual: la primera impresión cuenta. Y al final, usted también puede hacer preguntas: eso demuestra interés por la empresa y causa buena impresión." },
      ],
      gaps: [
        { options: ["Selbstvorstellung", "Entschuldigung", "Unterschrift"], answer: 0, why: "Responder a «hable de usted» exige una autopresentación preparada." },
        { options: ["Zeugnisse", "Souvenirs", "Spielzeuge"], answer: 0, why: "Documentos de jefes y escuelas que avalan el currículum: las referencias." },
        { options: ["früher", "später", "langsamer"], answer: 0, why: "La puntualidad extrema alemana: llegar cinco minutos antes." },
        { options: ["Händedruck", "Stuhl", "Tisch"], answer: 0, why: "Con Blickkontakt: el gesto firme de saludo es el apretón de manos." },
        { options: ["stellen", "kochen", "bauen"], answer: 0, why: "Fragen stellen: hacer preguntas es la colocación fija." },
      ],
    },
  ],

  "de-cu-b1-10": [
    {
      id: "cz-de-b1-10-1", title: "Der Rundgang durch die Redaktion", titleEs: "La visita a la redacción", minutes: 3,
      paragraphs: [
        { it: "Der Redakteur Martin führt die Besuchergruppe durch das Studio. «Hier {1} die Nachrichten des Tages vorbereitet», erklärt er. Jeden Morgen treffen sich die Redakteure zur {2}: Dort wird besprochen, welche Themen wichtig sind.", es: "El redactor Martin guía al grupo de visitantes por el estudio. «Aquí se preparan las noticias del día», explica. Cada mañana los redactores se reúnen en la conferencia: allí se comenta qué temas son importantes." },
        { it: "Danach werden die Reporter zugeteilt, und am Nachmittag wird gedreht. «Der Text wird vor der Sendung von drei Personen {3}», sagt Sarah, die Sprecherin. «Kein Fehler darf ins Bild, denn die Zuschauer vertrauen uns.» Um Punkt 20 Uhr wird die Hauptausgabe {4} — und zwar {5}, nicht aufgezeichnet.", es: "Después se asignan los reporteros y por la tarde se graba. «El texto se revisa antes de la emisión por tres personas», dice Sarah, la presentadora. «Ningún error puede salir en pantalla, porque los espectadores confían en nosotros.» A las 20 en punto se emite la edición principal, y además en directo, no grabada." },
      ],
      gaps: [
        { options: ["werden", "wurden", "werdet"], answer: 0, why: "Frase de proceso en presente: la pasiva con werden + participio." },
        { options: ["Konferenz", "Kantine", "Pause"], answer: 0, why: "Reunión de cada mañana para elegir temas: la conferencia de redacción." },
        { options: ["geprüft", "gelöscht", "geleert"], answer: 0, why: "Tres personas controlan el texto antes de emitirlo: lo revisan." },
        { options: ["gesendet", "geschenkt", "gesucht"], answer: 0, why: "La edición principal de las 20 se emite." },
        { options: ["live", "leise", "spät"], answer: 0, why: "Contraste con «nicht aufgezeichnet»: se emite en directo." },
      ],
    },
    {
      id: "cz-de-b1-10-2", title: "Die Nachrichten von heute Abend", titleEs: "Las noticias de esta noche", minutes: 3,
      paragraphs: [
        { it: "Guten Abend, meine Damen und Herren. Heute Mittag wurde ein neuer Fahrradweg in der Innenstadt {1}. Der Bau wurde von der Stadt {2}, und der Weg ist ab sofort für alle offen. Bei der Eröffnung sprach die Bürgermeisterin von einem Geschenk für die Zukunft.", es: "Buenas noches, señoras y señores. Hoy al mediodía se inauguró una nueva ciclovía en el centro. La construcción fue pagada por la ciudad, y la vía está desde ya abierta para todos. En la inauguración, la alcaldesa habló de un regalo para el futuro." },
        { it: "Am Nachmittag wurde ein Bericht über den alten Hafen {3}. Dabei wurde ein Kran entdeckt, der aus dem Jahr 1902 {4}. Und zum Schluss die Vorschau: Morgen wird das große Volksfest auf dem Rathausplatz {5} — bei jedem Wetter.", es: "Por la tarde se grabó un reportaje sobre el puerto viejo. En él se descubrió una grúa que data del año 1902. Y para terminar, la agenda: mañana se celebrará la gran fiesta popular en la plaza del ayuntamiento, con cualquier tiempo." },
      ],
      gaps: [
        { options: ["eröffnet", "geschlossen", "geöffnet"], answer: 0, why: "Algo nuevo se pone en marcha: la ciclovía se inauguró." },
        { options: ["bezahlt", "besucht", "geputzt"], answer: 0, why: "La ciudad costeó la construcción: fue pagada por el ayuntamiento." },
        { options: ["gedreht", "gegessen", "gefahren"], answer: 0, why: "Un reportaje se graba: wurde gedreht." },
        { options: ["stammt", "steht", "startet"], answer: 0, why: "La grúa es del año 1902: data de entonces." },
        { options: ["gefeiert", "verboten", "verlegt"], answer: 0, why: "La gran fiesta popular de mañana se celebrará en la plaza." },
      ],
    },
    {
      id: "cz-de-b1-10-3", title: "Die Tagesschau", titleEs: "El Tagesschau", minutes: 3,
      paragraphs: [
        { it: "Die Tagesschau ist die älteste Nachrichtensendung im deutschen Fernsehen. Sie wird seit den 1950er-Jahren {1}, und die Hauptausgabe läuft um 20 Uhr. Für Millionen Menschen ist dieser Termin ein kleines {2}: Sessel, Fernseher, Nachrichten.", es: "El Tagesschau es el informativo más antiguo de la televisión alemana. Se emite desde los años cincuenta, y la edición principal va a las 20. Para millones de personas esta cita es un pequeño ritual: sillón, televisor, noticias." },
        { it: "Betreut wird die Sendung vom öffentlich-rechtlichen {3}, den alle Haushalte mit einem Beitrag finanzieren. Der Stil ist trocken: ein Sprecher, ein {4}, keine Emotionen. Heute wird die Tagesschau auch auf dem {5} geschaut — in kurzer Form und rund um die Uhr.", es: "El programa corre a cargo de la radiotelevisión pública, que todos los hogares financian con una contribución. El estilo es seco: un presentador, una mesa, cero emociones. Hoy el Tagesschau se ve también en el móvil, en formato corto y a todas horas." },
      ],
      gaps: [
        { options: ["gesendet", "geschenkt", "gestört"], answer: 0, why: "Un programa de televisión se emite: wird gesendet." },
        { options: ["Ritual", "Risiko", "Rezept"], answer: 0, why: "Mismo sillón y misma hora cada día: una cita que es un ritual." },
        { options: ["Rundfunk", "Rechen", "Reichtum"], answer: 0, why: "La televisión pública alemana es el Rundfunk, financiada por los hogares." },
        { options: ["Schreibtisch", "Schlafzimmer", "Sofa"], answer: 0, why: "El formato legendario: un presentador y una mesa, nada más." },
        { options: ["Handy", "Dach", "Herde"], answer: 0, why: "Formato corto y a todas horas: hoy se ve en el móvil." },
      ],
    },
  ],

  "de-cu-b1-11": [
    {
      id: "cz-de-b1-11-1", title: "Die Feedbackrunde", titleEs: "La ronda de feedback", minutes: 3,
      paragraphs: [
        { it: "Am letzten Kurstag setzt sich der Kurs im Kreis. «Wie war der Kurs für euch?», fragt Frau Berger. Lena beginnt: «Grundsätzlich war er gut, aber ich {1} gern mehr Sprechzeit. Beim {2} lerne ich am meisten.»", es: "El último día de clase, el curso se sienta en círculo. «¿Qué os ha parecido el curso?», pregunta la señora Berger. Lena empieza: «En general estuvo bien, pero querría más tiempo de habla. Hablando es como más aprendo.»" },
        { it: "Jonas findet: «Wir {3} mehr Grammatik wiederholen. Ohne Grammatik könnte ich die Sätze nicht bauen.» Der Student sagt: «Ich wünschte, der Kurs {4} ein bisschen kleiner.» Am Ende verspricht Frau Berger: «Ich könnte donnerstags eine {5} anbieten.» Alle sind zufrieden — so macht Feedback Spaß.", es: "Jonas opina: «Deberíamos repasar más gramática. Sin gramática no podría construir las frases.» El estudiante dice: «Ojalá el curso fuera un poco más pequeño.» Al final, la señora Berger promete: «Podría ofrecer una hora de conversación los jueves.» Todos quedan contentos: así da gusto dar feedback." },
      ],
      gaps: [
        { options: ["hätte", "habe", "war"], answer: 0, why: "Deseo cortés de cambio: «ich hätte gern» más tiempo de habla." },
        { options: ["Reden", "Schreiben", "Sitzen"], answer: 0, why: "Pide Sprechzeit: hablando es como más aprende." },
        { options: ["sollten", "mussten", "wollten"], answer: 0, why: "Propuesta de mejora del curso: deberíamos repasar." },
        { options: ["wäre", "ist", "war"], answer: 0, why: "Tras «ich wünschte», el deseo irreal va en Konjunktiv II: wäre." },
        { options: ["Sprechstunde", "Prüfungsangst", "Reiseplanung"], answer: 0, why: "Ofrece más tiempo para hablar: una hora de conversación." },
      ],
    },
    {
      id: "cz-de-b1-11-2", title: "Der Feedbackbogen", titleEs: "El cuestionario de feedback", minutes: 2,
      paragraphs: [
        { it: "Liebe Kursleitung, der Kurs hat mir sehr gut {1}. Besonders die Dialoge fand ich {2}, weil sie wie echte Gespräche klangen. Aber ich hätte einen {3}: Mehr Zeit für freie Gespräche, bitte!", es: "Querida dirección del curso: el curso me ha gustado mucho. Los diálogos me parecieron especialmente realistas, porque sonaban como conversaciones de verdad. Pero tengo un deseo: ¡más tiempo para conversaciones libres!" },
        { it: "Ich wünschte, wir hätten mehr {4} für kleine Gruppen. Man könnte jede Woche eine reale Situation {5}, zum Beispiel ein Vorstellungsgespräch oder ein Telefonat mit dem Amt. Vielen Dank für den schönen Kurs!", es: "Ojalá tuviéramos más tiempo para grupos pequeños. Se podría practicar cada semana una situación real, por ejemplo una entrevista o una llamada a una oficina pública. ¡Muchas gracias por este curso tan bonito!" },
      ],
      gaps: [
        { options: ["gefallen", "gekauft", "geholfen"], answer: 0, why: "«Der Kurs hat mir gut gefallen»: el verbo de gustar (gefallen)." },
        { options: ["realistisch", "langweilig", "leise"], answer: 0, why: "«Wie echte Gespräche»: sonaban reales, realistas." },
        { options: ["Wunsch", "Fehler", "Termin"], answer: 0, why: "Pide un cambio con cortesía: tiene un deseo." },
        { options: ["Zeit", "Prüfungen", "Hausaufgaben"], answer: 0, why: "Grupos pequeños y conversación: falta tiempo para eso." },
        { options: ["üben", "prüfen", "löschen"], answer: 0, why: "Entrevistas y llamadas simuladas: practicar situaciones reales." },
      ],
    },
    {
      id: "cz-de-b1-11-3", title: "Feedback in deutschen Firmen", titleEs: "El feedback en las empresas alemanas", minutes: 3,
      paragraphs: [
        { it: "In deutschen Firmen gibt es feste Feedback-Rituale: das Jahresgespräch, die Teamrunde, die Mitarbeiter-{1}. Wer Kritik äußert, zeigt {2} — nicht Schwäche. Wer nur lobt, wirkt schnell oberflächlich.", es: "En las empresas alemanas hay rituales fijos de feedback: la entrevista anual, la ronda de equipo, la encuesta a los empleados. Quien expresa crítica demuestra interés, no debilidad. Quien solo elogia parece pronto superficial." },
        { it: "Gute Kritik folgt Regeln: Sie ist konkret, ehrlich und {3}. Am Ende steht fast immer ein «Wir {4}» — denn ohne Vorschlag ist Kritik nur Gemecker. Und nach der Runde bleibt die {5} gut: Es geht um die Sache, nicht um die Person.", es: "La buena crítica sigue reglas: es concreta, sincera y respetuosa. Al final casi siempre hay un «deberíamos», porque sin propuesta la crítica es solo queja. Y tras la ronda, el ambiente sigue bueno: se trata del asunto, no de la persona." },
      ],
      gaps: [
        { options: ["Umfrage", "Urlaubsreise", "Kaffee"], answer: 0, why: "Instrumento fijo junto al Jahresgespräch: la encuesta a los empleados." },
        { options: ["Interesse", "Angst", "Müdigkeit"], answer: 0, why: "Crítica = interés, no debilidad: lo contrario de quedar superficial." },
        { options: ["respektvoll", "laut", "teuer"], answer: 0, why: "Concreta y sincera: la tercera regla es que sea respetuosa." },
        { options: ["sollten", "mussten", "wollten"], answer: 0, why: "La crítica se cierra con propuesta: «wir sollten»." },
        { options: ["Atmosphäre", "Rechnung", "Wetter"], answer: 0, why: "Tras la ronda la relación no sufre: el ambiente sigue bueno." },
      ],
    },
  ],

  "de-cu-b1-12": [
    {
      id: "cz-de-b1-12-1", title: "Die Podiumsdiskussion", titleEs: "El debate público", minutes: 3,
      paragraphs: [
        { it: "Donnerstagabend im Saal der Volkshochschule: Die Podiumsdiskussion beginnt. Die {1} heißt Sarah und erklärt zuerst die Regeln: Jeder Redner hat drei Minuten, das Publikum hört {2}. Das Thema lautet: Sollen Handys in der Schule verboten {3}?", es: "Jueves por la noche en el salón de la Volkshochschule: comienza el debate público. La moderadora se llama Sarah y explica primero las reglas: cada orador tiene tres minutos y el público escucha. El tema: ¿deberían prohibirse los móviles en la escuela?" },
        { it: "Jonas eröffnet: «Ich bin {4} ein Totalverbot, und zwar aus zwei Gründen.» Der Student antwortet: «Ich respektiere deine Meinung, aber ich sehe das anders.» Nach einer Stunde nähern sich die Redner an — ein {5} ist gefunden: Handys in der Pause erlaubt, im Unterricht verboten.", es: "Jonas abre: «Estoy en contra de una prohibición total, y por dos razones.» El estudiante responde: «Respeto tu opinión, pero lo veo distinto.» Tras una hora, los oradores se acercan y se encuentra un compromiso: móviles permitidos en el recreo, prohibidos en clase." },
      ],
      gaps: [
        { options: ["Moderatorin", "Bäckerin", "Musikerin"], answer: 0, why: "Dirige el programa y explica las reglas del debate: la moderadora." },
        { options: ["zu", "weg", "mit"], answer: 0, why: "El público tiene su papel: escucha (hört zu)." },
        { options: ["werden", "sein", "haben"], answer: 0, why: "Prohibición en pasiva infinitiva: verboten werden." },
        { options: ["gegen", "für", "ohne"], answer: 0, why: "«Ein Totalverbot ist zu einfach gedacht»: Jonas está en contra." },
        { options: ["Kompromiss", "Wettbewerb", "Skandal"], answer: 0, why: "Permitidos en el recreo y prohibidos en clase: una solución intermedia." },
      ],
    },
    {
      id: "cz-de-b1-12-2", title: "Der Bericht in der Zeitung", titleEs: "La crónica en el periódico", minutes: 3,
      paragraphs: [
        { it: "In der Lokalzeitung stand am Freitag ein Bericht über die Podiumsdiskussion. «Über hundert Besucher kamen in den Saal. Die {1} führte streng durch das Programm: Redezeit, Fragerunde, Schlusswort. Einerseits wurden klare Argumente {2}, andererseits blieb der Ton freundlich.»", es: "El viernes, el periódico local publicó una crónica del debate público. «Más de cien visitantes llenaron el salón. La moderación guio el programa con rigor: tiempo de palabra, ronda de preguntas, turno de cierre. Por un lado se intercambiaron argumentos claros; por otro, el tono siguió amable.»" },
        { it: "Außerdem gab es eine {3}, in der das Publikum mitreden durfte. Folglich einigten sich die Redner am Ende auf einen Kompromiss — und es gab {4} für alle Panelisten. Der Artikel schloss mit dem Satz: «So macht Diskussion {5}.»", es: "Además hubo una ronda en la que el público pudo participar. En consecuencia, los oradores se pusieron de acuerdo al final en un compromiso, y hubo aplausos para todos los panelistas. El artículo cerraba con la frase: «Así da gusto discutir.»" },
      ],
      gaps: [
        { options: ["Moderation", "Musik", "Küche"], answer: 0, why: "Guía el programa con Redezeit y Schlusswort: la moderación." },
        { options: ["ausgetauscht", "verloren", "geschluckt"], answer: 0, why: "Argumentos claros de ambas partes: se intercambiaron." },
        { options: ["Fragerunde", "Essenspause", "Probefahrt"], answer: 0, why: "«Das Publikum durfte mitreden»: la ronda de preguntas." },
        { options: ["Applaus", "Regen", "Lärm"], answer: 0, why: "Cierre típico de un debate alemán: aplausos para todos los panelistas." },
        { options: ["Spaß", "Angst", "Ärger"], answer: 0, why: "Crónica positiva al cierre: así da gusto (divierte) discutir." },
      ],
    },
    {
      id: "cz-de-b1-12-3", title: "Die Erörterung", titleEs: "La argumentación escolar", minutes: 3,
      paragraphs: [
        { it: "Schon in der Schule lernen deutsche Schüler, strukturiert zu argumentieren. Die passende Textform heißt {1}: Erstens sammelt man die Argumente pro, {2} die Contra-Argumente. Dann wägt man ab und nennt seine eigene {3}.", es: "Ya en la escuela, los alumnos alemanes aprenden a argumentar con estructura. La forma de texto apropiada se llama Erörterung: primero se reúnen los argumentos a favor; segundo, los argumentos en contra. Después se sopesa y se da la propia opinión." },
        { it: "Einerseits muss man die Gegenseite {4} nehmen, andererseits darf man klar Stellung beziehen. Zum Schluss folgt ein Fazit mit den wichtigsten {5}. Wer diese Form beherrscht, darf später in jede Podiumsdiskussion — die Struktur ist überall gleich.", es: "Por un lado hay que tomarse en serio la otra parte; por otro, se puede tomar postura con claridad. Al final llega una conclusión con los puntos más importantes. Quien domina esta forma puede luego entrar en cualquier debate público: la estructura es siempre la misma." },
      ],
      gaps: [
        { options: ["Erörterung", "Diktat", "Gedicht"], answer: 0, why: "Texto escolar con pros, contras y opinión propia: la argumentación." },
        { options: ["zweitens", "erstens", "schließlich"], answer: 0, why: "Tras erstens llega el segundo paso de la numeración." },
        { options: ["Meinung", "Prüfung", "Unterschrift"], answer: 0, why: "Se sopesan ambas partes y se da la opinión propia." },
        { options: ["ernst", "laut", "schnell"], answer: 0, why: "Tomarse la otra postura en serio: ernst nehmen." },
        { options: ["Punkten", "Preisen", "Pausen"], answer: 0, why: "El Fazit recoge los puntos más importantes del argumento." },
      ],
    },
  ],
};
