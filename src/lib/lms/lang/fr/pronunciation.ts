/* ── Pronunciación FR · sonidos del francés de Francia ─────────────
   Espejo del array SOUNDS de la vista de pronunciación canónica:
   cada sonido lleva una regla en español (con tuteo), 4 palabras de
   ejemplo { w, es } y el nivel. Convención fonética del proyecto:
   ã / õ / ĩ = vocales nasales · zh = j/g suave · sh = ch · ö = eu/œu
   · ó = eau/au · uá = oi · ü = u francesa · la sílaba tónica lleva tilde y la
   consonante final suele ser muda.                                  */

export interface PronunciationSound {
  id: string;
  title: string;
  rule: string;
  words: { w: string; es: string }[];
  level: string;
}

export const FR_PRONUNCIATION: PronunciationSound[] = [
  {
    id: "fr-pr-nasale-an", title: "La nasal an / en / em", level: "A1",
    rule: "El grupo an/en/em se nasaliza: la vocal pasa por la nariz y la n no suena. Enfant = /ã-fã/, sin rastro de « n ». Tant y temps suenan exactamente igual: /tã/.",
    words: [
      { w: "enfant", es: "niño /ã-fã/" },
      { w: "maman", es: "mamá /ma-mã/" },
      { w: "temps", es: "tiempo /tã/" },
      { w: "pendant", es: "durante /pã-dã/" },
    ],
  },
  {
    id: "fr-pr-nasale-on", title: "La nasal on / om", level: "A1",
    rule: "El grupo on/om suena como una « o » nasal: forma la boca de « o » pero deja salir el aire por la nariz. Bon = /bõ/, un solo sonido. ¡No añadas una n final!",
    words: [
      { w: "bon", es: "bueno /bõ/" },
      { w: "mon", es: "mi /mõ/" },
      { w: "maison", es: "casa /mè-zõ/" },
      { w: "pompier", es: "bombero /põ-pyé/" },
    ],
  },
  {
    id: "fr-pr-nasale-in", title: "Las nasales in / ain / ein / un", level: "A2",
    rule: "In, ain y ein suenan igual: /ĩ/, una « i » nasal. El grupo un/um tenía su propio sonido /œ̃/, pero en Francia hoy casi todos lo funden con /ĩ/: brun y brin suenan igual. Si los distingues, sonarás a quebequense.",
    words: [
      { w: "vin", es: "vino /vĩ/" },
      { w: "pain", es: "pan /pĩ/" },
      { w: "main", es: "mano /mĩ/" },
      { w: "lundi", es: "lunes /lĩ-di/" },
    ],
  },
  {
    id: "fr-pr-u-ou", title: "u vs ou: tu ≠ tout", level: "A1",
    rule: "La u francesa no existe en español: di « i » con labios de « u » (o « u » con lengua de « i »). Tu = /tü/ con u francesa; tout = /tu/ como la u española. Es un par mínimo que cambia palabras.",
    words: [
      { w: "tu / tout", es: "tú / todo" },
      { w: "rue / roue", es: "calle / rueda" },
      { w: "vu / vous", es: "visto / usted(es)" },
      { w: "sur / sous", es: "sobre / debajo" },
    ],
  },
  {
    id: "fr-pr-e-muet", title: "La e muda (e caduc)", level: "A2",
    rule: "La « e » sin acento a menudo no suena: petit = /pti/, samedi = /samdi/. Antes de consonante se cae con naturalidad; al inicio de frase o cantando se conserva. Escucha a los parisinos: casi no la pronuncian.",
    words: [
      { w: "petit", es: "pequeño /pti/" },
      { w: "samedi", es: "sábado /samdi/" },
      { w: "je", es: "yo /zhe/" },
      { w: "renard", es: "zorro /re-nar/" },
    ],
  },
  {
    id: "fr-pr-e-accents", title: "é, è, ê: las tres e", level: "A1",
    rule: "é es la e cerrada /e/ (café), mientras è y ê son la e abierta /è/ (père, fête). La palabra élève contiene las dos: primera abierta, segunda cerrada. El circunflejo suele marcar una « s » que existió: hôpital ← hospital.",
    words: [
      { w: "café", es: "café (e cerrada)" },
      { w: "père", es: "padre (e abierta)" },
      { w: "fête", es: "fiesta (e abierta)" },
      { w: "élève", es: "alumno/a (contiene las dos)" },
    ],
  },
  {
    id: "fr-pr-r", title: "La r grasseyé (de garganta)", level: "B1",
    rule: "La r francesa es uvular: se produce en la garganta, como un carraspeo delicado. A principio de palabra suena más marcada (Paris, très); a final de palabra casi se desvanece (bonjour = /bõ-zhur/). No la hagas vibrar como la rr española.",
    words: [
      { w: "Paris", es: "París /pa-ri/" },
      { w: "très", es: "muy /trè/" },
      { w: "bonjour", es: "buenos días /bõ-zhur/" },
      { w: "rue", es: "calle /rü/" },
    ],
  },
  {
    id: "fr-pr-ch-j", title: "ch = « sh », j / g = « zh »", level: "A1",
    rule: "ch suena como la « sh » inglesa (chat = « shat »), y j, ge, gi suenan como su versión sonora /zh/ (je = « zhe »). Para ti: ch es « sh »; j es como una « ll » argentina suave o la j de « jungle ».",
    words: [
      { w: "chat", es: "gato (sh)" },
      { w: "chez", es: "en casa de (sh)" },
      { w: "je", es: "yo (zh)" },
      { w: "girafe", es: "jirafa (zh)" },
    ],
  },
  {
    id: "fr-pr-h", title: "h muda y h aspirada", level: "B1",
    rule: "La h francesa nunca suena, pero hay dos tipos: la h muda permite elisión y liaison (l'homme, les‿hommes), y la h aspirada las bloquea (le héros, les haricots). No se ve en la escritura: toca memorizarla; suele ser germánica (hache, honte, haricot).",
    words: [
      { w: "l'homme", es: "el hombre (h muda)" },
      { w: "le héros", es: "el héroe (h aspirada)" },
      { w: "les haricots", es: "las judías (h aspirada)" },
      { w: "en haut", es: "arriba (h aspirada)" },
    ],
  },
  {
    id: "fr-pr-liaison", title: "La liaison", level: "B2",
    rule: "Entre palabras unidas, la consonante final muda despierta ante vocal: les‿amis = /lé-za-mi/, vous‿avez = /vu-za-vé/. Es obligatoria tras determinantes y pronombres, opcional en otras parejas, y casi nunca se hace después de « et ». Con sorpresa: grand‿homme suena /grã-tom/.",
    words: [
      { w: "les amis", es: "los amigos /lé-za-mi/" },
      { w: "vous avez", es: "usted(es) tiene(n) /vu-za-vé/" },
      { w: "petit ami", es: "novio /pti-ta-mi/" },
      { w: "très heureux", es: "muy feliz /trè-zö-rö/" },
    ],
  },
  {
    id: "fr-pr-oi", title: "oi = /ua/", level: "A1",
    rule: "El grupo oi no suena « oi » española: es /ua/ (como en « guau »). Moi = /mua/, voir = /vuar/. Escribes « oi » y pronuncias « ua »: es de las primeras trampas del francés.",
    words: [
      { w: "moi", es: "yo /mua/" },
      { w: "voir", es: "ver /vuar/" },
      { w: "voiture", es: "coche /vua-tür/" },
      { w: "boire", es: "beber /buar/" },
    ],
  },
  {
    id: "fr-pr-final-mudo", title: "Las consonantes finales mudas", level: "A1",
    rule: "La mayoría de consonantes finales no suenan: Paris = /pa-ri/, beaucoup = /bo-ku/, vous = /vu/. Sí suelen sonar la C, la R, la F y la L de muchas palabras (avec, hiver, chef, avril): la fórmula « CaReFuL » te salva a medias.",
    words: [
      { w: "Paris", es: "París /pa-ri/" },
      { w: "beaucoup", es: "mucho /bo-ku/" },
      { w: "avec", es: "con (la c suena) /a-vek/" },
      { w: "hiver", es: "invierno (la r suena) /i-ver/" },
    ],
  },
  {
    id: "fr-pr-intonation", title: "Entonación y acento tónico", level: "B1",
    rule: "El acento francés cae en la última sílaba del grupo fónico y las palabras no se golpean una a una: la frase fluye como una ola (la famosa « courbe mélodique »). Las preguntas cerradas suben al final, las informativas bajan y la exclamación desciende con energía.",
    words: [
      { w: "Vous venez ?", es: "¿Viene(s)? (sube al final)" },
      { w: "Où allez-vous ?", es: "¿Adónde va? (baja al final)" },
      { w: "Quelle bonne surprise !", es: "¡Qué sorpresa tan agradable!" },
      { w: "C'est formidable !", es: "¡Es formidable!" },
    ],
  },
];
