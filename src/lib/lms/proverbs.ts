import type { Proverb, CefrLevel } from "./types";

/* ── Proverbi e modi di dire · plugin v4.0 ──────────────────────────
   64 entradas seleccionadas de la tradición paremiológica italiana
   (recuerdos escolares, sabiduría campesina, uso coloquial actual),
   cada una con traducción literal, equivalente español y contexto
   de uso. Niveles MCER orientativos por complejidad léxica. */

const P = (
  id: string, it: string, literal: string, es: string, meaning: string,
  level: CefrLevel, kind: "proverbio" | "modo di dire",
  exIt?: string, exEs?: string
): Proverb => ({ id, it, literal, es, meaning, level, kind, example: exIt && exEs ? { it: exIt, es: exEs } : undefined });

export const PROVERBS: Proverb[] = [
  /* ═══ A1–A2 · modi di dire esenciales ═══ */
  P("pv-001", "In bocca al lupo", "En la boca del lobo", "¡Mucha mierda! / ¡Suerte!", "Augurio de buena suerte antes de un examen o un reto. Se responde: crepi! (¡que reviente!). Nunca digas grazie: anula la suerte.", "A1", "modo di dire", "Domani ho l'esame di italiano. — In bocca al lupo!", "Mañana tengo el examen de italiano. — ¡Mucha suerte!"),
  P("pv-002", "Non vedo l'ora", "No veo la hora", "No veo la hora / estoy deseando", "Expresa ilusión por algo que va a pasar. Se construye con di + infinitivo o che + congiuntivo: non vedo l'ora che arrivi sabato.", "A1", "modo di dire", "Non vedo l'ora di andare in vacanza!", "¡No veo la hora de irme de vacaciones!"),
  P("pv-003", "Che palle!", "¡Qué pelotas!", "¡Qué pesadez! / ¡Qué rollo!", "Expresión coloquial (joven) de hastío o fastidio. Registro muy informal: nada de usarla con tu jefe.", "A2", "modo di dire", "Piove da tre giorni. Che palle!", "Llueve desde hace tres días. ¡Qué rollo!"),
  P("pv-004", "Magari!", "¡Ojalá! (literal: ¡ojalá fuera!)", "¡Ojalá! / ¡Ya quisiera yo!", "Palabrita mágica del italiano: expresa deseo intenso o respuesta entusiasta a una propuesta. Proviene del griego makárie.", "A1", "modo di dire", "Vinceresti alla lotteria? — Magari!", "¿Y si ganarías la lottería? — ¡Ojalá!"),
  P("pv-005", "Boh!", "¡Bah!", "¡Quién sabe! / ¡Ni idea!", "Interjección típica para decir que no se sabe o no se entiende, con un encogimiento de hombros. Equivalente al “ni idea” español.", "A1", "modo di dire", "Dov'è Marco? — Boh!", "¿Dónde está Marco? — ¡Ni idea!"),
  P("pv-006", "Ti sta bene!", "Te queda bien (la ropa)", "¡Te lo mereces! / bien hecho", "Doble uso: literal (esta camisa ti sta bene = te queda bien) o irónico para decir que alguien merece lo que le pasa.", "A2", "modo di dire", "Ho perso il treno dormendo. — Ti sta bene!", "Perdí el tren por dormir. — ¡Te lo mereces!"),
  P("pv-007", "Non è affar tuo", "No es asunto tuyo", "No es asunto tuyo / no te metas", "Frase para poner límites con cortesía seca. Versión más suave: non sono affari tuoi.", "A2", "modo di dire", "Perché ti sei licenziato? — Non è affar tuo!", "¿Por qué te dimitiste? — ¡No es asunto tuyo!"),
  P("pv-008", "Per carità!", "¡Por caridad!", "¡Por Dios! / ¡De ninguna de las maneras!", "Sirve para rechazar algo con énfasis o para pedir misericordia en tono dramático. Muy frecuente en la conversación cotidiana.", "A2", "modo di dire", "Andare in macchina con Luca? Per carità, guida da paura!", "¿Ir en coche con Luca? ¡Por Dios, conduce fatal!"),
  P("pv-009", "Buono a sapersi", "Bueno para saberse", "Buena información / qué útil saberlo", "Préstamo funcional del inglés good to know, hoy naturalizado en el italiano hablado.", "A2", "modo di dire", "Il museo è gratis la domenica. — Buono a sapersi!", "El museo es gratis el domingo. — ¡Qué bien saberlo!"),
  P("pv-010", "Ci mancherebbe altro", "Nos faltaría otra cosa", "No faltaría más / por supuesto", "Respuesta modesta a un agradecimiento o reforzada a un sí: significa que era lo mínimo que se podía hacer.", "A2", "modo di dire", "Grazie per il passaggio! — Ci mancherebbe altro!", "¡Gracias por traerme! — ¡No faltaría más!"),
  P("pv-011", "Mi raccomando", "Te lo recomiendo (a mí)", "Por favor, no lo olvides / hazme caso", "Fórmula afectuosa de encargo o advertencia, típica de madres italianas. Casi intraducible: une ruego, encarecimiento y confianza.", "A1", "modo di dire", "Chiamami quando arrivi, mi raccomando!", "Llámame cuando llegues, ¡por favor, no lo olvides!"),
  P("pv-012", "Menomale", "Menos mal", "Menos mal / por fortuna", "Alivio puro. Se escribe también menomale o meno male; va seguido de che + indicativo: menomale che hai chiamato.", "A1", "modo di dire", "Menomale che c'è ancora il treno delle nove!", "¡Menos mal que todavía queda el tren de las nueve!"),
  P("pv-013", "In alto i cuori", "Arriba los corazones", "¡Ánimo! / no desmayes", "Expresión de aliento, hoy entre irónica y cariñosa.", "A2", "modo di dire"),
  P("pv-014", "Dai!", "¡Anda! / ¡Vamos!", "¡Venga! / ¡Dale! / ¡Anda ya!", "El interjección comodín del italiano: ánimo, sorpresa, incredulidad, insistencia. El tono lo decide todo.", "A1", "modo di dire", "Dai, raccontami com'è andata!", "¡Venga, cuéntame cómo fue!"),

  /* ═══ A2 · vida cotidiana ═══ */
  P("pv-020", "Capitare a fagiolo", "Caer en el momento de la judía", "Caer como anillo al dedo / llegar en el momento justo", "Del mundo campesino: las judías (fagioli) eran el plato de siempre, así que caer a fagiolo era caer en el momento perfecto para comer.", "A2", "modo di dire", "Il suo aiuto è capitato a fagiolo.", "Su ayuda llegó como anillo al dedo."),
  P("pv-021", "Essere al verde", "Estar en el verde", "Estar sin blanca / pelado", "Cuando la vela se consumía hasta el verde final, se acababa la cera… y el dinero. El equivalente español es estar sin blanca.", "A2", "modo di dire", "Non posso uscire, sono al verde.", "No puedo salir, estoy sin blanca."),
  P("pv-022", "Prendere due piccioni con una fava", "Coger dos palomas con una haba", "Matar dos pájaros de un tiro", "La haba (fava) era el cebo del trampero: una sola haba, dos presas. Lógica idéntica a la española.", "A2", "modo di dire", "Andando a piedi risparmi e fai movimento: due piccioni con una fava!", "Yendo a pie ahorras y haces ejercicio: ¡dos pájaros de un tiro!"),
  P("pv-023", "Non ho né arte né parte", "No tengo ni arte ni parte", "No tengo ni oficio ni beneficio / no tengo nada", "Fórmula clásica de humildad (o de autopresentación irónica) para decir que uno no tiene título ni posición.", "B1", "modo di dire"),
  P("pv-024", "Rompere il ghiaccio", "Romper el hielo", "Romper el hielo", "Idéntico al español: la primera frase que desbloquea una conversación tensa.", "A2", "modo di dire", "Per rompere il ghiaccio parlai del tempo.", "Para romper el hielo hablé del tiempo."),
  P("pv-025", "Stanco morto", "Cansado muerto", "Muerto de cansancio", "Intensificador hiperbólico muy productivo: bagnato fradicio, ubriaco fradicio… aquí mortalmente cansado.", "A2", "modo di dire", "Dopo il trekking ero stanco morto.", "Después del trekking estaba muerto de cansancio."),
  P("pv-026", "Andare a letto con le galline", "Ir a la cama con las gallinas", "Acostarse con las gallinas", "Igual que en español: dormirse muy pronto, como las gallinas al atardecer.", "A2", "modo di dire"),
  P("pv-027", "Fare il pelo e il contropelo", "Hacer el pelo y el contrapelo", "Repasar / poner verde a alguien", "Como el barbero que afeita a favor y en contra: refutar a alguien con todo detalle, sin dejarle ni un argumento.", "B1", "modo di dire"),
  P("pv-028", "Un calcio nel sedere", "Una patada en el trasero", "Una patada en el culo / un empujón (a la fuerza)", "Literal o figurado: despido, empujón a hacer algo, o golpe de realidad.", "B1", "modo di dire", "Quella bocciatura è stato un calcio nel sedere: ora studio sul serio.", "Ese suspenso fue una patada en el culo: ahora estudio en serio."),
  P("pv-029", "A gonfie vele", "Con velas hinchadas", "Viento en popa / sobre ruedas", "Del lenguaje marinero: la carrera o el proyecto avanzan con viento a favor.", "B1", "modo di dire", "Dopo la promozione, la carriera va a gonfie vele.", "Tras el ascenso, la carrera va viento en popa."),
  P("pv-030", "Dormire sugli allori", "Dormir sobre los laureles", "Dormirse en los laureles", "Idéntico al español: descansar en la fama pasada y dejar de esforzarse.", "B1", "modo di dire"),

  /* ═══ Proverbios clásicos ═══ */
  P("pv-040", "Chi va piano va sano e lontano", "Quien va despacio va sano y lejos", "El que va despacio llega lejos / va seguro", "Elogio de la prudencia: la versión completa unisce sano y lontano. Muy citado medio en broma entre conductores.", "A2", "proverbio", "Con la moto guida piano: chi va piano va sano e lontano.", "Con la moto, conduce despacio: el que va despacio va seguro."),
  P("pv-041", "Tra il dire e il fare c'è di mezzo il mare", "Entre el decir y el hacer hay en medio el mar", "Del dicho al hecho hay un gran trecho", "El proverbio favorito de los italianos para recordar que prometer es fácil y cumplir, no.", "A2", "proverbio", "Dice che inizierà la palestra lunedì. — Tra il dire e il fare…", "Dice que empezará el gimnasio el lunes. — Del dicho al hecho…"),
  P("pv-042", "L'appetito vien mangiando", "El apetito viene comiendo", "El apetito viene comiendo", "Idéntico al español, con la misma lógica paradójica: cuanto más comes, más hambre tienes.", "A1", "proverbio"),
  P("pv-043", "Chi si fa i fatti suoi campa cent'anni", "Quien se hace sus asuntos propios vive cien años", "Quien no se mete en lo que no le importa vive más / más vale ser discreto", "Versión italiana de “vivirás más tranquilo”: el que se ocupa de lo suyo vive largo y en paz.", "A2", "proverbio"),
  P("pv-044", "A caval donato non si guarda in bocca", "A caballo regalado no se le mira la boca", "A caballo regalado no se le mira el diente", "Dicho idéntico al español: un regalo no se examina ni se critica.", "B1", "proverbio"),
  P("pv-045", "Meglio tardi che mai", "Mejor tarde que nunca", "Más vale tarde que nunca", "Consuelo universal de los rezagados.", "A1", "proverbio", "Hai finito il corso a cinquant'anni? Meglio tardi che mai!", "¿Terminaste el curso a los cincuenta? ¡Más vale tarde que nunca!"),
  P("pv-046", "Roma non fu fatta in un giorno", "Roma no fue hecha en un día", "Roma no se construyó en un día", "Paciencia para los proyectos grandes. Se suele completar con: (ma non era collegata alla rete ACEA): broma romana.", "A2", "proverbio"),
  P("pv-047", "Tutte le strade portano a Roma", "Todos los caminos llevan a Roma", "Todos los caminos llevan a Roma", "Como el español: hay varias formas de llegar al mismo resultado.", "A1", "proverbio"),
  P("pv-048", "Chi dorme non piglia pesci", "Quien duerme no coge peces", "El que duerme no pesca / quien madruga, Dios lo ayuda", "Elogio del madrugar: el pez se coge al amanecer, y las oportunidades también.", "A2", "proverbio", "Alzati! Chi dorme non piglia pesci.", "¡Levántate! El que duerme no coge peces."),
  P("pv-049", "Il lupo perde il pelo ma non il vizio", "El lobo pierde el pelo pero no el vicio", "El lobo pierde el pelo pero no las mañas", "Casi palabra por palabra igual: la gente no cambia de carácter.", "B1", "proverbio"),
  P("pv-050", "Anche l'occhio vuole la sua parte", "También el ojo quiere su parte", "La comida entra por los ojos / también comer es un placer de la vista", "Elogio italiano de la bella presencia: lo bello alimenta. Se dice de platos, mesas, vitrinas…", "B1", "proverbio"),
  P("pv-051", "Paese che vai, usanze che trovi", "País al que vas, costumbres que encuentras", "A donde fueres, haz lo que vieres", "Adaptación cultural en estado puro: la etiqueta del viajero.", "A2", "proverbio"),
  P("pv-052", "Buon sangue non mente", "La buena sangre no miente", "De buena casta le viene al galgo / la casta se hereda", "El talento o la calidad familiar acaba manifestándose.", "B1", "proverbio"),
  P("pv-053", "Fra i due litiganti il terzo gode", "Entre los dos que riñen, el tercero goza", "Dos riñen y el tercero se aprovecha / dos se pelean y el tercero se beneficia", "Advertencia sobre quién cobra realmente una disputa ajena.", "B1", "proverbio"),
  P("pv-054", "Chi la dura la vince", "Quien la dura la vence", "El que persevera vence / persiste y vencerás", "La resistencia gana: la constancia es la última virtud que se rinde.", "B1", "proverbio"),
  P("pv-055", "L'abito non fa il monaco", "El hábito no hace al monje", "El hábito no hace al monje", "Idéntico: las apariencias engañan.", "B1", "proverbio"),
  P("pv-056", "A mali estremi, estremi rimedi", "A males extremos, remedios extremos", "A grandes males, grandes remedios", "Cuando la situación es desesperada, hacen falta soluciones drásticas.", "B2", "proverbio"),
  P("pv-057", "Can che abbaia non morde", "Perro que ladra no muerde", "Perro ladrador, poco mordedor", "El que amenaza mucho rara vez actúa. Mismo concepto, misma imagen canina.", "A2", "proverbio"),
  P("pv-058", "Gallina vecchia fa buon brodo", "Gallina vieja hace buen caldo", "Gallina vieja hace buen caldo / la experiencia cuenta", "Elogio de la experiencia: literalmente igual que el español.", "B1", "proverbio"),
  P("pv-059", "L'ospite è come il pesce: dopo tre giorni puzza", "El huésped es como el pez: después de tres días apesta", "Las visitas, como los peces, a los tres días huelen mal / cría cuervos…", "Humor campesino sobre la hospitalidad con fecha de caducidad.", "B2", "proverbio"),
  P("pv-060", "Non è tutto oro quello che luccica", "No es todo oro lo que reluce", "No es oro todo lo que reluce", "Idéntico al español: desconfía de los brillos fáciles.", "B1", "proverbio"),

  /* ═══ B1–B2 · expresiones de uso diario ═══ */
  P("pv-070", "Andare in bianco", "Ir en blanco", "Quedarse con las ganas / salir con las manos vacías", "Se usa sobre todo en la cena de gala (andare in bianco al ballo = no conseguir pareja) y por extensión en cualquier intento fallido.", "B1", "modo di dire", "Ho studiato poco e sono andato in bianco all'esame.", "Estudié poco y me quedé con las ganas en el examen."),
  P("pv-071", "Salvare capra e cavoli", "Salvar cabra y coles", "Salvar todos los frentes a la vez / cuadrar el círculo", "Del juego de lógica del lobo, la cabra y las coles: resolver un problema sin sacrificar nada ni a nadie.", "B2", "modo di dire", "Il governo prova a salvare capra e cavoli con la nuova legge.", "El gobierno intenta contentar a todos con la nueva ley."),
  P("pv-072", "Piangere sul latte versato", "Llorar sobre la leche derramada", "Llorar sobre la leche derramada", "Idéntico al español: inútil lamentar lo irremediable.", "B1", "modo di dire"),
  P("pv-073", "Tirare il sacco", "Tirar del saco", "Hacer su agosto / sacar tajada", "Empujar los intereses propios en una negociación: tirar del saco hacia un lado.", "B2", "modo di dire"),
  P("pv-074", "Mettere una pulce nell'orecchio", "Poner una pulga en la oreja", "Meter una pulga en la oreja / sembrar la duda", "Idéntico al español: dejar caer una sospecha sutil que no se va.", "B2", "modo di dire", "La sua frase mi ha messo una pulce nell'orecchio.", "Su frase me metió una pulga en la oreja."),
  P("pv-075", "Avere un diavolo per capello", "Tener un diablo por cada pelo", "Estar de un humor de perros / con el diablo en el cuerpo", "Descripción de furia contenida: cada pelo guarda un diablillo.", "B2", "modo di dire", "Non parlargli oggi: ha un diavolo per capello.", "No le hables hoy: está de un humor de perros."),
  P("pv-076", "Essere l'ultima ruota del carro", "Ser la última rueda del carro", "Ser el último mono / la última rueda del carro", "En toda jerarquía hay quien va detrás: el que menos cuenta.", "B1", "modo di dire", "In azienda mi sento l'ultima ruota del carro.", "En la empresa me siento el último mono."),
  P("pv-077", "Cascasse il mondo", "Se cayera el mundo", "Pase lo que pase / caiga el mundo", "Expresa determinación absoluta: cascasse il mondo, domani parto.", "B2", "modo di dire"),
  P("pv-078", "Non sapere che pesci pigliare", "No saber qué peces coger", "No saber por dónde tirar / estar en un mar de dudas", "El español navega en un mar de dudas; el italiano no sabe qué pez coger con la red.", "B2", "modo di dire", "Davanti alla sua domanda non sapevo che pesci pigliare.", "Ante su pregunta, no supe por dónde tirar."),
  P("pv-079", "Prendere fischi per fiaschi", "Coger silbidos por cantimploras", "Confundir el oro con el cobre / entender al revés", "Fischio y fiasco suenan parecido: clásico juego de palabras toscano para los malentendidos.", "C1", "modo di dire"),
  P("pv-080", "Ride bene chi ride ultimo", "Ríe bien quien ríe último", "El que ríe último, ríe mejor", "Idéntico: la victoria final es la que cuenta.", "B1", "proverbio"),
  P("pv-081", "Hai visto mai", "Has visto nunca", "¿Quién sabe? / vaya usted a saber", "Muletilla escéptica ante hipótesis improbable.", "B2", "modo di dire"),
  P("pv-082", "Farsi in quattro", "Hacerse en cuatro", "Romperse el culo / desvivirse", "Partirse en cuatro pedazos por alguien. La versión formal: fare del proprio meglio.", "B1", "modo di dire", "Si è fatta in quattro per aiutarmi.", "Se desvivió por ayudarme."),
  P("pv-083", "Mettere mano alla borsa", "Poner mano a la bolsa", "Sacar la cartera / pagar de su bolsillo", "Mettere mano a algo = poner manos a la obra; con la borsa, la expresión señala a quien abre la cartera para pagar (o para financiar) sin regatear.", "C1", "modo di dire", "Alla fine ha messo mano alla borsa e ha pagato il conto per tutti.", "Al final sacó la cartera y pagó la cuenta para todos."),

  /* ═══ C1–C2 · registro elevado y literario ═══ */
  P("pv-100", "Vestire i panni di qualcuno", "Vestir las ropas de alguien", "Calzarse los zapatos de alguien / ponerse en su lugar", "Metáfora teatral: asumir un papel o una responsabilidad.", "C1", "modo di dire", "Oggi tocca a me vestire i panni del mediatore.", "Hoy me toca calzarme los zapatos del mediador."),
  P("pv-101", "Cadere dalla padella nella brace", "Caer de la sartén a la brasa", "Salir de Guatemala para meterse en Guatepeor / de mala en peor", "La misma imagen del horno italiano: la sartén ya era mala, la brasa es peor.", "B2", "modo di dire", "Ho cambiato lavoro per lo stipendio e sono caduto dalla padella nella brace.", "Cambié de trabajo por el sueldo y salí de Guatepeor."),
  P("pv-102", "Il gioco non vale la candela", "El juego no vale la vela", "El juego no vale la candela", "Calcado del francés (le jeu ne vaut pas la chandelle): el esfuerzo no compensa el resultado.", "C1", "modo di dire"),
  P("pv-103", "A quattrini morti", "A cuartos muertos", "A dinero muerto / sin intereses ni trabajo", "Expresión de contabilidad antigua: capital parado que no produce.", "C2", "modo di dire"),
  P("pv-104", "Restare di stucco", "Quedar de estuco", "Quedarse de piedra / de estuco", "El estuco es una aleación blanda: la sorpresa te deja blandito y sin palabras. Igual que el español culto.", "C1", "modo di dire", "All'annuncio della sua partenza rimasi di stucco.", "Con el anuncio de su partida me quedé de piedra."),
  P("pv-105", "Sputare il rospo", "Escupir el sapo", "Soltar la pulga detrás de la oreja / escupir lo que uno calla", "El italiano escupe un sapo (feo y pesado); el español “escupe la verdad” o confiesa de golpe.", "B2", "modo di dire", "Avanti, sputa il rospo: cosa hai combinato?", "Venga, suelta: ¿qué has hecho?"),
  P("pv-106", "Essere a un punto morto", "Estar en un punto muerto", "Estar en un callejón sin salida / punto muerto", "Negociaciones, relaciones, motores: todo puede quedar a un punto morto.", "B2", "modo di dire"),
  P("pv-107", "Mangiare la foglia", "Comerse la hoja", "Olerse la tostada / darse cuenta de la trampa", "Metáfora vegetal: el animal que come la hoja envenenada cae; en italiano, quien mangia la foglia descubre el engaño y ya no cae en él. Equivale al español olérsela.", "C1", "modo di dire", "Non spiegarmi nulla: ho già mangiato la foglia.", "No me expliques nada: ya me la he olido."),
  P("pv-108", "Pescare nel torbido", "Pescar en el turbio", "Pescar en río revuelto", "Idéntico: sacar provecho del escándalo o del caos ajeno.", "C1", "modo di dire", "Alcuni speculatori pescano nel torbido delle crisi.", "Algunos especuladores pescan en río revuelto."),
  P("pv-109", "Le bugie hanno le gambe corte", "Las mentiras tienen las piernas cortas", "Las mentiras tienen las patas cortas", "Idéntico al español: la mentira no llega lejos.", "B1", "proverbio"),
  P("pv-110", "Chi di spada ferisce, di spada perisce", "Quien de espada hiere, de espada perece", "Quien a hierro mata, a hierro muere", "Proverbio bíblico común a ambas lenguas, con la cadencia del italiano antiguo.", "C1", "proverbio"),
  P("pv-111", "Se non è zuppa è pan bagnato", "Si no es sopa, es pan empapado", "Es lo mismo con distinto nombre / seis de una y media docena de la otra", "Sopa y pan bagnato llevan los mismos ingredientes: cambia el nombre, no la sustancia.", "C1", "proverbio"),
  P("pv-112", "Oltre il danno, le beffe", "Además del daño, las burlas", "Sobre el daño, la burla / añadir injuria al insulto", "Cuando a la desgracia se suma la humillación: en inglés adding insult to injury.", "C2", "modo di dire"),
];

export const PROVERB_KIND_LABELS: Record<Proverb["kind"], string> = {
  proverbio: "Proverbio",
  "modo di dire": "Modo di dire",
};

export function proverbsByLevel(level: CefrLevel): Proverb[] {
  return PROVERBS.filter((p) => p.level === level);
}

/* Selección aleatoria para el modo quiz (sin repetir dentro de la sesión) */
export function pickProverbQuizPool(exclude: Set<string>, count: number): Proverb[] {
  const pool = PROVERBS.filter((p) => !exclude.has(p.id) && p.es && p.meaning);
  const out: Proverb[] = [];
  while (out.length < count && pool.length > 0) {
    const i = Math.floor(Math.random() * pool.length);
    out.push(pool.splice(i, 1)[0]);
  }
  return out;
}
