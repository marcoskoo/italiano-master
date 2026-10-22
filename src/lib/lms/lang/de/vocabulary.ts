import type { VocabWord, WordCategory } from "../../types";

/* ── Vokabular · alemán (Hochdeutsch) DE→ES · v9.39 ──────────────────
   Espejo del diccionario didáctico IT (src/lib/lms/vocabulary.ts):
   campo `.it` = texto en la lengua de estudio (aquí alemán), `.es` =
   español. `pron` = re-escritura fonética pensada para hispanohablantes
   (ch→j, w→v, v→f, z→ts, ei→ái, eu→oi, ie→í, j→y, h inicial→j; ö/ü se
   conservan porque no existen grafías españolas mejores). Los sustantivos
   se citan CON artículo (der/die/das) porque en alemán el género forma
   parte del lema; el plural se da desnudo (Bücher).                     */

const W = (
  id: string, it: string, es: string, pron: string,
  type: VocabWord["type"], cat: WordCategory, level: VocabWord["level"],
  example: { it: string; es: string },
  extra?: Partial<Omit<VocabWord, "id" | "it" | "es" | "pron" | "type" | "cat" | "level" | "example">>
): VocabWord => ({ id, it, es, pron, type, cat, level, example, ...extra });

export const DE_VOCAB: VocabWord[] = [
  /* saluti */
  W("de-w-guten-tag", "Guten Tag", "buenos días / buenas tardes (saludo estándar)", "gúten tak", "espressione", "saluti", "A1", { it: "Guten Tag, Frau Müller!", es: "¡Buenos días, señora Müller!" }),
  W("de-w-hallo", "Hallo", "hola", "jaló", "interiezione", "saluti", "A1", { it: "Hallo, wie geht es dir?", es: "¡Hola! ¿Cómo estás?" }),
  W("de-w-guten-morgen", "Guten Morgen", "buenos días (por la mañana)", "gúten mórguen", "espressione", "saluti", "A1", { it: "Guten Morgen, hast du gut geschlafen?", es: "Buenos días, ¿has dormido bien?" }),
  W("de-w-guten-abend", "Guten Abend", "buenas tardes / buenas noches (al llegar)", "gúten ábent", "espressione", "saluti", "A1", { it: "Guten Abend, kommen Sie herein!", es: "¡Buenas noches, pase usted!" }),
  W("de-w-tschuess", "Tschüss", "chao / adiós (informal)", "chüs", "interiezione", "saluti", "A1", { it: "Tschüss, bis morgen!", es: "¡Chao, hasta mañana!" }, { related: ["Auf Wiedersehen"] }),
  W("de-w-auf-wiedersehen", "Auf Wiedersehen", "adiós (formal)", "áuf vídersejen", "espressione", "saluti", "A1", { it: "Auf Wiedersehen, Herr Doktor Weber!", es: "¡Adiós, señor doctor Weber!" }),
  W("de-w-danke", "Danke", "gracias", "dánke", "espressione", "saluti", "A1", { it: "Danke schön für deine Hilfe!", es: "¡Muchas gracias por tu ayuda!" }, { related: ["Bitte"] }),
  W("de-w-bitte", "Bitte", "por favor / de nada / ¿mande?", "bíte", "espressione", "saluti", "A1", { it: "Bitte, nehmen Sie Platz.", es: "Por favor, tome asiento." }, { note: "Bitte sirve para pedir ('por favor'), responder a danke ('de nada') y pedir que se repita ('¿cómo?')." }),

  /* famiglia */
  W("de-w-mutter", "die Mutter", "madre", "múter", "sostantivo", "famiglia", "A1", { it: "Meine Mutter kocht sehr gut.", es: "Mi madre cocina muy bien." }, { plural: "Mütter", syn: ["die Mama"] }),
  W("de-w-vater", "der Vater", "padre", "fáter", "sostantivo", "famiglia", "A1", { it: "Mein Vater arbeitet in Köln.", es: "Mi padre trabaja en Colonia." }, { plural: "Väter", syn: ["der Papa"] }),
  W("de-w-bruder", "der Bruder", "hermano", "brúder", "sostantivo", "famiglia", "A1", { it: "Mein Bruder heißt Max.", es: "Mi hermano se llama Max." }, { plural: "Brüder" }),
  W("de-w-schwester", "die Schwester", "hermana", "shvéster", "sostantivo", "famiglia", "A1", { it: "Meine Schwester studiert in München.", es: "Mi hermana estudia en Múnich." }, { plural: "Schwestern" }),
  W("de-w-sohn", "der Sohn", "hijo", "son", "sostantivo", "famiglia", "A1", { it: "Ihr Sohn ist fünf Jahre alt.", es: "Su hijo tiene cinco años." }, { plural: "Söhne" }),
  W("de-w-tochter", "die Tochter", "hija", "tójter", "sostantivo", "famiglia", "A1", { it: "Seine Tochter lernt Spanisch.", es: "Su hija aprende español." }, { plural: "Töchter" }),
  W("de-w-grossmutter", "die Großmutter", "abuela", "grósmuter", "sostantivo", "famiglia", "A1", { it: "Meine Großmutter erzählt schöne Geschichten.", es: "Mi abuela cuenta historias bonitas." }, { plural: "Großmütter", syn: ["die Oma"] }),
  W("de-w-kind", "das Kind", "niño / niño-hijo", "kint", "sostantivo", "famiglia", "A1", { it: "Das Kind spielt im Garten.", es: "El niño juega en el jardín." }, { plural: "Kinder", note: "Sustantivo neutro: das Kind. Ojo: das Mädchen (la niña) también es neutro." }),
  W("de-w-ehefrau", "die Ehefrau", "esposa / mujer", "éefrau", "sostantivo", "famiglia", "A2", { it: "Seine Ehefrau ist Ärztin von Beruf.", es: "Su esposa es médica de profesión." }, { plural: "Ehefrauen", related: ["der Ehemann (esposo)"] }),

  /* casa */
  W("de-w-haus", "das Haus", "casa", "háus", "sostantivo", "casa", "A1", { it: "Unser Haus hat einen kleinen Garten.", es: "Nuestra casa tiene un jardín pequeño." }, { plural: "Häuser" }),
  W("de-w-wohnung", "die Wohnung", "piso / apartamento / vivienda", "vónung", "sostantivo", "casa", "A1", { it: "Ich suche eine Wohnung in Berlin.", es: "Busco un piso en Berlín." }, { plural: "Wohnungen" }),
  W("de-w-kueche", "die Küche", "cocina", "kúje", "sostantivo", "casa", "A1", { it: "Die Küche ist klein, aber gemütlich.", es: "La cocina es pequeña, pero acogedora." }, { plural: "Küchen" }),
  W("de-w-zimmer", "das Zimmer", "habitación / cuarto", "tsímer", "sostantivo", "casa", "A1", { it: "Mein Zimmer ist hell und ruhig.", es: "Mi habitación es luminosa y tranquila." }, { plural: "Zimmer" }),
  W("de-w-bad", "das Bad", "baño", "bat", "sostantivo", "casa", "A1", { it: "Entschuldigung, wo ist das Bad?", es: "Disculpa, ¿dónde está el baño?" }, { plural: "Bäder" }),
  W("de-w-tuer", "die Tür", "puerta", "túr", "sostantivo", "casa", "A1", { it: "Mach bitte die Tür zu!", es: "¡Cierra la puerta, por favor!" }, { plural: "Türen" }),
  W("de-w-tisch", "der Tisch", "mesa", "tish", "sostantivo", "casa", "A1", { it: "Das Buch liegt auf dem Tisch.", es: "El libro está sobre la mesa." }, { plural: "Tische" }),
  W("de-w-bett", "das Bett", "cama", "bet", "sostantivo", "casa", "A1", { it: "Ich gehe um zehn Uhr ins Bett.", es: "Me voy a la cama a las diez." }, { plural: "Betten" }),
  W("de-w-wohnen", "wohnen", "vivir (residir)", "vónen", "verbo", "casa", "A1", { it: "Ich wohne seit zwei Jahren in Hamburg.", es: "Vivo en Hamburgo desde hace dos años." }),

  /* alimentazione */
  W("de-w-brot", "das Brot", "pan", "brot", "sostantivo", "alimentazione", "A1", { it: "Ich esse gern Brot mit Käse.", es: "Me gusta comer pan con queso." }, { plural: "Brote" }),
  W("de-w-wasser", "das Wasser", "agua", "váser", "sostantivo", "alimentazione", "A1", { it: "Ein Glas Wasser, bitte.", es: "Un vaso de agua, por favor." }, { plural: "Wässer", note: "Casi no se usa en plural; die Wässer solo para aguas minerales concretas (Heilwässer)." }),
  W("de-w-kaffee", "der Kaffee", "café", "kafé", "sostantivo", "alimentazione", "A1", { it: "Morgens trinke ich immer Kaffee.", es: "Por la mañana siempre tomo café." }, { plural: "Kaffees" }),
  W("de-w-bier", "das Bier", "cerveza", "bir", "sostantivo", "alimentazione", "A1", { it: "Ein Bier, bitte!", es: "¡Una cerveza, por favor!" }, { plural: "Biere", note: "Neutro: das Bier, como das Wasser." }),
  W("de-w-kaese", "der Käse", "queso", "kése", "sostantivo", "alimentazione", "A1", { it: "Ich nehme ein Brötchen mit Käse.", es: "Tomo un panecillo con queso." }, { plural: "Käse" }),
  W("de-w-apfel", "der Apfel", "manzana", "ápfel", "sostantivo", "alimentazione", "A1", { it: "Die Äpfel sind heute frisch.", es: "Las manzanas están frescas hoy." }, { plural: "Äpfel" }),
  W("de-w-milch", "die Milch", "leche", "milj", "sostantivo", "alimentazione", "A1", { it: "Trinkst du Kaffee mit Milch?", es: "¿Bebes el café con leche?" }),
  W("de-w-fleisch", "das Fleisch", "carne", "fláish", "sostantivo", "alimentazione", "A1", { it: "Ich esse kein Fleisch.", es: "No como carne." }),
  W("de-w-gemuese", "das Gemüse", "verdura", "guemúse", "sostantivo", "alimentazione", "A2", { it: "Ich kaufe Gemüse auf dem Markt.", es: "Compro verdura en el mercado." }, { plural: "Gemüse" }),
  W("de-w-essen", "essen", "comer", "ésen", "verbo", "alimentazione", "A1", { it: "Wir essen um acht Uhr zu Abend.", es: "Cenamos a las ocho." }, { related: ["das Essen (la comida)"] }),

  /* ristorante */
  W("de-w-restaurant", "das Restaurant", "restaurante", "restorá", "sostantivo", "ristorante", "A1", { it: "Das Restaurant an der Ecke ist sehr gut.", es: "El restaurante de la esquina es muy bueno." }, { plural: "Restaurants", note: "Pronunciación francesa: la t final es muda." }),
  W("de-w-speisekarte", "die Speisekarte", "la carta / el menú", "shpáisekarte", "sostantivo", "ristorante", "A1", { it: "Die Speisekarte, bitte.", es: "La carta, por favor." }, { plural: "Speisekarten" }),
  W("de-w-kellner", "der Kellner", "camarero / mesero", "kélner", "sostantivo", "ristorante", "A1", { it: "Kellner, die Rechnung, bitte!", es: "¡Camarero, la cuenta, por favor!" }, { plural: "Kellner" }),
  W("de-w-rechnung", "die Rechnung", "cuenta (a pagar)", "réjnung", "sostantivo", "ristorante", "A1", { it: "Zahlen Sie zusammen oder getrennt? — Getrennt, bitte.", es: "¿Pagan juntos o por separado? — Por separado, por favor." }, { plural: "Rechnungen", note: "Falso amigo parcial: Rechnung es la cuenta que pagas; el 'recibo' que te dan es der Beleg." }),
  W("de-w-fruehstueck", "das Frühstück", "desayuno", "fríshtük", "sostantivo", "ristorante", "A1", { it: "Das Frühstück gibt es von sieben bis zehn Uhr.", es: "El desayuno se sirve de siete a diez." }, { related: ["frühstücken (desayunar)"] }),

  /* compras */
  W("de-w-geschaeft", "das Geschäft", "tienda / negocio", "geshéft", "sostantivo", "compras", "A1", { it: "Das Geschäft öffnet um neun Uhr.", es: "La tienda abre a las nueve." }, { plural: "Geschäfte" }),
  W("de-w-preis", "der Preis", "precio", "práis", "sostantivo", "compras", "A1", { it: "Der Preis ist mir zu hoch.", es: "El precio me parece demasiado alto." }, { plural: "Preise" }),
  W("de-w-kaufen", "kaufen", "comprar", "káufen", "verbo", "compras", "A1", { it: "Ich kaufe ein Geschenk für meine Mutter.", es: "Compro un regalo para mi madre." }, { ant: ["verkaufen (vender)"] }),
  W("de-w-kosten", "kosten", "costar", "kósten", "verbo", "compras", "A1", { it: "Wie viel kostet ein Kilo Äpfel?", es: "¿Cuánto cuesta un kilo de manzanas?" }),
  W("de-w-zahlen", "zahlen", "pagar", "tsálen", "verbo", "compras", "A1", { it: "Ich zahle mit der Karte.", es: "Pago con tarjeta." }, { related: ["bar zahlen (pagar en efectivo)"] }),
  W("de-w-markt", "der Markt", "mercado", "markt", "sostantivo", "compras", "A1", { it: "Auf dem Markt kaufe ich frisches Obst und Gemüse.", es: "En el mercado compro fruta y verdura frescas." }, { plural: "Märkte" }),

  /* transporte */
  W("de-w-zug", "der Zug", "tren", "tsuk", "sostantivo", "transporte", "A1", { it: "Der Zug nach München fährt um acht Uhr.", es: "El tren a Múnich sale a las ocho." }, { plural: "Züge" }),
  W("de-w-bus", "der Bus", "autobús", "bus", "sostantivo", "transporte", "A1", { it: "Der Bus hat heute Verspätung.", es: "El autobús lleva retraso hoy." }, { plural: "Busse" }),
  W("de-w-fahrkarte", "die Fahrkarte", "billete / boleto", "fárkarte", "sostantivo", "transporte", "A1", { it: "Eine Fahrkarte nach Bonn, bitte.", es: "Un billete para Bonn, por favor." }, { plural: "Fahrkarten" }),
  W("de-w-bahnhof", "der Bahnhof", "estación (de tren)", "bánhof", "sostantivo", "transporte", "A1", { it: "Entschuldigung, wie komme ich zum Bahnhof?", es: "Disculpe, ¿cómo llego a la estación?" }, { plural: "Bahnhöfe" }),
  W("de-w-auto", "das Auto", "coche / carro", "áuto", "sostantivo", "transporte", "A1", { it: "Mein Auto ist schon zwanzig Jahre alt.", es: "Mi coche ya tiene veinte años." }, { plural: "Autos" }),
  W("de-w-strasse", "die Straße", "calle / carretera", "shtráse", "sostantivo", "transporte", "A1", { it: "Ich wohne in der Goethestraße.", es: "Vivo en la calle Goethe." }, { plural: "Straßen", note: "ß tras vocal larga (Straße); no 'Strasse'." }),
  W("de-w-fahren", "fahren", "ir (en vehículo) / conducir", "fáren", "verbo", "transporte", "A1", { it: "Ich fahre mit dem Fahrrad zur Arbeit.", es: "Voy en bicicleta al trabajo." }),

  /* viaggi */
  W("de-w-reise", "die Reise", "viaje", "ráise", "sostantivo", "viaggi", "A1", { it: "Gute Reise und komm gut nach Hause!", es: "¡Buen viaje y vuelve bien a casa!" }, { plural: "Reisen", related: ["reisen (viajar)"] }),
  W("de-w-flughafen", "der Flughafen", "aeropuerto", "flúkhafen", "sostantivo", "viaggi", "A2", { it: "Der Flughafen liegt weit außerhalb.", es: "El aeropuerto está muy a las afueras." }, { plural: "Flughäfen" }),
  W("de-w-pass", "der Pass", "pasaporte", "pas", "sostantivo", "viaggi", "A2", { it: "Ihren Pass, bitte.", es: "Su pasaporte, por favor." }, { plural: "Pässe" }),
  W("de-w-buchen", "buchen", "reservar", "bújen", "verbo", "viaggi", "A2", { it: "Ich buche ein Hotelzimmer für zwei Nächte.", es: "Reservo una habitación de hotel para dos noches." }),

  /* hotel */
  W("de-w-hotel", "das Hotel", "hotel", "hotél", "sostantivo", "hotel", "A1", { it: "Das Hotel liegt direkt am Meer.", es: "El hotel está junto al mar." }, { plural: "Hotels" }),
  W("de-w-reservierung", "die Reservierung", "reserva", "reservírung", "sostantivo", "hotel", "A2", { it: "Ich habe eine Reservierung auf den Namen Schmidt.", es: "Tengo una reserva a nombre de Schmidt." }, { plural: "Reservierungen" }),
  W("de-w-einzelzimmer", "das Einzelzimmer", "habitación individual", "áintseltsímer", "sostantivo", "hotel", "A2", { it: "Ein Einzelzimmer mit Frühstück, bitte.", es: "Una habitación individual con desayuno, por favor." }, { related: ["das Doppelzimmer (habitación doble)"] }),
  W("de-w-rezeption", "die Rezeption", "recepción", "retséptsión", "sostantivo", "hotel", "A2", { it: "Fragen Sie bitte an der Rezeption.", es: "Pregunte usted en recepción, por favor." }),

  /* salute */
  W("de-w-arzt", "der Arzt", "médico / doctor", "artst", "sostantivo", "salud", "A1", { it: "Ich gehe morgen zum Arzt.", es: "Mañana voy al médico." }, { plural: "Ärzte", note: "La médica es die Ärztin, con umlaut." }),
  W("de-w-apotheke", "die Apotheke", "farmacia", "apotéke", "sostantivo", "salud", "A1", { it: "Gibt es hier in der Nähe eine Apotheke?", es: "¿Hay una farmacia aquí cerca?" }, { plural: "Apotheken" }),
  W("de-w-krank", "krank", "enfermo", "krank", "aggettivo", "salud", "A1", { it: "Ich bin krank und bleibe heute im Bett.", es: "Estoy enfermo y hoy me quedo en la cama." }, { ant: ["gesund (sano)"] }),
  W("de-w-schmerz", "der Schmerz", "dolor", "shmérts", "sostantivo", "salud", "A2", { it: "Ich habe Kopfschmerzen seit dem Morgen.", es: "Tengo dolor de cabeza desde la mañana." }, { plural: "Schmerzen", related: ["Weh tun: Der Kopf tut weh"] }),
  W("de-w-medikament", "das Medikament", "medicamento", "medikamént", "sostantivo", "salud", "A2", { it: "Nimm das Medikament nach dem Essen.", es: "Toma el medicamento después de comer." }, { plural: "Medikamente" }),

  /* lavoro */
  W("de-w-arbeit", "die Arbeit", "trabajo", "árbeit", "sostantivo", "lavoro", "A1", { it: "Die Arbeit macht mir Spaß.", es: "El trabajo me divierte." }, { plural: "Arbeiten", ant: ["die Freizeit"] }),
  W("de-w-arbeiten", "arbeiten", "trabajar", "árbeiten", "verbo", "lavoro", "A1", { it: "Ich arbeite in einem kleinen Büro.", es: "Trabajo en una oficina pequeña." }),
  W("de-w-kollege", "der Kollege", "colega", "kolégue", "sostantivo", "lavoro", "B1", { it: "Mein Kollege ist diese Woche im Urlaub.", es: "Mi colega está de vacaciones esta semana." }, { plural: "Kollegen" }),
  W("de-w-gehalt", "das Gehalt", "sueldo / salario", "guehált", "sostantivo", "lavoro", "B1", { it: "Das Gehalt ist nicht hoch, aber die Arbeit gefällt mir.", es: "El sueldo no es alto, pero el trabajo me gusta." }, { plural: "Gehälter" }),
  W("de-w-vorstellungsgespraech", "das Vorstellungsgespräch", "entrevista (de trabajo)", "fórshtélungsgeshpréj", "sostantivo", "lavoro", "B1", { it: "Morgen habe ich ein Vorstellungsgespräch bei einer Firma in Leipzig.", es: "Mañana tengo una entrevista de trabajo en una empresa de Leipzig." }, { plural: "Vorstellungsgespräche" }),
  W("de-w-vertrag", "der Vertrag", "contrato", "fertrák", "sostantivo", "lavoro", "B1", { it: "Ich habe den Vertrag gestern unterschrieben.", es: "Firmé el contrato ayer." }, { plural: "Verträge" }),

  /* studi */
  W("de-w-schule", "die Schule", "escuela", "shúle", "sostantivo", "studi", "A1", { it: "Die Kinder gehen zu Fuß zur Schule.", es: "Los niños van a la escuela a pie." }, { plural: "Schulen" }),
  W("de-w-student", "der Student", "estudiante", "shtudént", "sostantivo", "studi", "A1", { it: "Ich bin Student und lerne Deutsch.", es: "Soy estudiante y aprendo alemán." }, { plural: "Studenten", note: "La estudiante es die Studentin." }),
  W("de-w-lehrer", "der Lehrer", "maestro / profesor (de escuela)", "léierer", "sostantivo", "studi", "A1", { it: "Der Lehrer erklärt die Grammatik noch einmal.", es: "El profesor explica la gramática otra vez." }, { plural: "Lehrer", note: "En la universidad el profesor es der Professor / die Professorin." }),
  W("de-w-pruefung", "die Prüfung", "examen", "prífung", "sostantivo", "studi", "A1", { it: "Die Prüfung war schwerer, als ich dachte.", es: "El examen fue más difícil de lo que pensaba." }, { plural: "Prüfungen" }),
  W("de-w-buch", "das Buch", "libro", "buj", "sostantivo", "studi", "A1", { it: "Ich lese ein Buch über die Geschichte Berlins.", es: "Leo un libro sobre la historia de Berlín." }, { plural: "Bücher", note: "ch tras vocal breve suena rasposa (como la j española fuerte): buj." }),
  W("de-w-wort", "das Wort", "palabra", "vort", "sostantivo", "studi", "A1", { it: "Was bedeutet dieses Wort?", es: "¿Qué significa esta palabra?" }, { plural: "Wörter", note: "Wörter son palabras sueltas; Worte, palabras dichas con sentido." }),
  W("de-w-lernen", "lernen", "aprender / estudiar", "lérenen", "verbo", "studi", "A1", { it: "Ich lerne seit einem Jahr Deutsch.", es: "Aprendo alemán desde hace un año." }),
  W("de-w-lesen", "lesen", "leer", "lézen", "verbo", "studi", "A1", { it: "Ich lese gern Krimis.", es: "Me gusta leer novelas policíacas." }),

  /* citta */
  W("de-w-stadt", "die Stadt", "ciudad", "shtat", "sostantivo", "citta", "A1", { it: "Berlin ist eine große, lebendige Stadt.", es: "Berlín es una ciudad grande y llena de vida." }, { plural: "Städte" }),
  W("de-w-platz", "der Platz", "plaza / sitio", "plats", "sostantivo", "citta", "A1", { it: "Wir treffen uns um fünf auf dem Platz.", es: "Nos vemos a las cinco en la plaza." }, { plural: "Plätze" }),
  W("de-w-museum", "das Museum", "museo", "muséum", "sostantivo", "citta", "A1", { it: "Das Museum ist montags geschlossen.", es: "El museo está cerrado los lunes." }, { plural: "Museen" }),
  W("de-w-kirche", "die Kirche", "iglesia", "kírje", "sostantivo", "citta", "A1", { it: "Die Kirche stammt aus dem dreizehnten Jahrhundert.", es: "La iglesia data del siglo trece." }, { plural: "Kirchen" }),

  /* clima */
  W("de-w-sonne", "die Sonne", "sol", "sóne", "sostantivo", "clima", "A1", { it: "Die Sonne scheint heute den ganzen Tag.", es: "Hoy brilla el sol todo el día." }),
  W("de-w-regen", "der Regen", "lluvia", "réguen", "sostantivo", "clima", "A1", { it: "Der Regen hört einfach nicht auf.", es: "La lluvia no cesa." }),
  W("de-w-schnee", "der Schnee", "nieve", "shné", "sostantivo", "clima", "A1", { it: "Im Gebirge liegt noch viel Schnee.", es: "En la montaña todavía hay mucha nieve." }),
  W("de-w-wind", "der Wind", "viento", "vint", "sostantivo", "clima", "A1", { it: "Der Wind kommt heute vom Meer.", es: "El viento hoy viene del mar." }, { plural: "Winde" }),
  W("de-w-warm", "warm", "cálido / calor", "varm", "aggettivo", "clima", "A1", { it: "Heute ist es warm; wir setzen uns in den Garten.", es: "Hoy hace calor; nos sentamos en el jardín." }, { ant: ["kalt"] }),
  W("de-w-kalt", "kalt", "frío", "kalt", "aggettivo", "clima", "A1", { it: "Im Winter ist es in München oft kalt.", es: "En invierno en Múnich suele hacer frío." }, { ant: ["warm"] }),

  /* ropa */
  W("de-w-hemd", "das Hemd", "camisa", "hemt", "sostantivo", "ropa", "A1", { it: "Das weiße Hemd gehört meinem Bruder.", es: "La camisa blanca es de mi hermano." }, { plural: "Hemden" }),
  W("de-w-hose", "die Hose", "pantalón", "hóse", "sostantivo", "ropa", "A1", { it: "Die Hose ist mir zu eng.", es: "El pantalón me queda estrecho." }, { plural: "Hosen", note: "En alemán 'pantalón' va en singular: eine Hose." }),
  W("de-w-kleid", "das Kleid", "vestido", "kláit", "sostantivo", "ropa", "A1", { it: "Sie trägt ein rotes Kleid.", es: "Lleva un vestido rojo." }, { plural: "Kleider", note: "Kleider también puede ser 'la ropa' (conjunto)." }),
  W("de-w-schuhe", "die Schuhe", "zapatos", "shúe", "sostantivo", "ropa", "A1", { it: "Diese Schuhe sind wirklich bequem.", es: "Estos zapatos son de verdad cómodos." }),
  W("de-w-jacke", "die Jacke", "chaqueta", "yáke", "sostantivo", "ropa", "A1", { it: "Nimm eine Jacke mit, es ist kalt draußen.", es: "Lleva una chaqueta, hace frío fuera." }, { plural: "Jacken" }),

  /* tecnologia */
  W("de-w-computer", "der Computer", "computadora / ordenador", "kompiúter", "sostantivo", "tecnologia", "A1", { it: "Mein Computer ist schon ziemlich langsam.", es: "Mi computadora ya es bastante lenta." }, { plural: "Computer" }),
  W("de-w-handy", "das Handy", "teléfono móvil", "héndi", "sostantivo", "tecnologia", "A1", { it: "Mein Handy ist wieder leer.", es: "Mi móvil está otra vez sin batería." }, { plural: "Handys", note: "Anglicismo asentado; formal: das Mobiltelefon." }),
  W("de-w-passwort", "das Passwort", "contraseña", "pásvort", "sostantivo", "tecnologia", "A2", { it: "Ich habe mein Passwort vergessen.", es: "He olvidado mi contraseña." }, { plural: "Passwörter" }),
  W("de-w-internet", "das Internet", "internet", "ínternet", "sostantivo", "tecnologia", "A1", { it: "Das Internet funktioniert heute nicht richtig.", es: "Internet hoy no funciona bien." }),

  /* sport */
  W("de-w-fussball", "der Fußball", "fútbol", "fusbal", "sostantivo", "sport", "A1", { it: "Fußball ist in Deutschland ein Volkssport.", es: "El fútbol en Alemania es un deporte popular." }, { note: "ß tras vocal larga u (fuuut-bol): Fußball, nunca 'Fussball'." }),
  W("de-w-spiel", "das Spiel", "partido / juego", "shpil", "sostantivo", "sport", "A1", { it: "Das Spiel endet eins zu eins.", es: "El partido termina uno a uno." }, { plural: "Spiele" }),
  W("de-w-spielen", "spielen", "jugar / tocar (un instrumento)", "shpílen", "verbo", "sport", "A1", { it: "Die Kinder spielen im Park Fußball.", es: "Los niños juegan al fútbol en el parque." }),
  W("de-w-schwimmen", "schwimmen", "nadar", "shvímen", "verbo", "sport", "A1", { it: "Im Sommer schwimme ich gern im See.", es: "En verano me gusta nadar en el lago." }),

  /* musica */
  W("de-w-musik", "die Musik", "música", "musík", "sostantivo", "musica", "A1", { it: "Ich höre beim Kochen gern Musik.", es: "Me gusta escuchar música mientras cocino." }),
  W("de-w-lied", "das Lied", "canción", "lit", "sostantivo", "musica", "A1", { it: "Dieses Lied geht mir nicht aus dem Kopf.", es: "Esta canción no se me va de la cabeza." }, { plural: "Lieder" }),
  W("de-w-hoeren", "hören", "escuchar / oír", "hören", "verbo", "musica", "A1", { it: "Hörst du eigentlich gern Hörspiele?", es: "¿Te gusta escuchar radioteatros?" }, { note: "ö: labios como para decir u, pero diciendo e (como en 'shön')." }),

  /* cinema */
  W("de-w-kino", "das Kino", "cine", "kíno", "sostantivo", "cinema", "A1", { it: "Am Freitag gehen wir ins Kino.", es: "El viernes vamos al cine." }, { plural: "Kinos" }),
  W("de-w-film", "der Film", "película", "film", "sostantivo", "cinema", "A1", { it: "Der Film beginnt um zwanzig Uhr fünfzehn.", es: "La película empieza a las veinte quince." }, { plural: "Filme" }),
  W("de-w-schauspieler", "der Schauspieler", "actor", "sháushpíler", "sostantivo", "cinema", "B1", { it: "Der Schauspieler bekommt einen Preis für diese Rolle.", es: "El actor recibe un premio por este papel." }, { plural: "Schauspieler", note: "La actriz es die Schauspielerin." }),

  /* relazioni */
  W("de-w-freund", "der Freund", "amigo / novio", "froint", "sostantivo", "relazioni", "A1", { it: "Mein Freund Jonas kommt aus Wien.", es: "Mi amigo Jonas es de Viena." }, { plural: "Freunde" }),
  W("de-w-freundin", "die Freundin", "amiga / novia", "fróindin", "sostantivo", "relazioni", "A1", { it: "Meine Freundin studiert Kunst in Leipzig.", es: "Mi novia estudia Arte en Leipzig." }, { plural: "Freundinnen", note: "Freund/in es 'amigo' y también 'novio/a': el contexto decide." }),
  W("de-w-liebe", "die Liebe", "amor", "líbe", "sostantivo", "relazioni", "A1", { it: "Die Liebe ist geduldig und freundlich.", es: "El amor es paciente y amable." }),
  W("de-w-verabredung", "die Verabredung", "cita / acuerdo", "ferábredung", "sostantivo", "relazioni", "A2", { it: "Ich habe um sechs eine Verabredung mit Anna.", es: "Tengo una cita con Ana a las seis." }, { plural: "Verabredungen" }),
  W("de-w-einladen", "einladen", "invitar", "áinladen", "verbo", "relazioni", "A2", { it: "Ich lade dich zum Abendessen ein.", es: "Te invito a cenar." }, { note: "Verbo separable: Ich lade dich ein (ein va al final)." }),

  /* finanze */
  W("de-w-geld", "das Geld", "dinero", "gelt", "sostantivo", "finanze", "A1", { it: "Ich habe heute kein Geld dabei.", es: "Hoy no llevo dinero encima." }, { related: ["das Kleingeld (cambio, suelto)"] }),
  W("de-w-bank", "die Bank", "banco", "bank", "sostantivo", "finanze", "A1", { it: "Ich muss noch zur Bank, bevor sie schließt.", es: "Todavía tengo que pasar por el banco antes de que cierre." }, { plural: "Banken" }),
  W("de-w-sparen", "sparen", "ahorrar", "shpáren", "verbo", "finanze", "A2", { it: "Ich spare für eine Reise nach Japan.", es: "Ahorro para un viaje a Japón." }, { ant: ["ausgeben (gastar)"] }),

  /* professioni */
  W("de-w-ingenieur", "der Ingenieur", "ingeniero", "inyeníur", "sostantivo", "professioni", "A2", { it: "Mein Bruder ist Ingenieur bei einer Autofirma.", es: "Mi hermano es ingeniero en una empresa de coches." }, { plural: "Ingenieure" }),
  W("de-w-koch", "der Koch", "cocinero / chef de cocina", "koj", "sostantivo", "professioni", "A2", { it: "Der Koch bereitet ein schwäbisches Gericht zu.", es: "El cocinero prepara un plato suabo." }, { plural: "Köche", note: "Falso amigo: der Chef es el jefe, no el cocinero." }),
  W("de-w-journalist", "der Journalist", "periodista", "zhurnalíst", "sostantivo", "professioni", "B1", { it: "Der Journalist schreibt über Umweltthemen.", es: "El periodista escribe sobre temas ambientales." }, { plural: "Journalisten", note: "La periodista es die Journalistin." }),
  W("de-w-krankenpfleger", "der Krankenpfleger", "enfermero", "kránkenpféguer", "sostantivo", "professioni", "B1", { it: "Der Krankenpfleger arbeitet im Krankenhaus Neukölln.", es: "El enfermero trabaja en el hospital de Neukölln." }, { note: "La enfermera es die Krankenpflegerin." }),

  /* attualita */
  W("de-w-nachrichten", "die Nachrichten", "noticias", "nájrijten", "sostantivo", "attualita", "A1", { it: "Um acht Uhr sehe ich die Nachrichten.", es: "A las ocho veo las noticias." }),
  W("de-w-zeitung", "die Zeitung", "periódico", "tsáitung", "sostantivo", "attualita", "A1", { it: "Ich lese die Zeitung nur am Wochenende.", es: "Leo el periódico solo el fin de semana." }, { plural: "Zeitungen" }),
  W("de-w-umwelt", "die Umwelt", "medio ambiente", "úmvelt", "sostantivo", "attualita", "B1", { it: "Wir müssen die Umwelt besser schützen, so schwer es auch ist.", es: "Debemos proteger mejor el medio ambiente, por difícil que sea." }, { related: ["der Umweltschutz"] }),
  W("de-w-wirtschaft", "die Wirtschaft", "economía", "vírtshaft", "sostantivo", "attualita", "B2", { it: "Die Wirtschaft wächst nur langsam.", es: "La economía crece solo despacio." }, { note: "Wirtschaft viene de Wirt (huésped): la 'hospitalidad' gestionada." }),

  /* scienza */
  W("de-w-wissenschaft", "die Wissenschaft", "ciencia", "víssenschaft", "sostantivo", "scienza", "B2", { it: "Wissenschaft braucht Geduld und offene Fragen.", es: "La ciencia requiere paciencia y preguntas abiertas." }, { plural: "Wissenschaften" }),
  W("de-w-forschung", "die Forschung", "investigación", "fórshung", "sostantivo", "scienza", "B2", { it: "Die Forschung macht in diesem Jahr große Fortschritte.", es: "La investigación avanza a pasos agigantados este año." }, { plural: "Forschungen" }),
  W("de-w-experiment", "das Experiment", "experimento", "eksperimént", "sostantivo", "scienza", "B2", { it: "Das Experiment gelingt erst beim dritten Versuch.", es: "El experimento sale bien al tercer intento." }, { plural: "Experimente" }),

  /* letteratura */
  W("de-w-roman", "der Roman", "novela", "román", "sostantivo", "letteratura", "B1", { it: "Ich lese gerade einen Roman von Kafka.", es: "Estoy leyendo una novela de Kafka." }, { plural: "Romane" }),
  W("de-w-dichter", "der Dichter", "poeta / escritor", "díjter", "sostantivo", "letteratura", "B1", { it: "Goethe ist einer der größten Dichter Deutschlands.", es: "Goethe es uno de los más grandes poetas de Alemania." }, { plural: "Dichter", note: "La poetisa/escritora es die Dichterin." }),

  /* tempo */
  W("de-w-uhr", "die Uhr", "reloj / hora", "ur", "sostantivo", "tempo", "A1", { it: "Es ist acht Uhr.", es: "Son las ocho." }, { plural: "Uhren", note: "El reloj de pulsera: die Armbanduhr; 'en punto' se dice um acht Uhr." }),
  W("de-w-jahr", "das Jahr", "año", "yár", "sostantivo", "tempo", "A1", { it: "Frohes neues Jahr!", es: "¡Feliz año nuevo!" }, { plural: "Jahre" }),
  W("de-w-stunde", "die Stunde", "hora (espacio de tiempo)", "shtúnde", "sostantivo", "tempo", "A1", { it: "Der Kurs dauert zwei Stunden.", es: "El curso dura dos horas." }, { plural: "Stunden", note: "Die Uhr es la hora del reloj; die Stunde, una hora de duración." }),

  /* corpo */
  W("de-w-kopf", "der Kopf", "cabeza", "kopf", "sostantivo", "corpo", "A1", { it: "Mein Kopf tut weh; ich lege mich hin.", es: "Me duele la cabeza; me tumbo." }, { plural: "Köpfe" }),
  W("de-w-hand", "die Hand", "mano", "hant", "sostantivo", "corpo", "A1", { it: "Gib mir die Hand, wir müssen schnell sein.", es: "Dame la mano, tenemos que darnos prisa." }, { plural: "Hände" }),
  W("de-w-auge", "das Auge", "ojo", "áugue", "sostantivo", "corpo", "A1", { it: "Schließ die Augen und zähle bis zehn.", es: "Cierra los ojos y cuenta hasta diez." }, { plural: "Augen" }),

  /* animali */
  W("de-w-hund", "der Hund", "perro", "hunt", "sostantivo", "animali", "A1", { it: "Der Hund bellt, weil jemand an der Tür ist.", es: "El perro ladra porque hay alguien en la puerta." }, { plural: "Hunde" }),
  W("de-w-katze", "die Katze", "gato / gata", "kátse", "sostantivo", "animali", "A1", { it: "Die Katze schläft gern auf dem Sofa.", es: "La gata duerme a gusto en el sofá." }, { plural: "Katzen" }),
  W("de-w-pferd", "das Pferd", "caballo", "pfért", "sostantivo", "animali", "A1", { it: "Das Pferd läuft schneller, als man denkt.", es: "El caballo corre más de lo que uno piensa." }, { plural: "Pferde" }),

  /* natura */
  W("de-w-baum", "der Baum", "árbol", "báum", "sostantivo", "natura", "A1", { it: "Der Baum im Hof ist hundert Jahre alt.", es: "El árbol del patio tiene cien años." }, { plural: "Bäume" }),
  W("de-w-berg", "der Berg", "montaña / monte", "berk", "sostantivo", "natura", "A1", { it: "Die Alpen sind hohe Berge.", es: "Los Alpes son montañas altas." }, { plural: "Berge" }),
  W("de-w-fluss", "der Fluss", "río", "flus", "sostantivo", "natura", "A1", { it: "Der Rhein ist ein langer, wichtiger Fluss.", es: "El Rin es un río largo e importante." }, { plural: "Flüsse", note: "Fluss lleva ss porque la u es breve; 'Fluß' es la ortografía antigua." }),
  W("de-w-see", "der See", "lago", "sé", "sostantivo", "natura", "A1", { it: "Am See kann man schön schwimmen.", es: "En el lago se puede nadar de maravilla." }, { note: "Ojo: der See es el lago, pero die See es el mar." }),

  /* svago */
  W("de-w-ferien", "die Ferien", "vacaciones", "férien", "sostantivo", "svago", "A1", { it: "In den Ferien fahre ich ans Meer.", es: "En vacaciones voy al mar." }),
  W("de-w-hobby", "das Hobby", "afición / pasatiempo", "hóbi", "sostantivo", "svago", "A1", { it: "Meine Hobbys sind Lesen und Wandern.", es: "Mis aficiones son leer y el senderismo." }, { plural: "Hobbys" }),
  W("de-w-freizeit", "die Freizeit", "tiempo libre", "fráitsait", "sostantivo", "svago", "A1", { it: "Was machst du gern in deiner Freizeit?", es: "¿Qué te gusta hacer en tu tiempo libre?" }),
  W("de-w-machen", "machen", "hacer", "májen", "verbo", "svago", "A1", { it: "Was machst du gerade?", es: "¿Qué estás haciendo?" }),

  /* emozioni */
  W("de-w-gluecklich", "glücklich", "feliz / contento", "glíklij", "aggettivo", "emozioni", "A1", { it: "Ich bin glücklich, dich zu sehen.", es: "Soy feliz de verte." }, { ant: ["traurig"] }),
  W("de-w-traurig", "traurig", "triste", "tráurij", "aggettivo", "emozioni", "A1", { it: "Der Film war schön, aber sehr traurig.", es: "La película fue bonita, pero muy triste." }, { ant: ["glücklich"] }),
  W("de-w-muede", "müde", "cansado", "múde", "aggettivo", "emozioni", "A1", { it: "Ich bin müde und gehe früh schlafen.", es: "Estoy cansado y me voy a dormir temprano." }),
  W("de-w-sich-freuen", "sich freuen", "alegrarse", "fróien", "verbo", "emozioni", "A2", { it: "Ich freue mich schon auf die Reise.", es: "Ya estoy deseando que llegue el viaje." }, { note: "Reflexivo con pronombre en dativo/acusativo: Ich freue mich." }),
  W("de-w-angst", "die Angst", "miedo", "ankst", "sostantivo", "emozioni", "A2", { it: "Ich habe Angst vor großen Hunden.", es: "Tengo miedo a los perros grandes." }, { plural: "Ängste", related: ["angst haben vor + Dat."] }),

  /* comunicazione */
  W("de-w-sprache", "die Sprache", "lengua / idioma / habla", "shpráje", "sostantivo", "comunicazione", "A1", { it: "Spanisch ist eine schöne Sprache.", es: "El español es una lengua bonita." }, { plural: "Sprachen" }),
  W("de-w-sprechen", "sprechen", "hablar", "shpréjen", "verbo", "comunicazione", "A1", { it: "Sprechen Sie Englisch oder Spanisch?", es: "¿Habla usted inglés o español?" }, { related: ["die Aussprache (la pronunciación)"] }),
  W("de-w-anrufen", "anrufen", "llamar (por teléfono)", "ánrufen", "verbo", "comunicazione", "A2", { it: "Ich rufe dich morgen nach der Arbeit an.", es: "Te llamo mañana después del trabajo." }, { note: "Verbo separable: an se separa y va al final (Ich rufe dich an)." }),
];

