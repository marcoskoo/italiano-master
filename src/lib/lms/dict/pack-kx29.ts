import { parsePack } from "./compact";
import type { VocabWord } from "../types";

/* ── Pack K·X29 · diritto, tribunali e processi (B2) ──────────── */

export const PACK_KX29: VocabWord[] = parsePack(`
# ══ tribunali e procedura ══
pretore|pretor|preˈtore|S|ist|5|Il pretore convocò le parti.|El pretor convocó a las partes.|g=m;p=pretori
giudice istruttore|juez instructor|ˈdʒuditʃe istrutˈtore|L|ist|5|Il giudice istruttore ha riaperto le indagini.|El juez instructor ha reabierto la investigación.
giudice di pace|juez de paz|ˈdʒuditʃe di ˈpatʃe|L|ist|4|La causa è finita davanti al giudice di pace.|La causa ha acabado ante el juez de paz.
giudice tutelare|juez tutelar|ˈdʒuditʃe tutеˈlare|L|ist|5|Il giudice tutelare nomina l'amministratore di sostegno.|El juez tutelar nombra al administrador de apoyo.
procuratore|fiscal|prokuraˈtore|S|ist|3|Il procuratore capo ha indetto una conferenza.|El fiscal jefe ha convocado una rueda de prensa.|g=m;p=procuratori
pm|fiscal (abbr.)|piˈɛmme|S|ist|4|Il pm ha chiesto 20 anni.|El fiscal ha pedido 20 años.|g=m;n=Abreviación de "pubblico ministero"
pubblico ministero|ministerio público|ˈpubbliko minisˈtero|L|ist|4|Il pubblico ministero esercita l'azione penale.|El ministerio público ejerce la acción penal.
gip|juez de instrucción|dʒip|S|ist|4|Il gip ha convalidato l'arresto.|El juez de instrucción ha convalidado la detención.|g=m;n=Sigla di "giudice per le indagini preliminari"
gup|juez del juicio preliminar|ɡup|S|ist|5|Il gup ha fissato l'udienza.|El juez del juicio preliminar ha fijado la vista.|g=m;n=Sigla di "giudice dell'udienza preliminare"
udienza preliminare|vista preliminar|udjenˈtsa prelimiˈnare|L|ist|5|All'udienza preliminare si decide il rinvio a giudizio.|En la vista preliminar se decide el procesamiento.
rinvio a giudizio|procesamiento|rinˈvio a dʒudiˈtsjo|L|ist|4|Il rinvio a giudizio per concorso in bancarotta.|El procesamiento por concurso de quiebra.
capo d'imputazione|cargo de imputación|ˈkapo dimputaˈtsjone|L|ist|5|Il capo d'imputazione è stato modificato.|El cargo de imputación ha sido modificado.
reo|reo|ˈrɛːo|S|ist|4|Il reo confesso ha patteggiato.|El reo confeso ha negociado la pena.|g=m;p=rei
reo confesso|reo confeso|ˈrɛːo konˈfesso|L|ist|5|Il reo confesso ha indicato i complici.|El reo confeso ha señalado a los cómplices.
registro delle notizie di reato|registro de causas|ˈredʒistro delle ˈnotitsie di ˈreato|L|ist|5|L'iscrizione nel registro delle notizie di reato.|La inscripción en el registro de causas.
in flagranza|en flagrancia|in flaɡranˈtsa|E|ist|5|È stato arrestato in flagranza.|Ha sido detenido en flagrancia.|r=for
custodia cautelare|prisión preventiva|kustˈtodja kautеˈlare|L|ist|4|Il gip ha disposto la custodia cautelare.|El juez ha dispuesto la prisión preventiva.
detenuto|detenido|deteˈnuto|S|ist|3|I detenuti hanno protestato per le condizioni.|Los detenidos han protestado por las condiciones.|g=m;p=detenuti
libertà provvisoria|libertad provisional|liberˈta provviˈzorja|L|ist|4|Ha ottenuto la libertà provvisoria.|Ha obtenido la libertad provisional.
misure cautelari|medidas cautelares|ˈmisure kautеˈlari|L|ist|4|Il giudice ha applicato le misure cautelari.|El juez ha aplicado las medidas cautelares.
obbligo di firma|obligación de firmar|obˈbliɡo di ˈfirma|L|ist|4|Gli è stato imposto l'obbligo di firma.|Le ha sido impuesta la obligación de firmar.
arresti domiciliari|arresto domiciliario|arˈrɛsti domiˈtʃiljari|L|ist|3|Sotto arresti domiciliari da sei mesi.|Bajo arresto domiciliario desde hace seis meses.
ergastolo|cadena perpetua|erɡaˈstolo|S|ist|4|Condannato all'ergastolo per omicidio.|Condenado a cadena perpetua por homicidio.|g=m
pena detentiva|pena privativa de libertad|ˈpena detentiˈva|L|ist|4|La pena detentiva è stata ridotta.|La pena privativa de libertad ha sido reducida.
pena pecuniaria|pena pecuniaria|ˈpena pekunjaˈrja|L|ist|5|Per i reati minori si applica la pena pecuniaria.|Para los delitos menores se aplica la pena pecuniaria.
ammenda|multa|amˈmenda|S|ist|3|Ammenda di 5 mila euro per i motoscafi.|Multa de 5 mil euros por las lanchas.|g=f;p=ammende
sanzione amministrativa|sanción administrativa|sanˈtsjone amminiˈstrativa|L|ist|3|Una sanzione amministrativa da 300 euro.|Una sanción administrativa de 300 euros.
confisca|decomiso|konˈfiska|S|ist|4|La confisca dei beni del boss.|El decomiso de los bienes del jefe.|g=f;p=confische
sequestro preventivo|embargo preventivo|seˈkwestro prevenˈtivo|L|ist|4|Il sequestro preventivo degli immobili.|El embargo preventivo de los inmuebles.
reiato → no; reato|delito|reˈato|S|ist|3|Il reato di diffamazione è procedibile a querela.|El delito de difamación es perseguible a instancia de parte.|g=m;p=reati
reato|delito|reˈato|S|ist|3|Il reato di diffamazione a mezzo stampa.|El delito de difamación a través de prensa.|g=m;p=reati
reato continuato|delito continuado|reˈato kontinuaˈto|L|ist|5|Il concorso di reati è stato rivalutato come reato continuato.|El concurso de delitos ha sido recalificado como delito continuado.
bustarella|soborno|bustаˈrɛlla|S|ist|4|Ha accettato una bustarella da 10 mila euro.|Ha aceptado un soborno de 10 mil euros.|g=f;p=bustarelle;r=col
tangente|comisión (soborno)|tanˈdʒente|S|ist|4|Le tangenti sugli appalti pubblici.|Las comisiones en los contratos públicos.|g=f;p=tangenti
mazzetta|mordida|mazˈzetta|S|ist|4|La mazzetta al funzionario per l'appalto.|La mordida al funcionario por el contrato.|g=f;p=mazzette;r=col
appalto|contratación pública|apˈpalto|S|ist|4|L'appalto truccato per l'autostrada.|La contratación amañada para la autopista.|g=m;p=appalti
gara d'appalto|licitación|ˈɡara dapˈpalto|L|ist|4|La gara d'appalto è stata annullata.|La licitación ha sido anulata.
gara truccata|licitación amañada|ˈɡara trutˈtʃata|L|ist|5|Un sistema di gare truccate.|Un sistema de licitaciones amañadas.
peculato|peculado|pekuˈlato|S|ist|5|Il funzionario è indagato per peculato.|El funcionario está investigado por peculado.|g=m;p=peculati
abuso d'ufficio|abuso de cargo|aˈbuːzo dufˈfitʃjo|L|ist|4|L'abuso d'ufficio è reato dal 2001.|El abuso de cargo es delito desde 2001.
abuso di potere|abuso de poder|aˈbuːzo di poˈtere|L|ist|4|Denuncia per abuso di potere.|Denuncia por abuso de poder.
riciclaggio di denaro sporco|blanqueo de capitales|ritʃiˈladdʒo di deˈnero ˈsporko|L|ist|4|Indagati per riciclaggio di denaro sporco.|Investigados por blanqueo de capitales.
denaro sporco|dinero sucio|deˈnero ˈsporko|L|ist|4|Il circuito del denaro sporco.|El circuito del dinero sucio.
falso in bilancio|falseamiento de cuentas|ˈfalso in biˈlantʃo|L|ist|5|Gli amministratori sono accusati di falso in bilancio.|Los administradores están acusados de falsear las cuentas.
falsario|falsificador|falˈzarjo|S|ist|5|Il falsario riproduceva firme perfette.|El falsificador reproducía firmas perfectas.|g=m;p=falsari
furto d'auto|robo de coches|ˈfurto dˈauto|L|ist|4|I furti d'auto sono calati.|Los robos de coches han bajado.
rapina|atracamiento|raˈpina|S|ist|3|Una rapina in pieno giorno.|Un atraco a plena luz del día.|g=f;p=rapine
scippo|tirón|ˈʃippo|S|ist|4|Lo scippo della borsa in centro.|El tirón del bolso en el centro.|g=m;p=scippi;r=col
truffatore|estafador|truffaˈtore|S|ist|3|Il truffatore ha ingannato decine di anziani.|El estafador ha engañado a decenas de ancianos.|g=m;p=truffatori
truffatrice|estafadora|truffaˈtritʃe|S|ist|4|La truffatrice sfruttava i sentimenti.|La estafadora explotaba los sentimientos.|g=f;p=truffatrici
circolo vizioso|círculo vicioso|ˈtʃirkolo viˈtsjoso|L|cnn|4|Il circolo vizioso del debito.|El círculo vicioso de la deuda.
vittimologia|victimología|vittimoloˈdʒia|S|ist|5|La vittimologia studia il ruolo della vittima.|La victimología estudia el papel de la víctima.|g=f
testimone oculare|testigo ocular|testiˈmone okulaˈre|L|ist|4|Un testimone oculare ha descritto la scena.|Un testigo ocular ha descrito la escena.
referto|informe forense|reˈferto|S|ist|4|Il referto del medico legale.|El informe del médico forense.|g=m;p=referti
medico legale|médico forense|ˈmɛːdiko leˈɡale|L|sla|4|Il medico legale ha stabilito la causa della morte.|El médico forense ha establecido la causa de la muerte.
autopsia|autopsia|auˈtopsja|S|sla|4|L'autopsia ha confermato l'avvelenamento.|La autopsia ha confirmado el envenenamiento.|g=f
esame autoptico|examen autópsico|eˈzame autoptiko|L|sla|5|L'esame autoptico è disposto dalla procura.|El examen autópsico es dispuesto por la fiscalía.
prova indiziaria|prueba indiciaria|ˈprova inditˈtsjarja|L|ist|4|Il caso si regge su prove indiziarie.|El caso se sostiene sobre pruebas indiciarias.
prova documentale|prueba documental|ˈprova dokumentaˈle|L|ist|4|Le prove documentali hanno deciso il processo.|Las pruebas documentales han decidido el proceso.
indizio grave|indicio grave|inˈditsjo ˈɡrave|L|ist|5|Indizi gravi, precisi e concordanti.|Indicios graves, precisos y concordantes.|r=for
alibi|coartada|ˈalibi|S|ist|4|Il suo alibi non regge.|Su coartada no se sostiene.|g=m;p=alibi
istruttoria|instrucción (fase)|istrutˈtorja|S|ist|4|L'istruttoria si è chiusa in sei mesi.|La instrucción se ha cerrado en seis meses.|g=f
sentenza di primo grado|sentencia de primera instancia|senˈtentsa di ˈprimo ˈɡrade|L|ist|4|La sentenza di primo grado è stata appellata.|La sentencia de primera instancia ha sido apelada.
grado di giudizio|instancia|ˈɡrado di dʒudiˈtsjo|L|ist|4|La causa passa al secondo grado di giudizio.|La causa pasa a la segunda instancia.
cassazione|casación|kassaˈtsjone|S|ist|4|La cassazione ha annullato la sentenza.|La casación ha anulado la sentencia.|g=f
ricorso in cassazione|recurso de casación|rikˈkorso in kassaˈtsjone|L|ist|4|Il ricorso in cassazione è stato accolto.|El recurso de casación ha sido estimado.
annullamento con rinvio|anulación con reenvío|annullaˈmento kon rinˈvio|L|ist|5|La decisione: annullamento con rinvio.|La decisión: anulación con reenvío.
prescrizione|prescripción (extinción)|preskritˈtsjone|S|ist|4|I reati sono caduti in prescrizione.|Los delitos han prescrito.|g=f
cadere in prescrizione|prescribirse|kaˈdere in preskritˈtsjone|E|ist|4|Il reato è caduto in prescrizione.|El delito ha prescrito.
impugnabile|impugnable|impunˈɲabile|A|ist|5|La sentenza non è impugnable.|La sentencia no es impugnable.|r=tec
inappellabile|inapelable|inappelˈlabbile|A|ist|5|Il verdetto è inappellabile.|El veredicto es inapelable.|r=for
legittimo impedimento|impedimento legítimo|ledˈdʒitimo impediˈmento|L|ist|5|Ha invocato il legittimo impedimento in parlamento.|Ha invocado el impedimento legítimo en el parlamento.
immunità parlamentare|inmunidad parlamentaria|immuˈnita parlaˈmentare|L|ist|4|L'immunità parlamentare protegge i deputati.|La inmunidad parlamentaria protege a los diputados.
`, "B2", "k-x29");
