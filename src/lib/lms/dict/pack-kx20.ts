import { parsePack } from "./compact";
import type { VocabWord } from "../types";

/* ── Pack K·X20 · pack de cierre (A2→B2) ───────────────────────────── */

export const PACK_KX20: VocabWord[] = parsePack(`
# ══ sostantivi comuni mancanti ══
scatolina|cajita|skatolina|S|cmp|4|Una scatolina di latta dei ricordi.|Una cajita de lata de recuerdos.|g=f;p=scatoline
barattolino|frasquito|barattolino|S|cmp|4|Un barattolino di miele di acacia.|Un frasquito de miel de acacia.|g=m;p=barattolini
portachiavi|llavero|portakjavi|S|cmp|3|Un portachiavi col portafortuna.|Un llavero con el amuleto.|g=m;n=Invariable
chiavetta USB|memoria USB|kjavetta usb|L|tec|3|Una chiavetta USB da trentadue giga.|Una memoria USB de treinta y dos gigas.
hard disk|disco duro|hard disk|S|tec|4|Un hard disk esterno per il backup.|Un disco duro externo para el respaldo.|g=m;n=Invariable
backup|respaldo|backup|S|tec|3|Il backup settimanale del computer.|El respaldo semanal del computador.|g=m;n=Invariable
toner|tóner|toner|S|tec|4|Il toner della stampante esaurito.|El tóner de la impresora agotado.|g=m;n=Invariable
inchiostro|tinta (escritura)|inchiˈostro|S|stu|4|La penna a inchiostro blu.|La pluma de tinta azul.|g=m;n=Invariable
penna a sfera|bolígrafo|penna a sfɛra|L|stu|3|Una penna a sfera rossa.|Un bolígrafo rojo.
righello|regla|riɡɡello|S|stu|3|Un righello di plastica trasparente.|Una regla de plástico transparente.|g=m;p=righelli
compasso|compás|kompasso|S|stu|4|Il compasso per la circonferenza.|El compás para la circunferencia.|g=m;p=compassi
goniometro|transportador|ɡonioˈmetro|S|stu|5|Il goniometro di geometria.|El transportador de geometría.|g=m;p=goniometri
diagramma|diagrama|diaɡramma|S|sci|4|Un diagramma di flusso chiaro.|Un diagrama de flujo claro.|g=m;p=diagrammi
grafico|gráfico|ɡrafiko|S|sci|3|Un grafico a torta delle vendite.|Un gráfico de torta de las ventas.|g=m;p=grafici
tabella|tabla|taˈbella|S|sci|3|La tabella dei dati aggiornata.|La tabla de datos actualizada.|g=f;p=tabelle

# ══ tempo e routine ══
aurora|aurora|aurora|S|nat|4|L'aurora rosa sull'Appennino.|La aurora rosada sobre los Apeninos.|g=f;n=Invariable
crepuscolo|crepúsculo|krepuskolo|S|nat|4|Il crepuscolo viola di agosto.|El crepúsculo violeta de agosto.|g=m;p=crepuscoli;r=let
imbrunire|anochecer|imbruniˈre|V|tmp|5|D'imbrunire le luci si accendono.|Al anochecer las luces se encienden.|r=let
notte fonda|media noche|notte fonda|L|tmp|3|Svegliarsi nel cuore della notte fonda.|Despertarse en el corazón de la noche.
cuore della notte|corazón de la noche|kwore della notte|L|tmp|4|Il treno parte nel cuore della notte.|El tren parte en el corazón de la noche.
primissimo mattino|muy de mañana|primissimo matˈtino|L|tmp|4|Il volo parte al primissimo mattino.|El vuelo sale muy de mañana.
tardo pomeriggio|tarde (última hora)|tardo pomeriggio|L|tmp|3|La merenda del tardo pomeriggio.|La merienda de la última hora de la tarde.
vigilia|víspera|vidʒilia|S|tmp|4|La vigilia di Natale in cucina.|La víspera de Navidad en la cocina.|g=f;p=vigilie;c=la vigilia di
decennio|década|deʧennjo|S|tmp|4|Un decennio di cambiamenti radicali.|Una década de cambios radicales.|g=m;p=decenni
ventennio|veintena (20 años)|ventennjo|S|tmp|5|Il ventennio fascista storico.|El ventenio fascista histórico.|g=m;p=ventenni;n=In storia italiana: il Ventennio
trentennio|treintena|trentennjo|S|tmp|5|Un trentennio di carriera in banca.|Un treintenio de carrera en el banco.|g=m;p=trentenni
millennio|milenio|millennjo|S|tmp|5|Un millennio di storia romana.|Un milenio de historia romana.|g=m;p=millenni
a.C.|a.C.|a tʃi|L|tmp|4|Roma fondata nel 753 a.C.|Roma fundada en 753 a.C.|n=Avanti Cristo; anche d.C. (dopo Cristo)
dopo Cristo|después de Cristo|dopo kristo|L|tmp|4|Il duemila dopo Cristo.|El dos mil después de Cristo.
epoca romana|época romana|epoka romana|L|tmp|4|Un anfiteatro dell'epoca romana.|Un anfiteatro de la época romana.
epoca moderna|época moderna|epoka moderna|L|tmp|4|La storia dell'epoca moderna.|La historia de la época moderna.
epoca contemporanea|época contemporánea|epoka kontemporaˈnea|L|tmp|4|L'arte dell'epoca contemporanea.|El arte de la época contemporánea.
epoca medievale|época medieval|epoka medjeˈvale|L|tmp|4|Un borgo dell'epoca medievale.|Un pueblo de la época medieval.
medioevo|medioevo|medjoevo|S|tmp|4|Il medioevo dei comuni italiani.|El medioevo de los comunos italianos.|g=m;n=Invariable
rinascimento|renacimiento|rinaʃʃimento|S|art|3|Il rinascimento fiorentino.|El renacimiento florentino.|g=m;c=Quattrocento e Cinquecento
quattrocento|cuatrocientos (1400)|kwattroʧento|N|tmp|4|La pittura del Quattrocento.|La pintura del Quattrocento.
cinquecento|quinientos (1500)|tʃinkweʧento|N|tmp|4|Il Cinquecento di Venezia.|El Cinquecento de Venecia.
seicento|seiscientos (1600)|seiʧento|N|tmp|4|Il barocco del Seicento.|El barroco del Seicento.
settecento|setecientos (1700)|setteʧento|N|tmp|4|L'illuminismo del Settecento.|La ilustración del Settecento.
ottocento|ochocientos (1800)|ottoʧento|N|tmp|4|Il romanzo dell'Ottocento.|La novela del Ottocento.
novecento|novecientos (1900)|noveʧento|N|tmp|4|L'arte del Novecento.|El arte del Novecento.
duemila|dos mil|duemila|N|tmp|3|La generazione del duemila.|La generación del dos mil.

# ══ espressioni con il tempo ══
oggi come oggi|hoy en día|odʒi kome odʒi|L|tmp|3|Oggi come oggi non si può più.|Hoy en día ya no se puede.|r=inf
al giorno d'oggi|en el día de hoy|al dʒorno doɡdʒi|L|tmp|3|Al giorno d'oggi tutto è online.|En el día de hoy todo es en línea.
ai giorni nostri|en nuestros días|ai dʒorni nostri|L|tmp|3|Ai giorni nostri si vive di corsa.|En nuestros días se vive apurado.
tempo fa|hace tiempo|tempo fa|L|tmp|3|Tempo fa abitavamo insieme.|Hace tiempo vivíamos juntos.
tempo addietro|hace bastante tiempo|tempo addietro|L|tmp|4|Tempo addietro era diverso.|Hace bastante tiempo era distinto.
un tempo|en otro tiempo|un tempo|L|tmp|4|Un tempo questo era un prato.|En otro tiempo esto era un prado.
di questi tempi|últimamente|di kwesti tempi|L|tmp|4|Di questi tempi si risparmia.|Últimamente se ahorra.
per il momento|por el momento|per il moˈmento|L|tmp|3|Per il momento restiamo qui.|Por el momento nos quedamos aquí.
al momento|en este momento|al moˈmento|L|tmp|3|Al momento sono occupato.|En este momento estoy ocupado.
di ora in ora|de hora en hora|di ora in ora|L|tmp|4|La situazione cambia di ora in ora.|La situación cambia de hora en hora.
di giorno in giorno|de día en día|di dʒorno in dʒorno|L|tmp|4|Migliora di giorno in giorno.|Mejora de día en día.
col passare dei giorni|al pasar de los días|kol passare dei dʒorni|L|tmp|4|Col passare dei giorni si calmò.|Al pasar de los días se calmó.
col tempo|con el tiempo|kol tempo|L|tmp|3|Col tempo tutto si sistema.|Con el tiempo todo se arregla.
prima o poi|tarde o temprano|prima o poi|L|tmp|3|Prima o poi mi chiami.|Tarde o temprano me llamas.
fin da subito|desde ya|fin da subito|L|tmp|4|Fin da subito si capiva.|Desde ya se entendía.|r=for
subito dopo|justo después|subito dopo|L|tmp|3|Subito dopo la pausa riprendiamo.|Justo después de la pausa seguimos.
poco prima|un poco antes|poko prima|L|tmp|3|Arrivò poco prima di te.|Llegó un poco antes que tú.
poco dopo|un poco después|poko dopo|L|tmp|3|Poco dopo capì tutto.|Un poco después entendió todo.
ben presto|muy pronto|ben presto|L|tmp|4|Ben presto si fece sera.|Muy pronto se hizo de noche.|r=let
in anticipo|con anticipación|in antiˈtʃipo|L|tmp|3|Arrivo in anticipo di dieci minuti.|Llego con diez minutos de anticipación.|a=in ritardo
con largo anticipo|con mucha anticipación|kon largo antiˈtʃipo|L|tmp|4|Prenota con largo anticipo.|Reserva con mucha anticipación.
all'ultimo momento|a última hora|allˈultimo moˈmento|L|tmp|3|Rimanda all'ultimo momento.|Aplaza a última hora.
all'ultimo minuto|en el último minuto|allˈultimo miˈnuto|L|tmp|3|Decise all'ultimo minuto.|Decidió en el último minuto.
sul tardi|ya tarde|sul tardi|L|tmp|4|Sul tardi si cena.|Ya tarde se cena.|r=inf
a fine giornata|a fin de la jornada|a fine dʒornata|L|tmp|4|A fine giornata si è distrutti.|A fin de la jornada se está destrozado.

# ══append: sartoria e cucito ══
foulard|pañuelo (bufanda)|fulard|S|rop|4|Un foulard di seta al collo.|Un pañuelo de seda al cuello.|g=m;n=Invariable
scialle|chal|ʃʃalle|S|rop|5|Uno scialle di lana della nonna.|Un chal de lana de la abuela.|g=m;p=sciali
mantello|capa|manˈtɛllo|S|rop|5|Un mantello nero da teatro.|Una capa negra de teatro.|g=m;p=mantelli
gilet|chaleco|dʒile|S|rop|4|Un gilet di lana fatto a mano.|Un chaleco de lana hecho a mano.|g=m;n=Invariable
blazer|blazer|blejzer|S|rop|4|Un blazer blu navy elegante.|Un blazer azul marino elegante.|g=m;n=Invariable
smoking|esmoquin|smokinɡ|S|rop|5|Lo smoking dello sposo inglese.|El esmoquin del novio inglés.|g=m;n=Invariable
abito da sera|vestido de gala|abito da ˈsera|L|rop|4|Un abito da sera di alta moda.|Un vestido de gala de alta costura.
tailleur|traje sastre|tailleur|S|rop|5|Un tailleur pantalone grigio.|Un traje sastre pantalón gris.|g=m;n=Invariable
sartoria|sastrería|sartoˈria|S|pro|4|Una sartoria napoletana di fama.|Una sastrería napolitana de fama.|g=f;p=sartorie
ricamo|bordado|riˈkamo|S|art|4|Un ricamo a punto croce.|Un bordado a punto de cruz.|g=m;p=ricami
merletto|encaje|merˈlɛtto|S|art|4|Un merletto di Burano pregiato.|Un encaje de Burano preciado.|g=m;p=merletti
pizzo|encaje (tela)|pittso|S|art|4|Una tenda di pizzo bianco.|Una cortina de encaje blanco.|g=m;p=pizzi
telaio|bastidor (telar)|teˈlajo|S|art|5|Il telaio del ricamo antico.|El bastidor del bordado antiguo.|g=m;p=telai
filo|hilo|filo|S|tec|3|Un filo di cotone bianco.|Un hilo de algodón blanco.|g=m;p=fili;c=filo diretto
ago|aguja|aɡo|S|tec|3|Un ago da cucire sottile.|Una aguja de coser fina.|g=m;p=aghi;c=ago e filo
spillone|alfiler|spilˈlone|S|tec|5|Uno spillone da cappello vintage.|Un alfiler de sombrero vintage.|g=m;p=spilloni
ditale|dedal|diˈtale|S|tec|5|Un ditale d'argento della sarta.|Un dedal de plata de la costurera.|g=m;p=ditali
cordino|cordel|korˈdino|S|cmp|5|Un cordino rosso per il pacco.|Un cordel rojo para el paquete.|g=m;p=cordini
imbucare|buzonear|imbuˈkare|V|cmu|5|Imbuco la cartolina da Roma.|Buzoneo la tarjeta desde Roma.
affrancare|franquear|affranˈkare|V|cmu|5|Affranco la busta con due francobolli.|Franqueo el sobre con dos sellos.
ripiegare|replegar|ripjeˈɡare|V|ast|5|Ripiego il giornale sulla scrivania.|Repliego el diario sobre el escritorio.
scartare|desenvolver|skarˈtare|V|rel|3|Scarto il regalo con cura.|Desenvuelvo el regalo con cuidado.|n=Anche scartare un candidato
incartare|envolver|inkarˈtare|V|cmp|3|Incartano il panettone natalizio.|Envuelven el panettone navideño.

# ══append: caffè e bevande ══
caffè macchiato|café manchado|kaffe makkjato|L|ris|3|Un caffè macchiato caldo.|Un café manchado caliente.
caffè shakerato|café batido|kaffe shakeˈrato|L|ris|4|Un caffè shakerato d'estate.|Un café batido de verano.
cappuccino|capuchino|kapputtʃino|S|ris|2|Un cappuccino con cornetto.|Un capuchino con croissant.|g=m;n=Invariable
latte macchiato|latte machiatto|latte makkjato|L|ris|3|Un latte macchiato nella tazza grande.|Un latte machiatto en la taza grande.
marocchino|marocchino|marokkino|S|ris|4|Un marocchino col cacao.|Un marocchino con cacao.|g=m;p=marocchini;n=Tipico del Nord
caffè corretto|café corregido|kaffe koretto|L|ris|4|Un caffè corretto alla grappa.|Un café corregido con grappa.
orzo|cebada (café)|ordzo|S|ali|4|Un orzo solubile della sera.|Una cebada soluble de la noche.|g=m;n=Invariable
camomilla|manzanilla|kamoˈmilla|S|ali|3|Una camomilla prima di dormire.|Una manzanilla antes de dormir.|g=f;n=Invariable
tisana|infusión|tiˈzana|S|sla|4|Una tisana al finocchio digestiva.|Una infusión de hinojo digestiva.|g=f;p=tisane
infuso|brebaje de hierbas|inˈfuzo|S|ali|4|Un infuso di erbe balsamiche.|Un brebaje de hierbas balsámicas.|g=m;p=infusi
bicchierone|vaso grande|bikkjerone|S|ali|4|Un bicchierone d'acqua col ghiaccio.|Un vaso grande de agua con hielo.|g=m;p=bicchieroni
bicchiere da vino|copa de vino|bikkjere da vino|L|ris|3|Un bicchiere da vino rosso grande.|Una copa de vino tinto grande.
calice|cáliz|kaˈlitʃe|S|ris|4|Un calice di prosecco freddo.|Una copa de prosecco frío.|g=m;p=calici
flute|copa flauta|flute|S|ris|5|Una flute per lo spumante.|Una copa flauta para el espumante.|g=f;n=Invariable
boccale|jarra|bokkale|S|ris|4|Un boccale di birra alla spina.|Una jarra de cerveza de barril.|g=m;p=boccali
birra alla spina|cerveza de barril|birra alla spina|L|ris|3|Una birra alla spina ben fredda.|Una cerveza de barril bien fría.
birra artigianale|cerveza artesanal|birra artitʃanale|L|ris|3|Una birra artigianale italiana.|Una cerveza artesanal italiana.
pentola a pressione|olla a presión|pentola a pressjone|L|ali|4|La pentola a pressione che fischia.|La olla a presión que silba.
wok|wok|wɔk|S|ali|4|Un wok di ferro per il salto.|Un wok de hierro para el salteado.|g=m;n=Invariable
tagliapasta|cortador de pasta|taʎʎapasta|S|ali|5|Un tagliapasta a rotella dentata.|Un cortador de pasta a rueda dentada.|g=m;n=Invariable
stampo per dolci|molde para pasteles|stampo per doltʃi|L|ali|4|Uno stampo per dolci a ciambella.|Un molde para pasteles rosca.
ciambella|rosca (torta)|tʃambella|S|ali|4|Una ciambella soffice della domenica.|Una rosca esponjosa del domingo.|g=f;p=ciambelle
casatiello|casatiello|kazatiɛllo|S|ali|5|Il casatiello napoletano di Pasqua.|El casatiello napolitano de Pascua.|g=m;p=casatielli
colomba pasquale|panettone de pascua|kolomba paskwale|L|ali|4|La colomba pasquale con la glassa.|El panettone de pascua con la cubierta.
girella|espiral (torta)|dʒirella|S|ali|5|Una girella alla nutella farcita.|Una espiral de nutella rellena.|g=f;p=girelle
meringa|merengue|merinɡa|S|ali|4|Le meringhe bianche croccanti.|Los merengues blancos crocantes.|g=f;p=meringhe
savoiardo|bizcocho de soletilla|savojardo|S|ali|4|I savoiardi del tiramisù.|Los bizcochos de soletilla del tiramisú.|g=m;p=savoiardi
crema al mascarpone|crema de mascarpone|krema al maskarpone|L|ali|3|La crema al mascarpone del tiramisù.|La crema de mascarpone del tiramisú.
tappo|corcho|tappo|S|ali|3|Il tappo di sughero schioccato.|El corcho tronado.|g=m;p=tappi;n=Tappo anche = tapón
sughero|corcho (material)|suɡɡero|S|nat|5|Un sottovaso di sughero portoghese.|Un posavasos de corcho portugués.|g=m;n=Invariable
annata|añada|anˈnata|S|ali|4|Un'annata eccellente del Barolo.|Una añada excelente del Barolo.|g=f;p=annate
vendemmia|vendimia|venˈdemmja|S|nat|4|La vendemmia di settembre in collina.|La vendimia de septiembre en la colina.|g=f;p=vendemmie
acino|grano de uva|atʃino|S|ali|5|Un acino dolce dell'uva fragola.|Un grano dulce de la uva fragola.|g=m;p=acini
vino sfuso|vino a granel|vino sfuso|S|ali|4|Il vino sfuso della botte.|El vino a granel de la barrica.|g=m;n=Invariable
botte|barrica|botte|S|nat|4|Una botte di rovere per il vino.|Una barrica de roble para el vino.|g=f;p=botte
# ══bloque final: miscellanea ══
portabagagli|portaequipajes|portabaɡaʎʎi|S|tra|5|Il portabagagli sul tettuccio dell'auto.|El portaequipajes en el techo del carro.|g=m;n=Invariable
tettuccio|techo (del carro)|tetˈtuttʃo|S|tra|5|Il tettuccio apribile della cabrio.|El techo corredizo del cabriolet.|g=m;p=tettucci
cabrio|cabriolet|kabrio|S|tra|4|Una cabrio decappottabile rossa.|Un cabriolet rojo descapotable.|g=f;p=cabrio;n=Invariable
decappottabile|descapotable|dekapputtaˈbile|S|tra|4|Una spider decappottabile italiana.|Un descapotable spider italiano.|g=f;p=decappottabili
spider|spider (auto)|spider|S|tra|5|Una spider d'epoca inglese.|Un spider clásico inglés.|g=f;p=spider;n=Invariable
fuoristrada|todoterreno|fworiˈstrada|S|tra|3|Un fuoristrada per lo sterrato.|Un todoterreno para el destapado.|g=m;n=Invariable
sterrato|camino destapado|sterˈrato|S|tra|4|Una strada sterrata di campagna.|Un camino destapado de campo.|g=m;p=sterrati
monovolume|monovolumen|monovoˈlume|S|tra|4|Una monovolume familiare sette posti.|Una monovolumen familiar de siete puestos.|g=f;p=monovolumi
coupé|cupé|kupe|S|tra|4|Una coupé sportiva due porte.|Un cupé deportivo de dos puertas.|g=f;n=Invariable
station wagon|rural|steiʃon waɡon|L|tra|4|Una station wagon col portapacchi.|Una rural con portaequipajes.|n=Anglicismo italico
portapacchi|portaequipajes (auto)|portapakki|S|tra|4|Il portapacchi sul tetto della wagon.|El portaequipajes en el techo de la rural.|g=m;n=Invariable
carrello|carretilla|karˈrɛllo|S|cmp|4|Un carrello della spesa sporco.|Un carrito del mercado sucio.|g=m;p=carrelli
portaspesa|bolsa del mercado|portaspeza|S|cmp|4|Il portaspesa di tela pieghevole.|La bolsa del mercado de tela plegable.|g=m;n=Invariable
rete della spesa|red del mercado|rete della speza|L|cmp|5|La rete della spesa a tracolla.|La red del mercado al hombro.
sporta|canasta (bolsa)|sporta|S|cmp|5|La sporta di paglia della nonna.|La canasta de paja de la abuela.|g=f;p=sporte;r=col
tracolla|bandolera|traˈkɔlla|S|rop|4|Una borsa a tracolla di cuoio.|Una cartera bandolera de cuero.|g=f;p=tracolle;c=a tracolla
portamonete|monedero|portamoˈnete|S|cmp|4|Un portamonete di pelle consumato.|Un monedero de cuero gastado.|g=m;n=Invariable
portadocumenti|porta documentos|portadokumenti|S|cmp|5|Un portadocumenti da viaggio.|Un porta documentos de viaje.|g=m;n=Invariable
tessera|carné|tessera|S|cmu|4|La tessera della biblioteca rinnovata.|El carné de la biblioteca renovado.|g=f;p=tessere
tesserino|carné pequeño|tesserino|S|cmu|4|Il tesserino sanitario regionale.|El carné sanitario regional.|g=m;p=tesserini
tessera sanitaria|carné sanitario|tessera sanitaria|L|sla|3|La tessera sanitaria col codice fiscale.|El carné sanitario con el código fiscal.
codice fiscale|código fiscal|koditʃe fiscale|L|ist|4|Il codice fiscale dello straniero.|El código fiscal del extranjero.|n=Clave para vivir en Italia
tessera elettorale|carné electoral|tessera elettorale|L|ist|4|La tessera elettorale per il voto.|El carné electoral para el voto.
sezione elettorale|mesa electoral|seˈtsjone elettorale|L|ist|5|La mia sezione elettorale è la numero sette.|Mi mesa electoral es la número siete.
cabina elettorale|cabina electoral|kabina elettorale|L|ist|5|La cabina elettorale con la matita.|La cabina electoral con el lápiz.
scheda elettorale|papeleta electoral|skeda elettorale|L|ist|5|La scheda elettorale nella busta.|La papeleta electoral en el sobre.
seggio|colegio electoral|seddʒo|S|ist|5|Il seggio comunale sotto scuola.|El colegio electoral bajo la escuela.|g=m;p=seggi
spoglio|escrutinio|spɔʎʎo|S|ist|5|Lo spoglio delle schede in diretta.|El escrutinio de las papeletas en vivo.|g=m;p=spogli;n=Anche: nudo… spogliarello
spogliarello|striptease|spoljaˈrɛllo|S|sve|5|Uno spogliarello integrale in scena.|Un striptease integral en escena.|g=m;p=spogliarelli;r=col
parere|parecer|paˈrere|S|ast|3|Il parere del legale sull accordo.|El parecer del abogado sobre el acuerdo.|g=m;p=pareri;c=secondo il parere di
parere legale|parecer legal|parere legale|L|ist|4|Un parere legale scritto dettagliato.|Un parecer legal escrito detallado.
avvertenza|advertencia|avverˈtɛntsa|S|ast|4|Un'avvertenza sul manuale d'uso.|Una advertencia en el manual de uso.|g=f;p=avvertenze;c=senza avvertenza
monito|amonestación|monito|S|cmu|5|Un monito ai distratti del meteo.|Una amonestación a los despistados del clima.|g=m;p=moniti;r=for
richiamo|llamado (llamada)|rikkjamo|S|cmu|4|Un richiamo all'ordine del presidente.|Un llamado al orden del presidente.|g=m;p=richiami;c=richiamo alle armi
convocazione|citación|konvokaˈtsjone|S|ast|4|La convocazione del consiglio comunale.|La citación del consejo municipal.|g=f;p=convocazioni
diffida|amonestación (diffida)|diffida|S|ist|5|Una diffida a non avvicinarsi.|Una amonestación de no acercarse.|g=f;n=Invariable;r=tec
allontanamento|alejamiento|allontanamento|S|ist|5|L'allontanamento dallo stadio per DASPO.|El alejamiento del estadio por orden judicial.|g=m;p=allontanamenti
foglio rosa|licencia de aprendizaje|foʎʎo roza|L|tra|4|Il foglio rosa per guidare accompagnati.|La licencia de aprendizaje para manejar acompañado.
autoscuola|autoescuela|autoskwɔla|S|tra|4|L'autoscuola col campo prova.|La autoescuela con el campo de práctica.|g=f;p=autoscuole
esame di guida|examen de manejo|ezame di ɡwida|L|tra|4|L'esame di guida pratica superato.|El examen de manejo práctico aprobado.
istruttore di guida|instructor de manejo|istruttore di ɡwida|L|pro|4|L'istruttore di guida paziente.|El instructor de manejo paciente.
manovra|manioobra|manoˈvra|S|tra|4|La manovra di parcheggio perfetta.|La maniobra de estacionamiento perfecta.|g=f;p=manovre;c=manovra azzardata
inversione a U|vuelta en U|inversjone a u|L|tra|4|Un'inversione a U vietata al semaforo.|Una vuelta en U prohibida en el semáforo.
parcheggio in retromarcia|estacionamiento en marcha atrás|parkeddʒo in retroˈmartʃa|L|tra|5|Il parcheggio in retromarcia difficile.|El estacionamiento en marcha atrás difícil.
contromano|contramano|kontroˈmano|S|tra|4|Un auto in contromano sull incrocio.|Un carro en contramano en el cruce.|g=f;p=contromano;n=Invariable;c=andare in contromano
dare la precedenza|dar la preferencia|dare la preˈtʃeˈdɛntsa|L|tra|4|Dai la precedenza a chi arriva a destra.|Da la preferencia al que llega a la derecha.
precedenza|preferencia|preˈtʃedɛntsa|S|tra|4|La precedenza a destra in Italia.|La preferencia a la derecha en Italia.|g=f;p=precedenze;c=avere la precedenza
bivio|bifurcación|bivjo|S|tra|4|Al bivio prendi a sinistra per il mare.|En la bifurcación toma a la izquierda para el mar.|g=m;p=bivi;c=al bivio esistenziale
bivio esistenziale|bifurcación existencial|bivjo ezistenˈtsjale|L|ast|5|Un bivio esistenziale della vita.|Una bifurcación existencial de la vida.
svincolo|enlace|sviˈnkolo|S|tra|4|Lo svincolo dell'autostrada chiuso.|El enlace de la autopista cerrado.|g=m;p=svincoli
raccordo|conexión|rakˈkordo|S|tra|4|Il raccordo tra le due statali.|La conexión entre las dos carreteras.|g=m;p=raccordi
deviazione|desvío|devjatˈtsjone|S|tra|4|La deviazione obbligatoria per lavori.|El desvío obligatorio por obras.|g=f;p=deviazioni
# ══bloque final 2: palabras que faltan ══
scuola dell'infanzia|jardín de infancia|skwola dellinfantsia|L|stu|4|La scuola dell'infanzia comunale.|El jardín de infancia municipal.
asilo nido|cuna (guardería)|aˈzilo ˈnido|L|fam|4|L'asilo nido integrato col lavoro.|La guardería integrada con el trabajo.
nido|guardería|nido|S|fam|4|Il nido della zona pieno.|La guardería de la zona llena.|g=m;p=nidi;c=asilo nido
maestra|maestra|maestra|S|pro|3|La maestra della prima elementare.|La maestra de primer grado.|g=f;p=maestre
bidello|conserje|bidello|S|pro|4|Il bidello della palestra gentile.|El conserje del gimnasio amable.|g=m;p=bidelli;r=col
refettorio|comedor escolar|refetˈtorjo|S|stu|5|Il refettorio della scuola paritaria.|El comedor escolar de la escuela concertada.|g=m;p=refettori;r=tec
paritaria|concertada|paritaria|A|stu|5|Una scuola paritaria cattolica.|Una escuela concertada católica.|n=Finanziata dallo stato ma privata
elementari|primaria|elementari|S|stu|3|Le elementari dai sei agli undici.|La primaria de los seis a los once.|g=f;n=Siempre plural
superiori|secundaria superior|superiori|S|stu|3|Le superiori al classico.|La secundaria superior en el clásico.|g=f;n=Siempre plural
liceo classico|liceo clásico|litʃeo ˈklasiko|L|stu|4|Il liceo classico col greco antico.|El liceo clásico con griego antiguo.
liceo scientifico|liceo científico|litʃeo ʃientiˈfiko|L|stu|4|Il liceo scientifico a indirizzo informatico.|El liceo científico con mención informática.
istituto tecnico|instituto técnico|istiˈtuto ˈtekniko|L|stu|4|L'istituto tecnico commerciale.|El instituto técnico comercial.
istituto professionale|instituto profesional|stiˈtuto profesˈsjonale|L|stu|4|L'istituto professionale alberghiero.|El instituto profesional de hotelería.
alberghiero|de hotelería|alberɡɡjɛro|S|stu|5|L'alberghiero di Stato il migliore.|El de hotelería estatal el mejor.|g=m;n=Invariable
corso serale|curso nocturno|ˈkorso seˈrale|L|stu|4|Un corso serale per lavoratori.|Un curso nocturno para trabajadores.
debito formativo|deuda formativa|ˈdebito formaˈtivo|L|stu|5|Un debito formativo da saldare a settembre.|Una deuda formativa por saldar en setiembre.
colloquio generale|reunión general|kollokvio dʒenerale|L|stu|5|Il colloquio generale coi professori.|La reunión general con los profesores.
promosso|aprobado|promosso|A|stu|3|Promosso con ottimi voti.|Aprobado con óptimas notas.|a=bocciato
bocciato|reprobado|bottʃato|A|stu|3|Bocciato per la terza volta.|Reprobado por tercera vez.|a=promosso
sospensione del giudizio|suspenso del juicio|sospenˈsjone del dʒuˈditsio|L|stu|5|La sospensione del giudizio a giugno.|El suspenso del juicio en junio.
scrutinio|escrutinio (evaluación)|skrutinjo|S|stu|5|Lo scrutinio finale di giugno.|El escrutinio final de junio.|g=m;p=scrutini;r=tec
orario scolastico|horario escolar|orario skolastiko|L|stu|3|L'orario scolastico fino alle due.|El horario escolar hasta las dos.
materia di indirizzo|materia de especialidad|materia di indiritso|L|stu|5|La materia di indirizzo del biennio.|La materia de especialidad del bienio.
programma scolastico|programa escolar|programma skolastiko|L|stu|4|Il programma scolastico dell'anno.|El programa escolar del año.
spiegazione|explicación|spieɡaˈtsjone|S|stu|3|La spiegazione chiara del teorema.|La explicación clara del teorema.|g=f;p=spiegazioni
esercitazione|práctica|esertʃitˈtsjone|S|stu|4|Un'esercitazione di laboratorio.|Una práctica de laboratorio.|g=f;p=esercitazioni
prova pratica|prueba práctica|prova prattika|L|stu|4|La prova pratica della patente.|La prueba práctica de la licencia.
comprensione del testo|comprensión del texto|komprensjone del testo|L|stu|3|La comprensione del testo alla maturità.|La comprensión del texto en el bachillerato.
lettura espressiva|lectura expresiva|lettura eˈspressiva|L|stu|5|La lettura espressiva della poesia.|La lectura expresiva de la poesía.
espressione orale|expresión oral|esˈpressjone oˈrale|L|stu|4|L'espressione orale valutata.|La expresión oral evaluada.
pronuncia|pronunciación|proˈnuntʃa|S|cmu|3|La pronuncia italiana senza accento.|La pronunciación italiana sin acento.|g=f;n=Invariable;c=buona pronuncia
accento|acento|attʃento|S|cmu|3|L'accento spagnolo riconoscibile.|El acento español reconocible.|g=m;p=accenti;n=Anche: il segno grafico
accento grafico|acento gráfico|attʃento ɡrafiko|L|stu|4|L'accento grafico sulla e finale.|El acento gráfico en la e final.
tono|tono|tono|S|cmu|3|Un tono di voce gentile.|Un tono de voz amable.|g=m;p=toni;c=tono scherzoso
inflessione|inflexión|infleˈssjone|S|cmu|5|Un inflessione dialettale veneta.|Una inflexión dialectal veneta.|g=f;p=inflessioni
dialetto|dialecto|diaˈletto|S|cmu|4|Il dialetto napoletano a casa.|El dialecto napolitano en casa.|g=m;p=dialetti;c=parlare dialetto
vernacolo|vernáculo|verˈnaːkolo|S|cmu|5|Il vernacolo romanesco di Trilussa.|El vernáculo romanesco de Trilussa.|g=m;p=vernacoli;r=let
gergo|jergo|dʒerɡo|S|cmu|4|Il gergo dei giovani online.|El jergo de los jóvenes en línea.|g=m;p=gerghi;n=Invariable;c=gergo tecnico
gergo giovanile|jergo juvenil|dʒerɡo dʒovanile|L|cmu|5|Il gergo giovanile che cambia veloce.|El jergo juvenil que cambia rápido.
slang|slang|slanɡ|S|cmu|4|Lo slang dei rapper italiani.|El slang de los raperos italianos.|g=m;n=Invariable
neologismo|neologismo|neoloˈdʒizmo|S|cmu|5|Un neologismo entrato nel dizionario.|Un neologismo entrado al diccionario.|g=m;p=neologismi
anglicismo|anglicismo|anɡlitʃizmo|S|cmu|4|Un anglicismo di uso comune.|Un anglicismo de uso común.|g=m;p=anglicismi
forestierismo|extranjerismo|foreˈstjerizmo|S|cmu|5|Un forestierismo adattato all'italiano.|Un extranjerismo adaptado al italiano.|g=m;p=forestierismi;r=tec
calco|calco|kalko|S|cmu|5|Un calco dall'inglese improprio.|Un calco del inglés impropio.|g=m;p=calchi;r=tec
improprio|impropio|improprio|A|ast|5|Un uso improprio del termine.|Un uso impropio del término.|a=proprio
proprio|propio|proprio|A|ast|2|Il proprio modo di fare.|El propio modo de ser.|n=Anche pronome riflessivo
# ══bloque final 3 ══
mestiere|oficio|meˈstjere|S|lav|3|Il mestiere di panettiere.|El oficio de panadero.|g=m;p=mestieri;c=imparare un mestiere
panettiere|panadero|panetˈtjere|S|pro|3|Il panettiere del paese all'alba.|El panadero del pueblo al alba.|g=m;p=panettieri
fornaio|hornero|forˈnajo|S|pro|4|Il fornaio col forno a legna.|El hornero con el horno de leña.|g=m;p=fornai
forno a legna|horno de leña|forno a leɲɲa|L|ali|3|Il forno a legna della pizzeria.|El horno de leña de la pizzería.
pizza al taglio|pizza por porciones|pitsa al taʎʎo|L|ris|3|Una pizza al taglio col pomodoro.|Una pizza por porciones con tomate.
pizzaiolo|pizzero|pittsajolo|S|pro|3|Un pizzaiolo napoletano campione.|Un pizzero napolitano campeón.|g=m;p=pizzaioli
pasta Madre|Masa Madre|pasta madre|L|ali|4|La pasta Madre del pane del forno.|La Masa Madre del pan de la panadería.
lievito madre|levadura madre|ljevito madre|L|ali|4|Il lievito madre rinfrescato.|La levadura madre refrescada.
rinfrescare|refrescar (masa)|rinfreʃʃare|V|ali|5|Rinfresco il lievito madre ogni due giorni.|Refresco la levadura madre cada dos días.
pizza margherita|pizza margarita|pitsa margerita|L|ris|3|La pizza margherita con la bufala.|La pizza margarita con la bufala.
pizza napoletana|pizza napolitana|pitsa napolitana|L|ris|3|La pizza napoletana STG del centro.|La pizza napolitana STG del centro.
pizza romana|pizza romana|pitsa romana|L|ris|4|La pizza romana scrocchiarella.|La pizza romana crocante.|n=Sottile e croccante vs napoletana
pizza fritta|pizza frita|pitsa fritta|L|ris|4|La pizza fritta napoletana ripiena.|La pizza frita napolitana rellena.
calzone|calzone|kaltsone|S|ris|3|Un calzone ripieno di ricotta e salame.|Un calzone relleno de ricota y salame.|g=m;p=calzoni
focaccia|focaccia|fokattʃa|S|ali|3|La focaccia col rosmarino genovese.|La focaccia con romero genovesa.|g=f;p=focacce
focaccia barese|focaccia de Bari|fokattʃa bareze|L|ali|4|La focaccia barese coi pomodorini.|La focaccia de Bari con tomatitos.
panzanella|panzanella|pantsaˈnella|S|ali|5|La panzanella toscana estiva.|La panzanella toscana veraniega.|g=f;n=Invariable
pappa al pomodoro|pappa al pomodoro|pappa al pomodoro|L|ali|5|La pappa al pomodoro toscana contadina.|La pappa al pomodoro toscana campesina.
ribollita|ribollita|ribollita|S|ali|5|La ribollita con il cavolo nero.|La ribollita con col negra.|g=f;n=Invariable;n=Piatto povero toscano
cavolo nero|col negra|kavolo nero|S|nat|4|Il cavolo nero dell'inverno toscano.|La col negra del invierno toscano.|g=m;n=Invariable
cucina povera|cocina pobre|kuˈtʃina ˈpwvera|L|ali|4|La cucina povera contadina rivisitata.|La cocina pobre campesina revisada.
piatto povero|plato humilde|ˈpjatto ˈpwvero|L|ali|4|Un piatto povero della tradizione.|Un plato humilde de la tradición.
rivisitazione|relectura (revival)|rivisitaˈtsjone|S|ali|5|Una rivisitazione creativa del classico.|Una relectura creativa del clásico.|g=f;p=rivisitazioni
alta cucina|alta cocina|alta kutʃina|L|ris|4|L'alta cucina italiana nel mondo.|La alta cocina italiana en el mundo.
stella Michelin|estrella Michelin|stella mikelin|L|ris|4|Un ristorante a tre stelle Michelin.|Un restaurante con tres estrellas Michelin.
chef stellato|chef estrellado|ʃef stelˈlato|L|pro|4|Uno chef stellato in cucina.|Un chef estrellado en cocina.
piatto forte|plato fuerte|pjatto forte|L|ris|3|Il piatto forte della casa.|El plato fuerte de la casa.
assaggino|pruebita|asˈsaddʒino|S|ris|5|Un assaggino del vino nuovo.|Una pruebita del vino nuevo.|g=m;p=assaggini;r=col
scorfano|escorpión (pez)|skorˈfano|S|ali|5|Lo scorfano del cacciucco livornese.|El escorpión del cacciucco livornés.|g=m;p=scorfani
cacciucco|cacciucco|attʃukko|S|ali|5|Il cacciucco alla livornese.|El cacciucco a la livornesa.|g=m;p=cacciucchi
culurgiones|culurgiones|kulurˈdʒones|S|ali|5|I culurgiones di Gerrei ripieni.|Los culurgiones de Gerrei rellenos.|g=m;n=Siempre plural;n=Pasta sarda
pane carasau|pan carasau|pane karasau|L|ali|4|Il pane carasau sardo croccante.|El pan carasau sardo crocante.
seadas|seadas|seadas|S|ali|5|Le seadas col miele amaro.|Las seadas con miel amarga.|g=f;n=Siempre plural;n=Dolce sardo fritto
porceddu|porceddu|portʃeddu|S|ali|5|Il porceddu sardo allo spiedo.|El porceddu sardo al espetón.|g=m;p=porceddos;n=Invariable;n=Maialino da latte
formaggio pecorino|queso pecorino|forˈmaddʒo pekoˈrino|L|ali|3|Il formaggio pecorino sardo stagionato.|El queso pecorino sardo añejo.
stagionato|añejo|staddʒonato|A|ali|4|Un pecorino stagionato sei mesi.|Un pecorino añejo seis meses.
cremoso|cremoso|kremozo|A|ali|4|Un gorgonzola cremoso dolcelatte.|Un gorgonzola cremoso dulce.|n=Dolcelatte anche marchio
dolcelatte|dolcelatte|doltʃelatte|S|ali|5|Il gorgonzola dolcelatte morbido.|El gorgonzola dulce suave.|g=m;n=Invariable
stagionatura|añejamiento|staddʒonatura|S|ali|5|La stagionatura in grotta del formaggio.|El añejamiento en cueva del queso.|g=f;p=stagionature
grotta|cueva|ɡrɔtta|S|nat|4|La grotta di stalattiti illuminate.|La cueva de estalactitas iluminadas.|g=f;p=grotte
stalattite|estalactita|stalatˈtite|S|nat|5|Le stalattiti della grotta di Castellana.|Las estalactitas de la cueva de Castellana.|g=f;p=stalattiti
stalagmite|estalagmita|stalaɡˈmite|S|nat|5|Le stalagmiti che crescono dal pavimento.|Las estalagmitas que crecen del suelo.|g=f;p=stalagmiti
grotta di Castellana|cueva de Castellana|ɡrɔtta di kastelˈlana|L|nat|4|La grotta di Castellana in Puglia.|La cueva de Castellana en Apulia.
carsismo|kárstico (carsismo)|karzizmo|S|nat|5|Il carsismo delle Murge pugliesi.|El carso de las Murge apulias.|g=m;n=Invariable;r=tec
inghiottitoio|sumidero|inɡojtitˈoːjo|S|nat|5|Un inghiottitoio carsico nel salento.|Un sumidero kárstico en el Salento.|g=m;p=inghiottitoi
# ══bloque final 4: las últimas palabras ══
sveglia la mattina|despertar por la mañana|sveglia la matˈtina|L|tmp|3|La sveglia la mattina presto.|El despertar por la mañana temprano.
colazione al bar|desayuno en el bar|kolatsjone al bar|L|ris|3|La colazione al bar da dieci euro.|El desayuno en el bar de diez euros.
cornetto e cappuccino|croissant y capuchino|kornetto e kapputˈtʃino|L|ris|3|Cornetto e cappuccino in piedi al banco.|Croissant y capuchino de pie en el mostrador.
al banco|de pie en el mostrador|al banko|L|ris|3|Il caffè al banco costa meno.|El café de pie cuesta menos.
servito al tavolo|servido a la mesa|servito al tavolo|L|ris|3|Il coperto del servito al tavolo.|El cubierto del servido a la mesa.
pane e coperto|pan y cubierto|pane e koperto|L|ris|4|Pane e coperto: due euro a testa.|Pan y cubierto: dos euros por cabeza.
divisione del conto|división de la cuenta|divizjone del kontto|L|ris|4|La divisione del conto alla romana.|La división de la cuenta a la romana.
alla romana|a la romana|alla roˈmana|L|ris|4|Pagare alla romana in sette.|Pagar a la romana entre siete.
pagare alla romana|pagar a la romana|paˈɡare alla roˈmana|L|ris|3|Paghiamo alla romana, va bene.|Pagamos a la romana, está bien.
un po' alla volta|poco a poco (por partes)|un po alla volta|L|ast|3|Un po' alla volta si impara.|Poco a poco se aprende.
di pari passo|al mismo ritmo|di pari passo|L|ast|4|Crescono di pari passo.|Crecen al mismo ritmo.
a passo|al paso|a passo|L|ast|3|Cammina a passo svelto.|Camina a paso ligero.
a passo svelto|a paso ligero|a passo ssvlto|L|ast|4|Arriva a passo svelto all'appuntamento.|Llega a paso ligero a la cita.
di corsa|a la carrera|di korsa|L|ast|3|Vado di corsa al treno.|Voy a la carrera al tren.
di fretta e furia|a las apuradas|di fretta e furia|L|ast|4|Esci di fretta e furia col caffè.|Sales a las apuradas con el café.
in un lampo|en un instante|in un lampo|L|ast|3|Sparì in un lampo.|Desapareció en un instante.
in un baleno|en un santiamén|in un baleno|L|ast|4|In un baleno cambiò idea.|En un santiamén cambió de idea.
di nascosto|a escondidas|di nascsosto|L|ast|3|Mangia i dolci di nascosto.|Come dulces a escondidas.
alla luce del sole|a la luz del sol|alla lutʃe del sole|L|ast|4|Tutto è emerso alla luce del sole.|Todo salió a la luz del sol.
d'improvviso|de repente|dimprovviso|D|tmp|3|D'improvviso si mise a piangere.|De repente se puso a llorar.
improvvisamente|repentinamente|improvvisamente|D|tmp|3|Improvvisamente cadde la linea.|Repentinamente cayó la línea.
all'improvviso|de improviso|allimprovviso|D|tmp|3|All'improvviso ha squillato il telefono.|De improviso sonó el teléfono.
di colpo|de golpe|di kolpo|L|tmp|4|Di colpo si aprì la porta.|De golpe se abrió la puerta.
a un tratto|de un momento a otro|a un tratto|L|tmp|4|A un tratto si alzò il vento.|De un momento a otro se levantó el viento.
di quando in quando|de vez en cuando|di kwando in kwando|L|tmp|3|Di quando in quando ci sentiamo.|De vez en cuando nos hablamos.
di tanto in tanto|de tanto en tanto|di tanto in tanto|L|tmp|3|Di tanto in tanto un weekend fuori.|De tanto en tanto un fin de semana afuera.
per un po'|por un rato|per un po|L|tmp|3|Riposiamoci per un po'.|Descansemos por un rato.
un bel po'|un buen rato|un bel po|L|ast|4|Ci ho messo un bel po'.|Me tomó un buen rato.
un sacco|un montón|un sakko|L|ast|3|C'era un sacco di gente.|Había un montón de gente.|r=col
una marea|un mar de|una mareja|L|ast|4|Una marea di turisti in centro.|Un mar de turistas en el centro.
un oceano|un océano de|un otʃeano|L|ast|4|Un oceano di scartoffie burocratiche.|Un océano de papeleo burocrático.
scartoffie|papeleo|skarˈtoffje|S|ist|4|Le scartoffie della pratica perduta.|El papeleo del trámite perdido.|g=f;p=scartoffie
pratica|trámite|prattika|S|ist|3|La pratica dello sportello anagrafe.|El trámite de la ventanilla registro.|g=f;p=pratiche;c=sportello
sportello|ventanilla|sportɛllo|S|ist|3|Lo sportello dedicato al pubblico.|La ventanilla dedicada al público.|g=m;p=sportelli
sportello automatico|cajero automático|sportello automatiko|L|fin|3|Lo sportello automatico fuori servizio.|El cajero automático fuera de servicio.
filiale|sucursal|fiˈljale|S|fin|4|La filiale centrale della banca.|La sucursal central del banco.|g=f;p=filiali
cassetto della banca|bóveda del banco|kassetto della banka|L|fin|5|I soldi nel cassetto della banca.|El dinero en la bóveda del banco.
estratto conto|extracto de cuenta|estratto kontto|L|fin|3|L'estratto conto mensile in PDF.|El extracto de cuenta mensual en PDF.
movimento bancario|movimiento bancario|movimento bankarjo|L|fin|4|Un movimento bancario sospetto.|Un movimiento bancario sospechoso.
addebito|débito (cargo)|addebito|S|fin|4|L'addebito automatico della bolletta.|El débito automático de la factura.|g=m;p=addebiti
accredito|abono (crédito)|akkredito|S|fin|4|L'accredito dello stipendio in anticipo.|El abono del sueldo por adelantado.|g=m;p=accrediti
# ══bloque 5: cierre 5000 ══
centrotavola|adorno de mesa|tʃentroˈtavola|S|ris|5|Un centrotavola di fiori freschi.|Un adorno de mesa de flores frescas.|g=m;n=Invariable
sottopiatto|plato de base|sottoˈpjatto|S|ris|5|Un sottopiatto d'argento elegante.|Un plato de base de plata elegante.|g=m;p=sottopiatti
saliera|salero|saljera|S|ris|4|La saliera col pepe accanto.|El salero con la pimienta al lado.|g=f;p=saliere
olio e aceto|aceite y vinagre|ɔlio e atʃeto|L|ris|3|L'olio e aceto sul tavolo.|El aceite y vinagre en la mesa.
paniera|panera|panjera|S|ris|4|Una paniera col pane caldo.|Una panera con pan caliente.|g=f;p=paniere
bottiglietta|botellita|bottiʎʎetta|S|ris|4|Una bottiglietta d'acqua da mezzo litro.|Una botellita de agua de medio litro.|g=f;p=bottigliette
oliera|aceitera|oljera|S|ris|5|Un'oliera di vetro col beccuccio.|Una aceitera de vidrio con pico.|g=f;p=oliera
grissino|grissini|ɡrissino|S|ris|3|Un cestino di grissini caldi.|Una canastita de grissini calientes.|g=m;p=grissini;n=Inventato a Torino
focaccina|focacita|fokatˈtʃina|S|ris|4|Una focaccina col prosciutto cotto.|Una focacita con jamón cocido.|g=f;p=focaccine
tarallo|taralli|tarallo|S|ris|4|I taralli pugliesi col finocchio.|Los taralli apulios con hinojo.|g=m;p=taralli;n=tipico della Puglia
frisella|frisella|frizella|S|ris|5|Una frisella bagnata col pomodoro.|Una frisella remojada con tomate.|g=f;p=friselle;n=Puglia
girotondo|ronda infantil|dʒirotondo|S|sve|4|Un girotondo in cortile a mano.|Una ronda infantil en el patio.|g=m;p=girotondi
altalena|columpio|altaˈlena|S|sve|4|Un'altalena di legno sotto la quercia.|Un columpio de madera bajo la encina.|g=f;p=altalene
scivolo|tobogán|ʃʃivolo|S|sve|4|Uno scivolo nuovo del parco.|Un tobogán nuevo del parque.|g=m;p=scivoli
dondolo|columpio de balancín|dondolo|S|sve|5|Un dondolo in veranda a dondolare.|Un balancín en el portal para mecerse.|g=m;p=dondoli
palloncino|globo|palloɲɲtʃino|S|sve|4|Un palloncino rosso che vola via.|Un globo rojo que se va volando.|g=m;p=palloncini
aquilone|cometa|akwiˈlone|S|sve|4|Un aquilone colorato sulla spiaggia.|Una cometa colorida en la playa.|g=m;p=aquiloni
biglia|canica|biʎʎa|S|sve|5|Una biglia di vetro azzurra.|Una canica de vidrio azul.|g=f;p=biglie
trottola|trompo|trɔtola|S|sve|5|Una trottola che gira veloce.|Un trompo que gira rápido.|g=f;p=trottole
fischietto|silbato|fiʃʃjetto|S|sve|4|Un fischietto dell'arbitro rotondo.|Un silbato redondo del árbitro.|g=m;p=fischietti
leccornia|golosina|lekˈkornja|S|ali|5|Una leccornia al cioccolato fondente.|Una golosina de chocolate amargo.|g=f;p=leccornie;r=let
golosità|antojo (gula)|ɡolozita|S|ali|4|Un attacco di golosità notturno.|Un ataque de antojo nocturno.|g=f;n=Invariable
goloso|goloso|ɡolozo|A|ali|3|Un bambino goloso di Nutella.|Un niño goloso de Nutella.|c=essere goloso di
sfizio|antojo capricho|sfittsjo|S|emo|4|Togliersi uno sfizio di mezzanotte.|Quitarse un capricho de medianoche.|g=m;p=sfizi;c=togliersi uno sfizio
vizio|vicio|vittsjo|S|emo|3|Il vizio del fumo difficile.|El vicio del humo difícil.|g=m;p=vizi;a=virtù
virtù|virtud|virtu|S|ast|3|La virtù della pazienza.|La virtud de la paciencia.|g=f;n=Invariable
vizietto|vicio pequeño|vizjetto|S|emo|4|Un vizietto innocente del sabato.|Un vicio pequeño inocente del sábado.|g=m;p=vizietti
monelleria|travesura|monelleria|S|fam|5|Una monelleria del bimbo birichino.|Una travesura del niño travieso.|g=f;p=monellerie
birichino|travieso|biriˈkino|A|fam|4|Un bimbo birichino e simpatico.|Un niño travieso y simpático.|n=Anche sostantivo affettuoso
monello|pilluelo|moˈnɛllo|S|fam|4|Un monello di strada scalzo.|Un pilluelo de calle descalzo.|g=m;p=monelli
far marachelle|hacer travesuras|far marakelle|L|fam|5|Il bimbo fa marachelle a scuola.|El niño hace travesuras en la escuela.|r=inf
ramanzina|regañina|ramaˈntsina|S|fam|4|Una ramanzina del maestro severa.|Una regañina del maestro severa.|g=f;p=ramanzine;r=col
sgridata|regañina|zɡriˈdata|S|fam|4|Una sgridata coi fiocchi.|Una regañina con bombos.|g=f;p=sgridate
gratifica|gratificación|ɡratifika|S|fin|4|Una gratifica di fine anno.|Una gratificación de fin de anno.|g=f;p=gratifiche
tredicesima|décimo tercero (sueldo)|trediˈtʃesima|S|fin|4|La tredicesima di dicembre attesa.|El aguinaldo de diciembre esperado.|g=f;n=Invariable;n2=Sueldo extra italico
quattordicesima|décimo cuarto|kwattorditʃesima|S|fin|5|La quattordicesima non è garantita.|El décimo cuarto no está garantizado.|g=f;n=Invariable;n2=Trattativa sindacale
straordinari|horas extra|straordiˈnari|S|lav|3|Gli straordinari pagati il doppio.|Las horas extra pagadas al doble.|g=m;n=Siempre plural
# ══bloque 6: meta 5000 ══
cameretta|cuarto de niños|kameretta|S|cas|3|La cameretta dei due gemelli.|El cuarto de los dos gemelos.|g=f;p=camerette
culla|cuna|kulla|S|fam|4|La culla di legno dondolante.|La cuna de madera mecedora.|g=f;p=culle;c=dormire la nanna
nanna|sueño (de bebé)|nanna|S|fam|3|Il bimbo fa la nanna nel pomeriggio.|El bebé hace la siesta en la tarde.|g=f;n=Invariable;c=fare la nanna
ciuccio|chupete|tʃuttʃo|S|fam|3|Il ciuccio caduto per terra.|El chupete caído al suelo.|g=m;p=ciucci;r=inf
biberon|mamadera|biberon|S|fam|3|Il biberon del latte tiepido.|La mamadera de leche tibia.|g=m;n=Invariable
pappina|papilla|papina|S|fam|4|La pappina di frutta frullata.|La papilla de fruta licuada.|g=f;p=pappine
frullato|batido|frullato|S|ali|3|Un frullato di banana e mela.|Un batido de banano y manzana.|g=m;p=frullati
omogeneizzato|papilla de frasco|omodʒeneiˈzzato|S|ali|5|Un omogeneizzato di pollo.|Una papilla de frasco de pollo.|g=m;p=omogeneizzati
poppata|tetada|popata|S|fam|5|La poppata delle tre di notte.|La tetada de las tres de la mañana.|g=f;p=poppate
latte in polvere|leche en polvo|latte in polvere|L|ali|4|Il latte in polvere per lattanti.|La leche en polvo para lactantes.
lattante|lactante|latˈtante|S|fam|5|Un lattante di sei mesi sereno.|Un lactante de seis meses sereno.|g=m;p=lattanti
nomignolo|apodo|nomiɲɲolo|S|rel|4|Un nomignolo buffo dell'infanzia.|Un apodo chistoso de la infancia.|g=m;p=nomignoli
soprannome|apodo|soˈprannome|S|rel|3|Il soprannome del nonno burbero.|El apodo del abuelo gruñón.|g=m;p=soprannomi
famiglia allargata|familia extendida|famiʎʎa allarɡata|L|fam|4|Una famiglia allargata di otto.|Una familia extendida de ocho.
bisnonna|bisabuela|biznonna|S|fam|4|La bisnonna di cento anni lucida.|La bisabuela de cien años lúcida.|g=f;p=bisnonne
bisnonno|bisabuelo|biznonno|S|fam|4|Il bisnonno della foto in bianco e nero.|El bisabuelo de la foto en blanco y negro.|g=m;p=bisnonni
prozio|tío abuelo|prɔtsjo|S|fam|5|Il prozio emigrato in Argentina.|El tío abuelo emigrado a Argentina.|g=m;p=prozii
prozia|tía abuela|prɔtsia|S|fam|5|La prozia del podere in campagna.|La tía abuela de la finca en el campo.|g=f;p=prozie
cugino di secondo grado|primo de segundo grado|kudʒino di ˈsekondo ˈɡrado|L|fam|5|Un cugino di secondo grado a Roma.|Un primo de segundo grado en Roma.
parente|pariente|paˈrɛnte|S|fam|3|Un parente alla lontana di Torino.|Un pariente a la lejana de Turín.|g=m;p=parenti;c=parenti serpenti (detto popolare)
parentela|parentela|parentela|S|fam|5|Tutta la parentela al matrimonio.|Toda la parentela en el matrimonio.|g=f;n=Invariable
albero genealogico|árbol genealógico|albero dʒenealoˈdʒiko|L|fam|4|L'albero genealogico della famiglia.|El árbol genealógico de la familia.
stirpe|estirpe|stirpe|S|fam|5|Una stirpe di navigatori liguri.|Una estirpe de navegantes ligures.|g=f;p=stirpi
casato|linaje|kaˈzato|S|fam|5|Un casato nobile fiorentino.|Un linaje noble florentino.|g=m;p=casati;r=let
stemma|escudo|stemma|S|ist|5|Lo stemma del comune sul portone.|El escudo del municipio en el portalón.|g=m;p=stemmi
blasone|blasón|blaˈzone|S|ist|5|Il blasone della famiglia nobile.|El blasón de la familia noble.|g=m;p=blasoni;r=let
nobile|noble|nobile|S|ist|4|Un nobile decaduto del Settecento.|Un noble decadido del setecientos.|g=m;p=nobili;n=Anche aggettivo
aristocrazia|aristocracia|aristokratsia|S|ist|4|L'aristocrazia terriera siciliana.|La aristocracia terrateniente siciliana.|g=f;n=Invariable
# ══bloque 7: las últimas 100+ ══
sentierino|senderito|sentjeˈrino|S|nat|5|Un sentierino che sale al colle.|Un senderito que sube a la colina.|g=m;p=sentierini
crinale|línea de cumbre|kriˈnale|S|nat|5|Il crinale dell'Appennino innevato.|La línea de cumbre apenina nevada.|g=m;p=crinali
versante|ladera|verˈsante|S|nat|4|Il versante nord della montagna.|La ladera norte de la montaña.|g=m;p=versanti
pendio|pendiente (terreno)|pɛndjo|S|nat|5|Un pendio scosceso verso il mare.|Un pendiente escarpado hacia el mar.|g=m;p=pendii
scosceso|escarpado|skoʃʃeso|A|nat|5|Un sentiero scosceso di montagna.|Un sendero escarpado de montaña.
impervio|agreste (intransitable)|imperˈvjo|A|nat|5|Un territorio impervio dell'interno.|Un territorio agreste del interior.|r=let
valico|paso de montaña|valiko|S|nat|5|Il valico alpino chiuso per neve.|El paso alpino cerrado por nieve.|g=m;p=valichi
conca|hondonada|konka|S|nat|5|Una conca verdeggiante tra i monti.|Una hondonada verdosa entre los montes.|g=f;p=conche
pianura|llanura|pjanura|S|nat|4|La pianura padana infinita.|La llanura padana infinita.|g=f;p=pianure
pianeggiante|llano (plano)|pjanedˈdʒante|A|nat|5|Un terreno pianeggiante coltivato.|Un terreno llano cultivado.
collinare|de colinas|kollinare|A|nat|4|Un paesaggio collinare morbido.|Un paisaje de colinas suave.
montano|de montaña|montano|A|nat|4|Un paesino montano isolato.|Un pueblito de montaña aislado.
marino|marino|maˈrino|A|nat|4|Un paesaggio marino della costa.|Un paisaje marino de la costa.
lacustre|lacustre|lakwstre|A|nat|5|Un centro lacustre sul Garda.|Un centro lacustre en el Garda.
fluviale|fluvial|fluvjale|A|nat|5|Un parco fluviale del Tevere.|Un parque fluvial del Tíber.
verdeggiante|verdosísimo|verdedˈdʒante|A|nat|5|Un prato verdeggiante in primavera.|Un prado verdosísimo en primavera.
florito|florecido|floˈrito|A|nat|5|Un balcone florito a maggio.|Un balcón florecido en mayo.
profumato|perfumado|profuˈmato|A|nat|4|Un giardino profumato di zagare.|Un jardín perfumado de azahar.
zagara|azahar|dzagara|S|nat|5|La zagara dei limoni di Sicilia.|El azahar de los limones de Sicilia.|g=f;p=zagare;n=Sicilia
olezzo|fragancia|olettso|S|nat|5|L'olezzo del pane caldo dal forno.|La fragancia del pan caliente del horno.|g=m;n=Invariable;r=let
profumo|perfume|proˈfumo|S|ast|3|Il profumo della pioggia sull'asfalto.|El perfume de la lluvia en el asfalto.|g=m;p=profumi
odore|olor|oˈdore|S|ast|3|Un odore di brace lontana.|Un olor de brasa lejana.|g=m;p=odori;c=odore di
puzzo|hedor|puddzo|S|ast|4|Un puzzo di chiuso in cantina.|Un hedor a encerrado en el sótano.|g=m;p=puzzi;a;profumo
puzzare|apestar|pudzare|V|ast|4|La spazzatura puzza forte.|La basura apesta fuerte.|r=inf
fetore|fetidez|feˈtore|S|ast|5|Il fetore dello stagno secco.|La fetidez del estanque seco.|g=m;n=Invariable;r=let
fragranza|fragancia|fragranza|S|ali|5|La fragranza del basilico fresco.|La fragancia de la albahaca fresca.|g=f;p=fragranze
sapore|sabor|saˈpore|S|ali|3|Un sapore dolceamaro in bocca.|Un sabor agridulce en la boca.|g=m;p=sapori;c=un sapore di
dolceamaro|agridulce|doltʃeaˈmaro|A|ali|5|Un limone dolceamaro insolito.|Un limón agridulce inusual.
insapore|insípido|insaˈpore|A|ali|5|Un pomodoro insapore d'inverno.|Un tomate insípido de invierno.
saporito|sabroso|sapoˈrito|A|ali|4|Un piatto saporito della tradizione.|Un plato sabroso de la tradizione.
gustoso|gustoso|ɡustoˈzo|A|ali|4|Una pasta gustosa e semplice.|Una pasta gustosa y simple.
delizioso|delicioso|delittsjoso|A|ali|3|Un dolce delizioso della pasticceria.|Un postre delicioso de la pastelería.
prelibato|exquisito|preliˈbato|A|ali|5|Un piatto prelibato da chef.|Un plato exquisito de chef.|r=let
nutriente|nutritivo|nutriˈɛnte|A|ali|4|Una colazione nutriente equilibrata.|Un desayuno nutritivo equilibrato.
sostanzioso|sustancioso|sostantsjoso|A|ali|4|Un pranzo sostanzioso della domenica.|Un almuerzo sustancioso del domingo.
abbondante|abundante|abbonˈdante|A|ali|3|Una porzione abbondante di pasta.|Una porción abundante di pasta.
scarso|escaso|skarsko|A|ali|4|Un pasto scarso al ristorante.|Una comida escasa en casa nueva.|a=abbondante
a volonta|a discreción|a volonˈta|L|ali|4|Mangia a volontà stasera.|Come a discreción esta noche.
fame da lupi|hambre de lobo|fame da lupi|L|ali|3|Ho una fame da lupi stamattina.|Tengo un hambre de lobo esta mañana.
ingordigia|gula|inɡordiddʒja|S|emo|5|Un attacco d'ingordigia al buffet.|Un ataque de gula en el buffet.|g=f;n=Invariable;r=let
ingordo|glotón|inɡordo|A|emo|4|Un bambino ingordo di dolci.|Un niño glotón de dulces.|a=moderato
# ══bloque 8: cierre ══
calamita|iman|kalamita|S|tec|5|Una calamita del frigo portafortuna.|Un imán del refrigerador amuleto.|g=f;p=calamite
scongelamento|descongelamiento|skondʒelamento|S|ali|5|Lo scongelamento del surgelato veloce.|El descongelamiento del congelado rápido.|g=m;p=scongelamenti
surgelato|congelado|surdʒelato|S|ali|4|Un surgelato di spinaci pronto.|Un congelado de espinacas listo.|g=m;p=surgelati
verdura surgelata|verdura congelada|verdura surdʒelata|L|ali|4|La verdura surgelata in busta.|La verdura congelada en bolsa.
data di scadenza|fecha de vencimiento|data di ʃaˈdenttsa|L|ali|3|Controlla la data di scadenza.|Revisa la fecha de vencimiento.
prodotto fresco|producto fresco|prodɔtto ˈfresko|L|ali|3|Un prodotto fresco del giorno.|Un producto fresco del día.
fatto in casa|hecho en casa|fatto in kasa|L|ali|3|La pasta fatta in casa della nonna.|La pasta hecha en casa de la abuela.
artigianale|artesanal|artitʃanale|A|ali|3|Un gelato artigianale vero.|Un helado artesanal verdadero.
industriale|industrial|industriale|A|ali|4|Un prodotto industriale standardizzato.|Un producto industrial estandarizado.
km zero|kilómetro cero|km zero|L|ali|4|I prodotti a chilometro zero del mercato.|Los productos a kilómetro cero del mercado.
doc|DOC (denominación)|dok|S|ali|5|Un vino DOC della Sardegna.|Un vino DOC de Cerdeña.|n=Denominazione di Origine Controllata
igt|IGT|igt|S|ali|5|Un olio IGT toscano pregiato.|Un aceite IGT toscano preciado.|n=Indicazione Geografica Tipica
ingredienti|ingredientes|inɡredjenti|S|ali|3|Gli ingredienti freschi del piatto.|Los ingredientes frescos del plato.|g=m;n=Siempre plural
ingrediente segreto|ingrediente secreto|inɡredjente seɡreto|L|ali|4|L'ingrediente segreto della ricetta.|El ingrediente secreto de la receta.
ricetta della nonna|receta de la abuela|ritʃetta della nonna|L|ali|3|La ricetta della nonna segreta.|La receta de la abuela secreta.
dosi|dosis|dosi|S|ali|4|Le dosi per quattro persone.|Las dosis para cuatro personas.|g=f;n=Siempre plural
grammo|gramo|ɡrammo|S|ali|4|Duecento grammi di farina.|Doscientos gramos de harina.|g=m;p=grammi
etto|hectogramo|etto|S|ali|4|Un etto di prosciutto crudo.|Un hectogramo de jamón crudo.|g=m;p=etti;n=Al banco: un etto = 100 g
chilo|kilo|kilo|S|ali|3|Un chilo di pane integrale.|Un kilo de pan integral.|g=m;p=chili
mezzo chilo|medio kilo|meddzo kilo|L|ali|4|Mezzo chilo di farina tipo zero.|Medio kilo de harina tipo cero.
litro|litro|litro|S|ali|3|Un litro d'acqua naturale.|Un litro de agua sin gas.|g=m;p=litri
mezzo litro|medio litro|meddzo litro|L|ali|4|Mezzo litro di latte fresco.|Medio litro de leche fresca.
bicchiere colmo|vaso lleno|bikkjere kolmo|L|ali|5|Un bicchiere colmo di vino.|Un vaso lleno de vino.
cucchiaio colmo|cuchara colmada|kukkjaio kolmo|L|ali|5|Un cucchiaio colmo di zucchero.|Una cuchara colmada de azúcar.
cucchiaino|cucharadita|kukkiˈno|S|ali|4|Un cucchiaino di miele dolce.|Una cucharadita de miel dulce.|g=m;p=cucchiaini
pizzico|pizca|pittsiko|S|ali|4|Un pizzico di sale grosso.|Una pizca de sal gruesa.|g=m;p=pizzichi;c=un pizzico di
sale grosso|sal gruesa|sale grɔsso|L|ali|4|Il sale grosso per la pasta.|La sal gruesa para la pasta.
sale fino|sal fina|sale fino|L|ali|4|Il sale fino da tavola.|La sal fina de mesa.
acqua bollente|agua hirviendo|akkwa bollente|L|ali|3|Butta la pasta in acqua bollente.|Tira la pasta en agua hirviendo.
acqua fredda|agua fría|akkwa fredda|L|ali|4|Sciacqua sotto l'acqua fredda.|Enjuaga bajo el agua fría.
a bagno maria|a baño maría|a baɲɲo maria|L|ali|5|Cuoci il cioccolato a bagno maria.|Cocina el chocolate a baño maría.
a fuoco basso|a fuego bajo|a fwɔko basso|L|ali|4|Mantieni a fuoco basso mezz'ora.|Mantén a fuego bajo media hora.
girare di tanto in tanto|dar vuelta de vez en cuando|dʒirare di tanto in tanto|L|ali|4|Gira il riso di tanto in tanto.|Da vuelta el arroz de vez en cuando.
lasciar riposare|dejar reposar|laʃʃar ripoˈsare|L|ali|4|Lascia riposare l'impasto un'ora.|Deja reposar la masa una hora.
lievitazione|fermentación|ljevitaˈtsjone|S|ali|5|La lievitazione della pizza napoletana.|La fermentación de la pizza napolitana.|g=f;p=lievitazioni
pasta lievitata|masa leudada|pasta ljevitata|L|ali|4|Una pasta lievitata tutta la notte.|Una masa leudada toda la noche.
ben cotta|bien cocida|ben kɔtta|A|ali|4|Una pizza ben cotta ai bordi.|Una pizza bien cocida en los bordes.
al sangue|término crudo|al saŋɡwe|L|ris|4|Una bistecca al sangue ordinata.|Un bistec término crudo pedido.
ben cotta la bistecca|bistec bien cocido|ben ˈkɔtta la biˈstɛkka|L|ris|5|La bistecca ben cotta per i bambini.|El bistec bien cocido para los niños.
# ══bloque 9: ¡5000! ══
allacciare|abrochar|allattʃare|V|rop|4|Allaccia la cintura di sicurezza.|Abrocha el cinturón de seguridad.|c=allacciatura
cintura di sicurezza|cinturón de seguridad|tʃintura di sitʃuˈrezza|L|tra|3|Allaccia sempre la cintura di sicurezza.|Abrocha siempre el cinturón de seguridad.
airbag|airbag|ɛrbag|S|tra|4|L'airbag del passeggero attivato.|El airbag del pasajero activado.|g=m;n=Invariable
frenata|frenada|freˈnata|S|tra|4|Una frenata d'emergenza improvvisa.|Una frenada de emergencia repentina.|g=f;p=frenate
derapata|derrape|deraˈpata|S|tra|5|Una derapata sull'asfalto bagnato.|Un derrape en el asfalto mojado.|g=f;p=derapate
testacoda|trompo|testaˈkoda|S|tra|5|Un testacoda evitato per un soffio.|Un trompo evitado por un pelo.|g=m;p=testacoda;n=Invariable
per un soffio|por un pelo|per un sɔffjo|L|ast|3|Ce l'ho fatta per un soffio.|Lo logré por un pelo.
di misura|por poco|di miˈsjura|L|ast|4|Vince di misura sul traguardo.|Gana por poco en la meta.
di grosso|en grande|di ɡrɔsso|L|ast|5|Sbagliare di grosso stavolta.|Equivocarse en grande esta vez.|r=col
alla larga|a distancia|alla larɡa|L|ast|4|Sta' alla larga dai guai.|Mantente a distancia de los líos.|c=stare alla larga da
alla vecchia maniera|a la antigua|alla vekkja manjera|L|ast|5|Cucina alla vecchia maniera della nonna.|Cocina a la antigua de la abuela.
a modo mio|a mi manera|a modo mio|L|ast|4|Faccio le cose a modo mio.|Hago las cosas a mi manera.
in perfetto stile|en perfecta línea|in perfɛtto stile|L|ast|5|In perfetto stile britannico.|En perfecta línea británica.
con stile|con estilo|kon stile|L|ast|4|Vince con stile e classe.|Gana con estilo y clase.
senza stile|sin estilo|senza stile|L|ast|5|Un vestito senza stile triste.|Un vestido sin estilo triste.
che stile!|¡qué estilo!|ke stile|L|ast|4|Che stile quel gol al volo!|¡Qué estilo ese gol de volea!
di prima classe|de primera clase|di prima klasse|L|ast|5|Un servizio di prima classe.|Un servicio de primera clase.
di seconda mano|de segunda mano|di sekonda mano|L|cmp|4|Un libro di seconda mano usato.|Un libro de segunda mano usado.|n=literal y figurado
di prima mano|de primera mano|di prima mano|L|ast|4|Un'informazione di prima mano certa.|Una información de primera mano cierta.
a mani vuote|con las manos vacías|a mani vwɔte|L|ast|5|Tornò a mani vuote dal mercato.|Volvió con las manos vacías del mercado.
# ══las 8 finalísimas ══
bicchiere di carta|vaso de cartón|bikkjere di karta|L|ris|5|Un bicchiere di carta al bar.|Un vaso de cartón en el bar.
piattino|platito|pjatˈtino|S|ris|5|Un piattino del caffè col biscotto.|Un platito del café con la galleta.|g=m;p=piattini
cucchiaino da caffè|cucharita de café|kukkiˈno da kafˈfɛ|L|ris|5|Un cucchiaino da caffè pulito.|Una cucharita de café limpia.
servizio al tavolo|servicio a la mesa|serviˈtsjo al ˈtavolo|L|ris|4|Il servizio al tavolo veloce.|El servicio a la mesa rápido.
conto diviso|cuenta dividida|ˈkonto diˈvizo|L|ris|4|Un conto diviso in quattro.|Una cuenta dividida en cuatro.

# ══la parola 5000 ══
soddisfazione|satisfacción|soddisfatˈtsjone|S|emo|2|Quale soddisfazione completare il dizionario di 5000 parole!|¡Qué satisfacción completar el diccionario de 5000 palabras!|g=f;p=soddisfazioni;c;grande soddisfazione
`, "B1", "k-x20");
