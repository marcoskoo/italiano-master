import { parsePack } from "./compact";
import type { VocabWord } from "../types";

/* ── Pack K·X37 · ambiente, energia ed ecologia (B2) ──────────── */

export const PACK_KX37: VocabWord[] = parsePack(`
# ══ ambiente ══
cambiamenti climatici|cambio climático|kambjaˈmenti kliˈmatitʃi|L|nat|3|I cambiamenti climatici accelerano.|El cambio climático se acelera.
crisi climatica|crisis climática|ˈkriːzi kliˈmatika|L|nat|4|La crisi climatica colpisce l'agricoltura.|La crisis climática golpea la agricultura.
emissioni di co2|emisiones de CO2|emisˈsjoni di kɔdue|L|nat|4|Le emissioni di co2 vanno tagliate del 55%.|Las emisiones de CO2 deben recortarse un 55%.
gas serra|gases de efecto invernadero|ˈɡas ˈsɛrra|L|nat|4|I gas serra intrappolano il calore.|Los gases de efecto invernadero atrapan el calor.
effetto serra|efecto invernadero|efˈfetto ˈsɛrra|L|nat|4|L'effetto serra è fuori controllo.|El efecto invernadero está fuera de control.
impronta di carbonio|huella de carbonio|imˈpronta di karˈbɔnio|L|nat|5|L'impronta di carbonio del volo.|La huella de carbonio del vuelo.
impronta ecologica|huella ecológica|imˈpronta ekoˈlɔdʒika|L|nat|5|Ridurre l'impronta ecologica dell'azienda.|Reducir la huella ecológica de la empresa.
neutralità climatica|neutralidad climática|neutraˈlita kliˈmatika|L|nat|5|L'obiettivo di neutralità climatica al 2050.|El objetivo de neutralidad climática en 2050.
transizione energetica|transición energética|transitˈtsjone enerˈdʒetika|L|nat|4|La transizione energetica crea posti di lavoro.|La transición energética crea empleo.
fonti rinnovabili|fuentes renovabili|ˈfonti rinnovaˈbili|L|nat|3|Le fonti rinnovabili coprono il 35%.|Las fuentes renovables cubren el 35%.
energia solare|energía solar|enerˈdʒia soˈlaːre|L|nat|4|L'energia solare sui tetti.|La energía solar en los tejados.
pannello solare|panel solar|panˈnɛllo soˈlaːre|L|tec|3|Il pannello solare sul tetto.|El panel solar en el tejado.
energia eolica|energía eólica|enerˈdʒia ˈɛːolika|L|nat|4|L'energia eolica in Puglia.|La energía eólica en Puglia.
parco eolico|parque eólico|ˈparko ˈɛːoliko|L|nat|4|Il parco eolico offshore.|El parque eólico marino.
offshore|en alta mar|ˈɔfʃɔr|E|tec|5|Le piattaforme offshore.|Las plataformas offshore.|n=Anglicismo
idroelettrico|hidroeléctrico|idroeletˈtriko|A|tec|4|Le centrali idroelettriche alpine.|Las centrales hidroeléctricas alpinas.
 centrale nucleare|central nuclear|tʃenˈtrale nuˈkljaːre|L|tec|4|La centrale nucleare di Garigliano.|La central nuclear de Garigliano.
fusion → no; fusione nucleare|fusión nuclear|fuˈzjone nuˈkljaːre|L|sci|5|La fusione nucleare fredda? Mai dimostrata.|¿La fusión nuclear fría? Nunca demostrada.
biocarburante|biocombustible|bjokarbuˈrante|S|nat|5|Il biocarburante dall'olio esausto.|El biocombustible del aceite usado.|g=m;p=biocarburanti
biomassa|biomasa|bioˈmassa|S|sci|5|La centrale a biomassa.|La central de biomasa.|g=f;p=biomasse
geotermico|geotérmico|dʒeotermiko|A|sci|5|Le fonti geotermiche di Larderello.|Las fuentes geotérmicas de Larderello.
idrogeno verde|hidrógeno verde|iˈdrɔdʒeno ˈverde|L|sci|5|L'idrogeno verde dal fotovoltaico.|El hidrógeno verde del fotovoltaico.
efficienza energetica|eficiencia energética|effitˈtʃjentsa enerˈdʒetika|L|tec|4|L'efficienza energetica degli edifici.|La eficiencia energética de los edificios.
classe energetica|clase energética|ˈklasse enerˈdʒetika|L|cas|4|La casa in classe energetica A.|La casa en clase energética A.
certificazione energetica|certificación energética|tʃertifikatˈtsjone enerˈdʒetika|L|cas|5|Serve la certificazione energetica per vendere.|Hace falta la certificación energética para vender.
consumo energetico|consumo energético|konˈsumo enerˈdʒetiko|L|tec|4|Il consumo energetico dei data center.|El consumo energético de los data center.
data center|centro de datos|ˈdata ˈtʃenter|S|tec|4|I data center consumano quanto una città.|Los data center consumen como una ciudad.|g=m;n=Anglicismo
dispersione termica|dispersión térmica|disperˈsjone terˈmika|L|cas|5|La dispersione termica del tetto.|La dispersión térmica del tejado.
cappotto termico|aislamiento térmico|kapˈpɔtto terˈmiko|L|cas|5|Il cappotto termico sulla facciata.|El aislamiento térmico en la fachada.
infisso|carpintería (ventana)|inˈfisso|S|cas|4|Gli infissi in doppio vetro.|Las ventanas de doble vidrio.|g=m;p=infissi
doppio vetro|doble vidrio|ˈdɔppjo ˈvɛtro|L|cas|4|Il doppio vetro taglia i consumi.|El doble vidrio recorta el consumo.
serramento|ventanal|serraˈmento|S|cas|5|Serramenti in pvc.|Ventanales de PVC.|g=m;p=serramenti
# ══ inquinamento ══
inquinamento atmosferico|contaminación atmosférica|inkwinamento atmosfeˈriko|L|nat|4|L'inquinamento atmosferico della Pianura Padana.|La contaminación atmosférica de la Llanura Padana.
pm10|PM10|piˈɛmmeditʃi|S|nat|4|Le polveri pm10 oltre la soglia.|Las partículas PM10 sobre el umbral.|g=m
polveri sottili|partículas finas|ˈpolveri sotˈtili|L|nat|4|Le polveri sottili uccidono 60 mila italiani l'anno.|Las partículas finas matan a 60 mil italianos al año.
particolato|material particulado|partikoˈlaːto|S|nat|5|Il particolato oltre i limiti.|El material particulado sobre los límites.|g=m
biossido di azoto|dióxido de nitrógeno|biosˈsido di aˈzɔto|L|sci|5|Il biossido di azoto dal traffico.|El dióxido de nitrógeno del tráfico.
ozono troposferico|ozono troposférico|ˈɔtsɔno troposfeˈriko|L|sci|5|Le soglie di ozono troposferico superate.|Los umbrales de ozono troposférico superados.
smog|smog|zmɔɡ|S|nat|3|Lo smog fotochimico estivo.|El smog fotoquímico estival.|g=m;n=Anglicismo consolidado
pioggia acida|lluvia ácida|ˈpjoːɲɲa ˈatʃida|L|nat|5|La pioggia acida erode i marmi.|La lluvia ácida erosiona los mármoles.
buco dell'ozono|agujero de la capa de ozono|ˈbuko delˈlɔtsɔno|L|nat|5|Il buco dell'ozono si sta chiudendo.|El agujero de la capa de ozono se está cerrando.
clorofluorocarburi|clorofluorocarbonos|klorofluorokarˈburi|S|sci|5|I clorofluorocarburi banditi dal protocollo.|Los clorofluorocarbonos prohibidos por el protocolo.|g=m
inquinamento delle acque|contaminación de las aguas|inkwinamento delle ˈakkwe|L|nat|4|L'inquinamento delle acque del Po.|La contaminación de las aguas del Po.
scarico industriale|vertido industrial|ˈskarko indusˈtrjale|L|nat|4|Lo scarico industriale illegale nel fiume.|El vertido industrial ilegal al río.
scarico fognario|vertedero de aguas residuales|ˈskarko foɲˈɲaːrjo|L|cit|5|Gli scarichi fognari nel porto.|Los vertidos de aguas residuales en el puerto.
depuratore|depuradora|depuˈratore|S|cit|4|Il depuratore non funziona da mesi.|La depuradora no funciona desde hace meses.|g=m;p=depuratori
microplastiche|microplásticas|mikroˈplastike|S|nat|4|Le microplastiche nel Mediterraneo.|Las microplásticas en el Mediterráneo.|g=f
isola di plastica|isla de plástico|ˈiːzola di ˈplastika|L|nat|4|L'isola di plastica del Pacifico.|La isla de plástico del Pacífico.
plasticaccia|basura plástica|plastiˈkat a|S|nat|5|La plasticaccia abbandonata sui prati.|La basura plástica abandonada en los prados.|g=f;r=col
rifiuto indifferenziato|residuo no reciclable|riˈfjuto indifferenˈtsjato|L|nat|5|Il rifiuto indifferenziato finisce in discarica.|El residuo no reciclable acaba en vertedero.
discarica abusiva|vertedero ilegal|disˈkaːrika abuˈziːva|L|nat|4|Le discariche abusive bruciano d'estate.|Los vertederos ilegales arden en verano.
termovalorizzatore|incineradora|termovaloritˈtsatore|S|nat|5|Il termovalorizzatore di Bologna.|La incineradora de Bolonia.|g=m;p=termovalorizzatori
riciclabile|reciclable|ritʃikˈlabile|A|nat|4|Confezioni completamente riciclabili.|Envases completamente reciclables.
differenziata|recogida selectiva|differenˈtsjata|S|nat|4|La differenziata porta a porta.|La recogida selectiva puerta a puerta.|g=f;p=differenziate
compostaggio|compostaje|kompoˈstaddʒo|S|nat|5|Il compostaggio domestico dell'umido.|El compostaje doméstico del orgánico.|g=m
isola ecologica|punto limpio|ˈiːzola ekoˈlɔdʒika|L|nat|4|Portare gli ingombranti all'isola ecologica.|Llevar los voluminosos al punto limpio.
raee|residuos de aparatos eléctricos|ˈraje|S|nat|5|Le raee vanno ritirate dai negozianti.|Las raee deben retirarlas los comerciantes.|g=f;n=Rifiuti di apparecchiature elettriche ed elettroniche
e-waste|residuos electrónicos|iː ˈweist|S|nat|5|L'e-waste esportato illegalmente.|Los residuos electrónicos exportados ilegalmente.|g=m;n=Anglicismo
# ══ biodiversità e natura ══
specie protetta|especie protegida|ˈspetʃie proteˈtʃa|L|ani|4|L'orso marsicano è specie protetta.|El oso marsicano es especie protegida.
specie invasiva|especie invasora|ˈspetʃie invaˈziva|L|nat|5|La specie invasiva del gambero rosso.|La especie invasora del cangrejo rojo.
a rischio di estinzione|en peligro de extinción|a riˈskko di estinˈtsjone|E|nat|4|Il capriolo sardo a rischio di estinzione.|El corzo sardo en peligro de extinción.
area protetta|área protegida|ˈaːrea proteˈtʃa|L|nat|4|Le aree protette coprono il 10%.|Las áreas protegidas cubren el 10%.
parco nazionale|parque nacional|ˈparko nattsjoˈnale|L|nat|3|Il parco nazionale del Gran Sasso.|El parque nacional del Gran Sasso.
riserva naturale|reserva natural|riˈsɛrva natuˈrale|L|nat|4|La riserva naturale dello Stagnone.|La reserva natural dello Stagnone.
oasi|oasis|oˈaːzi|S|nat|4|L'oasi del WWF di Bolsena.|El oasis del WWF de Bolsena.|g=f;p=oasi
sentiero naturalistico|ruta naturalística|senˈtjero naturaliˈstiko|L|nat|5|Il sentiero naturalistico tra le dune.|La ruta naturalística entre las dunas.
degrado ambientale|degradación ambiental|deˈɡrado ambjenˈtale|L|nat|4|Il degrado ambientale delle periferie.|La degradación ambiental de las periferias.
disastro ambientale|desastre ambiental|diˈzastro ambjenˈtale|L|nat|4|Il disastro ambientale della nave.|El desastre ambiental del barco.
disastro ecologico|desastre ecológico|diˈzastro ekoˈlɔdʒiko|L|nat|4|Un disastro ecologico annunciato.|Un desastre ecológico anunciato.
ammianto|amianto|amˈmjanto|S|nat|5|Lo smaltimento dell'ammianto dai tetti.|La retirada del amianto de los tejados.|g=m
siti contaminati|emplazamientos contaminados|ˈsiti kontamiˈnaːti|L|nat|5|I siti contaminati di eredità industriale.|Los emplazamientos contaminados de herencia industrial.
via (permesso)|vía (autorización)|ˈviːa|S|ist|4|La via libera all'eolico.|La vía libre a la eólica.|g=f;p=vie
via libera|vía libre|ˈviːa ˈliːbra|L|ist|4|Il comune dà la via libera al parco solare.|El ayuntamiento da vía libre al parque solar.
cementificazione|cementificación|tʃementifikaˈtsjone|S|nat|5|La cementificazione della costa.|La cementificación de la costa.|g=f
consumo di suolo|consumo de suelo|konˈsumo di ˈswɔːlo|L|nat|5|Il consumo di suolo in Italia avanza.|El consumo de suelo en Italia avanza.
penuria idrica|escasez hídrica|peˈnuria ˈidrika|L|nat|5|La penuria idrica estiva.|La escasez hídrica estival.
onda di calore|ola de calor|ˈonda di kaˈloːre|L|cli|4|L'onda di calore batte i record.|La ola de calor bate récords.
allerta meteo|alerta meteorológica|alˈlɛrta ˈmeːteo|L|cli|4|L'allerta meteo arancione in sei regioni.|La alerta meteorológica naranja en seis regiones.
bomba d'acqua|gota fría (bomba de agua)|ˈbomba dakˈkwa|L|cli|4|La bomba d'acqua ha allagato i sottopassi.|La bomba de agua ha inundado los pasos subterráneos.
maltempo|mal tiempo|malˈtɛmpo|S|cli|3|Il maltempo del fine settimana.|El mal tiempo del fin de semana.|g=m
nubifragio|diluvio|nubiˈfraːdʒo|S|cli|5|Il nubifragio su Messina.|El diluvio sobre Mesina.|g=m;p=nubifragi
incendio boschivo|incendio forestal|intʃenˈdʒio boˈskivo|L|cli|4|L'incendio boschivo divora la pineta.|El incendio forestal devora el pinar.
aereo canadair|avión anfibio|aˈɛːreo kanadaˈir|L|tra|5|Il canadair scarica l'acqua sul rogo.|El canadair descarga el agua sobre el fuego.
stagione degli incendi|temporada de incendios|staˈdʒone deʎʎi inˈtʃendʒi|L|cli|5|La stagione degli incendi si allunga.|La temporada de incendios se alarga.
subsidenza|subsistencia (hundimiento)|subsiˈdentsa|S|sci|5|La subsidenza di Venezia e del delta.|El hundimiento de Venecia y del delta.|g=f;r=tec
acidificazione degli oceani|acidificación de los océanos|atʃidifikaˈtsjone deʎʎi otʃeˈani|L|sci|5|L'acidificazione degli oceani uccide i coralli.|La acidificación de los océanos mata los corales.
`, "B2", "k-x37");