/* ── Léxico cerrado DE · para el Analizador de frases ──────────────────
   Espejo del objeto CLOSED de src/components/lms/views/analyzer.tsx
   (versión italiana). ~90 palabras funcionales: artículos, pronombres,
   preposiciones (con contracciones), conjunciones, adverbios frecuentes
   y las formas clave de sein / haben / werden + ist / sind / hat.
   Las claves son minúsculas porque el analizador lowercasea los tokens
   (Sie → sie, Ihnen → ihnen).                                        */
export const DE_CLOSED: Record<string, string> = {
  /* artículos y determinantes */
  der: "el", die: "la / los / las", das: "el/lo (neutro)", den: "el (acusativo m.)", dem: "al/del (dativo)",
  ein: "un", eine: "una", einen: "un (acusativo m.)", kein: "ningún / no", keine: "ninguna / no",
  /* pronombres personales y reflexivos */
  ich: "yo", du: "tú", er: "él", sie: "ella / ellos / usted (Sie)", es: "ello / eso (pron.)",
  wir: "nosotros", ihr: "vosotros / su (de ella)", man: "uno / se (impersonal)",
  mich: "me (acusativo)", dich: "te (acusativo)",
  /* sein · haben · werden · modales + gibt */
  bin: "soy / estoy", bist: "eres / estás", ist: "es / está", sind: "son / somos / está(n)",
  seid: "sois / estáis", war: "era / estaba / fui", waren: "eran / éramos / fueron",
  habe: "he / tengo", hast: "has / tienes", hat: "ha / tiene", hatte: "había / tenía",
  hätte: "habría / tendría (Konj. II)", wäre: "sería / estaría (Konj. II)",
  würde: "sería / haría (Konj. II)", wird: "será / se vuelve", wurde: "era / fue (pasiva)",
  kann: "puedo / puede", muss: "debo / debe", will: "quiero / quiere",
  gibt: "da (de geben; es gibt = hay)",
  /* preposiciones */
  in: "en / a (Dat./Ac.)", an: "en / a (borde; Dat./Ac.)", auf: "sobre / encima de (Dat./Ac.)",
  mit: "con", ohne: "sin", für: "para", um: "a (la hora) / alrededor de", nach: "después de / hacia",
  von: "de / desde", zu: "a / hacia", bei: "en (casa de) / junto a", aus: "de / desde (origen)",
  über: "sobre / por encima de / acerca de", vor: "delante de / hace (tiempo)",
  durch: "por / a través de",
  /* contracciones artigo + preposición */
  am: "en el / a las (an dem)", im: "en el (in dem)", zum: "al (zu dem)", zur: "a la (zu der)", vom: "del (von dem)",
  /* conjunciones */
  und: "y", aber: "pero", oder: "o", dass: "que", wenn: "si / cuando", weil: "porque",
  denn: "porque (sin cambiar el orden)", ob: "si (interrogativo)", obwohl: "aunque",
  deshalb: "por eso", trotzdem: "sin embargo / aun así",
  /* adverbios y respuestas */
  nicht: "no", auch: "también", sehr: "muy", noch: "todavía / aún / más", schon: "ya",
  immer: "siempre", nie: "nunca", jetzt: "ahora", heute: "hoy", morgen: "mañana",
  hier: "aquí", dort: "allí", nur: "solo / solamente", vielleicht: "quizá / tal vez",
  gern: "con gusto / -mente (aficiones)", so: "así / tan", ja: "sí", nein: "no", danke: "gracias",
};
