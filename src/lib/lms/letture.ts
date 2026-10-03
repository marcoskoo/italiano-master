/* ── Letture & Storia (v9.0) ──────────────────────────────────────────
   Biblioteca de lecturas largas: diálogos, textos informativos y de
   historia (Italia + mundo) con 5-10 párrafos, glosario, comprensión
   lectora e ideas para debatir. Audio TTS sincronizado párrafo a
   párrafo en la vista correspondiente. 100% contenido original.  */

import type { CefrLevel } from "./types";
import { STORIA_ITALIA, STORIA_MONDO } from "./letture-storia";
import { CULTURA } from "./letture-cultura";
import { DIALOGHI_EXTRA } from "./letture-extra";
import { INFORMAZIONE_EXTRA } from "./letture-extra2";
import { STORIA_ITALIA_EXTRA, STORIA_MONDO_EXTRA } from "./letture-extra3";
import { CULTURA_EXTRA } from "./letture-extra4";

export type LetturaCat = "dialoghi" | "informazione" | "storia-italia" | "storia-mondo" | "cultura";

export interface LetturaLine {
  it: string;
  es: string;
  speaker?: string;          // solo en diálogos
}

export interface LetturaQuestion {
  q: string;                 // pregunta (ES, como el resto de la app)
  options: string[];
  answer: number;            // índice correcto
  why: string;               // explicación
}

export interface Lettura {
  id: string;
  cat: LetturaCat;
  level: CefrLevel;
  title: string;             // italiano
  titleEs: string;
  minutes: number;
  lines: LetturaLine[];      // 5-10 párrafos o battute
  glossary: { it: string; es: string }[];
  questions: LetturaQuestion[];
  discuss: { it: string; es: string }[];  // ideas para discutir
}

export const LETTURE_CATS: Record<LetturaCat, { label: string; emoji: string; desc: string }> = {
  dialoghi: { label: "Dialoghi", emoji: "💬", desc: "Conversazioni della vita reale con audio" },
  informazione: { label: "Informazione", emoji: "📰", desc: "Testi attuali con idee per discutere" },
  "storia-italia": { label: "Storia d'Italia", emoji: "🏛️", desc: "Da Roma al boom economico" },
  "storia-mondo": { label: "Storia del mondo", emoji: "🌍", desc: "Grandi storie attorno al pianeta" },
  cultura: { label: "Cultura italiana", emoji: "🎨", desc: "Arte, cucina, musica, cinema, sport e moda" },
};

/* ═══ DIALOGHI ═══════════════════════════════════════════════════════ */

