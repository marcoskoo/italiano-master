import type { CefrLevel } from "../../types";

/* ── Shadowing EN · guiones para escuchar, repetir y comparar ───────
   Método "shadowing": escuchar → repetir en voz alta → comparar.
   Espejo de src/lib/lms/shadowing.ts (frases con `es` y `tip`), pero
   agrupadas en guiones temáticos. Convención del proyecto: `.it` =
   inglés americano (lengua de estudio), `tip` = nota de pronunciación
   para hispanohablantes, en español con tuteo. */

export interface ShadowPhraseEn {
  id: string;
  level: CefrLevel;
  it: string;              // frase en inglés americano
  es: string;              // traducción española
  tip?: string;            // nota de pronunciación para hispanohablantes
}

export interface ShadowingScript {
  id: string;
  title: string;           // ES
  titleIt: string;         // EN
  level: CefrLevel;
  intro: string;           // ES
  phrases: ShadowPhraseEn[];
  tips: string[];          // consejos culturales y de pronunciación (ES)
}

export const EN_SHADOWING: ShadowingScript[] = [
  {
    id: "en-sh-coffee", title: "Pedir café", titleIt: "Ordering coffee", level: "A1",
    intro: "Frases para sobrevivir en cualquier cafetería de EE. UU., de la fila al último sorbo.",
    phrases: [
      { id: "en-sh-coffee-01", level: "A1", it: "Hi! What can I get for you today?", es: "¡Hola! ¿Qué te preparo hoy?", tip: "«for you» se oye /for-ya/: la t de «for» casi desaparece entre vocales." },
      { id: "en-sh-coffee-02", level: "A1", it: "Can I get a medium coffee, please?", es: "¿Me das un café mediano, por favor?", tip: "«Can I get» es la fórmula americana para pedir; el «a» de «can» queda como vocal neutra." },
      { id: "en-sh-coffee-03", level: "A1", it: "Do you want that for here or to go?", es: "¿Lo quieres para tomar aquí o para llevar?", tip: "«to go» se dice /ta-GÓU/: t suave y acento en «go»." },
      { id: "en-sh-coffee-04", level: "A1", it: "How much is it with tax?", es: "¿Cuánto es con impuestos?", tip: "«much is» se encadena: /ma-chis/, con el sonido ch suave." },
      { id: "en-sh-coffee-05", level: "A1", it: "Here you go. Have a nice day!", es: "Aquí tiene. ¡Que tengas un buen día!", tip: "«Here you go» se dice ligado: /jír-ia-GÓU/." },
      { id: "en-sh-coffee-06", level: "A1", it: "Thanks a lot. See you tomorrow!", es: "Muchas gracias. ¡Hasta mañana!", tip: "«Thanks» empieza con th sorda: mete la punta de la lengua entre los dientes." },
    ],
    tips: [
      "Los baristas americanos saludan con energía: responde con el mismo tono, aunque te dé corte.",
      "El precio de la etiqueta no incluye impuesto: se suma en la caja.",
      "Repite cada frase tres veces: la primera despacio, la segunda al ritmo del audio, la tercera sin mirar.",
    ],
  },
  {
    id: "en-sh-smalltalk", title: "Small talk americano", titleIt: "American small talk", level: "A2",
    intro: "El arte de la charla superficial: el clima, el fin de semana y el partido de anoche.",
    phrases: [
      { id: "en-sh-smalltalk-01", level: "A2", it: "How's it going? Pretty good, and you?", es: "¿Qué tal? Bastante bien, ¿y tú?", tip: "«going» = /GÓU-in/, con la -ing nasal; «and you» se comprime en /enia/." },
      { id: "en-sh-smalltalk-02", level: "A2", it: "Nice weather today, isn't it?", es: "Hace buen tiempo hoy, ¿no?", tip: "El «question tag» «isn't it?» lleva entonación descendente: es un saludo, no una pregunta real." },
      { id: "en-sh-smalltalk-03", level: "A2", it: "Did you catch the game last night?", es: "¿Viste el partido anoche?", tip: "«Did you» se funde en /dí-ya/; la -t de «last» casi no suena." },
      { id: "en-sh-smalltalk-04", level: "A2", it: "Any plans for the weekend?", es: "¿Planes para el fin de semana?", tip: "«for the» se reduce a /fer-za/: no pronuncies cada vocal plena." },
      { id: "en-sh-smalltalk-05", level: "A2", it: "I'm heading to the lake with some friends.", es: "Voy al lago con unos amigos.", tip: "«heading» suena /HÉ-din/: la t americana entre vocales suena como d suave." },
      { id: "en-sh-smalltalk-06", level: "A2", it: "Well, it was great talking to you!", es: "Bueno, ¡ha sido un gusto hablar contigo!", tip: "«great talking» encadena los sonidos: /gréi-tó-kin/; «well» marca el cierre educado." },
    ],
    tips: [
      "El small talk es un ritual: responde breve y devuelve la pregunta.",
      "Con desconocidos, el terreno seguro es el clima, los deportes y los planes: nunca política ni dinero.",
      "Sonríe mientras hablas: en inglés americano la sonrisa se oye.",
    ],
  },
  {
    id: "en-sh-dinner", title: "La cena de Thanksgiving", titleIt: "Thanksgiving dinner", level: "A2",
    intro: "La mesa del cuarto jueves de noviembre: cumplidos a la cocinera y segundas rondas.",
    phrases: [
      { id: "en-sh-dinner-01", level: "A2", it: "Everything smells amazing!", es: "¡Todo huele increíble!", tip: "«smells» termina en /z/ sonora: /smélz/, no /sméls/." },
      { id: "en-sh-dinner-02", level: "A2", it: "Could you pass the mashed potatoes, please?", es: "¿Me pasas el puré de patatas, por favor?", tip: "«pass the» se liga en /pa-sza/; «mashed» suena /mésht/." },
      { id: "en-sh-dinner-03", level: "A2", it: "This pumpkin pie is out of this world!", es: "¡Este pastel de calabaza está de otro planeta!", tip: "«out of» se contrae a /áu-da/ en el habla rápida." },
      { id: "en-sh-dinner-04", level: "A2", it: "May I have seconds?", es: "¿Puedo repetir?", tip: "«seconds» lleva la -s sonora: /SÉ-kondz/." },
      { id: "en-sh-dinner-05", level: "A2", it: "I'm stuffed!", es: "¡Estoy lleno!", tip: "«stuffed» termina en /t/ sorda: no añadas una -e final." },
      { id: "en-sh-dinner-06", level: "A2", it: "Thank you so much for having us.", es: "Muchísimas gracias por recibirnos.", tip: "«for having» = /fer-JÁ-vin/; «us» suena /as/, con vocal neutra." },
    ],
    tips: [
      "El elogio a la comida es casi obligatorio: «everything is delicious» nunca sobra.",
      "«I'm stuffed» es LA frase nacional del Thanksgiving.",
      "Ofrece ayuda para recoger: «Can I help with the dishes?» siempre cae bien.",
    ],
  },
  {
    id: "en-sh-interview", title: "Una entrevista de trabajo", titleIt: "A job interview", level: "B1",
    intro: "Del saludo inicial a la despedida: el guion completo de una entrevista en EE. UU.",
    phrases: [
      { id: "en-sh-interview-01", level: "B1", it: "Good morning, thank you for having me.", es: "Buenos días, gracias por recibirme.", tip: "«having» con -ing nasal; «me» suena /mi/, corto y con vocal tensa." },
      { id: "en-sh-interview-02", level: "B1", it: "I've been working in marketing for three years.", es: "Llevo tres años trabajando en marketing.", tip: "«I've been» se funde: /áiv-bin/; «years» cierra con la r retrofleja americana." },
      { id: "en-sh-interview-03", level: "B1", it: "My greatest strength is problem-solving.", es: "Mi mayor fortaleza es resolver problemas.", tip: "«strength» es un grupo difícil: /stréngth/, sin vocal de apoyo al principio." },
      { id: "en-sh-interview-04", level: "B1", it: "I'd love to grow with the company.", es: "Me encantaría crecer con la empresa.", tip: "«I'd love» pronuncia la d final unida a la l: /áid-láv/." },
      { id: "en-sh-interview-05", level: "B1", it: "Could you tell me more about the team?", es: "¿Podría contarme más sobre el equipo?", tip: "«tell me» = /tel-mi/, sin pausa entre las dos palabras." },
      { id: "en-sh-interview-06", level: "B1", it: "I look forward to hearing from you.", es: "Quedo a la espera de su respuesta.", tip: "«look forward to» se dice /luk-FÓR-der-ta/: tres golpes de ritmo." },
    ],
    tips: [
      "Prepara una respuesta de unos 60 segundos para «tell me about yourself».",
      "Cierra siempre con una pregunta: demuestra interés real en el puesto.",
      "Envía un correo de agradecimiento en las primeras 24 horas: es práctica estándar en EE. UU.",
    ],
  },
  {
    id: "en-sh-debate", title: "Argumentar con cortesía", titleIt: "Arguing politely", level: "B2",
    intro: "Disentir sin chocar: conectores para defender tu postura en inglés americano.",
    phrases: [
      { id: "en-sh-debate-01", level: "B2", it: "That's a fair point, but I see it differently.", es: "Es un argumento razonable, pero yo lo veo de otra manera.", tip: "«fair» lleva la r retrofleja: curva la lengua hacia atrás sin tocar el paladar." },
      { id: "en-sh-debate-02", level: "B2", it: "If suburbs were cheaper, young people wouldn't leave them.", es: "Si los suburbios fueran más baratos, los jóvenes no los abandonarían.", tip: "«wouldn't» = /WÚ-dent/, con la t flapped como d suave." },
      { id: "en-sh-debate-03", level: "B2", it: "I agree up to a point; however, the data says otherwise.", es: "Estoy de acuerdo hasta cierto punto; sin embargo, los datos dicen otra cosa.", tip: "«up to a» encadena tres vocales: /a-pda/, sin pausas." },
      { id: "en-sh-debate-04", level: "B2", it: "What I'm trying to say is that we need better data.", es: "Lo que intento decir es que necesitamos mejores datos.", tip: "«trying to» se reduce a /TRÁI-in-ta/ en el habla natural." },
      { id: "en-sh-debate-05", level: "B2", it: "At the end of the day, it comes down to money.", es: "Al final del día, todo se reduce al dinero.", tip: "«comes down» encadena la s con la d: /coms-DÁUN/." },
      { id: "en-sh-debate-06", level: "B2", it: "Let's agree to disagree.", es: "Quedemos en que no estamos de acuerdo.", tip: "«agree to» se liga: /a-GRÍI-ta/; acento en «gree»." },
    ],
    tips: [
      "«At the end of the day» es el conector de cierre favorito de los debates americanos.",
      "Concede antes de contradecir: «fair point, but…» abre puertas que «you're wrong» cierra.",
      "Baja el volumen y el ritmo para sonar más convincente: la calma convence.",
    ],
  },
];
