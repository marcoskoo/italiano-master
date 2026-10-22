/* ═══ v9.39 · Conjugador de portugués europeo · PT_CONJUGATOR ════════
   Motor de conjugación de portugués de PORTUGAL con la interfaz
   ConjugatorPack (src/lib/lms/conjugators.ts): 7 tiempos, 6 personas
   (eu · tu · ele/ela · nós · vocês · eles/elas), terminaciones
   -ar/-er/-ir, cambios ortográficos (ç↔c, c→qu, g→gu, c/g/d/v→ç/j)
   e irregulares completos (ser: sou/és/é/somos/são…). «Vocês» comparte
   las formas de 3ª persona del plural; «vós» queda como nota literaria
   y el registro formal es o senhor/a senhora + 3ª persona.          */

import type {
  ConjugatorPack,
  ConjugatorVerb,
  PackForm,
  PackTense,
  PackTenseResult,
} from "../../conjugators"

export type PtTenseId =
  | "presente"
  | "perfeito"
  | "imperfeito"
  | "futuro"
  | "condicional"
  | "conjuntivo"
  | "imperativo"

export const PT_TENSES: PackTense[] = [
  { id: "presente", label: "Presente", hint: "presente de indicativo" },
  { id: "perfeito", label: "Pretérito perfeito simples", hint: "pretérito perfecto simple" },
  { id: "imperfeito", label: "Pretérito imperfeito", hint: "pretérito imperfecto" },
  { id: "futuro", label: "Futuro simples", hint: "futuro simple" },
  { id: "condicional", label: "Condicional", hint: "condicional" },
  { id: "conjuntivo", label: "Presente do conjuntivo", hint: "subjuntivo presente" },
  { id: "imperativo", label: "Imperativo", hint: "imperativo" },
]

export const PT_PRONOUNS: string[] = ["eu", "tu", "ele/ela", "nós", "vocês", "eles/elas"]

type Pattern = "ar" | "er" | "ir"

/** Cambios ortográficos ante la vocal inicial de la desinencia. */
type OrthoFix =
  | "cedilha" // -çar: começo, comecei, comecemos (ç→c ante e/i)
  | "c-hard"  // -car: fiquei, fique, fiquemos (c→qu ante e/i)
  | "g-hard"  // -gar: paguei, pague, paguemos (g→gu ante e/i)
  | "c-soft"  // -cer: conheço, conheça (c→ç ante o/a)
  | "g-soft"  // -ger/-gir: protejo, corrija (g→j ante o/a)
  | "dv-soft" // -dir/-vir: peço, meça, ouça (d/v→ç ante o/a)

/** Fila posicional de formas: los huecos (undefined) caen a la regla regular. */
type OverrideRow = (string | undefined)[]

interface PtVerb {
  infinitive: string
  es: string
  pattern: Pattern
  fix?: OrthoFix
  irregular?: boolean
  infoEs?: string
  overrides?: Partial<Record<PtTenseId, OverrideRow>>
}

/* ── Desinencias regulares (vocês/eles-elas comparten la 3ª del plural) ── */

const ENDINGS: Record<Pattern, Record<"presente" | "perfeito" | "imperfeito" | "conjuntivo", string[]>> = {
  ar: {
    presente: ["o", "as", "a", "amos", "am", "am"],
    perfeito: ["ei", "aste", "ou", "ámos", "aram", "aram"],
    imperfeito: ["ava", "avas", "ava", "ávamos", "avam", "avam"],
    conjuntivo: ["e", "es", "e", "emos", "em", "em"],
  },
  er: {
    presente: ["o", "es", "e", "emos", "em", "em"],
    perfeito: ["i", "este", "eu", "emos", "eram", "eram"],
    imperfeito: ["ia", "ias", "ia", "íamos", "iam", "iam"],
    conjuntivo: ["a", "as", "a", "amos", "am", "am"],
  },
  ir: {
    presente: ["o", "es", "e", "imos", "em", "em"],
    perfeito: ["i", "iste", "iu", "imos", "iram", "iram"],
    imperfeito: ["ia", "ias", "ia", "íamos", "iam", "iam"],
    conjuntivo: ["a", "as", "a", "amos", "am", "am"],
  },
}

/* Futuro y condicional se construyen sobre el infinitivo completo. */
const FUTURO: string[] = ["ei", "ás", "á", "emos", "ão", "ão"]
const CONDICIONAL: string[] = ["ia", "ias", "ia", "íamos", "iam", "iam"]

