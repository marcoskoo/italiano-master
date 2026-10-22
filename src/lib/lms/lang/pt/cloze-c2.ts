import type { CbClozeText } from "../../cambridge";

/* ═══ PT C2 · Cloze readings — 3 por unidad (inferencia léxica) ══════
   Metodología v9.12: el texto em português europeu C2 leva marcadores
   {1} {2}… que o reprodutor converte em buracos; o estudante deduz a
   palavra pelo contexto. Campos: `.it` = português de Portugal (estilo
   literário e ensaístico), `.es` = español. Os buracos resolvem-se por
   INFERÊNCIA LÉXICA CONTEXTUAL, con distractores do mesmo campo
   semântico, ligados aos 12 escenarios do curso C2. */

export const PT_CLOZE_C2: Record<string, CbClozeText[]> = {
  "pt-cu-c2-01": [
    {
      id: "cz-pt-c2-01-1", title: "O último dia da oficina", titleEs: "El último día del taller", minutes: 3,
      paragraphs: [
        { it: "No último dia da oficina de escrita criativa, o formador Vasco devolveu os três parágrafos com um elogio de duas palavras: «está bom». E acrescentou, logo a seguir, a parte que importava: «só não está teu». A ordem foi clara: corta os adjetivos de {1} e fica-te com o essencial — o que viste, não o que sentiste que devias sentir. Quem quer escrever com voz própria tem de aprender a ler como editor, não como autor apaixonado.", es: "En el último día del taller de escritura creativa, el formador Vasco devolvió los tres párrafos con un elogio de dos palabras: «está bien». Y añadió, justo después, la parte que importaba: «solo que no es tuyo». La orden fue clara: corta los adjetivos de adorno y quédate con lo esencial — lo que viste, no lo que sentiste que debías sentir. Quien quiere escribir con voz propia tiene que aprender a leer como editor, y no como autor enamorado." },
        { it: "A colega Beatriz, ensaísta de mão cheia, leu o título por cima do ombro e sorriu: «Sobre a saudade» parece-lhe despachado, e é por isso que funciona — o ensaio português desconfia de títulos bonitos. A {2}, diz ela, aprende-se com Torga: os Diários não têm subtítulos, têm {3}. E nunca, mas nunca, se escreve «na minha {4}»: o texto é teu — a opinião já lá está. No fim da sessão, quando a frase com inversão saiu da pena da aluna espanhola, Vasco bateu na mesa: acabava de encontrar a sua {5}.", es: "La colega Beatriz, ensayista de mano llena, leyó el título por encima del hombro y sonrió: «Sobre la saudade» le parece apresurado, y por eso funciona — el ensayo portugués desconfía de los títulos bonitos. La lección, dice ella, se aprende con Torga: los Diários no llevan subtítulos, llevan fechas. Y nunca, jamás, se escribe «en mi opinión»: el texto es tuyo — la opinión ya está ahí. Al final de la sesión, cuando la frase con inversión salió de la pluma de la alumna española, Vasco golpeó la mesa: acababa de encontrar su epígrafe." },
      ],
      gaps: [
        { options: ["enfeite", "encontro", "enfado"], answer: 0, why: "«Corta os adjetivos de» + «fica-te com o essencial»: el adorno (enfeite) es lo que sobra." },
        { options: ["lição", "loja", "lenda"], answer: 0, why: "«A ___ aprende-se com Torga»: los Diários son la lección de sobriedad de la tradición." },
        { options: ["datas", "danças", "dúvidas"], answer: 0, why: "«Não têm subtítulos, têm ___»: las entradas del diario llevan fecha." },
        { options: ["opinião", "ocasião", "oração"], answer: 0, why: "«Nunca se escreve 'na minha ___'»: la regla de Beatriz prohíbe anunciar la opinión." },
        { options: ["epígrafe", "entrevista", "entrada"], answer: 0, why: "La frase con inversión que abre un ensayo es la cita inicial: la epígrafe." },
      ],
    },
    {
      id: "cz-pt-c2-01-2", title: "A lição dos Diários", titleEs: "La lección de los Diários", minutes: 3,
      paragraphs: [
        { it: "Miguel Torga deixou meio século de Diários, entre 1941 e 1993: entradas com data, secas, sem subtítulos — a {1} como ofício diário. Em Portugal, escreveu ensaio quem quis confessar-se sem inventar {2}: Vergílio Ferreira alternava romance e reflexão, e para ele pensar e contar eram formas da mesma pergunta. Fernando Pessoa deixou prosa fragmentária de aforismos: o Livro do Desassossego é um ensaio disfarçado de diário.", es: "Miguel Torga dejó medio siglo de Diários, entre 1941 y 1993: entradas con fecha, secas, sin subtítulos — la confesión como oficio diario. En Portugal, escribió ensayo quien quiso confesarse sin inventar personajes: Vergílio Ferreira alternaba novela y reflexión, y para él pensar y contar eran formas de la misma pregunta. Fernando Pessoa dejó prosa fragmentaria de aforismos: el Libro del Desasosiego es un ensayo disfrazado de diario." },
        { it: "Eduardo Lourenço, de Coimbra, fez do labirinto um método: em O Labirinto da Saudade descreveu a identidade portuguesa como um labirinto feito de saudade de si mesma. Perder-se era o começo de {3}. A tradição inteira desconfia de títulos ornamentais e de adjetivos: prefere a data, a nota de {4} e a frase curta. O lema não escrito da escola cabe numa linha: dizer muito com {5} mínima.", es: "Eduardo Lourenço, de Coímbra, hizo del laberinto un método: en O Labirinto da Saudade describió la identidad portuguesa como un laberinto hecho de saudade de sí misma. Perderse era el comienzo de encontrarse. La tradición entera desconfía de los títulos ornamentales y de los adjetivos: prefiere la fecha, la nota al pie y la frase corta. El lema no escrito de la escuela cabe en una línea: decir mucho con tinta mínima." },
      ],
      gaps: [
        { options: ["confissão", "conversa", "comissão"], answer: 0, why: "«Entradas com data, secas» + «confessar-se sem inventar personagens»: la confesión como oficio." },
        { options: ["personagens", "paisagens", "passagens"], answer: 0, why: "«Confessar-se sem inventar ___»: sin personajes es ensayo; con ellos, novela." },
        { options: ["encontrar", "ensinar", "entrar"], answer: 0, why: "«Perder-se era o começo de ___»: perderse era el comienzo de encontrarse, el método de Lourenço." },
        { options: ["rodapé", "roupa", "ramo"], answer: 0, why: "«A data, a nota de ___ e a frase curta»: la nota al pie, mínimo del ensayista." },
        { options: ["tinta", "pressa", "pauta"], answer: 0, why: "«Dizer muito com ___ mínima»: economía de tinta, el lema de la tradición." },
      ],
    },
    {
      id: "cz-pt-c2-01-3", title: "A frase que ficou", titleEs: "La frase que quedó", minutes: 2,
      paragraphs: [
        { it: "Custa cortar: cada frase que se risca parece melhor que a que fica. O remédio da oficina foi ler como {1}, não como autor apaixonado — e a frase certa apareceu por acidente, numa inversão: «raro é o português que escreve como fala; mais {2}, o que fala como escreve». Vasco ouviu-a, bateu com a mão aberta na mesa e declarou que a aluna acabava de escrever a abertura perfeita para um ensaio.", es: "Cuesta cortar: cada frase que se tacha parece mejor que la que queda. El remedio del taller fue leer como editor, no como autor enamorado — y la frase correcta apareció por accidente, en una inversión: «raro es el portugués que escribe como habla; más raro, el que habla como escribe». Vasco la oyó, golpeó la mesa con la mano abierta y declaró que la alumna acababa de escribir la apertura perfecta para un ensayo." },
        { it: "A inversão enfática pôs o predicado à frente: a coroa antes do rei. O resto é {3}: frases curtas quando o pensamento é claro; longas, quando o pensamento ainda procura a própria saída. E o labirinto do Lourenço entrou no texto com uma condição: tem de ter {4} — labirinto sem saída é enganador, e o leitor não gosta de sair mais {5} do que entrou.", es: "La inversión enfática puso el predicado delante: la corona antes que el rey. Lo demás es cadencia: frases cortas cuando el pensamiento es claro; largas, cuando el pensamiento todavía busca su propia salida. Y el laberinto de Lourenço entró en el texto con una condición: tiene que tener salida — laberinto sin salida es engañoso, y al lector no le gusta salir más confundido que cuando entró." },
      ],
      gaps: [
        { options: ["editor", "ator", "advogado"], answer: 0, why: "«Não como autor apaixonado»: quien corta sin piedad es el editor." },
        { options: ["raro", "rico", "roubo"], answer: 0, why: "«Raro é… mais ___, o que…»: la anáfora repite el adjetivo de la inversión." },
        { options: ["cadência", "caderneta", "carência"], answer: 0, why: "«Frases curtas quando o pensamento é claro»: el ritmo de la prosa, la cadencia." },
        { options: ["saída", "salada", "saudade"], answer: 0, why: "«Labirinto sem ___ é enganador»: el laberinto necesita salida." },
        { options: ["confuso", "concreto", "confesso"], answer: 0, why: "«Sair mais ___ do que entrou»: más confundido que al entrar." },
      ],
    },
  ],

  "pt-cu-c2-02": [
    {
      id: "cz-pt-c2-02-1", title: "O ensaio no estúdio", titleEs: "El ensayo en el estudio", minutes: 3,
      paragraphs: [
        { it: "A preparadora de voz Madalena ouve tudo ao milímetro no estúdio de Lisboa. A primeira frase do off — «entre o Tejo e o mar, a cidade deita-se sobre as colinas» — não chegou ao fim: parra, disse ela, o teu «ei» de «deita-se» soou espanhol. Em português europeu, essa {1} quase some: «d'ta-se». O PE não gasta vogais em sílaba {2}.", es: "La preparadora de voz Madalena lo escucha todo al milímetro en el estudio de Lisboa. La primera frase del off — «entre el Tajo y el mar, la ciudad se tumba sobre las colinas» — no llegó al final: alto, dijo ella, tu «ei» de «deita-se» sonó a español. En portugués europeo, esa vocal casi desaparece: «d'ta-se». El portugués de Portugal no gasta vocales en sílaba átona." },
        { it: "O segredo do ritmo resume-se em três verbos que Madalena recitou como quem diz um poema: comer, mastigar e {3} — por essa ordem. As vogais nasais treinam-se ao {4}: «manhã» deve ocupar a boca inteira, e «saudade» tem fôlego de fado. O realizador Rui pôs a meta do dia: quem fechar os olhos {5} a cadência. Quando soar inevitável, grava-se.", es: "El secreto del ritmo se resume en tres verbos que Madalena recitó como quien dice un poema: comer, masticar y tragar — en ese orden. Las vocales nasales se entrenan frente al espejo: «manhã» debe ocupar la boca entera, y «saudade» tiene aliento de fado. El director Rui puso la meta del día: quien cierre los ojos reconoce la cadencia. Cuando suene inevitable, se graba." },
      ],
      gaps: [
        { options: ["vogal", "vela", "valsa"], answer: 0, why: "«O teu 'ei'… essa ___ quase some»: la vocal que desaparece." },
        { options: ["átona", "aberta", "alta"], answer: 0, why: "«Não gasta vogais em sílaba ___»: la sílaba sin acento." },
        { options: ["engolir", "estender", "ensaiar"], answer: 0, why: "«Comer, mastigar e ___»: tragar es el tercero de la receta." },
        { options: ["espelho", "espeto", "escudo"], answer: 0, why: "«Treinam-se ao ___»: el ejercicio de la unidad se hace frente al espejo." },
        { options: ["reconhece", "repete", "repara"], answer: 0, why: "«Quem fechar os olhos ___ a cadência»: la reconoce sin ver, meta de Rui." },
      ],
    },
    {
      id: "cz-pt-c2-02-2", title: "A lição de Amália", titleEs: "La lección de Amália", minutes: 3,
      paragraphs: [
        { it: "Escuta a Amália, disse Madalena: quando ela canta «saudade», a vogal nasal dura o dobro de qualquer palavra dita. O fado é fala com {1} de sobra — e a guitarra portuguesa, de doze cordas, pergunta; a voz responde com {2}, porque o atraso é o estilo. Amália Rodrigues (1920–1999) foi a voz que esticou as vogais como ninguém; Carlos do Carmo modernizou o fado sem o despir; Mariza, criada em Alfama, levou-o ao mundo.", es: "Escucha a Amália, dijo Madalena: cuando ella canta «saudade», la vocal nasal dura el doble que cualquier palabra dicha. El fado es habla con aliento de sobra — y la guitarra portuguesa, de doce cuerdas, pregunta; la voz responde con retraso, porque el retraso es el estilo. Amália Rodrigues (1920–1999) fue la voz que estiró las vocales como nadie; Carlos do Carmo modernizó el fado sin desvestirlo; Mariza, criada en Alfama, lo llevó al mundo." },
        { it: "O fado foi inscrito em 2011 na lista do Património Cultural Imaterial da UNESCO. E há o fado vadio: sessões de amadores, sem marca, em {3} do Bairro Alto e de Alfama — a fala que se torna canto sem pedir {4}. Por isso se diz que o fado não se traduz: traduz-se é a {5} — e mal.", es: "El fado fue inscrito en 2011 en la lista del Patrimonio Cultural Inmaterial de la UNESCO. Y está el fado vadio: sesiones de aficionados, sin cartel, en tabernas del Bairro Alto y de Alfama — el habla que se convierte en canto sin pedir licencia. Por eso se dice que el fado no se traduce: lo que se traduce es la saudade — y mal." },
      ],
      gaps: [
        { options: ["fôlego", "fogos", "folga"], answer: 0, why: "«O fado é fala com ___ de sobra»: aliento, respiración de sobra." },
        { options: ["atraso", "afeto", "aplauso"], answer: 0, why: "«A voz responde com ___, porque o atraso é o estilo»: responde con retraso." },
        { options: ["tavernas", "tendas", "terras"], answer: 0, why: "«Fado vadio em ___ do Bairro Alto»: tabernas, el local del fado de aficionados." },
        { options: ["licença", "lista", "linha"], answer: 0, why: "«Torna-se canto sem pedir ___»: sin pedir permiso." },
        { options: ["saudade", "sabedoria", "sardinha"], answer: 0, why: "«Traduz-se é a ___»: la palabra intraducible del fado." },
      ],
    },
    {
      id: "cz-pt-c2-02-3", title: "O elétrico 28 como aula", titleEs: "El eléctrico 28 como clase", minutes: 2,
      paragraphs: [
        { it: "O elétrico 28 sobe de manhã pela Graça com a cidade agarrada aos estribos. Para a aula de off, Madalena mandou narar trinta segundos dessa viagem como um documentário. A primeira tentativa soou a noticiário de raia: a voz {1} quando devia descer — o vício da narração portuguesa, avisou ela, é a entoação a subir no fecho. A segunda tentativa comeu as {2} e guardou o fôlego para as tônicas.", es: "El eléctrico 28 sube de mañana por la Graça con la ciudad agarrada a los estribos. Para la clase de off, Madalena mandó narrar treinta segundos de ese viaje como un documental. El primer intento sonó a noticiario de frontera: la voz subía cuando debía bajar — el vicio de la narración portuguesa, avisó ella, es la entonación que sube en el cierre. El segundo intento se comió las átonas y guardó el aliento para las tónicas." },
        { it: "Na terceira, a frase certa saiu quase sem vogais: «a cidade deita-se sobre as colinas» tornou-se «a c'dade d'ta-s' sobr' as colinas» — e Madalena sorriu pela primeira vez. O exercício termina com uma gravação no {3} sobre a tua própria {4}, ouvida em voz alta no dia seguinte. A regra do estúdio fica escrita na porta: um documentário não se lê, {5}-se devagar.", es: "En la tercera, la frase correcta salió casi sin vocales: «a cidade deita-se sobre as colinas» se convirtió en «a c'dade d'ta-s' sobr' as colinas» — y Madalena sonrió por primera vez. El ejercicio termina con una grabación en el móvil sobre tu propia calle, escuchada en voz alta al día siguiente. La regla del estudio queda escrita en la puerta: un documental no se lee, se declama despacio." },
      ],
      gaps: [
        { options: ["subia", "parava", "saltava"], answer: 0, why: "«Quando devia descer»: la voz subía — el vicio del off." },
        { options: ["átonas", "abertas", "altas"], answer: 0, why: "«Comeu as ___ e guardou o fôlego para as tônicas»: las vocales átonas." },
        { options: ["telemóvel", "televisão", "telefone"], answer: 0, why: "«Uma gravação no ___»: el móvil, el ejercicio auténtico del curso." },
        { options: ["rua", "regra", "rota"], answer: 0, why: "«Sobre a tua própria ___»: tu calle, lo que el estudiante conoce." },
        { options: ["declama", "descansa", "desculpa"], answer: 0, why: "«Não se lê, ___-se devagar»: se declama, la palabra del curso." },
      ],
    },
  ],

  "pt-cu-c2-03": [
    {
      id: "cz-pt-c2-03-1", title: "No camarim do Capitólio", titleEs: "En el camerino del Capitólio", minutes: 3,
      paragraphs: [
        { it: "Depois do espetáculo de estreia, o camarim do Capitólio cheira a café requentado. Zé Pedro ouviu o número até ao fim e tem opinião — várias. A primeira é a mais dura: o problema não é a piada, é o {1}. Contas o punchline e ficas à espera do riso com cara de quem pede {2} — e confirmar é pior: o comediante confirma, o amador espera.", es: "Después del espectáculo de estreno, el camerino del Capitólio huele a café recalentado. Zé Pedro escuchó el número hasta el final y tiene opinión — varias. La primera es la más dura: el problema no es el chiste, es el timing. Sueltas el remate y te quedas esperando la risa con cara de quien pide limosna — y confirmar es peor: el comediante confirma, el amateur espera." },
        { it: "E quando ninguém ri, fica um silêncio {3} — pior que o silêncio seco. Há duas saídas: a ironia contra ti próprio, ou a pausa. E nunca, em caso algum, se explica a piada: explicar é assinar a {4}. O humor português é de ironia fina: a gargalhada vem depois, na rua, quando o sujeito percebe — daí a fama de {5}.", es: "Y cuando nadie ríe, queda un silencio educado — peor que el silencio seco. Hay dos salidas: la ironía contra ti mismo, o la pausa. Y nunca, jamás, se explica el chiste: explicar es firmar la sentencia. El humor portugués es de ironía fina: la carcajada llega después, en la calle, cuando el sujeto lo entiende — de ahí la fama de callado." },
      ],
      gaps: [
        { options: ["timing", "texto", "teatro"], answer: 0, why: "«O problema não é a piada, é o ___»: el timing, la palabra clave del humor." },
        { options: ["esmola", "escola", "estrela"], answer: 0, why: "«Com cara de quem pede ___»: pidiendo limosna, la imagen de Zé Pedro." },
        { options: ["educado", "estudado", "entregue"], answer: 0, why: "«Um silêncio ___ — pior que o seco»: el silencio educado de la sala." },
        { options: ["sentença", "saudade", "semente"], answer: 0, why: "«Explicar é assinar a ___»: firmar la sentencia, la regla de oro." },
        { options: ["calado", "caloroso", "calculista"], answer: 0, why: "«Daí a fama de ___»: el portugués callado que se ríe por dentro." },
      ],
    },
    {
      id: "cz-pt-c2-03-2", title: "O cronómetro da pausa", titleEs: "El cronómetro de la pausa", minutes: 3,
      paragraphs: [
        { it: "O exercício do curso é medido a cronómetro: conta-se a mesma piada três vezes, mudando apenas a pausa antes do punchline — um segundo, dois, três. Com um segundo, o riso chega {1}: a sala ainda está a preparar-se. Com três, o silêncio enche-se e a {2} cresce até doer. O timing, diz Zé Pedro, é matéria medível: a pausa certa tem data e hora.", es: "El ejercicio del curso se mide con cronómetro: se cuenta el mismo chiste tres veces, cambiando solo la pausa antes del remate — un segundo, dos, tres. Con un segundo, la risa llega pronto: la sala todavía se está preparando. Con tres, el silencio se llena y la tensión crece hasta doler. El timing, dice Zé Pedro, es materia medible: la pausa correcta tiene fecha y hora." },
        { it: "Com dois segundos, a sala cai — não pelo que se disse, mas pelo que se {3}: a pausa cheia antes do remate é a assinatura do comediante. Depois do punchline, zero de pausa: quem ri da própria piada, {4}-a. E a cara de inocente desmente tudo o que a boca acabou de dizer — é o último {5} da estrutura: setup, tensão, pausa, remate.", es: "Con dos segundos, la sala cae — no por lo que se dijo, sino por lo que se calló: la pausa llena antes del remate es la firma del comediante. Después del remate, cero pausa: quien ríe de su propio chiste, lo mata. Y la cara de inocente desmiente todo lo que la boca acaba de decir — es el último eslabón de la estructura: setup, tensión, pausa, remate." },
      ],
      gaps: [
        { options: ["cedo", "curto", "claro"], answer: 0, why: "«A sala ainda está a preparar-se»: con un segundo la risa llega demasiado pronto." },
        { options: ["tensão", "tenção", "tendência"], answer: 0, why: "«O silêncio enche-se e a ___ cresce»: la tensión del setup." },
        { options: ["calou", "cantou", "contou"], answer: 0, why: "«Não pelo que se disse, mas pelo que se ___»: lo que se calló, la pausa." },
        { options: ["mata", "mostra", "muda"], answer: 0, why: "«Quem ri da própria piada, ___-a»: la mata, regla del oficio." },
        { options: ["elo", "enigma", "erro"], answer: 0, why: "«O último ___ da estrutura»: el último eslabón de setup-tensión-pausa-remate." },
      ],
    },
    {
      id: "cz-pt-c2-03-3", title: "O riso que pensa", titleEs: "La risa que piensa", minutes: 3,
      paragraphs: [
        { it: "A ironia fina nunca levanta a voz; se levanta, já é {1} — outro ofício. No cinema português, A Canção de Lisboa (1933) e O Pátio das Cantigas (1942) fixaram o arquétipo do português atrevido e desconfiado; os atores Vasco Santana e António Silva ficaram para sempre como tios de todos. Na televisão, Herman José fez da {2} um ofício desde os anos 80: a especialidade é imitar a pompa dos poderosos.", es: "La ironía fina nunca levanta la voz; si la levanta, ya es escarnio — otro oficio. En el cine portugués, A Canção de Lisboa (1933) y O Pátio das Cantigas (1942) fijaron el arquetipo del portugués atrevido y desconfiado; los actores Vasco Santana y António Silva quedaron para siempre como tíos de todos. En la televisión, Herman José hizo de la parodia un oficio desde los años 80: la especialidad es imitar la pompa de los poderosos." },
        { it: "No stand-up, Ricardo Araújo Pereira pratica o humor de atualidade: a ironia fina que {3} com uma mão e aponta com a outra. O humor negro é aceite com naturalidade — a morte é tratada como uma {4} que aparece lá em casa ao domingo. E a autoironia é quase desporto nacional: os portugueses {5} primeiro consigo, para que ninguém chegue antes.", es: "En el stand-up, Ricardo Araújo Pereira practica el humor de actualidad: la ironía fina que elogia con una mano y señala con la otra. El humor negro se acepta con naturalidad — la muerte se trata como una tía que aparece en casa el domingo. Y la autoironía es casi deporte nacional: los portugueses se burlan primero de sí mismos, para que nadie llegue antes." },
      ],
      gaps: [
        { options: ["escárnio", "espanto", "esforço"], answer: 0, why: "«Se levanta a voz, já é ___»: el escarnio, otro oficio." },
        { options: ["paródia", "poesia", "polícia"], answer: 0, why: "«Herman José fez da ___ um ofício»: la parodia de la pompa." },
        { options: ["elogia", "escrita", "esquece"], answer: 0, why: "«Que ___ com uma mão e aponta com a outra»: elogia." },
        { options: ["tia", "tenda", "turma"], answer: 0, why: "«A morte é tratada como uma ___ que aparece ao domingo»: la tía." },
        { options: ["gozam", "gastam", "guardam"], answer: 0, why: "«Os portugueses ___ primeiro consigo»: gozam, se burlan de sí." },
      ],
    },
  ],

  "pt-cu-c2-04": [
    {
      id: "cz-pt-c2-04-1", title: "A sessão do clube", titleEs: "La sesión del club", minutes: 3,
      paragraphs: [
        { it: "A sessão mensal do clube de leitura ocupa o fundo duma livraria do Chiado, dedicada à prosa portuguesa contemporânea. A moderadora Carlota abre com uma {1}: fechem o livro e, sem citar, digam-me que frase ficou no ar entre o capítulo três e o quatro. O Duarte, advogado de formação, desconfia de todo o mundo — sobretudo dos {2}.", es: "La sesión mensal del club de lectura ocupa el fondo de una librería del Chiado, dedicada a la prosa portuguesa contemporánea. La moderadora Carlota abre con una prohibición: cierren el libro y, sin citar, díganme qué frase quedó en el aire entre el capítulo tres y el cuatro. Duarte, abogado de formación, desconfía de todo el mundo — sobre todo de los narradores." },
        { it: "A conversa dessa noite é o truque do Lobo Antunes: as frases não {3} — trocam de assunto a meio, como as conversas numa mesa de jantar de família. E o método do Saramago, onde a pontuação é {4}: quando o diálogo entra, entra sem avisar — maiúscula depois da vírgula, como quem entra de rompante numa sala. A tarefa para a semana: um parágrafo em terceira pessoa com a voz de {5} por dentro.", es: "La conversación de esa noche es el truco de Lobo Antunes: las frases no terminan — cambian de tema a mitad, como las conversaciones en una mesa de cena de familia. Y el método de Saramago, donde la puntuación es escenografía: cuando el diálogo entra, entra sin avisar — mayúscula después de la coma, como quien entra de pronto en una sala. La tarea para la semana: un párrafo en tercera persona con la voz del personaje por dentro." },
      ],
      gaps: [
        { options: ["proibição", "provação", "promoção"], answer: 0, why: "«Fechem o livro, sem citar»: la prohibición de citar de Carlota." },
        { options: ["narradores", "nadadores", "navegadores"], answer: 0, why: "«Desconfia de todo o mundo, sobretudo dos ___»: los narradores no fiables." },
        { options: ["terminam", "tremem", "traduzem"], answer: 0, why: "«As frases não ___ — trocam de assunto»: no terminan, el truco de Lobo Antunes." },
        { options: ["cenografia", "cerimónia", "ciência"], answer: 0, why: "«O método do Saramago, onde a pontuação é ___»: escenografía." },
        { options: ["personagem", "personalidade", "pessoa"], answer: 0, why: "«Terceira pessoa com a voz de ___ por dentro»: del personaje, el indirecto libre." },
      ],
    },
    {
      id: "cz-pt-c2-04-2", title: "A porta chamava-se seria", titleEs: "La puerta se llamaba sería", minutes: 3,
      paragraphs: [
        { it: "O exercício do clube começa com uma ação {1}: «ela fechou a janela devagar, como se fechasse o assunto». Segue-se uma pergunta que ninguém formula em voz alta: «porque teria ele dito aquilo?» — e a dúvida abre-se sozinha, porque o condicional «seria» é a {2}: entra-se por ele sem chave e sem bater. Ninguém percebe onde acaba a voz do narrador e começa a da personagem — e é exatamente esse o efeito procurado.", es: "El ejercicio del club empieza con una acción física: «ella cerró la ventana despacio, como si cerrara el tema». Sigue una pregunta que nadie formula en voz alta: «¿por qué habría él dicho aquello?» — y la duda se abre sola, porque el condicional «seria» es la puerta: se entra por ella sin llave y sin llamar. Nadie entiende dónde acaba la voz del narrador y empieza la del personaje — y exactamente ese es el efecto buscado." },
        { it: "O truque dos tempos é deixar a personagem pensar no {3} do narrador: a pessoa é terceira, mas o imperfeito e o condicional deslizam para dentro dela. «Seria medo, seria tédio — ninguém sabia»: a anáfora do condicional reparte a dúvida em dois pesos iguais. E o narrador não {4} joga com isso: afirma com segurança o que devia duvidar, e duvida do que devia afirmar. O parágrafo fica sem {5} del todo — o leitor deve continuar a ouvir a voz.", es: "El truco de los tiempos es dejar al personaje pensar en el tiempo del narrador: la persona es tercera, pero el imperfecto y el condicional se deslizan hacia dentro de ella. «Sería miedo, sería tedio — nadie lo sabía»: la anáfora del condicional reparte la duda en dos pesos iguales. Y el narrador no fiable juega con eso: afirma con seguridad lo que debería dudar, y duda de lo que debería afirmar. El párrafo queda sin cierre del todo — el lector debe seguir oyendo la voz." },
      ],
      gaps: [
        { options: ["física", "final", "fonética"], answer: 0, why: "«Fechou a janela devagar»: una acción física, lo que se ve." },
        { options: ["porta", "pausa", "ponte"], answer: 0, why: "«O condicional 'seria' é a ___»: la puerta del indirecto libre, sin llave." },
        { options: ["tempo", "templo", "título"], answer: 0, why: "«Deixar a personagem pensar no ___ do narrador»: en el tiempo del narrador." },
        { options: ["fiável", "fugaz", "forte"], answer: 0, why: "«O narrador não ___»: el no fiable, palabra del curso." },
        { options: ["fecho", "fresco", "fogo"], answer: 0, why: "«O parágrafo fica sem ___ del todo»: sin cierre, como las frases de Lobo Antunes." },
      ],
    },
    {
      id: "cz-pt-c2-04-3", title: "Pontuação como cenografia", titleEs: "Puntuación como escenografía", minutes: 3,
      paragraphs: [
        { it: "Duas páginas sem um único ponto — só vírgulas, como se o autor tivesse medo de respirar. Medo, não: {1}. No Saramago, quando o diálogo entra, entra pela vírgula, e a {2} depois dela é alguém a entrar de rompante na sala; no Lobo Antunes, a frase troca de assunto a meio, como as conversas de família ao jantar. A pontuação, conclui o clube, nunca é neutra: é cenografia.", es: "Dos páginas sin un solo punto — solo comas, como si el autor tuviera miedo de respirar. Miedo, no: método. En Saramago, cuando el diálogo entra, entra por la coma, y la mayúscula después de ella es alguien entrando de pronto en la sala; en Lobo Antunes, la frase cambia de tema a mitad, como las conversaciones de familia en la cena. La puntuación, concluye el club, nunca es neutra: es escenografía." },
        { it: "Sophia de Mello Breyner Andresen fez da {3} uma ética: diz tudo em dez palavras e sobra-lhe espaço. A geração seguinte — Lídia Jorge, Dulce Maria Cardoso — herdou a {4}: o romance português fala com o leitor como se o conhecesse. No fim, o leitor fecha o livro e continua a ouvir a voz: é esse o único {5} da literatura.", es: "Sophia de Mello Breyner Andresen hizo de la claridad una ética: lo dice todo en diez palabras y le sobra espacio. La generación siguiente — Lídia Jorge, Dulce Maria Cardoso — heredó la voz: la novela portuguesa habla con el lector como si lo conociera. Al final, el lector cierra el libro y sigue oyendo la voz: ese es el único milagro de la literatura." },
      ],
      gaps: [
        { options: ["método", "medo", "mito"], answer: 0, why: "«Medo, não: ___»: método, la corrección de Carlota." },
        { options: ["maiúscula", "máquina", "marcha"], answer: 0, why: "«A ___ depois da vírgula»: la mayúscula que entra de rompante." },
        { options: ["clareza", "conta", "cerimónia"], answer: 0, why: "«Fez da ___ uma ética: diz tudo em dez palavras»: la claridad." },
        { options: ["voz", "vez", "vida"], answer: 0, why: "«A geração seguinte herdou a ___»: la voz literaria de la tradición." },
        { options: ["milagre", "mistério", "museu"], answer: 0, why: "«O único ___ da literatura»: seguir oyendo la voz, el milagro." },
      ],
    },
  ],

  "pt-cu-c2-05": [
    {
      id: "cz-pt-c2-05-1", title: "A declaração linha a linha", titleEs: "La declaración línea a línea", minutes: 3,
      paragraphs: [
        { it: "Faltam duas horas para o plenário da cimeira da CPLP e a embaixadora Costa revê a declaração final linha a linha. A primeira regra é lexical: nada de «penso que» — numa declaração final, «penso que» é uma {1}. Diz-se «reconhece-se», «notou-se com satisfação» — o impessoal a valer {2}, porque quem recomenda? Todos. Quem cumpre? Veremos.", es: "Faltan dos horas para el plenario de la cumbre de la CPLP y la embajadora Costa revisa la declaración final línea a línea. La primera regla es léxica: nada de «pienso que» — en una declaración final, «pienso que» es una confesión. Se dice «se reconoce», «se constató con satisfacción» — el impersonal que vale oro, porque ¿quién recomienda? Todos. ¿Quién cumple? Ya veremos." },
        { it: "O delegado angolano, Sr. Kalunga, coleciona {3} como quem coleciona selos — o favorito é «avultam dificuldades»: avultam, mas ninguém as descreve. «Uma palavra que trabalha sozinha e não recebe {4}», resume ele. E o fecho da declaração é sempre o mesmo: «os trabalhos prosseguirão em ambiente de compreensão mútua». Levantam-se todos, ninguém {5} de nada.", es: "El delegado angoleño, Sr. Kalunga, colecciona eufemismos como quien colecciona sellos — el favorito es «avultam dificuldades»: abundan, pero nadie los describe. «Una palabra que trabaja sola y no cobra sueldo», resume él. Y el cierre de la declaración es siempre el mismo: «los trabajos proseguirán en un ambiente de comprensión mutua». Se levantan todos, nadie renunció a nada." },
      ],
      gaps: [
        { options: ["confissão", "conclusão", "conversa"], answer: 0, why: "«'Penso que' é uma ___»: una confesión, la regla de la embajadora." },
        { options: ["ouro", "ano", "ar"], answer: 0, why: "«O impessoal a valer ___»: vale oro." },
        { options: ["eufemismos", "estatutos", "editoriais"], answer: 0, why: "«Coleciona ___ como quem coleciona selos»: eufemismos." },
        { options: ["ordenado", "orgulho", "estatuto"], answer: 0, why: "«Trabalha sozinha e não recebe ___»: sueldo." },
        { options: ["desistiu", "discutiu", "descreveu"], answer: 0, why: "«Ninguém ___ de nada»: nadie renunció a nada." },
      ],
    },
    {
      id: "cz-pt-c2-05-2", title: "A tradução de «não deixará de ser equacionada»", titleEs: "La traducción de «não deixará de ser equacionada»", minutes: 3,
      paragraphs: [
        { it: "A frase mais perfeita da declaração tem sete palavras: «não deixará de ser equacionada». A redatora pediu tradução e a embaixadora deu-a sem sorrir: quer dizer que talvez se fale disso, se houver {1}, se ninguém tocar no assunto. É a arte de não dizer «não» sem ter dito «{2}» — a litotes do futuro: negar a negação para prometer sem prometer.", es: "La frase más perfecta de la declaración tiene siete palabras: «não deixará de ser equacionada». La redactora pidió traducción y la embajadora la dio sin sonreír: quiere decir que quizá se hable de ello, si hay tiempo, si nadie toca el asunto. Es el arte de no decir «no» sin haber dicho «sí» — la lítote del futuro: negar la negación para prometer sin prometer." },
        { it: "O condicional institucional — «estaria em causa», «estaria em vias de» — é o tempo da prudência: nunca acontece, apenas se {3}. E as fórmulas de toga têm altares próprios: «salvo melhor juízo», «sem prejuízo de», «em sede própria» — portas que se abrem e se fecham ao mesmo tempo. A diplomacia existe para dizer devagar aquilo que ninguém quer ouvir {4}. No fim da revisão, a embaixadora assina devagar, com incisos — porque em Portugal até a assinatura tem {5}.", es: "El condicional institucional — «estaría en juego», «estaría en vías de» — es el tiempo de la prudencia: nunca ocurre, apenas se admite. Y las fórmulas de toga tienen altares propios: «salvo mejor parecer», «sin perjuicio de», «en la sede correspondiente» — puertas que se abren y se cierran a la vez. La diplomacia existe para decir despacio aquello que nadie quiere oír deprisa. Al final de la revisión, la embajadora firma despacio, con incisos — porque en Portugal hasta la firma tiene ritmo." },
      ],
      gaps: [
        { options: ["tempo", "tema", "título"], answer: 0, why: "«Se houver ___, se ninguém tocar no assunto»: si hay tiempo." },
        { options: ["sim", "sino", "sinal"], answer: 0, why: "«Não dizer 'não' sem ter dito '___'»: sin haber dicho sí." },
        { options: ["admite", "acontece", "assinou"], answer: 0, why: "«Nunca acontece, apenas se ___»: solo se admite." },
        { options: ["depressa", "depois", "dentro"], answer: 0, why: "«Dizer devagar o que ninguém quer ouvir ___»: deprisa." },
        { options: ["ritmo", "regra", "raiz"], answer: 0, why: "«Assina devagar, com incisos»: hasta la firma tiene ritmo." },
      ],
    },
    {
      id: "cz-pt-c2-05-3", title: "O comunicado-sim", titleEs: "El comunicado-sí", minutes: 2,
      paragraphs: [
        { it: "Ler um comunicado é ler o que não está escrito. O «nós» institucional nunca tem nome {1}: «reconheceu-se o esforço desenvolvido» firma o elogio sem assinatura. A expressão mais honesta de todas é «em vias de»: confessa que a {2} não acaba. E o futuro do verbo — «os trabalhos prosseguirão» — é a única certeza do documento: nunca chega a acontecer, mas promete sempre.", es: "Leer un comunicado es leer lo que no está escrito. El «nosotros» institucional nunca tiene nombre propio: «se reconoció el esfuerzo desarrollado» firma el elogio sin firma. La expresión más honesta de todas es «en vías de»: confiesa que el viaje no acaba. Y el futuro del verbo — «los trabajos proseguirán» — es la única certeza del documento: nunca llega a ocurrir, pero promete siempre." },
        { it: "No comunicado, escreve-se no impessoal para que ninguém seja {3}; no futuro, para que ninguém {4}. «Não deixará de se equacionar» e «os trabalhos prosseguirão» prometem sem prazo. A leitura do comunicado-sim treina-se como um ofício: sublinhar o eufemismo, contar o que falta, desconfiar do adjetivo. No fim, apertam-se as mãos: o único parágrafo que os dois lados assinam de bom {5}.", es: "En el comunicado, se escribe en impersonal para que nadie sea responsable; en futuro, para que nadie reclame. «No dejará de plantearse» y «los trabajos proseguirán» prometen sin plazo. La lectura del comunicado-sí se entrena como un oficio: subrayar el eufemismo, contar lo que falta, desconfiar del adjetivo. Al final, se estrechan las manos: el único párrafo que ambas partes firman de buena gana." },
      ],
      gaps: [
        { options: ["próprio", "público", "perdido"], answer: 0, why: "«Nunca tem nome ___»: nombre propio, el sujeto fantasma." },
        { options: ["viagem", "venda", "vigília"], answer: 0, why: "«'Em vias de': confessa que a ___ não acaba»: el viaje." },
        { options: ["responsável", "residente", "revisor"], answer: 0, why: "«Para que ninguém seja ___»: responsable." },
        { options: ["cobre", "conta", "concorda"], answer: 0, why: "«No futuro, para que ninguém ___»: para que nadie reclame." },
        { options: ["grado", "graus", "grupos"], answer: 0, why: "«Assinam de bom ___»: de buena gana, el apretón de manos." },
      ],
    },
  ],

  "pt-cu-c2-06": [
    {
      id: "cz-pt-c2-06-1", title: "A cena devolvida", titleEs: "La escena devuelta", minutes: 3,
      paragraphs: [
        { it: "A realizadora Inês devolveu a cena curta coberta de apontamentos vermelhos. O diagnóstico ocupa uma linha: o teu guião descreve {1}. «Ela está triste» não se filma: a tristeza não tem plano — tem {2}. Ela enrola o fio do telefone no dedo, dez voltas, sem falar. O subtexto escreve-se no verbo, e a cena inteira cabe em três linhas de ação visível.", es: "La directora Inês devolvió la escena corta cubierta de anotaciones rojas. El diagnóstico ocupa una línea: tu guion describe sentimientos. «Ella está triste» no se filma: la tristeza no tiene plano — tiene acción. Ella enrolla el hilo del teléfono en el dedo, diez vueltas, sin hablar. El subtexto se escribe en el verbo, y la escena entera cabe en tres líneas de acción visible." },
        { it: "O cabeçalho diz INT. COZINHA — NOITE, e pronto: só o que a câmara vê. O ator Francisco, que já leu guiões demais, resume o ofício do sofá: um guião bom é o que me deixa a mim o {3} — «Francisco entra, olha a mesa, sai. Três linhas — uma {4}». O resto pertence ao ator — e ao {5}, que é a frase mais comprida do cinema português.", es: "El encabezado dice INT. COCINA — NOCHE, y basta: solo lo que ve la cámara. El actor Francisco, que ya leyó demasiados guiones, resume el oficio desde el sofá: un buen guion es el que me deja a mí el trabajo — «Francisco entra, mira la mesa, sale. Tres líneas — una vida». El resto pertenece al actor — y al silencio, que es la frase más larga del cine portugués." },
      ],
      gaps: [
        { options: ["sentimentos", "sentenças", "sinais"], answer: 0, why: "«'Ela está triste' não se filma»: el guion describe sentimientos." },
        { options: ["ação", "atenção", "audição"], answer: 0, why: "«Não tem plano — tem ___»: la tristeza tiene acción." },
        { options: ["trabalho", "trajeto", "traje"], answer: 0, why: "«O que me deixa a mim o ___»: el trabajo del actor." },
        { options: ["vida", "visita", "volta"], answer: 0, why: "«Três linhas — uma ___»: una vida entera en tres líneas." },
        { options: ["silêncio", "sonho", "susto"], answer: 0, why: "«A frase mais comprida do cinema português»: el silencio de Oliveira." },
      ],
    },
    {
      id: "cz-pt-c2-06-2", title: "INT. COZINHA — NOITE", titleEs: "INT. COCINA — NOCHE", minutes: 3,
      paragraphs: [
        { it: "A reescrita começa no cabeçalho — INT. COZINHA — NOITE — e nada mais: só o que a câmara vê. A ação abre com uma {1} absoluta: «terminada a discussão, ela arruma a louça em silêncio». O particípio tem sujeito próprio e concorda com ele; a frase poupa a {2} e ganha o ar de quem conta um sonho ao minuto.", es: "La reescritura empieza en el encabezado — INT. COCINA — NOCHE — y nada más: solo lo que ve la cámara. La acción abre con una oración absoluta: «terminada la discusión, ella recoge la vajilla en silencio». El participio tiene sujeto propio y concuerda con él; la frase se ahorra la conjunción y gana el aire de quien cuenta un sueño al minuto." },
        { it: "Tudo acontece no {3}: o guião é o único texto que acontece agora e ao mesmo tempo — a câmara não conhece outro tempo. Ele sai; a câmara fica com as {4} dela. E a última imagem é a {5} da cena: o público sai do cinema com ela dentro dos olhos.", es: "Todo ocurre en el presente: el guion es el único texto que ocurre ahora y al mismo tiempo — la cámara no conoce otro tiempo. Él sale; la cámara se queda con las manos de ella. Y la última imagen es la herencia de la escena: el público sale del cine con ella dentro de los ojos." },
      ],
      gaps: [
        { options: ["oração", "opinião", "operação"], answer: 0, why: "«Terminada a discussão»: una oración absoluta de participio." },
        { options: ["conjunção", "conclusão", "conversa"], answer: 0, why: "«A frase poupa a ___»: se ahorra la conjunción." },
        { options: ["presente", "preto", "primeiro"], answer: 0, why: "«Acontece agora e ao mesmo tempo»: el presente perpetuo." },
        { options: ["mãos", "malas", "mesas"], answer: 0, why: "«A câmara fica com as ___ dela»: el corte con las manos." },
        { options: ["herança", "história", "hora"], answer: 0, why: "«O público sai com ela dentro dos olhos»: la herencia." },
      ],
    },
    {
      id: "cz-pt-c2-06-3", title: "A última imagem", titleEs: "La última imagen", minutes: 3,
      paragraphs: [
        { it: "Manoel de Oliveira estreou com Douro, Faina Fluvial (1931) e filmou até aos 106 anos — mais de cinquenta {1} numa carreira de oito décadas. No seu cinema, o {2} é a frase mais comprida; e a última imagem vale por um discurso inteiro. O Novo Cinema Português chegou em 1963, com Os Verdes Anos de Paulo Rocha e Belarmino de Fernando Lopes: a porta do cinema de autor abriu-se para sempre.", es: "Manoel de Oliveira debutó con Douro, Faina Fluvial (1931) y filmó hasta los 106 años — más de cincuenta películas en una carrera de ocho décadas. En su cine, el silencio es la frase más larga; y la última imagen vale por un discurso entero. El Novo Cinema Português llegó en 1963, con Os Verdes Anos de Paulo Rocha y Belarmino de Fernando Lopes: la puerta del cine de autor se abrió para siempre." },
        { it: "Pedro Costa filmou os habitantes da Fontainhas como quem {3}; Miguel Gomes levou As Mil e Uma Noites (2015) a Cannes em três volumes. A regra da casa não mudou: descreve-se o que se {4}; o que se sente fica para o ator. E o som doseia-se com parcimónia — o som certo é meio {5}; o som errado é o filme todo.", es: "Pedro Costa filmó a los habitantes de la Fontainhas como quien escucha; Miguel Gomes llevó As Mil e Uma Noites (2015) a Cannes en tres volúmenes. La regla de la casa no cambió: se describe lo que se ve; lo que se siente queda para el actor. Y el sonido se dosifica con parsimonia — el sonido justo es media escena; el sonido equivocado, la película entera." },
      ],
      gaps: [
        { options: ["filmes", "feiras", "fotos"], answer: 0, why: "«Filmou até aos 106 anos — mais de cinquenta ___»: películas." },
        { options: ["silêncio", "sonho", "susto"], answer: 0, why: "«O ___ é a frase mais comprida»: el silencio de Oliveira." },
        { options: ["escuta", "escreve", "espanta"], answer: 0, why: "«Filmou como quem ___»: como quien escucha, el método de Pedro Costa." },
        { options: ["vê", "vive", "vende"], answer: 0, why: "«Descreve-se o que se ___»: lo que se ve." },
        { options: ["plano", "paço", "preço"], answer: 0, why: "«O som certo é meio ___»: media escena, medio plano." },
      ],
    },
  ],

  "pt-cu-c2-07": [
    {
      id: "cz-pt-c2-07-1", title: "A noite da redação", titleEs: "La noche de la redacción", minutes: 3,
      paragraphs: [
        { it: "Na redação de um jornal de Lisboa, a noite do debate eleitoral tem café frio e transcrição quente. A jornalista política Helena rebobina as {1} no portátil; o trabalho do dia conta-se com lápis: anáforas, palavras-armadilha e futuro de {2}. A retórica, diz ela, gosta de {3}: ontem, o candidato disse quatro vezes «Portugal merece» e duas «não vou desistir».", es: "En la redacción de un periódico de Lisboa, la noche del debate electoral tiene café frío y transcripción caliente. La periodista política Helena rebobina las respuestas en el portátil; el trabajo del día se cuenta con lápiz: anáforas, palabras-trampa y futuro de promesa. La retórica, dice ella, gusta de contabilidad: ayer, el candidato dijo cuatro veces «Portugal merece» y dos «no voy a desistir»." },
        { it: "«Mérito» apareceu em todas as respostas — até na dos {4} urbanos. É o que os analistas chamam palavra-armadilha: parece uma virtude e trava como um juízo; quem a usa, ao mesmo tempo {5} e acusa. O «nós» retórico é uma tenda: cabe um país inteiro lá dentro e não se vê ninguém — perdeu o sujeito, ganhou o auditório.", es: "«Mérito» apareció en todas las respuestas — hasta en la de los residuos urbanos. Es lo que los analistas llaman palabra-trampa: parece una virtud y dispara como un juicio; quien la usa, al mismo tiempo elogia y acusa. El «nosotros» retórico es una carpa: cabe un país entero dentro y no se ve a nadie — perdió el sujeto, ganó el auditorio." },
      ],
      gaps: [
        { options: ["respostas", "rápidas", "regras"], answer: 0, why: "«Rebobina as ___ no portátil»: las respuestas del debate." },
        { options: ["promessa", "prova", "prática"], answer: 0, why: "«Anáforas, palavras-armadilha e futuro de ___»: promesa, el tiempo que compromete." },
        { options: ["contabilidade", "contração", "contradição"], answer: 0, why: "«Disse quatro vezes»: la retórica gusta de contabilidad." },
        { options: ["resíduos", "residentes", "resultados"], answer: 0, why: "«Até na resposta dos ___ urbanos»: la pregunta sobre la basura." },
        { options: ["elogia", "eleitos", "ensina"], answer: 0, why: "«Ao mesmo tempo ___ e acusa»: elogia, el doble filo de «mérito»." },
      ],
    },
    {
      id: "cz-pt-c2-07-2", title: "A palavra-armadilha desarmada", titleEs: "La palabra-trampa desactivada", minutes: 3,
      paragraphs: [
        { it: "Desarmar uma palavra-armadilha começa com uma definição {1}: «mérito» pode significar esforço reconhecido ou juízo sobre quem não o tem — e o discurso escolhe o sentido que mais convém sem o dizer. O analista troca o adjetivo pelo dado: em vez de «governo responsável», escreve «o governo gastou tanto» — e deixa o {2} decidir. É análise de língua, não de bandos: nomeia-se o recurso e guarda-se o juízo.", es: "Desactivar una palabra-trampa empieza con una definición neutra: «mérito» puede significar esfuerzo reconocido o juicio sobre quien no lo tiene — y el discurso elige el sentido que más conviene sin decirlo. El analista cambia el adjetivo por el dato: en vez de «gobierno responsable», escribe «el gobierno gastó tanto» — y deja decidir al lector. Es análisis de lengua, no de bandos: se nombra el recurso y se guarda el juicio." },
        { it: "No comício, cada frase no futuro é um {3} passado a prazo: «Portugal será» não descreve nada — compromete-se. E ninguém paga {4} por um futuro. Na crise, a língua faz ginástica: «ajustamento», «esforço partilhado», «uma fase» — em 2011, foi a palavra que mais {5} durou no poder. O analista sereno escucha a língua, não o partido.", es: "En el mitin, cada frase en futuro es un cheque a plazo: «Portugal será» no describe nada — compromete. Y nadie paga intereses por un futuro. En la crisis, la lengua hace gimnasia: «ajuste», «esfuerzo compartido», «una fase» — en 2011, fue la palabra que más años duró en el poder. El analista sereno escucha la lengua, no el partido." },
      ],
      gaps: [
        { options: ["neutra", "nova", "necessária"], answer: 0, why: "«Desarmar começa com uma definição ___»: neutra, sin juicio." },
        { options: ["leitor", "líder", "locutor"], answer: 0, why: "«Em vez do adjetivo, o dado — e deixa o ___ decidir»: el lector." },
        { options: ["cheque", "choque", "chefe"], answer: 0, why: "«Cada frase no futuro é um ___ passado a prazo»: un cheque." },
        { options: ["juros", "jurados", "jantares"], answer: 0, why: "«Ninguém paga ___ por um futuro»: intereses, la metáfora de Helena." },
        { options: ["anos", "avisos", "argumentos"], answer: 0, why: "«A palavra que mais ___ durou no poder»: años." },
      ],
    },
    {
      id: "cz-pt-c2-07-3", title: "O comício como género", titleEs: "El mitin como género", minutes: 3,
      paragraphs: [
        { it: "O comício nasceu com a democracia: em 1974-75, Portugal aprendeu a falar em público — e a ouvir-se — em praças e esplanadas. Mário Soares foi o grande {1} do período: discursos de rua, com a voz a cobrir o ruído da história. O debate televisivo seguiu-se, e com ele a era dos {2}: hoje contam-se as anáforas, como faz a Helena na redação.", es: "El mitin nació con la democracia: en 1974-75, Portugal aprendió a hablar en público — y a escucharse — en plazas y terrazas. Mário Soares fue el gran orador del período: discursos de calle, con la voz cubriendo el ruido de la historia. El debate televisivo siguió, y con él la era de los asesores: hoy se cuentan las anáforas, como hace Helena en la redacción." },
        { it: "A anáfora é a muleta {3} do comício: «vamos construir, vamos unir, vamos vencer» repete para gravar. E o pronome «o» herda o predicado inteiro: «não serei eu a desistir — não o foi quem me ensinou, não o será quem me {4}». O fecho é sempre o mesmo: um «viva» e um aperto de {5} — o único parágrafo que os dois lados assinam de bom grado.", es: "La anáfora es la muleta rítmica del mitin: «vamos a construir, vamos a unir, vamos a vencer» repite para grabar. Y el pronombre «o» hereda el predicado entero: «no seré yo quien desista — no lo fue quien me enseñó, no lo será quien me siga». El cierre es siempre el mismo: un «viva» y un apretón de manos — el único párrafo que ambas partes firman de buena gana." },
      ],
      gaps: [
        { options: ["orador", "ator", "autor"], answer: 0, why: " «Discursos de rua»: o grande ___ do período foi Mário Soares, el orador." },
        { options: ["assessores", "assistentes", "artistas"], answer: 0, why: "«O debate televisivo e a era dos ___»: los asesores." },
        { options: ["rítmica", "rígida", "rara"], answer: 0, why: "«Repete para gravar»: la muleta rítmica del comicio." },
        { options: ["seguir", "saber", "sentir"], answer: 0, why: "«Não o será quem me ___»: quien me siga, la herencia del predicado." },
        { options: ["mão", "maçã", "mesa"], answer: 0, why: "«Um aperto de ___»: el apretón de manos, el único acuerdo." },
      ],
    },
  ],

  "pt-cu-c2-08": [
    {
      id: "cz-pt-c2-08-1", title: "A última página", titleEs: "La última página", minutes: 3,
      paragraphs: [
        { it: "O conto espanhol estava traduzido; o problema era a última página. A autora elogia o jantar — «exquisitísimo» — e a tradução deixou «esquisitíssimo»: em português, isso quer dizer que a comida era {1}, não divina. Um {2} trocado por uma ofensa sem dar conta — e a cena mais gentil do conto ficou a pior de todas.", es: "El cuento español estaba traducido; el problema era la última página. La autora elogia la cena — «exquisitísimo» — y la traducción dejó «esquisitíssimo»: en portugués, eso quiere decir que la comida era sospechosa, no divina. Un elogio cambiado por un insulto sin darse cuenta — y la escena más amable del cuento quedó como la peor de todas." },
        { it: "A editora Rosário revê a tradução em voz alta, linha a linha; o revisor Mário, quarenta anos de ofício, assinala minúcias com {3} azul. Bem-vindo à raia: este ofício é {4} de minúcias. Da próxima vez que alguém disser que a personagem está «embaraçada», pergunta-lhe se está enredada — ou se é para comprar roupa de {5}.", es: "La editora Rosario revisa la traducción en voz alta, línea a línea; el revisor Mário, cuarenta años de oficio, señala minucias con lápiz azul. Bienvenido a la raya: este oficio es funambulista de minucias. La próxima vez que alguien diga que el personaje está «embaraçada», pregúntale si está enredada — o si hay que comprar ropa de bebé." },
      ],
      gaps: [
        { options: ["suspeita", "salgada", "servida"], answer: 0, why: "«'Esquisito' em português: a comida era ___, não divina»: sospechosa." },
        { options: ["elogio", "erro", "encontro"], answer: 0, why: "«Um ___ trocado por uma ofensa»: un elogio, lo que era «exquisitísimo»." },
        { options: ["lápis", "lenco", "lenço"], answer: 0, why: "«Assinala minúcias com ___ azul»: el lápiz azul del revisor." },
        { options: ["passista", "pastor", "paciente"], answer: 0, why: "«Este ofício é ___ de minúcias»: funambulista, equilibrista (passista)." },
        { options: ["bebé", "bebida", "bênção"], answer: 0, why: "«Ou se é para comprar roupa de ___»: de bebé, el falso amigo «embarazada»." },
      ],
    },
    {
      id: "cz-pt-c2-08-2", title: "Propinas e polvos", titleEs: "Propinas y pulpos", minutes: 3,
      paragraphs: [
        { it: "Os falsos amigos institucionais cobram caro. «Propinas», em Portugal, é o que se paga para {1}; em Espanha, o que se paga por baixo da {2}. Trocar os dois deixa toda a gente em maus lençóis. E «polvo»: na vila da personagem pescava-se polvo para levar a casa — em Espanha, «polvo» é pó, a poeira da estrada.", es: "Los falsos amigos institucionales cobran caro. «Propinas», en Portugal, es lo que se paga para estudiar; en España, lo que se paga por debajo de la mesa. Cambiar los dos deja a todo el mundo en malos paños. Y «polvo»: en el pueblo del personaje se pescaba pulpo para llevar a casa — en España, «polvo» es polvo, el polvo del camino." },
        { it: "A mesma palavra pode ser uma {3} ou uma nuvem — o dicionário não avisa; a raia decide. O tradutor que ignora os falsos amigos escreve português de {4} com sotaque de Madrid. E o ritmo é outra bandeira: o espanhol {5} as frases; o português pesa-as — quem traduz palavra por palavra só muda a roupa ao mesmo corpo.", es: "La misma palabra puede ser una cena o una nube — el diccionario no avisa; la raya decide. El traductor que ignora los falsos amigos escribe portugués de frontera con acento de Madrid. Y el ritmo es otra bandera: el español empuja las frases; el portugués las pesa — quien traduce palabra por palabra solo cambia la ropa al mismo cuerpo." },
      ],
      gaps: [
        { options: ["estudar", "dormir", "dirigir"], answer: 0, why: "«'Propinas' em Portugal é o que se paga para ___»: para estudar, las tasas." },
        { options: ["mesa", "multa", "moda"], answer: 0, why: "«Em Espanha, o que se paga por baixo da ___»: bajo la mesa, el soborno." },
        { options: ["ceia", "cena", "seda"], answer: 0, why: "«Uma ___ ou uma nuvem»: una cena (comida) o una nube, el polvo." },
        { options: ["raia", "rato", "rota"], answer: 0, why: "«Português de ___ com sotaque de Madrid»: de frontera, la raia." },
        { options: ["empurra", "estuda", "escuta"], answer: 0, why: "«O espanhol ___ as frases; o português pesa-as»: empuja." },
      ],
    },
    {
      id: "cz-pt-c2-08-3", title: "O ritmo pesa", titleEs: "El ritmo pesa", minutes: 3,
      paragraphs: [
        { it: "A lição de ritmo da editora Rosário cabe numa palavra: respirar. O português gosta de uma {1} onde o espanhol põe um tranco. E nunca se traduz o gerúndio: lá «está lloviendo»; cá «está a {2}» — quem mistura escreve português com sotaque emprestado.", es: "La lección de ritmo de la editora Rosario cabe en una palabra: respirar. Al portugués le gusta una coma donde el español pone un empujón. Y nunca se traduce el gerundio: allí «está lloviendo»; aquí «está a chover» — quien los mezcla escribe portugués con acento prestado." },
        { it: "«E no entanto» não é tradução de «y sin embargo»: é só a roupa do mesmo corpo. O tradutor decide onde a frase {3} — e põe a pausa onde o português respira. No fim, o leitor não deve {4} a raia; se a sente, não é tradução — é contrabando. O tradutor bom é o que o leitor nunca {5}: um fantasma que assina com a mão do autor.", es: "«E no entanto» no es traducción de «y sin embargo»: es solo la ropa del mismo cuerpo. El traductor decide dónde pesa la frase — y pone la pausa donde el portugués respira. Al final, el lector no debe sentir la raya; si la siente, no es traducción — es contrabando. El buen traductor es el que el lector nunca nota: un fantasma que firma con la mano del autor." },
      ],
      gaps: [
        { options: ["vírgula", "vitória", "viagem"], answer: 0, why: "«Uma ___ onde o espanhol põe um tranco»: la coma." },
        { options: ["chover", "chamar", "chorar"], answer: 0, why: "«Cá 'está a ___'»: lloviendo se traduce por «a chover»." },
        { options: ["pesa", "passa", "pinta"], answer: 0, why: "«Decide onde a frase ___»: el portugués pesa las frases." },
        { options: ["sentir", "ver", "seguir"], answer: 0, why: "«Não deve ___ a raia»: no debe sentirla." },
        { options: ["nota", "nomeia", "nega"], answer: 0, why: "«O que o leitor nunca ___»: nunca lo nota, el fantasma." },
      ],
    },
  ],

  "pt-cu-c2-09": [
    {
      id: "cz-pt-c2-09-1", title: "O lápis de dois bicos", titleEs: "El lápiz de dos puntas", minutes: 3,
      paragraphs: [
        { it: "O editor Nuno recebeu o capítulo com lápis de dois bicos e chamou o autor de estreia ao gabinete. Na mesa, o rascunho coberto de {1}; na parede, uma primeira edição emoldurada. O diagnóstico veio em forma de aritmética: o teu parágrafo tem oitenta e tal palavras — dez são {2}; o resto é tributo aos substantivos.", es: "El editor Nuno recibió el capítulo con lápiz de dos puntas y llamó al autor debutante al despacho. Sobre la mesa, el borrador cubierto de tachones; en la pared, una primera edición enmarcada. El diagnóstico llegó en forma de aritmética: tu párrafo tiene ochenta y tantas palabras — diez son verbos; el resto es tributo a los sustantivos." },
        { it: "«A realização de uma análise» é a frase de quem receia o {3} «analisar». Transforma-a em «analisamos» — e ganhas meio parágrafo de {4}. O advérbio em «-mente» tem regra de casa: um por página ainda tem graça; três, e é o texto a pedir {5} ao leitor. Escrever é cortar; publicar é ter quem nos impeça de cortar demasiado.", es: "«La realización de un análisis» es la frase de quien teme al verbo «analizar». Transfórmala en «analisamos» — y ganas medio párrafo de vida. El adverbio en «-mente» tiene regla de casa: uno por página todavía tiene gracia; tres, y es el texto pidiendo limosna al lector. Escribir es cortar; publicar es tener quien nos impida cortar demasiado." },
      ],
      gaps: [
        { options: ["tachões", "telhados", "titulares"], answer: 0, why: "«Na mesa, o rascunho coberto de ___»: tachones." },
        { options: ["verbos", "versos", "vícios"], answer: 0, why: "«Dez são ___; o resto é tributo aos substantivos»: verbos." },
        { options: ["verbo", "vento", "voto"], answer: 0, why: "«A frase de quem receia o ___ 'analisar'»: teme al verbo." },
        { options: ["vida", "venda", "vantagem"], answer: 0, why: "«Transforma-a em 'analisamos' — e ganhas meio parágrafo de ___»: de vida." },
        { options: ["esmola", "escola", "escuta"], answer: 0, why: "«Três, e é o texto a pedir ___ ao leitor»: limosna." },
      ],
    },
    {
      id: "cz-pt-c2-09-2", title: "A última frase do parágrafo", titleEs: "La última frase del párrafo", minutes: 3,
      paragraphs: [
        { it: "A última {1} de cada parágrafo é a que o leitor leva para casa — trabalha-a como se fosse a única do livro: corta-lhe o excesso, deixa-lhe o {2}. O estilo deve ser seco como o vinho do Alentejo: sem doçura, sem ornato. E a frase boa é curta, clara e {3} em verbo.", es: "La última frase de cada párrafo es la que el lector se lleva a casa — trabájala como si fuera la única del libro: córtale el exceso, déjale el hueso. El estilo debe ser seco como el vino del Alentejo: sin dulzor, sin adorno. Y la frase buena es corta, clara y termina en verbo." },
        { it: "O paralelismo faz o resto: três elementos {4} a verdade; quatro, a inventário. «Curta, clara e com um verbo no fim» fecha a porta como uma tríade. E o «-mente» dosifica-se como o sal: um por página é {5}; dois é gula. Na dúvida, corta-se — e depois corta-se mais uma vez.", es: "El paralelismo hace el resto: tres elementos suenan a verdad; cuatro, a inventario. «Corta, clara y con un verbo al final» cierra la puerta como una tríada. Y el «-mente» se dosifica como la sal: uno por página es condimento; dos es gula. En la duda, se corta — y después se corta una vez más." },
      ],
      gaps: [
        { options: ["frase", "fita", "fila"], answer: 0, why: "«A que o leitor leva para casa»: la última frase del párrafo." },
        { options: ["osso", "orço", "olho"], answer: 0, why: "«Corta-lhe o excesso, deixa-lhe o ___»: el hueso, ir al hueso." },
        { options: ["termina", "treina", "toma"], answer: 0, why: "«Curta, clara e ___ em verbo»: termina en verbo." },
        { options: ["soam", "somam", "sabem"], answer: 0, why: "«Três elementos ___ a verdade»: suenan a verdad." },
        { options: ["tempero", "tesouro", "turno"], answer: 0, why: "«Um por página é ___; dois é gula»: condimento, como la sal." },
      ],
    },
    {
      id: "cz-pt-c2-09-3", title: "Passar a limpo", titleEs: "Pasar a limpio", minutes: 3,
      paragraphs: [
        { it: "A expressão «passar a limpo» vem dos copistas: a letra miúda dava-se a limpo para o {1}. Hoje o corretor eletrónico apanha as duplicações; o {2} do editor continua a apanhar o resto. O «página a página» dos revisores antigos era uma leitura em voz alta: lia-se para {3} onde a frase tropeçava.", es: "La expresión «pasar a limpio» viene de los copistas: la letra pequeña se daba en limpio para el tipógrafo. Hoy el corrector electrónico caza las duplicaciones; el oído del editor sigue cazando el resto. El «página a página» de los revisores antiguos era una lectura en voz alta: se leía para oír dónde tropezaba la frase." },
        { it: "O ofício de revisor recuou nas editoras: sobrevive em freelancers, nos jornais diários e nos gabinetes de alguns {4}. A regra de casa manteve-se intacta: a última frase é a que o leitor leva para {5}. Por isso os catálogos das editoras são ensaios curtos disfarçados de publicidade — e a prova tipográfica continua a ler-se em voz alta antes de imprimir.", es: "El oficio de revisor retrocedió en las editoriales: sobrevive en freelancers, en los periódicos diarios y en los despachos de algunos tercos. La regla de casa se mantuvo intacta: la última frase es la que el lector se lleva a casa. Por eso los catálogos de las editoriales son ensayos cortos disfrazados de publicidad — y la prueba tipográfica se sigue leyendo en voz alta antes de imprimir." },
      ],
      gaps: [
        { options: ["tipógrafo", "teatro", "título"], answer: 0, why: "«A letra miúda dava-se a limpo para o ___»: el tipógrafo." },
        { options: ["ouvido", "orçamento", "olhar"], answer: 0, why: "«O ___ do editor apanha o resto»: el oído." },
        { options: ["ouvir", "ver", "voltar"], answer: 0, why: "«Lia-se para ___ onde a frase tropeçava»: para oír el tropiezo." },
        { options: ["teimosos", "técnicos", "turistas"], answer: 0, why: "«Nos gabinetes de alguns ___»: algunos tercos, teimosos." },
        { options: ["casa", "causa", "carta"], answer: 0, why: "«A que o leitor leva para ___»: para casa." },
      ],
    },
  ],

  "pt-cu-c2-10": [
    {
      id: "cz-pt-c2-10-1", title: "A gravadora está a rolar", titleEs: "La grabadora está rodando", minutes: 3,
      paragraphs: [
        { it: "Em Miranda do Douro, a arquivista Dra. Armanda vigia os níveis de som e faz o combinado: falar como se fala em casa — o arquivo quer a {1}, não a cerimónia. O Senhor Abílio, 87 anos, senta-se diante da gravadora e começa: «bunos dies, então. Cá por Miranda levantávamo-nos antes do {2} e íamos com o gado para a bouça, que a terra era pouca e a fome era grande».", es: "En Miranda do Douro, la archivista Dra. Armanda vigila los niveles de sonido y fija el trato: hablar como se habla en casa — el archivo quiere la voz, no la ceremonia. El Sr. Abílio, 87 años, se sienta ante la grabadora y empieza: «bunos dies, entonces. Por aquí, en Miranda, nos levantábamos antes que el gallo e íbamos con el ganado a la bouça, que la tierra era poca y el hambre grande»." },
        { it: "Lá em cima, na bouça, falava-se mirandês — mas ninguém lhe chamava assim: «falávamos {3} — assim lhe chamávamos». O pai dizia «vai buscar las cabras» e dizia «bida» e «nuobo» onde o português põe {4}. Quando conta as histórias aos netos, conta-as em português, que os netos percebem mal; mas os provérbios ficam na lhéngua — «quem não tem {5}, caça com gato».", es: "Allí arriba, en la bouça, se hablaba mirandés — pero nadie lo llamaba así: «hablábamos lhéngua — así le llamábamos». El padre decía «vai buscar las cabras» y decía «bida» y «nuobo» donde el portugués pone v. Cuando cuenta las historias a los nietos, las cuenta en portugués, que los nietos entienden mal; pero los proverbios se quedan en la lhéngua — «quien no tiene perro, caza con gato»." },
      ],
      gaps: [
        { options: ["voz", "vez", "verba"], answer: 0, why: "«O arquivo quer a ___, não a cerimónia»: la voz." },
        { options: ["galo", "gado", "golpe"], answer: 0, why: "«Levantávamo-nos antes do ___»: antes que el gallo." },
        { options: ["lhéngua", "língua", "lenda"], answer: 0, why: "«Assim lhe chamávamos»: lhéngua, el nombre casero del mirandés." },
        { options: ["v", "b", "f"], answer: 0, why: "«Dizia 'bida' onde o português põe ___»: la letra v del portugués." },
        { options: ["cão", "gato", "gado"], answer: 0, why: "«Quem não tem ___, caça com gato»: perro, el proverbio." },
      ],
    },
    {
      id: "cz-pt-c2-10-2", title: "O mais-que-perfeito do Sr. Abílio", titleEs: "El pluscuamperfecto del Sr. Abílio", minutes: 3,
      paragraphs: [
        { it: "A narrativa do Senhor Abílio desliza no mais-que-perfeito simples: «o pai dissera-o mil vezes; o filho não o ouvira uma». O «-ra» é «tinha falado» com quinhentos anos de serviço prestado — a forma que o Norte e as gerações {1} guardam, e que a literatura nunca largou: Camões e os provérbios pensam em «-ra».", es: "La narrativa del Sr. Abílio se desliza en el pluscuamperfecto simple: «o pai dissera-o mil vezes; o filho não o ouvira uma». El «-ra» es «tinha falado» con quinientos años de servicio prestado — la forma que el Norte y las generaciones antiguas guardan, y que la literatura nunca soltó: Camoens y los proverbios piensan en «-ra»." },
        { it: "«Quando eu cheguei, o gado já {2} para a bouça»: «fora» é «tinha ido» numa palavra só. E o «-ra» tem um segundo ofício na boca do povo: serve de {3} — «se o soubesse, fora a pé» quer dizer «iria». O acento escrito separa os tempos parecidos: «falara» (mais-que-perfeito, acento na {4}) contra «falará» (futuro, acento ao {5}). Na voz dos velhos, o «-ra» simples canta-se devagar.", es: "«Cuando yo llegué, el ganado ya se había ido a la bouça»: «fora» es «tinha ido» en una sola palabra. Y el «-ra» tiene un segundo oficio en la boca del pueblo: sirve de condicional — «se o soubesse, fora a pé» quiere decir «iría». El acento escrito separa los tiempos parecidos: «falara» (pluscuamperfecto, acento en la penúltima) contra «falará» (futuro, acento al final). En la voz de los viejos, el «-ra» simple se canta despacio." },
      ],
      gaps: [
        { options: ["antigas", "altas", "atlânticas"], answer: 0, why: "«O Norte e as gerações ___ guardam»: las generaciones antiguas." },
        { options: ["fora", "foi", "era"], answer: 0, why: "«O gado já ___ para a bouça»: fora = tinha ido." },
        { options: ["condicional", "conclusivo", "conciso"], answer: 0, why: "«'Se o soubesse, fora a pé' quer dizer 'iria'»: sirve de condicional popular." },
        { options: ["penúltima", "primeira", "própria"], answer: 0, why: "«'Falara' com acento na ___»: penúltima sílaba." },
        { options: ["fim", "fundo", "frente"], answer: 0, why: "«'Falará' com acento ao ___»: al final, la sílaba final." },
      ],
    },
    {
      id: "cz-pt-c2-10-3", title: "Quando morre um falante", titleEs: "Cuando muere un hablante", minutes: 3,
      paragraphs: [
        { it: "O mirandês é a segunda língua oficial de Portugal: a Lei 7/99, de 29 de janeiro, reconheceu-lhe direitos de cultura e difusão. Tem código ISO próprio, ortografia de 2000 e uns quinze mil falantes no planalto de Miranda do Douro. Foi estudado em 1882 por José Leite de Vasconcelos, o fundador da {1} portuguesa; Amadeu Ferreira traduziu poetas para mirandês e deu-lhe dignidade de literatura.", es: "El mirandés es la segunda lengua oficial de Portugal: la Ley 7/99, de 29 de enero, le reconoció derechos de cultura y difusión. Tiene código ISO propio, ortografía de 2000 y unos quince mil hablantes en la meseta de Miranda do Douro. Fue estudiado en 1882 por José Leite de Vasconcelos, el fundador de la filología portuguesa; Amadeu Ferreira tradujo poetas al mirandés y le dio dignidad de literatura." },
        { it: "A expressão da casa resume o arquivo inteiro: quando morre um falante, morre uma {2} inteira — ninguém a reabre. No Alentejo, o cante — inscrito pela UNESCO em 2014 — estica as vogais como um fado sem {3}. Por isso se grava: para que «bunos dies» possa ainda ser {4} daqui a cem anos. A Dra. Armanda guarda as fitas como quem guarda {5} de família — é exatamente isso que são.", es: "La expresión de la casa resume el archivo entero: cuando muere un hablante, muere una biblioteca entera — nadie vuelve a abrirla. En el Alentejo, el cante — inscrito por la UNESCO en 2014 — estira las vocales como un fado sin guitarra. Por eso se graba: para que «bunos dies» pueda aún ser dicho dentro de cien años. La Dra. Armanda guarda las cintas como quien guarda retratos de familia — exactamente eso son." },
      ],
      gaps: [
        { options: ["filologia", "farmácia", "filosofia"], answer: 0, why: "«José Leite de Vasconcelos, o fundador da ___ portuguesa»: la filología." },
        { options: ["biblioteca", "biografia", "bicicleta"], answer: 0, why: "«Quando morre um falante, morre uma ___ inteira»: una biblioteca entera." },
        { options: ["guitarra", "garganta", "garrafa"], answer: 0, why: "«Um fado sem ___»: sin guitarra, la comparación del cante." },
        { options: ["dito", "dado", "danado"], answer: 0, why: "«Possa ainda ser ___ daqui a cem anos»: todavía dicho." },
        { options: ["retratos", "regalos", "repentes"], answer: 0, why: "«Como quem guarda ___ de família»: retratos de familia." },
      ],
    },
  ],

  "pt-cu-c2-11": [
    {
      id: "cz-pt-c2-11-1", title: "A primeira lei do improviso", titleEs: "La primera ley de la improvisación", minutes: 3,
      paragraphs: [
        { it: "Na garagem transformada em palco na Ribeira do Porto, o Miguel ensina a primeira lei: {1} e acrescentar. O teu parceiro diz «que comprimento!» e tu não corriges: {2}. «— e ainda por cima cumprimento o senhor!» Soam iguais, escrevem-se diferente — e a sala riu com as tripas. O trocadilho é o improviso com emprego fixo.", es: "En la garaje convertida en escenario en la Ribeira de Oporto, Miguel enseña la primera ley: aceptar y añadir. Tu compañero dice «¡qué comprimento!» y tú no corriges: sumas. «— ¡y todavía por encima saludo al señor!» Suenan igual, se escriben distinto — y la sala rio con las tripas. El retruécano es la improvisación con empleo fijo." },
        { it: "E quando a piada falha — digamos que a atiras e ela cai no chão — mudas o chão: a plateia não ri do {3}; ri do que fazes com ele. Cair é gratuito; {4} é que é comédia. Como diz o adágio da casa: a bom entendedor, meia palavra — a outra meia é o {5}.", es: "Y cuando el chiste falla — digamos que lo lanzas y cae al suelo — cambias el suelo: el público no se ríe del fracaso; se ríe de lo que haces con él. Caer es gratis; levantarse es lo que es comedia. Como dice el adagio de la casa: a buen entendedor, media palabra — la otra media es el espectáculo." },
      ],
      gaps: [
        { options: ["aceitar", "acenar", "aceder"], answer: 0, why: "«A primeira lei: ___ e acrescentar»: aceptar." },
        { options: ["somas", "saídas", "silencias"], answer: 0, why: "«Não corriges: ___»: sumas, añades." },
        { options: ["falhanço", "feitiço", "foguetão"], answer: 0, why: "«Não ri do ___; ri do que fazes com ele»: del fracaso." },
        { options: ["levantar", "lembrar", "lamentar"], answer: 0, why: "«Cair é gratuito; ___ é que é comédia»: levantarse." },
        { options: ["espetáculo", "espelho", "espanto"], answer: 0, why: "«A outra meia é o ___»: el espectáculo, el adágio de la casa." },
      ],
    },
    {
      id: "cz-pt-c2-11-2", title: "A piada da repartição", titleEs: "El chiste de la oficina pública", minutes: 3,
      paragraphs: [
        { it: "No Porto, o Fábio tem um clássico das repartições: «sessão» e «seção». Desde o acordo ortográfico, escrevem-se {1} e continuam a soar ao mesmo — uma piada que se faz sozinha e ninguém a {2}. Nas repartições, isso é piada com vínculo: o AO90 é o autor e não assina.", es: "En Oporto, Fábio tiene un clásico de las oficinas públicas: «sessão» y «seção». Desde el acuerdo ortográfico, se escriben diferente y siguen sonando igual — un chiste que se hace solo y nadie lo despide. En las reparticiones, eso es chiste con contrato: el AO90 es el autor y no firma." },
        { it: "«Cumprimento» e «comprimento» seguem a mesma regra: o ouvido ri, o {3} explica. E a derivação jocosa fabrica palavras que o dicionário ainda não viu: «-ice» («mimice», «bobice»), «-astro» («poetastro»), «-arrão» («velharrão»). Todos entendem o que significam sem os ter {4}: é a gramática a trabalhar como {5}. A ambiguidade estrutural faz o resto: «o Zé encontrou o cão e a dona dele» — dele quem?", es: "«Cumprimento» y «comprimento» siguen la misma regla: el oído ríe, el diccionario explica. Y la derivación jocosa fabrica palabras que el diccionario aún no vio: «-ice» («mimice», «bobice»), «-astro» («poetastro»), «-arrão» («velharrão»). Todos entienden lo que significan sin haberlos oído: es la gramática trabajando como humorista. La ambigüedad estructural hace el resto: «o Zé encontrou o cão e a dona dele» — ¿de quién?" },
      ],
      gaps: [
        { options: ["diferente", "difícil", "digital"], answer: 0, why: "«Escrevem-se ___ e continuam a soar ao mesmo»: diferente." },
        { options: ["despede", "descreve", "desmente"], answer: 0, why: "«Uma piada que se faz sozinha e ninguém a ___»: nadie la despide." },
        { options: ["dicionário", "diário", "diretor"], answer: 0, why: "«O ouvido ri, o ___ explica»: el diccionario." },
        { options: ["ouvido", "orado", "ocupado"], answer: 0, why: "«Sem os ter ___»: sin haberlos oído." },
        { options: ["humorista", "historiador", "habitante"], answer: 0, why: "«A gramática a trabalhar como ___»: como humorista." },
      ],
    },
    {
      id: "cz-pt-c2-11-3", title: "Água mole em pedra dura", titleEs: "Agua blanda en piedra dura", minutes: 3,
      paragraphs: [
        { it: "O povo jogava com as palavras antes de haver escolas: as adivinhas eram o futebol das tardes de {1}, e os trava-línguas treinavam a língua dos miúdos. Os provérbios são frases aperfeiçoadas pela aldeia durante {2} anos: «cada porco tem o seu São Martinho»; «água mole em pedra dura, tanto dá até que {3}».", es: "El pueblo jugaba con las palabras antes de que hubiera escuelas: las adivinanzas eran el fútbol de las tardes de invierno, y los trabalenguas entrenaban la lengua de los niños. Los proverbios son frases perfeccionadas por la aldea durante trescientos años: «cada cerdo tiene su San Martín»; «agua blanda en piedra dura, tanto da hasta que perfora»." },
        { it: "No Alentejo, o cante ao desafio põe dois cantores a responder em verso improvisado: quem perde, ganha em {4}. Teófilo Braga compilou esse tesouro popular no século XIX — o folclorista que deu ao jogo de palavras {5}. E a regra do improviso é antiga: aceitar e acrescentar — nunca corrigir o parceiro, porque a piada é dos dois.", es: "En el Alentejo, el cante ao desafio pone a dos cantores a responder en verso improvisado: quien pierde, gana en rima. Teófilo Braga compiló ese tesoro popular en el siglo XIX — el folclorista que le dio archivo al juego de palabras. Y la regla de la improvisación es antigua: aceptar y añadir — nunca corregir al compañero, porque el chiste es de los dos." },
      ],
      gaps: [
        { options: ["inverno", "inquérito", "investimento"], answer: 0, why: "«As adivinhas eram o futebol das tardes de ___»: de invierno." },
        { options: ["trezentos", "trinta", "três"], answer: 0, why: "«Frases aperfeiçoadas pela aldeia durante ___ anos»: trescientos años." },
        { options: ["fura", "freia", "foge"], answer: 0, why: "«Tanto dá até que ___»: hasta que perfora, el refrán." },
        { options: ["rima", "riso", "ronda"], answer: 0, why: "«Quem perde, ganha em ___»: gana en rima." },
        { options: ["arquivo", "argumento", "abrigo"], answer: 0, why: "«O folclorista que deu ao jogo de palavras ___»: archivo." },
      ],
    },
  ],

  "pt-cu-c2-12": [
    {
      id: "cz-pt-c2-12-1", title: "O papel no lixo", titleEs: "El papel a la basura", minutes: 3,
      paragraphs: [
        { it: "Faltam cinco minutos para o discurso e o papel preparado já foi para o lixo — por decisão do próprio homenageado. A presidente do júri, Prof.ª Odete, tinha acabado de anunciar o nome com o elogio de praxe: o júri foi {1} — o que, em matéria de ensaio, quase é um oxímoro. O discurso preparado, confessa ele, soava a agradecimento de {2}.", es: "Faltan cinco minutos para el discurso y el papel preparado ya fue a la basura — por decisión del propio homenajeado. La presidenta del jurado, Prof.ª Odete, acababa de anunciar el nombre con el elogio de rigor: el jurado fue unánime — lo que, en materia de ensayo, casi es un oxímoron. El discurso preparado, confiesa él, sonaba a agradecimiento de sacristía." },
        { it: "O formador Vasco, que veio de propósito, aprova o rasgo: quem lê discursos, esquece-os; quem fala de {3}, fica. A recomendação institucional de Odete é uma só: cite alguém — um discurso de prémio sem {4} é um vinho do Porto sem rolha: entorna-se. E a saída já está combinada: verdade, brevidade e a coragem de {5}.", es: "El formador Vasco, que vino a propósito, aprueba el rasgado: quien lee discursos, los olvida; quien habla de improviso, queda. La recomendación institucional de Odete es una sola: cite a alguien — un discurso de premio sin cita es un oporto sin corcho: se derrama. Y la salida ya está pactada: verdad, brevedad y el valor de sentarse." },
      ],
      gaps: [
        { options: ["unânime", "único", "unilateral"], answer: 0, why: "«O júri foi ___ — quase um oxímoro»: unánime." },
        { options: ["sacristia", "saciedade", "sessão"], answer: 0, why: "«Soava a agradecimento de ___»: de sacristía." },
        { options: ["rasgão", "razão", "repente"], answer: 0, why: "«Quem fala de ___, fica»: de improviso, de rasgão." },
        { options: ["citação", "celebração", "censura"], answer: 0, why: "«Sem ___ é um vinho do Porto sem rolha»: sin cita." },
        { options: ["sentar", "sair", "subir"], answer: 0, why: "«A coragem de ___»: de sentarse, la tríade." },
      ],
    },
    {
      id: "cz-pt-c2-12-2", title: "Citar por dentro", titleEs: "Citar por dentro", minutes: 3,
      paragraphs: [
        { it: "A citação de abertura escolheu-se sozinha: Eduardo Lourenço diz que Portugal é um labirinto de si mesmo — e o discurso pensa começar por aí, sem o {1}, como ele citava os outros: por dentro. A referência entra como {2}, não como ornamento: uma frase de outro, dita como se fosse lembrança nossa.", es: "La cita de apertura se eligió sola: Eduardo Lourenço dice que Portugal es un laberinto de sí mismo — y el discurso piensa empezar por ahí, sin citarlo, como él citaba a los otros: por dentro. La referencia entra como recuerdo, no como ornamento: una frase de otro, dicha como si fuera memoria nuestra." },
        { it: "No Prémio Camões, desde 1989, a língua inteira está na sala: é o único prémio que se dá a uma {3}, não a um autor. Entre os primeiros galardoados: José Craveirinha (1991), o primeiro autor africano; José Saramago (1995); Sophia de Mello Breyner (1999). O júri é comum às duas nações, e a cerimónia {4} pelas capitais da língua. O discurso de aceitação é um género próprio: breve, grato, sem humildade {5} — e termina com um obrigado que não acaba.", es: "En el Premio Camões, desde 1989, la lengua entera está en la sala: es el único premio que se da a una lengua, no a un autor. Entre los primeros galardonados: José Craveirinha (1991), el primer autor africano; José Saramago (1995); Sophia de Mello Breyner (1999). El jurado es común a las dos naciones, y la ceremonia viaja por las capitales de la lengua. El discurso de aceptación es un género propio: breve, agradecido, sin humildad escenificada — y termina con un gracias que no acaba." },
      ],
      gaps: [
        { options: ["citar", "criticar", "copiar"], answer: 0, why: "«Sem o ___, como ele citava os outros»: sin citarlo, por dentro." },
        { options: ["lembrança", "lenda", "liturgia"], answer: 0, why: "«Entra como ___, não como ornamento»: como recuerdo." },
        { options: ["língua", "liga", "legenda"], answer: 0, why: "«O único prémio que se dá a uma ___»: a una lengua." },
        { options: ["viaja", "vigia", "vive"], answer: 0, why: "«A cerimónia ___ pelas capitais da língua»: viaja." },
        { options: ["encenada", "esgotada", "estimada"], answer: 0, why: "«Sem humildade ___»: sin humildad escenificada." },
      ],
    },
    {
      id: "cz-pt-c2-12-3", title: "O obrigado que não acaba", titleEs: "El gracias que no acaba", minutes: 2,
      paragraphs: [
        { it: "O «obrigado» de cerimónia é um e comprido: alonga-se a última {1} como o fado alonga a saudade — «obrigadôô». É o único lugar do discurso onde o alongamento não é vício — é {2}. Agradece-se aos que leram, não aos que aplaudiram: o aplauso vem depois e não se {3}.", es: "El «obrigado» de ceremonia es uno y largo: se alarga la última vocal como el fado alarga la saudade — «obrigadôô». Es el único lugar del discurso donde el alargamiento no es vicio — es firma. Se agradece a los que leyeron, no a los que aplaudieron: el aplauso llega después y no se encarga." },
        { it: "A tríade de fecho está pronta: verdade, brevidade e a coragem de sentar — três elementos soam a verdade; quatro, a {4}. O fecho repete-se com partícula: «ao trabalho, pois: ao trabalho». E «eis» aponta com elegância: «eis o discurso completo». No dia em que fizeres o teu — num jantar, numa aula, num prémio qualquer — lembra-te da {5}: não agradeces por teres ganhado; agradeces por teres sido lido.", es: "La tríada de cierre está lista: verdad, brevedad y el valor de sentarse — tres elementos suenan a verdad; cuatro, a inventario. El cierre se repite con partícula: «ao trabalho, pois: ao trabalho». Y «eis» señala con elegancia: «eis o discurso completo». El día en que hagas el tuyo — en una cena, en una clase, en un premio cualquiera — acuérdate de la regla: no agradeces por haber ganado; agradeces por haber sido leído." },
      ],
      gaps: [
        { options: ["vogal", "volga", "volta"], answer: 0, why: "«Alonga-se a última ___»: la vocal final, «obrigadôô»." },
        { options: ["assinatura", "audácia", "artilharia"], answer: 0, why: "«Não é vício — é ___»: es firma, como en el fado." },
        { options: ["encomenda", "entende", "escreve"], answer: 0, why: "«O aplauso vem depois e não se ___»: no se encarga ni se pide." },
        { options: ["inventário", "inverno", "investida"], answer: 0, why: "«Três soam a verdade; quatro, a ___»: a inventario." },
        { options: ["regra", "rima", "rota"], answer: 0, why: "«Lembra-te da ___»: la regla de agradecer por haber sido leído." },
      ],
    },
  ],
};
