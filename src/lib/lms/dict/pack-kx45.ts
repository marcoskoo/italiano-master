import { parsePack } from "./compact";
import type { VocabWord } from "../types";

/* ── Pack K·X45 · regionalismi e dialettismi (C2) ──────────── */

export const PACK_KX45: VocabWord[] = parsePack(`
# ══ regionalismi di uso nazionale ══
mozzarellina|mozzarellita|mottst selˈliːna|S|ali|5|Le mozzarelline in carrozza per l'antipasto.|Las mozzarellitas rebozadas para el entrante.|g=f;p=mozzarelline;r=col
fiore di latte|mozzarella de leche de vaca|ˈfjoːre di ˈlatte|L|ali|4|La pizza con il fiore di latte.|La pizza con mozzarella de vaca.
stracciatella|stracciatella|strat tʃaˈtɛlla|S|ali|4|La stracciatella dentro la burrata.|La stracciatella dentro de la burrata.|g=f
nodino|nudito|noˈdiːno|S|ali|5|Due nodini di vitello alla griglia.|Dos nuditos de ternera a la parrilla.|g=m;p=nodini;r=col
punta di petto|punta de pecho|ˈpunta di ˈpetto|L|ali|5|La punta di petto bollita con le verdure.|La punta de pecho hervida con verduras.
noce (vitello)|nuez (ternera)|ˈnotʃe|S|ali|5|La noce di vitello arrosto.|La nuez de ternera asada.|g=f;p=noci;n=Taglio di carne: noce, girello, fesa
girello|redondo|dʒiˈrɛl lo|S|ali|5|Il girello di vitello in crosta.|El redondo de ternera en costra.|g=m;p=girelli;n=Regionalismo gastrico
fesa (vitello)|fiambre de pierna|ˈfeːza|S|ali|5|La fesa di tacchino al limone.|La pechuga de pavo al limón.|g=f
petto (vitello)|pecho|ˈpetto|S|ali|4|Il petto d'anatra all'arancia.|El pecho de pato a la naranja.|g=m;p=petti
soppressata|sopressata|soppressaˈta|S|ali|5|La soppressata calabrese piccante.|La sopressata calabresa picante.|g=f;p=soppressate;n=Regionalismo: soppressata vs soprassata
soprassata|sopressata (sarda)|soprasˈsaːta|S|ali|5|La soprassata sarda di maiale nero.|La sopressata sarda de cerdo negro.|g=f;p=soprassate
coppa (salume)|copa (embutido)|ˈkɔp pa|S|ali|5|La coppa piacentina stagionata.|La copa piacentina curada.|g=f;p=coppe
culaccia|culaccia|kuˈlat tʃa|S|ali|5|La culaccia: il cuore del culatello.|La culaccia: el corazón del culatello.|g=f
pancetta tesa|panceta plana|panˈtʃetta ˈteːza|L|ali|5|La pancetta tesa per il soffritto di carbonara.|La panceta plana para el soffritto de carbonara.
lardo di colonnata|lardo de Colonnata|ˈlardo di kolonˈnaːta|L|ali|5|Il lardo di colonnata sul pane caldo.|El lardo de Colonnata sobre pan caliente.
grissino rubatà|grissini rubatà|ɡrisˈsiːno rubaˈta|L|ali|5|Il grissino rubatà torinese.|El grissino rubatà turinés.
grissia|grissin|ɡrisˈsiːa|S|ali|5|Le grisse del mattino col cappuccino.|Los grissini de la mañana con capuchino.|g=f;p=grisse;r=col
schiacciata|schiacciata|skjatˈtʃaːta|S|ali|5|La schiacciata toscana con l'uva.|La schiacciata toscana con uva.|g=f;p=schiacciate
sfilatino|barra de pan|sfilaˈtiːno|S|ali|5|Uno sfilatino per la colazione di domani.|Una barra para el desayuno de mañana.|g=m;p=sfilatini;n=Romanesimo
rosetta|panecillo (rosetta)|roˈzɛtta|S|ali|5|Una rosetta vuota per la mortadella.|Un panecillo hueco para la mortadela.|g=f;p=rosette
ciriola|ciriola|tʃiˈrjoːla|S|ali|5|Le ciriola romane per le gite|Los panecillos romanos para excursiones|g=f;p=ciriola;n=Romanesimo
pane sciocco|pan sin sal|ˈpaːne ˈʃʃokko|L|ali|5|Il pane sciocco toscano|El pan sin sal toscano|n=Toscanismo: "sciocco" = senza sale
sciocco (senza sale)|sin sal|ˈʃʃokko|A|ali|5|Il pane sciocco non ha sale.|El pan sin sal no lleva sal.|n=Falso amigo parcial: sciocco = tonto o sin sal
acqua del rubinetto|agua del grifo|ˈakkwa del rubiˈnetto|L|ali|4|L'acqua del rubinetto di Roma è ottima.|El agua del grifo de Roma es óptima.
# ══ espressioni regionali ══
aho|eh, oye (romanés)|aˈo|I|cmu|5|«Aho, ma che stai a fa'?»|«Oye, ¿pero qué haces?»|r=col;n=Romanesimo
daje|¡dale! (romanés)|daˈje|I|cmu|5|«Daje, che ce la fai!»|«¡Dale, que puedes!»|r=col;n=Romanesimo
ammazza|caramba|amˈmattsa|I|cmu|4|«Ammazza che cena!»|«Caramba, qué cena»|r=col
boia de|caray (toscano)|ˈbɔja de|I|cmu|5|«Boia de, che freddo!»|«Caray, qué frío»|r=col;n=Toscanismo
de' (toscano)|vamos (toscano)|de|I|cmu|5|«De', non esagerare»|«Vamos, no exageres»|r=col;n=Toscanismo
moccioso|mocoso|motˈtʃoːzo|S|fam|4|Un moccioso impertinente al parco.|Un mocoso impertinente en el parque.|g=m;p=mocciosi;r=col
moccio|moco|ˈmɔt tʃo|S|cor|4|Il moccio del raffreddore infantile.|El moco del catarro infantil.|g=m;p=mocci;r=col
viziato|mimado|vitˈtsjaːto|A|fam|4|Un figlio unico viziato dai nonni.|Un hijo único mimado por los abuelos.
vezzeggiare|cariños|vedzzedˈdʒaːre|V|let|5|La madre vezzeggia il neonato.|La madre arrulla al recién nacido.|r=let
vezzo|gracia (capricho)|ˈvɛt tso|S|let|5|Il vezzo di arricciare i capelli.|La gracia de rizarse el pelo.|g=m;p=vezzi;r=let
snob|esnob|snɔb|S|ast|4|Uno snob del caffè solo in chicchi.|Un esnob del café solo en grano.|g=m;p=snob
radical chic|pijo progresista|radikal ˈʃʃik|A|ast|5|Il ristorante radical chic del centro.|El restaurante pijo progresista del centro.|n=Italianismo de moda
fare baldoria|hacer juerga|fare baldoˈria|E|sve|5|Sabato notte hanno fatto baldoria.|El sábado noche hicieron juerga.|r=col
baldoria|juerga|baldoˈria|S|sve|5|La baldoria del Capodanno in piazza.|La juerga de Año Nuevo en la plaza.|g=f;p=baldorie;r=col
bisboccia|parranda|bizˈbɔt tʃa|S|sve|5|Una bisboccia fino all'alba in osteria.|Una parranda hasta el alba en la tasca.|g=f;p=bisbocce;r=col
mensa (lavoro)|comedor (empresa)|ˈmensa|S|lav|3|La mensa aziendale del piano terra.|El comedor de empresa de la planta baja.|g=f;p=mense
mensa scolastica|comedor escolar|ˈmensa skoˈlastika|L|stu|4|La mensa scolastica del quartiere.|El comedor escolar del barrio.
buono pasto|vale comida|ˈbwɔno ˈpɑːsto|L|lav|4|Il buono pasto elettronico da 7 euro.|El vale comida electrónico de 7 euros.
# ══ toscanismi e romanismi lessicali ══
babbo|papá (toscano)|ˈbabbo|S|fam|4|Il babbo di Pinocchio: Geppetto.|El papá de Pinocho: Geppetto.|g=m;p=babbi;n=Toscanismo: "babbo" invece di "papà"
babbo natale|papá Noel|ˈbabbo nataˈle|L|fam|3|Babbo natale arriva dal caminetto.|Papá Noel llega por la chimenea.
bischero|tonto (florentino)|ˈbiskero|S|cmu|5|«Sei un bischero!» disse il nonno.|«Eres un tonto» dijo el abuelo.|g=m;p=bischeri;n=Fiorentinismo
imbranato|torpe|imbraˈnaːto|A|col|4|In cucina è imbranato totale.|En la cocina es un torpe total.|r=col
imbranata|pataleta (torpeza)|imbraˈnaːta|S|col|5|Che imbranata quella volta al ristorante.|Qué torpeza aquella vez en el restaurante.|g=f;r=col
sfigato|gafado|sfiˈɡaːto|S|col|4|Uno sfigato che perde sempre il treno.|Un gafado que siempre pierde el tren.|g=m;p=sfigati;r=col
sfiga|mala suerte|ˈsfiːɡa|S|col|4|Che sfiga col parcheggio!|¡Qué mala suerte con el aparcamiento!|g=f;r=col
kul atˈtʃiːno|rastro (de vaso)|kul atˈtʃiːno|S|cas|5|Il culaccino del bicchiere sul tavolo.|El rastro del vaso sobre la mesa.|g=m;p=culaccini;r=col
tombola|tombola|tomˈbɔːla|S|sve|4|La tombola di Natale col premio della pensione.|La tómbola de Navidad con el premio de la jubilación.|g=f
smorfia (napoletana)|smorfia (guía napoletana)|smorˈfia|S|sve|5|La smorfia per interpretare i sogni.|La smorfia para interpretar los sueños.|g=f
cabala|cábala|kaˈbaːla|S|sve|5|La cabala del lotto di Napoli.|La cábala del lotto de Nápoles.|g=f;p=cabale
lotto|lotería|lɔt to|S|fin|4|Il gioco del lotto di mercoledì.|El juego de la lotería del miércoles.|g=m
superenalotto|bonoloto|superenalɔt to|S|fin|4|Il superenalotto da 200 milioni.|La bonoloto de 200 millones.|g=m
totocalcio|quiniela|totoˈkaltʃo|S|spt|5|Il totocalcio della domenica pomeriggio.|La quiniela del domingo por la tarde.|g=m
schedina|boleto|skeˈdiːna|S|fin|4|La schedina compilata dal tabaccaio.|El boleto rellenado por el estanquero.|g=f;p=schedine
vincita|premio (ganancia)|vinˈtʃiːta|S|fin|3|La vincita da 500 mila euro della cartella.|El premio de 500 mil euros del cartón.|g=f;p=vincite
tabaccaio|estanquero|tabakˈkaːjo|S|pro|4|Il tabaccaio all'angolo vende i biglietti dell'autobus.|El estanquero de la esquina vende los billetes de autobús.|g=m;p=tabaccai
ricevitoria|casa de apuestas|ritʃeviˈtoːrja|S|fin|5|La ricevitoria ippica del quartiere.|La casa de apuestas hípica del barrio.|g=f;p=ricevitorie
ippica|hípica|ipˈpiːka|S|spt|5|L'ippica del palio di Siena.|La hípica del palio de Siena.|g=f
palio|palio|paˈljo|S|spt|4|Il palio di Siena del 2 luglio.|El palio de Siena del 2 de julio.|g=m;p=palii;n=Término específico
sbandieratore|abanderado|zbandjeraˈtoːre|S|sve|5|Gli sbandieratori di Arezzo.|Los abanderados de Arezzo.|g=m;p=sbandieratori
rione (palio)|contrada|rioːne|S|cit|4|Il rione della Selva al palio.|La contrada de la Selva en el palio.|g=m;p=rioni
contrada|contrada|konˈtraːda|S|cit|4|La contrada della Torre ha vinto.|La contrada de la Torre ha ganado.|g=f;p=contrade
`, "C2", "k-x45");
