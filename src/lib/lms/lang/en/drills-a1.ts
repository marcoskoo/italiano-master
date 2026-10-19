import type { GrammarDrill } from "../../extra/grammar-drills";

/* ═══ EN A1 · Drills — 2 por unidad (transformación + corrección) ════
   Trampas del hispanohablante en inglés americano. Campos `.it` =
   inglés (enunciados y opciones). */

export const EN_DRILLS_A1: Record<string, GrammarDrill> = {
  "en-cu-a1-01": {
    transform: [
      { q: "Rewrite in the plural: «I'm a student.»", options: ["We're students.", "We is student.", "We're student."], answer: 0, explain: "we → are (we're); plural: students." },
    ],
    errors: [
      { q: "Fix it: «She are from Chicago.»", options: ["She's from Chicago.", "She am from Chicago.", "She from Chicago."], answer: 0, explain: "she → is (she's); el sujeto nunca se omite." },
    ],
  },
  "en-cu-a1-02": {
    transform: [
      { q: "Rewrite with «they»: «He has one brother.»", options: ["They have one brother.", "They has one brother.", "They having one brother."], answer: 0, explain: "they → have (sin -s)." },
    ],
    errors: [
      { q: "Fix it: «This is my sister. His name is Lucía.»", options: ["…Her name is Lucía.", "…Its name is Lucía.", "…She name is Lucía."], answer: 0, explain: "La hermana es mujer → her (género del poseedor)." },
    ],
  },
  "en-cu-a1-03": {
    transform: [
      { q: "Rewrite as a question: «I get up at 6:30.»", options: ["Do you get up at 6:30?", "Are you get up at 6:30?", "You get up at 6:30?"], answer: 0, explain: "Presente simple → do + base." },
    ],
    errors: [
      { q: "Fix it: «I no have breakfast at home.»", options: ["I don't have breakfast at home.", "I no have breakfast in home.", "I am not have breakfast."], answer: 0, explain: "Negativa: don't + verbo." },
    ],
  },
  "en-cu-a1-04": {
    transform: [
      { q: "Make it polite: «Give me a coffee.»", options: ["I'd like a coffee, please.", "I want a coffee now.", "Coffee me, please."], answer: 0, explain: "I'd like + please = cortés estándar." },
    ],
    errors: [
      { q: "Fix it: «I'd like an large coffee.»", options: ["I'd like a large coffee.", "I'd like the large coffee please now.", "I'd like large coffee."], answer: 0, explain: "large suena consonante → a; artículo obligatorio." },
    ],
  },
  "en-cu-a1-05": {
    transform: [
      { q: "Rewrite with «we»: «Can I get the check?»", options: ["Could we get the check, please?", "Could we gets the check?", "Could we getting the check?"], answer: 0, explain: "could + base (get) para todos." },
    ],
    errors: [
      { q: "Fix it: «I don't want some onions.»", options: ["I don't want any onions.", "I don't want no onions.", "I not want some onions."], answer: 0, explain: "Negativa → any." },
    ],
  },
  "en-cu-a1-06": {
    transform: [
      { q: "Change to plural: «This shirt is tight.»", options: ["These shirts are tight.", "These shirts is tight.", "This shirts are tight."], answer: 0, explain: "this→these, shirt→shirts, is→are." },
    ],
    errors: [
      { q: "Fix it: «How much is these shoes?»", options: ["How much are these shoes?", "How much is this shoes?", "How many is these shoes?"], answer: 0, explain: "shoes (plural) → are + these." },
    ],
  },
  "en-cu-a1-07": {
    transform: [
      { q: "Rewrite as directions: «the library — two blocks — left on 6th»", options: ["Go straight for two blocks and turn left on 6th.", "You go two blocks and left the 6th.", "Going two blocks, turning left 6th."], answer: 0, explain: "Imperativos limpios: go / turn." },
    ],
    errors: [
      { q: "Fix it: «It's between the bank the park.»", options: ["It's between the bank and the park.", "It's between the bank or the park.", "It's among bank park."], answer: 0, explain: "between X AND Y." },
    ],
  },
  "en-cu-a1-08": {
    transform: [
      { q: "Rewrite as a question: «The train leaves at 9:10.»", options: ["What time does the train leave?", "What time does the train leaves?", "What time the train leaves?"], answer: 0, explain: "does + base (leave, sin -s)." },
    ],
    errors: [
      { q: "Fix it: «How long the trip takes?»", options: ["How long does the trip take?", "How long do the trip takes?", "How long is the trip takes?"], answer: 0, explain: "Pregunta con does; la -s desaparece." },
    ],
  },
  "en-cu-a1-09": {
    transform: [
      { q: "Rewrite with love: «I like hiking.» (más fuerte)", options: ["I love hiking.", "I love to hiking.", "I loving hiking."], answer: 0, explain: "love + -ing, igual que like." },
    ],
    errors: [
      { q: "Fix it: «I'm really into to cook.»", options: ["I'm really into cooking.", "I'm really into to cooking.", "I'm really in cooking."], answer: 0, explain: "into + sustantivo/gerundio." },
    ],
  },
  "en-cu-a1-10": {
    transform: [
      { q: "Rewrite in the plural: «There's a closet.»", options: ["There are two closets.", "There is two closets.", "There're a closets."], answer: 0, explain: "Plural → there are." },
    ],
    errors: [
      { q: "Fix it: «Is there a gardens?»", options: ["Is there a garden?", "Are there a garden?", "Is there any gardens?"], answer: 0, explain: "Singular: garden + is there a." },
    ],
  },
  "en-cu-a1-11": {
    transform: [
      { q: "Rewrite with «how many»: «Do we need eggs?»", options: ["How many eggs do we need?", "How many eggs we need?", "How much eggs do we need?"], answer: 0, explain: "how many + plural + do." },
    ],
    errors: [
      { q: "Fix it: «How many milk do we need?»", options: ["How much milk do we need?", "How many milks do we need?", "How much milks we need?"], answer: 0, explain: "milk = incontable → how much." },
    ],
  },
  "en-cu-a1-12": {
    transform: [
      { q: "Turn into a polite order: «One bagel!»", options: ["I'd like one bagel, please.", "I'd like one bagel now immediately.", "Give me one bagel please quick."], answer: 0, explain: "I'd like + please." },
    ],
    errors: [
      { q: "Fix it: «Do you are a student?»", options: ["Are you a student?", "Do you a student?", "You are a student, yes?"], answer: 0, explain: "be nunca lleva do: Are you…?" },
    ],
  },
};
