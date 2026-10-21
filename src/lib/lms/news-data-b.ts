/* ── Notizie · datos B1 + B2 (v9.25) ──────────────────────────────────
   Noticias adaptadas al nivel, método Voice of America Learning English.
   Contenido 100% original con fines didácticos. Cuerpo: B1 ≈ 190-210
   parole, B2 ≈ 240-270. Passato prossimo vs imperfetto (B1), congiuntivo
   e connettivi (B2). */

import type { NewsItem } from "./news";

export const NEWS_DATA_B: NewsItem[] = [

  /* ═══ B1 · 1 — Salute ═══ */
  {
    id: "news-b1-01", cat: "salute", level: "B1", place: "Padova", minutes: 3,
    title: "Il sonno degli studenti: uno studio",
    titleEs: "El sueño de los estudiantes: un estudio",
    lead: {
      it: "Uno studio ha seguito mille universitari per un semestre: dormire poco fa male ai voti. La scienza del sonno entra in classe.",
      es: "Un estudio siguió a mil universitarios durante un semestre: dormir poco perjudica las notas. La ciencia del sueño entra en el aula.",
    },
    paragraphs: [
      { it: "Un gruppo di ricercatori ha seguito mille universitari per un intero semestre. Chi dormiva meno di sei ore a notte prendeva voti peggiori e si addormentava durante le lezioni.",
      es: "Un grupo de investigadores siguió a mil universitarios durante un semestre entero. Quien dormía menos de seis horas por noche sacaba notas peores y se quedaba dormido durante las clases." },
      { it: "Il problema, hanno scoperto, non è solo la quantità. Conta anche l'orario: andare a letto alle due e svegliarsi alle nove non è la stessa cosa che dormire da mezzanotte alle otto.",
      es: "El problema, han descubierto, no es solo la cantidad. También importa el horario: acostarse a las dos y despertarse a las nueve no es lo mismo que dormir de doce a ocho." },
      { it: "Lo schermo resta il nemico principale. La luce blu del telefono dice al cervello che è ancora giorno, e addormentarsi diventa più difficile.",
      es: "La pantalla sigue siendo el enemigo principal. La luz azul del teléfono le dice al cerebro que todavía es de día, y quedarse dormido se vuelve más difícil." },
      { it: "I ricercatori propongono una regola semplice: niente telefono nell'ultima mezz'ora prima di dormire. Un libro di carta, dicono, funziona meglio di un video.",
      es: "Los investigadores proponen una regla simple: nada de teléfono en la última media hora antes de dormir. Un libro de papel, dicen, funciona mejor que un video." },
      { it: "Qualche università sta provando qualcosa di nuovo: esami che cominciano più tardi al mattino e aule con più luce naturale. I primi risultati sembrano buoni.",
      es: "Alguna universidad está probando algo nuevo: exámenes que empiezan más tarde por la mañana y aulas con más luz natural. Los primeros resultados parecen buenos." },
      { it: "La conclusione degli studiosi è una frase che vale anche fuori dall'università: il sonno non è tempo perso, è il momento in cui il cervello mette in ordine la giornata.",
      es: "La conclusión de los estudiosos es una frase que vale también fuera de la universidad: el sueño no es tiempo perdido, es el momento en que el cerebro pone en orden el día." },
    ],
    words: [
      { it: "il sonno", es: "sueño (acto de dormir)" },
      { it: "il semestre", es: "semestre" },
      { it: "la luce blu", es: "luz azul" },
      { it: "addormentarsi", es: "quedarse dormido" },
      { it: "il voto", es: "nota, calificación" },
      { it: "la regola", es: "regla" },
      { it: "mettere in ordine", es: "poner en orden" },
    ],
    questions: [
      { q: "¿A quién ha seguido el estudio y durante cuánto tiempo?", options: ["Mille universitari per un semestre", "Cento studenti per una settimana", "Mille studenti per un anno", "Dieci professori"], answer: 0, why: "«Ha seguito mille universitari per un intero semestre.»" },
      { q: "¿Qué les pasaba a quienes dormían menos de seis horas?", options: ["Prendevano voti migliori", "Si addormentavano durante le lezioni", "Studiavano di più", "Niente di speciale"], answer: 1, why: "«Chi dormiva meno di sei ore prendeva voti peggiori e si addormentava durante le lezioni.»" },
      { q: "¿Cuál es el enemigo principal, según la noticia?", options: ["Il libro di carta", "Lo schermo", "L'esame", "La luce naturale"], answer: 1, why: "«Lo schermo resta il nemico principale: la luce blu dice al cervello che è ancora giorno.»" },
      { q: "¿Qué proponen los investigadores para la última media hora?", options: ["Un video rilassante", "Niente telefono, un libro di carta", "Musica alta", "Un caffè"], answer: 1, why: "«Niente telefono nell'ultima mezz'ora: un libro di carta funziona meglio di un video.»" },
      { q: "¿Qué están probando algunas universidades?", options: ["Esami più tardi e aule con più luce naturale", "Lezioni di notte", "Meno esami", "Solo corsi online"], answer: 0, why: "«Esami che cominciano più tardi al mattino e aule con più luce naturale.»" },
      { q: "Para los estudiosos, el sueño es…", options: ["tempo perso", "il momento in cui il cervello mette in ordine la giornata", "un lusso", "una moda"], answer: 1, why: "«Il sonno non è tempo perso: è il momento in cui il cervello mette in ordine la giornata.»" },
    ],
    discuss: [
      { it: "Quante ore dormi in una settimana normale? Bastano?", es: "¿Cuántas horas duermes en una semana normal? ¿Bastan?" },
      { it: "Condividi la regola dei ricercatori o la trovi impossibile? Perché?", es: "¿Compartes la regla de los investigadores o la encuentras imposible? ¿Por qué?" },
    ],
  },

  /* ═══ B1 · 2 — Ambiente ═══ */
  {
    id: "news-b1-02", cat: "ambiente", level: "B1", place: "Palermo", minutes: 3,
    title: "Il caldo delle città: si piantano alberi",
    titleEs: "El calor de las ciudades: se plantan árboles",
    lead: {
      it: "D'estate le città italiane diventano forni. La risposta più economica non è l'aria condizionata: sono gli alberi.",
      es: "En verano las ciudades italianas se vuelven hornos. La respuesta más barata no es el aire acondicionado: son los árboles.",
    },
    paragraphs: [
      { it: "Negli ultimi anni le estati sono diventate più calde e più lunghe. Nelle città il cemento tiene il calore: anche di notte la temperatura non scende e non si respira.",
      es: "En los últimos años los veranos se han vuelto más calurosos y más largos. En las ciudades el cemento guarda el calor: también de noche la temperatura no baja y no se respira." },
      { it: "Le immagini dall'alto raccontano una verità chiara: i quartieri con più alberi sono più freschi di due o tre gradi. Non è un'opinione, è una misura.",
      es: "Las imágenes desde arriba cuentan una verdad clara: los barrios con más árboles son más frescos por dos o tres grados. No es una opinión, es una medición." },
      { it: "Alcuni comuni hanno iniziato a piantare: nuovi alberi lungo le strade, tetti verdi sopra gli uffici, fontane e ombrelloni nelle piazze più esposte.",
      es: "Algunos ayuntamientos han empezado a plantar: nuevos árboles a lo largo de las calles, techos verdes sobre las oficinas, fuentes y sombrillas en las plazas más expuestas." },
      { it: "Non tutti sono contenti. Gli alberi costano e hanno bisogno di cura per i primi anni: acqua, potatura, controllo. C'è chi dice che i soldi servano altrove.",
      es: "No todos están contentos. Los árboles cuestan y necesitan cuidados los primeros años: agua, poda, control. Hay quien dice que el dinero haga falta en otra parte." },
      { it: "I medici però ricordano un punto importante: il caldo estremo è un problema di salute, non solo di comfort. Nelle città più calde, i ricoveri aumentano proprio nei giorni più afosi.",
      es: "Los médicos recuerdan sin embargo un punto importante: el calor extremo es un problema de salud, no solo de confort. En las ciudades más calurosas, los ingresos aumentan justo en los días más bochornosos." },
      { it: "Gli urbanisti hanno un nome per tutto questo: adattamento. Significa prepararsi a un clima diverso, cominciando da subito, un albero alla volta.",
      es: "Los urbanistas tienen un nombre para todo esto: adaptación. Significa prepararse para un clima distinto, empezando desde ya, un árbol cada vez." },
    ],
    words: [
      { it: "il forno", es: "horno" },
      { it: "il cemento", es: "cemento" },
      { it: "il quartiere", es: "barrio" },
      { it: "la potatura", es: "poda" },
      { it: "il ricovero", es: "ingreso (hospitalario)" },
      { it: "afoso", es: "bochornoso, sofocante" },
      { it: "l'adattamento", es: "adaptación" },
    ],
    questions: [
      { q: "¿Qué guarda el calor en las ciudades?", options: ["Il cemento", "Gli alberi", "L'acqua", "Il vento"], answer: 0, why: "«Nelle città il cemento tiene il calore: anche di notte non si respira.»" },
      { q: "¿Cuántos grados más frescos son los barrios con más árboles?", options: ["Uno", "Due o tre", "Dieci", "Zero"], answer: 1, why: "«I quartieri con più alberi sono più freschi di due o tre gradi. Non è un'opinione, è una misura.»" },
      { q: "¿Qué necesitan los árboles los primeros años?", options: ["Niente", "Acqua, potatura, controllo", "Solo il sole", "Nuove strade"], answer: 1, why: "«Hanno bisogno di cura per i primi anni: acqua, potatura, controllo.»" },
      { q: "¿Por qué dicen los médicos que el calor extremo no es solo comfort?", options: ["Perché costa poco", "Perché i ricoveri aumentano nei giorni più afosi", "Perché fa bello", "Perché piacciono le fontane"], answer: 1, why: "«Il caldo estremo è un problema di salute: nelle città più calde i ricoveri aumentano nei giorni più afosi.»" },
      { q: "¿Qué significa «adattamento» para los urbanistas?", options: ["Tornare al passato", "Prepararsi a un clima diverso, cominciando da subito", "Comprare più condizionatori", "Aspettare"], answer: 1, why: "«Adattamento: prepararsi a un clima diverso, cominciando da subito, un albero alla volta.»" },
    ],
    discuss: [
      { it: "Com'è la tua città d'estate? Ci sono alberi nella tua strada?", es: "¿Cómo es tu ciudad en verano? ¿Hay árboles en tu calle?" },
      { it: "Aria condizionata o alberi: dove spenderesti i soldi del comune? Perché?", es: "Aire acondicionado o árboles: ¿dónde gastarías el dinero del ayuntamiento? ¿Por qué?" },
    ],
  },

  /* ═══ B1 · 3 — Tecnologia ═══ */
  {
    id: "news-b1-03", cat: "tecnologia", level: "B1", place: "Roma", minutes: 3,
    title: "L'intelligenza artificiale a scuola",
    titleEs: "La inteligencia artificial en la escuela",
    lead: {
      it: "L'intelligenza artificiale entra nelle classi italiane. Strumento magico o pericolo? Gli insegnanti discutono, i provveditori osservano.",
      es: "La inteligencia artificial entra en las aulas italianas. ¿Herramienta mágica o peligro? Los profesores discuten, los inspectores observan.",
    },
    paragraphs: [
      { it: "In molte scuole gli studenti usano l'intelligenza artificiale per fare i compiti. Qualche insegnante si arrabbia; altri, invece, hanno deciso di cambiare metodo.",
      es: "En muchas escuelas los estudiantes usan la inteligencia artificial para hacer los deberes. Algún profesor se enoja; otros, en cambio, han decidido cambiar de método." },
      { it: "La posizione più diffusa è questa: l'IA è uno strumento, come il vocabolario o la calcolatrice. Il problema non è lo strumento, ma il modo in cui lo usi.",
      es: "La posición más difundida es esta: la IA es una herramienta, como el diccionario o la calculadora. El problema no es la herramienta, sino el modo en que la usas." },
      { it: "Qualche professore ha provato una strada nuova: chiedere all'IA di preparare le domande, e poi correggere in classe le risposte degli studenti, una per una.",
      es: "Algún profesor ha probado un camino nuevo: pedir a la IA que prepare las preguntas y luego corregir en clase las respuestas de los estudiantes, una por una." },
      { it: "Gli esperti ripetono una frase che vale per tutte le età: chi sa usare l'IA ha un vantaggio; chi sa solo copiare non ha imparato niente.",
      es: "Los expertos repiten una frase que vale para todas las edades: quien sabe usar la IA tiene una ventaja; quien solo sabe copiar no ha aprendido nada." },
      { it: "La sfida vera, alla fine, è un'altra: insegnare a pensare. La macchina scrive in fretta, ma non capisce se quello che scrive ha senso o no.",
      es: "El desafío verdadero, al final, es otro: enseñar a pensar. La máquina escribe rápido, pero no entiende si lo que escribe tiene sentido o no." },
      { it: "Per ora le regole restano poche e la discussione è aperta. Come per tutte le novità, sarà l'uso a decidere se l'IA diventerà un'aiuto o una scusa.",
      es: "Por ahora las reglas siguen siendo pocas y la discusión está abierta. Como para todas las novedades, será el uso quien decida si la IA se convertirá en una ayuda o una excusa." },
    ],
    words: [
      { it: "il compito", es: "deber, tarea" },
      { it: "la calcolatrice", es: "calculadora" },
      { it: "l'insegnante", es: "profesor, maestro" },
      { it: "il vantaggio", es: "ventaja" },
      { it: "copiare", es: "copiar" },
      { it: "avere senso", es: "tener sentido" },
      { it: "la scusa", es: "excusa" },
    ],
    questions: [
      { q: "¿Qué hacen los estudiantes en muchas escuelas?", options: ["Usano l'IA per fare i compiti", "Rifiutano la tecnologia", "Studiano solo su carta", "Niente"], answer: 0, why: "«Gli studenti usano l'intelligenza artificiale per fare i compiti.»" },
      { q: "¿Con qué compara la noticia a la IA?", options: ["Con un gioco", "Con il vocabolario o la calcolatrice", "Con un professore", "Con un libro"], answer: 1, why: "«L'IA è uno strumento, come il vocabolario o la calcolatrice.»" },
      { q: "¿Qué ha probado algún profesor?", options: ["Vietare tutto", "Chiedere all'IA di preparare le domande e correggere in classe", "Tornare alla lavagna", "Chiudere la scuola"], answer: 1, why: "«Chiedere all'IA di preparare le domande, e poi correggere in classe le risposte degli studenti.»" },
      { q: "Según los expertos, ¿quién tiene una ventaja?", options: ["Chi copia meglio", "Chi sa usare l'IA", "Chi non usa la tecnologia", "Chi studia solo di notte"], answer: 1, why: "«Chi sa usare l'IA ha un vantaggio; chi sa solo copiare non ha imparato niente.»" },
      { q: "¿Cuál es el desafío verdadero?", options: ["Comprare più computer", "Insegnare a pensare", "Scrivere più in fretta", "Eliminare i compiti"], answer: 1, why: "«La sfida vera è un'altra: insegnare a pensare. La macchina scrive in fretta, ma non capisce se ha senso.»" },
      { q: "¿Qué decidirá si la IA es ayuda o excusa?", options: ["Le regole", "L'uso", "I professori", "Il tempo"], answer: 1, why: "«Sarà l'uso a decidere se l'IA diventerà un'aiuto o una scusa.»" },
    ],
    discuss: [
      { it: "Usi l'IA per studiare? Come? Racconta un esempio concreto.", es: "¿Usas la IA para estudiar? ¿Cómo? Cuenta un ejemplo concreto." },
      { it: "Secondo te la scuola dovrebbe vietarla, insegnarla o ignorarla? Perché?", es: "Según tú, ¿la escuela debería prohibirla, enseñarla o ignorarla? ¿Por qué?" },
    ],
  },

  /* ═══ B2 · 1 — Economia ═══ */
  {
    id: "news-b2-01", cat: "economia", level: "B2", place: "Italia", minutes: 4,
    title: "Il turismo lento: viaggiare in un altro modo",
    titleEs: "El turismo lento: viajar de otro modo",
    lead: {
      it: "Mentre le città d'arte soffocano, cresce una generazione di viaggiatori che cerca un'altra Italia: borghi piccoli, treni lenti, pasti lunghi.",
      es: "Mientras las ciudades de arte se asfixian, crece una generación de viajeros que busca otra Italia: pueblos pequeños, trenes lentos, comidas largas.",
    },
    paragraphs: [
      { it: "Per decenni il turismo italiano è stato soprattutto turismo di massa: pullman, foto veloci, pranzo in venti minuti. Le città d'arte hanno guadagnato molto e hanno perso, piano piano, pezzi di vita quotidiana.",
      es: "Durante décadas el turismo italiano fue sobre todo turismo de masas: autobuses, fotos rápidas, comida en veinte minutos. Las ciudades de arte ganaron mucho y perdieron, poco a poco, trozos de vida cotidiana." },
      { it: "Ora, però, qualcosa si sta muovendo. Secondo le associazioni di categoria, cresce chi cerca il «turismo lento»: agriturismi, borghi quasi vuoti, prodotti locali, ospitalità diffusa.",
      es: "Ahora, sin embargo, algo se está moviendo. Según las asociaciones del sector, crece quien busca el «turismo lento»: agroturismos, pueblos casi vacíos, productos locales, hospitalidad dispersa." },
      { it: "Il cambiamento ha anche una motivazione economica: i piccoli comuni perdono abitanti e cercano lavoro nuovo. Il turismo di qualità può portare guide, cucine, piccoli alberghi, e soprattutto giovani che restano.",
      es: "El cambio tiene también una motivación económica: los pequeños municipios pierden habitantes y buscan trabajo nuevo. El turismo de calidad puede traer guías, cocinas, pequeños hoteles y, sobre todo, jóvenes que se quedan." },
      { it: "Le istituzioni, che fino a ieri puntavano sulle grandi strutture, sembrano aver capito la direzione: si investe nei treni regionali, nei sentieri e nelle reti di biciclette, meno nei megaresort.",
      es: "Las instituciones, que hasta ayer apostaban por las grandes estructuras, parecen haber entendido la dirección: se invierte en los trenes regionales, en los senderos y en las redes de bicicletas, menos en los megaresorts." },
      { it: "I critici, tuttavia, avvertono: senza regole, anche il turismo lento rischia di diventare una moda, e le mode invecchiano presto. Il rischio è che il «lento» diventi uno slogan pubblicato sui social.",
      es: "Los críticos, sin embargo, advierten: sin reglas, también el turismo lento corre el riesgo de convertirse en una moda, y las modas envejecen pronto. El peligro es que el «lento» se vuelva un eslogan publicado en las redes." },
      { it: "La domanda con cui chiudiamo riguarda voi lettori: quando partite, siete turisti che visitano un posto o viaggiatori che provano ad abitarlo per qualche giorno? La differenza, si sa, si vede già dalla valigia.",
      es: "La pregunta con la que cerramos les concierne a ustedes, lectores: cuando viajan, ¿son turistas que visitan un lugar o viajeros que tratan de habitarlo unos días? La diferencia, se sabe, se ve ya desde la maleta." },
    ],
    words: [
      { it: "il borgo", es: "pueblo (pequeño, histórico)" },
      { it: "l'agriturismo", es: "agroturismo" },
      { it: "di massa", es: "de masas" },
      { it: "l'ospitalità diffusa", es: "hospitalidad dispersa (casas repartidas en el pueblo)" },
      { it: "il sentiero", es: "sendero" },
      { it: "avvertono", es: "advierten" },
      { it: "invecchiare", es: "envejecer" },
      { it: "lo slogan", es: "eslogan" },
    ],
    questions: [
      { q: "¿Cómo ha sido durante décadas el turismo italiano?", options: ["Turismo di massa", "Turismo lento", "Turismo di lusso", "Nessun turismo"], answer: 0, why: "«Il turismo italiano è stato soprattutto turismo di massa: pullman, foto veloci, pranzo in venti minuti.»" },
      { q: "¿Qué buscan los nuevos viajeros?", options: ["Megaresort", "Agriturismi, borghi quasi vuoti, prodotti locali", "Città affollate", "Viaggi di un giorno"], answer: 1, why: "«Cresce chi cerca il turismo lento: agriturismi, borghi quasi vuoti, prodotti locali, ospitalità diffusa.»" },
      { q: "¿Qué puede traer el turismo de calidad a los pequeños municipios?", options: ["Solo rumore", "Guide, cucine, piccoli alberghi e giovani che restano", "Niente", "Solo pensionati"], answer: 1, why: "«Può portare guide, cucine, piccoli alberghi, e soprattutto giovani che restano.»" },
      { q: "¿En qué invierten ahora las instituciones?", options: ["Megastrutture", "Treni regionali, sentieri e reti di biciclette", "Grandi aeroporti", "Niente"], answer: 1, why: "«Si investe nei treni regionali, nei sentieri e nelle reti di biciclette, meno nei megaresort.»" },
      { q: "¿Qué advierten los críticos?", options: ["Che il turismo lento è già finito", "Che senza regole diventa una moda, e le mode invecchiano presto", "Che i borghi sono noiosi", "Che i social aiutano sempre"], answer: 1, why: "«Senza regole, anche il turismo lento rischia di diventare una moda, e le mode invecchiano presto.»" },
      { q: "La diferencia entre turista y viajero, dice la noticia, se ve ya desde…", options: ["Il passaporto", "La valigia", "Il biglietto", "Le scarpe"], answer: 1, why: "«La differenza, si sa, si vede già dalla valigia.»" },
    ],
    discuss: [
      { it: "Turista o viaggiatore: come ti definiresti? Con un esempio dei tuoi ultimi viaggi.", es: "Turista o viajero: ¿cómo te definirías? Con un ejemplo de tus últimos viajes." },
      { it: "Qual è un borgo o un posto piccolo che meriterebbe più turismo? Raccontalo.", es: "¿Cuál es un pueblo o un lugar pequeño que merecería más turismo? Cuéntalo." },
    ],
  },

  /* ═══ B2 · 2 — Scienza ═══ */
  {
    id: "news-b2-02", cat: "scienza", level: "B2", place: "Bergamo", minutes: 4,
    title: "Le città spugna: imparare a bere la pioggia",
    titleEs: "Las ciudades esponja: aprender a beber la lluvia",
    lead: {
      it: "Pioggia più violenta, fognature meno pronte. Ingegneri e urbanisti progettano città che assorbono l'acqua dove cade, invece di respingerla.",
      es: "Lluvia más violenta, alcantarillas menos preparadas. Ingenieros y urbanistas proyectan ciudades que absorben el agua donde cae, en lugar de repelerla.",
    },
    paragraphs: [
      { it: "Il clima sta cambiando il carattere delle piogge: piove meno spesso, ma quando piove, piove con una violenza che i sistemi di scarico tradizionali non riescono più a reggere.",
      es: "El clima está cambiando el carácter de las lluvias: llueve menos a menudo, pero cuando llueve, llueve con una violencia que los sistemas de desagüe tradicionales ya no logran soportar." },
      { it: "Da qui nasce l'idea della «città spugna»: superfici che assorbono l'acqua nel punto in cui cade, la conservano sotto strada e la rilasciano piano nei giorni successivi.",
      es: "De aquí nace la idea de la «ciudad esponja»: superficies que absorben el agua en el punto donde cae, la guardan bajo la calle y la liberan despacio en los días siguientes." },
      { it: "Gli strumenti sono sorprendentemente semplici: meno asfalto e più prato, parchi pensati per allagarsi di proposito, tetti che trattengono l'acqua, strade drenanti che la lasciano passare.",
      es: "Los instrumentos son sorprendentemente simples: menos asfalto y más césped, parques pensados para inundarse a propósito, techos que retienen el agua, calles drenantes que la dejan pasar." },
      { it: "Oltre oceano c'è già chi ha cominciato: Rotterdam ha trasformato alcuni cortili in «piazze d'acqua» che si riempiono quando arriva il temporale e si svuotano in poche ore.",
      es: "Al otro lado del océano ya hay quien ha empezado: Róterdam ha transformado algunos patios en «plazas de agua» que se llenan cuando llega el temporal y se vacían en pocas horas." },
      { it: "In Italia i primi progetti sono ancora piccoli: un parcheggio che diventa parco, un canale coperto anni fa che torna a vedere la luce, qualche scuola con il cortile drenante.",
      es: "En Italia los primeros proyectos son todavía pequeños: un aparcamiento que se convierte en parque, un canal cubierto hace años que vuelve a ver la luz, alguna escuela con el patio drenante." },
      { it: "Il punto, dicono gli esperti, è culturale più che tecnico: per decenni abbiamo combattuto l'acqua con tubi e pompe; ora dobbiamo imparare a conviverci, come si fa con un vicino rumoroso.",
      es: "La clave, dicen los expertos, es cultural más que técnica: durante décadas combatimos el agua con tubos y bombas; ahora debemos aprender a convivir con ella, como se hace con un vecino ruidoso." },
    ],
    words: [
      { it: "la spugna", es: "esponja" },
      { it: "lo scarico", es: "desagüe" },
      { it: "reggere", es: "soportar, aguantar" },
      { it: "drenante", es: "drenante (que deja pasar el agua)" },
      { it: "allagarsi", es: "inundarse" },
      { it: "il canale", es: "canal" },
      { it: "conviverci", es: "convivir con ello" },
    ],
    questions: [
      { q: "¿Cómo están cambiando las lluvias?", options: ["Piove più spesso, ma piano", "Piove meno spesso, ma con violenza", "Non piove più", "Piove solo d'inverno"], answer: 1, why: "«Piove meno spesso, ma quando piove, piove con una violenza che i sistemi tradizionali non riescono più a reggere.»" },
      { q: "¿Qué hace una «ciudad esponja»?", options: ["Respinge l'acqua con pompe", "Assorbe l'acqua dove cade e la rilascia piano", "Copre tutto con asfalto", "Chiude le strade"], answer: 1, why: "«Superfici che assorbono l'acqua nel punto in cui cade, la conservano e la rilasciano piano.»" },
      { q: "¿Cuál de estos es un instrumento de la ciudad esponja?", options: ["Più asfalto", "Parchi pensati per allagarsi di proposito", "Tetti di lamiera", "Strade chiuse"], answer: 1, why: "«Parchi pensati per allagarsi di proposito, tetti che trattengono l'acqua, strade drenanti.»" },
      { q: "¿Qué ha hecho Róterdam?", options: ["Niente", "Cortili trasformati in piazze d'acqua", "Costruito più tubi", "Chiuso la città"], answer: 1, why: "«Rotterdam ha trasformato alcuni cortili in piazze d'acqua che si riempiono e si svuotano in poche ore.»" },
      { q: "¿Cómo son los primeros proyectos italianos?", options: ["Enormi", "Ancora piccoli", "Finiti da anni", "Solo al nord"], answer: 1, why: "«In Italia i primi progetti sono ancora piccoli: un parcheggio che diventa parco, un canale che torna a vedere la luce.»" },
      { q: "Para los expertos, el punto es…", options: ["Tecnico più che culturale", "Culturale più che tecnico", "Economico", "Politico"], answer: 1, why: "«Il punto è culturale più che tecnico: dobbiamo imparare a conviverci.»" },
    ],
    discuss: [
      { it: "Nella tua città cosa succede quando piove forte? Descrivi una scena che ricordi.", es: "En tu ciudad, ¿qué pasa cuando llueve fuerte? Describe una escena que recuerdes." },
      { it: "Convivere con l'acqua: ti sembra una resa o una saggezza? Argomenta.", es: "Convivir con el agua: ¿te parece una rendición o una sabiduría? Argumenta." },
    ],
  },

  /* ═══ B2 · 3 — Cultura ═══ */
  {
    id: "news-b2-03", cat: "cultura", level: "B2", place: "Torino", minutes: 4,
    title: "Le librerie di quartiere tornano",
    titleEs: "Las librerías de barrio vuelven",
    lead: {
      it: "L'e-commerce aveva decretato la fine delle librerie. Invece è successo qualcosa di diverso: tornano i negozi di quartiere, con caffè, eventi e comunità.",
      es: "El comercio electrónico había decretado el fin de las librerías. En cambio ha pasado algo distinto: vuelven las tiendas de barrio, con café, eventos y comunidad.",
    },
    paragraphs: [
      { it: "Dieci anni fa i giornali raccontavano di librerie che chiudevano ogni settimana. La colpa, si diceva, era dei prezzi online e dell'e-book che doveva sostituire la carta per sempre.",
      es: "Hace diez años los periódicos contaban historias de librerías que cerraban cada semana. La culpa, se decía, era de los precios en línea y del e-book que debía sustituir el papel para siempre." },
      { it: "La previsione non si è avverata del tutto: la carta resiste più di quanto si pensasse, e nelle città cresce un modello nuovo: la libreria di quartiere, con tavolini, letture per bambini, presentazioni quasi ogni sera.",
      es: "La predicción no se cumplió del todo: el papel resiste más de lo que se pensaba, y en las ciudades crece un modelo nuevo: la librería de barrio, con mesitas, lecturas para niños, presentaciones casi cada tarde." },
      { it: "I numeri raccontano una sorpresa: i giovani leggono più dei loro genitori alla stessa età, anche se scelgono i titoli con altri strumenti, dai podcast ai social.",
      es: "Los números cuentan una sorpresa: los jóvenes leen más que sus padres a la misma edad, aunque eligen los títulos con otros instrumentos, de los pódcast a las redes." },
      { it: "Le librerie indipendenti hanno capito la lezione: non vendono solo oggetti, vendono tempo. Per questo organizzano club di lettura, corsi, aperitivi letterari: occasioni che lo schermo non può offrire.",
      es: "Las librerías independientes han entendido la lección: no venden solo objetos, venden tiempo. Por eso organizan clubes de lectura, cursos, aperitivos literarios: ocasiones que la pantalla no puede ofrecer." },
      { it: "Non si tratta, però, di un ritorno romantico: è un'economia diversa, in cui il negozio vive di relazioni più che di scontrini, e il libro è una parte della serata più che un prodotto a scaffale.",
      es: "No se trata, sin embargo, de un regreso romántico: es una economía distinta, en la que la tienda vive de relaciones más que de tickets, y el libro es una parte de la velada más que un producto en estante." },
      { it: "La morale, per chi legge: se volete che una libreria resti aperta, il modo più semplice ed efficace è entrarci, salutare, scegliere un titolo e tornare. Come accade per tutte le cose che si vogliono vicine.",
      es: "La morale, para quien lee: si quieren que una librería siga abierta, el modo más simple y eficaz es entrar, saludar, elegir un título y volver. Como ocurre con todas las cosas que queremos cerca." },
    ],
    words: [
      { it: "l'e-commerce", es: "comercio electrónico" },
      { it: "la previsione", es: "predicción" },
      { it: "avverarsi", es: "cumplirse (una predicción)" },
      { it: "indipendente", es: "independiente" },
      { it: "il club di lettura", es: "club de lectura" },
      { it: "lo scontrino", es: "ticket (de compra)" },
      { it: "a scaffale", es: "en estante" },
      { it: "lo scaffale", es: "estante" },
    ],
    questions: [
      { q: "¿Qué se decía hace diez años sobre las librerías?", options: ["Che chiudevano ogni settimana", "Che crescevano", "Che non cambiavano", "Che erano piene"], answer: 0, why: "«I giornali raccontavano di librerie che chiudevano ogni settimana.»" },
      { q: "¿Se cumplió del todo la predicción del e-book?", options: ["Sì, del tutto", "No, la carta resiste più di quanto si pensasse", "Solo in inglese", "Nessuno lo sa"], answer: 1, why: "«La previsione non si è avverata del tutto: la carta resiste più di quanto si pensasse.»" },
      { q: "¿Qué sorpresa cuentan los números?", options: ["I giovani non leggono", "I giovani leggono più dei loro genitori alla stessa età", "Si leggono solo e-book", "Le librerie sono vuote"], answer: 1, why: "«I giovani leggono più dei loro genitori alla stessa età, anche se scelgono con altri strumenti.»" },
      { q: "¿Qué venden además de objetos, según las librerías independientes?", options: ["Scontrini", "Tempo: club, corsi, aperitivi letterari", "Solo caffè", "Niente"], answer: 1, why: "«Non vendono solo oggetti, vendono tempo: occasioni che lo schermo non può offrire.»" },
      { q: "La noticia lo describe como…", options: ["Un ritorno romantico", "Un'economia diversa, di relazioni più che di scontrini", "Una moda passeggera", "Un problema"], answer: 1, why: "«Non si tratta di un ritorno romantico: è un'economia diversa, in cui il negozio vive di relazioni.»" },
      { q: "¿Cuál es la morale para los lectores?", options: ["Comprare solo online", "Entrarci, salutare, scegliere un titolo e tornare", "Aspettare gli sconti", "Leggere solo in treno"], answer: 1, why: "«Il modo più semplice ed efficace è entrarci, salutare, scegliere un titolo e tornare.»" },
    ],
    discuss: [
      { it: "Com'è la libreria più vicina a casa tua? Ci entri mai solo per guardare?", es: "¿Cómo es la librería más cercana a tu casa? ¿Entras alguna vez solo a mirar?" },
      { it: "Carta o schermo: come leggi tu? È cambiato negli anni?", es: "Papel o pantalla: ¿cómo lees tú? ¿Ha cambiado con los años?" },
    ],
  },
];
