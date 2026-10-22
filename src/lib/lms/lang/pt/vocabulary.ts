import type { VocabWord, WordCategory } from "../../types";

/* ── Vocabulário · português EUROPEU (PT→ES) · v9.39 ─────────────────
   Diccionario de aprendizaje del portugués de Portugal (autocarro,
   comboio, pequeno-almoço, telemóvel, casa de banho…; nunca
   brasileñismos). Campo `.it` = portugués (lengua de estudio),
   `.es` = español. Convención de `pron` (re-escritura fonética para
   hispanohablantes, estilo del archivo IT):
   · vocal tónica marcada con acento español (á, é, í, ó, ú);
   · -o final átona → u (livro → lívru); -e final átona → i (chave → shávi);
   · ch portuguesa = "sh" inglesa (chuva → shúva); j / g(e,i) = y suave;
   · lh = ll (trabalho → trabállu); nh = ñ (vinho → víñu);
   · -ção = -ción (estação → istación); -ão suelto = "aun" (pão → paun);
   · ã = an nasal (irmã → irmán); -em final = eim nasal (viagem → viáyem);
   · s final = sh suave (sapatos → sapatúsh); z final = s (feliz → felís);
   · r inicial = rr fuerte (rua → rrúa); ç = ss (preço → préssu);
   · x = sh (peixe → péishi).                                        */

const W = (
  id: string, it: string, es: string, pron: string,
  type: VocabWord["type"], cat: WordCategory, level: VocabWord["level"],
  example: { it: string; es: string },
  extra?: Partial<Omit<VocabWord, "id" | "it" | "es" | "pron" | "type" | "cat" | "level" | "example">>
): VocabWord => ({ id, it, es, pron, type, cat, level, example, ...extra });

