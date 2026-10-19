import type { CefrLevel } from "../types";

/* ═══ v9.18 · Tipos del diccionario de interfaz por lengua ═══════════
   La UI (chrome, fichas, enunciados, botones) se renderiza en la lengua
   de estudio activa. `.it` reproduce EXACTAMENTE los textos históricos
   (cero regresión para el curso de italiano); `.en` es inglés americano;
   pt/fr/de aportan el esqueleto (nav/shell/search/fichas/quiz) hasta
   que llegue su contenido.                                        */

export interface UiNavStrings {
  groups: { ruta: string; cursos: string; destrezas: string; herramientas: string; plugins: string; evaluacion: string; sistema: string };
  items: Partial<Record<string, string>>;   // ViewId → etiqueta (solo vistas no IT_ONLY)
}

export interface UiShellStrings {
  studying: string;
  tagline: string;
  search: string; searchAria: string; searchTitle: string;
  xpTitle: string; streakTitle: string; levelTitle: string;
  hello: string;
  closeMenu: string; goHome: string;
  adminTitle: string; sessionTitle: string;
  logout: string; loginAria: string; loginTitle: string; signIn: string;
  themeToLight: string; themeToDark: string; titleLight: string; titleDark: string;
  footer: string;
  more: string;
  loginHeading: string; loginSub: string; userLabel: string; passLabel: string;
  userPh: string; checking: string; enter: string; loginErr: string; loginNote: string;
  dueBadge: (n: number) => string;
  navAria: string; quickNavAria: string; langAria: string; menuAria: string;
}

export interface UiSearchStrings {
  placeholder: string; aria: string; dialogAria: string;
  empty: (q: string) => string;
  gVista: string; gParola: string; gGrammatica: string;
  navHint: string; results: (n: number) => string;
}

export interface UiCommonStrings {
  showEs: string; hideEs: string;
  prev: string; next: string; stop: string;
  exact: string; wrongMark: string;
  answerIs: (x: string) => string;
  passed: string;
  needMore: (n: number) => string;
  answeredCount: (a: number, t: number) => string;
  hoverHint: string;
  unitNotFound: string;
  retry: string;
  studyLangName: string;   // "italiano" / "English" / "português"…
  country: string;         // "Italia" / "the United States"…
}

export interface UiHomeStrings {
  heroChip: string; greetWord: string; greetTail: string;
  namePh: string; nameAria: string; save: string; cancel: string; changeName: string;
  askName: string; nameSaved: (n: string) => string;
  heroDescA: string; heroDescB: string;
  testCta: string; continueCta: (t: string) => string; exploreCta: string; tutorCta: string;
  xpTotal: string; streak: string; streakF: (n: number) => string;
  coins: string; coinsSpin: string; cards: string;
  freezeNote: (n: number) => string;
  missionTitle: string; missionsDone: (xp: number) => string; missionsHint: (xp: number) => string; dailyGoalDone: string;
  wordOfDay: string;
  weakTitle: string; weakDesc: string;
  exploreTitle: string;
  pluginsTitle: string; pluginsNote: string;
  levelsTitle: string; levelsDesc: (n: number) => string;
  fromZero: string; fromZeroDesc: string;
  levelOff: string; unlockWith: (p: string) => string;
  commUnits: (n: number) => string;
  levelLabels: Record<CefrLevel, string>;
  quick: Record<string, { label: string; tag: string; desc: string }>;
}

