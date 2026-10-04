import type { CbQuizItem } from "../cambridge";

/* ═══ v9.13 · Grammatica rafforzata: por cada unidad, además de los gaps
   existentes, dos ejercicios extra para ASEGURAR la comprensión:
   · Trasformazioni — reescribir la frase aplicando la regla
   · Correggi l'errore — detectar y corregir el error típico            */

export interface GrammarDrill {
  transform: CbQuizItem[];  // 1-2 items
  errors: CbQuizItem[];     // 1-2 items
}

export const GRAMMAR_DRILLS: Record<string, GrammarDrill> = {
  /* ── A1 ─────────────────────────────────────────────────────────── */
  "cu-a1-01": {
    transform: [
      { q: "Riscrivi al plurale: «Io sono spagnolo.»", options: ["Noi siamo spagnoli.", "Noi è spagnolo.", "Noi siamo spagnola."], answer: 0, explain: "Plural masculino: siamo + spagnoli." },
    ],
    errors: [
      { q: "Correggi: «Lei sono romana.»", options: ["Lei è romana.", "Lei siamo romana.", "Lei sei romana."], answer: 0, explain: "Lei (3ª persona) → è." },
    ],
  },
  "cu-a1-02": {
    transform: [
      { q: "Riscrivi con «loro»: «Io ho due fratelli.»", options: ["Loro hanno due fratelli.", "Loro ha due fratelli.", "Loro hanno due fratella."], answer: 0, explain: "loro → hanno; plural: fratelli." },
    ],
    errors: [
      { q: "Correggi: «Questa è la mià casa.»", options: ["Questa è la mia casa.", "Questa è il mio casa.", "Questa sono la mia casa."], answer: 0, explain: "Posesivo femminino: mia (no acento)." },
    ],
  },
  "cu-a1-03": {
    transform: [
      { q: "Riscrivi con «noi»: «Io mi sveglio alle sette.»", options: ["Noi ci svegliamo alle sette.", "Noi si sveglia alle sette.", "Noi mi svegliamo alle sette."], answer: 0, explain: "Reflexivo: mi → ci; svegliarsi → ci svegliamo." },
    ],
    errors: [
      { q: "Correggi: «Loro lavora in ufficio.»", options: ["Loro lavorano in ufficio.", "Loro lavoro in ufficio.", "Loro lavorate in ufficio."], answer: 0, explain: "loro → 3ª plural: lavorano." },
    ],
  },
  "cu-a1-04": {
    transform: [
      { q: "Riscrivi al plurale: «C'è un bar in piazza.»", options: ["Ci sono due bar in piazza.", "C'è due bar in piazza.", "Ci sono un bar in piazza."], answer: 0, explain: "Plural → ci sono + número plural." },
    ],
    errors: [
      { q: "Correggi: «Ci sono una finestra aperta.»", options: ["C'è una finestra aperta.", "Ci sono un finestra aperta.", "C'è una finestre aperta."], answer: 0, explain: "Singular → c'è una." },
    ],
  },
  "cu-a1-05": {
    transform: [
      { q: "Riscrivi con «molto»: «Prendo pane.»", options: ["Prendo molto pane.", "Prendo molti pane.", "Prendo molta pane."], answer: 0, explain: "Pane (m. singular) → molto pane." },
    ],
    errors: [
      { q: "Correggi: «Voglio della acqua.»", options: ["Voglio dell'acqua.", "Voglio del acqua.", "Voglio d'acqua frutta."], answer: 0, explain: "d' + acqua → dell'acqua (vocal inicial)." },
    ],
  },
  "cu-a1-06": {
    transform: [
      { q: "Riscrivi al plural: «Questa maglietta è bella.»", options: ["Queste magliette sono belle.", "Questi magliette sono belli.", "Queste magliette è belle."], answer: 0, explain: "Femenino plural: queste… belle." },
    ],
    errors: [
      { q: "Correggi: «Quello libro è interessante.»", options: ["Quel libro è interessante.", "Quella libro è interessante.", "Quei libro è interessante."], answer: 0, explain: "Ante consonante: quel libro." },
    ],
  },
  "cu-a1-07": {
    transform: [
      { q: "Completa con preposizione articolata: «Vado ___ scuola.» (a + la)", options: ["alla scuola", "allo scuola", "al scuola"], answer: 0, explain: "a + la = alla." },
    ],
    errors: [
      { q: "Correggi: «Il libro è nel tavolo.»", options: ["Il libro è sul tavolo.", "Il libro è al tavolo.", "Il libro è dal tavolo."], answer: 0, explain: "Sobre la mesa → su + il = sul." },
    ],
  },
  "cu-a1-08": {
    transform: [
      { q: "Riscrivi: «Sono le due e mezza» en palabras completas.", options: ["Sono le due e trenta.", "Sono le due e trenta minuti.", "È le due e trenta."], answer: 0, explain: "e mezza = e trenta." },
    ],
    errors: [
      { q: "Correggi: «Sono le otto e un quarto.» → la forma alternativa con los minutos.", options: ["Sono le otto e quindici.", "Sono le otto e cinquanta.", "Sono le nove e un quarto."], answer: 0, explain: "un quarto = quindici (minutos)." },
    ],
  },
  "cu-a1-09": {
    transform: [
      { q: "Riscrivi con plural: «Mi piace questa canzone.»", options: ["Mi piacciono queste canzoni.", "Mi piace queste canzoni.", "Mi piacciono questa canzoni."], answer: 0, explain: "Plural sujeto → piacciono." },
    ],
    errors: [
      { q: "Correggi: «Mi piacciono il gelato.»", options: ["Mi piace il gelato.", "Mi piaccio il gelato.", "Mi piacciono i gelato."], answer: 0, explain: "Singular → piace." },
    ],
  },
  "cu-a1-10": {
    transform: [
      { q: "Completa: «Il gatto è ___ divano.» (su + il)", options: ["sul divano", "nel divano", "al divano"], answer: 0, explain: "su + il = sul." },
    ],
    errors: [
      { q: "Correggi: «La chiavi è sul tavolo.»", options: ["Le chiavi sono sul tavolo.", "La chiave è sul tavolo.", "Le chiavi è sul tavolo."], answer: 0, explain: "O chiavi (f.pl. → sono le) o chiave (sing. → la…è)." },
    ],
  },
  "cu-a1-11": {
    transform: [
      { q: "Riscrivi con «ne»: «Quante mele vuoi? … Tre mele.»", options: ["Ne voglio tre.", "Voglio tre di loro mele.", "Ne tre voglio."], answer: 0, explain: "ne + número: Ne voglio tre." },
    ],
    errors: [
      { q: "Correggi: «Quanto caffè bevi? Ne bevo due.» (con café, la cantidad)", options: ["Ne bevo due tazze.", "Ne bevo molto tazze.", "Bevo ne due."], answer: 0, explain: "Con incontables, ne + cantidad + unidad: due tazze." },
    ],
  },
  "cu-a1-12": {
    transform: [
      { q: "Riscrivi con «avere»: «Ho fame» en plural (noi).", options: ["Abbiamo fame.", "Siamo fame.", "Noi ha fame."], answer: 0, explain: "avere fame: noi → abbiamo fame." },
    ],
    errors: [
      { q: "Correggi: «Noi siamo vent'anni.»", options: ["Noi abbiamo vent'anni.", "Noi è vent'anni.", "Noi avete venti anno."], answer: 0, explain: "La edad se dice con avere: abbiamo vent'anni." },
    ],
  },

  /* ── A2 ─────────────────────────────────────────────────────────── */
  "cu-a2-01": {
    transform: [
      { q: "Riscrivi: «Ho mangiato» con essere (verbo de movimiento: andare).", options: ["Sono andato", "Ho andato", "Sono mangiato"], answer: 0, explain: "andare usa essere: sono andato." },
    ],
    errors: [
      { q: "Correggi: «Ieri ho andato al cinema.»", options: ["Ieri sono andato al cinema.", "Ieri sono andare al cinema.", "Ieri ho andare al cinema."], answer: 0, explain: "andare → essere andato." },
    ],
  },
  "cu-a2-02": {
    transform: [
      { q: "Riscrivi al passato: «Ogni estate andiamo al mare» (hábito).", options: ["Ogni estate andavamo al mare.", "Ogni estate siamo andati al mare.", "Ogni estate andammo al mare sempre."], answer: 0, explain: "Hábito pasado → imperfetto: andavamo." },
    ],
    errors: [
      { q: "Correggi: «Quando ero piccolo, ho giocato sempre fuori.» (hábito)", options: ["Quando ero piccolo, giocavo sempre fuori.", "Quando sono stato piccolo, giocavo fuori.", "Quando ero piccolo, gioco sempre fuori."], answer: 0, explain: "Hábito/repetición → imperfetto: giocavo." },
    ],
  },
  "cu-a2-03": {
    transform: [
      { q: "Fórmula cortés: «Dammi la chiave!» → con Potrebbe…", options: ["Potrebbe darmi la chiave?", "Potrebbe mi dare la chiave?", "Potrebbe do la chiave?"], answer: 0, explain: "Potrebbe + infinitivo con pronombre enclítico: darmi." },
    ],
    errors: [
      { q: "Correggi: «Ho prenotato una stanza per due notti» → con tiempo: «dal 3 al 5».", options: ["Ho prenotato una stanza dal 3 al 5.", "Ho prenotato una stanza da il 3 a il 5.", "Ho prenotato una stanza dal 3 al 5 notti."], answer: 0, explain: "dal…al… para rangos de fechas." },
    ],
  },
  "cu-a2-04": {
    transform: [
      { q: "Riscrivi: «Mi sento stanco» en reflexivo de sensación con prurito.", options: ["Mi prude la gola.", "Mi prudono la gola.", "Mi prude le gole."], answer: 0, explain: "prudere: mi prude la gola (sing.)." },
    ],
    errors: [
      { q: "Correggi: «Ho mal di testa» → con avere + mal di (estómago).", options: ["Ho mal di stomaco.", "Sono mal di stomaco.", "Ho male stomaco."], answer: 0, explain: "avere mal di + parte." },
    ],
  },
  "cu-a2-05": {
    transform: [
      { q: "Tú a un amigo: «Aspetta!» → formal (Lei).", options: ["Aspetti!", "Aspetta Lei!", "Aspettando!"], answer: 0, explain: "Imperativo formal = subjuntivo: aspetti." },
    ],
    errors: [
      { q: "Correggi (imperativo + pronombre): «Dimmi la verità!» → con lo.", options: ["Dimmela!", "Di la mi!", "Dila mi!"], answer: 0, explain: "Enclítico: di + mi + la → dimmela." },
    ],
  },
  "cu-a2-06": {
    transform: [
      { q: "Riscrivi al futuro: «Domani piove.»", options: ["Domani pioverà.", "Domani ha piovuto.", "Domani pioveva."], answer: 0, explain: "Futuro simple: pioverà." },
    ],
    errors: [
      { q: "Correggi: «In inverno sciaremo ogni weekend.» → con la estación correcta del esquí… ¿«in inverno» o «d'inverno»?", options: ["D'inverno sciaremo ogni weekend.", "In inverno es correcto y común también", "A inverno sciaremo."], answer: 0, explain: "Con estaciones se prefiere d'inverno (aunque in inverno no es error grave)." },
    ],
  },
  "cu-a2-07": {
    transform: [
      { q: "Riscrivi: «Devi riposare» con volere.", options: ["Vuoi riposare?", "Devo riposare?", "Potrei riposare?"], answer: 0, explain: "Modal + infinitivo sin preposición." },
    ],
    errors: [
      { q: "Correggi: «Non posso a uscire stasera.»", options: ["Non posso uscire stasera.", "Non posso di uscire stasera.", "Non posso uscendo stasera."], answer: 0, explain: "Los modales van + infinitivo directo, sin a/di." },
    ],
  },
  "cu-a2-08": {
    transform: [
      { q: "Sustituye por pronombre: «Chiamo Maria» → pronombre directo.", options: ["La chiamo.", "Le chiamo.", "Mi chiamo."], answer: 0, explain: "María → la (directo fem.)." },
    ],
    errors: [
      { q: "Correggi: «Telefono a Luca» → con pronombre.", options: ["Gli telefono.", "Lo telefono.", "Le telefono."], answer: 0, explain: "telefonare a → indirecto: gli." },
    ],
  },
  "cu-a2-09": {
    transform: [
      { q: "Riscrivi con superlativo: «Questo è un buon ristorante» (el mejor de la ciudad).", options: ["È il miglior ristorante della città.", "È il più buono ristorante della città.", "È il migliore ristorante della città."], answer: 0, explain: "Forma sintética: il miglior ristorante (más idiomático)." },
    ],
    errors: [
      { q: "Correggi: «È più migliore di quello.»", options: ["È migliore di quello.", "È più migliore quello.", "È più meglio di quello."], answer: 0, explain: "migliore ya es comparativo: sin más." },
    ],
  },
  "cu-a2-10": {
    transform: [
      { q: "Impersonal: «Si aggiunge il sale» → con plural ( verduras).", options: ["Si aggiungono le verdure.", "Si aggiunge le verdure.", "Si aggiungere le verdure."], answer: 0, explain: "si + plural → 3ª plural: si aggiungono." },
    ],
    errors: [
      { q: "Correggi: «Si cuoce la pasta per dieci minuti» → con gli spaghetti.", options: ["Si cuociono gli spaghetti.", "Si cuoce gli spaghetti.", "Si cuociono il spaghetti."], answer: 0, explain: "Plural → si cuociono." },
    ],
  },
  "cu-a2-11": {
    transform: [
      { q: "Riscrivi al futuro: «Se vieni, sono contento.»", options: ["Se verrai, sarò contento.", "Se vieni, sarò contento.", "Se verrai, sono contento."], answer: 0, explain: "se + futuro, futuro en ambas." },
    ],
    errors: [
      { q: "Correggi: «Prometto: chiamerò domani» → añade el pronombre para «a te».", options: ["Ti chiamerò domani.", "Chiamerò-te domani.", "Ti chiameranno domani."], answer: 0, explain: "Prometer a alguien: pronombre antes del futuro → ti chiamerò." },
    ],
  },
  "cu-a2-12": {
    transform: [
      { q: "Riscrivi con imperfetto: «Mentre io cucino, lui guarda la TV» (ayer).", options: ["Mentre io cucinavo, lui guardava la TV.", "Mentre ho cucinato, lui ha guardato la TV.", "Mentre cucinavo, lui ha guardato sempre."], answer: 0, explain: "Acción simultánea en el pasado → imperfetto." },
    ],
    errors: [
      { q: "Correggi: «Quando ero bambina, ho sempre voluto un cane.» (estado prolongado)", options: ["Quando ero bambina, volevo sempre un cane.", "Quando sono stata bambina, ho voluto un cane.", "Quando ero bambina, voglio un cane."], answer: 0, explain: "Deseo continuado → imperfetto: volevo." },
    ],
  },

  /* ── B1 ─────────────────────────────────────────────────────────── */
  "cu-b1-01": {
    transform: [
      { q: "Elige la narración correcta: «Mentre ___ (camminare), ho incontrato Luca.»", options: ["camminavo", "ho camminato", "camminai"], answer: 0, explain: "Acción de fondo → imperfetto; el encuentro puntuale → passato prossimo." },
    ],
    errors: [
      { q: "Correggi: «Ieri ho ricevuto una llamada mientras dormivo.» → «Ieri ho ricevuto una telefonata mentre…»", options: ["dormivo", "ho dormito", "dormo"], answer: 0, explain: "El dormir es fondo/duración → imperfetto." },
    ],
  },
  "cu-b1-02": {
    transform: [
      { q: "Cortesía: «Voglio parlare col direttore» → condizionale.", options: ["Vorrei parlare col direttore.", "Vorrei di parlare col direttore.", "Vorei parlare col direttore."], answer: 0, explain: "volere → condizionale vorrei + infinito." },
    ],
    errors: [
      { q: "Correggi: «Mi piacerebbe di visitare Roma.»", options: ["Mi piacerebbe visitare Roma.", "Mi piacerebbe a visitare Roma.", "Mi piace visitare Roma forse."], answer: 0, explain: "piacerebbe + infinito directo, sin di." },
    ],
  },
  "cu-b1-03": {
    transform: [
      { q: "Riscrivi con congiuntivo: «Penso che è tardi.»", options: ["Penso che sia tardi.", "Penso che è tardi giusto.", "Penso che fosse tardi oggi."], answer: 0, explain: "penso che → congiuntivo presente: sia." },
    ],
    errors: [
      { q: "Correggi: «Sebbene ha ragione, non lo ascolto.»", options: ["Sebbene abbia ragione, non lo ascolto.", "Sebbene ha ragione lui, ascolto.", "Sebbene aver ragione, no."], answer: 0, explain: "sebbene → congiuntivo: abbia." },
    ],
  },
  "cu-b1-04": {
    transform: [
      { q: "Sustituye: «Do il libro a te» → pronombres combinados.", options: ["Te lo do.", "Lo te do.", "Glielo do."], answer: 0, explain: "a te + il libro → te lo." },
    ],
    errors: [
      { q: "Correggi: «Il libro è stato legge da Maria.»", options: ["Il libro è stato letto da Maria.", "Il libro è leggo da Maria.", "Il libro ha stato letto da Maria."], answer: 0, explain: "Pasivo: essere + participio pasado: letto." },
    ],
  },
  "cu-b1-05": {
    transform: [
      { q: "Conecta: «Studio l'italiano. Voglio lavorare in Italia.» → causale.", options: ["Studio l'italiano perché voglio lavorare in Italia.", "Studio l'italiano però voglio lavorare in Italia.", "Studio l'italiano mentre voglio lavorare in Italia."], answer: 0, explain: "Causa → perché." },
    ],
    errors: [
      { q: "Correggi: «Nonostante il traffico, però siamo arrivati in orario.»", options: ["Nonostante il traffico, siamo arrivati in orario.", "Nonostante il traffico e però in orario.", "Però nonostante, in orario."], answer: 0, explain: "Redundancia: nonostante ya implica concesión; sobra però." },
    ],
  },
  "cu-b1-06": {
    transform: [
      { q: "Combina: «Il ristorante ___ abbiamo mangiato è famoso.» (relativo con lugar)", options: ["dove", "che", "cui"], answer: 0, explain: "Lugar sin preposición → dove." },
    ],
    errors: [
      { q: "Correggi: «Il libro di che ti ho parlato è bello.»", options: ["Il libro di cui ti ho parlato è bello.", "Il libro che ti ho parlato è bello.", "Il libro cui ho parlato è bello."], answer: 0, explain: "parlare DI → di + cui." },
    ],
  },
  "cu-b1-07": {
    transform: [
      { q: "Indirecto: «Maria: 'Ho fame'» → Maria ha detto che…", options: ["aveva fame", "ha fame", "avrà fame"], answer: 0, explain: "Concordanza: presente → imperfetto del congiuntivo/indicativo (aveva)." },
    ],
    errors: [
      { q: "Correggi: «Mi ha chiesto che ora è.»", options: ["Mi ha chiesto che ora fosse.", "Mi ha chiesto che era l'ora?", "Mi ha chiesto ora che è."], answer: 0, explain: "Pregunta indirecta en pasado → fosse (congiuntivo imperfetto)." },
    ],
  },
  "cu-b1-08": {
    transform: [
      { q: "Imperativo + pronombre: «Fai attenzione!» → con lo (a ello).", options: ["Fallo!", "Fa' lo!", "Falci!"], answer: 0, explain: "fare + lo → fallo." },
    ],
    errors: [
      { q: "Correggi: «Non ti preoccupare!» → con me.", options: ["Non ti preoccupare… para mí: «Non si preoccupi!»", "Non mi preoccuparmi!", "Non preoccupami!"], answer: 0, explain: "Formal (Lei): non si preoccupi." },
    ],
  },
  "cu-b1-09": {
    transform: [
      { q: "Riscrivi: «Mi sembra che lui è triste» → con congiuntivo.", options: ["Mi sembra che sia triste.", "Mi sembra che è triste sí.", "Mi sembra che fosse triste hoy."], answer: 0, explain: "sembrare che → congiuntivo: sia." },
    ],
    errors: [
      { q: "Correggi: «Questo quadro sembra che dipinto da un maestro.»", options: ["Questo quadro sembra dipinto da un maestro.", "Questo quadro sembra che sia dipinto.", "Questo quadro semen dipinto."], answer: 0, explain: "sembrare + participio: sembra dipinto (sin che)." },
    ],
  },
  "cu-b1-10": {
    transform: [
      { q: "Futuro anteriore: «Quando ___ (finire), chiamami.»", options: ["avrò finito", "finirò", "ho finito"], answer: 0, explain: "Anterioridad en el futuro: avrò finito." },
    ],
    errors: [
      { q: "Correggi: «Quando sarò arrivato, ti ho chiamato.»", options: ["Quando sarò arrivato, ti avrò chiamato.", "Quando sarò arrivato, ti chiamerò.", "Quando arriverò, ti ho chiamato."], answer: 1, explain: "Acción posterior: futuro simple chiamerò (ti avrò chiamato sería anterior)." },
    ],
  },
  "cu-b1-11": {
    transform: [
      { q: "Congiuntivo passato: «Sono contento che tu ___ (venire).»", options: ["sia venuto", "sei venuto", "fossi venuto"], answer: 0, explain: "Emoción sobre hecho pasado → sia venuto." },
    ],
    errors: [
      { q: "Correggi: «Mi dispiace che hai perso il treno.»", options: ["Mi dispiace che tu abbia perso il treno.", "Mi dispiace che perdevi il treno.", "Mi dispiaccia che hai perso il treno."], answer: 0, explain: "dispiacere che → congiuntivo pasado: abbia perso." },
    ],
  },
  "cu-b1-12": {
    transform: [
      { q: "Elige: «Se avessi tempo, ___ (partirei/ero partito).»", options: ["partirei", "ero partito", "sono partito"], answer: 0, explain: "Hipótesis irreal presente: se + congiuntivo imperfetto → condizionale presente." },
    ],
    errors: [
      { q: "Correggi: «Se saprei la risposta, te la direi.»", options: ["Se sapessi la risposta, te la direi.", "Se so la risposta, te la direi.", "Se saprò la risposta, te la dico."], answer: 0, explain: "se irreal → congiuntivo imperfecto: sapessi." },
    ],
  },

  /* ── B2 ─────────────────────────────────────────────────────────── */
  "cu-b2-01": {
    transform: [
      { q: "Riscrivi con congiuntivo imperfetto: «Se ero ricco, compravo una barca.»", options: ["Se fossi ricco, comprerei una barca.", "Se ero ricco, comprerei una barca.", "Se fossi ricco, compravo una barca."], answer: 0, explain: "Irreal: se + fossi → condizionale comprerei." },
    ],
    errors: [
      { q: "Correggi: «Vorrei che tu vieni con me.»", options: ["Vorrei che tu venissi con me.", "Vorrei che tu sia venuto con me.", "Vorrei che vieni con me, sì."], answer: 0, explain: "vorrei che → congiuntivo imperfecto: venissi." },
    ],
  },
  "cu-b2-02": {
    transform: [
      { q: "Pasivo con venire: «La legge è approvata dal parlamento.» (forma alternativa)", options: ["La legge viene approvata dal parlamento.", "La legge ha approvato il parlamento.", "La legge si è approvata dal parlamento."], answer: 0, explain: "En presente, venire + participio es la alternativa elegante." },
    ],
    errors: [
      { q: "Correggi: «Il report è stato scrivuto ieri.»", options: ["Il report è stato scritto ieri.", "Il report è scrivuto ieri.", "Il report ha stato scritto ieri."], answer: 0, explain: "Participio irregular de scrivere: scritto." },
    ],
  },
  "cu-b2-03": {
    transform: [
      { q: "Irreal pasado: «Se ho studiato, ho passato l'esame.»", options: ["Se avessi studiato, avrei passato l'esame.", "Se studiavo, passavo l'esame.", "Se avessi studiato, passerei l'esame."], answer: 0, explain: "Irreal pasado: se + congiuntivo trapassato → condizionale passato." },
    ],
    errors: [
      { q: "Correggi: «Se sarei arrivato prima, avrei visto tutto.»", options: ["Se fossi arrivato prima, avrei visto tutto.", "Se arrivavo prima, vedo tutto.", "Se ero arrivato, vedevo tutto."], answer: 0, explain: "essere en congiuntivo trapassato: fossi arrivato." },
    ],
  },
  "cu-b2-04": {
    transform: [
      { q: "Concesiva culta: «Anche se è stanco, continua.» → con benché.", options: ["Benché sia stanco, continua.", "Benché è stanco, continua.", "Benché stanco essere, continua."], answer: 0, explain: "benché + congiuntivo: sia." },
    ],
    errors: [
      { q: "Correggi: «Pur avendo ragione, non discute.» → ¿es correcta?", options: ["Sì: pur + gerundio es concesiva culta correcta", "No: falta di", "No: pur solo va con participio"], answer: 0, explain: "pur + gerundio = «aunque tenga razón»: construcción estándar." },
    ],
  },
  "cu-b2-05": {
    transform: [
      { q: "Estilo indirecto culto: «Disse che sarebbe venuto» ← directo era…", options: ["«Verrò»", "«Sono venuto»", "«Vengo»"], answer: 0, explain: "Futuro → condizionale compuesto en indirecto (concordanza)." },
    ],
    errors: [
      { q: "Correggi: «Sostiene che il problema non esisterebbe.» (creencia presente)", options: ["Sostiene che il problema non esista.", "Sostiene che il problema non esisteva.", "Sostiene il problema non esistere."], answer: 0, explain: "Opinión presente → congiuntivo presente: esista." },
    ],
  },
  "cu-b2-06": {
    transform: [
      { q: "Interpretación: «È possibile che il autore ___ (volere) dire altro.»", options: ["abbia voluto", "ha voluto", "volesse"], answer: 0, explain: "Posibilidad sobre un hecho pasado → congiuntivo passato: abbia voluto." },
    ],
    errors: [
      { q: "Correggi: «Il romanzo che ti parlai è un capolavoro.»", options: ["Il romanzo di cui ti parlai è un capolavoro.", "Il romanzo che di parlai è un capolavoro.", "Il romanzo cui parlai di è un capolavoro."], answer: 0, explain: "parlare DI → di cui." },
    ],
  },
  "cu-b2-07": {
    transform: [
      { q: "Nominalización: «L'azienda ha licenziato 200 dipendenti.» → «il ___ di 200 dipendenti»", options: ["il licenziamento", "il licenziare", "la licenziata"], answer: 0, explain: "licenziare → licenziamento (sustantivo de acción)." },
    ],
    errors: [
      { q: "Correggi: «La disoccupazione cresce» → forma verbal equivalente.", options: ["I disoccupati crescono di numero", "I disoccupati è cresciuto", "La disoccupazione crescere"], answer: 0, explain: "Nominalización ↔ verbo: los desempleados aumentan en número." },
    ],
  },
  "cu-b2-08": {
    transform: [
      { q: "Pregunta indirecta + subjuntivo: «Non so se ___ (essere) vero.»", options: ["sia", "è", "fosse stato"], answer: 0, explain: "Duda presente → congiuntivo: sia." },
    ],
    errors: [
      { q: "Correggi: «Mi chiedo perché lui fa così.» (matiz de extrañeza)", options: ["Mi chiedo perché lui faccia così.", "Mi chiedo perché fa così, sì.", "Mi domando perché facesse fatto così."], answer: 0, explain: "Extrañeza → congiuntivo: faccia." },
    ],
  },
  "cu-b2-09": {
    transform: [
      { q: "Passato remoto: scegliere la forma: «Dante ___ (nascere) nel 1265.»", options: ["nacque", "è nato nel 1265 (también válido)", "nasceva"], answer: 0, explain: "Passato remoto nacque; (è nato también aceptado en registro moderno)." },
    ],
    errors: [
      { q: "Correggi: «Nel 1492 Colombo scopriva l'America.»", options: ["Nel 1492 Colombo scoprì l'America.", "Nel 1492 Colombo ha scoperto l'America sempre.", "Nel 1492 Colombo scopre l'America."], answer: 0, explain: "Evento puntuale histórico → passato remoto: scoprì." },
    ],
  },
  "cu-b2-10": {
    transform: [
      { q: "Nominalización académica: «Si è verificato un aumento dei costi.» → verbal.", options: ["I costi sono aumentati.", "I costi hanno un aumento di.", "C'è stato i costi aumentati."], answer: 0, explain: "Invertir la nominalización: aumento dei costi → i costi sono aumentati." },
    ],
    errors: [
      { q: "Correggi (estilo académico): «I dati fanno vedere che…»", options: ["I dati mostrano che…", "I dati fanno vedere bene che…", "I dati fanno mostra che…"], answer: 0, explain: "En registro académico: mostrare > fare vedere." },
    ],
  },
  "cu-b2-11": {
    transform: [
      { q: "Gerundio causal: «Poiché era stanco, andò a dormire.» → con gerundio.", options: ["Essendo stanco, andò a dormire.", "Stanco essendo, andò a dormire.", "Avendo stanco, andò a dormire."], answer: 0, explain: "Causa: essendo + adjetivo." },
    ],
    errors: [
      { q: "Correggi: «Dopo che aver finito, uscì.»", options: ["Dopo aver finito, uscì.", "Dopo che finendo, uscì.", "Dopo di aver finito, uscì."], answer: 0, explain: "dopo + infinito compuesto (sin che): dopo aver finito." },
    ],
  },
  "cu-b2-12": {
    transform: [
      { q: "Cadena de subjuntivos: «Penso che sia giusto che ognuno ___ (fare) la sua parte.»", options: ["faccia", "fa", "facesse"], answer: 0, explain: "Doble subjuntivo: sia giusto che → faccia." },
    ],
    errors: [
      { q: "Correggi: «Benché il risultato era buono, nessuno si è complimentato.»", options: ["Benché il risultato fosse buono, nessuno si è complimentato.", "Benché il risultato è stato buono, nessuno.", "Benché buono il risultato, complimenti."], answer: 0, explain: "benché → congiuntivo imperfecto: fosse." },
    ],
  },

  /* ── C1 ─────────────────────────────────────────────────────────── */
  "cu-c1-01": {
    transform: [
      { q: "Reformula académicamente: «Secondo me, questa idea è sbagliata.»", options: ["A mio avviso, questa ipotesi risulta infondata.", "Io penso questa idea sbagliata tanto.", "Questa idea, secondo me, è sbagliatissima."], answer: 0, explain: "Registro académico: a mio avviso + ipotesi infondata." },
    ],
    errors: [
      { q: "Correggi (cohesión): «Il fenomeno è complesso. Il fenomeno richiede studio.»", options: ["Il fenomeno è complesso e richiede studio.", "Il fenomeno è complesso, il fenomeno richiede studio.", "Il fenomeno complesso richiede lo studio il fenomeno."], answer: 0, explain: "Evitar repetición: pronombre o elisión en segunda cláusula." },
    ],
  },
  "cu-c1-02": {
    transform: [
      { q: "Final: «Scrivo per informarti.» → forma culta con finali.", options: ["Ti scrivo al fine di informarti.", "Ti scrivo per informazione mia.", "Scrivo informarti fine."], answer: 0, explain: "al fine di + infinito: finalidad formal." },
    ],
    errors: [
      { q: "Correggi (trama lógica): «Sebbene i dati, la tesi regge.»", options: ["Nonostante i dati, la tesi regge.", "Sebbene i dati sono, la tesi regge.", "Sebbene i dati, però la tesi regge comunque."], answer: 0, explain: "sebbene exige verbo en subjuntivo; con sustantivo → nonostante." },
    ],
  },
  "cu-c1-03": {
    transform: [
      { q: "Titular: «Il ministro ha presentato le dimissioni» → nominal.", options: ["Le dimissioni del ministro", "Il ministro dimissionato", "Presentando le dimissioni il ministro"], answer: 0, explain: "Sintaxis del titular: sustantivo + de + agente, sin verbo." },
    ],
    errors: [
      { q: "Correggi (título): «Il nuovo piano per la città è stato approvato ieri dal consiglio» → sintetizar.", options: ["Approvato il piano città", "Il piano è approvato ieri dal consiglio comunale", "Consiglio approva il piano città nuovo ieri"], answer: 0, explain: "Titular: participio antepuesto, elipsis del auxiliar." },
    ],
  },
  "cu-c1-04": {
    transform: [
      { q: "Diplomacia: «Lei ha sbagliato.» → condizionale compuesto suave.", options: ["Forse avremmo potuto gestirla diversamente.", "Lei ha sbagliato, forse, un poco.", "Avrebbe dovuto non sbagliare."], answer: 0, explain: "Nosotros + condizionale compuesto: suaviza sin acusar." },
    ],
    errors: [
      { q: "Correggi (diplomacia): «Avresti dovuto dirmelo!» → aún más suave.", options: ["Forse sarebbe stato utile saperlo prima.", "Avresti dovuto dirmelo, eh!", "Dovresti avermelo detto magari."], answer: 0, explain: "Impersonal + condizionale: elimina la acusación directa." },
    ],
  },
  "cu-c1-05": {
    transform: [
      { q: "Trapassato remoto: «Appena ___ (arrivare), cominciò a nevicare.»", options: ["fu arrivato", "era arrivato appena", "è arrivato"], answer: 0, explain: "Appena/dopo che + trapassato remoto (fu arrivato) + passato remoto." },
    ],
    errors: [
      { q: "Correggi: «Dopo che ebbe finito, ha mangiato.» (narración histórica)", options: ["Dopo che ebbe finito, mangiò.", "Dopo che aveva finito, ha mangiato.", "Dopo che ebbe finito, mangerà."], answer: 0, explain: "Concordancia histórica: passato remoto en ambas." },
    ],
  },
  "cu-c1-06": {
    transform: [
      { q: "Consecutiva enfática: «Era ___ stanco che si addormentò in piedi.»", options: ["così", "tanto che", "molto"], answer: 0, explain: "così… che / tanto… che: consecutiva de grado." },
    ],
    errors: [
      { q: "Correggi: «Il romanzo è talmente bello che non posso smettere di leggerlo.» → intensificador culto.", options: ["di una bellezza tale da non poterlo smettere di leggere", "talmente bello che smetto", "bello tale che non smetto"], answer: 0, explain: "di + sustantivo + tale da: variante culta de la consecutiva." },
    ],
  },
  "cu-c1-07": {
    transform: [
      { q: "Pasivo jurídico: «Il contratto sarà ___ (firmare) dalle parti.»", options: ["firmato", "firmando", "da firmare sempre"], answer: 0, explain: "Futuro pasivo: sarà firmato." },
    ],
    errors: [
      { q: "Correggi (lenguaje jurídico): «Il debitore deve pagare entro 30 giorni.» → con obbligo impersonal.", options: ["Il pagamento dovrà avvenire entro 30 giorni.", "Il debitore pagherà entro 30 giorni forse.", "Si deve che il debitore paga."], answer: 0, explain: "Nominalización + dovere: estándar del burocratese." },
    ],
  },
  "cu-c1-08": {
    transform: [
      { q: "Dislocazione a sinistra: «Il caffè, lo prendo amaro.» → ¿cuál es el clítico?", options: ["lo (duplica il caffè)", "gli", "ne"], answer: 0, explain: "Tema dislocado + clítico resuntivo: lo." },
    ],
    errors: [
      { q: "Correggi: «A Marco, gli ho detto tutto.» → marcação estándar.", options: ["A Marco ho detto tutto.", "A Marco, ho detto tutto gli.", "Marco gli ho detto a lui."], answer: 0, explain: "En registro cuidado, la dislocación ya marca el tema: sobra gli tras coma." },
    ],
  },
  "cu-c1-09": {
    transform: [
      { q: "Jerarquía oral: «Ci sono tre punti. Il primo…» → conçector de apertura.", options: ["In primo luogo", "Primo di tutto che", "Come primo punto primo"], answer: 0, explain: "in primo luogo / in secondo luogo: cadena oral formal." },
    ],
    errors: [
      { q: "Correggi (énfasis): «È importante la costanza.» → estructura enfática.", options: ["È la costanza ad essere importante.", "È importante è la costanza.", "Importante la costanza è."], answer: 0, explain: "Scissa: è… ad essere: foco sobre el sujeto." },
    ],
  },
  "cu-c1-10": {
    transform: [
      { q: "Reformula: «Se avessi più tempo, approfondirei» → ipotesi passata.", options: ["Se avessi avuto più tempo, avrei approfondito.", "Se avevo più tempo, avrei approfondito.", "Se avrò tempo, approfondirò."], answer: 0, explain: "Irreal pasado: se + trapassato subjuntivo → condizionale passato." },
    ],
    errors: [
      { q: "Correggi: «Qualora fosse possibile, vorremmo un incontro.» → ¿registro?", options: ["Correcto y formal (condicional diplomático)", "Error: falta «se»", "Mejor: se è possibile vorremmo"], answer: 0, explain: "qualora = se formal: correcto en registro alto." },
    ],
  },

  /* ── C2 ─────────────────────────────────────────────────────────── */
  "cu-c2-01": {
    transform: [
      { q: "Del burocratese al neostandard: «In ottemperanza alla normativa vigente…»", options: ["Come previsto dalla legge…", "In ottemperanza sempre vigente…", "Secondo normativa che vigila…"], answer: 0, explain: "Neostandard: como prevé la ley — claro y directo." },
    ],
    errors: [
      { q: "Correggi (registro): «Il documento redatto da noi è stato trasmesso all'ente destinatario.» → oral.", options: ["Abbiamo mandato il documento all'ufficio.", "Il documento noi trasmesso ente.", "È stato da noi trasmesso il documento."], answer: 0, explain: "Registro oral: sujeto agente + verbo simple + objeto." },
    ],
  },
  "cu-c2-02": {
    transform: [
      { q: "Sintaxis de época: «Fu tale il suo dolore che…» → modernízala.", options: ["Il suo dolore fu così grande che…", "Tale dolore suo che fu…", "Fu dolore tale del suo che…"], answer: 0, explain: "Estructura invertida arcaica → orden moderno: così… che." },
    ],
    errors: [
      { q: "Correggi: «Egli disse ch'era tardi.» → neostandard.", options: ["Disse che era tardi.", "Egli disse che era tardi e presto.", "Lui diceva ch'era tardi lui."], answer: 0, explain: "Neostandard: elisión de sujeto egli, ch'→che." },
    ],
  },
  "cu-c2-03": {
    transform: [
      { q: "Litote: «Non è stato un successo.» → qué comunica?", options: ["Fue un fracaso, dicho con elegancia", "Fue exactamente un éxito medio", "No fue nada"], answer: 0, explain: "Litote: negar el contrario para atenuar." },
    ],
    errors: [
      { q: "Correggi la figura: «È morto di sonno» → iperbole correcta sería…", options: ["Ho un sonno da morire", "Sono morto davvero", "Il sonno è mortale médico"], answer: 0, explain: "Iperbole exagerada viva: «un sonno da morire»." },
    ],
  },
  "cu-c2-04": {
    transform: [
      { q: "Consecutiva de pathos: «Gridò così forte che…» → variante culta con «si che».", options: ["Gridò tanto forte, si che tutti si voltarono", "Gridò forte si che tutti", "Così forte gridò si che"], answer: 0, explain: "«si che» consecutiva culta/antiguizante (raro hoy: registro literario)." },
    ],
    errors: [
      { q: "Correggi: «Era così affascinante che nessuno poteva non guardarlo» → con doppia negación retórica.", options: ["Nessuno poteva fare a meno di guardarlo", "Nessuno non poteva guardarlo", "Tutti non guardavano lui"], answer: 0, explain: "fare a meno di = negación elegante sin doble negación confusa." },
    ],
  },
  "cu-c2-05": {
    transform: [
      { q: "Falso amigo temporal: IT «attualmente» = ?", options: ["actualmente (en la actualidad)", "eventualmente", "temporalmente"], answer: 0, explain: "attualmente = actualmente; eventualmente = posiblemente." },
    ],
    errors: [
      { q: "Correggi la traducción: ES «eventualmente iré» → IT.", options: ["Forse andrò / Potrei andare", "Eventualmente andrò", "Attualmente andrò"], answer: 0, explain: "IT eventualmente ≠ ES eventualmente: significa «si acaso/posiblemente»." },
    ],
  },
  "cu-c2-06": {
    transform: [
      { q: "Neostandard: «Abbiamo dovuto aspettare due ore» → variante hablada con si.", options: ["Si è dovuto aspettare due ore", "Si ha dovuto aspettare due ore", "Ci si è dovuto aspettarle"], answer: 0, explain: "si impersonal + dovere: si è dovuto (concordación del participio)." },
    ],
    errors: [
      { q: "Correggi: «Ci siamo visti domani» → ¿qué tiempo corresponde?", options: ["Ci vediamo domani / Ci siamo visti ieri", "Ci siamo visti domani è correcto", "Ci vedevamo domani"], answer: 0, explain: "Passato prossimo jamás con «domani»: futuro o pasado según el adverbio." },
    ],
  },
  "cu-c2-07": {
    transform: [
      { q: "Pacto narrativo: «Era una notte buia e tempestosa…» → ¿qué tiempo domina y por qué?", options: ["Imperfetto: escena de fondo narrativo", "Passato remoto: acciones puntuales", "Presente: actualidad"], answer: 0, explain: "La apertura describe el decorado → imperfecto (fondo)." },
    ],
    errors: [
      { q: "Correggi: «Entrò nella stanza. C'era un uomo che lo guardava.» → ¿coherencia?", options: ["Correcta: entrada puntual + fondo imperfecto", "Error: todo passato remoto", "Error: todo imperfetto"], answer: 0, explain: "Mezcla canónica: remoto para eventos, imperfecto para escena." },
    ],
  },
  "cu-c2-08": {
    transform: [
      { q: "Síntesis C2: «Nonostante le difficoltà incontrate, il progetto è stato portato a termine.» → oral.", options: ["Anche se è stato difficile, abbiamo finito il progetto.", "Nonostante difficoltà portate a termine", "Il progetto finito nonostante che difficile"], answer: 0, explain: "Registro oral: aunque + adverbio, sujeto agente explícito." },
    ],
    errors: [
      { q: "Correggi: «Sarei dell'idea che si potrebbe fare meglio» → más directo sin perder formalidad.", options: ["Penso si possa fare meglio", "Sarei idea che meglio fare", "Si potrebbe meglio fare secondo me idea"], answer: 0, explain: "Simplificar la cadena modal: penso si possa." },
    ],
  },
};
