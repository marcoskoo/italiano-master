import type { WritingPrompt } from "./types";
import { WRITINGS_EXTRA } from "./extra/writing-extra";

/* ── Escritura · consignas por nivel ──────────────────────────────── */

export const WRITINGS: WritingPrompt[] = [
  {
    id: "wr-1", level: "A1", title: "Presentarme", task: "Escríbete a ti mismo: nombre, edad, nacionalidad, ciudad, familia y algo que te gusta.",
    minWords: 30,
    tips: ["Usa essere (sono, ho) y avere", "Frase modelo: Mi chiamo…, ho … anni, sono di…", "Un verbo por frase es suficiente en A1"],
    model: [
      "Mi chiamo Ana e ho ventitré anni.",
      "Sono spagnola e abito a Madrid con la mia famiglia.",
      "Ho un fratello che si chiama Diego.",
      "Mi piace la musica italiana e il caffè.",
    ],
    checklist: ["¿Concuerdas adjetivos (spagnola, no spagnolo)?", "¿Usas avere para la edad (ho anni)?", "¿Cierras con una preferencia (mi piace…)?"],
  },
  {
    id: "wr-2", level: "A2", title: "Mi última semana", task: "Cuenta en passato prossimo lo que hiciste la semana pasada: trabajo, estudios, ocio.",
    minWords: 50,
    tips: ["Passato prossimo con avere (ho mangiato) y essere (sono andato)", "Marcadores: ieri, la settimana scorsa, sabato", "Cuidado con el auxiliar de los verbos de movimiento"],
    model: [
      "La settimana scorsa è stata molto intensa.",
      "Lunedì ho lavorato tutto il giorno e la sera ho cucinato per i miei amici.",
      "Mercoledì sono andata in palestra e dopo ho guardato un film italiano.",
      "Sabato siamo andati al mare: ho mangiato un gelato fantastico!",
    ],
    checklist: ["¿Elegiste bien avere/essere?", "¿El participio concuerda con essere?", "¿Usaste al menos 4 verbos distintos?"],
  },
  {
    id: "wr-3", level: "A2", title: "Una postal desde vacaciones", task: "Escribe una postal desde una ciudad italiana imaginaria: dónde estás, el clima, qué visitas.",
    minWords: 40,
    tips: ["Presente para el “ahora” de las vacaciones", "Che tempo fa? C'è il sole / piove", "Cierre: Un bacio / Un abbraccio"],
    model: [
      "Ciao mamma! Sono a Firenze e la città è meravigliosa.",
      "Oggi c'è il sole e facciamo una passeggiata lungo l'Arno.",
      "Ieri abbiamo visitato gli Uffizi: che capolavori!",
      "Domani andremo a Fiesole. Un bacio, Anna",
    ],
    checklist: ["¿Describe el clima con che tempo fa?", "¿Usaste un monumento real?", "¿Cierre afectuoso informal?"],
  },
  {
    id: "wr-4", level: "B1", title: "Un correo formal al hotel", task: "Escribe un correo para confirmar la reserva, pedir una habitación tranquila y preguntar por el desayuno.",
    minWords: 60,
    tips: ["Apertura: Gentile reception, / Buongiorno,", "Cortesía: vorrei, potrebbe, Le sarei grato/a", "Cierre: Distinti saluti / Cordiali saluti"],
    model: [
      "Gentile reception,",
      "Le scrivo in merito alla mia prenotazione (n. 34A) per il prossimo fine settimana.",
      "Vorrei confermare l'arrivo per venerdì sera e chiedere, se possibile, una camera silenziosa ai piani alti.",
      "Inoltre, potreste gentilmente confermarmi se la colazione è inclusa nel prezzo?",
      "In attesa di un Suo cortese riscontro, La saluto distintamente. — A. García",
    ],
    checklist: ["¿Usaste Lei en lugar de tu?", "¿Condizionale (vorrei, potrebbe)?", "¿Fórmulas de apertura y cierre?"],
  },
  {
    id: "wr-5", level: "B2", title: "Opinión: el turismo masivo", task: "Redacta un texto argumentativo: ¿el turismo masivo arruina las ciudades italianas? Tesis, un argumento a favor y una conclusión.",
    minWords: 100,
    tips: ["Conectores: innanzitutto, inoltre, tuttavia, di conseguenza", "Hipótesis: se + congiuntivo (se il turismo diminuisse…)", "Conclusión: in conclusione / per concludere"],
    model: [
      "Negli ultimi anni il dibattito sul turismo di massa nelle città d'arte è diventato acceso.",
      "Innanzitutto, è innegabile che il turismo porti ricchezza: a Venezia come a Firenze, migliaia di posti di lavoro dipendono dai visitatori.",
      "Tuttavia, il rovescio della medaglia è preoccupante: affitti alle stelle, negozi turistici al posto delle botteghe storiche, residenti che lasciano il centro.",
      "Se il turismo non fosse gestito con regole chiare, le città rischiano di trasformarsi in musei a cielo aperto, belle ma morte.",
      "In conclusione, ritengo che la soluzione non sia chiudere le porte, ma trovare un equilibrio: meno quantità, più qualità.",
    ],
    checklist: ["¿Hay tesis clara en la apertura?", "¿Conectores variados?", "¿Subjuntivo tras se hipotético?", "¿Conclusión que sintetiza?"],
  },
  {
    id: "wr-6", level: "C1", title: "Ensayo breve: lengua e identidad", task: "Ensayo de 150 palabras: ¿cuánto moldea la lengua que hablamos nuestra forma de pensar? Usa registro académico.",
    minWords: 150,
    tips: ["Impersonales: si è solito dire, è noto che", "Conectores académicos: peraltro, giova ricordare, va detto che", "Matiz: non è che…, semmai"],
    model: [
      "È un luogo comune affermare che la lingua determini il pensiero; eppure, va detto che qualcosa di vero contiene.",
      "Giova ricordare ciò che sosteneva Wittgenstein: i limiti del mio linguaggio sono i limiti del mio mondo.",
      "L'italiano, con la sua musica e la sua tradizione letteraria, incoraggia una forma mentis espressiva, incline alla nuance.",
      "Peraltro, chi parla più lingue sa che ogni idioma illumina angoli diversi della realtà: non è che una lingua imprigioni, semmai colora.",
      "In conclusione, la lingua non è una gabbia bensì una lente: amplia, più che limitare, lo sguardo.",
    ],
    checklist: ["¿Registro académico sostenido?", "¿Conectores de refinamiento?", "¿Matiz con non è che / semmai?", "¿Tesis-antítesis-síntesis?"],
  },
];

/* # Paquete de expansión v1.1: +4 consignas de escritura */
WRITINGS.push(...WRITINGS_EXTRA);
