import { parsePack } from "./compact";
import type { VocabWord } from "../types";

/* ── Pack K·X44 · casa, trasloco e fai-da-te (B2) ──────────── */

export const PACK_KX44: VocabWord[] = parsePack(`
# ══ trasloco ══
ditta di traslochi|empresa de mudanzas|ˈditta di traˈzloki|L|cas|4|La ditta di traslochi con il montacarichi.|La empresa de mudanzas con la plataforma.
imballare|embalar|imbalˈlaːre|V|cas|4|Imballa i bicchieri con la pluriball.|Embala los vasos con el plástico de burbujas.
montacarichi|plataforma elevadora|montakaˈriki|S|cas|5|Il montacarichi esterno alla finestra.|La plataforma externa a la ventana.|g=m;p=montacarichi
montare (mobili)|montar (muebles)|monˈtare|V|cas|3|Monta la libreria con il cacciavite.|Monta la librería con el destornillador.
vite (tornillo)|tornillo|ˈviːte|S|tec|3|Stringi la vite del pomello.|Aprieta el tornillo del tirador.|g=f;p=viti
tassello|taco|tasˈsɛl lo|S|tec|4|Il tassello a espansione nel muro.|El taco de expansión en la pared.|g=m;p=tasselli
trapanare|taladrar|trapaˈnaːre|V|tec|5|Ho trapanato il muro del salotto.|He taladrado la pared del salón.
libreria (mobilia)|librería (mueble)|libreˈria|S|cas|4|La libreria a muro in rovere.|La librería de pared en roble.|g=f;p=librerie
armadio a muro|armario empotrado|arˈmɔːdio a ˈmuːro|L|cas|4|L'armadio a muro su misura.|El armario empotrado a medida.
anta|hoja (puerta)|ˈanta|S|cas|4|L'anta scorrevole dell'armadio.|La hoja corredera del armario.|g=f;p=ante
anta scorrevole|hoja corredera|ˈanta skorˈrɛvole|L|cas|4|L'anta scorrevole in vetro.|La hoja corredera de cristal.
# ══ fai-da-te ══
fai-da-te|bricolaje|fai da ˈte|S|cas|4|Il fai-da-te del sabato pomeriggio.|El bricolaje del sábado por la tarde.|g=m
vernice|barniz/pintura|verˈnitʃe|S|cas|4|La vernice all'acqua lavabile.|La pintura al agua lavable.|g=f;p=vernici
primer|matacolor|praimer|S|cas|5|Il primer fissante sul gesso.|El matacolor fijador sobre el yeso.|g=m;n=Anglicismo
imbianchino|pintor|imbjanˈkiːno|S|pro|4|L'imbianchino rinnova la camera.|El pintor renueva la habitación.|g=m;p=imbianchini
ritocco|retoque|riˈtɔkko|S|art|5|Un ritocco di colore sulla parete.|Un retoque de color en la pared.|g=m;p=ritocchi
stuccare|enyesar|stukˈkaːre|V|cas|5|Stucca i buchi dei chiodi.|Enyesa los agujeros de los clavos.
rasare (muro)|alisar (pared)|raˈzaːre|V|cas|5|Rasa il muro con la spatola.|Alisa la pared con la espátula.
carta vetrata|papel de lija|ˈkarta vetˈraːta|L|cas|5|La carta vetrata a grana fine.|El papel de lija de grano fino.
levigare|lijar|leviˈɡaːre|V|cas|5|Leviga il legno prima della vernice.|Lija la madera antes del barniz.
pannello (parete)|panel (pared)|panˈnɛl lo|S|cas|4|Il pannello in cartongesso.|El panel de pladur.|g=m;p=pannelli
cartongesso|pladur|kartonˈdʒesso|S|cas|5|Il tramezzo in cartongesso.|El tabique de pladur.|g=m;n=Se dice anche "gessofibra"
tramezzo|tabique|traˈmettso|S|cas|5|Il tramezzo che separa cucina e salotto.|El tabique que separa cocina y salón.|g=m;p=tramezzi
intonacare|revoquear|intonakaˈre|V|cas|5|Intonacare la facciata degradata.|Revoquear la fachada degradada.|r=tec
piastrellare|azulejar|piastrelˈlaːre|V|cas|4|Piastrella la cucina fino al soffitto.|Azuleja la cocina hasta el techo.
griglia (fughe)|rana (junta)|ɡriʎʎa|S|cas|5|La griglia tra le piastrelle sporca.|La junta entre los azulejos sucia.|g=f;p=griglie
fuga (piastrelle)|junta (azulejo)|ˈfuːɡa|S|cas|5|Le fughe nere da pulire.|Las juntas negras que limpiar.|g=f;p=fughe
stucco (fughe)|masilla (juntas)|ˈstukko|S|cas|5|Lo stucco silicone per le fughe.|La masilla de silicona para las juntas.|g=m;p=stucchi
guarnizione|junta (empaque)|ɡwarnitˈtsjone|S|tec|5|La guarnizione del miscelatore da cambiare.|La junta del mezclador a cambiar.|g=f;p=guarnizioni
miscelatore|mezclador|mitʃelaˈtore|S|cas|5|Il miscelatore monocomando della doccia.|El mezclador monomando de la ducha.|g=m;p=miscelatori
scaldabagno|calentador|skaldaˈbaɲɲo|S|cas|4|Lo scaldabagno a gas da 50 litri.|El calentador de gas de 50 litros.|g=m;p=scaldabagni
condensazione (caldaia)|condensación (caldera)|kondensaˈtsjone kalˈdaja|L|tec|5|La caldaia a condensazione risparmia gas.|La caldera de condensación ahorra gas.
canna fumaria|conducto de humos|ˈkanna fuˈmaːrja|L|cas|5|La canna fumaria da spazzare.|El conducto de humos que limpiar.
spazzacamino|deshollinador|spatttsakaˈmiːno|S|pro|5|Lo spazzacamino delle case alpine.|El deshollinador de las casas alpinas.|g=m;p=spazzacamini
sifone|sifón|siˈfoːne|S|cas|5|Il sifone del lavandino intasato.|El sifón del fregadero atascado.|g=m;p=sifoni
intasare|atascar|intaˈzaːre|V|cas|4|I fondi di caffè intasano lo scarico.|Los posos de café atascan el desagüe.
scarico (acqua)|desagüe|ˈskariko|S|cas|3|Lo scarico del lavandino lento.|El desagüe del fregadero lento.|g=m;p=scarichi
pompa (idraulica)|bomba (hidráulica)|ˈpɔmpa|S|tec|4|La pompa dell'acqua del pozzo.|La bomba de agua del pozo.|g=f;p=pompe
perdita (acqua)|fuga (agua)|perˈdita|S|cas|4|Una perdita sotto il lavello.|Una fuga bajo el fregadero.|g=f;p=perdite
gocciolare|gotea|grotto laˈre|V|cas|4|Il rubinetto gocciola tutta la notte.|El grifo gotea toda la noche.
gocciolamento|goteo|grotto laˈmento|S|cas|5|Il gocciolamento continuo dal soffitto.|El goteo continuo del techo.|g=m;p=gocciolamenti
infiltrazione|infiltración|infiltraˈtsjone|S|cas|5|L'infiltrazione d'acqua dal terrazzo.|La infiltración de agua de la terraza.|g=f;p=infiltrazioni
deumidificatore|deshumidificador|deumidifiˈkaːtore|S|cas|4|Il deumidificatore della cantina.|El deshumidificador del sótano.|g=m;p=deumidificatori
umidità (muro)|humedad (pared)|umiˈdita|S|cas|3|L'umidità che sale dal pavimento.|La humedad que sube del suelo.|g=f
muffa|moho|muf fa|S|cas|3|La muffa nera nell'angolo del bagno.|El moho negro en la esquina del baño.|g=f;p=muffe
anticondensa|anticondensa|antikondenˈsa|A|cas|5|La vernice anticondensa per il muro nord.|La pintura anticondensa para la pared norte.|r=tec
# ══ elettrodomestici ══
frullatore|batidora|frullaˈtore|S|cas|4|Il frullatore a immersione per la crema.|La batidora de inmersión para la crema.|g=m;p=frullatori
frullare|batir|frulˈlaːre|V|ali|4|Frulla le lenticchie per la vellutata.|Tritura las lentejas para la crema.
estrattore (succhi)|extractor (zumos)|estratˈtoːre|S|cas|5|L'estrattore a freddo dei succhi vivi.|El extractor en frío de los zumos vivos.|g=m;p=estrattori
macinare (caffè)|moler (café)|matʃiˈnaːre|V|ali|4|Macina il caffè al momento.|Muele el café al momento.
macinato (caffè)|molido (café)|matʃiˈnaːto|S|ali|4|Il caffè macinato per la moka.|El café molido para la moka.|g=m;p=macinati
tostapane|tostadora|tostaˈpaːne|S|cas|4|Il tostapane a due slot.|La tostadora de dos ranuras.|g=m;p=tostapane
robot da cucina|robot de cocina|roˌbot da kutˈʃiːna|L|cas|4|Il robot da cucina con la planetaria.|El robot de cocina con la batidora de pie.
planetaria|batidora de pie|planeˈtaːrja|S|cas|5|La planetaria impasta il panettone.|La batidora de pie amasa el panettone.|g=f;p=planetarie
lievito di birra|levadura de cerveza|ljeːvito di ˈbirra|L|ali|4|Il lievito di birra fresco in cubetti.|La levadura de cerveza fresca en cubitos.
crescere (impasto)|crecer (masa)|ˈkreʃʃere|V|ali|4|La pasta cresce in forno caldo.|La masa crece en horno caliente.
sfoglia (pasta)|lámina (pasta)|ˈsfɔʎʎa|S|ali|4|Stendi la sfoglia sottile per le tagliatelle.|Estira la lámina fina para las tagliatelle.|g=f;p=sfoglie
stendere la sfoglia|estirar la masa|stenˈdere la ˈsfɔʎʎa|E|ali|4|La nonna stende la sfoglia col matterello.|La abuela estira la masa con el rodillo.
pasta all'uovo|pasta al huevo|ˈpaːsta alˈluːovo|L|ali|4|La pasta all'uovo delle feste.|La pasta al huevo de las fiestas.
tagliatella|tagliatela|taʎʎaˈtɛlla|S|ali|4|Le tagliatelle al ragù bolognese.|Las tagliatelle al ragú boloñés.|g=f;p=tagliatelle
pappardella|pappardella|papparˈdɛl la|S|ali|5|Le pappardelle al cinghiale.|Las pappardelle al jabalí.|g=f;p=pappardelle
tagliolini|tallarines finos|taʎʎoˈliːni|S|ali|5|I tagliolini in brodo di cappone.|Los tallarines finos en caldo de capón.|g=m
passatelli|passatelli|passaˈtɛl i|S|ali|5|I passatelli in brodo romagnoli.|Los passatelli en caldo romañolos.|g=m
strozzapreti|strozzapreti|strottsaˈprɛːti|S|ali|5|Gli strozzapreti al pesto di cavallo|Los strozzapreti al pesto di caballo|g=m;n=Formato romagnolo
`, "B2", "k-x44");
