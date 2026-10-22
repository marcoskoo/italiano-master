import type { CbClozeText } from "../../cambridge";

/* ═══ EN C1 · Cloze readings — 3 por unidad (inferencia léxica) ════
   Textos densos de registro académico/profesional en inglés americano
   C1, conectados con el escenario de cada unidad (la lecture de Boston,
   el research paper, la negociación, el keynote, los datos, la case
   interview, el contrato, el longform, la pragmática, los acentos, el
   op-ed y la TEDx). El texto `.it` lleva los marcadores {1}…{5} que el
   reproductor convierte en huecos; `.es` es la traducción completa. */

export const EN_CLOZE_C1: Record<string, CbClozeText[]> = {
  "en-cu-c1-01": [
    {
      id: "cz-en-c1-01-1", title: "The first lecture", titleEs: "La primera clase", minutes: 3,
      paragraphs: [
        { it: "The graduate seminar met for the first time on a gray Tuesday in Boston. Professor Whitman distributed the {1} like a contract: readings, due dates, grading weights, attendance policy. He spoke of the midterm, the final paper, and the thirty percent of the grade that {2} alone would carry. Nobody in that room had expected American graduate school to be quite so explicit.", es: "El seminario de posgrado se reunió por primera vez un martes gris en Boston. El profesor Whitman repartió el programa del curso como si fuera un contrato: lecturas, fechas de entrega, ponderación de notas, política de asistencia. Habló del parcial, del trabajo final y del treinta por ciento de la nota que la participación por sí sola llevaría. Nadie en esa sala esperaba que el posgrado americano fuera tan explícito." },
        { it: "Before the hour ended, he pointed at his office door: Wednesdays, two to four, no {3} needed. Students who show up do better, he said, and I remember {4}. Then he closed with the line everyone wrote down: do the reading, come to class, and {5} something. Everything else follows from that.", es: "Antes de que terminara la hora, señaló la puerta de su despacho: los miércoles, de dos a cuatro, sin cita previa. Los estudiantes que aparecen rinden mejor, dijo, y yo recuerdo los nombres. Luego cerró con la frase que todos anotaron: hagan la lectura, vengan a clase y digan algo. Todo lo demás se deriva de eso." },
      ],
      gaps: [
        { options: ["diploma", "transcript", "syllabus"], answer: 2, why: "\"Like a contract: readings, due dates, grading weights\" define el documento del curso: el syllabus." },
        { options: ["graduation", "participation", "scholarship"], answer: 1, why: "En el posgrado americano el 30 % de la nota recae en la participación, como explica la cultura de la unidad." },
        { options: ["lobby", "hallway", "appointment"], answer: 2, why: "Las office hours son de puerta abierta: \"no appointment needed\", sin cita previa." },
        { options: ["salaries", "secrets", "names"], answer: 2, why: "\"Students who show up do better, and I remember\": el profesor recuerda a quién aparece, sus nombres." },
        { options: ["hide", "say", "postpone"], answer: 1, why: "El consejo final es hablar en clase: \"come to class, and say something\"." },
      ],
    },
    {
      id: "cz-en-c1-01-2", title: "Office hours, Thursday at two", titleEs: "Horario de atención, jueves a las dos", minutes: 3,
      paragraphs: [
        { it: "Valentina arrived at office hours with her notes and a printed draft of her first memo. She had emailed the professor the night before, and the answer had landed in her inbox before her {1} went off at six. Outside his door, a small {2} of students had formed, each of them holding a paper like an offering.", es: "Valentina llegó al horario de atención con sus notas y una copia impresa del borrador de su primer memorando. Había escrito al profesor la noche anterior, y la respuesta había llegado a su bandeja antes de que su despertador sonara a las seis. Frente a la puerta, se había formado una pequeña fila de estudiantes, cada uno sosteniendo un papel como una ofrenda." },
        { it: "Her turn came at twenty past two. She asked about the {3} between churning and reallocation that had confused her for a week; he pulled a marker and drew both flows on the whiteboard in four strokes. Ninety seconds of {4} dust later, the confusion was gone. Walking out, she wrote a note in the margin: come back before the {5}, not after.", es: "Su turno llegó a las dos y veinte. Preguntó por la distinción entre churning y reallocation que la había confundido durante una semana; él tomó un rotulador y dibujó ambos flujos en la pizarra en cuatro trazos. Noventa segundos de polvo de tiza después, la confusión había desaparecido. Al salir, escribió una nota al margen: volver antes del parcial, no después." },
      ],
      gaps: [
        { options: ["oven", "alarm", "engine"], answer: 1, why: "Escribió \"the night before\" y la respuesta llegó antes de las seis: antes del despertador." },
        { options: ["line", "storm", "orchestra"], answer: 0, why: "Cada estudiante con su papel esperando turno: una fila frente a la puerta." },
        { options: ["decoration", "deduction", "distinction"], answer: 2, why: "Lo que la confundió fue la diferencia entre dos conceptos de la clase: una distinción." },
        { options: ["chalk", "candle", "sawdust"], answer: 0, why: "El profesor dibuja en la pizarra con rotulador; el polvo de la explicación es de tiza." },
        { options: ["wedding", "midterm", "holiday"], answer: 1, why: "La lección de la unidad: volver a office hours antes del examen, no después." },
      ],
    },
    {
      id: "cz-en-c1-01-3", title: "Notes at American speed", titleEs: "Apuntes a velocidad americana", minutes: 3,
      paragraphs: [
        { it: "The advice from the second-year students was unanimous: do not transcribe the lecture. The professor speaks in {1} — 'that brings us to', 'if you look at the slide', 'to sum up' — and the signposts, not the {2} between them, tell you what will appear on the exam. Write the skeleton first; the flesh is waiting in the readings.", es: "El consejo de los estudiantes de segundo año era unánime: no transcribas la clase. El profesor habla en señales de discurso —«eso nos lleva a», «si miran la diapositiva», «en resumen»— y las señales, no las frases entre ellas, te dicen qué aparecerá en el examen. Escribe primero el esqueleto; la carne espera en las lecturas." },
        { it: "There is also an economy of attention. When the professor slows down, repeats a term, or {3} before a definition, the pen should move. When he tells an anecdote about a colleague in Chicago, the pen can {4}. The students who fill entire notebooks usually miss the {5}; the ones who annotate less, remember more.", es: "También hay una economía de la atención. Cuando el profesor baja el ritmo, repite un término o hace una pausa antes de una definición, el bolígrafo debería moverse. Cuando cuenta una anécdota sobre un colega de Chicago, el bolígrafo puede descansar. Los estudiantes que llenan cuadernos enteros suelen perderse la idea central; los que anotan menos, recuerdan más." },
      ],
      gaps: [
        { options: ["riddles", "signposts", "melodies"], answer: 1, why: "Los ejemplos citados ('that brings us to', 'to sum up') son marcadores del discurso: señales." },
        { options: ["staircases", "scholarships", "sentences"], answer: 2, why: "Las señales destacan sobre lo que está entre ellas: las frases del discurso." },
        { options: ["coughs", "pauses", "applauds"], answer: 1, why: "Bajar el ritmo, repetir y detenerse antes de una definición son los tres gestos que anuncian materia de examen." },
        { options: ["rest", "race", "bleed"], answer: 0, why: "La anécdota es accesorio: el bolígrafo puede descansar." },
        { options: ["tuition", "hallway", "point"], answer: 2, why: "Quien lo transcribe todo se pierde lo esencial: la idea central." },
      ],
    },
  ],

  "en-cu-c1-02": [
    {
      id: "cz-en-c1-02-1", title: "Red ink and kindness", titleEs: "Tinta roja y amabilidad", minutes: 3,
      paragraphs: [
        { it: "Dr. Chen returned the draft with more red than black ink. The introduction survived; the literature review did not. 'This reads like a {1} of authors,' she said, 'when it should be an argument about findings.' Group the studies by what they {2}, she advised, not by who wrote them.", es: "La dra. Chen devolvió el borrador con más tinta roja que negra. La introducción sobrevivió; la revisión de literatura, no. «Esto se lee como un catálogo de autores», dijo, «cuando debería ser un argumento sobre hallazgos». Agrupa los estudios por lo que muestran, aconsejó, no por quién los escribió." },
        { it: "Then came the verbs. Where the draft claimed that the data 'prove' the hypothesis, she wrote a single word in the {3}: hedge. The findings suggest; they are consistent with; they appear to {4} the claim. Nothing in social science gets 'proven' before lunch. He revised through the night and sent version two with a {5} that said, simply, 'Thank you — I owe you an abstract.'", es: "Luego llegaron los verbos. Donde el borrador afirmaba que los datos «demuestran» la hipótesis, ella escribió una sola palabra en el margen: matiza. Los hallazgos sugieren; son consistentes con; parecen respaldar la afirmación. Nada en las ciencias sociales se «demuestra» antes del almuerzo. Revisó durante toda la noche y envió la versión dos con una nota que decía, simplemente: «Gracias — te debo un abstract»." },
      ],
      gaps: [
        { options: ["novel", "anthem", "catalog"], answer: 2, why: "El defecto descrito en la unidad: la revisión que enumera autores como un catálogo en vez de sintetizar." },
        { options: ["hide", "show", "lease"], answer: 1, why: "Agrupar por hallazgos: por lo que los estudios muestran, no por sus autores." },
        { options: ["ceiling", "basement", "margin"], answer: 2, why: "Las correcciones de una revisora se escriben en el margen del borrador." },
        { options: ["support", "demolish", "finance"], answer: 0, why: "La escala del hedging: appear to support = parecen respaldar." },
        { options: ["note", "invoice", "lawsuit"], answer: 0, why: "Envía la versión dos acompañada de un breve mensaje de agradecimiento: una nota." },
      ],
    },
    {
      id: "cz-en-c1-02-2", title: "An abstract in five moves", titleEs: "Un abstract en cinco movimientos", minutes: 3,
      paragraphs: [
        { it: "A good abstract is a paper in miniature: five {1} in five sentences, each with its own job. First, the background — what the field knows and what it does not. Second, the {2}: what this particular study examines, and why it matters now. Third, the methods, delivered in one dense, unglamorous sentence.", es: "Un buen abstract es un artículo en miniatura: cinco movimientos en cinco frases, cada uno con su función. Primero, los antecedentes: lo que el campo sabe y lo que no. Segundo, el objetivo: lo que este estudio en particular examina y por qué importa ahora. Tercero, los métodos, en una frase densa y sin glamour." },
        { it: "Fourth come the {3} — hedged, precise, never overstated; the verb suggest does more work here than prove ever could. Fifth, the {4}: what the findings mean, and what remains unknown. Editors read an abstract the way travelers read a {5}: if the route is unclear, they will not board.", es: "Cuarto, los resultados —matizados, precisos, jamás exagerados—; el verbo suggest hace aquí más trabajo del que prove haría nunca. Quinto, las conclusiones: qué significan los hallazgos y qué sigue desconocido. Los editores leen un abstract como los viajeros leen un mapa: si la ruta no está clara, no suben al tren." },
      ],
      gaps: [
        { options: ["decades", "moves", "novels"], answer: 1, why: "El abstract se construye en cinco pasos con función propia: cinco movimientos." },
        { options: ["apology", "objective", "hobby"], answer: 1, why: "\"What this particular study examines\": esa es la definición del objetivo." },
        { options: ["holidays", "sponsors", "results"], answer: 2, why: "El cuarto movimiento del abstract son los resultados, siempre con hedging." },
        { options: ["conclusions", "resignations", "decorations"], answer: 0, why: "El quinto movimiento: qué significan los hallazgos y qué queda por saber." },
        { options: ["novel", "menu", "map"], answer: 2, why: "La metáfora cierra con los viajeros y la ruta: leen un abstract como un mapa." },
      ],
    },
    {
      id: "cz-en-c1-02-3", title: "Revise and resubmit", titleEs: "Revisar y reenviar", minutes: 4,
      paragraphs: [
        { it: "The decision email arrived on a Friday: 'revise and resubmit.' To the young researcher it sounded like a polished {1}; her advisor called it a victory. Two of the three anonymous reviewers had read all forty pages and wanted the paper to {2}. Readers who ask for a second round believe the work deserves one.", es: "El correo con la decisión llegó un viernes: «revisar y reenviar». Para la investigadora joven sonó a un rechazo pulido; su directora lo llamó una victoria. Dos de los tres revisores anónimos habían leído las cuarenta páginas y querían que el artículo existiera. Quienes piden una segunda ronda creen que el trabajo la merece." },
        { it: "The reviews themselves were a genre of their own: polite, surgical, occasionally {3}. Reviewer Two demanded another robustness check; Reviewer One questioned the {4} for a paraphrased idea — 'when in doubt, cite,' the advisor had said, and the margin note proved her right. Six weeks later the resubmission went out, one {5} shorter and twice as careful.", es: "Las revisiones eran un género en sí mismas: corteses, quirúrgicas, ocasionalmente brutales. El Revisor Dos exigía otra prueba de robustez; el Revisor Uno cuestionaba la cita de una idea parafraseada —«ante la duda, cita», había dicho la directora, y la nota al margen le dio la razón—. Seis semanas después salió la reenviada, un párrafo más corta y el doble de cuidadosa." },
      ],
      gaps: [
        { options: ["promotion", "miracle", "rejection"], answer: 2, why: "Para quien empieza, 'revise and resubmit' suena a rechazo; la cultura del peer review dice lo contrario." },
        { options: ["vanish", "exist", "retire"], answer: 1, why: "Los revisores querían que el trabajo siguiera en pie y llegara a publicarse: que exista." },
        { options: ["musical", "brutal", "sleepy"], answer: 1, why: "Corteses y quirúrgicas, pero a veces sin anestesia: las revisiones pueden ser brutales." },
        { options: ["citation", "decoration", "salary"], answer: 0, why: "Parafrasear sin citar sigue siendo plagio: lo que se cuestiona es la cita de la idea ajena." },
        { options: ["century", "chapter", "paragraph"], answer: 2, why: "La reenviada se recorta en extensión menor: un párrafo menos." },
      ],
    },
  ],

  "en-cu-c1-03": [
    {
      id: "cz-en-c1-03-1", title: "Call number three", titleEs: "Llamada número tres", minutes: 3,
      paragraphs: [
        { it: "The videocall opened at nine sharp. Sarah had thirty minutes before her next {1}, so the small talk lasted exactly one sentence. 'Let's get down to business,' she said. 'As I see it, we're close on {2} but far apart on exclusivity.' Both sides nodded at the summary; neither disputed it.", es: "La videollamada empezó a las nueve en punto. Sarah tenía treinta minutos antes de su siguiente reunión, así que la charla de cortesía duró exactamente una frase. «Vamos al grano», dijo. «Tal como lo veo, estamos cerca en precio pero lejos en exclusividad». Ambas partes asintieron al resumen; nadie lo discutió." },
        { it: "The chess match that followed was quiet. He offered a volume {3} of forty thousand units a year; she answered that the board would have to sign off on any exclusive. When he proposed that exclusivity kick in at thirty thousand, she smiled at the camera: 'Had you opened with that, we might already be {4}.' By 9:26 they had a handshake; by noon, a term {5} in every inbox.", es: "El ajedrez que siguió fue silencioso. Él ofreció un compromiso de volumen de cuarenta mil unidades al año; ella respondió que el consejo tendría que aprobar cualquier exclusiva. Cuando propuso que la exclusividad entrara en vigor a las treinta mil, sonrió a la cámara: «Si hubieras empezado con eso, ya habríamos terminado». A las 9:26 tenían un apretón de manos; al mediodía, un term sheet en cada bandeja." },
      ],
      gaps: [
        { options: ["vacation", "meeting", "retirement"], answer: 1, why: "\"Thirty minutes before her next\": la agenda ejecutiva encadena reuniones." },
        { options: ["price", "weather", "spelling"], answer: 0, why: "El resumen clásico de la negociación: cerca en precio, lejos en exclusividad." },
        { options: ["commitment", "accident", "recipe"], answer: 0, why: "Cuarenta mil unidades al año es la contrapartida que se ofrece: un compromiso de volumen." },
        { options: ["fired", "done", "divorced"], answer: 1, why: "La tercera condicional insinúa que el trato ya estaría cerrado: \"we might already be done\"." },
        { options: ["towel", "pillow", "sheet"], answer: 2, why: "El documento de cierre de una negociación es el term sheet." },
      ],
    },
    {
      id: "cz-en-c1-03-2", title: "Reading the term sheet", titleEs: "Leyendo el term sheet", minutes: 4,
      paragraphs: [
        { it: "A term sheet is not yet a contract; it is a contract's {1}. Five clauses carried the weight of the morning: price per unit, minimum volume, the regional exclusive, payment at sixty days instead of ninety, and the {2} that everything expired if nothing was signed by the quarter's end.", es: "Un term sheet todavía no es un contrato: es su boceto. Cinco cláusulas cargaban con el peso de la mañana: precio por unidad, volumen mínimo, la exclusiva regional, pago a sesenta días en lugar de noventa, y la condición de que todo caducaba si nada estaba firmado al final del trimestre." },
        { it: "The lawyers would fight over single words for two weeks. 'Upon thirty days' written {3}' became 'upon thirty (30) days' written notice'; 'best efforts' became, mercifully, 'commercially reasonable efforts.' Nothing in the document was decorative: each {4} had survived a negotiation, and each comma a {5}.", es: "Los abogados pelearían por palabras sueltas durante dos semanas. «Aviso escrito de treinta días» se convirtió en «aviso escrito de treinta (30) días»; «best efforts» se convirtió, por fortuna, en «esfuerzos comercialmente razonables». Nada en el documento era decorativo: cada frase había sobrevivido a una negociación, y cada coma a un abogado." },
      ],
      gaps: [
        { options: ["funeral", "sketch", "harvest"], answer: 1, why: "El term sheet anticipa el contrato sin serlo: es su boceto." },
        { options: ["joke", "condition", "dessert"], answer: 1, why: "\"Everything expired if nothing was signed\": una caducidad es una condición del acuerdo." },
        { options: ["apology", "anthem", "notice"], answer: 2, why: "La fórmula contractual de la unidad: \"upon thirty days' notice\"." },
        { options: ["snowflake", "phrase", "parade"], answer: 1, why: "Lo que sobrevive a la negociación palabra a palabra es cada frase del documento." },
        { options: ["baker", "dentist", "lawyer"], answer: 2, why: "Quien pelea por cada coma de un contrato es el abogado." },
      ],
    },
    {
      id: "cz-en-c1-03-3", title: "BATNA and the art of the alternative", titleEs: "BATNA y el arte de la alternativa", minutes: 3,
      paragraphs: [
        { it: "Harvard gave American negotiation its central metaphor: the BATNA, or best {1} to a negotiated agreement. Before sitting at any table, the reasoning goes, calculate what happens if no {2} is reached. Whoever holds the stronger alternative negotiates with a slower pulse.", es: "Harvard le dio a la negociación americana su metáfora central: la BATNA, o mejor alternativa a un acuerdo negociado. Antes de sentarse a cualquier mesa, razona la escuela, calcula qué pasa si no se llega a ningún trato. Quien tiene la alternativa más fuerte negocia con el pulso más lento." },
        { it: "In the distribution negotiation, the internal memo had been blunt: our BATNA is {3}, because the second distributor covers only half the territory; theirs is worse, because without our product they lose the premium {4}. The lesson generalizes. Power at the table rarely comes from the volume of the voice; it comes from the quality of the {5}.", es: "En la negociación de distribución, el memo interno había sido directo: nuestra BATNA es débil, porque el segundo distribuidor cubre solo la mitad del territorio; la suya es peor, porque sin nuestro producto pierden el segmento premium. La lección se generaliza. El poder en la mesa rara vez viene del volumen de la voz; viene de la calidad de la alternativa de retirada." },
      ],
      gaps: [
        { options: ["alternative", "allergy", "anniversary"], answer: 0, why: "La A de BATNA: best alternative to a negotiated agreement." },
        { options: ["meal", "deal", "exam"], answer: 1, why: "La BATNA es el plan B si no hay trato: \"if no deal is reached\"." },
        { options: ["hidden", "musical", "weak"], answer: 2, why: "El memo es franco sobre la posición propia: la alternativa es débil porque el otro distribuidor cubre solo la mitad." },
        { options: ["tier", "choir", "dessert"], answer: 0, why: "Sin el producto pierden el segmento premium: el nivel superior del mercado." },
        { options: ["monologue", "walkaway", "encore"], answer: 1, why: "La lección final: el poder viene de la alternativa de levantarse de la mesa, la walkaway." },
      ],
    },
  ],

  "en-cu-c1-04": [
    {
      id: "cz-en-c1-04-1", title: "Rehearsal in a Chicago hotel room", titleEs: "Ensayo en un cuarto de hotel de Chicago", minutes: 3,
      paragraphs: [
        { it: "The night before the keynote, Marcus made his client rehearse the opening eleven times. 'You are opening with a spreadsheet,' the coach kept saying, 'and nobody ever felt a {1}.' The fix never changed: start with the factory in Ohio at four in the morning — a person, a moment, a {2}.", es: "La noche anterior al keynote, Marcus hizo que su cliente ensayara la apertura once veces. «Estás abriendo con una hoja de cálculo», repetía el coach, «y nadie ha sentido nunca un número». La solución no cambiaba: empieza con la fábrica de Ohio a las cuatro de la mañana — una persona, un momento, un problema." },
        { it: "By the fourth run, the statistics had moved to the middle of the talk, where they could {3}. By the seventh, the triad landed: not a tool problem, not a training problem, an {4} problem. By the eleventh, the closing question — who owns your updates? — fell into the {5} that a good talk earns instead of begging for.", es: "En el cuarto pase, las estadísticas se habían mudado al medio de la charla, donde podían respirar. En el séptimo, la tríada conectaba: no es un problema de herramientas, no es un problema de formación, es un problema de responsabilidad. En el undécimo, la pregunta final —¿quién es dueño de sus actualizaciones?— caía en el silencio que una buena charla se gana en lugar de mendigar." },
      ],
      gaps: [
        { options: ["sunset", "number", "language"], answer: 1, why: "La regla del coach de la unidad: \"nobody feels a number\" — ningún dato emociona." },
        { options: ["dessert", "promotion", "problem"], answer: 2, why: "La apertura correcta es una persona, un momento y un problema que resolver." },
        { options: ["breathe", "drown", "panic"], answer: 0, why: "Los datos van al medio de la charla, donde tienen espacio: donde pueden respirar." },
        { options: ["accounting", "athletic", "ownership"], answer: 2, why: "La tríada del talk: tool, training y el golpe final, el problema de responsabilidad (ownership)." },
        { options: ["confetti", "spotlight", "silence"], answer: 2, why: "La pausa que precede a la pregunta final: el silencio que la charla se gana." },
      ],
    },
    {
      id: "cz-en-c1-04-2", title: "A story with data, not data with a story", titleEs: "Una historia con datos, no datos con historia", minutes: 3,
      paragraphs: [
        { it: "Every American keynote coach repeats the same heresy: the audience does not care about your {1}. What they remember is a person in a place at an hour — a factory going dark for six days, a nurse walking home at one in the morning, a {2} planted early and paid off late.", es: "Cada coach americano de keynotes repite la misma herejía: al público no le importan tus diapositivas. Lo que recuerda es una persona en un lugar a una hora — una fábrica a oscuras durante seis días, una enfermera caminando a casa a la una de la madrugada, una pregunta sembrada temprano y pagada tarde." },
        { it: "The structure holds across industries. Open with a {3}, not a thesis. Plant the question before the audience knows it has one. Build the middle in three {4}, because three is the smallest number that feels like a journey. And close each section with the only question a room of busy people respects: so {5}?", es: "La estructura se sostiene en cualquier industria. Abre con una escena, no con una tesis. Siembra la pregunta antes de que el público sepa que la tiene. Construye el desarrollo en tres tiempos, porque tres es el número más pequeño que se siente como un viaje. Y cierra cada sección con la única pregunta que una sala de gente ocupada respeta: ¿y eso qué implica?" },
      ],
      gaps: [
        { options: ["slides", "shoes", "relatives"], answer: 0, why: "La herejía del coach: al público no le importan tus diapositivas." },
        { options: ["mortgage", "question", "passport"], answer: 1, why: "\"Planted early and paid off late\": la pregunta sembrada al inicio y respondida al cierre." },
        { options: ["spreadsheet", "acronym", "scene"], answer: 2, why: "La apertura canónica del keynote es una escena, nunca una tesis." },
        { options: ["decades", "beats", "gallons"], answer: 1, why: "El desarrollo se construye en tres tiempos: three beats." },
        { options: ["what", "when", "whether"], answer: 0, why: "La pregunta que cierra cada sección es \"so what?\": ¿y eso qué implica?" },
      ],
    },
    {
      id: "cz-en-c1-04-3", title: "From the pulpit to the podium", titleEs: "Del púlpito al podio", minutes: 4,
      paragraphs: [
        { it: "American public speaking descends from the sermon. The cadences that fill arenas — repetition, triads, the pause before the payoff — were tuned over centuries in wooden {1} long before anyone built a conference stage. Lincoln needed two minutes at Gettysburg; the address closes with one of the most famous {2} in the language, and political speech has been borrowing it ever since.", es: "La oratoria pública americana desciende del sermón. Las cadencias que llenan estadios — la repetición, las tríadas, la pausa antes de la revelación — se afinaron durante siglos en iglesias de madera mucho antes de que nadie construyera un escenario de conferencias. Lincoln necesitó dos minutos en Gettysburg; el discurso cierra con una de las tríadas más famosas del idioma, y el discurso político no ha dejado de tomarla prestada desde entonces." },
        { it: "The modern keynote industrialized the inheritance. One idea per {3}, a coach in the rehearsal room, and a hard clock: eighteen minutes at TED, often five at a TEDx. Critics call the format inspiration in a {4}; the coaches answer that every speaker still has to earn the room with the oldest tool there is — a well-told {5}.", es: "El keynote moderno industrializó la herencia. Una idea por charla, un coach en la sala de ensayo y un reloj estricto: dieciocho minutos en TED, a menudo cinco en un TEDx. Los críticos llaman al formato inspiración en caja; los coaches responden que cada orador sigue teniendo que ganarse a la sala con la herramienta más antigua que existe: una historia bien contada." },
      ],
      gaps: [
        { options: ["banks", "churches", "stadiums"], answer: 1, why: "La oratoria viene del sermón: se afinó en las iglesias, no en bancos ni estadios." },
        { options: ["typos", "tariffs", "triads"], answer: 2, why: "El cierre de Gettysburg ('of the people, by the people, for the people') es una tríada." },
        { options: ["library", "talk", "salary"], answer: 1, why: "La regla del formato: una idea por charla." },
        { options: ["box", "exam", "attic"], answer: 0, why: "Los críticos hablan de inspiración empaquetada: inspiración en caja." },
        { options: ["invoice", "license", "story"], answer: 2, why: "La herramienta más antigua del orador: una historia bien contada." },
      ],
    },
  ],

  "en-cu-c1-05": [
    {
      id: "cz-en-c1-05-1", title: "Walk me through the quarter", titleEs: "Guíame por el trimestre", minutes: 3,
      paragraphs: [
        { it: "The CFO did not open the review with the income statement; she opened with a demand: 'Tell me the {1} the numbers tell.' It had three acts. Revenue had surged eighteen percent, quarter over {2}, on the strength of new subscriptions. Gross margin, however, had fallen from forty-two to thirty-six percent.", es: "La directora financiera no abrió la revisión con el estado de resultados; abrió con una exigencia: «Cuéntame la historia que dicen los números». Tenía tres actos. Los ingresos se habían disparado un dieciocho por ciento, trimestre contra trimestre, por el impulso de las nuevas suscripciones. El margen bruto, sin embargo, había caído del cuarenta y dos al treinta y seis por ciento." },
        { it: "The villain of the second act was customer {3}: paid channels had doubled their rates, and the damage flowed straight to the margin. The third act belonged to the enterprise segment — barely eight percent of revenue, but the only line where deals were not {4}. Her recommendation closed the show: double {5} on the one segment that compounds.", es: "El villano del segundo acto fue la adquisición de clientes: los canales pagados habían duplicado sus tarifas, y el daño fluía directo al margen. El tercer acto fue para el segmento empresarial —apenas el ocho por ciento de los ingresos, pero la única línea donde los negocios no se estaban agotando—. Su recomendación cerró la función: apostar fuerte por el único segmento que se capitaliza." },
      ],
      gaps: [
        { options: ["apology", "weather", "story"], answer: 2, why: "La exigencia de la CFO en la unidad: \"tell me the story the numbers tell\"." },
        { options: ["decade", "quarter", "century"], answer: 1, why: "El comparativo típico del reporte trimestral: quarter over quarter." },
        { options: ["acquisition", "anniversary", "retirement"], answer: 0, why: "Los canales pagados que duplican tarifas son coste de adquisición de clientes." },
        { options: ["compounding", "dwindling", "blossoming"], answer: 1, why: "El único segmento donde los negocios \"are not dwindling\": no se están agotando." },
        { options: ["down", "over", "away"], answer: 0, why: "La recomendación de la unidad: \"I'd double down on it\" — apostar fuerte." },
      ],
    },
    {
      id: "cz-en-c1-05-2", title: "The earnings call, a genre", titleEs: "La llamada de resultados, un género", minutes: 4,
      paragraphs: [
        { it: "Every quarter, public American companies perform a ritual unfamiliar to most classrooms: the earnings {1}. Executives read prepared remarks for ten minutes, and then analysts from Wall Street firms take turns asking questions that are {2} hostile. The whole thing is public, transcribed, and remembered.", es: "Cada trimestre, las empresas americanas cotizadas ejecutan un ritual ajeno a la mayoría de las aulas: la llamada de resultados. Los ejecutivos leen declaraciones preparadas durante diez minutos y luego los analistas de las firmas de Wall Street se turnan para hacer preguntas que son cortésmente hostiles. Todo el asunto es público, se transcribe y se recuerda." },
        { it: "The vocabulary of the genre travels well: quarter over quarter, run rate, pipeline, guidance. Numbers are rounded with {3} — 'roughly four point two million' — and bad news arrives in the passive voice: 'margins were pressured.' Analysts listen for what the guidance {4} as much as for what it says; the stock often moves more on the {5} than on the quarter itself.", es: "El vocabulario del género viaja bien: quarter over quarter, run rate, pipeline, guidance. Las cifras se redondean con gracia —«aproximadamente cuatro punto dos millones»— y las malas noticias llegan en voz pasiva: «los márgenes fueron presionados». Los analistas escuchan tanto lo que la proyección esconde como lo que dice; la acción a menudo se mueve más por las perspectivas que por el propio trimestre." },
      ],
      gaps: [
        { options: ["picnic", "call", "wedding"], answer: 1, why: "El ritual trimestral con prepared remarks y analistas es la earnings call." },
        { options: ["politely", "secretly", "musically"], answer: 0, why: "La cortesía hostil es el tono característico de los analistas en directo." },
        { options: ["shame", "anger", "grace"], answer: 2, why: "Redondear cifras con elegancia: \"roughly four point two million\" — con gracia." },
        { options: ["applauds", "waters", "hides"], answer: 2, why: "Los analistas buscan lo que la proyección no dice: lo que esconde." },
        { options: ["logo", "furniture", "outlook"], answer: 2, why: "La bolsa se mueve más por las perspectivas (guidance/outlook) que por el trimestre." },
      ],
    },
    {
      id: "cz-en-c1-05-3", title: "Verbs that draw the line", titleEs: "Verbos que trazan la línea", minutes: 3,
      paragraphs: [
        { it: "English keeps a small orchestra of verbs for describing change, and each instrument has exactly one {1}. Revenue surges when it rises fast; it climbs when it rises steadily; it plateaus when it {2} at a level; it dips briefly and recovers; it dwindles when it shrinks toward nothing.", es: "El inglés mantiene una pequeña orquesta de verbos para describir el cambio, y cada instrumento tiene exactamente un sonido. Los ingresos se disparan cuando suben rápido; escalan cuando suben con constancia; se estancan cuando se aplanan en un nivel; caen un momento y se recuperan; se agotan cuando se encogen hacia la nada." },
        { it: "Choosing the wrong verb is not a stylistic slip; it is a {3} about the data. To say that churn 'corrected' when it doubled is to hand the board a {4} falsehood. The CFO's rule is simpler than any style guide: the verb must be as honest as the {5}, and the number must be visible on the slide.", es: "Elegir el verbo equivocado no es un desliz de estilo; es una mentira sobre los datos. Decir que la fuga de clientes «se corrigió» cuando se duplicó es entregarle a la dirección una falsedad reconfortante. La regla de la directora financiera es más simple que cualquier manual de estilo: el verbo debe ser tan honesto como la cifra, y la cifra debe verse en la diapositiva." },
      ],
      gaps: [
        { options: ["price", "sound", "rival"], answer: 1, why: "La metáfora de la orquesta: cada instrumento tiene un sonido propio." },
        { options: ["flattens", "triples", "explodes"], answer: 0, why: "Plateau significa estancarse: aplanarse en un nivel." },
        { options: ["blessing", "lie", "upgrade"], answer: 1, why: "Un verbo equivocado distorsiona la realidad del dato: es una mentira." },
        { options: ["comfortable", "unbearable", "illegal"], answer: 0, why: "La falsedad que tranquiliza a la junta es una falsedad reconfortante." },
        { options: ["slogan", "logo", "number"], answer: 2, why: "La regla empareja verbo y cifra: el número debe estar en la diapositiva." },
      ],
    },
  ],

  "en-cu-c1-06": [
    {
      id: "cz-en-c1-06-1", title: "Four hundred stores, one puzzle", titleEs: "Cuatrocientas tiendas, un enigma", minutes: 3,
      paragraphs: [
        { it: "The case opened with three sentences: a coffee chain, four hundred stores, flat {1} and shrinking profits. The candidate paused, then did the thing that separates consultants from the merely anxious: 'Let me take a moment to {2} the problem.' Thirty seconds of silence followed, and the interviewer let them happen.", es: "El caso se abrió con tres frases: una cadena de café, cuatrocientas tiendas, ingresos planos y beneficios en picada. El candidato hizo una pausa y luego hizo lo que separa a los consultores de los simplemente ansiosos: «Déjeme un momento para estructurar el problema». Siguió medio minuto de silencio, y la entrevistadora lo permitió." },
        { it: "The tree grew on the whiteboard: profits are revenue minus {3}, so the problem splits in two. On the revenue side, are we losing customers, or are they spending less per {4}? On the cost side, have inputs become dearer, or is the footprint simply too {5}? Structure, the interviewer wrote in her notes afterward, is everything.", es: "El árbol creció en la pizarra: los beneficios son ingresos menos costes, así que el problema se divide en dos. Del lado de los ingresos, ¿estamos perdiendo clientes o gastan menos por visita? Del lado de los costes, ¿se han encarecido los insumos o la red de tiendas es simplemente demasiado grande? La estructura, escribió la entrevistadora en sus notas después, lo es todo." },
      ],
      gaps: [
        { options: ["weather", "revenue", "parking"], answer: 1, why: "El caso: ingresos planos y beneficios que se encogen — flat revenue." },
        { options: ["celebrate", "decorate", "structure"], answer: 2, why: "La apertura canónica de la case interview: \"let me take a moment to structure the problem\"." },
        { options: ["costs", "holidays", "hobbies"], answer: 0, why: "Beneficios = ingresos menos costes: la primera rama del árbol." },
        { options: ["decade", "visit", "gallon"], answer: 1, why: "La pregunta de la demanda: menos clientes o menos gasto por visita." },
        { options: ["quiet", "musical", "large"], answer: 2, why: "La sospecha del lado de costes: demasiadas tiendas — una red demasiado grande." },
      ],
    },
    {
      id: "cz-en-c1-06-2", title: "How many cups at dawn?", titleEs: "¿Cuántas tazas al amanecer?", minutes: 3,
      paragraphs: [
        { it: "Market-sizing questions sound impossible and then answer themselves with arithmetic. How many Americans buy coffee out on a given morning? Start with the {1}, roughly three hundred and thirty million people. Assume six in ten drink coffee at all, and one in five of those buys it {2} the home.", es: "Las preguntas de dimensionamiento de mercado suenan imposibles y luego se responden solas con aritmética. ¿Cuántos americanos compran café fuera cualquier mañana? Empieza con la población, aproximadamente trescientos treinta millones de personas. Asume que seis de cada diez toman café y que uno de cada cinco de esos lo compra fuera de casa." },
        { it: "Multiply, round shamelessly, and the answer lands near forty million {3} — give or take. The number matters less than the method: every assumption is spoken aloud, every step is {4}, and the final figure gets a sanity check against something everyone knows. A good estimate is not a guess; it is an {5} in numbers.", es: "Multiplica, redondea sin vergüenza, y la respuesta aterriza cerca de los cuarenta millones de transacciones, más o menos. El número importa menos que el método: cada supuesto se dice en voz alta, cada paso es verificable, y la cifra final se contrasta con algo que todos conocen. Una buena estimación no es una corazonada; es un argumento en números." },
      ],
      gaps: [
        { options: ["senate", "population", "navy"], answer: 1, why: "El punto de partida del market sizing: la población total, 330 millones." },
        { options: ["under", "despite", "outside"], answer: 2, why: "\"Buy it out\": comprarlo fuera de casa — outside the home." },
        { options: ["apologies", "transactions", "birthdays"], answer: 1, why: "Cuarenta millones de compras matinales: cuarenta millones de transacciones." },
        { options: ["checkable", "encrypted", "unbreakable"], answer: 0, why: "Cada paso del cálculo se puede verificar en voz alta: es verificable." },
        { options: ["argument", "lottery", "rumor"], answer: 0, why: "La estimación bien hecha razona: es un argumento en números." },
      ],
    },
    {
      id: "cz-en-c1-06-3", title: "MECE, or the art of clean branches", titleEs: "MECE, o el arte de las ramas limpias", minutes: 3,
      paragraphs: [
        { it: "Consulting's favorite acronym is a discipline of {1}: mutually exclusive, collectively exhaustive. Every tree of analysis must split the problem into branches that neither {2} nor leave gaps. Overlapping branches count the same customer twice; gaps let the real driver escape unnoticed.", es: "El acrónimo favorito de la consultoría es una disciplina del pensamiento: mutuamente excluyente, colectivamente exhaustivo. Todo árbol de análisis debe dividir el problema en ramas que ni se solapen ni dejen huecos. Las ramas que se solapan cuentan al mismo cliente dos veces; los huecos dejan escapar al verdadero factor sin ser notado." },
        { it: "The discipline sounds bureaucratic until it saves you. In the coffee case, splitting customers into {3} and light users was MECE; splitting them into 'morning people' and 'people in a hurry' was not — the same customer can be {4}. The rule travels well beyond business: any explanation that double-counts or leaves a {5} will eventually be caught by someone.", es: "La disciplina suena burocrática hasta que te salva. En el caso del café, dividir a los clientes en intensivos y ligeros era MECE; dividirlos entre «gente de mañana» y «gente con prisa» no lo era — el mismo cliente puede ser ambas cosas. La regla viaja más allá de los negocios: toda explicación que cuente dos veces lo mismo o deje un hueco terminará siendo detectada por alguien." },
      ],
      gaps: [
        { options: ["decoration", "thought", "gardening"], answer: 1, why: "MECE es una disciplina del razonamiento: del pensamiento." },
        { options: ["overlap", "dissolve", "bloom"], answer: 0, why: "Mutuamente excluyente: las ramas no deben solaparse." },
        { options: ["hypothetical", "heavy", "honorary"], answer: 1, why: "La división MECE del caso: usuarios intensivos (heavy) y ligeros." },
        { options: ["neither", "both", "none"], answer: 1, why: "El contraejemplo: el mismo cliente puede ser de mañana Y tener prisa — ambas cosas." },
        { options: ["medal", "bonus", "hole"], answer: 2, why: "El hueco que deja escapar al factor clave: el gap de la partición." },
      ],
    },
  ],

  "en-cu-c1-07": [
    {
      id: "cz-en-c1-07-1", title: "Twelve pages before the signature", titleEs: "Doce páginas antes de la firma", minutes: 4,
      paragraphs: [
        { it: "The offer letter promised a two-year position; the contract told a different story. Page four, section 4.1: 'Employment here is {1}.' In plain English, either side could end the job at any time, for any reason or for no reason — the 'anticipated duration' in the letter was {2}, not binding.", es: "La carta de oferta prometía un puesto de dos años; el contrato contaba otra historia. Página cuatro, sección 4.1: «El empleo aquí es a voluntad». En inglés claro, cualquiera de las partes podía terminar el trabajo en cualquier momento, por cualquier razón o sin razón — la «duración anticipada» de la carta era aspiracional, no vinculante." },
        { it: "Section 7.2 was quieter and more dangerous: any invention 'conceived or reduced to practice' during employment would belong to the company — even, as written, the {3} project coded on Sundays. The lawyer flagged it in yellow. 'This clause is broad,' she said, 'and broad clauses are negotiated, not {4}.' The red pen, in contract reviews, is a {5}.", es: "La sección 7.2 era más silenciosa y más peligrosa: cualquier invención «concebida o puesta en práctica» durante el empleo pertenecería a la compañía — incluso, tal como estaba escrita, el proyecto paralelo programado los domingos. La abogada la marcó en amarillo. «Esta cláusula es amplia», dijo, «y las cláusulas amplias se negocian, no se admiran». El bolígrafo rojo, en las revisiones de contratos, es un amigo." },
      ],
      gaps: [
        { options: ["by force", "on strike", "at will"], answer: 2, why: "\"Either side could end the job at any time\" define el empleo a voluntad: at will." },
        { options: ["arithmetic", "aspirational", "seasonal"], answer: 1, why: "La duración de la carta no obliga: era aspiracional, no vinculante." },
        { options: ["legal", "group", "side"], answer: 2, why: "El proyecto propio fuera del trabajo es un side project." },
        { options: ["ignored", "deleted", "admired"], answer: 2, why: "La lección de la unidad: \"broad clauses are negotiated, not admired\"." },
        { options: ["luxury", "friend", "rumor"], answer: 1, why: "El cierre del texto: el bolígrafo rojo que marca cláusulas es un aliado." },
      ],
    },
    {
      id: "cz-en-c1-07-2", title: "The lawyer's margin notes", titleEs: "Las notas al margen de la abogada", minutes: 4,
      paragraphs: [
        { it: "Angela read contracts the way surgeons read scans: slowly, and with a pen. Within an hour she had circled the {1} — twelve months, any competitor, nationwide — and written one word beside it: 'enforceable, maybe.' Some states, she explained, had banned such clauses {2}; others still honored them.", es: "Angela leía contratos como los cirujanos leían escáneres: despacio, y con bolígrafo. En una hora había encerrado el acuerdo de no competencia — doce meses, cualquier competidor, a nivel nacional — y escrito una palabra al lado: «exigible, quizá». Algunos estados, explicó, habían prohibido tales cláusulas de plano; otros todavía las honraban." },
        { it: "Next came the severance language, which promised 'pay in lieu of notice' without ever defining {3}. Then the arbitration clause, which quietly moved any future dispute a thousand miles from the employee's home. 'Every one of these is a {4}, not a paragraph,' she said. 'The person who signs without asking has already {5}.'", es: "Después vino el lenguaje de indemnización, que prometía «pago en lugar de aviso» sin definir nunca el aviso. Luego la cláusula de arbitraje, que trasladaba silenciosamente cualquier disputa futura a mil kilómetros del hogar del empleado. «Cada una de estas es una pregunta, no un párrafo», dijo. «Quien firma sin preguntar ya respondió»." },
      ],
      gaps: [
        { options: ["non-compete", "open-house", "take-home"], answer: 0, why: "\"Twelve months, any competitor\": el acuerdo de no competencia." },
        { options: ["overnight", "outright", "offshore"], answer: 1, why: "Algunos estados los prohibieron de plano: banned outright." },
        { options: ["notice", "breakfast", "mileage"], answer: 0, why: "\"Pay in lieu of notice\": pago en lugar de aviso — el aviso queda sin definir." },
        { options: ["novel", "question", "anthem"], answer: 1, why: "La lección de la abogada: cada cláusula es una pregunta que hay que hacer." },
        { options: ["answered", "resigned", "retired"], answer: 0, why: "\"Signs without asking has already answered\": quien firma sin preguntar ya respondió." },
      ],
    },
    {
      id: "cz-en-c1-07-3", title: "The plain-language rebellion", titleEs: "La rebelión del lenguaje claro", minutes: 3,
      paragraphs: [
        { it: "For decades, American contracts read as though clarity were a {1}. That began to change with the plain language movement: lawyers and linguists who argued that a document a citizen cannot understand is a document a court should not {2}. Congress agreed in 2010, at least for the government's own paperwork.", es: "Durante décadas, los contratos americanos se leían como si la claridad fuera un pasivo en el balance. Eso empezó a cambiar con el movimiento del lenguaje claro: abogados y lingüistas que sostenían que un documento que un ciudadano no puede entender es un documento que un tribunal no debería ejecutar. El Congreso estuvo de acuerdo en 2010, al menos para el papeleo del propio gobierno." },
        { it: "The results are visible everywhere. Insurance policies in New York must now meet readability {3}. Federal forms ask questions a human could answer without a law {4}. And in negotiation rooms, the strongest sentence is often the simplest: 'Can we say this in plain English?' Plain language, its advocates like to say, is not {5} down; it is letting the light in.", es: "Los resultados se ven por todas partes. Las pólizas de seguro de Nueva York deben ahora cumplir estándares de legibilidad. Los formularios federales hacen preguntas que un humano podría responder sin un título en leyes. Y en las salas de negociación, la frase más poderosa es a menudo la más simple: «¿Podemos decir esto en inglés claro?». El lenguaje claro, dicen sus defensores, no es simplificar hasta la tontería: es dejar entrar la luz." },
      ],
      gaps: [
        { options: ["melody", "promotion", "liability"], answer: 2, why: "Los contratos trataban la claridad como un pasivo: una responsabilidad, un riesgo." },
        { options: ["translate", "laminate", "enforce"], answer: 2, why: "Un tribunal no debería ejecutar (hacer cumplir) un documento ininteligible." },
        { options: ["sponsors", "standards", "stereotypes"], answer: 1, why: "Las pólizas deben cumplir estándares de legibilidad (readability standards)." },
        { options: ["degree", "loan", "oath"], answer: 0, why: "Preguntas que no exigen un título en leyes: sin law degree." },
        { options: ["dumbing", "calming", "numbing"], answer: 0, why: "La defensa del movimiento: no es \"dumbing down\" — no es rebajar el nivel." },
      ],
    },
  ],

  "en-cu-c1-08": [
    {
      id: "cz-en-c1-08-1", title: "Four a.m. at Delgado Farms", titleEs: "Cuatro de la mañana en Delgado Farms", minutes: 3,
      paragraphs: [
        { it: "At four in the morning the parking lot holds one running {1} and eleven men who will not be paid by the hour. The diesel smell hangs in the cold; frost still covers the {2} of the cars that brought them. By six, the first tomatoes will be on the road; by noon, the temperature will pass one hundred degrees.", es: "A las cuatro de la mañana, el estacionamiento guarda un camión encendido y once hombres que no cobrarán por hora. El olor a diésel flota en el frío; la escarcha cubre todavía los parabrisas de los autos que los trajeron. A las seis, los primeros tomates estarán en camino; al mediodía, la temperatura pasará de los cien grados." },
        { it: "The harvest is bigger this year and the {3} are fewer. That mismatch, quiet as it is, is the story. The reporter who spends a season in these fields learns the first law of longform: the {4} belong in the third paragraph; the first belongs to the {5}, the diesel, and the men.", es: "La cosecha es mayor este año y los trabajadores son menos. Ese desajuste, silencioso como es, es la historia. El periodista que pasa una temporada en estos campos aprende la primera ley del periodismo largo: los números van en el tercer párrafo; el primero le pertenece a la escarcha, al diésel y a los hombres." },
      ],
      gaps: [
        { options: ["piano", "truck", "fountain"], answer: 1, why: "Un camión encendido espera a la cuadrilla: the running truck." },
        { options: ["windshields", "chimneys", "elevators"], answer: 0, why: "La escarcha cubre los cristales de los autos: los parabrisas." },
        { options: ["shareholders", "workers", "tourists"], answer: 1, why: "El desajuste de la unidad: cosecha mayor, menos trabajadores." },
        { options: ["apologies", "suspects", "numbers"], answer: 2, why: "El primer párrafo es escena pura: las cifras van más adelante." },
        { options: ["payroll", "forecast", "frost"], answer: 2, why: "El cierre enumera la escena: la escarcha, el diésel y los hombres." },
      ],
    },
    {
      id: "cz-en-c1-08-2", title: "The paragraph that tells you why", titleEs: "El párrafo que te dice por qué", minutes: 3,
      paragraphs: [
        { it: "Every feature has a hinge, and American editors have a name for it: the nut {1}. Three or so paragraphs into the story, it answers the two questions every reader silently asks — what is this story about, and why {2}? Skip it, and readers drift away; write it well, and they will follow you anywhere.", es: "Toda reportaje largo tiene una bisagra, y los editores americanos le pusieron nombre: el nut graf. Unos tres párrafos adentro de la historia, responde las dos preguntas que todo lector hace en silencio — ¿de qué va esta historia y por qué ahora? Omitirlo es perder al lector; escribirlo bien es que te siga a donde sea." },
        { it: "The nut graf is also a promise. It tells the reader what the rest of the story will {3}, and the story must keep that promise or lose the room. Good writers draft it early, then {4} it last, because the story often discovers its real subject on the way. The lede opens a {5}; the nut graf tells you which house you have entered.", es: "El nut graf es también una promesa. Le dice al lector qué entregará el resto de la historia, y la historia debe cumplir esa promesa o perder la sala. Los buenos escritores lo redactan temprano y lo revisan al final, porque la historia a menudo descubre su verdadero tema en el camino. El arranque abre una puerta; el nut graf te dice a qué casa has entrado." },
      ],
      gaps: [
        { options: ["graf", "bar", "shell"], answer: 0, why: "La bisagra de la feature americana se llama nut graf." },
        { options: ["now", "ever", "bother"], answer: 0, why: "Las dos preguntas del lector: de qué va y por qué ahora — why now." },
        { options: ["deliver", "abandon", "deny"], answer: 0, why: "La promesa: lo que el resto de la historia entregará." },
        { options: ["shred", "photocopy", "revise"], answer: 2, why: "Se redacta temprano y se revisa al final: la historia descubre su tema en el camino." },
        { options: ["wound", "invoice", "door"], answer: 2, why: "La metáfora del cierre: el lede abre una puerta." },
      ],
    },
    {
      id: "cz-en-c1-08-3", title: "The fact-checker calls", titleEs: "La llamada del verificador de datos", minutes: 3,
      paragraphs: [
        { it: "At certain American magazines, no sentence survives on charm alone. Before the harvest story ran, a fact-checker called the farm, the county office, and two of the eleven {1} named in paragraph one. Did the truck really idle at four a.m.? Was the temperature record from the {2} or from memory?", es: "En ciertas revistas americanas, ninguna frase sobrevive solo por su encanto. Antes de publicar la historia de la cosecha, un verificador de datos llamó a la granja, a la oficina del condado y a dos de los once trabajadores mencionados en el primer párrafo. ¿El camión realmente ralentó a las cuatro de la mañana? ¿El registro de temperatura venía del periódico o de la memoria?" },
        { it: "The writer had quoted a man saying the season felt 'shorter than church.' The checker asked him to confirm the {3}, the hour, and the field. This is the invisible industry behind the longform: verification, done one {4} call at a time. Readers rarely see it, which is precisely the {5}; they only notice when it is missing.", es: "El escritor había citado a un hombre diciendo que la temporada se sentía «más corta que la misa». El verificador le pidió confirmar la cita, la hora y el campo. Esta es la industria invisible detrás del periodismo largo: la verificación, hecha una llamada telefónica a la vez. Los lectores rara vez la ven, que es exactamente la idea; solo la notan cuando falta." },
      ],
      gaps: [
        { options: ["workers", "lawyers", "senators"], answer: 0, why: "Los once hombres del primer párrafo son los trabajadores de la cosecha." },
        { options: ["grocery", "newspaper", "museum"], answer: 1, why: "La alternativa al registro del periódico es la memoria: la fuente es el periódico." },
        { options: ["salary", "quote", "accent"], answer: 1, why: "El verificador confirma la frase entrecomillada: la cita." },
        { options: ["phone", "paragraph", "tractor"], answer: 0, why: "La verificación se hace llamada a llamada: una llamada telefónica a la vez." },
        { options: ["point", "scandal", "invoice"], answer: 0, why: "El cierre: los lectores no ven la verificación, y esa es exactamente la idea." },
      ],
    },
  ],

  "en-cu-c1-09": [
    {
      id: "cz-en-c1-09-1", title: "What Dave really meant", titleEs: "Lo que Dave quiso decir de verdad", minutes: 3,
      paragraphs: [
        { it: "The budget meeting ended with warm words and no decisions, and Megan decoded it over coffee. Dave had called the proposal 'interesting' — which, in that {1}, meant it would not be happening. 'If he'd loved it,' she said, 'he would have said let's run a {2}. That's what love sounds like around here.'", es: "La reunión de presupuesto terminó con palabras cálidas y ninguna decisión, y Megan la descifró frente a un café. Dave había dicho que la propuesta era «interesante» — lo que, en ese edificio, significaba que no iba a suceder. «Si le hubiera encantado», dijo, «habría dicho: hagamos un piloto. Eso es lo que suena el amor por aquí»." },
        { it: "Karen's 'circle back' fared no better: not this quarter, probably not this year. But 'it has merit' had been a real {3}, and 'keep me posted' a polite ending, not a beginning. The proposal was not dead, Megan concluded — merely {4}, waiting for a sponsor with a {5}. The verbs, as always, had told the truth.", es: "El «retomémoslo» de Karen no corrió mejor suerte: ni este trimestre, probablemente ni este año. Pero el «tiene mérito» había sido un cumplido de verdad, y el «te iré informando» un final cortés, no un comienzo. La propuesta no estaba muerta, concluyó Megan — simplemente aparcada, a la espera de un patrocinador con presupuesto. Los verbos, como siempre, habían dicho la verdad." },
      ],
      gaps: [
        { options: ["museum", "building", "greenhouse"], answer: 1, why: "\"In that building\" = en esa empresa; la unidad lo explica: en ese edificio, 'interesting' es un adiós." },
        { options: ["funeral", "parade", "pilot"], answer: 2, why: "El amor corporativo suena a compromiso: \"let's run a pilot\"." },
        { options: ["diagnosis", "eviction", "compliment"], answer: 2, why: "«Has merit» es de Karen un elogio real: un cumplido." },
        { options: ["promoted", "patented", "parked"], answer: 2, why: "La distinción de la unidad: not dead — parked; aparcada, a la espera de patrocinador." },
        { options: ["hobby", "budget", "accent"], answer: 1, why: "Lo que necesita la propuesta aparcada: un sponsor con presupuesto." },
      ],
    },
    {
      id: "cz-en-c1-09-2", title: "A field guide to office speak", titleEs: "Una guía de campo del lenguaje de oficina", minutes: 3,
      paragraphs: [
        { it: "Some phrases deserve a field guide, the way rare birds do. 'Let's take this {1}' means the argument is boring the room and someone intends to win it privately. 'With all due respect' announces that respect has just {2}. 'It's on our radar' means exactly one thing: it exists.", es: "Algunas frases merecen una guía de campo, como las aves raras. «Sigamos esto fuera de la reunión» significa que la discusión aburre a la sala y que alguien piensa ganarla en privado. «Con todo el respeto» anuncia que el respeto acaba de terminar. «Lo tenemos en el radar» significa exactamente una cosa: existe." },
        { it: "The guide's golden rule is prosodic, not grammatical: listen for the {3}. 'We'll run a pilot' is a plan; 'we'll look into it' is a shrug; 'we'll keep you posted' is a {4}. Adjectives decorate; verbs decide. The office that sounds friendliest, the veteran says, is often the one where the most is being politely {5}.", es: "La regla de oro de la guía es prosódica, no gramatical: escucha los verbos. «Haremos un piloto» es un plan; «lo estudiaremos» es un encogimiento de hombros; «te iremos informando» es una despedida. Los adjetivos adornan; los verbos deciden. La oficina que suena más amable, dice la veterana, es a menudo aquella en la que más cosas se están rechazando con cortesía." },
      ],
      gaps: [
        { options: ["offline", "upstairs", "outdoors"], answer: 0, why: "La entrada de la guía: \"let's take this offline\" — hablemos en privado." },
        { options: ["ended", "doubled", "begun"], answer: 0, why: "\"With all due respect\" anuncia que el respeto se acaba de terminar." },
        { options: ["vowels", "verbs", "volumes"], answer: 1, why: "La regla de oro: read the verbs, not the adjectives." },
        { options: ["goodbye", "raise", "deadline"], answer: 0, why: "La escalera de compromiso: \"keep you posted\" es una despedida." },
        { options: ["renovated", "reimbursed", "refused"], answer: 2, why: "La paradoja final: lo que más se rechaza con cortesía en la oficina más amable." },
      ],
    },
    {
      id: "cz-en-c1-09-3", title: "The art of saying less", titleEs: "El arte de decir menos", minutes: 3,
      paragraphs: [
        { it: "English, at least in its American office dialect, praises by {1}. 'Not unreasonable' is warm. 'Not without merit' is practically a toast. 'I don't disagree' is the closest a certain kind of engineer will ever come to {2}. The grammar is negative; the meaning is not.", es: "El inglés, al menos en su dialecto de oficina americano, elogia negando. «No es irrazonable» es cálido. «No carece de mérito» es prácticamente un brindis. «No estoy en desacuerdo» es lo más cerca que cierto tipo de ingeniero estará jamás de un aplauso. La gramática es negativa; el significado, no." },
        { it: "The device has a name — litotes, the Greeks' gift to understatement — and it travels badly. Translated literally, 'not a bad quarter' can sound like faint {3} to ears expecting a superlative. The rule for the fluent: match the register of the room. In Minnesota, 'that's different' is a {4}; in Manhattan, 'not bad' can be a {5}. Context, as always, does half the talking.", es: "El recurso tiene nombre —litotes, el regalo de los griegos al eufemismo— y viaja mal. Traducido literalmente, «no está mal el trimestre» puede sonar a elogio tibio ante oídos que esperaban un superlativo. La regla del que domina el idioma: calibra el registro de la sala. En Minnesota, «eso es distinto» es una crisis; en Manhattan, «nada mal» puede ser un triunfo. El contexto, como siempre, hace la mitad de la conversación." },
      ],
      gaps: [
        { options: ["inflation", "rotation", "negation"], answer: 2, why: "El elogio por negación: \"not unreasonable\", \"not without merit\"." },
        { options: ["applause", "retirement", "litigation"], answer: 0, why: "Para el ingeniero, \"I don't disagree\" es lo más cercano a un aplauso." },
        { options: ["praise", "budget", "scandal"], answer: 0, why: "Ante oídos que esperan superlativos, el litotes suena a elogio tibio." },
        { options: ["crisis", "miracle", "promotion"], answer: 0, why: "El ejemplo del texto: en Minnesota, \"that's different\" es una crisis." },
        { options: ["typo", "fine", "triumph"], answer: 2, why: "El contraste: en Manhattan, \"not bad\" puede ser un triunfo." },
      ],
    },
  ],

  "en-cu-c1-10": [
    {
      id: "cz-en-c1-10-1", title: "First sprint in Houston", titleEs: "Primer sprint en Houston", minutes: 3,
      paragraphs: [
        { it: "The kickoff call sounded like a radio dial: a drawl from Dallas, a fast clip from Queens, two colleagues from Monterrey switching mid-sentence, and Darnell from Third Ward setting the {1}. First rule of the project: everybody's accent is {2} here. Nobody laughed, because nobody needed to.", es: "La llamada de arranque sonaba como una radio sintonizándose: una cadencia lenta de Dallas, un ritmo rápido de Queens, dos colegas de Monterrey que cambiaban de idioma a media frase y Darnell de Third Ward marcando las reglas. Primera regla del proyecto: el acento de todos es bienvenido aquí. Nadie rio, porque nadie lo necesitaba." },
        { it: "The work followed. Becky from Dallas said 'fixin' to' when she meant 'about to,' and the team {3} grew by a page. Ravi described his client voice and his home voice like a suit and a pair of work {4}. By Friday the team had shipped the sprint and the {5}: clarity beats sameness, every single time.", es: "El trabajo siguió. Becky, de Dallas, decía «fixin' to» cuando quería decir «estar a punto de», y el glosario del equipo creció una página. Ravi describió su voz de cliente y su voz de casa como un traje y un par de botas de trabajo. Para el viernes, el equipo había entregado el sprint y la moraleja: la claridad gana a la uniformidad, todas y cada una de las veces." },
      ],
      gaps: [
        { options: ["fares", "rules", "menus"], answer: 1, why: "Darnell de Third Ward marca la primera regla del proyecto." },
        { options: ["graded", "licensed", "welcome"], answer: 2, why: "La regla del equipo: \"everybody's accent is welcome here\"." },
        { options: ["glossary", "penalty", "payroll"], answer: 0, why: "«Fixin' to» se documenta: el glosario del equipo crece una página." },
        { options: ["boots", "suits", "trophies"], answer: 0, why: "La comparación de Ravi: un traje y un par de botas de trabajo." },
        { options: ["point", "invoice", "penalty"], answer: 0, why: "La moraleja del sprint: \"clarity beats sameness\"." },
      ],
    },
    {
      id: "cz-en-c1-10-2", title: "A biography you can hear", titleEs: "Una biografía que se puede oír", minutes: 3,
      paragraphs: [
        { it: "Linguists like to say that an accent is not a {1} but a biography you can hear. The claim is more than kindness. Every vowel carries a map: where a speaker grew up, whom they loved, which rooms taught them to {2}. The evening-news accent called General American was chosen by studios, not by grammar.", es: "A los lingüistas les gusta decir que un acento no es un déficit sino una biografía que se puede oír. La afirmación es más que amabilidad. Cada vocal carga un mapa: dónde creció el hablante, a quién amó, en qué salas aprendió a suavizarse. El acento del noticiero nocturno llamado General American lo eligieron los estudios, no la gramática." },
        { it: "The choice facing an advanced learner is therefore not between 'correct' and 'broken.' It is between {3}: the careful one for the client pitch, the reduced one for the standup, and the honesty to know which is {4}. Nobody has to erase a biography to be understood. They only have to make sure it never {5} them clarity.", es: "La elección que enfrenta un estudiante avanzado, por lo tanto, no es entre «correcto» y «roto». Es entre registros: el cuidadoso para la presentación al cliente, el reducido para el standup, y la honestidad de saber cuál es cuál. Nadie tiene que borrar una biografía para que lo entiendan. Solo tiene que asegurarse de que nunca le cueste claridad." },
      ],
      gaps: [
        { options: ["dialect", "dividend", "deficit"], answer: 2, why: "La frase de la unidad: un acento no es un déficit, es una biografía audible." },
        { options: ["subscribe", "retire", "soften"], answer: 2, why: "Las salas sociales enseñan a suavizar la forma de hablar." },
        { options: ["registers", "passwords", "payrolls"], answer: 0, why: "La elección real: registro cuidadoso para el cliente, reducido para el equipo." },
        { options: ["which", "whose", "whether"], answer: 0, why: "Saber cuál es cuál: la honestidad de distinguir los dos registros." },
        { options: ["costs", "sings", "edits"], answer: 0, why: "El cierre de la unidad: que el acento nunca te cueste claridad." },
      ],
    },
    {
      id: "cz-en-c1-10-3", title: "Y'all is winning", titleEs: "Y'all está ganando", minutes: 3,
      paragraphs: [
        { it: "The most successful recent innovation in English grammar was not designed by a committee. 'Y'all' — you all, contracted — solves a problem the language has had since the seventeenth century: English lost its second-person {1} and never replaced it officially. 'Are you coming?' can be addressed to one person or to a whole {2}.", es: "La innovación gramatical más exitosa del inglés reciente no la diseñó ningún comité. «Y'all» — you all contraído — resuelve un problema que el idioma arrastra desde el siglo diecisiete: el inglés perdió su plural de segunda persona y nunca lo reemplazó oficialmente. «¿Vienes?» puede dirigirse a una persona o a todo un grupo." },
        { it: "Y'all fills the gap with one syllable, and 'all y'all' adds emphasis when absolutely everyone is {3}. Once mocked as backward, the form now spreads across the country, into advertising, group chats, and even careful {4}. Linguists watch its march with the enthusiasm of birders tracking a species that decided to {5}.", es: "Y'all llena el hueco con una sílaba, y «all y'all» añade énfasis cuando se quiere decir absolutamente todos. Antes ridiculizado como atrasado, el formato se extiende hoy por todo el país, hacia la publicidad, los chats de grupo e incluso la prosa cuidada. Los lingüistas observan su avance con el entusiasmo de los observadores de aves siguiendo a una especie que decidió prosperar." },
      ],
      gaps: [
        { options: ["vowel", "consonant", "plural"], answer: 2, why: "El hueco histórico: el plural de segunda persona que el inglés perdió." },
        { options: ["clerk", "crowd", "cousin"], answer: 1, why: "\"One person or a whole\": una persona o todo un grupo — una multitud." },
        { options: ["charged", "seated", "meant"], answer: 2, why: "\"All y'all\" enfatiza cuando absolutamente todos están incluidos: todos los aludidos." },
        { options: ["lawsuits", "sermons", "prose"], answer: 2, why: "El avance de y'all llega a la publicidad, los chats y la prosa cuidada." },
        { options: ["thrive", "migrate", "hibernate"], answer: 0, why: "La metáfora del final: una especie que decidió prosperar." },
      ],
    },
  ],

  "en-cu-c1-11": [
    {
      id: "cz-en-c1-11-1", title: "Six hundred words, one argument", titleEs: "Seiscientas palabras, un argumento", minutes: 3,
      paragraphs: [
        { it: "The editor's instructions fit on a napkin: six hundred words, one {1}, and a reader who finishes with an opinion they did not start with. 'Open with a person,' he said, 'not a statistic. Give me the nurse at one in the morning, not the {2} projection.'", es: "Las instrucciones del editor cabían en una servilleta: seiscientas palabras, un argumento y un lector que termina con una opinión que no tenía al empezar. «Abre con una persona», dijo, «no con una estadística. Dame a la enfermera de la una de la mañana, no la proyección de demanda»." },
        { it: "Then the warning that separates opinion writing from shouting: deal with the strongest {3} yourself. Concede what is true in it — budgets are genuinely tight — and then destroy the {4} that nothing can be done. 'If you caricature the other side,' the editor said, 'you win the argument and lose the {5}.'", es: "Luego, la advertencia que separa la opinión del grito: ocúpate tú mismo de la objeción más fuerte. Concede lo que haya de verdad en ella — los presupuestos están de verdad ajustados — y destruye después la inferencia de que no se puede hacer nada. «Si caricaturizas al otro bando», dijo el editor, «ganas la discusión y pierdes al lector»." },
      ],
      gaps: [
        { options: ["argument", "apology", "anthology"], answer: 0, why: "Las reglas del editor: seiscientas palabras y un solo argumento." },
        { options: ["projection", "punctuation", "promotion"], answer: 0, why: "Lo que NO hay que dar: la proyección de demanda (ridership projection)." },
        { options: ["edition", "election", "objection"], answer: 2, why: "Ocúpate de la objeción más fuerte: el steel-man del género." },
        { options: ["invoice", "inference", "inventory"], answer: 1, why: "Concede la premisa, destruye la inferencia: la técnica de la unidad." },
        { options: ["printer", "lawyer", "reader"], answer: 2, why: "Ganas la discusión y pierdes al lector." },
      ],
    },
    {
      id: "cz-en-c1-11-2", title: "The nurse who walks home", titleEs: "La enfermera que camina a casa", minutes: 3,
      paragraphs: [
        { it: "At 1:15 on a Tuesday morning, a nurse named Rosa Aviles starts the ninety-minute {1} home from the hospital. Her shift ended at midnight; the last bus left at 11:40; the first comes at five. The city she keeps {2} has, in those hours, no way to get her home.", es: "A la 1:15 de un martes de madrugada, una enfermera llamada Rosa Áviles emprende la caminata de noventa minutos a casa desde el hospital. Su turno terminó a la medianoche; el último autobús salió a las 11:40; el primero llega a las cinco. La ciudad que ella mantiene viva no tiene, en esas horas, forma de llevarla a casa." },
        { it: "The county says it cannot afford night buses — which is true as far as it goes, and it does not go {3}. Last year the county spent $4.1 million mowing highway {4}; a two-route night pilot would cost $2.9 million. The op-ed closed with the ask that made it publishable: fund the pilot for a year, publish the {5}, and let the route argue for itself.", es: "El condado dice que no puede costear buses nocturnos — lo cual es cierto hasta donde llega, y no llega lejos. El año pasado el condado gastó 4,1 millones de dólares segando las medianas de la autopista; un piloto nocturno de dos rutas costaría 2,9. El artículo de opinión cerró con la petición que lo hizo publicable: financien el piloto por un año, publiquen las cifras y dejen que la ruta argumente por sí misma." },
      ],
      gaps: [
        { options: ["flight", "walk", "drive"], answer: 1, why: "La caminata de noventa minutos a casa: el hook del op-ed." },
        { options: ["alive", "quiet", "spotless"], answer: 0, why: "\"The city she keeps alive\": la ciudad que mantiene viva." },
        { options: ["far", "fast", "broke"], answer: 0, why: "\"True as far as it goes, and it does not go far\": cierto hasta donde llega, y no llega lejos." },
        { options: ["medians", "medallions", "melodies"], answer: 0, why: "El dato del texto: segar las medianas de la autopista cuesta 4,1 millones." },
        { options: ["novels", "numbers", "nominees"], answer: 1, why: "La petición falsable: publicar las cifras de pasajeros." },
      ],
    },
    {
      id: "cz-en-c1-11-3", title: "Concede the premise, destroy the inference", titleEs: "Concede la premisa, destruye la inferencia", minutes: 3,
      paragraphs: [
        { it: "The strongest refutations in American opinion writing begin with {1}. The writer states the opposing case in its best form — steel-man, never straw-man — and grants every fact that deserves it. Only then comes the turn: yes, the premise is true, but the {2} does not follow from it.", es: "Las refutaciones más sólidas del periodismo de opinión americano empiezan con acuerdo. El escritor expone el caso contrario en su mejor forma — steel-man, nunca straw-man — y concede cada hecho que lo merezca. Solo entonces llega el giro: sí, la premisa es verdadera, pero la conclusión no se deriva de ella." },
        { it: "The technique has a moral core, not just a tactical one. Readers can forgive a conclusion they {3}; they rarely forgive being flattered into one. The straw-man refutation wins the exchange and loses the {4}, and trust, on an op-ed page, is the only {5} that circulates twice.", es: "La técnica tiene un núcleo moral, no solo táctico. Los lectores pueden perdonar una conclusión que les disgusta; rara vez perdonan que los adulen hacia una. La refutación de muñeco de paja gana el intercambio y pierde la confianza, y la confianza, en una página de opinión, es la única moneda que circula dos veces." },
      ],
      gaps: [
        { options: ["applause", "arithmetic", "agreement"], answer: 2, why: "Las mejores refutaciones empiezan concediendo: con acuerdo." },
        { options: ["invoice", "conclusion", "census"], answer: 1, why: "El giro: la premisa es cierta, pero la conclusión no se sigue de ella." },
        { options: ["demand", "decode", "dislike"], answer: 2, why: "Los lectores perdonan una conclusión que no les gusta." },
        { options: ["trust", "budget", "license"], answer: 0, why: "El straw-man gana el intercambio y pierde la confianza." },
        { options: ["casualty", "currency", "courtesy"], answer: 1, why: "La confianza como moneda que circula dos veces." },
      ],
    },
  ],

  "en-cu-c1-12": [
    {
      id: "cz-en-c1-12-1", title: "The acceptance email", titleEs: "El correo de aceptación", minutes: 2,
      paragraphs: [
        { it: "The email arrived in March: congratulations, the committee had selected the {1}, five minutes on the TEDx stage in the fall. Attached came a speaker guide with a rule that read like a koan: if your talk needs a table of {2}, you don't have a talk — you have a syllabus.", es: "El correo llegó en marzo: felicitaciones, el comité había seleccionado la charla, cinco minutos en el escenario del TEDx en otoño. Venía adjunta una guía del orador con una regla que sonaba a koan: si tu charla necesita un índice, no tienes una charla — tienes un temario." },
        { it: "The guide was short and merciless. One idea worth {3}. No selling from the stage. Rehearse with a coach until the words sound like {4}, not reciting. And close on the give: one thing the audience can do on Monday {5}. Everything else, the guide implied, is decoration.", es: "La guía era corta y despiadada. Una idea que valga la pena difundir. Nada de vender desde el escenario. Ensayar con un coach hasta que las palabras suenen a conversación, no a recitación. Y cerrar con el regalo: una cosa que el público pueda hacer el lunes por la mañana. Todo lo demás, insinuaba la guía, es decoración." },
      ],
      gaps: [
        { options: ["talk", "album", "casserole"], answer: 0, why: "Lo que el comité seleccionó para el escenario: la charla." },
        { options: ["condiments", "contents", "compliments"], answer: 1, why: "El koan de la guía: si necesita un índice (table of contents)." },
        { options: ["spreading", "spending", "splattering"], answer: 0, why: "La fórmula TED: \"an idea worth spreading\"." },
        { options: ["shouting", "chanting", "talking"], answer: 2, why: "La meta del ensayo: \"sounds like talking, not reciting\"." },
        { options: ["evening", "payday", "morning"], answer: 2, why: "El cierre con el regalo: \"on Monday morning\", el lunes por la mañana." },
      ],
    },
    {
      id: "cz-en-c1-12-2", title: "One idea, three beats", titleEs: "Una idea, tres tiempos", minutes: 3,
      paragraphs: [
        { it: "The coach asked for the idea in one sentence, and the sentence came out buried, apologetic, half-swallowed. 'Say it again, slower.' The second attempt was better: we treat {1} as a resource to spend, when it is actually a relationship to {2}. 'That,' said the coach, 'is your through-line. Now never let go of it.'", es: "El coach pidió la idea en una frase, y la frase salió enterrada, apologética, a medio tragar. «Dila otra vez, más despacio». El segundo intento fue mejor: tratamos la atención como un recurso que gastar, cuando en realidad es una relación que cultivar. «Eso», dijo el coach, «es tu hilo conductor. Ahora no lo sueltes nunca»." },
        { it: "The structure assembled itself around the sentence. Open with the grandmother who knits through any {3}; contrast her with the writer who cannot finish a paragraph; plant the question early, because audiences follow wherever they know you are {4}. Then the middle in three beats — not two, not seven — and a close that hands the room a single Monday-morning {5}.", es: "La estructura se ensambló sola alrededor de la frase. Abrir con la abuela que teje durante cualquier conversación; contrastarla con el escritor que no puede terminar un párrafo; sembrar la pregunta temprano, porque el público sigue a donde sea si sabe a dónde vas. Luego el desarrollo en tres tiempos — ni dos, ni siete — y un cierre que le entrega a la sala una sola acción para el lunes por la mañana." },
      ],
      gaps: [
        { options: ["inventory", "attention", "upholstery"], answer: 1, why: "El through-line del talk: la atención como recurso frente a relación." },
        { options: ["rent", "tend", "paint"], answer: 1, why: "La relación se cultiva: \"a relationship to tend\"." },
        { options: ["hurricane", "conversation", "election"], answer: 1, why: "La abuela que teje mientras sostiene cualquier conversación." },
        { options: ["going", "hiding", "voting"], answer: 0, why: "\"Know where you're going\": si saben a dónde vas, te siguen." },
        { options: ["upgrade", "apology", "action"], answer: 2, why: "El cierre entrega una acción para el lunes: el give de la charla." },
      ],
    },
    {
      id: "cz-en-c1-12-3", title: "Rehearse until it breathes", titleEs: "Ensayar hasta que respire", minutes: 3,
      paragraphs: [
        { it: "The final rehearsal happened in an empty theater with the red countdown {1} set at five minutes. The first run died in the second beat: the words were right, but the {2} were missing, and a talk without pauses is just a lecture with better lighting.", es: "El ensayo final ocurrió en un teatro vacío con el reloj de cuenta regresiva rojo fijado en cinco minutos. El primer pase murió en el segundo tiempo: las palabras eran correctas, pero faltaban las pausas, y una charla sin pausas es solo una clase con mejor iluminación." },
        { it: "The coach's correction was physical, not verbal: breathe before the payoff, not after it. Let the long sentence {3}, then stop, and drop the short one like a stone. By the fourth run, the monosyllables had learned to stretch — one idea, three {4} — and by the last run, the speaker forgot the script entirely and remembered only the {5}. That, the coach said, is when it is ready.", es: "La corrección del coach era física, no verbal: respira antes del beneficio, no después. Deja que la frase larga ascienda, luego detente, y deja caer la corta como una piedra. En el cuarto pase, los monosílabos habían aprendido a estirarse — una idea, tres tiempos — y en el último, el orador olvidó el guion por completo y recordó solo el viaje. Eso, dijo el coach, es cuando está listo." },
      ],
      gaps: [
        { options: ["tower", "clock", "payment"], answer: 1, why: "El reloj de cuenta regresiva de cinco minutos: countdown clock." },
        { options: ["pauses", "jokes", "slides"], answer: 0, why: "Faltaban las pausas: la charla sin pausas es una clase con luz." },
        { options: ["climb", "collapse", "argue"], answer: 0, why: "La frase larga asciende y la corta cae: deja que suba (climb)." },
        { options: ["bets", "beats", "boots"], answer: 1, why: "La estructura de la unidad: one idea, three beats." },
        { options: ["payroll", "encore", "journey"], answer: 2, why: "Olvidó el guion y recordó el viaje: el objetivo del ensayo." },
      ],
    },
  ],
};
