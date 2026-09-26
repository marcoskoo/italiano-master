import { parsePack } from "./compact";
import type { VocabWord } from "../types";

/* ── Pack K·B1-c · vida concreta: cocina, hogar, profesiones, banco ──── */

export const PACK_KB1C: VocabWord[] = parsePack(`
# ══ cucina: verbi ══
cuocere|cocinar|kwɔˈtʃere|V|ali|1|Cuocio la pasta al dente.|Cocino la pasta al dente.|n=Irregular: cuocio, cuoci; participio cotto
friggere|freír|ˈfriddʒere|V|ali|2|Friggo le melanzane nell'olio.|Frío las berenjenas en aceite.|n=Io friggo; participio fritto
bollire|hervir|bolˈlire|V|ali|2|L'acqua bolle in tre minuti.|El agua hierve en tres minutos.|n=Figurado: bollire di rabbia
arrostire|asar|arrosˈtire|V|ali|3|Arrostiamo il maiale al forno.|Asamos el cerdo al horno.|n=Io arrostisco (tipo -isc)
grigliare|parrillar|ɡriʎˈʎare|V|ali|3|Grigliamo le verdure estive.|Parrillamos las verduras de verano.
mescolare|mezclar|meˈskolare|V|ali|2|Mescolo le uova col formaggio.|Mezclo los huevos con el queso.|s=mischiare
versare|verter|verˈsare|V|ali|2|Versa il vino nei bicchieri.|Vierte el vino en las vasos.
sbucciare|pelar|sbukˈkjare|V|ali|3|Sbuccio le mele per la torta.|Pelo las manzanas para la torta.|n=Pelear (batirse) = battersi
grattugiare|rallar|ɡrattuˈdʒare|V|ali|3|Grattugio il parmigiano sulla pasta.|Rallo el parmesano sobre la pasta.
condire|aliñar (aderezar)|konˈdire|V|ali|3|Condiamo l'insalata col limone.|Aliñamos la ensalada con limón.|n=Io condisco (tipo -isc)
impastare|amasar|impaˈstare|V|ali|3|Impasto la farina col lievito.|Amaso la harina con levadura.
lievito|levadura|ljeˈvito|S|ali|3|Il lievito fresco per la pizza.|La levadura fresca para la pizza.|g=m;p=lieviti
crema|crema|ˈkrema|S|ali|2|Una crema al cioccolato densa.|Una crema de chocolate densa.|g=f;p=creme
sugo exists|salsa|ˈsuɡɡo|S|ali|2|Il sugo della nonna è il migliore.|La salsa de la nonna es la mejor.
pesto|pesto|ˈpɛsto|S|ali|3|Il pesto alla genovese.|El pesto a la genovesa.|g=m
tortellino|tortelini|tortelˈlino|S|ali|4|I tortellini in brodo.|Los tortelini en caldo.|g=m;p=tortellini
risotto|risotto|riˈzɔtto|S|ali|3|Il risotto alla milanese.|El risotto a la milanesa.|g=m;p=risotti
gnocchi|ñoquis|ˈɲɔkki|S|ali|3|Gli gnocchi di patate fatti in casa.|Los ñoquis de papa caseros.|g=m;n=Siempre plural
lasagne|lasaña|laˈzaɲɲe|S|ali|2|Le lasagne al forno della domenica.|La lasaña al horno del domingo.|g=f;n=Plural en italiano: le lasagne
carpaccio|carpaccio|karˈpattʃo|S|ali|4|Il carpaccio di manzo col rucola.|El carpaccio de res con rúcula.|g=m
bruschetta|bruschetta|brusˈketta|S|ali|3|Una bruschetta coi pomodorini.|Una bruschetta con tomatitos.|g=f;p=bruschette
digestivo|digestivo|didgesˈtivo|S|ris|4|Un digestivo dopo cena.|Un digestivo después de cenar.|g=m;p=digestivi
porzione exists|porción|porˈtsjone|S|ris|2|Una porzione di tiramisù.|Una porción de tiramisú.|g=f
tiramisù|tiramisú|tiramiˈsu|S|ali|3|Il tiramisù fatto in casa è imbattibile.|El tiramisú casero es imbatible.|g=m;n=Invariable

# ══ casa: manutenzione e giardinaggio ══
spolverare|quitar el polvo|spolveˈrare|V|cas|3|Spolvero la libreria il sabato.|Quito el polvo del librero los sábados.
strofinare|frotar|strofiˈnare|V|cas|3|Strofino la pentola incrostata.|Froto la olla incrustada.
lucidare|lustrar|lutʃiˈdare|V|cas|4|Lucido le scarpe per la festa.|Lustro los zapatos para la fiesta.
asciugare|secar|aʃʃuˈɡare|V|cas|2|Asciugo i piatti col canovaccio.|Seco los platos con el paño de cocina.|n=Canovaccio = paño de cocina (trapo)
stendere|tender (colgar)|stenˈdere|V|cas|3|Stendo il bucato sul balcone.|Tiendo la ropa en el balcón.|n=Participio: steso;c=stendere la mano
piegare|doblar|pjeˈɡare|V|cas|2|Piego le camicie con cura.|Doblo las camisas con cuidado.
imbiancare|pintar (blanquear)|imbjanˈkare|V|cas|4|Imbianchiamo il salotto domenica.|Pintamos la sala el domingo.
montare|instalar / batir|monˈtare|V|cas|2|Montiamo la mensola da soli.|Instalamos la repuesta nosotros mismos.|n=Montare le uova = batir los huevos
smontare|desmontar|zmonˈtare|V|tec|3|Smonto il rack per pulirlo.|Desmonto el estante para limpiarlo.|a=montare
avvitare|enroscar|avviˈtare|V|tec|3|Avvita la vite nel muro.|Enrosca el tornillo en la pared.
segaɾe|serrar|seˈɡare|V|tec|4|Sego l'asse a metà.|Serro la tabla a la mitad.
forare|perforar|foˈrare|V|tec|4|Foriamo il muro per il quadro.|Perforamos la pared para el cuadro.
piantare|plantar / clavar|pjanˈtare|V|nat|3|Pianto un chiodo nel muro.|Clavo un clavo en la pared.|c=piantare un albero
annaffiare|regar|annafˈfjare|V|nat|2|Annaffio i pomodori la sera.|Riego los tomates en la tarde.
potare|podar|poˈtare|V|nat|4|Poto le rose a febbraio.|Podo las rosas en febrero.
seminare|sembrar|semiˈnare|V|nat|3|Semino il basilico in vaso.|Siembro la albahaca en maceta.
vaso da fiori|maceta|ˈvazo da fˈfjori|L|nat|3|Un vaso da fiori di terracotta.|Una maceta de terracota.
prato|césped (prado)|ˈprato|S|nat|2|Il prato all'inglese del giardino.|El césped inglés del jardín.|g=m;p=prati
siepe|seto|ˈsjɛpe|S|nat|4|Una siepe di bosso intorno alla villa.|Un seto de boj alrededor de la villa.|g=f;p=siepi
terrazza|azotea|terˈrattsa|S|cas|3|Una terrazza con vista sui tetti.|Una azotea con vista a los techos.|g=f;p=terrazze
cantina exists|bodega|kanˈtina|S|cas|2|Il vino riposa in cantina.|El vino reposa en la bodega.
soffitta exists|ático|sofˈfitta|S|cas|3|Le valigie vecchie in soffitta.|Las maletas viejas en el ático.|g=f
lavanderia exists|lavandería|lavanˈderia|S|cas|2|Porto le tende in lavanderia.|Llevo las cortinas a la lavandería.|g=f
canovaccio|paño de cocina|kanoˈvattʃo|S|cas|4|Asciuga col canovaccio pulito.|Seca con el paño de cocina limpio.|g=m;p=canovacci
detersivo|detergente|deterˈsivo|S|cas|2|Il detersivo per i piatti.|El detergente para los platos.|g=m;p=detersivi
ammoniaca|amoniaco|ammoˈnjaka|S|cas|5|Pulisco il vetro con l'ammoniaca.|Limpio el vidrio con amoniaco.|g=f

# ══ professioni ══
barista|barista (cantinero)|baˈrista|S|pro|2|Il barista prepara il cappuccino.|El barista prepara el capuchino.|g=m;p=baristi
idraulico|plomero|idrauˈliko|S|pro|3|L'idraulico ripara il rubinetto.|El plomero repara la llave de agua.|g=m;p=idraulici
elettricista|electricista|elettritˈtʃista|S|pro|3|L'elettricista controlla l'impianto.|El electricista revisa la instalación.|g=m;p=elettricisti
muratore|albañil|muraˈtore|S|pro|4|Il muratore costruisce il muro.|El albañil construye la pared.|g=m;p=muratori
falegname|carpintero|faˈleɲɲame|S|pro|4|Il falegname costruisce la libreria.|El carpintero construye el librero.|g=m;p=falegnami
fabbro|herrero|ˈfabbro|S|pro|5|Il fabbro forgia il ferro.|El herrero forja el hierro.|g=m;p=fabbri
meccanico|mecánico|mekˈkaniko|S|pro|3|Il meccanico cambia l'olio.|El mecánico cambia el aceite.|g=m;p=meccanici
giardiniere|jardinero|dʒardiˈnjɛre|S|pro|4|Il giardiniere pota le siepi.|El jardinero poda los setos.|g=m
contadino|campesino|kontaˈdino|S|pro|3|Il contadino munge le mucche.|El campesino ordeña las vacas.|g=m;p=contadini
pescatore|pescador|peskaˈtore|S|pro|4|Il pescatore torna all'alba.|El pescador vuelve al amanecer.|g=m;p=pescatori
pasticciere|pastelero|pastitˈtʃjere|S|pro|4|Il pasticciere decora la torta.|El pastelero decora la torta.|g=m
cassiere|cajero|kasˈsjɛre|S|pro|3|Il cassiere batte lo scontrino.|El cajero emite el recibo.|g=m
ragioniere|contador|radʒoˈnjere|S|pro|4|Il ragioniere prepara il bilancio.|El contador prepara el balance.|g=m
commercialista|contador público|kommerʃaˈlista|S|pro|4|Il commercialista segue le tasse.|El contador público sigue los impuestos.|g=m;p=commercialisti
notaio|notario|noˈtaio|S|pro|5|Il notaio autentica il contratto.|El notario autentica el contrato.|g=m;p=notai
architetto|arquitecto|arkiˈtɛtto|S|pro|3|L'architetto ristruttura il loft.|El arquitecto remodela el loft.|g=m;p=architetti
veterinario|veterinario|veterinaˈrjo|S|pro|4|Il veterinario visita il gatto.|El veterinario examina al gato.|g=m;p=veterinari
farmacista|farmacéutico|farmaˈtʃista|S|pro|3|Il farmacista consiglia lo sciroppo.|El farmacéutico recomienda el jarabe.|g=m;p=farmacisti
pilota|piloto|piˈlɔta|S|pro|4|Il pilota atterra con la nebbia.|El piloto aterriza con niebla.|g=m;p=piloti
musicista|músico|muˈtʃista|S|mus|3|Il musicista suona il violino.|El músico toca el violín.|g=m;p=musicisti
artista|artista|arˈtista|S|sve|3|L'artista espone in galleria.|El artista expone en la galería.|g=m;n=Invariable m/f: l'artista, gli artisti
fotografo|fotógrafo|foˈtoɡrafo|S|pro|3|Il fotografo scatta il ritratto.|El fotógrafo toma el retrato.|g=m;p=fotografi
interprete|intérprete|interˈprɛte|S|pro|4|L'interprete traduce in simultanea.|El intérprete traduce en simultáneo.|g=m;p=interpreti
politico|político|poˈlitiko|S|pro|3|Il politico incontra i cittadini.|El político se reúne con los ciudadanos.|g=m;p=politici;n=Adj. anche: una carriera politica
preside|director de colegio|preˈzide|S|pro|4|Il preside accoglie i genitori.|El director recibe a los padres.|g=m;p=presidi
imprenditore|empresario|imprendiˈtore|S|lav|3|L'imprenditore investe nel sud.|El empresario invierte en el sur.|g=m;p=imprenditori
commerciante|comerciante|kommerˈtʃante|S|lav|4|Il commerciante espone la frutta.|El comerciante exhibe la fruta.|g=m;p=commercianti
artigiano|artesano|artidʒˈɲano|S|pro|4|L'artigiano intaglia il legno.|El artesano talla la madera.|g=m;p=artigiani
operaio|obrero|opeˈrajo|S|pro|4|L'operaio lavora al turno di notte.|El obrero trabaja en el turno de noche.|g=m;p=operai
libero professionista|profesional independiente|ˈlibero profesjoˈnista|L|lav|4|Come libero professionista pago più tasse.|Como profesional independiente pago más impuestos.

# ══ banca e finanze (ampliación) ══
assicurazione|seguro|assikuratˈtsjone|S|fin|2|L'assicurazione dell'auto è scaduta.|El seguro del carro venció.|g=f;p=assicurazioni;c=assicurazione sulla vita
deposito|depósito|deˈpɔzito|S|fin|3|Un deposito di garanzia per l'affitto.|Un depósito de garantía por el alquiler.|g=m;p=depositi
bonifico|transferencia|boˈnifiko|S|fin|3|Faccio un bonifico per l'affitto.|Hago una transferencia por el alquiler.|g=m;p=bonifici
rata|cuota|ˈrata|S|fin|2|Pago la rata del mutuo a fine mese.|Pago la cuota del crédito a fin de mes.|g=f;p=rate
debito|deuda|deˈbito|S|fin|3|Un debito di mille euro con la banca.|Una deuda de mil euros con el banco.|g=m;p=debiti;a=credito
saldo|saldo|ˈsaldo|S|fin|4|Il saldo del conto è positivo.|El saldo de la cuenta es positivo.|g=m;p=saldi;n=Saldi anche = rebajas
tasso di interesse|tasa de interés|ˈtasso di inteˈresse|L|fin|4|I tassi di interesse sono saliti.|Las tasas de interés subieron.
spesa|gasto|ˈspesa|S|fin|2|La spesa settimanale al supermercato.|El gasto semanal del supermercado.|g=f;p=spese;c=a spese di
entrata|ingreso (entrada)|enˈtrata|S|fin|3|Le entrate fiscali dello stato.|Los ingresos fiscales del estado.|g=f;p=entrate;a=uscita
uscita|salida (egreso)|uˈʃita|S|fin|3|Uscite di sicurezza e uscite di cassa.|Salidas de emergencia y egresos de caja.|g=f;p=uscite;a=entrata
beneficiario|beneficiario|benevitʃaˈrjo|S|fin|4|Il beneficiario del bonifico.|El beneficiario de la transferencia.|g=m;p=beneficiari
esenzione|exoneración|eʃenˈtsjone|S|fin|5|L'esenzione fiscale per i dipendenti.|La exoneración fiscal para los trabajadores.|g=f
detrazione|deducción|detratˈtsjone|S|fin|5|Le detrazioni per le spese mediche.|Las deducciones por gastos médicos.|g=f;p=detrazioni
ricevuta|recibo|ritʃeˈvuta|S|fin|3|Conserva la ricevuta del pagamento.|Guarda el recibo del pago.|g=f;p=ricevute;n=Scontrino = recibo fiscal de tienda

# ══ numeri e quantita B1 ══
zero|cero|ˈdzɛro|N|tmp|1|La temperatura è scesa a zero.|La temperatura bajó a cero.|n=Telefono: digita zero per la centralinista
percento|por ciento|perˈtʃɛnto|N|sci|2|Il dieci percento degli studenti.|El diez por ciento de los estudiantes.
percentuale|porcentaje|pertʃentuˈale|S|sci|3|Una percentuale alta di disoccupazione.|Un porcentaje alto de desempleo.|g=f;p=percentuali
frazione|fracción|fratˈtsjone|S|sci|3|Una frazione semplice: tre quarti.|Una fracción simple: tres cuartos.|g=f;n=Anche: frazione = aldea/pueblo pequeño
triplo|triple|ˈtripplo|A|tmp|3|Il triplo sforzo, il triplo risultato.|El triple esfuerzo, el triple resultado.
dozzina|docena|dotˈtsina|S|sci|3|Una dozzina di ostriche fresche.|Una docena de ostras frescas.|g=f;p=dozzine
decina|decena|deˈtʃina|S|sci|4|Una decina di persone in fila.|Una decena de personas en fila.|g=f;p=decine
centinaio|centenar|tʃentinaˈjo|S|sci|4|Centinaia di fan allo stadio.|Cientos de fanáticos en el estadio.|g=m;p=centinaia
migliaio|millar|miʎˈʎaio|S|sci|4|Migliaia di Stelle in cielo.|Miles de estrellas en el cielo.|g=m;p=migliaia
miliardo|mil millones|miliˈardo|N|tmp|3|Un miliardo di euro di danni.|Mil millones de euros de daños.|g=m;p=miliardi;n=¡Ojo! Un miliardo = mil millones, no "un billón"
cifra exists|cifra|ˈtʃifra|S|fin|2|Una cifra a sei zeri.|Una cifra de seis ceros.|g=f

# ══ traffico e guida ══
patente exists|licencia de conducir|paˈtɛnte|S|tra|2|Ho preso la patente a diciotto anni.|Saqué la licencia a los dieciocho.
guidatore|conductor|ɡwidaˈtore|S|tra|3|Un guidatore prudente in città.|Un conductor prudente en la ciudad.|g=m;p=guidatori
semaforo|semáforo|semaˈforo|S|cit|2|Fermati al semaforo rosso.|Detente en el semáforo rojo.|g=m;p=semafori
incrocio|cruce|inkruˈtʃo|S|cit|3|Gira a destra all'incrocio.|Gira a la derecha en el cruce.|g=m;p=incroci
rotonda|redoma (rotonda)|roˈtonda|S|cit|3|Alla rotonda prendi la seconda.|En la redoma toma la segunda.|g=f;p=rotonde
striscia pedonale|paso de cebra|ˈstriʃʃa pedoˈnale|L|cit|4|Attraversa sulla striscia pedonale.|Cruza por el paso de cebra.
senso unico|sentido único|ˈsɛnzo ˈuːniko|L|cit|4|Attenzione, senso unico.|Cuidado, sentido único.
divieto di sosta|prohibido estacionar|diˈvjɛːto di ˈsɔsta|L|cit|4|C'è divieto di sosta qui sabato.|Hay prohibido estacionar aquí el sábado.
multa exists|multa|ˈmulta|S|fin|3|Mi hanno fatto una multa per eccesso di velocità.|Me pusieron una multa por exceso de velocidad.|g=f;p=multe
incidente|accidente|intʃiˈdɛnte|S|tra|3|Un incidente leggero in tangenziale.|Un accidente leve en la vía expresa.|g=m;p=incidenti
tamponamento|choque (alcance)|tamponamenˈto|S|tra|5|Un tamponamento a catena sull'autostrada.|Un choque en cadena en la autopista.|g=m
vergogna exists|vergüenza|verˈɡoɲɲa|S|emo|2|Arrossì dalla vergogna.|Se puso roja de la vergüenza.|g=f

# ══ qualita della persona ══
puntuale exists|puntual|puntuˈale|A|lav|2|Il treno è puntualissimo oggi.|El tren es puntualísimo hoy.|a=in ritardo
educato exists|educado|eduˈkato|A|rel|2|Che bambino educato!|¡Qué niño tan educado!
umile|humilde|ˈumile|A|emo|3|Resta umile nonostante il successo.|Sigue humilde a pesar del éxito.|a=superbo
superbo|arrogante (soberbio)|suˈpɛrbo|A|emo|4|Un campione mai superbo col pubblico.|Un campeón nunca arrogante con el público.|a=umile;n=¡Falso amigo parcial! superbo = arrogante; "soberbio" magnífico = magnifico
generoso exists|generoso|dʒeneˈrɔzo|A|emo|2|Un ospite generoso e premuroso.|Un anfitrión generoso y atento.
altruista|altruista|altruˈista|A|emo|4|Un gesto altruista senza secondi fini.|Un gesto altruista sin segundas intenciones.|n=Invariable
egoista exists|egoísta|eɡoˈista|A|emo|2|Non essere egoista, condividi!|No seas egoísta, ¡comparte!
vanitoso|vanidoso|vaniˈtozo|A|emo|4|Un attore vanitoso e capriccioso.|Un actor vanidoso y caprichoso.
capriccioso|caprichoso|kapritˈtʃɔzo|A|emo|4|Un bambino capriccioso a tavola.|Un niño caprichoso en la mesa.
esigente exists|exigente|eziˈdʒɛnte|A|emo|3|Un capo esigente ma giusto.|Un jefe exigente pero justo.
perfezionista|perfeccionista|perfettsjoˈnista|S|emo|4|Un perfezionista controlla ogni dettaglio.|Un perfeccionista controla cada detalle.|g=m;n=Invariable
competitivo|competitivo|kompetiˈtivo|A|spt|3|Uno spirito competitivo sano.|Un espíritu competitivo sano.
curioso|curioso|kuˈrjɔzo|A|emo|2|Un bambino curioso fa mille domande.|Un niño curioso hace mil preguntas.|n=Curioso también = raro: un fatto curioso
furbo|vivo (astuto)|ˈfurbo|A|emo|3|Il più furbo della classe si copia tutto.|El más vivo de la clase copia todo.|r=inf
onesto exists|honrado|oˈnɛsto|A|emo|2|Un commerciante onesto pesa giusto.|Un comerciante honrado pesa justo.
sensibile|sensible / sensible|senˈsibile|A|emo|3|È sensibile al destino degli animali.|Es sensible al destino de los animales.|ff=1;n=¡Falso amigo! sensibile = sensible/flexible a emociones; ES "sensible" = ragionevole
testardo exists|terco|teˈstardo|A|emo|3|Testardo come un mulo!|¡Terco como una mula!
entusiasta exists|entusiasta|entuziˈasta|A|emo|2|Un pubblico entusiasta applaude.|Un público entusiasta aplaude.|n=Invariable
timido exists|tímido|ˈtimido|A|emo|2|Il ragazzino timido arrossisce.|El chico tímido se sonroja.
introverso|introvertido|introvɛrso|A|emo|4|Preferisce lavorare da solo: è introverso.|Prefiere trabajar solo: es introvertido.|a=estroverso
estroverso|extrovertido|estroˈvɛrso|A|emo|4|Il presentatore è estroverso e spiritoso.|El presentador es extrovertido y chistoso.
spiritoso|chistoso (ingenioso)|spiriˈtɔso|A|emo|3|Un collega spiritoso rende tutto leggero.|Un colega chistoso hace todo liviano.
ironico|irónico|iˈrɔniko|A|cmu|4|Un tono ironico ma gentile.|Un tono irónico pero amable.
sarcasmo|sarcasmo|sarˈkazmo|S|cmu|5|Il suo sarcasmo ferisce senza colpire.|Su sarcasmo hiere sin golpear.|g=m

# ══ tempo e avvenimenti ══
evento|evento|eˈvɛnto|S|att|3|Un evento culturale gratuito.|Un evento cultural gratuito.|g=m;p=eventi
avvenimento|acontecimiento|avveniˈmento|S|att|4|Un avvenimento storico per il paese.|Un acontecimiento histórico para el pueblo.|g=m;p=avvenimenti
inaugurazione|inauguración|inauguratˈtsjone|S|att|4|L'inaugurazione della mostra domani.|La inauguración de la exposición mañana.|g=f
anniversario|aniversario|anniverˈsarjo|S|tmp|3|L'anniversario di matrimonio dei nonni.|El aniversario de matrimonio de los abuelos.|g=m;p=anniversari
appuntamento fisso|cita fija|appuntamenˈto ˈfisso|L|tmp|4|Il cinema è il nostro appuntamento fisso.|El cine es nuestra cita fija.
cerimonia|ceremonia|tʃeriˈmɔnja|S|ist|4|La cerimonia civile in municipio.|La ceremonia civil en la municipalidad.|g=f;p=cerimonie
matrimonio|matrimonio|matriˈmɔnjo|S|fam|2|Il matrimonio si celebra in chiesa.|El matrimonio se celebra en la iglesia.|g=m;p=matrimoni;c=matrimonio riparatore
nozze|boda|ˈnɔttse|S|fam|3|Le nozze d'oro dei nonni.|Las bodas de oro de los abuelos.|g=f;n=Siempre plural: le nozze
fidanzamento|noviazgo|fidantsaˈmento|S|rel|4|Un fidanzamento lungo cinque anni.|Un noviazgo largo de cinco años.|g=m;p=fidanzamenti
divorzio|divorcio|divɔrˈtsjo|S|rel|3|Il divorzio si è concluso in pace.|El divorcio terminó en paz.|g=m;p=divorzi
lutto|luto|ˈlutto|S|emo|5|Il lutto nazionale di tre giorni.|El luto nacional de tres días.|g=m
funerale|funeral|funeˈrale|S|emo|4|Il funerale del maestro di musica.|El funeral del maestro de música.|g=m;p=funerali
eredità|herencia|erediˈta|S|fin|4|Un'eredità inaspettata dallo zio.|Una herencia inesperada del tío.|g=f;n=Invariable
testamento|testamento|testaˈmento|S|fin|4|Il testamento olografo del nonno.|El testamento ológrafo del abuelo.|g=m;p=testamenti
`, "B1", "k-b1c");