const DIALOGHI: Lettura[] = [
  {
    id: "dia-bar-01",
    cat: "dialoghi",
    level: "A1",
    title: "Al bar: un caffè perfetto",
    titleEs: "En el bar: un café perfecto",
    minutes: 2,
    lines: [
      { speaker: "Barista", it: "Buongiorno! Prego, dica pure.", es: "¡Buenos días! Adelante, diga." },
      { speaker: "Cliente", it: "Buongiorno! Vorrei un caffè, per favore. Ma non troppo forte.", es: "¡Buenos días! Quisiera un café, por favor. Pero no muy fuerte." },
      { speaker: "Barista", it: "Allora le consiglio un caffè macchiato: un po' di latte rende il gusto più delicato.", es: "Entonces le recomiendo un café manchado: un poco de leche hace el sabor más suave." },
      { speaker: "Cliente", it: "Perfetto! E quanto costa?", es: "¡Perfecto! ¿Y cuánto cuesta?" },
      { speaker: "Barista", it: "Un euro e venti. Vuole anche un cornetto? È appena uscito dal forno.", es: "Un euro con veinte. ¿Quiere también un croissant? Acaba de salir del horno." },
      { speaker: "Cliente", it: "Hmm, sì! Un cornetto alla crema, grazie. Ecco due euro e cinquanta.", es: "¡Mmm, sí! Un croissant de crema, gracias. Aquí dos euros con cincuenta." },
      { speaker: "Barista", it: "Grazie a lei! Il resto è trenta centesimi. Buona giornata!", es: "¡Gracias a usted! El cambio es treinta céntimos. ¡Buen día!" },
    ],
    glossary: [
      { it: "dica pure", es: "diga (fórmula de cortesía)" },
      { it: "vorrei", es: "quisiera" },
      { it: "consigliare", es: "recomendar" },
      { it: "appena uscito", es: "recién salido" },
      { it: "il resto", es: "el cambio (dinero)" },
    ],
    questions: [
      { q: "¿Qué tipo de café recomienda el barista?", options: ["Un espresso molto forte", "Un caffè macchiato", "Un caffè freddo", "Nessun caffè"], answer: 1, why: "El barista sugiere el macchiato porque un poco de leche hace el sabor más suave." },
      { q: "¿Cuánto cuesta el café?", options: ["1,50 €", "2,50 €", "1,20 €", "0,30 €"], answer: 2, why: "«Un euro e venti» = 1,20 €." },
      { q: "¿Qué cornetto pide el cliente?", options: ["alla crema", "al cioccolato", "vuoto", "alla marmellata"], answer: 0, why: "Pide «un cornetto alla crema»." },
      { q: "¿Cuánto recibe de cambio el cliente?", options: ["Cinquanta centesimi", "Trenta centesimi", "Un euro", "Niente"], answer: 1, why: "Paga 2,50 € por 2,20 € de compra: el resto son treinta céntimos." },
    ],
    discuss: [
      { it: "Come si ordina un caffè nel tuo paese? È al banco o al tavolo?", es: "¿Cómo se pide un café en tu país? ¿En la barra o en la mesa?" },
      { it: "Nel tuo paese esiste l'abitudine del caffè al banco, in piedi?", es: "¿En tu país existe la costumbre del café de pie en la barra?" },
      { it: "Qual è la tua colazione ideale? Dolce o salata?", es: "¿Cuál es tu desayuno ideal? ¿Dulce o salado?" },
    ],
  },
  {
    id: "dia-hotel-02",
    cat: "dialoghi",
    level: "A2",
    title: "Prenotare una camera a Firenze",
    titleEs: "Reservar una habitación en Florencia",
    minutes: 3,
    lines: [
      { speaker: "Receptionist", it: "Hotel Palazzo Vecchio, buonasera! Come posso aiutarla?", es: "Hotel Palazzo Vecchio, ¡buenas tardes! ¿Cómo puedo ayudarle?" },
      { speaker: "Signora Ruiz", it: "Buonasera, vorrei prenotare una camera doppia per il prossimo weekend, dal venerdì alla domenica.", es: "Buenas tardes, quisiera reservar una habitación doble para el próximo fin de semana, del viernes al domingo." },
      { speaker: "Receptionist", it: "Verifico subito... Sì, abbiamo una camera doppia con vista sul Duomo. Costa novanta euro a notte, colazione inclusa.", es: "Verifico enseguida... Sí, tenemos una doble con vista al Duomo. Cuesta noventa euros por noche, desayuno incluido." },
      { speaker: "Signora Ruiz", it: "Ottimo! La colazione è a buffet?", es: "¡Excelente! ¿El desayuno es buffet?" },
      { speaker: "Receptionist", it: "Sì, un buffet ricco: dolci, salumi, frutta fresca e caffè senza limiti!", es: "Sí, un buffet rico: dulces, embutidos, fruta fresca ¡y café sin límites!" },
      { speaker: "Signora Ruiz", it: "Perfetto. È possibile aggiungere un letto per mia figlia? Ha cinque anni.", es: "Perfecto. ¿Es posible añadir una cama para mi hija? Tiene cinco años." },
      { speaker: "Receptionist", it: "Certo, aggiungiamo una culla o un letto aggiuntivo per quindici euro a notte. I bambini sotto i sei anni dormono gratis nel letto dei genitori.", es: "Claro, añadimos una cuna o una cama extra por quince euros la noche. Los niños menores de seis años duermen gratis en la cama de los padres." },
      { speaker: "Signora Ruiz", it: "Allora solo la culla, grazie. A che ora è il check-in?", es: "Entonces solo la cuna, gracias. ¿A qué hora es el check-in?" },
      { speaker: "Receptionist", it: "Dalle due del pomeriggio. Le mando subito la conferma via email. Arrivederci!", es: "Desde las dos de la tarde. Le envío enseguida la confirmación por email. ¡Hasta luego!" },
    ],
    glossary: [
      { it: "prenotare", es: "reservar" },
      { it: "camera doppia", es: "habitación doble" },
      { it: "colazione inclusa", es: "desayuno incluido" },
      { it: "letto aggiuntivo", es: "cama adicional" },
      { it: "il check-in", es: "el registro de entrada" },
    ],
    questions: [
      { q: "¿Cuántas noches quiere quedarse la señora Ruiz?", options: ["Una", "Due", "Tre", "Quattro"], answer: 1, why: "Del viernes a domingo = dos noches." },
      { q: "¿Qué tiene de especial la habitación?", options: ["Una terrazza", "La vista sul Duomo", "Una vasca idromassaggio", "È all'ultimo piano"], answer: 1, why: "La recepcionista dice «con vista sul Duomo»." },
      { q: "¿Cuánto cuesta el niño en la cama de los padres?", options: ["15 € a notte", "Gratis sotto i sei anni", "90 € totali", "50 €"], answer: 1, why: "Los menores de seis años duermen gratis en la cama de los padres." },
      { q: "¿A qué hora es el check-in?", options: ["Dalle 10", "Dalle 12", "Dalle 14", "Dalle 20"], answer: 2, why: "«Dalle due del pomeriggio» = desde las 14:00." },
    ],
    discuss: [
      { it: "Preferisci un hotel o un appartamento in affitto? Perché?", es: "¿Prefieres un hotel o un apartamento de alquiler? ¿Por qué?" },
      { it: "Descrivi la tua camera d'hotel ideale.", es: "Describe tu habitación de hotel ideal." },
      { it: "Quali servizi sono per te indispensabili in albergo?", es: "¿Qué servicios son para ti imprescindibles en un hotel?" },
    ],
  },
  {
    id: "dia-clima-03",
    cat: "dialoghi",
    level: "B1",
    title: "Aria condizionata: una discussione estiva",
    titleEs: "Aire acondicionado: una discusión de verano",
    minutes: 3,
    lines: [
      { speaker: "Giulia", it: "Non se ne può più! Questo agosto è il più caldo degli ultimi vent'anni. Secondo me il clima sta davvero cambiando.", es: "¡No se puede más! Este agosto es el más caliente de los últimos veinte años. Según yo el clima está realmente cambiando." },
      { speaker: "Marco", it: "Hai ragione, ma ammettiamolo: anche noi abbiamo le nostre responsabilità. L'aria condizionata al massimo, l'auto per ogni spostamento...", es: "Tienes razón, pero admitámoslo: también nosotros tenemos nuestras responsabilidades. El aire acondicionado al máximo, el auto para cada desplazamiento..." },
      { speaker: "Giulia", it: "Vero, però le scelte individuali non bastano. Servono politiche serie: più trasporti pubblici, energie rinnovabili, tasse sulle emissioni.", es: "Verdad, pero las elecciones individuales no bastan. Hacen falta políticas serias: más transporte público, energías renovables, impuestos a las emisiones." },
      { speaker: "Marco", it: "Sono d'accordo sulle rinnovabili, ma attenzione ai costi: le bollette sono già altissime per molte famiglie. Serve una transizione giusta.", es: "Estoy de acuerdo con las renovables, pero cuidado con los costos: las facturas ya son altísimas para muchas familias. Hace falta una transición justa." },
      { speaker: "Giulia", it: "Per questo dico «giusta»: incentivi per chi ristruttura, per chi mette i pannelli solari. Il problema è che i politici pensano solo al breve periodo.", es: "Por eso digo «justa»: incentivos para quien reforma, para quien instala paneles solares. El problema es que los políticos piensan solo en el corto plazo." },
      { speaker: "Marco", it: "E noi cittadini? Potremmo partire dai piccoli gesti: il bus invece dell'auto, sprecare meno cibo... Anche la scuola dovrebbe insegnare di più.", es: "¿Y nosotros los ciudadanos? Podríamos empezar por los pequeños gestos: el bus en lugar del auto, desperdiciar menos comida... También la escuela debería enseñar más." },
      { speaker: "Giulia", it: "Guarda che hai ragione: l'educazione è la base. Se i giovani crescono con queste abitudini, da adulti voteranno anche in modo diverso.", es: "Mira que tienes razón: la educación es la base. Si los jóvenes crecen con estos hábitos, de adultos también votarán de manera distinta." },
      { speaker: "Marco", it: "Appunto! Allora facciamo un patto: questo settembre andiamo al lavoro in bicicletta. Tranne quando piove, ovviamente!", es: "¡Exacto! Entonces hagamos un pacto: este septiembre vamos al trabajo en bicicleta. ¡Excepto cuando llueva, obviamente!" },
    ],
    glossary: [
      { it: "non se ne può più", es: "no se puede más" },
      { it: "spostamento", es: "desplazamiento" },
      { it: "bolletta", es: "factura (servicios)" },
      { it: "incentivo", es: "incentivo" },
      { it: "breve periodo", es: "corto plazo" },
    ],
    questions: [
      { q: "¿Cuál es la opinión inicial de Giulia?", options: ["El clima está cambiando", "El verano es normal", "Los políticos hacen mucho", "Hace fresco"], answer: 0, why: "Giulia dice que «il clima sta davvero cambiando»." },
      { q: "¿Qué preocupación añade Marco sobre las renovables?", options: ["Son feas", "Los costos para las familias", "No funcionan de noche", "Son ilegales"], answer: 1, why: "Marco menciona que «le bollette sono già altissime per molte famiglie»." },
      { q: "¿Qué significa «transizione giusta» para Giulia?", options: ["Prohibir el aire acondicionado", "Incentivos para reforma y paneles solares", "Subir todos los impuestos", "No hacer nada"], answer: 1, why: "Giulia propone incentivi per chi ristruttura e per i pannelli solari." },
      { q: "¿En qué coinciden al final?", options: ["La educación es la base", "El auto es la mejor opción", "El problema no existe", "La bici es imposible"], answer: 0, why: "Giulia concluye que «l'educazione è la base»." },
      { q: "¿Qué pacto hacen?", options: ["Comprar un auto eléctrico", "Ir al trabajo en bici en septiembre", "Mudarse al norte", "Instalar paneles"], answer: 1, why: "Acuerdan ir al trabajo en bicicletta en septiembre." },
    ],
    discuss: [
      { it: "Le scelte individuali possono cambiare il clima o servono solo le politiche pubbliche?", es: "¿Las elecciones individuales pueden cambiar el clima o solo sirven las políticas públicas?" },
      { it: "Nella tua città fa troppo caldo d'estate? Cosa si potrebbe fare?", es: "¿En tu ciudad hace demasiado calor en verano? ¿Qué se podría hacer?" },
      { it: "«Transizione giusta»: chi deve pagare il costo della lotta al clima?", es: "«Transición justa»: ¿quién debe pagar el costo de la lucha contra el clima?" },
      { it: "Che ruolo ha la scuola nell'educazione ambientale?", es: "¿Qué papel tiene la escuela en la educación ambiental?" },
    ],
  },
];

