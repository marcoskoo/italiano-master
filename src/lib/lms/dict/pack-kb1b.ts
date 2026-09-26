import { parsePack } from "./compact";
import type { VocabWord } from "../types";

/* ── Pack K·B1-b · conectores, adjetivos, medios y vida cultural (MCER B1) ── */

export const PACK_KB1B: VocabWord[] = parsePack(`
# ══ aggettivi B1 ══
valido|válido|ˈvalido|A|ast|2|Un passaporto valido per dieci anni.|Un pasaporte válido por diez años.|a=non valido
esatto|exacto|eˈzatto|A|sci|2|L'ora esatta dell'arrivo.|La hora exacta de la llegada.|a=approssimativo;n=Esatto! = ¡exacto! al confirmar
preciso|preciso|preˈtʃizo|A|sci|2|Un orologio svizzero precisissimo.|Un reloj suizo precisísimo.|a=impreciso
completo|completo|komˈplɛto|A|ast|2|Il menu completo costa trenta euro.|El menú completo cuesta treinta euros.|a=incompleto;n=Al telefono: "il numero è completo" = no disponible
parziale|parcial|parˈtsjale|A|ast|3|Una risposta solo parziale.|Una respuesta solo parcial.|a=totale
assoluto|absoluto|assoˈluto|A|ast|3|Il silenzio assoluto della montagna.|El silencio absoluto de la montaña.
relativo|relativo|relaˈtivo|A|ast|3|Un problema relativo al riscaldamento.|Un problema relativo a la calefacción.
particolare|particular|partikoˈlare|A|ast|2|Niente di particolare, la solita vita.|Nada en particular, la vida de siempre.|n=Sustantivo: un particolare = un detalle
specifico|específico|speˈtʃifiko|A|sci|3|Istruzioni specifiche per il modello.|Instrucciones específicas para el modelo.
generico|genérico|dʒeˈneriko|A|ast|4|Una risposta generica non basta.|Una respuesta genérica no basta.
normale|normal|norˈmale|A|ast|1|È normale sbagliare all'inizio.|Es normal equivocarse al inicio.|a=anormale
naturale|natural|natuˈrale|A|nat|1|Un paesaggio naturale protetto.|Un paisaje natural protegido.|a=artificiale
spontaneo|espontáneo|spontaˈneo|A|emo|3|Una reazione spontanea e sincera.|Una reacción espontánea y sincera.
familiare|familiar|famiˈljare|A|rel|2|Un volto familiare tra la folla.|Un rostro familiar entre la multitud.|n=Familiare = familiar/conocido; "familiar" = relative: i familiari
noto|conocido|ˈnoto|A|att|3|Un noto scrittore italiano.|Un conocido escritor italiano.|a=sconosciuto;c=a me noto
sconosciuto|desconocido|skonoˈʃʃuto|A|att|3|Un numero sconosciuto mi chiama.|Un número desconocido me llama.|a=noto
chiaro|claro|ˈkjaro|A|ast|1|Il cielo è chiaro stamattina.|El cielo está claro esta mañana.|a=scuro;n=Chiaro también = evidente: è chiaro?
scuro|oscuro|ˈskuro|A|ast|2|Un film molto scuro e intenso.|Una película muy oscura e intensa.|a=chiaro
confuso|confuso|konˈfuzo|A|ast|3|Risposte confuse e contraddittorie.|Respuestas confusas y contradictorias.
diretto|directo|diˈretto|A|ast|2|Un volo diretto per Palermo.|Un vuelo directo a Palermo.|a=indiretto
semplice|simple|ˈʃɛmplitʃe|A|ast|1|Una ricetta semplice e veloce.|Una receta simple y rápida.|a=complicato
complicato|complicado|kompliˈkato|A|ast|2|Il contratto è complicato.|El contrato es complicado.|a=semplice
complesso|complejo|komˈplɛsso|A|ast|3|Un problema complesso, senza soluzione facile.|Un problema complejo, sin solución fácil.
breve|breve|ˈbreve|A|tmp|1|Una pausa breve tra le lezioni.|Una pausa breve entre las clases.
rapido|rápido|ˈrapido|A|ast|2|Un rapido sguardo allo specchio.|Una rápida mirada al espejo.|s=veloce
costante|constante|koˈstante|A|sci|3|Un impegno costante paga sempre.|Un esfuerzo constante siempre paga.
continuo|continuo|konˈtinwo|A|tmp|3|Il rumore continuo del traffico.|El ruido continuo del tráfico.
frequente|frecuente|frekˈkwente|A|tmp|2|Le mie visite sono sempre più frequenti.|Mis visitas son cada vez más frecuentes.
successivo|siguiente|suttʃeˈssivo|A|tmp|3|La fermata successiva è la nostra.|La siguiente parada es la nuestra.|a=precedente
precedente|anterior|pretʃeˈdɛnte|A|tmp|3|Come da precedente accordo.|Como por acuerdo anterior.|a=successivo
attuale|actual|attuˈale|A|att|2|La situazione attuale del mercato.|La situación actual del mercado.|n=¡Ojo! attuale = actual; "attuale" ES = reale/effettivo
attento|atento|atˈtɛnto|A|emo|2|Sii attento alle indicazioni.|Sé atento a las indicaciones.|c=attenzione;a=distratto
distratto|distraído|diˈstratto|A|emo|3|Scusa, ero distratto.|Perdón, estaba distraído.|a=attento
serio|serio|ˈsɛrjo|A|emo|1|È una persona seria e affidabile.|Es una persona seria y confiable.|a=scherzoso
fedele|fiel|feˈdele|A|rel|3|Un amico fedele per tutta la vita.|Un amigo fiel para toda la vida.|a=infedele
indipendente|independiente|indepenˈdɛnte|A|ast|2|Un giornale indipendente è raro.|Un diario independiente es raro.|a=dipendente
impegnato|ocupado / comprometido|impeɲˈɲato|A|lav|2|Il direttore è impegnato in riunione.|El director está ocupado en reunión.
adatto|adecuado|aˈdatto|A|ast|2|Questa scarpa non è adatta alla pioggia.|Este zapato no es adecuado para la lluvia.|c=adatto a
opportuno|oportuno|oppoˈtuno|A|ast|4|Un momento opportuno per parlare.|Un momento oportuno para hablar.
efficace|eficaz|effiˈkatʃe|A|sci|3|Un rimedio efficace contro il raffreddore.|Un remedio eficaz contra el resfriado.
efficiente|eficiente|effiˈtʃjente|A|lav|3|Un servizio pubblico efficiente.|Un servicio público eficiente.
opportunità|oportunidad|opportuˈnita|S|ast|2|Un'opportunità da non perdere.|Una oportunidad para no perder.|g=f;n=Invariable

# ══ connettivi e avverbi B1 ══
comunque|de todos modos|koˈmunkwe|D|cnn|1|Comunque, ti ringrazio del pensiero.|De todos modos, te agradezco el gesto.|c=comunque vada
piuttosto|bastante / más bien|pjuˈtɔsto|D|ast|1|È piuttosto costoso, direi.|Es bastante caro, diría.|n=Piùttosto che = en vez de; piuttosto = bastante/más bien
perciò|por eso|perˈtʃɔ|D|cnn|2|Piove, perciò resto a casa.|Llueve, por eso me quedo en casa.
per cui|por lo cual|per ˈkwi|L|cnn|3|Era tardi, per cui prendemmo un taxi.|Era tarde, por lo cual tomamos un taxi.
visto che|dado que|ˈvisto ke|L|cnn|2|Visto che piove, rimandiamo a domani.|Dado que llueve, lo aplazamos para mañana.
dato che|ya que|ˈdato ke|L|cnn|2|Dato che sei qui, aiutami.|Ya que estás aquí, ayúdame.
anche se|aunque|ˈanke se|L|cnn|1|Esco anche se piove.|Salgo aunque llueva.
malgrado|a pesar de|malˈɡrado|P|cnn|3|Malgrado lo sforzo, non è bastato.|A pesar del esfuerzo, no fue suficiente.
finché|hasta que|finˈke|C|cnn|3|Aspetta finché non torno.|Espera hasta que vuelva.|n=Finché non = hasta que (¡con non!)
almeno|al menos|alˈmeno|D|ast|1|Almeno hai provato.|Al menos lo intentaste.
perfino|incluso|perˈfino|D|ast|3|Perfino il capo ha ballato.|Incluso el jefe bailó.
addirittura|hasta / nada menos|addirittura|D|ast|3|Addirittura tre ore di ritardo!|¡Nada menos que tres horas de retraso!
circa|aproximadamente|ˈtʃirka|D|sci|2|Arrivo fra circa dieci minuti.|Llego en aproximadamente diez minutos.|n=Se pospone: dieci euro circa
ovunque|dondequiera|oˈvunkwe|D|ast|4|Ovunque vada, trovo coda.|Dondequiera que vaya, encuentro cola.
eventualmente|si acaso / eventualmente|eventualˈmente|D|cnn|3|Eventualmente possiamo spostare l'appuntamento.|Si acaso podemos mover la cita.|ff=1;n=¡Falso amigo! eventualmente = posiblemente/si acaso; no "transitoriamente"
attualmente|actualmente|attualˈmente|D|tmp|3|Attualmente vivo a Torino.|Actualmente vivo en Turín.
sicuramente|seguramente|sikuraˈmente|D|ast|2|Sicuramente arriverà tardi.|Seguramente llegará tarde.
certamente|ciertamente|tʃertamenˈte|D|ast|2|Certamente, hai ragione tu.|Ciertamente, tienes razón tú.
probabilmente|probablemente|probabilˈmente|D|ast|1|Probabilmente nevica in montagna.|Probablemente nieva en la montaña.
definitivamente|definitivamente|definitivaˈmente|D|tmp|3|Mi sono trasferito definitivamente.|Me mudé definitivamente.
allora|entonces|alˈlora|D|cnn|1|Allora, che facciamo?|Entonces, ¿qué hacemos?|n=También relleno conversacional: allora…
in effetti|en efecto|in efˈfetti|L|cnn|2|In effetti, non ci avevo pensato.|En efecto, no lo había pensado.
in realtà|en realidad|in reaˈlita|L|cnn|2|In realtà preferirei restare.|En realidad preferiría quedarme.
a proposito|por cierto|a propoˈzito|L|cnn|2|A proposito, hai sentito di Marco?|Por cierto, ¿te enteraste de Marco?
per esempio|por ejemplo|per esemˈpjo|L|cnn|1|Sport, per esempio il calcio.|Deportes, por ejemplo el fútbol.
in parte|en parte|in ˈparte|L|ast|2|Hai ragione, almeno in parte.|Tienes razón, al menos en parte.
in generale|en general|in dʒeneˈrale|L|ast|2|In generale, mangio poco la sera.|En general, como poco en la noche.
in particolare|en particular|in partiˈkolare|L|ast|2|Mi interessa, in particolare, la storia.|Me interesa, en particular, la historia.
d'altra parte|por otro lado|daltra ˈparte|L|cnn|3|D'altra parte, non hai alternative.|Por otro lado, no tienes alternativas.
nel frattempo|mientras tanto|nel fratˈtempo|L|tmp|2|Nel frattempo, preparo il caffè.|Mientras tanto, preparo el café.
intanto|mientras / entretanto|inˈtanto|D|tmp|2|Intanto cominciate senza di me.|Mientras, empiecen sin mí.

# ══ media e comunicazione ══
servizio|reportaje / servicio|serˈvitsjo|S|cmu|2|Un servizio sul turismo in Perú.|Un reportaje sobre el turismo en Perú.|g=m;p=servizi
trasmissione|programa (emisión)|trasmisˈsjone|S|cmu|3|La trasmissione inizia alle otto.|El programa empieza a las ocho.|g=f;p=trasmissioni
programma|programa / plan|proˈɡramma|S|cmu|1|Il programma della serata è ricco.|El programa de la noche es rico.|g=m;p=programmi;n=Doble: programa de TV y plan: il programma del governo
pubblico|público|ˈpubbliko|S|cmu|2|Il pubblico del teatro applaude.|El público del teatro aplaude.|g=m;p=pubblici;n=Adj. también: un bagno pubblico
spettatore|espectador|spettaˈtore|S|cin|3|Migliaia di spettatori allo stadio.|Miles de espectadores en el estadio.|g=m;p=spettatori
redazione|redacción|redatˈtsjone|S|cmu|3|Lavora nella redazione del giornale.|Trabaja en la redacción del diario.|g=f;p=redazioni
abbonamento|suscripción (abono)|abbonamenˈto|S|cmu|3|Rinnovo l'abbonamento al giornale.|Renuevo la suscripción al diario.|g=m;p=abbonamenti;c=abbonamento annuale
abbonarsi|suscribirse|abboˈnarsi|V|cmu|3|Mi abbono alla newsletter.|Me suscribo al boletín.|c=abbonarsi a
ascolto|audiencia (escucha)|aˈskɔlto|S|cmu|4|Gli ascolti del programma crescono.|La audiencia del programa crece.|g=m;p=ascolti
recensione|reseña|retʃenˈsjone|S|let|3|Una recensione entusiasta del romanzo.|Una reseña entusiasta del libro.|g=f;p=recensioni
personaggio|personaje|persoˈnaddʒo|S|cin|2|Il personaggio principale è un commissario.|El personaje principal es un comisario.|g=m;p=personaggi
protagonista|protagonista|protagoˈnista|S|cin|2|La protagonista è una violinista.|La protagonista es una violinista.|g=m;n=Invariable: il/la protagonista, i protagonisti
autore|autor|auˈtore|S|let|2|L'autore firma il libro in libreria.|El autor firma el libro en la librería.|g=m;p=autori
autrice|autora|auˈtritʃe|S|let|3|L'autrice vince il premio Strega.|La autora gana el premio Strega.|g=f;p=autrici
racconto|cuento|rakˈkɔnto|S|let|2|Una raccolta di racconti brevi.|Una colección de cuentos cortos.|g=m;p=racconti
narrativa|narrativa|narraˈtiva|S|let|3|La narrativa italiana del Novecento.|La narrativa italiana del Novecento.|g=f;n=Invariable
rima|rima|ˈrima|S|let|3|Una filastrocca in rima.|Una rima de arrullos (en rima).|g=f;p=rime
libreria|librería|libreˈria|S|cmp|2|Compro il romanzo in libreria.|Compro la novela en la librería.|g=f;n=Libreria = tienda de libros; biblioteca = biblioteca
bestseller|superventas|bɛstˈsɛller|S|let|3|Il bestseller dell'estate.|El superventas del verano.|g=m;n=Invariable
visita guidata|visita guiada|ˈvizita ɡwiˈdata|L|sve|3|La visita guidata del Colosseo.|La visita guiada del Coliseo.
patrimonio|patrimonio|paˈtrimonjo|S|att|3|Il patrimonio artistico italiano è unico.|El patrimonio artístico italiano es único.|g=m;c=patrimonio dell'umanità
premio|premio|ˈprɛmio|S|sve|2|Il premio per la migliore attrice.|El premio a la mejor actriz.|g=m;p=premi
vincitore|ganador|vintʃiˈtore|S|sve|3|Il vincitore della maratona.|El ganador de la maratón.|g=m;p=vincitori

# ══ salute avanzata ══
sintomo|síntomo|ˈsintomo|S|sla|3|I sintomi dell'influenza.|Los síntomas de la gripe.|g=m;p=sintomi
diagnosi|diagnóstico|diaɡˈnɔzi|S|sla|3|La diagnosi arriva presto.|El diagnóstico llega pronto.|g=f;n=Invariable
vaccino|vacuna|vatˈtʃino|S|sla|2|Il vaccino antinfluenzale annuale.|La vacuna antigripal anual.|g=m;p=vaccini
vaccinarsi|vacunarse|vatʃˈinarsi|V|sla|2|Mi vaccino prima dell'inverno.|Me vacuno antes del invierno.
epidemia|epidemia|epiˈdɛmja|S|sla|3|L'epidemia si ferma in città.|La epidemia se detiene en la ciudad.|g=f;p=epidemie
pandemia|pandemia|panˈdɛmja|S|sla|3|La pandemia ha cambiato le abitudini.|La pandemia cambió las costumbres.|g=f;p=pandemie
contagioso|contagioso|kontaˈdʒozo|A|sla|3|Una risata contagiosa, un raffreddore contagioso.|Una risa contagiosa, un resfriado contagioso.
terapia|terapia|teˈrapia|S|sla|2|Una terapia di sei mesi.|Una terapia de seis meses.|g=f;p=terapie
seduta|sesión|seˈduta|S|sla|3|Una seduta di fisioterapia.|Una sesión de fisioterapia.|g=f;p=sedute
psicologo|psicólogo|psikoˈlɔɡo|S|pro|3|Parlare con lo psicologo aiuta.|Hablar con el psicólogo ayuda.|g=m;p=psicologi
curare|cuidar / tratar|kuˈrare|V|sla|1|Il medico cura la ferita.|El médico trata la herida.|c=curarsi di
prendersi cura di|cuidar a|ˈprendersi ˈkura di|L|sla|2|Mi prendo cura dei nonni.|Cuido a mis abuelos.
assistenza|asistencia|assistɛntsa|S|sla|2|L'assistenza sanitaria pubblica.|La asistencia sanitaria pública.|g=f;c=assistenza clienti
infermiera|enfermera|inferˈmjɛra|S|pro|2|L'infermiera cambia la medicazione.|La enfermera cambia el apósito.|g=f;p=infermiere
medicazione|apósito (curación)|medikatˈtsjone|S|sla|4|Cambio la medicazione ogni sera.|Cambio el apósito cada noche.|g=f;p=medicazioni
pronto soccorso exists|emergencia|pronto soˈkɔrso|S|sla|2|L'hanno portato al pronto soccorso.|Lo llevaron a la emergencia.
dolere|doler|ˈdɔlere|V|sla|3|Mi duole la testa da ieri.|Me duele la cabeza desde ayer.|n=Letterario/clinico: mi duole; en conversación: mi fa male
soffrire|sufrir|sofˈfire|V|emo|2|Soffro di emicrania.|Sufro de migraña.|c=soffrire di

# ══ verbi B1 (trasferibili) ══
iscriversi|inscribirse|iˈscriversi|V|stu|1|Mi iscrivo al corso di cucina.|Me inscribo al curso de cocina.|n=Io mi iscrivo (tipo -isc); iscriversi A
abituarsi|acostumbrarse|abitˈwarsi|V|emo|2|Mi abituo presto al nuovo ufficio.|Me acostumbro pronto a la nueva oficina.|c=abituarsi a
adattarsi|adaptarse|adatˈtarsi|V|emo|2|Adattarsi ai cambiamenti non è facile.|Adaptarse a los cambios no es fácil.
traslocare|mudar (de casa)|trasloˈkare|V|cas|3|Traslochiamo sabato prossimo.|Mudamos el próximo sábado.|r=inf
affittare|alquilar|affitˈtare|V|cas|2|Affittiamo un appartamento al mare.|Alquilamos un departamento en la playa.|s=noleggiare;n=Affittare = alquilar (largos plazos); noleggiare = alquilar corto plazo
noleggiare|alquilar (por horas)|noleʤˈdʒare|V|vig|3|Noleggiamo le bici per la gita.|Alquilamos las bicis para el paseo.
gestire|gestionar|dʒeˈstire|V|lav|2|Gestisco le pagine social dell'azienda.|Gestiono las redes de la empresa.|n=Io gestisco (tipo -isc)
controllare|controlar / revisar|kontrolˈlare|V|ast|1|Controllo le mail ogni ora.|Reviso los correos cada hora.|n=Controlar a alguien = sorvegliare; revisar = controllare
verificare|verificar|verifiˈkare|V|sci|3|Verifico i dati prima di pubblicare.|Verifico los datos antes de publicar.
rimandare|aplazar|rimmanˈdare|V|tmp|2|Rimandiamo la riunione a giovedì.|Aplazamos la reunión al jueves.|c=rimandare a domani
riprendere|retomar|riprenˈdɛre|V|ast|3|Riprendo gli studi a ottobre.|Retomo los estudios en octubre.|n=Riprendere también = grabar; participio ripreso
ripassare|repasar|ripasˈsare|V|stu|3|Ripasso i verbi irregolari.|Repaso los verbos irregulares.
sottolineare|subrayar|sottoliˈneare|V|stu|2|Sottolineo le parole nuove.|Subrayo las palabras nuevas.|n=Figurado: il problema sottolinea…
consegnare|entregar|konseɲˈɲare|V|lav|1|Consegno la relazione lunedì.|Entrego el informe el lunes.|c=consegna a domicilio
ritirarsi|retirarse|ritiˈrarsi|V|lav|3|Mio padre si ritira a sessantacinque anni.|Mi padre se retira a los sesenta y cinco.
partecipare a exists|participar en|partetʃiˈpare|V|rel|1|Partecipo a un concorso di poesia.|Participo en un concurso de poesía.
spettacolo|espectáculo|spettaˈkolo|S|sve|2|Uno spettacolo teatrale esaurito.|Un espectáculo teatral agotado.|g=m;p=spettacoli;c=andare a teatro
sfilata|desfile|sfiˈlata|S|sve|4|La sfilata di moda a Milano.|El desfile de moda en Milán.|g=f;p=sfilate
esaurito|agotado|esauˈrito|A|cmp|3|Il biglietti sono esauriti da giorni.|Las entradas están agotadas desde hace días.|n=Agotado (persona) = stanco morto

# ══ sostantivi astratti (parte 2) ══
scelta|elección|ˈʃɛlta|S|ast|1|Una scelta difficile ma necessaria.|Una elección difícil pero necesaria.|g=f;p=scelte;c=materiale di scelta
decisione|decisión|deʧiˈzjone|S|ast|1|La decisione finale spetta a te.|La decisión final te corresponde.|g=f;p=decisioni
proposta|propuesta|proˈpɔsta|S|ast|2|Una proposta di lavoro da valutare.|Una propuesta de trabajo a evaluar.|g=f;p=proposte;c=fare una proposta
suggerimento|sugerencia|suddʒeriˈmento|S|cmu|2|Un suggerimento utile per l'esame.|Un sugerencia útil para el examen.|g=m;p=suggerimenti
consiglio|consejo|konˈsiʎʎo|S|cmu|1|Seguo il consiglio della nonna.|Sigo el consejo de la abuela.|g=m;p=consigli;c=consiglio d'amministrazione
richiesta|solicitud|rikjeˈsta|S|cmu|2|Una richiesta di informazioni gentile.|Una solicitud de información amable.|g=f;p=richieste
offerta|oferta|ofˈferta|S|cmp|2|Un'offerta imperdibile di Natale.|Una oferta irresistible de Navidad.|g=f;p=offerte
presenza|presencia|preˈzentsa|S|ast|3|La presenza di sicurezza all'ingresso.|La presencia de seguridad en la entrada.|g=f;a=assenza
assenza|ausencia|asˈzentsa|S|ast|3|Un permesso per assenza breve.|Un permiso por ausencia breve.|g=f;a=presenza
mancanza|falta / carencia|manˈkantsa|S|ast|3|La mancanza di sonno si sente.|La falta de sueño se siente.|g=f
necessità|necesidad|neʧeʃˈsita|S|ast|3|La necessità di riposare di più.|La necesidad de descansar más.|g=f;n=Invariable
importanza|importancia|imporˈtantsa|S|ast|3|L'importanza della puntualità.|La importancia de la puntualidad.|g=f
differenza|diferencia|difˈferentsa|S|ast|1|La differenza tra fare e dire.|La diferencia entre hacer y decir.|g=f;p=differenze;c=fare la differenza
contrario|contrario|konˈtrarjo|S|ast|2|Il contrario di caldo è freddo.|El contrario de calor es frío.|g=m;p=contrari;c=al contrario
opposto|opuesto|opˈpɔsto|S|ast|3|Il mio opposto: lui timido, io no.|Mi opuesto: él tímido, yo no.|g=m
colpa|culpa|ˈkolpa|S|emo|2|Non è colpa tua, davvero.|No es tu culpa, de verdad.|g=f;c=dare la colpa a
merito|mérito|ˈmɛrito|S|ast|3|Il merito è tutto della squadra.|El mérito es todo del equipo.|g=m;c=meritare attenzione
intenzione|intención|intenˈtsjone|S|ast|3|Non ho intenzione di cambiare.|No tengo intención de cambiar.|g=f;p=intenzioni;c=con l'intenzione di
programma TV exists|programa|proˈɡramma|S|cmu|1|Il mio programma preferito del sabato.|Mi programa preferido del sábado.
promessa|promesa|proˈmɛssa|S|rel|2|Manterrò la promessa, vedrai.|Mantendré la promesa, verás.|g=f;p=promesse;c=promessa di matrimonio
invito|invitación|inˈvito|S|rel|1|Un invito a cena elegante.|Una invitación a cenar elegante.|g=m;p=inviti
ordine|orden|ˈɔrdine|S|ast|2|Mettere ordine nella stanza.|Poner orden en la habitación.|g=m;p=ordini;c=in ordine
regola|regla|ˈreɡola|S|stu|2|Le regole del gioco sono semplici.|Las reglas del juego son simples.|g=f;p=regole;c=come regola
eccezione|excepción|ettʃetˈtsjone|S|ast|3|Faccio un'eccezione per te.|Hago una excepción por ti.|g=f;c=fare eccezione
limite|límite|ˈlimite|S|ast|2|Il limite di velocità è 130.|El límite de velocidad es 130.|g=m;p=limiti;c=dare i limiti
livello|nivel|liˈvello|S|ast|2|Il livello del corso è intermedio.|El nivel del curso es intermedio.|g=m;p=livelli;c=livello di istruzione
fase|fase|ˈfaze|S|ast|3|La fase finale del progetto.|La fase final del proyecto.|g=f;p=fasi
caratteristica|característica|karatteriˈstika|S|ast|3|Le caratteristiche del prodotto.|Las características del producto.|g=f;p=caratteristiche
rischio|riesgo|ˈriʃʃo|S|ast|2|Il rischio calcolato dell'imprenditore.|El riesgo calculado del empresario.|g=m;p=rischi;c=a proprio rischio
sforzo|esfuerzo|ˈsfɔrtso|S|emo|3|Un grosso sforzo economico.|Un gran esfuerzo económico.|g=m;p=sforzi;c=fare uno sforzo
capacità|capacidad|kapaˈtʃita|S|ast|3|La capacità di adattarsi.|La capacidad de adaptarse.|g=f;n=Invariable
abilità|destreza (habilidad)|abiliˈta|S|ast|3|L'abilità manuale dell'artigiano.|La destreza manual del artesano.|g=f;n=Invariable
conoscenza|conocimiento|konoˈʃʃentsa|S|ast|3|La conoscenza delle lingue apre porte.|El conocimiento de idiomas abre puertas.|g=f;p=conoscenze
comportamento|comportamiento|komportaˈmento|S|emo|3|Un comportamento strano, il suo.|Un comportamiento extraño, el suyo.|g=m;p=comportamenti
atteggiamento|actitud|attedʒamenˈto|S|emo|4|Un atteggiamento positivo aiuta.|Una actitud positiva ayuda.|g=m;p=atteggiamenti
reazione|reacción|reatˈtsjone|S|emo|3|La reazione del pubblico è stata fredda.|La reacción del público fue fría.|g=f;p=reazioni
motivo|motivo|moˈtivo|S|ast|2|Il motivo della visita.|El motivo de la visita.|g=m;p=motivi;c=motivo per cui
traguardo|hito (meta lograda)|traɡwarˈdo|S|ast|4|Raggiungere un traguardo storico.|Alcanzar un hito histórico.|g=m;p=traguardi
insuccesso|fracaso|insukˈtʃɛsso|S|ast|4|Dopo l'insuccesso, si rialza.|Después del fracaso, se levanta.|g=m
tentativo|intento|tenˈtativo|S|ast|3|Al secondo tentativo riesce.|Al segundo intento lo logra.|g=m;p=tentativi
diminuzione|disminución|diminutˈsjone|S|ast|4|La diminuzione del rumore in centro.|La disminución del ruido en el centro.|g=f
aumento|aumento|auˈmento|S|fin|2|L'aumento del biglietto del treno.|El aumento del pasaje del tren.|g=m;p=aumenti
variazione|variación|varjatˈtsjone|S|ast|4|Una variazione di programma.|Una variación de programa.|g=f;p=variazioni
cambiamento|cambio|kambiaˈmento|S|ast|3|Un cambiamento radicale di vita.|Un cambio radical de vida.|g=m;p=cambiamenti
trasformazione|transformación|trasformatˈsjone|S|ast|4|La trasformazione del quartiere.|La transformación del barrio.|g=f
miglioramento|mejora|miʎʎoraˈmento|S|ast|4|Un miglioramento netto della qualità.|Una mejora neta de la calidad.|g=m
peggioramento|empeoramiento|peʤʤoraˈmento|S|ast|4|Il peggioramento del traffico.|El empeoramiento del tráfico.|g=m
esito|desenlace|eˈzito|S|ast|4|L'esito della partita è incerto.|El desenlace del partido es incierto.|g=m;p=esiti
durata|duración|duˈrata|S|tmp|3|La durata del contratto è annuale.|La duración del contrato es anual.|g=f
intervallo|intermedio (intervalo)|interˈvallo|S|tmp|3|L'intervallo tra i due treni.|El intervalo entre los dos trenes.|g=m;p=intervalli
anticipo|anticipo|antiˈtʃipo|S|fin|3|Un anticipo sullo stipendio.|Un anticipo del sueldo.|g=m;p=anticipi;c=in anticipo
impegno|compromiso (ocupación)|imˈpeɲɲo|S|lav|2|Ho un impegno di lavoro.|Tengo un compromiso de trabajo.|g=m;p=impegni;c=prendersi un impegno
`, "B1", "k-b1b");
