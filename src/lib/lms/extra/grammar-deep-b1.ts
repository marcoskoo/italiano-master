import type { CbGrammarDeep } from "./grammar-deep";

/* ═══ v9.15 · Grammatica approfondita · B1 (cu-b1-01 … cu-b1-12) ═══ */

export const GD_B1: Record<string, CbGrammarDeep> = {
  "cu-b1-01": {
    sezioni: [
      { t: "Come si forma", body: "La narración larga alterna imperfetto y passato prossimo según el papel de cada acción. El imperfetto pinta el escenario: hora, clima, lugares, personas, estados («Era una sera d'estate, pioveva piano, eravamo stanchi»). Il prossimo empuja la trama: los eventos que ocurren uno tras otro («Ad un tratto si è aperta la porta, è entrato un gatto, abbiamo urlato»)." },
      { t: "Quando si usa", body: "Regla práctica: si puedes preguntar «¿y qué pasó después?», es prossimo; si puedes preguntar «¿cómo era? ¿qué estaba pasando?», es imperfetto. La interrupción clásica: mientras (imperfetto) + evento (prossimo): «Mentre camminavamo, abbiamo visto un concerto in piazza». Los conectores del relato: allora, poi, ad un tratto, quindi, alla fine." },
      { t: "Attenzione! · trampas para hispanohablantes", body: "El español hablante ya distingue imperfecto/indefinido, así que la lógica te ayuda; el peligro es el pretérito perfecto español «he visto», que SIEMPRE es prossimo italiano, y las descripciones con esserci: «c'era molta gente» (imperfetto porque describe). Otro fallo común: encadenar todo en prossimo («sono entrato, era bello, ho mangiato…») — la historia pierde el fondo y suena a telegrama." },
      { t: "Nel parlato", body: "Los italianos abren las historias con el imperfecto de escena: «Ti racconto: eravamo in vacanza, faceva caldissimo…» y solo entonces llegan los eventos. Ese contraste de colores es el secreto del racconto italiano." },
    ],
    esempi: [
      { it: "Era una sera d'estate e pioveva piano sulla città.", es: "Era una noche de verano y llovía suavemente sobre la ciudad." },
      { it: "Mentre camminavamo, abbiamo visto un concerto in piazza.", es: "Mientras caminábamos, vimos un concierto en la plaza." },
      { it: "Ad un tratto si è aperta la porta ed è entrato un gatto nero.", es: "De pronto se abrió la puerta y entró un gato negro." },
      { it: "Non sapevamo cosa dire: eravamo senza parole.", es: "No sabíamos qué decir: estábamos sin palabras." },
      { it: "Abbiamo preso il primo treno e alla fine siamo arrivati a Firenze.", es: "Tomamos el primer tren y al final llegamos a Florencia." },
    ],
    usi: [
      { q: "El escenario de la historia (clima, hora, lugares):", options: ["imperfetto", "passato prossimo", "presente"], answer: 0, explain: "El fondo se pinta con imperfetto: era, pioveva, c'era." },
      { q: "«Mientras dormía, sonó el teléfono»:", options: ["Mentre dormivo, ha suonato il telefono.", "Mentre ho dormito, suonava il telefono.", "Mentre dormo, ha suonato il telefono."], answer: 0, explain: "Acción en curso (imperfetto) interrumpida por evento (prossimo)." },
    ],
  },

  "cu-b1-02": {
    sezioni: [
      { t: "Come si forma", body: "Il condizionale presente: raíz del futuro + -ei, -esti, -ebbe, -emmo, -este, -ebbero (mangerei, verrei, avrei). El rey de la cortesía es vorrei (quisiera), forma de condicional de volere; sus hermanos de cortesía: potresti/potrebbe, dovresti/dovrebbe, mi piacerebbe." },
      { t: "Quando si usa", body: "Peticiones suaves («Vorrei un tavolo per due»), deseos («Mi piacerebbe visitare Venezia»), consejos («Dovresti vedere quel film»), opiniones atenuadas («Sarebbe meglio prenotare»). En el restaurante, vorrei transforma el «voglio» (demanda) en pedido educado; con «Le piacerebbe…?» el camarero te ofrece algo." },
      { t: "Attenzione! · trampas para hispanohablantes", body: "El español «quisiera» es subjuntivo imperfecto; el italiano lo traduce con condicional vorrei — no busques un subjuntivo aquí. «Querría» existe en español pero suena raro; vorrei es normalísimo en italiano. Cuidado con la pronunciación: vorrei lleva la fuerza en la é inicial y la ei final suena «éi» cerrada. Y «me gustaría» = mi piacerebbe + infinitivo, jamás «mi piacerei»." },
      { t: "Nel parlato", body: "La cortesía italiana sube de nivel con el condizionale compuesto: «Avrei bisogno di aiuto» (necesitaría ayuda), «Le andrebbe un caffè?» (le apetecería un café). En las tiendas: «Vorrei provare questa camicia»." },
    ],
    esempi: [
      { it: "Vorrei un tavolo per due, per favore.", es: "Quisiera una mesa para dos, por favor." },
      { it: "Dovresti vedere quel film: è bellissimo davvero.", es: "Deberías ver esa película: es realmente bellísima." },
      { it: "Potresti ripetere più lentamente, per piacere?", es: "¿Podrías repetir más despacio, por favor?" },
      { it: "Sarebbe fantastico visitare Venezia in inverno, con la nebbia.", es: "Sería fantástico visitar Venecia en invierno, con la niebla." },
      { it: "Mi piacerebbe tanto imparare il dialetto napoletano.", es: "Me gustaría tanto aprender el dialecto napolitano." },
    ],
    usi: [
      { q: "«Quisiera un agua» (restaurante):", options: ["Vorrei un'acqua.", "Voglio un'acqua gentile.", "Vorrei è acqua."], answer: 0, explain: "Cortesía estándar: vorrei + nombre." },
      { q: "«Deberías descansar más»:", options: ["Dovresti riposare di più.", "Devi riposare di più per favore.", "Riposeresti di più."], answer: 0, explain: "Consejo = dovresti + infinito." },
    ],
  },

  "cu-b1-03": {
    sezioni: [
      { t: "Come si forma", body: "Il congiuntivo presente: -are → -i, -i, -i, -iamo, -iate, -ino (parli, parli, parli, parliamo, parliate, parlino); -ere/-ire → -a, -a, -a, -iamo, -iate, -ano (prenda, venga, finisca). Irregulares esenciales: essere (sia), avere (abbia), andare (vada), fare (faccia), stare (stia), dare (dia), dire (dica)." },
      { t: "Quando si usa", body: "Obligatorio tras las expresiones de opinión no segura y de deseo: penso che, credo che, mi sembra che, spero che, è possibile che, benché, sebbene, affinché, prima che, senza che. También con superlativos relativos: «È il migliore che ci sia». La regla de oro: dos sujetos distintos + nexo che + verbo de opinión/deseo → subjuntivo." },
      { t: "Attenzione! · trampas para hispanohablantes", body: "AQUÍ ESTÁ LA GRAN DIFERENCIA con el español: «creo que es» español lleva INDICATIVO, pero «penso che sia» italiano exige CONGIUNTIVO. En cambio, con verbos de certeza ambas lenguas usan indicativo: «so che è vero» = «sé que es verdad». La duda negada también cambia: «non penso che sia» mantiene subjuntivo. Y con «secondo me» (según yo) el italiano usa indicativo: «secondo me è meglio»." },
      { t: "Nel parlato", body: "En el habla real oirás el subjuntivo presente en frases hechas: «speriamo che vada bene», «magari fosse vero», «comunque sia». Para opinar suave: «Credo che abbia ragione lui»." },
    ],
    esempi: [
      { it: "Penso che questo ristorante sia il migliore della città.", es: "Creo que este restaurante es el mejor de la ciudad." },
      { it: "Credo che Marco abbia ragione questa volta.", es: "Creo que Marco tiene razón esta vez." },
      { it: "È possibile che vengano anche i bambini alla festa.", es: "Es posible que vengan también los niños a la fiesta." },
      { it: "Benché sia tardi, il museo è ancora aperto.", es: "Aunque es tarde, el museo sigue abierto." },
      { it: "Spero che tu stia meglio adesso.", es: "Espero que estés mejor ahora." },
    ],
    usi: [
      { q: "«Creo que es caro»:", options: ["Credo che sia caro.", "Credo che è caro.", "Credo sia caro è."], answer: 0, explain: "Opinión con penso/credo + che → congiuntivo." },
      { q: "Tras «so che» (sé que):", options: ["indicativo", "congiuntivo", "condizionale"], answer: 0, explain: "Certeza → indicativo en italiano (y en español)." },
    ],
  },

  "cu-b1-04": {
    sezioni: [
      { t: "Come si forma", body: "Los pronombres combinados siguen el orden: indirecto + directo → me lo, te lo, glielo, ce lo, ve lo. Glielo sirve para a él, a ella y a usted (gli/le + lo). Con el imperativo, se unen al final y doblan la consonante: dammelo! (dámelo), dimmelo! (dímelo), fammelo vedere! (déjame verlo). Con l'infinito: darmelo, dirlo." },
      { t: "Quando si usa", body: "Responden evitando repeticiones: «Mi passi il sale? Sì, te lo passo subito». El «glielo» es el caballo de batalla del italiano cotidiano: «Hai parlato con Maria? Sì, gliel'ho detto» (se lo dije [a ella]). El passivo utile (o si passivante) expresa procesos generales: «si dice», «si sa», «è fatto a mano»." },
      { t: "Attenzione! · trampas para hispanohablantes", body: "El español transforma «le lo» en «se lo»; el italiano NO: combina limpiamente en glielo. Es el error más persistente de nivel B1: decir «se lo dico» por glielo dico. El raddoppiamento del imperativo (dimmi → dimmelo) tampoco existe en español. Con el passato prossimo, el participio concuerda con el directo: «gliel'ho dettA» (la carta), «gliel'ho dettO» (il segreto)." },
      { t: "Nel parlato", body: "En la mesa: «Passami il pane… no, dammelo tagliato, grazie!». En el trabajo: «Le mando il file? Sì, me lo mandi entro stasera»." },
    ],
    esempi: [
      { it: "Questo libro? Te lo presto volentieri fino a sabato.", es: "¿Este libro? Te lo presto encantado hasta el sábado." },
      { it: "Glielo ho già detto tre volte, non capisce!", es: "Se lo he dicho ya tres veces, ¡no entiende!" },
      { it: "Ce la mandi domani per email, per favore?", es: "¿Nos la envías mañana por correo electrónico, por favor?" },
      { it: "Dammi la mano e non guardare giù.", es: "Dame la mano y no mires abajo." },
      { it: "Quel formaggio è fatto a mano in montagna.", es: "Ese queso es hecho a mano en la montaña." },
    ],
    usi: [
      { q: "«Se lo digo (a él)»:", options: ["Glielo dico.", "Gli lo dico.", "Se lo dico a lui."], answer: 0, explain: "gli/le + lo → glielo; el italiano no usa 'se' combinado." },
      { q: "«¡Dámelo!»:", options: ["Dammelo!", "Dalo a me subito!", "Me lo dai!"], answer: 0, explain: "Imperativo + enclítico con consonante doble: dammi + lo → dammelo." },
    ],
  },

  "cu-b1-05": {
    sezioni: [
      { t: "Come si forma", body: "Conectores esenciales del nivel: però (sin embargo), quindi (por lo tanto), infatti (de hecho), invece (en cambio), mentre (mientras), siccome (ya que, en primera posición), mentre invece, tuttavia. Las propuestas amables se construyen con: che ne dici di + infinito?, ti va di + infinito?, potremmo + infinito, perché non + presente?" },
      { t: "Quando si usa", body: "Siccome introduce la causa al principio de la frase («Siccome pioveva, siamo rimasti a casa») — como el español «como llovía…» pero SIN coma en italiano antes del efecto. infatti confirma lo anterior con un dato («Era stanco; infatti è andato a dormire»); invece contrapone («Io resto, invece tu vai»)." },
      { t: "Attenzione! · trampas para hispanohablantes", body: "«de hecho» = infatti, NO «in fact» ni «de facto». «sin embargo» = però o tuttavia, no «comunque» (que es «de todos modos»). siccome siempre en cabeza de frase; poiché (ya que) va en cualquier posición pero es más formal. «¿te apetece?» se dice ti va di…? + infinitivo — calcar «ti piace uscire?» para proponer suena a pregunta sobre gustos generales, no a invitación." },
      { t: "Nel parlato", body: "La propuesta italiana por excelencia: «Che ne dici di un caffè?» o «Ti va di fare due passi?» (¿te apetece dar una vuelta?). Acepta con «Volentieri!» y rechaza con «Mi piacerebbe, ma…» + excusa en condicional." },
    ],
    esempi: [
      { it: "Siccome pioveva forte, siamo rimasti a casa tutto il giorno.", es: "Como llovía fuerte, nos quedamos en casa todo el día." },
      { it: "Che ne dici di andare al cinema stasera?", es: "¿Qué te parece ir al cine esta noche?" },
      { it: "Ti va di fare una passeggiata lungo il fiume?", es: "¿Te apetece dar un paseo por el río?" },
      { it: "Era stanco; infatti è andato a dormire subito.", es: "Estaba cansado; de hecho se fue a dormir enseguida." },
      { it: "Potremmo provare quel ristorante nuovo dietro l'angolo.", es: "Podríamos probar ese restaurante nuevo a la vuelta de la esquina." },
    ],
    usi: [
      { q: "«¿Te apetece salir esta noche?» (invitación):", options: ["Ti va di uscire stasera?", "Ti piace uscire stasera?", "Va tu di uscire stasera?"], answer: 0, explain: "ti va di + infinito es la invitación natural." },
      { q: "«de hecho»:", options: ["infatti", "però", "quindi"], answer: 0, explain: "infatti confirma con un dato; però contrapone y quindi concluye." },
    ],
  },

  "cu-b1-06": {
    sezioni: [
      { t: "Come si forma", body: "Las relativas usan che (sujeto u objeto directo, invariable), cui (con preposición: a cui, di cui, con cui, in cui), dove (lugar) y il quale/i quali (formal o desambiguación). No existe distinción entre «que» y «quien»: che cubre personas y cosas. La preposición va DELANTE de cui, nunca al final: «la persona a cui ho scritto»." },
      { t: "Quando si usa", body: "che define («Il film che ho visto ieri è italiano»), di cui introduce de qué/sobre qué («Il film di cui ti ho parlato» = la película de la que te hablé), in cui el lugar figurado («il periodo in cui ho vissuto a Roma»), dove el lugar físico («il bar dove ci siamo conosciuti»)." },
      { t: "Attenzione! · trampas para hispanohablantes", body: "El español puede decir «el chico QUE vi» y «el chico A QUIEN vi»; el italiano usa che para ambos (l'amico che ho visto) porque el objeto directo no lleva preposición. Solo cuando hay preposición aparece cui: «l'amico con cui viaggio». Error típico: usar che con preposición pegada al final («il film che ti ho parlato» ✗) → di cui ti ho parlato. E il quale no es más elegante por sí solo: se reserva para registros formales." },
      { t: "Nel parlato", body: "Los italianos encadenan con relative coloquiales: «Quel posto dove si mangia bene che ti dicevo…». dominar di cui/dove te da un italiano de descripciones precisas." },
    ],
    esempi: [
      { it: "La ragazza che parla con Marco è mia cugina.", es: "La chica que habla con Marco es mi prima." },
      { it: "Il film di cui ti ho parlato è di un regista napoletano.", es: "La película de la que te hablé es de un director napolitano." },
      { it: "Il bar dove ci siamo conosciuti ha chiuso, che tristezza.", es: "El bar donde nos conocimos ha cerrado, qué tristeza." },
      { it: "La persona a cui ho scritto non ha ancora risposto.", es: "La persona a la que escribí todavía no ha respondido." },
      { it: "È un amico con cui puoi parlare di tutto, davvero.", es: "Es un amigo con el que puedes hablar de todo, de verdad." },
    ],
    usi: [
      { q: "«la ciudad en la que vivo»:", options: ["la città in cui vivo", "la città che vivo", "la città dove vivo in"], answer: 0, explain: "Preposición + cui: in cui." },
      { q: "«el amigo al que vi» (objeto directo):", options: ["l'amico che ho visto", "l'amico a cui ho visto", "l'amico cui visto"], answer: 0, explain: "Objeto directo sin preposición → che." },
    ],
  },

  "cu-b1-07": {
    sezioni: [
      { t: "Come si forma", body: "Il discorso indiretto traslada los tiempos: presente → imperfetto («Sono stanco» → Ha detto che era stanco), passato prossimo → trapassato («Ho mangiato» → Ha detto che aveva mangiato), futuro → condizionale composto («Verrò» → Ha detto che sarebbe venuto). Los marcadores también cambian: domani → il giorno dopo, oggi → quel giorno, qui → lì, adesso → allora." },
      { t: "Quando si usa", body: "Para contar lo que otros dijeron sin citar literalmente: noticias («Il giornale ha annunciato che il volo era in ritardo»), chismes («Mi ha detto che si sono lasciati»), encargos («Mi ha chiesto se volessi un caffè»). Las preguntas indirectas van con se (si): «Mi ha chiesto se venivo»." },
      { t: "Attenzione! · trampas para hispanohablantes", body: "El mapeo con el español es casi total («dijo que tenía hambre» = ha detto che aveva fame), así que tu español te guía. La diferencia más visible: el futuro español «dijo que vendría» usa condicional simple, el italiano condizionale composto (sarebbe venuto). Y cuidado con las preguntas: el español «me preguntó si quería» = mi ha chiesto se volessi — el se italiano (sin acento) no es el «sé» reflexivo." },
      { t: "Nel parlato", body: "En el habla real, el italiano a veces mantiene el presente si la información sigue vigente: «Dice che il negozio apre alle nove». La concordancia estricta de tiempos es más bien de la lengua escrita y de las noticias." },
    ],
    esempi: [
      { it: "Ha detto che arrivava più tardi, come sempre.", es: "Dijo que llegaba más tarde, como siempre." },
      { it: "Mi ha chiesto se volessi un caffè ma ho detto di no.", es: "Me preguntó si quería un café pero dije que no." },
      { it: "Ci hanno raccontato che il volo era in ritardo di due ore.", es: "Nos contaron que el vuelo iba con dos horas de retraso." },
      { it: "Ha promesso che mi avrebbe scritto appena arrivata.", es: "Prometió que me escribiría en cuanto llegara." },
      { it: "Hanno detto che erano già stati a Roma tre volte.", es: "Dijeron que ya habían estado en Roma tres veces." },
    ],
    usi: [
      { q: "«Dijo: tengo hambre» → indirecto:", options: ["Ha detto che aveva fame.", "Ha detto che ha fame.", "Ha detto che era fame."], answer: 0, explain: "presente → imperfetto en discorso indiretto." },
      { q: "«Me preguntó si venía»:", options: ["Mi ha chiesto se venivo.", "Mi ha chiesto se vengo.", "Mi ha domandato che venivo."], answer: 0, explain: "Pregunta indirecta con se + imperfetto." },
    ],
  },

  "cu-b1-08": {
    sezioni: [
      { t: "Come si forma", body: "Con el imperativo, los pronombres se unen al final y doblan la consonante inicial: di' + mi → dimmi, da' + mi → dammi, fa' + mi → fammi, sta' + ci → stacci. Con los demás verbos no hay doblado: mangialo, prendilo, alzati. El negativo informal usa non + infinitivo con el pronombre unido: non farlo!, non pensarci!, non preoccuparti!." },
      { t: "Quando si usa", body: "Para dar consejos prácticos: «Rilassati e respira», «Prova a chiamarlo domani», «Ti conviene prenotare» (te conviene). La escala de consejo italiano: prova a… (prueba a) < ti conviene… (te conviene) < dovresti… (deberías) < devi assolutamente… (tienes que, urgent)." },
      { t: "Attenzione! · trampas para hispanohablantes", body: "El español negativo usa subjuntivo («no lo hagas»); el italiano usa infinitivo: non farlo — nunca «non fare lo» separado ni «non lo fare». El doblado de consonante (dimmi, dammi, fammi, diglielo con triple cambio) es puramente fonético pero obligatorio: «di mi» ✗ suena extranjero. Y el imperativo formal con pronombres: me lo dica!, se lo giuri!." },
      { t: "Nel parlato", body: "El consejo italiano cotidiano abre con imperativos suaves: «Senti, prova a rilassarti: respira e non pensarci. Vedrai che va tutto bene»." },
    ],
    esempi: [
      { it: "Rilassati e respira lentamente, con me.", es: "Relájate y respira lentamente, conmigo." },
      { it: "Prova a guardare il tramonto: ti sentirai subito meglio.", es: "Prueba a mirar el atardecer: te sentirás enseguida mejor." },
      { it: "Non pensarci troppo, dai!", es: "No lo pienses demasiado, ¡venga!" },
      { it: "Dimmi la verità, per favore.", es: "Dime la verdad, por favor." },
      { it: "Ti conviene prenotare prima, il posto si riempie.", es: "Te conviene reservar antes, el sitio se llena." },
    ],
    usi: [
      { q: "«¡Dímelo!»:", options: ["Dimmelo!", "Di a me lo!", "Lo dimmi!"], answer: 0, explain: "di' + mi + lo → dimmelo, con consonante doble." },
      { q: "«No lo hagas» (a un amigo):", options: ["Non farlo!", "Non faccia!", "Non fare lo!"], answer: 0, explain: "Negativo informal = non + infinitivo + pronombre unido." },
    ],
  },

  "cu-b1-09": {
    sezioni: [
      { t: "Come si forma", body: "Tre estructuras: (1) sembra + adjettivo/sustantivo sin che: «Sembra stanco», «Sembra un dipinto»; (2) sembra che + congiuntivo: «Sembra che piova»; (3) mi sembra che + congiuntivo para parecer personal: «Mi sembra che sia di Caravaggio». El impersonale si forma con sembra/pare (equivalentes); pare es algo más literario." },
      { t: "Quando si usa", body: "Es la lengua de las impresiones y las hipótesis estéticas: ante un cuadro («Sembra che l'artista abbia usato solo tre colori»), ante el cielo («Sembra che stia per piovere»), ante una situación («Mi sembra che abbiano ragione loro»). Con sustantivo directo: «Mi sembra un capolavoro»." },
      { t: "Attenzione! · trampas para hispanohablantes", body: "El español dice «me parece que ES» con indicativo; el italiano exige «mi sembra che SIA» con subjuntivo — otra vez la asimetría del verbo parecer. Y no mezcles: «sembra stanco» (sin que) nunca lleva subjuntivo porque no hay segunda oración. «Parece que llueve» = sembra che piova; «parece cansado» = sembra stanco." },
      { t: "Nel parlato", body: "Ante el arte los italianos improvisan con estas estructuras: «Guarda: sembra che la luce venga da sinistra», «Mi sembra un quadro del primo Rinascimento, guarda le mani»." },
    ],
    esempi: [
      { it: "Sembra che stia per piovere, guardiamo le nuvole.", es: "Pare que está a punto de llover, mira las nubes." },
      { it: "Mi sembra che quest'opera sia di Caravaggio.", es: "Me parece que esta obra es de Caravaggio." },
      { it: "Sembra molto tranquillo, quel quadro sul muro.", es: "Parece muy tranquilo, ese cuadro de la pared." },
      { it: "Sembra che l'artista abbia usato solo tre colori.", es: "Parece que el artista ha usado solo tres colores." },
      { it: "Mi sembra un capolavoro, sinceramente.", es: "Me parece una obra maestra, sinceramente." },
    ],
    usi: [
      { q: "«Parece que es caro»:", options: ["Sembra che sia caro.", "Sembra che è caro.", "Sembra essere che caro."], answer: 0, explain: "sembra che + congiuntivo." },
      { q: "«Parece cansado» (sin segunda oración):", options: ["Sembra stanco.", "Sembra che stanco.", "Sembrare stanco."], answer: 0, explain: "Sin che → sembra + aggettivo directo." },
    ],
  },

  "cu-b1-10": {
    sezioni: [
      { t: "Come si forma", body: "Il futuro anteriore = futuro de avere/essere + participio: avrò finito, sarò tornato, avremo visitato. Con essere el participio concuerda: sarà arrivata. La marca típica del futuro anterior es la doble futura: «Quando avrai finito, chiamami» (cuando hayas terminado)." },
      { t: "Quando si usa", body: "Dos usos: (1) futuro anterior a otro futuro («Entro sabato avremo visitato dieci musei»); (2) CONJETURA sobre el pasado o el presente: «Non risponde: avrà perso il telefono» (no responde: habrá perdido el teléfono), «Saranno già le cinque» (serán ya las cinco). El segundo uso es omnipresente en el habla." },
      { t: "Attenzione! · trampas para hispanohablantes", body: "El futuro de conjetura español («serán las cinco», «estará durmiendo») existe también en italiano, pero el italiano lo usa con más frecuencia y lo extiende al pasado con il futuro anteriore: «avrà dimenticato l'orario» = habrá olvidado la hora (conjetura sobre un hecho pasado). No lo confundas con il condizionale composto, que es la hipótesis irreal («avrei dormito» = habría dormido)." },
      { t: "Nel parlato", body: "La conjetura cotidiana: «Dove sono? Saranno al bar», «Avranno sbagliato orario, succede». Para planes encadenados: «Quando sarà arrivato tutto, ti faccio sapere»." },
    ],
    esempi: [
      { it: "Quando avrai finito i compiti, chiamami.", es: "Cuando hayas terminado los deberes, llámame." },
      { it: "A quell'ora saranno già partiti per l'aeroporto.", es: "A esa hora ya se habrán ido al aeropuerto." },
      { it: "Non risponde: avrà perso di nuovo il telefono.", es: "No responde: habrá perdido otra vez el teléfono." },
      { it: "Avremo visitato dieci musei entro sabato, che record!", es: "Habremos visitado diez museos antes del sábado, ¡qué récord!" },
      { it: "Saranno le cinque, no? Ho fame.", es: "Serán las cinco, ¿no? Tengo hambre." },
    ],
    usi: [
      { q: "«No responde: estará durmiendo» (conjetura presente):", options: ["Non risponde: starà dormendo.", "Non risponde: sarà dorme.", "Non risponde: dormirà stato."], answer: 0, explain: "Conjetura = futuro (starà dormiendo)." },
      { q: "«Cuando haya llegado, avísame»:", options: ["Quando sarà arrivato, avvisami.", "Quando arriverà già, avvisami.", "Quando ha arrivato, avvisami."], answer: 0, explain: "Futuro anterior: sarà arrivato." },
    ],
  },

  "cu-b1-11": {
    sezioni: [
      { t: "Come si forma", body: "Il congiuntivo passato = abbia/sia + participio: «credo che abbia mangiato», «penso che sia partita». La elección del auxiliar sigue las reglas del passato prossimo, y con essere el participio concuerda: «siano arrivati», «abbia capito»." },
      { t: "Quando si usa", body: "Expresa opinión, deseo o emoción sobre un hecho YA TERMINADO: «Credo che siano già partiti» (creo que ya se han ido), «Mi dispiace che tu abbia avuto problemi» (siento que hayas tenido problemas), «È possibile che abbiano cambiato orario». Si el hecho es simultáneo o habitual, congiuntivo presente; si está acabado, passato." },
      { t: "Attenzione! · trampas para hispanohablantes", body: "El español «creo que han llegado» va en indicativo; el italiano sube a subjuntivo pasado: «credo che siano arrivati». El español «siento que hayas tenido» usa subjuntivo igual que el italiano — las emociones coinciden en ambas lenguas, solo la opinión difiere. Error típico: usar el subjuntivo presente para hechos acabados («credo che siano partono» ✗ sin sentido)." },
      { t: "Nel parlato", body: "Frases hechas con subjuntivo pasado: «Spero che ti sia divertito!», «meno male che sia finita bene», «non credo che abbiano capito»." },
    ],
    esempi: [
      { it: "Credo che siano già partiti per il viaggio.", es: "Creo que ya se han ido de viaje." },
      { it: "Penso che Marco abbia fatto un ottimo lavoro.", es: "Creo que Marco ha hecho un trabajo excelente." },
      { it: "Mi dispiace che tu abbia avuto tutti questi problemi.", es: "Siento que hayas tenido todos estos problemas." },
      { it: "È possibile che abbiano cambiato l'orario del treno.", es: "Es posible que hayan cambiado el horario del tren." },
      { it: "Spero che ti sia divertita alla festa!", es: "¡Espero que te hayas divertido en la fiesta!" },
    ],
    usi: [
      { q: "«Creo que han llegado»:", options: ["Credo che siano arrivati.", "Credo che sono arrivati.", "Credo che siano arrivare."], answer: 0, explain: "Opinión sobre hecho acabado → congiuntivo passato." },
      { q: "«Espero que hayas descansado»:", options: ["Spero che tu abbia riposato.", "Spero che tu hai riposato.", "Spero che tu sei riposato."], answer: 0, explain: "sperare che + congiuntivo (passado porque el descanso ya ocurrió)." },
    ],
  },

  "cu-b1-12": {
    sezioni: [
      { t: "La mappa di B1", body: "B1 es el nivel de la independencia: congiuntivo presente e passato (penso che sia/abbia fatto), condizionale de cortesía y propuesta (vorrei, potremmo), discorso indiretto, relativas con che/cui/dove, imperativo con pronombres, futuro anteriore e combinaciones de pasados en narración. Con esto puedes opinar, dudar, aconsejar, contar lo que otros dijeron y describir con precisión." },
      { t: "Gli errori numero uno", body: "Cinco errores B1 típicos: (1) «credo che è» ✗ → credo che sia; (2) «se lo doy» ✗ → glielo do; (3) futuro español tras quando («quando arriverai» ✗) → quando arrivi; (4) pretérito perfecto español traducido con presente («ho visto» olvidado); (5) subjuntivo con verbos de certeza («so che sia» ✗) → so che è." },
      { t: "Come mescolare tutto", body: "Una opinión B1 completa: «Secondo me dovremmo visitare la mostra di Caravaggio: sembra che sia impressionante, e il biglietto costa poco. So che Marco dice che è lontana, ma io credo che abbia torto: prendiamo la metro e in mezz'ora siamo lì»." },
      { t: "Il prossimo passo", body: "B2 abre el congiuntivo imperfetto (se fossi…), las hipótesis irreales, la pasiva con venire, las concesivas con benché y la narración histórica: el instrumental de la argumentación adulta." },
    ],
    esempi: [
      { it: "Credo che dovremmo prenotare il ristorante in anticipo.", es: "Creo que deberíamos reservar el restaurante con antelación." },
      { it: "Mi ha chiesto se volessi andare al museo con loro.", es: "Me preguntó si quería ir al museo con ellos." },
      { it: "Sembra che il concerto sia già sold out, che peccato.", es: "Parece que el concierto ya está agotado, qué pena." },
      { it: "Quando avrai finito di lavorare, dimmelo.", es: "Cuando hayas terminado de trabajar, dímelo." },
      { it: "Il film di cui ti ho parlato ha vinto un premio a Venezia.", es: "La película de la que te hablé ha ganado un premio en Venecia." },
    ],
    usi: [
      { q: "«Creo que deberíamos ir»:", options: ["Credo che dovremmo andare.", "Credo che dobbiamo andare sì.", "Penso che andiamo dovremmo."], answer: 0, explain: "penso/credo che + subjuntivo/condizionale según matiz." },
      { q: "«Me preguntó si quería un café»:", options: ["Mi ha chiesto se volessi un caffè.", "Mi ha chiesto se voglio un caffè.", "Mi ha chiesto che volevo un caffè."], answer: 0, explain: "Discurso indirecto: se + imperfetto." },
    ],
  },
};
