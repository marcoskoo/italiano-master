import { parsePack } from "./compact";
import type { VocabWord } from "../types";

/* ── Pack K·A2-b · verbos, aggettivi, città, scuola, svago (MCER A2) ─── */

export const PACK_KA2B: VocabWord[] = parsePack(`
# ══ verbi A2 ══
sperare|esperar|speˈrare|V|emo|1|Spero che venga alla festa.|Espero que venga a la fiesta.|c=sperare bene
desiderare|desear|desiˈderare|V|emo|1|Desidero visitare Venezia.|Deseo visitar Venecia.|n=Más formal que volere; en tiendas: desidero… = quisiera
sognare|soñar|soɲˈɲare|V|emo|1|Stanotte ho sognato il mare.|Anoche soñé con el mar.|c=sognare ad occhi aperti
immaginare|imaginar|immaˈdʒinare|V|emo|1|Immagino già le vacanze.|Ya imagino las vacaciones.|c=immaginare che
presentare|presentar|prezenˈtare|V|rel|1|Ti presento mia sorella.|Te presento a mi hermana.|c=presentarsi
mandare|mandar|manˈdare|V|cmu|1|Ti mando un messaggio dopo.|Te mando un mensaje después.|c=mandare avanti
ritirare|recoger (retirar)|rittiˈrare|V|cmp|2|Ritiro il pacco all'ufficio postale.|Recojo el paquete en la oficina postal.
restituire|devolver|restiˈtwire|V|cmp|2|Restituisco il libro in biblioteca.|Devuelvo el libro en la biblioteca.|n=IT restituire ≠ ES "restituir" (reservado); uso cotidiano
annullare|anular|anˈnullare|V|lav|2|Il volo è stato annullato.|El vuelo fue anulado.|c=annullare una prenotazione
scambiare|intercambiar|ʃkamˈbjaɾe|V|rel|2|Ci scambiamo i numeri.|Intercambiamos los números.|c=scambiare due parole
rubare|robar|ruˈbare|V|fin|2|Mi hanno rubato la bici.|Me robaron la bici.
funzionare|funcionar|funtsjoˈnare|V|tec|1|Il telecomando non funziona.|El control remoto no funciona.|c=far funzionare
riparare|reparar|riˈparare|V|tec|2|Riparo la bici da solo.|Reparo la bici solo.|s=aggiustare
costruire|construir|kostruˈire|V|tec|2|Costruiscono un ponte nuovo.|Construyen un puente nuevo.|n=Io costruisco, tu costruisci (tipo -isc)
suonare|tocar (un instrumento)|swoˈnare|V|mus|1|Suono la chitarra da cinque anni.|Toco la guitarra desde hace cinco años.|n=Suonare il campanello = tocar el timbre
dipingere|pintar|diˈpinɡe|V|sve|2|Dipinge solo paesaggi.|Pinta solo paisajes.|n=Irregular: dipingo; participio dipinto
fotografare|fotografiar|fotograˈfare|V|sve|2|Fotografo ogni piatto.|Fotografío cada plato.
passeggiare|pasear|passeˈdʒare|V|sve|1|Passeggiamo lungo il fiume.|Paseamos a lo largo del río.
permettere|permitir|perˈmettere|V|ast|1|Mi permetti una domanda?|¿Me permites una pregunta?|n=Irregular: permetto; participio permesso
vietare|prohibir|vjeˈtare|V|ist|2|Vietato fumare qui.|Prohibido fumar aquí.|n=Carteles: VIETATO FUMARE
proibire|prohibir|proiˈbire|V|ist|3|Il medico mi proibisce i dolci.|El médico me prohíbe los dulces.|n=Io proibisco (tipo -isc);s=vietare
evitare|evitar|eviˈtare|V|ast|1|Evito il traffico delle otto.|Evito el tráfico de las ocho.|c=evitare di fare qualcosa
copiare|copiar|koˈpjare|V|stu|1|Copio gli appunti di Luca.|Copio los apuntes de Luca.
incollare|pegar (con cola)|inˈkɔllare|V|stu|2|Incolla la foto nell'album.|Pega la foto en el álbum.|n="Pegar" un golpe = dare un colpo
festeggiare|celebrar|festeˈdʒare|V|sve|1|Festeggiamo il compleanno a casa.|Celebramos el cumpleaños en casa.
scherzare|bromear|skerˈtsare|V|rel|1|Sto scherzando, tranquillo!|Estoy bromeando, ¡tranquilo!|c=scherzare col fuoco
organizzare|organizar|orgaˈnittsare|V|ast|1|Organizzo una cena con gli amici.|Organizo una cena con los amigos.
preparare|preparar|prepaˈrare|V|ali|1|Preparo la cena per tutti.|Preparo la cena para todos.|c=prepararsi a
sistemare|arreglar / acomodar|sisteˈmare|V|cas|1|Sistemo la stanza degli ospiti.|Acomodo la habitación de invitados.|n=Muy italiano: sistema tu stanza = arregla tu cuarto
riordinare|ordenar (reordenar)|riordiˈnare|V|cas|2|Riordino la scrivania il sabato.|Ordeno el escritorio los sábados.
aggiustare|arreglar|addʒuˈstare|V|tec|2|Aggiusto l'orologio.|Arreglo el reloj.|s=riparare
avvisare|avisar|avviˈzare|V|cmu|1|Ti avviso appena arrivo.|Te aviso apenas llegue.
avvertire|advertir|avverˈtire|V|cmu|2|Vi avverto del ritardo.|Les advierto del retraso.|n=Io avverto, tu avverti
informare|informar|inˈformare|V|cmu|1|Mi informi sugli orari?|¿Me informas sobre los horarios?
riconoscere|reconocer|rikonoˈʃʃere|V|cmu|2|Non l'ho riconosciuto col cappello.|No lo reconocí con el sombrero.|n=Io riconosco; participio riconosciuto
attraversare|cruzar / atravesar|attraverˈsare|V|cit|1|Attraversa sulle strisce!|¡Cruza en la cebra!
raggiungere|alcanzar|radˈdʒunɡe|V|tra|2|Ti raggiungo al bar.|Te alcanzo en el bar.|n=Irregular: io raggiungo; participio raggiunto
mancare|faltan / extrañar|ˈmankare|V|emo|1|Mi mancate, ragazzi.|Me extrañan, chicos.|n=¡Ojo! Siempre impersonal: mi manchi = me faltas / me extrañas
bastare|bastar|baˈstare|V|ast|1|Basta un'ora di studio al giorno.|Basta una hora de estudio al día.|c=basta!
durare|durar|duˈrare|V|tmp|1|Quanto dura il film?|¿Cuánto dura la película?
continuare|continuar|kontiˈnware|V|ast|1|Continuate pure senza di me.|Continúen sin mí.
smettere|dejar de|ˈsmɛttere|V|ast|1|Ho smesso di fumare.|Dejé de fumar.|c=smettere di fare
terminare|terminar|termiˈnare|V|ast|2|Termino il turno alle sei.|Termino el turno a las seis.|s=finire
lasciare|dejar|laʃˈʃare|V|ast|1|Lascia la chiave alla reception.|Deja la llave en la recepción.|c=lasciare in pace
crescere|crecer|ˈkreʃʃe|V|fam|1|I bambini crescono in fretta.|Los niños crecen rápido.|n=Io cresco; participio cresciuto
nascere|nacer|ˈnaʃʃere|V|fam|1|Sono nato a Lima.|Nací en Lima.|n=Io nasco; participio nato
morire|morir|moˈrire|V|fam|1|Il nonno è morto in pace.|El abuelo murió en paz.|n=Participio: morto
trasferirsi|mudarse|transferˈirsi|V|cas|1|Mi trasferisco a Milano per lavoro.|Me mudo a Milán por trabajo.|n=Io mi trasferisco (tipo -isc)
giurare|jurar|dʒuˈrare|V|cmu|2|Giuro che è la verità.|Juro que es la verdad.
promettere|prometer|proˈmɛttere|V|rel|1|Mi prometti che torni?|¿Me prometes que vuelves?|n=Io prometto; participio promesso
disturbare|molestar / incomodar|disturˈbare|V|rel|1|Scusa il disturbo, ho una domanda.|Perdón la molestia, tengo una pregunta.
riagganciare|colgar (el teléfono)|riaggaɲˈɲatʃare|V|cmu|3|Ha riagganciato senza salutare.|Colgó sin despedirse.
richiamare|devolver la llamada|rikjaˈmare|V|cmu|2|Ti richiamo tra dieci minuti.|Te devuelvo la llamada en diez minutos.
comporre|marcar (número)|komˈporre|V|cmu|3|Componi il numero e attendi.|Marca el número y espera.|n=Irregular: io compongo; participio composto
digitare|teclear|dʒiˈtare|V|tec|3|Digita la password.|Teclea la contraseña.
fermarsi|quedarse|ferˈmarsi|V|cit|1|Fermati a dormire da noi.|Quédate a dormir en casa.|n=Fermare qualcosa (detener algo) ≠ fermarsi (detenerse/quedarse)

# ══ aggettivi A2 ══
sicuro|seguro|siˈkuro|A|ast|1|È sicuro viaggiare da solo?|¿Es seguro viajar solo?|a=insicuro;c=andare sul sicuro
capace|capaz|kaˈpatʃe|A|ast|2|È capace di tutto.|Es capaz de todo.|a=incapace
cortese|cortés|korˈtɛze|A|rel|2|Un messaggio cortese e breve.|Un mensaje cortés y breve.|a=scortese
scortese|descortés|skorˈtɛze|A|rel|3|Non rispondere da scortese.|No respondas de forma descortés.|a=cortese
premuroso|atento (solícito|premuˈrozo|A|emo|3|Un padre premuroso.|Un padre solícito.|n=Que se anticipa a las necesidades del otro
affettuoso|cariñoso|affettuˈozo|A|emo|2|Un cane affettuoso.|Un perro cariñoso.
carino|lindo / bonito|kaˈrino|A|ast|1|Che vestito carino!|¡Qué vestido tan lindo!|n=Carino también = amable: una persona carina
grazioso|gracioso|graˈtsjɔzo|A|emo|3|Una bambina graziosa.|Una niña graciosa.|ff=1;n=¡Ojo! grazioso = lindo/elegante; el "gracioso" que hace reír = divertiente/spiritoso
elegante|elegante|eleˈɡante|A|rop|2|Sei elegantissimo stasera!|¡Estás elegantísimo esta noche!
artistico|artístico|arˈtistiko|A|sve|3|Un percorso artistico tra i musei.|Un recorrido artístico entre los museos.
creativo|creativo|kreaˈtivo|A|sve|2|Un regalo creativo e economico.|Un regalo creativo y económico.
pratico|práctico|praˈtiko|A|ast|2|Un regalo utile e pratico.|Un regalo útil y práctico.|a=teorico
teorico|teórico|teoˈriko|A|sci|3|Non solo teoria: passo dalla parte teorica alla pratica.|No solo teoría: paso de la parte teórica a la práctica.
strano|extraño|ˈstrano|A|ast|1|Che strano, non risponde.|Qué extraño, no responde.|s=bizzarro
raro|raro|ˈraro|A|sci|2|Un fenomeno raro.|Un fenómeno raro.|a=comune
speciale|especial|speˈtʃale|A|ast|1|Oggi è un giorno speciale.|Hoy es un día especial.
tipico|típico|ˈtipiko|A|att|2|Un piatto tipico romano.|Un plato típico romano.|c=tipico di
tradizionale|tradicional|traditsjoˈnale|A|att|2|La cucina tradizionale toscana.|La cocina tradicional toscana.
moderno|moderno|moˈdɛrno|A|att|1|Un museo d'arte moderna e contemporanea.|Un museo de arte moderna y contemporánea.|a=antico
antico|antiguo|anˈtiko|A|att|2|Il centro antico della città.|El centro antiguo de la ciudad.|a=moderno
usato|usado|uˈzato|A|cmp|2|Compro libri usati.|Compro libros usados.|a=nuovo
leggero|liviano|ledˈdʒero|A|ast|1|Uno zaino leggero per il viaggio.|Una mochila liviana para el viaje.|a=pesante
pesante|pesado|peˈzante|A|ast|1|Un pasto pesante prima di dormire.|Una comida pesada antes de dormir.|a=leggero
sottile|delgado|sotˈtile|A|ast|3|Una fetta sottile di prosciutto.|Una lonja delgada de jamón.|a=spesso
liscio|liso|ˈliʃʃo|A|ast|3|Capelli lisci e neri.|Pelo liso y negro.|a=riccio
salato|salado|saˈlato|A|ali|2|Questo piatto è troppo salato.|Este plato está demasiado salado.
soleggiato|soleado|solledˈdʒato|A|cli|3|Un appartamento soleggiato.|Un departamento soleado.|a=ombroso
ventoso|ventoso|venˈtoso|A|cli|4|Una giornata ventosa da kite.|Un día ventoso para kite.
affollato|abarrotado|affolˈlato|A|cit|2|Il centro è affollato il sabato.|El centro está abarrotado los sábados.|a=deserto
disponibile|disponible|dispoˈnibile|A|ast|2|Sei disponibile domani sera?|¿Estás disponible mañana en la noche?|c=essere disponibile
prenotato|reservado|prenoˈtato|A|htl|3|Il tavolo è già prenotato.|La mesa ya está reservada.
ricco di|rico en|ˈrikko di|L|ast|2|Una colazione ricca di vitamine.|Un desayuno rico en vitaminas.

# ══ città e servizi ══
municipio|municipalidad|muniˈtʃipjo|S|ist|2|Il matrimonio al municipio.|El matrimonio en la municipalidad.|g=m;p=municipi
comune|municipalidad (comuna)|koˈmune|S|ist|2|Il comune di Firenze.|La municipalidad de Florencia.|g=m;p=comuni;n=Doble vida: comune = común (adj.) y municipalidad (sust.); pl. i comuni
polizia|policía|poliˈtsia|S|ist|1|Chiamo la polizia!|¡Llamo a la policía!|g=f;n=Invariable
poliziotto|policía (persona)|politˈtsɔtto|S|pro|2|Il poliziotto dirige il traffico.|El policía dirige el tráfico.|g=m;p=poliziotti
vigili del fuoco|bomberos|ˈviʎili del ˈfwɔko|L|ist|2|I vigili del fuoco hanno spento l'incendio.|Los bomberos apagaron el incendio.
ambulanza|ambulancia|ambuˈlantsa|S|sla|2|Chiama un'ambulanza, presto!|¡Llama una ambulancia, rápido!|g=f;p=ambulanze
biblioteca|biblioteca|biblioteˈka|S|stu|1|Studio in biblioteca fino alle otto.|Estudio en la biblioteca hasta las ocho.|g=f;p=biblioteche
piscina|piscina|piˈʃina|S|spt|1|La piscina comunale è gratuita.|La piscina municipal es gratuita.|g=f;p=piscine
supermercato|supermercado|supermerˈkato|S|cmp|1|Faccio la spesa al supermercato.|Hago el mercado en el supermercado.|g=m;p=supermercati
centro commerciale|centro comercial|ˈtʃɛntro kommerˈtʃale|L|cmp|2|Il nuovo centro commerciale ha venti negozi.|El nuevo centro comercial tiene veinte tiendas.
panetteria|panadería|panetˈteria|S|cmp|3|Il pane caldo della panetteria.|El pan caliente de la panadería.|g=f
macelleria|carnicería|matʃelˈleria|S|cmp|4|Due etti di carne dalla macelleria.|Doscientos gramos de carne de la carnicería.|g=f
pescheria|pescadería|peskeˈria|S|cmp|4|Il pesce fresco della pescheria.|El pescado fresco de la pescadería.|g=f
pasticceria|pastelería|pastesˈʃeria|S|cmp|3|I cannoncini di quella pasticceria.|Los cannoncini de esa pastelería.|g=f
gelateria|heladería|dʒelaˈteria|S|cmp|3|Un cono alla gelateria.|Un cono en la heladería.|g=f
edicola|puesto de diarios|eˈdrikola|S|cmp|3|Compro il giornale in edicola.|Compro el diario en el puesto.|g=f
cartoleria|librería (papelería)|kartoleˈria|S|cmp|4|Quaderni e penne dalla cartoleria.|Cuadernos y lapiceros de la papelería.|g=f
lavanderia|lavandería|lavanˈderia|S|cmp|3|Porto le camicie in lavanderia.|Llevo las camisas a la lavandería.|g=f
parrucchiere|peluquero|parukˈkjɛre|S|pro|2|Taglio i capelli dal parrucchiere.|Me corto el pelo en la peluquería.|g=m;n=Invariable en plural
barbiere|barbero|barˈbjɛre|S|pro|3|Il barbiere del paese.|El barbero del pueblo.|g=m;p=barbieri
ferramenta|ferretería|feraˈmenta|S|cmp|4|Un chiodo dalla ferramenta.|Un clavo de la ferretería.|g=f
tabaccheria|estanco (tabaquería)|tabakkeˈria|S|cmp|4|I francobolli dalla tabaccheria.|Los sellos del estanco.|g=f
teatro|teatro|teˈatro|S|sve|1|Stasera andiamo a teatro.|Esta noche vamos al teatro.|g=m;p=teatri
mostra|exposición|ˈmɔstra|S|sve|2|Visitiamo la mostra di Modigliani.|Visitamos la exposición de Modigliani.|g=f;p=mostre;c=mostra fotografica
galleria|galería (de arte)|ɡalˈleria|S|sve|2|La galleria degli Uffizi.|La galería de los Uffizi.|g=f;p=gallerie
quadro|cuadro|ˈkwadro|S|sve|2|Un quadro del Rinascimento.|Un cuadro del Renacimiento.|g=m;p=quadri
scultura|escultura|skulˈtura|S|sve|3|Una scultura di marmo.|Una escultura de mármol.|g=f;p=sculture
pittore|pintor|pitˈtore|S|sve|3|Il pittore dipinse la cappella.|El pintor pintó la capilla.|g=m;p=pittori
bar|bar|bar|S|ris|1|Ci vediamo al bar della piazza.|Nos vemos en el bar de la plaza.|g=m;n=Invariable: al bar, due bar
sindaco|alcalde|ˈsindako|S|ist|3|Il sindaco apre la festa del paese.|El alcalde inaugura la fiesta del pueblo.|g=m;p=sindaci
mercato delle pulci|mercado de las pulgas|merˈkato delle ˈpultʃi|L|cmp|4|Cerco vinili al mercato delle pulci.|Busco discos en el mercado de las pulgas.

# ══ scuola e studio ══
professore|profesor|profesˈsore|S|pro|1|Il professore di storia racconta bene.|El profesor de historia cuenta bien.|g=m;p=professori
professoressa|profesora|profesˈsoressa|S|pro|2|La professoressa di matematica è severa.|La profesora de matemática es severa.|g=f
alunno|alumno|aˈlunno|S|stu|2|Gli alunni della quinta elementare.|Los alumnos de quinto de primaria.|g=m;p=alunni
alunna|alumna|aˈlunna|S|stu|3|L'alunna più brava della classe.|La alumna más aplicada de la clase.|g=f;p=alunne
compagno|compañero|komˈpaɲɲo|S|stu|1|Il mio compagno di banco.|Mi compañero de carpeta.|g=m;p=compagni;c=compagno di classe
compagna|compañera|komˈpaɲɲa|S|stu|1|La mia compagna di corso.|Mi compañera de curso.|g=f;p=compagne
aula|aula|ˈaula|S|stu|2|L'aula magna dell'università.|El aula magna de la universidad.|g=f;p=aule
lavagna|pizarra|laˈvaɲɲa|S|stu|2|La prof scrive alla lavagna.|La profe escribe en la pizarra.|g=f
gesso|tiza|ˈdʒesso|S|stu|3|Un gesso bianco sul tavolo della prof.|Una tiza blanca sobre la mesa de la profe.|g=m;p=gessi
penna|lapicero (pluma)|ˈpɛnna|S|stu|1|Mi passi una penna?|¿Me pasas un lapicero?|g=f;ff=1;n=¡Falso amigo! IT penna = pluma/bolígrafo; no significa "pena"
matita|lápiz|maˈtita|S|stu|1|Disegno con la matita.|Dibujo con el lápiz.|g=f;p=matite
quaderno|cuaderno|kwaˈdɛrno|S|stu|1|Un quaderno a righe.|Un cuaderno a rayas.|g=m;p=quaderni
zaino|mochila|ˈdzaino|S|stu|1|Lo zaino pesa troppo.|La mochila pesa demasiado.|g=m;p=zaini
dizionario|diccionario|dittsjoˈnarjo|S|stu|1|Cerco la parola sul dizionario.|Busco la palabra en el diccionario.|g=m;p=dizionari
esercizio|ejercicio|edzerˈtʃittsjo|S|stu|1|Gli esercizi di grammatica.|Los ejercicios de gramática.|g=m;p=esercizi
tema|redacción|ˈtɛma|S|stu|2|Ho scritto un tema sulle vacanze.|Escribí una redacción sobre las vacaciones.|g=m;p=temi;n=¡Ojo! tema = redacción escolar Y "tema/argumento"
pagella|libreta de notas|paˈdʒella|S|stu|3|La pagella del primo trimestre.|La libreta del primer trimestre.|g=f;p=pagelle
diploma|diploma (título secundario)|diˈploma|S|stu|2|Ho preso il diploma con 100.|Me saqué el diploma con 100.|g=m;n=Invariable
laurearsi|recibirse (titularse)|lauˈrearzi|V|stu|1|Mia sorella si è laureata in giurisprudenza.|Mi hermana se recibió en derecho.|c=laurearsi con lode
scuola materna|inicial (jardín)|ˈskwɔla maˈtɛrna|L|stu|4|Mio figlio va alla scuola materna.|Mi hijo va al jardín de infantes.
medie|secundaria (primaria alta)|ˈmɛdie|S|stu|4|Insegno alle medie.|Enseño en la secundaria baja.|g=f;p=medie;n=Siempre plural: le medie

# ══ sport e tempo libero ══
allenarsi|entrenarse|alleˈnarsi|V|spt|1|Mi alleno tre volte a settimana.|Me entreno tres veces por semana.|c=allenarsi in palestra
campionato|campeonato|kampjoˈnato|S|spt|2|Il campionato inizia a settembre.|El campeonato empieza en septiembre.|g=m;p=campionati
gol|gol|ɡɔl|S|spt|2|Un gol al novantesimo!|¡Un gol en el minuto noventa!|g=m;n=Invariable
portiere|arquero|porˈtjɛre|S|spt|2|Il portiere para il rigore.|El arquero ataja el penal.|g=m;n=Pl. invariable o portieri
arbitro|árbitro|ˈarbitro|S|spt|2|L'arbitro fischia fallo.|El árbitro cobra la falta.|g=m;p=arbitri
tifoso|hinchada (aficionado)|tiˈfɔzo|S|spt|2|I tifosi cantano nello stadio.|Los hinchas cantan en el estadio.|g=m;p=tifosi;c=tifo
pallone|balón|palˈlone|S|spt|2|Calcia il pallone forte!|¡Patea el balón fuerte!|g=m;p=palloni;n=Calcio = el fútbol; pallone = el balón
racchetta|raqueta|rakˈketta|S|spt|3|Una racchetta da tennis professionale.|Una raqueta de tenis profesional.|g=f;p=racchette
pallavolo|vóleibol|pallaˈvɔlo|S|spt|3|Gioco a pallavolo da bambina.|Juego vóleibol desde niña.|g=f;p=pallavolo
basket|básquet|ˈbasket|S|spt|3|Una partita di basket al parco.|Un partido de básquet en el parque.|g=m;n=Invariable
tennis|tenis|ˈtɛnnis|S|spt|3|Il campo da tennis è libero.|La cancha de tenis está libre.|g=m;n=Invariable
yoga|yoga|ˈjɔɡa|S|spt|3|Faccio yoga ogni mattina.|Hago yoga cada mañana.|g=m;n=Invariable
ginnastica|gimnasia|dʒinˈnastika|S|spt|3|La ginnastica artistica alle Olimpiadi.|La gimnasia artística en las Olimpiadas.|g=f
maratona|maratón|maraˈtona|S|spt|3|Corro la maratona di Roma.|Corro la maratón de Roma.|g=f;p=maratone
pattinaggio|patinaje|pattinaˈdʒo|S|spt|4|Il pattinaggio su ghiaccio in inverno.|El patinaje sobre hielo en invierno.|g=m
sci|esquí|ʃi|S|spt|3|Sci di fondo o sci da discesa?|¿Esquí de fondo o de descenso?|g=m;n=Siempre plural: gli sci
canto|canto|ˈkanto|S|mus|3|Lezioni di canto il mercoledì.|Clases de canto los miércoles.|g=m
coro|coro|ˈkɔro|S|mus|3|Canto nel coro della chiesa.|Canto en el coro de la iglesia.|g=m;p=cori
fumetto|cómic|fuˈmɛtto|S|sve|2|Leggo i fumetti di Dylan Dog.|Leo los cómics de Dylan Dog.|g=m;p=fumetti
videogioco|videojuego|videoˈdʒɔko|S|tec|2|Un videogioco di calcio realistico.|Un videojuego de fútbol realista.|g=m;p=videogiochi
giocattolo|juguete|dʒokkatˈtɔlo|S|sve|2|I giocattoli sparsi per terra.|Los juguetes regados por el piso.|g=m;p=giocattoli
bambola|muñeca|bamˈbolla|S|sve|3|Una bambola di pezza.|Una muñeca de trapo.|g=f;p=bambole
orsacchiotto|osito de peluche|orsaˈkkjɔtto|S|sve|3|Dorme con l'orsacchiotto.|Duerme con el osito de peluche.|g=m;p=orsacchiotti
scacchi|ajedrez|ˈskakki|S|sve|3|Una partita a scacchi al parco.|Una partida de ajedrez en el parque.|g=m;n=Siempre plural: gli scacchi
dama|damas|ˈdama|S|sve|4|Giochiamo a dama, è più facile.|Jugamos damas, es más fácil.|g=f
puzzle|rompecabezas|ˈpaddzle|S|sve|3|Un puzzle di mille pezzi.|Un rompecabezas de mil piezas.|g=m;n=Invariable
carte da gioco|naipes|ˈkarte da ˈdʒɔko|L|sve|4|Un mazzo di carte da gioco.|Una baraja de naipes.
musica classica|música clásica|ˈmuzika ˈklassika|L|mus|2|Ascolto musica classica mentre studio.|Escucho música clásica mientras estudio.
banda musicale|banda de música|ˈbanda muziˈkale|L|mus|4|La banda musicale sfilava nel paese.|La banda de música desfilaba en el pueblo.

# ══ concetti e sostantivi utili ══
idea|idea|iˈdɛa|S|ast|1|Che bella idea!|¡Qué buena idea!|g=f;p=idee
soluzione|solución|soluˈtsjone|S|ast|2|Cerco una soluzione rapida.|Busco una solución rápida.|g=f
occasione|oportunidad / ganga|okkaˈzjone|S|cmp|2|Una cena a casa è l'occasione giusta.|Una cena en casa es la oportunidad correcta.|g=f;n=En tiendas: un'occasione = una ganga/oferta
momento|momento|moˈmento|S|tmp|1|Un momento, arrivo!|¡Un momento, ya voy!|g=m;p=momenti;c=al momento giusto
attimo|instante|ˈattimo|S|tmp|2|Un attimo e sono da te.|Un instante y estoy contigo.|g=m;p=attimi
periodo|período|peˈrjodo|S|tmp|1|Un periodo di vacanze tranquillo.|Un período de vacaciones tranquilo.|g=m;p=periodi
modo|manera / modo|ˈmɔdo|S|ast|1|Il modo migliore per imparare.|La mejor manera de aprender.|g=m;p=modi;c=in qualche modo
parte|parte|ˈparte|S|ast|1|La parte migliore del film.|La mejor parte de la película.|g=f;p=parti
sistema|sistema|siˈstɛma|S|ast|2|Un sistema di trasporto efficiente.|Un sistema de transporte eficiente.|g=m;p=sistemi
regalo|regalo|reˈɡalo|S|rel|1|Un regalo per l'anniversario.|Un regalo por el aniversario.|g=m;p=regali;c=fare un regalo
pensiero|pensamiento|penˈsjɛro|S|emo|2|Ho un pensiero fisso: l'esame.|Tengo un pensamiento fijo: el examen.|g=m;p=pensieri;n="Un piccolo pensiero" = un detallito (regalo simbólico)
possibilità|posibilidad|possibiliˈta|S|ast|2|C'è la possibilità di cambiare volo.|Existe la posibilidad de cambiar el vuelo.|g=f;n=Invariable
secolo|siglo|ˈsɛkolo|S|tmp|3|Nel secolo scorso due guerre.|En el siglo pasado dos guerras.|g=m;p=secoli
cartello|cartel|karˈtɛllo|S|cit|2|Segui il cartello per il centro.|Sigue el cartel hacia el centro.|g=m;p=cartelli
insegna|letrero (rótulo)|inˈseɲɲa|S|cit|3|L'insegna del negozio è al neon.|El letrero de la tienda es de neón.|g=f;p=insegne
etichetta|etiqueta|etikˈketta|S|cmp|3|Leggi l'etichetta dei ingredienti.|Lee la etiqueta de los ingredientes.|g=f;p=etichette
istruzioni|instrucciones|istruˈtsjoni|S|tec|3|Seguo le istruzioni del mobile nuovo.|Sigo las instrucciones del mueble nuevo.|g=f;n=Siempre plural: le istruzioni
manuale|manual|manuˈale|S|tec|3|Il manuale di istruzioni in pdf.|El manual de instrucciones en PDF.|g=m;p=manuali
raccomandata|carta certificada|rakkomma nˈdata|S|cmu|4|Aspetto una raccomandata importante.|Espero una carta certificada importante.|g=f
avviso|aviso|avˈvizo|S|cmu|2|C'è un avviso sulla porta.|Hay un aviso en la puerta.|g=m;p=avvisi
annuncio|anuncio|anˈnuntʃo|S|cmu|3|Un annuncio di lavoro online.|Un anuncio de trabajo en línea.|g=m;p=annunci;c=annuncio pubblicitario
notifica|notificación|notiˈfika|S|tec|2|Mi è arrivata una notifica.|Me llegó una notificación.|g=f;p=notifiche
bozza|borrador|ˈbɔttsa|S|tec|3|Salvo la bozza dell'email.|Guardo el borrador del correo.|g=f;p=bozze
segreteria telefonica|buzón de voz|seɡreteˈria telefoˈnika|L|cmu|3|Lascio un messaggio in segreteria.|Dejo un mensaje en el buzón.
prefisso|prefijo (código)|preˈfisso|S|cmu|4|Il prefisso dell'Italia è +39.|El prefijo de Italia es +39.|g=m;p=prefissi
numero verde|línea gratuita|ˈnumero ˈverde|L|cmu|4|Chiama il numero verde per informazioni.|Llama a la línea gratuita para información.

# ══ espressioni e avverbi A2 ══
per caso|por casualidad|per ˈtʃazo|L|ast|2|Hai per caso una penna?|¿No tendrás por casualidad un lapicero?
per fortuna|por suerte|per forˈtuna|L|emo|1|Per fortuna il treno era in ritardo anche lui.|Por suerte el tren también estaba retrasado.
purtroppo|por desgracia|purˈtrɔppo|D|emo|1|Purtroppo non posso venire.|Por desgracia no puedo ir.|a=per fortuna
meno male|menos mal|ˈmeno ˈmale|L|emo|1|Meno male che sei arrivato!|¡Menos mal que llegaste!
figurati|imagínate / ni hablar|fiˈɡurati|L|emo|3|Grazie mille! — Figurati!|¡Muchísimas gracias! — ¡Imagínate! (no es nada)|r=inf
non vedo l'ora|no veo la hora|non ˈvedo lˈora|L|emo|1|Non vedo l'ora di partire!|¡No veo la hora de irme!
che ne dici?|¿qué te parece?|ke ne ˈditʃi|L|cmu|2|Andiamo al mare, che ne dici?|Vamos a la playa, ¿qué te parece?
che ne pensi?|¿qué piensas?|ke ne ˈpɛnsi|L|cmu|2|Che ne pensi di questo film?|¿Qué piensas de esta película?
secondo me|según yo|seˈkondo me|L|cmu|1|Secondo me pioverà domani.|Según yo, lloverá mañana.|n=Úsalo para opinar: secondo me / secondo te
mi sa che|me parece que|mi ˈsa ke|L|cmu|3|Mi sa che ho sbagliato strada.|Me parece que me equivoqué de ruta.|r=inf
andare d'accordo|llevarse bien|ˈandare dakˈkordo|L|rel|2|Vado d'accordo con i miei suoceri.|Me llevo bien con mis suegros.
dare del tu|tratarse de tú|ˈdare del tu|L|rel|3|Possiamo darci del tu?|¿Podemos tratarnos de tú?
dare del lei|tratarse de usted|ˈdare del lɛi|L|rel|3|Col professore do sempre del lei.|Con el profesor siempre lo trato de usted.
farcela|poder (lograrlo)|farˈtʃela|L|ast|2|Non ce la faccio più!|¡Ya no puedo más!|r=inf;c=ce la faccio
sbrigarsi|darse prisa|zbriˈɡarsi|V|tmp|2|Sbrigati, il treno parte!|Apúrate, ¡el tren se va!|r=inf
prendersela|tomarse a mal|prenˈdersela|L|emo|3|Non te la prendere con me!|¡No te lo tomes conmigo!|r=inf
arrangiarsi|arreglárselas|arranˈdʒarsi|V|ast|3|Mi arrangio con l'italiano.|Me las arreglo con el italiano.|c=sapersi arrangiare
poco a poco|poco a poco|ˈpoko a ˈpoko|L|ast|2|Poco a poco imparerai.|Poco a poco aprenderás.
a volte|a veces|a ˈvolte|D|tmp|1|A volte vado a piedi al lavoro.|A veces voy caminando al trabajo.
di nuovo|de nuevo|di ˈnwɔvo|D|tmp|1|Sono di nuovo in ritardo.|Estoy otra vez atrasado.
ancora una volta|una vez más|anˈkora una ˈvolta|L|tmp|2|Ci riprovo ancora una volta.|Lo intento una vez más.
metterci|tardar (tomar tiempo)|metˈtertʃi|V|tmp|2|Ci metto un'ora ad arrivare.|Tardo una hora en llegar.|n=Impersonal con "ci": quanto ci vuoi? = ¿cuánto tardas?
volerci|hacer falta (tiempo)|voˈlertʃi|V|tmp|3|Ci vogliono due ore di treno.|Se necesitan dos horas de tren.|n=volerci (tiempo) vs metterci (lo que uno tarda)
fare tardi|llegar tarde|ˈfare ˈtardi|L|tmp|2|Ieri ho fatto tardissimo.|Ayer llegué tardísimo.
fare due chiacchiere|charlar un rato|ˈfare due kjakˈkjere|L|cmu|3|Ci vediamo per fare due chiacchiere.|Nos vemos para charlar un rato.|r=inf
fare una sorpresa|hacer una sorpresa|ˈfare una sorˈpresa|L|rel|3|Gli amici mi hanno fatto una sorpresa.|Los amigos me hicieron una sorpresa.
che bello!|¡qué lindo!|ke ˈbɛllo|L|emo|1|Che bello rivederti!|¡Qué lindo verte de nuevo!
che peccato|qué lástima|ke pekˈkato|L|emo|2|Che peccato, mi sarebbe piaciuto venire!|Qué lástima, ¡me habría gustado ir!
in orario|a tiempo|in oraˈrjo|L|tmp|2|Il treno è arrivato in orario.|El tren llegó a tiempo.|a=in ritardo
alla fine|al final|alla ˈfine|L|tmp|2|Alla fine siamo rimasti a casa.|Al final nos quedamos en casa.
per sempre|para siempre|per ˈsɛmpre|L|tmp|2|Voglio restare qui per sempre.|Quiero quedarme aquí para siempre.
`, "A2", "k-a2b");
