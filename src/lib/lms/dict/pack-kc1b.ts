import { parsePack } from "./compact";
import type { VocabWord } from "../types";

/* ── Pack K·C1-b · ambiente, política, medios y valorativos (MCER C1) ── */

export const PACK_KC1B: VocabWord[] = parsePack(`
# ══ ambiente e energia ══
riciclo|reciclaje|ritʃiˈkolo|S|nat|3|Il riciclo della plastica in Italia.|El reciclaje del plástico en Italia.|g=m;c=riciclo creativo
raccolta differenziata|recolección diferenciada|rakˈkɔlta differenˈtsjata|L|nat|3|Fai la raccolta differenziata?|¿Haces la recolección diferenciada?|n=Muy institucional en Italia: organico, plastica, carta…
discarica|relleno sanitario|diʃˈkarika|S|nat|4|La discarica fuori norma chiude.|El relleno sanitario fuera de norma cierra.|g=f;p=discariche
bonifica|remediación|boniˈfiɡa|S|nat|5|La bonifica del sito inquinato.|La remediación del sitio contaminado.|g=f;p=bonifiche
fotovoltaico|fotovoltaico|fotovoltaˈiko|A|tec|4|Un impianto fotovoltaico sul tetto.|Una planta fotovoltaica en el techo.|n=Invariable come agg.: pannelli fotovoltaici
eolico|eólico|eˈɔliko|A|tec|5|Il parco eolico in Sardegna.|El parque eólico en Cerdeña.
sostenibilità|sostenibilidad|sostenibiˈlita|S|nat|4|La sostenibilità non è opzionale.|La sostenibilidad no es opcional.|g=f
biodiversità|biodiversidad|biodiversita|S|nat|4|La biodiversità del Mediterraneo.|La biodiversidad del Mediterráneo.|g=f
ecosistema|ecosistema|ekoˈsistɛma|S|nat|4|Un ecosistema fragile in equilibrio.|Un ecosistema frágil en equilibrio.|g=m;p=ecosistemi
habitat|hábitat|aˈbitat|S|nat|5|L'habitat naturale del lupo.|El hábitat natural del lobo.|g=m;n=Invariable
frana|derrumbe|ˈfrana|S|nat|4|Una frana ha chiuso la statale.|Un derrumbe cerró la carretera.|g=f;p=frane
esondazione|desborde|ezondaˈtsjone|S|nat|5|L'esondazione del Po nel 1951.|El desborde del Po en 1951.|g=f;p=esondazioni
dissesto idrogeologico|desastre hidrogeológico|disˈsɛsto idrodʒeoloˈdʒiko|L|nat|5|Il dissesto idrogeologico del territorio italiano è cronico.|El desastre hidrogeológico del territorio italiano es crónico.|r=tec
desertificazione|desertificación|desertifikatˈtsjone|S|nat|5|La desertificazione avanza nel sud.|La desertificación avanza en el sur.|g=f
impatto ambientale|impacto ambiental|imˈpatto ambjenˈtale|L|nat|3|La valutazione d'impatto ambientale.|La evaluación de impacto ambiental.
biodegradabile|biodegradable|bjoδeɡraˈdabile|A|nat|4|Imballaggi biodegradabili al 100%.|Empaques biodegradables al 100%.

# ══ politica einternazionale ══
dossier|expediente (dossier)|dossˈsje|S|ist|4|Un dossier riservato sulla sanità.|Un expediente reservado sobre sanidad.|g=m;n=Invariable, a la francesa
trattato|tratado|tratˈtato|S|ist|4|Il trattato di Lisbona.|El tratado de Lisboa.|g=m;p=trattati
convenzione|convención|konvenˈtsjone|S|ist|4|La convenzione ONU sui diritti.|La convención ONU sobre derechos.|g=f;p=convenzioni
negoziato|negociación (proceso)|negoˈtsjato|S|ist|4|Il negoziato di pace procede lento.|La negociación de paz avanza lenta.|g=m;p=negoziati
risoluzione|resolución|rizolutˈtsjone|S|ist|5|La risoluzione del Consiglio di sicurezza.|La resolución del Consejo de seguridad.|g=f;p=risoluzioni
sfiducia|desconfianza (moción)|sfiˈdutʃa|S|ist|4|La mozione di sfiducia al governo.|La moción de desconfianza al gobierno.|g=f;c=voto di sfiducia
assessore|concejal|assesˈsoːre|S|ist|5|L'assessore alla cultura del comune.|El concejal de cultura del municipio.|g=m;p=assessori;n=Muy italiano: solo a nivel local
consigliere|consejero|konsiʎˈʎjɛre|S|ist|4|Il consigliere comunale Rossi.|El concejal Rossi.|g=m;p=consiglieri;c=consigliere d'amministrazione
cittadino|ciudadano|tʃittaˈdino|S|ist|2|Diritti e doveri del cittadino.|Derechos y deberes del ciudadano.|g=m;p=cittadini;a=straniero
permesso di soggiorno|permiso de residencia|perˈmesso di soˈdʒorno|L|ist|4|Rinnovo il permesso di soggiorno.|Renuevo el permiso de residencia.|n=Clave para extranjeros en Italia
soggiorno|estadía|soˈdʒorno|S|htl|3|Un soggiorno di due notti a Bologna.|Una estadía de dos noches en Bolonia.|g=m
frontiera|frontera|fronˈtjɛra|S|ist|3|Chiudere le frontiere non è soluzione.|Cerrar las fronteras no es solución.|g=f;p=frontiere;s=confine
anagrafe|registro civil|anaˈɡrafe|S|ist|5|Iscrizione all'anagrafe del comune.|Inscripción en el registro civil del municipio.|g=f;n=Invariable; anche ufficio anagrafe

# ══ media e giornalismo ══
testata|cabecera (periódico)|teˈstata|S|cmu|4|Una testata storica chiude.|Una cabecera histórica cierra.|g=f;p=testate;n=Anche: la testata del letto
stampa|prensa| stampa|S|cmu|3|La stampa estera accreditata al Quirinale.|La prensa extranjera acreditada en el Quirinal.|g=f;c=libertà di stampa
giornalismo|periodismo|dʒornaliˈzmo|S|cmu|4|Il giornalismo d'inchiesta italiano.|El periodismo de investigación italiano.|g=m
corrispondente|corresponsal|korrisponˈdɛnte|S|cmu|4|Il corrispondente da Parigi.|El corresponsal de París.|g=m;p=corrispondenti
scoop|primicia|skup|S|cmu|4|Uno scoop esclusivo del giornale.|Una primicia exclusiva del diario.|g=m;n=Anglicismo, invariable;r=col
esclusiva|exclusiva|eskluˈziva|S|cmu|4|L'intervista in esclusiva mondiale.|La entrevista en exclusiva mundial.|g=f;p=esclusive
redattore|redactor|redatˈtore|S|cmu|4|Il redattore capo della sezione sport.|El redactor jefe de la sección deportes.|g=m;p=redattori
diffusione|difusión|diffuˈzjone|S|cmu|5|La diffusione cartacea cala.|La difusión en papel baja.|g=f;p=diffusioni
locandina|cartel (afiche)|lokanˈdina|S|cmu|5|La locandina del film sul muro.|El cartel de la película en la pared.|g=f;p=locandine
manifesto|afiche|maniˈfɛsto|S|cmu|4|Manifesti elettorali per le strade.|Afiches electorales por las calles.|g=m;p=manifesti
spot|anuncio (comercial)|spɔt|S|cmu|4|Lo spot di Natale della compagnia.|El anuncio navideño de la compañía.|g=m;n=Anglicismo, invariable
slogan|eslogan|ˈzlɔɡan|S|cmu|4|Uno slogan memorabile di campagna.|Un eslogan memorable de campaña.|g=m;n=Invariable

# ══ valutativi ed estetici ══
comico|cómico|koˈmiko|A|cin|3|Un attore comico irresistibile.|Un actor cómico irresistible.|a=tragico
tragico|trágico|traˈdʒiko|A|cin|3|Un finale tragico e inevitabile.|Un final trágico e inevitable.|a=comico
tragedia|tragedia|traˈdʒɛdia|S|let|3|La tragedia greca in scena.|La tragedia griega en escena.|g=f;p=tragedie;a=commedia
dramma|drama|ˈdramma|S|cin|3|Un dramma familiare in tre atti.|Un drama familiar en tres actos.|g=m;p=drammi
drammatico|dramático|dramˈmatiko|A|cin|3|Un silenzio drammatico in aula.|Un silencio dramático en el hemiciclo.|c=crescita drammatica
patetico|patético|paˈtɛtiko|A|emo|4|Un ritorno patetico e tardivo.|Un regreso patético y tardío.|ff=1;n=Casi calco: patetico = lamentable/digno de lástima
buffo|chistoso|ˈbuffo|A|emo|4|Che suono buffo ha questa parola!|¡Qué sonido tan chistoso tiene esta palabra!|r=inf
toccante|conmovedor|tokˈkante|A|emo|4|Un documentario toccante sul terremoto.|Un documental conmovedor sobre el terremoto.|s=commovente
commovente|conmovedor|kommoˈvɛnte|A|emo|4|Un discorso commovente e sobrio.|Un discurso conmovedor y sobrio.
squallore|sordidez|skwalˈlɔre|S|emo|5|Lo squallore del quartiere abbandonato.|La sordidez del barrio abandonado.|g=m;p=squallogi
squallido|sórdido|skwalˈlido|A|emo|5|Un bar squallido di periferia.|Un bar sórdido de periferia.|r=let
sublime|sublime|suˈblime|A|art|4|Una vista sublime dall'alto.|Una vista sublime desde lo alto.
supremo|supremo|suˈprɛmo|A|ast|4|La Corte suprema decide stasera.|La Corte suprema decide esta noche.|n=Anche assoluto: sforzo supremo
pessimo|pésimo|pɛssimo|A|ast|3|Un voto pessimo in matematica.|Una nota pésima en matemática.|n=Superlativo absoluto de cattivo;a=ottimo
mediocre|mediocre|mediˈɔkre|A|ast|4|Un risultato mediocre, ammettiamolo.|Un resultado mediocre, admitámoslo.
scadente|de baja calidad|ʃkaˈdɛnte|A|ast|4|Un prodotto scadente e caro.|Un producto de baja calidad y caro.|a=di qualità
raffinato|refinado|raffiˈnato|A|art|4|Un gusto raffinato senza ostentazione.|Un gusto refinado sin ostentación.
esclusivo|exclusivo|eskluˈzivo|A|ast|4|Un club esclusivo sul lungofiume.|Un club exclusivo en la ribera.|c=contratto in esclusiva
superfluo|superfluo|suˈpɛrflwo|A|ast|4|Tagliare il superfluo, tenere l'essenziale.|Cortar lo superfluo, quedarse con lo esencial.|a=indispensabile
conciso|conciso|konˈtʃizo|A|cmu|4|Uno stile conciso ed efficace.|Un estilo conciso y eficaz.|a=prolisso
evocativo|evocador|evoˈkativo|A|art|5|Un paesaggio evocativo e silenzioso.|Un paisaje evocador y silencioso.
suggestivo|sugestivo (evocador)|sudʒeˈstivo|A|art|5|Un vicolo suggestivo del centro.|Un callejón evocador del centro.|ff=1;n=¡Falso amigo! suggestivo = evocador/encantador, no "sugestivo" (insinuante)

# ══ verbi C1 ══
aspirare a|aspirar a|aspiˈrare a|L|lav|3|Aspiro a un ruolo di responsabilità.|Aspiro a un puesto de responsabilidad.|n=¡Ojo! aspirare anche = inhalar: aspirare la polvere
scongiurare|conjurar|skondʒuˈrare|V|ast|4|Si scongiura il rischio di default.|Se conjura el riesgo de default.|c=conjurar el peligro;n=Coloquial: ti scongiuro! = ¡te lo ruego!
invocare|invocar|invoˈkare|V|cmu|5|Invoca l'aiuto degli alleati.|Invoca la ayuda de los aliados.|r=for
evocare|evocar|evoˈkare|V|let|4|Il profumo evoca l'infanzia.|El perfume evoca la infancia.|c=evocare ricordi
sottrarre|sustraer|sotˈtrare|V|fin|4|Sottraggono fondi alla ricerca.|Sustraen fondos de la investigación.|n=Io sottraggo; participio sottratto;c=sottrarre tempo
distrarre|distraer|diˈstrarre|V|emo|3|Niente mi distrae dal lavoro.|Nada me distrae del trabajo.|n=Io distrago; participio distratto
catturare|capturar|kattuˈrare|V|emo|3|La foto cattura l'attimo perfetto.|La foto captura el instante perfecto.|c=catturare l'attenzione
sequestrare|secuestrar|sekkweˈstrare|V|ist|4|I beni furono sequestrati.|Los bienes fueron secuestrados.|n=Sequestro anche = incautación judicial
liberare|liberar|libeˈrare|V|ast|3|Liberano gli ostaggi a mezzanotte.|Liberan a los rehenes a la medianoche.|c=liberare un posto di lavoro
evadere|evadir (fugarse)|evaˈdɛre|V|ist|4|Due detenuti evasi di notte.|Dos reclusos evadidos de noche.|n=Participio: evaso; evadere le tasse = evadir impuestos
rievocare|rememorar|rievoˈkare|V|let|5|Il libro rievoca gli anni Sessanta.|El libro rememora los años sesenta.|r=let
riesumare|resucitar (desenterrar)|riezuˈmare|V|ast|5|Riesumano un vecchio dibattito.|Resucitan un viejo debate.|n=Letalerale: dissotterrare; figurado: riesumare
rinnegare|renegar|rinneˈɡare|V|emo|5|Rinnegò le sue idee di gioventù.|Renegó de sus ideas de juventud.
assecondare|complacer|assekˈkondere|V|emo|5|Asseconda ogni capriccio della figlia.|Complace cada capriccio de la hija.
aspettativa|expectativa|aspettaˈtiva|S|ast|4|Le aspettative erano molto alte.|Las expectativas eran muy altas.|g=f;p=aspettative;c=in aspettativa (di ruolo)
auspicare|auspiciar|auspiˈkare|V|ast|5|Auspicano una soluzione rapida.|Auspician una solución rápida.|r=for;n=Muy usado en italiano formal/político
auspicio|augurio (auspicio)|auˈspitʃo|S|ast|5|Colgo l'occasione per un auspicio.|Aprovecho la ocasión para un augurio.|g=m;p=auspici;r=for
ausilio|auxilio|auˈziljo|S|ast|5|Prestare ausilio alle popolazioni colpite.|Prestar auxilio a las poblaciones afectadas.|g=f;p=ausili;r=for
esortare|exhortar|ezorˈtare|V|cmu|5|Esorta i giovani a votare.|Exhorta a los jóvenes a votar.|c=esortare a fare;r=for
ammonire|amonestar|ammoˈnire|V|cmu|5|Il giudice ammonisce l'imputato.|El juez amonesta al acusado.|n=Io ammonisco (tipo -isc);r=for
redarguire|reprender|redarɡwire|V|cmu|5|Lo redarguì aspramente.|Lo reprendió ásperamente.|r=let
stigmatizzare|estigmatizar|stigmatitˈtsare|V|cmu|5|La commissione stigmatizza i ritardi.|La comisión estigmatiza los retrasos.|r=for
encomiare|encomiar|enkoˈmjare|V|cmu|5|Il Presidente encomia i soccorritori.|El Presidente encomia a los rescatistas.|r=for
decantare|decantar (elogiar)|dekanˈtare|V|cmu|5|Tutti decantano le sue virtù.|Todos decantan sus virtudes.|r=let;n=Anche chimica: decantare il vino
celebre|célebre|tʃeˈlɛbre|A|att|3|Un celebre verso dantesco.|Un célebre verso dantesco.|n=Pl.: celebri;a=oscuro
rinomato|renombrado|rinoˈmato|A|att|5|Un ristorante rinomato per il pesce.|Un restaurante renombrado por el pescado.
illustre|ilustre|ilˈlustre|A|att|5|Un illustre professore emerito.|Un ilustre profesor emérito.|r=let
oscuro|oscuro (ignoto)|oˈskuro|A|att|4|Un oscuro funzionario di provincia.|Un oscuro funcionario de provincia.|n=Doppio valore: senza luce (buio) e sconosciuto
emergente|emergente|emerˈdʒɛnte|A|att|4|Un talento emergente della letteratura.|Un talento emergente de la literatura.
`, "C1", "k-c1b");
