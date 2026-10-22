import type { CbClozeText } from "../../cambridge";

/* ═══ EN B2 · Cloze readings — 3 por unidad (inferencia léxica) ═════
   Metodología v9.12: el texto en inglés lleva marcadores {1} {2}… que
   el reproductor convierte en huecos; el estudiante deduce la palabra
   por el contexto. Campos: `.it` = inglés, `.es` = español. */

export const EN_CLOZE_B2: Record<string, CbClozeText[]> = {
  "en-cu-b2-01": [
    {
      id: "cz-en-b2-01-1", title: "Two minutes at the town hall", titleEs: "Dos minutos en el town hall", minutes: 3,
      paragraphs: [
        { it: "The quarterly town hall at CloudWave started politely and ended in a loud debate over one question: where should people work? Marcus, who moved to Bend, Oregon, two years ago, spoke first. He argued that his {1} had gone up since he left the office, and that his team still hits every deadline. Priya pushed back: new hires, she said, were missing the informal coaching that used to happen at the coffee machine.", es: "El town hall trimestral de CloudWave empezó con cortesía y terminó en un debate encendido por una sola pregunta: ¿dónde debe trabajar la gente? Marcus, que se mudó a Bend, Oregón, hace dos años, habló primero. Argumentó que su productividad había subido desde que dejó la oficina y que su equipo sigue cumpliendo cada fecha límite. Priya replicó: los nuevos empleados, dijo, se estaban perdiendo la mentoría informal que solía suceder junto a la máquina de café." },
        { it: "Dana, the director, kept the peace with short summaries: «So what I'm hearing is that nobody wants five days on-site». She then proposed a {2} policy: two shared office days per team, chosen by each team. Some managers {3} concerns, arguing that coordination would get harder. However, when the vote came, the room raised hands almost {4}. The final step was simple: Dana would {5} the policy in writing and review it after six months.", es: "Dana, la directora, mantuvo la paz con resúmenes cortos: «Entonces lo que oigo es que nadie quiere cinco días en la oficina». Luego propuso una política híbrida: dos días compartidos de oficina por equipo, elegidos por cada equipo. Algunos managers plantearon preocupaciones, argumentando que la coordinación se volvería más difícil. Sin embargo, cuando llegó la votación, la sala levantó las manos casi por unanimidad. El paso final fue simple: Dana redactaría la política por escrito y la revisaría después de seis meses." },
      ],
      gaps: [
        { options: ["salary", "productivity", "rent"], answer: 1, why: "«his team still hits every deadline» y «since he left the office» apuntan al rendimiento en el trabajo, no al sueldo ni al alquiler." },
        { options: ["remote-only", "hiring", "hybrid"], answer: 2, why: "«two shared office days per team» define el modelo mixto: parte casa, parte oficina." },
        { options: ["ignored", "resolved", "raised"], answer: 2, why: "«arguing that coordination would get harder» introduce una preocupación: se plantea (raised), no se ignora ni se resuelve." },
        { options: ["unanimously", "reluctantly", "randomly"], answer: 0, why: "El «however» marca el contraste con las quejas: al final la sala votó a favor casi por unanimidad." },
        { options: ["shred", "draft", "postpone"], answer: 1, why: "«in writing and review it» pide poner la política por escrito (draft), no destruirla ni aplazarla." },
      ],
    },
    {
      id: "cz-en-b2-01-2", title: "The case for Tuesdays and Thursdays", titleEs: "El argumento a favor de martes y jueves", minutes: 3,
      paragraphs: [
        { it: "CloudWave ran a six-month experiment across four departments, and the data surprised everyone. Although participation varied by team, employee {1} rose by eighteen percent. People reported a better work-life balance, and sick days dropped noticeably. Solo tasks were finished faster at home, whereas {2} work clearly improved on office days.", es: "CloudWave realizó un experimento de seis meses en cuatro departamentos, y los datos sorprendieron a todos. Aunque la participación varió por equipo, la satisfacción de los empleados subió un dieciocho por ciento. La gente reportó mejor equilibrio entre trabajo y vida personal, y los días de baja por enfermedad bajaron notablemente. Las tareas individuales se terminaban más rápido en casa, mientras que el trabajo colaborativo mejoraba claramente los días de oficina." },
        { it: "Managers, however, reported one real cost: scheduling meetings became a weekly {3}. The fix came from the teams themselves. Each one picked two anchor days, usually Tuesdays and Thursdays, when everyone comes in. As a result, calendars now {4} around those days, and the watercooler conversations came back without the mandatory commute. The company will review the policy after six months, and nobody expects it to be {5}.", es: "Los managers, sin embargo, reportaron un costo real: programar reuniones se convirtió en un rompecabezas semanal. La solución vino de los propios equipos. Cada uno eligió dos días ancla, normalmente martes y jueves, cuando todos van. Como resultado, los calendarios ahora giran en torno a esos días, y las charlas de pasillo volvieron sin el desplazamiento obligatorio. La empresa revisará la política después de seis meses, y nadie espera que la desechen." },
      ],
      gaps: [
        { options: ["salary", "satisfaction", "headcount"], answer: 1, why: "«People reported a better work-life balance» es la evidencia de lo que subió: la satisfacción." },
        { options: ["manual", "administrative", "collaborative"], answer: 2, why: "«Solo tasks were finished faster at home, whereas» pide el contraste: el trabajo que mejora en oficina es el colaborativo." },
        { options: ["puzzle", "vacation", "bonus"], answer: 0, why: "«one real cost» de la política: coordinar agendas se volvió un rompecabezas cada semana." },
        { options: ["disappear", "revolve", "expand"], answer: 1, why: "Los días ancla hacen que todo gire a su alrededor: los calendarios se organizan alrededor de ellos." },
        { options: ["praised", "scrapped", "extended"], answer: 1, why: "El éxito del experimento hace improbable que la tiren a la basura: scrapped = desechada." },
      ],
    },
    {
      id: "cz-en-b2-01-3", title: "The Slack wars", titleEs: "La guerra de Slack", minutes: 2,
      paragraphs: [
        { it: "The debate moved to Slack by 5 p.m. Marcus posted a long message defending remote work, complete with a chart of his team's velocity. Priya replied with one polite line and a link about mentorship. Then the thread turned into a ping-pong of opinions: some people {1} flexibility, others valued presence, and a few just posted memes about commutes.", es: "El debate se mudó a Slack a las 5 p. m. Marcus publicó un mensaje largo defendiendo el trabajo remoto, con un gráfico de la velocidad de su equipo incluido. Priya respondió con una sola línea cortés y un enlace sobre mentoría. Luego el hilo se convirtió en un ping-pong de opiniones: algunas personas priorizaban la flexibilidad, otros valoraban la presencia, y algunos solo publicaron memes sobre los desplazamientos." },
        { it: "Dana ended the thread with the line everybody quotes now: «We obviously don't all agree, so let's {2} and commit». She named the two anchor days, thanked the loudest voices on both sides, and closed the channel. The next morning, the office coffee machine was {3} again for the first time in months. Nobody says the debate is over; they just say it moved to a {4} calendar. Marcus, for the record, booked a {5} to Seattle for the first anchor Tuesday.", es: "Dana cerró el hilo con la frase que todos citan ahora: «Obviamente no estamos todos de acuerdo, así que discrepemos y comprometámonos». Nombró los dos días ancla, agradeció a las voces más fuertes de ambos lados y cerró el canal. A la mañana siguiente, la máquina de café de la oficina volvió a estar concurrida por primera vez en meses. Nadie dice que el debate terminó; solo dicen que se mudó a un calendario compartido. Marcus, para que conste, reservó un vuelo a Seattle para el primer martes ancla." },
      ],
      gaps: [
        { options: ["sabotaged", "measured", "prioritized"], answer: 2, why: "«others valued presence» crea el contraste paralelo con quienes ponían primero otra cosa: priorizaban la flexibilidad." },
        { options: ["disagree", "agree", "postpone"], answer: 0, why: "«We obviously don't all agree» introduce la fórmula completa: disagree and commit." },
        { options: ["broken", "crowded", "removed"], answer: 1, why: "La vuelta a la oficina implica gente alrededor de la máquina de café otra vez." },
        { options: ["flexible", "paper", "shared"], answer: 2, why: "Los días ancla trasladan el debate a un calendario compartido por los equipos." },
        { options: ["flight", "meeting", "refund"], answer: 0, why: "Marcus vive en Bend y vuelve a la oficina para el martes ancla: reserva un vuelo a Seattle." },
      ],
    },
  ],

  "en-cu-b2-02": [
    {
      id: "cz-en-b2-02-1", title: "Ten minutes with Rachel", titleEs: "Diez minutos con Rachel", minutes: 3,
      paragraphs: [
        { it: "You knock on Rachel's door with a one-page memo and a plan. «I've got ten minutes», she says, eyes still on her screen. You open with the proposal: a six-month {1} of a four-day workweek for the content team. She spins her chair around. «Interesting. And bold. Walk me through it.»", es: "Tocas la puerta de Rachel con una nota de una página y un plan. «Tengo diez minutos», dice, con los ojos todavía en su pantalla. Abres con la propuesta: un piloto de seis meses de la semana de cuatro días para el equipo de contenidos. Ella gira su silla. «Interesante. Y audaz. Explícamelo.»" },
        { it: "You give her the reasoning first: if the team {2} one day off a week, morale would recover and burnout would drop. She fires the obvious objection — clients don't take Fridays off — and you have the answer ready: staggered days off, half the team on Fridays and half on Mondays, so {3} never drops. When she asks about the risk, you offer a safety net: monthly metrics, and a return to the old schedule if the team {4} its targets two months in a row. She smiles. «Alright, put together a one-pager and pitch it Monday. I'll {5} you up.»", es: "Le das primero el razonamiento: si el equipo ganara un día libre a la semana, la moral se recuperaría y el agotamiento bajaría. Ella lanza la objeción obvia — los clientes no se toman los viernes libres — y tú tienes la respuesta lista: días libres escalonados, la mitad del equipo los viernes y la otra mitad los lunes, para que la cobertura nunca baje. Cuando pregunta por el riesgo, ofreces una red de seguridad: métricas mensuales y volver al horario antiguo si el equipo falla sus objetivos dos meses seguidos. Ella sonríe. «Está bien, prepara una página y preséntalo el lunes. Yo te respaldo.»" },
      ],
      gaps: [
        { options: ["lawsuit", "audit", "pilot"], answer: 2, why: "«a six-month… of a four-day workweek» es la prueba limitada en el tiempo: un piloto." },
        { options: ["lost", "gained", "wasted"], answer: 1, why: "La semana de cuatro días implica conseguir un día libre: el beneficio que arrastra «morale would recover»." },
        { options: ["coverage", "revenue", "advertising"], answer: 0, why: "La objeción de los clientes exige que la atención al público nunca baje: la cobertura, garantizada por los días escalonados." },
        { options: ["beat", "missed", "set"], answer: 1, why: "«a return to the old schedule» es el castigo por el fracaso: fallar los objetivos dos meses seguidos." },
        { options: ["back", "front", "hold"], answer: 0, why: "«I'll back you up» = te respaldo: Rachel arriesga su apoyo en la reunión de liderazgo." },
      ],
    },
    {
      id: "cz-en-b2-02-2", title: "The four-day experiment", titleEs: "El experimento de los cuatro días", minutes: 3,
      paragraphs: [
        { it: "Dozens of American companies have now run four-day-week trials, and the pattern repeats. Teams keep their salaries at one hundred percent, while {1} stays flat or grows instead of collapsing. Employees report better work-life balance, and sick days drop noticeably. However, customer-facing teams can't simply close on Fridays: they {2} schedules to keep the phones answered all week.", es: "Decenas de empresas estadounidenses ya han hecho ensayos de la semana de cuatro días, y el patrón se repite. Los equipos mantienen sus sueldos al cien por ciento, mientras que los ingresos se mantienen estables o crecen en vez de desplomarse. Los empleados reportan mejor equilibrio entre trabajo y vida personal, y los días de baja bajan notablemente. Sin embargo, los equipos de cara al cliente no pueden simplemente cerrar los viernes: escalonan los horarios para que alguien conteste el teléfono toda la semana." },
        { it: "Skeptics usually come around by month three — as long as the transition is {3} carefully. The companies that struggled treated the free day as a vacation and changed nothing else. The ones that succeeded redesigned meetings, cut busywork, and trained managers to measure {4} instead of hours. In the end, the lesson is old: focus on what gets done, not on where or when people {5}.", es: "Los escépticos normalmente se convencen para el tercer mes, siempre que la transición se diseñe con cuidado. Las empresas que sufrieron trataron el día libre como unas vacaciones y no cambiaron nada más. Las que tuvieron éxito rediseñaron las reuniones, recortaron el trabajo inútil y entrenaron a los managers para medir resultados en lugar de horas. Al final, la lección es vieja: concéntrate en lo que se hace, no en dónde ni cuándo se sienta la gente a trabajar." },
      ],
      gaps: [
        { options: ["advertising", "revenue", "attendance"], answer: 1, why: "«stays flat or grows instead of collapsing» habla de los resultados del negocio: los ingresos." },
        { options: ["cancel", "stagger", "ignore"], answer: 1, why: "«to keep the phones answered all week» exige alternar los días libres entre el equipo, no cancelarlos." },
        { options: ["ignored", "rushed", "designed"], answer: 2, why: "«as long as» condiciona el éxito a una transición planificada con cuidado." },
        { options: ["attendance", "output", "loyalty"], answer: 1, why: "«measure… instead of hours» contrasta presencia con resultados: lo que se produce." },
        { options: ["sit", "retire", "socialize"], answer: 0, why: "«not on where or when» se refiere al lugar y el horario de trabajo: dónde y cuándo se sienta uno a trabajar." },
      ],
    },
    {
      id: "cz-en-b2-02-3", title: "The one-pager", titleEs: "La página única", minutes: 2,
      paragraphs: [
        { it: "Here is the memo Rachel asked for, exactly one page. Proposal: a six-month pilot of a four-day workweek for the content team. Hypothesis: if we {1} the days off between Fridays and Mondays, client coverage would never drop. I'd suggest we review three {2} monthly — billable hours, response time, and employee survey scores.", es: "Aquí está la nota que Rachel pidió, exactamente una página. Propuesta: un piloto de seis meses de la semana de cuatro días para el equipo de contenidos. Hipótesis: si escalonáramos los días libres entre viernes y lunes, la cobertura a clientes nunca bajaría. Sugiero que revisemos tres métricas cada mes: horas facturables, tiempo de respuesta y los resultados de la encuesta de empleados." },
        { it: "Safety net: if we {3} our targets two months in a row, we would return to the current schedule, no exceptions. I'd also ask for a quick check-in with Rachel every month, mostly to keep the {4} honest and the team calm. If the pilot works, we would have a real case to take to the whole agency — and if it doesn't, we'll have learned something cheap. Either way, the {5} is small and the upside is not.", es: "Red de seguridad: si falláramos nuestros objetivos dos meses seguidos, volveríamos al horario actual, sin excepciones. También pediría una revisión rápida con Rachel cada mes, sobre todo para mantener honestos los números y tranquilo al equipo. Si el piloto funciona, tendríamos un caso real para llevar a toda la agencia; y si no, habremos aprendido algo barato. De un modo u otro, el riesgo es pequeño y el beneficio no lo es." },
      ],
      gaps: [
        { options: ["delay", "stagger", "eliminate"], answer: 1, why: "«between Fridays and Mondays» describe repartir los días libres: escalonarlos." },
        { options: ["resumes", "offices", "metrics"], answer: 2, why: "«billable hours, response time, survey scores» son las cifras que se miden cada mes." },
        { options: ["beat", "miss", "raise"], answer: 1, why: "«we would return to the current schedule» castiga el fracaso: fallar los objetivos." },
        { options: ["furniture", "numbers", "logo"], answer: 1, why: "Las «monthly metrics» se revisan para que las cifras sigan siendo honestas." },
        { options: ["profit", "risk", "building"], answer: 1, why: "«the upside is not» pide el contraste con el beneficio: el riesgo es pequeño." },
      ],
    },
  ],

  "en-cu-b2-03": [
    {
      id: "cz-en-b2-03-1", title: "Just what I needed", titleEs: "Justo lo que necesitaba", minutes: 3,
      paragraphs: [
        { it: "Friday, 5:30 p.m., the bar on the corner in Chicago. Tyler drops a handful of change into the vending machine and gets nothing back. «Oh great», he says, flat as a Kansas highway. «Just what I {1} today.» Megan raises her glass without looking up: «Yeah, that quarter was your entire {2}, right?»", es: "Viernes, 5:30 p. m., el bar de la esquina en Chicago. Tyler mete un puñado de monedas en la máquina expendedora y no recibe nada. «Oh, qué bien», dice, plano como una carretera de Kansas. «Justo lo que necesitaba hoy.» Megan levanta su copa sin mirar: «Sí, ese cuarto de dólar era todo tu sueldo, ¿verdad?»" },
        { it: "The night goes on like that, a ping-pong of deadpan lines. When Brianna tells Tyler his forty-slide deck «really outdid itself», he answers «Ha-ha. Very {3}.» — dry, no smile. You laugh a half second late every time, and by the third round you learn the trick: listen for the gap between the {4} words and the situation. Positive words plus a flat voice means the opposite. By closing time, you even try one yourself. The printer jams behind the bar, and you hear yourself say: «Well, isn't that {5}.» Nobody laughs harder than Tyler.", es: "La noche sigue así, un ping-pong de frases con cara de póker. Cuando Brianna le dice a Tyler que su presentación de cuarenta diapositivas «de verdad se superó a sí misma», él responde «Ja, ja. Muy graciosa.», seco, sin sonrisa. Te ríes medio segundo tarde cada vez, y a la tercera ronda aprendes el truco: escucha el hueco entre las palabras positivas y la situación. Palabras positivas más voz plana significan lo contrario. Al cierre, incluso pruebas tú. La impresora se atasca detrás de la barra, y te oyes decir: «Vaya, qué conveniente.» Nadie se ríe más que Tyler." },
      ],
      gaps: [
        { options: ["needed", "feared", "planned"], answer: 0, why: "«Oh great» con tono plano tras perder las monedas es ironía: «just what I needed» significa lo contrario." },
        { options: ["hobby", "paycheck", "lunch"], answer: 1, why: "La exageración burlona de Megan: ese cuarto de dólar era todo tu sueldo (imposible)." },
        { options: ["funny", "boring", "loud"], answer: 0, why: "«Ha-ha. Very…», seco y sin sonrisa, es el «qué graciosa» irónico de respuesta a la broma." },
        { options: ["negative", "positive", "technical"], answer: 1, why: "«Positive words plus a flat voice means the opposite»: la pista vive en el contraste entre palabras positivas y tono plano." },
        { options: ["expensive", "romantic", "convenient"], answer: 2, why: "La ironía replica el patrón aprendido: palabra positiva («convenient») sobre algo que no lo es en absoluto." },
      ],
    },
    {
      id: "cz-en-b2-03-2", title: "Irony without a voice", titleEs: "Ironía sin voz", minutes: 3,
      paragraphs: [
        { it: "Sarcasm survives on tone of voice. Take the melody away, and «Great, another meeting» can read as genuine enthusiasm. That is why written irony is a minefield at work: an email that sounds playful in your head can land like an {1} in someone else's inbox. Americans soften the risk with signals — a joking «lol», a winking emoji, or an {2} so big that nobody could take it literally.", es: "El sarcasmo sobrevive gracias al tono de voz. Quita la melodía, y «Great, another meeting» puede leerse como entusiasmo genuino. Por eso la ironía escrita es un campo minado en el trabajo: un email que suena juguetón en tu cabeza puede aterrizar como un insulto en el buzón de otro. Los estadounidenses suavizan el riesgo con señales: un «lol» de broma, un emoji guiñando el ojo, o una exageración tan grande que nadie pudiera tomarla literalmente." },
        { it: "The unwritten rules are fairly consistent. Irony is welcome among close friends and risky with strangers, bosses, or clients. It is almost never safe in a first email, and it is {3} on sensitive topics — appearance, money, religion, politics, personal tragedy. When newcomers take sarcastic praise literally, they often end up confused or {4} for the wrong reason. The safest move at work remains the deadpan question: «Sorry — are you {5}, or should I actually do that?»", es: "Las reglas no escritas son bastante consistentes. La ironía es bienvenida entre amigos cercanos y riesgosa con desconocidos, jefes o clientes. Casi nunca es segura en un primer email, y está vetada en temas sensibles: apariencia, dinero, religión, política, tragedias personales. Cuando los recién llegados toman el elogio sarcástico literalmente, suelen acabar confundidos o halagados por el motivo equivocado. La jugada más segura en el trabajo sigue siendo la pregunta neutra: «Perdón, ¿estás bromeando o debería hacer eso de verdad?»" },
      ],
      gaps: [
        { options: ["invitation", "insult", "invoice"], answer: 1, why: "«a minefield at work»: lo que suena juguetón para uno puede aterrizar como ofensa para el otro." },
        { options: ["spelling mistake", "invoice", "exaggeration"], answer: 2, why: "«so big that nobody could take it literally» delata la hipérbole como señal de ironía." },
        { options: ["required", "forbidden", "rewarded"], answer: 1, why: "La lista de temas sensibles (apariencia, dinero, religión) marca el límite: la ironía ahí está vetada." },
        { options: ["flattered", "fired", "promoted"], answer: 0, why: "Tomar el elogio sarcástico literalmente lleva a sentirse halagado por el motivo equivocado." },
        { options: ["leaving", "joking", "hiring"], answer: 1, why: "«or should I actually do that?» contrasta la broma con la instrucción real." },
      ],
    },
    {
      id: "cz-en-b2-03-3", title: "Message to Diego", titleEs: "Mensaje para Diego", minutes: 2,
      paragraphs: [
        { it: "You text your friend Diego, who just started working in Chicago: «So yesterday your manager looked at your forty-slide deck and said, 'Wow, you really {1} yourself.' Please tell me you didn't just say thank you.» The typing bubbles appear. Then: «I did say thank you. Why?»", es: "Le escribes a tu amigo Diego, que acaba de empezar a trabajar en Chicago: «Así que ayer tu manager miró tu presentación de cuarenta diapositivas y dijo: 'Wow, realmente te superaste a ti mismo'. Dime que no dijiste simplemente gracias.» Aparecen los puntos de escribiendo. Luego: «Sí dije gracias. ¿Por qué?»" },
        { it: "You explain it the nice way. What the manager actually {2} was that the deck was way too long; everybody else in the room laughed, and Diego had no idea. The rule of thumb: when the words are {3} but the situation isn't, it's probably sarcasm. If in doubt, just ask, «Are you messing with me?» Your follow-up advice is short: cut the deck in half, learn to {4} at yourself before anyone else does, and never trust a compliment with forty {5} in it. Diego replies with a single emoji: a smiling face sweating.", es: "Se lo explicas de la manera amable. Lo que el manager quería decir en realidad era que la presentación era demasiado larga; todos los demás en la sala se rieron, y Diego no se dio cuenta. La regla práctica: cuando las palabras son positivas pero la situación no lo es, probablemente es sarcasmo. Ante la duda, pregunta: «¿Me estás molestando?» Tu consejo de seguimiento es corto: corta la presentación a la mitad, aprende a reírte de ti mismo antes que los demás, y nunca confíes en un elogio con cuarenta diapositivas dentro. Diego responde con un solo emoji: una cara sonriente sudando." },
      ],
      gaps: [
        { options: ["fired", "outdid", "doubted"], answer: 1, why: "«Wow» ante cuarenta diapositivas replica el elogio sarcástico: te superaste (irónico: fuiste demasiado)." },
        { options: ["meant", "denied", "sang"], answer: 0, why: "«the deck was way too long» es lo que el manager quería decir de verdad." },
        { options: ["negative", "formal", "positive"], answer: 2, why: "La regla del pulgar contrasta palabras positivas con situaciones que no lo son." },
        { options: ["complain", "laugh", "apologize"], answer: 1, why: "«before anyone else does» describe la self-deprecation: reírse de uno mismo primero." },
        { options: ["dollars", "slides", "emails"], answer: 1, why: "El elogio venía de las cuarenta diapositivas: la broma vive ahí." },
      ],
    },
  ],

  "en-cu-b2-04": [
    {
      id: "cz-en-b2-04-1", title: "At the writing center", titleEs: "En el centro de escritura", minutes: 3,
      paragraphs: [
        { it: "Mr. Calloway reads your draft in silence, pen tapping. «First question: where's your thesis?» You point at the conclusion, and he smiles the smile of a man who has seen this a thousand times. «The classic mistake. In American academic writing, the thesis goes at the end of your {1}. Readers want your position up front.»", es: "El señor Calloway lee tu borrador en silencio, golpeando la mesa con el bolígrafo. «Primera pregunta: ¿dónde está tu tesis?» Señalas la conclusión, y él sonríe la sonrisa de un hombre que ha visto esto mil veces. «El error clásico. En la escritura académica americana, la tesis va al final de tu introducción. Los lectores quieren tu posición desde el principio.»" },
        { it: "Then comes the harder part. Your draft claims that internships are «essential for everyone», and he circles the word everyone twice. «You're making a big claim about every university in America. {2} it slightly.» You try: «It could be argued that internships should be required for most {3}?» He nods: «Now you sound like you've considered other views. That's academic {4} — it doesn't weaken your essay, it makes it smarter.» Before you leave, he adds one last rule: every body paragraph opens with a topic sentence that connects back to the {5}. «Redraft it and bring it Thursday. You're closer than you think.»", es: "Luego viene la parte difícil. Tu borrador afirma que las prácticas son «esenciales para todos», y él encierra en un círculo la palabra todos dos veces. «Estás haciendo una afirmación enorme sobre todas las universidades de EE. UU. Matízala un poco.» Intentas: «¿Se podría argumentar que las prácticas deberían ser exigidas en la mayoría de las carreras?» Él asiente: «Ahora suenas como alguien que consideró otras posturas. Eso es hedging académico: no debilita tu ensayo, lo hace más inteligente.» Antes de irte, añade una última regla: cada párrafo del cuerpo abre con una oración temática que se conecta con la tesis. «Reescríbelo y tráelo el jueves. Estás más cerca de lo que crees.»" },
      ],
      gaps: [
        { options: ["footnote", "introduction", "title"], answer: 1, why: "«Readers want your position up front»: la tesis cierra la introducción, no la conclusión." },
        { options: ["Delete", "Shout", "Hedge"], answer: 2, why: "«You're making a big claim» pide suavizar la afirmación: matizarla (hedging)." },
        { options: ["campuses", "decades", "majors"], answer: 2, why: "«required for most…» se matiza limitando las carreras, no los campus ni las décadas." },
        { options: ["cheating", "hedging", "rambling"], answer: 1, why: "«It could be argued that…» es el ejemplo exacto del matiz académico que él celebra." },
        { options: ["budget", "thesis", "deadline"], answer: 1, why: "«connects back» — cada oración temática vuelve a la tesis de la introducción." },
      ],
    },
    {
      id: "cz-en-b2-04-2", title: "Should internships be mandatory?", titleEs: "¿Deberían ser obligatorias las prácticas?", minutes: 3,
      paragraphs: [
        { it: "Last summer, I watched a classmate turn an internship into a full-time offer before senior year even started. Meanwhile, friends with perfect grades were sending resumes into the void. It could be argued that classrooms alone cannot teach what {1} teach: deadlines that hurt, feedback that is honest, and the daily rhythm of a real job.", es: "El verano pasado vi a un compañero convertir unas prácticas en una oferta de tiempo completo antes de que empezara siquiera el último año. Mientras tanto, amigos con notas perfectas enviaban currículums al vacío. Se podría argumentar que las aulas solas no pueden enseñar lo que enseñan los lugares de trabajo: fechas límite que duelen, feedback honesto y el ritmo diario de un trabajo real." },
        { it: "Studies tend to show that students who complete internships find jobs faster, and to some extent the numbers are convincing. However, a mandatory policy could {2} working students who need paid hours, not unpaid coffee runs. A reasonable position would require experience for most majors while offering {3} — research projects, clinic hours, co-op terms — for those who cannot afford a semester off. In the end, the question is not whether internships help, but who gets to {4} them. Any honest essay has to hold both ideas at once, and the best ones do it without losing their {5}.", es: "Los estudios tienden a mostrar que los estudiantes que completan prácticas encuentran trabajo más rápido, y hasta cierto punto los números convencen. Sin embargo, una política obligatoria podría sobrecargar a los estudiantes que trabajan y necesitan horas pagadas, no mandados de café sin sueldo. Una posición razonable exigiría experiencia para la mayoría de las carreras mientras ofrece alternativas — proyectos de investigación, horas de clínica, convenios cooperativos — para quienes no pueden pagar un semestre libre. Al final, la pregunta no es si las prácticas ayudan, sino quién puede acceder a ellas. Cualquier ensayo honesto debe sostener ambas ideas a la vez, y los mejores lo hacen sin perder su voz." },
      ],
      gaps: [
        { options: ["textbooks", "workplaces", "podcasts"], answer: 1, why: "«classrooms alone cannot teach» contrasta el aula con el mundo del trabajo real." },
        { options: ["delight", "burden", "shorten"], answer: 1, why: "«who need paid hours, not unpaid coffee runs» señala el peso injusto: sobrecargar a los que trabajan." },
        { options: ["penalties", "lectures", "alternatives"], answer: 2, why: "«research projects, clinic hours, co-op terms» son ejemplos de opciones sustitutivas." },
        { options: ["ban", "decorate", "access"], answer: 2, why: "«who cannot afford a semester off» plantea la desigualdad de quién puede acceder a las prácticas." },
        { options: ["patience", "funding", "voice"], answer: 2, why: "El buen ensayo matiza ambas caras sin perder personalidad: su voz." },
      ],
    },
    {
      id: "cz-en-b2-04-3", title: "Five paragraphs, one idea", titleEs: "Cinco párrafos, una idea", minutes: 2,
      paragraphs: [
        { it: "The five-paragraph essay is the backbone of American high school writing: an introduction with a thesis, three body paragraphs, and a conclusion. Critics say the format is {1}; fans answer that it teaches a valuable lesson — structure is clarity. Each paragraph tends to follow the same pattern: claim, {2}, analysis.", es: "El ensayo de cinco párrafos es la columna vertebral de la escritura en el high school americano: una introducción con tesis, tres párrafos de cuerpo y una conclusión. Los críticos dicen que el formato es rígido; los defensores replican que enseña una lección valiosa: la estructura es claridad. Cada párrafo suele seguir el mismo patrón: afirmación, evidencia, análisis." },
        { it: "College applications, however, ask for something different: the personal statement, where storytelling replaces the five-paragraph form. The philosophy doesn't change much. Whether you argue or narrate, the {3} still has to show up early, and specificity still beats generality. Admissions readers call it «show, don't tell»: instead of writing «I am hardworking», you describe the {4} that proves it — the 4 a.m. alarms, the extra shift, the free Saturdays given away. To some extent, both genres reward the same skill: saying something {5} in the first hundred words.", es: "Las aplicaciones universitarias, sin embargo, piden algo distinto: el personal statement, donde la narrativa reemplaza la forma de cinco párrafos. La filosofía no cambia mucho. Argumentes o narres, el punto tiene que aparecer temprano, y lo específico sigue ganando a lo genérico. Los lectores de admisiones lo llaman «muestra, no afirmes»: en vez de escribir «soy trabajador», describes la anécdota que lo demuestra — las alarmas de las 4 a. m., el turno extra, los sábados libres regalados. Hasta cierto punto, ambos géneros premian la misma habilidad: decir algo específico en las primeras cien palabras." },
      ],
      gaps: [
        { options: ["illegal", "rigid", "musical"], answer: 1, why: "«Critics say» introduce la objeción al formato fijo: demasiado rígido." },
        { options: ["gossip", "evidence", "silence"], answer: 1, why: "El patrón académico clásico: afirmación, evidencia y análisis." },
        { options: ["bibliography", "point", "illustration"], answer: 1, why: "«has to show up early»: la idea central del texto aparece pronto, como la tesis." },
        { options: ["anecdote", "invoice", "syllabus"], answer: 0, why: "«show, don't tell» pide una historia demostrativa en vez de un adjetivo." },
        { options: ["vague", "poetic", "specific"], answer: 2, why: "«specificity still beats generality»: algo específico en las primeras cien palabras." },
      ],
    },
  ],

  "en-cu-b2-05": [
    {
      id: "cz-en-b2-05-1", title: "The Mission loft", titleEs: "El loft del Mission", minutes: 3,
      paragraphs: [
        { it: "The loft is perfect: exposed brick, tall windows, one block from the best coffee in the Mission. It is also $4,200 a month, which is not perfect. Mr. Whitfield, the landlord, crosses his arms. «It's a hot unit. I've had three {1} this week.» You keep your voice friendly and firm: «I love the space. But I'm afraid that number won't {2} for us.»", es: "El loft es perfecto: ladrillo visto, ventanas altas, a una cuadra del mejor café del Mission. También cuesta 4.200 dólares al mes, lo cual no es perfecto. El señor Whitfield, el propietario, cruza los brazos. «Es una unidad muy codiciada. Tuve tres consultas esta semana.» Mantienes tu voz amable y firme: «Me encanta el espacio. Pero me temo que esa cifra no nos va a funcionar.»" },
        { it: "The negotiation takes twenty minutes and feels like a chess game. You offer a longer lease for a lower price; he counters with a smaller discount and a {3} — one month free, the classic San Francisco concession. The parking spot stays at $150, «not negotiable». In the end you do the math out loud: fourteen months at $4,050 with one month free brings the {4} rent to about $3,760. He checks your numbers, nods, and asks the only question that matters: «So, do we have a {5}?»", es: "La negociación toma veinte minutos y se siente como una partida de ajedrez. Ofreces un contrato más largo por un precio menor; él contraoferta con un descuento más pequeño y una concesión — un mes gratis, la clásica concesión de San Francisco. La plaza de garaje se queda en 150 dólares, «no negociable». Al final haces las cuentas en voz alta: catorce meses a 4.050 con un mes gratis dejan el alquiler efectivo en unos 3.760. Él revisa tus números, asiente, y hace la única pregunta que importa: «Entonces, ¿tenemos un trato?»" },
      ],
      gaps: [
        { options: ["lawsuits", "inquiries", "inspections"], answer: 1, why: "«It's a hot unit» — tres consultas de interesados esta semana." },
        { options: ["work", "rise", "matter"], answer: 0, why: "«I'm afraid that number won't…» es la objeción cortés estándar: no nos funciona." },
        { options: ["demotion", "concession", "eviction"], answer: 1, why: "«one month free, the classic San Francisco concession» repite la pista del contexto." },
        { options: ["imaginary", "future", "effective"], answer: 2, why: "El mes gratis reduce el costo real por mes: el alquiler efectivo, que calculas en voz alta." },
        { options: ["lease", "deal", "court"], answer: 1, why: "Tras negociar términos y verificar los números, la pregunta de cierre es si hay trato." },
      ],
    },
    {
      id: "cz-en-b2-05-2", title: "Everything is negotiable", titleEs: "Todo se negocia", minutes: 3,
      paragraphs: [
        { it: "In San Francisco, listed rent is where the conversation starts, not where it ends. If a unit has been sitting {1} for a month, landlords will often throw in concessions rather than cut the official price — because the number on paper affects the building's value. Common deals include one free month, waived parking fees, or a smaller {2}.", es: "En San Francisco, el alquiler del anuncio es donde empieza la conversación, no donde termina. Si una unidad lleva un mes vacía, los propietarios a menudo incluyen concesiones antes que recortar el precio oficial, porque el número en papel afecta el valor del edificio. Los tratos comunes incluyen un mes gratis, tarifas de estacionamiento perdonadas o un depósito menor." },
        { it: "Freshly listed lofts in hot neighborhoods are a different story: they get multiple {3} within hours, and begging is useless there. Savvy renters do the opposite: they bring proof of income, references, and a solid credit score, and they ask for {4} instead of discounts. As a result, polite firmness gets the best deals. The American landlord respects a tenant who says «I'm afraid that won't work for us» with a smile — and a {5} ready.", es: "Los lofts recién listados en barrios codiciados son otra historia: reciben múltiples solicitudes en horas, y ahí rogar no sirve de nada. Los inquilinos astutos hacen lo contrario: traen comprobantes de ingresos, referencias y un buen historial crediticio, y piden concesiones en lugar de descuentos. Como resultado, la firmeza cortés consigue los mejores tratos. El propietario americano respeta al inquilino que dice «Me temo que eso no nos va a funcionar» con una sonrisa — y una contraoferta lista." },
      ],
      gaps: [
        { options: ["furnished", "empty", "painted"], answer: 1, why: "La unidad que lleva tiempo sin ocupar presiona al propietario a ofrecer concesiones." },
        { options: ["ceiling", "deposit", "garden"], answer: 1, why: "«one free month, waived parking fees» enumera concesiones: el depósito menor cierra la lista." },
        { options: ["complaints", "inspections", "applications"], answer: 2, why: "«within hours» en barrios codiciados: múltiples solicitudes de renta." },
        { options: ["apologies", "concessions", "penalties"], answer: 1, why: "«instead of discounts»: piden concesiones (mes gratis, tarifas perdonadas), no rebajas del precio." },
        { options: ["lawsuit", "counteroffer", "moving truck"], answer: 1, why: "La firmeza cortés funciona con una contraoferta lista: la sonrisa más la propuesta." },
      ],
    },
    {
      id: "cz-en-b2-05-3", title: "Following up in writing", titleEs: "El seguimiento por escrito", minutes: 2,
      paragraphs: [
        { it: "Dear Mr. Whitfield, thank you for taking the time to show us the loft yesterday. I'd like to {1} the terms we discussed, so they are on record: $4,050 a month on a fourteen-month lease, one month free, and the parking spot at $150. We were glad to see that the garage fee, while firm, was the only part of the deal you wouldn't {2} on.", es: "Estimado señor Whitfield: gracias por tomarse el tiempo de mostrarnos el loft ayer. Quisiera confirmar los términos que discutimos, para que queden por escrito: 4.050 dólares al mes en un contrato de catorce meses, un mes gratis y la plaza de garaje a 150. Nos alegró ver que la tarifa del garaje, aunque firme, fue la única parte del trato que usted no movería." },
        { it: "As discussed, the effective rent works out to about $3,760 once the free month is {3} in. If the written agreement reflects these terms, we would be ready to sign by Friday. My roommate and I can send proof of {4} and references tomorrow morning, and we're happy to schedule the signing at your convenience. Please let us know if anything in the {5} needs clarifying. Best regards.", es: "Como hablamos, el alquiler efectivo queda en unos 3.760 una vez que el mes gratis se incorpora al cálculo. Si el acuerdo escrito refleja estos términos, estaríamos listos para firmar el viernes. Mi compañero de departamento y yo podemos enviar comprobantes de ingresos y referencias mañana por la mañana, y con gusto programamos la firma a su conveniencia. Háganos saber si algo del contrato necesita aclararse. Saludos cordiales." },
      ],
      gaps: [
        { options: ["deny", "confirm", "forget"], answer: 1, why: "«so they are on record» pide dejar los términos por escrito: confirmarlos." },
        { options: ["paint", "raise", "move"], answer: 2, why: "«while firm» — la tarifa del garaje fue lo único en lo que no cedería." },
        { options: ["thrown", "factored", "left"], answer: 1, why: "«works out to about $3,760»: el mes gratis se descuenta, se incorpora al cálculo." },
        { options: ["identity", "income", "friendship"], answer: 1, why: "El inquilino astuto trae comprobantes de ingresos y referencias a la cita." },
        { options: ["weather", "lease", "menu"], answer: 1, why: "«If the written agreement reflects these terms»: el contrato de alquiler por escrito." },
      ],
    },
  ],

  "en-cu-b2-06": [
    {
      id: "cz-en-b2-06-1", title: "Twenty thousand badges", titleEs: "Veinte mil credenciales", minutes: 3,
      paragraphs: [
        { it: "TechWave is twenty thousand people, and somehow you run into the one you know. Chelsea, product manager, last seen in Austin. «No way! What are the {1}?» she says, and the conference noise disappears for a minute. You two hit it off at a rooftop party two years ago and then {2} touch completely.", es: "TechWave son veinte mil personas, y de alguna manera te cruzas con la única que conoces. Chelsea, product manager, vista por última vez en Austin. «¡No puede ser! ¿Qué probabilidades había?», dice, y el ruido de la conferencia desaparece por un minuto. Ustedes dos se cayeron súper bien en una fiesta de azotea hace dos años y luego perdieron el contacto por completo." },
        { it: "She catches you up on her new fintech job, then waves someone over: DeShawn, founder of LedgerLeap, a startup drowning in integration requests. That is your exact lane. You exchange a few sentences, scan the QR code on his {3}, and promise to follow up next week. Chelsea has to run — «let's catch up properly at the happy hour!» — and you spend the next hour working the room with her {4} still ringing in your ears. That night, you send two follow-up messages before your head hits the {5}. Rule of thumb: within forty-eight hours, while the conversation is still fresh.", es: "Ella te pone al día sobre su nuevo trabajo en una fintech, luego hace señas a alguien: DeShawn, fundador de LedgerLeap, una startup ahogada en solicitudes de integración. Ese es exactamente tu terreno. Intercambian unas frases, escaneas el código QR de su credencial y prometes darle seguimiento la próxima semana. Chelsea se tiene que ir — «¡pongámonos al día bien en el happy hour!» — y pasas la siguiente hora trabajando la sala con su cumplido todavía sonando en tus oídos. Esa noche, envías dos mensajes de seguimiento antes de que tu cabeza toque la almohada. Regla práctica: dentro de cuarenta y ocho horas, mientras la conversación sigue fresca." },
      ],
      gaps: [
        { options: ["hours", "odds", "rules"], answer: 1, why: "«No way!» ante el encuentro casual: ¿qué probabilidades había?" },
        { options: ["kept", "strengthened", "lost"], answer: 2, why: "«and then» con tono de reproche amable: perdieron el contacto por completo." },
        { options: ["paycheck", "badge", "resume"], answer: 1, why: "En las conferencias americanas el código QR que enlaza a LinkedIn vive en la credencial." },
        { options: ["compliment", "warning", "invoice"], answer: 0, why: "«Working the room runs in your blood» es el cumplido de despedida que aún suena en tus oídos." },
        { options: ["keyboard", "ceiling", "pillow"], answer: 2, why: "«before your head hits the…» — la cabeza golpea la almohada antes de dormir." },
      ],
    },
    {
      id: "cz-en-b2-06-2", title: "It's who you know", titleEs: "Es a quién conoces", minutes: 3,
      paragraphs: [
        { it: "Ask ten Americans about networking and nine will quote the same line: it's not what you know, it's who you know. At conferences, the hallway conversations often matter more than the {1}. Business cards have mostly given way to badges with QR codes that link straight to LinkedIn, where connections work as a kind of social {2}.", es: "Pregunta a diez estadounidenses por el networking y nueve citarán la misma frase: no es lo que sabes, sino a quién conoces. En las conferencias, las conversaciones de pasillo a menudo importan más que las charlas principales. Las tarjetas de visita han cedido paso a credenciales con códigos QR que enlazan directo a LinkedIn, donde las conexiones funcionan como una especie de moneda social." },
        { it: "The unwritten rule is brutal: follow up within {3} hours, while the conversation is still fresh. A good follow-up mentions a specific {4}, offers something useful, and suggests one clear next step. Most people never send it, which is exactly why the ten percent who do stand out. One warning, though: American warmth is real but not always literal. «We should totally grab coffee sometime» is often friendliness, not a booking — the {5} proposal is your job. «How about Tuesday?»", es: "La regla no escrita es brutal: da seguimiento dentro de las cuarenta y ocho horas, mientras la conversación sigue fresca. Un buen seguimiento menciona un momento específico, ofrece algo útil y sugiere un próximo paso claro. La mayoría nunca lo envía, y exactamente por eso el diez por ciento que lo hace destaca. Una advertencia, eso sí: el calor americano es real pero no siempre literal. «Deberíamos tomar un café algún día» suele ser calidez, no una cita; la propuesta concreta es tu trabajo. «¿Qué tal el martes?»" },
      ],
      gaps: [
        { options: ["lunches", "flights", "keynotes"], answer: 2, why: "«the hallway conversations often matter more than» — lo que compite con las charlas principales del evento." },
        { options: ["debate", "currency", "weather"], answer: 1, why: "Las conexiones en LinkedIn funcionan como una moneda social." },
        { options: ["seventy-two", "a hundred", "forty-eight"], answer: 2, why: "«while the conversation is still fresh» y la regla estándar de las 48 horas." },
        { options: ["invoice", "moment", "title"], answer: 1, why: "El buen seguimiento menciona un detalle específico de la conversación compartida." },
        { options: ["vague", "concrete", "final"], answer: 1, why: "«How about Tuesday?» — la propuesta con fecha y hora la pones tú." },
      ],
    },
    {
      id: "cz-en-b2-06-3", title: "Great running into you", titleEs: "Qué gusto cruzarnos", minutes: 2,
      paragraphs: [
        { it: "Hi DeShawn, great running into you at TechWave yesterday — and congrats again on tripling the {1}. You mentioned you're drowning in integration requests; that's the exact problem my team spent last year solving. Here's the short version: we cut setup time in half at my company by {2} the intake process, and I'd be happy to share the playbook we used.", es: "Hola DeShawn, qué gusto cruzarnos en TechWave ayer — y felicitaciones de nuevo por triplicar el equipo. Mencionaste que están ahogados con solicitudes de integración; ese es exactamente el problema que mi equipo pasó el último año resolviendo. La versión corta: redujimos a la mitad el tiempo de instalación en mi empresa agilizando el proceso de admisión, y con gusto comparto el manual que usamos." },
        { it: "Would a twenty-minute call next Tuesday work? I'll bring the checklist we use for new {3}, and you can keep it either way — no strings attached. Also, tell Chelsea I said hi; her happy-hour recommendation was the best {4} of the whole conference. Either way, great meeting you, and good luck with the dinner tomorrow night. If anything changes on your end, just {5} me up and we'll find another slot.", es: "¿Te funcionaría una llamada de veinte minutos el próximo martes? Llevaré la lista de verificación que usamos para los nuevos socios, y te la puedes quedar de cualquier modo — sin compromiso. También salúdame a Chelsea; su recomendación del happy hour fue el mejor consejo de toda la conferencia. De un modo u otro, un gusto conocerte, y buena suerte con la cena de mañana. Si algo cambia de tu lado, solo escríbeme y encontramos otro horario." },
      ],
      gaps: [
        { options: ["rent", "team", "debt"], answer: 1, why: "«congrats again on tripling» — lo que DeShawn triplicó este año fue su equipo." },
        { options: ["ignoring", "printing", "streamlining"], answer: 2, why: "«cut setup time in half» se logra agilizando el proceso de admisión." },
        { options: ["taxes", "partners", "recipes"], answer: 1, why: "El checklist de incorporación sirve para los nuevos socios o plataformas conectadas." },
        { options: ["bill", "advice", "joke"], answer: 1, why: "La recomendación del happy hour que hizo Chelsea fue el mejor consejo del evento." },
        { options: ["miss", "hit", "call"], answer: 1, why: "«hit me up» = escríbeme: la fórmula casual para avisar sin formalidad." },
      ],
    },
  ],

  "en-cu-b2-07": [
    {
      id: "cz-en-b2-07-1", title: "Waffles and theories", titleEs: "Waffles y teorías", minutes: 3,
      paragraphs: [
        { it: "Sunday, ten a.m., and your apartment smells like waffles. Jasmine and Connor arrive with printouts — actual paper printouts — of the Mile Marker 9 timeline. «Spoiler alert: they never found her», Jasmine announces, as if you hadn't listened to every episode. Connor spreads the pages on the counter: «The {1} doesn't add up. He said he was watching the game, but a witness saw his truck near mile marker 9 around midnight.»", es: "Domingo, diez de la mañana, y tu apartamento huele a waffles. Jasmine y Connor llegan con impresiones — impresiones de papel de verdad — de la cronología de Mile Marker 9. «Alerta de spoiler: nunca la encontraron», anuncia Jasmine, como si no hubieras escuchado todos los episodios. Connor extiende las páginas sobre el mostrador: «La cronología no cuadra. Dijo que estaba viendo el partido, pero un testigo vio su camioneta cerca del kilómetro 9 alrededor de medianoche.»" },
        { it: "You play defense, as always. «Still, that doesn't {2} anything. He might have driven past the marker on his way home.» Jasmine stabs a waffle with her fork: «And his phone was off all night. He must have turned it off on {3}.» Connor, calm, delivers the kill shot: «It was 1998, Jasmine. Nobody had smartphones. He can't have turned off a phone he didn't {4}.» The debate goes on for an hour, three theories on the table, zero agreements. By noon, the waffles are gone and the case is as cold as ever. Jasmine leaves with the printouts under her arm and one last line: «Until they find the missing {5}, we'll never know.»", es: "Juegas a la defensiva, como siempre. «Aun así, eso no prueba nada. Podría haber pasado por el marcador camino a casa.» Jasmine ensarta un waffle con su tenedor: «Y su teléfono estuvo apagado toda la noche. Debe de haberlo apagado a propósito.» Connor, tranquilo, da el golpe letal: «Era 1998, Jasmine. Nadie tenía smartphones. No puede haber apagado un teléfono que no tenía.» El debate sigue una hora, tres teorías sobre la mesa, cero acuerdos. Al mediodía, los waffles se acabaron y el caso está tan frío como siempre. Jasmine se va con las impresiones bajo el brazo y una última frase: «Hasta que encuentren el tapacubos desaparecido, no lo sabremos.»" },
      ],
      gaps: [
        { options: ["thermostat", "timeline", "recipe"], answer: 1, why: "Las impresiones del caso y el testimonio que contradice la coartada: la cronología no cuadra." },
        { options: ["cost", "prove", "weigh"], answer: 1, why: "«Still» introduce tu defensa: un avistamiento no prueba nada." },
        { options: ["accident", "sale", "purpose"], answer: 2, why: "Apagarlo «all night» deliberadamente, según Jasmine: a propósito." },
        { options: ["see", "own", "like"], answer: 1, why: "En 1998 nadie tenía smartphones: no podía apagar un teléfono que no poseía." },
        { options: ["waffle", "episode", "hubcap"], answer: 2, why: "La prueba pendiente del caso mencionada en el foro: el tapacubos desaparecido." },
      ],
    },
    {
      id: "cz-en-b2-07-2", title: "America's favorite whodunit", titleEs: "El whodunit favorito de Estados Unidos", minutes: 3,
      paragraphs: [
        { it: "Mile Marker 9 has spent twenty-six weeks at the top of the American podcast charts. The host revisits a 1998 disappearance along a lonely {1} of Nevada highway, and the country listens while doing the dishes. Listeners have sent thousands of tips; one of them actually {2} the case, which is not unusual anymore.", es: "Mile Marker 9 lleva veintiséis semanas en lo más alto de las listas de podcasts americanos. El presentador revisita una desaparición de 1998 en un tramo solitario de carretera de Nevada, y el país escucha mientras lava los platos. Los oyentes han enviado miles de pistas; una de ellas de hecho reabrió el caso, lo cual ya no es inusual." },
        { it: "The genre has real effects: units that review wrongful convictions, a boom in forensic science careers, and also a darker side — fans harassing the persons of {3} named in the show. Critics argue the genre {4} from real tragedies; fans counter that it keeps forgotten cases alive. Either way, true crime has become America's favorite way to think out loud about {5}. The sheriff's office has one request: enjoy the show, but leave the neighbors alone.", es: "El género tiene efectos reales: unidades que revisan condenas erróneas, un auge de las carreras de ciencias forenses, y también un lado oscuro — fans acosando a las personas de interés mencionadas en el programa. Los críticos argumentan que el género se lucra de tragedias reales; los fans replican que mantiene vivos casos olvidados. De un modo u otro, el true crime se ha vuelto la forma favorita de Estados Unidos de reflexionar en voz alta sobre la justicia. La oficina del sheriff tiene una sola petición: disfruten el programa, pero dejen en paz a los vecinos." },
      ],
      gaps: [
        { options: ["suburb", "stretch", "station"], answer: 1, why: "«lonely… of Nevada highway» — un tramo solitario de carretera." },
        { options: ["closed", "solved", "reopened"], answer: 2, why: "«which is not unusual anymore» y el programa sigue en el aire: la pista reabrió el caso, no lo cerró ni lo resolvió." },
        { options: ["honor", "trade", "interest"], answer: 2, why: "«named in the show» — las personas de interés, los sospechosos no formales del léxico del género." },
        { options: ["learns", "hides", "profits"], answer: 2, why: "«Critics argue the genre… from real tragedies» — la crítica es que se lucra del dolor real." },
        { options: ["weather", "grammar", "justice"], answer: 2, why: "«units that review wrongful convictions» — la reflexión del género gira sobre la justicia." },
      ],
    },
    {
      id: "cz-en-b2-07-3", title: "My theory (fan forum post)", titleEs: "Mi teoría (post del foro de fans)", minutes: 2,
      paragraphs: [
        { it: "Posted by waffle_detective: Here's my theory, and I think the timeline backs it up. She finished her shift at eleven and was {1} home when the storm hit. By the time the police searched the road, the car had already been {2} — and that detail matters. Whoever moved it must have known that stretch of highway really well; it's pitch black out there, and there are no lights for miles.", es: "Publicado por waffle_detective: Aquí está mi teoría, y creo que la cronología la respalda. Ella terminó su turno a las once e iba conduciendo a casa cuando golpeó la tormenta. Para cuando la policía registró la carretera, el auto ya había sido movido — y ese detalle importa. Quien lo movió debe de haber conocido ese tramo de carretera muy bien; ahí afuera es negro total y no hay luces por millas." },
        { it: "So, the three theories on this thread: the husband, a local, or a trucker passing through. The husband can't have {3} the car — he was two counties away that night, and the witness confirms it. A stranger might have seen the car, but strangers leave {4}; whoever did this covered their tracks too well. That leaves a local. If they ever find the missing {5}, I'll change my mind, but until then: local, and I'll die on this hill. 112 comments.", es: "Así que las tres teorías de este hilo: el esposo, un local o un camionero de paso. El esposo no puede haber movido el auto — estaba a dos condados de distancia esa noche, y el testigo lo confirma. Un desconocido podría haber visto el auto, pero los desconocidos dejan rastros; quien hizo esto cubrió sus huellas demasiado bien. Eso deja a un local. Si alguna vez encuentran el tapacubos desaparecido, cambiaré de opinión, pero hasta entonces: local, y moriré en esta colina. 112 comentarios." },
      ],
      gaps: [
        { options: ["walking", "driving", "flying"], answer: 1, why: "El auto abandonado en la carretera implica que ella iba conduciendo a casa." },
        { options: ["washed", "moved", "sold"], answer: 1, why: "«that detail matters» — el auto ya había sido desplazado antes de la búsqueda policial." },
        { options: ["bought", "moved", "missed"], answer: 1, why: "La coartada de dos condados hace imposible que él desplazara el auto esa noche." },
        { options: ["receipts", "invitations", "traces"], answer: 2, why: "«covered their tracks too well» contrasta con los rastros que un desconocido sí dejaría." },
        { options: ["episode", "badge", "hubcap"], answer: 2, why: "La prueba física pendiente del caso: el tapacubos desaparecido cambiaría la teoría." },
      ],
    },
  ],

  "en-cu-b2-08": [
    {
      id: "cz-en-b2-08-1", title: "Tell me about a challenge", titleEs: "Cuéntame un desafío", minutes: 3,
      paragraphs: [
        { it: "Ms. Alvarez closes her laptop halfway, which means the real interview is starting. «Tell me about a {1} you faced this year and how you handled it.» You take a breath and structure the answer before speaking: situation, task, action, {2}. That little mental checklist is the whole game.", es: "La señora Alvarez cierra su computadora a medias, lo que significa que la entrevista real está comenzando. «Cuéntame un desafío que enfrentaste este año y cómo lo manejaste.» Tomas aire y estructuras la respuesta antes de hablar: situación, tarea, acción, resultado. Esa pequeña lista mental es todo el juego." },
        { it: "You walk her through it: the biggest client threatened to leave over three-day response times; you were asked to {3} it around in one quarter. You spearheaded a triage system, streamlined the intake process from four people to two, and set up a real-time dashboard. Within six weeks, response times dropped from three days to four {4}. The client renewed for two more years. Then comes the hard question: «What would your critics say?» You don't flinch: «They'd say I move too fast. I've learned to slow down and get {5} first.» She writes something down. That, you hope, was a good sign.", es: "La guías por la historia: el mayor cliente amenazó con irse por tiempos de respuesta de tres días; te pidieron revertirlo en un trimestre. Lideraste un sistema de clasificación, agilizaste el proceso de admisión de cuatro personas a dos y montaste un panel en tiempo real. En seis semanas, los tiempos bajaron de tres días a cuatro horas. El cliente renovó por dos años más. Luego llega la pregunta difícil: «¿Qué dirían tus críticos?» No titubeas: «Dirían que voy demasiado rápido. He aprendido a frenar y conseguir el apoyo del equipo primero.» Ella anota algo. Eso, esperas, fue una buena señal." },
      ],
      gaps: [
        { options: ["vacation", "challenge", "birthday"], answer: 1, why: "La pregunta conductual clásica de la entrevista: «Tell me about a challenge»." },
        { options: ["hobby", "result", "legend"], answer: 1, why: "«situation, task, action» es el método STAR: la R final es result, con números." },
        { options: ["toss", "tune", "turn"], answer: 2, why: "«in one quarter» — te pidieron revertir la situación: turn it around." },
        { options: ["days", "weeks", "hours"], answer: 2, why: "La mejora fue de tres días a cuatro horas, el dato que cierra la historia." },
        { options: ["layoffs", "bonuses", "buy-in"], answer: 2, why: "«slow down and get… first» — conseguir el apoyo de los demás antes de moverse." },
      ],
    },
    {
      id: "cz-en-b2-08-2", title: "Past behavior predicts", titleEs: "El comportamiento pasado predice", minutes: 3,
      paragraphs: [
        { it: "American interviewers love behavioral questions, and the logic is simple: past {1} predicts future performance. «Tell me about a challenge» is not small talk; it's a data request. The STAR method — Situation, Task, Action, Result — became the standard answer {2} because it forces candidates to tell a story with a shape instead of a rambling anecdote.", es: "A los entrevistadores americanos les encantan las preguntas conductuales, y la lógica es simple: el comportamiento pasado predice el desempeño futuro. «Cuéntame un desafío» no es small talk; es una solicitud de datos. El método STAR — Situación, Tarea, Acción, Resultado — se convirtió en la estructura estándar de respuesta porque obliga a los candidatos a contar una historia con forma en vez de una anécdota dispersa." },
        { it: "Strong candidates speak in first person and {3} results whenever possible: «cut response times by ninety percent» lands harder than «made things better». Hiring managers also listen for honesty — a real weakness with a lesson beats a fake {4} every time, and everyone can smell a humblebrag from across the table. One last cultural note: silence is allowed. If you can't think of a story on the spot, «Give me a second to think of the best {5}» sounds thoughtful, not weak.", es: "Los candidatos fuertes hablan en primera persona y cuantifican resultados siempre que pueden: «reduje los tiempos de respuesta un noventa por ciento» aterriza más fuerte que «mejoré las cosas». Los managers de contratación también escuchan honestidad: una debilidad real con lección le gana a una fortaleza falsa todas las veces, y todos huelen un humblebrag desde el otro lado de la mesa. Una última nota cultural: el silencio está permitido. Si no se te ocurre una historia al instante, «Dame un segundo para pensar el mejor ejemplo» suena reflexivo, no débil." },
      ],
      gaps: [
        { options: ["salary", "behavior", "education"], answer: 1, why: "«predicts future performance» — la lógica conductual: lo que hiciste predice lo que harás." },
        { options: ["penalty", "structure", "software"], answer: 1, why: "STAR «forces candidates to tell a story with a shape»: es una estructura de respuesta." },
        { options: ["hide", "decorate", "quantify"], answer: 2, why: "«cut response times by ninety percent» — el candidato fuerte pone números a sus logros." },
        { options: ["vacation", "strength", "keyboard"], answer: 1, why: "«a real weakness with a lesson beats a fake…» — la fortaleza falsa del humblebrag." },
        { options: ["excuse", "example", "invoice"], answer: 1, why: "«to think of the best…» — la pausa busca el mejor ejemplo, no una excusa." },
      ],
    },
    {
      id: "cz-en-b2-08-3", title: "The thank-you email", titleEs: "El correo de agradecimiento", minutes: 2,
      paragraphs: [
        { it: "Subject: Thank you — Team Lead interview. Dear Ms. Alvarez, thank you for the conversation this morning. I left even more excited about the role, especially after your description of the {1} review coming next quarter. Hearing how the team works — flat hierarchy, direct feedback, monthly retrospectives — matched exactly what I've been looking for in my next step.", es: "Asunto: Gracias — entrevista Team Lead. Estimada señora Alvarez: gracias por la conversación de esta mañana. Salí aún más entusiasmado con el puesto, sobre todo después de su descripción de la revisión de procesos que viene el próximo trimestre. Escuchar cómo trabaja el equipo — jerarquía plana, feedback directo, retrospectivas mensuales — coincidió exactamente con lo que busco en mi siguiente paso." },
        { it: "To add one number I mentioned without the figure: we cut response times from three days to four hours, and the client renewed for two years — the dashboard from that project is still in {2} today. I've also attached the one-pager you asked about, including the steps we took to get {3} from the senior reps early. If it would be helpful, I'm happy to share how I'd {4} the same triage approach to the support team in the first ninety days. Thanks again for your time and {5}. Best regards.", es: "Para añadir un número que mencioné sin la cifra: redujimos los tiempos de respuesta de tres días a cuatro horas, y el cliente renovó por dos años — el panel de ese proyecto sigue vigente hoy. También adjunto la página que pidió, incluyendo los pasos que dimos para conseguir el apoyo de los representantes senior temprano. Si fuera útil, con gusto comparto cómo aplicaría el mismo enfoque de clasificación al equipo de soporte en los primeros noventa días. Gracias de nuevo por su tiempo y consideración. Saludos cordiales." },
      ],
      gaps: [
        { options: ["weather", "process", "cafeteria"], answer: 1, why: "«coming next quarter» — la revisión de procesos planificada que ella describió." },
        { options: ["storage", "place", "ruins"], answer: 1, why: "«still in… today» cierra el resultado con vigencia: sigue en su lugar." },
        { options: ["pushback", "overtime", "buy-in"], answer: 2, why: "«from the senior reps early» — el apoyo temprano que mencionaste en la entrevista." },
        { options: ["deny", "apply", "sell"], answer: 1, why: "«the same triage approach to the support team» — llevar el mismo método a otro equipo." },
        { options: ["congratulations", "consideration", "compensation"], answer: 1, why: "«Thanks again for your time and…» — el cierre estándar del correo: consideración." },
      ],
    },
  ],

  "en-cu-b2-09": [
    {
      id: "cz-en-b2-09-1", title: "The ninety-minute line", titleEs: "La fila de noventa minutos", minutes: 3,
      paragraphs: [
        { it: "The line outside Roux wraps around the block, and the hostess quotes ninety minutes like a weather forecast. Kayla is {1} — she has been talking about the gumbo for a week. Trey looks at the queue the way other people look at tax forms. «Ninety minutes for jambalaya», he mutters. «My aunt makes it better, and she doesn't charge thirty-four {2}.»", es: "La fila afuera de Roux da la vuelta a la manzana, y la anfitriona cita noventa minutos como un pronóstico del tiempo. Kayla está encantada — lleva una semana hablando del gumbo. Trey mira la cola como otros miran los formularios de impuestos. «Noventa minutos por un jambalaya», murmura. «Mi tía lo hace mejor, y no cobra treinta y cuatro dólares.»" },
        { it: "Inside, the debate starts before the appetizers arrive. Kayla's shrimp are «absolutely {3}», Trey's jambalaya is «fine, decent, even», and the chairs get bumped all night by servers in a room built for half as many people. On the walk home, you offer the diplomatic verdict: the food lives up to the hype, the {4} does not. Four stars — mention the beignets and the wait both. Trey agrees for once. «Overrated would be a lie», he admits. «The beignets were honestly {5}.»", es: "Adentro, el debate empieza antes de que lleguen los entrantes. Los camarones de Kayla están «absolutamente deliciosos», el jambalaya de Trey está «bien, decente, incluso», y las sillas reciben empujones toda la noche de meseros en una sala hecha para la mitad de personas. En el camino a casa, ofreces el veredicto diplomático: la comida está a la altura del hype, la espera no. Cuatro estrellas — menciona los beignets y la fila. Trey está de acuerdo por una vez. «Sobrevalorado sería mentir», admite. «Los beignets estuvieron honestamente espectaculares.»" },
      ],
      gaps: [
        { options: ["annoyed", "asleep", "thrilled"], answer: 2, why: "«has been talking about the gumbo for a week»: Kayla está encantada con la visita." },
        { options: ["hours", "dollars", "blocks"], answer: 1, why: "«she doesn't charge» — la queja de Trey es el precio del plato." },
        { options: ["disgusting", "mouthwatering", "frozen"], answer: 1, why: "El elogio entusiasta de Kayla, el opuesto polar del escepticismo de Trey." },
        { options: ["music", "parking", "wait"], answer: 2, why: "La cola de noventa minutos del inicio es la parte que no está a la altura." },
        { options: ["boring", "stunning", "cheap"], answer: 1, why: "Trey concede al final: los beignets estuvieron espectaculares, aunque el resto no lo convenza." },
      ],
    },
    {
      id: "cz-en-b2-09-2", title: "The power of the stars", titleEs: "El poder de las estrellas", minutes: 3,
      paragraphs: [
        { it: "In Portland, a restaurant's rating can be its lifeblood or its {1} sentence. Yelp and Google reviews decide where tourists line up and which kitchens go dark. Owners respond publicly to one-star complaints, because silence {2} as guilt. The stakes explain the tone: this is a city that takes its brunch seriously.", es: "En Portland, la calificación de un restaurante puede ser su sustento o su sentencia de muerte. Las reseñas de Yelp y Google deciden dónde hacen fila los turistas y qué cocinas cierran. Los dueños responden públicamente a las quejas de una estrella, porque el silencio se lee como culpa. Lo que está en juego explica el tono: esta es una ciudad que se toma el brunch en serio." },
        { it: "Savvy readers ignore the extremes and trust the three- and four-star reviews. A glowing five-star rave with zero complaints often smells like a {3} of the owner; a furious one-star screed smells like a bad Tuesday. The credible {4} balances a specific strength with an honest weakness: the dish, the price, the wait. And one local third rail: tipping. The eighteen-to-twenty-percent tip is sacred here, and reviews that {5} about it usually get defensive replies from the staff.", es: "Los lectores astutos ignoran los extremos y confían en las reseñas de tres y cuatro estrellas. Una reseña radiante de cinco estrellas sin quejas a menudo huele a amigo del dueño; un ataque furioso de una estrella huele a un mal martes. La reseña creíble equilibra una fortaleza específica con una debilidad honesta: el plato, el precio, la espera. Y un tercer riel local: la propina. El dieciocho a veinte por ciento es sagrado aquí, y las reseñas que se quejan de ella suelen recibir respuestas defensivas del personal." },
      ],
      gaps: [
        { options: ["life", "death", "light"], answer: 1, why: "«lifeblood or…» pide la metáfora opuesta: sentencia de muerte." },
        { options: ["sings", "reads", "pays"], answer: 1, why: "Los dueños responden porque el silencio se interpreta como culpa." },
        { options: ["rival", "relative", "friend"], answer: 2, why: "«smells like a…» — la reseña perfecta sin quejas huele a amigo del dueño." },
        { options: ["recipe", "review", "menu"], answer: 1, why: "«balances a specific strength with an honest weakness» describe la reseña equilibrada." },
        { options: ["dream", "complain", "forget"], answer: 1, why: "El tema sensible: quejarse de la propina recibe respuestas defensivas." },
      ],
    },
    {
      id: "cz-en-b2-09-3", title: "Four stars for Roux", titleEs: "Cuatro estrellas para Roux", minutes: 2,
      paragraphs: [
        { it: "Four stars for Roux, and here's the math. The gumbo and the beignets were absolutely {1} — easily the best in Portland, and I've done the research. The service was genuinely warm, the portions generous, and the sweet tea came with a refill before I asked. If the food were the whole story, five stars, no {2}.", es: "Cuatro estrellas para Roux, y aquí están las cuentas. El gumbo y los beignets estaban absolutamente deliciosos — fácilmente los mejores de Portland, y he hecho la investigación. El servicio fue genuinamente cálido, las porciones generosas, y el té dulce llegó con relleno antes de pedirlo. Si la comida fuera toda la historia, cinco estrellas, sin duda." },
        { it: "But the story has a wait in it: ninety minutes on a Tuesday, in a room so {3} that the servers bumped my chair all night. The jambalaya, while pretty decent, is a bit {4} at thirty-four dollars — my aunt's version costs a Sunday visit. So: go early, order the beignets first, and you'll leave happy. Just don't expect the {5} to be quiet. Worth it? On a weekend, absolutely. On a weeknight, I'd rather wait for the hype to cool.", es: "Pero la historia incluye una espera: noventa minutos un martes, en una sala tan abarrotada que los meseros chocaron mi silla toda la noche. El jambalaya, aunque bastante decente, es un poco caro a treinta y cuatro dólares — la versión de mi tía cuesta una visita dominical. Así que: ve temprano, pide los beignets primero, y saldrás feliz. Solo no esperes que la sala esté tranquila. ¿Vale la pena? Un fin de semana, absolutamente. Un día entre semana, prefiero esperar a que baje el hype." },
      ],
      gaps: [
        { options: ["average", "mouthwatering", "expensive"], answer: 1, why: "«easily the best in Portland» — el elogio extremo de la reseña equilibrada." },
        { options: ["refund", "reservation", "question"], answer: 2, why: "«If the food were the whole story, five stars, no…» — sin duda alguna." },
        { options: ["empty", "crowded", "vast"], answer: 1, why: "«the servers bumped my chair all night» — una sala abarrotada de gente." },
        { options: ["cheap", "bland", "pricey"], answer: 2, why: "«at thirty-four dollars» justifica la crítica suave de precio: un poco caro." },
        { options: ["bill", "room", "podcast"], answer: 1, why: "Los empujones y el ruido: no esperes que la sala del restaurante esté tranquila." },
      ],
    },
  ],

  "en-cu-b2-10": [
    {
      id: "cz-en-b2-10-1", title: "Mission something", titleEs: "Mission algo", minutes: 3,
      paragraphs: [
        { it: "You arrive forty minutes late to the barbecue because your GPS, in its wisdom, sent you to Mission Bay instead of Mission Drive. Skylar waves it off: «No big {1}. Every street here is called Mission something.» Jordan hands you a plate of ribs that have been smoking since noon. «Low and slow was a piece of {2}», he says. «The hard part was Avery eating half of them before you showed up.»", es: "Llegas cuarenta minutos tarde a la barbacoa porque tu GPS, en su sabiduría, te mandó a Mission Bay en vez de Mission Drive. Skylar lo resta importancia: «No pasa nada. Aquí cada calle se llama Mission algo». Jordan te pasa un plato de costillas que llevan ahumándose desde el mediodía. «A fuego lento fue pan comido», dice. «Lo difícil fue que Avery se comiera la mitad antes de que llegaras.»" },
        { it: "The conversation moves fast and never lands. Avery reports that the guy Dakota has been dating just {3} her after three weeks — read her messages, never replied, poof. Jordan shrugs: «She bailed on our beach day to see him too. Karma works fast.» You ask if Dakota wants to join on Saturday, and the answer comes as a chorus: «Beach, round two, Jordan brings the grill.» «Tell her I'm {4}», you say, and Skylar saves your number with a promise: «If your GPS {5} you again, just hit me up and I'll send you the pin.»", es: "La conversación va rápido y nunca aterriza. Avery informa que el tipo con el que Dakota salía simplemente la dejó plantada sin explicación después de tres semanas — leía sus mensajes, nunca contestaba, poof. Jordan se encoge de hombros: «Ella también nos plantó el día de playa por verlo a él. El karma funciona rápido.» Preguntas si Dakota quiere sumarse el sábado, y la respuesta llega en coro: «Playa, segunda ronda, Jordan trae la parrilla.» «Dile que me apunto», dices, y Skylar guarda tu número con una promesa: «Si tu GPS te vuelve a traicionar, solo escríbeme y te mando la ubicación.»" },
      ],
      gaps: [
        { options: ["problem", "deal", "city"], answer: 1, why: "«No big deal» = no pasa nada: la fórmula fija para quitarle importancia al retraso." },
        { options: ["bread", "meat", "cake"], answer: 2, why: "«was a piece of…» — la expresión fija: pan comido (piece of cake)." },
        { options: ["promoted", "ghosted", "moved"], answer: 1, why: "«read her messages, never replied, poof» describe el ghosting: desapareció sin explicación." },
        { options: ["up", "down", "out"], answer: 1, why: "«I'm down» = me apunto: el entusiasmo casual por el plan del sábado." },
        { options: ["forgave", "paid", "betrayed"], answer: 2, why: "El GPS te mandó al lugar equivocado al llegar: si te vuelve a traicionar." },
      ],
    },
    {
      id: "cz-en-b2-10-2", title: "Yesterday's rad is today's cringe", titleEs: "El rad de ayer es el cringe de hoy", minutes: 3,
      paragraphs: [
        { it: "American slang turns over fast: yesterday's «totally rad» is today's «cringe». Much of the newest slang travels through social media and borrows heavily from Black English, and linguists point out that using a community's slang can signal belonging — or {1}. For a learner, the wisest move is patience: understand first, produce later.", es: "El slang americano rota rápido: el «totally rad» de ayer es el «cringe» de hoy. Mucho del slang más nuevo viaja por redes sociales y toma prestado en gran medida del inglés afroamericano, y los lingüistas señalan que usar el slang de una comunidad puede señalar pertenencia — o allanamiento. Para un estudiante, la jugada más sabia es la paciencia: entender primero, producir después." },
        { it: "Meanwhile, the safest expressions have been {2} for decades: hang out, no big deal, piece of cake, hit me up. They won't impress anyone, but they won't embarrass anyone either. The golden rule at work is a simple test: if you'd write it in a {3} to a friend but never in an email to your boss, keep it out of the interview. Register, not vocabulary, is the real skill — the same person says «I gotta bail» on Saturday and «Unfortunately, I have a {4}» on Monday, and expects you to do the same. When in doubt, stay {5}: it never goes out of style.", es: "Mientras tanto, las expresiones más seguras llevan décadas estables: hang out, no big deal, piece of cake, hit me up. No van a impresionar a nadie, pero tampoco van a avergonzar a nadie. La regla de oro en el trabajo es una prueba simple: si lo escribirías en un mensaje a un amigo pero jamás en un email a tu jefe, no lo lleves a la entrevista. El registro, no el vocabulario, es la habilidad real: la misma persona dice «me tengo que ir» el sábado y «Lamentablemente, tengo un conflicto» el lunes, y espera que tú hagas lo mismo. Ante la duda, quédate en el neutro: jamás pasa de moda." },
      ],
      gaps: [
        { options: ["belonging", "studying", "trespassing"], answer: 2, why: "«signal belonging — or…» pide el contraste: allanamiento, usar la jerga fuera de lugar." },
        { options: ["banned", "stable", "renamed"], answer: 1, why: "«for decades» describe expresiones que llevan décadas intactas: estables." },
        { options: ["contract", "text", "memo"], answer: 1, why: "La prueba compara el mensaje a un amigo con el email al jefe." },
        { options: ["party", "promotion", "conflict"], answer: 2, why: "La versión del lunes para la jefa es el registro formal: tengo un conflicto." },
        { options: ["loud", "neutral", "silent"], answer: 1, why: "«it never goes out of style»: el registro neutro jamás desentona." },
      ],
    },
    {
      id: "cz-en-b2-10-3", title: "Same plan, two registers", titleEs: "Mismo plan, dos registros", minutes: 2,
      paragraphs: [
        { it: "CASUAL, group chat: «Yo! Beach day Saturday, round two. Jordan's bringing the {1} again, Skylar's on snacks. I'm down if you are — hit me up and I'll send the pin. No pressure, but it's gonna be awesome.» Seventeen words of slang, zero confusion, and everyone replies with thumbs.", es: "CASUAL, chat de grupo: «¡Yo! Día de playa el sábado, segunda ronda. Jordan trae la parrilla otra vez, Skylar se encarga de los snacks. Me apunto si tú te apuntas — escríbeme y te mando la ubicación. Sin presión, pero va a estar increíble.» Diecisiete palabras de jerga, cero confusión, y todos responden con pulgares." },
        { it: "NEUTRAL, work email: «Hi Dana, we're planning a beach day this Saturday and we'd {2} for you to join us. Jordan will bring his grill, and we'll meet at ten near the pier. Let me know if you can {3} it, and I'll send you the exact location.» Same plan, same warmth, two {4}. The exercise looks trivial until you try it: the casual version breaks if you remove the slang, and the neutral version breaks if you add any. That's the B2 {5} — not knowing words, but knowing where they live.", es: "NEUTRAL, correo de trabajo: «Hola Dana, estamos planeando un día de playa este sábado y nos encantaría que te unas. Jordan traerá su parrilla y nos vemos a las diez cerca del muelle. Avísame si puedes venir y te mando la ubicación exacta.» Mismo plan, misma calidez, dos registros. El ejercicio parece trivial hasta que lo intentas: la versión casual se rompe si le quitas la jerga, y la neutral se rompe si le añades alguna. Esa es la habilidad del B2: no saber palabras, sino saber dónde viven." },
      ],
      gaps: [
        { options: ["desk", "laptop", "grill"], answer: 2, why: "Jordan lleva asando costillas desde el mediodía: trae la parrilla otra vez." },
        { options: ["hate", "love", "charge"], answer: 1, why: "«for you to join us» — nos encantaría que te unas: la fórmula neutral de invitación." },
        { options: ["miss", "make", "postpone"], answer: 1, why: "«if you can make it» = si puedes venir: la fórmula neutral por excelencia." },
        { options: ["calendars", "registers", "budgets"], answer: 1, why: "«Same plan, same warmth» — lo único que cambia es el registro: casual vs neutral." },
        { options: ["exam", "skill", "route"], answer: 1, why: "«not knowing words, but knowing where they live» define la habilidad, no un conocimiento." },
      ],
    },
  ],

  "en-cu-b2-11": [
    {
      id: "cz-en-b2-11-1", title: "Two minutes at the mic", titleEs: "Dos minutos en el micrófono", minutes: 3,
      paragraphs: [
        { it: "The community center in Phoenix smells like coffee and sunscreen. Councilwoman Hart opens the hearing on Solar Ridge with the usual rules: state your name, keep it to two minutes. Roy goes first, red-faced: «Due to this project, my utility {1} is going to go up. Everything gets passed on to us, the {2}!» Dr. Moore, an energy engineer, answers with data: bills were driven up by gas prices last summer, not solar.", es: "El centro comunitario de Phoenix huele a café y protector solar. La concejala Hart abre la audiencia sobre Solar Ridge con las reglas de siempre: digan su nombre, limítense a dos minutos. Roy va primero, rojo de ira: «¡Debido a este proyecto, mi factura de luz va a subir! ¡Todo se nos traslada a nosotros, los usuarios!» La doctora Moore, ingeniera energética, responde con datos: las facturas subieron por los precios del gas el verano pasado, no por la solar." },
        { it: "Your turn. You keep your voice low and your numbers high: the power {3} was designed decades ago and is being pushed to its limits by longer summers. As a result, blackouts are becoming more frequent. The project would be financed by federal tax credits, and the agreement was written to {4} rate increases at one percent a year. You close with the chain: due to old infrastructure, we face more blackouts; as a result, we need {5}; this plan leads to lower risk, not higher bills. Hart thanks you. Roy, grudgingly, claps.", es: "Tu turno. Mantienes la voz baja y los números altos: la red eléctrica fue diseñada hace décadas y está siendo llevada a sus límites por veranos más largos. Como resultado, los apagones son más frecuentes. El proyecto sería financiado con créditos fiscales federales, y el acuerdo fue redactado para limitar los aumentos de tarifa al uno por ciento anual. Cierras con la cadena: debido a la infraestructura vieja, enfrentamos más apagones; como resultado, necesitamos almacenamiento; este plan conduce a menor riesgo, no a facturas más altas. Hart te lo agradece. Roy, a regañadientes, aplaude." },
      ],
      gaps: [
        { options: ["car", "vote", "bill"], answer: 2, why: "«Due to this project… is going to go up» — lo que sube es la factura de servicios." },
        { options: ["councilmen", "investors", "ratepayers"], answer: 2, why: "«Everything gets passed on to us» — los usuarios que pagan la tarifa, los ratepayers." },
        { options: ["boat", "grid", "ballot"], answer: 1, why: "«designed decades ago… pushed to its limits by longer summers»: la red eléctrica." },
        { options: ["raise", "cap", "ignore"], answer: 1, why: "«at one percent a year» — el acuerdo pone tope a los aumentos de tarifa." },
        { options: ["vacations", "parking", "storage"], answer: 2, why: "La cadena causal desemboca en la necesidad de almacenamiento en baterías." },
      ],
    },
    {
      id: "cz-en-b2-11-2", title: "The sunniest city", titleEs: "La ciudad más soleada", minutes: 3,
      paragraphs: [
        { it: "Phoenix gets more sun than any other major American city — about three hundred sunny days a year. Yet for decades, its growth was {1} by gas and nuclear plants built far away, and the city developed some of the highest summer bills in the country. Climate and infrastructure, in that order, made the desert expensive.", es: "Phoenix recibe más sol que cualquier otra ciudad grande de EE. UU. — unos trescientos días soleados al año. Sin embargo, durante décadas su crecimiento fue alimentado por plantas de gas y nucleares construidas lejos, y la ciudad desarrolló algunas de las facturas de verano más altas del país. El clima y la infraestructura, en ese orden, hicieron el desierto caro." },
        { it: "Solar projects are now being {2} with giant batteries, so daytime power can be stored for the evening peak — the hours when every AC in the valley runs at once. Due to federal tax credits, most of these projects are {3} without touching ratepayer wallets. Whether Solar Ridge gets built will be decided at the {4} box this November, and both campaigns know it: in Phoenix, energy politics is finally local, personal, and about one number — the monthly {5}.", es: "Los proyectos solares ahora se combinan con baterías gigantes, de modo que la energía diurna puede almacenarse para el pico nocturno — las horas en que cada aire acondicionado del valle funciona a la vez. Gracias a los créditos fiscales federales, la mayoría de estos proyectos se financian sin tocar los bolsillos de los usuarios. Que Solar Ridge se construya o no se decidirá en las urnas este noviembre, y ambas campañas lo saben: en Phoenix, la política energética por fin es local, personal, y gira en torno a un número: la factura mensual." },
      ],
      gaps: [
        { options: ["canceled", "powered", "ignored"], answer: 1, why: "«gas and nuclear plants» alimentaron el crecimiento de la ciudad durante décadas." },
        { options: ["flooded", "paired", "confused"], answer: 1, why: "Solar más baterías: los proyectos se combinan con almacenamiento gigante." },
        { options: ["banned", "delayed", "financed"], answer: 2, why: "«without touching ratepayer wallets» — los créditos permiten que se financien solos." },
        { options: ["lunch", "ballot", "toolbox"], answer: 1, why: "«this November» — la decisión va a las urnas: ballot box." },
        { options: ["parade", "marathon", "bill"], answer: 2, why: "«about one number» — el tema local es la factura mensual de luz." },
      ],
    },
    {
      id: "cz-en-b2-11-3", title: "For the public record", titleEs: "Para el registro público", minutes: 2,
      paragraphs: [
        { it: "Dear Council Members, I've lived in Phoenix for six years, and I support the Solar Ridge project. Our power grid was {1} decades ago, and it is being pushed to its limits by longer, hotter summers. As a result, {2} are becoming more frequent in my neighborhood — twice last August alone. This letter is not about ideology; it is about the lights staying on.", es: "Estimados miembros del concejo: he vivido en Phoenix seis años y apoyo el proyecto Solar Ridge. Nuestra red eléctrica fue diseñada hace décadas, y los veranos más largos y calurosos la están llevando a sus límites. Como resultado, los apagones son más frecuentes en mi barrio — dos veces solo el agosto pasado. Esta carta no va de ideología; va de que las luces se queden encendidas." },
        { it: "The project would be financed by federal tax {3}, and the agreement was written to cap rate increases at one percent a year. Due to rising demand, we need storage; this plan leads to lower risk, not higher bills. I urge the council to approve it. With all due {4} to Mr. Hutchins, whose concerns I share, the data suggest that doing nothing is the expensive option. Thank you for your time and for your service to this {5}. Respectfully submitted.", es: "El proyecto sería financiado con créditos fiscales federales, y el acuerdo fue redactado para limitar los aumentos de tarifa al uno por ciento anual. Debido a la demanda creciente, necesitamos almacenamiento; este plan conduce a menor riesgo, no a facturas más altas. Urjo al concejo a aprobarlo. Con todo el respeto por el señor Hutchins, cuyas preocupaciones comparto, los datos sugieren que no hacer nada es la opción cara. Gracias por su tiempo y por su servicio a esta ciudad. Respetuosamente." },
      ],
      gaps: [
        { options: ["painted", "designed", "imported"], answer: 1, why: "«decades ago… pushed to its limits» — la red fue diseñada para otra época." },
        { options: ["festivals", "discounts", "blackouts"], answer: 2, why: "«the lights staying on» — el problema de fondo son los apagones." },
        { options: ["penalties", "credits", "holidays"], answer: 1, why: "«federal tax…» son los créditos fiscales que financian el proyecto." },
        { options: ["luck", "respect", "doubt"], answer: 1, why: "«With all due…» — la fórmula para discrepar con cortesía." },
        { options: ["stock", "city", "team"], answer: 1, why: "«for your service to this…» — el servicio público a la ciudad." },
      ],
    },
  ],

  "en-cu-b2-12": [
    {
      id: "cz-en-b2-12-1", title: "Three minutes on the clock", titleEs: "Tres minutos en el reloj", minutes: 3,
      paragraphs: [
        { it: "Demo day, Miami. Three investors, three minutes, and a clock you can hear. You open the way the coaches taught you: a number and a wound. «Small restaurants lose nine billion dollars a year to {1} food. Meanwhile, families three blocks away can't afford dinner.» Diane, the lead investor, stops writing. You have her {2}.", es: "Demo day, Miami. Tres inversionistas, tres minutos y un reloj que se oye. Abres como te enseñaron los coaches: un número y una herida. «Los restaurantes pequeños pierden nueve mil millones de dólares al año por comida desperdiciada. Mientras tanto, familias a tres cuadras no pueden pagar la cena.» Diane, la inversionista principal, deja de escribir. Tienes su atención." },
        { it: "The middle minute is traction, and traction means numbers: two hundred fourteen restaurants, thirty-one thousand users, eighteen percent growth month over month, sixty-two percent {3} at six months. Marisol fires the hard one: delivery apps burned billions — why won't you? You have the answer ready: no logistics, twelve percent per transaction, acquisition cost under two dollars because growth is driven by word of {4}. Charles asks the last question, and you give the whole ask: two hundred fifty thousand dollars for eight percent of the company, funds {5} to Orlando and Tampa, eighteen months of runway. The clock hits zero. «Nice pitch», says Diane.", es: "El minuto del medio es tracción, y tracción significa números: doscientos catorce restaurantes, treinta y un mil usuarios, dieciocho por ciento de crecimiento mes a mes, sesenta y dos por ciento de retención a los seis meses. Marisol dispara la difícil: las apps de delivery quemaron miles de millones — ¿por qué ustedes no? Tienes la respuesta lista: sin logística, doce por ciento por transacción, costo de adquisición bajo dos dólares porque el crecimiento es impulsado por el boca a boca. Charles hace la última pregunta, y das el ask completo: doscientos cincuenta mil dólares por el ocho por ciento de la empresa, fondos destinados a Orlando y Tampa, dieciocho meses de pista. El reloj llega a cero. «Buen pitch», dice Diane." },
      ],
      gaps: [
        { options: ["spicy", "imported", "wasted"], answer: 2, why: "«lose nine billion a year to…» — comida que se tira, desperdiciada." },
        { options: ["resume", "signature", "attention"], answer: 2, why: "Diane deja de escribir: el gancho funcionó y tienes su atención." },
        { options: ["turnover", "advertising", "retention"], answer: 2, why: "El doble del promedio de la industria: la retención de usuarios a seis meses." },
        { options: ["luck", "credit", "mouth"], answer: 2, why: "«growth is driven by word of…» — el boca a boca, sin publicidad pagada." },
        { options: ["donated", "returned", "earmarked"], answer: 2, why: "«to Orlando and Tampa» — los fondos se destinarían a abrir esas dos ciudades." },
      ],
    },
    {
      id: "cz-en-b2-12-2", title: "The Shark Tank effect", titleEs: "El efecto Shark Tank", minutes: 3,
      paragraphs: [
        { it: "Shark Tank has aired on ABC since 2009 and turned pitching into prime-time entertainment. Entrepreneurs ask the «Sharks» for money in exchange for a {1} of their company, and the format rewards the same three things every time: a clear story, real numbers, and a specific {2}. Founders who hide their numbers or dodge hard questions rarely survive the episode.", es: "Shark Tank se emite en ABC desde 2009 y convirtió el pitch en entretenimiento de horario estelar. Los emprendedores piden dinero a los «Sharks» a cambio de una participación en su empresa, y el formato premia las mismas tres cosas todas las veces: una historia clara, números reales y una petición específica. Los fundadores que esconden sus números o esquivan las preguntas difíciles rara vez sobreviven al episodio." },
        { it: "Beyond TV, the same logic rules demo days, where startups {3} accelerators for seed money with exactly two minutes and thirty seconds on the clock. The culture even shapes job interviews, where the «personal pitch» is now standard. The lesson underneath it all is very American: clarity is a form of {4}. Saying the number without fear and the ask without detours is not arrogance; it is {5}. If you can't pitch your idea in three minutes, the meeting never gets scheduled.", es: "Más allá de la tele, la misma lógica gobierna los demo days, donde las startups presentan su proyecto a las aceleradoras por capital semilla con exactamente dos minutos y treinta segundos en el reloj. La cultura incluso moldea las entrevistas de trabajo, donde el «pitch personal» ya es estándar. La lección de fondo es muy americana: la claridad es una forma de respeto. Decir el número sin miedo y el ask sin rodeos no es arrogancia; es profesionalismo. Si no puedes presentar tu idea en tres minutos, la reunión nunca llega a agendarse." },
      ],
      gaps: [
        { options: ["salary", "song", "share"], answer: 2, why: "A cambio del dinero, los Sharks reciben participación: equity, una parte de la empresa." },
        { options: ["enemy", "ask", "excuse"], answer: 1, why: "Monto + equity: la petición específica es lo tercero que premia el formato." },
        { options: ["sue", "pitch", "audit"], answer: 1, why: "«for seed money» — las startups hacen su pitch a las aceleradoras en el demo day." },
        { options: ["revenge", "respect", "silence"], answer: 1, why: "«clarity is a form of…» — la claridad como forma de respeto." },
        { options: ["amateurism", "theater", "professionalism"], answer: 2, why: "«is not arrogance; it is…» — el contraste con la arrogancia: profesionalismo." },
      ],
    },
    {
      id: "cz-en-b2-12-3", title: "The Vecino script", titleEs: "El guion de Vecino", minutes: 2,
      paragraphs: [
        { it: "Slide one, black background, one sentence: «Every night, family-run restaurants {1} away food while neighbors three blocks away skip dinner.» Slide two: «That's a nine-billion-dollar problem — and it's the problem Vecino solves.» Slide three is the product in one line, because the {2} test is real: if your grandma can't repeat your model, neither can an investor. «Vecino is a marketplace where restaurants post surplus {3} at a discount before closing.»", es: "Diapositiva uno, fondo negro, una frase: «Cada noche, los restaurantes familiares tiran comida mientras vecinos a tres cuadras se saltan la cena.» Diapositiva dos: «Ese es un problema de nueve mil millones de dólares — y es el problema que Vecino resuelve.» La diapositiva tres es el producto en una línea, porque la prueba de la abuela es real: si tu abuela no puede repetir tu modelo, un inversionista tampoco. «Vecino es un marketplace donde los restaurantes publican comidas excedentes con descuento antes de cerrar.»" },
        { it: "Then the numbers, in present perfect only: since launch, we've {4} two hundred fourteen restaurants and reached thirty-one thousand users. No adjectives, no adverbs — the traction slide is all verbs and figures. The final slide is the ask, complete and unafraid: two hundred fifty thousand dollars for eight percent, funds to launch in Orlando and Tampa, an eighteen-month {5} to prove the model can scale. The last line of the script is the one the coaches make you repeat: «Clear problem, real traction, honest ask.» If those three are true, the rest is negotiation.", es: "Luego los números, solo en present perfect: desde el lanzamiento hemos firmado doscientos catorce restaurantes y alcanzado treinta y un mil usuarios. Sin adjetivos, sin adverbios — la diapositiva de tracción es todo verbos y cifras. La última diapositiva es el ask, completa y sin miedo: doscientos cincuenta mil por el ocho por ciento, fondos para lanzar en Orlando y Tampa, una pista de dieciocho meses para demostrar que el modelo puede escalar. La última línea del guion es la que los coaches te hacen repetir: «Problema claro, tracción real, ask honesto.» Si esas tres son ciertas, el resto es negociación." },
      ],
      gaps: [
        { options: ["gobble", "buy", "throw"], answer: 2, why: "«{1} away food» — tirar comida: el desperdicio que abre el pitch." },
        { options: ["stress", "legal", "grandma"], answer: 2, why: "«if your grandma can't repeat your model» — la prueba de la abuela." },
        { options: ["invoices", "furniture", "meals"], answer: 2, why: "Los restaurantes publican comidas excedentes con descuento antes de cerrar." },
        { options: ["fired", "lost", "signed"], answer: 2, why: "La tracción de Vecino: restaurantes firmados en la plataforma desde el lanzamiento." },
        { options: ["holiday", "runway", "audit"], answer: 1, why: "Dieciocho meses de pista: el tiempo que el dinero compra antes de agotarse." },
      ],
    },
  ],
};
