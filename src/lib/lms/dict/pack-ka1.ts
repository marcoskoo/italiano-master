import { parsePack } from "./compact";
import type { VocabWord } from "../types";

/* ── Pack K·A1-a · vocabulario concreto fundamental (MCER A1) ─────────
   Persona · famiglia · corpo · abbigliamento · casa · alimenti ·
   animali · colori · natura. Formato compacto (ver compact.ts). */

export const PACK_KA1: VocabWord[] = parsePack(`
# ══ persona e età ══
bambina|niña|ˈbambina|S|fam|1|La bambina gioca nel parco.|La niña juega en el parque.|g=f
signore|señor|siɲˈɲore|S|sal|1|Buongiorno, signore!|¡Buenos días, señor!|g=m;n=Pl.: i signori
signora|señora|siɲˈɲora|S|sal|1|La signora Rossi è la mia insegnante.|La señora Rossi es mi profesora.|g=f
signorina|señorita|siɲɲoˈrina|S|sal|2|La signorina aspetta il treno.|La señorita espera el tren.|g=f;n=Hoy poco usado para adultos; se prefieren signora o il nome
adulto|adulto|aˈdulto|S|fam|2|Mio fratello è un adulto, ha 30 anni.|Mi hermano es un adulto, tiene 30 años.|g=m
anziano|anciano|anˈtsjano|S|fam|2|Gli anziani viaggiano gratis in treno.|Los ancianos viajan gratis en tren.|g=m;p=anziani;n=Como adjetivo: una persona anziana
neonato|recién nacido|neoˈnato|S|fam|4|Il neonato dorme sempre.|El recién nacido duerme siempre.|g=m
gemello|gemelo|dʒeˈmello|S|fam|2|Mia sorella ha due gemelli.|Mi hermana tiene gemelos.|g=m;p=gemelli
vicino di casa|vecino|ˈvitʃino di ˈkasa|L|fam|2|Il mio vicino di casa è molto gentile.|Mi vecino es muy amable.|rel=vicino
lontano|lejos|lonˈtano|A|cit|1|Roma è lontana da Milano.|Roma está lejos de Milán.|a=vicino
nome di battesimo|nombre de pila|ˈnome di batteˈzimo|L|fam|4|Il mio nome di battesimo è Marco.|Mi nombre de pila es Marco.

# ══ famiglia (ampliación) ══
genitore|padre o madre (progenitor)|dʒeˈnitore|S|fam|1|I miei genitori abitano a Lima.|Mis padres viven en Lima.|g=m;p=genitori;n=Se usa casi siempre en plural: i genitori = los padres
figlia|hija|ˈfiʎʎa|S|fam|1|Hanno una figlia e due figli.|Tienen una hija y dos hijos.|g=f
cugina|prima|kuˈdʒina|S|fam|1|Mia cugina studia a Bologna.|Mi prima estudia en Bolonia.|g=f
suocero|suegro|ˈswɔkero|S|fam|2|Mio suocero cucina molto bene.|Mi suegro cocina muy bien.|g=m;p=suoceri
suocera|suegra|ˈswɔkera|S|fam|2|La suocera di Luca è spagnola.|La suegra de Luca es española.|g=f
nuora|nuera|ˈnwora|S|fam|3|La loro nuora è medico.|Su nuera es médico.|g=f
genero|yerno|ˈdʒenero|S|fam|3|Il genero lavora in banca.|El yerno trabaja en un banco.|g=m
cognato|cuñado|koɲˈɲato|S|fam|2|Il mio cognato è di Torino.|Mi cuñado es de Turín.|g=m;p=cognati
cognata|cuñada|koɲˈɲata|S|fam|2|Mia cognata suona il pianoforte.|Mi cuñada toca el piano.|g=f
infanzia|infancia|inˈfantsia|S|fam|2|Ho passato l'infanzia al mare.|Pasé la infancia en el mar.|g=f
adolescenza|adolescencia|adoleˈʃentsa|S|fam|3|L'adolescenza è un periodo difficile.|La adolescencia es una época difícil.|g=f

# ══ corpo (ampliación) ══
dente|diente|ˈdente|S|cor|1|Mi fa male un dente.|Me duele un diente.|g=m;p=denti
capello|pelo|kaˈpello|S|cor|1|Ha i capelli neri e lunghi.|Tiene el pelo negro y largo.|g=m;p=capelli;n=Casi siempre en plural: i capelli = el cabello
dito|dedo|ˈdito|S|cor|1|Mi sono tagliato un dito.|Me corté un dedo.|g=m;p=dita;n=Ojo: el plural es le dita (femenino irregular)
lingua|lengua|ˈliŋɡwa|S|cor|1|La lingua italiana è bellissima.|La lengua italiana es bellísima.|g=f;n=También "idioma": la lingua spagnola
labbro|labio|ˈlabbro|S|cor|2|Ha le labbra rosse.|Tiene los labios rojos.|g=m;p=labbra
collo|cuello|ˈkɔllo|S|cor|1|Ho male al collo.|Me duele el cuello.|g=m
spalla|hombro|ˈʃpalla|S|cor|1|Porta lo zaino su una spalla.|Lleva la mochila en un hombro.|g=f
gomito|codo|ˈɡomito|S|cor|2|Appoggia i gomiti sul tavolo.|Apoya los codos en la mesa.|g=m;p=gomiti
ginocchio|rodilla|dʒiˈnɔkkjo|S|cor|2|Mi sono fatto male a un ginocchio.|Me lastimé una rodilla.|g=m;p=ginocchia
mento|mentón|ˈmento|S|cor|3|Si tocca il mento quando pensa.|Se toca el mentón cuando piensa.|g=m
guancia|mejilla|ˈɡwantʃa|S|cor|2|La bambina ha le guance rosse.|La niña tiene las mejillas rojas.|g=f;p=guance
barba|barba|ˈbarba|S|cor|1|Mio padre porta la barba.|Mi padre lleva barba.|g=f
baffo|bigote|ˈbaffo|S|cor|3|Ha due baffi lunghi.|Tiene dos bigotes largos.|g=m;p=baffi
sopracciglio|ceja|sopraˈtʃiʎʎo|S|cor|3|Alza un sopracciglio, sorpreso.|Levanta una ceja, sorprendido.|g=m;p=sopracciglia
unghia|uña|ˈuɲɲa|S|cor|2|Si dipinge le unghie di rosso.|Se pinta las uñas de rojo.|g=f
pelle|piel / cuero|ˈpelle|S|cor|1|Ha la pelle chiara.|Tiene la piel clara.|g=f;p=pelli;n=También material: una borsa di pelle = de cuero
osso|hueso|ˈɔsso|S|cor|2|Il cane nasconde un osso.|El perro esconde un hueso.|g=m;p=ossa;n=Plural irregular: le ossa
sangue|sangre|ˈsaŋɡwe|S|cor|2|Dono il sangue ogni anno.|Dono sangre cada año.|g=m;n=Invariable
cervello|cerebro|tʃerˈvɛllo|S|cor|2|Il cervello umano è straordinario.|El cerebro humano es extraordinario.|g=m
fegato|hígado|ˈfɛɡato|S|cor|3|Il fegato è un organo vitale.|El hígado es un órgano vital.|g=m
polmone|pulmón|polˈmone|S|cor|3|Respirare profondamente aiuta i polmoni.|Respirar profundo ayuda a los pulmones.|g=m;p=polmoni
muscolo|músculo|ˈmuskolo|S|cor|2|Fare sport rafforza i muscoli.|Hacer deporte fortalece los músculos.|g=m;p=muscoli
respiro|respiro|ˈrespiro|S|cor|2|Fai un respiro profondo.|Da una respiración profunda.|g=m
voce|voz|ˈvɔtʃe|S|cor|1|Hai una bella voce!|¡Tienes una bella voz!|g=f;p=voci
salute|salud|saˈlute|S|sla|1|Alla tua salute!|¡Por tu salud! (¡salud!)|g=f;c=brindare alla salute,essere in buona salute

# ══ abbigliamento ══
maglia|suéter|ˈmaʎʎa|S|rop|1|Fa freddo, metti una maglia.|Hace frío, ponte un suéter.|g=f
maglietta|polo/camiseta|maʎʎetˈta|S|rop|1|Questa maglietta è troppo grande.|Esta camiseta es demasiado grande.|g=f
camicetta|blusa|tamiˈtʃetta|S|rop|2|Indossa una camicetta bianca.|Lleva una blusa blanca.|g=f
gonna|falda (de vestido)|ˈɡonna|S|rop|1|Una gonna lunga blu.|Una falda larga azul.|g=f;n=En italiano "falda" es otra cosa; la prenda es gonna
giacca|chaqueta|ˈdʒakka|S|rop|1|Questa giacca è di pelle.|Esta chaqueta es de cuero.|g=f
cappotto|abrigo|kapˈpɔtto|S|rop|1|D'inverno porto il cappotto.|En invierno llevo el abrigo.|g=m;p=cappotti
impermeabile|impermeable|impermeaˈbile|S|rop|2|Piove, prendi l'impermeabile.|Llueve, toma el impermeable.|g=m;n=Invariable en plural: gli impermeabili es raro, se usa l'impermeabile
cappello|sombrero|kapˈpɛllo|S|rop|1|Il sole è forte, mettiti un cappello.|El sol está fuerte, ponte un sombrero.|g=m;p=cappelli
berretto|gorra|berˈretto|S|rop|2|Porta sempre un berretto rosso.|Siempre lleva una gorra roja.|g=m;p=berretti
guanto|guante|ˈɡwanto|S|rop|2|Cerco i miei guanti neri.|Busco mis guantes negros.|g=m;p=guanti
sciarpa|bufanda|ˈʃkarpa|S|rop|2|Mia nonna mi ha fatto una sciarpa.|Mi abuela me tejió una bufanda.|g=f
cintura|cinturón|ˈtʃintura|S|rop|1|Questa cintura è di cuoio.|Este cinturón es de cuero.|g=f
cravatta|corbata|kraˈvatta|S|rop|2|Mio padre porta la cravatta al lavoro.|Mi padre lleva corbata al trabajo.|g=f
calzino|calcetín|kalˈtsino|S|rop|1|Ho un buco nel calzino.|Tengo un agujero en el calcetín.|g=m;p=calzini
stivale|bota|stiˈvale|S|rop|2|Gli stivali da pioggia sono comodi.|Las botas de lluvia son cómodas.|g=m;p=stivali
tacco|taco (zapato)|ˈtakko|S|rop|2|Cammina bene sui tacchi alti.|Camina bien en tacones altos.|g=m;p=tacchi
pigiama|piyama|piˈdʒama|S|rop|2|Mi metto il pigiama alle dieci.|Me pongo el piyama a las diez.|g=m;n=Invariable
jeans|jean|dʒins|S|rop|1|Questi jeans sono nuovi.|Estos jeans son nuevos.|g=m;n=Palabra inglesa, invariable
pigiama party|piyamada|piˈdʒama ˈparti|L|sve|3|Organizzo un pigiama party per il compleanno.|Organizo una piyamada por el cumpleaños.|r=inf
portafoglio|cartera/billetera|portaˈfɔʎʎo|S|rop|1|Ho perso il portafoglio.|Perdí la billetera.|g=m;p=portafogli;n=Ojo: p=fondos no; portafogli (los fondos económicos) es portafoglio
anello|anillo|aˈnɛllo|S|rop|1|Un anello d'oro per lei.|Un anillo de oro para ella.|g=m;p=anelli
collana|collar|kolˈlana|S|rop|2|Le ho regalato una collana.|Le regalé un collar.|g=f
braccialetto|pulsera|brattʃaˈletto|S|rop|2|Un braccialetto d'argento.|Una pulsera de plata.|g=m;p=braccialetti
orecchino|arete|orekˈkino|S|rop|2|Porta orecchini d'oro.|Lleva aretes de oro.|g=m;p=orecchini
lana|lana|ˈlana|S|rop|2|Questa maglia è di lana pura.|Este suéter es de lana pura.|g=f
cotone|algodón|koˈtone|S|rop|2|Preferisco le magliette di cotone.|Prefiero las camisetas de algodón.|g=m;p=cotoni
seta|seda|ˈseta|S|rop|3|Una sciarpa di seta.|Una bufanda de seda.|g=f;ff=1;n=¡Falso amigo! IT seta = ES seda, no "seta" (hongo)
cucire|coser|kuˈtʃire|V|rop|2|Mia madre cuce i vestiti.|Mi madre cose la ropa.
lana d'agnello|lana de cordero|ˈlana daɲˈɲɛllo|L|rop|4|Questa lana d'agnello è morbidissima.|Esta lana de cordero es suavísima.

# ══ casa (ampliación) ══
garage|garaje|ˈɡaradʒ|S|cas|1|La macchina è in garage.|El carro está en el garaje.|g=m;n=Invariable
terrazzo|terraza|terˈrattso|S|cas|2|Prendiamo il sole sul terrazzo.|Tomamos el sol en la terraza.|g=m;p=terrazzi
balcone|balcón|balˈkone|S|cas|1|Ci sono fiori sul balcone.|Hay flores en el balcón.|g=m;p=balconi
muro|muro|ˈmuro|S|cas|1|Il gatto salta sopra il muro.|El gato salta encima del muro.|g=m;p=muri;n=Para murallas de ciudad: le mura (f.)
pavimento|piso (suelo)|paviˈmento|S|cas|2|Il pavimento è di legno.|El piso es de madera.|g=m
soffitto|techo (cielo raso)|sofˈfitto|S|cas|2|Il soffitto è bianco.|El cielo raso es blanco.|g=m;p=soffitti
tetto|techo (de casa)|ˈtɛtto|S|cas|2|Sul tetto c'è un'antenna.|En el techo hay una antena.|g=m;p=tetti
camino|chimenea|kaˈmino|S|cas|2|D'inverno accendiamo il camino.|En invierno encendemos la chimenea.|g=m;p=camini
salotto|sala|saˈlɔtto|S|cas|1|Guardiamo la TV in salotto.|Vemos la tele en la sala.|g=m;p=salotti
corridoio|pasillo|korriˈdɔjo|S|cas|2|La camera è in fondo al corridoio.|La habitación está al fondo del pasillo.|g=m;p=corridoi
soffitta|ático|sofˈfitta|S|cas|3|In soffitta conserviamo le vecchie foto.|En el ático guardamos las fotos viejas.|g=f
stanza|pieza/habitación|ˈstantsa|S|cas|1|La mia stanza è piccola ma luminosa.|Mi pieza es pequeña pero luminosa.|g=f
mobile|mueble|ˈmɔbile|S|cas|1|Abbiamo comprato un mobile nuovo.|Compramos un mueble nuevo.|g=m;p=mobili;n=Cuidado: ES "móvil" = IT cellulare
mensola|repisa|menˈsola|S|cas|3|Sulla mensola ci sono dei libri.|En la repisa hay libros.|g=f;p=mensole
cassetto|cajón|kasˈsɛtto|S|cas|1|Le chiavi sono nel cassetto.|Las llaves están en el cajón.|g=m;p=cassetti
tappeto|alfombra|tapˈpɛto|S|cas|1|C'è un tappeto persiano in salotto.|Hay una alfombra persa en la sala.|g=m;p=tappeti
cuscino|cojín|kuˈʃino|S|cas|2|Due cuscini sul divano.|Dos cojines en el sofá.|g=m;p=cuscini
coperta|frazada|koˈperta|S|cas|2|Fa freddo, prendi un'altra coperta.|Hace frío, toma otra frazada.|g=f
lenzuolo|sábana|lentˈswɔlo|S|cas|2|Devo cambiare le lenzuola.|Debo cambiar las sábanas.|g=m;p=lenzuola;n=Plural femenino irregular: le lenzuola
tende|cortina|ˈtende|S|cas|2|Apro le tende al mattino.|Abro las cortinas por la mañana.|g=f;n=Se usa en plural: le tende
doccia|ducha|ˈdɔttʃa|S|cas|1|Faccio la doccia prima di uscire.|Me ducho antes de salir.|g=f;c=fare la doccia
lavandino|lavatorio|lavanˈdino|S|cas|2|Lavati le mani al lavandino.|Lávate las manos en el lavatorio.|g=m;p=lavandini
rubinetto|grifo|rubiˈnetto|S|cas|2|Chiudi il rubinetto, per favore.|Cierra el grifo, por favor.|g=m;p=rubinetti
specchio|espejo|ˈspekkjo|S|cas|1|Mi guardo allo specchio.|Me miro en el espejo.|g=m;p=specchi
frigorifero|refrigerador|fridʒoriˈfero|S|cas|1|Metti il latte in frigorifero.|Pon la leche en el refrigerador.|g=m;p=frigoriferi;c=mettere in frigorifero
congelatore|congelador|condʒelaˈtore|S|cas|3|Il gelato è nel congelatore.|El helado está en el congelador.|g=m;p=congelatori
forno|horno|ˈforno|S|cas|1|La pizza cuoce nel forno.|La pizza se cocina en el horno.|g=m;p=forni
fornello|quemador|forˈnɛllo|S|cas|2|Metti la pentola sul fornello.|Pon la olla en el quemador.|g=m;p=fornelli
lavatrice|lavadora|lavaˈtritʃe|S|cas|2|La lavatrice è rotta.|La lavadora está descompuesta.|g=f
lavastoviglie|lavavajillas|lavastoviˈʎʎe|S|cas|3|Carico la lavastoviglie.|Cargo el lavavajillas.|g=f;p=lavastoviglie;n=Invariable
scopa|escoba|ˈskopa|S|cas|2|Pulisci il pavimento con la scopa.|Limpia el piso con la escoba.|g=f
secchio|balde|ˈsɛkkjo|S|cas|2|Riempi il secchio d'acqua.|Llena el balde de agua.|g=m;p=secchi
asciugamano|toalla|aʃʃuɡaˈmano|S|cas|1|Portami un asciugamano pulito.|Tráeme una toalla limpia.|g=m;p=asciugamani
sapone|jabón|saˈpone|S|cas|1|Lavati le mani col sapone.|Lávate las manos con jabón.|g=m;p=saponi
shampoo|champú|ˈʃampo|S|cas|2|Mi lavo i capelli con lo shampoo.|Me lavo el pelo con champú.|g=m;n=Invariable
dentifricio|pasta dental|dentiˈfritʃo|S|cas|2|Il dentifricio al mentolo.|La pasta dental de menta.|g=m;p=dentifrici
spazzolino|cepillo (de dientes)|spattsoˈlino|S|cas|2|Cambio spazzolino ogni tre mesi.|Cambio de cepillo cada tres meses.|g=m;p=spazzolini
spazzola|cepillo (de pelo)|ˈspattsola|S|cas|2|Passami la spazzola, per favore.|Pásame el cepillo, por favor.|g=f
pettine|peine|ˈpɛttine|S|cas|3|Un pettine tascabile.|Un peine de bolsillo.|g=m;p=pettini
busta|sobre (carta)|ˈbusta|S|cas|2|Metti la lettera nella busta.|Pon la carta en el sobre.|g=f;n=¡Cuidado! busta = sobre Y bolso; ES "busta" no existe
scala|escalera|ˈskala|S|cas|1|Salgo le scale a piedi.|Subo las escaleras a pie.|g=f;p=scale;n=Casi siempre plural: le scale

# ══ frutta ══
banana|banana|baˈnana|S|ali|1|La banana è matura.|El banana está maduro.|g=f;p=banane
pera|pera|ˈpera|S|ali|1|Una pera al giorno.|Una pera al día.|g=f;p=pere
uva|uvas|ˈuva|S|ali|2|L'uva è dolcissima.|Las uvas son dulcísimas.|g=f;n=Invariable, se usa en singular
limone|limón|liˈmone|S|ali|1|Spremo un limone.|Exprimo un limón.|g=m;p=limoni
fragola|fresa|fraˈɡola|S|ali|1|Le fragole con la panna.|Las fresas con crema.|g=f;p=fragole
ciliegia|cereza|tʃiˈlɛdʒa|S|ali|2|Le ciliegie di giugno.|Las cerezas de junio.|g=f;p=ciliegie
pesca|durazno|ˈpeska|S|ali|1|Una pesca succosa.|Un durazno jugoso.|g=f;n=¡Falso amigo parcial! ES "pesca" = el acto de pescar
albicocca|damasco|albiˈkɔkka|S|ali|3|Un'albicocca matura.|Un damasco maduro.|g=f;p=albicocche
melone|melón|meˈlone|S|ali|2|Il melone d'estate.|El melón de verano.|g=m;p=meloni
anguria|sandía|anˈɡuria|S|ali|2|L'anguria fresca al mare.|La sandía fresca en la playa.|g=f
ananas|piña|aˈnanas|S|ali|2|L'ananas tagliato a fette.|La piña cortada en rodajas.|g=m;n=Invariable
mandarino|mandarina|mandaˈrino|S|ali|2|I mandarini a Natale.|Las mandarinas en Navidad.|g=m;p=mandarini
pompelmo|toronja|pomˈpɛlmo|S|ali|3|Il pompelmo a colazione.|La toronja en el desayuno.|g=m;p=pompelmi
fico|higo|ˈfiko|S|ali|3|I fichi secchi sono dolci.|Los higos secos son dulces.|g=m;p=fichi
dattero|dátil|ˈdattero|S|ali|4|I datteri ripieni.|Los dátiles rellenos.|g=m;p=datteri
succo di frutta|jugo de fruta|ˈsukkɔ di ˈfrutta|L|ali|1|Vorrei un succo di frutta, per favore.|Quisiera un jugo de fruta, por favor.

# ══ verdura e ortaggi ══
carota|zanahoria|kaˈrɔta|S|ali|1|Le carote fanno bene alla vista.|Las zanahorias son buenas para la vista.|g=f;p=carote
cipolla|cebolla|tʃiˈpɔlla|S|ali|1|Taglio la cipolla e piango.|Corto la cebolla y lloro.|g=f;p=cipolle
aglio|ajo|ˈaʎʎo|S|ali|1|Due spicchi d'aglio.|Dos dientes de ajo.|g=m;n=Invariable
peperone|pimiento|pepeˈrone|S|ali|2|I peperoni grigliati.|Los pimientos a la parrilla.|g=m;p=peperoni
melanzana|berenjena|melanˈtsana|S|ali|2|Le melanzane alla parmigiana.|Las berenjenas a la parmigiana.|g=f;p=melanzane
zucchina|zucchini (calabacín)|dzukˈkina|S|ali|2|Le zucchine trifolate.|Los zucchini salteados.|g=f;p=zucchine
fungo|hongo|ˈfuŋɡo|S|ali|2|I funghi porcini.|Los hongos porcini.|g=m;p=funghi
lattuga|lechuga|latˈtuɡa|S|ali|2|Un'insalata di lattuga.|Una ensalada de lechuga.|g=f
pisello|arveja|piˈsɛllo|S|ali|2|I piselli col prosciutto.|Las arvejas con jamón.|g=m;p=piselli
fagiolo|frijol|faˈdʒolo|S|ali|1|La pasta e fagioli.|La pasta con frijoles.|g=m;p=fagioli
lenticchia|lenteja|lenˈtikkja|S|ali|2|Le lenticchie di Capodanno.|Las lentejas de Año Nuevo.|g=f;p=lenticchie
cece|garbanzo|ˈtʃetʃe|S|ali|3|La farina di ceci.|La harina de garbanzos.|g=m;p=ceci
broccolo|brócoli|ˈbrɔkkolo|S|ali|2|I broccoli al vapore.|El brócoli al vapor.|g=m;p=broccoli
cavolo|col|ˈkavolo|S|ali|2|Il cavolo verza.|La col verza.|g=m;p=cavoli;n=Expr. colloquial: cavolo! = ¡carajo! (suave)
spinacio|espinaca|spiˈnatʃo|S|ali|2|Gli spinaci saltati in padella.|Las espinacas salteadas.|g=m;p=spinaci
sedano|apio|seˈdano|S|ali|3|Il sedano ripieno.|El apio relleno.|g=m
porro|puerro (cebolla china)|ˈpɔrro|S|ali|3|La vellutata di porri.|La crema de puerros.|g=m;p=porri
zucca|zapallo|ˈtsukka|S|ali|2|La zucca di Halloween.|El zapallo de Halloween.|g=f;p=zucche

# ══ carne e pesce ══
pollo|pollo|ˈpɔllo|S|ali|1|Grigliamo il pollo.|Asamos el pollo.|g=m;n=Invariable
bistecca|bistec|bisˈtɛkka|S|ali|1|Una bistecca al sangue.|Un bistec término crudo.|g=f;p=bistecche
prosciutto|jamón (italiano)|proˈʃutto|S|ali|1|Il prosciutto crudo e quello cotto.|El jamón crudo y el cocido.|g=m;p=prosciutti
salame|salame|saˈlame|S|ali|2|Un panino col salame.|Un pan con salame.|g=m;n=Invariable
salsiccia|salchicha|salˈsittʃa|S|ali|2|Le salsicce alla griglia.|Las salchichas a la parrilla.|g=f;p=salsicce
tonno|atún|ˈtɔnno|S|ali|1|L'insalata di tonno.|La ensalada de atún.|g=m
salmone|salmón|salˈmone|S|ali|2|Il salmone affumicato.|El salmón ahumado.|g=m;p=salmoni
gambero|camarón|ˈɡambero|S|ali|2|I gamberi in padella.|Los camarones a la sartén.|g=m;p=gamberi
vongola|almeja|ˈvoŋɡola|S|ali|2|Le vongole con gli spaghetti.|Las almejas con espaguetis.|g=f;p=vongole
merluzzo|merluza|merˈluttso|S|ali|3|Il merluzzo in crosta.|La merluza al horno.|g=m;p=merluzzi
acciuga|anchoa|atˈtʃuɡa|S|ali|3|Le acciughe sotto sale.|Las anchoas en salazón.|g=f;p=acciughe

# ══ latticini e dolci ══
yogurt|yogur|ˈjɔɡurt|S|ali|1|Uno yogurt alla frutta.|Un yogur de fruta.|g=m;n=Invariable
miele|miel|ˈmjɛle|S|ali|1|Il tè col miele.|El té con miel.|g=m;n=Invariable
marmellata|mermelada|marmelˈlata|S|ali|1|La marmellata di arance.|La mermelada de naranjas.|g=f;c=marmellata di fragole
cioccolato|chocolate|tʃokkoˈlato|S|ali|1|Un cioccolato caldo, per favore.|Un chocolate caliente, por favor.|g=m;n=Invariable
torta|torta|ˈtorta|S|ali|1|La torta di compleanno.|La torta de cumpleaños.|g=f;p=torte;c=fare una torta
biscotto|galleta / bizcocho|bisˈkɔtto|S|ali|1|Due biscotti col latte.|Dos galletas con leche.|g=m;p=biscotti
pasticcino|pastelito|pastitˈtʃino|S|ali|2|Una scatola di pasticcini.|Una caja de pastelitos.|g=m;p=pasticcini
cornetto|croissant|korˈnetto|S|ali|2|Un cornetto col cappuccino.|Un croissant con capuchino.|g=m;p=cornetti
panettone|panetón|panetˈtone|S|ali|3|Il panettone di Milano.|El panetón de Milán.|g=m;p=panettoni
mozzarella|mozzarella|mottsaˈrɛlla|S|ali|2|La mozzarella di bufala.|La mozzarella de búfala.|g=f
ricotta|ricota|riˈkɔtta|S|ali|3|I ravioli di ricotta.|Los ravioles de ricota.|g=f
pepe|pimienta|ˈpepe|S|ali|2|Un pizzico di pepe.|Una pizca de pimienta.|g=m;n=Invariable
aceto|vinagre|aˈtʃeto|S|ali|2|L'aceto balsamico.|El vinagre balsámico.|g=m;p=aceti
cannella|canela|kanˈnɛlla|S|ali|3|La cannella nel vin brûlé.|La canela en el vino caliente.|g=f
zenzero|jengibre|ˈdzendʒero|S|ali|3|Lo zenzero fresco.|El jengibre fresco.|g=m
origano|orégano|oˈriɡano|S|ali|3|L'origano sulla pizza.|El orégano en la pizza.|g=m
basilico|albahaca|baˈziliko|S|ali|3|Il basilico fresco del pesto.|La albahaca fresca del pesto.|g=m;p=basilici
prezzemolo|perejil|prettˈsɛmolo|S|ali|3|Tritare il prezzemolo.|Picar el perejil.|g=m
rosmarino|romero|rozmaˈrino|S|ali|3|Il rosmarino con le patate.|El romero con las papas.|g=m
maionese|mayonesa|majoˈnɛːze|S|ali|2|Senza maionese, grazie.|Sin mayonesa, gracias.|g=f
senape|mostaza|seˈnape|S|ali|3|Un po' di senape sull'hot dog.|Un poco de mostaza al hot dog.|g=f

# ══ oggetti da cucina ══
piatto|plato|ˈpjatto|S|ris|1|Il primo e il secondo piatto.|El primer y el segundo plato.|g=m;p=piatti;c=piatto del giorno
bicchiere|vaso|biˈkkjere|S|ris|1|Un bicchiere d'acqua frizzante.|Un vaso de agua con gas.|g=m;p=bicchieri
tazza|taza|ˈtattsa|S|ris|1|Una tazza di tè.|Una taza de té.|g=f;p=tazze
coltello|cuchillo|kolˈtɛllo|S|ris|1|Tagliare il pane col coltello.|Cortar el pan con el cuchillo.|g=m;p=coltelli
cucchiaio|cuchara|kukˈkjaio|S|ris|1|Un cucchiaio di zucchero.|Una cuchara de azúcar.|g=m;p=cucchiai
pentola|olla|ˈpɛntola|S|ris|2|L'acqua bolle nella pentola.|El agua hierve en la olla.|g=f;p=pentole
padella|sartén|paˈdɛlla|S|ris|1|Le uova in padella.|Los huevos a la sartén.|g=f;p=padelle
tovagliolo|servilleta|tovaɲˈɲolo|S|ris|1|Il tovagliolo di stoffa.|La servilleta de tela.|g=m;p=tovaglioli
bottiglia|botella|botˈtiʎʎa|S|ris|1|Una bottiglia di vino rosso.|Una botella de vino tinto.|g=f;p=bottiglie
lattina|lata|latˈtina|S|ris|2|Una lattina di coca-cola.|Una lata de coca-cola.|g=f;p=lattine
sacchetto|bolsa|sakˈkɛtto|S|cmp|1|Mi dia un sacchetto, per favore.|Deme una bolsa, por favor.|g=m;p=sacchetti
scatola|caja|ˈskatola|S|cmp|1|Una scatola di cioccolatini.|Una caja de bombones.|g=f;p=scatole
barattolo|frasco|barˈrattolo|S|cmp|2|Un barattolo di marmellata.|Un frasco de mermelada.|g=m;p=barattoli
tovaglia|mantel|toˈvaʎʎa|S|ris|3|Una tovaglia bianca.|Un mantel blanco.|g=f;p=tovaglie

# ══ animali ══
coniglio|conejo|koˈniʎʎo|S|ani|2|Il coniglio saltella nel prato.|El conejo salta en el prado.|g=m;p=conigli
criceto|hámster|ˈkriketo|S|ani|3|Il criceto corre nella ruota.|El hámster corre en la rueda.|g=m;p=criceti
tartaruga|tortuga|tartaˈruɡa|S|ani|2|La tartaruga nuota lentamente.|La tortuga nada lento.|g=f;p=tartarughe
serpente|serpiente|serˈpente|S|ani|2|Un serpente a sonagli.|Una serpiente de cascabel.|g=m;p=serpenti
coccodrillo|cocodrilo|kɔkkodriˈllo|S|ani|2|Il coccodrillo del Nilo.|El cocodrilo del Nilo.|g=m;p=coccodrilli
elefante|elefante|eleˈfante|S|ani|2|L'elefante ha una memoria eccezionale.|El elefante tiene una memoria excepcional.|g=m;p=elefanti
leone|león|leˈone|S|ani|2|Il leone ruggisce.|El león ruge.|g=m;p=leoni
tigre|tigre|ˈtiɡre|S|ani|2|La tigre è un felino.|La tigre es un felino.|g=f;p=tigri
giraffa|jirafa|dʒiˈraffa|S|ani|2|La giraffa mangia le foglie.|La jirafa come las hojas.|g=f;p=giraffe
scimmia|mono|ˈskimmja|S|ani|2|La scimmia mangia la banana.|El mono come el banano.|g=f;p=scimmie
orso|oso|ˈɔrso|S|ani|2|L'orso dorme tutto l'inverno.|El oso duerme todo el invierno.|g=m;p=orsi
volpe|zorro|ˈvɔlpe|S|ani|2|La volpe è astuta.|El zorro es astuto.|g=f;p=volpi
scoiattolo|ardilla|skoiˈattolo|S|ani|3|Lo scoiattolo nasconde le noci.|La ardilla esconde las nueces.|g=m;p=scoiattoli
riccio|erizo|ˈrittʃo|S|ani|4|Un riccio nel giardino.|Un erizo en el jardín.|g=m;p=ricci
cinghiale|jabalí|tʃinˈɡwiale|S|ani|4|Il cinghiale vive nel bosco.|El jabalí vive en el bosque.|g=m;p=cinghiali
cervo|ciervo|ˈtʃervo|S|ani|3|Un cervo maestoso.|Un ciervo majestuoso.|g=m;p=cervi
capra|cabra|ˈkapra|S|ani|2|La capra mangia l'erba.|La cabra come el pasto.|g=f;p=capre
pecora|oveja|ˈpɛkora|S|ani|2|Le pecore al pascolo.|Las ovejas en el pastizal.|g=f;p=pecore
mucca|vaca|ˈmukka|S|ani|2|La mucca dà il latte.|La vaca da leche.|g=f;p=mucche
maiale|cerdo|maˈjale|S|ani|2|Il maiale rosa.|El cerdo rosado.|g=m
gallina|gallina|galˈlina|S|ani|2|La gallina fa le uova.|La gallina pone los huevos.|g=f;p=galline
gallo|gallo|ˈɡallo|S|ani|2|Il gallo canta all'alba.|El gallo canta al amanecer.|g=m;p=galli
anatra|pato|aˈnutra|S|ani|2|Un'anatra nello stagno.|Un pato en el estanque.|g=f;p=anatre
oca|ganso|ˈɔka|S|ani|3|Le oche volano a sud.|Los gansos vuelan al sur.|g=f;p=oche
tacchino|pavo|takˈkino|S|ani|2|Il tacchino ripieno.|El pavo relleno.|g=m;p=tacchini
aquila|águila|aˈkwila|S|ani|2|L'aquila vola alto.|El águila vuela alto.|g=f;p=aquile
gufo|búho|ˈɡufo|S|ani|3|Il gufo è notturno.|El búho es nocturno.|g=m;p=gufi
rondine|golondrina|ronˈdine|S|ani|4|Le rondini annunciano la primavera.|Las golondrinas anuncian la primavera.|g=f;p=rondini
pinguino|pingüino|pinˈɡwino|S|ani|3|Il pinguino scivola sul ghiaccio.|El pingüino se desliza en el hielo.|g=m;p=pinguini
ape|abeja|ˈape|S|ani|3|Le api producono il miele.|Las abejas producen la miel.|g=f;p=api
zanzara|zancudo|dzanˈtsara|S|ani|3|Una zanzara mi ha punto.|Un zancudo me picó.|g=f;p=zanzare
formica|hormiga|forˈmika|S|ani|3|Le formiche lavorano insieme.|Las hormigas trabajan juntas.|g=f;p=formiche
ragno|araña|ˈraɲɲo|S|ani|3|Il ragno tesse la ragnatela.|La araña teje su telaraña.|g=m;p=ragni
lumaca|caracol|luˈmaka|S|ani|3|La lumaca cammina lentamente.|El caracol camina lentamente.|g=f;p=lumache
granchio|cangrejo|ˈgrankjo|S|ani|3|Il granchio cammina di lato.|El cangrejo camina de lado.|g=m;p=granchi
polpo|pulpo|ˈpɔlpo|S|ani|3|Il polpo ha otto tentacoli.|El pulpo tiene ocho tentáculos.|g=m;p=polpi
squalo|tiburón|ˈskvalo|S|ani|3|Lo squalo bianco.|El tiburón blanco.|g=m;p=squali
balena|ballena|baˈlena|S|ani|3|La balena nuota nell'oceano.|La ballena nada en el océano.|g=f;p=balene
pastore|pastor (de ovejas)|paˈstore|S|ani|3|Il pastore porta le pecore al monte.|El pastor lleva las ovejas al cerro.|g=m;p=pastori

# ══ colori (ampliación) ══
arancione|anaranjado|aranˈtʃone|A|col|1|Il tramonto è arancione.|El atardecer es anaranjado.|n=Invariable: una maglia arancione
viola|morado|ˈvjɔla|A|col|1|I fiori viola.|Las flores moradas.|n=Invariable
marrone|marrón|marˈrone|A|col|1|Un orso marrone.|Un oso marrón.|n=Invariable
azzurro|celeste|addzˈurro|A|col|1|Il mare azzurro.|El mar celeste.|n=En Italia: il maglione azzurro = la selección nacional
celeste|azul claro|tʃeˈlɛste|A|col|2|Una gonna celeste.|Una falda azul claro.|n=Como en Argentina: la camiseta celeste
beige|beige|bɛɪʒ|A|col|3|Un cappotto beige.|Un abrigo beige.|n=Extranjerismo, invariable
dorato|dorado|doˈrato|A|col|3|Un anello dorato.|Un anillo dorado.

# ══ natura (ampliación) ══
foglia|hoja|ˈfoʎʎa|S|nat|1|In autunno cadono le foglie.|En otoño caen las hojas.|g=f;p=foglie
erba|pasto (césped)|ˈerba|S|nat|1|L'erba è bagnata.|El pasto está mojado.|g=f
bosco|bosque|ˈbɔsko|S|nat|1|Passeggio nel bosco.|Paseo en el bosque.|g=m;p=boschi
fiume|río|ˈfjume|S|nat|1|Il fiume Po è lungo.|El río Po es largo.|g=m;p=fiumi
lago|lago|ˈlaɡo|S|nat|1|Il lago di Como.|El lago de Como.|g=m;p=laghi
collina|colina|kolˈlina|S|nat|2|Una collina verde.|Una colina verde.|g=f;p=colline
isola|isla|ˈiola|S|nat|1|La Sicilia è un'isola.|Sicilia es una isla.|g=f;p=isole
deserto|desierto|deˈzɛrto|S|nat|2|Il deserto del Sahara.|El desierto del Sahara.|g=m;p=deserti
spiaggia|playa|spjadˈdʒa|S|vig|1|Vado in spiaggia domani.|Voy a la playa mañana.|g=f;p=spiagge;c=asciugamano da spiaggia
sabbia|arena|ˈsabbja|S|nat|2|La sabbia bianca dei tropici.|La arena blanca de los trópicos.|g=f
onda|ola|ˈonda|S|nat|2|Le onde del mare.|Las olas del mar.|g=f;p=onde
cielo|cielo|ˈtʃɛlo|S|nat|1|Il cielo è sereno.|El cielo está sereno.|g=m;p=cieli
terra|tierra|ˈtɛrra|S|nat|1|La terra è fertile.|La tierra es fértil.|g=f;n=También "planeta Tierra"
pietra|piedra|ˈpjɛtra|S|nat|2|Una pietra nel giardino.|Una piedra en el jardín.|g=f;p=pietre
roccia|roca|rɔtˈtʃa|S|nat|3|Una roccia enorme.|Una roca enorme.|g=f;p=rocce
nuvola|nube|ˈnuvola|S|cli|1|Le nuvole bianche.|Las nubes blancas.|g=f;p=nuvole
ghiaccio|hielo|ˈdʒattʃo|S|nat|2|Il ghiaccio si scioglie al sole.|El hielo se derrite al sol.|g=m;p=ghiacci
gelo|helada|ˈdʒelo|S|cli|3|Stanotte c'è stato il gelo.|Anoche hubo helada.|g=m
tuono|trueno|ˈtwɔno|S|cli|2|Il tuono fa paura al cane.|El trueno asusta al perro.|g=m;p=tuoni
lampo|relámpago|ˈlampo|S|cli|2|Un lampo nel cielo.|Un relámpago en el cielo.|g=m;p=lampi
arcobaleno|arcoíris|arkobaˈlɛno|S|cli|2|Dopo la pioggia, l'arcobaleno.|Después de la lluvia, el arcoíris.|g=m;p=arcobaleni
alba|amanecer|ˈalba|S|tmp|2|Mi sveglio all'alba.|Me despierto al amanecer.|g=f
tramonto|atardecer|traˈmonto|S|tmp|2|Il tramonto sul mare.|El atardecer en el mar.|g=m;p=tramonti
nevicare|nevar|neviˈkare|V|cli|2|Domani nevicherà in montagna.|Mañana nevará en la montaña.
gelare|congelar|dʒeˈlare|V|cli|3|Stanotte gelerà.|Esta noche helará.
splendere|brillar|ˈsplɛndere|V|nat|3|Il sole splende.|El sol brilla.
`, "A1", "k-a1");
