import { parsePack } from "./compact";
import type { VocabWord } from "../types";

/* ── Pack K·X7 · materiales, formas y objetos (A2→B2) ──────────────── */

export const PACK_KX7: VocabWord[] = parsePack(`
# ══ materiali ══
legno|madera|leɲɲo|S|nat|3|Un tavolo di legno massello.|Una mesa de madera maciza.|g=m;n=Di legno anche = de madera (adj. invariable)
metallo|metal|meˈtallo|S|tec|3|Una scala di metallo leggero.|Una escalera de metal ligero.|g=m;p=metalli
ferro|hierro|fɛrro|S|tec|3|Un cancello di ferro battuto.|Una reja de hierro forjado.|g=m;c=ferro da stiro
acciaio|acero|attʃajo|S|tec|4|Un orologio in acciaio inox.|Un reloj de acero inoxidable.|g=m;n=Invariable
alluminio|aluminio|alluˈminio|S|tec|4|Una lattina di alluminio.|Una lata de aluminio.|g=m
rame|cobre|rame|S|tec|5|Un pentolino di rame stagnato.|Una ollita de cobre estañado.|g=m
ottone|latón|otˈtone|S|tec|5|Un pomello d'ottone lucido.|Un pomo de latón pulido.|g=m;p=ottoni
bronzo|bronce|brondzo|S|art|5|Una statua di bronzo etrusca.|Una estatua de bronce etrusca.|g=m;n=Invariable
argento|plata|arˈdʒɛnto|S|fin|3|Una catenina d'argento 925.|Una cadenita de plata 925.|g=m;n=Invariable
oro|oro|oro|S|fin|3|La fede d'oro al dito.|La alianza de oro en el dedo.|g=m;n=Invariable
piombo|plomo|pjombo|S|tec|5|Un peso di piombo in tasca.|Un peso de plomo en el bolsillo.|g=m
mercurio|mercurio|merˈkurjo|S|sci|5|Il mercurio del termometro rotto.|El mercurio del termómetro roto.|g=m;n=Invariable
plastica|plástico|plaˈstika|S|tec|3|La plastica riciclata dei flaconi.|El plástico reciclado de los envases.|g=f;p=plastiche
silicone|silicona|siliˈkone|S|tec|5|Il silicone per il bagno.|La silicona para el baño.|g=m;n=Invariable
vetro|vidrio|vetro|S|tec|3|Un bicchiere di vetro soffiato.|Un vaso de vidrio soplado.|g=m;n=Invariable;c=vetro temperato
cristallo|cristal|kriˈstallo|S|tec|4|Un calice di cristallo di Boemia.|Una copa de cristal de Bohemia.|g=m;p=cristalli
porcellana|porcelana|portʃelˈlana|S|cas|4|Un servizio di porcellana finissima.|Un juego de vajilla de porcelana finísima.|g=f;p=porcellane
ceramica|cerámica|tʃeraˈmika|S|art|4|La ceramica di Vietri sul mare.|La cerámica de Vietri sul mare.|g=f;p=ceramiche
terracotta|terracota|terrakɔtta|S|art|4|Un vaso di terracotta toscana.|Una maceta de terracota toscana.|g=f;n=Invariable
cartone|cartón|karˈtone|S|tec|3|Uno scatolone di cartone ondulato.|Una caja de cartón corrugado.|g=m;p=cartoni
carta|papel|karta|S|tec|2|Un foglio di carta riciclata.|Una hoja de papel reciclado.|g=f;p=carte;c=carta d'identità
carta da pacco|papel de envolver|karta da ˈpakko|L|cmp|5|Due metri di carta da pacco.|Dos metros de papel de envolver.
tovagliolo di carta|servilleta de papel|tovaɲɲɔlo di karta|L|ris|4|I tovaglioli di carta sul tavolo.|Las servilletas de papel en la mesa.
fazzoletto|pañuelo|fattsoˈletto|S|rop|4|Un fazzoletto di lino ricamato.|Un pañuelo de lino bordado.|g=m;p=fazzoletti
lino|lino|lino|S|rop|4|Una camicia di lino estiva.|Una camisa de lino de verano.|g=m;n=Invariable
velluto|terciopelo|velˈluto|S|rop|4|Un divano di velluto verde.|Un sofá de terciopelo verde.|g=m;n=Invariable
raso|raso (tela)|raˈzo|S|rop|5|Un abito di raso blu notte.|Un vestido de raso azul noche.|g=m;n=Invariable
tweed|tweed|twid|S|rop|5|Una giacca di tweed scozzese.|Una chaqueta de tweed escocés.|g=m;n=Invariable
cashmere|cachemir|kaʃmɛr|S|rop|4|Un maglione di cashmere morbido.|Un suéter de cachemir suave.|g=m;n=Invariable
pelliccia|abrigo de piel|pelˈlittʃa|S|rop|4|Una pelliccia ecologica sintetica.|Un abrigo de piel ecológico sintético.|g=f;p=pellicce
eco-pelle|ecocuero|ekopɛlle|S|rop|5|Una cintura in eco-pelle.|Un cinturón de ecocuero.|g=f;n=Invariable
camoscio|gamuza|kaˈmɔʃʃo|S|rop|5|Un portafoglio in camoscio.|Una billetera de gamuza.|g=m;p=camosci
denim|denim|dɛnim|S|rop|5|Una camicia in denim grezzo.|Una camisa de denim crudo.|g=m;n=Invariable
maglia di lana|suéter de lana|maʎʎa di ˈlana|L|rop|4|Una maglia di lana fatta a mano.|Un suéter de lana hecho a mano.

# ══ forme e dimensioni ══
quadrato|cuadrado|kwadraˈto|A|ast|3|Un tavolo quadrato di legno.|Una mesa cuadrada de madera.|n=Sustantivo: il quadrato
rotondo|redondo|rotondo|A|ast|3|Un piatto rotondo di ceramica.|Un plato redondo de cerámica.|n=Rosso tondo = redondo perfecto
ovale|oval|oˈvale|A|ast|4|Un tavolo ovale allungato.|Una mesa oval alargada.
triangolare|triangular|triaŋɡoˈlare|A|ast|5|Un segnale triangolare di pericolo.|Una señal triangular de peligro.
rettangolare|rectangular|rettanɡoˈlare|A|ast|5|Una piscina rettangolare olimpionica.|Una piscina rectangular olímpica.
sferico|esférico|sfɛriko|A|sci|5|Un contenitore sferico di vetro.|Un recipiente esférico de vidrio.
cilindrico|cilíndrico|tʃilindriko|A|sci|5|Un tubo cilindrico d'acciaio.|Un tubo cilíndrico de acero.
piramidale|piramidal|piramidale|A|art|5|Una copertura piramidale di vetro.|Una cubierta piramidal de vidrio.
curvo|curvo|kurvo|A|ast|5|Un soffitto curvo liberty.|Un techo curvo modernista.|a=dritto
dritto|recto (derecho)|dritto|A|ast|4|Vai sempre dritto al semaforo.|Sigue siempre recto hasta el semáforo.|a=curvo
storto|torcido|stɔrto|A|ast|4|Un quadro storto da raddrizzare.|Un cuadro torcido por enderezar.|a=dritto
piegato|doblado|pjeˈɡato|A|ast|4|Un foglio piegato in quattro.|Una hoja doblada en cuatro.
appuntito|puntiagudo|appuntiˈto|A|ast|5|Un coltello appuntito da cucina.|Un cuchillo puntiagudo de cocina.|a=smussato
smussato|despuntado|smusˈsato|A|ast|5|Gli angoli smussati del mobile.|Los bordes redondeados del mueble.
appiattito|aplastado|appjatˈtito|A|ast|5|Una scatola appiattita per lo spazio.|Una caja aplastada por el espacio.
gonfio|hinchado|ɡonfio|A|cor|4|Un piede gonfio dopo la camminata.|Un pie hinchado tras la caminata.|a=sgonfio
sgonfio|desinflado|zɡonfio|A|ast|5|Un materasso sgonfio da sistemare.|Un colchón desinflado por arreglar.
spazioso|espacioso|spattsjɔzo|A|cas|3|Un salotto spazioso e luminoso.|Una sala espaciosa y luminosa.|a=angusto
angusto|angosto|anɡusto|A|ast|5|Un vicolo angusto del centro.|Un callejón angosto del centro.|a=spazioso
smisurato|desmesurato|smizuˈrato|A|ast|5|Un giardino smisurato intorno alla villa.|Un jardín desmesurado alrededor de la villa.
minuscolo|diminuto|minuˈskolo|A|ast|4|Un bagno minuscolo ma funzionale.|Un baño diminuto pero funcional.|a=gigante
gigantesco|gigantesco|dʒiɡanˈtɛsko|A|ast|4|Un pallone gigantesco sul campo.|Un balón gigantesco en la cancha.
enorme|enorme|eˈnɔrme|A|ast|2|Una folla enorme sotto il palco.|Una multitud enorme bajo el escenario.
microscopico|microscópico|mikroskɔpiko|A|sci|5|Un dettaglio microscopico del dipinto.|Un detalle microscópico del cuadro.

# ══ oggetti della casa extra ══
attaccapanni|perchero|attakkapaɲɲi|S|cas|5|L'attaccapanni dell'ingresso.|El perchero del recibidor.|g=m;n=Invariable
appendiabiti|gancho para ropa|appendiabiti|S|cas|5|Un appendiabiti a muro in legno.|Un gancho para ropa de pared de madera.|g=m;n=Invariable
scarpiera|zapatero|ʃʃarpiɛra|S|cas|5|La scarpiera piena di scarpe da ginnastica.|El zapatero lleno de zapatillas.|g=f;p=scarpieri
porta ombrelli|paragüero|pɔrta omˈbrɛlli|L|cas|5|Il porta ombrelli all'ingresso bagnato.|El paragüero del recibidor mojado.
stendino|tendero|stenˈdino|S|cas|5|Lo stendino pieghevole sul balcone.|El tendero plegable en el balcón.|g=m;p=stendini
ferro da stiro|plancha|fɛrro da stiˈro|L|cas|4|Il ferro da stiro a vapore.|La plancha a vapor.
asse da stiro|tabla de planchar|asse da stiˈro|L|cas|5|L'asse da stiro in cameretta.|La tabla de planchar en la habitación.
mocio|trapeador|mɔtʃo|S|cas|5|Il mocio con il secchio strizzatore.|El trapeador con el balde escurridor.|g=m;n=Invariable;r=inf
straccio|trapo|strattʃo|S|cas|4|Uno straccio per la polvere pulito.|Un trapo para el polvo limpio.|g=m;p=stracci
paletta della spazzatura|pala de basura|paletta della spattsatura|L|cas|5|La paletta con la scopa piccola.|La pala con la escoba pequeña.
bidone|tacho de basura|biˈdone|S|cas|3|Il bidone della differenziata in strada.|El tacho de la diferenciada en la calle.|g=m;p=bidoni
 pattumiera|tacho de basura|pattumiɛra|S|cas|4|La pattumiera della cucina è piena.|El tacho de la cocina lleno.|g=f;p=pattumiere
portacenere|cenicero|portatʃeˈnɛːre|S|cas|5|Un portacenere di cristallo sul tavolo.|Un cenicero de cristal en la mesa.|g=m;n=Invariable
posate|cubiertos|poˈzate|S|ris|4|Le posate d'argento del servizio buono.|Los cubiertos de plata del juego bueno.|g=f;n=Siempre plural
sottovaso|platito… plato de maceta|sottoˈvazo|S|nat|5|Un sottovaso di ceramica smaltata.|Un plato de maceta de cerámica esmaltada.|g=m;p=sottovasi
innaffiatoio|regadera|innaffjatˈtoːjo|S|nat|5|L'innaffiatoio di latta sul balcone.|La regadera de lata en el balcón.|g=m;p=innaffiatoi
concime|fertilizante|konˈtʃime|S|nat|5|Il concime granulare per le rose.|El fertilizante granulado para las rosas.|g=m;n=Invariable
insetticida|insecticida|insettitʃida|S|nat|5|L'insetticida spray per le zanzare.|El insecticida spray para los zancudos.|g=m;n=Invariable
trappola per topi|ratonera|trappla per ˈtopi|L|cas|5|Una trappola per topi in cantina.|Una ratonera en el sótano.
zanzariera|mosquitero|dzantsariɛra|S|cas|4|La zanzariera della finestra rotta.|El mosquitero de la ventana roto.|g=f;p=zanzariere
tapparella|persiana enrollable|tapparelˈla|S|cas|4|La tapparella elettrica della camera.|La persiana eléctrica de la pieza.|g=f;p=tapparelle;n=Molto italiano
persiana|persiana|perˈsjana|S|cas|4|Le persiane verdi alla fiorentina.|Las persianas verdes a la florentina.|g=f;p=persiane
serratura|cerradura|serratura|S|cas|4|La serratura blindata a doppia mappa.|La cerradura blindada de doble paleta.|g=f;p=serrature
chiavistello|pestillo|kjaviˈstɛllo|S|cas|5|Il chiavistello della porta di servizio.|El pestillo de la puerta de servicio.|g=m;p=chiavistelli
spioncino|mirilla|spjonˈtʃino|S|cas|5|Guarda dallo spioncino prima di aprire.|Mira por la mirilla antes de abrir.|g=m;p=spioncini
campanello|timbre|kampanelˈlo|S|cas|3|Il campanello del citofono rotto.|El timbre del citófono roto.|g=m;p=campanelli
citofono|citófono|tʃitoˈfono|S|cas|4|Rispondi al citofono, è il corriere.|Responde el citófono, es el mensajero.|g=m;p=citofoni;n=Muy italiano
portineria|portería|portineˈria|S|cas|5|La portineria del palazzo storico.|La portería del edificio histórico.|g=f;p=portinerie
condominio|condominio|kondoˈminjo|S|cas|4|Il condominio di venti famiglie.|El condominio de veinte familias.|g=m;p=condomini
amministratore di condominio|administrador del edificio|amministratore di kondominio|L|cas|5|L'amministratore convoca l'assemblea.|El administrador convoca la asamblea.
assemblea di condominio|asamblea de copropietarios|assemˈblea di kondominio|L|cas|5|L'assemblea di condominio alle 19.|La asamblea de copropietarios a las 19.
ascensore|ascensor|atʃenˈsoːre|S|cas|3|L'ascensore fermo tra i piani.|El ascensor detenido entre pisos.|g=m;p=ascensori
riscaldamento|calefacción|riskalˈdamento|S|cas|4|Il riscaldamento centralizzato del palazzo.|La calefacción centralizada del edificio.|g=m
caldaia|caldera|kaldaja|S|cas|4|La caldaia a condensazione nuova.|La caldera de condensación nueva.|g=f;p=caldaie
condizionatore|aire acondicionado|konditsjonaˈtore|S|cas|4|Il condizionatore del salotto.|El aire acondicionado de la sala.|g=m;p=condizionatori
ventilatore|ventilador|ventilaˈtore|S|cas|4|Un ventilatore a soffitto lento.|Un ventilador de techo lento.|g=m;p=ventilatori
termosifone|radiador|termosiˈfone|S|cas|5|Il termosifone che gocciola in camera.|El radiador que gotea en la pieza.|g=m;p=termosifoni
stufa|estufa|stuːfa|S|cas|4|Una stufa a legna in montagna.|Una estufa de leña en la montaña.|g=f;p=stufe
contatore|medidor|kontatoˈre|S|tec|4|Il contatore del gas da leggere.|El medidor del gas por leer.|g=m;p=contatori
interruttore|interruptor|inteˈruttore|S|tec|4|L'interruttore della luce dietro il divano.|El interruptor de la luz tras el sofá.|g=m;p=interruttori
presa|tomacorriente|preza|S|tec|4|Una presa di corrente libera.|Un tomacorriente libre.|g=f;p=presse;c=presa multipla
spina|enchufe|spina|S|tec|4|La spina del caricatore storta.|El enchufe del cargador torcido.|g=f;p=spine
cavo|cable|kavo|S|tec|3|Un cavo di ricarica troppo corto.|Un cable de carga muy corto.|g=m;p=cavi
torcia|linterna|tortʃa|S|tec|4|Una torcia tascabile nel cassetto.|Una linterna de bolsillo en el cajón.|g=f;p=torce
lampadina|ampolleta|lampadina|S|tec|4|La lampadina del salotto fulminata.|La ampolleta de la sala fundida.|g=f;p=lampadine;c=lampadina a led
plafoniera|cielorraso… lámpara de techo|plafoniɛra|S|cas|5|La plafoniera della cucina moderna.|La lámpara de techo de la cocina moderna.|g=f;p=plafoniere
abat-jour|velador|abadʒur|S|cas|5|Un abat-jour sul comodino.|Una velador sobre la mesita de noche.|g=m;n=Invariable
`, "A2", "k-x7");
