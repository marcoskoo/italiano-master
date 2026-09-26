import { parsePack } from "./compact";
import type { VocabWord } from "../types";

/* ── Pack K·A1-b · verbos, adjetivos, función y cortesía (MCER A1) ──── */

export const PACK_KA1B: VocabWord[] = parsePack(`
# ══ verbi essenziali ══
abitare|vivir (habitar)|aˈbitare|V|cit|1|Abito a Lima da dieci anni.|Vivo en Lima desde hace diez años.|c=abitare in via…
cantare|cantar|kanˈtare|V|mus|1|Mia sorella canta nel coro.|Mi hermana canta en el coro.
ballare|bailar|balˈlare|V|mus|1|Balliamo la salsa.|Bailamos salsa.
ridere|reír|ˈridere|V|emo|1|Ridiamo insieme vecchi ricordi.|Reímos juntos viejos recuerdos.|n=Conjugación irregular: rido, ridi, ride…; participio riso
piangere|llorar|ˈpjadʒere|V|emo|1|Il bambino piange perché è stanco.|El niño llora porque está cansado.|n=Participio: pianto
saltare|saltar|salˈtare|V|spt|1|Il cane salta la staccionata.|El perro salta la cerca.
volare|volar|voˈlare|V|nat|1|L'aereo vola sopra le nuvole.|El avión vuela sobre las nubes.
camminare|caminar|kammiˈnare|V|spt|1|Cammino ogni mattina nel parco.|Camino cada mañana en el parque.
entrare|entrar|enˈtrare|V|cit|1|Entriamo nel museo.|Entramos al museo.|a=uscire
sedersi|sentarse|seˈdersi|V|cas|1|Mi siedo qui, grazie.|Me siento aquí, gracias.|n=Irregular: mi siedo, ti siedi, si siede
mostrare|mostrar|moˈstrare|V|cmu|1|Ti mostro le foto delle vacanze.|Te muestro las fotos de las vacaciones.
spiegare|explicar|spieˈɡare|V|stu|1|Il professore spiega la grammatica.|El profesor explica la gramática.|c=spiegare bene
raccontare|contar (narrar)|rakkonˈtare|V|cmu|1|Raccontami una storia.|Cuenta un cuento.|n=ES "contar" = contare (números) y raccontare (historias)
insegnare|enseñar|inseɲˈɲare|V|pro|1|Insegno spagnolo agli italiani.|Enseño español a los italianos.|n=IT insegnare ≠ ES "enseñar" (algo se insegna A alguien)
imparare|aprender|impaˈrare|V|stu|1|Imparo dieci parole al giorno.|Aprendo diez palabras al día.|a=insegnare;c=imparare a memoria
pensare|pensar|penˈsare|V|emo|1|Penso spesso al futuro.|Pienso a menudo en el futuro.|c=pensare a qualcuno
credere|creer|ˈkrɛdere|V|emo|1|Credo che hai ragione.|Creo que tienes razón.|c=credere in qualcosa
amare|amar|ˈamare|V|emo|1|Amo la mia famiglia.|Amo a mi familia.
odiare|odiar|ˈɔdiare|V|emo|2|Odio il traffico.|Odio el tráfico.
telefonare|llamar por teléfono|telefoˈnare|V|cmu|1|Ti telefono stasera.|Te llamo por teléfono esta noche.
chiamare|llamar|kjaˈmare|V|cmu|1|Chiamo il cameriere.|Llamo al mesero.
visitare|visitar|viziˈtare|V|vig|1|Visito Firenze questo weekend.|Visito Florencia este fin de semana.
incontrare|encontrarse con|inkonˈtrare|V|rel|1|Incontro Giulia in centro.|Me encuentro con Giulia en el centro.
salutare|saludar|saluˈtare|V|sal|1|Saluto i vicini ogni mattina.|Saludo a los vecinos cada mañana.
accompagnare|acompañar|akkombaɲˈɲare|V|rel|1|Ti accompagno alla stazione.|Te acompaño a la estación.
regalare|regalar|reɡaˈlare|V|rel|1|Le regalo dei fiori.|Le regalo flores.
prestare|prestar|preˈstare|V|fin|2|Mi presti la tua penna?|¿Me prestas tu lapicero?|c=prestare attenzione
buttare|botar (tirar)|butˈtare|V|cas|1|Butta la carta nel bidone.|Bota el papel al tacho.|n=ES "buttar" no existe: botar
raccogliere|recoger|rakˈkɔʎʎere|V|cas|2|Raccolgo i giocattoli da terra.|Recojo los juguetes del suelo.|n=Irregular: raccolgo; participio raccolto
spegnere|apagar|ˈspɛɲɲere|V|tec|2|Spegni la luce, per favore.|Apaga la luz, por favor.|n=Irregular: spengo; participio spento
accendere|encender|atˈtʃɛndere|V|tec|2|Accendo la candela.|Enciendo la vela.|n=Irregular: accendo; participio acceso;a=spegnere
tirare|jalar|tiˈrare|V|spt|2|Tira la corda con forza.|Jala la cuerda con fuerza.|c=tirare un calcio
spingere|empujar|ˈspinɡe|V|spt|2|Spingo la porta pesante.|Empujo la puerta pesada.|n=Irregular: spingo; participio spinto
girare|girar|dʒiˈrare|V|tra|1|Gira a destra al semaforo.|Gira a la derecha en el semáforo.|c=girare un film
guidare|manejar|ɡwiˈdare|V|tra|1|Mio padre guida la macchina.|Mi padre maneja el carro.|c=guidare piano
parcheggiare|estacionar|parkekˈdʒare|V|tra|2|Parcheggio davanti al supermercato.|Estaciono frente al supermercato.
viaggiare|viajar|viaˈdʒare|V|vig|1|Viaggio spesso per lavoro.|Viajo a menudo por trabajo.
pescare|pescar|peˈskare|V|sve|2|Pesco con mio nonno al lago.|Pesco con mi abuelo en el lago.
sciare|esquiar|ˈʃare|V|spt|2|Sciamo sulle Alpi ogni inverno.|Esquiamos en los Alpes cada invierno.
pattinare|patinar|pattiˈnare|V|spt|3|Pattino sul ghiaccio.|Patino sobre el hielo.
vincere|ganar|ˈvintʃere|V|spt|2|Vinciamo la partita!|¡Ganamos el partido!|n=Irregular: vinco, vinci…; participio vinto
disegnare|dibujar|dizeɲˈɲare|V|sve|2|Disegno fumetti nel tempo libero.|Dibujo cómics en el tiempo libre.
cancellare|borrar| kantʃelˈlare|V|stu|2|Cancella l'ultima frase.|Borra la última frase.
contare|contar|konˈtare|V|stu|1|Conto i soldi due volte.|Cuento el dinero dos veces.|c=contare su qualcuno
calcolare|calcular|kalkoˈlare|V|stu|2|Calcolo la spesa del mese.|Calculo los gastos del mes.
pesare|pesar|peˈzare|V|ali|2|Quanto pesa la valigia?|¿Cuánto pesa la maleta?
misurare|medir|miˈzurare|V|sla|2|Il medico misura la pressione.|El médico mide la presión.|n=Mide la presión, el tiempo, la temperatura
spendere|gastar|ˈspɛndere|V|fin|2|Quanto hai speso?|¿Cuánto has gastado?|n=Irregular: spendo; participio speso
vendere|vender|ˈvɛndere|V|cmp|1|Vendo la mia bici vecchia.|Vendo mi bici vieja.|a=comprare
guadagnare|ganar (dinero)|ɡwaˈdaɲɲare|V|lav|2|Guadagno abbastanza per vivere.|Gano suficiente para vivir.|n="Ganar" partido = vincere; "ganar" dinero = guadagnare
acquistare|adquirir|akwiˈstare|V|cmp|3|Acquistiamo una casa nuova.|Adquirimos una casa nueva.|s=comprare;r=for
firmare|firmar|firˈmare|V|lav|2|Firmo il contratto domani.|Firmo el contrato mañana.
scusare|disculpar|ˈskuzare|V|sal|1|Scusa il ritardo!|¡Disculpa la tardanza!|c=scusare il disturbo
aiutante|ayudante|aiuˈtante|S|lav|3|Cerco un aiutante in cucina.|Busco un ayudante de cocina.|g=m;p=aiutanti

# ══ aggettivi essenziali ══
giovane|joven|ˈdʒovane|A|fam|1|Mia nonna è ancora giovane di spirito.|Mi abuela es aún joven de espíritu.|a=vecchio
aperto|abierto|aˈpɛrto|A|cit|1|Il negozio è aperto fino a tardi.|La tienda está abierta hasta tarde.|a=chiuso;n=Participio de aprire
chiuso|cerrado|ˈkjuzo|A|cit|1|Il museo è chiuso il lunedì.|El museo está cerrado los lunes.|a=aperto;n=Participio di chiudere
ricco|rico|ˈrikko|A|fin|1|Non è ricco di soldi ma di amici.|No es rico en dinero sino en amigos.|a=povero
povero|pobre|ˈpɔvero|A|fin|1|Una famiglia povera ma felice.|Una familia pobre pero feliz.|a=ricco
sano|sano|ˈsano|A|sla|1|Mangio sano e faccio sport.|Como sano y hago deporte.|a=malato
allegro|alegre|alˈlɛɡro|A|emo|1|È sempre allegro la mattina.|Siempre está alegre por la mañana.|a=triste;s=contento
contento|contento|konˈtɛnto|A|emo|1|Sono contento dei risultati.|Estoy contento con los resultados.|a=scontento;c=essere contento di
sereno|sereno|seˈreno|A|emo|1|Il cielo è sereno.|El cielo está despejado.|n=También: persona serena = tranquila
educato|educado|eduˈkato|A|rel|2|Che bambino educato!|¡Qué niño tan educado!|a=maleducato
maleducato|maleducado|maleduˈkato|A|rel|2|È maleducato parlare con la bocca piena.|Es maleducado hablar con la boca llena.|a=educato
attivo|activo|atˈtivo|A|spt|2|Mio nonno è ancora attivo.|Mi abuelo sigue activo.|a=pigro
sportivo|deportivo|sporˈtivo|A|spt|1|Fa una vita sportiva.|Lleva una vida deportiva.
studioso|estudioso|stuˈdjɔzo|A|stu|2|È uno studente studioso.|Es un estudiante estudioso.
bravo|bueno (en algo)|ˈbravo|A|rel|1|Sei bravissimo a cucinare!|¡Eres buenísimo cocinando!|n=IT bravo ≠ "bravo" de aplauso necesariamente: essere bravo a = ser bueno para
famoso|famoso|faˈmozo|A|att|1|Firenze è famosa per il Rinascimento.|Florencia es famosa por el Renacimiento.|c=famoso per
straniero|extranjero|straˈnjɛro|A|cit|1|Da straniero, parlo con l'accento.|Como extranjero, hablo con acento.|n=Sustantivo: lo straniero = el extranjero
diverso|diferente|diˈverso|A|ast|1|Ogni regione ha usi diversi.|Cada región tiene costumbres diferentes.|n=¡Ojo! diverso = diferente; "diverso" ES = vario
uguale|igual|uˈɡwale|A|ast|1|Siamo della stessa opinione: è uguale.|Somos de la misma opinión: es igual.|a=diverso;n=También: per me è uguale = me da igual
possibile|posible|posˈsibile|A|ast|1|Non è possibile!|¡No es posible!
impossibile|imposible|imposˈsibile|A|ast|1|Sali quella salita in bici? Impossibile!|¿Subes esa cuesta en bici? ¡Imposible!|a=possibile
necessario|necesario|neʧeˈssario|A|ast|2|È necessario prenotare.|Es necesario reservar.
utile|útil|ˈutile|A|ast|1|Questo dizionario è utilissimo.|Este diccionario es utilísimo.|a=inutile
inutile|inútil|iˈnutile|A|ast|1|È inutile lamentarsi.|Es inútil quejarse.|a=utile
comodo|cómodo|ˈkɔmodo|A|cas|1|Queste scarpe sono comodissime.|Estos zapatos son comodísimos.|a=scomodo;n=¡Falso amigo parcial! comodo = cómodo
scomodo|incómodo|ˈskɔmodo|A|cas|2|Il treno era scomodo.|El tren estaba incómodo.|a=comodo
largo|ancho|ˈlargo|A|ast|1|Un viale largo e alberato.|Una avenida ancha y arbolada.|a=stretto;ff=1;n=¡Falso amigo! IT largo = ancho, no "largo" (que es lungo)
stretto|estrecho|ˈstretto|A|ast|1|Una strada stretta nel centro storico.|Una calle estrecha en el centro histórico.|a=largo
duro|duro|ˈduro|A|ast|1|Questo pane è duro come un sasso.|Este pan está duro como piedra.|a=morbido
amaro|amargo|ˈamaro|A|ali|2|Il caffè è amaro senza zucchero.|El café es amargo sin azúcar.|a=dolce
acido|ácido|ˈatʃido|A|ali|2|Questo limone è molto acido.|Este limón es muy ácido.
piccante|picante|pikˈkante|A|ali|1|Vorrei qualcosa di piccante.|Quisiera algo picante.
fresco|fresco|ˈfresko|A|ali|1|Bevo un caffè fresco.|Tomo un café fresco.|n=¡Ojo! fresco = recién hecho o fresco-clima; ES "fresco" = anche frío suave
bagnato|mojado|baɲˈɲato|A|nat|1|Il pavimento è bagnato.|El piso está mojado.|a=asciutto
asciutto|seco|aʃˈʃutto|A|nat|2|L'asciugamano è asciutto.|La toalla está seca.|a=bagnato;n=También estilo sobrio: uno stile asciutto
luminoso|luminoso|lumiˈnɔzo|A|cas|2|Un salotto luminoso.|Una sala luminosa.|a=buio
buio|oscuro|ˈbwɔjo|A|nat|1|La notte è buia.|La noche está oscura.|a=luminoso
silenzioso|silencioso|silenˈtsjɔzo|A|cas|2|La biblioteca è silenziosa.|La biblioteca es silenciosa.|a=rumoroso
rumoroso|ruidoso|rumoˈrɔzo|A|cit|2|Il traffico è rumoroso.|El tráfico es ruidoso.|a=silenzioso
matto|loco|ˈmatto|A|emo|2|Sei matto a uscire con questo freddo!|¡Estás loco en salir con este frío!|r=inf;s=pazzo
sporcare|ensuciar|sporˈkare|V|cas|2|Non sporcare il divano!|¡No ensucies el sofá!

# ══ quantificatori e funzione ══
troppo|demasiado|ˈtrɔppo|D|ast|1|Ho mangiato troppo.|He comido demasiado.
così|así|koˈsi|D|cnn|1|Non si fa così!|¡No se hace así!|c=così così
lì|allí|ˈli|D|ast|1|Metti il libro lì, sul tavolo.|Pon el libro allí, en la mesa.|v=laggiù
là|allá|la|D|ast|1|Guarda là, un arcobaleno!|Mira allá, ¡un arcoíris!|v=là
dentro|dentro|ˈdentro|D|ast|1|Resto dentro, fa freddo.|Me quedo dentro, hace frío.|a=fuori
fuori|fuera|ˈfwɔri|D|ast|1|I bambini giocano fuori.|Los niños juegan afuera.|a=dentro
sopra|arriba (encima)|ˈsɔpra|D|ast|1|Il gatto dorme sopra il letto.|El gato duerme encima de la cama.|a=sotto
sotto|abajo (debajo)|ˈsɔtto|D|ast|1|La chiave è sotto il tappeto.|La llave está debajo de la alfombra.|a=sopra
davanti|delante|daˈvanti|D|ast|1|Parcheggio davanti all'ingresso.|Estaciono delante de la entrada.|a=dietro
dietro|detrás|djeˈtro|D|ast|1|Il garage è dietro la casa.|El garaje está detrás de la casa.|a=davanti
accanto|al lado|akˈkanto|D|ast|1|Vivo accanto al parco.|Vivo al lado del parque.|c=accanto a
intorno|alrededor|inˈtorno|D|ast|2|C'è un giardino intorno alla villa.|Hay un jardín alrededor de la villa.|c=intorno a
spesso|a menudo|ˈspɛsso|D|tmp|1|Vado spesso al cinema.|Voy a menudo al cine.|a=raramente
raramente|rara vez|raraˈmente|D|tmp|2|Mangio raramente la carne.|Como rara vez carne.|a=spesso
di solito|normalmente|di soˈlito|L|tmp|1|Di solito mi sveglio alle sette.|Normalmente me despierto a las siete.
ogni tanto|de vez en cuando|ˈoɲɲi ˈtanto|L|tmp|1|Ogni tanto vado a trovare i nonni.|De vez en cuando voy a visitar a los abuelos.
piano|despacio / bajo|pjaˈno|D|cmu|1|Parla piano, il bambino dorme.|Habla bajo, el niño duerme.|a=forte;c=piano piano
peggio|peor|ˈpɛddʒo|D|ast|1|Oggi mi sento peggio.|Hoy me siento peor.|a=meglio
davvero|de verdad|davˈvero|D|cmu|1|Ti ringrazio davvero.|Te agradezco de verdad.

# ══ tempo e numeri ══
stasera|esta noche|staˈsera|D|tmp|1|Stasera ceniamo fuori.|Esta noche cenamos afuera.
stanotte|esta noche (toda la noche)|staˈnɔtte|D|tmp|2|Stanotte non ho dormito.|Esta noche no dormí.
stamattina|esta mañana|stamatˈtina|D|tmp|1|Stamattina ho fatto colazione presto.|Esta mañana desayuné temprano.
dopodomani|pasado mañana|dopodoˈmani|D|tmp|2|Ci vediamo dopodomani.|Nos vemos pasado mañana.
mezzogiorno|mediodía|medzoˈdʒorno|S|tmp|1|Pranziamo a mezzogiorno.|Almorzamos al mediodía.|g=m;n=Invariable
mezzanotte|medianoche|medzaˈnɔtte|S|tmp|2|Sono tornato a mezzanotte.|Regresé a la medianoche.|g=f;n=Invariable
fa|hace (tiempo atrás)|fa|D|tmp|1|Ho visitato Roma due anni fa.|Visité Roma hace dos años.|n=Se pospone: due giorni fa = hace dos días
undici|once|unˈditʃi|N|tmp|1|Il tavolo undici è pronto.|La mesa once está lista.
dodici|doce|ˈdɔditʃi|N|tmp|1|All'una meno dodici.|A la una menos doce.
tredici|trece|ˈtrɛditʃi|N|tmp|1|Il tredici porta fortuna.|El trece trae suerte.
quattordici|catorce|kwatˈtorditʃi|N|tmp|1|Ho quattordici cugini.|Tengo catorce primos.
quindici|quince|kwinˈditʃi|N|tmp|1|Il quindici di ogni mese.|El quince de cada mes.
sedici|dieciséis|seˈditʃi|N|tmp|1|Mia figlia ha sedici anni.|Mi hija tiene dieciséis años.
diciassette|diecisiete|ditʃasˈsɛtte|N|tmp|1|L'appuntamento è alle diciassette.|La cita es a las diecisiete.
diciotto|dieciocho|diˈtʃɔtto|N|tmp|1|Costa diciotto euro.|Cuesta dieciocho euros.
diciannove|diecinueve|ditʃanˈnove|N|tmp|1|La stanza numero diciannove.|La habitación número diecinueve.
trenta|treinta|ˈtrenta|N|tmp|1|Ho trenta minuti di tempo.|Tengo treinta minutos de tiempo.
quaranta|cuarenta|kwaˈranta|N|tmp|1|Mio padre ha quarant'anni.|Mi padre tiene cuarenta años.
cinquanta|cincuenta|tʃinˈkwanta|N|tmp|1|Il biglietto costa cinquanta euro.|El pasaje cuesta cincuenta euros.
sessanta|sesenta|sesˈsanta|N|tmp|1|Guido a sessanta all'ora.|Manejo a sesenta por hora.
settanta|setenta|setˈtanta|N|tmp|1|Mia nonna ha settant'anni.|Mi abuela tiene setenta años.
ottanta|ochenta|otˈtanta|N|tmp|1|L'ottanta per cento ha votato sì.|El ochenta por ciento votó sí.
novanta|noventa|noˈvanta|N|tmp|1|Il nonno corre ancora a novant'anni.|El abuelo aún corre a los noventa.
un milione|un millón|un milˈljone|N|tmp|1|Un milione di persone in piazza.|Un millón de personas en la plaza.
terzo|tercero|ˈtɛrtso|A|tmp|1|Il terzo piano, per favore.|El tercer piso, por favor.
quarto|cuarto|ˈkwarto|A|tmp|1|La quarta volta che chiamo.|La cuarta vez que llamo.
quinto|quinto|ˈkinto|A|tmp|1|Il quinto capitolo del libro.|El quinto capítulo del libro.
ultimo|último|ˈultimo|A|tmp|1|L'ultimo treno parte a mezzanotte.|El último tren sale a la medianoche.|a=primo
doppio|doble|ˈdɔppjo|A|tmp|1|Un caffè doppio, per favore.|Un café doble, por favor.
metà|mitad|meˈta|S|tmp|1|Metà della classe è assente.|La mitad de la clase está ausente.|g=f;n=Invariable
coppia|pareja (de dos)|ˈkɔppja|S|rel|2|Siamo una coppia da tre anni.|Somos pareja desde hace tres años.|g=f;p=coppie

# ══ cortesia ed espressioni ══
certo|claro / por supuesto|ˈtʃɛrto|I|sal|1|Certo, ti aiuto volentieri.|Claro, te ayudo con gusto.
permesso|permiso (con permiso)|perˈmɛsso|I|sal|2|Permesso, devo passare.|Con permiso, tengo que pasar.
va bene|está bien|va ˈbɛne|L|sal|1|Ci vediamo alle otto? Va bene.|¿Nos vemos a las ocho? Está bien.|a=non va bene
d'accordo|de acuerdo|daˈkordo|L|sal|1|D'accordo, a domani!|De acuerdo, ¡hasta mañana!
a domani|hasta mañana|a doˈmani|L|sal|1|Grazie di tutto, a domani!|Gracias por todo, ¡hasta mañana!
a presto|hasta pronto|a ˈprɛsto|L|sal|1|Ciao Marco, a presto!|Chau Marco, ¡hasta pronto!
a dopo|hasta luego|a ˈdopo|L|sal|1|Esco ora, a dopo!|Salgo ahora, ¡hasta luego!
buona giornata|buen día|ˈbwɔna dʒorˈnata|L|sal|1|Grazie e buona giornata!|Gracias y ¡buen día!
buon appetito|buen provecho|bwɔn appeˈtito|L|ris|1|Tutti a tavola: buon appetito!|Todos a la mesa: ¡buen provecho!
buon compleanno|feliz cumpleaños|bwɔn kombleˈanno|L|sal|1|Tanti auguri, buon compleanno!|Muchas felicidades, ¡feliz cumpleaños!
buon viaggio|buen viaje|bwɔn viˈaddʒo|L|vig|1|Buon viaggio e mandami un messaggio!|¡Buen viaje y escríbeme un mensaje!
felice anno nuovo|feliz año nuevo|feˈlitʃe anˈnwɔvo|L|sal|2|Felice anno nuovo a tutti!|¡Feliz año nuevo a todos!
ci vediamo|nos vemos|tʃi vedˈdjamo|L|sal|1|Ci vediamo domani a scuola.|Nos vemos mañana en la escuela.
ci sentiamo|nos hablamos|tʃi senˈtjamo|L|sal|2|Ci sentiamo più tardi, ciao!|Nos hablamos más tarde, ¡chau!
mi dispiace|lo siento|mi disˈpjatʃe|L|emo|1|Mi dispiace per il ritardo.|Lo siento por la tardanza.
non c'è problema|no hay problema|non tʃɛ proˈblɛma|L|sal|1|Non c'è problema, ci penso io.|No hay problema, yo me encargo.|r=inf
non ti preoccupare|no te preocupes|non ti preokkuˈpare|L|emo|1|Non ti preoccupare, va tutto bene.|No te preocupes, todo está bien.
stai tranquillo|quédate tranquilo|stai tranˈkwiʎʎo|L|emo|2|Stai tranquillo, arrivo subito.|Quédate tranquilo, llego enseguida.
di niente|de nada|di ˈnjɛnte|L|sal|1|Grazie mille! — Di niente.|¡Muchas gracias! — De nada.
volentieri|con gusto|volenˈtjɛri|D|sal|1|Vado volentieri al cinema.|Voy con gusto al cine.|n=Muy italiano: risposta a inviti = volentieri!
mamma mia|¡madre mía!|mamˈma ˈmia|I|emo|1|Mamma mia, che caldo oggi!|¡Madre mía, qué calor hoy!|r=inf
dai|¡vamos! / ¡dale!|dai|I|emo|1|Dai, andiamo al mare!|¡Dale, vamos a la playa!|r=inf;n=Interjección omnipresente en italiano coloquial
ecco|aquí está / ahí tienes|ˈɛkko|D|sal|1|Ecco il tuo caffè.|Aquí está tu café.|c=ecco fatto
forza|¡fuerza! / ¡vamos!|ˈfɔrtsa|I|spt|2|Forza, dai, manca poco!|¡Vamos, dale, falta poco!|n=También: la forza = la fuerza
macché|¡qué va!|makˈke|I|emo|3|Sei stanco? Macché!|¿Estás cansado? ¡Qué va!|r=inf
`, "A1", "k-a1b");
