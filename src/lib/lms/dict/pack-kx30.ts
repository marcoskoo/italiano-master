import { parsePack } from "./compact";
import type { VocabWord } from "../types";

/* ── Pack K·X30 · medicina clinica e psicopatologia (C1) ──────────── */

export const PACK_KX30: VocabWord[] = parsePack(`
# ══ clinica ══
medico di base|médico de cabecera|ˈmɛːdiko di ˈbaːse|L|sla|3|Il medico di base ha dato la ricetta.|El médico de cabecera ha dado la receta.
medico curante|médico tratante|ˈmɛːdiko kuˈrante|L|sla|4|Il medico curante firma il certificato.|El médico tratante firma el certificado.
prescrizione medica|prescripción médica|preskritˈtsjone ˈmɛːdika|L|sla|4|La prescrizione medica è elettronica.|La prescripción médica es electrónica.
posologia|posología|pozoloˈdʒia|S|sla|5|La posologia sulla confezione.|La posología en el envase.|g=f
principio attivo|principio activo|prinˈtʃipio atˈtivo|L|sci|4|Il principio attivo del paracetamolo.|El principio activo del paracetamolo.
effetto collaterale|efecto secundario|efˈfetto kollateˈrale|L|sla|3|Sonnolenza come effetto collaterale.|Somnolencia como efecto secundario.
controindicazione|contraindicación|kontroindikaˈtsjone|S|sla|4|Le controindicazioni del farmaco.|Las contraindicaciones del medicamento.|g=f
interazione farmacologica|interacción farmacológica|interaˈtsjone farmakoˈlɔdʒika|L|sla|5|L'interazione farmacologica tra i due farmaci.|La interacción farmacológica entre los dos medicamentos.
farmaco generico|genérico|ˈfarmako dʒeˈneriko|L|sla|4|Il farmaco generico costa la metà.|El genérico cuesta la mitad.
tollerabilità|tolerabilidad|tollerabilitˈta|S|sla|5|Il profilo di tollerabilità del vaccino.|El perfil de tolerabilidad de la vacuna.|g=f
diagnosi differenziale|diagnóstico diferencial|diaɡˈnosi differenˈtsjale|L|sla|5|La diagnosi differenziale esclude la meningite.|El diagnóstico diferencial excluye la meningite.
prognosi riservata|pronóstico reservado|proɡˈnosi riserˈvata|L|sla|5|Dopo l'operazione la prognosi resta riservata.|Tras la operación el pronóstico sigue reservado.
anamnesi|anamnesis|anamˈneːzi|S|sla|5|L'anamnesi del paziente è accurata.|La anamnesis del paciente es minuciosa.|g=f
terapia intensiva|cuidados intensivos|teˈrapja intenˈsiva|L|sla|3|Ricoverato in terapia intensiva.|Ingresado en cuidados intensivos.
ricovero d'urgenza|ingreso urgente|riˈkovero durˈdʒentʃa|L|sla|4|Un ricovero d'urgenza per embolia.|Un ingreso urgente por embolia.
dimissione|alta (hospitalaria)|dimisˈsjone|S|sla|4|Le dimissioni sono fissate a domani.|El alta está fijada para mañana.|g=f;p=dimissioni
cartella clinica|historia clínica|karˈtella ˈklinika|L|sla|3|La cartella clinica è stata acquisita agli atti.|La historia clínica ha sido incorporada a las actuaciones.
consulenza medica|consulta médica|konsuˈlenza ˈmɛːdika|L|sla|4|Ha chiesto una consulenza medica per iscritto.|Ha pedido una consulta médica por escrito.
consenso informato|consentimiento informado|konˈsenso inforˈmato|L|sla|4|Prima dell'operazione firmano il consenso informato.|Antes de la operación firman el consentimiento informato.
malattia cronica|enfermedad crónica|malaˈttia ˈkronika|L|sla|3|Vive con una malattia cronica da anni.|Vive con una enfermedad crónica desde hace años.
malattia degenerativa|enfermedad degenerativa|malaˈttia dedʒeneraˈtiva|L|sla|4|Le malattie degenerative del sistema nervoso.|Las enfermedades degenerativas del sistema nervioso.
patologia|patología|patoˈlɔdʒia|S|sla|3|La patologia cardiovascolare.|La patología cardiovascular.|g=f;p=patologie
patologico|patológico|patoˈlɔdʒiko|A|sla|4|Un quadro patologico complesso.|Un cuadro patológico complejo.
sintomatologia|sintomatología|sintomatoˈlɔdʒia|S|sla|5|La sintomatologia del paziente è migliorata.|La sintomatología del paciente ha mejorado.|g=f
asintomatico|asintomático|asintomaˈtivo|A|sla|4|Un caso asintomatico di Covid.|Un caso asintomático de Covid.
sintomatico|sintomático|sintomaˈtivo|A|sla|4|Il paziente sintomatico va isolato.|El paciente sintomático debe aislarse.
cronico|crónico|ˈkroniko|A|sla|4|Un quadro cronico stabilizzato.|Un cuadro crónico estabilizado.
fase acuta|fase aguda|ˈfaːze aˈkuta|L|sla|4|Nella fase acuta serve il riposo.|En la fase aguda hace falta reposo.
remissione|remisión|remisˈsjone|S|sla|4|La malattia è in remissione.|La enfermedad está en remisión.|g=f;p=remissioni
recidiva|recaída|retʃiˈdiva|S|sla|4|Dopo un anno la recidiva del tumore.|Tras un año la recaída del tumor.|g=f;p=recidive
metastasi|metástasis|meˈtastasi|S|sla|4|Le metastasi al fegato.|Las metástasis al hígado.|g=f
benigno|benigno|beˈniɲɲo|A|sla|4|Un nodulo benigno alla tiroide.|Un nódulo benigno en el tiroides.
biopsia|biopsia|bjoˈopsja|S|sla|4|La biopsia ha escluso la neoplasia.|La biopsia ha excluido la neoplasia.|g=f
agoaspirato|punción aspiración|aɡoaspiˈrato|S|sla|5|L'agoaspirato della lesione sospetta.|La punción aspiración de la lesión sospechosa.|g=m;p=agoaspirati;r=tec
lesione|lesión|leˈsjone|S|sla|3|Una lesione al legamento crociato.|Una lesión en el ligamento cruzado.|g=f;p=lesioni
frattura scomposta|fractura desplazada|fratˈtura skomˈpɔsta|L|cor|4|La radiografia mostra una frattura scomposta.|La radiografía muestra una fractura desplazada.
lussazione|luxación|lussaˈtsjone|S|cor|4|La lussazione della spalla.|La luxación del hombro.|g=f;p=lussazioni
distorsione|esguince|distorˈsjone|S|cor|4|Una distorsione alla caviglia.|Un esguince en el tobillo.|g=f
stiramento muscolare|distensión muscular|stiraˈmento muskolaˈre|L|cor|4|Stiramento muscolare al femorale.|Distensión muscular en el femoral.
contrattura|contractura|kontratˈtura|S|cor|4|Una contrattura al polpaccio.|Una contractura en la pantorrilla.|g=f;p=contratture
strappo muscolare|desgarro muscular|ˈstrappo muskolaˈre|L|cor|4|Uno strappo muscolare lo ferma due mesi.|Un desgarro muscular lo detiene dos meses.
infarto|infarto|inˈfarto|S|sla|3|L'infarto miocardico acuto.|El infarto agudo de miocardio.|g=m;p=infarti
ictus|ictus|ˈiktus|S|sla|3|Un ictus ischemico.|Un ictus isquémico.|g=m
ischemico|isquémico|isˈkemiko|A|sla|5|Un episodio ischemico transitorio.|Un episodio isquémico transitorio.|r=tec
trombosi|trombosis|tromˈboːsi|S|sla|4|La trombosi venosa profonda.|La trombosis venosa profunda.|g=f
embolia|embolia|emˈbɔlja|S|sla|5|Un'embolia polmonare da scongiurare.|Una embolia pulmonar que evitar.|g=f;p=embolie
aneurisma|aneurisma|aneuˈrizma|S|sla|5|L'aneurisma aortico addominale.|El aneurisma aórtico abdominal.|g=m;p=aneurismi
ipertensione|hipertensión|ipertenˈsjone|S|sla|4|L'ipertensione arteriosa essenziale.|La hipertensión arterial esencial.|g=f
ipotensione|hipotensión|ipotenˈsjone|S|sla|5|Colpa di ipotensione ortostatica.|Culpa de hipotensión ortostática.|g=f
diabete|diabetes|diaˈbeːte|S|sla|3|Il diabete di tipo due.|La diabetes de tipo dos.|g=m
diabetico|diabético|diaˈbeːtiko|A|sla|4|Il piede diabetico è una complicanza.|El pie diabético es una complicación.
insulina|insulina|insuˈlina|S|sla|4|La pompa per l'insulina.|La bomba de insulina.|g=f
glicemia|glucemia|ɡlitʃeˈmia|S|sla|4|La glicemia a digiuno.|La glucemia en ayunas.|g=f
colesterolo|colesterol|kolesteˈroːlo|S|sla|3|Il colesterolo LDL è alto.|El colesterol LDL está alto.|g=m
trigliceridi|triglicéridos|triɡlitʃeˈridi|S|sla|5|I trigliceridi fuori scala.|Los triglicéridos por las nubes.|g=m
anemia|anemia|aneˈmia|S|sla|4|Un'anemia da carenza di ferro.|Una anemia por carencia de hierro.|g=f
leucemia|leucemia|leuˈtʃeːmia|S|sla|4|Ha vinto la leucemia a sei anni.|Venció la leucemia a los seis años.|g=f
linfoma|linfoma|linˈfoma|S|sla|5|Il linfoma di Hodgkin.|El linfoma de Hodgkin.|g=m;p=linfomi
tumore|tumor|tuˈmoːre|S|sla|3|Il tumore al pancreas resta tremendo.|El tumor de páncreas sigue siendo terrible.|g=m;p=tumori
oncologo|oncólogo|onˈkɔloɡo|S|sla|4|L'oncologo spiega il protocollo.|El oncólogo explica el protocolo.|g=m;p=oncologi
oncologia|oncología|onkoloˈdʒia|S|sla|4|L'oncologia di precisione.|La oncología de precisión.|g=f
radioterapia|radioterapia|rajoteraˈpia|S|sla|4|La radioterapia post-operatoria.|La radioterapia postoperatoria.|g=f
palliazione → no; cure palliative|cuidados paliativos|ˈkure palljaˈtive|L|sla|4|Il reparto di cure palliative.|La unidad de cuidados paliativos.
analisi del sangue|análisis de sangre|anaˈlizi del ˈsaŋɡwe|L|sla|3|Le analisi del sangue sono nella norma.|Los análisis de sangre están normales.
emocromo|hemograma|emoˈkromo|S|sla|5|L'emocromo con formula leucocitaria.|El hemograma con fórmula leucocitaria.|g=m;p=emocromi;r=tec
radiografia|radiografía|rajoɡraˈfia|S|sla|3|La radiografia del torace.|La radiografía de tórax.|g=f
tac|TAC|tak|S|sla|3|La tac con contrasto.|La TAC con contraste.|g=f;n=Sigla anglicizzata, si pronuncia "tac"
risonanza magnetica|resonancia magnética|rizoˈnanza maɲˈɲetika|L|sla|4|La risonanza magnetica esclude la lesione.|La resonancia magnética excluye la lesión.
eco|ecografía|ˈɛːko|S|sla|3|L'eco addominale è pulita.|La ecografía abdominal está limpia.|g=f;p=eco;n=Ellissi di "ecografia"
ecografia|ecografía|ekoɡraˈfia|S|sla|3|L'ecografia in gravidanza.|La ecografía en el embarazo.|g=f
endoscopia|endoscopia|endoskoˈpia|S|sla|5|L'endoscopia con sedazione.|La endoscopia con sedación.|g=f
colonscopia|colonoscopia|kolonˈskopia|S|sla|5|La colonscopia ogni dieci anni dai 50.|La colonoscopia cada diez años desde los 50.|g=f
anestesia totale|anestesia general|anesteˈzia totˈtale|L|sla|4|Sotto anestesia totale per sei ore.|Bajo anestesia general durante seis horas.
anestesia locale|anestesia local|anesteˈzia loˈkale|L|sla|4|Basta l'anestesia locale per la sutura.|Basta la anestesia local para la sutura.
sedazione|sedación|sedatˈtsjone|S|sla|4|La sedazione cosciente in endoscopia.|La sedación consciente en endoscopia.|g=f
sala operatoria|quirófano|ˈsala operaˈtorja|L|sla|3|Portatelo subito in sala operatoria.|Llevadlo enseguida al quirófano.
bisturi|bisturí|biˈsturi|S|sla|4|Il bisturi del chirurgo tremava? Mai.|¿El bisturí del cirujano temblaba? Jamás.|g=m;p=bisturi
chirurgo|cirujano|kiˈrurɡo|S|pro|3|Il chirurgo ha salvato la gamba.|El cirujano ha salvado la pierna.|g=m;p=chirurghi
sutura|sutura|suˈtura|S|sla|5|Dieci punti di sutura al mento.|Diez puntos de sutura en la barbilla.|g=f;p=suture
punto di sutura|punto de sutura|ˈpunto di suˈtura|L|sla|4|Hanno tolto i punti di sutura.|Han quitado los puntos de sutura.
ingessatura|escayolado|indʒessaˈtura|S|cor|4|L'ingessatura per sei settimane.|El escayolado durante seis semanas.|g=f
stampella|muleta|stamˈprella|S|cor|4|Cammina con le stampelle.|Camina con muletas.|g=f;p=stampelle
riabilitazione|rehabilitación|riabilitatˈtsjone|S|sla|3|La riabilitazione dopo l'ictus.|La rehabilitación tras el ictus.|g=f
fisioterapia|fisioterapia|fizjoteraˈpia|S|sla|4|Due sedute di fisioterapia a settimana.|Dos sesiones de fisioterapia por semana.|g=f
fisioterapista|fisioterapeuta|fizjoteraˈpista|S|pro|4|Il fisioterapista lavora sul ginocchio.|El fisioterapeuta trabaja la rodilla.|g=m;p=fisioterapisti
# ══ psicopatologia ══
disturbo d'ansia|trastorno de ansia|diˈsturbo danˈsia|L|emo|4|Il disturbo d'ansia generalizzato.|El trastorno de ansia generalizada.
attacco di panico|ataque de pánico|atˈtacco di ˈpaniko|L|emo|3|Il primo attacco di panico in metro.|El primer ataque de pánico en el metro.
depressione clinica|depresión clínica|depreʃˈʃjone ˈklinika|L|emo|4|Una depressione clinica diagnosticata.|Una depresión clínica diagnosticada.
disturbo ossessivo-compulsivo|trastorno obsesivo-compulsivo|diˈsturbo osseʃˈʃivo kompulˈsivo|L|emo|5|Il DOC si cura con la TCC.|El TOC se trata con TCC.
anoressia|anorexia|anoˈrɛssja|S|emo|4|L'anoressia nervosa tra le adolescenti.|La anorexia nerviosa entre las adolescentes.|g=f
bulimia|bulimia|buˈlimja|S|emo|4|La bulimia si nasconde bene.|La bulimia se esconde bien.|g=f
disturbo bipolare|trastorno bipolar|diˈsturbo bipoˈlare|L|emo|4|Il disturbo bipolare di tipo uno.|El trastorno bipolar de tipo uno.
psicosi|psicosis|psiˈkoːsi|S|emo|5|Un episodio psicotico acuto.|Un episodio psicótico agudo.|g=f
dissociazione|disociación|dissotsjaˈtsjone|S|emo|5|I disturbi dissociativi di identità.|Los trastornos disociativos de identidad.|g=f
trauma infantile|trauma infantil|ˈtrauma infanˈtile|L|emo|4|Un trauma infantile non elaborato.|Un trauma infantil no elaborado.
disturbo post-traumatico da stress|trastorno de estrés postraumático|diˈsturbo posttrauˈmatiko da ˈstrɛss|L|emo|5|Il PTSD nei veterani.|El TEPT en los veteranos.
resilienza|resiliencia|reziljɛnˈtsa|S|emo|4|La resilienza si allena.|La resiliencia se entrena.|g=f
elaborazione del lutto|elaboración del duelo|elaboraˈtsjone del ˈlutto|L|emo|4|L'elaborazione del lutto richiede tempo.|La elaboración del duelo requiere tiempo.
psicoterapia|psicoterapia|psikoteraˈpia|S|emo|4|La psicoterapia della Gestalt.|La psicoterapia de la Gestalt.|g=f
terapia cognitivo-comportamentale|terapia cognitivo-conductual|teˈrapja koɲˈɲitivo komportaˈmentale|L|emo|5|La TCC in dieci sedute.|La TCC en diez sesiones.
psicofarmaco|psicofármaco|psikoˈfarmako|S|emo|5|Lo psicofarmaco va prescritto con cautela.|El psicofármaco debe prescribirse con cautela.|g=m;p=psicofarmaci
ansiolitico|ansiolítico|anzjoliˈtiko|S|emo|5|Un ansiolitico prima dell'esame.|Un ansiolítico antes del examen.|g=m;p=ansiolitici
antidepressivo|antidepresivo|antidepreʃˈʃivo|S|emo|4|Gli antidepressivi fanno effetto dopo settimane.|Los antidepresivos hacen efecto tras semanas.|g=m;p=antidepressivi
stabilizzatore dell'umore|estabilizador del ánimo|stabilitˈtsatore delˈlˈumore|L|emo|5|Il litio come stabilizzatore dell'umore.|El litio como estabilizador del ánimo.
`, "C1", "k-x30");