export const PT_VOCAB: VocabWord[] = [
  /* saluti */
  W("pt-w-ola", "olá", "hola", "olá", "interiezione", "saluti", "A1", { it: "Olá! Tudo bem contigo?", es: "¡Hola! ¿Todo bien contigo?" }, { ipa: "/ɔˈla/", freq: 1, syn: ["oi (coloquial)"] }),
  W("pt-w-bom-dia", "bom dia", "buenos días", "bon día", "espressione", "saluti", "A1", { it: "Bom dia, senhora Ferreira!", es: "¡Buenos días, señora Ferreira!" }, { freq: 1, related: ["boa tarde", "boa noite"] }),
  W("pt-w-boa-tarde", "boa tarde", "buenas tardes", "bua tárdi", "espressione", "saluti", "A1", { it: "Boa tarde! Ainda está aberto?", es: "¡Buenas tardes! ¿Sigue abierto?" }, { freq: 1 }),
  W("pt-w-boa-noite", "boa noite", "buenas noches", "bua nóiti", "espressione", "saluti", "A1", { it: "Boa noite, durma bem.", es: "Buenas noches, duerme bien." }, { related: ["bom dia"] }),
  W("pt-w-adeus", "adeus", "adiós", "adéus", "espressione", "saluti", "A1", { it: "Adeus, até amanhã!", es: "¡Adiós, hasta mañana!" }, { related: ["até logo"] }),
  W("pt-w-obrigado", "obrigado", "gracias", "obrigádu", "espressione", "saluti", "A1", { it: "Muito obrigado pela ajuda!", es: "¡Muchas gracias por la ayuda!" }, { freq: 1, note: "Concuerda con quien habla: un hombre dice obrigado, una mujer dice obrigada. La respuesta es de nada ou não tem de quê." }),
  W("pt-w-por-favor", "por favor", "por favor", "pur favór", "espressione", "saluti", "A1", { it: "Um café, por favor.", es: "Un café, por favor." }, { freq: 1, syn: ["se faz favor"] }),
  W("pt-w-desculpe", "desculpe", "disculpe / perdón", "dishcúlpi", "espressione", "saluti", "A1", { it: "Desculpe, onde é a estação?", es: "Disculpe, ¿dónde está la estación?" }, { related: ["desculpa (informal)"] }),

  /* famiglia */
  W("pt-w-mae", "mãe", "madre / mamá", "mai", "sostantivo", "famiglia", "A1", { it: "A minha mãe cozinha muito bem.", es: "Mi madre cocina muy bien." }, { gender: "f", plural: "mães", ipa: "/mɐ̃j/", syn: ["mamã"], note: "Vocal nasal; el plural también es irregular (mães)." }),
  W("pt-w-pai", "pai", "padre / papá", "pái", "sostantivo", "famiglia", "A1", { it: "O meu pai trabalha no Porto.", es: "Mi padre trabaja en Oporto." }, { gender: "m", plural: "pais", syn: ["papá"], note: "Cuidado: os pais = los padres, pero o país = el país (con acento)." }),
  W("pt-w-irmao", "irmão", "hermano", "irmaun", "sostantivo", "famiglia", "A1", { it: "Tenho um irmão e duas irmãs.", es: "Tengo un hermano y dos hermanas." }, { gender: "m", plural: "irmãos", note: "Plural en -ãos (como mão → mãos)." }),
  W("pt-w-irma", "irmã", "hermana", "irmán", "sostantivo", "famiglia", "A1", { it: "A minha irmã chama-se Leonor.", es: "Mi hermana se llama Leonor." }, { gender: "f", plural: "irmãs", note: "ã = vocal nasal (suena como an nasal)." }),
  W("pt-w-filho", "filho", "hijo", "fíllu", "sostantivo", "famiglia", "A1", { it: "O filho deles tem cinco anos.", es: "Su hijo tiene cinco años." }, { gender: "m", plural: "filhos", ant: ["pai"] }),
  W("pt-w-avo", "avó", "abuela", "avó", "sostantivo", "famiglia", "A1", { it: "A avó faz o bolo de laranja.", es: "La abuela hace el pastel de naranja." }, { gender: "f", plural: "avós", note: "En Portugal el acento distingue: avó (agudo) = abuela; avô (circunflejo) = abuelo. El plural avós vale para los dos." }),
  W("pt-w-mulher", "mulher", "esposa / mujer", "murlhér", "sostantivo", "famiglia", "A2", { it: "A minha mulher é enfermeira.", es: "Mi esposa es enfermera." }, { gender: "f", plural: "mulheres", ant: ["marido"] }),
  W("pt-w-marido", "marido", "marido / esposo", "marídu", "sostantivo", "famiglia", "A2", { it: "O marido da Ana é simpático.", es: "El marido de Ana es simpático." }, { gender: "m", plural: "maridos" }),
  W("pt-w-familia", "família", "familia", "família", "sostantivo", "famiglia", "A1", { it: "A família junta-se ao domingo.", es: "La familia se reúne los domingos." }, { gender: "f", plural: "famílias", note: "Ao domingo = los domingos, construcción muy portuguesa." }),

  /* casa */
  W("pt-w-casa", "casa", "casa", "káza", "sostantivo", "casa", "A1", { it: "A casa é pequena mas acolhedora.", es: "La casa es pequeña pero acogedora." }, { gender: "f", plural: "casas", freq: 1 }),
  W("pt-w-cozinha", "cozinha", "cocina", "cuzíña", "sostantivo", "casa", "A1", { it: "A cozinha é o coração da casa.", es: "La cocina es el corazón de la casa." }, { gender: "f", plural: "cozinhas" }),
  W("pt-w-quarto", "quarto", "habitación / cuarto", "cuártu", "sostantivo", "casa", "A1", { it: "O meu quarto tem uma janela grande.", es: "Mi habitación tiene una ventana grande." }, { gender: "m", plural: "quartos", note: "Quarto también significa cuarto (1/4): um quarto de hora." }),
  W("pt-w-casa-de-banho", "casa de banho", "baño", "káza de bánu", "locuzione", "casa", "A2", { it: "Onde é a casa de banho, por favor?", es: "¿Dónde está el baño, por favor?" }, { gender: "f", plural: "casas de banho", freq: 1, note: "Término de Portugal para el baño: una de las palabras que distinguen al portugués europeo." }),
  W("pt-w-porta", "porta", "puerta", "pórta", "sostantivo", "casa", "A1", { it: "Fecha a porta, por favor!", es: "¡Cierra la puerta, por favor!" }, { gender: "f", plural: "portas" }),
  W("pt-w-chave", "chave", "llave", "shávi", "sostantivo", "casa", "A1", { it: "Perdi as chaves de casa!", es: "¡He perdido las llaves de casa!" }, { gender: "f", plural: "chaves", ipa: "/ˈʃavɨ/", note: "La ch portuguesa suena como la sh inglesa: chave = shávi." }),
  W("pt-w-cama", "cama", "cama", "káma", "sostantivo", "casa", "A1", { it: "Vou para a cama cedo.", es: "Me voy a la cama temprano." }, { gender: "f", plural: "camas", note: "En Portugal se dice vou para a cama (con para, como ir para a cama)." }),
  W("pt-w-janela", "janela", "ventana", "yanéla", "sostantivo", "casa", "A1", { it: "Abre a janela, está calor.", es: "Abre la ventana, hace calor." }, { gender: "f", plural: "janelas" }),

  /* alimentazione */
  W("pt-w-pao", "pão", "pan", "paun", "sostantivo", "alimentazione", "A1", { it: "Um quilo de pão, por favor.", es: "Un kilo de pan, por favor." }, { gender: "m", plural: "pães", ipa: "/pɐ̃w̃/", freq: 1, note: "Plural irregular: pães (como cães)." }),
  W("pt-w-agua", "água", "agua", "água", "sostantivo", "alimentazione", "A1", { it: "Um copo de água, se faz favor.", es: "Un vaso de agua, por favor." }, { gender: "f", plural: "águas", freq: 1 }),
  W("pt-w-cafe", "café", "café", "café", "sostantivo", "alimentazione", "A1", { it: "Um café e uma água, por favor.", es: "Un café y un agua, por favor." }, { gender: "m", plural: "cafés", freq: 1 }),
  W("pt-w-queijo", "queijo", "queso", "kéiyu", "sostantivo", "alimentazione", "A1", { it: "O queijo da Serra é excelente.", es: "El queso de la Serra (da Estrela) es excelente." }, { gender: "m", plural: "queijos", note: "j portuguesa = y suave (queijo = kéiyu)." }),
  W("pt-w-vinho", "vinho", "vino", "víñu", "sostantivo", "alimentazione", "A1", { it: "Um copo de vinho verde.", es: "Una copa de vino verde." }, { gender: "m", plural: "vinhos", note: "El vinho verde es un vino joven del Miño, tradición de Portugal." }),
  W("pt-w-fruta", "fruta", "fruta", "frúta", "sostantivo", "alimentazione", "A1", { it: "Como fruta todos os dias.", es: "Como fruta todos los días." }, { gender: "f", freq: 2 }),
  W("pt-w-carne", "carne", "carne", "cárni", "sostantivo", "alimentazione", "A2", { it: "Não como carne.", es: "No como carne." }, { gender: "f" }),
  W("pt-w-peixe", "peixe", "pescado / pez", "péishi", "sostantivo", "alimentazione", "A2", { it: "O bacalhau é o peixe mais português.", es: "El bacalao es el pescado más portugués." }, { gender: "m", plural: "peixes", note: "x portuguesa = sh: peixe = péishi. Como en italiano, animal vivo y alimento se traducen por la misma palabra." }),
  W("pt-w-polvo", "polvo", "pulpo", "pólvu", "sostantivo", "alimentazione", "B1", { it: "Comi polvo à lagareiro no Algarve.", es: "Comí pulpo à lagareiro en el Algarve." }, { gender: "m", plural: "polvos", ff: true, note: "Falso amigo: en portugués polvo es el animal (pulpo); el «polvo» español (dust) se dice pó." }),

  /* ristorante */
  W("pt-w-restaurante", "restaurante", "restaurante", "rristauránti", "sostantivo", "ristorante", "A1", { it: "Reservei uma mesa no restaurante.", es: "Reservé una mesa en el restaurante." }, { gender: "m", plural: "restaurantes" }),
  W("pt-w-ementa", "ementa", "menú / carta", "iménta", "sostantivo", "ristorante", "A2", { it: "Posso ver a ementa, se faz favor?", es: "¿Puedo ver la carta, por favor?" }, { gender: "f", plural: "ementas", note: "En Portugal la carta del restaurante se llama ementa." }),
  W("pt-w-empregado", "empregado de mesa", "camarero", "imprigádu de méza", "sostantivo", "ristorante", "A2", { it: "Empregado de mesa! A conta, se faz favor.", es: "¡Camarero! La cuenta, por favor." }, { gender: "m", plural: "empregados de mesa" }),
  W("pt-w-conta", "conta", "cuenta", "cónta", "sostantivo", "ristorante", "A1", { it: "A conta, por favor.", es: "La cuenta, por favor." }, { gender: "f", plural: "contas", freq: 2 }),
  W("pt-w-sobremesa", "sobremesa", "postre", "súbrriméza", "sostantivo", "ristorante", "A2", { it: "Que sobremesa têm hoje?", es: "¿Qué postre tienen hoy?" }, { gender: "f", plural: "sobremesas", ff: true, note: "Falso amigo: en portugués sobremesa es el postre; la sobremesa conversacional española no tiene nombre propio." }),
  W("pt-w-talheres", "talheres", "cubiertos", "taliéresh", "sostantivo", "ristorante", "A2", { it: "Faltam talheres na mesa.", es: "Faltan cubiertos en la mesa." }, { gender: "m", plural: "talheres", note: "Palabra colectiva portuguesa; la s final suena sh." }),

  /* compras */
  W("pt-w-loja", "loja", "tienda", "lóya", "sostantivo", "compras", "A1", { it: "A loja abre às nove.", es: "La tienda abre a las nueve." }, { gender: "f", plural: "lojas" }),
  W("pt-w-preco", "preço", "precio", "préssu", "sostantivo", "compras", "A1", { it: "Qual é o preço deste casaco?", es: "¿Cuál es el precio de este abrigo?" }, { gender: "m", plural: "preços", freq: 2, note: "ç = ss suave (preço = préssu)." }),
  W("pt-w-comprar", "comprar", "comprar", "komprár", "verbo", "compras", "A1", { it: "Quero comprar uma lembrança.", es: "Quiero comprar un recuerdo." }, { ant: ["vender"] }),
  W("pt-w-custar", "custar", "costar", "custár", "verbo", "compras", "A1", { it: "Quanto custa este dicionário?", es: "¿Cuánto cuesta este diccionario?" }),
  W("pt-w-pagar", "pagar", "pagar", "pagár", "verbo", "compras", "A1", { it: "Pago com multibanco.", es: "Pago con tarjeta." }, { freq: 2, note: "El multibanco es la red de cajeros y pagos de Portugal." }),
  W("pt-w-desconto", "desconto", "descuento", "dishcóntu", "sostantivo", "compras", "A2", { it: "Há um desconto de vinte por cento.", es: "Hay un descuento del veinte por ciento." }, { gender: "m", plural: "descontos" }),

  /* transporte */
  W("pt-w-comboio", "comboio", "tren", "combóiu", "sostantivo", "transporte", "A1", { it: "O comboio para o Porto parte às oito.", es: "El tren a Oporto sale a las ocho." }, { gender: "m", plural: "comboios", freq: 2, note: "La palabra del portugués de Portugal para el ferrocarril: en Portugal se viaja de comboio." }),
  W("pt-w-autocarro", "autocarro", "autobús", "autocárro", "sostantivo", "transporte", "A1", { it: "O autocarro está atrasado.", es: "El autobús va con retraso." }, { gender: "m", plural: "autocarros", freq: 2, note: "Palabra de Portugal para el transporte urbano." }),
  W("pt-w-bilhete", "bilhete", "billete / boleto", "biliéti", "sostantivo", "transporte", "A1", { it: "Um bilhete para Coimbra, se faz favor.", es: "Un billete para Coimbra, por favor." }, { gender: "m", plural: "bilhetes" }),
  W("pt-w-estacao", "estação", "estación", "istación", "sostantivo", "transporte", "A1", { it: "A estação fica perto do hotel.", es: "La estación está cerca del hotel." }, { gender: "f", plural: "estações", note: "-ção = -ción española (con la misma pronunciación nasal)." }),
  W("pt-w-carro", "carro", "coche / carro", "cárro", "sostantivo", "transporte", "A1", { it: "O carro está estacionado ali.", es: "El coche está aparcado allí." }, { gender: "m", plural: "carros" }),
  W("pt-w-rua", "rua", "calle", "rrúa", "sostantivo", "transporte", "A1", { it: "Esta rua é muito movimentada.", es: "Esta calle tiene mucho tráfico." }, { gender: "f", plural: "ruas", note: "La r inicial siempre es fuerte: rua = rrúa." }),
  W("pt-w-paragem", "paragem", "parada", "paráyem", "sostantivo", "transporte", "A2", { it: "Desço na próxima paragem.", es: "Me bajo en la próxima parada." }, { gender: "f", plural: "paragens", note: "La paragem es la parada del autobús (palabra de Portugal)." }),

  /* viaggi */
  W("pt-w-viagem", "viagem", "viaje", "viáyem", "sostantivo", "viaggi", "A2", { it: "Boa viagem!", es: "¡Buen viaje!" }, { gender: "f", plural: "viagens", note: "Las palabras en -gem hacen el plural en -gens (viagens), como -ción → -ciones." }),
  W("pt-w-mala", "mala", "maleta", "mála", "sostantivo", "viaggi", "A2", { it: "Fiz a mala ontem à noite.", es: "Hice la maleta anoche." }, { gender: "f", plural: "malas" }),
  W("pt-w-aeroporto", "aeroporto", "aeropuerto", "aeropórtu", "sostantivo", "viaggi", "A2", { it: "O aeroporto fica longe do centro.", es: "El aeropuerto está lejos del centro." }, { gender: "m", plural: "aeroportos" }),
  W("pt-w-voo", "voo", "vuelo", "vó", "sostantivo", "viaggi", "A2", { it: "O voo tem uma hora de atraso.", es: "El vuelo tiene una hora de retraso." }, { gender: "m", plural: "voos", note: "Ortografía con dos vocales: voo, voos (el plural no cambia la palabra)." }),
  W("pt-w-passaporte", "passaporte", "pasaporte", "passapórti", "sostantivo", "viaggi", "A2", { it: "O passaporte, se faz favor.", es: "El pasaporte, por favor." }, { gender: "m", plural: "passaportes" }),
  W("pt-w-reservar", "reservar", "reservar", "rrizervár", "verbo", "viaggi", "A2", { it: "Quero reservar um quarto duplo.", es: "Quiero reservar una habitación doble." }),

  /* hotel */
  W("pt-w-hotel", "hotel", "hotel", "otél", "sostantivo", "hotel", "A2", { it: "O hotel tem vista para o rio.", es: "El hotel tiene vistas al río." }, { gender: "m", plural: "hotéis", note: "h muda; plural irregular con acento: hotéis (como país → países)." }),
  W("pt-w-reserva", "reserva", "reserva", "rrizérva", "sostantivo", "hotel", "A2", { it: "Tenho uma reserva em nome de Silva.", es: "Tengo una reserva a nombre de Silva." }, { gender: "f", plural: "reservas" }),
  W("pt-w-pequeno-almoco", "pequeno-almoço", "desayuno", "pequénu-almóssu", "sostantivo", "hotel", "A2", { it: "O pequeno-almoço está incluído?", es: "¿Está incluido el desayuno?" }, { gender: "m", plural: "pequenos-almoços", freq: 2, note: "La palabra portuguesa para la primera comida del día: o pequeno-almoço." }),
  W("pt-w-rececao", "receção", "recepción", "rriséción", "sostantivo", "hotel", "A2", { it: "Pergunto na receção.", es: "Pregunto en recepción." }, { gender: "f", plural: "receções", note: "Desde la reforma ortográfica se escribe receção (sin la p antigua)." }),
  W("pt-w-estadia", "estadia", "estancia / estadía", "estádia", "sostantivo", "hotel", "A2", { it: "Uma estadia de três noites em Lisboa.", es: "Una estancia de tres noches en Lisboa." }, { gender: "f", plural: "estadias" }),

  /* salud */
  W("pt-w-medico", "médico", "médico / doctor", "médiku", "sostantivo", "salud", "A2", { it: "Tenho de ir ao médico.", es: "Tengo que ir al médico." }, { gender: "m", plural: "médicos" }),
  W("pt-w-farmacia", "farmácia", "farmacia", "farmásia", "sostantivo", "salud", "A2", { it: "Há uma farmácia aqui perto?", es: "¿Hay una farmacia aquí cerca?" }, { gender: "f", plural: "farmácias" }),
  W("pt-w-doente", "doente", "enfermo", "duénti", "aggettivo", "salud", "A2", { it: "Estou doente, hoje não vou trabalhar.", es: "Estoy enfermo, hoy no voy a trabajar." }, { ant: ["saudável"] }),
  W("pt-w-dor", "dor", "dolor", "dór", "sostantivo", "salud", "A2", { it: "Tenho dores de cabeça.", es: "Tengo dolores de cabeza." }, { gender: "f", plural: "dores" }),
  W("pt-w-febre", "febre", "fiebre", "fébri", "sostantivo", "salud", "A2", { it: "Tenho febre desde ontem.", es: "Tengo fiebre desde ayer." }, { gender: "f" }),
  W("pt-w-remedio", "remédio", "medicina / remedio", "rrimédiu", "sostantivo", "salud", "A2", { it: "Tomo o remédio depois do jantar.", es: "Tomo la medicina después de la cena." }, { gender: "m", plural: "remédios", syn: ["medicamento"] }),

  /* lavoro */
  W("pt-w-trabalho", "trabalho", "trabajo", "trabállu", "sostantivo", "lavoro", "B1", { it: "Procuro trabalho em Lisboa.", es: "Busco trabajo en Lisboa." }, { gender: "m", plural: "trabalhos", ipa: "/tɾɐˈβaʎu/", freq: 2, syn: ["emprego"], note: "lh = ll española (trabalho = trabállu)." }),
  W("pt-w-reuniao", "reunião", "reunión", "rrunión", "sostantivo", "lavoro", "B1", { it: "A reunião começa às dez.", es: "La reunión empieza a las diez." }, { gender: "f", plural: "reuniões", note: "Plural en -ões: reunião → reuniões." }),
  W("pt-w-colega", "colega", "colega", "coléga", "sostantivo", "lavoro", "B1", { it: "O meu colega está de férias.", es: "Mi colega está de vacaciones." }, { gender: "m", plural: "colegas", note: "Una sola forma para masculino y femenino (o colega / a colega)." }),
  W("pt-w-salario", "salário", "sueldo / salario", "saláriu", "sostantivo", "lavoro", "B1", { it: "O salário não é alto.", es: "El sueldo no es alto." }, { gender: "m", plural: "salários" }),
  W("pt-w-entrevista", "entrevista de emprego", "entrevista de trabajo", "entrevísta dimprégu", "sostantivo", "lavoro", "B1", { it: "Amanhã tenho uma entrevista de emprego.", es: "Mañana tengo una entrevista de trabajo." }, { gender: "f", plural: "entrevistas de emprego" }),
  W("pt-w-contrato", "contrato", "contrato", "kontrátu", "sostantivo", "lavoro", "B1", { it: "Assinei um contrato de um ano.", es: "Firmé un contrato de un año." }, { gender: "m", plural: "contratos" }),
  W("pt-w-oficina", "oficina", "taller", "oficína", "sostantivo", "lavoro", "B1", { it: "O carro está na oficina.", es: "El coche está en el taller." }, { gender: "f", plural: "oficinas", ff: true, note: "Falso amigo: a oficina portuguesa es el taller donde se arreglan coches; la oficina administrativa española es o escritório." }),

  /* studi */
  W("pt-w-escola", "escola", "escuela", "escóla", "sostantivo", "studi", "A1", { it: "As crianças vão à escola a pé.", es: "Los niños van a la escuela a pie." }, { gender: "f", plural: "escolas" }),
  W("pt-w-universidade", "universidade", "universidad", "universidádi", "sostantivo", "studi", "A2", { it: "Estudo na Universidade de Coimbra.", es: "Estudio en la Universidad de Coimbra." }, { gender: "f", plural: "universidades", note: "-dade = -dad (la e final suena i débil: universidádi)." }),
  W("pt-w-estudante", "estudante", "estudiante", "estudánti", "sostantivo", "studi", "A1", { it: "Sou estudante de português.", es: "Soy estudiante de portugués." }, { gender: "m", plural: "estudantes" }),
  W("pt-w-exame", "exame", "examen", "izámi", "sostantivo", "studi", "A2", { it: "O exame de gramática é difícil.", es: "El examen de gramática es difícil." }, { gender: "m", plural: "exames", note: "La x inicial suena z: exame = izámi." }),
  W("pt-w-livro", "livro", "libro", "lívru", "sostantivo", "studi", "A1", { it: "Este livro é interessante.", es: "Este libro es interesante." }, { gender: "m", plural: "livros", freq: 2, note: "La o final átona suena u: livro = lívru." }),

  /* citta */
  W("pt-w-cidade", "cidade", "ciudad", "sidádi", "sostantivo", "citta", "A1", { it: "Lisboa é uma cidade luminosa.", es: "Lisboa es una ciudad luminosa." }, { gender: "f", plural: "cidades", ipa: "/siˈdadɨ/" }),
  W("pt-w-praca", "praça", "plaza", "prása", "sostantivo", "citta", "A1", { it: "A praça do Comércio é enorme.", es: "La plaza del Comercio es enorme." }, { gender: "f", plural: "praças" }),
  W("pt-w-museu", "museu", "museo", "muzéu", "sostantivo", "citta", "A1", { it: "O museu está fechado às segundas-feiras.", es: "El museo está cerrado los lunes." }, { gender: "m", plural: "museus", note: "Plural en -eus: museus (la última sílaba mantiene el sonido eu)." }),
  W("pt-w-igreja", "igreja", "iglesia", "igréiya", "sostantivo", "citta", "A1", { it: "A igreja é do século treze.", es: "La iglesia es del siglo trece." }, { gender: "f", plural: "igrejas" }),
  W("pt-w-centro", "centro", "centro", "séntru", "sostantivo", "citta", "A1", { it: "Moro no centro histórico.", es: "Vivo en el centro histórico." }, { gender: "m", plural: "centros" }),
  W("pt-w-largo", "largo", "plaza ancha / ancho", "lárgu", "sostantivo", "citta", "A2", { it: "O largo do Chiado é bonito.", es: "El largo (plaza) del Chiado es bonito." }, { gender: "m", plural: "largos", ff: true, note: "Falso amigo: largo en portugués es ancho o una plaza amplia (o Largo do Chiado); lo contrario es estreito, y «largo» español se dice comprido." }),

  /* clima */
  W("pt-w-sol", "sol", "sol", "sol", "sostantivo", "clima", "A1", { it: "Hoje faz sol.", es: "Hoy hace sol." }, { gender: "m", plural: "sóis", note: "Plural raro: sóis (usado casi solo en poesía)." }),
  W("pt-w-chuva", "chuva", "lluvia", "shúva", "sostantivo", "clima", "A1", { it: "A chuva chegou de repente.", es: "La lluvia llegó de repente." }, { gender: "f", plural: "chuvas" }),
  W("pt-w-neve", "neve", "nieve", "névi", "sostantivo", "clima", "A1", { it: "Na serra há muita neve.", es: "En la sierra hay mucha nieve." }, { gender: "f" }),
  W("pt-w-vento", "vento", "viento", "véntu", "sostantivo", "clima", "A1", { it: "Que vento forte hoje!", es: "¡Qué viento tan fuerte hoy!" }, { gender: "m", plural: "ventos" }),
  W("pt-w-quente", "quente", "caliente", "cuénti", "aggettivo", "clima", "A1", { it: "Está quente hoje.", es: "Hace calor hoy." }, { ant: ["frio"], note: "Quente describe la cosa caliente (a sopa está quente); para la sensación se dice está calor." }),
  W("pt-w-frio", "frio", "frío", "fríu", "aggettivo", "clima", "A1", { it: "Está frio, veste o casaco.", es: "Hace frío, ponte el abrigo." }, { ant: ["quente"], note: "Tenho frio = tengo frío (con ter, como en italiano)." }),

  /* ropa */
  W("pt-w-camisa", "camisa", "camisa", "camíza", "sostantivo", "ropa", "A2", { it: "Esta camisa é de algodão.", es: "Esta camisa es de algodón." }, { gender: "f", plural: "camisas" }),
  W("pt-w-calcas", "calças", "pantalones", "cálssas", "sostantivo", "ropa", "A2", { it: "Estas calças são apertadas.", es: "Estos pantalones están apretados." }, { gender: "f", plural: "calças", note: "En portugués se usa siempre en plural: as calças." }),
  W("pt-w-vestido", "vestido", "vestido", "vestídu", "sostantivo", "ropa", "A2", { it: "Que vestido tão bonito!", es: "¡Qué vestido tan bonito!" }, { gender: "m", plural: "vestidos" }),
  W("pt-w-sapatos", "sapatos", "zapatos", "sapatúsh", "sostantivo", "ropa", "A1", { it: "Estes sapatos são cómodos.", es: "Estos zapatos son cómodos." }, { gender: "m", plural: "sapatos", note: "La s final suena sh suave: sapatos = sapatúsh." }),
  W("pt-w-casaco", "casaco", "abrigo / chaqueta", "cazácu", "sostantivo", "ropa", "A2", { it: "No inverno uso casaco.", es: "En invierno uso abrigo." }, { gender: "m", plural: "casacos" }),
  W("pt-w-camisola", "camisola", "suéter", "camizóla", "sostantivo", "ropa", "A2", { it: "Pus a camisola de lã.", es: "Me puse el suéter de lana." }, { gender: "f", plural: "camisolas", note: "En Portugal a camisola es el suéter de lana." }),

  /* tecnologia */
  W("pt-w-computador", "computador", "computadora / ordenador", "komputadór", "sostantivo", "tecnologia", "A2", { it: "O meu computador é lento.", es: "Mi computadora es lenta." }, { gender: "m", plural: "computadores", note: "Palabra de Portugal para la computadora." }),
  W("pt-w-telemovel", "telemóvel", "(teléfono) móvil", "telimóvel", "sostantivo", "tecnologia", "A1", { it: "O meu telemóvel não tem bateria.", es: "Mi móvil no tiene batería." }, { gender: "m", plural: "telemóveis", ipa: "/teliˈmɔvɛl/", freq: 1, note: "La palabra portuguesa para el móvil; plural telemóveis." }),
  W("pt-w-mensagem", "mensagem", "mensaje", "mensáyem", "sostantivo", "tecnologia", "A2", { it: "Mandei-te uma mensagem.", es: "Te mandé un mensaje." }, { gender: "f", plural: "mensagens", note: "El pronombre va después del verbo (ênclise): mandei-te." }),
  W("pt-w-palavra-passe", "palavra-passe", "contraseña", "palávra-pássi", "sostantivo", "tecnologia", "A2", { it: "Esqueci-me da palavra-passe.", es: "Olvidé la contraseña." }, { gender: "f", plural: "palavras-passe", note: "Compuesto con guion; el plural solo marca la primera palabra." }),
  W("pt-w-internet", "internet", "internet", "intérnet", "sostantivo", "tecnologia", "A1", { it: "A internet não funciona.", es: "El internet no funciona." }, { gender: "f", note: "En portugués internet es femenina (a internet), al contrario del español." }),

  /* sport */
  W("pt-w-futebol", "futebol", "fútbol", "futeból", "sostantivo", "sport", "A2", { it: "O futebol é o desporto rei.", es: "El fútbol es el deporte rey." }, { gender: "m", freq: 2, note: "desporto (con p) es la palabra portuguesa para deporte." }),
  W("pt-w-jogo", "jogo", "partido / juego", "yógu", "sostantivo", "sport", "A2", { it: "Hoje à noite há um jogo.", es: "Esta noche hay un partido." }, { gender: "m", plural: "jogos" }),
  W("pt-w-equipa", "equipa", "equipo", "iquípa", "sostantivo", "sport", "A2", { it: "A minha equipa ganhou!", es: "¡Mi equipo ganó!" }, { gender: "f", plural: "equipas", note: "Palabra de Portugal, y además femenina: a equipa (al contrario del español el equipo)." }),
  W("pt-w-jogar", "jogar", "jugar", "yogár", "verbo", "sport", "A1", { it: "As crianças jogam no parque.", es: "Los niños juegan en el parque." }, { related: ["brincar"] }),
  W("pt-w-correr", "correr", "correr", "corrér", "verbo", "sport", "A1", { it: "Corro todas as manhãs no parque.", es: "Corro todas las mañanas en el parque." }, { freq: 2 }),
  W("pt-w-ginasio", "ginásio", "gimnasio", "yinásiu", "sostantivo", "sport", "A2", { it: "Vou ao ginásio três vezes por semana.", es: "Voy al gimnasio tres veces por semana." }, { gender: "m", plural: "ginásios" }),

  /* musica */
  W("pt-w-musica", "música", "música", "múzica", "sostantivo", "musica", "A1", { it: "Ouço música portuguesa.", es: "Escucho música portuguesa." }, { gender: "f", freq: 2 }),
  W("pt-w-cancao", "canção", "canción", "cansión", "sostantivo", "musica", "A2", { it: "Esta canção é lindíssima.", es: "Esta canción es bellísima." }, { gender: "f", plural: "canções" }),
  W("pt-w-cantor", "cantor", "cantante", "cantór", "sostantivo", "musica", "A2", { it: "O cantor tem uma voz incrível.", es: "El cantante tiene una voz increíble." }, { gender: "m", plural: "cantores" }),
  W("pt-w-concerto", "concerto", "concierto", "koncértu", "sostantivo", "musica", "A2", { it: "Vamos ao concerto no Coliseu?", es: "¿Vamos al concierto en el Coliseo?" }, { gender: "m", plural: "concertos" }),
  W("pt-w-fado", "fado", "fado", "fádu", "sostantivo", "musica", "A2", { it: "O fado de Amália é eterno.", es: "El fado de Amália es eterno." }, { gender: "m", plural: "fados", note: "El fado es la canción de Lisboa, patrimonio de la UNESCO; viene del latín fatum (destino)." }),

  /* cinema */
  W("pt-w-filme", "filme", "película", "fílmí", "sostantivo", "cinema", "A2", { it: "Hoje vejo um filme português.", es: "Hoy veo una película portuguesa." }, { gender: "m", plural: "filmes" }),
  W("pt-w-ator", "ator", "actor", "atór", "sostantivo", "cinema", "B1", { it: "O ator ganhou um prémio.", es: "El actor ganó un premio." }, { gender: "m", plural: "atores", note: "prémio (con acento agudo) es la grafía portuguesa de premio." }),
  W("pt-w-realizador", "realizador", "director (de cine)", "rrealizadór", "sostantivo", "cinema", "B1", { it: "O realizador é famoso no mundo inteiro.", es: "El director es famoso en el mundo entero." }, { gender: "m", plural: "realizadores", note: "En Portugal el director de cine se llama realizador." }),
  W("pt-w-legendas", "legendas", "subtítulos", "leyéndash", "sostantivo", "cinema", "B1", { it: "Vejo filmes com legendas.", es: "Veo películas con subtítulos." }, { gender: "f", plural: "legendas" }),

  /* relazioni */
  W("pt-w-amigo", "amigo", "amigo", "amígu", "sostantivo", "relazioni", "A1", { it: "O meu amigo chama-se Tiago.", es: "Mi amigo se llama Tiago." }, { gender: "m", plural: "amigos", ant: ["inimigo"], freq: 2 }),
  W("pt-w-amor", "amor", "amor", "amór", "sostantivo", "relazioni", "A1", { it: "O amor é paciente.", es: "El amor es paciente." }, { gender: "m", plural: "amores", ant: ["ódio"] }),
  W("pt-w-namorado", "namorado", "novio", "namorádu", "sostantivo", "relazioni", "A2", { it: "O meu namorado vive em Braga.", es: "Mi novio vive en Braga." }, { gender: "m", plural: "namorados", related: ["namorada"] }),
  W("pt-w-convidar", "convidar", "invitar", "konvidár", "verbo", "relazioni", "A2", { it: "Convido-te para o jantar.", es: "Te invito a cenar." }, { note: "En portugués convidar es el verbo normal (el «invitar» español); se convida para, no a." }),
  W("pt-w-casar", "casar", "casarse", "cazárr", "verbo", "relazioni", "B1", { it: "Vão casar em setembro.", es: "Se casan en septiembre." }, { note: "Pronominal en portugués: casar-se (vão casar-se em setembro)." }),

  /* finanze */
  W("pt-w-dinheiro", "dinheiro", "dinero", "diñéiru", "sostantivo", "finanze", "A2", { it: "Não tenho dinheiro suficiente.", es: "No tengo dinero suficiente." }, { gender: "m", freq: 2 }),
  W("pt-w-levantamento", "levantamento", "retiro (de dinero)", "levantaméntu", "sostantivo", "finanze", "B1", { it: "Faço um levantamento no multibanco.", es: "Hago un retiro en el cajero." }, { gender: "m", plural: "levantamentos", note: "La palabra portuguesa para sacar dinero: fazer um levantamento." }),
  W("pt-w-conta-bancaria", "conta bancária", "cuenta bancaria", "cónta bancária", "sostantivo", "finanze", "B1", { it: "Quero abrir uma conta bancária.", es: "Quiero abrir una cuenta bancaria." }, { gender: "f", plural: "contas bancárias" }),
  W("pt-w-poupar", "poupar", "ahorrar", "poupár", "verbo", "finanze", "B1", { it: "Poupo para uma viagem ao Douro.", es: "Ahorro para un viaje al Duero." }, { ant: ["gastar"] }),

  /* professioni */
  W("pt-w-engenheiro", "engenheiro", "ingeniero", "eñenéiru", "sostantivo", "professioni", "A2", { it: "O meu irmão é engenheiro.", es: "Mi hermano es ingeniero." }, { gender: "m", plural: "engenheiros" }),
  W("pt-w-advogado", "advogado", "abogado", "advogádu", "sostantivo", "professioni", "A2", { it: "O advogado defende o arguido.", es: "El abogado defiende al acusado." }, { gender: "m", plural: "advogados", note: "b y v se intercambian respecto al español (advogado/abogado). O arguido es el acusado en Portugal." }),
  W("pt-w-enfermeiro", "enfermeiro", "enfermero", "enferrméiru", "sostantivo", "professioni", "B1", { it: "O enfermeiro trabalha no hospital.", es: "El enfermero trabaja en el hospital." }, { gender: "m", plural: "enfermeiros" }),
  W("pt-w-jornalista", "jornalista", "periodista", "yurnalísta", "sostantivo", "professioni", "B1", { it: "A jornalista entrevista o presidente da câmara.", es: "La periodista entrevista al alcalde." }, { gender: "m", plural: "jornalistas", note: "O presidente da câmara es el alcalde en Portugal." }),
  W("pt-w-cozinheiro", "cozinheiro", "cocinero", "cuziñéiru", "sostantivo", "professioni", "A2", { it: "O cozinheiro prepara o bacalhau.", es: "El cocinero prepara el bacalao." }, { gender: "m", plural: "cozinheiros" }),

  /* attualita */
  W("pt-w-noticia", "notícia", "noticia", "notísia", "sostantivo", "attualita", "B1", { it: "Ouviste as últimas notícias?", es: "¿Has oído las últimas noticias?" }, { gender: "f", plural: "notícias" }),
  W("pt-w-jornal", "jornal", "periódico", "yurnal", "sostantivo", "attualita", "A2", { it: "Leio o jornal todas as manhãs.", es: "Leo el periódico todas las mañanas." }, { gender: "m", plural: "jornais", note: "Plural irregular: jornal → jornais (como animal → animais)." }),
  W("pt-w-ambiente", "ambiente", "medio ambiente", "ambiénti", "sostantivo", "attualita", "B1", { it: "Temos de proteger o ambiente.", es: "Tenemos que proteger el medio ambiente." }, { gender: "m", plural: "ambientes" }),
  W("pt-w-economia", "economia", "economía", "ekonomía", "sostantivo", "attualita", "B2", { it: "A economia portuguesa está a crescer.", es: "La economía portuguesa está creciendo." }, { gender: "f", note: "Está a crescer: presente continuo con estar a + infinitivo, marca del portugués europeo." }),

  /* corpo */
  W("pt-w-cabeca", "cabeça", "cabeza", "cabéssa", "sostantivo", "corpo", "A1", { it: "Doi-me a cabeça.", es: "Me duele la cabeza." }, { gender: "f", plural: "cabeças" }),
  W("pt-w-mao", "mão", "mano", "maun", "sostantivo", "corpo", "A1", { it: "Lava as mãos antes de jantar.", es: "Lávate las manos antes de cenar." }, { gender: "f", plural: "mãos", ipa: "/mɐ̃w̃/", note: "Femenina como en español; el plural mãos no cambia la grafía." }),
  W("pt-w-olho", "olho", "ojo", "óllu", "sostantivo", "corpo", "A1", { it: "Tenho algo no olho.", es: "Tengo algo en el ojo." }, { gender: "m", plural: "olhos" }),
  W("pt-w-coracao", "coração", "corazón", "corasión", "sostantivo", "corpo", "A2", { it: "O meu coração bate depressa.", es: "Mi corazón late rápido." }, { gender: "m", plural: "corações" }),

  /* animali */
  W("pt-w-cao", "cão", "perro", "caun", "sostantivo", "animali", "A1", { it: "O cão ladra ao carteiro.", es: "El perro le ladra al cartero." }, { gender: "m", plural: "cães", ipa: "/kɐ̃w̃/", note: "La palabra portuguesa para el perro; plural irregular cães." }),
  W("pt-w-gato", "gato", "gato", "gátu", "sostantivo", "animali", "A1", { it: "O gato dorme no sofá.", es: "El gato duerme en el sofá." }, { gender: "m", plural: "gatos" }),
  W("pt-w-passaro", "pássaro", "pájaro", "pássarru", "sostantivo", "animali", "A2", { it: "O pássaro canta na varanda.", es: "El pájaro canta en el balcón." }, { gender: "m", plural: "pássaros" }),

  /* colori */
  W("pt-w-azul", "azul", "azul", "azúl", "aggettivo", "colori", "A1", { it: "O céu está azul hoje.", es: "El cielo está azul hoy." }, { ant: ["vermelho"] }),
  W("pt-w-verde", "verde", "verde", "vérdi", "aggettivo", "colori", "A1", { it: "O vinho verde é do Minho.", es: "El vino verde es del Miño." }),
  W("pt-w-amarelo", "amarelo", "amarillo", "amarrélu", "aggettivo", "colori", "A1", { it: "Compro um casaco amarelo.", es: "Compro un abrigo amarillo." }),

  /* emozioni */
  W("pt-w-feliz", "feliz", "feliz", "felís", "aggettivo", "emozioni", "A1", { it: "Sou muito feliz contigo.", es: "Soy muy feliz contigo." }, { ant: ["triste"], note: "La z final suena s (feliz = felís)." }),
  W("pt-w-triste", "triste", "triste", "tríshi", "aggettivo", "emozioni", "A1", { it: "Estou triste com a notícia.", es: "Estoy triste con la noticia." }, { ant: ["feliz"] }),
  W("pt-w-cansado", "cansado", "cansado", "cansádu", "aggettivo", "emozioni", "A2", { it: "Estou cansado do trabalho.", es: "Estoy cansado del trabajo." }, { related: ["cansada"] }),

  /* svago */
  W("pt-w-praia", "praia", "playa", "práia", "sostantivo", "svago", "A1", { it: "No verão vou à praia de Carcavelos.", es: "En verano voy a la playa de Carcavelos." }, { gender: "f", plural: "praias" }),
  W("pt-w-ferias", "férias", "vacaciones", "férrias", "sostantivo", "svago", "A2", { it: "Estou de férias em agosto.", es: "Estoy de vacaciones en agosto." }, { gender: "f", plural: "férias", note: "Se usa casi siempre en plural: as férias, estar de férias." }),
  W("pt-w-passear", "passear", "pasear", "passiár", "verbo", "svago", "A2", { it: "Gosto de passear junto ao rio.", es: "Me gusta pasear junto al río." }, { related: ["passeio"] }),

  /* natura */
  W("pt-w-mar", "mar", "mar", "már", "sostantivo", "natura", "A1", { it: "O mar Atlântico é frio.", es: "El mar Atlántico es frío." }, { gender: "m", plural: "mares", note: "Admite también el femenino en lenguaje poético: a mar." }),
  W("pt-w-rio", "rio", "río", "ríu", "sostantivo", "natura", "A1", { it: "O Douro passa pelo Porto.", es: "El Duero pasa por Oporto." }, { gender: "m", plural: "rios" }),
  W("pt-w-montanha", "montanha", "montaña", "montáña", "sostantivo", "natura", "A2", { it: "Subimos a montanha de comboio.", es: "Subimos la montaña en tren." }, { gender: "f", plural: "montanhas" }),
];

