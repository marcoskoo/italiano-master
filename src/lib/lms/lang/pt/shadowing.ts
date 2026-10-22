import type { CefrLevel } from "../../types";

/* ═══ PT · Shadowing · guiones (v9.39 · PARTE 3d) ═══════════════════
   Método "shadowing": escuchar → repetir en voz alta → comparar.
   Espejo de src/lib/lms/shadowing.ts, agrupado en guiones temáticos.
   Convención: `.it` = frase em português EUROPEU, `.es` = traducción
   española, `tip` = nota de pronunciación para hispanohablantes (ES). */

export interface PtShadowPhrase {
  id: string;
  it: string;        // frase en portugués europeo (lengua de estudio)
  es: string;        // traducción española
  tip?: string;      // nota de pronunciación para hispanohablantes
}

export interface ShadowingScript {
  id: string;
  title: string;     // título en español
  titleIt: string;   // título en portugués
  level: CefrLevel;
  minutes: number;   // duración estimada del guión
  intro: string;     // presentación en español (tuteo)
  phrases: PtShadowPhrase[];
  tips: string[];    // técnica de estudio en español
}

export const PT_SHADOWING: ShadowingScript[] = [
  {
    id: "pt-sh-a1", title: "Supervivencia en Lisboa", titleIt: "Sobreviver em Lisboa", level: "A1", minutes: 2,
    intro: "Seis frases mínimas para sobrevivir el primer día en Portugal: saludar, pedir, pagar y pedir que repitan.",
    phrases: [
      { id: "pt-sh-a1-01", it: "Bom dia! Tudo bem contigo?", es: "¡Buenos días! ¿Todo bien contigo?", tip: "«Bom dia»: la m nasaliza la o sin cerrar del todo los labios: /bõ-DIA/." },
      { id: "pt-sh-a1-02", it: "Chamo-me Inés e sou de Madrid.", es: "Me llamo Inés y soy de Madrid.", tip: "«Chamo-me» se pronuncia /SHÁ-mu-mi/: la ch portuguesa es «sh» y las vocales finales se relajan." },
      { id: "pt-sh-a1-03", it: "Queria um café e um pastel de nata, se faz favor.", es: "Quería un café y un pastel de nata, por favor.", tip: "«Queria» = /ke-RI-a/, tres sílabas: es el pasado que sirve para pedir con cortesía." },
      { id: "pt-sh-a1-04", it: "Quanto custa o bilhete para Sintra?", es: "¿Cuánto cuesta el billete a Sintra?", tip: "«bilhete»: el «lh» suena como la «ll» de llave: /bi-LLE-te/." },
      { id: "pt-sh-a1-05", it: "Não percebi. Pode repetir mais devagar?", es: "No lo entendí. ¿Puede repetir más despacio?", tip: "«percebi» carga el acento en la última sílaba; «devagar» = /de-va-GAR/." },
      { id: "pt-sh-a1-06", it: "Obrigada! Até amanhã.", es: "¡Gracias! (mujer) Hasta mañana.", tip: "Si eres hombre di «obrigado»: la palabra concuerda contigo." },
    ],
    tips: ["Escucha primero con velocidad lenta y repite línea a línea", "Alarga las vocales tónicas: en Portugal la sílaba fuerte suena clara y las demás casi se susurran", "Graba tu voz y compárala con el modelo antes de pasar a la frase siguiente"],
  },
  {
    id: "pt-sh-a2", title: "El día a día en Oporto", titleIt: "O dia a dia no Porto", level: "A2", minutes: 3,
    intro: "La rutina portuense: despertarse, el transporte, una disculpa y una comida en la tasca.",
    phrases: [
      { id: "pt-sh-a2-01", it: "Normalmente acordo às sete e tomo o pequeno-almoço numa pastelaria.", es: "Normalmente me despierto a las siete y desayuno en una pastelería.", tip: "«pequeno-almoço» encadena las dos palabras: /pe-KE-nu-al-MO-su/; la o final suena como u." },
      { id: "pt-sh-a2-02", it: "Vou para o trabalho de metro, mas hoje vou a pé.", es: "Voy al trabajo en metro, pero hoy voy a pie.", tip: "«a pé» = /a-PÉ/ con e abierta; «metro» se pronuncia casi como en español." },
      { id: "pt-sh-a2-03", it: "Desculpa o atraso: havia muito trânsito na ponte.", es: "Perdona el retraso: había mucho tráfico en el puente.", tip: "«trânsito»: la primera vocal es nasal, /TRÃ-si-tu/, sin pronunciar la n." },
      { id: "pt-sh-a2-04", it: "Que bom ver-te outra vez! Quanto tempo passou!", es: "¡Qué bueno verte otra vez! ¡Cuánto tiempo pasó!", tip: "«ver-te»: en Portugal el pronombre va pegado al verbo: /VER-te/." },
      { id: "pt-sh-a2-05", it: "Prefiro o frango sem molho, com arroz e salada.", es: "Prefiero el pollo sin salsa, con arroz y ensalada.", tip: "«frango» = /FRÃ-gu/, con a nasal; la o final casi desaparece." },
      { id: "pt-sh-a2-06", it: "Amanhã vou ao médico porque sinto dores de cabeça.", es: "Mañana voy al médico porque siento dolores de cabeza.", tip: "«cabeça»: la ç suena siempre como ss: /ka-BE-sa/." },
    ],
    tips: ["Practica la reducción vocálica: o final → u, e final → i", "Pronuncia los diptongos «ae» y «oi» sin separar las vocales", "Repite cada frase tres veces: susurro, voz normal y voz fuerte"],
  },
  {
    id: "pt-sh-b1", title: "Dar la opinión", titleIt: "Dar a opinião", level: "B1", minutes: 3,
    intro: "Opinar, hacer planes y hablar de costumbres con las estructuras típicas del portugués de Portugal.",
    phrases: [
      { id: "pt-sh-b1-01", it: "Na minha opinião, aprender uma língua exige constância e paciência.", es: "En mi opinión, aprender un idioma exige constancia y paciencia.", tip: "«exige» = /i-ZI-je/: la x inicial portuguesa suena como s." },
      { id: "pt-sh-b1-02", it: "Estou a pensar visitar Coimbra na primavera.", es: "Estoy pensando en visitar Coimbra en primavera.", tip: "«estou a + infinitivo» es la marca sonora del portugués de Portugal: /is-TO-a/, todo ligado." },
      { id: "pt-sh-b1-03", it: "Acabei de ler um romance português muito interessante.", es: "Acabo de leer una novela portuguesa muy interesante.", tip: "«acabei de» = /a-ka-BE-di/; «romance» es novela, no romance amoroso." },
      { id: "pt-sh-b1-04", it: "Se tivesse mais tempo, aprendia também galego.", es: "Si tuviera más tiempo, aprendería también gallego.", tip: "En el habla corriente de Portugal el condicional se cambia por el imperfecto: «aprendia» = aprendería." },
      { id: "pt-sh-b1-05", it: "Disse-me que voltará logo que acabe o trabalho.", es: "Me dijo que volverá en cuanto termine el trabajo.", tip: "«logo que acabe»: conjuntivo después de «logo que»; /a-CA-be/." },
      { id: "pt-sh-b1-06", it: "Costumo ir ao trabalho de autocarro, mas hoje apanhei o elétrico.", es: "Suelo ir al trabajo en autobús, pero hoy cogí el eléctrico.", tip: "«autocarro» = /au-to-KA-rru/; «elétrico» es el tranvía de Lisboa." },
    ],
    tips: ["Fíjate en «estar a + infinitivo» y «acabar de + infinitivo»: dos perlas del portugués europeo", "Entrena la entonación descendente de las frases afirmativas", "Intenta repetir el tip en voz alta mientras aplicas la regla"],
  },
  {
    id: "pt-sh-b2", title: "Discutir con estilo", titleIt: "Discutir com estilo", level: "B2", minutes: 3,
    intro: "Frases para defender una tesis, conceder un punto y rematar con elegancia en un debate.",
    phrases: [
      { id: "pt-sh-b2-01", it: "A dizer a verdade, não concordo de todo com essa decisão.", es: "A decir verdad, no estoy en nada de acuerdo con esa decisión.", tip: "«de todo» = /di-TO-du/: tres vocales relajadas seguidas, no las refuerces." },
      { id: "pt-sh-b2-02", it: "Devia investir-se mais na formação dos jovens.", es: "Debería invertirse más en la formación de los jóvenes.", tip: "«devia» + pasiva reflexa «investir-se»: entonación plana al principio y caída al final." },
      { id: "pt-sh-b2-03", it: "Apesar de ser tarde, decidimos sair à mesma.", es: "A pesar de ser tarde, decidimos salir igualmente.", tip: "«à mesma» = /a-MÉS-ma/; en Portugal se dice «à mesma» y también «mesmo assim»." },
      { id: "pt-sh-b2-04", it: "O problema é que, por muito que nos esforcemos, os resultados não chegam depressa.", es: "El problema es que, por mucho que nos esforcemos, los resultados no llegan rápido.", tip: "«esforcemos»: conjuntivo presente; la s final suena sh: /shfor-SE-mush/." },
      { id: "pt-sh-b2-05", it: "Com o devido distanciamento, essa escolha revelou-se a certa.", es: "Con la debida distancia, esa elección resultó ser la correcta.", tip: "«revelou-se»: el pronombre va intercalado al final: /rré-ve-LOU-sh/." },
      { id: "pt-sh-b2-06", it: "Todas as vezes que vou a Portugal, descubro algo novo e surpreendente.", es: "Todas las veces que voy a Portugal, descubro algo nuevo y sorprendente.", tip: "«surpreendente» = /sur-pre-en-DEN-te/, cinco sílabas bien separadas." },
    ],
    tips: ["El conjuntivo tras «por muito que» es la marca del nivel B2: practícalo hasta que salga solo", "Subraya mentalmente la sílaba tónica de cada palabra clave", "Imita también los silencios: en portugués las pausas caen antes de la conjunción"],
  },
  {
    id: "pt-sh-c1", title: "El registro elevado", titleIt: "O registo elevado", level: "C1", minutes: 4,
    intro: "Periodismo, conferencias y ensayo: la prosa formal portuguesa con toda su maquinaria sintáctica.",
    phrases: [
      { id: "pt-sh-c1-01", it: "A literatura portuguesa do século XX soube contar a alma do país.", es: "La literatura portuguesa del siglo XX supo contar el alma del país.", tip: "«soube» = /SOU-be/, diptongo con o nasal: es el perfeito de «saber»." },
      { id: "pt-sh-c1-02", it: "Seria oportuno avaliar com atenção as consequências a longo prazo.", es: "Sería oportuno evaluar con atención las consecuencias a largo plazo.", tip: "«avaliar» = /a-va-LIAR/ con una i casi deslizante; «prazo» cierra con s sonora." },
      { id: "pt-sh-c1-03", it: "Considero que a aprendizagem das línguas favorece a abertura mental.", es: "Considero que el aprendizaje de idiomas favorece la apertura mental.", tip: "«aprendizagem»: la primera a es nasal y la terminación -agem lleva j: /a-prendi-ZA-jem/." },
      { id: "pt-sh-c1-04", it: "Conhecer a fundo uma cultura significa também aceitar as suas contradições.", es: "Conocer a fondo una cultura significa también aceptar sus contradicciones.", tip: "«contradições» = /kõ-tra-di-SÕISH/: el diptongo nasal final se cierra con un eco de sh." },
      { id: "pt-sh-c1-05", it: "A experiência no estrangeiro permitiu-me amadurecer como pessoa e como profissional.", es: "La experiencia en el extranjero me permitió madurar como persona y como profesional.", tip: "«permitiu-me»: en la frase formal el pronombre va detrás: /per-mi-TIU-mi/." },
      { id: "pt-sh-c1-06", it: "O debate atual sobre a sustentabilidade exige uma abordagem interdisciplinar.", es: "El debate actual sobre la sostenibilidad exige un enfoque interdisciplinario.", tip: "«abordagem» = /a-bor-DA-jem/; toda palabra en -agem se escribe con j." },
    ],
    tips: ["Lee cada frase primero despacio y después a velocidad natural, sin perder las nasales", "Cuida las terminaciones -agem, -ção y -mente: son la firma del registro culto", "Al grabarte, compara el ritmo: el portugués europeo aprieta las sílabas átonas y estira las tónicas"],
  },
];