/** Une raíz + desinencia aplicando el cambio ortográfico del verbo. */
function joinStem(base: string, ending: string, fix?: OrthoFix): string {
  const raw = base + ending
  if (!fix) return raw
  const c = ending[0]
  const anteEI = c === "e" || c === "i"
  const anteOA = c === "o" || c === "a"
  if (anteEI && fix === "cedilha") return base.slice(0, -1) + "c" + ending
  if (anteEI && fix === "c-hard") return base.slice(0, -1) + "qu" + ending
  if (anteEI && fix === "g-hard") return base.slice(0, -1) + "gu" + ending
  if (anteOA && fix === "c-soft") return base.slice(0, -1) + "ç" + ending
  if (anteOA && fix === "g-soft") return base.slice(0, -1) + "j" + ending
  if (anteOA && fix === "dv-soft") return base.slice(0, -1) + "ç" + ending
  return raw
}

/* ── Verbos: irregulares completos, semirregulares, ortográficos y regulares ── */

const VERBS: PtVerb[] = [
  /* Irregulares completos */
  {
    infinitive: "ser", es: "ser/estar", pattern: "er", irregular: true,
    infoEs: "irregular total · identidad, origen, hora («são três horas») · «vós sois» sobrevive en Portugal como forma literaria; el curso usa vocês → são · participio sido",
    overrides: {
      presente: ["sou", "és", "é", "somos", "são", "são"],
      perfeito: ["fui", "foste", "foi", "fomos", "foram", "foram"],
      imperfeito: ["era", "eras", "era", "éramos", "eram", "eram"],
      conjuntivo: ["seja", "sejas", "seja", "sejamos", "sejam", "sejam"],
      imperativo: ["—", "sê!", "seja!", "sejamos!", "sejam!", "sejam!"],
    },
  },
  {
    infinitive: "estar", es: "estar", pattern: "ar", irregular: true,
    infoEs: "irregular · estado y ubicación · progresivo de Portugal: «estou a comer» = estoy comiendo · participio estado",
    overrides: {
      presente: ["estou", "estás", "está", "estamos", "estão", "estão"],
      perfeito: ["estive", "estiveste", "esteve", "estivemos", "estiveram", "estiveram"],
      conjuntivo: ["esteja", "estejas", "esteja", "estejamos", "estejam", "estejam"],
      imperativo: ["—", "está!", "esteja!", "estejamos!", "estejam!", "estejam!"],
    },
  },
  {
    infinitive: "ter", es: "tener/haber", pattern: "er", irregular: true,
    infoEs: "irregular · auxiliar de los compuestos (ter + participio) · «tenho de» = tengo que · eles têm con acento circunflejo · participio tido",
    overrides: {
      presente: ["tenho", "tens", "tem", "temos", "têm", "têm"],
      perfeito: ["tive", "tiveste", "teve", "tivemos", "tiveram", "tiveram"],
      imperfeito: ["tinha", "tinhas", "tinha", "tínhamos", "tinham", "tinham"],
      conjuntivo: ["tenha", "tenhas", "tenha", "tenhamos", "tenham", "tenham"],
      imperativo: ["—", "tem!", "tenha!", "tenhamos!", "tenham!", "tenham!"],
    },
  },
  {
    infinitive: "ir", es: "ir", pattern: "ir", irregular: true,
    infoEs: "irregular · futuro próximo sin preposición: «vou falar» = voy a hablar · perfeito igual a ser (fui, foste…) · participio ido",
    overrides: {
      presente: ["vou", "vais", "vai", "vamos", "vão", "vão"],
      perfeito: ["fui", "foste", "foi", "fomos", "foram", "foram"],
      imperfeito: ["ia", "ias", "ia", "íamos", "iam", "iam"],
      conjuntivo: ["vá", "vás", "vá", "vamos", "vão", "vão"],
      imperativo: ["—", "vai!", "vá!", "vamos!", "vão!", "vão!"],
    },
  },
  {
    infinitive: "fazer", es: "hacer", pattern: "er", irregular: true,
    infoEs: "irregular · 1ª persona faço (ç) · futuro y condicional con raíz far- (farei, faria) · «faz tempo» = hace tiempo · participio feito",
    overrides: {
      presente: ["faço", "fazes", "faz", "fazemos", "fazem", "fazem"],
      perfeito: ["fiz", "fizeste", "fez", "fizemos", "fizeram", "fizeram"],
      conjuntivo: ["faça", "faças", "faça", "façamos", "façam", "façam"],
      imperativo: ["—", "faz!", "faça!", "façamos!", "façam!", "façam!"],
      futuro: ["farei", "farás", "fará", "faremos", "farão", "farão"],
      condicional: ["faria", "farias", "faria", "faríamos", "fariam", "fariam"],
    },
  },
  {
    infinitive: "poder", es: "poder", pattern: "er", irregular: true,
    infoEs: "irregular · perfeito pude/pôde (3ª persona con circunflejo) · condicional de cortesía: «poderia dizer-me…?»",
    overrides: {
      presente: ["posso", "podes", "pode", "podemos", "podem", "podem"],
      perfeito: ["pude", "pudeste", "pôde", "pudemos", "puderam", "puderam"],
      conjuntivo: ["possa", "possas", "possa", "possamos", "possam", "possam"],
      imperativo: ["—", "pode!", "possa!", "possamos!", "possam!", "possam!"],
    },
  },
  {
    infinitive: "querer", es: "querer", pattern: "er", irregular: true,
    infoEs: "irregular · perfeito quis- · imperativo de cortesía muy usado: «queira sentar-se» · participio querido",
    overrides: {
      presente: ["quero", "queres", "quer", "queremos", "querem", "querem"],
      perfeito: ["quis", "quiseste", "quis", "quisemos", "quiseram", "quiseram"],
      conjuntivo: ["queira", "queiras", "queira", "queiramos", "queiram", "queiram"],
      imperativo: ["—", "quer!", "queira!", "queiramos!", "queiram!", "queiram!"],
    },
  },
  {
    infinitive: "dizer", es: "decir", pattern: "er", irregular: true,
    infoEs: "irregular · raíz dig- en conjuntivo · futuro/condicional con raíz dir- (direi, diria) · participio dito",
    overrides: {
      presente: ["digo", "dizes", "diz", "dizemos", "dizem", "dizem"],
      perfeito: ["disse", "disseste", "disse", "dissemos", "disseram", "disseram"],
      conjuntivo: ["diga", "digas", "diga", "digamos", "digam", "digam"],
      imperativo: ["—", "diz!", "diga!", "digamos!", "digam!", "digam!"],
      futuro: ["direi", "dirás", "dirá", "diremos", "dirão", "dirão"],
      condicional: ["diria", "dirias", "diria", "diríamos", "diriam", "diriam"],
    },
  },
  {
    infinitive: "ver", es: "ver", pattern: "er", irregular: true,
    infoEs: "irregular · tu vê con circunflejo, eles veem sin él (≠ vir: vêm) · futuro/condicional regulares (verei, veria) · participio visto",
    overrides: {
      presente: ["vejo", "vês", "vê", "vemos", "veem", "veem"],
      perfeito: ["vi", "viste", "viu", "vimos", "viram", "viram"],
      imperfeito: ["via", "vias", "via", "víamos", "viam", "viam"],
      conjuntivo: ["veja", "vejas", "veja", "vejamos", "vejam", "vejam"],
      imperativo: ["—", "vê!", "veja!", "vejamos!", "vejam!", "vejam!"],
    },
  },
  {
    infinitive: "vir", es: "venir", pattern: "ir", irregular: true,
    infoEs: "irregular · venho, eles vêm con circunflejo (≠ ver: veem) · «vir a ser» = llegar a ser · participio vindo",
    overrides: {
      presente: ["venho", "vens", "vem", "vimos", "vêm", "vêm"],
      perfeito: ["vim", "vieste", "veio", "viemos", "vieram", "vieram"],
      imperfeito: ["vinha", "vinhas", "vinha", "vínhamos", "vinham", "vinham"],
      conjuntivo: ["venha", "venhas", "venha", "venhamos", "venham", "venham"],
      imperativo: ["—", "vem!", "venha!", "venhamos!", "venham!", "venham!"],
    },
  },
  {
    infinitive: "dar", es: "dar", pattern: "ar", irregular: true,
    infoEs: "irregular · dou, dás, dá · conjuntivo dê/dês/deem con acento · «dar-se bem» = llevarse bien · participio dado",
    overrides: {
      presente: ["dou", "dás", "dá", "damos", "dão", "dão"],
      perfeito: ["dei", "deste", "deu", "demos", "deram", "deram"],
      conjuntivo: ["dê", "dês", "dê", "demos", "deem", "deem"],
      imperativo: ["—", "dá!", "dê!", "demos!", "deem!", "deem!"],
    },
  },
  {
    infinitive: "saber", es: "saber", pattern: "er", irregular: true,
    infoEs: "irregular · sei · perfeito soube- · futuro regular (saberei, no «sabré») · «sei lá» = ni idea",
    overrides: {
      presente: ["sei", "sabes", "sabe", "sabemos", "sabem", "sabem"],
      perfeito: ["soube", "soubeste", "soube", "soubemos", "souberam", "souberam"],
      conjuntivo: ["saiba", "saibas", "saiba", "saibamos", "saibam", "saibam"],
      imperativo: ["—", "sabe!", "saiba!", "saibamos!", "saibam!", "saibam!"],
    },
  },
  {
    infinitive: "pôr", es: "poner", pattern: "er", irregular: true,
    infoEs: "irregular · futuro/condicional por- (porei, poria) · «pôr a mesa» = poner la mesa · participio posto",
    overrides: {
      presente: ["ponho", "pões", "põe", "pomos", "põem", "põem"],
      perfeito: ["pus", "puseste", "pôs", "pusemos", "puseram", "puseram"],
      imperfeito: ["punha", "punhas", "punha", "púnhamos", "punham", "punham"],
      conjuntivo: ["ponha", "ponhas", "ponha", "ponhamos", "ponham", "ponham"],
      imperativo: ["—", "põe!", "ponha!", "ponhamos!", "ponham!", "ponham!"],
      futuro: ["porei", "porás", "porá", "poremos", "porão", "porão"],
      condicional: ["poria", "porias", "poria", "poríamos", "poriam", "poriam"],
    },
  },
  {
    infinitive: "trazer", es: "traer", pattern: "er", irregular: true,
    infoEs: "irregular · trago · perfeito trouxe- · futuro/condicional trar- (trarei, traria) · participio trazido",
    overrides: {
      presente: ["trago", "trazes", "traz", "trazemos", "trazem", "trazem"],
      perfeito: ["trouxe", "trouxeste", "trouxe", "trouxemos", "trouxeram", "trouxeram"],
      conjuntivo: ["traga", "tragas", "traga", "tragamos", "tragam", "tragam"],
      imperativo: ["—", "traz!", "traga!", "tragamos!", "tragam!", "tragam!"],
      futuro: ["trarei", "trarás", "trará", "traremos", "trarão", "trarão"],
      condicional: ["traria", "trarias", "traria", "traríamos", "trariam", "trariam"],
    },
  },
  {
    infinitive: "ler", es: "leer", pattern: "er", irregular: true,
    infoEs: "irregular · leio, lê, leem · imperfeito lia (nós líamos) · «ler um livro» = leer un libro · participio lido",
    overrides: {
      presente: ["leio", "lês", "lê", "lemos", "leem", "leem"],
      perfeito: ["li", "leste", "leu", "lemos", "leram", "leram"],
      imperfeito: ["lia", "lias", "lia", "líamos", "liam", "liam"],
      conjuntivo: ["leia", "leias", "leia", "leiamos", "leiam", "leiam"],
      imperativo: ["—", "lê!", "leia!", "leiamos!", "leiam!", "leiam!"],
    },
  },
  {
    infinitive: "haver", es: "haber", pattern: "er", irregular: true,
    infoEs: "casi siempre impersonal: «há» = hay, «há dois anos» = hace dos años · perfeito houve · futuro haverá · sin imperativo",
    overrides: {
      presente: ["hei", "hás", "há", "havemos", "hão", "hão"],
      perfeito: ["houve", "houveste", "houve", "houvemos", "houveram", "houveram"],
      conjuntivo: ["haja", "hajas", "haja", "hajamos", "hajam", "hajam"],
      imperativo: ["—", "—", "—", "—", "—", "—"],
    },
  },

  /* Semirregulares (solo algunas personas) */
  {
    infinitive: "dormir", es: "dormir", pattern: "ir", irregular: true,
    infoEs: "solo la 1ª persona es irregular: durmo (u tónica) · conjuntivo durma, durmamos · participio dormido",
    overrides: {
      presente: ["durmo"],
      conjuntivo: ["durma", "durmas", "durma", "durmamos", "durmam", "durmam"],
      imperativo: ["—", "dorme!", "durma!", "durmamos!", "durmam!", "durmam!"],
    },
  },
  {
    infinitive: "sentir", es: "sentir", pattern: "ir", irregular: true,
    infoEs: "1ª persona sinto (i tónica) · conjuntivo sinta, sintamos · «sinto muito» = lo siento mucho",
    overrides: {
      presente: ["sinto"],
      conjuntivo: ["sinta", "sintas", "sinta", "sintamos", "sintam", "sintam"],
      imperativo: ["—", "sente!", "sinta!", "sintamos!", "sintam!", "sintam!"],
    },
  },
  {
    infinitive: "preferir", es: "preferir", pattern: "ir", irregular: true,
    infoEs: "1ª persona prefiro (i tónica) · conjuntivo prefira, prefiramos",
    overrides: {
      presente: ["prefiro"],
      conjuntivo: ["prefira", "prefiras", "prefira", "prefiramos", "prefiram", "prefiram"],
      imperativo: ["—", "prefere!", "prefira!", "prefiramos!", "prefiram!", "prefiram!"],
    },
  },
  {
    infinitive: "fugir", es: "huir", pattern: "ir", irregular: true,
    infoEs: "presente fujo, foges, foge (o tónica en 1-3) · conjuntivo fuja, fujamos · «fugir de casa» = huir de casa",
    overrides: {
      presente: ["fujo", "foges", "foge", "fugimos", "fogem", "fogem"],
      conjuntivo: ["fuja", "fujas", "fuja", "fujamos", "fujam", "fujam"],
      imperativo: ["—", "foge!", "fuja!", "fujamos!", "fujam!", "fujam!"],
    },
  },
  {
    infinitive: "cair", es: "caer", pattern: "ir", irregular: true,
    infoEs: "acentos de hiato: caio, caímos, caí, caía · conjuntivo caia (sin acento) · «cair em si» = volver en sí",
    overrides: {
      presente: ["caio", "cais", "cai", "caímos", "caem", "caem"],
      perfeito: ["caí", "caíste", "caiu", "caímos", "caíram", "caíram"],
      imperfeito: ["caía", "caías", "caía", "caíamos", "caíam", "caíam"],
      conjuntivo: ["caia", "caias", "caia", "caiamos", "caiam", "caiam"],
      imperativo: ["—", "cai!", "caia!", "caiamos!", "caiam!", "caiam!"],
    },
  },
  {
    infinitive: "sair", es: "salir", pattern: "ir", irregular: true,
    infoEs: "acentos de hiato: saio, saímos, saí, saía · conjuntivo saia · «sair de casa» = salir de casa",
    overrides: {
      presente: ["saio", "sais", "sai", "saímos", "saem", "saem"],
      perfeito: ["saí", "saíste", "saiu", "saímos", "saíram", "saíram"],
      imperfeito: ["saía", "saías", "saía", "saíamos", "saíam", "saíam"],
      conjuntivo: ["saia", "saias", "saia", "saiamos", "saiam", "saiam"],
      imperativo: ["—", "sai!", "saia!", "saiamos!", "saiam!", "saiam!"],
    },
  },
  {
    infinitive: "seguir", es: "seguir", pattern: "ir", irregular: true,
    infoEs: "e→i en la sílaba tónica, como el español: sigo, siga (tu segues, ele segue) · «seguir em frente» = seguir adelante",
    overrides: {
      presente: ["sigo"],
      conjuntivo: ["siga", "sigas", "siga", "sigamos", "sigam", "sigam"],
      imperativo: ["—", "segue!", "siga!", "sigamos!", "sigam!", "sigam!"],
    },
  },
  {
    infinitive: "subir", es: "subir", pattern: "ir", irregular: true,
    infoEs: "o tónica en 2.ª/3.ª persona: subo, sobes, sobe · conjuntivo suba · «subir as escadas» = subir las escaleras",
    overrides: {
      presente: ["subo", "sobes", "sobe", "subimos", "sobem", "sobem"],
      conjuntivo: ["suba", "subas", "suba", "subamos", "subam", "subam"],
      imperativo: ["—", "sobe!", "suba!", "subamos!", "subam!", "subam!"],
    },
  },

  /* Irregulares con cambio consonántico d/v→ç */
  { infinitive: "pedir", es: "pedir", pattern: "ir", fix: "dv-soft", irregular: true,
    infoEs: "d→ç ante o/a: peço, peça (lo demás regular: pedi, pedia, pede) · «pedir desculpa» = pedir perdón · participio pedido" },
  { infinitive: "ouvir", es: "oír/escuchar", pattern: "ir", fix: "dv-soft", irregular: true,
    infoEs: "v→ç ante o/a: ouço, ouça · tu ouves, ele ouve · «ouvir música» = escuchar música · participio ouvido" },
  { infinitive: "medir", es: "medir", pattern: "ir", fix: "dv-soft", irregular: true,
    infoEs: "d→ç ante o/a: meço, meça · «medir as palavras» = medir las palabras" },

  /* Regulares con cambio ortográfico */
  { infinitive: "corrigir", es: "corregir", pattern: "ir", fix: "g-soft",
    infoEs: "g→j ante o/a: corrijo, corrija · perfeito regular (corrigi, corrigiste)" },
  { infinitive: "proteger", es: "proteger", pattern: "er", fix: "g-soft",
    infoEs: "g→j ante o/a: protejo, proteja · «proteger o ambiente» = proteger el medio ambiente" },
  { infinitive: "começar", es: "empezar", pattern: "ar", fix: "cedilha",
    infoEs: "ç↔c: começo, comecei, comecemos · «começar a + infinitivo» = empezar a" },
  { infinitive: "almoçar", es: "almorzar", pattern: "ar", fix: "cedilha",
    infoEs: "ç↔c: almoço, almocei, almocemos · o almoço = el almuerzo" },
  { infinitive: "dançar", es: "bailar", pattern: "ar", fix: "cedilha",
    infoEs: "ç↔c: danço, dancei, dancemos · a dança = el baile" },
  { infinitive: "chegar", es: "llegar", pattern: "ar", fix: "g-hard",
    infoEs: "g→gu ante e/i: cheguei, chegue, cheguemos · «chegar a casa» = llegar a casa" },
  { infinitive: "pagar", es: "pagar", pattern: "ar", fix: "g-hard",
    infoEs: "g→gu ante e/i: paguei, pague, paguemos · «pagar com cartão» = pagar con tarjeta" },
  { infinitive: "ligar", es: "llamar/encender", pattern: "ar", fix: "g-hard",
    infoEs: "g→gu ante e/i: liguei, ligue, liguemos · PE: «ligar a alguém» = llamar a alguien; «ligar a luz» = encender la luz" },
  { infinitive: "jogar", es: "jugar", pattern: "ar", fix: "g-hard",
    infoEs: "g→gu ante e/i: joguei, jogue, joguemos · «jogar futebol» = jugar al fútbol" },
  { infinitive: "entregar", es: "entregar", pattern: "ar", fix: "g-hard",
    infoEs: "g→gu ante e/i: entreguei, entregue, entreguemos · «entregar um trabalho» = entregar un trabajo" },
  { infinitive: "apagar", es: "apagar", pattern: "ar", fix: "g-hard",
    infoEs: "g→gu ante e/i: apaguei, apague, apaguemos · «apagar a luz» = apagar la luz" },
  { infinitive: "ficar", es: "quedarse", pattern: "ar", fix: "c-hard",
    infoEs: "c→qu ante e/i: fiquei, fique, fiquemos · PE: «ficar em casa» = quedarse en casa" },
  { infinitive: "tocar", es: "tocar", pattern: "ar", fix: "c-hard",
    infoEs: "c→qu ante e/i: toquei, toque, toquemos · «tocar piano» = tocar el piano" },
  { infinitive: "conhecer", es: "conocer", pattern: "er", fix: "c-soft",
    infoEs: "c→ç ante o/a: conheço, conheça, conheçamos · participio conhecido" },
  { infinitive: "parecer", es: "parecer", pattern: "er", fix: "c-soft",
    infoEs: "c→ç ante o/a: pareço, pareça · «parece-me bem» = me parece bien" },
  { infinitive: "oferecer", es: "ofrecer", pattern: "er", fix: "c-soft",
    infoEs: "c→ç ante o/a: ofereço, ofereça, ofereçamos · «oferecer um café» = ofrecer un café" },
  { infinitive: "esquecer", es: "olvidar", pattern: "er", fix: "c-soft",
    infoEs: "c→ç ante o/a: esqueço, esqueça · «esquecer-se de» = olvidarse de" },
  { infinitive: "acontecer", es: "ocurrir/suceder", pattern: "er", fix: "c-soft",
    infoEs: "c→ç ante o/a: aconteça · casi siempre con sujeto indefinido: «aconteceu um acidente»" },

  /* Regulares -ar */
  { infinitive: "falar", es: "hablar", pattern: "ar",
    infoEs: "«falar com» = hablar con; «falar português» = hablar portugués" },
  { infinitive: "trabalhar", es: "trabajar", pattern: "ar" },
  { infinitive: "estudar", es: "estudar", pattern: "ar" },
  { infinitive: "comprar", es: "comprar", pattern: "ar" },
  { infinitive: "cozinhar", es: "cocinar", pattern: "ar" },
  { infinitive: "descansar", es: "descansar", pattern: "ar" },
  { infinitive: "deixar", es: "dejar", pattern: "ar",
    infoEs: "«deixar de fumar» = dejar de fumar; «deixar a chave» = dejar la llave" },
  { infinitive: "entrar", es: "entrar", pattern: "ar",
    infoEs: "«entrar em» = entrar en" },
  { infinitive: "esperar", es: "esperar", pattern: "ar" },
  { infinitive: "escutar", es: "escuchar", pattern: "ar" },
  { infinitive: "ajudar", es: "ayudar", pattern: "ar",
    infoEs: "«ajudar a alguém» = ayudar a alguien" },
  { infinitive: "jantar", es: "cenar", pattern: "ar",
    infoEs: "PE: jantar = cenar; o jantar = la cena" },
  { infinitive: "viajar", es: "viajar", pattern: "ar" },
  { infinitive: "morar", es: "vivir (residir)", pattern: "ar",
    infoEs: "«morar em Lisboa» = vivir en Lisboa" },
  { infinitive: "precisar", es: "necesitar", pattern: "ar",
    infoEs: "«precisar de» = necesitar (siempre con de)" },
  { infinitive: "tomar", es: "tomar", pattern: "ar",
    infoEs: "«tomar o pequeno-almoço» = desayunar" },
  { infinitive: "visitar", es: "visitar", pattern: "ar" },
  { infinitive: "cantar", es: "cantar", pattern: "ar" },
  { infinitive: "mostrar", es: "mostrar", pattern: "ar" },
  { infinitive: "passar", es: "pasar", pattern: "ar",
    infoEs: "«passar férias» = pasar vacaciones" },
  { infinitive: "guardar", es: "guardar", pattern: "ar" },
  { infinitive: "gostar", es: "gustar", pattern: "ar",
    infoEs: "«gostar de» = gustar (siempre con de): «gosto de música»" },
  { infinitive: "fechar", es: "cerrar", pattern: "ar" },
  { infinitive: "contar", es: "contar", pattern: "ar" },
  { infinitive: "andar", es: "andar", pattern: "ar",
    infoEs: "«andar de bicicleta» = ir en bicicleta" },
  { infinitive: "partilhar", es: "compartir", pattern: "ar" },

  /* Regulares -er */
  { infinitive: "comer", es: "comer", pattern: "er" },
  { infinitive: "beber", es: "beber", pattern: "er" },
  { infinitive: "aprender", es: "aprender", pattern: "er",
    infoEs: "«aprender a + infinitivo» = aprender a" },
  { infinitive: "vender", es: "vender", pattern: "er" },
  { infinitive: "viver", es: "vivir", pattern: "er" },
  { infinitive: "receber", es: "recibir", pattern: "er",
    infoEs: "≠ español «recoger»: «receber um presente» = recibir un regalo" },
  { infinitive: "responder", es: "responder", pattern: "er" },
  { infinitive: "entender", es: "entender", pattern: "er",
    infoEs: "«não entendo» = no entiendo" },
  { infinitive: "correr", es: "correr", pattern: "er" },
  { infinitive: "escrever", es: "escribir", pattern: "er", irregular: true,
    infoEs: "formas regulares (escrevo, escrevi, escrevia); participio irregular: escrito" },
  { infinitive: "dever", es: "deber", pattern: "er",
    infoEs: "«devo ir» = debo ir; también para obligación suave" },
  { infinitive: "sofrer", es: "sufrir", pattern: "er" },
  { infinitive: "prometer", es: "prometer", pattern: "er" },

  /* Regulares -ir */
  { infinitive: "abrir", es: "abrir", pattern: "ir", irregular: true,
    infoEs: "formas regulares (abro, abri, abria); participio irregular: aberto" },
  { infinitive: "partir", es: "partir", pattern: "ir",
    infoEs: "«partir para o Porto» = partir para Oporto" },
  { infinitive: "subir", es: "subir", pattern: "ir" },
  { infinitive: "existir", es: "existir", pattern: "ir" },
  { infinitive: "permitir", es: "permitir", pattern: "ir" },
  { infinitive: "decidir", es: "decidir", pattern: "ir" },
  { infinitive: "discutir", es: "discutir/debatir", pattern: "ir" },
  { infinitive: "assistir", es: "asistir (a)", pattern: "ir",
    infoEs: "«assistir a um filme» = ver una película (siempre con a)" },
  { infinitive: "insistir", es: "insistir", pattern: "ir" },
  { infinitive: "dividir", es: "dividir", pattern: "ir" },
  { infinitive: "unir", es: "unir", pattern: "ir" },
]

