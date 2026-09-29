/* ── Shadowing · datos (v6.0) ───────────────────────────────────────
   Método "shadowing": escuchar → repetir en voz alta → comparar.
   100% APIs nativas del navegador (TTS + MediaRecorder + Web Speech):
   sin coste, sin servicios externos. */

import type { CefrLevel } from "./types";

export interface ShadowPhrase {
  id: string;
  level: CefrLevel;
  it: string;
  es: string;
  tip?: string;          // nota de pronunciación para hispanohablantes
}

/* Frases por nivel: cotidianas, viajes, trabajo/estudio */
export const SHADOW_PHRASES: ShadowPhrase[] = [
  /* ── A1 · sopravvivenza ── */
  { id: "sh-a1-01", level: "A1", it: "Buongiorno, come stai oggi?", es: "Buenos días, ¿cómo estás hoy?", tip: "La «g» de «buongiorno» casi no suena: /buon-DJOR-no/." },
  { id: "sh-a1-02", level: "A1", it: "Mi chiamo Marco e sono peruviano.", es: "Me llamo Marco y soy peruano.", tip: "«chiamo» se lee /KIA-mo/, la «ch» italiana siempre es /k/." },
  { id: "sh-a1-03", level: "A1", it: "Vorrei un caffè, per favore.", es: "Quisiera un café, por favor.", tip: "«Vorrei» = r doble vibrante suave; no confundas con «vorrei» españolizado /borréi/." },
  { id: "sh-a1-04", level: "A1", it: "Quanto costa questo biglietto?", es: "¿Cuánto cuesta este billete?", tip: "«gli» de «biglietto» = /BLI/, como en «million» inglés." },
  { id: "sh-a1-05", level: "A1", it: "Non ho capito, puoi ripetere più lentamente?", es: "No he entendido, ¿puedes repetir más despacio?", tip: "«più» = /piú/, con acento en la u." },
  { id: "sh-a1-06", level: "A1", it: "Dov'è la stazione dei treni?", es: "¿Dónde está la estación de trenes?", tip: "«Dov'è» se pronuncia unido: /do-VÉ/." },
  /* ── A2 · vita quotidiana ── */
  { id: "sh-a2-01", level: "A2", it: "Di solito mi sveglio alle sette e faccio colazione con un cappuccino.", es: "Normalmente me despierto a las siete y desayuno un capuchino.", tip: "«sve» de «sveglio»: /SVE-glio/, sin vocalizar la «g» final." },
  { id: "sh-a2-02", level: "A2", it: "Nel weekend mi piace fare una passeggiata al parco.", es: "El fin de semana me gusta dar un paseo por el parque.", tip: "«passeggiata»: /pa-se-JA-ta/, «gg» ante «i» suena /y/ fuerte." },
  { id: "sh-a2-03", level: "A2", it: "Scusa, sono in ritardo perché c'era molto traffico.", es: "Perdona, llego tarde porque había mucho tráfico.", tip: "«c'era» = /che-ra/, con /k/." },
  { id: "sh-a2-04", level: "A2", it: "Che bello rivederti! Quanto tempo è passato!", es: "¡Qué gusto verte de nuevo! ¡Cuánto tiempo ha pasado!", tip: "«rivEderti»: acento en la segunda e; «tempo» con e abierta." },
  { id: "sh-a2-05", level: "A2", it: "Preferisco mangiare la pizza margherita, senza olive.", es: "Prefiero comer pizza margarita, sin aceitunas.", tip: "«gh» de «margherita» = /g/ dura: /mar-ge-RI-ta/." },
  { id: "sh-a2-06", level: "A2", it: "Domani andrò dal medico perché mi fa male la testa.", es: "Mañana iré al médico porque me duele la cabeza.", tip: "«far male»: entonación descendente en «male»." },
  /* ── B1 · opinioni ── */
  { id: "sh-b1-01", level: "B1", it: "Secondo me, imparare una lingua richiede costanza e un po' di pazienza.", es: "Según yo, aprender un idioma requiere constancia y algo de paciencia.", tip: "«pazienza»: /pa-TSI-en-tsa/, la «z» sonora como en «pizza»." },
  { id: "sh-b1-02", level: "B1", it: "Non vedo l'ora di visitare Firenze in primavera.", es: "Tengo muchas ganas de visitar Florencia en primavera.", tip: "«l'ora» se une a «vedo»: /non-VE-do-LA-ra/." },
  { id: "sh-b1-03", level: "B1", it: "Ho appena finito di leggere un romanzo molto interessante.", es: "Acabo de terminar de leer una novela muy interesante.", tip: "«appena» = /a-PE-na/, acento en la pe." },
  { id: "sh-b1-04", level: "B1", it: "Se avessi più tempo, imparerei anche il francese.", es: "Si tuviera más tiempo, también aprendería francés.", tip: "«imparerei»: ritmo /im-pa-re-REI/, 5 sílabas." },
  { id: "sh-b1-05", level: "B1", it: "Mi ha detto che tornerà non appena avrà finito il lavoro.", es: "Me ha dicho que volverá en cuanto haya terminado el trabajo.", tip: "«tornerà»: acento en la última; «lavoro» con v." },
  { id: "sh-b1-06", level: "B1", it: "In genere vado al lavoro in autobus, ma oggi ho preso la metro.", es: "Normalmente voy al trabajo en autobús, pero hoy he tomado el metro." },
  /* ── B2 · argomentare ── */
  { id: "sh-b2-01", level: "B2", it: "A dire la verità, non sono affatto d'accordo con questa decisione.", es: "A decir verdad, no estoy nada de acuerdo con esta decisión.", tip: "«affatto»: doble f marcada; ritmo /af-FAT-to/." },
  { id: "sh-b2-02", level: "B2", it: "Bisognerebbe investire di più nella formazione dei giovani.", es: "Habría que invertir más en la formación de los jóvenes.", tip: "«bisognerebbe»: /bi-so-NIO-reb-be/, 5 sílabas fluidas." },
  { id: "sh-b2-03", level: "B2", it: "Nonostante fosse tardi, abbiamo deciso di uscire comunque.", es: "A pesar de que era tarde, decidimos salir de todos modos.", tip: "«nonostante»: acento en «no»; «comunque» = /ko-MUN-kue/." },
  { id: "sh-b2-04", level: "B2", it: "Il problema è che, per quanto ci si sforzi, i risultati non arrivano subito.", es: "El problema es que, por mucho que uno se esfuerce, los resultados no llegan de inmediato.", tip: "«sforzi»: grupo «sf» sin vocal de apoyo (¡no «esforzi»!)." },
  { id: "sh-b2-05", level: "B2", it: "Col senno di poi, quella scelta si è rivelata quella giusta.", es: "A posteriori, aquella elección resultó ser la correcta.", tip: "«senno» = /SEN-no/, con e abierta." },
  { id: "sh-b2-06", level: "B2", it: "Ogni volta che vado in Italia, scopro qualcosa di nuovo e di sorprendente.", es: "Cada vez que voy a Italia, descubro algo nuevo y sorprendente.", tip: "«qualcosa» = /kual-KO-za/, 3 sílabas." },
  /* ── C1 · registro alto ── */
  { id: "sh-c1-01", level: "C1", it: "La letteratura italiana del Novecento ha saputo raccontare l'anima del paese.", es: "La literatura italiana del siglo XX supo contar el alma del país.", tip: "«saputo»: /sa-PU-to/; «paese» = /pa-É-se/." },
  { id: "sh-c1-02", level: "C1", it: "Sarebbe opportuno valutare con attenzione le conseguenze a lungo termine.", es: "Sería oportuno evaluar con atención las consecuencias a largo plazo.", tip: "«opportuno»: doble p explosiva." },
  { id: "sh-c1-03", level: "C1", it: "Ritengo che l'apprendimento delle lingue favorisca l'apertura mentale.", es: "Considero que el aprendizaje de idiomas favorece la apertura mental.", tip: "«favorisca»: /fa-vo-RIS-ca/." },
  { id: "sh-c1-04", level: "C1", it: "Conoscere a fondo una cultura significa anche accettarne le contraddizioni.", es: "Conocer a fondo una cultura significa también aceptar sus contradicciones.", tip: "«accettarne»: /ac-cet-TAR-ne/, ritmo rápido." },
  { id: "sh-c1-05", level: "C1", it: "L'esperienza all'estero mi ha permesso di maturare sia come persona sia come professionista.", es: "La experiencia en el extranjero me ha permitido madurar tanto como persona como profesional.", tip: "«permesso»: /per-MES-so/." },
  { id: "sh-c1-06", level: "C1", it: "Il dibattito odierno sulla sostenibilità richiede un approccio interdisciplinare.", es: "El debate actual sobre la sostenibilidad requiere un enfoque interdisciplinario.", tip: "«approccio»: /ap-PRO-cio/." },
  /* ── C2 · padronanza (v9.5.3: antes este nivel no tenía frases y la vista caía) ── */
  { id: "sh-c2-01", level: "C2", it: "Se avessi seguito il suo consiglio, a quest'ora non mi troverei in questi pasticci.", es: "Si hubiera seguido su consejo, a estas horas no estaría en estos líos.", tip: "Período hipotético mixto: «se + congiuntivo passato» + condizionale; «pasticci» acento en la i." },
  { id: "sh-c2-02", level: "C2", it: "Pur essendo a conoscenza dei rischi, ha deciso di giocarsi il tutto per tutto.", es: "Aunque conocía los riesgos, decidió jugárselo todo por todo.", tip: "«pur essendo» + gerundio = aunque + gerundio; «giocarsi»: la /r/ ante /s/ casi no suena." },
  { id: "sh-c2-03", level: "C2", it: "Non vedo l'ora che tu ti faccia vivo: ne abbiamo di cose da raccontarci!", es: "Tengo muchas ganas de que des señales de vida: ¡tenemos un montón de cosas que contarnos!", tip: "«ne» partitivo = 'de esas'; encadena /ne-a-BBA-mo-di-CO-se/." },
  { id: "sh-c2-04", level: "C2", it: "Chissà se avrà mai il coraggio di mettersi in gioco una volta per tutte.", es: "Quién sabe si alguna vez tendrá el valor de jugársela de una vez por todas.", tip: "«mettersi in gioco»: /me-TER-si-in-GIO-co/, todo ligado; «chissà» acento final." },
  { id: "sh-c2-05", level: "C2", it: "Con tutto quello che ha passato, se l'è cavata egregiamente, non c'è che dire.", es: "Con todo lo que ha pasado, se las arregló de maravilla, no cabe duda.", tip: "«se l'è cavata»: elisión en cadena /sel-lè-ca-VA-ta/; «egregiamente» = /e-gre-JA-men-te/." },
  { id: "sh-c2-06", level: "C2", it: "Ogni promessa è debito: prima o poi dovrai mantenere la parola data.", es: "Toda promesa es una deuda: tarde o temprano tendrás que mantener tu palabra.", tip: "«parola data»: participio pospuesto al sustantivo; «prima o poi» se dice ligado /PRI-ma-o-POI/." },
];

