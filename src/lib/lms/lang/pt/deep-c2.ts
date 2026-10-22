import type { CbGrammarDeep } from "../../extra/grammar-deep";

/* ═══ PT C2 · Grammar deep — 12 unidades ═════════════════════════════
   Nivel C2: dominio — estilo, retórica, ironía fina. Corpo das sezioni
   em espanhol denso com exemplos pt-PT citados; a sección de armadilhas
   leva trampas numeradas 1)–4). Títulos temáticos criativos em português
   (espelho do italiano C2 e do pt C1), 5 esempi + 2 usi por unidade. */

export const PT_DEEP_C2: Record<string, CbGrammarDeep> = {
  "pt-cu-c2-01": {
    sezioni: [
      { t: "A coroa antes do rei", body: "La inversión enfática pone el predicado delante del verbo — «raro é o ensaio que se lê devagar», «maior foi o espanto» — y convierte el adjetivo en corona: lo primero que el oído oye es el juicio, no el sujeto. En el ensayo portugués esta orden no suena a arcaísmo sino a prosa cuidada: Torga y Eduardo Lourenço la usan como quien bebe un café, mientras que en español culto «raro es…» ya huele a archivo. La inversión concentra el foco donde la orden normal lo dispersa: «raro é o ensaio» anuncia la rareza antes de presentar al ensayo. Y la concordancia no se relaja: el adjetivo sigue acordando con el sujeto pospuesto — «raros são os textos que se lêem devagar»." },
      { t: "O corte que diz mais", body: "La elipse es la segunda herramienta del ensayista: se omite el verbo y sobrevive el pensamiento — «o ensaio é uma conversa; a má prosa, um interrogatório», donde el segundo «é» se corta y la coma hace de bisagra. El español dice «ni hablar»; el portugués dice «nem se fala» y corta allí mismo. Las fórmulas elípticas fijas juntan dos cortes: «não que eu discorde — pelo contrário» omite el verbo dos veces y la oposición queda entera. Y los travessões marcan el inciso, la respiración de la frase: en el ensayo valen por un párrafo entero, porque el pensamiento respira dentro de ellos." },
      { t: "Armadilhas para hispanofalantes", body: "1) La inversión pide adjetivo predicativo, no adverbio: «raro é o ensaio», nunca «raramente é o ensaio» — el adverbio no puede ser corona. 2) Con constituyente desplazado, el clítico pasa a próclise: «de tudo isto se ocupa o estilo»; escribir «de tudo isto ocupa-se» es colocar la partícula como en español y perder la atracción del elemento anticipado. 3) La elipse necesita la coma-bisagra: «a má prosa, um interrogatório» sin coma se rompe; tu instinto español querrá añadir «es» — resístele. 4) «Não que eu discorde» lleva conjuntivo congelado («discorde», no «discordo»): es fórmula fija de la tradición ensayística, no una relativa corriente." },
      { t: "No sótão do Chiado", body: "En la oficina del Chiado, Vasco devuelve los párrafos con una sola orden: cortar los adjetivos de adorno — «o que viste, não o que sentiste que devias sentir». Beatriz añade la ley de la tradición: nunca «na minha opinião», porque el texto es tuyo y la opinión ya está dentro. La epígrafe se encuentra, no se fabrica: «raro é o português que escreve como fala; mais raro, o que fala como escreve» nació de una inversión y sobrevivió al tachón. Y la cadência se decide al final: frases cortas cuando el pensamiento está claro; largas, cuando todavía busca la salida." },
    ],
    esempi: [
      { it: "Raro é o leitor que agradece o adjetivo de que não precisava.", es: "Raro es el lector que agradece el adjetivo que no necesitaba." },
      { it: "De tudo isto se ocupa a cadência — e do resto, nem se fala.", es: "De todo esto se ocupa la cadencia — y de lo demás, ni hablar." },
      { it: "Não que eu discorde; pelo contrário: concordo demais para ser modesto.", es: "No es que yo discrepe; al contrario: concuerdo demasiado para ser modesto." },
      { it: "O ensaio não se desculpa: afirma-se — ou cala-se.", es: "El ensayo no se disculpa: se afirma — o calla." },
      { it: "Maior foi o espanto quando a frase curta entrou na página sem pedir licença.", es: "Mayor fue el asombro cuando la frase corta entró en la página sin pedir licencia." },
    ],
    usi: [
      { q: "Quieres abrir un ensayo con inversión enfática. ¿Cuál es la forma correcta?", options: ["Raro é o género que confessa tanta gente.", "Raramente é o género que confessa tanta gente.", "Raridade é o género que confessa tanta gente."], answer: 0, explain: "La inversión exige adjetivo predicativo («raro é o género»); «raramente» es adverbio y no puede coronar la frase, y «raridade» es sustantivo que exigiría otra construcción." },
      { q: "«De tudo isto ___ o estilo — e do resto, nem se fala.» ¿Qué posición acompaña al constituyente desplazado?", options: ["ocupa-se", "se ocupa", "ocupara"], answer: 1, explain: "Con un constituyente delante («de tudo isto»), el pt-PT prefiere próclise: «se ocupa»; la ênclise «ocupa-se» ignoraría la atracción del elemento anticipado." },
    ],
  },

  "pt-cu-c2-02": {
    sezioni: [
      { t: "O raio-X da frase", body: "La clivagem parte la frase en dos moldes y saca una radiografía: «é a vogal que se perde» separa el foco («a vogal») del resto («que se perde»). El pt-PT hace de esto instrumento diario: «foi no fado que a frase aprendeu a respirar», «quem manda no ritmo é a entoação». El español tiene paralelos — «fue en el fado donde…», «quien manda es…» — pero usa menos la estructura con lugar: en portugués «foi em Lisboa que nasceu» es la forma normal, no una excepción literaria. La regla invariable del cleft portugués: el conectivo es siempre «que», también para lugar y tiempo." },
      { t: "A clivagem que se canta", body: "La clivagem también es prosodia: el acento entero de la frase cae sobre el elemento clivado y las demás palabras quedan al abandono. Por eso sirve al narrador de documentário y al fadista: concentra el fôlego en una sola palabra. El foco doble es la figura del off: «não é o que dizes; é como o dizes que convence» — la negación cliva primero para clivar mejor después. Y «quem» tiene su propio molde: «quem manda no ritmo é a entoação» — pregunta por el sujeto y lo corona en la respuesta, con el verbo siempre en singular." },
      { t: "Armadilhas para hispanofalantes", body: "1) Jamás «onde» dentro de la clivagem: «foi em Alfama que a voz aprendeu a demorar»; el «donde» español no se calca en esta estructura. 2) «Quem» es singular y manda en la concordancia: «quem manda é a entoação», nunca «quem mandam são». 3) No mezcles tiempos sin motivo: presente clivado («é a vogal que se perde») y pasado clivado («foi no fado que…») sostienen cada uno su escena; saltar de «foi» a un presente descoloca la radiografía. 4) El foco doble va en orden fijo: primero la negación («não é o que dizes»), después el foco nuevo («é como o dizes que convence»)." },
      { t: "Na cabina do Tejo", body: "En el estúdio de Lisboa, Madalena escucha al milímetro: la frase «entre o Tejo e o mar» tiene que descender, no cantar. El entrenamiento es físico: las átonas se comen («d'ta-se»), las nasales se estiran («manhã» ocupa la boca entera) y Amália sirve de metro — cuando canta «saudade», la vocal nasal dura el doble que en la palabra dicha. Rui, o realizador, pone la prueba final: quien cierre los ojos tiene que reconocer la cadência. Y la clivagem es parte del oficio: «é na pausa que o off ganha o mar» — el locutor lo sabe, o microfone lo registra." },
    ],
    esempi: [
      { it: "É a átona que se perde, não a palavra inteira.", es: "Es la átona la que se pierde, no la palabra entera." },
      { it: "Foi em Alfama que a voz aprendeu a demorar.", es: "Fue en Alfama donde la voz aprendió a demorarse." },
      { it: "Quem manda na cadência é a entoação.", es: "Quien manda en la cadencia es la entonación." },
      { it: "Não é o que dizes; é como o dizes que convence.", es: "No es lo que dices; es cómo lo dices lo que convence." },
      { it: "É na pausa que o off ganha o mar.", es: "Es en la pausa donde el off gana el mar." },
    ],
    usi: [
      { q: "«Foi no fado ___ a frase aprendeu a respirar.» ¿Qué conectivo completa la clivagem?", options: ["onde", "que", "quem"], answer: 1, explain: "En la clivagem el pt-PT usa siempre «que», también con lugar: «foi no fado que…»; «onde» sería relativa común sin relieve y «quem» solo cliva personas." },
      { q: "«Quem ___ no ritmo é a entoação.» ¿Qué forma verbal es la correcta?", options: ["mandam", "manda", "mandas"], answer: 1, explain: "«Quem» es singular y exige tercera persona: «quem manda… é»; «mandam» rompería la concordancia y «mandas» no encaja con el sujeto interrogativo." },
    ],
  },

  "pt-cu-c2-03": {
    sezioni: [
      { t: "O tempo das sobrancelhas erguidas", body: "El condicional de conjetura es el tiempo de la hipótesis elegante: «dir-se-ia que a sala respirava com ele» afirma sin comprometerse — el equivalente verbal de levantar las cejas. En la prosa cuidada y la conversa literaria vive sin ironía o exactamente con ella: «seria riso, seria medo — ninguém sabia». El español conserva el «diríase», pero ya huele a archivo; en Portugal la mesóclise «dir-se-ia» sigue de servicio. Y la anáfora del condicional reparte la duda en dos pesos iguales: el segundo «seria» hereda al primero y la frase queda en equilibrio." },
      { t: "As fórmulas congeladas", body: "El subjuntivo congelado funciona como fórmula fósil: «que eu saiba», «que me conste» — el presente de subjuntivo abrió la puerta en 1600 y la dejó abierta. Los mitigadores miden la distancia entre lo que se dice y lo que se quiere decir: «por assim dizer», «digamos», «se calhar» (más coloquial). En el humor esa distancia es el propio punchline: quien dice «por assim dizer» está diciendo otra cosa — y la sala lo oye dos veces. La conjetura y el mitigador juntos fabrican la ironía fina: «a ideia é, por assim dizer, revolucionária» elogia con una mano y retira con la otra." },
      { t: "Armadilhas para hispanofalantes", body: "1) «Dir-se-ia» es condicional con mesóclise; «dir-se-á» sería futuro y «diga-se» imperativo o subjuntivo: solo la primera conjetura. 2) «Que eu saiba» está congelado: nunca «que eu sabia» ni «que eu saberia» — la fórmula no acepta otros tiempos. 3) La anáfora del condicional no se rompe: «seria riso, seria medo», no «seria riso, era medo» — el segundo hereda el tiempo del primero. 4) «Por assim dizer» tiene orden fijo; «assim por dizer» no existe, y confundirlo delata al extranjero de oído prestado." },
      { t: "No camarim do Capitólio", body: "Zé Pedro desmonta el número pieza a pieza: el problema no es la piada, es el timing. Contar el remate y quedarse esperando la risa «com cara de quem pede esmola» es de amateur; el comediante confirma y pasa a la siguiente. La salida del silêncio educado tiene dos puertas: la ironía contra ti mismo o la pausa — y nunca, jamás, explicar la piada: «explicar é assinar a sentença». El humor portugués es de ironía fina: la gargalhada llega después, en la calle, cuando el sujeto entiende — de ahí la fama de calado. Um riso que pensa: por eso o humor negro trata a la muerte como uma tía que aparece el domingo." },
    ],
    esempi: [
      { it: "Dir-se-ia que a sala respirava com ele.", es: "Diríase que la sala respiraba con él." },
      { it: "Que eu saiba, nunca se explicou uma piada a esta altura.", es: "Que yo sepa, nunca se explicó un chiste a estas alturas." },
      { it: "Seria riso, seria medo — ninguém sabia ao certo.", es: "Sería risa, sería miedo — nadie lo sabía a ciencia cierta." },
      { it: "A ideia é, por assim dizer, revolucionária.", es: "La idea es, por así decirlo, revolucionaria." },
      { it: "Digamos que a piada caiu; mudemos o chão e sigamos.", es: "Digamos que el chiste cayó; cambiemos el suelo y sigamos." },
    ],
    usi: [
      { q: "«___ que a sala respirava com ele.» ¿Qué forma expresa la conjetura elegante?", options: ["Dir-se-á", "Dir-se-ia", "Diga-se"], answer: 1, explain: "El condicional de conjetura con mesóclise es «dir-se-ia»; «dir-se-á» sería futuro sin valor conjetural y «diga-se» es subjuntivo o imperativo." },
      { q: "Quieres introducir un matiz irónico de distancia. ¿Cuál encaja?", options: ["A ideia é, por assim dizer, revolucionária.", "A ideia é, assim por dizer, revolucionária.", "A ideia é, por isso dizer, revolucionária."], answer: 0, explain: "«Por assim dizer» es el mitigador fijo del pt-PT; los otros dos órdenes no existen y suenan a calco del español." },
    ],
  },

  "pt-cu-c2-04": {
    sezioni: [
      { t: "A terceira pessoa com a primeira por dentro", body: "En el discurso indireto libre el narrador le presta la boca a la personagem: la persona es tercera («ela olhou o mar»), pero el tiempo se desliza hacia dentro de ella («porque não dizia nada? seria medo, seria tédio?»). La pregunta ya no es del narrador: es de la personagem pensando — y el lector le entra en la cabeza sin aviso. Las puertas gramaticales son el imperfeito y el condicional: «dizia», «importava», «seria», «mandara». El español lo tiene — «¿por qué no decía nada? ¿sería miedo?» — pero el escritor principiante lo estropea poniendo presente donde la personagem piensa en su pasado." },
      { t: "A porta sem fechadura", body: "Saramago empuja la puntuación más lejos: la vírgula abre la puerta del diálogo sin travessão, y la maiúscula después de la coma es alguien entrando de rompante — «a pontuação é cenografia». Lobo Antunes prefiere la frase que no acaba: cambia de tema a mitad, como as conversas numa mesa de jantar de família, y el lector respira quando pode. Y el narrador não fiável juega con las dos puertas: afirma con seguridad lo que debería dudar y calla lo que le conviene — Duarte, advogado de formação, desconfia de todos ellos por oficio." },
      { t: "Armadilhas para hispanofalantes", body: "1) En el indireto libre la pregunta de la personagem va en imperfeito: «porque não dizia nada?», nunca en presente — el tiempo es el pasado de ella. 2) «Mandara» es mais-que-perfeito simple (= tinha mandado); el español «mandara» es subjuntivo: mismo sonido, outro ofício — no lo traduzcas como subjuntivo. 3) La anáfora del condicional mantiene el tiempo: «seria medo, seria tédio», sin saltar a «era». 4) «Ao fim e ao cabo» es fijo y va con «ao»: no «no fim e ao cabo» ni «a fim e ao cabo»." },
      { t: "No círculo do Chiado", body: "En el clube de leitura, Carlota proíbe citar: «digam-me que frase ficou no ar» — porque la voz del romance se demuestra de memoria, no con fotocopia. El ejercicio de la semana escribe el secreto: tercera persona con la primera por dentro, y que quien lea no sepa quién habla. La receta tiene três ingredientes: uma ação física («ela fechou a janela devagar»), uma pergunta em imperfeito que ninguém formula («porque teria ele dito aquilo?») e um condicional que abra a dúvida («ou era?»). El párrafo queda sin cerrar del todo — como las frases de Lobo Antunes, que salen quando querem." },
    ],
    esempi: [
      { it: "Ela olhou o mar. Porque não dizia nada? Seria medo, seria tédio.", es: "Ella miró el mar. ¿Por qué no decía nada? ¿Sería miedo, sería tedio?" },
      { it: "Ao fim e ao cabo, quem lhe mandara voltar? Ninguém o dissera.", es: "Al fin y al cabo, ¿quién le había mandado volver? Nadie lo había dicho." },
      { it: "Chegou tarde, como sempre. Que importava agora a hora?", es: "Llegó tarde, como siempre. ¿Qué importaba ahora la hora?" },
      { it: "O narrador calou-se; a personagem pensou por conta dela.", es: "El narrador calló; el personaje pensó por su cuenta." },
      { it: "Dir-se-ia que a frase não acabava — e não acabava, com efeito.", es: "Diríase que la frase no acababa — y no acababa, en efecto." },
    ],
    usi: [
      { q: "«Ela olhou o mar. Porque não ___ nada?» (discurso indireto livre) ¿Qué tiempo desliza hacia dentro de la personagem?", options: ["dizia", "diz", "dirá"], answer: 0, explain: "El indireto libre pide imperfeito («dizia»): la pregunta es de la personagem y vive en su pasado; el presente «diz» y el futuro «dirá» rompen la puerta." },
      { q: "«Ao fim e ao cabo, quem lhe ___ voltar?» ¿Cuál es el mais-que-perfeito simple?", options: ["mandou", "mandara", "mandasse"], answer: 1, explain: "«Mandara» = tinha mandado, la forma simple que la narrativa y el indireto libre usan; «mandou» es perfeito y «mandasse» subjuntivo sin detonante." },
    ],
  },

  "pt-cu-c2-05": {
    sezioni: [
      { t: "A gramática de ninguém", body: "El comunicado habla en impessoal para que nadie sea nadie: «recomenda-se que a declaração seja publicada» arrastra el subjuntivo, y a passiva sem agente reparte la responsabilidad por uma assembleia fantasma — «quem recomenda? Todos. Quem cumpre? Veremos». El orden verbo-sujeto es marca de estilo oficial: «avultam dificuldades, reconhece-se» — el verbo delante hace solemne lo que sería banal. Y el «nós» institucional nunca tiene nombre propio: «notou-se com satisfação» firma el elogio sin firmante, y el documento queda a salvo del autor." },
      { t: "A litotes do futuro", body: "«Não deixará de se equacionar» es la obra maestra del género: negar la negación para prometer sin prometer — en el fondo, «talvez sim, talvez nunca». El condicional institucional es el tiempo de la prudencia: «estaria em causa o calendário, não o princípio» nunca ocurre, apenas se admite. Y el léxico de toga tiene sus altares — «salvo melhor juízo», «sem prejuízo de», «em sede própria» — fórmulas que el español comparte casi milimétricamente: son las dos lenguas hablando de toga. La diferencia mora en el ritmo: al pt-PT le gusta alargar la frase oficial com incisos, como quien assina devagar." },
      { t: "Armadilhas para hispanofalantes", body: "1) «Recomenda-se que» rige subjuntivo: «seja publicada», nunca «será» ni «foi» — la recomendación vive en lo posible, no en lo cronológico. 2) La litotes del futuro mantiene el futuro: «não deixará de»; en presente («não deixa de») el matiz cambia a constatación. 3) «Avultam dificuldades» exige la inversión verbo-sujeto y la concordancia plural: «avulta dificuldades» es error de repartição. 4) En una declaración final, «penso que» es una confesión: escribe «reconhece-se» y el documento queda a salvo del autor." },
      { t: "Na antessala do plenário", body: "La embaixadora Costa revisa la declaración línea a línea, con dos horas para o plenário: cada fórmula se pesa como en una farmacia. El Sr. Kalunga colecciona eufemismos como quien colecciona selos — su favorito es «avultam dificuldades»: «uma palavra que trabalha sozinha e não recebe ordenado». El fecho es litúrgico: «os trabalhos prosseguirão em ambiente de compreensão mútua» — se levantan todos, nadie desistió de nada y nadie prometió nada. Y la traducción al português claro corre por cuenta de la redactora: diplomacia é dizer devagar aquilo que ninguém quer ouvir depressa." },
    ],
    esempi: [
      { it: "Recomenda-se que a declaração seja publicada sem adendas.", es: "Se recomienda que la declaración sea publicada sin anexos." },
      { it: "Não deixará de se equacionar, em sede própria, o financiamento.", es: "No dejará de plantearse, en la sede correspondiente, la financiación." },
      { it: "Avultam dificuldades, reconhece-se; superá-las compete a todos.", es: "Abundan las dificultades, se reconoce; superarlas compete a todos." },
      { it: "Salvo melhor juízo, estaria em causa o calendário, não o princípio.", es: "Salvo mejor parecer, estaría en juego el calendario, no el principio." },
      { it: "Os trabalhos prosseguirão em ambiente de compreensão mútua.", es: "Los trabajos proseguirán en un ambiente de comprensión mutua." },
    ],
    usi: [
      { q: "«Recomenda-se que a declaração ___ publicada sem adendas.» ¿Qué forma es obligatoria?", options: ["seja", "será", "foi"], answer: 0, explain: "«Recomendar que» rige subjuntivo: «seja»; el futuro «será» y el perfeito «foi» convierten la recomendación en cronología y rompen el impessoal institucional." },
      { q: "Quieres prometer sin prometer en un comunicado. ¿Cuál es la litotes del futuro?", options: ["Não deixará de ser equacionada.", "Vai ser equacionada com toda a certeza.", "Equaciona-se já na próxima semana."], answer: 0, explain: "«Não deixará de» niega la negación y deja la promesa en el aire; las otras dos afirman demasiado para el género del comunicado." },
    ],
  },

  "pt-cu-c2-06": {
    sezioni: [
      { t: "O tempo da câmara", body: "El guião vive en um presente perpétuo: «ela entra e senta-se» — um presente que ocurre siempre que alguien lee la página, a diferencia del presente histórico del romance y de la crónica, que narra el pasado como si fuera ahora. A câmara no conoce outro tiempo: nada «vai acontecer» en la línea de acción, todo acontece. Y la dirección va en el verbo: «segue-a de perto; a câmara não a larga» — el presente carga la dirección del plano y deja al actor el resto, que es casi todo." },
      { t: "O particípio com casa própria", body: "Las orações absolutas tienen participio con sujeto propio: «terminada a cena, ela arruma a louça» — el participio concuerda con «a cena» y la frase se ahorra la conjunção, ganando el aire de quien cuenta um sonho ao minuto. «Acabados os créditos, o silêncio fica em plano geral» — plural masculino, misma mecánica. El español tiene la construcción («terminada la escena…»), pero o pt-PT la extiende a la acción contínua del guião, donde el presente y el participio absoluto se reparten el trabajo: el participio abre, o presente empurra." },
      { t: "Armadilhas para hispanofalantes", body: "1) La concordancia del participio absoluto es sagrada: «terminada a cena» (femenina), «acabados os créditos» (masculino plural). 2) El gerundio no sustituye al participio absoluto: «terminando a cena» cambia el sentido a causa o simultaneidad y no abre el plano. 3) En la línea de acción, nada de futuro ni de interioridades: «ela enrola o fio do telefone no dedo, dez voltas» — lo que no se ve no se escribe. 4) El subtexto va en los verbos, no en los adjetivos: «ela está triste» no se filma; «ela arruma a louça em silêncio», sim." },
      { t: "No set com a Inês", body: "La realizadora Inês devuelve la escena cubierta de apontamentos: los sentimientos no se filman — la tristeza no tiene plano, la acción sim. La reescritura se aprende en tres líneas: cabeçalho («INT. COZINHA — NOITE»), oração absoluta de abertura («terminada a discussão, ela arruma a louça») e corte emocional no fim — a câmara fica com as mãos dela. Francisco, que já leu guiões demais, lo resume: «Francisco entra, olha a mesa, sai — três linhas, uma vida». Y el sonido se dosifica: el sonido cierto es media escena; el errado, el filme entero." },
    ],
    esempi: [
      { it: "Terminada a cena, ela arruma a louça em silêncio.", es: "Terminada la escena, ella recoge la vajilla en silencio." },
      { it: "Acabados os créditos, o silêncio fica em plano geral.", es: "Acabados los créditos, el silencio queda en plano general." },
      { it: "Ele enrola o fio do telefone no dedo; dez voltas, sem falar.", es: "Él enrolla el hilo del teléfono en el dedo; diez vueltas, sin hablar." },
      { it: "Segue-a de perto; a câmara não a larga.", es: "La sigue de cerca; la cámara no la suelta." },
      { it: "Fica com as mãos dela. Não se escreve mais nada.", es: "Se queda con las manos de ella. No se escribe nada más." },
    ],
    usi: [
      { q: "«___ a cena, ela arruma a louça em silêncio.» ¿Qué forma abre a oração absoluta?", options: ["Terminada", "Terminando", "Termina"], answer: 0, explain: "A oração absoluta pide participio con sujeto propio y concordancia femenina: «terminada a cena»; el gerundio cambiaría el matiz y el presente rompería la apertura." },
      { q: "¿Cuál de estas líneas pertenece a la acción de um guião?", options: ["Ela está triste e pensa na mãe.", "Ela enrola o fio no dedo, dez voltas.", "Ela vai sentar-se e vai chorar."], answer: 1, explain: "El guião escribe lo que la cámara ve: acción en presente y subtexto en el verbo; «está triste» no se filma y el futuro «vai sentar-se» no existe en el tiempo de la câmara." },
    ],
  },

  "pt-cu-c2-07": {
    sezioni: [
      { t: "O tempo que compromete", body: "El futuro sintético es el tiempo de la promesa: «Portugal será o que nós fizermos dele» describe un país que no existe y, por eso, nunca desmiente a nadie. Fíjate en la condición: «fizermos» — presente de conjuntivo dentro de la promesa, la firma invisible del contrato. El «há de + infinitivo» añade un deber por dentro: «o país há de acompanhar-nos» promete y ordena a la vez; el español tiene el «habrá de» gemelo, pero o pt-PT lo carga de fado — o «há de» portugués tiene saudade do próprio futuro." },
      { t: "A contabilidade da retórica", body: "La anáfora es la muleta rítmica del comício: «vamos construir, vamos unir, vamos vencer» repite para gravar — y la retórica gusta de contabilidade: cuatro veces «Portugal merece» se cuentan, se archivan y se citan. El pronome «o» hereda el predicado entero: «não o foi quem me ensinou, não o será quem me seguir» — a joia de ourives que las dos lenguas guardan, pero que en portugués brilla más porque o «o» átono se lo come el ritmo. Y as palavras-armadilha se desaman com definição neutra: «mérito» elogia y acusa en la misma respiración; nombrar el dispositivo es el oficio del analista, no el del partidario." },
      { t: "Armadilhas para hispanofalantes", body: "1) «Há de» va sin guion (AO90) y no se escribe «há em»: «o país há de acompanhar-nos». 2) El «o» del «não o será» hereda el predicado: no lo sustituyas por «isso» — «não será isso» pierde el relieve de ourives. 3) Promesa y descripción no se mezclan: el futuro compromete («será»), el presente describe («é»); el analista separa uno del otro antes de opinar. 4) Al analizar un discurso, nombra el recurso (anáfora, palavra-armadilha, «nós» retórico) sin juzgar la ideología: es lingüística de redação, no de bandos." },
      { t: "Na mesa da redação", body: "En la redacción, la noche del debate, Helena rebobina as respostas mientras a transcrição descansa en tu mano. El trabajo se cuenta con lápiz: anáforas («Portugal merece», cuatro veces), palavras-armadilha («mérito», hasta en la respuesta de los residuos urbanos) e futuro de promessa («Portugal será» no describe nada — compromete). El «nós» retórico es uma tenda: cabe um país inteiro e não se vê ninguém. Y en la crisis la lengua hace gimnástica: en 2011, «ajustamento», «esforço partilhado», «uma fase» — foi a palavra que mais anos durou no poder. O analista sereno escucha juros donde outros escucham aplausos." },
    ],
    esempi: [
      { it: "Portugal será o que nós fizermos dele — nada mais, nada menos.", es: "Portugal será lo que nosotros hagamos de él — nada más, nada menos." },
      { it: "Construiremos, uniremos, venceremos; o país há de acompanhar-nos.", es: "Construiremos, uniremos, venceremos; el país habrá de acompañarnos." },
      { it: "Não serei eu a desistir — não o foi quem me ensinou, não o será quem me seguir.", es: "No seré yo quien desista — no lo fue quien me enseñó, no lo será quien me siga." },
      { it: "Quem repete quatro vezes, quer gravar; quem pergunta, quer saber.", es: "Quien repite cuatro veces, quiere grabar; quien pregunta, quiere saber." },
      { it: "Há de erguer-se; que não se diga que faltamos.", es: "Habrá de levantarse; que no se diga que faltamos." },
    ],
    usi: [
      { q: "«Portugal ___ o que nós fizermos dele.» ¿Qué tiempo es el de la promesa?", options: ["será", "seria", "seja"], answer: 0, explain: "El futuro sintético «será» compromete sin describir; el condicional «seria» apagaría la promesa y el conjuntivo «seja» no encaja en la cláusula principal." },
      { q: "«o país ___ acompanhar-nos.» ¿Cuál es la perífrasis de promesa com deber por dentro?", options: ["há de", "há em", "haja"], answer: 0, explain: "«Há de + infinitivo» promete y ordena a la vez; «há em» no existe y «haja» es subjuntivo de haver sin el matiz de fado del futuro." },
    ],
  },

  "pt-cu-c2-08": {
    sezioni: [
      { t: "A troca da guarda", body: "Los clíticos marcan la frontera más visible entre las dos lenguas: el español dice «no lo veo» y el portugués «não o vejo» — próclise tras la negación, como en español. Pero en la afirmativa se cambia la guardia: «lo veo» contra «vejo-o» — o pt-PT é enclítico quando a frase começa pelo verbo: «ficou-se por casa», «deu-mo assim». Y las combinaciones de tercera persona se funden: me + o → mo («traduziu-mo»), te + o → to, lhe + o → lho — el espejo del español «me lo», escrito junto e invertido." },
      { t: "A relíquia mesoclítica", body: "En la escritura formal, el portugués guarda una relíquia que el español perdió: a mesóclise — «vê-lo-ei com calma amanhã», «dir-to-ia com prazer» — o futuro e o condicional abrem a frase ao meio para meter dentro o pronombre. En el contrato y en el conto pulido sobrevive; en el diálogo cae («vou vê-lo com calma»). Y el gerúndio contínuo es marca brasileña y española: en Portugal «está a chover», nunca «está chovendo» — quem os mistura entre a raia seca e Madrid escreve com sotaque. A regra do tradutor: respirar, porque o português pesa as frases onde o espanhol as empurra." },
      { t: "Armadilhas para hispanofalantes", body: "1) La guardia solo se cambia en la afirmativa: negación → «não o vejo»; frase afirmativa que empieza por verbo → «vejo-o». Escribir «me dá» al principio de frase es brasileirismo. 2) «Traduziu-mo» = traduziu + me + o; el orden inverso («traduziu-o-me») no existe. 3) «Está a chover», nunca «está chovendo»: el gerundio progresivo delata la televisión que no es la de Portugal. 4) Falsos amigos de la raia: «esquisito» (raro, sospechoso) contra «exquisito» (delicioso); «propinas» (tasas universitarias) contra propina (soborno); «polvo» (octópode) contra polvo (pó)." },
      { t: "Entre a Rosário e o lápis azul", body: "La editora Rosário lee la traducción en voz alta, línea a línea, y el revisor Mário assinala minúcias com lápis azul — quarenta anos de ofício na mão. El «exquisitísimo» de la autora española desembarcó en Lisboa como «esquisitíssimo» y convirtió un elogio en ofensa: la cena era divina, quedó sospechosa. El ritmo es la otra bandera: donde el español empuja («y sin embargo»), el portugués pesa — «e no entanto» já é só mudar a roupa ao mesmo corpo — y a vírgula portuguesa vive onde o espanhol põe um tranco. Y el traductor bueno es el que el lector nunca nota: um fantasma que assina com a mão do autor." },
    ],
    esempi: [
      { it: "Não o vejo agora; vê-lo-ei com calma amanhã.", es: "No lo veo ahora; lo veré con calma mañana." },
      { it: "Está a chover — e não estou a ver o fim do aguaceiro.", es: "Está lloviendo — y no estoy viendo el final del aguacero." },
      { it: "Fui-me embora cedo; ele ficou-se por casa.", es: "Me fui temprano; él se quedó por casa." },
      { it: "Traduziu-mo assim, sem me dar a escolher.", es: "Me lo tradujo así, sin darme a elegir." },
      { it: "Dir-to-ia com prazer, se o soubesse dizer.", es: "Te lo diría con gusto, si supiera decirlo." },
    ],
    usi: [
      { q: "«Não o vejo agora; ___ com calma amanhã.» ¿Cuál es la mesóclise correcta?", options: ["vê-o-ei", "vê-lo-ei", "ver-ei-lo"], answer: 1, explain: "Futuro + clítico de tercera persona: «vê-lo-ei» — el pronombre se intercala en el futuro; «vê-o-ei» y «ver-ei-lo» no existen en portugués." },
      { q: "«Está ___ chover desde cedo.» ¿Qué preposición rige «estar» contínuo en pt-PT?", options: ["a", "em", "por"], answer: 0, explain: "«Estar a + infinitivo» es la construcción europea; el gerundio «está chovendo» es brasileñismo y la preposición «em» no forma perífrasis progresiva." },
    ],
  },

  "pt-cu-c2-09": {
    sezioni: [
      { t: "Do monumento ao verbo", body: "La prosa inflada paga en palabras lo que no tiene de pensamiento: «a realização de uma análise» es la frase de quien teme al verbo «analisar». La economía consiste en transformar el sustantivo abstracto en verbo — «analisamos» — y dejar que el verbo cargue com o peso: ganha-se meio parágrafo de vida. El español padece el mismo vicio («la realización de un análisis») y la cura es la misma: cortar. El editor Nuno lo mide com lápis de dois bicos: oitenta e tal palavras num parágrafo, dez verbos — o resto é tributo aos substantivos." },
      { t: "Três soam a verdade", body: "El paralelismo hace el resto: tres elementos suenan a verdad, cuatro a inventario — «curta, clara e com um verbo no fim» cierra a tríade como uma porta. A última frase do parágrafo é a que o leitor leva para casa: trabalha-se como se fosse a única linha do livro, cortando-lhe o excesso e deixando-lhe o osso. Y el «-mente» se dosifica: um por página ainda tem graça; três, e é o texto a pedir esmola ao leitor. La elipse final remata: «verdade, brevidade e a coragem de sentar» termina em infinitivo nu, sem complemento que o engorde." },
      { t: "Armadilhas para hispanofalantes", body: "1) «Não porque» negado rige subjuntivo: «não é porque sejamos cultos; é porque cortamos» — la causa negada vive en lo posible. 2) «Passar a limpo» es fijo: preposición «a», no «em limpo» ni «por limpo». 3) «Ficar-se pelo essencial» lleva «por»: contentarse con lo esencial, no «no essencial». 4) La tríade con elipse mantiene el infinitivo desnudo: «a coragem de sentar» — añadirle complemento engorda lo que debía quedar en hueso." },
      { t: "No gabinete do Nuno", body: "Na parede do gabinete há uma primeira edição emoldurada; na mesa, o rascunho coberto de tachões. Nuno enseña a cortar como quien enseña a trinchar: «inflado como um peru de Natal», el párrafo cede quando se lhe tira o recheio. A objeção do aluno é a de todos: Saramago escrevia frases compridas — «o Saramago tinha pulmões; tu, ainda não: primeiro encolhe». O fôlego vem com os anos, como as dores e os filhos. Y la regla final se cuelga de la pared junto a la edición: escrever é cortar; publicar é ter quem nos impeça de cortar demasiado." },
    ],
    esempi: [
      { it: "Procedeu-se à leitura do documento — ou, em bom português: leu-se.", es: "Se procedió a la lectura del documento — o, en buen portugués: se leyó." },
      { it: "Não é porque sejamos cultos; é porque cortamos.", es: "No es porque seamos cultos; es porque cortamos." },
      { it: "O estilo deve ser seco como o vinho do Alentejo: sem doçura, sem ornato.", es: "El estilo debe ser seco como el vino del Alentejo: sin dulzor, sin adorno." },
      { it: "A frase boa é curta, clara e termina em verbo.", es: "La frase buena es corta, clara y termina en verbo." },
      { it: "Cortou o excesso e ficou-se pelo essencial.", es: "Cortó el exceso y se quedó con lo esencial." },
    ],
    usi: [
      { q: "¿Cuál es la versión enxuta de «procedeu-se à leitura do documento»?", options: ["Fez-se uma leitura do documento.", "Leu-se o documento.", "Houve leitura do documento."], answer: 1, explain: "La economía transforma el sustantivo en verbo: «leu-se o documento»; las otras dos mantienen la nominalización que el editor tacha." },
      { q: "«Não é porque ___ cultos; é porque cortamos.» ¿Qué forma exige la causa negada?", options: ["somos", "sejamos", "seremos"], answer: 1, explain: "«Não porque» rige conjuntivo: «sejamos» — la causa negada vive en lo posible; el indicativo «somos» y el futuro la convierten en causa afirmada." },
    ],
  },

  "pt-cu-c2-10": {
    sezioni: [
      { t: "O passado do passado", body: "El pt-PT tiene dos mais-que-perfeitos: el compuesto («tinha falado»), patrón del centro y del sur, y el simple («falara»), que el Norte y las generaciones antiguas guardan — y que la literatura nunca soltó: Camões y los proverbios piensan en «-ra». «Quando eu cheguei, o gado já fora para a bouça»: «fora» es «tinha ido» con quinientos años de servicio prestado. En la narrativa oral de los ancianos, el simple marca el aliento: «o pai dissera-o mil vezes; o filho não o ouvira uma»." },
      { t: "O -ra que virou condicional", body: "El «-ra» tiene um segundo ofício na boca do povo: serve de condicional — «se o soubesse, fora a pé» quer dizer «iria». El español tuvo el mismo impulso («si lo supiera, fuera a pie»), y as duas línguas guardam a ambiguidade como quem guarda um retrato antigo: na fala é vida; no texto, arqueologia viva. Y el acento distingue los tiempos que se escriben parecido: «falara» (mais-que-perfeito, acento na penúltima) contra «falará» (futuro, acento ao fim) — o acento move o tempo sem pedir licença." },
      { t: "Armadilhas para hispanofalantes", body: "1) «Falara» = tinha falado: mismo sonido que el subjuntivo español «hablara», otro oficio — no lo traduzcas como subjuntivo. 2) «Fora» es homógrafo: mais-que-perfeito de ir o estado («estava fora»); solo la gramática del contexto decide. 3) El acento escrito separa «falara» de «falará»: en el archivo oral no se ve, pero al transcribir se respeta. 4) En la entrevista de archivo no se corrige la fala: «soidade», «bida», «bunos dies» transcriben-se como soam — o arquivo quer a voz, não a cerimónia." },
      { t: "Diante da gravadora", body: "En Miranda do Douro, el Senhor Abílio, 87 anos, senta-se diante da gravadora e fala como se fala em casa: «bunos dies, então». A lhéngua — assim lhe chamavam ao mirandês — guarda «bida» e «nuobo» onde o português põe v; os provérbios ficam na lhéngua, o resto vai-se traduzindo. La Dra. Armanda vigia os níveis e lo dice todo: «quando morre um falante, morre uma biblioteca inteira — ninguém a reabre». Por isso se grava: para que «bunos dies» possa ainda ser dito daqui a cem anos." },
    ],
    esempi: [
      { it: "Quando eu cheguei, o gado já fora para a bouça.", es: "Cuando yo llegué, el ganado ya se había ido a la mata." },
      { it: "O pai dissera-o mil vezes; o filho não o ouvira uma.", es: "El padre lo había dicho mil veces; el hijo no lo había oído ni una." },
      { it: "Se o soubesse, fora a pé — jura ele ainda hoje.", es: "Si lo supiera, iría a pie — jura él todavía hoy." },
      { it: "O arquivo gravara tudo; ninguém ouvira ainda nada.", es: "El archivo lo había grabado todo; nadie había oído nada todavía." },
      { it: "Contava-as em português, mas os provérbios ficavam na lhéngua.", es: "Las contaba en portugués, pero los proverbios se quedaban en la lengua." },
    ],
    usi: [
      { q: "«Quando eu cheguei, o gado já ___ para a bouça.» ¿Qué forma es o mais-que-perfeito simple?", options: ["foi", "fora", "era"], answer: 1, explain: "«Fora» = tinha ido: la forma simple del mais-que-perfeito que la narrativa oral guarda; «foi» es perfeito y «era» imperfeito sin anterioridad." },
      { q: "«O pai ___ mil vezes; o filho não o ouvira uma.» ¿Qué forma mantiene el aliento del anciano?", options: ["disse", "dissera", "diria"], answer: 1, explain: "«Dissera» = tinha dito, o mais-que-perfeito simple que equilibra con «ouvira»; «disse» rompe el aliento y «diria» es condicional." },
    ],
  },

  "pt-cu-c2-11": {
    sezioni: [
      { t: "O ouvido que ri", body: "La homofonia es la materia prima del trocadilho: «coser» (costurar) y «cozer» (cozinhar) suenan igual — a grafia escolhe o ofício. «Cumprimento» (saudação) y «comprimento» (medida) comparten el mismo saco sonoro: el oído ríe, o dicionário explica. Y el AO90 añadió pares nuevos: «sessão» y «seção» agora escrevem-se diferente e continuam a soar ao mesmo — nas repartições, isso é piada com vínculo: faz-se sozinha e ninguém a despede." },
      { t: "O sufixo humorista", body: "La derivación jocosa fabrica palabras que el dicionario aún no vio: «-ice» («mimice», «bobice»), «-astro» («poetastro», antiguo y compartido com o espanhol), «-arrão» («velharrão»). Todos entienden lo que significan sin haberlos oído: é a gramática a trabalhar como humorista. Y la ambigüedad estructural demuestra que el riso pode nascer da sintaxe: «o Zé encontrou o cão e a dona dele» — dele quem? A gramática ri-se sozinha, e nós atrás dela. A lei do improviso manda: aceitar e acrescentar, nunca corrigir o parceiro." },
      { t: "Armadilhas para hispanofalantes", body: "1) «Coser» y «cozer» son homófonos: coser com s de costura, cozer com z de cozinha — o som não decide, o ofício sim. 2) «Cumprimento» (de cumprir, saludo) contra «comprimento» (medida): la vocal de la primera sílaba los separa por escrito, nunca por oído. 3) «A bom entendedor, meia palavra basta» va en singular: «meia palavra», no «meias palavras». 4) El sufijo «-astro» existe en las dos lenguas, pero «-ice» y «-arrão» son patrimonio del humor portugués — no los traduzcas, préstalos." },
      { t: "Na garagem da Ribeira", body: "Na garagem transformada em palco, Miguel ensina a primeira lei: aceitar e acrescentar — o parceiro diz «que comprimento!» e tu não corriges: somas («e ainda por cima cumprimento o senhor!»). O público é uma parede com pano preto; a sala ri com as tripas quando o ouvido não distingue o que o olho separa. Y cuando la piada cae, se muda o chão: cair é gratuito; levantar é que é comédia. O adágio da casa fecha tudo: «água mole em pedra dura, tanto dá até que fura» — a piada é água, a sala é pedra, o timing é a gota certa." },
    ],
    esempi: [
      { it: "A costureira cosia; a cozinheira cozia — e ninguém ouvia a diferença.", es: "La costurera cosía; la cocinera cocía — y nadie oía la diferencia." },
      { it: "O comprimento do cumprimento: uma frase, dois ofícios.", es: "La longitud del saludo: una frase, dos oficios." },
      { it: "O poeta de bancada é um poetastro; o avô teimoso, um velharrão.", es: "Al poeta de pacotilla se le dice poetastro; al abuelo testarudo, velharrão." },
      { it: "O Zé encontrou o cão e a dona dele — dele quem? A gramática ri-se sozinha.", es: "El Zé encontró al perro y a la dueña de él — ¿dueña de quién? La gramática se ríe sola." },
      { it: "A bom entendedor, meia palavra; a outra meia é o espetáculo.", es: "A buen entendedor, media palabra; la otra media es el espectáculo." },
    ],
    usi: [
      { q: "«A costureira ___ o vestido; a cozinheira ___ o caldo.» ¿Qué par de homófonos reparte los oficios?", options: ["cozia / cosia", "cosia / cozia", "cosia / cosia"], answer: 1, explain: "«Coser» (com s) é costurar e «cozer» (com z) é cozinhar: la costurera cosia y la cocinera cozia — el oficio elige la grafía." },
      { q: "«O poeta de bancada é um ___.» ¿Qué sufijo peyorativo fabrica el sustantivo?", options: ["poetinho", "poetastro", "poetava"], answer: 1, explain: "«-astro» es el sufijo peyorativo que comparten las dos lenguas: poetastro; «poetinho» sería diminutivo tierno y «poetava» no existe." },
    ],
  },

  "pt-cu-c2-12": {
    sezioni: [
      { t: "Três soam a verdade", body: "A peroração resume e fecha: tríades — «verdade, brevidade e a coragem de sentar» — porque tres elementos suenan a verdad y cuatro a inventario. O «é que» enfático é o realce que aponta: «não agradeço por vencer; é por ter sido lido que agradeço» — a versão portuguesa do «do» enfático espanhol, peça a peça. Y la elipse final corta el verbo en el mejor momento: «foi um longo caminho. E, no entanto, mal começamos» — o paradoxo fecha sem adornos o que a tríade abriu." },
      { t: "O realce que aponta", body: "«Eis» é a palavra que aponta e a porta de saída mais elegante que o pt-PT tem: «eis o discurso completo» — señala sin pedir licencia. A repetição de fecho é o acorde final: «ao trabalho, pois: ao trabalho» — repetir com a partícula é fechar duas vezes a mesma porta. Y el «obrigado» de ceremonia es prosodia pura: alarga-se a última vogal («obrigadôô») como o fado alarga a saudade — o único lugar do discurso onde o alongamento não é vício, é assinatura. Um e comprido: a única nota em que não se poupa o fôlego." },
      { t: "Armadilhas para hispanofalantes", body: "1) El «é que» enfático mantiene el tiempo del verbo principal: «é por ter sido lido que agradeço» — saltar a «foi» sin motivo apaga el realce. 2) La tríade termina en infinitivo desnudo: «a coragem de sentar» — el complemento que el español quiere añadir engorda lo que debía quedar en hueso. 3) «Eis» apunta, no pide licencia: no se apoya en «aqui» ni en «lá» — «eis o discurso» basta. 4) El agradecimiento va a los que leyeron, no a los que aplaudieron: o aplauso vem depois e não se encomenda." },
      { t: "Cinco minutos antes do palco", body: "O papel preparado foi para o lixo por decisão própria: soava a agradecimento de sacristia. A presidente do júri deu a única recomendação institucional: citar alguém — «um discurso de prémio sem citação é um vinho do Porto sem rolha: entorna-se». A citação entra por dentro, como Eduardo Lourenço citava os outros: como lembrança, não como ornamento. Vasco aporta a tríade e a saída: verdade, brevidade e a coragem de sentar — e sentar-se antes de o aplauso estragar. No Prémio Camões, desde 1989, a língua inteira está na sala: é o único prémio que se dá a uma língua, não a um autor." },
    ],
    esempi: [
      { it: "Verdade, brevidade e a coragem de sentar — eis o discurso completo.", es: "Verdad, brevedad y el valor de sentarse: he ahí el discurso completo." },
      { it: "Não agradeço por vencer; é por ter sido lido que agradeço.", es: "No agradezco por ganar; es por haber sido leído lo que agradezco." },
      { it: "Foi um longo caminho. E, no entanto, mal começamos.", es: "Fue un largo camino. Y, sin embargo, apenas empezamos." },
      { it: "Ao trabalho, pois: ao trabalho.", es: "Al trabajo, pues: al trabajo." },
      { it: "Aos que leram, o meu obrigado mais comprido — o que não acaba.", es: "A los que leyeron, mi gracias más largo — el que no acaba." },
    ],
    usi: [
      { q: "«Não agradeço por vencer; ___ por ter sido lido que agradeço.» ¿Qué palabra construye el realce enfático?", options: ["foi", "é", "seja"], answer: 1, explain: "El «é… que» enfático mantiene el presente del verbo principal («agradeço»); «foi» lo desplazaría al pasado sin motivo y «seja» rompería el realce con subjuntivo." },
      { q: "¿Cuál es la repetición de fecho que cierra la peroração com acorde?", options: ["Ao trabalho, pois: ao trabalho.", "Ao trabalho e também ao descanso.", "Trabalho, trabalho e trabalho."], answer: 0, explain: "La repetición con la partícula («pois») cierra dos veces la misma puerta: «ao trabalho, pois: ao trabalho»; las otras dos enumeran sin el acorde final." },
    ],
  },
};
