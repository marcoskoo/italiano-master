import type { CbGrammarDeep } from "./grammar-deep";

/* ═══ v9.15 · Grammatica approfondita · C2 (cu-c2-01 … cu-c2-08) ═══ */

export const GD_C2: Record<string, CbGrammarDeep> = {
  "cu-c2-01": {
    sezioni: [
      { t: "Il burocratese", body: "El registro administrativo italiano se reconoce por: si impersonal en cadena («Si comunica che…»), participios pasados absolutos («Vista la domanda…»), arcaísmos (il sottoscritto = el abajo firmante, all'uopo = al efecto, sin d'ora in avanti), futuro prescriptivo («L'interessato dovrà presentare domanda»), y nominalizaciones latinizantes (l'iscrizione, la presentazione, la decorrenza)." },
      { t: "Il neostandard", body: "En el extremo opuesto, el neostandard (el italiano hablado real) exhibe: presente con valor de pasado («Ieri ti chiamo e non rispondi»), che polivalente, cliticos con imperativo, dislocazioni, mica negativo («Non è mica vero!»), poi y poi discursivo, y la caída del congiuntivo en la lengua rápida. Es el registro de la conversación entre nativos cultos." },
      { t: "Attenzione! · trampas para hispanohablantes", body: "El español también tiene burocratese, pero las fórmulas no se traducen literalmente: «se informa que» = si comunica che ✓, pero «el abajo firmante» = il sottoscritto (nunca «il firmatario sotto»). El error C2 típico es usar neostandard en contexto formal: «ti scrivo per dirti che…» en una reclamación oficial debilita la posición; lo correcto es «La presente per comunicare che…». Y al revés: burocratese en el bar produce hilaridad." },
      { t: "Tra i due registri", body: "El dominio C2 es alternar conscientemente: la misma comunicación en tres niveles — «Ti volevo dire che ho cambiato numero» (amigo), «Le comunico che ho cambiato numero» (trabajo), «Si comunica l'avvenuta variazione del numero di contatto» (oficina). Elegir el nivel ES el examen." },
    ],
    esempi: [
      { it: "Il sottoscritto dichiara di non avere debiti pendenti.", es: "El abajo firmante declara no tener deudas pendientes." },
      { it: "Si comunica che i termini per la presentazione delle domande sono prorogati.", es: "Se informa de que los plazos para la presentación de solicitudes han sido prorrogados." },
      { it: "Ieri ti chiamo tre volte e non rispondi mai!", es: "Ayer te llamo tres veces ¡y nunca respondes!" },
      { it: "Non è mica vero che ho dimenticato l'appuntamento!", es: "¡Qué va, no es verdad que olvidé la cita!" },
      { it: "Vista la richiesta, si provvede quanto prima.", es: "Vista la solicitud, se procederá cuanto antes." },
    ],
    usi: [
      { q: "«el abajo firmante» en una declaración oficial:", options: ["il sottoscritto", "il firmatario sotto", "quello che firma"], answer: 0, explain: "Fórmula arcaica fija del burocratese: il sottoscritto." },
      { q: "En el neostandard, «Ieri ti chiamo» con presente significa:", options: ["ayer te llamé (presente narrativo)", "ayer te llamaré", "cada día te llamo"], answer: 0, explain: "El presente narrativo del neostandard actualiza hechos pasados." },
    ],
  },

  "cu-c2-02": {
    sezioni: [
      { t: "La sintassi del trecento", body: "Dante y Boccaccio escriben con: sujeto pospuesto («E quindi uscimmo a riveder le stelle»), partícula pronombre antepuesta al infinitivo (riveder le, per lo fallo), metátesis y formas arcaicas (vô, puote, facea por faceva), y el latín transparente (a l'alta vita, sensibile). La sintaxis acumula complementos antes del verbo, al revés del italiano moderno." },
      { t: "L'eco moderno", body: "La prosa literaria moderna recupera estos rasgos como efecto estilístico: Pasolini y Gadda revierten el orden sintáctico, el poeta contemporáneo usa el imperfetto de corte dantesco. Reconocer el eco — «silenzio, come di pace antica» — permite leer la tradición dentro del italiano actual." },
      { t: "Attenzione! · trampas para hispanohablantes", body: "El español medieval es igual de inaccesible para ti que el trecento: la estrategia es la misma — no traducir palabra a palabra, sino reconocer las estructuras vivas: riveder = rivedere, facea = faceva, eo/io = io. Cuidado con falsos arcaísmos: «sì» en Dante es 'así/sí' adverbio, no la respuesta moderna. Y «alcun» puede significar 'ninguno' (con non): «senza alcun dubbio» vs «non ho alcun dubio»." },
      { t: "Nel testo antico", body: "La lectura guiada: identifica el verbo (a menudo al final), recupera los cliticos antiguos, y el verso se abre. «Nel mezzo del cammin di nostra vita mi ritrovai per una selva oscura»: sujeto pospuesto (mi ritrovai), partícula antepuesta, complemento antepuesto al adjetivo (selva oscura) — todo el mecanismo del trecento en un verso." },
    ],
    esempi: [
      { it: "E quindi uscimmo a riveder le stelle.", es: "Y entonces salimos a rever las estrellas." },
      { it: "Nel mezzo del cammin di nostra vita mi ritrovai per una selva oscura.", es: "En mitad del camino de nuestra vida me encontré en una selva oscura." },
      { it: "Amor, ch'a nullo amato amar perdona.", es: "Amor, que a ningún amado ama perdona." },
      { it: "Facea il grande fiume un cammin torto.", es: "Hacía el gran río un camino torto (describía el río su curso sinuoso)." },
      { it: "Quindi passammo, e sanza cura fama.", es: "Por eso pasamos, y sin preocuparnos de la fama." },
    ],
    usi: [
      { q: "En la sintaxis del trecento, el sujeto y el verbo suelen:", options: ["posponerse al final del verso", "abrir siempre el período", "eliminarse"], answer: 0, explain: "Los complementos preceden al verbo: «per una selva oscura mi ritrovai»." },
      { q: "«facea» equivale al italiano moderno:", options: ["faceva", "farà", "facesse"], answer: 0, explain: "Imperfecto arcaico en -ea: facea = faceva." },
    ],
  },

  "cu-c2-03": {
    sezioni: [
      { t: "Le tre figure", body: "La litote afirma negando lo contrario: «non è malvagio» (= es bonachón), «non è un genio» (= es torpe, irónico). L'iperbole exagera para el efecto cómico: «muoio di fame», «l'ho detto mille volte», «un secolo che ti aspetto». L'ossimoro une opuestos: «silenzio assordante», «un inferno di paradiso», «lucida follia»." },
      { t: "Quando si usa", body: "El humor italiano trabaja con estas tres figuras más que con el chiste estructurado: la litote socarrona («non sei mica scemo…» — ironía que golpea), la iperbole cotidiana que desinfla la tragedia, el ossimoro del humor autoirónico («un disastro perfetto»). La comedia de Goldoni y el humor televisivo moderno (Zanzanieri, Guzzanti) viven de ellas." },
      { t: "Attenzione! · trampas para hispanohablantes", body: "El español tiene las mismas figuras (lítote, hipérbole, oxímoron), así que el reto no es comprenderlas sino calibrar el registro italiano: la litote con mica («non è mica male») es eufemismo positivo, mientras sin mica puede ser golpe directo. La iperbole italiana tolera más sangre teatral («sto morendo!» por cansancio) que la española. Y el ossimoro funciona mejor con sustantivos abstractos: «silenzio assordante» sí, «mesa ruidosamente silenciosa» no." },
      { t: "Nel parlato umoristico", body: "La receta del chiste italiano culto: litote de apertura («Non dico che sia un disastro…»), pausa, iperbole de cierre («…ma la casa galleggia»). El ossimoro puntuale sella: «organizzazione militare, risultato anarchico»." },
    ],
    esempi: [
      { it: "Non dico che sia un disastro, ma la casa galleggia.", es: "No digo que sea un desastre, pero la casa flota." },
      { it: "Ti aspetto da un secolo, letteralmente un secolo!", es: "Te espero desde hace un siglo, ¡literalmente un siglo!" },
      { it: "Un silenzio assordante è calato sulla sala.", es: "Un silencio atronador cayó sobre la sala." },
      { it: "Non è mica male, questo vino.", es: "No está nada mal, este vino." },
      { it: "Una lucida follia: il progetto perfetto per fallire bene.", es: "Una lucidez loca: el proyecto perfecto para fracasar bien." },
    ],
    usi: [
      { q: "«non è malvagio» (litote) significa:", options: ["es bonachón", "es malvado", "no existe el mal"], answer: 0, explain: "La litote afirma negando el contrario: no es malvagio = es bueno." },
      { q: "«silenzio assordante» es:", options: ["un ossimoro", "una litote", "una metafora"], answer: 0, explain: "Ossimoro: unión de términos contradictorios." },
    ],
  },

  "cu-c2-04": {
    sezioni: [
      { t: "Le consecutiva del pathos", body: "La prosa de la arenga encadena consecutivas crecientes: «Tanto era il dolore che…», «Di un tale schifo che…», «Così profondo era il vuoto che nessuno…». La inversión literaria (tanto/ così + verbo + che) eleva el tono: «Così parlò, che tutti ammutolirono»." },
      { t: "Le figure del pathos", body: "La arenga acompaña las consecutivas con anáfora (repetición al inicio: «E caddero, e caddero, e caddero»), clímax ascendente (tres términos de intensidad creciente), interrogación retórica y apóstrofe (invocación al público: «Italiani!»). El ritmo tricolonico — dos frases breves y una larga — marca la respiración del discurso." },
      { t: "Attenzione! · trampas para hispanohablantes", body: "El español retórico es hermano del italiano: «tan grande era el dolor que…» existe también. La diferencia clave: el italiano permite la anteposición del intensificador sin verbo («Tanto era il dolore che») con más naturalidad. Y las figuras tienen nombres falsos amigos: l'anàfora italiana es la anáfora española ✓, pero «el clímax» se dice climax (o gradazione) y la apóstrofe es l'apostrofe — cuidado con l'apostrofo, que es el signo tipográfico." },
      { t: "Nel testo oratorio", body: "El patrón de la arenga C2: anáfora de apertura («Abbiamo visto… Abbiamo taciuto… Abbiamo aspettato»), consecutiva central («a un punto tale che la pazienza si è rotta»), clímax final y apóstrofe de cierre («E voi, adesso, cosa scegliete?»)." },
    ],
    esempi: [
      { it: "Tanto era il dolore che nessuno osava parlare.", es: "Tan grande era el dolor que nadie osaba hablar." },
      { it: "Così parlò, che tutti ammutolirono.", es: "Así habló, que todos enmudecieron." },
      { it: "Abbiamo visto, abbiamo taciuto, abbiamo aspettato troppo.", es: "Hemos visto, hemos callado, hemos esperado demasiado." },
      { it: "Il vuoto era di un tale abisso che ogni parola svaniva.", es: "El vacío era de un abismo tal que cada palabra se desvanecía." },
      { it: "E voi, adesso, cosa scegliete: la memoria o l'oblio?", es: "Y vosotros, ahora, ¿qué elegís: la memoria o el olvido?" },
    ],
    usi: [
      { q: "La repetición al inicio de frases consecutivas («Abbiamo visto… abbiamo taciuto…») es:", options: ["un'anàfora", "una litote", "un ossimoro"], answer: 0, explain: "Anáfora: misma palabra al inicio de cada miembro." },
      { q: "«a un punto tale che» introduce:", options: ["una consecutiva", "una concessiva", "una relativa"], answer: 0, explain: "La consecutiva intensificada: a un punto tale che = hasta tal punto que." },
    ],
  },

  "cu-c2-05": {
    sezioni: [
      { t: "I tempi che non coincidono", body: "Mapa de desajustes ES→IT: (1) «llevaba dos horas estudiando» = studiavo da due ore (no existe el construction llevar + gerundio); (2) «acabo de llegar» = sono appena arrivato; (3) «iba a salir» = stavo per uscire; (4) «sigo pensando» = continuo a pensare / penso ancora; (5) el pretérito perfecto español de la mañana («hoy he desayunado») es passato prossimo ✓ pero el del día («ayer he visto») también lo es." },
      { t: "I falsi amici della traduzione", body: "Estructuras traicioneras: «hace dos años que vivo aquí» = vivo qui da due anni; «llevo viviendo» = vivo da; «está desde ayer» = è qui da ieri; «de+infinitivo» condicional español («de haber sabido») = se + congiuntivo trapassato (se avessi saputo); «como para + infinitivo» = tale da; «no vaya a ser que» = che non sia che / per paura che + congiuntivo." },
      { t: "Attenzione! · trampas para hispanohablantes", body: "Estos desajustes son exactamente tu ventaja C2: el hispanohablante que domina el mapa de las no-coincidencias deja de traducir y empieza a transvolar. Los errores residuales de nivel: usar «da» con futuro («vivo qui da due anni» bien, pero «vivrò qui da due anni» ✗ → per due anni), y el gerundio español de posterioridad («llegó, diciendo que…» = arrivò dicendo che ✓ pero «salió y luego dijo» ✗ gerundio → e disse)." },
      { t: "Nel lavoro di traduzione", body: "El método: identifica la estructura española, verifica si el italiano la tiene, y si no, sustituye por el patrón nativo. «Llevo tres años traduciéndome la vida» → «Da tre anni mi traduco la vita»: el verbo simple con da sustituye al compuesto español." },
    ],
    esempi: [
      { it: "Studiavo da due ore quando è arrivato il suo messaggio.", es: "Llevaba dos horas estudiando cuando llegó su mensaje." },
      { it: "Sono appena arrivato, dammi cinque minuti.", es: "Acabo de llegar, dame cinco minutos." },
      { it: "Stavo per uscire quando ha squillato il telefono.", es: "Iba a salir cuando sonó el teléfono." },
      { it: "Vivo a Roma da tre anni e non mi stanco mai.", es: "Llevo tres años viviendo en Roma y nunca me canso." },
      { it: "Se l'avessi saputo prima, avrei agito diversamente.", es: "De haberlo sabido antes, habría actuado de otra manera." },
    ],
    usi: [
      { q: "«Acabo de llegar»:", options: ["Sono appena arrivato.", "Arrivo appena finito.", "Sto per arrivare adesso."], answer: 0, explain: "appena + participio; sto per uscire es 'iba a salir'." },
      { q: "«Llevaba dos horas esperando»:", options: ["Aspettavo da due ore.", "Ho aspettato due ore portando.", "Aspettavo per due ore fa."], answer: 0, explain: "El italiano no tiene 'llevar + gerundio': verbo + da + duración." },
    ],
  },

  "cu-c2-06": {
    sezioni: [
      { t: "Le regole del parlato reale", body: "El neostandard hablado: (1) presente narrativo por pasado prossimo («Allora le dico: ma sei pazza?»); (2) che polivalente («Il libro che ieri ti ho detto» por Il libro di cui ti ho parlato); (3) cliticos con imperativo suave («Dimmi un po'»); (4) caída del congiuntivo («penso che è» aceptado en la conversación rápida); (5) dislocazioni y topicalizaciones masivas; (6) mica, poi, dài como marcadores." },
      { t: "Quando si usa", body: "Es el registro de la conversación real entre nativos: rápidos, entrecortados, llenos de autocorrecciones. Entenderlo es la puerta del cine, la televisión y la calle; usarlo con naturalidad marca la integración total. La regla de oro: el neostandard es oral — en la escritura formal todas sus marcas se corrigen." },
      { t: "Attenzione! · trampas para hispanohablantes", body: "El español coloquial tiene marcas equivalentes («y yo le digo», «pues mira»), pero las piezas no coinciden: allora ≠ «entonces» puro (marca reacción), dài ≠ «dale» (es '¡venga!'), mica niega con ironía («non è mica vero» = '¡qué va!'). El presente narrativo italiano con preguntas al presente («E lui che fa? Se mette a ridere») es más frecuente que el histórico español." },
      { t: "Nel parlato reale", body: "Una conversación neostandard: «Allora, ieri chiamo Marco, sai? E lui, che fa? Non risponde. Lo richiamo dopo, e mi dice: scusa, non ti avevo sentito. Ma dai! Tre squilli!» — ritmo, presente narrativo, apóstrofes, iperbole: todo el neostandard en treinta palabras." },
    ],
    esempi: [
      { it: "Allora le dico: ma sei pazza? E lei si mette a ridere.", es: "Entonces le digo: ¿pero estás loca? Y ella se pone a reír." },
      { it: "Il libro che ieri ti ho detto è finalmente uscito.", es: "El libro que ayer te dije (de que te hablé) por fin salió." },
      { it: "Non è mica vero che ho perso il treno!", es: "¡Qué va, no es verdad que perdí el tren!" },
      { it: "E lui che fa? Se mette a cantare in mezzo alla piazza.", es: "¿Y él qué hace? Se pone a cantar en medio de la plaza." },
      { it: "Dai, non esagerare, tre squilli non sono mica dieci!", es: "Venga, no exageres, ¡tres tonos no son diez!" },
    ],
    usi: [
      { q: "En el neostandard, «Allora le dico» con presente narra:", options: ["un hecho pasado reciente", "un hecho futuro", "una costumbre"], answer: 0, explain: "Presente narrativo: actualiza el pasado en la conversación." },
      { q: "«mica» en «non è mica vero» expresa:", options: ["negación irónica/escéptica", "duda del hablante", "refuerzo afirmativo"], answer: 0, explain: "mica niega con ironía: ¡qué va, no es verdad!" },
    ],
  },

  "cu-c2-07": {
    sezioni: [
      { t: "Il patto narrativo", body: "El tiempo verbal del relato es un contrato con el lector: el passato remoto promete distancia épica (Calvino, la novela clásica), il passato prossimo promete testimonio personal (la narrativa moderna del norte), el presente histórico promete inmediatez (Camilleri, el thriller), el imperfetto narrativo en cierre («Due ore dopo moriva») es un efecto de destino ya escrito." },
      { t: "Le scelte di tempo", body: "Cada elección cambia el pacto: alternar remoto y prossimo mezcla saga y memoria («Nel 1943 scoppiò tutto; io l'ho capito solo dopo»); el imperfetto de hábito pinta la vida entera («Quell'estate andavamo al mare ogni giorno»); el trapassato abre las cajas chinas de la analepsis («Aveva promesso che non sarebbe mai tornato»)." },
      { t: "Attenzione! · trampas para hispanohablantes", body: "El español novelístico elige entre indefinido e imperfecto; el italiano añade la dimensión prossimo/remoto que no existe en tu sistema: la misma historia contada con ho visto o vidi cambia de género. El imperfetto narrativo con valor de destino («Due ore dopo moriva») no existe en español: se traduce por «dos horas después moriría» (condicional de conjetura) o «murió», y el matiz se pierde — es una licencia italiana pura." },
      { t: "Nel racconto", body: "El ejercicio C2: contar la misma anécdota en tres pactos — remoto épico («Giunsi al ponte all'alba; il fiume ruggiva»), prossimo testimonial («Sono arrivato al ponte all'alba; il fiume ruggiva»), presente de thriller («Arrivo al ponte all'alba. Il fiume ruggisce»). La gramática ya es narrativa aplicada." },
    ],
    esempi: [
      { it: "Giunsi al ponte all'alba; il fiume ruggiva sotto la brina.", es: "Llegué al puente al alba; el río rugía bajo la escarcha." },
      { it: "Quell'estate andavamo al mare ogni giorno, senza eccezioni.", es: "Aquel verano íbamos al mar cada día, sin excepciones." },
      { it: "Aveva promesso che non sarebbe mai più tornato in quella città.", es: "Había prometido que nunca más volvería a esa ciudad." },
      { it: "Due ore dopo moriva, come aveva previsto il medico.", es: "Dos horas después moría — moriría —, como había previsto el médico." },
      { it: "Arrivo al ponte all'alba. Il fiume ruggisce. Nessuno in giro.", es: "Llego al puente al alba. El río ruge. Nadie alrededor." },
    ],
    usi: [
      { q: "El imperfetto narrativo «Due ore dopo moriva» expresa:", options: ["un destino como ya escrito", "un hábito repetido", "una acción en curso"], answer: 0, explain: "El imperfetto de destino: el cierre está ya decidido — licencia literaria italiana." },
      { q: "Contar con il passato remoto establece un pacto:", options: ["épico / de distancia", "testimonial / personal", "de inmediatez"], answer: 0, explain: "remoto = saga y distancia; prossimo = testimonio; presente = thriller." },
    ],
  },

  "cu-c2-08": {
    sezioni: [
      { t: "La mappa di C2", body: "C2 es el dominio total: los registros del burocratese al neostandard, la sintaxis del trecento y su eco moderno, las figuras del humor (litote, iperbole, ossimoro), la retórica del pathos (consecutivas, anáfora, clímax), el mapa de las estructuras que no coinciden entre español e italiano, y el pacto narrativo de los tiempos verbales. La gramática ya no es corrección: es elección estilística consciente." },
      { t: "Gli errori residui", body: "Cinco errores C2: (1) neostandard en escritura formal («ti scrivo» en una reclamación); (2) litote sin calibrar la ironía (dice «non è malvagio» y ofende); (3) trapassato remoto en el habla; (4) calco de «llevaba + gerundio»; (5) elegir remoto vs prossimo al azar en la narración, rompiendo el pacto." },
      { t: "Come mescolare tutto", body: "Un párrafo C2 que mezcla registros con intención: «Il sottoscritto — non senza una certa lucida follia — comunica che, se avesse seguito il burocratese puro, non avrebbe mai scritto una pagina così. Tanto era il disgusto per la prosa morta, che abbiamo scelto il neostandard: quindi ti chiamo, e ti dico: dai, leggilo adesso»." },
      { t: "Oltre C2", body: "Después de C2 no hay más gramática que aprender: hay estilo que pulir. Las metas naturales: leer a Dante sin notas, escribir un saggio que un italiano culto no distinga de uno propio, y traducir no ya palabras sino pactos — del español al italiano y viceversa. La lengua se convierte en casa." },
    ],
    esempi: [
      { it: "Il sottoscritto comunica che la domanda è stata accolta.", es: "El abajo firmante comunica que la solicitud ha sido admitida." },
      { it: "Tanto era il disgusto per la prosa morta, che scegliemmo la lingua parlata.", es: "Tan grande era el asco por la prosa muerta, que elegimos la lengua hablada." },
      { it: "Se avessi seguito il burocratese, non avrei mai scritto così.", es: "De haber seguido el burocratese, jamás habría escrito así." },
      { it: "Non è mica un capolavoro, dài, ma regge fino alla fine.", es: "No es que sea una obra maestra, ¡venga!, pero aguanta hasta el final." },
      { it: "Due ore dopo moriva, e con lui moriva un'epoca intera.", es: "Dos horas después moría — moriría —, y con él moría toda una época." },
    ],
    usi: [
      { q: "«Non è mica un capolavoro, dài» pertenece al registro:", options: ["neostandard hablado", "burocratese", "letterario antico"], answer: 0, explain: "mica + dài: marcadores del neostandard conversacional." },
      { q: "El dominio C2 se demuestra:", options: ["alternando registros según el contexto", "usando siempre el registro más culto", "eliminando el neostandard"], answer: 0, explain: "C2 = elección consciente: sottoscritto o ti chiamo según el destinatario." },
    ],
  },
};
