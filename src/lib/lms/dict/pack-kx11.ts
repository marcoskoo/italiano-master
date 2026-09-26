import { parsePack } from "./compact";
import type { VocabWord } from "../types";

/* ── Pack K·X11 · reposición ultracompacta (A2→B2) ─────────────────── */

export const PACK_KX11: VocabWord[] = parsePack(`
# ══ aggettivi mancanti ══
abbronzato|bronceado|abbronˈtsato|A|cor|3|Tornato abbronzato dal mare.|Vuelto bronceado del mar.
pallido|pálido|palˈlido|A|cor|3|Era pallido per la paura.|Estaba pálido del miedo.
snello|esbelto|snɛllo|A|cor|4|Un corpo snello dalla palestra.|Un cuerpo esbelto del gimnasio.
robusto|robusto|roˈbusto|A|cor|4|Un portalettere robusto di campagna.|Un cartero robusto de campo.
magra|flaco (magra)|maɡra|A|cor|3|Una bistecca magra alla griglia.|Un bistec magro a la parrilla.|n=magro/magra/magri/magre;a=grasso
grasso|gordo|grasso|A|cor|2|Un gatto grasso e pigro.|Un gato gordo y perezoso.|a=magro
obeso|obeso|oˈbezo|A|cor|5|Un problema di salute pubblica.|Un problema de salud pública.
muscoloso|musculoso|muskolozo|A|cor|4|Il bagnino muscoloso della piscina.|El salvavidas musculoso de la piscina.
atletico|atlético|atletiko|A|spt|4|Un fisico atletico da nuotatore.|Un físico atlético de nadador.
grazia|gracia|ɡrattsia|S|emo|4|Si muove con grazia felina.|Se mueve con gracia felina.|g=f
trasandato|desaliñado|trazanˈdato|A|emo|5|Uno studente trasandato in tuta.|Un estudiante desaliñado en buzo.|r=col
in ordine|arreglado|in ˈɔrdine|L|ast|3|Tieni la stanza in ordine.|Mantén la pieza arreglada.|a=in disordine
in disordine|desordenado|in disorˈdine|L|ast|3|La scrivania in disordine totale.|El escritorio en desorden total.
scrupoloso|escrupuloso|skrupolozo|A|ast|4|Un traduttore scrupoloso delle sfumature.|Un traductor escrupuloso de los matices.
schivo|retraído|skiˈvo|A|emo|5|Un carattere schivo e riservato.|Un carácter retraído y reservado.
riservato|reservado|rizerˈvato|A|emo|3|Un uomo riservato di poche parole.|Un hombre reservado de pocas palabras.|n=Riservato anche = reservado (mesa)
scontroso|hosco|skontrozo|A|emo|4|Il barista scontroso del mattino.|El barista hosco de la mañana.
burbero|gruñón|burbero|A|emo|4|Un nonno burbero dal cuore d'oro.|Un abuelo gruñón de oro corazón.|n=Muy italiano: il burbero benefico
prepotente|prepotente|prepotenˈte|A|emo|4|Un capo prepotente con i giovani.|Un jefe prepotente con los jóvenes.|n=Sostantivo: il prepotente
bullo|matón|bullo|A|emo|4|Il bullo della scuola redento.|El matón de la escuela redimido.|r=col
celibe|solterón|tʃelibe|A|fam|5|È rimasto celibe per scelta.|Quedó soltero por decisión.|n=Para hombres; nubile para mujeres
nubile|núbil|nubile|A|fam|5|La figlia nubile del fattore.|La hija núbil del granjero.|r=let
vedovo|viudo|vedovo|A|fam|4|Un vedovo con tre figli.|Un viudo con tres hijos.|g=m;n=La vedova = la viuda
separato|separado|sepaˈrato|A|fam|3|Una coppia separata in casa.|Una pareja separada en casa.
divorziato|divorciado|divordzjato|A|fam|3|Un padre divorziato felice.|Un padre divorciado feliz.
convivente|conviviente|konviˈvɛnte|A|fam|4|La compagna convivente da anni.|La compañera conviviente de años.
amante|amante|aˈmante|S|rel|4|Una relazione con un'amante segreta.|Una relación con una amante secreta.|g=m;p=amanti
flirt|flirteo|flirt|S|rel|4|Un flirt estivo in vacanza.|Un flirteo veraniego de vacaciones.|g=m;n=Invariable
cotta|enamoramiento|kɔtta|S|rel|4|Una cotta adolescenziale per il compagno di banco.|Un enamoramiento adolescente.|g=f;c=avere una cotta

# ══ corpo e movimento ══
battito|latido|battito|S|cor|4|Il battito del cuore accelerato.|El latido del corazón acelerado.|g=m;p=battiti;c=battito cardiaco
polso|muñeca (pulso)|pɔlso|S|cor|4|Il polso ingessato dopo la caduta.|La muñeca enyesada tras la caída.|g=m;p=polsi;c=misurare il polso
caviglia|tobillo|kaviʎʎa|S|cor|3|Una caviglia distorta.|Un tobillo torcido.|g=f;p=caviglie
cinghia|correa|tʃinɡɡja|S|tec|4|La cinghia dello zaino rotta.|La correa de la mochila rota.|g=f;p=cinghie
cinturino|correa de reloj|tʃinturino|S|tec|5|Il cinturino dell'orologio nuovo.|La correa del reloj nuevo.|g=m;p=cinturini
chiusura lampo|cremallera|kjuˈzura lampo|L|rop|4|La chiusura lampo inceppata.|El cremallera trabado.
bottone|botón|botˈtone|S|rop|3|Un bottone saltato dalla camicia.|Un botón saltado de la camisa.|g=m;p=bottoni;c=bastare un bottone
asola|ojal|aˈzɔla|S|rop|5|L'asola cucita a mano.|El ojal cosido a mano.|g=f;p=asole
orlo|dobladillo|ɔrlo|S|rop|5|L'orlo dei pantaloni accorciato.|El dobladillo del pantalón acortado.|g=m;p=orli
rammendo|zurcido|rammendo|S|rop|5|Un rammendo invisibile sulla manica.|Un zurcido invisible en la manga.|g=m;n=Invariable
manica|manga|manika|S|rop|3|La manica della giacca strappata.|La manga de la chaqueta rasgada.|g=f;p=maniche;c=ridere nella manica (ES: bajo la manga)
strappo|rasgadura|strappo|S|rop|4|Uno strappo sui jeans fashion.|Una rasgadura en los jeans de moda.|g=m;p=strappi
scucire|descoser|skuˈtʃire|V|rop|5|Si è scucita la tasca interna.|Se descosi el bolsillo interno.
ricucire|recoser|rikuˈtʃire|V|rop|5|Ricucia l'orlo staccato.|Recose el dobladillo desprendido.
orologio da polso|reloj de pulsera|orolodʒo da polso|L|rop|3|Un orologio da polso automatico.|Un reloj de pulsera automático.
cinturino di cuoio|correa de cuero|tʃinturino di kwɔjo|L|rop|5|Il cinturino di cuoio consumato.|La correa de cuero gastada.

# ══ cibo: piatti e preparazioni ══
involtino|rollito|involˈtino|S|ali|4|Un involtino di melanzane al forno.|Un rollito de berenjenas al horno.|g=m;p=involtini
sformato|pastel de verduras|sforˈmato|S|ali|5|Uno sformato di zucchine tiepido.|Un pastel de zucchini tibio.|g=m;p=sformati
polpette|albóndigas|polˈpette|S|ali|3|Le polpette della nonna al sugo.|Las albóndigas de la abuela en salsa.|g=f;n=Siempre plural
polpettone|albóndiga gigante|polpetˈtone|S|ali|4|Il polpettone ripieno di uova.|El pastel de carne relleno de huevos.|g=m;p=polpettoni
polpettina|albóndiguita|polpetˈtina|S|ali|5|Le polpettine da aperitivo.|Las albóndiguitas de aperitivo.|g=f;p=polpettine
crostacei|mariscos|krostaˈtʃei|S|ali|4|I crostacei della pescheria.|Los mariscos del mostrador.|g=m;n=Siempre plural
molluschi|moluscos|molˈluski|S|ali|5|I molluschi del menu degustazione.|Los moluscos del menú degustación.|g=m;n=Siempre plural
frutti di mare|frutos del mar|frutti di ˈmare|L|ali|3|Gli spaghetti ai frutti di mare.|Los espaguetis con mariscos.
antipasto di mare|entrada de mar|antiˈpasto di ˈmare|L|ris|4|Un antipasto di mare freddo.|Una entrada de mar fría.
frittura di paranza|fritura de pescaditos|frittura di paˈrantsa|L|ris|5|Una fritura di paranza croccante.|Una fritura de pescaditos crocante.|n=Tipica della riviera
spiedino|brocheta|spjeˈdino|S|ali|4|Uno spiedino di pollo e zucchine.|Una brocheta de pollo y zucchini.|g=m;p=spiedini
grigliata mista|parrillada mixta|ɡriʎʎata ˈmista|L|ris|3|Una grigliata mista per due.|Una parrillada mixta para dos.
tagliata|corte a la plancha|taʎʎata|S|ris|4|Una tagliata di manzo al sangue.|Un corte de res término jugoso.|g=f;p=tagliate;c=tagliata di manzo
fiorentina|fiorentina (bisteca)|fjorenˈtina|S|ris|4|La fiorentina alta due dita.|La fiorentina de dos dedos de alto.|g=f;n=Chianina DOP; cotta al sangue
brasato|braseado|braˈzato|S|ali|5|Un brasato al Barolo di sei ore.|Un braseado al Barolo de seis horas.|g=m;p=brasati
stracotto|estofado|straˈkɔtto|S|ali|4|Uno stracotto di manzo domenicale.|Un estofado de res dominical.|g=m;p=stracotti
spezzatino|guiso en trozos|spettsatˈtino|S|ali|4|Lo spezzatino con i piselli.|El guiso en trozos con arvejas.|g=m;p=spezzatini
in umido|en guiso|in umido|L|ali|4|Le seppie in umido veneziane.|Los chocos en guiso venecianos.
saltato in padella|salteado|salˈtato in padella|L|ali|4|I funghi saltati in padella.|Los hongos salteados a la sartén.
soffritto|sofrito|sofˈfritto|S|ali|4|Il soffritto di sedano, carota e cipolla.|El sofrito de apio zanahoria y cebolla.|g=m;p=soffritti
soffriggere|sofreír|sofˈfriddʒere|V|ali|4|Soffriggi l'aglio nell'olio.|Sofríe el ajo en el aceite.|n=Io soffriggo; participio soffritto
rosolare|dorar|rozoˈlare|V|ali|4|Rosola la carne a fuoco alto.|Dora la carne a fuego alto.
a fuoco lento|a fuego lento|a ˈfwɔko lento|L|ali|3|Cuoci il ragù a fuoco lento.|Cocina el ragú a fuego lento.
fuoco medio|fuego medio|fwɔko ˈmɛdjo|L|ali|4|Cuoci a fuoco medio dieci minuti.|Cocina a fuego medio diez minutos.
al dente|al dente|al ˈdɛnte|L|ali|3|La pasta al dente perfetta.|La pasta al dente perfecta.|n=Expresión italica exportada al mundo
scolare|escurrir|skoˈlare|V|ali|3|Scola la pasta al dente.|Escurre la pasta al dente.
colino|colador|koˈlino|S|ali|4|Un colino a maglie strette.|Un colador de malla fina.|g=m;p=colini
scolapasta|escurridor de pasta|skolaˈpasta|S|ali|4|Lo scolapasta nell'acquaio.|El escurridor de pasta en el lavadero.|g=m;n=Invariable
acquaio|fregadero|akkwajo|S|cas|4|L'acquaio d'acciaio della cucina.|El fregadero de acero de la cocina.|g=m;p=acquai
lavello|lavadero|laˈvello|S|cas|4|Il lavello in ceramica della nonna.|El lavadero de cerámica de la abuela.|g=m;p=lavelli;s=acquaio
piano di lavoro|mesa de trabajo|pjano di lavoˈro|L|cas|4|Il piano di lavoro in marmo.|La mesa de trabajo de mármol.
tagliere|tabla de picar|taʎʎjere|S|ris|4|Un tagliere di legno per il pane.|Una tabla de picar de madera para el pan.|g=m;p=taglieri
pelapatate|pelador|pelaˈpatate|S|ali|4|Il pelapatate nuovo del cassetto.|El pelador nuevo del cajón.|g=m;n=Invariable
schiumarola|espumadera|skjumaˈrɔla|S|ali|5|La schiumarola per la espuma.|La espumadera para la espuma.|g=f;p=schiumarole
mestolo|cucharón|mɛstolo|S|ali|4|Un mestolo di brodo caldo.|Un cucharón de caldo caliente.|g=m;p=mestoli
frusta|batidor|frusta|S|ali|4|Una frusta manuale per le uova.|Un batidor manual para los huevos.|g=f;p=fruste
matterello|rodillo|matteˈrɛllo|S|ali|5|Il matterello di legno per la sfoglia.|El rodillo de madera para la masa.|g=m;p=matterelli
sfoglia|masa (lámina)|sfoʎʎa|S|ali|4|La sfoglia sottile delle lasagne.|La masa fina de las lasañas.|g=f;p=sfoglie
impasto|masa (mezcla)|imˈpasto|S|ali|3|L'impasto della pizza lievitato.|La masa de la pizza leudada.|g=m;p=impasti
lievitare|leudar|ljeviˈtare|V|ali|4|La pizza lievita due ore.|La pizza leuda dos horas.
stendere la pasta|estirar la masa|stɛndere la pasta|L|ali|4|Stendo la pasta col matterello.|Estiro la masa con el rodillo.
farcire|rellenar|farˈtʃire|V|ali|4|Farcio i cannelloni di ricotta.|Relleno los canelones de ricota.|n=Io farcisco (tipo -isc)
ripieno|relleno|riˈpjɛno|S|ali|3|Il ripieno di carne dei tortellini.|El relleno de carne de los tortellini.|g=m;p=ripieni
impanare|empanizar|impaˈnare|V|ali|4|Impano le cotolette prima di friggere.|Empanizo las milanesas antes de freír.
pangrattato|pan rallado|panɡrattato|S|ali|4|Il pangrattato per la gratinatura.|El pan rallado para el gratinado.|g=m;n=Invariable
gratinare|gratinar|gratiˈnare|V|ali|4|Gratino le melanzane in forno.|Gratino las berenjenas al horno.
gratin|gratinado|ɡratin|S|ris|4|Le patate al gratin croccanti.|Las papas gratinadas crocantes.|g=m;n=Invariable
impiattare|emplantar|impiatˈtare|V|ris|5|Impiatto con eleganza minimalista.|Emplato con elegancia minimalista.|r=col
menu degustazione|menú degustación|menu degustaˈtsjone|L|ris|4|Il menu degustazione di sette portate.|El menú degustación de siete tiempos.
`, "A2", "k-x11");
