import { parsePack } from "./compact";
import type { VocabWord } from "../types";

/* ── Pack K·X3 · reposición B2 (MCER B2) ───────────────────────────── */

export const PACK_KX3: VocabWord[] = parsePack(`
# ══ comunicazione e società ══
comunicato|comunicado|kommuˈnikato|S|cmu|4|Un comunicato stampa della questura.|Un comunicado de prensa de la comisaría.|g=m;p=comunicati
bollettino|boletín|bolletˈtino|S|cmu|4|Il bollettino delle nevi delle 8.|El boletín de nieve de las 8.|g=m;p=bollettini;c=bollettino meteo
retroscena|entre Bastidores|retroˈʃʃena|S|cmu|5|I retroscena della fusione.|Los entretelones de la fusión.|g=m;n=Invariable;r=col
sociologia|sociología|sotʃjoˈlodʒia|S|sci|5|La sociologia urbana di una vita.|La sociología urbana de una vida.|g=f
demografia|demografía|demoɡraˈfia|S|sci|5|La demografia in calo dell'Italia.|La demografía en baja de Italia.|g=f
calo|baja|kalo|S|ast|4|Il calo dei consumi preoccupa.|La baja del consumo preocupa.|g=m;p=cali;a=aumento
spopolamento|despoblamiento|spopolaˈmento|S|ist|5|Lo spopolamento dei borghi montani.|El despoblamiento de los pueblos de montaña.|g=m
sovrappopolamento|sobrepoblación|sovrapoppolaˈmento|S|ist|5|Il sovrappopolamento delle metropoli.|La sobrepoblación de las metrópolis.|g=m
metropoli|metrópolis|meˈtrɔpoli|S|cit|4|La metropoli milanese che corre.|La metrópoli milanesa que corre.|g=f;n=Invariable
periferia|periferia|periˈfɛria|S|cit|3|La periferia est di Roma.|La periferia este de Roma.|g=f;p=periferie;c=di periferia
quartiere|barrio|kwarˈtjɛre|S|cit|2|Un quartiere multietnico vivace.|Un barrio multiétnico vivaz.|g=m;p=quartieri
rione|distrito (barrio histórico)|rjone|S|cit|4|Il rione Monti di Roma.|El distrito Monti de Roma.|g=m;p=rioni;n=Muy romano/napoletano
borgo|pueblo (burgus)|bɔrɡo|S|cit|4|Un borgo medievale arroccato.|Un pueblo medieval encaramado.|g=m;p=borghi;c=i borghi più belli d'Italia
centro storico|centro histórico|tʃɛntro ˈstɔriko|L|cit|3|Il centro storico chiuso alle auto.|El centro histórico cerrado a los autos.
vicolo cieco|callejón sin salida|viˈkolo ˈtʃjeko|L|cit|4|Il vicolo cieco del cantiere.|El callejón sin salida de la obra.
traversa|transversal|traverza|S|cit|4|Una traversa di via Roma.|Una transversal de la vía Roma.|g=f;p=traverse
circonvallazione|circunvalación|tʃirkonvallatˈtsjone|S|cit|4|La circonvallazione intasata all'ora punta.|La circunvalación congestionada en hora pico.|g=f
ingorgo|embotellamiento|inɡɔrɡo|S|tra|4|Un ingorgo di cinque chilometri.|Un embotellamiento de cinco kilómetros.|g=m;p=ingorghi
coda|cola|kɔda|S|cit|2|Una coda chilometrica al casello.|Una cola kilométrica en el peaje.|g=f;p=code;c=fare la coda
casello|peaje (cabina)|kaˈsɛllo|S|tra|4|Il casello dell'autostrada A1.|La cabina del peaje de la A1.|g=m;p=caselli
limite di velocità|límite de velocidad|limite di veloˈtʃitta|L|tra|3|Il limite di velocità di 130.|El límite di velocidad de 130.
autovelox|radar (fotorregulador)|autoˈveloks|S|tra|5|Un autovelox mobile in tangenziale.|Un radar móvil en la orbital.|g=m;n=Muy italiano;r=col
patente a punti|licencia por puntos|paˈtɛnte a ˈpwɔnti|L|tra|4|Con la patente a punti ne ho persi tre.|Con la licencia por puntos perdí tres.
sospensione della patente|suspensión de licencia|sospensjone della paˈtɛnte|L|tra|5|La sospensione della patente per ubriachezza.|La suspensión por ebriedad.
guida in stato di ebbrezza|conducir en estado de ebriedad|ɡwida in ˈstato di ebbrɛttsa|L|tra|5|Arrestato per guida in stato di ebbrezza.|Arrestado por conducir ebrio.
pronto intervento|emergencia (servicio)|pronto interˈvɛnto|L|ist|4|Il pronto intervento elettrico 24 ore.|La emergencia eléctrica 24 horas.

# ══ astratti B2 extra ══
previsione|pronóstico|previdˈsjone|S|ast|3|Le previsioni meteo sbagliate.|Los pronósticos del clima errados.|g=f;p=previsioni
previsione del tempo|pronóstico del tiempo|previdˈsjone del tempo|L|cli|3|La previsione del tempo dice pioggia.|El pronóstico dice lluvia.
presupposto|presupuesto (supuesto)|presupˈpɔsto|S|ast|4|Il presupposto della ricerca.|El presupuesto de la investigación.|g=m;p=presupposti;n="Sobre la base de" = sulla base del presupposto
presunzione|presunción|presuntsjone|S|ast|4|La presunzione di innocenza.|La presunción de inocencia.|g=f;p=presunzioni
innocenza|inocencia|innɔˈtʃɛntsa|S|ist|4|La presunzione di innocenza sacra.|La presunción de inocencia sagrada.|g=f
colpevole|culpable|kolpeˈvole|S|ist|3|Il colpevole si costituisce.|El culpable se entrega.|g=m;p=colpevoli;a=innocente
colpevolezza|culpabilidad|kolpevoˈlettsa|S|ist|5|Prove della colpevolezza schiaccianti.|Pruebas de culpabilidad abrumadoras.|g=f
indizio|indicio|inˈditsjo|S|ist|4|Un indizio decisivo per gli inquirenti.|Un indicio decisivo para los investigadores.|g=m;p=indizi;c=indiziario
traccia|rastro (pista)|trattʃa|S|ist|4|Una traccia di pneumatici sull'asfalto.|Un rastro de neumáticos en el asfalto.|g=f;p=tracce;c=sulle tracce di
indagato|investigado (procesado)|indaɡato|S|ist|4|Tre indagati per truffa.|Tres investigados por estafa.|g=m;p=indagati;r=tec
inquirente|investigador|inkwiˈrɛnte|S|pro|5|Gli inquirenti chiudono il cerchio.|Los investigadores cierran el círculo.|g=m;p=inquirenti;r=tec
magistratura|magistratura|madʒistraˈtura|S|ist|5|La magistratura indipendente in Italia.|La magistratura independiente en Italia.|g=f
magistrato|magistrado|madʒiˈstrato|S|pro|4|Il magistrato inquirente di Catanzaro.|El magistrado investigador de Catanzaro.|g=m;p=magistrati
dichiarazione dei redditi|declaración de la renta|dikiaratˈtsjone dei redˈditi|L|fin|3|La dichiarazione dei redditi a luglio.|La declaración de la renta en julio.
dichiarante|declarante|dikiaranˈte|S|fin|5|Il dichiarante deve firmare qui.|El declarante debe firmar aquí.|g=m;p=dichiaranti
scaglione|tramo (escala)|ʃʃaʎˈʎone|S|fin|5|Il secondo scaglione d'imposta.|El segundo tramo del impuesto.|g=m;p=scaglioni;r=tec
aliquota|alícuota|alikwɔta|S|fin|5|Un'aliquota al 23 per cento.|Una alícuota del 23 por ciento.|g=f;p=aliquote;r=tec
lotteria|lotería|lotteria|S|fin|4|La lotteria di capodanno in Italia.|La lotería de año nuevo en Italia.|g=f;p=lotterie
gratta e vinci|rascar y ganar|ɡratta e ˈvintʃi|L|fin|4|Un gratta e vinci da due euro.|Un rascar de dos euros.|r=inf
scommessa|apuesta|skomˈmɛssa|S|spt|4|Una scommessa persa col collega.|Una apuesta perdida con el colega.|g=f;p=scommesse;c=scommettere
scommettere|apostar|skomˈmɛttere|V|spt|4|Scommetto sull'Italia stasera.|Apuesto por Italia esta noche.|n=Io scommetto; participio scommesso
pronostico|pronóstico|proˈnɔstiko|S|spt|4|Il pronostico della partita di derby.|El pronóstico del clásico.|g=m;p=pronostici
derby|clásico (derbi)|dɛrbi|S|spt|3|Il derby della Madonnina.|El clásico de la Madonnina.|g=m;n=Invariable;c=derby di Milano
andata|ida|anˈdata|S|spt|4|L'andata finisce in pareggio.|La ida termina en empate.|g=f;a=ritorno
pareggio|empate|paˈreddʒo|S|spt|3|Un pareggio a reti bianche.|Un empate sin goles.|g=m;p=pareggi
rigore|penal|riˈɡore|S|spt|3|Un rigore dubitoso al 90'.|Un penal dudoso al 90'.|g=m;p=rigori;c=calcio di rigore
fuorigioco|fuera de juego|fworidʒɔko|S|spt|4|Un fuorigioco discusso in area.|Un fuera de juego discutido en el área.|g=m;p=fuorigioco;n=Invariable
espulsione|expulsión|espulˈsjone|S|spt|4|L'espulsione del capitano.|La expulsión del capitán.|g=f;p=espulsioni
ammonizione|amonestación|ammonitˈtsjone|S|spt|5|Un'ammonizione per proteste.|Una amonestación por protestas.|g=f;p=ammonizioni
parata|atajada|paˈrata|S|spt|4|Una parata impossibile del portiere.|Una atajada imposible del arquero.|g=f;p=parate
gol annullato|gol anulado|ɡɔl annulˈlato|L|spt|4|Un gol annullato per fuorigioco.|Un gol anulado por fuera de juego.
recupero|descuento (tiempo)|rekuˈpɛro|S|spt|4|Cinque minuti di recupero.|Cinco minutos de descuento.|g=m;p=recuperi
tribuna|tribuna|triˈbuna|S|spt|3|La tribuna rossa dello stadio.|La tribuna roja del estadio.|g=f;p=tribune
curva|curva (hinchada)|kurva|S|spt|4|La curva nord infiammata.|La curva norte encendida.|g=f;p=curve;n=En italiano, la curva = la hinchada organizada
ultras|barras bravas|ultras|S|spt|4|Gli ultras protestano con lo striscione.|Las barras bravas protestan con la pancarta.|g=m;n=Siempre plural
striscione|pancarta|strisˈʃʃone|S|spt|4|Uno striscione da cento metri.|Una pancarta de cien metros.|g=m;p=striscioni
coreografia|coreografía (espectáculo)|koreoɡraˈfia|S|spt|5|La coreografia della curva prima del fischio.|La coreografía de la curva antes del silbatazo.|g=f
fischio|silbatazo|fiʃʃo|S|spt|4|Il fischio finale dell'arbitro.|El silbatazo final del árbitro.|g=m;p=fischi;c=al fischio
retrocessione|descenso|retrotʃeʃˈʃjone|S|spt|4|La retrocessione in serie B.|El descenso a la serie B.|g=f;p=retrocessioni;a=promozione
salvezza|salvación (permanencia)|salvettsa|S|spt|4|La salvezza matematica conquistata.|La permanencia matemática conquistada.|g=f;c=lotta per la salvezza
scudetto|scudetto (título)|skuˈdetto|S|spt|3|Lo scudetto della Juventus.|El scudetto de la Juventus.|g=m;p=scudetti
serie A|serie A|seˈrie a|S|spt|3|La Serie A più bella d'Europa.|La serie A más linda de Europa.|g=f;n=Invariable
classifica|tabla de posiciones|klaʃˈʃifika|S|spt|3|La classifica dopo trenta giornate.|La tabla tras treinta fechas.|g=f;p=classifiche
trasferta|visita (fuera de casa)|trasˈfɛrta|S|spt|4|Una trasferta difficile a Marassi.|Una visita difícil en Marassi.|g=f;p=trasferte;n=Muy futbolero italiano
terzo tempo|tercer tiempo|tɛrtso tɛmpo|L|spt|5|Il terzo tempo con il pubblico al pub.|El tercer tiempo con el público.
`, "B2", "k-x3");
