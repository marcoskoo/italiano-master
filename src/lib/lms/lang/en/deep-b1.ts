import type { CbGrammarDeep } from "../../extra/grammar-deep";

/* ═══ EN B1 · Grammar deep — 12 unidades ═════════════════════════════
   Explicación amplia de la gramática de cada unidad B1 (inglés
   americano), con las trampas específicas del hispanohablante. Campos
   `.it` = inglés. Secciones: How it works / When to use it / Watch out
   (ES) / In real conversation. */

export const EN_DEEP_B1: Record<string, CbGrammarDeep> = {
  "en-cu-b1-01": {
    sezioni: [
      { t: "How it works", body: "El present perfect se construye con have/has + participio: I have worked, she has done, we have been. El participio es invariable y los irregulares se memorizan en bloques: do → done, go → gone, run → run, be → been, make → made, take → taken. La pregunta de experiencia es «Have you ever + participio…?» y la respuesta corta, «Yes, I have» o «No, I haven't». En cuanto aparece el CUÁNDO — yesterday, last summer, in 2023, when I was in high school — el verbo salta al past simple: «I did an internship last summer», nunca «I have done an internship last summer»." },
      { t: "When to use it", body: "Es el tiempo del networking: describe experiencias sin fecha («Have you ever worked on a team?») y periodos que siguen abiertos («I've been in Boston since 2023» = sigo allí). Para las duraciones hay dos preposiciones: for + cantidad de tiempo («for two years», «for six months») y since + punto de inicio («since 2023», «since high school», «since I moved here»). El combo de entrevista perfecta: present perfect para abrir («I've run the club's social media for two years») y past simple para los detalles («Last summer I worked at an agency in Miami»)." },
      { t: "Watch out (para hispanohablantes)", body: "1) La trampa número uno es mezclar tiempos: «I have seen her yesterday» es imposible, porque yesterday solo convive con el past simple. Ojo con el contraste peninsular: donde en España se dice «esta mañana he hablado con Megan», el inglés americano dice «I talked to Megan this morning» en cuanto la mañana terminó. 2) since y for no son intercambiables: «since two years» no existe; si puedes contar el tiempo (two years, six months), es for. 3) «Did you ever…?» pregunta por recuerdos dentro de un periodo cerrado; para la experiencia general de una entrevista usa «Have you ever…?»." },
      { t: "In real conversation", body: "El reclutador abre con «Tell me about yourself» y dispara «Have you ever worked on a marketing project?». El guion ganador: respuesta corta («Yes, I have»), detalle en past simple («I ran a blog for my club for two years») y cierre con lo que buscas («I'm looking for a summer internship»). Al despedirte, «It was nice talking to you» y, a los dos días, un thank-you email: cinco minutos que en EE. UU. valen una entrevista de seguimiento." },
    ],
    esempi: [
      { it: "Have you ever presented a project to a real client?", es: "¿Alguna vez has presentado un proyecto a un cliente real?" },
      { it: "Yes, I have. I presented a marketing plan last October.", es: "Sí. Presenté un plan de marketing en octubre pasado." },
      { it: "I've worked with two startups since I moved to Austin.", es: "He trabajado con dos startups desde que me mudé a Austin." },
      { it: "She was an intern at a radio station for six months.", es: "Fue pasante en una estación de radio durante seis meses." },
      { it: "I've never missed a deadline in my life.", es: "Nunca en mi vida he perdido un plazo de entrega." },
    ],
    usi: [
      { q: "El reclutador pregunta: «___ you ever worked abroad?»", options: ["Have", "Did", "Do"], answer: 0, explain: "Experiencia general sin fecha → Have + participio (worked)." },
      { q: "Quieres decir «trabajé en Chicago el año pasado»:", options: ["I have worked in Chicago last year", "I worked in Chicago last year", "I work in Chicago last year"], answer: 1, explain: "«Last year» fija el cuándo → past simple (worked)." },
    ],
  },

  "en-cu-b1-02": {
    sezioni: [
      { t: "How it works", body: "Para decir «yo también» repites el auxiliar de la frase original en orden invertido: So + auxiliar + sujeto. «I use social media every day» → «So do I»; «I'm a night owl» → «So am I»; «I went to the game» → «So did I»; «I can't live without my phone» → «Neither can I». Para «yo tampoco» el molde es Neither + auxiliar + sujeto: «I don't check my phone in class» → «Neither do I». Neither ya niega por sí solo, así que el auxiliar va en afirmativo." },
      { t: "When to use it", body: "Son las reacciones rápidas del debate: muestran sintonía sin repetir la frase entera. Se combinan con las fórmulas del desacuerdo educado americano: «I see your point, but…», «That's a fair point», «I'm not so sure» y «I don't buy it» (no me lo creo). El sándwich completo: primero reconoces el punto contrario, después contrastas con but, y cierras con «Let's agree to disagree» si nadie cede. La regla de oro en EE. UU.: ataca la idea, nunca a la persona." },
      { t: "Watch out (para hispanohablantes)", body: "1) El auxiliar debe COPIAR al de la frase original: a «I'm tired» respondes «So am I», nunca «So do I» — be no usa do. 2) «Neither don't I» es imposible: neither ya es negativo y el auxiliar va afirmativo. 3) El español dice «yo tampoco reviso» (sujeto primero); el inglés invierte el orden: «Neither do I», nunca «Neither I do». Y «Me too» / «Me neither» existen, pero son registro muy informal: en clase y por escrito, So/Neither." },
      { t: "In real conversation", body: "Viernes de debate en Seattle: «I think social media is bad for teenagers» — «I see your point, but I don't completely agree. It helps me stay in touch with my cousins». Las reacciones en cadena son música de conversación: «I use it to practice English» — «So do I». Y cuando el estudio de turno suena exagerado, llega el escepticismo amable: «I don't buy it. I think they counted every notification»." },
    ],
    esempi: [
      { it: "I take the bus to class every day. — So do I.", es: "Tomo el autobús a clase todos los días. — Yo también." },
      { it: "I'm not a fan of true crime. — Neither am I.", es: "No soy fan de los crímenes reales. — Yo tampoco." },
      { it: "I watched the debate last night. — So did I.", es: "Vi el debate anoche. — Yo también." },
      { it: "I can't stand spoilers. — Neither can I.", es: "No soporto los spoilers. — Yo tampoco." },
      { it: "I'd love a coffee right now. — So would I.", es: "Me encantaría un café ahora mismo. — A mí también." },
    ],
    usi: [
      { q: "«I'm terrible at math» — ¿cómo dices «yo también»?", options: ["So do I.", "So am I.", "So I am."], answer: 1, explain: "La frase original usa be → el auxiliar copiado es am: So am I." },
      { q: "«I didn't like the ending of the series» — ¿la reacción correcta?", options: ["Neither did I.", "Neither do I.", "So did I."], answer: 0, explain: "Pasado simple → did; neither ya niega, así que el auxiliar va afirmativo." },
    ],
  },

  "en-cu-b1-03": {
    sezioni: [
      { t: "How it works", body: "El segundo condicional encadena dos mitades: if + past simple para la condición y would + verbo base para el resultado: «If I won the lottery, I'd travel the world». El pasado simple NO significa pasado aquí: es la señal de hipótesis irreal, el trabajo que en español hace el subjuntivo («si ganara…»). Con be, el if usa were para todas las personas: «If I were rich», «If she were here». En el resultado también caben could («podría») y might («quizá»): «If I had millions, I could retire early»." },
      { t: "When to use it", body: "Sirve para soñar en voz alta («What would you do if you won the Powerball?»), para aconsejar («If I were you, I'd pay off my student loans first») y para imaginar vidas alternativas («If we lived in Denver, we would hike every weekend»). Es la gramática de la sobremesa americana: el jackpot en la TV del diner, los boletos de $2 y los planes de $500 millones que nadie va a ejecutar esa noche." },
      { t: "Watch out (para hispanohablantes)", body: "1) El error clásico es meter would dentro del if: «If I would win…» no existe; el if siempre lleva past simple. 2) «If I was you» se oye en conversación muy relajada, pero la forma estándar — la de TOEFL y Cambridge — es «If I were you». 3) No confundas condicionales: «If I win» (primero: compré el boleto y puedo ganar) frente a «If I won» (segundo: puro sueño). Y la 'd de «I'd» es would, salvo en «I'd better go», que es otra construcción." },
      { t: "In real conversation", body: "El guion del diner de Ohio: «Did you see the news? The Powerball jackpot is $500 million» — «If I won, I'd quit my job» — «Be serious: I'd pay off my student loans first, then I'd buy my mom a house». El juego sigue con «Would you give money to charity?». Y cuando alguien se pasa de realista, llega el remate: «You just need the winning ticket»." },
    ],
    esempi: [
      { it: "If we had more free time, we would learn to sail.", es: "Si tuviéramos más tiempo libre, aprenderíamos a navegar." },
      { it: "If she lived closer, she'd join our study group.", es: "Si viviera más cerca, se uniría a nuestro grupo de estudio." },
      { it: "What would you do if you didn't have to work?", es: "¿Qué harías si no tuvieras que trabajar?" },
      { it: "If I were you, I'd apply for that internship in Denver.", es: "Yo en tu lugar me postularía a esas prácticas en Denver." },
      { it: "They'd move to Colorado if the winters were milder.", es: "Se mudarían a Colorado si los inviernos fueran más templados." },
    ],
    usi: [
      { q: "«Si ganara la lotería, compraría una casa»:", options: ["If I win the lottery, I buy a house", "If I won the lottery, I'd buy a house", "If I would win the lottery, I bought a house"], answer: 1, explain: "Segundo condicional: past simple en el if + would en el resultado; would jamás entra al if." },
      { q: "Consejo para un amigo: «yo en tu lugar hablaría con el manager»:", options: ["If I am you, I talk to the manager", "If I were you, I'd talk to the manager", "If I was you, I would talked to the manager"], answer: 1, explain: "be → were en el if (forma estándar) y would + verbo base en el resultado." },
    ],
  },

  "en-cu-b1-04": {
    sezioni: [
      { t: "How it works", body: "El present perfect continuous es have/has + been + verbo en -ing: «I've been studying CS for three years», «It's been raining all week». Señala acciones que empezaron en el pasado y siguen (o acaban de parar), con el foco en el proceso y su duración. La pregunta típica de entrevista es «How long have you been…?», con las mismas preposiciones de siempre: for + duración («for two years») y since + punto de inicio («since January»)." },
      { t: "When to use it", body: "Brilla en entrevistas: «How long have you been coding?», «Have you been working on any projects outside class?». También para los efectos visibles de un proceso: «She's tired because she's been moving boxes all morning». El contraste con el present perfect simple es estratégico: «I've completed three courses» (logros contables, lista cerrada) frente a «I've been coding for two years» (actividad que continúa)." },
      { t: "Watch out (para hispanohablantes)", body: "1) Los verbos de estado (know, be, have = poseer, own) rechazan el continuo: «I've known her since 2020», nunca «I've been knowing her». El español «llevo dos años que la conozco» empuja al error. 2) No cruces las lógicas: con logros terminados, present perfect simple («I've written three reports»); el continuous subraya proceso en curso. 3) since va con puntos de inicio: «since two months» no existe; la duración pide for («for two months»)." },
      { t: "In real conversation", body: "La entrevista en San Francisco sigue un guion: «How long have you been studying computer science?» — «I've been studying CS at San Jose State for three years» — «Have you been working on any projects?» — «Yes, I've been building a mobile app with two friends since January». Si el manager pide una historia de problemas, entra el método STAR: situación, tarea, acción y resultado, en ese orden." },
    ],
    esempi: [
      { it: "How long have you been learning English?", es: "¿Cuánto tiempo llevas aprendiendo inglés?" },
      { it: "I've been learning English since I was twelve.", es: "Llevo aprendiendo inglés desde los doce años." },
      { it: "She's been training for the marathon since March.", es: "Lleva entrenando para el maratón desde marzo." },
      { it: "They've been saving money for a trip to Alaska.", es: "Llevan ahorrando para un viaje a Alaska." },
      { it: "It's been snowing in Denver all week.", es: "Lleva toda la semana nevando en Denver." },
    ],
    usi: [
      { q: "«¿Cuánto llevas viviendo en San Francisco?»", options: ["How long do you live in San Francisco?", "How long have you been living in San Francisco?", "How long are you living in San Francisco?"], answer: 1, explain: "Acción iniciada en el pasado que continúa → have been + -ing." },
      { q: "En la entrevista quieres mencionar un logro TERMINADO:", options: ["I've been completing three online courses", "I have completed three online courses", "I am completing three online courses"], answer: 1, explain: "Resultado contable y cerrado → present perfect simple; el continuous es para procesos en curso." },
    ],
  },

  "en-cu-b1-05": {
    sezioni: [
      { t: "How it works", body: "should have / shouldn't have + participio evalúa el pasado: dice que algo fue una buena idea que no pasó («You should have told us» = no avisaron y fue un error) o que pasó y no debía («They shouldn't have canceled our reservation»). El have es invariable: siempre should have, jamás «should has» ni «should have tell». En el habla rápida las formas se reducen: should have → «shoulda», could have → «coulda», would have → «woulda»." },
      { t: "When to use it", body: "Es la gramática de la queja elegante. Se envuelve en softeners para no atacar: «I'm afraid there's a problem with my reservation», «It seems that the system canceled our booking», «Would you mind checking again?». Después llega el reproche («You should have notified me by email») y la petición de solución («What can you do for us?», «I would appreciate a refund or an upgrade»). Si el empleado no puede ayudarte, se escala: «May I speak to the manager?»." },
      { t: "Watch out (para hispanohablantes)", body: "1) «They should have call» es imposible: tras have va participio (called, told, canceled, notified). 2) «Shoulda» es solo la reducción de la calle: en emails formales y exámenes, escribe y pronuncia la forma completa. 3) No confundas el reproche con la deducción: must have + participio supone («deben de haberse equivocado»), should have reprocha («deberían haber avisado»). El español «deberían de haber» mezcla ambos mundos; el inglés los separa en must have y should have." },
      { t: "In real conversation", body: "El guion completo en el mostrador de Las Vegas: «I have a reservation under the name Ríos» — «I'm afraid I can't find it» — «Oh no. You should have told us about the problem by email. We drove five hours to get here». La cortesía paga: en EE. UU. el cliente educado recibe el upgrade y el que grita recibe lo mínimo legal." },
    ],
    esempi: [
      { it: "You should have warned me about the traffic on the I-15.", es: "Deberían haberme advertido del tráfico en la interestatal 15." },
      { it: "We should have booked the show tickets weeks ago.", es: "Deberíamos haber comprado las entradas del espectáculo hace semanas." },
      { it: "They shouldn't have charged us for the room upgrade.", es: "No deberían habernos cobrado la mejora de habitación." },
      { it: "I should have checked the confirmation email twice.", es: "Debería haber revisado dos veces el correo de confirmación." },
      { it: "The airline should have offered us a meal voucher.", es: "La aerolínea debería habernos ofrecido un vale de comida." },
    ],
    usi: [
      { q: "El hotel canceló tu reserva sin avisar. El reproche correcto:", options: ["You should have told me", "You should has told me", "You should have tell me"], answer: 0, explain: "should + have + participio (told); el have nunca se conjuga." },
      { q: "Quieres abrir la queja con cortesía:", options: ["You made a huge mistake!", "I'm afraid there's a problem with my reservation", "Fix this right now!"], answer: 1, explain: "El softener «I'm afraid…» abre la puerta a la solución; el ataque pone a la defensiva." },
    ],
  },

  "en-cu-b1-06": {
    sezioni: [
      { t: "How it works", body: "Para reportar lo que alguien dijo hay dos motores: say (sin persona: «She said (that) the meeting was at nine») y tell (con persona: «She told me that she was tired»). El backshift retrocede los tiempos un paso: presente → pasado («I am nervous» → «She said she was nervous») y will → would («I'll call you» → «She said she would call me»). El that es opcional en conversación, y would, could y might no retroceden más." },
      { t: "When to use it", body: "Es la maquinaria del cotilleo de oficina y de las noticias: «Did you hear about the tech CEO?», «Marcus told me that the company is moving to Austin», «The article said that Austin was one of the fastest-growing cities in the country». También sirve para repetir instrucciones: «The manager told us that the office would close early»." },
      { t: "Watch out (para hispanohablantes)", body: "1) «She said me» es calco directo de «me dijo»: say no lleva persona; si la necesitas, «She said to me that…» (formal y poco común). 2) El backshift olvidado: si reportas después del momento, «He said he is nervous» suena a error; el estándar es «He said he was nervous». 3) Ajusta pronombres y posesivos: «I'll visit my sister» → «She said she would visit her sister». Y cuidado: el cotilleo sobre vidas privadas no es buen small talk en la oficina americana." },
      { t: "In real conversation", body: "Lunes en la cocina de la oficina en Austin: «Did you hear about the tech CEO?» — «No way! Who told you?» — «Marcus told me this morning. He said that the announcement was yesterday». La cadena sigue: «My sister works there. She said the employees were nervous, but she also said they loved the city». Noticias de la empresa, sí; vidas privadas, no." },
    ],
    esempi: [
      { it: "Brianna said that the meeting started at nine.", es: "Brianna dijo que la reunión empezaba a las nueve." },
      { it: "Derrick told me that his sister loved Austin.", es: "Derrick me contó que a su hermana le encantaba Austin." },
      { it: "She said she would call me after lunch.", es: "Ella dijo que me llamaría después del almuerzo." },
      { it: "The manager told us that the office would close early.", es: "El gerente nos dijo que la oficina cerraría temprano." },
      { it: "He said the employees were nervous about the move.", es: "Él dijo que los empleados estaban nerviosos por la mudanza." },
    ],
    usi: [
      { q: "«Me dijo que estaba cansada»: ¿cuál es correcta?", options: ["She said me that she was tired", "She told me that she was tired", "She told that she was tired"], answer: 1, explain: "tell lleva persona (told me); say va sin persona." },
      { q: "Directo: «I'll visit Austin». ¿Cómo lo reportas?", options: ["She said she will visit Austin", "She said she would visit Austin", "She said she visited Austin"], answer: 1, explain: "will retrocede a would al pasar a estilo indirecto (backshift)." },
    ],
  },

  "en-cu-b1-07": {
    sezioni: [
      { t: "How it works", body: "Algunos verbos piden gerundio (-ing): enjoy, avoid, mind, keep, finish, suggest («I enjoy packing boxes», «Do you mind lifting heavy crates?»). Otros piden to + infinitivo: decide, need, want, offer, promise, hope, plan («I decided to volunteer»). No hay lógica universal: se aprenden en bloques, pegados a su verbo. Y una regla sin excepciones: tras preposición, el verbo siempre va en -ing («I'm good at packing», «Thanks for helping», «after finishing»)." },
      { t: "When to use it", body: "Es la gramática del voluntariado: «We're planning to have pizza together», «I keep sorting cans because it relaxes me», «She suggested taking a break». En el food bank de Atlanta el coordinador pregunta «Do you mind working in the cold room?» y tú respondes «Not at all — I love organizing shelves». También para explicar por qué te apuntaste: «I decided to give back to my community»." },
      { t: "Watch out (para hispanohablantes)", body: "1) «I enjoy to help» no existe: enjoy + -ing, siempre. 2) «Thanks for to help» es imposible: preposición delante, -ing detrás, aunque el español use infinitivo («gracias por ayudar»). 3) Con love, like y hate caben ambas formas («I love organizing» = «I love to organize»), pero hay pares que cambian de sentido: remember to wear gloves (acordarte de hacerlo) frente a remember wearing gloves (recordar haberlo hecho); stop to eat (parar para comer) frente a stop eating (dejar de comer)." },
      { t: "In real conversation", body: "El guion del sábado voluntario: «Do you mind sorting cans?» — «Not at all, I'm used to it» — «We decided to order pizza for the volunteers» — «Perfect. I avoid eating before big workouts, so I'm starving!». El voluntariado es también networking americano: mucha gente lo anota en su résumé, y los reclutadores lo leen con buenos ojos." },
    ],
    esempi: [
      { it: "I enjoy meeting new people at the food bank.", es: "Disfruto conociendo gente nueva en el banco de alimentos." },
      { it: "We decided to organize a second volunteer day.", es: "Decidimos organizar un segundo día de voluntariado." },
      { it: "Do you mind waiting ten more minutes?", es: "¿Te importa esperar diez minutos más?" },
      { it: "She's really good at packing boxes fast.", es: "Es muy buena empacando cajas rápido." },
      { it: "They suggested taking a break before lunch.", es: "Sugirieron tomar un descanso antes del almuerzo." },
    ],
    usi: [
      { q: "«Decidí quedarme a ayudar»:", options: ["I decided to stay and help", "I decided staying and helping", "I decided stay and help"], answer: 0, explain: "decide + to + infinitivo; los que piden -ing son enjoy, mind, avoid y compañía." },
      { q: "«Gracias por ayudar»:", options: ["Thanks for to help", "Thanks for helping", "Thanks for help"], answer: 1, explain: "Tras preposición (for) el verbo va siempre en gerundio: helping." },
    ],
  },

  "en-cu-b1-08": {
    sezioni: [
      { t: "How it works", body: "have to y must expresan obligación y casi se intercambian en afirmativa: «You have to stop» = «You must stop». must suena a regla escrita o señal oficial; have to suena cotidiano. El abismo está en la negativa: mustn't = prohibido («You mustn't drink and drive») y don't have to = no es necesario («You don't have to pay — it's free»). can't es la prohibición de todos los días: «You can't park here», «You can't use the carpool lane alone»." },
      { t: "When to use it", body: "Manual del conductor visitante: «You have to wear a seatbelt», «You must stop for a school bus with its red lights on — in both directions», «You can't use your phone while driving», «You can turn right on red after stopping, in most states». Para preguntar si algo es obligatorio: «Do I have to stop here?». Y para el pasado y el futuro de la obligación: «I had to pay the fine», «We'll have to leave before rush hour»." },
      { t: "Watch out (para hispanohablantes)", body: "1) La negativa cambia el significado por completo: «You don't have to stop» = no hace falta; «You can't stop here» = prohibido. El español «no tienes que» es ambiguo y en inglés hay que elegir. 2) must no tiene pasado ni futuro propios: el pasado de la obligación es had to y el futuro, will have to. 3) En las señales americanas leerás «STOP», «NO PARKING» o «DO NOT ENTER»: al traducirlas usa can't o must not, y recuerda que tras un modal nunca va to («mustn't to» es imposible)." },
      { t: "In real conversation", body: "El primer four-way stop de Los Ángeles: «Who goes first?» — «The first car to arrive. If two cars stop at the same time, the car on the right goes first». Después vienen las reglas del road trip: «You have to buckle up in the back seat too», «We can't use the HOV lane with one person during rush hour». Y la recompensa del viaje: «Let's grab dinner at the drive-thru»." },
    ],
    esempi: [
      { it: "You have to stop completely at a four-way stop.", es: "Tienes que detenerte por completo en una intersección de cuatro paradas." },
      { it: "You must stop for a school bus with red lights.", es: "Debes detenerte ante un autobús escolar con luces rojas." },
      { it: "You can't use your phone while you drive.", es: "No puedes usar el teléfono mientras manejas." },
      { it: "We'll have to leave before rush hour tomorrow.", es: "Tendremos que salir antes de la hora pico mañana." },
      { it: "You don't have to pay for the kids at the museum.", es: "No tienes que pagar por los niños en el museo." },
    ],
    usi: [
      { q: "La señal dice «NO PARKING». ¿Cómo la traduces?", options: ["You mustn't to park here", "You can't park here", "You don't have to park here"], answer: 1, explain: "Prohibición cotidiana → can't + base; don't have to diría «no es necesario», no «prohibido»." },
      { q: "«Ayer tuve que pagar una multa de $50»:", options: ["Yesterday I must pay a $50 fine", "Yesterday I had to pay a $50 fine", "Yesterday I musted pay a $50 fine"], answer: 1, explain: "must solo existe en presente; el pasado de la obligación es had to." },
    ],
  },

  "en-cu-b1-09": {
    sezioni: [
      { t: "How it works", body: "Las relativas conectan dos frases sin repetir el sustantivo: «a podcast + it explains science» → «a podcast that explains science». who es para personas, which para cosas y that para ambos — en conversación americana, that es el rey. where es para lugares reales o virtuales («an app where you can speed up audio») y whose expresa posesión («the host whose voice is so calming»). Si el pronombre no es sujeto de la relativa, puedes omitirlo: «the episode (that) I heard last week»." },
      { t: "When to use it", body: "Es la gramática de las recomendaciones: «It's a show that follows one cold case per season», «She's the host who reads letters from listeners», «He's the comedian whose jokes never miss», «That's the app where I organize my episodes». En B1 usa relativas especificativas, sin comas: la relativa identifica exactamente de qué podcast hablas, y si la quitas la frase pierde información esencial." },
      { t: "Watch out (para hispanohablantes)", body: "1) «A podcast who…» es imposible: who es solo para personas; para cosas, that o which. 2) where solo sirve para lugares: «the situation where we argued» se reformula como «the situation in which» o, mejor, otra frase. 3) whose no es who's: «the host whose voice» (cuya voz) frente a «the host who's reading» (que está leyendo). 4) El verbo de la relativa concuerda con su antecedente: «the guys who make any topic funny» (plural) frente a «the one who makes it funny» (singular)." },
      { t: "In real conversation", body: "Tarde lluviosa en la cafetería de Chicago: «What are you listening to these days?» — «A true crime series that follows one case per season. The host is a woman whose interviews feel like movies» — «Is it the one that everybody was talking about on the plane?». La relativa es el pegamento de toda recomendación americana que se precie." },
    ],
    esempi: [
      { it: "It's a podcast that explains the news in ten minutes.", es: "Es un pódcast que explica las noticias en diez minutos." },
      { it: "She's the host who reads letters from listeners.", es: "Es la presentadora que lee cartas de los oyentes." },
      { it: "There's an app where you can slow down the audio.", es: "Hay una aplicación donde puedes ralentizar el audio." },
      { it: "He's the comedian whose jokes never miss.", es: "Es el comediante cuyos chistes nunca fallan." },
      { it: "That's the episode that everyone was talking about.", es: "Ese es el episodio del que todo el mundo hablaba." },
    ],
    usi: [
      { q: "«Es una app que acelera el audio»:", options: ["It's an app who speeds up audio", "It's an app that speeds up audio", "It's an app whose speeds up audio"], answer: 1, explain: "Cosas → that (o which); who es exclusivo de personas." },
      { q: "«El presentador cuya voz es relajante»:", options: ["the host who's voice is calming", "the host whose voice is calming", "the host which voice is calming"], answer: 1, explain: "Posesión → whose; who's es la contracción de who is." },
    ],
  },

  "en-cu-b1-10": {
    sezioni: [
      { t: "How it works", body: "El primer condicional expresa condiciones reales y posibles: if + presente simple, will + verbo base. «If you join the gym, I'll go with you». La regla sagrada: will nunca entra en el if — «If you'll join…» es error. unless significa «a menos que / salvo que» y equivale a if…not: «Unless you keep it fun, I won't join» = «If you don't keep it fun». El orden es libre: si el if va primero, se separa con coma; si va después, no hace falta." },
      { t: "When to use it", body: "Es la gramática de los pactos: «If I sleep eight hours, I'll have more energy», «If we bring lunch from home, we'll save money», «We'll celebrate if we stick to the plan for a month». En el resultado también caben can y might: «If we walk at lunch, we might skip the elevator». Y para negociar como americano, combina promesa («I'll go every day»), condición («if you join») y premio («we'll celebrate»)." },
      { t: "Watch out (para hispanohablantes)", body: "1) El error estrella es el will dentro del if: «If you'll join» no existe; el if siempre lleva presente simple. 2) unless ya trae la negación escondida: «Unless you don't keep it fun» es doble negación imposible; se dice «Unless you keep it fun». 3) La coma: «If we plan it, it will happen» (if primero, con coma) frente a «It won't happen unless we plan it» (if después, sin coma)." },
      { t: "In real conversation", body: "El pacto de Denver se negocia con condicionales: «I'll go to the gym if you come with me» — «Deal. And if we skip fast food for a month, we'll save enough for that ski trip» — «Unless you make me take a spin class!» — «Fine, we'll stick to the weights». Negociar con if y unless es un deporte de oficina tan americano como el wellness program." },
    ],
    esempi: [
      { it: "If I sleep eight hours, I'll have more energy.", es: "Si duermo ocho horas, tendré más energía." },
      { it: "We'll walk at lunch if the rain stops.", es: "Caminaremos en el almuerzo si para la lluvia." },
      { it: "Unless you hide the snacks, I'll eat them all.", es: "A menos que escondas las botanas, me las comeré todas." },
      { it: "If she joins the challenge, she'll feel better in a month.", es: "Si se apunta al reto, se sentirá mejor en un mes." },
      { it: "You won't see results unless you stick to the plan.", es: "No verás resultados a menos que te apegues al plan." },
    ],
    usi: [
      { q: "«Si hacemos ejercicio juntos, nos sentiremos mejor»:", options: ["If we'll exercise together, we feel better", "If we exercise together, we'll feel better", "If we exercised together, we'll feel better"], answer: 1, explain: "Presente simple en el if + will en el resultado; will jamás entra al if." },
      { q: "«No iré a correr a menos que deje de llover»:", options: ["I won't go running unless it stops raining", "I won't go running unless it will stop raining", "I won't go running if it stops raining"], answer: 0, explain: "unless = if…not y lleva presente simple, igual que el if." },
    ],
  },

  "en-cu-b1-11": {
    sezioni: [
      { t: "How it works", body: "used to + verbo base describe hábitos y estados del pasado que ya no existen: «We used to live three blocks from Main Street» (y ya no vivimos allí). would + verbo base narra solo acciones repetidas dentro de una historia: «We would listen to the radio every night». En negativo e interrogativo, used pierde la d: «We didn't use to watch TV», «Did you use to go to the drive-in?»." },
      { t: "When to use it", body: "Es la gramática de la nostalgia: el abuelo que recuerda Main Street, la fuente de sodas y el autocine. used to presenta el escenario («We used to go to the drive-in every Friday») y would añade los detalles repetidos («We would bring popcorn from home; the tickets used to cost a dollar»). Para estados (live, be, have) solo vale used to; would queda para las acciones." },
      { t: "Watch out (para hispanohablantes)", body: "1) «We would live there» es imposible: would no describe estados, solo acciones repetidas. 2) Ortografía de la negativa: «didn't used to» con d es error; se escribe «didn't use to». 3) Tres «used» distintos: «I used to run» (solía correr), «I'm used to running» (estoy acostumbrado a correr) y «I used the app» (usé la app). La preposición to + -ing delata al segundo; el verbo en base tras used to, al primero." },
      { t: "In real conversation", body: "Acción de Gracias en Ohio: «Grandpa, did you use to go to the drive-in?» — «Every Friday. We would park by the fence, and the speaker used to crackle a little. A float at the soda fountain used to cost a nickel». La nostalgia americana tiene guion: used to para el decorado y would para las escenas." },
    ],
    esempi: [
      { it: "We used to spend summers at my grandparents' lake house.", es: "Pasábamos los veranos en la casa del lago de mis abuelos." },
      { it: "My grandfather would tell us stories after dinner.", es: "Mi abuelo nos contaba historias después de la cena." },
      { it: "They didn't use to have air conditioning in their cars.", es: "No solían tener aire acondicionado en sus autos." },
      { it: "Did you use to buy sodas at the fountain after school?", es: "¿Solías comprar sodas en la fuente después de la escuela?" },
      { it: "There used to be a movie theater on Main Street.", es: "Solía haber un cine en Main Street." },
    ],
    usi: [
      { q: "«De pequeños solíamos ir al lago» (y ya no vamos):", options: ["We would live near the lake when we were kids", "We used to go to the lake when we were kids", "We use to go to the lake when we were kids"], answer: 1, explain: "Hábito pasado que ya no existe → used to + base; «use to» sin d solo vale en negativas e interrogativas." },
      { q: "Recuerdas un ESTADO: «vivíamos cerca del lago»:", options: ["We would live near the lake", "We used to live near the lake", "We were used to live near the lake"], answer: 1, explain: "Con estados (live, be, have) solo funciona used to; would es solo para acciones repetidas." },
    ],
  },

  "en-cu-b1-12": {
    sezioni: [
      { t: "How it works", body: "Para persuadir con datos: comparativos (bigger than, more interesting than, better than, worse than), superlativos (the biggest, the most interesting, the best) y la estructura de lujo «one of the + superlativo + plural»: «one of the best food cities in the world». El comparativo doble es puro estilo de presentación: «The more you walk, the more you discover» (cuanto más caminas, más descubres). Y than conecta las dos partes de la comparación — nunca that." },
      { t: "When to use it", body: "La presentación americana clásica tiene tres actos: gancho y tesis («Today I want to convince you to visit my city»), dos o tres argumentos con datos — números redondos y verificables: «over 10,000 restaurants», «founded in 1535», «less than a dollar» — y cierre con call to action («What are you waiting for?»). Los conectores ordenan el recorrido: First, Second, Also, For example, Here's my final argument." },
      { t: "Watch out (para hispanohablantes)", body: "1) La marca nunca se dobla: «more bigger» y «the most best» no existen. 2) than, no that: «bigger than Chicago» — el «que» del comparativo español engaña. 3) Tras «one of the + superlativo» va plural: «one of the biggest cities», no «one of the biggest city». 4) Traduce tus datos para audiencia americana: grados Fahrenheit, millas, dólares y pies para los edificios — «over 100 degrees» significa calor en EE. UU." },
      { t: "In real conversation", body: "El día de presentaciones finales: «Good morning! Today I want to convince you to visit Lima. First, the food: it's one of the best food cities in the world, with over 10,000 restaurants. Second, the weather: winters are milder than in Denver. Here's my final argument: the historic center is a UNESCO site. What are you waiting for?». Si te preguntan, abre con «Great question!» — gana tiempo y simpatía." },
    ],
    esempi: [
      { it: "The subway is faster than the bus during rush hour.", es: "El metro es más rápido que el autobús en hora pico." },
      { it: "It's one of the safest neighborhoods in the city.", es: "Es de los barrios más seguros de la ciudad." },
      { it: "My city is more affordable than New York.", es: "Mi ciudad es más asequible que Nueva York." },
      { it: "The more you walk around downtown, the more you discover.", es: "Cuanto más caminas por el centro, más descubres." },
      { it: "This diner has the best pancakes in Ohio.", es: "Este diner tiene los mejores hot cakes de Ohio." },
    ],
    usi: [
      { q: "«Es una de las ciudades más grandes del país»:", options: ["It's one of the biggest city in the country", "It's one of the biggest cities in the country", "It's one of most big cities in the country"], answer: 1, explain: "one of the + superlativo + plural (cities)." },
      { q: "«Cuanto más caminas, más descubres»:", options: ["The more you walk, the more you discover", "More you walk, more you discover", "The most you walk, the most you discover"], answer: 0, explain: "Comparativo doble: the + more…, the + more…; nunca superlativo." },
    ],
  },
};