export interface UiCoursesStrings {
  kicker: string;                 // "Percorso comunicativo · metodologia Cambridge"
  heroTitle: string;
  heroDesc: (n: number, country: string) => string;
  chipUnits: (n: number) => string; chipSteps: string; chipDone: (d: number, t: number) => string;
  profileTitle: string; profileChip: (lv: string) => string;
  skillNames: Record<string, string>;
  skillDescs: Record<string, Record<string, string>>;
  yourLevel: string; paidContent: (p: string) => string;
  units: (n: number) => string; hours: (h: number) => string; doneCheck: (d: number, t: number) => string;
  zeroTitle: string; zeroDesc: string; zeroLessons: (n: number) => string;
  sequenceTipA: string; sequenceTipB: string;
  backPath: string; goal: string;
  levelMeta: (n: number, h: number, d: number) => string;
  unitN: (n: number) => string; completed: string; stepsOf: (s: number) => string; xpPerStep: string;
  allCourses: string; lessons: (n: number) => string; words: (n: number) => string; exercises: (n: number) => string;
  lessonBase: string; lessonDoneAria: string;
}

export interface UiUnitStrings {
  steps: Record<string, string>;
  back: (lv: string, n: number) => string;
  kicker: (lv: string, n: number) => string;
  completedBadge: string;
  stepsAria: string;
  tScenario: string; tAscolto: string; tComprensione: string; tVocabolario: string;
  tGrammatica: (f: string) => string; tPronuncia: (f: string) => string; tParlato: string;
  tLettura: string; tScrittura: string; tCultura: (f: string) => string;
  tMissione: (f: string) => string; tAutovalutazione: string;
  goalsTitle: string; candoChip: string; candoNote: (lv: string) => string; compareScale: string;
  listenDialogue: string; tipListen: string;
  chunksNoteA: string; chunksNoteB: string;
  observe: string; theRule: string; fullExplain: string; moreExamples: string;
  putToTest: string; chooseUse: string; extraTransform: string; fixError: string; fullTopic: string;
  kindCtrl: string; kindSemi: string; kindComm: string; kindAuth: string;
  extReading: string; show: string; hide: string; continueReading: string;
  courseReading: string; openFull: string; readQuestion: string;
  minWords: (n: number) => string; writePh: string; wordsCount: (a: number, b: number) => string;
  hideModel: string; viewModel: string; modelTitle: string;
  cultureNote: string;
  checklist: string;
  selfIntroA: string; selfIntroB: (lv: string) => string;
  candoConfirmed: string; candoComplete: string; reviewQuiz: string;
  unitDone: (n: number) => string; unitDoneSub: string; claimDiploma: string;
  alreadyDone: string; reviewAnytime: string;
  prev: string; next: string; stepCount: (s: number, n: number) => string;
  doneScenario: string; doneAscolto: string; doneVocab: string; donePron: string;
  doneParlato: string; doneLettura: string; doneScrittura: string; doneCultura: string;
  doneMissione: string; doneSection: string;
  quizEsatto: string; quizRespuesta: (x: string) => string; quizSuperato: string;
  quizNeedMore: (n: number) => string; quizAnswered: (a: number, t: number) => string;
}

export interface UiQuizStrings {
  noExercises: string; great: string; almost: string;
  scoreLine: (s: number, t: number, p: number) => string;
  passedMsg: string; failedMsg: string; retry: string;
  typeMc: string; typeTf: string; typeFill: string; typeOrder: string; typeDict: string; typeTranslate: string;
  true: string; false: string;
  listenAgain: (r: number) => string; writeExactly: string;
  dictPh: string; answerPh: string; correctAnswer: string; correctOrder: string;
  tapOrder: string; check: string; finish: string; next: string;
  correctXp: (n: number) => string; incorrect: string;
  currentScore: string; ofN: (t: number) => string;
  optionAria: (i: number, o: string) => string; answerAria: string;
}

export interface UiClozeStrings {
  kicker: (m: number) => string;
  gapAria: (n: number) => string; completeGap: (n: number) => string;
  notThat: (x: string) => string;
  readingDone: (n: number) => string; deduceNote: string;
  progressHint: (s: number, t: number) => string;
  sectionTitle: string; doneCount: (c: number, t: number) => string;
  intro: string;
  readingTab: (i: number) => string; allDone: string; allDoneSub: string;
  tabsAria: string;
}

