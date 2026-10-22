import type { Situation } from "../../types";

/* ═══ PT · Situaciones reales (v9.39 · PARTE 3d) ════════════════════
   Português EUROPEO de Portugal. Convención: `.it` = portugués (lengua
   de estudio), `.es` = español (interfaz). Escenarios: pastelaria de
   Lisboa, comboio Porto-Lisboa (Campanhã), feira de Barcelos, farmácia
   do Porto, Universidade de Coimbra, arrendamento de quarto em Alfama.
   `exerciseIds` enlaza cada situación con el banco PT_EXERCISES
   (lang/pt/exercises.ts, ids pt-ex-sit-*); el resolvedor global los
   cablea el orquestador.                                        */

export const PT_SITUATIONS: Situation[] = [
  {
    id: "pt-sit-pastelaria", emoji: "🥐", title: "En la pastelería", titleIt: "Na pastelaria", level: "A1",
    intro: "El pequeño-almoço portugués de pastelería: pedir, preguntar el precio y pagar con naturalidad.",
    vocab: [
      { it: "a pastelaria", es: "la pastelería-cafetería" },
      { it: "o pastel de nata", es: "el pastel de nata (hojaldre con crema)" },
      { it: "o pequeno-almoço", es: "el desayuno" },
      { it: "a tosta mista", es: "la tostada mixta (jamón y queso)" },
      { it: "o sumo de laranja", es: "el zumo de naranja" },
      { it: "o balcão", es: "el mostrador" },
      { it: "o troco", es: "el cambio (devolución)" },
      { it: "pagar com multibanco", es: "pagar con tarjeta" },
    ],
    dialogue: [
      { speaker: "Funcionária", it: "Bom dia! Diga, por favor.", es: "¡Buenos días! Diga, por favor." },
      { speaker: "Cliente", it: "Bom dia! Queria um café e uma tosta mista, se faz favor.", es: "¡Buenos días! Quería un café y una tostada mixta, por favor." },
      { speaker: "Funcionária", it: "Para comer aqui ou para levar?", es: "¿Para comer aquí o para llevar?" },
      { speaker: "Cliente", it: "Para levar, por favor. Quanto é?", es: "Para llevar, por favor. ¿Cuánto es?" },
      { speaker: "Funcionária", it: "São quatro euros e vinte cêntimos.", es: "Son cuatro euros con veinte céntimos." },
      { speaker: "Cliente", it: "Aqui tem. Obrigado!", es: "Aquí tiene. ¡Gracias!" },
    ],
    exerciseIds: ["pt-ex-sit-pastelaria-1", "pt-ex-sit-pastelaria-2"],
    roleplay: {
      it: "Vamos simular: eu sou o cliente de uma pastelaria em Lisboa e tu és o funcionário. Toma nota do meu pedido e diz-me o total.",
      es: "Simulemos: soy el cliente de una pastelería de Lisboa y tú eres el empleado. Toma nota de mi pedido y dime el total.",
    },
  },
  {
    id: "pt-sit-comboio", emoji: "🚆", title: "En la taquilla del tren", titleIt: "Na bilheteira do comboio", level: "A2",
    intro: "Comprar un billete de comboio en Campanhã: horarios, ida y vuelta, asientos y plataformas.",
    vocab: [
      { it: "o comboio", es: "el tren" },
      { it: "o bilhete de ida e volta", es: "el billete de ida y vuelta" },
      { it: "a bilheteira", es: "la taquilla" },
      { it: "a plataforma", es: "el andén" },
      { it: "o lugar marcado", es: "el asiento asignado" },
      { it: "o revisor", es: "el revisor" },
      { it: "o atraso", es: "el retraso" },
      { it: "o carro-restaurante", es: "el coche-restaurante" },
    ],
    dialogue: [
      { speaker: "Bilheteira", it: "Boa tarde! Para onde é a viagem?", es: "¡Buenas tardes! ¿Hacia dónde es el viaje?" },
      { speaker: "Viajante", it: "Para Lisboa, por favor. O próximo Alfa Pendular sai a que horas?", es: "Para Lisboa, por favor. ¿A qué hora sale el próximo Alfa Pendular?" },
      { speaker: "Bilheteira", it: "Às cinco e meia, da plataforma seis. Deseja ida e volta?", es: "A las cinco y media, del andén seis. ¿Desea ida y vuelta?" },
      { speaker: "Viajante", it: "Sim, para domingo à tarde. A que horas chegamos a Lisboa?", es: "Sí, para el domingo por la tarde. ¿A qué hora llegamos a Lisboa?" },
      { speaker: "Bilheteira", it: "Às vinte e trinta, se não houver atrasos. São sessenta e dois euros, lugar junto à janela no carro seis.", es: "A las veinte treinta, si no hay retrasos. Son sesenta y dos euros, asiento junto a la ventana en el coche seis." },
      { speaker: "Viajante", it: "Perfeito, aqui tem. Obrigado!", es: "Perfecto, aquí tiene. ¡Gracias!" },
    ],
    exerciseIds: ["pt-ex-sit-comboio-1", "pt-ex-sit-comboio-2"],
    roleplay: {
      it: "Role-play: eu compro um bilhete na bilheteira da estação de Campanhã, no Porto, e tu és a funcionária. Pergunta-me para onde viajo e oferece-me opções.",
      es: "Role-play: compro un billete en la taquilla de la estación de Campanhã, en Oporto, y tú eres la empleada. Pregúntame adónde viajo y ofréceme opciones.",
    },
  },
  {
    id: "pt-sit-feira", emoji: "🧺", title: "En el mercado de Barcelos", titleIt: "Na feira de Barcelos", level: "A2",
    intro: "Regatear en la feria semanal más famosa de Portugal: loza, gallos y descuentos con arte.",
    vocab: [
      { it: "a feira", es: "el mercado (semanal)" },
      { it: "a barraca", es: "el puesto" },
      { it: "o vendedor / a vendedora", es: "el vendedor / la vendedora" },
      { it: "regatear", es: "regatear" },
      { it: "a louça", es: "la loza" },
      { it: "o galo de Barcelos", es: "el gallo de Barcelos" },
      { it: "o desconto", es: "el descuento" },
      { it: "embrulhar", es: "envolver (un paquete)" },
    ],
    dialogue: [
      { speaker: "Vendedora", it: "Bom dia, senhora! Olhe que louça tão bonita, feita à mão aqui em Barcelos.", es: "¡Buenos días, señora! Mire qué loza tan bonita, hecha a mano aquí en Barcelos." },
      { speaker: "Cliente", it: "É realmente linda. Quanto custa este prato?", es: "Es realmente bonita. ¿Cuánto cuesta este plato?" },
      { speaker: "Vendedora", it: "O prato grande são oito euros, mas se levar dois, faço por quinze.", es: "El plato grande son ocho euros, pero si lleva dos, se lo dejo en quince." },
      { speaker: "Cliente", it: "E o galo? A minha neta adora a lenda.", es: "¿Y el gallo? A mi nieta le encanta la leyenda." },
      { speaker: "Vendedora", it: "O galo são dez euros. Faço-lhe o conjunto — dois pratos e o galo — por vinte e dois.", es: "El gallo son diez euros. Le hago el conjunto — dos platos y el gallo — por veintidós." },
      { speaker: "Cliente", it: "Está bem, está feito. Pode embrulhar para viagem, se faz favor?", es: "Está bien, trato hecho. ¿Puede envolverlo para el viaje, por favor?" },
    ],
    exerciseIds: ["pt-ex-sit-feira-1", "pt-ex-sit-feira-2"],
    roleplay: {
      it: "Role-play: eu sou turista na feira semanal de Barcelos e tu és a vendedora de louça. Recomenda-me peças e deixa-te regatear um pouco.",
      es: "Role-play: soy turista en el mercado semanal de Barcelos y tú eres la vendedora de loza. Recomiéndame piezas y déjate regatear un poco.",
    },
  },
  {
    id: "pt-sit-farmacia", emoji: "💊", title: "En la farmacia", titleIt: "Na farmácia", level: "A2",
    intro: "Describir síntomas y entender consejos: el portugués que esperas no necesitar nunca (y la trampa de la «constipação»).",
    vocab: [
      { it: "a farmácia", es: "la farmacia" },
      { it: "a receita", es: "la receta" },
      { it: "o comprimido", es: "la pastilla" },
      { it: "o xarope", es: "el jarabe" },
      { it: "a febre", es: "la fiebre" },
      { it: "a dor de garganta", es: "el dolor de garganta" },
      { it: "a constipação", es: "el resfriado (¡no es estreñimiento!)" },
      { it: "o centro de saúde", es: "el centro de salud" },
    ],
    dialogue: [
      { speaker: "Farmacêutica", it: "Boa tarde! Em que posso ajudar?", es: "¡Buenas tardes! ¿En qué puedo ayudar?" },
      { speaker: "Cliente", it: "Tenho uma dor de garganta forte e um pouco de febre.", es: "Tengo un dolor de garganta fuerte y algo de fiebre." },
      { speaker: "Farmacêutica", it: "Já foi ao médico? A febre é de quantos graus?", es: "¿Ya fue al médico? ¿La fiebre es de cuántos grados?" },
      { speaker: "Cliente", it: "Ainda não fui. A febre é de trinta e oito graus.", es: "Todavía no fui. La fiebre es de treinta y ocho grados." },
      { speaker: "Farmacêutica", it: "Então leve este xarope e um analgésico: uma colher de sopa, três vezes ao dia, depois das refeições. Se não melhorar em dois dias, vá ao centro de saúde.", es: "Entonces lleve este jarabe y un analgésico: una cucharada, tres veces al día, después de las comidas. Si no mejora en dos días, vaya al centro de salud." },
      { speaker: "Cliente", it: "Está bem, obrigado. Melhoras para mim!", es: "Está bien, gracias. ¡Que me mejore!" },
    ],
    exerciseIds: ["pt-ex-sit-farmacia-1", "pt-ex-sit-farmacia-2"],
    roleplay: {
      it: "Role-play: eu entro numa farmácia do Porto com sintomas de constipação e tu és o farmacêutico. Pergunta-me o que sinto e aconselha-me.",
      es: "Role-play: entro en una farmacia de Oporto con síntomas de resfriado y tú eres el farmacéutico. Pregúntame qué siento y aconséjame.",
    },
  },
  {
    id: "pt-sit-coimbra", emoji: "🎓", title: "En la universidad de Coimbra", titleIt: "Na Universidade de Coimbra", level: "B1",
    intro: "Matricularse, elegir asignaturas y descubrir la vida académica de la ciudad más estudiantil de Portugal.",
    vocab: [
      { it: "a matrícula", es: "la matrícula" },
      { it: "a faculdade de letras", es: "la facultad de letras" },
      { it: "o estudante Erasmus", es: "el estudiante Erasmus" },
      { it: "a aula", es: "la clase" },
      { it: "o horário", es: "el horario" },
      { it: "a propina", es: "la tasa universitaria" },
      { it: "a praxe", es: "la praxe (tradición estudiantil)" },
      { it: "a Biblioteca Joanina", es: "la Biblioteca Joanina" },
    ],
    dialogue: [
      { speaker: "Funcionária", it: "Bom dia! A sua carta de aceitação, se faz favor.", es: "¡Buenos días! Su carta de aceptación, por favor." },
      { speaker: "Estudante", it: "Aqui está. Vim tratar da matrícula no mestrado de letras.", es: "Aquí está. Vengo a tramitar la matrícula del máster de letras." },
      { speaker: "Funcionária", it: "Já pagou a propina do primeiro semestre?", es: "¿Ya pagó la tasa del primer semestre?" },
      { speaker: "Estudante", it: "Paguei na passada semana. Preciso de mais alguma coisa?", es: "La pagué la semana pasada. ¿Necesito algo más?" },
      { speaker: "Funcionária", it: "Falta-lhe apenas escolher as disciplinas no portal até sexta-feira. Bem-vindo a Coimbra!", es: "Solo le falta elegir las asignaturas en el portal antes del viernes. ¡Bienvenido a Coimbra!" },
      { speaker: "Estudante", it: "Muito obrigado! Vou já inscrever as disciplinas e depois visitar a Biblioteca Joanina.", es: "¡Muchas gracias! Voy a inscribir las asignaturas ahora mismo y después visitaré la Biblioteca Joanina." },
    ],
    exerciseIds: ["pt-ex-sit-coimbra-1", "pt-ex-sit-coimbra-2"],
    roleplay: {
      it: "Role-play: eu sou estudante Erasmus e tu trabalhas nos serviços académicos da Universidade de Coimbra. Ajuda-me a matricular-me e a escolher disciplinas.",
      es: "Role-play: soy estudiante Erasmus y tú trabajas en los servicios académicos de la Universidad de Coimbra. Ayúdame a matricularme y a elegir asignaturas.",
    },
  },
  {
    id: "pt-sit-aluguer", emoji: "🏠", title: "Alquilar una habitación en Lisboa", titleIt: "Arrendar um quarto em Lisboa", level: "B1",
    intro: "Renda, fianza, contrato y la clásica frase de la casera: «o quarto é muito procurado».",
    vocab: [
      { it: "o quarto em arrendamento", es: "la habitación en alquiler" },
      { it: "a renda", es: "el alquiler (cantidad)" },
      { it: "o contrato", es: "el contrato" },
      { it: "a caução", es: "la fianza" },
      { it: "as despesas", es: "los gastos (agua, luz…)" },
      { it: "mobiliado", es: "amueblado" },
      { it: "a senhoria / o senhorio", es: "la casera / el casero" },
      { it: "o anúncio", es: "el anuncio" },
    ],
    dialogue: [
      { speaker: "Senhoria", it: "Boa tarde! Viu o anúncio do quarto em Alfama?", es: "¡Buenas tardes! ¿Vio el anuncio de la habitación en Alfama?" },
      { speaker: "Inquilina", it: "Sim, venho visitá-lo. A renda é de quinhentos euros, não é?", es: "Sí, vengo a verla. El alquiler es de quinientos euros, ¿verdad?" },
      { speaker: "Senhoria", it: "Certo, com as despesas de água incluídas. O quarto é mobiliado e tem vista para o rio.", es: "Cierto, con los gastos de agua incluidos. La habitación está amueblada y tiene vistas al río." },
      { speaker: "Inquilina", it: "E a casa de banho é partilhada ou é só para o quarto?", es: "¿Y el cuarto de baño es compartido o es solo para la habitación?" },
      { speaker: "Senhoria", it: "É partilhada com mais dois inquilinos. A caução é de dois meses e o contrato é de um ano, renovável.", es: "Es compartido con dos inquilinos más. La fianza es de dos meses y el contrato es de un año, renovable." },
      { speaker: "Inquilina", it: "Parece-me bem. Posso pensar até amanhã?", es: "Me parece bien. ¿Puedo pensarlo hasta mañana?" },
      { speaker: "Senhoria", it: "Claro, mas não demore: o quarto é muito procurado.", es: "Claro, pero no se demore: la habitación es muy solicitada." },
    ],
    exerciseIds: ["pt-ex-sit-aluguer-1", "pt-ex-sit-aluguer-2"],
    roleplay: {
      it: "Role-play: tu és a senhoria de um quarto em Alfama e eu sou a inquilina interessada. Mostra-me o quarto e responde às minhas perguntas.",
      es: "Role-play: tú eres la casera de una habitación en Alfama y yo la inquilina interesada. Muéstrame la habitación y responde a mis preguntas.",
    },
  },
];
