import type { CbClozeText } from "../../cambridge";

/* ═══ DE C1 · Cloze readings — 3 por unidad (inferencia léxica) ══════
   Metodología v9.12: el texto en alemán lleva marcadores {1} {2}, que
   el reproductor convierte en huecos; el estudiante deduce la palabra
   por el contexto. Campos: `.it` = alemán de Alemania (C1: Universität,
   Fachpresse, Unternehmen, Medien), `.es` = español. Temas conectados
   con el escenario de cada unidad C1.                                    */

export const DE_CLOZE_C1: Record<string, CbClozeText[]> = {
  "de-cu-c1-01": [
    {
      id: "cz-de-c1-01-1", title: "In der Schreibberatung", titleEs: "En la tutoría de escritura", minutes: 3,
      paragraphs: [
        { it: "Die Sprechstunde der Schreibberatung ist für alle Studierenden offen, die ihre erste Hausarbeit schreiben. Herr Brandes liest die Zusammenfassung still mit, streicht zwei Stellen an und fällt dann sein {1}: «Das ist noch keine Paraphrase, das ist ein Synonymen-Tausch.» Er erklärt geduldig, dass eine ehrliche Paraphrase die Satzstruktur {2} muss und nicht nur einzelne Wörter austauscht.", es: "La consulta de la tutoría de escritura está abierta a todos los estudiantes que escriben su primer trabajo de curso. El señor Brandes lee el resumen en silencio, marca dos pasajes y dicta luego su veredicto: «Esto todavía no es una paráfrasis, es un intercambio de sinónimos». Explica con paciencia que una paráfrasis honesta debe reestructurar la oración y no solo cambiar palabras sueltas." },
        { it: "Die Studentin probiert es sofort: Aus «nach der Auswertung der Daten» wird «nachdem die Daten ausgewertet worden waren». Der Tutor nickt anerkennend und verlangt noch den {3} — den Verweis auf die Quelle mit «vgl.» und Seitenzahl. Ohne Beleg gilt eine sinngemäße {4} in Deutschland schnell als Plagiat, denn die Universitäten prüfen inzwischen jede eingereichte Arbeit mit spezieller {5}.", es: "La estudiante lo prueba en el acto: de «tras la evaluación de los datos» pasa a «una vez que los datos fueron evaluados». El tutor asiente con aprobación y exige además la cita — la referencia a la fuente con «vgl.» y número de página. Sin cita, una reproducción parafraseada vale en Alemania rápidamente como plagio, porque las universidades revisan entretanto cada trabajo entregado con software especializado." },
      ],
      gaps: [
        { options: ["Urteil", "Unfall", "Urlaub"], answer: 0, why: "«Fällt dann sein Urteil»: el tutor dicta su veredicto tras leer y marcar." },
        { options: ["überspringen", "umbauen", "unterschreiben"], answer: 1, why: "La paráfrasis honesta reestructura la oración («die Satzstruktur umbauen»), no solo cambia sinónimos." },
        { options: ["Beleg", "Beton", "Bericht"], answer: 0, why: "El «Verweis auf die Quelle con vgl. y páginas» define la cita de respaldo: el Beleg." },
        { options: ["Wiederholung", "Wiedergabe", "Widerruf"], answer: 1, why: "«sinngemäß» (parafraseada) apunta a la reproducción con otras palabras: Wiedergabe." },
        { options: ["Seife", "Sonate", "Software"], answer: 2, why: "Las universidades revisan cada trabajo con programas especiales de detección: Software." },
      ],
    },
    {
      id: "cz-de-c1-01-2", title: "Der Plagiatsfall", titleEs: "El caso de plagio", minutes: 3,
      paragraphs: [
        { it: "Es begann mit einem seltsamen {1}: Drei Absätze der Bachelorarbeit waren auffällig eleganter als der Rest. Die Prüferin tippte einen der schönen Sätze in die Suchmaschine und fand ihn, Wort für Wort, in einem Fachartikel von 2011. Der Student hatte nicht einmal die {2} verändert; er hatte kopiert und gehofft, dass es niemand {3}.", es: "Todo empezó con un hallazgo extraño: tres párrafos del trabajo de fin de grado eran notablemente más elegantes que el resto. La examinadora tecleó una de las frases bonitas en el buscador y la encontró, palabra por palabra, en un artículo especializado de 2011. El estudiante no había modificado siquiera la estructura; había copiado y esperado que nadie lo notara." },
        { it: "Die Folgen waren hart: Die Arbeit wurde als {4} eingestuft und gilt als nicht bestanden. Der Student musste das Modul wiederholen und einen Essay über gutes wissenschaftliches Schreiben verfassen — eine Ironie, die er kaum {5} fand. Sein Fehler war kein Einzelfall: Die Tutorien der Schreibberatung sind seit Jahren ausgebucht, und niemand beschwert sich darüber.", es: "Las consecuencias fueron duras: el trabajo fue clasificado como plagio y cuenta como suspenso. El estudiante tuvo que repetir el módulo y redactar un ensayo sobre la buena escritura académica — una ironía que apenas encontró graciosa. Su error no fue un caso aislado: las tutorías de escritura llevan años completas, y nadie se queja de ello." },
      ],
      gaps: [
        { options: ["Befund", "Brief", "Bonus"], answer: 0, why: "El contraste entre párrafos elegantes y el resto del trabajo produce un descubrimiento: el Befund." },
        { options: ["Handschrift", "Notenskala", "Satzstruktur"], answer: 2, why: "Copiar «palabra por palabra» implica que ni siquiera cambió la estructura de la oración." },
        { options: ["bemerkt", "bezahlt", "gebeten"], answer: 0, why: "Copió y esperó que nadie lo notara: dass es niemand bemerkt." },
        { options: ["Patent", "Plagiat", "Paket"], answer: 1, why: "Copiar sin citar lleva a que el trabajo sea clasificado como plagio." },
        { options: ["komisch", "körperlich", "kommunal"], answer: 0, why: "Una «Ironie» solo puede ser encontrada divertida: komisch." },
      ],
    },
    {
      id: "cz-de-c1-01-3", title: "Die Kunst der Zusammenfassung", titleEs: "El arte del resumen", minutes: 3,
      paragraphs: [
        { it: "Eine gute Zusammenfassung ist kein {1} gegen die Uhr: Sie kürzt nicht, indem sie Sätze wegwirft, sondern indem sie den Kern eines Textes mit eigenen Worten neu baut. Der erste Schritt ist das genaue {2}: Was will die Autorin zeigen, in welchen Schritten argumentiert sie? Erst wer einen Text verstanden hat, darf ihn verkürzen — alles andere ist Kopieren mit Umweg.", es: "Un buen resumen no es una carrera contrarreloj: no abrevia tirando frases, sino reconstruyendo con palabras propias el núcleo de un texto. El primer paso es la lectura exacta: ¿qué quiere demostrar la autora, en qué pasos argumenta? Solo quien ha entendido un texto puede acortarlo — todo lo demás es copiar con rodeo." },
        { it: "Profis arbeiten in drei Durchgängen: erst Unterstreichen und Randnotizen, dann der rote Faden in Stichworten, erst am Ende der Fließtext. Wer zwischendurch zu früh abschreibt, produziert ungewollt ein {3} des Originals. Und am Schluss steht der Verweis: Auch die kürzeste {4} nennt ihre Quelle mit «vgl.» — denn die Kürze einer Idee ändert nichts an ihrem {5}.", es: "Los profesionales trabajan en tres pasadas: primero subrayar y notas al margen, después el hilo conductor en palabras clave y solo al final el texto corrido. Quien copia demasiado pronto en el proceso produce sin querer una copia del original. Y al final va la referencia: también el resumen más breve cita su fuente con «vgl.» — porque la brevedad de una idea no cambia a quién pertenece." },
      ],
      gaps: [
        { options: ["Wettschwimmen", "Wettrennen", "Wetterbericht"], answer: 1, why: "«Gegen die Uhr» (contrarreloj) apunta a una carrera: Wettrennen." },
        { options: ["Lesen", "Rechnen", "Schreiben"], answer: 0, why: "Las preguntas «¿qué quiere mostrar, cómo argumenta?» describen la lectura exacta." },
        { options: ["Abbild", "Gegenteil", "Vorwort"], answer: 0, why: "Copiar demasiado pronto produce sin querer una copia del original: ein Abbild." },
        { options: ["Übersetzung", "Vorlesung", "Zusammenfassung"], answer: 2, why: "El texto entero trata del resumen; «auch die kürzeste» retoma el término." },
        { options: ["Besitzer", "Preis", "Alter"], answer: 0, why: "«Nennt ihre Quelle»: la brevedad no cambia a quien pertenece la idea." },
      ],
    },
  ],

  "de-cu-c1-02": [
    {
      id: "cz-de-c1-02-1", title: "Das Homeoffice-Experiment", titleEs: "El experimento del teletrabajo", minutes: 3,
      paragraphs: [
        { it: "Ein mittelständischer Betrieb in Köln führt ein Experiment durch: Ein Jahr lang dürfen zweihundert Beschäftigte drei Tage pro Woche im Homeoffice arbeiten. Nach dem halben Jahr legt die Personalleiterin eine erste {1} vor: Die Produktivität ist leicht gestiegen, die Krankheitstage sind gesunken, und die {2} der Mitarbeitenden berichtet von mehr Ruhe beim konzentrierten Arbeiten.", es: "Una empresa mediana de Colonia realiza un experimento: durante un año, doscientos empleados pueden trabajar tres días por semana en teletrabajo. Al cumplirse medio año, la directora de personal presenta un primer balance: la productividad ha subido ligeramente, los días de baja han bajado, y la encuesta de los empleados reporta más tranquilidad para el trabajo concentrado." },
        { it: "Doch es gibt auch Gegentöne. Einige Teams klagen über den {3} des persönlichen Austauschs, und zwei Führungskräfte sagen offen, dass ihnen die Kontrolle fehlt. Die Geschäftsführung wägt ab wie in einer {4}: Sie sammelt Argumente, bevor sie urteilt. Am Ende steht kein Sieger, sondern eine {5} — zwei Tage Homeoffice, verbindliche Kernzeiten und ein gemeinsamer Bürotag für alle Teams.", es: "Pero también hay voces en contra. Algunos equipos se quejan de la pérdida del intercambio personal, y dos directivos dicen abiertamente que echan de menos el control. La dirección pondera como en una disertación dialéctica: reúne argumentos antes de juzgar. Al final no hay vencedor, sino una síntesis: dos días de teletrabajo, horarios núcleo vinculantes y un día de oficina compartido para todos los equipos." },
      ],
      gaps: [
        { options: ["Bilanz", "Prognose", "Beschwerde"], answer: 0, why: "Presenta resultados tras medio año: cifras ya observadas, no una previsión ni una queja." },
        { options: ["Wanderung", "Umfrage", "Vermutung"], answer: 1, why: "«Berichtet von mehr Ruhe»: lo que reportan los empleados es una encuesta." },
        { options: ["Gewinn", "Zuwachs", "Verlust"], answer: 2, why: "«Klagen» (se quejan) del intercambio personal que ya no hay: pérdida." },
        { options: ["Erörterung", "Diktatur", "Lotterie"], answer: 0, why: "«Wägt ab» y «sammelt Argumente, bevor sie urteilt»: el método de la Erörterung dialéctica." },
        { options: ["Katastrophe", "Rechnung", "Synthese"], answer: 2, why: "«Kein Sieger, sondern» + la solución intermedia de dos días: la síntesis del esquema dialéctico." },
      ],
    },
    {
      id: "cz-de-c1-02-2", title: "Die Erörterung aus der Schule", titleEs: "La argumentación dialéctica de la escuela", minutes: 3,
      paragraphs: [
        { it: "Wer in Deutschland das Abitur macht, begegnet ihr früher oder später: der dialektischen Erörterung. Erst die {1} mit ihren stärksten Argumenten, dann die {2} mit den Einwänden, am Ende die eigene Meinung — dieses Gerüst sitzt bei Millionen von Abiturienten im Muskelgedächtnis. Wer die Reihenfolge vertauscht, verliert Punkte, noch bevor ein Inhalt geprüft wird.", es: "Quien hace el Abitur en Alemania se topa antes o después con ella: la argumentación dialéctica. Primero la tesis con sus argumentos más fuertes, luego la antítesis con las objeciones, al final la opinión propia — este andamiaje está en la memoria muscular de millones de bachilleres. Quien invierte el orden pierde puntos antes incluso de que se revise el contenido." },
        { it: "Der Clou ist die {3}: Wer sie überspringt und sofort seine Meinung sagt, wirkt voreingenommen. Lehrkräfte sprechen vom roten {4}, der durch den ganzen Text laufen muss — ohne ihn zerfällt der Essay in zwei Schachteln mit Argumenten. Und für fremde Stimmen im eigenen Text gibt es den Konjunktiv I: «Der Kritiker führt an, Homeoffice {5} die Kreativität» — die zitierte Stimme bleibt so hörbar als Stimme.", es: "La clave está en la ponderación: quien la salta y da su opinión de inmediato parece parcial. Los profesores hablan del hilo conductor que debe atravesar todo el texto — sin él, el ensayo se desmorona en dos cajas de argumentos. Y para las voces ajenas en el propio texto existe el Konjunktiv I: «El crítico aduce que el teletrabajo mengua la creatividad» — la voz citada así se mantiene audible como voz." },
      ],
      gaps: [
        { options: ["These", "Antithese", "Synthese"], answer: 0, why: "El orden fijo es These → Antithese → opinión propia: la primera con los argumentos más fuertes." },
        { options: ["Synthese", "Antithese", "These"], answer: 1, why: "A la tesis le siguen los Einwände (objeciones): esa es la Antithese." },
        { options: ["Abwägung", "Überschrift", "Note"], answer: 0, why: "Saltársela y opinar de inmediato suena parcial: el Clou del género es pesar ambos lados." },
        { options: ["Fenster", "Zaun", "Faden"], answer: 2, why: "«Der rote Faden» es el hilo conductor fijo del ensayo alemán." },
        { options: ["mindere", "mindert", "gemindert"], answer: 0, why: "Tras «führt an» la voz citada va en Konjunktiv I: mindere." },
      ],
    },
    {
      id: "cz-de-c1-02-3", title: "Leserbrief: Bleiben Sie fair", titleEs: "Carta al lector: sean justos", minutes: 3,
      paragraphs: [
        { it: "Zum Artikel über die Rückkehr ins Büro schreibe ich als Betroffener. Zwar haben die Verfasser die Produktionszahlen sauber aufbereitet, doch ihre {1} bleibt einseitig: Sie messen nur Output, nicht aber Erschöpfung, Pendelzeit und Elternschaft. Wer beides {2} will, braucht auch Zahlen zur Lebensqualität — sonst wiegt das Papier auf einer Seite der Waage deutlich schwerer.", es: "Escribo como afectado sobre el artículo del regreso a la oficina. Si bien los autores han depurado bien las cifras de producción, su argumentación sigue siendo unilateral: miden solo rendimiento, pero no agotamiento, tiempo de desplazamiento y maternidad o paternidad. Quien quiera ponderar ambas cosas necesita también datos sobre calidad de vida — de lo contrario, el papel pesa bastante más en un platillo de la balanza." },
        { it: "Unser Betrieb macht es seit einem Jahr vor: zwei Bürotagen, drei Tagen zu Hause, klare {3} für die Erreichbarkeit. Das Ergebnis ist kein Hexenwerk — die Fluktuation sinkt, die {4} wächst. Ich bitte die Redaktion also um eines: die Debatte dialektisch führen und nicht in {5} denken, als gäbe es nur Büro oder nur Wohnzimmer.", es: "Nuestra empresa lo lleva demostrando un año: dos días de oficina, tres en casa, reglas claras de disponibilidad. El resultado no tiene ciencia alguna: la rotación baja, la satisfacción crece. Pido pues a la redacción una sola cosa: llevar el debate dialécticamente y no pensar en casillas, como si solo existiera oficina o solo salón." },
      ],
      gaps: [
        { options: ["Argumentation", "Beleidigung", "Unterschrift"], answer: 0, why: "«Einseitig» y «messen nur Output» critican el razonamiento del artículo: la argumentación." },
        { options: ["ablehnen", "abwägen", "abschreiben"], answer: 1, why: "Ponderar rendimiento Y vida familiar: eso es abwägen, el gesto central de la Erörterung." },
        { options: ["Rechnungen", "Reime", "Regeln"], answer: 2, why: "Disponibilidad clara para dos días de oficina y tres en casa: reglas." },
        { options: ["Zufälle", "Zufriedenheit", "Zeitungen"], answer: 1, why: "Lo contrario de «die Fluktuation sinkt» (la rotación baja): la satisfacción crece." },
        { options: ["Schubladen", "Schlafsäcken", "Schornsteinen"], answer: 0, why: "«Nur Büro oder nur Wohnzimmer» es pensar en casillas binarias: in Schubladen denken." },
      ],
    },
  ],

  "de-cu-c1-03": [
    {
      id: "cz-de-c1-03-1", title: "Drei Minuten im Plenarsaal", titleEs: "Tres minutos en el hemiciclo", minutes: 3,
      paragraphs: [
        { it: "Am Mittwochmorgen ist der Saal noch halb leer, als die Abgeordnete ihre Kurzintervention hält. Die Redezeit beträgt drei Minuten, kontrolliert von der Uhr des Parlamentspräsidenten. Ihr Redenschreiber hat jede {1} auf eine einzige Botschaft getrimmt — nicht mehr Sätze, sondern weniger. Die ersten Worte sind eine {2}, kein Bericht: «Jede vierte Schule in unserem Land hat einen defekten Aufzug.»", es: "El miércoles por la mañana el hemiciclo está todavía medio vacío cuando la diputada pronuncia su intervención breve. El tiempo de palabra es de tres minutos, controlado por el reloj del presidente del Parlamento. Su redactor de discursos ha ajustado cada formulación a un único mensaje: no más frases, sino menos. Las primeras palabras son una cifra, no un informe: «Cada cuarta escuela de nuestro país tiene un ascensor averiado»." },
        { it: "Dann baut sie die Steigerung: erst der Aufzug, dann die Heizung, dann das {3} selbst — eine Klimax, die mit jedem Schritt schwerer wird. Eine {4} Frage lässt den Saal für einen Moment still werden: «Wer von Ihnen möchte in einem Gebäude arbeiten, dessen Treppe bröckelt?» Sie endet mit einer Aufforderung, und die drei Minuten sind genau {5}.", es: "Luego construye la gradación: primero el ascensor, después la calefacción, al final el propio cimiento — un clímax que pesa más con cada paso. Una pregunta retórica deja la sala un instante en silencio: «¿Quién de ustedes querría trabajar en un edificio cuya escalera se desmorona?» Cierra con una exhortación, y los tres minutos se acaban justos." },
      ],
      gaps: [
        { options: ["Finanzierung", "Formulierung", "Feier"], answer: 1, why: "Cada frase ajustada a una sola Botschaft: se recorta la formulación, no el presupuesto." },
        { options: ["Zahl", "Zeile", "Zeitungsanzeige"], answer: 0, why: "«Jede vierte Schule» es una cifra con la que se abre la intervención." },
        { options: ["Fundament", "Fahrrad", "Frühstück"], answer: 0, why: "La Klimax escala: ascensor → calefacción → lo que sostiene el edificio: el cimiento." },
        { options: ["rachsüchtige", "rhetorische", "romantische"], answer: 1, why: "Pregunta que no espera respuesta y deja la sala en silencio: retórica." },
        { options: ["offen", "kostenlos", "um"], answer: 2, why: "«Die drei Minuten sind genau um»: el tiempo de palabra se agota justo." },
      ],
    },
    {
      id: "cz-de-c1-03-2", title: "Die Anapher", titleEs: "La anáfora", minutes: 3,
      paragraphs: [
        { it: "Wer Reden sammelt, findet sie schnell: die Wiederholung am Satzanfang. Der berühmteste Satz dieses Musters wird zitiert, {1} und in Schulen analysiert. Die Anapher ist die älteste Figur der Rede; sie hämmert das Bild Satz für Satz ins {2} des Zuhörers, weil dasselbe Wort am Anfang wie ein Trommelschlag wiederkehrt.", es: "Quien colecciona discursos la encuentra pronto: la repetición al comienzo de la frase. La frase más célebre de este patrón se cita, se parodia y se analiza en las escuelas. La anáfora es la figura más antigua de la oratoria; martillea la imagen frase a frase en la memoria del oyente, porque la misma palabra al inicio regresa como un golpe de tambor." },
        { it: "Aber die Figur hat auch Feinde. In deutschen Parlamenten gilt: Der Sachteil trägt die Rede, nicht das {3}. Wer zu oft wiederholt, wirkt wie ein {4}, der seine Pointe vergessen hat. Gute Redenschreiber dosieren deshalb die Anapher — drei Wiederholungen, dann zurück zu den Zahlen. Der Effekt entsteht gerade durch die {5}: Die Figur wirkt nur, solange sie selten bleibt.", es: "Pero la figura también tiene enemigos. En los Parlamentos alemanes vale: la parte documental sostiene el discurso, no el pathos. Quien repite demasiado parece un orador que olvidó el remate. Por eso los buenos redactores dosifican la anáfora — tres repeticiones y de vuelta a las cifras. El efecto nace precisamente de la moderación: la figura solo funciona mientras siga siendo rara." },
      ],
      gaps: [
        { options: ["bezahlt", "parodiert", "gepflanzt"], answer: 1, why: "Lo que ocurre con las frases célebres: se citan, se imitan con humor y se analizan." },
        { options: ["Gedächtnis", "Gepäck", "Geschirr"], answer: 0, why: "«Hämmert das Bild» frase a frase: lo martillea en la memoria del oyente." },
        { options: ["Papier", "Pathos", "Parkett"], answer: 1, why: "«Der Sachteil trägt die Rede, nicht das Pathos»: la regla alemana contra la emoción desnuda." },
        { options: ["Richter", "Radfahrer", "Redner"], answer: 2, why: "Quien repite demasiado y pierde el remate es el propio orador." },
        { options: ["Sparsamkeit", "Verschwenderung", "Melodie"], answer: 0, why: "«Drei repeticiones, luego cifras» y «solo funciona si es rara»: el efecto nace de la moderación." },
      ],
    },
    {
      id: "cz-de-c1-03-3", title: "Der Redenschreiber", titleEs: "El redactor de discursos", minutes: 3,
      paragraphs: [
        { it: "Sein Büro liegt zwei Etagen über dem Plenarsaal. Der Redenschreiber legt anderen die Worte in den {1}: Seine Auftraggeberin tritt ans Pult, er bleibt unsichtbar. Er kennt den {2} der Frau, für die er schreibt — wo sie atmet, wann sie eine Pause braucht, welche Worte sie niemals sagen würde. Ein Beruf zwischen Handwerk und Menschenkenntnis.", es: "Su despacho está dos plantas por encima del hemiciclo. El redactor de discursos pone las palabras en la boca de otros: su clienta se planta en el atril, él permanece invisible. Conoce la respiración de la mujer para la que escribe — dónde respira, cuándo necesita una pausa, qué palabras jamás diría. Un oficio entre la artesanía y el conocimiento del ser humano." },
        { it: "Der wichtigste Grundsatz des Berufs: Jede Zeile muss vor einem {3} bestehen, nicht vor einem Applaus. Zahlen werden doppelt geprüft, Superlative gemieden, Pathos nur in homöopathischen {4} verabreicht. Am Ende des Tages zählt ein einziges Kriterium: Hat die Rede die {5} bewegt oder nur die Luft im Saal?", es: "El principio más importante del oficio: cada línea debe superar un chequeo de hechos, no un aplauso. Las cifras se comprueban dos veces, los superlativos se evitan, el pathos se administra solo en dosis homeopáticas. Al final del día cuenta un único criterio: ¿movió el discurso a los oyentes o solo al aire de la sala?" },
      ],
      gaps: [
        { options: ["Mund", "Mantel", "Mittelfeld"], answer: 0, why: "«Er bleibt unsichtbar» mientras ella habla: él pone las palabras en la boca de otros." },
        { options: ["Ausweis", "Atem", "Anruf"], answer: 1, why: "«Wo sie atmet, wann sie eine Pause braucht»: el redactor conoce su respiración." },
        { options: ["Faktencheck", "Feiertag", "Fensterrahmen"], answer: 0, why: "«Zahlen werden doppelt geprüft»: cada línea debe superar la verificación de datos." },
        { options: ["Dörfern", "Diktaten", "Dosen"], answer: 2, why: "«Homöopathisch» (homeopático) implica administración en dosis mínimas." },
        { options: ["Zuhörer", "Zeitungen", "Zäune"], answer: 0, why: "El criterio final: si el discurso movió a la audiencia o solo al aire." },
      ],
    },
  ],

  "de-cu-c1-04": [
    {
      id: "cz-de-c1-04-1", title: "An der Kaffeeküche", titleEs: "En la cocina de café", minutes: 3,
      paragraphs: [
        { it: "Nach der Präsentation steht Lena in der Kaffeeküche und rührt ihren Tee, als du reinkommst. «Deine Folien waren ja top», sagt sie, «aber irgendwie hast du wie ein {1} geklungen. Wo waren die Wörtchen wie doch, mal und eben?» Sie lächelt, aber sie meint es ernst: Der Vortrag war korrekt und zugleich {2} — wie ein Menü ohne Salz.", es: "Tras la presentación, Lena está en la cocina del café removiendo su té cuando entras. «Tus diapositivas fueron estupendas, sí», dice, «pero de algún modo sonabas como un Duden. ¿Dónde estaban las palabritas como doch, mal y eben?» Sonríe, pero va en serio: la charla fue correcta y a la vez sosa — como un menú sin sal." },
        { it: "Sie spielt die Szene noch einmal vor: «Schau {3}: Wenn du jemanden einlädst, sag nicht nur ‘Komm vorbei’, sondern ‘Komm {4} einfach vorbei!’ — das eine Wörtchen verändert die Temperatur des Satzes.» Am Ende stellt sie eine {5}: Eine Woche lang sollst du in jeder Unterhaltung genau eine Partikel bewusst setzen. Der Duden wird das überleben.", es: "Vuelve a representar la escena: «Mira: si invitas a alguien, no digas solo ‘ven’, sino ‘¡ven sin compromiso!’ — esa palabrita cambia la temperatura de la frase». Al final propone una apuesta: durante una semana has de poner conscientemente exactamente una partícula en cada conversación. El Duden sobrevivirá a eso." },
      ],
      gaps: [
        { options: ["Duden", "Duschkopf", "Dietrich"], answer: 0, why: "«Perfekt und extraño»: sonar como un artículo del diccionario de referencia, el Duden." },
        { options: ["lebendig", "legal", "leblos"], answer: 2, why: "«Wie ein Menü ohne Salz»: correcto pero sin vida, soso." },
        { options: ["mal", "nie", "gleich"], answer: 0, why: "«Schau mal» es la fórmula suavizada clásica que Lena está enseñando." },
        { options: ["nicht", "doch", "gleich"], answer: 1, why: "La invitación cálida es «Komm doch einfach vorbei!»: doch convierte la orden en invitación." },
        { options: ["Wette", "Wand", "Wurst"], answer: 0, why: "Un reto de una semana con las partículas: Lena propone una apuesta." },
      ],
    },
    {
      id: "cz-de-c1-04-2", title: "Wie ein Artikel aus dem Duden", titleEs: "Como un artículo del Duden", minutes: 3,
      paragraphs: [
        { it: "Es gibt ein Kompliment, das niemand hören will: «Du klangst wie ein Artikel aus dem Duden.» Gemeint ist nicht die {1}, sondern die Perfektion ohne Leben. Wer eine Sprache grammatikalisch beherrscht, aber keine Partikeln setzt, spricht wie ein Buch — die Zuhörer spüren sofort, dass etwas {2}, auch wenn sie es nicht benennen können.", es: "Hay un cumplido que nadie quiere oír: «Sonabas como un artículo del Duden». No se refiere a la corrección, sino a la perfección sin vida. Quien domina una lengua gramaticalmente pero no pone partículas habla como un libro — los oyentes notan enseguida que algo falta, aunque no sepan nombrarlo." },
        { it: "Die kleinen Wörter sind die {3} des gesprochenen Deutsch: «ja» macht aus einer Information etwas Geteiltes, «doch» widerspricht einem stillen Zweifel, «wohl» färbt eine Aussage vorsichtig. Kein Wörterbuch übersetzt sie {4}; man lernt sie im Gespräch, wie man Gewürze beim Kochen lernt — durch {5}, nicht durch Regeln.", es: "Las pequeñas palabras son las especias del alemán hablado: «ja» convierte una información en algo compartido, «doch» contradice una duda silenciosa, «wohl» matiza con cautela un enunciado. Ningún diccionario las traduce sin más; se aprenden en conversación, como se aprenden las especias al cocinar — probando, no con reglas." },
      ],
      gaps: [
        { options: ["Rechtschreibung", "Rechnung", "Ruhe"], answer: 0, why: "El reproche no va contra la ortografía o corrección, sino contra la perfección sin vida." },
        { options: ["steht", "fehlt", "klingt"], answer: 1, why: "Hablar como un libro: los oyentes notan que algo falta." },
        { options: ["Geräte", "Gedichte", "Gewürze"], answer: 2, why: "El propio texto lo compara: como las especias al cocinar." },
        { options: ["einfach", "gerne", "gratis"], answer: 0, why: "Ningún diccionario las traduce sin más: no tienen equivalente directo." },
        { options: ["Prüfen", "Pauken", "Probieren"], answer: 2, why: "«Wie man Gewürze beim Kochen lernt»: probando, no con reglas." },
      ],
    },
    {
      id: "cz-de-c1-04-3", title: "Na ja, fast", titleEs: "Na ja, casi", minutes: 3,
      paragraphs: [
        { it: "Zwei Wörter, unzählige Bedeutungen: «Na ja» kann {1} einlegen (Na ja, ganz so schlimm ist es nicht), Zustimmung bremsen (Na ja, fast) oder Zeit kaufen, wenn die Antwort noch nicht fertig ist. In Kursen für Fortgeschrittene gehören diese {2} zum Pflichtprogramm — sie sind der Beweis, dass man Deutsch nicht nur schreiben, sondern leben kann.", es: "Dos palabras, incontables significados: «Na ja» puede presentar una objeción (na ja, para tan malo no está), frenar un asentimiento (na ja, casi) o ganar tiempo cuando la respuesta aún no está lista. En los cursos para avanzados estas partículas son programa obligatorio — la prueba de que se puede no solo escribir alemán, sino vivirlo." },
        { it: "Der Trick ist die {3}: erst zuhören, dann nachahmen — zuerst eine Partikel pro Tag, nicht zehn. Wer zu viele setzt, klingt wie ein {4}, der sein ganzes Repertoire an einem Abend zeigt. Und eines gilt immer: In der geschriebenen Sprache, von der E-Mail bis zur Hausarbeit, bleiben die Partikeln {5} — ihnen fehlt dort das Lächeln der Stimme.", es: "El truco es la paciencia: primero escuchar, luego imitar — primero una partícula al día, no diez. Quien pone demasiadas suena a artista que muestra todo su repertorio en una sola noche. Y algo vale siempre: en la lengua escrita, del correo electrónico al trabajo de curso, las partículas se quedan fuera — allí les falta la sonrisa de la voz." },
      ],
      gaps: [
        { options: ["Einspruch", "Einkauf", "Einschlafen"], answer: 0, why: "«Ganz so schlimm ist es nicht» matiza la queja: Na ja introduce una objeción suave." },
        { options: ["Prüfungen", "Partikeln", "Partituren"], answer: 1, why: "doch, mal, eben y Na ja: el texto trata de las partículas modales." },
        { options: ["Geduld", "Gewalt", "Geometrie"], answer: 0, why: "«Erst zuhören, dann nachahmen, eine por día»: el método exige paciencia." },
        { options: ["Klempner", "Kassierer", "Künstler"], answer: 2, why: "«Sein ganzes Repertoire an einem Abend»: quien lo muestra todo de golpe es el artista." },
        { options: ["draußen", "oben", "daneben"], answer: 0, why: "En la lengua escrita «les falta la sonrisa de la voz»: quedan fuera." },
      ],
    },
  ],

  "de-cu-c1-05": [
    {
      id: "cz-de-c1-05-1", title: "Im Lektorat", titleEs: "En la corrección de estilo", minutes: 3,
      paragraphs: [
        { it: "Frau Dr. Kessler fährt mit dem Stift über den Entwurf und zeichnet alle «wir» an. «Wer ist dieses Wir?», fragt sie milde. Für das Fachmagazin gilt die eiserne {1}: Die Forschenden verschwinden hinter ihren Ergebnissen. Aus «Wir haben die Schlafqualität gemessen» wird «Die Schlafqualität wurde gemessen», und die Daten der zweiten Studie wurden separat {2}.", es: "La doctora Kessler pasa el bolígrafo por el borrador y marca todos los «wir». «¿Quién es ese nosotros?», pregunta con suavidad. Para la revista especializada vale la regla de hierro: los investigadores desaparecen tras sus resultados. De «medimos la calidad del sueño» pasa a «la calidad del sueño fue medida», y los datos del segundo estudio se recogieron por separado." },
        { it: "Nicht jede Passiv-Kette ist jedoch {3}: Wer alles versachlicht, klingt bald wie ein Behördenschreiben. Die Lektorin zeigt die Ausnahme: eine persönliche {4} im Schlussabsatz darf «ich» sagen — Wissenschaft lebt vom Urteil, solange es als solches gekennzeichnet wird. Am Rand notiert sie noch einen {5} für den Textschluss: «daraus lässt sich schließen, dass» — die Formel transportiert Fazit und Vorsicht zugleich.", es: "Sin embargo, no toda cadena de pasivas es sensata: quien lo objetiviza todo acaba sonando a escrito de oficina. La editora muestra la excepción: una valoración personal en el párrafo final puede decir «yo» — la ciencia vive del juicio, siempre que se marque como tal. Al margen anota todavía una pieza para el cierre: «de ello puede concluirse que» — la fórmula transporta a la vez conclusión y cautela." },
      ],
      gaps: [
        { options: ["Rechnung", "Regel", "Reise"], answer: 1, why: "«Die Forschenden verschwinden»: esa norma inquebrantable es la regla de hierro." },
        { options: ["erhoben", "erzählt", "gekauft"], answer: 0, why: "Los datos de un estudio se recogen: erhoben (Daten erheben)." },
        { options: ["sinnvoll", "kostenlos", "grammatisch"], answer: 0, why: "«Wer alles versachlicht, klingt wie ein Behördenschreiben»: la pasiva constante no siempre es sensata." },
        { options: ["Entschuldigung", "Einschätzung", "Einladung"], answer: 1, why: "El párrafo final que «darf ich sagen» es una valoración personal." },
        { options: ["Baustein", "Bahnhof", "Bericht"], answer: 0, why: "La fórmula «daraus lässt sich schließen» es una pieza fija del cierre: un bloque de construcción." },
      ],
    },
    {
      id: "cz-de-c1-05-2", title: "Der Korrelationsbefund", titleEs: "El hallazgo correlacional", minutes: 3,
      paragraphs: [
        { it: "Schlechter Schlaf, schwaches Gedächtnis: Der Zusammenhang klingt {1}, doch die Forschung mahnt zur Vorsicht. In einer Langzeitstudie wurde die Schlafqualität von tausend Teilnehmenden über sechs Jahre {2}; parallel dazu absolvierten sie jährliche Gedächtnistests. Die Datenlage ist solide — und gerade deshalb lehrreich.", es: "Mal sueño, memoria débil: la relación suena plausible, pero la investigación recomienda prudencia. En un estudio longitudinal se registró durante seis años la calidad del sueño de mil participantes; en paralelo realizaron tests de memoria anuales. La base de datos es sólida — y precisamente por eso aleccionadora." },
        { it: "Das Ergebnis: Wer länger schläft, erinnert {3} Wortlisten — aber der Effekt ist klein, und die Forschenden betonen, es handele sich um einen Korrelationsbefund. Kausalität lässt sich daraus nicht {4}; vielleicht stärkt ein gutes Gedächtnis auch den Schlaf, oder eine dritte {5} wirkt auf beide. Wer populärwissenschaftlich schreibt, muss diese Grenze mitdenken — sonst verkauft er Scheingewissheiten.", es: "El resultado: quien duerme más recuerda más listas de palabras — pero el efecto es pequeño, y los investigadores subrayan que se trata de un hallazgo correlacional. La causalidad no puede deducirse de ello; quizá una buena memoria también fortalezca el sueño, o una tercera variable actúe sobre ambos. Quien escribe divulgación debe tener presente ese límite — de lo contrario vende certezas aparentes." },
      ],
      gaps: [
        { options: ["plausibel", "praktisch", "politisch"], answer: 0, why: "La relación sueño-memoria «suena» convincente a primera vista: plausible." },
        { options: ["erfunden", "erlaubt", "erfasst"], answer: 2, why: "Un estudio de seis años con mil participantes registra la calidad del sueño." },
        { options: ["mehr", "keine", "selbst"], answer: 0, why: "Quien duerme más recuerda más: el efecto existe, aunque pequeño." },
        { options: ["abdrucken", "ableiten", "abschalten"], answer: 1, why: "De una correlación no se puede deducir causalidad: ableiten." },
        { options: ["Variable", "Vorschrift", "Verspätung"], answer: 0, why: "La explicación clásica de la correlación espuria: una tercera variable influye en ambas." },
      ],
    },
    {
      id: "cz-de-c1-05-3", title: "Die unpersönlichen Formeln", titleEs: "Las fórmulas impersonales", minutes: 3,
      paragraphs: [
        { it: "Jede Wissenschaftssprache hat ihre Floskeln — und keine ist so formelhaft wie die deutsche. «Man geht davon aus, dass» klingt zuerst wie {1}, ist aber eine präzise Aussage: Es existiert ein Konsens, aber kein Beweis. Wer die Formeln beherrscht, kann die Sicherheit dosieren wie ein {2} die Strahlendosis — Grammatik als Gradmesser der Gewissheit.", es: "Toda lengua científica tiene sus muletillas — y ninguna es tan formulario como la alemana. «Se parte de la base de que» suena primero a palabrería, pero es un enunciado preciso: existe consenso, pero no prueba. Quien domina las fórmulas puede dosificar la certeza como un radiólogo la dosis de radiación — gramática como medida de la seguridad." },
        { it: "Das Arsenal ist klein und mächtig: «es handelt sich um» klassifiziert, «es gilt zu» mahnt, «daraus lässt sich {3}» schließt. Die Formeln haben etwas Beruhigendes, denn sie entlasten den Einzelnen: Niemand muss mit «ich» hinter einer These stehen, die {4} trägt die Gemeinschaft der Forschenden. Wer sie einmal gehört hat, erkennt sie überall — in Fachartikeln, in Gutachten und im {5}, wenn abends Studien zitiert werden.", es: "El arsenal es pequeño y poderoso: «se trata de» clasifica, «es preciso» apremia, «de ello puede concluirse» cierra. Las fórmulas tienen algo tranquilizador, porque liberan al individuo: nadie tiene que sostener una tesis con un «yo»; la responsabilidad la carga la comunidad investigadora. Quien las ha oído una vez las reconoce en todas partes — en artículos especializados, en dictámenes y en la televisión, cuando por la noche se citan estudios." },
      ],
      gaps: [
        { options: ["Geschwätz", "Geschenk", "Geständnis"], answer: 0, why: "Suena primero a muletilla vacía: a palabrería." },
        { options: ["Radfahrer", "Redakteur", "Radiologe"], answer: 2, why: "Quien dosifica una Strahlendosis (dosis de radiación) es el radiólogo." },
        { options: ["schließen", "schlafen", "schmeißen"], answer: 0, why: "La tríada clásica: klassifiziert, mahnt, schließt — «daraus lässt sich schließen»." },
        { options: ["Verspätung", "Vorlesung", "Verantwortung"], answer: 2, why: "Las fórmulas liberan al individuo: la comunidad investigadora carga la responsabilidad." },
        { options: ["Fernsehen", "Frühstück", "Fahrstuhl"], answer: 0, why: "«Wenn abends Studien zitiert werden»: el lugar donde se citan estudios es la televisión." },
      ],
    },
  ],

  "de-cu-c1-06": [
    {
      id: "cz-de-c1-06-1", title: "Die Generalprobe", titleEs: "El ensayo general", minutes: 3,
      paragraphs: [
        { it: "Der Hörsaal ist leer, nur der Professor sitzt in der dritten Reihe — dort, wo später das {1} sitzen wird. «Fangen Sie an», sagt er, «und vergessen Sie nicht: Die ersten dreißig Sekunden entscheiden, ob man Ihnen zuhört.» Die Stellprobe beginnt. Der Doktorand atmet einmal tief durch und startet nicht mit «Heute möchte ich», sondern mit einer {2}: «In diesem Raum schläft heute Nacht jemand, ohne es zu wissen.»", es: "El aula magna está vacía; solo el profesor ocupa la tercera fila — allí donde luego se sentará el público. «Empiece», dice, «y no olvide: los primeros treinta segundos deciden si le escuchan». La prueba comienza. El doctorando respira hondo una vez y arranca no con «hoy quisiera», sino con una escena: «En esta sala duerme esta noche alguien sin saberlo»." },
        { it: "Vogel unterbricht zweimal: einmal, weil eine Folie zu voll ist — «Was zu viel zeigt, zeigt {3}» — und einmal, weil der Merksatz fehlt. «Nach zwanzig Minuten erinnert sich niemand an Ihre zwölf Folien — nur an einen {4}. Liefern Sie ihn!» Am Ende nickt der Professor und zeigt auf die Uhr: achtzehn Minuten, dreißig Sekunden. In Deutschland endet ein Vortrag {5} — vor der Glocke, nie danach.", es: "Vogel interrumpe dos veces: una, porque una diapositiva está demasiado llena — «lo que muestra demasiado, no muestra nada» — y otra, porque falta la frase-memoria. «A los veinte minutos nadie recuerda sus doce diapositivas — solo una frase. ¡Entréguela!» Al final el profesor asiente y señala el reloj: dieciocho minutos, treinta segundos. En Alemania una charla termina puntual — antes de la campana, nunca después." },
      ],
      gaps: [
        { options: ["Publikum", "Papier", "Protokoll"], answer: 0, why: "El profesor se sienta donde luego se sentará la audiencia de la defensa." },
        { options: ["Tabelle", "Szene", "Definition"], answer: 1, why: "La frase sobre alguien que duerme sin saberlo pinta una escena, no da datos." },
        { options: ["nichts", "alles", "Neues"], answer: 0, why: "Una diapositiva sobrecargada: lo que muestra demasiado no muestra nada." },
        { options: ["Sack", "Satz", "Saft"], answer: 1, why: "El Merksatz que falta: una sola frase es lo que queda de doce diapositivas." },
        { options: ["pünktlich", "niemals", "spät"], answer: 0, why: "Dieciocho minutos y medio de veinte: la charla termina puntual, antes de la campana." },
      ],
    },
    {
      id: "cz-de-c1-06-2", title: "Der Merksatz", titleEs: "La frase-memoria", minutes: 2,
      paragraphs: [
        { it: "Ein guter Merksatz ist wie ein {1}: klein, hart und schwer zu übersehen. Er fasst die Kernbotschaft eines Vortrags in einem einzigen Satz zusammen — ohne {2}, ohne Schachtelsätze, ohne Wenn und Aber. «Ohne Kontrolle kein Vergleich» ist ein solcher Satz; ihn vergisst auch der müdeste Zuhörer nicht mehr.", es: "Una buena frase-memoria es como un monumento: pequeña, dura y difícil de pasar por alto. Condensa el mensaje central de una charla en una sola frase — sin extranjerismos, sin oraciones encajadas, sin peros. «Sin grupo de control no hay comparación» es una frase así; ni el oyente más cansado la olvida." },
        { it: "Die Herstellung ist Handwerk. Zuerst wird die Botschaft auf ein {3} reduziert: ein Substantiv, ein Verb, eine Negation. Dann probiert der Redner zehn Varianten laut aus, bis eine davon {4} — kurz genug für die Tafel, klar genug für die letzte Reihe. Der Merksatz steht am Anfang als Versprechen und am Ende als {5}; was zwischen beiden liegt, ist der Beweis.", es: "Su fabricación es artesanía. Primero el mensaje se reduce a un mínimo: un sustantivo, un verbo, una negación. Luego el orador prueba en voz alta diez variantes hasta que una encaja — corta para la pizarra, clara para la última fila. La frase-memoria aparece al principio como promesa y al final como conclusión; lo que hay entre ambas es la prueba." },
      ],
      gaps: [
        { options: ["Denkmal", "Dialog", "Dienstplan"], answer: 0, why: "«Klein, hart und schwer zu übersehen»: compacto y visible como un monumento." },
        { options: ["Freunde", "Fremdwörter", "Fragezeichen"], answer: 1, why: "Una frase-memoria evita lo ornamentado: ni extranjerismos ni subordinadas encajadas." },
        { options: ["Minimum", "Ministerium", "Mineral"], answer: 0, why: "«Ein Substantiv, ein Verb, eine Negation»: la reducción a lo mínimo." },
        { options: ["steht", "schwebt", "sitzt"], answer: 2, why: "La variante que funciona «encaja»: corta para la pizarra y clara para la última fila." },
        { options: ["Fazit", "Fassade", "Feiertag"], answer: 0, why: "Al final del Vortrag el Merksatz vuelve como cierre: la conclusión." },
      ],
    },
    {
      id: "cz-de-c1-06-3", title: "Die Tagung in Leipzig", titleEs: "El congreso en Leipzig", minutes: 3,
      paragraphs: [
        { it: "Zwischen den Vorträgen der Tagung liegt eine halbe Stunde — die wichtigste Zeit des Tages, wie erfahrene Konferenzbesucher wissen. Im Foyer entstehen hier die {1}, die später in Fachartikeln zitiert werden: ein Nicken beim Kaffee, drei Sätze an der Posterwand, ein {2} mit der Forscherin, deren Namen man bisher nur aus Literaturverzeichnissen kannte.", es: "Entre las charlas del congreso hay media hora — el tiempo más importante del día, como saben los congresistas veteranos. En el vestíbulo nacen aquí los contactos que luego se citan en los artículos especializados: un gesto de asentimiento ante el café, tres frases junto al panel, una conversación con la investigadora cuyo nombre hasta ahora solo se conocía de las bibliografías." },
        { it: "Am Nachmittag hält eine Nachwuchswissenschaftlerin ihren ersten Vortrag — und beginnt, gegen alle Regeln, mit «Heute möchte ich Ihnen». Der Saal zuckt nicht; die Deutschen sind {3}. Aber nach drei Minuten kommt die Rettung: sie wagt eine {4}, eine einzige Geschichte aus dem Labor — und der Saal wacht auf. Am Ende applaudiert man höflich, und der Professor aus der ersten Reihe stellt die eine {5}, an der sich der ganze Vortrag messen lassen muss.", es: "Por la tarde una investigadora novel da su primera charla — y empieza, contra toda regla, con «hoy quisiera mostrarles». La sala no se inmuta; los alemanes son indulgentes. Pero a los tres minutos llega el rescate: se atreve con una historia, una única anécdota del laboratorio — y la sala despierta. Al final se aplaude con cortesía, y el profesor de la primera fila formula la única pregunta frente a la cual debe medirse toda la charla." },
      ],
      gaps: [
        { options: ["Kontakte", "Konflikte", "Konten"], answer: 0, why: "Un gesto ante el café y tres frases junto al panel generan lo que luego se cita: contactos." },
        { options: ["Gewitter", "Gespräch", "Girocard"], answer: 1, why: "«Drei Sätze an der Posterwand»: el intercambio con la investigadora es una conversación." },
        { options: ["gnädig", "gnadenlos", "gespannt"], answer: 0, why: "La sala «no se inmuta» ante la apertura prohibida: los alemanes son indulgentes." },
        { options: ["Gleichung", "Geschichte", "Garderobe"], answer: 1, why: "«Eine einzige Geschichte aus dem Labor»: la anécdota que despierta a la sala." },
        { options: ["Frage", "Frist", "Fahrt"], answer: 0, why: "El profesor de la primera fila «stellt» lo que mide toda la charla: la pregunta." },
      ],
    },
  ],

  "de-cu-c1-07": [
    {
      id: "cz-de-c1-07-1", title: "Der Brief der Ausländerbehörde", titleEs: "La carta de la oficina de extranjería", minutes: 3,
      paragraphs: [
        { it: "Der Brief begann wie immer: «Sehr geehrte Damen und Herren, im Zuge der Prüfung Ihres Antrags auf Verlängerung der Aufenthaltserlaubnis wird um {1} folgender Nachweise gebeten.» Drei Nominalketten, ein Verb am Satzende — das Amtsdeutsch hat seine eigene {2}, und wer sie nicht kennt, hält jedes Schreiben für eine Drohung.", es: "La carta empezaba como siempre: «Muy estimadas damas y señores: en el marco de la revisión de su solicitud de prórroga del permiso de residencia se ruega la presentación de los siguientes justificantes». Tres cadenas nominales y un verbo al final — el alemán administrativo tiene su propia gramática, y quien no la conoce toma cada escrito por una amenaza." },
        { it: "Doch dahinter steckt kein {3}, nur Tradition: Die Behördensprache will präzise sein und niemanden persönlich ansprechen müssen. Die richtige Antwort ist kürzer, als man denkt — klar, höflich, im Verbstil. Wer imponieren will, antwortet mit denselben {4}; wer klug ist, schreibt einfache Sätze und legt die Kopien bei. Am Ende zählt ohnehin nur, ob die {5} vollständig ist.", es: "Pero detrás no hay conjura, solo tradición: la lengua de las oficinas quiere ser precisa y no tener que dirigirse a nadie personalmente. La respuesta correcta es más corta de lo que parece — clara, cortés, en estilo verbal. Quien quiere impresionar responde con las mismas cadenas nominales; quien es listo escribe frases sencillas y adjunta las copias. Al final solo cuenta si el expediente está completo." },
      ],
      gaps: [
        { options: ["Vorlage", "Verlängerung", "Verteidigung"], answer: 0, why: "«Um Vorlage der Nachweise wird gebeten»: la fórmula pide la presentación de los justificantes." },
        { options: ["Handschrift", "Grammatik", "Hymne"], answer: 1, why: "Cadenas nominales y verbo final: la estructura propia de la lengua administrativa." },
        { options: ["Komplott", "Kompott", "Kompliment"], answer: 0, why: "«Nur Tradition»: detrás no hay conspiración, solo costumbre." },
        { options: ["Nachrichten", "Neujahrsgrüße", "Nominalketten"], answer: 2, why: "Quien quiere impresionar responde con las mismas «drei Nominalketten» del inicio." },
        { options: ["Akte", "Adresse", "Antwort"], answer: 0, why: "Lo único que cuenta al final: si el expediente con todos los documentos está completo." },
      ],
    },
    {
      id: "cz-de-c1-07-2", title: "Die Antwort", titleEs: "La respuesta", minutes: 3,
      paragraphs: [
        { it: "Anna liest den Behördenbrief zweimal und lacht kurz auf. «Alles halb so wild», sagt sie. «Übersetzen wir rückwärts.» Aus «im Zuge der Prüfung» wird schlicht «bei der Prüfung», aus «unter Beifügung der Nachweise» wird «ich {1} die Kopien bei». Was bleibt, ist ein klarer deutscher Satz — Subjekt, Verb, {2}, fertig. Das Amtsdeutsch wirkt nur so lange mächtig, wie niemand es zurückübersetzt.", es: "Anna lee la carta de la oficina dos veces y suelta una risa breve. «No es para tanto», dice. «Traduzcamos al revés». De «en el marco de la revisión» sale simplemente «al revisar», de «bajo adjunción de los justificantes» sale «adjunto las copias». Lo que queda es una frase alemana clara — sujeto, verbo, campo medio, listo. El alemán administrativo solo parece imponente mientras nadie lo retraduzca." },
        { it: "Für den Anfang hat Anna einen Trick: «Hiermit» ist der {3} der Behördensprache — ein Wort, das sofort signalisiert, dass alles Folgende offiziell gemeint ist. Für das Ende gilt die Höflichkeitsformel mit Bitte und Dank. «Nicht {4} werden», warnt sie, «die Sachbearbeiterin liest hundert Briefe am Tag.» Die Antwort passt am Ende auf eine einzige {5} — und kommt drei Tage später abgestempelt zurück.", es: "Para el comienzo Anna tiene un truco: «hiermit» es el abrepuertas del alemán administrativo — una palabra que señala de inmediato que todo lo que sigue va en serio. Para el final vale la fórmula de cortesía con ruego y agradecimiento. «No te pongas creativo», advierte, «la funcionaria lee cien cartas al día». La respuesta cabe al final en una sola página — y vuelve tres días después con sello." },
      ],
      gaps: [
        { options: ["lege", "liege", "lage"], answer: 0, why: "«Unter Beifügung» significa adjuntar: ich lege die Kopien bei." },
        { options: ["Mittelalter", "Mittelfeld", "Mittelmeer"], answer: 1, why: "La frase clara alemana es sujeto, verbo, campo medio — la estructura que Anna enseña." },
        { options: ["Türöffner", "Türsteher", "Trittbrett"], answer: 0, why: "«Hiermit» abre el registro oficial: es la palabra que abre puertas." },
        { options: ["müde", "kreativ", "neugierig"], answer: 1, why: "La funcionaria lee cien cartas al día: no conviene rarezas, no pongas creatividad." },
        { options: ["Seite", "Siedlung", "Sinfonie"], answer: 0, why: "Una respuesta corta cabe en una sola página." },
      ],
    },
    {
      id: "cz-de-c1-07-3", title: "Papierkrieg", titleEs: "La guerra del papel", minutes: 3,
      paragraphs: [
        { it: "Die Deutschen nennen ihn liebevoll Papierkrieg, und wie in jedem Krieg gibt es Frontlinien: das Formular in dreifacher {1}, das Amt, das nur vormittags öffnet, und die Unterschrift, die auf Seite zwei fehlt, obwohl man sie auf Seite drei bereits geleistet hat. Wer den {2} kennt, gewinnt; wer ihn ignoriert, wartet — manchmal monatelang.", es: "Los alemanes lo llaman con cariño guerra del papel, y como en toda guerra hay frentes: el formulario por triplicado, la oficina que abre solo por la mañana, y la firma que falta en la página dos aunque ya se firmó en la tres. Quien conoce el cauce oficial gana; quien lo ignora espera — a veces durante meses." },
        { it: "Doch es gibt auch stille {3}: Wer freundlich fragt, welche Stelle zuständig ist, bekommt oft mehr Hilfe als verlangt. Die Sachbearbeiterin mit der Kaffeetasse, die dreißig Jahre im Amt sitzt, kennt jede {4} des Systems. Ein ehrliches «Können Sie mir sagen, was fehlt?» öffnet Türen, die kein Anwalt {5} könnte. Der Papierkrieg endet meist nicht mit Sieg, sondern mit einem Stempel — und der gilt.", es: "Pero también hay aliados silenciosos: quien pregunta con amabilidad qué oficina es la competente recibe a menudo más ayuda de la que pide. La funcionaria de la taza de café, que lleva treinta años en el cargo, conoce cada atajo del sistema. Un honesto «¿puede decirme qué falta?» abre puertas que ningún abogado conseguiría abrir. La guerra del papel no suele terminar en victoria, sino en un sello — y el sello vale." },
      ],
      gaps: [
        { options: ["Ausfertigung", "Aufführung", "Ausnahme"], answer: 0, why: "El formulario «por triplicado»: tres copias en ejeción formal." },
        { options: ["Dienstwagen", "Dienstreise", "Dienstweg"], answer: 2, why: "«Wer ihn kennt, gewinnt»: la vía oficial de tramitación, el Dienstweg." },
        { options: ["Verbündete", "Verwandte", "Vergessene"], answer: 0, why: "La funcionaria amable que ayuda más de lo pedido: una aliada silenciosa." },
        { options: ["Abteilung", "Abkürzung", "Abfahrt"], answer: 1, why: "Treinta años en el cargo: conoce cada atajo del sistema." },
        { options: ["aufstoßen", "aufessen", "aufhören"], answer: 0, why: "La pregunta honesta «öffnet Türen» que ningún abogado podría abrir de golpe." },
      ],
    },
  ],

  "de-cu-c1-08": [
    {
      id: "cz-de-c1-08-1", title: "Die fünf Fragen", titleEs: "Las cinco preguntas", minutes: 3,
      paragraphs: [
        { it: "Redaktionssitzung am Donnerstagmorgen: Der Bildschirm zeigt die Pressemappe der Ministerin, Herr Böhme blättert und schüttelt den Kopf. «Fragen Sie nie nach dem, was alle {1}. Fragen Sie nach dem, was keiner weiß.» Die erste Frage entsteht aus einem Widerspruch: Die Ministerin hatte das Programm als {2} gepriesen, die Zahlen aber stagnieren seit zwei Jahren.", es: "Reunión de redacción del jueves por la mañana: la pantalla muestra la carpeta de prensa de la ministra, el señor Böhme hojea y niega con la cabeza. «Pregunte nunca por lo que todos saben. Pregunte por lo que nadie sabe». La primera pregunta nace de una contradicción: la ministra había ensalzado el programa como éxito, pero las cifras llevan dos años estancadas." },
        { it: "Böhme baut die Frage in drei {3}: erst die Tatsache («Sie sagten, das Programm sei erfolgreich»), dann der Zweifel («Was ist passiert?»), dann die Nachfrage («Seit wann kennen Sie die Zahlen?»). «Und danach», sagt er, «Schweigen. Die Stille ist das Mikrofon des Interviewers — wer sie zuerst bricht, {4}.» Die fünfte Frage behält er für sich; sie wird erst in der Sendung {5}.", es: "Böhme construye la pregunta en tres pasos: primero el hecho («usted dijo que el programa es un éxito»), luego la duda («¿qué ha pasado?»), después el seguimiento («¿desde cuándo conoce las cifras?»). «Y luego», dice, «silencio. La pausa es el micrófono del entrevistador — quien la rompa primero, pierde». La quinta pregunta se la guarda; solo se mostrará en el programa." },
      ],
      gaps: [
        { options: ["wissen", "wollen", "wagen"], answer: 0, why: "«Fragen Sie nach dem, was keiner weiß»: lo contrario es lo que todos saben." },
        { options: ["Ereignis", "Erfolg", "Ergebnis"], answer: 1, why: "Lo elogiado frente a cifras estancadas: el programa fue vendido como éxito." },
        { options: ["Schritte", "Schiffe", "Schirme"], answer: 0, why: "Hecho, duda y seguimiento: la pregunta se construye en tres pasos." },
        { options: ["lacht", "verliert", "liest"], answer: 1, why: "El silencio es el micrófono del entrevistador: quien lo rompe primero pierde terreno." },
        { options: ["gezeigt", "geschenkt", "gelesen"], answer: 0, why: "La quinta pregunta se reserva para el directo: se mostrará en el programa." },
      ],
    },
    {
      id: "cz-de-c1-08-2", title: "Sonntagabend vor der Kamera", titleEs: "Domingo noche ante la cámara", minutes: 3,
      paragraphs: [
        { it: "Die Studiolampen sind heiß, die Ministerin sitzt kerzengerade, und die Anspannung ist mit Händen zu greifen. Das Publikum kennt sie nur hinter dem Rednerpult; heute Abend gibt es kein {1}. Der Moderator begrüßt sie mit Namen — und schon die erste Frage ist eine {2}: «Sie sagten im Frühjahr, die Reform sei ein voller Erfolg. Was ist aus ihr geworden?»", es: "Los focos del estudio arden, la ministra se sienta derecha como una vela y la tensión se puede tocar. El público la conoce solo tras el atril; esta noche no hay guion. El moderador la saluda por su nombre — y la primera pregunta ya es una trampa: «Usted dijo en primavera que la reforma era un éxito pleno. ¿Qué ha sido de ella?»" },
        { it: "Die Ministerin weicht aus, doch der Moderator ist vorbereitet: «Das war nicht meine Frage.» Die {3} bleibt stehen, wie es im Jargon heißt — sie wird wiederholt, bis sie beantwortet ist. Am Ende der Sendung wird niemand {4}, aber alle haben verstanden, wer ausgewichen ist. Das deutsche Publikum verzeiht {5} eher als Ausflüchte: Wer nicht weiß, darf das sagen — wer ausweicht, nicht.", es: "La ministra esquiva, pero el moderador está preparado: «Esa no era mi pregunta». La pregunta sigue en pie, como se dice en la jerga — se repite hasta que se responde. Al final del programa nadie queda desmontado, pero todos han entendido quién esquivó. El público alemán perdona antes la ignorancia que las evasivas: quien no lo sabe puede decirlo — quien esquiva, no." },
      ],
      gaps: [
        { options: ["Manuskript", "Mikrofon", "Make-up"], answer: 0, why: "Tras el atril lee discursos escritos; en la entrevista no hay manuscrito." },
        { options: ["Fahrt", "Falle", "Feier"], answer: 1, why: "Cita su frase y la confronta con los hechos: la primera pregunta es una trampa." },
        { options: ["Frage", "Frucht", "Fraktion"], answer: 0, why: "«Sie wird wiederholt, bis sie beantwortet ist»: la pregunta queda en pie." },
        { options: ["dekoriert", "demontiert", "dekliniert"], answer: 1, why: "«Niemand wird abgebaut en plató»: nadie queda desmontado, pero todos ven quién esquivó." },
        { options: ["Unwissenheit", "Unhöflichkeit", "Unauffälligkeit"], answer: 0, why: "«Wer nicht weiß, darf das sagen»: se perdona no saber antes que las evasivas." },
      ],
    },
    {
      id: "cz-de-c1-08-3", title: "Die Nachfrage", titleEs: "La pregunta de seguimiento", minutes: 3,
      paragraphs: [
        { it: "Die wichtigste Frage eines Interviews entsteht oft erst aus der {1}. Der Gast antwortet — und in der Antwort steckt ein Detail, das nicht passt: eine Zahl, ein Datum, ein «später», das nirgends definiert wurde. Das {2} des Interviewers schärft sich; die Zuschauer haben es vielleicht überhört, er nicht.", es: "La pregunta más importante de una entrevista suele nacer de la respuesta. El invitado responde — y en la respuesta hay un detalle que no encaja: una cifra, una fecha, un «más tarde» que nadie definió. El oído del entrevistador se afila; los espectadores quizá lo hayan pasado por alto, él no." },
        { it: "Die Nachfrage hat viele {3}: die Echo-Frage, die nur ein Wort wiederholt («Zwei Jahre?»), die Präzisierungsfrage («Was heißt ‘später’ genau?») und die Konfrontation mit dem eigenen Zitat. Ihre Wirkung beruht auf dem {4}: Wer unterbrochen wird, verliert den Faden; wer nicht unterbrochen wird, verliert die Zeit. Und die härteste Form ist die freundliche: «Lassen Sie mich {5}: Sie wussten also schon im Frühjahr Bescheid?»", es: "El seguimiento tiene muchas formas: la pregunta eco, que solo repite una palabra («¿dos años?»), la pregunta de precisión («¿qué significa exactamente ‘más tarde’?») y la confrontación con la cita propia. Su efecto se basa en el temporizador: a quien interrumpen se le pierde el hilo; a quien no interrumpen se le va el tiempo. Y la forma más dura es la amable: «Permítame resumir: ¿usted ya estaba enterado en primavera?»" },
      ],
      gaps: [
        { options: ["Antwort", "Annonce", "Anzahlung"], answer: 0, why: "«Der Gast antwortet — und in der Antwort steckt ein detalle»: la pregunta nace de la respuesta." },
        { options: ["Gewissen", "Gepäck", "Gehör"], answer: 2, why: "El entrevistador capta el detalle que otros pasan por alto: su oído se afila." },
        { options: ["Formen", "Farben", "Fristen"], answer: 0, why: "Eco, precisión y confrontación: la Nachfrage tiene muchas variantes." },
        { options: ["Treffen", "Timing", "Theater"], answer: 1, why: "Perder el hilo o perder el tiempo: el efecto del seguimiento es cuestión de momento." },
        { options: ["zusammenfassen", "zusammenbrechen", "zusammenpacken"], answer: 0, why: "«Sie wussten also schon»: reformular lo dicho para fijarlo se llama resumir." },
      ],
    },
  ],

  "de-cu-c1-09": [
    {
      id: "cz-de-c1-09-1", title: "Der erste Claim", titleEs: "El primer claim", minutes: 3,
      paragraphs: [
        { it: "Der Besprechungsraum der Hamburger Agentur hat eine Wand voller Claims, abwaschbar, damit neue {1} Platz haben. Frau Hansen kommt mit zwei Bechern Kaffee und fragt direkt: «Was hast du für die Radmarke?» Der Praktikant {2} sein Heft: «Fahr in dein Leben.» — vier Wörter, ein Wortspiel mit «fahren» und «hinfahren».", es: "La sala de reuniones de la agencia hamburguesa tiene una pared llena de eslóganes, lavable, para que las ideas nuevas tengan sitio. La señora Hansen llega con dos vasos de café y pregunta sin preámbulos: «¿Qué traes para la marca de bicis?». El practicante abre su cuaderno: «Fahr in dein Leben» («Entra rodando en tu vida») — cuatro palabras, un juego con «fahren» y «hinfahren»." },
        { it: "Frau Hansen wiegt den Satz in der Hand, {3} ihn laut, schüttelt den Kopf. «Fast. ‘Fahr in dein Leben’ erklärt nichts.» Ein guter Claim, erklärt sie, verdichtet die {4} der Marke — bei der Radmarke: Freiheit, Stadt, Selbstbestimmung. Am Ende der Sitzung steht ein neuer Satz an der Wand, und der Praktikant versteht: Der Kunde kauft kein Fahrrad, er kauft ein {5}.", es: "La señora Hansen sopesa la frase, la mastica en voz alta, niega con la cabeza. «Casi. ‘Fahr in dein Leben’ no explica nada». Un buen claim, explica, condensa el mensaje de la marca — en la de bicis: libertad, ciudad, autonomía. Al final de la sesión hay una frase nueva en la pared, y el practicante entiende: el cliente no compra una bicicleta, compra un sentimiento." },
      ],
      gaps: [
        { options: ["Ideen", "Irrtümer", "Immobilien"], answer: 0, why: "La pared lavable deja sitio a las ideas nuevas de la agencia." },
        { options: ["opfert", "ordnet", "öffnet"], answer: 2, why: "El practicante muestra su propuesta: abre el cuaderno." },
        { options: ["kaut", "kämpft", "kassiert"], answer: 0, why: "«Wiegt den Satz in der Hand» y luego lo pronuncia despacio: lo mastica." },
        { options: ["Bilanz", "Botschaft", "Bibliothek"], answer: 1, why: "«Freiheit, Stadt, Selbstbestimmung»: el claim condensa el mensaje de la marca." },
        { options: ["Fahrrad", "Fahrplan", "Gefühl"], answer: 2, why: "«Kauft kein Fahrrad, sondern»: lo que se compra además del producto es un sentimiento." },
      ],
    },
    {
      id: "cz-de-c1-09-2", title: "Wortspielwerkstatt", titleEs: "El taller de juegos de palabras", minutes: 3,
      paragraphs: [
        { it: "In der Wortspielwerkstatt der Agentur gilt eine eiserne Regel: Erst die {1}, dann der Witz. Ein Claim wie «Radikal gut» verdichtet zwei Botschaften in zwei Wörtern — Qualität und Bewegung —, denn im Wort «radikal» steckt das {2}. Wer das Rätsel löst, lächelt; und wer lächelt, merkt sich die Marke.", es: "En el taller de juegos de palabras de la agencia rige una regla de hierro: primero el mensaje, luego el chiste. Un claim como «Radikal gut» condensa dos mensajes en dos palabras — calidad y movimiento —, porque dentro de «radikal» está escondida la bici. Quien resuelve el acertijo sonríe; y quien sonríe, recuerda la marca." },
        { it: "Die Werkstatt kennt auch Verbote: Ein Superlativ wie «Deutschlands schnellstes Rad» darf nur erscheinen, wenn eine Messung ihn {3} — sonst droht dem Kunden eine Abmahnung. Und die Länge ist Gesetz: Fünf Wörter sind das {4}, denn mehr passt weder auf ein Plakat noch in einen Kopf. Am Ende wird jeder Kandidat laut vorgelesen; was den {5} verliert, fliegt.", es: "El taller también conoce prohibiciones: un superlativo como «la bici más rápida de Alemania» solo puede publicarse si una medición lo respalda — de lo contrario al cliente le amenaza un requerimiento. Y la longitud es ley: cinco palabras son el límite, porque más no cabe ni en un cartel ni en una cabeza. Al final cada candidato se lee en voz alta; lo que pierde el compás, fuera." },
      ],
      gaps: [
        { options: ["Botschaft", "Beleidigung", "Beilage"], answer: 0, why: "«Erst das, dann der Witz»: lo primero es el mensaje de la marca." },
        { options: ["Rad", "Rat", "Rast"], answer: 0, why: "El juego: dentro de «radikal» está escondida la bici, das Rad." },
        { options: ["belegt", "begeistert", "befördert"], answer: 0, why: "El superlativo exige una medición que lo respalde: que lo pruebe." },
        { options: ["Lesestoff", "Laufwerk", "Limit"], answer: 2, why: "«Mehr passt weder auf ein Plakat noch in einen Kopf»: cinco palabras son el límite." },
        { options: ["Takt", "Trost", "Tisch"], answer: 0, why: "Leído en voz alta, el claim debe conservar el ritmo; quien lo pierde, fuera." },
      ],
    },
    {
      id: "cz-de-c1-09-3", title: "Die Grenzen des Superlativs", titleEs: "Los límites del superlativo", minutes: 3,
      paragraphs: [
        { it: "Die Werbebranche liebt Superlative, das Gesetz liebt die Wahrheit — und zwischen beiden wacht der Wettbewerb. Ein Slogan wie «Die beste Butter der Welt» klingt harmlos, doch ohne {1} wird er teuer: Konkurrenten können abmahnen, und Gerichte verlangen für jedes «am besten» und «einzigartig» einen Beweis. Die Branche nennt das die {2} des Superlativs.", es: "El sector publicitario ama los superlativos, la ley ama la verdad — y entre ambos vela la competencia. Un eslogan como «la mejor mantequilla del mundo» suena inofensivo, pero sin prueba sale caro: los competidores pueden requerirlo, y los tribunales exigen una prueba por cada «el mejor» y «único». El sector lo llama las trampas del superlativo." },
        { it: "Deshalb haben Werber Auswege gefunden, die Juristen ein Lächeln {3}: Vergleiche statt Superlative («schneller als der Wind»), reine {4} ohne Inhalt («Genuss seit Generationen») und Fragen, die nichts behaupten («Bereit für mehr?»). Der Superlativ selbst bleibt erlaubt — aber er ist ein Feld mit Fußangeln: Wer ihn setzt, muss ihn verteidigen können. Die spannendsten Claims entstehen dort, wo die Sprache dicht an der Grenze des {5} schreibt — zwischen Mut und Abmahnung.", es: "Por eso los publicitarios han encontrado salidas que arrancan una sonrisa a los juristas: comparativos en vez de superlativos («más rápido que el viento»), frases vacías sin contenido («disfrute desde hace generaciones») y preguntas que no afirman nada («¿listo para más?»). El superlativo en sí sigue permitido — pero es un campo con cepos: quien lo usa debe poder defenderlo. Los claims más fascinantes nacen donde la lengua escribe pegada al límite de lo permitido — entre la osadía y el requerimiento." },
      ],
      gaps: [
        { options: ["Beleg", "Bericht", "Besuch"], answer: 0, why: "«Gerichte verlangen einen Beweis»: sin respaldo documental el eslogan sale caro." },
        { options: ["Türen", "Tücken", "Tänze"], answer: 1, why: "El superlativo legalmente peligroso tiene sus trampas ocultas." },
        { options: ["entlocken", "entfernen", "entladen"], answer: 0, why: "Las salidas ingeniosas «arrancan» una sonrisa a los juristas." },
        { options: ["Wortspiele", "Worthülsen", "Wortlisten"], answer: 1, why: "«Genuss seit Generationen» no afirma nada verificable: es una cáscara vacía." },
        { options: ["Erlaubten", "Erlebten", "Erlesenen"], answer: 0, why: "«Zwischen Mut und Abmahnung»: escribir pegado al borde de lo permitido." },
      ],
    },
  ],

  "de-cu-c1-10": [
    {
      id: "cz-de-c1-10-1", title: "Das Training mit Frau Steinbach", titleEs: "El entrenamiento con la señora Steinbach", minutes: 3,
      paragraphs: [
        { it: "Das Medientraining findet im leeren Studio statt: zwei Kameras, ein Tisch, eine Trainerin mit Stoppuhr. Frau Steinbach spielt die Gegnerin und beginnt sofort mit einer {1}: «Ihre Pläne ruinieren die Stadt!» Die Kandidatin atmet durch und erinnert sich an die Regel: nicht die Behauptung {2}, die Argumentation.", es: "El entrenamiento mediático tiene lugar en el estudio vacío: dos cámaras, una mesa, una entrenadora con cronómetro. La señora Steinbach hace de contrincante y arranca de inmediato con una provocación: «¡Sus planes arruinan la ciudad!». La candidata respira y recuerda la regla: no atacar la afirmación, sino la argumentación." },
        { it: "«Zwar klingt das teuer, doch die Rechnung geht nicht auf», antwortet sie — Konzessive zuerst, dann der {3}. Steinbach unterbricht sie mitten im Satz, wie es echte Gegner tun. «Lassen Sie mich {4}», sagt die Kandidatin ruhig, «dann antworte ich auf beide Punkte.» Nach zwei Stunden steht das Urteil der Trainerin: inhaltlich gut, {5} besser — die Kandidatin darf aufs Podium.", es: "«Si bien suena caro, las cuentas no salen», responde — primero la concesión, luego el contraataque. Steinbach la interrumpe a mitad de frase, como hacen los rivales de verdad. «Déjeme terminar», dice la candidata serena, «luego respondo a los dos puntos». A las dos horas llega el veredicto de la entrenadora: bueno en contenido, mejor aún en forma — la candidata puede subir al podio." },
      ],
      gaps: [
        { options: ["Provokation", "Präsentation", "Prozedur"], answer: 0, why: "«Ihre Pläne ruinieren die Stadt!»: el ataque inicial es una provocación." },
        { options: ["anfassen", "angreifen", "anrufen"], answer: 1, why: "La regla del debate alemán: atacar la argumentación, no la afirmación ni la persona." },
        { options: ["Gegenschlag", "Rückzug", "Zwischenruf"], answer: 0, why: "«Konzessive zuerst, dann»: tras la concesión llega el contraataque." },
        { options: ["aufhören", "ausreden", "abweisen"], answer: 1, why: "«Dann antworte ich»: pide terminar de hablar, «Lassen Sie mich ausreden»." },
        { options: ["noch", "nie", "nur"], answer: 0, why: "«Inhaltlich gut, besser noch»: la forma resulta todavía mejor que el contenido." },
      ],
    },
    {
      id: "cz-de-c1-10-2", title: "Zwar — doch", titleEs: "Zwar — doch", minutes: 2,
      paragraphs: [
        { it: "Keine Formel des Streitgesprächs klingt höflicher und schlägt härter zu: «zwar — doch». Das «zwar» gibt zu, das «doch» {1} es zurück. Erst wird dem Gegner Recht gegeben — «Zwar ist die Maßnahme teuer» —, dann folgt die {2}, die alles dreht: «doch sie amortisiert sich in drei Jahren». Wer die Formel beherrscht, kann einräumen, ohne zu {3}: Die Konzessive ist Geschenk und Klinge zugleich.", es: "Ninguna fórmula del debate suena más cortés y golpea más fuerte: «zwar — doch». El «zwar» concede, el «doch» lo recupera. Primero se da la razón al rival — «si bien la medida es cara» —, luego llega el giro que lo cambia todo: «pero se amortiza en tres años». Quien domina la fórmula puede conceder sin perder: la concesión es a la vez regalo y hoja." },
        { it: "Die Rhetorik kennt noch eine Steigerung: die {4} ad absurdum. Der Redner folgt dem Gegner eine Weile — «Wenn wir Ihrem Argument folgen, müssten wir auch die Bibliotheken schließen» — und überlässt es dem Publikum, den {5} zu ziehen. In der Podiumsdiskussion zählt daneben die Sachlichkeit: Wer die Person angreift statt die Argumentation, verliert den Respekt des Publikums schneller als jede Entschuldigung ihn retten könnte.", es: "La retórica conoce todavía una escalada: la reductio ad absurdum. El orador sigue un trecho al rival — «si seguimos su argumento, tendríamos que cerrar también las bibliotecas» — y deja que el público saque la conclusión. En el debate de podio cuenta además la objetividad: quien ataca a la persona en vez de a la argumentación pierde el respeto del público más rápido de lo que cualquier disculpa podría recuperarlo." },
      ],
      gaps: [
        { options: ["nimmt", "gibt", "hält"], answer: 0, why: "El zwar da la razón y el doch se la quita: la recupera." },
        { options: ["Wanderung", "Wendung", "Warnung"], answer: 1, why: "«Die alles dreht»: el giro que cambia el sentido de la frase." },
        { options: ["verlieren", "vergessen", "verzeihen"], answer: 0, why: "Conceder sin perder: la concesión no es derrota." },
        { options: ["Reductio", "Reaktion", "Redaktion"], answer: 0, why: "«Ad absurdum»: el término latino fijo de la retórica es reductio." },
        { options: ["Schluss", "Schmerz", "Schnee"], answer: 0, why: "«Den Schluss ziehen»: la conclusión la saca el público." },
      ],
    },
    {
      id: "cz-de-c1-10-3", title: "Die Podiumsdiskussion", titleEs: "El debate de podio", minutes: 3,
      paragraphs: [
        { it: "Der Saal der Aula ist voll: fünf Stühle, ein Moderator, hundert {1}. Die Kandidatin aus dem Medientraining sitzt in der Mitte und spürt ihre Hände — sie lässt sie ruhig auf dem Tisch liegen, so wie sie es geübt hat. Die erste Frage kommt aus dem Publikum und ist {2}: «Sie wollen das Schwimmbad schließen — wagen Sie das hier noch einmal zu sagen?»", es: "La sala del aula magna está llena: cinco sillas, un moderador, cien oyentes. La candidata del entrenamiento mediático se sienta en el centro y siente sus manos — las deja reposar tranquilas sobre la mesa, tal como ensayó. La primera pregunta llega del público y es directa: «Usted quiere cerrar la piscina — ¿se atreve a decirlo aquí una vez más?»" },
        { it: "Die Kandidatin räumt ein, was stimmt — das Bad sei alt, der Betrieb teuer —, und führt dann die Gegenrechnung: «Die {3} geht nicht auf: Schließen wir das Bad, verlieren wir dreihundert Mitgliedschaften im Verein.» Der Gegner unterbricht, der Moderator mahnt, das Publikum {4}. Am Ende applaudiert der Saal beiden Seiten — die Sachlichkeit hat gesiegt, und beide haben das Podium als Sieger {5}.", es: "La candidata concede lo cierto — la piscina es vieja, el mantenimiento caro — y luego presenta la contracuenta: «Las cuentas no salen: si cerramos la piscina, el club pierde trescientas membresías». El rival interrumpe, el moderador llama al orden, el público murmura. Al final la sala aplaude a ambas partes — ha ganado la objetividad, y ambos abandonan el podio como vencedores." },
      ],
      gaps: [
        { options: ["Zuhörer", "Zweifel", "Zeitungen"], answer: 0, why: "«Der Saal ist voll» y la pregunta «kommt aus dem Publikum»: cien oyentes." },
        { options: ["spät", "spitz", "satt"], answer: 1, why: "«Wagen Sie das hier noch einmal zu sagen?»: la primera pregunta es afilada." },
        { options: ["Rechnung", "Renovierung", "Redaktion"], answer: 0, why: "«Geht nicht auf»: las cuentas del cierre de la piscina no salen." },
        { options: ["ruht", "raunt", "rechnet"], answer: 1, why: "Interrupción y llamada al orden: la reacción del público es un murmullo." },
        { options: ["verloren", "verwechselt", "verlassen"], answer: 2, why: "Al terminar el debate, ambos bajan del podio como vencedores: lo abandonan." },
      ],
    },
  ],

  "de-cu-c1-11": [
    {
      id: "cz-de-c1-11-1", title: "Der Erlkönig im Seminar", titleEs: "El Erlkönig en el seminario", minutes: 3,
      paragraphs: [
        { it: "Das Seminar findet im obersten Stock statt, die Fenster zeigen auf den {1}, und auf dem Tisch liegt der Text: Goethes «Erlkönig». Die Professorin liest die erste Strophe laut, und plötzlich rennt die Sprache: «Wer reitet so {2} durch Nacht und Wind?» — ein einziges Wort, und die ganze Szene trabt dahinter her.", es: "El seminario tiene lugar en la última planta, las ventanas dan al patio, y sobre la mesa está el texto: el «Erlkönig» de Goethe. La profesora lee la primera estrofa en voz alta, y de pronto la lengua echa a correr: «¿Quién cabalga tan tarde por noche y viento?» — una sola palabra, y toda la escena trotea detrás." },
        { it: "Dann analysiert die Runde die Stimmen: Der Sohn flüstert, der Vater beschwichtigt, der Erlkönig lockt — drei Register, ein Dialog, alles in Versen. Am Ende diskutiert die Runde die Schlusszeile: «In seinen Armen das Kind war {3}.» Die Inversion — das Subjekt nach dem Verb — lässt den Tod wie ein {4} einschlagen; das Präteritum macht ihn endgültig. Die Professorin lächelt und stellt die Hausaufgabe: Interpretieren Sie die Ballade im Präsens — der {5} erzählt im Präteritum, die Wissenschaft schaut aus der Gegenwart darauf.", es: "Luego la ronda analiza las voces: el hijo susurra, el padre tranquiliza, el rey de los elfos seduce — tres registros, un diálogo, todo en verso. Al final el grupo discute el verso final: «En sus brazos el niño estaba muerto». La inversión — el sujeto tras el verbo — deja que la muerte caiga como un rayo; el pretérito la hace definitiva. La profesora sonríe y pone la tarea: interpreten la balada en presente — el narrador narra en pretérito, la ciencia la mira desde el presente." },
      ],
      gaps: [
        { options: ["Hof", "See", "Turm"], answer: 0, why: "Las ventanas de un edificio institucional dan al patio interior." },
        { options: ["schnell", "spät", "still"], answer: 1, why: "La pregunta original de Goethe: «Wer reitet so spät durch Nacht und Wind?» — la noche marca la hora tardía." },
        { options: ["tot", "müde", "wach"], answer: 0, why: "«Lässt den Tod einschlagen»: el final de la balada es la muerte del niño." },
        { options: ["Boten", "Blitz", "Brief"], answer: 1, why: "La inversión hace que la muerte caiga de golpe: como un rayo." },
        { options: ["Erzähler", "Erlkönig", "Ergebnis"], answer: 0, why: "Quien narra en Präteritum mientras el análisis usa Präsens es el narrador." },
      ],
    },
    {
      id: "cz-de-c1-11-2", title: "Das historische Präsens", titleEs: "El presente histórico", minutes: 3,
      paragraphs: [
        { it: "Es passiert im Radio, im Sport und in der Kneipe: Das {1} erzählt die Vergangenheit. «Und dann steht er auf, nimmt den Ball und schießt» — der Kommentator wählt diese Zeitform, weil sie den Zuhörer auf die Tribüne versetzt. Auch in der Literatur ist der Griff erlaubt: Das historische Präsens verdichtet den Moment, in dem die {2} zur Bühne wird.", es: "Pasa en la radio, en el deporte y en el bar: el presente narra el pasado. «Y entonces se levanta, coge el balón y dispara» — el comentarista elige ese tiempo porque coloca al oyente en la grada. También en la literatura está permitido el recurso: el presente histórico condensa el instante en que el recuerdo se vuelve escenario." },
        { it: "Die Regie ist einfach: Das Präsens ersetzt den Erzählfluss nicht dauerhaft, es {3} Akzente. Meist führt der Text im Präteritum und wechselt nur für die Höhepunkte in die {4} — wie ein Kamerablick, der nähertritt. Wer durchgehend im Präsens erzählt, verbraucht den Effekt; die Spannung lebt vom {5}. Deshalb wechseln Balladen und Romane die Zeiten wie Fahrer den Gang.", es: "La dirección es sencilla: el presente no reemplaza de forma permanente el hilo narrativo, pone acentos. La mayoría de las veces el texto avanza en pretérito y cambia al presente solo para los momentos cumbre — como una cámara que se acerca. Quien narra todo en presente agota el efecto; la tensión vive del cambio. Por eso baladas y novelas cambian de tiempo como el conductor de marcha." },
      ],
      gaps: [
        { options: ["Präsens", "Präteritum", "Plusquamperfekt"], answer: 0, why: "«Und dann steht er auf, nimmt den Ball»: las formas citadas están en presente." },
        { options: ["Empfehlung", "Erinnerung", "Entscheidung"], answer: 1, why: "El pasado narrado que se vuelve escenario es el recuerdo." },
        { options: ["setzt", "streicht", "verschluckt"], answer: 0, why: "No reemplaza el flujo narrativo, solo marca acentos puntuales." },
        { options: ["Zukunft", "Vergangenheit", "Gegenwart"], answer: 2, why: "El historisches Präsens cambia a los momentos cumbres el tiempo presente." },
        { options: ["Wechsel", "Wiederholung", "Wortspiel"], answer: 0, why: "«Wer durchgehend erzählt, verbraucht den Effekt»: la tensión vive del cambio de tiempos." },
      ],
    },
    {
      id: "cz-de-c1-11-3", title: "Weimar, die kleine Residenz", titleEs: "Weimar, la pequeña residencia", minutes: 3,
      paragraphs: [
        { it: "Die kleine Residenzstadt in Thüringen hat kaum zehntausend Einwohner, als der {1} seinen Minister nach Weimar holt: Johann Wolfgang von Goethe. Zehn Jahre später zieht auch Schiller von Jena herüber, und zwischen beiden entsteht jene {2}, die man später die Weimarer Klassik nennen wird — eine Freundschaft aus Briefen, Streit und gemeinsamen Balladen.", es: "La pequeña ciudad residencial de Turingia apenas tiene diez mil habitantes cuando el duque trae a su ministro a Weimar: Johann Wolfgang von Goethe. Diez años después Schiller también se traslada desde Jena, y entre ambos nace aquella época que más tarde se llamará el clasicismo de Weimar — una amistad hecha de cartas, discusiones y baladas compartidas." },
        { it: "Ihr Programm klingt heute harmlos, war damals aber {3}: Der Mensch soll durch Bildung und Selbstbeherrschung zu sich selbst kommen. Ihre Sprache sucht die {4} zwischen Herz und Verstand, und ihre Wirkung reicht bis heute: Wer in Deutschland das Abitur macht, begegnet den Weimarer Texten. Die Klassik wurde zum {5} des Bildungsbürgertums — zum gemeinsamen Besitz einer ganzen Sprachgemeinschaft.", es: "Su programa hoy suena inofensivo, pero entonces era audaz: el hombre debe llegar a sí mismo mediante formación y autodominio. Su lengua busca el punto medio entre corazón y entendimiento, y su efecto llega hasta hoy: quien hace el Abitur en Alemania se topa con los textos de Weimar. El clasicismo se convirtió en el fundamento de la burguesía culta — en el patrimonio común de toda una comunidad lingüística." },
      ],
      gaps: [
        { options: ["Herzog", "Häuptling", "Helfer"], answer: 0, why: "Goethe llegó a Weimar como ministro al servicio del duque de Sajonia-Weimar." },
        { options: ["Epoche", "Anekdote", "Episode"], answer: 0, why: "Lo que luego se llamará Weimarer Klassik es una época literaria entera." },
        { options: ["kühn", "verboten", "unbezahlbar"], answer: 0, why: "«Klingt heute harmlos» pero entonces no: el programa era audaz para su tiempo." },
        { options: ["Macht", "Mitte", "Mode"], answer: 1, why: "«Zwischen Herz und Verstand»: el punto de equilibrio entre ambos." },
        { options: ["Grundstock", "Gegenstand", "Gastgeschenk"], answer: 0, why: "Los textos clásicos son la base sobre la que se edificó la burguesía culta." },
      ],
    },
  ],

  "de-cu-c1-12": [
    {
      id: "cz-de-c1-12-1", title: "Am Vorabend", titleEs: "La víspera", minutes: 3,
      paragraphs: [
        { it: "Am Abend vor der Disputation ist das Institut still, nur ein Licht brennt: das Büro der Professorin. Die Doktorandin legt die Folien auf den Tisch — dreißig Minuten, zwölf Folien, ein roter Faden. Die Betreuerin stellt keine {1} zum Inhalt, sondern nur eine einzige: «Was sagen Sie, wenn der {2} kommt?»", es: "La víspera de la defensa el instituto está en silencio, solo una luz encendida: el despacho de la profesora. La doctoranda pone las diapositivas sobre la mesa — treinta minutos, doce diapositivas, un hilo conductor. La directora no pregunta por el contenido, sino una sola cosa: «¿Qué dice usted cuando llegue la objeción?»" },
        { it: "Sie üben die härteste Viertelstunde zweimal. Die Professorin spielt den skeptischen Prüfer und {3} einen Fehler in der Methode. Die Doktorandin atmet, dankt, räumt ein — «Ich räume ein, dass die Stichprobe klein ist» — und {4} mit den drei Teilstudien. «Genau so», sagt die Professorin am Ende. «Nicht siegen, bestehen: Die Disputation ist kein Duell, sondern ein {5}.» Um zehn Uhr ist alles vorbei — und in dieser Nacht wiederholt die Doktorandin nur einen Satz: gestützt, nicht bewiesen.", es: "Ensayan dos veces el cuarto de hora más duro. La profesora hace de examinador escéptico y objeta un fallo del método. La doctoranda respira, agradece, concede — «concedo que la muestra es pequeña» — y replica con las tres submuestras. «Exactamente así», dice la profesora al final. «No vencer: superar. La defensa no es un duelo, sino un coloquio especializado». A las diez todo habrá terminado — y esa noche la doctoranda repite solo una frase: respaldada, no demostrada." },
      ],
      gaps: [
        { options: ["Fragen", "Folien", "Ferien"], answer: 0, why: "«Keine Fragen zum Inhalt, sondern nur eine einzige»: la directora no interroga el contenido." },
        { options: ["Einwand", "Aufwand", "Vorwand"], answer: 0, why: "Lo que llega en una defensa y hay que gestionar: la objeción del tribunal." },
        { options: ["beanstandet", "beantwortet", "beauftragt"], answer: 0, why: "El examinador escéptico señala un fallo del método: lo objeta." },
        { options: ["kündigt", "kontert", "klingt"], answer: 1, why: "Tras conceder, responde con las tres submuestras: replica." },
        { options: ["Wettrennen", "Verhör", "Fachgespräch"], answer: 2, why: "«Kein Duell, sondern»: la defensa alemana se define como coloquio especializado." },
      ],
    },
    {
      id: "cz-de-c1-12-2", title: "Der Einwand", titleEs: "La objeción", minutes: 3,
      paragraphs: [
        { it: "Es ist die Frage, auf die man nicht vorbereitet sein kann — und genau deshalb muss man auf sie vorbereitet sein. In jeder Disputation gibt es einen Einwand, der den {1} trifft: die Grenze der Methode, das fehlende Sample, der Befund, der nicht ins Bild passt. Wer hier {2}, verliert nicht die Arbeit, aber die Stunde — und die Haltung.", es: "Es la pregunta a la que no se puede estar preparado — y precisamente por eso hay que estarlo. En toda defensa hay una objeción que da en el corazón: el límite del método, la muestra que falta, el hallazgo que no encaja. Quien titubea aquí no pierde el trabajo, pero sí la hora — y la compostura." },
        { it: "Die Antwort folgt einem {3} in drei Schritten: danken, einräumen, unterscheiden. Erst das «Danke für diesen Einwand» — keine Floskel, sondern Signal. Dann die {4}: «Ich räume ein, dass die Datenlage begrenzt ist.» Und erst jetzt die Unterscheidung, der eigentliche Kern: «Gleichwohl zeigt sich der Effekt in allen drei Teilstudien.» Wer diese Reihenfolge {5}, klingt defensiv; wer sie einhält, klingt souverän.", es: "La respuesta sigue un guion en tres pasos: agradecer, conceder, distinguir. Primero el «gracias por esa objeción» — no es fórmula, es señal. Luego la concesión: «concedo que la base de datos es limitada». Y solo ahora la distinción, el corazón del asunto: «con todo, el efecto se muestra en las tres submuestras». Quien invierte este orden suena defensivo; quien lo mantiene, soberano." },
      ],
      gaps: [
        { options: ["Kern", "Körper", "Keller"], answer: 0, why: "Límite del método, muestra que falta: la objeción que da en el corazón del trabajo." },
        { options: ["lacht", "zögert", "liest"], answer: 1, why: "Quien duda aquí no pierde el trabajo, pero sí la compostura." },
        { options: ["Drehbuch", "Dreieck", "Drehkreuz"], answer: 0, why: "«In drei Schritten»: la respuesta sigue un guion fijo." },
        { options: ["Konzession", "Konvention", "Konstruktion"], answer: 0, why: "«Ich räume ein, dass»: la frase citada es la concesión." },
        { options: ["umarmt", "umdreht", "umleitet"], answer: 1, why: "Quien invierte el orden agradecer-concedir-distinguir suena defensivo." },
      ],
    },
    {
      id: "cz-de-c1-12-3", title: "Gestützt, nicht bewiesen", titleEs: "Respaldada, no demostrada", minutes: 3,
      paragraphs: [
        { it: "Am Ende jeder guten Verteidigung steht ein Satz, der seltsam unspektakulär klingt: «Die Hypothese wurde gestützt, nicht bewiesen.» Für spanische Ohren ist das fast eine {1} — in Deutschland ist es die stärkste Position, die die Wissenschaft kennt. Wer weniger behauptet, als er belegen kann, gewinnt {2}: das Vertrauen des Fachpublikums.", es: "Al final de toda buena defensa hay una frase que suena extrañamente modesta: «la hipótesis fue respaldada, no demostrada». Para oídos españoles eso es casi una capitulación — en Alemania es la posición más fuerte que conoce la ciencia. Quien afirma menos de lo que puede probar gana por partida doble: la confianza del público especializado." },
        { it: "Das Vokabular der Vorsicht ist fein abgestuft: «belegen» ist stärker als «nahelegen», «zeigen» schwächer als «beweisen», und «vermutlich» klingt eine Stufe {3} als «offenbar». Diese Adverbien sind kein Schmuck; sie geben das {4} an Sicherheit an, das eine Aussage trägt. Die Disputation endet deshalb selten mit einem Paukenschlag, sondern mit einem {5} in die Zukunft: Hier ist weitere Forschung nötig — und wer sie ernst nimmt, hat schon morgen einen Forschungsantrag in der Schublade.", es: "El vocabulario de la cautela está finamente graduado: «belegen» es más fuerte que «nahelegen», «zeigen» más débil que «beweisen», y «vermutlich» suena un escalón más prudente que «offenbar». Esos adverbios no son adorno; indican el grado de seguridad que sostiene un enunciado. Por eso la defensa rara vez termina con golpe de timbal, sino con una mirada al futuro: aquí hace falta más investigación — y quien se lo toma en serio ya tiene mañana una solicitud de proyecto en el cajón." },
      ],
      gaps: [
        { options: ["Kapitulation", "Karriere", "Katastrophe"], answer: 0, why: "Para oídos españoles, esa modestia suena casi a rendición." },
        { options: ["nichts", "doppelt", "Prozente"], answer: 1, why: "Afirmar menos de lo probado gana por partida doble: la confianza del gremio." },
        { options: ["vorsichtiger", "lauter", "moderner"], answer: 0, why: "«Vermutlich» frente a «offenbar»: un escalón más prudente en la escala del hedging." },
        { options: ["Musik", "Maß", "Material"], answer: 1, why: "Los adverbios indican el grado de seguridad que sostiene la afirmación." },
        { options: ["Blick", "Blickfang", "Blitz"], answer: 0, why: "«In die Zukunft»: el cierre de la defensa es una mirada hacia adelante." },
      ],
    },
  ],
};
