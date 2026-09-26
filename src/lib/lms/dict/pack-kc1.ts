import { parsePack } from "./compact";
import type { VocabWord } from "../types";

/* ── Pack K·C1-a · registro formal, discurso y abstracción (MCER C1) ── */

export const PACK_KC1: VocabWord[] = parsePack(`
# ══ verbi del discorso colto ══
esaltare|exaltar|ezaˈltare|V|cmu|3|La critica esalta il romanzo d'esordio.|La crítica exalta la novela debut.|a=biasimare
diffamare|difamar|difˈfamare|V|ist|4|Fu diffamato dalla stampa scandalistica.|Fue difamado por la prensa del corazón.
screditare|desacreditar|skrediˈtare|V|cmu|4|Le accuse servivano a screditarlo.|Las acusaciones servían para desacreditarlo.
minimizzare|minimizar|minimitˈtsare|V|cmu|3|Il governo minimizza la crisi.|El gobierno minimiza la crisis.|a=massimizzare
massimizzare|maximizar|massimitˈtsare|V|fin|4|Massimizzare i profitti a breve termine.|Maximizar las ganancias a corto plazo.|a=minimizzare
puntualizzare|precisar|puntwalitˈtsare|V|cmu|4|Puntualizzo un dettaglio importante.|Preciso un detalle importante.|r=for
delimitare|delimitar|delimiˈtare|V|ast|4|Delimitiamo il campo dell'indagine.|Delimitamos el campo de la investigación.
interagire|interactuar|interaˈdʒire|V|sci|3|I due sistemi interagiscono in tempo reale.|Los dos sistemas interactúan en tiempo real.|n=Io interagisco (tipo -isc)
mediare|mediar|meˈdjaɾe|V|cmu|4|L'ONU media tra le due parti.|La ONU media entre las dos partes.|c=mediare tra
moderare|moderar|modeˈrare|V|cmu|3|Modera la discussione con equilibrio.|Modera la discusión con equilibrio.
scomporre|descomponer|skomˈporre|V|sci|4|Scomponiamo il problema in parti.|Descomponemos el problema en partes.|a=comporre
rielaborare| reelaborar|rielaboˈrare|V|sci|4|Rielaboro il testo dopo i feedback.|Reelaboro el texto tras los comentarios.
rivedere|revisar|riˈvedere|V|ast|3|Rivedo il contratto col legale.|Reviso el contrato con el abogado.|n=Io rivedo; participio rivisto;c=rivedere le proprie posizioni
rettifica|rectificación|retˈtifika|S|ast|5|Una rettifica doverosa sul pezzo di ieri.|Una rectificación necesaria sobre el artículo de ayer.|g=f;p=rettifiche
emanare|emanar|emaˈnare|V|ist|5|Il ministero emana la circolare.|El ministerio emana la circular.|r=for
accertare|acreditar (constatar)|attʃerˈtare|V|ist|5|Si accerta la verità dei fatti.|Se constata la verdad de los hechos.|r=for
presupporre|presuponer|presupˈpɔrre|V|sci|5|L'articolo presuppone una conoscenza base.|El artículo presupone un conocimiento base.|n=Io presuppongo; participio presupposto
indurre|inducir|inˈdudere|V|sci|4|Le prove inducono a quella conclusione.|Las pruebas inducen a esa conclusión.|c=indurre qualcuno a fare;n=Io induco; participio indotto
enunciare|enunciar|enuˈntʃjare|V|sci|5|Enuncia il principio con chiarezza.|Enuncia el principio con claridad.|r=tec

# ══ connettivi e avverbi colti ══
semmai|acaso / más bien|semˈmai|D|cnn|3|Non mi lamento, semmai il contrario.|No me quejo, más bien lo contrario.
oramai|ya (para entonces)|oraˈmai|D|tmp|2|Oramai è tardi per ripensarci.|Ya es tarde para repensarlo.|s=ormai;n=Ya para entonces: oramai dodici anni fa
ormai|ya (en este punto)|orˈmai|D|tmp|2|Ormai lo sanno tutti.|Ya lo saben todos.|s=oramai
difatti|de hecho|diˈfatti|D|cnn|4|Difatti, il piano ha funzionato.|De hecho, el plan funcionó.|s=infatti
ogniqualvolta|cada vez que|oɲɲikwalˈvolta|C|cnn|5|Ogniqualvolta torno, trovo cambiamenti.|Cada vez que vuelvo, encuentro cambios.|r=let
a dire il vero|a decir verdad|a diˈre il ˈvero|L|cnn|4|A dire il vero, me lo aspettavo.|A decir verdad, me lo esperaba.
tra l'altro|entre otras cosas|tra lˈaltro|L|cnn|3|Tra l'altro, ho vinto anche un premio.|Entre otras cosas, gané también un premio.
in linea di massima|en líneas generales|in ˈlinea di ˈmassima|L|ast|4|In linea di massima, sono d'accordo.|En líneas generales, estoy de acuerdo.
a grandi linee|a grandes rasgos|a ˈgrandi ˈlinje|L|ast|4|Raccontami la trama a grandi linee.|Cuéntame la trama a grandes rasgos.
grosso modo|burro de manga... aproximadamente|ˈɡrosso ˈmɔdo|L|ast|4|Grosso modo, ci vorranno due ore.|Aproximadamente, tomará dos horas.|n=Expresión culta muy usada; nunca "grosso modo" con otro sentido
a titolo di|a título de|a ˈtitolo di|L|ast|5|A titolo di esempio, cito due casi.|A título de ejemplo, cito dos casos.|r=for
a onor del vero|a decir verdad (honor)|a oˈnɔr del ˈvero|L|cnn|5|A onor del vero, aveva avvisato.|Siendo justos, había avisado.|r=let

# ══ astratti avanzati ══
sfumatura|matiz|sfumaˈtura|S|ast|3|Una sfumatura importante di significato.|Un matiz importante de significado.|g=f;p=sfumature
entità|magnitud (entidad)|enˈtita|S|ast|5|Non capiamo l'entità del danno.|No entendemos la magnitud del daño.|g=f;n=Invariable; anche "organismo": un'entità statale
estensione|extensión|estenˈsjone|S|ast|4|L'estensione dell'incendio preoccupa.|La extensión del incendio preocupa.|g=f;p=estensioni
vincolo|vínculo|viŋcolo|S|ast|3|Vincoli di bilancio stringenti.|Vínculos presupuestarios estrictos.|g=m;p=vincoli
vincolare|vincular|vinˈkolare|V|ast|4|Il mutuo vincola le scelte future.|El crédito vincula las elecciones futuras.
legame|lazo|leˈɡame|S|rel|2|Un legame profondo tra le due città.|Un lazo profundo entre las dos ciudades.|g=m;p=legami
connessione|conexión|konneʃˈʃjone|S|ast|3|La connessione tra i due fatti non è casuale.|La conexión entre los dos hechos no es casual.|g=f;p=connessioni
coerenza|coherencia|koeˈrentsa|S|ast|4|La coerenza interna del saggio è notevole.|La coherencia interna del ensayo es notable.|g=f;a=incoerenza
pertinenza|pertinencia|pertinenza|S|ast|5|Un intervento di grande pertinenza.|Una intervención de gran pertinencia.|g=f;p=pertinenze
pertinente|pertinente|pertiˈnɛnte|A|ast|4|Una domanda pertinente e profonda.|Una pregunta pertinente y profunda.|a=impertinente
eterogeneo|heterogéneo|eteroˈdʒɛneo|A|ast|4|Un pubblico eterogeneo e curioso.|Un público heterogéneo y curioso.
omogeneo|homogéneo|omoˈdʒɛneo|A|ast|4|Un gruppo omogeneo per età.|Un grupo homogéneo por edad.|a=eterogeneo
divario|brecha|diˈvarjo|S|ist|4|Il divario tra nord e sud cresce.|La brecha entre norte y sur crece.|g=m;p=divari;c=divario sociale
scarto|diferencia (descarte)|ˈskarto|S|fin|4|Uno scarto di prezzo inspiegabile.|Una diferencia de precio inexplicable.|g=m;p=scarti
analogia|analogía|anaˈlodʒia|S|sci|4|Un'analogia illuminante tra i due sistemi.|Una analogía iluminante entre los dos sistemas.|g=f;p=analogie
analogo|análogo|aˈnalogo|A|ast|4|Un fenomeno analogo in Francia.|Un fenómeno análogo en Francia.
parità|igualdad (paridad)|paˈrita|S|ist|4|La parità salariale è ancora lontana.|La igualdad salarial aún está lejos.|g=f;n=Invariable
divergenza|divergencia|diverˈdʒentsa|S|ast|5|Divergenze profonde sulla strategia.|Divergencias profundas sobre la estrategia.|g=f
sinergia|sinergia|sinerˈdʒia|S|lav|5|Una sinergia vincente tra i reparti.|Una sinergia ganadora entre los departamentos.|g=f
ambiguità|ambigüedad|ambiɡwita|S|ast|5|L'ambiguità del testo è voluta.|La ambigüedad del texto es intencional.|g=f
risvolto|reverso|rizˈvolto|S|ast|5|Il risvolto oscuro del successo.|El reverso oscuro del éxito.|g=m;p=risvolti
retaggio|legado|reˈtaddʒo|S|att|5|Il retaggio greco nella cultura italiana.|El legado griego en la cultura italiana.|g=m;p=retaggi;r=let
sottofondo|trasfondo|sottoˈfondo|S|ast|5|Un sottofondo di malinconia nel romanzo.|Un trasfondo de melancolía en la novela.|g=m;p=sottofondi

# ══ economia e lavoro C1 ══
fiscale|fiscal|fiˈskale|A|fin|3|L'anno fiscale parte da luglio.|El año fiscal parte de julio.|c=evasione fiscale
reddito|ingreso (renta)|redˈdito|S|fin|2|Il reddito medio delle famiglie.|El ingreso medio de las familias.|g=m;p=redditi;c=reddito di cittadinanza
redditizio|rentable|reddiˈtitsjo|A|fin|5|Un investimento redditizio e sicuro.|Una inversión rentable y segura.
previdenza|previsión (social)|previˈdɛntsa|S|fin|4|La previdenza sociale in Italia.|La previsión social en Italia.|g=f;c= fondo pensione
sussidio|subsidio|susˈsidjo|S|fin|4|Il sussidio di disoccupazione.|El subsidio de desempleo.|g=m;p=sussidi
indennità|indemnización|indenˈnita|S|fin|4|L'indennità di malattia copre il 60%.|La indemnización por enfermedad cubre el 60%.|g=f;n=Invariable
liquidazione|liquidación|likwidaˈtsjone|S|fin|4|La liquidazione dell'azienda fu lunga.|La liquidación de la empresa fue larga.|g=f;p=liquidazioni
liquidare|liquidar|likwiˈdare|V|fin|4|Liquidarono l'attività in sei mesi.|Liquidaron el negocio en seis meses.|n=Anche "despedir" coloquiale: è stato liquidato
contributo|contribución|konˈtribwto|S|fin|3|I contributi pensionistici obbligatori.|Las contribuciones pensionarias obligatorias.|g=m;p=contributi
welfare|estado de bienestar|ˈwɛlfer|S|fin|4|Il welfare italiano tra crisi e riforme.|El estado de bienestar italiano entre crisis y reformas.|g=m;n=Anglicismo político, invariable
debito pubblico|deuda pública|deˈbito pubˈbliko|L|fin|4|Il debito pubblico supera il 140% del PIL.|La deuda pública supera el 140% del PIB.
spread|spread (diferencial)|sprɛd|S|fin|5|Lo spread BTP-Bund sale a 190 puntos.|El spread BTP-Bund sube a 190 puntos.|g=m;n=Anglicismo financiero italiano por excelencia;r=col
austerità|austeridad|austeriˈta|S|fin|5|Le politiche di austerità impopolari.|Las políticas de austeridad impopulares.|g=f
incasso|recaudación|inˈkasso|S|fin|4|Gli incassi del primo weekend.|La recaudación del primer fin de semana.|g=m;p=incassi
stanziamento|asignación presupuestaria|stantsiamento|S|fin|5|Uno stanziamento di due milioni per la ricerca.|Una asignación de dos millones para la investigación.|g=m
cassa integrazione|fondo de desempleo temporal|kassa integratˈtsjone|L|lav|5|In cassa integrazione fino a marzo.|En fondo de desempleo temporal hasta marzo.|n=Muy institucional italiano; sigla CIG
mobilità|movilidad (laboral)|mobilita|S|lav|4|È in mobilità dopo la chiusura.|Está en movilidad tras el cierre.|g=f;c=mobilità sostenibile

# ══ psico-social C1 ══
empatia|empatía|emˈpatia|S|emo|3|L'empatia si allena con l'ascolto.|La empatía se entrena con la escucha.|g=f
empatico|empático|emˈpatiko|A|emo|3|Un medico empatico cura meglio.|Un médico empático cura mejor.
indifferenza|indiferencia|indiffeˈrentsa|S|emo|3|L'indifferenza è la peggiore risposta.|La indiferencia es la peor respuesta.|g=f
disprezzo|desprecio|disˈprɛttso|S|emo|4|Parla dei rivali con disprezzo.|Habla de los rivales con desprecio.|g=m
umiliazione|humillación|umiljatˈtsjone|S|emo|4|Una umiliazione pubblica bruciante.|Una humillación pública ardiente.|g=f;p=umiliazioni
sollievo|alivio|solˈljɛvo|S|emo|3|Un sospiro di sollievo collettivo.|Un suspiro de alivio colectivo.|g=m
angoscia|angustia|anˈɡɔʃʃa|S|emo|4|L'angoscia della pagina bianca.|La angustia de la página en blanco.|g=f
turbare|turbar|turˈbare|V|emo|4|La notizia mi ha turbato.|La noticia me turbó.
sbalordire|dejar atónito|zbalorˈdire|V|emo|4|Il finale mi ha sbalordito.|El final me dejó atónito.|n=Io sbalordisco (tipo -isc)
stupore|asombro|stuˈpore|S|emo|4|Guardava il quadro con stupore.|Miraba el cuadro con asombro.|g=m
meraviglia|maravilla|meraˈviʎʎa|S|emo|2|Le meraviglie di Firenze.|Las maravillas de Florencia.|g=f;p=meraviglie;c=che meraviglia!
meraviglioso|maravilloso|meraviʎʎˈjɔzo|A|emo|2|Un tramonto meraviglioso sul mare.|Un atardecer maravilloso en el mar.
sconvolgere|conmocionar|skonvolˈdʒere|V|emo|4|La notizia ci ha sconvolti.|La noticia nos conmocionó.|n=Io sconvolgo; participio sconvolto
ostilità|hostilidad|ostilita|S|emo|4|L'ostilità del pubblico sugli ospiti.|La hostilidad del público hacia los invitados.|g=f;n=Invariable
ostacolo|obstáculo|oˈstakolo|S|ast|3|Superare gli ostacoli del percorso.|Superar los obstáculos del recorrido.|g=m;p=ostacoli
ostacolare|obstaculizar|ostakoˈlare|V|ast|4|Il maltempo ostacola i soccorsi.|El mal tiempo obstaculiza los rescates.
intralcio|estorbo|inˈtrattʃo|S|ast|5|La burocrazia è solo intralcio.|La burocracia es solo estorbo.|g=m;p=intralci
sottrarsi|sustraverse|sotˈtrarsi|V|ast|4|Non puoi sottrarti alle responsabilità.|No puedes sustraerte a las responsabilidades.|c=sottrarsi a
evasivo|evasivo|evaˈzivo|A|cmu|5|Risposte evasive alle domande chiave.|Respuestas evasivas a las preguntas clave.
severo|severo|seˈvero|A|emo|3|Un giudizio severo ma giusto.|Un juicio severo pero justo.|n=Severo anche = austero: un inverno severo
intransigente|intransigente|intranziˈdʒɛnte|A|emo|5|Un insegnante intransigente sugli orari.|Un maestro intransigente con los horarios.
spietato|despiadado|spjetaˈto|A|emo|4|Il mercato è spietato con i deboli.|El mercado es despiadado con los débiles.|r=let
atroce|atroz|aˈtrotʃe|A|emo|4|Un dolore atroce alla schiena.|Un dolor atroz en la espalda.
favorevole|favorable|favoˈrevole|A|ast|3|Le previsioni sono favorevoli.|Los pronósticos son favorables.|a=sfavorevole;c=parere favorevole
sfavorevole|desfavorable|sfavoreˈvole|A|ast|4|Un verdetto sfavorevole alla società.|Un veredicto desfavorable para la empresa.
scaltro|astuto|ˈskaltro|A|emo|4|Uno scaltro negoziatore fiorentino.|Un astuto negociador florentino.
acuto|agudo|aˈkuto|A|sci|4|Un'osservazione acuta e puntuale.|Una observación aguda y puntual.|n=Acuto anche = intenso: dolore acuto
sottile ka2b|sutil|sotˈtile|A|ast|3|Una distinzione sottile ma cruciale.|Una distinción sutil pero crucial.
sbrigativo|apresurado|zbriˈɡativo|A|emo|5|Una risposta sbrigativa e scortese.|Una respuesta apresurada y descortés.
meticoloso|meticuloso|metikoˈlozo|A|lav|4|Un restauro meticoloso di cinque anni.|Una restauración meticulosa de cinco años.

# ══ lessico colto e letterario ══
prosaico|prosaico|prozaˈiko|A|let|5|Una vita prosaica tra ufficio e casa.|Una vida prosaica entre oficina y casa.|r=let
poema|poema|poˈɛma|S|let|4|Il poema più lungo della letteratura italiana.|El poema más largo de la literatura italiana.|g=m;p=poemi
mito|mito|ˈmito|S|att|2|Il mito della bella vita romana.|El mito de la bella vida romana.|g=m;p=miti;n=Muy usado: il mito di Fasbender
leggenda|leyenda|ledˈdʒɛnda|S|att|2|La leggenda della fondazione di Roma.|La leyenda de la fundación de Roma.|g=f;p=leggende
leggendario|legendario|ledʒendaˈrjo|A|att|3|La velocità leggendaria del pony express.|La velocidad legendaria del pony express.
favola|fábula|faˈvola|S|let|3|Le favole di Esopo per i bambini.|Las fábulas de Esopo para niños.|g=f;p=favole
fiaba|cuento de hadas|ˈfjaba|S|let|3|Le fiabe dei fratelli Grimm.|Los cuentos de hadas de los hermanos Grimm.|g=f;p=fiabe
novella|novela corta|noˈvɛlla|S|let|4|Le novelle del Decameron.|Las novelas cortas del Decamerón.|g=f;p=novelle;r=let
parabola|parábola|paˈrabola|S|let|5|La parabola del figliol prodigo.|La parábola del hijo pródigo.|g=f;p=parabole
satira|sátira|saˈtira|S|let|4|La satira politica in TV.|La sátira política en TV.|g=f;p=satire
umorismo|humorismo|umoˈrizmo|S|let|3|L'umorismo inglese, asciutto e tagliente.|El humorismo inglés, seco y mordaz.|g=m
ironia|ironía|iroˈnia|S|cmu|3|L'ironia fine dello scrittore.|La ironía fina del escritor.|g=f
scrittura|escritura|skritˈtura|S|let|2|La scrittura autobiografica di Pavese.|La escritura autobiográfica de Pavese.|g=f
intreccio|trama (entramado)|inˈtretʃo|S|let|5|Un intreccio intricato ma credibile.|Un entramado enredado pero creíble.|g=m;p=intrecci
finale|final|fiˈnale|S|cin|3|Un finale a sorpresa discusso.|Un final a sorpresa discutido.|g=m;p=finali
citazionismo|cita-citas (citacionismo)|tʃitatˈtsjonizmo|S|let|5|Il citazionismo postmoderno del regista.|El citacionismo posmoderno del director.|g=m;r=tec

# ══ istituzionale e giuridico C1 ══
quesito|cuestión (interrogante)|kweˈzito|S|ast|5|Un quesito per la consulta popolare.|Una cuestión para la consulta popular.|g=m;p=quesiti;r=for
istanza|instancia|iˈstantsa|S|ist|5|Presentare un'istanza al tribunale.|Presentar una instancia al tribunal.|g=f;p=istanze;r=for
esposto|denuncia (escrito)|esˈpɔsto|S|ist|5|Firmare un esposto contro il rumore.|Firmar un escrito de denuncia contra el ruido.|g=m;p=esposti
delega|delegación|deˈleɡa|S|lav|4|Una delega amplia all'avvocato.|Una delegación amplia al abogado.|g=f;p=deleghe
procura|fiscalía|proˈkura|S|ist|5|La procura apre un fascicolo.|La fiscalía abre un expediente.|g=f;p=procure
fascicolo|expediente|faʃʃiˈkɔlo|S|ist|5|Il fascicolo dell'inchiesta è segretato.|El expediente de la investigación está secreto.|g=m;p=fascicoli
imputazione|cargo (imputación)|imputatˈtsjone|S|ist|5|L'imputazione di concussione.|El cargo de concusión.|g=f;p=imputazioni
concussione|concusión|konkusˈsjone|S|ist|5|Arrestato per concussione.|Arrestado por concusión.|g=f;n=Invariable;r=tec
archiviare|archivar|arkiˈvjare|V|ist|4|Il caso è stato archiviato.|El caso fue archivado.|c=archiviare un progetto
proscioglimento|absolución (sobreseimiento)|proʃʃolliˈmento|S|ist|5|Il proscioglimento con formula piena.|El sobreseimiento con fórmula plena.|g=m;r=tec
cassare|anular (casar)|kasˈsare|V|ist|5|La Cassazione cassa la sentenza.|La Casación anula la sentencia.|r=tec
transigente|transigente|tranziˈdʒɛnte|A|ist|5|Un atteggiamento transigente verso le richieste.|Una actitud transigente hacia las peticiones.
esimente|eximente|eziˈmente|S|ist|5|La legittima difesa come esimente.|La legítima defensa como eximente.|g=f;p=esimenti;r=tec
patteggiamento|juicio abreviado|patteʤʤamenˈto|S|ist|5|La condanna via patteggiamento.|La condena vía juicio abreviado.|g=m;r=tec
oblazione|oblación (pago)|oblatˈtsjone|S|ist|5|L'oblazione prevista dal verbale.|La oblación prevista en el acta.|g=f;r=tec
ipotesi di reato|hipótesis de delito|ipoˈtezi di reˈato|L|ist|5|È iscritto nell'elenco delle ipotesi di reato.|Está inscrito en la lista de hipótesis de delito.
frode|fraude|ˈfrɔde|S|fin|4|Una frode fiscale da un milione.|Un fraude fiscal de un millón.|g=f;p=frodi;c=frode elettorale
evasione fiscale|evasión fiscal|evaˈzjone ˈfiskale|L|fin|4|L'evasione fiscale costa miliardi.|La evasión fiscal cuesta miles de millones.
`, "C1", "k-c1");
