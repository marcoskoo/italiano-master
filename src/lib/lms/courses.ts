import type { Course, Lesson, Unit } from "./types";

/* ── Cursos · Desde cero → C2 ─────────────────────────────────────── */

const L = (l: Lesson): Lesson => l;

export const COURSES: Course[] = [
  /* ══════════ DESDE CERO ══════════ */
  {
    level: "zero", label: "Desde cero", goal: "Para quien no conoce absolutamente nada de italiano: alfabeto, saludos y números.", hours: 10,
    units: [
      { id: "u-zero-1", level: "zero", title: "El alfabeto y los sonidos", titleIt: "L'alfabeto e i suoni", lessons: [
        L({ id: "les-z1-1", level: "zero", title: "El alfabeto italiano", titleIt: "L'alfabeto italiano",
          objectives: ["Reconocer las 21 letras del alfabeto italiano", "Pronunciar las vocales puras", "Distinguir las letras extranjeras j, k, w, x, y"],
          explanation: [
            "El alfabeto italiano tiene solo 21 letras: no existen la j, k, w, x, y (solo aparecen en palabras extranjeras, como “jeans” o “wifi”). Para un hispanohablante es una excelente noticia: se pronuncia casi exactamente como se escribe.",
            "Las 7 vocales (a, e, i, o, u + e/o abiertas y cerradas) nunca cambian de sonido, a diferencia del español o el inglés. La clave del acento italiano está en pronunciar cada vocal de forma clara y pura. En la sección Pronunciación encontrarás el laboratorio interactivo de vocales.",
          ],
          examples: [
            { it: "a come amore", es: "a de amore (amor)" },
            { it: "b come Bologna", es: "b de Bologna" },
            { it: "z come zaino", es: "z de zaino (mochila)" },
          ],
          vocabIds: ["w-ciao", "w-casa", "w-caffe"], exerciseIds: ["ex-a1-022", "ex-a1-010"],
          conversationPrompt: { it: "Ciao! Come ti chiami?", es: "¡Hola! ¿Cómo te llamas?" },
          checkpointIds: ["ex-a1-010", "ex-a1-028"] }),
        L({ id: "les-z1-2", level: "zero", title: "Los sonidos especiales: c, g, gn, gl, sc", titleIt: "I suoni speciali",
          objectives: ["Pronunciar c y g duras y suaves", "Articular gn (como ñ) y gl(i)", "Leer en voz alta palabras nuevas"],
          explanation: [
            "La c y la g cambian de sonido según la vocal que sigue: ante a/o/u son duras (casa, gatto); ante e/i son suaves, como “ch” y “j” inglesas (ciao, gelato). Para hacerlas duras ante e/i se añade una h (chiave, spaghetti) o se usa la vocal intermedia (ciao, guanto).",
            "El dígrafo gn suena como la ñ española (bagno = baño), gl + i suena como “lli” en “mille” (famiglia), y sc ante e/i suena como “sh” (pesce). Con la práctica notarás que el italiano esconde sonidos familiares del español con ortografía distinta.",
          ],
          examples: [
            { it: "cena / cena (c suave: chena)", es: "cena" },
            { it: "gnocchi (ñokki)", es: "ñoquis" },
            { it: "famiglia (famiglia)", es: "familia (gl = lli)" },
          ],
          vocabIds: ["w-chiave", "w-formaggio", "w-pesce"], exerciseIds: ["ex-a1-018"],
          conversationPrompt: { it: "Come si pronuncia “gnocchi”?", es: "¿Cómo se pronuncia “gnocchi”?" },
          checkpointIds: ["ex-a1-018", "ex-a1-028"] }),
        L({ id: "les-z1-3", level: "zero", title: "Saludos esenciales", titleIt: "I saluti essenziali",
          objectives: ["Saludar a cualquier hora del día", "Despedirse formal e informalmente", "Agradecer y pedir perdón"],
          explanation: [
            "El italiano distingue el registro formal del informal desde el primer minuto: buongiorno/buonasera para entrar, arrivederci (formal) o ciao (informal) para salir. “Ciao” funciona para saludar y despedir, pero SOLO en contexto informal.",
            "Las fórmulas de cortesía básicas: grazie (gracias), prego (de nada / pase), per favore (por favor), scusa/scusi (perdón informal/formal). Con estas seis palabras ya puedes sobrevivir un día entero en Italia.",
          ],
          examples: [
            { it: "Buongiorno, signora!", es: "¡Buenos días, señora!" },
            { it: "Grazie mille!", es: "¡Muchísimas gracias!" },
            { it: "Scusi, dov'è il bagno?", es: "Disculpe, ¿dónde está el baño?" },
          ],
          vocabIds: ["w-buongiorno", "w-grazie", "w-prego", "w-scusa", "w-arrivederci", "w-comestai"],
          exerciseIds: ["ex-a1-010", "ex-a1-028", "ex-a1-011"],
          conversationPrompt: { it: "Buongiorno! Come sta?", es: "¡Buenos días! ¿Cómo está usted?" },
          checkpointIds: ["ex-a1-010", "ex-a1-028", "ex-a1-011"] }),
      ]},
      { id: "u-zero-2", level: "zero", title: "Presentarse", titleIt: "Presentarsi", lessons: [
        L({ id: "les-z2-1", level: "zero", title: "Decir tu nombre y nacionalidad", titleIt: "Come ti chiami?",
          objectives: ["Decir cómo te llamas", "Preguntar el nombre en ambos registros", "Decir tu nacionalidad"],
          explanation: [
            "Para presentarte: Mi chiamo… (me llamo) o Sono… (soy). Para preguntar: Come ti chiami? (informal) / Come si chiama? (formal). La respuesta natural encadena nombre + origen: Mi chiamo Ana e sono spagnola.",
            "Los países y nacionalidades son adjetivos que concuerdan: spagnolo/spagnola, italiano/italiana, argentino/argentina. Ojo con la palabra “di” para la ciudad: Sono di Madrid (soy de Madrid).",
          ],
          examples: [
            { it: "Mi chiamo Ana e sono spagnola.", es: "Me llamo Ana y soy española." },
            { it: "Sono di Madrid. E tu?", es: "Soy de Madrid. ¿Y tú?" },
            { it: "Piacere! (encantado)", es: "¡Encantado!" },
          ],
          vocabIds: ["w-ciao", "w-studente"], exerciseIds: ["ex-a1-025", "ex-a1-027", "ex-a1-023"],
          conversationPrompt: { it: "Piacere, come ti chiami?", es: "Encantado, ¿cómo te llamas?" },
          checkpointIds: ["ex-a1-025", "ex-a1-027"] }),
        L({ id: "les-z2-2", level: "zero", title: "Números del 0 al 20", titleIt: "I numeri da 0 a 20",
          objectives: ["Contar del 1 al 20", "Dar tu número de teléfono", "Reconocer precios simples"],
          explanation: [
            "Los números italianos son transparentes para un hispanohablante: uno, due, tre, quattro, cinque, sei, sette, otto, nove, dieci. Del 11 al 16 terminan en -dici: undici, dodici, tredici, quattordici, quindici, sedici; y 17-19 se invierten: diciassette, diciotto, diciannove.",
            "Para el teléfono se deletrean dígito a dígito. El 1 ante vocal se apocopa: un'amica, un fratello (un/uno, una/un').",
          ],
          examples: [
            { it: "Il mio numero è tre-tre-nove…", es: "Mi número es tres-tres-nueve…" },
            { it: "Ho vent'anni.", es: "Tengo veinte años." },
          ],
          vocabIds: ["w-prezzo"], exerciseIds: ["ex-a1-030", "ex-a1-009"],
          conversationPrompt: { it: "Quanti anni hai?", es: "¿Cuántos años tienes?" },
          checkpointIds: ["ex-a1-030"] }),
        L({ id: "les-z2-3", level: "zero", title: "Primeras preguntas útiles", titleIt: "Le prime domande utili",
          objectives: ["Preguntar qué es algo", "Preguntar dónde está algo", "Decir que no entiendes"],
          explanation: [
            "Tres preguntas de supervivencia: Come si dice…? (¿cómo se dice…?), Dov'è…? (¿dónde está…?), Che cos'è? (¿qué es esto?). Para pedir repetición: Scusa, puoi ripetere? o más simple: Come?",
            "Frases de rescate: Non capisco (no entiendo), Parli spagnolo? (¿hablas español?), Parlo poco italiano (hablo poco italiano). Los italianos aprecian muchísimo el esfuerzo: elogian y ayudan.",
          ],
          examples: [
            { it: "Come si dice “playa” in italiano?", es: "¿Cómo se dice “playa” en italiano?" },
            { it: "Scusi, dov'è la stazione?", es: "Disculpe, ¿dónde está la estación?" },
          ],
          vocabIds: ["w-stazione", "w-scusa"], exerciseIds: ["ex-a1-019", "ex-a1-024"],
          conversationPrompt: { it: "Scusa, dov'è la stazione?", es: "Disculpa, ¿dónde está la estación?" },
          checkpointIds: ["ex-a1-019"] }),
      ]},
    ],
  },

  /* ══════════ A1 ══════════ */
  {
    level: "A1", label: "A1 · Principiante absoluto", goal: "Presentarte, hablar de tu familia y tu día a día, moverte en un bar.", hours: 60,
    units: [
      { id: "u-a1-1", level: "A1", title: "Presentarse y describir", titleIt: "Presentarsi e descrivere", lessons: [
        L({ id: "les-a1-1", level: "A1", title: "Essere y las nacionalidades", titleIt: "Il verbo essere",
          objectives: ["Conjugar essere en presente", "Describir personas y cosas", "Usar adjetivos de nacionalidad"],
          explanation: [
            "essere es el verbo más usado del italiano: sono, sei, è, siamo, siete, sono. Con él describimos identidad y características: Sono studente. La pizza è buona.",
            "Los adjetivos concuerdan en género y número con el sustantivo: alto/alta/alti/alte. Las nacionalidades se escriben con minúscula (a diferencia del inglés): Ana è spagnola.",
          ],
          examples: [
            { it: "Io sono studente.", es: "Yo soy estudiante." },
            { it: "Noi siamo italiani.", es: "Nosotros somos italianos." },
            { it: "Maria è alta e simpatica.", es: "María es alta y simpática." },
          ],
          vocabIds: ["w-studente", "w-insegnante"], exerciseIds: ["ex-a1-004", "ex-a1-015", "ex-a1-029", "ex-a1-012"],
          conversationPrompt: { it: "Di dove sei? Come sei?", es: "¿De dónde eres? ¿Cómo eres?" },
          checkpointIds: ["ex-a1-004", "ex-a1-015", "ex-a1-029"] }),
        L({ id: "les-a1-2", level: "A1", title: "Avere y las expresiones idiomáticas", titleIt: "Il verbo avere",
          objectives: ["Conjugar avere", "Expresar hambre, sed, frío y calor", "Decir la edad"],
          explanation: [
            "avere: ho, hai, ha, abbiamo, avete, hanno. La h es muda. El italiano “tiene” donde el español “es/está”: ho fame (tengo hambre), ho sete, ho freddo, ho caldo, ho sonno, ho fretta, ho paura.",
            "La edad también con avere: Ho vent'anni (tengo veinte años). Pregunta: Quanti anni hai?",
          ],
          examples: [
            { it: "Ho fame! Andiamo al bar?", es: "¡Tengo hambre! ¿Vamos al bar?" },
            { it: "Quanti anni hai? — Ne ho ventitré.", es: "¿Cuántos años tienes? — Tengo veintitrés." },
          ],
          vocabIds: ["w-caffe", "w-acqua"], exerciseIds: ["ex-a1-003", "ex-a1-016", "ex-a1-026"],
          conversationPrompt: { it: "Hai fame? Hai sete?", es: "¿Tienes hambre? ¿Tienes sed?" },
          checkpointIds: ["ex-a1-003", "ex-a1-016"] }),
        L({ id: "les-a1-3", level: "A1", title: "Artículos y sustantivos", titleIt: "Articoli e sostantivi",
          objectives: ["Elegir il/lo/la/l'", "Formar los plurales regulares", "Reconocer excepciones frecuentes"],
          explanation: [
            "El artículo masculino tiene tres formas según la letra inicial: il libro, lo studente, l'amico. En plural: i libri, gli studenti, gli amici. El femenino: la casa, l'amica → le case, le amiche.",
            "Reglas de plural: -o → -i, -a → -e, -e → -i. Excepciones queridas: il problema → i problemi (masculino en -a), la mano → le mani (femenino en -o).",
          ],
          examples: [
            { it: "lo zaino → gli zaini", es: "la mochila → las mochilas" },
            { it: "il problema → i problemi", es: "el problema → los problemas" },
          ],
          vocabIds: ["w-libro", "w-chiave", "w-casa"], exerciseIds: ["ex-a1-001", "ex-a1-002", "ex-a1-007", "ex-a1-013", "ex-a1-018"],
          conversationPrompt: { it: "Che cos'è? È un libro o una rivista?", es: "¿Qué es? ¿Es un libro o una revista?" },
          checkpointIds: ["ex-a1-001", "ex-a1-007", "ex-a1-013"] }),
      ]},
      { id: "u-a1-2", level: "A1", title: "La familia", titleIt: "La famiglia", lessons: [
        L({ id: "les-a1-4", level: "A1", title: "Los miembros de la familia", titleIt: "I membri della famiglia",
          objectives: ["Nombrar a los parientes", "Usar possessivos (mio, tua…)", "Presentar a alguien"],
          explanation: [
            "El árbol genealógico italiano: la madre, il padre, il fratello, la sorella, il figlio/la figlia, il nonno/la nonna, lo zio/la zia, il cugino/la cugina.",
            "Los posesivos concuerdan con la COSA poseída, no con el poseedor: mio fratello, mia sorella, i miei genitori. Singularidad: el posesivo normalmente lleva artículo (il mio libro), excepto con parientes singulares: mio padre, mia madre (sin artículo).",
          ],
          examples: [
            { it: "Ti presento mia sorella Laura.", es: "Te presento a mi hermana Laura." },
            { it: "I miei genitori abitano a Roma.", es: "Mis padres viven en Roma." },
          ],
          vocabIds: ["w-madre", "w-padre", "w-fratello", "w-sorella", "w-nonna", "w-nonno"],
          exerciseIds: ["ex-a1-026", "ex-a1-020"],
          conversationPrompt: { it: "Hai fratelli o sorelle?", es: "¿Tienes hermanos o hermanas?" },
          checkpointIds: ["ex-a1-026", "ex-a1-020"] }),
        L({ id: "les-a1-5", level: "A1", title: "Cómo es tu familia", titleIt: "Com'è la tua famiglia?",
          objectives: ["Describir el carácter", "Usar adjetivos comunes", "Preguntar por alguien"],
          explanation: [
            "Adjetivos de carácter imprescindibles: simpatico/a (agradable), serio/a, allegro/a (alegre), tranquillo/a, nervoso/a, gentile (amable), testardo/a (terco).",
            "La pregunta clave: Com'è…? (¿cómo es…?). Respuestas con essere + adjetivo: Mio fratello è molto simpatico. Para el aspecto físico: alto/a, basso/a, magro/a, grasso/a.",
          ],
          examples: [
            { it: "Com'è tua sorella? — È molto allegra.", es: "¿Cómo es tu hermana? — Es muy alegre." },
          ],
          vocabIds: ["w-moglie", "w-marito", "w-figlio"], exerciseIds: ["ex-a1-029", "ex-a1-012"],
          conversationPrompt: { it: "Com'è la tua famiglia?", es: "¿Cómo es tu familia?" },
          checkpointIds: ["ex-a1-029"] }),
        L({ id: "les-a1-6", level: "A1", title: "La casa", titleIt: "La casa",
          objectives: ["Nombrar las habitaciones", "Usar hay: c'è / ci sono", "Describir tu casa"],
          explanation: [
            "Las habitaciones: la cucina, la camera (da letto), il bagno, il salotto. Muebles: il tavolo, il letto, la porta, la finestra.",
            "Para decir “hay”: c'è (singular) y ci sono (plural): C'è un bagno? Ci sono due camere. Es la estructura perfecta para describir viviendas y hoteles.",
          ],
          examples: [
            { it: "C'è una cucina grande.", es: "Hay una cocina grande." },
            { it: "Ci sono due bagni.", es: "Hay dos baños." },
          ],
          vocabIds: ["w-casa", "w-cucina", "w-camera", "w-bagno", "w-tavolo", "w-letto"],
          exerciseIds: ["ex-a1-007", "ex-a1-008"],
          conversationPrompt: { it: "Com'è la tua casa? Quante camere ci sono?", es: "¿Cómo es tu casa? ¿Cuántas habitaciones hay?" },
          checkpointIds: ["ex-a1-008"] }),
      ]},
      { id: "u-a1-3", level: "A1", title: "Al bar y en la ciudad", titleIt: "Al bar e in città", lessons: [
        L({ id: "les-a1-7", level: "A1", title: "En el bar", titleIt: "Al bar",
          objectives: ["Pedir un café y algo de comer", "Preguntar precios", "Pagar con cortesía"],
          explanation: [
            "El rito del bar italiano: se pide al banco (al banco), se paga en caja (alla cassa) y casi nadie se sienta sin pagar antes. El espresso se pide simplemente “un caffè”; el capuchino es bebida de mañana (¡nunca después de comer!).",
            "Frases clave: Vorrei un caffè (querría un café — cortés), Quanto costa? (¿cuánto cuesta?), Il conto, per favore. Para desayunar: un caffè e un cornetto.",
          ],
          examples: [
            { it: "Un caffè e un cornetto, per favore.", es: "Un café y un croissant, por favor." },
            { it: "Quanto costa? — Due euro.", es: "¿Cuánto cuesta? — Dos euros." },
          ],
          vocabIds: ["w-caffe", "w-ristorante", "w-conto", "w-acqua"], exerciseIds: ["ex-a1-021", "ex-asc-001", "ex-asc-002", "ex-a1-024"],
          conversationPrompt: { it: "Buongiorno! Cosa desidera?", es: "¡Buenos días! ¿Qué desea?" },
          checkpointIds: ["ex-a1-021", "ex-asc-001"] }),
        L({ id: "les-a1-8", level: "A1", title: "En la ciudad", titleIt: "In città",
          objectives: ["Nombrar lugares de la ciudad", "Pedir direcciones", "Entender indicaciones básicas"],
          explanation: [
            "Lugares: la piazza, la chiesa, il museo, la stazione, la banca, la farmacia, il centro storico. Para orientarse: a destra (a la derecha), a sinistra (a la izquierda), sempre diritto (todo recto).",
            "Preguntar: Scusi, dov'è la stazione? / Dov'è il bagno? / C'è una farmacia qui vicino? Respuesta típica: Vada sempre diritto e poi giri a destra.",
          ],
          examples: [
            { it: "Scusi, dov'è la stazione?", es: "Disculpe, ¿dónde está la estación?" },
            { it: "Sempre diritto, poi a sinistra.", es: "Todo recto, luego a la izquierda." },
          ],
          vocabIds: ["w-piazza", "w-museo", "w-chiesa", "w-citta", "w-centro", "w-farmacia"],
          exerciseIds: ["ex-a1-019", "ex-sit-dir-1", "ex-sit-dir-2"],
          conversationPrompt: { it: "Scusi, dov'è il museo?", es: "Disculpe, ¿dónde está el museo?" },
          checkpointIds: ["ex-sit-dir-1", "ex-sit-dir-2"] }),
        L({ id: "les-a1-9", level: "A1", title: "Compras básicas", titleIt: "Fare la spesa",
          objectives: ["Pedir cantidades en el mercado", "Preguntar precios", "Pagar en efectivo o con tarjeta"],
          explanation: [
            "En el mercado: Un chilo di pane (un kilo de pan), mezzo chilo di formaggio, due mele. Para preguntar el precio: Quanto costa? / Quanto costano? (plural).",
            "Al pagar: Pago in contanti (en efectivo) o con la carta (con tarjeta). La bolsa se paga: La busta, per favore. Utile: Posso pagare con la carta?",
          ],
          examples: [
            { it: "Un chilo di pane, per favore.", es: "Un kilo de pan, por favor." },
            { it: "Posso pagare con la carta?", es: "¿Puedo pagar con tarjeta?" },
          ],
          vocabIds: ["w-pane", "w-formaggio", "w-frutta", "w-prezzo", "w-mercato", "w-pagare"],
          exerciseIds: ["ex-a2-021", "ex-a1-024", "ex-sit-sup-1"],
          conversationPrompt: { it: "Buongiorno! Desidera?", es: "¡Buenos días! ¿Qué desea?" },
          checkpointIds: ["ex-a2-021", "ex-sit-sup-1"] }),
      ]},
      { id: "u-a1-4", level: "A1", title: "El tiempo y los números", titleIt: "Il tempo e i numeri", lessons: [
        L({ id: "les-a1-10", level: "A1", title: "El clima", titleIt: "Che tempo fa?",
          objectives: ["Describir el clima", "Usar hace calor/frío: fa caldo/fa freddo", "Comentar el clima como los italianos"],
          explanation: [
            "La pregunta ritual: Che tempo fa? (¿qué tiempo hace?). Respuestas: C'è il sole (hace sol), Piove (llueve), Nevica (nieva), C'è il vento (hace viento), È nuvoloso (está nublado).",
            "Con temperaturas: Fa caldo (hace calor), Fa freddo (hace frío). En Italia hablar del tiempo es deporte nacional: usa esta lección para romper el hielo con cualquiera.",
          ],
          examples: [
            { it: "Che tempo fa oggi? — C'è il sole!", es: "¿Qué tiempo hace hoy? — ¡Hace sol!" },
          ],
          vocabIds: ["w-sole", "w-pioggia", "w-neve", "w-vento", "w-caldo", "w-freddo"],
          exerciseIds: ["ex-a2-018"],
          conversationPrompt: { it: "Che tempo fa nella tua città?", es: "¿Qué tiempo hace en tu ciudad?" },
          checkpointIds: ["ex-a2-018"] }),
        L({ id: "les-a1-11", level: "A1", title: "La hora", titleIt: "Che ora è?",
          objectives: ["Preguntar y decir la hora", "Usar e mezza / e un quarto", "Hablar de horarios"],
          explanation: [
            "Che ora è? / Che ore sono? Respuesta: È l'una (es la una) / Sono le due, le tre… Para los minutos: le tre e dieci, le quattro e mezza (y media), le cinque e un quarto (y cuarto), le sei meno un quarto (menos cuarto).",
            "Mediodía y medianoche: è mezzogiorno, è mezzanotte. Horarios: A che ora apriamo? Alle nove. El italiano usa alle (a + le) para las horas: alle otto.",
          ],
          examples: [
            { it: "Che ora è? — Sono le tre e mezza.", es: "¿Qué hora es? — Son las tres y media." },
          ],
          vocabIds: [], exerciseIds: ["ex-a1-009", "ex-a1-030"],
          conversationPrompt: { it: "A che ora ci vediamo?", es: "¿A qué hora nos vemos?" },
          checkpointIds: ["ex-a1-009"] }),
        L({ id: "les-a1-12", level: "A1", title: "Examen de unidad A1", titleIt: "Verifica finale A1",
          objectives: ["Repasar los contenidos del nivel A1", "Demostrar dominio de las estructuras básicas"],
          explanation: [
            "Esta lección final es una verificación global: artículos, essere/avere, presente regular, preguntas, números y hora. Supera la prueba para completar el nivel A1 y desbloquear tu certificado.",
          ],
          examples: [{ it: "In bocca al lupo!", es: "¡Mucha suerte! (literalmente: en la boca del lobo)" }],
          vocabIds: [], exerciseIds: ["ex-a1-001", "ex-a1-004", "ex-a1-010"],
          conversationPrompt: { it: "Come ti chiami? Di dove sei? Che lavoro fai?", es: "¿Cómo te llamas? ¿De dónde eres? ¿A qué te dedicas?" },
          checkpointIds: ["ex-a1-002", "ex-a1-015", "ex-a1-016", "ex-a1-021", "ex-a1-025"] }),
      ]},
    ],
  },

  /* ══════════ A2 ══════════ */
  {
    level: "A2", label: "A2 · Básico", goal: "Contar el pasado, planear el futuro, viajar y resolver situaciones prácticas.", hours: 80,
    units: [
      { id: "u-a2-1", level: "A2", title: "Contar el pasado", titleIt: "Raccontare il passato", lessons: [
        L({ id: "les-a2-1", level: "A2", title: "Passato prossimo", titleIt: "Il passato prossimo",
          objectives: ["Formar el passato prossimo con avere y essere", "Concordar el participio con essere", "Contar hechos concretos"],
          explanation: [
            "El passato prossimo cuenta hechos terminados: Ieri ho visto un film, Siamo andati al mare. Se forma con avoir/essere + participio (-ato, -uto, -ito).",
            "Usan essere: verbos de movimiento (andare, venire, partire, arrivare, tornare) y todos los reflexivos. Con essere el participio concuerda: Anna è andata, i ragazzi sono tornati. El error número uno del estudiante hispanohablante: “ho andato” ❌.",
          ],
          examples: [
            { it: "Ieri ho mangiato una pizza fantastica.", es: "Ayer comí una pizza fantástica." },
            { it: "Siamo andati al cinema con gli amici.", es: "Fuimos al cine con amigos." },
          ],
          vocabIds: ["w-viaggio", "w-amico"], exerciseIds: ["ex-a2-001", "ex-a2-002", "ex-a2-009", "ex-a2-011"],
          conversationPrompt: { it: "Cosa hai fatto ieri?", es: "¿Qué hiciste ayer?" },
          checkpointIds: ["ex-a2-001", "ex-a2-009", "ex-a2-011"] }),
        L({ id: "les-a2-2", level: "A2", title: "Imperfetto: el pasado que dura", titleIt: "L'imperfetto",
          objectives: ["Formar el imperfetto", "Distinguir descripción vs hecho", "Hablar de hábitos y de la infancia"],
          explanation: [
            "El imperfetto describe el pasado: cómo era, cómo estaba, qué solía pasar: Da bambino giocavo sempre fuori. Era un ragazzo tranquillo.",
            "La diferencia clave con el passato prossimo: el imperfetto pone el escenario (Mentre studiavo…), el passato prossimo trae el evento (…è arrivato Marco). Los dos juntos son el corazón del italiano hablado.",
          ],
          examples: [
            { it: "Prima abitavo a Torino.", es: "Antes vivía en Turín." },
            { it: "Mentre cenavamo, ha suonato il telefono.", es: "Mientras cenábamos, sonó el teléfono." },
          ],
          vocabIds: ["w-casa", "w-musica"], exerciseIds: ["ex-a2-003", "ex-a2-010", "ex-a2-014"],
          conversationPrompt: { it: "Com'eri da bambino? Cosa facevi?", es: "¿Cómo eras de niño? ¿Qué hacías?" },
          checkpointIds: ["ex-a2-003", "ex-a2-014"] }),
        L({ id: "les-a2-3", level: "A2", title: "La rutina diaria", titleIt: "La routine quotidiana",
          objectives: ["Usar verbos reflexivos", "Narrar tu día", "Hablar de horarios y hábitos"],
          explanation: [
            "La rutina se construye con reflexivos: mi sveglio (me despierto), mi alzo, mi lavo, mi vesto, mi riposo. En pasado compuesto usan essere: Mi sono svegliato alle sette.",
            "La frecuencia: sempre (siempre), spesso (a menudo), ogni tanto (de vez en cuando), mai (nunca), di solito (normalmente). Describe tu giornata típica y habrás dado un salto de nivel.",
          ],
          examples: [
            { it: "Mi sveglio alle sette e faccio colazione.", es: "Me despierto a las siete y desayuno." },
            { it: "Di solito vado a letto a mezzanotte.", es: "Normalmente me acuesto a medianoche." },
          ],
          vocabIds: ["w-colazione", "w-lavoro"], exerciseIds: ["ex-a2-008", "ex-a2-019"],
          conversationPrompt: { it: "Com'è la tua giornata tipica?", es: "¿Cómo es tu día típico?" },
          checkpointIds: ["ex-a2-008"] }),
      ]},
      { id: "u-a2-2", level: "A2", title: "Viajes y transporte", titleIt: "Viaggi e trasporti", lessons: [
        L({ id: "les-a2-4", level: "A2", title: "En el tren y la estación", titleIt: "Alla stazione",
          objectives: ["Comprar billetes", "Preguntar horarios y andenes", "Entender anuncios básicos"],
          explanation: [
            "Frases esenciales: Un biglietto per Firenze, per favore. A che ora parte il treno? Da quale binario? (¿de qué andén?). Il treno è in ritardo (va con retraso) es la frase que más oirás en Italia.",
            "Tipos de tren: la Frecciarossa (alta velocidad), il regionale (regional, sin reserva). Valida el billete: Devo convalidare il biglietto? En los regionales hay que validarlo en las máquinas amarillas o verdes.",
          ],
          examples: [
            { it: "Un biglietto di andata e ritorno per Roma.", es: "Un billete de ida y vuelta a Roma." },
            { it: "Il treno è in ritardo di quindici minuti.", es: "El tren va con 15 minutos de retraso." },
          ],
          vocabIds: ["w-treno", "w-biglietto", "w-stazione", "w-fermata", "w-autobus"],
          exerciseIds: ["ex-asc-003", "ex-asc-004"],
          conversationPrompt: { it: "Un biglietto per Firenze, per favore.", es: "Un billete para Florencia, por favor." },
          checkpointIds: ["ex-asc-003", "ex-asc-004"] }),
        L({ id: "les-a2-5", level: "A2", title: "En el hotel", titleIt: "In albergo",
          objectives: ["Reservar una habitación", "Pedir servicios", "Resolver problemas de la reserva"],
          explanation: [
            "La reserva: Ho una prenotazione a nome… / Vorrei prenotare una camera doppia per due notti. Preguntas útiles: La colazione è inclusa? A che ora è il check-out? C'è il wifi?",
            "Problemas típicos: La camera è troppo rumorosa, Si può cambiare? / L'aria condizionata non funziona. Con il condizionale (vorrei, potrebbe) todo suena mejor.",
          ],
          examples: [
            { it: "Vorrei una camera singola per tre notti.", es: "Querría una habitación individual por tres noches." },
          ],
          vocabIds: ["w-albergo", "w-prenotazione", "w-camerasingola", "w-reception", "w-chiave"],
          exerciseIds: ["ex-a2-016", "ex-a2-022", "ex-sit-hot-1", "ex-sit-hot-2"],
          conversationPrompt: { it: "Buonasera, ho una prenotazione a nome Rossi.", es: "Buenas noches, tengo una reserva a nombre Rossi." },
          checkpointIds: ["ex-a2-016", "ex-sit-hot-2"] }),
        L({ id: "les-a2-6", level: "A2", title: "En el aeropuerto", titleIt: "All'aeroporto",
          objectives: ["Facturar y pasar seguridad", "Entender el vocabulario del vuelo", "Resolver imprevistos"],
          explanation: [
            "El check-in: Passaporto e biglietto, per favore. Quante valigie ha? La valigia da stiva (facturada) vs il bagaglio a mano (de mano). Embarque: l'imbarco è al gate 12.",
            "Emergencias útiles: Ho perso il volo (he perdido el vuelo), Il volo è cancellato, Vorrei cambiare il biglietto. En el duty free: Desidera qualcosa?",
          ],
          examples: [
            { it: "Quanti bagagli ha da imbarcare?", es: "¿Cuántas maletas tiene para facturar?" },
          ],
          vocabIds: ["w-aeroporto", "w-volo", "w-passaporto", "w-valigia", "w-prenotare"],
          exerciseIds: ["ex-a2-023", "ex-sit-aer-1", "ex-sit-aer-2"],
          conversationPrompt: { it: "Passaporto e biglietto, per favore.", es: "Pasaporte y billete, por favor." },
          checkpointIds: ["ex-a2-023", "ex-sit-aer-1"] }),
      ]},
      { id: "u-a2-3", level: "A2", title: "Salud y ciudad", titleIt: "Salute e città", lessons: [
        L({ id: "les-a2-7", level: "A2", title: "En el médico", titleIt: "Dal medico",
          objectives: ["Describir síntomas", "Entender indicaciones", "Comprar medicinas en la farmacia"],
          explanation: [
            "Síntomas: Ho mal di testa (me duele la cabeza), Ho mal di gola, Ho la febbre, Mi sento male (me siento mal), Ho mal di stomaco. El italiano usa avere + mal di.",
            "En la farmacia: Avete qualcosa per la tosse? (¿tienen algo para la tos?). Prendo questa medicina tre volte al giorno. La ricetta (receta) la hace el médico.",
          ],
          examples: [
            { it: "Ho mal di gola e mi fa male la testa.", es: "Me duele la garganta y me duele la cabeza." },
          ],
          vocabIds: ["w-medico", "w-farmacia", "w-malato", "w-dolore", "w-febbre", "w-medicina"],
          exerciseIds: ["ex-asc-006", "ex-sit-med-1"],
          conversationPrompt: { it: "Dottore, mi sento male.", es: "Doctor, me siento mal." },
          checkpointIds: ["ex-sit-med-1", "ex-asc-006"] }),
        L({ id: "les-a2-8", level: "A2", title: "Preposiciones y la ciudad", titleIt: "Preposizioni articolate",
          objectives: ["Fusionar preposición + artículo", "Describir ubicaciones", "Usar a/in/da correctamente"],
          explanation: [
            "Las fusiones más usadas: a + il = al (vado al bar), da + il = dal (dal dottore), in + il = nel (nel centro), su + il = sul (sul tavolo), di + il = del (il libro del professore).",
            "La lógica de los lugares: ciudades con a (a Milano), países con in (in Italia), y da para personas/locales de servicio (da Maria, dal panellaio, dal barbiere).",
          ],
          examples: [
            { it: "Abito nel centro storico.", es: "Vivo en el centro histórico." },
            { it: "Il telefono è sul tavolo.", es: "El teléfono está en la mesa." },
          ],
          vocabIds: ["w-citta", "w-centro", "w-ponte"],
          exerciseIds: ["ex-a2-004", "ex-a2-005", "ex-a2-013", "ex-a2-024"],
          conversationPrompt: { it: "Dove abiti? Vicino al centro?", es: "¿Dónde vives? ¿Cerca del centro?" },
          checkpointIds: ["ex-a2-004", "ex-a2-013"] }),
        L({ id: "les-a2-9", level: "A2", title: "Examen de unidad A2", titleIt: "Verifica finale A2",
          objectives: ["Repasar pasados, preposiciones y viajes", "Demostrar dominio A2"],
          explanation: [
            "Verificación global del nivel A2: passato prossimo, imperfetto, reflexivos, preposiciones articuladas, situaciones de viaje. Supera la prueba para completar A2 y obtener el certificado.",
          ],
          examples: [{ it: "In bocca al lupo!", es: "¡Mucha suerte!" }],
          vocabIds: [], exerciseIds: ["ex-a2-001", "ex-a2-004"],
          conversationPrompt: { it: "Raccontami il tuo ultimo viaggio.", es: "Cuéntame tu último viaje." },
          checkpointIds: ["ex-a2-002", "ex-a2-006", "ex-a2-009", "ex-a2-016", "ex-a2-020"] }),
      ]},
    ],
  },

  /* ══════════ B1 ══════════ */
  {
    level: "B1", label: "B1 · Intermedio", goal: "Opinar, narrar experiencias, desenvolverte en trabajo y estudio.", hours: 100,
    units: [
      { id: "u-b1-1", level: "B1", title: "Opiniones y deseos", titleIt: "Opinioni e desideri", lessons: [
        L({ id: "les-b1-1", level: "B1", title: "El condicional de la cortesía", titleIt: "Il condizionale",
          objectives: ["Pedir con vorrei/potrei/dovrei", "Expresar deseos", "Proponer planes"],
          explanation: [
            "El condicional convierte cualquier petición en elegancia: Vorrei un caffè vs Voglio un caffè. Con los verbos modales: Potrebbe aiutarmi? (¿podría ayudarme?), Dovremmo parlare (deberíamos hablar).",
            "También expresa deseo e hipótesis presente: Sarebbe bello andare a Roma, Mi piacerebbe viaggiare di più. Son las estructuras que separan el italiano turístico del italiano que suena natural.",
          ],
          examples: [
            { it: "Vorrei cambiare la prenotazione, se è possibile.", es: "Querría cambiar la reserva, si es posible." },
            { it: "Mi piacerebbe visitare Firenze.", es: "Me gustaría visitar Florencia." },
          ],
          vocabIds: ["w-prenotazione", "w-viaggio"], exerciseIds: ["ex-b1-001", "ex-b1-006", "ex-b1-009"],
          conversationPrompt: { it: "Cosa ti piacerebbe fare il prossimo weekend?", es: "¿Qué te gustaría hacer el próximo fin de semana?" },
          checkpointIds: ["ex-b1-001", "ex-b1-006"] }),
        L({ id: "les-b1-2", level: "B1", title: "Subjuntivo presente", titleIt: "Il congiuntivo presente",
          objectives: ["Reconocer los disparadores del subjuntivo", " Conjuntar essere/avere en subjuntivo", "Opinar con penso che / credo che"],
          explanation: [
            "Tras penso che, credo che, spero che, mi pare che el italiano usa subjuntivo: Penso che sia una buona idea. Las formas: sia, abbia, vada, faccia, sappia.",
            "Ojo: según me NO exige subjuntivo (Secondo me è una buona idea). La diferencia entre “credo che sia” y “secondo me è” marca un B1 sólido.",
          ],
          examples: [
            { it: "Credo che Marco abbia ragione.", es: "Creo que Marco tiene razón." },
            { it: "Spero che tu stia bene.", es: "Espero que estés bien." },
          ],
          vocabIds: ["w-amico"], exerciseIds: ["ex-b1-002", "ex-b1-005", "ex-b1-008", "ex-b1-011"],
          conversationPrompt: { it: "Cosa pensi della vita in Italia?", es: "¿Qué piensas de la vida en Italia?" },
          checkpointIds: ["ex-b1-002", "ex-b1-011"] }),
      ]},
      { id: "u-b1-2", level: "B1", title: "Trabajo y estudio", titleIt: "Lavoro e studio", lessons: [
        L({ id: "les-b1-3", level: "B1", title: "La entrevista de trabajo", titleIt: "Il colloquio di lavoro",
          objectives: ["Presentar tu experiencia", "Hablar de tus competencias", "Responder preguntas típicas de entrevista"],
          explanation: [
            "El guion de la entrevista: Mi chiamo…, ho una laurea in… (tengo un título en…), ho lavorato per tre anni come… (trabajé tres años como…), parlo italiano, spagnolo e inglese.",
            "Preguntas del entrevistador: Ci parli di sé / Perché vuole lavorare con noi? / Quali sono i suoi punti di forza? (¿cuáles son sus puntos fuertes?). Respuestas con seguridad: Sono una persona precisa e motivata.",
          ],
          examples: [
            { it: "Ho una laurea in economia.", es: "Tengo un título en economía." },
            { it: "Parlo correntemente tre lingue.", es: "Hablo con fluidez tres idiomas." },
          ],
          vocabIds: ["w-lavoro", "w-colloquio", "w-contratto", "w-stipendio", "w-collega", "w-riunione"],
          exerciseIds: ["ex-b1-014", "ex-b1-015", "ex-asc-005"],
          conversationPrompt: { it: "Mi parli della Sua esperienza professionale.", es: "Hábleme de su experiencia profesional." },
          checkpointIds: ["ex-b1-014", "ex-asc-005"] }),
        L({ id: "les-b1-4", level: "B1", title: "Pronombres combinados", titleIt: "Pronomi combinati",
          objectives: ["Combinar CI + CD (me lo, te lo…)", "Sustituir objetos en conversación", "Pedir prestado con naturalidad"],
          explanation: [
            "Cuando se combinan, el indirecto (mi, ti, gli, le, ci, vi) va primero y se transforma en me, te, glie-, ce, ve: Me lo dici? (¿me lo dices?), Gliel'ho già detto (se lo he dicho).",
            "Con infinitivos, los pronombres se unen al final: Prestarmelo, Spiegarmelo. Es una de las marcas del italiano fluido: úsala y sonarás nativo.",
          ],
          examples: [
            { it: "Questo libro? Te lo presto volentieri.", es: "¿Este libro? Te lo presto encantado." },
            { it: "Me lo puoi spiegare?", es: "¿Me lo puedes explicar?" },
          ],
          vocabIds: ["w-libro"], exerciseIds: ["ex-b1-003", "ex-b1-007", "ex-b1-012"],
          conversationPrompt: { it: "Mi presti la tua penna, per favore?", es: "¿Me prestas tu bolígrafo, por favor?" },
          checkpointIds: ["ex-b1-007", "ex-b1-012"] }),
      ]},
      { id: "u-b1-3", level: "B1", title: "Cultura y media", titleIt: "Cultura e media", lessons: [
        L({ id: "les-b1-5", level: "B1", title: "Leer noticias", titleIt: "Leggere le notizie",
          objectives: ["Leer textos periodísticos adaptados", "Captar la idea principal", "Comentar la actualidad"],
          explanation: [
            "Los géneros periodísticos: la notizia (noticia), l'articolo di fondo (editorial), l'intervista (entrevista), la recensione (reseña). Vocabulario clave: la fonte, il titolo, il sottotitolo, il giornalista.",
            "Para opinar sobre actualidad: Secondo me…, A mio avviso…, Sono d'accordo / Non sono d'accordo. Practica con las lecturas graduadas de la sección Lettura.",
          ],
          examples: [
            { it: "Hai letto l'articolo sul treno ad alta velocità?", es: "¿Has leído el artículo del tren de alta velocidad?" },
          ],
          vocabIds: ["w-giornale", "w-notizia"], exerciseIds: ["ex-let-004", "ex-cul-001"],
          conversationPrompt: { it: "Cosa ne pensi delle notizie di oggi?", es: "¿Qué piensas de las noticias de hoy?" },
          checkpointIds: ["ex-let-004"] }),
        L({ id: "les-b1-6", level: "B1", title: "Examen de unidad B1", titleIt: "Verifica finale B1",
          objectives: ["Repasar condicional, subjuntivo y pronombres", "Demostrar dominio B1"],
          explanation: [
            "Verificación global B1: condizionale, congiuntivo, pronomi, colloquio di lavoro y comprensión de noticias. Supera la prueba para completar el nivel.",
          ],
          examples: [{ it: "In bocca al lupo!", es: "¡Mucha suerte!" }],
          vocabIds: [], exerciseIds: ["ex-b1-001", "ex-b1-002"],
          conversationPrompt: { it: "Perché studi l'italiano? Cosa ti piacerebbe fare in futuro?", es: "¿Por qué estudias italiano? ¿Qué te gustaría hacer en el futuro?" },
          checkpointIds: ["ex-b1-001", "ex-b1-005", "ex-b1-008", "ex-b1-013", "ex-b1-014"] }),
      ]},
    ],
  },

  /* ══════════ B2 ══════════ */
  {
    level: "B2", label: "B2 · Intermedio alto", goal: "Argumentar, debatir, dominar subjuntivo y período hipotético.", hours: 120,
    units: [
      { id: "u-b2-1", level: "B2", title: "Argumentar", titleIt: "Argomentare", lessons: [
        L({ id: "les-b2-1", level: "B2", title: "El período hipotético", titleIt: "Il periodo ipotetico",
          objectives: ["Distinguir los 3 tipos de condicional", "Usar se + subjuntivo correctamente", "Expresar arrepentimientos (3er tipo)"],
          explanation: [
            "Tipo 1 (real): Se piove, resto a casa. Tipo 2 (hipotético): Se avessi tempo, viaggerei. Tipo 3 (irreal pasado): Se l'avessi saputo, sarei venuto.",
            "La regla de oro: tras “se” hipotético NUNCA va condicional. El error “se avrei” es la señal más clara de estudiante en progreso; dominar “se avessi… avrei” es la señal de B2 consolidado.",
          ],
          examples: [
            { it: "Se avessi più tempo, leggerei di più.", es: "Si tuviera más tiempo, leería más." },
            { it: "Se avessi studiato, avrei passato l'esame.", es: "Si hubiera estudiado, habría pasado el examen." },
          ],
          vocabIds: ["w-esame", "w-libro"], exerciseIds: ["ex-b2-001", "ex-b2-002", "ex-b2-007", "ex-b2-009"],
          conversationPrompt: { it: "Se potessi vivere in qualsiasi città italiana, dove vivresti?", es: "Si pudieras vivir en cualquier ciudad italiana, ¿dónde vivirías?" },
          checkpointIds: ["ex-b2-001", "ex-b2-007", "ex-b2-009"] }),
        L({ id: "les-b2-2", level: "B2", title: "Ci, ne y estilo indirecto", titleIt: "Ci, ne e discorso indiretto",
          objectives: ["Usar ci locativo y ne partitivo", "Reportar discursos al pasado", "Elegir registro formal/informal"],
          explanation: [
            "ci = allá/eso: Ci vado domani, Ci penso. ne = de eso/cantidad: Ne ho bisogno, Ne voglio due. Estas dos partículas dan un salto de naturalidad enorme.",
            "El estilo indirecto retrocede los tiempos: “Sono stanco” → Ha detto che era stanco. Y el registro: en el trabajo, Lei + formas condicionales (Le sarei grato se mi inviasse) hasta que alguien propone “diamoci del tu”.",
          ],
          examples: [
            { it: "Ci vado domani.", es: "Voy mañana (allá)." },
            { it: "Ne ho bisogno subito.", es: "Lo necesito ya (de eso)." },
          ],
          vocabIds: ["w-riunione", "w-contratto"], exerciseIds: ["ex-b2-003", "ex-b2-004", "ex-b2-005", "ex-b2-006", "ex-b2-008", "ex-b2-010"],
          conversationPrompt: { it: "Il suo profilo ci interessa. Ci può dire di più?", es: "Su perfil nos interesa. ¿Puede contarnos más?" },
          checkpointIds: ["ex-b2-003", "ex-b2-005", "ex-b2-010"] }),
      ]},
      { id: "u-b2-2", level: "B2", title: "Sociedad y actualidad", titleIt: "Società e attualità", lessons: [
        L({ id: "les-b2-3", level: "B2", title: "Debatir sobre el ambiente", titleIt: "Discutere dell'ambiente",
          objectives: ["Argumentar a favor y en contra", "Usar conectores argumentativos", "Discutir de temas sociales"],
          explanation: [
            "Conectores del debate: innanzitutto (en primer lugar), inoltre (además), tuttavia (sin embargo), peraltro (por lo demás), di conseguenza (por consiguiente), in conclusione.",
            "Vocabulario de actualidad: l'inquinamento, il cambiamento climatico, le energie rinnovabili, i rifiuti (basura), il riciclaggio (reciclaje). Los italianos debaten con pasión: aprende a matizar con “in un certo senso”, “a mio avviso”.",
          ],
          examples: [
            { it: "A mio avviso, il riciclaggio dovrebbe essere obbligatorio.", es: "En mi opinión, el reciclaje debería ser obligatorio." },
            { it: "Se tutti contribuissero, l'inquinamento diminuirebbe.", es: "Si todos contribuyeran, la contaminación disminuiría." },
          ],
          vocabIds: ["w-ambiente", "w-inquinamento", "w-economia", "w-notizia"],
          exerciseIds: ["ex-b2-012", "ex-let-006"],
          conversationPrompt: { it: "Quali misure dovrebbe adottare il governo per l'ambiente?", es: "¿Qué medidas debería adoptar el gobierno por el ambiente?" },
          checkpointIds: ["ex-b2-012", "ex-let-006"] }),
        L({ id: "les-b2-4", level: "B2", title: "Examen de unidad B2", titleIt: "Verifica finale B2",
          objectives: ["Repasar hipótesis, ci/ne y registro", "Demostrar dominio B2"],
          explanation: [
            "Verificación global B2: periodo ipotetico, particelle, discorso indiretto e argomentazione. Supera la prueba para completar el nivel.",
          ],
          examples: [{ it: "In bocca al lupo!", es: "¡Mucha suerte!" }],
          vocabIds: [], exerciseIds: ["ex-b2-001", "ex-b2-005"],
          conversationPrompt: { it: "Se lei potesse cambiare una cosa della sua città, cosa cambierebbe?", es: "Si pudiera cambiar una cosa de su ciudad, ¿qué cambiaría?" },
          checkpointIds: ["ex-b2-002", "ex-b2-004", "ex-b2-006", "ex-b2-009", "ex-b2-010"] }),
      ]},
    ],
  },

  /* ══════════ C1 ══════════ */
  {
    level: "C1", label: "C1 · Avanzado", goal: "Dominar registros, concordancias avanzadas y el italiano profesional.", hours: 140,
    units: [
      { id: "u-c1-1", level: "C1", title: "Registros y estilo", titleIt: "Registri e stile", lessons: [
        L({ id: "les-c1-1", level: "C1", title: "La concordancia avanzada", titleIt: "La concordanza avanzata",
          objectives: ["Concordar el participio con objeto antepuesto", "Dominar las estructucciones con essere", "Escribir con corrección nativa"],
          explanation: [
            "Con avere + pronombre objeto antepuesto, el participio concuerda: L'ho vista ieri, Li ho incontrati al bar. En la prosa cuidadosa también con relativos: la musica che ho ascoltata.",
            "Las estructucciones impersonales llevan masculino singular: È stato detto, Si è proceduto. Estos detalles invisibles marcan la diferencia entre un B2 alto y un C1 real.",
          ],
          examples: [
            { it: "Maria? L'ho vista ieri al mercato.", es: "¿María? La vi ayer en el mercado." },
            { it: "È stato un onore incontrarLa.", es: "Ha sido un honor conocerla." },
          ],
          vocabIds: ["w-mercato", "w-amico"], exerciseIds: ["ex-c1-003", "ex-c1-005"],
          conversationPrompt: { it: "Ha mai avuto l'occasione di visitare Bologna?", es: "¿Ha tenido ocasión de visitar Bolonia?" },
          checkpointIds: ["ex-c1-003", "ex-c1-005"] }),
        L({ id: "les-c1-2", level: "C1", title: "El italiano profesional y académico", titleIt: "L'italiano professionale",
          objectives: ["Redactar correos formales", "Usar construcciones impersonales", "Manejar el vocabulario de oficina"],
          explanation: [
            "El correo formal tiene su liturgia: Spettabile / Gentile Dott. Rossi, In riferimento alla Sua del 10 maggio, Le comunichiamo che…, In attesa di un Suo cortese riscontro, Distinti saluti.",
            "Construcciones impersonales académicas: si è proceduto a, il presente studio si propone di, è emerso che. Conectores: pertanto, peraltro, in merito a, come da allegato.",
          ],
          examples: [
            { it: "In riferimento alla Sua richiesta, Le inviamo il preventivo.", es: "En referencia a su solicitud, le enviamos el presupuesto." },
          ],
          vocabIds: ["w-lavoro", "w-riunione", "w-contratto"], exerciseIds: ["ex-c1-002", "ex-c1-004", "ex-c1-006"],
          conversationPrompt: { it: "Gentile collega, Le scrivo in merito alla riunione di domani.", es: "Estimado colega, le escribo en relación a la reunión de mañana." },
          checkpointIds: ["ex-c1-002", "ex-c1-006"] }),
      ]},
      { id: "u-c1-2", level: "C1", title: "Textos complejos", titleIt: "Testi complessi", lessons: [
        L({ id: "les-c1-3", level: "C1", title: "Leer literatura contemporánea", titleIt: "Leggere letteratura contemporanea",
          objectives: ["Leer prosa contemporánea auténtica", "Identificar registro e ironía", "Comentar un pasaje literario"],
          explanation: [
            "El Novecento italiano ofrece tesoros accesibles: Italo Calvino (Le città invisibili), Natalia Ginzburg (Lessico famigliare), Elena Ferrante (L'amica geniale), Andrea Camilleri (la serie de Montalbano, con siciliano suavizado).",
            "Al leer, atiende al free indirect discourse (el discurso indirecto libre), marca de la narrativa de Ginzburg. Comenta con: Il brano è pervaso di…, L'autore mette in scena…",
          ],
          examples: [
            { it: "“Si sarebbe detto che…”, incipit típico de la prosa novecentesca.", es: "«Se habría dicho que…», inicio típico de la prosa del Novecento." },
          ],
          vocabIds: ["w-romanzo", "w-scrittore", "w-capitolo"], exerciseIds: ["ex-let-006", "ex-b2-011"],
          conversationPrompt: { it: "Quale scrittore italiano consiglia di leggere? Perché?", es: "¿Qué escritor italiano recomienda leer? ¿Por qué?" },
          checkpointIds: ["ex-let-006"] }),
        L({ id: "les-c1-4", level: "C1", title: "Examen de unidad C1", titleIt: "Verifica finale C1",
          objectives: ["Repasar concordancias, registro y literatura", "Demostrar dominio C1"],
          explanation: ["Verificación global C1: concordanza del participio, costruzioni impersonali, registro epistolare e lettura letteraria."],
          examples: [{ it: "In bocca al lupo!", es: "¡Mucha suerte!" }],
          vocabIds: [], exerciseIds: ["ex-c1-001", "ex-c1-003"],
          conversationPrompt: { it: "Ci parli di un libro che l'ha colpita.", es: "Háblenos de un libro que le haya marcado." },
          checkpointIds: ["ex-c1-001", "ex-c1-003", "ex-c1-004", "ex-c1-005", "ex-c1-006"] }),
      ]},
    ],
  },

  /* ══════════ C2 ══════════ */
  {
    level: "C2", label: "C2 · Dominio avanzado", goal: "Matizar como un nativo culto: idiomas, variantes y lengua literaria.", hours: 160,
    units: [
      { id: "u-c2-1", level: "C2", title: "Matices y variantes", titleIt: "Sfumature e varianti", lessons: [
        L({ id: "les-c2-1", level: "C2", title: "Idiomaticidad y regionalismos", titleIt: "Idiomi e regionalismi",
          objectives: ["Interpretar modismos culinarios y náuticos", "Reconocer variantes regionales", "Usar la litote y la ironía"],
          explanation: [
            "El italiano figurado es náutico y culinario: andare in porto, essere in alto mare (estar en pleno mareo), mettere le mani in pasta, essere la ciliegina sulla torta (ser la guinda del pastel).",
            "Variantes: el toscano fo (faccio) y ve' (vai); el uso meridional generoso del passato remoto; el plurale neutro romanesco (le cose → 'e cose). Reconocerlas amplia tu comprensión real del país.",
          ],
          examples: [
            { it: "Quel progetto è andato finalmente in porto.", es: "Ese proyecto por fin se ha realizado." },
            { it: "È la ciliegina sulla torta!", es: "¡Es la guinda del pastel!" },
          ],
          vocabIds: ["w-romanzo", "w-trama"], exerciseIds: ["ex-b2-011", "ex-c2-003"],
          conversationPrompt: { it: "Può fare un esempio di espressione idiomatica che adora?", es: "¿Puede dar un ejemplo de expresión idiomática que adore?" },
          checkpointIds: ["ex-b2-011", "ex-c2-003"] }),
        L({ id: "les-c2-2", level: "C2", title: "La lengua de Dante", titleIt: "La lingua di Dante",
          objectives: ["Leer un terceto de la Divina Commedia", "Reconocer el endecasílabo", "Situar el florentino medieval"],
          explanation: [
            "El endecasillabo (11 sílabas) es el corazón de la poesía italiana: Nel mezzo del cammin di nostra vita. Dante eligió el vernáculo florentino sobre el latín y creó, sin saberlo, el estándar del italiano moderno.",
            "Léelo en voz alta buscando el acento en 10ª sílaba. La tradición sigue viva: de Petrarca a Leopardi (L'infinito), de Montale a Pasolini. En C2, la lengua es también memoria cultural.",
          ],
          examples: [
            { it: "Nel mezzo del cammin di nostra vita / mi ritrovai per una selva oscura.", es: "En mitad del camino de nuestra vida / me encontré en una selva oscura." },
          ],
          vocabIds: ["w-poeta", "w-poesia", "w-letteratura"].slice(0, 2), exerciseIds: ["ex-c2-002"],
          conversationPrompt: { it: "Quale verso della tradizione italiana la colpisce di più?", es: "¿Qué verso de la tradición italiana le impacta más?" },
          checkpointIds: ["ex-c2-002"] }),
      ]},
      { id: "u-c2-2", level: "C2", title: "Padronza stilistica", titleIt: "Dominio estilístico", lessons: [
        L({ id: "les-c2-3", level: "C2", title: "Escribir con estilo", titleIt: "Scrivere con stile",
          objectives: ["Controlar la variedad de registros", "Usar matizes con subjuntivo", "Redactar ensayos complejos"],
          explanation: [
            "El C2 escrito se reconoce en el matiz: Non è che non voglia (no es que no quiera), Sarebbe come dire che… (sería como decir que), Semmai il contrario (más bien al contrario).",
            "El ensayo a la italiana: tesi (tesis), antitesi, sintesi. Conectores de refinamiento: per l'appunto, a dire il vero, va detto che, giova ricordare che.",
          ],
          examples: [
            { it: "Non è che non voglia, è che non posso.", es: "No es que no quiera, es que no puedo." },
            { it: "Va detto che il contesto è cambiato.", es: "Cabe decir que el contexto ha cambiado." },
          ],
          vocabIds: ["w-trama"], exerciseIds: ["ex-c2-004", "ex-c2-001"],
          conversationPrompt: { it: "Concorda con l'affermazione che la lingua shapes il pensiero?", es: "¿Está de acuerdo con que la lengua moldea el pensamiento?" },
          checkpointIds: ["ex-c2-001", "ex-c2-004"] }),
        L({ id: "les-c2-4", level: "C2", title: "Examen final C2", titleIt: "Esame finale C2",
          objectives: ["Demostrar dominio completo", "Integrar todos los contenidos del curso"],
          explanation: ["Verificación global C2: idiomi, metrica, registro e sfumature. Supera la prueba para obtener el certificado de dominio avanzado."],
          examples: [{ it: "In bocca al lupo! Crepi il lupo!", es: "¡Mucha suerte! (respuesta ritual: ¡que reviente el lobo!)" }],
          vocabIds: [], exerciseIds: ["ex-c2-001"],
          conversationPrompt: { it: "Ci parli del suo rapporto con la lingua italiana.", es: "Háblenos de su relación con la lengua italiana." },
          checkpointIds: ["ex-c2-001", "ex-c2-002", "ex-c2-003", "ex-c2-004"] }),
      ]},
    ],
  },
];

export const COURSE_BY_LEVEL = (level: string): Course | undefined =>
  COURSES.find((c) => c.level === level);

export function findLesson(lessonId: string): { lesson: Lesson; unit: Unit; course: Course } | undefined {
  for (const course of COURSES) {
    for (const unit of course.units) {
      const lesson = unit.lessons.find((l) => l.id === lessonId);
      if (lesson) return { lesson, unit, course };
    }
  }
  return undefined;
}

export function totalLessons(level?: string): number {
  return COURSES
    .filter((c) => !level || c.level === level)
    .reduce((n, c) => n + c.units.reduce((m, u) => m + u.lessons.length, 0), 0);
}
