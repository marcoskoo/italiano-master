import { parsePack } from "./compact";
import type { VocabWord } from "../types";

/* ── Pack K·X31 · economia, finanza e lavoro tecnico (B2) ─────────── */

export const PACK_KX31: VocabWord[] = parsePack(`
# ══ macroeconomia ══
prodotto interno lordo|producto interior bruto|proˈdotto interˈno ˈlordo|L|fin|4|Il PIL italiano cresce dello 0,8%.|El PIB italiano crece un 0,8%.
pil|PIB|pil|S|fin|3|Il pil pro capite in calo.|El PIB per cápita a la baja.|g=m;n=Sigla di "prodotto interno lordo"
deflazione|deflación|deflaˈtsjone|S|fin|5|Il rischio deflazione spaventa la Bce.|El riesgo deflación asusta al BCE.|g=f
stagflazione|estanflación|staɡflaˈtsjone|S|fin|5|La stagflazione degli anni Settanta.|La estanflación de los años setenta.|g=f
ripresa|recuperación|riˈpreːsa|S|fin|3|La ripresa dopo il Covid è stata a scatti.|La recuperación tras el Covid fue a tirones.|g=f;p=riprese
decollo económico → no; decollo economico|despegue económico|deˈkɔllo ekoˈnomiko|L|fin|5|Il decollo economico del dopoguerra.|El despegue económico de la posguerra.
stagnazione|estancamiento|staɲɲaˈtsjone|S|fin|4|Dieci anni di stagnazione dei salari.|Diez años de estancamiento salarial.|g=f
congiunturale|coyuntural|kondʒuntuˈrale|A|fin|5|Un fattore congiunturale e non strutturale.|Un factor coyuntural y no estructural.|r=for
strutturale|estructural|struttuˈrale|A|fin|3|Le riforme strutturali del mercato del lavoro.|Las reformas estructurales del mercado laboral.|r=for
ciclo economico|ciclo económico|ˈtʃikolo ekoˈnomiko|L|fin|4|Le fasi del ciclo economico.|Las fases del ciclo económico.
disavanzo|déficit|dizaˈvantso|S|fin|4|Il disavanzo commerciale si allarga.|El déficit comercial se ensancha.|g=m;p=disavanzi
avanzo|superávit|aˈvantso|S|fin|4|L'avanzo primario della Germania.|El superávit primario de Alemania.|g=m;p=avanzi
avanzo primario|superávit primario|aˈvantso primaˈrjo|L|fin|5|L'Italia quest'anno registra l'avanzo primario.|Italia este año registra superávit primario.
deficit|déficit|deˈfitsit|S|fin|3|Il deficit al 3% del pil.|El déficit al 3% del PIB.|g=m;n=Italiano y español comparten el latinismo
bot|bonos a corto plazo|bɔt|S|fin|4|I bot semestrali vengono collocati.|Los bot semestrales se colocan.|g=m;n=Buoni ordinari del Tesoro
btp|bonos a largo plazo|biˈtipi|S|fin|4|I btp decennali in asta.|Los btp decenales en subasta.|g=m;n=Buoni del Tesoro poliennali
rating|calificación crediticia|ˈrating|S|fin|3|Il rating declassato a BBB.|La calificación degradada a BBB.|g=m
declassamento|degradación|deklasˈsamento|S|fin|4|Il declassamento del debito italiano.|La degradación de la deuda italiana.|g=m;p=declassamenti
agente di rating|agencia de calificación|ˈadʒente di ˈrating|L|fin|4|Le tre grandi agenzie di rating.|Las tres grandes agencias de calificación.
piazza finanziaria|plaza financiera|ˈpjattsa finantˈtsjara|L|fin|5|Milano come piazza finanziaria.|Milán como plaza financiera.
quotazione|cotización|kwotaˈtsjone|S|fin|3|La quotazione del titolo in euros.|La cotización del valor en euros.|g=f
rialzo|alza|rialˈtso|S|fin|3|Un rialzo del 2% dei titoli bancari.|Un alza del 2% de los valores bancarios.|g=m;p=rialzi
ribasso|baja|riˈbasso|S|fin|3|Il ribasso dei prezzi energetici.|La baja de los precios energéticos.|g=m;p=ribassi
speculazione|especulación|spekulaˈtsjone|S|fin|3|La speculazione sul debito sovrano.|La especulación sobre la deuda soberana.|g=f
speculatore|especulador|spekulaˈtore|S|fin|4|Gli speculatori scommettono al ribasso.|Los especuladores apuestan a la baja.|g=m;p=speculatori
capitalizzare|capitalizar|kapitalitˈtsare|V|fin|4|L'azienda vale 2 miliardi capitalizzati.|La empresa vale 2 mil millones capitalizada.|r=for
capitalizzazione|capitalización|kapitalittsaˈtsjone|S|fin|4|La capitalizzazione di borsa del gruppo.|La capitalización bursátil del grupo.|g=f
azionariato|accionariado|attsjoˈnarjato|S|fin|5|L'azionariato diffuso della banca.|El accionariado difuso del banco.|g=m
azionista di maggioranza|accionista mayoritario|attsjoˈnista di maddʒoˈranza|L|fin|4|L'azionista di maggioranza ha bocciato il piano.|El accionista mayoritario ha rechazado el plan.
azionista di minoranza|accionista minoritario|attsjoˈnista di minoˈranza|L|fin|4|Gli azionisti di minoranza fanno causa.|Los accionistas minoritarios demandan.
consiglio di amministrazione|consejo de administración|konˈsiʎʎo di amminiˈstraˈtsjone|L|lav|3|Il consiglio di amministrazione approva il bilancio.|El consejo de administración aprueba las cuentas.
amministratore delegato|director general (delegado)|amministraˈtore deleˈɡato|L|lav|3|L'amministratore delegato presenta le dimissioni.|El director general presenta la dimisión.
ad|director general (sigla)|aˈdi|S|lav|4|L'ad parla ai sindacati.|El director general habla con los sindicatos.|g=m;n=Sigla di "amministratore delegato"
ceo|consejero delegado|tʃiːiːˈɔ|S|lav|3|Il nuovo ceo viene da Google.|El nuevo consejero delegado viene de Google.|g=m;n=Anglicismo
cda|consejo de administración (sigla)|tʃiːdiːˈa|S|lav|4|Il cda si riunisce giovedì.|El consejo se reúne el jueves.|g=m;n=Sigla di "consiglio di amministrazione"
bilancio consolidato|balance consolidado|biˈlantʃo konsoliˈdato|L|fin|4|Il bilancio consolidato sarà pubblicato a marzo.|El balance consolidado será publicado en marzo.
bilancio preventivo|presupuesto|biˈlantʃo prevenˈtivo|L|fin|4|Il bilancio preventivo per il 2027.|El presupuesto para 2027.
esercizio fiscale|ejercicio fiscal|eˈzertʃitʃjo fiˈskale|L|fin|4|L'esercizio fiscale si chiude a dicembre.|El ejercicio fiscal se cierra en diciembre.
utile netto|beneficio neto|ˈutile ˈnetto|L|fin|4|L'utile netto per azione.|El beneficio neto por acción.
perdita secca|pérdida secca|perˈdita ˈsɛkka|L|fin|4|Il titolo ha chiuso in perdita secca.|El valor ha cerrado en pérdida secca.
cash flow|flujo de caja|kæʃ fləu|S|fin|3|Il cash flow operativo migliora.|El flujo de caja operativo mejora.|g=m;n=Anglicismo contable
liquidità|liquidez|likuiˈdita|S|fin|3|Problemi di liquidità immediati.|Problemas de liquidez inmediatos.|g=f
illequidità|iliquidez|illekwiˈdita|S|fin|5|L'illequidità dell'impresa è cronica.|La iliquidez de la empresa es crónica.|g=f
insolvenza|insolvencia|insolˈventsa|S|fin|4|L'insolvenza del debitore principale.|La insolvencia del deudor principal.|g=f
morosità|mora (impagos)|moroˈsita|S|fin|4|Le morosità in aumento nei condomini.|Los impagos en aumento en las comunidades.|g=f
debitore|deudor|debiˈtore|S|fin|3|Il debitore ha chiesto la rateizzazione.|El deudor ha pedido el fraccionamiento.|g=m;p=debitori
creditore|acreedor|krediˈtore|S|fin|3|I creditori hanno votato il piano.|Los acreedores han votado el plan.|g=m;p=creditori
sovraindebitamento|sobreendeudamiento|sovraindebitaˈmento|S|fin|5|La legge sul sovraindebitamento delle famiglie.|La ley sobre el sobreendeudamiento de las familias.|g=m
rateizzare|fraccionar (pagos)|rateitˈtsare|V|fin|4|Si può rateizzare il debito in 24 mesi.|Se puede fraccionar la deuda en 24 meses.
mutuo a tasso variabile|hipoteca a interés variable|ˈmutuo a ˈtasso variaˈbile|L|fin|4|Il mutuo a tasso variabile pesa sul bilancio.|La hipoteca a interés variable pesa en las cuentas.
tasso fisso|interés fijo|ˈtasso ˈfisso|L|fin|3|Meglio il tasso fisso adesso?|¿Mejor el interés fijo ahora?
finanziamento|financiación|finantsjaˈmento|S|fin|3|Il finanziamento agevolato per le startup.|La financiación subvencionada para las startup.|g=m;p=finanziamenti
leasing|leasing|ˈliːziŋ|S|fin|4|Il leasing operativo per la flotta.|El leasing operativo para la flota.|g=m;n=Anglicismo
credito al consumo|crédito al consumo|ˈkredito al konˈsumo|L|fin|4|Il credito al consumo cresce a doppia cifra.|El crédito al consumo crece a doble dígito.
estinguere|extinguir|estinˈdʒere|V|fin|4|Ha estinto il mutuo in anticipo.|Ha extinguido la hipoteca por adelantado.|c=estinguere un debito
ammortamento|amortización|ammortaˈmento|S|fin|5|Il piano di ammortamento del mutuo.|El plan de amortización de la hipoteca.|g=m
accensione del mutuo|formalización de la hipoteca|attʃenˈsjone del ˈmutuo|L|fin|5|L'accensione del mutuo in banca domani.|La formalización de la hipoteca en el banco mañana.
# ══ lavoro ══
assunzione a tempo indeterminato|contratación indefinida|assunˈtsjone a ˈtɛmpo indetermiˈnato|L|lav|3|Cento assunzioni a tempo indeterminato.|Cien contrataciones indefinidas.
contratto a progetto|contrato por proyecto|konˈtratto a proˈdʒetto|L|lav|4|Il contratto a progetto è stato abolito.|El contrato por proyecto fue abolido.
lavoro precario|trabajo precario|laˈvoro preˈkarjo|L|lav|3|Una generazione di lavoro precario.|Una generación de trabajo precario.
precariato|precariedad|prekaˈrjato|S|lav|4|Il precariato dilaga tra i giovani.|La precariedad abunda entre los jóvenes.|g=m
lavatore → no; lavoratore autonomo|trabajador autónomo|lavoraˈtore auˈtɔnomo|L|lav|3|Come lavoratore autonomo paga l'iva.|Como autónomo paga el IVA.
partita iva|autónomo (alta fiscal)|ˈpartita ˈiːva|L|lav|3|Ha aperto la partita iva a gennaio.|Ha abierto el alta de autónomo en enero.|n=Literalmente "patente de IVA"
aprire la partita iva|abrir la actividad de autónomos|ˈaprire la ˈpartita ˈiːva|E|lav|4|Aprire la partita iva conviene?|¿Conviene abrir la actividad de autónomos?
riforma del lavoro|reforma laboral|rifˈfɔrma del laˈvoro|L|lav|3|La riforma del lavoro del 2012.|La reforma laboral de 2012.
cassa integrazione guadagni|prestación por desempleo parcial|ˈkassa inteɡraˈtsjone ɡwaˈdaɲɲi|L|lav|4|La cassa integrazione guadagni straordinaria.|La prestación por desempleo parcial extraordinaria.
licenziamento collettivo|despido colectivo|litʃenˈtsjamanto kolletˈtivo|L|lav|3|Licenziamento collettivo per crisi d'impresa.|Despido colectivo por crisis empresarial.
lettera di licenziamento|carta de despido|ˈlet a ra di litʃenˈtsjamanto|L|lav|4|Ha ricevuto la lettera di licenziamento.|Ha recibido la carta de despido.
prepensionamento|prejubilación|prepensionaˈmento|S|lav|4|Il prepensionamento a 58 anni.|La prejubilación a los 58 años.|g=m
pensione integrativa|pensión complementaria|penˈsjone inteɡraˈtiva|L|fin|4|La pensione integrativa in fondo pensione.|La pensión complementaria en fondo de pensiones.
trattamento di fine rapporto|indemnización por fin de contrato|trattaˈmento di ˈfine rapˈporto|L|lav|4|Il tfr maturato in dieci anni.|La indemnización por fin de contrato devengada en diez años.
tfr|indemnización fin de contrato (sigla)|tiːeffeˈerre|S|lav|4|Ha usato il tfr per l'anticipo.|Ha usado la indemnización para la entrada.|g=m;n=Trattamento di fine rapporto
rappresentanza sindacale|rappresentación sindical|rapprezenˈtan a sinˈdakale|L|lav|4|La rsu nelle aziende con più di 15 dipendenti.|La representación sindical en empresas de más de 15 empleados.
rsu|rappresentación sindical unitaria|erreˈesseˈu|S|lav|5|Le rsu hanno firmato l'accordo.|Las rsu han firmado el acuerdo.|g=f;p=rsu;n=Sigla di "rappresentanza sindacale unitaria"
contrattazione collettiva|negociación colectiva|kontrattaˈtsjone kolletˈtiva|L|lav|4|La contrattazione collettiva nazionale.|La negociación colectiva nacional.
rinnovo del contratto|renovación del convenio|rinˈnovo del konˈtratto|L|lav|3|Il rinnovo del contratto si trascina da un anno.|La renovación del convenio se arrastra desde hace un año.
piattaforma rivendicativa|plataforma reivindicativa|pjattaˈfɔrma rivendikaˈtiva|L|lav|5|La piattaforma rivendicativa dei metalmeccanici.|La plataforma reivindicativa de los metalúrgicos.
vertenza sindacale|conflicto laboral|verˈtentsa sinˈdakale|L|lav|4|La vertenza sindacale si è chiusa con l'accordo.|El conflicto laboral se cerró con el acuerdo.
astensione dal lavoro|huelga (abstención laboral)|astenˈsjone dal laˈvoro|L|lav|4|L'astensione dal lavoro delle ore 10 alle 12.|La huelga de las 10 a las 12.
picchettaggio|piquete|pikketˈtaddʒo|S|lav|5|Il picchettaggio davanti ai cancelli.|El piquete ante las puertas.|g=m;r=col
`, "B2", "k-x31");
