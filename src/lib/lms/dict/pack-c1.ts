import { D } from "./entry";

/* ── Pack C1 · registro formal, académico y literario (MCER C1) ── */

export const PACK_C1: import("../types").VocabWord[] = [
  /* ══ conectores formales y académicos C1 ══ */
  D("d5-ciononostante", "ciononostante", "no obstante / con todo", "tʃononoˈstante", "congiunzione", "connettivi", "C1", 5, { it: "Il costo è alto, ciononostante conviene.", es: "El costo es alto, no obstante conviene." }, { register: "formale", syn: ["tuttavia", "nondimeno"] }),
  D("d5-nondimeno", "nondimeno", "sin embargo / no obstante", "nondiˈmeːno", "congiunzione", "connettivi", "C1", 5, { it: "È un esordiente, nondimeno sorprende.", es: "Es un debutante, sin embargo sorprende." }, { register: "formale" }),
  D("d5-benche", "benché", "aunque / si bien", "benˈke", "congiunzione", "connettivi", "C1", 4, { it: "Benché piovesse, siamo usciti.", es: "Aunque lloviera, salimos." }, { note: "benché + congiuntivo. Más literario que sebbene." }),
  D("d5-laddove", "laddove", "allí donde / mientras que / cuando", "ladˈdoːve", "congiunzione", "connettivi", "C1", 5, { it: "Laddove la teoria falla, la pratica aiuta.", es: "Allí donde la teoría falla, la práctica ayuda." }, { register: "letterario" }),
  D("d5-ove", "ove", "donde (formal)", "ˈoːve", "congiunzione", "connettivi", "C1", 5, { it: "Il palazzo ove nacque il Poeta.", es: "El palacio donde nació el Poeta." }, { register: "letterario", syn: ["dove"] }),
  D("d5-giacche", "giacché", "puesto que / ya que", "dʒakˈke", "congiunzione", "connettivi", "C1", 5, { it: "Giacché sei qui, dammi una mano.", es: "Puesto que estás aquí, dame una mano." }, { register: "formale" }),
  D("d5-poiche", "poiché", "ya que / puesto que / porque", "poˈiːke", "congiunzione", "connettivi", "C1", 4, { it: "Poiché non rispondi, proseguo da solo.", es: "Ya que no respondes, prosigo solo." }),
  D("d5-dacche", "dacché", "dado que / desde que", "dakˈke", "congiunzione", "connettivi", "C1", 5, { it: "Dacché sei arrivato, tutto è migliorato.", es: "Desde que llegaste, todo mejoró." }, { register: "letterario" }),
  D("d5-allorche", "allorquando / allorché", "cuando (formal/literario)", "allorkwanˈdo", "congiunzione", "connettivi", "C1", 5, { it: "Allorché giunse la notizia, tutti tacquero.", es: "Cuando llegó la noticia, todos callaron." }, { register: "letterario" }),
  D("d5-inquanto", "in quanto", "en cuanto / en calidad de", "in ˈkwanto", "congiunzione", "connettivi", "C1", 4, { it: "Partecipo in quanto esperto del settore.", es: "Participo en calidad de experto del sector." }),
  D("d5-vala-dire", "vale a dire", "es decir / esto es", "ˈvaːle a ˈdiːre", "espressione", "connettivi", "C1", 3, { it: "Accettiamo, vale a dire che firmeremo.", es: "Aceptamos, es decir, que firmaremos." }, { register: "formale" }),
  D("d5-inaltreparole", "in altre parole", "en otras palabras", "in ˈaltre paˈrole", "espressione", "connettivi", "C1", 3, { it: "In altre parole: si tratta di un no.", es: "En otras palabras: se trata de un no." }),
  D("d5-percosidire", "per così dire", "por así decirlo", "per koˈsiː ˈdiːre", "espressione", "connettivi", "C1", 4, { it: "È, per così dire, un genio incompreso.", es: "Es, por así decirlo, un genio incomprendido." }),
  D("d5-mica", "mica", "para nada / en absoluto", "ˈmiːka", "avverbio", "connettivi", "C1", 3, { it: "Non è mica vero! Mica ho paura!", es: "¡Para nada es verdad! ¡Para nada tengo miedo!" }, { register: "colloquiale", note: "mica refuerza la negación: non è mica vero = no es para nada verdad." }),
  D("d5-appunto", "appunto", "precisamente / justamente", "apˈputto", "avverbio", "connettivi", "C1", 3, { it: "Appunto per questo ti chiamo!", es: "¡Precisamente por esto te llamo!" }),
  D("d5-perlappunto", "per l'appunto", "exactamente / así es", "per ˈlappunto", "espressione", "connettivi", "C1", 4, { it: "— Sei tu l'ingegnere? — Per l'appunto.", es: "— ¿Eres tú el ingeniero? — Exactamente." }),

  /* ══ verbos académicos y formales C1 ══ */
  D("d5-elencare", "elencare", "enumerar / listar", "elenˈkaːre", "verbo", "connettivi", "C1", 4, { it: "Elenchiamo i punti essenziali.", es: "Enumeramos los puntos esenciales." }),
  D("d5-esplicitare", "esplicitare", "explicitar / explicar claramente", "espliciˈtaːre", "verbo", "connettivi", "C1", 5, { it: "L'autore esplicita la tesi nel capitolo primo.", es: "El autor explicita la tesis en el capítulo primero." }, { register: "formale" }),
  D("d5-postulare", "postulare", "postular / dar por sentado", "postuˈlaːre", "verbo", "astratto", "C1", 5, { it: "Lo studio postula tre condizioni.", es: "El estudio postula tres condiciones." }, { register: "tecnico" }),
  D("d5-teorizzare", "teorizzare", "teorizar", "teoritˈtsaːre", "verbo", "astratto", "C1", 5, { it: "È presto per teorizzare risultati.", es: "Es pronto para teorizar resultados." }),
  D("d5-confutare", "confutare", "refutar", "konfuˈtaːre", "verbo", "connettivi", "C1", 5, { it: "Confuta la tesi con dati solidi.", es: "Refuta la tesis con datos sólidos." }, { register: "formale" }),
  D("d5-argomentare", "argomentare", "argumentar", "arɡomenˈtaːre", "verbo", "connettivi", "C1", 4, { it: "Argomenta in modo convincente.", es: "Argumenta de manera convincente." }),
  D("d5-rimarcare", "rimarcare", "recalcar / subrayar", "rimarˈkaːre", "verbo", "connettivi", "C1", 5, { it: "Rimarco la differenza tra i due autori.", es: "Recalco la diferencia entre los dos autores." }, { register: "formale" }),
  D("d5-enfatizzare", "enfatizzare", "enfatizar", "enfatiˈttsaːre", "verbo", "comunicazione", "C1", 4, { it: "Il titolo enfatizza lo scandalo.", es: "El titular enfatiza el escándalo." }),
  D("d5-ridimensionare", "ridimensionare", "redimensionar / quitar hierro", "ridimensjoˈnaːre", "verbo", "astratto", "C1", 5, { it: "L'esperto ridimensiona l'allarme.", es: "El experto redimensiona la alarma." }),
  D("d5-svilire", "svilire", "devaluar / envilecer", "zviˈliːre", "verbo", "astratto", "C1", 5, { it: "Non svilire i suoi sforzi!", es: "¡No devalúes sus esfuerzos!" }, { register: "letterario" }),
  D("d5-riscontrare", "riscontrare", "constatar / verificar (datos)", "riskonˈtraːre", "verbo", "connettivi", "C1", 5, { it: "Riscontro un errore nella fattura.", es: "Constato un error en la factura." }, { register: "formale" }),
  D("d5-evincere", "evincere", "inferir / deducirse", "eˈvintʃere", "verbo", "astratto", "C1", 5, { it: "Dal testo si evince il contrario.", es: "Del texto se infiere lo contrario." }, { register: "formale", note: "Uso impersonal frecuente: si evince che… = se deduce que…" }),

  /* ══ sustantivos formales C1 ══ */
  D("d5-esponente", "esponente", "exponente / miembro (destacado)", "espoˈnɛnte", "sostantivo", "istituzioni", "C1", 5, { it: "Un esponente del mondo della cultura.", es: "Un exponente del mundo de la cultura." }, { gender: "m" }),
  D("d5-portavoce", "portavoce", "portavoz", "portoˈvɔːtʃe", "sostantivo", "istituzioni", "C1", 4, { it: "Il portavoce del governo dichiara…", es: "El portavoz del gobierno declara…" }, { gender: "m" }),
  D("d5-vertice", "vertice", "cumbre (reunión) / vértice", "ˈvɛrtitʃe", "sostantivo", "istituzioni", "C1", 4, { it: "Il vertice UE sulla migrazione.", es: "La cumbre UE sobre migración." }, { gender: "m" }),
  D("d5-convegno", "convegno", "congreso / simposio", "konˈveɲɲo", "sostantivo", "studi", "C1", 4, { it: "Partecipo a un convegno di italianistica.", es: "Participo en un congreso de italianística." }, { gender: "m" }),
  D("d5-dibattito", "dibattito", "debate", "dibˈbatːito", "sostantivo", "comunicazione", "C1", 3, { it: "Un dibattito acceso sull'ambiente.", es: "Un debate encendido sobre el ambiente." }, { gender: "m" }),
  D("d5-dilemma", "dilemma", "dilema", "diˈlɛmma", "sostantivo", "astratto", "C1", 4, { it: "Il dilemma amletico: essere o non essere.", es: "El dilema hamletiano: ser o no ser." }, { gender: "m" }),
  D("d5-paradosso", "paradosso", "paradoja", "paraˈdɔsso", "sostantivo", "astratto", "C1", 4, { it: "Il paradosso della scelta infinita.", es: "La paradoja de la elección infinita." }, { gender: "m" }),
  D("d5-malessere", "malessere", "malestar", "malesˈsɛːre", "sostantivo", "salud", "C1", 4, { it: "Un diffuso malessere sociale.", es: "Un difuso malestar social." }, { gender: "m", ant: ["benessere"] }),
  D("d5-benessere", "benessere", "bienestar", "beneˈssɛːre", "sostantivo", "salud", "C1", 3, { it: "Il benessere psicofisico conta più del denaro.", es: "El bienestar psicofísico cuenta más que el dinero." }, { gender: "m", ant: ["malessere"] }),
  D("d5-querelle", "querelle", "polémica / disputa", "kɛˈrɛl", "sostantivo", "comunicazione", "C1", 5, { it: "La querelle tra i due critici dura da anni.", es: "La polémica entre los dos críticos dura años." }, { gender: "f", register: "formale" }),
  D("d5-aporia", "aporia", "aporía / impasse lógico", "aˈpɔːria", "sostantivo", "astratto", "C1", 5, { it: "L'aporia della libertà assoluta.", es: "La aporía de la libertad absoluta." }, { gender: "f", register: "tecnico" }),

  /* ══ periodismo C1 ══ */
  D("d5-editoriale", "editoriale", "editorial (artículo)", "editorjaːle", "sostantivo", "comunicazione", "C1", 4, { it: "L'editoriale di oggi firma il direttore.", es: "El editorial de hoy lo firma el director." }, { gender: "m" }),
  D("d5-reportage", "reportage", "reportaje", "repoˈrtaʒːe", "sostantivo", "comunicazione", "C1", 4, { it: "Un reportage dalla Sicilia profonda.", es: "Un reportaje desde la Sicilia profunda." }, { gender: "m" }),
  D("d5-inviato", "inviato (speciale)", "enviado (especial)", "inˈvjaːto", "sostantivo", "comunicazione", "C1", 5, { it: "Parla il nostro inviato a Napoli.", es: "Habla nuestro enviado en Nápoles." }, { gender: "m" }),
  D("d5-cronaca", "cronaca", "crónica / sucesos", "kroˈnaːka", "sostantivo", "comunicazione", "C1", 4, { it: "La cronaca nera in prima pagina.", es: "La crónica negra en primera plana." }, { gender: "f", collocations: ["cronaca nera", "cronaca rosa"] }),
  D("d5-approfondimento", "approfondimento", "análisis / informe profundo", "approfondiˈmento", "sostantivo", "comunicazione", "C1", 4, { it: "Un approfondimento sul fenomeno migratorio.", es: "Un análisis sobre el fenómeno migratorio." }, { gender: "m" }),

  /* ══ términos literarios C1 ══ */
  D("d5-metafora", "metafora", "metáfora", "metaˈfoːra", "sostantivo", "letteratura", "C1", 4, { it: "«Il mare della vita»: una metafora classica.", es: "«El mar de la vida»: una metáfora clásica." }, { gender: "f" }),
  D("d5-similitudine", "similitudine", "símil / comparación", "similituˈdiːne", "sostantivo", "letteratura", "C1", 5, { it: "Dante usa similitudini luminose.", es: "Dante usa símiles luminosos." }, { gender: "f" }),
  D("d5-anafora", "anafora", "anáfora", "anaˈfoːra", "sostantivo", "letteratura", "C1", 5, { it: "L'anafora «Ma» scandisce la poesia.", es: "La anáfora «Ma» escande el poema." }, { gender: "f", register: "tecnico" }),
  D("d5-allegoria", "allegoria", "alegoría", "alleɡoˈriːa", "sostantivo", "letteratura", "C1", 5, { it: "La Divina Commedia è un'allegoria del viaggio.", es: "La Divina Comedia es una alegoría del viaje." }, { gender: "f" }),
  D("d5-ossumoro", "ossimoro", "oxímoron", "ossiˈmoːro", "sostantivo", "letteratura", "C1", 5, { it: "«Ghiaccio bollente»: un ossimoro perfetto.", es: "«Hielo hirviente»: un oxímoron perfecto." }, { gender: "m", register: "tecnico" }),
  D("d5-iperbole", "iperbole", "hipérbole", "iˈperbole", "sostantivo", "letteratura", "C1", 5, { it: "«Te l'ho detto un milione di volte»: iperbole.", es: "«Te lo dije un millón de veces»: hipérbole." }, { gender: "f" }),
  D("d5-narratore", "narratore", "narrador", "narratˈtoːre", "sostantivo", "letteratura", "C1", 4, { it: "Il narratore onnisciente guida il romanzo.", es: "El narrador omnisciente guía la novela." }, { gender: "m" }),
  D("d5-metrica", "metrica", "métrica", "ˈmeːtrika", "sostantivo", "letteratura", "C1", 5, { it: "La metrica dell'endecasillabo dantesco.", es: "La métrica del endecasílabo dantesco." }, { gender: "f", register: "tecnico" }),
  D("d5-endecasillabo", "endecasillabo", "endecasílabo", "endekasilˈlabo", "sostantivo", "letteratura", "C1", 5, { it: "L'endecasillabo è il verso della lirica italiana.", es: "El endecasílabo es el verso de la lírica italiana." }, { gender: "m" }),
  D("d5-sonetto", "sonetto", "soneto", "soˈnetto", "sostantivo", "letteratura", "C1", 4, { it: "Il sonetto petrarchesco: quattordici versi.", es: "El soneto petrarquista: catorce versos." }, { gender: "m" }),

  /* ══ adjetivos avanzados C1 ══ */
  D("d5-imprescindibile", "imprescindibile", "imprescindible", "imprenˈdindibile", "aggettivo", "astratto", "C1", 5, { it: "Un'opera imprescindibile del Novecento.", es: "Una obra imprescindible del Novecientos." }),
  D("d5-ineluttabile", "ineluttabile", "ineludible / inevitable", "inelutˈtabile", "aggettivo", "astratto", "C1", 5, { it: "Il declino sembrava ineluttabile.", es: "El declive parecía ineludible." }, { register: "letterario" }),
  D("d5-inesorabile", "inesorabile", "inexorable", "inesoˈraːbile", "aggettivo", "astratto", "C1", 5, { it: "Il tempo, inesorabile, passa.", es: "El tiempo, inexorable, pasa." }),
  D("d5-eclatante", "eclatante", "escandaloso / llamativo", "eklaˈtante", "aggettivo", "astratto", "C1", 5, { it: "Un errore eclatante in prima pagina.", es: "Un error clamoroso en primera plana." }, { register: "formale" }),
  D("d5-arduo", "arduo", "arduo / difícil", "ˈarduːo", "aggettivo", "astratto", "C1", 5, { it: "Un compito arduo ma non impossibile.", es: "Una tarea ardua pero no imposible." }, { register: "letterario" }),
  D("d5-ostico", "ostico", "espinoso / difícil de tragar", "ˈostiko", "aggettivo", "astratto", "C1", 5, { it: "Un tema ostico: il congiuntivo!", es: "Un tema espinoso: ¡el subjuntivo!" }, { register: "colloquiale" }),
  D("d5-ambiguo", "ambiguo", "ambiguo", "amˈbiɡwo", "aggettivo", "astratto", "C1", 4, { it: "Una risposta ambigua lascia dubbi.", es: "Una respuesta ambigua deja dudas." }),
  D("d5-poliedrico", "poliedrico", "polifacético", "polieddriːko", "aggettivo", "astratto", "C1", 5, { it: "Leonardo: un genio poliedrico.", es: "Leonardo: un genio polifacético." }),
  D("d5-versatile", "versatile", "versátil", "verˈsaːtile", "aggettivo", "astratto", "C1", 4, { it: "Un attore versatile, dal comedy al dramma.", es: "Un actor versátil, de la comedia al drama." }),
  D("d5-sfuggente", "sfuggente", "escurridizo / evasivo", "sfudˈdʒente", "aggettivo", "astratto", "C1", 4, { it: "Uno sguardo sfuggente e un sorriso vago.", es: "Una mirada escurridiza y una sonrisa vaga." }),
  D("d5-estemporaneo", "estemporaneo", "extemporáneo / improvisado", "estempoˈraːneo", "aggettivo", "astratto", "C1", 5, { it: "Un discorso estemporaneo, ma efficace.", es: "Un discurso extemporáneo, pero eficaz." }),
  D("d5-inquisitore", "inquietante", "inquietante", "inkwietˈtante", "aggettivo", "astratto", "C1", 4, { it: "Un silenzio inquietante riempie la casa.", es: "Un silencio inquietante llena la casa." }),
  D("d5-persuasivo", "persuasivo", "persuasivo", "perswaˈziːvo", "aggettivo", "comunicazione", "C1", 5, { it: "Un argomento persuasivo e ben scritto.", es: "Un argumento persuasivo y bien escrito." }),

  /* ══ más falsos amigos y matices C1 ══ */
  D("d5-esordio", "esordio", "debut / comienzo / inicio", "eˈzɔrdjo", "sostantivo", "letteratura", "C1", 5, { it: "L'esordio letterario di Ferrante.", es: "El debut literario de Ferrante." }, { gender: "m", note: "esordio = debut/comienzo (novela, carrera). 'Discurso exordio' clásico = primera parte del discurso." }),
  D("d5-esigente", "esigente", "exigente", "esiˈdʒente", "aggettivo", "emozioni", "C1", 4, { it: "Un capo esigente ma giusto.", es: "Un jefe exigente pero justo." }),
  D("d5-pretendere", "pretendere", "exigir / pretender", "pretenˈdɛːre", "verbo", "astratto", "C1", 3, { it: "Pretendo rispetto, non complimenti.", es: "Exijo respeto, no cumplidos." }, { ff: true, note: "⚠️ FALSO AMIGO: pretendere = EXIGIR/esperar, no 'pretender' (= fingere / voler fare). Pretendo che tu venga = exijo que vengas." }),
  D("d5-fingere", "fingere", "fingir / pretender (hacer como)", "finˈdʒere", "verbo", "comunicazione", "C1", 4, { it: "Finge di dormire per non parlare.", es: "Finge dormir para no hablar." }, { note: "'Pretender' español = fingere / voler fare. fingere di + infinitivo = fingir hacer." }),
  D("d5-elogiare", "elogiare", "elogiar", "eloˈdʒaːre", "verbo", "comunicazione", "C1", 4, { it: "La critica elogia il film senza riserve.", es: "La crítica elogia la película sin reservas." }),
  D("d5-biasimare", "biasimare", "censurar / reprobar", "biaziˈmaːre", "verbo", "comunicazione", "C1", 5, { it: "Biasimo la sua mancanza di rispetto.", es: "Censuro su falta de respeto." }, { register: "formale", ant: ["elogiare"] }),
  D("d5-rammarico", "rammarico", "pesar / arrepentimiento", "rammaˈriːko", "sostantivo", "emozioni", "C1", 5, { it: "Con grande rammarico, declino l'invito.", es: "Con gran pesar, rechazo la invitación." }, { gender: "m", register: "formale", collocations: ["con rammarico"] }),
  D("d5-disdicevole", "sconveniente", "inconveniente / indecoroso", "skonvenjɛnte", "aggettivo", "istituzioni", "C1", 5, { it: "Un comportamento sconveniente a tavola.", es: "Un comportamiento inconveniente a la mesa." }),
  D("d5-plauso", "plauso", "aplauso / elogio", "ˈplauːzo", "sostantivo", "comunicazione", "C1", 5, { it: "Il film merita il plauso della critica.", es: "La película merece el aplauso de la crítica." }, { gender: "m", register: "formale" }),
];
