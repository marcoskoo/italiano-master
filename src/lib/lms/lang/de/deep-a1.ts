import type { CbGrammarDeep } from "../../extra/grammar-deep";

/* ═══ DE A1 · Gramática profunda — 12 unidades ═══════════════════════
   Explicación amplia de la gramática de cada unidad, con las trampas
   específicas del hispanohablante en Hochdeutsch de Alemania. Campos
   `.it` = alemán (lengua de estudio). Secciones: So funktioniert es /
   Wann man es benutzt / Achtung (ES) / Im echten Gespräch. */

export const DE_DEEP_A1: Record<string, CbGrammarDeep> = {
  "de-cu-a1-01": {
    sezioni: [
      { t: "So funktioniert es", body: "El verbo sein (ser/estar) se conjuga: ich bin, du bist, er/sie/es ist, wir sind, ihr seid, sie/Sie sind. El alemán usa UN solo verbo donde el español usa dos: «Ich bin müde» = 'estoy cansado' y «Ich bin Studentin» = 'soy estudiante'. Con Sie (usted) el verbo es sind, igual que con sie (ellos): «Sie sind die Organisatorin». Las terminaciones son fijas: sin -st en du o sin -en en sie, la frase no existe." },
      { t: "Wann man es benutzt", body: "sein sirve para identidad («Ich bin Marta»), profesión («Ich bin Studentin»), nacionalidad («Ich bin Spanierin») y estados («Ich bin müde»). Para el origen se usa kommen + aus: «Ich komme aus Spanien, aus Madrid», y para la residencia wohnen + in: «Ich wohne in Berlin». Las preguntas con palabra W (W-Fragen) ponen el verbo en segunda posición: «Wie heißt du?», «Wo wohnst du?», «Was machst du?», «Wer ist das?»." },
      { t: "Achtung (für Spanischsprachige)", body: "1) La edad va con sein, nunca con haben: «Ich bin 25 Jahre alt», no «Ich habe 25 Jahre». 2) En español puedes omitir el sujeto («soy estudiante»); en alemán el sujeto SIEMPRE está presente: «Ich bin Studentin». 3) Todos los sustantivos llevan mayúscula (Studentin, Spanien, Berlin), pero el pronombre ich va en minúscula; y woher («¿de dónde?») ya incluye el 'de' del español, así que se responde con kommen aus, nunca con kommen von." },
      { t: "Im echten Gespräch", body: "Guion del Sprachcafé de Kreuzberg: «Hallo! Ich bin Lena. Und wie heißt du?» → «Ich heiße Marta. Ich komme aus Spanien.» Llega la organizadora mayor y todo cambia a Sie: «Wie heißen Sie?» → «Ich heiße Marta García, Frau Müller.» Entre jóvenes el du es inmediato; con la organizadora o personas mayores, Sie. La despedida típica: «Bis Mittwoch!» (hasta el miércoles), porque el Sprachcafé se reúne cada semana." },
    ],
    esempi: [
      { it: "Ich bin neu hier in Berlin.", es: "Soy nuevo/a aquí en Berlín." },
      { it: "Wir sind Studenten aus Köln.", es: "Somos estudiantes de Colonia." },
      { it: "Bist du aus Hamburg? — Nein, ich komme aus München.", es: "¿Eres de Hamburgo? — No, vengo de Múnich." },
      { it: "Wer ist die Frau dort? — Das ist Frau Weber, die Lehrerin.", es: "¿Quién es esa mujer? — Es la señora Weber, la profesora." },
      { it: "Wie heißen Sie? — Ich heiße Thomas Klein.", es: "¿Cómo se llama usted? — Me llamo Thomas Klein." },
    ],
    usi: [
      { q: "«Tengo 25 años» se dice…", options: ["Ich habe 25 Jahre.", "Ich bin 25 Jahre alt.", "Ich sein 25 Jahre."], answer: 1, explain: "La edad se expresa con sein: Ich bin 25 Jahre alt; haben es solo posesión." },
      { q: "En el Sprachcafé hablas con la organizadora mayor. ¿Cómo le preguntas su nombre?", options: ["Wie heißt du?", "Wie heißen Sie?", "Was bist du?"], answer: 1, explain: "Con desconocidos y personas mayores: Sie + heißen; el du resultaría invasor." },
    ],
  },

  "de-cu-a1-02": {
    sezioni: [
      { t: "So funktioniert es", body: "El verbo haben: ich habe, du hast, er/sie/es hat, wir haben, ihr habt, sie/Sie haben. Sirve para posesión y relaciones: «Ich habe einen Bruder», «Wir haben einen Hund». Fíjate en que el objeto masculino aparece como einen (acusativo), la marca que verás con detalle en la unidad 3. Los posesivos son mein (mi), dein (tu), unser (nuestro): «mein Vater», «deine Mutter», «unsere Familie»." },
      { t: "Wann man es benutzt", body: "Para presentar a la familia: «Das sind meine Eltern» (presentación de varias personas) frente a «Das ist mein Vater» (una sola). Con femenino y plural el posesivo añade -e: «meine Schwester», «meine Geschwister»; con masculino y neutro va sin -e: «mein Bruder», «mein Vater». Preguntas clave: «Hast du Geschwister?», «Habt ihr auch einen Hund?»." },
      { t: "Achtung (für Spanischsprachige)", body: "1) El «su» español es ambiguo; el alemán obliga a elegir: sein = de él («sein Vater»), ihr = de ella («ihre Mutter»), Ihr con mayúscula = de usted. 2) «Mi hermana» = meine Schwester (con -e porque Schwester es femenina), nunca «mein Schwester». 3) Para la edad no uses haben: «Ich bin 25», no «Ich habe 25»; haben queda para lo que se posee o se tiene." },
      { t: "Im echten Gespräch", body: "Guion de la videollamada dominical con la familia en Madrid: «Oma, wie geht's?» → la abuela pregunta: «Hast du Geschwister?» (¡ya sabe la respuesta, pero pregunta!) → «Isst du gut?». Tú presentas la foto de Cádiz: «Das sind meine Eltern. Meine Schwester heißt Valeria. Wir haben auch einen Hund.» Y la despedida tierna: «Ich habe dich lieb!» (te quiero, en familia)." },
    ],
    esempi: [
      { it: "Ich habe zwei Schwestern und einen Bruder.", es: "Tengo dos hermanas y un hermano." },
      { it: "Meine Oma wohnt in Sevilla.", es: "Mi abuela vive en Sevilla." },
      { it: "Hast du auch einen Hund? — Ja, wir haben einen.", es: "¿Tienes perro también tú? — Sí, tenemos uno." },
      { it: "Deine Familie ist sehr nett!", es: "¡Tu familia es muy simpática!" },
      { it: "Unsere Familie ist groß: Wir sind sechs.", es: "Nuestra familia es grande: somos seis." },
    ],
    usi: [
      { q: "«___ Schwester ist Lehrerin» (mi hermana)", options: ["Meine", "Meiner", "Meins"], answer: 0, explain: "Schwester es femenina → mein toma -e: meine Schwester." },
      { q: "«¿Tienes hermanos?» se dice…", options: ["Bist du Geschwister?", "Hast du Geschwister?", "Machst du Geschwister?"], answer: 1, explain: "Tener = haben; Geschwister (hermanos) va solo, en plural." },
    ],
  },

  "de-cu-a1-03": {
    sezioni: [
      { t: "So funktioniert es", body: "El acusativo solo cambia el artículo del MASCULINO: der → den, ein → einen. El femenino y el neutro no cambian: die Mutter → die Mutter / eine Mutter; das Brötchen → das Brötchen / ein Brötchen. Por eso: «Ich nehme einen Kaffee» (der Kaffee → einen), «Ich nehme ein Brötchen» (das Brötchen igual), «Ich nehme eine Cola» (die Cola igual). El acusativo es el caso del objeto directo y de es gibt." },
      { t: "Wann man es benutzt", body: "Es el caso de pedir en el café: «Was nehmen Sie? — Ich nehme einen Kaffee und ein Brötchen mit Käse». También con möchten: «Ich möchte einen Tee». Para pagar: «Die Rechnung, bitte» y la pregunta más alemana del mundo: «Zusammen oder getrennt?» (¿juntos o por separado?). Si no quieres el cambio: «Stimmt so» (quédese con la vuelta)." },
      { t: "Achtung (für Spanischsprachige)", body: "1) El artículo es obligatorio: en español dices «quisiera café», pero en alemán «Ich möchte einen Kaffee»; sin artículo suena incompleto. 2) Aprende el género con la palabra: der Kaffee (masculino → einen), das Bier (neutro → ein), die Cola (femenino → eine). 3) Falsos amigos: die Rechnung es 'la cuenta' (el 'recibo' es der Beleg), y der Chef es el jefe o director, no 'chef de cocina' (que es der Koch)." },
      { t: "Im echten Gespräch", body: "Guion del desayuno berlinés del domingo: «Was nehmen Sie?» → «Ich nehme einen Kaffee und ein Brötchen mit Käse.» → «Sonst noch etwas?» → «Nein, danke. Das ist alles.» → «Die Rechnung, bitte.» → «Zusammen oder getrennt?» → «Getrennt, bitte.» En Alemania es totalmente normal que cada uno pague lo suyo, también entre amigos y también en citas: no es tacañería, es costumbre." },
    ],
    esempi: [
      { it: "Ich nehme einen Kaffee und ein Brötchen mit Käse.", es: "Tomo un café y un panecillo con queso." },
      { it: "Ich möchte einen Tee mit Milch, bitte.", es: "Quisiera un té con leche, por favor." },
      { it: "Nehmen Sie auch ein Stück Kuchen? Wir haben Apfelkuchen.", es: "¿Toma también un trozo de tarta? Tenemos tarta de manzana." },
      { it: "Trinkst du einen Kaffee mit mir?", es: "¿Tomas un café conmigo?" },
      { it: "Die Rechnung, bitte. Getrennt, bitte.", es: "La cuenta, por favor. Por separado, por favor." },
    ],
    usi: [
      { q: "«Quisiera un café» (der Kaffee):", options: ["Ich möchte ein Kaffee.", "Ich möchte einen Kaffee.", "Ich möchte eine Kaffee."], answer: 1, explain: "Kaffee es masculino → acusativo einen, la única forma que cambia." },
      { q: "El camarero pregunta si quieres algo más:", options: ["Sonst noch etwas?", "Zusammen oder getrennt?", "Stimmt so?"], answer: 0, explain: "«Sonst noch etwas?» = ¿algo más?; las otras dos son fórmulas de pago." },
    ],
  },

  "de-cu-a1-04": {
    sezioni: [
      { t: "So funktioniert es", body: "es gibt + ACUSATIVO expresa existencia ('hay'): «Es gibt eine U-Bahn-Station» (die Station → eine), «Gibt es hier eine Apotheke?», «Es gibt einen Kiosk» (masculino → einen). Las preposiciones de lugar para orientarse son neben (al lado de), gegenüber (enfrente de) y in der …straße (en la calle X); con lugares concretos funcionan con dativo: «neben der Apotheke», «gegenüber dem Hotel»." },
      { t: "Wann man es benutzt", body: "Para orientarte: «Entschuldigung, wo ist der Bahnhof?», «Wie komme ich zum Brandenburger Tor?» (zum = zu dem, hacia). Las respuestas usan el imperativo de Sie: «Gehen Sie geradeaus» (siga recto), «Nehmen Sie die zweite Straße links» (tome la segunda a la izquierda). Distancia: «Ist es weit von hier? — Nein, fünf Minuten zu Fuß» (a pie)." },
      { t: "Achtung (für Spanischsprachige)", body: "1) En la pregunta, es y gibt se invierten: «Gibt es hier eine Apotheke?», nunca «Es gibt eine Apotheke?» con orden afirmativo. 2) es gibt + acusativo: con masculino es einen («Gibt es hier einen Supermarkt?»), no ein. 3) «En la calle X» = in der Xstraße con dativo femenino: «Ich wohne in der Wrangelstraße»; y no traduzcas 'quedar' literal: el alemán dice directamente «Das Museum ist neben der Apotheke»." },
      { t: "Im echten Gespräch", body: "Guion berlinés: sales del metro en Friedrichstraße desorientado y le preguntas a un señor mayor que espera en el semáforo: «Entschuldigung, wie komme ich zum Brandenburger Tor?» → «Gehen Sie geradeaus, dann die zweite Straße links.» → «Ist es weit von hier?» → «Nein, fünf Minuten zu Fuß. Es gibt dort auch einen Kiosk, wenn Sie Wasser brauchen.» Los berlineses dan instrucciones cortas y precisas, y casi siempre añaden una referencia útil." },
    ],
    esempi: [
      { it: "Entschuldigung, wie komme ich zum Brandenburger Tor?", es: "Disculpe, ¿cómo llego a la Puerta de Brandeburgo?" },
      { it: "Gibt es hier eine Apotheke in der Nähe?", es: "¿Hay una farmacia por aquí cerca?" },
      { it: "Gehen Sie geradeaus und dann die zweite Straße links.", es: "Siga recto y luego la segunda calle a la izquierda." },
      { it: "Der Supermarkt ist gegenüber dem Hotel.", es: "El supermercado está enfrente del hotel." },
      { it: "Ist es weit von hier? — Nein, nur zehn Minuten zu Fuß.", es: "¿Está lejos de aquí? — No, solo diez minutos a pie." },
    ],
    usi: [
      { q: "«¿Hay una estación de metro aquí?»", options: ["Es gibt hier eine U-Bahn-Station?", "Gibt es hier eine U-Bahn-Station?", "Hat es hier eine U-Bahn-Station?"], answer: 1, explain: "La pregunta invierte es y gibt; haben no expresa existencia en alemán." },
      { q: "«Está al lado de la farmacia» (die Apotheke):", options: ["neben der Apotheke", "neben die Apotheke", "neben dem Apotheke"], answer: 0, explain: "neben + dativo; Apotheke es femenina → der Apotheke." },
    ],
  },

  "de-cu-a1-05": {
    sezioni: [
      { t: "So funktioniert es", body: "Números hasta 100: 13 dreizehn, 30 dreißig (con ß), 21 einundzwanzig ('uno-y-veinte': primero la unidad, luego und + decena). Los precios se leen con la coma decimal: 2,50 € = «zwei Euro fünfzig»; 1,99 € = «eins Komma neunundneunzig Euro». Cantidad: «ein Kilo», «ein halbes Kilo» (medio kilo), «hundert Gramm», «zwei Äpfel», «drei Tomaten»." },
      { t: "Wann man es benutzt", body: "En el Wochenmarkt: «Was kostet das?», «Wie viel kostet ein Kilo Tomaten?», «Ich nehme ein Kilo, bitte». En la caja: «Was macht das zusammen?» (¿cuánto es en total?), «Bar oder mit Karte?» (¿efectivo o tarjeta?). Las ofertas: «Das ist im Angebot» = está en oferta. La vendedora pregunta: «Was darf es sonst noch sein?» (¿qué le pongo más?)." },
      { t: "Achtung (für Spanischsprachige)", body: "1) El separador decimal es la COMA, no el punto: 2,50 se lee «zwei Euro fünfzig», nunca 'dos punto cincuenta'. 2) Falso amigo estrella: bekommen = RECIBIR, no 'convertirse en': «Ich bekomme einen Beutel» = me dan una bolsa; 'llegar a ser' es werden. 3) kostet pregunta el precio unitario; «Was macht das zusammen?» solo sirve para el total de varios artículos, y «Was kostet das zusammen?» suena raro." },
      { t: "Im echten Gespräch", body: "Guion del Wochenmarkt: «Guten Morgen! Die Äpfel sind heute frisch.» → «Was kostet ein Kilo?» → «Zwei Euro fünfzig.» → «Ich nehme ein Kilo.» → «Sonst noch etwas?» → «Das ist alles, danke.» → «Das macht zusammen 7,80 Euro. Bar oder mit Karte?» Y al pasar por el supermercado descubres el Pfand: 0,25 € de depósito por botella de plástico que la máquina te devuelve cuando la devuelves vacía." },
    ],
    esempi: [
      { it: "Was kostet ein Kilo Äpfel? — Zwei Euro fünfzig.", es: "¿Cuánto cuesta un kilo de manzanas? — Dos euros cincuenta." },
      { it: "Ich nehme ein halbes Kilo Käse, bitte.", es: "Me llevo medio kilo de queso, por favor." },
      { it: "Was macht das zusammen? — Das macht 12,30 Euro.", es: "¿Cuánto es en total? — Son 12,30 euros." },
      { it: "Zahlen Sie bar oder mit Karte?", es: "¿Paga en efectivo o con tarjeta?" },
      { it: "Das ist im Angebot: nur 1,99 Euro.", es: "Está en oferta: solo 1,99 euros." },
    ],
    usi: [
      { q: "«¿Cuánto cuesta un kilo de tomates?»", options: ["Wie viel kostet ein Kilo Tomaten?", "Wie viele kostet ein Kilo Tomaten?", "Was ist ein Kilo Tomaten teuer?"], answer: 0, explain: "wie viel para precio y cantidad; wie viele es solo para contables, y la tercera frase no existe en alemán." },
      { q: "En la caja quieres saber el TOTAL de varios artículos:", options: ["Was kostet das?", "Was macht das zusammen?", "Was darf es sonst noch sein?"], answer: 1, explain: "«Was macht das zusammen?» es la fórmula fija para la suma total de la compra." },
    ],
  },

  "de-cu-a1-06": {
    sezioni: [
      { t: "So funktioniert es", body: "Presente regular: ich lern-e, du lern-st, er/sie/es lern-t, wir lern-en, ihr lern-t, sie/Sie lern-en. Terminaciones: -e, -st, -t, -en, -t, -en. Verbos separables como aufstehen (levantarse): el prefijo salta al final de la frase: «Ich stehe um sieben Uhr auf», nunca «Ich aufstehe um sieben Uhr». La hora oficial es de 24 horas: «um 9 Uhr», «um 14 Uhr», «um 14:30 Uhr»." },
      { t: "Wann man es benutzt", body: "Para la rutina diaria: «Ich stehe auf, ich dusche, ich frühstücke, ich fahre mit der S-Bahn, danach gehe ich in die Mensa». La hora: «Es ist halb acht» = 7:30, «Viertel vor neun» = 8:45, «Viertel nach zehn» = 10:15. Preguntas: «Wie spät ist es?», «Um wie viel Uhr beginnt die Vorlesung?»." },
      { t: "Achtung (für Spanischsprachige)", body: "1) «halb acht» = 7:30, NO 8:30: el alemán cuenta hacia la hora siguiente ('media para las ocho'), al contrario que el español «ocho y media». 2) Con el reloj de 24 horas no añadas 'de la tarde': «um 14 Uhr» ya lo dice todo, nunca «2 Uhr nachmittags». 3) Verbos separables: el prefijo va al FINAL: «Ich stehe um halb sieben auf»; decir «Ich stehe auf um halb sieben» suena desordenado en alemán." },
      { t: "Im echten Gespräch", body: "Guion con Timo en la cocina compartida de Múnich: «Wann beginnt die Vorlesung?» → «Um neun Uhr. Ich fahre um halb neun mit der S-Bahn.» → «Und wo isst du?» → «Um zwölf Uhr gehe ich in die Mensa. Danach arbeite ich in der Bibliothek.» Los alemanes viven con el reloj en la mano: dar la hora exacta no es frialdad, es una forma de cortesía." },
    ],
    esempi: [
      { it: "Ich stehe um halb sieben auf. (= 6:30 Uhr)", es: "Me levanto a las 6:30." },
      { it: "Die Vorlesung beginnt um neun Uhr.", es: "La clase magistral empieza a las nueve." },
      { it: "Um zwölf Uhr esse ich in der Mensa.", es: "A las doce como en el comedor universitario." },
      { it: "Am Abend lese ich ein Buch.", es: "Por la tarde leo un libro." },
      { it: "Um wie viel Uhr beginnt der Kurs? — Um Viertel nach zehn.", es: "¿A qué hora empieza el curso? — A las diez y cuarto." },
    ],
    usi: [
      { q: "Son las 7:30. ¿Cómo se dice?", options: ["Es ist halb acht.", "Es ist halb sieben.", "Es ist acht halb."], answer: 0, explain: "halb + la hora SIGUIENTE: halb acht = 7:30, porque el alemán cuenta hacia adelante." },
      { q: "«Me levanto a las 6:30»:", options: ["Ich stehe um halb sechs auf.", "Ich stehe um halb sieben auf.", "Ich stehe auf um halb sieben."], answer: 1, explain: "6:30 = halb sieben, y el prefijo auf del verbo separable cierra la frase." },
    ],
  },

  "de-cu-a1-07": {
    sezioni: [
      { t: "So funktioniert es", body: "gern es un adverbio que se coloca detrás del verbo conjugado: «Ich spiele gern Fußball» = me gusta jugar al fútbol. La escala de preferencia: gern (me gusta), lieber (prefiero), am liebsten (lo que más me gusta): «Ich trinke gern Kaffee, lieber Tee, am liebsten Wasser». mögen es el verbo 'gustar' con sustantivos: ich mag, du magst, er mag: «Ich mag Fotografie»." },
      { t: "Wann man es benutzt", body: "Para hablar de aficiones: «Was machst du in deiner Freizeit?», «Ich mache gern Yoga», «Meine Hobbys sind Musik und Kochen». Para rechazar con suavidad: «Fußball ist nicht mein Ding» (el fútbol no es lo mío). Para aceptar planes: «Ich komme gern mit!» (me apunto encantado). Y la institución alemana: «Der Verein trifft sich samstags» (el club se reúne los sábados)." },
      { t: "Achtung (für Spanischsprachige)", body: "1) gustar NO se traduce verbo por verbo: 'jugar me gusta' se dice «Ich spiele GERN», donde el verbo principal sigue siendo jugar y gern solo añade el gusto. 2) Para actividades usa gern + verbo; mögen va con sustantivos: «Ich mag Musik», y «Ich mag spielen Musik» es imposible. 3) lieber compara dos cosas y se construye con als ('que'): «Ich mache lieber Yoga ALS Fitness», nunca con wie." },
      { t: "Im echten Gespräch", body: "Guion del finde alemán: «Was machst du am Wochenende?» → «Ich spiele gern Fußball im Verein. Kommst du mit?» → «Ich spiele lieber Badminton, aber ich komme gern mit!» → «Super! Wir treffen uns samstags um zehn.» Los alemanes se organizan y se conocen a través de sus Vereine: hay clubes registrados para casi todo, del fútbol al canto, y siempre buscan miembros nuevos." },
    ],
    esempi: [
      { it: "Ich spiele gern Fußball mit meinen Freunden.", es: "Me gusta jugar al fútbol con mis amigos." },
      { it: "Ich mache lieber Yoga als Fitness.", es: "Prefiero hacer yoga que gimnasia." },
      { it: "Am liebsten lese ich am Wochenende.", es: "Lo que más me gusta es leer los fines de semana." },
      { it: "Ich mag Fotografie und Musik.", es: "Me gustan la fotografía y la música." },
      { it: "Fußball ist nicht mein Ding. Ich wandere gern.", es: "El fútbol no es lo mío. Me gusta hacer senderismo." },
    ],
    usi: [
      { q: "«Prefiero hacer yoga» (frente al fútbol):", options: ["Ich mache gern Yoga.", "Ich mache lieber Yoga.", "Ich mache am liebsten Yoga."], answer: 1, explain: "lieber expresa preferencia entre dos opciones; gern es neutro y am liebsten es el superlativo." },
      { q: "«Me gusta leer»:", options: ["Ich lese gern.", "Ich gern lese.", "Ich mag gern lesen."], answer: 0, explain: "El adverbio gern va DETRÁS del verbo conjugado, y con verbos no se combina mögen + gern." },
    ],
  },

  "de-cu-a1-08": {
    sezioni: [
      { t: "So funktioniert es", body: "möchten es la forma cortés de pedir (procede de mögen): ich möchte, du möchtest, er/sie möchte, Sie möchten + acusativo: «Ich möchte ein Bier» (das Bier → ein), «Ich möchte einen Apfelsaft» (der Saft → einen), «Ich möchte eine Cola» (igual). Alternativa igual de cortés: «Ich hätte gern…» (literalmente 'tendría con gusto'), sobre todo con platos: «Ich hätte gern die Bratwurst»." },
      { t: "Wann man es benutzt", body: "Es la gramática del Biergarten: «Was möchten Sie essen?», «Was empfehlen Sie?» (¿qué recomienda?), «Die Speisekarte, bitte» (la carta). Antes de empezar: «Guten Appetit!». Brindis: «Prost!». Al terminar: «Zahlen, bitte!» y el elogio: «Es war sehr lecker» (estaba muy rico)." },
      { t: "Achtung (für Spanischsprachige)", body: "1) möchte no es will: «Ich will ein Bier» con el camarero suena exigente y maleducado; el estándar es möchte o hätte gern. 2) Respeta el género para el artículo: das Bier → ein Bier, der Apfelsaft → einen Apfelsaft, die Cola → eine Cola. 3) Sorpresa cultural: el agua del grifo (Leitungswasser) no se pide en Alemania y no es gratis; pide «ein Wasser» y espera la pregunta «mit oder ohne Kohlensäure» (con o sin gas)." },
      { t: "Im echten Gespräch", body: "Guion del Biergarten bávaro bajo los castaños: «Was möchten Sie trinken?» → «Ich möchte ein Bier, bitte. Was ist ein Radler?» → «Bier mit Limonade — sehr erfrischend!» → «Dann probiere ich einen Radler.» → «Und essen? Die Bratwurst mit Kartoffelsalat ist sehr beliebt.» → «Guten Appetit!» → «Zahlen, bitte! Es war sehr lecker.» En el Biergarten puedes incluso traer tu propia comida si pides las bebidas allí." },
    ],
    esempi: [
      { it: "Ich möchte ein Bier und eine Bratwurst, bitte.", es: "Quisiera una cerveza y una salchicha a la brasa, por favor." },
      { it: "Was empfehlen Sie? — Die Knödel sind sehr gut.", es: "¿Qué recomienda? — Los Knödel están muy buenos." },
      { it: "Ich hätte gern den Salat mit Hähnchen.", es: "Quisiera la ensalada con pollo." },
      { it: "Möchten Sie auch einen Nachtisch?", es: "¿Desea también un postre?" },
      { it: "Zahlen, bitte! Es war sehr lecker.", es: "¡La cuenta, por favor! Estaba muy rico." },
    ],
    usi: [
      { q: "«Quisiera una cerveza» (das Bier):", options: ["Ich möchte eine Bier.", "Ich möchte ein Bier.", "Ich möchte einen Bier."], answer: 1, explain: "Bier es neutro → en acusativo sigue siendo ein." },
      { q: "El pedido más cortés al camarero:", options: ["Ich will einen Kaffee.", "Ich möchte einen Kaffee, bitte.", "Gib mir einen Kaffee!"], answer: 1, explain: "möchte + bitte es el estándar cortés; will suena a exigencia y el imperativo a orden." },
    ],
  },

  "de-cu-a1-09": {
    sezioni: [
      { t: "So funktioniert es", body: "Verbos con cambio de raíz en du y er/sie/es: fahren → du fährst, er fährt (a→ä); lesen → du liest, er liest (e→ie); nehmen → du nimmst, er nimmt (la h desaparece y la vocal se acorta). Con ich NO cambian: «ich fahre», «ich lese», «ich nehme»; y con Sie tampoco: «Fahren Sie mit?», «Nehmen Sie den ICE»." },
      { t: "Wann man es benutzt", body: "Es la gramática de la estación: «Wann fährt der nächste Zug?» (¿cuándo sale el próximo tren?), «Ich nehme den ICE um 14:30 Uhr» (con den: acusativo masculino), «Der Zug fährt ab Gleis sieben ab» (sale de la vía siete; abfahren es separable), «Wie lange fährt der Zug? — Ungefähr zwei Stunden», «Der Zug hat zehn Minuten Verspätung» (die Verspätung = el retraso)." },
      { t: "Achtung (für Spanischsprachige)", body: "1) El umlaut y el cambio de raíz SOLO aparecen en du/er: «ich fahre, du fährst»; decir «ich fähre» o «du fahrest» es error doble. 2) 'Tomar el tren' es «den Zug nehmen» con DEN (acusativo masculino): «Ich nehme den ICE um 14:30 Uhr». 3) El reloj es de 24 horas en horarios y billetes: el tren de las 14:30 es «um 14:30 Uhr», nunca 'a las 2:30 de la tarde', y ab Gleis + número indica la vía sin preposición adicional." },
      { t: "Im echten Gespräch", body: "Guion del mostrador DB en el Hauptbahnhof: «Guten Tag! Ein Ticket nach Hamburg, bitte.» → «Einfach oder hin und zurück?» → «Hin und zurück, bitte. Wann fährt der nächste Zug?» → «Um 14:30 Uhr ab Gleis sieben. Der ICE braucht ungefähr zwei Stunden.» → «Gute Fahrt!» Si hay retraso, el altavoz lo anuncia con una disculpa: «Wir entschuldigen uns für die Verspätung» — y todos asienten como quien saluda a un viejo conocido." },
    ],
    esempi: [
      { it: "Wann fährt der nächste Zug nach Hamburg?", es: "¿Cuándo sale el próximo tren a Hamburgo?" },
      { it: "Ich nehme den ICE um 14:30 Uhr.", es: "Tomo el ICE de las 14:30." },
      { it: "Der Zug fährt heute ab Gleis sieben ab.", es: "El tren sale hoy de la vía siete." },
      { it: "Liest du gern im Zug? — Ja, im Zug lese ich immer.", es: "¿Te gusta leer en el tren? — Sí, en el tren leo siempre." },
      { it: "Der Zug hat zehn Minuten Verspätung.", es: "El tren va con diez minutos de retraso." },
    ],
    usi: [
      { q: "«¿Cuánto tarda el viaje en tren?»", options: ["Wie lange fährt der Zug?", "Wie viel fährt der Zug?", "Wie oft fährt der Zug?"], answer: 0, explain: "wie lange = duración; wie viel iría al precio y wie oft a la frecuencia." },
      { q: "«Tomamos el ICE de las 14:30»:", options: ["Wir nehmen der ICE um 14:30 Uhr.", "Wir nehmen den ICE um 14:30 Uhr.", "Wir nehmt den ICE um 14:30 Uhr."], answer: 1, explain: "nehmen + acusativo masculino: den ICE; y con wir la forma correcta es nehmen." },
    ],
  },

  "de-cu-a1-10": {
    sezioni: [
      { t: "So funktioniert es", body: "El tiempo meteorológico usa es impersonal: «Es regnet» (llueve), «Es schneit» (nieva), «Es ist kalt» (hace frío), «Es ist warm» (hace calor), «Es ist windig und bewölkt» (hay viento y está nublado), «Die Sonne scheint» (hace sol). La temperatura: «Es hat 25 Grad» (hay 25 grados, forma coloquial). Estaciones y meses van con im: im Winter, im Sommer, im Januar, im August." },
      { t: "Wann man es benutzt", body: "El Wetter es EL tema de conversación nacional, el small talk perfecto con desconocidos: «Wie ist das Wetter heute?», «Es regnet schon wieder!» (¡llueve otra vez!), «Es ist heute kalt, oder?», «Vergiss den Regenschirm nicht!» (no olvides el paraguas). Para comparar: «In Spanien ist es im Winter wärmer» (más cálido)." },
      { t: "Achtung (für Spanischsprachige)", body: "1) 'Hace frío' NO se traduce al pie de la letra: nunca «Es macht kalt» ni «Es hat kalt»; el patrón fijo es es ist + adjetivo: «Es ist kalt». 2) im = in dem para estaciones y meses: «im Sommer», «im August»; la forma «in Sommer» no existe. 3) Los fenómenos llevan siempre es: «Es regnet», «Es schneit»; «regnet» a secas no forma frase, y el sol se expresa con scheint: «Die Sonne scheint»." },
      { t: "Im echten Gespräch", body: "Guion de Hamburgo, cualquier día: «Morgen! Schau mal: Es regnet schon wieder!» → «Ja, typisch Hamburg. Im Sommer wird es besser.» → «Es ist heute windig, oder?» → «Ja, der Wind kommt direkt von der Nordsee. Vergiss den Regenschirm nicht!» Ese intercambio de veinte segundos con un vecino o la cajera es el small talk alemán en estado puro: el tiempo nunca falla como tema." },
    ],
    esempi: [
      { it: "Wie ist das Wetter heute? — Es regnet.", es: "¿Qué tiempo hace hoy? — Llueve." },
      { it: "Es ist kalt und windig in Hamburg.", es: "Hace frío y viento en Hamburgo." },
      { it: "Die Sonne scheint. Es hat 25 Grad.", es: "Hace sol. Hay 25 grados." },
      { it: "Im Winter schneit es oft in München.", es: "En invierno nieva a menudo en Múnich." },
      { it: "Vergiss den Regenschirm nicht!", es: "¡No olvides el paraguas!" },
    ],
    usi: [
      { q: "«Hace frío»:", options: ["Es ist kalt.", "Es macht kalt.", "Es hat kalt."], answer: 0, explain: "Patrón fijo impersonal: es ist + adjetivo; machen y haben no valen para el tiempo." },
      { q: "«En verano»:", options: ["in Sommer", "im Sommer", "am Sommer"], answer: 1, explain: "im = in dem; estaciones y meses siempre con im." },
    ],
  },

  "de-cu-a1-11": {
    sezioni: [
      { t: "So funktioniert es", body: "Para responder wo? (¿dónde?) el alemán usa dativo con las preposiciones de lugar: in der Küche (femenina), im Erdgeschoss (neutro: in dem), im Flur (masculino: in dem), am Ende des Flurs (an dem), in der Xstraße. La regla básica de A1: die → in der, das/der → im, lugar puntual → am. «In der Nähe» = por la zona, cerca." },
      { t: "Wann man es benutzt", body: "Es la gramática de la búsqueda de piso: «Ich suche ein Zimmer», «Die Miete kostet 450 Euro, Nebenkosten inklusive» (gastos incluidos), «Wie viele Leute wohnen in der WG?». En la visita: «Wo ist die Küche?» → «Im Erdgeschoss.» → «Und das Bad?» → «Am Ende des Flurs.» «450 Euro warm» incluye los gastos; «kalt», no." },
      { t: "Achtung (für Spanischsprachige)", body: "1) Erdgeschoss = planta baja: para un alemán el «erste Stock» es el primer piso ALTO; si buscas 'primer piso' alemán, estás un nivel más arriba de lo que crees. 2) El género decide la contracción: in DER Küche (femenina) pero IM Flur (masculino) e IM Erdgeschoss (neutro). 3) Falso amigo: die Miete es 'el alquiler'; no significa meta ni objetivo (que es das Ziel), aunque suene a 'meta'." },
      { t: "Im echten Gespräch", body: "Guion de la visita a la WG de Friedrichshain: «Hi, ich bin Anna. Komm rein! Das ist das Zimmer.» → «Toll! Und wo ist die Küche?» → «Im Erdgeschoss, ganz hinten. Das Bad ist am Ende des Flurs.» → «Wie hoch ist die Miete?» → «450 Euro warm, Nebenkosten inklusive.» Anna te enseña la casa y luego pregunta: «Was machst du beruflich?» — la WG es una pequeña entrevista de convivencia, no solo un alquiler." },
    ],
    esempi: [
      { it: "Ich suche ein Zimmer in Berlin-Friedrichshain.", es: "Busco una habitación en Berlín-Friedrichshain." },
      { it: "Die Miete kostet 450 Euro, Nebenkosten inklusive.", es: "El alquiler cuesta 450 euros, gastos incluidos." },
      { it: "Die Küche ist im Erdgeschoss.", es: "La cocina está en la planta baja." },
      { it: "Das Bad ist am Ende des Flurs.", es: "El baño está al final del pasillo." },
      { it: "In der WG wohnen vier Leute.", es: "En el piso compartido viven cuatro personas." },
    ],
    usi: [
      { q: "«La cocina está en la planta baja»:", options: ["Die Küche ist im ersten Stock.", "Die Küche ist im Erdgeschoss.", "Die Küche ist auf Erdgeschoss."], answer: 1, explain: "Erdgeschoss = planta baja; im ersten Stock hay que subir un piso." },
      { q: "«El baño está al final del pasillo» (das Bad, der Flur):", options: ["Das Bad ist am Ende des Flurs.", "Das Bad ist im Ende des Flurs.", "Das Bad ist in die Flur Ende."], answer: 0, explain: "am = an dem: los puntos de referencia como 'el final' van con an." },
    ],
  },

  "de-cu-a1-12": {
    sezioni: [
      { t: "So funktioniert es", body: "Conectores temporales para ordenar un relato: zuerst (primero), dann (luego), danach (después de eso), zuletzt (por último). Van en posición 1 de la frase y el verbo ocupa la posición 2, con el sujeto detrás: «Zuerst frühstücken wir», «Danach machen wir Fotos». Es la misma mecánica de la posición del verbo que con los adverbios: la posición 2 del verbo es sagrada en alemán." },
      { t: "Wann man es benutzt", body: "Para planificar y narrar un día completo: «Was machen wir zuerst? — Zuerst frühstücken wir in der Bäckerei. Dann fahren wir zum Brandenburger Tor. Danach machen wir Fotos. Und zuletzt essen wir eine Currywurst.» Aceptación del plan: «Einverstanden!» (de acuerdo). Expectativa: «Ich freue mich schon!» (ya me apetece)." },
      { t: "Achtung (für Spanischsprachige)", body: "1) Con un conector en posición 1, el verbo sigue SIEMPRE en posición 2: «Zuerst wir frühstücken» es imposible; lo correcto es «Zuerst frühstücken wir». 2) dann y danach no son gemelos: dann introduce el siguiente paso de un plan; danach significa 'después de lo que acabo de contar'. 3) zuletzt cierra la secuencia del día y no significa 'la última vez' (das letzte Mal): «Und zuletzt trinken wir Kaffee» es el punto final del relato." },
      { t: "Im echten Gespräch", body: "Guion de la planificación con Lena: «Was machen wir zuerst?» → «Zuerst frühstücken wir in der Bäckerei. Dann gehen wir zum Brandenburger Tor.» → «Danach besuchen wir die Museumsinsel?» → «Ja, und zuletzt trinken wir noch einen Kaffee am Alexanderplatz. Einverstanden?» → «Einverstanden! Ich freue mich schon!» Con estos cuatro conectores puedes contar cualquier día de tu vida en alemán: es el repaso perfecto de todo el A1." },
    ],
    esempi: [
      { it: "Zuerst frühstücken wir in der Bäckerei.", es: "Primero desayunamos en la panadería." },
      { it: "Dann fahren wir mit der U-Bahn zum Museum.", es: "Luego vamos en metro al museo." },
      { it: "Danach machen wir Fotos am Checkpoint Charlie.", es: "Después hacemos fotos en el Checkpoint Charlie." },
      { it: "Zuletzt trinken wir einen Kaffee am Alexanderplatz.", es: "Por último tomamos un café en el Alexanderplatz." },
      { it: "Es wird ein schöner Tag!", es: "¡Será un día estupendo!" },
    ],
    usi: [
      { q: "Orden correcto con conector inicial:", options: ["Zuerst wir frühstücken.", "Zuerst frühstücken wir.", "Wir zuerst frühstücken."], answer: 1, explain: "Conector en posición 1 → verbo en posición 2 y sujeto detrás del verbo." },
      { q: "«Primero desayunamos. ___ vamos al museo.»", options: ["Denn", "Dann", "Wenn"], answer: 1, explain: "dann introduce el paso siguiente; denn es 'porque' y wenn es 'si/cuando'." },
    ],
  },
};
