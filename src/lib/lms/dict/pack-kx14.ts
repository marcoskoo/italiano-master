import { parsePack } from "./compact";
import type { VocabWord } from "../types";

/* ── Pack K·X14 · hacia las 5000: deportes, juegos, ciudad, animales ── */

export const PACK_KX14: VocabWord[] = parsePack(`
# ══ sport e giochi ══
pallamano|balonmano|pallaˈmano|S|spt|4|La pallamano a scuola in palestra.|El balonmano en la escuela.|g=f;p=pallamano;n=Invariable
pallanuoto|waterpolo|pallanuɔto|S|spt|4|La pallanuoto italiana olimpionica.|El waterpolo italiano olímpico.|g=f;p=pallanuoto;n=Invariable
calcetto|futbolito|kalˈtʃetto|S|spt|3|Una partita a calcetto il giovedì.|Un partido de futbolito el jueves.|g=m;p=calcetti
calcio a cinque|fútbol 5|kaltʃo a tʃinˈkwe|L|spt|4|Il calcio a cinque al coperto.|El fútbol 5 bajo techo.
bocce|bolas|bottʃe|S|spt|4|Una partita a bocce al circolo.|Una partida de bolas en el club.|g=f;p=bocce
birilli|bolos|birilli|S|spt|5|Il gioco dei birilli al parco.|El juego de los bolos en el parque.|g=m;n=Siempre plural
freccette|dardos|frettʃette|S|spt|4|Il torneo di freccette del bar.|El torneo de dardos del bar.|g=f;p=freccette
biliardo|billar|biliˈardo|S|spt|4|Un tavolo da biliardo verde.|Una mesa de billar verde.|g=m;n=Invariable
biliardino|futbolín|biliardiˈno|S|spt|4|Il biliardino del bar pieno di monetine.|El futbolín del bar lleno de monedas.|g=m;p=biliardini
carta più alta|carta más alta|karta pjut alta|L|sve|5|Gioca la carta più alta del mazzo.|Juega la carta más alta del mazo.
mazzo di carte|mazo de cartas|maddzo di ˈkarte|L|sve|4|Un mazzo di carte francesi nuovo.|Un mazo de cartas francesas nuevo.
briscola|brisca|briscola|S|sve|4|La briscola in tre al bar.|La brisca de a tres en el bar.|g=f;n=Invariable;n2=Gioco di carte italico
tressette|tresette|tressette|S|sve|5|Il tressette a coppie in piazza.|El tresette en parejas en la plaza.|g=m;n=Invariable
scala quaranta|canasta|skala kwaranta|L|sve|5|La scala quaranta con la nonna.|La canasta con la abuela.
rubamazzo|roba-mazos|rwbamaddzo|S|sve|5|Il rubamazzo dei bambini.|El roba-mazos de los niños.|g=m;n=Invariable
mosca cieca|gallito ciego|moska ˈtʃjeka|L|sve|5|La mosca cieca alla festa dei bimbi.|El gallito ciego en la fiesta de los niños.
nascondino|escondite|naskondino|S|sve|4|Giocare a nascondino in giardino.|Jugar al escondite en el jardín.|g=m;n=Invariable
rincorsa|corre-corre|rinkorsa|S|sve|5|La rincorsa in cortile dopo scuola.|El corre-corre en el patio tras la escuela.|g=f;p=rincore… rincorse
saltare la corda|saltar la cuerda|salˈtare la ˈkorda|L|spt|4|Le bimbe saltano la corda in cortile.|Las niñas saltan la cuerda en el patio.
cerchio|aro|tʃerkjo|S|spt|5|Il cerchio della ginnastica ritmica.|El aro de la gimnasia rítmica.|g=m;p=cerchi
nastro|cinta|nastro|S|spt|4|Il nastro azzurro della vincitrice.|La cinta azul de la ganadora.|g=m;p=nastri
pattino|patín|patˈtino|S|spt|4|I pattini a rotelle nuovi.|Los patines nuevos de ruedas.|g=m;p=pattini
rotelle|rueditas|rotelle|S|tec|5|Le rotelle del trolley rotte.|Las rueditas del trolley rotas.|g=f;p=rotelle;n=Siempre plural
trolley|carrito de equipaje|trolley|S|tra|3|Un trolley da cabina leggero.|Un trolley de cabina ligero.|g=m;n=Invariable
borsone|bolso grande|borˈsone|S|spt|4|Un borsone da palestra pieno.|Un bolso de gimnasio lleno.|g=m;p=borsoni
tappetino|matita… esterilla|tappeˈtino|S|spt|4|Il tappetino da yoga arrotolato.|La esterilla de yoga enrollada.|g=m;p=tappetini
elastico|elástico|elaˈstiko|S|spt|4|Un elastico per gli esercizi.|Un elástico para los ejercicios.|g=m;p=elastici
bilancia|balanza|biˈlantʃa|S|cas|3|La bilancia del bagno vietata.|La balanza del baño prohibida.|g=f;p=bilance
panca|banco|panka|S|spt|4|La panca degli addominali.|El banco de los abdominales.|g=f;p=panche;c=panchina degli sostituti
panchina|banquillo|panˈkina|S|spt|4|In panchina per un ammonito.|En el banquillo por un amonestado.|g=f;p=panchine
spogliatoio|vestuario|spoljaˈtoːjo|S|spt|4|Lo spogliatoio dello stadio affollato.|El vestuario del estadio lleno.|g=m;p=spogliatoi
guardalinee|juez de línea|ɡwardaliˈneːe|S|spt|5|Il guardalinee alza la bandierina.|El juez de línea alza la banderita.|g=m;p=guardalinee
bandierina|banderita|bandjeˈrina|S|spt|4|La bandierina del corner.|La banderita del córner.|g=f;p=bandierine
corner|córner|korner|S|spt|3|Un corner battuto corto.|Un córner ejecutado corto.|g=m;n=Anglicismo
rimessa|saque|riˈmɛssa|S|spt|4|La rimessa laterale in profondità.|El saque de banda en profundidad.|g=f;p=rimesse;c=rimessa dal fondo
fallo|falta|fallo|S|spt|3|Un fallo tattico a metà campo.|Una falta táctica en medio campo.|g=m;p=falli
gara|competencia|ɡara|S|spt|3|La gara di fondo su strada.|La competencia de fondo en ruta.|g=f;p=gare;c=gara podistica
podismo|pedestrismo|podizmo|S|spt|5|Il podismo amatoriale della domenica.|El pedestrismo amateur del domingo.|g=m
maratoneta|maratonista|maratoˈneta|S|spt|4|Un maratoneta ultracinquantenne.|Un maratonista ultracincuentón.|g=m;p=maratoneti
mezzofondo|medio fondo|meddzofondo|S|spt|5|Il mezzofondo dei 1500 metri.|El medio fondo de los 1500 metros.|g=m;n=Invariable
staffetta|postas|stafˈfetta|S|spt|4|La staffetta 4x100 in finale.|Las postas 4x100 en la final.|g=f;p=staffette
ostacoli|vallas|ostakoli|S|spt|4|I 110 ostacoli dell'oro olimpico.|Los 110 vallas del oro olímpico.|g=m;n=Siempre plural
salto in lungo|salto largo|salto in loɔŋɡo|L|spt|4|Il salto in lungo oltre gli otto metri.|El salto largo sobre los ocho metros.
salto in alto|salto alto|salto in alto|L|spt|4|Il salto in alto con l'asticella.|El salto alto con la varilla.
asticella|varilla|astiˈtʃella|S|spt|5|L'asticella alzata a due metri.|La varilla alzada a dos metros.|g=f;p=asticelle
pedana|plataforma|peˈdana|S|spt|5|La pedana del salto triplo.|La plataforma del triple salto.|g=f;p=pedane
triple|triple|triplo|S|spt|5|Il salto triplo oltre i diciassette.|El triple salto sobre los diecisiete.|g=m
lancio del disco|lanzamiento de disco|lantʃo del disko|L|spt|5|Il lancio del disco oltre i sessanta.|El lanzamiento de disco sobre los sesenta.
giavellotto|jabalina|dʒavelˈlɔtto|S|spt|5|Il giavellotto lanciato a 90 metri.|La jabalina lanzada a 90 metros.|g=m;p=giavellotti

# ══ animali extra ══
cagnolino|perrito|kaɲɲolino|S|ani|3|Un cagnolino al guinzaglio corto.|Un perrito en correa corta.|g=m;p=cagnolini
guinzaglio|correa (canina)|ɡwinˈsaʎʎo|S|ani|4|Il guinzaglio del cane al parco.|La correa del perro en el parque.|g=m;p=guinzagli
cuccia|caseta del perro|kuttʃa|S|ani|5|La cuccia del cane in giardino.|La caseta del perro en el jardín.|g=f;p=cucce;c=fare la cuccia
cucciolata|camada|kuttʃoˈlata|S|ani|5|Una cucciolata di quattro gattini.|Una camada de cuatro gatitos.|g=f;p=cucciolate
cucciolo|cachorro|kuttʃolo|S|ani|3|Un cucciolo di labrador giocherellone.|Un cachorro de labrador juguetón.|g=m;p=cuccioli
cavalla|yegua|kaˈvalla|S|ani|4|Una cavalla da corsa veloce.|Una yegua de carrera rápida.|g=f;p=cavalle
puledro|potro|puˈlɛdro|S|ani|5|Un puledro al primo galoppo.|Un potro al primer galope.|g=m;p=puledri
asino|burro|azino|S|ani|3|Un asino testardo dell'Amiata.|Un burro terco del Amiata.|g=m;p=asini;n=Insulto scherzoso: asino!
mulo|mulo|mulo|S|ani|4|Un mulo da soma sull'Appennino.|Una mula de carga en los Apeninos.|g=m;p=muli;c=testardo come un mulo
soma|carga|mulo da soma|L|ani|5|Il mulo da soma dei pastori.|El mulo de carga de los pastores.
capretto|cabrito|kaˈpretto|S|ani|4|Un capretto che salta sui sassi.|Un cabrito que salta en las piedras.|g=m;p=capretti
agnello|cordero|aɲɲɛllo|S|ani|3|Un agnello al pascolo con la pecora.|Un cordero en el pastizal con la oveja.|g=m;p=agnelli;c=agnello pasquale
montone|carnero|monˈtone|S|ani|5|Il montone col campanaccio.|El carnero con la esquila.|g=m;p=montoni
campanaccio|esquila|kampanattʃo|S|ani|5|Il campanaccio delle mucche alpeggiate.|La esquila de las vacas en el alpe.|g=m;p=campanacci
alpeggio|alpe (pastoreo de altura)|alˈpeddʒo|S|nat|5|L'alpeggio estivo del bestiame.|El pastoreo de altura del ganado.|g=m;p=alpeggi
bestiame|ganado|beˈstjame|S|ani|4|Il bestiame transumante verso il sud.|El ganado trashumante hacia el sur.|g=m;n=Invariable
pastorello|pastorcillo|pastoˈrello|S|ani|5|Un pastorello col gregge in montagna.|Un pastorcito con el rebaño en la montaña.|g=m;p=pastorelli
gregge|rebaño|ˈɡrɛdʒe|S|ani|4|Il gregge di pecore al passo.|El rebaño de ovejas al paso.|g=m;p=greggi
alveare|colmena|alveˈare|S|ani|5|Un alveare di api industriose.|Una colmena de abejas industriosas.|g=m;p=alveari
favo|panal|favo|S|ani|5|Un favo colmo di miele d'acacia.|Un panal lleno de miel de acacia.|g=m;p=favi
pungiglione|aguijón|pundʒiʎˈʎone|S|ani|5|Il pungiglione dell'ape rimasto.|El aguijón de la abeja quedado.|g=m;p=pungiglioni
vespa|avispa|vespa|S|ani|4|Una vespa attratta dalla marmellata.|Una avispa atraída por la mermelada.|g=f;p=vespe;n=Anche lo scooter Vespa!
calabrone|avispón|kalabrone|S|ani|5|Un calabrone nel panico in cucina.|Un avispón en pánico en la cocina.|g=m;p=calabroni
grillo|grillo|grillo|S|ani|5|Il grillo che canta d'estate.|El grillo que canta en verano.|g=m;p=grilli;c=Il Grillo Parlante
cicala|cigarra|tʃikala|S|ani|5|La cicala che frinisce sull'ulivo.|La cigarra que chicharra en el olivo.|g=f;p=cicale;n=La favola: cicala vs formica
lucertola|lagartija|lutʃertola|S|ani|4|Una lucertola al sole del muretto.|Una lagartija al sol del murete.|g=f;p=lucertole
muretto|murete|muretto|S|cit|4|Un muretto a secco nel sud.|Un murete de piedra seca en el sur.|g=m;p=muretti
a secco|de piedra seca|a sɛkko|L|tec|5|Un muro a secco senza cemento.|Un muro de piedra seca sin cemento.
geco|gecko|ɡeko|S|ani|5|Un geco sul muro del terrazzo.|Un gecko en la pared del balcón.|g=m;p=gechi
rana|rana|rana|S|ani|4|Una rana verde nello stagno.|Una rana verde en el estanque.|g=f;p=rane;c=il principe ranocchio
rospo|sapo|rɔspo|S|ani|4|Un rospo nascosto tra le piante.|Un sapo escondido entre las plantas.|g=m;p=rospi;c=ingoiare il rospo
stagno|estanque|staɲɲo|S|nat|4|Lo stagno delle anatre del parco.|El estanque de los patos del parque.|g=m;p=stagni
libellula|libélula|libellula|S|ani|5|Una libellula blu sul canneto.|Una libélula azul en el carrizal.|g=f;p=libellule
lucciola|luciérnaga|luttʃola|S|ani|5|Le lucciole di giugno nei campi.|Las luciérnagas de junio en los campos.|g=f;p=lucciole;c=notte di san lorenzo
`, "A2", "k-kx14");
