import { parsePlus } from "./plus-parse";
import type { VocabWord } from "../types";

/* ═══ v9.41 · FR Dictionary PLUS · B1→C2 (niveau explicite) ════════
   Base : lang-fr.ts (556, A1-B1). Ici l'on complète les quatre bandes
   supérieures en français standard. `mot` = français ; `es` = espagnol.
   Registres : soutenu noté r=for, littéraire r=let.                    */

export const FR_PLUS: VocabWord[] = parsePlus(`
# ─── B1 · travail et carrière (18) ───
postuler|presentarse (a un puesto)|pɔstyle|V|lav|B1|Elle a postulé à un poste à Lyon.|Ella se presentó a un puesto en Lyon.|c=postuler à
embaucher|contratar|ɑ̃boʃe|V|lav|B1|Ils ont embauché dix personnes en mai.|Contrataron a diez personas en mayo.
employeur|empleador|ɑ̃plwajœʁ|S|lav|B1|L'employeur paie la formation.|El empleador paga la formación.|ff=1;n=employeur (patrón) ≠ employé (empleado): un accent de trop change tout.
promotion|ascenso|pʁɔmɔsjɔ̃|S|lav|B1|Il a eu une promotion en janvier.|Recibió un ascenso en enero.|ff=1;n=promotion aussi «promoción (marketing)» : même mot, deux mondes.
poste de nuit|turno de noche|pɔst də nɥi|L|lav|B1|Je fais le poste de nuit le lundi.|Hago el turno de noche los lunes.|n=En France on dit aussi «je fais des nuits».
heures supplémentaires|horas extra|œʁ syplemɑ̃taɪʁ|L|lav|B1|Les heures supplémentaires sont payées à 25%.|Las horas extra se pagan al 25%.
diplômé|cualificado|diplome|A|lav|B1|Il est diplômé de l'ENS de Lyon.|Está titulado por la ENS de Lyon.|n=diplômé de + école.
prendre sa retraite|jubilarse|pʁɑ̃dʁə sa ʁətʁɛt|L|lav|B1|Mon grand-père a pris sa retraite à 65 ans.|Mi abuelo se jubiló a los 65 años.
carrière|carrera profesional|kaʁjɛʁ|S|lav|B1|Elle a fait carrière à Paris.|Hizo carrera en París.|ff=1;n=carrière n'est pas «carrera universitaria» (licence).
délai|plazo|dɛle|S|lav|B1|Le délai expire lundi.|El plazo vence el lunes.|c=dans les délais
collègue|colega de trabajo|kɔlɛg|S|lav|B1|Une collègue m'a aidé avec le rapport.|Una colega me ayudó con el informe.
formation|formación|fɔʁmasjɔ̃|S|lav|B1|La formation dure deux semaines.|La formación dura dos semanas.|ff=1;n=formation aussi «formación rocosa» en géologie : même orthographe.
augmentation|aumento de sueldo|oɡmɑ̃tasjɔ̃|S|fin|B1|Il a demandé une augmentation.|Pidió un aumento.
compétence|competencia (habilidad)|kɔpetɑ̃s|S|lav|B1|Coder est une compétence utile.|Programar es una habilidad útil.|ff=1;n=compétence aussi «competencia (jurídica)» : la compétence des tribunaux.
entretien d'embauche|entrevista de trabajo|ɑ̃tʁətjɛ̃ dɑ̃buʃ|L|lav|B1|J'ai un entretien d'embauche demain.|Tengo una entrevista de trabajo mañana.|n=entretien seul veut dire «mantenimiento/entrevista».
expérience|experiencia|ɛkspeʁjɑ̃s|S|lav|B1|Elle a de l'expérience en marketing.|Tiene experiencia en marketing.
à temps partiel|a tiempo parcial|a tɑ̃ paʁtjɛl|L|lav|B1|Il travaille à temps partiel dans un café.|Trabaja a tiempo parcial en una cafetería.|a=à temps plein
à temps plein|a tiempo completo|a tɑ̃ plɛ̃|L|lav|B1|Je cherche un poste à temps plein.|Busco un trabajo a tiempo completo.|a=à temps partiel
au chômage|en paro|o ʃomaʒ|L|lav|B1|Il a été au chômage six mois.|Estuvo en paro seis meses.
locataire|inquilino|lɔkatɛʁ|S|cas|B1|Le locataire paie le loyer le 4.|El inquilino paga la renta el día 4.
# ─── B1 · études (14) ───
licence|título de grado|lisɑ̃s|S|stu|B1|Elle a une licence de chimie.|Tiene un título de química.|ff=1;n=En France, licence = grado (3 ans) ; au Québec et en Espagne, «licenciatura» est autre chose.
matière|asignatura|matjɛʁ|S|stu|B1|Ma matière préférée est l'histoire.|Mi asignatura preferida es la historia.|ff=1;n=matière aussi «materia (physique)» et «sustancia».
semestre|semestre|səmɛstʁ|S|stu|B1|Le semestre se termine en décembre.|El semestre termina en diciembre.
bourse (d'études)|beca|buʁs|S|stu|B1|Il a obtenu une bourse pour Rennes.|Ganó una beca para Rennes.|ff=1;n=bourse : la Bourse (mercado), la bourse (beca) et une bourse (bolso) — trois mondes.
diplôme|título|diplom|S|stu|B1|Son diplôme date de juillet.|Su título es de julio.
cours magistral|clase magistral|kuʁ maʒistʁal|L|stu|B1|Le cours magistral commence à neuf.|La clase magistral empieza a las nueve.
devoir (tarea)|deberes|dəvwaʁ|S|stu|B1|Le devoir est à rendre vendredi.|Los deberes se entregan el viernes.|c=rendre un devoir
recherche|investigación|ʁəʃɛʁʃ|S|sci|B1|Sa recherche porte sur le climat.|Su investigación se centra en el clima.|n=la recherche scientifique ; «recherches» au pluriel = averiguaciones (police).
prendre des notes|tomar apuntes|pʁɑ̃dʁə de not|L|stu|B1|Je prends des notes à chaque cours.|Tomo apuntes en cada clase.
réussir (un examen)|aprobar (un examen)|ʁeysiʁ|V|stu|B1|Il a réussi au permis du premier coup.|Aprobó el examen de conducir al primer intento.|c=réussir à
échouer (un examen)|suspender (un examen)|eʃwe|V|stu|B1|Elle a échoué à l'oral.|Suspendió el oral.|c=échouer à; a=réussir
note|nota|nɔt|S|stu|B1|J'ai eu une bonne note en bio.|Saqué buena nota en biología.|ff=1;n=note aussi «billete» (un billet de 20) et «nota musical».
réviser|repasar|ʁevize|V|stu|B1|J'ai révisé le vocabulaire avant le test.|Repasé el vocabulario antes del examen.
suggestion|sugerencia|syʒɛstjɔ̃|S|cmu|B1|Des suggestions pour le dîner ?|¿Alguna sugerencia para cenar?
# ─── B1 · voyages et argent (12) ───
à l'étranger|en el extranjero|a letʁɑ̃ʒe|L|vig|B1|Elle veut étudier à l'étranger.|Quiere estudiar en el extranjero.
douane|aduana|dwan|S|vig|B1|Nous sommes passés par la douane à Roissy.|Pasamos la aduana en Roissy.
destination|destino|dɛstinasjɔ̃|S|vig|B1|La destination est Marseille.|El destino es Marsella.|ff=1;n=destination aussi «destino (acción de destinar)» : sens administratif.
change (monnaie)|cambio (de dinero)|ʃɑ̃ʒ|S|fin|B1|J'ai fait du change au centre.|Hice cambio de dinero en el centro.|c=bureau de change
monument emblématique|monumento emblemático|mɔnymɑ̃ ɑ̃blamatik|L|cit|B1|La tour Eiffel est emblématique de Paris.|La torre Eiffel es emblemática de París.
visites touristiques|visitas turísticas|vizit tuʁistik|L|vig|B1|Nous avons fait des visites touristiques le matin.|Pasamos la mañana de turismo.
aller-retour|ida y vuelta|aɡlɛ ʁətuʁ|L|tra|B1|Un aller-retour pour Lyon, s'il vous plaît.|Ida y vuelta a Lyon, por favor.|a=aller simple
aller simple|solo ida|aɡlɛ sɛ̃pl|L|tra|B1|J'ai pris un aller simple pour Lille.|Compré un billete de solo ida a Lille.|a=aller-retour
retard|retraso|ʁətaʁ|S|tra|B1|Le train a une heure de retard.|El tren lleva una hora de retraso.|c=être en retard
réserver (chambre)|reservar|ʁɛzɛʁve|V|htl|B1|J'ai réservé pour deux nuits.|Reservé para dos noches.
contre-visite|revisión (médica)|kɔ̃tʁə vizit|L|sla|B1|J'ai une contre-visite mardi.|Tengo una revisión el martes.|n=contre-visite : retour chez le médecin ; «bilan de santé» pour un check-up complet.
# ─── B1 · santé (8) ───
symptôme|síntoma|sɛ̃ptom|S|sla|B1|La fièvre est un symptôme fréquent.|La fiebre es un síntoma común.|p=symptômes
ordonnance|receta|ɔʁdɔnɑ̃s|S|sla|B1|Le médecin m'a fait une ordonnance.|El médico me hizo una receta.|ff=1;n=ordonnance aussi «ordenanza (disposición)» : l'ordonnance de Louis XIV.
traitement|tratamiento|tʁɛtmɑ̃|S|sla|B1|Le traitement dure six semaines.|El tratamiento dura seis semanas.
rétablissement|recuperación|ʁetablisman|S|sla|B1|Son rétablissement a été rapide.|Su recuperación fue rápida.|c=être rétabli
allergie|alergia|a lɛʁʒi|S|sla|B1|Il a une allergie aux fruits secs.|Tiene alergia a los frutos secos.
blessé|herido|blɛse|A|sla|B1|Un joueur blessé est sorti du terrain.|Un jugador herido salió del campo.|ff=1;n=blessé (adj) ; «la blessure» est la herida.
urgences|urgencias|yʁʒɑ̃s|S|sla|B1|On l'a emmené aux urgences.|Lo llevaron a urgencias.|n=«les urgences» toujours au pluriel en France.
antalgique|analgésico|ɑ̃talʒik|S|sla|B1|Prends un antalgique pour le mal de tête.|Tómate un analgésico para el dolor de cabeza.|r=neu
# ─── B1 · opinion et communication (18) ───
avis|opinión|avi|S|cmu|B1|À mon avis, le film est génial.|En mi opinión, la película es genial.|c=à mon avis; n=avis aussi «aviso» (un avis de recherche).
point de vue|punto de vista|pwɛ̃ də vy|L|cmu|B1|Essaie de voir son point de vue.|Intenta ver su punto de vista.
être d'accord|estar de acuerdo|ɛtʁə dakɔʁ|L|cmu|B1|Je suis tout à fait d'accord avec toi.|Estoy completamente de acuerdo contigo.|a=ne pas être d'accord
ne pas être d'accord|no estar de acuerdo|nə pa ɛtʁə dakɔʁ|L|cmu|B1|Nous ne sommes pas d'accord sur la politique.|No estamos de acuerdo sobre la política.|a=être d'accord
suggérer|sugerir|syɡeʁe|V|cmu|B1|Je suggère de prendre le train de sept heures.|Sugiero tomar el tren de las siete.|n=suggérer de + infinitif.
se plaindre|quejarse|sə plɛ̃dʁ|V|cmu|B1|Il s'est plaint du bruit.|Se quejó del ruido.|c=se plaindre de
s'excuser|disculparse|sɛkskyze|V|cmu|B1|Je me suis excusé d'être en retard.|Me disculpé por llegar tarde.|c=s'excuser de
raconter des salades|cotillear|ʁəkɔ̃te de sala|L|cmu|B1|Elles adorent raconter des salades sur les voisins.|Les encanta cotillear sobre los vecinos.|r=col; n=«raconter des salades» : mentir/cotillear ; le colportage est le ragot.
rumeur|rumor|ʁymœʁ|S|cmu|B1|Ce n'est qu'une rumeur, pas une nouvelle.|Es solo un rumor, no es noticia.|c=répandre une rumeur
dispute (querelle)|discusión (pelea)|dispyt|S|rel|B1|Ils ont eu une dispute pour de l'argent.|Tuvieron una discusión por dinero.|ff=1;n=dispute : querelle ; «discussion» est le débat.
débatre|debatir|debatʁ|V|cmu|B1|Débattons du plan demain.|Debatamos el plan mañana.|n=débattre quelque chose, sans préposition.
décrire|describir|dekʁiʁ|V|cmu|B1|Peux-tu décrire le suspect ?|¿Puedes describir al sospechoso?
promettre|prometer|pʁɔmɛtʁ|V|cmu|B1|Je promets de t'appeler ce soir.|Prometo llamarte esta noche.|c=tenir sa promesse
recommander|recomendar|ʁəkɔmɑ̃de|V|cmu|B1|Le serveur a recommandé le cassoulet.|El camarero recomendó el cassoulet.
raison|motivo|ʁɛzɔ̃|S|cmu|B1|La raison est simple : manque de temps.|El motivo es simple: falta de tiempo.|c=pour cette raison
conversation|conversación|kɔ̃vɛʁsasjɔ̃|S|cmu|B1|Nous avons eu une longue conversation.|Tuvimos una larga conversación.
courant (idioma)|con fluidez|kuʁɑ̃|A|stu|B1|Elle est courante en trois langues.|Habla tres idiomas con fluidez.|c=courant en; n=«avoir un bon niveau» est plus naturel que «courant».
# ─── B1 · caractère et émotions (14) ───
fier (de)|orgulloso|fjɛʁ|A|emo|B1|Je suis fier de mes élèves.|Estoy orgulloso de mis alumnos.|c=fier de
déçu|decepcionado|desy|A|emo|B1|Il est déçu par le résultat.|Quedó decepcionado con el resultado.|c=déçu par
inquiet|inquieto|ɛ̃kjɛ|A|emo|B1|Je deviens inquiet avant les examens.|Me pongo inquieto antes de los exámenes.|ff=1;n=inquiet aussi «preocupante» : une situation inquiète.
sûr de soi|seguro de sí mismo|syʁ də swa|L|emo|B1|Elle se sent sûre d'elle à l'entretien.|Se siente segura con la entrevista.
timide|tímido|timid|A|emo|B1|Il est timide avec les inconnus.|Es tímido con desconocidos.
paresseux|perezoso|paʁɛsø|A|emo|B1|Ne sois pas paresseux : fais tes devoirs.|No seas perezoso: haz los deberes.|a=travailleur
travailleur|trabajador|tʁavajœʁ|A|emo|B1|Elle est travailleuse et fiable.|Es trabajadora y fiable.|a=paresseux
honnête|honesto|ɔnɛt|A|emo|B1|Une réponse honnête, s'il vous plaît.|Una respuesta honesta, por favor.|a=dishonnête
malpoli|grosero (mal educado)|malpɔli|A|emo|B1|C'est malpoli de montrer les gens du doigt.|Es de mala educación señalar a la gente.|n=«malpoli» registre courant ; «impoli» plus soutenu.
poli|cortés|pɔli|A|emo|B1|Il est toujours poli avec les clients.|Siempre es cortés con los clientes.|a=malpoli
jaloux|celoso|ʒalu|A|emo|B1|Il devient jaloux facilement.|Se pone celoso con facilidad.
patient|paciente|pasjɑ̃|A|emo|B1|Sois patient avec les enfants.|Ten paciencia con los niños.|a=impatient
têtu|testarudo|tety|A|emo|B1|Mon oncle est très têtu.|Mi tío es muy testarudo.|s=borné
fiable|fiable|fjabl|A|emo|B1|C'est une amie fiable.|Es una amiga fiable.|ff=1;n=fiable aussi «fiable» (juridique) : un témoin fiable.
# ─── B1 · médias et technologie (12) ───
article|artículo|aʁtikl|S|att|B1|J'ai lu un article sur la NASA.|Leí un artículo sobre la NASA.
manchette|titular|mɑ̃ʃɛt|S|att|B1|La manchette a surpris tout le monde.|El titular sorprendió a todos.|n=au Québec on dit «manchette» ; en France, «titre».
diffusion|emisión|difyzjɔ̃|S|att|B1|La diffusion commence à huit heures.|La emisión empieza a las ocho.
chaîne|canal|ʃɛn|S|tec|B1|Change de chaîne, s'il te plaît.|Cambia de canal, por favor.|ff=1;n=chaîne aussi «cadena» (de montagne, de vélo) : polysémie totale.
s'abonner|suscribirse|sabɔne|V|tec|B1|Je m'abonne à deux podcasts.|Me suscribo a dos pódcast.|c=s'abonner à
balado|pódcast|balado|S|tec|B1|Nous écoutons un balado en français.|Escuchamos un pódcast en francés.|n=«balado» est le mot du Québec ; en France, on dit «podcast».
notification|notificación|nɔtifikasjɔ̃|S|tec|B1|J'ai reçu une notification de la banque.|Recibí una notificación del banco.
pièce jointe|adjunto|pjɛs ʒwɛ̃t|L|tec|B1|Envoie la photo en pièce jointe.|Envía la foto como adjunto.|c=en pièce jointe
se connecter|iniciar sesión|sə kɔnɛkte|L|tec|B1|Connecte-toi avec ton nouveau mot de passe.|Inicia sesión con tu nueva contraseña.|a=se déconnecter
s'inscrire|registrarse|sɛ̃skʁiʁ|V|tec|B1|Inscris-toi au cours gratuit.|Regístrate en el curso gratuito.|ff=1;n=s'inscrire aussi «inscribirse en la universidad» et «se inscribir en un registre».
faire suivre|reenviar|fɛʁə sɥivʁ|L|tec|B1|Fais suivre l'invitation à Ana.|Reenvía la invitación a Ana.
mot de passe|contraseña|mo də pas|L|tec|B1|Ne partage jamais ton mot de passe.|Nunca compartas tu contraseña.
# ─── B2 · verbes d'argumentation (20) ───
affirmer|afirmar|afiʁme|V|cnn|B2|L'étude affirme un effet clair.|El estudio afirma un efecto claro.
soutenir|sostener|sutniʁ|V|cnn|B2|Elle a soutenu que les données étaient fausses.|Sostuvo que los datos eran erróneos.|ff=1;n=soutenir aussi «sostener» (physique) : soutenir un poids.
souligner|recalcar|sulɪɲe|V|cnn|B2|Le rapport souligne la sécurité.|El informe recalca la seguridad.
laisser entendre|dar a entender|lɛse ɑ̃tɑ̃dʁ|L|cnn|B2|Tu laisses entendre que je me trompe ?|¿Das a entender que me equivoco ?|r=for
présumer|suponer|pʁezyne|V|cnn|B2|Présumons que le coût est fixe.|Supongamos que el coste es fijo.|ff=1;n=présumer quelqu'un innocent : derecho presunción.
démontrer|demostrar|demɔ̃tʁe|V|sci|B2|Le test a démontré la théorie.|La prueba demostró la teoría.
nier|negar|nie|V|cnn|B2|Il a nié les accusations.|Negó las acusaciones.|c=nier que + subjonctif
admettre|admitir|admɛtʁ|V|cnn|B2|Elle a admis l'erreur.|Admitió el error.|ff=1;n=admettre aussi «dejar entrar» : on admet un élève.
persuader|persuadir|pɛʁsylde|V|cmu|B2|On m'a persuadé de rester.|Me persuadieron para quedarme.|c=persuader quelqu'un de
convaincre|convencer|kɔ̃vɛ̃kʁ|V|cmu|B2|Je l'ai convaincue de réessayer.|La convencí para intentarlo otra vez.|c=convaincre quelqu'un de
révéler|revelar|ʁevelle|V|att|B2|L'article a révélé le plan.|El artículo reveló el plan.
dénoncer|desvelar / denunciar|denɔ̃se|V|att|B2|Le rapport a dénoncé la fraude.|El informe denunció el fraude.|ff=1;n=dénoncer aussi «denunciar a la policía».
exagérer|exagerar|ɛɡzaʒeʁe|V|cmu|B2|N'exagère pas les chiffres.|No exageres las cifras.|a=minimiser
synthétiser|resumir|sɛ̃tezize|V|stu|B2|Synthétise le texte en une ligne.|Resume el texto en una línea.
prévoir|predecir|pʁevwaʁ|V|sci|B2|Personne n'a prévu la crise.|Nadie predijo la crisis.|n=prévoir sans «que» devant un nom : prévoir des problèmes.
estimer|estimar|ɛstime|V|fin|B2|Ils estiment une hausse de 5%.|Estiman una subida del 5%.|ff=1;n=estimer aussi «apreciar» : j'estime beaucoup ce travail.
évaluer|evaluar|evalɥe|V|stu|B2|Le comité a évalué le projet.|El comité evaluó el proyecto.
justifier|justificar|ʒystifie|V|cnn|B2|Comment justifies-tu la dépense ?|¿Cómo justificas el gasto ?
affaiblir|minar (debilitar)|afɛbliʁ|V|cnn|B2|Le scandale a affaibli la confiance.|El escándalo minó la confianza.|s=fragiliser
étayer|respaldar|etaje|V|cnn|B2|Les données étayent la théorie.|Los datos respaldan la teoría.|r=for
# ─── B2 · noms abstraits (26) ───
prise de conscience|conciencia (conocimiento)|pʁiz də kɔ̃sjɑ̃s|L|ast|B2|La campagne a créé une prise de conscience.|La campaña creó conciencia.|ff=1;n=En français : «prise de conscience» ; «conscience» seule est la conscience morale.
impact|impacto|ɛ̃pakt|S|ast|B2|La loi a eu un impact énorme.|La ley tuvo un enorme impacto.|c=avoir un impact sur
tendance|tendencia|tɑ̃dɑ̃s|S|fin|B2|Le télétravail est une tendance croissante.|El teletrabajo es una tendencia al alza.|ff=1;n=tendance aussi «aptitud» : il a tendance à partir tard.
approche|enfoque|apʁɔʃ|S|ast|B2|Il nous faut une nouvelle approche.|Necesitamos un nuevo enfoque.
résultat (issue)|resultado (desenlace)|ʁezylta|S|ast|B2|Le résultat a surpris les instituts.|El resultado sorprendió a los institutos.
avantage|beneficio|avɑ̃taʒ|S|fin|B2|Le plan a des avantages clairs.|El plan tiene claros beneficios.|c=avantage compétitif
inconvénient|inconveniente|ɛ̃kɔ̃venjɑ̃|S|ast|B2|L'inconvénient principal, c'est le prix.|El principal inconveniente es el precio.|a=avantage
exigence|requisito|ɛɡizɑ̃s|S|lav|B2|Le français est une exigence du poste.|El francés es un requisito del puesto.|ff=1;n=exigence aussi «exigencia» (caractère) : ses exigences sont rudes.
norme|estándar|nɔʁm|S|ast|B2|L'hôtel suit des normes élevées.|El hotel sigue estándares altos.|ff=1;n=norme aussi «norma» (sociale) et «norma» (maths).
preuve (evidencia)|pruebas (evidencia)|pʁœv|S|ist|B2|Il y a des preuves solides.|Hay pruebas sólides.|c=faire la preuve de
degré (mesure)|grado / extensión|dəɡʁe|S|ast|B2|En un certain degré, j'abonde.|Hasta cierto punto, estoy de acuerdo.|c=dans une certaine mesure
perspectives|perspectivas|pɛʁspɛktiv|S|fin|B2|Les perspectives d'emploi s'améliorent.|Las perspectivas de empleo mejoran.|n=toujours au pluriel dans ce sens.
inquiétude|preocupación|ɛ̃kjityd|S|emo|B2|La sécurité est notre principale inquiétude.|La seguridad es nuestra principal preocupación.|c=susciter des inquiétudes
apport|aportación|apɔʁ|S|ast|B2|Ton apport a compté.|Tu aportación importó.|c=apport de
réussite|logro|ʁeysit|S|ast|B2|Poser la sonde fut une réussite énorme.|Aterrizar la sonda fue un logro enorme.
limite|limitación|limit|S|ast|B2|L'étude a des limites.|El estudio tiene limitaciones.|a=force
capacité|capacidad|kapasite|S|ast|B2|Le stade a une capacité de 80 000.|El estadio tiene capacidad para 80.000.
contrainte|restricción|kɔ̃tʁɛ̃t|S|ast|B2|Les contraintes budgétaires ont retardé les travaux.|Las restricciones presupuestarias retrasaron las obras.|r=for
biais|sesgo|bia|S|sci|B2|L'échantillon montre un biais net.|La muestra muestra un sesgo claro.|r=tec
stéréotype|estereotipo|steʁeɔtip|S|ast|B2|La pub repose sur de vieux stéréotypes.|El anuncio se apoya en viejos estereotipos.
citoyenneté|ciudadanía|sitwajnəte|S|ist|B2|Elle a demandé la citoyenneté française.|Solicitó la ciudadanía francesa.|c=doubler citoyenneté
pauvreté|pobreza|povʁəte|S|ist|B2|Le programme combat la pauvreté infantile.|El programa combate la pobreza infantil.|c=vivre dans la pauvreté
inégalité|desigualdad|ineɡalite|S|ist|B2|Les inégalités salariales ne cessent de croître.|La desigualdad salarial sigue subiendo.|a=égalité
consommation|consumo|kɔ̃sɔmasjɔ̃|S|fin|B2|La consommation d'énergie a baissé cette année.|El consumo de energía bajó este año.|c=consommation d'énergie
main-d'œuvre|fuerza laboral|mɛ̃dœvʁ|S|fin|B2|La main-d'œuvre est à 100% à distance.|La fuerza laboral es 100% remota.
durabilité|sostenibilidad|dyʁabilite|S|nat|B2|La durabilité guide le projet.|La sostenibilidad guía el proyecto.|r=for
# ─── B2 · expressions idiomatiques (16) ───
un jeu d'enfant|pan comido|œ̃ ʒə dɑ̃fɑ̃|L|sve|B2|L'examen fut un jeu d'enfant.|El examen fue pan comido.|r=col
de temps en temps|de vez en cuando|də tɑ̃ zɑ̃ tɑ̃|L|tmp|B2|Nous sortons de temps en temps.|Salimos fuera de vez en cuando.
exprès|a propósito|ɛkspʁɛ|D|cmu|B2|Il l'a fait exprès.|Lo hizo a propósito.|n=«c'est exprès» registre courant ; «délibérément» soutenu.
par hasard|por casualidad|paʁ azaʁ|L|tmp|B2|Nous nous sommes croisés par hasard à Lisbonne.|Nos encontramos por casualidad en Lisboa.
rester en contact|mantenerse en contacto|ʁɛstʁə ɑ̃ kɔ̃takt|L|rel|B2|Restons en contact après le cours.|Mantengámonos en contacto tras el curso.|a=perdre le contact
sous pression|bajo presión|su pʁɛsjɔ̃|L|emo|B2|Elle travaille bien sous pression.|Trabaja bien bajo presión.
à long terme|a la larga|a lɔ̃ tɛʁm|L|tmp|B2|Épargner maintenant, c'est payer à long terme.|Ahorrar ahora compensa a la larga.|a=à court terme
prendre le temps|tomárselo con calma|pʁɑ̃dʁə lə tɑ̃|L|emo|B2|Prends le temps ce week-end.|Tómatelo con calma este fin de semaine.
aux anges|muy contento|oz ɑ̃ʒ|L|emo|B2|Elle était aux anges après la naissance.|Estaba muy contenta tras el nacimiento.|a=au bord des larmes
coûter les yeux de la tête|costar un ojo de la cara|kute le jø də la tɛt|L|fin|B2|La réparation a coûté les yeux de la tête.|La reparación costó un ojo de la cara.|r=col
briser la glace|romper el hielo|bʁize la ɡlas|L|cmu|B2|Une blague a brisé la glace en réunion.|Un chiste rompió el hielo en la reunión.
une bénédiction déguisée|una bendición disfrazada|yn benɛdisjɔ̃ deɡize|L|ast|B2|Rater ce vol fut une bénédiction déguisée.|Perder aquel vuelo fue una bendición disfrazada.|r=col
une fois pour toutes|de una vez por todas|yn fwa puʁ tut|L|tmp|B2|Réglons cela une fois pour toutes.|Zanjemos esto de una vez por todas.
sorti de nulle part|de la nada|sɔʁti də nyl paʁ|L|tmp|B2|Il m'a appelé, sorti de nulle part.|Me llamó de la nada.|s=tout à coup
tomber d'accord|poner de acuerdo (estar de acuerdo)|tɔ̃be dakɔʁ|L|rel|B2|Nous ne tombons pas d'accord sur l'argent.|No nos ponemos de acuerdo en dinero.|c=tomber d'accord sur
mettre son grain de sel|entrometerse (opinar sin que le pregunten)|mɛtʁə sɔ̃ gʁɛ̃ də sɛl|L|cmu|B2|N'ajoute pas ton grain de sel ici.|No metas tu cuchara aquí.|r=col; n=«mettre son grain de sel» : la image espagnole est «poner su granito de arena» (au sens positif !).
# ─── B2 · connecteurs formels (12) ───
de plus|además (formal)|də ply|L|cnn|B2|Le plan a du retard ; de plus, il coûte cher.|El plan se retrasó; además, cuesta caro.
néanmoins|no obstante|neɑ̃mwɛ̃|D|cnn|B2|Les données sont limitées ; néanmoins, le schéma tient.|Los datos son limitados; no obstante, el patrón se sostiene.|r=for
tandis que|mientras que (contraste)|tɑ̃di kə|C|cnn|B2|Les magasins ont chuté, tandis que l'en ligne a crû.|Las tiendas cayeron, mientras que el online creció.
donc|por lo tanto|dɔ̃k|D|cnn|B2|Le pont est fermé ; donc, prends le tunnel.|El puente está cerrado; por lo tanto, toma el túnel.
en somme|así pues|ɑ̃ sɔm|L|cnn|B2|L'échantillon était petit ; en somme, le constat est provisoire.|La muestra era pequeña; así pues, el hallazgo es provisional.|r=for
pour ma part|por lo que a mí respecta|puʁ ma paʁ|L|cmu|B2|Pour ma part, l'accord est juste.|Por lo que a mí respecta, el trato es justo.|r=for
autrement dit|es decir, en otras palabras|otʁəmɑ̃ di|L|cnn|B2|Autrement dit, on recommence.|Es decir, empezamos de cero.
au contraire|todo lo contrario|o kɔ̃tʁɛʁ|L|cnn|B2|Ce n'était pas dur ; au contraire, c'était amusant.|No fue difícil; todo lo contrario, fue divertido.
de ce fait|como resultado|də sə fɛ|L|cnn|B2|Les pluies ont manqué ; de ce fait, les prix ont grimpé.|Las lluvias fallaron; como resultado, los precios subieron.
sans compter que|sin contar que|sɑ̃ kɔ̃te kə|L|cnn|B2|C'est rapide, sans compter que c'est bon marché.|Es rápido, sin contar que es barato.
en résumé|en resumen|ɑ̃ ʁezyne|L|cnn|B2|En résumé, il nous faut plus de temps.|En resumen, necesitamos más tiempo.|r=for; s=bref
d'autant plus|es más|dotɑ̃ ply|L|cnn|B2|Elle a gagné ; d'autant plus qu'elle a battu le record.|Ganó; es más, batió el récord.
# ─── B2 · droit et société (10) ───
délit mineur|delito menor|deli minœʁ|S|ist|B2|Les délits mineurs entraînent des amendes.|Los delitos menores conllevan multas.
amende|multa|amɑ̃d|S|ist|B2|J'ai eu une amende de stationnement.|Me pusieron una multa de aparcamiento.|ff=1;n=«amende» sans accent circonflexe ; «amende» aussi en Allemagne.
mettre en examen|imputar|mɛtʁə ɑ̃ ɛɡzamɛ̃|L|ist|B2|Il a été mis en examen pour vol.|Lo imputaron por robo.|n=«mise en examen» est le terme juridique français.
jury|jurado|ʒyʁi|S|ist|B2|Le jury est parvenu à un verdict en un jour.|El jurado llegó a un veredicto en un día.|ff=1;n=«le jury» est le panel ; le «jurado» espagnol est la personne.
procès|juicio|pʁɔsɛ|S|ist|B2|Le procès commence en mars.|El juicio empieza en marzo.|ff=1;n=procès aussi «proceso» (le procès de fabrication).
droits humains|derechos humanos|dʁwa ymɛ̃|L|ist|B2|La charte protège les droits humains.|La carta protege los derechos humanos.|c=violation des droits
discrimination|discriminación|diskʁiminasjɔ̃|S|ist|B2|La discrimination au travail est illégale.|La discriminación laboral es ilegal.
manifestation|protesta|manifɛstasjɔ̃|S|ist|B2|Une manifestation a rempli la place.|Una protesta llenó la plaza.|ff=1;n=manifestation aussi «demostración» (manifestation scientifique).
sondage|encuesta|sɔ̃daʒ|S|ist|B2|Le sondage montre une course serrée.|La encuesta muestra un resultado ajustado.
la presse|la prensa|la pʁɛs|L|att|B2|La presse a couvert le lancement.|La prensa cubrió el lanzamiento.|c=liberté de la presse
# ─── B2 · environnement et science (10) ───
changement climatique|cambio climático|ʃɑ̃ʒmɑ̃ klimatik|L|nat|B2|Le changement climatique dicte l'agenda.|El cambio climático marca la agenda.
réchauffement climatique|calentamiento global|ʁeʃofmɑ̃ klimatik|L|nat|B2|Le réchauffement climatique affecte les moissons.|El calentamiento global afecta a las cosechas.
émissions|emisiones|emisjɔ̃|S|nat|B2|La ville a coupé les émissions de 15%.|La ciudad recortó las emisiones un 15%.|c=émissions de carbone
renouvelable|renovable|ʁənuvlabl|A|tec|B2|L'énergie renouvelable est désormais moins chère.|La energía renovable ya es más barata.|c=énergies renouvelables
sécheresse|sequía|seʃɛʁɛs|S|cli|B2|La sécheresse a ruiné la récolte.|La sequía arruinó la cosecha.
inondation|inundación|inɔ̃dasjɔ̃|S|cli|B2|Des inondations ont fermé l'autoroute.|Las inundaciones cerraron la autopista.
extinction|extinción|ɛkstɛ̃ksjɔ̃|S|nat|B2|La loi vise à prévenir l'extinction.|La ley busca evitar la extinción.|c=au bord de l'extinction
espèce|especie|ɛspɛs|S|nat|B2|Le parc protège des espèces endémiques.|El parque protege especies endémicas.
écosystème|ecosistema|ekosistɛm|S|nat|B2|Les loups ont remodelé tout l'écosystème.|Los lobos remodelaron todo el ecosistema.
énergies fossiles|combustibles fósiles|eneʁʒi fɔsil|L|nat|B2|Il faut sortir des énergies fossiles.|Debemos eliminar los combustibles fósiles.|c=sortir des
# ─── B2 · écriture académique (10) ───
dissertation|ensayo (redacción)|disɛʁtasjɔ̃|S|stu|B2|La dissertation est à rendre vendredi.|El ensayo se entrega el viernes.|ff=1;n=La «dissertation» française est l'exercice scolaire par excellence.
brouillon|borrador|bʁujɔ̃|S|stu|B2|Envoie-moi le premier brouillon.|Mándame el primer borrador.
plan (structure)|esquema|plɑ̃|S|stu|B2|Écris un plan avant la dissertation.|Escribe un esquema antes del ensayo.
paraphraser|parafrasear|paʁafʁaze|V|stu|B2|Paraphrase, ne copie pas.|Parafrasea, no copies.
citation (referencia)|cita (referencia)|sitɑ̃sjɔ̃|S|stu|B2|Deux citations par paragraphe.|Dos citas por párrafo.|ff=1;n=citation aussi «citación judicial» et «multa» (une citation à comparaître).
source|fuente|suʁs|S|stu|B2|Vérifie la source originale.|Comprueba la fuente original.|ff=1;n=source aussi «manantial» et «fuente tipográfica».
bibliographie|bibliografía|bibliɔɡʁafi|S|stu|B2|Ajoute la bibliographie à la fin.|Añade la bibliografía al final.|r=for
plagiat|plagio|plaʒja|S|stu|B2|Le plagiat ruine des carrières.|El plagio acaba con carreras.|c=commettre un plagiat
relecture|corrección de pruebas|ʁəlɛkt yʁ|S|stu|B2|Fais une relecture deux fois.|Revisa el resumen dos veces.
revue scientifique|revista científica|ʁəvy sjɑ̃tifik|L|sci|B2|L'étude est paru dans une revue scientifique.|El estudio salió en una revista científica.|ff=1;n=revue aussi «revista de prensa» et «magazine».
# ─── B2 · économie et affaires (14) ───
investissement|inversión|ɛ̃vɛstismɑ̃|S|fin|B2|L'investissement précoce rapporte.|La inversión temprana compensa.|c=faire un investissement
bourse (marché)|bolsa (de valores)|buʁs|S|fin|B2|La bourse a reculé en mars.|La bolsa bajó en marzo.|c=krach boursier
action (bourse)|acción (bursátil)|aksjɔ̃|S|fin|B2|Elle a acheté des actions de la start-up.|Compró acciones de la start-up.|ff=1;n=action aussi «acción (film)» et «obra» : polysémie totale.
bénéfice|beneficio|benɛfis|S|fin|B2|Le bénéfice a grimpé de 8% ce trimestre.|El beneficio subió un 8% este trimestre.|c=marge bénéficiaire; a=perte
chiffre d'affaires|ingresos|ʃifʁ dafɛʁ|S|fin|B2|Le chiffre d'affaires a dépassé les prévisions.|Los ingresos superaron lo previsto.|r=for; n=C'est LE terme des comptes français : sales en anglais.
faillite|quiebra|fajit|S|fin|B2|La chaîne s'est déclarée en faillite.|La cadena se acogió a la quiebra.|c=déposer le bilan
jeune pousse|empresa emergente|ʒœn pus|L|fin|B2|La jeune pousse est passée de deux à cinquante personnes.|La emergente creció de dos a cincuenta personas.|r=col
entrepreneur|emprendedor|ɑ̃tʁəpʁənœʁ|S|pro|B2|L'entrepreneur a ouvert trois boutiques.|El emprendedor abrió tres tiendas.|p=entrepreneurs
négociation|negociación|neɡɔsjasjɔ̃|S|fin|B2|La négociation a duré toute la nuit.|La negociación duró toda la noche.|c=en négociation
marché (trato)|trato|maʁʃe|S|fin|B2|Nous avons conclu le marché lundi.|Cerramos el trato el lunes.|ff=1;n=marché aussi «mercado» et «feria» : un mot, trois mondes.
chaîne d'approvisionnement|cadena de suministro|ʃɛn apʁɔpʁizjɔnmɑ̃|L|fin|B2|La chaîne d'approvisionnement s'est révélée fragile.|La cadena de suministro se mostró frágil.|r=tec
écart salarial|brecha salarial|ekaʁ salaʁjal|L|fin|B2|L'écart salarial s'est resserré lentement.|La brecha salarial se estrechó despacio.
taux d'intérêt|tipo de interés|to dɛ̃tɛʁɛ|L|fin|B2|La BCE a coupé le taux d'intérêt.|El BCE recortó el tipo de interés.|c=hausse des taux
emprunt|préstamo|ɑ̃pʁɔ̃|S|fin|B2|Ils ont pris un emprunt pour la maison.|Pidieron un préstamo para la casa.|c=contracter un emprunt; ff=1;n=emprunt aussi «préstamo bibliotecario» : un emprunt à la médiathèque.
# ─── C1 · académique (16) ───
hypothèse|hipótesis|ipɔtɛz|S|sci|C1|L'expérience a mis l'hypothèse à l'épreuve.|El experimento puso a prueba la hipótesis.
cadre théorique|marco teórico|kadʁ teɔʁik|L|sci|C1|L'étude exige un cadre théorique.|El estudio necesita un marco teórico.
paradigme|paradigma|paʁadigm|S|sci|C1|La découverte a changé de paradigme.|El hallazgo cambió el paradigma.|c=changement de paradigme
méthodologie|metodología|metɔdɔlɔʒi|S|sci|C1|La méthodologie explique l'échantillon.|La metodología explica la muestra.|r=tec
critère|criterio|kʁiteʁ|S|sci|C1|Le critère principal est l'originalité.|El criterio principal es la originalidad.|p=critères
notion|noción|nɔsjɔ̃|S|ast|C1|La notion de vie privée a évolué.|La noción de privacidad ha evolucionado.|c=notion de
prémisse|premisa|pʁemis|S|sci|C1|L'argument repose sur une prémisse fausse.|El argumento se apoya en una premisa falsa.
profond|profundo|pʁɔfɔ̃|A|ast|C1|Le livre m'a profondément marqué.|El libro tuvo un efecto profundo en mí.|a=superficiel
rigoureux|riguroso|ʁiɡuʁø|A|sci|C1|Les tests ont été rigoureux.|Las pruebas fueron rigurosas.|s=méticuleux
exhaustif|completo (exhaustivo)|ɛɡzɔstif|A|sci|C1|Le rapport offre une vue exhaustive.|El informe ofrece una visión exhaustiva.|ff=1;n=épuisant est «agotador» : un faux ami classique.
substantiel|considerable|sybstɑ̃sjɛl|A|fin|C1|Il y a eu une amélioration substantielle.|Hubo una mejora considerable.|s=significatif
empirique|empírico|ɑ̃piʁik|A|sci|C1|Les affirmations exigent un appui empirique.|Las afirmaciones requieren apoyo empírico.|a=théorique
résultats (constats)|resultados (hallazgos)|ʁezylta|S|sci|C1|Les résultats confirment le modèle.|Los hallazgos confirman el modelo.|n=dans ce sens scientifique, le pluriel s'impose.
érudit|erudito|eʁydi|S|stu|C1|Une érudite invitée a donné la conférence.|Una erudita invitada dio la clase.|ff=1;n=érudit aussi «docto» en adjetif : lecture érudite.
colloque|simposio|kɔlɔk|S|stu|C1|Il a parlé à un colloque d'éthique.|Ponenció en un simposio sobre ética.|r=for
développer (detallar)|desarrollar (detallar)|devlɔpe|V|cmu|C1|Peux-tu développer ce point ?|¿Podrías desarrollar ese punto?|c=développer sur
plaider pour|abogar por|plede puʁ|V|ist|C1|Ils plaident pour des règles plus dures.|Abogan por reglas más estrictas.|ff=1;n=plaider aussi «defender ante el tribunal» : l'avocat plaide.
# ─── C1 · journalisme et politique (14) ───
alléguer|alegar (sin probar)|aleɡe|V|att|C1|Le journal allègue un camouflage.|El periódico alega un encubrimiento.|r=for; n=présomption d'innocence : «alléguemment» n'existe pas, on dit «selon».
fuite (filtración)|filtrar|fɥit|S|att|C1|Quelqu'un a provoqué une fuite du mémo.|Alguien filtró el memorando.|c=fuite dans la presse
examen attentif|escrutinio|ɛɡzamɛ̃ atɑ̃tif|L|att|C1|L'accord est passé à l'examen attentif.|El trato quedó bajo escrutinio.|n=littéralement «scrutiny» se traduit : examen minutieux.
divulguer|revelar (oficial)|divylɡe|V|fin|C1|La société doit divulguer ses comptes.|La empresa debe revelar sus ingresos.|r=for
controverse|polémica|kɔ̃tʁovɛʁs|S|att|C1|La fresque a enflammé la controverse.|El mural encendió la polémica.|c=attiser la controverse
groupe de pression|grupo de presión|ɡʁyp də pʁɛsjɔ̃|L|ist|C1|Le groupe de pression agricole a bloqué la loi.|El grupo de presión agrario bloqueó el proyecto.
mandat|mandato|mɑ̃da|S|ist|C1|L'élection lui a donné un mandat clair.|Las elecciones le dieron un mandato claro.|ff=1;n=mandat aussi «encargo» (mandat postal) et «comisión».
référendum|referéndum|ʁefeʁɛ̃dɔm|S|ist|C1|Le référendum est passé à 60%.|El referéndum pasó con el 60%.|p=référendums
sans précédent|sin precedentes|sɑ̃ pʁesesɑ̃|L|att|C1|La tempête fut sans précédent.|La tormenta fue sin precedentes.
impasse|punto muerto|ɛ̃pas|S|ist|C1|Les négociations sont dans l'impasse.|Las conversaciones llegaron a un punto muerto.|ff=1;n=impasse aussi «callejón sin salida» routier.
polarisation|polarización|pɔlaʁizasjɔ̃|S|ist|C1|La polarisation empoisonne le débat.|La polarización envenena el debate.
populisme|populismo|pɔpylism|S|ist|C1|La région a vu monter le populisme.|La región vio un auge del populismo.
redevabilité|rendición de cuentas|ʁədəvabilite|S|ist|C1|Les électeurs exigent de la redevabilité.|Los electores exigen rendición de cuentas.|r=for; n=«redevabilité» est le québécisme officiel ; en France, on dit «responsabilité».
de base (popular)|de base (popular)|də bas|L|ist|C1|Une campagne de base a changé la ville.|Una campaña de base cambió la ciudad.|c=mouvement de base
# ─── C1 · littéraire et style (16) ───
saisissant|vívido (impactante)|sɛsisɑ̃|A|let|C1|Le roman peint un portrait saisissant du Havre.|La novela retrata El Havre con viveza.|c=souvenir saisissant
poignant|conmovedor|pwaɲɑ̃|A|let|C1|La fin est poignante sans être gniangnian.|El final es conmovedor sin ser sensiblero.|ff=1;n=poignant aussi «punzante» (douleur poignante).
subtil|sutil|sytil|A|let|C1|Le changement est subtil mais réel.|El cambio es sutil pero real.
irrésistible (que atrapa)|irresistible (que atrapa)|iʁezistibl|A|cin|C1|Un plaidoyer irrésistible pour la réforme.|Un argumento irrefutable a favor de la reforma.
évoquer|evocar|evɔke|V|let|C1|L'odeur évoque la cuisine de ma grand-mère.|El olor evoca la cocina de mi abuela.|c=évoquer des souvenirs
dépeindre|retratar|depɛ̃dʁ|V|art|C1|La fresque dépeint la marche de 1968.|El mural retrata la marcha de 1968.|ff=1;n=dépeindre la famille : «pintar de cuerpo entero».
nuancé|matizado|nɥɑ̃se|A|let|C1|Une réponse nuancée, pas un slogan.|Una respuesta matizada, no una consigna.
mélancolie|melancolía|melɑ̃kɔli|S|emo|C1|Une mélancolie traverse le film.|Una melancolía atraviesa la película.|r=let
éloquent|elocuente|elɔkɑ̃|A|let|C1|Son silence fut plus éloquent que des mots.|Su silencio fue más elocuente que las palabras.
 spirituel|ingenioso|spiʁityɛl|A|let|C1|Le discours fut spirituel et mordant.|El discurso fue ingenioso y mordaz.|ff=1;n=spirituel aussi «espiritual» : la vie spirituelle.
romanesque|novelesco|ʁɔmɑnɛsk|A|let|C1|Une vie romanesque, digne d'un feuilleton.|Una vida novelesca digna de serial.|n=«romanesque» : propre au roman ; ne pas confondre avec «romantique».
narrateur|narrador|naʁatœʁ|S|let|C1|Le narrateur est peu fiable.|El narrador es poco fiable.|c=narrateur non fiable
métaphore|metáfora|metafɔʁ|S|let|C1|Le poème fait du fleuve une métaphore.|El poema convierte el río en metáfora.
prose|prosa|pʁoz|S|let|C1|Elle écrit une prose d'une grande limpidité.|Escribe prosa de gran limpieza.|c=poème en prose
anthologie|antología|ɑ̃tɔlɔʒi|S|let|C1|L'anthologie réunit quarante poètes.|La antología reúne a cuarenta poetas.|r=for
haletant (que atrapa)|absorbente (que atrapa)|alɑ̃tɑ̃|A|cin|C1|Un thriller haletant situé à Lisbonne.|Un thriller absorbente ambientado en Lisboa.|ff=1;n=haletant littéralement «jadeante» : un récit haletant te laisse sans souffle.
# ─── C1 · connecteurs et précision (12) ───
nonobstant|no obstante (con sustantivo)|nɔnɔbstɑ̃|P|cnn|C1|Nonobstant le coût, le plan a continué.|No obstante el coste, el plan siguió.|r=for
quoi qu'il en soit|aunque (formal)|kwa kil ɑ̃swa|L|cnn|C1|Une victoire discrète, quoi qu'il en soit importante.|Una victoria discreta, aunque importante.|n=littéraire ; en registre courant : «en tout cas».
d'où|de ahí que|du|D|cnn|C1|L'échantillon était biaisé ; d'où la prudence.|La muestra estaba sesgada; de ahí la cautela.|r=for
en tant que|en la medida en que|ɑ̃ tɑ̃ kə|L|cnn|C1|Cela fonctionne en tant que les données sont complètes.|Funciona en la medida en que los datos estén completos.|n=«en tant que» signifie aussi «en calidad de» : en tant que directeur.
quant à|con respecto a|kɑ̃ta|L|cnn|C1|Quant à votre lettre, nous sommes d'accord.|Con respecto a su carta, estamos de acuerdo.|r=for
avant (formal)|con anterioridad a|avɑ̃|P|tmp|C1|Avant la fusion, les deux firmes étaient petites.|Antes de la fusión, ambas eran pequeñas.|r=for
dans l'ensemble|en general|dɑ̃ lɑ̃sɑ̃bl|L|cnn|C1|Dans l'ensemble, les critiques ont été justes.|En general, las críticas fueron justas.
a fortiori|ni siquiera|a fɔʁtjɔʁi|L|cnn|C1|Il ne marche pas, a fortiori il ne court pas.|No camina, ni siquiera corre.|r=for; n=latinisme : «con mayor razón».
pour ainsi dire|más bien (si acaso)|puʁ ɛ̃si diʁ|L|cnn|C1|Pour ainsi dire, les prix ont chuté plus vite.|Si acaso, los precios cayeron más rápido.|r=for
à première vue|a primera vista|a pʁɛmjɛʁ vy|L|cnn|C1|À première vue, elles paraissent identiques.|A primera vista, parecen idénticas.
avec le recul|con perspectiva|avɛk lə ʁəkyl|L|tmp|C1|Avec le recul, le signal était clair.|Con perspectiva, la señal era clara.|s=en y repensant
à ce jour|hasta ahora (negativo)|a sə ʒuʁ|L|tmp|C1|Pas de réponse, à ce jour.|Aún no hay respuesta.|r=for
# ─── C1 · émotions et psyché (10) ───
appréhensif|aprensivo|apʁeɑ̃sif|A|emo|C1|J'étais appréhensif avant les résultats.|Me sentía aprensivo antes de los resultados.|c=appréhensif devant
ressentiment|resentimiento|ʁəsɑ̃timɑ̃|S|emo|C1|De vieux ressentiments ont affleuré au dîner.|Viejos resentimientos afloraron en la cena.
nostalgie|nostalgia|nɔstalʒi|S|emo|C1|La chanson est une pure nostalgie.|La canción es pura nostalgia.
affection|cariño|afɛksjɔ̃|S|emo|C1|Elle témoigne son affection par petits gestes.|Muestra cariño en pequeños gestos.|c=porter de l'affection à
malaise|desazón|malɛz|S|emo|C1|Un malaise s'est installé dans la salle.|Una desazón se instaló en la sala.|ff=1;n=malaise aussi «mareo» : il a eu un malaise.
mépris|desprecio|mepʁi|S|emo|C1|Il a traité l'accusation avec mépris.|Trató la acusación con desprecio.|c=au mépris de (a despecho de)
admiration (reverencia)|asombro (reverencia)|admiʁasjɔ̃|S|emo|C1|Le canyon remplit les visiteurs d'admiration.|El cañón llena de asombro a los visitantes.|c=en admiration devant
désenchantement|desencanto|dezɑ̃ʃɑ̃tmɑ̃|S|emo|C1|Les électeurs parlent de désenchantement.|Los electores hablaron de desencanto.|r=for
empathie|empatía|ɑ̃pati|S|emo|C1|Le livre enseigne l'empathie aux enfants.|El libro enseña empatía a los niños.|a=compassion
# ─── C1 · registre formel et affaires (12) ───
entreprise (empeño)|empeño (empresa)|ɑ̃tʁəpʁiz|S|ast|C1|Une entreprise digne, quitte à être risquée.|Un empeño loable, aunque arriesgado.|ff=1;n=entreprise est d'abord la société ; l'effort est «l'entrepreneur» au sens vieilli.
provisoire|provisional|pʁɔvizwaʁ|A|fin|C1|Ce sont des chiffres provisoires.|Son cifras provisionales.|s=tentatif
strict|estricto|stʁikt|A|ist|C1|Le labo suit des protocoles stricts.|El laboratorio sigue protocolos estrictos.|c=règles strictes
imminent|próximo (inminente)|iminɑ̃|A|tmp|C1|Des précisions seront données sous peu.|Los detalles se harán públicos pronto.|ff=1;n=imminent au sens strict : «que va survenir très vite».
commencer (formal)|comenzar (formal)|kɔmɑ̃se|V|fin|C1|La cérémonie débute à midi.|La ceremonia comienza al mediodía.|r=for; s=débuter
mettre fin à|dar por terminado|mɛtʁə fɛ̃a|L|fin|C1|Le contrat prend fin en juin.|El contrato termina en junio.|r=for
mettre en œuvre|poner en marcha|mɛtʁə ɑ̃n‿œvʁ|L|fin|C1|La ville a mis le plan en œuvre en mai.|La ciudad puso el plan en marcha en mayo.|c=mise en œuvre
faciliter|facilitar|fasilite|V|lav|C1|L'app facilite la relecture par les pairs.|La app facilita la revisión por pares.|r=for
fluidifier|agilizar|flɥidifie|V|fin|C1|Ils ont fluidifié la demande.|Agilizaron la solicitud.|r=for
incitation fiscale|incentivo fiscal|ɛ̃sitɑ̃sjɔ̃ fiskal|L|fin|C1|Les incitations fiscales attirent les tournages.|Los incentivos fiscales atraen rodajes.
référence (étalon)|referencia (estándar)|ʁefeʁɑ̃s|S|fin|C1|L'indice fixe une référence mondiale.|El índice fija una referencia mundial.|r=tec; c=faire référence
acquisition|adquisición|akɛzisjɔ̃|S|fin|C1|L'acquisition s'est close en octobre.|La adquisición se cerró en octubre.|c=fusions-acquisitions
# ─── C1 · science et transformation (14) ───
jalon|hito|ʒalɔ̃|S|sci|C1|L'alunissage fut un jalon pour l'agence.|El aterrizaje fue un hito para la agencia.|c=franchir un jalon
percée|avance (descubrimiento)|pɛʁse|S|sci|C1|Une percée dans la chimie des batteries.|Un avance en la química de baterías.|c=percée majeure
réseau neuronal|red neuronal|ʁezo nyʁɔnal|L|tec|C1|Le modèle est un réseau neuronal à 70 milliards de paramètres.|El modelo es una red neuronal de 70.000 millones de parámetros.|r=tec
algorithme|algoritmo|algɔʁitm|S|tec|C1|L'algorithme classe les résultats.|El algoritmo ordena los resultados.|r=tec
génome|genoma|ʒenom|S|sci|C1|Le génome du riz a été séquencé en 2002.|El genoma del arroz se secuenció en 2002.|r=tec
prévaloir|imponerse|pʁevalwaʁ|V|ist|C1|Le bon sens a prévalu à la fin.|El sentido común se impuso al final.|c=prévaloir sur
dévoiler|presentar al público|devwale|V|att|C1|L'équipe a dévoilé le prototype.|El equipo presentó el prototipo.|ff=1;n=dévoiler un mystère : «desvelar un misterio».
redéfinir|redefinir|ʁedefiniʁ|V|ast|C1|Le téléphone a redéfini la photographie.|El teléfono redefinió la fotografía.
se soumettre à|someterse a|sə sumɛtʁə a|V|sla|C1|L'immeuble a subi une rénovation.|El edificio se sometió a renovación.|n=subir aussi «soportar» : subir une épreuve.
englober|abarcar|ɑ̃ɡlɔbe|V|ast|C1|Le cours englobe grammaire et culture.|El curso abarca gramática y cultura.|s=inclure
ressembler à|parecerse a|ʁəsɑ̃blə a|V|fam|C1|Elle ressemble à sa grand-mère.|Se parece a su abuela.|c=ressembler en
entraîner|conllevar|ɑ̃tʁene|V|fin|C1|Le poste entraîne des voyages.|El puesto conlleva viajes.|ff=1;n=entraîner aussi «entrenar» : entraîner une équipe.
attribuer|atribuir|atʁibɥe|V|sci|C1|Ils attribuent la baisse au sport.|Atribuyen la mejora al ejercicio.|c=attribuer à
se dérouler|desarrollarse|sə deʁule|V|att|C1|Le drame s'est déroulé en trois jours.|El drama se desarrolló en tres días.
# ─── C2 · adjectifs rares et littéraires (16) ───
quintessencié|por antonomasia|kɛ̃tɑ̃sɑ̃sje|A|let|C2|Le café quintessencié du Marais.|El café por antonomasia del Marais.|n=usage rare ; on dit surtout «par excellence».
insaisissable|esquivo|ɛ̃sɛzisabl|A|ast|C2|Le succès est resté insaisissable.|El éxito se mostró esquivo al equipo.|ff=1;n=insaisissable : qu'on ne peut saisir ; «fuyant» est plus courant.
ineffable|inefable|inɛfabl|A|let|C2|Une tristesse ineffable traverse le livre.|Una tristeza inefable recorre el libro.|r=let
sérendipité|serendipia|seʁɛ̃dipite|S|ast|C2|Ils se sont rencontrés par pure sérendipité.|Se conocieron por pura serendipia.|r=neu
ésotérique|esotérico|ezoteʁik|A|ast|C2|Le cours dérive en détail ésotérique.|La clase deriva en detalle esotérico.|a=accessible
 labyrinthique|laberíntico|labiʁintik|A|let|C2|L'intrigue est délibérément labyrinthique.|La trama es deliberadamente laberíntica.|r=let
rétif|recalcitrante|ʁetif|A|emo|C2|Un comité rétif a bloqué la réforme.|Un comité recalcitrante bloqueó la reforma.|r=for; n=«rétif» vient du cheval : rétif comme un mulet.
sardonique|sardónico|saʁdɔnik|A|let|C2|Il a répondu d'un sourire sardonique.|Respondió con una sonrisa sardónica.
laconique|lacónico|lakɔnik|A|let|C2|Sa réplique laconique les a déstabilisés.|Su lacónica réplica los descolocó.|r=let
expéditif|rutinario (desganado)|ɛkspeditif|A|lav|C2|L'inspection fut expéditive au mieux.|La inspección fue desganada como poco.|r=for
omniprésent|omnipresente|ɔ̃nipʁezɑ̃|A|tec|C2|Les téléphones sont désormais omniprésents.|Los teléfonos ya son omnipresentes.
évanescent|evanescente|evanɛsɑ̃|A|let|C2|Le brouillard donne au port une lumière évanescente.|La niebla da al puerto una luz evanescente.|r=let
irisé|iridiscente|iʁize|A|nat|C2|Un colibri irisé voltigeait près de la fenêtre.|Un colibrí iridiscente revoloteaba en la ventana.|ff=1;n=irisé aussi «colorido por dentro» (un verre irisé).
lugubre|lúgubre|lyɡybʁ|A|let|C2|L'orgue prêta à la scène un air lugubre.|El órgano dio a la escena un aire lúgubre.|r=let
quotidien|cotidiano|kɔtidjɛ̃|A|let|C2|Le roman célèbre le quotidien.|La novela celebra lo cotidiano.|r=let; n=adjectif et nom : le quotidien, c'est la vie de tous les jours.
débonnaire|desdichado (bonhomme)|debɔnɛʁ|A|let|C2|Le voyageur débonnaire a manqué tous ses vols.|El desdichado viajero perdió todos los vuelos.|r=let; n=débonnaire : «de buen talante» — le sens espagnol «desdichado» n'a pas d'équivalent direct.
# ─── C2 · verbes soutenus (16) ───
embrouiller|ofuscar|ɑ̃bʁuje|V|tec|C2|Le jargon n'embrouille que le message.|La jerga solo ofusca el mensaje.|n=«obscurcir» est le soutenu exact : la nuance est de registre.
épouser (une cause)|abrazar (una causa)|epuze|V|ist|C2|L'article épouse la science ouverte.|El artículo abrazó la ciencia abierta.|ff=1;n=épouser quelqu'un : casarse — le sens figuré est du registre élevé.
promulguer|promulgar|pʁɔmylɡe|V|ist|C2|L'agence a promulgué la règle en mai.|La agencia promulgó la norma en mayo.|r=for
extrapoler|extrapolar|ɛkstʁapɔle|V|sci|C2|N'extrapole pas à partir d'une seule saison.|No extrapoles a partir de una sola temporada.|c=extrapoler à partir de
rendre inutile|hacer innecesario|ʁɑ̃dʁə inytil|L|ast|C2|Le nouveau pont rend le bac inutile.|El nuevo puente hace innecesario el ferry.|r=for
aliéner|distanciar|aljene|V|rel|C2|Le silence a aliéné les deux frères.|El silencio distanció a los dos hermanos.|r=for; n=aliéner aussi «enajenar» (droit) : aliéner un bien.
réhabiliter|reivindicar (dar la razón)|ʁeabilite|V|ist|C2|Le temps a réhabilité l'ingénieur têtu.|El tiempo dio la razón al terco ingeniero.|n=réhabiliter aussi «rehabilitar» un bâtiment.
engendrer|engendrar|ɑ̃ʒɑ̃dʁe|V|ast|C2|La confiance engendre la loyauté.|La confianza engendra lealtad.|r=for
galvaniser|galvanizar|galvanize|V|ist|C2|Le discours a galvanisé les bénévoles.|El discurso galvanizó a los voluntaires.|c=galvaniser en action
ruminer|rumiar|ʁymin|V|emo|C2|Il a ruminé l'offre toute la nuit.|Rumió la oferta toda la noche.|ff=1;n=ruminer, c'est ce que fait la vache ; «rabâcher» est ruminer des mots.
pontifier|pontificar|pɔ̃tifie|V|cmu|C2|Il a pontifié sur le vin pendant une heure.|Pontificó sobre el vino durante una hora.|r=col
encenser|ensalzar|ɑ̃sɑ̃se|V|att|C2|La presse a encensé le jeune chef.|La prensa ensalzó al joven chef.|ff=1;n=encenser brûler de l'encens : la métaphore est liturgique.
démanteler (criticar)|despedazar (criticar)|demɑ̃tle|V|att|C2|La chronique a démantelé la chaîne.|La columna despedazó a la cadena.|ff=1;n=démanteler un réseau : «desmantelar una red».
tirer à boulets rouges|despotricar contra|tiʁe a bule ʁuʒ|L|cmu|C2|Il a tiré à boulets rouges sur l'impôt pendant des semaines.|Despotricó contra el impuesto durante semanas.|r=let
glaner|ir recogiendo (desentrañar)|ɡlane|V|sci|C2|Les historiens glanent des faits dans les rôles d'impôt.|Los historiadores desentrañan datos de los padrones.|c=glaner dans
se soustraire à|rehuir|sə sustʁɛʁə a|V|let|C2|L'essai se soustrait au terme technique.|El ensayo rehúye el tecnicismo.|r=for
# ─── C2 · tournures relevées (16) ───
inadmissible (hors des normes)|inaceptable (fuera de toda norma)|inadmisibl|L|cnn|C2|La plaisanterie fut tout simplement inadmissible.|La broma fue, sencillamente, inaceptable.|r=for
ne pas réveiller le chien qui dort|no revolver el asunto|nə pa ʁeveje lə ʃɛ̃ ki dɔʁ|L|cmu|C2|Mieux vaut ne pas réveiller le chien qui dort avec ce client.|Mejor no revolver el asunto con ese cliente.|r=col
une tempête dans un verre d'eau|una tormenta en un vaso de agua|yn tɑ̃pɛt dɑ̃ ɛ̃ vɛʁ do|L|ast|C2|La querelle fut une tempête dans un verre d'eau.|La pelea fue una tormenta en un vaso de agua.|r=col
la cerise sur le gâteau|la guinda del pastel|la səʁiz syʁ lə ɡato|L|sve|C2|La prime fut la cerise sur le gâteau.|El bono fue la guinda del pastel.|r=col
victoire à la Pyrrhus|una victoria pírrica|viktwaʁa la piʁys|L|ist|C2|La victoire se révéla à la Pyrrhus.|La victoria resultó pírrica.|r=let; n=«à la Pyrrhus» est la tournure classique ; «pyrrhique» est rare.
à un degré excessif|en exceso (por defecto)|a œ̃ dəɡʁe ɛksɛsif|L|emo|C2|Il est généreux à un degré excessif.|Es generoso en exceso.|r=neu
en sommeil|en letargo (estancado)|ɑ̃ sɔmɛj|L|fin|C2|Les ventes sont restées en sommeil tout le printemps.|Las ventas se estancaron toda la primavera.|r=col
dans l'expectative|en vilo|dɑ̃ lɛkspektativ|L|emo|C2|Nous avons attendu dans l'expectative du verdict.|Esperamos en vilo el veredicto.|r=for
entre le marteau et l'enclume|entre la espada y la pared|ɑ̃tʁə lə maʁtɔ e lɑ̃klym|L|ast|C2|Les locataires sont entre le marteau et l'enclume.|Los inquilinos están entre la espada y la pared.|r=col
tourner autour du pot|irse por las ramas|tuʁne ɔtuʁ dy pɔ|L|cmu|C2|Cesse de tourner autour du pot et réponds.|Deja de irte por las ramas y responde.|r=col
jeter l'éponge|tirar la toalla|ʒəte lepɔ̃ʒ|L|spt|C2|À la cinquième tentative, ils ont jeté l'éponge.|Tras cinco intentos tiraron la toalla.|r=col; n=l'image française est la boxe : l'éponge du coin.
veiller tard|quemar el aceite de medianoche|vɛje taʁ|L|stu|C2|Elle a veillé tard avant les partiels.|Veló la noche entera antes de los finales.|n=«veiller tard» est neutre ; l'image espagnole du aceite n'existe pas en français.
lire entre les lignes|leer entre líneas|liʁ ɑ̃tʁə le liɲ|L|cmu|C2|Lis entre les lignes du mémo.|Lee entre líneas el memorando.|r=col
squelette dans le placard|un esqueleto en el armario|skɛlɛt dɑ̃ lə plakaʁ|L|rel|C2|Toute famille a un squelette dans le placard.|Toda familia tiene un esqueleto en el armario.|r=col
en une seule phrase|de un plumazo|ɑ̃ yn sœl fʁaz|L|tmp|C2|L'affaire s'est close en une seule phrase.|El trato se cerró de un plumazo.|r=let
# ─── C2 · noms soutenus (16) ───
épitomé (encarnación)|epítome (encarnación)|epitɔme|S|let|C2|Elle est l'épitomé du calme.|Es la encarnación de la calma.|c=l'épitomé de; n=en français courant on dit «l'incarnation».
prouesse|pericia (maña)|pʁuwɛs|S|ast|C2|Sa prouesse technique n'a pas de rivale.|Su pericia técnica no tiene rival.|c=prouesse technique
champion d'opinion|analista (opinólogo)|ʃɑ̃pjɔ̃ dopinyɔ̃|S|att|C2|Les champions d'opinion ont prédit un final serré.|Los analistas vaticinaron un final ajustado.|r=neu; n=calque libre ; en France on dit «éditorialistes».
dilettante|diletante|diletɑ̃t|S|art|C2|Il peint comme un dilettante doué.|Pinta como un diletante con talento.|r=for
énigme (conundro)|conundro (enigma)|eniɡm|S|ast|C2|La réforme des retraites reste une énigme.|La reforma de las pensiones sigue siendo un enigma.|r=neu
bourbier|atolladero|buʁbje|S|nat|C2|Le projet s'est enlisé dans un bourbier de retards.|El proyecto se hundió en un atolladero de retrasos.|c=bourbier bureaucratique; ff=1;n=bourbier aussi «ciénaga» : le sens physique.
fontaine (source figurée)|manantial (fuente)|fɔ̃tɛn|S|emo|C2|La curiosité est la fontaine des sciences.|La curiosidad es el manantial de la ciencia.|r=let; ff=1;n=fontaine est la «fuente» d'eau ; le sens figuré soutenu est «source».
écran de fumée|cortina de humo|ekʁɑ̃ də fɥme|S|ist|C2|L'audit fut un écran de fumée.|La auditoría fue una cortina de humo.|c=monter un écran de fumée
enfant (idée)|criatura (idea)|ɑ̃fɑ̃|S|ast|C2|Le festival fut son enfant.|El festival fue criatura suya.|c=l'enfant de; n=au figuré : «l'enfant de quelqu'un» — l'œuvre est l'enfant.
rejeton|vástago (desprendimiento)|ʁəʒətɔ̃|S|nat|C2|Le laboratoire est un rejeton de l'université.|El laboratorio es un vástago de la universidad.|r=let
pilier|pilar (columna)|pilje|S|fin|C2|Le tourisme est le pilier de l'île.|El turismo es el pilar de la isla.|c=pilier de l'économie
sauvegarde|salvaguardia|sovɡaʁd|S|ist|C2|La clause ajoute une sauvegarde aux locataires.|La cláusula añade una salvaguardia para inquilinos.|c=en guise de sauvegarde
grandeur|grandeza|ɡʁɑ̃dœʁ|S|art|C2|La grandeur du canyon fait taire les visiteurs.|La grandeza del cañón enmudece a los visitantes.|r=let
hybris|hibris (soberbia)|ibʁis|S|let|C2|L'hybris a couché l'entreprise.|La soberbia tumbó a la empresa.|r=let
fléau (nemesis)|némesis|fleˈo|S|let|C2|Le jeune buteur est devenu le fléau du champion.|El joven delantero se volvió la némesis del campeón.|ff=1;n=fléau est d'abord «plaga» : les fléaux de l'Égypte.
force irrésistible (juggernaut)|fuerza imparable|fɔʁs iʁezistibl|L|fin|C2|La chaîne est devenue une force irrésistible.|La cadena se volvió una fuerza imparable.|r=neu
parangon|dechado (modelo)|paʁɑ̃ɡɔ̃|S|let|C2|Elle est un parangon de ponctualité.|Es un dechado de puntualidad.|c=un parangon de; r=for; n=«parangon» est rare en français courant : «modèle du genre».
`, "fr");
