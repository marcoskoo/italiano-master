import { parsePack } from "./compact";
import type { VocabWord } from "../types";

/* ── Pack K·X28 · figure retoriche, narratologia e metrica (C2) ───
   El léxico de la crítica literaria: indispensable para la unidad C2. */

export const PACK_KX28: VocabWord[] = parsePack(`
# ══ figure retoriche ══
metonimia|metonimia|metoˈnimja|S|let|5|«Bere un bicchiere» è una metonimia.|«Beber un vaso» es una metonimia.|g=f
sineddoche|sinécdoque|sineˈddoke|S|let|5|La sineddoche «vela» per «nave».|La sinécdoque «vela» por «nave».|g=f
sinestesia|sinestesia|sinesˈtezia|S|let|5|Un «suono dolce»: classica sinestesia.|Un «sonido dulce»: sinestesia clásica.|g=f
litote|lítote|liˈtote|S|let|5|«Non è male» come litote per «è ottimo».|«No está mal» como lítote por «está óptimo».|g=f
enjambement|encabalgamiento|enʒambˈmen|S|let|5|L'enjambement spezza il verso e il pensiero.|El encabalgamiento rompe el verso y el pensamiento.|g=m;n=Gallicismo de métrica
epifora|epífora|epiˈfora|S|let|5|L'epifora chiude ogni strofa con la stessa parola.|La epífora cierra cada estrofa con la misma palabra.|g=f
chiasmo|quiasmo|ˈkjazmo|S|let|5|Il chiasmo inverte i membri della frase.|El quiasmo invierte los miembros de la frase.|g=m;p=chiasmi
ellissi|elipsis|elˈlissi|S|let|5|L'ellissi accelera il ritmo del dialogo.|La elipsis acelera el ritmo del diálogo.|g=f
zeugma|zeugma|ˈdzwɛɡɡma|S|let|5|Lo zeugma unisce verbo e complementi eterogenei.|El zeugma une verbo y complementos heterogéneos.|g=m
antitesi|antítesis|anˈtitesi|S|let|4|L'antitesi tra padre e figlio.|La antítesis entre padre e hijo.|g=f;p=antitesi
apostrofe|apóstrofe|apoˈstrofe|S|let|5|L'apostrofe «O voi che avete gli intelletti sani».|El apóstrofe «O vosotros que tenéis los intelectos sanos».|g=f;p=apostrofi
interrogazione retorica|interrogación retórica|interroɡaˈtsjone retoˈrika|L|let|5|L'interrogazione retorica coinvolge il lettore.|La interrogación retórica involucra al lector.
reticenza|reticencia (elipsis dramática)|retiˈtʃentsa|S|let|5|La reticenza lascia intendere il peggio.|La reticencia deja entrever lo peor.|g=f
climax|clímax|ˈklaimaks|S|let|5|Il climax cresce verso il delitto.|El clímax crece hacia el crimen.|g=m;p=climax
anticlimax|anticlímax|antiˈklaimaks|S|let|5|L'anticlimax sgonfia la tensione.|El anticlímax desinfla la tensión.|g=m
# ══ metrica ══
verso sciolto|verso suelto|ˈverso ˈʃʃolto|L|let|5|Il verso sciolto dell'Orlando Furioso.|El verso suelto del Orlando Furioso.
settenario|heptasílabo|setteˈnarjo|S|let|5|Il settenario dell'Infinito di Leopardi.|El heptasílabo del Infinito de Leopardi.|g=m;p=settenari
quinario|pentasílabo|kwiˈnarjo|S|let|5|Il quinario nella poesia giocosa.|El pentasílabo en la poesía juguetona.|g=m;p=quinari
ottonario|octosílabo|ottoˈnarjo|S|let|5|L'ottonario della poesia popolare.|El octosílabo de la poesía popular.|g=m;p=ottonari
rima baciata|rima pareada|ˈrima batˈtʃjata|L|let|4|La rima baciata AABB.|La rima pareada AABB.
rima alternata|rima alterna|ˈrima alterˈnata|L|let|5|Nella rima alternata ABAB.|En la rima alterna ABAB.
rima incatenata|rima encadenada|ˈrima inkateˈnata|L|let|5|La rima incatenata ABAB della terzina.|La rima encadenada ABAB de la tercina.
terzina|terceto|terˈtsina|S|let|5|La terzina incatenata della Commedia.|El terceto encadenado de la Commedia.|g=f;p=terzine
ottava rima|octava real|otˈtava ˈrima|L|let|5|L'ottava rima dell'Orlando Furioso.|La octava real del Orlando Furioso.
canzone (poema)|canción (poema)|kanˈtsjone poˈema|L|let|5|La canzone «Chiare, fresche e dolci acque».|La canción «Chiare, fresche e dolci acque».
strofa|estrofa|ˈstrɔfa|S|let|4|La strofa si apre con un'anafora.|La estrofa se abre con una anáfora.|g=f;p=strofe
alessandrino|alejandrino|alessanˈdrino|S|let|5|L'alessandrino francese di dodici sillabe.|El alejandrino francés de doce sílabas.|g=m;p=alessandrini
piede (metrica)|pie métrico|ˈpjɛde ˈmetrika|L|let|5|Il piede giambico nella metrica latina.|El pie yámbico en la métrica latina.
senario|senario|seˈnarjo|S|let|5|Il senario giambico latino.|El senario yámbico latino.|g=m;p=senari
cadenza|cádenza|kaˈdentsa|S|mus|5|La cadenza finale del verso.|La cadencia final del verso.|g=f;p=cadenze
verso libero|verso libre|ˈverso ˈlibro|L|let|4|Montale passa al verso libero.|Montale pasa al verso libre.
verso tronco|verso agudo|ˈverso ˈtronko|L|let|5|Il verso tronco finisce in vocale accentata.|El verso agudo acaba en vocal tónica.
verso piano|verso llano|ˈverso ˈpjano|L|let|5|Il verso piano è il più comune.|El verso llano es el más común.
verso sdrucciolo|verso esdrújulo|ˈverso ˈzdruttʃolo|L|let|5|Il verso sdrucciolo finisce in antepenultima.|El verso esdrújulo acaba en antepenúltima.
sillaba|sílaba|ˈsillaba|S|stu|3|Conta le sillabe del verso.|Cuenta las sílabas del verso.|g=f;p=sillabe
sinalefe|sinalefa|sinaˈlɛfe|S|let|5|La sinalefe fonde due sillabe.|La sinalefa funde dos sílabas.|g=f;p=sinalefi
dieresi|diéresis|djeˈrezi|S|let|5|La dieresi spezza il dittongo.|La diéresis rompe el diptongo.|g=f
sinèresi|sinéresis|sineˈrezi|S|let|5|La sineresi fonde le vocali.|La sinéresis funde las vocales.|g=f
# ══ narratologia ══
narratologia|narratología|narratoloˈdʒia|S|let|5|La narratologia di Genette.|La narratología de Genette.|g=f
diegesi|diegesis|djeˈdʒezi|S|let|5|La diegesi del romanzo storico.|La diegesis de la novela histórica.|g=f
mimesi|mímesis|ˈmimesi|S|let|5|La mimesi aristotelica.|La mímesis aristotélica.|g=f
fabula|fábula|ˈfabula|S|let|5|La fabula precede l'intreccio.|La fábula precede al argumento.|g=f;n=En narratologia: cronología de los hechos
intreccio narrativo|argumento narrativo|inˈtrettʃjo narraˈtivo|L|let|5|L'intreccio narrativo rimescola la fabula.|El argumento narrativo remueve la fábula.
personaggio rotondo|personaje redondo|persoˈnaddʒo rotˈtondo|L|let|5|Emma Bovary è un personaggio rotondo.|Emma Bovary es un personaje redondo.
personaggio piatto|personaje plano|persoˈnaddʒo ˈpjatto|L|let|5|Il personaggio piatto resta immutato.|El personaje plano permanece inmutable.
antieroe|antihéroe|antiˈɛːroe|S|let|4|L'antieroe di Svevo, Zeno.|El antihéroe de Svevo, Zeno.|g=m;p=antieroi
topos|tópos|ˈtɔpos|S|let|5|Il topos del locus amoenus.|El tópos del locus amoenus.|g=m;p=topoi
locus amoenus|lugar ameno|ˈlɔkus ameˈonus|L|let|5|Il locus amoenus della lirica.|El lugar ameno de la lírica.|r=let
cliché|cliché|kliˈʃe|S|let|4|Un cliché di feuilleton.|Un cliché de folletín.|g=m;n=Gallicismo invariabile
formula di apertura|fórmula de apertura|ˈfɔrmula di apeˈrtura|L|let|5|La formula di apertura «C'era una volta».|La fórmula de apertura «Había una vez».
excursus|excursus|ekˈskursus|S|let|5|Un excursus storico nel terzo capitolo.|Un excursus histórico en el tercer capítulo.|g=m;p=excursus
digressione|digresión|diɡresˈsjone|S|let|4|Una digressione sull'arte della memoria.|Una digresión sobre el arte de la memoria.|g=f;p=digressioni
finale aperto|final abierto|fiˈnale apˈpɛrto|L|let|4|Il finale aperto lascia il lettore sospeso.|El final abierto deja al lector en suspenso.
finale a sorpresa|final sorprendente|fiˈnale a sorˈpresa|L|cin|4|Un finale a sorpresa alla O. Henry.|Un final sorprendente a lo O. Henry.
colpo di scena|giro de guion|ˈkɔlpo di ˈʃʃena|E|cin|3|Il colpo di scena ribalta tutto.|El giro de guion lo cambia todo.
coup de théâtre|golpe teatral|ku di teˈatro|L|let|5|Un coup de théâtre nell'ultimo atto.|Un golpe teatral en el último acto.|n=Gallicismo
agnizione|agnición|aɲɲiˈtsjone|S|let|5|L'agnizione finale svela l'identità.|La agnición final revela la identidad.|g=f;r=tec
peripezia|peripecia|periˈpjetsja|S|let|5|Le peripezie di Ulisse.|Las peripecias de Ulises.|g=f;p=peripezie
catarsi|catarsis|kaˈtarsi|S|let|4|La catarsi aristotelica nella tragedia.|La catarsis aristotélica en la tragedia.|g=f
hubris|hubris|ˈubris|S|let|5|L'hubris dell'eroe tragico.|El hubris del héroe trágico.|g=f;n=Grecismo
nemesi|némesis|ˈnɛmesi|S|let|5|La nemesi storica colpisce il tiranno.|La némesis histórica golpea al tirano.|g=f
deus ex machina|deus ex machina|ˈdeus eks ˈmakina|L|let|5|Il deus ex machina scioglie la trama.|El deus ex machina desata la trama.|r=let
in medias res|in medias res|in ˈmedias res|L|let|5|L'epos comincia in medias res.|El epos comienza in medias res.|r=let
lieto fine|final feliz|ˈljato ˈfine|L|cin|4|Il pubblico ama il lieto fine.|El público ama el final feliz.
tragicità|tragicidad|tratʃiˈtʃitta|S|let|5|La tragicità del destino antiguo.|La tragicidad del destino antiguo.|g=f
pathos|pathos|ˈpatos|S|let|4|Il pathos dell'addio.|El pathos de la despedida.|g=m
ethos|ethos|ˈɛtos|S|let|5|L'ethos del retore classico.|El ethos del retor clásico.|g=m
logos|logos|ˈlɔɡos|S|let|5|Il logos prevale sull'ethos.|El logos prevalece sobre el ethos.|g=m
`, "C2", "k-x28");
