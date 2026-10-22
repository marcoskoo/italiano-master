import type { CbGrammarDeep } from "../../extra/grammar-deep";

/* ═══ DE B1 · Grammar deep — 12 unidades (Hochdeutsch de Alemania) ═══
   Explicación amplia de la gramática de cada unidad, con las trampas
   específicas del hispanohablante. Campos `.it` = alemán de Alemania,
   `.es` = español (tuteo). Secciones: So funktioniert es / Wann man es
   benutzt / Achtung (für Spanischsprachige) / Im echten Gespräch.     */

export const DE_DEEP_B1: Record<string, CbGrammarDeep> = {
  "de-cu-b1-01": {
    sezioni: [
      { t: "So funktioniert es", body: "dass (que), weil (porque) y obwohl (aunque) introducen oraciones subordinadas: el verbo conjugado se marcha SIEMPRE al final. «Ich denke, dass Handys stören» · «Ich bleibe zu Hause, weil ich krank bin» · «Obwohl es regnet, gehen wir spazieren». Si la subordinada va delante, la principal empieza directamente con el verbo: «Obwohl er müde ist, lernt er weiter» (aunque está cansado, sigue estudiando). El español no cambia el orden («creo que molestan»), así que el instinto te traiciona: piensa primero cómo TERMINA la frase." },
      { t: "Wann man es benutzt", body: "dass va tras los verbos de opinión (denken, finden, glauben, hoffen) y tras «ich bin der Meinung / ich bin dafür»: «Ich finde, dass Handys nützlich sind». weil responde a warum? y da la causa: «Ich bleibe zu Hause, weil ich krank bin». aunque introduce una objeción: «Obwohl fast alle ein Handy haben, benutzt es nicht jeder». Si la causa va con orden normal de frase, el coordinante equivalente es denn: «Ich bleibe zu Hause, denn ich bin krank» — misma coma, otra arquitectura." },
      { t: "Achtung (für Spanischsprachige)", body: "1) El verbo jamás queda en posición 2 dentro de la subordinada: «weil ich Kaffee liebe», nunca «weil ich liebe Kaffee». 2) La coma ante dass, weil y obwohl es OBLIGATORIA, al revés que ante «porque» en español: «Ich denke, dass das stimmt». 3) Si empiezas con obwohl, la principal arranca con el verbo: «Obwohl es regnet, gehen wir spazieren», jamás «wir gehen». Y ojo: obwohl no es trotzdem (sin embargo): obwohl introduce la subordinada, trotzdem es un conector de frase principal." },
      { t: "Im echten Gespräch", body: "En una discusión alemana se espera que fundamentes: «Meiner Meinung nach ist das Problem die Disziplin, weil man ohne Regel nicht arbeiten kann». Para discrepar con respeto: «Da sehe ich das anders, weil» y «Das ist ein guter Punkt, aber». La Streitkultur separa la Sache de la Person: ataca el argumento, nunca a la persona, y cierra con una propuesta: «Ich schlage vor, dass wir eine Regel schreiben»." },
    ],
    esempi: [
      { it: "Ich glaube, dass die Regel gut funktioniert.", es: "Creo que la regla funciona bien." },
      { it: "Ich lerne Deutsch, weil ich in Hamburg arbeiten will.", es: "Aprendo alemán porque quiero trabajar en Hamburgo." },
      { it: "Obwohl der Kurs schwierig ist, macht er viel Spaß.", es: "Aunque el curso es difícil, divierte mucho." },
      { it: "Meiner Meinung nach ist die Regel zu streng.", es: "Según mi opinión, la regla es demasiado estricta." },
      { it: "Ich bin sicher, dass wir einen Kompromiss finden.", es: "Estoy seguro de que encontramos un compromiso." },
    ],
    usi: [
      { q: "Quieres decir «creo que los trenes alemanes son puntuales». ¿Qué frase es correcta?", options: ["Ich denke, dass deutsche Züge pünktlich sind.", "Ich denke, dass deutsche Züge sind pünktlich.", "Ich denke, dass sind deutsche Züge pünktlich."], answer: 0, explain: "Con dass el verbo conjugado (sind) cierra la subordinada; en el medio el orden alemán se rompe." },
      { q: "«Aunque llueve, vamos a pasear.» ¿Cuál es la frase correcta?", options: ["Obwohl es regnet, wir gehen spazieren.", "Obwohl es regnet, gehen wir spazieren.", "Obwohl regnet es, gehen wir spazieren."], answer: 1, explain: "La subordinada con aunque lleva el verbo al final (es regnet) y la principal empieza por el verbo (gehen wir)." },
    ],
  },

  "de-cu-b1-02": {
    sezioni: [
      { t: "So funktioniert es", body: "El Plusquamperfekt es el «pasado del pasado»: hatte + Partizip II («Ich hatte gearbeitet») o war + Partizip II para movimiento y cambio («Der Zug war schon abgefahren»). Cuenta lo que ya había ocurrido cuando llegó otro hecho pasado: «Bevor ich kam, hatte sie alles erklärt» (antes de que yo llegara, ella ya lo había explicado todo). Sus acompañantes típicos son bevor, nachdem, schon y noch nie: «Ich hatte noch nie in einem Büro gearbeitet»." },
      { t: "Wann man es benutzt", body: "Brilla en los informes de experiencia: «Vor dem Praktikum hatte ich noch nie telefoniert» y en las historias con dos pisos temporales: «Am ersten Tag war ich nervös, weil ich noch nie mit Kunden gesprochen hatte». Para situar en el tiempo: seit + presente marca duración hasta hoy («Seit drei Jahren lerne ich Deutsch») y vor + pasado señala un punto concreto («Vor einem Jahr habe ich angefangen»). En español ambos se esconden bajo «desde hace / hace»." },
      { t: "Achtung (für Spanischsprachige)", body: "1) Con seit el verbo va en presente, nunca en pasado: «Seit zwei Jahren wohne ich hier», no «wohnte ich». 2) Los verbos de movimiento forman el Plusquamperfekt con war: «Der Zug war abgefahren», jamás «hatte abgefahren». 3) No lo uses como pasado «elegante»: el pasado normal es Perfekt o Präteritum; el Plusquamperfekt solo entra cuando hay un pasado anterior. Y un matiz léxico: die Anekdote es una historieta breve y real sobre alguien; «es una anécdota» en el sentido de «no tiene importancia» NO se traduce así." },
      { t: "Im echten Gespräch", body: "Al volver de las prácticas, la pregunta es «Na, wie war dein Praktikum? Erzähl mal!». Responde con la escalera temporal: «Vorher hatte ich keine Ahnung, aber die Kollegen hatten mir alles erklärt. Am Ende hat alles geklappt». Para la duración: «Seit einem Monat arbeite ich da»; para el momento exacto: «Vor zwei Wochen habe ich mein erstes Meeting geleitet». Así queda claro qué pasó antes de qué." },
    ],
    esempi: [
      { it: "Bevor ich ankam, hatte die Kollegin alles erklärt.", es: "Antes de que yo llegara, la compañera lo había explicado todo." },
      { it: "Als er kam, war der Zug schon abgefahren.", es: "Cuando llegó, el tren ya había salido." },
      { it: "Vor dem Kurs hatte ich noch nie eine Präsentation gehalten.", es: "Antes del curso nunca había hecho una presentación." },
      { it: "Seit einem Jahr wohne ich in Deutschland.", es: "Desde hace un año vivo en Alemania." },
      { it: "Vor einem Monat habe ich die Prüfung bestanden.", es: "Hace un mes aprobé el examen." },
    ],
    usi: [
      { q: "«Cuando llegamos, la reunión ya había empezado.» ¿Cuál es correcta?", options: ["Als wir kamen, hatte das Meeting schon angefangen.", "Als wir kamen, hat das Meeting schon angefangen.", "Als wir kamen, das Meeting hatte schon angefangen."], answer: 0, explain: "Plusquamperfekt (hatte angefangen) para lo anterior a la llegada; además, tras la subordinada el verbo debe ocupar la posición 2." },
      { q: "«Desde hace seis meses trabajo en Múnich.» ¿Cómo se dice?", options: ["Vor sechs Monaten arbeite ich in München.", "Seit sechs Monaten arbeite ich in München.", "Seit sechs Monaten arbeitete ich in München."], answer: 1, explain: "Duración hasta hoy = seit + presente; vor sería un punto del pasado y arbeitete un pasado ya cerrado." },
    ],
  },

  "de-cu-b1-03": {
    sezioni: [
      { t: "So funktioniert es", body: "El Konjunktiv II expresa lo irreal. Sus cuatro piezas: wäre (sería/estuviera), hätte (tendría), könnte (podría) y würde + infinitivo (haría): «Wenn ich Zeit hätte, würde ich dich besuchen». Formas clave: ich wäre, du wärst; ich hätte, du hättest; ich könnte, du könntest; ich würde, du würdest. El infinitivo con würde cierra la frase, igual que el verbo conjugado de las otras formas." },
      { t: "Wann man es benutzt", body: "Para sueños e hipótesis: «Wenn ich drei Millionen hätte, würde ich sofort eine Weltreise machen». En la frase con wenn la condición lleva el verbo al final y la principal empieza por el verbo: «Wenn ich Millionär wäre, würde ich weniger arbeiten». Para deseos: «Ich wünschte, ich könnte perfekt Deutsch sprechen». Para condiciones reales y abiertas existe falls (por si acaso): «Ich nehme den Schirm mit, falls es regnet» — ahí no hay irrealidad." },
      { t: "Achtung (für Spanischsprachige)", body: "1) El español mezcla subjuntivo e indicativo según la probabilidad; el alemán mantiene el Konjunktiv II en las dos partes: «Wenn ich reich wäre, würde ich ein Haus kaufen». 2) El infinitivo va al final: «Ich würde eine Weltreise machen», nunca «Ich würde machen eine Weltreise». 3) sein, haben y los modales NO usan würde: se dice «Wenn ich du wäre», jamás «Wenn ich du sein würde» — suena mal y delata extranjero." },
      { t: "Im echten Gespräch", body: "El juego de sobremesa alemán arranca con «Was würdest du machen, wenn?» y se responde encadenando: «Wenn ich so viel Geld hätte, würde ich erst die Familie einladen. Und du?». Para el consejo: «An deiner Stelle würde ich das Geld anlegen». Y el cierre nostálgico: «Ich wünschte, ich könnte jeden Tag am See schwimmen». Ojo a Lena: «Ich hätte Angst, alles auf einmal auszugeben» — hätte también sirve para emociones irreales." },
    ],
    esempi: [
      { it: "Wenn ich mehr Zeit hätte, würde ich Klavier lernen.", es: "Si tuviera más tiempo, aprendería piano." },
      { it: "An deiner Stelle würde ich das Angebot annehmen.", es: "Yo en tu lugar aceptaría la oferta." },
      { it: "Ich könnte den ganzen Tag am See sitzen.", es: "Podría pasarme el día entero sentado junto al lago." },
      { it: "Würdest du das Geld anlegen oder ausgeben?", es: "¿Invertirías el dinero o lo gastarías?" },
      { it: "Ich nehme eine Jacke mit, falls es kalt wird.", es: "Llevo una chaqueta por si acaso hace frío." },
    ],
    usi: [
      { q: "«Si fuera rico, compraría una casa con jardín.» ¿Cuál es correcta?", options: ["Wenn ich reich bin, kaufe ich ein Haus mit Garten.", "Wenn ich reich wäre, würde ich ein Haus mit Garten kaufen.", "Wenn ich reich wäre, ich würde ein Haus mit Garten kaufen."], answer: 1, explain: "Las dos partes van en Konjunktiv II: wäre en la condición y würde + infinitivo final; la principal, además, empieza por el verbo." },
      { q: "¿Qué frase corresponde a «no podría dormir» (irreal)?", options: ["Ich kann nicht schlafen.", "Ich würde nicht schlafen können sein.", "Ich könnte nicht schlafen."], answer: 2, explain: "Los modales usan su propia forma de Konjunktiv II (könnte); kann expresa un presente real y la segunda opción apila auxiliares imposibles." },
    ],
  },

  "de-cu-b1-04": {
    sezioni: [
      { t: "So funktioniert es", body: "Futur I: werden conjugado en posición 2 + infinitivo al final: ich werde kommen, du wirst helfen (irregular, no «du werdest»), er wird, wir werden, ihr werdet, sie werden. «Ich werde die Getränke organisieren» no es solo futuro: suena a promesa. La predicción con sein es fija: «Das Fest wird toll!», «Es wird bestimmt lustig»." },
      { t: "Wann man es benutzt", body: "Tres matices: promesa («Ich werde pünktlich sein — versprochen!»), predicción («Es wird morgen regnen») y suposición con wohl, bestimmt, wahrscheinlich («Er wird wohl krank sein» = estará enfermo). Atención: el presente cubre el futuro cuando hay marca temporal («Morgen rufe ich dich an»), así que el Futur I se reserva para el compromiso explícito — justo lo que vale en un Verein. Para el propósito de una promesa entra damit: «Ich besorge ein Zelt, damit wir bei jedem Wetter feiern können» (verbo al final)." },
      { t: "Achtung (für Spanischsprachige)", body: "1) werden NO es «volver»: significa «llegar a ser» o es auxiliar; «volver» es zurückkommen. 2) El infinitivo cierra la frase y con verbos separables el prefijo se pega a él: «Ich werde den Kuchen mitbringen», jamás «Ich werde den Kuchen bringen mit». 3) No traduzcas «voy a llamar» con ir: no existe futuro perifrástico con gehen; o presente con marca temporal o werden + infinitivo." },
      { t: "Im echten Gespräch", body: "En la reunión del Verein se reparten compromisos: «Ich werde die Getränke organisieren», «Ich bringe die Boxen mit — das verspreche ich!». Se sellan con «Abgemacht!» y «Auf dich ist Verlass». Si alguien duda: «Keine Sorge, ich werde ein großes Zelt besorgen, damit wir bei jedem Wetter feiern können». El que cumple sus Versprechen gana en Alemania un crédito de confianza difícil de comprar." },
    ],
    esempi: [
      { it: "Ich werde morgen beim Bezirksamt anrufen.", es: "Mañana llamaré a la oficina del distrito." },
      { it: "Wirst du beim Aufbau helfen?", es: "¿Ayudarás con el montaje?" },
      { it: "Das Fest wird bestimmt schön.", es: "La fiesta será seguramente bonita." },
      { it: "Nächste Woche werde ich dir das Buch zurückgeben.", es: "La semana que viene te devolveré el libro." },
      { it: "Ich hole dich ab, damit du nicht allein fahren musst.", es: "Te recojo para que no tengas que ir solo." },
    ],
    usi: [
      { q: "Prometes traer los altavoces a la fiesta. ¿Qué dices?", options: ["Ich werde die Boxen mitgebracht — versprochen!", "Ich werde die Boxen mitbringen — versprochen!", "Ich werde die Boxen bringen mit — versprochen!"], answer: 1, explain: "Futur I con werden + infinitivo; el prefijo de mitbringen se pega al infinitivo, que cierra la frase." },
      { q: "«Jonas no viene hoy; estará enfermo» (suposición). ¿Cuál es correcta?", options: ["Jonas kommt heute nicht; er wird wohl krank sein.", "Jonas kommt heute nicht; er wird wohl krank.", "Jonas kommt heute nicht; er ist wohl krank werden."], answer: 0, explain: "La suposición sobre el presente usa werden + wohl + infinitivo sein; sin infinitivo queda una predicción de cambio." },
    ],
  },

  "de-cu-b1-05": {
    sezioni: [
      { t: "So funktioniert es", body: "El reglamento alemán se escribe con tres piezas: dürfen + nicht = prohibición («Man darf keine laute Musik spielen»), müssen = obligación («Man muss den Müll trennen») y la pareja traicionera müssen + nicht = ausencia de necesidad («Du musst nicht jeden Tag putzen» = no hace falta). Las normas impersonales usan man (se/uno) con verbo en singular. Y las construcciones con zu + infinitivo: «Es ist verboten, drinnen zu rauchen», «Es ist wichtig, die Regeln zu respektieren»." },
      { t: "Wann man es benutzt", body: "Para leer y redactar una Hausordnung: «Zwischen 22 und 6 Uhr ist Nachtruhe». Para el sistema de basuras: «Papier kommt in die blaue Tonne, Verpackungen in die gelbe, Biomüll in die braune». Para el trabajo compartido: «Wir haben einen Putzplan — jede Woche ist jemand anders dran». En los textos oficiales abunda la fórmula «Es ist verboten/erlaubt/wichtig, zu + infinitivo», con la zu pegada al infinitivo." },
      { t: "Achtung (für Spanischsprachige)", body: "1) El español «no debes» es ambiguo: el alemán distingue dürfen nicht (prohibido) de müssen nicht (no hace falta); confundirlos cambia el sentido del reglamento. 2) La zu va pegada al infinitivo, porque en español el infinitivo va solo: «Es ist wichtig, die Ruhezeit einzuhalten». 3) Con verbos separables la zu se cuela en medio: ein·zu·halten, nunca «zu einhalten». 4) Ante sustantivo la negación es kein: «Man darf keine laute Musik spielen»." },
      { t: "Im echten Gespräch", body: "En la visita a la WG se pregunta con naturalidad: «Was darf ich hier machen und was ist verboten?», «Muss ich die Treppe putzen?». La respuesta modelo combina las tres piezas: «Du musst nicht jeden Tag putzen, aber du musst den Müll trennen. Drinnen darfst du nicht rauchen.» Quien entiende eso ha entendido media convivencia alemana — la otra mitad es la Ruhezeit de 22 a 6." },
    ],
    esempi: [
      { it: "Man darf hier nicht parken.", es: "Aquí no se puede aparcar." },
      { it: "Du musst nicht jeden Tag putzen.", es: "No hace falta que limpies cada día." },
      { it: "Es ist verboten, nach 22 Uhr laute Musik zu spielen.", es: "Está prohibido poner música alta después de las 22." },
      { it: "In Deutschland muss man den Müll trennen.", es: "En Alemania hay que separar la basura." },
      { it: "Es ist wichtig, die Ruhezeit einzuhalten.", es: "Es importante respetar el horario de silencio." },
    ],
    usi: [
      { q: "«Aquí está prohibido fumar.» ¿Qué frase es correcta?", options: ["Hier muss man nicht rauchen.", "Hier will man nicht rauchen.", "Hier darf man nicht rauchen."], answer: 2, explain: "Prohibición = dürfen + nicht; müssen nicht diría que no hace falta y wollen expresaría ganas." },
      { q: "«No hace falta que vengas mañana.» ¿Cuál es correcta?", options: ["Du darfst morgen nicht kommen.", "Du musst morgen nicht kommen.", "Du sollst morgen nicht kommen."], answer: 1, explain: "Ausencia de necesidad = müssen + nicht; dürfen nicht sería prohibición y sollte nicht un consejo negativo." },
    ],
  },

  "de-cu-b1-06": {
    sezioni: [
      { t: "So funktioniert es", body: "La pregunta indirecta se introduce con ob (si) o con la palabra interrogativa (wer, was, wann, wo, wie) y el verbo conjugado va AL FINAL: «Weißt du, ob das stimmt?», «Ich weiß nicht, wann sie ankommen». Para contar información vale dass: «Ich habe gehört, dass der Bäcker aufhören will». En las tres estructuras la coma es obligatoria, porque todas son subordinadas." },
      { t: "Wann man es benutzt", body: "ob aparece cuando la pregunta original era de sí/no («Kommt er?» → «Ich weiß nicht, ob er kommt»); si llevaba palabra interrogativa, esta se conserva: «Wo wohnt er?» → «Weißt du, wo er wohnt?». Nunca se combinan ob y palabra interrogativa. Para el cotilleo cuidadoso: «Man erzählt sich, dass», «Ich habe gehört, dass», «sagt man» — así cuentas el rumor sin firmarlo. Y la cortesía práctica: «Können Sie mir sagen, wo der Bahnhof ist?»." },
      { t: "Achtung (für Spanischsprachige)", body: "1) Dentro de la pregunta indirecta NO hay inversión: «Ich frage mich, wo der Hausmeister wohnt», jamás «wo wohnt der Hausmeister». 2) Nunca «ob wann»: elige ob o la palabra interrogativa, nunca ambos. 3) dass afirma («sé que vienes»), ob deja la pregunta abierta («no sé si vienes»); el español «si» cubre las dos, el alemán las separa. Y recuerda: tras «Ich weiß nicht, ob das stimmt» el verbo stimmt va al final." },
      { t: "Im echten Gespräch", body: "En el portal, la vecina abre con «Hast du schon gehört?» y tú compruebas con tacto: «Wirklich? Weißt du, ob das stimmt?». Para recabar más: «Ich werde den Hausmeister fragen, ob er mehr weiß». Al contarlo en casa mantienes la distancia: «Man erzählt sich, dass eine Familie einzieht — ob es stimmt, weiß niemand». Así cotilleas como los alemanes: con Klatsch, pero sin difamar." },
    ],
    esempi: [
      { it: "Können Sie mir sagen, wann der Bus kommt?", es: "¿Puede decirme cuándo viene el autobús?" },
      { it: "Ich frage mich, ob die Geschichte stimmt.", es: "Me pregunto si la historia es cierta." },
      { it: "Ich habe gehört, dass die Bäckerei schließt.", es: "He oído que la panadería cierra." },
      { it: "Weißt du, wer in den dritten Stock zieht?", es: "¿Sabes quién se muda al tercer piso?" },
      { it: "Ob es stimmt, weiß niemand.", es: "Si es cierto, no lo sabe nadie." },
    ],
    usi: [
      { q: "«¿Sabes si la tienda abre los domingos?» ¿Cuál es correcta?", options: ["Weißt du, ob das Geschäft sonntags öffnet?", "Weißt du, ob öffnet das Geschäft sonntags?", "Weißt du, dass das Geschäft sonntags öffnet?"], answer: 0, explain: "Pregunta de sí/no en indirecta: ob + sujeto + verbo al final; dass presentaría el dato como seguro." },
      { q: "¿Cómo preguntas con tacto dónde vive el portero?", options: ["Entschuldigung, wo wohnt der Hausmeister, wissen Sie?", "Entschuldigung, wissen Sie, wo wohnt der Hausmeister?", "Entschuldigung, wissen Sie, wo der Hausmeister wohnt?"], answer: 2, explain: "La indirecta conserva la palabra interrogativa pero manda el verbo al final; la inversión solo vale en la pregunta directa suelta." },
    ],
  },

  "de-cu-b1-07": {
    sezioni: [
      { t: "So funktioniert es", body: "El pronombre relativo (der, die, das) concuerda en género y número con su antecedente, pero toma el caso que le pide SU propia frase: nominativo «Der Palast, der berühmt ist»; acusativo «Der Kuchen, den man nur hier bekommt»; dativo con preposición «Der Fluss, an dem die Dampfer anlegen». El posesivo dessen (m/n) y deren (f/pl) equivale a «cuyo»: «Eine Stadt, deren Geschichte man überall spürt». Para lugares hay un atajo: wo — «Der Ort, wo die Raddampfer anlegen»." },
      { t: "Wann man es benutzt", body: "Es la herramienta de la descripción precisa: guías, reportajes, presentaciones. «Die Frauenkirche, deren Kuppel man von überall sieht, ist das Wahrzeichen» dice más que dos frases cortas. Con preposición, esta va delante del relativo: «die Freundin, mit der ich spazieren gehe», «der Palast, in dem Museen sind». En los textos cultos las relativas encadenan la información sin repetir el nombre: «Der Zwinger, der im Barock gebaut wurde und in dem heute Konzerte stattfinden»." },
      { t: "Achtung (für Spanischsprachige)", body: "1) El «que» español es invariable; el relativo alemán marca el caso: elige der, den o dem según la función, no según el antecedente solo. 2) dessen para masculino/neutro, deren para femenino y plural: «die Kirche, deren Kuppel», «der Verein, dessen Mitglieder» — al revés suena a error de principiante. 3) La coma antes de la relativa es obligatoria y el verbo de la relativa va al final: «Der Film, den wir gestern gesehen haben, war stark». 4) La preposición precede al pronombre: «mit der ich arbeite», nunca «die ich mit arbeite»." },
      { t: "Im echten Gespräch", body: "En la visita guiada suenan a guía profesional: «Das ist die Kirche, die jeder kennt», «Am Fluss gibt es einen Platz, wo die alten Dampfer anlegen», «Probier unbedingt die Eierschecke — das ist ein Kuchen, den man fast nur hier bekommt». Para brillar ante los amigos españoles: «Dresden wird Elbflorenz genannt, weil die Stadt im Abendlicht golden glänzt». Con relativas tu ciudad deja de ser una lista y se convierte en un relato." },
    ],
    esempi: [
      { it: "Das ist der Mann, der neben mir wohnt.", es: "Ese es el hombre que vive a mi lado." },
      { it: "Die Kollegin, mit der ich arbeite, kommt aus Kiel.", es: "La compañera con la que trabajo es de Kiel." },
      { it: "Das ist die Studentin, deren Bruder in Berlin studiert.", es: "Esa es la estudiante cuyo hermano estudia en Berlín." },
      { it: "Der Park, wo wir immer spazieren gehen, liegt am Rhein.", es: "El parque donde siempre paseamos está junto al Rin." },
      { it: "Der Film, den wir gestern gesehen haben, war spannend.", es: "La película que vimos ayer era emocionante." },
    ],
    usi: [
      { q: "«El café en el que quedamos está junto al Rin.» ¿Cuál es correcta?", options: ["Das Café, das wir uns treffen, liegt am Rhein.", "Das Café, in dem wir uns treffen, liegt am Rhein.", "Das Café, in das wir uns treffen, liegt am Rhein."], answer: 1, explain: "El lugar donde nos vemos pide in + dativo (in dem); in das marcaría destino y das no lleva la preposición correcta." },
      { q: "«Dresde es una ciudad cuya historia se nota en todas partes.»", options: ["Dresden ist eine Stadt, deren Geschichte man überall spürt.", "Dresden ist eine Stadt, dessen Geschichte man überall spürt.", "Dresden ist eine Stadt, die Geschichte man überall spürt."], answer: 0, explain: "Antecedente femenino (Stadt): el posesivo relativo es deren; dessen es masculino/neutro y die sola no expresa posesión." },
    ],
  },

  "de-cu-b1-08": {
    sezioni: [
      { t: "So funktioniert es", body: "weil y denn expresan la CAUSA, pero con arquitecturas distintas: weil es subordinante (verbo conjugado al final), denn es coordinante (orden normal). «Ich fahre Rad, weil es gut für die Umwelt ist» = «Ich fahre Rad, denn es ist gut für die Umwelt». Deshalb, daher y darum expresan la CONSECUENCIA (por eso): ocupan la posición 1 y el verbo pasa inmediatamente detrás: «Wir trennen den Müll, deshalb können wir viel recyceln»." },
      { t: "Wann man es benutzt", body: "Son el esqueleto del argumento alemán: primero la causa (weil/denn), luego la consecuencia (deshalb/daher/darum). «Weil die Technik besser wird, ist grüner Strom billiger. Deshalb wächst der Anteil der Erneuerbaren.» En el debate ecológico se encadenan: «Weil es Flaschenpfand gibt, kommen fast alle Flaschen zurück — darum liegt weniger Müll auf der Straße». La claridad causa→efecto se premia en cualquier Diskussion." },
      { t: "Achtung (für Spanischsprachige)", body: "1) No traduzcas cada «porque» por weil: si después viene orden normal (sujeto + verbo), toca denn. 2) Deshalb empuja el verbo a la posición 2: «Deshalb müssen wir besser planen», jamás «Deshalb wir müssen besser planen». 3) weil responde a warum? y deshalb introduce el resultado: si te preguntan «Warum?», no empieces la respuesta con deshalb. 4) darum es algo más coloquial que deshalb, pero la estructura es idéntica." },
      { t: "Im echten Gespräch", body: "El debate tiene sus rutinas: «Ich sehe das kritischer, denn die Windräder verändern die Landschaft» — «Verstehe, aber deshalb sollten wir die Erneuerbaren nicht stoppen». Para el acuerdo final: «Da sind wir uns einig: Wir brauchen deshalb einen Mix». Y la reacción rápida del oyente alemán: «Guter Punkt!», «Stimmt». Causa y consecuencia bien atadas: así se discute en Alemania sin perder el hilo." },
    ],
    esempi: [
      { it: "Ich fahre mit dem Fahrrad, weil das gut für die Umwelt ist.", es: "Voy en bici porque eso es bueno para el medio ambiente." },
      { it: "Ich bleibe zu Hause, denn ich bin müde.", es: "Me quedo en casa porque estoy cansado." },
      { it: "Es regnet, deshalb nehme ich den Schirm mit.", es: "Llueve; por eso llevo el paraguas." },
      { it: "Weil die Technik besser wird, ist grüner Strom billiger geworden.", es: "Como la técnica mejora, la electricidad verde se ha abaratado." },
      { it: "Die Preise steigen, daher fahren wir weniger Auto.", es: "Los precios suben; por eso usamos menos el coche." },
    ],
    usi: [
      { q: "«Ahorramos electricidad, por eso la factura baja.» ¿Cuál es correcta?", options: ["Wir sparen Strom, deshalb wird die Rechnung kleiner.", "Wir sparen Strom, deshalb die Rechnung wird kleiner.", "Wir sparen Strom, weil wird die Rechnung kleiner."], answer: 0, explain: "deshalb ocupa la posición 1 y el verbo pasa a la 2; weil exigiría verbo final y expresaría causa, no consecuencia." },
      { q: "«Ich sehe das kritisch, ___ die Preise steigen.» (con orden normal de frase)", options: ["weil", "deshalb", "denn"], answer: 2, explain: "Tras denn el orden es normal (sujeto antes del verbo); weil mandaría el verbo al final y deshalb introduciría una consecuencia." },
    ],
  },

  "de-cu-b1-09": {
    sezioni: [
      { t: "So funktioniert es", body: "Los verbos reflexivos llevan su pronombre obligatorio (mich, dich, sich, uns, euch, sich) justo después del verbo conjugado, y muchos rigen una preposición fija: sich bewerben um (presentarse a), sich interessieren für (interesarse por), sich freuen auf (ilusionarse por algo futuro), sich gewöhnen an (acostumbrarse a), sich fühlen (sentirse). El Präteritum narrativo los acompaña: arbeitete, machte, sagte (débiles); ging, kam, zog, wollte (fuertes y modales); dachte, wusste (mixtos)." },
      { t: "Wann man es benutzt", body: "En la entrevista se narra el Werdegang en Präteritum porque suena claro y profesional: «Nach dem Studium arbeitete ich zwei Jahre in Madrid. Dann zog ich nach Hamburg, weil ich Deutsch lernen wollte. Zuerst fühlte ich mich unsicher, aber ich gewöhnte mich schnell an alles Neue.» Después llegan los reflexivos de la motivación: «Ich interessiere mich für internationale Märkte und freue mich darauf, mit Ihrem Team zu arbeiten»." },
      { t: "Achtung (für Spanischsprachige)", body: "1) Las preposiciones son fijas por verbo: sich freuen AUF lo futuro, sich freuen ÜBER lo presente o pasado — el «por» español no distingue. 2) El pronombre reflexivo nunca se omite: «Ich interessiere mich für», jamás «Ich interessiere für». 3) Falsos amigos de entrevista: die Rente es la pensión de jubilación (die Miete es el alquiler); die Konkurrenz es la competencia entre candidatos (no un concurso); ein Star es un famoso (la estrella del cielo es der Stern). 4) Con Präposition + zu-Infinitiv se usa da(r)-: «Ich freue mich darauf, mit dem Team zu arbeiten»." },
      { t: "Im echten Gespräch", body: "Guion de la entrevista: «Erzählen Sie kurz von sich» abre el turno; responde con tres frases en Präteritum y una de futuro con freuen auf. Las preguntas clave: «Warum bewerben Sie sich gerade bei uns?», «Worauf freuen Sie sich am meisten?». Al final preguntan si TÚ preguntas: «Wie sind die Arbeitszeiten?» — quien no pregunta, parece poco interesado. Cierre: «Vielen Dank für das Gespräch»." },
    ],
    esempi: [
      { it: "Ich interessiere mich für internationale Märkte.", es: "Me intereso por los mercados internacionales." },
      { it: "Ich bewarb mich um ein Praktikum in Hamburg.", es: "Me presenté a unas prácticas en Hamburgo." },
      { it: "Sie freut sich auf das Vorstellungsgespräch.", es: "Ella se ilusiona con la entrevista." },
      { it: "Ich gewöhnte mich schnell an die neue Stadt.", es: "Me acostumbré enseguida a la ciudad nueva." },
      { it: "Wir trafen uns jeden Morgen vor der Kaffeemaschine.", es: "Nos veíamos cada mañana ante la cafetera." },
    ],
    usi: [
      { q: "«Me presento a esa plaza.» ¿Cuál es correcta?", options: ["Ich bewerbe mich für diese Stelle.", "Ich bewirbe diese Stelle.", "Ich bewerbe mich um diese Stelle."], answer: 2, explain: "sich bewerben um + acusativo; für es la preposición errónea y sin el reflexivo mich la frase no funciona." },
      { q: "«Con 67 años, los alemanes se jubilan.» ¿Cuál es correcta?", options: ["Mit 67 gehen die Deutschen in die Miete.", "Mit 67 gehen die Deutschen in Rente.", "Mit 67 zahlen die Deutschen die Rente."], answer: 1, explain: "in Rente gehen = jubilarse; ojo al falso amigo: die Rente es la pensión y die Miete el alquiler." },
    ],
  },

  "de-cu-b1-10": {
    sezioni: [
      { t: "So funktioniert es", body: "La pasiva alemana se forma con werden + Partizip II: presente «wird gemacht» (se hace / es hecho), Präteritum «wurde gemacht» (se hizo). El objeto de la activa pasa a sujeto: «Die Redaktion prüft den Text» → «Der Text wird geprüft». El agente entra con von + dativo para personas («Der Text wird von drei Personen geprüft») y con durch para el medio o la causa («Der Bericht wurde durch einen Anruf bekannt»)." },
      { t: "Wann man es benutzt", body: "Domina los textos informativos, los procesos y las normas: «Hier werden die Nachrichten des Tages vorbereitet», «Gestern wurde ein Bericht über den Hafen gedreht», «Die Hauptausgabe wird seit Jahrzehnten um 20 Uhr gesendet». Si el agente es la gente en general, el alemán prefiere man: «Man sagt, dass». En el informativo del curso redactas igual: qué pasó (wurde + participio), qué se hace ahora (wird + participio) y quién lo organiza (von)." },
      { t: "Achtung (für Spanischsprachige)", body: "1) La pasiva alemana es estándar, no formal: donde el español dice «se emiten las noticias», el alemán dice «Die Nachrichten werden gesendet» sin ningún tono rebuscado. 2) Respeta el número: «Die Nachrichten WERDEN gesendet» (plural), «Die Sendung WIRD gesendet» (singular). 3) No confundas la pasiva de proceso con la de estado: «Die Tür wird geöffnet» (se está abriendo) frente a «Die Tür ist geöffnet» (está abierta): sein + participio describe el resultado, werden + participio describe la acción. 4) von rige dativo: «von der Redaktorin», no «von die Redaktorin»." },
      { t: "Im echten Gespräch", body: "En la visita a la Redaktion las preguntas salen solas: «Wie funktioniert das genau?», «Wer entscheidet, was gesendet wird?». Martin explica el proceso en pasiva: «Jeden Morgen werden die Themen ausgewählt und die Reporter werden zugeteilt. Danach wird alles geschnitten, und um Punkt 20 Uhr läuft die Sendung live». Y la frase del país entero a las 20:00: «Jetzt schauen wir Tagesschau» — un ritual con sintonía propia." },
    ],
    esempi: [
      { it: "Die Sendung wird jeden Abend um 20 Uhr gesendet.", es: "El programa se emite cada noche a las 20." },
      { it: "Gestern wurde ein neuer Fahrradweg eröffnet.", es: "Ayer se inauguró una nueva ciclovía." },
      { it: "Der Text wird von der Redaktorin geprüft.", es: "El texto es revisado por la redactora." },
      { it: "Hier wird nicht geraucht.", es: "Aquí no se fuma." },
      { it: "Die Themen werden jeden Morgen ausgewählt.", es: "Los temas se eligen cada mañana." },
    ],
    usi: [
      { q: "«Las noticias se preparan aquí.» ¿Cuál es correcta?", options: ["Hier wird die Nachrichten vorbereitet.", "Hier haben die Nachrichten vorbereitet.", "Hier werden die Nachrichten vorbereitet."], answer: 2, explain: "Sujeto plural (die Nachrichten) → werden + participio; wird sería singular y la última opción es una activa sin sentido." },
      { q: "«Ayer se grabó un reportaje sobre el puerto.» ¿Cuál es correcta?", options: ["Gestern hat ein Bericht über den Hafen gedreht.", "Gestern wurde ein Bericht über den Hafen gedreht.", "Gestern wurde ein Bericht über den Hafen drehen."], answer: 1, explain: "Pasiva de Präteritum: wurde + gedreht; la primera es activa con sujeto imposible y la tercera mezcla pasiva con infinitivo." },
    ],
  },

  "de-cu-b1-11": {
    sezioni: [
      { t: "So funktioniert es", body: "El Konjunktiv II también sirve para desear y proponer con tacto: «Ich hätte gern mehr Sprechzeit» (me gustaría tener), «Das wäre super» (eso sería genial), «Man könnte jede Woche eine Situation üben» (se podría). sollte + infinitivo formula sugerencias y consejos: «Wir sollten mehr Grammatik wiederholen». Y para deseos irreales existe la fórmula «Ich wünschte,» + Konjunktiv II con el verbo al final: «Ich wünschte, wir hätten mehr Zeit» (ojalá tuviéramos más tiempo)." },
      { t: "Wann man es benutzt", body: "Es la gramática de las Feedbackrunden: se nombra lo bueno, se formula el deseo de cambio (hätte gern, wäre, könnte) y se cierra con una propuesta (sollte, man könnte). «Ich hätte gern mehr Sprechzeit, und ich wünschte, die Gruppe wäre kleiner. Wir sollten öfter reale Situationen üben.» Las partículas gern, eigentlich, vielleicht suavizan todavía más: «Ich könnte vielleicht früher kommen»." },
      { t: "Achtung (für Spanischsprachige)", body: "1) «Ich hätte gern» es un deseo cortés; «Ich habe gern» no pide nada: describe lo que te gusta. 2) sollte es consejo, müssen obligación y können posibilidad: no los intercambies si no quieres sonar autoritario o vago. 3) Tras «Ich wünschte» el verbo va en Konjunktiv II y al final: «Ich wünschte, der Kurs wäre kleiner», no «Ich wünschte, der Kurs ist kleiner». 4) La negación de sollte: «Man sollte nicht so viel Handy spielen» — consejo negativo, no prohibición." },
      { t: "Im echten Gespräch", body: "La ronda empieza suave: «Grundsätzlich war der Kurs gut, aber» — y llega el deseo con Konjunktiv II. Las Ich-Botschaften mandan: «ich fand die Dialoge realistisch, ich hätte gern mehr davon». Toda crítica seria termina en propuesta: «Wir sollten» o «Man könnte» — porque, como dicen los alemanes, ohne Vorschlag ist Kritik nur Gemecker (sin propuesta, la crítica es solo queja). El que da feedback constructivo demuestra interés, no desprecio." },
    ],
    esempi: [
      { it: "Ich hätte gern ein ruhigeres Zimmer.", es: "Querría una habitación más tranquila." },
      { it: "Man könnte jede Woche eine Situation üben.", es: "Se podría practicar una situación cada semana." },
      { it: "Wir sollten die Grammatik wiederholen.", es: "Deberíamos repasar la gramática." },
      { it: "Ich wünschte, der Kurs wäre ein bisschen kleiner.", es: "Ojalá el curso fuera un poco más pequeño." },
      { it: "Es wäre schön, wenn du kommen könntest.", es: "Sería bonito que pudieras venir." },
    ],
    usi: [
      { q: "«Me gustaría tener más tiempo para hablar.» ¿Cuál es correcta?", options: ["Ich habe gern mehr Sprechzeit.", "Ich wäre gern mehr Sprechzeit.", "Ich hätte gern mehr Sprechzeit."], answer: 2, explain: "El deseo cortés se expresa con hätte gern (Konjunktiv II de haben); habe gern describe un gusto y wäre pide un sustantivo de persona o papel." },
      { q: "Sugerencia amable al grupo: repetir el ejercicio. ¿Qué dices?", options: ["Ihr müsst die Übung wiederholen.", "Wir wollen die Übung wiederholen.", "Wir sollten die Übung wiederholen."], answer: 2, explain: "sollte formula sugerencias; müssen sería una obligación dura y wollen solo comunicaría ganas." },
    ],
  },

  "de-cu-b1-12": {
    sezioni: [
      { t: "So funktioniert es", body: "Los conectores argumentativos ordenan la escalera del discurso: einerseits und andererseits presentan las dos caras (por un lado y por otro); además añade (außerdem); folglich y deshalb concluyen lógicamente (en consecuencia); zum Schluss cierra la intervención; erstens, zweitens, drittens numeran los pasos. Además y folglich ocupan la posición 1 y empujan el verbo al segundo puesto: «Außerdem lenkt das Handy ab», «Folglich bleibt die Konzentration»." },
      { t: "Wann man es benutzt", body: "Son obligatorios en la Podiumsdiskussion y en la Erörterung escolar: «Einerseits kann man mit Apps lernen, andererseits lenkt das Handy ab. Außerdem vergleichen sich Jugendliche in den Netzwerken. Folglich bin ich für klare Regeln. Zum Schluss fasse ich zusammen: weg in der Stunde, frei in der Pause.» Para intervenir con cortesía: «Darf ich kurz einhaken?», «Ich möchte widersprechen», «Ich respektiere deine Meinung, aber ich sehe das anders»." },
      { t: "Achtung (für Spanischsprachige)", body: "1) «Außerdem ich habe noch einen Grund» es imposible: conector en posición 1 → verbo en 2 → sujeto después: «Außerdem habe ich noch einen Grund». 2) folglich NO significa «finalmente»: es una consecuencia lógica; el cierre es zum Schluss o schließlich. 3) einerseits busca su andererseits como el zum busca su Schluss: si nombras una cara, presenta la otra. 4) Erstens/zweitens/drittens van pegados a su posición y el verbo sigue la regla de posición 1-2." },
      { t: "Im echten Gespräch", body: "La moderación marca el ritmo: «Zuerst spricht Jonas — er ist dagegen». Tú refutas con cortesía: «Ich respektiere deine Meinung, aber das Handy lenkt stark ab; außerdem werden die Jugendlichen unglücklich». Y cierras: «Folglich schlage ich vor, dass die Handys bis zur Pause in der Tasche bleiben. Zum Schluss danke ich für die Debatte». En Alemania el aplauso final es para todas las partes: la Debatte se gana estructurando." },
    ],
    esempi: [
      { it: "Einerseits sind Handys nützlich, andererseits lenken sie ab.", es: "Por un lado los móviles son útiles; por otro, distraen." },
      { it: "Außerdem brauchen wir mehr Pausen.", es: "Además necesitamos más pausas." },
      { it: "Folglich schlage ich eine klare Regel vor.", es: "En consecuencia propongo una regla clara." },
      { it: "Zum Schluss danke ich euch für die Diskussion.", es: "Para terminar, os doy las gracias por la discusión." },
      { it: "Erstens spart es Geld, zweitens schützt es die Umwelt.", es: "Primero ahorra dinero; segundo, protege el medio ambiente." },
    ],
    usi: [
      { q: "«Además, tengo otra pregunta.» ¿Cuál es correcta?", options: ["Außerdem ich habe noch eine Frage.", "Außerdem haben noch eine Frage ich.", "Außerdem habe ich noch eine Frage."], answer: 2, explain: "außerdem ocupa la posición 1: el verbo conjugado pasa a la 2 y el sujeto va detrás." },
      { q: "«Por un lado el trabajo es interesante; por otro, está mal pagado.»", options: ["Außerdem ist die Arbeit interessant, folglich ist sie schlecht bezahlt.", "Einerseits ist die Arbeit interessant, andererseits ist sie schlecht bezahlt.", "Zum Schluss ist die Arbeit interessant, außerdem ist sie schlecht bezahlt."], answer: 1, explain: "Las dos caras de un asunto se presentan con la pareja einerseits und andererseits; las otras combinaciones rompen la lógica del contraste." },
    ],
  },
};
