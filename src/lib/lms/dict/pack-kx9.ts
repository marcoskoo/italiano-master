import { parsePack } from "./compact";
import type { VocabWord } from "../types";

/* ── Pack K·X9 · mega reposición final (A2→B2) ─────────────────────── */

export const PACK_KX9: VocabWord[] = parsePack(`
# ══ lavoro d'ufficio extra ══
fotocopia|fotocopia|fotokopia|S|lav|4|Dieci fotocopie del contratto.|Diez fotocopias del contrato.|g=f;p=fotocopie
timbrare|sellar (timbrar)|timbrare|V|lav|4|Timbra il cartellino alle nove.|Marca el reloj a las nueve.|c=cartellino
cartellino|reloj controlador|kartelˈlino|S|lav|5|Il cartellino timbrato all'ingresso.|El reloj controlador marcado en la entrada.|g=m;p=cartellini
badge|carné (credencial)|badʒe|S|lav|4|Il badge aziendale smagnetizzato.|El carné empresarial desmagnetizado.|g=m;n=Invariable
turno di notte|turno de noche|turno di nɔtte|L|lav|4|Lavoro il turno di notte in ospedale.|Trabajo el turno de noche en el hospital.
straordinario retribuito|horas extra pagate|straordinaˈrio retribuito|L|lav|4|Due ore di straordinario retribuito.|Dos horas extra pagadas.
smart working|teletrabajo|smart working|L|lav|4|Faccio smart working il venerdì.|Hago teletrabajo los viernes.|n=Anglicismo italico ufficiale
riunione online|reunión en línea|riunjone online|L|lav|4|La riunione online delle dieci.|La reunión en línea de las diez.
videoconferenza|videoconferencia|videokonferɛntsa|S|lav|4|La videoconferenza col team di Milano.|La videoconferencia con el equipo de Milán.|g=f;p=videoconferenze
condividere lo schermo|compartir pantalla|kondiˈvidere lo skermo|L|tec|5|Condivido lo schermo un attimo.|Comparto la pantalla un momento.
presentazione|presentación|presentatˈtsjone|S|lav|3|La presentazione dei risultati trimestrali.|La presentación de los resultados trimestrales.|g=f;p=presentazioni
lancio|lanzamiento|lantʃo|S|lav|4|Il lancio del prodotto in primavera.|El lanzamiento del producto en primavera.|g=m;p=lanci
brainstorming|lluvia de ideas|brainstorming|S|lav|5|Un'ora di brainstorming sul nome.|Una hora de lluvia de ideas sobre el nombre.|g=m;n=Invariable
deadline|fecha límite (deadline)|dɛdlain|S|lav|5|La deadline del progetto è venerdì.|La deadline del proyecto es viernes.|g=f;n=Anglicismo, femminile;r=col
milestone|hito|mailstoun|S|lav|5|Tre milestone del progetto rispettate.|Tres hitos del proyecto cumplidos.|g=f;n=Anglicismo;r=col
budget|presupuesto|badʒɛt|S|fin|3|Il budget annuale del reparto.|El presupuesto anual del departamento.|g=m;n=Invariable
nota spese|rendición de gastos|nota ˈspeze|L|lav|4|La nota spese del viaggio di lavoro.|La rendición de gastos del viaje laboral.
rimborsare|reembolsar|rimborˈsare|V|fin|4|Rimborso le spese di trasferta.|Reembolso los gastos de viaje.|c=rimborso spese
lettera di motivazione|carta de motivación|lettra di motivatsjone|L|lav|5|La lettera di motivazione per il master.|La carta de motivación para la maestría.
referenze|referencias|referɛntse|S|lav|4|Buone referenze dal capo precedente.|Buenas referencias del jefe anterior.|g=f;n=Siempre plural
periodo di prova|período de prueba|peˈrjodo di prova|L|lav|4|Tre mesi di periodo di prova.|Tres meses de período de prueba.
recesso|retracto|retʃɛsso|S|fin|5|Il recesso entro quattordici giorni.|El retracto dentro de catorce días.|g=m;p=recessi;r=tec
garanzia|garantía|garantsia|S|cmp|3|Due anni di garanzia dell'elettrodomestico.|Dos años de garantía del electrodoméstico.|g=f;p=garanzie
garantire|garantizar|garantiˈre|V|ast|3|Garantiamo la consegna in 24 ore.|Garantizamos la entrega en 24 horas.|n=Io garantisco (tipo -isc)
spedizione|envío|spediˈtsjone|S|cmp|4|La spedizione gratuita sopra i trenta euro.|El envío gratis sobre los treinta euros.|g=f;p=spedizioni
imballo|embalaje|imballo|S|cmp|5|L'imballo in cartone riciclato.|El embalaje en cartón reciclado.|g=m;p=imballi
nastro adesivo|cinta adhesiva|nastro adeˈzivo|L|cmp|5|Il nastro adesivo per chiudere il pacco.|La cinta adhesiva para cerrar el paquete.
pluriball|pluriball|pluriball|S|cmp|5|La pluriball per avvolgere il bicchiere.|El pluriball para envolver el vaso.|g=f;n=Invariable, italismo del packaging
resa|devolución… rendimiento|reza|S|cmp|5|La resa della farina per il pane.|El rendimiento de la harina para el pan.|g=f;p=rese;n=Doble: rendimiento y devolución
resa dei conti|ajuste de cuentas|reza dei ˈkonti|L|ast|5|La resa dei conti finale del film.|El ajuste de cuentas final de la película.

# ══ salute e farmacia extra ══
pasticca|pastilla|pastiˈkka|S|sla|4|Una pasticca per la tosse secca.|Una pastilla para la tos seca.|g=f;p=pasticche
compresse|comprimidos|komˈpresse|S|sla|4|Le compresse di paracetamolo.|Los comprimidos de paracetamol.|g=f;n=Siempre plural
garza|gasa|ɡarza|S|sla|5|Una garza sterile sulla ferita.|Una gasa estéril en la herida.|g=f;p=garze
disinfettante|desinfectante|disinfetˈtante|S|sla|4|Il disinfettante per le mani.|El desinfectante para las manos.|g=m;n=Invariable
termometro|termómetro|termoˈmetro|S|sla|4|Il termometro segna trentotto.|El termómetro marca treinta y ocho.|g=m;p=termometri
mal di gola|dolor de garganta|mal di ɡola|L|sla|3|Un mal di gola fastidioso.|Un dolor de garganta fastidioso.
mal di pancia|dolor de estómago|mal di pantʃa|L|sla|3|Un mal di pancia dopo il gelato.|Un dolor de estómago tras el helado.
mal di denti|dolor de muelas|mal di ˈdenti|L|sla|3|Un mal di denti da carie.|Un dolor de muelas por caries.
carie|caries|karie|S|sla|4|Una carie da otturare.|Una caries por empastar.|g=f;p=carie;n=Invariable
otturazione|empaste|otturattsjone|S|sla|5|Un'otturazione bianca del molare.|Un empaste blanco de la muela.|g=f;p=otturazioni
filo interdentale|hilo dental|filo interdenˈtale|L|sla|5|Il filo interdentale dopo ogni pasto.|El hilo dental tras cada comida.
collutorio|enjuague bucal|kolluˈtorjo|S|sla|5|Il collutorio alla menta piperita.|El enjuague bucal de menta.|g=m;p=collutori
tampone|hisopo|tamˈpone|S|sla|5|Il tampone antigenico rapido.|El hisopo rápido del antígeno.|g=m;p=tamponi
antigenico|antigénico|antidʒɛniko|A|sla|5|Il test antigenico rapido della farmacia.|La prueba antigénica rápida de la farmacia.
mascherina|tapabocas|maskeˈrina|S|sla|3|La mascherina Ffp2 in ospedale.|El tapabocas Ffp2 en el hospital.|g=f;p=mascherine
gel disinfettante|gel desinfectante|dʒel disinfetˈtante|L|sla|4|Il gel disinfettante in borsa.|El gel desinfectante en la cartera.
dimissioni ospedaliere|alta médica|dimisˈsjoni ospedaleˈre|L|sla|5|Le dimissioni ospedaliere di domani mattina.|El alta médica de mañana en la mañana.
barella|camilla|baˈrɛlla|S|sla|5|La barella del pronto soccorso.|La camilla de la emergencia.|g=f;p=barelle
sedia a rotelle|silla de ruedas|ˈsɛdʒia a rotˈtelle|L|sla|5|La sedia a rotelle pieghevole.|La silla de ruedas plegable.
ingessato|enyesado|indʒesˈsato|A|sla|4|Il braccio ingessato di Luca.|El brazo enyesado de Luca.|n=L'ingessatura = el yeso
stampelle|muletas|stamˈpelle|S|sla|5|Cammina con le stampelle dopo l'operazione.|Camina con muletas tras la operación.|g=f;n=Siempre plural
degenza|hospitalización|deˈdʒɛntsa|S|sla|5|Una degenza di cinque giorni.|Una hospitalización de cinco días.|g=f;p=degenze
anestesia|anestesia|anesteˈzia|S|sla|5|L'anestesia totale prima dell'operazione.|La anestesia total antes de la operación.|g=f;p=anestesie
parto|parto|parto|S|fam|4|Il parto naturale in acqua.|El parto natural en el agua.|g=m;p=parti;c=dare alla luce
gravidanza|embarazo|ɡravidanˈtsa|S|fam|3|Una gravidanza serena di nove mesi.|Un embarazo sereno de nueve meses.|g=f;p=gravidanze
incinta|embarazada|inˈtʃinta|A|fam|2|Mia sorella è incinta di sei mesi.|Mi hermana está embarazada de seis meses.
ultrasuoni|ecografía|ultraˈswɔni|S|sla|5|Gli ultrasuoni del terzo mese.|La ecografía del tercer mes.|g=m;n=Siempre plural
ostetrica|obstetra|osteˈtrika|S|pro|5|L'ostetrica del consultorio.|La obstetra del consultorio.|g=f;p=ostetriche
pediatra|pediatra|pediatra|S|pro|4|Il pediatra della ASL locale.|El pediatra de la ASL local.|g=m;p=pediatri
vaccinazione|vacunación|vattsinatˈtsjone|S|sla|4|La vaccinazione antinfluenzale del bambino.|La vacunación antigripal del niño.|g=f;p=vaccinazioni

# ══ tempo e clima extra ══
brina|escarcha|brina|S|cli|5|La brina sui vetri al mattino.|La escarcha en los vidrios por la mañana.|g=f;n=Invariable
nebbiolina|neblina|nebbjoˈlina|S|cli|5|Una nebbiolina leggera sul fiume.|Una neblina leve sobre el río.|g=f;p=nebbiole
foschia|bruma|foskia|S|cli|5|La foschia della pianura padana.|La bruma de la llanura padana.|g=f;n=Invariable
burrasca|borrasca|burraˈska|S|cli|4|Una burrasca in arrivo dall'Atlantico.|Una borrasca en camino del Atlántico.|g=f;p=burrasche
ondate di caldo|olas de calor|onˈdate di kaldo|L|cli|4|Ondate di caldo record a luglio.|Olas de calor récord en julio.
ondata di freddo|ola de frío|onˈtata di freddo|L|cli|4|Un'ondata di freddo dalla Siberia.|Una ola de frío de Siberia.
tasso di umidità|tasa de humedad|tasso di umidita|L|cli|5|Il tasso di umidità all'ottanta per cento.|La tasa de humedad al ochenta por ciento.
acquazzone|chubasco|akkwaˈttsone|S|cli|3|Un acquazzone estivo improvviso.|Un chubasco estivo repentino.|g=m;p=acquazzoni
rovescio|chaparrón|roveʃʃo|S|cli|4|Un rovescio di grandine estivo.|Un chaparrón de granizo veraniego.|g=m;p=rovesci
grandine|granizo|ɡrandine|S|cli|4|La grandine danneggia le vigne.|El granizo daña las viñas.|g=f;n=Invariable
fulmine|rayo|fulmine|S|cli|4|Un fulmine caduto sul campanile.|Un rayo caído en el campanario.|g=m;p=fulmini;c=tuoni e fulmini
brezza|brisa|brɛzza|S|cli|4|Una brezza marina leggera a fine giornata.|Una brisa marina leve al final del día.|g=f;p=brezze
bufera|ventisca|bufera|S|cli|5|Una bufera di neve sull'Appennino.|Una ventisca de nieve sobre los Apeninos.|g=f;p=bufere
nevischio|aguanieve|neviˈʃkjo|S|cli|5|Un nevischio fastidioso tutto il giorno.|Un aguanieve molesto todo el día.|g=m;n=Invariable
valanga|alud|vaˈlaŋɡa|S|nat|5|Una valanga sul versante nord.|Un alud en la ladera norte.|g=f;p=valanghe;c=effetto valanga
smottamento|derrumbe (deslizamiento)|smottamento|S|nat|5|Uno smottamento sulla provinciale.|Un deslizamiento en la provincial.|g=m;p=smottamenti
`, "B1", "k-x9");
