import { parsePack } from "./compact";
import type { VocabWord } from "../types";

/* ── Pack K·X26 · lessico accademico e scientifico (C1) ──────────── */

export const PACK_KX26: VocabWord[] = parsePack(`
# ══ ricerca e metodo ══
ricercatrice|investigadora|ritʃerkaˈtritʃe|S|sci|4|La ricercatrice coordina il laboratorio.|La investigadora coordina el laboratorio.|g=f;p=ricercatrici
dottorando|doctorando|dottoranˈdo|S|stu|4|Il dottorando discute la tesi a marzo.|El doctorando defiende la tesis en marzo.|g=m;p=dottorandi
dottoranda|doctoranda|dottoranˈda|S|stu|4|La dottoranda lavora al dipartimento.|La doctoranda trabaja en el departamento.|g=f;p=dottorande
postdottorato|posdoctorado|postdottoˈrato|S|stu|5|Ha vinto un postdottorato a Bologna.|Ha ganado un posdoctorado en Bolonia.|g=m
assegno di ricerca|beca de investigación|asˈseɲɲo di ritʃerˈka|L|stu|5|Ha ottenuto un assegno di ricerca biennale.|Ha obtenido una beca de investigación bienal.
borsista|becario|borˈsista|S|stu|4|I borsisti del CNR.|Los becarios del CNR.|g=m;p=borsisti
correlatore|cotutor|korrelaˈtore|S|stu|5|Il correlatore ha suggerito il taglio finale.|El cotutor sugirió el enfoque final.|g=m;p=correlatori
contestualizzare|contextualizar|kontestualiˈttsare|V|stu|4|Vanno contestualizzate le fonti storiche.|Hay que contextualizar las fuentes históricas.|r=for
problematicizzare|problematizar|problematitˈtsare|V|stu|5|Il saggio problematicizza la vulgata storiografica.|El ensayo problematiza la vulgata historiográfica.|r=for
vulgata|vulgata|vulˈɡata|S|let|5|La vulgata storiografica sul fascismo.|La vulgata historiográfica sobre el fascismo.|g=f;n=Connotación irónica: versión difundida
storiografia|historiografía|storjoɡraˈfia|S|stu|4|La storiografia marxista degli anni Settanta.|La historiografía marxista de los años setenta.|g=f
storiografico|historiográfico|storjoˈɡrafiko|A|stu|5|Il dibattito storiografico resta aperto.|El debate historiográfico sigue abierto.|r=tec
fonte primaria|fuente primaria|ˈfɔnte primaˈrja|L|stu|4|Il carteggio è una fonte primaria.|El epistolario es una fuente primaria.
fonte secondaria|fuente secundaria|ˈfɔnte sekondaˈrja|L|stu|4|Il manuale è una fonte secondaria.|El manual es una fuente secundaria.
carteggio|epistolario|karˈteddʒo|S|let|5|Il carteggio Croce-Gentile.|El epistolario Croce-Gentile.|g=m;p=carteggi
epistolario|epistolario|epistoˈlarjo|S|let|5|L'epistolario di Leopardi.|El epistolario de Leopardi.|g=m;p=epistolari
manoscritto|manuscrito|manosˈkritto|S|let|4|Un manoscritto del Trecento.|Un manuscrito del siglo XIV.|g=m;p=manoscritti
incunabolo|incunable|inkuˈnabolo|S|let|5|Gli incunaboli della Biblioteca Nazionale.|Los incunables de la Biblioteca Nacional.|g=m;p=incunaboli
paleografia|paleografía|paleoɡraˈfia|S|stu|5|La paleografia latina.|La paleografía latina.|g=f
filologia|filología|filoloˈdʒia|S|stu|4|La filologia romanza.|La filología románica.|g=f
filologico|filológico|filoˈlɔdʒiko|A|stu|5|L'edizione filologica dell'opera.|La edición filológica de la obra.|r=tec
esegesi|exégesis|eˈzedʒezi|S|let|5|L'esegesi biblica medieval.|La exégesis bíblica medieval.|g=f
ermeneutica|hermenéutica|ermeneuˈtika|S|stu|5|L'ermeneutica di Gadamer.|La hermenéutica de Gadamer.|g=f
semiotica|semiología|semjoˈtika|S|stu|5|La semiotica di Eco.|La semiología de Eco.|g=f
epistemologia|epistemología|epistemoloˈdʒia|S|stu|5|L'epistemologia del Novecento.|La epistemología del siglo XX.|g=f
epistemico|epistémico|episteˈmiko|A|stu|5|Il valore epistemico della teoria.|El valor epistémico de la teoría.|r=tec
assiologico|axiológico|assjoloˈdʒiko|A|stu|5|Un giudizio assiologico.|Un juicio axiológico.|r=tec
teleologico|teleológico|teleoloˈdʒiko|A|stu|5|La spiegazione teleologica dei fenomeni.|La explicación teleológica de los fenómenos.|r=tec
dialettico|dialéctico|dialetˈtiko|A|stu|4|Il metodo dialettico hegeliano.|El método dialéctico hegeliano.
metodologia|metodología|metodoloˈdʒia|S|stu|3|La metodologia della ricerca.|La metodología de la investigación.|g=f
paradigma|paradigma|paraˈdiɡma|S|sci|4|Un cambio di paradigma.|Un cambio de paradigma.|g=m;p=paradigmi
assioma|axioma|asˈsjoma|S|sci|5|Un assioma indimostrabile.|Un axioma indemostrable.|g=m;p=assiomi
teorema|teorema|teoˈrɛma|S|sci|4|Il teorema di Pitagora.|El teorema de Pitágoras.|g=m;p=teoremi
corollario|corolario|korolˈlarjo|S|sci|5|Da ciò segue un corollario.|De ello sigue un corolario.|g=m;p=corollari
lemma|lema|ˈlɛmma|S|let|4|Il lemma nel dizionario.|El lema en el diccionario.|g=m;p=lemmi
lemmatico|lemático|lemˈmatiko|A|let|5|La voce lemmatica del glossario.|La entrada lematizada del glosario.|r=tec
glossario|glosario|ɡlosˈsarjo|S|let|4|Il glossario a fine volume.|El glosario al final del volumen.|g=m;p=glossari
apparato critico|aparato crítico|appaˈrato ˈkritiko|L|let|5|L'apparato critico annota le varianti.|El aparato crítico anota las variantes.
variante|variante|vaˈrjante|S|let|4|La variante del manoscritto B.|La variante del manuscrito B.|g=f;p=varianti
lezione (filologica)|lectio (variante)|leˈtsjone filoloˈdʒika|L|let|5|La lezione dell'archetipo.|La lectio del arquetipo.|r=tec
archetipo|arquetipo|arkeˈtipo|S|let|5|L'archetipo del poema.|El arquetipo del poema.|g=m;p=archetipi
recensore|reseñador|retʃenˈsore|S|let|5|Il recensore ha stroncato il romanzo.|El reseñador ha destrozado la novela.|g=m;p=recensori
stroncatura|crítica demoledora|stronkaˈtura|S|let|5|Una stroncatura senza appello.|Una crítica demoledora sin apelación.|g=f
rassegna stampa|revista de prensa|rasˈseɲɲa ˈstampa|L|att|4|La rassegna stampa delle otto.|La revista de prensa de las ocho.
rassegna|reseña (revista)|rasˈseɲɲa|S|let|3|Una rassegna bibliografica.|Una reseña bibliográfica.|g=f;p=rassegne
bibliografico|bibliográfico|biblioɡraˈfiko|A|stu|5|L'apparato bibliografico del saggio.|El aparato bibliográfico del ensayo.|r=tec
sitografia|sitografía|sitoɡraˈfia|S|stu|5|La sitografia in calce al capitolo.|La sitografía al pie del capítulo.|g=f;r=tec
citazione bibliografica|cita bibliográfica|tsitaˈtsjone bibliograˈfika|L|stu|4|Verifica ogni citazione bibliografica.|Verifica cada cita bibliográfica.
autoplagio|autoplagio|auˈtopladʒo|S|stu|5|L'autoplagio non è reato, ma è malvista.|El autoplagio no es delito, pero está mal visto.|g=m
dissertazione|disertación|dissertaˈtsjone|S|stu|5|La dissertazione inaugurale del corso.|La disertación inaugural del curso.|g=f
lezione inaugurale|lección inaugural|leˈtsjone auɡuˈrale|L|stu|5|La lezione inaugurale dell'anno accademico.|La lección inaugural del año académico.
ordine del giorno|orden del día|ˈordine del ˈdʒorno|L|ist|4|L'ordine del giorno della seduta.|El orden del día de la sesión.
aggiornare la seduta|aplazar la sesión|addʒoˈrnare la ˈseduta|E|ist|5|La presidenza aggiorna la seduta.|La presidencia aplaza la sesión.|r=for
parere motivato|dictamen motivado|paˈrere motiˈvato|L|ist|5|La Commissione ha emesso un parere motivato.|La Comisión ha emitido un dictamen motivado.
bando di concorso|convocatoria (concurso)|ˈbando di konˈkorso|L|ist|4|Il bando di concorso per tre cattedre.|La convocatoria para tres cátedras.
cattedra|cátedra|katˈtedra|S|stu|4|Ha vinto la cattedra di storia moderna.|Ha ganado la cátedra de historia moderna.|g=f;p=cattedre
cattedratico|catedrático|kattedraˈtiko|S|stu|5|Un cattedratico di filosofia.|Un catedrático de filosofía.|g=m;p=cattedratici
professore ordinario|profesor titular (ordinario)|profesˈsoreordiˈnarjo|L|stu|5|Il professore ordinario dirige l'istituto.|El profesor ordinario dirige el instituto.
professore associato|profesor asociado|profesˈsoreassoˈtʃjato|L|stu|5|La professoressa associata insegna linguistica.|La profesora asociada enseña lingüística.
ricercatore confermato|investigador confirmado|ritʃerkaˈtore konferˈmato|L|stu|5|È ricercatore confermato dal 2015.|Es investigador confirmado desde 2015.
chiave di lettura|clave de lectura|ˈkjave di letˈtura|L|let|4|Una nuova chiave di lettura del romanzo.|Una nueva clave de lectura de la novela.
chiave di volta|clave de bóveda|ˈkjave di ˈvolta|L|let|4|Il finale è la chiave di volta del racconto.|El final es la clave de bóveda del relato.
impianto|estructura (de una obra)|imˈpjanto|S|let|4|L'impianto teorico del saggio.|La estructura teórica del ensayo.|g=m;p=impianti
struttura portante|estructura portante|strutˈtura porˈtante|L|let|5|La tesi è la struttura portante del saggio.|La tesis es la estructura portante del ensayo.
impalcatura|andamiaje|impalkaˈtura|S|let|5|L'impalcatura argomentativa regge.|El andamiaje argumentativo se sostiene.|g=f
maglia (struttura)|malla|ˈmaʎʎa|S|ast|5|La maglia del racconto è fitta.|La malla del relato es densa.|g=f;p=maglie
trama fitta|trama densa|ˈtrama ˈfitta|L|let|4|Un giallo dalla trama fitta.|Un thriller de trama densa.
dipanarsi|desenredarse|dipaˈnarsi|V|let|5|La vicenda si dipana lentamente.|La trama se desenreda lentamente.|r=let
incastro|encaje|inˈkastro|S|let|5|L'incastro perfetto delle due storie.|El encaje perfecto de las dos historias.|g=m;p=incastri
flashback|flashback|flaʃˈbek|S|cin|3|Il flashback iniziale anticipa il finale.|El flashback inicial anticipa el final.|g=m;n=Anglicismo de uso general
analessi|analepsis|anaˈlɛssi|S|let|5|L'analessi centrale svela l'infanzia dell'eroe.|La analepsis central revela la infancia del héroe.|g=f;r=tec
prolessi|prolepsis|proˈlɛssi|S|let|5|La prolessi salta avanti nel tempo.|La prolepsis salta adelante en el tiempo.|g=f;r=tec
io narrante|narrador en primera persona|ˈio narˈrante|L|let|4|L'io narrante ricorda l'infanzia.|El narrador en primera persona recuerda la infancia.
narratore onnisciente|narrador omnisciente|narraˈtore onniˈʃʃente|L|let|4|Il narratore onnisciente sa tutto di tutti.|El narrador omnisciente lo sabe todo de todos.
focalizzazione|focalización|fokalittsaˈtsjone|S|let|5|La focalizzazione interna limitata.|La focalización interna limitada.|g=f;r=tec
sguardo|mirada|ˈzɡwardo|S|let|4|Lo sguardo della scrittrice sulla provincia.|La mirada de la escritora sobre la provincia.|g=m;p=sguardi
`, "C1", "k-x26");
