import type { CefrLevel } from "./types";

/* ── Preposizioni lab · plugin v5.0 ───────────────────────────────────
   72 frases de relleno (cloze) sobre preposiciones simples y
   articuladas, el punto gramatical más traicionero para
   hispanohablantes. Cada ítem: 4 opciones, respuesta y regla.        */

export interface ClozeItem {
  id: string;
  level: CefrLevel;
  sentence: string;      // contiene "___"
  options: string[];     // 4 opciones
  answer: string;
  rule: string;          // regla explicada en español
  translation: string;   // traducción de la frase
}

const C = (
  id: string, level: CefrLevel, sentence: string, options: string[],
  answer: string, rule: string, translation: string
): ClozeItem => ({ id, level, sentence, options, answer, rule, translation });

export const PREPOSITION_CLOZE: ClozeItem[] = [
  /* ═══ A1 · preposiciones simples de lugar ═══ */
  C("pp-01", "A1", "Vado ___ Roma domani mattina.", ["a", "in", "da", "su"], "a", "Ciudades → a: vado a Roma. Países/regiones → in: vado in Italia.", "Voy a Roma mañana por la mañana."),
  C("pp-02", "A1", "Abito ___ Italia da tre anni.", ["in", "a", "di", "per"], "in", "Países singulares → in: abito in Italia, in Spagna, in Perù.", "Vivo en Italia desde hace tres años."),
  C("pp-03", "A1", "Il libro è ___ tavolo.", ["sul", "nel", "al", "col"], "sul", "su + il = sul (sobre el). su + la = sulla, su + i = sui.", "El libro está sobre la mesa."),
  C("pp-04", "A1", "Il gatto è ___ divano.", ["sotto il", "sotto la", "sotto i", "sotto lo"], "sotto il", "sotto no se contrae: sotto il divano (bajo el sofá).", "El gato está debajo del sofá."),
  C("pp-05", "A1", "Vengo ___ Spagna.", ["dalla", "dall'", "dal", "dai"], "dalla", "da + la = dalla (desde la). Origen: vengo dalla Spagna.", "Vengo de España."),
  C("pp-06", "A1", "Il caffè ___ bar è ottimo.", ["del", "della", "di", "d'"], "del", "di + il = del (del bar): posesión o procedencia con artículo.", "El café del bar es buenísimo."),
  C("pp-07", "A1", "Studio italiano ___ scuola.", ["a", "in", "da", "per"], "a", "Lugares concretos sin artículo → a scuola, a casa, a teatro.", "Estudio italiano en la escuela."),
  C("pp-08", "A1", "La chiave è ___ borsa.", ["nella", "nel", "sulla", "alla"], "nella", "in + la = nella (dentro la). in + il = nel.", "La llave está en el bolso."),
  C("pp-09", "A1", "Torno ___ casa alle sei.", ["a", "in", "da", "per"], "a", "a casa = en casa / a casa: el destino o el lugar doméstico fijo.", "Vuelvo a casa a las seis."),
  C("pp-10", "A1", "Siamo ___ mare quest'estate.", ["al", "alla", "in", "nel"], "al", "a + il = al mare (en el mar). Muy usado en vacaciones.", "Estamos en el mar este verano."),
  C("pp-11", "A1", "Il quadro è ___ muro.", ["sul", "al", "nel", "dal"], "sul", "su + il = sul muro (sobre la pared): contacto con superficie vertical.", "El cuadro está en la pared."),
  C("pp-12", "A1", "Bevo un tè ___ limone.", ["col", "al", "nel", "del"], "col", "con + il = col: tè col limone (con limón), muy frecuente en bares.", "Bebo un té con limón."),

  /* ═══ A2 · tiempo, proveniencia, modo ═══ */
  C("pp-13", "A2", "Ci vediamo ___ tre giorni.", ["tra", "per", "in", "a"], "tra", "Futuro inmediato → tra/fra + tiempo: ci vediamo tra tre giorni.", "Nos vemos dentro de tres días."),
  C("pp-14", "A2", "Parto ___ Milano col treno delle otto.", ["per", "a", "in", "verso"], "per", "Dirección/destino del trayecto → per: parto per Milano.", "Salgo hacia Milán con el tren de las ocho."),
  C("pp-15", "A2", "Ho comprato un regalo ___ mia madre.", ["per", "a", "di", "con"], "per", "Destinatario + regalo → per: un regalo per te. Ojo: a también existe, pero con regalar es per.", "He comprado un regalo para mi madre."),
  C("pp-16", "A2", "Questo regalo è ___ nonna.", ["per la", "alla", "della", "nella"], "per la", "per + la = per la nonna: destinataria del regalo.", "Este regalo es para la abuela."),
  C("pp-17", "A2", "Parlo ___ telefono con Giulia.", ["al", "nel", "col", "sul"], "al", "a + il = al telefono: al telefono, al cinema, al mare.", "Hablo por teléfono con Giulia."),
  C("pp-18", "A2", "Il treno arriva ___ binario cinque.", ["al", "in", "su", "per"], "al", "a + il = al binario: arrivare al binario 5.", "El tren llega al andén cinco."),
  C("pp-19", "A2", "Sono nato ___ nord Italia.", ["nel", "in", "al", "di"], "nel", "Puntos cardinales con artículo → nel nord Italia (a + il nord = al nord cuando es dirección).", "Nací en el norte de Italia."),
  C("pp-20", "A2", "Sono nato ___ 1998.", ["nel", "in", "a", "dal"], "nel", "in + il = nel 1998: años con artículo → nel duemila, nel 2020.", "Nací en 1998."),
  C("pp-21", "A2", "___ estate andiamo al mare.", ["In", "A", "Di", "Per"], "In", "Estaciones sin artículo → in estate, in inverno, in primavera.", "En verano vamos al mar."),
  C("pp-22", "A2", "Mi piace viaggiare ___ treno.", ["in", "col", "a", "per"], "in", "Medios de transporte → in treno, in macchina, in aereo. Pero: a piedi (a pie).", "Me gusta viajar en tren."),
  C("pp-23", "A2", "Andiamo a scuola ___ piedi.", ["a", "in", "con", "per"], "a", "Excepción famosa: a piedi (a pie). Todo lo demás va con in.", "Vamos a la escuela a pie."),
  C("pp-24", "A2", "La lettera è scritta ___ Maria.", ["da", "di", "per", "a"], "da", "Complemento agente en pasiva → da: scritta da Maria (escrita por María).", "La carta está escrita por María."),
  C("pp-25", "A2", "Questo dolce è fatto ___ mamma.", ["dalla", "dal", "della", "con la"], "dalla", "da + la = dalla: fatto dalla mamma (hecho por la mamá).", "Este postre lo ha hecho la mamá."),
  C("pp-26", "A2", "Lavoro ___ ufficio in centro.", ["in", "all'", "dal", "sull'"], "in", "in + ufficio (lugar de trabajo sin artículo): lavoro in ufficio. Dirección → all'ufficio.", "Trabajo en la oficina del centro."),

  /* ═══ A2–B1 · verbos con preposición ═══ */
  C("pp-27", "B1", "Ho bisogno ___ aiuto.", ["di", "d'", "a", "per"], "di", "aver bisogno di + nombre/infinitivo: ho bisogno di aiutare (necesito ayudar).", "Necesito ayuda."),
  C("pp-28", "B1", "Ho paura ___ volare.", ["di", "a", "per", "da"], "di", "aver paura di + infinitivo: paura di volare (miedo a volar).", "Tengo miedo a volar."),
  C("pp-29", "B1", "Penso ___ te ogni giorno.", ["a", "di", "su", "per"], "a", "pensare a alguien = pensar en alguien (persona); pensare di = tener la intención de.", "Pienso en ti cada día."),
  C("pp-30", "B1", "Penso ___ cambiare lavoro.", ["di", "a", "per", "su"], "di", "pensare di + infinitivo = estar pensando en hacer algo (intención).", "Estoy pensando en cambiar de trabajo."),
  C("pp-31", "B1", "Mi ricordo ___ quel giorno.", ["di", "a", "per", "con"], "di", "ricordarsi di + nombre/infinitivo: mi ricordo di averti visto.", "Me acuerdo de aquel día."),
  C("pp-32", "B1", "Sogno ___ visitare la Sicilia.", ["di", "a", "per", "in"], "di", "sognare di + infinitivo: sogno di visitare (sueño con visitar).", "Sueño con visitar Sicilia."),
  C("pp-33", "B1", "Ho provato ___ chiamarti ieri.", ["a", "di", "per", "su"], "a", "provare a + infinitivo = intentar; provare di también existe, pero a es lo estándar moderno.", "Intenté llamarte ayer."),
  C("pp-34", "B1", "Spero ___ vederti presto.", ["di", "a", "per", "che"], "di", "sperare di + infinitivo: spero di vederti (espero verte). Con che + congiuntivo también: spero che tu venga.", "Espero verte pronto."),
  C("pp-35", "B1", "Ci sono riuscito ___ molta fatica.", ["con", "a", "di", "per"], "con", "riuscire a + infinitivo, pero riuscire con fatica = lograr con esfuerzo (modo).", "Lo conseguí con mucho esfuerzo."),
  C("pp-36", "B1", "Riesco ___ capire l'italiano.", ["a", "di", "per", "in"], "a", "riuscire a + infinitivo = conseguir/lograr hacer: riesco a capire.", "Consigo entender el italiano."),
  C("pp-37", "B1", "Ti aiuto ___ fare i compiti.", ["a", "di", "per", "con"], "a", "aiutare a + infinitivo: aiuto a fare (ayudo a hacer).", "Te ayudo a hacer los deberes."),
  C("pp-38", "B1", "Imparo ___ giocare a tennis.", ["a", "di", "per", "con"], "a", "imparare a + infinitivo: imparo a giocare (aprendo a jugar).", "Aprendo a jugar al tenis."),
  C("pp-39", "B1", "Ho smesso ___ fumare l'anno scorso.", ["di", "a", "per", "da"], "di", "smettere di + infinitivo: ho smesso di fumare (he dejado de fumar).", "Dejé de fumar el año pasado."),
  C("pp-40", "B1", "Continuo ___ studiare nonostante la stanchezza.", ["a", "di", "per", "con"], "a", "continuare a + infinitivo: continuo a studiare (sigo estudiando).", "Sigo estudiando a pesar del cansancio."),

  /* ═══ B1 · preposiciones articoladas y usos finos ═══ */
  C("pp-41", "B1", "Il telefono è ___ zaino.", ["nello", "nel", "nella", "sullo"], "nello", "in + lo = nello: nello zaino, nello specchio (antes de z, s+consonante, ps, gn).", "El teléfono está en la mochila."),
  C("pp-42", "B1", "Parliamo ___ studenti stranieri.", ["degli", "dei", "del", "delle"], "degli", "di + gli = degli: degli studenti. gli va con st-, z-, ps-, gn- en plural.", "Hablamos de los estudiantes extranjeros."),
  C("pp-43", "B1", "La risposta è ___ professore.", ["del", "dello", "della", "dai"], "del", "di + il = del: del professore (del profesor).", "La respuesta es del profesor."),
  C("pp-44", "B1", "Torniamo ___ montagna domenica.", ["in", "a", "per", "sulla"], "in", "in montagna (fijo, sin artículo): andiamo in montagna, al mare (con artículo).", "Volvemos a la montaña el domingo."),
  C("pp-45", "B1", "Siamo andati ___ cinema ieri sera.", ["al", "in", "nel", "dal"], "al", "a + il = al cinema: places fijos con artículo (al cinema, al teatro, al mare).", "Fuimos al cine anoche."),
  C("pp-46", "B1", "Ho appuntamento ___ dentista.", ["dal", "al", "del", "nel"], "dal", "da + il = dal: andare dal medico, dal dentista (profesiones con da).", "Tengo cita con el dentista."),
  C("pp-47", "B1", "Passo ___ panettiere a comprare il pane.", ["dal", "al", "del", "nel"], "dal", "dal panettiere = en la panadería (da + comercio). Pasar por un negocio → dal + oficio.", "Paso por la panadería a comprar pan."),
  C("pp-48", "B1", "Sono ___ dottore questa mattina.", ["dal", "al", "del", "col"], "dal", "essere dal dottore = estar en el médico (da + profesional).", "Estoy en el médico esta mañana."),
  C("pp-49", "B1", "Il museo è chiuso ___ lunedì.", ["il", "di", "a", "in"], "di", "Días de la semana → di + articolo: di lunedì (los lunes), il lunedì (el lunes).", "El museo está cerrado los lunes."),
  C("pp-50", "B1", "___ domenica dormiamo fino a tardi.", ["La", "Di", "In", "A"], "La", "la domenica = los dominggs (habitual). Ojo con la s: los domingos.", "Los domingos dormimos hasta tarde."),
  C("pp-51", "B1", "La farmacia è aperta ___ mezzogiorno.", ["fino a", "per", "da", "a"], "fino a", "fino a + hora = hasta: aperta fino a mezzogiorno (abierta hasta el mediodía).", "La farmacia está abierta hasta el mediodía."),
  C("pp-52", "B1", "Lavoro ___ mattina alla sera.", ["dalla", "alla", "di", "in"], "dalla", "dalla mattina alla sera = de la mañana a la tarde (dalla… alla…).", "Trabajo de la mañana a la tarde."),
  C("pp-53", "B1", "Il treno per Roma parte ___ binario tre.", ["dal", "del", "al", "nel"], "dal", "dal binario tre = desde el andén 3 (partire dal + lugar).", "El tren a Roma sale del andén tres."),
  C("pp-54", "B1", "Ho ricevuto una lettera ___ comune.", ["dal", "del", "al", "nel"], "dal", "dal comune = del ayuntamiento (procedencia: da + il = dal).", "Recibí una carta del ayuntamiento."),

  /* ═══ B2 · matices avanzados ═══ */
  C("pp-55", "B2", "È una situazione ___ sopportare.", ["da", "di", "a", "per"], "da", "da + infinitivo pasivo: una situazione da sopportare (una situación que soportar).", "Es una situación que soportar."),
  C("pp-56", "B2", "Non c'è niente ___ fare.", ["da", "di", "a", "per"], "da", "niente da fare = nada que hacer (da + infinitivo con valor pasivo: cosas que hacer).", "No hay nada que hacer."),
  C("pp-57", "B2", "Ho molte cose ___ dirti.", ["da", "di", "a", "per"], "da", "cose da dire = cosas que decir: da + infinitivo = qué hacer con algo.", "Tengo muchas cosas que decirte."),
  C("pp-58", "B2", "È una città ___ visitare assolutamente.", ["da", "di", "a", "per"], "da", "da + infinitivo con valor pasivo: una città da visitare (una ciudad que visitar).", "Es una ciudad que visitar sin falta."),
  C("pp-59", "B2", "Fa un caldo ___ morire.", ["da", "di", "a", "per"], "da", "da morire = para morirse (intensificador: un caldo da morire, una stanchezza da morire).", "Hace un calor para morirse."),
  C("pp-60", "B2", "Siamo ___ guai seri.", ["nei", "in", "agli", "sui"], "nei", "essere nei guai = estar en problemas: in + i = nei. Guai siempre en plural.", "Estamos en problemas serios."),
  C("pp-61", "B2", "Il paziente è ___ cura intensiva.", ["in", "a", "sotto", "al"], "in", "in cura dal dottore = en tratamiento con el médico; in cura intensiva = en cuidados intensivos.", "El paciente está en cuidados intensivos."),
  C("pp-62", "B2", "___ mio parere, hai ragione.", ["A", "In", "Secondo", "Per"], "A", "a mio parere / a mio avviso = en mi opinión (a + posesivo + parere).", "En mi opinión, tienes razón."),
  C("pp-63", "B2", "___ breve riuniremo il consiglio.", ["Tra", "In", "A", "Per"], "Tra", "tra breve = dentro de poco. tra/fra + breve/lungo = tiempos futuros cortos.", "Dentro de poco reuniremos el consejo."),
  C("pp-64", "B2", "La decisione dipende ___ te.", ["da", "di", "a", "per"], "da", "dipendere da = depender de: dipende da te (depende de ti).", "La decisión depende de ti."),
  C("pp-65", "B2", "Mi sono innamorato ___ lei.", ["di", "a", "per", "con"], "di", "innamorarsi di = enamorarse de: innamorato di lei (enamorado de ella).", "Me he enamorado de ella."),
  C("pp-66", "B2", "Mi fido ___ te.", ["di", "a", "su", "con"], "di", "fidarsi di = fiarse de: mi fido di te (me fío de ti).", "Me fío de ti."),
  C("pp-67", "B2", "Ti va ___ uscire stasera?", ["di", "a", "per", "in"], "di", "andare di + infinitivo (ti va di… = te apetece…): ti va di uscire?", "¿Te apetece salir esta noche?"),
  C("pp-68", "B2", "Ci tengo ___ finire il progetto.", ["a", "di", "per", "su"], "a", "tenere a + infinitivo/nombre = importar mucho, tener empeño: ci tengo a finire.", "Me importa terminar el proyecto."),
  C("pp-69", "B2", "Ho smesso ___ preoccuparmi.", ["di", "a", "per", "con"], "di", "smettere di + infinitivo: smetto di preoccuparmi (dejo de preocuparme).", "He dejado de preocuparme."),
  C("pp-70", "B2", "Il regalo è destinato ___ bambini.", ["ai", "agli", "al", "alle"], "ai", "a + i = ai bambini; destinato a + destinatario: ai bambini della scuola.", "El regalo está destinado a los niños."),
  C("pp-71", "B2", "Grazie ___ tua pazienza.", ["alla", "al", "di", "per"], "alla", "grazie alla pazienza = gracias a la paciencia (grazie a + persona/cosa: grazie a te, alla tua pazienza).", "Gracias a tu paciencia."),
  C("pp-72", "B2", "Rispetto ___ Milano, Torino è più tranquilla.", ["a", "di", "con", "in"], "a", "rispetto a = en comparación con: rispetto a Milano (comparación con rispetto a).", "En comparación con Milán, Turín es más tranquila."),
];

/* Sesión de práctica: n ítems barajados por nivel */
export function clozeSession(level: CefrLevel | "tutti", count: number): ClozeItem[] {
  const pool = (level === "tutti" ? PREPOSITION_CLOZE : PREPOSITION_CLOZE.filter((c) => c.level === level))
    .filter((c) => c.options.length === 4); // solo ítems bien formados
  const out: ClozeItem[] = [];
  while (out.length < Math.min(count, pool.length) && pool.length > 0) {
    const i = Math.floor(Math.random() * pool.length);
    out.push(pool.splice(i, 1)[0]);
  }
  return out;
}
