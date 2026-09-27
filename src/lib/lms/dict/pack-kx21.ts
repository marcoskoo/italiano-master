import { parsePack } from "./compact";
import type { VocabWord } from "../types";

/* ── Pack K·X21 · giardinaggio, matematica, mestieri, espressioni (A2→B2) ── */

export const PACK_KX21: VocabWord[] = parsePack(`
# ══ giardinaggio e piante ══
giardiniere|jardinero|dʒardiˈnjɛre|S|nat|4|Il giardiniere pota le rose.|El jardinero poda las rosas.|g=m;p=giardinieri
semina|siembra|seˈmina|S|nat|4|La semina di primavera è iniziata.|La siembra de primavera ha comenzado.|g=f;p=semine
innaffiare|regar|innafˈfjare|V|nat|3|Innaffio le piante ogni sera.|Riego las plantas cada noche.|c=innaffiare i fiori
vaso|maceta|ˈvazo|S|nat|3|Un vaso di terracotta sul balcone.|Una maceta de terracota en el balcón.|g=m;p=vasi
terriccio|tierra de macetas|terˈrittʃo|S|nat|5|Il terriccio nuovo per i gerani.|La tierra nueva para los geranios.|g=m;p=terricci
potatura|poda|potatura|S|nat|5|La potatura degli alberi a febbraio.|La poda de los árboles en febrero.|g=f;p=potature
bulbo|bulbo|ˈbulbo|S|nat|4|Un bulbo di tulipano interrato.|Un bulbo de tulipán enterrado.|g=m;p=bulbi
rampicante|trepadora|rampiˈkante|A|nat|5|L'edera è una pianta rampicante.|La hiedra es una planta trepadora.|s=arrampicante
prato|césped|ˈprato|S|nat|3|I bambini giocano sul prato.|Los niños juegan en el césped.|g=m;p=prati;c=prato all'inglese
siepe|seto|ˈsjɛpe|S|nat|5|Una siepe di bosso intorno al giardino.|Un seto de boj alrededor del jardín.|g=f;p=siepi
erbaccia|mala hierba|erˈbattʃa|S|nat|5|Le erbacce tra le pietre del viale.|Las malas hierbas entre las piedras del paseo.|g=f;p=erbacce

# ══ matematica e geometria ══
somma|suma|ˈsomma|S|stu|3|La somma di due più due.|La suma de dos más dos.|g=f;p=somme
sottrazione|resta|sottratˈtsjone|S|stu|4|La sottrazione con il prestito.|La resta con llevada.|g=f;p=sottrazioni
moltiplicazione|multiplicación|moltiplikaˈtsjone|S|stu|4|La moltiplicazione per nove.|La multiplicación por nueve.|g=f;p=moltiplicazioni
divisione|división|diviˈzjone|S|stu|4|La divisione con i resti.|La división con restos.|g=f;p=divisioni
risultato|resultado|rizulˈtato|S|stu|2|Il risultato dell'esame è ottimo.|El resultado del examen es óptimo.|g=m;p=risultati
quadrato|cuadrado|kwaˈdrato|S|stu|4|Un quadrato di quattro lati uguali.|Un cuadrado de cuatro lados iguales.|g=m;p=quadrati
cerchio|círculo|ˈtʃerko|S|stu|4|Disegna un cerchio perfetto.|Dibuja un círculo perfecto.|g=m;p=cerchi
triangolo|triángulo|triaŋˈɡolo|S|stu|4|Un triangolo isoscele.|Un triángulo isósceles.|g=m;p=triangoli
misurare|medir|mizuˈrare|V|stu|3|Misuro la stanza con il metro.|Mido la habitación con la cinta métrica.|c=misurare la temperatura
dimensione|dimensión|dimenˈsjone|S|stu|4|Le dimensioni della scatola.|Las dimensiones de la caja.|g=f;p=dimensioni
diametro|diámetro|diaˈmetro|S|sci|5|Il diametro della Terra.|El diámetro de la Tierra.|g=m;p=diametri;n=Invariable en el uso común

# ══ mestieri artigiani ══
falegname|carpintero|faˈleɲname|S|pro|4|Il falegname costruisce sedie.|El carpintero construye sillas.|g=m;p=falegnami
muratore|albañil|muraˈtore|S|pro|4|Il muratore posa i mattoni.|El albañil pone los ladrillos.|g=m;p=muratori
idraulico|plombero|iˈdrauliko|S|pro|4|L'idraulico ripara il rubinetto.|El plombero arregla el grifo.|g=m;p=idraulici
elettricista|electricista|elettriˈtʃista|S|pro|4|L'elettricista controlla i fili.|El electricista revisa los cables.|g=m;p=elettricisti
parrucchiere|peluquero|parukˈkjɛre|S|pro|3|Dal parrucchiere per un taglio.|Del peluquero para un corte.|g=m;p=parrucchieri
sarto|sastre|ˈsarto|S|pro|5|Il sarto cuce l'abito su misura.|El sastre cose el traje a medida.|g=m;p=sarti
meccanico|mecánico|mekˈkaniko|S|pro|3|Il meccanico ripara la macchina.|El mecánico arregla el coche.|g=m;p=meccanici
pescatore|pescador|peskaˈtore|S|pro|4|Il pescatore torna al porto.|El pescador vuelve al puerto.|g=m;p=pescatori
pastore|pastor|paˈstore|S|pro|5|Il pastore guida le pecore.|El pastor guía a las ovejas.|g=m;p=pastori
calzolaio|zapatero|kaltsuˈlaio|S|pro|5|Il calzolaio risuola gli stivali.|El zapatero suela las botas.|g=m;p=calzolai

# ══ tempo e frequenza ══
raramente|rara vez|raraˈmente|D|tmp|3|Raramente vado al cinema.|Rara vez voy al cine.|s=di rado;a=spesso
spesso|a menudo|ˈspesso|D|tmp|2|Spesso mi fermo a chiacchierare.|A menudo me paro a charlar.|a=raramente
quotidianamente|a diario|kuotidjan aˈmente|D|tmp|4|Cammino quotidianamente nel parco.|Camino a diario por el parque.|s=ogni giorno
ogni tanto|de vez en cuando|oɲɲi ˈtanto|L|tmp|3|Ogni tanto leggo un romanzo.|De vez en cuando leo una novela.|r=col
a volte|a veces|a ˈvolte|L|tmp|2|A volte preferisco stare in silenzio.|A veces prefiero estar en silencio.|s=talvolta
improvvisamente|de repente|improvviˈzamente|D|tmp|4|Improvvisamente si è alzato il vento.|De repente se levantó el viento.|s=all'improvviso
poco fa|hace un rato|ˈpoko fa|L|tmp|3|È arrivato poco fa.|Llegó hace un rato.|r=col
d'ora in poi|de ahora en adelante|dora in poi|L|tmp|4|D'ora in poi studierò di più.|De ahora en adelante estudiaré más.
mancanza|falta|manˈkantsa|S|cnn|4|La mancanza di sonno si sente.|La falta de sueño se nota.|g=f;p=mancanze;a=presenza
presenza|presencia|preˈsentsa|S|cnn|3|La presenza degli invitati.|La presencia de los invitados.|g=f;p=presenze;a=assenza

# ══ casa e manutenzione ══
rubinetto|grifo|rubiˈnetto|S|cas|3|Chiudi il rubinetto dell'acqua.|Cierra el grifo del agua.|g=m;p=rubinetti;c=aprire il rubinetto
interruttore|interruptor|interrutˈtore|S|cas|4|L'interruttore della luce.|El interruptor de la luz.|g=m;p=interruttori
spina|enchufe|ˈspina|S|tec|4|Attacca la spina alla presa.|Conecta el enchufe a la toma.|g=f;p=spine;n=Anche: spina della presa
presa|toma de corriente|ˈpreza|S|cas|4|La presa accanto al letto.|La toma junto a la cama.|g=f;p=presa;c=presa di corrente
scopa|escoba|ˈskopa|S|cas|3|La scopa nell'angolo della cucina.|La escoba en el rincón de la cocina.|g=f;p=scope
secchio|cubo|ˈsekkjo|S|cas|4|Un secchio d'acqua per il pavimento.|Un cubo de agua para el suelo.|g=m;p=secchi
straccio|trapo|ˈstrattʃo|S|cas|4|Pulisco il tavolo con lo straccio.|Limpio la mesa con el trapo.|g=m;p=stracci
detersivo|detergente|deterˈsivo|S|cas|3|Il detersivo per i piatti.|El detergente para los platos.|g=m;p=detersivi
bidone|cubo de basura|biˈdone|S|cas|4|Butta la carta nel bidone.|Tira el papel al cubo de basura.|g=m;p=bidoni
corridoio|pasillo|korriˈdojo|S|cas|3|Il corridoio è lungo e buio.|El pasillo es largo y oscuro.|g=m;p=corridoi
soffitto|techo|sofˈfitto|S|cas|4|Il soffitto della camera è alto.|El techo de la habitación es alto.|g=m;p=soffitti
pavimento|suelo|paviˈmento|S|cas|3|Il pavimento di legno scricchiola.|El suelo de madera cruje.|g=m;p=pavimenti
cantina|sótano|kanˈtina|S|cas|4|Il vino riposa in cantina.|El vino reposa en el sótano.|g=f;p=cantine
mansarda|ático|manˈsarda|S|cas|5|Una mansarda con la vista sui tetti.|Un ático con vistas a los tejados.|g=f;p=mansarde;s=soffitta
serratura|cerradura|serraˈtura|S|cas|4|La serratura della porta d'ingresso.|La cerradura de la puerta de entrada.|g=f;p=serrature;c=cambiare la serratura
scarico|desagüe|ˈskariko|S|cas|4|Lo scarico del lavandino è intasato.|El desagüe del fregadero está atascado.|g=m;p=scarichi
intasato|atascado|intaˈzato|A|cas|5|Il tubo è intasato dai capelli.|El tubo está atascado por los pelos.|s=otturato
ripiano|estante|riˈpjano|S|cas|4|Il ripiano dei libri in alto.|El estante de libros de arriba.|g=m;p=ripiani
travisatura|viga|traviˈsatura|S|cas|5|Le travi in legno del tetto.|Las vigas de madera del techo.|g=f;p=travi;n=Singolare d'uso: trave

# ══ espressioni utili ══
ci vuole tempo|hace falta tiempo|tʃi ˈvwole tempo|L|ast|3|Ci vuole tempo per imparare.|Hace falta tiempo para aprender.
vale la pena|vale la pena|ˈvale la ˈpena|L|ast|3|Vale la pena visitarla.|Vale la pena visitarla.
non vale la pena|no vale la pena|non vale la pena|L|ast|4|Non vale la pena discutere.|No vale la pena discutir.
per quanto|por mucho que|per kwanto|C|cnn|4|Per quanto provi, non ci riesco.|Por mucho que intente, no lo consigo.
purché|con tal de que|purˈke|C|cnn|4|Verrò purché piova smetta.|Iré con tal de que pare de llover.
qualora|en caso de que|kwaˈlora|C|cnn|5|Qualora servisse, chiamami.|En caso de que haga falta, llámame.|r=for
addirittura|incluso|haddiriˈttura|D|cnn|3|È arrivato addirittura primo.|Llegó incluso primero.
almeno|al menos|alˈmeno|D|cnn|2|Almeno hai provato.|Al menos lo intentaste.
ormai|ya (para entonces)|ormai|D|cnn|3|Ormai è troppo tardi.|Ya es demasiado tarde.
appena|apenas|apˈpena|D|cnn|3|È uscito appena un attimo.|Salió apenas un momento.
sempre più|cada vez más|ˈsempre piu|L|cnn|3|È sempre più difficile.|Es cada vez más difícil.
via via|poco a poco|ˈvia ˈvia|L|cnn|5|Via via imparerai.|Poco a poco aprenderás.

`, "B1", "k-x21");