export interface UiMindStrings {
  kinds: { literal: string; inferential: string; critical: string };
  justification: string; correctWas: (v: string) => string;
  checkIdeas: string; ideasLegend: string;
  intruderTag: string; wellSpotted: string; intruderWrong: string;
  checkOrder: string; orderCount: (n: number, t: number) => string;
  perfectSeq: string; almostSeq: string; greenNumbers: string;
  listening: string; listenAudio: string; hideText: string; showText: string;
  topicLine: string; readText: string; goodPrediction: string; predictionBtn: string;
  quizTitle: string; quizHint: string; vfTitle: string; vfHint: string;
  ideasTitle: string; ideasHint: string; intruderTitle: string;
  seqTitle: string; listenTitle: string; listenHint: string;
  readingComplete: string; strategiesLine: string; completeToClose: string;
  sectionTitle: string; sectionIntro: string; strategyChips: string[];
  readingTab: (i: number) => string; allDone: string; allDoneSub: string;
  doneCount: (c: number, t: number) => string;
  collectionName: string; collectionDesc: (n: number) => string; completedLabel: string;
  searchPh: string; searchAria: string; allTopics: string; cefrChip: string;
  countLine: (n: number) => string; searchTag: string;
  noResults: (q: string) => string; noResultsHint: string; clearFilters: string;
  prev: string; next: string; libDone: (n: number, t: number) => string;
  minPar: (m: number, p: number) => string; unitN: (n: number) => string; readingOf: (i: number) => string;
  themeLabels: Record<string, string>;
}

export interface UiQuadroStrings {
  heroTitle: string; heroSub: string; heroDesc: string;
  chipUnits: (n: number, country: string) => string;
  chipVocabIt: string; chipVocab: (n: string, lang: string) => string;
  chipGrammarIt: string; chipGrammar: (n: number) => string;
  chipReadings: (n: number) => string;
  chipCert: (name: string, country: string) => string;
  yourLevel: string; placementLevel: string; noTestYet: string;
  guidedHours: (label: string, h: number) => string;
  retakeTest: string; takeTest: string;
  selfTitle: string; gridChip: string; markSkills: string; skillsMarked: (n: number) => string; skillsMin3: string; goToGrid: string;
  candoTitle: string; candoSub: string;
  compareIntro: (a: string, b: string) => string;
  compareUp: string; compareDown: string; compareEqual: string;
  gridTitle: string; gridIntro: string; clear: string; markDescriptor: string;
  gridResult: string; suggested: string; suggestedNote: string; continueAt: (lv: string) => string;
  scaleTitle: string; scaleIntro: string; yourLevelTag: string; guidedH: (a: number, b: number) => string;
  covUnits: string; covGrammar: string; covEntries: string; covReadings: string; covDone: (d: number, t: number) => string;
  covTitle: string; covIntro: string;
  th: { level: string; units: string; grammar: string; vocab: string; classic: string; themed: string; cloze: string; cando: string };
  covNote: string;
  certsTitle: (variant: string) => string; certsIntro: (lang: string, country: string) => string; prepIncluded: string;
  intlTitle: string; intlIntro: string; thCefr: string; thActfl: string; thIlr: string; rigorNoteA: string; rigorNoteB: string;
  applyTitle: string; applyIntro: string;
  compliance: { point: string; detail: string }[];
  backToPath: string;
}

export interface UiStrings {
  common: UiCommonStrings;
  nav: UiNavStrings;
  /** títulos de vista (header) por ViewId — opcional, fallback VIEW_TITLES */
  titles?: Partial<Record<string, { title: string; sub: string }>>;
  shell: UiShellStrings;
  search: UiSearchStrings;
  home: UiHomeStrings;
  courses: UiCoursesStrings;
  unit: UiUnitStrings;
  quiz: UiQuizStrings;
  cloze: UiClozeStrings;
  mind: UiMindStrings;
  quadro: UiQuadroStrings;
  /** etiquetas de misión diaria por tipo (clave = QuestType) */
  questLabels: Record<string, (t: number) => string>;
}
