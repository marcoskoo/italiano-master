import { parsePack } from "./compact";
import type { VocabWord } from "../types";

/* ── Pack K·X23 · verbi di argomentazione, pensiero e comunicazione (B2) ──
   El corazón del B2 académico: sostener, refutar, matizar. */

export const PACK_KX23: VocabWord[] = parsePack(`
# ══ argomentare ══
controbattere|contraargumentar|kontroˈbattere|V|cnn|5|Il candidato ha controbattuto con argomenti solidi.|El candidato ha contraargumentado con argumentos sólidos.|r=for
dissentire|disentir|dissenˈtire|V|cnn|5|Io dissento da questa opinione.|Yo disiento de esta opinión.|r=for;a=concordare
convenire|convenir (en)|konveˈnire|V|cnn|4|Conviene con me che il problema è complesso.|Conviene conmigo en que el problema es complejo.|r=for
inferire|inferir|infeˈrire|V|cnn|5|Cosa possiamo inferire dal contesto?|¿Qué podemos inferir del contexto?|r=for
confessare|confesar|konˈfessare|V|cmu|3|Ha confessato di non aver letto il libro.|Ha confesado no haber leído el libro.|c=confessare un errore
precisare|precisar|pretʃiˈzare|V|cmu|4|Mi permetta di precisare un dettaglio.|Permítame precisar un detalle.|r=for
specificare|especificar|spetʃiˈfikare|V|cmu|3|Ha specificato che l'offerta scade venerdì.|Ha especificado que la oferta caduca el viernes.
rettificare|rectificar|rettiˈfikare|V|cmu|5|Il giornale ha rettificato l'articolo di ieri.|El periódico ha rectificado el artículo de ayer.|r=for
riformulare|reformular|riformuˈlare|V|cmu|5|Provo a riformulare la domanda in modo più chiaro.|Intento reformular la pregunta de forma más clara.
sintetizzare|sintetizar|sintetiˈttsare|V|cmu|4|Il relatore ha sintetizzato i risultati.|El ponente ha sintetizado los resultados.|r=for
esemplificare|ejemplificar|ezempliˈfikare|V|cnn|5|Mi permetta di esemplificare con un caso reale.|Permítame ejemplificar con un caso real.|r=for
giustificare|justificar|dʒustiˈfikare|V|cnn|2|Come giustifichi questo ritardo?|¿Cómo justificas este retraso?|c=giustificare una spesa
motivare|motivar|motiveˈare|V|cnn|3|Le decisioni vanno motivate per iscritto.|Las decisiones deben motivarse por escrito.|c=motivare una scelta
illustrare|ilustrar|illusˈtrare|V|cnn|3|La slide illustra l'andamento delle vendite.|La diapositiva ilustra la tendencia de las ventas.|r=for
chiarire|aclarar|kjaˈrire|V|cmu|2|Voglio chiarire un malinteso.|Quiero aclarar un malentendido.|c=chiarire un equivoco;s=spiegare
trattare|tratar|tratˈtare|V|cnn|2|Il saggio tratta la questione dell'identità.|El ensayo trata la cuestión de la identidad.|c=trattare un tema
affrontare|afrontar|affronˈtare|V|cnn|2|Il capitolo affronta il problema da più angolazioni.|El capítulo afronta el problema desde varios ángulos.|c=affrontare un problema
supporre|suponer|supˈporre|V|cnn|2|Supponiamo che tu abbia ragione.|Supongamos que tengas razón.|c=supporre un errore
congetturare|conjeturar|kondʒetˈturare|V|cnn|5|Possiamo solo congetturare le sue intenzioni.|Solo podemos conjeturar sus intenciones.|r=let
progettare|proyectar|prodʒetˈtare|V|lav|2|Stiamo progettando una nuova campagna.|Estamos proyectando una nueva campaña.
ideare|idear|ideˈare|V|lav|4|Ha ideato un metodo rivoluzionario.|Ha ideado un método revolucionario.
concepire|concebir|kontʃeˈpire|V|cnn|4|Come hai concepito questa idea?|¿Cómo has concebido esta idea?|r=for
riferire|referir|rifeˈrire|V|cmu|3|Riferisco quanto mi è stato detto.|Refiero cuanto me ha sido dicho.|c=riferire un fatto
riferirsi a|referirse a|rifeˈrirsi a|E|cmu|3|Il passo si riferisce a un episodio noto.|El pasaje se refiere a un episodio conocido.
accennare a|insinuar/mencionar de paso|atˈtʃennare a|E|cmu|4|Ha accennato a un possibile trasferimento.|Ha insinuado un posible traslado.
alludere a|aludir a|alluˈdere a|E|let|4|Il titolo allude a un verso di Montale.|El título alude a un verso de Montale.|r=let
rammentare|recordar|rammenˈtare|V|cmu|5|Mi rammento ancora quel giorno.|Recuerdo aún aquel día.|r=let;s=ricordare
esagerare|exagerar|ezaˈdʒerare|V|cmu|3|Non esagerare con i dettagli.|No exageres con los detalles.|c=esagerare una notizia
sminuire|minimizar|zmiˈnuire|V|cnn|5|Non voglio sminuire il tuo sforzo.|No quiero minimizar tu esfuerzo.|a=esagerare
amplificare|amplificar|ampliˈfikare|V|cnn|5|I media hanno amplificato la notizia.|Los medios han amplificado la noticia.
dare risalto a|dar relieve a|ˈdare riˈzalto a|E|cnn|5|Il titolo dà risalto allo scandalo.|El título da relieve al escándalo.|r=for
prendere le distanze|tomar distancias|ˈprɛndere le ˈdistanse|E|cnn|4|Il partito prende le distanze dalle accuse.|El partido toma distancias de las acusaciones.
esprimere un parere|opinar|eˈsprimere un paˈrere|E|cmu|4|Posso esprimere un parere personale?|¿Puedo dar mi opinión personal?
dare la propria opinione|dar su opinión|ˈdare la ˈpropria opiˈnjone|E|cmu|3|Ognuno ha dato la propria opinione.|Cada uno dio su opinión.
concordare|concordar|konkorˈdare|V|cnn|3|Concordiamo sulla necessità di agire.|Concordamos en la necesidad de actuar.|c=concordare una data;a=dissentire
divergere|divergir|diverˈdʒere|V|cnn|5|Le nostre opinioni divergono su un punto.|Nuestras opiniones divergen en un punto.|r=for;a=convergere
convergere|converger|konverˈdʒere|V|cnn|5|Le indagini convergono sulla stessa pista.|Las investigaciones convergen en la misma pista.|r=for
trarre conclusioni|sacar conclusioni|ˈtratte konkluˈsjoni|E|cnn|4|Non possiamo ancora trarre conclusioni.|Todavía no podemos sacar conclusioni.
giungere a una conclusione|llegar a una conclusión|ˈdʒunɡere a una konkluˈsjone|E|cnn|4|Siamo giunti a una conclusione condivisa.|Hemos llegado a una conclusión compartida.

# ══ pensiero e riflessione ══
riflettere|reflexionar|rifˈlɛttere|V|ast|2|Devo riflettere prima di decidere.|Debo reflexionar antes de decidir.|c=riflettere su un problema
meditare|meditar|mediˈtare|V|ast|4|Medita da ore sul da farsi.|Medita desde hace horas sobre qué hacer.|r=for
rimuginare|darle vueltas a|rimuˈdʒinare|V|emo|5|Sta rimuginando su quella frase da giorni.|Lleva días dándole vueltas a esa frase.|r=col
elaborare un lutto|elaborar un duelo|elaboˈrare un lutto|E|emo|5|Serve tempo per elaborare un lutto.|Hace falta tiempo para elaborar un duelo.
interrogarsi|cuestionarse|interroˈɡarsi|V|ast|4|Ci interroghiamo sul senso della pagina.|Nos cuestionamos el sentido de la página.|c=interrogarsi sul senso
domandarsi|preguntarse|doˈmandarsi|V|ast|3|Mi domando se sia la scelta giusta.|Me pregunto si es la elección correcta.
chiedersi|preguntarse|ˈkjedersi|V|ast|3|Mi chiedo cosa ne pensi tu.|Me pregunto qué piensas tú.
confrontarsi|confrontarse|konfronˈtarsi|V|ast|4|Confrontarsi con l'altro arricchisce.|Confrontarse con el otro enriquece.|c=confrontarsi con un'opinione
quantificare|cuantificar|kwantiˈfikare|V|cnn|5|È difficile quantificare il danno.|Es difícil cuantificar el daño.|r=tec
ponderare|ponderar|pondeˈrare|V|cnn|5|Ha ponderato i vantaggi e i rischi.|Ha ponderado las ventajas y los riesgos.|r=for
prefiggersi|proponerse|prefitˈtʃersi|V|ast|5|Mi sono prefisso l'obiettivo di finire entro marzo.|Me he propuesto terminar antes de marzo.|r=for
proporsi|proponerse|proˈporsi|V|ast|4|Mi propongo di studiare ogni giorno.|Me propongo estudiar cada día.
impegnarsi|esforzarse|impenˈɲarsi|V|ast|2|Mi impegno a fondo per questo progetto.|Me esfuerzo a fondo por este proyecto.|c=impegnarsi in un'impresa
adoperarsi|empeñarse|adoˈperarsi|V|ast|5|Ci siamo adoperati per trovare un accordo.|Nos hemos empeñado en encontrar un acuerdo.|r=for
sforzarsi|esforzarse|sforˈtsarsi|V|ast|3|Mi sforzo di capire il suo punto di vista.|Me esfuerzo por entender su punto de vista.
perseverare|perseverar|perseveˈrare|V|ast|5|Bisogna perseverare nonostante le difficoltà.|Hay que perseverar a pesar de las dificultades.|r=for
desistere|desistir|deˈsistere|V|cnn|5|Non ha desistito dal suo proposito.|No ha desistido de su propósito.|r=for
rinunciare|renunciar|rinuˈntʃare|V|ast|2|Ha rinunciato all'appuntamento.|Ha renunciado a la cita.|c=rinunciare a un progetto
arrendersi|rendirse|arˈrendersi|V|ast|3|Non arrenderti al primo ostacolo.|No te rindas ante el primer obstáculo.
astenersi|abstenerse|asteˈnersi|V|ist|4|Tre consiglieri si sono astenuti dal voto.|Tres consejeros se han abstenido en la votación.|c=astenersi dal voto;r=for
adesire|adherir|adeˈzire|V|ist|5|Molti cittadini aderiscono all'appello.|Muchos ciudadanos adhieren al llamamiento.|r=for
sottoscrivere|suscribir|sottoskriˈvere|V|ist|5|Hanno sottoscritto un accordo storico.|Han suscrito un acuerdo histórico.|r=for
approvare|aprobar|approˈvare|V|ist|3|Il senato ha approvato la riforma.|El senado ha aprobado la reforma.|a=bocciare
disporre|disponer|disˈporre|V|ist|4|Il sindaco dispone lo sgombero dell'edificio.|El alcalde dispone el desalojo del edificio.|r=for
condannare|condenar|konˈdannare|V|ist|3|La corte ha condannato l'imputato a tre anni.|La corte ha condenado al acusado a tres años.|c=condannare a una pena
assolvere|absolver|asˈsɔlvere|V|ist|5|La giuria ha assolto l'imputato.|El jurado ha absuelto al acusado.|a=condannare;n=Falso amigo parcial: también "cumplir una tarea"
imputare|imputar|impuˈtare|V|ist|5|Gli viene imputato il reo di truffa.|Se le imputa el delito de fraude.|r=tec
incriminare|incriminar|inkrimiˈnare|V|ist|5|Il magistrato ha incriminato due dirigenti.|El magistrado ha incriminado a dos directivos.|r=tec

# ══ comunicazione e media ══
comunicare|comunicar|komuˈnikare|V|cmu|1|Il presidente ha comunicato le dimissioni.|El presidente ha comunicado la dimisión.
annunciare|anunciar|anˈnutʃare|V|cmu|2|L'azienda annuncia nuovi tagli.|La empresa anuncia nuevos recortes.
divulgare|divulgar|divulˈɡare|V|sci|4|Il ricercatore divulga la scienza in TV.|El investigador divulga la ciencia en la TV.|c=divulgare una notizia
diffondere|difundir|difˈfondere|V|cmu|2|La notizia si è diffusa in poche ore.|La noticia se ha difundido en pocas horas.|c=diffondere una voce
svelare|desvelar|sveˈlare|V|cmu|3|Il finale svela l'assassino.|El final desvela al asesino.
insabbiare|encubrir|insabˈbjare|V|ist|5|Qualcuno ha insabbiato lo scandalo.|Alguien ha encubierto el escándalo.|r=col;c=insabbiare un'inchiesta
intercettare|interceptar|intertʃetˈtare|V|tec|4|La guardia di finanza ha intercettato un carico.|La guardia di finanza ha interceptado un cargamento.
indagare|investigar|inˈdaɡare|V|ist|3|La procura indaga sui presunti illeciti.|La fiscalía investiga los presuntos ilícitos.|c=indagare su un caso
appurare|comprobar|appuˈrare|V|cnn|5|Si è appurato che l'alibi reggeva.|Se ha comprobado que la coartada se sostenía.|r=for
reclamare|reclamar|reklaˈmare|V|cnn|3|I passeggeri reclamano un rimborso.|Los pasajeros reclaman un reembolso.
denunciare|denunciar|denuˈntʃare|V|ist|3|L associazione denuncia la speculazione.|La asociación denuncia la especulación.|c=denunciare un reato
querelare|denunciar (penalmente)|kweˈrelare|V|ist|5|Il giornalista è stato querelato per diffamazione.|El periodista ha sido querellado por difamación.|r=tec
calunniare|calumniar|kalunˈnjare|V|ist|5|Fu calunniato da rivali invidiosi.|Fue calumniado por rivales envidiosos.|r=let
dare notizia|dar noticia|ˈdare noˈtitsia|E|cmu|4|I tg hanno dato notizia del fatto.|Los telediarios han dado noticia del hecho.
dare riscontro|responder/dar respuesta|ˈdare riˈskontro|E|cmu|5|L'ufficio non dà riscontro alle richieste.|La oficina no responde a las solicitudes.|r=for
rendere noto|hacer saber|ˈrendere ˈnoto|E|cmu|5|Il ministero ha reso noto il comunicato.|El ministerio ha hecho saber el comunicado.|r=for
far sapere|hacer saber|ˈfar saˈpere|E|cmu|3|Fammi sapere quando arrivi.|Hazme saber cuándo llegas.
dare ad intendere|hacer creer|ˈdare ad intenˈdɛndere|E|cmu|5|Vuole darci ad intendere che è colpevole.|Quiere hacernos creer que es culpable.|r=col
far credere|hacer creer|ˈfar ˈkrɛndere|E|cmu|4|Fa credere di essere esperto.|Hace creer que es experto.
dare per scontato|dar por sentado|ˈdare per skonˈtato|E|cnn|4|Non dare per scontato il mio appoggio.|No des por sentado mi apoyo.|c=dare qualcosa per scontato
preannunciare|preanunciar|preanˈnutʃare|V|cmu|5|Il meteo preannuncia pioggia per domani.|El parte meteorológico preanuncia lluvia para mañana.
far capire|hacer entender|ˈfar kapiˈre|E|cmu|3|Il suo gesto faceva capire tutto.|Su gesto hacía entenderlo todo.
# ══ nuovi verbi B2 · valutazione, giudizio, scontro dialettico ══
asserire|aseverar|asseˈrire|V|cnn|5|L'imputato asserisce di essere estraneo ai fatti.|El acusado asevera ser ajeno a los hechos.|r=for;s=affermare
avallare|respaldar|avvalˈlare|V|cnn|5|Nessun esperto ha avallato la ricostruzione.|Ningún experto ha respaldado la reconstrucción.|r=for
avvalorare|corroborar|avvaloˈrare|V|cnn|5|Nuove prove avvalorano la tesi dell'accusa.|Nuevas pruebas corroboran la tesis de la acusación.|r=for
cassare|anular|kasˈsare|V|ist|5|La corte ha cassato la sentenza di primo grado.|La corte ha anulado la sentencia de primera instancia.|r=tec
decurtare|descontar|dekurˈtare|V|fin|4|Gli verrà decurtato il quindicesimo dello stipendio.|Se le descontará la quinceava parte del sueldo.|r=for
depennare|tachar (de una lista)|depenˈnare|V|cnn|5|Il nome è stato depennato dalla lista dei candidati.|El nombre ha sido tachado de la lista de candidatos.|c=depennare dall'elenco
ridimensionare|reducir a su justa medida|ridimensjoˈnare|V|cnn|4|Il report ridimensiona l'entità del danno.|El informe reduce a su justa medida la magnitud del daño.|c=ridimensionare un mito
sottacere|omitir/callar|sottaˈtʃere|V|cnn|5|Non si può sottacere un dettaglio così grave.|No se puede omitir un detalle tan grave.|r=for;n=Governa al congiuntivo: sottacere che…
glissare|pasar por alto|ɡlisˈsare|V|cmu|5|Il relatore ha glissato sulla questione etica.|El ponente ha pasado por alto la cuestión ética.|r=col;n=Galicismo: deslizar sin detenerse
scandagliare|sondear|skandaˈʎʎare|V|cnn|5|Gli inquirenti scandagliano il passato dell'indagato.|Los investigadores sondean el pasado del investigado.|c=scandagliare il passato
setacciare|cribar|settatˈtʃare|V|cnn|5|I giornalisti hanno setacciato ogni documento.|Los periodistas han cribado cada documento.|c=setacciare le notizie
vagliare|despachar/sopesar|vaʎˈʎare|V|cnn|5|Occorre vagliare le ipotesi una per una.|Conviene sopesar las hipótesis una a una.|r=for
sviscerare|desentrañar|zviʃʃeˈrare|V|cnn|5|Il capitolo sviscera le cause del conflitto.|El capítulo desentraña las causas del conflicto.|c=sviscerare un problema
encomiare|elogiar|enkoˈmjare|V|cnn|5|La commissione ha encomiato il lavoro del team.|La comisión ha elogiado el trabajo del equipo.|r=for
decantare|encumbrar|dekanˈtare|V|cnn|5|I critici decantano il suo ultimo romanzo.|Los críticos encumbran su última novela.|r=let
osannare|ensalzar|osanˈnare|V|cnn|5|I tifosi osannano il nuovo allenatore.|Los hinchas ensalzan al nuevo entrenador.|r=let
denigrare|denigrar|deniˈɡrare|V|cnn|4|Chi denigra il collega davanti al capo sbaglia.|Quien denigra al colega delante del jefe se equivoca.|a=elogiare
infangare|mancillar|inˈfaŋɡare|V|cnn|5|Non si può infangare la memoria di un morto.|No se puede mancillar la memoria de un muerto.|r=for
ingigantire|agigantar|indʒiɡanˈtire|V|cnn|5|La stampa ha ingigantito l'episodio.|La prensa ha agigantado el episodio.|a=rimpicciolire
rimpicciolire|empequeñecer|rimpittʃoˈlire|V|cnn|5|Vuole rimpicciolire i meriti altrui.|Quiere empequeñecer los méritos ajenos.|a=ingigantire
caldeggiare|abogar por|kaldedˈdʒare|V|cnn|5|L'assessore caldeggia la zona a traffico limitato.|El concejal aboga por la zona de tráfico limitado.|r=for
patrocinare|patrocinar|patrotʃiˈnare|V|ist|4|Un famoso avvocato ha patrocinato la causa.|Un abogado famoso ha patrocinado la causa.|r=for
auspicare|abrigar la esperanza de|ausˈpikare|V|cnn|4|Il rettore auspica un rapido ritorno in aula.|El rector abriga la esperanza de un rápido regreso al aula.|r=for;n=Uso: auspicare che + congiuntivo
paventare|temer|pavenˈtare|V|cnn|5|Gli industriali paventano un calo dei consumi.|Los industriales temen una caída del consumo.|r=for
propugnare|defender con ahínco|propuɲˈɲare|V|cnn|5|Il movimento propugna la legalizzazione.|El movimiento defiende con ahínco la legalización.|r=for
sposare una causa|abrazar una causa|ˈspozare una ˈkauza|E|cnn|5|Il giornale ha sposato la causa dei senza casa.|El periódico ha abrazado la causa de los sin techo.|r=for
battersi per|luchar por|ˈbattersi per|E|cnn|3|Si batte da anni per i diritti civili.|Lucha desde hace años por los derechos civiles.|c=battersi per i diritti
schierarsi|ponerse de parte|skjerˈrarsi|V|cnn|4|Il partito si è schierato contro la riforma.|El partido se ha puesto del lado contra la reforma.|c=schierarsi a favore
prendere le difese|salir en defensa|ˈprɛndere le diˈfɛse|E|cnn|4|Ha preso le difese del collega accusato.|Ha salido en defensa del colega acusado.
difendere a spada tratta|defender a capa y espada|difˈfɛndere a ˈspada tratˈta|E|cnn|5|Ha difeso a spada tratta le sue idee.|Ha defendido a capa y espada sus ideas.|r=for
fare da portavoce|actuar de portavoz|ˈfare da portavoˈtʃe|E|cmu|4|Il sindaco ha fatto da portavoce della protesta.|El alcalde ha actuado de portavoz de la protesta.
prendere la parola|tomar la palabra|ˈprɛndere la paˈrola|E|cmu|3|Il presidente ha preso la parola alle dieci.|El presidente ha tomado la palabra a las diez.
chiedere la parola|pedir la palabra|ˈkjeːdere la paˈrola|E|cmu|4|Ha chiesto la parola più volte, invano.|Ha pedido la palabra varias veces, en vano.
dare la parola|dar la palabra|ˈdare la paˈrola|E|cmu|4|Il moderatore dà la parola al pubblico.|El moderador da la palabra al público.
replicare|replicar|repliˈkare|V|cmu|3|Il segretario ha replicato punto per punto.|El secretario ha replicado punto por punto.|c=replicare a una critica
rintuzzare|rebatir|rintutˈtsare|V|cnn|5|Ha rintuzzato le accuse con documenti alla mano.|Ha rebatido las acusaciones con documentos en la mano.|r=let
impugnare|impugnar|impunˈɲare|V|ist|4|La difesa impugna la sentenza.|La defensa impugna la sentencia.|c=impugnare un verdetto;n=Anche "empuñar": impugnare il volante
censurare|censurar|tenʃuˈrare|V|cnn|5|In guerra si censurano le notizie.|En guerra se censuran las noticias.|c=censurare un film
stigmatizzare|estigmatizar|stiɡmatitˈtsare|V|cnn|5|Il papa ha stigmatizzato l'indifferenza del mondo.|El papa ha estigmatizado la indiferencia del mundo.|r=for
deprecare|deplorar|depreˈkare|V|cnn|5|Il governo depreca l'uso della violenza.|El gobierno deplora el uso de la violencia.|r=for
biasimare|reprochar|bjaˈzimare|V|cnn|4|La commissione ha biasimato la condotta del funzionario.|La comisión ha reprochado la conducta del funcionario.|r=for;a=lodare
rimbrottare|reprender|rimbrotˈtare|V|fam|5|La madre rimbrotta il figlio pigro.|La madre reprende al hijo perezoso.|r=col
rampognare|reprender con dureza|ramˈpoɲɲare|V|cnn|5|Il maestro rampognò lo studente distratto.|El maestro reprendió con dureza al estudiante distraído.|r=let
strapazzare|tratar mal|strapatˈtsare|V|cmu|4|Il capo ha strapazzato l'impiegato davanti a tutti.|El jefe ha tratado mal al empleado delante de todos.|r=col
tacciare di|acusar de|tatˈtʃare di|E|cnn|5|Fu tacciato di vigliaccheria.|Fue acusado de cobardía.|r=for;c=tacciare di codardia
additare|señalar con el dedo|addiˈtare|V|cmu|4|Tutti additavano il colpevole.|Todos señalaban con el dedo al culpable.|c=additare qualcuno al pubblico ludibrio;r=for
addossare la colpa|achacar la culpa|addosˈsare la ˈkolpa|E|cnn|5|Il boss ha addossato la colpa a un complice.|El jefe ha achacado la culpa a un cómplice.
incolpare|culpar|inkolˈpare|V|cnn|4|Incolpano il sindaco del disastro.|Culpan al alcalde del desastre.|c=incolpare qualcuno di;a=scusare
discolpare|exculpar|diʃˈkolpare|V|ist|5|Le prove lo discolpano del tutto.|Las pruebas lo exculpan por completo.|r=for;a=incolpare
prosciogliere|excarcelar|proʃˈʃɔlʎere|V|ist|5|Il gip ha prosciolto l'indagato.|El juez ha excarcelado al investigado.|r=tec
patteggiare|negociar (la pena)|patˈteddʒare|V|ist|5|L'imputato ha patteggiato due anni.|El acusado ha negociado dos años.|r=tec
interrogare|interrogar|interroˈɡare|V|ist|3|Il maresciallo ha interrogato i testimoni.|El sargento ha interrogado a los testigos.|c=interrogare un sospetto
inquisire|indagar con rigor|inkwiˈzire|V|ist|5|Il tribunale dell'Inquisizione inquisiva gli eretici.|El tribunal de la Inquisición indagaba con rigor a los herejes.|r=let
estorcere|arrancar (a la fuerza)|estorˈtʃere|V|cnn|5|Gli hanno estorto una confessione con l'inganno.|Le han arrancado una confesión con engaño.|c=estorcere una confessione
carpire|sonsacar|karˈpire|V|cnn|5|Il giornalista ha carpito la notizia a un inserviente.|El periodista ha sonsacado la noticia a un auxiliar.|r=let
insinuare|insinuar|insinˈware|V|cmu|4|Qualcuno insinua che ci siano irregolarità.|Alguien insinúa que hay irregularidades.|c=insinuare un dubbio
seminare dubbi|sembrar dudas|semiˈnare ˈdubbi|E|cnn|4|Le sue parole hanno seminato dubbi tra i soci.|Sus palabras han sembrado dudas entre los socios.
gettare discredito|arrojar descrédito|dʒetˈtare diskreˈdito|E|cnn|5|Le rivelazioni gettano discredito sull'istituto.|Las revelaciones arrojan descrédito sobre el instituto.|r=for
screditare|desacreditar|skrediˈtare|V|cnn|5|Lo scandalo scredita l'intera classe politica.|El escándalo desacredita a toda la clase política.
sbugiardare|desmentir públicamente|zbuʎˈʎardare|V|cmu|5|Un testimone l'ha sbugiardato in diretta.|Un testigo le ha desmentido públicamente en directo.|r=col
tacere|callar|taˈtʃere|V|cmu|3|Chi tace acconsente? Non sempre.|¿Quien calla otorga? No siempre.|c=tacere su un segreto;a=rivelare
rimbeccare|replicar con dureza|rimˈbekkare|V|cmu|5|«Non è così», lo rimbeccò lei.|«No es así», le replicó ella con dureza.|r=col
`, "B2", "k-x23");
