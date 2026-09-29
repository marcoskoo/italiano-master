import { parsePack } from "./compact";
import type { VocabWord } from "../types";

/* ── Pack K·X32 · filosofia e pensiero (C1) ──────────── */

export const PACK_KX32: VocabWord[] = parsePack(`
# ══ pensiero ══
dialettica|dialéctica|dialelˈletika|S|ast|4|La dialettica hegeliana: tesi e antitesi.|La dialéctica hegeliana: tesis y antítesis.|g=f
ente|ente|ˈɛnte|S|ast|5|L'ente e l'essenza in Tommaso d'Aquino.|El ente y la esencia en Tomás de Aquino.|g=m;p=enti
accidente|accidente (filosófico)|attʃiˈdɛnte|S|ast|5|I nove accidenti della sostanza.|Los nueve accidentes de la sustancia.|g=m;p=accidenti
causalità|causalidad|kausaˈlita|S|ast|4|Il principio di causalità.|El principio de causalidad.|g=f
finalismo|finalismo|finaliˈzmo|S|ast|5|Il finalismo teleologico della natura.|El finalismo teleológico de la naturaleza.|g=m;p=finalismi
determinismo|determinismo|determiniˈzmo|S|ast|4|Il determinismo laplaciano.|El determinismo laplaciano.|g=m
libero arbitrio|libre albedrío|ˈlibero arˈbittrjo|L|ast|4|Il dilemma del libero arbitrio.|El dilema del libre albedrío.
immanenza|inmanencia|immaˈnentsa|S|ast|5|L'immanenza dello spirito nella storia.|La inmanencia del espíritu en la historia.|g=f
trascendenza|trascendencia|tranʃʃenˈdentsa|S|ast|4|La trascendenza del noumeno.|La trascendencia del nóumeno.|g=f
noumeno|nóumeno|noˈumeno|S|ast|5|Il noumeno inaccessibile alla conoscenza.|El nóumeno inaccesible al conocimiento.|g=m;p=noumeni
apparenza|apariencia|apparˈrentsa|S|ast|4|L'apparenza inganna i sensi.|La apariencia engaña a los sentidos.|g=f;p=apparenze
realtà|realidad|realˈta|S|ast|2|La realtà come costruzione sociale.|La realidad como construcción social.|g=f;p=realtà
apparire|aparecer|appaˈrire|V|ast|3|Le cose non sono come appaiono.|Las cosas no son como aparecen.
illusione dei sensi|ilusión de los sentidos|illuˈzjone dei ˈsensi|L|ast|5|L'illusione dei sensi nel pensiero barocco.|La ilusión de los sentidos en el pensamiento barroco.
soggettivo|subjetivo|sodʒetˈtivo|A|ast|3|Un giudizio soggettivo, non oggettivo.|Un juicio subjetivo, no objetivo.
oggettivo|objetivo|odʒetˈtivo|A|ast|3|La descrizione più oggettiva possibile.|La descripción más objetiva posible.
intersoggettivo|intersubjetivo|intersodʒetˈtivo|A|ast|5|La validità intersoggettiva della scienza.|La validez intersubjetiva de la ciencia.|r=tec
relativismo|relativismo|relativiˈzmo|S|ast|4|Il relativismo culturale e etico.|El relativismo cultural y ético.|g=m
assolutismo|absolutismo|assolutiˈzmo|S|ist|4|L'assolutismo illuminato di Federico II.|El absolutismo ilustrado de Federico II.|g=m
scetticismo|escepticismo|ʃʃettiˈtʃizmo|S|ast|4|Lo scetticismo di Pirrone.|El escepticismo de Pirrón.|g=m
stoicismo|estoicismo|stoiˈtʃizmo|S|ast|4|Lo stoicismo di Marco Aurelio.|El estoicismo de Marco Aurelio.|g=m
epicureismo|epicureísmo|epikureˈizmo|S|ast|5|L'epicureismo e il giardino.|El epicureísmo y el jardín.|g=m
edonismo|hedonismo|edoˈnizmo|S|ast|4|L'edonismo consumistico contemporaneo.|El hedonismo consumista contemporáneo.|g=m
utilitarismo|utilitarismo|utilitaˈrizmo|S|ast|4|L'utilitarismo di Bentham e Mill.|El utilitarismo de Bentham y Mill.|g=m
empirismo|empirismo|empiriˈzmo|S|ast|4|L'empirismo inglese di Locke.|El empirismo inglés de Locke.|g=m
razionalismo|racionalismo|rattsonaliˈzmo|S|ast|4|Il razionalismo cartesiano.|El racionalismo cartesiano.|g=m
illuminismo|ilustración|illumiˈnizmo|S|ast|3|L'illuminismo napoletano di Genovesi.|La ilustración napolitana de Genovesi.|g=m;n=In italiano "ilustración" = illuminismo, non "ilustración" spagnola
positivismo|positivismo|pozitiˈvizmo|S|ast|4|Il positivismo di Comte.|El positivismo de Comte.|g=m
irrazionalismo|irracionalismo|irrattsonaliˈzmo|S|ast|5|L'irrazionalismo di fine Ottocento.|El irracionalismo de finales del XIX.|g=m
esistenzialismo|existencialismo|ezistenˈtsjalizmo|S|ast|4|L'esistenzialismo è un umanesimo.|El existencialismo es un humanismo.|g=m
strutturalismo|estructuralismo|strutturaliˈzmo|S|ast|4|Lo strutturalismo di Lévi-Strauss.|El estructuralismo de Lévi-Strauss.|g=m
decostruzione|deconstrucción|dekostruˈtsjone|S|ast|5|La decostruzione derridiana del logos.|La deconstrucción derridiana del logos.|g=f
ermeneutica filosofica|hermenéutica filosófica|ermeneuˈtika filoˈzɔfika|L|ast|5|L'ermeneutica filosofica del Novecento.|La hermenéutica filosófica del siglo XX.
fenomenologia|fenomenología|fenomenoˈlɔdʒia|S|ast|4|La fenomenologia di Husserl.|La fenomenología de Husserl.|g=f
assurdo|absurdo|asˈsurdo|S|ast|4|L'assurdo camusiano della condizione umana.|El absurdo camusiano de la condición humana.|g=m;p=assurdi
rivolta|revuelta|rivolˈta|S|ast|3|La rivolta come risposta all'assurdo.|La revuelta como respuesta al absurdo.|g=f;p=rivolte
nichilismo|nihilismo|nikiliˈzmo|S|ast|4|Il nichilismo europeo secondo Nietzsche.|El nihilismo europeo según Nietzsche.|g=m
oltreuomo|superhombre|oltreˈuːomo|S|ast|5|L'oltreuomo della Gaia scienza.|El superhombre de la gaya ciencia.|g=m;n=Tradizione: "superommo" errato → "oltreuomo" e "superuomo"
superuomo|superhombre|suˈperuːomo|S|ast|4|Il superuomo nietzscheano.|El superhombre nietzscheano.|g=m;p=superuomini
eterno ritorno|eterno retorno|etˈtɛrno ritˈtorno|L|ast|5|L'eterno ritorno dell'identico.|El eterno retorno de lo idéntico.
volontà di potenza|voluntad de poder|volonˈta di poˈtentsa|L|ast|5|La volontà di potenza come divenire.|La voluntad de poder como devenir.
divenire|devenir|diveˈnire|S|ast|5|Il divenire eracliteo contro l'essere parmenideo.|El devenir heraclíteo contra el ser parmenídeo.|g=m
nulla|nada|ˈnul a|S|ast|3|Il problema dell'essere e del nullaIl problema dell'essere e del nulla.|El problema del ser y de la nada.|g=m
ontologia fondamentale|ontología fundamental|ontoˈlɔdʒia fundamenˈtale|L|ast|5|L'ontologia fondamentale di Heidegger.|La ontología fundamental de Heidegger.
esserci|ahí (Dasein)|esˈsertʃi|S|ast|5|L'esserci gettato nel mondo.|El Dasein arrojado al mundo.|g=m;n=Traduzione italiana del Dasein heideggeriano
gettatezza|arrojamiento|get tatˈtetsa|S|ast|5|La gettatezza come condizione umana.|El arrojamiento como condición humana.|g=f
analitica esistenziale|analítica existencial|anaˈlitika ezistenˈtsjale|L|ast|5|L'analitica esistenziale di Essere e tempo.|La analítica existencial de Ser y tiempo.
inautentico|inauténtico|inautenˈtiko|A|ast|5|L'esistenza inautentica del si.|La existencia inauténtica del se.|r=tec
si (impersonale)|se (impersonal)|si|P|ast|4|Nel «si dice» si perde l'autenticità.|En el «se dice» se pierde la autenticidad.
alienazione|alienación|alienatˈtsjone|S|ast|4|L'alienazione del lavoro industriale.|La alienación del trabajo industrial.|g=f
feticismo|fetichismo|fetiˈtʃizmo|S|ast|5|Il feticismo della merce in Marx.|El fetichismo de la mercancía en Marx.|g=m
sovrastruttura|superestructura|sovrast rutˈtura|S|ast|5|La sovrastruttura ideologica sulla base economica.|La superestructura ideológica sobre la base económica.|g=f
plusvalore|plusvalía|plusvaˈlore|S|fin|5|Il plusvalore come lavoro non pagato.|La plusvalía como trabajo no pagado.|g=m;p=plusvalori
lotta di classe|lucha de clases|ˈlɔtta di ˈklasse|L|ast|4|La lotta di classe come motore della storia.|La lucha de clases como motor de la historia.
materialismo storico|materialismo histórico|materiaˈlizmo ˈstɔrico|L|ast|4|Il materialismo storico marxista.|El materialismo histórico marxista.
prassi|praxis|ˈprassi|S|ast|5|La prassi rivoluzionaria in Gramsci.|La praxis revolucionaria en Gramsci.|g=f
egemonia|hegemonía|eɡeˈmonja|S|ast|4|L'egemonia culturale del blocco storico.|La hegemonía cultural del bloque histórico.|g=f
blocco storico|bloque histórico|ˈblɔkko ˈstɔrico|L|ast|5|Il blocco storico gramsciano.|El bloque histórico gramsciano.
intellettuale organico|intelectual orgánico|intelletˈtuale orˈɡaniko|L|pro|5|L'intellettuale organico del movimento.|El intelectual orgánico del movimiento.
società civile|sociedad civil|sotʃeˈta tʃiˈvile|L|ast|3|La società civile come trincea gramsciana.|La sociedad civil como trinchera gramsciana.
subalterno|subalterno|subalˈtɛrno|S|ast|5|Le classi subalterne nella storia d'Italia.|Las clases subalternas en la historia de Italia.|g=m;p=subalterni
subalternità|subalternidad|subalterˈnita|S|ast|5|La subalternità studiata da Gramsci.|La subalternidad estudiada por Gramsci.|g=f
senso comune|sentido común|ˈsenso ˈkomune|L|ast|3|Il senso comune come folklore filosofico.|El sentido común como folklore filosófico.
buon senso|buen sentido|ˌbwɔn ˈsenso|L|ast|4|Il buon senso contro i pregiudizi.|El buen sentido contra los prejuizi.|n=Diferente de "senso comune": más individual
tabula rasa|tabula rasa|ˈtabula ˈraːza|L|ast|4|La mente come tabula rasa in Locke.|La mente como tabula rasa en Locke.|r=let
innatismo|innatismo|innaˈtizmo|S|ast|5|L'innatismo delle idee cartesiane.|El innatismo de las ideas cartesianas.|g=m
categoria|categoría|kateˈɡorja|S|ast|4|Le dodici categorie dell'intelletto.|Las doce categorías del entendimiento.|g=f;p=categorie
giudizio sintetico a priori|juicio sintético a priori|dʒudiˈtsjo sinteˈtiko a priˈɔri|L|ast|5|Il giudizio sintetico a priori kantiano.|El juicio sintético a priori kantiano.
imperativo categorico|imperativo categórico|imperaˈtivo kategoˈriko|L|ast|5|L'imperativo categorico dell'etica kantiana.|El imperativo categórico de la ética kantiana.
imperativo ipotetico|imperativo hipotético|imperaˈtivo ipoteˈtiko|L|ast|5|L'imperativo ipotetico è strumentale.|El imperativo hipotético es instrumental.
ragion pratica|razón práctica|raddʒoˈne ˈprattika|L|ast|5|La ragion pratica e la legge morale.|La razón práctica y la ley moral.
legge morale|ley moral|ˈledʒe ˈmɔrale|L|ast|5|«Il cielo stellato sopra di me e la legge morale in me».|«El cielo estrellado sobre mí y la ley moral en mí».
monade|mónada|moˈnade|S|ast|5|Le monadi come punti metafisici.|Las mónadas como puntos metafísicos.|g=f;p=monadi
armonia prestabilita|armonía preestablecida|armoˈnia pre-stabilita|L|ast|5|L'armonia prestabilita di Leibniz.|La armonía preestablecida de Leibniz.
ottimo possibile|mejor de los mundos posibles|ˈɔttimo possiˈbile|L|ast|5|Viviamo nell'ottimo dei mondi possibili?|¿Vivimos en el mejor de los mundos posibles?
teodicea|teodicea|teodiˈtʃeːa|S|ast|5|La teodicea di Leibniz sul male.|La teodicea de Leibniz sobre el mal.|g=f
male (metafisico)|mal (metafísico)|ˈmale metafiˈziko|L|ast|5|Il problema del male nella teodicea.|El problema del mal en la teodicea.
libertà (filosofica)|libertad (filosófica)|liberˈta filosoˈfika|L|ast|4|La libertà come autonomia morale.|La libertad como autonomía moral.
autonomia della volontà|autonomía de la voluntà|autoˈnɔmia della volonˈta|L|ast|5|L'autonomia della volontà in Kant.|La autonomía de la voluntad en Kant.
eteronomia|heteronomía|eteroˈnɔmia|S|ast|5|L'eteronomia delle inclinazioni.|La heteronomía de las inclinaciones.|g=f
buona volontà|buena voluntà|ˈbwɔna volonˈta|L|ast|5|Nulla è buono senza buona volontà.|Nada es bueno sin buena voluntad.
dovere morale|deber moral|doˈvere moˈrale|L|ast|5|Il dovere morale come necessità oggettiva.|El deber moral como necesidad objetiva.
utilità|utilidad|utiˈlita|S|ast|4|La massima utilità per il maggior numero.|La máxima utilidad para el mayor número.|g=f
sommo bene|sumo bien|ˈsommo ˈbjɛne|L|ast|5|Il sommo bene come fine ultimo.|El sumo bien como fin último.
felicità|felicidad|feliˈtʃitta|S|emo|3|La ricerca della felicità come diritto.|La búsqueda de la felicidad como derecho.|g=f
`, "C1", "k-x32");
