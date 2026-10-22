import type { CbGrammarDeep } from "../../extra/grammar-deep";

/* ═══ PT B2 · Grammar deep — 12 unidades ═════════════════════════════
   Explicación amplia de la gramática de cada unidad, con las trampas
   específicas del hispanohablante en portugués europeo. Campos `.it` =
   portugués de Portugal. Secciones: Como funciona / Quando se usa /
   Atenção! (para hispanohablantes) / Na conversa real. */

export const PT_DEEP_B2: Record<string, CbGrammarDeep> = {
  "pt-cu-b2-01": {
    sezioni: [
      { t: "Como funciona", body: "El concesivo «embora» abre siempre una subordinada en conjuntivo: «embora os números SEJAM bons, ela tem dúvidas». «Apesar de» se une a un infinitivo: si el sujeto es el mismo, infinitivo simple («apesar de trabalhar em casa»); si quieres marcarlo, infinitivo pessoal («apesar de trabalharmos em casa») o «apesar de a reunião ser longa», y también «apesar de que + conjuntivo». Los adversativos «no entanto», «porém», «contudo» y «todavia» son formales y unen dos oraciones ya construidas: «os dados são bons; no entanto, há riscos»." },
      { t: "Quando se usa", body: "En un debate portugués se encadena con «por um lado… por outro…», se concede con «embora» ou «apesar de» y se rebatirá después con el adversativo. Alternativas útiles: «ainda que» (como embora, algo más literario), «mesmo assim» (aun así) y «nem por isso» (por eso tampoco). Para el registro culto existe «conquanto + conjuntivo» («conquanto os dados sejam claros»), frecuente en informes y columnas de opinión." },
      { t: "Atenção! (para hispanohablantes)", body: "1) «Apesar que» sin «de» no existe: el español «a pesar que» no se calca; siempre «apesar de + infinitivo» ou «apesar de que». 2) Tras «embora» el portugués usa casi siempre conjuntivo, incluso con hechos: donde el español dice «aunque es caro» (indicativo), el pt prefiere «embora seja caro». 3) «No entanto» no es una negación de «obstante»: significa «sin embargo», igual que «porém» y «contudo»; su variante cultísima «não obstante» se reserva para la escrita formal. 4) No olvides el circunflejo de «falámos»/«trabalhámos» (perfeito de nós) frente al presente «falamos»." },
      { t: "Na conversa real", body: "En una reunión lisboeta oirás «sinceramente…» e «olha…» antes de cada contraste, y la fórmula de concesión suave «compreendo a tua posição, mas…» para rebatir sin levantar la voz. El cierre negociador típico es «proporia que fizéssemos um teste», que deja la decisión abierta. Si quieres sonar formal sin pasarte, «no entanto» entre pausas hace el trabajo de un «sin embargo» de traje y corbata." },
    ],
    esempi: [
      { it: "Embora o escritório seja longe, gosto de ir duas vezes por semana.", es: "Aunque la oficina esté lejos, me gusta ir dos veces por semana." },
      { it: "Apesar de a chuva não parar, a sessão continuou até às seis.", es: "A pesar de que la lluvia no parara, la sesión continuó hasta las seis." },
      { it: "A proposta é boa; no entanto, falta-lhe um orçamento claro.", es: "La propuesta es buena; sin embargo, le falta un presupuesto claro." },
      { it: "Trabalhámos bem, contudo o cliente pediu alterações.", es: "Trabajamos bien; con todo, el cliente pidió cambios." },
      { it: "Ainda que a equipa seja pequena, entrega tudo a tempo.", es: "Si bien el equipo es pequeño, entrega todo a tiempo." },
    ],
    usi: [
      { q: "En un debate quieres unir formalmente dos frases ya construidas: «Os números são bons» + «há riscos». ¿Qué opción encaja?", options: ["Os números são bons, embora há riscos.", "Os números são bons; no entanto, há riscos.", "Os números são bons apesar de há riscos."], answer: 1, explain: "«No entanto» une dos oraciones adversativamente; «embora» exigiría conjuntivo (haja) y «apesar de» pide infinitivo ou que + conjuntivo, nunca indicativo directo." },
      { q: "Quieres decir «aunque seamos un equipo pequeño» con «embora». ¿Cuál es la forma correcta?", options: ["Embora somos uma equipa pequena, entregamos a tempo.", "Embora sejamos uma equipa pequena, entregamos a tempo.", "Embora fomos uma equipa pequena, entregamos a tempo."], answer: 1, explain: "«Embora» exige conjuntivo (sejamos); el indicativo «somos» es el calco del español «aunque somos», que aquí suena a error." },
    ],
  },

  "pt-cu-b2-02": {
    sezioni: [
      { t: "Como funciona", body: "El imperfeito do conjuntivo se forma sobre el pretérito imperfeito: «falava → falasse», «era → fosse», «fizemos → fizéssemos», «propusemos → propuséssemos». Es el motor de la persuasión cortés: «sugeria que fizéssemos uma experiência», «propunha uma alternativa», «talvez pudéssemos alinhá-lo com os números». Tras verbos de voluntad e influencia (querer, preferir, esperar, sugerir, pedir, deixar) el portugués exige conjuntivo: «espero que a proposta SEJA viável», «não quero que PENSEM que decido tudo sozinho»." },
      { t: "Quando se usa", body: "Sirve para proponer sin imponer a un superior: «sugeria que…», «e se nós experimentássemos durante um mês?», «talvez pudéssemos…». La interrogativa hipotética «e se nós…?» es la llave dorada de la propuesta portuense. Para cerrar el trato con lealtad sin servilismo: «pode deixar, Sr. Fonseca» (descuide, quédese tranquilo) ou «descanse, que trato do assunto»." },
      { t: "Atenção! (para hispanohablantes)", body: "1) «Esperar que» nunca va con futuro: «espero que seja claro», no «espero que será»; el futuro do conjuntivo portugués vive en las temporales («quando eu for»), no tras verbos de deseo. 2) El acento del imperfeito do conjuntivo cae en la sílaba anterior a -sse: fiZÉ-sse-mos, nunca «fize-SSÉ-mos». 3) Falso amigo «pretender»: en portugués significa «tener la intención de» («pretendemos poupar tempo»), no «fingir»; para fingir existe «fingir». 4) Con o senhor, sube el registro: «pode deixar» en vez de muletillas demasiado íntimas." },
      { t: "Na conversa real", body: "En una empresa tradicional do Porto la jerarquía se siente en el trato: «o senhor Fonseca», «a senhora doutora», y nadie da órdenes de tú a arriba. La secuencia persuasiva completa suena así: «compreendo a sua reserva» (concesión), «sugeria que fizéssemos uma experiência» (propuesta suavizada), «e se avaliássemos com os números do trimestre?» (invitación) y «pode deixar» (cierre leal)." },
    ],
    esempi: [
      { it: "Sugeria que começássemos pela parte mais simples do projeto.", es: "Sugería que empezáramos por la parte más simple del proyecto." },
      { it: "E se pedíssemos a opinião dos colegas antes de decidir?", es: "¿Y si pidiéramos la opinión de los colegas antes de decidir?" },
      { it: "A gerente prefere que os pedidos cheguem por escrito.", es: "La gerente prefiere que las peticiones lleguen por escrito." },
      { it: "Não quero que penses que isto é uma crítica pessoal.", es: "No quiero que pienses que esto es una crítica personal." },
      { it: "Pode deixar, Sr. Fonseca: eu trato do assunto ainda hoje.", es: "Descuide, Sr. Fonseca: me ocupo del asunto hoy mismo." },
    ],
    usi: [
      { q: "Quieres proponer educadamente a tu equipo hacer una encuesta antes de decidir. ¿Cuál encaja?", options: ["Sugeria que fazíamos um inquérito.", "Sugeria que fizéssemos um inquérito.", "Sugeria que faremos um inquérito."], answer: 1, explain: "Tras «sugeria que», el portugués pide imperfeito do conjuntivo (fizéssemos); el indicativo «fazíamos» y el futuro «faremos» rompen la suavización y suenan a imposición." },
      { q: "Tu gestor espera que la propuesta sea viable. ¿Qué forma es la correcta?", options: ["O gestor espera que a proposta será viável.", "O gestor espera que a proposta seja viável.", "O gestor espera que a proposta seria viável."], answer: 1, explain: "«Esperar que» rige presente do conjuntivo (seja); el futuro «será» y el condicional «seria» son calcos imposibles en esta posición." },
    ],
  },

  "pt-cu-b2-03": {
    sezioni: [
      { t: "Como funciona", body: "El portugués europeo expresa la acción en curso con «estar a + infinitivo»: «estão a gozar», «estava a imitar o chefe», «estou a secar a camisa». Con pronombre, la partícula se intercala: «estás-te a ver para o trabalho». El pretérito imperfeito narra el telón de fondo («o jantar corria bem») y prepara la sorpresa; o perfeito puntea el golpe: «a apresentação estava ótima, para quem a fez em vinte minutos». La negación duplicada final «não estava mal, não» es litote: suaviza en vez de reforzar." },
      { t: "Quando se usa", body: "Es la gramática del humor seco: el elogio sospechoso con pausa, la queja que es piada, el «está tudo bem» dicho con melodía plana que significa lo contrario. Muletillas atenuantes: «tem piada!» (¡tiene gracia!), «estás a ver?» (¿ya se ve?), «pois…», «não fizemos por mal» (no fue con mala intención). La autoironía es la jugada social perfecta: burlarse de uno mismo antes de que lo hagan los demás." },
      { t: "Atenção! (para hispanohablantes)", body: "1) Nunca gerundio a la brasileña: «estão gozando» delata extranjero (y mezcla registro); en Portugal siempre «estão a gozar». 2) Falso amigo «gozar»: en pt «gozar com alguém» es burlarse, mientras que el español «gozar» es disfrutar; no traduzcas «gozar de la vida» como «gozar da vida». 3) La negación duplicada no es enfática: «não estava mal, não» equivale a «no estaba mal, precisamente», un elogio tibio. 4) La ironía se canta plana y descendente: cuanto más plano el tono de «está tudo bem», más claro el segundo sentido." },
      { t: "Na conversa real", body: "En la mesa de Alfama, si alguien te lanza un elogio con pausa («a tua apresentação estava incrível, vinte minutos e nem uma revisão»), la respuesta social no es defenderse: es devolver la pelota con la misma bola («estás-te a ver para o trabalho?»). Si te pasas de literal, pierdes el juego; si aprendes a leer o tom, ganas la mesa. Y ante una gozação leve: «foi só uma piada», «não fizemos por mal», y a otra cosa." },
    ],
    esempi: [
      { it: "Estão a gozar comigo ou estão a falar a sério?", es: "¿Me estáis tomando el pelo o habláis en serio?" },
      { it: "O Rui estava a contar a piada quando o chefe entrou na sala.", es: "Rui estaba contando el chiste cuando el jefe entró en la sala." },
      { it: "Não estava mau, não — até comi o prato todo.", es: "No estaba mal, no — hasta me comí el plato entero." },
      { it: "A sala estava cheia e o microfone não funcionava: tem piada!", es: "La sala estaba llena y el micrófono no funcionaba: ¡tiene gracia!" },
      { it: "O jantar corria bem até alguém perguntar pelo ordenado.", es: "La cena iba bien hasta que alguien preguntó por el sueldo." },
    ],
    usi: [
      { q: "Unos colegas se ríen de ti con humor seco y quieres reaccionar con naturalidad. ¿Cuál suena a Lisboa?", options: ["Vocês estão gozando de mim!", "Vocês estão a gozar comigo!", "Vocês gozam em mim!"], answer: 1, explain: "pt-PT: «estar a + infinitivo» para la acción en curso y «gozar com alguém» para burlarse; el gerundio, la preposición «de» y la posición «em» son calcos que no existen." },
      { q: "Quieres describir el decorado de una anécdota (la fiesta transcurría tranquila) antes del golpe final. ¿Qué tiempo eliges?", options: ["A festa correu bem até à meia-noite.", "A festa corria bem até à meia-noite.", "A festa tinha corrido bem até à meia-noite."], answer: 1, explain: "El imperfeito «corria» pinta el telón de fondo que algo romperá; o perfeito «correu» presentaría el hecho cerrado y el mais-que-perfeito lo situaría antes de otro pasado." },
    ],
  },

  "pt-cu-b2-04": {
    sezioni: [
      { t: "Como funciona", body: "El portugués europeo formal conserva la mesoclisis: el pronombre se intercala entre raíz y desinencia del futuro y del condicional — «poder-se-á dizer», «dir-se-ia», «concluir-se-á». El kit del hedging lo completan el condicional atenuador («poderia ser uma vantagem»), las impersonales con conjuntivo («é provável que seja publicado»), los adverbiales («possivelmente», «em tese», «até certo ponto») y los verbos de tendencia («o algoritmo tende a fechar os utilizadores em bolhas»)." },
      { t: "Quando se usa", body: "Es la lengua del ensaio de opinião: tesis con matiz, argumentos encadenados con «em primeiro lugar», «além disso», «por conseguinte», y la refutación elegante en tres tiempos: concesión («é verdade que há mais vozes»), adversativo («mas», «no entanto», «contudo») y contra-argumento matizado («democratizar o acesso não é democratizar a qualidade»). La pregunta retórica «não será essa uma vantagem?» abre el turno sin cerrar la puerta." },
      { t: "Atenção! (para hispanohablantes)", body: "1) La mesoclisis solo vive con futuro y condicional: «poder-se-á», «dir-se-ia»; con presente se dice «pode-se», nunca «pode-se-á» mezclado. 2) El acento salta a la sílaba final: podeR-se-Á, diR-se-IA, una sola unidad melódica sin pausa. 3) Falso amigo «confronto»: en pt es «contraste, cotejo» («o confronto de ideias»), no enfrentamiento violento; «confrontar ideias» es compararlas. 4) pt-PT escribe «facto» (hecho); el brasileño «fato» significa también traje: en Portugal, «fato» es solo el traje." },
      { t: "Na conversa real", body: "En una coluna de opinião o en una rueda de café intelectual oirás «poder-se-á dizer que…», «dir-se-ia que…», «até certo ponto, concordo». Para cerrar sin dogmatismo: «em conclusão, parece provável que…». Si alguien dispara una certeza total («acabou-se a discussão»), la réplica educada llega con hedging: «não terá sido um pouco cedo para essa conclusão?»." },
    ],
    esempi: [
      { it: "Poder-se-á dizer que o debate público melhorou com as redes?", es: "¿Podría decirse que el debate público mejoró con las redes?" },
      { it: "Dir-se-ia que toda a gente tem opinião, mas nem toda a gente tem paciência para ouvir.", es: "Diríase que todo el mundo tiene opinión, pero no todo el mundo tiene paciencia para escuchar." },
      { it: "O algoritmo tende a mostrar o que agrada, não o que ensina.", es: "El algoritmo tiende a mostrar lo que agrada, no lo que enseña." },
      { it: "É verdade que há mais vozes; contudo, há menos escuta.", es: "Es verdad que hay más voces; sin embargo, hay menos escucha." },
      { it: "Em tese, concordo contigo; na prática, até certo ponto.", es: "En teoría, estoy de acuerdo contigo; en la práctica, hasta cierto punto." },
    ],
    usi: [
      { q: "Estás escribiendo la conclusión del ensayo y quieres matizar sin dogmatismo. ¿Cuál encaja?", options: ["Conclui-se portanto que a democracia ganhou de vez.", "Poder-se-á concluir que a democracia ganhou, embora a escuta tenha perdido.", "Concluimos por fim que a democracia ganhou definitivamente."], answer: 1, explain: "La mesoclisis «poder-se-á» más el concesivo «embora + conjuntivo» mantienen el matiz probabilístico del hedging; las otras dos suenan a sentencia dogmática o mezclan español («concluimos»)." },
      { q: "¿Cuál de estas frases usa correctamente la estructura de tendencia?", options: ["O algoritmo tende fechar os utilizadores em bolhas.", "O algoritmo tende a fechar os utilizadores em bolhas.", "O algoritmo tende para fechar os utilizadores em bolhas."], answer: 1, explain: "«Tender a + infinitivo» es la colocación fijada; sin la preposición «a» la frase es agramatical en este sentido." },
    ],
  },

  "pt-cu-b2-05": {
    sezioni: [
      { t: "Como funciona", body: "La condicional mixta une un pasado irreal con un resultado de presente: «se me tivesse mudado há dois anos, agora pagava a metade» (mais-que-perfeito composto → imperfeito ou condicional). La condicional de negociación clásica es «se + imperfeito do conjuntivo → condicional»: «se assinasse dois anos, a renda descia» (hablado) ou «desceria» (formal). Para el futuro real, el portugués usa futuro do conjuntivo: «se não baixar a renda, terei de procurar outra casa»." },
      { t: "Quando se usa", body: "La negativa suavizada tiene tres muletas de oro: «receio que + conjuntivo» («receio que novecentos não me sejam possíveis»), «em princípio» (aceptar sin comprometerse) y «talvez + conjuntivo» («talvez cheguemos aos oitocentos e noventa»). Añade «teria de ser» para poner condiciones y «com franqueza» para bajar el precio com educação: el conjunto permite decir casi que não sin decir não." },
      { t: "Atenção! (para hispanohablantes)", body: "1) Para condiciones futuras el español usa «si + presente» y el pt futuro do conjuntivo: «se não baixar» (no «se não baixa»), «se o senhor pintar, fecho esta semana». 2) El condicional composto «teria fechado» es formal; en la habla, o imperfeito hace el trabajo: «se me tivesse dito, já estava tudo tratado». 3) Falsos amigos del contrato: «renda» es el alquiler mensual (la renta española como ingreso es «rendimento»); «assinar» es firmar (no asesinar); «caução» es la fianza, con diptongo nasal final." },
      { t: "Na conversa real", body: "La llamada al sr. Vasco suena así: «obrigado pela visita; o T2 é exatamente o que procuro» (cortesía), «se a renda fosse de oitocentos e noventa, assinava dois anos» (propuesta condicional), «receio que novecentos não me sejam possíveis, mas talvez cheguemos a um acordo» (límite suavizado) y «fechamos o negócio ainda esta semana?» (cierre). Negociar en Portugal es conversar despacio: nadie firma con quien tiene prisa." },
    ],
    esempi: [
      { it: "Se tivesse visto o anúncio em janeiro, agora pagava a metade.", es: "Si hubiera visto el anuncio en enero, ahora pagaría la mitad." },
      { it: "Se o senhor pintasse o quarto, assinava dois anos.", es: "Si usted pintara el cuarto, firmaba dos años." },
      { it: "Receio que esse valor não me seja possível neste momento.", es: "Temo que ese valor no me sea posible en este momento." },
      { it: "Em princípio, estou interessado; teria de ver o contrato.", es: "En principio, estoy interesado; tendría que ver el contrato." },
      { it: "Se a renda não baixar, terei de procurar outra zona.", es: "Si la renta no baja, tendré que buscar otra zona." },
    ],
    usi: [
      { q: "Quieres decir «si me lo hubiera dicho ayer, ya estaría todo arreglado» con el matiz hablado portugués. ¿Cuál encaja?", options: ["Se me dizia isso ontem, já estava tudo tratado.", "Se me tivesse dito isso ontem, já estava tudo tratado.", "Se me diria isso ontem, já estava tudo tratado."], answer: 1, explain: "Mixta: condición pasada irreal com mais-que-perfeito composto (tivesse dito) e resultado de presente com imperfeito (estava); o imperfeito como condición pierde lo irreal y o condicional na condición es imposible." },
      { q: "Eres el casero y quieres rechazar 900 € con cortesía negociadora. ¿Cuál suena bien?", options: ["Novecentos é impossível e chega.", "Receio que novecentos não sejam possíveis, mas talvez cheguemos a um meio-termo.", "Talvez novecentos são possíveis, mas não garanto."], answer: 1, explain: "«Receio que + conjuntivo» (sejam) suaviza la negativa y «talvez» deja la puerta abierta; la primera opción es brusca y la tercera mezcla «talvez» com indicativo, imposible en pt." },
    ],
  },

  "pt-cu-b2-06": {
    sezioni: [
      { t: "Como funciona", body: "El verbo portugués elige su preposición y no siempre coincide con la española: «deparar-se com» (toparse com), «dar-se bem com» (llevarse bien com), «pôr alguém em contacto com», «contar com» (contar com), «apostar em» (apostar por), «mexer em» (tocar/manipular), «precisar de» (necesitar). Muchos son pronominales y la partícula forma parte del bloque: «deparei-me com o vosso relatório» está completo; «deparei com» queda cojo. En Portugal el clítico va tras el verbo conjugado: «ponho-te em contacto», «dou-me bem»." },
      { t: "Quando se usa", body: "Son las colocaciones del networking à portuguesa: «posso roubar-lhe dois minutos?» (petición de tiempo), «muito gosto» (primer encuentro), «deixa-me o teu cartão?», «mando-te o convite», «fico a dever» (quedo en deuda), «vir a calhar» (venir de perlas). Con desconocidos de más edad o jerarquía, sube el registro: «não queria importunar», «posso roubar-lhe dois minutos no fim da sessão?»." },
      { t: "Atenção! (para hispanohablantes)", body: "1) «Precisar DE»: el español «necesitar» no lleva preposición y el calco «preciso um contacto» suena a extranjero: «estou a precisar de um contacto». 2) Ênclise obligatoria tras verbo conjugado: nunca «me deparo com» ou «te ponho em contacto» en inicio de frase; en pt-PT: «deparei-me com», «ponho-te». 3) Infinitivo pessoal con sujeto definido tras preposición: «para chegarmos ao coffee break», «antes de ele sair da sessão». 4) «Mandar em» es dominar («o cartão ainda manda no mundo real»), mientras que «mandar» solo es enviar: no los mezcles." },
      { t: "Na conversa real", body: "Trabalhar a sala tiene receta: ouvir mais do que se apresenta, anotar o que interessa a cada pessoa y dar seguimento em quarenta e oito horas («seguimento», no «follow-up», si quieres sonar portugués). El final elegante de um contacto: «ponho-te em contacto com a nossa responsável de operações» e «fico a dever». Y si alguien te presenta a alguien: «venho apresentar-te alguém» es la fórmula local para «te presento a alguien»." },
    ],
    esempi: [
      { it: "Deparei-me com um artigo vosso sobre logística verde.", es: "Me topé con un artículo vuestro sobre logística verde." },
      { it: "Dou-me bem com toda a gente, apesar de ser mais calado.", es: "Me llevo bien con todo el mundo, aunque sea más callado." },
      { it: "Posso roubar-lhe dois minutos no fim da sessão?", es: "¿Puedo robarle dos minutos al final de la sesión?" },
      { it: "Precisamos de alguém que conheça bem o mercado do Porto.", es: "Necesitamos a alguien que conozca bien el mercado de Oporto." },
      { it: "Ponho-te em contacto com a responsável de operações.", es: "Te pongo en contacto con la responsable de operaciones." },
    ],
    usi: [
      { q: "En la conferencia quieres decir «me topé con vuestro informe sin buscarlo». ¿Cuál es la colocación completa?", options: ["Deparei com o vosso relatório sem o procurar.", "Deparei-me com o vosso relatório sem o procurar.", "Dei-me com o vosso relatório sem o procurar."], answer: 1, explain: "El verbo es «deparar-se com»: la partícula -me y la preposición com forman el bloque inseparable; sin pronombre o com outro verbo, la frase queda incompleta o cambia de sentido." },
      { q: "Quieres presentar a un contacto a otra persona por correo. ¿Cuál encaja?", options: ["Vou pôr você em contacto com a nossa responsável.", "Vou pôr-te em contacto com a nossa responsável.", "Vou te pôr em contacto com a nossa responsável."], answer: 1, explain: "En pt-PT el clítico se pospone al infinitivo («pôr-te»); a próclise ante infinitivo y o «você» brasileizante delatan al extranjero." },
    ],
  },

  "pt-cu-b2-07": {
    sezioni: [
      { t: "Como funciona", body: "La narración reparte el trabajo: o imperfeito pinta el decorado y las costumbres («o dono viajava sempre em outubro», «o cão não ladrava»); o perfeito simples marca los hechos puntuales («entrou, levou, desapareceu»); e o mais-que-perfeito composto sitúa el antes del antes («o alarme tinha sido desligado»). El portugués conserva además um mais-que-perfeito simples literário («chegara», «soubera») que solo leerás en novela y prensa antigua: reconócelo, no lo produzcas." },
      { t: "Quando se usa", body: "La especulación sobre o passado tiene tres motores: «deve ter + particípio» («o cão deve ter conhecido quem entrou»), «podia ter + particípio» para hipótesis abiertas («podia ter sido o sobrinho») e o futuro para probabilidad («a polícia terá pensado nisso?»). En el discurso indireto la concordança es clave: «o vizinho disse que tinha ouvido um barulho» — el antes del decir va em mais-que-perfeito." },
      { t: "Atenção! (para hispanohablantes)", body: "1) El español dice «debe DE haber conocido» y el pt dice «deve TER», sin de: «deve de ter» no existe em Portugal. 2) «Roubo» /ˈʁowbu/ (eu, presente) e «roubou» /ʁoˈbow/ (ele, perfeito) solo se distinguen por la sílaba tónica: el acento es información gramatical. 3) Falso amigo «sucesso»: en pt es éxito; el «suceso» español (acontecimiento, a menudo policial) é «acontecimento» ou «incidente». 4) En la habla, o imperfeito hace de condicional composto: «se quisesse, tinha feito isso muito antes» equivale a «teria feito»." },
      { t: "Na conversa real", body: "La mesa de café de Braga especula así: «segundo o podcast, não há sinais de arrombamento» (fuente), «na minha opinião, o sobrinho podia ter feito isso» (teoría), «deve ter havido alguém de dentro» (probabilidad) e «e se a empregada estivesse envolvida?» (hipótesis). Para cerrar sin dogmatismo: «a minha aposta segura é que nunca vamos saber». Distinguir siempre o facto da opinião: eso es narrar como un oyente portugués veterano." },
    ],
    esempi: [
      { it: "O alarme tinha sido desligado antes de os ladrões entrarem.", es: "La alarma había sido desligada antes de que entraran los ladrones." },
      { it: "O vizinho deve ter ouvido um barulho por volta da meia-noite.", es: "El vecino debe de haber oído un ruido alrededor de la medianoche." },
      { it: "Podia ter sido um trabalho de dentro, dizem os ouvintes.", es: "Podría haber sido un trabajo desde dentro, dicen los oyentes." },
      { it: "Se o sobrinho quisesse os relógios, tinha-os vendido anos antes.", es: "Si el sobrino hubiera querido los relojes, los habría vendido años antes." },
      { it: "Segundo o episódio, a polícia nunca chegou a prender ninguém.", es: "Según el episodio, la policía nunca llegó a detener a nadie." },
    ],
    usi: [
      { q: "Especulas: el perro conoció a quien entró. ¿Cuál es la forma pt-PT correcta?", options: ["O cão deve de ter conhecido quem entrou.", "O cão deve ter conhecido quem entrou.", "O cão deve ter de conhecer quem entrou."], answer: 1, explain: "La especulación sobre o pasado é «deve ter + participio», sin la preposición del español «debe de haber»; las outras duas son calcos agramaticais em Portugal." },
      { q: "Quieres narrar que el dueño VIAJABA cada octubre (costumbre, decorado del caso). ¿Qué tiempo pinta o hábito?", options: ["Todos os outonos, o dono viajou a Espanha.", "Todos os outonos, o dono viajava a Espanha.", "Todos os outonos, o dono tinha viajado a Espanha."], answer: 1, explain: "El hábito y el decorado van em imperfeito (viajava); o perfeito (viajou) contaría un viaje único y o mais-que-perfeito lo situaría antes de outro passado." },
    ],
  },

  "pt-cu-b2-08": {
    sezioni: [
      { t: "Como funciona", body: "Os verbos de realização — liderar, assegurar, implementar, coordenar, alcançar, entregar — são a coluna vertebral do currículo falado. Usa o perfeito simple para os resultados fechados («liderei uma equipa de quatro», «implementámos o sistema em três fases») e o perfeito composto para o que segue em curso («tenho coordenado o serviço desde 2023»). Atención ao acento de «nós»: implementÁmos, assegurÁmos, com a tónica no -á-, distinta na pronúncia do presente «implementamos»." },
      { t: "Quando se usa", body: "As valorações com conjuntivo funcionam como no espanhol: «é importante que continues a dar crédito à equipa», «alegra-me que tenhas assumido o projeto» (passado composto do conjuntivo), «é essencial que a equipa sinta que o resultado é dela». A família de disparadores é ampla: é essencial que, é raro que, faz-me confusão que. As valorações de certeza vão com indicativo: «é claro que trabalha bem»." },
      { t: "Atenção! (para hispanohablantes)", body: "1) Não confundas as três formas: «implementámos» (perfeito, acento no -á-), «implementamos» (presente) e «implementemos» (presente do conjuntivo); escrever «implementemos» por «implementámos» é o erro clássico. 2) As valorações de juízo ou emoção pedem conjuntivo, as de certeza indicativo: «é claro que ele trabalha bem» frente a «é bom que ele trabalhe bem». 3) Falso amigo «realização»: em pt é logro («a nossa maior realização»), não execução; e «cargo» é posto («assumi o cargo de coordenador»). 4) «Continuar a + infinitivo» é a construção europeia; o brasileño diria «continuar + gerúndio»." },
      { t: "Na conversa real", body: "A receita da modéstia táctica portuguesa: alterna «eu liderei» com «a equipa conseguiu», usa «coube-me assegurar a comunicação» e «tivemos a sorte de…», e remata sempre com um dado. Quem se autopremia desentona; quem reparte o mérito e traz números convence. E à pergunta final «e se algo correr mal?», a resposta certa começa por «ouvindo» — nunca por «impondo»." },
    ],
    esempi: [
      { it: "Assumi a coordenação em janeiro e liderei a migração até maio.", es: "Me hice cargo de la coordinación en enero y lideré la migración hasta mayo." },
      { it: "Tenho coordenado o serviço de marcações desde 2023.", es: "Llevo coordinando el servicio de citas desde 2023." },
      { it: "É importante que continues a dar crédito à equipa.", es: "Es importante que sigas dando crédito al equipo." },
      { it: "Alegra-me que tenhas assumido o projeto com esta seriedade.", es: "Me alegra que hayas asumido el proyecto con esta seriedad." },
      { it: "É claro que há margem para melhorar; ninguém discorda.", es: "Por supuesto que hay margen de mejora; nadie lo discute." },
    ],
    usi: [
      { q: "Na entrevista queres contar uma tendência que segue em curso: coordinas o serviço desde 2023 e segues. ¿Cuál resalta a trajetória acumulada?", options: ["Coordenei o serviço em 2023.", "Tenho coordenado o serviço desde 2023.", "Coordenava o serviço desde 2023."], answer: 1, explain: "O perfeito composto (tenho coordenado) expressa continuidade acumulada até hoje; o simple (coordenei) fecharia o hito em 2023 e o imperfeito o deixaria como decorado sem avanço." },
      { q: "A diretora celebra que te hayas hecho cargo del proyecto. ¿Cuál é a forma correta?", options: ["Alegra-me que assumiste o projeto.", "Alegra-me que tenhas assumido o projeto.", "Alegra-me que assumes o projeto."], answer: 1, explain: "Tras «alegra-me que», o passado pede o passado composto do conjuntivo (tenhas assumido); o indicativo (assumiste) é o calco do espanhol e o presente do conjuntivo perde a referência ao hecho cumplido." },
    ],
  },

  "pt-cu-b2-09": {
    sezioni: [
      { t: "Como funciona", body: "A conotação escolhe o adjetivo: «caro» soa a acusação e «acessível» a argumento de venda; «pequeno» neutraliza e «acolhedor» enamora; «cheio» incomoda e «animado» seduz; «lento» acusa e «sem pressa» quase elogia. A escala do elogio também importa: «espetacular» é a cume e gasta-se com a decoração; «razoável», em boca portuguesa, é um elogio tibio. E lembra o ser/estar da avaliação: «o espaço é espetacular» (carácter estável) frente a «o polvo estava razoável» (aquela vez, naquele prato)." },
      { t: "Quando se usa", body: "Os advérbios de grau modulam a intensidade: sobem «absolutamente», «francamente», «verdadeiramente» (com adjetivos graduables) e baixam «um pouco», «relativamente», «até certo ponto». A resenha equilibrada tem molde fixo: um ponto forte concreto, um «mas» ou «porém», um ponto fraco com prova e uma recomendação condicional («se não se importar de esperar, o terraço vale a visita»)." },
      { t: "Atenção! (para hispanohablantes)", body: "1) «Razoável» não é o espanhol «razonable» com aprovación neutra: em Portugal é um elogio morno, primo do «não está mal». 2) «Francamente» diante do adjetivo intensifica («francamente acessível»); sozinho, abre a opinião («francamente, não voltarei»), como o espanhol «sinceramente». 3) Falsos amigos da mesa: a «ementa» é a carta do restaurante; e «propina» em Portugal é a taxa universitária — a gorjeta espanhola chama-se «gorjeta». 4) Cada adjetivo quer a sua prova: não escrevas só «péssimo», escreve «esperámos quarenta minutos pela entrada»." },
      { t: "Na conversa real", body: "O debate das estrelas entre amigos soa assim: «o espaço é acolhedor, conta pontos», «o pão cobrado à parte, sem aviso, desconta pontos», «por dezanove euros é francamente acessível», «para mim, continua caro pelo que dá». Fórmulas prontas: «vale cada cêntimo», «não é nada de especial», «o terraço, sim; o polvo, nem por isso». Pesar o pão cobrado e o sorriso da empregada na mesma balança: isso é avaliar bem." },
    ],
    esempi: [
      { it: "O espaço é acolhedor, mas o serviço estava lento no sábado.", es: "El local es acogedor, pero el servicio estuvo lento el sábado." },
      { it: "Por dezanove euros, o menu do dia é francamente acessível.", es: "Por diecinueve euros, el menú del día es francamente accesible." },
      { it: "A vista do terraço é absolutamente espetacular ao pôr do sol.", es: "La vista de la terraza es absolutamente espectacular al atardecer." },
      { it: "A cozinha é razoável; a sobremesa, até certo ponto, dececionante.", es: "La cocina es correcta; el postre, hasta cierto punto, decepcionante." },
      { it: "Se não se importar de esperar, a mesa da janela vale cada cêntimo.", es: "Si no le importa esperar, la mesa de la ventana vale cada céntimo." },
    ],
    usi: [
      { q: "Queres converter «o quarto era pequeno» num elogio. ¿Qué adjetivo gira a conotação?", options: ["O quarto era minúsculo, mas limpo.", "O quarto era acolhedor, apesar de pequeno.", "O quarto era apertado e escuro."], answer: 1, explain: "«Acolhedor» transforma a pequenez em calidez: é a virada conotativa positiva; «minúsculo» e «apertado» mantêm ou agravam a carga negativa." },
      { q: "A avaliação global é boa, mas com um matiz: «a localização é excelente; o preço, algo alto». ¿Cuál modula sin destruir?", options: ["A localização é excelente; o preço, absolutamente alto.", "A localização é excelente; o preço, um pouco alto.", "A localização é excelente; o preço, verdadeiramente alto."], answer: 1, explain: "«Um pouco» é o atenuante que baixa o grau; «absolutamente» e «verdadeiramente» intensificam e converteriam o matiz em acusação." },
    ],
  },

  "pt-cu-b2-10": {
    sezioni: [
      { t: "Como funciona", body: "As expressões idiomáticas portuguesas constroem-se maioritariamente com verbos básicos — ser, estar, ficar, pôr, dar — mais um substantivo com imagem: «ser mão na roda» (uma grande ajuda), «ficar com a pulga atrás da orelha» (desconfiar), «pôr as mãos à obra», «dar uma ajuda». Cada uma é um bloco fixo: aprende-a com a sua cena (quem a usa, com quem, onde). Um par enganoso: «esticar o pé» é ir dormir, mas «esticar as pernas» é passear." },
      { t: "Quando se usa", body: "O calão é a gíria que marca pertença: «bué (de)» (um montão), «ganda» (enorme, muito Porto), «fixe» (guay), «giro» (simpático ou divertido). A geografia manda no café: «bica» em Lisboa, «cimbalino» no Porto, «um café» em toda a parte. O controlo do registo é a destreza B2 real: com desconhecidos e no trabalho, registo neutro («deitei-me cedo»); entre amigos, abre-se a porta do calão («estiquei o pé às dez»)." },
      { t: "Atenção! (para hispanohablantes)", body: "1) «Esticar o pé» significa ir a dormir: não o traduzas pelo espanhol «estirar la pierna», que significa morrer-se — nada que ver com o sono. 2) Traduzir as expressões literalmente do espanhol produz frases que não existem: cada idiomatismo é um bloco inteiro, não uma soma de palavras. 3) Usar o calão fora de contexto (com o professor, com a senhora da pastelaria) delata mais que o sotaque; com dúvida, registo neutro. 4) Para perguntar sem quebrar a conversa: «o que é isso de “mão na roda”?», «isso diz-se assim?», «não conhecia essa!»." },
      { t: "Na conversa real", body: "Na baixa do Porto, a mesa do café produz lições inteiras: «o vosso tradutor é mão na roda», «ontem estiquei o pé às dez porque o corpo pediu cama», «aquele senhor olhou torto para nós na fila», «fica bué fixe». Se arriscares duas expressões bem usadas e perguntares depois «isto soa natural ou denunciei o sotaque?», ganhas a mesa: perguntar bem também soa a nativo." },
    ],
    esempi: [
      { it: "O vosso tradutor é mão na roda nas reuniões.", es: "Vuestro traductor es una gran ayuda en las reuniones." },
      { it: "Fiquei com a pulga atrás da orelha com aquela resposta.", es: "Me quedé con la mosca detrás de la oreja con aquella respuesta." },
      { it: "Estou exausto; hoje estico o pé às dez.", es: "Estoy agotado; hoy me voy a dormir a las diez." },
      { it: "Depois do almoço, fomos esticar as pernas junto ao Douro.", es: "Después de comer, fuimos a estirar las piernas junto al Duero." },
      { it: "Aquele senhor olhou torto para nós na fila do café.", es: "Aquel señor nos miró mal en la cola del café." },
    ],
    usi: [
      { q: "Um amigo conta que o chefe lhe prometeu «falamos amanhã» sem marcar data, e ele desconfia. ¿Qué expressão encaixa?", options: ["O teu chefe esticou o pé.", "Ficaste com a pulga atrás da orelha, não ficaste?", "O teu chefe é mão na roda."], answer: 1, explain: "«Ficar com a pulga atrás da orelha» é desconfiar: a imagem é a da desconfiança; «esticar o pé» é ir dormir e «mão na roda» é uma grande ajuda: nenhuma das outras se aplica." },
      { q: "Estás com amigos na baixa do Porto e queres pedir um espresso soando à cidade. ¿Qué pedes?", options: ["Uma bica, se faz favor.", "Um cimbalino, se faz favor.", "Um café com leite, se faz favor."], answer: 1, explain: "No Porto, o espresso pede-se «um cimbalino»; a «bica» é a palavra de Lisboa — correcta em Portugal, mas não local na cidade invicta." },
    ],
  },

  "pt-cu-b2-11": {
    sezioni: [
      { t: "Como funciona", body: "A passiva com agente — ser + particípio + por — é a voz das atas, notícias e informes: «a sessão foi organizada pela câmara», «os corredores serão estudados pela equipa», «um relatório será enviado à assembleia». Três detalhes: o agente leva «por» contraído (pelo, pela, pelos, pelas); o particípio concorda com o sujeito («as placas foram instaladas»); e a passiva reparte responsabilidades com precisão diplomática: não é o mesmo «a câmara decidiu» que «a decisão foi tomada». A passiva pronominal com «se» («diz-se que», «interpreta-se como») não menciona agente: se precisas de o nomear, ser + particípio + por." },
      { t: "Quando se usa", body: "A causa tem a sua caixa: «devido a + nome» («devido à seca»), «por causa de» (neutro ou negativo) e «graças a» (positivo: «graças à chuva de março, o pasto voltou»). Se a causa é uma frase inteira, sobe o registo com «devido ao facto de + infinitivo» («devido ao facto de a terra ser cercada»). A consequência tem a sua: «como consequência», «por consequência», «levar a», «dar origem a», «resultar em» — «a cerca pode levar ao corte das veredas»." },
      { t: "Atenção! (para hispanohablantes)", body: "1) O agente leva «por», nunca «de» ou «por parte de» nesta estrutura: «organizada pela câmara», não «da câmara». 2) Falso amigo cívico: a «câmara» municipal é o ayuntamiento; a tua câmara fotográfica é outra coisa. «Freguesia» é a parroquia administrativa. 3) Nas condições futuras, o pt usa futuro do conjuntivo: «se as veredas forem cortadas, isso levará ao fim da transumância» — não o presente do indicativo espanhol. 4) «Consequência» pronuncia-se sem o [w] do espanhol «consecuencia»: /kõsɨˈkɐ̃sjɐ/." },
      { t: "Na conversa real", body: "A intervenção de dois minutos numa audiência em Évora soa assim: «Vizinho de Valverde, subscrevo o projeto com uma condição» (identificação), «devido à cerca prevista, as veredas ficariam cortadas; como consequência, a pastorícia desapareceria» (causa e consequência), «peço que os corredores sejam garantidos por escrito» (passiva com pedido) e «fica registado em ata» (fecho institucional). Pedir sem propor é só queixar-se." },
    ],
    esempi: [
      { it: "A sessão foi organizada pela câmara municipal de Évora.", es: "La sesión fue organizada por el ayuntamiento de Évora." },
      { it: "Os corredores de passagem serão estudados pela equipa técnica.", es: "Los corredores de paso serán estudiados por el equipo técnico." },
      { it: "Devido à seca, os pastos desapareceram do montado.", es: "Debido a la sequía, los pastos desaparecieron de la dehesa." },
      { it: "Como consequência, os rebanhos descem à planície no verão.", es: "Como consecuencia, los rebaños bajan a la llanura en verano." },
      { it: "Diz-se que o projeto vai gerar receita para a freguesia.", es: "Se dice que el proyecto va a generar ingresos para la parroquia." },
    ],
    usi: [
      { q: "Num informe formal queres assinalar com precisão quem estudará os corredores (a equipa técnica). ¿Cuál encaixa?", options: ["Os corredores serão estudados pela equipa técnica.", "Os corredores vão-se estudar pela equipa técnica.", "Estuda-se os corredores pela equipa técnica."], answer: 0, explain: "A passiva com agente «ser + particípio + por» nomeia o responsável com diplomacia exata; a construção com «vão-se» é agramatical e «estuda-se» não admite agente expresso." },
      { q: "Queres expressar a consequência da cerca: o corte das veredas. ¿Cuál encadeia bem?", options: ["A cerca deve levar ao corte das veredas.", "A cerca deve resultar ao corte das veredas.", "A cerca deve dar em origem ao corte das veredas."], answer: 0, explain: "«Levar a + nome» é a colocação de consequência (levar ao corte); «resultar em» exigiria «em» e «dar origem a» não leva «em» antes: as outras duas partem a colocação." },
    ],
  },

  "pt-cu-b2-12": {
    sezioni: [
      { t: "Como funciona", body: "O pitch reparte os tempos como um bom guião: a proposta de valor vai em presente simples, um presente eterno («a app segue a rotina e avisa a família em tempo real»); a tração em perfeito simple para os marcos fechados («chegámos a mil e duzentas famílias», «assinámos o acordo com o hospital») e em perfeito composto para a curva que segue («temos crescido quinze por cento ao mês»). O pedido traz finalidade explícita: «procuramos duzentos mil euros para chegar a dez mil famílias em dezoito meses» — montante, prazo e destino do dinheiro." },
      { t: "Quando se usa", body: "Com sujeito explícito, a finalidade usa o infinitivo pessoal: «para chegarmos a dez mil famílias», «antes de investirem, os sócios querem números limpos». O storytelling sustenta os primeiros trinta segundos: uma personagem concreta (a avó Amélia), um conflito (mora sozinha) e um giro que liga ao produto («é a Amélia a mandar um sinal sem saber que manda»). O «é» enfático português sublinha a volta: «é a rotina que avisa»." },
      { t: "Atenção! (para hispanohablantes)", body: "1) O pretérito perfecto composto espanhol («hemos llegado») corresponde ao perfeito simple português («chegámos»); o composto pt («temos chegado») indica repetição ou continuidade até hoje — não os troques. 2) Falso amigo parcial «procurar»: «procuramos duzentos mil euros» é buscamos; o matiz espanhol de «procurar» como intentar conseguir fica em «tentar conseguir». 3) Infinitivo pessoal quando o sujeito é explícito: «para chegarmos», não «para chegar» com nós como sujeito marcado. 4) «Milhão» /miˈʎɐ̃w̃/ leva lh palatal e ditongo nasal; «mil» fecha com l clara: a pausa antes de cada cifra é parte da pronúncia." },
      { t: "Na conversa real", body: "A demo day em Lisboa tem a sua liturgia: «boa tarde; a minha avó Amélia cozinhava para dez pessoas num fogão de lenha» (abertura com gente, não com diapositivas), «vamos aos números» (a inversora pede a tração), «as operadoras vendem botões de pânico; nós vendemos sossego» (o giro), «procuramos duzentos mil euros para chegarmos a dez mil famílias» (o pedido). E o fecho: a sala só recorda o que ouviu duas vezes — repete o pedido." },
    ],
    esempi: [
      { it: "A nossa plataforma segue a rotina e avisa a família em tempo real.", es: "Nuestra plataforma sigue la rutina y avisa a la familia en tiempo real." },
      { it: "Em oito meses, chegámos a mil e duzentas famílias pagantes.", es: "En ocho meses, llegamos a mil doscientas familias pagantes." },
      { it: "Temos crescido quinze por cento ao mês desde janeiro.", es: "Llevamos creciendo un quince por ciento al mes desde enero." },
      { it: "Procuramos duzentos mil euros para chegarmos a dez mil famílias.", es: "Buscamos doscientos mil euros para llegar a diez mil familias." },
      { it: "Assinámos o acordo com o hospital em março, sem interromper o serviço.", es: "Firmamos el acuerdo con el hospital en marzo, sin interrumpir el servicio." },
    ],
    usi: [
      { q: "Apresentas a tração: um marco fechado de 1.200 famílias em oito meses. ¿Qué forma conta o hito?", options: ["Temos chegado a mil e duzentas famílias em oito meses.", "Chegámos a mil e duzentas famílias em oito meses.", "Chegávamos a mil e duzentas famílias em oito meses."], answer: 1, explain: "O hito fechado vai em perfeito simple (chegámos); o composto (temos chegado) marcaria repetição ou continuidade e o imperfeito o deixaria em decorado sem progresso." },
      { q: "O pedido precisa de finalidade com o vosso sujeito explícito: «buscamos capital para que nós cheguemos a dez mil famílias». ¿Cuál usa o infinitivo pessoal?", options: ["Procuramos capital para chegar a dez mil famílias.", "Procuramos capital para chegarmos a dez mil famílias.", "Procuramos capital para cheguem a dez mil famílias."], answer: 1, explain: "Com o sujeito nós marcado, o infinitivo pessoal «chegarmos» flexiona a terminação; a forma simples «chegar» fica neutra e «cheguem» mudaria o sujeito para eles." },
    ],
  },
};
