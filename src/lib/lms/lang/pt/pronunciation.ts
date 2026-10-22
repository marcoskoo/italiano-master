/* ═══ PT · Pronunciación · sonidos del portugués europeo ═════════════
   v9.39 · PARTE 3d. Misma forma que SOUNDS en
   src/components/lms/views/pronunciation.tsx: regla en español (tuteo),
   4 palabras por sonido { w = português de Portugal, es = glosa }.      */

export interface PronSound {
  id: string;
  title: string;                      // título en español
  rule: string;                       // regla para hispanohablantes
  words: { w: string; es: string }[]; // 4 ejemplos en portugués europeo
  level: string;                      // A1–C2
}

export const PT_PRONUNCIATION: PronSound[] = [
  {
    id: "pt-pr-vogais-abertas", title: "Vocales abiertas y cerradas", level: "A2",
    rule: "Los acentos marcan la abertura: é (de «café») es abierta y ê cerrada; á es abierta y â cerrada y redondeada. La diferencia cambia significados: avó (abuela) suena abierta, avô (abuelo) cerrada. Escucha y compara los pares.",
    words: [
      { w: "avó / avô", es: "abuela / abuelo (¡cambia el sentido!)" },
      { w: "café", es: "café (e abierta)" },
      { w: "você", es: "usted (e cerrada)" },
      { w: "esta / está", es: "esta / está (cerrada / abierta)" },
    ],
  },
  {
    id: "pt-pr-vogais-atonas", title: "Vocales átonas: la reducción portuguesa", level: "B1",
    rule: "Las vocales sin acento se relajan: la o final suena como u (Lisboa se oye «Lizbua») y la e final como i (nome se oye «nomi»). Es la marca sonora de Portugal: sílabas tónicas fuertes y átonas casi susurradas.",
    words: [
      { w: "Lisboa", es: "Lisboa (o final → u)" },
      { w: "nome", es: "nombre (e final → i)" },
      { w: "casa", es: "casa (a final relajada)" },
      { w: "televisão", es: "televisión (tô-le-vi-SÃW)" },
    ],
  },
  {
    id: "pt-pr-nasais-ao", title: "Vocales nasales: ão", level: "A1",
    rule: "La tilde nasaliza la vocal y el aire sale por la nariz: pão no lleva n ni m pronunciadas. El diptongo ão se cierra con un eco de u nasal. Si no nasalizas, pão suena a «pao» y nadie entiende «pan».",
    words: [
      { w: "pão", es: "pan" },
      { w: "não", es: "no" },
      { w: "cão", es: "perro" },
      { w: "ações", es: "acciones" },
    ],
  },
  {
    id: "pt-pr-nasais-em", title: "Nasales ãe y -em", level: "A2",
    rule: "Dos nasales más: mãe combina a nasal con un eco de i, y la terminación -em de também o ninguém suena casi «eim». La m final no se pronuncia como consonante: solo nasaliza la vocal.",
    words: [
      { w: "mãe", es: "madre" },
      { w: "também", es: "también" },
      { w: "ninguém", es: "nadie" },
      { w: "bem", es: "bien" },
    ],
  },
  {
    id: "pt-pr-lh", title: "LH = ll", level: "A1",
    rule: "El dígrafo lh suena como la «ll» de «llave» o una «l» seguida de una i suave: trabalho = «trabayu» con la y apenas insinuada. Nunca digas «trabajo» a la española: la l inicial sigue sonando.",
    words: [
      { w: "trabalho", es: "trabajo" },
      { w: "olho", es: "ojo" },
      { w: "filho", es: "hijo" },
      { w: "bilhete", es: "billete" },
    ],
  },
  {
    id: "pt-pr-nh", title: "NH = ñ", level: "A1",
    rule: "Nh es exactamente la ñ española: ninho = niño. Para ti es el sonido más fácil del portugués… y de los más difíciles para el resto del mundo. Aprovéchalo.",
    words: [
      { w: "ninho", es: "nido" },
      { w: "Espanha", es: "España" },
      { w: "amanhã", es: "mañana" },
      { w: "vinho", es: "vino" },
    ],
  },
  {
    id: "pt-pr-ditongos", title: "-ei y -ou: diptongos discretos", level: "A2",
    rule: "En Portugal los diptongos -ei y -ou se monoptongan: sei suena «sé», sou suena «só», dois suena «dóish». Es una gran diferencia con el portugués de Brasil, donde las dos vocales se oyen enteras.",
    words: [
      { w: "sei", es: "sé (saber)" },
      { w: "sou", es: "soy" },
      { w: "dois", es: "dos" },
      { w: "queijo", es: "queso (ei casi é)" },
    ],
  },
  {
    id: "pt-pr-s-z", title: "S sonora entre vocales", level: "A2",
    rule: "Entre vocales la s suena como z suave (como la z de «zapato» en España o la s de «rose» inglesa): casa = «caza», mesa = «meza». Es la misma lógica del «rasgo» sonoro que ya conoces de otras lenguas.",
    words: [
      { w: "casa", es: "casa (s → z)" },
      { w: "mesa", es: "mesa (s → z)" },
      { w: "rosa", es: "rosa (s → z)" },
      { w: "vezes", es: "veces (s → z)" },
    ],
  },
  {
    id: "pt-pr-s-final", title: "S final de sílaba: sh", level: "B1",
    rule: "Al final de sílaba o de palabra, la s se pronuncia «sh» en Portugal: os dois suena «ush dóish», portas suena «portash». Es otro sello del portugués europeo (en Brasil suena como s silbada).",
    words: [
      { w: "os dois", es: "los dos (→ ush dóish)" },
      { w: "os livros", es: "los libros (→ ush lívrush)" },
      { w: "portas", es: "puertas (→ portash)" },
      { w: "boas", es: "buenas (→ boash)" },
    ],
  },
  {
    id: "pt-pr-c-cedilha", title: "Ç y las c suaves", level: "A1",
    rule: "La ç solo aparece ante a/o/u y suena siempre como ss: raça, coração. Antes de e/i la c suena igual sin cedilla: cedo = «sédu». La cedilla existe para conservar el sonido suave ante vocales fuertes.",
    words: [
      { w: "coração", es: "corazón" },
      { w: "raça", es: "raza" },
      { w: "açúcar", es: "azúcar" },
      { w: "cedo", es: "temprano (c = s)" },
    ],
  },
  {
    id: "pt-pr-ch-j", title: "CH = sh, J y G suave = zh", level: "A1",
    rule: "Ch suena siempre «sh» (chave = «shávi»). La j, y la g ante e/i, suenan como la j francesa o la ll argentina «zh» (janela = «zhanéla», gente = «zhente»). Nada de j española fuerte.",
    words: [
      { w: "chave", es: "llave (ch = sh)" },
      { w: "janela", es: "ventana (j = zh)" },
      { w: "gente", es: "gente (g = zh)" },
      { w: "joelho", es: "rodilla (j = zh)" },
    ],
  },
  {
    id: "pt-pr-r", title: "La R portuguesa", level: "B1",
    rule: "La r inicial y la rr son fuertes, a menudo guturales como la j española (rato puede sonar «jato» según la zona); la r simple entre vocales es de un solo golpe, como la de «pero». caro ≠ carro distingue significados igual que en español.",
    words: [
      { w: "rato", es: "ratón (r fuerte)" },
      { w: "caro / carro", es: "caro / coche" },
      { w: "praia", es: "playa (r suave)" },
      { w: "cerveja", es: "cerveza (r suave)" },
    ],
  },
];
