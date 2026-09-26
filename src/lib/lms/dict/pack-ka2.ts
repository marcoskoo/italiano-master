import { parsePack } from "./compact";
import type { VocabWord } from "../types";

/* ── Pack K·A2-a · vida cotidiana (MCER A2) ────────────────────────────
   Rutina · salud · trabajo y oficina · viajes y hotel · compras ·
   tecnología · emociones y carácter. */

export const PACK_KA2: VocabWord[] = parsePack(`
# ══ rutina e giornata ══
giornata|día (jornada)|dʒorˈnata|S|tmp|1|Che giornata lunga!|¡Qué día tan largo!|g=f;n=Giorno = el día en general; giornata = la jornada con su transcurso
sveglia|despertador|ˈzveʎʎa|S|cas|2|La sveglia suona alle sei.|El despertador suena a las seis.|g=f;c=mettere la sveglia
fretta|prisa|ˈfretta|S|tmp|1|Ho fretta, il treno parte!|Tengo prisa, ¡el tren sale!|g=f;c=di fretta,avere fretta
calma|calma|ˈkalma|S|emo|2|Con calma, abbiamo tempo.|Con calma, tenemos tiempo.|g=f;c=mantenere la calma
tranquillità|tranquilidad|trankwilˈlita|S|emo|2|Vivo in campagna per la tranquillità.|Vivo en el campo por la tranquilidad.|g=f
punto|punto|ˈpwɔnto|S|ast|2|Ci vediamo al punto infos.|Nos vemos en el punto de información.|g=m;p=punti;c=essere in punto di…
riposo|descanso|riˈpɔso|S|sve|2|Dopo il lavoro, un po' di riposo.|Después del trabajo, un poco de descanso.|g=m;c=una bella nottata di riposo
pausa|pausa|ˈpausa|S|lav|2|Facciamo una pausa caffè.|Hacemos una pausa de café.|g=f;p=pause;c=fare una pausa
pisolino|siesta|pizoˈlino|S|sve|3|Faccio un pisolino dopo pranzo.|Doy una siesta después de almorzar.|g=m;c=fare un pisolino;r=inf

# ══ salute e medicina ══
ferita|herida|feˈrita|S|sla|2|Una ferita leggera al ginocchio.|Una herida leve en la rodilla.|g=f;p=ferite
benda|venda (gasas)|ˈbenda|S|sla|3|L'infermiera applica una benda.|La enfermera aplica una venda.|g=f;p=bende
pomata|pomada|poˈmata|S|sla|3|Metti la pomata due volte al giorno.|Ponte la pomada dos veces al día.|g=f
iniezione|inyección|injetsˈtsjone|S|sla|3|L'iniezione non fa male.|La inyección no duele.|g=f;p=iniezioni
visita|visita (médica)|viˈzita|S|sla|1|La visita dura mezz'ora.|La visita dura media hora.|g=f;p=visite;c=visita di controllo
operazione|operación|operaˈtsjone|S|sla|2|Un'operazione di routine.|Una operación de rutina.|g=f;p=operazioni
nausea|náusea|ˈnautsea|S|sla|3|Sento la nausea in macchina.|Siento náusea en el carro.|g=f
tossire|toser|tosˈsire|V|sla|2|Tossisce da tre giorni.|Tose desde hace tres días.|n=Sustantivo: la tosse
starnutire|estornudar|starnuˈtire|V|sla|3|Starnutisco per il polline.|Estornudo por el polen.
farsi male|lastimarse|ˈfarsi ˈmale|L|sla|1|Mi sono fatto male alla schiena.|Me lastimé la espalda.
dolorante|adolorido|doloˈrante|A|sla|3|Ho le gambe doloranti.|Tengo las piernas adoloridas.
guarigione|curación|ɡwariˈdʒone|S|sla|3|La guarigione richiede tempo.|La curación requiere tiempo.|g=f;p=guarigioni
farmaco|medicamento|ˈfarmako|S|sla|2|Questo farmaco fa sonnolenza.|Este medicamento da somnolencia.|g=m;p=farmaci
cicatrice|cicatriz|tʃikaˈtritʃe|S|cor|3|Una piccola cicatrice sul mento.|Una pequeña cicatriz en el mentón.|g=f;p=cicatrici
pressione|presión|presˈsjone|S|sla|2|La pressione è perfetta.|La presión está perfecta.|g=f;c=misurare la pressione
temperatura corporale|temperatura corporale|temperaˈtura corpoˈrale|L|sla|3|La temperatura corporale normale è 37 gradi.|La temperatura corporal normal es 37 grados.
attacco di cuore|ataque al corazón|atˈtakko di ˈkwɔre|L|sla|3|Ha avuto un attacco di cuore.|Ha tenido un ataque al corazón.
campagna|campaña (campo)|kamˈpaɲɲa|S|nat|2|Vivo in campagna, lontano dal traffico.|Vivo en el campo, lejos del tráfico.|g=f;n="Campaña" política = campagna elettorale

# ══ lavoro e ufficio ══
capo|jefe|ˈkapo|S|lav|1|Il capo riunisce lo staff.|El jefe reúne al personal.|g=m;p=capi
esperienza|experiencia|espeˈrjentsa|S|lav|1|Cerco lavoro, ho esperienza nel turismo.|Busco trabajo, tengo experiencia en turismo.|g=f;c=lettera di presentazione
promozione|ascenso (promoción)|promotˈtsjone|S|lav|2|Ha meritato la promozione.|Se ganó el ascenso.|g=f;n=¡Ojo! promozione = ascenso/descuento; "promoción" de ventas = offerta
candidato|candidato|kandiˈdato|S|lav|2|Il candidato ideale per questo ruolo.|El candidato ideal para este puesto.|g=m;p=candidati
scrivania|escritorio|skriˈvaɲɲa|S|lav|1|La mia scrivania è sempre ordinata.|Mi escritorio está siempre ordenado.|g=f;p=scrivanie
stampante|impresora|stamˈpante|S|tec|2|La stampante non funziona.|La impresora no funciona.|g=f
fotocopiatrice|fotocopiadora|fotokopjaˈtritʃe|S|tec|3|Fai due copie alla fotocopiatrice.|Haz dos copias en la fotocopiadora.|g=f
archivio|archivo|arˈkivjo|S|lav|3|Il documento è in archivio.|El documento está en el archivo.|g=m;p=archivi
agenda|agenda|aˈdʒɛnda|S|lav|2|Segno l'appuntamento in agenda.|Anoto la cita en la agenda.|g=f
calendario|calendario|kalendaˈrjo|S|tmp|1|Il calendario di dicembre è pieno.|El calendario de diciembre está lleno.|g=m;p=calendari
cartella|carpeta|karˈtɛlla|S|lav|2|Salva il file nella cartella giusta.|Guarda el archivo en la carpeta correcta.|g=f;n=También: cartella clinica = historia clínica
raccoglitore|fólder (carpeta anillada)|rakkɔʎʎiˈtore|S|lav|3|Metti i fogli nel raccoglitore.|Pon las hojas en el fólder.|g=m;p=raccoglitori
progetto|proyecto|proˈdʒɛtto|S|lav|1|Seguo un progetto internazionale.|Sigo un proyecto internacional.|g=m;p=progetti;c=capoprogetto
scadenza|fecha límite|ʃaˈdenttsa|S|lav|2|La scadenza è per venerdì.|La fecha límite es para el viernes.|g=f;p=scadenze;c=rispettare le scadenze
rapporto|informe|rapˈpɔrto|S|lav|2|Il rapporto trimestrale è pronto.|El informe trimestral está listo.|g=m;p=rapporti;n=Relazione = relación/informe largo; rapporto también "relación entre personas"
riepilogo|resumen (de datos)|rieˈpilogo|S|lav|4|Un riepilogo delle vendite.|Un resumen de las ventas.|g=m;p=riepiloghi
svolgere|desempeñar|zvolˈdʒere|V|lav|3|Svolgo compiti amministrativi.|Desempeño tareas administrativas.|n=Irregular: svolgo; participio svolto
assumersi responsabilità|asumir responsabilidades|asˈsumersi responsaˈbilita|L|lav|3|Assumersi responsabilità importanti.|Asumir responsabilidades importantes.
fermo|detenido (no operativo)|ˈfɛrmo|A|tec|2|L'ascensore è fermo al terzo piano.|El ascensor está detenido en el tercer piso.|a=in movimento
guasto|descompostura|ˈɡwasto|S|tec|3|C'è un guasto alla caldaia.|Hay una descompostura en la caldera.|g=m;n="Rotto/danneggiato" = guasto agg.

# ══ viaggio, aeroporto e hotel ══
partenza|salida (partida)|parˈtentsa|S|vig|1|La partenza è alle 7:30.|La salida es a las 7:30.|a=arrivo
arrivo|llegada|arˈrivo|S|vig|1|L'arrivo è previsto alle dieci.|La llegada está prevista para las diez.|a=partenza
imbarco|embarque|imˈbarko|S|vig|3|L'imbarco inizia in ritardo.|El embarque empieza con retraso.|g=m;p=imbarchi
bagaglio a mano|equipaje de mano|baˈɡaʎʎo a ˈmano|L|vig|2|Solo un bagaglio a mano, grazie.|Solo un equipaje de mano, gracias.
compagnia aerea|aerolínea|kompaˈɲɲa aeˈrea|L|vig|2|La compagnia aerea ha cancellato il volo.|La aerolínea canceló el vuelo.
dogana|aduana|doˈɡana|S|vig|3|Passiamo la dogana in cinque minuti.|Pasamos la aduana en cinco minutos.|g=f
controllo|control (revisión)|konˈtrɔllo|S|vig|2|Il controllo bagagli è veloce.|El control de equipajes es rápido.|g=m
scalo|escala|ˈskalo|S|vig|4|Uno scalo a Madrid di due ore.|Una escala en Madrid de dos horas.|g=m;p=scali
atterraggio|aterrizaje|atterˈraddʒo|S|vig|3|Un atterraggio perfetto.|Un aterrizaje perfecto.|g=m
decollo|despegue|deˈkɔllo|S|vig|3|Il decollo è previsto alle 11.|El despegue está previsto a las 11.|g=m
ostello|hostal|oˈstɛllo|S|htl|3|Dormiamo in un ostello economico.|Dormimos en un hostal económico.|g=m;p=ostelli
tenda|carpa|ˈtɛnda|S|vig|3|Montiamo la tenda vicino al lago.|Armamos la carpa cerca del lago.|g=f;p=tende
sacchi a pelo|sacos de dormir|ˈsakkj a ˈpɛlo|L|vig|4|I sacchi a pelo per il campeggio.|Los sacos de dormir para el campamento.
mezza pensione|media pensión|ˈmɛttsa penˈsjone|L|htl|4|Pensione completa o mezza pensione?|¿Pensión completa o media pensión?
pernottamento|pernoctación|pernottaˈmento|S|htl|4|Un pernottamento con colazione.|Un pernoctamiento con desayuno.|g=m
pedaggio|peaje|peˈdaddʒo|S|tra|4|Paghiamo il pedaggio in autostrada.|Pagamos el peaje en la autopista.|g=m
autostrada|autopista|autoˈstrada|S|tra|2|Prendiamo l'autostrada per Firenze.|Tomamos la autopista hacia Florencia.|g=f
traghetto|transbordador|traˈɡetto|S|tra|3|Il traghetto per la Sicilia.|El transbordador hacia Sicilia.|g=m;p=traghetti
biglietto di andata e ritorno|pasaje de ida y vuelta|biʎˈʎɛtto di anˈdata e riˈtɔrno|L|tra|2|Un biglietto di andata e ritorno per Pisa.|Un pasaje de ida y vuelta para Pisa.
sola andata|solo ida|ˈsola anˈdata|L|tra|3|Solo andata, per favore.|Solo ida, por favor.
orario|horario|oˈrarjo|S|tmp|1|Controlla l'orario dei treni.|Revisa el horario de los trenes.|g=m;p=orari
posteggio di taxi|paradero de taxis|posˈteddʒo di ˈtaksi|L|tra|4|Il posteggio di taxi è fuori dalla stazione.|El paradero de taxis está fuera de la estación.
itinerario|itinerario|itineˈrarjo|S|vig|3|Un itinerario tra musei e chiese.|Un itinerario entre museos e iglesias.|g=m;p=itinerari
guida turistica|guía turística|ˈɡwida tuˈristika|L|vig|2|La guida turistica spiega la storia.|La guía turística explica la historia.
monumento|monumento|monuˈmento|S|vig|1|Visito i monumenti del centro.|Visito los monumentos del centro.|g=m;p=monumenti
attrazione|atracción|attratˈtsjone|S|sve|3|Le attrazioni del paese.|Las atracciones del pueblo.|g=f;p=attrazioni

# ══ compras y restaurant (ampliación) ══
reparto|sección (de tienda)|reˈparto|S|cmp|3|Il reparto bambini è al secondo piano.|La sección de niños está en el segundo piso.|g=m;p=reparti
saldi|rebajas|ˈsaldi|S|cmp|2|Aspetto i saldi di gennaio.|Espero las rebajas de enero.|g=m;n=Casi siempre plural
cassa|caja|ˈkassa|S|cmp|1|Paghi alla cassa, per favore.|Paga en la caja, por favor.|g=f;c=andare alla cassa
misura|talla / medida|miˈzura|S|cmp|2|Che misura porta?|¿Qué talla usa?|g=f;p=misure
cambio|cambio|ˈkambjo|S|fin|2|Il cambio dell'ordine.|El cambio del pedido.|g=m;c=tasso di cambio
ordinare|ordenar / pedir|ordiˈnare|V|ris|1|Ordiniamo due pizze margherita.|Ordenamos dos pizzas margarita.
coperto|cubierto (servicio)|koˈpɛrto|S|ris|3|Il coperto costa due euro.|El cubierto cuesta dos euros.|g=m;n=¡Falso amigo parcial! coperto = cubierto del restaurante Y "cubierto" (estar cubierto del frío)
tavola calda|menú económico|ˈtavola ˈkalda|L|ris|4|Mangiamo a una tavola calda.|Comemos en un menú económico.
specialità|especialidad|spetʃaliˈtat|S|ris|2|La specialità della casa.|La especialidad de la casa.|g=f;p=specialità
assaggio|degustación|asˈsaddʒo|S|ris|3|Un assaggio di ogni formaggio.|Una degustación de cada queso.|g=m;p=assaggi
porzione|porción|porˈtsjone|S|ris|2|Una porzione abbondante.|Una porción abundante.|g=f;p=porzioni
digiuno|ayuno|diˈdʒuno|S|ali|4|Resterò a digiuno prima dell'analisi.|Quedaré en ayunas antes del análisis.|g=m
saziarsi|saciarse|sattˈtsjarsi|V|ali|4|Mi sazio con poco.|Me sacio con poco.

# ══ tecnologia ══
cellulare|celular|telluˈlare|S|tec|1|Il mio cellulare è scarico.|Mi celular está descargado.|g=m;n=¡Ojo! Non dire "movil" in Italia
tastiera|teclado|taˈstjera|S|tec|2|La tastiera del portatile è piccola.|El teclado de la laptop es pequeño.|g=f
mouse|mouse|maus|S|tec|2|Il mouse senza fili.|El mouse inalámbrico.|g=m;n=Invariable
cuffie|audífonos|ˈkuffje|S|tec|2|Ascolto la musica con le cuffie.|Escucho música con los audífonos.|g=f;p=cuffie;n=Siempre plural: le cuffie
auricolari|audífonos (de botón)|auroˈkolari|S|tec|3|Gli auricolari senza cavo.|Los audífonos inalámbricos.|g=m;n=Siempre plural
wifi|wifi|ˈwifi|S|tec|1|Qual è la password del wifi?|¿Cuál es la contraseña del wifi?|g=m;n=Invariable
app|aplicación|app|S|tec|1|Scarico un'app per imparare l'italiano.|Descargo una app para aprender italiano.|g=f;n=Invariable, femenino: un'app
sito web|sitio web|ˈsito wɛb|S|tec|1|Visita il nostro sito web.|Visita nuestro sitio web.|g=m
scaricare|descargar|skariˈkare|V|tec|1|Scarico il file dal sito.|Descargo el archivo del sitio.
salvare|guardar|salˈvare|V|tec|2|Salva il documento prima di chiudere.|Guarda el documento antes de cerrar.
allegare|adjuntar|alleˈɡare|V|tec|2|Allego il preventivo in PDF.|Adjunto el presupuesto en PDF.
pubblicare|publicar|pubbliˈkare|V|cmu|2|Pubblico foto ogni weekend.|Publico fotos cada fin de semana.
navigare|navegar (internet)|naviˈɡare|V|tec|2|Navigo su internet col telefonino.|Navego en internet con el teléfono.|n=Navegar en mar también: navigare in barca
chattare|chatear|tatˈtare|V|tec|3|Chattiamo tutta la sera.|Chateamos toda la noche.|r=inf
scorrere|desplazarse (scroll)|ˈskɔrrere|V|tec|3|Scorro le notizie col pollice.|Desplazo las noticias con el pulgar.
schermata|pantalla (de inicio)|skermaˈta|S|tec|4|Cambia la schermata iniziale.|Cambia la pantalla de inicio.|g=f
icona|ícono|iˈkɔna|S|tec|3|Clicca sull'icona della posta.|Haz clic en el ícono del correo.|g=f;p=icone
file|archivo|ˈfaile|S|tec|1|Salvo il file sul desktop.|Guardo el archivo en el escritorio.|g=m;n=Invariable
riparatore|técnico (reparador)|riparaˈtore|S|pro|3|Il riparatore sistema il televisore.|El técnico repara el televisor.|g=m;p=riparatori
schermata di blocco|pantalla de bloqueo|skerˈmata di ˈblɔkko|L|tec|4|Cambia la schermata di blocco.|Cambia la pantalla de bloqueo.

# ══ emozioni e carattere (ampliación) ══
emozionato|emocionado|emotsjoˈnato|A|emo|1|Sono emozionato per il viaggio.|Estoy emocionado por el viaje.|n=¡Ojo! emozionato = emocionado/conmovido, no "emocionado" en el sentido de genial
agitato|nervioso / agitado|adʒiˈtato|A|emo|2|Era agitato prima dell'esame.|Estaba nervioso antes del examen.
annoiato|aburrido|annoˈjato|A|emo|2|Mi annoio, non c'è niente da fare.|Me aburro, no hay nada que hacer.|n=Annoso (problemático) ≠ annoiato (aburrido)
calmo|tranquilo|ˈkalmo|A|emo|2|Resta calmo e respira.|Quédate tranquilo y respira.|a=agitato
stressato|estresado|streˈssato|A|emo|3|Sono stressato dal lavoro.|Estoy estresado por el trabajo.|r=inf
sincero|sincero|sinˈtʃɛro|A|emo|1|Un amico sincero dice la verità.|Un amigo sincero dice la verdad.|a=bugiardo
bugiardo|mentiroso|buˈdʒardo|A|emo|2|Non credere ai bugiardi.|No creas a los mentirosos.|a=sincero
coraggioso|valiente|koraddʒoˈzo|A|emo|2|Che ragazzo coraggioso!|¡Qué muchacho tan valiente!|a=codardo
invidioso|envidioso|inviˈdjɔzo|A|emo|3|Non essere invidioso del successo altrui.|No seas envidioso del éxito ajeno.
socievole|sociable|soˈtʃɛvole|A|emo|2|È una persona molto socievole.|Es una persona muy sociable.|a=introverso
chiacchierone|conversador (charlatán)|kjakkeroˈne|S|emo|3|Il chiacchierone del ufficio.|El charlatán de la oficina.|g=m;p=chiacchieroni
tirchio|tacaño|ˈtirkjo|A|emo|3|Non invitarlo, è tirchio.|No lo invites, es tacaño.|r=inf;a=generoso
pazienza|paciencia|patˈtsjentsa|S|emo|2|Ci vuole pazienza con i bambini.|Se necesita paciencia con los niños.|g=f;c=avere pazienza
umore|humor|uˈmore|S|emo|2|Oggi sono di buon umore.|Hoy estoy de buen humor.|g=m;c=di buon umore,di cattivo umore
simpatia|simpatía|simpaˈtia|S|emo|2|Mi è stata subito simpatica.|Me cayó bien desde el inicio.|g=f;n=Mi è simpatico = me cae bien
antipatia|antipatía|antiˈpatia|S|emo|3|Tra loro c'è antipatia.|Entre ellos hay antipatía.|g=f;a=simpatia
ammirazione|admiración|ammiraˈtsjone|S|emo|3|Guardo il tenore con ammirazione.|Miro al tenor con admiración.|g=f
stima|estima|ˈstima|S|emo|3|Ho grande stima di lui.|Tengo gran estima por él.|g=f
fiducia|confianza|fiˈdutʃa|S|emo|1|Ripongo piena fiducia in te.|Depositó plena confianza en ti.|g=f;c=dare fiducia
gelosia|celos|dʒeloˈzia|S|emo|2|La gelosia rovina le coppie.|Los celos arruinan a las parejas.|g=f
invidia|envidia|inˈvidia|S|emo|2|L'invidia è cattiva consigliera.|La envidia es mala consejera.|g=f
vergogna|vergüenza|verˈɡoɲɲa|S|emo|2|Che vergogna, ho dimenticato il suo nome!|¡Qué vergüenza, olvidé su nombre!|g=f;c=fare brutta figura
delusione|decepción|deluˈzjone|S|emo|2|Che delusione questo finale!|¡Qué decepción este final!|g=f
sorpresa|sorpresa|sorˈpresa|S|emo|1|Festeggiamo con una sorpresa.|Celebramos con una sorpresa.|g=f
noia|aburrimiento|ˈnɔja|S|emo|2|La noia del pomeriggio domenicale.|El aburrimiento de la tarde de domingo.|g=f
gioia|alegría|ˈdʒɔja|S|emo|2|La gioia di rivedere gli amici.|La alegría de reencontrar a los amigos.|g=f
tristezza|tristeza|trisˈtettsa|S|emo|3|La tristezza passa col tempo.|La tristeza pasa con el tiempo.|g=f
rabbia|rabia|rabbja|S|emo|2|Ha urlato dalla rabbia.|Gritó de rabia.|g=f;c=fare una rabbia
speranza|esperanza|speˈrantsa|S|emo|2|Coltiva la speranza anche nei momenti difficili.|Cultiva la esperanza también en los momentos difíciles.|g=f
ottimista|optimista|ottiˈmista|A|emo|2|Resta ottimista per l'esame.|Quédate optimista para el examen.|n=Invariable: un ottimista / un'ottimista
pessimista|pesimista|pessiˈmista|A|emo|3|Non fare il pessimista!|¡No seas pesimista!|n=Invariable
`, "A2", "k-a2");
