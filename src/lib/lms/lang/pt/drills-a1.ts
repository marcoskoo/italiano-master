import type { GrammarDrill } from "../../extra/grammar-drills";

/* ═══ PT A1 · Drills — 2 por unidad (transformación + corrección) ════
   Trampas del hispanohablante en portugués europeo. Campos `.it` =
   portugués (enunciados y opciones). */

export const PT_DRILLS_A1: Record<string, GrammarDrill> = {
  "pt-cu-a1-01": {
    transform: [
      { q: "Passa para o plural: «Sou estudante.»", options: ["Somos estudantes.", "Somos estudante.", "Sou estudantes."], answer: 0, explain: "nós → somos; plural: estudantes." },
    ],
    errors: [
      { q: "Corrige: «Me chamo Alejandro.» (pt-PT)", options: ["Chamo-me Alejandro.", "Chamo me Alejandro.", "Eu chamo Alejandro."], answer: 0, explain: "En Portugal el pronombre va después del verbo: chamo-ME." },
    ],
  },
  "pt-cu-a1-02": {
    transform: [
      { q: "Troca para «eles»: «Eu tenho um irmão.»", options: ["Eles têm um irmão.", "Eles tem um irmão.", "Eles têm um irmãos."], answer: 0, explain: "3ª plural → têm (com circunflexo)." },
    ],
    errors: [
      { q: "Corrige: «O meu irmã chama-se Valentina.»", options: ["A minha irmã chama-se Valentina.", "O meu irmã chama-se Valentina.", "A minha irmão chama-se Valentina."], answer: 0, explain: "irmã es femenino → a minha." },
    ],
  },
  "pt-cu-a1-03": {
    transform: [
      { q: "Transforma em pergunta: «Levanto-me às sete.»", options: ["A que horas te levantas?", "A que horas te levanto?", "Que horas te levantas?"], answer: 0, explain: "tu → levantas; horas com «às» na resposta, «a que horas» na pergunta." },
    ],
    errors: [
      { q: "Corrige: «Eu tomo sempre o pequeno-almoço.» (ordem)", options: ["Eu sempre tomo o pequeno-almoço.", "Sempre eu tomo o pequeno-almoço.", "Tomo o sempre pequeno-almoço."], answer: 0, explain: "El adverbio va entre sujeto y verbo: eu SEMPRE tomo." },
    ],
  },
  "pt-cu-a1-04": {
    transform: [
      { q: "Faz a pergunta educada: «um galão»", options: ["Queria um galão, por favor.", "Quero um galão agora.", "Dá um galão!"], answer: 0, explain: "queria + por favor = pedir cortés." },
    ],
    errors: [
      { q: "Corrige: «Estou bebendo o café.» (pt-PT)", options: ["Estou a beber o café.", "Estou beber o café.", "Estou a bebendo o café."], answer: 0, explain: "El gerundio de presente es brasileño; en Portugal: estar A + infinitivo." },
    ],
  },
  "pt-cu-a1-05": {
    transform: [
      { q: "Passa para «para mim»: «Eu quero a sopa.»", options: ["Para mim, a sopa.", "Para eu, a sopa.", "Por mim, a sopa."], answer: 0, explain: "Pronombre tónico tras preposición: mim." },
    ],
    errors: [
      { q: "Corrige: «Queria bacalhau.» (con artículo)", options: ["Queria o bacalhau.", "Queria um bacalhaus.", "Queria no bacalhau."], answer: 0, explain: "El objeto directo lleva artículo: O bacalhau." },
    ],
  },
  "pt-cu-a1-06": {
    transform: [
      { q: "Passa para o plural: «Este casaco fica caro.»", options: ["Estes casacos ficam caros.", "Estes casacos fica caros.", "Este casacos ficam caros."], answer: 0, explain: "este→estes, casaco→casacos, fica→ficam." },
    ],
    errors: [
      { q: "Corrige: «Quanto custa estas botas?»", options: ["Quanto custam estas botas?", "Quanto custa esta botas?", "Quanto custam esta botas?"], answer: 0, explain: "botas plural → custam." },
    ],
  },
  "pt-cu-a1-07": {
    transform: [
      { q: "Transforma em indicações: «o miradouro — em frente — à direita — no fim»", options: ["Siga em frente, vire à direita; o miradouro fica no fim.", "Vai em frente e direita no fim.", "Siga em frente e vire a direita no fim da rua."], answer: 0, explain: "Imperativos limpios: siga / vire + à direita (com acento)." },
    ],
    errors: [
      { q: "Corrige: «O café fica ao lado de banco.»", options: ["O café fica ao lado do banco.", "O café fica no lado do banco.", "O café fica ao lado da banco."], answer: 0, explain: "a + o lado DE + o banco = ao lado do banco." },
    ],
  },
  "pt-cu-a1-08": {
    transform: [
      { q: "Transforma em pergunta: «O comboio chega às dez.»", options: ["A que horas chega o comboio?", "A que horas chegam o comboio?", "Que horas o comboio chega?"], answer: 0, explain: "«A que horas…?» é a pergunta dos horários." },
    ],
    errors: [
      { q: "Corrige: «Vou no comboio para o Porto.»", options: ["Vou de comboio para o Porto.", "Vou a comboio para o Porto.", "Vou em comboio ao Porto agora."], answer: 0, explain: "Se viaja DE comboio (también de metro, de autocarro)." },
    ],
  },
  "pt-cu-a1-09": {
    transform: [
      { q: "Faz mais forte: «Gosto de fado.» (mais paixão)", options: ["Adoro fado!", "Gosto muito fado!", "Adoro de fado!"], answer: 0, explain: "adoro (sem «de» quando é direto: adoro fado / adoro ouvir fado)." },
    ],
    errors: [
      { q: "Corrige: «Gosto ouvir música.»", options: ["Gosto de ouvir música.", "Gosto a ouvir música.", "Gosto ouvir de música."], answer: 0, explain: "gostar SIEMPRE lleva de." },
    ],
  },
  "pt-cu-a1-10": {
    transform: [
      { q: "Passa para a pergunta de lugar: «A casa de banho está no corredor.»", options: ["Onde está a casa de banho?", "Onde é a casa de banho?", "Aonde está a casa de banho?"], answer: 0, explain: "Ubicación → onde + estar." },
    ],
    errors: [
      { q: "Corrige: «O apartamento é no terceiro andar.»", options: ["O apartamento está no terceiro andar.", "O apartamento é o terceiro andar.", "O apartamento está o terceiro andar."], answer: 0, explain: "Ubicación temporal/espacial de algo móvil → estar (también para pisos)." },
    ],
  },
  "pt-cu-a1-11": {
    transform: [
      { q: "Troca para feminino: «Meio quilo de queijo» (dúzia de ovos)", options: ["Meia dúzia de ovos", "Meio dúzia de ovos", "Meias dúzia de ovos"], answer: 0, explain: "dúzia fem. → meia." },
    ],
    errors: [
      { q: "Corrige: «Quero dois postas de bacalhau.»", options: ["Quero duas postas de bacalhau.", "Quero dois posta de bacalhau.", "Quero duas posta de bacalhau."], answer: 0, explain: "postas fem. plural → duas." },
    ],
  },
  "pt-cu-a1-12": {
    transform: [
      { q: "Traduz com estrutura portuguesa: «Tengo hambre.»", options: ["Estou com fome.", "Tenho fome.", "Estou fome."], answer: 0, explain: "estar com + sustantivo: a estrutura natural pt-PT." },
    ],
    errors: [
      { q: "Corrige: «Bem-vindo ao Porto!» (para uma viajante)", options: ["Bem-vinda ao Porto!", "Bem-vindos ao Porto!", "Bem-vindas ao Porto!"], answer: 0, explain: "Concuerda com a destinataria: bem-vinda." },
    ],
  },
};