/* Domande orali estilo examen (CILS / CELI parlato) para el modo "simulacro oral" */
export interface OralTask {
  id: string;
  level: CefrLevel;
  kind: "presentazione" | "descrizione" | "opinione" | "confronto" | "esperienza";
  prompt: string;         // consigna en ES
  it: string;             // consigna en italiano (lo que oirías en el examen)
  prepSeconds: number;    // tiempo de preparación
  speakSeconds: number;   // tiempo de habla
  tips: string[];         // qué cubrir para obtener puntos
}

export const ORAL_TASKS: OralTask[] = [
  { id: "oral-a2-01", level: "A2", kind: "presentazione", prompt: "Preséntate: nombre, edad, origen, trabajo/estudios y un pasatiempo.", it: "Presentati: nome, età, provenienza, lavoro o studi e un passatempo.", prepSeconds: 30, speakSeconds: 60, tips: ["Usa «mi chiamo, ho … anni, vengo da…»", "Menciona 1 hobby con «mi piace + infinitivo»", "Cierra con «per finire…»"] },
  { id: "oral-a2-02", level: "A2", kind: "descrizione", prompt: "Describe tu casa: cuántas habitaciones, dónde está, qué te gusta de ella.", it: "Descrivi la tua casa: quante stanze, dove si trova, cosa ti piace.", prepSeconds: 40, speakSeconds: 60, tips: ["C'è / ci sono + sustantivo", "Aggietivos con molto/poco", "Ubicación: vicino a, lontano da"] },
  { id: "oral-b1-01", level: "B1", kind: "esperienza", prompt: "Cuenta un viaje inolvidable: adónde, con quién, qué pasó y por qué lo recuerdas.", it: "Racconta un viaggio indimenticabile: dove, con chi, cosa è successo.", prepSeconds: 45, speakSeconds: 90, tips: ["Passato prossimo + imperfetto alternados", "Conectores: poi, quindi, alla fine", "Expresa emoción: mi sono sentito/a…"] },
  { id: "oral-b1-02", level: "B1", kind: "opinione", prompt: "¿Es mejor vivir en la ciudad o en el campo? Da tu opinión con 2 motivos y un ejemplo.", it: "È meglio vivere in città o in campagna? Dai la tua opinione con due motivi.", prepSeconds: 45, speakSeconds: 90, tips: ["Secondo me / ritengo che", "Perché + motivo; ad esempio", "Concede: è vero che… però…"] },
  { id: "oral-b2-01", level: "B2", kind: "confronto", prompt: "Compara estudiar idiomas en línea vs. en el aula: ventajas, desventajas y tu experiencia.", it: "Confronta lo studio delle lingue online e in aula: vantaggi e svantaggi.", prepSeconds: 60, speakSeconds: 120, tips: ["Congiuntivo: sebbene, affinché", "Contraste: mentre, al contrario", "Conclusión: alla luce di tutto ciò"] },
  { id: "oral-b2-02", level: "B2", kind: "opinione", prompt: "«Los jóvenes leen cada vez menos.» ¿Estás de acuerdo? Propón una solución.", it: "«I giovani leggono sempre meno.» Sei d'accordo? Proponi una soluzione.", prepSeconds: 60, speakSeconds: 120, tips: ["A mio avviso + congiuntivo", "Causa: dato che, poiché", "Solución: si + condizionale"] },
  { id: "oral-c1-01", level: "C1", kind: "opinione", prompt: "¿Puede la tecnología acercarnos a la cultura italiana o la banaliza? Argumenta con matices.", it: "La tecnologia può avvicinarci alla cultura italiana o la banalizza? Argomenta con sfumature.", prepSeconds: 60, speakSeconds: 150, tips: ["Concesión: per quanto, sebbene + congiuntivo", "Nomina un esempio concreto (un film, un podcast)", "Evita frases tajantes: probabilmente, in linea di massima"] },
  { id: "oral-c2-01", level: "C2", kind: "opinione", prompt: "«L'italiano è una lingua in via d'estinzione?» Discute con contraargumentos y una propuesta final.", it: "«L'italiano è una lingua in via d'estinzione?» Discuti con sfumature e una proposta.", prepSeconds: 60, speakSeconds: 180, tips: ["Registros: coloquial vs. académico (a mio avviso / per quel che mi riguarda)", "Contraargumento: è vero che… eppure…", "Conclusión: alla luce delle considerazioni esposte"] },
];

