import type { CbClozeText } from "../../cambridge";

/* ═══ DE B2 · Cloze readings — 3 por unidad (inferencia léxica) ════
   Metodología v9.12: el texto en alemán lleva marcadores {1} {2}… que
   el reproductor convierte en huecos; el estudiante deduce la palabra
   por el contexto (Hochdeutsch de Alemania, nivel B2: argumentación y
   matiz). Campos: `.it` = alemán, `.es` = español. */

export const DE_CLOZE_B2: Record<string, CbClozeText[]> = {
  "de-cu-b2-01": [
    {
      id: "cz-de-b2-01-1", title: "Die Talkshow im Hörsaal", titleEs: "La tertulia en el aula magna", minutes: 3,
      paragraphs: [
        { it: "Am Donnerstagabend verwandelte der Debattierclub der Berliner Universität einen Hörsaal in ein Fernsehstudio. Das Thema der Talkshow lautete: das bedingungslose Grundeinkommen. Herr Schneider übernahm die {1}, denn als erfahrener Moderator beherrscht er die Kunst, allen Gästen gerecht zu werden. Lena eröffnete die Debatte mit einem klaren {2}: Das Grundeinkommen würde die Bürokratie vereinfachen.", es: "El jueves por la tarde, el club de debate de la universidad de Berlín convirtió un aula magna en un estudio de televisión. El tema de la tertulia era: la renta básica incondicional. Herr Schneider asumió la moderación, pues como moderador experimentado domina el arte de ser justo con todos los invitados. Lena abrió el debate con un argumento claro: la renta básica simplificaría la burocracia." },
        { it: "Jonas widersprach mit Rechnungen: Die {3} eines solchen Systems gingen in die Milliarden, folglich müssten die Steuern steigen. Das Publikum verfolgte den Streit mit großer {4}, denn jede Seite brachte neue Zahlen. Am Ende dankte Herr Schneider allen Beteiligten für die offene Runde. «So funktioniert Streitkultur», sagte er zum {5}.", es: "Jonas replicó con cálculos: los costes de un sistema así irían a los miles de millones; por consiguiente, tendrían que subir los impuestos. El público siguió la disputa con gran atención, porque cada bando aportaba cifras nuevas. Al final, Herr Schneider dio las gracias a todos los participantes por la ronda tan franca. «Así funciona la cultura del debate», dijo para cerrar." },
      ],
      gaps: [
        { options: ["Moderation", "Begrüßung", "Werbung"], answer: 0, why: "El texto presenta a Herr Schneider como «erfahrener Moderator»: su papel en una Talkshow es dirigir la mesa, es decir, la moderación." },
        { options: ["Argument", "Irrtum", "Kompliment"], answer: 0, why: "Lena está a favor y abre con un motivo racional; lo que sigue («würde die Bürokratie vereinfachen») es su argumento." },
        { options: ["Kosten", "Einnahmen", "Erfolge"], answer: 0, why: "Jonas está en contra y habla de gasto: si el sistema costase miles de millones, los impuestos tendrían que subir." },
        { options: ["Aufmerksamkeit", "Gleichgültigkeit", "Eile"], answer: 0, why: "El público sigue un debate con cifras nuevas: con atención, no con indiferencia ni con prisa." },
        { options: ["Schluss", "Anfang", "Mittagessen"], answer: 0, why: "La frase de Herr Schneider llega cuando la velada termina: es su palabra final (zum Schluss)." },
      ],
    },
    {
      id: "cz-de-b2-01-2", title: "Wie man eine Erörterung baut", titleEs: "Cómo se construye una argumentación escrita", minutes: 3,
      paragraphs: [
        { it: "In der deutschen Universität gilt die Erörterung als Königsdisziplin des Schreibens. Wer eine Position vertritt, sollte seinen Text wie ein {1} aufbauen: erst die These, dann die Begründung, am Ende das Fazit. Viele Studierende verlieren Punkte, weil ihre Argumente wie Perlen ohne {2} hintereinanderliegen – ohne Verbindung fehlt die Logik.", es: "En la universidad alemana, la argumentación escrita se considera la disciplina reina de la redacción. Quien defiende una postura debería construir su texto como un edificio: primero la tesis, luego la fundamentación, al final la conclusión. Muchos estudiantes pierden puntos porque sus argumentos quedan como perlas sin hilo, una detrás de otra: sin conexión falta la lógica." },
        { it: "Die rettenden Wörter heißen zunächst, darüber hinaus, folglich und letztlich. Sie zeigen dem Leser sofort, welchen {3} jedes Argument im Ganzen hat. Wer sie konsequent setzt, schreibt langsamer, aber klarer; die Note verbessert sich meist schon nach wenigen {4}. Das Beste daran: Diese Ordnung hilft auch dem Redner selbst, weil er seinen eigenen {5} besser im Blick behält.", es: "Las palabras que salvan se llaman zunächst, darüber hinaus, folglich y letztlich. Muestran al lector de inmediato qué lugar ocupa cada argumento en el conjunto. Quien las usa con constancia escribe más despacio, pero con más claridad; la nota suele mejorar ya tras pocas semanas. Lo mejor de todo: ese orden también ayuda al propio orador, porque mantiene mejor a la vista su propio hilo conductor." },
      ],
      gaps: [
        { options: ["Gebäude", "Garten", "Zufall"], answer: 0, why: "La imagen que sigue (tesis como base, fundamentación, conclusión) es la de una construcción con cimientos y tejado." },
        { options: ["Kette", "Rechnung", "Pause"], answer: 0, why: "Los argumentos «wie Perlen» necesitan el hilo que los una: la imagen completa es la de un collar (Kette)." },
        { options: ["Platz", "Preis", "Feiertag"], answer: 0, why: "Los conectores muestran qué lugar ocupa cada argumento dentro del recorrido: primero, además, en consecuencia, al final." },
        { options: ["Wochen", "Irrtümern", "Ländern"], answer: 0, why: "«meist schon nach wenigen» pide una unidad de tiempo de práctica: las mejoras se ven tras pocas semanas de ejercicio." },
        { options: ["Faden", "Nachbarn", "Termin"], answer: 0, why: "Quien estructura ve mejor su propia línea de razonamiento: el hilo conductor (der Faden) del discurso." },
      ],
    },
    {
      id: "cz-de-b2-01-3", title: "Jugend debattiert", titleEs: "Juventud debate", minutes: 2,
      paragraphs: [
        { it: "An deutschen Schulen streiten Zehntausende Jugendliche jedes Jahr um die beste Note – und das ist gewollt. Beim Wettbewerb «Jugend debattiert» trainieren Schülerinnen und Schüler, eine Position sauber zu vertreten. Die Regeln sind streng: Wer sein {1} überschreitet, verliert Punkte; wer die Gegenseite persönlich angreift, sowieso. Bewertet wird nicht die {2} der Meinung, sondern die Qualität der Argumente.", es: "En las escuelas alemanas, decenas de miles de jóvenes discuten cada año por la mejor nota, y eso es intencionado. En el concurso «Juventud debate», alumnos y alumnas entrenan cómo defender una postura con limpieza. Las reglas son estrictas: quien supera su tiempo de palabra pierde puntos; quien ataca personalmente al bando contrario, también. No se evalúa la contundencia de la opinión, sino la calidad de los argumentos." },
        { it: "Die finale Runde findet im Berliner Abgeordnetenhaus statt, wo sonst echte {3} diskutieren. Vor der Debatte haben die Teens nur wenige Minuten Zeit, ihre Argumente zu ordnen. Zuerst sammeln sie Pro und Kontra, danach wählen sie die stärksten {4} aus. Viele ehemalige Teilnehmer sagen später: Der Wettbewerb habe ihnen den {5} genommen, vor Gruppen zu sprechen.", es: "La ronda final tiene lugar en la Cámara de Diputados de Berlín, donde de otro modo discuten los políticos de verdad. Antes del debate, los adolescentes solo tienen unos minutos para ordenar sus argumentos. Primero recogen el pro y el contra, después seleccionan los argumentos más sólidos. Muchos ex participantes cuentan luego: el concurso les quitó el miedo a hablar ante el público." },
      ],
      gaps: [
        { options: ["Zeitlimit", "Urlaub", "Appetit"], answer: 0, why: "En un concurso con reglas estrictas lo que se puede superar es el tiempo de palabra; la pista es «überschreitet, verliert Punkte»." },
        { options: ["Schärfe", "Anzahl", "Farbe"], answer: 0, why: "El contraste con «sondern die Qualität der Argumente» indica que no se premia lo cortundente de la postura, sino su calidad." },
        { options: ["Politiker", "Touristen", "Sportler"], answer: 0, why: "El Abgeordnetenhaus es la cámara donde debaten los políticos; el «sonst» marca el contraste con los adolescentes." },
        { options: ["Argumente", "Fehler", "Reime"], answer: 0, why: "Antes del debate se selecciona lo más sólido a favor y en contra: los argumentos." },
        { options: ["Schrecken", "Mut", "Lohn"], answer: 0, why: "«habe ihnen den … genommen, vor Gruppen zu sprechen»: hablar en público dejó de darles miedo." },
      ],
    },
  ],

  "de-cu-b2-02": [
    {
      id: "cz-de-b2-02-1", title: "Die Festrede zum Jubiläum", titleEs: "El discurso del aniversario", minutes: 3,
      paragraphs: [
        { it: "In einer Stuttgarter Firma fällt an diesem Freitag die Entscheidung über eine einzige Frage: Klingt die Rede feierlich genug? Morgen feiert das Unternehmen sein 25-jähriges {1}, und Frau Müller hält die Festrede. Der Entwurf liegt auf dem Tisch, doch Herr Weber runzelt die {2}: Die Sätze sind zu schwerfällig, zu viele Substantive, zu wenig Herz.", es: "En una empresa de Stuttgart, este viernes se decide una única cuestión: ¿suena el discurso bastante solemne? Mañana la empresa celebra su 25.º aniversario y Frau Müller pronuncia el discurso conmemorativo. El borrador está sobre la mesa, pero Herr Weber frunce la frente: las frases son demasiado pesadas, demasiados sustantivos, demasiado poco corazón." },
        { it: "Gemeinsam verwandeln sie die Nominalisierungen in lebendige Verben: Aus «die Begrüßung der Gäste» wird «Wir begrüßen unsere Gäste». Trotzdem bleibt die {3} am Anfang bewusst feierlich, denn Würde verlangt den Nominalstil. Der Wechsel ist der Trick: schwere Substantive für die Eröffnung, warme {4} für die Anekdoten. Als letzte Zeile notiert Frau Müller einen Ausblick: «Glücklicherweise gehen wir jedem Sturm gemeinsam {5}.»", es: "Juntos convierten las nominalizaciones en verbos vivos: de «la bienvenida de los invitados» pasa a «damos la bienvenida a nuestros invitados». Aun así, la apertura mantiene conscientemente la solemnidad, porque la dignidad exige el estilo nominal. La alternancia es el truco: sustantivos pesados para la apertura, verbos cálidos para las anécdotas. Como última línea, Frau Müller anota una mirada al futuro: «Por suerte, avanzamos juntos contra cada tormenta.»" },
      ],
      gaps: [
        { options: ["Jubiläum", "Examen", "Wochenende"], answer: 0, why: "Un discurso para los 25 años de una empresa celebra su aniversario; la cifra «25-jährig» lo confirma." },
        { options: ["Stirn", "Hände", "Schuhe"], answer: 0, why: "Frunce la frente quien lee algo que no le convence: el gesto clásico de preocupación ante el borrador." },
        { options: ["Eröffnung", "Kündigung", "Rechnung"], answer: 0, why: "La apertura del discurso es lo que debe seguir solemne; «am Anfang» lo sitúa." },
        { options: ["Verben", "Zahlen", "Pausen"], answer: 0, why: "El contraste marca la receta: sustantivos pesados para abrir, verbos cálidos para las anécdotas." },
        { options: ["entgegen", "vorbei", "hinterher"], answer: 0, why: "«einem Sturm entgegengehen» = hacer frente a la tormenta: la imagen de avanzar juntos hacia ella." },
      ],
    },
    {
      id: "cz-de-b2-02-2", title: "Wenn das Amt schreibt", titleEs: "Cuando la administración escribe", minutes: 3,
      paragraphs: [
        { it: "Das Amtsdeutsch liebt Substantive: Aus einem einfachen «Sie dürfen parken» wird «Die Erteilung der Parkgenehmigung erfolgt nach der Prüfung der Unterlagen». Behörden packen ganze {1} in einzelne Hauptwörter, bis am Ende keiner mehr weiß, wer eigentlich handelt. Sprachkritiker fordern seit Jahren mehr {2} in den Ämtern – und Bürger, die einfach verstehen wollen, was man von ihnen will.", es: "El alemán administrativo ama los sustantivos: de un simple «puede aparcar» se pasa a «la concesión del permiso de aparcamiento se produce tras el examen de la documentación». Las administraciones meten oraciones enteras en sustantivos sueltos, hasta que al final nadie sabe quién actúa. Los críticos del lenguaje llevan años pidiendo más claridad en las oficinas públicas, y ciudadanos que simplemente quieren entender qué se les pide." },
        { it: "Die Rettung ist oft ein Blick durch die Brille des Übersetzens: Man sucht das {3} im Substantiv und holt es zurück. Aus «nach der Beendigung der Bauarbeiten» wird so «nachdem die Bauarbeiten beendet wurden» – plötzlich {4} man Subjekt, Zeit und Handlung. Behörden in mehreren Bundesländern bieten Kurse an; die Erfolge sind {5}, aber sichtbar: Manche Briefe kommen inzwischen in halbwegs menschlichem Deutsch daher.", es: "El rescate suele ser mirar con las gafas de la traducción: se busca el verbo dentro del sustantivo y se le devuelve la vida. Así, «tras la finalización de las obras» se convierte en «después de que las obras finalizaran»: de pronto se ven sujeto, tiempo y acción. Varias administraciones regionales ofrecen cursos; los éxitos son modestos, pero visibles: algunas cartas llegan ya en un alemán más o menos humano." },
      ],
      gaps: [
        { options: ["Sätze", "Rezepte", "Melodien"], answer: 0, why: "La administración mete oraciones enteras dentro de sustantivos: eso explica la maraña de palabras." },
        { options: ["Klarheit", "Bürokratie", "Musik"], answer: 0, why: "Los críticos piden lo contrario del Amtsdeutsch embrollado: claridad." },
        { options: ["Verb", "Bild", "Zahl"], answer: 0, why: "La técnica de traducir lo nominal a lo verbal consiste en encontrar el verbo escondido dentro del sustantivo." },
        { options: ["sieht", "verliert", "zählt"], answer: 0, why: "Al verbalizar reaparecen sujeto, tiempo y acción: de pronto se ve quién hace qué." },
        { options: ["klein", "riesig", "unendlich"], answer: 0, why: "«aber sichtbar» matiza: los éxitos son modestos aunque se notan; los cursos no cambian una administración de la noche a la mañana." },
      ],
    },
    {
      id: "cz-de-b2-02-3", title: "Ein Toast in zwei Stilen", titleEs: "Un brindis en dos estilos", minutes: 2,
      paragraphs: [
        { it: "Zum Abschied der langjährigen Kollegin Britta steht ihr Team am Freitagabend im Büro zusammen. Zuerst spricht der Chef – feierlich, mit Substantiven wie «in Würdigung ihrer Verdienste». Dann {1} Britta selbst das Wort, und im Raum wird es still. Sie erzählt stattdessen eine kleine {2}: von ihrem ersten Arbeitstag, als der Drucker streikte und niemand den Code kannte.", es: "Para despedir a su compañera de tantos años, Britta, el equipo se reúne el viernes por la noche en la oficina. Primero habla el jefe, solemne, con sustantivos como «en reconocimiento a sus méritos». Luego Britta toma ella misma la palabra y en la sala se hace silencio. Ella cuenta en cambio una pequeña anécdota: su primer día de trabajo, cuando la impresora se declaró en huelga y nadie conocía el código." },
        { it: "Die Gäste lachen, und der Chef nickt anerkennend: Genau diese Mischung macht eine gute Rede aus. Am Ende hebt er das {3} und ruft: «Auf Britta!» Alle antworten im {4}. Wer an diesem Abend noch jemanden trifft, der über Redetheorie sprechen will, hört den wichtigsten Satz des Abends: Herz und Würde sind kein {5}, sondern ein Wechsel.", es: "Los invitados se ríen y el jefe asiente con aprobación: exactamente esa mezcla es lo que constituye un buen discurso. Al final, él levanta la copa y exclama: «¡Por Britta!». Todos responden a coro. Quien se encuentre esa noche a alguien que quiera hablar de teoría del discurso, escuchará la frase más importante de la velada: el corazón y la dignidad no son un contraste, sino una alternancia." },
      ],
      gaps: [
        { options: ["ergreift", "verliert", "verschwendet"], answer: 0, why: "«das Wort ergreifen» es la expresión fija para tomar la palabra en un acto." },
        { options: ["Anekdote", "Rechnung", "Vorlesung"], answer: 0, why: "Lo que sigue (el primer día de trabajo y la impresora rebelde) es una anécdota personal." },
        { options: ["Glas", "Telefon", "Klemmbrett"], answer: 0, why: "Para brindar se levanta la copa: «Auf Britta!» confirma el gesto." },
        { options: ["Chor", "Flüstern", "Saal"], answer: 0, why: "Todos responden a la vez al brindis: al unísono, a coro." },
        { options: ["Gegensatz", "Fehler", "Zufall"], answer: 0, why: "La frase final lo resume: corazón y dignidad no se excluyen, se alternan; no son un contraste, sino un cambio de registro." },
      ],
    },
  ],

  "de-cu-b2-03": [
    {
      id: "cz-de-b2-03-1", title: "Die Klausel im Mietvertrag", titleEs: "La cláusula del contrato de alquiler", minutes: 3,
      paragraphs: [
        { it: "Köln, ein Dienstagmorgen: Timo findet seinen Mitbewohner am Küchentisch, den Mietvertrag vor sich, das Gesicht lang. «Ich habe unterschrieben, ohne das Kleingedruckte zu lesen», sagt dieser. Timo setzt sich und überfliegt die Seiten. Tatsächlich bindet eine Klausel beide ein ganzes Jahr lang an den {1}. «Hättest du ihn mir gezeigt, hätte ich dich sofort {2}», seufzt Timo, der Jura studiert hat.", es: "Colonia, un martes por la mañana: Timo encuentra a su compañero de piso en la mesa de la cocina, el contrato de alquiler delante, la cara larga. «He firmado sin leer la letra pequeña», dice. Timo se sienta y hojea las páginas. En efecto, una cláusula ata a ambos al contrato un año entero. «Si me lo hubieras enseñado, te habría avisado enseguida», suspira Timo, que ha estudiado Derecho." },
        { it: "Am nächsten Morgen sitzt der Betroffene in der Mieterberatung. Die Beraterin hört sich die Geschichte ruhig an, nickt und fragt: «Was hätten Sie anders {3}?» Die Antwort kommt ohne Zögern: «Alles gelesen und nachgefragt.» Die Beraterin lächelt: Genau das sei der {4}, den sie jedem Mieter gebe. Am Ende bleibt Hoffnung: Die Beraterin nennt einen {5} – das Sonderkündigungsrecht.", es: "A la mañana siguiente, el afectado está sentado en la asesoría de inquilinos. La asesora escucha la historia con calma, asiente y pregunta: «¿Qué habría hecho usted de otro modo?». La respuesta llega sin dudarlo: «Leerlo todo y preguntar». La asesora sonríe: eso es exactamente el consejo que ella da a cada inquilino. Al final queda esperanza: la asesora menciona una salida, el derecho de cancelación especial." },
      ],
      gaps: [
        { options: ["Vertrag", "Verein", "Urlaub"], answer: 0, why: "Firmaron el contrato de alquiler y la cláusula los ata a ese documento un año entero." },
        { options: ["gewarnt", "gefragt", "gelobt"], answer: 0, why: "Timo estudia Derecho: si le hubiera enseñado el contrato, le habría avisado del peligro de la cláusula." },
        { options: ["gemacht", "gegessen", "gesungen"], answer: 0, why: "La pregunta de la asesora formula el pasado alternativo: ¿qué habría hecho usted de otro modo?" },
        { options: ["Rat", "Lohn", "Preis"], answer: 0, why: "«das sei der …, den sie jedem Mieter gebe»: lo que se da a un inquilino es un consejo." },
        { options: ["Ausweg", "Irrtum", "Preis"], answer: 0, why: "Si queda esperanza, es porque la asesora ofrece una salida legal: el derecho de cancelación especial." },
      ],
    },
    {
      id: "cz-de-b2-03-2", title: "Hätte ich bloß gefragt!", titleEs: "¡Si hubiera preguntado!", minutes: 3,
      paragraphs: [
        { it: "Im Online-Forum der Kölner Mieterinnen und Mieter sammelt ein Thread die teuersten Fehler beim Unterschreiben. Der erste Beitrag stammt von einer Studentin: Sie hätte die {1} nie zahlen sollen, ohne einen Beleg zu sehen. Der zweite User schreibt, er hätte den Vermieter nach der {2} fragen müssen – jetzt wartet er seit drei Monaten auf seinen reparierten Herd.", es: "En el foro online de los inquilinos de Colonia, un hilo reúne los errores más caros al firmar. La primera contribución es de una estudiante: nunca debería haber pagado la fianza sin ver un resguardo. El segundo usuario escribe que debería haber preguntado al casero por la reparación: ahora lleva tres meses esperando su horno arreglado." },
        { it: "Die Antworten folgen demselben Muster: Hätte ich das bloß gewusst, wäre mir viel {3} erspart geblieben. Ein erfahrener Moderator schaltet sich ein und ordnet die {4}: Erst lesen, dann fragen, dann unterschreiben. Sein Fazit klingt wie eine Lebensweisheit: Aus Fehlern wird man klug, aber klüger wird man, wenn man die {5} anderer nutzt.", es: "Las respuestas siguen el mismo patrón: si lo hubiera sabido, me habría ahorrado mucho disgusto. Un moderador con experiencia interviene y ordena los consejos: primero leer, luego preguntar, luego firmar. Su conclusión suena a sabiduría de vida: de los errores se aprende, pero más listo se vuelve quien aprovecha la experiencia de los demás." },
      ],
      gaps: [
        { options: ["Kaution", "Vorlesung", "Fahrkarte"], answer: 0, why: "En un foro de inquilinos, lo que se paga al firmar sin resguardo es la fianza (Kaution)." },
        { options: ["Reparatur", "Steuererklärung", "Wahl"], answer: 0, why: "La historia del horno roto y los tres meses de espera revela que debió preguntar por la reparación." },
        { options: ["Ärger", "Freude", "Zeitvertreib"], answer: 0, why: "«wäre mir … erspart geblieben»: lo que se ahorra uno al saberlo antes es el disgusto." },
        { options: ["Ratschläge", "Rechnungen", "Vorwürfe"], answer: 0, why: "El moderador ordena la discusión con una regla de tres pasos: leer, preguntar, firmar: ordena los consejos." },
        { options: ["Erfahrungen", "Konten", "Termine"], answer: 0, why: "La sabiduría final: se aprende de los errores propios, pero es más listo aprender de la experiencia ajena." },
      ],
    },
    {
      id: "cz-de-b2-03-3", title: "Beinahe verpasst", titleEs: "Por poco lo pierde", minutes: 2,
      paragraphs: [
        { it: "Lisa hätte an diesem Dienstag fast den wichtigsten Termin ihres Jahres verpasst. Alles begann mit einer kurzen Nacht: Hätte sie den Wecker gestellt, wäre sie um 6 Uhr {1}. So wachte sie erst um 7 Uhr auf, und der Zug nach Bonn fuhr um 7.20 Uhr ab. Sie riss ihre Tasche an sich, vergaß das {2} und rannte zum Bahnhof.", es: "Lisa estuvo a punto de perder este martes la cita más importante de su año. Todo empezó con una noche corta: si hubiera puesto el despertador, se habría despertado a las 6:00. Así despertó a las 7:00, y el tren a Bonn salía a las 7:20. Cogió su bolso de un tirón, olvidó el desayuno y corrió a la estación." },
        { it: "Am Bahnsteig {3} sie gerade noch ein – die Türen schlossen sich hinter ihr. Im Zug fiel ihr Blick auf das leere Fach ihrer Tasche: Die Unterlagen lagen noch zu Hause. Hätte der Zug nicht zehn Minuten Verspätung gehabt, wäre der Termin {4} gewesen. So schickte ihr Kollege die Papiere per Mail, und um 9.15 Uhr betrat Lisa atemlos, aber {5}, den Konferenzraum.", es: "En el andén subió justo a tiempo: las puertas se cerraron tras ella. En el tren, su mirada cayó en el compartimento vacío de su bolso: la documentación seguía en casa. Si el tren no hubiera llegado con diez minutos de retraso, la cita se habría arruinado. Así su compañero le envió los papeles por correo, y a las 9:15 Lisa entró en la sala de juntas sin aliento, pero preparada." },
      ],
      gaps: [
        { options: ["aufgewacht", "eingeschlafen", "aufgeräumt"], answer: 0, why: "Si hubiera puesto el despertador, se habría despertado a las 6: lo contrario de lo que pasó." },
        { options: ["Frühstück", "Zeugnis", "Klimagerät"], answer: 0, why: "En la prisa matinal de correr a la estación se olvida lo prescindible: el desayuno." },
        { options: ["stieg", "fiel", "sah"], answer: 0, why: "«die Türen schlossen sich hinter ihr»: alcanzó a subir al tren justo a tiempo (einsteigen)." },
        { options: ["gescheitert", "gerettet", "gepriesen"], answer: 0, why: "Sin el retraso del tren habría llegado sin sus papeles: la cita se habría arruinado." },
        { options: ["vorbereitet", "verwirrt", "verschlafen"], answer: 0, why: "El «pero» final contrasta con «atemlos»: llegó sin aliento, pero con todo a punto gracias al correo." },
      ],
    },
  ],

  "de-cu-b2-04": [
    {
      id: "cz-de-b2-04-1", title: "Klartext am Rathaus", titleEs: "Claridad en el ayuntamiento", minutes: 3,
      paragraphs: [
        { it: "Nach der Pressekonferenz zur Verkehrswende sitzt Praktikant Tu mit Redakteur Herrn Schmidt am Schreibtisch. Auf dem Tisch liegen die Notizen: Die Bürgermeisterin sagte, die Stadt habe die {1} noch nicht. Schmidt nickt und fragt weiter: «Und das Projekt am Bahnhof?» – «Sie erklärte, es sei fast fertig und werde im Herbst {2}.»", es: "Tras la rueda de prensa sobre la transición de la movilidad, el becario Tu está sentado con el redactor Herr Schmidt ante el escritorio. Sobre la mesa están las notas: la alcaldesa dijo que la ciudad todavía no tiene las cifras. Schmidt asiente y sigue preguntando: «¿Y el proyecto de la estación?». «Explicó que está casi terminado y será inaugurado en otoño.»" },
        { it: "Schmidt ist zufrieden: «Schreiben Sie den Artikel in indirekter Rede – die Leser lieben Klartext.» Tu fragt, welche {3} der Rede er benutzen solle. «Sagen, erklären, betonen – je nach Ton», antwortet Schmidt. Am nächsten Morgen steht der Artikel in der Online-Ausgabe, und die {4} titelt: «Verkehrswende kommt voran». Für Tu ist der Tag ein voller {5}: Sein Name steht zum ersten Mal unter einem Zeitungsartikel.", es: "Schmidt está satisfecho: «Escriba el artículo en estilo indirecto: los lectores aman que se hable claro». Tu pregunta qué verbos de la declaración debería usar. «Sagen, erklären, betonen, según el tono», responde Schmidt. A la mañana siguiente, el artículo está en la edición digital y el periódico titula: «La transición de la movilidad avanza». Para Tu el día es un éxito completo: su nombre aparece por primera vez bajo un artículo de periódico." },
      ],
      gaps: [
        { options: ["Zahlen", "Zeiten", "Zeugen"], answer: 0, why: "El contexto es la Verkehrswende y sus datos: la alcaldesa aún no dispone de la estadística prometida." },
        { options: ["eröffnet", "geschlossen", "geprüft"], answer: 0, why: "Un proyecto casi terminado se inaugura; el «im Herbst» señala la apertura al público." },
        { options: ["Verben", "Zahlen", "Fotos"], answer: 0, why: "«Sagen, erklären, betonen» es la respuesta: pregunta por los verbos de habla para introducir citas." },
        { options: ["Zeitung", "Polizei", "Schule"], answer: 0, why: "Quien pone el titular al día siguiente es el periódico, la edición digital del diario local." },
        { options: ["Erfolg", "Misserfolg", "Zufall"], answer: 0, why: "Su nombre aparece por primera vez bajo un artículo: para el becario es un logro completo." },
      ],
    },
    {
      id: "cz-de-b2-04-2", title: "Die erste Pressekonferenz", titleEs: "La primera rueda de prensa", minutes: 3,
      paragraphs: [
        { it: "Der Rathaussaal ist voll: Rund dreißig Journalistinnen und Journalisten warten auf die Bürgermeisterin. Tu, der neue Praktikant der Lokalredaktion, sitzt in der letzten {1} und schwitzt. Herr Schmidt hatte ihm drei Regeln mitgegeben: erstens genau zuhören, zweitens die {2} mitschreiben, drittens nicht zittern.", es: "El salón del ayuntamiento está lleno: una treintena de periodistas esperan a la alcaldesa. Tu, el nuevo becario de la redacción local, está sentado en la última fila y suda. Herr Schmidt le había dado tres reglas: primero, escuchar con atención; segundo, apuntar las citas; tercero, no temblar." },
        { it: "Nach zwanzig Minuten öffnet sich die {3} für Fragen. Ein Reporter des lokalen Radios fragt nach den Kosten der neuen Radwege. Die Bürgermeisterin antwortet ausweichend; Schmidt notiert zwei {4} für den Artikel. Für die Nachricht zählt am Ende nur, was belegt werden kann – alles andere bleibe {5}. Am Abend fährt Tu nach Hause und weiß: Der Journalismus ist härter, als er dachte – und spannender.", es: "Tras veinte minutos se abre la ronda de preguntas. Un reportero de la radio local pregunta por los costes de los nuevos carriles bici. La alcaldesa responde con evasivas; Schmidt anota dos ideas clave para el artículo. Para la noticia, al final solo cuenta lo que puede documentarse: todo lo demás queda como suposición. Por la noche, Tu vuelve a casa y sabe: el periodismo es más duro de lo que pensaba, y más apasionante." },
      ],
      gaps: [
        { options: ["Reihe", "Küche", "Garderobe"], answer: 0, why: "En un acto con público se ocupa una fila de asientos; el becario se sienta al fondo." },
        { options: ["Zitate", "Rechnungen", "Adressen"], answer: 0, why: "Para escribir después en estilo indirecto hay que apuntar las citas textuales." },
        { options: ["Runde", "Bühne", "Rechnung"], answer: 0, why: "Tras la intervención inicial llega el turno de preguntar: la ronda de preguntas." },
        { options: ["Stichworte", "Fotos", "Blumen"], answer: 0, why: "Schmidt apunta brevemente las ideas clave que luego usarán en la redacción." },
        { options: ["Vermutung", "Pflicht", "Wahnsinn"], answer: 0, why: "En periodismo solo cuenta lo verificable; el resto queda como suposición, no como hecho." },
      ],
    },
    {
      id: "cz-de-b2-04-3", title: "Üben mit der indirekten Rede", titleEs: "Practicar el estilo indirecto", minutes: 2,
      paragraphs: [
        { it: "In der Redaktionsschule in Münster steht heute die indirekte Rede auf dem Plan. Dozentin Frau Berger liest eine Erklärung des Bürgermeisters vor: «Die Brücke wird im Herbst eröffnet.» Die {1}: Wie zitiert man das korrekt, ohne dem Politiker glauben zu müssen? Ein Teilnehmer schreibt den Lösungssatz an die {2}.", es: "En la escuela de redacción de Münster, hoy toca el estilo indirecto. La docente Frau Berger lee en voz alta una declaración del alcalde: «El puente se inaugurará en otoño». La pregunta: ¿cómo se cita eso correctamente, sin tener que creer al político? Un participante escribe la frase con la solución en la pizarra." },
        { it: "Frau Berger nickt: «werde» sei richtig, denn die indirekte Rede brauche {3} zum Original. Eine Studentin fragt, was passiere, wenn Konjunktiv und Indikativ gleich {4}. «Dann weichen Sie auf den Konjunktiv II aus», sagt die Dozentin. Am Ende der Stunde fasst sie die Regel in einem Satz zusammen, den sich alle merken: Wer zitiert, {5} nicht selbst – dafür liefere er die Quelle.", es: "Frau Berger asiente: «werde» es lo correcto, porque el estilo indirecta necesita distancia respecto al original. Una estudiante pregunta qué pasa cuando el subjuntivo y el indicativo suenan igual. «Entonces recurran al Konjunktiv II como alternativa», dice la docente. Al final de la clase, resume la regla en una frase que todos memorizan: quien cita no juzga; para eso aporta la fuente." },
      ],
      gaps: [
        { options: ["Frage", "Antwort", "Prüfung"], answer: 0, why: "Lo que sigue («¿cómo se cita correctamente?») es la pregunta del ejercicio." },
        { options: ["Tafel", "Decke", "Fenster"], answer: 0, why: "En clase se escribe la respuesta en la pizarra para corregirla juntos." },
        { options: ["Distanz", "Nähe", "Lust"], answer: 0, why: "El Konjunktiv I marca la distancia del periodista respecto a lo declarado: cita sin creerlo." },
        { options: ["klingen", "gewinnen", "schweigen"], answer: 0, why: "El problema del Konjunktiv I aparece cuando suena idéntico al indicativo; entonces entra el Fallback." },
        { options: ["urteilt", "schreibt", "liest"], answer: 0, why: "La regla final: quien cita no juzga; para juzgar ya está la fuente." },
      ],
    },
  ],

  "de-cu-b2-05": [
    {
      id: "cz-de-b2-05-1", title: "Das Radio-Essay wird aufgenommen", titleEs: "Se graba el ensayo radiofónico", minutes: 3,
      paragraphs: [
        { it: "Im Studio des Campus-Radios Köln hängt ein Zettel an der Wand: «Zwar zweifeln viele, dennoch glauben wir ans Gute». Es ist das Lieblingszitat von Redakteurin Anna, und es passt zum heutigen {1}: Du sprichst heute dein erstes Radio-Essay über soziale Netzwerke ein. Anna hört sich den Text noch einmal an und schüttelt den Kopf: Die Gegenseite kommt zu {2}.", es: "En el estudio de la radio universitaria de Colonia cuelga un cartel en la pared: «Ciertamente muchos dudan; no obstante, creemos en lo bueno». Es la cita favorita de la redactora Anna, y encaja con el tema de hoy: hoy grabas tu primer ensayo radiofónico sobre las redes sociales. Anna escucha el texto una vez más y niega con la cabeza: el bando contrario queda corto." },
        { it: "Gemeinsam baut ihr eine ehrliche {3} ein: «Zwar verbinden die Plattformen Menschen, aber sie spalten die Gesellschaft auch». Beim dritten Durchgang sitzt der Rhythmus, und die Konnektoren tragen den Text. Anna ist zufrieden: «Genau diese {4} macht das Radio-Essay aus.» Um 18 Uhr wird die Aufnahme gespeichert, und im Flur ruft jemand, der {5} sei fertig – die Sendung läuft am Sonntag.", es: "Juntos incorporáis una concesión honesta: «Ciertamente las plataformas conectan a las personas, pero también dividen a la sociedad». En la tercera pasada, el ritmo encaja y los conectores sostienen el texto. Anna está satisfecha: «Exactamente ese equilibrio es lo que constituye el ensayo radiofónico». A las 18:00 se guarda la grabación y en el pasillo alguien grita que el montaje ya está: el programa se emite el domingo." },
      ],
      gaps: [
        { options: ["Thema", "Wetter", "Geburtstag"], answer: 0, why: "Lo que se graba hoy es el ensayo sobre las redes: el tema del día en el estudio." },
        { options: ["kurz", "lang", "spät"], answer: 0, why: "El defecto clásico que corrige Anna es que el bando contrario queda infrarrepresentado: «zu kurz kommen»." },
        { options: ["Konzession", "Provokation", "Zusammenfassung"], answer: 0, why: "Reconocer el argumento contrario con «zwar … aber» es exactamente una concesión." },
        { options: ["Balance", "Lautstärke", "Melodie"], answer: 0, why: "Anna premia el equilibrio entre crítica y justicia hacia el otro lado: ese equilibrio define el género." },
        { options: ["Schnitt", "Vertrag", "Regen"], answer: 0, why: "Antes de emitir se monta la grabación; que el montaje esté listo cierra la jornada." },
      ],
    },
    {
      id: "cz-de-b2-05-2", title: "Zwar verbunden, aber gespalten", titleEs: "Ciertamente conectados, pero divididos", minutes: 2,
      paragraphs: [
        { it: "Liebe Hörerinnen und Hörer: Zwar verbinden uns die sozialen Netzwerke mit der ganzen Welt, aber sie verlangen einen hohen {1} – unsere Aufmerksamkeit. Wer stundenlang scrollt, obwohl er eigentlich schlafen wollte, kennt dieses Gefühl. Trotz aller Bequemlichkeit bleibt am Ende oft eine leise {2}: Wo sind die letzten drei Stunden geblieben?", es: "Queridas oyentes y queridos oyentes: cierto que las redes sociales nos conectan con el mundo entero, pero cobran un precio alto: nuestra atención. Quien pasa horas haciendo scroll, aunque en realidad quería dormir, conoce esa sensación. A pesar de toda la comodidad, al final queda a menudo un vacío silencioso: ¿dónde están las últimas tres horas?" },
        { it: "Es gibt aber auch die andere Seite: Initiativen kämpfen gegen Hassrede, und in Gruppen finden einsame Menschen {3}. Dennoch bleibe ich skeptisch, was die Algorithmen angeht. Wenn auch nicht jeder zuhören mag – ich probiere es {4}: Wer das Netz bewusst nutzt, bleibt Herr seiner Meinung. Diesen Satz spreche ich zum Schluss langsam und mit {5} in der Stimme, denn er ist das Herz des Essays.", es: "Pero también existe la otra cara: iniciativas luchan contra el discurso de odio, y en los grupos encuentran apoyo las personas solitarias. No obstante, sigo siendo escéptico en lo que respecta a los algoritmos. Si bien no a todo el mundo le apetece escuchar, lo intento de todos modos: quien usa la red con consciencia sigue siendo dueño de su opinión. Esta frase la digo al final despacio y con énfasis en la voz, porque es el corazón del ensayo." },
      ],
      gaps: [
        { options: ["Preis", "Gruß", "Fehler"], answer: 0, why: "Lo que las redes cobran a cambio de la conexión es un precio: la atención, dice el texto." },
        { options: ["Leere", "Rechnung", "Stimme"], answer: 0, why: "La pregunta por las horas perdidas revela la sensación de vacío tras el scroll." },
        { options: ["Unterstützung", "Widerstand", "Konkurrenz"], answer: 0, why: "Para la gente solitaria, los grupos ofrecen ayuda y compañía: apoyo." },
        { options: ["trotzdem", "danach", "niemals"], answer: 0, why: "«Wenn auch nicht jeder zuhören mag – ich probiere es …»: lo intento de todos modos, pese a todo." },
        { options: ["Nachdruck", "Zorn", "Langeweile"], answer: 0, why: "La última frase se dice despacio y con énfasis: con fuerza expresiva en la voz." },
      ],
    },
    {
      id: "cz-de-b2-05-3", title: "O-Töne aus der Hörerschaft", titleEs: "Voces de la audiencia", minutes: 2,
      paragraphs: [
        { it: "Nach der Ausstrahlung des Radio-Essays landen dreißig E-Mails in Annas Postfach. Die erste Hörerin schreibt, sie habe den Text zweimal {1}, weil ihr die Balance gefallen habe. Ein anderer Hörer findet das Thema überbewertet: Zwar seien Netzwerke praktisch, aber darüber werde zu viel {2}.", es: "Tras la emisión del ensayo radiofónico, treinta correos llegan al buzón de Anna. La primera oyente escribe que escuchó el texto dos veces, porque le gustó el equilibrio. Otro oyente encuentra el tema sobrevalorado: cierto que las redes son prácticas, pero se habla demasiado de ellas." },
        { it: "Anna freut sich über jede {3}, denn genau die Mischung aus Zustimmung und Kritik habe sie dem Essay zugetraut. Die längste Mail kommt von einem Rentner, der sich an die Zeit vor dem Internet {4}. Er schließt mit einem Wunsch, den Anna unvergessen bleibt: Reden wir öfter miteinander – am besten bei Kaffee und {5}. Anna druckt den Satz aus und hängt ihn neben ihr Lieblingszitat an die Wand.", es: "Anna se alegra de cada reacción, porque justo la mezcla de aprobación y crítica era lo que le auguraba al ensayo. El correo más largo llega de un jubilado que se acuerda de la época anterior a internet. Cierra con un deseo que Anna no olvida: hablemos más a menudo entre nosotros, mejor aún con café y pastel. Anna imprime la frase y la cuelga junto a su cita favorita en la pared." },
      ],
      gaps: [
        { options: ["gehört", "gekocht", "verschlafen"], answer: 0, why: "Una oyente elogia un texto radiofónico que escuchó dos veces: la radio se oye." },
        { options: ["geredet", "gezahlt", "gelacht"], answer: 0, why: "Quien lo encuentra sobrevalorado cree que se habla demasiado del tema." },
        { options: ["Reaktion", "Rechnung", "Verabredung"], answer: 0, why: "Los correos que llegan tras la emisión son reacciones de la audiencia." },
        { options: ["erinnert", "gefreut", "geärgert"], answer: 0, why: "El jubilado evoca los tiempos anteriores a internet: se acuerda de ellos." },
        { options: ["Kuchen", "Krieg", "Kohle"], answer: 0, why: "La imagen alemana de la conversación amable: Kaffee und Kuchen." },
      ],
    },
  ],

  "de-cu-b2-06": [
    {
      id: "cz-de-b2-06-1", title: "Der Betriebsausflug", titleEs: "La excursión de empresa", minutes: 3,
      paragraphs: [
        { it: "Freitagnachmittag, Kegelbahn in Hamburg-Ottensen: Die Abteilung ist da, die Schuhe sind ausgeliehen, die Stimmung ist bestens. Jonas wirft den ersten {1} – und trifft nichts. «Danke für die Blumen», ruft er der unsichtbaren {2} zu, die gerade applaudieren wollte. Timo trocknet die Kugel mit bedächtigem Ernst, als wäre es ein Meisterschaftsfinale.", es: "Viernes por la tarde, bolera en Hamburgo-Ottensen: el departamento está ahí, los zapatos alquilados, el ambiente inmejorable. Jonas lanza la primera bola, y no da ni una. «Gracias por las flores», le grita al equipo invisible que ya quería aplaudir. Timo seca la bola con una seriedad ponderada, como si fuera una final de campeonato." },
        { it: "Frau Müller, die Abteilungsleiterin, trifft tatsächlich alle neun – und verbeugt sich mit ernstem {3}. «Das nenne ich Teamgeist», sagt Herr Schmidt trocken: «Sie treffen nichts, und die ganze Abteilung leidet mit.» Alle lachen, denn der Ton bleibt {4}: Man darf sich hier necken, solange die Sache amüsant bleibt. Um 17 Uhr gibt es noch eine gemeinsame {5} im Nebenzimmer, und die spitzeste Bemerkung des Tages stammt ausgerechnet vom neuen Praktikanten.", es: "Frau Müller, la jefa de departamento, tumba de verdad los nueve, y hace una reverencia con gesto serio. «Eso llamo yo espíritu de equipo», dice Herr Schmidt con sequedad: «Usted no da una, y todo el departamento sufre con usted». Todos se ríen, porque el tono sigue siendo amable: aquí se puede bromear mientras la cosa divierta. A las 17:00 hay una merienda compartida en el cuarto de al lado, y la ocurrencia más aguda del día sale, cómo no, del nuevo becario." },
      ],
      gaps: [
        { options: ["Ball", "Blick", "Buch"], answer: 0, why: "En la bolera se lanzan bolas; que no derribe nada (trifft nichts) tiene su gracia." },
        { options: ["Mannschaft", "Küche", "Straßenbahn"], answer: 0, why: "La ironía de Jonas va dirigida al equipo invisible que ya quería aplaudirle." },
        { options: ["Gesicht", "Rechnung", "Terminkalender"], answer: 0, why: "Tras el pleno se inclina con gesto solemne: la ironía se sostiene en la cara seria." },
        { options: ["freundlich", "angespannt", "laut"], answer: 0, why: "Todos se ríen: se puede bromear porque el tono sigue siendo amistoso." },
        { options: ["Brotzeit", "Prüfung", "Konferenz"], answer: 0, why: "Tras la bolera, la merienda tradicional alemana: Brotzeit en el cuarto de al lado." },
      ],
    },
    {
      id: "cz-de-b2-06-2", title: "Ironie im Büro", titleEs: "Ironía en la oficina", minutes: 3,
      paragraphs: [
        { it: "Wer in einem deutschen Büro arbeitet, lernt schnell einen Satz fürchten: «Danke für die Blumen». Klingt wie ein {1}, ist aber das Gegenteil: eine höfliche Antwort auf eine gut gemeinte {2}. Die deutsche Bürosprache liebt diese Verpackungen – Lob mit flacher Stimme, Kritik mit Lächeln.", es: "Quien trabaja en una oficina alemana aprende rápido a temer una frase: «Gracias por las flores». Suena a elogio, pero es lo contrario: una respuesta cortés a una pulla bien intencionada. La lengua de oficina alemana ama estos envoltorios: elogio con voz plana, crítica con sonrisa." },
        { it: "Die Signale stehen in jedem guten Ratgeber: flache {3}, gedehnte Vokale, ein «oder?» am Satzende. Wer sie liest, versteht das Büro besser; wer sie {4}, gilt schnell als naiv. Sprachwissenschaftlerinnen erklären die Ironie als soziales {5}: Wer zusammen schmunzelt, gehört zusammen – und wer die Ironie nicht versteht, steht eben draußen.", es: "Las señales están en cualquier buena guía: entonación plana, vocales alargadas, un «oder?» al final de la frase. Quien las lee entiende mejor la oficina; quien las pasa por alto pasa rápido por ingenuo. Las lingüistas explican la ironía como una señal social: quienes sonríen juntos pertenecen al grupo, y quien no entiende la ironía se queda fuera." },
      ],
      gaps: [
        { options: ["Kompliment", "Vertrag", "Umzug"], answer: 0, why: "«Klingt wie …, ist aber das Gegenteil»: suena a elogio, pero es lo contrario." },
        { options: ["Stichelei", "Einladung", "Gehaltszahlung"], answer: 0, why: "«Danke für die Blumen» responde a una pulla, no a un cumplido sincero." },
        { options: ["Melodie", "Schrift", "Pause"], answer: 0, why: "La ironía se reconoce por la entonación plana y monocorde, no por la escritura." },
        { options: ["verpasst", "übt", "bezahlt"], answer: 0, why: "Quien no capta las señales de la ironía pasa por ingenuo en la oficina." },
        { options: ["Signal", "Ereignis", "Verlust"], answer: 0, why: "Las expertas explican la ironía como una señal social: reír juntos crea pertenencia." },
      ],
    },
    {
      id: "cz-de-b2-06-3", title: "Der Meister des Untertexts", titleEs: "El maestro del subtexto", minutes: 2,
      paragraphs: [
        { it: "Vicco von Bülow, genannt Loriot, zeigte den Deutschen ihr eigenes Spiegelbild: Menschen, die höflichste Sätze bilden, während das Chaos um sie herum {1}. In seinen Sketchen klingt selbst der Untergang höflich: «Entschuldigen Sie, ich {2} Sie nicht zu stören» – sagt der Mann, der gerade das Wohnzimmer geflutet hat.", es: "Vicco von Bülow, llamado Loriot, mostró a los alemanes su propio espejo: personas que construyen frases cortesísimas mientras el caos crece a su alrededor. En sus sketches hasta el fin del mundo suena educado: «Disculpe, no quería molestarle», dice el hombre que acaba de inundar el salón." },
        { it: "Seine Figuren reden in Nominalstil, wenn das Leben Verben {3}: «Die Herstellung einer Verständigung erweist sich als schwierig», sagt einer, statt einfach: «Wir verstehen uns nicht». Millionen Deutsche wachsen mit diesen Sätzen {4}; viele gelten heute als Sprichwörter. Der tiefste Satz Loriots könnte über jedem Büro hängen: Wer den Untertext {5}, versteht die Welt – meistens zumindest.", es: "Sus personajes hablan en estilo nominal cuando la vida pide verbos: «La consecución de un entendimiento resulta difícil», dice uno, en lugar de simplemente: «No nos entendemos». Millones de alemanes se crían con estas frases; muchas cuentan hoy como proverbios. La frase más profunda de Loriot podría colgar sobre cualquier oficina: quien lee el subtexto entiende el mundo, al menos casi siempre." },
      ],
      gaps: [
        { options: ["wächst", "schwindet", "schweigt"], answer: 0, why: "Mientras dicen frases cortesísimas, el desorden crece a su alrededor: ese es el chiste." },
        { options: ["wollte", "konnte", "durfte"], answer: 0, why: "La disculpa clásica «no quería molestarle» la dice quien ya ha causado el desastre." },
        { options: ["verlangt", "verbietet", "verschreibt"], answer: 0, why: "Sus personajes hablan en sustantivos cuando la vida pide verbos: el contraste es la broma lingüística." },
        { options: ["auf", "aus", "ein"], answer: 0, why: "Aufwachsen: millones de alemanes se han criado con esas frases; la partícula completa el verbo separable." },
        { options: ["liest", "hört", "findet"], answer: 0, why: "La moraleja: quien lee lo que no se dice, el subtexto, entiende el mundo loriotiano." },
      ],
    },
  ],

  "de-cu-b2-07": [
    {
      id: "cz-de-b2-07-1", title: "Das Lektorat", titleEs: "La corrección de estilo", minutes: 3,
      paragraphs: [
        { it: "Im Lektorat einer Leipziger Zeitschrift liegt ein Artikel auf dem Tisch, der eigentlich fertig ist. Fast fertig, würde Frau Wolff sagen. Sie liest ihn zum dritten Mal, hebt den {1} und zeichnet etwas an. «Hier steht fast alle Nutzer», sagt sie. «Sind es neunzig Prozent oder neunundneunzig? Ohne Zahl schreiben Sie ehrlich die {2}.»", es: "En la corrección de estilo de una revista de Leipzig hay un artículo sobre la mesa que, en principio, ya está listo. Casi listo, diría Frau Wolff. Lo lee por tercera vez, levanta el bolígrafo y marca algo. «Aquí dice casi todos los usuarios», dice. «¿Son el noventa por ciento o el noventa y nueve? Sin cifra, escriba honestamente la mayoría.»" },
        { it: "Der Autor nickt und markiert die Stelle. An der nächsten {3} diskutieren sie über beinahe und fast: Ersteres klinge dramatischer, Letzteres bleibe neutral. Frau Wolff schlägt eine {4} vor: In der Nachricht «fast», im Kommentar «beinahe». Am Ende liest der Autor seinen eigenen Text und staunt: Er ist nicht länger geworden, aber genauer. Genau das, sagt Frau Wolff mit einem Lächeln, sei der {5} ihres Berufs.", es: "El autor asiente y marca el pasaje. En el siguiente punto discuten sobre beinahe y fast: el primero suena más dramático, el segundo se mantiene neutral. Frau Wolff propone una regla: en la noticia, «fast»; en el comentario, «beinahe». Al final, el autor lee su propio texto y se asombra: no se ha alargado, pero sí es más preciso. Eso exactamente, dice Frau Wolff con una sonrisa, es el sentido de su oficio." },
      ],
      gaps: [
        { options: ["Stift", "Koffer", "Wecker"], answer: 0, why: "La editora lee y marca correcciones: levanta el bolígrafo para anotar." },
        { options: ["Mehrheit", "Minderheit", "Summe"], answer: 0, why: "La alternativa honesta a «fast alle» sin cifras es «la mayoría» (die Mehrheit)." },
        { options: ["Stelle", "Station", "Stadt"], answer: 0, why: "Discuten un pasaje concreto del texto: la siguiente «Stelle» del artículo." },
        { options: ["Regel", "Strafe", "Überraschung"], answer: 0, why: "La editora propone una pauta fija: fast en noticias, beinahe en comentarios." },
        { options: ["Sinn", "Lohn", "Unsinn"], answer: 0, why: "Dar precisión sin alargar el texto es justamente el sentido de su trabajo." },
      ],
    },
    {
      id: "cz-de-b2-07-2", title: "87 Prozent statt «fast alle»", titleEs: "87 por ciento en vez de «casi todos»", minutes: 3,
      paragraphs: [
        { it: "In deutschen Redaktionen gilt eine ungeschriebene Regel: Wer «fast alle» schreibt, meint «ich habe nicht {1}». Präzise Zahlen schaffen Vertrauen; vage Wörter erzeugen Misstrauen. Deshalb steht in vielen Styleguides: Vor dem Druck wählt der Redakteur entweder eine Zahl oder die ehrliche {2} «die meisten».", es: "En las redacciones alemanas vale una regla no escrita: quien escribe «casi todos» quiere decir «no he contado». Las cifras precisas crean confianza; las palabras vagas generan desconfianza. Por eso en muchas guías de estilo se lee: antes de imprimir, el redactor elige o una cifra o la formulación honesta «la mayoría»." },
        { it: "Die Leser danken es den Blättern: Studien zeigen, dass präzise formulierte Artikel als {3} glaubwürdiger eingeschätzt werden. Je genauer die Zahl, desto größer das Vertrauen – ein einfacher {4}, den viele Texter nutzen. Es gibt Grenzen: Wer Zahlen erfindet, verliert alles; eine ehrliche {5} schlägt eine geschönte Statistik. Am Ende entscheidet der Leser, ob er der Zeitung glaubt – Wort für Wort.", es: "Los lectores se lo agradecen a los periódicos: los estudios muestran que los artículos formulados con precisión se consideran sensiblemente más creíbles. Cuanto más exacta la cifra, mayor la confianza: una relación simple que muchos redactores aprovechan. Hay límites: quien inventa cifras lo pierde todo; una laguna honesta vale más que una estadística maquillada. Al final, el lector decide si cree al periódico, palabra por palabra." },
      ],
      gaps: [
        { options: ["gezählt", "geträumt", "gelacht"], answer: 0, why: "«fast alle» delata que el redactor no contó: la cifra exacta exige contar." },
        { options: ["Formulierung", "Übersetzung", "Unterschrift"], answer: 0, why: "Sin cifras, la opción honesta es la formulación «die meisten»: elegir palabra es elegir verdad." },
        { options: ["deutlich", "leicht", "kaum"], answer: 0, why: "Los estudios muestran que los artículos precisos se juzgan sensiblemente más creíbles." },
        { options: ["Zusammenhang", "Witz", "Unfall"], answer: 0, why: "«Je genauer die Zahl, desto größer das Vertrauen»: esa relación proporcional es la que aprovechan los redactores." },
        { options: ["Lücke", "Lüge", "Lösung"], answer: 0, why: "El texto opone honestidad a maquillaje: una laguna admitida vence a una estadística embellecida." },
      ],
    },
    {
      id: "cz-de-b2-07-3", title: "Je genauer, desto besser", titleEs: "Cuanto más preciso, mejor", minutes: 2,
      paragraphs: [
        { it: "Im Sprachkurs für technische Redaktion übt man einen Satz, der wie ein {1} klingt: «Je genauer die Anleitung, desto sicherer der Nutzer». Die Studierenden lernen, dass Präzision keine {2} ist, sondern Respekt: Wer genau schreibt, nimmt den Leser ernst.", es: "En el curso de redacción técnica se practica una frase que suena a ley: «Cuanto más precisa la instrucción, más seguro el usuario». Los estudiantes aprenden que la precisión no es un capricho, sino respeto: quien escribe con exactitud se toma en serio al lector." },
        { it: "Der Dozent hält zwei Sätze an die Tafel. Der erste: «Drücken Sie den Knopf». Der zweite: «Drücken Sie den roten Knopf am hinteren {3} des Geräts für genau drei Sekunden». Welcher Satz führt schneller zum Ziel? Die Klasse hebt die {4}: der zweite. «Sehen Sie», sagt der Dozent, «erst die Details machen die {5} vollständig.» Wer das verstanden hat, schreibt Anleitungen, die niemand mehr fragen lassen.", es: "El docente escribe dos frases en la pizarra. La primera: «Pulse el botón». La segunda: «Pulse el botón rojo del borde posterior del aparato durante exactamente tres segundos». ¿Cuál lleva antes al objetivo? La clase levanta las manos: la segunda. «¿Ven?», dice el docente, «solo los detalles completan la instrucción». Quien entiende eso escribe manuales que ya no dejan preguntas." },
      ],
      gaps: [
        { options: ["Gesetz", "Witz", "Gerücht"], answer: 0, why: "La frase proporcional suena a regla universal, casi a ley de la naturaleza técnica." },
        { options: ["Laune", "Strafe", "Übung"], answer: 0, why: "El contraste con «sondern Respekt» indica que la precisión no es capricho: es consideración con el lector." },
        { options: ["Rand", "Preis", "Titel"], answer: 0, why: "El botón se localiza en el borde posterior del aparato: localización espacial precisa." },
        { options: ["Hände", "Koffer", "Jacken"], answer: 0, why: "Votación con gesto: levantan las manos a favor de la segunda frase." },
        { options: ["Anweisung", "Erfindung", "Übersetzung"], answer: 0, why: "La conclusión del docente: los detalles completan la instrucción." },
      ],
    },
  ],

  "de-cu-b2-08": [
    {
      id: "cz-de-b2-08-1", title: "Die Schlagzeilen des Tages", titleEs: "Los titulares del día", minutes: 3,
      paragraphs: [
        { it: "In der Redaktionskonferenz in Düsseldorf liegen die Zeitungen des Tages auf dem Tisch. Chefredakteur Herr Schmidt zeigt auf eine {1}: «Streik lässt sich nicht vermeiden». «Was fällt Ihnen auf?», fragt er den neuen Volontär. Der zögert und antwortet: «Da steht kein Passiv mit werden?» – «Genau. Die Presse meidet es, weil {2} Platz und Zeit kostet.»", es: "En la conferencia de redacción de Düsseldorf están sobre la mesa los periódicos del día. El redactor jefe Herr Schmidt señala un titular: «La huelga no se puede evitar». «¿Qué le llama la atención?», pregunta al nuevo aspirante. Este duda y responde: «¿Ahí no hay pasivo con werden?». «Exacto. La prensa lo evita porque cuesta espacio y tiempo, ambas cosas escasas.»" },
        { it: "Der Volontär liest die nächste Zeile: «Brücke nur mit Ticket zu überqueren». Diesmal {3} er schneller: «sein zu plus Infinitiv – hier im Sinne von müssen». Schmidt nickt zufrieden und ergänzt die dritte Variante: «Das Gelände ist begehbar» – die Endung {4}. Zum Schluss stellt der Chef eine Fangfrage: Wie kürzt man «kann nicht repariert werden»? Der Volontär denkt nach und sagt: «Lässt sich nicht {5}.» Die Runde applaudiert.", es: "El aspirante lee la línea siguiente: «Puente solo cruzable con billete». Esta vez acierta más rápido: «sein zu más infinitivo, aquí en el sentido de müssen». Schmidt asiente satisfecho y añade la tercera variante: «El recinto es transitable», el sufijo -bar. Para terminar, el jefe lanza una pregunta capciosa: ¿cómo se abrevia «kann nicht repariert werden»? El aspirante piensa y dice: «Lässt sich nicht reparieren». La mesa aplaude." },
      ],
      gaps: [
        { options: ["Schlagzeile", "Fußnote", "Werbung"], answer: 0, why: "Lo que se señala en el periódico y se cita entre comillas es el titular del día." },
        { options: ["beides", "keins", "niemand"], answer: 0, why: "El pasivo largo cuesta espacio y tiempo: las dos cosas escasean en la prensa." },
        { options: ["rät", "läuft", "isst"], answer: 0, why: "La segunda vez el aspirante acierta más rápido: adivina la estructura sin ayuda." },
        { options: ["-bar", "-los", "-haft"], answer: 0, why: "La tercera alternativa del pasivo es el sufijo -bar: begehbar = transitable." },
        { options: ["reparieren", "kaufen", "verlieren"], answer: 0, why: "La versión corta de «kann nicht repariert werden» es «lässt sich nicht reparieren»: el mismo infinitivo." },
      ],
    },
    {
      id: "cz-de-b2-08-2", title: "Platz ist Geld", titleEs: "El espacio es dinero", minutes: 3,
      paragraphs: [
        { it: "Warum schreiben deutsche Zeitungen so kurze Sätze? Die Antwort hängt in jeder Redaktion an der Wand: Platz ist {1}. Ein Passiv mit werden braucht oft zwei Zeilen; die Alternative braucht eine. Deshalb lieben Redaktionen die Passiv-Ersatzformen: sich lassen, sein zu und die {2} mit -bar.", es: "¿Por qué escriben los periódicos alemanes frases tan cortas? La respuesta cuelga en todas las redacciones: el espacio es dinero. Un pasivo con werden a menudo necesita dos líneas; la alternativa, una sola. Por eso a las redacciones les encantan las formas sustitutas del pasivo: sich lassen, sein zu y los adjetivos con -bar." },
        { it: "Auch die Komposita sparen Platz: «Datenschutzhinweise» steht in einem Wort, wo andere Sprachen acht Wörter {3}. Fremdsprachige Leser stolpern darüber, deutsche finden es {4}. Die Kehrseite: Wer alles abkürzt, wird missverstanden. Deshalb steht im Styleguide eine letzte Regel: Kürze ja – aber nie auf Kosten der {5}. Sonst spart der Text Zeilen und verliert Leser.", es: "También los compuestos ahorran espacio: «Datenschutzhinweise» cabe en una palabra, donde otras lenguas necesitan ocho. Los lectores extranjeros tropiezan con ellas; los alemanes las encuentran prácticas. El reverso: quien lo abrevia todo acaba malinterpretado. Por eso en la guía de estilo hay una última regla: brevedad sí, pero nunca a costa de la claridad. Si no, el texto ahorra líneas y pierde lectores." },
      ],
      gaps: [
        { options: ["Geld", "Zeit", "Kaffee"], answer: 0, why: "El lema periodístico justifica la brevedad: el espacio cuesta dinero." },
        { options: ["Adjektive", "Substantive", "Abkürzungen"], answer: 0, why: "La tercera alternativa nombrada crea adjetivos: begehbar, lesbar, machbar." },
        { options: ["braucht", "liest", "zählt"], answer: 0, why: "Donde otras lenguas necesitan una frase entera, el compuesto alemán cabe en una palabra." },
        { options: ["praktisch", "unansehnlich", "gefährlich"], answer: 0, why: "Los alemanes encuentran práctica esa compresión; los extranjeros tropiezan con ella." },
        { options: ["Klarheit", "Geschwindigkeit", "Werbung"], answer: 0, why: "La regla final protege la comprensión: abreviar sí, pero nunca a costa de la claridad." },
      ],
    },
    {
      id: "cz-de-b2-08-3", title: "Der Presserat", titleEs: "El consejo de prensa", minutes: 2,
      paragraphs: [
        { it: "Wer sich über einen Zeitungsartikel ärgert, muss nicht schweigen: Er kann sich an den Deutschen Presserat {1}. Die Institution prüft Beschwerden von Leserinnen und Lesern und erinnert Redaktionen an den {2}: Sorgfalt in der Recherche, Trennung von Nachricht und Meinung, Schutz der Privatsphäre.", es: "Quien se indigna con un artículo de periódico no tiene por qué callarse: puede dirigirse al Consejo Alemán de Prensa. La institución examina las quejas de los lectores y recuerda a las redacciones su código deontológico: rigor en la investigación, separación entre noticia y opinión, protección de la privacidad." },
        { it: "Die meisten Beschwerden betreffen die {3} zwischen Öffentlichkeit und Privatsphäre: Darf ein Blatt Namen nennen? Wie viel Leid darf eine Schlagzeile {4}? Der Presserat entscheidet nicht vor Gericht, aber seine Rügen fürchten die Redaktionen – sie gelten in der Branche als {5}. Wer sie ignoriert, verliert Ansehen, und Ansehen ist die eigentliche Währung des Journalismus.", es: "La mayoría de las quejas afectan a la frontera entre lo público y lo privado: ¿puede un diario publicar nombres? ¿Cuánto dolor puede mostrar un titular? El consejo no dictamina ante el tribunal, pero las redacciones temen sus amonestaciones: en el gremio cuentan como deshonor. Quien las ignora pierde reputación, y la reputación es la verdadera moneda del periodismo." },
      ],
      gaps: [
        { options: ["wenden", "winken", "wandern"], answer: 0, why: "«sich an jemanden wenden» = dirigirse a alguien: el verbo fijo para presentar una queja." },
        { options: ["Ehrenkodex", "Fahrplan", "Stundenplan"], answer: 0, why: "Lo que el Presserat recuerda a las redacciones es su código deontológico." },
        { options: ["Grenze", "Größe", "Gruppe"], answer: 0, why: "La disputa típica es dónde termina lo público y empieza lo privado: una frontera." },
        { options: ["zeigen", "erfinden", "verstecken"], answer: 0, why: "¿Cuánto dolor puede mostrar un titular? La pregunta ética gira en torno a mostrar." },
        { options: ["Ehre", "Ware", "Übung"], answer: 0, why: "Las amonestaciones cuentan como deshonor en el gremio: el prestigio es la moneda del oficio." },
      ],
    },
  ],

  "de-cu-b2-09": [
    {
      id: "cz-de-b2-09-1", title: "Die Reklamation", titleEs: "La reclamación", minutes: 3,
      paragraphs: [
        { it: "Die Waschmaschine, am 3. März bestellt, läuft seit der ersten Stunde nicht richtig: Sie rüttelt, sie brummt, sie {1} Wasser unter sich. Statt zum Telefon zu greifen, setzt sich der Käufer an den Schreibtisch und schreibt eine Reklamation. Timo, sein Mitbewohner, hat die Struktur diktiert: Anrede, Sachverhalt, Forderung, {2}.", es: "La lavadora, pedida el 3 de marzo, no funciona bien desde el primer momento: tiembla, zumba y pierde agua debajo. En vez de coger el teléfono, el comprador se sienta ante el escritorio y redacta una reclamación. Timo, su compañero de piso, le ha dictado la estructura: saludo, exposición de los hechos, exigencia y plazo." },
        { it: "Der Brief beginnt mit «Sehr geehrte Damen und Herren,» – danach folgt die {3} «hiermit reiche ich Reklamation ein». Die Fakten stehen in einer Reihe: Bestellnummer, {4}, Mängel. Am Ende setzt der Käufer der Firma eine Frist bis zum 15. April und kündigt höflich weitere Schritte an. «Freundlich, aber bestimmt», nennt Timo diesen Ton. Der Brief geht als Einschreiben raus – denn Einschreiben sind {5} und wirken vor Gericht.", es: "La carta empieza con «Muy señores nuestros:», después viene la fórmula «por la presente presento reclamación». Los datos están en fila: número de pedido, fecha y defectos. Al final, el comprador fija a la empresa un plazo hasta el 15 de abril y anuncia con cortesía más pasos. «Amable, pero firme», llama Timo a ese tono. La carta sale como certificado, porque los certificados son demostrables y valen ante el tribunal." },
      ],
      gaps: [
        { options: ["verliert", "trinkt", "kocht"], answer: 0, why: "Una lavadora averiada que pierde agua debajo: los síntomas del defecto." },
        { options: ["Frist", "Feiertag", "Fragebogen"], answer: 0, why: "La reclamación formal exige, tras los hechos y la exigencia, un plazo concreto." },
        { options: ["Formel", "Fotos", "Frist"], answer: 0, why: "«Hiermit reiche ich Reklamation ein» es la fórmula de apertura estándar de este tipo de carta." },
        { options: ["Datum", "Traum", "Urlaub"], answer: 0, why: "Los tres datos verificables del ritual: número de pedido, fecha y defectos." },
        { options: ["nachweisbar", "unerträglich", "unbezahlbar"], answer: 0, why: "El certificado con acuse de recibo se puede demostrar: por eso vale ante un tribunal." },
      ],
    },
    {
      id: "cz-de-b2-09-2", title: "Die Antwort der Firma", titleEs: "La respuesta de la empresa", minutes: 2,
      paragraphs: [
        { it: "Zwei Wochen später liegt der Umschlag im Briefkasten: die Antwort aus Köln. «Sehr geehrter Herr Pérez», beginnt sie – mit {1}, denn der Kunde hatte seinen Namen genannt. Die Firma bedauert den Defekt, bittet um die {2} der Rechnung und kündigt die Prüfung an. Kein Wort von einer Entschuldigung, aber immerhin: Der Brief ist höflich.", es: "Dos semanas después, el sobre está en el buzón: la respuesta de Colonia. «Estimado señor Pérez», empieza, con nombre propio, porque el cliente lo había indicado. La empresa lamenta el defecto, pide una copia de la factura y anuncia la revisión. Ni una palabra de disculpa, pero al menos la carta es cortés." },
        { it: "Für Timo beginnt jetzt der interessante Teil: die Analyse der {3}. Die Firma schreibt «eine zeitnahe Bearbeitung» – das könne eine Woche oder einen Monat {4}. Und das Wort «Kulanz» fehle, obwohl gerade das der berühmteste deutsche {5} im Kundenkontakt sei. «Kulanz ist kein Recht», sagt Timo, «aber wer darum bittet, zeigt, dass er die Regeln kennt.»", es: "Para Timo empieza ahora la parte interesante: el análisis de las formulaciones. La empresa escribe «una tramitación pronta», y eso puede durar una semana o un mes. Y falta la palabra «Kulanz», aunque es justamente el concepto alemán más célebre del trato al cliente. «La cortesía no es un derecho», dice Timo, «pero quien la pide demuestra que conoce las reglas.»" },
      ],
      gaps: [
        { options: ["Namen", "Foto", "Stempel"], answer: 0, why: "La carta abre con el nombre del cliente porque él lo había indicado: trato personalizado." },
        { options: ["Kopie", "Zahlung", "Anerkennung"], answer: 0, why: "Para examinar el caso, la empresa pide una copia de la factura." },
        { options: ["Formulierungen", "Fotos", "Fristen"], answer: 0, why: "Timo analiza el lenguaje de la carta: qué significan exactamente las palabras elegidas." },
        { options: ["dauern", "wiegen", "laufen"], answer: 0, why: "«Zeitnah» puede abarcar desde una semana hasta un mes: la vaguedad de la duración." },
        { options: ["Begriff", "Beweis", "Beruf"], answer: 0, why: "«Kulanz» es el concepto alemán célebre del trato al cliente: una palabra, no un derecho exigible." },
      ],
    },
    {
      id: "cz-de-b2-09-3", title: "Bei der Verbraucherzentrale", titleEs: "En la organización de consumidores", minutes: 2,
      paragraphs: [
        { it: "Die Verbraucherzentrale in Köln berät täglich Menschen mit defekten Waschmaschinen, gekündigten Verträgen und dubiosen {1}. Der wichtigste Rat klingt zuerst enttäuschend einfach: Schreiben Sie auf, was passiert ist – mit Datum, Uhrzeit und {2}. Wer Fakten sammelt, gewinnt später den Prozess; wer nur wütend ist, verliert ihn.", es: "La organización de consumidores de Colonia asesora cada día a gente con lavadoras defectuosas, contratos cancelados y ofertas dudosas. El consejo más importante suena primero decepcionantemente simple: apunte lo que pasó, con fecha, hora y testigos. Quien reúne hechos gana luego el proceso; quien solo está furioso, lo pierde." },
        { it: "Im Seminarraum erklärt eine Referentin die Reihenfolge einer guten Reklamation. Zuerst der {3}: Was ist kaputt, seit wann, wo gekauft? Dann die Forderung: Reparatur, Ersatz oder {4}. Erst zum Schluss die Emotion – und selbst die nur in einem Satz. «Ein zorniger Brief fühlt sich gut an», sagt die Referentin, «aber ein sachlicher Brief {5} schneller.» Die Zuhörer schreiben eifrig mit.", es: "En la sala de seminarios, una ponente explica el orden de una buena reclamación. Primero la exposición de los hechos: qué se rompió, desde cuándo, dónde se compró. Luego la exigencia: reparación, sustitución o reembolso. Solo al final la emoción, y aun así en una sola frase. «Una carta airada se siente bien», dice la ponente, «pero una carta objetiva surte efecto antes». Los asistentes toman notas con ahínco." },
      ],
      gaps: [
        { options: ["Angeboten", "Antworten", "Ansagen"], answer: 0, why: "Los casos típicos de los consumidores: ofertas dudosas junto a máquinas rotas y contratos cancelados." },
        { options: ["Zeugen", "Zeitungen", "Zeitplänen"], answer: 0, why: "Hechos con fecha, hora y testigos: eso necesita un expediente." },
        { options: ["Sachverhalt", "Sommer", "Salat"], answer: 0, why: "Lo primero es exponer los hechos: qué se rompió, desde cuándo, dónde se compró." },
        { options: ["Rückzahlung", "Rechnung", "Renovierung"], answer: 0, why: "Las tres exigencias típicas: reparación, sustitución o reembolso." },
        { options: ["wirkt", "wartet", "zählt"], answer: 0, why: "Contraste final: la carta airada se siente bien, pero la objetiva hace efecto antes." },
      ],
    },
  ],

  "de-cu-b2-10": [
    {
      id: "cz-de-b2-10-1", title: "Der Runde Tisch zur Mobilität", titleEs: "La mesa redonda sobre movilidad", minutes: 3,
      paragraphs: [
        { it: "Im Rathaussaal stehen die Tische im Kreis: Der Runde Tisch zur Mobilität hat begonnen. Frau Weber moderiert, und ihre erste Regel steht auf einem Plakat: Sachlich {1}. Herr Krüger, der Händler, beginnt: «Gegen autofreie Zonen habe ich nichts – aber bitte nicht in meiner {2}.»", es: "En el salón del ayuntamiento las mesas están en círculo: ha comenzado la mesa redonda sobre movilidad. Frau Weber modera, y su primera regla está en un cartel: mantenerse en el asunto. Herr Krüger, el comerciante, empieza: «No tengo nada contra las zonas sin coches, pero, por favor, no en mi calle.»" },
        { it: "Lena, die Radfahrerin, bittet ums Wort: «Darf ich kurz {3}? Autofreie Innenstädte sind für den Handel meist ein Gewinn.» Krüger kontert mit einer Frage nach den {4}. Du selbst schlägst einen Kompromiss vor: einen Test über sechs Monate, sofern die Anwohner mitentscheiden. Am Ende steht im Protokoll ein Satz, den alle unterschreiben: Weiter {5} in vier Wochen – mit Zahlen, mit Plänen, mit kalten Getränken.", es: "Lena, la ciclista, pide la palabra: «¿Puedo discrepar un momento? Los centros sin coches suelen ser una ganancia para el comercio». Krüger replica con una pregunta por los costes. Tú mismo propones un compromiso: una prueba de seis meses, siempre que los vecinos decidan también. Al final, el acta recoge una frase que todos firman: seguir negociando en cuatro semanas, con cifras, con planes y con bebidas frías." },
      ],
      gaps: [
        { options: ["bleiben", "sitzen", "schweigen"], answer: 0, why: "La regla de oro de la moderación alemana: quedarse en el asunto (sachlich bleiben)." },
        { options: ["Straße", "Stadt", "Sprache"], answer: 0, why: "La objeción clásica del comerciante: de acuerdo, pero no en mi calle." },
        { options: ["widersprechen", "zuschließen", "abstimmen"], answer: 0, why: "«Darf ich kurz …?»: la fórmula cortés para discrepar en una mesa alemana." },
        { options: ["Kosten", "Küche", "Kunden"], answer: 0, why: "El comerciante replica preguntando quién paga la ampliación: los costes." },
        { options: ["verhandeln", "wählen", "wandern"], answer: 0, why: "El acta cierra con la cita de seguimiento: seguir negociando en cuatro semanas." },
      ],
    },
    {
      id: "cz-de-b2-10-2", title: "Der Test läuft", titleEs: "La prueba está en marcha", minutes: 2,
      paragraphs: [
        { it: "Sechs Monate autofrei: Die Innenstadt hat den Test bestanden – mit einem überraschenden {1}. Die Fußgängerzonen sind voller, die Ladenbesitzer berichten von neuen Kundinnen und Kunden, und der Lärm hat deutlich {2}. Nur der Lieferverkehr bleibt ein Problem, das noch keine Lösung gefunden hat.", es: "Seis meses sin coches: el centro ha superado la prueba, con un resultado sorprendente. Las zonas peatonales están más llenas, los tenderos hablan de clientela nueva y el ruido ha disminuido claramente. Solo el tráfico de reparto sigue siendo un problema sin solución." },
        { it: "In der Ratssitzung präsentiert Frau Weber die {3}: Sie zeigt, welche Gruppen gewonnen haben und welche gelitten haben. Herr Krüger nickt inzwischen selbst bei manchen Zahlen – die Debatte hat die {4} verschoben. Der Rat beschließt mit großer Mehrheit: Die autofreie Zone wird {5}, aber mit Ausnahmen für Lieferungen vor 10 Uhr. Manchmal, sagt Frau Weber am Ende, braucht eine Stadt nur sechs Monate Mut.", es: "En el pleno, Frau Weber presenta la estadística: muestra qué grupos han ganado y cuáles han salido perjudicados. Herr Krüger asiente ya incluso ante algunas cifras: el debate movió las posiciones. El consejo decide por gran mayoría que la zona sin coches se mantiene de forma permanente, con excepciones para las entregas antes de las 10:00. A veces, dice Frau Weber al final, una ciudad solo necesita seis meses de valentía." },
      ],
      gaps: [
        { options: ["Ergebnis", "Einspruch", "Einkommen"], answer: 0, why: "Tras seis meses de prueba llega el balance: el resultado sorprende." },
        { options: ["abgenommen", "zugenommen", "angefangen"], answer: 0, why: "Con menos coches el ruido baja: ha disminuido claramente." },
        { options: ["Statistik", "Statue", "Straßenkarte"], answer: 0, why: "La moderadora presenta la evaluación con cifras de ganadores y perjudicados: la estadística." },
        { options: ["Fronten", "Fenster", "Fristen"], answer: 0, why: "Que el comerciante asienta ante ciertas cifras indica que el debate movió las posiciones de los bandos." },
        { options: ["dauerhaft", "beendet", "verschoben"], answer: 0, why: "El consejo decide que la zona se mantiene para siempre, aunque con excepciones para las entregas." },
      ],
    },
    {
      id: "cz-de-b2-10-3", title: "Widersprechen mit Stil", titleEs: "Discrepar con estilo", minutes: 2,
      paragraphs: [
        { it: "Ein guter Widerspruch beginnt mit {1}: Wer zuerst zugibt, dass die Gegenseite einen Punkt hat, wirkt souverän. Wer sofort blockt, wirkt schwach – und verliert die Zuhörer. In deutschen Debattierclubs trainiert man deshalb die {2} «Das mag stimmen, aber» so regelmäßig wie andere den freien Vortrag.", es: "Una buena refutación empieza con reconocimiento: quien admite primero que el bando contrario tiene un punto parece seguro de sí. Quien bloquea de inmediato parece débil y pierde a la audiencia. En los clubes de debate alemanes se entrena, por eso, la fórmula «Puede ser cierto, pero» con la misma constancia que otros entrenan la improvisación." },
        { it: "Die zweite Regel betrifft die Sachebene: Kritisiere das Argument, nie die {3}. Wer persönlich wird, verliert in Deutschland sofort den Respekt des Publikums. Die dritte Regel betrifft das Ende: Der beste Widerspruch schließt mit einem {4}, nicht mit einem Urteil. «Ich schlage vor, dass wir» öffnet Türen, die ein «Sie irren sich» für immer {5} lässt.", es: "La segunda regla afecta al nivel del asunto: critica el argumento, jamás a la persona. Quien se vuelve personal pierde en Alemania de inmediato el respeto del público. La tercera regla afecta al final: la mejor refutación se cierra con una propuesta, no con una sentencia. «Propongo que» abre puertas que un «usted se equivoca» deja cerradas para siempre." },
      ],
      gaps: [
        { options: ["Anerkennung", "Anstrengung", "Anklage"], answer: 0, why: "Reconocer primero un punto al contrario: con eso empieza la buena refutación." },
        { options: ["Formel", "Frage", "Frist"], answer: 0, why: "«Das mag stimmen, aber» se entrena como una fórmula fija de apertura." },
        { options: ["Person", "Sache", "Zahl"], answer: 0, why: "La Streitkultur alemana: se critica el asunto, jamás a la persona." },
        { options: ["Vorschlag", "Verzicht", "Vergleich"], answer: 0, why: "La mejor refutación termina con una propuesta, no con una sentencia." },
        { options: ["verschlossen", "geöffnet", "gestrichen"], answer: 0, why: "Un «usted se equivoca» cierra puertas para siempre; la propuesta las abre." },
      ],
    },
  ],

  "de-cu-b2-11": [
    {
      id: "cz-de-b2-11-1", title: "Das erste Stand-up", titleEs: "El primer stand-up", minutes: 3,
      paragraphs: [
        { it: "Montag, 9.32 Uhr, Berlin-Mitte: Das Team versammelt sich in der Küche der Start-up-Fläche. Jonas öffnet das Daily mit drei Worten: «Deadline, Pitch, {1}». Die Runde dauert genau elf Minuten, dann verschwinden alle wieder hinter ihren Bildschirmen. Für den neuen Praktikanten klingt das erstmal wie ein {2} – jeden Morgen dieselben Wörter, nur die Zahlen ändern sich.", es: "Lunes, 9:32, Berlín-Mitte: el equipo se reúne en la cocina de la oficina start-up. Jonas abre el Daily con tres palabras: «Deadline, Pitch, Feedback». La ronda dura exactamente once minutos, y luego todos desaparecen de nuevo tras sus pantallas. Para el nuevo becario eso suena al principio a ritual: cada mañana las mismas palabras, solo cambian las cifras." },
        { it: "In Wahrheit ist das Daily ein präzises Instrument: Jede Person antwortet auf drei {3} – was gestern, was heute, was blockiert. Wer kein Update ohne To-do formuliert, hält das Team in {4}. Und um 18 Uhr fällt das magische Wort, das keine Übersetzung braucht: Feierabend. Der neue Praktikant lernt schnell: Denglisch gehört hier dazu wie der Kaffee – und das Protokoll, das ihm Anna erklärt, bleibt trotzdem {5}.", es: "En realidad, el Daily es un instrumento preciso: cada persona responde a tres preguntas: qué ayer, qué hoy, qué bloquea. Quien no formula ninguna novedad sin tarea asignada mantiene al equipo en marcha. Y a las 18:00 cae la palabra mágica que no necesita traducción: Feierabend. El nuevo becario aprende rápido: el denglisch pertenece aquí a la cultura tanto como el café, y el acta que Anna le explica sigue siendo, aun así, alemana." },
      ],
      gaps: [
        { options: ["Feedback", "Fenster", "Ferien"], answer: 0, why: "La tríada del Daily: fecha límite, presentación y retroalimentación: léxico de oficina." },
        { options: ["Ritual", "Reise", "Rechnung"], answer: 0, why: "Cada mañana las mismas palabras y solo cambian las cifras: eso es un ritual." },
        { options: ["Fragen", "Fristen", "Fotos"], answer: 0, why: "El Daily responde a tres preguntas fijas: ayer, hoy, bloqueos." },
        { options: ["Bewegung", "Beweggrund", "Bewölkung"], answer: 0, why: "Quien formula tareas mantiene al equipo en marcha: la información fluye." },
        { options: ["deutsch", "digital", "geheim"], answer: 0, why: "El acta no tiene sustituto inglés: se queda en alemán, memoria escrita de la empresa." },
      ],
    },
    {
      id: "cz-de-b2-11-2", title: "Das Protokoll", titleEs: "El acta", minutes: 2,
      paragraphs: [
        { it: "Nach jedem Meeting in Deutschland wartet dieselbe Aufgabe: das Protokoll. Es listet Anwesende, {1} und Ergebnisse in nüchterner Sprache auf. Die Verben sind sparsam, die Verantwortlichkeiten eindeutig: «Anna aktualisiert das Deck bis Donnerstag». Ohne Protokoll, heißt es in Berliner Start-ups, war das Meeting {2} – nur teurer.", es: "Tras cada reunión en Alemania espera la misma tarea: el acta. Enumera asistentes, acuerdos y resultados en lenguaje sobrio. Los verbos son escasos, las responsabilidades unívocas: «Anna actualiza la presentación hasta el jueves». Sin acta, se dice en las start-ups berlinesas, la reunión fue en vano, solo que más cara." },
        { it: "Für das Protokoll gilt eine eigene Grammatik: Es wird meist im Präsens geschrieben, ohne {3}, ohne Emotionen. Jede Zeile endet mit einer Frist oder einem Namen – idealerweise mit beiden. Wer ein gutes Protokoll schreibt, verkürzt das nächste Meeting, weil niemand mehr {4}, was vereinbart war. In der Berliner Start-up-Szene behaupten manche, das Protokoll sei das eigentliche {5} des Unternehmens: die Erinnerung, die nie einen Termin vergisst.", es: "El acta obedece a una gramática propia: se escribe casi siempre en presente, sin opiniones ni emociones. Cada línea termina con un plazo o con un nombre, idealmente con ambos. Quien redacta un buen acta acorta la reunión siguiente, porque nadie discute ya lo acordado. En la escena start-up berlinesa algunos sostienen que el acta es la verdadera memoria de la empresa: el recuerdo que jamás olvida una cita." },
      ],
      gaps: [
        { options: ["Beschlüsse", "Beschwerden", "Besucher"], answer: 0, why: "Un acta recoge asistentes, acuerdos y resultados: los Beschlüsse." },
        { options: ["umsonst", "umstritten", "umgezogen"], answer: 0, why: "Sin acta, la reunión no dejó rastro: fue en vano, aunque costó dinero." },
        { options: ["Meinungen", "Musik", "Muster"], answer: 0, why: "El acta se redacta sin opiniones ni emociones: lenguaje neutro y sobrio." },
        { options: ["streitet", "schweigt", "zählt"], answer: 0, why: "Un buen acta evita volver a discutir lo ya acordado." },
        { options: ["Gedächtnis", "Gebäude", "Gerät"], answer: 0, why: "La metáfora final: el acta es la memoria de la empresa que nunca olvida una cita." },
      ],
    },
    {
      id: "cz-de-b2-11-3", title: "Feierabend in der Silicon Allee", titleEs: "Fin de jornada en la Silicon Allee", minutes: 2,
      paragraphs: [
        { it: "Um Punkt 18 Uhr passiert in Berliner Start-ups etwas Seltenes: Die Bildschirme werden {1}. Der Feierabend ist heilig – nicht aus Faulheit, sondern aus Respekt vor der eigenen {2}. Wer um 18.01 Uhr noch eine Frage stellt, bekommt meist eine freundliche, aber bestimmte Antwort: «Morgen früh, im Daily.»", es: "A las 18:00 en punto ocurre algo raro en las start-ups berlinesas: las pantallas se cierran. El Feierabend es sagrado, no por pereza, sino por respeto al propio descanso. Quien hace todavía una pregunta a las 18:01 recibe casi siempre una respuesta amable, pero firme: «Mañana por la mañana, en el Daily.»" },
        { it: "Diese Klarheit überrascht viele Neue: In manchen Kulturen gilt langes Arbeiten als {3}. Hier gilt: Wer ausgeruht ist, macht bessere Entscheidungen. Die Trennung ist auch sprachlich hörbar – das eine Wort Feierabend enthält {4} zwei Welten: Arbeit und Feier. Am Abend treffen sich die Kolleginnen und Kollegen trotzdem, aber dann {5}: beim Bier im Hof, ohne Laptop, ohne Deadline. Morgen ist wieder Daily.", es: "Esta claridad sorprende a muchos recién llegados: en algunas culturas, trabajar mucho se considera una virtud. Aquí vale: quien descansa decide mejor. La separación también se oye en la lengua: la única palabra Feierabend contiene literalmente dos mundos, el trabajo y la fiesta. Por la noche los colegas se ven igualmente, pero entonces es en privado: cerveza en el patio, sin portátil y sin fecha límite. Mañana, otra vez Daily." },
      ],
      gaps: [
        { options: ["zugedreht", "aufgeschlagen", "verschoben"], answer: 0, why: "A las 18:00 en punto las pantallas se cierran: la jornada se apaga." },
        { options: ["Erholung", "Entscheidung", "Entwicklung"], answer: 0, why: "El Feierabend sagrado se justifica por respeto al descanso propio." },
        { options: ["Tugend", "Torheit", "Theorie"], answer: 0, why: "En otras culturas trabajar mucho se considera una virtud; aquí se valora el descanso." },
        { options: ["wörtlich", "wöchentlich", "willkürlich"], answer: 0, why: "Feierabend contiene literalmente «Feier» (fiesta): dos mundos en una sola palabra." },
        { options: ["privat", "protokolliert", "professionell"], answer: 0, why: "Por la tarde el encuentro es privado: cerveza en el patio, sin portátil ni fecha límite." },
      ],
    },
  ],

  "de-cu-b2-12": [
    {
      id: "cz-de-b2-12-1", title: "Der Simulationsprozess", titleEs: "El juicio simulado", minutes: 3,
      paragraphs: [
        { it: "Im Hörsaal der juristischen Fakultät steht ein Richtertisch, dahinter drei Studierende in schwarzen {1}. Es ist der alljährliche Simulationsprozess, und diesmal steht ein fiktiver Fahrraddiebstahl vor Gericht. Die Verteidigung hat vorbereitet, was man vorbereiten kann: eine These, drei Säulen und einen {2} am Ende.", es: "En el aula magna de la facultad de Derecho hay una mesa de tribunal; detrás, tres estudiantes con togas negras. Es el juicio simulado anual, y esta vez un robo de bicicleta ficticio llega ante el tribunal. La defensa tiene preparado lo que se puede preparar: una tesis, tres columnas y un llamamiento al final." },
        { it: "Die Verteidigerin erhebt sich und spricht langsam: «Hohes Gericht! Der Angeklagte ist unschuldig.» Dann macht sie eine {3}, die im Saal fast körperlich spürbar ist. Erstens die Zweifel an der Beweislage, zweitens das fehlende {4}, zuletzt die widersprüchliche Zeugin. Als sie zum Schluss kommt, ist der Saal mucksmäuschenstill. Das Urteil fällt nach einer Stunde – und die Verteidigerin {5} es mit einem Lächeln entgegen.", es: "La defensora se pone en pie y habla despacio: «¡Señoría! El acusado es inocente». Luego hace una pausa que casi se siente físicamente en la sala. Primero, las dudas sobre las pruebas; segundo, el móvil inexistente; al final, la testigo contradictoria. Cuando llega a la conclusión, la sala está en absoluto silencio. El veredicto cae tras una hora, y la defensora recibe con una sonrisa la sentencia." },
      ],
      gaps: [
        { options: ["Roben", "Regenschirmen", "Rucksäcken"], answer: 0, why: "Ante la mesa del tribunal se sientan tres estudiantes con togas negras: la indumentaria del juicio." },
        { options: ["Appell", "Anruf", "Anhang"], answer: 0, why: "La estructura del alegato termina siempre con el llamamiento final: el Appell." },
        { options: ["Pause", "Probe", "Panne"], answer: 0, why: "Tras la tesis llega la pausa retórica: se nota físicamente en la sala." },
        { options: ["Motiv", "Moment", "Monat"], answer: 0, why: "Segunda columna del alegato: el móvil inexistente del acusado." },
        { options: ["nimmt", "isst", "versteckt"], answer: 0, why: "«entgegennehmen» = recibir: la defensora acoge la sentencia con una sonrisa." },
      ],
    },
    {
      id: "cz-de-b2-12-2", title: "Zweifel, Motiv, Zeugen", titleEs: "Dudas, móvil, testigos", minutes: 2,
      paragraphs: [
        { it: "Der Dozent für Rhetorik zeichnet an das Whiteboard ein Gebäude: Das Dach ist die These, die tragenden {1} sind die Argumente. «Die stärkste Säule kommt immer zuletzt», sagt er, «weil das Gericht sich am Ende an das {2} erinnert, nicht an den Anfang.» Die Studierenden nicken und nummerieren ihre Notizen neu.", es: "El docente de retórica dibuja en la pizarra un edificio: el tejado es la tesis, las columnas que sostienen son los argumentos. «La columna más fuerte va siempre al final», dice, «porque el tribunal recuerda al final lo último, no lo primero». Los estudiantes asienten y renumeran sus apuntes." },
        { it: "Dann übt die Gruppe die Steigerung in Zeitlupe: leise beginnen, langsam lauter werden, die letzte Zeile {3} sprechen. «Pathos ohne Beweise überzeugt niemanden», warnt der Dozent, «aber Beweise mit einem Hauch Pathos überzeugen {4}.» Die größte Überraschung des Abends: Die stillste Studentin hält das {5} Plädoyer – ruhig, präzise und mit zwei Pausen, die keiner vergisst.", es: "Luego el grupo ensaya la gradación a cámara lenta: empezar bajo, crecer despacio en volumen, decir la última línea marcándola. «Pathos sin pruebas no convence a nadie», advierte el docente, «pero pruebas con una pizca de pathos convencen a todos». La gran sorpresa de la noche: la estudiante más callada pronuncia el mejor alegato, tranquilo, preciso y con dos pausas que nadie olvida." },
      ],
      gaps: [
        { options: ["Säulen", "Stufen", "Schilde"], answer: 0, why: "La metáfora del edificio: tejado = tesis, columnas = argumentos." },
        { options: ["Ende", "Erlebnis", "Einkommen"], answer: 0, why: "Se recuerda lo último que se escucha: por eso lo mejor va al final." },
        { options: ["betont", "beiläufig", "beleidigt"], answer: 0, why: "La última frase se pronuncia marcada, con énfasis: es la que queda." },
        { options: ["jeden", "keinen", "manchen"], answer: 0, why: "Pruebas con una pizca de pathos convencen a todos: el contraste de la advertencia." },
        { options: ["beste", "billigste", "beliebteste"], answer: 0, why: "La más callada da el mejor alegato: la sorpresa de la noche pide el superlativo." },
      ],
    },
    {
      id: "cz-de-b2-12-3", title: "Das Urteil", titleEs: "El veredicto", minutes: 2,
      paragraphs: [
        { it: "Um 19.30 Uhr verkündet das Tribunal die Entscheidung: Freispruch. Die Verteidigerin atmet tief durch, der «Angeklagte» umarmt seinen Anwalt, und das Publikum {1} applaudierend. Das studentische Gericht begründet sein Urteil mit einem einzigen {2}: Die Beweise trügen den Schuldspruch nicht.", es: "A las 19:30 el tribunal anuncia la decisión: absolución. La defensora respira hondo, el «acusado» abraza a su abogado y el público se pone en pie aplaudiendo. El tribunal estudiantil fundamenta el veredicto con una sola frase: las pruebas no sostenían la condena." },
        { it: "Danach bespricht die Coachin das Plädoyer mit der Verteidigerin. «Ihre stärkste {3} war die Zeugin», sagt sie – die dritte Säule, genau am richtigen Ort platziert. Zwei Dinge solle sie noch üben: die {4} vor dem Appell und die Betonung der Schlussworte. Am Ende fragt die Studentin zaghaft nach der {5} ihres pathetischen Schlusses. Die Antwort der Coachin gilt allen Rednern: «Ein Plädoyer darf wirken. Also: Wirken Sie.»", es: "Después, la coach repasa el alegato con la defensora. «Su columna más fuerte fue la testigo», dice: la tercera, colocada justo en el lugar correcto. Dos cosas debería seguir practicando: la pausa antes del llamamiento y el énfasis de las palabras finales. Al final, la estudiante pregunta tímidamente por el efecto de su final tan patético. La respuesta de la coach vale para todos los oradores: «Un alegato puede conmover. Así que: conmueva.»" },
      ],
      gaps: [
        { options: ["erhebt sich", "setzt sich", "meldet sich"], answer: 0, why: "El público se pone en pie aplaudiendo: la reacción ante la sentencia absolutoria." },
        { options: ["Satz", "Seufzer", "Sieg"], answer: 0, why: "El tribunal fundamenta la absolución en una sola frase lapidaria." },
        { options: ["Säule", "Szene", "Sorge"], answer: 0, why: "La testigo era la tercera columna del alegato, la más fuerte al final." },
        { options: ["Pause", "Probe", "Punkte"], answer: 0, why: "Lo que queda por pulir: la pausa antes del llamamiento y el énfasis final." },
        { options: ["Wirkung", "Weite", "Weisung"], answer: 0, why: "La estudiante pregunta tímidamente si el final tan patético surtió el efecto deseado." },
      ],
    },
  ],
};
