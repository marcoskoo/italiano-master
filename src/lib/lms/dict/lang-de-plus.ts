import { parsePlus } from "./plus-parse";
import type { VocabWord } from "../types";

/* ═══ v9.41 · DE Dictionary PLUS · B1→C2 (Stufe explizit) ══════════
   Basis: lang-de.ts (557, A1-B1). Hier werden die vier oberen Stufen
   ergänzt. `Wort` = Deutsch; `es` = Spanisch. Trennbare Verben stehen
   im Infinitiv (sich bewerben); Beispiele zeigen die Alltagssprache.  */

export const DE_PLUS: VocabWord[] = parsePlus(`
# ─── B1 · Arbeit und Karriere (18) ───
sich bewerben|presentarse (a un puesto)|zɪç bəˈveːrən|V|lav|B1|Sie hat sich in Köln beworben.|Ella se presentó a un puesto en Colonia.|c=sich bewerben um
einstellen|contratar|ˈaɪnʃtɛlən|V|lav|B1|Sie haben im Mai zehn Leute eingestellt.|Contrataron a diez personas en mayo.|n=einstellen auch «einstellen (einstellen des Motors)»: ein Motor wird eingestellt.
Arbeitgeber|empleador|ˈaʁbaɪtɡeːbəʁ|S|lav|B1|Der Arbeitgeber zahlt die Schulung.|El empleador paga la formación.
Beförderung|ascenso|bəˈfœːʁuŋ|S|lav|B1|Im Januar bekam er eine Beförderung.|Recibió un ascenso en enero.
Nachtschicht|turno de noche|ˈnaxtʃɪçt|S|lav|B1|Ich mache montags Nachtschicht.|Hago el turno de noche los lunes.
Überstunden|horas extra|ˈyːbɐʃtʊndn̩|L|lav|B1|Überstunden werden mit 25% bezahlt.|Las horas extra se pagan al 25%.|p=Überstunden
qualifiziert|cualificado|kvalifiˈtsiːʁt|A|lav|B1|Er ist qualifiziert, Physik zu unterrichten.|Está cualificado para enseñar física.
in den Ruhestand gehen|jubilarse|ɪn den ˈʁuːəʃtant ɡeːən|L|lav|B1|Mein Opa ging mit 65 in den Ruhestand.|Mi abuelo se jubiló a los 65.
Karriere|carrera profesional|kaˈʁiːʁə|S|lav|B1|Sie hat in Berlin Karriere gemacht.|Hizo carrera en Berlín.|ff=1;n=Karriere ist nur das Berufsleben; «Rennbahn» ist die Rennstrecke.
Frist|plazo|fʁɪst|S|lav|B1|Die Frist läuft Montag ab.|El plazo vence el lunes.|c=fristgerecht
Kollege|colega de trabajo|koˈlɛɡə|S|lav|B1|Eine Kollegin half mir mit dem Bericht.|Una colega me ayudó con el informe.
Fortbildung|formación|ˈfɔʁtˌbɪldʊŋ|S|lav|B1|Die Fortbildung dauert zwei Wochen.|La formación dura dos semanas.
Gehaltserhöhung|aumento de sueldo|ɡəˈhaltsɛʁˌhøːʊŋ|S|fin|B1|Er bat um eine Gehaltserhöhung.|Pidió un aumento de sueldo.
Fähigkeit|competencia (habilidad)|ˈfɛːaɪçkaɪt|S|lav|B1|Programmieren ist eine nützliche Fähigkeit.|Programar es una habilidad útil.
Vorstellungsgespräch|entrevista de trabajo|ˈfɔʁʃtɛlʊŋsɡəʃpʁɛç|S|lav|B1|Morgen habe ich ein Vorstellungsgespräch.|Mañana tengo una entrevista de trabajo.
Erfahrung|experiencia|ɛʁˈfaːʁʊŋ|S|lav|B1|Sie hat Erfahrung im Marketing.|Tiene experiencia en marketing.|ff=1;n=Erfahrung ist Erlebnis und Berufserfahrung; das Experiment ist «das Experiment».
teilzeit|a tiempo parcial|ˈtaɪltsaɪt|L|lav|B1|Er arbeitet teilzeit in einem Café.|Trabaja a tiempo parcial en una cafetería.|n=Als Adverb klein: «er arbeitet Teilzeit» schreibt man zusammen.
Vollzeit|a tiempo completo|ˈfɔltsaɪt|L|lav|B1|Ich suche eine Stelle in Vollzeit.|Busco un trabajo a tiempo completo.
arbeitslos|en paro|ˈaʁbaɪtsloːs|A|lav|B1|Er war sechs Monate arbeitslos.|Estuvo en paro seis meses.
Mieter|inquilino|ˈmiːtəʁ|S|cas|B1|Der Mieter zahlt die Miete am Ersten.|El inquilino paga la renta el día 1.
# ─── B1 · Studium (14) ───
Bachelor|título de grado|ˈbɛtʃələʁ|S|stu|B1|Sie hat einen Bachelor in Chemie.|Tiene un título en química.|n=Das deutsche Studium: Bachelor (3 J.) + Master (2 J.).
Fach|asignatura|fax|S|stu|B1|Mein Lieblingsfach ist Geschichte.|Mi asignatura preferida es historia.
Semester|semestre|zɛˈmɛstəʁ|S|stu|B1|Das Semester endet im Dezember.|El semestre termina en diciembre.|ff=1;n=Semester ist das Studienhalbjahr; das Halbjahr der Schule sagt man «Halbjahr».
Stipendium|beca|ʃtiˈpɛndiʊm|S|stu|B1|Er hat ein Stipendium für Aachen.|Ganó una beca para Aquisgrán.|p=Stipendien
Abschluss|título|ˈapʃluss|S|stu|B1|Sein Abschluss ist von Juli.|Su título es de julio.|n=Abschluss ist auch «cierre»: der Abschluss der Verhandlungen.
Vorlesung|clase magistral|ˈfɔʁˌleːzʊŋ|S|stu|B1|Die Vorlesung beginnt um neun.|La clase magistral empieza a las nueve.
Hausaufgaben|deberes|ˈhaʊsˌaufɡabən|L|stu|B1|Die Hausaufgaben sind für Freitag.|Los deberes son para el viernes.
Forschung|investigación|ˈfɔʁʃʊŋ|S|sci|B1|Seine Forschung beschäftigt sich mit dem Klima.|Su investigación se centra en el clima.
Notizen machen|tomar apuntes|noˈtiːtsn̩ ˈmaxən|L|stu|B1|Ich mache in jeder Vorlesung Notizen.|Tomo apuntes en cada clase.
bestehen (Prüfung)|aprobar (un examen)|bəˈʃteːən|V|stu|B1|Er hat die Prüfung beim ersten Versuch bestanden.|Aprobó el examen al primer intento.|c=eine Prüfung bestehen; a=durchfallen
durchfallen|suspender (un examen)|ˈdʊʁçfalən|V|stu|B1|Sie ist durch die mündliche Prüfung gefallen.|Suspendió el oral.|n=durchfallen ist auch «abstürzen»: das Flugzeug fällt durch.
Note|nota|ˈnoːtə|S|stu|B1|Ich habe eine gute Note in Bio.|Saqué buena nota en biología.|ff=1;n=Note ist auch «billete» (eine 20-Euro-Note) und «nota musical».
wiederholen|repasar|viːdɐˈhoːlən|V|stu|B1|Ich habe vor der Arbeit den Wortschatz wiederholt.|Repasé el vocabulario antes del examen.|n=wiederholen ist auch «repetir»: die Frage wiederholen.
Anregung|sugerencia|ˈanˌʁeːɡʊŋ|S|cmu|B1|Anregungen für das Abendessen?|¿Alguna sugerencia para cenar?
# ─── B1 · Reisen und Geld (12) ───
im Ausland|en el extranjero|ɪm ˈauslant|L|vig|B1|Sie will im Ausland studieren.|Quiere estudiar en el extranjero.
Zoll|aduana|tsɔl|S|vig|B1|Wir sind am Flughafen durch den Zoll.|Pasamos la aduana en el aeropuerto.|ff=1;n=Zoll ist auch «peaje histórico» und «impuesto»: der Zoll auf Kaffee.
Reiseziel|destino|ˈʁaɪ̯ətsiːl|S|vig|B1|Unser Reiseziel ist Hamburg.|Nuestro destino es Hamburgo.
Wechselgeld|cambio (de dinero)|ˈvɛkʃl̩ɡɛlt|S|fin|B1|Ich habe am Bahnhof Geld gewechselt.|Hice cambio de dinero en la estación.|ff=1;n=Wechselgeld ist das «cambio» de una compra; Wechselstube ist la casa de cambio.
Sehenswürdigkeit|monumento emblemático|ˈzeːənsˌvʏʁdɪçkaɪt|S|cit|B1|Der Dom ist die Sehenswürdigkeit der Stadt.|La catedral es el monumento de la ciudad.
Stadtrundfahrt|visitas turísticas|ˈʃtatʁʊntfaːʁt|S|vig|B1|Wir haben eine Stadtrundfahrt gemacht.|Hicimos una visita turística.
Hin- und Rückfahrt|ida y vuelta|hɪnʊntˈʁʊkfaːʁt|L|tra|B1|Hin- und Rückfahrt nach Bonn, bitte.|Ida y vuelta a Bonn, por favor.|a=einfache Fahrt
einfache Fahrt|solo ida|ˈaɪ̯nfaxə faːʁt|L|tra|B1|Ich nehme die einfache Fahrt nach Kiel.|Compré un billete de solo ida a Kiel.
Verspätung|retraso|fɛʁˈʃpɛːtʊŋ|S|tra|B1|Der Zug hat eine Stunde Verspätung.|El tren lleva una hora de retraso.|c=in Verspätung geraten
buchen (Zimmer)|reservar|ˈbuːxən|V|htl|B1|Ich habe für zwei Nächte gebucht.|Reservé para dos noches.|ff=1;n=buchen ist auch «contabilizar»: die Kosten buchen.
Vorsorgeuntersuchung|revisión (médica)|ˈfɔʁˌzoːɡəʊntɐʃuːɡʊŋ|S|sla|B1|Dienstag habe ich eine Vorsorgeuntersuchung.|El martes tengo una revisión.
# ─── B1 · Gesundheit (8) ───
Symptom|síntoma|zʏmpˈtoːm|S|sla|B1|Fieber ist ein häufiges Symptom.|La fiebre es un síntoma común.|p=Symptome
Rezept|receta|ʁəˈtsɛpt|S|sla|B1|Der Arzt hat mir ein Rezept ausgestellt.|El médico me hizo una receta.|ff=1;n=Rezept ist auch «receta de cocina» und «fórmula»: das Rezept für Kuchen.
Behandlung|tratamiento|bəˈhandlʊŋ|S|sla|B1|Die Behandlung dauert sechs Wochen.|El tratamiento dura seis semanas.
Genesung|recuperación|ɡəˈneːzʊŋ|S|sla|B1|Ihre Genesung war schnell.|Su recuperación fue rápida.|c=gute Genesung
Allergie|alergia|aleʁˈɡiː|S|sla|B1|Er hat eine Allergie gegen Nüsse.|Tiene alergia a los frutos secos.|p=Allergien
verletzt|herido|fɛʁˈletsət|A|sla|B1|Ein verletzter Spieler verließ das Feld.|Un jugador herido salió del campo.|n=verletzen ist auch «ofender»: ich habe ihn verletzt.
Notaufnahme|urgencias|ˈnoːtˌaufnahmə|S|sla|B1|Man brachte ihn in die Notaufnahme.|Lo llevaron a urgencias.
Schmerztablette|analgésico|ˈʃmɛʁtsaˌblɛtə|S|sla|B1|Nimm eine Schmerztablette gegen die Kopfschmerzen.|Tómate un analgésico para el dolor de cabeza.
# ─── B1 · Meinung und Kommunikation (18) ───
Meinung|opinión|maɪ̯ˈnuːŋ|S|cmu|B1|Meiner Meinung nach ist der Film toll.|En mi opinión, la película es genial.|c=meiner Meinung nach
Standpunkt|punto de vista|ˈʃtantpʊŋkt|S|cmu|B1|Versuch, ihren Standpunkt zu sehen.|Intenta ver su punto de vista.
zustimmen|estar de acuerdo|tsuːˈʃtɪmən|V|cmu|B1|Ich stimme dir völlig zu.|Estoy completamente de acuerdo contigo.|c=jemandem zustimmen; a=widersprechen
widersprechen|no estar de acuerdo|ˈvɪdɐʃpʁɛçən|V|cmu|B1|Wir widersprechen uns in der Politik.|No estamos de acuerdo sobre política.
nahelegen|sugerir|ˈnaːəleːɡən|V|cmu|B1|Ich lege vor, den frühen Zug zu nehmen.|Sugiero tomar el tren temprano.|n=nahelegen + Infinitiv mit zu.
sich beschweren|quejarse|zɪç bəˈʃveːʁən|V|cmu|B1|Er hat sich über den Lärm beschwert.|Se quejó del ruido.|c=sich beschweren über
sich entschuldigen|disculparse|zɪç ɛntˈʃʊldɪɡən|V|cmu|B1|Ich habe mich für die Verspätung entschuldigt.|Me disculpé por llegar tarde.|c=sich entschuldigen für
klatschen (tratschen)|cotillear|ˈklatsʃən|V|cmu|B1|Sie tratschen gern über die Nachbarn.|Les encanta cotillear sobre los vecinos.|r=col; n=klatschen ist auch «aplaudir»: das Publikum klatscht.
Gerücht|rumor|ɡəˈʁʏçt|S|cmu|B1|Das ist nur ein Gerücht, keine Nachricht.|Es solo un rumor, no es noticia.|c=ein Gerücht verbreiten
Streit (Zank)|discusión (pelea)|ʃtʁaɪ̯t|S|rel|B1|Sie hatten Streit ums Geld.|Tuvieron una discusión por dinero.|ff=1;n=Streit ist die Querelle; «Diskussion» ist die Debatte.
diskutieren|debatir|dɪskuˈtiːʁən|V|cmu|B1|Diskutieren wir den Plan morgen.|Debatamos el plan mañana.|n=diskutieren ohne Präposition: den Plan diskutieren.
beschreiben|describir|bəˈʃʁaɪ̯bən|V|cmu|B1|Kannst du den Verdächtigen beschreiben?|¿Puedes describir al sospechoso?
versprechen|prometer|fɛɐˈʃpʁɛçən|V|cmu|B1|Ich verspreche, dich heute Abend anzurufen.|Prometo llamarte esta noche.|c=ein Versprechen halten
empfehlen|recomendar|ɛmpˈfeːlən|V|cmu|B1|Der Kellner empfahl den Cassoulet.|El camarero recomendó el cassoulet.
Grund|motivo|ɡʁʊnt|S|cmu|B1|Der Grund ist einfach: Zeitmangel.|El motivo es simple: falta de tiempo.|c=aus diesem Grund
Gespräch|conversación|ɡəˈʃpʁɛç|S|cmu|B1|Wir hatten ein langes Gespräch.|Tuvimos una larga conversación.
fließend|con fluidez|fliːˈsɛnt|A|stu|B1|Sie spricht fließend drei Sprachen.|Habla tres idiomas con fluidez.|c=fließend in
# ─── B1 · Charakter und Gefühle (14) ───
stolz (auf)|orgulloso|ʃtɔls|A|emo|B1|Ich bin stolz auf meine Schüler.|Estoy orgulloso de mis alumnos.|c=stolz auf
enttäuscht|decepcionado|ɛntˈtɔʏʃt|A|emo|B1|Er war vom Ergebnis enttäuscht.|Quedó decepcionado con el resultado.|c=enttäuscht von
unruhig|inquieto|ʊnˈʁuːɪç|A|emo|B1|Vor Prüfungen werde ich unruhig.|Me pongo inquieto antes de los exámenes.
sicher (selbstbewusst)|seguro de sí mismo|ˈzɪçɐ|A|emo|B1|Sie ist sich beim Gespräch sicher.|Se siente segura con la entrevista.
schüchtern|tímido|ˈʃʏçtɐn|A|emo|B1|Er ist schüchtern mit Fremden.|Es tímido con desconocidos.
faul|perezoso|faʊl|A|emo|B1|Sei nicht faul: mach deine Hausaufgaben.|No seas perezoso: haz los deberes.|a=fleißig
fleißig|trabajador|ˈflaɪ̯sɪç|A|emo|B1|Sie ist fleißig und zuverlässig.|Es trabajadora y fiable.|a=faul
ehrlich|honesto|ˈeːʁlɪç|A|emo|B1|Eine ehrliche Antwort, bitte.|Una respuesta honesta, por favor.|a=unehrlich
unhöflich|grosero (mal educado)|ʊnˈhøːflɪç|A|emo|B1|Es ist unhöflich, auf Leute zu zeigen.|Es de mala educación señalar a la gente.|a=höflich
höflich|cortés|ˈhøːflɪç|A|emo|B1|Er ist immer höflich zu Kunden.|Siempre es cortés con los clientes.|a=unhöflich
eifersüchtig|celoso|ˈaɪ̯fɐˌsʏxtɪç|A|emo|B1|Er wird schnell eifersüchtig.|Se pone celoso con facilidad.
geduldig|paciente|ɡəˈdʊldɪç|A|emo|B1|Sei geduldig mit den Kindern.|Ten paciencia con los niños.|a=ungeduldig
stur|testarudo|ʃtuːɐ̯|A|emo|B1|Mein Onkel ist sehr stur.|Mi tío es muy testarudo.|s=halsstarrig
zuverlässig|fiable|tsuˈvɛːɐ̯lɛsɪç|A|emo|B1|Sie ist eine zuverlässige Freundin.|Es una amiga fiable.
# ─── B1 · Medien und Technik (12) ───
Artikel|artículo|aʁˈtiːkəl|S|att|B1|Ich habe einen Artikel über die ESA gelesen.|Leí un artículo sobre la ESA.|ff=1;n=Artikel ist auch «artículo gramatical»: der, die, das sind Artikel.
Schlagzeile|titular|ˈʃlaːktsaɪ̯lə|S|att|B1|Die Schlagzeile hat alle überrascht.|El titular sorprendió a todos.
Sendung|emisión|ˈzɛndʊŋ|S|att|B1|Die Sendung beginnt um acht.|La emisión empieza a las ocho.
Kanal|canal|kaˈnaːl|S|tec|B1|Schalt mal den Kanal, bitte.|Cambia de canal, por favor.|ff=1;n=Kanal ist auch «canal de agua»: der Kieler Kanal.
abonnieren|suscribirse|aboˈniːʁən|V|tec|B1|Ich abonniere zwei Podcasts.|Me suscribo a dos pódcast.
Podcast|pódcast|ˈpoːdkæst|S|tec|B1|Wir hören einen Podcast auf Deutsch.|Escuchamos un pódcast en alemán.
Benachrichtigung|notificación|bəˈnaχtɪɡʊŋ|S|tec|B1|Ich habe eine Benachrichtigung von der Bank.|Recibí una notificación del banco.
Anhang|adjunto|ˈanhɑŋ|S|tec|B1|Schick das Foto als Anhang.|Envía la foto como adjunto.|c=im Anhang
sich einloggen|iniciar sesión|zɪç ˈaɪ̯nlɔɡən|L|tec|B1|Logge dich mit dem neuen Passwort ein.|Inicia sesión con tu nueva contraseña.|a=sich ausloggen
sich anmelden|registrarse|zɪç ˈanmeldən|V|tec|B1|Melde dich für den kostenlosen Kurs an.|Regístrate en el curso gratuito.|n=sich anmelden ist auch «apuntarse a un evento»: zum Kurs anmelden.
weiterleiten|reenviar|ˈvaɪ̯tɐlaɪ̯tən|V|tec|B1|Leite die Einladung an Ana weiter.|Reenvía la invitación a Ana.
Passwort|contraseña|ˈpasvɔʁt|S|tec|B1|Teile nie dein Passwort.|Nunca compartas tu contraseña.
# ─── B2 · Verben der Argumentation (18) ───
behaupten|afirmar|bəˈhɔʏ̯tən|V|cnn|B2|Die Studie behauptet eine klare Wirkung.|El estudio afirma un efecto claro.
darlegen|sostener|daɐ̯ˈleːɡən|V|cnn|B2|Sie legte dar, dass die Daten falsch waren.|Sostuvo que los datos eran erróneos.|r=for
betonen|recalcar|bəˈtoːnən|V|cnn|B2|Der Bericht betont die Sicherheit.|El informe recalca la seguridad.
andeuten|dar a entender|ˈandaʊ̯tən|V|cnn|B2|Du deutest an, dass ich mich irre?|¿Das a entender que me equivoco?|c=etwas andeuten
unterstellen (vermuten)|suponer|ʊntɐˈʃtɛlən|V|cnn|B2|Unterstellen wir, die Kosten sind fix.|Supongamos que el coste es fijo.|n=unterstellen ist auch «insinuar» (negativ): er unterstellte ihm Lügen.
nachweisen|demostrar|ˈnaxvaɪ̯zən|V|sci|B2|Der Test wies die Theorie nach.|La prueba demostró la teoría.|c=etwas nachweisen
bestreiten|negar|bəˈʃtʁaɪ̯tən|V|cnn|B2|Er bestritt die Vorwürfe.|Negó las acusaciones.|n=bestreiten ist auch «sostener un duelo»: den Sieg bestreiten.
einräumen|admitir|ˈaɪ̯nʁaʊ̯mən|V|cnn|B2|Sie räumte den Fehler ein.|Admitió el error.|ff=1;n=einräumen ist auch «conceder un espacio»: Platz einräumen.
überzeugen|convencer|yːbɐˈtsuːɡən|V|cmu|B2|Ich überzeugte sie, es nochmal zu versuchen.|La convencí para intentarlo otra vez.|c=jemanden überzeugen
offenlegen|revelar (oficial)|ˈɔfn̩leːɡən|V|fin|B2|Die Firma muss ihre Zahlen offenlegen.|La empresa debe revelar sus ingresos.|r=for
anprangern|desvelar / denunciar|ˈanpʁaŋəʁn̩|V|att|B2|Der Bericht prangerte den Betrug an.|El informe denunció el fraude.|c=jemanden anprangern
übertreiben|exagerar|yːbɐˈtʁaɪ̯bən|V|cmu|B2|Übertreib die Zahlen nicht.|No exageres las cifras.|a=untertreiben
zusammenfassen|resumir|tsuˈzamənfasən|V|stu|B2|Fasse den Text in einer Zeile zusammen.|Resume el texto en una línea.
vorhersagen|predecir|ˈfɔɐ̯heːzaːɡən|V|sci|B2|Niemand sagte die Krise voraus.|Nadie predijo la crisis.|n=vorhersagen ist trennbar: die Krise, sagt man voraus.
schätzen|estimar|ˈʃɛtsən|V|fin|B2|Sie schätzen einen Anstieg um 5%.|Estiman una subida del 5%.|ff=1;n=schätzen ist auch «apreciar»: ich schätze deine Hilfe.
bewerten|evaluar|bəˈvɛʁtən|V|stu|B2|Das Komitee bewertete das Projekt.|El comité evaluó el proyecto.
rechtfertigen|justificar|ˈʁɛçtfɛʁtɪɡən|V|cnn|B2|Wie rechtfertigst du die Ausgabe?|¿Cómo justificas el gasto?
schwächen|minar (debilitar)|ˈʃvɛçən|V|cnn|B2|Der Skandal schwächte das Vertrauen.|El escándalo minó la confianza.|s=untergraben
belegen|respaldar|bəˈleːɡən|V|cnn|B2|Die Daten belegen die Theorie.|Los datos respaldan la teoría.|n=belegen ist auch «ocupar»: einen Platz belegen.
# ─── B2 · abstrakte Substantive (24) ───
Bewusstsein|conciencia (conocimiento)|bəˈvʊstzaɪ̯n|S|ast|B2|Die Kampagne schuf Bewusstsein.|La campaña creó conciencia.|ff=1;n=Bewusstsein ist auch «conciencia (filosófica)»: das Bewusstsein verlieren.
Auswirkung|impacto|ˈausvɪʁkʊŋ|S|ast|B2|Das Gesetz hatte enorme Auswirkungen.|La ley tuvo un enorme impacto.|c=Auswirkungen auf
Trend|tendencia|trɛnt|S|fin|B2|Homeoffice ist ein wachsender Trend.|El teletrabajo es una tendencia al alza.|ff=1;n=Trend ist auch «pendiente» (technisch): der Trend der Kurve.
Ansatz|enfoque|ˈanzats|S|ast|B2|Wir brauchen einen neuen Ansatz.|Necesitamos un nuevo enfoque.|ff=1;n=Ansatz ist auch «arranque»: der Ansatz des Rads.
Ergebnis (Ausgang)|resultado (desenlace)|ɛɐ̯ˈɡɛbnɪs|S|ast|B2|Das Ergebnis überraschte die Institute.|El resultado sorprendió a los institutos.
Vorteil|beneficio|ˈfɔɐ̯taɪ̯l|S|fin|B2|Der Plan hat klare Vorteile.|El plan tiene claros beneficios.|c=wettbewerbsvorteil; a=Nachteil
Nachteil|inconveniente|ˈnaχtaɪ̯l|S|ast|B2|Der Hauptnachteil ist der Preis.|El principal inconveniente es el precio.|a=Vorteil
Anforderung|requisito|ˈanfɔʁdəʁʊŋ|S|lav|B2|Spanisch ist eine Anforderung der Stelle.|El español es un requisito del puesto.|c=Anforderungen erfüllen
Standard|estándar|ˈstandaʁt|S|ast|B2|Das Hotel folgt hohen Standards.|El hotel sigue estándares altos.|ff=1;n=Standard ist auch «nivel»: der Standard ist gefallen.
Nachweis (Evidenz)|pruebas (evidencia)|ˈnaxvaɪ̯s|S|ist|B2|Es gibt starke Nachweise dafür.|Hay pruebas sólidas de eso.|ff=1;n=Nachweis ist auch «comprobante»: der Nachweis der Zahlung.
Ausmaß|grado / extensión|ˈausmaːs|S|ast|B2|In gewissem Ausmaß stimme ich zu.|Hasta cierto punto, estoy de acuerdo.|c=in gewissem Ausmaß
Aussicht|perspectiva|ˈauszɪçt|S|fin|B2|Die Arbeitsaussichten verbessern sich.|Las perspectivas de empleo mejoran.|p=Aussichten; ff=1;n=Aussicht ist auch «vista»: die Aussicht vom Turm.
Sorge|preocupación|ˈzɔʁɡə|S|emo|B2|Sicherheit ist unsere Hauptsorge.|La seguridad es nuestra principal preocupación.|c=Sorgen machen
Beitrag|aportación|bəˈtʁaːk|S|ast|B2|Dein Beitrag zählte.|Tu aportación importó.|ff=1;n=Beitrag ist auch «cuota»: der Beitrag zur Kasse.
Erfolg (Leistung)|logro|ɛɐ̯ˈfɔlk|S|ast|B2|Die Landung war ein riesiger Erfolg.|El aterrizaje fue un logro enorme.|ff=1;n=Erfolg ist «éxito»; Misserfolg ist el fracaso.
Einschränkung|limitación|ˈaɪ̯nʃʁɛŋkʊŋ|S|ast|B2|Die Studie hat Einschränkungen.|El estudio tiene limitaciones.|a=Stärke
Kapazität|capacidad|kapaˈtsiːtɛːt|S|ast|B2|Das Stadion hat eine Kapazität von 80.000.|El estadio tiene capacidad para 80.000.
Zwang|restricción|tsvaŋ|S|ast|B2|Budgetzwänge verzögerten den Bau.|Las restricciones presupuestarias retrasaron la obra.|r=for; ff=1;n=Zwang ist auch «coacción»: unter Zwang handeln.
Verzerrung|sesgo|fɛɐˈtsɪʁʊŋ|S|sci|B2|Die Stichprobe zeigt eine deutliche Verzerrung.|La muestra muestra un sesgo claro.|r=tec
Stereotyp|estereotipo|steʁeoˈtyːp|S|ast|B2|Die Werbung baut auf alten Stereotypen auf.|El anuncio se apoya en viejos estereotipos.
Staatsbürgerschaft|ciudadanía|ˈʃtaːtsbʏʁɡɐʃaft|S|ist|B2|Sie beantragte die deutsche Staatsbürgerschaft.|Solicitó la ciudadanía alemana.|c=doppelte Staatsbürgerschaft
Armut|pobreza|ˈaʁmʊt|S|ist|B2|Das Programm bekämpft Kinderarmut.|El programa combate la pobreza infantil.|c=in Armut leben
Ungleichheit|desigualdad|ʊnˈɡlaɪ̯çaɪ̯thaɪ̯t|S|ist|B2|Die Lohnungleichheit steigt weiter.|La desigualdad salarial sigue subiendo.|a=Gleichheit
Energieverbrauch|consumo de energía|ɛnɐˈɡiːvɛɐ̯braʊx|S|fin|B2|Der Energieverbrauch sank in diesem Jahr.|El consumo de energía bajó este año.
Erwerbsbevölkerung|fuerza laboral|ɛɐˈvɛʁpsbəvɛlʊŋ|S|fin|B2|Die Erwerbsbevölkerung arbeitet zu 100% fern.|La fuerza laboral es 100% remota.|r=for
Nachhaltigkeit|sostenibilidad|ˈnaxhaltɪçkaɪ̯t|S|nat|B2|Nachhaltigkeit leitet das Projekt.|La sostenibilidad guía el proyecto.|r=for
# ─── B2 · Redewendungen (14) ───
ein Kinderspiel|pan comido|aɪ̯n ˈkɪndɐʃpiːl|L|sve|B2|Die Prüfung war ein Kinderspiel.|El examen fue pan comido.|r=col
ab und zu|de vez en cuando|apʊntˈtsuː|L|tmp|B2|Wir gehen ab und zu aus.|Salimos fuera de vez en cuando.
absichtlich|a propósito|ˈapsɪçtlɪç|D|cmu|B2|Er hat es absichtlich gemacht.|Lo hizo a propósito.|a=versehentlich
durch Zufall|por casualidad|dʊʁç tsuˈfaːl|L|tmp|B2|Wir trafen uns durch Zufall in Lissabon.|Nos encontramos por casualidad en Lisboa.
in Kontakt bleiben|mantenerse en contacto|ɪn kɔnˈtakt blaɪ̯bən|L|rel|B2|Bleiben wir nach dem Kurs in Kontakt.|Mantengámonos en contacto tras el curso.|a=den Kontakt verlieren
unter Druck|bajo presión|ˈʊntɐ dʁʊk|L|emo|B2|Sie arbeitet gut unter Druck.|Trabaja bien bajo presión.
langfristig|a la larga|ˈlaŋfʁɪstɪç|A|tmp|B2|Sparen lohnt sich langfristig.|Ahorrar ahora compensa a la larga.|a=kurzfristig
sich Zeit lassen|tomárselo con calma|zɪç tsɑɪ̯t ˈlasən|L|emo|B2|Lass dir am Wochenende Zeit.|Tómatelo con calma este fin de semana.
überglücklich|muy contento|yːbɐˈglʏklɪç|A|emo|B2|Nach der Geburt war sie überglücklich.|Estaba muy contenta tras el nacimiento.|a=unglücklich
ein Vermögen kosten|costar un ojo de la cara|aɪ̯n fɛɐˈmøːɡən ˈkɔstn̩|L|fin|B2|Die Reparatur kostete ein Vermögen.|La reparación costó un ojo de la cara.|r=col
das Eis brechen|romper el hielo|das aɪ̯s ˈbʁɛçən|L|cmu|B2|Ein Witz brach in der Sitzung das Eis.|Un chiste rompió el hielo en la reunión.
ein Segen im Unglück|una bendición disfrazada|aɪ̯n ˈzeːɡən ɪm ʊnˈglʏk|L|ast|B2|Der verpasste Flug war ein Segen im Unglück.|Perder aquel vuelo fue una bendición disfrazada.|r=col
ein für allemal|de una vez por todas|aɪ̯n fyːɐ alˈmaːl|L|tmp|B2|Klären wir das ein für allemal.|Zanjemos esto de una vez por todas.
aus dem Nichts|de la nada|aus dem nɪçts|L|tmp|B2|Er rief aus dem Nichts an.|Me llamó de la nada.|s=plötzlich
# ─── B2 · formale Konnektoren (10) ───
außerdem|además (formal)|ˈausɐdɛm|D|cnn|B2|Der Plan ist spät; außerdem ist er zu teuer.|El plan se retrasó; además, cuesta caro.|r=for
dennoch|no obstante|ˈdɛnɔx|D|cnn|B2|Die Daten sind begrenzt; dennoch hält das Muster.|Los datos son limitados; no obstante, el patrón se sostiene.|r=for
während (Kontrast)|mientras que (contraste)|ˈvɛːʁənt|C|cnn|B2|Die Läden sanken, während der Onlinehandel wuchs.|Las tiendas cayeron, mientras que el online creció.
daher|por lo tanto|daˈhɛːɐ̯|D|cnn|B2|Die Brücke ist zu; daher nimm den Tunnel.|El puente está cerrado; por lo tanto, toma el túnel.|r=for
somit|así pues|zoˈmɪt|D|cnn|B2|Die Stichprobe war klein; somit ist der Befund vorläufig.|La muestra era pequeña; así pues, el hallazgo es provisional.|r=for
meinerseits|por lo que a mí respecta|ˈmaɪ̯nəzaɪ̯ts|L|cmu|B2|Meinerseits ist der Deal fair.|Por lo que a mí respecta, el trato es justo.|r=for
mit anderen Worten|es decir, en otras palabras|mɪt ˈandəʁn̩ ˈvɔʁtən|L|cnn|B2|Mit anderen Worten: wir fangen neu an.|Es decir, empezamos de cero.
im Gegenteil|todo lo contrario|ɪm ɡəˈɡɛntaɪ̯l|L|cnn|B2|Es war nicht schwer; im Gegenteil, es hat Spaß gemacht.|No fue difícil; todo lo contrario, fue divertido.
infolgedessen|como resultado|ɪnfɔlɡəˈdɛsən|D|cnn|B2|Der Regen blieb aus; infolgedessen stiegen die Preise.|Las lluvias fallaron; como resultado, los precios subieron.|r=for
zu guter Letzt|en resumen|tsu ˈguːtɐ lɛtst|L|cnn|B2|Zu guter Letzt: wir brauchen mehr Zeit.|En resumen, necesitamos más tiempo.|r=for
# ─── B2 · Recht, Umwelt, Wissenschaft, Wirtschaft (28) ───
Vergehen|delito menor|fɛɐˈɡeːən|S|ist|B2|Leichte Vergehen ziehen Bußgelder nach sich.|Los delitos menores conllevan multas.|n=Vergehen ist auch «yerro»: ein Vergehen gegen die Grammatik.
Bußgeld|multa|ˈbʊsɡɛlt|S|ist|B2|Ich habe ein Bußgeld bekommen.|Me pusieron una multa.|ff=1;n=Bußgeld ist nur administrativ; «Strafe» ist la pena del juez.
anklagen|imputar|ˈanklaːɡən|V|ist|B2|Er wurde wegen Diebstahls angeklagt.|Lo imputaron por robo.|c=jemanden anklagen
Jury|jurado|ˈdʒyːʁi|S|ist|B2|Die Jury kam an einem Tag zu einem Urteil.|El jurado llegó a un veredicto en un día.|ff=1;n=im deutschen Prozess ist die «Schwurgericht» das tribunal con jurado.
Prozess|juicio|pʁɔˈsɛs|S|ist|B2|Der Prozess beginnt im März.|El juicio empieza en marzo.|ff=1;n=Prozess ist auch «proceso»: der Prozess der Reifung.
Menschenrechte|derechos humanos|ˈmɛnʃn̩ʁɛçtə|L|ist|B2|Die Charta schützt die Menschenrechte.|La carta protege los derechos humanos.|c=Verletzung der Menschenrechte
Diskriminierung|discriminación|dɪskʁimiˈnaːtsi̯oːn|S|ist|B2|Diskriminierung am Arbeitsplatz ist illegal.|La discriminación laboral es ilegal.
Demonstration|protesta|demostratsi̯oːn|S|ist|B2|Eine Demonstration füllte den Platz.|Una protesta llenó la plaza.|ff=1;n=Demonstration ist auch «demostración»: eine Demonstration in Physik.
Umfrage|encuesta|ˈʊmfaːɡə|S|ist|B2|Die Umfrage zeigt ein knappes Rennen.|La encuesta muestra un resultado ajustado.
die Presse|la prensa|diː ˈpʁɛsə|L|att|B2|Die Presse berichtete über den Start.|La prensa cubrió el lanzamiento.|c=Pressefreiheit
Klimawandel|cambio climático|ˈkliːmavaˌndəl|S|nat|B2|Der Klimawandel bestimmt die Agenda.|El cambio climático marca la agenda.|ff=1;n=Wandel ist «cambio» en general; das Wetter ändert sich auch.
Erderwärmung|calentamiento global|ˈeːɐ̯dɛʁˌvɛʁmʊŋ|S|nat|B2|Die Erderwärmung trifft die Ernten.|El calentamiento global afecta a las cosechas.
Emissionen|emisiones|emiˈsjoːnən|S|nat|B2|Die Stadt senkte die Emissionen um 15%.|La ciudad recortó las emisiones un 15%.|c=CO2-Emissionen
erneuerbar|renovable|ɛɐˈnɔʏ̯ɐbaːɐ̯|A|tec|B2|Erneuerbare Energie ist jetzt billiger.|La energía renovable ya es más barata.|c=erneuerbare Energien
Dürre|sequía|ˈdʏʁə|S|cli|B2|Die Dürre ruinierte die Ernte.|La sequía arruinó la cosecha.|p=Dürren
Überschwemmung|inundación|yːbɐˈʃvɛmʊŋ|S|cli|B2|Überschwemmungen sperrten die Autobahn.|Las inundaciones cerraron la autopista.
Aussterben|extinción|ˈausʃtɛrbən|S|nat|B2|Das Gesetz will das Aussterben verhindern.|La ley busca evitar la extinción.|c=am Rande des Aussterbens
Art|especie|aːɐ̯t|S|nat|B2|Der Park schützt endemische Arten.|El parque protege especies endémicas.|ff=1;n=Art ist auch «manera»: eine Art zu leben — drei Welten in einem Wort.
Ökosystem|ecosistema|øːkoˈzɪsteːm|S|nat|B2|Wölfe formten das ganze Ökosystem um.|Los lobos remodelaron todo el ecosistema.
fossile Brennstoffe|combustibles fósiles|ˈfɔsɪlə ˈbʁɛnʃtɔfə|L|nat|B2|Wir müssen aus fossilen Brennstoffen aussteigen.|Debemos eliminar los combustibles fósiles.|c=aussteigen aus
Hausarbeit (Aufsatz)|ensayo (redacción)|ˈhaʊsˌaʁbaɪ̯t|S|stu|B2|Die Hausarbeit ist am Freitag fällig.|El ensayo se entrega el viernes.|ff=1;n=Hausarbeit ist auch «tareas de casa»: die Hausarbeit machen.
Entwurf|borrador|ɛntˈvʊʁf|S|stu|B2|Schick mir den ersten Entwurf.|Mándame el primer borrador.
Gliederung|esquema|ˈɡliːdəʁʊŋ|S|stu|B2|Schreib vor dem Aufsatz eine Gliederung.|Escribe un esquema antes del ensayo.|ff=1;n=Gliederung ist auch «estructura»: die Gliederung des Buchs.
plagiieren|plagiar|plaˈɡiːʁən|V|stu|B2|Plagiatieren ruiniert Karrieren.|El plagio acaba con carreras.|c=Plagiat begehen
Fachzeitschrift|revista científica|ˈfaxtsaɪ̯tʃʁɪft|S|sci|B2|Die Studie erschien in einer Fachzeitschrift.|El estudio salió en una revista científica.|n=Fachzeitschrift ist die «revista especializada»; die «Zeitschrift» ist de consumo.
Investition|inversión|ɪnvɛstiˈtsi̯oːn|S|fin|B2|Frühe Investition lohnt sich.|La inversión temprana compensa.|c=eine Investition tätigen
Aktie|acción (bursátil)|ˈaktsi̯ə|S|fin|B2|Sie kaufte Aktien des Start-ups.|Compró acciones de la start-up.|ff=1;n=Aktie ist nur bursátil; «acción» als obra es die Tat.
Gewinn|beneficio|ɡəˈvɪn|S|fin|B2|Der Gewinn stieg in diesem Quartal um 8%.|El beneficio subió un 8% este trimestre.|c=Gewinnmarge; a=Verlust; n=Gewinn ist auch «premio»: der Gewinn im Lotto.
Umsatz|ingresos|ˈʊmzats|S|fin|B2|Der Umsatz übertraf die Erwartungen.|Los ingresos superaron lo previsto.|ff=1;n=Umsatz ist auch «conversión»: der Umsatz von Euro in Dollar.
Insolvenz|quiebra|ɪnzɔˈlɛnts|S|fin|B2|Die Kette meldete Insolvenz an.|La cadena se acogió a la quiebra.|c=Insolvenz anmelden
# ─── C1 · akademisch (14) ───
Hypothese|hipótesis|hypoteːzə|S|sci|C1|Der Versuch stellte die Hypothese auf die Probe.|El experimento puso a prueba la hipótesis.
theoretischer Rahmen|marco teórico|teoˈʁeːtɪʃɐ ˈʁaːmən|L|sci|C1|Die Studie braucht einen theoretischen Rahmen.|El estudio necesita un marco teórico.
Paradigma|paradigma|paˈradɪɡma|S|sci|C1|Der Fund verschob das Paradigma.|El hallazgo cambió el paradigma.|c=Paradigmenwechsel
Methodik|metodología|metoˈdiːk|S|sci|C1|Die Methodik erklärt die Stichprobe.|La metodología explica la muestra.|r=tec
Kriterium|criterio|kriteːˈʁiʊm|S|sci|C1|Das Hauptkriterium ist Originalität.|El criterio principal es la originalidad.|p=Kriterien
Begriff|noción|bəˈɡʁɪf|S|ast|C1|Der Begriff der Privatsphäre hat sich gewandelt.|La noción de privacidad ha evolucionado.|ff=1;n=Begriff ist auch «término»: ein Fachbegriff — und «comprensión»: im Begriff sein.
Prämisse|premisa|pʁɛˈmɪsə|S|sci|C1|Das Argument ruht auf einer falschen Prämisse.|El argumento se apoya en una premisa falsa.
tiefgründig|profundo|tiːpɡʁʏndɪç|A|ast|C1|Das Buch hat mich tiefgründig geprägt.|El libro tuvo un efecto profundo en mí.|a=oberflächlich
gründlich|riguroso|ɡʁʏntlɪç|A|sci|C1|Die Tests waren gründlich.|Las pruebas fueron rigurosas.|s=sorgfältig
einschlägig|completo (exhaustivo)|aɪ̯nˈʃlɛːɡɪç|A|sci|C1|Der Bericht gibt eine einschlägige Übersicht.|El informe ofrece una visión exhaustiva.|n=einschlägig heißt eigentlich «pertinente»: die einschlägige Literatur.
erheblich|considerable|ɛɐ̯ˈheːplɪç|A|fin|C1|Es gab eine erhebliche Verbesserung.|Hubo una mejora considerable.|s=signifikant
empirisch|empírico|ɛmˈpiːʁɪʃ|A|sci|C1|Behauptungen brauchen empirische Unterstützung.|Las afirmaciones requieren apoyo empírico.|a=theoretisch
Gelehrte|erudito|ɡəˈleːɐ̯tə|S|stu|C1|Eine Gelehrte aus Warschau hielt die Vorlesung.|Una erudita invitada dio la clase.|ff=1;n=gelehrt ist auch adjektivisch: ein gelehrter Diskurs.
ausführen (erläutern)|desarrollar (detallar)|ausˈfyːʁən|V|cmu|C1|Kannst du diesen Punkt ausführen?|¿Podrías desarrollar ese punto?|n=ausführen ist auch «ejecutar»: einen Befehl ausführen.
# ─── C1 · Journalismus und Politik (14) ───
behaupten (journalistisch)|alegar (sin probar)|bəˈhɔʏ̯tən|V|att|C1|Die Zeitung behauptet eine Vertuschung.|El periódico alega un encubrimiento.|n=Pressedeutsch: angeblich, Berichten zufolge — Presunosión de inocencia.
Durchsickern (Leak)|filtrar|dʊʁçˈzɪkɐn|V|att|C1|Jemand ließ das Memo durchsickern.|Alguien filtró el memorando.|ff=1;n=durchsickern ist eigentlich «gotear»: Wasser sickert durch.
Prüfung (überprüfende Betrachtung)|escrutinio|ˈpʁyːfʊŋ|S|att|C1|Der Deal geriet unter Prüfung.|El trato quedó bajo escrutinio.|ff=1;n=Prüfung ist auch «examen»: die Abschlussprüfung.
offenlegen (C1)|revelar (oficial)|ˈɔfn̩leːɡən|V|fin|C1|Die Firma muss ihre Zahlen offenlegen.|La empresa debe revelar sus ingresos.|r=for
Kontroverse|polémica|kɔntʁoˈvɛʁzə|S|att|C1|Das Wandbild entfachte die Kontroverse.|El mural encendió la polémica.|c=eine Kontroverse entfachen
Interessengruppe|grupo de presión|ɪntəˈʁɛsənɡʁʊpə|L|ist|C1|Die Agrar-Lobby blockierte das Gesetz.|El grupo de presión agrario bloqueó el proyecto.|n=Auf Deutsch sagt man meistens «Lobby».
Wahlmandat|mandato|ˈvaːlmandaːt|S|ist|C1|Die Wahl gab ihr ein klares Mandat.|Las elecciones le dieron un mandato claro.|ff=1;n=Mandat ist auch «encargo»: ein Mandat der UN.
Volksabstimmung|referéndum|fɔlksˈapʃtɪmʊŋ|S|ist|C1|Die Volksabstimmung bestand mit 60%.|El referéndum pasó con el 60%.|p=Volksabstimmungen
beispiellos|sin precedentes|baɪ̯ˈʃpiːlloːs|A|att|C1|Der Sturm war beispiellos.|La tormenta fue sin precedentes.|s=unerhört
Patt|punto muerto|pat|S|ist|C1|Die Verhandlungen stecken im Patt.|Las conversaciones llegaron a un punto muerto.|n=Patt ist das Schachwort: «remate» kommt vom Boxen.
Politisierung|polarización|politiˈtsiːʁʊŋ|S|ist|C1|Die Polarisierung vergiftet die Debatte.|La polarización envenena el debate.|ff=1;n=wörtlich heißt Politisierung «politización»: das deutsche Wort deckt beide.
Populismus|populismo|popuˈlɪs̮mʊs|S|ist|C1|Die Region sah den Aufstieg des Populismus.|La región vio un auge del populismo.
Rechenschaft|rendición de cuentas|ʁəˈçn̩ʃaft|S|ist|C1|Die Wähler fordern Rechenschaft.|Los electores exigen rendición de cuentas.|c=jemanden zur Rechenschaft ziehen
Basis (Graswurzel)|de base (popular)|ˈbaːzɪs|L|ist|C1|Eine Basis-Kampagne veränderte die Stadt.|Una campaña de base cambió la ciudad.|c=Graswurzelbewegung; ff=1;n=Basis ist auch «base»: die Basis des Turms.
# ─── C1 · literarisch (14) ───
eindrucksvoll|vívido (impactante)|aɪ̯nˈdʁʊksfɔl|A|let|C1|Der Roman malt ein eindrucksvolles Bild Bremens.|La novela retrata Bremen con viveza.|c=eindrucksvolle Erinnerung
ergreifend|conmovedor|ɛɐ̯ˈɡʁaɪ̯fənd|A|let|C1|Das Ende ist ergreifend, ohne kitschig zu sein.|El final es conmovedor sin ser sensiblero.|ff=1;n=ergreifend ist auch «conmovedor físico»: ein ergreifender Schmerz.
subtil|sutil|zʊˈtiːl|A|let|C1|Die Änderung ist subtil, aber real.|El cambio es sutil pero real.
bestechend (überzeugend)|irresistible (que atrapa)|bəˈʃtɛçənd|A|cin|C1|Ein bestechendes Plädoyer für die Reform.|Un argumento irrefutable a favor de la reforma.|ff=1;n=bestechend ist eigentlich «sobornante»: die Metapher ist juristisch.
hervorrufen (Gefühl wecken)|evocar|hɛʁfɔʁˈruːfən|V|let|C1|Der Geruch ruft die Küche meiner Oma hervor.|El olor evoca la cocina de mi abuela.|c=Erinnerungen hervorrufen
schildern|retratar|ˈʃɪldɐn|V|art|C1|Das Wandbild schildert den Marsch von 1968.|El mural retrata la marcha de 1968.|ff=1;n=schildern ist eigentlich «describir»: das Gemälde schildert.
nuanciert|matizado|nuˈansirt|A|let|C1|Eine nuancierte Antwort, kein Slogan.|Una respuesta matizada, no una consigna.
Melancholie|melancolía|melaŋkoˈliː|S|emo|C1|Eine Melancholie durchzieht den Film.|Una melancolía atraviesa la película.|r=let
beredt|elocuente|bəˈreːt|A|let|C1|Ihr Schweigen war beredter als Worte.|Su silencio fue más elocuente que las palabras.|n=beredt: «desprechenswert» ist das genaue Gegenteil — beredsamkeit ist eine Tugend.
geistreich|ingenioso|ˈgaɪ̯stʁaɪ̯x|A|let|C1|Die Rede war geistreich und bissig.|El discurso fue ingenioso y mordaz.|ff=1;n=geistreich ist auch «espiritual»: der reiche Geist ist fromm.
Romanheld|protagonista|roˈmaːnhelt|S|let|C1|Der Romanheld ist ein Busfahrer aus Lima.|El protagonista es un chofer de Lima.|n=auf Deutsch sagt man «Protagonist» gleich mit.
Erzähler|narrador|ɛɐ̯ˈtsɛːlɐ|S|let|C1|Der Erzähler ist unzuverlässig.|El narrador es poco fiable.|c=unzuverlässiger Erzähler
Metapher|metáfora|metaˈfoːʁɐ|S|let|C1|Das Gedicht macht aus dem Fluss eine Metapher.|El poema convierte el río en metáfora.
Prosa|prosa|ˈpʁoːza|S|let|C1|Sie schreibt Prosa von großer Klarheit.|Escribe prosa de gran limpieza.|c=Prosagedicht
# ─── C1 · Konnektoren und Präzision (10) ───
ungeachtet|no obstante (con sustantivo)|ʊnɡəˈaxtɛt|P|cnn|C1|Ungeachtet der Kosten ging der Plan weiter.|No obstante el coste, el plan siguió.|r=for
wenn auch|aunque (formal)|vɛn ax|C|cnn|C1|Ein stiller Sieg, wenn auch ein wichtiger.|Una victoria discreta, aunque importante.|n=wenn auch verlangt keine Wortstellungstausch wie «zwar … aber».
insofern|en la medida en que|ɪnzoˈfɛʁn|L|cnn|C1|Es funktioniert insofern die Daten vollständig sind.|Funciona en la medida en que los datos estén completos.|r=for
was … betrifft|con respecto a|vas ... bəˈtʁɪft|L|cnn|C1|Was Ihren Brief betrifft, sind wir einverstanden.|Con respecto a su carta, estamos de acuerdo.|r=for
vor (formal)|con anterioridad a|fɔːɐ̯|P|tmp|C1|Vor der Fusion waren beide Firmen klein.|Antes de la fusión, ambas eran pequeñas.|r=for
im Großen und Ganzen|en general|ɪm ˈɡʁoːsən ʊnt ˈgantstn̩|L|cnn|C1|Im Großen und Ganzen waren die Kritiken fair.|En general, las críticas fueron justas.|r=col
geschweige denn|ni siquiera|ɡəˈʃvaɪ̯ɡə dɛn|L|cnn|C1|Er kann nicht gehen, geschweige denn rennen.|No puede caminar, ni siquiera correr.|r=for
wenn überhaupt|más bien (si acaso)|vɛn yːbɐˈhaʊ̯pt|L|cnn|C1|Wenn überhaupt, fielen die Preise schneller.|Si acaso, los precios cayeron más rápido.
auf den ersten Blick|a primera vista|auf den ˈeːɐ̯stən blɪk|L|cnn|C1|Auf den ersten Blick sehen sie identisch aus.|A primera vista, parecen idénticas.
im Nachhinein|con perspectiva|ɪm ˈnaxhaɪ̯n|L|tmp|C1|Im Nachhinein war das Signal klar.|Con perspectiva, la señal era clara.|s=rückblickend
# ─── C1 · Gefühle und Psyche (10) ───
bang (beklommen)|aprensivo|baŋ|A|emo|C1|Vor den Ergebnissen war mir bang.|Me sentía aprensivo antes de los resultados.|r=let; n=«bang» ist dichterisch; alltagssprachlich: unruhig.
Groll|resentimiento|ɡʁɔl|S|emo|C1|Alter Groll kam beim Essen hoch.|Viejos resentimientos afloraron en la cena.|ff=1;n=Groll ist eigentlich «ronroneo»: der Katzenton ist die Wurzel.
Sehnsucht|anhelo (nostalgia profunda)|ˈzeːnzuχt|S|emo|C1|Eine Sehnsucht nach der Küste erfüllt ihre Gedichte.|Un anhelo de la costa llena sus poemas.|r=let; n=Sehnsucht hat keine exakte Übersetzung: «saudade» ist das nächste Wort.
Zuneigung|cariño|tsuˈnaɪ̯ɡʊŋ|S|emo|C1|Sie zeigt Zuneigung in kleinen Gesten.|Muestra cariño en pequeños gestos.|c=jemandem Zuneigung entgegenbringen
Unbehagen|desazón|ʊnbəˈhaːɡən|S|emo|C1|Ein Unbehagen breitete sich im Raum aus.|Una desazón se instaló en la sala.|ff=1;n=Unbehagen ist auch «incomodidad»: ein Unbehagen im Rücken.
Verachtung|desprecio|fɛɐˈaxtʊŋ|S|emo|C1|Er behandelte die Anklage mit Verachtung.|Trató la acusación con desprecio.|c=unter aller Verachtung
Ehrfurcht|asombro (reverencia)|ˈeːɐ̯fʊʁçt|S|emo|C1|Der Canyon füllt Besucher mit Ehrfurcht.|El cañón llena de asombro a los visitantes.|c=in Ehrfurcht vor
Entzauberung|desencanto|ɛntˈtsaʊ̯bəʁʊŋ|S|emo|C1|Wähler sprechen von Entzauberung.|Los electores hablaron de desencanto.|r=for; n=wörtlich: «desencantamiento» — Weber sprach von der Entzauberung der Welt.
Empathie|empatía|ɛmˈpaːti|S|emo|C1|Das Buch lehrt Kindern Empathie.|El libro enseña empatía a los niños.|a=Mitleid
# ─── C1 · formell und Geschäft (12) ───
Unterfangen|empeño (empresa)|ʊntɐˈfaŋən|S|ast|C1|Ein lobenswertes, wenn auch riskantes Unterfangen.|Un empeño loable, aunque arriesgado.|r=for
vorläufig|provisional|fɔɐˈlaʊ̯fɪç|A|fin|C1|Das sind vorläufige Zahlen.|Son cifras provisionales.|s=provisorisch
streng|estricto|ʃtrɛŋ|A|ist|C1|Das Labor folgt strengen Protokollen.|El laboratorio sigue protocolos estrictos.|c=strenge Regeln
bevorstehend|próximo (inminente)|bəˈfɔɐ̯ʃteːənt|A|tmp|C1|Ein bevorstehender Termin wird bald bekannt gegeben.|Los detalles se harán públicos pronto.|ff=1;n=bevorstehend heißt eigentlich «que está por venir»: der bevorstehende Montag.
beginnen (formal)|comenzar (formal)|bəˈɡɪnən|V|fin|C1|Die Zeremonie hebt um zwölf an.|La ceremonia comienza al mediodía.|r=for; s=anheben
beenden (formal)|dar por terminado|bəˈɛndən|V|fin|C1|Der Vertrag endet im Juni.|El contrato termina en junio.|r=for; n=beenden ist «terminar»; aufhören ist «dejar de».
umsetzen|poner en marcha|ʊmˈzɛtsən|V|fin|C1|Die Stadt setzte den Plan im Mai um.|La ciudad puso el plan en marcha en mayo.|c=eine Politik umsetzen; ff=1;n=umsetzen ist auch «traducir»: den Satz umsetzen.
erleichtern|facilitar|ɛɐ̯ˈlaɪ̯təʁn|V|lav|C1|Die App erleichtert das Peer-Review.|La app facilita la revisión por pares.|r=for
verschlanken|agilizar|fɛɐˈʃlaŋkn̩|V|fin|C1|Sie verschlankten den Antrag.|Agilizaron la solicitud.|r=for
Steueranreiz|incentivo fiscal|ˈʃtɔʏ̯ɐʔanʁaɪ̯ts|S|fin|C1|Steueranreize locken Filmcrews an.|Los incentivos fiscales atraen rodajes.|r=tec
Maßstab|referencia (estándar)|ˈmaːsʃtaːp|S|fin|C1|Der Index setzt einen weltweiten Maßstab.|El índice fija una referencia mundial.|ff=1;n=Maßstab ist auch «regla»: an einem Maßstab messen.
Übernahme|adquisición|ˈyːbɐˌnaːmə|S|fin|C1|Die Übernahme schloss im Oktober.|La adquisición se cerró en octubre.|c=Fusionen und Übernahmen; ff=1;n=Übernahme ist auch «recepción»: die Übernahme der Botschaft.
# ─── C1 · Wissenschaft und Verwandlung (14) ───
Meilenstein|hito|ˈmaɪ̯l̩ʃtaɪ̯n|S|sci|C1|Die Landung war ein Meilenstein für die Agentur.|El aterrizaje fue un hito para la agencia.|c=einen Meilenstein setzen
Durchbruch|avance (descubrimiento)|dʊʁçˈbʁʊx|S|sci|C1|Ein Durchbruch in der Batteriechemie.|Un avance en la química de baterías.|ff=1;n=Durchbruch ist auch «irrupción»: der Durchbruch der Mauer 1989.
neuronales Netz|red neuronal|nɔʏ̯ˈʁoːnaːləs nɛts|L|tec|C1|Das Modell ist ein neuronales Netz mit 70 Milliarden Parametern.|El modelo es una red neuronal de 70.000 millones de parámetros.|r=tec
Algorithmus|algoritmo|algoˈʁɪtmʊs|S|tec|C1|Der Algorithmus ordnet die Ergebnisse.|El algoritmo ordena los resultados.|r=tec
Genom|genoma|geˈnoːm|S|sci|C1|Das Reisgenom wurde 2002 sequenziert.|El genoma del arroz se secuenció en 2002.|r=tec
obsiegen|imponerse|ɔpˈziːɡən|V|ist|C1|Am Ende obsiegte der gesunde Menschenverstand.|El sentido común se impuso al final.|r=let; n=obsiegen ist gediegen; alltäglich: sich durchsetzen.
enthüllen|presentar al público|ɛntˈhʏlən|V|att|C1|Das Team enthüllte den Prototyp.|El equipo presentó el prototipo.|ff=1;n=enthüllen ist auch «desvelar»: ein Geheimnis enthüllen.
umgestalten|rediseñar (cambiar el rostro)|ʊmɡəˈʃtaltən|V|ast|C1|Das Streaming hat das Musikgeschäft umgestaltet.|El streaming rediseñó el negocio musical.
neu definieren|redefinir|nɔɪ̯ deːfiˈniːʁən|L|ast|C1|Das Telefon hat die Fotografie neu definiert.|El teléfono redefinió la fotografía.
erfahren (unterziehen)|someterse a|ɛɐ̯ˈfaːʁən|V|sla|C1|Das Gebäude erfuhr eine Renovierung.|El edificio se sometió a renovación.|ff=1;n=erfahren ist auch «enterarse»: ich erfuhr die Nachricht.
umfassen|abarcar|ʊmˈfasən|V|ast|C1|Der Kurs umfasst Grammatik und Kultur.|El curso abarca gramática y cultura.|s=beinhalten
ähneln|parecerse a|ˈɛːnəln|V|fam|C1|Sie ähnelt ihrer Großmutter.|Se parece a su abuela.|c=ähneln in
nach sich ziehen|conllevar|nax zɪç tsuːən|L|fin|C1|Die Stelle zieht Reisen nach sich.|El puesto conlleva viajes.|c=etwas nach sich ziehen
zuschreiben|atribuir|tsuːˈʃʁaɪ̯bən|V|sci|C1|Sie schreiben die Besserung dem Sport zu.|Atribuyen la mejora al ejercicio.|c=jemandem zuschreiben; ff=1;n=zuschreiben ist auch «descontar»: mir ist etwas zuzuschreiben.
sich abspielen|desarrollarse|zɪç ˈapʃpiːlən|V|att|C1|Das Drama spielte sich in drei Tagen ab.|El drama se desarrolló en tres días.|n=abspielen ist auch «reproducir»: eine Datei abspielen.
# ─── C2 · seltene und literarische Adjektive (16) ───
Inbegriff (Sinnbild)|por antonomasia|ˈɪnpəɡʁɪf|S|let|C2|Er ist der Inbegriff der Ruhe.|Es la encarnación de la calma.|c=der Inbegriff von; n=Inbegriff ist das deutsche C2-Wort: «epítome» klingt hier fremd.
flüchtig (esquivo)|esquivo|ˈflʏçtɪç|A|ast|C2|Der Erfolg blieb flüchtig.|El éxito se mostró esquivo al equipo.|ff=1;n=flüchtig ist auch «fugaz»: eine flüchtige Notiz — zwei Schattierungen.
unsagbar|inefable|ʊnˈzaːkbaːɐ̯|A|let|C2|Eine unsagbare Traurigkeit zieht durchs Buch.|Una tristeza inefable recorre el libro.|r=let
Serendipität|serendipia|zɛʁɛndiˈpiːtaɪ̯t|S|ast|C2|Sie trafen sich durch pure Serendipität.|Se conocieron por pura serendipia.|r=neu
esoterisch|esotérico|ezoteːˈʁɪʃ|A|ast|C2|Der Vortrag driftet ins Esoterische ab.|La clase deriva en detalle esotérico.|a=zugänglich
labyrinthartig|laberíntico|labiˈʁʏntaːɐ̯tɪç|A|let|C2|Die Handlung ist absichtlich labyrinthartig.|La trama es deliberadamente laberíntica.|r=let
widerspenstig|recalcitrante|ˈvɪdɐʃpɛnɪstɪç|A|emo|C2|Ein widerspenstiges Komitee blockierte die Reform.|Un comité recalcitrante bloqueó la reforma.|r=let; n=«widerspenstig» klingt nach Goethe: Gretchen war widerspenstig.
sardonisch|sardónico|zaʁˈdɔnɪʃ|A|let|C2|Er antwortete mit einem sardonischen Lächeln.|Respondió con una sonrisa sardónica.
lakonisch|lacónico|laˈkɔnɪʃ|A|let|C2|Seine lakonische Antwort verwirrte sie.|Su lacónica réplica los descolocó.|r=let
routinehaft|rutinario (desganado)|ruːˈtiːnəhaft|A|lav|C2|Die Prüfung war bestenfalls routinehaft.|La inspección fue desganada como poco.|r=for
allgegenwärtig|omnipresente|alɡəˈɡɛnvɛʁtɪç|A|tec|C2|Handys sind inzwischen allgegenwärtig.|Los teléfonos ya son omnipresentes.
vergänglich|evanescente|fɛɐˈɡɛŋlɪç|A|let|C2|Der Nebel gibt dem Hafen ein vergängliches Licht.|La niebla da al puerto una luz evanescente.|r=let
schillernd|iridiscente|ˈʃɪlɐnt|A|nat|C2|Ein schillernder Kolibri umschwirrte das Fenster.|Un colibrí iridiscente revoloteaba en la ventana.|ff=1;n=schillernd ist auch «cambiante»: eine schillernde Figur.
düster (traurig)|lúgubre|ˈdystɐ|A|let|C2|Die Orgel gab der Szene einen düsteren Hauch.|El órgano dio a la escena un aire lúgubre.|ff=1;n=düster ist auch «oscuro»: eine düstere Kammer.
alltäglich|cotidiano|ˈaltaɪ̯lɪç|A|let|C2|Der Roman feiert das Alltägliche.|La novela celebra lo cotidiano.|r=let; n=Alltag ist das deutsche Wort für «quotidiano»: das Wort kam aus der Mystik.
unselig|desdichado|ʊnˈzeːlɪç|A|let|C2|Der unselige Reisende verpasste jeden Flug.|El desdichado viajero perdió todos los vuelos.|r=let; ff=1;n=unselig ist auch «funesto»: unselige Kriegsjahre.
# ─── C2 · gehobene Verben (16) ───
vernebeln|ofuscar|fɛɐˈneːbl̩n|V|tec|C2|Fachjargon vernebelt nur die Botschaft.|La jerga solo ofusca el mensaje.|n=vernebeln ist eigentlich «neblar»: ein Bild aus dem Wetter.
verfechten|abrazar (una causa)|fɛɐˈfɛçtən|V|ist|C2|Der Aufsatz verficht offene Wissenschaft.|El artículo abrazó la ciencia abierta.|r=for; n=verfechten klingt nach Duell: ein Standpunkt wird verfochten.
verlautbaren|promulgar|fɛɐˈlaʊ̯tbaːʁən|V|ist|C2|Die Behörde verlautbarte die Regel im Mai.|La agencia promulgó la norma en mayo.|r=for; n=verlautbaren ist Amtdeutsch: die Mutter aller Behördenverben.
hochrechnen|extrapolar|hoːxˈʁɛçnən|V|sci|C2|Rechne nicht von einer einzigen Saison hoch.|No extrapoles a partir de una sola temporada.|c=hochrechnen aus
überflüssig machen|hacer innecesario|yːbɐˈflʏsɪç maxən|L|ast|C2|Die neue Brücke macht die Fähre überflüssig.|El nuevo puente hace innecesario el ferry.|r=for
entfremden|distanciar|ɛntˈfʁɛmdən|V|rel|C2|Das Schweigen entfremdete die Brüder.|El silencio distanció a los dos hermanos.|ff=1;n=Entfremdung ist der Marx-Begriff: die entfremdete Arbeit.
reinwaschen|reivindicar (dar la razón)|ʁaɪ̯nˈvaʃən|V|ist|C2|Die Zeit wusch den sturen Ingenieur rein.|El tiempo dio la razón al terco ingeniero.|c=jemanden reinwaschen; n=reinwaschen ist eigentlich «limpiar»: ein Bild aus der Wäsche.
erzeugen (hervorbringen)|engendrar|ɛɐ̯ˈtsɔʏ̯ɡən|V|ast|C2|Vertrauen erzeugt Treue.|La confianza engendra lealtad.|ff=1;n=erzeugen ist auch «fabricar»: Strom erzeugen.
elektrisieren|galvanizar|elektriˈziːʁən|V|ist|C2|Die Rede elektrisierte die Helfer.|El discurso galvanizó a los voluntarios.|n=elektrisieren ist eigentlich «dar corriente»: das Bild ist physikalisch.
grübeln|rumiar|ˈɡʁyːbl̩n|V|emo|C2|Er grübelte die Nacht über das Angebot.|Rumió la oferta toda la noche.|c=über etwas grübeln
dozieren|pontificar|doˈtsiːʁən|V|cmu|C2|Er dozierte eine Stunde über Wein.|Pontificó sobre el vino durante una hora.|r=for; n=dozieren ist Professorendeutsch: die Vorlesung als Lebensform.
hochjubeln|ensalzar|hoːˈjʊbl̩n|V|att|C2|Die Presse jubelte den jungen Koch hoch.|La prensa ensalzó al joven chef.|r=col
zergliedern|despedazar (criticar)|tseɐ̯ˈɡliːdɐn|V|att|C2|Die Kolumne zergliederte die Kette.|La columna despedazó a la cadena.|r=let; n=zergliedern ist eigentlich «desmenuzar»: ein Bild aus der Anatomie.
losschießen (dagegen)|despotricar contra|lɔsˈʃiːsən|L|cmu|C2|Er schoss wochenlang gegen die Steuer los.|Despotricó contra el impuesto durante semanas.|r=col; n=losschießen ist militärisch: das Losschießen einer Salve.
auflesen|ir recogiendo (desentrañar)|aʊ̯fˈleːzən|V|sci|C2|Historiker lesen aus Steuerlisten Fakten auf.|Los historiadores desentrañan datos de los padrones.|c=etwas auflesen; ff=1;n=auflesen ist eigentlich «recoger del suelo»: die Ährenleserin.
sich entziehen|rehuir|zɪç ɛntˈtsuːən|V|let|C2|Der Aufsatz entzieht sich dem Fachbegriff.|El ensayo rehúye el tecnicismo.|r=for; n=sich entziehen ist auch «evadir»: die Antwort entzieht sich.
# ─── C2 · gehobene Wendungen (16) ───
jenseits des Erlaubten|inaceptable (fuera de toda norma)|ˈjɛnsaɪ̯ts dɛs ɛɐ̯ˈlaʊ̯ptən|L|cnn|C2|Der Witz war schlicht jenseits des Erlaubten.|La broma fue, sencillamente, inaceptable.|r=let
schlafende Hunde wecken|no revolver el asunto|ˈʃlaːfəndə ˈhʊndə ˈvɛkn̩|L|cmu|C2|Weck bei dem Kunden besser keine schlafenden Hunde.|Mejor no revolver el asunto con ese cliente.|r=col
Sturm im Wasserglas|una tormenta en un vaso de agua|ʃtʊʁm ɪm ˈvasɐɡlas|L|ast|C2|Der Streit war ein Sturm im Wasserglas.|La pelea fue una tormenta en un vaso de agua.|r=col
das I-Tüpfelchen|la guinda del pastel|das iːˈtœpfçən|L|sve|C2|Die Prämie war das I-Tüpfelchen.|El bono fue la guinda del pastel.|r=col; n=wörtlich: der Punkt über dem i — die Vollendung.
Pyrrhussieg|una victoria pírrica|ˈpʏʁʊsziːk|S|ist|C2|Der Sieg erwies sich als Pyrrhussieg.|La victoria resultó pírrica.|r=let
über die Maßen|en exceso (por defecto)|yːbɐ diː ˈmaːsən|L|emo|C2|Er ist über die Maßen großzügig.|Es generoso en exceso.|r=let
auf dem Tiefpunkt|en letargo (estancado)|auf dem ˈtiːfpʊŋkt|L|fin|C2|Die Umsätze blieben den Frühling über auf dem Tiefpunkt.|Las ventas se estancaron toda la primavera.|r=col
auf Messers Schneide|en vilo|auf ˈmɛsɐs ˈʃnaɪ̯də|L|emo|C2|Wir warteten auf Messers Schneide auf das Urteil.|Esperamos en vilo el veredicto.|r=let
zwischen Hammer und Amboss|entre la espada y la pared|tsvɪʃən ˈhamɐ ʊnt ˈambɔs|L|ast|C2|Mieter stehen zwischen Hammer und Amboss.|Los inquilinos están entre la espada y la pared.|r=col
um den heißen Brei herumreden|irse por las ramas|ʊm den ˈhaɪ̯sən bʁaɪ̯ hɛʁʊmˈreːdən|L|cmu|C2|Hör auf, um den heißen Brei herumzureden, und antworte.|Deja de irte por las ramas y responde.|r=col; n=Das deutsche Bild ist die Küche: der heiße Brei.
das Handtuch werfen|tirar la toalla|das ˈhanttuːx ˈvɛʁfn̩|L|spt|C2|Beim fünften Versuch warfen sie das Handtuch.|Tras cinco intentos tiraron la toalla.|r=col
die Nacht durchmachen|quemar el aceite de medianoche|diː naxt dʊʁçˈmaxən|L|stu|C2|Sie machte vor den Klausuren die Nacht durch.|Veló la noche entera antes de los finales.|n=durchmachen ist die deutsche Wendung: «die Nacht durchmachen».
zwischen den Zeilen lesen|leer entre líneas|tsvɪʃən den ˈtsaɪ̯lən ˈleːzən|L|cmu|C2|Lies zwischen den Zeilen des Memos.|Lee entre líneas el memorando.|r=col
Leiche im Keller|un esqueleto en el armario|ˈlaɪ̯çə ɪm ˈkɛlɐ|L|rel|C2|Jede Familie hat eine Leiche im Keller.|Toda familia tiene un esqueleto en el armario.|r=col
weißer Elefant|elefante blanco|vaɪ̯sɐ ˈeːləfant|L|fin|C2|Das Stadion wurde zum weißen Elefanten.|El estadio se volvió un elefante blanco.|r=col; ff=1;n=gleiche Metapher in allen drei Sprachen: das Bild wanderte mit dem Kolonialismus.
in einem Zug|de un plumazo|ɪn aɪ̯nəm tsuːk|L|tmp|C2|Der Deal wurde in einem Zug besiegelt.|El trato se cerró de un plumazo.|r=col; n=in einem Zug: ohne Pause — das Bild ist der Atem.
# ─── C2 · gehobene Substantive (16) ───
Können (Meisterschaft)|pericia (maña)|ˈkœnən|S|ast|C2|Ihr technisches Können ist unerreicht.|Su pericia técnica no tiene rival.|ff=1;n=Können ist auch «poder»: ich kann — das Verb ist die Wurzel.
Fachidiot|opinólogo (estrecho)|fachˈiːdjoːt|S|att|C2|Die Fachidioten sagten ein knappes Finale voraus.|Los analistas vaticinaron un final ajustado.|r=col; n=«Fachidiot» ist scharf: wer nur das Seine kennt.
Dilettant|diletante|dileˈtant|S|art|C2|Er malt wie ein begabter Dilettant.|Pinta como un diletante con talento.|r=for
Rätsel (Conundrum)|conundro (enigma)|ˈrɛːtsl̩|S|ast|C2|Die Rentenreform bleibt ein Rätsel.|La reforma de las pensiones sigue siendo un enigma.|ff=1;n=Rätsel ist auch «adivinanza»: ein Kinderreim ist ein Rätsel.
Morast|atolladero|moˈʁast|S|nat|C2|Das Projekt versank im Morast der Verzögerungen.|El proyecto se hundió en un atolladero de retrasos.|c=bürokratischer Morast; ff=1;n=Morast ist der Sumpf selbst: das Bild ist ländlich.
Quelle (Brunnen)|manantial (fuente)|ˈkvɛlə|S|emo|C2|Neugier ist die Quelle der Wissenschaft.|La curiosidad es el manantial de la ciencia.|ff=1;n=Quelle ist auch «fuente de información»: die Quelle meldet.
Nebelwand|cortina de humo|ˈneːbl̩vant|S|ist|C2|Die Prüfung war eine Nebelwand.|La auditoría fue una cortina de humo.|c=eine Nebelwand aufbauen
Geisteskind|criatura (idea)|ˈgaɪ̯stəskɪnt|S|ast|C2|Das Festival war ihr Geisteskind.|El festival fue criatura suya.|c=das Geisteskind von; n=Geisteskind ist das gehobene Wort: das Kind des Geistes.
 Ableger|vástago (desprendimiento)|ˈablɛɡɐ|S|nat|C2|Das Labor ist ein Ableger der Universität.|El laboratorio es un vástago de la universidad.|ff=1;n=Ableger ist auch «filial»: ein Ableger einer Bank.
Rückgrat|pilar (columna)|ˈʁʏkɡʁaːt|S|fin|C2|Der Tourismus ist das Rückgrat der Insel.|El turismo es el pilar de la isla.|c=das Rückgrat der Wirtschaft; n=Rückgrat ist die Wirbelsäule: das Bild ist anatomisch.
Sicherung|salvaguardia|zɪˈtʃiːʁʊŋ|S|ist|C2|Die Klausel fügt Mietern eine Sicherung hinzu.|La cláusula añade una salvaguardia para inquilinos.|c=als Sicherung; ff=1;n=Sicherung ist auch «fusible»: die Sicherung fliegt.
Nachwirkung|consecuencias (tras el desastre)|ˈnaxvɪʁkʊŋ|S|ist|C2|Der Wiederaufbau dauerte Jahre in der Nachwirkung des Sturms.|Reconstruir llevó años tras el temporal.|n=Nachwirkung ist eigentlich «efecto posterior»: das Beben ist nur eine Art.
Plackerei|trabajo rutinario|plaˈkəʁaɪ̯|S|lav|C2|Die Automatisierung erlöste die Pflege von der Plackerei.|La automatización libró a las enfermeras del trabajo rutinario.|r=col; n=Plackerei ist derb-häuslich: die Wäsche war Plackerei.
Größe|grandeza|ˈɡrøːsə|S|art|C2|Die Größe des Canyons verstummt die Besucher.|La grandeza del cañón enmudece a los visitantes.|ff=1;n=Größe ist auch «talla»: die Größe des T-Shirts.
Hybris|hibris (soberbia)|ˈhybʁɪs|S|let|C2|Die Hybris brachte die Firma zu Fall.|La soberbia tumbó a la empresa.|r=let
Geist der Epoche|espíritu de la época|gaɪ̯st dɛɐ̯ ɛˈpɔçə|L|ast|C2|Der Film traf den Geist der Epoche von 2001.|La película captó el espíritu de 2001.|n=Das deutsche Wort dafür ist «Zeitgeist» — das internationale Lehnwort.
`, "de");
