/* ═══ Deutsch · pronunciación · v9.39 ═══════════════════════════════
   Espejo del objeto SOUNDS de src/components/lms/views/pronunciation.tsx:
   sonidos propios del alemán con regla explicada en español (tuteo) y
   4 palabras de ejemplo { w, es } cada uno, listas para el TTS.        */

export interface PronunciationSound {
  id: string;
  title: string;
  rule: string;
  words: { w: string; es: string }[];
  level: string;
}

export const DE_PRONUNCIATION: PronunciationSound[] = [
  {
    id: "de-pr-z", title: "Z = ts", level: "A1",
    rule: "La z alemana nunca suena como la z española ni como la inglesa: es siempre «ts», como en «pizza». Zehn = «tséin». Si sabes italiano, ya la tienes.",
    words: [
      { w: "zehn", es: "diez" },
      { w: "die Zeit", es: "el tiempo" },
      { w: "der Zug", es: "el tren" },
      { w: "tanzen", es: "bailar" },
    ],
  },
  {
    id: "de-pr-ue", title: "La ü", level: "A1",
    rule: "Di «i» con la lengua y «u» con los labios: redondea la boca como para decir «u» pero pronuncia «i». Esa mezcla es la ü. No la conviertas en u: fünf no suena «funf» ni Tür suena «tur».",
    words: [
      { w: "über", es: "sobre / por encima" },
      { w: "fünf", es: "cinco" },
      { w: "müde", es: "cansado" },
      { w: "die Tür", es: "la puerta" },
    ],
  },
  {
    id: "de-pr-oe", title: "La ö", level: "A1",
    rule: "El mismo truco que la ü, pero con «e»: labios de «o», lengua de «e». Si te cuesta, di «oi» muy rápido y congela la posición de los labios a mitad de camino.",
    words: [
      { w: "schön", es: "bonito" },
      { w: "können", es: "poder" },
      { w: "zwölf", es: "doce" },
      { w: "der Löwe", es: "el león" },
    ],
  },
  {
    id: "de-pr-ch-ich", title: "Ch suave (ich-Laut)", level: "A1",
    rule: "Después de i, e, ü, ö y de consonantes, la ch suena como una j suave, sin rozar: ich = «ij». Es la posición de tu «yo» español pero con menos aire y una sonrisa.",
    words: [
      { w: "ich", es: "yo" },
      { w: "nicht", es: "no" },
      { w: "leicht", es: "fácil" },
      { w: "das Mädchen", es: "la niña" },
    ],
  },
  {
    id: "de-pr-ch-ach", title: "Ch fuerte (ach-Laut)", level: "A1",
    rule: "Después de a, o, u y au, la ch se pronuncia más atrás, en la garganta: como una j española con más raspa. Acht = «ajt» con la j bien profunda. Mismo sufijo, distinta ch que en ich.",
    words: [
      { w: "acht", es: "ocho" },
      { w: "der Bach", es: "el arroyo" },
      { w: "machen", es: "hacer" },
      { w: "das Buch", es: "el libro" },
    ],
  },
  {
    id: "de-pr-ei-ie", title: "ei / ie", level: "A1",
    rule: "ei es diptongo «ái»: mein = «main». ie es «i» larga: Bier = «biir». No las mezcles nunca: der Wein (vino) y Wien (Viena) solo se distinguen por esto.",
    words: [
      { w: "das Ei", es: "el huevo" },
      { w: "der Wein / Wien", es: "el vino / Viena" },
      { w: "das Bier", es: "la cerveza" },
      { w: "die Liebe", es: "el amor" },
    ],
  },
  {
    id: "de-pr-vwf", title: "V, W y F", level: "A1",
    rule: "La w alemana suena como la v española: Wasser = «váser». La v alemana suena casi siempre como f: Vater = «fáter». Y la f es f, como te imaginas.",
    words: [
      { w: "das Wasser", es: "el agua" },
      { w: "der Vater", es: "el padre" },
      { w: "vier", es: "cuatro" },
      { w: "der Wein", es: "el vino" },
    ],
  },
  {
    id: "de-pr-sp-st", title: "sp / st iniciales", level: "A1",
    rule: "Al principio de palabra (o de prefijo), sp y st suenan «shp» y «sht»: sprechen = «shpré-jen», Stadt = «shtat». En medio de palabra no: das Wasser, das Fenster.",
    words: [
      { w: "sprechen", es: "hablar" },
      { w: "die Stadt", es: "la ciudad" },
      { w: "die Straße", es: "la calle" },
      { w: "der Student", es: "el estudiante" },
    ],
  },
  {
    id: "de-pr-devoicing", title: "Finales sordas", level: "A2",
    rule: "Las consonantes sonoras b, d y g se ensordecen a final de palabra: Tag se pronuncia «tak», und «unt», Bad «bat». Se escribe d pero suena t: por eso der Tod (muerte) y tot (muerto) suenan igual.",
    words: [
      { w: "der Tag", es: "el día (tak)" },
      { w: "das Bad", es: "el baño (bat)" },
      { w: "der Hund", es: "el perro (hunt)" },
      { w: "und", es: "y (unt)" },
    ],
  },
  {
    id: "de-pr-r", title: "La R alemana", level: "A2",
    rule: "La r estándar es uvular, de garganta, como la r francesa. Y a final de sílaba casi desaparece y se convierte en una a breve: Mutter = «muta», besser = «besa». No la hagas vibrar como la rr española.",
    words: [
      { w: "rot", es: "rojo" },
      { w: "der Bruder", es: "el hermano" },
      { w: "die Mutter", es: "la madre" },
      { w: "besser", es: "mejor" },
    ],
  },
  {
    id: "de-pr-eu", title: "eu / äu", level: "A2",
    rule: "Los diptongos eu y äu suenan exactamente igual: «oi», como en «hoy». Neun = «noin», Häuser = «hóiser». En plural de Haus (Häuser) cambia la vocal pero el oído manda.",
    words: [
      { w: "neun", es: "nueve" },
      { w: "Deutsch", es: "alemán (idioma)" },
      { w: "die Häuser", es: "las casas" },
      { w: "die Freunde", es: "los amigos" },
    ],
  },
  {
    id: "de-pr-komposita", title: "Acento en compuestos", level: "A2",
    rule: "En las palabras compuestas el acento cae SIEMPRE en el primer elemento: SPRACH-schule, BAHN-hof, GEBURTS-tag. Es tu brújula para descifrar palabras larguísimas: encuentra el acento y el resto se desmonta solo.",
    words: [
      { w: "die Sprachschule", es: "la escuela de idiomas" },
      { w: "der Bahnhof", es: "la estación de tren" },
      { w: "das Wochenende", es: "el fin de semana" },
      { w: "der Geburtstag", es: "el cumpleaños" },
    ],
  },
  {
    id: "de-pr-glottal", title: "El golpe de glotis", level: "B1",
    rule: "Ante palabra que empieza por vocal, los alemanes hacen un pequeño corte seco de voz (como una micro pausa): der Adler = «der | Adler», beantworten = «be | antworten». No enlaces las vocales como en francés ni como hacemos en español con «y».",
    words: [
      { w: "der Adler", es: "el águila" },
      { w: "der Arzt", es: "el médico" },
      { w: "die Eisenbahn", es: "el ferrocarril" },
      { w: "beantworten", es: "responder" },
    ],
  },
  {
    id: "de-pr-ig-er", title: "-ig y -er finales", level: "B1",
    rule: "La terminación -ig se pronuncia «ij»: wichtig = «víj-tij». Y la -er final se relaja en una a breve: Mutter = «muta». Son dos finales que delatan al hispanohablante: vigílalas al final de cada frase.",
    words: [
      { w: "wichtig", es: "importante" },
      { w: "fertig", es: "listo / terminado" },
      { w: "die Mutter", es: "la madre" },
      { w: "das Wasser", es: "el agua" },
    ],
  },
];
