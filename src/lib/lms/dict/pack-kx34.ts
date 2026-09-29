import { parsePack } from "./compact";
import type { VocabWord } from "../types";

/* ── Pack K·X34 · latinismi, aforismi e locuzioni dotte (C2) ──────── */

export const PACK_KX34: VocabWord[] = parsePack(`
# ══ locuzioni latine d'uso ══
ad maiora|a mayores|ad maˈjora|L|ast|5|Laurea con lode: ad maiora!|Graduado con matrícula: ¡a mayores!
alea iacta est|la suerte está echada|aˈlea ˈjacta ˈest|L|ast|5|Dimetto: alea iacta est.|Dimito: la suerte está echada.
a priori|a priori|a priˈɔri|E|ast|4|Non giudicare a priori.|No juzgues a priori.
a posteriori|a posteriori|a posteriˈɔri|E|ast|4|Solo a posteriori capiremo.|Solo a posteriori entenderemos.
ad hoc|ad hoc|ad ˈɔk|E|cnn|4|Un comitato ad hoc per l'emergenza.|Un comité ad hoc para la emergencia.
ad abundantiam|por si acaso (con abundancia)|ad abunˈdantiam|L|cnn|5|Lo dimostra, ad abundantiam, il terzo capitoletto.|Lo demuestra, por si hiciera falta, el tercer capítulo.
ad kalendas graecas|nunca (a las calendas griegas)|ad kaˈlendas ˈɡreːkas|L|cnn|5|Quella riforma arriverà ad kalendas graecas.|Aquel reforma llegará a las calendas griegas.
de iure|de iure|de ˈjuːre|E|ist|5|De iure è legale, de facto no.|De iure es legal, de facto no.
de facto|de facto|de ˈfakto|E|ist|4|Una separazione de facto da anni.|Una separación de facto desde hace años.
de visu|de visu|de ˈvizu|E|ast|5|Il giudice accertò i fatti de visu.|El juez comprobó los hechos de visu.
in itinere|in itinere|in itiˈnere|E|ast|4|Una verifica in itinere del progetto.|Una verificación in itinere del proyecto.
in extremis|in extremis|in ekˈstrɛmis|E|ast|5|Il gol arrivò in extremis.|El gol llegó in extremis.
in vivo|in vivo|in ˈviːvo|E|sci|5|Esperimenti in vivo e in vitro.|Experimentos in vivo e in vitro.
in vitro|in vitro|in ˈvitro|E|sci|5|La fecondazione in vitro.|La fecundación in vitro.
ex novo|de nuevo|eks ˈnɔvo|E|cnn|5|Ricominciare ex novo la trattativa.|Recomenzar de nuevo la negociación.
ex abrupto|de improviso|eks abˈrupto|E|let|5|La notizia è arrivata ex abrupto.|La noticia llegó de improviso.
ex cathedra|ex cathedra (magisterial)|eks katˈtɛdra|E|ast|5|Parlava sempre ex cathedra.|Hablaba siempre ex cathedra.
ex adverso|en contra|eks adˈverso|E|ist|5|Le tesi ex adverso dei due avvocati.|Las tesis contrarias de los dos abogados.
mutatis mutandis|mutatis mutandis|muˈtatis muˈtandis|E|cnn|5|Mutatis mutandis, vale anche per la Spagna.|Mutatis mutandis, vale también para España.
ceteris paribus|ceteris paribus|ˈtʃeteris ˈparibus|E|fin|5|Ceteris paribus, la domanda cresce.|Ceteris paribus, la demanda crece.
stricto sensu|en sentido estricto|ˈstrikkto ˈsɛnsu|E|ast|5|Il termine, stricto sensu, non è corretto.|El término, en sentido estricto, no es correcto.
lato sensu|en sentido amplio|ˈlaːto ˈsɛnsu|E|ast|5|Lato sensu, è un romanzo storico.|En sentido amplio, es una novela histórica.
sensu lato|en sentido amplio|ˈsɛnsu ˈlato|E|ast|5|La narrativa sensu lato.|La narrativa en sentido amplio.
a fortiori|con mayor razón|a fortjˈɔri|E|cnn|5|Se vale per lui, a fortiori vale per me.|Si vale para él, con mayor razón vale para mí.
eppur si muove|y sin embargo se mueve|epˈpur si ˈmwɔve|L|ast|5|Galileo, si dice, sussurrò: eppur si muove.|Galileo, se dice, susurró: y sin embargo se mueve.
labor limae|trabajo de lima|ˈlabor ˈliːme|L|let|5|Il labor limae di dieci anni sul poema.|El trabajo de lima de diez años sobre el poema.
ex libris|ex libris|eks ˈlibris|L|let|5|L'ex libris del bibliofilo.|El ex libris del bibliófilo.
casus belli|casus belli|ˈkazus ˈbɛlli|L|ist|4|Il dazio è diventato il casus belli.|El arancel se ha convertido en el casus belli.
dura lex sed lex|dura lex, sed lex|ˈdura ˈlɛks sed ˈlɛks|L|ist|5|Multa comunque: dura lex sed lex.|Multa igualmente: dura lex, sed lex.
ius soli|ius soli (derecho de suelo)|ˈjus ˈsoli|L|ist|4|Il dibattito sullo ius soli.|El debate sobre el ius soli.
ius sanguinis|ius sanguinis|ˈjus saŋˈɡwinis|L|ist|4|Lo ius sanguinis prevale in Italia.|El ius sanguinis prevalece en Italia.
habeas corpus|habeas corpus|ˈabjas ˈkɔrpus|L|ist|4|Il ricorso in habeas corpus.|El recurso de habeas corpus.
conditio sine qua non|conditio sine qua non|konˈditio ˈsine kwa non|L|cnn|4|Il consenso è conditio sine qua non.|El consenso es conditio sine qua non.
locus communis|lugar común|ˈlɔkus komˈmunis|L|let|5|Un locus communis della retorica scolastica.|Un lugar común de la retórica escolástica.
tertium non datur|tertium non datur (no hay tercer término)|ˈtɛrtium non ˈdatur|L|ast|5|O colpevole o innocente: tertium non datur.|O culpable o inocente: no hay término medio.
ignorantia legis non excusat|la ignorancia de la ley no excusa|iɡnoranˈtitia ˈlɛɡis non ekskuˈzat|L|ist|5|Ignorantia legis non excusat, disse il giudice.|La ignorancia de la ley no excusa, dijo el juez.
primun non nocere → primo, non nocere|primum non nocere (lo primero, no dañar)|ˈprimo non noˈtʃere|L|sla|5|Il giuramento: primo, non nocere.|El juramento: lo primero, no dañar.
pro bono|pro bono (gratuito)|pro ˈbɔno|E|ist|5|L'avvocato ha preso il caso pro bono.|El abogado ha tomado el caso pro bono.
pro capite|per cápita|pro ˈkapite|E|fin|4|Il reddito pro capite italiano.|La renta per cápita italiana.
pro rata|pro rata|pro ˈraːta|E|fin|5|Il rimborso avviene pro rata temporis.|El reembolso ocurre pro rata temporis.
pro tempore|pro tempore|pro ˈtɛmpore|E|ist|5|Il coordinatore pro tempore.|El coordinador pro tempore.
una tantum|una tantum (una sola vez)|una tanˈtum|E|fin|5|Un bonus una tantum di 200 euro.|Un bono una tantum de 200 euros.
ad interim|ad interim|ad ˈinterim|E|ist|5|Il direttore ad interim della scuola.|El director ad interim de la escuela.
ad honorem|ad honorem|ad onoˈrem|E|ast|5|La laurea ad honorem a Eco.|El doctorado honorífico a Eco.
honoris causa|honoris causa|onoˈris ˈkauza|L|stu|4|Dottore honoris causa in lettere.|Doctor honoris causa en letras.
in primis|en primer lugar|in ˈpriːmis|E|cnn|4|In primis, ringrazio la commissione.|En primer lugar, agradezco a la comisión.
inter alia|entre otras cosas|inˈter ˈalia|E|cnn|5|Il trattato prevede, inter alia, la cooperazione.|El tratado prevé, entre otras cosas, la cooperación.
inter nos|entre nosotros|inˈter ˈnɔs|E|cmu|5|Resti inter nos, mi raccomando.|Quede entre nosotros, por favor.
sua sponte|por propia iniciativa|ˈsua ˈsponte|E|ist|5|Il giudice, sua sponte, ha ordinato la perizia.|El juez, por propia iniciativa, ha ordenado la pericia.
de gustibus|de gustibus (sobre gustos)|de ˈɡustibus|L|cnn|5|De gustibus non est disputandum.|Sobre gustos no hay nada escrito.
vulgo|en el vulgo|ˈvulɡo|E|let|5|Il personaggio, vulgo «il Rosso».|El personaje, vulgo «el Rossi».
sic et simpliciter|sí y sencillamente|sik et semplitʃˈtʃiter|L|cnn|5|È una truffa, sic et simpliciter.|Es un fraude, sí y sencillamente.
sic stantibus rebus|así estando las cosas|sik ˈstantibus ˈrebus|L|ist|5|Sic stantibus rebus, l'accordo va rinegoziato.|Estando así las cosas, el acuerdo debe renegociarse.
pacta sunt servanda|pacta sunt servanda|ˈpakta sunt serˈvanda|L|ist|5|Il principio pacta sunt servanda regola i trattati.|El principio pacta sunt servanda rige los tratados.
persona non grata|persona non grata|perˈsona non ˈɡrata|L|ist|4|Il diplomatico è dichiarato persona non grata.|El diplomático es declarado persona non grata.
cui prodest|a quién aprovecha|kuj proˈdest|L|ist|5|Cui prodest? Si chiedeva il magistrato.|¿A quién aprovecha? Se preguntaba el magistrado.
onus probandi|onus probandi (carga de la prueba)|ˈɔnus proˈbandi|L|ist|5|L'onus probandi spetta all'accusa.|La carga de la prueba corresponde a la acusación.
in dubbio pro reo|in dubio pro reo|in ˈdubbjo pro ˈrɛːo|L|ist|5|Il principio in dubbio pro reo tutela l'imputato.|El principio in dubio pro reo protege al acusado.
lex specialis|ley especial|leks spe tʃaˈlis|L|ist|5|La lex specialis deroga la generale.|La ley especial deroga la general.
ipso facto|ipso facto|ˈipso ˈfakto|E|cnn|4|Colpa accertata: ipso facto, la garanzia decade.|Culpa acreditada: ipso facto, la garantía caduca.
ipso iure|ipso iure|ˈipso ˈjuːre|E|ist|5|Il contratto si risolve ipso iure.|El contrato se resuelve ipso iure.
opinio iuris|opinio iuris|oˈpinjo ˈjuris|L|ist|5|La consuetudine richiede l'opinio iuris.|La costumbre requiere la opinio iuris.
ad cautelam|por cautela|ad kauteˈlam|E|ist|5|Una clausola ad cautelam.|Una cláusula por cautela.
in solido|in solido (solidariamente)|in ˈsɔlido|E|ist|5|I soci rispondono in solido.|Los socios responden solidariamente.
prima facie|prima facie (a primera vista)|ˈprima faˈkiːe|E|ist|5|Una prova valida prima facie.|Una prueba válida a primera vista.
res judicata|res judicata|res judiˈkaːta|L|ist|5|Il giudicato: res judicata pro veritate habetur.|La cosa juzgada se tiene por verdad.
res nullius|res nullius|res ˈnul lius|L|ist|5|Il tesoro è res nullius secondo l'accusa.|El tesoro es res nullius según la acusación.
ubi maior minor cessat|donde manda el mayor, manda el menor|ubi maˈjor ˈminor tʃesˈsat|L|ast|5|Ubi maior minor cessat: tacetti i soci.|Donde manda el mayor, manda el menor: callaos los socios.
verba volant, scripta manent|las palabras vuelan, los escritos quedan|ˈverba voˈlant ˈskripta ˈmanent|L|cmu|4|Mettilo per iscritto: verba volant, scripta manent.|Ponlo por escrito: las palabras vuelan.
vide|vid. (véase)|ˈviːde|E|let|5|Vide nota 12 a pag. 45.|Véase nota 12 en pág. 45.
ibidem|ibíd.|iˈbident|E|let|5|Ibidem, pp. 33-35.|Ibíd., pp. 33-35.
opere citato|op. cit.|oˈpere tʃiˈtaːto|E|let|5|Eco, op. cit., cap. 2.|Eco, op. cit., cap. 2.
locus citato|loc. cit.|ˈlɔkus tʃiˈtaːto|E|let|5|Gadda, loc. cit.|Gadda, loc. cit.
supra|supra (arriba)|ˈsupra|E|let|5|Come detto supra al capitolo primo.|Como dicho supra en el capítulo primero.
infra|infra (abajo)|ˈinfra|E|let|5|Vedi infra, paragrafo 4.|Véase infra, párrafo 4.
sic|sic (así)|sik|E|let|4|Scrive «sic» a margine: errore segnato.|Escribe «sic» al margen: error señalado.
passim|passim (a menudo)|pasˈsim|E|let|5|Il tema ricorre passim nel saggio.|El tema recorre passim por el ensayo.
et alii|et al.|et aˈliːi|E|let|5|Rossi, Bianchi et alii, 2019.|Rossi, Bianchi et al., 2019.
et cetera|etcétera|et ˈtʃetera|E|cmu|3|Firme, bolli et cetera.|Firmas, sellos etcétera.
# ══ aforismi e sentenze ══
carpe diem|carpe diem|ˈkarpe ˈdiːem|L|ast|4|Il carpe diem oraziano diventa hashtag.|El carpe diem horaciano se vuelve hashtag.
memento mori|memento mori|meˈmento ˈmoːri|L|ast|5|Il memento mori nelle vanitas fiamminghe.|El memento mori en las vanitas flamencas.
memento audere semper|memento audere semper|meˈmento auˈdere ˈsemper|L|ast|5|D'Annunzio: memento audere semper.|D'Annunzio: acuérdate de atreverte siempre.
ars longa, vita brevis|ars longa, vita brevis|ars ˈlɔŋɡa ˈvita ˈbrɛvis|L|ast|5|Ars longa, vita brevis: la medicina insegna.|El arte es largo, la vida breve.
ignis fatuus|fuego fatuo|ˈiɲɲis ˈfatuus|L|nat|5|Un ignis fatuus nella palude.|Un fuego fatuo en la ciénaga.
non plus ultra|non plus ultra|non plus ˈultra|E|ast|5|Il non plus ultra della lirica.|El non plus ultra de la lírica.
goliardia|goliardía (estudiante)|ɡoljarˈdia|S|stu|4|Scherzi di goliardia alla laurea.|Bromas de goliardía en la graduación.|g=f
goliardico|goliárdico|ɡoljarˈdiko|A|stu|5|Versi goliardici in aula magna.|Versos goliárdicos en el aula magna.
aurea mediocritas|aurea mediocritas|ˈawrea medioˈkritas|L|ast|5|Orazio e l'aurea mediocritas.|Horacio y la áurea mediocridad.
beati monoculi in terra caecorum|dichosos los tuertos en tierra de ciegos|beˈati moˈnɔkuli in ˈtɛrra tʃeˈkɔrum|L|cnn|5|Beati monoculi in terra caecorum, sospirò.|Dichosos los tuertos en tierra de ciegos, suspiró.
nomen omen|nomen omen|ˈnomen ˈomen|L|ast|5|Si chiama Vittorio: nomen omen.|Se llama Vittorio: el nombre es un presagio.
parturient montes|parturient montes (parirán los montes)|partuˈrient ˈmontes|L|cnn|5|Parturient montes, nascentr ridiculus mus.|Parirán los montes y nacerá un ridículo ratón.
sic transit gloria mundi|así pasa la gloria del mundo|sik ˈtransit ˈɡlɔria ˈmundi|L|ast|5|Sic transit gloria mundi, pensò l'ex campione.|Así pasa la gloria del mundo, pensó el ex campeón.
tempus fugit|tempus fugit|ˈtɛmpus ˈfuɡit|L|tmp|4|Tempus fugit: la scadenza si avvicina.|Tempus fugit: el plazo se acerca.
timeo danaos et dona ferentes|temo a los dánaos incluso si traen regalos|tiˈmeːo daˈnaos et ˈdona feˈrentes|L|ast|5|Timeo danaos et dona ferentes, citò il vecchio prof.|Temo a los dánaos aunque traigan dones, citó el viejo profesor.
vanitas vanitatum|vanidad de vanidades|ˈvanitas vanitaˈtum|L|ast|5|Vanitas vanitatum: tutto è vano.|Vanidad de vanidades: todo es vano.
gaudeamus igitur|gaudeamus igitur|ɡawdeˈamus iˈɡitur|L|stu|5|Il coro intona il gaudeamus igitur.|El coro entona el gaudeamus igitur.
dulcis in fundo|dulcis in fundo (lo mejor al final)|dulˈtʃis in ˈfundo|E|cmu|4|E dulcis in fundo: la notizia della promozione.|Y dulcis in fundo: la noticia del ascenso.
`, "C2", "k-x34");
