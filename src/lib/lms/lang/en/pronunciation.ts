/* ── Pronunciación EN · sonidos del inglés americano ────────────────
   Misma forma que SOUNDS en src/components/lms/views/pronunciation.tsx:
   id, title, rule (en español, con tuteo), 4 palabras {w, es} y level. */

export const EN_PRONUNCIATION: { id: string; title: string; rule: string; words: { w: string; es: string }[]; level: string }[] = [
  {
    id: "en-pr-th-sorda", title: "La TH sorda /θ/", level: "A1",
    rule: "Saca la punta de la lengua un poco entre los dientes y sopla: es una fricativa, ni t ni s. Error típico del hispanohablante: convertir think en «tink» o «sink».",
    words: [
      { w: "think", es: "pensar" }, { w: "three", es: "tres" },
      { w: "birthday", es: "cumpleaños" }, { w: "bath", es: "baño" },
    ],
  },
  {
    id: "en-pr-th-sonora", title: "La TH sonora /ð/", level: "A1",
    rule: "Misma posición de lengua que la th sorda, pero con la garganta vibrando (como una d suave). Aparece en las palabras más frecuentes del idioma: the, this, that.",
    words: [
      { w: "this", es: "esto" }, { w: "that", es: "ese / eso" },
      { w: "mother", es: "madre" }, { w: "weather", es: "tiempo (clima)" },
    ],
  },
  {
    id: "en-pr-sheep-ship", title: "sheep / ship: la i tensa y la laxa", level: "A1",
    rule: "El inglés tiene dos í: la larga /iː/ se pronuncia sonriendo y alargando (sheep), y la corta /ɪ/ es relajada, entre i y e (ship). Si las mezclas, cambiarás el significado: no es lo mismo la playa (beach) que… otra cosa.",
    words: [
      { w: "sheep / ship", es: "oveja / barco" }, { w: "eat / it", es: "comer / ello" },
      { w: "leave / live", es: "dejar / vivir" }, { w: "cheap / chip", es: "barato / patata frita" },
    ],
  },
  {
    id: "en-pr-h", title: "La h aspirada", level: "A1",
    rule: "La h inglesa SIEMPRE suena, con un soplo ligero, a diferencia del español: house, hotel, happy. Las únicas excepciones son hour, honest y heir, donde es muda.",
    words: [
      { w: "house", es: "casa" }, { w: "hotel", es: "hotel" },
      { w: "happy", es: "feliz" }, { w: "behind", es: "detrás" },
    ],
  },
  {
    id: "en-pr-w-v", title: "W /w/ contra V /v/", level: "A1",
    rule: "La w se articula como una u fuerte, con los labios redondeados y sin tocar los dientes; la v roza los dientes superiores con el labio inferior. Para un hispanohablante, water no es «guater» con g ni «bater» con b.",
    words: [
      { w: "water", es: "agua" }, { w: "wine", es: "vino" },
      { w: "very", es: "muy" }, { w: "video", es: "vídeo" },
    ],
  },
  {
    id: "en-pr-schwa", title: "La schwa /ə/, la vocal perezosa", level: "A2",
    rule: "La vocal más frecuente del inglés es un sonido neutro y relajado que ocupa casi todas las sílabas átonas: about suena /abáut/, computer /kompiúter/. Si pronuncias todas las vocales como en español, sonarás a robot.",
    words: [
      { w: "about", es: "aproximadamente" }, { w: "banana", es: "plátano" },
      { w: "computer", es: "ordenador" }, { w: "sofa", es: "sofá" },
    ],
  },
  {
    id: "en-pr-flap-t", title: "La T americana (flap t)", level: "A2",
    rule: "Entre vocales, la t estadounidense se convierte en un golpe suave, casi la r del español de «cara»: water suena «uó-rer» y better «bé-rer». Es LA marca sonora del acento americano (y la buena noticia: ya sabes hacerla).",
    words: [
      { w: "water", es: "agua" }, { w: "better", es: "mejor" },
      { w: "city", es: "ciudad" }, { w: "little", es: "pequeño" },
    ],
  },
  {
    id: "en-pr-ed", title: "Las terminaciones -ed", level: "A2",
    rule: "El pasado -ed tiene tres sonidos: /t/ tras consonante sorda (worked), /d/ tras sonora (played) y /ɪd/ solo tras t o d (needed). Nunca pronuncies la e cuando no toca: worked NO es /wuorkéd/.",
    words: [
      { w: "worked", es: "trabajó" }, { w: "played", es: "jugó" },
      { w: "needed", es: "necesitó" }, { w: "wanted", es: "quiso" },
    ],
  },
  {
    id: "en-pr-silent", title: "Letras mudas", level: "A2",
    rule: "El inglés esconde letras por todas partes: la k de know, la l de listen, la h de hour y la primera d de Wednesday no suenan. Pronunciarlas es la marca del principiante.",
    words: [
      { w: "know", es: "saber" }, { w: "listen", es: "escuchar" },
      { w: "hour", es: "hora" }, { w: "Wednesday", es: "miércoles" },
    ],
  },
  {
    id: "en-pr-s-final", title: "La -s final: /s/, /z/, /ɪz/", level: "A2",
    rule: "La s final tiene tres sonidos: /s/ tras consonante sorda (books), /z/ tras sonora (dogs) y /ɪz/ tras s, z, sh, ch, x (watches). La misma regla rige la tercera persona: he works, he goes, he watches.",
    words: [
      { w: "books", es: "libros" }, { w: "dogs", es: "perros" },
      { w: "watches", es: "relojes" }, { w: "plays", es: "juega" },
    ],
  },
  {
    id: "en-pr-contractions", title: "Contracciones: el inglés real", level: "A1",
    rule: "El americano hablado vive de contracciones: I'm, don't, can't, won't. En EE. UU. can't suena /kænt/ con la vocal de «cat», mientras que can queda casi muda (/kn/): la negación se oye MÁS que la afirmación.",
    words: [
      { w: "I'm", es: "yo soy" }, { w: "don't", es: "no (auxiliar)" },
      { w: "can't", es: "no poder" }, { w: "won't", es: "no querrá" },
    ],
  },
  {
    id: "en-pr-r", title: "La r americana", level: "B1",
    rule: "La r inglesa se dobla hacia atrás sin tocar el paladar (r retrofleja) y jamás vibra como la rr española. En EE. UU. además siempre se pronuncia al final: car, park, teacher. Curva la lengua y piensa en «uu».",
    words: [
      { w: "car", es: "coche" }, { w: "park", es: "parque" },
      { w: "right", es: "derecha / correcto" }, { w: "teacher", es: "profesor" },
    ],
  },
  {
    id: "en-pr-stress", title: "El acento de palabra", level: "B1",
    rule: "El acento tónico cambia el significado: ˈrecord (sustantivo, disco) no es reˈcord (verbo, grabar); ˈpresent (regalo) no es preˈsent (presentar). Marca la sílaba con la voz y comprime las demás con schwa, sin alargar todo por igual.",
    words: [
      { w: "ˈrecord / reˈcord", es: "disco / grabar" }, { w: "ˈpresent / preˈsent", es: "regalo / presentar" },
      { w: "ˈobject / obˈject", es: "objeto / objetar" }, { w: "ˈincrease / inˈcrease", es: "aumento / aumentar" },
    ],
  },
];
