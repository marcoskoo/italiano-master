import { parsePack } from "./compact";
import type { VocabWord } from "../types";

/* ── Pack K·X10 · reposición cotidiana final (A2→B2) ───────────────── */

export const PACK_KX10: VocabWord[] = parsePack(`
# ══ verbi quotidiani mancanti ══
appoggiare|apoyar|appoˈdʒare|V|ast|3|Appoggia la scala al muro.|Apoya la escalera en la pared.|c=appoggiarsi a
appoggiarsi|apoyarse|appoˈdʒarsi|V|ast|3|Si appoggia alla ringhiera.|Se apoya en la baranda.
ringhiera|baranda|rinɡɡjera|S|cas|4|La ringhiera del terrazzo in ferro.|La baranda del balcón de hierro.|g=f;p=ringhiere
scivolare|resbalar|ʃʃivoˈlare|V|cor|3|Scivolo sul pavimento bagnato.|Resbalo en el piso mojado.|n=Sustantivo: lo scivolo = el tobogán
inciampare|tropezar|intʃiamˈpare|V|cor|4|Inciampo sul tappeto della scala.|Tropiezo con la alfombra de la escalera.|c=inciampare in
cadere|caer|kaˈdɛre|V|cor|2|Il bicchiere è caduto dal tavolo.|El vaso cayó de la mesa.|n=Io cado; participio caduto
rialzarsi|levantarse (de caída)|riarˈltsarsi|V|cor|4|Cadde ma si rialzò subito.|Cayó pero se levantó enseguida.
sollevare|levantar|solleˈvare|V|ast|3|Solleva la valigia sullo scaffale.|Levanta la maleta al estante.|c=sollevare un peso
abbassare|bajar|abbaʃˈʃare|V|ast|3|Abbassa la voce per favore.|Baja la voz por favor.|a=alzare
alzare|subir|alˈtsare|V|ast|3|Alza il volume della radio.|Sube el volumen de la radio.|a=abbassare
girarsi|darse la vuelta|dʒiˈrarsi|V|cor|3|Si gira di scatto al rumore.|Se da la vuelta de golpe al ruido.
voltarsi|voltearse|volˈtarsi|V|cor|3|Voltati un attimo, guarda qui.|Volteate un momento, mira esto.
chinarsi|inclinar (agacharse)|kiˈnarsi|V|cor|4|Si china per raccogliere la moneta.|Se agacha para recoger la moneda.|s=abbassarsi
allungare|alargar|allunɡare|V|ast|3|Allunga il passo per il semaforo.|Acelera el paso para el semáforo.|n=Allunga anche = estirar
accorciare|acortar|akkorˈtʃjare|V|ast|4|Accorcia la gonna di dieci centimetri.|Acorta la falda diez centímetros.|a=allungare
accorciare la strada|acortar camino|akkortʃjare la strada|L|tra|5|Accorciamo la strada per il bosco.|Acortamos camino por el bosco.
accomodarsi|acomodarse|akkomoˈdarsi|V|rel|4|Si accomodi pure in salotto.|Acomódese en la sala.|r=for
mettersi comodo|ponerse cómodo|mettersi ˈkɔmodo|L|cas|3|Mettiti comodo sul divano.|Ponte cómodo en el sofá.
sistemarsi|instalarse|sisteˈmarsi|V|cas|3|Ci sistemiamo in albergo alle tre.|Nos instalamos en el hotel a las tres.
trasloco|mudanza|trasˈlɔko|S|cas|3|Il trasloco sabato con gli amici.|La mudanza el sábado con los amigos.|g=m;p=traslochi
scatolone|caja grande|skatoˈlone|S|cas|4|Uno scatolone di libri pesante.|Una caja de libros pesada.|g=m;p=scatoloni
imballaggio|embalaje (acción)|imbalaˈddʒo|S|cmp|5|L'imballaggio dei bicchieri di cristallo.|El embalaje de las copas de cristal.|g=m;p=imballaggi
allevare|criar|alleˈvare|V|ani|4|Allevano galline nel giardino.|Crían gallinas en el jardín.|n=Allevamento = la crianza
allevamento|granja (crianza)|allevamento|S|ani|5|Un allevamento di bovini al pascolo.|Una granja de bovinos en pastoreo.|g=m;p=allevamenti
pascolo|pastizal|paˈskolo|S|nat|5|Le pecore al pascolo in altura.|Las ovejas en el pastizal de altura.|g=m;p=pascoli
stalla|establo|stalla|S|ani|5|Le mucche tornano alla stalla.|Las vacas vuelven al establo.|g=f;p=stalle
fienile|pajar|fjeˈnile|S|ani|5|Il fienile rosso della cascina.|El pajar rojo de la hacienda.|g=m;p=fienili
cascina|hacienda lombarda|kaʃʃina|S|ani|5|La cascina a corte della Lomellina.|La hacienda de patio de la Lomellina.|g=f;p=cascine;n=Tipica della pianura padana
pollaio|gallinero|polˈlajo|S|ani|5|Il pollaio con le cinque galline.|El gallinero con las cinco gallinas.|g=m;p=pollai;c=essere un pollaio
mungere|ordeñar|munɡere|V|ani|5|Munge le capre ogni mattina.|Ordeña las cabras cada mañana.|n=Io mungo; participio munto
caglio|cuajo|kaʎʎo|S|ali|5|Il caglio naturale per la mozzarella.|El cuajo natural para la mozzarella.|g=m;n=Invariable
caseificio|quesería|kazeifiˈtʃo|S|ali|5|Il caseificio del paese produce pecorino.|La quesería del pueblo produce pecorino.|g=m;p=caseifici
pecorino romano|pecorino romano|pekoˈrino romano|L|ali|4|Il pecorino romano grattugiato.|El pecorino romano rallado.
parmigiano reggiano|parmesano reggiano|parmiddʒano redddʒano|L|ali|4|Il parmigiano reggiano di ventiquattro mesi.|El parmesano reggiano de veinticuatro meses.|n=Il "parmigiano" vero si chiama così
gorgonzola|gorgonzola|ɡorɡonˈdzɔla|S|ali|4|Il gorgonzola piccante nel risotto.|El gorgonzola picante en el risotto.|g=m;n=Invariable
taleggio|taleggio|taˈleddʒo|S|ali|5|Il taleggio della Valsassina.|El taleggio de la Valsassina.|g=m;n=Invariable
fontina|fontina|fonˈtina|S|ali|5|La fontina valdostana per la fonduta.|La fontina valdostana para la fonduta.|g=f;n=Invariable
fonduta|fondue|fonˈduta|S|ali|5|La fonduta valdostana con la polenta.|La fondue valdostana con polenta.|g=f;p=fondute
mascarpone|mascarpone|maskarˈpone|S|ali|4|Il mascarpone per il tiramisù.|El mascarpone para el tiramisú.|g=m;n=Invariable
zabaione|zabaione|dzabaione|S|ali|5|Lo zabaione col marsala della nonna.|El zabaione con marsala de la abuela.|g=m;n=Invariable
pandoro|panettone dorado|panˈdɔro|S|ali|4|Il pandoro di Verona con lo zucchero a velo.|El pandoro de Verona con azúcar glas.|g=m;p=pandori
zucchero a velo|azúcar glas|tsukkero a velo|L|ali|4|Lo zucchero a velo sul pandoro.|El azúcar glas sobre el pandoro.
velo|velo (capa fina)|velo|S|ast|5|Un velo di zucchero sulla torta.|Un velo de azúcar sobre la torta.|g=m;p=veli;c=un velo di
crema pasticcera|crema pastelera|krema pastiˈtʃera|L|ali|4|La crema pasticcera della crostata.|La crema pastelera de la crostata.
crostata|crostata|krosˈtata|S|ali|3|Una crostata di marmellata fatta in casa.|Una crostata de mermelada casera.|g=f;p=crostate
cantalupo|cantalupo|kantaˈlupo|S|ali|5|Un cantalupo maturo d'estate.|Un melón cantalupo maduro de verano.|g=m;p=cantalupi
cocomero|sandía|kokoˈmero|S|ali|4|Il cocomero fresco del litorale.|La sandía fresca del litoral.|g=m;p=cocomeri
pesca noce|nectarina|peska ˈnɔtʃe|L|ali|5|Le pesche noci gialle d'agosto.|Las nectarinas amarillas de agosto.
prugna|ciruela|pruɲɲa|S|ali|3|Le prugne secche per la torta.|Las ciruelas pasas para la torta.|g=f;p=prugne
susina|ciruela (susina)|suˈzina|S|ali|5|La susina santa rosa di luglio.|La ciruela santa rosa de julio.|g=f;p=susine;n=Variante di prugna
`, "A2", "k-x10");
