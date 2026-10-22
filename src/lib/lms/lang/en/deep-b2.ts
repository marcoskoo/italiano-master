import type { CbGrammarDeep } from "../../extra/grammar-deep";

/* ═══ EN B2 · Grammar deep — 12 unidades ═════════════════════════════
   Explicación amplia de la gramática de cada unidad B2 (inglés
   americano), con las trampas específicas del hispanohablante. Campos
   `.it` = inglés. Secciones: How it works / When to use it / Watch out
   (ES) / In real conversation. */

export const EN_DEEP_B2: Record<string, CbGrammarDeep> = {
  "en-cu-b2-01": {
    sezioni: [
      { t: "How it works", body: "Each connector has its own mechanics. However une dos oraciones independientes: va tras punto o punto y coma y SIEMPRE seguido de coma («Remote work saves time. However, it can feel isolating»). Although introduce una concesión dentro de la misma oración: «Although I love working from home, I miss my teammates» — si abre la frase, la coma cierra la subordinada. Whereas contrasta dos hechos paralelos y suele ir en medio: «We value flexibility, whereas the old model valued presence». On the other hand presenta la otra cara del argumento y se empareja con on one hand; y con sustantivo o gerundio la concesión se construye con despite: «Despite the commute, she prefers the office»." },
      { t: "When to use it", body: "Es el kit completo del debate laboral americano: objetas con tacto («I hear you. However…»), concedes y matizas («That's a fair point. Although I love it, I miss them»), contrastas modelos («Hybrid works for some teams, whereas full remote fits others») y pesas pros y contras («On the one hand, hybrid sounds balanced. On the other hand, someone has to pick the days»). En escritura formal —informes, emails a la dirección, foros internos— however es el conector rey; en conversación alterna con that said y still para no repetirlo." },
      { t: "Watch out (para hispanohablantes)", body: "1) whereas NO significa «donde» (eso es where): «the city where I work» es lugar; «whereas» solo contrasta hechos. 2) however NO sirve para «de cualquier manera» (eso es anyway): «I'll finish the report anyway» no admite however. 3) Jamás dobles la concesión: «Although… but» es tan imposible como «aunque pero sí». 4) La puntuación no es decorativa: «However» sin coma después, o however pegado con coma al inicio uniendo dos oraciones con solo una coma, delata al que traduce del español." },
      { t: "In real conversation", body: "El town hall americano tiene su coreografía: «I'd like to make a case for…», «If I could jump in», «So what I'm hearing is…» para resumir, y «disagree and commit» para cerrar sin humillar a nadie. Encadenar however, although y whereas en una sola intervención te hace sonar articulado, y la cultura de feedback directo premia al que objeta en la reunión, no por la espalda. Si alguien te dice «That's a fair point. However…» prepárate: la segunda mitad es la que cuenta." },
    ],
    esempi: [
      { it: "The survey was clear; however, nobody wanted to change the policy.", es: "La encuesta fue clara; sin embargo, nadie quería cambiar la política." },
      { it: "Although the commute is long, Priya prefers working on-site.", es: "Aunque el desplazamiento es largo, Priya prefiere trabajar en la oficina." },
      { it: "Marcus moved to Bend, whereas the rest of the team stayed in Seattle.", es: "Marcus se mudó a Bend, mientras que el resto del equipo se quedó en Seattle." },
      { it: "On the one hand, remote work saves money. On the other hand, new hires feel lost.", es: "Por un lado, el trabajo remoto ahorra dinero. Por otro, los nuevos empleados se sienten perdidos." },
      { it: "Despite the hybrid schedule, some meetings still land on everyone's day off.", es: "A pesar del horario híbrido, algunas reuniones siguen cayendo en el día libre de todos." },
    ],
    usi: [
      { q: "Quieres contrastar dos modelos en mitad de una frase: «El equipo A viene martes, ___ el equipo B viene jueves». ¿Cuál encaja?", options: ["whereas", "although", "however"], answer: 0, explain: "Contraste entre dos hechos paralelos dentro de la misma oración: whereas. However necesita punto o punto y coma delante, y although concede, no contrasta." },
      { q: "«I love my team. ___, I don't miss the commute.» ¿Qué conector falta y con qué puntuación?", options: ["Although (sin coma después)", "However, (tras el punto)", "Whereas, (con coma)"], answer: 1, explain: "However une dos oraciones independientes: va tras punto y SIEMPRE seguido de coma. Although introduciría una subordinada y whereas contrastaría dos hechos, no dos opiniones del mismo hablante." },
    ],
  },

  "en-cu-b2-02": {
    sezioni: [
      { t: "How it works", body: "Los marcos persuasivos suavizan sin debilitar: «I'd suggest we + forma base» («I'd suggest we run a pilot»), «What if we + pasado?» («What if we staggered the days off?») y «Have you considered + gerundio?» («Have you considered measuring billable hours?»). Los condicionales completan el kit: tipo 1, «If + presente, will + base» («If the pilot works, we'll take it to the whole agency»), para condiciones reales; tipo 2, «If + pasado simple, would + base» («If we shortened the week, morale would improve»), para hipótesis. Con might o could el tono se vuelve aún más cauto: «Productivity could dip at first, but it would recover»." },
      { t: "When to use it", body: "Son las herramientas del managing up: pides diez minutos de calendario con una agenda clara, abres con «I'd like to make a proposal», estructuras con «Here's my thinking», anticipas la objeción antes de que la ponga ella («Have you considered how we'd measure this?») y ofreces una red de seguridad con métricas («If we missed our targets two months in a row, we'd pull the plug»). El condicional tipo 2 es el terreno de las hipótesis de negocio: «What if we tried X? If we did, Y would happen»." },
      { t: "Watch out (para hispanohablantes)", body: "1) would JAMÁS entra en la cláusula del if: «If we would shorten the week» es imposible — el español «si acortáramos» dispara la trampa. 2) Tras suggest + we, el verbo va en forma base: «I'd suggest we runs» ✗, «I'd suggest we run» ✓. 3) No pierdas la d de la contracción: «I'd suggest» /aɪd/ es condicional cortés; «I suggest» es mandato blando — la d marca la distancia. 4) «What if we…?» va con pasado, no con will: «What if we will try?» ✗." },
      { t: "In real conversation", body: "El guion de los diez minutos con tu jefa: «What's on your mind?» → «I'd like to make a proposal» → «Walk me through it» → «Here's my thinking». Ella pondrá las objeciones previsibles (clientes, coste, productividad) y tú responderás con «What if we…?» + un condicional. El cierre que buscas es «I'll back you up» — tu jefa arriesga capital político contigo, así que entrégale siempre calidad. Y si te pide un one-pager, el ask final se escribe con red de seguridad: «If we missed our targets, we'd pull the plug»." },
    ],
    esempi: [
      { it: "I'd suggest we pilot the new schedule with one team first.", es: "Sugiero que probemos el horario nuevo primero con un equipo." },
      { it: "What if we moved the deadline to the end of the month?", es: "¿Y si moviéramos la fecha límite a fin de mes?" },
      { it: "If the numbers slip, we'll go back to the old process.", es: "Si los números bajan, volveremos al proceso antiguo." },
      { it: "If we automated the reports, we would save ten hours a week.", es: "Si automatizáramos los reportes, ahorraríamos diez horas a la semana." },
      { it: "Have you considered surveying the clients before the rollout?", es: "¿Has considerado encuestar a los clientes antes del lanzamiento?" },
    ],
    usi: [
      { q: "Rachel pregunta «What would we do if productivity fell?». La respuesta con condicional tipo 2 correcto es:", options: ["If productivity fell, we would review the metrics.", "If productivity would fall, we reviewed the metrics.", "If productivity falls, we would reviewed the metrics."], answer: 0, explain: "Tipo 2 puro: if + pasado simple (fell) en la condición y would + base (would review) en el resultado. Would jamás entra en la cláusula del if." },
      { q: "¿Cuál es la forma más persuasiva y cortés de proponerle algo a tu jefa?", options: ["We must run a pilot immediately.", "I'd suggest we run a six-month pilot.", "You should run a pilot if you want results."], answer: 1, explain: "I'd suggest we + forma base es el marco persuasivo estándar: el condicional suaviza y suggest + we convierte la orden en propuesta compartida." },
    ],
  },

  "en-cu-b2-03": {
    sezioni: [
      { t: "How it works", body: "El sarcasmo americano invierte el significado literal: palabras positivas («great», «love it», «just what I needed») con entonación equivocada — acento exagerado en la palabra clave, tono plano o descendente, vocales alargadas («Oh, GREAT»). El contexto confirma: si alguien dice «Great!» justo después de un problema, es ironía. El understatement minimiza lo enorme: «a bit of a problem» = un desastre, «not exactly cheap» = carísimo, «it could have gone better» = fue fatal. La estructura más productiva es «not exactly + lo contrario»: «not exactly a hit», «not exactly brain surgery»." },
      { t: "When to use it", body: "Es la moneda del happy hour: el roast entre amigos cercanos es señal de confianza, y la self-deprecation —reírte de ti mismo antes de que lo hagan los demás— te hace simpático y te vacuna contra las bromas ajenas. Para devolver: «Good one!», «Touche», «I walked right into that one». Para desactivar un malentendido: «I'm just messing with you», «Very funny» (con tono seco = qué gracioso, en falso). Y la pregunta honesta del nuevo: «Wait, was that a jab at me?» o «Sorry — are you joking?»." },
      { t: "Watch out (para hispanohablantes)", body: "1) No tomes «Great!» ni «Nice job!» al pie de la letra si el contexto es negativo: la entonación decide, y el hispanohablante tiende a quedarse con las palabras. 2) «Yeah, right.» con tono plano significa «claro que no», no «tienes razón» — la misma frase con melodía ascendente significa acuerdo total. 3) Por escrito la ironía pierde el tono: en emails y Slack se marca con un lol o un emoji, y en el trabajo mejor evítala con clientes y jefes que no conoces bien. 4) Jamás ironices sobre apariencia, dinero, religión, política o tragedias personales: un «just a joke» no repara una broma que cayó mal." },
      { t: "In real conversation", body: "Las frases que vas a oír el viernes: «Just what I needed today» (ironía pura), «You really outdid yourself» (elogio trampa), «To put it mildly» (lo que viene es peor de lo que suena), «a train wreck» (desastre total) y «for the record» (que quede claro, antes o después de una broma). El truco del oyente B2: escucha el hueco entre las palabras positivas y la situación. Si no cuadran, alguien está siendo irónico — y a lo mejor eres tú el tema." },
    ],
    esempi: [
      { it: "Oh great, the printer jammed again. Just what I needed today.", es: "Oh, qué bien, la impresora se atascó otra vez. Justo lo que necesitaba hoy. (= para nada)" },
      { it: "The call was not exactly the highlight of my week.", es: "La llamada no fue exactamente lo mejor de mi semana. (= fue horrible)" },
      { it: "Sure, I'd love to spend my Saturday assembling furniture.", es: "Claro, me encantaría pasar mi sábado armando muebles. (= ni loco)" },
      { it: "Good one, Tyler. You really got me there.", es: "Buena, Tyler. Ahí sí me diste." },
      { it: "Relax, I'm just messing with you — your deck was fine.", es: "Relájate, solo te estoy molestando — tu presentación estuvo bien." },
    ],
    usi: [
      { q: "Tu compañero mira su café derramado sobre el teclado y dice «Well, this is just perfect». ¿Qué quiere decir?", options: ["Que el día empezó perfecto", "Ironía: es un pequeño desastre", "Que el café está a la temperatura perfecta"], answer: 1, explain: "Palabras positivas + contexto negativo = ironía: «just perfect» con tono plano significa exactamente lo contrario." },
      { q: "¿Cuál es el understatement correcto para «la reunión fue un desastre total»?", options: ["The meeting was absolutely amazing.", "The meeting could have gone better.", "The meeting was the best of the year."], answer: 1, explain: "El understatement minimiza lo enorme: «could have gone better» dice poquito para significar muchísimo. Las otras dos son elogios directos o ironía sin contexto." },
    ],
  },

  "en-cu-b2-04": {
    sezioni: [
      { t: "How it works", body: "El hedging protege tus afirmaciones sin debilitarlas: en vez de «Internships are essential for everyone», escribe «It could be argued that internships benefit most students». Verbos hedging: tend to (suelen), may/might/could (puede que), suggest (sugiere, no proves), appear to / seem to (parecen). Fórmulas y adverbios: arguably, perhaps, to some extent, in many cases, the data suggest. La escala va de «This proves» (solo con prueba irrefutable) a «This suggests» (el estándar académico): el matiz es una señal de rigor, no de timidez." },
      { t: "When to use it", body: "Es la voz natural del ensayo académico americano y del informe profesional: «Students who complete internships tend to find jobs faster» presenta un patrón sin absolutizarlo; «To some extent, the value depends on the field» reconoce la variabilidad antes de opinar. También suaviza la argumentación oral: «It could be argued that we're moving too fast» discrepa sin romper el clima. La thesis statement va al final de la introducción, y el hedging alrededor de ella te hace sonar como alguien que consideró otras posturas." },
      { t: "Watch out (para hispanohablantes)", body: "1) No traduzcas «se demuestra que» por «it is proven that» salvo que la fuente lo pruebe: prefiere «the data suggest» o «the evidence indicates». 2) El ensayo en español tolera intros largas y tesis tardía; el americano exige la posición temprano — «guardar la sorpresa para el final» es el error clásico del consejero Calloway. 3) Con datos y estudios, el verbo plural es la opción culta: «the data show», «studies tend to show». 4) «Almost all» y «most» no son «all»: el matiz cuantitativo también es hedging." },
      { t: "In real conversation", body: "El vocabulario del writing center: «a working thesis» (tesis provisional), «topic sentence» (la idea del párrafo), «to back up a claim» (respaldar con evidencia) y «to wrap it up» (cerrar). En las aplicaciones universitarias manda «show, don't tell»: en vez de «I am hardworking», la anécdota del turno de las 4 a. m. que lo demuestra. La palabra favorita de los oficiales de admisión es specificity — los ensayos genéricos mueren en la primera lectura." },
    ],
    esempi: [
      { it: "It could be argued that internships benefit most students.", es: "Se podría argumentar que las prácticas benefician a la mayoría de los estudiantes." },
      { it: "Students with hands-on experience tend to find jobs faster.", es: "Los estudiantes con experiencia práctica suelen encontrar trabajo más rápido." },
      { it: "To some extent, the value depends on the field of study.", es: "Hasta cierto punto, el valor depende de la carrera." },
      { it: "The survey suggests that flexibility matters more than salary.", es: "La encuesta sugiere que la flexibilidad importa más que el salario." },
      { it: "This evidence appears to support the second hypothesis.", es: "Esta evidencia parece respaldar la segunda hipótesis." },
    ],
    usi: [
      { q: "Quieres matizar «los estudios demuestran que…» en un ensayo. ¿Cuál es la versión académica americana correcta?", options: ["Studies prove that everyone learns more.", "Studies tend to show that students may learn more.", "Everyone obviously knows students learn more."], answer: 1, explain: "tend to show + may mantiene el matiz: el hedging presenta el hallazgo sin absolutizarlo. «Prove» y «obviously» son demasiado absolutos para un ensayo." },
      { q: "¿Dónde coloca el ensayo académico americano la thesis statement?", options: ["En el título, para impactar", "Al final de la introducción", "Solo en la conclusión, como sorpresa final"], answer: 1, explain: "El lector americano espera tu posición temprano: la tesis cierra la introducción y las topic sentences la desarrollan después. Guardarla para el final es el error clásico." },
    ],
  },

  "en-cu-b2-05": {
    sezioni: [
      { t: "How it works", body: "El condicional mixto conecta dos épocas. Condición pasada + resultado presente: «If + past perfect, would + base (o would be -ing)» — «If we had found this place last spring, we would be paying less now». Y al revés, condición presente + resultado pasado: «If I weren't so picky (ahora), I wouldn't have lost the last unit (entonces)». Los puros son de una sola época: tipo 2 todo hipotético presente («If I found a cheaper loft, I would move»), tipo 3 todo pasado cerrado («If I had asked, I would have gotten it»). El español funciona igual: «Si hubiera firmado el año pasado, ahora pagaría menos» — aprovecha el paralelismo." },
      { t: "When to use it", body: "En la negociación son el arma elegante: comparas el presente con el pasado alternativo («If you had listed it in January, we wouldn't be haggling now») y evalúas decisiones («If I weren't so attached to this neighborhood, I would have signed elsewhere»). Con los modales corteses completan la fórmula del rechazo americano: suaviza + firmeza + alternativa — «I'm afraid that won't work for us» + «Would you consider $3,900?» + «What if we met halfway?». Nunca digas «That's too expensive» a secas: suena a puerta cerrada." },
      { t: "Watch out (para hispanohablantes)", body: "1) Si el resultado es presente, would + base o would be -ing, NO would have: «If we had found it, we would have been paying less» solo vale si el resultado también es pasado. 2) La objeción cortesa americana no es un «no» seco: «I'm afraid…» abre, «won't work» sostiene y la pregunta cierra la jugada. 3) Pronunciación crítica: «won't» /woʊnt/ (no funcionará) vs «want» /wɑnt/ (quiero) — la vocal decide si rechazas o deseas. 4) «That's tempting, but…» acepta el gancho sin morder el anzuelo: es la réplica que mantiene la negociación abierta." },
      { t: "In real conversation", body: "El mercado de San Francisco enseña el resto del léxico: «market rate» (precio de mercado), «a twelve-month lease» (contrato de doce meses), «to throw in one month free» (incluir un mes de regalo), «the effective rent» (el alquiler efectivo una vez descontadas las concesiones) y «to sign on the dotted line» (firmar en la línea de puntos). La regla cultural: everything is negotiable, pero con firmeza cortés — el americano negocia sonriendo y con comprobantes de ingresos en la mano." },
    ],
    esempi: [
      { it: "If I had signed last year, I would be paying two hundred less now.", es: "Si hubiera firmado el año pasado, ahora estaría pagando doscientos menos." },
      { it: "If she weren't so attached to this neighborhood, she wouldn't have paid that deposit.", es: "Si no estuviera tan apegada a este barrio, no habría pagado ese depósito." },
      { it: "I'm afraid that number won't work for us, but we're flexible on the lease length.", es: "Me temo que esa cifra no nos funciona, pero somos flexibles con la duración del contrato." },
      { it: "Would you consider including the parking spot in the rent?", es: "¿Consideraría incluir la plaza de garaje en el alquiler?" },
      { it: "If we met halfway at three ninety-five, would you throw in the storage unit?", es: "Si nos encontráramos a mitad de camino en tres noventa y cinco, ¿incluiría el trastero de regalo?" },
    ],
    usi: [
      { q: "«Si hubiera visto el anuncio en enero, ahora no estaríamos negociando.» ¿Cuál es el mixto correcto?", options: ["If I had seen the listing in January, we wouldn't be negotiating now.", "If I saw the listing in January, we wouldn't have negotiated now.", "If I had seen the listing in January, we wouldn't have been negotiating now."], answer: 0, explain: "Condición pasada (had seen) + resultado presente (wouldn't be negotiating now): el mixto clásico. La tercera opción convertiría el resultado en pasado, cambiando el significado." },
      { q: "El landlord propone un precio imposible. ¿Qué objeción abre la negociación sin cerrarla?", options: ["That's way too expensive, no way.", "I'm afraid that won't work for us. Would you consider a longer lease?", "You're ripping me off and I'll walk away."], answer: 1, explain: "La fórmula americana: suaviza (I'm afraid) + firmeza (won't work) + alternativa (Would you consider). El rechazo sin alternativa cierra la puerta; la agresividad la tira." },
    ],
  },

  "en-cu-b2-06": {
    sezioni: [
      { t: "How it works", body: "Los phrasal verbs sociales se dividen en dos familias. Separables: el objeto puede ir en medio — «set up a meeting», «fill me in» — y el pronombre va SIEMPRE entre verbo y partícula: «fill him in», nunca «fill in him». Inseparables: el objeto va detrás de la partícula, siempre — «run into her», «look after them», nunca «run her into». Y los de tres palabras son todos inseparables: catch up WITH, keep in touch WITH, look forward TO. La partícula es parte del significado, no un adorno." },
      { t: "When to use it", body: "Es el motor del networking americano: «I ran into an old roommate at the keynote» (cruzarse), «We hit it off at that rooftop party» (caerse bien), «We totally lost touch» (perder el contacto), «Let's catch up properly at the happy hour» (ponerse al día), «Can I follow up next week?» (dar seguimiento). Para cerrar una conversación con elegancia: «I've got to run, but let's keep in touch» — excusa + puerta abierta. Y para reactivar un contacto viejo: «What are you up to these days?»." },
      { t: "Watch out (para hispanohablantes)", body: "1) La partícula cambia todo: «hit it off» (caerse bien) no tiene nada que ver con «hit on someone» (coquetear); «run into» (cruzarse) no es «run over» (atropellar). 2) «What are you up to?» es la pregunta social estándar; «What are you doing?» a secas suena a interrogatorio. 3) «Keep in touch» ya está completo sin objeto; «catch up» necesita with para la persona: «catch up with DeShawn». 4) El pronombre nunca va detrás en los separables: «fill in him» delata al que traduce palabra por palabra." },
      { t: "In real conversation", body: "Las tarjetas de papel casi desaparecieron: hoy se escanea el QR de la credencial y el contacto queda en LinkedIn, donde las conexiones son moneda social. La regla no escrita es brutal: follow up dentro de 48 horas, mientras la conversación sigue fresca — el 90 % de la gente nunca lo hace, sé el 10 %. Y ojo con el calor americano: «We should totally grab coffee sometime» suele ser calidez, no una cita; la propuesta concreta («How about Tuesday?») la pones tú." },
    ],
    esempi: [
      { it: "I ran into my first manager at the airport in Denver.", es: "Me crucé con mi primer jefe en el aeropuerto de Denver." },
      { it: "We hit it off immediately and exchanged numbers.", es: "Nos caímos súper bien desde el inicio e intercambiamos números." },
      { it: "Can you fill me in on what I missed at the workshop?", es: "¿Puedes ponerme al tanto de lo que me perdí en el taller?" },
      { it: "Let's keep in touch after the conference wraps up.", es: "Mantengámonos en contacto cuando termine la conferencia." },
      { it: "I've got to run, but I'll follow up by email tomorrow.", es: "Me tengo que ir, pero te doy seguimiento por correo mañana." },
    ],
    usi: [
      { q: "«Nos caímos muy bien en la cena de bienvenida.» ¿Cuál es el phrasal verb correcto?", options: ["We hit on each other at the welcome dinner.", "We hit it off at the welcome dinner.", "We hit up at the welcome dinner."], answer: 1, explain: "hit it off = tener química inmediata (forma fija e inseparable); hit on es coquetear y hit up es pedir un favor o contactar." },
      { q: "Quieres poner al tanto a una colega usando el PRONOMBRE. ¿Cuál es la colocación correcta?", options: ["fill in her on the changes", "fill her in on the changes", "fill on her the changes"], answer: 1, explain: "fill in es separable: el pronombre va SIEMPRE entre verbo y partícula — fill her in. Con sustantivo puedes elegir: fill in Dana o fill Dana in." },
    ],
  },

  "en-cu-b2-07": {
    sezioni: [
      { t: "How it works", body: "La narración usa cuatro tiempos como una cámara. Past simple para la secuencia de hechos: «She finished her shift at eleven». Past continuous para el fondo o la acción interrumpida: «She was driving home when the storm hit». Past perfect para lo anterior a otro punto del pasado: «By the time the police arrived, the car had already been moved». Y past perfect continuous para duraciones antes de ese punto: «He had been working there for years». Plano general, acción principal, flashback: el orden lo pinta el tiempo verbal." },
      { t: "When to use it", body: "Los modales pasados gradúan la especulación sobre lo que ya pasó. Escala de certeza: must have + participio = deducción casi segura («He must have known the road»); can't/couldn't have = casi seguro que NO («He can't have been in two places at once»); might/may/could have = posibilidad abierta («He might have driven past the marker»). En español son casi gemelos — «debe de haber», «no puede haber», «puede que haya» — y el true crime los mezcla todo el tiempo: «She had left work at eleven, she was driving home, and whoever moved the car must have known the area»." },
      { t: "Watch out (para hispanohablantes)", body: "1) must have NO es obligación pasada (eso es had to: «He had to report it»): es deducción — la trampa número uno. 2) could have tiene dos caras: posibilidad abierta («He could have taken the shortcut») y oportunidad perdida («He could have called, but he didn't»). 3) En «para cuando llegaron, ya se había ido», el had es obligatorio: omitirlo («she already left») cambia el orden de la historia. 4) En inglés americano la imposibilidad se niega con can't have; mustn't have es raro y suena importado." },
      { t: "In real conversation", body: "El léxico del género: «the timeline doesn't add up» (la cronología no cuadra), «to cover your tracks» (borrar huellas), «a person of interest» (sospechoso no formal), «to rule someone out» (descartar), «a cold case» (caso archivado) y «Get this:» (atento a esto) para soltar la prueba estrella. La etiqueta social del true crime: no conviertas una tragedia real en un whodunit festivo delante de quien pueda estar afectado, por muy buenas que sean tus teorías del sofá." },
    ],
    esempi: [
      { it: "The neighbors were sleeping when the truck pulled up outside.", es: "Los vecinos dormían cuando la camioneta se detuvo afuera." },
      { it: "By the time the reporter arrived, the scene had been cleared.", es: "Para cuando llegó el reportero, ya habían despejado la escena." },
      { it: "She must have taken the old highway; the new one was closed that night.", es: "Debe de haber tomado la carretera vieja; la nueva estaba cerrada esa noche." },
      { it: "He can't have acted alone — the gate takes two people to open.", es: "No puede haber actuado solo — la puerta requiere dos personas para abrirse." },
      { it: "The witness might have confused the dates after all these years.", es: "El testigo puede haber confundido las fechas después de tantos años." },
    ],
    usi: [
      { q: "Las luces estaban encendidas y se oía música dentro. ¿Cómo expresas la deducción casi segura?", options: ["Someone must have been home.", "Someone can't have been home.", "Someone might not be home."], answer: 0, explain: "Evidencia fuerte → must have + participio: deducción casi segura. Can't have expresa imposibilidad y might deja la puerta abierta sin la certeza que da el contexto." },
      { q: "«Para cuando llegó la policía, el sospechoso ya ___ escapado.» ¿Cuál es la forma narrativa correcta?", options: ["already escaped", "was already escaping", "had already escaped"], answer: 2, explain: "Anterioridad respecto a otro punto del pasado → past perfect: had already escaped. El simple pierde el orden temporal y el continuo pintaría la fuga en progreso." },
    ],
  },

  "en-cu-b2-08": {
    sezioni: [
      { t: "How it works", body: "El present perfect (have + participio) presenta experiencia SIN fecha y con vigencia: «I've handled escalations before», «We've delivered every milestone so far». En cuanto dices CUÁNDO — last spring, in 2023, two years ago — el inglés cambia obligatoriamente a past simple: «Last spring, I spearheaded a triage system». La frontera es mecánica: fecha específica = pasado simple; sin fecha y relevante ahora = perfecto. Y para lo que sigue en curso desde entonces: «I've been working there since 2020»." },
      { t: "When to use it", body: "Es la gramática de la entrevista conductual americana. Los verbos de logro son colocaciones fijas: spearhead a project (encabezar), streamline a process (agilizar), deliver results (entregar), drive growth (impulsar), oversee a team (supervisar), roll out a tool (desplegar), cut costs (reducir). En EE. UU. se esperan NÚMEROS: «cut response times by 90%», «a $2M account» — sin cifras, la historia no aterriza. El método STAR estructura la respuesta: Situation, Task, Action, Result, en 90-120 segundos." },
      { t: "Watch out (para hispanohablantes)", body: "1) «I am working there since 2020» es imposible: el español «trabajo ahí desde» es presente, pero el inglés exige perfecto — «I've been working there since 2020». 2) «We did a project» y «make results» no existen como colocaciones de logro: spearhead, streamline, deliver. 3) Usa I para tus acciones y we para el crédito compartido: el «we» sistemático borra tu contribución ante el entrevistador. 4) Cuidado con el humblebrag («mi defecto es que soy demasiado perfeccionista»): los reclutadores americanos lo detectan a kilómetros." },
      { t: "In real conversation", body: "Las preguntas que van a caer: «Tell me about a challenge», «What would your critics say?», «Why this role?». La fórmula anti-arrogancia es logro + aprendizaje: «We cut times by 90%, and I learned to loop in senior people earlier». Y si no tienes la historia a mano, la pausa es legítima: «Give me a second to think of the best example» suena reflexivo, no débil. La cultura del bragging con datos premia al específico y castiga al modesto sin cifras." },
    ],
    esempi: [
      { it: "I've led cross-functional teams for over five years now.", es: "He liderado equipos multifuncionales por más de cinco años." },
      { it: "Last quarter, I streamlined the onboarding process for new hires.", es: "El trimestre pasado agilicé el proceso de incorporación de nuevos empleados." },
      { it: "We've shipped every release on schedule since I joined.", es: "Hemos entregado cada versión a tiempo desde que entré." },
      { it: "I oversaw a team of twelve across two time zones.", es: "Supervisé un equipo de doce personas en dos husos horarios." },
      { it: "The dashboard I built is still in place today.", es: "El panel que construí sigue vigente hoy." },
    ],
    usi: [
      { q: "«___ escalations before, so I knew exactly what to do.» ¿Cuál versión expresa experiencia sin fecha y vigente?", options: ["I've handled", "I handled", "I am handling"], answer: 0, explain: "Sin fecha y relevante en el momento de la historia → present perfect: I've handled. Con «last year» o «in 2021» la misma frase iría en past simple." },
      { q: "En una respuesta STAR, ¿cómo presentas tus acciones sin sonar arrogante NI desaparecer tu papel?", options: ["We did everything together as a team.", "I spearheaded the triage system and the team executed it.", "The results just happened by themselves."], answer: 1, explain: "I para tus acciones concretas (spearheaded) y we donde el crédito es compartido: la cultura americana espera autoría clara con datos, no falsa modestia." },
    ],
  },

  "en-cu-b2-09": {
    sezioni: [
      { t: "How it works", body: "Los adjetivos evaluativos tienen dos dimensiones. El grado: los graduables (good, pricey, crowded) aceptan la escalera a bit / a little / quite / pretty / very / extremely; los extremos o no graduables (stunning, mouthwatering, awful, packed) NO admiten very — se intensifican con absolutely o utterly: «absolutely stunning» ✓, «very stunning» ✗. Delicious es el caso raro: really delicious suena mejor que very delicious. La connotación es la segunda dimensión: pricey critica con tono de disculpa, affordable recomienda, expensive es neutro; stunning es un 10/10 y decent es un 6/10 disfrazado de elogio." },
      { t: "When to use it", body: "Es la gramática de la reseña creíble y del veredicto justo: «The beignets were absolutely mouthwatering, though the ninety-minute wait stung» equilibra un extremo con una debilidad específica. Overrated no critica la calidad sino la brecha entre expectativas y realidad: puedes comer decent food en un lugar overrated, y la distinción importa — «awful would be a lie». Para graduar con precisión: a bit pricey (7 de crítica suave), pretty decent (elogio tibio), very good (7/10), absolutely outstanding (10/10)." },
      { t: "Watch out (para hispanohablantes)", body: "1) «Very delicious» y «very stunning» delatan al hispanohablante: los extremos van con absolutely, utterly o really. 2) No confundas overrated con awful: uno critica la comparación con el hype, el otro la calidad absoluta. 3) Decent no es un elogio entusiasta: en boca americana con tono tibio es un «meh» educado. 4) La reseña de solo entusiasmo («AMAZING!!!») o solo furia pierde credibilidad: el lector americano confía en el equilibrio con detalles concretos — el plato, el precio, el día." },
      { t: "In real conversation", body: "El poder de Yelp y Google es económico real: bajar de cuatro estrellas puede costar un tercio de los clientes, y los dueños responden públicamente cada queja porque el silencio se lee como culpa. Los lectores astutos ignoran los extremos y confían en las reseñas de tres y cuatro estrellas. Dos reglas locales: la propina del 18-20 % es sagrada y quejarse de ella en una reseña garantiza respuestas defensivas; y «it makes up for it» es la fórmula para pesar pros y contras en voz alta." },
    ],
    esempi: [
      { it: "The tacos were absolutely mouthwatering — best in Austin, honestly.", es: "Los tacos estaban absolutamente deliciosos — los mejores de Austin, honestamente." },
      { it: "The portions are pretty generous, though the menu is a bit pricey.", es: "Las porciones son bastante generosas, aunque la carta es un poco cara." },
      { it: "That new brunch spot is seriously overrated.", es: "Ese lugar nuevo de brunch está seriamente sobrevalorado." },
      { it: "The service was warm, but the ninety-minute wait stung.", es: "El servicio fue cálido, pero la espera de noventa minutos dolió." },
      { it: "Honestly? Decent coffee, stunning view, fair prices.", es: "¿Honestamente? Café decente, vista espectacular, precios justos." },
    ],
    usi: [
      { q: "«The dessert was ___ delicious.» ¿Qué intensificador encaja mejor?", options: ["a bit", "very", "really"], answer: 2, explain: "Delicious es cuasi-extremo: really delicious es la combinación natural americana; very delicious suena forzado y a bit contradiría un adjetivo tan positivo." },
      { q: "Trey dice: «It wasn't awful, it just didn't live up to the hype». Su crítica es que el restaurante es:", options: ["awful (pésimo)", "overrated (sobrevalorado)", "affordable (asequible)"], answer: 1, explain: "Overrated critica la brecha entre expectativas y realidad, no la calidad absoluta: por eso puede admitir en la misma frase que los beignets estuvieron increíbles." },
    ],
  },

  "en-cu-b2-10": {
    sezioni: [
      { t: "How it works", body: "Los idioms son formas FIJAS: se dice «piece of cake», nunca «slice of cake» ni «piece of pie»; y muchos no se separan: «he ghosted her» (cortó todo contacto sin explicación), «she bailed on us» (nos plantó). Los phrasal-idioms sociales sí se conjugan normal: bail on → «she bailed on us», «don't bail on me». El significado NO es literal: «no big deal» no habla de negocios, «I'm down» significa «me apunto» y «my bad» es «culpa mía». La forma fija + el contexto dan el sentido." },
      { t: "When to use it", body: "Es el registro casual: barbacoes, group chats, happy hours con amigos. «No big deal» quita importancia, «a piece of cake» dice que fue facilísimo, «hit me up» pide contacto, «hang out» propone juntarse. La escala completa: formal («I regret to inform you…»), neutral («Unfortunately, I can't make it»), casual («I gotta bail, my bad»). Las expresiones estables — no big deal, piece of cake, hang out, hit me up, ghost, bail on — llevan décadas intactas y son territorio seguro para el estudiante." },
      { t: "Watch out (para hispanohablantes)", body: "1) El slang envejece rápido: lo brillante hace cinco años hoy suena try-hard (esforzado); produce solo lo que hayas oído dos veces en boca de locales. 2) Las reducciones (gonna, wanna, gotta) son orales: escribirlas en un email de trabajo es una mancha — en una entrevista se espera «going to» completo. 3) La regla de oro: si no lo dirías en una entrevista, no lo digas la primera vez que conoces a alguien. 4) Ghosting cruzó al vocabulario general (hasta en artículos de negocios sobre recruiters), pero «I'm down» sigue siendo exclusivamente casual." },
      { t: "In real conversation", body: "El barbecue californiano suena así: «You made it!», «Grab a plate», «no big deal», «allegedly!», «Karma works fast». La verdadera habilidad B2 es el register switch: la misma cancelación de planes dicha dos veces — «Dude, I gotta bail, my bad!» a un amigo y «Unfortunately, I have a conflict» a tu jefa. Los americanos cambian de registro sin pensarlo y esperan que tú hagas lo mismo: el contenido no cambia, el envoltorio sí." },
    ],
    esempi: [
      { it: "Don't worry about the plates — my bad, I totally forgot napkins.", es: "No te preocupes por los platos — culpa mía, me olvidé completamente de las servilletas." },
      { it: "The written test was a piece of cake after all that studying.", es: "El examen escrito fue pan comido después de tanto estudiar." },
      { it: "We were supposed to hike on Sunday, but half the group bailed.", es: "Íbamos a caminar el domingo, pero la mitad del grupo nos plantó." },
      { it: "If you guys are watching the game tonight, I'm down.", es: "Si van a ver el partido esta noche, me apunto." },
      { it: "Hit me up when you land and I'll pick you up from the airport.", es: "Escríbeme cuando aterrices y te recojo en el aeropuerto." },
    ],
    usi: [
      { q: "Tienes que cancelar una reunión con un CLIENTE por correo. ¿Cuál versión es la correcta?", options: ["Hey, I gotta bail on our call, my bad!", "Unfortunately, I won't be able to make our call. Could we reschedule?", "Gonna ghost this one, no big deal!"], answer: 1, explain: "Con clientes reina el registro neutral: bail, my bad y ghost son jerga casual que jamás cruza esa frontera." },
      { q: "«I'm down» en un group chat significa:", options: ["estoy triste o decaído", "me apunto / cuenta conmigo", "estoy enfermo"], answer: 1, explain: "I'm down es entusiasmo casual por un plan: me apunto. La trampa del hispanohablante es leerlo literal («estar abajo»). " },
    ],
  },

  "en-cu-b2-11": {
    sezioni: [
      { t: "How it works", body: "La pasiva (be + participio) pone el foco en lo recibido, no en quien lo hace: «The plant was approved by the city council» — la planta es la noticia y el consejo va con by como agente. El agente se menciona SOLO cuando importa (quién aprobó, quién redactó); si es desconocido, obvio o irrelevante, desaparece: «The grid is being upgraded». La versión culta de «se dice que» es doble: «It is said that the plant will lower bills» o «The plant is said to lower bills» — y la get-passive («the bill got passed») es informal." },
      { t: "When to use it", body: "Es la voz por defecto del discurso cívico y periodístico: suena objetivo porque separa el hecho del actor. Con los conectores de causa y consecuencia arma la cadena del argumento público: «Due to rising demand (causa + sustantivo), blackouts are becoming more frequent (consecuencia). As a result, we need storage (respuesta). This plan leads to lower risk (resultado)». Alternativas: because of + sustantivo, result in (X results in Y), which in turn (y eso a su vez), owing to (formal)." },
      { t: "Watch out (para hispanohablantes)", body: "1) El inglés NO tiene «se»: «se aprobó la planta» no es «it approved the plant» — es «the plant was approved»; «se dice que» es «it is said that» o «people say», nunca «it says that». 2) due to y because of van con sustantivo o gerundio, jamás con cláusula completa: «due to the demand rose» ✗ → «due to rising demand» ✓. 3) lead siempre cierra con to cuando significa conducir: «have led to increased use», no «have led increased use». 4) Si el agente no aporta nada, omítelo: la pasiva sin by no es pasiva a medias, es la norma." },
      { t: "In real conversation", body: "El ritual de la audiencia pública americana: dices tu nombre, tienes dos o tres minutos, traes datos y atacas el argumento, nunca a la persona — «With all due respect, that's not what the data show» es la fórmula del disagree sin romper el clima. El léxico local: «a public hearing», «utility bill», «ratepayers», «to cap rate increases», «the power grid». Y el cierre de todo comentario: «Thank you for your time» — la cortesía es parte del argumento." },
    ],
    esempi: [
      { it: "The new substation was approved by the county commission last night.", es: "La nueva subestación fue aprobada por la comisión del condado anoche." },
      { it: "It is said that the project will create four hundred jobs.", es: "Se dice que el proyecto creará cuatrocientos empleos." },
      { it: "Due to the heat wave, rolling blackouts were ordered across the valley.", es: "Debido a la ola de calor, se ordenaron cortes rotativos de luz en todo el valle." },
      { it: "As a result of the tax credits, most of the plant is financed without new fees.", es: "Como resultado de los créditos fiscales, la mayor parte de la planta se financia sin nuevas tarifas." },
      { it: "Higher demand leads to higher prices, which in turn leads to more solar installations.", es: "La mayor demanda conduce a precios más altos, lo que a su vez conduce a más instalaciones solares." },
    ],
    usi: [
      { q: "«Se dice que las facturas bajarán el año que viene.» ¿Cuál es la versión correcta?", options: ["It says that bills will drop next year.", "Bills say to drop next year.", "It is said that bills will drop next year."], answer: 2, explain: "El «se» impersonal del español se vuelve pasiva: it is said that (o bills are said to drop). «It says that» es lo que dice un texto o un cartel." },
      { q: "«Debido a que la demanda creció, los precios subieron.» ¿Cuál construcción es correcta con due to?", options: ["Due to the demand grew, prices rose.", "Due to growing demand, prices rose.", "Due to prices rose, demand grew."], answer: 1, explain: "Due to va seguido de sustantivo o gerundio (growing demand), nunca de una cláusula con verbo conjugado — la causa es una cosa, no una oración." },
    ],
  },

  "en-cu-b2-12": {
    sezioni: [
      { t: "How it works", body: "El pitch alterna tiempos con precisión quirúrgica. Presente simple para lo que la empresa ES y HACE: «Vecino is a marketplace; we take 12% per transaction». Present perfect para la tracción — logros sin fecha que siguen vigentes: «Since launch, we've grown 18% month over month». Condicional would para el ask y el uso de fondos: «The funds would be used to launch in two new cities». Y la pasiva aparece donde el proceso pesa más que el actor: «Growth is driven by word of mouth». Cada tiempo tiene una función argumentativa, no decorativa." },
      { t: "When to use it", body: "Vale para el demo day, la reunión con inversionistas y el elevator pitch de 30 segundos. El storytelling comercial abre con un contraste doloroso — dolor humano + número enorme («families can't afford dinner» + «$9 billion wasted») — y la value proposition se dice en una frase que un niño entiende. El ask va entero y sin rubor: monto + equity + uso de fondos + runway («an 18-month runway» = el tiempo que el dinero compra). La vaguedad es la única respuesta que mata un pitch en EE. UU." },
      { t: "Watch out (para hispanohablantes)", body: "1) La tracción fechada exige past simple y la vigente present perfect: «Last month we signed 30 restaurants» vs «We've signed 214 restaurants since launch» — confundirlos cierra la historia o la hace sonar vieja. 2) «We will use the funds» suena a decisión ya tomada; el estándar del ask es el condicional: «the funds would be used to». 3) El Q&A no se discute: valida y pivota («Fair question. Here's what the numbers show»), y si no tienes el dato, compromete fecha: «I'll send it today». 4) Ojo con los acentos que cambian la palabra: an INcrease (sustantivo) vs to inCREASE (verbo)." },
      { t: "In real conversation", body: "Shark Tank lleva desde 2009 convirtiendo el pitch en espectáculo nacional, y los aceleradores copiaron la lógica: en un demo day cada startup tiene exactamente dos minutos y treinta segundos. El vocabulario del panel: traction (pruebas de crecimiento real), unit economics (rentabilidad por transacción), customer acquisition cost, month over month, proof of concept, to scale. La prueba final del lenguaje claro se llama the grandma test: si tu abuela no entiende tu pitch, el inversionista tampoco." },
    ],
    esempi: [
      { it: "We're a marketplace that connects surplus food with hungry neighbors.", es: "Somos un marketplace que conecta comida excedente con vecinos con hambre." },
      { it: "Since launch, we've retained 62% of our users at six months.", es: "Desde el lanzamiento, hemos retenido al 62 % de nuestros usuarios a los seis meses." },
      { it: "Our growth is driven by word of mouth, not paid ads.", es: "Nuestro crecimiento es impulsado por el boca a boca, no por publicidad pagada." },
      { it: "The funds would be used to open two new cities and double the team.", es: "Los fondos se usarían para abrir dos ciudades nuevas y duplicar el equipo." },
      { it: "We're raising half a million in exchange for ten percent of the company.", es: "Estamos captando medio millón a cambio del diez por ciento de la empresa." },
    ],
    usi: [
      { q: "Presentas tracción: lanzaron hace ocho meses y el crecimiento sigue. ¿Qué tiempo usas?", options: ["We grew 18% month over month last year.", "We've grown 18% month over month since launch.", "We grow 18% month over month every day."], answer: 1, explain: "Tracción sin fecha de cierre y vigente → present perfect con since launch. El past simple la encerraría en el pasado y el presente simple la haría rutina, no logro." },
      { q: "¿Cómo se anuncia el ask en un pitch americano?", options: ["Maybe you could give us some money if you want.", "We need funds for various things soon.", "We're raising $250,000 in exchange for 8% of the company."], answer: 2, explain: "El ask se dice entero y sin rodeos: monto + equity (más uso de fondos y runway si cabe). La vaguedad y el condicional de inseguridad matan un pitch." },
    ],
  },
};