/* ── Etiquetas e info en español ── */

function labelOf(v: PtVerb): string {
  if (v.irregular) return "irregular"
  if (v.fix) return `-${v.pattern} con cambio ortográfico`
  return `-${v.pattern} regular`
}

function participleOf(v: PtVerb): string {
  const base = v.infinitive.slice(0, -2)
  return v.pattern === "ar" ? base + "ado" : base + "ido"
}

function infoOf(v: PtVerb): string {
  if (v.infoEs) return v.infoEs
  return `verbo regular · auxiliar ter · participio ${participleOf(v)}`
}

/* ── Motor ── */

export function conjugatePt(v: PtVerb, tense: PtTenseId): PackTenseResult {
  const base = v.infinitive.slice(0, -2)
  const forms = PT_PRONOUNS.map((pronoun, i): PackForm => {
    const shown = tense === "conjuntivo" ? `que ${pronoun}` : pronoun
    const ov = v.overrides?.[tense]?.[i]
    if (ov) return { pronoun: shown, form: ov, irregular: ov !== "—" }

    if (tense === "futuro") {
      return { pronoun, form: v.infinitive + FUTURO[i], irregular: false }
    }
    if (tense === "condicional") {
      return { pronoun, form: v.infinitive + CONDICIONAL[i], irregular: false }
    }
    if (tense === "imperativo") {
      if (i === 0) return { pronoun, form: "—", irregular: false }
      // tu: 3ª persona del presente (fala/come/parte); o senhor/nós/vocês: conjuntivo
      const ending = i === 1 ? (v.pattern === "ar" ? "a" : "e") : ENDINGS[v.pattern].conjuntivo[i]
      const form = joinStem(base, ending, v.fix)
      return { pronoun, form: `${form}!`, irregular: form !== base + ending }
    }
    const ending = ENDINGS[v.pattern][tense][i]
    const form = joinStem(base, ending, v.fix)
    return { pronoun: shown, form, irregular: form !== base + ending }
  })
  return { tense, forms }
}

