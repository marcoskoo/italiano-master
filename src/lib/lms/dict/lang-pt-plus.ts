import { parsePlus } from "./plus-parse";
import type { VocabWord } from "../types";

/* ═══ v9.41 · PT Dictionary PLUS · B1→C2 (nível explícito) ══════════
   Base: lang-pt.ts (529, A1-B1). Aqui completam-se as quatro bandas
   superiores em português EUROPEU (convenções do projeto: «ao comboio»,
   «pequeno-almoço», reformar-se). `palavra` = PT-PT; `es` = espanhol. */

export const PT_PLUS: VocabWord[] = parsePlus(`
# ─── B1 · trabalho e carreira (18) ───
candidatar-se|presentarse (a un puesto)|kɐ̃didaˈtaɾ-sə|V|lav|B1|Candidatou-se ao posto de gerente.|Se presentó al puesto de gerente.|c=candidatar-se a
contratar|contratar|kõtɾaˈtaɾ|V|lav|B1|Contrataram dez pessoas em maio.|Contrataron a diez personas en mayo.
empregador|empleador|ẽplɾəɡaˈdoɾ|S|lav|B1|O empregador paga a formação.|El empleador paga la formación.
promoção|ascenso|pɾomuˈsɐ̃w̃|S|lav|B1|Recebeu uma promoção em janeiro.|Recibió un ascenso en enero.|ff=1;n=promoção também é «promoción (marketing)»: mesma grafia, dois sentidos.
turno (trabalho)|turno|ˈtuɾnu|S|lav|B1|Faço o turno da noite às segundas.|Hago el turno de noche los lunes.
horas extra|horas extra|ˈɔɾaz ˈɛtɾə|L|lav|B1|As horas extra pagam-se no fim do mês.|Las horas extra se pagan a fin de mes.
qualificado|cualificado|kwəlifiˈkadu|A|lav|B1|Está qualificado para ensinar física.|Está cualificado para enseñar física.
reformar-se|jubilarse|ʁuˈfoɾmar-sə|V|lav|B1|O meu avô reformou-se aos sessenta.|Mi abuelo se jubiló a los sesenta.|n=PT-PT: reformar-se; no Brasil, aposentar-se.
carreira|carrera profesional|kɐˈʁejɾɐ|S|lav|B1|Fez carreira no Porto.|Hizo carrera en Oporto.|ff=1;n=carreira NÃO é «carrera universitaria» (curso); é a vida profissional.
prazo|plazo|ˈpɾazu|S|lav|B1|O prazo termina segunda-feira.|El plazo termina el lunes.|c=prazo final
colega|colega de trabajo|kuˈlɛɡɐ|S|lav|B1|Um colega ajudou-me com o relatório.|Un colega me ayudó con el informe.
formação|formación|fuɾˈsɐ̃w̃|S|lav|B1|A formação dura duas semanas.|La formación dura dos semanas.
aumento (salário)|aumento de sueldo|ɐ̃ˈmɛntu|S|fin|B1|Pediu um aumento ao chefe.|Pidió un aumento al jefe.
competência|competencia (habilidad)|kõptɨˈtẽsja|S|lav|B1|Programar é uma competência útil.|Programar es una habilidad útil.|ff=1;n=competência também é «competencia (jurisdicción)»; como habilidade, usa-se muito no discurso das empresas.
entrevista de emprego|entrevista de trabajo|ẽtɾəˈvistɐ dɨ ẽˈprɛɡu|L|lav|B1|Tenho uma entrevista de emprego amanhã.|Tengo una entrevista de trabajo mañana.
experiência|experiencia|ɛʃpɨˈɾjẽsja|S|lav|B1|Tem experiência em marketing.|Tiene experiencia en marketing.|ff=1;n=experiência = vivência e também experiência profissional; não confundir com experimento (teste).
a tempo parcial|a tiempo parcial|ɐ ˈtẽpu paɾˈsjal|L|lav|B1|Trabalha a tempo parcial num café.|Trabaja a tiempo parcial en una cafetería.|a=a tempo inteiro
a tempo inteiro|a tiempo completo|ɐ ˈtẽpu ĩˈtejɾu|L|lav|B1|Procuro trabalho a tempo inteiro.|Busco trabajo a tiempo completo.|a=a tempo parcial
desempregado|en paro|dɨzẽpruˈɡadu|A|lav|B1|Esteve desempregado seis meses.|Estuvo en paro seis meses.
inquilino|inquilino|ĩkiˈlinu|S|cas|B1|O inquilino paga a renda no dia um.|El inquilino paga la renta el día uno.|n=renda (PT) = alquiler/renta; no confundir com «rendimento» (ingreso).
# ─── B1 · estudos (14) ───
licenciatura|título de grado|lisẽsiɐˈtuɾɐ|S|stu|B1|Tem uma licenciatura em química.|Tiene un título de química.|n=PT-PT: licenciatura é o grau (4 anos); no Brasil e na Espanha antiga tinha outro peso.
disciplina|asignatura|dɨsɨˈplinɐ|S|stu|B1|A minha disciplina preferida é a história.|Mi asignatura preferida es la historia.|ff=1;n=disciplina também é «disciplina (comportamento)».
semestre|semestre|sɨˈmɛʃtɾi|S|stu|B1|O semestre acaba em dezembro.|El semestre termina en diciembre.
bolsa (estudo)|beca|ˈbɔlsɐ|S|stu|B1|Ganhou uma bolsa para Coimbra.|Ganó una beca para Coimbra.|ff=1;n=bolsa é também «bolsa (mercado)» e «bolsa (saco)»: três mundos numa palavra.
formatura|graduación|fuɾˈtuɾɐ|S|stu|B1|A formatura dele foi em julho.|Su graduación fue en julio.|n=No Brasil, formatura é a cerimónia; em PT-PT, também.
aula (teórica)|clase magistral|ˈawlɐ|S|stu|B1|A aula come às nove.|La clase empieza a las nueve.|n=Em PT, aula é cada sessão; «dar uma aula» é também dar uma lição (figurado).
trabalho de casa|deberes|tɾɐˈbaʎu dɨ ˈkazɐ|L|stu|B1|O trabalho de casa entrega-se sexta.|Los deberes se entregan el viernes.|c=entregar o trabalho
investigação|investigación|ĩvɛʃtiɡɐˈsɐ̃w̃|S|sci|B1|A investigação dele foca o clima.|Su investigación se centra en el clima.|n=PT-PT: investigação científica; pesquisa é mais brasileiro.
tomar apontamentos|tomar apuntes|ˈtoɱɐɾ ɐpõˈtamẽtuʃ|L|stu|B1|Tomo apontamentos em todas as aulas.|Tomo apuntes en todas las clases.
aprovar (exame)|aprobar (un examen)|ɐpɾuˈvaɾ|V|stu|B1|Aprovou no exame à primeira.|Aprobó el examen al primer intento.|n=aprovar A/al exame: com e sem preposição, ambas ouveis-se.
chumbar (exame)|suspender (un examen)|ˈʃũmbɐɾ|V|stu|B1|Chumbou no exame de condução.|Suspendió el examen de conducir.|r=col; n=chumbar é PT-PT puro; no Brasil, «reprovar».
nota|nota|ˈnɔtɐ|S|stu|B1|Tive boa nota em biologia.|Saqué buena nota en biología.|ff=1;n=nota também é «billete» (nota de 20 euros) e «apontamento».
repasar|repasar|rɨˈpaʃaɾ|V|stu|B1|Repassei o vocabulário antes do teste.|Repasé el vocabulario antes del examen.
sugestão|sugerencia|suˈʒɛstɐ̃w̃|S|cmu|B1|Alguma sugestão para o jantar?|¿Alguna sugerencia para cenar?
# ─── B1 · viagens e dinheiro (12) ───
no estrangeiro|en el extranjero|nu ɨʃtɾɐ̃ˈʒejɾu|L|vig|B1|Quer estudar no estrangeiro.|Quiere estudiar em el extranjero.|n=PT-PT: no estrangeiro; no Brasil, «no exterior».
alfândega|aduana|aɫˈfɐ̃dɛɡɐ|S|vig|B1|Passámos a alfândega no aeroporto.|Pasamos la aduana en el aeropuerto.|ff=1;n=Em ES, «alfándega» arcaico; a palavra viva é aduana.
destino|destino|dɨʃˈtinu|S|vig|B1|O destino é o Algarve.|El destino es el Algarve.
divisa|divisa|diˈvizɐ|S|fin|B1|Qual é a divisa local?|¿Cuál es la divisa local?|ff=1;n=divisa também é «divisa (lema)»: «bandeira» em escudo de futebol.
câmbio|cambio (de dinero)|ˈkɐ̃biu|S|fin|B1|Fiz câmbio no centro.|Hice cambio de dinero en el centro.|c=casa de câmbio
ponto turístico|monumento emblemático|ˈpõtu tuˈɾiʃtiku|L|cit|B1|A torre é ponto turístico de Lisboa.|La torre es monumento emblemático de Lisboa.
turismo (visitas)|visitas turísticas|tuˈɾiʒmu|S|vig|B1|Passámos a manhã em visitas turísticas.|Pasamos la mañana de turismo.
ida e volta|ida y vuelta|ˈidɐ ˈvɔɫtɐ|L|tra|B1|Ida e volta para o Porto, se faz favor.|Ida y vuelta a Oporto, por favor.|a=só ida
só ida|solo ida|su ˈidɐ|L|tra|B1|Comprei bilhete de só ida para Braga.|Compré billete de solo ida a Braga.|a=ida e volta
atraso|retraso|ɐˈtɾazu|S|tra|B1|Houve um atraso na linha.|Hubo un retraso en la línea.
reservar (quarto)|reservar|ʁɨzɛɾˈvaɾ|V|htl|B1|Reservei quarto para duas noites.|Reservé habitación para dos noches.
consulta de rotina|revisión (médica)|kõˈsuɫtɐ dɨ ʁuˈtinɐ|L|sla|B1|Tenho uma consulta de rotina hoje.|Hoy tengo una revisión de rutina.
# ─── B1 · saúde (8) ───
sintoma|síntoma|sĩˈtɔmɐ|S|sla|B1|A febre é um sintoma comum.|La fiebre es un síntoma común.|p=sintomas
receita médica|receta|ʁɨˈsejtɐ ˈmɛdikɐ|L|sla|B1|O médico passou-me a receita.|El médico me escribió la receta.|n=«passar a receita» é a expressão PT-PT (em ES, recetar).
tratamento|tratamiento|tɾɐtɐˈmẽtu|S|sla|B1|O tratamento dura seis semanas.|El tratamiento dura seis semanas.
recuperação|recuperación|ʁəkupəɾɐˈsɐ̃w̃|S|sla|B1|A recuperação dela foi rápida.|Su recuperación fue rápida.
alergia|alergia|ɐlɛɾˈʒiɐ|S|sla|B1|Ele tem alergia a frutos secos.|Tiene alergia a los frutos secos.|p=alergias
ferido|herido|fɨˈɾidu|A|sla|B1|Um jogador ferido saiu do campo.|Un jugador herido salió del campo.
urgências|urgencias|uʁˈʒẽsjaʃ|S|sla|B1|Levaram-no às urgências.|Lo llevaron a urgencias.|p=urgências
analgésico|analgésico|ɐnɐɫˈʒɛziku|S|sla|B1|Toma um analgésico para a dor de cabeça.|Tómate un analgésico para el dolor de cabeza.
# ─── B1 · opinião e comunicação (18) ───
opinião|opinión|upiˈnjɐ̃w̃|S|cmu|B1|Na minha opinião, o filme é ótimo.|En mi opinión, la película es genial.|c=na minha opinião
ponto de vista|punto de vista|ˈpõtu dɨ viʃˈta|L|cmu|B1|Tenta ver o ponto de vista dela.|Intenta ver su punto de vista.
concordar|estar de acuerdo|kõkaɾˈdaɾ|V|cmu|B1|Concordo contigo por completo.|Estoy completamente de acuerdo contigo.|a=discordar
discordar|no estar de acuerdo|dɨʃkaɾˈdaɾ|V|cmu|B1|Discordamos sobre política.|No estamos de acuerdo sobre política.|a=concordar
sugerir|sugerir|suʒɛˈɾiɾ|V|cmu|B1|Sugiro apanhar o comboio das sete.|Sugiero tomar el tren de las siete.|n=sugerir sem «que» + subjuntivo em PT: sugiro que apanhes.
queixar-se|quejarse|kɨˈjaɾ-sə|V|cmu|B1|Queixou-se do barulho.|Se quejó del ruido.|c=queixar-se de
pedir desculpas|disculparse|ˈpediɾ dɨʃˈkuɫpaʃ|L|cmu|B1|Pedi desculpas por chegar tarde.|Me disculpé por llegar tarde.|c=pedir desculpas por
mexericar|cotillear|mɛʃɛˈɾikaɾ|V|cmu|B1|Adoram mexericar sobre os vizinhos.|Les encanta cotillear sobre los vecinos.|r=col; n=mexericar é PT-PT; «fofocar» é mais brasileiro.
rumor|rumor|ʁuˈmoɾ|S|cmu|B1|É só um rumor, não é notícia.|Es solo un rumor, no es noticia.|c=espalhar um rumor
discussão (briga)|discusión (pelea)|dɨkuʃˈsɐ̃w̃|S|rel|B1|Tiveram uma discussão por dinheiro.|Tuvieron una discusión por dinero.|ff=1;n=discussão também é «debate»: mesma ambiguidade que «discusión» em ES.
debater|debatir|dɨbɐˈteɾ|V|cmu|B1|Vamos debater o plano amanhã.|Debatamos el plan mañana.|n=Português não leva preposição: debater o plano (não «debatir sobre»).
descrever|describir|dɨʃkɾəˈveɾ|V|cmu|B1|Consegues descrever o suspeito?|¿Puedes describir al sospechoso?
prometer|prometer|pɾuˈmɛtɨɾ|V|cmu|B1|Prometo ligar-te esta noite.|Prometo llamarte esta noche.|c=cumprir uma promessa
recomendar|recomendar|ʁəkõmẽˈdaɾ|V|cmu|B1|O empregado recomendou o bacalhau.|El camarero recomendó el bacalao.
motivo|motivo|muˈtivu|S|cmu|B1|O motivo é simples: falta de tempo.|El motivo es simple: falta de tiempo.|c=por este motivo
conversa|conversación|kõˈvɛɾʃɐ|S|cmu|B1|Tivemos uma longa conversa.|Tuvimos una larga conversación.|c=ter uma conversa
fluente|con fluidez|fluˈẽtɨ|A|stu|B1|É fluente em três línguas.|Habla tres idiomas con fluidez.|c=fluente em
# ─── B1 · carácter e emoções (14) ───
orgulhoso|orgulloso|uɾɡuˈʎozu|A|emo|B1|Estou orgulhoso dos meus alunos.|Estoy orgulloso de mis alumnos.|c=orgulhoso de
desiludido|decepcionado|dɨziluˈdidu|A|emo|B1|Ficou desiludido com o resultado.|Quedó decepcionado con el resultado.|n=desiludido em PT-PT é «decepcionado»; no Brasil, «decepcionado» também.
ansioso|inquieto|ɐ̃ˈsjozu|A|emo|B1|Fico ansioso antes dos exames.|Me pongo inquieto antes de los exámenes.|ff=1;n=ansioso também é «deseoso»: ansioso por começar.
 confiante|seguro de sí mismo|kõfiˈɐ̃tɨ|A|emo|B1|Sente-se confiante com a entrevista.|Se siente segura con la entrevista.|c=confiante quanto
tímido|tímido|ˈtimiðu|A|emo|B1|É tímido com desconhecidos.|Es tímido con desconocidos.
preguiçoso|perezoso|pɾɨˈɡizozu|A|emo|B1|Não sejas preguiçoso: faz os trabalhos.|No seas perezoso: haz los deberes.|a=trabalhador
trabalhador|trabajador|tɾɐbɐˈʎaðoɾ|A|emo|B1|É trabalhadora e fiável.|Es trabajadora y fiable.|a=preguiçoso
honesto|honesto|uˈnɛʃtu|A|emo|B1|Uma resposta honesta, se faz favor.|Una respuesta honesta, por favor.|a=deshonesto
sem educação|grosero (mal educado)|sẽ̃ eduˈkaˈsɐ̃w̃|L|emo|B1|É sem educação apontar as pessoas.|Es de mala educación señalar a la gente.|n=PT-PT: ser sem educação; «rude» também existe com o sentido ES.
educado|cortés|eduˈkaðu|A|emo|B1|É sempre educado com os clientes.|Siempre es cortés con los clientes.|a=sem educação
ciumento|celoso|sjuˈmẽtu|A|emo|B1|Fica ciumento com facilidade.|Se pone celoso con facilidad.
paciente|paciente|pɐˈsjẽtɨ|A|emo|B1|Sê paciente com os miúdos.|Ten paciencia con los niños.|a=impaciente
teimoso|testarudo|tɐiˈmozu|A|emo|B1|O meu tio é muito teimoso.|Mi tío es muy testarudo.|s=cabeça dura
fiável|fiable|fiˈavəɫ|A|emo|B1|É uma amiga fiável.|Es una amiga fiable.|n=fiável é PT-PT; no Brasil, «confiável».
# ─── B2 · verbos de argumentação (20) ───
afirmar|afirmar|ɐfiɾˈmaɾ|V|cnn|B2|O estudo afirma um efeito claro.|El estudio afirma un efecto claro.
sustentar|sostener|suʃtɨˈnaɾ|V|cnn|B2|Sustentou que os dados estavam errados.|Sostuvo que los datos eran erróneos.|ff=1;n=sustentar também é «sustentar» (físico): sustentar o peso.
realçar|recalcar|ʁɐɫˈsaɾ|V|cnn|B2|O relatório realça a segurança.|El informe recalca la seguridad.|s=enfatizar
insinuar|dar a entender|ĩsĩnuˈaɾ|V|cnn|B2|Estás a insinuar que me enganei?|¿Das a entender que me equivoqué?|n=«estar a + infinitivo» é PT-PT; no Brasil, «está insinuando».
pressupor|suponer|pɾeʃupoˈɔɾ|V|cnn|B2|Vamos pressupor que o custo é fixo.|Supongamos que el coste es fijo.|s=assumir
demonstrar|demostrar|dɨmõʃˈtɾaɾ|V|sci|B2|O teste demonstrou a teoria.|La prueba demostró la teoría.
negar|negar|nɨˈɡaɾ|V|cnn|B2|Negou as acusações.|Negó las acusaciones.|c=negar que + conjuntivo
admitir|admitir|ɐdɨˈtiɾ|V|cnn|B2|Admitiu o erro.|Admitió el error.|c=admitir que
persuadir|persuadir|pɨɾsuˈdiɾ|V|cmu|B2|Persuadiram-me a ficar.|Me persuadieron para quedarme.|c=persuadir alguém a
convencer|convencer|kõvẽˈseɾ|V|cmu|B2|Convenci-a a tentar outra vez.|La convencí para intentarlo otra vez.|c=convencer a
revelar|revelar|ʁɨvɛˈlaɾ|V|att|B2|O artigo revelou o plano.|El artículo reveló el plan.|a=ocultar
denunciar|desvelar / denunciar|dɨnunˈsjaɾ|V|att|B2|O relatório denunciou a fraude.|El informe denunció el fraude.|ff=1;n=denunciar é também «denunciar à polícia»: dois registos num só verbo.
exagerar|exagerar|ɨzɐʒɛˈɾaɾ|V|cmu|B2|Não exageres os números.|No exageres las cifras.|a=minimizar
sintetizar|resumir|sĩtɨtɨˈzaɾ|V|stu|B2|Sintetiza o texto numa linha.|Resume el texto en una línea.
prever|predecir|pɾɨˈveɾ|V|sci|B2|Ninguém previu a crise.|Nadie predijo la crisis.|n=prever sem «que» quando vem substanto: prever problemas.
estimar|estimar|ɨʃtiˈmaɾ|V|fin|B2|Estimam uma subida de 5%.|Estiman una subida del 5%.|ff=1;n=estimar também é «apreciar» (estimo muito): dois sentidos.
avaliar|evaluar|ɐvɐˈljaɾ|V|stu|B2|A comissão avaliou o projeto.|El comité evaluó el proyecto.|s=avaliar
justificar|justificar|ʒuʃtifiˈkaɾ|V|cnn|B2|Como justificas a despesa?|¿Cómo justificas el gasto?
minar|minar (debilitar)|miˈnaɾ|V|cnn|B2|O escândalo minou a confiança.|El escándalo minó la confianza.|s=enfraquecer
respaldar|respaldar|ʁɨʃpaɫˈdaɾ|V|cnn|B2|Os dados respaldam a teoria.|Los datos respaldan la teoría.|n=respaldar é mais formal que «apoiar».
# ─── B2 · substantivos abstratos (26) ───
consciência (conhecimento)|conciencia (conocimento)|kõˈsjẽsja|S|ast|B2|A campanha criou consciência.|La campaña creó conciencia.|ff=1;n=consciência é «consciencia» e também «conciencia moral»; «estar consciente» é estar despierto.
impacto|impacto|ĩˈpaktu|S|ast|B2|A lei teve um enorme impacto.|La ley tuvo un enorme impacto.|c=ter impacto em
tendência|tendencia|tẽˈdẽsja|S|fin|B2|O teletrabalho é uma tendência crescente.|El teletrabajo es una tendencia al alza.|c=seguir a tendência
abordagem|enfoque|ɐboɾˈdaʒẽ|S|ast|B2|Precisamos de uma nova abordagem.|Necesitamos un nuevo enfoque.|ff=1;n=abordagem também é «acercamiento» (a abordagem do outono).
resultado (desenlace)|resultado (desenlace)|ʁizuɫˈtaðu|S|ast|B2|O resultado surpreendeu os institutos.|El resultado sorprendió a los institutos.
benefício|beneficio|bɨnifiˈsju|S|fin|B2|O plano tem benefícios claros.|El plan tiene claros beneficios.
inconveniente|inconveniente|ĩkõviniˈẽtɨ|S|ast|B2|O inconveniente principal é o preço.|El principal inconveniente es el precio.|a=vantagem
requisito|requisito|ʁɨkizitu|S|lav|B2|Português é requisito do posto.|El portugués es un requisito del puesto.|c=cumprir os requisitos
padrão|estándar|pɐˈðɾɐ̃w̃|S|ast|B2|O hotel segue padrões altos.|El hotel sigue estándares altos.|ff=1;n=padrão também é «patrón» (padrão de vestido) e «costumbre».
prova (evidência)|pruebas (evidencia)|ˈpɾɔvɐ|S|ist|B2|Há provas sólidas disso.|Hay pruebas sólidas de eso.|n=prova é também «exame» (prova de matemática) e «ensayo deportivo».
grau (medida)|grado / extensão|ɡɾaw|S|ast|B2|Até certo grau, concordo.|Hasta cierto punto, estoy de acuerdo.|c=em certa medida
perspetiva|perspectiva|pɨʃpɛtˈtivɐ|S|fin|B2|As perspetivas de emprego melhoram.|Las perspectivas de empleo mejoran.|ff=1;n=PT-PT escreve «perspetiva» (não «perspectiva»): grafia do acordo, sotaque de Lisboa.
preocupação|preocupación|pɾəkupɐˈsɐ̃w̃|S|emo|B2|A segurança é a nossa maior preocupação.|La seguridad es nuestra mayor preocupación.|c=levantar preocupações
contributo|aportación|kõtɾiˈbutu|S|ast|B2|O teu contributo importou.|Tu aportación importó.|n=PT-PT: contributo; no Brasil, «contribuição».
envolvimento|implicación|ẽvoɫviˈmẽtu|S|ast|B2|O envolvimento dos pais melhora as escolas.|La implicación de los padres mejora las escuelas.
conquista|logro|kõˈkiʃtɐ|S|ast|B2|Aterrar a sonda foi uma conquista enorme.|Aterrizar la sonda fue un logro enorme.|ff=1;n=conquista também é «conquista» (militar/afectiva).
limitação|limitación|limitɐˈsɐ̃w̃|S|ast|B2|O estudo tem limitações.|El estudio tiene limitaciones.|a=ponto forte
probabilidade|probabilidade|pɾɔbɐbilidaˈðe|S|ast|B2|Há pouca probabilidade de chuva.|Hay poca probabilidad de lluvia.|p=probabilidades
restrição|restricción|ʁɨʃtɾiˈsɐ̃w̃|S|ast|B2|As restrições orçamentais atrasaram a obra.|Las restricciones presupuestarias retrasaron la obra.|r=for
enviesamento|sesgo|ẽvjəzɐˈmẽtu|S|sci|B2|A amostra mostra um enviesamento claro.|La muestra muestra un sesgo claro.|r=tec; n=PT-PT preferiu «enviesamento» a «viés» (brasileirismo).
estereótipo|estereotipo|ɨʃtɛɾɛˈotipu|S|ast|B2|O anúncio baseia-se em velhos estereótipos.|El anuncio se apoya en viejos estereotipos.
cidadania|ciudadanía|sidɐˈðanjɐ|S|ist|B2|Pediu a cidadania portuguesa.|Solicitó la ciudadanía portuguesa.|c=cidadania dupla
pobreza|pobreza|puˈbɾezɐ|S|ist|B2|O programa combate a pobreza infantil.|El programa combate la pobreza infantil.|c=viver na pobreza
desigualdade|desigualdad|dɨzigwɐlˈdaði|S|ist|B2|A desigualdade salarial continua a subir.|La desigualdad salarial sigue subiendo.|a=igualdade
sustentabilidade|sostenibilidad|suʃtẽtɐbilidaˈðe|S|nat|B2|A sustentabilidade guia o projeto.|La sostenibilidad guía el proyecto.|r=for
consumo|consumo|kõˈsumu|S|fin|B2|O consumo de energia desceu este ano.|El consumo de energía bajó este año.|c=consumo energético
força de trabalho|fuerza laboral|ˈfɔɾsɐ dɨ tɾɐbaˈʎu|L|lav|B2|A força de trabalho é 100% remota.|La fuerza laboral es 100% remota.
# ─── B2 · expressões idiomáticas (16) ───
pé de moleque|pan comido (fácil)|pɛ dɨ muˈlɛkɨ|L|sve|B2|O exame foi pé de moleque.|El examen fue pan comido.|r=col; n=«Pé de moleque» é também um doce brasileiro: a expressão viajou.
de vez em quando|de vez en cuando|dɨvez ẽˈkwɐ̃du|L|tmp|B2|Saímos de vez em quando.|Salimos fuera de vez en cuando.
de propósito|a propósito|dɨ pɾuˈpɔzitu|L|cmu|B2|Fez-o de propósito.|Lo hizo a propósito.|a=por acaso
por acaso|por casualidad|puɾ ɐˈkazu|L|tmp|B2|Encontrámo-nos por acaso em Braga.|Nos encontramos por casualidad en Braga.
manter contacto|mantenerse en contacto|mɐ̃ˈteɾ kõˈtatu|L|rel|B2|Vamos manter contacto depois do curso.|Mantengámonos en contacto tras el curso.|a=perder o contacto
sob pressão|bajo presión|sɔb pɾɨˈsɐ̃w̃|L|emo|B2|Trabalha bem sob pressão.|Trabaja bien bajo presión.
a longo prazo|a la larga|ɐ ˈlõɡu ˈpɾazu|L|tmp|B2|Poupar agora compensa a longo prazo.|Ahorrar ahora compensa a la larga.|a=a curto prazo
com calma|tomárselo con calma|kõ ˈkaɫmɐ|L|emo|B2|Vai com calma este fim de semana.|Tómatelo con calma este fin de semana.|r=col
não caber em si de contente|estar feliz por algo (muy contento)|nɐ̃w̃ kɐˈbeɾ ẽ ʃi dɨ kõˈtẽtɨ|L|emo|B2|Não cabia em si de contente com o bebé.|Estaba muy contenta con el bebé.|r=col
custar os olhos da cara|costar un ojo de la cara|kuʃˈtaɾ uʒ ˈɔʎuʒ da ˈkaɾɐ|L|fin|B2|A reparação custou os olhos da cara.|La reparación costó un ojo de la cara.|r=col
quebrar o gelo|romper el hielo|kɨˈbɾaɾ o ˈʒɛlu|L|cmu|B2|Uma piada quebrou o gelo na reunião.|Un chiste rompió el hielo en la reunión.
uma bênção disfarçada|una bendición disfrazada|ˈumɐ bẽˈsɐ̃w̃ dɨʃfaɾˈsaðɐ|L|ast|B2|Perder o voo foi uma bênção disfarçada.|Perder aquel vuelo fue una bendición disfrazada.|r=col
de uma vez por todas|de una vez por todas|dɨ ˈumɐ vez puɾ ˈtoðaʃ|L|tmp|B2|Resolvamos isto de uma vez por todas.|Zanjemos esto de una vez por todas.
do nada|de la nada|du ˈnaðɐ|L|tmp|B2|Ligou-me do nada.|Me llamó de la nada.|s=de repente
ver gomos|poner de acuerdo (estar de acuerdo total)|ˈveɾ ˈʒemuʃ|L|rel|B2|Não vemos gomos em dinheiro.|No nos ponemos de acuerdo en dinero.|r=col; n=«Ver gomos» é PT-PT antigo; hoje ouves «estar de acordo».
meter o bedelho|entrometerse (opinar sin que le pregunten)|ˈmɛtɨɾ o bɨˈdeʎu|L|cmu|B2|Não metas o bedelho na minha vida.|No te metas em mi vida.|r=col; n=PT-PT clássico; no Brasil, «meter o bedelho» também se entende.
# ─── B2 · conectores formais (12) ───
além disso|además (formal)|ɐˈlɛ̃ð diʃ|L|cnn|B2|O plano atrasou; além disso, custa mais.|El plan se retrasó; además, cuesta más.
não obstante|no obstante|nɐ̃w̃ oˈbʃtɐ̃tɨ|L|cnn|B2|Os dados são limitados; não obstante, o padrão mantém-se.|Los datos son limitados; no obstante, el patrón se sostiene.|r=for; s=no entanto
enquanto que|mientras que (contraste)|ẽˈkwɐ̃tu kɐ|L|cnn|B2|As lojas caíram, enquanto que o online cresceu.|Las tiendas cayeron, mientras que el online creció.|n=«enquanto» só (sem «que») é «mientras»: enquanto almoçavas, dormi.
portanto|por lo tanto|puɾˈtɐ̃tu|D|cnn|B2|A ponte está fechada; portanto, usa o túnel.|El puente está cerrado; por lo tanto, toma el túnel.|r=for
assim|así pues|ɐˈsim|D|cnn|B2|A amostra era pequena; assim, o achado é provisório.|La muestra era pequeña; así pues, el hallazgo é provisório.|r=for
quanto a mim|por lo que a mí respecta|ˈkwɐ̃tu ɐ ˈmĩ|L|cmu|B2|Quanto a mim, o acordo é justo.|Por lo que a mí respecta, el trato es justo.|r=neu
por outras palavras|es decir, en otras palabras|puɾ ˈwɐ̃tɾaʃ pɐˈlavɾaʃ|L|cnn|B2|Por outras palavras, começamos de novo.|Es decir, empezamos de cero.
pelo contrário|todo lo contrario|pɛlu kõtɾˈaɾju|L|cnn|B2|Não foi difícil; pelo contrário, foi divertido.|No fue difícil; todo lo contrario, fue divertido.
como resultado|como resultado|komu ʁizuɫˈtaðu|L|cnn|B2|As chuvas falharam; como resultado, os preços subiram.|Las lluvias fallaron; como resultado, los precios subieron.
sem contar que|sin contar que|sẽĩ kõˈtaɾ kɨ|L|cnn|B2|É rápido, sem contar que é barato.|Es rápido, sin contar que es barato.
em resumo|en resumen|ẽ ʁɨˈzumu|L|cnn|B2|Em resumo, precisamos de mais tempo.|En resumen, necesitamos más tiempo.|r=for; s=em suma
por cima disso|es más|puɾ ˈsimɐ diʃ|L|cnn|B2|Ela ganhou; por cima disso, bateu o recorde.|Ganó; es más, batió el récord.|r=neu
# ─── B2 · direito e sociedade (10) ───
delito menor|delito menor|dɨˈlitu mɨˈnoɾ|S|ist|B2|Delitos menores acarretam coimas.|Los delitos menores conllevan multas.|n=coima (PT) = multa; «fiança» é a caución.
coima|multa|ˈkoimɐ|S|ist|B2|Levei uma coima de estacionamento.|Me pusieron una multa de aparcamiento.|ff=1;n=«coima» existe em ES só em frases feitas; em PT é a multa administrativa.
acusar|imputar|ɐkuˈzaɾ|V|ist|B2|Foi acusado de roubo.|Lo imputaron por robo.|c=acusar alguém de
júri|jurado|ˈʒuɾiu|S|ist|B2|O júri chegou a um veredicto num dia.|El jurado llegó a un veredicto em un día.|ff=1;n=«jurado» em ES é a persona; o painel é «o júri».
julgamento|juicio|ʒuɫɡɐˈmẽtu|S|ist|B2|O julgamento começa em março.|El juicio empieza en marzo.|ff=1;n=julgamento também é «juício/valoración» (bom julgamento).
direitos humanos|derechos humanos|diˈɾejtuʃ uˈmɐnuʃ|L|ist|B2|A carta protege os direitos humanos.|La carta protege los derechos humanos.|c=violação dos direitos humanos
discriminação|discriminación|dɨskɾimiˈsɐ̃w̃|S|ist|B2|A discriminação no trabalho é ilegal.|La discriminación laboral es ilegal.
protesto|protesta|pɾuˈtɛʃtu|S|ist|B2|Um protesto encheu o Rossio.|Una protesta llenó el Rossio.|ff=1;n=«protesto» com o aberto é substantivo; «protesto» fechado é eu protesto.
sondagem|encuesta|sõˈdaʒẽ|S|ist|B2|A sondagem mostra uma corrida renhida.|La encuesta muestra un resultado ajustado.|n=sondagem é a palavra PT-PT; no Brasil, «pesquisa».
a imprensa|la prensa|ɐ ĩˈpɾẽsɐ|L|att|B2|A imprensa cobriu o lançamento.|La prensa cubrió el lanzamiento.|c=liberdade de imprensa
# ─── B2 · ambiente e ciência (10) ───
alterações climáticas|cambio climático|aɫtɨˈraˈsõĩʃ kliˈmatikaʃ|L|nat|B2|As alterações climáticas ditam a agenda.|El cambio climático marca la agenda.|n=PT-PT: alterações climáticas; no Brasil, «mudanças climáticas».
aquecimento global|calentamiento global|ɐkəsɨˈmẽtu ɡluˈbaɫ|L|nat|B2|O aquecimento global afeta as colheitas.|El calentamiento global afecta a las cosechas.
emissões|emisiones|ɨmiˈsõĩʃ|S|nat|B2|A cidade cortou as emissões em 15%.|La ciudad recortó las emisiones un 15%.|c=emissões de carbono
renovável|renovable|ʁənuˈvavəɫ|A|tec|B2|A energia renovável já é mais barata.|La energía renovable ya es más barata.|c=fontes renováveis
seca|sequía|ˈsekɐ|S|cli|B2|A seca arruinou a colheita.|La sequía arruinó la cosecha.|p=secas
inundação|inundación|ĩfundɐˈsɐ̃w̃|S|cli|B2|Inundações fecharam a autoestrada.|Las inundaciones cerraron la autopista.
extinção|extinción|ɨʃtĩˈsɐ̃w̃|S|nat|B2|A lei visa evitar a extinção.|La ley busca evitar la extinción.|c=à beira da extinção
espécie|especie|ɨʃˈpɛsi|S|nat|B2|O parque protege espécies endémicas.|El parque protege especies endémicas.|n=uma espécie, duas espécies: igual ao ES, igual singular e plural.
ecossistema|ecosistema|ikuˈsistɛmɐ|S|nat|B2|Os lobos remodelaram o ecossistema.|Los lobos remodelaron todo el ecosistema.
combustíveis fósseis|combustibles fósiles|kõbuʃˈtiviʃ ˈfɔsiʃ|L|nat|B2|Temos de eliminar os combustíveis fósseis.|Debemos eliminar los combustibles fósiles.|c=eliminar progressivamente
# ─── B2 · escrita académica (10) ───
ensaio (redação)|ensayo (redacción)|ẽˈsaju|S|stu|B2|O ensaio entrega-se sexta.|El ensayo se entrega el viernes.|ff=1;n=ensaio também é «prueba» (ensaio clínico): ff parcial.
rascunho|borrador|ʁɐʃˈkuɲu|S|stu|B2|Manda-me o primeiro rascunho.|Mándame el primer borrador.
esquema|esquema|ɨʃˈkɛmɐ|S|stu|B2|Escreve um esquema antes do ensaio.|Escribe un esquema antes del ensayo.
parafrasear|parafrasear|pɐɾɐfɾɐˈzeɾ|V|stu|B2|Parafraseia, não copies.|Parafrasea, no copies.
citatório (citar)|cita (referencia)|sitɐˈtoɾiu|S|stu|B2|Duas citações por parágrafo.|Dos citas por párrafo.|n=«citação» é o ato; «cita» é a marca no texto: cuidado com a dupla.
fonte|fuente|fõtɨ|S|stu|B2|Confere a fonte original.|Comprueba la fuente original.|ff=1;n=fonte também é «manantial» e «tipografia»: três sentidos.
referência bibliográfica|referencia bibliográfica|ʁɨfɨˈrẽsja biblioˈɡɾafikɐ|L|stu|B2|A lista de referências está incompleta.|La lista de referencias está incompleta.
plágio|plagio|ˈplaʒiu|S|stu|B2|O plágio arruína carreiras.|El plagio acaba con carreras.|c=cometer plágio
revisão de provas|corrección de pruebas|ʁɨviˈzɐ̃w̃ dɨ ˈpɾɔvaʃ|L|stu|B2|Revisa o resumo duas vezes.|Revisa el resumen dos veces.
revista científica|revista científica|ʁɨˈviʃtɐ sɪẽˈtifikɐ|L|sci|B2|O estudo saiu numa revista científica.|El estudio salió en una revista científica.|n=«revista» em PT também é a loja (revista de bairro) e a «revista de imprensa».
# ─── B2 · economia e negócios (14) ───
investimento|inversión|ĩvɛʃtiˈmẽtu|S|fin|B2|O investimento cedo compensa.|La inversión temprana compensa.|c=fazer um investimento
bolsa (mercado)|bolsa (de valores)|ˈbɔlsɐ|S|fin|B2|A bolsa caiu em março.|La bolsa bajó en marzo.|c=crash da bolsa
ação (bolsa)|acción (bursátil)|ɐˈsɐ̃w̃|S|fin|B2|Comprou ações da empresa.|Compró acciones de la empresa.|ff=1;n=ação é também «acción (filme)» e «actuación»: polissemia total.
lucro|beneficio|ˈluku|S|fin|B2|O lucro subiu 8% este trimestre.|El beneficio subió un 8% este trimestre.|c=margem de lucro; a=prejuízo
receita (ingressos)|ingresos|ʁɨˈsejtɐ|S|fin|B2|A receita superou o previsto.|Los ingresos superaron lo previsto.|ff=1;n=receita é também «receta de cocina»: o mesmo substantivo, dois mundos.
falência|quiebra|fɐˈlẽsja|S|fin|B2|A cadeia pediu falência.|La cadena se acogió a la quiebra.|c=declarar falência
empresa emergente|empresa emergente|ẽˈpɾezɐ ẽmɛɾˈʒẽtɨ|L|fin|B2|A empresa emergente cresceu de dois para cinquenta.|La emergente creció de dos a cincuenta.
empreendedor|emprendedor|ẽpɾẽẽˈdoɾ|S|pro|B2|O empreendedor abriu três lojas.|El emprendedor abrió tres tiendas.|p=empreendedores
negociação|negociación|nɨɡosiɐˈsɐ̃w̃|S|fin|B2|A negociação durou a noite toda.|La negociación duró toda la noche.|c=em negociação
negócio (trato)|trato|nɨˈɡɔsiu|S|fin|B2|Fechámos o negócio segunda-feira.|Cerramos el trato el lunes.|c=fazer um negócio; r=col
cadeia de abastecimento|cadena de suministro|kɐˈdejɐ dɨ ɐβɐʃtɨˈmẽtu|L|fin|B2|A cadeia de abastecimento mostrou-se frágil.|La cadena de suministro se mostró frágil.|r=tec
fosso salarial|brecha salarial|ˈfɔsu sɐlaɾjɐɫ|L|fin|B2|O fosso salarial estreitou devagar.|La brecha salarial se estrechó despacio.|n=«fosso» é PT-PT para gap; no Brasil, «gap» entrou na fala.
taxa de juro|tipo de interés|ˈtaksɐ dɨ ˈʒuɾu|L|fin|B2|O Banco de Portugal cortou a taxa de juro.|El Banco de Portugal recortó el tipo de interés.|n=PT-PT: taxa de juro (singular juro); no Brasil, «taxa de juros».
empréstimo|préstamo|ẽˈpɾɛʃtimu|S|fin|B2|Pediram um empréstimo para a casa.|Pidieron un préstamo para la casa.|c=pedir um empréstimo
# ─── C1 · académico (18) ───
hipótese|hipótesis|iˈpɔtəzɨ|S|sci|C1|O teste pôs à prova a hipótese.|El experimento puso a prueba la hipótesis.|p=hipóteses
quadro teórico|marco teórico|ˈkwɐdɾu teoˈɾiku|L|sci|C1|O estudo precisa de um quadro teórico.|El estudio necesita un marco teórico.
paradigma|paradigma|pɐɾaˈdiɡmɐ|S|sci|C1|O achado mudou o paradigma.|El hallazgo cambió el paradigma.|c=mudança de paradigma
metodologia|metodología|mɛtuðoˈloʒiɐ|S|sci|C1|A metodologia explica a amostra.|La metodología explica la muestra.|r=tec
critério|criterio|kɾiˈtɛɾiu|S|sci|C1|O critério principal é a originalidade.|El criterio principal es la originalidad.|p=critérios; n=O plural é critérios (nunca «criterions»).
noção|noción|nuˈsɐ̃w̃|S|ast|C1|A noção de privacidade evoluiu.|La noción de privacidad ha evolucionado.|c=noção de
premissa|premisa|pɾɨˈmɛsɐ|S|sci|C1|O argumento apoia-se numa premissa falsa.|El argumento se apoya en una premisa falsa.
profundo|profundo|pɾuˈfundu|A|ast|C1|O livro teve um efeito profundo em mim.|El libro tuvo un efecto profundo en mí.|a=superficial
rigoroso|riguroso|ʁiɡuˈɾozu|A|sci|C1|Os testes foram rigorosos.|Las pruebas fueron rigurosas.|s=meticuloso
exaustivo|completo (exhaustivo)|ɨʒawʃˈtivu|A|sci|C1|O relatório dá uma visão exaustiva.|El informe ofrece una visión exhaustiva.|n=PT usa «exaustivo» onde ES usa «agotador/exhaustivo»: exausto é a pessoa cansada.
substancial|considerável|ʃubʃtɐ̃ˈsjal|A|fin|C1|Houve uma melhoria substancial.|Hubo una mejora considerable.|s=significativo
empírico|empírico|ẽˈpiku|A|sci|C1|As afirmações exigem apoio empírico.|Las afirmaciones requieren apoyo empírico.|a=teórico
achados|resultados (hallazgos)|ɐˈʃaduʃ|S|sci|C1|Os achados confirmam o modelo.|Los hallazgos confirman el modelo.|n=«achados» no plural científico; «achado» só é também o pretérito de achar.
erudito|erudito|eɾuˈditu|S|stu|C1|Uma erudita visitante deu a aula.|Una erudita invitada dio la clase.|ff=1;n=erudito em PT também é o adjetivo «docto»: leitura erudita.
simpósio|simposio|sĩˈpɔzju|S|stu|C1|Falou num simpósio sobre ética.|Ponenció en un simposio sobre ética.|p=simpósios
inquérito|indagación (encuesta oficial)|ĩkɛˈɾitu|S|sci|C1|O inquérito durou dois anos.|La indagación duró dos años.|n=inquérito é também «encuesta» (inquérito do Census): dois usos.
desenvolver (detalhar)|desarrollar (detallar)|dɨzẽvɔɫˈveɾ|V|cmu|C1|Podes desenvolver esse ponto?|¿Podrías desarrollar ese punto?|c=desenvolver sobre
advogar por|abogar por|advuˈɡaɾ puɾ|V|ist|C1|Advogam regras mais duras.|Abogan por reglas más estrictas.|ff=1;n=advogar é também o ofício do advogado: advogar num tribunal.
# ─── C1 · jornalismo e política (14) ───
alegar|alegar (sin probar)|ɐlɛˈɡaɾ|V|att|C1|O jornal alega um encobrimento.|El periódico alega un encubrimiento.|r=for; n=Presunção de inocência: «alegadamente».
divulgar (fuga)|filtrar|divuɫˈɡaɾ|V|att|C1|Alguém divulgou o memorando.|Alguien filtró el memorando.|n=divulgar também é «divulgar» (divulgação científica): dois registos.
escrutínio|escrutinio|ɨʃkɾuˈtinju|S|att|C1|O acordo ficou sob escrutínio.|El trato quedó bajo escrutinio.|c=escrutínio público
revelar (oficial)|revelar (oficial)|ʁɨvɛˈlaɾ|V|fin|C1|A empresa tem de revelar os resultados.|La empresa debe revelar sus ingresos.|r=for
polémica|polémica|puˈlɛmikɐ|S|att|C1|O painel acendeu a polémica.|El mural encendió la polémica.|c=acender a polémica; n=PT-PT escreve «polémica»; no Brasil, «polêmica».
grupo de pressão|grupo de presión|ˈɡɾupu dɨ pɾɨˈsɐ̃w̃|L|ist|C1|O grupo de pressão agrário bloqueou a lei.|El grupo de presión agrario bloqueó el proyecto.
mandato|mandato|mɐ̃ˈdatu|S|ist|C1|As eleições deram-lhe mandato claro.|Las elecciones le dieron un mandato claro.|ff=1;n=mandato também é «encargo» (mandato judicial) e «penhor» (mandato de compra).
referendo|referéndum|ʁɨfɨˈrẽdu|S|ist|C1|O referendo passou com 60%.|El referéndum pasó con el 60%.|p=referendos
sem precedentes|sin precedentes|sẽĩ pɾəsɨˈdẽtɨʃ|L|att|C1|A tempestade foi sem precedentes.|La tormenta fue sin precedentes.
impasse|punto muerto|ĩˈpaʃɨ|S|ist|C1|As conversações chegaram a um impasse.|Las conversaciones llegaron a un punto muerto.|n=«impasse» é palavra feminina em PT: a impasse (ou o, na fala).
polarização|polarización|puɫɐɾizɐˈsɐ̃w̃|S|ist|C1|A polarização envenena o debate.|La polarización envenena el debate.
populismo|populismo|pubuˈlizmu|S|ist|C1|A região viu a subida do populismo.|La región vio un auge del populismo.
prestação de contas|rendición de cuentas|pɾɨʃtɐˈsɐ̃w̃ dɨ ˈkõtaʃ|L|ist|C1|Os eleitores exigem prestação de contas.|Los electores exigen rendición de cuentas.|r=for
de base (popular)|de base (popular)|dɨ ˈbazɨ|L|ist|C1|Uma campanha de base mudou a cidade.|Una campaña de base cambió la ciudad.|c=movimento de base
# ─── C1 · literário e estilo (18) ───
vívido|vívido|ˈvividu|A|let|C1|O romance retrata Aveiro com cores vívidas.|La novela retrata Aveiro con viveza.|c=memória vívida
comovente|conmovedor|komuˈvẽtɨ|A|let|C1|O final é comovente sem ser piegas.|El final es conmovedor sin ser sensiblero.|ff=1;n=comovente também é «testemunha convincente» (prova comovente).
subtil|sutil|suˈtiɫ|A|let|C1|A mudança é subtil mas real.|El cambio es sutil pero real.|n=PT-PT grafa «subtil» (sem o til do Brasil «sutil»).
irresistível (que atrapa)|irresistible (que atrapa)|iʁizisˈtivəɫ|A|cin|C1|Uma argumentação irresistível a favor da reforma.|Un argumento irrefutable a favor de la reforma.
evocar|evocar|evuˈkaɾ|V|let|C1|O cheiro evoca a cozinha da avó.|El olor evoca la cocina de mi abuela.|c=evocar memórias
retratar|retratar|ʁɨtɾɐˈtaɾ|V|art|C1|O painel retrata a marcha de 1974.|El mural retrata la marcha de 1974.|ff=1;n=retratar também é «quedar retratado» (mal na foto).
matizado|matizado|mɐtiˈzaðu|A|let|C1|Uma resposta matizada, não um slogan.|Una respuesta matizada, no una consigna.
melancolia|melancolía|mɛlɐ̃kuˈliɐ|S|emo|C1|Uma melancolia atravessa o filme.|Una melancolía atraviesa la película.|r=let
eloquente|elocuente|eluˈkwẽtɨ|A|let|C1|O silêncio dela foi mais eloquente que palavras.|Su silencio fue más elocuente que las palabras.
engraçado (espirituoso)|ingenioso|ẽɡɾɐˈsadu|A|let|C1|O discurso foi espirituoso e mordaz.|El discurso fue ingenioso y mordaz.|ff=1;n=engraçado é o «divertido» do dia a dia; o matiz C1 é «espirituoso».
romance (género)|novela (género literário)|ʁuˈmɐ̃sɨ|S|let|C1|O romance retrata três gerações.|La novela retrata a tres generaciones.|ff=1;n=romance em PT é a obra longa; «conto» é o conto; «história de amor» é o outro romance.
narrador|narrador|nɐʁɐˈdoɾ|S|let|C1|O narrador é pouco fiável.|El narrador es poco fiable.|c=narrador não fiável
metáfora|metáfora|mɛˈtafɔɾɐ|S|let|C1|O poema converte o rio em metáfora.|El poema convierte el río en metáfora.
prosa|prosa|ˈpɾɔzɐ|S|let|C1|Escreve prosa de grande limpeza.|Escribe prosa de gran limpieza.|c=poema em prosa
antologia|antología|ɐ̃tuˈloʒiɐ|S|let|C1|A antologia reúne quarenta poetas.|La antología reúne a cuarenta poetas.|r=for
absorvente (que atrapa)|absorbente (que atrapa)|ɐβsoɾˈvẽtɨ|A|cin|C1|Um thriller absorvente em Lisboa.|Un thriller absorbente ambientado en Lisboa.|n=absorvente também é «pañal» em PT: cuidado com o contexto!
intemporal|intemporal|ĩtẽpuˈɾaɫ|A|art|C1|Um design intemporal.|Un diseño intemporal.|a=datado
verso|verso|ˈvɛɾʃu|S|let|C1|Publicou três versos e uma nota.|Publicó tres versos y una nota.|n=«versado em» é versado en.
# ─── C1 · conectores e precisão (12) ───
não obstante (com substantivo)|no obstante (con sustantivo)|nɐ̃w̃ oˈbʃtɐ̃tɨ|L|cnn|C1|Não obstante o custo, o plano seguiu.|No obstante el coste, el plan siguió.|r=for
embora (formal)|aunque (formal)|ẽˈbɔɫwɐ|C|cnn|C1|Uma vitória discreta, embora importante.|Una victoria discreta, aunque importante.|n=embora exige conjuntivo: embora seja importante.
daí que|de ahí que|dɐˈi kɨ|L|cnn|C1|A amostra era enviesada; daí que a cautela.|La muestra estaba sesgada; de ahí la cautela.|r=for; n=daí que pede conjuntivo: daí que tenha cuidado.
na medida em que|en la medida en que|nɐ mɛˈdiðɐ ẽ kɨ|L|cnn|C1|Funciona na medida em que os dados estejam completos.|Funciona en la medida en que los datos estén completos.|r=for
com respeito a|con respecto a|kõ ʁɨˈspɛitu ɐ|L|cnn|C1|Com respeito à sua carta, concordamos.|Con respecto a su carta, estamos de acuerdo.|r=for; s=quanto a
antes de (formal)|con anterioridad a|ˈɐ̃tɨʒ dɨ|L|tmp|C1|Antes da fusão, ambas eram pequenas.|Antes de la fusión, ambas eran pequeñas.|r=for
em geral|en general|ẽ ʒeˈɾaɫ|L|cnn|C1|Em geral, as críticas foram justas.|En general, las críticas fueron justas.
nem sequer|ni siquiera|nẽj ˈsɛkɛɾ|L|cnn|C1|Não consegue andar, nem sequer correr.|No puede caminar, ni siquiera correr.
se acaso|más bien (si acaso)|sɨ ɐˈkazu|L|cnn|C1|Se acaso, os preços caíram mais depressa.|Si acaso, los precios cayeron más rápido.
à primeira vista|a primera vista|ɐ pɾɨˈmejɾɐ ˈviʃtɐ|L|cnn|C1|À primeira vista, parecem idênticas.|A primera vista, parecen idénticas.
em retrospectiva|con perspectiva|ẽ ʁɛʃpɛktiˈtivɐ|L|tmp|C1|Em retrospectiva, o aviso era claro.|Con perspectiva, la señal era clara.|s=olhando para trás
até agora (negativo)|hasta ahora (negativo)|ɐˈte ɐˈɡɔɾɐ|L|tmp|C1|Sem resposta, até agora.|Aún no hay respuesta.|r=for
# ─── C1 · emoções e psique (10) ───
apreensivo|aprensivo|ɐpɾɨˈsivu|A|emo|C1|Fiquei apreensivo antes dos resultados.|Me sentía aprensivo antes de los resultados.|c=apreensivo quanto
ressentimento|resentimiento|ʁisẽtĩˈmẽtu|S|emo|C1|Viejos ressentimentos afloraram no jantar.|Viejos resentimientos afloraron en la cena.
saudade (más fuerte que nostalgia)|anhelo (nostalgia profunda)|sɐwˈðaðɨ|S|emo|C1|Uma saudade da costa enche os poemas dela.|Un anhelo de la costa llena sus poemas.|r=let; n=A «saudade» não tem tradução exata: é falta + memória + tempo.
nostalgia|nostalgia|nuʃtaɫˈʒiɐ|S|emo|C1|A canção é pura nostalgia.|La canción es pura nostalgia.
ciumeira|despecho (rabieta de celos)|sjuˈmɛjɾɐ|S|emo|C1|Uma ciumeira à mesa acabou o jantar.|Un despecho en la mesa acabó con la cena.|r=col; n=ciumeira é o ciúme mostrado com teatros.
desassossego|desazón|dɨsɐsuˈsɛɡu|S|emo|C1|Um desassossego instalou-se na sala.|Una desazón se instaló en la sala.|r=let; n=Fernando Pessoa tem um «Desassossego» próprio: o livro é a palavra.
desprezo|desprecio|dɨʃpɾeˈzu|S|emo|C1|Tratou a acusação com desprezo.|Trató la acusación con desprecio.|c=abaixo do desprezo
assombro|asombro (reverência)|ɐˈsõbɾu|S|emo|C1|O canhão enche os visitantes de assombro.|El cañón llena de asombro a los visitantes.|c=em assombro de
desencanto|desencanto|dɨzẽˈkɐ̃tu|S|emo|C1|Os eleitores falaram de desencanto.|Los electores hablaron de desencanto.|r=for
empatia|empatía|ẽpɐˈtiɐ|S|emo|C1|O livro ensina empatia às crianças.|El libro enseña empatía a los niños.|a=compaixão
# ─── C1 · registo formal e negócios (12) ───
empreitada|empeño (empresa)|ẽpɾejˈtaðɐ|S|ast|C1|Uma empreitada digna, se arriscada.|Un empeño loable, aunque arriesgado.|ff=1;n=empreitada também é «obra contratada» (empreitada de construção): dois mundos.
provisório|provisional|pɾuviˈzɔɾju|A|fin|C1|São números provisórios.|Son cifras provisionales.|s=tentativo
exigente (norma)|estricto|ɨˈzẽʒẽtɨ|A|ist|C1|O laboratório segue protocolos exigentes.|El laboratorio sigue protocolos estrictos.|n=exigente de pessoa é «exigente com»; de norma, «estrito».
próximo (inminente)|próximo (inminente)|ˈpɾɔʃimu|A|tmp|C1|Pormenores serão divulgados em breve.|Los detalles se harán públicos pronto.|n=«forthcoming» inglês é divulgado em breve: mantivemos o sentido.
começar (formal)|comenzar (formal)|kõmẽˈsaɾ|V|fin|C1|A cerimónia come ao meio-dia.|La ceremonia comienza al mediodía.|r=for
cessar|dar por terminado|sɛˈsaɾ|V|fin|C1|O contrato cessa em junho.|El contrato termina en junio.|r=for; n=«cessar fogo» é o cessfire: militar e diplomático.
implementar|poner em marcha|ĩplĩmẽˈtaɾ|V|fin|C1|A cidade implementou o plano em maio.|La ciudad puso el plan en marcha en mayo.|c=implementar uma política
facilitar|facilitar|fəsiliˈtaɾ|V|lav|C1|A app facilita a revisão por pares.|La app facilita la revisión por pares.|r=for
agilizar|agilizar|ɐʒiliˈzaɾ|V|fin|C1|Agilizaram o requerimento.|Agilizaron la solicitud.|c=agilizar processos
incentivo fiscal|incentivo fiscal|ĩsẽˈtivu fisˈkaɫ|L|fin|C1|Incentivos fiscais atraem rodagens.|Los incentivos fiscales atraen rodajes.
ponto de referência|referencia (estándar)|põtu dɨ ʁɨfɨˈrẽsja|L|fin|C1|O índice fixa um referência mundial.|El índice fija una referencia mundial.|r=tec
aquisição|adquisición|ɐkiziˈsɐ̃w̃|S|fin|C1|A aquisição fechou em outubro.|La adquisición se cerró en octubre.|c=fusões e aquisições
# ─── C1 · ciência e transformação (16) ───
marco|hitos|mɐɾˈku|S|sci|C1|É um marco para o instituto.|Un hito para el instituto.|c=atingir um marco
grande avanço|avance (descubrimiento)|ˈɡɾɐ̃dɨ ɐˈvɐ̃sɐ|L|sci|C1|Um grande avanço na química das baterias.|Un avance en la química de baterías.
rede neuronal|red neuronal|ˈʁɛði neuˈɾonaɫ|L|tec|C1|O modelo é uma rede neuronal com 70 mil milhões de parâmetros.|El modelo es una red neuronal de 70.000 millones de parámetros.|r=tec
algoritmo|algoritmo|aɫɡuˈɾitmu|S|tec|C1|O algoritmo ordena os resultados.|El algoritmo ordena los resultados.|r=tec
genoma|genoma|ʒɨˈnomɐ|S|sci|C1|O genoma do arroz foi sequenciado em 2002.|El genoma del arroz se secuenció en 2002.|r=tec
prevalecer|imponerse|pɾivɐˈleɾ|V|ist|C1|O senso comum prevaleceu no fim.|El sentido común se impuso al final.|c=prevalecer sobre
desvendar|presentar al público|dɨʃvẽˈdaɾ|V|att|C1|A equipa desvendou o protótipo.|El equipo presentó el prototipo.|ff=1;n=desvendar é também «resolver um mistério»: desvendar o crime.
remodelar|rediseñar (cambiar el rostro)|ʁɨmuðɐˈlaɾ|V|ast|C1|O streaming remodelou o negócio musical.|El streaming rediseñó el negocio musical.
redefinir|redefinir|ʁɨdifiˈniɾ|V|ast|C1|O telemóvel redefiniu a fotografia.|El teléfono redefinió la fotografía.
submeter-se a|someterse a|submɛˈteɾ-sə ɐ|V|sla|C1|O edifício sofreu obras de renovação.|El edificio se sometió a renovación.|n=submeter também é «subyugar»: cuidado com o pronome.
abarcar|abarcar|ɐbaɾˈkaɾ|V|ast|C1|O curso abarca gramática e cultura.|El curso abarca gramática y cultura.|s=incluir
assemelhar-se a|parecerse a|ɐsẽmɛˈʎaɾ-sə ɐ|V|fam|C1|Assemelha-se à avó.|Se parece a su abuela.|c=assemelhar-se em
acarretar|conllevar|ɐkɐˈʁɛtaɾ|V|fin|C1|O posto acarreta viagens.|El puesto conlleva viajes.|c=acarretar viagens
atribuir|atribuir|ɐtɾiˈbwiɾ|V|sci|C1|Atribuem a melhora ao exercício.|Atribuyen la mejora al ejercicio.|c=atribuir a
decorrer|desarrollarse|dɨkuˈʀɛɾ|V|att|C1|O drama decorreu em três dias.|El drama se desarrolló em três días.|n=«decorrer» também é «transcorrer tempo»: a semana decorreu calma.
espoletar|espolear|ɨʃpulɛˈtaɾ|V|fin|C1|O crédito barato espoletou a construção.|El crédito barato espoleó la construcción.|ff=1;n=espoletar literal é «disparar um gatilho»: metáfora de arma.
# ─── C2 · adjetivos raros e literários (18) ───
quintessencial|por antonomasia|kĩtẽsĩˈsjal|A|let|C2|O café quintessencial de Lisboa.|El café por antonomasia de Lisboa.
esquivo|esquivo|ɨʃˈkivu|A|ast|C2|O sucesso manteve-se esquivo.|El éxito se mostró esquivo al equipo.
inefável|inefable|inɛˈfavəɫ|A|let|C2|Uma tristeza inefável percorre o livro.|Una tristeza inefable recorre el libro.|r=let
serendipidade|serendipia|sɛɾẽdipidaˈði|S|ast|C2|Conheceram-se por pura serendipidade.|Se conocieron por pura serendipia.|r=neu
esotérico|esotérico|ɨzutɛˈɾiku|A|ast|C2|A aula deriva em detalhe esotérico.|La clase deriva en detalle esotérico.|a=acessível
labiríntico|laberíntico|lɐβiˈɾitiku|A|let|C2|A trama é deliberadamente labiríntica.|La trama es deliberadamente laberíntica.|r=let
recalcitrante|recalcitrante|ʁəkaɫkiˈtɾɐ̃tɨ|A|emo|C2|Um comité recalcitrante bloqueou a reforma.|Un comité recalcitrante bloqueó la reforma.|r=for
sardónico|sardónico|saɾˈdɔniku|A|let|C2|Respondeu com um sorriso sardónico.|Respondió com una sonrisa sardónica.|a=sincero
lacónico|lacónico|lɐˈkɔniku|A|let|C2|A resposta lacónica desmontou-os.|La lacónica réplica los descolocó.|r=let
desleixado (rotina)|rutinario (desganado)|dɨlɛiˈʃaðu|A|lav|C2|A inspeção foi desleixada quando muito.|La inspección fue desganada como poco.|r=for; n=desleixado de pessoa é «descuidado»: dois matizes.
omnipresente|omnipresente|omnipɾizẽˈtẽtɨ|A|tec|C2|Os telemóveis já são omnipresentes.|Los teléfonos ya son omnipresentes.
evanescente|evanescente|evɐnɛˈsẽtɨ|A|let|C2|O nevoeiro dá ao porto uma luz evanescente.|La niebla da al puerto una luz evanescente.|r=let
iridescente|iridiscente|iɾiðiˈsẽtɨ|A|nat|C2|Um colibri iridescente rondava a janela.|Un colibrí iridiscente revoloteaba en la ventana.|r=let
lugubre|lugubre|luˈɡubɾɨ|A|let|C2|O órgão deu à cena um ar lugubre.|El órgano dio a la escena un aire lúgubre.|r=let
quotidiano|cotidiano|kutidiˈɐ̃nu|A|let|C2|O romance celebra o quotidiano.|La novela celebra lo cotidiano.|r=let; n=PT-PT usa «quotidiano»; o Brasil escreve «cotidiano».
desditoso|desdichado|dɨdʒiˈtozu|A|let|C2|O viajante desditoso perdeu todos os voos.|El desdichado viajero perdió todos los vuelos.|r=let
verdadeiro (todo um)|todo un (auténtico)|vɨɾdɐˈdejɾu|A|ast|C2|A garagem tornou-se um ateliê verdadeiro.|El garaje se volvió un auténtico estudio.|n=No C2 o sentido é «de facto»: um estúdio de verdade.
desdenhoso|demoledor|dɨzdɨˈnozu|A|cmu|C2|Uma crítica desdenhosa fechou a função.|Una crítica demoledora cerró la función.|c=olhar demoledor
# ─── C2 · verbos cultos (18) ───
obscurecer|ofuscar|ubʃkuˈɾeʃɨɾ|V|tec|C2|O jargão só obscurece a mensagem.|La jerga solo ofusca el mensaje.|r=for
abrazar (causa)|abrazar (una causa)|ɐbɾɐˈzaɾ|V|ist|C2|O artigo abraça a ciência aberta.|El artículo abrazó la ciencia abierta.|ff=1;n=abrazar de pessoas é o «abracciar» italiano: outro registo.
promulgar|promulgar|pɾumuɫˈɡaɾ|V|ist|C2|A entidade promulgou a norma em maio.|La agencia promulgó la norma en mayo.|r=for
extrapolar|extrapolar|ɨʃtɾɐpuˈlaɾ|V|sci|C2|Não extrapoles a partir de uma só época.|No extrapoles a partir de una sola temporada.|c=extrapolar a partir de
tornar desnecessário|hacer innecesario|tuɾˈnaɾ dɨsnɛsɨˈsɛɾju|L|ast|C2|A nova ponte torna a barca desnecessária.|El nuevo puente hace innecesario el ferry.|r=for
alienar|distanciar|ɐliɐˈnaɾ|V|rel|C2|O silêncio alienou os dois irmãos.|El silencio distanció a los dos hermanos.|ff=1;n=alienar também é «enajenar» (direito): alienar bens.
justificar plenamente|reivindicar (dar la razón)|ʒuʃtifiˈkaɾ pleniˈtãmẽtɨ|L|ist|C2|O tempo justificou o teimoso engenheiro.|El tiempo dio la razón al terco ingeniero.|n=Sem verbo único PT: «dar razão a» é a perífrase usual.
gerar (engendrar)|engendrar|ʒɨˈɾaɾ|V|ast|C2|A confiança gera lealdade.|La confianza engendra lealtad.|n=gerar também é «produzir energia»: a usina gera luz.
galvanizar|galvanizar|gaɫvɐniˈzaɾ|V|ist|C2|O discurso galvanizou os voluntários.|El discurso galvanizó a los voluntarios.|c=galvanizar em ação
remoer|rumiar|ʁɨmuˈeɾ|V|emo|C2|Remoía a oferta toda a noite.|Rumió la oferta toda la noche.|c=remoer sobre; ff=1;n=remoer é também «moler outra vez»: remoer o pão duro.
pontificar|pontificar|põtifiˈkaɾ|V|cmu|C2|Pontificou sobre vinho uma hora inteira.|Pontificó sobre el vino durante una hora.|r=col
exaltar|ensalzar|ɨʃaɫˈtaɾ|V|att|C2|A imprensa exaltou o jovem chef.|La prensa ensalzó al joven chef.|ff=1;n=exaltar também é «emocionar»: a multidão exaltou-se.
despedaçar (criticar)|despedazar (criticar)|dɨʃpɨðɐˈsaɾ|V|att|C2|A coluna despedaçou a cadeia.|La columna despedazó a la cadena.|r=for
despotricar contra|despotricar contra|dɨʃputiˈkaɾ kõˈtɾɐ|V|cmu|C2|Despotricou contra o imposto semanas a fio.|Despotricó contra el impuesto durante semanas.|r=let
recolher (desentrañar)|ir recogiendo (desentrañar)|ʁəkɔˈʎeɾ|V|sci|C2|Historiadores recolhem dados dos roletes de impostos.|Los historiadores desentrañan datos de los padrones.|c=recolher de
esquiver-se (rehuir)|rehuir|ɨʃkiviˈaɾ-sɨ|V|let|C2|O ensaio esquiva-se ao termo técnico.|El ensayo rehúye el tecnicismo.|r=for
aquiescer|asentir (a regañadientes)|ɐkiˈɛseɾ|V|cmu|C2|O conselho aquiesceu após longo debate.|El consejo asintió tras un largo debate.|c=aquiescer em; r=for
capitular|capitular|kɐpituˈlaɾ|V|ist|C2|O sindicato recusou capitular.|El sindicato se negó a capitular.|c=capitular ante
# ─── C2 · giros aúlicos (18) ───
inaceitável (fora de toda norma)|inaceptable (fuera de toda norma)|ĩnɐsətɐˈveɫ|L|cnn|C2|A piada foi simplesmente inaceitável.|La broma fue, sencillamente, inaceptable.|r=let
não acordar o cão dormido|no revolver el asunto|nɐ̃w̃ ɐˈkɔdaɾ o ˈkɐ̃w̃ duɾˈmiðu|L|cmu|C2|Melhor não acordar o cão dormido com esse cliente.|Mejor no revolver el asunto con ese cliente.|r=col
tempestade num copo de água|una tormenta en un vaso de agua|tẽpɨʃˈtaði ˈnum kupu dɨ ˈawtɐ|L|ast|C2|A rixa foi uma tempestade num copo de água.|La pelea fue una tormenta en un vaso de agua.|r=col
a cereja no topo do bolo|la guinda del pastel|ɐ sɨˈɾejɐ nu ˈtɔpu du ˈbo lu|L|sve|C2|O prémio foi a cereja no topo do bolo.|El bono fue la guinda del pastel.|r=col
vitória de Pirro|una victoria pírrica|viˈtoɾiɐ dɨ ˈpiʁu|L|ist|C2|A vitória revelou-se de Pirro.|La victoria resultó pírrica.|r=let
em excesso (por defeito)|en exceso (por defecto)|ẽĩ ɨˈsɛsu|L|emo|C2|É generoso em excesso.|Es generoso en exceso.|r=neu
em letargo (estagnado)|en letargo (estancado)|ẽ lɨˈtaɾɡu|L|fin|C2|As vendas ficaram em letargo toda a primavera.|Las ventas se estancaron toda la primavera.|r=col
em vilo|en vilo|ẽ ˈviɫu|L|emo|C2|Esperámos em vilo o veredicto.|Esperamos en vilo el veredicto.|r=let; n=PT diz «em vilo» — na f popular ouve-se «de vilo», também aceita.
entre a espada e a parede|entre la espada y la pared|ˈẽtɾi ɐ ˈɛʃpaðɐ i ɐ pɐˈɾeði|L|ast|C2|Os inquilinos estão entre a espada e a parede.|Los inquilinos están entre la espada y la pared.|r=col; ff=1;n=Expressão idêntica nas duas línguas: veio do latim judicial.
ir por ramos alheios|irse por las ramas|iɾ puɾ ˈɾɐmuz aˈʎejʃ|L|cmu|C2|Deixa de ir por ramos alheios e responde.|Deja de irte por las ramas y responde.|r=col; n=PT-PT: «ramos alheios»; o Brasil diz «enrolar».
atirar a toalha|tirar la toalla|ɐˈtiɾaɾ ɐ tuˈaʎɐ|L|spt|C2|À quinta tentativa, atiraram a toalha.|Tras cinco intentos tiraron la toalla.|r=col
queimar o azeite|quemar el aceite de medianoche|kɨˈmaɾ o ɐˈzejtɨ|L|stu|C2|Queimou o azeite antes dos finais.|Veló la noche entera antes de los finales.|r=col; n=Em PT o idiom é «queimar as pestanas» — usamos esse na nota: queimar as pestanas antes dos finais.
ler nas entrelinhas|leer entre líneas|leɾ naʒ ẽtɾɨˈʎiɲaʃ|L|cmu|C2|Lê nas entrelinhas o memorando.|Lee entre líneas el memorando.|r=col
morder a bala (aguentar)|morderse el freno|muɾˈdeɾ ɐ ˈbaɫɐ|L|emo|C2|Mordemos a bala e pagámos a coima.|Nos mordimos el freno y pagamos la multa.|r=col
esqueleto no armário|un esqueleto en el armario|ɨʃkəˈlɛtu nu aɾˈmaɾiu|L|rel|C2|Toda a família tem um esqueleto no armário.|Toda familia tiene un esqueleto en el armario.|r=col
elefante branco|elefante blanco|ɨlɨˈfɐ̃tɨ ˈbɾɐ̃ku|S|fin|C2|O estádio tornou-se um elefante branco.|El estadio se volvió un elefante blanco.|r=col; ff=1;n=O idiom veio do inglês via português colonial: mesma imagem nas três línguas.
de um só golpe|de un plumazo|dɨ ˈum sɔ ˈɡɔɫpɨ|L|tmp|C2|O negócio fechou-se de um só golpe.|El trato se cerró de un plumazo.|r=let
# ─── C2 · substantivos cultos (18) ───
epítome (encarnação)|epítome (encarnación)|eˈpitomɨ|S|let|C2|É o epítome da calma.|Es la encarnación de la calma.|c=o epítome de; n=PT diz «epítome» com quatro sílabas: nunca «epitoum».
perícia (maña)|pericia (maña)|pɨˈɾisiɐ|S|ast|C2|A perícia técnica dela não tem rival.|Su pericia técnica no tiene rival.|ff=1;n=perícia também é «informe pericial» e «exame de condução»: a perícia do carro.
opinólogo|analista (opinólogo)|upinuˈlɔɡu|S|att|C2|Os opinólogos vaticinaram um final renhido.|Los analistas vaticinaron un final ajustado.|r=neu; n=Neologismo espirituoso: ainda não está nos dicionários grandes.
diletante|diletante|dilitˈɐ̃tɨ|S|art|C2|Pinta como um diletante com talento.|Pinta como un diletante con talento.|r=for; ff=1;n=Em PT o matiz é mais brando que em inglês: amador culto.
conundro (enigma)|conundro (enigma)|kõˈnũdɾu|S|ast|C2|A reforma das pensões segue um conundro.|La reforma de las pensiones sigue siendo un enigma.|r=neu
atoleiro (pantano, atolladero)|atolladero|ɐtuˈlejɾu|S|nat|C2|O projeto afundou num atoleiro de atrasos.|El proyecto se hundió en un atolladero de retrasos.|c=atoleiro burocrático; n=atoleiro é também Lama física: o carro ficou no atoleiro.
manancial|manantial (fuente)|mɐnɐ̃ˈsjal|S|emo|C2|A curiosidade é o manancial da ciência.|La curiosidad es el manantial de la ciencia.|r=let; ff=1;n=Em PT corrente, «manancial» é só figurado; a nascente de água é «nascente».
cortina de fumo|cortina de humo|kuɾˈtinɐ dɨ ˈfumu|S|ist|C2|A auditoria foi uma cortina de fumo.|La auditoría fue una cortina de humo.|c=armar uma cortina de fumo
criatura (ideia)|criatura (idea)|kɾjɐˈtuɾɐ|S|ast|C2|O festival foi criatura sua.|El festival fue criatura suya.|c=a criatura de; ff=1;n=criatura de pessoa é «ser vivo»: a criatura do Dr. Frankenstein.
rebento (vástago)|vástago (desprendimiento)|ʁɨˈbẽtu|S|nat|C2|O laboratório é um rebento da universidade.|El laboratorio es un vástagos de la universidad.|ff=1;n=rebento é também «gomo de planta» e «fogacho de raiva»: três sentidos.
esteio|pilar (columna)|ɨʃˈtɛju|S|fin|C2|O turismo é o esteio da ilha.|El turismo es el pilar de la isla.|c=esteio da economia; n=esteio é a «vigas» de um muro: o literal sustenta o figurado.
salvaguarda|salvaguardia|saɫvɐˈɡuaɾdɐ|S|ist|C2|A cláusula acrescenta uma salvaguarda aos inquilinos.|La cláusula añade una salvaguardia para inquilinos.|c=como salvaguarda
posguera (consequências)|consecuencias (tras el desastre)|puʃˈɡɛɾɐ|S|ist|C2|A reconstrução levou anos na posguera do temporal.|Reconstruir llevó años tras el temporal.|r=col; n=«posguera» nasceu na gíria béblica; em PT corrente preferimos «no rescaldo».
trabalho braçal|trabajo rutinario|tɾɐˈbaʎu bɾaˈsjaɫ|L|lav|C2|A automação livrou as enfermeiras do trabalho braçal.|La automatización libró a las enfermeras del trabajo rutinario.|r=for; n=braçal vem de «braço»: o ES diz «trabajo manual».
grandeza|grandeza|ɡɾɐ̃ˈdezɐ|S|art|C2|A grandeza do canhão cala os visitantes.|La grandeza del cañón enmudece a los visitantes.|r=let
hibris (soberbia)|hibris (soberbia)|ˈibɾiʃ|S|let|C2|A hibris derrubou a empresa.|La soberbia tumbó a la empresa.|r=let; n=Em PT usa-se «hubris» ou «hibris»: a forma latinizada é mais lusa.
nêmesis|némesis|ˈnɛmɛʃiʃ|S|let|C2|O jovem ponta-de-lança tornou-se a nêmesis do campeão.|El joven delantero se volvió la némesis del campeón.|p=nêmesis; r=let
força imparável (juggernaut)|fuerza imparable|fɔɾsɐ ĩpɐˈɾavəɫ|L|fin|C2|A cadeia cresceu numa força imparável.|La cadena se volvió una fuerza imparable.|r=neu
espírito da época|espíritu de la época|ɨʃˈpiɾitu dɐ ˈɛpɔkɐ|L|ast|C2|O filme apanhou o espírito da época de 2001.|La película captó el espíritu de 2001.|n=Préstamo alemão «zeitgeist» também se ouve em PT: sobretudo em crónicas.
dechado|dechado (modelo)|dɨˈʃaðu|S|let|C2|É um dechado de pontualidade.|Es un dechado de puntualidad.|c=um dechado de; r=for; n=«dechado» é a palavra PT clássica: o Brasil diz «paradigma».
`, "pt");
