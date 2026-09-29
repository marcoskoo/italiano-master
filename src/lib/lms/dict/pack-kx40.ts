import { parsePack } from "./compact";
import type { VocabWord } from "../types";

/* ── Pack K·X40 · scienza e tecnologia (B2) ──────────── */

export const PACK_KX40: VocabWord[] = parsePack(`
# ══ chimica e fisica ══
legame chimico|enlace químico|leˈɡame kiˈmiko|L|sci|5|Il legame chimico covalente.|El enlace químico covalente.
covalente|covalente|kovalente → IPA fix abajo|A|sci|5|Il legame covalente doppio.|El enlace covalente doble.|r=tec
ionico|iónico|joˈniko|A|sci|5|Il legame ionico del sale comune.|El enlace iónico de la sal común.|r=tec
reazione chimica|reacción química|reatˈtsjone kiˈmika|L|sci|4|La reazione chimica di combustione.|La reacción química de combustión.
catalizzatore|catalizador|katalitˈtsatore|S|sci|5|Il catalizzatore accelera la reazione.|El catalizador acelera la reacción.|g=m;p=catalizzatori
ossidazione|oxidación|ossidaˈtsjone|S|sci|5|L'ossidazione del ferro esposta all'aria.|La oxidación del hierro expuesto al aire.|g=f
riduzione|reducción|ridutˈtsjone|S|sci|5|L'ossidoriduzione: ossidazione e riduzione.|La oxidoreducción: oxidación y reducción.|g=f
soluzione (chimica)|disolución|soluˈtsjone kiˈmika|L|sci|5|Una soluzione satura di zucchero.|Una disolución saturada de azúcar.
solvente|disolvente|solˈvɛnte|S|sci|5|L'acqua come solvente universale.|El agua como disolvente universal.|g=m;p=solventi
concentrazione|concentración|kontsentraˈtsjone|S|sci|4|La concentrazione molare della soluzione.|La concentración molar de la disolución.|g=f
basico|básico|baˈziko|A|sci|5|Una soluzione basica di sapone.|Una disolución básica de jabón.
ph|pH|piˈakka|S|sci|5|Il ph della pioggia acida.|El pH de la lluvia ácida.|g=m;p=ph
neutro (chimica)|neutro|ˈnɛutro|A|sci|5|Una sostanza neutra al tornasole.|Una sustancia neutra al tornasol.
catalisi|catálisis|kataˈlizi|S|sci|5|La catalisi enzimatica biologica.|La catálisis enzimática biológica.|g=f
enzima|enzima|enˈdzima|S|sci|4|L'enzima digestivo della saliva.|La enzima digestiva de la saliva.|g=f;p=enzimi
aminoacido|aminoácido|aminoˈaːtʃido|S|sci|5|Gli aminoacidi essenziali della dieta.|Los aminoácidos esenciales de la dieta.|g=m;p=aminoacidi
cromosoma|cromosoma|kromoˈzɔːma|S|sci|5|Il cromosoma X e Y.|El cromosoma X e Y.|g=m;p=cromosomi
gene|gen|ˈdʒɛne|S|sci|4|Il gene che codifica l'insulina.|El gen que codifica la insulina.|g=m;p=geni
genoma|genoma|dʒeˈnɔːma|S|sci|4|Il genoma umano decifrato nel 2000.|El genoma humano descifrado en 2000.|g=m;p=genomi
dna|ADN|diˈenneˈa|S|sci|4|Il dna mitocondriale si eredita dalla madre.|El ADN mitocondrial se hereda de la madre.|g=m;p=dna
rna|ARN|erreˈenneˈa|S|sci|5|L'rna messaggero del vaccino.|El ARN mensajero de la vacuna.|g=m;p=rna
mutazione genetica|mutación genética|mutaˈtsjone dʒeˈnetika|L|sci|5|La mutazione genetica puntiforme.|La mutación genética puntual.
evoluzione|evolución|evoluˈtsjone|S|sci|3|L'evoluzione delle specie di Darwin.|La evolución de las especies de Darwin.|g=f
selezione naturale|selección natural|seleˈtsjone natuˈrale|L|sci|4|La selezione naturale spiega l'adattamento.|La selección natural explica la adaptación.
adattamento|adaptación|adattaˈmento|S|sci|4|L'adattamento del camaleonte.|La adaptación del camaleón.|g=m;p=adattamenti
catena alimentare|cadena alimentaria|kaˈtʃena aliˈmentare|L|sci|5|Il rapace in cima alla catena alimentare.|La rapaz en la cima de la cadena alimentaria.
fotosintesi|fotosíntesis|fotoˈsintesi|S|sci|5|La fotosintesi clorofilliana.|La fotosíntesis clorofílica.|g=f
clorofilla|clorofila|kloroˈfila|S|sci|5|La clorofilla delle foglie verdi.|La clorofila de las hojas verdes.|g=f
respirazione cellulare|respiración celular|respiraˈtsjone tʃelluˈlare|L|sci|5|La respirazione cellulare nei mitocondri.|La respiración celular en las mitocondrias.
mitocondrio|mitocondria|mitoˈkɔndrio|S|sci|5|Il mitocondrio produce energia.|La mitocondria produce energía.|g=m;p=mitocondri
forza di gravità|fuerza de gravedad|ˈfɔrtsa di ɡraviˈta|L|sci|4|La forza di gravità sulla Luna è un sesto.|La fuerza de gravedad en la Luna es un sexto.
 relatività|relatividad|relatiˈvita|S|sci|5|La relatività ristretta di Einstein.|La relatividad restringida de Einstein.|g=f
relatività ristretta|relatividad especial|relatiˈvita ristretˈta|L|sci|5|La relatività ristretta del 1905.|La relatividad especial de 1905.
relatività generale|relatividad general|relatiˈvita dʒeneraˈle|L|sci|5|La relatività generale e la curvatura.|La relatividad general y la curvatura.
quanto (fisica)|quanto (física)|ˈkwanto|S|sci|5|Il quanto di energia di Planck.|El cuanto de energía de Planck.|g=m;p=quanti
meccanica quantistica|mecánica cuántica|mekˈkanika kwantiˈstika|L|sci|5|La meccanica quantistica e il gatto di Schrödinger.|La mecánica cuántica y el gato de Schrödinger.
particella subatomica|partícula subatómica|partiˈtʃella subaˈtɔmika|L|sci|5|Le particelle subatomiche dell'acceleratore.|Las partículas subatómicas del acelerador.
bosone|bosón|boˈzoːne|S|sci|5|Il bosone di Higgs scoperto al Cern.|El bosón de Higgs descubierto en el Cern.|g=m;p=bosoni
acceleratore di particelle|acelerador de partículas|attʃeleraˈtore di partiˈtʃelle|L|sci|5|L'acceleratore di particelle del Cern.|El acelerador de partículas del Cern.
# ══ tecnologia e informatica ══
machine learning|aprendizaje automático|maˈʃiːn ˈlɛːrniŋ|S|tec|4|Il machine learning supervisionato.|El aprendizaje automático supervisado.|g=m;n=Anglicismo
rete neurale|red neuronal|ˈrɛte neuˈraːle|L|tec|5|La rete neurale addestrata su un milione di immagini.|La red neuronal entrenada con un millón de imágenes.
addestrare (ai)|entrenar (IA)|addeˈstrare|V|tec|5|Hanno addestrato il modello sul corpus italiano.|Han entrenado el modelo con el corpus italiano.|r=tec
corpus (linguistica)|corpus (lingüística)|kɔrpus|S|stu|5|Il corpus di riferimento dei dialetti.|El corpus de referencia de los dialectos.|g=m;p=corpus
deep learning|aprendizaje profundo|dip ˈlɛːrniŋ|S|tec|5|Il deep learning a strati convoluzionali.|El aprendizaje profundo de capas convolucionales.|g=m;n=Anglicismo
modello linguistico|modelo lingüístico|moˈdɛllo linɡwiˈstiko|L|tec|5|Il modello linguistico addestrato sull'italiano.|El modelo lingüístico entrenado con italiano.
prompt|prompt (instrucción)|prɔmpt|S|tec|4|Un prompt ben scritto migliora la risposta.|Un prompt bien escrito mejora la respuesta.|g=m;n=Anglicismo
allucinazione (ai)|alucinación (IA)|allutʃinaˈtsjone|S|tec|5|L'allucinazione del modello linguistico.|La alucinación del modelo lingüístico.|g=f
cloud computing|computación en la nube|klaud komˈpjuːtiŋ|S|tec|5|Il cloud computing in stile serverless.|La computación en la nube estilo serverless.|g=m;n=Anglicismo
serverless|sin servidor|ˈsɛrvərles|S|tec|5|L'architettura serverless a funzioni.|La arquitectura sin servidor por funciones.|g=m;n=Anglicismo
blockchain|cadena de bloques|blɔkˈtʃein|S|tec|4|La blockchain pubblica e permissionless.|La cadena de bloques pública y sin permisos.|g=f;n=Anglicismo
criptovaluta|criptomoneda|kriptovaluˈta|S|fin|4|Il crollo della criptovaluta Luna.|El crac de la criptomoneda Luna.|g=f;p=criptovalute
wallet (crypto)|monedero (cripto)|ˈwɔllet|S|fin|5|Il wallet hardware offline.|El monedero hardware offline.|g=m;n=Anglicismo
mining (crypto)|minería (cripto)|ˈmaining|S|fin|5|Il mining di bitcoin consuma energia.|La minería de bitcoin consume energía.|g=m;n=Anglicismo
smart contract|contrato inteligente|smartkonˈtratto|S|fin|5|Lo smart contract sulla blockchain Ethereum.|El contrato inteligente en la blockchain Ethereum.|g=m;n=Anglicismo
internet delle cose|internet de las cosas|inˈternet delle ˈkose|L|tec|5|L'internet delle cose in casa smart.|El internet de las cosas en el hogar inteligente.
domotica|domótica|doˈmɔtika|S|tec|5|La domotica della villetta.|La domótica del chalet.|g=f
realtà aumentata|realidad aumentada|realˈta auɡmenˈtaːta|L|tec|5|La realtà aumentata sullo smartphone.|La realidad aumentada en el smartphone.
realtà virtuale|realidad virtual|realˈta virtuaˈle|L|tec|4|I visori per la realtà virtuale.|Los visores para la realidad virtual.
visore (vr)|visor (RV)|viˈzoːre|S|tec|4|Il visore vr di ultima generazione.|El visor RV de última generación.|g=m;p=visori
metaverso|metaverso|metaverˈso|S|tec|5|Il metaverso corporate della Meta.|El metaverso corporativo de Meta.|g=m;p=metaversi
cybersecurity|ciberseguridad|saibərsiˈkjuriti|S|tec|4|La cybersecurity delle infrastrutture.|La ciberseguridad de las infraestructuras.|g=f;n=Anglicismo
vulnerabilità informatica|vulnerabilidad informática|vulnerabilita informaˈtika|L|tec|5|La vulnerabilità informatica zero-day.|La vulnerabilidad informática zero-day.
zero-day|día cero|ˈdzero deɪ|L|tec|5|Una falla zero-day nel browser.|Una falla de día cero en el navegador.|n=Anglicismo
patch (software)|parche (software)|patʃ|S|tec|4|La patch di sicurezza urgente.|El parche de seguridad urgente.|g=f;n=Anglicismo
bug|error (bug)|baɡ|S|tec|4|Un bug nel sistema di prenotazione.|Un bug en el sistema de reserva.|g=m;n=Anglicismo
debugging|depuración|diˈbaɡɡiŋ|S|tec|5|Il debugging del codice legacy.|La depuración del código legado.|g=m;n=Anglicismo
open source|código abierto|ˈopen ˈsɔrs|L|tec|4|Il software open source della comunità.|El software de código abierto de la comunidad.
codice sorgente|código fuente|ˈkɔditʃе sorˈdʒente|L|tec|4|Il codice sorgente su repository.|El código fuente en el repositorio.
repository|repositorio|riˈpɔzitri|S|tec|5|Il repository Git del progetto.|El repositorio Git del proyecto.|g=m;p=repository;n=Anglicismo
commit|commit|koˈmit|S|tec|5|Un commit al giorno tenne lontano il bug.|Un commit al día mantenía lejos el bug.|g=m;n=Anglicismo
linguaggio di programmazione|lenguaje de programación|linˈɡwaddʒo di progra mmaˈtsjone|L|tec|4|Il linguaggio di programmazione Rust.|El lenguaje de programación Rust.
programmazione a oggetti|programación orientada a objetos|pro grammaˈtsjone a obˈbʒetti|L|tec|5|La programmazione a oggetti in Python.|La programación orientada a objetos en Python.
apprendimento automatico|aprendizaje automático|apprendiˈmento autoˈmatiko|L|tec|5|L'apprendimento automatico statistico.|El aprendizaje automático estadístico.
big data|macrodatos|biɡ ˈdaːta|S|tec|4|L'analisi dei big data sanitari.|El análisis de macrodatos sanitarios.|g=m;n=Anglicismo
data mining|minería de datos|ˈdaːta ˈmaining|L|tec|5|Il data mining sulle abitudini di consumo.|La minería de datos sobre hábitos de consumo.
profilazione|perfilado|profilatˈtsjone|S|tec|4|La profilazione degli utenti a fini commerciali.|El perfilado de los usuarios con fines comerciales.|g=f
cookie|cookie|ˈkukki|S|tec|4|Il banner dei cookie di consenso.|El banner de cookies de consentimiento.|g=m;p=cookie;n=Anglicismo
gdpr|RGPD|dʒidiˈpirˈerre|S|ist|5|Il gdpr sulla protezione dei dati.|El RGPD sobre protección de datos.|g=m
protezione dei dati|protección de datos|proteˈtsjone dei ˈdaːti|L|ist|4|La protezione dei dati personali.|La protección de datos personales.
anonimizzazione|anonimización|anonimittsaˈtsjone|S|tec|5|L'anonimizzazione dei dati sensibili.|La anonimización de los datos sensibles.|g=f
crittografia|criptografía|krittoɡraˈfia|S|tec|5|La crittografia a chiave pubblica.|La criptografía de clave pública.|g=f
chiave pubblica|clave pública|ˈkjaːve ˈpubblika|L|tec|5|La chiave pubblica condivisa in rete.|La clave pública compartida en red.
end-to-end|de extremo a extremo|end tu end|E|tec|5|La cifratura end-to-end di WhatsApp.|El cifrado de extremo a extremo de WhatsApp.|n=Anglicismo
cifratura|cifrado|tʃiffraˈtuːra|S|tec|5|La cifratura dei messaggi.|El cifrado de los mensajes.|g=f;p=cifrature
hacker|hacker|ˈhakker|S|tec|4|L'hacker etico della white hat.|El hacker ético del sombrero blanco.|g=m;n=Anglicismo
hackeraggio|piratería informática|hakkeradˈdʒo|S|tec|5|L'hackeraggio del ministero.|La piratería informática del ministero.|g=m;p=hackeraggi
phishing|phishing|ˈfiʃiŋ|S|tec|4|Il phishing via sms: lo smishing.|El phishing por SMS: el smishing.|g=m;n=Anglicismo
ransomware|rescate (software)|ˈransomwɛr|S|tec|5|Il ransomware blocca l'ospedale.|El ransomware bloquea el hospital.|g=m;n=Anglicismo
firewall|firewall|ˈfajerˌwɔl|S|tec|5|Il firewall blocca la porta 22.|El firewall bloquea el puerto 22.|g=m;n=Anglicismo
ripristino|restauración|ripriˈstiːno|S|tec|5|Il ripristino del sistema dal backup.|La restauración del sistema desde la copia.|g=m;p=ripristini
aggiornamento di sicurezza|actualización de seguridad|addʒornaˈmento di sikkuˈrettsa|L|tec|5|L'aggiornamento di sicurezza di emergenza.|La actualización de seguridad de emergenza.
patch di sicurezza|parche de seguridad|patʃ di sikkuˈrettsa|L|tec|5|Rilasciata la patch di sicurezza critica.|Publicada el parche de seguridad crítico.
`, "B2", "k-x40");
