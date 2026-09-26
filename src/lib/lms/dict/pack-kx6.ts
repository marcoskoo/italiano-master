import { parsePack } from "./compact";
import type { VocabWord } from "../types";

/* ── Pack K·X6 · música, cine, arte y literatura ───────────────────── */

export const PACK_KX6: VocabWord[] = parsePack(`
# ══ musica ══
melodia|melodía|melodia|S|mus|3|Una melodia che resta in testa.|Una melodía que se queda en la cabeza.|g=f;p=melodie
ritmo|ritmo|ritmo|S|mus|3|Il ritmo incalzante della taranta.|El ritmo apremiante de la taranta.|g=m;n=Invariable
armonia|armonía|armoˈnia|S|mus|4|L'armonia perfetta del coro.|La armonía perfecta del coro.|g=f
sinfonia|sinfonía|sinfoˈnia|S|mus|4|La sinfonia numero nove di Mahler.|La sinfonía número nueve de Mahler.|g=f;p=sinfonie
concerto solo|concierto|konˈtʃɛrto|S|mus|3|Un concerto all'aperto in piazza.|Un concierto al aire libre en la plaza.|g=m;p=concerti
assolo|solo|asˈsɔlo|S|mus|4|Un assolo di chitarra memorabile.|Un solo de guitarra memorable.|g=m;p=assoli
spartito|partitura|sparˈtito|S|mus|5|Uno spartito manoscritto di Verdi.|Una partitura manuscrita de Verdi.|g=m;p=spartiti
pentagramma|pentagrama|pentraˈɡramma|S|mus|5|Le note sul pentagramma.|Las notas en el pentagrama.|g=m;p=pentagrammi
chiave di violino|clave de sol|kjaˈve di vioˈlino|L|mus|5|La chiave di violino all'inizio del rigo.|La clave de sol al inicio del pentagrama.
ottava|octava|otˈtava|S|mus|5|Un'ottava sopra il do centrale.|Una octava sobre el do central.|g=f;p=ottave
scala musicale|escala musical|skaˈla muziˈkale|L|mus|5|La scala di do maggiore.|La escala de do mayor.
violino|violín|vioˈlino|S|mus|3|Il violino di Cremona antico.|El violín de Cremona antiguo.|g=m;p=violini
violoncello|violonchelo|violonˈtʃɛllo|S|mus|4|Il violoncello esegue l'assolo.|El violonchelo ejecuta el solo.|g=m;p=violoncelli
contrabbasso|contrabajo|kontrabˈbasso|S|mus|4|Il contrabbasso segna il tempo.|El contrabajo marca el tiempo.|g=m;p=contrabbassi
flauto|flauta|flauto|S|mus|4|Il flauto traverso dell'orchestra.|La flauta traversa de la orquesta.|g=m;p=flauti
clarinetto|clarinete|klariˈnetto|S|mus|4|Il clarinetto di Benny Goodman.|El clarinete de Benny Goodman.|g=m;p=clarinetti
tromba|trompeta|tromba|S|mus|4|La tromba intona la fanfara.|La trompeta entona la fanfarria.|g=f;p=trombe
sassofono|saxofón|sassoˈfɔno|S|mus|4|Il sassofono del jazz club.|El saxofón del jazz club.|g=m;p=sassofoni
percussioni|percusión|perkusˈsjoni|S|mus|5|Le percussioni tengono il ritmo.|Las percusiones llevan el ritmo.|g=f;n=Siempre plural
pianoforte|piano|pjanoˈfɔrte|S|mus|3|Il pianoforte a coda da concerto.|El piano de cola de concierto.|g=m;p=pianoforti
arpa|arpa|arpa|S|mus|5|L'arpa dorata dell'orchestra.|El arpa dorada de la orquesta.|g=f;n=Invariable
organista|organista|orgaˈnista|S|mus|5|L'organista suona il Bach.|El organista toca el Bach.|g=m;p=organisti
maestro|maestro|maˈɛstro|S|mus|3|Il maestro alza la bacchetta.|El maestro alza la batuta.|g=m;p=maestri;c=maestro di musica
direttore d'orchestra|director de orquesta|diretˈtore dorkɛstra|L|mus|5|Il direttore d'orchestra saluta il pubblico.|El director de orquesta saluda al público.
soprano|soprano|soˈprano|S|mus|4|Il soprano incanta nella Norma.|La soprano encanta en Norma.|g=m;n=Anche voce: il registro soprano
tenore|tenor|teˈnore|S|mus|4|Un tenore come Pavarotti.|Un tenor como Pavarotti.|g=m;p=tenori
baritono|barítono|bariˈtono|S|mus|5|Il baritono veste da Figaro.|El barítono se viste de Fígaro.|g=m;p=baritoni
basso profondo|bajo profundo|basso proˈfondo|L|mus|5|Un basso profondo da opera.|Un bajo profundo de ópera.
libretto|libreto|liˈbretto|S|mus|5|Il libretto della Traviata.|El libreto de La Traviata.|g=m;p=libretti
aria d'opera|aria de ópera|aria dopera|L|mus|5|L'aria della Butterfly.|El aria de Madame Butterfly.
opera lirica|ópera|opera liˈrika|L|mus|3|Un'opera lirica alla Scala.|Una ópera en la Scala.|c=l'Opera di Roma
melodramma|melodrama|melodramma|S|mus|5|Il melodramma italiano dell'Ottocento.|El melodrama italiano del novecientos.|g=m;p=melodrammi
bel canto|bel canto|bel ˈkanto|L|mus|5|La tradizione del bel canto italiano.|La tradición del bel canto italiano.
cantautore|cantautor|kantauˈtore|S|mus|4|Un cantautore genovese come De André.|Un cantautor genovés como De André.|g=m;p=cantautori
cover|cover|ˈkɔver|S|mus|4|Una cover acustica del classico.|Un cover acústico del clásico.|g=f;n=Anglicismo, invariable
refrain|estribillo|refrain|S|mus|4|Il refrain che tutti cantano.|El estribillo que todos cantan.|g=m;n=Invariable
rock|rock|rɔk|S|mus|3|Un concerto di rock italiano.|Un concierto de rock italiano.|g=m;n=Invariable
indie|indie|indi|S|mus|5|La scena indie milanese cresce.|La escena indie milanesa crece.|g=m;p=indie;n=Invariable
reggae|reggae|reɡɡe|S|mus|5|Un festival di reggae in Sardegna.|Un festival de reggae en Cerdeña.|g=m;n=Invariable
discoteca|discoteca|diskoˈteka|S|sve|3|Una discoteca sul mare di Riccione.|Una discoteca en el mar de Riccione.|g=f;p=discoteche
balera|salón de baile popular|baˈlɛra|S|mus|5|Una balera anni Sessanta.|Un salón de baile de los sesenta.|g=f;p=baliere;r=col
valzer|vals|valtser|S|mus|4|Un valzer lento a Vienna.|Un vals lento en Viena.|g=m;n=Invariable
tango|tango|taŋɡo|S|mus|4|Un tango di Piazzolla in piazza.|Un tango de Piazzolla en la plaza.|g=m;p=tango;n=Invariable
samba|samba|samba|S|mus|4|La samba del carnevale del Brasile.|La samba del carnaval de Brasil.|g=f;n=Invariable

# ══ cinema e spettacolo ══
sceneggiatura|guion|ʃʃenedʒatura|S|cin|5|La sceneggiatura vince il premio.|El guion gana el premio.|g=f;p=sceneggiature
regia|dirección (de cine)|reˈdʒia|S|cin|4|La regia del film è impeccabile.|La dirección de la película es impecable.|g=f;p=regie
attore protagonista|actor principal|attore protagoˈnista|L|cin|4|L'attore protagonista vince l'Oscar.|El actor principal gana el Óscar.
comparsa|extra (figurante)|komˈparsa|S|cin|5|Ha iniziato come comparsa a Cinecittà.|Empezó como extra en Cinecittà.|g=f;p=comparse
doppiaggio|doblaje|doppatˈtʃaddʒo|S|cin|4|Il doppiaggio italiano del film.|El doblaje italiano de la película.|g=m;n=L'Italia doppia quasi tutto!
doppiare|doblar|dopˈpjare|V|cin|4|Doppia la voce del villain.|Dobla la voz del villano.|n=Il doppiatore = el actor de doblaje
scena|escena|ʃʃena|S|cin|3|La scena finale mozzafiato.|La escena final de infarto.|g=f;p=scene;c=scena madre
ciak|claqueta|tʃak|S|cin|5|Il ciak dell'ultima scena.|La claqueta de la última escena.|g=m;n=Onomatopeico, invariable
ciak si gira|¡acción!|tʃak si ˈdʒira|L|cin|5|Ciak, si gira! urla il regista.|¡Acción! grita el director.|r=inf
set|set|sɛt|S|cin|4|Il set allestito in piazza del Duomo.|El set montado en la plaza del Duomo.|g=m;n=Invariable
trucco|maquillaje|trukko|S|cin|3|Il trucco dell'attore trasformato.|El maquillaje del actor transformado.|g=m;p=trucchi
costumista|vestuarista|kostumista|S|cin|5|La costumista dell'ultimo film del regista.|El vestuarista de la última película.|g=m;p=costumisti
montaggio|montaje|monˈtaddʒo|S|cin|4|Il montaggio serrato dell'azione.|El montaje veloz de la acción.|g=m;p=montaggi
effetti speciali|efectos especiales|efˈfetti speˈtʃali|L|cin|4|Gli effetti speciali del blockbuster.|Los efectos especiales del taquillazo.
cinepanettone|comedia navideña italiana|tʃinepanetˈtone|S|cin|5|Un cinepanettone col solito cast.|Una comedia navideña con el elenco de siempre.|g=m;n=Genere italiano natalizio;r=col
colossal|superproducción|koloˈssal|S|cin|5|Un colossal di tre ore sul Novecento.|Una superproducción de tres horas sobre el novecientos.|g=m;n=Invariable
cortometraggio|cortometraje|kortometraˈdʒo|S|cin|4|Un cortometraggio di dieci minuti.|Un cortometraje de diez minutos.|g=m;p=cortometraggi
documentario|documental|dokumentaˈrjo|S|cin|3|Un documentario sulle api.|Un documental sobre las abejas.|g=m;p=documentari
biopic|biopic|bajopik|S|cin|5|Un biopic sul campione del secolo.|Un biopic sobre el campeón del siglo.|g=m;n=Invariable
thriller|thriller|triller|S|cin|3|Un thriller psicologico nordico.|Un thriller psicológico nórdico.|g=m;n=Invariable
horror|terror|hɔrror|S|cin|4|Un film horror giapponese inquietante.|Una película de terror japonesa inquietante.|g=m;n=Invariable
commedia all'italiana|comedia a la italiana|kommedia allitaˈljana|L|cin|5|La commedia all'italiana degli anni Sessanta.|La comedia a la italiana de los sesenta.
western all'italiana|western espagueti|wɛstern allitaˈljana|L|cin|5|Il western all'italiana di Leone.|El western espagueti de Leone.
botteghino|taquilla|botteɡino|S|cin|4|Il botteghino del primo weekend.|La taquilla del primer fin de semana.|g=m;n=Invariable
festival del cinema|festival de cine|festival del tʃinema|L|cin|4|Il festival del cinema di Venezia.|El festival de cine de Venecia.
premio Oscar|premio Óscar|prɛmio ˈɔskar|L|cin|3|Tre nomination e un premio Oscar.|Tres nominaciones y un Óscar.
nomination|nominación|nominaˈtsjone|S|cin|4|La nomination alla miglior attrice.|La nominación a mejor actriz.|g=f;n=Anglicismo, invariable
critica cinematografica|crítica cinematográfica|kritika tʃinematografika|L|cin|5|La critica cinematografica del quotidiano.|La crítica cinematográfica del diario.
spoiler|spoiler|spɔiler|S|cin|3|Niente spoiler sul finale!|¡Nada de spoilers del final!|g=m;n=Invariable;r=col
plot twist|giro de guion|plot twist|L|cin|5|Un plot twist che ribalta tutto.|Un giro de guion que lo cambia todo.|r=col
sequel|secuela|sikwel|S|cin|4|Il sequel supera l'originale.|La secuela supera la original.|g=m;n=Invariable
prequel|precuela|prekuel|S|cin|5|Il prequel della saga di fantascienza.|La precuela de la saga de ciencia ficción.|g=m;n=Invariable
saga|saga|saɡa|S|cin|4|La saga completa di Fantozzi.|La saga completa de Fantozzi.|g=f;p=saghe
trilogia|trilogía|triloˈdʒia|S|cin|4|La trilogia del Padrino al cinema.|La trilogía de El Padrino en el cine.|g=f;p=trilogie
cineforum|cinefórum|tʃinefoˈrum|S|cin|5|Il cineforum parrocchiale del venerdì.|El cinefórum parroquial del viernes.|g=m;n=Invariable
streaming|streaming|striming|S|tec|3|Guardo il film in streaming legale.|Veo la película en streaming legal.|g=m;n=Invariable
abbonamento streaming|suscripción de streaming|abbonamenˈto striming|L|tec|4|L'abbonamento streaming della piattaforma.|La suscripción de streaming de la plataforma.
maratona di serie|maratón de series|maraˈtona di ˈsɛrie|L|sve|4|Una maratona di serie tutto il weekend.|Un maratón de series todo el fin de semana.
episodio|episodio|epiˈzɔdjo|S|cin|3|L'episodio finale della serie.|El episodio final de la serie.|g=m;p=episodi
spoilerare|hacer spoiler|spɔileˈrare|V|cin|4|Non spoilerarmi il finale!|¡No me hagas spoiler del final!|r=col
`, "B1", "k-x6");
