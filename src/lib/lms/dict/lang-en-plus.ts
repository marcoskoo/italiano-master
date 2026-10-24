import { parsePlus } from "./plus-parse";
import type { VocabWord } from "../types";

/* ═══ v9.41 · EN Dictionary PLUS · B1→C2 (nivel explícito) ══════════
   La base (lang-en.ts, 640 A1-B1) se completa aquí hasta las cuatro
   bandas superiores: B1 consolidación, B2 argumentación/frales/idioms,
   C1 académico/periodístico, C2 literario/raro. Formato en la cabecera
   de plus-parse.ts. `word` = inglés de EE. UU.; `es` = español.      */

export const EN_PLUS: VocabWord[] = parsePlus(`
# ─── B1 · trabajo y carrera (20) ───
apply|solicitar|əˈplaɪ|V|lav|B1|I applied for a job in Boston.|Solicité un trabajo en Boston.|s=apply for
hire|contratar|ˈhaɪər|V|lav|B1|They hired a new manager last week.|Contrataron a un nuevo gerente la semana pasada.|n=hire también es «alquiler»: hire a car en GB.
employer|empleador|ɪmˈplɔɪər|S|lav|B1|My employer offers free training.|Mi empleador ofrece formación gratuita.
promotion|ascenso|prəˈmoʊʃən|S|lav|B1|She got a promotion after two years.|Consiguió un ascenso tras dos años.
shift|turno|ʃɪft|S|lav|B1|I work the night shift on Fridays.|Trabajo el turno de noche los viernes.
overtime|horas extra|ˈoʊvərtaɪm|S|lav|B1|They pay overtime on weekends.|Pagan horas extra los fines de semana.|r=for
qualified|cualificado|ˈkwɑːlɪfaɪd|A|lav|B1|He is qualified to teach math.|Está cualificado para dar matemáticas.
retire|jubilarse|rɪˈtaɪər|V|lav|B1|My grandfather retired at sixty-five.|Mi abuelo se jubiló a los sesenta y cinco.
career|carrera (profesional)|kəˈrɪr|S|lav|B1|She built her career in Austin.|Construyó su carrera en Austin.|ff=1;n=career NO es «carrera universitaria» (es degree): ff parcial.
deadline|fecha límite|ˈdɛdlaɪn|S|lav|B1|The deadline is Monday morning.|La fecha límite es el lunes por la mañana.
colleague|colega de trabajo|ˈkɑːliːg|S|lav|B1|A colleague helped me with the report.|Un colega me ayudó con el informe.|n=En EE. UU. se oye más coworker; colleague suena formal.
training|formación|ˈtreɪnɪŋ|S|lav|B1|The training lasts two weeks.|La formación dura dos semanas.
raise|aumento (de sueldo)|reɪz|S|fin|B1|I asked my boss for a raise.|Pedí un aumento a mi jefe.|n=En GB, rise; raise también es «levantar».
skill|habilidad|skɪl|S|lav|B1|Coding is a useful skill.|Programar es una habilidad útil.|c=soft skills, skill set
interview|entrevista|ˈɪntərvjuː|S|lav|B1|I have a job interview tomorrow.|Tengo una entrevista de trabajo mañana.
experience|experiencia|ɪkˈspɪriəns|S|lav|B1|She has experience in marketing.|Tiene experiencia en marketing.
part-time|a tiempo parcial|ˌpɑːrtˈtaɪm|L|lav|B1|He works part-time at a café.|Trabaja a tiempo parcial en una cafetería.|a=full-time
full-time|a tiempo completo|ˌfʊlˈtaɪm|L|lav|B1|I'm looking for a full-time job.|Busco un trabajo a tiempo completo.|a=part-time
unemployed|en paro|ˌʌnɪmˈplɔɪd|A|lav|B1|He was unemployed for six months.|Estuvo en paro seis meses.|n=EE. UU.: out of work, más coloquial.
freelance|por cuenta propia|ˈfriːlæns|A|lav|B1|She works as a freelance designer.|Trabaja como diseñadora freelance.|r=neu
tenant|inquilino|ˈtɛnənt|S|cas|B1|The tenant pays rent on the first.|El inquilino paga la renta el día uno.|a=landlord
# ─── B1 · estudios (14) ───
degree|título universitario|dɪˈgriː|S|stu|B1|She has a degree in chemistry.|Tiene un título en química.|n=degree también es «grado» (temperature) y «grados» (angles).
subject|asignatura|ˈsʌbdʒɪkt|S|stu|B1|My favorite subject is history.|Mi asignatura favorita es historia.|n=En la universidad, major (EE. UU.).
semester|semestre|sɪˈmɛstər|S|stu|B1|The semester ends in December.|El semestre termina en diciembre.
scholarship|beca|ˈskɑːlərʃɪp|S|stu|B1|He won a scholarship to Yale.|Ganó una beca para Yale.
graduate (verb)|licenciarse|ˈgrædʒueɪt|V|stu|B1|She graduated in 2024.|Se licenció en 2024.|n=EE. UU.: graduate from college; GB: graduate at university.
lecture|clase magistral|ˈlɛktʃər|S|stu|B1|The lecture starts at nine.|La clase magistral empieza a las nueve.|ff=1;n=En GB lecture es «regañina» en casa; en la uni es igual.
assignment|trabajo (académico)|əˈsaɪnmənt|S|stu|B1|The assignment is due Friday.|El trabajo se entrega el viernes.|c=hand in an assignment
research|investigación|ˈriːsɜːrtʃ|S|sci|B1|Her research focuses on climate.|Su investigación se centra en el clima.|n=Incontable: researches suena raro.
take notes|tomar apuntes|ˌteɪk ˈnoʊts|L|stu|B1|I take notes during every lecture.|Tomo apuntes en cada clase.
pass (an exam)|aprobar (un examen)|pæs|V|stu|B1|She passed the exam on the first try.|Aprobó el examen al primer intento.|a=fail
fail (an exam)|suspender (un examen)|feɪl|V|stu|B1|He failed the driving test.|Suspendió el examen de conducir.|a=pass
grade|nota (calificación)|greɪd|S|stu|B1|I got a good grade in biology.|Saqué buena nota en biología.|ff=1;n=En EE. UU. grade es nota y también «curso escolar» (7th grade).
review (verb)|repasar|rɪˈvjuː|V|stu|B1|I reviewed the vocabulary before the test.|Repasé el vocabulario antes del examen.
suggestion|sugerencia|səˈdʒɛstʃən|S|cmu|B1|Any suggestions for dinner?|¿Alguna sugerencia para cenar?
# ─── B1 · viajes y dinero (12) ───
abroad|en el extranjero|əˈbrɔːd|D|vig|B1|She wants to study abroad.|Quiere estudiar en el extranjero.|c=go abroad, live abroad
customs|aduana|ˈkʌstəmz|S|vig|B1|We went through customs at JFK.|Pasamos la aduana en JFK.
destination|destino|ˌdɛstɪˈneɪʃən|S|vig|B1|Our destination is New Orleans.|Nuestro destino es Nueva Orleans.
currency|divisa|ˈkɜːrənsi|S|fin|B1|What's the local currency?|¿Cuál es la divisa local?|c=exchange rate
exchange (money)|cambiar (dinero)|ɪksˈtʃeɪndʒ|V|fin|B1|I exchanged dollars for pesos.|Cambié dólares por pesos.
landmark|monumento emblemático|ˈlændmɑːrk|S|cit|B1|The Golden Gate is a city landmark.|El Golden Gate es un monumento de la ciudad.
sightseeing|turismo (visitas)|ˈsaɪtˌsiːɪŋ|S|vig|B1|We spent the morning sightseeing.|Pasamos la mañana de turismo.|c=go sightseeing
round trip|ida y vuelta|ˌraʊnd ˈtrɪp|L|tra|B1|A round trip to Chicago, please.|Ida y vuelta a Chicago, por favor.|a=one-way
one-way|solo ida|ˌwʌnˈweɪ|L|tra|B1|I bought a one-way ticket to Denver.|Compré un billete de solo ida a Denver.|a=round trip; n=one-way street es «calle de sentido único».
delay|retraso|dɪˈleɪ|S|tra|B1|There was a delay at the airport.|Hubo un retraso en el aeropuerto.|c=flight delay
book (a room)|reservar|bʊk|V|htl|B1|I booked a room for two nights.|Reservé una habitación para dos noches.|n=GB: book; EE. UU. también reserve.
checkup|revisión (médica)|ˈtʃɛkʌp|S|sla|B1|I have a dental checkup today.|Hoy tengo una revisión dental.
# ─── B1 · salud (8) ───
symptom|síntoma|ˈsɪmptəm|S|sla|B1|Fever is a common symptom.|La fiebre es un síntoma común.|p=symptoms
prescription|receta|prɪˈskrɪpʃən|S|sla|B1|The doctor wrote me a prescription.|El médico me escribió una receta.|c=prescription drug
treatment|tratamiento|ˈtriːtmənt|S|sla|B1|The treatment takes six weeks.|El tratamiento dura seis semanas.
recovery|recuperación|rɪˈkʌvəri|S|sla|B1|Her recovery was fast.|Su recuperación fue rápida.|c=make a full recovery
allergy|alergia|ˈælərdʒi|S|sla|B1|He has a peanut allergy.|Tiene alergia al cacahuete.|p=allergies
injured|herido|ˈɪndʒərd|A|sla|B1|An injured player left the field.|Un jugador herido salió del campo.|n=En accidentes: hurt (me duele) es más cotidiano.
emergency room|urgencias|ɪˈmɜːrdʒənsi ruːm|L|sla|B1|They took him to the emergency room.|Lo llevaron a urgencias.|c=ER (sigla EE. UU.)
painkiller|analgésico|ˈpeɪnˌkɪlər|S|sla|B1|Take a painkiller for the headache.|Tómate un analgésico para el dolor de cabeza.
# ─── B1 · opinión y comunicación (18) ───
opinion|opinión|əˈpɪnyən|S|cmu|B1|In my opinion, the movie is great.|En mi opinión, la película es genial.|c=in my opinion
point of view|punto de vista|ˌpɔɪnt əv vjuː|L|cmu|B1|Try to see her point of view.|Intenta ver su punto de vista.
agree|estar de acuerdo|əˈgriː|V|cmu|B1|I agree with you completely.|Estoy completamente de acuerdo contigo.|a=disagree
disagree|no estar de acuerdo|ˌdɪsəˈgriː|V|cmu|B1|We disagree about politics.|No estamos de acuerdo sobre política.|a=agree
suggest|sugerir|səˈdʒɛst|V|cmu|B1|I suggest taking the early train.|Sugiero tomar el tren temprano.|n=suggest NO lleva «to»: suggest doing.
complain|quejarse|kəmˈpleɪn|V|cmu|B1|He complained about the noise.|Se quejó del ruido.|c=complain about
apologize|disculparse|əˈpɑːlədʒaɪz|V|cmu|B1|I apologized for being late.|Me disculpé por llegar tarde.|c=apologize for; s=say sorry
gossip|cotillear|ˈgɑːsɪp|V|cmu|B1|They love to gossip about neighbors.|Les encanta cotillear sobre los vecinos.|r=col; n=En EE. UU. es sustantivo y verbo sin connotación positiva.
rumor|rumor|ˈruːmər|S|cmu|B1|It's just a rumor, not news.|Es solo un rumor, no una noticia.|c=spread a rumor
argument|discusión (pelea)|ˈɑːrgjumənt|S|rel|B1|They had an argument over money.|Tuvieron una discusión por dinero.|ff=1;n=argument también es «argumento» (razonamiento); pelea familiar: fight.
discuss|debatir|dɪˈskʌs|V|cmu|B1|Let's discuss the plan tomorrow.|Debatamos el plan mañana.|n=discuss NO lleva about: discuss the plan.
describe|describir|dɪˈskraɪb|V|cmu|B1|Can you describe the suspect?|¿Puedes describir al sospechoso?
promise|prometer|ˈprɑːmɪs|V|cmu|B1|I promise to call you tonight.|Prometo llamarte esta noche.|c=keep a promise, break a promise
recommend|recomendar|ˌrɛkəˈmɛnd|V|cmu|B1|The waiter recommended the salmon.|El camarero recomendó el salmón.|n=recommend doing o recommend that + subjuntivo.
reason|motivo|ˈriːzən|S|cmu|B1|The reason is simple: no time.|El motivo es simple: falta de tiempo.|c=for this reason
conversation|conversación|ˌkɑːnvərˈseɪʃən|S|cmu|B1|We had a long conversation.|Tuvimos una larga conversación.|c=make conversation
fluent|con fluidez|ˈfluːənt|A|stu|B1|She is fluent in three languages.|Habla tres idiomas con fluidez.|c=fluent in
# ─── B1 · carácter y emociones (14) ───
proud|orgulloso|praʊd|A|emo|B1|I'm proud of my students.|Estoy orgulloso de mis alumnos.|c=proud of
disappointed|decepcionado|ˌdɪsəˈpɔɪntɪd|A|emo|B1|He was disappointed with the result.|Quedó decepcionado con el resultado.|c=disappointed with
anxious|inquieto|ˈæŋkʃəs|A|emo|B1|I get anxious before exams.|Me pongo inquieto antes de los exámenes.|ff=1;n=anxious también significa «deseoso»: anxious to start. En EE. UU. coloquial = nervioso.
confident|seguro de sí mismo|ˈkɑːnfɪdənt|A|emo|B1|She feels confident about the interview.|Se siente segura con la entrevista.|c=confident about
shy|tímido|ʃaɪ|A|emo|B1|He is shy with strangers.|Es tímido con los desconocidos.
lazy|perezoso|ˈleɪzi|A|emo|B1|Don't be lazy: do your homework.|No seas perezoso: haz los deberes.|a=hardworking
hardworking|trabajador|ˌhɑːrdˈwɜːrkɪŋ|A|emo|B1|She is hardworking and reliable.|Es trabajadora y fiable.|a=lazy
honest|honesto|ˈɑːnɪst|A|emo|B1|An honest answer, please.|Una respuesta honesta, por favor.|a=dishonest
rude|grosero|ruːd|A|emo|B1|It's rude to point at people.|Es de mala educación señalar a la gente.|a=polite
polite|cortés|pəˈlaɪt|A|emo|B1|He is always polite to customers.|Siempre es cortés con los clientes.|a=rude
jealous|celoso|ˈdʒɛləs|A|emo|B1|He gets jealous easily.|Se pone celoso con facilidad.|n=Envidioso (de lo ajeno) es envidioso; jealous también cubre eso en EE. UU.
patient (adj)|paciente|ˈpeɪʃənt|A|emo|B1|Be patient with the kids.|Ten paciencia con los niños.|a=impatient
stubborn|testarudo|ˈstʌbərn|A|emo|B1|My uncle is very stubborn.|Mi tío es muy testarudo.|s=headstrong
reliable|fiable|rɪˈlaɪəbəl|A|emo|B1|She is a reliable friend.|Es una amiga fiable.
# ─── B1 · medios y tecnología (12) ───
article|artículo|ˈɑːrtɪkəl|S|att|B1|I read an article about NASA.|Leí un artículo sobre la NASA.
headline|titular|ˈhɛdlaɪn|S|att|B1|The headline surprised everyone.|El titular sorprendió a todos.|c=front-page headline
broadcast|emisión|ˈbrɔːdkæst|S|att|B1|The broadcast starts at eight.|La emisión empieza a las ocho.|n=Verbos irregulares: broadcast, broadcast, broadcast.
channel|canal|ˈtʃænəl|S|tec|B1|Change the channel, please.|Cambia de canal, por favor.|ff=1;n=Canal de la tele: channel; canal de agua es también channel (English Channel).
subscribe|suscribirse|səbˈskraɪb|V|tec|B1|I subscribe to two podcasts.|Me suscribo a dos pódcasts.|c=subscribe to
podcast|pódcast|ˈpɑːdkæst|S|tec|B1|We listen to a podcast in English.|Escuchamos un pódcast en inglés.
notification|notificación|ˌnoʊtɪfɪˈkeɪʃən|S|tec|B1|I got a notification from the bank.|Recibí una notificación del banco.
attachment|adjunto|əˈtætʃmənt|S|tec|B1|Send the photo as an attachment.|Envía la foto como adjunto.|c=email attachment
log in|iniciar sesión|ˌlɑːg ˈɪn|L|tec|B1|Log in with your new password.|Inicia sesión con tu nueva contraseña.|a=log out
sign up|registrarse|ˌsaɪn ˈʌp|L|tec|B1|Sign up for the free course.|Regístrate en el curso gratuito.|n=Sign up (darse de alta) ≠ sign in (entrar).
forward (an email)|reenviar|ˈfɔːrwərd|V|tec|B1|Forward the invite to Ana, please.|Reenvía la invitación a Ana, por favor.
password|contraseña|ˈpæswɜːrd|S|tec|B1|Never share your password.|Nunca compartas tu contraseña.
# ─── B1 · casa y ciudad (8) ───
neighborhood|barrio|ˈneɪbərhʊd|S|cit|B1|Our neighborhood is quiet at night.|Nuestro barrio es tranquilo de noche.|n=En EE. UU. también area: my area.
suburb|afueras (residenciales)|ˈsʌbɜːrb|S|cit|B1|They live in the suburbs of Boston.|Viven en las afueras de Boston.|n=Suburb en EE. UU. es neutro (ciudad dormitorio), no lleva matiz pobre.
downtown|el centro (ciudad)|ˌdaʊnˈtaʊn|D|cit|B1|We went downtown for dinner.|Fuimos al centro a cenar.|n=En GB: the city centre; downtown es adverbio sin «to»: went downtown.
chores|tareas de casa|tʃɔːrz|S|cas|B1|I do my chores on Saturdays.|Hago mis tareas de casa los sábados.|c=do the chores
laundry|colada|ˈlɔːndri|S|cas|B1|The laundry is in the basement.|La colada está en el sótano.|c=do the laundry
trash|basura|træʃ|S|cas|B1|Take out the trash, please.|Saca la basura, por favor.|n=EE. UU.: trash/garbage; GB: rubbish. Trash talk es «vacilar».
utilities|servicios (luz, agua)|juːˈtɪlɪtiz|S|cas|B1|Rent includes utilities.|La renta incluye los servicios.|r=for
# ─── B1 · phrasal intro (10) ───
give up|rendirse|ˌgɪv ˈʌp|L|emo|B1|Never give up on your dreams.|Nunca te rindas con tus sueños.|c=give up on
find out|averiguar|ˌfaɪnd ˈaʊt|L|cmu|B1|I found out the truth yesterday.|Averigüé la verdad ayer.
look forward to|tener ganas de|ˌlʊk ˈfɔːrwərd tuː|L|emo|B1|I look forward to seeing you.|Tengo ganas de verte.|n=Siempre con -ing: look forward to meeting you.
get along (with)|llevarse bien|ɡɛt əˈlɔŋ|L|rel|B1|I get along with my in-laws.|Me llevo bien con mis suegros.|c=get along with
look after|cuidar de|ˌlʊk ˈæftər|L|fam|B1|She looks after her grandmother.|Cuida de su abuela.|s=take care of
grow up|crecer|ˌgroʊ ˈʌp|L|fam|B1|I grew up in Texas.|Crecí en Texas.|c=grow up in
put off|posponer|ˌpʊt ˈɔːf|L|tmp|B1|Don't put off the dentist visit.|No pospongas la visita al dentista.|s=postpone
run out of|quedarse sin|ˌrʌn ˈaʊt əv|L|ali|B1|We ran out of milk.|Nos quedamos sin leche.|c=run out of time
cheer up|animarse|ˌtʃɪr ˈʌp|L|emo|B1|Cheer up: the weekend is near.|Anímate: el fin de semana está cerca.
catch up (with)|ponerse al día|ˌkætʃ ˈʌp|L|rel|B1|Let's catch up over coffee.|Pongámonos al día con un café.|c=catch up on
# ─── B2 · verbos de argumentación (22) ───
claim|afirmar|kleɪm|V|cnn|B2|The study claims a clear effect.|El estudio afirma un efecto claro.|n=claim también es «reclamación» (insurance claim).
argue|sostener / discutir|ˈɑːrgjuː|V|cnn|B2|She argued that the data was wrong.|Sostuvo que los datos eran erróneos.|c=argue that; n=argue about es «pelearse por».
point out|señalar|ˌpɔɪnt ˈaʊt|L|cnn|B2|He pointed out a key flaw.|Señaló un fallo clave.
emphasize|recalcar|ˈɛmfəsaɪz|V|cnn|B2|The report emphasizes safety.|El informe recalca la seguridad.|s=stress
imply|dar a entender|ɪmˈplaɪ|V|cnn|B2|Are you implying I'm wrong?|¿Das a entender que me equivoco?|a=state plainly
assume|suponer|əˈsuːm|V|cnn|B2|Let's assume the cost is fixed.|Supongamos que el coste es fijo.|s=presume; n=Assuming that… abre condicionales.
prove|demostrar|pruːv|V|sci|B2|The test proved the theory.|La prueba demostró la teoría.|n=Participio: proven (EE. UU.) / proved.
deny|negar|dɪˈnaɪ|V|cnn|B2|He denied the accusations.|Negó las acusaciones.|c=deny doing; n=There's no denying: no se puede negar.
admit|admitir|əˈdɪt|V|cnn|B2|She admitted the mistake.|Admitió el error.|c=admit to
persuade|persuadir|pərˈsweɪd|V|cmu|B2|They persuaded me to stay.|Me persuadieron para quedarme.|c=persuade sb to
convince|convencer|kənˈvɪns|V|cmu|B2|I convinced her to try again.|La convencí para intentarlo de nuevo.|c=convince sb to; s=persuade
reveal|revelar|rɪˈviːl|V|att|B2|The article revealed the plan.|El artículo reveló el plan.|a=conceal
expose|desvelar / exponer|ɪkˈspoʊz|V|att|B2|The report exposed the fraud.|El informe desveló el fraude.|n=exposed to radiation: expuesto a.
exaggerate|exagerar|ɪgˈzædʒəreɪt|V|cmu|B2|Don't exaggerate the numbers.|No exageres las cifras.|a=downplay
summarize|resumir|ˈsʌməraɪz|V|stu|B2|Summarize the text in one line.|Resume el texto en una línea.|s=recap
predict|predecir|prɪˈdɪkt|V|sci|B2|No one predicted the crisis.|Nadie predijo la crisis.|n=forecast es con datos (el tiempo).
estimate|estimar|ˈɛstɪmət|V|fin|B2|They estimate a 5% rise.|Estiman una subida del 5%.|n=Sustantivo con misma forma: a rough estimate.
assess|evaluar|əˈsɛs|V|fin|B2|We assess each application.|Evaluamos cada solicitud.|s=evaluate
evaluate|evaluar|ɪˈvæljueɪt|V|stu|B2|The committee evaluated the project.|El comité evaluó el proyecto.|s=assess
justify|justificar|ˈdʒʌstɪfaɪ|V|cnn|B2|How do you justify the expense?|¿Cómo justificas el gasto?|c=justify doing
undermine|minar (debilitar)|ˌʌndərˈmaɪn|V|cnn|B2|The scandal undermined trust.|El escándalo minó la confianza.|s=weaken
support (verb)|respaldar|səˈpɔːrt|V|cnn|B2|The data supports the theory.|Los datos respaldan la teoría.|n=Sustantivo: support (apoyo) y «soporte técnico» tech support.
# ─── B2 · sustantivos abstractos (30) ───
awareness|conciencia (conocimiento)|əˈwɛrnəs|S|ast|B2|The campaign raised awareness.|La campaña generó conciencia.|c=raise awareness
impact|impacto|ˈɪmpækt|S|ast|B2|The law had a huge impact.|La ley tuvo un enorme impacto.|c=have an impact on
trend|tendencia|trɛnd|S|fin|B2|Remote work is a growing trend.|El teletrabajo es una tendencia al alza.|c=follow a trend
approach|enfoque|əˈproʊtʃ|S|ast|B2|We need a new approach.|Necesitamos un nuevo enfoque.|c=take an approach
outcome|resultado (desenlace)|ˈaʊtkʌm|S|ast|B2|The outcome surprised the pollsters.|El resultado sorprendió a los encuestadores.|s=result
benefit|beneficio|ˈbɛnɪfɪt|S|fin|B2|The plan has clear benefits.|El plan tiene claros beneficios.|c=cost-benefit; n=benefits también son «prestaciones» (sociales).
drawback|inconveniente|ˈdrɔːbæk|S|ast|B2|The main drawback is the price.|El principal inconveniente es el precio.|a=advantage
requirement|requisito|rɪˈkwaɪərmənt|S|lav|B2|Spanish is a requirement for the job.|El español es un requisito del puesto.|c=meet the requirements
standard|estándar|ˈstændərd|S|ast|B2|The hotel meets high standards.|El hotel cumple altos estándares.|c=set a standard
evidence|pruebas (evidencia)|ˈɛvɪdəns|S|ist|B2|There is strong evidence for it.|Hay pruebas sólidas.|n=Incontable y casi siempre plural en español: the evidence shows.
extent|grado / extensión|ɪkˈstɛnt|S|ast|B2|To some extent, I agree.|Hasta cierto punto, estoy de acuerdo.|c=to some extent
insight|mirada profunda|ˈɪnsaɪt|S|ast|B2|Her book offers new insights.|Su libro ofrece nuevas miradas.|c=gain insight into
prospect|perspectiva|ˈprɑːspɛkt|S|fin|B2|Job prospects are improving.|Las perspectivas de empleo mejoran.|c=job prospects
concern|preocupación|kənˈsɜːrn|S|emo|B2|Safety is our main concern.|La seguridad es nuestra principal preocupación.|c=raise concerns
contribution|aportación|ˌkɑːntrɪˈbjuːʃən|S|ast|B2|Your contribution mattered.|Tu aportación importó.|c=make a contribution
involvement|implicación|ɪnˈvɑːlvmənt|S|ast|B2|Parent involvement improves schools.|La implicación de los padres mejora las escuelas.
achievement|logro|əˈtʃiːvmənt|S|ast|B2|Landing the rover was a huge achievement.|Aterrizar el róver fue un logro enorme.|c=sense of achievement
limitation|limitación|ˌlɪmɪˈteɪʃən|S|ast|B2|The study has limitations.|El estudio tiene limitaciones.|a=strength
capacity|capacidad|kəˈpæsɪti|S|ast|B2|The stadium has 80,000 capacity.|El estadio tiene capacidad para 80.000.|n=EE. UU.: capacity también «puestos» en empresas.
likelihood|probabilidad|ˈlaɪklihʊd|S|ast|B2|There's little likelihood of rain.|Hay poca probabilidad de lluvia.|c=in all likelihood
constraint|restricción|kənˈstreɪnt|S|ast|B2|Budget constraints delayed the launch.|Las restricciones presupuestarias retrasaron el lanzamiento.|r=for
bias|sesgo|ˈbaɪəs|S|ast|B2|The sample shows a clear bias.|La muestra muestra un sesgo claro.|c=gender bias
stereotype|estereotipo|ˈstɛriətaɪp|S|ast|B2|The ad relies on old stereotypes.|El anuncio se apoya en viejos estereotipos.
welfare|bienestar (social)|ˈwɛlfɛr|S|ist|B2|The state spends on welfare.|El Estado gasta en bienestar social.|c=welfare state; n=Welfare en EE. UU. coloquial puede ser «subsidios».
citizenship|ciudadanía|ˈsɪtɪzənʃɪp|S|ist|B2|She applied for citizenship.|Solicitó la ciudadanía.|c=dual citizenship
poverty|pobreza|ˈpɑːvərti|S|ist|B2|The program fights child poverty.|El programa combate la pobreza infantil.|c=live in poverty
inequality|desigualdad|ˌɪnɪˈkwɑːlɪti|S|ist|B2|Income inequality keeps rising.|La desigualdad de renta sigue subiendo.|a=equality
sustainability|sostenibilidad|səˌsteɪnəˈbɪlɪti|S|nat|B2|Sustainability guides the design.|La sostenibilidad guía el diseño.|r=for
consumption|consumo|kənˈsʌmpʃən|S|fin|B2|Energy consumption fell this year.|El consumo de energía bajó este año.|c=energy consumption
workforce|fuerza laboral|ˈwɜːrkfɔːrs|S|lav|B2|The workforce is fully remote.|La fuerza laboral es 100% remota.|c=skilled workforce
# ─── B2 · phrasal verbs (20) ───
carry out|llevar a cabo|ˌkæri ˈaʊt|L|lav|B2|They carried out the audit in May.|Llevaron a cabo la auditoría en mayo.|c=carry out research
come up with|idear|kʌm ˈʌp wɪð|L|ast|B2|She came up with a solution.|Ideó una solución.
put up with|aguantar|ˌpʊt ˈʌp wɪð|L|emo|B2|I can't put up with the noise.|No puedo aguantar el ruido.|s=tolerate
turn down|rechazar|ˌtɜːrn ˈdaʊn|L|cmu|B2|He turned down the offer.|Rechazó la oferta.|n=turn down también es «bajar (el volumen)».
break down|averiarse / descomponerse|ˌbreɪk ˈdaʊn|L|tra|B2|The car broke down on the highway.|El coche se averió en la autopista.|n=Negociaciones que «fallan» también break down.
bring up|sacar (un tema)|ˌbrɪŋ ˈʌp|L|cmu|B2|Don't bring up politics at dinner.|No saques política en la cena.|n=Bring up también es «criar» (kids).
sort out|resolver / ordenar|ˌsɔːrt ˈaʊt|L|ast|B2|We'll sort out the details later.|Resolveremos los detalles luego.|s=figure out
figure out|descifrar|ˌfɪgjər ˈaʊt|L|ast|B2|I can't figure out this formula.|No descifro esta fórmula.|s=work out (GB)
set up|montar|ˌsɛt ˈʌp|L|fin|B2|They set up a small studio.|Montaron un pequeño estudio.|c=set up a business
take over|hacerse cargo de|ˌteɪk ˈoʊvər|L|fin|B2|Her daughter took over the bakery.|Su hija se hizo cargo de la panadería.
get over|superar / reponerse|ˌgɛt ˈoʊvər|L|emo|B2|He got over the flu quickly.|Superó la gripe rápido.|c=get over a breakup
make up for|compensar|ˌmeɪk ˈʌp fɔːr|L|fin|B2|I'll make up for the lost time.|Compensaré el tiempo perdido.|c=make up for lost time
put forward|proponer|ˌpʊt ˈfɔːrwərd|L|ist|B2|They put forward a new plan.|Propusieron un plan nuevo.|s=propose
rule out|descartar|ˌruːl ˈaʊt|L|sci|B2|Doctors ruled out an infection.|Los médicos descartaron una infección.
account for|explicar (porcentaje)|əˈkaʊnt fɔːr|L|fin|B2|Tourism accounts for 20% of jobs.|El turismo explica el 20% de los empleos.|c=account for
cut down on|reducir|ˌkʌt ˈdaʊn ɑːn|L|sla|B2|I'm cutting down on sugar.|Estoy reduciendo el azúcar.|s=cut back on
end up|acabar (por)|ˌɛnd ˈʌp|L|tmp|B2|We ended up staying home.|Acabamos quedándonos en casa.|c=end up doing
catch on|cuajar (hacerse popular)|ˌkætʃ ˈɑːn|L|att|B2|The trend caught on fast.|La moda cuajó rápido.
stand out|destacar|ˌstænd ˈaʊt|L|lav|B2|Her design stood out from the rest.|Su diseño destacaba del resto.|c=stand out from
break into|entrar por la fuerza en / abrirse paso en|ˌbreɪk ˈɪntuː|L|ist|B2|Someone broke into the office.|Alguien entró por la fuerza en la oficina.|n=break into the market: abrirse paso en el mercado.
# ─── B2 · idioms y expresiones (18) ───
piece of cake|pan comido|ˌpiːs əv ˈkeɪk|L|sve|B2|The exam was a piece of cake.|El examen fue pan comido.|r=col
once in a while|de vez en cuando|ˌwʌns ɪn ə ˈwaɪl|L|tmp|B2|We eat out once in a while.|Comemos fuera de vez en cuando.
on purpose|a propósito|ɑːn ˈpɜːrpəs|L|cmu|B2|He did it on purpose.|Lo hizo a propósito.|a=by accident
by chance|por casualidad|baɪ ˈtʃæns|L|tmp|B2|We met by chance in Lisbon.|Nos encontramos por casualidad en Lisboa.|s=by accident (sin querer)
keep in touch|mantenerse en contacto|ˌkiːp ɪn ˈtʌtʃ|L|rel|B2|Let's keep in touch after the course.|Mantengámonos en contacto tras el curso.|a=lose touch
under pressure|bajo presión|ˌʌndər ˈprɛʃər|L|emo|B2|She works well under pressure.|Trabaja bien bajo presión.
in the long run|a la larga|ɪn ðə lɔːŋ rʌn|L|tmp|B2|Saving now pays in the long run.|Ahorrar ahora compensa a la larga.|a=in the short term
take it easy|tomárselo con calma|ˌteɪk ɪt ˈiːzi|L|emo|B2|Take it easy this weekend.|Tómatelo con calma este fin de semana.|r=col
over the moon|feliz por algo (muy contento)|ˌoʊvər ðə muːn|L|emo|B2|She was over the moon about the baby.|Estaba muy contenta por el bebé.|r=col; a=down in the dumps
cost an arm and a leg|costar un ojo de la cara|ˌkɔːst ən ɑːrm ənd ə lɛg|L|fin|B2|The repair cost an arm and a leg.|La reparación costó un ojo de la cara.|r=col
hit the books|ponerse a estudiar en serio|ˌhɪt ðə ˈbʊks|L|stu|B2|Finals are close: time to hit the books.|Los finales se acercan: hora de ponerme a estudiar en serio.|r=col
break the ice|romper el hielo|ˌbreɪk ðə ˈaɪs|L|cmu|B2|A joke broke the ice at the meeting.|Un chiste rompió el hielo en la reunión.|c=icebreaker
a blessing in disguise|una bendición disfrazada|ə ˈblɛsɪŋ ɪn dɪsˈgaɪz|L|ast|B2|Missing that flight was a blessing in disguise.|Perder aquel vuelo fue una bendición disfrazada.|r=col
once and for all|de una vez por todas|ˌwʌns ənd fɔːr ˈɔːl|L|tmp|B2|Let's settle this once and for all.|Zanjemos esto de una vez por todas.
off the top of my head|sin pensarlo mucho|ˌɔːf ðə tɑːp əv maɪ hɛd|L|cmu|B2|Off the top of my head, I'd say forty.|Sin pensarlo mucho, diría cuarenta.|r=col
out of the blue|de la nada|ˌaʊt əv ðə bluː|L|tmp|B2|He called me out of the blue.|Me llamó de la nada.|s=all of a sudden
see eye to eye|poner de acuerdo (estar de acuerdo total)|ˌsiː aɪ tə aɪ|L|rel|B2|We don't see eye to eye on money.|No nos ponemos de acuerdo en dinero.
the last straw|la gota que colmó el vaso|ðə læst strɔː|L|emo|B2|The delay was the last straw.|El retraso fue la gota que colmó el vaso.|r=col; n=Frase completa: the last straw that broke the camel's back.
# ─── B2 · conectores formales (12) ───
moreover|además (formal)|mɔːrˈoʊvər|D|cnn|B2|The plan is late; moreover, it is over budget.|El plan va tarde; además, se pasa de presupuesto.|r=for
nevertheless|no obstante|ˌnɛvərðəˈlɛs|D|cnn|B2|The data is limited; nevertheless, the pattern holds.|Los datos son limitados; no obstante, el patrón se sostiene.|r=for; s=nonetheless
whereas|mientras que (contraste)|wɛrˈæz|C|cnn|B2|Sales fell in stores, whereas online sales grew.|Las ventas cayeron en tienda, mientras que las online crecieron.|r=for
therefore|por lo tanto|ˈðɛrfɔːr|D|cnn|B2|The bridge is closed; therefore, take the tunnel.|El puente está cerrado; por lo tanto, toma el túnel.|r=for
thus|así pues|ðʌs|D|cnn|B2|The sample was small; thus, the finding is provisional.|La muestra era pequeña; así pues, el hallazgo es provisional.|r=for
as far as I'm concerned|por lo que a mí respecta|æz fɑːr æz aɪm kənˈsɜːrnd|L|cmu|B2|As far as I'm concerned, the deal is fair.|Por lo que a mí respecta, el trato es justo.|r=neu
in other words|es decir, en otras palabras|ɪn ˈʌðər wɜːrdz|L|cnn|B2|In other words, we start over.|Es decir, empezamos de cero.
on the contrary|todo lo contrario|ɑːn ðə ˈkɑːntrɛri|L|cnn|B2|It wasn't hard; on the contrary, it was fun.|No fue difícil; todo lo contrario, fue divertido.
as a result|como resultado|æz ə rɪˈzʌlt|L|cnn|B2|Rains failed; as a result, prices rose.|Las lluvias fallaron; como resultado, los precios subieron.
not to mention|sin contar|ˌnɑːt tə ˈmɛnʃən|L|cnn|B2|It's fast, not to mention cheap.|Es rápido, sin contar barato.|c=let alone (ni siquiera)
to sum up|en resumen|tə ˈsʌm ʌp|L|cnn|B2|To sum up, we need more time.|En resumen, necesitamos más tiempo.|r=for; s=in short
what's more|es más|wɑːts mɔːr|L|cnn|B2|She won; what's more, she broke the record.|Ganó; es más, batió el récord.|r=neu
# ─── B2 · ley y sociedad (12) ───
offense|delito / ofensa|əˈfɛns|S|ist|B2|Minor offenses carry fines.|Los delitos menores conllevan multas.|n=En EE. UU. offense también es «ofender» (take offense).
lawsuit|pleito|ˈlɔːsuːt|S|ist|B2|The company faces a lawsuit.|La compañía se enfrenta a un pleito.|c=file a lawsuit
fine (multa)|multa|faɪn|S|ist|B2|I got a parking fine.|Me pusieron una multa de aparcamiento.|ff=1;n=fine como adjetivo es «bien/multo»; como sustantivo, multa.
charge (acusar)|imputar|tʃɑːrdʒ|V|ist|B2|He was charged with theft.|Lo imputaron por robo.|c=charge sb with
jury|jurado|ˈdʒʊri|S|ist|B2|The jury reached a verdict in a day.|El jurado llegó a un veredicto en un día.|c=grand jury (EE. UU.)
trial|juicio|ˈtraɪəl|S|ist|B2|The trial starts in March.|El juicio empieza en marzo.|c=fair trial; ff=1;n=trial también es «prueba» (free trial).
sentence (pena)|condena|ˈsɛntəns|S|ist|B2|He received a five-year sentence.|Recibió una condena de cinco años.|ff=1;n=sentence como frase es A1: mismo sustantivo, dos mundos.
human rights|derechos humanos|ˌjuːmən ˈraɪts|L|ist|B2|The charter protects human rights.|La carta protege los derechos humanos.|c=human rights watch
discrimination|discriminación|dɪˌskrɪmɪˈneɪʃən|S|ist|B2|Discrimination at work is illegal.|La discriminación laboral es ilegal.|c=racial discrimination
protest (noun)|protesta|ˈproʊtɛst|S|ist|B2|A protest filled the square.|Una protesta llenó la plaza.|n=Verbo: prəˈtɛst (acento distinto en EE. UU.: PRO-test vs pro-TEST).
poll|encuesta|poʊl|S|ist|B2|The poll shows a tight race.|La encuesta muestra un resultado ajustado.|c=opinion poll; n=polls también «elecciones» (GB).
the press|la prensa|ðə prɛs|L|att|B2|The press covered the launch.|La prensa cubrió el lanzamiento.|c=freedom of the press
# ─── B2 · medio ambiente y ciencia (11) ───
climate change|cambio climático|ˌklaɪmɪt ˈtʃeɪndʒ|L|nat|B2|Climate change drives the agenda.|El cambio climático marca la agenda.
global warming|calentamiento global|ˌgroʊbəl ˈwɔːrmɪŋ|L|nat|B2|Global warming affects harvests.|El calentamiento global afecta a las cosechas.
emissions|emisiones|ɪˈmɪʃənz|S|nat|B2|The city cut emissions by 15%.|La ciudad recortó las emisiones un 15%.|c=carbon emissions
renewable|renovable|rɪˈnuːəbəl|A|tec|B2|Renewable energy is now cheaper.|La energía renovable ya es más barata.|c=renewable energy
drought|sequía|draʊt|S|cli|B2|The drought ruined the crop.|La sequía arruinó la cosecha.|p=droughts
flood (noun)|inundación|flʌd|S|cli|B2|Floods closed the highway.|Las inundaciones cerraron la autopista.|c=flash flood
extinction|extinción|ɪkˈstɪŋkʃən|S|nat|B2|The law aims to prevent extinction.|La ley busca evitar la extinción.|c=on the brink of extinction
species|especie|ˈspiːʃiːz|S|nat|B2|The park protects endemic species.|El parque protege especies endémicas.|n=Mismo singular y plural: one species, two species.
ecosystem|ecosistema|ˈiːkoʊˌsɪstəm|S|nat|B2|Wolves reshaped the whole ecosystem.|Los lobos remodelaron todo el ecosistema.
greenhouse gases|gases de efecto invernadero|ˌgrinːhaʊs ˈgæsɪz|L|nat|B2|Greenhouse gases trap heat.|Los gases de efecto invernadero atrapan calor.|c=GHG (sigla)
fossil fuels|combustibles fósiles|ˌfɑːsəl ˈfjuːəlz|L|nat|B2|We must phase out fossil fuels.|Debemos eliminar los combustibles fósiles.|c=phase out
# ─── B2 · escritura académica (12) ───
essay|ensayo (redacción)|ˈɛseɪ|S|stu|B2|The essay is due on Friday.|El ensayo se entrega el viernes.|ff=1;n=essay en EE. UU. es redacción académica; «ensayo (prueba)» también es essay (test).
draft (noun)|borrador|dræft|S|stu|B2|Send me the first draft.|Mándame el primer borrador.|n=the draft en EE. UU. también es «el servicio militar obligatorio».
outline|esquema|ˈaʊtlaɪn|S|stu|B2|Write an outline before the essay.|Escribe un esquema antes del ensayo.|s=summary
paraphrase|parafrasear|ˈpærəfreɪz|V|stu|B2|Paraphrase, don't copy.|Parafrasea, no copies.|c=paraphrase source
quote (verb)|citar|kwoʊt|V|let|B2|Quote two authors per paragraph.|Cita dos autores por párrafo.|c=quote from; n=quote (GB) = comillas.
source|fuente|sɔːrs|S|stu|B2|Check the original source.|Comprueba la fuente original.|c=primary source
reference|referencia|ˈrɛfərəns|S|stu|B2|The reference list is incomplete.|La lista de referencias está incompleta.|c=reference list
plagiarism|plagio|ˈpleɪdʒərɪzəm|S|stu|B2|Plagiarism ends careers.|El plagio acaba con carreras.|c=commit plagiarism
bibliography|bibliografía|ˌbɪbliˈɑːgrəfi|S|stu|B2|Add the bibliography at the end.|Añade la bibliografía al final.|r=for
proofread|revisar (corregir pruebas)|ˈpruːfriːd|V|stu|B2|Proofread the abstract twice.|Revisa el resumen dos veces.|c=proofread carefully
journal|revista científica / diario|ˈdʒɜːrnəl|S|sci|B2|The study appeared in a journal.|El estudio salió en una revista científica.|ff=1;n=journal no es «diario personal» (es diary); sí es prensa diaria en GB.
peer review|revisión por pares|ˌpɪr rɪˈvjuː|L|sci|B2|Peer review took three months.|La revisión por pares tardó tres meses.|r=tec
# ─── B2 · economía y negocios (14) ───
investment|inversión|ɪnˈvɛstmənt|S|fin|B2|Early investment pays off.|La inversión temprana compensa.|c=make an investment
stock market|bolsa (valores)|ˌstɑːk ˈmɑːrkɪt|L|fin|B2|The stock market dipped in March.|La bolsa bajó en marzo.|c=stock market crash
share (acción)|acción (bursátil)|ʃɛr|S|fin|B2|She bought shares in the startup.|Compró acciones de la startup.|n=GB: shares; EE. UU.: stocks.
profit|beneficio|ˈprɑːfɪt|S|fin|B2|Profit rose 8% this quarter.|El beneficio subió un 8% este trimestre.|c=profit margin; a=loss
revenue|ingresos|ˈrɛvənuː|S|fin|B2|Revenue beat expectations.|Los ingresos superaron lo previsto.|r=for
bankruptcy|quiebra|ˈbæŋkrʌptsi|S|fin|B2|The chain filed for bankruptcy.|La cadena se acogió a la quiebra.|c=file for bankruptcy
startup|empresa emergente|ˈstɑːrtʌp|S|fin|B2|The startup grew from two to fifty people.|La emergente creció de dos a cincuenta personas.|r=col
entrepreneur|emprendedor|ˌɑːntrəprəˈnɜːr|S|pro|B2|The entrepreneur opened three shops.|El emprendedor abrió tres tiendas.|p=entrepreneurs
negotiation|negociación|nɪˌgoʊʃiˈeɪʃən|S|fin|B2|The negotiation lasted all night.|La negociación duró toda la noche.|c=under negotiation
deal (noun)|trato|diːl|S|fin|B2|We closed the deal on Monday.|Cerramos el trato el lunes.|c=make a deal; r=col
supply chain|cadena de suministro|səˈplaɪ tʃeɪn|L|fin|B2|The supply chain proved fragile.|La cadena de suministro se mostró frágil.|r=tec
wage gap|brecha salarial|ˈweɪdʒ gæp|L|fin|B2|The wage gap narrowed slowly.|La brecha salarial se estrechó despacio.
interest rate|tipo de interés|ˈɪntrɪst reɪt|L|fin|B2|The Fed cut the interest rate.|La Fed recortó el tipo de interés.|c=interest rate hike
loan|préstamo|loʊn|S|fin|B2|They took a loan for the house.|Pidieron un préstamo para la casa.|c=take out a loan; ff=1;n=loan también es «prestar» como verbo (I loaned him money, EE. UU.).
# ─── C1 · académico (20) ───
hypothesis|hipótesis|haɪˈpɑːθəsɪs|S|sci|C1|The experiment tested the hypothesis.|El experimento puso a prueba la hipótesis.|p=hypotheses
framework|marco (teórico)|ˈfreɪmwɜːrk|S|sci|C1|The study needs a theoretical framework.|El estudio necesita un marco teórico.|c=legal framework
paradigm|paradigma|ˈpærədaɪm|S|sci|C1|The discovery shifted the paradigm.|El hallazgo cambió el paradigma.|c=paradigm shift
methodology|metodología|ˌmɛθəˈdɑːlədʒi|S|sci|C1|The methodology section explains the sample.|La sección de metodología explica la muestra.|r=tec
criterion|criterio|kraɪˈtɪriən|S|sci|C1|The main criterion is originality.|El criterio principal es la originalidad.|p=criteria; n=El plural es criteria, jamás «criterions».
notion|noción|ˈnoʊʃən|S|ast|C1|The notion of privacy has evolved.|La noción de privacidad ha evolucionado.|c=notion of
premise|premisa|ˈprɛmɪs|S|sci|C1|The argument rests on a false premise.|El argumento se apoya en una premisa falsa.|n=on-premises: en el local (informática).
discourse (noun)|discurso (académico)|ˈdɪskɔːrs|S|let|C1|The paper analyzes political discourse.|El artículo analiza el discurso político.|r=for
profound|profundo|prəˈfaʊnd|A|ast|C1|The book had a profound effect on me.|El libro tuvo un efecto profundo en mí.|a=superficial
rigorous|riguroso|ˈrɪgərəs|A|sci|C1|The testing was rigorous.|Las pruebas fueron rigurosas.|s=meticulous
comprehensive|completo (exhaustivo)|ˌkɑːmprɪˈhɛnsɪv|A|sci|C1|The report gives a comprehensive view.|El informe ofrece una visión exhaustiva.|n=NO significa «comprensible» (understandable): ff clásico.
substantial|considerable|səbˈstænʃəl|A|fin|C1|There was substantial improvement.|Hubo una mejora considerable.|s=significant
empirical|empírico|ɪmˈpɪrɪkəl|A|sci|C1|Claims need empirical support.|Las afirmaciones requieren apoyo empírico.|c=empirical evidence; a=theoretical
findings|resultados (hallazgos)|ˈfaɪndɪŋz|S|sci|C1|The findings confirm the model.|Los hallazgos confirman el modelo.|c=key findings
peer review (C1)|revisión por pares (sentido C1)|ˌpɪr rɪˈvjuː|L|sci|C1|Peer review guards the quality of journals.|La revisión por pares vela por la calidad de las revistas.
scholar|estioso (erudito)|ˈskɑːlər|S|stu|C1|A visiting scholar gave the lecture.|Una erudita invitada dio la clase.|n=Erudito/estudioso; scholarship puede ser «beca» y «erudición».
symposium|simposio|sɪmˈpoʊziəm|S|stu|C1|He spoke at a symposium on ethics.|Ponenció en un simposio sobre ética.|p=symposia, symposiums
inquiry|indagación|ˈɪnkwəri|S|sci|C1|The inquiry lasted two years.|La indagación duró dos años.|c=public inquiry; n=EE. UU. inquiry/inquiero: pronunciación «inkwiríi».
elaborate (verb)|desarrollar (detallar)|ɪˈlæbəreɪt|V|cmu|C1|Could you elaborate on that point?|¿Podrías desarrollar ese punto?|c=elaborate on; n=Como adjetivo: ɪˈlæbərɪt (recargado).
advocate (verb)|abogar por|ˈædvəkeɪt|V|ist|C1|They advocate stricter rules.|Abogan por reglas más estrictas.|c=advocate for; n=Como sustantivo: defensor (animal rights advocate).
# ─── C1 · periodismo y política (15) ───
allege|alegar (sin probar)|əˈlɛdʒ|V|att|C1|The paper alleges a cover-up.|El periódico alega un encubrimiento.|r=for; n=Presunción de inocencia: allegedly.
leak (verb)|filtrar|liːk|V|att|C1|Someone leaked the memo.|Alguien filtró el memorando.|c=leak to the press
scrutiny|escrutinio|ˈskruːtəni|S|att|C1|The deal came under scrutiny.|El trato quedó bajo escrutinio.|c=public scrutiny
disclose|revelar (oficial)|dɪsˈkloʊz|V|fin|C1|The firm must disclose its earnings.|La empresa debe revelar sus ingresos.|r=for
controversy|polémica|ˈkɑːntrəvɜːrsi|S|att|C1|The mural sparked controversy.|El mural encendió la polémica.|c=spark controversy
lobby (noun)|grupo de presión|ˈlɑːbi|S|ist|C1|The farm lobby blocked the bill.|El grupo de presión agrario bloqueó el proyecto.|n=lobby también es «vestíbulo» de hotel.
mandate|mandato|ˈmændeɪt|S|ist|C1|The election gave her a clear mandate.|Las elecciones le dieron un mandato claro.|c=popular mandate
referendum|referéndum|ˌrɛfəˈrɛndəm|S|ist|C1|The referendum passed by 60%.|El referéndum pasó con el 60%.|p=referenda, referendums
unprecedented|sin precedentes|ʌnˈprɛsɪdɛntɪd|A|att|C1|The storm was unprecedented.|La tormenta fue sin precedentes.|c=unprecedented scale
deadlock|punto muerto|ˈdɛdlɑːk|S|ist|C1|Talks reached a deadlock.|Las conversaciones llegaron a un punto muerto.|c=break the deadlock
polarization|polarización|ˌpoʊləraɪˈzeɪʃən|S|ist|C1|Polarization poisons debate.|La polarización envenena el debate.
populism|populismo|ˈpɑːpjəlɪzəm|S|ist|C1|The region saw a rise of populism.|La región vio un auge del populismo.
accountability|responsabilidad (rendición de cuentas)|əˌkaʊntəˈbɪlɪti|S|ist|C1|Voters demand accountability.|Los electores exigen rendición de cuentas.|r=for
establishment|el establishment (el sistema)|ɪˈstæblɪʃmənt|S|ist|C1|The act angered the establishment.|La ley irritó al sistema.|r=neu
grassroots|de base (popular)|ˈgræsruːts|S|ist|C1|A grassroots campaign changed the city.|Una campaña de base cambió la ciudad.|c=grassroots movement
# ─── C1 · literario y estilo (20) ───
vivid|vívido|ˈvɪvɪd|A|let|C1|The novel gives a vivid portrait of Havana.|La novela retrata La Habana con viveza.|c=vivid memory
poignant|conmovedor|ˈpɔɪnjənt|A|let|C1|The ending is poignant without being sentimental.|El final es conmovedor sin ser sensiblero.
subtle|sutil|ˈsʌtəl|A|let|C1|The change is subtle but real.|El cambio es sutil pero real.|n=La b no se pronuncia: SUT-l. c=subtle difference
compelling|que atrapa (irresistible)|kəmˈpɛlɪŋ|A|cin|C1|A compelling case for reform.|Un argumento irrefutable a favor de la reforma.|s=convincing
evoke|evocar|ɪˈvoʊk|V|let|C1|The smell evokes my grandmother's kitchen.|El olor evoca la cocina de mi abuela.|c=evoke memories
depict|retratar|dɪˈpɪkt|V|art|C1|The mural depicts the 1965 march.|El mural retrata la marcha de 1965.|s=portray
nuanced|matizado|ˈnuːɑːnst|A|let|C1|A nuanced answer, not a slogan.|Una respuesta matizada, no una consigna.
melancholy|melancolía|ˈmɛlənˌkɑːli|S|emo|C1|A mood of melancholy fills the film.|Una melancolía atraviesa la película.|r=let
eloquent|elocuente|ˈɛləkwənt|A|let|C1|Her silence was more eloquent than words.|Su silencio fue más elocuente que las palabras.|c=eloquent defense
witty|ingenioso|ˈwɪti|A|let|C1|The speech was witty and sharp.|El discurso fue ingenioso y mordaz.|s=humorous
novel (adj)|novedoso|ˈnɑːvəl|A|ast|C1|A novel approach to teaching.|Un enfoque novedoso de enseñanza.|ff=1;n=novel como «novela» es A2; como adjetivo, novedoso.
protagonist|protagonista|prəˈtægənɪst|S|let|C1|The protagonist is a bus driver in Lima.|El protagonista es un chofer de Lima.|ff=1;n=En inglés solo sustantivo; «protagonizar» es to star in.
narrator|narrador|ˈnɛrətər|S|let|C1|The narrator is unreliable.|El narrador es poco fiable.|c=unreliable narrator
metaphor|metáfora|ˈmɛtəfɔːr|S|let|C1|The poem turns the river into a metaphor.|El poema convierte el río en metáfora.|c=mixed metaphor
imagery|imaginería (imágenes literarias)|ˈɪmɪdʒri|S|let|C1|The imagery of winter runs through the book.|La imaginería del invierno recorre el libro.|r=let
verse|verso|vɜːrs|S|let|C1|He published three verses and a note.|Publicó tres versos y una nota.|n=Versed in: versado en.
prose|prosa|proʊz|S|let|C1|She writes prose of great clarity.|Escribe prosa de gran limpieza.|c=prose poem
anthology|antología|ænˈθɑːlədʒi|S|let|C1|The anthology gathers forty poets.|La antología reúne a cuarenta poetas.|r=for
gripping|que atrapa (absorbente)|ˈgrɪpɪŋ|A|cin|C1|A gripping thriller set in Lisbon.|Un thriller absorbente ambientado en Lisboa.|s=page-turner (novela que devora)
timeless|intemporal|ˈtaɪmləs|A|art|C1|A timeless design.|Un diseño intemporal.|a=dated
# ─── C1 · conectores y precisión (12) ───
notwithstanding|no obstante (con sustantivo)|ˌnɑːtwɪðˈstændɪŋ|P|cnn|C1|Notwithstanding the cost, the plan went ahead.|No obstante el coste, el plan siguió adelante.|r=for
albeit|aunque (formal)|ɔːlˈbiːt|C|cnn|C1|A quiet win, albeit an important one.|Una victoria discreta, aunque importante.|r=for
hence|de ahí que|hɛns|D|cnn|C1|The sample was biased; hence the caution.|La muestra estaba sesgada; de ahí que la cautela.|r=for
insofar as|en la medida en que|ˌɪnsoʊˈfɑːr æz|L|cnn|C1|It works insofar as the data is complete.|Funciona en la medida en que los datos estén completos.|r=for
with regard to|con respecto a|wɪð rɪˈgɑːrd tuː|L|cnn|C1|With regard to your letter, we agree.|Con respecto a su carta, estamos de acuerdo.|r=for; s=regarding
prior to|con anterioridad a|ˈpraɪər tuː|L|tmp|C1|Prior to the merger, both firms were small.|Antes de la fusión, ambas firmas eran pequeñas.|r=for
by and large|en general|baɪ ənd lɑːrdʒ|L|cnn|C1|By and large, the reviews were fair.|En general, las críticas fueron justas.|r=neu
let alone|ni siquiera|lɛt əˈloʊn|L|cnn|C1|He can't walk, let alone run.|No puede caminar, ni siquiera correr.
if anything|más bien (si acaso)|ɪf ˈɛnɪθɪŋ|L|cnn|C1|If anything, prices fell faster.|Si acaso, los precios cayeron más rápido.
at first glance|a primera vista|æt fɜːrst glæns|L|cnn|C1|At first glance, the two look identical.|A primera vista, parecen idénticas.
in hindsight|con perspectiva|ɪn ˈhaɪndsɑɪt|L|tmp|C1|In hindsight, the warning was clear.|Con perspectiva, la señal era clara.|s=looking back
as of yet|hasta ahora (negativo)|æz əv jɛt|L|tmp|C1|No reply, as of yet.|Aún no hay respuesta.|r=for
# ─── C1 · emociones y psique (10) ───
apprehensive|aprensivo|ˌæprɪˈhɛnsɪv|A|emo|C1|I felt apprehensive before the results.|Me sentía aprensivo antes de los resultados.|c=apprehensive about
resentment|resentimiento|rɪˈzɛntmənt|S|emo|C1|Old resentments surfaced at dinner.|Viejos resentimientos afloraron en la cena.|c=harbor resentment
longing|anhelo|ˈlɔːŋɪŋ|S|emo|C1|A longing for the coast fills her poems.|Un anhelo de la costa llena sus poemas.|r=let
nostalgia|nostalgia|nɑːˈstældʒə|S|emo|C1|The song is pure nostalgia.|La canción es pura nostalgia.|c=nostalgia trip
affection|cariño|əˈfɛkʃən|S|emo|C1|She shows affection in small gestures.|Muestra cariño en pequeños gestos.|c=genuine affection
unease|desazón|ʌnˈiːz|S|emo|C1|A feeling of unease settled over the room.|Una desazón se instaló en la sala.|r=neu
contempt|desprecio|kənˈtɛmpt|S|emo|C1|He treated the claim with contempt.|Trató la acusación con desprecio.|c=beneath contempt
awe|asombro (reverencia)|ɔː|S|emo|C1|The canyon fills visitors with awe.|El cañón llena de asombro a los visitantes.|c=in awe of
disillusionment|desencanto|ˌdɪsɪˈluʒənmənt|S|emo|C1|Voters spoke of disillusionment.|Los electores hablaron de desencanto.|r=for
empathy|empatía|ˈɛmpəθi|S|emo|C1|The book teaches children empathy.|El libro enseña empatía a los niños.|a=sympathy (compasión)
# ─── C1 · registro formal y negocios (13) ───
endeavor|empeño (empresa)|ɪnˈdɛvər|S|ast|C1|A worthy endeavor, if a risky one.|Un empeño loable, aunque arriesgado.|r=for; c=scientific endeavor
provisional|provisional|prəˈvɪʒənəl|A|fin|C1|These are provisional figures.|Son cifras provisionales.|s=tentative
stringent|estricto|ˈstrɪndʒənt|A|ist|C1|The lab follows stringent protocols.|El laboratorio sigue protocolos estrictos.|c=stringent rules
forthcoming|próximo (inminente)|ˌfɔːrθˈkʌmɪŋ|A|tmp|C1|Details will be forthcoming.|Los detalles se harán públicos pronto.|n=As forthcoming person: «cercano y franco».
commence|comenzar (formal)|kəˈmɛns|V|fin|C1|The ceremony commences at noon.|La ceremonia comienza al mediodía.|r=for; s=begin
terminate|dar por terminado|ˈtɜːrmɪneɪt|V|fin|C1|The contract terminates in June.|El contrato termina en junio.|r=for
implement|poner en marcha|ˈɪmplɪmɛnt|V|fin|C1|The city implemented the plan in May.|La ciudad puso el plan en marcha en mayo.|c=implement a policy
facilitate|facilitar|fəˈsɪlɪteɪt|V|lav|C1|The app facilitates peer review.|La app facilita la revisión por pares.|r=for
leverage (verb)|apalancar|ˈlɛvərɪdʒ|V|fin|C1|They leveraged their fanbase into sales.|Apalancaron su base de fans en ventas.|r=neu; n=Sustantivo: leverage (influencia, apalancamiento).
streamline|agilizar|ˈstriːmlaɪn|V|fin|C1|They streamlined the application.|Agilizaron la solicitud.|c=streamline processes
incentive|incentivo|ɪnˈsɛntɪv|S|fin|C1|Tax incentives attract film crews.|Los incentivos fiscales atraen rodajes.|c=fiscal incentive
benchmark|referencia (estándar de comparación)|ˈbɛntʃmɑːrk|S|fin|C1|The index sets a global benchmark.|El índice fija una referencia mundial.|r=tec
acquisition|adquisición|ˌækwɪˈzɪʃən|S|fin|C1|The acquisition closed in October.|La adquisición se cerró en octubre.|c=M&A (mergers and acquisitions)
# ─── C1 · ciencia y técnica (12) ───
milestone|hito|ˈmaɪlstoʊn|S|sci|C1|The landing was a milestone for the agency.|El aterrizaje fue un hito para la agencia.|c=reach a milestone
breakthrough|avance (descubrimiento)|ˈbreɪkθruː|S|sci|C1|A breakthrough in battery chemistry.|Un avance en la química de baterías.|c=major breakthrough
neural network|red neuronal|ˌnʊrəl ˈnɛtwɜːrk|L|tec|C1|The model is a neural network with 70 billion parameters.|El modelo es una red neuronal de 70.000 millones de parámetros.|r=tec
algorithm|algoritmo|ˈælgəˌrɪðəm|S|tec|C1|The algorithm ranks the results.|El algoritmo ordena los resultados.|r=tec
quantum|cuántico|ˈkwɑːntəm|A|sci|C1|Quantum computing remains theoretical.|La computación cuántica sigue teórica.|c=quantum leap (salto cualitativo)
particle|partícula|ˈpɑːrtɪkəl|S|sci|C1|The detector tracks each particle.|El detector sigue cada partícula.|c=elementary particle
genome|genoma|ˈdʒiːnoʊm|S|sci|C1|The rice genome was mapped in 2002.|El genoma del arroz se secuenció en 2002.|r=tec
clinical trial|ensayo clínico|ˌklɪnɪkəl ˈtraɪəl|L|sla|C1|The clinical trial enrolled 3,000 patients.|El ensayo clínico reclutó a 3.000 pacientes.|r=tec
# ─── C1 · verbos de transformación (18) ───
prevail|imponerse|prɪˈveɪl|V|ist|C1|Common sense prevailed at last.|El sentido común se impuso al final.|c=prevail over
unveil|presentar al público|ʌnˈveɪl|V|att|C1|The team unveiled the prototype.|El equipo presentó el prototipo.|s=reveal
reshape|rediseñar (cambiar el rostro de)|riːˈʃeɪp|V|ast|C1|Streaming reshaped the music business.|El streaming rediseñó el negocio musical.
redefine|redefinir|ˌriːdɪˈfaɪn|V|ast|C1|The phone redefined photography.|El teléfono redefinió la fotografía.
undergo|someterse a|ˌʌndərˈgoʊ|V|sla|C1|The building underwent renovation.|El edificio se sometió a renovación.|n=Pasado: underwent; futuro: will undergo.
encompass|abarcar|ɪnˈkʌmpəs|V|ast|C1|The course encompasses grammar and culture.|El curso abarca gramática y cultura.|s=include
resemble|parecerse a|rɪˈzɛmbəl|V|fam|C1|She resembles her grandmother.|Se parece a su abuela.|c=resemble in
entail|conllevar|ɪnˈteɪl|V|fin|C1|The job entails travel.|El puesto conlleva viajes.|c=entail doing
attribute (verb)|atribuir|əˈtrɪbjuːt|V|sci|C1|They attribute the gain to exercise.|Atribuyen la mejora al ejercicio.|c=attribute to; ff=1;n=Sustantivo atributo: ˈætrɪbjuːt (rasgo).
designate|designar|ˈdɛzɪgneɪt|V|ist|C1|The park was designated a reserve.|El parque fue designado reserva.|c=designate as
coincide|coincidir|ˌkoʊɪˈsaɪd|V|tmp|C1|The festivals coincide in July.|Los festivales coinciden en julio.|c=coincide with
unfold|desarrollarse|ʌnˈfoʊld|V|att|C1|The drama unfolded over three days.|El drama se desarrolló en tres días.
spur (verb)|espolear|spɜːr|V|fin|C1|Cheap credit spurred construction.|El crédito barato espoleó la construcción.|c=spur growth
curb (verb)|frenar|kɜːrb|V|ist|C1|New rules curb emissions.|Las nuevas normas frenan las emisiones.|c=curb inflation
stem from|derivarse de|ˈstɛm frʌm|L|sci|C1|Most errors stem from fatigue.|La mayoría de errores derivan de la fatiga.|c=stem from
give way to|ceder paso a|ˌgɪv ˈweɪ tuː|L|tmp|C1|Diners gave way to brunch spots.|Las cafeterías cedieron paso a los brunch.|r=neu
shed light on|arrojar luz sobre|ˌʃɛd ˈlaɪt ɑːn|L|sci|C1|The files shed light on the decision.|Los documentos arrojan luz sobre la decisión.
pave the way|allanar el camino|ˌpeɪv ðə ˈweɪ|L|ast|C1|The treaty paved the way for trade.|El tratado allanó el camino al comercio.|c=pave the way for
# ─── C1 · giros de nivel (12) ───
at the expense of|a costa de|æt ðɪkˈspɛns əv|L|cnn|C1|Growth came at the expense of sleep.|El crecimiento llegó a costa del sueño.|c=at the expense of
in the wake of|a raíz de|ɪn ðə ˈweɪk əv|L|tmp|C1|Prices rose in the wake of the flood.|Los precios subieron a raíz de la inundación.|r=for
on the verge of|al borde de|ɑːn ðə ˈvɜːrdʒ əv|L|tmp|C1|The band was on the verge of breaking up.|La banda estaba al borde de separarse.|c=on the verge of
a far cry from|muy lejos de|ə fɑːr kraɪ frʌm|L|cnn|C1|The sequel is a far cry from the original.|La secuela está muy lejos de la original.|r=col
by no means|de ninguna manera|baɪ noʊ miːnz|L|cnn|C1|It is by no means certain.|No es, de ninguna manera, seguro.|c=by all means (por supuesto)
to say the least|por no decir más|tə seɪ ðə list|L|cnn|C1|The result was odd, to say the least.|El resultado fue raro, por no decir más.
more often than not|más veces que no|mɔːr ˈɔːfən ðæn nɑːt|L|cnn|C1|More often than not, the train is late.|Más veces que no, el tren se retrasa.
time and again|una y otra vez|ˌtaɪm ənd əˈgɛn|L|tmp|C1|Time and again she proved herself.|Una y otra vez se reivindicó.|s=time after time
in the public eye|bajo el ojo público|ɪn ðə ˈpʌblɪk aɪ|L|att|C1|Athletes live in the public eye.|Los atletas viven bajo el ojo público.
food for thought|material para reflexionar|fuːd fɔːr θɔːt|L|ast|C1|Her talk gave us food for thought.|Su charla nos dio material para reflexionar.|r=col
a blessing and a curse|una bendición y una maldición|ə blɛsɪŋ ænd kɜːrs|L|ast|C1|Fame is a blessing and a curse.|La fama es una bendición y una maldición.|r=neu
the elephant in the room|el elefante en la habitación|ðə ˈɛlɪfənt ɪn ðə ruːm|L|cmu|C1|Budget is the elephant in the room.|El presupuesto es el elefante en la habitación.|r=col
# ─── C2 · adjetivos raros y literarios (20) ───
quintessential|por antonomasia|ˌkwɪntɪˈsɛnʃəl|A|let|C2|The quintessential New York diner.|El diner por antonomasia de Nueva York.|c=quintessential image
elusive|esquivo|ɪˈluːsɪv|A|ast|C2|Success remained elusive for the team.|El éxito se mostró esquivo al equipo.|c=elusive concept
ineffable|inefable|ɪnˈɛfəbəl|A|let|C2|An ineffable sadness runs through the book.|Una tristeza inefable recorre el libro.|r=let
serendipity|serendipia (hallazgo afortunado)|ˌsɛrənˈdɪpɪti|S|ast|C2|They met by pure serendipity.|Se conocieron por pura serendipia.|r=neu
esoteric|esotérico|ˌɛsəˈtɛrɪk|A|ast|C2|The lecture drifts into esoteric detail.|La clase deriva en detalle esotérico.|a=accessible
labyrinthine|laberíntico|ˌlæbəˈrɪnθaɪn|A|let|C2|The plot is deliberately labyrinthine.|La trama es deliberadamente laberíntica.|r=let
recalcitrant|recalcitrante|rɪˈkælsɪtrənt|A|emo|C2|A recalcitrant committee blocked reform.|Un comité recalcitrante bloqueó la reforma.|r=for
sardonic|sardónico|sɑːrˈdɑːnɪk|A|let|C2|He answered with a sardonic smile.|Respondió con una sonrisa sardónica.|a=earnest
laconic|lacónico|ləˈkɑːnɪk|A|let|C2|His laconic reply unnerved them.|Su lacónica réplica los descolocó.|r=let
perfunctory|rutinario (desganado)|pərˈfʌŋktəri|A|lav|C2|The inspection was perfunctory at best.|La inspección fue desganada como poco.|r=for
ubiquitous|omnipresente|juːˈbɪkwɪtəs|A|tec|C2|Smartphones are now ubiquitous.|Los teléfonos ya son omnipresentes.|c=ubiquitous computing
evanescent|evanescente|ˌɛvəˈnɛsnt|A|let|C2|The fog gives the port an evanescent light.|La niebla da al puerto una luz evanescente.|r=let
iridescent|iridiscente|ˌɪrɪˈdɛsnt|A|nat|C2|An iridescent hummingbird hovered by the window.|Un colibrí iridiscente revoloteaba en la ventana.|r=let
lugubrious|lugubre|ləˈguːbriəs|A|let|C2|The organ lent the scene a lugubrious air.|El órgano dio a la escena un aire lugubre.|r=let
quotidian|cotidiano|kwoʊˈtɪdiən|A|let|C2|The novel celebrates the quotidian.|La novela celebra lo cotidiano.|r=let
hapless|desdichado|ˈhæpləs|A|let|C2|The hapless traveler missed every flight.|El desdichado viajero perdió todos los vuelos.|r=let
withering|demoledor|ˈwɪðərɪŋ|A|cmu|C2|A withering review ended the run.|Una crítica demoledora cerró la función.|c=withering look
bucolic|bucólico|bjuːˈkɑːlɪk|A|nat|C2|Bucolic hills frame the last chapter.|Colinas bucólicas enmarcan el último capítulo.|r=let
veritable|todo un (auténtico)|ˈvɛrɪtəbəl|A|ast|C2|The garage became a veritable studio.|El garaje se volvió un auténtico estudio.|r=neu
craven|cobarde|ˈkreɪvən|A|emo|C2|A craven silence followed the question.|Un silencio cobarde siguió a la pregunta.|r=let; a=valiant
# ─── C2 · verbos cultos (20) ───
obfuscate|ofuscar|ˈɑːbfəskeɪt|V|tec|C2|Jargon only obfuscates the message.|La jerga solo ofusca el mensaje.|r=for
espouse|abrazar (una causa)|ɪˈspaʊz|V|ist|C2|The paper espouses open science.|El artículo abrazó la ciencia abierta.|r=for
promulgate|promulgar|ˈprɑːmləgeɪt|V|ist|C2|The agency promulgated the rule in May.|La agencia promulgó la norma en mayo.|r=for
extrapolate|extrapolar|ɪkˈstræpəleɪt|V|sci|C2|Don't extrapolate from a single season.|No extrapoles a partir de una sola temporada.|c=extrapolate from
obviate|hacer innecesario|ˈɑːbvieɪt|V|ast|C2|The new bridge obviates the ferry.|El nuevo puente hace innecesario el ferry.|r=for
estrange|distanciar|ɪˈstreɪndʒ|V|rel|C2|Silence estranged the two brothers.|El silencio distanció a los dos hermanos.|c=estranged from
vindicate|reivindicar (dar la razón)|ˈvɪndɪkeɪt|V|ist|C2|Time vindicated the stubborn engineer.|El tiempo dio la razón al terco ingeniero.|c=feel vindicated
engender|engendrar|ɪnˈdʒɛndər|V|ast|C2|Trust engenders loyalty.|La confianza engendra lealtad.|r=for
galvanize|galvanizar|ˈgælvənaɪz|V|ist|C2|The speech galvanized the volunteers.|El discurso galvanizó a los voluntarios.|c=galvanize into action
ruminate|rumiar|ˈruːmɪneɪt|V|emo|C2|He ruminated on the offer all night.|Rumió la oferta toda la noche.|c=ruminate on
pontificate|pontificar|pɑːnˈtɪfɪkeɪt|V|cmu|C2|He pontificated about wine for an hour.|Pontificó sobre el vino durante una hora.|r=col
lionize|ensalzar|ˈlaɪənaɪz|V|att|C2|The press lionized the young chef.|La prensa ensalzó al joven chef.|r=for
excoriate|despedazar (criticar con dureza)|ɪkˈskɔːrieɪt|V|att|C2|The column excoriated the network.|La columna despedazó a la cadena.|r=for
inveigh against|despotricar contra|ɪnˈveɪ əˈgɛnst|L|cmu|C2|He inveighed against the tax for weeks.|Despotricó contra el impuesto durante semanas.|r=let
glean|ir recogiendo (desentrañar)|gliːn|V|sci|C2|Historians glean facts from tax rolls.|Los historiadores desentrañan datos de los padrones.|c=glean from
bemoan|lamentar|bɪˈmoʊn|V|emo|C2|Farmers bemoan the dry springs.|Los agricultores lamentan las primaveras secas.|r=for
eschew|rehuir|ɪsˈtʃuː|V|let|C2|The essay eschews technical terms.|El ensayo rehúye el tecnicismo.|r=for
acquiesce|asentir (a regañadientes)|ˌækwiˈɛs|V|cmu|C2|The board acquiesced after a long debate.|El consejo asintió tras un largo debate.|c=acquiesce in; r=for
capitulate|capitular|kəˈpɪtʃuleɪt|V|ist|C2|The union refused to capitulate.|El sindicato se negó a capitular.|c=capitulate to
muse (verb)|meditar (cavilar)|mjuːz|V|emo|C2|She mused over the old photographs.|Caviló sobre las viejas fotografías.|c=muse on
# ─── C2 · giros aúlicos (20) ───
beyond the pale|inaceptable (fuera de toda norma)|biˈjɑːnd ðə peɪl|L|cnn|C2|The joke was simply beyond the pale.|La broma fue, sencillamente, inaceptable.|r=let
let sleeping dogs lie|no revolver el asunto|lɛt ˈsliːpɪŋ dɔːgz laɪ|L|cmu|C2|Better let sleeping dogs lie with that client.|Mejor no revolver el asunto con ese cliente.|r=col
a storm in a teacup|una tormenta en un vaso de agua|ə stɔːrm ɪn ə ˈtiːkʌp|L|ast|C2|The feud was a storm in a teacup.|La pelea fue una tormenta en un vaso de agua.|r=col
the icing on the cake|la guinda del pastel|ðə ˈaɪsɪŋ ɑːn ðə keɪk|L|sve|C2|The bonus was the icing on the cake.|El bono fue la guinda del pastel.|r=col
a Pyrrhic victory|una victoria pírrica|ə ˈpɪrɪk ˈvɪktəri|L|ist|C2|The win proved a Pyrrhic victory.|La victoria resultó pírrica.|r=let
to a fault|en exceso (por defecto)|tə ə fɔːlt|L|emo|C2|He is generous to a fault.|Es generoso en exceso.|r=neu
in the doldrums|en letargo (estancado)|ɪn ðə ˈdoʊldrʌmz|L|fin|C2|Sales stayed in the doldrums all spring.|Las ventas se estancaron toda la primavera.|r=col
on tenterhooks|en vilo|ɑːn ˈtɛntərhʊks|L|emo|C2|We waited on tenterhooks for the verdict.|Esperamos en vilo el veredicto.|r=let
between a rock and a hard place|entre la espada y la pared|bɪˈtin ə rɑːk ænd ə hɑːrd pleɪs|L|ast|C2|Renters are between a rock and a hard place.|Los inquilinos están entre la espada y la pared.|r=col
beat around the bush|irse por las ramas|biːt əˈraʊnd ðə bʊʃ|L|cmu|C2|Stop beating around the bush and answer.|Deja de irte por las ramas y responde.|r=col
throw in the towel|tirar la toalla|θroʊ ɪn ðə ˈtaʊəl|L|spt|C2|After five attempts they threw in the towel.|Tras cinco intentos tiraron la toalla.|r=col
burn the midnight oil|quemar el aceite de medianoche|bɜːrn ðə ˈmɪdnaɪt ɔɪl|L|stu|C2|She burned the midnight oil before finals.|Vela la noche entera antes de los finales.|r=col; n=Equivalente español: «hacer acampada» / «estudiar hasta tarde».
read between the lines|leer entre líneas|rɛd bɪˈtin ðə laɪnz|L|cmu|C2|Read between the lines of the memo.|Lee entre líneas el memorando.|r=col
bite the bullet|morderse el freno (aguantar)|baɪt ðə ˈbʊlɪt|L|emo|C2|We bit the bullet and paid the fine.|Nos mordimos el freno y pagamos la multa.|r=col
skeleton in the closet|un esqueleto en el armario|ˈskɛlɪtn ɪn ðə ˈklɑːzɪt|L|rel|C2|Every family has a skeleton in the closet.|Toda familia tiene un esqueleto en el armario.|r=col
white elephant|elefante blanco|waɪt ˈɛlɪfənt|S|fin|C2|The stadium became a white elephant.|El estadio se volvió un elefante blanco.|r=col; ff=1;n=Mismo sentido que en español: obra cara e inútil.
one fell swoop|de un plumazo|wʌn fɛl swuːp|L|tmp|C2|The deal closed in one fell swoop.|El trato se cerró de un plumazo.|r=let
the last hurrah|el último brindis (último momento de gloria)|ðə læst hʊˈrɑː|L|spt|C2|The final was the captain's last hurrah.|La final fue el último brindis del capitán.|r=col
# ─── C2 · sustantivos cultos (20) ───
epitome|epítome (encarnación)|ɪˈpɪtəmi|S|let|C2|She is the epitome of calm.|Es la encarnación de la calma.|c=the epitome of; n=Se pronuncia «epítemi», nunca «epitoum».
prowess|pericia (maña)|ˈpraʊəs|S|ast|C2|Her technical prowess is unmatched.|Su pericia técnica no tiene rival.|c=martial prowess
pundit|analista (opinólogo)|ˈpʌndɪt|S|att|C2|Pundits predicted a close race.|Los analistas vaticinaron un final ajustado.|r=neu
dilettante|diletante|ˌdɪlɪˈtænti|S|art|C2|He paints like a gifted dilettante.|Pinta como un diletante con talento.|r=for; ff=1;n=En inglés el matiz es más severo: aficionado superficial.
conundrum|conundro (enigma)|kəˈnʌndrəm|S|ast|C2|Pension reform remains a conundrum.|La reforma de las pensiones sigue siendo un conundro.|r=neu
quagmire|atrevido (pantano, atolladero)|ˈkwægmaɪər|S|nat|C2|The project sank into a quagmire of delays.|El proyecto se hundió en un atolladero de retrasos.|c=bureaucratic quagmire
wellspring|manantial (fuente)|ˈwɛlsprɪŋ|S|emo|C2|Curiosity is the wellspring of science.|La curiosidad es el manantial de la ciencia.|r=let
smokescreen|cortina de humo|ˈsmoʊkskriːn|S|ist|C2|The audit was a smokescreen.|La auditoría fue una cortina de humo.|c=put up a smokescreen
brainchild|criatura (idea)|ˈbreɪntʃaɪld|S|ast|C2|The festival was her brainchild.|El festival fue criatura suya.|c=the brainchild of
offshoot|vástago (desprendimiento)|ˈɔːfʃuːt|S|nat|C2|The lab is an offshoot of the university.|El laboratorio es un vástagos de la universidad.|n=Botánica: offshoot es «rebrote».
mainstay|pilar (columna)|ˈmeɪnsteɪ|S|fin|C2|Tourism is the mainstay of the island.|El turismo es el pilar de la isla.|c=mainstay of the economy
safeguard (noun)|salvaguardia|ˈseɪfgɑːrd|S|ist|C2|The clause adds a safeguard for renters.|La cláusula añade una salvaguardia para inquilinos.|c=as a safeguard
aftermath|posguera (consecuencias)|ˈæftərmæθ|S|ist|C2|Rebuilding took years in the aftermath.|Reconstruir llevó años después.|c=in the aftermath of
drudgery|trabajo rutinario|ˈdrʌdʒəri|S|lav|C2|Automation lifted nurses from drudgery.|La automatización libró a las enfermeras del trabajo rutinario.|r=for
grandeur|grandeza|ˈgrændʒər|S|art|C2|The canyon's grandeur silences visitors.|La grandeza del cañón enmudece a los visitantes.|r=let
hubris|hibris (soberbia)|ˈhjuːbrɪs|S|let|C2|Hubris brought the company down.|La soberbia tumbó a la empresa.|r=let
nemesis|némesis|ˈnɛməsɪs|S|let|C2|The young striker became the champion's nemesis.|El joven delantero se volvió la némesis del campeón.|p=nemeses; r=let
juggernaut|fuerza imparable|ˈdʒʌgərnɔːt|S|fin|C2|The retailer grew into a juggernaut.|La cadena se volvió una fuerza imparable.|r=neu
zeitgeist|espíritu de la época|ˈzaɪtgaɪst|S|ast|C2|The film captured the zeitgeist of 2001.|La película captó el espíritu de 2001.|r=neu; n=Préstamo alemán: fricativa inicial sonora como en «ja».
paragon|dechado (modelo)|ˈpærəgɑːn|S|let|C2|She is a paragon of punctuality.|Es un dechado de puntualidad.|c=a paragon of; r=for
`, "en");
