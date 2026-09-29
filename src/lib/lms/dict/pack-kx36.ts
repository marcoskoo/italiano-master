import { parsePack } from "./compact";
import type { VocabWord } from "../types";

/* ── Pack K·X36 · giornalismo, media e comunicazione (C1) ──────────── */

export const PACK_KX36: VocabWord[] = parsePack(`
# ══ giornalismo ══
vicedirettore|subdirector|vitʃedireˈttore|S|pro|5|Il vicedirettore segue l'estero.|El subdirector sigue el exterior.|g=m;p=vicedirettori
caporedattore|redactor jefe|kaporedatˈtore|S|pro|5|Il caporedattore chiude le pagine.|El redactor jefe cierra las páginas.|g=m;p=caporedattori
redattrice|redactora|redatˈtritʃe|S|pro|5|La redattrice culturale del Sole.|La redactora cultural del Sole.|g=f;p=redattrici
giornalaio|periodista (vendedor)|dʒornaˈlaːjo|S|cmp|4|Il giornalaio all'angolo apre alle 6.|El quiosquero de la esquina abre a las 6.|g=m;p=giornalai
copertina|portada|koperˈtina|S|att|3|La copertina con il papa.|La portada con el papa.|g=f;p=copertine
inserto|suplemento|inˈsɛrto|S|att|4|L'inserto culturale del domenicale.|El suplemento cultural del dominical.|g=m;p=inserti
domenicale|dominical|domeˈnikale|S|att|5|Il domenicale del Sole 24 Ore.|El dominical del Sole 24 Ore.|g=m;p=domenicali
servizio fotografico|reportaje fotográfico|serˈvitsio fotoɡraˈfiko|L|att|4|Il servizio fotografico del matrimonio.|El reportaje fotográfico de la boda.
fotoreporter|fotógrafo de prensa|fotoreˈpɔrter|S|pro|5|Il fotoreporter in zona di guerra.|El fotógrafo de prensa en zona de guerra.|g=m;p=fotoreporter
fotografo di scena|fotógrafo de rodaje|foˈtoɡrafo di ˈʃʃena|L|cin|5|Il fotografo di scena sul set.|El fotógrafo de rodaje en el plató.
colore (giornalistico)|color (periodístico)|koˈlore dʒornaliˈstiko|L|att|5|Il colore locale nel pezzo.|El color local en la crónica.
pezzo di fondo|artículo de fondo|ˈpɛttsо di ˈfondo|L|att|5|Il pezzo di fondo del direttore.|El artículo de fondo del director.
articolo di fondo|editorial (artículo)|artiˈkolo di ˈfondo|L|att|4|L'articolo di fondo apre la pagina politica.|El artículo de fondo abre la página política.
cronista giudiziaria|cronista judicial|kroˈnista dʒuditˈtsjarja|L|att|5|La cronista giudiziaria segue la maxi-truffa.|La cronista judicial sigue la megaestafa.
corrispondenza|corresponsalía|korrisponˈdentsa|S|att|4|La corrispondenza da Parigi.|La corresponsalía desde París.|g=f;p=corrispondenze
corrispondente di guerra|corresponsal de guerra|korrisponˈdɛnte di ˈɡwerra|L|att|4|Il corrispondente di guerra racconta il fronte.|El corresponsal de guerra relata el frente.
inviato speciale|enviado especial|inˈvjato spetʃˈʃale|L|att|4|L'inviato speciale in Ucraina.|El enviado especial en Ucrania.
firmato|firmado|firˈmato|A|att|5|Un pezzo firmato dalla direttrice.|Una pieza firmada por la directora.
senza firma|sin firma|ˈsenza ˈfirma|L|att|5|Le notizie senza firma sono di agenzia.|Las noticias sin firma son de agencia.
agenzia di stampa|agencia de prensa|aˈdʒentsa di ˈstampa|L|att|4|La notizia è arrivata dalle agenzie di stampa.|La noticia ha llegado de las agencias de prensa.
agenzia (stampa)|agencia|aˈdʒentsa|S|att|3|L'agenzia Ansa ha diffuso il comunicato.|La agencia Ansa ha difundido el comunicado.|g=f;p=agenzie
comunicato stampa|comunicado de prensa|komuniˈkato ˈstampa|L|att|4|Il comunicato stampa del Quirinale.|El comunicado de prensa del Quirinal.
nota di transenna|nota urgente de última hora|ˈnоta di transenˈna|L|att|5|Una nota di transenna interrompe i programmi.|Una nota urgente interrumpe los programas.
ultima ora|última hora|ˈultima ˈɔːra|L|att|3|Le notizie di ultima ora sul terremoto.|Las noticias de última hora sobre el terremoto.
notizia flash|noticia flash|noˈtitsia flaʃ|L|att|4|Un flash interrompe la partita.|Un flash interrumpe el partido.
diretta|directo|diˈretta|S|att|3|La diretta streaming del consiglio.|El directo streaming del consejo.|g=f;p=dirette
in diretta|en directo|in diˈretta|E|att|3|Il tg apre in diretta dal luogo del delitto.|El telediario abre en directo desde el lugar del crimen.
in differita|en diferido|in diffeˈrita|E|att|5|La partita va in differita.|El partido va en diferido.
ascolti|audiencia|aˈskolti|S|att|4|Gli ascolti del nuovo programma.|La audiencia del nuevo programa.|g=m
audience|audiencia|ˈawdjens|S|att|4|L'auditel misura l'audience.|El auditel mide la audiencia.|g=f;n=Anglicismo
palinsesto|parrilla (programación)|paˈlinsɛsto|S|att|5|Il palinsesto autunnale della Rai.|La parrilla otoñal de la Rai.|g=m;p=palinsesti
rete televisiva|cadena de televisión|ˈrɛte televiˈziva|L|att|4|Le reti televisive competono per lo share.|Las cadenas televisivas compiten por la cuota.
emittente|emisora|emitˈtɛnte|S|att|4|Un'emittente locale lombarda.|Una emisora local lombarda.|g=f;p=emittenti
frequenza|frecuencia|frekˈkwentsa|S|tec|4|La frequenza della radio privata.|La frecuencia de la radio privada.|g=f;p=frequenze
interferenza|interferencia|interfeˈrentsa|S|tec|5|Le interferenze sul segnale.|Las interferencias en la señal.|g=f;p=interferenze
sigla|sintonía|ˈsiɡla|S|mus|4|La sigla del telegiornale.|La sintonía del telegiario.|g=f;p=sigle
titolo di coda|créditos finales|ˈtitolo di ˈkɔda|L|cin|5|Il titolo di coda scorre sul finale.|Los créditos finales corren sobre el final.
claque|claque|ˈklak|S|cin|5|La claque applaude a comando.|La claque aplaude a la orden.|g=f
diritto di replica|derecho de réplica|diˈritto di reˈplika|L|att|5|Il ministro ha chiesto il diritto di replica.|El ministro ha pedido el derecho de réplica.
informazione|información|informaˈtsjone|S|att|3|Il diritto all'informazione.|El derecho a la información.|g=f;p=informazioni
disinformazione|desinformación|disinformaˈtsjone|S|att|5|La disinformazione sui social.|La desinformación en las redes.|g=f
post-verità|posverdad|postveriˈta|S|att|5|L'era della post-verità.|La era de la posverdad.|g=f
bufala|bulo|buˈfaːla|S|att|4|Quella notizia era una bufala.|Aquella noticia era un bulo.|g=f;p=bufale;r=col
fact-checking|verificación de datos|fakt ˈtʃɛkiŋ|S|att|4|Il fact-checking dei discorsi.|La verificación de datos de los discursos.|g=m;n=Anglicismo
fact checker|verificador|fakt ˈtʃɛker|S|att|5|Il fact checker smonta la bufala.|El verificador desmonta el bulo.|g=m;n=Anglicismo
deep fake|video falso|dip ˈfeik|S|tec|5|Un deep fake del presidente.|Un deep fake del presidente.|g=m;n=Anglicismo
fonte anonima|fuente anónima|ˈfɔnte anoˈnima|L|att|4|La fonte anonima conferma lo scoop.|La fuente anónima confirma la primicia.
fonte riservata|fuente reservada|ˈfɔnte riserˈvata|L|att|5|Da fonte riservata si apprende che…|De fuente reservada se sabe que…|r=for
gola profonda|garganta profunda|ˈɡola profonˈda|L|att|5|Il whistleblower è la nuova gola profonda.|El alertador es la nueva garganta profunda.
whistleblower|alertador|ˈwislblauer|S|ist|4|Il whistleblower dell'agenzia.|El alertador de la agencia.|g=m;n=Anglicismo
diritto di cronaca|derecho de crónica|diˈritto di ˈkronaka|L|att|5|Il diritto di cronaca tutela il giornalista.|El derecho de crónica protege al periodista.
segreto professionale|secreto profesional|seˈgreto profesjoˈnale|L|ist|4|Il giornalista invoca il segreto professionale.|El periodista invoca el secreto profesional.
legge sulla privacy|ley de privacidad|ˈledʒe sulla ˈprajvasi|L|ist|5|La legge sulla privacy blocca la pubblicazione.|La ley de privacidad bloquea la publicación.
diritto all'oblio|derecho al olvido|diˈritto allobˈlio|L|ist|5|Il diritto all'oblio in rete.|El derecho al olvido en la red.
libertà di stampa|libertad de prensa|liberˈta di ˈstampa|L|ist|4|La libertà di stampa in calo nel mondo.|La libertad de prensa a la baja en el mundo.
censura|censura|tʃenˈsuːra|S|ist|4|La censura sui giornali di regime.|La censura en los periódicos del régimen.|g=f;p=censure
propaganda|propaganda|propaˈɡanda|S|ist|4|La propaganda di stato.|La propaganda de estado.|g=f
strumentalizzazione|instrumentalización|strumentalizzaˈtsjone|S|att|5|La strumentalizzazione politica della tragedia.|La instrumentalización política de la tragedia.|g=f
depistaggio|pista falsa (despiste)|depiˈstaddʒo|S|att|5|Il depistaggio organizzato dai servizi.|El despiste organizado por los servicios.|g=m;p=depistaggi
dietrologia|conspiranoia|dietroloˈdʒia|S|att|5|La dietrologia all'italiana.|La conspiranoia a la italiana.|g=f;r=col
copertura|cobertura|koperˈtura|S|att|4|La copertura mediatica dell'evento.|La cobertura mediática del evento.|g=f;p=coperture
copertura mediatica|cobertura mediática|koperˈtura mediˈatika|L|att|4|Una copertura mediatica ossessiva.|Una cobertura mediática obsesiva.
aula parlamentare|hemiciclo|ˈaːula parlaˈmentare|L|ist|4|L'aula parlamentare vota la fiducia.|El hemiciclo vota la cuestión de confianza.
questione di fiducia|cuestión de confianza|kwestˈsjone di fiˈduːtʃa|L|ist|4|Il governo cade sulla questione di fiducia.|El gobierno cae en la cuestión de confianza.
mozione di sfiducia|moción de censura|moˈtsjone di sfiˈduːtʃa|L|ist|4|Presentata la mozione di sfiducia.|Presentada la moción de censura.
voto di fiducia|voto de confianza|ˈvoto di fiˈduːtʃa|L|ist|4|Il voto di fiducia passa con 5 voti.|El voto de confianza pasa con 5 votos.
emendamento|enmienda|emendaˈmento|S|ist|4|L'emendamento alla legge di bilancio.|La enmienda a la ley de presupuestos.|g=m;p=emendamenti
sottoemendamento|subenmienda|sottoemendaˈmento|S|ist|5|Un sottoemendamento all'emendamento.|Una subenmienda a la enmienda.|g=m;p=sottoemendamenti
comma|apartado|ˈkɔmma|S|ist|4|Il comma 9 della norma tributaria.|El apartado 9 de la norma tributaria.|g=m;p=commi
legge di bilancio|ley de presupuestos|ˈledʒe di biˈlantʃo|L|ist|4|La legge di bilancio passa in extremis.|La ley de presupuestos pasa in extremis.
manovra economica|manida económica|maˈnɔvra ekoˈnomika|L|fin|4|Una manovra economica da 30 miliardi.|Una manida económica de 30 mil millones.
decreto legislativo|decreto legislativo|deˈkreto ledʒiˈslativo|L|ist|5|Il decreto legislativo sulla privacy.|El decreto legislativo sobre privacidad.
legge delega|ley de delegación|ˈledʒe deˈleːɡa|L|ist|5|La legge delega sul Jobs Act.|La ley de delegación sobre el Jobs Act.
legge di stabilità|ley de estabilidad|ˈledʒe di stabiliˈta|L|fin|5|La vecchia legge di stabilità.|La vieja ley de estabilidad.
finanziamento pubblico|financiación pública|finantsjaˈmento ˈpubbliko|L|ist|4|Il finanziamento pubblico ai partiti.|La financiación pública a los partidos.
rimborso elettorale|reembolso electoral|rimˈborso elettoˈrale|L|ist|5|Il rimborso elettorale ai partiti.|El reembolso electoral a los partidos.
fondi neri|fondos negros|ˈfondi ˈnɛːri|L|ist|4|L'inchiesta sui fondi neri.|La investigación sobre los fondos negros.
maxi-multa|maximulta|ˈmaksi ˈmulta|L|ist|4|Una maxi-multa alle Big Tech.|Una maximulta a las Big Tech.
`, "C1", "k-x36");
