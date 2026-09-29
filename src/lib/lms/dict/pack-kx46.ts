import { parsePack } from "./compact";
import type { VocabWord } from "../types";

/* ── Pack K·X46 · scuola e università: espressioni (B1) ──────────── */

export const PACK_KX46: VocabWord[] = parsePack(`
# ══ scuola ══
andare a scuola|ir al colegio|anˈdare a ˈʃʃwola|E|stu|2|I bambini vanno a scuola a piedi.|Los niños van al colegio a pie.
fare i compiti|hacer los deberes|fare i komˈpiti|E|stu|2|Faccio i compiti dopo la merenda.|Hago los deberes tras la merienda.
interrogazione (scuola)|interrogación de clase|interroɡaˈtsjone|S|stu|3|L'interrogazione di latino programmata.|La interrogación de latín programada.|g=f;p=interrogazioni
interrogare alla lavagna|interrogar en la pizarra|interroˈɡare alla ˈlaʋaɲɲa|E|stu|4|La prof l'ha interrogata alla lavagna.|La profe la ha interrogado en la pizarra.
lavagna (scuola)|pizarra|laˈvaɲɲa|S|stu|3|Scrivi la data alla lavagna.|Escribe la fecha en la pizarra.|g=f;p=lavagne
gessetto|tiza|dʒezˈzɛt to|S|stu|4|Un gessetto bianco per la lavagna.|Una tiza blanca para la pizarra.|g=m;p=gessetti
registro (di classe)|registro (de clase)|reˈdʒistro|S|stu|3|Il registro elettronico sul tablet.|El registro electrónico en la tableta.|g=m;p=registri
giustificare un'assenza|justificar una falta|dʒustifiˈkare unasˈsentsa|E|stu|4|Devo giustificare l'assenza di ieri.|Debo justificar la falta de ayer.
assenza ingiustificata|falta injustificada|asˈsentsa indʒustifiˈkaːta|L|stu|4|Tre assenze ingiustificate segnalate.|Tres faltas injustificadas señaladas.
bigliettino|chuleta|biʎʎetˈtiːno|S|stu|5|Un bigliettino nascosto sotto il banco.|Una chuleta escondida bajo el pupitre.|g=m;p=bigliettini;r=col
copiare (compito)|copiar|koˈpjaːre|V|stu|3|Ha copiato la versione dal compagno.|Ha copiado la traducción del compañero.
scopiazzare|plagiar|kopjatˈtsaːre|V|stu|5|Scopiazzava interi paragrafi da Wikipedia.|Plagiaba párrafos enteros de Wikipedia.|r=col
prendere un brutto voto|sacar mala nota|ˈprɛndere un ˈbrutto ˈvoːto|E|stu|3|Ho preso un brutto voto in ginnastica.|He sacado una mala nota en gimnasia.
prendere un buon voto|sacar buena nota|ˈprɛndere un ˈbwɔn ˈvoːto|E|stu|3|Ha preso un buon voto in condotta.|Ha sacado buena nota en conducta.
voto di condotta|nota de conducta|ˈvoːto di konˈdɔtta|L|stu|4|Il voto di condotta nel registro.|La nota de conducta en el registro.
essere promosso|ser aprobado|ˈɛssere promoˈsso|E|stu|3|È stato promosso con 27 centesimi.|Ha sido aprobado con 27 centésimas.
essere bocciato|suspender (repetir)|ˈɛssere botˈtʃaːto|E|stu|3|È stato bocciato in terza media.|Ha suspendido en tercio de secundaria.
quadrimestre|cuatrimestre|kwadriˈmɛstre|S|stu|4|Il voto di quadrimestre di italiano.|La nota de cuatrimestre de italiano.|g=m;p=quadrimestri
trimestre|trimestre|triˈmɛstre|S|stu|4|Il trimestre si chiude a Natale.|El trimestre se cierra en Navidad.|g=m;p=trimestri
sciopero (scuola)|huelga (clases)|ˈʃʃɔːpero|S|ist|3|Lo sciopero degli insegnanti di venerdì.|La huelga de los profesores del viernes.|g=m;p=scioperi
assemblea studentesca|asamblea estudiantil|asseˈmblea stuˈdenteˈska|L|stu|4|L'assemblea studentesca in aula magna.|La asamblea estudiantil en el aula magna.
rappresentante di classe|delegado de clase|rapprezenˈtante di ˈklasse|L|stu|4|Il rappresentante di classe eletto.|El delegado de clase elegido.
gita scolastica|excursión escolar|ˈdʒita skolasˈtika|L|stu|4|La gita scolastica a Pompei.|La excursión escolar a Pompeya.
andare in gita|ir de excursión|anˈdare in ˈdʒita|E|stu|3|Vanno in gita al museo etrusco.|Van de excursión al museo etrusco.
ricreazione|recreo|rikreaˈtsjone|S|stu|3|Dieci minuti di ricreazione in cortile.|Diez minutos de recreo en el patio.|g=f;p=ricreazioni
cortile della scuola|patio del colegio|kortile della ˈʃʃwola|L|stu|4|Il cortile della scuola pieno di biciclette.|El patio del colegio lleno de bicicletas.
ora di buco|hora libre|hɔːra di buˈko|L|stu|5|La prof è malata: ora di buco.|La profe está enferma: hora libre.|r=col
# ══ università ══
iscriversi all'università|matricularse en la universidad|iskriˈversi alluniversiˈta|E|stu|3|Mi iscrivo all'università a settembre.|Me matriculo en la universidad en septiembre.
facoltà di lettere|facultad de letras|faˈkɔlta di letˈtre|L|stu|4|La facoltà di lettere in piazza Dante.|La facultad de letras en plaza Dante.
laurea triennale|grado (tres años)|lаurea trienˈnaːle|L|stu|4|La laurea triennale in economia.|El grado de tres años en economía.
laurea magistrale|máster (laurea)|lаurea madʒiˈstrale|L|stu|4|La laurea magistrale in editoria.|El máster en edición.
laurea con lode|matrícula de honor|lаurea kon ˈloːde|L|stu|4|Si è laureata con lode a 22 anni.|Se ha graduado con matrícula a los 22.
tesi di laurea|tesis de grado|ˈteːzi di ˈlаurea|L|stu|3|La tesi di laurea sulla prosa di Gadda.|La tesis de grado sobre la prosa de Gadda.
relazione finale|informe final|relatˈtsjone finaˈle|L|stu|4|La relazione finale del tirocinio.|El informe final de las prácticas.
studente fuori sede|estudiante fuera de sede|stuˈdente ˈfwori ˈsɛde|L|stu|4|Uno studente fuori sede di Catania.|Un estudiante fuera de sede de Catania.
studente pendolare|estudiante pendiente|stuˈdente pendoˈlare|L|stu|4|Studenti pendolari dal Veneto ogni mattina.|Estudiantes pendulares del Véneto cada mañana.
collegio universitario|colegio mayor|kolˈledʒo universiˈtaːrjo|L|stu|4|Il collegio universitario Ghislieri di Pavia.|El colegio mayor Ghislieri de Pavía.
casa dello studente|residencia de estudiantes|ˈkaːza delˈlo stuˈdente|L|stu|4|La casa dello studente a due passi dal centro.|La residencia de estudiantes a dos pasos del centro.
maturità classica|bachillerato clásico|maturiˈta klasˈsika|L|stu|5|La maturità classica del liceo Parini.|El bachillerato clásico del liceo Parini.
primo anno|primer año|ˈprimo anˈno|L|stu|3|Al primo anno seguo cinque corsi.|En el primer año sigo cinco cursos.
in ritardo con gli esami|con retraso en los exámenes|in ritˈtardo kon ɡʎʎi eˈzami|E|stu|4|Sono in ritardo con gli esami della triennale.|Voy con retraso en los exámenes del grado.
dare un esame|dar un examen|ˈdare un eˈzame|E|stu|3|Do l'esame di glottologia a febbraio.|Doy el examen de glotología en febrero.
passare un esame|pasar un examen|pasˈsaːre un eˈzame|E|stu|3|Ho passato l'esame con 30.|He pasado el examen con 30.
bocciarsi a un esame|suspender un examen|botˈtʃarsi a un eˈzame|E|stu|4|Mi sono bocciato a statistica due volte.|He suspendido estadística dos veces.
appello d'esame|convocatoria de examen|apˈpɛl lo deˈzame|L|stu|4|Il primo appello d'esame a gennaio.|La primera convocatoria en enero.
saltare un appello|saltar una convocatoria|salˈtare un apˈpɛl lo|E|stu|5|Ho saltato il primo appello per lavorare.|He saltado la primera convocatoria para trabajar.
libretto universitario|libreta universitaria|libret to universiˈtaːrjo|L|stu|4|Il libretto universitario con i crediti.|La libreta universitaria con los créditos.
piano di studi|plan de estudios|pjaːno di stuˈdi|L|stu|4|Il piano di studi personalizzato.|El plan de estudios personalizado.
frequenza obbligatoria|asistencia obligatoria|frekwenˈtsa obbliɡaˈtoːrja|L|stu|4|Un seminario con frequenza obbligatoria.|Un seminario con asistencia obligatoria.
lezione frontale|lección magistral|leˈtsjone fronˈtale|L|stu|4|Ore di lezione frontale in anfiteatro.|Horas de lección magistral en anfiteatro.
seminario interattivo|seminario interactivo|semiˈnarjo interatˈtiːvo|L|stu|4|Un seminario interattivo su Dante digital.|Un seminario interactivo sobre Dante digital.
studio individuale|estudio individual|ˈstudio individuaˈle|L|stu|4|Lo studio individuale in biblioteca.|El estudio individual en biblioteca.
biblioteca di facoltà|biblioteca de facultad|biblioteˈka di faˈkɔlta|L|stu|4|La biblioteca di facoltà aperta fino a mezzanotte.|La biblioteca de facultad abierta hasta medianoche.
posto letto (università)|cama (residencia)|ˈpɔsto ˈlet to|L|stu|5|Un posto letto in collegio per l'anno accademico.|Una cama en colegio mayor para el año académico.
esonero dalle tasse|exención de tasas|ezoˈnɛro dalle ˈtasse|L|stu|5|L'esonero dalle tasse per il merito.|La exención de tasas por mérito.
anno accademico|año académico|anˈno attʃaˈdɛːmiko|L|stu|3|L'anno accademico parte il 1° ottobre.|El año académico arranca el 1 de octubre.
sessione d'esame|convocatoria de exámenes|sesˈsjone deˈzame|L|stu|3|La sessione d'esame di gennaio piena.|La convocatoria de enero llena.
sessione straordinaria|convocatoria extraordinaria|sesˈsjone straordin aˈrja|L|stu|5|La sessione straordinaria a settembre.|La convocatoria extraordinaria en septiembre.
preparare un esame|preparar un examen|prepaˈrare un eˈzame|E|stu|3|Prepariamo l'esame di filosofia del diritto juntos.|Preparamos juntos el examen de filosofía del derecho.
studiare all'ultimo minuto|estudiar a última hora|stuˈdjarе allˈultimo miˈnuto|E|stu|4|Ha studiato all'ultimo minuto e è andata bene.|Ha estudiado a última hora y ha ido bien.
notte in bianco|noche en blanco|nɔt te in ˈbjanko|L|emo|4|Ho fatto una notte in bianco prima dell'esame.|He hecho una noche en blanco antes del examen.
sudare sette camicie|sudar la gota gorda|suˈdare seːte kamiˈtʃe|E|cnn|4|Ho sudato sette camicie per passare fisica.|He sudado la gota gorda por pasar física.
studiare a memoria|estudiar de memoria|stuˈdjaˌre a meˈmoria|E|stu|3|Studia a memoria le tabelline tutte quante.|Estudia de memoria las tablas.
imparare a memoria|aprender de memoria|impaˈrare a meˈmoria|E|stu|3|Ho imparato a memoria la poesia di Leopardi.|He aprendido de memoria el poema de Leopardi.
mandare a memoria|meter en memoria|mandare a meˈmoria|E|stu|4|Devo mandare a memoria le coniugazioni.|Debo memorizar las conjugaciones.
ripasso generale|repaso general|ripasˈso dʒeneraˈle|L|stu|4|Il ripasso generale la notte prima.|El repaso general la noche anterior.
fare un ripasso|dar un repaso|fare un ripasˈso|E|stu|4|Facciamo un ripasso veloce dei verbi irregolari.|Damos un repaso rápido a los verbos irregulares.
schemino|esquema|skeˈmiːno|S|stu|5|Uno schemino su mezzo foglio per l'orale.|Un esquema en media hoja para el oral.|g=m;p=schemini;r=col
prendere appunti|tomar apuntes|ˈprɛndere apˈpunti|E|stu|3|Prendo appunti sul quaderno a quadretti.|Tomo apuntes en el cuaderno cuadriculado.
quaderno a quadretti|cuaderno cuadriculado|kwaˈderno a kwadretˈti|L|stu|4|Un quaderno a quadretti per la matematica.|Un cuaderno cuadriculado para matemáticas.
fotocopiare gli appunti|fotocopiar los apuntes|fotokoˈpjarе ɡʎʎi apˈpunti|E|stu|4|Fotocopia gli appunti della lezione mancata.|Fotocopia los apuntes de la clase perdida.
fare lo studente|ser estudiante|fare lo stuˈdente|E|stu|4|Faccio lo studente lavoratore di notte.|Soy estudiante y trabajador nocturno.
studente lavoratore|estudiante trabajador|stuˈdente lavoraˈtore|L|stu|4|Uno studente lavoratore al call center.|Un estudiante trabajador en el call center.
`, "B1", "k-x46");