/* ── Utilidades de comparación (reconocimiento de voz) ───────────── */

/** Normaliza para comparar: minúsculas, sin acentos ni puntuación */
export function normalizeIt(s: string): string {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^\p{L}\p{N}\s']/gu, " ")
    .replace(/\s+/g, " ")
    .trim();
}

/** Distancia de Levenshtein (para tolerar errores del reconocedor) */
export function levenshtein(a: string, b: string): number {
  if (a === b) return 0;
  const m = a.length, n = b.length;
  if (m === 0 || n === 0) return Math.max(m, n);
  let prev = Array.from({ length: n + 1 }, (_, i) => i);
  for (let i = 1; i <= m; i++) {
    const cur = [i];
    for (let j = 1; j <= n; j++) {
      cur[j] = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
    }
    prev = cur;
  }
  return prev[n];
}

export interface ShadowScore {
  score: number;            // 0–100
  matched: boolean[];       // por palabra objetivo
  heard: string;            // lo que entendió el reconocedor
}

/** Compara la frase objetivo con lo reconocido: token match con tolerancia 1 typo */
export function scoreSpeech(target: string, heard: string): ShadowScore {
  const tWords = normalizeIt(target).split(" ").filter(Boolean);
  const hWords = normalizeIt(heard).split(" ").filter(Boolean);
  const matched = tWords.map((tw) =>
    hWords.some((hw) => hw === tw || (tw.length >= 4 && hw.length >= 4 && levenshtein(tw, hw) <= 1))
  );
  const hits = matched.filter(Boolean).length;
  const score = tWords.length ? Math.round((hits / tWords.length) * 100) : 0;
  return { score, matched, heard };
}

/** Veredicto motivador según la puntuación */
export function shadowVerdict(score: number): { label: string; tone: "verde" | "oro" | "rosso"; msg: string } {
  if (score >= 85) return { label: "Perfetto!", tone: "verde", msg: "Pronuncia da madrelingua. Prova con una frase más larga." };
  if (score >= 60) return { label: "Bravo!", tone: "verde", msg: "Muy bien: afina las palabras marcadas en rojo y repite." };
  if (score >= 35) return { label: "Ci siamo quasi", tone: "oro", msg: "Vas por buen camino. Escucha despacio (🐢) y repite frase por frase." };
  return { label: "Riprova", tone: "rosso", msg: "Escucha primero en modo lento, lee el tip y vuelve a intentarlo." };
}
