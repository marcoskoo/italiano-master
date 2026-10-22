/* ── DE · Notizen A1 + A2 (v9.26) ──────────────────────────────────────
   Deutschlands Nachrichten für Lernende, Stufe angepasst, Methode VOA
   Learning English. 100 % origineller Lehrinhalt. Text: A1 ≈ 80 Wörter,
   A2 ≈ 130-150. Kontrollierter Wortschatz, Präsens (A1) / Perfekt &
   Futur (A2). Felder `.it` = Deutsch (Studiensprache), `.es` = Spanisch. */

import type { NewsItem } from "../../news";

export const DE_NEWS_A: NewsItem[] = [

  /* ═══ A1 · 1 — Wissenschaft ═══ */
  {
    id: "de-news-a1-01", cat: "scienza", level: "A1", place: "Berlin", minutes: 2,
    title: "Mit dem Fahrrad zur Arbeit: eine Studie",
    titleEs: "En bici al trabajo: un estudio",
    lead: {
      it: "Eine Studie aus Berlin bringt eine einfache Nachricht: Wer mit dem Fahrrad zur Arbeit fährt, ist seltener krank. Der Weg ist die Medizin.",
      es: "Un estudio de Berlín trae un mensaje simple: quien va en bici al trabajo se enferma menos. El camino es la medicina.",
    },
    paragraphs: [
      { it: "Forscher in Berlin haben eine gute Nachricht. Wer jeden Tag mit dem Fahrrad fährt, hat ein besseres Herz und bessere Laune.",
      es: "Investigadores de Berlín tienen una buena noticia. Quien anda en bici cada día tiene un corazón mejor y mejor humor." },
      { it: "Die Studie sagt: fünfzehn Minuten am Morgen, fünfzehn Minuten am Abend. Das ist alles. Kein Fitnessstudio, keine Mitgliedschaft.",
      es: "El estudio dice: quince minutos por la mañana, quince por la tarde. Nada más. Sin gimnasio, sin membresía." },
      { it: "Berlin ist flach, und das hilft. Die Stadt baut neue Radwege, und die Autofahrer lernen Geduld.",
      es: "Berlín es llano, y eso ayuda. La ciudad construye nuevos carriles bici, y los conductores aprenden paciencia." },
      { it: "Ein Forscher sagt: «Das Fahrrad ist die einzige Maschine, die stärker wird, wenn man sie benutzt — und der Mensch gleich mit.»",
      es: "Un investigador dice: «La bici es la única máquina que se fortalece cuando se usa — y el humano igual.»" },
    ],
    words: [
      { it: "das Fahrrad", es: "la bicicleta" },
      { it: "die Studie", es: "el estudio (científico)" },
      { it: "der Radweg", es: "el carril bici" },
      { it: "die Geduld", es: "la paciencia" },
      { it: "die Mitgliedschaft", es: "la membresía" },
      { it: "die Laune", es: "el humor, el ánimo" },
    ],
    questions: [
      { q: "¿Cuántos minutos al día recomienda el estudio?", options: ["Fünfzehn plus fünfzehn", "Zwei Stunden", "Keine", "Fünfzig"], answer: 0, why: "«Fünfzehn Minuten am Morgen, fünfzehn Minuten am Abend. Das ist alles.»" },
      { q: "¿Qué no hace falta?", options: ["Ein Fitnessstudio, keine Mitgliedschaft", "Ein Auto", "Ein Helm", "Ein Termin"], answer: 0, why: "«Kein Fitnessstudio, keine Mitgliedschaft.»" },
      { q: "¿Qué ayuda en Berlín?", options: ["Die Berge", "Die Stadt ist flach, und sie baut neue Radwege", "Das Wetter", "Der Verkehr"], answer: 1, why: "«Berlin ist flach, und das hilft. Die Stadt baut neue Radwege.»" },
      { q: "¿Qué dijo el investigador sobre la bici?", options: ["«Sie wird schwächer mit der Zeit.»", "«Das Fahrrad ist die einzige Maschine, die stärker wird, wenn man sie benutzt — und der Mensch gleich mit.»", "«Fahrräder sind teuer.»", "«Autos sind besser.»"], answer: 1, why: "«Die einzige Maschine, die stärker wird, wenn man sie benutzt — und der Mensch gleich mit.»" },
    ],
    discuss: [
      { it: "Fahren Sie mit dem Fahrrad zur Arbeit oder zur Schule? Warum (nicht)?", es: "¿Vas en bici al trabajo o al colegio? ¿Por qué (no)?" },
      { it: "«Der Weg ist die Medizin»: Stimmt das in Ihrer Stadt? Erzählen Sie.", es: "«El camino es la medicina»: ¿se cumple en tu ciudad? Cuenta." },
    ],
  },

  /* ═══ A1 · 2 — Umwelt ═══ */
  {
    id: "de-news-a1-02", cat: "ambiente", level: "A1", place: "Freiburg", minutes: 2,
    title: "Die Stadt mit den Bächen in den Gassen",
    titleEs: "La ciudad con arroyos en las calles",
    lead: {
      it: "In Freiburg laufen kleine Bäche mitten durch die Altstadt. Sie sind achthundert Jahre alt — und Kinder spielen damit, als wären sie neu.",
      es: "En Friburgo corren pequeños arroyos en pleno casco antiguo. Tienen ochocientos años — y los niños juegan con ellos como si fueran nuevos.",
    },
    paragraphs: [
      { it: "Freiburg ist eine sonnige Stadt am Rand des Schwarzwalds. In der Altstadt gibt es ein Netz von kleinen Wasserläufen: die Bächle.",
      es: "Friburgo es una ciudad soleada al borde de la Selva Negra. En el casco antiguo hay una red de pequeños cursos de agua: los Bächle." },
      { it: "Früher war das Wasser für Handwerk und Brandabwehr. Heute ist es für Kinder, für Kühlung im Sommer und für Souvenirs.",
      es: "Antes el agua servía para la artesanía y contra incendios. Hoy es para los niños, para la frescura en verano y para recuerdos." },
      { it: "Es gibt eine alte Regel: Wer in ein Bächle fällt, heiratet einen Freiburger. Die Touristen passen gut auf. Die Einheimischen auch.",
      es: "Hay una regla antigua: quien cae en un Bächle se casa con un freiburgués. Los turistas ponen mucho cuidado. Los locales también." },
      { it: "Die Stadt sagt: Die Bächle sind kein Museum. Sie sind Arbeit, Spiel und Abenteuer — jeden Tag, seit achthundert Jahren.",
      es: "La ciudad dice: los Bächle no son un museo. Son trabajo, juego y aventura — cada día, desde hace ochocientos años." },
    ],
    words: [
      { it: "der Bach / das Bächle", es: "el arroyo (diminutivo alemánico)" },
      { it: "die Altstadt", es: "el casco antiguo" },
      { it: "die Gasse", es: "la calleja" },
      { it: "die Brandabwehr", es: "la defensa contra incendios" },
      { it: "einheimisch", es: "local, de allí" },
      { it: "das Abenteuer", es: "la aventura" },
    ],
    questions: [
      { q: "¿Dónde está Freiburg?", options: ["Am Rand des Schwarzwalds", "Am Meer", "In den Alpen", "In Bayerns Mitte"], answer: 0, why: "«Freiburg ist eine sonnige Stadt am Rand des Schwarzwalds.»" },
      { q: "¿Para qué servía antes el agua?", options: ["Nur für Kinder", "Für Handwerk und Brandabwehr", "Für Souvenirs", "Für nichts"], answer: 1, why: "«Früher war das Wasser für Handwerk und Brandabwehr.»" },
      { q: "¿Qué dice la vieja regla?", options: ["Wer in ein Bächle fällt, heiratet einen Freiburger", "Wer Wasser trinkt, bleibt dort", "Wer spielt, verliert", "Wer lacht, zahlt"], answer: 0, why: "«Wer in ein Bächle fällt, heiratet einen Freiburger.»" },
      { q: "¿Qué son los Bächle para la ciudad?", options: ["Ein Museum", "Kein Museum: Arbeit, Spiel und Abenteuer — jeden Tag", "Ein Problem", "Eine Mode"], answer: 1, why: "«Die Bächle sind kein Museum. Sie sind Arbeit, Spiel und Abenteuer — jeden Tag, seit achthundert Jahren.»" },
    ],
    discuss: [
      { it: "Gibt es Wasser in Ihrer Stadt — einen Fluss, Brunnen, Kanäle? Wie leben die Leute damit?", es: "¿Hay agua en tu ciudad — un río, fuentes, canales? ¿Cómo vive la gente con ella?" },
      { it: "Acht Hundert Jahre alt und noch in Gebrauch: Kennen Sie so etwas in Ihrer Stadt?", es: "Ochocientos años y aún en uso: ¿conoces algo así en tu ciudad?" },
    ],
  },

  /* ═══ A1 · 3 — Gesellschaft ═══ */
  {
    id: "de-news-a1-03", cat: "societa", level: "A1", place: "München", minutes: 2,
    title: "Der Biergarten: ein Vertrag seit 1812",
    titleEs: "El jardín de cerveza: un contrato desde 1812",
    lead: {
      it: "In München sitzen die Leute im Sommer unter Kastanienbäumen und trinken Bier aus Krügen. Das ist kein Zufall — das ist ein königlicher Vertrag.",
      es: "En Múnich la gente se sienta en verano bajo castaños y bebe cerveza de jarras. Eso no es casualidad — es un contrato real.",
    },
    paragraphs: [
      { it: "Vor zweihundert Jahren wollte der König den Brauern die Biergärten wegnehmen. Die Münchner protestierten — laut und lange.",
      es: "Hace doscientos años el rey quiso quitar los jardines de cerveza a los cerveceros. Los muniqueses protestaron — fuerte y largo." },
      { it: "Der König gab nach. Seit 1812 gilt: Der Biergarten ist öffentlich, und jeder darf sein eigenes Essen mitbringen.",
      es: "El rey cedió. Desde 1812 vale: el jardín de cerveza es público, y cada cual puede traer su propia comida." },
      { it: "Diese Regel lebt heute weiter. Die Kellner bringen nur Getränke; das Essen kommt aus dem Korb der Familien. Das nennt man «brotzeite».",
      es: "Esa regla sigue viva hoy. Los camareros traen solo bebidas; la comida viene en la cesta de las familias. A eso se le llama «Brotzeit»." },
      { it: "Ein alter Kellner sagt: «Im Biergarten sind alle gleich: Professoren, Klempner, Touristen. Der Tisch kennt keine Titel — nur Krüge.»",
      es: "Un camarero viejo dice: «En el jardín de cerveza todos son iguales: profesores, fontaneros, turistas. La mesa no conoce títulos — solo jarras.»" },
    ],
    words: [
      { it: "der Biergarten", es: "el jardín de cerveza" },
      { it: "der Krug", es: "la jarra" },
      { it: "die Kastanie", es: "el castaño" },
      { it: "der Brauer", es: "el cervecero" },
      { it: "mitbringen", es: "traer (consigo)" },
      { it: "der Klempner", es: "el fontanero" },
    ],
    questions: [
      { q: "¿Qué quiso hacer el rey hace doscientos años?", options: ["Mehr Biergärten bauen", "Den Brauern die Biergärten wegnehmen", "Bier verbieten", "Kastanien pflanzen"], answer: 1, why: "«Vor zweihundert Jahren wollte der König den Brauern die Biergärten wegnehmen.»" },
      { q: "¿Qué vale desde 1812?", options: ["Der Biergarten ist öffentlich, und jeder darf sein eigenes Essen mitbringen", "Biergarten nur für Könige", "Kein Essen im Garten", "Bier nur im Winter"], answer: 0, why: "«Seit 1812 gilt: Der Biergarten ist öffentlich, und jeder darf sein eigenes Essen mitbringen.»" },
      { q: "¿Qué traen los camareros y qué traen las familias?", options: ["Die Kellner bringen alles", "Die Kellner bringen nur Getränke; das Essen kommt aus dem Korb der Familien", "Die Familien bringen Getränke", "Niemand bringt etwas"], answer: 1, why: "«Die Kellner bringen nur Getränke; das Essen kommt aus dem Korb der Familien.»" },
      { q: "¿Qué dijo el camarero viejo?", options: ["«Der Tisch kennt keine Titel — nur Krüge.»", "«Professoren zahlen mehr.»", "«Touristen sind nicht willkommen.»", "«Biergarten sind altmodisch.»"], answer: 0, why: "«Im Biergarten sind alle gleich: Professoren, Klempner, Touristen. Der Tisch kennt keine Titel — nur Krüge.»" },
    ],
    discuss: [
      { it: "Gibt es in Ihrer Stadt einen Ort, wo «alle gleich» sind? Beschreiben Sie ihn.", es: "¿Hay en tu ciudad un lugar donde «todos son iguales»? Descríbelo." },
      { it: "Essen mitbringen: normal oder seltsam in Ihrem Land? Erzählen Sie.", es: "Traer la comida: ¿normal o raro en tu país? Cuenta." },
    ],
  },

  /* ═══ A2 · 1 — Geschichte ═══ */
  {
    id: "de-news-a2-01", cat: "storia", level: "A2", place: "Köln", minutes: 3,
    title: "Der Dom, der niemals fertig wurde",
    titleEs: "La catedral que nunca se terminó",
    lead: {
      it: "Der Kölner Dom ist ein Weltwunder mit einem Geheimnis: Er war 600 Jahre eine Baustelle. Die Stadt hat gelernt, mit dem Unfertigen zu leben — und es zu lieben.",
      es: "La catedral de Colonia es una maravilla del mundo con un secreto: fue una obra durante 600 años. La ciudad aprendió a vivir con lo inconcluso — y a amarlo.",
    },
    paragraphs: [
      { it: "Im Jahr 1248 begann der Bau. Der Plan war ehrgeizig: die größte Kirche der Welt, im Stil der neuen französischen Kathedralen.",
      es: "En 1248 empezó la obra. El plan era ambicioso: la iglesia más grande del mundo, al estilo de las nuevas catedrales francesas." },
      { it: "Dann kam der halfway-Stopp. Das Geld fehlte, die Lust auch. Dreihundert Jahre stand der Dom ohne Turmspitzen da, wie ein Satz ohne Punkt.",
      es: "Luego llegó la pausa intermedia. Faltó dinero, y también ganas. Durante trescientos años la catedral quedó sin agujas, como una frase sin punto." },
      { it: "Im neunzehnten Jahrhundert wachte die Stadt auf. Romantik, Nationalstolz, neue Technik: 1880 war der Dom «fertig» — mit Anführungsstrichen, denn ein Denkmalamt schafft immer Arbeit.",
      es: "En el siglo diecinueve la ciudad despertó. Romanticismo, orgullo nacional, nueva técnica: en 1880 la catedral estuvo «terminada» — entre comillas, porque una oficina de monumentos siempre encuentra trabajo." },
      { it: "Heute sagt der Dombaumeister einen Satz, den alle Kölner kennen: «Der Dom wird erst fertig, wenn die Welt untergeht. Bis dahin reparieren wir. Das ist kein Problem — das ist der Plan.»",
      es: "Hoy el maestro de obras de la catedral dice una frase que todos los colonienses conocen: «La catedral solo estará terminada cuando acabe el mundo. Hasta entonces reparamos. No es un problema — es el plan.»" },
    ],
    words: [
      { it: "der Dom", es: "la catedral" },
      { it: "die Baustelle", es: "la obra, el solar" },
      { it: "die Turmspitze", es: "la aguja (de la torre)" },
      { it: "der Dombaumeister", es: "el maestro de obras de la catedral" },
      { it: "das Denkmalamt", es: "la oficina de monumentos" },
      { it: "untergehen", es: "hundirse, acabarse (el mundo)" },
    ],
    questions: [
      { q: "¿Cuándo empezó la obra y con qué plan?", options: ["1248: die größte Kirche der Welt im Stil der neuen französischen Kathedralen", "1348: eine kleine Kapelle", "1548: ein Rathaus", "1880: ein Museum"], answer: 0, why: "«Im Jahr 1248 begann der Bau… die größte Kirche der Welt, im Stil der neuen französischen Kathedralen.»" },
      { q: "¿Cómo quedó la catedral durante trescientos años?", options: ["Fertig und schön", "Ohne Turmspitzen — wie ein Satz ohne Punkt", "Als Ruine", "Als Marktplatz"], answer: 1, why: "«Dreihundert Jahre stand der Dom ohne Turmspitzen da, wie ein Satz ohne Punkt.»" },
      { q: "¿Qué la terminó en el siglo diecinueve?", options: ["Ein Wunder", "Romantik, Nationalstolz und neue Technik — 1880 war er «fertig»", "Ein König aus Frankreich", "Die Kirche alone"], answer: 1, why: "«Im neunzehnten Jahrhundert wachte die Stadt auf. Romantik, Nationalstolz, neue Technik: 1880 war der Dom “fertig” — mit Anführungsstrichen.»" },
      { q: "¿Qué dice hoy el Dombaumeister?", options: ["«Der Dom wird erst fertig, wenn die Welt untergeht. Bis dahin reparieren wir. Das ist der Plan.»", "«Wir schließen den Dom.»", "«Alles ist perfekt.»", "«Die Reparaturen enden 2030.»"], answer: 0, why: "«Das ist kein Problem — das ist der Plan.»" },
    ],
    discuss: [
      { it: "«Fertig mit Anführungsstrichen»: Was ist in Ihrer Stadt «fertig» — aber eigentlich nicht? Erzählen Sie.", es: "«Terminada entre comillas»: ¿qué hay en tu ciudad «terminado» — pero en realidad no? Cuenta." },
      { it: "600 Jahre Baustelle: Geduld oder Chaos? Wie geduldig sind Sie?", es: "600 años de obra: ¿paciencia o caos? ¿Qué tan paciente eres?" },
    ],
  },

  /* ═══ A2 · 2 — Technologie ═══ */
  {
    id: "de-news-a2-02", cat: "tecnologia", level: "A2", place: "Dresden", minutes: 3,
    title: "Chips aus Dresden: Sand wird Industrie",
    titleEs: "Chips de Dresde: la arena se vuelve industria",
    lead: {
      it: "In Dresden wird aus Sand das Gehirn Ihrer Maschinen. Die Stadt war einmal bekannt für Porzellan — jetzt für etwas Kleineres und Nervöseres.",
      es: "En Dresde la arena se convierte en el cerebro de tus máquinas. La ciudad fue conocida por su porcelana — ahora por algo más pequeño y más nervioso.",
    },
    paragraphs: [
      { it: "Vor dreißig Jahren war Dresdens Elektronik fast verschwunden. Dann kamen Investoren, Universitäten und ein neuer Satz: «Silizium Sachsen».",
      es: "Hace treinta años la electrónica de Dresde casi había desaparecido. Luego llegaron inversores, universidades y una nueva frase: «Sajonia del silicio»." },
      { it: "Heute arbeitet hier einer der wichtigsten Chip-Standorte Europas. Die Fabriken sind so sauber, dass die Arbeiter Astronauten-Kostüme tragen — um den Chip vor den Menschen zu schützen, nicht umgekehrt.",
      es: "Hoy funciona aquí uno de los polos de chips más importantes de Europa. Las fábricas son tan limpias que los obreros llevan trajes de astronauta — para proteger al chip de los humanos, no al revés." },
      { it: "Die Nähe ist das Geheimnis: Forschung, Fabrik und Zulieferer in einer Stadt. Wenn ein Problem auftritt, sitzen alle Beteiligten am selben Tisch — manchmal am selben Mittagessen.",
      es: "La cercanía es el secreto: investigación, fábrica y proveedores en una sola ciudad. Cuando surge un problema, todos los implicados se sientan a la misma mesa — a veces en el mismo almuerzo." },
      { it: "Ein Ingenieur sagt: «Ein Chip ist wie eine Stadt mit Millionen Einwohnern — geplant auf einem Blatt so groß wie ein Fingernagel. Dresden baut Städte. Früher aus Porzellan, heute aus Sand.»",
      es: "Un ingeniero dice: «Un chip es como una ciudad con millones de habitantes — planeada en una hoja del tamaño de una uña. Dresde construye ciudades. Antes de porcelana, hoy de arena.»" },
    ],
    words: [
      { it: "der Chip", es: "el chip" },
      { it: "das Silizium", es: "el silicio" },
      { it: "der Zulieferer", es: "el proveedor" },
      { it: "die Fabrik", es: "la fábrica" },
      { it: "nervös (im Sinne von: empfindlich)", es: "nervioso (aquí: delicado)" },
      { it: "der Fingernagel", es: "la uña" },
    ],
    questions: [
      { q: "¿Por qué era conocida Dresde antes y por qué ahora?", options: ["Für Autos; jetzt für Züge", "Für Porzellan; jetzt für Chips", "Für Bier; jetzt für Wein", "Für Musik; jetzt für Sport"], answer: 1, why: "«Die Stadt war einmal bekannt für Porzellan — jetzt für etwas Kleineres.»" },
      { q: "¿Cómo son las fábricas y qué llevan los obreros?", options: ["Schmutzig; normale Kleidung", "So sauber, dass die Arbeiter Astronauten-Kostüme tragen — um den Chip vor den Menschen zu schützen", "Offen; Besucher überall", "Klein; keine Maschinen"], answer: 1, why: "«Die Fabriken sind so sauber, dass die Arbeiter Astronauten-Kostüme tragen — um den Chip vor den Menschen zu schützen, nicht umgekehrt.»" },
      { q: "¿Cuál es el secreto del lugar?", options: ["Das Wetter", "Die Nähe: Forschung, Fabrik und Zulieferer in einer Stadt — alle am selben Tisch", "Der Hafen", "Die Größe"], answer: 1, why: "«Die Nähe ist das Geheimnis… Wenn ein Problem auftritt, sitzen alle Beteiligten am selben Tisch.»" },
      { q: "¿Qué dijo el ingeniero?", options: ["«Dresden baut Städte. Früher aus Porzellan, heute aus Sand.»", "«Chips sind einfach.»", "«Porzellan ist besser.»", "«Wir brauchen mehr Fabriken in Berlin.»"], answer: 0, why: "«Ein Chip ist wie eine Stadt mit Millionen Einwohnern… Dresden baut Städte. Früher aus Porzellan, heute aus Sand.»" },
    ],
    discuss: [
      { it: "Sand, Porzellan, Chips: Was «baut» Ihre Region? Erzählen Sie in einfachen Sätzen.", es: "Arena, porcelana, chips: ¿qué «construye» tu región? Cuenta en frases simples." },
      { it: "Alles am selben Tisch: Funktioniert das in Ihrer Branche? Beispiel, bitte.", es: "Todos a la misma mesa: ¿funciona en tu sector? Un ejemplo, por favor." },
    ],
  },

  /* ═══ A2 · 3 — Sport ═══ */
  {
    id: "de-news-a2-03", cat: "sport", level: "A2", place: "Dortmund", minutes: 3,
    title: "Der Verein: eine zweite Familie mit Statuten",
    titleEs: "El Verein: una segunda familia con estatutos",
    lead: {
      it: "In Deutschland gibt es mehr Vereinsmitglieder als Einwohner mancher Länder. Der Verein ist kein Hobby — er ist eine Art Parallelgesellschaft, geregelt wie ein Staat und gefühlt wie ein Wohnzimmer.",
      es: "En Alemania hay más socios de clubes que habitantes de algunos países. El Verein no es un hobby — es una especie de sociedad paralela, regulada como un estado y sentida como un salón de casa.",
    },
    paragraphs: [
      { it: "Das Prinzip ist alt und einfach: Leute, die etwas gemeinsam tun, gründen einen Verein mit Vorstand, Kasse und Protokoll. Sport, Musik, Kleingärten, Feuerwehr, Tauben — alles hat seinen Verein.",
      es: "El principio es antiguo y simple: gente que hace algo junta funda un club con junta directiva, caja y acta. Deporte, música, huertos, bomberos, palomas — todo tiene su club." },
      { it: "In Dortmund lebt das Prinzip im Fußball. Der BVB gehört (fast) seinen Fans; die Mitglieder wählen mit. Das ist in Europa selten — und in Dortmund Gesetz.",
      es: "En Dortmund el principio vive en el fútbol. El BVB pertenece (casi) a sus hinchas; los socios votan. Eso es raro en Europa — y en Dortmund, ley." },
      { it: "Die Sociologen sagen: Der Verein ist Deutschlands soziales Rückgrat. Er organisiert das Ehrenamt, das Feuerwehrfest, die Jugend — Dinge, die sonst niemand bezahlt.",
      es: "Los sociólogos dicen: el club es la columna social de Alemania. Organiza el voluntariado, la fiesta de los bomberos, la juventud — cosas que nadie más paga." },
      { it: "Ein Vorsitzender mit vierzig Jahren Dienst sagt: «Der Staat baut Straßen. Der Verein baut Menschen. Und die Straßen werden schlechter — die Leute nicht.»",
      es: "Un presidente con cuarenta años de servicio dice: «El estado construye carreteras. El club construye personas. Y las carreteras empeoran — las personas no.»" },
    ],
    words: [
      { it: "der Verein", es: "el club, la asociación" },
      { it: "der Vorstand", es: "la junta directiva" },
      { it: "die Kasse", es: "la caja (del club)" },
      { it: "das Ehrenamt", es: "el voluntariado" },
      { it: "das Rückgrat", es: "la columna vertebral" },
      { it: "die Satzung", es: "el estatuto" },
    ],
    questions: [
      { q: "¿Qué puede tener su propio Verein en Alemania?", options: ["Nur Fußball", "Sport, Musik, Kleingärten, Feuerwehr, Tauben — alles", "Nur Politik", "Nur Firmen"], answer: 1, why: "«Sport, Musik, Kleingärten, Feuerwehr, Tauben — alles hat seinen Verein.»" },
      { q: "¿Qué pasa con el BVB en Dortmund?", options: ["Er gehört einem Investor aus Übersee", "Er gehört (fast) seinen Fans; die Mitglieder wählen mit — in Dortmund Gesetz", "Er gehört der Stadt", "Er gehört den Spielern"], answer: 1, why: "«Der BVB gehört (fast) seinen Fans; die Mitglieder wählen mit. Das ist in Europa selten — und in Dortmund Gesetz.»" },
      { q: "¿Qué dicen los sociólogos que organiza el Verein?", options: ["Nur Partys", "Das Ehrenamt, das Feuerwehrfest, die Jugend — Dinge, die sonst niemand bezahlt", "Den Staatshaushalt", "Die Schulen"], answer: 1, why: "«Der Verein ist Deutschlands soziales Rückgrat. Er organisiert das Ehrenamt, das Feuerwehrfest, die Jugend.»" },
      { q: "¿Qué dijo el presidente de cuarenta años?", options: ["«Der Staat baut Straßen. Der Verein baut Menschen. Und die Straßen werden schlechter — die Leute nicht.»", "«Vereine sind überflüssig.»", "«Der Staat zahlt alles.»", "«Fußball ist das Wichtigste.»"], answer: 0, why: "«Der Verein baut Menschen. Und die Straßen werden schlechter — die Leute nicht.»" },
    ],
    discuss: [
      { it: "Gibt es «Vereine» in Ihrem Land? Wie heißen sie, was tun sie?", es: "¿Hay «Vereine» en tu país? ¿Cómo se llaman, qué hacen?" },
      { it: "«Der Verein baut Menschen»: Was hat Sie «gebaut» — ein Club, eine Familie, eine Straße? Erzählen Sie.", es: "«El club construye personas»: ¿qué te «construyó» a ti — un club, una familia, una calle? Cuenta." },
    ],
  },
];
