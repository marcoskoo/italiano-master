import type { CbUnit } from "../cambridge";

/* ═══ B1 · Indipendenza comunicativa — 12 unità comunicative ═════════ */

export const CB_B1: CbUnit[] = [
  {
    id: "cu-b1-01", n: 1, level: "B1",
    title: "Historias de vida", titleIt: "Storie di vita",
    img: "/images/ascolto/ls-28.jpg",
    goal: "Narrar experiencias largas: estudios, trabajo, mudanzas y giros de vida",
    goals: ["Narrar biografías combinando passato prossimo e imperfetto", "Encadenar eventos con connettivi temporales", "Entrevistar a alguien sobre su vida"],
    scenario: "Una asociación cultural italiana te pide contar tu historia para su archivo de «voci migranti». Media hora de entrevista: infancia, estudios, decisiones y el día que cambiaste de país.",
    dialogue: [
      { speaker: "Intervistatrice", it: "Allora, raccontaci: quando hai lasciato il tuo paese?", es: "Entonces, cuéntanos: ¿cuándo dejaste tu país?" },
      { speaker: "Tu", it: "Sono partito quattro anni fa. Prima però avevo già lavorato due anni in un'azienda.", es: "Me fui hace cuatro años. Antes ya había trabajado dos años en una empresa." },
      { speaker: "Intervistatrice", it: "E perché ha deciso di venire proprio in Italia?", es: "¿Y por qué decidió venir justo a Italia?" },
      { speaker: "Tu", it: "Da bambino sognavo di vedere Roma. Quando ho ricevuto la borsa di studio, non ci ho pensato due volte.", es: "De niño soñaba con ver Roma. Cuando recibí la beca, no lo dudé ni un segundo." },
      { speaker: "Intervistatrice", it: "Com'è stato il primo periodo? Racconti qualche aneddoto?", es: "¿Cómo fue el primer período? ¿Cuenta alguna anécdota?" },
      { speaker: "Tu", it: "All'inizio era tutto difficile: non capivo i documenti, il dialetto mi confondeva…", es: "Al principio todo era difícil: no entendía los documentos, el dialecto me confundía…" },
      { speaker: "Tu", it: "Poi un giorno un impiegato ha urlato «si accomodi!» e ho capito tutto. Da lì, ogni giorno è andato meglio.", es: "Luego un día un funcionario gritó «¡siéntese!» y lo entendí todo. Desde ahí, cada día fue mejor." },
      { speaker: "Intervistatrice", it: "Bellissimo! E oggi, cosa si porta dietro da quella esperienza?", es: "¡Precioso! ¿Y hoy, qué se lleva de aquella experiencia?" },
    ],
    comprehension: [
      { q: "¿Cuánto había trabajado antes de irse?", options: ["Un año", "Dos años", "Cuatro años"], answer: 1 },
      { q: "¿Qué soñaba de niño?", options: ["Trabajar en Roma", "Ver Roma", "Estudiar arte"], answer: 1 },
      { q: "¿Qué le confundía al principio?", options: ["Los documentos y el dialecto", "El dinero", "La comida"], answer: 0 },
    ],
    chunks: [
      { it: "Sono partito quattro anni fa.", es: "Me fui hace cuatro años." },
      { it: "Da bambino sognavo di…", es: "De niño soñaba con…" },
      { it: "Non ci ho pensato due volte.", es: "No lo dudé ni un segundo." },
      { it: "All'inizio era tutto difficile.", es: "Al principio todo era difícil." },
      { it: "Da lì è andato meglio.", es: "Desde ahí fue mejorando." },
      { it: "Cosa ti porti dietro?", es: "¿Qué te llevas (de la experiencia)?" },
    ],
    grammar: {
      focus: "Passato prossimo vs imperfetto en narración larga",
      inductive: [
        { it: "Lavoravo in banca quando ho ricevuto l'offerta.", es: "Trabajaba en un banco cuando recibí la oferta." },
        { it: "Non capivo nulla; poi un giorno ho capito tutto.", es: "No entendía nada; luego un día lo entendí todo." },
        { it: "Mentre studiavo, ho conosciuto mia moglie.", es: "Mientras estudiaba, conocí a mi mujer." },
      ],
      rule: [
        "Regla narrativa: imperfetto pinta el escenario (qué había, cómo era, qué solía pasar) y el passato prossimo mueve la acción (qué pasó, qué decidí). Juntos crean la historia.",
        "Connettivi para encadenar: prima, poi, dopo, un giorno, da lì, alla fine, mentre, quando. Cada uno coloca los hechos en su sitio.",
      ],
      topicId: "gx-b1-aspetti",
      gaps: [
        { q: "Mentre ___ (guardare) la TV, è suonato il campanello.", options: ["ho guardato", "guardavo", "guarderò"], answer: 1 },
        { q: "Ieri ___ (incontrare) un mio vecchio professore.", options: ["incontravo", "ho incontrato", "incontro"], answer: 1 },
        { q: "Da bambino ___ (vivere) al mare.", options: ["ho vissuto sempre", "vivevo", "sono vissuto"], answer: 1 },
      ],
    },
    pronunciation: {
      focus: "El ritmo del relato",
      tip: "El italiano narrado tiene olas: sube en los detalles (era tutto difficile), marca las pausas en los connettivi (pOI…) y remata con fuerza (ho capito TUTto). Cuenta como si fuera un cuento.",
      pairs: [
        { a: "prima…", b: "poi…", note: "cadena temporal" },
        { a: "un giorno…", b: "e allora…", note: "giro narrativo" },
        { a: "alla fine…", b: "e vissero felici!", note: "cierre" },
      ],
    },
    speaking: {
      steps: [
        { kind: "controllato", task: "Repite el esqueleto: «Prima…, poi…, un giorno…, da lì…, alla fine…»." },
        { kind: "semi", task: "Narra tu biografía en 10 frases: infancia, estudios, primera mudanza, decisión clave." },
        { kind: "comunicativo", task: "Entrevista cruzada estilo «archivio de voces»: 6 preguntas sobre la vida del otro y contra-preguntas." },
        { kind: "autentico", task: "Graba tu historia de 2 minutos y escúchate: ¿dónde mejoran las conjugaciones?" },
      ],
    },
    reading: {
      sourceId: "rd-29",
      question: "¿Qué historia cuenta la lectura y qué momento la cambia?",
    },
    writing: {
      task: "Escribe tu «storia di vita» (12 frases): origen, decisiones, arrival a Italia (o el cambio que fue), anécdota y hoy. Para el archivo de la asociación.",
      minWords: 100,
      tips: ["Decorado en imperfecto, acciones en prossimo", "Cada párrafo empieza con un connettivo temporal"],
      model: [
        "Sono nato in un piccolo paese di montagna, dove tutti si conoscevano.",
        "Dopo la laurea ho cercato fortuna in città: i primi mesi erano duri.",
        "Un giorno ho visto un annuncio per una borsa di studio in Italia. Ho fatto domanda e… eccomi qui.",
      ],
    },
    culture: {
      title: "La Italia de las migraciones",
      text: "Italia fue país de emigración (30 millones salieron entre 1880 y 1980) y hoy es país de inmigración: una de cada diez personas nació fuera. Los archivos de «voci» y las fiestas de las regiones mantienen vivas las historias — preguntar por ellas es un gesto de respeto.",
    },
    finalTask: {
      title: "Il mio archivio di voci",
      brief: "Entrevista (o imagina) a una persona que haya cambiado de país: 6 preguntas y un resumen final de su historia en pasado. Preséntalo como documental de 3 minutos.",
      checklist: ["Narra con la mezcla prossimo/imperfetto", "Encadeno con almeno 5 connettivi", "La historia tiene un antes y un después"],
    },
    review: [
      { q: "Mentre ___ , ho conosciuto Luca. (studiare)", options: ["ho studiato", "studiavo", "studierò"], answer: 1 },
      { q: "Ieri ___ la decisione. (tomar, acción)", options: ["prendo", "prendevo", "ho preso"], answer: 2 },
      { q: "«Non ci ho pensato due volte» =", options: ["lo dudé mucho", "no lo dudé", "lo pensé dos veces"], answer: 1 },
      { q: "Para el escenario narrativo se usa…", options: ["passato prossimo", "imperfetto", "futuro"], answer: 1 },
    ],
    cando: [
      "Puedo narrar mi biografía con fluidez",
      "Distingo escenario y acción en el pasado",
      "Puedo entrevistar y resumir historias ajenas",
    ],
  },

  {
    id: "cu-b1-02", n: 2, level: "B1",
    title: "Entrevistas de trabajo", titleIt: "Colloqui di lavoro",
    img: "/images/ascolto/ls-5.jpg",
    goal: "Superar una entrevista de trabajo en italiano: presentarte, motivarte, negociar",
    goals: ["Presentar tu perfil con condizionale de cortesía", "Hablar de puntos fuertes y débiles", "Negociar condiciones y horario"],
    scenario: "Entrevista para un puesto de marketing en una start-up de Milán. La recruiter es amable pero puntillosa. Toca vender tu perfil, reconocer debilidades y preguntar condiciones — todo en italiano profesional.",
    dialogue: [
      { speaker: "Recruiter", it: "Mi parli un po' di lei: perché questo settore?", es: "Hábleme un poco de usted: ¿por qué este sector?" },
      { speaker: "Tu", it: "Ho sempre amato la comunicazione. Tre anni fa ho iniziato a lavorare nei social media e non mi sono più fermato.", es: "Siempre me ha encantado la comunicación. Hace tres años empecé a trabajar en redes y no he parado." },
      { speaker: "Recruiter", it: "E qual è il suo punto di forza? E il suo punto debole?", es: "¿Y cuál es su punto fuerte? ¿Y su punto débil?" },
      { speaker: "Tu", it: "Sono molto creativo e organizzato. Il mio punto debole? A volte sono troppo perfezionista.", es: "Soy muy creativo y organizado. ¿Mi punto débil? A veces soy demasiado perfeccionista." },
      { speaker: "Recruiter", it: "Classico! E cosa sa dirci della nostra azienda?", es: "¡Clásico! ¿Y qué puede decirnos de nuestra empresa?" },
      { speaker: "Tu", it: "So che avete lanciato l'app l'anno scorso e che state crescendo in Spagna: mi piacerebbe contribuire.", es: "Sé que lanzaron la app el año pasado y que están creciendo en España: me gustaría contribuir." },
      { speaker: "Recruiter", it: "Bene. Avrebbe domande per noi?", es: "Bien. ¿Tendría preguntas para nosotros?" },
      { speaker: "Tu", it: "Sì: il contratto prevede lo smart working? E quanto sarebbe il periodo di prova?", es: "Sí: ¿el contrato contempla teletrabajo? ¿Y cuánto sería el periodo de prueba?" },
    ],
    comprehension: [
      { q: "¿Cuánto lleva trabajando en redes?", options: ["Un año", "Dos años", "Tres años"], answer: 2 },
      { q: "¿Cuál es su punto débil declarado?", options: ["Desorganización", "Perfeccionismo", "Impuntualidad"], answer: 1 },
      { q: "¿Qué pregunta al final?", options: ["Salario exacto", "Teletrabajo y periodo de prueba", "Vacaciones"], answer: 1 },
    ],
    chunks: [
      { it: "Mi parli un po' di lei.", es: "Hábleme un poco de usted." },
      { it: "Ho sempre amato…", es: "Siempre me ha encantado…" },
      { it: "Il mio punto di forza / debole", es: "Mi punto fuerte / débil" },
      { it: "Mi piacerebbe contribuire.", es: "Me gustaría contribuir." },
      { it: "Avrebbe domande per noi?", es: "¿Tendría preguntas para nosotros?" },
      { it: "Il contratto prevede…?", es: "¿El contrato contempla…?" },
    ],
    grammar: {
      focus: "Condizionale de cortesía y presentarse",
      inductive: [
        { it: "Vorrei lavorare nel vostro team.", es: "Querría trabajar en su equipo." },
        { it: "Potrebbe dirmi di più sul ruolo?", es: "¿Podría decirme más sobre el puesto?" },
        { it: "Sarebbe possibile fare smart working?", es: "¿Sería posible hacer teletrabajo?" },
      ],
      rule: [
        "El condizionale presente suaviza todo: vorrei (querría), potrei (podría), sarebbe (sería). En entrevistas es tu traje verbal: pide, ofrece y pregunta sin sonar brusco.",
        "Perfil: ho lavorato / ho gestito / ho lanciato (logros con passato prossimo); punti di forza con soy + adjetivo; debilidades con «a volte sono troppo…» — siempre con remedio.",
      ],
      topicId: "g-b1-condizionale",
      gaps: [
        { q: "___ possibile fare due domande? (ser)", options: ["Sarà", "Sarebbe", "Sarei"], answer: 1 },
        { q: "___ lavorare con voi. (querer, cortés)", options: ["Vorrei", "Voglio", "Volevo"], answer: 0 },
        { q: "Potrebbe ___ più dettagli? (dar)", options: ["dare", "darmi", "data"], answer: 0 },
      ],
    },
    pronunciation: {
      focus: "El tono profesional",
      tip: "La cortesía condicional baja el tono al final: «potrebbe dirmi…». La seguridad profesional es plana y firme: «ho gestito un team di cinque persone». Alterna confianza y suavidad.",
      pairs: [
        { a: "Vorrei…", b: "Voglio!", note: "cortés vs directo" },
        { a: "Sarebbe possibile?", b: "È possibile?", note: "condicional vs indicativo" },
        { a: "Mi piacerebbe", b: "Mi piace", note: "sueño vs hecho" },
      ],
    },
    speaking: {
      steps: [
        { kind: "controllato", task: "Repite tu pitch: «Ho lavorato tre anni in…, ho gestito…, vorrei contribuire a…»." },
        { kind: "semi", task: "Prepara 3 punti di forza con ejemplos y 1 punto debole con remedio. Dilo en voz alta." },
        { kind: "comunicativo", task: "Simulación de entrevista completa: perfil, motivación, debilidad, preguntas finales." },
        { kind: "autentico", task: "Graba tu «me presento en 90 secondi» y revísalo: cortesía, logros, preguntas." },
      ],
    },
    reading: {
      sourceId: "rd-26",
      question: "¿Cómo se desarrolla el colloquio de la lectura y qué impresión deja?",
    },
    writing: {
      task: "Escribe tu email de candidatura (100-120 palabras): quién eres, por qué ellos, 2 logros, disponibilidad y cortesía final.",
      minWords: 90,
      tips: ["Vorrei candidarmi per…", "Ho gestito / ho aumentato… con números"],
      model: [
        "Gentile dott.ssa Rossi,",
        "vorrei candidarmi per la posizione di Social Media Manager. Ho tre anni di esperienza e ho gestito campagne con oltre 50.000 follower.",
        "Sarei felice di approfondire in un colloquio. Cordiali saluti.",
      ],
    },
    culture: {
      title: "El colloquio italiano",
      text: "El colloquio italiano valora la persona además del CV: se espera pasión («perché noi?»), puntualidad extrema (llega 10 minutos antes) y alguna pregunta inteligente al final. El salario se negocia al final del proceso, con tacto. Y el «perfezionismo» como defecto es un clásico que aún funciona.",
    },
    finalTask: {
      title: "Il colloquio perfetto",
      brief: "Simula la entrevista completa de tu puesto soñado: presentación, logros con números, debilidad con remedio, 3 preguntas al final y cierre entusiasta. Graba y revisa.",
      checklist: ["Usé condizionale para cortesía", "Di 2 logros con cifras", "Hice al menos 2 preguntas finales"],
    },
    review: [
      { q: "«Avrebbe domande?» usa el condizionale para…", options: ["dudar", "cortesía formal", "pasado"], answer: 1 },
      { q: "___ possibile lavorare da remoto?", options: ["Sarà", "Sarebbe", "È stato"], answer: 1 },
      { q: "«Il contratto prevede…» =", options: ["el contrato prevé…", "el contrato impide…", "el contrato vence…"], answer: 0 },
      { q: "Mi ___ candidarmi per il ruolo. (cortés)", options: ["piace", "piacerebbe", "piaceva"], answer: 1 },
    ],
    cando: [
      "Puedo presentar mi perfil profesional con logros",
      "Puedo negociar condiciones con cortesía",
      "Puedo escribir una candidatura formal",
    ],
  },

  {
    id: "cu-b1-03", n: 3, level: "B1",
    title: "Viajes y percances", titleIt: "Viaggi e imprevisti",
    img: "/images/situazioni/sit-aeroporto.jpg",
    goal: "Resolver problemas de viaje: retrasos, pérdidas y cambios de plan",
    goals: ["Quejarse y pedir soluciones con congiuntivo", "Entender anuncios y gestionar imprevistos", "Reclamar equipaje o billetes"],
    scenario: "Vuelo Roma→Palermo con escala en Milán. La maleta no aparece en la cinta, el vuelo de conexión se retrasa y el hotel cierra reception a medianoche. Un viaje perfecto… para practicar B1.",
    dialogue: [
      { speaker: "Tu", it: "Scusi, la mia valigia non è arrivata. Cosa devo fare?", es: "Disculpe, mi maleta no ha llegado. ¿Qué debo hacer?" },
      { speaker: "Addetto", it: "Ha il talloncino del biglietto? Compili questo modulo, per favore.", es: "¿Tiene el talón del billete? Rellene este formulario, por favor." },
      { speaker: "Tu", it: "Ecco. Ma è possibile che la valigia sia rimasta a Milano?", es: "Aquí. ¿Pero es posible que la maleta se haya quedado en Milán?" },
      { speaker: "Addetto", it: "Purtroppo sì. Gliela recapitiamo in hotel entro domani, speriamo.", es: "Por desgracia, sí. Se la entregamos en el hotel antes de mañana, esperemos." },
      { speaker: "Tu", it: "Senta, il mio volo di ritorno è stato spostato: vorrei cambiare anche l'hotel.", es: "Oiga, mi vuelo de vuelta se ha cambiado: querría cambiar también el hotel." },
      { speaker: "Addetto", it: "Deve chiamare l'agenzia. Anche se è un problema, non possiamo modificare le prenotazioni.", es: "Debe llamar a la agencia. Aunque sea un problema, no podemos modificar las reservas." },
      { speaker: "Tu", it: "Capisco, anche se non è facile… Sa se c'è un farmacia aperta a quest'ora?", es: "Entiendo, aunque no sea fácil… ¿Sabe si hay una farmacia abierta a esta hora?" },
      { speaker: "Addetto", it: "Ce n'è una in aeroporto, di fronte all'uscita due. In bocca al lupo!", es: "Hay una en el aeropuerto, frente a la salida dos. ¡Suerte!" },
    ],
    comprehension: [
      { q: "¿Qué problema principal tiene?", options: ["Perdió el billete", "La maleta no llegó", "El hotel canceló"], answer: 1 },
      { q: "¿Dónde podría estar la maleta?", options: ["En Palermo", "En Milán", "En el hotel"], answer: 1 },
      { q: "¿Quién puede modificar la reserva del hotel?", options: ["El addetto", "La agencia", "El hotel"], answer: 1 },
    ],
    chunks: [
      { it: "È possibile che la valigia sia rimasta a…", es: "Es posible que la maleta se haya quedado en…" },
      { it: "Senta, c'è un problema.", es: "Oiga, hay un problema." },
      { it: "Gliela recapitiamo in hotel.", es: "Se la entregamos en el hotel." },
      { it: "Anche se è difficile, …", es: "Aunque sea difícil,…" },
      { it: "Sa se…?", es: "¿Sabe si…?" },
      { it: "In bocca al lupo!", es: "¡Mucha suerte!" },
    ],
    grammar: {
      focus: "Congiuntivo presente: opinión, posibilidad, aunque",
      inductive: [
        { it: "Penso che sia un errore.", es: "Pienso que es un error." },
        { it: "È possibile che il volo sia in ritardo.", es: "Es posible que el vuelo vaya con retraso." },
        { it: "Anche se è difficile, resto calmo.", es: "Aunque sea difícil, me mantengo tranquilo." },
      ],
      rule: [
        "El congiuntivo aparece tras verbos de opinión/duda (penso che, credo che, è possibile che) y tras aunque (anche se), antes que (prima che), sin que (senza che). Formas: sia, abbia, sia, faccia, vada, debba.",
        "Verbos clave irregulares: essere→sia, avere→abbia, andare→vada, fare→facia→faccia, potere→possa, dovere→debba. Con «che» obligatorio: no lo comas nunca.",
      ],
      topicId: "g-b1-congiuntivo",
      gaps: [
        { q: "Credo che il volo ___ in ritardo. (essere)", options: ["è", "sia", "sarebbe"], answer: 1 },
        { q: "È possibile che la valigia ___ a Milano. (rimanere)", options: ["rimane", "rimanga", "rimase"], answer: 1 },
        { q: "Anche se ___ difficile, farò il reclamo. (essere)", options: ["è", "sia", "era"], answer: 1 },
      ],
    },
    pronunciation: {
      focus: "La queja elegante",
      tip: "«Senta…» con e abierta y tono alto pero controlado. La queja italiana eficaz es firme y pausada: «Purtroppo c'è un problema…». El congiuntivo «sia» suena casi igual que «è» — el contexto lo distingue.",
      pairs: [
        { a: "sia", b: "è", note: "subjuntivo vs indicativo, sonido cercano" },
        { a: "Senta!", b: "Scusi!", note: "llamar la atención" },
        { a: "Purtroppo…", b: "Per fortuna…", note: "mala y buena suerte" },
      ],
    },
    speaking: {
      steps: [
        { kind: "controllato", task: "Repite: «Penso che sia un errore. È possibile che ci sia un ritardo»." },
        { kind: "semi", task: "Describe el peor percance de viaje de tu vida y cómo lo resolviste (8 frases)." },
        { kind: "comunicativo", task: "Roleplay: equipaje perdido + cambio de billete + hotel. Quejarte sin perder la calma." },
        { kind: "autentico", task: "Lee los derechos del pasajero de una aerolínea italiana y resume qué harías con 2 imprevistos." },
      ],
    },
    reading: {
      lines: [
        { it: "In Italia i diritti dei passeggeri sono tutelati: ritardo oltre tre ore, bagaglio perso o danneggiato = compensazione.", es: "En Italia los derechos de los pasajeros están protegidos: retraso de más de tres horas, equipaje perdido o dañado = compensación." },
        { it: "Il trucco è compilare subito il modulo «PIR» all'ufficio bagagli smarriti, prima di uscire dall'aeroporto.", es: "El truco es rellenar enseguida el formulario «PIR» en la oficina de equipajes perdidos, antes de salir del aeropuerto." },
      ],
      question: "¿Qué hay que hacer con el equipaje perdido antes de salir del aeropuerto?",
    },
    writing: {
      task: "Escribe un email de reclamación (100 palabras): vuelo, qué pasó, qué pides (compensación/cambio) y datos de contacto.",
      minWords: 80,
      tips: ["Vi scrivo per segnalare che…", "Chiederei il rimborso / il cambio"],
      model: [
        "Gentile compagnia,",
        "vi scrivo per segnalare che il volo AZ321 del 12 maggio è arrivato con quattro ore di ritardo e la mia valigia non è mai arrivata.",
        "Chiederei un rimborso secondo il regolamento europeo. Resto a disposizione, cordiali saluti.",
      ],
    },
    culture: {
      title: "La paciencia italiana",
      text: "El sistema italiano funciona… a su ritmo. La palabra mágica en los percances es «purtroppo»: la aceptan funcionarios y apps por igual. Los italianos protestan con ironía antes que con gritos: «Pazienza!» es la resignación elegante que abre más puertas que la bronca.",
    },
    finalTask: {
      title: "Il viaggio disastroso",
      brief: "Simula el viaje con tres imprevistos encadenados: equipaje, retraso, hotel. Resuelve cada uno reclamando con cortesía y congiuntivo. Narra luego el desastre con humor.",
      checklist: ["Usé congiuntivo tras penso che / è possibile che", "Reclamé con firmeza y cortesía", "Narré el resultado final"],
    },
    review: [
      { q: "Credo che ___ un errore. (essere)", options: ["è", "sia", "fosse"], answer: 1 },
      { q: "«Gliela recapitiamo» contiene…", options: ["pronombre indirecto + directo", "dos indirectos", "ningún pronombre"], answer: 0 },
      { q: "Anche se ___ stanco, continuo. (essere, subj.)", options: ["è", "sia", "era"], answer: 1 },
      { q: "«In bocca al lupo» se responde…", options: ["grazie", "crepi!", "prego"], answer: 1 },
    ],
    cando: [
      "Puedo quejarme y pedir soluciones con cortesía",
      "Puedo usar el congiuntivo básico en opiniones",
      "Puedo gestionar imprevistos de viaje",
    ],
  },

  {
    id: "cu-b1-04", n: 4, level: "B1",
    title: "Viviendas y mudanzas", titleIt: "Case e traslochi",
    img: "/images/conversazione/cs-16.jpg",
    goal: "Buscar piso, entender contratos y describir mudanzas",
    goals: ["Describir viviendas con detalle y registros", "Entender un anuncio y un contrato de alquiler", "Contar una mudanza con pronomi combinados"],
    scenario: "Dejas tu piso compartido y buscas apartamento en Turín. Visitas tres opciones con la agente, comparas, lees el contrato con lupa y cuentas la odisea de la mudanza.",
    dialogue: [
      { speaker: "Agente", it: "Questo monolocale è stato ristrutturato l'anno scorso: cucina nuova, bagno con finestra.", es: "Este estudio fue reformado el año pasado: cocina nueva, baño con ventana." },
      { speaker: "Tu", it: "Mi piace, ma il balcone che si vede nella foto dov'è?", es: "Me gusta, pero ¿dónde está el balcón que se ve en la foto?" },
      { speaker: "Agente", it: "Ah, quello è dell'appartamento accanto… Il nostro non ce l'ha, mi dispiace.", es: "Ah, ese es del piso de al lado… El nuestro no lo tiene, lo siento." },
      { speaker: "Tu", it: "Capisco. E le spese di condominio sono incluse nel canone?", es: "Entiendo. ¿Y los gastos de comunidad están incluidos en la renta?" },
      { speaker: "Agente", it: "No, si pagano a parte: sono ottanta euro al mese. Il contratto è a uso transitorio.", es: "No, se pagan aparte: son ochenta euros al mes. El contrato es de uso transitorio." },
      { speaker: "Tu", it: "E la caparra quanto sarebbe? Ve l'ho chiesto anche per l'altro appartamento.", es: "¿Y la fianza cuánto sería? Se lo pregunté también por el otro piso." },
      { speaker: "Agente", it: "Due mensilità. Le lascio il contratto: se lo legga con calma e me lo faccia sapere.", es: "Dos mensualidades. Le dejo el contrato: léalo con calma y hágame lo saber." },
      { speaker: "Tu", it: "Grazie! Domattina glielo restituisco e le dico cosa ho deciso.", es: "¡Gracias! Mañana se lo devuelvo y le digo lo que he decidido." },
    ],
    comprehension: [
      { q: "¿Qué tiene el monolocale?", options: ["Balcón grande", "Cocina nueva y baño con ventana", "Terraza"], answer: 1 },
      { q: "¿Qué NO está incluido en la renta?", options: ["El agua", "Los gastos de comunidad (80 €)", "La calefacción"], answer: 1 },
      { q: "¿Cuánto es la fianza?", options: ["Una mensualidad", "Dos mensualidades", "Tres mensualidades"], answer: 1 },
    ],
    chunks: [
      { it: "È stato ristrutturato l'anno scorso.", es: "Fue reformado el año pasado." },
      { it: "le spese di condominio", es: "los gastos de comunidad" },
      { it: "Il contratto è a uso transitorio.", es: "El contrato es de uso transitorio." },
      { it: "me lo legga con calma", es: "léalo con calma" },
      { it: "Glielo restituisco domani.", es: "Se lo devuelvo mañana." },
      { it: "Mi faccia sapere.", es: "Hágamelo saber." },
    ],
    grammar: {
      focus: "Pronombres combinados y passivo útil",
      inductive: [
        { it: "Me lo mandi per email? Glielo spedisco oggi.", es: "¿Me lo manda por email? Se lo envío hoy." },
        { it: "L'appartamento è stato affittato ieri.", es: "El piso fue alquilado ayer." },
        { it: "Si legge il contratto con calma.", es: "Se lee el contrato con calma." },
      ],
      rule: [
        "Combinados: indirecto delante (mi, ti, gli/le, ci, vi, gli) + directo detrás (lo, la, li, le, ne): me lo, glielo, ce la. Con imperativo formal se posponen y doblan: me lo mandi → me lo mandi (indicativo) / me lo mandi… attenzione: formal «me lo mandi» igual.",
        "El passivo con essere + participio es ubicuo en contratos: è incluso, è previsto, è stato ristrutturato. Y el si impersonal como alternativa: si paga a parte.",
      ],
      topicId: "g3-b2-pronomi-combinati",
      gaps: [
        { q: "Il contratto? ___ domani. (se lo devuelvo)", options: ["Glielo restituisco", "Lo gli restituisco", "Se lo restituisco"], answer: 0 },
        { q: "La caparra è ___ nell'affitto. (incluir)", options: ["incluso", "inclusa", "inclusi"], answer: 1 },
        { q: "Le spese ___ a parte. (pagarse)", options: ["si pagano", "si paga", "sono pago"], answer: 0 },
      ],
    },
    pronunciation: {
      focus: "Dobles en el vocabulario de casa",
      tip: "Vocabulario inmobiliario lleno de dobles: appartamento (pp), ristrutturato (tt), transitorio (ns), condominio (nd). Alarga las dobles o sonarán simples — y cambiarán de ritmo.",
      pairs: [
        { a: "casa", b: "cassa", note: "simple vs doble" },
        { a: "affitto", b: "fitto", note: "ff dobles" },
        { a: "caparra", b: "città", note: "rr y tt" },
      ],
    },
    speaking: {
      steps: [
        { kind: "controllato", task: "Repite: «Le spese si pagano a parte. Il contratto è a uso transitorio»." },
        { kind: "semi", task: "Describe tu piso ideal y tu piso actual, comparando con el que visitaste (8 frases)." },
        { kind: "comunicativo", task: "Roleplay agente-cliente: visita, 5 preguntas incómodas, negociación de fianza y plazos." },
        { kind: "autentico", task: "Lee 3 anuncios reales en Idealista.it y resume cada piso en 2 frases." },
      ],
    },
    reading: {
      lines: [
        { it: "Il contratto transitorio va da 1 a 18 mesi: serve per studenti e lavoratori temporanei, con requisiti precisi.", es: "El contrato transitorio va de 1 a 18 meses: sirve para estudiantes y trabajadores temporales, con requisitos precisos." },
        { it: "Il classico «4+4» è invece per chi cerca stabilità: quattro anni rinnovabili una volta.", es: "El clásico «4+4» es en cambio para quien busca estabilidad: cuatro años renovables una vez." },
      ],
      question: "¿Para quién sirve el contrato transitorio y cuánto dura el 4+4?",
    },
    writing: {
      task: "Escribe un mensaje a la agente (100 palabras) tras la visita: qué te gustó, qué no, tu oferta y una petición de aclaración del contrato.",
      minWords: 80,
      tips: ["Gli/Le scrivo per…", "Mi chiedevo se… (duda cortés)"],
      model: [
        "Gentile signora Bianchi,",
        "la ringrazio per la visita: l'appartamento mi è piaciuto, soprattutto la cucina nuova.",
        "Mi chiedevo però se le spese potessero essere incluse nel canone. Resto in attesa, cordiali saluti.",
      ],
    },
    culture: {
      title: "El mercado inmobiliario italiano",
      text: "Milán y Turín tienen la fiebre del alquiler; el sur, precios humanos. La «caparra» legal es máximo 3 meses, y el registro del contrato es obligatorio (lo paga el casero, pero lo repercuten). Busca la palabra «ristrutturato»: suele subir el precio — y justificarlo.",
    },
    finalTask: {
      title: "Il trasloco perfetto",
      brief: "Presenta tu plan de mudanza: piso elegido (con por qué), contrato, fianza, y la logística del trasloco en 10 frases con pronomi combinados.",
      checklist: ["Usé al menos 4 pronombres combinados", "Describí el contrato con vocabulario real", "La decisión tiene razones económicas y prácticas"],
    },
    review: [
      { q: "«Glielo restituisco domani» =", options: ["te lo devuelvo mañana", "se lo devuelvo mañana", "nos lo devuelve mañana"], answer: 1 },
      { q: "La caparra ___ due mensilità. (ser, pasivo)", options: ["è", "sono", "è stata le"], answer: 0 },
      { q: "Le spese ___ a parte. (pagarse)", options: ["si paga", "si pagano", "pagano"], answer: 1 },
      { q: "Il contratto transitorio dura…", options: ["1-18 mesi", "4+4 anni", "siempre"], answer: 0 },
    ],
    cando: [
      "Puedo entender anuncios y contratos de alquiler",
      "Puedo usar pronombres combinados con soltura",
      "Puedo describir y comparar viviendas en detalle",
    ],
  },

  {
    id: "cu-b1-05", n: 5, level: "B1",
    title: "Ambiente y sociedad", titleIt: "Ambiente e società",
    img: "/images/letture/inf-mare-06.jpg",
    goal: "Opinar sobre temas de actualidad con argumentos conectados",
    goals: ["Expresar opiniones a favor y en contra", "Conectar ideas con però, quindi, infatti, mentre", "Proponer soluciones"],
    scenario: "Mesa redonda en tu curso de italiano: «El turismo de masas y el medio ambiente en las costas italianas». Tienes datos, tienes opiniones… y tienes que conectarlas como un B1 de pro.",
    dialogue: [
      { speaker: "Prof", it: "Allora: il turismo di massa aiuta o danneggia l'Italia?", es: "Bien: ¿el turismo de masas ayuda o daña a Italia?" },
      { speaker: "Tu", it: "Secondo me, danneggia le città d'arte. Infatti a Venezia ci sono troppi visitatori in un giorno.", es: "Según yo, daña las ciudades de arte. De hecho en Venecia hay demasiados visitantes en un día." },
      { speaker: "Anna", it: "Però il turismo porta lavoro! Molti italiani vivono solo di questo.", es: "¡Pero el turismo trae trabajo! Muchos italianos viven solo de esto." },
      { speaker: "Tu", it: "Vero. Tuttavia, se il turismo non è sostenibile, il lavoro muore insieme alla città.", es: "Cierto. Sin embargo, si el turismo no es sostenible, el trabajo muere junto con la ciudad." },
      { speaker: "Prof", it: "Quindi cosa proporresti?", es: "¿Entonces qué propondrías?" },
      { speaker: "Tu", it: "Proporrei un limite di accessi al centro, come hanno fatto con l'isola di Burano.", es: "Propondría un límite de accesos al centro, como han hecho con la isla de Burano." },
      { speaker: "Anna", it: "E i residenti? Non è un po' autoritario?", es: "¿Y los residentes? ¿No es un poco autoritario?" },
      { speaker: "Tu", it: "Non credo. In fin dei conti, chi vive lì ha il diritto di dormire la notte!", es: "No creo. Al fin y al cabo, ¡quien vive allí tiene derecho a dormir de noche!" },
    ],
    comprehension: [
      { q: "¿Qué postura inicial defiende el protagonista?", options: ["El turismo daña", "El turismo ayuda", "Es indiferente"], answer: 0 },
      { q: "¿Qué contraargumento da Anna?", options: ["El turismo es sostenible", "El turismo da trabajo", "Los turistas gastan poco"], answer: 1 },
      { q: "¿Qué solución propone el protagonista?", options: ["Impuesto alto", "Límite de accesos como en Burano", "Prohibir Airbnb"], answer: 1 },
    ],
    chunks: [
      { it: "Secondo me, …", es: "Según yo,…" },
      { it: "Infatti, …", es: "De hecho,…" },
      { it: "Però / Tuttavia, …", es: "Pero / Sin embargo,…" },
      { it: "Quindi cosa proporresti?", es: "¿Entonces qué propondrías?" },
      { it: "Proporrei…", es: "Propondría…" },
      { it: "In fin dei conti, …", es: "Al fin y al cabo,…" },
    ],
    grammar: {
      focus: "Connettivi argumentativos y condizionale para propuestas",
      inductive: [
        { it: "Il turismo porta soldi; però rovina la città.", es: "El turismo trae dinero; pero arruina la ciudad." },
        { it: "Se continua così, quindi, Venezia morirà.", es: "Si sigue así, por tanto, Venecia morirá." },
        { it: "Bisognerebbe limitare i accessi.", es: "Habría que limitar los accesos." },
      ],
      rule: [
        "Caja de herramientas argumentativa: infatti (de hecho, confirma), però/tuttavia (contraste), quindi/perciò (consecuencia), mentre (mientras que), in fin dei conti (al fin y al cabo), da un lato… dall'altro (por un lado… por otro).",
        "Para proponer sin imponer: bisognerebbe (habría que), si dovrebbe (se debería), proporrei (propondría). El condizionale suaviza la propuesta y suena educated.",
      ],
      topicId: "gx-b2-connettivi",
      gaps: [
        { q: "Porta lavoro; ___ rovina la città. (contraste)", options: ["infatti", "però", "quindi"], answer: 1 },
        { q: "Non c'è acqua; ___ il deserto cresce. (consecuencia)", options: ["quindi", "mentre", "però"], answer: 0 },
        { q: "___ limitare i turisti. (habría que)", options: ["Bisogna", "Bisognerebbe", "Bisognava"], answer: 1 },
      ],
    },
    pronunciation: {
      focus: "La retórica italiana",
      tip: "El italiano debate con las manos y la voz: sube en la tesis, pausa tras infatti, remata en fin dei conti. Los connettivi son las pausas del pensamiento — respétalas.",
      pairs: [
        { a: "Secondo me…", b: "Però…", note: "tesis y réplica" },
        { a: "Infatti,", b: "Tuttavia,", note: "confirmar vs girar" },
        { a: "Quindi…", b: "In fin dei conti…", note: "conclusión vs remate" },
      ],
    },
    speaking: {
      steps: [
        { kind: "controllato", task: "Repite la caja: «Secondo me…, infatti…, però…, quindi…, in fin dei conti…»." },
        { kind: "semi", task: "Da tu opinión sobre el turismo de masas en 8 frases conectadas, con propuesta final." },
        { kind: "comunicativo", task: "Debate real: turismo, coches en el centro, plásticos — posturas contrarias, 5 turnos cada uno." },
        { kind: "autentico", task: "Lee una noticia italiana (repubblica.it) y opina en voz alta con 3 connettivi mínimo." },
      ],
    },
    reading: {
      letturaId: "inf-mare-06",
      question: "¿Qué problema costero describe la lectura y qué soluciones se proponen?",
    },
    writing: {
      task: "Escribe un artículo de opinión (120 palabras): «¿Limitar o no el turismo en las ciudades de arte?» Con tesis, 2 argumentos, contraargumento y propuesta.",
      minWords: 100,
      tips: ["Un connettivo cada 2 frases, mínimo 5 distintos", "Cierra con bisognerebbe / proporrei"],
      model: [
        "Secondo me, bisognerebbe limitare il turismo nelle città d'arte. Infatti, Venezia riceve più visitatori di quanti ne possa sostenere.",
        "È vero che il turismo porta lavoro; tuttavia, senza regole, la città stessa muore.",
        "In fin dei conti, proporrei un biglietto d'ingresso giornaliero per i non residenti.",
      ],
    },
    culture: {
      title: "El debate del buon turismo",
      text: "Venecia contra el crucero, Florencia contra los pisos turísticos, Cinque Terre contra el exceso: Italia debate cómo seguir viviendo del turismo sin morir de éxito. El «ticket d'ingresso» veneciano (2024) fue un experimento mundial seguido de cerca por todas las ciudades de arte.",
    },
    finalTask: {
      title: "La tavola rotonda",
      brief: "Participa en la mesa redonda: postura, 3 argumentos conectados, réplica a una objeción y propuesta con condizionale. Preséntalo como tu minuto de debate.",
      checklist: ["Usé 5 connettivi distintos", "Repliqué a una objeción", "Mi propuesta usa bisognerebbe/proporrei"],
    },
    review: [
      { q: "«Infatti» sirve para…", options: ["confirmar", "contrastar", "concluir"], answer: 0 },
      { q: "Bisognerebbe…", options: ["hay que (obligación)", "habría que (propuesta)", "había que (pasado)"], answer: 1 },
      { q: "Porta soldi; ___ rovina tutto. (contraste)", options: ["quindi", "però", "infatti"], answer: 1 },
      { q: "«In fin dei conti» =", options: ["al fin y al cabo", "sin embargo", "de hecho"], answer: 0 },
    ],
    cando: [
      "Puedo opinar con argumentos conectados",
      "Puedo replicar a objeciones",
      "Puedo proponer soluciones con cortesía",
    ],
  },

  {
    id: "cu-b1-06", n: 6, level: "B1",
    title: "Cocina y territorio", titleIt: "Cucina e territorio",
    img: "/images/testi/rd-25.jpg",
    goal: "Hablar de gastronomía regional con frases relative y vocabulario específico",
    goals: ["Describir platos y productos con relative (che, cui, dove)", "Contar tradiciones gastronómicas", "Recomendar restaurantes y platos"],
    scenario: "Un food festival en tu ciudad invita a los estudiantes a presentar «su Italia gastronómica». Eliges tres regiones, sus platos bandera y las historias que hay detrás.",
    dialogue: [
      { speaker: "Presentatore", it: "Quale regione ci presenta oggi?", es: "¿Qué región nos presenta hoy?" },
      { speaker: "Tu", it: "L'Emilia-Romagna, la regione dove è nata la pasta fresca.", es: "La Emilia-Romaña, la región donde nació la pasta fresca." },
      { speaker: "Presentatore", it: "E quale piatto che la rappresenta meglio?", es: "¿Y qué plato la representa mejor?" },
      { speaker: "Tu", it: "Le tagliatelle al ragù, un piatto il cui condimento cuoce tre ore.", es: "Las tagliatelle al ragú, un plato cuya salsa se cuece tres horas." },
      { speaker: "Presentatore", it: "Affascinante! E il vino che si abbina?", es: "¡Fascinante! ¿Y el vino que lo acompaña?" },
      { speaker: "Tu", it: "Un Lambrusco, che molti sottovalutano ma che è perfetto con la pasta.", es: "Un Lambrusco, que muchos subestiman pero que es perfecto con la pasta." },
      { speaker: "Presentatore", it: "Consiglierebbe una trattoria tipica ai nostri ascoltatori?", es: "¿Recomendaría una trattoria típica a nuestros oyentes?" },
      { speaker: "Tu", it: "Certo! Cerchino un posto dove i residenti fanno la fila: quello è il vero segno.", es: "¡Claro! Busquen un sitio donde los residentes hacen cola: esa es la verdadera señal." },
    ],
    comprehension: [
      { q: "¿Qué región presenta?", options: ["Toscana", "Emilia-Romagna", "Sicilia"], answer: 1 },
      { q: "¿Cuánto se cuece el ragù?", options: ["Media hora", "Una hora", "Tres horas"], answer: 2 },
      { q: "¿Cuál es la señal del buen restaurante según el protagonista?", options: ["Los premios", "La cola de residentes", "El menú en inglés"], answer: 1 },
    ],
    chunks: [
      { it: "la regione dove è nata…", es: "la región donde nació…" },
      { it: "il piatto che la rappresenta", es: "el plato que la representa" },
      { it: "un piatto il cui segreto è…", es: "un plato cuyo secreto es…" },
      { it: "Si abbina perfettamente con…", es: "Marida perfectamente con…" },
      { it: "Consiglierei…", es: "Recomendaría…" },
      { it: "il vero segno di qualità", es: "la verdadera señal de calidad" },
    ],
    grammar: {
      focus: "Frases relative: che, cui, dove",
      inductive: [
        { it: "Le tagliatelle che cuociono tre ore.", es: "Las tagliatelle que se cuecen tres horas." },
        { it: "La regione da cui viene il Lambrusco.", es: "La región de la que viene el Lambrusco." },
        { it: "Un ristorante dove i locali mangiano bene.", es: "Un restaurante donde los locales comen bien." },
      ],
      rule: [
        "che = que (sujeto u objeto, invariable): il formaggio che mangio. dove = donde (lugares): la città dove vivo.",
        "cui = quien/el cual, siempre con preposición cuando el relativo no es sujeto/objeto directo: il piatto di cui parlo, la città in cui sono nato, un segreto su cui contare. «il cui» posesivo: il libro il cui titolo…",
      ],
      topicId: "g-b1-relative",
      gaps: [
        { q: "La pasta ___ parlo è la carbonara. (de la que)", options: ["che", "di cui", "dove"], answer: 1 },
        { q: "Il ristorante ___ abbiamo mangiato era perfetto. (donde)", options: ["che", "dove", "cui"], answer: 1 },
        { q: "Il ragù ___ cuoce tre ore è quello vero. (que)", options: ["che", "cui", "dove"], answer: 0 },
      ],
    },
    pronunciation: {
      focus: "Los nombres gastronómicos regionales",
      tip: "La gastronomía regional es un campo minado fonético: tagliatelle (ta-LLia-TEL-le), gnocco fritto (ÑO-co), mortadella (morta-DEL-la). Escucha y repite plato por plato.",
      pairs: [
        { a: "tagliatelle", b: "gnocchi", note: "gli y gn" },
        { a: "Lambrusco", b: "ragù", note: "acento penúltima vs última" },
        { a: "mortadella", b: "mozzarella", note: "dobles regionali" },
      ],
    },
    speaking: {
      steps: [
        { kind: "controllato", task: "Repite: «La regione da cui vengo è famosa per… Il piatto che amo è…»." },
        { kind: "semi", task: "Presenta tu región gastronómica: 3 platos con relative y una recomendación." },
        { kind: "comunicativo", task: "Roleplay radiofónico: entrevistador + experto gastronómico, 5 preguntas y respuestas con relative." },
        { kind: "autentico", task: "Busca el plato típico de una región italiana que no conozcas y preséntalo en 6 frases." },
      ],
    },
    reading: {
      letturaId: "cult-cucina-19",
      question: "¿Cómo se organiza la cocina regional italiana según la lectura?",
    },
    writing: {
      task: "Escribe la guía gastronómica de tu región (120 palabras): 3 platos con frases relative, un producto il cui secreto…, un lugar donde… y una recomendación.",
      minWords: 100,
      tips: ["che / di cui / dove en cada plato", "Consiglierei para cerrar"],
      model: [
        "La mia regione è famosa per il ceviche, un piatto che cuoce nel limone.",
        "Il ristorante di cui vi parlo si trova al porto, dove i pescatori pranzano.",
        "Consiglierei anche il mercato in cui vendono il mais tostato: imbattibile.",
      ],
    },
    culture: {
      title: "La cocina como patria",
      text: "Italia no tiene una cocina: tiene veinte. La Emilia de las pastas frescas, Campania de la pizza y el caffè, Sicilia de la cassata y el pesce spada. Preguntar «qual è il piatto tipico?» abre cualquier conversación — y discusión: cada pueblo defiende su versión como única verdadera.",
      cultureId: "cul-11",
    },
    finalTask: {
      title: "La mia guida gastronomica",
      brief: "Presenta tu mini-guía gastronómica: una región (o tu país), 3 platos con sus historias, un maridaje y una recomendación final. Como crítico culinario en radio.",
      checklist: ["Usé 5 frases relative (che/cui/dove)", "Conté una historia detrás de un plato", "Di una recomendación motivada"],
    },
    review: [
      { q: "Il piatto ___ parli è tipico. (del que)", options: ["che", "di cui", "dove"], answer: 1 },
      { q: "La città ___ sono nato è Roma.", options: ["che", "dove", "cui"], answer: 1 },
      { q: "Un vino ___ si abbina col pesce. (que)", options: ["che", "cui", "dove"], answer: 0 },
      { q: "«Si abbina con» =", options: ["se enfada con", "marida con", "se compara con"], answer: 1 },
    ],
    cando: [
      "Puedo describir platos y tradiciones con relative",
      "Puedo recomendar con motivos",
      "Puedo hablar de gastronomía regional",
    ],
  },

  {
    id: "cu-b1-07", n: 7, level: "B1",
    title: "Medios y redes", titleIt: "Media e social",
    img: "/images/letture/inf-social-04.jpg",
    goal: "Contar lo que otros dijeron: discorso indiretto y opinar sobre medios",
    goals: ["Transmitir declaraciones con discorso indiretto", "Resumir noticias y artículos", "Opinar sobre redes y medios"],
    scenario: "Trabajo de clase: resumir en italiano lo que dijeron el ministro, la prensa y tu compañero sobre el «divieto di smartphone under 14». Citar bien a otros es todo un arte.",
    dialogue: [
      { speaker: "Prof", it: "Cosa ha detto il ministro sugli smartphone?", es: "¿Qué ha dicho el ministro sobre los móviles?" },
      { speaker: "Tu", it: "Ha detto che i telefoni sotto i 14 anni danneggiano la concentrazione.", es: "Ha dicho que los móviles antes de los 14 años dañan la concentración." },
      { speaker: "Prof", it: "E la stampa? Cosa ha riportato?", es: "¿Y la prensa? ¿Qué ha reportado?" },
      { speaker: "Tu", it: "I giornali hanno scritto che la misura è populista e difficile da applicare.", es: "Los periódicos han escrito que la medida es populista y difícil de aplicar." },
      { speaker: "Prof", it: "E lei? Cosa ne pensa?", es: "¿Y usted? ¿Qué piensa?" },
      { speaker: "Tu", it: "Penso che le scuole debbano educare all'uso, non solo vietare.", es: "Pienso que las escuelas deben educar en el uso, no solo prohibir." },
      { speaker: "Prof", it: "Ha sentito cosa ha detto il preside alla radio?", es: "¿Ha oído lo que ha dicho el director en la radio?" },
      { speaker: "Tu", it: "Sì: ha detto che senza i telefoni gli studenti parlano di più. Mi ha sorpreso!", es: "Sí: ha dicho que sin móviles los estudiantes hablan más. ¡Me ha sorprendido!" },
    ],
    comprehension: [
      { q: "¿Qué dijo el ministro?", options: ["Los móviles dañan la concentración", "Los móviles son útiles", "No dijo nada"], answer: 0 },
      { q: "¿Qué escribió la prensa?", options: ["Que es una buena medida", "Que es populista y difícil de aplicar", "Que ya existe"], answer: 1 },
      { q: "¿Qué opinó el protagonista?", options: ["Prohibir del todo", "Educar en el uso, no solo prohibir", "No opinó"], answer: 1 },
    ],
    chunks: [
      { it: "Ha detto che…", es: "Ha dicho que…" },
      { it: "I giornali hanno scritto che…", es: "Los periódicos han escrito que…" },
      { it: "Penso che le scuole debbano…", es: "Pienso que las escuelas deben…" },
      { it: "Mi ha sorpreso.", es: "Me ha sorprendido." },
      { it: "Cosa ne pensa?", es: "¿Qué piensa (de ello)?" },
      { it: "difficile da applicare", es: "difícil de aplicar" },
    ],
    grammar: {
      focus: "Discorso indiretto: decir lo que otros dijeron",
      inductive: [
        { it: "«Sono stanco» → Ha detto che era stanco.", es: "«Estoy cansado» → Ha dicho que estaba cansado." },
        { it: "«Verrò domani» → Ha detto che sarebbe venuto il giorno dopo.", es: "«Vendré mañana» → Ha dicho que vendría al día siguiente." },
        { it: "«Chiudi la finestra!» → Mi ha chiesto di chiudere la finestra.", es: "«¡Cierra la ventana!» → Me ha pedido cerrar la ventana." },
      ],
      rule: [
        "Al pasar a indirecto: presente→imperfetto (è→era), passato prossimo→trapassato (ho fatto→aveva fatto), futuro→condizionale (farò→avrebbe fatto). Imperativo→di + infinito.",
        "Verbos introductorios: ha detto che, ha chiesto se (pregunta), ha raccontato che, ha scritto che, secondo lui. La concordancia de tiempos es el corazón del reportaje.",
      ],
      topicId: "g-b2-discorso",
      gaps: [
        { q: "«Ho fame» → Ha detto che ___ fame.", options: ["ha", "aveva", "avrà"], answer: 1 },
        { q: "«Verrò» → Ha detto che ___ .", options: ["viene", "veniva", "sarebbe venuto"], answer: 2 },
        { q: "«Esci!» → Mi ha detto di ___ .", options: ["esco", "uscire", "uscito"], answer: 1 },
      ],
    },
    pronunciation: {
      focus: "Citar con la voz",
      tip: "En italiano se «hace la voz» del citado: tono más alto para el ministro, irónico para la prensa, neutro para el reportaje. El «ha detto che…» baja para preparar la cita.",
      pairs: [
        { a: "Ha detto che…", b: "Ha chiesto se…", note: "afirmación vs pregunta" },
        { a: "Secondo lui…", b: "A mio parere…", note: "cita vs opinión propia" },
        { a: "Mi ha sorpreso!", b: "L'ho previsto.", note: "sorpresa vs previsión" },
      ],
    },
    speaking: {
      steps: [
        { kind: "controllato", task: "Repite: «Ha detto che… Ha scritto che… Mi ha chiesto se…»." },
        { kind: "semi", task: "Resume lo que dijeron 3 personas (reales o inventadas) sobre un tema de actualidad." },
        { kind: "comunicativo", task: "Rueda de prensa: tú reportero, recoge 3 declaraciones y retransmítelas al «estudio»." },
        { kind: "autentico", task: "Lee un artículo italiano y cuenta en voz alta qué dijo cada parte implicada." },
      ],
    },
    reading: {
      letturaId: "inf-social-04",
      question: "¿Qué relación describen la lectura entre jóvenes y redes sociales?",
    },
    writing: {
      task: "Escribe un mini-artículo periodístico (110 palabras): qué pasó, qué dijeron 3 fuentes (indirecto), y tu cierre.",
      minWords: 90,
      tips: ["Cada fuente con su verbo introductor distinto", "Concordancia de tiempos impecable"],
      model: [
        "Ieri il sindaco ha annunciato la nuova pista ciclabile.",
        "Ha detto che i lavori sarebbero finiti a giugno, mentre i residenti hanno dichiarato che non erano stati consultati.",
        "L'assessore ha aggiunto che il progetto porterà benefici a tutti.",
      ],
    },
    culture: {
      title: "Los medios italianos",
      text: "El paisaje mediático italiano: RAI pública, Mediaset berlusconiana, Repubblica y Corriere como referentes, y la explosión de podcasts. El «dibattito» es género nacional: everyone opina, everyone interrumpe. Saber citar fuentes con «secondo…» es supervivencia conversacional.",
    },
    finalTask: {
      title: "Il mio notiziario",
      brief: "Prepara y presenta un noticiario de 2 minutos: 3 noticias resumidas con declaraciones indirectas de al menos 4 fuentes. Con voz de presentador.",
      checklist: ["Usé discorso indiretto correcto 5 veces", "Varié los verbos introductorios", "La concordancia de tiempos es correcta"],
    },
    review: [
      { q: "«Sono felice» → Ha detto che ___ felice.", options: ["è", "era", "sarebbe"], answer: 1 },
      { q: "«Farò tardi» → Ha detto che ___ tardi.", options: ["fa", "faceva", "avrebbe fatto"], answer: 2 },
      { q: "«Dove vai?» → Mi ha chiesto dove ___ .", options: ["vado", "andavo", "vada"], answer: 1 },
      { q: "«Secondo lui» =", options: ["según él", "después de él", "en contra de él"], answer: 0 },
    ],
    cando: [
      "Puedo transmitir declaraciones ajenas con precisión",
      "Puedo resumir noticias en italiano",
      "Puedo opinar sobre medios y redes",
    ],
  },

  {
    id: "cu-b1-08", n: 8, level: "B1",
    title: "Salud y estilo de vida", titleIt: "Salute e stile di vita",
    img: "/images/situazioni/sit-medico.jpg",
    goal: "Hablar de salud, hábitos y dar consejos con imperativo y congiuntivo",
    goals: ["Describir hábitos y síntomas prolongados", "Dar consejos con imperativo + pronombres", "Entender indicaciones médicas"],
    scenario: "Chequeo de rutina con el médico de cabecera italiano: estrés, sueño, café, gimnasio. El doctor tiene opiniones muy claras y te las da con imperativos con pronombres enhebrados.",
    dialogue: [
      { speaker: "Medico", it: "Allora, come va? Dorme bene?", es: "Bien, ¿cómo va? ¿Duerme bien?" },
      { speaker: "Tu", it: "Non molto: mi addormento tardi e mi sveglio stanco.", es: "No mucho: me duermo tarde y me despierto cansado." },
      { speaker: "Medico", it: "Quanto caffè beve al giorno? Faccia attenzione alla quantità.", es: "¿Cuánto café bebe al día? Preste atención a la cantidad." },
      { speaker: "Tu", it: "Quattro, forse cinque. E fumo qualche sigaretta quando lavoro.", es: "Cuatro, quizá cinco. Y fumo algún cigarro cuando trabajo." },
      { speaker: "Medico", it: "Mi ascolti: ne fumi troppe! Deve ridurle subito.", es: "Escúcheme: ¡fuma demasiados! Debe reducirlos enseguida." },
      { speaker: "Tu", it: "Lo so, dottore. Ma con lo stress del lavoro è difficile.", es: "Lo sé, doctor. Pero con el estrés del trabajo es difícil." },
      { speaker: "Medico", it: "Lo capisco. Però si ricordi: le sigarette non aiutano lo stress, lo aumentano!", es: "Lo entiendo. Pero recuerde: los cigarros no ayudan al estrés, ¡lo aumentan!" },
      { speaker: "Tu", it: "Ha ragione. Proverò a fare più sport e meno caffè. Glielo prometto.", es: "Tiene razón. Probaré a hacer más deporte y menos café. Se lo prometo." },
    ],
    comprehension: [
      { q: "¿Cómo duerme?", options: ["Bien", "Se duerme tarde y despierta cansado", "Demasiado"], answer: 1 },
      { q: "¿Cuánto café bebe?", options: ["Dos", "Tres", "Cuatro o cinco"], answer: 2 },
      { q: "¿Qué promete al final?", options: ["Dejar el trabajo", "Más deporte y menos café", "Dormir siestas"], answer: 1 },
    ],
    chunks: [
      { it: "Mi addormento tardi.", es: "Me duermo tarde." },
      { it: "Mi sveglio stanco.", es: "Me despierto cansado." },
      { it: "Faccia attenzione!", es: "¡Preste atención!" },
      { it: "Si ricordi che…", es: "Recuerde que…" },
      { it: "Deve ridurle.", es: "Debe reducirlas." },
      { it: "Glielo prometto.", es: "Se lo prometo." },
    ],
    grammar: {
      focus: "Imperativo con pronombres + consejos",
      inductive: [
        { it: "Mi ascolti! / Si ricordi! / Lo prenda!", es: "¡Escúcheme! / ¡Recuerde! / ¡Tómelo!" },
        { it: "Non si preoccupi! / Non li prenda!", es: "¡No se preocupe! / ¡No los tome!" },
        { it: "Glielo dico io.", es: "Se lo digo yo." },
      ],
      rule: [
        "Imperativo formal + pronombre: el pronombre se pospone y dobla la consonante (mi dica, si sieda, lo prenda, ne prenda due). Con negativo: non + imperativo + pronombre pospuesto (non li prenda).",
        "Consejos con estructura: deve + infinito (obligación fuerte), dovrebbe + infinito (consejo), provi a + infinito (sugerencia), le consiglio di + infinito (recomendación).",
      ],
      topicId: "g-b1-imperativo-pronomi",
      gaps: [
        { q: "Signora, mi ___! (ascoltare, formal)", options: ["ascolta", "ascolti", "ascolto"], answer: 1 },
        { q: "Dottore, posso entrare? — Certo, si ___! (accomodarsi)", options: ["accomoda", "accomodi", "accomodati"], answer: 1 },
        { q: "Le sigarette? ___ riduca subito. (usted las)", options: ["Le", "Gliene", "Gliele"], answer: 0 },
      ],
    },
    pronunciation: {
      focus: "El doblaje de consonante",
      tip: "El imperativo con pronombre dobla la letra: di-ca→diCCA, sieda→siSSEdia. Esa doble «explosiva» es la firma del imperativo cortés: dámelo→me lo DAA. Practícalo con ritmo.",
      pairs: [
        { a: "mi dica", b: "mi di'", note: "formal vs informal" },
        { a: "si accomodi", b: "accomodati!", note: "doble vs directo" },
        { a: "lo prenda", b: "prendilo!", note: "formal vs informal" },
      ],
    },
    speaking: {
      steps: [
        { kind: "controllato", task: "Repite los consejos del doctor: «Riduca il caffè. Faccia più sport. Non fumi»." },
        { kind: "semi", task: "Describe tus hábitos de salud (sueño, café, deporte, estrés) en 8 frases honestas." },
        { kind: "comunicativo", task: "Roleplay médico-paciente: síntomas, hábitos, 5 consejos con imperativo + pronombre." },
        { kind: "autentico", task: "Escribe (y di) tu «ricetta della salute»: 6 consejos para ti mismo con imperativo." },
      ],
    },
    reading: {
      lines: [
        { it: "La dieta mediterranea resta il modello italiano: olio d'oliva, pane, legumi, poco zucchero.", es: "La dieta mediterránea sigue siendo el modelo italiano: aceite de oliva, pan, legumbres, poco azúcar." },
        { it: "Il sistema sanitario nazionale (SSN) copre tutti, ma le liste d'attesa sono lunghe: molti pagano un'assicurazione privata.", es: "El sistema sanitario nacional (SSN) cubre a todos, pero las listas de espera son largas: muchos pagan un seguro privado." },
      ],
      question: "¿Qué cubre el SSN y cuál es su problema principal?",
    },
    writing: {
      task: "Escribe una carta al «dottore» (110 palabras): tus hábitos, lo que prometes cambiar y por qué. Con imperativos autoimpuestos.",
      minWords: 90,
      tips: ["Mi sveglio / mi addormento para hábitos", "Prometto di + infinito para compromisos"],
      model: [
        "Caro dottore, ho riflettuto sul nostro colloquio.",
        "Bevo troppo caffè e mi addormento troppo tardi: da domani berrò solo due caffè e camminerò mezz'ora al giorno.",
        "Le sigarette? Le lascerò, glielo prometto. Grazie per i consigli!",
      ],
    },
    culture: {
      title: "La salud a la italiana",
      text: "El SSN es uno de los mejores sistemas públicos de Europa… con sus listas de espera. El médico italiano es directo con los consejos: «fumi meno, mangi meglio, cammini». La farmacia sigue siendo la primera consulta, y la abuela, la segunda.",
    },
    finalTask: {
      title: "Il check-up completo",
      brief: "Simula el chequeo anual completo: síntomas, hábitos, diagnóstico del médico y tus promesas. Preséntalo en dos voces (médico y paciente).",
      checklist: ["Usé imperativo + pronombres 5 veces", "Describí hábitos con reflexivos", "Cerré con compromisos concretos"],
    },
    review: [
      { q: "«Si ricordi!» es imperativo…", options: ["informal", "formal", "negativo"], answer: 1 },
      { q: "Le sigarette? Deve ___ subito. (reducirlas)", options: ["ridurre", "ridurle", "le ridurre"], answer: 1 },
      { q: "«Glielo prometto» =", options: ["me lo prometo", "se lo prometo", "lo prometo todo"], answer: 1 },
      { q: "Non ___ preoccupi! (usted)", options: ["si", "ti", "vi"], answer: 0 },
    ],
    cando: [
      "Puedo describir hábitos y síntomas en detalle",
      "Puedo dar y recibir consejos con imperativo",
      "Puedo entender indicaciones médicas",
    ],
  },

  {
    id: "cu-b1-09", n: 9, level: "B1",
    title: "Arte y ciudades", titleIt: "Arte e città",
    img: "/images/vocab/arte.webp",
    goal: "Describir obras de arte y ciudades con riqueza y emoción",
    goals: ["Describir cuadros, edificios y esculturas", "Expresar reacciones emocionadas", "Usar vocabulario artístico esencial"],
    scenario: "Visita guiada opcional en los Uffizi: el guía te deja tomar el micrófono cinco minutos frente a un cuadro que te encanta. Describir el arte en italiano: el B1 se convierte en estética.",
    dialogue: [
      { speaker: "Guida", it: "Eccoci davanti alla Venere di Botticelli. Qualcuno vuole commentare?", es: "Hemos llegado ante la Venus de Botticelli. ¿Alguien quiere comentar?" },
      { speaker: "Tu", it: "Posso? Mi colpisce la luce: sembra che la Venere stia per arrivare sulla riva.", es: "¿Puedo? Me impacta la luz: parece que la Venus esté a punto de llegar a la orilla." },
      { speaker: "Guida", it: "Bella osservazione! Nota anche i colori?", es: "¡Buena observación! ¿Nota también los colores?" },
      { speaker: "Tu", it: "Sì: il blu del mantello, che contrasta con il verde del paesaggio, è straordinario.", es: "Sí: el azul del manto, que contrasta con el verde del paisaje, es extraordinario." },
      { speaker: "Guida", it: "E le figure a destra? Sa chi sono?", es: "¿Y las figuras a la derecha? ¿Sabe quiénes son?" },
      { speaker: "Tu", it: "Credo che siano la dea del vento e una ninfa, anche se non ricordo i nomi precisi.", es: "Creo que son la diosa del viento y una ninfa, aunque no recuerdo los nombres exactos." },
      { speaker: "Guida", it: "Esatto: Zefiro e Ora. Lei ha occhio d'artista!", es: "Exacto: Céfiro y una Hora. ¡Tiene ojo de artista!" },
      { speaker: "Tu", it: "Grazie! Mi sento come se fossi dentro al quadro.", es: "¡Gracias! Me siento como si estuviera dentro del cuadro." },
    ],
    comprehension: [
      { q: "¿Qué impacta al protagonista?", options: ["El marco", "La luz", "El tamaño"], answer: 1 },
      { q: "¿Qué colores contrastan?", options: ["Rojo y dorado", "Azul del manto y verde del paisaje", "Blanco y negro"], answer: 1 },
      { q: "¿Quiénes son las figuras de la derecha?", options: ["Zefiro y Ora", "Marte y Venus", "Dos ninfas"], answer: 0 },
    ],
    chunks: [
      { it: "Mi colpisce la luce.", es: "Me impacta la luz." },
      { it: "Sembra che la Venere stia per…", es: "Parece que la Venus esté a punto de…" },
      { it: "il blu che contrasta con il verde", es: "el azul que contrasta con el verde" },
      { it: "Credo che siano…", es: "Creo que sean…" },
      { it: "Mi sento come se fossi…", es: "Me siento como si estuviera…" },
      { it: "Ho l'occhio d'artista.", es: "Tengo ojo de artista." },
    ],
    grammar: {
      focus: "Describir arte: sembra che + congiuntivo",
      inductive: [
        { it: "Sembra che la Venere stia per toccare la riva.", es: "Parece que la Venus esté a punto de tocar la orilla." },
        { it: "Mi sembra che il quadro racconti una storia.", es: "Me parece que el cuadro cuenta una historia." },
        { it: "Mi sento come se fossi lì.", es: "Me siento como si estuviera allí." },
      ],
      rule: [
        "Reacciones ante el arte: mi colpisce, mi emoziona, mi stupisce, mi trasporta. Y las apariencias: sembra che + congiuntivo (stia, sia, racconti), come se + congiuntivo imperfetto (fossi).",
        "Vocabulario esencial: luce (luz), ombra (sombra), sfondo (fondo), figura, cornice (marco), paesaggio, first piano (primer plano), contrasto, tonalità.",
      ],
      topicId: "g3-b2-relative-avanzate",
      gaps: [
        { q: "Sembra che il pittore ___ un messaggio nascosto. (nascondere)", options: ["nasconde", "nasconda", "nascondeva"], answer: 1 },
        { q: "Mi sembra che il quadro ___ vivo. (essere)", options: ["è", "sia", "era"], answer: 1 },
        { q: "Mi sento come se ___ dentro al quadro. (essere)", options: ["sono", "sia", "fossi"], answer: 2 },
      ],
    },
    pronunciation: {
      focus: "La emoción estética",
      tip: "La emoción artística italiana se dice con pausas: «Mi colpisce… la luce». Los nombres de artistas llevan acento firme: Botticelli (bot-ti-CHEL-li), Michelangelo, Caravaggio.",
      pairs: [
        { a: "Botticelli", b: "Caravaggio", note: "nombres con ritmo" },
        { a: "mi colpisce", b: "mi emoziona", note: "dos registros de emoción" },
        { a: "sembra che…", b: "come se…", note: "apariencia vs comparación" },
      ],
    },
    speaking: {
      steps: [
        { kind: "controllato", task: "Repite: «Mi colpisce la luce. Sembra che la figura stia per muoversi»." },
        { kind: "semi", task: "Describe tu cuadro o edificio favorito en 8 frases (colores, luz, figuras, emoción)." },
        { kind: "comunicativo", task: "Visita guiada: describe una obra al «grupo», responde 2 preguntas y recibe el aplauso." },
        { kind: "autentico", task: "Ante un cuadro real (o en Google Arts), describe en voz alta 2 minutos sin parar." },
      ],
    },
    reading: {
      letturaId: "cult-arte-18",
      question: "¿Qué impresiona de la Capilla Sixtina según la lectura?",
    },
    writing: {
      task: "Escribe una crítica de arte (120 palabras): la obra, lo que ves (luce, colori, figure), lo que te hace sentir y tu veredicto.",
      minWords: 100,
      tips: ["sembra che / come se para la emoción", "Tres adjetivos estéticos: luminoso, straordinario, delicato"],
      model: [
        "Davanti alla Nascita di Venere, mi colpisce subito la luce morbida.",
        "Sembra che la dea stia per toccare la spiaggia, mentre il vento la spinge.",
        "Mi sento come se fossi su quella spiaggia: un capolavoro assoluto.",
      ],
    },
    culture: {
      title: "Italia, museo viviente",
      text: "Italia concentra el mayor patrimonio artístico del mundo: Uffizi, Vaticano, Brera, Capodimonte… Ver un cuadro «dal vero» es un rito: los italianos lo hacen en excursiones escolares y luego toda la vida. Y recuerda: en los museos italianos la foto sin flash es la norma.",
      cultureId: "cul-4",
    },
    finalTask: {
      title: "La mia guida d'arte",
      brief: "Elige una obra maestra italiana y presenta tu mini-guía: descripción, historia, emoción y por qué hay que verla. Como guía de museo enamorado de su trabajo.",
      checklist: ["Describí luz, colores y figuras", "Usé sembra che / come se", "Transmití una emoción personal"],
    },
    review: [
      { q: "Sembra che il quadro ___ un segreto. (avere)", options: ["ha", "abbia", "aveva"], answer: 1 },
      { q: "«Mi colpisce» =", options: ["me golpea", "me impacta", "me aburre"], answer: 1 },
      { q: "Mi sento come se ___ in paradiso. (estar)", options: ["sono", "sia", "fossi"], answer: 2 },
      { q: "La «cornice» es…", options: ["el marco", "el fondo", "la esquina"], answer: 0 },
    ],
    cando: [
      "Puedo describir obras de arte con vocabulario rico",
      "Puedo expresar reacciones estéticas",
      "Puedo usar sembra che y come se con congiuntivo",
    ],
  },

  {
    id: "cu-b1-10", n: 10, level: "B1",
    title: "Estudiar y proyectar", titleIt: "Studiare e progettare",
    img: "/images/vocab/studi.webp",
    goal: "Hablar de estudios, planes de futuro e hipótesis realistas",
    goals: ["Contar tu camino formativo", "Hacer hipótesis con futuro anteriore y periodo ipotetico", "Comparar opciones de estudio"],
    scenario: "Feria de orientación en la università di Bologna: debes decidir entre un máster en Milán y un curso de especialización en Bolonia. Con un orientador, pesas hipótesis y consecuencias.",
    dialogue: [
      { speaker: "Orientatore", it: "Allora: hai già deciso dopo la laurea?", es: "Bien: ¿ya has decidido tras la carrera?" },
      { speaker: "Tu", it: "Non ancora. Se prenderò il master a Milano, avrò più opportunità di lavoro.", es: "Todavía no. Si hago el máster en Milán, tendré más oportunidades de trabajo." },
      { speaker: "Orientatore", it: "Vero. Ma se resterai a Bologna, avrai una vita meno costosa.", es: "Cierto. Pero si te quedas en Bolonia, tendrás una vida menos cara." },
      { speaker: "Tu", it: "Esatto. E se non avrò una borsa di studio, Milano sarà impossibile.", es: "Exacto. Y si no tengo beca, Milán será imposible." },
      { speaker: "Orientatore", it: "Hai fatto domanda per le borse?", es: "¿Has solicitado las becas?" },
      { speaker: "Tu", it: "Sì, ma i risultati usciranno a settembre. Prima di decidere, dovrò aspettare.", es: "Sí, pero los resultados saldrán en septiembre. Antes de decidir, tendré que esperar." },
      { speaker: "Orientatore", it: "E se non dovessi vincere nulla, qual è il piano B?", es: "¿Y si no ganaras nada, cuál es el plan B?" },
      { speaker: "Tu", it: "Lavorerò un anno e riproverò: quando avrò risparmiato, sarò pronto.", es: "Trabajaré un año y reintentaré: cuando haya ahorrado, estaré listo." },
    ],
    comprehension: [
      { q: "¿Qué ventaja tiene Milán?", options: ["Vida barata", "Más oportunidades de trabajo", "Mejor clima"], answer: 1 },
      { q: "¿Cuándo salen los resultados de las becas?", options: ["Julio", "Septiembre", "Ya salieron"], answer: 1 },
      { q: "¿Cuál es su plan B?", options: ["Rendirse", "Trabajar un año y ahorrar", "Cambiar de país"], answer: 1 },
    ],
    chunks: [
      { it: "Se prenderò il master, avrò più opportunità.", es: "Si hago el máster, tendré más oportunidades." },
      { it: "Se non avrò la borsa, sarà impossibile.", es: "Si no tengo la beca, será imposible." },
      { it: "Prima di decidere, dovrò aspettare.", es: "Antes de decidir, tendré que esperar." },
      { it: "Quando avrò risparmiato, sarò pronto.", es: "Cuando haya ahorrado, estaré listo." },
      { it: "Qual è il piano B?", es: "¿Cuál es el plan B?" },
    ],
    grammar: {
      focus: "Futuro anteriore e hipótesis de futuro",
      inductive: [
        { it: "Quando avrò finito gli esami, partirò.", es: "Cuando haya terminado los exámenes, me iré." },
        { it: "Se avrai studiato, passerai il test.", es: "Si has estudiado (cuando llegue el momento), aprobarás el test." },
        { it: "Appena sarai arrivato, chiamami.", es: "Apenas llegues, llámame." },
      ],
      rule: [
        "Futuro anteriore = futuro de avere/essere + participio: avrò finito, sarai arrivato. Expresa futuro anterior: algo que ya estará hecho cuando ocurra otra cosa futura.",
        "Periodo ipotetico real: se + futuro → futuro (se studierai, passerai). Con quando/appena + futuro anteriore: quando avrò finito, partirò. Es el tiempo de los planes con condiciones.",
      ],
      topicId: "g3-b1-futuro-anteriore",
      gaps: [
        { q: "Quando ___ (finire) il corso, cercherò lavoro.", options: ["finisco", "avrò finito", "finirò"], answer: 1 },
        { q: "Se ___ (risparmiare) abbastanza, viaggerò.", options: ["avrò risparmiato", "risparmierò", "ho risparmiato"], answer: 0 },
        { q: "Appena ___ (arrivare), ti scrivo.", options: ["sarò arrivato", "arrivo", "arriverò"], answer: 0 },
      ],
    },
    pronunciation: {
      focus: "Las hipótesis con musicalidad",
      tip: "«Se…» abre la hipótesis con tono ascendente; la consecuencia cae decidida. El futuro anteriore dobla el auxiliar: avrò-FINito. Practica el vaivén condición-consecuencia.",
      pairs: [
        { a: "Se studierò…", b: "…passerò!", note: "condición y resultado" },
        { a: "avrò finito", b: "avrò capito", note: "futuro anteriore" },
        { a: "qual è il piano B?", b: "e se non bastasse?", note: "preguntas estratégicas" },
      ],
    },
    speaking: {
      steps: [
        { kind: "controllato", task: "Repite: «Se avrò la borsa, andrò a Milano. Quando avrò finito, lavorerò»." },
        { kind: "semi", task: "Presenta tu plan de 5 años: 3 hipótesis con se y 2 con quando + futuro anteriore." },
        { kind: "comunicativo", task: "Orientación con el tutor: presenta tus opciones, escucha hipótesis y decide con razones." },
        { kind: "autentico", task: "Investiga un máster italiano real y explica tu plan A y plan B en voz alta." },
      ],
    },
    reading: {
      lines: [
        { it: "L'università italiana è pubblica e accessibile: le tasse si calcolano in base al reddito della famiglia.", es: "La universidad italiana es pública y accesible: las tasas se calculan según la renta familiar." },
        { it: "Bologna è la più antica del mondo occidente (1088), ma Milano offre più stage nelle aziende.", es: "Bolonia es la más antigua del mundo occidental (1088), pero Milán ofrece más prácticas en empresas." },
      ],
      question: "¿Cómo se calculan las tasas universitarias y qué ofrece cada ciudad?",
    },
    writing: {
      task: "Escribe tu plan de estudios (120 palabras): dónde estás, dos opciones con hipótesis (se…), condiciones (quando avrò…) y decisión final razonada.",
      minWords: 100,
      tips: ["Cada opción con su se + futuro", "Une con prima di / dopo aver + participio"],
      model: [
        "Quest'anno ho finito la triennale e devo scegliere il prossimo passo.",
        "Se avrò la borsa di studio, mi iscriverò al master di Milano; se non l'avrò, lavorerò un anno.",
        "Quando avrò risparmiato abbastanza, riproverò: il sogno non cambia.",
      ],
    },
    culture: {
      title: "La universidad italiana",
      text: "Bolonia (1088) es la universidad más antigua del mundo occidental y da nombre al «processo di Bologna» de convergencia europea. La vida de universitario italiano pasa por la mensa, los apuntes compartidos y los 30 e lode. Y ojo: los exámenes son orales con mucha frecuencia.",
    },
    finalTask: {
      title: "Il mio piano quinquennale",
      brief: "Presenta tu plan de 5 años completo: situación, opciones A y B con hipótesis encadenadas, condiciones temporales y decisión. Como si convencieras a una comisión de becas.",
      checklist: ["Usé 4 hipótesis con se", "Usé 2 futuro anteriore", "La decisión final tiene razones económicas y personales"],
    },
    review: [
      { q: "Quando ___ finito, festeggeremo. (haber terminado)", options: ["abbiamo", "avremo", "avremmo"], answer: 1 },
      { q: "Se ___ la borsa, sarò felice. (haber ganado, fut. ant.)", options: ["avrò vinto", "ho vinto", "vincerò"], answer: 0 },
      { q: "«Prima di decidere» =", options: ["después de decidir", "antes de decidir", "para decidir"], answer: 1 },
      { q: "El futuro anteriore expresa…", options: ["pasado remoto", "futuro anterior a otro futuro", "deseo"], answer: 1 },
    ],
    cando: [
      "Puedo hacer planes e hipótesis de futuro",
      "Puedo usar il futuro anteriore correctamente",
      "Puedo comparar opciones formativas con razones",
    ],
  },

  {
    id: "cu-b1-11", n: 11, level: "B1",
    title: "Fiestas y tradiciones", titleIt: "Feste e tradizioni",
    img: "/images/cultura/cul-8.jpg",
    goal: "Contar tradiciones italianas y compararlas con las tuyas",
    goals: ["Narrar fiestas con congiuntivo passato", "Comparar tradiciones entre culturas", "Invitar y describir celebraciones"],
    scenario: "Te invitan a tu primer Palio de Siena… por televisión, con la familia de tu compañero. Entre caballos, contradaioli y cenas eternas, explican cada rito. Y tú cuentas las fiestas de tu tierra.",
    dialogue: [
      { speaker: "Marta", it: "Oggi c'è il Palio! È la corsa più pazza d'Italia.", es: "¡Hoy hay el Palio! Es la carrera más loca de Italia." },
      { speaker: "Tu", it: "Ne ho sentito parlare! Ho letto che la preparazione dura mesi.", es: "¡He oído hablar de ella! Leí que la preparación dura meses." },
      { speaker: "Marta", it: "Verissimo. Anche se la corsa dura solo novanta secondi!", es: "Verdad. ¡Aunque la carrera dura solo noventa segundos!" },
      { speaker: "Tu", it: "È incredibile che una città viva tutto l'anno per un momento così breve.", es: "Es increíble que una ciudad viva todo el año para un momento tan breve." },
      { speaker: "Marta", it: "E non hai visto la cena della vigilia: mille persone in piazza!", es: "¡Y no has visto la cena de la víspera: mil personas en la plaza!" },
      { speaker: "Tu", it: "Da noi c'è una festa simile, anche se è religiosa: dura tre giorni.", es: "En mi tierra hay una fiesta parecida, aunque es religiosa: dura tres días." },
      { speaker: "Marta", it: "Che bello! E quando hai partecipato l'ultima volta?", es: "¡Qué bonito! ¿Y cuándo participaste la última vez?" },
      { speaker: "Tu", it: "Due anni fa. Non credevo che mi mancasse così tanto!", es: "Hace dos años. ¡No creía que me fuera a faltar tanto!" },
    ],
    comprehension: [
      { q: "¿Cuánto dura la carrera del Palio?", options: ["90 segundos", "9 minutos", "90 minutos"], answer: 0 },
      { q: "¿Qué hay la víspera?", options: ["Un desfile", "Una cena de mil personas en la plaza", "Un concierto"], answer: 1 },
      { q: "¿Cómo es la fiesta de su tierra?", options: ["Igual, con caballos", "Religiosa, dura tres días", "No tiene fiestas"], answer: 1 },
    ],
    chunks: [
      { it: "È la festa più pazza d'Italia.", es: "Es la fiesta más loca de Italia." },
      { it: "È incredibile che una città viva per…", es: "Es increíble que una ciudad viva para…" },
      { it: "Anche se dura poco, …", es: "Aunque dure poco,…" },
      { it: "la cena della vigilia", es: "la cena de la víspera" },
      { it: "Non credevo che mi mancasse!", es: "¡No creía que me fuera a faltar!" },
      { it: "Da noi c'è una festa simile.", es: "En mi tierra hay una fiesta parecida." },
    ],
    grammar: {
      focus: "Congiuntivo passato: emociones sobre hechos",
      inductive: [
        { it: "Mi ha fatto piacere che tu sia venuto.", es: "Me ha dado gusto que hayas venido." },
        { it: "È incredibile che abbiano vinto proprio loro.", es: "Es increíble que hayan ganado justo ellos." },
        { it: "Non credevo che fosse così bello.", es: "No creía que fuera así de bonito." },
      ],
      rule: [
        "Congiuntivo passato = abbia/sia + participio: che tu abbia visto, che siano arrivati. Se usa tras expresiones de emoción/valoración sobre hechos pasados: è incredibile che, mi dispiace che, che peccato che.",
        "Para las tradiciones: anche se + subjuntivo (aunque), la vigilia (víspera), il rito, la processione, i fuochi d'artificio, il santo patrono.",
      ],
      topicId: "gx-b2-congp",
      gaps: [
        { q: "È incredibile che ___ (vincere) la nostra contrada!", options: ["ha vinto", "abbia vinto", "vincesse"], answer: 1 },
        { q: "Mi dispiace che non ___ (venire) alla festa.", options: ["sei venuto", "sia venuto", "venissi"], answer: 1 },
        { q: "Anche se ___ (durare) poco, è bellissimo.", options: ["dura", "duri", "durava"], answer: 1 },
      ],
    },
    pronunciation: {
      focus: "La exclamación festiva",
      tip: "Las fiestas italianas gritan: «Che bello!», «Incredibile!», «Evviva!». La e final de evviva se alarga con orgullo. Y el congiuntivo passato «abbia vinto» lleva el acento en ABBia.",
      pairs: [
        { a: "Evviva!", b: "Che peccato!", note: "júbilo vs lástima" },
        { a: "abbia vinto", b: "ha vinto", note: "subjuntivo vs indicativo" },
        { a: "la vigilia", b: "il rito", note: "vocabulario festivo" },
      ],
    },
    speaking: {
      steps: [
        { kind: "controllato", task: "Repite: «È incredibile che duri così poco. Che bello che tu sia qui!»." },
        { kind: "semi", task: "Cuenta la fiesta más importante de tu tierra: qué, cuándo, cómo, emoción (8 frases)." },
        { kind: "comunicativo", task: "Intercambio cultural: presenta tu fiesta, pregunta por la suya y encuentra 2 parecidos y 2 diferencias." },
        { kind: "autentico", task: "Investiga una fiesta italiana real (Palio, Carnevale, Ferragosto) y preséntala a alguien." },
      ],
    },
    reading: {
      lines: [
        { it: "Il Palio di Siena si corre dal 1644: dieci contrade su diciassette, cavalli scelti a sorte.", es: "El Palio de Siena se corre desde 1644: diez contradas de diecisiete, caballos elegidos por sorteo." },
        { it: "La vigilia, ogni contrada organizza una cena in strada: tavoli lunghi centinaia di metri.", es: "La víspera, cada contrada organiza una cena en la calle: mesas de cientos de metros." },
      ],
      question: "¿Cómo se eligen los caballos y qué pasa la vigilia?",
    },
    writing: {
      task: "Escribe un artículo sobre una fiesta (120 palabras): qué es, cuándo, qué se hace, una anécdota y tu emoción con subjuntivo.",
      minWords: 100,
      tips: ["Es incredibile che + subj. pasato", "Vocabulario: vigilia, rito, processione"],
      model: [
        "La festa più importante del mio paese è la processione di giugno.",
        "Anche se fa caldissimo, tutti seguono il santo per le vie del centro.",
        "È incredibile che questa tradizione sia durata quattrocento anni: mi emoziona ogni volta.",
      ],
    },
    culture: {
      title: "El calendario italiano",
      text: "El año italiano es un ciclo de fiestas: Capodanno, Carnevale di Venezia, la Pasqua con la colomba, il Ferragosto (15 agosto) cuando el país cierra, y los santos patronos que paralizan cada ciudad. El Palio de Siena (2 julio y 16 agosto) es la más feroz: identidad, no deporte.",
      cultureId: "cul-8",
    },
    finalTask: {
      title: "La mia festa spiegata agli italiani",
      brief: "Prepara la presentación de tu fiesta nacional o local para un público italiano: qué, cuándo, ritos, una anécdota personal y una invitación final.",
      checklist: ["Usé congiuntivo passato al menos 2 veces", "Comparé con una tradición italiana", "La anécdota personal da vida al relato"],
    },
    review: [
      { q: "È incredibile che ___ così. (ser, pasado)", options: ["è stato", "sia stato", "fosse"], answer: 1 },
      { q: "«La vigilia» =", options: ["el día después", "la víspera", "la semana"], answer: 1 },
      { q: "Mi dispiace che non ___ venuto. (haber venido)", options: ["è", "sia", "era"], answer: 1 },
      { q: "El Palio di Siena se corre…", options: ["en bicicleta", "a caballo", "a pie"], answer: 1 },
    ],
    cando: [
      "Puedo narrar tradiciones con emoción",
      "Puedo usar el congiuntivo passato",
      "Puedo comparar culturas con respeto",
    ],
  },

  {
    id: "cu-b1-12", n: 12, level: "B1",
    title: "Misión: blog de viaje", titleIt: "Missione: blog di viaggio",
    img: "/images/testi/rd-24.jpg",
    goal: "Repaso final B1: escribir y presentar un blog de viaje completo",
    goals: ["Repasar las funciones B1 en cadena", "Escribir un post de blog con estructura", "Autoevaluarte con el can-do B1"],
    scenario: "Fin de nivel B1: tu blog de viajes «Un hispano en Italia» necesita su primer post serio. Un viaje, tres episodios, opiniones con matices, declaraciones de locales y un consejo final. Todo tu B1 en un texto y su presentación.",
    dialogue: [
      { speaker: "Editor", it: "Allora, hai il pezzo per il blog? Di cosa parla?", es: "¿Entonces, tienes el artículo para el blog? ¿De qué habla?" },
      { speaker: "Tu", it: "Del mio weekend alle Cinque Terre: tre giorni, tre episodi, tre lezioni.", es: "De mi finde en las Cinque Terre: tres días, tres episodios, tres lecciones." },
      { speaker: "Editor", it: "Mi piace la struttura. C'è un episodio forte?", es: "Me gusta la estructura. ¿Hay un episodio fuerte?" },
      { speaker: "Tu", it: "Il secondo: un pescatore mi ha detto che i turisti sono troppi anche per lui.", es: "El segundo: un pescador me dijo que los turistas son demasiados también para él." },
      { speaker: "Editor", it: "Bello: la voce locale. E la conclusione?", es: "Bonito: la voz local. ¿Y la conclusión?" },
      { speaker: "Tu", it: "Che bisognerebbe viaggiare più lentamente. Se tornassi, resterei una settimana in un solo paese.", es: "Que habría que viajar más despacio. Si volviera, me quedaría una semana en un solo pueblo." },
      { speaker: "Editor", it: "Ottimo! Mi sembri quasi italiano: pensi come noi!", es: "¡Óptimo! Me pareces casi italiano: ¡piensas como nosotros!" },
      { speaker: "Tu", it: "Grazie! Il prossimo post sarà sul mio trasloco a Genova.", es: "¡Gracias! El próximo post será sobre mi mudanza a Génova." },
    ],
    comprehension: [
      { q: "¿De qué habla el post?", options: ["Un finde en las Cinque Terre", "Su mudanza", "Un máster"], answer: 0 },
      { q: "¿Qué le dijo el pescador?", options: ["Que los turistas son demasiados también para él", "Que no hay trabajo", "Que el mar está limpio"], answer: 0 },
      { q: "¿Cuál es su conclusión?", options: ["Viajar más rápido", "Viajar más despacio", "No volver"], answer: 1 },
    ],
    chunks: [
      { it: "Mi piace la struttura.", es: "Me gusta la estructura." },
      { it: "Mi ha detto che…", es: "Me dijo que…" },
      { it: "la voce locale", es: "la voz local" },
      { it: "bisognerebbe viaggiare lentamente", es: "habría que viajar despacio" },
      { it: "Se tornassi, resterei…", es: "Si volviera, me quedaría…" },
      { it: "Il prossimo post sarà su…", es: "El próximo post será sobre…" },
    ],
    grammar: {
      focus: "Repaso B1: subjuntivos, condicional, indirecto, relative",
      inductive: [
        { it: "Penso che viaggiare lentamente sia meglio.", es: "Pienso que viajar despacio es mejor." },
        { it: "Se tornassi, resterei una settimana.", es: "Si volviera, me quedaría una semana." },
        { it: "Il paese dove mi fermai aveva cento abitanti.", es: "El pueblo donde me detuve tenía cien habitantes." },
      ],
      rule: [
        "Repaso exprés B1: congiuntivo presente (penso che sia), congiuntivo passato (è incredibile che abbiano), condizionale (vorrei, bisognerebbe, resterei), periodo ipotetico (se + subjuntivo → condicional), discorso indiretto (ha detto che), relative (che/cui/dove), connettivi (infatti, però, quindi), passivo (è stato costruito).",
        "El blog es tu examen: cada función B1 debe aparecer al menos una vez. Después de escribir, subraya cada estructura y verifica.",
      ],
      topicId: "g-b1-congiuntivo",
      gaps: [
        { q: "Se ___ più tempo, visiterei tutto. (tener, hipótesis)", options: ["ho", "avessi", "avrò"], answer: 1 },
        { q: "Credo che questa spiaggia ___ la più bella. (ser)", options: ["è", "sia", "sarebbe"], answer: 1 },
        { q: "Ha detto che ___ stanco. (ser, indirecto)", options: ["è", "era", "sia"], answer: 1 },
      ],
    },
    pronunciation: {
      focus: "Leer en voz alta como podcast",
      tip: "Lee tu post como si grabaras un podcast: pausa en los puntos, sube en las preguntas, remata las conclusiones. El ritmo de lectura italiano es teatral: disfrútalo.",
      pairs: [
        { a: "Mi piace…", b: "Non sopporto…", note: "gusto y rechazo" },
        { a: "Se tornassi…", b: "…resterei qui.", note: "hipótesis y deseo" },
        { a: "E la morale?", b: "Semplice!", note: "pregunta retórica" },
      ],
    },
    speaking: {
      steps: [
        { kind: "controllato", task: "Repite tu esqueleto: «Il primo giorno… Il secondo… La conclusione è che…»." },
        { kind: "semi", task: "Presenta tu post en 90 segundos: hook, 3 episodios, cita local, conclusión." },
        { kind: "comunicativo", task: "Editorial: el editor te entrevista sobre el viaje, defende tus tesis con matices." },
        { kind: "autentico", task: "Publica (o graba) tu primer post real: blog, redes o podcast casero. En italiano." },
      ],
    },
    reading: {
      sourceId: "rd-24",
      question: "¿Qué pueblos de las Cinque Terre describe la lectura y cuál prefiere?",
    },
    writing: {
      task: "Escribe el post completo del blog (150-180 palabras): título, hook, 3 episodios con pasado, una cita en estilo indirecto, opinión con subjuntivo, consejo final con condicional.",
      minWords: 140,
      tips: ["Una estructura clara por episodios", "Al menos 6 estructuras B1 distintas subrayadas"],
      model: [
        "Titolo: Tre giorni, cinque terre, una lezione.",
        "Il primo giorno ho camminato da Monterosso a Vernazza: il sentiero era duro, ma il mare era impossibile.",
        "Un pescatore mi ha detto che il paese cambia ogni anno. Penso che avesse ragione.",
        "La conclusione? Bisognerebbe viaggiare più lentamente. Se tornassi, resterei fermo in un solo paese.",
      ],
    },
    culture: {
      title: "Las Cinque Terre",
      text: "Cinco puebles pesqueros colgados de los acantilados ligures — Monterosso, Vernazza, Corniglia, Manarola, Riomaggiore — unidos por senderos y un tren. Parque Nacional y Patrimonio de la Humanidad, sufren su éxito: el «trenino» ahora requiere reserva en verano. Ve pronto, ve despacio.",
    },
    finalTask: {
      title: "Il mio primo post — simulazione finale B1",
      brief: "La prueba final B1: escribe el post (150+ palabras) y preséntalo en voz alta (3 minutos) con estructura, citas indirectas, subjuntivo y condicional. Tu diploma de independencia comunicativa.",
      checklist: ["El post tiene título, hook y conclusión", "Incluye al menos 6 estructuras B1", "La presentación oral fluye sin leer"],
    },
    review: [
      { q: "Se ___ ricco, viaggerei sempre. (ser, hipótesis)", options: ["sono", "fossi", "sarò"], answer: 1 },
      { q: "Un pescatore mi ha ___ che… (decir)", options: ["detto", "dice", "dica"], answer: 0 },
      { q: "Penso che ___ ragione. (tener)", options: ["ha", "abbia", "aveva"], answer: 1 },
      { q: "«Bisognerebbe» es…", options: ["obligación presente", "consejo hipotético", "pasado remoto"], answer: 1 },
    ],
    cando: [
      "Puedo escribir un post estructurado en italiano",
      "Puedo presentar opiniones con matices y citas",
      "Estoy listo/a para el nivel B2",
    ],
  },
];
