import type { CbClozeText } from "../../cambridge";

/* ═══ EN C2 · Cloze readings — 3 por unidad (inferencia léxica) ══════
   Metodología v9.38: el texto en inglés americano C2 (ensayo, retórica,
   guion, crítica) lleva marcadores {1}…{5} que el reproductor convierte
   en huecos; el estudiante deduce la palabra por el contexto. Campos:
   `.it` = inglés, `.es` = español. Gaps resueltos por INFERENCIA
   LÉXICA CONTEXTUAL con distractores del mismo campo semántico. */

export const EN_CLOZE_C2: Record<string, CbClozeText[]> = {
  "en-cu-c2-01": [
    {
      id: "cz-en-c2-01-1", title: "The workshop folder", titleEs: "La carpeta del taller", minutes: 3,
      paragraphs: [
        { it: "The Monday workshop at Iowa City runs on ritual: the author brings a folder of {1} pages, one per seat, and then keeps quiet while the class reads the opening line {2}. In the American creative-writing seminar the page speaks first; the writer speaks last, and only when the professor opens the floor.", es: "El taller de los lunes en Iowa City funciona por ritual: el autor trae una carpeta de páginas fotocopiadas, una por asiento, y luego calla mientras la clase lee la primera frase en voz alta. En el seminario americano de escritura creativa la página habla primero; el escritor habla último, y solo cuando la profesora abre la palabra." },
        { it: "By the second hour the margins are full of pencil. Marcus circles a paragraph that 'circles the airport twice before it lands,' and Dana underlines the final appositive, the comma that 'lands like a door closing.' The professor's one commandment is loyalty: kill the sentence you love if it does not serve the {3}, and order the ending so that the last {4} is the one that {5} after the door closes.", es: "A la segunda hora los márgenes están llenos de lápiz. Marcus rodea un párrafo que «rodea el aeropuerto dos veces antes de aterrizar», y Dana subraya la aposición final, la coma que «cae como una puerta que se cierra». El único mandamiento de la profesora es la lealtad: mata la frase que amas si no sirve a la pieza, y ordena el final para que la última palabra sea la que resuena cuando la puerta se cierra." },
      ],
      gaps: [
        { options: ["laminated", "photocopied", "handwritten"], answer: 1, why: "«One per seat» en una carpeta de taller: fotocopias para toda la clase." },
        { options: ["aloud", "in silence", "in Latin"], answer: 0, why: "«The page speaks first»: el ritual es leerla en voz alta, no en silencio." },
        { options: ["the professor", "the prize", "the piece"], answer: 2, why: "Kill your darlings = lealtad a la pieza, no al orgullo: el texto manda." },
        { options: ["the author", "the word", "the comma"], answer: 1, why: "End-weight: la frase se ordena para que la última palabra resuene." },
        { options: ["disappears", "resonates", "apologizes"], answer: 1, why: "El remate debe seguir sonando tras el cierre: la palabra que resuena." },
      ],
    },
    {
      id: "cz-en-c2-01-2", title: "The watch in the drawer", titleEs: "El reloj en el cajón", minutes: 3,
      paragraphs: [
        { it: "Alejandra's essay opens with domestic archaeology: 'We keep the dead man's watch in the kitchen {1}, and it still keeps time.' Nobody in the workshop asks whose watch it was; the sentence already told them, quietly, without a single {2} spent on grief. An essay, the professor likes to say, finds its argument the way a river finds the sea.", es: "El ensayo de Alejandra abre con arqueología doméstica: «Guardamos el reloj del difunto en el cajón de la cocina, y todavía da la hora». Nadie en el taller pregunta de quién era el reloj; la frase ya se lo había contado, en silencio, sin gastar un solo adjetivo en el duelo. Un ensayo, dice la profesora, encuentra su argumento como un río encuentra el mar." },
        { it: "In the revision she sharpens the middle and lets the ending turn on the last {3}: grief you can wind up, like the watch. The professor calls it editing like an essayist, not a decorator. The {4} sentences speed the paragraph up, and the one periodic sentence at the close applies the {5}, so the reader lands exactly where the essay lives.", es: "En la revisión afila la parte media y deja que el final gire sobre la última cláusula: un duelo al que se puede dar cuerda, como el reloj. La profesora dice que eso es editar como ensayista, no como decorador. Las frases acumulativas aceleran el párrafo, y la única periódica del cierre aplica el freno, así el lector aterriza justo donde vive el ensayo." },
      ],
      gaps: [
        { options: ["attic", "drawer", "pantry"], answer: 1, why: "«The kitchen drawer» de la primera frase: el objeto vive en un cajón." },
        { options: ["adjective", "photograph", "footnote"], answer: 0, why: "El arranque muestra sin etiquetar: ni tesis ni adjetivo emotivo." },
        { options: ["clause", "character", "chapter"], answer: 0, why: "«Let the ending turn on the last clause»: el final gira sobre esa cláusula." },
        { options: ["periodic", "cumulative", "interrogative"], answer: 1, why: "Las que aceleran son las acumulativas; la periódica es la del freno final." },
        { options: ["engine", "horn", "brake"], answer: 2, why: "Aceleración y freno: la periódica del cierre es el freno del párrafo." },
      ],
    },
    {
      id: "cz-en-c2-01-3", title: "Read it aloud", titleEs: "Léelo en voz alta", minutes: 2,
      paragraphs: [
        { it: "Dana's rule for the final draft comes from the New Yorker tradition: before you hand the essay in, read it {1}, and listen for the places where your voice trips. Where you typed an em dash, the native speaker makes a suspended {2}; where you typed a comma, the tone falls softly and moves on. Prose that cannot be said with grace is not finished — it is only typed.", es: "La regla de Dana para la versión final viene de la tradición de The New Yorker: antes de entregar el ensayo, léelo en voz alta y escucha dónde tropieza tu voz. Donde pusiste una raya, el hablante nativo hace una pausa en suspenso; donde pusiste una coma, el tono baja suave y sigue. La prosa que no puede decirse con gracia no está terminada: solo está tipeada." },
        { it: "Alejandra reads her last page standing up, one hand flat on the desk like a metronome. Her final sentence is cumulative — the drawer first, the watch still {3} — and the room hears the coda land where she planned it: on the last {4}. 'That,' says Professor Whitfield, 'is the whole {5} in one sentence: end on the image, not the argument.'", es: "Alejandra lee su última página de pie, con una mano plana sobre el escritorio como un metrónomo. Su frase final es acumulativa — primero el cajón, el reloj todavía girando — y la sala oye la coda aterrizar donde lo planeó: en la última palabra. «Eso», dice la profesora Whitfield, «es todo el oficio en una frase: termina con la imagen, no con el argumento»." },
      ],
      gaps: [
        { options: ["in silence", "aloud", "from memory"], answer: 1, why: "«Escucha dónde tropieza tu voz»: la regla manda leer en voz alta." },
        { options: ["question", "vowel", "pause"], answer: 2, why: "La raya se pronuncia como pausa larga con el tono cortado en el aire." },
        { options: ["ticking", "broken", "sold"], answer: 0, why: "«It still keeps time»: el reloj sigue girando, andando." },
        { options: ["word", "line", "page"], answer: 0, why: "La coda cae en la última palabra (end-weight)." },
        { options: ["semester", "grade", "craft"], answer: 2, why: "«The whole craft in one sentence»: el oficio entero resumido." },
      ],
    },
  ],

  "en-cu-c2-02": [
    {
      id: "cz-en-c2-02-1", title: "Seven a.m., no coffee", titleEs: "Siete de la mañana, sin café", minutes: 3,
      paragraphs: [
        { it: "Coach Marlowe starts every session the same way: 'Stop pronouncing English and start {1} it. Say I want to go — but say it like you mean it at seven a.m. with no coffee.' The student tries, and 'want to' melts into /ˈwɑːnə/ before the sentence is over. In real speech, the coach explains, frequent pairs do not {2}: they fuse.", es: "El coach Marlowe empieza todas las sesiones igual: «Deja de pronunciar el inglés y empieza a cantarlo. Di I want to, pero dilo como a las siete de la mañana sin café». El estudiante lo intenta, y «want to» se funde en /ˈwɑːnə/ antes de acabar la frase. En el habla real, explica el coach, las parejas frecuentes no sobreviven: se funden." },
        { it: "The lesson continues with church and set: formal on paper, {3} on set. Nobody auditioning says 'I am going to'; they say 'Ima,' and casting buys it. By the third week the student stops defending every {4} like a hostage and lets the weak forms drift out with the {5} — only the stressed beats stay on duty.", es: "La lección sigue con la iglesia y el set: formal en el papel, casual en el set. Nadie en un casting dice «I am going to»; dicen «Ima», y el casting se lo cree. A la tercera semana el estudiante deja de defender cada vocal como a un rehén y deja que las formas débiles se vayan con la marea; solo los tiempos fuertes quedan de guardia." },
      ],
      gaps: [
        { options: ["spelling", "singing", "editing"], answer: 1, why: "El lema del coach: el inglés no se pronuncia, se canta." },
        { options: ["survive", "matter", "rhyme"], answer: 0, why: "«Want to never survives a real sentence»: la elisión las funde." },
        { options: ["casual", "solemn", "silent"], answer: 0, why: "El par fijo del oficio: formal on paper, casual on set." },
        { options: ["consonant", "syllable", "vowel"], answer: 2, why: "El hispanohablante defiende cada vocal como a un rehén: el oído español protege vocales." },
        { options: ["tide", "truck", "choir"], answer: 0, why: "Las formas débiles son la marea: se retiran (drift out with the tide)." },
      ],
    },
    {
      id: "cz-en-c2-02-2", title: "The stress waltz", titleEs: "El vals del acento", minutes: 3,
      paragraphs: [
        { it: "On the whiteboard, Marlowe writes the family in capitals: PHOtograph, phoTOGrapher, photoGRAPHic. The accent {1} one syllable to the right each time, and the vowel that loses the beat faints into a schwa — barely there. Get the shift wrong, he warns, and the word {2} like a typo: grammar the ear catches before the eye does.", es: "En la pizarra, Marlowe escribe la familia en mayúsculas: PHOtograph, phoTOGrapher, photoGRAPHic. El acento baila una sílaba a la derecha cada vez, y la vocal que pierde el golpe se desmaya en una schwa, apenas presente. Si fallas el desplazamiento, advierte, la palabra suena a errata: gramática que el oído caza antes que el ojo." },
        { it: "Then he puts on a slow blues track and makes the student {3} the pulse on the desk with one hand. English is stress-timed: the strong beats arrive on {4}, like a bass line, and everything in between goes soft. A Spanish ear hunts for syllables and finds none, the coach says; it should hunt for the {5} drum.", es: "Luego pone un blues lento y hace que el estudiante marque el pulso en el escritorio con una mano. El inglés es acentual: los tiempos fuertes llegan puntuales, como una línea de bajo, y todo lo que va entre ellos se ablanda. El oído español busca sílabas y no las encuentra, dice el coach; debería buscar el bombo." },
      ],
      gaps: [
        { options: ["dances", "hides", "rests"], answer: 0, why: "«The stress waltz»: el acento baila una sílaba a la derecha en cada derivado." },
        { options: ["sounds", "reads", "sells"], answer: 0, why: "Chunk del curso: mal acentuada, la palabra «sounds like a typo»." },
        { options: ["write", "skip", "beat"], answer: 2, why: "El truco del coach: marcar el pulso con la mano (¡como el bombo!)." },
        { options: ["vacation", "schedule", "credit"], answer: 1, why: "«The strong beats stay on schedule»: los tiempos fuertes llegan puntuales." },
        { options: ["snare", "bell", "kick"], answer: 2, why: "«Listen for the kick drum»: hay que oír el bombo, no las vocales." },
      ],
    },
    {
      id: "cz-en-c2-02-3", title: "Two takes", titleEs: "Dos tomas", minutes: 3,
      paragraphs: [
        { it: "For the demo reel, Eli records the same monologue twice. Take one is 'dressed for church': every vowel in its Sunday clothes, every syllable fed and watered. Take two is the set version — the voice at seven a.m., the pulse keeping the {1}, the schwa swallowing what the page promised. The casting director, Eli bets, will pick the second take without knowing {2}.", es: "Para el demo reel, Eli graba el mismo monólogo dos veces. La toma uno está «vestida de misa»: cada vocal con su traje de domingo, cada sílaba alimentada y regada. La toma dos es la versión de set: la voz de las siete de la mañana, el pulso marcando el ritmo, la schwa tragándose lo que la página prometía. El director de casting, apuesta Eli, elegirá la segunda toma sin saber por qué." },
        { it: "The difference is not talent; it is {3}. In take one the actor is over-articulated, every note fortissimo; in take two he sings the line, letting the {4} forms faint between the strong ones. 'Your accent is not wrong,' Marlowe tells him at playback. 'It is your melody learning a new {5} signature.'", es: "La diferencia no es talento: es calibración. En la toma uno el actor está sobre-articulado, cada nota a fortissimo; en la toma dos canta la línea, dejando que las formas débiles se desmayen entre las fuertes. «Tu acento no está mal», le dice Marlowe en la sala de reproducción. «Es tu melodía aprendiendo un compás nuevo»." },
      ],
      gaps: [
        { options: ["books", "peace", "beat"], answer: 2, why: "El pulso marca el ritmo: la línea de bajo del inglés acentual." },
        { options: ["when", "why", "who"], answer: 1, why: "El casting elige «sin saber por qué»: la toma suena orgánica sin poder explicarlo." },
        { options: ["luck", "volume", "calibration"], answer: 2, why: "No es talento ni volumen: es calibrar cuándo usar forma plena y cuándo débil." },
        { options: ["weak", "strong", "written"], answer: 0, why: "Las que se desmayan entre los tiempos fuertes son las formas débiles." },
        { options: ["legal", "time", "key"], answer: 1, why: "«A new time signature»: la metáfora musical del compás nuevo." },
      ],
    },
  ],

  "en-cu-c2-03": [
    {
      id: "cz-en-c2-03-1", title: "Table by the wall", titleEs: "Mesa junto a la pared", minutes: 3,
      paragraphs: [
        { it: "After the late show at the Comedy Cellar, Marcy holds court at a corner table with a paper napkin for a whiteboard. The headliner's last bit {1}, she says — the room laughed half a second {2}, which is exactly where comedy lives: in the time the crowd spends rewriting the sentence in their heads. A full second means you bombed; zero means the joke was {3}.", es: "Tras la función tardía del Comedy Cellar, Marcy dirige la mesa desde una esquina con una servilleta de papel por pizarra. El último chiste del estelar mató, dice: la sala se rio medio segundo tarde, que es exactamente donde vive la comedia, en el tiempo que el público pasa reescribiendo la frase en la cabeza. Un segundo entero significa que fracasaste; cero, que el chiste era obvio." },
        { it: "On the napkin she draws the machine: a setup that builds a normal {4}, and a punchline that quietly burns it down. The therapist bit works because two incompatible frames collide — 'embrace my mistakes' as self-help, then as confession. The pause before 'her' is the {5}, she says: timing isn't speed; it's silence you can hear.", es: "En la servilleta dibuja la máquina: un setup que construye un mundo normal y un punchline que lo quema por lo bajo. El chiste del terapeuta funciona porque chocan dos marcos incompatibles: «abraza tus errores» como autoayuda y luego como confesión. La pausa antes de «her» es la mecha, dice: el timing no es velocidad; es un silencio que se oye." },
      ],
      gaps: [
        { options: ["bombed", "killed", "floated"], answer: 1, why: "Jerga del oficio: el chiste que arrasa «kills»." },
        { options: ["late", "early", "loud"], answer: 0, why: "«The crowd laughed half a second late»: la risa llega tarde, tras el reencuadre." },
        { options: ["obvious", "subtle", "untranslatable"], answer: 0, why: "Risa inmediata = chiste obvio: el medio segundo es la medida exacta." },
        { options: ["world", "budget", "sentence"], answer: 0, why: "El setup construye un mundo normal que el remate incendia." },
        { options: ["joke", "fuse", "trigger"], answer: 1, why: "«The pause before her is the fuse»: la pausa es la mecha." },
      ],
    },
    {
      id: "cz-en-c2-03-2", title: "The open mic list", titleEs: "La lista del open mic", minutes: 3,
      paragraphs: [
        { it: "The signup sheet for the open mic goes up at seven, and by seven-oh-five it is full. First-timers get five {1} and a warning light; the crowd is impatient, the microphone is indifferent, and the material is untested. The old-timers call it the gym: you {2} in front of everybody, and that is the point.", es: "La hoja de inscripción del open mic se cuelga a las siete, y a las siete y cinco ya está llena. Los novatos reciben cinco minutos y una luz de aviso; el público es impaciente, el micrófono indiferente y el material no probado. Los veteranos lo llaman el gimnasio: fracasas delante de todos, y ese es el punto." },
        { it: "Jules gives the same three rules to every newcomer: never {3} at your own punchline, never explain the joke — 'a joke explained is a joke defused' — and never translate one from Spanish, because the incongruity never {4} customs. Build it here, from the language up. If the room groans, count it as a {5}: a groan is applause wearing a disguise.", es: "Jules da los mismos tres consejos a cada novato: nunca sonrías en tu propio punchline, nunca expliques el chiste — «un chiste explicado es un chiste desactivado» — y nunca traduzcas uno del español, porque la incongruencia jamás pasa la aduana. Constrúyelo aquí, desde el idioma hacia arriba. Si la sala gime, cuéntalo como una victoria: un gemido es un aplauso con disfraz." },
      ],
      gaps: [
        { options: ["dollars", "lessons", "minutes"], answer: 2, why: "El formato del open mic: cinco minutos de escenario para cada novato." },
        { options: ["win", "fail", "hide"], answer: 1, why: "El open mic es el gimnasio: se fracasa en público para fortalecerse." },
        { options: ["smile", "shout", "point"], answer: 0, why: "Sonreír el remate propio es «reírte en tu propio funeral»." },
        { options: ["pays", "clears", "survives"], answer: 1, why: "La metáfora de la aduana: la incongruencia no pasa (clears) la aduana entre idiomas." },
        { options: ["loss", "win", "insult"], answer: 1, why: "«A groan is applause in disguise»: el gemido cuenta como victoria." },
      ],
    },
    {
      id: "cz-en-c2-03-3", title: "Deadpan", titleEs: "Deadpan", minutes: 2,
      paragraphs: [
        { it: "Marcy's delivery is a science: the flatter the face, the louder the {1}. She tells the room's favorite story about her first open mic, when she grinned at her own punchline and watched the laugh {2} by half. That night she learned the fire-blanket rule: the calmer the teller, the bigger the blaze in the {3}.", es: "La entrega de Marcy es una ciencia: cuanto más plana la cara, más alta la risa. Cuenta la historia favorita de la casa sobre su primer open mic, cuando sonrió en su propio punchline y vio la risa encogerse a la mitad. Esa noche aprendió la regla de la manta ignífuga: cuanto más tranquilo el que cuenta, mayor el incendio en el oyente." },
        { it: "Deadpan is not boredom; it is {4}. The comedian refuses to be present at the explosion, so the detonation belongs entirely to the audience. On stage, Marcy lands the punchline on the last word, lets the tone {5}, and counts one-and-two in the silence before moving on. The half-second delay, she says, is the sound of two ledgers reconciling.", es: "El deadpan no es aburrimiento: es contención. El cómico se niega a estar presente en la explosión, así que la detonación pertenece por entero al público. En el escenario, Marcy clava el punchline en la última palabra, deja que el tono caiga y cuenta uno-y-dos en el silencio antes de seguir. El medio segundo de retraso, dice, es el sonido de dos libros de cuentas cuadrando." },
      ],
      gaps: [
        { options: ["microphone", "room", "laugh"], answer: 2, why: "«The flatter the delivery, the louder the laugh»: cara plana, risa alta." },
        { options: ["shrink", "double", "echo"], answer: 0, why: "Sonreír el remate encoge la risa a la mitad." },
        { options: ["kitchen", "listener", "spotlight"], answer: 1, why: "La manta ignífuga: el incendio ocurre en el oyente, no en el cómico." },
        { options: ["restraint", "laziness", "rudeness"], answer: 0, why: "Negarse a estar presente en la explosión es contención, no aburrimiento." },
        { options: ["rise", "fall", "linger"], answer: 1, why: "El remate desciende; el tono ascendente (uptalk) desactiva la risa." },
      ],
    },
  ],

  "en-cu-c2-04": [
    {
      id: "cz-en-c2-04-1", title: "The wistful witness", titleEs: "El testigo nostálgico", minutes: 3,
      paragraphs: [
        { it: "In a Portland living room with rain on the windows, Theo opens the Gatsby discussion with a verdict: Nick Carraway swears he {1} all judgments, then judges every person in the room. The novel lets him contradict himself politely — and that is the whole {2} of the unreliable narrator: the reader hears the gap between what the narrator claims and what the prose betrays.", es: "En una sala de Portland con lluvia en las ventanas, Theo abre la discusión de Gatsby con un veredicto: Nick Carraway jura que se reserva todo juicio y luego juzga a cada persona de la sala. La novela lo deja contradecirse con cortesía, y esa es toda la maestría del narrador no fiable: el lector oye el hueco entre lo que el narrador declara y lo que la prosa delata." },
        { it: "Rachel adds the litmus test: if you cannot hear the narrator's {3} in your head, the author is not done. Nick's voice is wistful, verdict-adjacent, always half a step from sentencing. The club argues for an hour about whether that half-step is {4}; nobody wins, which is exactly what a good book club is for. The rain, for the record, carries the {5}.", es: "Rachel añade la prueba del algodón: si no oyes el acento del narrador en tu cabeza, el autor no ha terminado. La voz de Nick es nostálgica, vecina del veredicto, siempre a medio paso de sentenciar. El club discute una hora si ese medio paso es honestidad; nadie gana, que es exactamente para lo que sirve un buen club de lectura. La lluvia, para que conste, transporta el subtexto." },
      ],
      gaps: [
        { options: ["renounces", "reserves", "records"], answer: 1, why: "«Reserves all judgments»: la declaración que la prosa desmiente (to reserve judgment)." },
        { options: ["error", "plot", "art"], answer: 2, why: "La contradicción cortés no es fallo sino técnica: la maestría del narrador no fiable." },
        { options: ["accent", "sigh", "name"], answer: 0, why: "La prueba de Rachel: oír el acento del narrador en la cabeza." },
        { options: ["honesty", "negligence", "advertising"], answer: 0, why: "El debate del club: si ese medio paso es honestidad o autocomplacencia." },
        { options: ["forecast", "umbrella", "subtext"], answer: 2, why: "El diálogo indirecto: la superficie (el clima) transporta el conflicto real." },
      ],
    },
    {
      id: "cz-en-c2-04-2", title: "A table for one", titleEs: "Una mesa para uno", minutes: 3,
      paragraphs: [
        { it: "The club's handout for the meeting is one photocopied page: 'Molly sets the table for one. Richard is in Houston by now, presumably, being appreciated.' The members check the text: nobody said that aloud. It is her {1} in the narrator's mouth — third-person grammar, first-person {2}. The phrase for it has become the club's password: free indirect, the character's mind {3} without quotation marks.", es: "El material del club para la reunión es una página fotocopiada: «Molly pone la mesa para uno. Richard estará en Houston a estas horas, presumiblemente, siendo apreciado». Los miembros revisan el texto: nadie dijo eso en voz alta. Es el pensamiento de ella en boca del narrador: gramática de tercera, sabor de primera. La frase para esto se ha vuelto la contraseña del club: estilo indirecto libre, la mente del personaje hospedada sin comillas." },
        { it: "Rachel reads the last lines aloud with two voices: flat for the narrator, curved for Molly — 'So this was what the anniversary looked like.' The deictics give it away: this and was belong to her {4}, backshifted into the narrator's past. 'Whose sentence is this?' Theo asks the room. If you cannot {5}, the author has arrived.", es: "Rachel lee las últimas líneas con dos voces: plana para el narrador, curvada para Molly — «Así que esto era lo que parecía el aniversario». Los deícticos la delatan: this y was pertenecen a su presente, corridos al pasado del narrador. «¿De quién es esta frase?», pregunta Theo a la sala. Si no puedes decirlo, el autor ha llegado." },
      ],
      gaps: [
        { options: ["dinner", "voice", "thought"], answer: 2, why: "Nadie lo dijo en voz alta: es su pensamiento alojado en el narrador." },
        { options: ["person", "flavor", "draft"], answer: 1, why: "La fórmula del club: third-person grammar, first-person flavor." },
        { options: ["hosted", "translated", "silenced"], answer: 0, why: "El narrador «hospeda» la mente ajena sin firmarla ni entrecomillarla." },
        { options: ["present", "diary", "dialect"], answer: 0, why: "Los deícticos this/was apuntan al ahora del personaje (su presente)." },
        { options: ["translate", "tell", "forgive"], answer: 1, why: "«If you can't tell, you've arrived»: si no puedes distinguir de quién es, hay maestría." },
      ],
    },
    {
      id: "cz-en-c2-04-3", title: "The iceberg", titleEs: "El iceberg", minutes: 2,
      paragraphs: [
        { it: "For the last hour of the meeting, the club argues about Hemingway's {1}: he gives you the eighth of it and lets the water pressure do the rest. In the dialogue on the handout, nobody says the thing; they talk about the {2}, and the weather carries the war. Rachel calls it the oldest trick in the house: the scene is about whatever it isn't {3}.", es: "En la última hora de la reunión, el club discute el iceberg de Hemingway: te da la octava parte y deja que la presión del agua haga el resto. En el diálogo de la hoja, nadie dice la cosa; hablan del clima, y el clima transporta la guerra. Rachel lo llama el truco más viejo de la casa: la escena va de lo que no está diciendo." },
        { it: "Theo closes with the writing exercise the club invented for itself: six sentences in close third, one of them free indirect, and a narrator who {4} exactly once. The rule is borrowed from the workshop tradition — kill your darlings, but keep the {5}. Molly's table, someone says, survives every cut. The rain keeps carrying the war outside.", es: "Theo cierra con el ejercicio de escritura que el club inventó para sí: seis frases en tercera cercana, una de ellas en indirecto libre, y un narrador que mienta exactamente una vez. La regla viene prestada de la tradición del taller: mata tus frases queridas, pero conserva la mesa. La mesa de Molly, dice alguien, sobrevive todos los cortes. La lluvia sigue transportando la guerra allá afuera." },
      ],
      gaps: [
        { options: ["contract", "beard", "iceberg"], answer: 2, why: "La teoría de Hemingway: la octava parte visible y el agua haciendo el resto." },
        { options: ["money", "weather", "trains"], answer: 1, why: "«They say the weather, and the weather carries the war»: diálogo indirecto." },
        { options: ["saying", "buying", "teaching"], answer: 0, why: "«The scene is about whatever it isn't saying»: la escena va de lo que calla." },
        { options: ["smiles", "lies", "leaves"], answer: 1, why: "El objetivo del ejercicio: un narrador mentiroso cortés que se delate una vez." },
        { options: ["table", "thesis", "title"], answer: 0, why: "La imagen que sobrevive todos los cortes: la mesa de Molly." },
      ],
    },
  ],

  "en-cu-c2-05": [
    {
      id: "cz-en-c2-05-1", title: "The readout", titleEs: "El readout", minutes: 3,
      paragraphs: [
        { it: "At nine p.m. the delegation drafts the readout for the press: 'The two sides held {1} discussions on the outstanding issues. Progress was made, and it was agreed that further {2} would be required.' Nobody in the room believes a word of it, and nobody is supposed to: in this dialect, 'constructive' means nobody left the {3}.", es: "A las nueve de la noche la delegación redacta el readout para la prensa: «Ambas partes mantuvieron conversaciones constructivas sobre las cuestiones pendientes. Se avanzó, y se acordó que sería necesario seguir trabajando». Nadie en la sala cree una palabra, y nadie debe creerla: en este dialecto, «constructive» significa que nadie se levantó de la mesa." },
        { it: "The second paragraph is a masterpiece of vanishing agents: concern was {4} regarding the timeline, difficulties were identified, and the process is at an early {5} — the graveyard of processes, as the ambassador says. The verb of the last line is engage, not agree. The door stays open; the doorframe survives.", es: "El segundo párrafo es una obra maestra de agentes que se desvanecen: se expresó preocupación por el calendario, se identificaron dificultades y el proceso está en una fase temprana, el cementerio de los procesos, como dice la embajadora. El verbo de la última línea es engage, no agree. La puerta queda abierta; el marco sobrevive." },
      ],
      gaps: [
        { options: ["delightful", "constructive", "catastrophic"], answer: 1, why: "El eufemismo estándar del readout: «constructive» = desacuerdo sin ruptura." },
        { options: ["work", "apologies", "elections"], answer: 0, why: "La fórmula procesal: «further work would be required»." },
        { options: ["table", "building", "country"], answer: 0, why: "La ambigüedad portante: mantener a todos en la mesa." },
        { options: ["suppressed", "expressed", "denied"], answer: 1, why: "Pasiva sin agente canónica: «concern was expressed»." },
        { options: ["triumph", "ending", "stage"], answer: 2, why: "«At an early stage»: la tumba de los procesos, según la embajadora." },
      ],
    },
    {
      id: "cz-en-c2-05-2", title: "The ceiling adjective", titleEs: "El adjetivo techo", minutes: 3,
      paragraphs: [
        { it: "In the negotiating room, the junior delegate reads her draft aloud: 'The situation remains {1}.' The ambassador looks up. 'Concerning is the ceiling,' she says. 'Alarming starts a {2} of adjectives, and you will lose it in the wires.' The junior diplomat writes ceiling in the margin and understands, suddenly, that in this dialect the adjectives are the {3}.", es: "En la sala de negociación, la delegada junior lee su borrador en voz alta: «La situación sigue siendo preocupante». La embajadora levanta la vista. «Concerning es el techo», dice. «Alarming inicia una guerra de adjetivos, y la perderás en los cables». La delegada junior escribe «techo» en el margen y entiende, de golpe, que en este dialecto lo que se negocia son los adjetivos." },
        { it: "The lesson continues with the verb ladder: never say 'we cannot {4}'; say 'this raises difficulties for my delegation.' The no dressed as a {5}, the maybe dressed as a process. 'Read the adjectives, not the nouns,' the ambassador repeats, and the room, married, stays married.", es: "La lección sigue con la escalera de verbos: nunca digas «no podemos aceptar»; di «esto plantea dificultades para mi delegación». El no vestido de pausa y el quizás vestido de proceso. «Lean los adjetivos, no los sustantivos», repite la embajadora, y la sala, casada, sigue casada." },
      ],
      gaps: [
        { options: ["alarming", "wonderful", "concerning"], answer: 2, why: "«Concerning is the ceiling»: el techo permitido antes de la escalada." },
        { options: ["choir", "war", "alphabet"], answer: 1, why: "«A war of adjectives»: la escalada retórica que se pierde en los cables." },
        { options: ["decoration", "weather", "negotiation"], answer: 2, why: "El escenario: todo se juega en los adjetivos; son lo negociado." },
        { options: ["accept", "breathe", "leave"], answer: 0, why: "La fórmula prohibida es «we cannot accept»." },
        { options: ["pause", "parade", "party"], answer: 0, why: "«I'll have my no dressed as a pause»: el no como proceso diferido." },
      ],
    },
    {
      id: "cz-en-c2-05-3", title: "Load-bearing ambiguity", titleEs: "Ambigüedad portante", minutes: 3,
      paragraphs: [
        { it: "Novak defends the single most hated sentence in the draft: 'constructive ambiguity,' the phrase that each side reads to its own {1}. The phrase is load-bearing, he insists: it keeps both sides at the table and neither side at the door. Delete the ambiguity and you delete the {2} — it comes off only when the building can stand.", es: "Novak defiende la frase más odiada del borrador: la «ambigüedad constructiva», la frase que cada parte lee a su favor. La frase es portante, insiste: mantiene a ambas partes en la mesa y a ninguna en la puerta. Borra la ambigüedad y borras el andamiaje: se quita solo cuando el edificio puede sostenerse." },
        { it: "The junior delegate practices the vocabulary of the corridor: we 'take {3}' instead of welcome — a raised eyebrow with a protocol number — and we 'note with appreciation' when we want applause without {4}. By midnight the communiqué is so balanced it can stand on either leg. The ambassador calls it a first {5}.", es: "La delegada junior practica el vocabulario del corredor: «tomamos nota» en vez de celebrar — una ceja enarcada con número de protocolo — y «tomamos nota con aprecio» cuando queremos aplauso sin compromiso. A medianoche el comunicado queda tan equilibrado que puede sostenerse sobre cualquiera de las dos piernas. La embajadora lo llama un primer borrador." },
      ],
      gaps: [
        { options: ["advantage", "disadvantage", "translator"], answer: 0, why: "La ambigüedad estratégica: cada parte la lee a su propio favor." },
        { options: ["furniture", "scaffolding", "carpet"], answer: 1, why: "«Ambiguity is the scaffold»: el andamio se quita cuando el edificio aguanta." },
        { options: ["note", "flight", "offense"], answer: 0, why: "«To take note of»: registrar sin aprobar (frente a welcome)." },
        { options: ["commitment", "applause", "dessert"], answer: 0, why: "«Note with appreciation» = aplauso sin compromiso." },
        { options: ["draft", "failure", "treaty"], answer: 0, why: "El comunicado «tan equilibrado» es apenas un primer borrador: la ambigüedad aguanta por ahora." },
      ],
    },
  ],

  "en-cu-c2-06": [
    {
      id: "cz-en-c2-06-1", title: "Courier twelve", titleEs: "Courier doce", minutes: 3,
      paragraphs: [
        { it: "Walt's first rule is not about story; it is about paper. Courier twelve, margins like property lines, and the slug line in caps: INT. DINER — NIGHT. If the {1} is wrong, he tells the room, the reader stops reading you on page one — and readers, at this stage, are the only {2} you will ever get. Format, in this business, is grammar.", es: "La primera regla de Walt no va de historia: va de papel. Courier doce, márgenes como lindes de propiedad y el slug line en mayúsculas: INT. DINER — NIGHT. Si el formato falla, le dice a la sala, el lector deja de leerte en la página uno, y los lectores, a esta altura, son el único público que tendrás. El formato, en este negocio, es gramática." },
        { it: "Kim takes over with the white space: the pauses are {3}, like a musical score. Action lines in present tense, active verbs, three lines per beat — 'She flips the ticket. Loses. {4} again.' Never 'she is flipping': the progressive kills the {5}. The students copy the geometry of the page as if it were law, because it is.", es: "Kim sigue con el espacio en blanco: las pausas están escritas, como una partitura. Action lines en presente, verbos activos, tres líneas por beat: «Ella raspa el boleto. Pierde. Raspa otro». Nunca «está raspando»: el progresivo mata el fotograma. Los estudiantes copian la geometría de la página como si fuera ley, porque lo es." },
      ],
      gaps: [
        { options: ["format", "grammar", "lighting"], answer: 0, why: "Courier, márgenes, slug line: la regla es el formato de la página." },
        { options: ["audience", "investors", "actors"], answer: 0, why: "«Readers are the only audience you'll ever get at this stage»." },
        { options: ["optional", "written", "silent"], answer: 1, why: "«Like a musical score: the pauses are written» — partitura de blancos." },
        { options: ["Wins", "Flips", "Cries"], answer: 1, why: "La elipsis del sujeto repite el verbo: flips again (raspa otro boleto)." },
        { options: ["frame", "grammar", "joke"], answer: 0, why: "«The progressive kills the frame»: la cámara quiere el fotograma, no la duración." },
      ],
    },
    {
      id: "cz-en-c2-06-2", title: "Two plates", titleEs: "Dos platos", minutes: 3,
      paragraphs: [
        { it: "The assignment on the board is one page, two characters, one {1} — and a prohibition: the word of the conflict may not appear. The student writes a diner at closing time. Maria sets two plates, puts one {2}; Jesus slides into the booth and does not take off his jacket. On the page, nobody says the word, and the word is the loudest thing in the {3}.", es: "La consigna en la pizarra es una página, dos personajes, un conflicto — y una prohibición: la palabra del conflicto no puede aparecer. El estudiante escribe un diner a la hora de cerrar. María sirve dos platos, devuelve uno; Jesús se desliza en el reservado y no se quita la chaqueta. En la página nadie dice la palabra, y la palabra es lo más ruidoso de la escena." },
        { it: "Walt reads the page aloud and stops at the last line: 'He eats. She watches him eat, which is the closest either of them gets to an {4}.' The room is quiet. Then he teaches the cut: enter late, leave {5} — start at the last possible second and get out before the goodbyes. The student's page ends with a door closing, which is the whole education.", es: "Walt lee la página en voz alta y se detiene en la última línea: «Él come. Ella lo mira comer, que es lo más cerca que cualquiera de los dos llega a una disculpa». La sala calla. Entonces enseña el corte: entra tarde, sal temprano — empieza en el último segundo posible y sal antes de los adioses. La página del estudiante termina con una puerta cerrándose, que es toda la educación." },
      ],
      gaps: [
        { options: ["explosion", "punchline", "conflict"], answer: 2, why: "La consigna del taller: dos personajes y un conflicto sin nombrar." },
        { options: ["forward", "back", "aside"], answer: 1, why: "El plano del duelo: sirve dos platos y devuelve uno (puts one back)." },
        { options: ["kitchen", "menu", "scene"], answer: 2, why: "«The loudest word in the scene»: la palabra ausente manda en la escena." },
        { options: ["apology", "argument", "appetizer"], answer: 0, why: "Mirarlo comer es lo más cerca que llegan a una disculpa." },
        { options: ["early", "loudly", "alone"], answer: 0, why: "La regla de economía dramática: enter late, leave early." },
      ],
    },
    {
      id: "cz-en-c2-06-3", title: "The table read", titleEs: "La table read", minutes: 2,
      paragraphs: [
        { it: "On Friday the class performs a table read. The rules are strict: action lines are read fast and {1}, like stage directions; dialogue jumps to the full oral curve. The parenthetical — (not looking up) — is read {2} and without emphasis: the actor reads it, and then does not act it. A beat, when written, is a real {3} of one second: one-and-two in the silence.", es: "El viernes la clase hace una table read. Las reglas son estrictas: las action lines se leen rápido y planas, como acotaciones; el diálogo salta a la curva oral plena. El paréntesis — (sin levantar la vista) — se lee antes y sin énfasis: el actor lo lee y luego no lo actúa. Un beat, cuando está escrito, es una pausa real de un segundo: uno-y-dos en el silencio." },
        { it: "Two voices read the same scene twice, and the second version wins: the argument is identical, but the {4} has changed — a long line that breathes, then a short one that lands like a {5}. Kim closes the class with the oldest rule in the building: audiences forgive cuts; they never forgive dead air.", es: "Dos voces leen la misma escena dos veces, y gana la segunda versión: el argumento es idéntico, pero el ritmo cambió — una frase larga que respira y luego una corta que cae como un corte. Kim cierra la clase con la regla más vieja del edificio: el público perdona los cortes; jamás perdona el aire muerto." },
      ],
      gaps: [
        { options: ["loudly", "tearfully", "flat"], answer: 2, why: "Las action lines se leen rápido y plano: son didascalias." },
        { options: ["after", "before", "instead"], answer: 1, why: "La acotación se lee antes, sin énfasis: nunca se actúa." },
        { options: ["pause", "mistake", "encore"], answer: 0, why: "«A beat» escrito se ejecuta: una pausa real de un segundo." },
        { options: ["cast", "rhythm", "plot"], answer: 1, why: "El argumento es idéntico: lo que cambia es el ritmo (clima frente a valla)." },
        { options: ["bell", "joke", "cut"], answer: 2, why: "La frase corta «cae como un corte», coherente con el cierre de la clase." },
      ],
    },
  ],

  "en-cu-c2-07": [
    {
      id: "cz-en-c2-07-1", title: "Watch the verbs", titleEs: "Mira los verbos", minutes: 3,
      paragraphs: [
        { it: "In a Washington coffee shop, Connie keeps one eye on the debate and one on her notebook. 'Forget the answers; watch the {1},' she says. The minute a candidate says 'mistakes were made,' the sentence has no author — and no author, no {2}. The analysts have a name for that construction, she adds, straight from the Iran-Contra years: the past {3}.", es: "En una cafetería de Washington, Connie mantiene un ojo en el debate y otro en su cuaderno. «Olviden las respuestas; miren los verbos», dice. En cuanto un candidato dice «se cometieron errores», la frase no tiene autor, y sin autor no hay culpable. Los analistas tienen un nombre para esa construcción, añade, directo de los años de Irán-Contra: el pasado exonerativo." },
        { it: "On the screen, a senator promises to fight for jobs, schools, and the future. Ray counts on his fingers: three parallel clauses, the third one built for {4}. 'Repetition is percussion,' he says. 'Policy is the afterthought.' Connie underlines the plural without a name — 'the American people' — and asks the table the question of the night: who is {5} in the sentence?", es: "En la pantalla, un senador promete luchar por los empleos, las escuelas y el futuro. Ray cuenta con los dedos: tres cláusulas paralelas, la tercera construida para el aplauso. «La repetición es percusión», dice. «La política es lo de después». Connie subraya el plural sin nombre — «el pueblo americano» — y pregunta a la mesa la cuestión de la noche: ¿quién no está en la frase?" },
      ],
      gaps: [
        { options: ["ties", "verbs", "shoes"], answer: 1, why: "«Forget the answers; watch the verbs»: el consejo de la periodista." },
        { options: ["applause", "blame", "budget"], answer: 1, why: "«No author, no blame»: sin autor no hay culpable." },
        { options: ["exonerative", "conditional", "historic"], answer: 0, why: "«The past exonerative»: el nombre analítico de «mistakes were made»." },
        { options: ["applause", "breakfast", "cable"], answer: 0, why: "El tricolon está construido para el aplauso en la tercera repetición." },
        { options: ["clapping", "quoted", "missing"], answer: 2, why: "La pregunta del oficio: ¿quién no está (missing) en la frase?" },
      ],
    },
    {
      id: "cz-en-c2-07-2", title: "Some say", titleEs: "«Algunos dicen»", minutes: 3,
      paragraphs: [
        { it: "The second segment of the debate is a seminar in weasel words. 'Some say the bill is dead,' one candidate offers. Some say, Connie repeats — sources without {1} carrying the candidate's own line. 'Many are saying it. Everyone is saying it — which is how you say {2} at all.' The table laughs; the notebook does not.", es: "El segundo segmento del debate es un seminario de weasel words. «Algunos dicen que la ley está muerta», ofrece un candidato. Algunos dicen, repite Connie: fuentes sin nombre que llevan la línea del propio candidato. «Muchos lo están diciendo. Todos lo dicen: así es como no se dice nada». La mesa se ríe; el cuaderno no." },
        { it: "Ray turns to framing with the classic pair: 'estate tax' and 'death tax,' the same page of the same {3}. Whoever names the frame, owns the {4}. The journalist's job, Connie says, is to rename the frame out loud before the pollsters do it silently. Fact-checking a whistle, she adds, is impossible; you can only watch the {5}.", es: "Ray pasa al framing con la pareja clásica: «estate tax» y «death tax», la misma página de la misma ley. Quien nombra el marco, se queda el marco. El trabajo del periodista, dice Connie, es renombrar el marco en voz alta antes de que los encuestadores lo hagan en silencio. Verificar un silbido, añade, es imposible; solo puedes vigilar al perro." },
      ],
      gaps: [
        { options: ["money", "names", "visas"], answer: 1, why: "Weasel word: fuentes sin nombre (some say, people are telling me)." },
        { options: ["everything", "anything", "nothing"], answer: 2, why: "«Everyone is saying it — which is how you say nothing at all»." },
        { options: ["bill", "ballot", "map"], answer: 0, why: "«The same page of the same bill»: misma ley, distinto nombre." },
        { options: ["frame", "stage", "veto"], answer: 0, why: "«Whoever names the frame owns the frame»: quien nombra el marco, manda." },
        { options: ["dog", "whistle", "crowd"], answer: 0, why: "«You can't fact-check a whistle, only the dog's behavior»: vigilar al perro." },
      ],
    },
    {
      id: "cz-en-c2-07-3", title: "The pivot", titleEs: "El pivote", minutes: 3,
      paragraphs: [
        { it: "Every politician, the notebook says, has a tell. 'Let me be clear' usually announces the opposite of what follows. 'What the American people want' is a {1} result, not a movement. And when the candidate {2} to the economy mid-answer, it means the question found its target. Connie calls these the traffic {3} of a speech: they tell you where the body is buried, or at least where it is parked.", es: "Todo político, dice el cuaderno, tiene un gesto que lo delata. «Que quede claro» suele anunciar lo contrario de lo que sigue. «Lo que el pueblo americano quiere» es un resultado de encuesta, no un movimiento. Y cuando el candidato pivota a la economía a mitad de respuesta, significa que la pregunta encontró su blanco. Connie los llama los semáforos de un discurso: dicen dónde está enterrado el cuerpo, o al menos dónde está estacionado." },
        { it: "The homework is Orwell's old essay, the one every speechwriter keeps on the shelf: dead prose prepares dead {4}. The remedy is syntactic, not moral: restore the {5} to the verb, count the repetitions, name the frame. 'You can't fact-check a whistle,' Connie repeats, closing the notebook. 'But you can point at the dog.'", es: "La tarea es el viejo ensayo de Orwell, el que todo discursógrafo guarda en la estantería: la prosa muerta prepara la política muerta. El remedio es sintáctico, no moral: devolverle el agente al verbo, contar las repeticiones, nombrar el marco. «No puedes verificar un silbido», repite Connie cerrando el cuaderno. «Pero puedes señalar al perro»." },
      ],
      gaps: [
        { options: ["personal", "patriotic", "polling"], answer: 2, why: "«What the American people want» anuncia un sondeo (polling), no un movimiento." },
        { options: ["returns", "pivots", "admits"], answer: 1, why: "«To pivot to the economy»: cambiar de tema cuando aprieta la pregunta." },
        { options: ["jams", "signals", "lights"], answer: 2, why: "Los «traffic lights» del discurso: indican hacia dónde huye el candidato." },
        { options: ["politics", "prose", "promises"], answer: 0, why: "Orwell: la prosa muerta prepara la política muerta." },
        { options: ["accent", "agent", "budget"], answer: 1, why: "El remedio sintáctico: restaurar el agente de la pasiva sin autor." },
      ],
    },
  ],

  "en-cu-c2-08": [
    {
      id: "cz-en-c2-08-1", title: "The word with no address", titleEs: "La palabra sin dirección", minutes: 3,
      paragraphs: [
        { it: "First page, first line of the manuscript: 'Se sentó a la sobremesa.' Margaret reads it aloud twice and looks at the ceiling. There is no English table for that word: the {1} is over and the talking isn't. The junior translator offers a cheat — 'They lingered over coffee' — and the coffee isn't in the {2}, but the lingering is.", es: "Primera página, primera línea del manuscrito: «Se sentó a la sobremesa». Margaret la lee dos veces en voz alta y mira al techo. No hay mesa inglesa para esa palabra: la comida terminó y la conversación no. La traductora junior ofrece una trampa — «Se quedaron con el café» — y el café no está en el original, pero el quedarse sí." },
        { it: "Paul approves with the oldest rule in the shop: translate the {3}, not the dictionary. Sobremesa is a verb wearing a noun's clothes, so we give English a {4}. The anthology will never print the word, he says, but every reader of the page will sit at that {5} — which is the whole point of the smuggling.", es: "Paul aprueba con la regla más vieja del oficio: traduce la escena, no el diccionario. La sobremesa es un verbo con ropa de sustantivo, así que le damos al inglés un verbo. La antología jamás imprimirá la palabra, dice, pero cada lector de la página se sentará a esa mesa, que es todo el punto del contrabando." },
      ],
      gaps: [
        { options: ["meeting", "meal", "movie"], answer: 1, why: "La sobremesa: la comida terminó y la conversación sigue." },
        { options: ["translation", "kitchen", "original"], answer: 2, why: "«The coffee isn't in the original»: el café no está en el texto fuente." },
        { options: ["syntax", "syllable", "scene"], answer: 2, why: "«Translate the scene, not the dictionary»: la regla del oficio." },
        { options: ["verb", "footnote", "excuse"], answer: 0, why: "«A verb wearing a noun's clothes»: se le da al inglés un verbo." },
        { options: ["desk", "table", "border"], answer: 1, why: "El lector «se sentará a esa mesa»: la escena de la sobremesa reconstruida." },
      ],
    },
    {
      id: "cz-en-c2-08-2", title: "A cousin's face", titleEs: "La cara de mi primo", minutes: 3,
      paragraphs: [
        { it: "The margin of chapter two is a field guide to false friends. Éxito is success; exit keeps waving from the page like a stranger with my cousin's {1}. The sneaky one is eventual: Spanish eventual means {2}, English eventual means inevitable — a translator who mixes them predicts the wrong {3}.", es: "El margen del capítulo dos es una guía de campo de los falsos amigos. Éxito es success; exit saluda desde la página como un desconocido con la cara de mi primo. El traicionero es eventual: el «eventual» español significa posible, el «eventual» inglés significa inevitable; el traductor que los confunde predice el futuro equivocado." },
        { it: "Paul's favorite entry is syntactic: the of-genitive. 'The house of my grandmother' testifies that Spanish was here {4}; English wants 'my grandmother's house' and wants it quietly. The cure is not study but the {5}: every draft in this shop is read aloud, because the ear catches the calque before the eye confesses it.", es: "La entrada favorita de Paul es sintáctica: el genitivo con of. «The house of my grandmother» testifica que el español estuvo aquí primero; el inglés quiere «my grandmother's house» y lo quiere en silencio. La cura no es el estudio sino el oído: cada borrador de esta casa se lee en voz alta, porque el oído caza el calco antes de que el ojo lo confiese." },
      ],
      gaps: [
        { options: ["face", "passport", "suitcase"], answer: 0, why: "«A stranger with my cousin's face»: el falso amigo, familiar pero ajeno." },
        { options: ["final", "possible", "urgent"], answer: 1, why: "«Eventual» ES = posible/contingente; EN = inevitable: el falso amigo fino." },
        { options: ["title", "future", "ending"], answer: 1, why: "Confundirlos «predice el futuro equivocado»: posible frente a inevitable." },
        { options: ["first", "last", "never"], answer: 0, why: "«Testifies that Spanish was here first»: el genitivo delata el origen." },
        { options: ["ear", "eye", "exam"], answer: 0, why: "«The ear catches the calque before the eye confesses it»: leer en voz alta." },
      ],
    },
    {
      id: "cz-en-c2-08-3", title: "The three percent shelf", titleEs: "El estante del tres por ciento", minutes: 3,
      paragraphs: [
        { it: "Margaret keeps a sign above her desk with the industry's favorite sad number: translations are barely three {1} of everything published in English. That is why every translated page counts double, and why the translator's one aesthetic decision — sound {2}, or proudly foreign — gets made on every page. Venuti wrote the theory; the shop lives it.", es: "Margaret guarda sobre su escritorio un cartel con el número triste favorito de la industria: las traducciones apenas llegan al tres por ciento de todo lo que se publica en inglés. Por eso cada página traducida cuenta doble, y por eso la única decisión estética del traductor — sonar nativo, u orgullosamente extranjero — se toma en cada página. Venuti escribió la teoría; esta casa la vive." },
        { it: "The shelf behind her holds the shop's proof that it can be done: Rabassa's One Hundred Years of Solitude, the version García Márquez joked he liked {3} than his own original. The apprentice asks for the secret. Margaret gives the shop's liturgy instead: read the draft {4}, mark every place your voice {5}, and decide, sentence by sentence, which of the two the reader is allowed to hear.", es: "El estante detrás de ella guarda la prueba de la casa de que se puede: el Cien años de soledad de Rabassa, la versión de la que García Márquez bromeaba que le gustaba más que su propio original. La aprendiza pregunta por el secreto. Margaret le da en cambio la liturgia de la casa: lee el borrador en voz alta, marca cada lugar donde tu voz tropieza y decide, frase a frase, cuál de los dos puede oír el lector." },
      ],
      gaps: [
        { options: ["dollars", "shelves", "percent"], answer: 2, why: "El «three percent problem»: la cuota ínfima de traducción en el mercado anglosajón." },
        { options: ["loud", "native", "modern"], answer: 1, why: "Las dos escuelas: sonar nativo (domesticar) u orgulloso extranjero (extranjerizar)." },
        { options: ["less", "more", "longer"], answer: 1, why: "El chiste célebre: le gustaba más que su propio original." },
        { options: ["aloud", "quickly", "alone"], answer: 0, why: "La liturgia de la casa: leer cada borrador en voz alta." },
        { options: ["sings", "rests", "trips"], answer: 2, why: "«Where your voice trips»: donde la voz tropieza, hay calco debajo." },
      ],
    },
  ],

  "en-cu-c2-09": [
    {
      id: "cz-en-c2-09-1", title: "Red slashes", titleEs: "Tajos rojos", minutes: 3,
      paragraphs: [
        { it: "The draft comes back on Friday with slashes of red so confident they look like brushwork. At the top, one sentence: 'A fine house with too many {1}.' Vivian's first kill is ceremonial — 'due to the fact that,' which is 'because' wearing a {2} coat. Nate's is a nominalization: 'We conducted an examination of the data,' which was always 'We {3} the data.'", es: "El borrador vuelve el viernes con tajos rojos tan seguros que parecen pinceladas. Arriba, una sola frase: «Una buena casa con demasiados pasillos». El primer asesinato de Vivian es ceremonial: «due to the fact that», que es «because» con gabardina. El de Nate, una nominalización: «We conducted an examination of the data», que siempre fue «We examined the data»." },
        { it: "The second page is a lesson in bodyguards: every 'very' is a {4} that the next word came to work underdressed. Exhausted doesn't want one; tired does. By the last page the piece has halved itself, and the definition of done has changed: not when nothing is left to {5}, but when nothing is left to take away.", es: "La segunda página es una lección de guardaespaldas: cada «very» es la confesión de que la palabra siguiente llegó al trabajo en bata. Exhausted no quiere uno; tired sí. A la última página la pieza se ha reducido a la mitad, y la definición de terminado ha cambiado: no cuando no queda nada por añadir, sino cuando no queda nada por quitar." },
      ],
      gaps: [
        { options: ["windows", "tenants", "corridors"], answer: 2, why: "La metáfora de Vivian: «a fine house with too many corridors»." },
        { options: ["trench", "winter", "fur"], answer: 0, why: "«Because wearing a trench coat»: la gabardina de «due to the fact that»." },
        { options: ["collected", "examined", "mistrusted"], answer: 1, why: "La nominalización desmontada: el verbo siempre fue examined." },
        { options: ["confession", "celebration", "decoration"], answer: 0, why: "«Every very is a confession»: el intensificador delata palabra débil." },
        { options: ["add", "say", "cut"], answer: 0, why: "«Nothing left to add» frente a «nothing left to take away»: la definición de terminado." },
      ],
    },
    {
      id: "cz-en-c2-09-2", title: "The candle store", titleEs: "La tienda de velas", minutes: 3,
      paragraphs: [
        { it: "The writer's own diagnosis, offered before the editor can reach it: the draft smells like a {1} store — 'really,' 'very,' 'actually' on every shelf. Vivian's remedy is economic, not moral: the fog is not a sin, it is a {2}. Behind every 'really' stands a weak word waiting to be promoted; behind 'very tired' stands {3}, ready to travel alone.", es: "El diagnóstico del propio escritor, ofrecido antes de que llegue la editora: el borrador huele a tienda de velas — «really», «very», «actually» en cada estante. El remedio de Vivian es económico, no moral: la niebla no es un pecado, es un síntoma. Detrás de cada «really» hay una palabra débil esperando ascenso; detrás de «very tired» está exhausted, lista para viajar sola." },
        { it: "Nate works the rhythm next, reading the piece aloud with a pencil as a baton. The sentences all weigh the same, he says — a {4} of even pickets — and prose needs weather: a long sentence that breathes, then a short one that lands like a {5} book. The paragraph, rebalanced, ends on two words. It shipped.", es: "Nate trabaja después el ritmo, leyendo la pieza en voz alta con el lápiz por batuta. Las frases pesan todas lo mismo, dice — una valla de listones iguales — y la prosa necesita clima: una frase larga que respira y luego una corta que cae como un libro que se suelta. El párrafo, reequilibrado, termina en dos palabras. Salió publicado." },
      ],
      gaps: [
        { options: ["candle", "book", "shoe"], answer: 0, why: "«My draft smells like a candle store»: la confesión del escritor." },
        { options: ["perfume", "symptom", "crime"], answer: 1, why: "La niebla no es pecado: anuncia (síntoma de) palabra débil debajo." },
        { options: ["sleepy", "fired", "exhausted"], answer: 2, why: "«Exhausted doesn't want very»: la palabra fuerte viaja sola." },
        { options: ["fence", "field", "forest"], answer: 0, why: "«A fence of even pickets»: el ritmo monótono de frases iguales." },
        { options: ["dropped", "closed", "heavy"], answer: 0, why: "«Lands like a dropped book»: la frase corta cae como un libro que se suelta." },
      ],
    },
    {
      id: "cz-en-c2-09-3", title: "The cut that loves you back", titleEs: "El corte que te quiere", minutes: 3,
      paragraphs: [
        { it: "The hardest note of the week is the one every writer knows by heart: kill the sentence you are proudest of. The author's darling — forty-one words about the light on the East River at dusk — does not serve the {1}. It is beautiful, it is true, and it is {2}: a corridor in a house that needs none. Dana's law, quoted in the margin, closes the case: we all have one on every {3}.", es: "La nota más dura de la semana es la que todo escritor se sabe de memoria: mata la frase de la que estás más orgulloso. La querida del autor — cuarenta y una palabras sobre la luz del East River al atardecer — no sirve a la pieza. Es bella, es cierta y es mobiliario: un pasillo en una casa que no necesita ninguno. La ley de Dana, citada al margen, cierra el caso: todos tenemos una en cada página." },
        { it: "The author cuts it, saves it in a file called 'graveyard,' and discovers the truth of the trade: cutting is not {4} — it is tuning. The noise between words disappears; the words stay. On Friday the piece runs at half its original {5}, and the epitaph writes itself: he died adverb-free, and the obituary was two words long.", es: "El autor la corta, la guarda en un archivo llamado «cementerio» y descubre la verdad del oficio: cortar no es encoger, es afinar. El ruido entre las palabras desaparece; las palabras se quedan. El viernes la pieza sale con la mitad de su longitud original, y el epitafio se escribe solo: murió sin adverbios, y el obituario tuvo dos palabras." },
      ],
      gaps: [
        { options: ["season", "piece", "weather"], answer: 1, why: "Kill your darlings: lealtad a la pieza, no al orgullo." },
        { options: ["crucial", "furniture", "overdue"], answer: 1, why: "Bella, cierta y prescindible: es mobiliario (como en el discurso final)." },
        { options: ["shelf", "wall", "page"], answer: 2, why: "«We all have one on every page»: la ley de Dana." },
        { options: ["singing", "printing", "shrinking"], answer: 2, why: "«Cutting isn't shrinking — it's tuning»: cortar es afinar." },
        { options: ["price", "length", "volume"], answer: 1, why: "La pieza sale «at half its original length»: reducida a la mitad." },
      ],
    },
  ],

  "en-cu-c2-10": [
    {
      id: "cz-en-c2-10-1", title: "The tape don't bite", titleEs: "La cinta no muerde", minutes: 3,
      paragraphs: [
        { it: "The recorder goes on at four in the afternoon, and the first thing Mrs. Jenkins says into it is a welcome: 'Sit down, baby. The {1} don't bite.' For sixty years she has been on this porch, she says, and the sea be {2} to her the whole while — present tense, habitual be, the grammar of things that never stop.", es: "La grabadora se enciende a las cuatro de la tarde, y lo primero que la señora Jenkins dice en ella es una bienvenida: «Siéntate, criatura. La cinta no muerde». Lleva sesenta años en este porche, dice, y el mar no deja de hablarle todo este tiempo: presente, be habitual, la gramática de lo que nunca cesa." },
        { it: "The archivist's instructions are older than the recorder: ask open questions, let the {3} fall where it wants, and never clean up the voice. 'Clean water is for {4},' the old woman says when the intern reaches for a standard English paraphrase. 'This here is for {5}.' The intern writes both sentences down exactly as they were said.", es: "Las instrucciones del archivista son más viejas que la grabadora: haz preguntas abiertas, deja que el silencio caiga donde quiera y jamás laves la voz. «El agua limpia es para beber», dice la anciana cuando la practicante va por una paráfrasis en inglés estándar. «Esto de aquí es para recordar». La practicante escribe las dos frases exactamente como fueron dichas." },
      ],
      gaps: [
        { options: ["mosquitoes", "tape", "neighbors"], answer: 1, why: "«The tape don't bite»: frase para relajar al entrevistado ante la grabadora." },
        { options: ["swimming", "listening", "talking"], answer: 2, why: "«The sea be talking to me»: el be habitual de lo que nunca cesa." },
        { options: ["chair", "silence", "tape"], answer: 1, why: "Preguntas abiertas y silencios que no se rellenan: la regla del archivista." },
        { options: ["drinking", "washing", "selling"], answer: 0, why: "«Clean water is for drinking»: la metáfora de la señora." },
        { options: ["forgetting", "remembering", "bottling"], answer: 1, why: "«This here is for remembering»: el archivo guarda memoria, no pulir." },
      ],
    },
    {
      id: "cz-en-c2-10-2", title: "Memory with a clock", titleEs: "Memoria con reloj", minutes: 3,
      paragraphs: [
        { it: "At the kitchen table, Bri gives the intern the linguistics in one breath: the habitual be marks what never {1} — the sea be talking, we be still here — and the stressed been timestamps the distant past: I been on this porch sixty {2}. None of it is error, she says; it is memory with a {3}, older than the schoolbooks that refuse it.", es: "En la mesa de la cocina, Bri le da a la practicante la lingüística en una sola respiración: el be habitual marca lo que nunca cesa — the sea be talking, we be still here — y el been acentuado fecha el pasado lejano: I been on this porch sixty years. Nada de eso es error, dice; es memoria con reloj, más vieja que los libros de texto que la rechazan." },
        { it: "The transcript that night keeps every be and every zero {4}, with footnotes for readers who mistake difference for damage. The archivist's oath, typed at the bottom of the file, is one line long: the voice is the {5}. Mrs. Jenkins reads it, nods once, and asks for a glass of sweet tea. The tape keeps turning.", es: "La transcripción de esa noche conserva cada be y cada cópula cero, con notas al pie para lectores que confunden diferencia con daño. El juramento del archivista, tipeado al pie del expediente, tiene una línea: la voz es el documento. La señora Jenkins lo lee, asiente una vez y pide un vaso de té dulce. La cinta sigue girando." },
      ],
      gaps: [
        { options: ["starts", "matters", "stops"], answer: 2, why: "El be habitual marca lo que nunca se detiene (regularidad)." },
        { options: ["minutes", "years", "dollars"], answer: 1, why: "«I been on this porch sixty years»: el been remoto fecha la duración." },
        { options: ["clock", "roof", "porch"], answer: 0, why: "«Memory with a clock»: el aspecto dialectal mide el tiempo." },
        { options: ["copula", "apology", "draft"], answer: 0, why: "La cópula cero («She nice») se conserva tal cual en la transcripción." },
        { options: ["problem", "document", "accent"], answer: 1, why: "El juramento del archivo: la voz es el documento (fidelidad al hablante)." },
      ],
    },
    {
      id: "cz-en-c2-10-3", title: "Somewhere to live", titleEs: "Un sitio donde vivir", minutes: 3,
      paragraphs: [
        { it: "The question every oral historian eventually asks is the one Mrs. Jenkins answers without being asked: why write down what the family already knows? Because, she says, when I'm {1}, the porch is gone too, and the words need {2} to live. The song proves it — Kumbaya, the whole world singing 'come by {3},' and almost nobody remembering the porch it came from.", es: "La pregunta que todo historiador oral acaba haciendo es la que la señora Jenkins responde sin que se la hagan: ¿para qué escribir lo que la familia ya sabe? Porque, dice, cuando yo me vaya, el porche también se irá, y las palabras necesitan un sitio donde vivir. La canción lo prueba: Kumbaya, el mundo entero cantando «come by here», y casi nadie recordando el porche del que nació." },
        { it: "The intern's last tape ends the only way a Gullah session can: the old woman humming, the sea keeping the {4}, and a sentence that belongs in the archive's mission statement. 'Write it like I {5} it,' she says. 'Don't put no teacher's hand on my mouth.' Sixty years, one porch, and the words finally have somewhere to live.", es: "La última cinta de la practicante termina de la única manera en que puede terminar una sesión Gullah: la anciana tarareando, el mar marcando el tiempo y una frase que merece ir en la misión del archivo. «Escríbelo como lo digo», dice. «No me pongas la mano de profesora en la boca». Sesenta años, un porche, y las palabras por fin tienen un sitio donde vivir." },
      ],
      gaps: [
        { options: ["famous", "gone", "sleeping"], answer: 1, why: "«When I'm gone, the porch is gone too»: la voz se apaga y con ella el porche." },
        { options: ["someone", "somewhere", "silence"], answer: 1, why: "«The words need somewhere to live»: el archivo como casa." },
        { options: ["here", "there", "now"], answer: 0, why: "Kumbaya nace del gullah «come by here»." },
        { options: ["time", "score", "watch"], answer: 0, why: "«The sea keeping the time»: el mar como metrónomo de la sesión." },
        { options: ["mean", "say", "wish"], answer: 1, why: "«Write it like I say it»: transcripción literal, sin manos ajenas." },
      ],
    },
  ],

  "en-cu-c2-11": [
    {
      id: "cz-en-c2-11-1", title: "House rules", titleEs: "Reglas de la casa", minutes: 3,
      paragraphs: [
        { it: "The basement smells like coffee and courage. Marty writes the house rules on the mirror: everything your partner offers, you take it and {1} it. 'Yes, and' — the moment you say 'no, but,' the {2} dies and so does the laugh. The first student who blocks buys the {3}; by the second round, nobody blocks.", es: "El sótano huele a café y a valor. Marty escribe las reglas de la casa en el espejo: todo lo que tu compañero ofrece, lo tomas y lo subes. «Yes, and»: en cuanto dices «no, pero», la escena muere, y con ella la risa. El primer estudiante que bloquea paga el café; a la segunda ronda, ya nadie bloquea." },
        { it: "Zoe demonstrates with the oldest exercise in the book: 'Grandma, you're flying the plane.' The wrong answer is a fact ('no, I'm not'); the right answer is a {4} — 'yes, and fasten your dentures, we're hitting turbulence.' The ball can't drop, Marty repeats. The scene is a staircase everyone {5} while running up it.", es: "Zoe lo demuestra con el ejercicio más viejo del manual: «Abuela, estás pilotando el avión». La respuesta equivocada es un hecho («no»); la correcta es un piso: «sí, y abróchate la dentadura: viene turbulencia». La pelota no puede caer, repite Marty. La escena es una escalera que todos construyen mientras la suben corriendo." },
      ],
      gaps: [
        { options: ["question", "film", "raise"], answer: 2, why: "«You take it and raise it»: aceptar la oferta y subirla." },
        { options: ["coffee", "scene", "rule"], answer: 1, why: "«The scene dies and so does the laugh»: el bloqueo mata la escena." },
        { options: ["coffee", "round", "mike"], answer: 0, why: "El escenario del taller: el primero que diga «no» compra el café." },
        { options: ["floor", "fact", "correction"], answer: 0, why: "«Accept the world, then add a floor»: la respuesta correcta añade un piso." },
        { options: ["judges", "builds", "films"], answer: 1, why: "«A staircase everyone builds while running up it»: la escalera del yes-and." },
      ],
    },
    {
      id: "cz-en-c2-11-2", title: "Two ledgers", titleEs: "Dos libros de cuentas", minutes: 3,
      paragraphs: [
        { it: "The pun seminar, if the basement can be said to hold seminars, runs on one metaphor: a word that pays {1}. 'I used to be a banker, but I lost interest' — the word cashes at the bank and at the {2}. One word, two ledgers, and the audience happily {3} both, which is the only economy where nobody goes bankrupt.", es: "El seminario de puns, si puede decirse que el sótano alberga seminarios, funciona con una sola metáfora: una palabra que paga dos veces. «Fui banquero, pero perdí el interés»: la palabra cobra en el banco y en el aburrimiento. Una palabra, dos libros de cuentas, y el público encantado de cuadrarlos ambos: la única economía donde nadie quiebra." },
        { it: "Zoe's section is borrowed from Sheridan: the malapropism as portrait. The wrong word fits the {4} better than the right one ever could — the host mother who asks for a 'flamingo' lesson and means flamenco. And the delivery law, taught to every beginner: if the pun groans, the room groans with you. A groan, Marty says, is applause in {5}.", es: "La sección de Zoe viene prestada de Sheridan: el malapropismo como retrato. La palabra equivocada le sienta al personaje mejor que la correcta: la madre anfitriona que pide una clase de «flamingo» y quiere decir flamenco. Y la ley de la entrega, que se enseña a todo principiante: si el juego de palabras hace gemir, la sala gime contigo. Un gemido, dice Marty, es un aplauso con disfraz." },
      ],
      gaps: [
        { options: ["twice", "weekly", "forward"], answer: 0, why: "«One word, two ledgers»: el double entendre cobra dos veces." },
        { options: ["court", "boredom", "box office"], answer: 1, why: "«Interest» paga el banco y el aburrimiento: banco y boredom." },
        { options: ["reconciles", "ignores", "audits"], answer: 0, why: "El público «cuadra» ambos libros: la risa como recibo (reconcile)." },
        { options: ["character", "dictionary", "stage"], answer: 0, why: "El malapropismo como retrato: la palabra casi correcta define al personaje." },
        { options: ["disguise", "writing", "reverse"], answer: 0, why: "«A groan is applause in disguise»: el gemido como aplauso." },
      ],
    },
    {
      id: "cz-en-c2-11-3", title: "The staircase", titleEs: "La escalera", minutes: 3,
      paragraphs: [
        { it: "Six students, one suggestion from the audience — 'airport,' somebody's uncle says — and a scene begins from nothing. Each line accepts the world and adds a {1}: the security line becomes a choir, the choir becomes a family reunion, and nobody says no, but. Marty times it: ninety seconds of {2} without a single block. In the language of the trade, everybody {3}.", es: "Seis estudiantes, una sugerencia del público — «aeropuerto», dice el tío de alguien — y una escena nace de la nada. Cada línea acepta el mundo y añade un peldaño: la fila de seguridad se vuelve un coro, el coro se vuelve una reunión familiar, y nadie dice «no, pero». Marty cronometra: noventa segundos de construcción sin un solo bloqueo. En la lengua del oficio, todos improvisan solos." },
        { it: "Afterward, over the coffee the blocker paid for, Zoe runs the debrief: which offers were raised, which were merely {4}, which were quietly ignored. The group agrees that the best moment was the smallest — a two-word acceptance that let the next player {5} an entire backstory out of thin air. Yes, and: the staircase stays standing, and everyone ran up it.", es: "Después, sobre el café que pagó el que bloqueó, Zoe dirige el debrief: qué ofertas fueron elevadas, cuáles apenas aceptadas, cuáles calladamente ignoradas. El grupo coincide en que el mejor momento fue el más pequeño: una aceptación de dos palabras que dejó al siguiente jugador construir un trasfondo entero de la nada. Yes, and: la escalera sigue en pie, y todos la subieron corriendo." },
      ],
      gaps: [
        { options: ["step", "floor", "song"], answer: 0, why: "La metáfora de la escalera: cada línea añade un peldaño (staircase)." },
        { options: ["construction", "silence", "standup"], answer: 0, why: "«Yes-and convierte la conversación en construcción»: noventa segundos sin bloqueos." },
        { options: ["blocks", "bombs", "solos"], answer: 2, why: "«Jazz grammar: nobody knows the changes, and everybody solos anyway»." },
        { options: ["accepted", "praised", "scripted"], answer: 0, why: "La escala del debrief: elevadas frente a apenas aceptadas (sin añadir piso)." },
        { options: ["build", "doubt", "cancel"], answer: 0, why: "La aceptación de dos palabras dejó al siguiente construir (build) el trasfondo." },
      ],
    },
  ],

  "en-cu-c2-12": [
    {
      id: "cz-en-c2-12-1", title: "The invitation", titleEs: "La invitación", minutes: 3,
      paragraphs: [
        { it: "The email arrives in March, subject line two words long, and the writer reads it four times before believing it: the class has voted, and the {1} speech is hers. By Thursday there is a draft, a porch in Iowa, and an old professor of rhetoric with a red pencil and a streak of {2}. 'A commencement speech,' he says, stabbing the first page with affection, 'is a short story that ends as an {3}.'", es: "El correo llega en marzo, con un asunto de dos palabras, y la escritora lo lee cuatro veces antes de creérselo: la clase ha votado, y el discurso de graduación es suyo. Para el jueves hay un borrador, un porche en Iowa y un viejo profesor de retórica con lápiz rojo y una vena afectuosa. «Un discurso de graduación», dice, apuñalando la primera página con cariño, «es un cuento que termina en instrucción»." },
        { it: "The formula, chalked on the porch rail, is three words: anecdote, lesson, {4}. Everything else is furniture, and the furniture stays in the {5}. The writer looks at her twelve pages. The professor looks at his watch. 'Cut,' he says, with love, 'and then cut again.'", es: "La fórmula, escrita con tiza en la barandilla del porche, tiene tres palabras: anécdota, lección, envite. Lo demás es mobiliario, y el mobiliario se queda en el camión. La escritora mira sus doce páginas. El profesor mira su reloj. «Corta», dice, con amor, «y luego vuelve a cortar»." },
      ],
      gaps: [
        { options: ["farewell", "commencement", "keynote"], answer: 1, why: "El ritual universitario votado por la clase: el discurso de graduación (commencement)." },
        { options: ["envy", "ceremony", "affection"], answer: 2, why: "«Lo apuñala con cariño»: el lápiz rojo con vena afectuosa." },
        { options: ["instruction", "apology", "itinerary"], answer: 0, why: "«A short story that ends as an instruction»: la definición del género." },
        { options: ["dinner", "dare", "diploma"], answer: 1, why: "La fórmula de tres palabras: anécdota, lección, envite (dare)." },
        { options: ["truck", "closet", "syllabus"], answer: 0, why: "«The rest was furniture, and the truck has left»: el mobiliario se queda en el camión." },
      ],
    },
    {
      id: "cz-en-c2-12-2", title: "Eleven questions", titleEs: "Once preguntas", minutes: 3,
      paragraphs: [
        { it: "The anecdote is true, which is the only kind the genre forgives. First day in America, first {1}, and the young immigrant orders 'a coffee.' The waiter asks eleven questions — size, roast, milk, foam, {2}, cup, lid, room for cream — and eleven answers later, the coffee arrives. 'I answered in the present {3},' the writer tells the porch, 'because the future was too expensive.'", es: "La anécdota es verdad, que es la única que el género perdona. Primer día en América, primera mañana, y la joven inmigrante pide «un café». El camarero hace once preguntas — tamaño, tueste, leche, espuma, sirope, vaso, tapa, espacio para la crema — y once respuestas después, el café llega. «Respondí en presente», le cuenta al porche, «porque el futuro costaba demasiado»." },
        { it: "The professor laughs once, at the eleven questions, and approves: self-deprecation {4} you the room. 'Just don't pay twice,' he warns. The lesson that follows is a tricolon — fluency is not speed, mistakes are {5}, the accent is the passport you didn't pay for — and the porch, for once, is quiet enough to hear it land.", es: "El profesor se ríe una vez, con las once preguntas, y aprueba: la autocrítica te compra la sala. «Eso sí, no la pagues dos veces», advierte. La lección que sigue es un tricolon — la fluidez no es velocidad, los errores son matrícula, el acento es el pasaporte que no pagaste — y el porche, por una vez, está bastante callado como para oírla aterrizar." },
      ],
      gaps: [
        { options: ["morning", "winter", "exam"], answer: 0, why: "«First day in America, first morning»: el arranque del inmigrante y su primer café." },
        { options: ["soup", "syrup", "shampoo"], answer: 1, why: "La lista del café americano: tamaño, tueste, leche, espuma, sirope." },
        { options: ["person", "country", "tense"], answer: 2, why: "«I answered in the present tense»: el presente porque el futuro costaba caro." },
        { options: ["buys", "costs", "owes"], answer: 0, why: "«Self-deprecation buys you the room»: la autocrítica compra la sala." },
        { options: ["tuition", "tragedy", "trivia"], answer: 0, why: "«Mistakes are tuition»: los errores son matrícula (tricolon del curso)." },
      ],
    },
    {
      id: "cz-en-c2-12-3", title: "The last line", titleEs: "La última frase", minutes: 3,
      paragraphs: [
        { it: "The rehearsal happens at dusk, the speech taped to the porch rail, and the professor conducts like a man at a premiere: pause before the tricolon, one-two-three between its {1}, and after the last word, nothing. 'Put the emphatic {2} on be,' he says, 'drop everything after, and stop {3}.' The graduates, he reminds her, will forget her face by July; the last line is what the speech is for.", es: "El ensayo ocurre al atardecer, con el discurso pegado a la barandilla del porche, y el profesor dirige como un hombre en un estreno: pausa antes del tricolon, uno-dos-tres entre sus golpes, y tras la última palabra, nada. «Ponle el do enfático al be», dice, «tira todo lo que venga después y deja de hablar». Los graduados, le recuerda, olvidarán su cara para julio; la última frase es para lo que sirve el discurso." },
        { it: "On Sunday the gymnasium holds three thousand people and one {4}. The anecdote lands, the tricolon lands harder, and the dare costs exactly what a dare should: two words, then silence. She thanks the parents in one {5}, sits down before the applause figures out what happened — and three thousand people, on cue, repeat the last line to themselves.", es: "El domingo el gimnasio contiene a tres mil personas y un discurso. La anécdota aterriza, el tricolon aterriza más fuerte, y el envite cuesta exactamente lo que debe costar un envite: dos palabras y silencio. Agradece a los padres en una línea, se sienta antes de que el aplauso se entere de lo que ha pasado — y tres mil personas, a la señal, repiten la última frase para sí." },
      ],
      gaps: [
        { options: ["pages", "beats", "jokes"], answer: 1, why: "El tricolon se marca con percusión: uno-dos-tres entre sus golpes (beats)." },
        { options: ["do", "comma", "accent"], answer: 0, why: "«The emphatic do»: Do be embarrassed, el mandato cargado." },
        { options: ["waving", "bowing", "talking"], answer: 2, why: "«Stop talking»: tras la última palabra, silencio; nada de seguir hablando." },
        { options: ["speech", "doubt", "exit"], answer: 0, why: "«Three thousand people and one speech»: el gimnasio y el único discurso del día." },
        { options: ["line", "breath", "word"], answer: 0, why: "«Thank the parents in one line»: el agradecimiento de una sola línea." },
      ],
    },
  ],
};
