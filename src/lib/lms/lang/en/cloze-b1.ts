import type { CbClozeText } from "../../cambridge";

/* ═══ EN B1 · Cloze readings — 3 por unidad (inferencia léxica) ══════
   Metodología v9.12: el texto en inglés lleva marcadores {1} {2}… que
   el reproductor convierte en huecos; el estudiante deduce la palabra
   por el contexto. Campos: `.it` = inglés, `.es` = español. */

export const EN_CLOZE_B1: Record<string, CbClozeText[]> = {
  "en-cu-b1-01": [
    {
      id: "cz-en-b1-01-1", title: "Three minutes at the booth", titleEs: "Tres minutos en el stand", minutes: 3,
      paragraphs: [
        { it: "The career fair opened at ten, but Valentina arrived early. She printed ten copies of her {1} and put them in a blue folder. The gym was full of booths, and each recruiter had only a few {2} per student. «You have three minutes to make an impression,» said her advisor, «so smile and get straight to the point.»", es: "La feria de empleo abrió a las diez, pero Valentina llegó temprano. Imprimió diez copias de su currículum y las guardó en una carpeta azul. El gimnasio estaba lleno de stands y cada reclutador tenía solo unos minutos por estudiante. «Tienes tres minutos para causar impresión», dijo su asesora, «así que sonríe y ve directo al grano»." },
        { it: "At the Brightside Media booth, a recruiter asked her the classic question: «Have you ever worked on a team {3}?» Valentina said yes and described a campaign she had run the year before. They talked about clients and {4}, and at the end the recruiter asked her to leave her contact information. Two days later, Valentina sent a short {5} email, and a week after that she got an interview.", es: "En el stand de Brightside Media, una reclutadora le hizo la pregunta clásica: «¿Alguna vez has trabajado en un proyecto en equipo?». Valentina dijo que sí y describió una campaña que había manejado el año anterior. Hablaron de clientes y plazos de entrega, y al final la reclutadora le pidió que dejara sus datos de contacto. Dos días después, Valentina envió un breve correo de agradecimiento, y una semana más tarde consiguió una entrevista." },
      ],
      gaps: [
        { options: ["ticket", "résumé", "photo"], answer: 1, why: "Se imprime en copias para entregarla a los reclutadores en la feria." },
        { options: ["minutes", "pencils", "dollars"], answer: 0, why: "El guion de la feria da «three minutes» por estudiante." },
        { options: ["project", "vacation", "uniform"], answer: 0, why: "«Have you ever worked on a team project»: pregunta clásica del reclutador." },
        { options: ["clouds", "vegetables", "deadlines"], answer: 2, why: "En una conversación de marketing se habla de clientes y plazos de entrega." },
        { options: ["thank-you", "goodbye", "complaint"], answer: 0, why: "Tras la feria se envía un correo de agradecimiento; la consecuencia es la entrevista." },
      ],
    },
    {
      id: "cz-en-b1-01-2", title: "The elevator pitch", titleEs: "El discurso del ascensor", minutes: 2,
      paragraphs: [
        { it: "An elevator pitch is a short speech about who you are and what you {1}. It is called that because it should last no longer than an elevator ride: about thirty seconds. Career counselors tell students to practice it out {2} until it sounds natural, not memorized. The best pitches include your studies, one {3} experience, and what you are looking for.", es: "Un elevator pitch es un discurso corto sobre quién eres y qué haces. Se llama así porque debe durar lo mismo que un viaje en ascensor: unos treinta segundos. Los consejeros profesionales les dicen a los estudiantes que lo practiquen en voz alta hasta que suene natural, no memorizado. Los mejores discursos incluyen tus estudios, una experiencia relevante y qué buscas." },
        { it: "Valentina wrote hers on a card: «Hi, I'm Valentina. I'm a junior at Boston University, and I've run my club's social {4} for two years. Last summer I did an internship at an agency in Miami. I'm looking for a summer {5} in digital marketing.» Thirty seconds, three facts, one clear goal — that is the whole formula.", es: "Valentina escribió el suyo en una tarjeta: «Hola, soy Valentina. Estoy en tercer año en la Universidad de Boston y llevo dos años manejando las redes sociales de mi club. El verano pasado hice unas prácticas en una agencia de Miami. Busco unas prácticas de verano en marketing digital». Treinta segundos, tres datos, un objetivo claro: esa es toda la fórmula." },
      ],
      gaps: [
        { options: ["eat", "do", "wear"], answer: 1, why: "«Who you are and what you do»: la fórmula fija del pitch." },
        { options: ["loud", "silently", "offline"], answer: 0, why: "«Out loud» = en voz alta: se practica hablando, no en silencio." },
        { options: ["relevant", "distant", "rainy"], answer: 0, why: "El pitch menciona una experiencia pertinente al puesto que buscas." },
        { options: ["storms", "trains", "media"], answer: 2, why: "Social media = redes sociales, lo que Valentina manejaba en su club." },
        { options: ["internship", "vacation", "penalty"], answer: 0, why: "Busca unas prácticas de verano: es el objetivo que cierra el pitch." },
      ],
    },
    {
      id: "cz-en-b1-01-3", title: "The thank-you email", titleEs: "El correo de agradecimiento", minutes: 2,
      paragraphs: [
        { it: "Two days after the career fair, Valentina sat in the library and wrote a short email to Megan, the recruiter she had met at the booth. She thanked her for her {1}, mentioned the name of the company, and reminded her of one {2} from their conversation: the summer internship program. Recruiters talk to hundreds of students, so the details help them {3} you.", es: "Dos días después de la feria, Valentina se sentó en la biblioteca y escribió un correo corto a Megan, la reclutadora que había conocido en el stand. Le agradeció su tiempo, mencionó el nombre de la empresa y le recordó un detalle de su conversación: el programa de prácticas de verano. Los reclutadores hablan con cientos de estudiantes, así que los detalles les ayudan a recordarte." },
        { it: "The email was only five sentences long, but it worked. Megan replied within a {4} and invited Valentina to a video interview. Her advisor had told her: «Five minutes, that's all it takes. Most students never {5} up, so the ones who do stand out immediately.»", es: "El correo tenía solo cinco frases, pero funcionó. Megan respondió en menos de una semana e invitó a Valentina a una entrevista por video. Su asesora le había dicho: «Cinco minutos, eso es todo lo que hace falta. La mayoría de los estudiantes nunca se comunican después, así que los que lo hacen destacan de inmediato»." },
      ],
      gaps: [
        { options: ["car", "time", "lunch"], answer: 1, why: "Se le agradece el tiempo dedicado en el stand." },
        { options: ["detail", "mistake", "address"], answer: 0, why: "El correo le recuerda algo concreto de la conversación: un detalle." },
        { options: ["confuse", "forget", "remember"], answer: 2, why: "Los detalles sirven para que te recuerden entre cientos de estudiantes." },
        { options: ["week", "century", "decade"], answer: 0, why: "«Within a week» = en menos de una semana: tiempos reales de respuesta." },
        { options: ["follow", "give", "wake"], answer: 0, why: "«Follow up» = dar seguimiento: escribir después de la feria." },
      ],
    },
  ],

  "en-cu-b1-02": [
    {
      id: "cz-en-b1-02-1", title: "The Friday debate", titleEs: "El debate del viernes", minutes: 3,
      paragraphs: [
        { it: "On Friday afternoons, Ms. Parker's English class in Seattle has a debate. This week's {1} was phones: helpful tool or dangerous distraction? Ms. Parker wrote the rules on the board: listen first, attack the idea — never the {2} — and disagree politely. Then she divided the class into two {3} and gave each side five minutes to prepare.", es: "Los viernes por la tarde, la clase de inglés de la Sra. Parker en Seattle tiene un debate. El tema de esta semana fueron los teléfonos: ¿herramienta útil o distracción peligrosa? La Sra. Parker escribió las reglas en el pizarrón: escuchar primero, atacar la idea —nunca a la persona— y discrepar con cortesía. Después dividió la clase en dos equipos y les dio cinco minutos a cada bando para prepararse." },
        { it: "Jordan opened with a study: «Teens check their phones a hundred times a day.» Valentina raised her hand and said: «I see your point, but I don't {4} it. I think they counted every notification, not every check.» Priya added, «We should measure screen {5}, not phone checks.» In the end, the class agreed that phones are a tool — it all depends on how you use it.", es: "Jordan abrió con un estudio: «Los adolescentes revisan el teléfono cien veces al día». Valentina levantó la mano y dijo: «Entiendo tu punto, pero no me lo creo. Creo que contaron cada notificación, no cada revisión». Priya añadió: «Deberíamos medir el tiempo de pantalla, no las veces que revisan el teléfono». Al final, la clase acordó que los teléfonos son una herramienta: todo depende de cómo los uses." },
      ],
      gaps: [
        { options: ["topic", "lunch", "uniform"], answer: 0, why: "«Phones: helpful tool or distraction?» es el tema del debate." },
        { options: ["blackboard", "person", "window"], answer: 1, why: "La regla de oro: ataca la idea, nunca a la persona." },
        { options: ["meals", "songs", "teams"], answer: 2, why: "Se divide la clase en dos bandos: dos equipos." },
        { options: ["buy", "sell", "pay"], answer: 0, why: "«I don't buy it» = no me lo creo, el escepticismo de la unidad." },
        { options: ["time", "color", "price"], answer: 0, why: "«Screen time» = tiempo de pantalla, la alternativa al conteo de revisiones." },
      ],
    },
    {
      id: "cz-en-b1-02-2", title: "Two friends, two opinions", titleEs: "Dos amigos, dos opiniones", minutes: 2,
      paragraphs: [
        { it: "After class, Dana and Marcus kept arguing on the bus ride home. Dana loved the new season of a sci-fi series; Marcus {1} after two episodes. «The story moves so slowly,» he complained. «That's exactly the {2},» Dana answered. «The show takes its time, and the characters feel real.»", es: "Después de clase, Dana y Marcus siguieron discutiendo en el autobús de regreso a casa. A Dana le encantó la nueva temporada de una serie de ciencia ficción; Marcus la abandonó después de dos episodios. «La historia avanza muy lento», se quejó él. «Ese es justo el punto», respondió Dana. «La serie se toma su tiempo y los personajes se sienten reales»." },
        { it: "They argued for six stops without changing their {3}. Finally Dana laughed and said: «OK, we're not going to agree. Let's agree to {4}.» Marcus smiled: «Deal. But I still think you have terrible taste in shows.» «That's a fair {5},» Dana said, «but I'm right.» They got off the bus still arguing, still friends.", es: "Discutieron durante seis paradas sin cambiar de opinión. Finalmente Dana rió y dijo: «Bien, no vamos a ponernos de acuerdo. Aceptemos que no coincidimos». Marcus sonrió: «Trato hecho. Pero sigo pensando que tienes pésimo gusto en series». «Es un argumento válido», dijo Dana, «pero tengo razón». Se bajaron del autobús todavía discutiendo, todavía amigos." },
      ],
      gaps: [
        { options: ["quit", "celebrated", "rewatched"], answer: 0, why: "Se queja de la lentitud: abandonó la serie a los dos episodios." },
        { options: ["point", "problem", "schedule"], answer: 0, why: "«That's exactly the point» = ese es justo el argumento de Dana." },
        { options: ["minds", "seats", "shoes"], answer: 0, why: "«Changing their minds» = cambiar de opinión tras seis paradas de discusión." },
        { options: ["argue", "disagree", "leave"], answer: 1, why: "«Agree to disagree» = aceptar que no coinciden, la fórmula de cierre." },
        { options: ["point", "insult", "grade"], answer: 0, why: "Dana responde al comentario con «fair point», el reconocimiento cortés." },
      ],
    },
    {
      id: "cz-en-b1-02-3", title: "Reactions at lunch", titleEs: "Reacciones en el almuerzo", minutes: 2,
      paragraphs: [
        { it: "At lunch in the school cafeteria, the debate about phones continued in a softer way: quick {1} instead of arguments. «I check my messages during lunch,» said Priya. «So do I,» said Dana. «But I keep my phone in my {2} during class.» «Same here,» answered Marcus. «Ms. Parker would take it away for a week.»", es: "En el almuerzo de la cafetería, el debate sobre los teléfonos continuó de forma más suave: reacciones rápidas en lugar de argumentos. «Reviso mis mensajes durante el almuerzo», dijo Priya. «Yo también», dijo Dana. «Pero guardo el teléfono en mi mochila durante la clase». «Igual yo», respondió Marcus. «La Sra. Parker lo confiscaría por una semana»." },
        { it: "Across the table, two students from the debate {3} were comparing notes. «I'm not on TikTok,» said one. «Neither am I,» said the other. They discovered they shared a lot of {4}: the same favorite podcast, the same dislike of reality shows. By the end of lunch, the whole table was nodding: social media is a {5}, and every tool depends on the hand that holds it.", es: "En la otra punta de la mesa, dos estudiantes del debate de la clase comparaban notas. «No estoy en TikTok», dijo una. «Yo tampoco», dijo la otra. Descubrieron que compartían muchos gustos: el mismo pódcast favorito, la misma aversión por los realities. Al final del almuerzo, toda la mesa asentía: las redes sociales son una herramienta, y toda herramienta depende de la mano que la sostiene." },
      ],
      gaps: [
        { options: ["reactions", "exams", "desserts"], answer: 0, why: "«So do I» y «Same here» son reacciones rápidas, no argumentos." },
        { options: ["kitchen", "backpack", "garden"], answer: 1, why: "El teléfono se guarda en la mochila durante la clase." },
        { options: ["kitchen", "class", "stadium"], answer: 1, why: "Son estudiantes del debate de la clase de la Sra. Parker." },
        { options: ["tastes", "homework", "money"], answer: 0, why: "Mismo pódcast y misma aversión: comparten gustos." },
        { options: ["tool", "toy", "threat"], answer: 0, why: "La frase final lo confirma: «every tool depends on the hand that holds it»." },
      ],
    },
  ],

  "en-cu-b1-03": [
    {
      id: "cz-en-b1-03-1", title: "Five hundred million dreams", titleEs: "Quinientos millones de sueños", minutes: 3,
      paragraphs: [
        { it: "It was Saturday night at a diner in Ohio. Dana, Marcus and Valentina had just finished their burgers when the TV above the counter announced the Powerball {1}: $500 million. The whole diner went quiet for a second, and then everybody started {2} at once. «Did you see that?» said the cook. «Somebody out there is about to have a very interesting week.»", es: "Era sábado por la noche en un diner de Ohio. Dana, Marcus y Valentina acababan de terminar sus hamburguesas cuando la TV sobre el mostrador anunció el premio de la Powerball: 500 millones de dólares. Todo el diner se quedó en silencio por un segundo y luego todos empezaron a hablar a la vez. «¿Viste eso?», dijo el cocinero. «Alguien allá afuera está a punto de tener una semana muy interesante»." },
        { it: "Marcus shook his head: «Nobody {3} those things.» Valentina disagreed: «People do win. One ticket in California won two {4} dollars in 2022.» Dana proposed a game: «If you won the lottery, what would you do first?» The answers flew around the table: quit a job, pay off student {5}, buy mom a house. Nobody bought a ticket, but everybody had a plan.", es: "Marcus negó con la cabeza: «Nadie gana esas cosas». Valentina no estuvo de acuerdo: «La gente sí gana. Un boleto en California ganó dos mil millones de dólares en 2022». Dana propuso un juego: «Si ganaras la lotería, ¿qué harías primero?». Las respuestas volaron alrededor de la mesa: dejar el trabajo, saldar los préstamos estudiantiles, comprarle una casa a mamá. Nadie compró un boleto, pero todos tenían un plan." },
      ],
      gaps: [
        { options: ["menu", "jackpot", "weather"], answer: 1, why: "La TV anuncia el premio de $500 millones: el jackpot." },
        { options: ["sleeping", "leaving", "talking"], answer: 2, why: "Tras el silencio de un segundo, todos hablan a la vez." },
        { options: ["wins", "loses", "prints"], answer: 0, why: "Marcus es escéptico: «nadie gana esas cosas»." },
        { options: ["cents", "minutes", "billion"], answer: 2, why: "La cifra récord de 2022 fue de dos mil millones: billion." },
        { options: ["loans", "shoes", "plants"], answer: 0, why: "«Student loans» = préstamos estudiantiles, la deuda clásica universitaria." },
      ],
    },
    {
      id: "cz-en-b1-03-2", title: "The winners' club", titleEs: "El club de los ganadores", minutes: 3,
      paragraphs: [
        { it: "Winning the lottery sounds like a dream, but advisors know the other side of the story. Many winners choose the {1} option — one big payment instead of thirty annual ones — and spend it all in a few years. Financial {2} tell them the same thing: don't quit your job right away, don't tell everyone, and take your time before making big {3}.", es: "Ganar la lotería suena a sueño, pero los asesores conocen la otra cara de la historia. Muchos ganadores eligen la opción de efectivo —un solo pago grande en lugar de treinta anuales— y lo gastan todo en pocos años. Los asesores financieros les repiten lo mismo: no dejes tu trabajo de inmediato, no se lo cuentes a todo el mundo y tómate tu tiempo antes de tomar decisiones grandes." },
        { it: "The most famous cases end badly: lost friendships, expensive {4}, broken families. The quiet winners — the ones who stay anonymous and keep their routine — rarely make the {5}. Maybe that is the real lesson of the Powerball: if you win, the money changes your life. But if you change your habits first, the money just follows.", es: "Los casos más famosos terminan mal: amistades perdidas, demandas caras, familias rotas. Los ganadores discretos —los que se mantienen en el anonimato y conservan su rutina— rara vez salen en los titulares. Quizá esa es la verdadera lección de la Powerball: si ganas, el dinero cambia tu vida. Pero si cambias primero tus hábitos, el dinero solo te sigue." },
      ],
      gaps: [
        { options: ["cash", "credit", "bus"], answer: 0, why: "«One big payment» en lugar de treinta: la opción de efectivo." },
        { options: ["advisors", "tourists", "cooks"], answer: 0, why: "Los «financial advisors» dan el consejo clásico a los ganadores." },
        { options: ["breakfasts", "decisions", "phone calls"], answer: 1, why: "«Making big decisions» = tomar decisiones grandes con calma." },
        { options: ["lawsuits", "birthday parties", "snowflakes"], answer: 0, why: "Los casos famosos terminan en demandas caras." },
        { options: ["headlines", "bed", "desert"], answer: 0, why: "«Make the headlines» = salir en los titulares de las noticias." },
      ],
    },
    {
      id: "cz-en-b1-03-3", title: "What would you do?", titleEs: "¿Qué harías?", minutes: 2,
      paragraphs: [
        { it: "The question «What would you do?» is a classic American conversation game. It works at diners, on road trips and around Thanksgiving {1}. The rules are simple: one person asks a hypothetical question, and everyone else answers with «If I…, I would…». The answers tell you more about people than a hundred {2} interviews.", es: "La pregunta «¿Qué harías?» es un clásico juego de conversación estadounidense. Funciona en los diners, en los viajes por carretera y alrededor de las mesas de Acción de Gracias. Las reglas son simples: una persona hace una pregunta hipotética y los demás responden con «Si yo…, haría…». Las respuestas te dicen más de las personas que cien entrevistas de trabajo." },
        { it: "That night in Ohio, the answers were honest. Dana would pay off her student loans; Marcus would {3} his job that same night; Valentina would travel with her family — «we would never fly {4} again,» she said. Then Marcus asked the hard one: «Would you give money to {5}?» Everyone said yes, and everyone had a different reason.", es: "Esa noche en Ohio, las respuestas fueron honestas. Dana saldaría sus préstamos estudiantiles; Marcus dejaría su trabajo esa misma noche; Valentina viajaría con su familia —«nunca más volaríamos en clase económica», dijo. Entonces Marcus soltó la difícil: «¿Donarías dinero a obras benéficas?». Todos dijeron que sí, y cada uno tuvo una razón diferente." },
      ],
      gaps: [
        { options: ["roofs", "tables", "airports"], answer: 1, why: "«Around Thanksgiving tables»: la sobremesa familiar." },
        { options: ["swimming", "job", "cooking"], answer: 1, why: "Las respuestas hipotéticas revelan más que las entrevistas de trabajo." },
        { options: ["decorate", "translate", "quit"], answer: 2, why: "Marcus dejaría su trabajo esa misma noche, como en el diálogo." },
        { options: ["economy", "helicopters", "kites"], answer: 0, why: "«Fly economy» = volar en clase económica." },
        { options: ["homework", "charity", "traffic"], answer: 1, why: "«Give money to charity» = donar a obras benéficas." },
      ],
    },
  ],

  "en-cu-b1-04": [
    {
      id: "cz-en-b1-04-1", title: "The waiting room", titleEs: "La sala de espera", minutes: 2,
      paragraphs: [
        { it: "Valentina arrived fifteen minutes early for her interview in San Francisco. The waiting room had a small {1}, a table with engineering magazines, and a poster about the company's summer {2}. She put her résumé on her lap, closed her eyes and took three slow {3}. «You've been preparing for weeks,» she told herself. «Just be yourself.»", es: "Valentina llegó quince minutos antes de su entrevista en San Francisco. La sala de espera tenía una pequeña fuente de agua, una mesa con revistas de ingeniería y un póster sobre el programa de prácticas de verano de la empresa. Puso su currículum sobre las piernas, cerró los ojos y dio tres respiraciones lentas. «Llevas semanas preparándote», se dijo. «Solo sé tú misma»." },
        { it: "A few minutes later, a woman with a badge that said «Ashley — Engineering {4}» came out and smiled: «Thanks for coming in!» Valentina stood up, shook her hand firmly, and followed her down the hall. Her heart was still {5}, but her voice was steady when she said: «It's great to be here.»", es: "Unos minutos después, una mujer con una credencial que decía «Ashley — Gerencia de Ingeniería» salió y sonrió: «¡Gracias por venir!». Valentina se levantó, le estrechó la mano con firmeza y la siguió por el pasillo. El corazón aún le latía fuerte, pero su voz fue firme cuando dijo: «Es un gusto estar aquí»." },
      ],
      gaps: [
        { options: ["swimming pool", "fountain", "oven"], answer: 1, why: "En una sala de espera de oficina hay un bebedero o fuente de agua." },
        { options: ["wedding", "internship", "election"], answer: 1, why: "Valentina aspira al programa de prácticas de verano de la empresa." },
        { options: ["breaths", "photographs", "bites"], answer: 0, why: "«Three slow breaths» = tres respiraciones lentas para calmarse." },
        { options: ["manager", "lunch", "holiday"], answer: 0, why: "Ashley es la gerente de ingeniería, como en el diálogo de la unidad." },
        { options: ["racing", "broken", "asleep"], answer: 0, why: "«Her heart was still racing» = el corazón seguía acelerado." },
      ],
    },
    {
      id: "cz-en-b1-04-2", title: "Tell me about a time", titleEs: "Cuéntame una vez que", minutes: 3,
      paragraphs: [
        { it: "Behavioral questions like «Tell me about a time when you {1} a problem» are standard in American interviews. Interviewers want a short {2}, not a general opinion. That is why career centers teach the STAR method: Situation, Task, Action, {3}. First you describe the scene, then your job in it, then what you actually did, and finally the measurable result.", es: "Las preguntas conductuales como «Cuéntame una vez que tuviste un problema» son estándar en las entrevistas estadounidenses. Los entrevistadores quieren una historia corta, no una opinión general. Por eso los centros de carreras enseñan el método STAR: Situación, Tarea, Acción, Resultado. Primero describes la escena, luego tu papel en ella, después lo que hiciste realmente y, al final, el resultado medible." },
        { it: "Valentina's story was simple but strong. Last {4}, her team had missed a deadline. She organized weekly check-ins, divided the work more clearly, and the project {5} two weeks later. Action and result: that is what interviewers remember. «So you took action and solved it,» Ashley said, writing something down. Valentina smiled — the STAR had worked.", es: "La historia de Valentina era simple pero sólida. El semestre pasado, su equipo había perdido un plazo de entrega. Ella organizó reuniones semanales de seguimiento, dividió el trabajo con más claridad y el proyecto se entregó dos semanas después. Acción y resultado: eso es lo que los entrevistadores recuerdan. «Así que tomaste medidas y lo resolviste», dijo Ashley, anotando algo. Valentina sonrió: el STAR había funcionado." },
      ],
      gaps: [
        { options: ["painted", "faced", "ate"], answer: 1, why: "La pregunta pide una ocasión en que enfrentaste un problema." },
        { options: ["story", "theory", "recipe"], answer: 0, why: "STAR sirve para contar una historia corta, no una teoría." },
        { options: ["Result", "Riddle", "Rain"], answer: 0, why: "STAR = Situación, Tarea, Acción, Resultado." },
        { options: ["planet", "semester", "holiday"], answer: 1, why: "«Last semester» = el semestre pasado, como en el diálogo." },
        { options: ["sank", "shipped", "disappeared"], answer: 1, why: "«Ship a project» = entregar el proyecto, el verbo de la unidad." },
      ],
    },
    {
      id: "cz-en-b1-04-3", title: "The app project", titleEs: "El proyecto de la app", minutes: 2,
      paragraphs: [
        { it: "During the interview, Ashley asked about projects outside class. Valentina told her about the mobile {1} she had been building with two friends since January. It helps students find study {2} near campus: you enter your classes, and the app matches you with people who share your schedule.", es: "Durante la entrevista, Ashley preguntó por proyectos fuera de clase. Valentina le contó la aplicación móvil que llevaba construyendo con dos amigos desde enero. Ayuda a estudiantes a encontrar grupos de estudio cerca del campus: ingresas tus clases y la app te empareja con gente que comparte tu horario." },
        { it: "Ashley liked the idea and asked a harder question: «How long have you been {3} in JavaScript?» «About two years,» Valentina answered. «I practice on weekends, and I've {4} three online courses.» Ashley nodded and explained the {5} of the internship: the interns would work on real features of the product, not on coffee runs. Valentina left the building floating.", es: "A Ashley le gustó la idea y preguntó algo más difícil: «¿Cuánto llevas programando en JavaScript?». «Unos dos años», respondió Valentina. «Practico los fines de semana y he completado tres cursos en línea». Ashley asintió y explicó las condiciones de las prácticas: los pasantes trabajarían en funciones reales del producto, no en recados de café. Valentina salió del edificio flotando." },
      ],
      gaps: [
        { options: ["island", "elephant", "app"], answer: 2, why: "La aplicación móvil que construye con dos amigos desde enero." },
        { options: ["groups", "farms", "stadiums"], answer: 0, why: "«Study groups» = grupos de estudio, lo que la app ayuda a encontrar." },
        { options: ["sleeping", "coding", "dancing"], answer: 1, why: "«How long have you been coding?»: programar en JavaScript." },
        { options: ["burned", "lost", "completed"], answer: 2, why: "Logro terminado: ha completado tres cursos en línea." },
        { options: ["terms", "taxes", "fines"], answer: 0, why: "Las condiciones del puesto: funciones reales, no recados de café." },
      ],
    },
  ],

  "en-cu-b1-05": [
    {
      id: "cz-en-b1-05-1", title: "Friday night at the front desk", titleEs: "Viernes por la noche en la recepción", minutes: 3,
      paragraphs: [
        { it: "The Ríos family arrived at the Las Vegas hotel after five hours on the road. The lobby was packed, and the lights of the Strip {1} through the glass doors. At the front desk, Kevin typed their name into the computer twice, then looked up with an uncomfortable {2}: «I'm afraid I can't find your reservation, ma'am.»", es: "La familia Ríos llegó al hotel de Las Vegas después de cinco horas de carretera. El vestíbulo estaba lleno y las luces de la Strip brillaban a través de las puertas de cristal. En la recepción, Kevin tecleó su nombre en la computadora dos veces y luego levantó la vista con una sonrisa incómoda: «Me temo que no puedo encontrar su reserva, señora»." },
        { it: "Mr. Ríos stayed calm. «We booked a double room two weeks ago on your {3}.» Kevin checked again: the system had canceled every booking made before the fifteenth. «You should have {4} us by email,» said Mr. Ríos firmly but politely. «We drove five hours to get here.» Kevin apologized and called the {5} on duty. The story was only beginning.", es: "El señor Ríos se mantuvo tranquilo. «Reservamos una habitación doble hace dos semanas en su sitio web». Kevin revisó de nuevo: el sistema había cancelado todas las reservas hechas antes del día quince. «Deberían habernos avisado por correo», dijo el señor Ríos con firmeza pero cortésmente. «Manejamos cinco horas para llegar». Kevin se disculpó y llamó a la gerente de turno. La historia apenas comenzaba." },
      ],
      gaps: [
        { options: ["cried", "glowed", "cooked"], answer: 1, why: "Las luces de la Strip brillan a través de los cristales." },
        { options: ["smile", "storm", "dance"], answer: 0, why: "Ante una noticia incómoda, el empleado sonríe con incomodidad." },
        { options: ["radio", "roof", "website"], answer: 2, why: "La reserva se hizo en el sitio web del hotel, como en el diálogo." },
        { options: ["forgotten", "notified", "invited"], answer: 1, why: "«You should have notified us» = deberían habernos avisado." },
        { options: ["manager", "police", "pilot"], answer: 0, why: "Si el empleado no puede ayudar, se llama al gerente de turno." },
      ],
    },
    {
      id: "cz-en-b1-05-2", title: "The manager steps in", titleEs: "La gerente entra en escena", minutes: 3,
      paragraphs: [
        { it: "The manager on duty, Ms. Chen, arrived within two minutes. She listened to the whole story without {1} once, then checked the system herself. «You're right,» she said. «The system canceled your reservation, and we should have {2} you. I'm terribly sorry about this.» In the U.S., a complaint that stays polite usually gets {3} faster than one that gets loud.", es: "La gerente de turno, la Sra. Chen, llegó en dos minutos. Escuchó toda la historia sin interrumpir ni una vez y luego revisó el sistema personalmente. «Tienen razón», dijo. «El sistema canceló su reserva y deberíamos haberles avisado. Lamento muchísimo esto». En EE. UU., una queja que se mantiene cortés suele resolverse más rápido que una que se vuelve ruidosa." },
        { it: "Ms. Chen offered a solution: a {4} room on a higher floor, the first night free, and free breakfast for the whole stay. «You shouldn't have had to {5} forty minutes after a five-hour drive,» she admitted. Mr. Ríos shook her hand: «We appreciate it.» The kids were already at the window, watching the fountains. Sometimes the polite complaint wins the suite.", es: "La Sra. Chen ofreció una solución: una habitación mejor en un piso más alto, la primera noche gratis y desayuno gratis durante toda la estadía. «No deberían haber tenido que esperar cuarenta minutos después de un viaje de cinco horas», admitió. El señor Ríos le estrechó la mano: «Se lo agradecemos». Los niños ya estaban en la ventana, mirando las fuentes. A veces la queja cortés gana la suite." },
      ],
      gaps: [
        { options: ["laughing", "interrupting", "yawning"], answer: 1, why: "Una buena gerente escucha todo sin interrumpir ni una vez." },
        { options: ["charged", "promoted", "notified"], answer: 2, why: "El reproche repetido: deberían haber avisado a los huéspedes." },
        { options: ["resolved", "ignored", "framed"], answer: 0, why: "La queja cortés se resuelve más rápido que la ruidosa." },
        { options: ["nicer", "louder", "colder"], answer: 0, why: "La compensación incluye piso más alto y noche gratis: una habitación mejor." },
        { options: ["sing", "swim", "wait"], answer: 2, why: "«Shouldn't have had to wait forty minutes»: la espera tras el viaje." },
      ],
    },
    {
      id: "cz-en-b1-05-3", title: "The complaint email", titleEs: "El correo de queja", minutes: 2,
      paragraphs: [
        { it: "Back home, Valentina helped her parents write an email to the hotel's customer {1} department. They described the problem in order: the date, the confirmation {2}, the five-hour drive, the canceled booking, the forty-minute wait. No angry words, no capital letters — just {3}, polite sentences.", es: "De vuelta en casa, Valentina ayudó a sus padres a escribir un correo al departamento de atención al cliente del hotel. Describieron el problema en orden: la fecha, el número de confirmación, el viaje de cinco horas, la reserva cancelada, la espera de cuarenta minutos. Sin palabras airadas, sin mayúsculas: solo frases claras y corteses." },
        { it: "The email finished with a polite {4}: «We would appreciate a refund of one night or a credit for a future stay. Thank you for your time.» Three days later, the answer arrived: one night refunded and a voucher for a free {5}. «See?» said Mr. Ríos. «The customer is always right — especially when the customer is polite.»", es: "El correo terminaba con una petición cortés: «Agradeceríamos el reembolso de una noche o un crédito para una estadía futura. Gracias por su tiempo». Tres días después llegó la respuesta: una noche reembolsada y un vale para un desayuno gratis. «¿Ves?», dijo el señor Ríos. «El cliente siempre tiene la razón, sobre todo cuando el cliente es cortés»." },
      ],
      gaps: [
        { options: ["service", "party", "kitchen"], answer: 0, why: "«Customer service» = atención al cliente del hotel." },
        { options: ["joke", "number", "animal"], answer: 1, why: "El correo cita el número de confirmación de la reserva." },
        { options: ["clear", "broken", "invisible"], answer: 0, why: "Sin gritos ni mayúsculas: frases claras y corteses." },
        { options: ["request", "threat", "song"], answer: 0, why: "Cierra con la petición de reembolso o crédito." },
        { options: ["flight", "haircut", "breakfast"], answer: 2, why: "El vale de compensación del hotel es para el desayuno." },
      ],
    },
  ],

  "en-cu-b1-06": [
    {
      id: "cz-en-b1-06-1", title: "Monday morning coffee", titleEs: "Café del lunes por la mañana", minutes: 2,
      paragraphs: [
        { it: "Monday morning in an Austin office. Valentina was making coffee in the break {1} when Brianna walked in with big eyes: «Did you hear about the tech company next door?» «No way,» said Derrick from the door. «Who told you?» «Marcus told me this {2}. He said the CEO made the announcement yesterday.»", es: "Lunes por la mañana en una oficina de Austin. Valentina estaba haciendo café en la sala de descanso cuando Brianna entró con los ojos muy abiertos: «¿Te enteraste de la empresa tech de al lado?». «No puede ser», dijo Derrick desde la puerta. «¿Quién te lo dijo?». «Marcus me lo dijo esta mañana. Dijo que la CEO hizo el anuncio ayer»." },
        { it: "By noon, the news had traveled through the whole {3}. «I heard they're moving a thousand employees here,» said someone from sales. «The article said Austin was one of the fastest-growing {4} in the country,» Valentina added. Only the manager stayed calm: «Let's wait for the official {5},» she said, smiling. Office gossip moves fast; official news walks.", es: "Al mediodía, la noticia había recorrido todo el edificio. «Oí que traen mil empleados aquí», dijo alguien de ventas. «El artículo decía que Austin era una de las ciudades de mayor crecimiento del país», añadió Valentina. Solo la gerente se mantuvo tranquila: «Esperemos el anuncio oficial», dijo sonriendo. El cotilleo de oficina vuela; la noticia oficial camina." },
      ],
      gaps: [
        { options: ["pool", "room", "elevator"], answer: 1, why: "«Break room» = sala de descanso, donde se hace el café." },
        { options: ["decade", "birthday", "morning"], answer: 2, why: "Es lunes por la mañana: Marcus se lo contó esa misma mañana." },
        { options: ["soup", "building", "planet"], answer: 1, why: "La noticia recorre todo el edificio de la oficina." },
        { options: ["cities", "songs", "desserts"], answer: 0, why: "Austin como una de las ciudades de mayor crecimiento del país." },
        { options: ["announcement", "vacation", "snowfall"], answer: 0, why: "«Wait for the official announcement» = esperar el anuncio oficial." },
      ],
    },
    {
      id: "cz-en-b1-06-2", title: "Headlines in the present", titleEs: "Titulares en presente", minutes: 3,
      paragraphs: [
        { it: "American headlines love the simple present: «Tech giant moves to Austin.» The tense makes yesterday's news feel {1} and immediate. That's why coworkers often report news with «The headline {2}…» even about events that happened days ago.", es: "Los titulares estadounidenses aman el presente simple: «La gigante tech se muda a Austin». El tiempo verbal hace que la noticia de ayer se sienta fresca e inmediata. Por eso los compañeros suelen reportar noticias con «El titular dice…», incluso sobre eventos que ocurrieron hace días." },
        { it: "There is an art to reporting news at the office. First, you {3} interest: «Did you hear about…?» Then you give the source: «Marcus told me» or «I read it on the company blog.» Finally, you {4} the information: «She said the move starts next year.» What you should never do: gossip about coworkers' private {5}. That's not news — that's a problem.", es: "Hay un arte para reportar noticias en la oficina. Primero, despiertas interés: «¿Te enteraste de…?». Luego das la fuente: «Marcus me lo dijo» o «Lo leí en el blog de la empresa». Finalmente, reportas la información: «Ella dijo que la mudanza empieza el año próximo». Lo que nunca debes hacer: cotillear sobre la vida privada de los compañeros. Eso no es noticia: es un problema." },
      ],
      gaps: [
        { options: ["fresh", "ancient", "invisible"], answer: 0, why: "El presente hace que la noticia de ayer se sienta fresca." },
        { options: ["says", "sings", "cooks"], answer: 0, why: "«The headline says…» = el titular dice: reportar la noticia." },
        { options: ["destroy", "raise", "measure"], answer: 1, why: "«Raise interest» = despertar interés con la pregunta inicial." },
        { options: ["eat", "lock", "report"], answer: 2, why: "El tercer paso es reportar la información con said." },
        { options: ["lives", "lunches", "screensavers"], answer: 0, why: "La vida privada de los compañeros no es material de conversación." },
      ],
    },
    {
      id: "cz-en-b1-06-3", title: "The chain of news", titleEs: "La cadena de noticias", minutes: 3,
      paragraphs: [
        { it: "News in an office moves like a chain. Brianna heard it from Marcus, who heard it from his {1}, who works at the company next door. By the time the story reached the third floor, a hundred employees had become two {2}, and next year had become next month. Stories grow as they {3}.", es: "Las noticias en una oficina se mueven como una cadena. Brianna lo supo por Marcus, que lo supo por su hermana, que trabaja en la empresa de al lado. Para cuando la historia llegó al tercer piso, cien empleados se habían vuelto dos mil y el año próximo se había vuelto el mes próximo. Las historias crecen a medida que viajan." },
        { it: "Valentina decided to check the facts. She found the original {4} online: the company was indeed moving, but only three hundred employees, and the move was planned for the fall. She printed it and put it on the break room table with a sticky {5}: «The real story, for the record.» Sometimes one honest reader beats the whole chain.", es: "Valentina decidió verificar los datos. Encontró el artículo original en línea: la empresa sí se mudaba, pero solo trescientos empleados, y la mudanza estaba planeada para el otoño. Lo imprimió y lo puso en la mesa de la sala de descanso con una nota adhesiva: «La historia real, para que conste». A veces un lector honesto vence a toda la cadena." },
      ],
      gaps: [
        { options: ["parrot", "sister", "dentist"], answer: 1, why: "La hermana de Marcus trabaja en la empresa vecina, como en el diálogo." },
        { options: ["thousand", "apples", "minutes"], answer: 0, why: "La exageración de la cadena: cien empleados se vuelven dos mil." },
        { options: ["sleep", "retire", "travel"], answer: 2, why: "«Stories grow as they travel»: crecen mientras viajan de boca en boca." },
        { options: ["menu", "article", "passport"], answer: 1, why: "Verifica los datos en el artículo original en línea." },
        { options: ["note", "pizza", "trophy"], answer: 0, why: "Una sticky note = nota adhesiva con el mensaje." },
      ],
    },
  ],

  "en-cu-b1-07": [
    {
      id: "cz-en-b1-07-1", title: "Orange shirts and gloves", titleEs: "Camisetas naranjas y guantes", minutes: 3,
      paragraphs: [
        { it: "Saturday morning at the Atlanta food bank. The coordinator, Hank, welcomed forty {1} with orange t-shirts and a box of gloves. «Rule number one,» he said. «Nobody leaves without helping. Rule number two: have {2}. We do serious work, but we do it with a smile.» Then he divided the group into {3}: sorters, packers, and lifters.", es: "Sábado por la mañana en el banco de alimentos de Atlanta. El coordinador, Hank, recibió a cuarenta voluntarios con camisetas naranjas y una caja de guantes. «Regla número uno», dijo. «Nadie se va sin ayudar. Regla número dos: diviértanse. Hacemos un trabajo serio, pero lo hacemos con una sonrisa». Después dividió al grupo en equipos: clasificadores, empacadores y cargadores." },
        { it: "Valentina chose the sorting line. Boxes of donated cans arrived every ten minutes, and her job was to check the {4} dates and separate the good from the bad. It was repetitive but strangely relaxing. «I enjoy {5} things,» she told Hank at lunch. «You're hired,» he laughed. «Every Saturday, forever.»", es: "Valentina eligió la línea de clasificación. Cajas de latas donadas llegaban cada diez minutos, y su trabajo era revisar las fechas de vencimiento y separar lo bueno de lo malo. Era repetitivo pero extrañamente relajante. «Disfruto organizar cosas», le dijo a Hank en el almuerzo. «Estás contratada», rió él. «Todos los sábados, para siempre»." },
      ],
      gaps: [
        { options: ["tourists", "policemen", "volunteers"], answer: 2, why: "Hank recibe a los voluntarios del banco de alimentos con camisetas naranjas." },
        { options: ["fun", "silence", "homework"], answer: 0, why: "La regla dos pide hacerlo con una sonrisa: divertirse." },
        { options: ["countries", "teams", "classes"], answer: 1, why: "Se divide al grupo en equipos de clasificadores, empacadores y cargadores." },
        { options: ["expiration", "birthday", "wedding"], answer: 0, why: "Se revisan las fechas de vencimiento para separar lo bueno de lo malo." },
        { options: ["organizing", "breaking", "losing"], answer: 0, why: "«I enjoy organizing things»: enjoy + -ing, el foco de la unidad." },
      ],
    },
    {
      id: "cz-en-b1-07-2", title: "The sorting line", titleEs: "La línea de clasificación", minutes: 3,
      paragraphs: [
        { it: "The sorting line at a food bank is a small {1}. A conveyor belt brings the donations; the sorters check every can, box and jar; the packers build family boxes with a balanced {2} of proteins, grains and vegetables. A sticker on the wall read: «Last year, this warehouse fed 40,000 {3}.»", es: "La línea de clasificación de un banco de alimentos es una pequeña fábrica. Una banda transportadora trae las donaciones; los clasificadores revisan cada lata, caja y frasco; los empacadores arman cajas familiares con una combinación equilibrada de proteínas, granos y verduras. Una calcomanía en la pared decía: «El año pasado, este almacén alimentó a 40,000 familias»." },
        { it: "Hank explained the golden rule of packing: every box must be {4} enough to feed a family for a week, but light enough for one person to carry. «We don't just give food,» he said. «We give {5}. When a parent opens one of these boxes, they see that somebody in this city cares about them.» The line moved faster after that speech.", es: "Hank explicó la regla de oro del empaque: cada caja debe ser lo bastante completa para alimentar a una familia por una semana, pero lo bastante ligera para que una persona la cargue. «No solo damos comida», dijo. «Damos dignidad. Cuando un padre abre una de estas cajas, ve que alguien en esta ciudad se preocupa por él». La línea se movió más rápido después de ese discurso." },
      ],
      gaps: [
        { options: ["jungle", "factory", "theater"], answer: 1, why: "Banda transportadora y estaciones de trabajo: una pequeña fábrica." },
        { options: ["combination", "argument", "song"], answer: 0, why: "Proteínas, granos y verduras: una combinación equilibrada." },
        { options: ["aliens", "computers", "families"], answer: 2, why: "El almacén alimentó a 40,000 familias el año pasado." },
        { options: ["empty", "complete", "expensive"], answer: 1, why: "Debe alimentar a una familia por una semana: completa." },
        { options: ["dignity", "homework", "advertising"], answer: 0, why: "«We don't just give food»: lo que dan además es dignidad." },
      ],
    },
    {
      id: "cz-en-b1-07-3", title: "Why Americans volunteer", titleEs: "Por qué los estadounidenses hacen voluntariado", minutes: 2,
      paragraphs: [
        { it: "About one in four Americans volunteers every year. High schools and colleges encourage community {1}, and some scholarships even require it. Companies organize volunteer days, and churches, sports teams and {2} do it too. For many Americans, helping others is simply part of the {3}.", es: "Cerca de uno de cada cuatro estadounidenses hace voluntariado cada año. Las escuelas secundarias y las universidades promueven el servicio comunitario, y algunas becas hasta lo exigen. Las empresas organizan días de voluntariado, y las iglesias, los equipos deportivos y los barrios también lo hacen. Para muchos estadounidenses, ayudar a otros es simplemente parte de la cultura." },
        { it: "The reasons are different for everyone. Some people volunteer to make {4} — it's a great way to meet people in a new city. Others want to give something back to their {5}. And some just love the feeling of a Saturday morning well spent. At the food bank, all those reasons end up in the same place: a full box and a hungry family that eats tonight.", es: "Las razones son distintas para cada quien. Algunos hacen voluntariado para hacer contactos —es una gran forma de conocer gente en una ciudad nueva—. Otros quieren devolverle algo a su comunidad. Y hay quienes simplemente aman la sensación de un sábado por la mañana bien aprovechado. En el banco de alimentos, todas esas razones terminan en el mismo lugar: una caja llena y una familia con hambre que cena esta noche." },
      ],
      gaps: [
        { options: ["service", "punishment", "gossip"], answer: 0, why: "«Community service» = servicio comunitario, promovido por escuelas y becas." },
        { options: ["planets", "neighborhoods", "banks"], answer: 1, why: "Iglesias, equipos deportivos y barrios: los mismos que organizan días de voluntariado." },
        { options: ["culture", "problem", "menu"], answer: 0, why: "Ayudar a otros es parte de la cultura americana." },
        { options: ["mistakes", "reservations", "connections"], answer: 2, why: "Conocer gente en una ciudad nueva: hacer contactos." },
        { options: ["community", "homework", "insurance"], answer: 0, why: "«Give something back to their community» = devolverle algo a su comunidad." },
      ],
    },
  ],

  "en-cu-b1-08": [
    {
      id: "cz-en-b1-08-1", title: "The four-way stop", titleEs: "La intersección de cuatro paradas", minutes: 2,
      paragraphs: [
        { it: "Twenty minutes after picking up the rental car at LAX, Kayla and Valentina reached their first four-way {1}. Four cars arrived at almost the same time, and everybody stopped. «Now what?» asked Valentina. «Now we {2},» said Kayla. «The first car to arrive goes first. If two cars stop together, the car on the {3} has priority.»", es: "Veinte minutos después de recoger el auto de renta en LAX, Kayla y Valentina llegaron a su primera intersección de cuatro paradas. Cuatro autos llegaron casi al mismo tiempo y todos se detuvieron. «¿Y ahora qué?», preguntó Valentina. «Ahora esperamos», dijo Kayla. «El primer auto en llegar pasa primero. Si dos autos se detienen juntos, el auto de la derecha tiene la prioridad»." },
        { it: "The system works because drivers follow an unwritten {4}: a little eye contact, a polite wave, and everyone takes turns. «It's very American,» Kayla laughed. «Four strangers solving a problem with {5} and patience.» The intersection cleared in ten seconds, and the road trip officially began.", es: "El sistema funciona porque los conductores siguen un acuerdo no escrito: un poco de contacto visual, un saludo cortés y todos pasan por turnos. «Es muy estadounidense», rió Kayla. «Cuatro desconocidos resolviendo un problema con cortesía y paciencia». La intersección quedó despejada en diez segundos y el viaje por carretera comenzó oficialmente." },
      ],
      gaps: [
        { options: ["stop", "wedding", "parade"], answer: 0, why: "El four-way stop es la intersección de cuatro paradas de la unidad." },
        { options: ["race", "wait", "dance"], answer: 1, why: "Todos se detuvieron: toca esperar el turno." },
        { options: ["right", "left", "roof"], answer: 0, why: "Si dos autos llegan juntos, tiene prioridad el de la derecha." },
        { options: ["agreement", "recipe", "law"], answer: 0, why: "Contacto visual y saludo cortés: un acuerdo no escrito." },
        { options: ["shouting", "luck", "courtesy"], answer: 2, why: "El saludo amable y los turnos: cortesía y paciencia." },
      ],
    },
    {
      id: "cz-en-b1-08-2", title: "Rules of the road", titleEs: "Las reglas de la carretera", minutes: 3,
      paragraphs: [
        { it: "Before the long drive to the Grand Canyon, Kayla gave a briefing. «Rule one: the {1}. We both wear it, in the front and in the back. Rule two: the speed limit. It's posted in miles per {2}, and the highway patrol doesn't accept excuses. Rule three: the phone. In California, you can't {3} it while you drive — not even at a red light.»", es: "Antes del largo manejo hacia el Gran Cañón, Kayla dio una instrucción. «Regla uno: el cinturón. Las dos lo usamos, adelante y atrás. Regla dos: el límite de velocidad. Está publicado en millas por hora y la patrulla de carreteras no acepta excusas. Regla tres: el teléfono. En California no puedes sostenerlo mientras manejas, ni siquiera en un semáforo rojo»." },
        { it: "«And the carpool lane?» asked Valentina. «That's the lane with the diamond {4}. You can only use it with two or more people in the car. Oh, and school buses: when one turns on its red {5}, traffic stops in both directions. Yes, both. All fifty states.» Valentina wrote everything on a sticky note and put it on the dashboard.", es: "«¿Y el carril compartido?», preguntó Valentina. «Es el carril con el símbolo del diamante. Solo pueden usarlo los autos con dos o más personas. Ah, y los autobuses escolares: cuando uno enciende sus luces rojas, el tráfico se detiene en ambas direcciones. Sí, ambas. En los cincuenta estados». Valentina lo apuntó en una nota adhesiva y la pegó en el tablero." },
      ],
      gaps: [
        { options: ["seatbelt", "snack", "pillow"], answer: 0, why: "Se usa adelante y atrás: el cinturón de seguridad." },
        { options: ["gallon", "hour", "decade"], answer: 1, why: "El límite se publica en millas por hora." },
        { options: ["marry", "hold", "return"], answer: 1, why: "En California no puedes sostener el teléfono mientras manejas." },
        { options: ["song", "bird", "sign"], answer: 2, why: "El carril carpool tiene el símbolo del diamante en la señal." },
        { options: ["lights", "engines", "snacks"], answer: 0, why: "El autobús escolar enciende sus luces rojas y todo el tráfico para." },
      ],
    },
    {
      id: "cz-en-b1-08-3", title: "Drive-thru dinner", titleEs: "Cena en el drive-thru", minutes: 2,
      paragraphs: [
        { it: "After eight hours of driving, the golden arches of a drive-thru looked like a {1}. «You never leave the car,» Kayla explained. «There's a {2} with a menu, a window to pay, and a second window to pick up the food.» Valentina ordered from the passenger seat: «A quarter pounder with cheese, please, and no {3}.»", es: "Después de ocho horas de manejo, los arcos dorados de un drive-thru parecían un milagro. «Nunca sales del auto», explicó Kayla. «Hay un cartel con el menú, una ventana para pagar y una segunda ventana para recoger la comida». Valentina pidió desde el asiento del copiloto: «Una quarter pounder con queso, por favor, y sin cebolla»." },
        { it: "The drive-thru is a small temple of American efficiency. You can get coffee, cash from the bank, or even {4} without turning off the engine. Kayla grabbed the bag and parked facing the sunset. «Rule number one of the road trip,» she said, handing over the fries: «Eat while it's {5}.» The best rules are the simplest.", es: "El drive-thru es un pequeño templo de la eficiencia estadounidense. Puedes conseguir café, efectivo del banco o hasta medicinas sin apagar el motor. Kayla tomó la bolsa y se estacionó de frente al atardecer. «Regla número uno del viaje por carretera», dijo, pasando las papas: «Come mientras está caliente». Las mejores reglas son las más simples." },
      ],
      gaps: [
        { options: ["disaster", "miracle", "ghost"], answer: 1, why: "Tras ocho horas de manejo, la comida rápida parece un milagro." },
        { options: ["pool", "teacher", "sign"], answer: 2, why: "El cartel con el menú antes de la ventana de pago." },
        { options: ["balloons", "onions", "cousins"], answer: 1, why: "La modificación clásica del pedido: sin cebolla." },
        { options: ["medicine", "furniture", "swimming pools"], answer: 0, why: "Café, efectivo y hasta medicinas sin apagar el motor." },
        { options: ["hot", "cold", "raw"], answer: 0, why: "«Eat while it's hot» = cómela mientras está caliente." },
      ],
    },
  ],

  "en-cu-b1-09": [
    {
      id: "cz-en-b1-09-1", title: "What are you listening to?", titleEs: "¿Qué estás escuchando?", minutes: 2,
      paragraphs: [
        { it: "Rainy afternoon at a Chicago coffee shop. Maya had one earbud in; Dev was wearing his big {1} headphones. «What are you listening to these days?» asked Valentina. That question, in the U.S., is as common as asking about the {2}.", es: "Tarde lluviosa en una cafetería de Chicago. Maya llevaba un audífono puesto; Dev, sus grandes audífonos con cancelación de ruido. «¿Qué estás escuchando últimamente?», preguntó Valentina. Esa pregunta, en EE. UU., es tan común como preguntar por el clima." },
        { it: "Maya went first: «A true crime series that follows one cold {3} per season. The host is a woman whose interviews feel like movies.» Dev recommended a comedy show: «The hosts are two guys who make any topic {4}. I listen on my commute and laugh out loud on the train.» Valentina added her favorite: a science podcast that explains how things {5}.", es: "Maya fue primero: «Una serie de crímenes reales que sigue un caso sin resolver por temporada. La presentadora es una mujer cuyas entrevistas parecen películas». Dev recomendó un programa de comedia: «Los anfitriones son dos tipos que hacen divertido cualquier tema. La escucho camino al trabajo y me río a carcajadas en el tren». Valentina añadió su favorito: un pódcast de ciencia que explica cómo funcionan las cosas." },
      ],
      gaps: [
        { options: ["noise-canceling", "invisible", "swimming"], answer: 0, why: "Los grandes audífonos de Dev son de cancelación de ruido." },
        { options: ["weather", "salary", "password"], answer: 0, why: "Es una pregunta tan común como la del clima: el salario es tabú." },
        { options: ["suitcase", "case", "winter"], answer: 1, why: "«One cold case per season»: un caso sin resolver por temporada." },
        { options: ["expensive", "funny", "illegal"], answer: 1, why: "Es un programa de comedia: hacen divertido cualquier tema." },
        { options: ["work", "break", "sleep"], answer: 0, why: "El pódcast de ciencia explica cómo funcionan las cosas." },
      ],
    },
    {
      id: "cz-en-b1-09-2", title: "The true crime wave", titleEs: "La ola de los crímenes reales", minutes: 3,
      paragraphs: [
        { it: "In 2014, a podcast called Serial changed everything. It followed one real {1}, week by week, and millions of people started {2} along. True crime became the most popular genre in American podcasting: shows about investigations, trials and unsolved mysteries are now at the top of every {3}.", es: "En 2014, un pódcast llamado Serial lo cambió todo. Siguió un caso real, semana a semana, y millones de personas empezaron a escuchar. El género de crímenes reales se convirtió en el más popular del podcasting estadounidense: los programas sobre investigaciones, juicios y misterios sin resolver están ahora en la cima de todas las listas." },
        { it: "Why do people love it? Psychologists say that hearing about danger from a safe {4} helps the brain practice fear without risk. Others just love a good detective {5}. Whatever the reason, the numbers are clear: true crime listeners finish their episodes at a higher rate than any other audience.", es: "¿Por qué lo aman? Los psicólogos dicen que oír sobre el peligro desde un lugar seguro ayuda al cerebro a practicar el miedo sin riesgo. Otros simplemente aman una buena historia de detectives. Sea cual sea la razón, los números son claros: los oyentes de crímenes reales terminan sus episodios a un ritmo mayor que cualquier otra audiencia." },
      ],
      gaps: [
        { options: ["recipe", "crime", "wedding"], answer: 1, why: "Serial siguió un caso criminal real, semana a semana." },
        { options: ["sleeping", "protesting", "listening"], answer: 2, why: "Millones de personas empezaron a escuchar el pódcast." },
        { options: ["chart", "desert", "closet"], answer: 0, why: "Estar en la cima de las listas de popularidad: every chart." },
        { options: ["distance", "vehicle", "closet"], answer: 0, why: "Oír el peligro desde una distancia segura." },
        { options: ["dessert", "story", "keyboard"], answer: 1, why: "Una buena historia de detectives es la otra explicación." },
      ],
    },
    {
      id: "cz-en-b1-09-3", title: "One episode a day", titleEs: "Un episodio al día", minutes: 2,
      paragraphs: [
        { it: "Podcast apps have changed the way Americans listen. You can speed up the audio, set a {1} timer, and get recommendations based on your habits. Maya listens at 1.5x {2}; Dev refuses. «A good story deserves real time,» he says. «You wouldn't fast-forward a movie, would you?»", es: "Las aplicaciones de pódcast han cambiado la forma en que escuchan los estadounidenses. Puedes acelerar el audio, programar un temporizador de sueño y recibir recomendaciones según tus hábitos. Maya escucha a 1.5x de velocidad; Dev se niega. «Una buena historia merece tiempo real», dice. «No adelantarías una película, ¿o sí?»." },
        { it: "There is an episode for every moment of the day: news with your {3}, interviews during the commute, comedy while doing the {4}, and long conversations on Sunday walks. The average American listener subscribes to six shows but, honestly, only {5} two. «That's the rule,» Maya laughs. «Subscribe to six, love two.»", es: "Hay un episodio para cada momento del día: noticias con el café, entrevistas en el trayecto al trabajo, comedia mientras haces los quehaceres y conversaciones largas en los paseos de domingo. El oyente estadounidense promedio se suscribe a seis programas pero, honestamente, solo ama dos. «Esa es la regla», ríe Maya. «Suscríbete a seis, ama dos»." },
      ],
      gaps: [
        { options: ["sleep", "parking", "kitchen"], answer: 0, why: "«Sleep timer» = temporizador de sueño de las apps de pódcast." },
        { options: ["price", "speed", "volume"], answer: 1, why: "1.5x es una velocidad de reproducción." },
        { options: ["coffee", "shower curtain", "taxes"], answer: 0, why: "Noticias con el café de la mañana." },
        { options: ["chores", "olympics", "exams"], answer: 0, why: "«Doing the chores» = hacer los quehaceres del hogar." },
        { options: ["cancels", "loves", "records"], answer: 1, why: "La regla: suscríbete a seis, ama dos." },
      ],
    },
  ],

  "en-cu-b1-10": [
    {
      id: "cz-en-b1-10-1", title: "The doctor's warning", titleEs: "La advertencia del médico", minutes: 3,
      paragraphs: [
        { it: "Skylar came back from the doctor's office in Denver with a piece of paper and a worried {1}. High cholesterol, five extra pounds, and a clear recommendation: thirty minutes of {2}, five times a week. «Or you can take a pill every day for the rest of your life,» the doctor had said. Skylar hates pills more than the gym.", es: "Skylar volvió de la consulta del médico en Denver con una hoja de papel y una cara de preocupación. Colesterol alto, cinco libras de más y una recomendación clara: treinta minutos de ejercicio, cinco veces por semana. «O puedes tomar una pastilla cada día por el resto de tu vida», le había dicho el médico. Skylar odia las pastillas más que el gimnasio." },
        { it: "Valentina read the paper twice. «We could do this together,» she said. «I need to move more too. We make a {3}: thirty days, small changes, and we keep it fun.» Skylar looked at her with {4}. «Define fun.» «Walking at lunch, cooking on Sundays, and one gym day a week. If we stick to it, we'll {5} ourselves to that concert in Boulder.»", es: "Valentina leyó la hoja dos veces. «Podríamos hacerlo juntas», dijo. «Yo también necesito moverme más. Hagamos un trato: treinta días, cambios pequeños y manteniéndolo divertido». Skylar la miró con recelo. «Define divertido». «Caminar en el almuerzo, cocinar los domingos y un día de gym a la semana. Si nos apegamos, nos invitaremos a ese concierto en Boulder»." },
      ],
      gaps: [
        { options: ["party", "face", "haircut"], answer: 1, why: "Vuelve con una cara de preocupación por el diagnóstico." },
        { options: ["exercise", "vacation", "dessert"], answer: 0, why: "La recomendación médica: treinta minutos de ejercicio." },
        { options: ["deal", "speech", "cake"], answer: 0, why: "«We make a deal» = hagamos un trato de treinta días." },
        { options: ["flowers", "confetti", "doubt"], answer: 2, why: "«Define fun»: la mira con recelo, dudando." },
        { options: ["punish", "treat", "introduce"], answer: 1, why: "«Treat ourselves» = darnos un gusto: el concierto de Boulder." },
      ],
    },
    {
      id: "cz-en-b1-10-2", title: "The 30-day deal", titleEs: "El trato de 30 días", minutes: 3,
      paragraphs: [
        { it: "The rules of the pact went up on the fridge, written in marker. Rule one: we walk at lunch every day, {1} or shine. Rule two: we bring lunch from home four days a week. Rule three: no fast food unless we're on a road {2}. «Unless?» asked Skylar. «Unless,» said Valentina. «I'm not a monster.»", es: "Las reglas del pacto subieron al refrigerador, escritas con marcador. Regla uno: caminamos en el almuerzo todos los días, llueva o haya sol. Regla dos: traemos el almuerzo de casa cuatro días a la semana. Regla tres: nada de comida rápida salvo que estemos en un viaje por carretera. «¿Salvo que?», preguntó Skylar. «Salvo que», dijo Valentina. «No soy un monstruo»." },
        { it: "The deal had rewards and punishments. Skipping a gym day meant bringing the other person {3} for a week. Completing a full week meant choosing the weekend {4}. «And if we finish the thirty days?» asked Skylar. «Then we'll celebrate with a {5} in Boulder, and I'll buy the tickets.» «Deal,» said Skylar, shaking her hand. Two coworkers, one fridge, thirty days of motivation.", es: "El trato tenía premios y castigos. Saltarse un día de gym significaba traerle café a la otra durante una semana. Completar una semana entera significaba elegir la película del fin de semana. «¿Y si terminamos los treinta días?», preguntó Skylar. «Entonces celebraremos con un concierto en Boulder y yo compro las entradas». «Trato», dijo Skylar, estrechándole la mano. Dos compañeras, un refrigerador, treinta días de motivación." },
      ],
      gaps: [
        { options: ["rain", "wind", "snow"], answer: 0, why: "«Rain or shine» = llueva o haya sol, la expresión fija." },
        { options: ["trip", "diet", "test"], answer: 0, why: "«On a road trip» = en un viaje por carretera, la excepción del pacto." },
        { options: ["furniture", "coffee", "bad news"], answer: 1, why: "El castigo: traerle café a la otra durante una semana." },
        { options: ["movie", "audit", "surgery"], answer: 0, why: "El premio semanal: elegir la película del fin de semana." },
        { options: ["funeral", "lecture", "concert"], answer: 2, why: "La celebración final: el concierto en Boulder." },
      ],
    },
    {
      id: "cz-en-b1-10-3", title: "Small habits win", titleEs: "Los hábitos pequeños ganan", minutes: 3,
      paragraphs: [
        { it: "January is the busiest month at American gyms, and February is the {1}. Millions of people join with New Year's resolutions, and most of them quit within six {2}. The problem, say habit researchers, is not motivation. It's {3}. «Get in shape» is a wish; «walk ten minutes after lunch» is a habit.", es: "Enero es el mes más concurrido en los gimnasios estadounidenses, y febrero es el más vacío. Millones de personas se inscriben con propósitos de Año Nuevo y la mayoría abandona antes de seis semanas. El problema, dicen los investigadores de hábitos, no es la motivación. Es el tamaño. «Ponerse en forma» es un deseo; «caminar diez minutos después del almuerzo» es un hábito." },
        { it: "Skylar and Valentina's pact worked because it was small: one walk, four home lunches, one gym day. By day thirty, the walk had become {4}: Valentina felt strange on the days she skipped it. «That's the secret,» said the doctor at the follow-up visit. «You didn't change your life. You changed your {5}, and your life followed.» Skylar's cholesterol was down four points — and the concert tickets were already bought.", es: "El pacto de Skylar y Valentina funcionó porque era pequeño: una caminata, cuatro almuerzos de casa, un día de gym. Para el día treinta, la caminata se había vuelto automática: Valentina se sentía rara los días que la saltaba. «Ese es el secreto», dijo el médico en la visita de seguimiento. «No cambiaste tu vida. Cambiaste tus hábitos, y tu vida te siguió». El colesterol de Skylar había bajado cuatro puntos, y las entradas del concierto ya estaban compradas." },
      ],
      gaps: [
        { options: ["emptiest", "loudest", "warmest"], answer: 0, why: "La mayoría abandona en febrero: el mes más vacío del gym." },
        { options: ["years", "weeks", "lives"], answer: 1, why: "El abandono llega antes de seis semanas, no de años." },
        { options: ["size", "luck", "weather"], answer: 0, why: "El deseo es enorme y el hábito es pequeño: el problema es el tamaño." },
        { options: ["automatic", "illegal", "expensive"], answer: 0, why: "Se sentía rara al saltársela: la caminata se volvió automática." },
        { options: ["habits", "address", "opinion"], answer: 0, why: "«You changed your habits, and your life followed»: la lección final." },
      ],
    },
  ],

  "en-cu-b1-11": [
    {
      id: "cz-en-b1-11-1", title: "Grandpa Joe's Main Street", titleEs: "La Main Street del abuelo Joe", minutes: 3,
      paragraphs: [
        { it: "After the turkey and the apple pie, the grandkids sat around Grandpa Joe near the fireplace in Ohio. «Grandpa, what was this town like when you were a {1}?» Joe smiled and looked at the window, as if Main Street was still out there with its lights on. «Everything used to be within walking {2},» he began. «The bank, the drugstore, the movie theater, the barber — all on the same {3}.»", es: "Después del pavo y el pastel de manzana, los nietos se sentaron alrededor del abuelo Joe junto a la chimenea en Ohio. «Abuelo, ¿cómo era este pueblo cuando eras niño?». Joe sonrió y miró por la ventana, como si Main Street siguiera ahí afuera con las luces encendidas. «Todo solía estar a poca distancia a pie», comenzó. «El banco, la farmacia, el cine, la barbería, todos en la misma calle»." },
        { it: "«We used to know every {4} on Main Street. Mr. Miller at the drugstore would let us read the comic books for free, as long as we didn't bend the pages. On Saturdays, the whole town {5} in front of the barber shop just to talk. There was no internet. There was Main Street.»", es: "«Solíamos conocer a cada tendero de Main Street. El señor Miller, de la farmacia, nos dejaba leer los cómics gratis mientras no dobláramos las páginas. Los sábados, todo el pueblo se reunía frente a la barbería solo para hablar. No había internet. Había Main Street»." },
      ],
      gaps: [
        { options: ["kid", "mayor", "soldier"], answer: 0, why: "La pregunta del nieto: cómo era el pueblo cuando eras niño." },
        { options: ["distance", "speed", "budget"], answer: 0, why: "«Within walking distance» = a poca distancia a pie." },
        { options: ["street", "planet", "channel"], answer: 0, why: "Todo en la misma calle: Main Street." },
        { options: ["shopkeeper", "astronaut", "president"], answer: 0, why: "El señor Miller de la farmacia: cada tendero de la calle." },
        { options: ["gathered", "moved away", "hid"], answer: 0, why: "El pueblo entero se reunía frente a la barbería para hablar." },
      ],
    },
    {
      id: "cz-en-b1-11-2", title: "Friday at the drive-in", titleEs: "Viernes en el autocine", minutes: 3,
      paragraphs: [
        { it: "«Tell us about the drive-in!» said the youngest grandkid. Grandpa Joe sat up straighter. «Every Friday night in the summer, we would {1} the old Buick to the drive-in outside town. We used to pay a {2} per car — not per person — so we would hide a cousin under a blanket sometimes. Don't tell your grandmother.»", es: "«¡Cuéntanos del autocine!», dijo el nieto menor. El abuelo Joe se enderezó. «Cada viernes por la noche en verano, llevábamos el viejo Buick al autocine a las afueras del pueblo. Solíamos pagar un dólar por auto —no por persona—, así que a veces escondíamos a un primo bajo una cobija. No le digan a su abuela»." },
        { it: "«The speaker used to {3} onto the car window, and the sound was terrible, but nobody cared. We would watch two movies under the stars, and mom would bring {4} from home in a paper bag. There were over four thousand drive-ins in the country back then. Today, maybe three hundred {5}. But on a summer night, with the windows down — the feeling is exactly the same.»", es: "«El altavoz se colgaba en la ventana del auto y el sonido era terrible, pero a nadie le importaba. Veíamos dos películas bajo las estrellas y mamá traía palomitas de casa en una bolsa de papel. Había más de cuatro mil autocines en el país en esos días. Hoy quedan tal vez trescientos. Pero en una noche de verano, con las ventanas abajo, la sensación es exactamente la misma»." },
      ],
      gaps: [
        { options: ["fly", "drive", "sail"], answer: 1, why: "El viejo Buick iba al autocine: conducir." },
        { options: ["dollar", "signature", "password"], answer: 0, why: "Un dólar por auto, no por persona: la tarifa del drive-in." },
        { options: ["explode", "melt", "hang"], answer: 2, why: "El altavoz se colgaba en la ventana del auto." },
        { options: ["furniture", "popcorn", "clocks"], answer: 1, why: "Palomitas de casa en una bolsa de papel." },
        { options: ["disappear", "remain", "multiply"], answer: 1, why: "De cuatro mil quedan tal vez trescientos: los que sobreviven." },
      ],
    },
    {
      id: "cz-en-b1-11-3", title: "A nickel float", titleEs: "Un float de cinco centavos", minutes: 2,
      paragraphs: [
        { it: "«And what about the soda {1}?» asked the middle grandkid. Grandpa Joe's eyes lit up. «The fountain at Miller's drugstore was the social network of the whole town. After school, we used to {2} there for a five-cent float: vanilla ice cream swimming in orange soda. One {3}, and you felt like a king.»", es: "«¿Y la fuente de sodas?», preguntó la nieta del medio. Los ojos del abuelo Joe brillaron. «La fuente de la farmacia de Miller era la red social de todo el pueblo. Después de la escuela solíamos ir allí por un float de cinco centavos: helado de vainilla nadando en soda de naranja. Un sorbo y te sentías un rey»." },
        { it: "«The kid who worked the counter knew everybody's {4}. We would sit on those tall stools for hours, arguing about baseball cards and radio shows. Nothing cost more than a {5}, and nothing felt cheaper than time. That's what nobody tells you about the good old days: we didn't know they were the good old days. We were just thirsty.»", es: "«El chico que atendía el mostrador conocía el pedido de todos. Nos sentábamos en esos bancos altos durante horas, discutiendo sobre tarjetas de béisbol y programas de radio. Nada costaba más de un nickel y nada se sentía más barato que el tiempo. Eso es lo que nadie te dice de los viejos tiempos: no sabíamos que eran los viejos tiempos. Solo teníamos sed»." },
      ],
      gaps: [
        { options: ["fountain", "volcano", "statue"], answer: 0, why: "La soda fountain de la farmacia de Miller." },
        { options: ["hide", "head", "graduate"], answer: 1, why: "Después de la escuela iban a la fuente de sodas." },
        { options: ["lecture", "sip", "year"], answer: 1, why: "Un sorbo del float y te sentías un rey." },
        { options: ["address", "salary", "order"], answer: 2, why: "El del mostrador conocía el pedido de cada cliente." },
        { options: ["car", "nickel", "house"], answer: 1, why: "Nada costaba más de un nickel: cinco centavos." },
      ],
    },
  ],

  "en-cu-b1-12": [
    {
      id: "cz-en-b1-12-1", title: "Two minutes to shine", titleEs: "Dos minutos para brillar", minutes: 3,
      paragraphs: [
        { it: "The last week of the course was presentation week. Ms. Rivera gave each student two minutes, a {1}, and a mission: convince the class to visit your city. «Use data, use {2}, use whatever you have,» she said. «But remember the golden rule of public speaking: tell them what you're going to tell them, tell them, and then tell them what you told them.»", es: "La última semana del curso fue la semana de presentaciones. La Sra. Rivera les dio a los estudiantes dos minutos, un micrófono y una misión: convencer a la clase de visitar su ciudad. «Usen datos, usen historias, usen lo que tengan», dijo. «Pero recuerden la regla de oro de hablar en público: díganles qué les van a decir, díganlo y luego díganles qué les dijeron»." },
        { it: "Valentina went third. She talked about Lima: the {3} of the historic center, the food markets, the cliffs by the sea. She used numbers like a professional — «over 10,000 {4}», «winters milder than Denver's» — and closed with a question: «What are you {5} for?» The class applauded. Ms. Rivera wrote one word on her notes: «convincing».", es: "Valentina fue la tercera. Habló de Lima: la arquitectura del centro histórico, los mercados de comida, los acantilados junto al mar. Usó números como una profesional —«más de 10,000 restaurantes», «inviernos más templados que los de Denver»— y cerró con una pregunta: «¿Qué están esperando?». La clase aplaudió. La Sra. Rivera escribió una palabra en sus notas: «convincente»." },
      ],
      gaps: [
        { options: ["vacation", "microphone", "penalty"], answer: 1, why: "Presentar ante la clase con dos minutos: un micrófono." },
        { options: ["stories", "secrets", "spies"], answer: 0, why: "«Use data, use stories»: datos e historias para convencer." },
        { options: ["architecture", "traffic", "insects"], answer: 0, why: "Del centro histórico se admira su arquitectura." },
        { options: ["problems", "airports", "restaurants"], answer: 2, why: "El dato de Lima: más de 10,000 restaurantes." },
        { options: ["waiting", "paying", "cooking"], answer: 0, why: "«What are you waiting for?» = ¿qué están esperando?" },
      ],
    },
    {
      id: "cz-en-b1-12-2", title: "The power of numbers", titleEs: "El poder de los números", minutes: 3,
      paragraphs: [
        { it: "Good presentations in the U.S. run on numbers. Not any numbers: {1}, memorable ones. «Founded in 1535» works better than «very old». «Less than a dollar» works better than «{2}». And for American audiences, the units matter: degrees Fahrenheit, miles, dollars, and {3} for tall buildings.", es: "Las buenas presentaciones en EE. UU. funcionan con números. No cualquier número: redondos, memorables. «Fundada en 1535» funciona mejor que «muy antigua». «Menos de un dólar» funciona mejor que «barato». Y para audiencias estadounidenses, las unidades importan: grados Fahrenheit, millas, dólares y pies para los edificios altos." },
        { it: "Dev presented his city with a chart: population, average rent, number of sunny {4}. Maya used photos and only three numbers — «300 days of sun, 45 minutes to the mountains, one dollar tacos». The class voted with sticky notes. Maya {5} by two votes. «Numbers convinced you,» she said, «but the tacos closed the deal.»", es: "Dev presentó su ciudad con una gráfica: población, renta promedio, número de días soleados. Maya usó fotos y solo tres números: «300 días de sol, 45 minutos a las montañas, tacos de un dólar». La clase votó con notas adhesivas. Maya ganó por dos votos. «Los números los convencieron», dijo, «pero los tacos cerraron el trato»." },
      ],
      gaps: [
        { options: ["random", "round", "invisible"], answer: 1, why: "«Founded in 1535»: números redondos y memorables." },
        { options: ["cheap", "delicious", "impossible"], answer: 0, why: "«Less than a dollar» funciona mejor que «barato»." },
        { options: ["feet", "kilos", "liters"], answer: 0, why: "Para edificios altos, los estadounidenses usan pies." },
        { options: ["days", "taxes", "mayors"], answer: 0, why: "La gráfica de Dev: días soleados al año." },
        { options: ["resigned", "won", "slept"], answer: 1, why: "La clase votó y Maya ganó por dos votos." },
      ],
    },
    {
      id: "cz-en-b1-12-3", title: "The vote", titleEs: "La votación", minutes: 2,
      paragraphs: [
        { it: "At the end of presentation week, twelve cities had been sold to the class: Lima, Seoul, Mexico City, Nairobi, Lisbon, and seven more. The votes went up on the whiteboard, and the {1} was close. Maya's taco city and Valentina's Lima were tied until the very last {2}.", es: "Al final de la semana de presentaciones, doce ciudades habían sido vendidas a la clase: Lima, Seúl, Ciudad de México, Nairobi, Lisboa y siete más. Los votos subieron al pizarrón y la competencia estaba reñida. La ciudad de los tacos de Maya y la Lima de Valentina empataron hasta el último voto." },
        { it: "Ms. Rivera used the moment for one final {3}. «Why did these two win? Not because they have better beaches or better {4}. Because their speakers made you feel something first and gave you numbers second. That's the real {5} of persuasion: facts tell, stories sell, and the best presentations do both.» Valentina raised her hand: «Can we do it again next semester?»", es: "La Sra. Rivera aprovechó el momento para una última lección. «¿Por qué ganaron estas dos? No porque tengan mejores playas o mejores museos. Porque sus oradoras los hicieron sentir algo primero y les dieron números después. Esa es la verdadera fórmula de la persuasión: los hechos cuentan, las historias venden, y las mejores presentaciones hacen ambas cosas». Valentina levantó la mano: «¿Podemos hacerlo otra vez el próximo semestre?»." },
      ],
      gaps: [
        { options: ["storm", "race", "lecture"], answer: 1, why: "Los votos estaban reñidos: la competencia era cerrada." },
        { options: ["vote", "lunch", "bell"], answer: 0, why: "Empataron hasta el último voto de la clase." },
        { options: ["exam", "lesson", "fire drill"], answer: 1, why: "La Sra. Rivera cierra con una última lección sobre persuasión." },
        { options: ["museums", "arguments", "grammar rules"], answer: 0, why: "No ganaron por mejores playas o mejores museos." },
        { options: ["formula", "accident", "punishment"], answer: 0, why: "La verdadera fórmula: hechos e historias juntos." },
      ],
    },
  ],
};
