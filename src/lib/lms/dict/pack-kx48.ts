import { parsePack } from "./compact";
import type { VocabWord } from "../types";

/* ── Pack K·X48 · musica e teatro (C1) ──────────── */

export const PACK_KX48: VocabWord[] = parsePack(`
# ══ musica colta ══
partitura|partitura|partiˈtuːra|S|mus|4|La partitura manoscritta di Mahler.|La partitura manuscrita de Mahler.|g=f;p=partiture
chiave di basso|clave de fa|ˈkjaːve di ˈbasso|L|mus|5|La chiave di basso per il violoncello.|La clave de fa para el violonchelo.
battuta (musica)|compás|batˈtuːta|S|mus|4|Un tre quarti: tre battute per misura.|Un tres cuartos: tres compases por compás.|g=f;p=battute
tempo (musica)|tiempo (música)|ˈtɛmpo|S|mus|4|Il tempo di allegro con brio.|El tiempo de allegro con brio.|g=m;p=tempi
andante|andante|anˈdante|A|mus|5|Il secondo movimento andante.|El segundo movimiento andante.|n=Italianismo universal
adagio|adagio|aˈdadʒo|A|mus|4|L'adagio di Albinoni.|El adagio de Albinoni.|n=Italianismo universal
allegro con brio|alegro con brío|alˈleɡro kon ˈbriːo|L|mus|5|La sinfonia apre allegro con brio.|La sinfonía abre alegro con brío.
prestissimo|prestissimo|preˈstissimo|A|mus|5|Il finale prestissimo del concerto.|El final prestísimo del concierto.
crescendo|crescendo|kreˈʃʃendo|S|mus|4|Un crescendo di percussioni finale.|Un crescendo de percusión final.|g=m;n=Italianismo universal
diminuendo|diminuendo|diminuˈɛndo|S|mus|5|Il diminuendo fino al pianissimo.|El diminuendo hasta el pianissimmo → corregir.|g=m
pianissimo|pianissimo|piaˈnissimo|A|mus|5|Morendo in pianissimo al finale.|Muriendo en pianissimo al final.
fortissimo|fortissimo|forˈtissimo|A|mus|5|Il fortissimo degli ottoni.|El fortissimo de los metales.
solfeggio|solfeo|solˈfeddʒo|S|mus|4|Gli esercizi di solfeggio del conservatorio.|Los ejercicios de solfeo del conservatorio.|g=m;p=solfeggi
conservatorio|conservatorio|konservaˈtɔːrjo|S|stu|4|Il conservatorio Santa Cecilia di Roma.|El conservatorio Santa Cecilia de Roma.|g=m;p=conservatori
maestro (musica)|maestro|maˈɛstro|S|pro|3|Il maestro abbassa la bacchetta.|El maestro baja la batuta.|g=m;p=maestri
prima donna|prima donna|ˈprima ˈdɔnna|L|mus|4|La prima donna del teatro alla Scala.|La prima donna del teatro alla Scala.
mezzosoprano|mezzosoprano|ˌmeddzosoˈpraːno|S|mus|4|Il mezzosoprano verdiano della Carmen.|La mezzosoprano verdiana de la Carmen.|g=m;p=mezzosoprani
contralto|contralto|konˈtralto|S|mus|5|Il contralto profondo della messa da Requiem.|El contralto profundo de la misa de Réquiem.|g=m;p=contralti
basso (voce)|bajo (voz)|basso|S|mus|4|Il basso buffo del Barbiere.|El bajo cómico del Barbiere.|g=m;p=bassi
voce bianca|voz blanca|ˈvotʃe ˈbjaŋka|L|mus|5|Il coro di voci bianche della Sistina.|El coro de voces blancas de la Sixtina.
coro (musica)|coro|ˈkɔːro|S|mus|3|Il coro del Mefistofele dell'allestimento.|El coro del montaje.|g=m;p=cori
libretto (opera)|libreto|liˈbretto|S|mus|4|Il libretto scritto da Boito per Verdi.|El libreto escrito por Boito para Verdi.|g=m;p=libretti
aria (opera)|aria (ópera)|aˈria|S|mus|4|L'aria della follia nel Lucia.|El aria de la locura en la Lucia.|g=f;p=arie
recitativo|recitativo|retʃitaˈtiːvo|S|mus|5|Il recitativo secco col basso continuo.|El recitativo seco con el bajo continuo.|g=m;p=recitativi
ouverture|obertura|uvɛrˈtyr|S|mus|5|L'ouverture del Guglielmo Tell.|La obertura del Guillermo Tell.|g=f;n=Gallicismo
basso continuo|bajo continuo|basso kontiˈnuːo|L|mus|5|Il basso continuo dell'epoca barocca.|El bajo continuo de la época barroca.
oratorio (musica)|oratorio|oraˈtɔːrjo|S|mus|5|L'oratorio Messiah di Händel.|El oratorio Mesías de Händel.|g=m;p=oratori
messa da requiem|misa de réquiem|ˈmessa da reˈkwiem|L|mus|5|La messa da requiem di Verdi a Milano.|La misa de réquiem de Verdi en Milán.
requiem|réquiem|reˈkwiem|S|mus|4|Il requiem di Mozart incompiuto.|El réquiem de Mozart inacabado.|g=m
stretto (musica)|stretto|ˈstretto|S|mus|5|Lo stretto conclusivo della fuga.|El stretto conclusivo de la fuga.|g=m;p=stretti
fuga (musica)|fuga (música)|ˈfuːɡa|S|mus|4|La fuga in re minore per organo.|La fuga en re menor para órgano.|g=f;p=fughe
contrappunto|contrapunto|kontrapˈpunto|S|mus|5|Il contrappunto a quattro voci.|El contrapunto a cuatro voces.|g=m;p=contrappunti
polifonia|polifonía|polifoˈnia|S|mus|4|La polifonia fiamminga del Cinquecento.|La polifonía flamenca del Quinientos.|g=f
monodia|monodia|moˈnɔːdja|S|mus|5|La monodia seicentesca di Caccini.|La monodia seicentesca de Caccini.|g=f
coloratura|coloratura|koloraˈtuːra|S|mus|5|Le colorature del soprano acuto.|Las coloraturas del soprano agudo.|g=f;p=colorature
vibrato|vibrato|viˈbraːto|S|mus|4|Un vibrato largo da violino.|Un vibrato largo de violín.|g=m
spiccato|spiccato|spikˈkaːto|S|mus|5|L'archetto in spiccato saltellante.|El arco en spiccato saltarín.|g=m;p=spiccati;n=Término de técnica violinística
pizzicato|pizzicato|pittsiˈkaːto|S|mus|4|Il pizzicato dell'umoreske|El pizzicato del humor|g=m;n=Italianismo universal
glissando|glissando|ɡlisˈsando|S|mus|5|Un glissando di arpa lungo il pentagramma.|Un glissando de arpa a lo largo del pentagrama.|g=m
legato|legato|leˈɡaːto|A|mus|5|Un fraseggio legato e cantabile.|Un fraseo ligado y cantabile.
staccato|staccato|stakˈkaːto|A|mus|4|Le note staccato della tarantella.|Las notas staccato de la tarantella.
cantabile|cantabile|kantaˈbibile|A|mus|5|Un andante cantabile alla Chopin.|Un andante cantabile a lo Chopin.
virtuosismo|virtuosismo|virtuˈɔːzizmo|S|mus|4|Il virtuosismo pianistico di Liszt.|El virtuosismo pianístico de Liszt.|g=m
virtuoso|virtuoso|virˈtwɔːzo|S|mus|4|Un virtuoso del clarinetto.|Un virtuoso del clarinete.|g=m;p=virtuosi
prima esecuzione|primera ejecución|ˈprima ezzekutˈtsjone|L|mus|5|La prima esecuzione assoluta della Nona.|La primera ejecución absoluta de la Novena.
esecuzione dal vivo|ejecución en directo|ezekutˈtsjone dal ˈvivo|L|mus|4|Un'esecuzione dal vivo senza ritocchi.|Una ejecución en directo sin retoques.
# ══ teatro ══
quinta (teatro)|patas (teatro)|ˈkwinta|S|cin|5|Le quinte di velluto rosso.|Las patas de terciopelo rojo.|g=f;p=quinte
fondale|telón de fondo|fonˈdaːle|S|cin|4|Il fondale dipinto con la laguna.|El telón de fondo pintado con la laguna.|g=m;p=fondali
ballatoio|pasarela (teatro)|ballaˈtɔːjo|S|cin|5|Il ballatoio sopra il palcoscenico.|La pasarela sobre el escenario.|g=m;p=ballatoi
graticcio|tramoya|ɡratˈtittʃo|S|cin|5|Il graticcio da cui calano le scene.|La tramoya de donde bajan las escenas.|g=m;p=graticci
prima (teatro)|estreno|ˈprima|S|cin|4|La prima della nuova stagione lirica.|El estreno de la nueva temporada lírica.|g=f;p=prime
sera di prima|noche de estreno|ˈseːra di ˈprima|L|cin|5|In sera di prima il loggione fischia.|En noche de estreno el gallinero silba.
loggione|gallinero|lodˈdʒoːne|S|cin|5|Il loggione espone al fischio.|El gallinero se presta al silbido.|g=m;p=loggioni
fischio (teatro)|silbido|ˈfiʃʃo|S|cin|4|I fischi alla prima scaligera.|Los silbidos en la estreno de la Scala.|g=m;p=fischi
applauso scrosciante|aplauso atronador|apˈplauzo skroʃˈʃante|L|cin|4|Un applauso scrosciante al finale.|Un aplauso atronador al final.
battimani|aplauso|battiˈmani|S|cin|3|Tre minuti di battimani per la protagonista.|Tres minutos de aplausos para la protagonista.|g=m
chiamata (teatro)|salida a escena|kjamˈmaːta|S|cin|5|Tre chiamate alla ribalta per la diva.|Tres salidas a escena para la diva.|g=f;p=chiamate
ribalta|proscenio|riˈbalta|S|cin|4|La ribalta illuminata della soubrette.|El proscenio iluminado de la vedette.|g=f;p=ribalte
imbrattatele|manazas|imbrattaˈteːle|S|art|5|«Impressionatele, imbrattatele» urlava il critico.|«Impresionistas, manazas» gritaba el crítico.|g=m;p=imbrattatele
attore caratterista|actor de carácter|atˈtore karatteriˈsta|L|cin|4|Un attore caratterista nella commedia all'italiana.|Un actor de carácter en la comedia all'italiana.
scenografo|escenógrafo|ʃʃeˈnɔːɡrafo|S|cin|4|Lo scenografo della Dolce vita.|El escenógrafo de la Dolce vita.|g=m;p=scenografi
scenografia|escenografía|ʃʃenoɡraˈfia|S|cin|4|La scenografia del Faust alla Scala.|La escenografía del Fausto en la Scala.|g=f;p=scenografie
sartoria teatrale|sastrería teatral|sartoˈrja teatraˈle|L|cin|5|La sartoria teatrale dell'opera.|La sastrería teatral de la ópera.
truccatore|maquillador|trukkatˈtore|S|cin|4|Il truccatore trasforma l'attore.|El maquillador transforma al actor.|g=m;p=truccatori
doppio (doppiatore)|doblador|dɔppjo|S|cin|4|Il doppio della star sul set italiano.|El doble de la estrella en el plató italiano.|g=m;p=doppi
doppiatore|doblador|doppjatˈtore|S|cin|4|Il doppiatore italiano di De Niro.|El doblador italiano de De Niro.|g=m;p=doppiatori
compagnia teatrale|compañía teatral|kompaˈɲɲa teatraˈle|L|cin|4|La compagnia teatrale in tournée.|La compañía teatral en gira.
tournée|gira|turne|S|cin|4|La tournée autunnale della compagnia.|La gira otoñal de la compañía.|g=f;n=Gallicismo
messa in scena|puesta en escena|ˈmessa in ˈʃʃena|L|cin|4|La messa in scena dell'Amleto a Ferrara.|La puesta en escena del Hamlet en Ferrara.
debutto|debutto|deˈbutto|S|cin|4|Il debutto alla Scala a vent'anni.|El debut en la Scala a los veinte.|g=m;p=debutti
primattore|primer actor|primatˈtore|S|cin|5|Il primattore della compagnia stabile.|El primer actor de la compañía estable.|g=m;p=primattori
capocomico|empresario-capocómico|kapoˈkɔːmiko|S|cin|5|Il capocomico guidava la compagnia di giro.|El empresario guiaba la compañía de gira.|g=m;p=capocomici;n=Terminología teatrale clásica
compagnia di giro|compañía de gira|kompaˈɲɲa di ˈdʒiro|L|cin|5|Le compagnie di giro dell'Ottocento.|Las compañías de gira del Ochocientos.
copione|guion|koˈpjoːne|S|cin|4|Il copione con le didascalie del regista.|El guion con las acotaciones del director.|g=m;p=copioni
didascalia|acotación|didasˈkaːlja|S|cin|4|Le didascalie tra le battute.|Las acotaciones entre las réplicas.|g=f;p=didascalie
battuta (teatro)|réplica (teatro)|batˈtuːta|S|cin|3|Dimentica la battuta finale.|Olvida la réplica final.|g=f;p=battute
la battuta pronta|la réplica lista|la batˈtuːta ˈprɔnta|L|cmu|5|Ha sempre la battuta pronta.|Tiene siempre la réplica lista.
improvvisare (teatro)|improvisar|improvviˈzaːre|V|cin|4|Gli attori improvvisano sul tema.|Los actores improvisan sobre el tema.
improvvisazione|improvisación|improvvisatˈtsjone|S|cin|4|L'improvvisazione della commedia dell'arte.|La improvisación de la commedia dell'arte.|g=f;p=improvvisazioni
commedia dell'arte|commedia dell'arte|komˈmɛdja delˈlarte|L|cin|4|Le maschere della commedia dell'arte.|Las máscaras de la commedia dell'arte.
maschera (teatro)|máscara (teatro)|ˈmaskera|S|cin|4|Le maschere di Arlecchino e Pantalone.|Las máscaras de Arlecchino y Pantalone.|g=f;p=maschere
arlecchino|arlecchino|arlekˈkiːno|S|cin|4|L'arlecchino servitore di due padroni.|El arlecchino servidor de dos amos.|g=m;p=arlecchini
colombina|colombina|kolomˈbiːna|S|cin|5|La colombina furba della commedia.|La colombina astuta de la comedia.|g=f;p=colombine
pulcinella|pulcinella|pultʃiˈnɛl la|S|cin|5|Il pulcinella napoletano col cucuzzolo.|El pulcinella napolitano con el calabacín.
pantalone (maschera)|pantalone (máscara)|pantaˈloːne|S|cin|5|Il pantalone veneziano avaro.|El pantalone veneciano avaro.|g=m;p=pantaloni
segreto di pulcinella|secreto a voces|seˈgreto di pultʃiˈnɛl la|L|cnn|5|Ormai è un segreto di pulcinella.|Ya es un secreto a voces.
`, "C1", "k-x48");
