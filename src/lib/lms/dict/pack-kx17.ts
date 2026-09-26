import { parsePack } from "./compact";
import type { VocabWord } from "../types";

/* ── Pack K·X17 · cierre hacia las 5000 (A2→C1) ────────────────────── */

export const PACK_KX17: VocabWord[] = parsePack(`
# ══ sostantivi quotidiani ══
fila|fila|fila|S|ast|3|La fila al botteghino si muove.|La fila en la taquilla avanza.|g=f;p=file;c=fare la fila
biglietteria|taquilla|biʎʎetteˈria|S|art|3|La biglietteria del museo chiusa.|La taquilla del museo cerrada.|g=f;p=biglietterie
prevendita|preventa|prevenˈdita|S|cmu|4|I biglietti in prevendita online.|Las entradas en preventa en línea.|g=f;p=prevendite
ingresso ridotto|entrada reducida|inɡrɛsso ridwɔtto|L|art|4|L'ingresso ridotto per gli studenti.|La entrada reducida para estudiantes.
audioguida|audioguía|audioˈɡwida|S|art|4|L'audioguida in spagnolo del museo.|La audioguía en español del museo.|g=f;p=audioguide
guardaroba|guardarropa|ɡwardaroˈba|S|art|4|Il guardaroba del teatro gratis.|El guardarropa del teatro gratis.|g=m;n=Invariable
armadietto|casillero|armadjetto|S|spt|4|Un armadietto con chiave dello spogliatoio.|Un casillero con llave del vestuario.|g=m;p=armadietti
parchimetro|parquímetro|parkiˈmetro|S|cit|4|Il parchimetro delle strisce blu.|El parquímetro de las rayas azules.|g=m;p=parchimetri
strisce blu|rayas azules|striʃʃe blu|L|cit|4|Le strisce blu a pagamento in centro.|Las rayas azules de pago en el centro.
disco orario|disco de horario|disko oraˈrjo|S|cit|4|Il disco orario sul cruscotto.|El disco de horario en el tablero.|g=m;p=dischi orari
cruscotto|tablero|kruˈʃkɔtto|S|tra|4|La spia del cruscotto accesa.|La lucecita del tablero encendida.|g=m;p=cruscotti
spia|luz testigo|spia|S|tra|4|La spia dell'olio rossa.|La luz testigo del aceite roja.|g=f;p=spie;n=Anche: la spia = el espía
 carro attrezzi|grúa|karro attreˈttsi|L|tra|4|Il carro attrezzi dell'assicurazione.|La grúa del seguro.
soccorso stradale|auxilio vial|soˈkɔrso straˈdale|L|tra|4|Il soccorso stradale in autostrada.|El auxilio vial en la autopista.
cavetto|cables de arranque|kavetto|S|tra|5|Il cavetto per la batteria scarica.|Los cables para la batería descargada.|g=m;p=cavetti
batteria scarica|batería descargada|batteria skarika|L|tra|4|La macchina con la batteria scarica.|El carro con la batería descargada.
fare la benzina|echar gasolina|fare la benzina|L|tra|3|Facciamo benzina prima dell'autostrada.|Echamos gasolina antes de la autopista.
dare gas|acelerar (dar gas)|dare ɡas|L|tra|4|Dai gas che è verde!|¡Acelera que el semáforo está en verde!|r=inf
ingranare|engranchar|inɡraˈnare|V|tra|5|Ingranai la prima al semaforo.|Enganché la primera en el semáforo.|r=col
scalare la marcia|bajar la marcha|skalare la ˈmartsja|L|tra|4|Scala la marcia in curva.|Baja la marcha en la curva.
stazione di servizio|estación de servicio|statˈtsjone di serviˈtsjo|L|tra|4|Una stazione di servizio self-service.|Una estación de servicio autoservicio.
autogrill|área de servicio|autoɡrill|S|tra|4|Un autogrill dell'autostrada col bar.|Un área de servicio de la autopista con bar.|g=m;n=Marca italica generica
area di servizio|área de servicio|area di serviˈtsjo|L|tra|4|La prossima area di servizio a venti chilometri.|La próxima área de servicio a veinte kilómetros.
sosta|parada|sosta|S|tra|3|Una sosta di dieci minuti all'autogrill.|Una parada de diez minutos en el área.|g=f;p=soste;c=area di sosta
parcheggio a pagamento|estacionamiento de pago|parkeddʒo a pagaˈmento|L|tra|3|Un parcheggio a pagamento sotterraneo.|Un estacionamiento de pago subterráneo.
box auto|garaje cerrado|bɔks ˈauto|S|cas|4|Il box auto del condominio.|El garaje cerrado del edificio.|g=m;n=Invariable
autorimessa|garaje (negocio)|autorimɛssa|S|tra|5|Un'autorimessa in centro storico.|Un garaje en el centro histórico.|g=f;p=autorimesse

# ══ tempo libero e relazioni ══
ritrovo|punto de encuentro|ritrovo|S|rel|4|Il ritrovo in piazza alle otto.|El punto de encuentro en la plaza a las ocho.|g=m;p=ritrovi;c=punto di ritrovo
uscire con|salir con|uˈʃire kon|L|rel|2|Esco con Marco da un anno.|Salgo con Marco desde hace un año.|n=Uscire anche = salir de casa
sposalizio|boda (esponsales)|spoʃpalittsjo|S|rel|5|Lo sposalizio della primavera in poesia.|Las bodas de la primavera en poesía.|g=m;p=sposalizi;r=let
promessa di matrimonio|promesa de matrimonio|promessa di matrimonio|L|rel|4|La promessa di matrimonio sull'anello.|La promesa de matrimonio en el anillo.
anello di fidanzamento|anillo de compromiso|anello di fidantsamento|L|rel|4|L'anello di fidanzamento col diamante.|El anillo de compromiso con diamante.
luna di miele|luna de miel|luna di mjɛle|L|vig|3|La luna di miele alle Maldive.|La luna de miel en Maldivas.
rinfresco|refrigerio (coctel)|rinˈfrɛʃʃo|S|rel|4|Un rinfresco dopo la cerimonia.|Un coctel tras la ceremonia.|g=m;p=rinfreschi
ricevimento|recepción|ritʃevimento|S|rel|4|Il ricevimento di nozze in villa.|La recepción de bodas en villa.|g=m;p=ricevimenti
sposo|novio|spɔzo|S|rel|2|Lo sposo emozionato all'altare.|El novio emocionado en el altar.|g=m;p=sposi;a=sposa
sposa|novia|spɔza|S|rel|2|La sposa col velo di pizzo.|La novia con el velo de encaje.|g=f;p=spose;a=sposo
strascico|cola (de vestido)|straʃʃiko|S|rop|5|Lo strascico dell'abito da sposa.|La cola del vestido de novia.|g=m;p=strascichi
damigella|dama de bodas|damiˈdʒella|S|rel|4|Le damigelle col mazzolino.|Las damas con el ramillete.|g=f;p=damigelle
fede|alianza|fede|S|rel|3|Le fedi d'oro incrociate.|Las alianzas de oro cruzadas.|g=f;p=fedi;c=fede nuziale
bouquet|ramo (bouquet)|bukɛ|S|rel|4|Il bouquet della sposa con rose bianche.|El ramo de la novia con rosas blancas.|g=m;n=Invariable
torta nuziale|torta de bodas|torta nutˈtsjale|S|rel|4|La torta nuziale a tre piani.|La torta de bodas de tres pisos.|g=f;p=torte
battesimo|bautizo|battezizmo|S|rel|4|Il battesimo della nipotina.|El bautizo de la nietecita.|g=m;p=battesimi
cresima|confirmación|krezima|S|rel|4|La cresima del figlio maggiore.|La confirmación del hijo mayor.|g=f;p=cresime
comunione|comunión|komunjone|S|rel|4|La prima comunione in chiesa.|La primera comunión en la iglesia.|g=f;p=comunioni
cresimando|confirmante|krezimando|S|rel|5|Il cresimando col vescovo.|El confirmante con el obispo.|g=m;p=cresimandi
vescovo|obispo|veskovo|S|rel|4|Il vescovo in visita pastorale.|El obispo en visita pastoral.|g=m;p=vescovi
arcivescovo|arzobispo|artʃiveskovo|S|rel|5|L'arcivescovo di Milano.|El arzobispo de Milán.|g=m;p=arcivescovi
cardinale|cardenal|kardiˈnale|S|rel|5|Il cardinale celebrante in basilica.|El cardenal celebrante en la basílica.|g=m;p=cardinali
parroco|párroco|parroko|S|rel|4|Il parroco don Antonio.|El párroco don Antonio.|g=m;p=parroci
parrocchia|parroquia|parrokkia|S|rel|4|La parrocchia del quartiere.|La parroquia del barrio.|g=f;p=parrocchie
chiesetta|iglesita|kjezetta|S|rel|4|Una chiesetta di campagna bianca.|Una iglesita de campo blanca.|g=f;p=chiesette
santuario|santuario|santuˈarjo|S|rel|4|Il santuario in montagna.|El santuario en la montaña.|g=m;p=santuari
pellegrino|peregrino|pellegrino|S|rel|4|I pellegrini sul cammino di Assisi.|Los peregrinos en el camino de Asís.|g=m;p=pellegrini
cammino|camino (sendero)|kamˈmino|S|vig|4|Il cammino di Santiago a piedi.|El camino de Santiago a pie.|g=m;p=cammini
eremo|ermita|eremo|S|rel|5|Un eremo francescano sul monte.|Una ermita franciscana en el monte.|g=m;p=eremi
monastero|monasterio|monastero|S|rel|4|Il monastero di Montecassino.|El monasterio de Montecassino.|g=m;p=monasteri
monaco|monje|monako|S|rel|4|Un monaco benedettino in preghiera.|Un monje benedictino en oración.|g=m;p=monaci;n=Anche scherzoso per la BMW (monovolume)
suora|monja|suora|S|rel|3|Una suora di clausura sorridente.|Una monja de clausura sonriente.|g=f;p=suore
frate|fraile|frate|S|rel|4|Un frate francescano scalzo.|Un fraile franciscano descalzo.|g=m;p=frati
novizio|novicio|novitso|S|rel|5|Un novizio in ritiro spirituale.|Un novicio en retiro espiritual.|g=m;p=novizi
`, "B1", "k-kx17");
