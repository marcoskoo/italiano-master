import { parsePack } from "./compact";
import type { VocabWord } from "../types";

/* ── Pack K·B1-a · sociedad, opinión y pensamiento (MCER B1) ─────────── */

export const PACK_KB1: VocabWord[] = parsePack(`
# ══ opinion e comunicazione ══
opinione|opinión|opiˈnjone|S|cmu|1|La mia opinione non conta molto.|Mi opinión no cuenta mucho.|g=f;p=opinioni;c=secondo la mia opinione
giudizio|juicio|dʒuˈditsio|S|ast|2|Un giudizio obiettivo sul film.|Un juicio objetivo sobre la película.|g=m;p=giudizi
punto di vista|punto de vista|ˈpwɔnto di ˈvista|L|ast|1|Capisco il tuo punto di vista.|Entiendo tu punto de vista.
critica|crítica|ˈkritika|S|cmu|2|La critica del pubblico è stata dura.|La crítica del público fue dura.|g=f;p=critiche
criticare|criticar|kritiˈkare|V|cmu|2|Non criticare quello che non conosci.|No critiques lo que no conoces.
ritenere|considerar / retener|riteˈnere|V|ast|2|Ritengo che sia un errore.|Considero que es un error.|n=Más formal que credere; ritenere ≠ "retener" (trattenere)
stimare|estimar (valorar)|stiˈmare|V|ast|2|Stimo molto il suo lavoro.|Estimo mucho su trabajo.|n=Estimar cantidad = valutare; estimar a alguien = stimare
considerare|considerar|konsiˈderare|V|ast|1|Considero l'offerta un'opportunità.|Considero la oferta una oportunidad.
convincere|convencer|konˈtʃintʃere|V|cmu|1|Mi hai convinto, parto con voi.|Me convenciste, me voy con ustedes.|n=Io convinco; participio convinto
dubitare|dudar|dubiˈtare|V|ast|2|Dubito che arrivi in tempo.|Dudo que llegue a tiempo.|c=dubitare di
sospettare|sospechar|sospeˈttare|V|ast|2|Sospetto che mi nasconda qualcosa.|Sospecho que me esconde algo.|s=la mia convinzione; n=Sustantivo: il sospetto
osservare|observar|osserˈvare|V|sci|2|Osservo gli uccelli col binocolo.|Observo las aves con binocular.|n=Osservare = observar; "observar que" = notare che
notare|notar|noˈtare|V|ast|1|Ho notato un dettaglio strano.|Noté un detalle extraño.|s=accorgersi di
accorgersi|darse cuenta|akˈkorɡersi|V|ast|1|Mi sono accorto dell'errore tardi.|Me di cuenta del error tarde.|n=Irregular: mi accorgo; participio accorto;c=accorgersi di
rendersi conto|darse cuenta|ˈrɛndersi ˈrato|L|ast|2|Ti rendi conto di cosa hai fatto?|¿Te das cuenta de lo que hiciste?
valutare|evaluar|valuˈtare|V|ast|2|Devo valutare i pro e i contro.|Debo evaluar el pro y el contra.
confrontare|comparar|konfronˈtare|V|ast|3|Confronta i due preventivi.|Compara los dos presupuestos.|s=paragonare
paragonare|comparar|paraɡoˈnare|V|ast|3|Non paragonarmi a lui!|¡No me compares con él!|n=Paragonare A CON B
distinguere|distinguir|diˈstiŋɡwere|V|ast|2|Distinguo i sapori delle erbe.|Distingo los sabores de las hierbas.|n=Io distinguo; participio distinto
somigliare|parecerse|somiˈʎʎare|V|rel|2|Somiglia molto a suo padre.|Se parece mucho a su padre.|c=somigliare a
dipendere|depender|dipenˈdere|V|ast|1|Dipende da te decidere.|Depende de ti decidir.|c=dipendere da
riguardare|concernir / mirar de nuevo|riɡwarˈdare|V|ast|2|La questione riguarda tutti noi.|El asunto concierne a todos nosotros.|n=Usado sobre todo en 3ª persona: la norma riguarda…
trattarsi|tratarse|tratˈtarsi|V|ast|1|Si tratta di un malinteso.|Se trata de un malentendido.|c=si tratta di
riguardo|respecto|riˈɡwardo|S|ast|2|Riguardo al prezzo, ci penserò.|Respecto al precio, lo pensaré.|g=m;c=riguardo a
provocare|provocar|provoˈkare|V|ast|2|Lo sciopero provoca ritardi.|La huelga provoca retrasos.|s=causare
causare|causar|kauˈzare|V|ast|2|La pioggia ha causato disagi.|La lluvia causó inconvenientes.
produrre|producir|proˈdurre|V|lav|1|L'Italia produce ottimo vino.|Italia produce excelente vino.|n=Io produco; participio prodotto
fabbricare|fabricar|fabbriˈkare|V|lav|3|Fabbricano mobili su misura.|Fabrican muebles a medida.
trasformare|transformar|trasforˈmare|V|ast|2|Il cantiere trasforma il quartiere.|La obra transforma el barrio.|c=trasformarsi in
ridurre|reducir|riˈdurre|V|ast|2|Riduco lo zucchero nel caffè.|Reduzco el azúcar en el café.|n=Io riduco; participio ridotto
aumentare|aumentar|aumenˈtare|V|fin|1|Il prezzo del biglietto aumenta.|El precio del pasaje aumenta.|a=diminuire
diminuire|disminuir|dimiˈnuire|V|fin|2|Il traffico diminuisce d'estate.|El tráfico disminuye en verano.|a=aumentare;n=Io diminuisco (tipo -isc)
sviluppare|desarrollar|zvilupˈpare|V|lav|2|L'azienda sviluppa nuove app.|La empresa desarrolla nuevas apps.|c=sviluppare un progetto
tentare|intentar|tenˈtare|V|ast|3|Tentò la sorte di nuovo.|Intentó la suerte otra vez.|s=provare
rischiare|arriesgar|risˈkjare|V|ast|2|Rischi di perdere il treno.|Arriesgas perder el tren.|n=Sustantivo: il rischio
impedire|impedir|impeˈdire|V|ast|2|Il maltempo impedisce la gita.|El mal tiempo impide el paseo.|n=Io impedisco (tipo -isc)
obbligare|obligar|obbliˈɡare|V|ast|2|Nessuno mi obbliga a restare.|Nadie me obliga a quedarme.|n=Obbligato A fare qualcosa; participio obbligato

# ══ societa e politica ══
diritto|derecho|dirˈritto|S|ist|2|Il diritto al lavoro è costituzionale.|El derecho al trabajo es constitucional.|g=m;p=diritti;c=diritto di voto
giustizia|justicia|dʒuˈstitsia|S|ist|2|Giustizia uguale per tutti.|Justicia igual para todos.|g=f
crimine|crimen|ˈkrime|S|ist|2|Il crimine organizzato colpisce il sud.|El crimen organizado golpea al sur.|g=m;p=crimini
delitto|delito|deˈlitto|S|ist|3|Un delitto passionale, dice la cronaca.|Un delito pasional, dice la crónica.|g=m;p=delitti
ladro|ladrón|ˈladro|S|ist|2|Il ladro è fuggito col motorino.|El ladrón huyó con la moto.|g=m;p=ladri
vittima|víctima|ˈvittima|S|ist|2|Le vittime dell'incidente sono tre.|Las víctimas del accidente son tres.|g=f;p=vittime
testimone|testigo|testiˈmone|S|ist|3|Il testimone ha visto tutto.|El testigo vio todo.|g=m;p=testimoni
residente|residente|resiˈdɛnte|S|ist|3|I residenti del quartiere protestano.|Los residentes del barrio protestan.|g=m;p=residenti
confine|frontera|konˈfine|S|ist|2|Chiudono il confine di notte.|Cierran la frontera de noche.|g=m;p=confini
esercito|ejército|eˈzertʃito|S|ist|3|L'esercito aiuta durante i terremoti.|El ejército ayuda durante los terremotos.|g=m;p=eserciti
pace|paz|ˈpatʃe|S|ist|2|Il Nobel per la pace a un giornalista.|El Nobel de la paz a un periodista.|g=f;a=guerra
guerra|guerra|ˈɡwɛrra|S|ist|2|La guerra finì nel 1945.|La guerra terminó en 1945.|g=f;a=pace;c=fare la guerra
armata|armada / ejército|arˈmata|S|ist|4|L'armata italiana è in missione.|La armada italiana está en misión.|g=f
bomba|bomba|ˈbomba|S|ist|3|Una bomba a orologeria nella trama.|Una bomba de tiempo en la trama.|g=f;p=bombe
strage|masacre|ˈstradʒe|S|ist|4|La strage del 1993 resta irrisolta.|La masacre de 1993 sigue sin resolverse.|g=f
attentato|atentado|attenˈtato|S|ist|4|L'attentato cambiò la storia d'Italia.|El atentado cambió la historia de Italia.|g=m;p=attentati
onore|honor|ˈonore|S|ist|3|L'onore della divisa.|El honor del uniforme.|g=m;c=a cena di gala
libertà|libertad|liberˈta|S|ist|1|La libertà di stampa è sacra.|La libertad de prensa es sagrada.|g=f;n=Invariable
uguaglianza|igualdad|uɡwaʎʎanˈtsa|S|ist|3|L'uguaglianza davanti alla legge.|La igualdad ante la ley.|g=f
diritti umani|derechos humanos|diˈritti uˈmani|L|ist|2|La dichiarazione dei diritti umani.|La declaración de los derechos humanos.
fuga|fuga|ˈfuɡa|S|ist|3|La fuga del boss è finita a Roma.|La fuga del jefe terminó en Roma.|g=f;p=fughe
arresto|arresto / detención|arˈrɛsto|S|ist|3|L'arresto del manager corrotto.|La detención del gerente corrupto.|g=m;p=arresti
indagine|investigación|inˈdadʒe|S|ist|3|L'indagine sulla corruzione prosegue.|La investigación sobre la corrupción sigue.|g=f;p=indagini
corruzione|corrupción|korruˈtsjone|S|ist|3|La corruzione costa miliardi.|La corrupción cuesta miles de millones.|g=f
scandalo|escándalo|ˈskandalo|S|att|2|Lo scandalo dei fondi neri.|El escándalo de los fondos negros.|g=m;p=scandali
mafia|mafia|ˈmafia|S|ist|3|Il film sulla mafia ha vinto a Cannes.|La película sobre la mafia ganó en Cannes.|g=f;n=Invariable

# ══ ambiente ══
energia|energía|enerˈdʒia|S|sci|2|L'energia solare costa meno ormai.|La energía solar cuesta menos ahora.|g=f;n=Invariable
sostenibile|sostenible|sosteˈnibile|A|nat|3|Un turismo lento e sostenibile.|Un turismo lento y sostenible.
riciclare|reciclar|ritʃiˈklare|V|nat|2|Riciclo la plastica ogni settimana.|Reciclo el plástico cada semana.
consumo|consumo|konˈsumo|S|nat|3|Il consumo di carne è calato.|El consumo de carne bajó.|g=m;p=consumi
emergenza climatica|emergencia climática|emerˈdʒentsa kliˈmatika|L|nat|3|L'emergenza climatica non aspetta.|La emergencia climática no espera.
rischio ambientale|riesgo ambiental|ˈriʃʃo ambjenˈtale|L|nat|4|Il rischio ambientale delle centrali.|El riesgo ambiental de las centrales.
protezione|protección|protetˈtsjone|S|nat|3|La protezione degli animali selvatici.|La protección de los animales silvestres.|g=f
estinzione|extinción|estinˈtsjone|S|nat|4|L'estinzione delle api sarebbe catastrofica.|La extinción de las abejas sería catastrófica.|g=f
scioglimento|deshielo|ʃoʎʎiˈmento|S|nat|4|Lo scioglimento dei ghiacciai.|El deshielo de los glaciares.|g=m
raccolto|cosecha|rakˈkɔlto|S|nat|3|Un raccolto abbondante quest'anno.|Una cosecha abundante este año.|g=m;p=raccolti
inondazione|inundación|inondatˈtsjone|S|nat|4|L'inondazione del fiume ha travolto il ponte.|La inundación del río arrastró el puente.|g=f
incendio|incendio|inˈtʃɛndjo|S|nat|3|Gli incendi boschivi d'estate.|Los incendios forestales en verano.|g=m;p=incendi;c=incendio doloso
boschivo|forestal|boˈskivo|A|nat|4|Le zone boschive protette.|Las zonas forestales protegidas.
profondo|profundo|proˈfondo|A|nat|2|Un lago profondo cento metri.|Un lago profundo cien metros.|a=superficiale
superficiale|superficial|superfiˈtʃale|A|nat|3|Una lettura superficiale del testo.|Una lectura superficial del texto.|a=profondo
emergere|emerger|emeˈrdʒere|V|nat|3|La verità emerge lentamente.|La verdad emerge lentamente.|n=Participio: emerso
sommergere|sumergir|somˈmɛrdʒere|V|nat|4|L'acqua sommerge i campi.|El agua sumerge los campos.|n=Participio: sommerso
assorbire|absorber|assoɾˈbire|V|sci|3|Le spugne assorbono l'acqua.|Las esponjas absorben el agua.|n=Io assorbo; participio assorbito

# ══ lavoro avanzato ══
dipartimento|departamento|dipartiˈmento|S|lav|3|Lavoro nel dipartimento marketing.|Trabajo en el departamento de marketing.|g=m;p=dipartimenti
direttore|director|diretˈtore|S|pro|2|Il direttore generale annuncia il piano.|El director general anuncia el plan.|g=m;p=direttori;a=direttrice
cliente|cliente|kliˈɛnte|S|lav|1|Il cliente ha sempre ragione.|El cliente siempre tiene razón.|g=m;p=clienti
vendita|venta|venˈdita|S|lav|2|Le vendite crescono a dicembre.|Las ventas crecen en diciembre.|g=f;p=vendite
venditore|vendedor|vendiˈtore|S|pro|2|Il venditore di frutta al mercato.|El vendedor de fruta en el mercado.|g=m;p=venditori
commercio|comercio|komˈmɛrtʃo|S|lav|2|Il commercio online cresce.|El comercio en línea crece.|g=m;c=commercio equo e solidale
profitto|ganancia (beneficio)|proˈfitto|S|fin|3|Il profitto dell'azienda raddoppia.|La ganancia de la empresa se duplica.|g=m;p=profitti
perdita|pérdida|perˈdita|S|fin|3|Una perdita secca di due milioni.|Una pérdida seca de dos millones.|g=f;p=perdite;a=profitto
fornitore|proveedor|forniˈtore|S|lav|3|Il fornitore consegna il lunedì.|El proveedor entrega los lunes.|g=m;p=fornitori
merce|mercancía|ˈmertʃe|S|lav|4|La merce è arrivata danneggiata.|La mercancía llegó dañada.|g=f;n=Invariable
magazzino|almacén / depósito|maɡatˈtsino|S|lav|3|La merce è in magazzino.|La mercancía está en el almacén.|g=m;p=magazzini
cantiere|obra (de construcción)|kantiˈɛre|S|lav|3|Il cantiere del nuovo ponte.|La obra del nuevo puente.|g=m;p=cantieri
impresa edile|empresa constructora|imˈpreza eˈdile|L|lav|4|L'impresa edile completa il grattacielo.|La constructora completa el rascacielos.
preventivo|presupuesto|preventiˈvo|S|fin|3|Chiedo un preventivo per il bagno.|Pido un presupuesto para el baño.|g=m;p=preventivi
fatturato|facturación|fattuˈrato|S|fin|4|Il fatturato annuo della piccola azienda.|La facturación anual de la pequeña empresa.|g=m
azionario|bursátil|addzjoˈnarjo|A|fin|4|Il mercato azionario chiude in salita.|El mercado bursátil cierra en alza.
assunzione|contratación|asˈsuntsjone|S|lav|3|L'assunzione di nuovo personale.|La contratación de nuevo personal.|g=f
contratto a tempo determinato|contrato a plazo fijo|konˈtratto a ˈtɛmpo determiˈnato|L|lav|4|Lavoro con un contratto a tempo determinato.|Trabajo con un contrato a plazo fijo.
licenziamento|despido|litʃentsjaˈmento|S|lav|3|Il licenziamento collettivo sciocca.|El despido colectivo conmociona.|g=m;p=licenziamenti
dimissioni|renuncia|dimisˈsjoni|S|lav|3|Le dimissioni dell'amministratore.|La renuncia del administrador.|g=f;n=Siempre plural

# ══ universita e ricerca ══
universitario|universitario|univerziˈtarjo|A|stu|3|La vita universitaria mi manca.|La vida universitaria me extraña.
campus|campus|ˈkampus|S|stu|3|Il campus di Bologna è antico.|El campus de Bolonia es antiguo.|g=m;n=Invariable
corso di laurea|carrera universitaria|ˈkorso di ˈlaurea|L|stu|2|Un corso di laurea in ingegneria.|Una carrera de ingeniería.
relazione|informe / relación|relatˈtsjone|S|lav|2|La relazione finale di venti pagine.|El informe final de veinte páginas.|g=f;p=relazioni
seminario|seminario|semiˈnarjo|S|stu|3|Il seminario di dottorato su Dante.|El seminario de doctorado sobre Dante.|g=m;p=seminari
laboratorio|laboratorio|laboraˈtorjo|S|sci|2|Il laboratorio di chimica al piano terra.|El laboratorio de química en el primer piso.|g=m;p=laboratori
dati|datos|ˈdati|S|sci|1|I dati confermano l'ipotesi.|Los datos confirman la hipótesis.|g=m;n=Siempre plural: i dati
risultato|resultado|riˈzultato|S|ast|1|Il risultato dell'esame è ottimo.|El resultado del examen es excelente.|g=m;p=risultati
analisi|análisis|anaˈlizi|S|sci|2|L'analisi del sangue è normale.|El análisis de sangre es normal.|g=f;n=Invariable
scoperta|descubrimiento|skoˈperta|S|sci|3|Una scoperta che cambia la medicina.|Un descubrimiento que cambia la medicina.|g=f;p=scoperte
ricercatore|investigador|ritʃerkaˈtore|S|pro|4|Il ricercatore pubblica lo studio.|El investigador publica el estudio.|g=m;p=ricercatori
campione|muestra (espécimen)|kamˈpjone|S|sci|3|Un campione di acqua del fiume.|Una muestra de agua del río.|g=m;p=campioni;n="Campeón" = campione (altro significato)
misurazione|medición|misuraˈtsjone|S|sci|4|La misurazione della temperatura.|La medición de la temperatura.|g=f;p=misurazioni
esattezza|exactitud|eɡzatˈtsetsa|S|sci|4|L'esattezza dei calcoli è vitale.|La exactitud de los cálculos es vital.|g=f
approssimazione|aproximación|approssimaˈtsjone|S|sci|5|Un calcolo per approssimazione.|Un cálculo por aproximación.|g=f
formula|fórmula|ˈfɔrmula|S|sci|3|La formula dell'acqua: H₂O.|La fórmula del agua: H₂O.|g=f;p=formule
scoprire|descubrir|skoˈprire|V|sci|2|Ho scoperto un ristorante fantastico.|Descubrí un restaurante fantástico.|n=Io scopro; participio scoperto
inventare|inventar|invenˈtare|V|sci|3|Chi ha inventato la radio?|¿Quién inventó la radio?
brevetto|patente (de invención)|brevˈvɛtto|S|sci|4|Un brevetto per il nuovo dispositivo.|Una patente para el nuevo dispositivo.|g=m;p=brevetti
dispositivo|dispositivo|dispoˈzitivo|S|tec|3|Un dispositivo di sicurezza.|Un dispositivo de seguridad.|g=m;p=dispositivi
chimico|químico|ˈkimiko|A|sci|3|Una reazione chimica impressionante.|Una reacción química impresionante.|n=Sustantivo: il chimico = el químico
biologico|biológico / orgánico|bjoˈlɔdʒiko|A|ali|2|Compro solo pasta biologica.|Compro solo pasta orgánica.|n="Orgánico" (alimentos) = biologico
genetica|genética|dʒeˈnetika|S|sci|4|La genetica studia il DNA.|La genética estudia el ADN.|g=f
atomo|átomo|ˈatomo|S|sci|4|L'atomo di idrogeno è il più semplice.|El átomo de hidrógeno es el más simple.|g=m;p=atomi
molecola|molécula|moˈlɛkola|S|sci|4|La molecola dell'ossigeno.|La molécula del oxígeno.|g=f;p=molecole

# ══ sostantivi astratti (parte 1) ══
qualità|calidad|kwaˈlita|S|ast|1|La qualità della vita qui è alta.|La calidad de vida aquí es alta.|g=f;n=Invariable
quantità|cantidad|kwantiˈta|S|ast|2|Una quantità enorme di persone.|Una cantidad enorme de personas.|g=f;n=Invariable
numero|número|ˈnumero|S|ast|1|Il numero di telefono è cambiato.|El número de teléfono cambió.|g=m;p=numeri
cifra|cifra|ˈtʃifra|S|fin|2|Una cifra a sei zeri.|Una cifra de seis ceros.|g=f;p=cifre;n="Gesto" = gesto; la cifra = número/dígito
totale|total|totaˈle|A|ast|2|Il costo totale della ristrutturazione.|El costo total de la remodelación.|n=Sustantivo: il totale
media|promedio|ˈmɛdia|S|sci|3|La media dei voti è otto.|El promedio de notas es ocho.|g=f;p=medie
gruppo|grupo|ˈgruppo|S|ast|1|Un gruppo di turisti giapponesi.|Un grupo de turistas japoneses.|g=m;p=gruppi
classe|clase|ˈklasse|S|stu|2|Una classe di ventiquattro alunni.|Una clase de veinticuatro alumnos.|g=f;p=classi
categoria|categoría|kateˈɡɔria|S|ast|3|Un premio per categoria d'età.|Un premio por categoría de edad.|g=f;p=categorie
tipo|tipo / tipo|ˈtipo|S|ast|1|Che tipo di musica ascolti?|¿Qué tipo de música escuchas?|g=m;p=tipi;n=Muy usado: quel tipo = ese tipo/chico
genere|género|ˈdʒɛnere|S|ast|2|Il genere grammaticale: maschile o femminile.|El género gramatical: masculino o femenino.|g=m;p=generi
varietà|variedad|varieˈta|S|ast|3|Una varietà di opzioni per cena.|Una variedad de opciones para cenar.|g=f;n=Invariable
serie|serie|ˈsɛrie|S|ast|3|Una serie di sfortunati eventi.|Una serie de desafortunados eventos.|g=f;p=serie;n=Invariable
lista|lista|ˈlista|S|ast|1|Faccio la lista della spesa.|Hago la lista del mercado.|g=f;p=liste
catalogo|catálogo|kaˈtaloɡo|S|cmp|3|Il catalogo dei ricambi.|El catálogo de repuestos.|g=m;p=cataloghi
inizio|comienzo|inˈittsjo|S|tmp|1|L'inizio del film è lento.|El comienzo de la película es lento.|a=fine
fine|final|ˈfine|S|tmp|1|La fine della scuola a giugno.|El final de la escuela en junio.|g=f;p=fini;a=inizio
destinazione|destino (destinación)|destinatˈtsjone|S|vig|3|La destinazione finale del volo.|La destinación final del vuelo.|g=f;p=destinazioni
percorso|recorrido|perˈkorso|S|vig|3|Un percorso tra i borghi del Chianti.|Un recorrido entre los pueblos del Chianti.|g=m;p=percorsi
sentiero|sendero|senˈtjɛro|S|nat|3|Un sentiero di montagna impegnativo.|Un sendero de montaña exigente.|g=m;p=sentieri
distanza|distancia|diˈstantsa|S|ast|2|La distanza tra le due città è poca.|La distancia entre las dos ciudades es poca.|g=f;p=distanze
peso|peso|ˈpeso|S|ast|2|Il peso della valigia supera il limite.|El peso de la maleta supera el límite.|g=m
altezza|altura|alˈtettsa|S|ast|3|L'altezza della torre è di 90 metri.|La altura de la torre es de 90 metros.|g=f
cima|cima|ˈtʃima|S|nat|3|La cima del Monte Bianco.|La cima del Monte Bianco.|g=f;p=cime
base|base|ˈbaːze|S|ast|3|La base militare e la base logistica.|La base militar y la base logística.|g=f;p=basi
fondo|fondo|ˈfondo|S|ast|3|Il fondo del mare nasconde relitti.|El fondo del mar esconde naufragios.|g=m;p=fondi;c=in fondo
situazione|situación|situatˈtsjone|S|ast|1|La situazione è sotto controllo.|La situación está bajo control.|g=f;p=situazioni
caso|caso|ˈkazo|S|ast|2|In ogni caso, ti chiamo domani.|En todo caso, te llamo mañana.|g=m;p=casi;c=in caso di
fatto|hecho|ˈfatto|S|ast|1|È un fatto, non un'opinione.|Es un hecho, no una opinión.|g=m;p=fatti;c=dopo il fatto
desiderio|deseo|deziˈderjo|S|emo|2|Il desiderio di viaggiare ancora.|El deseo de viajar otra vez.|g=m;p=desideri
ricordo|recuerdo|riˈkordo|S|emo|1|Un ricordo d'infanzia indimenticabile.|Un recuerdo de infancia inolvidable.|g=m;p=ricordi;c=tenere a mente
memoria|memoria|meˈmɔrja|S|cor|2|Un gioco che allena la memoria.|Un juego que entrena la memoria.|g=f;p=memorie
mente|mente|ˈmente|S|cor|2|A mente fredda si decide meglio.|Con la mente fría se decide mejor.|g=f;p=menti
dubbio|duda|ˈdubbjo|S|ast|2|Non ho dubbi: accetto.|No tengo dudas: acepto.|g=m;p=dubbi;c=senza ombra di dubbio
certezza|certeza|tʃerˈtettsa|S|ast|3|La certezza del risultato finale.|La certeza del resultado final.|g=f;a=incertezza
ansia|ansiedad|anˈsia|S|emo|2|L'ansia prima dell'esame è normale.|La ansiedad antes del examen es normal.|g=f
sicurezza|seguridad|sikutˈrettsa|S|ast|2|La sicurezza in aeroporto è stretta.|La seguridad en el aeropuerto es estricta.|g=f;a=insicurezza
insicurezza|inseguridad|inisikutˈrettsa|S|emo|4|L'insicurezza del mercato del lavoro.|La inseguridad del mercado laboral.|g=f
pessimismo|pesimismo|pessiˈmizmo|S|emo|4|Il pessimismo non aiuta a vivere.|El pesimismo no ayuda a vivir.|g=m;a=ottimismo
ottimismo|optimismo|ottiˈmizmo|S|emo|3|L'ottimismo si può imparare.|El optimismo se puede aprender.|g=m
mente aperta|mente abierta|ˈmente aˈperta|L|emo|3|Affronta il viaggio a mente aperta.|Enfrenta el viaje con la mente abierta.
`, "B1", "k-b1");