/* ── Léxico cerrado PT → ES · espejo del objeto CLOSED del Analizador ──
   Artículos, contracciones, preposiciones, pronombres, conjunciones,
   adverbios frecuentes y formas de ser/estar/ter/ir/haver. Sirve para
   el Analizador de frases (src/components/lms/views/analyzer.tsx).   */
export const PT_CLOSED: Record<string, string> = {
  /* artigos e contrações */
  o: "el", a: "a", os: "los", as: "las", um: "un", uma: "una",
  do: "del", da: "de la", dos: "de los", das: "de las",
  no: "en el", na: "en la", nos: "en los/nos", nas: "en las",
  ao: "al", à: "a la", pelo: "por el", pela: "por la",
  /* preposições */
  de: "de", em: "en", para: "para", por: "por", com: "con", sem: "sin",
  até: "hasta", entre: "entre", sobre: "sobre",
  /* conjunções e interrogativos */
  e: "y", ou: "o", mas: "pero", que: "que", se: "si",
  porque: "porque", como: "cómo/como", quando: "cuándo", onde: "dónde",
  qual: "cuál", quem: "quién", embora: "aunque",
  /* advérbios */
  não: "no", sim: "sí", também: "también", muito: "mucho", pouco: "poco",
  mais: "más", menos: "menos", já: "ya", ainda: "todavía/aún",
  sempre: "siempre", nunca: "nunca", hoje: "hoy", amanhã: "mañana",
  ontem: "ayer", agora: "ahora", depois: "después",
  /* pronomes */
  eu: "yo", tu: "tú", ele: "él", ela: "ella", nós: "nosotros",
  você: "usted", vocês: "ustedes/vosotros", eles: "ellos", elas: "ellas",
  me: "me", te: "te", lhe: "le", isso: "eso", isto: "esto",
  este: "este", esta: "esta",
  /* determinantes */
  tudo: "todo", cada: "cada",
  /* formas de ser, estar, ter, ir, haver */
  sou: "soy", és: "eres", é: "es", somos: "somos", são: "son",
  era: "era", foi: "fue", estou: "estoy", está: "está",
  tenho: "tengo", tem: "tiene", há: "hay/hace (tiempo)",
  vou: "voy", vai: "va", vamos: "vamos", vão: "van",
};
