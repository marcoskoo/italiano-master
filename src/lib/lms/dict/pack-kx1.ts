import { parsePack } from "./compact";
import type { VocabWord } from "../types";

/* ── Pack K·X1 · reposición concreta A2 (MCER A2) ──────────────────── */

export const PACK_KX1: VocabWord[] = parsePack(`
# ══ alimentación extra ══
pastasciutta|pasta seca|pastaʃʃutta|S|ali|4|Un piatto di pastasciutta al pomodoro.|Un plato de pasta seca al tomate.|g=f
minestra|sopa (de verduras)|miˈnɛstra|S|ali|3|La minestra calda della nonna.|La sopa caliente de la abuela.|g=f;p=minestre;n=Sopa de agua = zuppa
zuppa|sopa|ˈtsuppa|S|ali|2|Una zuppa di pesce marchigiana.|Una sopa de pescado marchigiana.|g=f;p=zuppe
brodo|caldo|ˈbrɔdo|S|ali|3|Il brodo di cappelletti.|El caldo de cappelletti.|g=m;n=Brodo anche = caldo di carne
bollito|hervido|bolˈlito|S|ali|4|Il bollito misto con le salse.|El hervido mixto con salsas.|g=m
grigliata|parrillada|ɡriʎˈʎata|S|ali|3|Una grigliata di carne tra amici.|Una parrillada de carne entre amigos.|g=f
fritto|frito|fritto|S|ali|3|Il fritto misto alla veneziana.|El frito mixto a la veneciana.|g=m;p=fritti
frittata|tortilla|fritˈtata|S|ali|2|Una frittata di zucchine.|Una tortilla de zucchini.|g=f;p=frittate;n=Expr.: qualunque frittata! = ¡qué desastre!
uovo al tegamino|huevo frito|wɔvo al teɡaˈmino|L|ali|3|Due uova al tegamino a colazione.|Dos huevos fritos en el desayuno.
toast|tostado|tɔst|S|ali|3|Un toast con prosciutto e formaggio.|Un sándwich mixto tostado.|g=m;n=Anglicismo, invariable
tramezzino|sándwich|tramedˈdzino|S|ali|3|Un tramezzino al tonno.|Un sándwich de atún.|g=m;p=tramezzini;n=Típico del bar italiano
panino|pan (sándwich)|paˈnino|S|ali|1|Un panino con la mortadella.|Un pan con mortadela.|g=m;p=panini;n=¡Ojo! un panino = un sándwich; panini NO es plato
crostino|canapé|krosˈtino|S|ali|4|I crostini toscani col fegatini.|Los canapés toscanos con hígado.|g=m;p=crostini
affettato|fiambres|affetˈtato|S|ali|4|Un affettato misto da antipasto.|Un mix de fiambres de entrada.|g=m;p=affettati
mortadella|mortadela|mortaˈdɛlla|S|ali|2|La mortadella di Bologna IGP.|La mortadela de Bolonia IGP.|g=f
bresaola|bresaola|bresaˈɔla|S|ali|4|La bresaola della Valtellina.|La bresaola de la Valtellina.|g=f;n=Lombardia; carne seca
speck|speck|ʃpɛk|S|ali|4|Lo speck altoatesino col formaggio.|El speck del alto Adige con queso.|g=m;n=Invariable; Alto Adige
culatello|culatello|kulaˈtɛllo|S|ali|5|Il culatello di Zibello.|El culatello de Zibello.|g=m;p=culatelli;n=Emilia, pregiato
guanciale|carrillera (tocino)|ɡwanˈtʃjale|S|ali|4|Il guanciale per la carbonara.|La carrillera curada para la carbonara.|g=m;n=Lazio; base della carbonara
pancetta|panceta|panˈtʃetta|S|ali|3|La pancetta croccante sugli spaghetti.|La panceta crocante en los espaguetis.|g=f
cotechino|cotechino|koteˈkino|S|ali|5|Il cotechino con le lenticchie.|El cotechino con lentejas.|g=m;p=cotechini;n=Emilia; capodanno
zampone|pata rellena|dzamˈpone|S|ali|5|Lo zampone di Modena.|La pata rellena de Módena.|g=m;p=zamponi;n=Emilia
cipollina|cebrita|tʃipolˈlina|S|ali|4|Le cipolline in agrodolce.|Las cebritas agridulces.|g=f;p=cipolline
sottaceto|encurtido|sottaˈtʃeto|S|ali|4|I sottaceti con l'affettato.|Los encurtidos con fiambres.|g=m;n=Siempre plural
sciroppo|jarabe|ʃiˈrɔppo|S|ali|3|Lo sciroppo d'acero sui pancake.|El jarabe de arce sobre los panqueques.|g=m;p=sciroppi
gassosa|gaseosa|ɡasˈsoza|S|ali|4|Una gassosa al limone.|Una gaseosa de limón.|g=f;p=gassose
aranciata|naranjada|aranˈtʃata|S|ali|3|Un'aranciata amara col ghiaccio.|Una naranjada amarga con hielo.|g=f;p=aranciate
spremuta|jugo recién exprimido|spreˈmuta|S|ali|3|Una spremuta d'arancia fresca.|Un jugo de naranja recién exprimido.|g=f;p=spremute
bibita|bebida|biˈbita|S|ali|3|Le bibite fresche del chiosco.|Las bebidas frías del kiosco.|g=f;p=bibite
grappa|grappa|ˈɡrappa|S|ali|4|Una grappa veneta a fine pasto.|Una grappa veneciana al final.|g=f;n=Invariable
prosecco|prosecco|proˈsekko|S|ali|2|Un calice di prosecco all'aperitivo.|Una copa de prosecco en el aperitivo.|g=m;p=prosecco;n=Invariable; Veneto
spritz|spritz|sprints|S|ali|3|Uno spritz al bitter in piazza.|Un spritz al bitter en la plaza.|g=m;n=Invariable; aperitivo veneto
negroni|negroni|neɡˈɡroni|S|ali|4|Un negroni ben mescolato.|Un negroni bien batido.|g=m;n=Invariable; firenze
campari|campari|kamˈpari|S|ali|4|Campari e aranciata, il cocktail milanese.|Campari con naranjada, el cóctel milanés.|g=m
apericena|apericena|aperiˈtʃena|S|ali|4|L'apericena del giovedì in centro.|El apericena del jueves en el centro.|g=m;n=Neologismo italiano: aperitivo + cena
aperitivo|aperitivo|aperiˈtivo|S|ali|2|L'aperitivo delle sette col tagliere.|El aperitivo de las siete con tabla.|g=m;p=aperitivi
ghiacciolo|polo de hielo|ɡjatˈtʃɔlo|S|ali|4|Un ghiacciolo al limone d'estate.|Un polo de limón en verano.|g=m;p=ghiaccioli
caramella|caramelo|karaˈmɛlla|S|ali|2|Una caramella alla menta.|Una caramela de menta.|g=f;p=caramelle
torrone|turrón|torˈrone|S|ali|4|Il torrone di Cremona natalizio.|El turrón de Cremona navideño.|g=m;p=torroni
confetto|confite (dragea)|konˈfɛtto|S|ali|5|I confetti di matrimonio.|Los confites de boda.|g=m;p=confetti;n=¡No confundir! confetti italianos = almendras azucaradas
gianduia|gianduia|dʒanˈduja|S|ali|4|Il cioccolato gianduia torinese.|El chocolate gianduia turinés.|g=f;n=Torino; nocciola + cacao
nocciola|avellana|nottʃˈtʃɔla|S|ali|3|La crema alle nocciole piemontese.|La crema de avellanas piamontesa.|g=f;p=nocciole
mandorla|almendra|manˈdolla|S|ali|3|Le mandorle di Avola siciliane.|Las almendras de Avola sicilianas.|g=f;p=mandorle
pistacchio|pistacho|pisˈtakkjo|S|ali|3|Il pistacchio di Bronte DOP.|El pistacho de Bronte DOP.|g=m;p=pistacchi
pinolo|piñón|piˈnɔlo|S|ali|4|I pinoli nel pesto genovese.|Los piñones en el pesto genovés.|g=m;p=pinoli
uvetta|pasas|uˈvetta|S|ali|4|L'uvetta sultanina nel dolce.|Las pasas sultanas en el dulce.|g=f;n=Siempre singular
mela renetta|manzana reineta|mela reˈnetta|L|ali|5|Le mele renette per la torta.|Las manzanas reineta para la torta.
cachi|caqui|kaki|S|ali|4|I cachi maturi di novembre.|Los caquis maduros de noviembre.|g=m;n=Siempre plural
fichi d'india|higos tunas|fiki di ˈindja|L|ali|4|I fichi d'india siciliani.|Las tunas sicilianas.|n=Sicilia; si pelano con cura
melagrana|granada|melaɡrana|S|ali|4|La melagrana nel cesto.|La granada en la canasta.|g=f;p=melagrane
frutta seca|frutos secos|frutta ˈseka|L|ali|3|La frutta seca mista a Natale.|Los frutos secos mixtos en Navidad.
castagna|castaña|kasˈtaɲɲa|S|ali|3|Le castagne arrosto sul fuoco.|Las castañas asadas al fuego.|g=f;p=castagne;c=caldarroste
caldarroste|castañas asadas|kaldaˈrɔste|S|ali|5|Le caldarroste del venditore.|Las castañas asadas del vendedor.|g=f;p=caldarroste

# ══ verbi quotidiani extra ══
annusare|oler (husmear)|annuˈzare|V|cor|4|Il cane annusa il sacchetto.|El perro husmea la bolsa.
assaporare|saborear|assapoˈrare|V|ali|3|Assaporo il primo caffè del giorno.|Saboreo el primer café del día.|s=gustare
gustare|deleitarse con|ɡuˈstare|V|ali|3|Gustati la cena con calma.|Disfruta la cena con calma.
sorseggiare|sorber|sorzedˈdʒare|V|ali|4|Sorseggio il tè alla menta.|Sorbo el té de menta.
trangugiare|engullir|tranɡuˈdʒare|V|ali|5|Trangugiò la pasta in un minuto.|Engulló la pasta en un minuto.|r=inf
ruttare|eructar|rutˈtare|V|cor|5|Il bimbo ha ruttato, che pace!|El bebé eructó, ¡qué paz!|r=inf
sbadigliare|bostezar|zbadiʎˈʎare|V|cor|3|Sbadiglio per tutto il primo tempo.|Bostezo todo el primer tiempo.
grattare|rascar|ɡrattare|V|cor|4|Il gatto gratta la porta.|El gato rasca la puerta.|c=grattarsi la testa
solleticare|hacer cosquillas|solletiˈkare|V|cor|4|Solletico i piedi al bimbo.|Hago cosquillas en los pies al niño.
accarezzare|acariciar|akkaretˈtsare|V|rel|3|Accarezza il cane con dolcezza.|Acaricia al perro con dulzura.
pizzicare|pellizcar|pitˈtsikare|V|cor|4|Mi ha pizzicato il braccio.|Me pellizcó el brazo.|c=pizzicare qualcuno
graffiare|arañar|ɡrafˈfjare|V|cor|4|Il gatto mi ha graffiato.|El gato me arañó.
baciare|besar|baˈtʃjare|V|rel|1|Bacia la mamma prima di uscire.|Besa a la mamá antes de salir.|c=baciare sulla guancia
abbracciare|abrazar|abbratˈtʃjare|V|rel|1|Abbraccia forte i nonni.|Abraza fuerte a los abuelos.
bisticciare|discutir (pelearse)|bistiˈtʃjare|V|rel|5|I fratelli bisticciano sempre.|Los hermanos discuten siempre.|r=inf
fare pace|hacer las paces|fare ˈpatʃe|L|rel|3|Dopo il bisticcio, hanno fatto pace.|Tras la pelea, hicieron las paces.
cullare|mecer|kulˈlare|V|fam|4|La mamma culla il neonato.|La mamá mece al recién nacido.
coccolare|mimar|kokˈkɔllare|V|fam|3|Coccola il gattino nuovo.|Mima al gatito nuevo.|r=inf
viziare|mimar (consentir)|viˈtsjare|V|fam|3|I nonni viziano i nipoti.|Los abuelos consienten a los nietos.|c=vizietto
sgridare|regañar|zɡriˈdare|V|fam|4|Il papà sgrida il monello.|El papá regaña al travieso.|r=inf
punire|castigar|puˈnire|V|fam|3|Punito senza gelato.|Castigado sin helado.|n=Io punisco (tipo -isc)
premiare|premiar|preˈmjare|V|fam|3|Premiano la classe più brava.|Premian a la clase más aplicada.
ubbidire|obedecer|ubbiˈdire|V|fam|3|Il cane ubbidisce sempre.|El perro obedece siempre.|n=Io ubbidisco (tipo -isc);c=ubbidire a
disobbedire|desobedecer|dizobbiˈdire|V|fam|4|Disobbedisce alle regole della casa.|Desobedece las reglas de la casa.
comandare|mandar (ordenar)|kommanˈdare|V|fam|3|Chi comanda qui?|¿Quién manda aquí?
bisbigliare|susurrar|bizbiʎˈʎare|V|cmu|4|Bisbigliano durante il film.|Susurran durante la película.|s=sussurrare
sussurrare|susurrar|sussurˈrare|V|cmu|4|Mi sussurra un segreto.|Me susurra un secreto.
gridare|gritar|ɡriˈdare|V|cmu|2|Grida dal balcone alla piazza.|Grita del balcón a la plaza.|s=urlare
urlare|gritar (aullar)|urˈlare|V|cmu|3|Urla di gioia sulle montagne russe.|Grita de alegría en la montaña rusa.
sospirare|suspirar|sospiˈrare|V|emo|4|Sospira guardando il mare.|Suspira mirando el mar.
singhiozzare|sollozar|siŋɡɡwotˈtsare|V|emo|5|Singhiozza dal ridere.|Solloza de la risa.
ridacchiare|reír por lo bajo|ridakˈkjare|V|emo|5|Ridacchia coprendosi la bocca.|Reír por lo bajo tapándose la boca.
sghignazzare|carcajear|zɡiɲɲatˈtsare|V|emo|5|Sghignazzano alle mie spalle.|Carcajean a mis espaldas.|r=inf
scoppiare a ridere|estallar en risa|skoˈppjareaˈridere|L|emo|3|Siamo scoppiati a ridere.|Estallamos en risa.
fare il broncio|hacer pucheros|fare il ˈbrontʃo|L|emo|4|Il bimbo fa il broncio per il gelato.|El niño hace pucheros por el helado.
imbronciato|enojón (con pucheros)|imbronˈtʃato|A|emo|4|Un bimbo imbronciato in un angolo.|Un niño con pucheros en la esquina.

# ══ città e trasporti extra ══
strada statale|carretera estatal|strada staˈtale|L|tra|4|La statale 106 lungo il mare.|La estatal 106 a lo largo del mar.
tangenziale|vía orbital|tendʒenˈtsjale|S|tra|4|La tangenziale di Bologna intasata.|La orbital de Bolonia congestionada.|g=f;n=Anche agg.: strada tangenziale
sottopasso|paso subterráneo|sottoˈpasso|S|cit|4|Il sottopasso della stazione.|El paso subterráneo de la estación.|g=m;p=sottopassi
sovrappasso|paso elevado|sovrappaˈso|S|cit|5|Il sovrappasso pedonale.|El paso elevado peatonal.|g=m;p=sovrappassi
cavalcavia|puente elevado|kalkoˈvjaja|S|cit|4|Il cavalcavia dell'autostrada.|El puente elevado de la autopista.|g=m;p=cavalcavia;n=Invariable
marciapiede|acera|martʃaˈpjɛde|S|cit|2|Cammina sul marciapiede!|¡Camina por la acera!|g=m;p=marciapiedi
banchina|andén (banquina)|banˈkina|S|tra|4|Aspetta in banchina il treno.|Espera en el andén el tren.|g=f;p=banchine
regionale|tren regional|redʒoˈnale|S|tra|3|Il regionale per Verona parte al 4.|El regional a Verona parte en el 4.|g=m;p=regionali
alta velocità|alta velocidad|alta velotʃitta|S|tra|4|L'alta velocità Torino-Salerno.|La alta velocidad Turín-Salermo.|g=f;n=Frecciarossa, Italo
frecciarossa|flecha roja|frettʃaroˈssa|S|tra|4|La Frecciarossa arriva al binario 8.|La Frecciarossa llega al andén 8.|g=f;n=Marca del treno veloce italiano
convalidare|validar|konvaliˈdare|V|tra|3|Convalida il biglietto prima di salire.|Valida el boleto antes de subir.
obliteratrice|validadora|obliteraˈtritʃe|S|tra|5|La obliteratrice all'ingresso.|La validadora en la entrada.|g=f;r=tec
controllore|revisor|kontrolˈlore|S|pro|3|Il controllore chiede i biglietti.|El revisor pide los boletos.|g=m;p=controllori
carrozza|vagón|karˈrɔttsa|S|tra|4|La carrozza ristorante del treno.|El vagón restaurante del tren.|g=f;p=carrozze
posteggio|aparcamiento|posˈteddʒo|S|tra|4|Il posteggio dei taxi in piazza.|El aparcamiento de taxis en la plaza.|g=m;p=posteggi
raccordo anulare|anillo orbital|rakˈkordo anuˈlare|L|tra|5|Il Grande Raccordo Anulare di Roma.|El Grande Raccordo Anulare de Roma.|n=Il GRA, autostrada circolare di Roma
porto|puerto|ˈpɔrto|S|tra|2|Il porto vecchio di Genova.|El puerto viejo de Génova.|g=m;p=porti
molo|muelle|ˈmɔlo|S|tra|4|Il molo dei traghetti.|El muelle de los transbordadores.|g=m;p=moli
veliero|velero|veˈljɛro|S|tra|5|Un veliero bianco all'orizzonte.|Un velero blanco en el horizonte.|g=m;p=velieri
barca a vela|velero|barka a ˈvela|L|tra|4|Una barca a vela nel golfo.|Un velero en el golfo.
gomma|llanta (goma)|ˈɡɔmma|S|tra|3|Una gomma a terra sull'autostrada.|Una llanta ponchada en la autopista.|g=f;p=gomme;c=gomma da masticare
pneumatico|neumático|pneuˈmatiko|S|tra|4|Gli pneumatici da neve obbligatori.|Los neumáticos de nieve obligatorios.|g=m;p=pneumatici
ruota di scorta|rueda de repuesto|ruɔta di skorta|L|tra|4|La ruota di scorta nel bagagliaio.|La rueda de repuesto en la maletera.
bagagliaio|maletera|baɡaʎˈʎajo|S|tra|3|Le valigie nel bagagliaio.|Las maletas en la maletera.|g=m;p=bagagliai
fari|faros|fari|S|tra|3|Accendi i fari nella galleria.|Enciende los faros en el túnel.|g=m;n=Siempre plural
freno|freno|ˈfreno|S|tra|3|Il freno a mano tirato.|El freno de mano echado.|g=m;p=freni;c=frenare
accelerare|acelerar|attʃeleˈrare|V|tra|3|Accelera in rettilineo.|Acelera en la recta.|a=frenare
retromarcia|marcha atrás|retroˈmartʃa|S|tra|4|Metti la retromarcia piano.|Pon la marcha atrás despacio.|g=f;c=dare una botta in retromarcia
clacson|claxon|klakˈson|S|tra|4|Suona il clacson impaziente.|Toca el claxon impaciente.|g=m;n=Invariable
targa|placa|tarɡa|S|tra|3|La targa dell'auto sbiadita.|La placa del carro borrosa.|g=f;p=targhe
guida|conducción (guía)|ɡwida|S|tra|3|La guida prudente del padre.|La conducción prudente del padre.|g=f;c=patente di guida
corsia|carril|korˈsia|S|tra|3|La corsia d'emergenza chiusa.|El carril de emergencia cerrado.|g=f;p=corsie;c=corsia preferenziale
sorpasso|adelantamiento|sorˈpasso|S|tra|4|Un sorpasso azzardato in curva.|Un adelantamiento arriesgado en curva.|g=m;p=sorpassi
`, "A2", "k-x1");