/* ═══ INFORMAZIONE ═══════════════════════════════════════════════════ */

const INFORMAZIONE: Lettura[] = [
  {
    id: "inf-social-04",
    cat: "informazione",
    level: "B1",
    title: "I social network e i giovani: un rapporto complicato",
    titleEs: "Las redes sociales y los jóvenes: una relación complicada",
    minutes: 5,
    lines: [
      { it: "Ogni giorno, milioni di giovani italiani passano in media tre ore sui social network. TikTok, Instagram e YouTube sono diventati strumenti principali non solo per divertirsi, ma anche per informarsi, studiare e scoprire la musica. Per molti adolescenti, il telefono è il primo oggetto che toccano al mattino e l'ultimo che posano la sera.", es: "Cada día, millones de jóvenes italianos pasan en promedio tres horas en las redes sociales. TikTok, Instagram y YouTube se han convertido en herramientas principales no solo para divertirse, sino también para informarse, estudiar y descubrir música. Para muchos adolescentes, el teléfono es el primer objeto que tocan por la mañana y el último que dejan por la noche." },
      { it: "Gli aspetti positivi esistono e sono concreti. I social permettono di mantenere contatti con amici lontani, di trovare comunità con interessi comuni e di imparare cose nuove. Un ragazzo che vive in un piccolo paese può seguire le lezioni di un professore di Milano, scoprire artisti stranieri o praticare l'inglese con madrelingua di altri continenti. Per i più timidi, infine, la rete offre uno spazio dove esprimersi con meno paura.", es: "Los aspectos positivos existen y son concretos. Las redes permiten mantener contactos con amigos lejanos, encontrar comunidades con intereses comunes y aprender cosas nuevas. Un chico que vive en un pueblo pequeño puede seguir las lecciones de un profesor de Milán, descubrir artistas extranjeros o practicar inglés con nativos de otros continentes. Para los más tímidos, además, la red ofrece un espacio donde expresarse con menos miedo." },
      { it: "Tuttavia, i rischi sono altrettanto reali. Diversi studi collegano l'uso eccessivo dei social con ansia, disturbi del sonno e bassa autostima. Il problema non è la tecnologia in sé, ma il suo modello economico: le piattaforme guadagnano quando restiamo collegati più a lungo possibile. Per questo gli algoritmi mostrano sempre contenuti che provocano emozioni forti, dalla rabbia all'invidia.", es: "Sin embargo, los riesgos son igualmente reales. Diversos estudios vinculan el uso excesivo de las redes con ansiedad, trastornos del sueño y baja autoestima. El problema no es la tecnología en sí, sino su modelo económico: las plataformas ganan cuando permanecemos conectados el mayor tiempo posible. Por eso los algoritmos muestran siempre contenidos que provocan emociones fuertes, desde la rabia hasta la envidia." },
      { it: "Un altro tema importante è il confronto sociale. Vedere sempre vite perfette — corpi ideali, viaggi da sogno, successi lavorativi — crea aspettative impossibili. I giovani sanno bene che quelle immagini sono selezionate e spesso ritoccate, ma il cervello le registra comunque come un confronto con la propria vita quotidiana. Il risultato è una sensazione diffusa di insoddisfazione.", es: "Otro tema importante es la comparación social. Ver siempre vidas perfectas — cuerpos ideales, viajes de ensueño, éxitos laborales — crea expectativas imposibles. Los jóvenes saben bien que esas imágenes están seleccionadas y a menudo retocadas, pero el cerebro las registra igualmente como una comparación con su propia vida cotidiana. El resultado es una sensación difusa de insatisfacción." },
      { it: "Per queste ragioni, l'Italia e l'Unione Europea hanno iniziato a legiferare. Le nuove norme europee obbligano le piattaforme a verificare l'età degli utenti e a proteggere i minori da contenuti dannosi. Alcuni paesi, come l'Olanda, hanno perfino vietato il telefono a scuola durante le ore di lezione, con risultati incoraggianti sulla concentrazione degli studenti.", es: "Por estas razones, Italia y la Unión Europea han empezado a legislar. Las nuevas normas europeas obligan a las plataformas a verificar la edad de los usuarios y a proteger a los menores de contenidos dañinos. Algunos países, como Países Bajos, incluso han prohibido el teléfono en la escuela durante las horas de clase, con resultados alentadores sobre la concentración de los estudiantes." },
      { it: "La soluzione, comunque, non è solo una questione di leggi: è soprattutto una questione di educazione. Imparare a riconoscere una fonte affidabile, capire come funziona un algoritmo, sapere quando staccare — queste competenze oggi sono importanti come leggere e scrivere. I social non spariranno; il compito delle scuole e delle famiglie è insegnare a viverci dentro con intelligenza.", es: "La solución, de todos modos, no es solo cuestión de leyes: es sobre todo cuestión de educación. Aprender a reconocer una fuente fiable, entender cómo funciona un algoritmo, saber cuándo desconectar — estas competencias hoy son tan importantes como leer y escribir. Las redes no desaparecerán; la tarea de las escuelas y las familias es enseñar a vivir dentro de ellas con inteligencia." },
    ],
    glossary: [
      { it: "in media", es: "en promedio" },
      { it: "autostima", es: "autoestima" },
      { it: "algoritmo", es: "algoritmo" },
      { it: "ritoccato", es: "retocado" },
      { it: "legiferare", es: "legislar" },
      { it: "staccare", es: "desconectar" },
    ],
    questions: [
      { q: "¿Cuánto tiempo pasan al día los jóvenes italianos en redes, según el texto?", options: ["Un'ora", "Due ore", "Tre ore", "Cinque ore"], answer: 2, why: "El texto dice «in media tre ore sui social network»." },
      { q: "¿Cuál es el modelo económico que critica el texto?", options: ["Pagar por contenidos", "Las plataformas ganan cuando permanecemos conectados", "La publicidad en la televisión", "Las suscripciones mensuales"], answer: 1, why: "«Le piattaforme guadagnano quando restiamo collegati più a lungo possibile»." },
      { q: "¿Por qué el cerebro registra las imágenes perfectas como comparación?", options: ["Porque son reales", "Porque el cerebro no distingue bien lo seleccionado/retocado de la vida real", "Porque son videos", "Porque están en italiano"], answer: 1, why: "El texto explica que aunque los jóvenes saben que son imágenes retocadas, el cerebro las registra igualmente como confronto." },
      { q: "¿Qué han hecho algunos países como Países Bajos?", options: ["Prohibido todas las redes", "Prohibido el teléfono durante las horas de clase", "Subido los impuestos", "Cerrado las escuelas"], answer: 1, why: "«Alcuni paesi... hanno perfino vietato il telefono a scuola durante le ore di lezione»." },
      { q: "Según la conclusión, la solución es principalmente...", options: ["Prohibir los social", "Una cuestión de educación", "Comprar menos teléfonos", "Esperar nuevas leyes"], answer: 1, why: "«La soluzione... è soprattutto una questione di educazione»." },
    ],
    discuss: [
      { it: "Quante ore al giorno passi tu sui social? È tempo perso o tempo utile?", es: "¿Cuántas horas al día pasas tú en redes? ¿Es tiempo perdido o útil?" },
      { it: "«Confronto sociale»: ti è mai capitato di sentirti inadeguato dopo aver visto vite perfette online?", es: "«Comparación social»: ¿alguna vez te has sentido inadecuado tras ver vidas perfectas online?" },
      { it: "Vietare il telefono a scuola: giusto o esagerato?", es: "Prohibir el teléfono en la escuela: ¿justo o exagerado?" },
      { it: "Quali regole ti imponi ( o imporeresti) per un uso più sano dei social?", es: "¿Qué reglas te impones (o te impondrías) para un uso más sano de las redes?" },
    ],
  },
  {
    id: "inf-dieta-05",
    cat: "informazione",
    level: "B1",
    title: "La dieta mediterranea: un patrimonio dell'umanità",
    titleEs: "La dieta mediterránea: un patrimonio de la humanidad",
    minutes: 4,
    lines: [
      { it: "Nel 2010 l'UNESCO ha iscritto la dieta mediterranea nella lista del patrimonio culturale immateriale dell'umanità. Non si trattava solo di cibo, ma di un intero stile di vita: la convivialità dei pasti condivisi, il rispetto per le stagioni, il legame tra la tavola e il territorio. Un riconoscimento che ha sorpreso molti, ma che gli scienziati aspettavano da decenni.", es: "En 2010 la UNESCO inscribió la dieta mediterránea en la lista del patrimonio cultural inmaterial de la humanidad. No se trataba solo de comida, sino de un estilo de vida entero: la convivencia de las comidas compartidas, el respeto por las estaciones, el vínculo entre la mesa y el territorio. Un reconocimiento que sorprendió a muchos, pero que los científicos esperaban desde hacía décadas." },
      { it: "La storia moderna di questa dieta comincia negli anni Cinquanta, quando il fisiologo americano Ancel Keys studiò le abitudini alimentari di sette paesi. I risultati furono chiari: in Italia del Sud, in Grecia e in alcune zone della Spagna, dove si mangiava soprattutto pane, pasta, legumi, verdura, olio d'oliva e poco carne, le malattie cardiache erano molto più rare che negli Stati Uniti.", es: "La historia moderna de esta dieta comienza en los años cincuenta, cuando el fisiólogo estadounidense Ancel Keys estudió los hábitos alimentarios de siete países. Los resultados fueron claros: en el sur de Italia, en Grecia y en algunas zonas de España, donde se comía sobre todo pan, pasta, legumbres, verdura, aceite de oliva y poca carne, las enfermedades cardíacas eran mucho más raras que en Estados Unidos." },
      { it: "Il segreto non è un alimento magico, ma l'equilibrio. La piramide mediterranea pone alla base frutta, verdura e cereali integrali; poi olio d'oliva come grasso principale; poi latticini, pesce e carne bianca con moderazione; infine dolci e carne rossa solo occasionalmente. Un modello semplice, economico e — cosa rara — anche gustoso.", es: "El secreto no es un alimento mágico, sino el equilibrio. La pirámide mediterránea pone en la base fruta, verdura y cereales integrales; luego el aceite de oliva como grasa principal; después lácteos, pescado y carne blanca con moderación; finalmente dulces y carne roja solo ocasionalmente. Un modelo simple, económico y — cosa rara — también sabroso." },
      { it: "Oggi, però, c'è un paradosso: gli italiani stessi si stanno allontanando dalla dieta mediterranea. I pasti veloci, il cibo industriale e le bevande zuccherate sono entrati nelle abitudini quotidiane, soprattutto tra i giovani e nei grandi centri urbani. I dati indicano che il consumo di legumi è crollato nell'ultimo mezzo secolo, mentre l'obesità infantile in Italia è tra le più alte d'Europa.", es: "Hoy, sin embargo, hay una paradoja: los propios italianos se están alejando de la dieta mediterránea. Las comidas rápidas, la comida industrial y las bebidas azucaradas han entrado en los hábitos cotidianos, sobre todo entre los jóvenes y en los grandes centros urbanos. Los datos indican que el consumo de legumbres se ha desplomado en el último medio siglo, mientras la obesidad infantil en Italia está entre las más altas de Europa." },
      { it: "La buona notizia è che tornare alle origini non è difficile. Bastano piccoli gesti: cucinare più spesso a casa, comprare prodotti locali e di stagione, mangiare insieme senza schermi, concedersi il tempo di una passeggiata dopo pranzo. La dieta mediterranea, in fondo, non è una dieta nel senso moderno: non vieta quasi nulla, propone semplicemente un ritmo più umano.", es: "La buena noticia es que volver a los orígenes no es difícil. Bastan pequeños gestos: cocinar más a menudo en casa, comprar productos locales y de temporada, comer juntos sin pantallas, darse el tiempo de un paseo después de almorzar. La dieta mediterránea, en el fondo, no es una dieta en el sentido moderno: no prohíbe casi nada, simplemente propone un ritmo más humano." },
    ],
    glossary: [
      { it: "patrimonio immateriale", es: "patrimonio inmaterial" },
      { it: "convivialità", es: "convivencia, sociabilidad" },
      { it: "legumi", es: "legumbres" },
      { it: "paradosso", es: "paradoja" },
      { it: "di stagione", es: "de temporada" },
    ],
    questions: [
      { q: "¿Qué reconocó la UNESCO en 2010?", options: ["La pizza napoletana", "La dieta mediterránea como patrimonio inmaterial", "Il parmesan", "La pasta italiana"], answer: 1, why: "«L'UNESCO ha iscritto la dieta mediterranea nella lista del patrimonio culturale immateriale»." },
      { q: "¿Quién inició los estudios modernos sobre esta dieta?", options: ["Un cuoco francese", "Il fisiologo Ancel Keys", "Un medico italiano", "L'UNESCO"], answer: 1, why: "Los estudios comenzaron con Ancel Keys en los años Cincuenta." },
      { q: "¿Qué está en la base de la pirámide mediterránea?", options: ["Carne rossa", "Dolci", "Frutta, verdura e cereali integrali", "Pesce"], answer: 2, why: "«La piramide mediterranea pone alla base frutta, verdura e cereali integrali»." },
      { q: "¿Cuál es la paradoja actual?", options: ["La dieta è troppo costosa", "Los propios italianos se alejan de ella", "Non esiste in Italia", "È vietata dall'UE"], answer: 1, why: "«Gli italiani stessi si stanno allontanando dalla dieta mediterranea»." },
      { q: "Según el texto, la dieta mediterránea...", options: ["Prohíbe casi todo", "No prohíbe casi nada y propone un ritmo más humano", "Es solo para enfermos", "Es muy cara"], answer: 1, why: "«Non vieta quasi nulla, propone semplicemente un ritmo più umano»." },
    ],
    discuss: [
      { it: "Quali somiglianze e differenze vedi tra la dieta mediterranea e la cucina del tuo paese?", es: "¿Qué semejanzas y diferencias ves entre la dieta mediterránea y la cocina de tu país?" },
      { it: "«Mangiare insieme senza schermi»: è possibile oggi? Come?", es: "«Comer juntos sin pantallas»: ¿es posible hoy? ¿Cómo?" },
      { it: "Il cibo industriale è più comodo: come si può conciliare comodità e salute?", es: "La comida industrial es más cómoda: ¿cómo conciliar comodidad y salud?" },
    ],
  },
  {
    id: "inf-mare-06",
    cat: "informazione",
    level: "B2",
    title: "Il mare che sale: l'Italia tra erosione e adattamento",
    titleEs: "El mar que sube: Italia entre erosión y adaptación",
    minutes: 5,
    lines: [
      { it: "L'Italia ha circa ottomila chilometri di coste, e più di un terzo soffre di erosione. Le spiagge si restringono, le dune spariscono, e interi tratti di litorale vengono divorati dal mare durante le tempeste. Non si tratta di previsioni future: è un processo già in corso, documentato da decenni di rilevamenti scientifici lungo tutto lo Stivale.", es: "Italia tiene unos ocho mil kilómetros de costas, y más de un tercio sufre erosión. Las playas se estrechan, las dunas desaparecen, y tramos enteros del litoral son devorados por el mar durante las tormentas. No se trata de previsiones futuras: es un proceso ya en marcha, documentado por décadas de mediciones científicas a lo largo de toda la Bota." },
      { it: "Le cause sono doppie. Da un lato l'aumento del livello del mare, conseguenza del riscaldamento globale: nel Mediterraneo è cresciuto di circa venti centimetri nell'ultimo secolo, e la velocità sta aumentando. Dall'altro lato ci sono gli errori umani: costruzioni troppo vicine alla riva, cave di sabbia abusive, dighe e porti che bloccano il naturale trasporto dei sedimenti lungo la costa.", es: "Las causas son dobles. Por un lado el aumento del nivel del mar, consecuencia del calentamiento global: en el Mediterráneo ha crecido unos veinte centímetros en el último siglo, y la velocidad está aumentando. Por el otro están los errores humanos: construcciones demasiado cerca de la orilla, canteras de arena ilegales, diques y puertos que bloquean el transporte natural de sedimentos a lo largo de la costa." },
      { it: "Il caso più famoso è Venezia. La città lagunare affonda da secoli — circa ventitré centimetri nell'ultimo centinaio d'anni — e le acque alte sempre più frequenti hanno reso necessario MOSE, un sistema di barriere mobili che chiude la laguna quando la marea supera il livello di sicurezza. Un'opera gigantesca, costata miliardi e accesa di polemiche, ma che ha già evitato allagamenti disastrosi.", es: "El caso más famoso es Venecia. La ciudad lagunar se hunde desde hace siglos — unos veintitrés centímetros en los últimos cien años — y las aguas altas cada vez más frecuentes hicieron necesario el MOSE, un sistema de barreras móviles que cierra la laguna cuando la marea supera el nivel de seguridad. Una obra gigantesca, que costó miles de millones y encendió polémicas, pero que ya ha evitado inundaciones desastrosas." },
      { it: "Per le spiagge turistiche la risposta classica è il ripascimento: si preleva sabbia dal fondo del mare e si riporta sulla riva. Funziona, ma costa caro e va ripetuto ogni pochi anni, perché il mare si riprende ciò che gli appartiene. Alcuni comuni stanno sperimentando soluzioni più durevoli: barriere sommerse che spezzano le onde, dune artificiali protette da passerelle in legno, e perfino la gestione controllata di alcune aree, lasciando che la natura si riappropri di tratti di costa non edificati.", es: "Para las playas turísticas la respuesta clásica es la regeneración: se extrae arena del fondo del mar y se devuelve a la orilla. Funciona, pero cuesta caro y hay que repetirla cada pocos años, porque el mar se recupera lo que le pertenece. Algunos municipios están experimentando soluciones más duraderas: barreras sumergidas que rompen las olas, dunas artificiales protegidas por pasarelas de madera, e incluso la gestión controlada de algunas zonas, dejando que la naturaleza se reapropie de tramos de costa no edificados." },
      { it: "C'è infine il tema assicurativo ed economico: lungo le coste italiane si concentrano case, hotel e attività per un valore incalcolabile. Le compagnie di assicurazione cominciano a rifiutare coperture in zone ad alto rischio, e il mercato immobiliare delle aree costiere basse sta già mostrando segni di fragilità. Il ritiro pianificato — spostare gli edifici invece di proteggerli — resta un tabù politico, ma alcuni urbanisti sostengono che prima o poi sarà inevitabile.", es: "Está finalmente el tema asegurador y económico: a lo largo de las costas italianas se concentran casas, hoteles y actividades por un valor incalculable. Las aseguradoras empiezan a rechazar coberturas en zonas de alto riesgo, y el mercado inmobiliario de las áreas costeras bajas ya muestra señales de fragilidad. El retiro planificado — desplazar los edificios en lugar de protegerlos — sigue siendo un tabú político, pero algunos urbanistas sostienen que tarde o temprano será inevitable." },
      { it: "L'Italia, insomma, è un laboratorio: qui il conflitto tra mare, fiumi e presenza umana dura da millenni, e qui si sperimentano oggi le risposte che domani serviranno a mezzo pianeta. La lezione più importante è che l'adattamento non è una resa: è un modo realistico di convivere con un ambiente che cambia, combinando ingegneria, ecologia e un po' di umiltà.", es: "Italia, en suma, es un laboratorio: aquí el conflicto entre mar, ríos y presencia humana dura milenios, y aquí se experimentan hoy las respuestas que mañana necesitará medio planeta. La lección más importante es que la adaptación no es una rendición: es una manera realista de convivir con un ambiente que cambia, combinando ingeniería, ecología y un poco de humildad." },
    ],
    glossary: [
      { it: "erosione", es: "erosión" },
      { it: "litorale", es: "litoral" },
      { it: "rilevamenti", es: "mediciones, relevamientos" },
      { it: "ripascimento", es: "regeneración de playas" },
      { it: "ritiro pianificato", es: "retiro planificado" },
    ],
    questions: [
      { q: "¿Cuántos kilómetros de costa tiene Italia?", options: ["Circa 3.000", "Circa 5.000", "Circa 8.000", "Circa 12.000"], answer: 2, why: "«L'Italia ha circa ottomila chilometri di coste»." },
      { q: "¿Cuánto ha subido el Mediterráneo en el último siglo?", options: ["Cinque centimetri", "Circa venti centimetri", "Un metro", "Non è salito"], answer: 1, why: "«È cresciuto di circa venti centimetri nell'ultimo secolo»." },
      { q: "¿Qué es el MOSE?", options: ["Un tipo di barca", "Sistema de barreras móviles de Venecia", "Un'assicurazione", "Un piano urbanistico"], answer: 1, why: "El MOSE cierra la laguna de Venecia cuando la marea supera el nivel de seguridad." },
      { q: "¿Cuál es la desventaja del ripascimento?", options: ["È illegale", "Cuesta caro y hay que repetirlo cada pocos años", "Distrugge gli hotel", "Non funziona mai"], answer: 1, why: "«Costa caro e va ripetuto ogni pochi anni»." },
      { q: "¿Qué es el «ritiro pianificato»?", options: ["Una renda definitiva", "Desplazar los edificios en lugar de protegerlos", "Un tipo di assicurazione", "Costruire più vicino al mare"], answer: 1, why: "«Spostare gli edifici invece di proteggerli» — aún tabú político." },
    ],
    discuss: [
      { it: "Esiste un problema simile sulle coste del tuo paese? Come lo affrontano?", es: "¿Existe un problema similar en las costas de tu país? ¿Cómo lo afrontan?" },
      { it: "«Adattarsi non è arrendersi»: sei d'accordo con questa frase?", es: "«Adaptarse no es rendirse»: ¿estás de acuerdo con esta frase?" },
      { it: "Chi deve pagare la protezione delle coste: lo Stato, i residenti, i turisti?", es: "¿Quién debe pagar la protección de las costas: el Estado, los residentes, los turistas?" },
    ],
  },
  {
    id: "inf-remoto-07",
    cat: "informazione",
    level: "B2",
    title: "Il lavoro remoto: la rivoluzione silenziosa",
    titleEs: "El trabajo remoto: la revolución silenciosa",
    minutes: 5,
    lines: [
      { it: "Prima del 2020, in Italia il lavoro da casa era un privilegio raro, riservato a poche categorie. Poi la pandemia ha costretto milioni di persone a trasformare la cucina in ufficio da un giorno all'altro. Ciò che doveva essere una soluzione temporanea è diventato, per milioni di lavoratori, un modo permanente di intendere il lavoro.", es: "Antes de 2020, en Italia el trabajo desde casa era un privilegio raro, reservado a pocas categorías. Luego la pandemia obligó a millones de personas a transformar la cocina en oficina de un día para el otro. Lo que debía ser una solución temporal se convirtió, para millones de trabajadores, en una manera permanente de entender el trabajo." },
      { it: "I vantaggi sono evidenti e misurabili. Chi lavora da casa risparmia in media due ore al giorno tra spostamenti, pranzi fuori e preparativi. Niente traffico dell'ora di punta, niente biglietti del treno, più flessibilità per gestire medici, figli e commissioni. Molte persone dichiarano di essere più produttive, e diverse aziende confermano che i risultati non sono peggiorati.", es: "Las ventajas son evidentes y medibles. Quien trabaja desde casa ahorra en promedio dos horas diarias entre desplazamientos, almuerzos fuera y preparativos. Nada de tráfico en hora punta, nada de billetes de tren, más flexibilidad para gestionar médicos, hijos y trámites. Muchas personas declaran ser más productivas, y varias empresas confirman que los resultados no empeoraron." },
      { it: "Ma la medaglia ha anche un rovescio. La sede fisica non era solo un posto dove lavorare: era il luogo delle relazioni, dei colleghi, delle conversazioni al distributore del caffè. Chi lavora sempre da casa denuncia stanchezza mentale, difficoltà a staccare e una crescente solitudine. I giovani, in particolare, rischiano di non costruire mai la rete di contatti che una carriera richiede.", es: "Pero la medalla tiene también un reverso. La sede física no era solo un lugar donde trabajar: era el lugar de las relaciones, de los colegas, de las conversaciones frente a la máquina de café. Quien siempre trabaja desde casa denuncia cansancio mental, dificultad para desconectar y una soledad creciente. Los jóvenes, en particular, arriesgan no construir nunca la red de contactos que una carrera exige." },
      { it: "Le città stanno cambiando di conseguenza. Se meno persone vanno in ufficio, i bar, le edicole e i negozi dei centri storici perdono clienti, mentre i quartieri residenziali si animano. Alcuni comuni sperimentano lo «smart working village»: piccoli spazi di co-working nei paesi di campagna, per portare il lavoro dove la vita costa meno e l'aria è migliore. L'obiettivo è contrastare lo spopolamento delle zone interne.", es: "Las ciudades están cambiando en consecuencia. Si menos personas van a la oficina, los bares, los quioscos y las tiendas de los centros históricos pierden clientes, mientras los barrios residenciales se animan. Algunos municipios experimentan la «smart working village»: pequeños espacios de coworking en pueblos de campo, para llevar el trabajo donde la vida cuesta menos y el aire es mejor. El objetivo es frenar el despoblamiento de las zonas internas." },
      { it: "Il dibattito politico, intanto, è acceso. In Italia il diritto alla disconnessione — cioè il divieto di essere contattati fuori dall'orario di lavoro — è previsto dalla legge ma difficile da far rispettare. I sindacati chiedono regole chiare, le aziende temono di perdere controllo e competitività, e i lavoratori sono spesso divisi a metà: metà vogliono più presenza, metà non tornerebbero indietro per nessuna ragione.", es: "El debate político, mientras tanto, está encendido. En Italia el derecho a la desconexión — es decir, la prohibición de ser contactado fuera del horario laboral — está previsto por ley pero es difícil de hacer respetar. Los sindicatos piden reglas claras, las empresas temen perder control y competitividad, y los trabajadores a menudo están divididos en dos mitades: una mitad quiere más presencia, la otra no volvería atrás por ninguna razón." },
      { it: "Forse la risposta non è «ufficio contro casa», ma ibrido: due o tre giorni in sede per le attività che richiedono collaborazione, e il resto da casa per il lavoro profondo che richiede concentrazione. Come spesso accade, il futuro non sarà né il passato né il presente: sarà un compromesso che stiamo ancora imparando a costruire.", es: "Quizá la respuesta no sea «oficina contra casa», sino híbrida: dos o tres días en sede para las actividades que requieren colaboración, y el resto desde casa para el trabajo profundo que exige concentración. Como suele ocurrir, el futuro no será ni el pasado ni el presente: será un compromiso que todavía estamos aprendiendo a construir." },
    ],
    glossary: [
      { it: "spostamenti", es: "desplazamientos" },
      { it: "medaglia... rovescio", es: "la medalla... reverso" },
      { it: "staccare (il lavoro)", es: "desconectar (del trabajo)" },
      { it: "spopolamento", es: "despoblamiento" },
      { it: "diritto alla disconnessione", es: "derecho a la desconexión" },
    ],
    questions: [
      { q: "¿Cuántas horas al día ahorra quien trabaja desde casa, según el texto?", options: ["Mezz'ora", "Un'ora", "Due ore", "Quattro ore"], answer: 2, why: "«Risparmia in media due ore al giorno»." },
      { q: "¿Cuál es uno de los riesgos para los jóvenes?", options: ["Guadagnare troppo", "No construir nunca la red de contactos", "Dimenticare l'italiano", "Lavorare troppo poco"], answer: 1, why: "«I giovani... rischiano di non costruire mai la rete di contatti che una carriera richiede»." },
      { q: "¿Qué son los «smart working village»?", options: ["Uffici giganti in città", "Espacios de coworking en pueblos de campo", "Hotel per lavoratori", "Scuole di informatica"], answer: 1, why: "«Piccoli spazi di co-working nei paesi di campagna» para frenar el despoblamiento." },
      { q: "¿Qué problema tiene el derecho a la desconexión en Italia?", options: ["Non esiste", "Está en la ley pero es difícil de hacer respetar", "È vietato", "Costa troppo"], answer: 1, why: "«È previsto dalla legge ma difficile da far rispettare»." },
      { q: "¿Qué propone el texto como futuro probable?", options: ["Solo ufficio", "Solo casa", "Un modello híbrido", "Nessun lavoro"], answer: 2, why: "«La risposta non è ufficio contro casa, ma ibrido»." },
    ],
    discuss: [
      { it: "Preferisci lavorare/studiare da casa o in presenza? Perché?", es: "¿Prefieres trabajar/estudiar desde casa o en presencia? ¿Por qué?" },
      { it: "Il diritto alla disconnessione dovrebbe essere più severo?", es: "¿El derecho a la desconexión debería ser más severo?" },
      { it: "Il lavoro remoto può aiutare i piccoli paesi a sopravvivere? Come?", es: "¿El trabajo remoto puede ayudar a los pueblos pequeños a sobrevivir? ¿Cómo?" },
      { it: "Nella tua esperienza, lo studio online è più o meno efficace di quello in aula?", es: "En tu experiencia, ¿el estudio online es más o menos eficaz que el presencial?" },
    ],
  },
];

