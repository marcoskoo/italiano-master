import type { CbGrammarDeep } from "../../extra/grammar-deep";

/* ═══ DE B2 · Grammar deep — 12 unidades (Hochdeutsch de Alemania) ═══
   Explicación amplia de la gramática de cada unidad, con las trampas
   específicas del hispanohablante. Campos `.it` = alemán de Alemania,
   `.es` = español (tuteo). Secciones: So funktioniert es / Wann man es
   benutzt / Achtung (für Spanischsprachige) / Im echten Gespräch.     */

export const DE_DEEP_B2: Record<string, CbGrammarDeep> = {
  "de-cu-b2-01": {
    sezioni: [
      { t: "So funktioniert es", body: "Los conectores argumentativos alemanes son adverbios que ocupan la posición I de la frase y empujan el verbo a la posición II: «Zunächst einmal würde die Bürokratie schrumpfen». La serie clásica del debate marca el recorrido: zunächst (abrir el primer argumento), darüber hinaus o außerdem (añadir otro), folglich o deshalb (extraer la consecuencia) y letztlich (cerrar la argumentación). Si el conector no abre la frase, el verbo se le adelanta: «Die Steuern müssten folglich steigen». En la argumentación hipotética convive con el Konjunktiv II: «es gäbe weniger Armut», «das System wäre zu teuer»." },
      { t: "Wann man es benutzt", body: "Son los conectores que piden los exámenes escritos alemanes (Erörterung, Essay, Redemanuskript): cada bloque de tu texto debería abrir con uno distinto, para que el lector vea de un vistazo la arquitectura del razonamiento. En la mesa de debate ordenan tu turno de palabra: «Zunächst einmal halte ich fest: Das Grundeinkommen schützt die Würde. Darüber hinaus entlastet es die Sozialämter. Folglich überwiegen die Vorteile. Letztlich kommt es auf die Frage an, was Sicherheit kostet». También sirven para ordenar preguntas en una entrevista o puntos en un acta." },
      { t: "Achtung (für Spanischsprachige)", body: "1) Tus «en primer lugar / además / por lo tanto» no mueven nada; los alemanes sí: si pones el conector delante, el sujeto va detrás del verbo («Zunächst sagte Lena»), nunca «Zunächst Lena sagte». 2) zunächst en una argumentación es «en primer lugar», no «al principio» temporal: para la secuencia temporal usa zuerst o am Anfang; confundirlos hace sonar tu discurso como un relato. 3) folglich solo deduce consecuencias lógicas de premisas; deshalb responde a una causa real: «Folglich müssten die Steuern steigen» no significa que hayan subido, sino que se sigue de tus premisas. 4) darüber hinaus se escribe en tres palabras y funciona como bloque único en la posición I." },
      { t: "Im echten Gespräch", body: "En una Talkshow o un Debattierclub se agradece esta señalética: el moderador agradece las contribuciones «in strukturierter Form», y quien ordena con zunächst, darüber hinaus, folglich y letztlich recibe más tiempo de palabra. Para rebatir con cortesía: «Das ist ein guter Einwand, trotzdem halte ich fest». Y para cerrar tu turno: «Letztlich kommt es also auf eine Frage an». Marca los conectores con un ligero acento al hablar y respira tras cada uno: el oyente agradece las pausas entre eslabones." },
    ],
    esempi: [
      { it: "Zunächst einmal möchte ich allen Anwesenden herzlich danken.", es: "En primer lugar, quisiera dar las gracias de corazón a todos los presentes." },
      { it: "Darüber hinaus spricht meiner Ansicht nach auch die Finanzierbarkeit dafür.", es: "Además, en mi opinión, también la financiabilidad juega a favor." },
      { it: "Die Kosten steigen; folglich müsste man die Steuern erhöhen.", es: "Los costes suben; por consiguiente, habría que subir los impuestos." },
      { it: "Letztlich bleibt die Frage, was uns Sicherheit wert ist.", es: "En última instancia queda la pregunta de cuánto valoramos la seguridad." },
      { it: "Zwar fehlen noch Zahlen; trotzdem überzeugt die Struktur der Argumentation.", es: "Faltan todavía cifras; aun así, la estructura del argumento convence." },
    ],
    usi: [
      { q: "Ya diste tu primer argumento y quieres añadir un segundo. ¿Qué conector encaja?", options: ["Darüber hinaus", "Folglich", "Letztlich"], answer: 0, explain: "darüber hinaus añade un eslabón más a una serie ya empezada; folglich deduce una consecuencia y letztlich cierra la argumentación." },
      { q: "Completa el cierre: «___ kommt es darauf an, was wir uns leisten können.»", options: ["Letztlich", "Zunächst", "Darüber hinaus"], answer: 0, explain: "letztlich marca el final del recorrido argumentativo; zunächst abre la serie y darüber hinaus añadiría otro argumento, no un cierre." },
    ],
  },

  "de-cu-b2-02": {
    sezioni: [
      { t: "So funktioniert es", body: "El alemán puede empaquetar acciones enteras en sustantivos: begrüßen → die Begrüßung, beenden → die Beendigung, prüfen → die Prüfung, danken → der Dank, wachsen → das Wachstum. Casi todos los sustantivos en -ung son femeninos y arrastran un genitivo: «die Prüfung der Zahlen» = el examen de las cifras. La verbalización es el camino inverso: busca el verbo escondido en el sustantivo, devuélvele sujeto y tiempo, y convierte la preposición en conjunción: «nach der Prüfung der Zahlen» → «nachdem wir die Zahlen geprüft haben»; «zum Dank an das Team» → «um dem Team zu danken»." },
      { t: "Wann man es benutzt", body: "El Nominalstil (sustantivos, genitivos, casi sin sujetos) suena distante, oficial y solemne: es el idioma de las Festreden solemnes, los contratos y el Amtsdeutsch de la administración. El Verbalstil (sujetos, tiempos, personas) suena claro y vivo: es el idioma del buen periodismo y de las anécdotas. En una Festrede alterna conscientemente: apertura solemne en Nominalstil («Im Namen der Geschäftsführung…»), anécdotas en Verbalstil («Wir haben zusammen gekämpft»), cierre nominal para la dignidad final. Los adverbios en -weise (glücklicherweise, beispielsweise) puentean ambos registros." },
      { t: "Achtung (für Spanischsprachige)", body: "1) El español también nominaliza («el cese de la crisis»), pero el alemán formal lo hace mucho más a menudo: no te asustes al encontrar frases enteras convertidas en un solo sustantivo compuesto. 2) El «de» español equivale aquí al genitivo: «die Begrüßung der Gäste», no «die Begrüßung die Gäste»; y los sustantivos en -ung son femeninos: die, nunca der o das. 3) Al verbalizar, cada sustantivo recuerda su auxiliar: die Beendigung → wir haben beendet, pero die Ankunft → wir sind angekommen. 4) No encadenes más de dos nominalizaciones seguidas: «die Prüfung der Unterlagen der Abteilung der Geschäftsführung» es Amtsdeutsch involuntariamente cómico." },
      { t: "Im echten Gespräch", body: "Cuando un colega te dice «Die Sätze sind etwas schwerfällig», está hablando de exceso de Nominalstil: la cura es devolver los verbos a la superficie. En la preparación de un discurso se trabaja en pareja: uno lee en voz alta el borrador y el otro señala las nominalizaciones pesadas («die Beendigung der Krise») y propone la versión verbal («Wir haben die Krise beendet»). El truco profesional: mantener nominal la apertura y el cierre, verbal el corazón. Así la Festrede tiene Würde y Herz a la vez." },
    ],
    esempi: [
      { it: "Die Begrüßung der Gäste übernahm die Geschäftsführerin persönlich.", es: "La bienvenida de los invitados la asumió personalmente la directora." },
      { it: "Wir haben die Krise gemeinsam beendet.", es: "Pusimos fin juntos a la crisis." },
      { it: "Nachdem wir die Zahlen geprüft haben, reden wir weiter.", es: "Después de que examinemos las cifras, seguimos hablando." },
      { it: "Zum Dank an das Team gab es Kaffee und Kuchen.", es: "En agradecimiento al equipo hubo café y pastel." },
      { it: "Im Namen der Geschäftsführung danke ich Ihnen allen herzlich.", es: "En nombre de la dirección les doy las gracias de corazón a todos." },
    ],
    usi: [
      { q: "Redactas un comunicado oficial y necesitas la versión más solemne. ¿Cuál eliges?", options: ["Die Begrüßung der Gäste erfolgt durch die Geschäftsführung.", "Wir begrüßen unsere Gäste ganz herzlich.", "Die Gäste begrüßen sich gegenseitig sofort."], answer: 0, explain: "El Nominalstil (acción convertida en sustantivo + genitivo, sin sujeto) produce exactamente el tono distante y oficial que pide un comunicado; las otras son frases verbales, vivas pero menos solemnes." },
      { q: "Verbaliza: «nach der Prüfung der Unterlagen»", options: ["nachdem wir die Unterlagen geprüft haben", "nach die Unterlagen prüfen wir", "unter der Prüfung nachher"], answer: 0, explain: "Preposición + sustantivo se convierte en conjunción + frase: nachdem + sujeto + objeto + participio al final, con el verbo conjugado en posición II." },
    ],
  },

  "de-cu-b2-03": {
    sezioni: [
      { t: "So funktioniert es", body: "El Konjunktiv II de pasado se forma con hätte o wäre + Partizip II al final: «Ich hätte den Vertrag nicht unterschrieben», «Ich wäre gern zur Mieterberatung gegangen». Lleva hätte la gran mayoría de los verbos (los que hacen el Perfekt con haben); llevan wäre los verbos de movimiento y de cambio de estado y todos los que usan sein en el perfecto: kommen, gehen, werden, passieren, auffallen, bleiben. Con verbos modales aparece la doble forma de infinitivo: «Ich hätte den Nachbarn fragen sollen» = debería haber preguntado al vecino." },
      { t: "Wann man es benutzt", body: "Expresa lo irremediable: lamentos («Hätte ich das bloß gewusst!»), reproches («Hättest du nur früher gefragt!») y desvíos de la vida real («Ich wäre gern Jurist geworden»). La condicional irreal tiene dos envoltorios: con wenn («Wenn ich das gewusst hätte, hätte ich nicht unterschrieben») o sin él, con inversión elegante: «Hätte ich das gewusst, hätte ich nicht unterschrieben». Las partículas bloß y nur intensifican el lamento. Es la gramática de las historias de errores, del baloncesto mental del «¿y si?» y de los consejos retrospectivos." },
      { t: "Achtung (für Spanischsprachige)", body: "1) Tu «habría + participio» es único para todo; el alemán se parte en dos: «ich hätte gefragt» (habría preguntado) frente a «ich wäre gegangen» (habría ido). «Ich hätte gegangen» es el error clásico e incomprensible para un oído alemán. 2) No lo mezcles con el KII de presente: «Wenn ich Zeit hätte, käme ich» habla de ahora; «Wenn ich Zeit gehabt hätte, wäre ich gekommen» habla de ayer. 3) En la forma sin wenn, el auxiliar se adelanta él solo: «Hätte ich das gewusst», jamás «Wenn hätte ich das gewusst». 4) Con modales, los dos infinitivos cierran juntos la frase: «Ich hätte fragen sollen», nunca «Ich hätte sollen fragen»." },
      { t: "Im echten Gespräch", body: "Es la gramática de la confesión entre amigos: «Ich habe das Kleingedruckte nicht gelesen» – «Oh nein! Hättest du es bloß gelesen!». Para preguntar por el pasado alternativo: «Was hättest du an meiner Stelle getan?» – «Ich wäre zuerst zur Mieterberatung gegangen». Y para consolar sin sermón: «Fehler passieren. Wichtig ist, was man daraus macht». Los alemanes usan estas frases también con humor: «Hätte ich das gewusst, wäre ich im Bett geblieben»." },
    ],
    esempi: [
      { it: "Hätte ich das Kleingedruckte gelesen, hätte ich nicht unterschrieben.", es: "Si hubiera leído la letra pequeña, no habría firmado." },
      { it: "Wenn du früher gekommen wärst, hätten wir noch geredet.", es: "Si hubieras venido antes, todavía habríamos hablado." },
      { it: "Ich wäre gern Journalistin geworden.", es: "Me habría gustado hacerme periodista." },
      { it: "Hättest du mich bloß gewarnt!", es: "¡Si me hubieras avisado siquiera!" },
      { it: "Wäre der Nachbar nicht zufällig vorbeigekommen, hätte ich den Fehler übersehen.", es: "Si el vecino no hubiera pasado por casualidad, habría pasado por alto el error." },
    ],
    usi: [
      { q: "«Wenn ich den Termin wahrnehmen ___» (wahrnehmen usa haben)", options: ["hätte", "wäre", "würde"], answer: 0, explain: "wahrnehmen forma el Perfekt con haben, así que su irreal de pasado lleva hätte + wahrgenommen; wäre solo acompaña a los verbos de sein." },
      { q: "¿Cuál de estas frases expresa un lamento por el pasado?", options: ["Hätte ich das bloß gewusst!", "Wenn ich Zeit habe, komme ich vorbei.", "Ich wäre gern dabei, wenn es passt."], answer: 0, explain: "hätte + participio + bloß es la firma del lamento irreal sobre lo ya ocurrido; la segunda es una condición real de presente y la tercera, un deseo para ahora." },
    ],
  },

  "de-cu-b2-04": {
    sezioni: [
      { t: "So funktioniert es", body: "El Konjunktiv I se forma sobre la raíz del infinitivo con las terminaciones -e/-est/-e/-en/et/en: er sei, sie habe, er gehe, er könne, er müsse, er solle, er wolle, er werde. En la tercera persona singular casi siempre se distingue del indicativo (er ist → er sei; er hat → er habe), y esa diferencia visible es la que la prensa aprovecha. El pasado va con habe/sei + Partizip II: «Sie sagte, sie habe nichts gewusst», «Er erklärte, er sei krank gewesen». El futuro con werde: «Sie fügte hinzu, das Projekt werde im Herbst eröffnet»." },
      { t: "Wann man es benutzt", body: "Sirve para transmitir declaraciones ajenas marcando distancia: el periodista cita lo afirmado sin darlo por cierto. Es la lengua de la indirekte Rede periodística y de las actas formales. Se introduce con verbos de habla precisos: sagen, erklären, betonen, hinzufügen, antworten, einräumen (conceder), zurückweisen (rechazar). Las preguntas de sí/no se introducen con ob: «Sie fragte, ob der Rat bald entscheide»; las preguntas con W-wort conservan la palabra interrogativa y mandan el verbo al final: «Er fragte, wann der Zug komme». Cuando la forma de KI coincide con el indicativo (plural: sie haben, sie werden), entra el Fallback Konjunktiv II: «Sie sagte, sie hätten die Zahlen nicht»." },
      { t: "Achtung (für Spanischsprachige)", body: "1) El español basta con «dijo que + el mismo tiempo» («dijo que el proyecto está casi listo»); el alemán marca el «según ella» gramaticalmente: «Sie erklärte, das Projekt sei fast fertig». Olvidar el KI en un texto periodístico se nota y resta profesionalidad. 2) El KI no expresa duda ni ironía: solo distancia. «Er sei krank» no cuestiona la enfermedad, la atribuye. 3) El Fallback no es opcional: si KI e indicativo coinciden, se cambia a KII automáticamente (haben → hätten, werden → würden, müssen → müssten). 4) En el habla cotidiana los alemanes usan indicativo o sollen para los rumores («Er soll krank sein»); reserva el KI pulido para la prensa, las actas y el examen." },
      { t: "Im echten Gespräch", body: "Tu primera semana en una redacción: el jefe pregunta «Was hat die Bürgermeisterin gesagt?», y tú respondes con la melodía neutra de notario: «Sie sagte, die Stadt habe die Zahlen noch nicht. Sie betonte, das Projekt sei fast fertig». En la radio, el resumen de una rueda de prensa encadena cuatro o cinco de estas citas con verbos de habla variados, y así el oyente sabe siempre qué es hecho verificado y qué es declaración. Esa precisión es exactamente lo que significa Klartext reden." },
    ],
    esempi: [
      { it: "Der Sprecher sagte, der Zug sei um 14 Uhr angekommen.", es: "El portavoz dijo que el tren había llegado a las 14:00." },
      { it: "Sie erklärte, man habe alle Zahlen sorgfältig geprüft.", es: "Explicó que se habían comprobado todas las cifras con esmero." },
      { it: "Er betonte, die Kosten seien vollständig kontrolliert.", es: "Subrayó que los costes estaban completamente controlados." },
      { it: "Die Journalistin fragte, ob der Rat schon entscheide.", es: "La periodista preguntó si el consejo ya decidía." },
      { it: "Herr Krause fügte hinzu, er habe davon nichts gewusst.", es: "Herr Krause añadió que él no había sabido nada del asunto." },
    ],
    usi: [
      { q: "Cita en indirecta: «Wir haben kein Budget mehr» (die Kollegen, plural).", options: ["Die Kollegen sagten, sie hätten kein Budget mehr.", "Die Kollegen sagten, sie haben kein Budget mehr.", "Die Kollegen sagten, sie seien kein Budget mehr."], answer: 0, explain: "En plural el KI haben coincide con el indicativo, así que entra el Fallback Konjunktiv II: hätten; el indicativo directo queda mal en prensa y sein no concuerda con el objeto." },
      { q: "Pregunta indirecta de sí/no: «Kommt der Minister?» → Sie fragte,", options: ["ob der Minister komme", "dass der Minister kommt", "ob der Minister kommt vielleicht gleich"], answer: 0, explain: "ob introduce la pregunta de sí/no y el verbo cierra la frase en Konjunktiv I (komme); dass afirmaría y el adverbio suelto no construye pregunta indirecta." },
    ],
  },

  "de-cu-b2-05": {
    sezioni: [
      { t: "So funktioniert es", body: "La concesión alemana reparte sus herramientas en tres familias: la conjunción subordinante obwohl, wenn auch y obschon (literario), que mandan el verbo al final: «Obwohl die Plattformen Debatten ermöglichen, vergiften sie oft den Ton»; la preposición con genitivo trotz, ungeachtet, während, aufgrund, infolge: «Trotz aller Kritik gibt es positive Beispiele»; y los adverbios que unen frases principales: dennoch, trotzdem, allerdings. El par aunque…pero se dice con dos alas: «Zwar ist es teuer, aber es lohnt sich». La combinación retórica más elegante: «Wenn auch nicht jeder zuhört, so hoffe ich dennoch auf Wirkung»." },
      { t: "Wann man es benutzt", body: "La concesión honesta es el músculo del ensayo alemán: reconoces el mejor argumento contrario y sales reforzado. En un Radio-Essay o una Erörterung alternarás aunque (obwohl), a pesar de (trotz + Genitiv) y no obstante (dennoch). Registro: trotzdem es neutro y hablado; dennoch es más escrito y elevado, el ideal del ensayo; allerdings añade un matiz de «eso sí». Trotz rige genitivo siempre: trotz des Wetters, trotz der Kosten, trotz aller Kritik; durante se construye igual como preposición: «während der Sendung»." },
      { t: "Achtung (für Spanischsprachige)", body: "1) La gran trampa del subjuntivo español: «aunque sea caro» no se traduce con Konjunktiv; tras obwohl basta el indicativo alemán: «Obwohl es teuer ist». 2) El genitivo tras trotz es la dificultad real: la preposición es fácil, el caso que arrastra no; «trotz dem Wetter» solo se oye en coloquio descuidado y en un ensayo escrito es error. 3) dennoch y trotzdem no son intercambiables en registro: dennoch en una conversación de bar suena a profesor; trotzdem en una tesis suena a poco cuidado. 4) Con zwar el verbo ocupa la posición II: «Zwar ist es teuer», nunca «Zwar es ist teuer»." },
      { t: "Im echten Gespräch", body: "En la redacción de radio, la editora te pide equilibrio: «Die Gegenseite kommt zu kurz». Tu herramienta es la concesión: «Zwar verbinden die Netzwerke Menschen, aber sie spalten die Gesellschaft auch». Para el cierre con dignidad: «Dennoch bin ich zuversichtlich». En conversación, la versión hablada y ligera: «Stimmt schon, aber trotzdem». Y si quieres sonar culto en una discusión de sobremesa: «Wenn auch langsam, so kommt die Veränderung doch»." },
    ],
    esempi: [
      { it: "Zwar ist die Wohnung klein, aber sie liegt extrem zentral.", es: "Ciertamente el piso es pequeño, pero está súper céntrico." },
      { it: "Obwohl es regnete, gingen wir am Sonntag spazieren.", es: "Aunque llovía, salimos a pasear el domingo." },
      { it: "Trotz der hohen Kosten lohnt sich das Projekt.", es: "A pesar de los altos costes, el proyecto merece la pena." },
      { it: "Die Zahlen sprechen dafür; dennoch bleibt die Skepsis groß.", es: "Las cifras juegan a favor; no obstante, el escepticismo sigue siendo grande." },
      { it: "Während der Sendung durfte niemand telefonieren.", es: "Durante la emisión nadie podía telefonear." },
    ],
    usi: [
      { q: "«___ des schlechten Wetters fiel das Fest nicht aus.»", options: ["Trotz", "Obwohl", "Dennoch"], answer: 0, explain: "Delante hay un sustantivo en genitivo, así que hace falta la preposición trotz; obwohl exigiría una frase con verbo al final y dennoch une dos frases principales." },
      { q: "Une estas dos frases para un ensayo escrito elevado: «Die Kritik ist hart. Die Idee bleibt gut.»", options: ["Die Kritik ist hart; dennoch bleibt die Idee gut.", "Die Kritik ist hart, trotzdem bleibt die Idee gut, oder?", "Obwohl die Kritik ist hart, bleibt die Idee gut."], answer: 0, explain: "dennoch es el conector concesivo de estilo escrito elevado, ideal para el ensayo; trotzdem es más hablado y obwohl exige verbo final («hart ist»)." },
    ],
  },

  "de-cu-b2-06": {
    sezioni: [
      { t: "So funktioniert es", body: "Las Modalpartikeln (doch, ja, mal, eben, halt, wohl) no se traducen: colorean. doch insiste o contradice una expectativa («Das ist doch klar»); ja apela a conocimiento compartido («Wir haben ja genug geübt»); mal suaviza el imperativo («Mach mal auf»); eben y halt expresan resignación con humor («Das ist eben so»); wohl marca suposición («Du bist wohl müde»). Van en el Mittelfeld, tras el sujeto, nunca acentuadas y casi nunca al principio de la frase. Se pueden combinar: «Dann sind sie ja mal wach»." },
      { t: "Wann man es benutzt", body: "Son el subtexto del alemán hablado: dominan la conversación cotidiana, la oficina y el humor. La ironía ligera se apoya en ellas más una entonación plana: «Das war ja eine tolle Idee» con melodía monocorde significa exactamente lo contrario. El tag «…, oder?» con contorno descendente pide confirmación; con rango tonal reducido, es broma amable. En una salida de equipo, las partículas marcan complicidad: «Ich übe eben noch für die Meisterschaft», «Jetzt übe ich noch etwas, sonst verliere ich ja meinen Titel»." },
      { t: "Achtung (für Spanischsprachige)", body: "1) No busques equivalente palabra por palabra: donde tú usas entonación y muletillas («ya sabes», «vaya», «mira que»), el alemán tiene esta clase de palabra propia, átona y colocada con precisión. 2) Si las acentúas, dejan de ser partículas y se convierten en adverbios plenos con otro significado: «Ich war schon da» (ya estuve) no es lo mismo que el matizativo schon. 3) Nunca abren la frase (salvo doch como respuesta suelta): el español «ya lo sé» invita a poner ja delante, y eso suena raro: «Ich weiß es ja». 4) En textos escritos formales no tienen cabida: un ensayo o una carta oficial con partículas modales suena tan fuera de lugar como un «vaya» en un contrato." },
      { t: "Im echten Gespräch", body: "El Betriebsausflug es el gimnasio perfecto: cuando la jefa dice «Das nenne ich Teamgeist: Sie verfehlen den Kegel, und die ganze Mannschaft leidet mit», se responde «Danke für die Blumen» y se remata con una partícula: «Ich übe eben noch». Para proponer con humor: «Vielleicht sollten wir das Meeting künftig hier abhalten, oder?». Y para aceptar una pulla sin ofenderse: reconocer la melodía plana del elogio irónico, sonreír y devolverla. Quien lee bien las partículas, entiende la oficina mucho mejor." },
    ],
    esempi: [
      { it: "Das ist doch klar, oder?", es: "Eso está claro, ¿no?" },
      { it: "Mach dir mal keine Sorgen – das wird schon.", es: "No te preocupes, anda; saldrá bien de todos modos." },
      { it: "Das ist eben so – ändern kann man es nicht.", es: "Es que es así; no se puede cambiar." },
      { it: "Du bist wohl müde nach der langen Fahrt?", es: "Parece que estás cansado tras el viaje largo, ¿no?" },
      { it: "Wir haben ja jetzt genug geübt, wie jeder weiß.", es: "Ya hemos entrenado bastante, como todos saben." },
    ],
    usi: [
      { q: "Quieres suavizar una petición entre colegas: «Zeig ___ mir bitte deinen Entwurf.»", options: ["mal", "doch eben", "ja"], answer: 0, explain: "mal convierte la orden en petición casual y amable; doch insiste y ja apela a algo que ambos ya saben, matices que aquí no encajan." },
      { q: "¿Cuál de estas réplicas suena a elogio irónico de oficina?", options: ["Na, das war ja eine tolle Idee, oder?", "Das war eine tolle Idee von dir.", "Ich finde deine Idee wirklich gut."], answer: 0, explain: "La partícula ja más el tag oder? con melodía plana son la firma clásica de la ironía amable; las otras dos son elogios neutros y sinceros." },
    ],
  },

  "de-cu-b2-07": {
    sezioni: [
      { t: "So funktioniert es", body: "nur y erst significan «solo» pero reparten el trabajo: nur limita cantidad o calidad («nur drei von vier antworteten»); erst limita dentro de una serie o del tiempo, con la idea de que aún queda más por venir: «Ich bin erst seit einem Monat hier». fast y beinahe son «casi»: fast es neutro y estadístico («fast 90 Prozent»); beinahe es más elevado y dramático («beinahe ein Unglück»). durchaus no significa «bastante»: refuerza en positivo y con matiz reflexivo, típico del estilo cuidado: «durchaus brauchbar», «durchaus diskutabel». Y la correlación je…desto gradúa proporciones: «Je genauer du prüfst, desto klarer wird der Text»." },
      { t: "Wann man es benutzt", body: "Es el léxico del Lektorat y de la honestidad estadística: cuando no tienes la cifra exacta, escribes «die meisten» en vez de simular precisión con «fast alle». En un texto académico o periodístico gradúas cada afirmación: «Nur wenige – durchaus aber einflussreich». Al reportar casi-accidentes y casi-logros, beinahe aporta el dramatismo justo: «Beinahe hätte die Redaktion nicht korrigiert». Y cada partícula se pega al elemento que limita: muévela y cambia el mensaje." },
      { t: "Achtung (für Spanischsprachige)", body: "1) El español solo tiene «solo» y «casi», así que las distinciones nur/erst y fast/beinahe son invisibles para ti: hay que pensarlas directamente en alemán. 2) durchaus despista a todos: no es «apenas» ni «bastante» al uso; «durchaus brauchbar» es «utilizable sin duda». 3) La posición decide el alcance: «Nur ich lese den Text» (solo yo) ≠ «Ich lese nur den Text» (solo ese texto) ≠ «Ich lese den Text nur» (solo lo leo). 4) En je…desto las dos comparativas van en comparative: «Je länger der Tag, desto müder der Lektor»; olvida una y la estructura se rompe." },
      { t: "Im echten Gespräch", body: "En el taller de edición, la conversación gira sobre matices: «Sind es 90 Prozent oder 99? Wenn Sie keine Zahl haben, schreiben Sie ehrlich die meisten». Para defender tu precisión: «Das ist präzise, aber erst der Satz danach erklärt, warum es wichtig ist». En la sobremesa, los casi suenan mejor con beinahe: «Ich habe beinahe den Zug verpasst». Y para el cierre con elegancia: «Nur wenige – durchaus aber einflussreich»: restricción y refuerzo en tres palabras." },
    ],
    esempi: [
      { it: "Ich bin erst seit einem Monat in der Redaktion.", es: "Solo llevo un mes en la redacción (y aún queda mucho por conocer)." },
      { it: "Beinahe hätte ich den wichtigsten Termin vergessen.", es: "Por poco olvido la cita más importante." },
      { it: "Der Vorschlag ist durchaus diskutabel.", es: "La propuesta es, sin duda, discutible." },
      { it: "Nur drei von vier Nutzern antworteten auf die Umfrage.", es: "Solo tres de cada cuatro usuarios respondieron a la encuesta." },
      { it: "Je präziser die Frage, desto klarer die Antwort.", es: "Cuanto más precisa la pregunta, más clara la respuesta." },
    ],
    usi: [
      { q: "Llevas poco tiempo en el puesto y viene más: «Ich bin ___ zwei Wochen hier.»", options: ["erst", "nur", "durchaus"], answer: 0, explain: "erst sitúa el límite dentro de una serie en curso, con la idea de que lo que viene sigue; nur limitaría sin esa perspectiva." },
      { q: "Quieres decir en un texto cuidado que la crítica es «sin duda razonable»:", options: ["Die Kritik ist durchaus berechtigt.", "Die Kritik ist beinahe berechtigt.", "Die Kritik ist erst berechtigt."], answer: 0, explain: "durchaus refuerza en positivo dentro del estilo cuidado; beinahe la dejaría «a punto de serlo» y erst la retrasaría en el tiempo." },
    ],
  },

  "de-cu-b2-08": {
    sezioni: [
      { t: "So funktioniert es", body: "El pasivo alemán con verbo modal apila dos infinitivos al final: «Die Zahlen müssen bis Montag geprüft werden», «Der Streik kann nicht vermieden werden». Es exacto pero largo, y la prensa lo evita con tres sustitutos compactos: sich lassen + Infinitiv equivale al pasivo con können («Der Streik lässt sich nicht vermeiden»); sein zu + Infinitiv equivale al pasivo con müssen o sollen («Der Antrag ist bis Freitag einzureichen»); y el sufijo -bar crea adjetivos con sentido de können: machbar, lesbar, begehbar, lösbar («Das Gelände ist begehbar»). La negación con un- da el contrario: unüberquerbar, unmöglich." },
      { t: "Wann man es benutzt", body: "Dominan los titulares, los avisos oficiales y las instrucciones técnicas: «Brücke nur mit Ticket zu überqueren», «Altglas ist an jedem Supermarkt abzugeben». En la Redaktionskonferenz se prefieren porque ahorran espacio y suenan activos: Platz ist Geld. En el lenguaje de las normas y contratos, sein zu marca obligaciones elegantemente: «Die Unterlagen sind vorab einzureichen». Y -bar convierte verbos en adjetivos devaluados de burocracia: «Die Datei ist nicht lesbar»." },
      { t: "Achtung (für Spanischsprachige)", body: "1) El espejo con el español ayuda: tu «se puede evitar» es exactamente «lässt sich vermeiden» y tu «-ble» es «-bar»; las trampas están en los detalles. 2) sein zu sorprende por su matiz de obligación: «ist zu überqueren» no significa que se pueda cruzar, sino que hay que cruzarlo; solo la negación invierte el sentido («ist nicht zu ändern» = no se puede cambiar). 3) -bar solo se forma sobre verbos transitivos: schlafen no genera «schlafbar»; machbar y lesbar sí existen porque machen y lesen llevan objeto. 4) La posición del sich en sich lassen: justo tras el sujeto («Das Problem lässt sich lösen»), no al final." },
      { t: "Im echten Gespräch", body: "En la conferencia de redacción matinal se analizan los titulares del día con estas gafas: «Schlagzeile drei: lässt sich oder ist zu?». Para proponer cambios: «Lässt sich der Satz kürzen?», y para aplazar con estilo: «Das ist noch zu prüfen». En la vida cotidiana alemana los lees en cada carta oficial y en cada cartel del municipio, y en la oficina te salvan en los correos: «Die Datei ließe sich öffnen, sie ist einfach nicht lesbar»." },
    ],
    esempi: [
      { it: "Der Streik lässt sich nicht vermeiden.", es: "La huelga no se puede evitar." },
      { it: "Der Antrag ist bis Freitag einzureichen.", es: "La solicitud debe presentarse antes del viernes." },
      { it: "Das Gelände ist nur bei gutem Wetter begehbar.", es: "El recinto solo es transitable con buen tiempo." },
      { it: "Die Rechnungen müssen heute noch verschickt werden.", es: "Las facturas aún deben enviarse hoy." },
      { it: "Dieser Fehler lässt sich leicht korrigieren – er ist korrigierbar.", es: "Este error se corrige con facilidad: es corregible." },
    ],
    usi: [
      { q: "Titular: «la nueva norma puede consultarse online». ¿Qué versión encaja?", options: ["Neue Regeln lassen sich online prüfen.", "Neue Regeln sind online zu prüfen.", "Neue Regeln sind online prüfbar geworden."], answer: 0, explain: "La posibilidad es pasivo con können, y su sustituto natural es sich lassen; sein zu expresaría obligación y sonaría a que hay que consultarlas." },
      { q: "Aviso oficial: «El formulario debe entregarse firmado».", options: ["Das Formular ist unterschrieben abzugeben.", "Das Formular lässt sich unterschrieben abgeben.", "Das Formular ist unterschrieben abgebbar."], answer: 0, explain: "La obligación pide sein zu + infinitivo al final (abzugeben); la segunda diría que «se puede» entregar y la tercera usa un adjetivo en -bar que no existe para abgeben." },
    ],
  },

  "de-cu-b2-09": {
    sezioni: [
      { t: "So funktioniert es", body: "El marco de la carta formal es fijo: Betreff (el asunto, en negrita encima), Anrede con coma («Sehr geehrte Damen und Herren,» si no conoces el nombre; «Sehr geehrte Frau Berger,» si lo conoces), cuerpo y Grußformel («Mit freundlichen Grüßen» seguida directamente de la firma, sin coma). El cuerpo sigue un orden ritual: motivo («Hiermit reiche ich Reklamation ein»), hechos verificables en orden cronológico, exigencia con plazo («Ich setze Ihnen eine Frist bis zum 15. April») y cortesía final con Konjunktiv II («Für eine zeitnahe Antwort wäre ich Ihnen sehr dankbar»). El estilo formal comprime con atributos extendidos: «Die am 3. März gelieferte Waschmaschine wies einen Defekt auf»." },
      { t: "Wann man es benutzt", body: "Reclamaciones (Reklamation), renuncias y cancelaciones (Kündigung), cartas a autoridades: Alemania sigue exigiendo papel para los actos con consecuencias jurídicas, y un Einschreiben con acuse de recibo vale más que mil llamadas. La sustantivación del participio (das Kleingedruckte, die Gelieferte) y los sustantivos débiles de la n-Deklination (der Kunde → des Kunden, dem Kunden) aparecen en cada línea de este registro. La norma DIN 5008 regula hasta los milímetros del formato comercial: fecha, Betreff y firma tienen su sitio exacto." },
      { t: "Achtung (für Spanischsprachige)", body: "1) Tu «Estimados señores:» lleva dos puntos y mayúscula inicial; el alemán lleva coma y la palabra siguiente en minúscula: «Sehr geehrte Damen und Herren, hiermit reiche ich ein». 2) Tras «Mit freundlichen Grüßen» no va coma: la firma va directamente debajo; tu «Atentamente,» español te va a tentar toda la vida. 3) La cortesía del KII no es adorno: «wäre ich Ihnen dankbar» es la fórmula estándar; «ich werde dankbar sein» suena a exigencia. 4) La n-Deklination se olvida siempre: der Kunde es débil y añade -n en todos los casos menos el nominativo singular: «Ich schreibe Ihnen als langjähriger Kunde Ihres Hauses» funciona, pero «dem Kunde» es error: dem Kunden." },
      { t: "Im echten Gespräch", body: "Cuando la reclamación pasa al teléfono, el ritual se traslada a la voz: «Guten Tag, ich hätte eine Frage zu meiner Reklamation vom 3. März» – el KII de cortesía abre la llamada. Los hechos se enumeran con tres golpes rítmicos: «Bestellnummer, Datum und Mängel», con la caída en el último. Y si la empresa se demora, la frase mágica es amable y firme a la vez: «Ich setze Ihnen gerne eine Frist – bis zum 15. April wäre mir recht»." },
    ],
    esempi: [
      { it: "Sehr geehrte Damen und Herren, hiermit reiche ich fristgerecht Reklamation ein.", es: "Muy señores nuestros: por la presente presento reclamación dentro de plazo." },
      { it: "Die am 3. März gelieferte Waschmaschine wies bereits beim ersten Betrieb einen Defekt auf.", es: "La lavadora entregada el 3 de marzo presentó ya en el primer uso un defecto." },
      { it: "Ich setze Ihnen eine Frist bis zum 15. April und wäre Ihnen für eine zeitnahe Antwort dankbar.", es: "Le fijo un plazo hasta el 15 de abril y le agradecería una respuesta pronta." },
      { it: "Mit freundlichen Grüßen, Alejandro Pérez", es: "Atentamente, Alejandro Pérez." },
      { it: "Als langjähriger Kunde Ihres Hauses bitte ich um eine faire Lösung.", es: "Como cliente de muchos años de su empresa, pido una solución justa." },
    ],
    usi: [
      { q: "¿Cómo continúa correctamente? «Sehr geehrte Frau Berger, ___ bitte ich um Rückmeldung.»", options: ["hiermit", "Hiermit", "hier Mit"], answer: 0, explain: "Tras la coma de la Anrede, la primera palabra va en minúscula: hiermit; la mayúscula o la separación son fallos de formato." },
      { q: "Quieres comprimir en estilo formal «die Waschmaschine, die am 3. März geliefert wurde»:", options: ["die am 3. März gelieferte Waschmaschine", "die gelieferte am 3. März Waschmaschine", "die am 3. März liefernde Waschmaschine"], answer: 0, explain: "El atributo extendido pone el participio II con su circunstancia delante del sustantivo; liefernde sería participio I («que entrega») y cambiaría el sentido." },
    ],
  },

  "de-cu-b2-10": {
    sezioni: [
      { t: "So funktioniert es", body: "La cadena elegante del desacuerdo tiene tres eslabones: Einräumung (concedes el mejor argumento contrario: «Zugegeben, die Übergangszeit ist hart», «Das mag stimmen», «Ich räume ein, dass die Kosten hoch sind»), pivote (dennoch, jedoch, allerdings, dagegen) y Gegengrund (tu argumento). Los abridores corteses piden la palabra sin agredir: «Darf ich kurz widersprechen?», «Da sehe ich das anders». Las condiciones convierten la oposición en propuesta: solange y sofern («siempre que»), y es sei denn introduce la excepción que lo cambiaría todo: «Wir testen sechs Monate, es sei denn, der Rat lehnt ab». La rectificación usa nicht…sondern: «Nicht weniger Platz, sondern eine andere Nutzung»." },
      { t: "Wann man es benutzt", body: "En un Runder Tisch, una reunión o una negociación salarial: cada vez que discrepar directo cerraría oídos. widersprechen (discrepar) va con dativo: «Da muss ich Ihnen widersprechen»; widerlegen (refutar con pruebas) promete más: «Studien widerlegen diese Sorge». La condición sofern/solange abre la puerta al acuerdo: «Ich bin dabei, sofern die Anwohner mitentscheiden». Y la concesión con pivote es el gesto que hace parecer souverän a quien la usa: quien concede parece seguro de sí; quien solo bloquea, parece débil." },
      { t: "Achtung (für Spanischsprachige)", body: "1) Un «Nein, das ist falsch» desnudo se siente en una mesa alemana como una bofetada: la Streitkultur exige criticar la cuestión, nunca a la persona (sachlich bleiben); tu tendencia natural a suavizar con un chiste puede interpretarse como evasión: concede y contradice, con palabras. 2) widersprechen rige dativo: «Ich widerspreche Ihnen», nunca «Ich widerspreche Sie». 3) einräumen es separable: «Ich räume ein, dass…»; el prefijo se va al final. 4) es sei denn significa «a menos que», no «es decir»: introduce la excepción, y si lo usas como explicación inviertes el sentido de la frase entera." },
      { t: "Im echten Gespräch", body: "El turno perfecto en una mesa redonda dura veinte segundos: «Darf ich kurz widersprechen? Zugegeben, die Übergangszeit wird hart für den Einzelhandel. Dennoch zeigen Erfahrungswerte: autofreie Innenstädte beleben das Gewerbe. Ich schlage einen Test über sechs Monate vor – sofern die Anwohner ordentlich mitentscheiden». El moderador lo agradece, porque la cadena concesión-pivote-propuesta deja el debate avanzado. Y si te interrumpen, la frase que recupera la palabra sin agresividad es: «Darf ich meinen Gedanken zu Ende bringen?»." },
    ],
    esempi: [
      { it: "Das mag für Großstädte stimmen; bei uns sieht es anders aus.", es: "Eso valdrá para las grandes ciudades; aquí la cosa es distinta." },
      { it: "Zugegeben, das Projekt ist teuer; dennoch wiegen die Vorteile schwerer.", es: "Concedido, el proyecto es caro; no obstante, pesan más las ventajas." },
      { it: "Da muss ich Ihnen leider widersprechen.", es: "Ahí tengo que discrepar con usted, lo siento." },
      { it: "Ich bin dabei, sofern die Anwohner mitentscheiden.", es: "Cuento con ello, siempre que los vecinos decidan también." },
      { it: "Wir testen die Zone sechs Monate – es sei denn, der Rat lehnt ab.", es: "Probaremos la zona seis meses, a menos que el consejo lo rechace." },
    ],
    usi: [
      { q: "Quieres discrepar cortésmente en una mesa redonda. ¿Con qué abres?", options: ["Darf ich kurz widersprechen?", "Das ist falsch!", "Ich habe nichts mehr zu sagen."], answer: 0, explain: "La pregunta cortés pide la palabra sin agredir a la persona; el «Das ist falsch» desnudo rompe la Streitkultur y el silencio abandona el debate." },
      { q: "«Ich räume ___, dass die Kosten hoch sind.»", options: ["ein", "auf", "aus"], answer: 0, explain: "einräumen (conceder) es un verbo separable: el prefijo ein cierra la frase antes de dass; auf- y aus- formarían otros verbos." },
    ],
  },

  "de-cu-b2-11": {
    sezioni: [
      { t: "So funktioniert es", body: "El alemán de oficina traga préstamos ingleses a diario: das Meeting, die Deadline, das Feedback, das Update, das Brainstorming, das Follow-up, das Onboarding, der Stand-up. El género es memoria pura con tendencias: las palabras en -ing suelen ser das, die Deadline es die, y algunas vacilan (die/das E-Mail). Los préstamos verbalizados se conjugan como verbos alemanes regulares: ich update, du mailst, wir downloaden. En los compuestos mixtos, la parte inglesa se une con guion a la alemana: das Update-Meeting, die Feedback-Kultur, der Onboarding-Prozess." },
      { t: "Wann man es benutzt", body: "La clave sociolingüística es la alternancia: en el equipo joven de una start-up, el Denglisch es lengua franca y señal de pertenencia; ante inversores tradicionales, bancos, notarios o la Amt, vuelve el alemán serio: der Termin (la fecha), die Rückmeldung (el feedback), die Besprechung (la reunión). Das Protokoll, el acta, no tiene sustituto inglés asentado: es la institución alemana por excelencia, memoria escrita de cada reunión con acuerdos, responsables y plazos. Y der Feierabend es sagrado: cuando llega, la oficina se vacía de verdad." },
      { t: "Achtung (für Spanischsprachige)", body: "1) Cuidado con los falsos anglicismos: das Handy es el móvil, der Beamer es el proyector, das Public Viewing es el visionado público en pantalla grande: palabras que parecen inglesas pero que un angloparlante no entiende. 2) El género no se deduce del inglés: apréndelo junto a la palabra (die Deadline, das Meeting); cambiarlo se oye inmediatamente. 3) Los préstamos-verbos se conjugan a la alemana: «Ich update das Spreadsheet bis Feierabend», no «I update». 4) No mezcles registros: un correo al Ordnungsamt con «Sorry für das Delay» te costará la credibilidad; escribe Verspätung." },
      { t: "Im echten Gespräch", body: "El Daily de la start-up berlinesa dura diez minutos y tiene su liturgia: gestern, heute, Blocker, y la regla «Kein Update ohne To-do». Se participa con naturalidad: «Ich update das Deck bis Donnerstag und brauche Feedback von den Entwicklern». Cuando entra un inversor tradicional o llega un correo de la Krankenkasse, el mismo equipo cambia de registro sin darse cuenta: «Die Besprechung wurde verschoben; die Rückmeldung folgt schriftlich». Dominar ese interruptor es dominar el alemán profesional." },
    ],
    esempi: [
      { it: "Die Deadline für den Pitch ist Freitag – bitte einhalten.", es: "La fecha límite del pitch es el viernes: respétenla, por favor." },
      { it: "Ich schicke dir gleich das Protokoll vom gestrigen Meeting.", es: "Te envío enseguida el acta de la reunión de ayer." },
      { it: "Ohne Follow-up kein Fortschritt.", es: "Sin seguimiento no hay progreso." },
      { it: "Ich update das Spreadsheet bis Feierabend.", es: "Actualizo la hoja de cálculo antes de acabar la jornada." },
      { it: "Gib mir bitte kurz Feedback zum Onboarding-Prozess.", es: "Dame brevemente tu opinión sobre el proceso de acogida." },
    ],
    usi: [
      { q: "Escribes al banco y necesitas decir «el feedback» en registro serio. ¿Qué usas?", options: ["die Rückmeldung", "das Feedbacking", "der Feed"], answer: 0, explain: "Ante bancos, autoridades y registro serio vuelve el alemán: Rückmeldung; el Denglisch queda para el equipo joven y las otras dos no existen." },
      { q: "«___ für den Pitch ist Freitag – bitte einhalten.»", options: ["Die Deadline", "Das Deadline", "Der Deadline"], answer: 0, explain: "die Deadline es femenino, uno de los préstamos de género más estable; das y der delatan a quien no la aprendió con su artículo." },
    ],
  },

  "de-cu-b2-12": {
    sezioni: [
      { t: "So funktioniert es", body: "El Plädoyer se construye como un edificio: Anrede («Hohes Gericht!», «Meine Damen und Herren!»), These (tu posición en una sola frase: «Der Angeklagte ist unschuldig»), Begründung en Säulen o columnas numeradas («Erstens widersprechen sich die Zeugen; zweitens fehlt jedes Motiv; zuletzt zeigt das Gutachten Lücken»), Steigerung (la columna más fuerte se guarda para el final) y Appell (la petición, breve y memorable: «Geben Sie der Freiheit den Vorzug»). Las herramientas retóricas son las de todo B2: la tríada («Zweifel, Motiv, Zeugen»), la antítesis con statt («Freiheit statt Vorschnelligkeit») y la concesión honesta («Zugegeben, Fragen bleiben»). El idioma del tribunal combina indicativo para tus pruebas («Die Zeugin widerspricht sich») y Konjunktiv II para la duda hipotética («Es könnte auch anders gewesen sein»)." },
      { t: "Wann man es benutzt", body: "El patrón Plädoyer sirve para cualquier discurso persuasivo: un moot court, un pitch ante inversores, una defensa de tesis, un brindis. Si citas testigos, entra el Konjunktiv I de la indirekte Rede: «Die Zeugin sagte, sie habe nichts gesehen». Las pausas son parte de la partitura: pausa plena tras la These, pausa larga después del argumento más fuerte, micropausa antes de la palabra clave del Appell, que se entrega más lenta y algo más fuerte: «und deshalb, meine Damen und Herren, Freiheit»." },
      { t: "Achtung (für Spanischsprachige)", body: "1) Tu alegato natural en español es más pasional; el alemán premia la Sachlichkeit: pruebas secas y secuenciadas, y el pathos solo en el Appell final; abrir con emoción te resta credibilidad ante el tribunal. 2) La Steigerung contradice tu instinto del «gancho» inicial: en el alegato alemán el argumento más fuerte va al final, porque el tribunal recuerda lo último que escuchó. 3) El Appell se mide: diez palabras como máximo, con imperativo o antítesis statt; el español tiende a explicar el final y deshacer el efecto. 4) En la tríada, marca los tres picos y deja caída final: «Zweifel, Motiv, Zeugen»; leerla plana destruye la arquitectura." },
      { t: "Im echten Gespräch", body: "La coach te pregunta dónde hacer las pausas y responde con la regla de oro: después de la These, una pausa; después del argumento más fuerte, una larga. El ensayo suena así: «Hohes Gericht! Der Angeklagte ist unschuldig. [Pause] Erstens widersprechen sich die Zeugen. [Pause] Und deshalb: Freiheit». Si te tiembla la voz, no la tape: baja el ritmo, respira y sigue; en el alegato alemán, quien calla con intención, manda. La última frase la fija el tribunal contigo: menos pathos, más Präzision." },
    ],
    esempi: [
      { it: "Hohes Gericht! Der Angeklagte ist unschuldig.", es: "¡Señoría! El acusado es inocente." },
      { it: "Erstens widersprechen sich die Zeugen; zweitens fehlt jedes Motiv.", es: "Primero, los testigos se contradicen; segundo, falta todo móvil." },
      { it: "Zugegeben, Fragen bleiben – doch Fragen sind kein Schuldbeweis.", es: "Concedido, quedan preguntas; pero las preguntas no son prueba de culpa." },
      { it: "Die Zeugin sagte aus, sie habe nichts gesehen.", es: "La testigo declaró que no había visto nada." },
      { it: "Geben Sie der Freiheit den Vorzug – nicht der Vorschnelligkeit.", es: "Den preferencia a la libertad, no a la precipitación." },
    ],
    usi: [
      { q: "¿Dónde colocas tu argumento más fuerte en un Plädoyer alemán?", options: ["Al final, como Steigerung", "Al principio, como gancho", "En la Anrede, para impresionar"], answer: 0, explain: "La Steigerung reserva lo mejor para el final: el tribunal recuerda lo último que escucha; el gancho inicial es un hábito de otros géneros que aquí resta fuerza." },
      { q: "¿Cuál es el Appell más memorable para cerrar?", options: ["Freiheit statt Vorschnelligkeit!", "Ich denke, man könnte vielleicht Freiheit sagen.", "Vorschnelligkeit ist nicht so gut, Freiheit ist besser, finde ich."], answer: 0, explain: "La antítesis con statt condensa el mensaje en dos sustantivos y un golpe; las otras versiones diluyen el llamamiento en explicaciones." },
    ],
  },
};
