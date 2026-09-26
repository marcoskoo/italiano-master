import { parsePack } from "./compact";
import type { VocabWord } from "../types";

/* ── Pack K·X8 · registro formal C1 · verbos, adjetivos, banca ─────── */

export const PACK_KX8: VocabWord[] = parsePack(`
# ══ verbi formali ══
aderire|adherir|adeˈrire|V|ast|4|L'Italia aderisce al patto fiscale.|Italia adhiere al pacto fiscal.|n=Io aderisco; aderire A
adempiere|cumplir|ademˈpjɛre|V|ist|5|Adempiere agli obblighi fiscali.|Cumplir con las obligaciones fiscales.|c=adempiere a;r=for
ottemperare|dar cumplimiento|ottenemˈpare|V|ist|5|Ottempera alle normative europee.|Da cumplimiento a las normativas europeas.|r=for
espletare|despachar (realizar)|espleˈtare|V|ist|5|Espletare le pratiche dello sportello.|Despachar los trámites de la ventanilla.|r=tec
smaltire|procesar (dar salida)|smalˈtire|V|tec|5|Smaltire il backlog delle pratiche.|Procesar el atraso de trámites.|n=Io smaltisco; anche smaltire la sbornia (col)
esimersi|eximirse|eˈzimersi|V|ast|5|Non può esimersi dal testimoniare.|No puede eximirse de testificar.|c=esimersi dal;r=for
avvalersi|valerse|avvalˈlersi|V|ast|5|Si avvale del diritto al silenzio.|Se vale del derecho al silencio.|c=avvalersi di;r=for
giovare|beneficiar|dʒoˈvare|V|ast|5|Una pausa gioverebbe alla causa.|Una pausa beneficiaría la causa.|r=let;n=Impersonale: mi giova = me beneficia
nuocere|perjudicar|nwɔtʃere|V|ast|5|Il fumo nuoce alla salute.|El fumar perjudica la salud.|n=Io nuoccio; impersonale: nuoce a;r=for
arrecare|ocasionar|arreˈkare|V|ast|5|Arreca danno all'immagine dell'azienda.|Ocasiona daño a la imagen de la empresa.|r=for
recapitare|hacer llegar|rekapiˈtare|V|ist|5|Recapita il documento al destinatario.|Hace llegar el documento al destinatario.|n=Anche "desembocar": il fiume recapita nel mare
trasmettere|transmitir|trasmɛtˈtere|V|cmu|3|Trasmette la passione per la musica.|Transmite la pasión por la música.|n=Io trasmetto; participio trasmesso
inoltrare|encauzar (reenviar)|inolˈtrare|V|ist|5|Inoltra la richiesta all'ufficio competente.|Encauza la solicitud a la oficina competente.|r=for
estendere|extender|estenˈdɛre|V|ast|4|Estende il contratto di sei mesi.|Extiende el contrato seis meses.|n=Io estendo; participio esteso
prorogare|prorrogar|proroɡare|V|ist|5|Il parlamento proroga lo stato d'emergenza.|El parlamento prorroga el estado de emergencia.|r=for
revocare|revocar|revoˈkare|V|ist|5|Revocano la licenza al ristorante.|Revocan la licencia al restaurante.|r=for
abrogare|abrogar|abroɡare|V|ist|5|Abrogare la norma del 1997.|Abrogar la norma de 1997.|r=tec
impugnare|impugnar|impuɲɲare|V|ist|5|Impugna il licenziamento davanti al giudice.|Impugna el despido ante el juez.|n=Anche "empuñar": impugnare la penna;r=tec
difendere|defender|difenˈdɛre|V|ast|3|Difende i diritti dei lavoratori.|Defiende los derechos de los trabajadores.|n=Io difendo; participio difeso
testimoniare|testificar|testimoˈnjare|V|ist|5|Testimonia contro il suo ex capo.|Testifica contra su ex jefe.
deporre|declarar|deˈpɔrre|V|ist|5|Il teste depone davanti alla corte.|El testigo declara ante la corte.|r=tec;n=Anche "deponer": deporre un dittatore
convocare|convocar|konvoˈkare|V|ast|4|Convoca il consiglio per lunedì.|Convoca el consejo para el lunes.
presiedere|presidir|prezjɛˈdɛre|V|ist|5|Presiede la commissione d'esame.|Preside la comisión examinadora.|n=Io presiedo; participio presieduto
ratificare|ratificar|rattifiˈkare|V|ist|5|Il senato ratifica l'accordo di pace.|El senado ratifica el acuerdo de paz.|r=for
controfirmare|refrendar|kontrofirˈmare|V|ist|5|Il ministro controfirma il decreto.|El ministro refrenda el decreto.|r=tec
notificare|notificar|notifiˈkare|V|ist|5|Notificano il verbale al contribuente.|Notifican el acta al contribuyente.|r=tec
intimare|intimar|intiˈmare|V|ist|5|Il sindaco intima lo sgombero.|El alcalde intima el desalojo.|r=tec
sfrattare|desalojar|zfratˈtare|V|cas|5|Sfrattano l'inquilino moroso.|Desalojan al inquilino moroso.|n=Lo sfratto = el desalojo
moroso|moroso|moˈrozo|A|fin|5|Un inquilino moroso da sei mesi.|Un inquilino moroso de seis meses.|n=Anche "enamorado" letterario: lo moroso di Lucia
inadempiente|incumplido|inademˈpjɛnte|A|ist|5|La controparte inadempiente paga i danni.|La contraparte incumplida paga los daños.|r=tec

# ══ banca e assicurazioni ══
polizza|póliza|poˈlittsa|S|fin|4|La polizza auto annuale.|La póliza auto anual.|g=f;p=polizze;c=polizza vita
massimale|suma asegurada|massimaˈle|S|fin|5|Il massimale della polizza è basso.|La suma asegurada de la póliza es baja.|g=m;p=massimali;r=tec
franchigia|deducible|franjiddʒa|S|fin|5|La franchigia di duecento euro.|El deducible de doscientos euros.|g=f;p=franchigie;r=tec
sinistro|siniestro|siˈnistro|S|fin|4|Il sinistro con il paraurti.|El siniestro con el parachoques.|g=m;p=sinistri;n=Anche agg. = siniestro
paraurti|parachoques|paraˈurti|S|tra|5|Il paraurti rigenerato.|El parachoques regenerado.|g=m;n=Siempre plural
carrozzeria|carrocería|karrottseria|S|tra|4|La carrozzeria dopo l'incidente.|La carrocería tras el accidente.|g=f;p=carrozzerie
verniciatura|pintura (trabajo)|vernittʃatura|S|tra|5|Una verniciatura completa del cofano.|Una pintura completa del capó.|g=f;p=verniciature
cofano|capó|koˈfano|S|tra|5|Il cofano del motore surriscaldato.|El capó del motor sobrecalentado.|g=m;p=cofani
motore|motor|moˈtoːre|S|tec|3|Il motore diesel da due litri.|El motor diésel de dos litros.|g=m;p=motori
marcia|marcha|martʃa|S|tra|4|La prima marcia per partire.|La primera marcha para arrancar.|g=f;p=marce;c=marcia indietro
frizione|embrague|frutˈtsjone|S|tra|5|La frizione da sostituire.|El embrague por cambiar.|g=f
tachimetro|velocímetro|takiˈmetro|S|tra|5|Il tachimetro che segna 200.|El velocímetro que marca 200.|g=m;p=tachimetri
parabrezza|parabrisas|paraˈbrettstsa|S|tra|4|Il parabrezza incrinato dal sasso.|El parabrisas agrietado por la piedra.|g=m;n=Invariable
tergicristallo|limpiaparabrisas|terdʒikriˈstallo|S|tra|5|I tergicristalli consumati.|Los limpiaparabrisas gastados.|g=m;p=tergicristalli
cric|gato (herramienta)|krik|S|tra|5|Il cric nel bagagliaio.|El gato en la maletera.|g=m;n=Invariable
carburante|combustible|karburante|S|tra|4|Il carburante verde senza piombo.|El combustible verde sin plomo.|g=m;n=Invariable
distributore|grifo… estación de servicio|distriˈbuttore|S|tra|4|Il distributore self-service dell'autostrada.|La estación de servicio de la autopista.|g=m;p=distributori
self-service|autoservicio|selfservis|L|tra|5|Fai il pieno self-service stanotte.|Haz el lleno autoservicio esta noche.|n=Anglicismo en uso
rifornimento|reabastecimiento|rifornimento|S|tra|5|Una sosta di rifornimento veloce.|Una parada de reabastecimiento rápida.|g=m;p=rifornimenti
autolavaggio|autolavado|autolavaddʒo|S|tra|5|L'autolavaggio a gettoni del paese.|El autolavado a fichas del pueblo.|g=m;p=autolavaggi
gommista|llantero|ɡommiˈsta|S|pro|5|Il gommista ripara lo squarcio.|El llantero repara el desgarro.|g=m;p=gommisti
revisione dell'auto|revisión técnica|reviˈzjone delˈlˈauto|L|tra|4|La revisione biennale dell'auto.|La revisión bienal del carro.
verbale|acta|verˈbale|S|ist|5|Firmare il verbale di contravvenzione.|Firmar el acta de infracción.|g=m;p=verbali;r=tec
contravvenzione|infracción|kontravvenˈtsjone|S|ist|5|Una contravvenzione per eccesso di velocità.|Una infracción por exceso de velocidad.|g=f;p=contravvenzioni
rimozione forzata|grúa (remoción forzosa)|rimoˈtsjone forˈtsata|L|tra|5|La rimozione forzata dell'auto in zona rimozione.|La grúa del carro en zona de remoción.
zona rimozione|zona de remoción|zona rimoˈtsjone|L|tra|5|Parcheggio in zona rimozione, che guaio.|Estacionar en zona de remoción, qué lío.
zona a traffico limitato|zona de tráfico limitado|zona a traffiko limitato|L|cit|5|La zona a traffico limitato del centro storico.|La zona de tráfico limitado del centro histórico.
telepass|telepeaje|telepass|S|tra|5|Il telepass dell'autostrada.|El telepeaje de la autopista.|g=m;n=Marca registrada italica
varco|puerta de control|varko|S|cit|5|Il varco elettronico della ZTL.|La puerta electrónica del centro restringido.|g=m;p=varchi

# ══ aggettivi formali ══
effettivo|efectivo|effettiˈvo|A|ast|4|Il costo effettivo della ristrutturazione.|El costo efectivo de la remodelación.|n=Sostantivo: gli effettivi = la plantilla
presumibile|presumible|preˈzumabile|A|ast|5|Un errore presumibile vista la fretta.|Un error presumible vista la prisa.|r=for
incontestabile|incontestable|inkontesˈtabile|A|ast|5|Una vittoria incontestabile della squadra.|Una victoria incontestable del equipo.
inoppugnabile|inimpugnable|inoppuɲɲabile|A|ast|5|Prove inoppugnabili davanti alla corte.|Pruebas inimpugnables ante la corte.|r=tec
risolutivo|resolutivo|rizoluˈtivo|A|ast|5|Un intervento risolutivo sul problema.|Una intervención resolutiva en el problema.
determinante|determinante|determiˈnante|A|ast|4|Un gol determinante allo scadere.|Un gol determinante al final.|n=Anche sostantivo: il determinante
influente|influyente|influɛnte|A|ast|5|Un opinionista influente sui social.|Un opinador influyente en redes.
preponderante|preponderante|preponderante|A|ast|5|Un ruolo preponderante del nord.|Un papel preponderante del norte.|r=for
predominante|predominante|predomiˈnante|A|ast|5|Il colore predominante del quadro.|El color predominante del cuadro.
indispensabile|indispensable|indispensabile|A|ast|3|Un passaporto indispensabile per il viaggio.|Un pasaporte indispensable para el viaje.|a=superfluo
vitale|vital|vitale|A|sci|4|Un ruolo vitale nell'ecosistema.|Un papel vital en el ecosistema.
cruciale|crucial|krutʃale|A|ast|4|Una decisione cruciale per il futuro.|Una decisión crucial para el futuro.
decisivo|decisivo|deˈtʃizivo|A|ast|3|Il gol decisivo al novantesimo.|El gol decisivo en el noventa.
fatale|fatal|faˈtale|A|ast|4|Un errore fatale sul più bello.|Un error fatal en el mejor momento.|n=Anche "destinato": un uomo fatale
rovinoso|ruinoso|roviˈnozo|A|fin|5|Un incendio rovinoso per il paese.|Un incendio ruinoso para el pueblo.
devastante|devastador|devaˈstante|A|ast|4|Un'alluvione devastante in Emilia.|Una inundación devastadora en Emilia.
catastrofico|catastrófico|katastroˈfiko|A|ast|4|Un bilancio catastrofico della stagione.|Un balance catastrófico de la temporada.|c=riscaldamento catastrofico
disastroso|desastroso|disaˈstrozo|A|ast|4|Un primo tempo disastroso.|Un primer tiempo desastroso.
esemplare|ejemplar|ezemplaˈre|A|ast|5|Una condotta esemplare del capitano.|Una conducta ejemplar del capitán.|n=Anche sustantivo: l'esemplare della biblioteca
encomiabile|encomiable|enkomiabile|A|ast|5|Uno sforzo encomiabile della squadra.|Un esfuerzo encomiable del equipo.|r=for
apprezzabile|apreciable|appettsabile|A|ast|5|Un miglioramento apprezzabile dei dati.|Una mejora apreciable de los datos.
notevole|notable|notevole|A|ast|3|Un risultato notevole per un esordiente.|Un resultado notable para un debutante.|s=notevolissimo
ragguardevole|relevantísimo|raɡɡwarˈdɛvole|A|ast|5|Un patrimonio ragguardevole accumulato.|Un patrimonio relevantísimo acumulado.|r=for
imponente|imponente|impoˈnɛnte|A|ast|4|Un palazzo imponente sulla piazza.|Un palacio imponente en la plaza.
maestoso|majestuoso|maestoˈzo|A|art|4|Un tramonto maestoso sul golfo.|Un atardecer majestuoso sobre el golfo.
solenne|solemne|soˈlɛnne|A|ist|4|Una cerimonia solenne al Quirinale.|Una ceremonia solemne en el Quirinal.|c=giuramento solenne
`, "C1", "k-x8");
