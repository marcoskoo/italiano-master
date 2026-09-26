import { parsePack } from "./compact";
import type { VocabWord } from "../types";

/* ── Pack K·X2 · reposición B1 (MCER B1) ───────────────────────────── */

export const PACK_KX2: VocabWord[] = parsePack(`
# ══ attrezzi e fai-da-te ══
martello|martillo|marˈtɛllo|S|tec|3|Colpisce il chiodo col martello.|Golpea el clavo con el martillo.|g=m;p=martelli
cacciavite|desarmador|katʃiˈavite|S|tec|3|Serve un cacciavite a stella.|Necesita un desarmador de estrella.|g=m;p=cacciaviti
pinza|pinza|pinza|S|tec|4|La pinza per i cavi.|La pinza para los cables.|g=f;p=pinze
chiave inglese|llave inglesa|kjaˈve inɡleze|L|tec|4|La chiave inglese per il bullone.|La llave inglesa para el perno.
brugola|allen key|bruɡola|S|tec|5|La brugola per montare il mobile.|La allen key para armar el mueble.|g=f;n=Milanismo
trapano|taladro|traˈpano|S|tec|4|Il trapano per il muro.|El taladro para la pared.|g=m;p=trapani
sega|sierra|seɡa|S|tec|4|La sega per il ramo secco.|La sierra para la rama seca.|g=f;p=seghe
chiodo|clavo|kiɔdo|S|tec|3|Un chiodo nel muro per il quadro.|Un clavo en la pared para el cuadro.|g=m;p=chiodi;c=chiodo scaccia chiodo
vite|tornillo|vite|S|tec|3|Stringi la vite del manico.|Aprieta el tornillo del mango.|g=f;p=viti
bullone|perno|bulˈlone|S|tec|5|Un bullone arrugginito.|Un perno oxidado.|g=m;p=bulloni
rondella|arandela|rondɛlla|S|tec|5|Una rondella sotto il bullone.|Una arandela bajo el perno.|g=f;p=rondelle
trappola|trampa|trappla|S|tec|4|Una trappola per topi in cantina.|Una trampa para ratones en el sótano.|g=f;p=trappole
ruggine|óxido|rudˈdʒine|S|tec|4|La ruggine sulla bici vecchia.|El óxido en la bici vieja.|g=f;c=arrugginire
arrugginire|oxidarse|arrudˈdʒinire|V|tec|5|La cancellata si è arrugginita.|La reja se oxidó.
ingranaggio|engranaje|inɡranaddʒo|S|tec|5|Un ingranaggio del cambio rotto.|Un engranaje del cambio roto.|g=m;p=ingranaggi
scarico|desagüe|skariko|S|cas|4|Lo scarico del lavandino otturato.|El desagüe del lavatorio tapado.|g=m;p=scarichi
ostruito|obstruido|ostruˈito|A|cas|4|Il tubo è ostruito dal calcare.|El tubo está obstruido por el sarro.
calcare|sarro|kalkare|S|cas|4|Il calcare della doccia.|El sarro de la ducha.|g=m;n=Invariable
otturare|tapar (obturar)|ottuˈrare|V|cas|4|Il lavandino si è otturato.|El lavatorio se tapó.

# ══ piante e giardino ══
pianta|planta|pianta|S|nat|2|Una pianta grassa sul davanzale.|Una planta suculenta en la ventana.|g=f;p=piante;c=pianta grassa
alberello|arbolito|albeˈrɛllo|S|nat|5|Un alberello di limoni in vaso.|Un arbolito de limones en maceta.|g=m;p=alberelli
arbusto|arbusto|arˈbusto|S|nat|5|Un arbusto fiorito sul viale.|Un arbusto florecido en la avenida.|g=m;p=arbusti
cespuglio|matorral|tʃeˈspuʎʎo|S|nat|4|Un cespuglio di more selvatiche.|Un matorral de moras silvestres.|g=m;p=cespugli
rovo|zarzal|rovo|S|nat|5|Un rovo di more sul sentiero.|Un zarzal de moras en el sendero.|g=m;p=Rovi
edera|hiedra|edera|S|nat|5|L'edera sul muro del giardino.|La hiedra en la pared del jardín.|g=f;n=Invariable
rampicante|trepadora|rampiˈkante|A|nat|4|Una pianta rampicante sul pergolato.|Una planta trepadora en el pérgola.
pergolato|pérgola|perɡoˈlato|S|nat|5|Il pergolato di vite in cortile.|El pérgola de vid en el patio.|g=m;p=pergolati
vigna|viña|viɲɲa|S|nat|4|Una vigna sul colle toscano.|Una viña en la colina toscana.|g=f;p=vigne
ulivo|olivo|uˈlivo|S|nat|3|Un ulivo secolare in Puglia.|Un olivo centenario en Apulia.|g=m;p=ulivi
oliveto|olivar|oliˈveto|S|nat|5|L'oliveto digradante verso il mare.|El olivar descendiendo hacia el mar.|g=m;p=oliveti
frutteto|huerto frutal|frutˈteto|S|nat|5|Il frutteto di mele della valle.|El huerto frutal de manzanas del valle.|g=m;p=frutteti
 campo coltivato|campo cultivato|kampo koltivaˈto|L|nat|5|Un campo coltivato a grano.|Un campo cultivado de trigo.
grano|trigo|ɡrano|S|nat|4|Il grano dorato di luglio.|El trigo dorado de julio.|g=m;n=Grano anche = grano
spiga|espiga|spiɡa|S|nat|5|Una spiga di grano maturo.|Una espiga de trigo maduro.|g=f;p=spighe
girasole|girasol|dʒiraˈsoːle|S|nat|4|Un campo di girasoli in Umbria.|Un campo de girasoles en Umbría.|g=m;p=girasoli
papavero|amapola|paˈpavero|S|nat|4|I papaveri rossi ai bordi.|Las amapolas rojas al borde.|g=m;p=papaveri
primula|primavera (flor)|priˈmula|S|nat|5|Le primule sul balcone a marzo.|Las primaveras en el balcón en marzo.|g=f;p=primule
viola mammola|violeta|ˈvjɔla mammola|L|nat|5|Le viole mammole nel bosco.|Las violetas en el bosco.
margherita|margarita|marɡeˈrita|S|nat|3|Una margherita tra le fessure.|Una marguerita entre las rendijas.|g=f;p=margherite
tarassaco|diente de león|tarasˈsako|S|nat|5|Il tarassaco soffione nel prato.|El diente de león en el pasto.|g=m;p=tarassaci
soffione|globito (diente de león)|soffjone|S|nat|5|Un soffione da soffiare via.|Un globito para soplar.|g=m;p=soffioni
tulipano|tulipán|tuliˈpano|S|nat|4|I tulipani del giardino olandese.|Los tulipanes del jardín holandés.|g=m;p=tulipani
giglio|lirio|ˈdʒiʎʎo|S|nat|5|Il giglio fiorentino sullo stemma.|El lirio florentino en el escudo.|g=m;p=gigli
mimosa|mimosa|miˈmoza|S|nat|4|La mimosa dell'8 marzo.|La mimosa del 8 de marzo.|g=f;n=Regalo della festa della donna
buon odore|buen olor|bwɔn ˈɔdore|L|nat|4|Il buon odore del gelsomino.|El buen olor del jazmín.
gelsomino|jazmín|dʒelsoˈmino|S|nat|5|Il gelsomino notturno in giardino.|El jazmín nocturno en el jardín.|g=m;p=gelsomini

# ══ geografia ══
penisola|península|peniˈzola|S|nat|3|La penisola italiana a stivale.|La península italiana en bota.|g=f;p=penisole
arcipelago|archipiélago|artʃiˈpɛlago|S|nat|5|L'arcipelago delle Egadi.|El archipiélago de las Egadi.|g=m;p=arcipelaghi
golfo|golfo|ɡɔlfo|S|nat|4|Il golfo di Napoli incantevole.|El golfo de Nápoles encantador.|g=m;p=golfi
baia|bahía|baˈja|S|nat|4|Una baia riparata dal vento.|Una bahía protegida del viento.|g=f;p=baie
promontorio|promontorio|promonˈtorjo|S|nat|5|Il promontorio di Portofino.|El promontorio de Portofino.|g=m;p=promontori
scoglio|arrecife (roca)|skɔʎʎo|S|nat|5|Uno scoglio a picco sul mare.|Una roca a pique sobre el mar.|g=m;p=scogli
scogliera|acantilado|ʃʃoʎʎera|S|nat|4|La scogliera a strapiombo.|El acantilado a pique.|g=f;p=scogliere
litorale|litoral|litoˈrale|S|nat|5|Il litorale sabbioso della Versilia.|El litoral arenoso de la Versilia.|g=m;p=litorali
duna|duna|duna|S|nat|5|Le dune di sabbia di Piscinas.|Las dunas de arena de Piscinas.|g=f;p=dune
estuario|estuario|estwarjo|S|nat|5|L'estuario del fiume Tevere.|El estuario del río Tíber.|g=m;p=estuari
delta|delta|delta|S|nat|5|Il delta del Po.|El delta del Po.|g=m;n=Invariable
sorgente|manantial|sorˈdʒɛnte|S|nat|5|La sorgente fresca in montagna.|El manantial fresco en la montaña.|g=f;p=sorgenti
cascata|cascada|kaʃˈʃata|S|nat|4|La cascata delle Marmore.|La cascada de las Marmore.|g=f;p=cascate;s=waterfall
torrente|torrente|torˈrɛnte|S|nat|4|Il torrente in piena d'autunno.|El torrente crecido de otoño.|g=m;p=torrenti
in piena|crecido (en crecida)|in ˈpjena|L|nat|5|Il fiume in piena travolge il ponte.|El río crecido arrastra el puente.
pendenza|pendiente|penˈdentsa|S|nat|5|Una pendenza del dieci per cento.|Un pendiente del diez por ciento.|g=f;p=pendenze
gola|desfiladero|ɡola|S|nat|5|La gola del Furlo scavata dal fiume.|El desfiladero del Furlo excavado por el río.|g=f;p=gole
forra|quebrada|forra|S|nat|5|La forra torrentizia appenninica.|La quebrada torrencial apenina.|g=f;p=forre
altopiano|altiplano|altoˈpjano|S|nat|5|L'altopiano delle Cinque Miglia.|El altiplano de las Cinco Miglia.|g=m;p=altipiani
catena montuosa|cordillera|katena montuoza|L|nat|4|La catena montuosa delle Alpi.|La cordillera de los Alpes.
dolomiti|Dolomitas|dolomiti|S|nat|4|Le Dolomiti rosa all'alba.|Las Dolomitas rosadas al alba.|g=f;n=Siempre plural
cratere|cráter|kraˈtere|S|nat|5|Il cratere dell'Etna fumante.|El cráter del Etna humeante.|g=m;p=crateri
sismico|sísmico|sizmiko|A|sci|4|Una zona sismica ad alto rischio.|Una zona sísmica de alto riesgo.|c=attività sismica
terremoto|terremoto|terreˈmoto|S|nat|3|Il terremoto dell'Aquila del 2009.|El terremoto de L'Aquila de 2009.|g=m;p=terremoti
magnitudo|magnitud|maɲɲiˈtudo|S|sci|5|Terremoto di magnitudo 5.2.|Terremoto de magnitud 5.2.|g=f;p=magnitudo;n=Invariable
scossa|sacudida|skɔssa|S|nat|4|Una scossa leggera nella notte.|Una sacudida leve en la noche.|g=f;p=scosse

# ══ studi e scuola extra ══
lezione privata|clase particular|ledˈtsjone privata|L|stu|4|Do lezioni private di chitarra.|Doy clases particulares de guitarra.
ripetizioni|clases de refuerzo|repetiˈtsjoni|S|stu|4|Faccio ripetizioni ai ragazzini.|Doy clases de refuerzo a los chicos.|g=f;n=Siempre plural
compito in classe|prueba de clase|komˈpito in ˈklasse|L|stu|3|Domani c'è il compito in classe di matematica.|Mañana hay prueba de matemática.
assenza giustificata|ausencia justificada|asˈzentsa dʒustifiˈkata|L|stu|4|Porta la giustificazione domani.|Trae la justificación mañana.
giustificazione|justificación|dʒustifikatˈtsjone|S|stu|4|La giustificazione del papà.|La justificación del papá.|g=f;p=giustificazioni
compito a casa|tarea|komˈpito a ˈkasa|L|stu|2|I compiti a casa ogni pomeriggio.|Las tareas cada tarde.
silenzio|silencio|silenˈtsjo|S|stu|2|Silenzio, si lavora!|¡Silencio, se trabaja!|g=m;n=Invariable
diario|diario (agenda escolar)|diaˈrjo|S|stu|3|Il diario con gli orari e i compiti.|El cuaderno con horarios y tareas.|g=m;p=diari
zainetto|mochilina|dzaiˈnetto|S|stu|4|Uno zainetto leggero per la scuola.|Una mochilita ligera para la escuela.|g=m;p=zainetti
merenda|lonche (merienda)|meˈrɛnda|S|ali|3|La merenda delle quattro dei bimbi.|El lonche de las cuatro de los niños.|g=f;p=merende;c=fare merenda
mensa|comedor (universitario)|mɛnsa|S|stu|3|La mensa universitaria affollata.|El comedor universitario lleno.|g=f;p=mense
convitto|internado|konvitto|S|stu|5|Un convitto per studenti fuorisede.|Un internado para estudiantes de afuera.|g=m;p=convitti
fuorisede|de otra ciudad (estudiante)|fworiseːde|S|stu|4|Molti studenti fuorisede a Pisa.|Muchos estudiantes de afuera en Pisa.|g=m;n=Muy italiano: chi studia lontano da casa
tassa universitaria|matrícula universitaria|tassa universiˈtaria|L|stu|4|Le tasse universitarie aumentano.|Las matrículas universitarias suben.
esame di maturità|examen de bachillerato|eˈzame di maturita|L|stu|3|L'esame di maturità a giugno.|El examen de bachillerato en junio.
maturità|bachillerato (madurez)|maturita|S|stu|3|La maturità classica al liceo.|El bachillerato clásico en el liceo.|g=f;n=Invariable
diploma di maturità|título de bachiller|diˈploma di maturita|L|stu|4|Il diploma di maturità scientifica.|El título de bachiller científico.
`, "B1", "k-x2");
