import type { CbClozeText } from "../../cambridge";

/* ═══ DE C2 · Cloze readings — 3 por unidad (inferencia léxica) ══════
   Metodología v9.12: el texto en alemán lleva marcadores {1} {2}…
   que el reproductor convierte en huecos; el estudiante deduce la
   palabra por el contexto. Campos: `.it` = alemán de Alemania (C2:
   Literaturhäuser, Kabarett, Auswärtiges Amt, Verlag, Drehbuch,
   Wahlkampf, Übersetzung, Lektorat, Mundartarchiv, Impro, Festrede),
   `.es` = español. Temas conectados con el escenario de cada unidad. */

export const DE_CLOZE_C2: Record<string, CbClozeText[]> = {
  "de-cu-c2-01": [
    {
      id: "cz-de-c2-01-1", title: "Der zu weite Mantel", titleEs: "El abrigo demasiado grande", minutes: 3,
      paragraphs: [
        { it: "Am letzten Nachmittag des Schreibworkshops legt Eva das korrigierte Manuskript auf den Tisch. Der Rand ist voller Bleistiftspuren, und ihr Urteil fällt schonend aus und trotzdem hart: Der Essay trage sein Thema wie einen zu weiten {1} – alles sei drin, aber nichts passe. Jonas, der Stipendiat, nickt und erinnert an die Tradition: Der deutsche Essay liebe den kühnen Anfang, erst die {2}, dann die Belege.", es: "En la última tarde del taller de escritura, Eva pone el manuscrito corregido sobre la mesa. El margen está lleno de marcas de lápiz, y su veredicto resulta benévolo y a la vez duro: el ensayo lleva su tema como un abrigo demasiado grande — está todo dentro, pero nada ajusta. Jonas, el becado, asiente y recuerda la tradición: el ensayo alemán ama el comienzo audaz, primero la tesis, luego las pruebas." },
        { it: "Du schaust auf die leere Seite vor dir. Eva empfiehlt eine {3}: Nicht «Es gibt viele Deutungen der Erinnerung», sondern «Groß ist die Zahl der Deutungen». Und zum Schluss ein {4}, zwei Spiegel, die sich anstarren: «Die Sprache formt das Gedächtnis, und das Gedächtnis formt die {5}.» Der Kaffee auf dem Tisch ist längst kalt.", es: "Miras la página vacía que tienes delante. Eva recomienda una inversión: no «hay muchas interpretaciones de la memoria», sino «grande es el número de interpretaciones». Y para el final, un quiasmo, dos espejos que se miran fijamente: «El lenguaje moldea la memoria, y la memoria moldea el lenguaje». El café de la mesa lleva rato frío." },
      ],
      gaps: [
        { options: ["Mantel", "Koffer", "Schuh"], answer: 0, why: "«wie einen zu weiten» + «alles ist drin, aber nichts passt»: la imagen es la del abrigo grande del veredicto de Eva." },
        { options: ["Beschwerde", "Behauptung", "Bibliothek"], answer: 1, why: "El par «erst die Behauptung, dann die Belege» reproduce la secuencia tesis → pruebas del comienzo audaz." },
        { options: ["Unterschrift", "Uhrzeit", "Umstellung"], answer: 2, why: "El ejemplo pasa de «es gibt» a «Groß ist die Zahl»: mover el predicado al frente es la Umstellung (inversión)." },
        { options: ["Chronik", "Chiasmus", "Chor"], answer: 1, why: "La definición «zwei Spiegel, die sich anstarren» nombra la figura del espejo A–B, B–A: el quiasmo." },
        { options: ["Stimme", "Straße", "Sprache"], answer: 2, why: "El espejo cierra con el mismo elemento del primer miembro: «die Sprache formt das Gedächtnis, und das Gedächtnis formt die Sprache»." },
      ],
    },
    {
      id: "cz-de-c2-01-2", title: "Jonas und die Bibliographien", titleEs: "Jonas y las bibliografías", minutes: 3,
      paragraphs: [
        { it: "Jonas zitiert Adorno gern: Der Essay denke in {1}, nicht in Systemen. In deinem Text denke er allerdings noch in Bibliographien – ein Vorwurf, der sitzt, denn dein Seitenrand ist voller Namen und leerer Gedanken. Du fragst dich, wie viel Belesenheit zu viel ist, und Jonas antwortet mit einer Gegenfrage: Zeigst du, was du gelesen hast, oder was du begriffen {2}?", es: "A Jonas le gusta citar a Adorno: el ensayo piensa en intentos, no en sistemas. En tu texto, en cambio, todavía piensa en bibliografías — un reproche que duele, porque tu margen está lleno de nombres y de pensamientos vacíos. Te preguntas cuánta erudición es demasiada, y Jonas responde con una contra-pregunta: ¿muestras lo que has leído o lo que has comprendido?" },
        { it: "Am Abend ordnest du deine Notizen. Evas Rat klingt simpel und ist schwer: Zitieren sei keine {3}, sondern ein Gespräch; man zeige nur die Stellen, die der eigene Satz wirklich brauche. Du streichst die Hälfte der Namen, und am Ende bleibt ein {4} Satz übrig, der niemanden mehr anführen muss – der erste, der dir gehört. Das Literaturhaus {5} sich langsam, und du gehst als anderer hinaus.", es: "Por la noche ordenas tus notas. El consejo de Eva suena simple y es difícil: citar no es una prueba de valor, sino una conversación; solo se muestran los pasajes que la frase propia realmente necesita. Tachas la mitad de los nombres y al final queda una frase propia que ya no necesita citar a nadie — la primera que te pertenece. El Literaturhaus se va vaciando despacio, y sales transformado." },
      ],
      gaps: [
        { options: ["Versuchen", "Verlusten", "Versammlungen"], answer: 0, why: "La cita de Adorno opone «Versuchen» (intentos) a «Systemen»: es el nombre del género." },
        { options: ["hast", "wirst", "warst"], answer: 0, why: "«was du begriffen hast»: comprender forma el Perfekt con haben; el contraste es leer frente a entender." },
        { options: ["Nebensache", "Mutprobe", "Nachfrage"], answer: 1, why: "Citar para demostrar erudición es una prueba de valor (Mutprobe), no una conversación: el reproche de Eva." },
        { options: ["geliehener", "fremder", "eigener"], answer: 2, why: "El cierre del pasaje: la frase que ya no cita a nadie es la primera «que te pertenece» — propia." },
        { options: ["leert", "lehrt", "liebt"], answer: 0, why: "Es de noche y todos se van: el Literaturhaus se vacía (leert) lentamente." },
      ],
    },
    {
      id: "cz-de-c2-01-3", title: "Die letzte Kunstform der Redlichkeit", titleEs: "La última forma de arte de la honestidad", minutes: 3,
      paragraphs: [
        { it: "Evas meistzitierte Lektion klingt paradox: Was fehlt, arbeitet für Sie. Weglassen ist demnach keine {1}, sondern eine Form der Redlichkeit – man schneidet keine Fakten weg, sondern Erklärungen. Der Leser sei kein {2}, sondern ein Partner: Er vervollständigt, was der Text verschweigt, und dafür braucht er Raum.", es: "La lección más citada de Eva suena paradójica: lo que falta, trabaja a tu favor. La omisión no es pereza, sino una forma de honestidad — no se recortan hechos, sino explicaciones. El lector no es un adversario, sino un socio: completa lo que el texto calla, y para eso necesita espacio." },
        { it: "Am Abend streichst du ein Drittel der ersten Seite und liest sie laut. Der Rhythmus {3} sich, die Sätze bekommen Luft, und der Schluss trägt jetzt – kein {4} mehr, in dem alles erklärt wird. Ein Satz genügt: eine {5}, die man behalten muss. Am Fenster wird es dunkel, und die erste Seite ist gerettet.", es: "Por la noche tachas un tercio de la primera página y la lees en voz alta. El ritmo se calma, las frases cobran aire, y el final ahora sostiene — sin apéndice alguno donde todo se explica. Basta una frase: una pregunta que hay que conservar. En la ventana oscurece, y la primera página está salvada." },
      ],
      gaps: [
        { options: ["Faulheit", "Feier", "Forschung"], answer: 0, why: "El paralelo «keine Faulheit, sondern eine Form der Redlichkeit»: omitir no es holgazanería." },
        { options: ["Gegner", "Gönner", "Gärtner"], answer: 0, why: "«sondern ein Partner» pide el contrario del socio: el adversario (Gegner)." },
        { options: ["beruhigt", "beschleunigt", "verliert"], answer: 0, why: "Tras tachar, las frases «bekommen Luft»: el ritmo se aquieta (beruhigt sich)." },
        { options: ["Anfang", "Anhang", "Atem"], answer: 1, why: "Ya no hace falta una sección final donde todo se explica: el apéndice (Anhang)." },
        { options: ["Fabel", "Frist", "Frage"], answer: 2, why: "El buen ensayo termina con una pregunta que se conserva («eine Frage, die man behalten muss»)." },
      ],
    },
  ],

  "de-cu-c2-02": [
    {
      id: "cz-de-c2-02-1", title: "Fünf Hebungen für eine Pantera", titleEs: "Cinco acentos para una pantera", minutes: 3,
      paragraphs: [
        { it: "Im Seminar liegen die «Neuen Gedichte» auf dem Tisch. Professorin Vogel verlangt lautes Lesen: Das Metrum wolle {1} werden – getragen, nicht gehämmert. Du scannierst die ersten zwei Zeilen des «Panthers» und zählst fünf {2}; die Kadenz am Zeilenende, erklärt Lena, lasse den Vers weiteratmen, beim Vorlesen dürfe man ihn nicht abwürgen.", es: "En el seminario los «Neue Gedichte» están sobre la mesa. La profesora Vogel exige leer en voz alta: el metro quiere ser sostenido — no martillado. Escandeas los dos primeros versos del «Panther» y cuentas cinco acentos; la cadencia del final del verso, explica Lena, deja que el verso siga respirando, y al leerlo en voz alta no se lo debe cortar." },
        { it: "Am Abend ist Lesung im Literaturhaus. Lena rät dir vor dem Auftritt: langsam lesen, die {3} sind Atemzeichen, kein Versäumnis. Bei Celan wird das Enjambement zur {4} – kein Schmuck, sondern Wunde. Du liest zuerst Rilke getragen, dann Celan geschnitten, und der Saal folgt jedem {5}.", es: "Por la tarde hay lectura pública en el Literaturhaus. Lena te aconseja antes de salir: leer despacio, las pausas son signos de respiración, no negligencia. En Celan el encabalgamiento se vuelve herida — no adorno. Lees primero a Rilke sostenido, luego a Celan cortado, y la sala sigue cada verso." },
      ],
      gaps: [
        { options: ["gelernt", "getragen", "gelesen"], answer: 1, why: "«getragen, nicht gehämmert»: el metro se sostiene, la pareja de participios lo define." },
        { options: ["Silben", "Senkungen", "Hebungen"], answer: 2, why: "El verso alemán cuenta golpes tónicos: cinco Hebungen, no sílabas ni partes átonas." },
        { options: ["Pausen", "Proben", "Pulte"], answer: 0, why: "«Atemzeichen, kein Versäumnis»: las pausas son signos de respiración, no un fallo." },
        { options: ["Wunde", "Wunder", "Wurm"], answer: 0, why: "«kein Schmuck, sondern Wunde»: la definición del encabalgamiento en Celan." },
        { options: ["Vers", "Vortrag", "Vertrag"], answer: 0, why: "Rilke y Celan se leen verso a verso: la sala sigue cada verso («jedem Vers»)." },
      ],
    },
    {
      id: "cz-de-c2-02-2", title: "Der Meridian", titleEs: "El Meridiano", minutes: 3,
      paragraphs: [
        { it: "1960 erhielt Celan den Büchner-Preis und sprach die Rede «Der Meridian». Darin nennt er das Gedicht einen {1} zur Begegnung – einen Weg, den man langsam gehe. Der Dichter, sagte er, suche die {2} des Anderen: die Stelle, wo die Sprache fremd wird und doch erreichbar bleibt. Der Saal war still, als er das sagte, und er liest es bis heute nach.", es: "En 1960 Celan recibió el premio Büchner y pronunció el discurso «El Meridiano». En él llama al poema un camino hacia el encuentro — un camino que se recorre despacio. El poeta, dijo, busca la cercanía del Otro: el lugar donde la lengua se vuelve extraña y sin embargo permanece alcanzable. La sala guardó silencio cuando lo dijo, y todavía hoy se lo sigue citando." },
        { it: "Im Seminar diskutiert ihr die Anfangszeile der «Todesfuge»: «Schwarze Milch der Frühe». Die einen sagen, das Bild dulde keine {3}; die anderen hören darin den Rhythmus eines Trauermarschs. Professorin Vogel schlichtet nicht: Sie lässt beide {4} nebeneinander stehen, wie Celan es getan hätte. Am Ende trägst du eine einzige Zeile mit nach Hause – und sie bleibt den ganzen {5} in der Tasche.", es: "En el seminario comentáis el primer verso de la «Todesfuge»: «Leche negra del alba». Unos dicen que la imagen no admite explicación; otros oyen en él el ritmo de una marcha fúnebre. La profesora Vogel no zanja la cuestión: deja ambas interpretaciones una junto a otra, como habría hecho Celan. Al final te llevas a casa un solo verso — y se te queda en el bolsillo el día entero." },
      ],
      gaps: [
        { options: ["Weg", "Witz", "Wein"], answer: 0, why: "«einen Weg, den man langsam gehe»: el poema como camino hacia el encuentro." },
        { options: ["Nähe", "Nachricht", "Nachbarschaft"], answer: 0, why: "La definición sigue: «donde la lengua se vuelve extraña y aun así alcanzable» — es la cercanía del Otro." },
        { options: ["Erklärung", "Übersetzung", "Unterhaltung"], answer: 0, why: "Los primeros dicen que la imagen «no tolera» — lo que no tolera una imagen metafórica es la explicación." },
        { options: ["Dienste", "Deutungen", "Dokumente"], answer: 1, why: "Dos lecturas del verso quedan en pie: ambas interpretaciones (Deutungen)." },
        { options: ["Tag", "Monat", "Winter"], answer: 0, why: "«den ganzen Tag in der Tasche»: el verso acompañado todo el día." },
      ],
    },
    {
      id: "cz-de-c2-02-3", title: "Die Lesung am Abend", titleEs: "La lectura de la tarde", minutes: 3,
      paragraphs: [
        { it: "Um zwanzig Uhr beginnt die Lesung. Der Autor tritt ohne {1} ans Pult, liest in geschlossenem Ton, und das Publikum hört in Stille – so ist der Ritus der Dichterlesung. Nur am Ende, nach dem {2}, werden Fragen erlaubt; wer vorher ruft, bekommt einen Blick von der letzten Reihe und schweigt.", es: "A las veinte empieza la lectura. El autor se acerca al atril sin anuncio, lee en tono contenido y el público escucha en silencio — así es el rito de la lectura de poetas. Solo al final, después de la última parte, se permiten preguntas; quien grita antes recibe una mirada desde la última fila y calla." },
        { it: "Lena flüstert dir vor dem Auftritt drei {3} zu: langsam, leise, Pausen halten. Auf der Bühne spürst du das Publikum atmen: Bei der weiblichen Kadenz hörst du ein gemeinsames {4}, beim harten Schnitt des «ändern» ein Stocken. Nach der letzten Zeile bleibt es einen {5} still – die beste Antwort des Abends.", es: "Lena te susurra antes de salir tres consejos: despacio, bajo, mantener las pausas. En el escenario sientes respirar al público: con la cadencia femenina oyes una exhalación común, con el corte seco del «ändern» un detenerse. Tras el último verso hay un momento de silencio — la mejor respuesta de la noche." },
      ],
      gaps: [
        { options: ["Ansage", "Anruf", "Anzug"], answer: 0, why: "El rito: sin anuncio previo, el autor pasa al atril y lee en tono contenido." },
        { options: ["Empfang", "Schluss", "Umzug"], answer: 1, why: "Las preguntas llegan solo al final: después del cierre de la lectura." },
        { options: ["Rechnungen", "Reden", "Ratschläge"], answer: 2, why: "«langsam, leise, Pausen halten» son tres consejos susurrados (Ratschläge) antes de salir." },
        { options: ["Ausatmen", "Aufschrei", "Applaus"], answer: 0, why: "La cadencia femenina deja respirar: el público responde con una exhalación común." },
        { options: ["Moment", "Monat", "Morgen"], answer: 0, why: "Tras el último verso hay un instante de silencio: un momento." },
      ],
    },
  ],

  "de-cu-c2-03": [
    {
      id: "cz-de-c2-03-1", title: "Zwölf Pointen und keine Pause", titleEs: "Doce remates y ninguna pausa", minutes: 3,
      paragraphs: [
        { it: "Am Nachmittag vor der Premiere sitzt Frau Kowalski im leeren Saal und hört dein Programm an. Ihr {1} kommt sofort: Der Text habe zwölf Pointen und keine {2} – der Witz sei ein Tier, das jage, und man müsse ihm Raum zum Sprung lassen. Du nickst, als hättest du das schon immer gewusst, und hast es zum ersten Mal gehört.", es: "Por la tarde, antes del estreno, la señora Kowalski se sienta en la sala vacía y escucha tu número. Su veredicto llega de inmediato: el texto tiene doce remates y ninguna pausa — el chiste es un animal que acecha, y hay que dejarle espacio para saltar. Asientes como si siempre lo hubieras sabido, y lo oyes por primera vez." },
        { it: "Timo, das junge Talent der Truppe, verteidigt deine Texte – er stirbt ja selbst jede Nacht auf der {3}. Tempo mache hektisch, sagt er, lustig mache die {4}: erst die Stille, dann der Schlag. Am Abend baust du vor jeder Pointe eine echte Pause ein, und zum ersten Mal lacht das {5} an der richtigen Stelle.", es: "Timo, el talento joven de la troupe, defiende tus textos — él también muere cada noche en el escenario. La velocidad pone histérico, dice; la gracia la hace la tensión: primero el silencio, luego el golpe. Por la noche pones una pausa real antes de cada remate, y por primera vez el público se ríe en el momento justo." },
      ],
      gaps: [
        { options: ["Urlaub", "Urteil", "Unterricht"], answer: 1, why: "Escucha el número y dicta su valoración: «su veredicto llega de inmediato»." },
        { options: ["Pause", "Panne", "Probe"], answer: 0, why: "El diagnóstico: doce remates y ninguna pausa — al animal hay que darle espacio." },
        { options: ["Bühne", "Bank", "Bibliothek"], answer: 0, why: "El artista de la troupe muere cada noche en escena: la Bühne." },
        { options: ["Sorge", "Schnelligkeit", "Spannung"], answer: 2, why: "«erst die Stille, dann der Schlag»: lo que hace la gracia es la tensión, no la velocidad." },
        { options: ["Personal", "Presse", "Publikum"], answer: 2, why: "Con la pausa bien puesta, quien ríe en el momento justo es el público." },
      ],
    },
    {
      id: "cz-de-c2-03-2", title: "Loriots Wohnzimmer", titleEs: "El salón de Loriot", minutes: 3,
      paragraphs: [
        { it: "Nicht alles deutsche Lachen lebt von Politik. Loriot zeigte die zweite {1}: die Tragödie der Höflichkeit, gespielt in Wohnzimmern. Zwei Herren, ein {2} – und die Bestellung wird zur Katastrophe. Nichts passiert, und alles {3}; der Zuschauer lacht über Menschen, die sich nichts mehr zu sagen haben und es höflich verbergen.", es: "No todo el humor alemán vive de la política. Loriot mostró la segunda vía: la tragedia de la cortesía, representada en salones. Dos señores, un café — y el pedido se vuelve catástrofe. No pasa nada, y todo explota; el espectador ríe de personas que ya no tienen nada que decirse y lo ocultan con cortesía." },
        { it: "Sein berühmtester Streich: das «Steinlaus», ein {4}, das es gar nicht gab. Es rutschte in den medizinischen Wörterbuch Pschyrembel und blieb dort jahrzehntelang {5} – der Beweis, dass der deutsche Humor existiert und am liebsten im Gewand der Wissenschaft auftritt.", es: "Su broma más famosa: el «Steinlaus», un animal que jamás existió. Se coló en el diccionario médico Pschyrembel y allí permaneció décadas en pie — la prueba de que el humor alemán existe y de que prefiere presentarse con traje de ciencia." },
      ],
      gaps: [
        { options: ["Richtung", "Rede", "Reihe"], answer: 0, why: "El cabaret político es una vía; el salón burgués de Loriot es la segunda dirección." },
        { options: ["Kino", "Kloster", "Café"], answer: 2, why: "«Zwei Herren, ein Café»: el sketch en el que el pedido se vuelve catástrofe." },
        { options: ["endet", "verstummt", "explodiert"], answer: 2, why: "La fórmula de Loriot: no pasa nada y todo explota." },
        { options: ["Tier", "Titel", "Traum"], answer: 0, why: "El «Steinlaus» figura como un animal inventado en el diccionario médico." },
        { options: ["stehen", "liegen", "fehlen"], answer: 0, why: "La entrada se quedó en el diccionario décadas: blieb dort jahrzehntelang stehen." },
      ],
    },
    {
      id: "cz-de-c2-03-3", title: "Das trockene Gesicht", titleEs: "La cara seca", minutes: 3,
      paragraphs: [
        { it: "Ironie verträgt keinen {1} Blick. Wer fragend schaut, zwingt das Publikum zur Frage; wer trocken bleibt, zwingt es zum Lachen. Kowalski demonstriert es mit einem einzigen Satz: «Da war ich ja wohl wieder zu {2}» – einmal mit hochgezogenen Augenbrauen, einmal ohne. Nur die zweite {3} sitzt, und der Saal lacht beim zweiten Wort.", es: "La ironía no tolera una mirada interrogante. Quien mira preguntando, obliga al público a preguntar; quien se queda seco, lo obliga a reír. Kowalski lo demuestra con una sola frase: «Vaya, otra vez fui tan tonto» — una vez con las cejas levantadas, otra sin ellas. Solo la segunda versión funciona, y la sala se ríe desde la segunda palabra." },
        { it: "Am Abend, vor dem {4}, wiederholst du das Spiel. Der Saal ist voll, die Stimmung gut, und du sagst deinen Satz ganz ohne {5}, wartest zwei Sekunden – und der Raum lacht als einer. Der Rest, sagt Kowalski hinter der Bühne, sei Mut.", es: "Por la noche, antes de la salida a escena, repites el juego. La sala está llena, el ambiente es bueno, y dices tu frase sin ninguna sonrisa, esperas dos segundos — y la sala entera ríe a una. El resto, dice Kowalski entre bastidores, es valor." },
      ],
      gaps: [
        { options: ["fragenden", "freundlichen", "frechen"], answer: 0, why: "«Wer fragend schaut, zwingt das Publikum zur Frage»: la ironía no tolera la mirada interrogante." },
        { options: ["blöd", "blass", "breit"], answer: 0, why: "La frase clásica de la autoironía con partícula: «Da war ich ja wohl wieder zu blöd»." },
        { options: ["Version", "Vorlage", "Versammlung"], answer: 0, why: "Se prueba el Satz dos veces: solo la segunda versión funciona." },
        { options: ["Aufsatz", "Auftritt", "Auftrag"], answer: 1, why: "Por la noche toca salir a escena: antes del Auftritt repites el juego." },
        { options: ["Lärm", "Licht", "Lächeln"], answer: 2, why: "El deadpan: dices la frase sin sonreír y esperas dos segundos." },
      ],
    },
  ],

  "de-cu-c2-04": [
    {
      id: "cz-de-c2-04-1", title: "Seite siebenundvierzig", titleEs: "Página cuarenta y siete", minutes: 3,
      paragraphs: [
        { it: "Im Verlag in Berlin liest Frau Behrens dein Manuskript Seite für Seite. Bei der entscheidenden Stelle hält sie {1}: Deine Heldin laufe durch die Stadt, und der Erzähler erzähle es – dabei könne die dritte Person von {2} atmen. Lassen Sie sie denken, sagt sie und schiebt dir das Blatt zurück, als wäre der Fehler auf deiner Seite der leichteste der Welt.", es: "En la editorial de Berlín la señora Behrens lee tu manuscrito página por página. En el pasaje decisivo se detiene: tu protagonista recorre la ciudad y el narrador lo narra — cuando la tercera persona puede respirar desde dentro. Deje que piense, dice, y te devuelve la hoja como si tu error fuera el más fácil del mundo." },
        { it: "Dana, die Stipendiatin, notiert den Trick von Fontane: «Das ist ein zu weites {3}» – Effi denkt es, und Fontane schreibt es hin, ohne «sie dachte» zu sagen. Der Leser erkenne die innere Stimme an den Deiktika – «heute», «jetzt», «hier» – und an der {4}, die niemand stellt. Am Ende schreibst du die Szene neu: draußen die Stadt, {5} die Stimme.", es: "Dana, la becaria, anota el truco de Fontane: «Es un campo demasiado amplio» — Effi lo piensa y Fontane lo escribe sin decir «ella pensó». El lector reconoce la voz interior por las deixis («hoy», «ahora», «aquí») y por la pregunta que nadie hace. Al final reescribes la escena: fuera la ciudad, dentro la voz." },
      ],
      gaps: [
        { options: ["inne", "an", "aus"], answer: 0, why: "«hält sie inne»: se detiene en el pasaje problemático del manuscrito." },
        { options: ["oben", "außen", "innen"], answer: 2, why: "La tercera persona puede respirar desde dentro: esa es la erlebte Rede." },
        { options: ["Feld", "Fall", "Fest"], answer: 0, why: "La evasiva proverbial de Effi Briest: «das ist ein zu weites Feld»." },
        { options: ["Antwort", "Frage", "Bemerkung"], answer: 1, why: "Cuando la narración pregunta sin que nadie pregunte, la figura toma la palabra." },
        { options: ["danach", "drinnen", "draußen"], answer: 1, why: "El espejo final: «draußen die Stadt, drinnen die Stimme»." },
      ],
    },
    {
      id: "cz-de-c2-04-2", title: "Effi und das weite Feld", titleEs: "Effi y el campo amplio", minutes: 3,
      paragraphs: [
        { it: "Fontane, der große {1} des deutschen Realismus, lehrte den Roman das Schweigen. In «Effi Briest» wird die Ausrede «das ist ein zu weites Feld» {2}: Effi denkt sie, der Erzähler schreibt sie, und niemand erklärt sie. Ganze Gespräche tragen sich allein durch das, was die Figuren nicht sagen.", es: "Fontane, el gran realista del realismo alemán, enseñó a la novela a callar. En «Effi Briest» la excusa «es un campo demasiado amplio» se vuelve proverbial: Effi la piensa, el narrador la escribe, y nadie la explica. Conversaciones enteras se sostienen solo con lo que los personajes no dicen." },
        { it: "Gute Teile des Romans erzählt Fontane in {3} Rede: Effi fühlt sich müde – zu müde für diese Stadt. Die Innenwelt der Figur trägt den Roman, ganz ohne {4} wie «sie dachte». Kritiker nennen das die leiseste Technik der deutschen {5}: Man betritt den Geheimgang als Leser und merkt es erst zu spät.", es: "Buena parte de la novela la narra Fontane en discurso indirecto libre: Effi se siente cansada — demasiado cansada para esa ciudad. El mundo interior del personaje sostiene la novela, sin ningún comentario como «ella pensó». Los críticos llaman a eso la técnica más silenciosa de la prosa alemana: entras al pasadizo como lector y lo notas demasiado tarde." },
      ],
      gaps: [
        { options: ["Romantiker", "Realist", "Rhetoriker"], answer: 1, why: "«des deutschen Realismus»: su gran representante es el realista." },
        { options: ["sprichwörtlich", "sprachlos", "sparsam"], answer: 0, why: "La evasiva se convierte en frase hecha: se vuelve proverbial." },
        { options: ["erlebter", "erzwungener", "eröffneter"], answer: 0, why: "La técnica de Fontane: la erlebte Rede, la voz interior sin marca." },
        { options: ["Kommentar", "Kollege", "Katalog"], answer: 0, why: "Sin ningún comentario introductorio («sie dachte»): la voz entra sin puerta." },
        { options: ["Predigt", "Poesie", "Prosa"], answer: 2, why: "La técnica narrativa pertenece a la novela: la prosa alemana." },
      ],
    },
    {
      id: "cz-de-c2-04-3", title: "Kafkas Präzision", titleEs: "La precisión de Kafka", minutes: 3,
      paragraphs: [
        { it: "Kafka, so sagt man, habe das Erzählen vom {1} gelernt: Präzision ohne Gefühl – und gerade dadurch Gefühl. In der «Verwandlung» wohnt der Erzähler ab der ersten Zeile bei Gregor im Zimmer, ja in seinem {2}: Man liest die berühmte Öffnungsfrage mit dem Schrecken der Figur, nicht mit dem Wissen des Erzählers.", es: "Kafka, se dice, aprendió a narrar en la oficina de seguros: precisión sin sentimiento — y precisamente por eso, sentimiento. En «La metamorfosis» el narrador vive desde la primera línea con Gregor en la habitación, sí, en su espanto: se lee la famosa pregunta inicial con el susto del personaje, no con el saber del narrador." },
        { it: "Dein eigener Versuch beginnt bescheiden: Der Held sitzt im Zug und rechnet still vor sich hin. Warum hatte er nur {3} gesagt? Was für ein {4} Tag! Du merkst, wie die Frage ohne Tür in die Erzählung eintritt – Präteritum plus Frage plus {5}: der Puls der erlebten Rede.", es: "Tu propio intento empieza modesto: el protagonista está sentado en el tren y calcula para sus adentros. ¿Por qué habría dicho que sí? ¡Qué día tan agotador! Notas cómo la pregunta entra en la narración sin puerta — pretérito más pregunta más «nur»: el pulso del discurso indirecto libre." },
      ],
      gaps: [
        { options: ["Versicherungsamt", "Vorlesungssaal", "Verwaltungsrat"], answer: 0, why: "Kafka trabajaba en una aseguradora: la oficina de seguros como escuela de precisión." },
        { options: ["Schlaf", "Schrank", "Schrecken"], answer: 2, why: "El narrador adopta desde la primera frase el espanto de Gregor: in seinem Schrecken." },
        { options: ["nein", "ja", "doch"], answer: 1, why: "«Warum hatte er nur ja gesagt?»: el remordimiento por el sí dado." },
        { options: ["angenehmer", "angesagter", "anstrengender"], answer: 2, why: "La exclamación interior de Gregor es sobre lo agotador de su profesión: qué día tan pesado." },
        { options: ["nun", "nie", "nur"], answer: 2, why: "La fórmula de la erlebten Rede: Präteritum + pregunta + nur." },
      ],
    },
  ],

  "de-cu-c2-05": [
    {
      id: "cz-de-c2-05-1", title: "Der dritte Absatz", titleEs: "El tercer párrafo", minutes: 3,
      paragraphs: [
        { it: "Im Verhandlungsraum des Auswärtigen Amts wird der dritte {1} der gemeinsamen Erklärung poliert. Du hast den Entwurf gebracht – und der Entwurf ist immer {2}. Dr. Steiner misstraut jedem Adjektiv; Botschafterin Haller wahrt derweil die Ruhe und notiert, welche Formeln die Delegationen am Nachmittag noch ertragen.", es: "En la sala de negociación del Auswärtiges Amt se pule el tercer párrafo de la declaración conjunta. Tú trajiste el borrador — y el borrador siempre es sospechoso. El doctor Steiner desconfía de cada adjetivo; la embajadora Haller, mientras tanto, mantiene la calma y anota qué fórmulas tolerarán aún las delegaciones por la tarde." },
        { it: "Das Wort «bekräftigen» trägt zu weit, warnt Steiner. Man einigt sich auf die {3}: «Die Seiten kommen überein, den Dialog fortzusetzen.» Für die Zukunft notierst du dir eine {4} der Diplomatie: «Nicht ausgeschlossen» heißt möglich – aber ohne {5}. Und alle reisen als Sieger ab.", es: "La palabra «bekräftigen» compromete demasiado, advierte Steiner. Se llega a un acuerdo sobre la fórmula: «Las partes acuerdan continuar el diálogo». Para el futuro te apuntas una regla de la diplomacia: «no descartado» significa posible — pero sin responsabilidad. Y todos se marchan como vencedores." },
      ],
      gaps: [
        { options: ["Anfang", "Absatz", "Anhang"], answer: 1, why: "Se pule el tercer párrafo de la declaración: el Absatz." },
        { options: ["veraltet", "verlegt", "verdächtig"], answer: 2, why: "Quien trae el borrador parte con desventaja: el Entwurf siempre es sospechoso." },
        { options: ["Fassung", "Frage", "Farbe"], answer: 0, why: "Tras el rechazo de «bekräftigen» se acuerda la redacción exacta: la fórmula." },
        { options: ["Grenze", "Gruppe", "Grundregel"], answer: 2, why: "Lo que te apuntas para el futuro es una regla básica del oficio." },
        { options: ["Verantwortung", "Verspätung", "Vorbereitung"], answer: 0, why: "«möglich, aber ohne Verantwortung»: el Klartext de la litotes diplomática." },
      ],
    },
    {
      id: "cz-de-c2-05-2", title: "Die Versicherung des Diplomaten", titleEs: "El seguro del diplomático", minutes: 3,
      paragraphs: [
        { it: "Der Konjunktiv ist die {1} des Diplomaten: Er verweigert die Zusage und hält die Tür offen. «Es dürfte im beiderseitigen Interesse liegen» klingt nach {2}, bedeutet aber: wahrscheinlich. Wer würde, könnte und möchte richtig dosiert, klingt verbindlich, ohne sich zu {3}.", es: "El konjunktivo es el seguro del diplomático: niega el compromiso y aun así deja la puerta abierta. «Cabría estimar que conviene a ambas partes» suena a cautela, pero significa: probablemente. Quien dosifica bien würde, podría y möchte, suena comprometido sin comprometerse." },
        { it: "Am Flipchart steht ein {4} aus zwei Wörtern: «Probleme» und «Herausforderungen». Das ist keine Sprachpflege, sagt Steiner, das ist {5}. Am Ende unterschreiben beide Seiten denselben Satz – und jeder liest darin seinen eigenen Sieg.", es: "En la pizarra hay un par de palabras: «problemas» y «retos». Eso no es cuidado del lenguaje, dice Steiner, es posición. Al final ambas partes firman la misma frase — y cada una lee en ella su propia victoria." },
      ],
      gaps: [
        { options: ["Versicherung", "Verzierung", "Verspätung"], answer: 0, why: "Niega la zusage y mantiene la puerta abierta: funciona como un seguro." },
        { options: ["Zugewinn", "Zurückhaltung", "Zorn"], answer: 1, why: "Suena a cautela, pero significa probablemente: la reserva del konjunktivo." },
        { options: ["binden", "beugen", "bewerben"], answer: 0, why: "«ohne sich zu binden»: verbindlich sin compromiso." },
        { options: ["Wortpaar", "Wortspiel", "Wortschatz"], answer: 0, why: "Dos palabras frente a frente en la pizarra: «Probleme» y «Herausforderungen» forman un par." },
        { options: ["Poesie", "Position", "Politik"], answer: 1, why: "«keine Sprachpflege, das ist Position»: elegir la palabra es tomar postura." },
      ],
    },
    {
      id: "cz-de-c2-05-3", title: "Der Sprachendienst", titleEs: "El servicio de lenguas", minutes: 3,
      paragraphs: [
        { it: "Kein Komma der deutschen Diplomatie ist {1}: Der Sprachendienst des Auswärtigen Amts poliert jede Note. Seine Übersetzer bestehen Staatsprüfungen, die zu den {2} des Landes gehören; wer sie besteht, darf Verträge, Reden und Erklärungen {3} – und jede Formulierung mitverantworten.", es: "Ninguna coma de la diplomacia alemana es casual: el servicio de lenguas del Auswärtiges Amt pule cada nota. Sus traductores superan pruebas de estado de las más duras del país; quien las aprueba puede acompañar contratos, discursos y declaraciones — y compartir la responsabilidad de cada formulación." },
        { it: "Bis weit ins zwanzigste Jahrhundert war Französisch die {4} der Verträge; das Deutsche musste sich seinen Platz erobern – samt jener höflichen {5}, in der «nicht ausgeschlossen» die höchste Form des Optimismus ist.", es: "Hasta bien entrado el siglo XX el francés fue la lengua de los tratados; el alemán tuvo que conquistar su sitio — junto con aquella cortesía de la negación en la que «no descartado» es la forma suprema del optimismo." },
      ],
      gaps: [
        { options: ["zufällig", "zwecklos", "zeitweilig"], answer: 0, why: "La precisión del servicio: ninguna coma es casualidad." },
        { options: ["häufigsten", "heitersten", "härtesten"], answer: 2, why: "Las pruebas de estado del servicio de lenguas son legendarias por su dificultad: de las más duras." },
        { options: ["überschreiben", "übersetzen", "überziehen"], answer: 1, why: "Quien aprueba, traduce contratos y discursos: el oficio del Sprachendienst." },
        { options: ["Schrift", "Sprache", "Sitte"], answer: 1, why: "El francés fue la lengua de los tratados hasta el siglo XX." },
        { options: ["Nation", "Navigation", "Negation"], answer: 2, why: "La litotes «nicht ausgeschlossen» es una negación de la negación: la cortesía negativa." },
      ],
    },
  ],

  "de-cu-c2-06": [
    {
      id: "cz-de-c2-06-1", title: "Szene zwölf, erste Fassung", titleEs: "Escena doce, primera versión", minutes: 3,
      paragraphs: [
        { it: "Zur Tischlesung liest Aylin deine Szene zwölf laut vor. Bei der ersten unfilmbaren {1} bleibt sie stehen: «Anne ging zur Tür und dachte an gestern» – das drehe man nicht. Das Drehbuch erzähle im Präsens und zeige nur, was die {2} sieht; der Rest sei Roman, nicht Film.", es: "En la lectura de mesa Aylin lee en voz alta tu escena doce. En la primera emoción no filmable se detiene: «Anne fue a la puerta y pensó en ayer» — eso no se rueda. El guion narra en presente y muestra solo lo que ve la cámara; lo demás es novela, no película." },
        { it: "Ben, der Skriptdoctor, markiert schuldige {3} auf deinem Blatt. «Melancholisch» sei eine Laune, keine {4}. Besser: «Dämmerlicht. Staub in der Luft.» Bis morgen schreibst du die Szene neu – im Präsens, in Bildern, ohne {5} ans Gefühl.", es: "Ben, el consultor de guion, marca los adjetivos culpables de tu hoja. «Melancólica» es un estado de ánimo, no un plano. Mejor: «Luz crepuscular. Polvo en el aire». Para mañana reescribes la escena — en presente, en imágenes, sin órdenes al sentimiento." },
      ],
      gaps: [
        { options: ["Emotion", "Episode", "Empfehlung"], answer: 0, why: "«ging zur Tür und dachte an gestern»: lo no filmable es la emoción invisible." },
        { options: ["Kantine", "Kamera", "Kartei"], answer: 1, why: "El guion muestra solo lo que ve la cámara." },
        { options: ["Adressen", "Auftritte", "Adjektive"], answer: 2, why: "«Melancholisch» es el caso típico: el consultor marca cada adjetivo culpable." },
        { options: ["Einladung", "Einstellung", "Einsicht"], answer: 1, why: "«eine Laune, keine Einstellung»: el sentimiento no es un plano (Einstellung)." },
        { options: ["Bilder", "Besuche", "Befehle"], answer: 2, why: "«keine Befehle ans Gefühl»: el guion no da órdenes a la emoción." },
      ],
    },
    {
      id: "cz-de-c2-06-2", title: "Die Rückblende", titleEs: "El flashback", minutes: 3,
      paragraphs: [
        { it: "Für die Vergangenheit gibt es im Drehbuch keinen eigenen {1}: Auch die Rückblende läuft im Präsens. «Er hatte sie betrogen» schreibt man nicht – man zeigt ein Foto, eine {2}, ein Objekt. Die Kamera kennt kein Gestern, nur {3} und Jetzt.", es: "Para el pasado el guion no tiene un tiempo verbal propio: también el flashback va en presente. «Él la había traicionado» no se escribe — se muestra una foto, un gesto, un objeto. La cámara no conoce ningún ayer, solo luz y ahora." },
        { it: "Dein Modell: «RÜCKBLENDE – INNEN. WOHNUNG – {4}. Ein Mann packt einen Koffer.» Anna steht im Türrahmen und sagt nichts. Ben nickt: Der {5} trägt die Zeit, das Bild trägt die Geschichte – und der Schauspieler trägt den Rest.", es: "Tu modelo: «FLASHBACK – INTERIOR. PISO – DÍA. Un hombre hace una maleta». Anna está en el marco de la puerta y no dice nada. Ben asiente: el rótulo lleva el tiempo, la imagen lleva la historia — y el actor lleva el resto." },
      ],
      gaps: [
        { options: ["Tempus", "Tempel", "Tenor"], answer: 0, why: "El flashback no usa un tiempo verbal propio: siempre Präsens." },
        { options: ["Gericht", "Geste", "Gerüst"], answer: 1, why: "Se muestra una foto, un gesto, un objeto: lo visible del pasado." },
        { options: ["Lied", "Lauf", "Licht"], answer: 2, why: "«kein Gestern, nur Licht und Jetzt»: lo único que registra la cámara." },
        { options: ["DAMALS", "TAG", "GESTERN"], answer: 1, why: "El rótulo de escena marca la luz (TAG/NACHT), nunca el tiempo narrativo." },
        { options: ["Titel", "Text", "Tisch"], answer: 0, why: "El rótulo (RÜCKBLENDE, SCHRIFTTITEL) lleva el salto temporal." },
      ],
    },
    {
      id: "cz-de-c2-06-3", title: "Partitur für Bilder", titleEs: "Partitura de imágenes", minutes: 3,
      paragraphs: [
        { it: "Ein Drehbuch ist eine {1} für Bilder: Alles steht da, aber nichts bewegt sich noch. Beim Schreiben denkst du an Wenders, dessen Firma Road Movies heißt – Geschichten entstehen {2}, und im Drehbuch entstehen sie beim Streichen. Jede gestrichene Zeile ist ein Geschenk an den späteren Zuschauer.", es: "Un guion es una partitura de imágenes: todo está escrito, pero nada se mueve todavía. Al escribir piensas en Wenders, cuya productora se llama Road Movies — las historias nacen por el camino, y en el guion nacen al tachar. Cada línea tachada es un regalo para el espectador futuro." },
        { it: "Bei der Berlinale wird jedes Jahr der Goldene {3} verliehen – im Februar, mitten im Winter. Dein Traum von der großen Palme in Cannes ist fern; doch die Regeln sind überall {4}: Präsens, Bilder, keine Adjektive des {5}. Am Ende zählt, was die Kamera sehen kann.", es: "En la Berlinale se entrega cada año el Oso de Oro — en febrero, en pleno invierno. Tu sueño de la gran Palma en Cannes queda lejos; pero las reglas son en todas partes las mismas: presente, imágenes, ningún adjetivo de emoción. Al final cuenta lo que la cámara puede ver." },
      ],
      gaps: [
        { options: ["Patrone", "Partitur", "Patenschaft"], answer: 1, why: "Todo está escrito pero nada se mueve: el guion como partitura de imágenes." },
        { options: ["über Nacht", "unterwegs", "unterirdisch"], answer: 1, why: "La productora se llama Road Movies: las historias nacen por el camino." },
        { options: ["Löwe", "Adler", "Bär"], answer: 2, why: "El premio de la Berlinale es el Oso de Oro: el oso es el símbolo de Berlín." },
        { options: ["verschieden", "veraltet", "dieselben"], answer: 2, why: "Cannes queda lejos, pero las reglas del oficio son idénticas en todas partes." },
        { options: ["Gewichts", "Gefühls", "Geschmacks"], answer: 1, why: "«Präsens, Bilder»: lo prohibido son los adjetivos de emoción, no filmables." },
      ],
    },
  ],

  "de-cu-c2-07": [
    {
      id: "cz-de-c2-07-1", title: "Drei Minuten Marktplatz", titleEs: "Tres minutos en la plaza", minutes: 3,
      paragraphs: [
        { it: "Im Wahlkampfzimmer einer mittleren Stadt klebt der {1} an der Wand: Marktplatz, zehn Uhr, Mikrofon, drei Minuten. Frau Sander, die Redenschreiberin, sagt: Der Marktplatz höre zu, solange der Kandidat {2} – danach rede der Marktplatz selbst. Also besser drei Minuten, die sitzen, als zehn, die niemand hört.", es: "En el cuartel de campaña de una ciudad mediana el plan está pegado en la pared: plaza del mercado, las diez, micrófono, tres minutos. La señora Sander, la redactora de discursos, dice: la plaza escucha mientras el candidato respira — después la plaza habla sola. Mejor tres minutos que funcionen que diez que nadie escuche." },
        { it: "Du hast eine Passage mit fünf «wir werden»-Sätzen gebaut. Sander warnt: Das Futur sei ein {3} – wer es zu oft sage, klinge wie einer mit offenen {4}. Die Rettung sei die dritte Anapher: Rechenschaft {5} ablegen. Das Publikum verzeihe Versprechungen, wenn es Kontrolle höre.", es: "Has construido un pasaje con cinco frases de «wir werden». Sander advierte: el futuro es un crédito — quien lo dice demasiado suena a alguien con facturas pendientes. La salvación es la tercera anáfora: rendir cuentas. El público perdona las promesas si oye control." },
      ],
      gaps: [
        { options: ["Plan", "Plakat", "Preis"], answer: 0, why: "En la pared está el programa del día: «Marktplatz, zehn Uhr, Mikrofon» — el plan." },
        { options: ["ankommt", "applaudiert", "atmet"], answer: 2, why: "«solange der Kandidat atmet»: la plaza escucha mientras el candidato respira." },
        { options: ["Kompromiss", "Kredit", "Kraftakt"], answer: 1, why: "«Das Futur ist ein Kredit»: promete ahora y se paga luego." },
        { options: ["Rechnungen", "Reisen", "Reden"], answer: 0, why: "Quien promete de más suena a deudor: alguien con facturas pendientes." },
        { options: ["Rücksicht", "Rechnung", "Rechenschaft"], answer: 2, why: "La tercera anáfora que salva a las dos primeras: «Rechenschaft ablegen»." },
      ],
    },
    {
      id: "cz-de-c2-07-2", title: "Keine Experimente", titleEs: "Sin experimentos", minutes: 3,
      paragraphs: [
        { it: "«Keine {1}!» – mit diesen zwei Wörtern gewann Adenauer 1957 die Wahl. Seither hütet jede Partei ihre Slogans wie {2}: Drei Worte, so die Lehre aus jener Zeit, sind mehr wert als ein ganzes Programm – vor allem, wenn sie sich merken lassen, ohne dass jemand nachdenken muss.", es: "«¡Sin experimentos!» — con estas dos palabras ganó Adenauer las elecciones de 1957. Desde entonces cada partido guarda sus eslóganes como reliquias: tres palabras, enseña aquella época, valen más que un programa entero — sobre todo si se recuerdan sin que nadie tenga que pensar." },
        { it: "Der Straßenwahlkampf verlangt anderes als das TV-Duell: Auf dem {3} gibt es Handschlag und Zuruf, im Studio zählt jede {4}. Der Kandidat Wieland übt beides: das Lächeln fürs Volk und die {5} für die Journalisten. Am Ende bleibt ein Satz: «Wir fangen am Montag an.»", es: "La campaña callejera exige otra cosa que el duelo televisivo: en la plaza hay apretón de manos e insultos amables; en el estudio cuenta cada segundo. El candidato Wieland ensaya ambas cosas: la sonrisa para la gente y la sobriedad para los periodistas. Al final queda una frase: «Empezamos el lunes»." },
      ],
      gaps: [
        { options: ["Experimente", "Exemplare", "Exzesse"], answer: 0, why: "El eslogan histórico de Adenauer en 1957: «Keine Experimente!»." },
        { options: ["Requisiten", "Reliquien", "Ruinen"], answer: 1, why: "Los eslóganes se guardan como tesoros del partido: como reliquias." },
        { options: ["Marktplatz", "Meiler", "Museum"], answer: 0, why: "El Straßenwahlkampf se hace en la plaza del mercado: apretón de manos y gritos." },
        { options: ["Sekunde", "Silbe", "Sendung"], answer: 0, why: "En el estudio televisivo el tiempo manda: cuenta cada segundo." },
        { options: ["Schmeichelei", "Schnelligkeit", "Sachlichkeit"], answer: 2, why: "Frente a la sonrisa para el pueblo, con los periodistas manda la sobriedad." },
      ],
    },
    {
      id: "cz-de-c2-07-3", title: "Der Montag hinter dem Versprechen", titleEs: "El lunes detrás de la promesa", minutes: 3,
      paragraphs: [
        { it: "Der Wähler hat gelernt, das Futur zu {1}: Er fragt nach dem Datum hinter dem Versprechen. «Wir werden sanieren» klingt groß; «Wir fangen am Montag an» klingt nach {2}. Deshalb baut Sander in jede Rede genau eine {3} ein – mit Datum, überprüfbar, klein genug zum Halten.", es: "El elector ha aprendido a desactivar el futuro: pregunta por la fecha que hay detrás de la promesa. «Rehabilitaremos» suena grande; «empezamos el lunes» suena a plan. Por eso Sander construye en cada discurso exactamente una promesa — con fecha, verificable, lo bastante pequeña para cumplirla." },
        { it: "Am Abend auf dem Platz probt Wieland den {4}: drei «Wir werden», ein Je-Desto-Satz, dann der Kurzschluss – nein, der {5}: «Wir fangen jetzt an.» Der Applaus kommt pünktlich, wie versprochen.", es: "Por la noche en la plaza Wieland ensaya la salida: tres «wir werden», una frase de «cuanto más», y luego el cortocircuito — no: la frase memorable: «Empezamos ahora». El aplauso llega puntual, como prometido." },
      ],
      gaps: [
        { options: ["entwaffnen", "enttäuschen", "entfernen"], answer: 0, why: "El elector desactiva el futuro preguntando por su fecha: entwaffnen." },
        { options: ["Pathos", "Plan", "Poesie"], answer: 1, why: "El presente con fecha concreta suena a plan, no a pathos." },
        { options: ["Zusage", "Zugabe", "Zeitangabe"], answer: 0, why: "Una sola promesa con fecha por discurso: la Zusage verificable." },
        { options: ["Abschied", "Auftritt", "Auftrag"], answer: 1, why: "Por la noche en la plaza se ensaya la intervención completa: el Auftritt." },
        { options: ["Monolog", "Marathon", "Merksatz"], answer: 2, why: "La frase corta que el público se lleva a casa: el Merksatz." },
      ],
    },
  ],

  "de-cu-c2-08": [
    {
      id: "cz-de-c2-08-1", title: "Der Probetext", titleEs: "La traducción de muestra", minutes: 3,
      paragraphs: [
        { it: "Im Verlag in Frankfurt ist Abgabetag. Die Lektorin Hartmann hat deinen Probetext gelesen und ihn bis Seite drei mit rotem {1} durchgestrichen: «die Wärme des Sommers seines Vaters» – der deutsche Leser {2}: zwei Genitive in einem Atemzug. Im Spanischen steht es genau so; das ist ja das Problem.", es: "En la editorial de Fráncfort es día de entregas. La editora Hartmann ha leído tu traducción de muestra y la ha tachado con lápiz rojo hasta la página tres: «el calor del verano de su padre» — el lector alemán tropieza: dos genitivos en una sola respiración. En español está exactamente así; ese es justamente el problema." },
        { it: "Herr Voss, der alte Übersetzer, nickt mit der {3} dessen, der alle Entwürfe überlebt hat: Übersetzen heiße nicht tragen, sondern tragen {4}. Du löst die Genitivkette auf – «wie warm der Sommer bei seinem Vater gewesen war» – und plötzlich klingt der Satz nach {5} und nicht nach Amtsschimmel.", es: "El señor Voss, el viejo traductor, asiente con la paciencia de quien sobrevivió a todos los borradores: traducir no es cargar, es hacer que camine solo. Deshaces la cadena de genitivos — «cómo de cálido había sido el verano en casa de su padre» — y de pronto la frase suena a Fontane y no a caballo administrativo." },
      ],
      gaps: [
        { options: ["Bleistift", "Besteck", "Buchstaben"], answer: 0, why: "La editora tacha con lápiz rojo: der rote Bleistift." },
        { options: ["schweigt", "stolpert", "staunt"], answer: 1, why: "Dos genitivos en una respiración hacen tropezar al lector alemán." },
        { options: ["Geduld", "Gier", "Gepäck"], answer: 0, why: "La calma del veterano que sobrevivió a todos sus borradores: la paciencia." },
        { options: ["lassen", "lesen", "lachen"], answer: 0, why: "«nicht tragen, sondern tragen lassen»: hacer que el texto camine solo." },
        { options: ["Frisch", "Feuerwerk", "Fontane"], answer: 2, why: "La subordinada disuelta suena al maestro realista — y no a Amtsschimmel." },
      ],
    },
    {
      id: "cz-de-c2-08-2", title: "Die höflichen Feinde", titleEs: "Los enemigos corteses", minutes: 3,
      paragraphs: [
        { it: "Auf Voss' Schreibtisch liegt eine {1} der falschen Freunde: die Not (penuria, no nota), der Roman (novela, no romance), die Rente (pensión, no renta). Die meisten sind {2}, die beide Sprachen angenommen und auseinandergelebt haben; der Übersetzer prüft sie einzeln und in beide Richtungen.", es: "Sobre el escritorio de Voss hay una lista de falsos amigos: die Not (penuria, no nota), der Roman (novela, no romance), die Rente (pensión, no renta). La mayoría son latinismos que ambas lenguas adoptaron y dejaron vivir por separado; el traductor los revisa uno a uno y en ambas direcciones." },
        { it: "Du gehst deinen Text Seite für Seite durch: das Gymnasium (das spanische «instituto»), der {3} (jefe, no cocinero), das Gift (veneno, no regalo), die Firma (empresa; la «firma» del pie es die {4}). Voss nennt die Übersetzung am Ende einen {5} mit dem Leser: Es entscheide die Treue zur Wirkung, nicht die zum Wort.", es: "Repasas tu texto página por página: el Gymnasium (el «instituto» español), el Chef (jefe, no cocinero), el Gift (veneno, no regalo), la Firma (empresa; la «firma» del pie es die Unterschrift). Al final Voss llama a la traducción un pacto con el lector: decide la fidelidad al efecto, no a la palabra." },
      ],
      gaps: [
        { options: ["Liste", "Lücke", "Last"], answer: 0, why: "Not, Roman y Rente en una columna del escritorio: una lista de falsos amigos." },
        { options: ["Legenden", "Latinismen", "Lektionen"], answer: 1, why: "Palabras tomadas del latín que cada lengua llevó a un destino distinto." },
        { options: ["Chef", "Chor", "Charter"], answer: 0, why: "El falso amigo clásico: der Chef es el jefe, no el cocinero." },
        { options: ["Untersuchung", "Unterschrift", "Unterlage"], answer: 1, why: "La «firma» que se pone al pie es la Unterschrift; die Firma es la empresa." },
        { options: ["Preis", "Poker", "Pakt"], answer: 2, why: "La fidelidad al efecto es un acuerdo con el lector: un pacto." },
      ],
    },
    {
      id: "cz-de-c2-08-3", title: "Der Name auf dem Cover", titleEs: "El nombre en la portada", minutes: 3,
      paragraphs: [
        { it: "Deutschland ist der größte {1} für übersetzte Literatur Europas: Mehr Bücher erscheinen hier in Übersetzung als in fast jeder anderen Sprache. Auf der Frankfurter {2}, der größten der Welt, werden diese Rechte gehandelt; Spanien war 2022 {3} des Jahres – und die Hallen waren voller spanischer Romane.", es: "Alemania es el mayor mercado de literatura traducida de Europa: se publican aquí más libros en traducción que en casi cualquier otra lengua. En la Feria del Libro de Fráncfort, la mayor del mundo, se negocian esos derechos; España fue en 2022 país invitado — y los pabellones estaban llenos de novelas españolas." },
        { it: "Der VdÜ, der Verband der Literaturübersetzer, kämpft seit den fünfziger Jahren um {4} Tarife – und um etwas Symbolischeres: den {5} auf dem Cover. In Deutschland steht er dort fast immer; in anderen Märkten bleibt er unsichtbar, und das Buch verliert seinen zweiten Autor.", es: "El VdÜ, la asociación de traductores literarios, lucha desde los años cincuenta por tarifas justas — y por algo más simbólico: el nombre en la portada. En Alemania casi siempre está; en otros mercados queda invisible, y el libro pierde a su segundo autor." },
      ],
      gaps: [
        { options: ["Markt", "Monopol", "Ministerium"], answer: 0, why: "Donde se publican más libros traducidos: el mayor mercado europeo." },
        { options: ["Buchhaltung", "Buchhandlung", "Buchmesse"], answer: 2, why: "La feria del libro de Fráncfort es el mayor mercado mundial de derechos." },
        { options: ["Gastgeschenk", "Gastland", "Gasthaus"], answer: 1, why: "España fue el país invitado de honor de la feria en 2022." },
        { options: ["fette", "feste", "faire"], answer: 2, why: "La asociación lucha por tarifas dignas: tarifas justas (faire Tarife)." },
        { options: ["Namen", "Titel", "Umschlag"], answer: 0, why: "Lo simbólico: que el nombre del traductor figure en la portada." },
      ],
    },
  ],

  "de-cu-c2-09": [
    {
      id: "cz-de-c2-09-1", title: "Die Umzugskartons des Herrn Möller", titleEs: "Las cajas de mudanza del señor Möller", minutes: 3,
      paragraphs: [
        { it: "Im Münchner Lektoratszimmer liegt der Roman von Herrn Möller, einem {1} im Ruhestand, auf dem Tisch. Corinna liest seit Seite eins lauter Umzugskartons: Sätze voller Substantive, die niemand {2}. «Die Durchführung der Überprüfung der Umsetzung der Beschlüsse erfolgt durch den Träger» – wo ist hier das Verb, das etwas {3}?", es: "En la sala de lektorat de Múnich está sobre la mesa la novela del señor Möller, un funcionario jubilado. Desde la página uno Corinna no lee más que cajas de mudanza: frases llenas de sustantivos que nadie abre. «La realización de la comprobación de la aplicación de los acuerdos se efectúa por parte del organismo» — ¿dónde está aquí el verbo que hace algo?" },
        { it: "Möller verteidigt sich: So redeten die Ämter – und wer von den Ämtern gelesen werden wolle, schreibe wie ein {4}. Corinna kontert mit der Urformel des Handwerks: Subjekt, Verb, {5}. «Der Träger prüft, ob die Beschlüsse umgesetzt wurden.» Zwölf Wörter – und man sieht, wer handelt.", es: "Möller se defiende: así hablan las administraciones — y quien quiera que lo lean los ministerios, que escriba como un ministerio. Corinna contraataca con la fórmula originaria del oficio: sujeto, verbo, objeto. «El organismo comprueba si los acuerdos se aplicaron». Doce palabras — y se ve quién actúa." },
      ],
      gaps: [
        { options: ["Beobachter", "Beamten", "Berater"], answer: 1, why: "Escribe en estilo de ministerio porque es un funcionario jubilado." },
        { options: ["öffnet", "ortet", "opfert"], answer: 0, why: "La imagen de las cajas de mudanza: frases de sustantivos que nadie abre." },
        { options: ["tut", "denkt", "liest"], answer: 0, why: "«das Verb, das etwas tut»: el verbo que hace algo ha desaparecido." },
        { options: ["Anwalt", "Antiquariat", "Amt"], answer: 2, why: "Quien quiera ser leído por las administraciones, que escriba como una administración." },
        { options: ["Objekt", "Objektiv", "Obst"], answer: 0, why: "La fórmula del Verbalstil: sujeto, verbo, objeto." },
      ],
    },
    {
      id: "cz-de-c2-09-2", title: "Wer erfolgen sagt", titleEs: "Quien dice efectuarse", minutes: 3,
      paragraphs: [
        { it: "Die Vollzugsverben der Verwaltung – erfolgen, vornehmen, in Anwendung bringen – sind {1} im Ruhestand: Sie sagen alles und meinen nichts. Wer {2} sage, hat nichts zu sagen, lautet Corinnas Merksatz, und Herr Möller rückt auf seinem Stuhl, als hätte jemand sein Lebenswerk mit einem Satz eingestampft.", es: "Los verbos de trámite de la administración — efectuarse, proceder a, poner en aplicación — son verbos jubilados: lo dicen todo y no significan nada. Quien dice «efectuarse» no tiene nada que decir, reza la máxima de Corinna, y el señor Möller se remueve en la silla como si alguien hubiera demolido su obra completa con una frase." },
        { it: "Deine Aufgabe am Nachmittag: jede -ung zurückverwandeln. Aus der {3} wird das Prüfen, aus der Umsetzung das Umsetzen. Aber nicht jedes Substantiv ist der Feind: «Die Ökonomie der Worte» – drei Wörter, ein Gedanke. Kondensieren heißt {4}, nicht verstauen. Ein gutes {5} spart einen Nebensatz; eine Genitivkette beerdigt ihn.", es: "Tu tarea por la tarde: reconvertir cada -ung. De la Prüfung nace el prüfen, de la Umsetzung el umsetzen. Pero no todo sustantivo es el enemigo: «la economía de las palabras» — tres palabras, un pensamiento. Condensar es compactar, no almacenar. Un buen compuesto ahorra una subordinada; una cadena de genitivos la entierra." },
      ],
      gaps: [
        { options: ["Verben", "Verdienste", "Verwaltungen"], answer: 0, why: "Los Vollzugsverben están jubilados: son verbos que ya no trabajan." },
        { options: ["strecken", "erfolgen", "verdichten"], answer: 1, why: "El Merksatz de Corinna apunta al verbo vacío del Nominalstil: erfolgen." },
        { options: ["Predigt", "Pause", "Prüfung"], answer: 2, why: "Cada -ung vuelve a ser verbo: de la Prüfung, el prüfen." },
        { options: ["verschieben", "verlieren", "verdichten"], answer: 2, why: "«heißt verdichten, nicht verstauen»: condensar compacta, no almacena." },
        { options: ["Kompositum", "Kompliment", "Kommission"], answer: 0, why: "Un buen compuesto lleva una frase entera dentro: ahorra la subordinada." },
      ],
    },
    {
      id: "cz-de-c2-09-3", title: "LTI und der rote Bleistift", titleEs: "LTI y el lápiz rojo", minutes: 3,
      paragraphs: [
        { it: "Die Sprachkritik ist fast ein {1} Genre in Deutschland. Victor Klemperer notierte während der Diktatur, wie die Sprache des Regimes für ihre Sprecher {2}; seine Hefte erschienen 1947 unter dem Titel «LTI» – eine Sprachwissenschaft aus dem Widerstand, geschrieben zwischen Hauswand und Hörsaal.", es: "La crítica del lenguaje es casi un género nacional en Alemania. Victor Klemperer anotó durante la dictadura cómo la lengua del régimen pensaba por sus hablantes; sus cuadernos aparecieron en 1947 con el título «LTI» — una lingüística de la resistencia, escrita entre la pared de casa y el aula." },
        { it: "Der Duden, geboren aus dem orthographischen {3} Konrad Dudens, ist die {4} Instanz des Deutschen. Nach der Reform von 1996 dokumentiert er die offizielle {5} – und jede neue Ausgabe löst eine öffentliche Debatte aus. Dein Lektorat tut gut daran, beide Traditionen zu kennen: die Kritik und das Wörterbuch.", es: "El Duden, nacido del diccionario ortográfico de Konrad Duden, es la instancia normativa del alemán. Tras la reforma de 1996 documenta la ortografía oficial — y cada nueva edición desata un debate público. A tu lektorat le conviene conocer ambas tradiciones: la crítica y el diccionario." },
      ],
      gaps: [
        { options: ["nationales", "nervöses", "neues"], answer: 0, why: "La Sprachkritik es casi un género nacional alemán." },
        { options: ["diente", "dachte", "dichtete"], answer: 1, why: "La lengua del régimen «pensaba por» sus hablantes: el hallazgo de Klemperer." },
        { options: ["Wörterbuch", "Werkstatt", "Wohlstand"], answer: 0, why: "El Duden nació del diccionario ortográfico de Konrad Duden." },
        { options: ["native", "nachsichtige", "normative"], answer: 2, why: "El Duden documenta la norma: la instancia normativa del alemán." },
        { options: ["Redewendung", "Rechtsprechung", "Rechtschreibung"], answer: 2, why: "Tras la reforma de 1996 documenta la ortografía oficial." },
      ],
    },
  ],

  "de-cu-c2-10": [
    {
      id: "cz-de-c2-10-1", title: "Griaß di God", titleEs: "Griaß di God", minutes: 3,
      paragraphs: [
        { it: "In Oberbayern schaltest du das Aufnahmegerät ein. Bauer Huber grüßt mit «Griaß di God», setzt sich und lässt die {1} laufen. Erzählen Sie von früher, bitte. Huber redet, wie man's do redt: «Friaras hod a jeda no sei Sensn {2}», und du notierst jedes Wort, auch das, das du erst am Abend verstehen wirst.", es: "En la Alta Baviera enciendes el grabador. El campesino Huber saluda con «Griaß di God», se sienta y deja la máquina correr. Hábleme de antes, por favor. Huber habla como se habla allí: «Friaras hod a jeda no sei Sensn ghåbt», y tú anotas cada palabra, también la que entenderás recién por la noche." },
        { it: "Nach der Wiesmahd habe es eine Brotzeit gegeben, erzählt er, und alle seien {3} gewesen – heit redn die Leit z'samm wie mit d'Apparat. Herr Wagner, der Sachse am Tisch, versteht ihn nur zur {4}. Hochdeutsch sei die Brücke zwischen ihnen, sagt er, die Mundart das {5}.", es: "Después de la siega había merienda, cuenta, y todos estaban juntos — hoy la gente conversa como con los aparatos. El señor Wagner, el sajón de la mesa, solo lo entiende a medias. El Hochdeutsch es el puente entre ambos, dice; el dialecto, el equipaje." },
      ],
      gaps: [
        { options: ["Messe", "Maschine", "Maske"], answer: 1, why: "Se graba con el aparato encendido: deja la máquina correr." },
        { options: ["ghåbt", "ghaut", "gmacht"], answer: 0, why: "La frase bávara de la guadaña: «hod a jeda no sei Sensn ghåbt» (= gehabt)." },
        { options: ["z'haus", "z'samm", "z'ruck"], answer: 1, why: "En la Brotzeit estaban todos juntos: z'samm (= zusammen)." },
        { options: ["Hälfte", "Hilfe", "Hast"], answer: 0, why: "El sajón entiende al bávaro solo a medias: nur zur Hälfte." },
        { options: ["Gepäck", "Geschenk", "Gemüse"], answer: 0, why: "La metáfora de Wagner: el Hochdeutsch es el puente, la Mundart el equipaje." },
      ],
    },
    {
      id: "cz-de-c2-10-2", title: "Drei Wörter für dasselbe Nichts", titleEs: "Tres palabras para la misma nada", minutes: 3,
      paragraphs: [
        { it: "Am Küchentisch entsteht eine {1} der Negation: Der Sachse sagt «keen», der Bayer «koa», das Amt «kein» – drei Wörter für dasselbe {2}. Herr Wagner doziert: Dialekte seien keine {3}, sondern Systeme mit eigenen Lauten, eigener Grammatik, eigenen Wörtern wie «Bemme» und «Brotzeit».", es: "En la mesa de la cocina nace un mapa de la negación: el sajón dice «keen», el bávaro «koa», el ministerio «kein» — tres palabras para la misma nada. El señor Wagner diserta: los dialectos no son errores, sino sistemas con fonética, gramática y léxico propios como «Bemme» y «Brotzeit»." },
        { it: "Du notierst fürs Protokoll: «kein» klinge in Sachsen wie «keen», in Bayern wie «koa»; die {4} zwischen «ik» und «ich» – die Linie von Benrath – teile noch heute die Landschaften in Nieder- und Hochdeutschland. Am Band bleibt alles, wie es gesprochen wurde: Bairisch und Sächsisch auf dem {5}, das Hochdeutsche in der Kartei.", es: "Anotas para el protocolo: «kein» suena en Sajonia como «keen», en Baviera como «koa»; la frontera entre «ik» e «ich» — la línea de Benrath — divide aún hoy los paisajes entre la Alemania baja y la alta. En la cinta queda todo como fue hablado: bávaro y sajón en el registro, el hochdeutsch en la ficha." },
      ],
      gaps: [
        { options: ["Landkarte", "Lektion", "Landung"], answer: 0, why: "Cada región aporta su negación: nace un mapa geográfico de la negación." },
        { options: ["Nebel", "Namen", "Nichts"], answer: 2, why: "La frase citada del curso: tres palabras para la misma nada." },
        { options: ["Farben", "Fehler", "Feste"], answer: 1, why: "Los dialectos son sistemas, no errores: la tesis de Wagner." },
        { options: ["Gasse", "Grenze", "Gabe"], answer: 1, why: "La línea de Benrath es la frontera entre ik e ich." },
        { options: ["Band", "Bild", "Bogen"], answer: 0, why: "La cinta guarda la voz: Bairisch und Sächsisch auf dem Band." },
      ],
    },
    {
      id: "cz-de-c2-10-3", title: "Der Konjunktiv als Handschrift", titleEs: "El konjunktivo como caligrafía", minutes: 3,
      paragraphs: [
        { it: "Am Abend transkribierst du die Aufnahmen. Huber sagte: «Die Maschine mache heute die ganze Wiese in zwei Stunden» – im Protokoll steht: er habe gesagt, sie {1} sie in zwei Stunden. Der Konjunktiv I gebe wieder, ohne zu {2}: die Stimme bleibt die des Bauern, die Verantwortung bleibt beim Protokoll.", es: "Por la noche transcribes las grabaciones. Huber dijo: «La máquina hace hoy el prado entero en dos horas» — en el protocolo queda: dijo que la hacía en dos horas. El Konjunktiv I reproduce sin avalar: la voz sigue siendo la del campesino; la responsabilidad, del protocolo." },
        { it: "Wagner erklärt die Mechanik: Präsens werde zu «er mache», Perfekt zu «er habe geprüft», Futur zu «er werde kommen». Nur wenn die Form mit dem {3} zusammenfalle – etwa «sie kommen» –, springe das Deutsche in den Konjunktiv II: «sie {4}». Am Ende trägst du beides in die Kartei ein: die {5} auf dem Band, die Handschrift im Protokoll.", es: "Wagner explica la mecánica: el presente pasa a «er mache», el Perfekt a «er habe geprüft», el futuro a «er werde kommen». Solo cuando la forma coincide con el indicativo — por ejemplo «sie kommen» — salta el alemán al Konjunktiv II: «sie kämen». Al final registras ambas cosas en la ficha: la voz en la cinta, la caligrafía en el protocolo." },
      ],
      gaps: [
        { options: ["macht", "mache", "machte"], answer: 1, why: "La cita reproducida mantiene el Konjunktiv I: sie mache sie in zwei Stunden." },
        { options: ["verbürgen", "verbessern", "verzerren"], answer: 0, why: "«wiedergeben, ohne zu verbürgen»: reproduce sin responder por ello." },
        { options: ["Infinitiv", "Indikativ", "Imperativ"], answer: 1, why: "El salto al K II ocurre cuando la forma coincide con el indicativo." },
        { options: ["kämen", "käme", "kommen"], answer: 0, why: "Plural «sie kommen» colisiona con el indicativo: el K II plural es «kämen»." },
        { options: ["Stimme", "Stille", "Schrift"], answer: 0, why: "La ficha final guarda la voz en la cinta y la Handschrift en el protocolo." },
      ],
    },
  ],

  "de-cu-c2-11": [
    {
      id: "cz-de-c2-11-1", title: "Die Wortschmiede", titleEs: "La forja de palabras", minutes: 3,
      paragraphs: [
        { it: "In der Wortschmiede des Improtheaters gilt Regel Nummer eins: Wer {1}, verliert. Wörter sind dein Sauerstoff, sagt Maike, die Trainerin. Sie schraubt zwei Wörter ineinander – «Bühne» plus «Angst» –, und du nennst das {2}: «Bühnenangst». Die hast du gerade, und du merkst, dass sie dir beim Namen nennen schon halb so schlimm ist.", es: "En la forja de palabras del teatro de impro vale la regla número uno: quien se bloquea, pierde. Las palabras son tu oxígeno, dice Maike, la entrenadora. Enrosca dos palabras — «Bühne» más «Angst» — y tú nombras el resultado: «Bühnenangst». La tienes ahora mismo, y adviertes que llamándola por su nombre ya duele la mitad." },
        { it: "Das Kompositum ist der {3} der deutschen Sprache: zwei Wörter rein, ein Gedanke heraus. Aber das Grundgesetz gilt: Das {4} Glied bestimmt Bedeutung und Geschlecht. Eine «Angstbühne» wäre eine Bühne, die selbst {5} – sonst nichts. Das Publikum jubelt, und Cem ruft: Nächstes Paar!", es: "El compuesto es el tornillo de banco del idioma alemán: dos palabras entran, un pensamiento sale. Pero rige la ley fundamental: el último elemento determina significado y género. Una «Angstbühne» sería un escenario que tiembla él solo — nada más. El público aplaude, y Cem grita: ¡la siguiente pareja!" },
      ],
      gaps: [
        { options: ["spottet", "stockt", "startet"], answer: 1, why: "La regla de la liga: quien se bloquea (stockt), pierde." },
        { options: ["Ergebnis", "Energie", "Erinnerung"], answer: 0, why: "Dos palabras entran, un pensamiento sale: tú nombras el resultado." },
        { options: ["Schreibtisch", "Schutzwall", "Schraubstock"], answer: 2, why: "La imagen de Maike: el compuesto como tornillo de banco de la lengua." },
        { options: ["längste", "letzte", "lauteste"], answer: 1, why: "«Das letzte Glied bestimmt die Bedeutung»: el último elemento manda." },
        { options: ["zählt", "zahlt", "zittert"], answer: 2, why: "Una «Angstbühne» sería un escenario que tiembla él mismo." },
      ],
    },
    {
      id: "cz-de-c2-11-2", title: "Jein, Teuro, Berlindorf", titleEs: "Jein, Teuro, Berlindorf", minutes: 3,
      paragraphs: [
        { it: "Cem zeigt dir die Kofferwörter: zwei Wörter in einem Koffer, und was herauskommt, gehört {1} – «ja» plus «nein» ergibt «jein», «teuer» plus «Euro» ergibt das «{2}». Die Presse prägt solche Wörter im Wochentakt, und der Duden nimmt die besten davon auf, wenn sie sich bewähren.", es: "Cem te enseña las palabras-maleta: dos palabras en una maleta, y lo que sale pertenece a ambas — «ja» más «nein» da «jein»; «teuer» más «Euro» da el «Teuro». La prensa acuña estas palabras cada semana, y el Duden recoge las mejores cuando se consolidan." },
        { it: "Du probierst dein eigenes: «Berlin» plus «Dorf» ergibt «Berlindorf» – die {3}, in der sich alle kennen. Cem nickt und warnt: Ein Wortspiel muss schneller kommen als der {4}. Und die Regel der Liga: eins pro Szene – bei zweitem {5} das Publikum, bei drittem geht es nach Hause.", es: "Pruebas el tuyo: «Berlin» más «Dorf» da «Berlindorf» — la capital donde todo el mundo se conoce. Cem asiente y advierte: un juego de palabras debe llegar más rápido que la duda. Y la regla de la liga: uno por escena — con el segundo sufre el público; con el tercero se va a casa." },
      ],
      gaps: [
        { options: ["beiden", "keinem", "niemandem"], answer: 0, why: "La definición del Kofferwort: lo que sale pertenece a las dos palabras fundidas." },
        { options: ["Terror", "Taler", "Teuro"], answer: 2, why: "La fusión satírica de teuer + Euro: el golpe de la prensa a la moneda." },
        { options: ["Hauptstraße", "Hauptstadt", "Hauptrolle"], answer: 1, why: "Berlin es la capital; el Kofferwort la pinta como aldea." },
        { options: ["Zwang", "Zweifel", "Zweck"], answer: 1, why: "«schneller kommen als der Zweifel»: llegar antes de que el público dude." },
        { options: ["lehrt", "leidet", "lernt"], answer: 1, why: "La regla completa: con el segundo juego, el público sufre." },
      ],
    },
    {
      id: "cz-de-c2-11-3", title: "Das schattige Plätzchen", titleEs: "El lugarcito a la sombra", minutes: 3,
      paragraphs: [
        { it: "Maike demonstriert die billigste und wirksamste {1}: den Kalauer. «Was ist ein Keks unter einem Baum? – Ein schattiges {2}!» Das Publikum stöhnt – und merkt dich für immer. Deutsche Wortwitze funktionieren {3} genauso wie gesprochen: Der Witz sitzt in der Struktur, nicht im Tonfall.", es: "Maike demuestra el arma más barata y más eficaz: el calambur. «¿Qué es una galleta debajo de un árbol? ¡Un lugarcito a la sombra!» El público gime — y te recuerda para siempre. Los juegos de palabras alemanes funcionan igual por escrito que hablados: el chiste está en la estructura, no en el tono." },
        { it: "Am Samstag ist Match: zwei Teams, ein Schiedsrichter, und das Publikum ruft die {4}. Du stehst zum ersten Mal auf der Bühne, die Bühnenangst kommt wie versprochen – und mit ihr, in der letzten Sekunde, dein {5}: ein eigenes Kofferwort, schneller als der Zweifel.", es: "El sábado hay partido: dos equipos, un árbitro, y el público grita los temas. Subes por primera vez al escenario, el miedo escénico llega como prometió — y con él, en el último segundo, tu hallazgo: una palabra-maleta propia, más rápida que la duda." },
      ],
      gaps: [
        { options: ["Waffe", "Weisheit", "Währung"], answer: 0, why: "«die billigste und wirksamste Waffe: der Kalauer» — la definición de Maike." },
        { options: ["Palast", "Plätzchen", "Parkett"], answer: 1, why: "El doble sentido: galletita (Plätzchen) y lugarcito a la sombra." },
        { options: ["gefragt", "geschrieben", "geübt"], answer: 1, why: "El chiste alemán de palabras funciona igual por escrito que hablado." },
        { options: ["Träume", "Themen", "Termine"], answer: 1, why: "En el formato de liga, el público propone los temas de las escenas." },
        { options: ["Fund", "Feind", "Frust"], answer: 0, why: "Tu hallazgo de último segundo: la palabra-maleta propia (der Fund)." },
      ],
    },
  ],

  "de-cu-c2-12": [
    {
      id: "cz-de-c2-12-1", title: "Die Nacht vor der Paulskirche", titleEs: "La noche antes de la Paulskirche", minutes: 3,
      paragraphs: [
        { it: "Am Vorabend des Friedenspreises sitzt ihr im Hotel gegenüber der {1}. Die Preisträgerin hört dir zu, der Verleger {2} jede Version mit der Stoppuhr. «Stehen die ersten drei Sätze, steht die ganze Rede» – dein Anfang: «Sie hat gesucht. Sie hat {3}. – Und dann hat sie alles verschenkt.»", es: "En vísperas del premio de la paz estáis en el hotel frente a la Paulskirche. La premiada te escucha, el editor cronometra cada versión con el cronómetro. «Si se sostienen las tres primeras frases, se sostiene todo el discurso» — tu apertura: «Buscó. Encontró. — Y entonces lo regaló todo»." },
        { it: "Die Preisträgerin nickt anerkennend – und {4}: Zu glatt. Die Dreiergruppe sei ein feierlicher Motor, aber das Publikum müsse atmen dürfen. Der {5} nach der zweiten Stufe mache die dritte zur Überraschung. Morgen, sagen beide, werde auch das Schweigen probespielt.", es: "La premiada asiente con aprobación — y objeta: demasiado lisa. La tríada es un motor solemne, pero el público debe poder respirar. El quiebro tras el segundo peldaño convierte el tercero en sorpresa. Mañana, dicen ambos, se ensayará también el silencio." },
      ],
      gaps: [
        { options: ["Peterskirche", "Paulskirche", "Paulstraße"], answer: 1, why: "El Friedenspreis se entrega en la Paulskirche de Fráncfort." },
        { options: ["misst", "malt", "meldet"], answer: 0, why: "El editor cronometra cada versión: la mide con la Stoppuhr." },
        { options: ["gefragt", "gezahlt", "gefunden"], answer: 2, why: "La tríada completa: suchen, finden, verschenken." },
        { options: ["murmelt", "moniert", "meldet"], answer: 1, why: "Aprueba y a la vez objeta: «zu glatt» es la objeción." },
        { options: ["Brief", "Brauch", "Bruch"], answer: 2, why: "El quiebro tras el segundo peldaño: der Bruch antes de la cima." },
      ],
    },
    {
      id: "cz-de-c2-12-2", title: "Zeugnis statt Schmeichelei", titleEs: "Testimonio, no lisonja", minutes: 3,
      paragraphs: [
        { it: "Der Verleger erinnert an den Ort: In der Paulskirche tagte 1848 die erste frei gewählte {1} Deutschlands. Wer hier die Festrede halte, halte sie mit der {2} im Rücken – also Zeugnis statt {3}. Jede Stufe des Lobes brauche einen Beweis: eine Seite, ein Zitat, ein Datum.", es: "El editor recuerda el lugar: en la Paulskirche sesionó en 1848 la primera asamblea nacional libremente elegida de Alemania. Quien pronuncia aquí la Festrede la pronuncia con la democracia a la espalda — así que testimonio, no lisonja. Cada peldaño del elogio necesita una prueba: una página, una cita, una fecha." },
        { it: "«Die Leser werden dieses Buch lesen, und es wird an ihnen arbeiten» – das Futur im Indikativ sei ein Versprechen, das man {4} müsse. Der Konjunktiv «möge» bleibe den Toasts vorbehalten. Am Ende der Probe sagt die Preisträgerin den Satz, der alles {5}: Der erste Klang des Applaus gehört dem Namen.", es: "«Los lectores leerán este libro, y trabajará en ellos» — el futuro en indicativo es una promesa que hay que cumplir. El konjunktivo «möge» queda reservado para los brindis. Al final del ensayo la premiada dice la frase que lo ordena todo: el primer sonido del aplauso pertenece al nombre." },
      ],
      gaps: [
        { options: ["Nationalmannschaft", "Nationalversammlung", "Nationalhymne"], answer: 1, why: "En 1848 sesionó en la Paulskirche la primera asamblea nacional elegida." },
        { options: ["Diplomatie", "Dramaturgie", "Demokratie"], answer: 2, why: "«mit der Demokratie im Rücken»: la asamblea de 1848 es el respaldo." },
        { options: ["Show", "Schmeichelei", "Sonntagsrede"], answer: 1, why: "La fórmula del editor: testimonio en vez de lisonja." },
        { options: ["erfinden", "ertragen", "einlösen"], answer: 2, why: "La promesa en indicativo es un crédito que hay que cumplir: einlösen." },
        { options: ["ordnet", "öffnet", "opfert"], answer: 0, why: "La frase final lo pone todo en su sitio: ordena la velada." },
      ],
    },
    {
      id: "cz-de-c2-12-3", title: "Die letzte Geste", titleEs: "El último gesto", minutes: 3,
      paragraphs: [
        { it: "Die Peroration trägt allein die {1}: kurze Sätze, fallende Melodie – und nach dem letzten Wort nichts als {2}. Die Akustik der Paulskirche sei ausgezeichnet, sagt der Verleger, auch für das {3}. Wer rechtzeitig schweigt, lässt dem Applaus den ersten Schritt.", es: "La péroración la sostiene solo la voz: frases cortas, melodía descendente — y tras la última palabra, nada más que pausa. La acústica de la Paulskirche es excelente, dice el editor, también para el silencio. Quien calla a tiempo le deja al aplauso el primer paso." },
        { it: "Am Morgen der Verleihung läuten die Glocken, die Übertragung läuft, und du hältst die Karte mit den letzten drei Sätzen in der Hand: «Dafür danken wir ihr. Dafür bleibt sie. Dafür steht heute ihr {4}.» Du sprichst den Namen – und lässt die Stille {5}, länger als den Applaus.", es: "En la mañana de la entrega suenan las campanas, la retransmisión está en marcha, y sostienes la tarjeta con las tres últimas frases: «Por ello le damos las gracias. Por ello permanece. Por ello hoy está su nombre». Pronuncias el nombre — y dejas que el silencio viva más que el aplauso." },
      ],
      gaps: [
        { options: ["Schrift", "Stille", "Stimme"], answer: 2, why: "Las tres últimas frases las carga solo la voz: die Stimme." },
        { options: ["Papier", "Panik", "Pause"], answer: 2, why: "«nichts als Pause»: tras la última palabra, nada más que pausa." },
        { options: ["Schweigen", "Sprechen", "Spiel"], answer: 0, why: "La acústica es excelente también para el silencio." },
        { options: ["Nacht", "Name", "Nebel"], answer: 1, why: "El último sonido de la velada es el nombre de la premiada." },
        { options: ["laufen", "leuchten", "leben"], answer: 2, why: "«eine Pause, die länger lebt als der Applaus»: el silencio que vive más." },
      ],
    },
  ],
};
