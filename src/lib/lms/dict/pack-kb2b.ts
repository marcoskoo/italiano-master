import { parsePack } from "./compact";
import type { VocabWord } from "../types";

/* ── Pack K·B2-b · ciencia, salud, cultura y expresiones (MCER B2) ──── */

export const PACK_KB2B: VocabWord[] = parsePack(`
# ══ scienza e tecnologia ══
elemento|elemento|eleˈmento|S|sci|2|Gli elementi della tavola periodica.|Los elementos de la tabla periódica.|g=m;p=elementi
sostanza|sustancia|soˈstantsa|S|sci|3|Una sostanza chimica corrosiva.|Una sustancia química corrosiva.|g=f;p=sostanze
materiale|material|materiaˈle|S|sci|2|Materiali riciclati per l'edilizia.|Materiales reciclados para la construcción.|g=m;p=materiali
calore|calor|kaˈlore|S|sci|3|Il calore del sole riscalda l'acqua.|El calor del sol calienta el agua.|g=m
luce|luz|ˈlutʃe|S|nat|2|Una luce calda nel salotto.|Una luz cálida en la sala.|g=f;p=luci;c=fare luce su
suono|sonido|ˈswɔno|S|mus|2|Il suono del violino è puro.|El sonido del violín es puro.|g=m;p=suoni
corrente|corriente|korˈrɛnte|S|tec|3|Stacca la corrente prima di riparare.|Corta la corriente antes de reparar.|g=f;p=correnti;c=corrente elettrica
elettrico|eléctrico|elɛttriko|A|tec|2|Un problema elettrico in cucina.|Un problema eléctrico en la cocina.|c=auto elettrica
nucleare|nuclear|nukleˈare|A|sci|3|Il disarmo nucleare riparte.|El desarme nuclear se retoma.|c=centrale nucleare
radioattivo|radiactivo|radjoatˈtivo|A|sci|4|Scorie radioattive sotto controllo.|Desechos radiactivos bajo control.|p=radioattivi
cellula|célula|tʃelˈlula|S|sci|3|La cellula si divide in due.|La célula se divide en dos.|g=f;p=cellule
batterio|bacteria|batˈtɛrio|S|sci|4|I batteri buoni dello yogurt.|Las bacterias buenas del yogur.|g=m;p=batteri
proteina|proteína|proˈteina|S|sci|4|Le proteine della carne.|Las proteínas de la carne.|g=f;p=proteine
antibiotico|antibiótico|antibjoˈtiko|S|sla|3|L'antibiotico solo su ricetta.|El antibiótico solo con receta.|g=m;p=antibiotici
statistica|estadística|statiˈstika|S|sci|3|La statistica conferma il trend.|La estadística confirma la tendencia.|g=f;p=statistiche
probabilità|probabilidad|probabiliˈta|S|sci|4|La probabilità di vincere è bassa.|La probabilidad de ganar es baja.|g=f;n=Invariable
equazione|ecuación|ekwatˈtsjone|S|sci|4|Un'equazione di secondo grado.|Una ecuación de segundo grado.|g=f;p=equazioni
funzione|función|funˈtsjone|S|sci|3|La funzione lineare cresce.|La función lineal crece.|g=f;p=funzioni;c=funzione pubblica
geometria|geometría|dʒeoˈmetria|S|sci|4|La geometria degli spazi curvi.|La geometría de los espacios curvos.|g=f
algoritmo|algoritmo|alɡoˈritmo|S|tec|4|Un algoritmo che consiglia film.|Un algoritmo que recomienda películas.|g=m;p=algoritmi
simulazione|simulación|simulattsjoˈne|S|sci|4|Una simulazione al calcolatore.|Una simulación en computadora.|g=f;p=simulazioni
variabile|variable|variˈabile|S|sci|4|Le variabili indipendenti dello studio.|Las variables independientes del estudio.|g=f;p=variabili
gravità|gravedad|ɡraviˈta|S|sci|4|La gravità terrestre ci tiene a terra.|La gravedad terrestre nos mantiene en el suelo.|g=f;n=Invariable
massa|masa|ˈmassa|S|sci|4|La massa del pianeta Giove.|La masa del planeta Júpiter.|g=f;p=masse
densità|densidad|densiˈta|S|sci|5|La densità dell'acqua pura.|La densidad del agua pura.|g=f;n=Invariable
innovazione|innovación|innovatˈtsjone|S|tec|3|L'innovazione digitale in sanità.|La innovación digital en salud.|g=f;p=innovazioni
digitale|digital|didʒiˈtale|A|tec|2|Una fotocamera digitale compatta.|Una cámara digital compacta.|n=Sustantivo: il digitale
spaziale|espacial|spatˈtsjale|A|sci|3|La corsa spaziale anni Sessanta.|La carrera espacial años sesenta.
satellite|satélite|satelˈlite|S|sci|3|Un satellite meteorologico in orbita.|Un satélite meteorológico en órbita.|g=m;p=satelliti
razzo|cohete|ˈraddzo|S|sci|4|Il razzo parte per Marte.|El cohete parte a Marte.|g=m;p=razzi
intelligenza artificiale|inteligencia artificial|intelˈlidʒentsa artitʃitʃˈʃale|L|tec|3|L'intelligenza artificiale scrive poesie?|¿La inteligencia artificial escribe poemas?
automazione|automatización|automatˈtsjone|S|tec|5|L'automazione dei magazzini.|La automatización de los almacenes.|g=f
orbita|órbita|ˈɔrbita|S|sci|4|Un satellite in bassa orbita.|Un satélite en órbita baja.|g=f;p=orbite

# ══ salute avanzata ══
organo|órgano|ˈɔrɡano|S|cor|3|Gli organi vitali del corpo.|Los órganos vitales del cuerpo.|g=m;p=organi
circolazione|circulación|tʃirkolatˈtsjone|S|sla|4|La circolazione del sangue.|La circulación de la sangre.|g=f
respirare|respirar|respiˈrare|V|sla|2|Respira profondamente e conta fino a dieci.|Respira profundo y cuenta hasta diez.
digestione|digestión|didʒesˈtsjone|S|sla|4|Una digestione lenta dopo il pranzo.|Una digestión lenta después del almuerzo.|g=f
digerire|digerir|didʒiˈrire|V|sla|4|Non digerisco i fritti.|No digiero las frituras.|n=Io digerisco (tipo -isc); figurado: digerire un torto
metabolismo|metabolismo|metaboˈlizmo|S|sla|5|Il metabolismo accelera col moto.|El metabolismo acelera con el ejercicio.|g=m
frattura|fractura|fratˈtura|S|sla|3|Una frattura al polso.|Una fractura en la muñeca.|g=f;p=fratture
ustione|quemadura|ustˈtsjone|S|sla|4|Un'ustione di primo grado.|Una quemadura de primer grado.|g=f;p=ustioni
taglio|corte|taʎˈʎo|S|sla|3|Un taglio profondo al dito.|Un corte profundo en el dedo.|g=m;p=tagli;n=Taglio anche = descuento en carnicería
trapianto|trasplante|trapˈpjanto|S|sla|4|Un trapianto di cuore riuscito.|Un trasplante de corazón exitoso.|g=m;p=trapianti
donatore|donante|donaˈtore|S|sla|4|Un donatore di sangue universale.|Un donante de sangre universal.|g=m;p=donatori
chemioterapia|quimioterapia|kemjoterapia|S|sla|5|La chemioterapia è finita, si spera.|La quimioterapia terminó, se espera.|g=f
prognosi|pronóstico|proɡˈnɔzi|S|sla|5|La prognosi è riservata.|El pronóstico es reservado.|g=f;n=Invariable
decorso|evolución (curso)|deˈkorso|S|sla|5|Il decorso della malattia è lieve.|La evolución de la enfermedad es leve.|g=m;n=Anche: decorso legale
articolazione|articulación|artikolatˈtsjone|S|cor|5|Un'articolazione del ginocchio.|Una articulación de la rodilla.|g=f;p=articolazioni

# ══ verbi transferibili B2 ══
prevedere|prever|preveˈdɛre|V|ast|2|Le previsioni prevedono pioggia.|Los pronósticos prevén lluvia.|n=Io prevedo; participio previsto;c=è prevedibile che
anticipare|adelantar (anticipar)|antitʃiˈpare|V|tmp|3|Anticipo la partenza di un'ora.|Adelanto la salida una hora.|n=Anticipare anche = pagar por adelantado
posticipare|postergar|postitʃiˈpare|V|tmp|4|Posticipiamo la cena alle nove.|Postergamos la cena a las nueve.|a=anticipare
scadere|vencer|skaˈdɛre|V|tmp|3|Il passaporto scade in maggio.|El pasaporte vence en mayo.|n=Scadere anche = ser de mala calidad: un film che scade
sospendere|suspender|sosˈpɛndere|V|ast|3|La riunione è sospesa a data da destinarsi.|La reunión queda suspendida sine die.|n=Io sospendo; participio sospeso
rinnovare|renovar|rinnoˈvare|V|ast|3|Rinnovo l'abbonamento annuale.|Renuevo la suscripción anual.|c=rinnovare la fiducia
mantenere|mantener|manˈtɛnere|V|ast|2|Mantengo la promessa fatta a me stesso.|Mantengo la promesa hecha a mí mismo.|n=Io mantengo; participio mantenuto;c=mantenere la calma
preservare|preservar|prezerˈvare|V|nat|4|Preserviamo il centro storico.|Preservamos el centro histórico.|s=conservare
custodire|custodiar|kustoˈdire|V|ast|4|Custodisco le chiavi dell'ufficio.|Custodio las llaves de la oficina.|n=Io custodisco (tipo -isc)
vigilare|vigilar|vidʒiˈlare|V|ist|4|I carabinieri vigilano sul territorio.|Los carabineros vigilan el territorio.|c=vigilare su
attenuare|atenuar|attenuˈare|V|ast|4|Un farmaco che attenua il dolore.|Un fármaco que atenúa el dolor.|s=alleviare
alleviare|aliviar|alleˈvjare|V|sla|4|La pomata allevia il prurito.|La pomada alivia la picazón.|s=lenire
rafforzare|reforzar|rafforˈtsare|V|ast|3|Il ginnastica rafforza la schiena.|La gimnasia refuerza la espalda.|a=indebolire
indebolire|debilitar|indeboˈlire|V|ast|4|Lo stress indebolisce le difese.|El estrés debilita las defensas.|a=rafforzare;n=Io indebolisco (tipo -isc)
danneggiare|dañar|danneˈdʒare|V|ast|3|La grandine danneggia i raccolti.|El granizo daña las cosechas.
distruggere|destruir|diˈstrudgere|V|ast|3|L'incendio distrugge il bosco.|El incendio destruye el bosque.|n=Io distruggo; participio distrutto
ricostruire|reconstruir|rikostriˈire|V|ast|3|Ricostruiamo la casa dei nonni.|Reconstruimos la casa de los abuelos.
ristrutturare|remodelar|ristrutˈturare|V|cas|3|Ristrutturiamo il bagno a marzo.|Remodelamos el baño en marzo.
recuperare|recuperar|rekupeˈrare|V|ast|2|Recupero il tempo perso in vacanza studio.|Recupero el tiempo perdido en viaje de estudios.|c=recuperare i soldi
restauro|restauración|resˈtauro|S|art|4|Il restauro degli affreschi dura anni.|La restauración de los frescos dura años.|g=m;p=restauri
filtrare|filtrar|filˈtrare|V|tec|3|Filtra il caffè lentamente.|Filtra el café lentamente.|n=Figurado: filtrare le notizie
purificare|purificar|purifiˈkare|V|nat|4|Un filtro che purifica l'acqua.|Un filtro que purifica el agua.
disinfettare|desinfectar|disinfetˈtare|V|sla|4|Disinfetta la ferita prima di bendare.|Desinfecta la herida antes de vendar.
acquisire|adquirir|akkwiˈzire|V|ast|3|Acquisisco fiducia col tempo.|Adquiero confianza con el tiempo.|n=Io acquisisco (tipo -isc)
conseguire|conseguir|konseˈɡwire|V|ast|4|Consegue la laurea con lode.|Consigue el título con honores.|n=Io conseguo; participio conseguito
intraprendere|emprender|intraprenˈdɛre|V|ast|4|Intraprendo un viaggio verso ovest.|Emprendo un viaje hacia el oeste.|n=Io intraprendo; participio intrapreso;c=intraprendere un'attività
avviare|iniciar (poner en marcha)|avˈvjare|V|lav|4|Avviamo la produzione lunedì.|Iniciamos la producción el lunes.|c=avviare un'indagine
amministrare|administrar|amminiˈstrare|V|ist|3|Chi amministra il condominio?|¿Quién administra el edificio?|n=L'amministrazione Bush… in política también
governare|gobernar|ɡoverˈnare|V|ist|3|Governa la città con polso fermo.|Gobierna la ciudad con mano firme.
conversazione|conversación|konversatˈtsjone|S|cmu|2|Una conversazione piacevole al caffè.|Una conversación agradable en el café.|g=f;p=conversazioni
dialogo|diálogo|diaˈlɔɡo|S|cmu|3|Il dialogo tra le culture aiuta.|El diálogo entre culturas ayuda.|g=m;p=dialoghi
pettegolezzo|chisme|pettoɡoˈlettso|S|rel|4|I pettegolezzi del quartiere.|Los chismes del barrio.|g=m;p=pettegolezzi;r=col
gossip|chismes (cotilleo)|ˈɡɔsip|S|rel|4|Il gossip sulle star del cinema.|Los chismes sobre las estrellas.|g=m;n=Anglicismo, invariable;r=col
voce di corridoio|rumor de pasillo|ˈvotʃe di korriˈdɔjo|L|cmu|4|Secondo una voce di corridoio, si dimette.|Según un rumor de pasillo, renuncia.|r=inf
sondaggio|encuesta|sonˈdaddʒo|S|cmu|3|Un sondaggio sulla fiducia del governo.|Una encuesta sobre la confianza del gobierno.|g=m;p=sondaggi

# ══ aggettivi B2 ══
diffuso|difundido|difˈfuzo|A|ast|3|Un'abitudine diffusa tra i giovani.|Una costumbre difundida entre los jóvenes.|c=sostenere
sistematico|sistemático|sistemaˈtiko|A|sci|4|Un errore sistematico del software.|Un error sistemático del software.|n=Errore sistematico (scienze) vs "sistemático" ES
rigoroso|riguroso|riɡoˈrozo|A|sci|3|Uno studio rigoroso e indipendente.|Un estudio riguroso e independiente.|c=metodo rigoroso
accurato|acucioso|akkuˈrato|A|sci|4|Un controllo accurato dei conti.|Un control acucioso de las cuentas.|n=¡Ojo! accurato = cuidadoso; "accurate" ES = accurato también
attendibile|creíble (fiable)|attendiˈbile|A|sci|4|Fonti attendibili per la ricerca.|Fuentes creíbles para la investigación.|a=inattendibile
plausibile|plausible|plauˈzibile|A|sci|5|Una spiegazione plausibile del guasto.|Una explicación plausible de la falla.|r=for
fondato|fundado|fonˈdato|A|ast|4|Un timore ben fondato.|Un temor bien fundado.|a=infondato
privo di|desprovisto de|ˈprivo di|L|ast|3|Un testo privo di errori.|Un texto desprovisto de errores.|a=dotato di
dotato di|dotado de|doˈtato di|L|ast|3|Un ragazzo dotato di talento.|Un chico dotado de talento.|a=privo di
adeguato|adecuado|adeˈɡwato|A|ast|3|Una risposta adeguata al problema.|Una respuesta adecuada al problema.|a=inadeguato
conveniente|conveniente|konvenjɛnˈte|A|fin|3|Prendere il treno è più conveniente.|Tomar el tren es más conveniente.|n=Conveniente también = oportuno
costoso|costoso|koˈstozo|A|fin|3|Un ristorante costoso ma eccellente.|Un restaurante costoso pero excelente.|s=caro
sobrio|sobrio|ˈsɔbrjo|A|ast|4|Uno stile sobrio ed elegante.|Un estilo sobrio y elegante.|n=Sobrio anche = no borracho
moderato|moderado|moderaˈto|A|ast|4|Un consumo moderato di dolci.|Un consumo moderado de dulces.|a=eccessivo
eccessivo|excesivo|ettʃeˈssivo|A|ast|3|Un rumore eccessivo di notte.|Un ruido excesivo de noche.|a=moderato
mite|templado (manso)|ˈmite|A|cli|4|Un clima mite tutto l'anno.|Un clima templado todo el año.|n=Persona mite = mansa; "mito" ES = leggenda
docile|dócil|ˈdotʃile|A|ani|4|Un cavallo docile per principianti.|Un caballo dócil para principiantes.|a=indomito
feroce|feroz|feˈrotʃe|A|ani|4|Una tempesta feroce sulla costa.|Una tormenta feroz en la costa.|n=Feroce anche = intenso: caldo feroce
selvatico|silvestre|selˈvatiko|A|ani|4|Un cinghiale selvatico in giardino.|Un jabalí silvestre en el jardín.|a=domestico
domestico|doméstico|doˈmɛstiko|A|cas|3|Un volo domestico di linea.|Un vuelo doméstico de línea.|n=Animale domestico = mascota; "doméstico" ES criada = domestica/o
incontrollato|incontrolado|inkontrolˈlato|A|ast|4|Una spesa incontrollata e inutile.|Un gasto incontrolado e inútil.|a=controllato

# ══ citta, cultura e arte ══
palazzo|palacio|paˈlattso|S|cit|2|Un palazzo rinascimentale in centro.|Un palacio renacentista en el centro.|g=m;p=palazzi;n=Palazzo anche = edificio de apartamentos: palazzo di cinque piani
castello|castillo|kasˈtɛllo|S|cit|2|Il castello dei conti Guidi.|El castillo de los condes Guidi.|g=m;p=castelli
torre|torre|ˈtorre|S|cit|2|La torre pendente di Pisa.|La torre inclinada de Pisa.|g=f;p=torri
statua|estatua|staˈtua|S|art|3|La statua del David di Michelangelo.|La estatua del David de Miguel Ángel.|g=f;p=statue
fontana|fuente|fonˈtana|S|cit|2|La fontana di Trevi di notte.|La fuente de Trevi de noche.|g=f;p=fontane
mosaico|mosaico|moˈzaiko|S|art|4|Un mosaico romano perfetto.|Un mosaico romano perfecto.|g=m;p=mosaici
affresco|fresco (pintura mural)|afˈfresko|S|art|4|Gli affreschi della Cappella Sistina.|Los frescos de la Capilla Sixtina.|g=m;p=affreschi;n=¡Ojo! affresco = técnica mural; la fruta es "il fresco" no, "la pesca"... el fresco del clima = fresco agg.
pittura|pintura|pitˈtura|S|art|3|La pittura veneziana del Settecento.|La pintura veneciana del setecientos.|g=f;p=pitture
ritratto|retrato|ritˈratto|S|art|3|Un ritratto a olio del Cinquecento.|Un retrato al óleo del quinientos.|g=m;p=ritratti
paesaggio|paisaje|paeˈzaddʒo|S|art|3|Un paesaggio della campagna toscana.|Un paisaje del campo toscano.|g=m;p=paesaggi
tela|lienzo|ˈtɛla|S|art|4|Una tela di Caravaggio ritrovata.|Un lienzo de Caravaggio hallado.|g=f;p=tele
cornice|marco|korˈnitʃe|S|art|4|Una cornice dorata settecentesca.|Un marco dorado del setecientos.|g=f;p=cornici;n=Figurado: uscire dagli schemi, fuori dalla cornice
pennello|pincel|penˈnɛllo|S|art|4|Un pennello di setole fini.|Un pincel de cerdas finas.|g=m;p=pennelli
colonna|columna|koˈlɔnna|S|art|4|Le colonne del Pantheon.|Las columnas del Panteón.|g=f;p=colonne
campanile|campanario|kampaˈnire|S|art|4|Il campanile di Giotto a Firenze.|El campanario de Giotto en Florencia.|g=m;p=campanili
basilica|basílica|baˈzilika|S|art|4|La basilica di San Pietro.|La basílica de San Pedro.|g=f;p=basiliche
scavo|excavación|ˈskavo|S|art|5|Gli scavi di Pompei sono aperti.|Las excavaciones de Pompeya están abiertas.|g=m;p=scavi
reperto|pieza (hallazgo)|reˈpɛrto|S|art|5|Un reperto etrusco nel sito.|Una pieza etrusca en el sitio.|g=m;p=reperti
pinacoteca|pinacoteca|pinakoˈtɛka|S|art|5|La pinacoteca di Brera a Milano.|La pinacoteca de Brera en Milán.|g=f;p=pinacoteche
sommelier|sommelier|sommeˈljɛr|S|ris|5|Il sommelier consiglia un rosso.|El sommelier recomienda un tinto.|g=m;n=Invariable
degustazione|degustación|degustatˈtsjone|S|ris|4|Una degustazione di oli toscani.|Una degustación de aceites toscanos.|g=f;p=degustazioni
gastronomia|gastronomía|gastronoˈmia|S|ali|5|La gastronomia emiliana è ricca.|La gastronomía emiliana es rica.|g=f
portata|plato (tiempo de comida)|porˈtata|S|ris|4|La prima portata era sublime.|El primer plato era sublime.|g=f;p=portate
ristorazione|restaurantes (sector)|ristoratˈtsjone|S|ris|5|Il settore della ristorazione cresce.|El sector de los restaurantes crece.|g=f;r=tec

# ══ espressioni B2 ══
mettere in luce|resaltar (evidenciar)|ˈmɛttere in ˈlutʃe|L|cmu|3|Il report mette in luce i problemi.|El reporte resalta los problemas.|a=mettere in ombra
fare i conti con|hacer cuentas con|ˈfare i ˈkonti kon|L|ast|3|Dovremo fare i conti con la realtà.|Tendremos que hacer cuentas con la realidad.
venire a sapere|llegar a saber|veˈnire a saˈpere|L|cmu|3|Sono venuto a sapere la notizia ieri.|Llegué a saber la noticia ayer.
avere a che fare con|tener que ver con|aˈvere a ke ˈfare kon|L|ast|3|Non voglio avere a che fare con lui.|No quiero tener que ver con él.
fare a meno di|prescindir de|ˈfare a ˈmeno di|L|ast|3|Non posso fare a meno di te.|No puedo prescindir de ti.|n=Non posso fare a meno di ridere = no puedo evitar reír
tenere conto de|tomar en cuenta|teˈnere ˈkonto di|L|ast|2|Bisogna tenere conto del fuso orario.|Hay que tomar en cuenta el huso horario.
prendere in considerazione|tomar en consideración|ˈprɛndere in konsideraˈtsjone|L|ast|4|Prendiamo in considerazione la tua proposta.|Tomamos en consideración tu propuesta.
in merito a|con respecto a|in ˈmɛrito a|L|ast|4|Rispondo in merito alla tua email.|Respondo con respecto a tu correo.|r=for
per quanto riguarda|en lo que respecta a|per kwanto riˈɡw arda|L|ast|3|Per quanto riguarda il prezzo, ci pensiamo.|En lo que respecta al precio, lo pensamos.
a forza di|a fuerza de|a ˈfɔrsa di|L|ast|3|A forza di sentirla, la so a memoria.|A fuerza de escucharla, me la sé de memoria.
in vista di|en vista de|in ˈvista di|L|ast|4|Risparmio in vista del viaggio.|Ahorro en vista del viaje.
in attesa di|en espera de|in atˈtɛsa di|L|ast|4|In attesa di conferma, resto a casa.|En espera de confirmación, me quedo.
in cambio de|a cambio de|in ˈkambjo di|L|ast|3|Ti aiuto, in cambio di un caffè.|Te ayudo, a cambio de un café.
alla pari|en igualdad de condiciones|alla ˈpari|L|ast|4|Parliamo alla pari, da colleghi.|Hablamos en igualdad, como colegas.
alla grande|de maravillas|alla ˈɡrande|L|ast|3|Il concerto è andato alla grande.|El concierto fue de maravillas.|r=col
alla mano|accesible (sencillo)|alla ˈmano|L|emo|4|Un professore alla mano, simpatico.|Un profesor accesible, simpático.|r=inf
alla moda|a la moda|alla ˈmɔda|L|rop|3|Un locale alla moda in centro.|Un local a la moda en el centro.
mettere in moto|poner en marcha|ˈmɛttere in ˈmɔto|L|tec|4|Mettiamo in moto il progetto lunedì.|Ponemos en marcha el proyecto el lunes.|n=Letteralmente: mettere in moto l'auto
mettere in atto|poner en práctica|ˈmɛttere in ˈatto|L|ast|4|Mise in atto il piano perfettamente.|Puso en práctica el plan perfectamente.
dare vita a|dar vida a|ˈdare ˈvita a|L|ast|4|Il regista dà vita a un mondo nuovo.|El director da vida a un mundo nuevo.
portare avanti|llevar adelante|porˈtare avˈvanti|L|ast|3|Porto avanti il progetto da solo.|Llevo adelante el proyecto solo.
andare incontro a|ir al encuentro de|anˈdare inˈkontro a|L|ast|4|Il governo va incontro ai cittadini.|El gobierno va al encuentro de los ciudadanos.
prendere atto|tomar nota (conformarse)|ˈprɛndere ˈatto|L|ast|4|Il consiglio prende atto delle dimissioni.|El consejo toma nota de la renuncia.|r=for
prendere coscienza|tomar conciencia|ˈprɛndere koʃʃjenˈtsa|L|ast|4|Il paese prende coscienza del problema.|El país toma conciencia del problema.
lasciare intendere|dar a entender|laʃˈʃare intenˈdere|L|cmu|4|Lascia intendere che accetterà.|Da a entender que aceptará.
avere senso|tener sentido|aˈvere ˈsɛnso|L|ast|3|Non ha senso discutere ancora.|No tiene sentido discutir más.
togliersi un sfizio|darse un gusto|toˈʎʎersi un ˈsfitsio|L|emo|5|Mi tolgo lo sfizio del sushi stasera.|Me doy el gusto del sushi esta noche.|r=col
di punta|de punta|di ˈpunta|L|ast|4|La tecnologia di punta del laboratorio.|La tecnología de punta del laboratorio.|c=ora di punta
su due piedi|sin pensarlo|su ˈdue ˈpjɛdi|L|tmp|4|Non decidere su due piedi.|No decidas sin pensarlo.|r=inf
alla fine dei conti|a la postre|alla ˈfine dei ˈkonti|L|cnn|4|Alla fine dei conti, avevi ragione tu.|A la postre, tenías razón tú.
senza dubbio|sin duda|senza ˈdubbjo|L|ast|2|Senza dubbio il migliore della classe.|Sin duda el mejor de la classe.
fuori questione|fuera de cuestión|fuori kwesˈtsjone|L|ast|4|Un viaggio è fuori questione quest'anno.|Un viaje es fuera de cuestión este año.
in primo luogo|en primer lugar|in ˈprimo ˈlwɔɡo|L|cnn|3|In primo luogo, ascolta il consiglio.|En primer lugar, escucha el consejo.
in secondo luogo|en segundo lugar|in seˈkondo ˈlwɔɡo|L|cnn|4|In secondo luogo, valuta i costi.|En segundo lugar, evalúa los costos.
da un lato|por un lado|da un ˈlato|L|cnn|4|Da un lato è vantaggioso, dall'altro no.|Por un lado es ventajoso, por el otro no.
`, "B2", "k-b2b");
