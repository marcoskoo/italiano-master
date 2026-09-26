import { parsePack } from "./compact";
import type { VocabWord } from "../types";

/* ── Pack K·X19 · pack final (A2→B2) ───────────────────────────────── */

export const PACK_KX19: VocabWord[] = parsePack(`
# ══ professioni e mestieri restanti ══
fioraio|florista|fjoˈrajo|S|pro|3|Il fioraio sotto casa all'angolo.|El florista bajo casa en la esquina.|g=m;p=fiorai
orologiaio|relojero|oroloˈdʒajo|S|pro|5|L'orologiaio ripara l'orologio svizzero.|El relojero repara el reloj suizo.|g=m;p=orologiai
ottico|óptico|ottiko|S|pro|4|L'ottico mi misura la vista.|El óptico me mide la vista.|g=m;p=ottici
lente a contatto|lente de contacto|lente a konˈtatto|L|cor|4|Le lenti a contatto giornaliere.|Las lentes de contacto diarias.
occhiali da vista|gafas de ver|okkali da ˈvista|L|cor|3|Nuovi occhiali da vista graduati.|Nuevas gafas de ver graduadas.
montatura|montura|montatura|S|rop|4|Una montatura leggera di titanio.|Una montura ligera de titanio.|g=f;p=montature
lenti graduate|lentes graduadas|lenti ɡraduate|L|cor|3|Le lenti graduate antiriflesso.|Las lentes graduadas antirreflejo.
viso|rostro|viso|S|cor|3|Un viso riposato dopo le vacanze.|Un rostro descansado tras las vacaciones.|g=m;p=volti;c=in faccia
cipiglio|ceño|tʃiˈpiʎʎo|S|cor|5|Un cipiglio corrucciato per lo studio.|Un ceño fruncido por el estudio.|g=m;n=Invariable;r=let
mascella|mandíbula|maʃʃella|S|cor|4|Una mascella serrata per la rabbia.|Una mandíbula apretada por la rabia.|g=f;p=mascelle
occhiaie|ojeras|okˈkjaie|S|cor|4|Le occhiaie per la notte in bianco.|Las ojeras por la noche en blanco.|g=f;p=occhiaie;n=Siempre plural
ruga|arruga|ruɡa|S|cor|4|Una ruga d'espressione in fronte.|Una arruga de expresión en la frente.|g=f;p=rughe
alito|aliento|alito|S|cor|4|L'alito fresco della mentina.|El aliento fresco de la menta.|g=m;n=Invariable;c;alito cattivo
sbadiglio|bostezo|zbaˈdiʎʎo|S|cor|3|Uno sbadiglio lungo durante il film.|Un bostezo largo durante la película.|g=m;p=sbadigli
starnuto|estornudo|starˈnuto|S|cor|4|Uno starnuto fragoroso improvviso.|Un estornudo fragoso repentino.|g=m;p=starnuti
colpo di tosse|acceso de tos|kolpo di tosse|L|cor|4|Un colpo di tosse secco imbarazzante.|Un acceso de tos seco embarazoso.
singhiozzo|hipo|sinɡɡwɔtso|S|cor|4|Il singhiozzo dopo il gelato trangugiato.|El hipo tras el helado tragado.|g=m;p=singhiozzi
brivido|escalofrío|briˈvido|S|cor|3|Un brivido lungo la schiena fredda.|Un escalofrío largo por la espalda fría.|g=m;p=brividi;c=brividi di freddo
pelle d'oca|piel de gallina|pelle dɔka|L|cor|4|Mi viene la pelle d'oca per l'emozione.|Se me pone piel de gallina por la emoción.
capelli ritti|pelo de gallina… erizado|kapelli ritti|L|cor|5|I capelli ritti per il brivido.|El pelo erizado por el escalofrío.
sudore|sudor|suˈdore|S|cor|4|Il sudore della gara di corsa.|El sudor de la carrera de fondo.|g=m;n=Invariable;c=sudori freddi
sudare|sudar|suˈdare|V|cor|3|Sudo sette camicie in salita.|Sudo siete camisas en la subida.|c=sudare freddo
bruciore|ardor|brutʃoˈro|S|cor|4|Un bruciore di stomaco da caffè.|Un ardor de estómago por café.|g=m;n=Invariable
prurito|picazón|pruˈrito|S|cor|4|Un prurito fastidioso alla gamba.|Una picazón molesta en la pierna.|g=m;n=Invariable
formicolio|hormigueo|formiˈkoljo|S|cor|5|Un formicolio al braccio addormentato.|Un hormigueo en el brazo dormido.|g=m;n=Invariable
arto addormentato|extremidad dormida|arto addormentato|L|cor|5|Il braccio addormentato sul cuscino.|El brazo dormido en la almohada.
crampo|calambre|krampo|S|cor|4|Un crampo al polpaccio in piscina.|Un calambre en la pantorrilla en la piscina.|g=m;p=crampi
polpaccio|pantorrilla|polˈpattʃo|S|cor|5|Un polpaccio allenato dal running.|Una pantorrilla entrenada por el running.|g=m;p=polpacci
nocca|nudillo|nɔkka|S|cor|5|Le nocche bianche per la stretta.|Los nudillos blancos por el apretón.|g=f;p=nocche
impronta|huella|imˈpronta|S|ast|4|L'impronta digitale sul vetro.|La huella digital en el vidrio.|g=f;p=impronte;c;lasciare un'impronta
orma|huella (pisada)|orma|S|nat|4|Le orme fresche sulla sabbia.|Las huellas frescas en la arena.|g=f;p=orme;c=seguire le orme
zampa|pata|tsampa|S|ani|3|La zampa del cane tesa per il saluto.|La pata del perro extendida para el saludo.|g=f;p=zampe
coda del cane|cola del perro|koda del ˈkane|L|ani|3|Il cane scodinzola con la coda.|El perro mueve la cola.
scodinzolare|mover la cola|skodintsoˈlare|V|ani|4|Il cane scodinzola felice.|El perro mueve la cola feliz.
muso|hocico|muˈzo|S|ani|3|Il muso bagnato del cagnolino.|El hocico mojado del perrito.|g=m;p=musi;c=ritrarre il muso
fare il muso|hacer pucheros|fare il muˈzo|L|emo|4|Fa il muso lungo per il gelato negato.|Hace pucheros por el helado negado.
orecchie a penzoloni|orejas caídas|orekkje a pentsoloni|L|ani|5|Le orecchie a penzoloni del beagle.|Las orejas caídas del beagle.
ringhiare|gruñir|rinɡɡjaˈre|V|ani|4|Il cane ringhia al passante.|El perro gruñe al transeúnte.
abbaiare|ladrar|abbaˈjare|V|ani|3|Il cane abbaia al campanello.|El perro ladra al timbre.
miagolare|maullar|mjaɡoˈlare|V|ani|4|Il gatto miagola alla finestra.|El gato maúlla en la ventana.
grugnire|grunir|ɡrunˈdʒire|V|ani|5|Il maiale grugnisce nel trogolo.|El cerdo grune en el comedero.
nitrire|relinchar|niˈtrire|V|ani|5|Il cavallo nitrisce nel prato.|El caballo relincha en el prado.|r=let
muggire|mugir|mudˈdʒire|V|ani|5|La mucca muggisce nella stalla.|La vaca muge en el establo.|r=let
belare|balar|beˈlare|V|ani|5|Le pecore belano al pascolo.|Las ovejas balan en el pastizal.|r=let
pigolare|piar|piɡoˈlare|V|ani|5|I pulcini pigolano nel nido.|Los pollitos pían en el nido.
gorgheggio|trino|ɡorɡedˈdʒo|S|nat|5|Il gorgheggio del merlo all'alba.|El trino del mirlo al alba.|g=m;p=gorgheggi;r=let
cinguettio|gorjeo|tʃinɡwetˈtito|S|nat|4|Il cinguettio mattutino dei passeri.|El gorjeo matutino de los gorriones.|g=m;n=Invariable
passero|gorrión|passero|S|ani|4|Un passero d'Italia sul davanzale.|Un gorrión común en el alféizar.|g=m;p=passeri
merlo|mirlo|merlo|S|ani|4|Il merlo nero col becco giallo.|El mirlo negro con pico amarillo.|g=m;p=merli;n=Anche: il merlo = el ingenuo
gabbiano|gaviota|ɡabbaˈljano|S|ani|3|Un gabbiano ruba il panino in spiaggia.|Una gaviota roba el pan en la playa.|g=m;p=gabbiani
picchio|pájaro carpintero|pikkjo|S|ani|5|Il picchio rosso picchietta il tronco.|El pájaro carpintero picotea el tronco.|g=m;p=picchi
civetta|lechuza|tʃiˈvetta|S|ani|5|La civetta bubola di notte.|La lechuza ulula de noche.|g=f;p=civette;n;Anche: fare la civetta
bubolare|ulular (lechuza)|buboˈlare|V|ani|5|La civetta bubola nel bosco.|La lechuza ulula en el bosque.|r=let

`, "B1", "k-x19");
