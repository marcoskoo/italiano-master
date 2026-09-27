import { parsePack } from "./compact";
import type { VocabWord } from "../types";

/* ── Pack K·X22 · botanica, orto ed erbe aromatiche (A2→B2) ──────── */

export const PACK_KX22: VocabWord[] = parsePack(`
# ══ alberi e piante ══
salice|sauce|ˈsatʃe|S|nat|5|Il salice piange sul fiume.|El sauce llora sobre el río.|g=m;p=salici
pioppo|álamo|ˈpjoppo|S|nat|5|I pioppi lungo il viale.|Los álamos a lo largo del paseo.|g=m;p=pioppi
quercia|roble|ˈkwertʃa|S|nat|4|Una quercia secolare nel bosco.|Un roble centenario en el bosque.|g=f;p=querce
leccio|encina|ˈlettʃo|S|nat|5|Il leccio sempre verde della macchia.|La encina siempre verde de la mata.|g=m;p=lecci
ginepro|enebro|dʒiˈnepro|S|nat|5|Il ginepro profuma di montagna.|El enebro huele a montaña.|g=m;p=ginepri
ginestra|retama|dʒiˈnestra|S|nat|5|La ginestra fiorisce in maggio.|La retama florece en mayo.|g=f;p=ginestre
campanula|campanilla|kampaˈnula|S|nat|5|Una campanula blu tra le rocce.|Una campanilla azul entre las rocas.|g=f;p=campanule
convolvolo|correhuela|konˈvolvolo|S|nat|5|Il convolvolo invade l'orto.|La correhuela invade el huerto.|g=m;p=convolvoli
ortica|ortiga|ˈortika|S|nat|5|Attenzione alle ortiche lungo il sentiero.|Cuidado con las ortigas por el sendero.|g=f;p=ortiche;c=cadere nelle ortiche
cardo|cardo|ˈkardo|S|nat|5|Il cardo spinoso del campo.|El cardo espinoso del campo.|g=m;p=cardi
viola del pensiero|pensamiento|ˈvjola del penˈsjero|L|nat|5|Le viole del pensiero sul balcone.|Los pensamientos en el balcón.
girino|renacuajo|dʒiˈrino|S|ani|5|I girini nuotano nello stagno.|Los renacuajos nadan en el estanque.|g=m;p=girini
grattacielo|rascacielos|grattaˈtʃjɛlo|S|cit|3|Un grattacielo di vetro a Milano.|Un rascacielos de cristal en Milán.|g=m;p=grattacieli

# ══ orto e verdure ══
asparago|espárrago|aˈsparago|S|ali|4|Gli asparagi con la besciamella.|Los espárragos con bechamel.|g=m;p=asparagi
carciofo|alcachofa|karˈtʃofo|S|ali|4|I carciofi fritti alla romana.|Las alcachofas fritas a la romana.|g=m;p=carciofi
rapa|nabo|ˈrapa|S|ali|5|Le rape bianche d'inverno.|Los nabos blancos de invierno.|g=f;p=rape
pastinaca|chirivía|pastiˈnaka|S|ali|5|La pastinaca arrostita al forno.|La chirivía asada al horno.|g=f;p=pastinache
sedano rapa|apionabo|ˈsedano rapa|L|ali|5|Il sedano rapa nella zuppa.|El apionabo en la sopa.
barbabietola|remolacha|barbaˈbjɛtola|S|ali|4|La barbabietola rossa cruda.|La remolacha roja cruda.|g=f;p=barbabietole
cicoria|achicoria|tʃiˈkorja|S|ali|5|La cicoria ripassata in padella.|La achicoria rehogada en sartén.|g=f;p=cicorie
rucola|rúcula|ˈrukola|S|ali|4|L'insalata con la rucola fresca.|La ensalada con rúcula fresca.|g=f;n=Invariable en el uso
valeriana|valeriana|valeriˈana|S|ali|5|La valeriana dell'insalata mista.|La valeriana de la ensalada mixta.|g=f;n=Invariable
catalogna|catativa|kataˈloɲɲa|S|ali|5|La catalogna alla napoletana.|La catativa a la napolitana.|g=f;n=Verdura pugliese
finocchio selvatico|hinojo silvestre|fiˈnɔkkjo selvatico|L|ali|5|Il finocchio selvatico con le sarde.|El hinojo silvestre con las sardinas.

# ══ erbe aromatiche ══
alloro|laurel|alˈloro|S|ali|4|Una foglia d'alloro nel sugo.|Una hoja de laurel en la salsa.|g=m;p=allori
salvia|salvia|ˈsalvja|S|ali|4|La salvia fritta con il burro.|La salvia frita con mantequilla.|g=f;p=salvie
maggiorana|mejorana|maddʒoˈrana|S|ali|5|La maggiorana sulla pizza.|La mejorana sobre la pizza.|g=f;n=Invariable
dragoncello|estragón|dragonˈtʃello|S|ali|5|Il dragoncello nella salsa bernese.|El estragón en la salsa bearnesa.|g=m;p=dragoncelli
aneto|eneldo|aˈneto|S|ali|5|L'aneto con il salmone affumicato.|El eneldo con el salmón ahumado.|g=m;n=Invariable
cumino|comino|kuˈmino|S|ali|5|Il cumino nel pane di segale.|El comino en el pan de centeno.|g=m;n=Invariable

# ══ frutti di bosco e salumi ══
lampone|frambuesa|lamˈpone|S|ali|4|I lamponi con la panna.|Las frambuesas con nata.|g=m;p=lamponi
mirtillo|arándano|mirˈtillo|S|ali|4|I mirtilli neri della montagna.|Los arándanos negros de la montaña.|g=m;p=mirtilli
frutto di bosco|fruto del bosque|frutto di bosco|L|ali|4|Una torta ai frutti di bosco.|Una tarta de frutos del bosque.
noce moscata|nuez moscada|ˈnotʃe moskata|L|ali|4|Una grattugiata di noce moscata.|Una ralladura de nuez moscada.
luganega|longaniza|luɡaˈnega|S|ali|5|La luganega grigliata alla fiera.|La longaniza a la parrilla en la feria.|g=f;n=Salume lombardo
cotechino|cotechino|koteˈkino|S|ali|5|Il cotechino con le lenticchie.|El cotechino con lentejas.|g=m;p=cotechini
petto di pollo|pechuga de pollo|petto di pollo|L|ali|3|Un petto di pollo alla griglia.|Una pechuga de pollo a la plancha.
coscia|muslo|ˈkossja|S|ali|4|Le cosce di pollo al forno.|Los muslos de pollo al horno.|g=f;p=cosce
cacciatora|a la cazadora|kattʃaˈtora|L|ali|5|Il pollo alla cacciatora.|El pollo a la cazadora.|n=Modo di cucinare
`, "A2", "k-x22");