/** Biblioteca completa (43 letture: v9.0 + v9.3 + v9.4 + v9.10) */
export const LETTURE: Lettura[] = [
  ...DIALOGHI, ...DIALOGHI_EXTRA,
  ...INFORMAZIONE, ...INFORMAZIONE_EXTRA,
  ...STORIA_ITALIA, ...STORIA_ITALIA_EXTRA,
  ...STORIA_MONDO, ...STORIA_MONDO_EXTRA,
  ...CULTURA, ...CULTURA_EXTRA,
];

export const LETTURE_BY_ID: Record<string, Lettura> = Object.fromEntries(LETTURE.map((l) => [l.id, l]));

/* ── Imágenes por lettura (v9.2) ─────────────────────────────────────
   Ilustraciones IA originales (diálogos/información/boom, estilo
   editorial verde-terracotta) + fotografías históricas reales
   verificadas (Roma, Florencia, Garibaldi, emigración, Machu Picchu,
   Delacroix, Ruta de la Seda, Somalia 1960). 1344×768 JPEG.         */
export const LETTURE_IMG: Record<string, string> = {
  "dia-bar-01": "/images/letture/dia-bar-01.jpg",
  "dia-hotel-02": "/images/letture/dia-hotel-02.jpg",
  "dia-clima-03": "/images/letture/dia-clima-03.jpg",
  "inf-social-04": "/images/letture/inf-social-04.jpg",
  "inf-dieta-05": "/images/letture/inf-dieta-05.jpg",
  "inf-mare-06": "/images/letture/inf-mare-06.jpg",
  "inf-remoto-07": "/images/letture/inf-remoto-07.jpg",
  "it-roma-08": "/images/letture/it-roma-08.jpg",
  "it-rinascimento-09": "/images/letture/it-rinascimento-09.jpg",
  "it-risorgimento-10": "/images/letture/it-risorgimento-10.jpg",
  "it-emigrazione-11": "/images/letture/it-emigrazione-11.jpg",
  "it-boom-12": "/images/letture/it-boom-12.jpg",
  "mon-americhe-13": "/images/letture/mon-americhe-13.jpg",
  "mon-rivoluzione-14": "/images/letture/mon-rivoluzione-14.jpg",
  "mon-seta-15": "/images/letture/mon-seta-15.jpg",
  "mon-decolonizzazione-16": "/images/letture/mon-decolonizzazione-16.jpg",
  "cult-arte-17": "/images/letture/cult-arte-17.jpg",
  "cult-arte-18": "/images/letture/cult-arte-18.jpg",
  "cult-cucina-19": "/images/letture/cult-cucina-19.jpg",
  "cult-cucina-20": "/images/letture/cult-cucina-20.jpg",
  "cult-musica-21": "/images/letture/cult-musica-21.jpg",
  "cult-musica-22": "/images/letture/cult-musica-22.jpg",
  "cult-cine-23": "/images/letture/cult-cine-23.jpg",
  "cult-cine-24": "/images/letture/cult-cine-24.jpg",
  "cult-sport-25": "/images/letture/cult-sport-25.jpg",
  "cult-sport-26": "/images/letture/cult-sport-26.jpg",
  "cult-moda-27": "/images/letture/cult-moda-27.jpg",
  "cult-moda-28": "/images/letture/cult-moda-28.jpg",
  /* v9.10 · 15 letture nuevas */
  "dia-mercato-04": "/images/letture/dia-mercato-04.jpg",
  "dia-treno-05": "/images/letture/dia-treno-05.jpg",
  "dia-farmacia-06": "/images/letture/dia-farmacia-06.jpg",
  "dia-cena-07": "/images/letture/dia-cena-07.jpg",
  "inf-street-08": "/images/letture/inf-street-08.jpg",
  "inf-turismo-09": "/images/letture/inf-turismo-09.jpg",
  "inf-ia-10": "/images/letture/inf-ia-10.jpg",
  "inf-spreco-11": "/images/letture/inf-spreco-11.jpg",
  "it-venezia-13": "/images/letture/it-venezia-13.jpg",
  "it-galileo-14": "/images/letture/it-galileo-14.jpg",
  "mon-mali-17": "/images/letture/mon-mali-17.jpg",
  "mon-industriale-18": "/images/letture/mon-industriale-18.jpg",
  "mon-muro-19": "/images/letture/mon-muro-19.jpg",
  "cult-dante-29": "/images/letture/cult-dante-29.jpg",
  "cult-ferrante-30": "/images/letture/cult-ferrante-30.jpg",
};

/** Número de letture de historia completadas (logro «Storico») */
export function storiaReadCount(readIds: string[]): number {
  return readIds.filter((id) => id.startsWith("it-") || id.startsWith("mon-")).length;
}

/** Convierte las preguntas de una lettura en ejercicios MC para QuizEngine */
export function letturaExercises(l: Lettura) {
  return l.questions.map((q, i) => ({
    id: `${l.id}-q${i}`,
    type: "mc" as const,
    level: l.level,
    topic: "ascolto" as const, // topic neutro para el errorLog
    prompt: q.q,
    options: q.options,
    answer: q.answer,
    explain: q.why,
  }));
}

