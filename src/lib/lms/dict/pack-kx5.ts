import { parsePack } from "./compact";
import type { VocabWord } from "../types";

/* ── Pack K·X5 · modi di dire e proverbi (A2→C2) ────────────────────
   La riqueza fraseológica que diferencia a un alumno avanzado. */

export const PACK_KX5: VocabWord[] = parsePack(`
# ══ modi di dire quotidiani ══
crepi il lupo|¡que reviente! (respuesta)|ˈkrepi il ˈlupo|L|sal|4|In bocca al lupo! — Crepi!|¡Mucha suerte! — ¡Que reviente!|r=inf
in culo alla balena|¡mucha mierda! (vulgar)|in ˈkulo alla baˈlena|L|sal|5|In culo alla balena per l'esame!|¡Mucha mierda para el examen!|r=col;n=Versión vulgar del augurio teatrale
prendere la palla al balzo|tomar la pelota al vuelo|prɛndere la ˈpalla al ˈbaltso|L|cmu|4|Hai preso la palla al balzo con quell'offerta.|Tomaste la pelota al vuelo con esa oferta.
restare di stucco|quedar de piedra|reˈstare di ˈstukko|L|emo|4|Alla notizia, restammo di stucco.|Con la noticia, quedamos de piedra.
restare a bocca aperta|quedar boquiabierto|reˈstare a ˈbokka aperˈta|L|emo|3|Il finale mi ha lasciato a bocca aperta.|El final me dejó boquiabierto.
non credere ai propri occhi|no dar crédito a los propios ojos|non ˈkrɛdere ai proˈpri ˈɔkki|L|emo|4|Non credevo ai miei occhi davanti al Colosseo.|No daba crédito a mis ojos frente al Coliseo.
perdere la testa|perder la cabeza|pɛrdere la ˈtɛsta|L|emo|3|Ha perso la testa per quella ragazza.|Perdió la cabeza por esa chica.
perdere le staffe|perder los estribos|pɛrdere le stɛfˈfe|L|emo|4|Alla fine ha perso le staffe.|Al final perdió los estribos.
prendere fuoco|encenderse (tomar fuego)|prɛndere ˈfwɔɡo|L|emo|4|La discussione ha preso fuoco.|La discusión se encendió.
andare a fuoco|incendiarse|andare a ˈfwɔɡo|L|tec|4|La cucina è andata a fuoco.|La cocina se incendió.
fuori di testa|fuera de sí (loco)|fwori di ˈtɛsta|L|emo|3|È fuori di testa per quella squadra.|Está fuera de sí por ese equipo.|r=inf
fuori di sé|fuera de sí|fwori di ˈse|L|emo|4|Era fuori di sé dalla rabbia.|Estaba fuera de sí de rabia.
andare fuori di testa|volverse loco|andare fwori di ˈtɛsta|L|emo|3|Il pubblico è andato fuori di testa.|El público se volvió loco.|r=inf
dare i numeri|dar señales de locura|dare i ˈnumeri|L|emo|4|Con questo caldo dai davvero i numeri.|Con este calor enloqueces de verdad.|r=inf
essere al settimo cielo|estar en el séptimo cielo|eˈssere al ˈsɛttimo ˈtʃjelo|L|emo|3|Sono al settimo cielo per la promozione.|Estoy en el séptimo cielo por el ascenso.
toccare il cielo con un dito|tocar el cielo con un dedo|tokkare il ˈtʃjelo kon un ˈdito|L|emo|4|Ha toccato il cielo con un dito.|Tocó el cielo con un dedo.
cadere dalle nuvole|caer de las nubes|kadere dalle ˈnuvole|L|emo|4|Alla notizia, cadde dalle nuvole.|Con la noticia, cayó de las nubes.
prendere in giro|tomar el pelo|prɛndere in ˈdʒiro|L|rel|3|Mi stai prendendo in giro?|¿Me estás tomando el pelo?|s=prendere per i fondelli
prendere per i fondelli|tomar el pelo (vulgar)|prɛndere per i fonˈdɛlli|L|rel|4|Ci prendono per i fondelli da anni.|Nos toman el pelo desde hace años.|r=col
fare lo spiritoso|hacerse el gracioso|fare lo spiˈrtozo|L|rel|3|Smettila di fare lo spiritoso!|¡Deja de hacerte el gracioso!|r=inf
fare il furbo|hacerse el vivo|fare il ˈfurbo|L|rel|3|Non fare il furbo con me!|¡No te hagas el vivo conmigo!|r=inf
fare sul serio|hablar en serio|fare sul ˈserjo|L|cmu|3|Sto facendo sul serio, ti giuro.|Hablo en serio, te juro.|r=inf
manco per sogno|ni por asomo|maŋko per soɲɲo|L|cmu|4|Manco per sogno, non vengo!|Ni por asomo voy.|r=inf
neanche per sogno|ni por asomo|neanke per ˈsoɲɲo|L|cmu|4|Neanche per sogno ti presto l'auto.|Ni por asomo te presto el carro.|r=inf
col cavolo|¡ni hablar!|kol ˈkavolo|L|cmu|4|Col cavolo che ti lascio guidare.|Ni hablar que te dejo manejar.|r=inf;n=Lit. «con col»: incredulidad enfática
ma quando mai|cuándo jamás|ma kwando ˈmai|L|cmu|3|Ma quando mai ho detto questo!|¡Cuándo jamás dije eso!|r=inf
non se ne parla nemmeno|ni se habla|non se ne ˈparla nemmeno|L|cmu|3|Andare in spiaggia? Non se ne parla nemmeno.|¿Ir a la playa? Ni se habla.|r=inf
stai fresco|ya estás fresco|stai ˈfrɛsko|L|cmu|4|Vuoi il bis? Stai fresco!|¿Quieres repetir? ¡Ya estás fresco!|r=inf
neanche a farlo apposta|como adrede|neanke a farlo apˈpɔsta|L|ast|5|Neanche a farlo apposta, è arrivato lui.|Como hecho a propósito, llegó él.
farlo apposta|hacerlo adrede|farlo apˈpɔsta|L|ast|4|Lo fa apposta per provocarti.|Lo hace adrede para provocarte.
di proposito|a propósito (deliberado)|di proˈpɔzito|L|ast|3|L'ha detto di proposito.|Lo dijo a propósito.|a=per caso

# ══ cibo e metafore ══
essere una pasta|ser un encanto|eˈssere una ˈpasta|L|emo|5|Quella maestra è una pasta.|Esa profesora es un encanto.|r=inf;n=Lit. «ser una pasta»: persona dulce y mansa
buono come il pane|bueno como el pan|bwɔno kome il ˈpane|L|emo|4|Il nonno è buono come il pane.|El abuelo es bueno como el pan.
essere la pecora nera|ser la oveja negra|eˈssere la ˈpɛkora ˈnera|L|rel|4|In famiglia era la pecora nera.|En la familia era la oveja negra.
prendere due piccioni con una fava|matar dos pájaros de un tiro|prɛndere due pitˈtʃoni kon una ˈfava|L|ast|4|Con il treno prendo due piccioni con una fava.|Con el tren mato dos pájaros de un tiro.
non avere peli sulla lingua|no tener pelos en la lengua|non aˈvere ˈpeli sulla ˈliŋɡwa|L|cmu|4|Il direttore non ha peli sulla lingua.|El director no tiene pelos en la lengua.
essere pieno come un uovo|estar lleno como un huevo|eˈssere ˈpjeno kome un ˈwɔvo|L|ali|4|Dopo il pranzo ero pieno come un uovo.|Después del almuerzo estaba lleno como un huevo.
affogare in un bicchiere d'acqua|ahogarse en un vaso de agua|affoɡare in un bikkjere dakkwa|L|emo|4|Non affogare in un bicchiere d'acqua!|¡No te ahogues en un vaso de agua!
capire l'antifona|captar la indirecta|kaˈpire lantiˈfona|L|cmu|5|Ho capito l'antifona e sono uscito.|Capté la indirecta y salí.|n=Antifona: lo que se adivina sin decirlo
andare in porto|llegar a buen puerto|andare in ˈpɔrto|L|ast|4|La trattativa è andata in porto.|La negociación llegó a buen puerto.
essere in alto mare|estar en alta mar|eˈssere in alto ˈmare|L|ast|4|Con la tesi sono in alto mare.|Con la tesis estoy en alta mar.
a gonfie vele|con viento en popa|a ɡonfie ˈvele|L|ast|4|La carriera va a gonfie vele.|La carrera va con viento en popa.
spuntarla|salirse con la suya|spunˈtarla|L|ast|5|Alla fine l'ha spuntata lui.|Al final se salió con la suya él.|r=inf
avere la meglio|llevarse la mejor parte|aˈvere la ˈmɛʎʎo|L|ast|4|Dopo ore di discussione, ho avuto la meglio.|Tras horas de discusión, me llevé la mejor parte.
averla vinta|ganar la discusión|averˈla vinta|L|ast|4|Vuoi averla vinta a tutti i costi.|Quieres ganar la discusión a toda costa.
prendere pesci in faccia|tomar peces en la cara|prɛndere ˈpeʃʃi in ˈfattʃa|L|rel|5|Non mi far prendere pesci in faccia!|¡No me hagas quedar mal!
fare polvere|hacer polvo|fare ˈpɔlvere|L|spt|4|La Juventus ha fatto polvere del rivale.|La Juventus hizo polvo al rival.
fare a pezzi|hacer pedazos|fare a ˈpjezzi|L|ast|3|La critica ha fatto a pezzi il film.|La crítica hizo pedazos la película.
essere un pezzo grosso|ser un pez gordo|eˈssere un ˈpɛttso ˈɡrɔsso|L|lav|4|Nell'azienda è un pezzo grosso.|En la empresa es un pez gordo.|r=inf
pesce grosso|pez gordo|ˈpeʃʃe ˈɡrɔsso|L|ist|4|Hanno arrestato un pesce grosso.|Detuvieron a un pez gordo.|r=inf
pesce fuor d'acqua|pez fuera del agua|ˈpeʃʃe fwor dakkwa|L|emo|4|Alla festa mi sentivo un pesce fuor d'acqua.|En la fiesta me sentía un pez fuera del agua.

# ══ corpo e sentimentos ══
a mani basse|con las manos vacías|a ˈmani ˈbasse|L|ast|5|Non torno a mani basse dal mercato.|No vuelvo con las manos vacías del mercado.|n=En italiano: a mani basse = sin haber logrado nada
con le mani in mano|con los brazos cruzados|kon le ˈmani in ˈmano|L|ast|4|Non stare con le mani in mano!|¡No te quedes con los brazos cruzados!|n=IT usa le mani donde ES usa los brazos
mettere mano al portafoglio|echar mano a la billetera|mɛttere ˈmano al portafɔʎʎo|L|fin|4|Per la ristrutturazione, mano al portafoglio.|Para la remodelación, mano a la billetera.
lavarsene le mani|lavarse las manos|lavarˈsene le ˈmani|L|ast|4|Se ne lava le mani della politica.|Se lava las manos de la política.
legarsi le mani|atarse las manos|leɡarsi le ˈmani|L|ast|5|Il contratto mi lega le mani.|El contrato me ata las manos.
avere le mani bucate|tener las manos agujereadas|aˈvere le ˈmani buˈkate|L|fin|4|Con lo shopping ha le mani bucate.|Con las compras tiene la mano floja.|n=El que gasta sin control
farsi in quattro|hacerse en cuatro|farsi in kwattro|L|rel|3|Si fa in quattro per gli ospiti.|Se desvive por los invitados.|n=Desvivirse por alguien
quattro gatti|cuatro gatos|kwattro ˈɡatti|L|ast|4|Alla festa c'erano quattro gatti.|En la fiesta había cuatro gatos.
come il gatto con il topo|como el gato y el ratón|kome il ˈɡatto kon il topo|L|rel|5|Si rincorrono come il gatto col topo.|Se persiguen como el gato y el ratón.
conoscere qualcuno di vista|conocer de vista|konoʃʃere kwalˈkuno di ˈvista|L|rel|4|Lo conosco di vista, non di nome.|Lo conozco de vista, no de nombre.
di fama|de fama|di ˈfama|L|rel|5|Ne conosco solo di fama.|Solo los conozco de fama.
di nome e di fatto|de nombre y de hecho|di ˈnome e di ˈfatto|L|rel|5|È il capo di nome e di fatto.|Es el jefe de nombre y de hecho.
a ragione|con razón|a radˈdʒone|L|ast|4|Se l'è presa a ragione.|Se lo tomó con razón.|n=Haber tomado bien algo
avere torto marcio|estar completamente equivocado|aˈvere ˈtorto ˈmartʃo|L|ast|4|Con quei dati avevi torto marcio.|Con esos datos estabas errado del todo.|n=Opuesto de avere ragione marcio
dare retta|hacer caso|dare ˈretta|L|cmu|3|Non dare retta alle voci.|No hagas caso a los rumores.|c=non dare retta
fare orecchie da mercante|hacerse el sordo|fare orekˈkje da merˈtʃante|L|cmu|5|Al consiglio ha fatto orecchie da mercante.|En el consejo se hizo el sordo.
colpire nel segno|dar en el blanco|kolpire nel ˈseɲɲo|L|cmu|4|La tua analisi ha colpito nel segno.|Tu análisis dio en el blanco.
capire al volo|entender al vuelo|kaˈpire al ˈvolo|L|cmu|3|Ho capito al volo la barzelletta.|Entendí al vuelo el chiste.
al volo|al vuelo|al ˈvolo|L|ast|3|Rispondere al volo al quiz.|Responder al vuelo al quiz.
alla svelta|rápidamente|alla ˈzvlɛtta|L|tmp|4|Finisci alla svelta i compiti.|Termina rápido la tarea.|r=inf
con i fiocchi|con todas las de la ley|kon i ˈfjɔkki|L|ast|4|Un esame con i fiocchi, durissimo.|Un examen con todas las de la ley, durísimo.
di prima qualità|de primera calidad|di ˈprima kwalita|L|ast|4|Un ristorante di prima qualità.|Un restaurante de primera.

# ══ proverbi ══
chi va piano va sano e lontano|el que va despacio llega lejos|ki va ˈpjano va ˈsano|L|ast|4|Chi va piano va sano e lontano, dice il proverbio.|El que va despacio va seguro y lejos.
meglio tardi che mai|más vale tarde que nunca|mɛʎʎo ˈtardi ke ˈmai|L|tmp|3|Hai chiamato alle tre di notte… meglio tardi che mai!|Llamaste a las tres de la mañana… ¡más vale tarde que nunca!
tra il dire e il fare c'è di mezzo il mare|del dicho al hecho hay gran trecho|tra il ˈdire e il ˈfare|L|cnn|5|Volevamo partire, ma tra il dire e il fare c'è di mezzo il mare.|Queríamos salir, pero del dicho al hecho hay gran trecho.
l'appetito vien mangiando|el apetito viene comiendo|lappetito vien manˈdʒando|L|ali|4|Ho finito tutto: l'appetito vien mangiando!|Terminé todo: ¡el apetito viene comiendo!
occhio non vede cuore non duole|ojos que no ven corazón que no siente|ˈɔkkjo non ˈvɛde ˈkwɔre non ˈdwɔle|L|emo|5|Non le ho detto della cena: occhio non vede, cuore non duole.|No le dije de la cena: ojos que no ven…
rosso di sera bel tempo si spera|rojo de noche, tiempo de esperanza|rosso di ˈsera|L|cli|5|Rosso di sera, bel tempo si spera, dice il nonno contadino.|Cielo rojo de tarde, buen tiempo se espera.
piove sempre sul bagnato|llueve sobre mojado|ˈpjɔve ˈsɛmpre sul baɲɲato|L|ast|4|Mi si è rotta anche l'auto: piove sempre sul bagnato!|Se me descompuso también el carro: ¡llueve sobre mojado!
morto un papa se ne fa un altro|muerto un papa se hace otro|ˈmɔrto un ˈpapa|L|ist|5|Il presidente si dimette? Morto un papa se ne fa un altro.|¿El presidente renuncia? Muerto un papa, otro viene.
ogni lasciata è persa|lo que se deja se pierde|oɲɲi laʃʃata e persa|L|fin|5|Non ho comprato il biglietto: ogni lasciata è persa.|No compré el boleto: lo que se deja se pierde.
chi dorme non piglia pesci|el que duerme no pesca|ki ˈdɔrme non piʎʎa ˈpeʃʃi|L|sve|4|Alzati, chi dorme non piglia pesci!|¡Levántate, el que duerme no pesca!
a caval donato non si guarda in bocca|a caballo regalado no se le mira el diente|a ˈkaval doˈnato|L|rel|5|Il regalo è brutto, ma a caval donato non si guarda in bocca.|El regalo es feo, pero a caballo regalado…
l'abito non fa il monaco|el hábito no hace al monje|labito non fa il ˈmɔnako|L|rel|5|Dall'aspetto non giudicare: l'abito non fa il monaco.|Del aspecto no juzgues: el hábito no hace al monje.
chi la dura la vince|el que persevera vence|ki la ˈdura la ˈvintʃe|L|ast|5|Non mollare: chi la dura la vince!|No aflojes: ¡el que persevera vence!
`, "B2", "k-x5");
