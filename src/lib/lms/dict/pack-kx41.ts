import { parsePack } from "./compact";
import type { VocabWord } from "../types";

/* ── Pack K·X41 · modi di dire del quotidiano 2 (B1) ────────────
   Expresiones de la vida di dia: alto rendimiento, nivel B1. */

export const PACK_KX41: VocabWord[] = parsePack(`
# ══ tempo e routine ══
fare colazione al volo|desayunar a la carrera|fare kolaˈtsjone al ˈvolo|E|ali|4|Faccio colazione al volo al bar.|Desayuno a la carrera en el bar.
correre come un matto|correr como un loco|ˈkorrere ˌkome un ˈmatto|E|cmu|4|Corre come un matto per non perdere il treno.|Corre como un loco por no perder el tren.
fare con calma|hacer con calma|fare kon ˈkalma|E|cmu|3|Fai con calma, non c'è fretta.|Hazlo con calma, no hay prisa.
con comodo|con comodidad|kon ˈkɔːmodo|E|cmu|5|Rispondo con comodo domani.|Respondo con comodidad mañana.|r=for
prendersela comoda|tomárselo con calma|prenˈdersela koˈmɔːda|E|cmu|4|Oggi me la prendo comoda.|Hoy me lo tomo con calma.
andare di fretta|ir con prisa|anˈdare di ˈfretta|E|tmp|3|Scusa, vado di fretta.|Perdona, voy con prisa.
avere fretta|tener prisa|aveˈre ˈfretta|E|tmp|3|Non ho fretta, grazie.|No tengo prisa, gracias.
guadagnare tempo|ganar tiempo|ɡwaˈdaɲɲare ˈtɛmpo|E|tmp|3|Prendendo la tangenziale guadagniamo tempo.|Cogiendo la circunvalación ganamos tiempo.
perdere tempo|perder el tiempo|ˈpɛrdere ˈtɛmpo|E|tmp|3|Non perdiamo tempo in chiacchiere.|No perdamos tiempo en charlas.
perdere tempo dietro a|desperdiciar tiempo en|ˈpɛrdere ˈtɛmpo dieˈtro a|E|tmp|4|Non perdere tempo dietro ai gossip.|No desperdicies tiempo en cotilleos.
buttare tempo|tirar el tiempo|butˈtare ˈtɛmpo|E|col|5|Buttare tempo davanti alla play.|Tirar el tiempo delante de la play.|r=col
ammazzare il tempo|matar el tiempo|amatˈtsare il ˈtɛmpo|E|col|4|Al bar si ammazza il tempo a carte.|En el bar se mata el tiempo a cartas.
il tempo stringe|el tiempo apremia|il ˈtɛmpo ˈstrindʒe|E|tmp|4|Il tempo stringe: la scadenza è domani.|El tiempo apremia: el plazo es mañana.
il tempo vola|el tiempo vuela|il ˈtɛmpo ˈvɔla|E|tmp|3|Già le otto? Il tempo vola!|¿Ya las ocho? ¡El tiempo vuela!
far passare il tempo|hacer pasar el tiempo|far pasˈsare il ˈtɛmpo|E|sve|4|La televisione fa passare il tempo.|La televisión hace pasar el tiempo.
ingannare il tempo|engañar al tiempo|inɡanˈnare il ˈtɛmpo|E|col|5|Ingannava il tempo con le parole crociate.|Engañaba al tiempo con los crucigramas.
# ══ casa e quotidiano ══
fare il letto|hacer la cama|fare il ˈletto|E|cas|3|Fai il letto prima di uscire.|Haz la cama antes de salir.
rifare il letto|rehacer la cama|rifare il ˈletto|E|cas|4|Rifaccio il letto ogni mattina.|Rehago la cama cada mañana.
stendere i panni|tender la ropa|stenˈdere i ˈpanni|E|cas|4|Stendo i panni sul balcone.|Tiendo la ropa en el balcón.
fare il bucato|hacer la colada|fare il buˈkaːto|E|cas|4|Il sabato faccio il bucato.|El sábado hago la colada.
ammorbidente|suavizante|ammorbidenˈte|S|cas|4|L'ammorbidente al profumo di lino.|El suavizante con perfume de lino.|g=m;p=ammorbidenti
aspirapolvere|aspiradora|aspirapolˈvɛre|S|cas|4|L'aspirapolvere senza filo.|La aspiradora sin cable.|g=m;p=aspirapolveri
scope (pulizia)|escobas|ˈskope|S|cas|5|Le scope nell'armadio del terrazzo.|Las escobas en el armario de la terraza.|g=f
scopa (pulizia)|escoba|ˈskopa|S|cas|4|La scopa di saggina per il pavimento.|La escoba de saggina para el suelo.|g=f;p=scope
paletta (polveri)|recogedor|paˈletta|S|cas|5|La paletta e la scopa insieme.|El recogedor y la escoba juntas.|g=f;p=palette
# ══ cibo e cucina ══
fare la spesa grande|hacer la compra grande|fare la ˈspesa ˈɡrande|E|cmp|4|Il sabato facciamo la spesa grande.|El sábado hacemos la compra grande.
fare la fila|hacer cola|fare la ˈfiːla|E|cmp|3|Ho fatto la fila dieci minuti al banco.|He hecho cola diez minutos en el mostrador.
fare la coda|hacer cola|fare la ˈkɔːda|E|cmp|3|C'è da fare la coda al caseificio.|Hay que hacer cola en la quesería.
mettere in frigo|meter en la nevera|metˈtere in ˈfriːɡo|E|cas|4|Metti il latte in frigo, per favore.|Mete la leche en la nevera, por favor.
avanzare (cibo)|sobrar|avanˈtsare|V|ali|4|È avanzata mezza porzione di pasta.|Ha sobrado media ración de pasta.
avanzi|sobras|avanˈtsi|S|ali|4|Con gli avanzi di ieri facciamo una frittata.|Con las sobras de ayer hacemos una tortilla.|g=m
scaldare (cibo)|calentar|skalˈdare|V|ali|3|Scaldo la minestra nel microonde.|Caliento la sopa en el microondas.
microonde|microondas|mikroˈɔnde|S|cas|3|Scalda la pizza nel microonde.|Calienta la pizza en el microondas.|g=m
a bagno d'acqua|al baño maría|a ˈbaɲɲo dakˈkwa|E|ali|5|Fai fondere il cioccolato a bagno d'acqua.|Funde el chocolate al baño maría.
cucinare a vapore|cocinar al vapor|kutʃiˈnare a vapˈpoːre|E|ali|5|Le verdure cucinate a vapore.|Las verduras cocinadas al vapor.
cotta al punto|en su punto|ˈkɔtta al ˈpunto|E|ali|5|La pasta cotta al punto.|La pasta en su punto.
passare in forno|pasar por el horno|pasˈsare in ˈforno|E|ali|4|Passa le melanzane in forno.|Pasa las berenjenas por el horno.
spadellare|cocinar (sartén)|spadelˈlare|V|ali|5|Nonna spadella da due ore.|La abuela guisa desde hace dos horas.|r=col
spadellata|plato salteado|spadelˈlaːta|S|ali|5|Una spadellata di gamberi e zucchine.|Un salteado de gambas y calabacines.|g=f;p=spadellate;r=col
rustico (sfoglia)|hojaldre salado|ruˈstiko|S|ali|5|Un rustico pugliese per l'aperitivo.|Un hojaldre salado pugliese para el aperitivo.|g=m;p=rustici
saltare in padella|saltear en sartén|salˈtare in paˈdɛlla|E|ali|4|Salto i funghi in padella col prezzemolo.|Salteo los champiñones con perejil.
impanato|empanado|impaˈnaːto|A|ali|5|Il petto di pollo impanato.|La pechuga de pollo empanada.
infarinare|harinar|infariˈnare|V|ali|5|Infarina il pesce prima di friggerlo.|Harina el pescado antes de freírlo.
frittura|fritura|frittuˈra|S|ali|4|La frittura di paranza croccante.|La fritura de pescado pequeño crujiente.|g=f;p=fritture
croccante|crujiente|krokˈkante|A|ali|4|Il pane croccante di Altamura.|El pan crujiente de Altamura.
scrocchiare|crujir|skrokˈkjare|V|ali|5|La grissina scrocchia sotto i denti.|El grissini cruje bajo los dientes.|r=col
# ══ corpo e salute ══
prendere un raffreddore|coger un catarro|ˈprɛndere un raffredˈdore|E|sla|4|Ho preso un raffreddore tremendo.|He cogido un catarro tremendo.
febbre alta|fiebre alta|ˈfɛbbre ˈalta|L|sla|4|Ha la febbre alta da due giorni.|Tiene fiebre alta desde hace dos días.
raucedine|ronquera|rautʃeˈdine|S|sla|5|La raucedine da troppo gridare.|La ronquera de tanto gritar.|g=f
mal di schiena|dolor de espalda|mal di ˈskjeːna|L|sla|3|Il mal di schiena della scrivania.|El dolor de espalda del escritorio.
giramento di testa|mareo|dʒiraˈmento di ˈteːsta|L|sla|4|Un giramento di testa sull'ascensore.|Un mareo en el ascensor.
vertigine|vértigo|vertiˈdʒine|S|sla|5|Le vertigini dall'altezza.|Los vértigos de la altura.|g=f;p=vertigini
svenire|desmayarse|zveˈniːre|V|sla|4|È svenuta dal caldo.|Se ha desmayado por el calor.
lievitare (febbre)|disparar (fiebre)|lieviˈtare|V|sla|5|La febbre lievita la sera.|La fiebre dispara por la noche.
scendere la febbre|bajar la fiebre|ˈʃʃendere la ˈfɛbbre|E|sla|4|La tachipirina fa scendere la febbre.|El paracetamol baja la fiebre.
fare la febbre|tener fiebre|fare la ˈfɛbbre|E|sla|4|Stanotte facevo 39 di febbre.|Anoche tenía 39 de fiebre.
misurare la febbre|tomar la temperatura|mizuˈrare la ˈfɛbbre|E|sla|4|Misura la febbre col termometro.|Toma la temperatura con el termómetro.
sciroppo per la tosse|jarabe para la tos|ʃiˈrɔppo per la ˈtɔsse|L|sla|4|Lo sciroppo per la tosse calmante.|El jarabe para la tos calmante.
collirio|colirio|kolˈlirjo|S|sla|5|Il collirio per gli occhi arrossati.|El colirio para los ojos rojos.|g=m;p=colliri
gocce (medicina)|gotas|ˈɡɔptʃe|S|sla|4|Le gocce per il naso chiuso.|Las gotas para la nariz tapada.|g=f;p=gocce
graffio|arañazo|ɡrafˈfjo|S|cor|4|Un graffio sul parabrezza e sul gomito.|Un arañazo en el parabrisas y el codo.|g=m;p=graffi
livido|cardenal (moratón)|ˈliːvido|S|cor|4|Un livido blu sul fianco.|Un moratón azul en el costado.|g=m;p=lividi
vescica (ustione)|ampolla|veʃˈʃika|S|cor|5|La vescica sulla pelle ustionata.|La ampolla en la piel quemada.|g=f;p=vesciche
distorsione alla caviglia|esguince de tobillo|distorˈsjone alla ˈkantʃiʎʎa|L|cor|4|Una distorsione alla caviglia a calcetto.|Un esguince de tobillo en el fútbol sala.
stiramento all'inguine|distensión en la ingle|stiraˈmento allinɡwiːne|L|cor|5|Uno stiramento all'inguine lo ferma.|Una distensión en la ingle lo detiene.
intorpidito|entumecido|intorpiˈdiːto|A|cor|5|Il braccio intorpidito dal sonno.|El brazo entumecido del sueño.
puntura de zanzara → no; puntura di zanzara|picadura de mosquito|punˈtuːra di dzanˈzaːra|L|cor|4|Tre punture di zanzara sulla caviglia.|Tres picaduras de mosquito en el tobillo.
mal di mare|mareo (mar)|mal di ˈmaːre|L|tra|4|Soffre il mal di mare in traghetto.|Sufre el mareo en el ferry.
mal d'auto|mareo (coche)|mal dˈauto|L|tra|5|Il mal d'auto dei bambini sul sedile posteriore.|El mareo de los niños en el asiento trasero.
mal d'aria|mal de altura|mal dˈaːrja|L|vig|5|Il mal d'aria in funivia al Cervino.|El mal de altura en el teleférico del Cervino.
abbronzatura|bronceado|abbronˈtsatura|S|cor|4|L'abbronzatura dorata di agosto.|El bronceado dorado de agosto.|g=f;p=abbronzature
scottatura|quemadura|skottaˈtuːra|S|cor|4|Una scottatura solare sulle spalle.|Una quemadura solar en los hombros.|g=f;p=scottature
scottarsi|quemarse|skotˈtarsi|V|cor|4|Mi sono scottato col vapore del forno.|Me he quemado con el vapor del horno.
eritema|eritema|eriˈtɛːma|S|sla|5|L'eritema solare del primo weekend di mare.|El eritema solar del primer fin de semana de mar.|g=m;p=eritemi
congiuntivite|conjuntivitis|kondʒunttiˈviːte|S|sla|5|La congiuntivite allergica di aprile.|La conjuntivitis alérgica de abril.|g=f;p=congiuntiviti
 Sudori freddi|sudores fríos|ˈsuːdori ˈfrɛddi|L|cor|5|Sudori freddi all'annuncio dell'esito.|Sudores fríos con el anuncio del resultado.
sudore freddo|sudor frío|ˈsuːdore ˈfrɛddo|L|cor|5|Un sudore freddo al pensiero dell'esame.|Un sudor frío al pensamiento del examen.
bocca secca|boca seca|ˈbokka ˈsɛkka|L|cor|4|La bocca secca dell'emozione.|La boca seca de la emoción.
naso chiuso|nariz tapada|ˈnaːzo ˈkjuːzo|L|cor|4|Col naso chiuso non sento i sapori.|Con la nariz tapada no siento los sabores.
naso che cola|nariz que moquea|ˈnaːzo ke ˈkɔːla|L|cor|4|Il naso che cola dei primi freddi.|La nariz que moquea de los primeros fríos.
soffio al cuore|soplo cardíaco|ˈsɔffio al kuˈɔːre|L|sla|5|Un soffio al cuore lieve e innocuo.|Un soplo cardíaco leve e inocuo.
battito cardiaco|latido cardíaco|batˈtito karˈdjaːko|L|cor|4|Il battito cardiaco accelera in salita.|El latido cardíaco acelera en cuesta.
pressione alta|tensión alta|preʃˈʃjone ˈal ta|L|sla|4|La pressione alta del colloquio.|La tensión alta de la entrevista.
pressione bassa|tensión baja|preʃˈʃjone ˈbaːssa|L|sla|4|Soffre di pressione bassa al mattino.|Sufre tensión baja por la mañana.
# ══ riposo ══
fare un pisolino|echar una siesta|fare un pizoˈliːno|E|sve|4|Il pomeriggio faccio un pisolino.|Por la tarde echo una siesta.
sonnellino|cabezadita|sonnelˈliːno|S|sve|4|Un sonnellino sul divano col gatto.|Una cabezadita en el sofá con el gato.|g=m;p=sonnellini
sonno profondo|sueño profundo|ˈsɔnːno proˈfondo|L|sve|4|Dopo la maratona un sonno profondo.|Tras la maratón un sueño profondo.
appisolarsi|adormilarse|appizoˈlarsi|V|sve|5|Mi appisolo davanti alla tele.|Me adormilo delante de la tele.|r=col
dormire come un sasso|dormir como un tronco|ˈdormire ˌkome un ˈsasso|E|sve|4|Ha dormito come un sasso dieci ore.|Ha dormido como un tronco diez horas.
dormire della grossa|dormir a pierna suelta|ˈdormire della ˈɡrɔssa|E|sve|5|Dormivano della grossa col terremoto.|Dormían a pierna suelta con el terremoto.
sogni d'oro|dulces sueños|ˈsɔɲɲi dˈɔːro|L|sve|4|Buonanotte e sogni d'oro!|¡Buenas noches y dulces sueños!
svegliarsi di soprassalto|despertarse sobresaltado|zveʎˈʎarsi di soprasˈsalto|E|sve|5|Mi sono svegliato di soprassalto alle tre.|Me he despertado sobresaltado a las tres.
rigenerarsi|regenerarse|ridʒeneˈrarsi|V|sve|5|Le vacanze servono a rigenerarsi.|Las vacaciones sirven para regenerarse.
staccare la spina|desconectar|statˈtare la ˈspina|E|tec|4|Il weekend stacco la spina dal lavoro.|El fin de semana desconecto del trabajo.
caricare le batterie|recargar las pilas|kariˈkare le batˈterie|E|sve|4|Vado al mare per caricare le batterie.|Voy al mar a recargar las pilas.
`, "B1", "k-x41");
