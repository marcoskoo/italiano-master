import type { CbClozeText } from "../../cambridge";

/* ═══ DE A1 · Cloze-Lesetexte — 3 pro Einheit (lexikalische Inferenz) ═
   Metodología v9.12: el texto en alemán lleva marcadores {1} {2} y
   siguientes que el reproductor convierte en huecos; el estudiante
   deduce la palabra por el contexto. Campos: `.it` = alemán (lengua de
   estudio), `.es` = español. Contextos alemanes: Berlín, Múnich,
   Hamburgo, Köln; Bäckerei, Wochenmarkt, DB, Biergarten, WG. */

export const DE_CLOZE_A1: Record<string, CbClozeText[]> = {
  "de-cu-a1-01": [
    {
      id: "cz-de-a1-01-1", title: "Die E-Mail an das Sprachcafé", titleEs: "El correo al Sprachcafé", minutes: 2,
      paragraphs: [
        { it: "Hallo! Ich heiße Anna und ich komme {1} Hamburg. Ich bin 30 Jahre alt und arbeite in einem Büro im Zentrum. Ich lerne Deutsch, weil mein Job das braucht. Ich liebe deutsches {2}: Brezeln sind mein Favorit!", es: "¡Hola! Me llamo Anna y vengo de Hamburgo. Tengo 30 años y trabajo en una oficina del centro. Aprendo alemán porque mi trabajo lo necesita. ¡Me encanta la comida alemana: los Brezeln son mis favoritos!" },
        { it: "Jeden Morgen trinke ich einen Kaffee und lese die Nachrichten. Am Abend sehe ich einen Film oder {3} mit meinen Freunden am Telefon. Ich bin ein sehr {4} Mensch: Ich rede gern mit jedem! Am Samstag gehe ich ins Sprachcafé und lerne dort neue {5} kennen.", es: "Cada mañana tomo un café y leo las noticias. Por la noche veo una película o hablo con mis amigos por teléfono. ¡Soy una persona muy abierta: me encanta charlar con todo el mundo! El sábado voy al Sprachcafé y allí conozco gente nueva." },
      ],
      gaps: [
        { options: ["aus", "in", "nach"], answer: 0, why: "«Ich komme aus + ciudad» indica el origen; in y nach expresan dirección o destino." },
        { options: ["Essen", "Autos", "Filme"], answer: 0, why: "«Brezeln sind mein Favorit»: los Brezeln son comida." },
        { options: ["spreche", "schlafe", "weine"], answer: 0, why: "Contraste con «sehe einen Film»: actividades de tarde con amigos al teléfono." },
        { options: ["offener", "müder", "schüchterner"], answer: 0, why: "«Ich rede gern mit jedem» define a una persona abierta." },
        { options: ["Leute", "Rechnungen", "Tiere"], answer: 0, why: "En el Sprachcafé se conoce gente nueva." },
      ],
    },
    {
      id: "cz-de-a1-01-2", title: "Zwei Studenten auf der Party", titleEs: "Dos estudiantes en la fiesta", minutes: 2,
      paragraphs: [
        { it: "Auf der Willkommensparty in Kreuzberg {1} Leo zu einer Studentin. Er sagt: «Hallo! Ich bin Leo. Ich komme aus München, aber ich {2} jetzt hier in Berlin.» Die Studentin lächelt: «Schön, dich kennenzulernen! Ich bin Emma.»", es: "En la fiesta de bienvenida de Kreuzberg, Leo se acerca a una estudiante. Dice: «¡Hola! Soy Leo. Vengo de Múnich, pero vivo ahora aquí en Berlín.» La estudiante sonríe: «¡Encantada de conocerte! Soy Emma.»" },
        { it: "Sie sprechen über ihre Kurse. Leo studiert {3}; Emma studiert Kunst. Sie sind beide {4} Studenten an der Uni. «Bis Mittwoch im Sprachcafé!», sagt Emma. «Bis dann!», {5} Leo, glücklich.", es: "Hablan de sus cursos. Leo estudia Economía; Emma estudia Arte. Los dos son estudiantes nuevos en la universidad. «¡Hasta el miércoles en el Sprachcafé!», dice Emma. «¡Hasta entonces!», responde Leo, feliz." },
      ],
      gaps: [
        { options: ["geht", "rennt weg", "fällt um"], answer: 0, why: "Para presentarse a alguien primero hay que acercarse a esa persona." },
        { options: ["wohne", "schreibe", "koche"], answer: 0, why: "Contraste con el origen: München frente a Berlin como lugar de residencia." },
        { options: ["Wirtschaft", "Fußball", "Pizza"], answer: 0, why: "Se estudian carreras; el fútbol y la pizza no son carreras." },
        { options: ["neue", "alte", "wütende"], answer: 0, why: "En una fiesta de bienvenida los estudiantes son nuevos." },
        { options: ["antwortet", "fragt", "singt"], answer: 0, why: "Leo responde al saludo de despedida de Emma." },
      ],
    },
    {
      id: "cz-de-a1-01-3", title: "Woher kommst du?", titleEs: "¿De dónde eres?", minutes: 2,
      paragraphs: [
        { it: "Sofía kommt aus Mexiko, aber sie wohnt jetzt in {1}. Alle im Sprachcafé fragen: «Woher kommst du?» Sie antwortet: «Ich bin Mexikanerin, aus Mexiko-Stadt.» Ihre Muttersprache ist {2}, aber sie spricht auch ein wenig Deutsch.", es: "Sofía viene de México, pero vive ahora en Alemania. Todos en el Sprachcafé preguntan: «¿De dónde eres?» Ella responde: «Soy mexicana, de la Ciudad de México.» Su lengua materna es el español, pero también habla un poco de alemán." },
        { it: "In ihrem Deutschkurs sitzen Studenten aus vielen Ländern. Der Lehrer ist {3} und heißt Herr Bauer. Der Kurs macht {4}, und alle lernen gern. Am Ende sagt Herr Bauer: «Deutsch öffnet {5}.»", es: "En su curso de alemán se sientan estudiantes de muchos países. El profesor es alemán y se llama señor Bauer. El curso es divertido y todos aprenden con gusto. Al final, el señor Bauer dice: «El alemán abre puertas.»" },
      ],
      gaps: [
        { options: ["Deutschland", "Mexiko", "Spanien"], answer: 0, why: "Contraste entre «kommt aus Mexiko» y «wohnt jetzt in»: vive en el país del curso." },
        { options: ["Spanisch", "Deutsch", "Chinesisch"], answer: 0, why: "Es mexicana: su lengua materna es el español." },
        { options: ["Deutscher", "Spanier", "Kanadier"], answer: 0, why: "Da clase de alemán en Alemania y se apellida Bauer: es alemán." },
        { options: ["Spaß", "Angst", "Pause"], answer: 0, why: "«Alle lernen gern» apunta a que el curso divierte." },
        { options: ["Türen", "Fenster", "Autos"], answer: 0, why: "Metáfora fija: «Türen öffnen» = abrir puertas, oportunidades." },
      ],
    },
  ],

  "de-cu-a1-02": [
    {
      id: "cz-de-a1-02-1", title: "Eine große Familie", titleEs: "Una familia grande", minutes: 2,
      paragraphs: [
        { it: "Meine Familie ist groß: meine Eltern, meine zwei Schwestern und ich. Mein Vater heißt Carlos. Er ist {1} in einem Krankenhaus in Köln. Meine Mutter ist Lehrerin; sie {2} Ana.", es: "Mi familia es grande: mis padres, mis dos hermanas y yo. Mi padre se llama Carlos. Es enfermero en un hospital de Colonia. Mi madre es profesora; se llama Ana." },
        { it: "Meine Schwestern sind Studentinnen. Sie heißen Daniela und Valeria. Wir haben auch eine Katze: Ihr {3} ist Luna. Bei uns sind {4} auch Familie! Sonntags frühstücken wir alle {5} und reden stundenlang.", es: "Mis hermanas son estudiantes. Se llaman Daniela y Valeria. También tenemos una gata: se llama Luna. ¡En casa las mascotas también son familia! Los domingos desayunamos todos juntos y charlamos durante horas." },
      ],
      gaps: [
        { options: ["Krankenpfleger", "Schauspieler", "Kellner"], answer: 0, why: "Trabaja en un hospital: profesión sanitaria." },
        { options: ["heißt", "fährt", "kocht"], answer: 0, why: "«Sie ___ Ana»: se llama Ana." },
        { options: ["Name", "Preis", "Alter"], answer: 0, why: "«Ihr ___ ist Luna»: la gata se llama Luna." },
        { options: ["Haustiere", "Gäste", "Probleme"], answer: 0, why: "La gata también cuenta: las mascotas son familia." },
        { options: ["zusammen", "getrennt", "allein"], answer: 0, why: "Desayuno familiar del domingo: todos juntos." },
      ],
    },
    {
      id: "cz-de-a1-02-2", title: "Das Foto an der Wand", titleEs: "La foto en la pared", minutes: 3,
      paragraphs: [
        { it: "Im Wohnzimmer hängt ein altes {1} von der Hochzeit meiner Großeltern. Meine Oma trägt ein weißes Kleid und mein Opa einen {2}. Sie sehen so jung aus!", es: "En el salón cuelga una foto vieja de la boda de mis abuelos. Mi abuela viste un vestido blanco y mi abuelo, un traje. ¡Se ven tan jóvenes!" },
        { it: "Neben dem Foto gibt es ein Bild von meinen Eltern aus den 90ern. Mama hat lange Haare und Papa einen {3}. Dahinter steht ein altes Auto. Die {4} ändern sich! Mein kleiner Bruder sieht meinem Vater ähnlich: gleiche Augen, gleiches {5}. «Du bist eine Kopie von Papa!», sagt Mama.", es: "Junto a la foto hay una imagen de mis padres de los años noventa. Mamá lleva el pelo largo y papá, bigote. Detrás hay un coche viejo. ¡Los tiempos cambian! Mi hermano pequeño se parece a mi padre: mismos ojos, misma sonrisa. «Eres una copia de papá», dice mamá." },
      ],
      gaps: [
        { options: ["Foto", "Lied", "Buch"], answer: 0, why: "Cuelga en la pared y muestra la boda: una foto." },
        { options: ["Anzug", "Badehose", "Turnschuhe"], answer: 0, why: "En una boda formal se lleva traje." },
        { options: ["Bart", "Fahrrad", "Koffer"], answer: 0, why: "Es un rasgo facial de moda en los años noventa." },
        { options: ["Zeiten", "Preise", "Wetter"], answer: 0, why: "«Die Zeiten ändern sich»: los tiempos cambian." },
        { options: ["Lächeln", "Beruf", "Adresse"], answer: 0, why: "«Gleiche Augen, gleiches ___»: rasgo compartido en la foto." },
      ],
    },
    {
      id: "cz-de-a1-02-3", title: "Der Videoanruf am Sonntag", titleEs: "La videollamada del domingo", minutes: 2,
      paragraphs: [
        { it: "Sonntagabend: Familien-{1} mit Oma in Madrid über den Bildschirm. Meine Oma stellt hundert Fragen: «Isst du auch {2}? Und schmeckt dir die Stadt?» Ich antworte auf alles mit Ja.", es: "Domingo por la noche: videollamada familiar con la abuela en Madrid a través de la pantalla. Mi abuela hace cien preguntas: «¿Comes bien también? ¿Y te gusta la ciudad?» Respondo que sí a todo." },
        { it: "Mein Onkel erzählt wie immer dieselbe {3}, und alle lachen. Mein Cousin zeigt sein neues {4}. Nach einer Stunde sagt Oma: «Ich hab dich lieb. Komm bald {5}!» — «Ich verspreche es, Oma.»", es: "Mi tío cuenta, como siempre, la misma anécdota, y todos se ríen. Mi primo enseña su tatuaje nuevo. Tras una hora, la abuela dice: «Te quiero. ¡Ven pronto a casa!» — «Te lo prometo, abuela.»" },
      ],
      gaps: [
        { options: ["Videoanruf", "Wettbewerb", "Ausflug"], answer: 0, why: "Pantalla + llamada del domingo en familia: videollamada." },
        { options: ["gut", "schnell", "laut"], answer: 0, why: "Las abuelas preguntan si comes bien." },
        { options: ["Anekdote", "Annonce", "Adresse"], answer: 0, why: "«Wie immer dieselbe ___ und todos se ríen»: relato corto y divertido; die Anekdote (die Annonce sería un anuncio de periódico)." },
        { options: ["Tattoo", "Gesetz", "Steuern"], answer: 0, why: "Los primos jóvenes presumen de tatuajes nuevos." },
        { options: ["nach Hause", "in die Schule", "zur Arbeit"], answer: 0, why: "La abuela quiere que vuelvas a casa." },
      ],
    },
  ],

  "de-cu-a1-03": [
    {
      id: "cz-de-a1-03-1", title: "Der Morgen im Café", titleEs: "La mañana en el café", minutes: 2,
      paragraphs: [
        { it: "Sonntagmorgen in Prenzlauer Berg. Ich treffe mich mit Anna zum {1}. Die Kellnerin fragt: «Was nehmen Sie?» Ich nehme einen {2} — schwarz, ohne Zucker — und ein Brötchen mit Käse. Anna nimmt einen Tee mit Milch.", es: "Domingo por la mañana en Prenzlauer Berg. Quedo con Anna para desayunar. La camarera pregunta: «¿Qué va a tomar?» Tomo un café — negro, sin azúcar — y un panecillo con queso. Anna toma un té con leche." },
        { it: "Die Kellnerin fragt: «Sonst noch {3}?» — «Nein, danke. Das ist alles.» Am Ende sage ich: «Die {4}, bitte.» Anna und ich zahlen {5}: Jeder zahlt seine eigene Rechnung. Das ist in Berlin völlig normal.", es: "La camarera pregunta: «¿Algo más?» — «No, gracias. Es todo.» Al final digo: «La cuenta, por favor.» Anna y yo pagamos por separado: cada uno paga su propia cuenta. En Berlín es completamente normal." },
      ],
      gaps: [
        { options: ["Frühstück", "Umzug", "Feierabend"], answer: 0, why: "Quedada dominical por la mañana en un café de barrio: desayuno." },
        { options: ["Kaffee", "Tee", "Saft"], answer: 0, why: "«Schwarz, ohne Zucker» apunta al café." },
        { options: ["etwas", "alles", "nichts"], answer: 0, why: "«Sonst noch etwas?» = ¿algo más?, la pregunta clásica del servicio." },
        { options: ["Rechnung", "Speisekarte", "Quittung"], answer: 0, why: "Al final de la comida se pide la cuenta (die Rechnung)." },
        { options: ["getrennt", "zusammen", "gar nicht"], answer: 0, why: "«Jeder zahlt seine eigene Rechnung» = pagar por separado." },
      ],
    },
    {
      id: "cz-de-a1-03-2", title: "Zusammen oder getrennt?", titleEs: "¿Juntos o por separado?", minutes: 3,
      paragraphs: [
        { it: "Nach dem Deutschkurs gehen wir zu viert in ein Café in Friedrichshain. Wir setzen uns an den {1} am Fenster. Die Kellnerin bringt die Karte, und jeder bestellt: Kaffee, Tee, Apfelschorle und ein Stück {2}.", es: "Después del curso de alemán vamos los cuatro a un café de Friedrichshain. Nos sentamos en la mesa de la ventana. La camarera trae la carta y cada uno pide: café, té, refresco de manzana y un trozo de tarta." },
        { it: "Beim Zahlen fragt die Kellnerin: «Zusammen oder {3}?» Timo sagt: «Heute ist mein {4} — ich lade ein!» Wir sagen danke und genießen unseren Kaffee. Beim Gehen sagt Lena: «Das war ein schöner {5}!»", es: "Al pagar, la camarera pregunta: «¿Juntos o por separado?» Timo dice: «Hoy es mi cumpleaños: ¡invito yo!» Damos las gracias y disfrutamos el café. Al irnos, Lena dice: «¡Ha sido una tarde estupenda!»" },
      ],
      gaps: [
        { options: ["Tisch", "Baum", "Dach"], answer: 0, why: "En un café uno se sienta a una mesa; «am Fenster» la ubica." },
        { options: ["Kuchen", "Käse", "Brot"], answer: 0, why: "La costumbre alemana «Kaffee und Kuchen»: se pide un trozo de tarta." },
        { options: ["getrennt", "zusammen", "später"], answer: 0, why: "La gran alternativa alemana al pagar: juntos o por separado." },
        { options: ["Geburtstag", "Unfall", "Feiertag"], answer: 0, why: "Si invita él a todos, hay celebración: su cumpleaños." },
        { options: ["Nachmittag", "Montag", "Winter"], answer: 0, why: "El «Kaffee und Kuchen» es ritual de la tarde; Lena resume el día." },
      ],
    },
    {
      id: "cz-de-a1-03-3", title: "In der Bäckerei", titleEs: "En la panadería", minutes: 2,
      paragraphs: [
        { it: "Sonntagmorgen, halb acht. Vor der Bäckerei in Prenzlauer Berg steht eine lange {1}. Die Deutschen lieben ihre Sonntagsbrötchen! Die Verkäuferin fragt freundlich: «Was darf es {2} noch sein?» Ich sage: «Sechs Brötchen, bitte.»", es: "Domingo por la mañana, las siete y media. Delante de la panadería de Prenzlauer Berg hay una cola larga. ¡Los alemanes aman sus panecillos del domingo! La vendedora pregunta amable: «¿Qué le pongo más?» Yo digo: «Seis panecillos, por favor.»" },
        { it: "«Sonst noch etwas?» — «Ja, einen Kaffee zum {3}, bitte.» Die Brötchen sind noch {4}, direkt aus dem Ofen. Zu Hause frühstücken wir gemeinsam. Mein Mitbewohner Timo sagt: «Deutsche Brötchen sind einfach {5}.»", es: "«¿Algo más?» — «Sí, un café para llevar, por favor.» Los panecillos aún están calientes, recién salidos del horno. En casa desayunamos juntos. Mi compañero de piso, Timo, dice: «Los panecillos alemanes están buenísimos.»" },
      ],
      gaps: [
        { options: ["Schlange", "Mauer", "Tafel"], answer: 0, why: "Mucha gente esperando la apertura: se hace cola (Schlange stehen)." },
        { options: ["sonst", "nie", "gleich"], answer: 0, why: "Frase fija de la panadería: «Was darf es sonst noch sein?»" },
        { options: ["Mitnehmen", "Hierbleiben", "Ausruhen"], answer: 0, why: "«Zum Mitnehmen» = para llevar." },
        { options: ["warm", "kalt", "hart"], answer: 0, why: "«Direkt aus dem Ofen»: recién hechos, calientes." },
        { options: ["lecker", "teuer", "schwer"], answer: 0, why: "Timo los disfruta: están ricos." },
      ],
    },
  ],

  "de-cu-a1-04": [
    {
      id: "cz-de-a1-04-1", title: "Der Weg zum Brandenburger Tor", titleEs: "El camino a la Puerta de Brandeburgo", minutes: 2,
      paragraphs: [
        { it: "Ich steige in Friedrichstraße aus der U-Bahn aus und bin sofort {1}. Wo ist der Ausgang? Ein älterer Herr wartet am {2}. Ich frage: «Entschuldigung, wie komme ich zum Brandenburger Tor?»", es: "Salgo del metro en Friedrichstraße y enseguida estoy desorientado. ¿Dónde está la salida? Un señor mayor espera en el semáforo. Pregunto: «Disculpe, ¿cómo llego a la Puerta de Brandeburgo?»" },
        { it: "Er sagt: «Gehen Sie {3}, dann die zweite Straße links.» — «Ist es weit von hier?» — «Nein, nur fünf Minuten zu {4}. Es gibt dort auch einen schönen Park.» — «Vielen {5}!» sage ich und gehe los.", es: "Él dice: «Siga recto, luego la segunda calle a la izquierda.» — «¿Está lejos de aquí?» — «No, solo cinco minutos a pie. Allí hay también un parque bonito.» — «¡Muchas gracias!», digo, y me marcho contento." },
      ],
      gaps: [
        { options: ["verwirrt", "glücklich", "satt"], answer: 0, why: "No encuentra la salida: está desorientado." },
        { options: ["Ampel", "Fenster", "Kino"], answer: 0, why: "El señor espera en el semáforo para poder cruzar." },
        { options: ["geradeaus", "rückwärts", "im Kreis"], answer: 0, why: "Instrucción clásica de dirección: seguir recto." },
        { options: ["Fuß", "Auto", "Zug"], answer: 0, why: "Cinco minutos andando: zu Fuß." },
        { options: ["Dank", "Preis", "Grüße"], answer: 0, why: "Fórmula fija de agradecimiento: «Vielen Dank!»" },
      ],
    },
    {
      id: "cz-de-a1-04-2", title: "Die Stadtführung", titleEs: "La visita guiada", minutes: 3,
      paragraphs: [
        { it: "Am Samstag mache ich eine Stadtführung durch Berlin-Mitte. Die Führerin heißt Frau Klein. Wir starten am {1} vor dem Brandenburger Tor. Sie erklärt: «Es gibt hier viele {2}: das Reichstagsgebäude, den Gendarmenmarkt und das Museum am Checkpoint Charlie.»", es: "El sábado hago una visita guiada por Berlín-Mitte. La guía se llama señora Klein. Empezamos en el punto de encuentro delante de la Puerta de Brandeburgo. Ella explica: «Aquí hay muchos lugares de interés: el edificio del Reichstag, el Gendarmenmarkt y el museo del Checkpoint Charlie.»" },
        { it: "Wir gehen zu Fuß, denn alles ist {3}. Frau Klein zeigt uns die {4}: Dort war früher die Grenze zwischen Ost und West. Am Ende sagt sie: «Es gibt in Berlin noch viel mehr zu {5}. Kommen Sie wieder!»", es: "Vamos a pie, porque todo está cerca. La señora Klein nos enseña el Muro: allí estaba antes la frontera entre el Este y el Oeste. Al final dice: «En Berlín hay mucho más por descubrir. ¡Vuelvan cuando quieran!»" },
      ],
      gaps: [
        { options: ["Treffpunkt", "Supermarkt", "Flughafen"], answer: 0, why: "Una visita guiada empieza en un punto de encuentro." },
        { options: ["Sehenswürdigkeiten", "Ampeln", "Bäckereien"], answer: 0, why: "Se nombran edificios famosos: lugares de interés." },
        { options: ["nah", "teuer", "geschlossen"], answer: 0, why: "Vamos andando: todo está cerca." },
        { options: ["Mauer", "Turm", "Brücke"], answer: 0, why: "La frontera entre Este y Oeste era el Muro de Berlín." },
        { options: ["entdecken", "bezahlen", "schlafen"], answer: 0, why: "La invitación final: queda mucho por descubrir." },
      ],
    },
    {
      id: "cz-de-a1-04-3", title: "Am Empfang des Hotels", titleEs: "En la recepción del hotel", minutes: 2,
      paragraphs: [
        { it: "Ich wohne in einem Hotel in Berlin-Mitte. Mein Kopf tut weh, also frage ich am Empfang: «Gibt es hier eine {1}?» Der Mann sagt: «Ja. Gegenüber dem Hotel gibt es eine Bank, und {2} der Bank ist die Apotheke.»", es: "Me alojo en un hotel de Berlín-Mitte. Me duele la cabeza, así que pregunto en recepción: «¿Hay una farmacia por aquí?» El hombre dice: «Sí. Enfrente del hotel hay un banco, y al lado del banco está la farmacia.»" },
        { it: "Am Abend will ich essen. Der Mann empfiehlt ein Restaurant: «Gehen Sie hier {3}, dann die erste Straße rechts. Es gibt dort eine gute {4} mit bayerischem Essen.» Am Morgen frage ich nach dem Bus. «Der Bus hält direkt {5} dem Hotel. Gute Reise!»", es: "Por la noche quiero cenar. El hombre recomienda un restaurante: «Siga aquí recto, luego la primera calle a la derecha. Allí hay una buena cocina bávara.» Por la mañana pregunto por el autobús. «El autobús para justo delante del hotel. ¡Buen viaje!»" },
      ],
      gaps: [
        { options: ["Apotheke", "Werkstatt", "Schule"], answer: 0, why: "Le duele la cabeza: necesita una farmacia." },
        { options: ["neben", "ohne", "wegen"], answer: 0, why: "La farmacia está al lado del banco (neben + dativo)." },
        { options: ["geradeaus", "nach Hause", "ins Bett"], answer: 0, why: "Dirección que da el recepcionista: seguir recto." },
        { options: ["Küche", "Schule", "Kirche"], answer: 0, why: "Restaurante con comida bávara: cocina." },
        { options: ["vor", "zwischen", "trotz"], answer: 0, why: "El bus para justo delante (vor + dativo)." },
      ],
    },
  ],

  "de-cu-a1-05": [
    {
      id: "cz-de-a1-05-1", title: "Auf dem Wochenmarkt", titleEs: "En el mercado semanal", minutes: 2,
      paragraphs: [
        { it: "Samstagmorgen auf dem Wochenmarkt. Frau Weber hat den schönsten Stand mit {1} aus dem Alten Land. Sie sagt: «Guten Morgen! Die sind heute frisch vom {2}, süß und knackig.»", es: "Sábado por la mañana en el mercado semanal. La señora Weber tiene el puesto más bonito, con manzanas de El Alte Land. Dice: «¡Buenos días! Están hoy recién traídas del árbol, dulces y crujientes.»" },
        { it: "Ich frage: «Was kostet ein {3}?» — «Zwei Euro fünfzig.» — «Gut, ich nehme ein Kilo, bitte.» Sie wiegt die Äpfel ab: «Das macht zwei Euro {4}.» Ich zahle mit {5}, denn kleines Geld habe ich nicht dabei.", es: "Pregunto: «¿Cuánto cuesta el kilo?» — «Dos euros cincuenta.» — «Bien, me llevo un kilo, por favor.» Ella pesa las manzanas: «Son dos euros cincuenta.» Pago con tarjeta, porque no llevo suelto encima." },
      ],
      gaps: [
        { options: ["Äpfeln", "Autos", "Schuhen"], answer: 0, why: "El Alte Land es la región famosa por sus manzanas; es su producto estrella." },
        { options: ["Baum", "Dach", "Tisch"], answer: 0, why: "Manzanas recién recogidas: frescas del árbol." },
        { options: ["Kilo", "Stück", "Liter"], answer: 0, why: "La fruta se vende por kilos." },
        { options: ["fünfzig", "tausend", "zwanzig"], answer: 0, why: "El precio del kilo era 2,50: el total coincide." },
        { options: ["Karte", "Katze", "Kasse"], answer: 0, why: "No lleva suelto: paga con tarjeta (die Karte)." },
      ],
    },
    {
      id: "cz-de-a1-05-2", title: "Der erste Einkauf", titleEs: "La primera compra", minutes: 3,
      paragraphs: [
        { it: "Mein erster Einkauf im deutschen Supermarkt. Ich brauche Wasser, Brot und Milch. Am Wasserregal sehe ich ein {1}: nur 0,19 Euro pro Flasche! Aber unten steht noch: plus {2}, 25 Cent. So lernen Ausländer das deutsche System.", es: "Mi primera compra en un supermercado alemán. Necesito agua, pan y leche. En el estante del agua veo un cartel de precio: ¡solo 0,19 euros por botella! Pero abajo pone además: más Pfand, 25 céntimos. Así aprenden los extranjeros el sistema alemán." },
        { it: "An der Kasse frage ich: «Wo kann ich die {3} Flaschen zurückgeben?» Die Kassiererin zeigt mir den {4} an der Wand. Ich werfe die Flaschen ein, und der Automat druckt meinen {5}: 1,50 Euro Pfand zurück!", es: "En la caja pregunto: «¿Dónde puedo devolver las botellas vacías?» La cajera me señala la máquina de la pared. Meto las botellas y la máquina imprime mi recibo: ¡1,50 euros de Pfand de vuelta!" },
      ],
      gaps: [
        { options: ["Preisschild", "Verkehrsschild", "Fahrrad"], answer: 0, why: "En el estante: el cartel con el precio por botella." },
        { options: ["Pfand", "Preis", "Zins"], answer: 0, why: "El famoso sistema alemán del depósito: 25 céntimos extra por botella, recuperables." },
        { options: ["leeren", "vollen", "roten"], answer: 0, why: "Para recuperar el Pfand se devuelven las botellas VACÍAS." },
        { options: ["Automaten", "Ofen", "Spiegel"], answer: 0, why: "La máquina de la pared: allí se devuelven las botellas." },
        { options: ["Bon", "Lohn", "Roman"], answer: 0, why: "La máquina imprime un recibo (der Bon) con el Pfand." },
      ],
    },
    {
      id: "cz-de-a1-05-3", title: "An der Kasse", titleEs: "En la caja", minutes: 2,
      paragraphs: [
        { it: "Samstag im Supermarkt: lange {1} an der Kasse. Die Frau vor mir hat einen vollen {2} — Brot, Obst, Wasser, alles für die ganze Woche.", es: "Sábado en el supermercado: cola larga en la caja. La mujer delante de mí tiene un carrito lleno: pan, fruta, agua, todo para la semana entera." },
        { it: "Die Kassiererin scannt alles: «Zwölf Euro fünfzig plus vier Euro achtzig. Das macht {3} Euro dreißig.» Ich zahle mit einem Zwanzigschein und bekomme {4} zurück. «Sonst noch etwas?» — «Nein, danke. Schönen {5} noch!»", es: "La cajera lo escanea todo: «Doce euros cincuenta más cuatro euros ochenta. Son diecisiete euros treinta.» Pago con un billete de veinte y recibo el cambio. «¿Algo más?» — «No, gracias. ¡Que pase un buen día!»" },
      ],
      gaps: [
        { options: ["Schlange", "Sonne", "Musik"], answer: 0, why: "Sábado con mucha gente: cola en la caja." },
        { options: ["Wagen", "Regenschirm", "Hund"], answer: 0, why: "Lleno de productos: el carrito de la compra." },
        { options: ["siebzehn", "zwölf", "vier"], answer: 0, why: "12,50 + 4,80 = 17,30: la suma del total." },
        { options: ["Geld", "Brot", "Zeit"], answer: 0, why: "Paga con un billete grande: recibe el cambio." },
        { options: ["Tag", "Sturm", "Film"], answer: 0, why: "Despedida fija alemana: «Schönen Tag noch!»" },
      ],
    },
  ],

  "de-cu-a1-06": [
    {
      id: "cz-de-a1-06-1", title: "Der Morgen von Timo", titleEs: "La mañana de Timo", minutes: 3,
      paragraphs: [
        { it: "Timo wohnt in München und studiert Wirtschaft. Er steht um halb {1} auf — also um 6:30 Uhr. Er duscht, zieht sich an und frühstückt in der {2} mit seinen Mitbewohnern.", es: "Timo vive en Múnich y estudia Economía. Se levanta a las seis y media, es decir, a las 6:30. Se ducha, se viste y desayuna en la cocina con sus compañeros de piso." },
        { it: "Um Viertel vor acht fährt er mit der {3} zur Uni. Die Vorlesung beginnt um neun {4}. Um zwölf Uhr geht er in die {5} und isst mit Freunden. Das Essen dort ist billig und gut.", es: "A las siete y cuarto coge el S-Bahn hacia la universidad. La clase magistral empieza a las nueve en punto. A las doce va al comedor universitario y come con amigos. La comida allí es barata y buena." },
      ],
      gaps: [
        { options: ["sieben", "acht", "neun"], answer: 0, why: "«Also um 6:30 Uhr» explica halb sieben: media hora menos para las siete." },
        { options: ["Küche", "Badewanne", "Straße"], answer: 0, why: "Se desayuna en la cocina, junto a los compañeros de piso." },
        { options: ["S-Bahn", "Waschmaschine", "Leiter"], answer: 0, why: "Va a la universidad en el tren urbano de Múnich." },
        { options: ["Uhr", "Minuten", "Tage"], answer: 0, why: "«Um neun Uhr»: la hora oficial alemana lleva Uhr." },
        { options: ["Mensa", "Turnhalle", "Bibliothek"], answer: 0, why: "El comedor universitario barato: la Mensa." },
      ],
    },
    {
      id: "cz-de-a1-06-2", title: "Frühaufsteher oder Nachtmensch?", titleEs: "¿Madrugador o noctámbulo?", minutes: 2,
      paragraphs: [
        { it: "In Deutschland fragt man: «Bist du ein {1} oder ein Nachtmensch?» Frühaufsteher lieben den Morgen. Nachtmenschen lieben die {2}. Mein Mitbewohner ist ein Nachtmensch: Am Wochenende steht er erst um zwölf auf.", es: "En Alemania preguntan: «¿Eres madrugador o noctámbulo?» Los madrugadores aman la mañana. Los noctámbulos aman la noche. Mi compañero de piso es noctámbulo: el fin de semana no se levanta hasta las doce." },
        { it: "Ich bin ein Frühaufsteher. Ich lerne um sechs Uhr, wenn die Wohnung noch {3} ist. «Wie machst du das?», fragt er. «Mein Körper kennt meinen {4}», sage ich. «Meiner kennt nur das {5}!», lacht er.", es: "Yo soy madrugador. Estudio a las seis, cuando el piso todavía está en silencio. «¿Cómo lo haces?», pregunta. «Mi cuerpo conoce mi horario», digo. «¡El mío solo conoce el sofá!», ríe." },
      ],
      gaps: [
        { options: ["Frühaufsteher", "Frühstück", "Fahrer"], answer: 0, why: "Contraste con «Nachtmensch»: quien ama la mañana." },
        { options: ["Nacht", "Sonne", "Arbeit"], answer: 0, why: "El noctámbulo ama la noche." },
        { options: ["ruhig", "laut", "voll"], answer: 0, why: "A las seis de la mañana el piso está en silencio." },
        { options: ["Zeitplan", "Fernseher", "Kühlschrank"], answer: 0, why: "El cuerpo aprende el horario; la broma del sofá lo confirma." },
        { options: ["Sofa", "Kalender", "Wecker"], answer: 0, why: "La broma final: su cuerpo solo conoce el sofá." },
      ],
    },
    {
      id: "cz-de-a1-06-3", title: "Ein Tag an der Uni", titleEs: "Un día en la universidad", minutes: 2,
      paragraphs: [
        { it: "Mein Tag in München beginnt um 7 Uhr. Erst klingelt der {1}. Ich dusche und fahre dann mit dem Fahrrad zur Vorlesung. Um neun Uhr {2} die Vorlesung im großen Hörsaal.", es: "Mi día en Múnich empieza a las 7. Primero suena el despertador. Me ducho y luego voy en bici a la clase magistral. A las nueve empieza la clase en la gran aula." },
        { it: "Um {3} Uhr ist Mittagspause: Ich gehe in die Mensa. Nachmittags arbeite ich in der {4}: Bücher, Stille, Lernen. Am Abend koche ich zu Hause oder treffe Freunde. Um 23 Uhr bin ich müde und gehe ins {5}.", es: "A las doce es la pausa del mediodía: voy al comedor universitario. Por la tarde trabajo en la biblioteca: libros, silencio, estudio. Por la noche cocino en casa o veo amigos. A las 23 estoy cansado y me voy a la cama." },
      ],
      gaps: [
        { options: ["Wecker", "Anruf", "Tür"], answer: 0, why: "A las siete suena el despertador." },
        { options: ["beginnt", "endet", "kostet"], answer: 0, why: "La clase arranca a las nueve según el horario." },
        { options: ["zwölf", "drei", "zwanzig"], answer: 0, why: "La pausa del mediodía: a las doce." },
        { options: ["Bibliothek", "Kantine", "Garage"], answer: 0, why: "Libros y silencio: la biblioteca." },
        { options: ["Bett", "Kino", "Zug"], answer: 0, why: "Cansado a las 23: se va a la cama." },
      ],
    },
  ],

  "de-cu-a1-07": [
    {
      id: "cz-de-a1-07-1", title: "Der Sportverein", titleEs: "El club deportivo", minutes: 3,
      paragraphs: [
        { it: "In Deutschland gibt es für alles einen {1}: für Sport, für Musik, sogar für Brieftauben. Lena erzählt mir von ihrem Volleyballverein: «Wir trainieren jeden Samstag in der Halle. Der {2} ist streng, aber lustig.»", es: "En Alemania hay un club para todo: para el deporte, para la música, incluso para las palomas mensajeras. Lena me habla de su club de voleibol: «Entrenamos todos los sábados en el pabellón. El entrenador es exigente, pero divertido.»" },
        { it: "Ich sage: «Ich spiele gern Fußball, aber ich mache {3} Yoga.» Lena lächelt: «Am liebsten magst du {4}, oder? Mit der Kamera durch die Stadt!» Am Samstag komme ich zum ersten Mal mit. Das Training macht {5} — und die Gruppe ist super.", es: "Yo digo: «Me gusta jugar al fútbol, pero prefiero hacer yoga.» Lena sonríe: «Lo que más te gusta es la fotografía, ¿verdad? ¡Con la cámara por la ciudad!» El sábado me apunto por primera vez. El entrenamiento divierte, y el grupo es genial." },
      ],
      gaps: [
        { options: ["Verein", "Supermarkt", "Flughafen"], answer: 0, why: "La institución alemana del asociacionismo: el Verein." },
        { options: ["Trainer", "Kellner", "Pilot"], answer: 0, why: "Quien dirige el entrenamiento en la Halle: el entrenador." },
        { options: ["lieber", "gern", "am liebsten"], answer: 0, why: "Contraste con el fútbol: prefiere yoga → lieber." },
        { options: ["Fotografie", "Chemie", "Angeln"], answer: 0, why: "«Mit der Kamera durch die Stadt»: la fotografía." },
        { options: ["Spaß", "Angst", "Sorgen"], answer: 0, why: "Volverá y el grupo es genial: entrena con gusto." },
      ],
    },
    {
      id: "cz-de-a1-07-2", title: "Was machst du am Wochenende?", titleEs: "¿Qué haces el fin de semana?", minutes: 2,
      paragraphs: [
        { it: "Am Freitag fragt Lena: «Was machst du am {1}?» Ich sage: «Nichts Besonderes.» Lena lächelt: «Wir gehen am Sonntag wandern im Grunewald. Kommst du {2}? Der Wald ist toll, und wir sind eine nette Gruppe.»", es: "El viernes Lena pregunta: «¿Qué haces el fin de semana?» Digo: «Nada en especial.» Lena sonríe: «El domingo vamos de senderismo al bosque de Grunewald. ¿Te apuntas? El bosque es genial y somos un grupo agradable.»" },
        { it: "«Ja, ich komme gern mit! Wandern ist {3}.» Am Sonntag früh stehen wir um acht Uhr auf und fahren mit der {4} zum Wald. Im Wald ist die Luft {5}. Wir gehen langsam und reden viel. Lena sagt: «Wandern ist mein liebstes Hobby.»", es: "«¡Sí, me apunto encantado! Andar es saludable.» El domingo temprano nos levantamos a las ocho y vamos en S-Bahn al bosque. En el bosque el aire está fresco. Caminamos despacio y charlamos mucho. Lena dice: «El senderismo es mi afición favorita.»" },
      ],
      gaps: [
        { options: ["Wochenende", "Montag", "Frühstück"], answer: 0, why: "La pregunta clásica del viernes: planes del fin de semana." },
        { options: ["mit", "weg", "heim"], answer: 0, why: "«Kommst du mit?» = ¿te apuntas al plan?" },
        { options: ["gesund", "teuer", "verboten"], answer: 0, why: "Caminar en la naturaleza: saludable." },
        { options: ["S-Bahn", "Bohrmaschine", "Waschmaschine"], answer: 0, why: "Excursión desde Berlín: el tren urbano." },
        { options: ["frisch", "alt", "teuer"], answer: 0, why: "Bosque por la mañana: aire fresco." },
      ],
    },
    {
      id: "cz-de-a1-07-3", title: "Ein neues Hobby", titleEs: "Un pasatiempo nuevo", minutes: 3,
      paragraphs: [
        { it: "Im Winter suche ich ein neues {1}: etwas für Körper und Kopf. Ein Freund nimmt mich mit in die Kletterhalle. Die Wände sind hoch. Die {2} sind bunt: rot, gelb, grün — jede Farbe ist ein anderer Weg.", es: "En invierno busco una afición nueva: algo para el cuerpo y la cabeza. Un amigo me lleva al rocódromo. Las paredes son altas. Las presas son de colores: rojo, amarillo, verde; cada color es un recorrido distinto." },
        { it: "Am Anfang falle ich oft. Aber ich gebe nicht {3}. Nach einem Monat schaffe ich eine {4} Wand. Jetzt gehe ich zweimal pro Woche. Klettern macht {5}, und ich treffe dort neue Leute.", es: "Al principio caigo a menudo. Pero no me rindo. Tras un mes logro una pared difícil. Ahora voy dos veces por semana. Escalar divierte, y allí conozco gente nueva." },
      ],
      gaps: [
        { options: ["Hobby", "Auto", "Zimmer"], answer: 0, why: "Algo para cuerpo y cabeza: una afición." },
        { options: ["Griffe", "Türen", "Teppiche"], answer: 0, why: "En un rocódromo: presas de colores en la pared." },
        { options: ["auf", "an", "aus"], answer: 0, why: "«Aufgeben» = rendirse; el prefijo separable cierra la frase." },
        { options: ["schwierige", "kaputte", "nasse"], answer: 0, why: "Progreso tras un mes de práctica: una pared difícil." },
        { options: ["Spaß", "Schmerzen", "Schlaf"], answer: 0, why: "Va dos veces por semana y hace amigos: lo disfruta." },
      ],
    },
  ],

  "de-cu-a1-08": [
    {
      id: "cz-de-a1-08-1", title: "Im Biergarten", titleEs: "En el jardín de cerveza", minutes: 3,
      paragraphs: [
        { it: "Am Freitagabend gehen Max, Sabine und ich in einen Biergarten in München. Unter den {1} stehen lange Holztische. Die Kellnerin fragt: «Was möchten Sie {2}?» Ich bestelle ein Bier. Max trinkt ein {3}: Bier mit Limonade.", es: "El viernes por la noche, Max, Sabine y yo vamos a un jardín de cerveza de Múnich. Bajo los castaños hay largas mesas de madera. La camarera pregunta: «¿Qué desean tomar?» Yo pido una cerveza. Max bebe un Radler: cerveza con gaseosa de limón." },
        { it: "Sabine bestellt eine {4} mit Kartoffelsalat — typisch bayerisch. Dann essen, trinken und lachen wir. Am Ende sage ich: «Zahlen, bitte!» Es war ein schöner Abend, und das Essen war sehr {5}.", es: "Sabine pide una salchicha a la brasa con ensalada de patata, típico bávaro. Luego comemos, bebemos y nos reímos. Al final digo: «¡La cuenta, por favor!» Fue una tarde estupenda y la comida estaba muy rica." },
      ],
      gaps: [
        { options: ["Kastanien", "Duschen", "Pianos"], answer: 0, why: "El Biergarten clásico: mesas bajo los castaños." },
        { options: ["trinken", "schlafen", "zahlen"], answer: 0, why: "Lo primero que se pregunta en un Biergarten es la bebida." },
        { options: ["Radler", "Wein", "Milch"], answer: 0, why: "«Bier mit Limonade» se llama Radler." },
        { options: ["Bratwurst", "Brille", "Briefmarke"], answer: 0, why: "Plato bávaro con Kartoffelsalat: la salchicha a la brasa." },
        { options: ["lecker", "laut", "kalt"], answer: 0, why: "Elogio final de la comida: muy rica." },
      ],
    },
    {
      id: "cz-de-a1-08-2", title: "Die Speisekarte", titleEs: "La carta", minutes: 2,
      paragraphs: [
        { it: "Im Restaurant nehme ich die {1} und lese langsam. Es gibt Schnitzel, Knödel und Suppen. Der Kellner kommt und fragt: «Was können Sie {2}?» Ich sage: «Was ist heute frisch?»", es: "En el restaurante tomo la carta y leo despacio. Hay escalope, Knödel y sopas. El camarero se acerca y pregunta: «¿Qué me recomienda?» Yo digo: «¿Qué hay hoy fresco?»" },
        { it: "Er sagt: «Das Schnitzel mit {3} ist sehr beliebt.» Ich sage: «Ich möchte das Schnitzel, bitte. Und ein Wasser — {4}, ohne Kohlensäure.» Der Kellner nickt. Zum Schluss esse ich einen {5}: Apfelstrudel mit Vanillesauce.", es: "Él dice: «El escalope con patatas fritas es muy pedido.» Digo: «Quisiera el escalope, por favor. Y un agua: sin gas.» El camarero asiente. De postre como un postre: strudel de manzana con salsa de vainilla." },
      ],
      gaps: [
        { options: ["Speisekarte", "Landkarte", "Kreditkarte"], answer: 0, why: "En el restaurante se lee la carta (die Landkarte = el mapa, falso amigo)." },
        { options: ["empfehlen", "verbieten", "vergessen"], answer: 0, why: "Pregunta clásica al camarero: ¿qué recomienda?" },
        { options: ["Pommes", "Blumen", "Schirmen"], answer: 0, why: "Schnitzel mit Pommes: el clásico con patatas fritas." },
        { options: ["still", "laut", "schnell"], answer: 0, why: "Agua sin gas: still (frente a mit Kohlensäure)." },
        { options: ["Nachtisch", "Nachbar", "Nachmittag"], answer: 0, why: "Postre al final de la comida: der Nachtisch." },
      ],
    },
    {
      id: "cz-de-a1-08-3", title: "Kaffee und Kuchen bei Oma", titleEs: "Café y tarta en casa de la abuela", minutes: 3,
      paragraphs: [
        { it: "Am Sonntag besuchen wir Oma in Köln. Um 16 Uhr gibt es Kaffee und {1} — Omas berühmten Apfelkuchen. Alle sitzen im Garten, trinken Kaffee und reden. Das ist eine sehr deutsche {2}.", es: "El domingo visitamos a la abuela en Colonia. A las 16 hay café y tarta: el famoso pastel de manzana de la abuela. Todos nos sentamos en el jardín, tomamos café y charlamos. Es una tradición muy alemana." },
        { it: "Am Abend gehen wir in ein Restaurant. Mein Vater möchte ein {3} mit Bratkartoffeln. Ich möchte eine Suppe und einen Salat. Der Kellner schreibt alles {4}. Nach dem Essen fragt Oma: «War es lecker?» Alle nicken. Dann ruft Opa: «Kellner, die {5} bitte!» — Er zahlt für alle.", es: "Por la noche vamos a un restaurante. Mi padre quiere un escalope con patatas panaderas. Yo quiero una sopa y una ensalada. El camarero lo apunta todo. Tras comer, la abuela pregunta: «¿Estaba rico?» Todos asienten. Entonces el abuelo llama: «¡Camarero, la cuenta por favor!»: paga él por todos." },
      ],
      gaps: [
        { options: ["Kuchen", "Regen", "Sport"], answer: 0, why: "El ritual alemán de las 16: Kaffee und Kuchen (pastel de manzana)." },
        { options: ["Tradition", "Prüfung", "Rechnung"], answer: 0, why: "Se repite cada domingo: una tradición." },
        { options: ["Schnitzel", "Fahrrad", "Zeitung"], answer: 0, why: "Plato típico alemán con patatas panaderas." },
        { options: ["auf", "ab", "ein"], answer: 0, why: "El camarero anota el pedido: aufschreiben." },
        { options: ["Rechnung", "Zeitung", "Jacke"], answer: 0, why: "Al final de la cena se pide la cuenta." },
      ],
    },
  ],

  "de-cu-a1-09": [
    {
      id: "cz-de-a1-09-1", title: "Am Fahrkartenschalter", titleEs: "En la taquilla", minutes: 3,
      paragraphs: [
        { it: "Freitagmorgen im Hauptbahnhof Berlin. Ich gehe zum {1} der Deutschen Bahn und sage: «Ein Ticket nach Hamburg, bitte.» Der Mann fragt: «{2} oder hin und zurück?»", es: "Viernes por la mañana en la estación central de Berlín. Voy al mostrador de Deutsche Bahn y digo: «Un billete a Hamburgo, por favor.» El hombre pregunta: «¿Solo ida o ida y vuelta?»" },
        { it: "«Hin und zurück, bitte. Wann fährt der nächste {3}?» — «Um 14:30 Uhr, ab Gleis sieben.» — «Wie lange fährt der Zug?» — «Ungefähr zwei {4}.» Ich nehme den ICE um 14:30 Uhr. «Gute {5}!», sagt der Mann.", es: "«Ida y vuelta, por favor. ¿Cuándo sale el próximo tren?» — «A las 14:30, desde la vía siete.» — «¿Cuánto tarda el tren?» — «Unas dos horas.» Tomo el ICE de las 14:30. «¡Buen viaje!», dice el hombre." },
      ],
      gaps: [
        { options: ["Schalter", "Garten", "Kirche"], answer: 0, why: "En la estación se compra el billete en el mostrador de la DB." },
        { options: ["Einfach", "Doppelt", "Zweimal"], answer: 0, why: "La alternativa clásica del billete: solo ida (Einfach) o ida y vuelta." },
        { options: ["Zug", "Vogel", "Salat"], answer: 0, why: "En el Hauptbahnhof se pregunta por el próximo tren." },
        { options: ["Stunden", "Minuten", "Tage"], answer: 0, why: "Berlín-Hamburgo en ICE: unas dos horas de viaje." },
        { options: ["Fahrt", "Nacht", "Laune"], answer: 0, why: "Despedida de la estación: «Gute Fahrt!», buen viaje." },
      ],
    },
    {
      id: "cz-de-a1-09-2", title: "Die Verspätung", titleEs: "El retraso", minutes: 2,
      paragraphs: [
        { it: "Am Montag fahre ich nach Köln. Auf dem {1} steht: ICE 505, Köln, 10:12 Uhr, Gleis 8. Um 10:15 Uhr kommt eine Durchsage: «Der Zug hat 20 Minuten {2}.»", es: "El lunes viajo a Colonia. En el panel pone: ICE 505, Colonia, 10:12, vía 8. A las 10:15 llega un aviso por megafonía: «El tren va con 20 minutos de retraso.»" },
        { it: "Ich warte und {3} eine Zeitung. Dann kommt die nächste Durchsage: «Der Zug fährt heute ab Gleis 3.» Ich {4} schnell über den Bahnsteig. Zum Glück ist der Zug noch da — und ich sitze {5} drin.", es: "Espero y leo un periódico. Luego llega el siguiente aviso: «El tren sale hoy de la vía 3.» Corro rápido por el andén. Menos mal que el tren sigue allí, y por fin estoy dentro." },
      ],
      gaps: [
        { options: ["Anzeigebrett", "Kühlschrank", "Notizbuch"], answer: 0, why: "Horarios y vías: el panel de información de la estación." },
        { options: ["Verspätung", "Urlaub", "Hunger"], answer: 0, why: "El aviso clásico de la DB: el tren va con retraso." },
        { options: ["lese", "koche", "schwimme"], answer: 0, why: "Esperando en el andén: leer el periódico." },
        { options: ["laufe", "schlafe", "sage"], answer: 0, why: "Cambio de vía a última hora: hay que correr." },
        { options: ["endlich", "nie", "selten"], answer: 0, why: "Tras el retraso y la carrera: por fin a bordo." },
      ],
    },
    {
      id: "cz-de-a1-09-3", title: "Im ICE nach München", titleEs: "En el ICE a Múnich", minutes: 3,
      paragraphs: [
        { it: "Im Zug suche ich meinen {1}. Die Nummer steht auf dem Ticket: Wagen 23, Platz 74. Neben mir sitzt eine ältere Frau. Sie {2} ein Buch und lächelt.", es: "En el tren busco mi asiento. El número está en el billete: coche 23, asiento 74. A mi lado se sienta una señora mayor. Lee un libro y sonríe." },
        { it: "Ich schaue aus dem Fenster. Die Landschaft {3} schnell vorbei. In Nürnberg steigt eine Familie zu. Der kleine Junge fragt: «{4} fährt der Zug noch?» — «Noch eine Stunde, mein Schatz.» Um 17:26 Uhr kommen wir {5} in München an.", es: "Miro por la ventana. El paisaje pasa rápido. En Núremberg sube una familia. El niño pequeño pregunta: «¿Cuánto queda de tren?» — «Todavía una hora, cariño.» A las 17:26 llegamos puntualmente a Múnich." },
      ],
      gaps: [
        { options: ["Platz", "Schirm", "Apfel"], answer: 0, why: "El billete indica coche y número de asiento." },
        { options: ["liest", "trinkt", "kauft"], answer: 0, why: "Con un libro en las manos: lee (lesen, verbo irregular)." },
        { options: ["zieht", "steht", "schläft"], answer: 0, why: "El paisaje pasa rápido ante la ventana." },
        { options: ["Wie lange", "Wie viel", "Wie oft"], answer: 0, why: "Pregunta del niño por la duración que queda: wie lange." },
        { options: ["pünktlich", "spät", "müde"], answer: 0, why: "17:26 exacta: la puntualidad alemana." },
      ],
    },
  ],

  "de-cu-a1-10": [
    {
      id: "cz-de-a1-10-1", title: "Der Regenschirm", titleEs: "El paraguas", minutes: 2,
      paragraphs: [
        { it: "In Hamburg {1} es oft. Heute Morgen {2} die Sonne, aber der Himmel ist schnell wieder grau. Mein Nachbar klopft an die Tür und sagt: «Nimm den {3} mit!»", es: "En Hamburgo llueve a menudo. Esta mañana luce el sol, pero el cielo se vuelve gris enseguida. Mi vecino llama a la puerta y dice: «¡Lleva el paraguas!»" },
        { it: "Am Nachmittag regnet es {4} — typisch Hamburg! Ich bin nass bis auf die Haut. Abends gibt es sogar {5} über dem Hafen. Morgen nehme ich natürlich den Regenschirm mit.", es: "Por la tarde llueve otra vez, ¡típico de Hamburgo! Estoy empapado. Al anochecer hay incluso tormenta sobre el puerto. Mañana, claro, llevaré el paraguas." },
      ],
      gaps: [
        { options: ["regnet", "scheint", "kocht"], answer: 0, why: "Hamburgo es famosa por su lluvia (y por el paraguas del final)." },
        { options: ["scheint", "regnet", "weint"], answer: 0, why: "Contraste con el cielo que se pone gris: primero lucía el sol." },
        { options: ["Regenschirm", "Sonnencreme", "Fahrrad"], answer: 0, why: "Con lluvia en camino: el paraguas." },
        { options: ["wieder", "nie", "endlich"], answer: 0, why: "El chiste nacional: llueve OTRA vez." },
        { options: ["Sturm", "Sommer", "Salat"], answer: 0, why: "«Sogar» intensifica: hasta tormenta sobre el puerto." },
      ],
    },
    {
      id: "cz-de-a1-10-2", title: "Vier Jahreszeiten", titleEs: "Cuatro estaciones", minutes: 2,
      paragraphs: [
        { it: "Deutschland hat vier {1}: Frühling, Sommer, Herbst und Winter. Im {2} ist es kalt, und es schneit manchmal. Im Sommer ist es warm, oft 25 Grad oder {3}.", es: "Alemania tiene cuatro estaciones: primavera, verano, otoño e invierno. En invierno hace frío y a veces nieva. En verano hace calor, a menudo 25 grados o más." },
        { it: "Im Herbst {4} die Blätter von den Bäumen. Im Frühling werden die Tage {5} und alles wird grün. Jede Jahreszeit hat ihr eigenes Wetter — und die Deutschen reden über alle.", es: "En otoño caen las hojas de los árboles. En primavera los días se alargan y todo se vuelve verde. Cada estación tiene su propio clima, y los alemanes hablan de todas." },
      ],
      gaps: [
        { options: ["Jahreszeiten", "Wochentage", "Monate"], answer: 0, why: "Primavera, verano, otoño e invierno: las estaciones." },
        { options: ["Winter", "Sommer", "Frühling"], answer: 0, why: "Frío y nieve: invierno." },
        { options: ["mehr", "weniger", "nie"], answer: 0, why: "«25 Grad oder ___»: o más." },
        { options: ["fallen", "wachsen", "lachen"], answer: 0, why: "Otoño: las hojas caen de los árboles." },
        { options: ["länger", "kälter", "teurer"], answer: 0, why: "Primavera: los días se alargan y todo se vuelve verde." },
      ],
    },
    {
      id: "cz-de-a1-10-3", title: "Small Talk an der Bushaltestelle", titleEs: "Charla en la parada de autobús", minutes: 2,
      paragraphs: [
        { it: "An der Bushaltestelle in Hamburg scheint die Sonne. Ein älterer Mann sagt: «{1} Wetter heute, nicht wahr?» Ich antworte: «Ja, sehr schön!» Wir reden über das Wetter — das Lieblingsthema der {2}.", es: "En la parada de autobús de Hamburgo luce el sol. Un señor mayor dice: «¡Qué buen tiempo hoy, verdad?» Respondo: «Sí, muy bonito.» Hablamos del tiempo: el tema favorito de los alemanes." },
        { it: "Der Mann erzählt: «Im Sommer fahren wir immer an die {3}. Dort ist der Wind {4} und die Luft ist frisch.» Der Bus kommt. Der Mann sagt: «Bis {5}! Hoffentlich bleibt das Wetter so!»", es: "El hombre cuenta: «En verano siempre vamos al mar del Norte. Allí el viento es fuerte y el aire es fresco.» Llega el autobús. El hombre dice: «¡Hasta pronto! Ojalá aguante este tiempo.»" },
      ],
      gaps: [
        { options: ["Schönes", "Schlechtes", "Kaltes"], answer: 0, why: "El sol brilla: buen tiempo." },
        { options: ["Deutschen", "Spanier", "Kinder"], answer: 0, why: "La charla meteorológica es el deporte nacional alemán." },
        { options: ["Nordsee", "Bäckerei", "Autobahn"], answer: 0, why: "Las vacaciones alemanas clásicas: la costa del mar del Norte." },
        { options: ["stark", "warm", "laut"], answer: 0, why: "En la costa del norte: viento fuerte." },
        { options: ["bald", "nie", "spät"], answer: 0, why: "Despedida amable al subir al bus: hasta pronto." },
      ],
    },
  ],

  "de-cu-a1-11": [
    {
      id: "cz-de-a1-11-1", title: "Die Wohnungsbesichtigung", titleEs: "La visita del piso", minutes: 3,
      paragraphs: [
        { it: "Ich habe eine Anzeige im Internet gefunden: ein Zimmer in einer WG in Friedrichshain. Heute treffe ich Anna. Sie {1} schon drei Jahre in der WG. Das Zimmer ist groß und hat ein Fenster zur Straße. Die {2} kostet 450 Euro, Nebenkosten inklusive.", es: "He encontrado un anuncio en internet: una habitación en un piso compartido de Friedrichshain. Hoy conozco a Anna. Ella vive ya tres años en el piso. La habitación es grande y tiene una ventana a la calle. El alquiler cuesta 450 euros, gastos incluidos." },
        { it: "Ich frage: «Wo ist die Küche?» — «Sie ist unten, im {3}.» — «Und das Bad?» — «Am {4} des Flurs.» In der WG wohnen noch {5} Leute: Anna und zwei Studenten. Alle sind nett. Das Zimmer ist fantastisch — ich nehme es!", es: "Pregunto: «¿Dónde está la cocina?» — «Está abajo, en la planta baja.» — «¿Y el baño?» — «Al final del pasillo.» En el piso viven tres personas más: Anna y dos estudiantes. Todos son simpáticos. La habitación es fantástica: ¡me la quedo!" },
      ],
      gaps: [
        { options: ["wohnt", "arbeitet", "isst"], answer: 0, why: "Anna es la inquilina que se queda: vive en la WG desde hace tres años." },
        { options: ["Miete", "Mütze", "Milch"], answer: 0, why: "El precio mensual de la habitación: el alquiler (die Miete)." },
        { options: ["Erdgeschoss", "dritten Stock", "Dachboden"], answer: 0, why: "«Unten» = planta baja: Erdgeschoss." },
        { options: ["Ende", "Anfang", "Tür"], answer: 0, why: "«Am Ende des Flurs» = al final del pasillo." },
        { options: ["drei", "dreizehn", "dreißig"], answer: 0, why: "Anna y dos estudiantes más: tres personas." },
      ],
    },
    {
      id: "cz-de-a1-11-2", title: "Das Zimmer in Friedrichshain", titleEs: "La habitación en Friedrichshain", minutes: 2,
      paragraphs: [
        { it: "Die Anzeige im Internet sagt: «Wir suchen eine Mitbewohnerin oder einen {1} für unser WG-Zimmer in Friedrichshain. Das Zimmer ist 18 {2} groß und möbliert: Bett, Schreibtisch, Kleiderschrank.»", es: "El anuncio en internet dice: «Buscamos compañera o compañero de piso para la habitación de nuestro piso compartido en Friedrichshain. La habitación tiene 18 metros cuadrados y está amueblada: cama, escritorio, armario.»" },
        { it: "Die Miete kostet 450 Euro im {3}. Die Wohnung liegt zentral: Cafés, Spätkauf und Park sind ganz {4}. Schreib uns eine Nachricht. Wir freuen uns auf {5}!", es: "El alquiler cuesta 450 euros al mes. El piso está céntrico: cafés, tienda de barrio y parque están muy cerca. Escríbenos un mensaje. ¡Esperamos conocerte!" },
      ],
      gaps: [
        { options: ["Mitbewohner", "Chef", "Lehrer"], answer: 0, why: "Para un piso compartido se busca compañero de piso." },
        { options: ["Quadratmeter", "Kilometer", "Liter"], answer: 0, why: "El tamaño de una habitación: metros cuadrados." },
        { options: ["Monat", "Tag", "Jahr"], answer: 0, why: "450 € es el precio mensual típico de una habitación compartida." },
        { options: ["nah", "weit", "weg"], answer: 0, why: "«Zentral»: todo está cerca." },
        { options: ["dich", "uns", "sich"], answer: 0, why: "«Sich freuen auf dich»: esperan conocerte." },
      ],
    },
    {
      id: "cz-de-a1-11-3", title: "Leben in der WG", titleEs: "La vida en el piso compartido", minutes: 3,
      paragraphs: [
        { it: "In einer WG teilt man alles: die Küche, das Bad und manchmal das {1}, wenn einer für alle kocht. Es gibt einen {2} für die Hausarbeit: Ich putze das Bad, du putzt die Küche. So bleibt es fair.", es: "En un piso compartido se comparte todo: la cocina, el baño y a veces la comida, si uno cocina para todos. Hay un plan para las tareas de la casa: yo limpio el baño, tú limpias la cocina. Así sigue siendo justo." },
        { it: "Am Wochenende {3} wir zusammen Frühstück — alle am großen Tisch. Manchmal gibt es {4} um den Abfall oder das Geschirr. Aber am Ende sind wir fast eine kleine {5}.", es: "El fin de semana preparamos juntos el desayuno, todos en la mesa grande. A veces hay discusiones por la basura o los platos. Pero al final somos casi una pequeña familia." },
      ],
      gaps: [
        { options: ["Essen", "Fahrrad", "Handy"], answer: 0, why: "«Wenn einer für alle kocht»: comida compartida." },
        { options: ["Plan", "Papier", "Preis"], answer: 0, why: "Reparto justo de las tareas semanales: el plan (Putzplan)." },
        { options: ["machen", "verkaufen", "verlieren"], answer: 0, why: "Ritual de la WG: preparar juntos el desayuno." },
        { options: ["Ärger", "Freude", "Ferien"], answer: 0, why: "Basura y platos sucios: fuente de pequeñas discusiones." },
        { options: ["Familie", "Firma", "Schule"], answer: 0, why: "Comparten mesa y vida: casi una familia." },
      ],
    },
  ],

  "de-cu-a1-12": [
    {
      id: "cz-de-a1-12-1", title: "Ein Tag in Berlin", titleEs: "Un día en Berlín", minutes: 3,
      paragraphs: [
        { it: "Zuerst frühstücken wir in der Bäckerei: Brötchen, Kaffee, Marmelade. {1} fahren wir mit der U-Bahn zum Brandenburger Tor. Lena hat die Kamera dabei und macht viele {2}.", es: "Primero desayunamos en la panadería: panecillos, café, mermelada. Luego vamos en metro a la Puerta de Brandeburgo. Lena lleva la cámara y hace muchas fotos." },
        { it: "{3} gehen wir auf die Museumsinsel und sehen alte Kunst. Am Mittag essen wir {4} — Wurst mit Soße und Pommes, typisch Berlin. {5} trinken wir noch einen Kaffee am Alexanderplatz. Es wird ein schöner Tag!", es: "Después vamos a la Isla de los Museos y vemos arte antiguo. Al mediodía comemos Currywurst: salchicha con salsa y patatas fritas, típico de Berlín. Por último tomamos aún un café en el Alexanderplatz. ¡Será un día estupendo!" },
      ],
      gaps: [
        { options: ["Dann", "Denn", "Wenn"], answer: 0, why: "Segundo paso de la jornada: dann = luego." },
        { options: ["Fotos", "Pausen", "Fehler"], answer: 0, why: "Con la cámara en mano: fotos." },
        { options: ["Danach", "Davor", "Dagegen"], answer: 0, why: "Paso siguiente: después de eso." },
        { options: ["Currywurst", "Paella", "Sushi"], answer: 0, why: "«Wurst mit Soße und Pommes, typisch Berlin»: la Currywurst." },
        { options: ["Zuletzt", "Zuerst", "Zwei"], answer: 0, why: "Cierre de la jornada: zuletzt = por último." },
      ],
    },
    {
      id: "cz-de-a1-12-2", title: "Der Plan von Lena", titleEs: "El plan de Lena", minutes: 2,
      paragraphs: [
        { it: "Lena und ich planen meinen letzten Tag in Berlin. Lena fragt: «Was machen wir zuerst?» Ich sage: «Zuerst frühstücken wir {1} in der Bäckerei, wie jeden Samstag.» — «Gut. Und {2}? Ich möchte dir das Brandenburger Tor zeigen.»", es: "Lena y yo planificamos mi último día en Berlín. Lena pregunta: «¿Qué hacemos primero?» Digo: «Primero desayunamos juntos en la panadería, como cada sábado.» — «Bien. ¿Y luego? Quiero enseñarte la Puerta de Brandeburgo.»" },
        { it: "«Perfekt. {3} machen wir Fotos an der East Side Gallery.» — «Und {4}? Ich muss um 20 Uhr am Flughafen sein.» — «Zuletzt essen wir eine Currywurst. {5}?» — «Einverstanden! Es wird ein schöner Tag», sagt Lena.", es: "«Perfecto. Después hacemos fotos en la East Side Gallery.» — «¿Y al final? Debo estar a las 20 en el aeropuerto.» — «Por último comemos una Currywurst. ¿De acuerdo?» — «¡De acuerdo! Será un día estupendo», dice Lena." },
      ],
      gaps: [
        { options: ["zusammen", "getrennt", "allein"], answer: 0, why: "Último día con Lena: desayunar juntos." },
        { options: ["dann", "doch", "denn"], answer: 0, why: "Segundo paso del plan: dann." },
        { options: ["Danach", "Davor", "Dabei"], answer: 0, why: "Paso siguiente: después de eso." },
        { options: ["zuletzt", "zuerst", "zusätzlich"], answer: 0, why: "Pregunta por el cierre del día, antes del vuelo: zuletzt." },
        { options: ["Einverstanden", "Vielleicht", "Gute Nacht"], answer: 0, why: "Respuesta que acepta el plan: einverstanden." },
      ],
    },
    {
      id: "cz-de-a1-12-3", title: "Der letzte Tag", titleEs: "El último día", minutes: 3,
      paragraphs: [
        { it: "Liebe Mama! Heute ist mein letzter Tag in Berlin. Lena und ich frühstücken {1} in der Bäckerei um die Ecke. Um zehn Uhr besuchen wir das {2}. Es ist groß und voller Touristen aus der ganzen Welt.", es: "¡Querida mamá! Hoy es mi último día en Berlín. Lena y yo desayunamos juntas en la panadería de la esquina. A las diez visitamos la Puerta de Brandeburgo. Es grande y está llena de turistas de todo el mundo." },
        { it: "{3} essen wir eine Currywurst und trinken Kaffee am Alexanderplatz. Am Abend gibt mir Lena einen {4} mit ihrer Adresse. «Schreib mir einen {5} aus Madrid!», sagt sie. «Ich habe dich lieb. Komm bald wieder!»", es: "Después comemos una Currywurst y tomamos café en el Alexanderplatz. Por la noche Lena me da un papel con su dirección. «¡Escríbeme una carta desde Madrid!», dice. «Te quiero. ¡Vuelve pronto!»" },
      ],
      gaps: [
        { options: ["zusammen", "getrennt", "leise"], answer: 0, why: "Último día con Lena: desayunan juntas." },
        { options: ["Brandenburger Tor", "Krankenhaus", "Supermarkt"], answer: 0, why: "Monumento berlinés lleno de turistas: la Puerta de Brandeburgo." },
        { options: ["Danach", "Denn", "Doch"], answer: 0, why: "Paso siguiente del día: danach." },
        { options: ["Zettel", "Zeitung", "Zug"], answer: 0, why: "Un papel con su dirección: der Zettel." },
        { options: ["Brief", "Bericht", "Buch"], answer: 0, why: "Lo que se escribe y se envía por correo: carta (der Brief, no 'breve')." },
      ],
    },
  ],
};