function deaccent(s: string): string {
  return s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")
}

export function findPtVerb(infinitive: string): PtVerb | undefined {
  const q = deaccent(infinitive).trim()
  return VERBS.find((v) => deaccent(v.infinitive) === q)
}

export function searchPtVerbs(query: string, limit = 8): PtVerb[] {
  const q = query.trim().toLowerCase()
  if (!q) return VERBS.slice(0, limit)
  return VERBS.filter(
    (v) => deaccent(v.infinitive).startsWith(deaccent(q)) || v.es.toLowerCase().includes(q),
  ).slice(0, limit)
}

function toPackVerb(v: PtVerb): ConjugatorVerb {
  return { infinitive: v.infinitive, es: v.es, patternLabel: labelOf(v), infoEs: infoOf(v) }
}

const TENSE_IDS = new Set<string>(PT_TENSES.map((t) => t.id))

export const PT_CONJUGATOR: ConjugatorPack = {
  code: "pt",
  tenses: PT_TENSES,
  pronouns: PT_PRONOUNS,
  popular: ["ser", "estar", "ter", "ir", "fazer", "poder", "querer", "dizer", "ver", "vir"],
  verbs: VERBS.map(toPackVerb),
  findVerb(infinitive: string) {
    const v = findPtVerb(infinitive)
    return v ? toPackVerb(v) : undefined
  },
  searchVerbs(query: string, limit = 8) {
    return searchPtVerbs(query, limit).map(toPackVerb)
  },
  conjugate(verb: ConjugatorVerb, tenseId: string) {
    const v = findPtVerb(verb.infinitive)
    if (!v || !TENSE_IDS.has(tenseId)) return { tense: tenseId, forms: [] }
    return conjugatePt(v, tenseId as PtTenseId)
  },
  formalNote(verb: ConjugatorVerb, tenseId: string) {
    const v = findPtVerb(verb.infinitive)
    const res = v && TENSE_IDS.has(tenseId) ? conjugatePt(v, tenseId as PtTenseId) : undefined
    const form = res?.forms[2]?.form.replace(/!/g, "") ?? ""
    const head = "Para el registro formal usa **o senhor / a senhora** con las formas de 3ª persona"
    if (!form || form === "—") {
      return `${head}. ${verb.infinitive} no se usa en imperativo. «Vocês» (plural neutro) lleva las mismas formas que eles/elas.`
    }
    const lead = tenseId === "conjuntivo" ? "que o senhor" : "o senhor"
    return `${head}: ele/ela → **${form}** («${lead} ${form}»). En Portugal «você» suena cercano y se evita al principio; «vocês» (plural) es neutro y lleva las mismas formas que eles/elas.`
  },
}
