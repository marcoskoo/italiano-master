import { parsePack } from "./compact";
import type { VocabWord } from "../types";

/* ── Pack K·X38 · arte, architettura e restauro (C1) ──────────── */

export const PACK_KX38: VocabWord[] = parsePack(`
# ══ arte ══
affrescatura|frescado|affreʃˈʃaːtura|S|art|5|L'affrescatura della volta a pennello.|El frescado de la bóveda a pincel.|g=f;p=affrescature
sinopia|sinopia|siˈnɔːpja|S|art|5|La sinopia sotto l'affresco staccato.|La sinopia bajo el fresco desprendido.|g=f;p=sinopie
tempiera|pintura a la tempera|temˈpjɛːra|S|art|5|La tempiera su tavola.|La témpera sobre tabla.|g=f
encausto|encáustica|enˈkausto|S|art|5|L'encausto dei ritratti del Fayum.|El encáustico de los retratos de El Fayum.|g=m
altorilievo|altorrelieve|altoriliˈjeːvo|S|art|5|L'altorilievo dell'Ara Pacis.|El altorrelieve del Ara Pacis.|g=m;p=altorilievi
bassorilievo|bajorrelieve|bassoriliˈjeːvo|S|art|5|Il bassorilievo sulla stele funeraria.|El bajorrelieve sobre la estela funeraria.|g=m;p=bassorilievi
rilievo (arte)|relieve|riˈljeːvo|S|art|4|Un rilievo a tutto tondo.|Un relieve a bulto redondo.|g=m;p=rilievi
tutto tondo|bulto redondo|ˈtutto ˈtondo|L|art|5|La scultura a tutto tondo.|La escultura a bulto redondo.
modello (arte)|modelo|moˈdɛllo|S|art|4|Il modello in gesso dello scultore.|El modelo en yeso del escultor.|g=m;p=modelli
campitura|campo de color|kamˈpiːtura|S|art|5|La campitura piatta dorata.|El campo de color dorado plano.|g=f;p=campiture
velatura|veladura|velaˈtuːra|S|art|5|La velatura a olio sul paesaggio.|La veladura al óleo sobre el paisaje.|g=f;p=velature
spatolato|espátula|spaˈtolaːto|S|art|5|Lo spatolato della superficie.|El espátula de la superficie.|g=m;p=spatolati
chiaroscuro|claroscuro|kjaˈroskuro|S|art|4|Il chiaroscuro caravaggesco.|El claroscuro caravaggesco.|g=m;p=chiaroscuri;n=Falso amigo parcial: non "claro-oscuro" qualsiasi
sfumato|esfumado|sfuˈmaːto|S|art|4|Lo sfumato leonardesco della Gioconda.|El esfumado leonardesco de la Gioconda.|g=m;p=sfumati
prospettiva aerea|perspectiva aérea|prospetˈtiːva aˈɛːrea|L|art|5|La prospettiva aerea della Vergine delle rocce.|La perspectiva aérea de la Virgen de las rocas.
pentimento|arrepentimiento|penˈtimento|S|art|5|Il pentimento rivela un primo abbozzo.|El arrepentimiento revela un primer esbozo.|g=m;p=pentimenti
abbozzo|esbozo|abˈbɔttsо|S|art|4|L'abbozzo a carboncino.|El esbozo a carboncillo.|g=m;p=abbozzi
carboncino|carboncillo|karbonˈtʃiːno|S|art|4|Il ritratto a carboncino.|El retrato a carboncillo.|g=m;p=carboncini
disegno preparatorio|dibujo preparatorio|diˈzeɲɲo preparaˈtorjo|L|art|5|Il disegno preparatorio per la pala d'altare.|El dibujo preparatorio para la tabla de altar.
cartone (arte)|cartón (dibujo)|karˈtoːne|S|art|5|Il cartone di Raffaello agli Uffizi.|El cartón de Rafael en los Uffizi.|g=m;p=cartoni
pala d'altare|retablo|ˈpaːla dalˈtare|L|art|4|La pala d'altare di Piero della Francesca.|El retablo de Piero della Francesca.
polittico|políptico|poˈlittiko|S|art|5|Il polittico di Antonello da Messina.|El políptico de Antonello da Messina.|g=m;p=polittici
trittico|tríptico|ˈtrittiko|S|art|4|Il trittico Portinari di Hugo van der Goes.|El tríptico Portinari de Hugo van der Goes.|g=m;p=trittici
dittico|díptico|ˈdittiko|S|art|5|Il dittico imperiale bizantino.|El díptico imperial bizantino.|g=m;p=dittici
madonnaro|madonnaro (pintor callejero)|madonˈnaːro|S|art|5|Il madonnaro di via Margutta.|El pintor callejero de via Margutta.|g=m;p=madonnari
pittore di corte|pintor de corte|pitˈtore di ˈkɔrte|L|art|5|Il pittore di corte dei Gonzaga.|El pintor de corte de los Gonzaga.
mecenate|mecenas|me tʃeˈnaːte|S|art|4|Il mecenate dei pittori rinascimentali.|El mecenas de los pintores renacentistas.|g=m;p=mecenate
mecenatismo|mecenazgo|me tʃenaˈtizmo|S|art|5|Il mecenatismo dei banchieri fiorentini.|El mecenazgo de los banqueros florentinos.|g=m
bottega (arte)|taller (bottega)|botˈtɛɡɡa|S|art|4|La bottega del Verrocchio.|El taller del Verrocchio.|g=f;p=botteghe
catalogo ragionato|catálogo razonado|kataˈloɡo radʒoˈnato|L|art|5|Il catalogo ragionato dell'opera completa.|El catálogo razonado de la obra completa.
attribuzione|atribución|attribuˈtsjone|S|art|5|L'attribuzione del dipinto al Caravaggio.|La atribución del cuadro al Caravaggio.|g=f;p=attribuzioni
falsificazione|falsificación|falsifikaˈtsjone|S|art|4|La falsificazione di un Modigliani.|La falsificación de un Modigliani.|g=f;p=falsificazioni
allestimento|montaje|allestiˈmento|S|art|4|L'allestimento della mostra sul Futurismo.|El montaje de la exposición sobre el Futurismo.|g=m;p=allestimenti
curatore (mostra)|comisario|kuraˈtore|S|art|4|Il curatore della Biennale.|El comisario de la Bienal.|g=m;p=curatori
vernissage|inauguración (vernissage)|verniˈssaʒ|S|art|4|Il vernissage della collettiva.|La inauguración de la colectiva.|g=m;n=Gallicismo
collettiva|colectiva|kolletˈtiːva|S|art|4|La collettiva dei giovani artisti.|La colectiva de los jóvenes artistas.|g=f;p=collettive
personale|individual (exposición)|persoˈnale|S|art|4|La personale di un pittore esordiente.|La individual de un pintor novato.|g=f;p=personali
allestire|montar (exposición)|allestiˈre|V|art|4|Hanno allestito la mostra in sei giorni.|Han montado la exposición en seis días.
saccheggio|saqueo|sakkedˈdʒo|S|art|5|Il saccheggio dei Beni culturali in guerra.|El saqueo de los Bienes culturales en guerra.|g=m;p=saccheggi
restauratore|restaurador|restauraˈtore|S|art|4|Il restauratore ha pulito la lacca.|El restaurador ha limpiado el barniz.|g=m;p=restauratori
pulitura|limpieza (restauro)|puliˈtuːra|S|art|5|La pulitura della patina scura.|La limpieza de la pátina oscura.|g=f;p=puliture
lacca|barniz|ˈlakka|S|art|5|La lacca ingiallita dal tempo.|El barniz amarillento por el tiempo.|g=f;p=lacche
patina|pátina|paˈtiːna|S|art|4|La patina del bronzo antico.|La pátina del bronce antiguo.|g=f;p=patine
stuccatura|estucado|stukkaˈtuːra|S|art|5|La stuccatura delle crepe sul muro.|El estucado de las grietas en la pared.|g=f;p=stuccature
consolidamento|consolidación|konsoliˈdamento|S|art|5|Il consolidamento dell'intonaco staccato.|La consolidación del intonaco desprendido.|g=m;p=consolidamenti
scrostamento|desconchado|skrostaˈmento|S|art|5|Lo scrostamento della tinta.|El desconchado de la pintura.|g=m;p=scrostamenti
tarsia|taracea|tarˈsiːa|S|art|5|Le tarsie del coro di Orvieto.|Las taraceas del coro de Orvieto.|g=f;p=tarsie
commesso fiorentino|mosaico florentino|komˈmesso fiorenˈtino|L|art|5|Il commesso fiorentino di pietre dure.|El mosaico florentino de piedras duras.
pietre dure|piedras duras|ˈpjɛtre ˈduːre|L|art|5|Il mosaico a pietre dure dei Medici.|El mosaico de piedras duras de los Médici.
tessera (mosaico)|tesela|ˈtɛssera|S|art|5|Le tessere vitree del mosaico bizantino.|Las teselas vítreas del mosaico bizantino.|g=f;p=tessere
scagliola|escayola (imitación)|skaʎˈʎoːla|S|art|5|La scagliola dei tavoli petriani.|La escayola de las mesas petranas.|g=f
# ══ architettura ══
pianta (edificio)|planta (edificio)|ˈpjanta|S|art|4|La pianta centrale del Pantheon.|La planta central del Panteón.|g=f;p=piante
pianta basilicale|planta basilical|ˈpjanta baziliˈkale|L|art|5|La pianta basilicale a tre navate.|La planta basilical de tres naves.
navata|nave (arquitectura)|naˈvaːta|S|art|4|La navata centrale gotica.|La nave central gótica.|g=f;p=navate
abside|ábside|ˈabside|S|art|4|L'abside affrescata da Giotto.|El ábside pintado al fresco por Giotto.|g=f;p=absidi
transetto|crucero|tranˈsɛtto|S|art|4|Il transetto a bracci uguali.|El crucero de brazos iguales.|g=m;p=transetti
cripta|cripta|ˈkripta|S|art|4|La cripta di San Zeno.|La cripta de San Zeno.|g=f;p=cripte
matroneo|tribuna (matroneo)|matroˈneːo|S|art|5|Il matroneo della cattedrale.|La tribuna de la catedral.|g=m;p=matronei
loggiato|loggia|lodˈdʒaːto|S|art|4|Il loggiato rinascimentale del cortile.|La loggia renacentista del patio.|g=m;p=loggiati
loggia|logia|ˈlɔddʒa|S|art|4|La loggia dei Lanzi.|La logia de los Lanzi.|g=f;p=logge
archivolto|arquivolto|arkiˈvolto|S|art|5|L'archivolto strombato del portale.|El arquivolto achaflanado del portal.|g=m;p=archivolti
strombatura|chaflán|strombaˈtuːra|S|art|5|La strombatura del portale romanico.|El chaflán del portal románico.|g=f;p=strombature
rosone|rosetón|roˈzoːne|S|art|4|Il rosone di Notre-Dame.|El rosetón de Notre-Dame.|g=m;p=rosomi
protiro|pórtico (protiro)|proˈtiːro|S|art|5|Il protiro di San Zeno a Verona.|El pórtico de San Zeno en Verona.|g=m;p=protiri
battistero|baptisterio|battiˈstɛːro|S|art|4|Il battistero di Pisa.|El baptisterio de Pisa.|g=m;p=battisteri
chiostro|claustro|ˈklɔstro|S|art|4|Il chiostro benedettino.|El claustro benedictino.|g=m;p=chiostri
sacrestia|sacristía|sakreˈstiːa|S|art|4|La sacrestia delle messe pontificali.|La sacristía de las misas pontificales.|g=f;p=sacrestie
pulpito|púlpito|pulˈpiːto|S|art|4|Il pulpito di Nicola Pisano.|El púlpito de Nicola Pisano.|g=m;p=pulpiti
contrafforte|contrafuerte|kontrafˈfɔrte|S|art|5|I contrafforti della cupola.|Los contrafuertes de la cúpula.|g=m;p=contrafforti
arco rampante|arbotante|ˈarko ramˈpante|L|art|5|Gli archi rampanti gotici.|Los arbotantes gótici.
capriata|cercha|kapriˈaːta|S|art|5|La capriata lignea del tetto.|La cercha de madera del tejado.|g=f;p=capriate
volta a botte|bóveda de cañón|ˈvolta a ˈbotte|L|art|4|La volta a botte della navata.|La bóveda de cañón de la nave.
volta a crociera|bóveda de crucería|ˈvolta a kroˈtʃjɛːra|L|art|5|La volta a crociera ribassata.|La bóveda de crucería rebajada.
costolone|nervadura|kostoˈloːne|S|art|5|I costoloni della volta gotica.|Las nervaduras de la bóveda gótica.|g=m;p=costoloni
lanterna (architettura)|linterna|lanˈtɛrna|S|art|5|La lanterna della cupola del Brunelleschi.|La linterna de la cúpula de Brunelleschi.|g=f;p=lanterne
tiburio|cimborrio|tiˈbuːrjo|S|art|5|Il tiburio romanico lombardo.|El cimborrio románico lombardo.|g=m;p=tiburii
serliana|serliana|serliˈaːna|S|art|5|La serliana palladiana.|La serliana palladiana.|g=f;p=serliane
ordine gigante|orden gigante|ˈordine ˈdʒiɡante|L|art|5|L'ordine gigante del palazzo Farnese.|El orden gigante del palacio Farnese.
bugnato|almohadillado|buɲˈɲaːto|S|art|4|Il bugnato rustico del piano terra.|El almohadillado rústico de la planta baja.|g=m;p=bugnati
rustico (bugnato)|despiezado|ruˈstiko|A|art|5|Il bugnato rustico a punta di diamante.|El almohadillado despiezado en punta de diamante.
quadratura|cuadratura|kwadraˈtuːra|S|art|5|La quadratura prospettica del soffitto.|La cuadratura perspectívica del techo.|g=f;p=quadrature
quadraturista|cuadraturista|kwadratuˈrista|S|art|5|Il quadraturista finto architetto.|El cuadraturista de falsa arquitectura.|g=m;p=quadraturisti
trompe-l'œil|trampantojo|trɔmˈplœj|S|art|4|Un trompe-l'œil nella falsa loggia.|Un trampantojo en la falsa logia.|g=m;n=Gallicismo
finto marmo|mármol falso|ˈfinto ˈmarmo|L|art|5|Il finto marmo dell'intonaco.|El mármol falso del revoque.
scagliolista|escayolista|skaʎʎoˈlista|S|art|5|Lo scagliolista ligure settecentesco.|El escayolista ligur del setecientos.|g=m;p=scagliolisti
`, "C1", "k-x38");
