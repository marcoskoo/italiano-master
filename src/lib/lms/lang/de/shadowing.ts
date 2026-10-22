import type { CefrLevel } from "../../types";

/* ═══ Deutsch · Shadowing · v9.39 ═══════════════════════════════════
   Método "shadowing": escuchar → repetir en voz alta → comparar.
   Espejo de src/lib/lms/shadowing.ts, organizado en guiones (Skripte)
   por nivel: cada guion reúne frases alemanas con traducción española
   y un tip de pronunciación para hispanohablantes.                     */

export interface ShadowPhrase {
  id: string;           // de-sh-<nivel>-<nn>
  level: CefrLevel;
  it: string;           // frase en alemán (lengua de estudio)
  es: string;           // traducción española
  tip?: string;         // nota de pronunciación para hispanohablantes
}

export interface ShadowingScript {
  id: string;           // de-sh-<nivel>
  level: CefrLevel;
  title: string;        // título en español
  titleIt: string;      // título en alemán
  focus: string;        // qué entrena el guion (ES)
  phrases: ShadowPhrase[];
}

export const DE_SHADOWING: ShadowingScript[] = [
  {
    id: "de-sh-a1", level: "A1", title: "Primeros saludos", titleIt: "Erste Begrüßungen",
    focus: "Saludos y presentaciones con ritmo: la w alemana, la ei diptongo y la ch suave.",
    phrases: [
      { id: "de-sh-a1-01", level: "A1", it: "Guten Tag! Ich heiße Marta.", es: "¡Buenos días! Me llamo Marta.", tip: "«heiße» se pronuncia «JÁI-se»: ei es el diptongo ái y la ß final suena como s suave." },
      { id: "de-sh-a1-02", level: "A1", it: "Wie geht es dir? — Mir geht es gut, danke.", es: "¿Cómo estás? — Estoy bien, gracias.", tip: "La w alemana suena como la v española: «vie guet es dir»." },
      { id: "de-sh-a1-03", level: "A1", it: "Ich komme aus Spanien und wohne in Berlin.", es: "Soy de España y vivo en Berlín.", tip: "La ch de «ich» no es ni k ni sh: es una j muy suave, con la lengua alta y sonriendo." },
      { id: "de-sh-a1-04", level: "A1", it: "Entschuldigung, wie viel kostet das?", es: "Disculpe, ¿cuánto cuesta esto?", tip: "«sch» suena como sh española: «ent-SHUL-di-gung»." },
      { id: "de-sh-a1-05", level: "A1", it: "Vielen Dank! Auf Wiedersehen!", es: "¡Muchas gracias! ¡Adiós!", tip: "«Wiedersehen» = «VÍ-der-se-jen»: la h interior no suena y la ch final vuelve a ser la j suave." },
      { id: "de-sh-a1-06", level: "A1", it: "Bis morgen! Tschüss!", es: "¡Hasta mañana! ¡Chao!", tip: "«Tschüss» = «chüs»: ch como en «chocolate» seguida de la ü redondeada." },
    ],
  },
  {
    id: "de-sh-a2", level: "A2", title: "Compras y mercado", titleIt: "Einkaufen und Markt",
    focus: "Pedir precios y cantidades: números, la ö, la z como ts y los finales sordos.",
    phrases: [
      { id: "de-sh-a2-01", level: "A2", it: "Ich möchte gern ein Kilo Äpfel kaufen.", es: "Quisiera comprar un kilo de manzanas.", tip: "«möchte» lleva ö: labios de o, lengua de e; «Äpfel» también." },
      { id: "de-sh-a2-02", level: "A2", it: "Wie viel kostet ein Kilo Kartoffeln?", es: "¿Cuánto cuesta un kilo de patatas?", tip: "Ritmo de compuesto: kar-TOF-feln, con la t final sorda." },
      { id: "de-sh-a2-03", level: "A2", it: "Das macht zusammen vier Euro fünfzig.", es: "En total son cuatro euros con cincuenta.", tip: "«zusammen» = «tsu-SAM-men»: la z inicial alemana siempre es ts." },
      { id: "de-sh-a2-04", level: "A2", it: "Kann ich mit Karte zahlen?", es: "¿Puedo pagar con tarjeta?", tip: "La e final de «Karte» y «zahlen» sí suena: no la comas." },
      { id: "de-sh-a2-05", level: "A2", it: "Haben Sie das auch größer?", es: "¿Lo tiene también más grande?", tip: "«größer» lleva ß porque la ö es larga, igual que en «groß»." },
      { id: "de-sh-a2-06", level: "A2", it: "Nein, danke. Das ist alles.", es: "No, gracias. Es todo.", tip: "«alles» con a abierta; la s final suena como s española, no como z." },
    ],
  },
  {
    id: "de-sh-b1", level: "B1", title: "Vida diaria y planes", titleIt: "Alltag und Pläne",
    focus: "Contar en Perfekt y hacer planes: la Satzklammer y el verbo al final.",
    phrases: [
      { id: "de-sh-b1-01", level: "B1", it: "Letztes Wochenende bin ich nach Hamburg gefahren.", es: "El fin de semana pasado fui a Hamburgo.", tip: "«gefahren»: g fuerte inicial y la -en final casi muda: «ge-FA-ren»." },
      { id: "de-sh-b1-02", level: "B1", it: "Ich habe meine Freunde besucht und wir haben viel gelacht.", es: "Visité a mis amigos y nos reímos mucho.", tip: "«gelacht» termina en el sonido ach: una j fuerte pronunciada atrás, en la garganta." },
      { id: "de-sh-b1-03", level: "B1", it: "Am Mittwoch muss ich beim Arzt anrufen.", es: "El miércoles tengo que llamar al médico.", tip: "«muss» lleva ss porque la u es breve; «Arzt» termina en ts." },
      { id: "de-sh-b1-04", level: "B1", it: "Wenn das Wetter schön ist, machen wir einen Ausflug.", es: "Si hace buen tiempo, hacemos una excursión.", tip: "«schön» con ö larga; en «Ausflug» el acento cae en AUS." },
      { id: "de-sh-b1-05", level: "B1", it: "Ich freue mich schon auf das Wochenende.", es: "Ya tengo ganas del fin de semana.", tip: "«freue» = «FROI-e»: el diptongo eu suena oi." },
      { id: "de-sh-b1-06", level: "B1", it: "Sollen wir uns am Samstag um zehn Uhr treffen?", es: "¿Quedamos el sábado a las diez?", tip: "Pregunta con entonación que cae al final: «...um zehn Uhr TREF-fen?»." },
    ],
  },
  {
    id: "de-sh-b2", level: "B2", title: "Opinar y discutir", titleIt: "Meinung äußern",
    focus: "Argumentar con Konjunktiv II y conectores: ritmo y acento en compuestos largos.",
    phrases: [
      { id: "de-sh-b2-01", level: "B2", it: "Meiner Meinung nach ist das Problem strukturell.", es: "En mi opinión, el problema es estructural.", tip: "Dos grupos rítmicos: MEI-nung | NACH; no corras una parte con la otra." },
      { id: "de-sh-b2-02", level: "B2", it: "Wenn alle weniger Plastik benutzen würden, wäre der Effekt enorm.", es: "Si todos usaran menos plástico, el efecto sería enorme.", tip: "«wären» con ä larga; mantiene el tono suave del Konjunktiv." },
      { id: "de-sh-b2-03", level: "B2", it: "Da bin ich nicht ganz deiner Meinung, denn die Regel hat Ausnahmen.", es: "Ahí no estoy del todo de acuerdo contigo, porque la regla tiene excepciones.", tip: "«denn» es conector de coordinación: ritmo llano, sin subir el tono." },
      { id: "de-sh-b2-04", level: "B2", it: "Man muss zwischen Effizienz und Gerechtigkeit unterscheiden.", es: "Hay que distinguir entre eficiencia y justicia.", tip: "«unterscheiden»: la sílaba fuerte es -schei-; no hagas pausa entre prefijo y verbo." },
      { id: "de-sh-b2-05", level: "B2", it: "Zusammenfassend würde ich sagen, dass jeder Beitrag zählt.", es: "En resumen, diría que cada aportación cuenta.", tip: "Pequeña pausa en la coma antes de dass; «zählt» cierra con ts." },
      { id: "de-sh-b2-06", level: "B2", it: "Trotzdem bleibt die Mülltrennung eine sinnvolle Gewohnheit.", es: "Aun así, separar la basura sigue siendo un hábito sensato.", tip: "«Trotzdem» con o corta; «Gewohnheit» = «ge-VOHN-hait», con h aspirada suave." },
    ],
  },
  {
    id: "de-sh-c1", level: "C1", title: "Lengua matizada", titleIt: "Nuanciert sprechen",
    focus: "Passiv, Konjunktiv I y nominalizaciones con pronunciación fluida y pausas correctas.",
    phrases: [
      { id: "de-sh-c1-01", level: "C1", it: "Es wird oft behauptet, dass die Bahn zu teuer sei.", es: "A menudo se afirma que el tren es demasiado caro.", tip: "«sei» (Konjunktiv I) = «sai»; mantén la entonación neutra de la cita indirecta." },
      { id: "de-sh-c1-02", level: "C1", it: "Angesichts der Klimaziele wäre ein Ausbau des Nahverkehrs sinnvoll.", es: "Dados los objetivos climáticos, ampliar el transporte regional sería sensato.", tip: "Cadena larga: respira en las barras: AN-gesichts | der KLI-ma-ziele | wäre." },
      { id: "de-sh-c1-03", level: "C1", it: "Die Sprache, die wir sprechen, prägt auch das, was wir denken.", es: "La lengua que hablamos también moldea lo que pensamos.", tip: "«prägt» cierra con kt sordo: «prekt»; «spricht» lleva la ch suave." },
      { id: "de-sh-c1-04", level: "C1", it: "Ich hätte gern einen Termin am Donnerstag Vormittag.", es: "Quisiera una cita el jueves por la mañana.", tip: "«hätte» con ä corta, rima con «Kette»; cortesía con ritmo relajado." },
      { id: "de-sh-c1-05", level: "C1", it: "Es bleibt abzuwarten, ob das Deutschlandticket langfristig wirkt.", es: "Queda por ver si el Deutschlandticket funciona a largo plazo.", tip: "«abzuwarten»: prefijo + zu + infinitivo, todo seguido; acento en WAR." },
      { id: "de-sh-c1-06", level: "C1", it: "Vieles spricht dafür, öfter auf das Auto zu verzichten.", es: "Muchas cosas abogan por renunciar al coche más a menudo.", tip: "«öfter» con ö corta; «dafür» lleva el acento al final." },
    ],
  },
  {
    id: "de-sh-c2", level: "C2", title: "Idiomatismo y estilo", titleIt: "Idiomatik und Stil",
    focus: "Expresiones idiomáticas y registro elevado: diptongos en cadena y partículas modales.",
    phrases: [
      { id: "de-sh-c2-01", level: "C2", it: "Das ist ein zweischneidiges Schwert, wie man so schön sagt.", es: "Es un arma de doble filo, como se suele decir.", tip: "«zweischneidiges» = «tsvai-shnai-di-ges»: tres diptongos seguidos, síguelos sin trabarte." },
      { id: "de-sh-c2-02", level: "C2", it: "Hätte ich das gewusst, hätte ich anders gehandelt.", es: "Si lo hubiera sabido, habría actuado de otra manera.", tip: "«gewusst» lleva ss porque la u es breve; ritmo serio, sin prisa." },
      { id: "de-sh-c2-03", level: "C2", it: "Man sollte das Kind beim Namen nennen.", es: "Hay que llamar a las cosas por su nombre.", tip: "«beim» = «baim», una sola sílaba; el modismo cae con acento en NAM-en." },
      { id: "de-sh-c2-04", level: "C2", it: "Das geht mir ziemlich nah, um ehrlich zu sein.", es: "Me afecta bastante, a decir verdad.", tip: "«ziemlich» con ie larga: «TSIM-lij»; la coletilla final cae suave." },
      { id: "de-sh-c2-05", level: "C2", it: "Über Geschmack lässt sich bekanntlich streiten.", es: "Sobre gustos, como es sabido, se puede discutir.", tip: "«lässt» con ä corta y doble s sorda; «bekanntlich» con acento en KANNT." },
      { id: "de-sh-c2-06", level: "C2", it: "Nichtsdestotrotz bleibt es ein bemerkenswertes Buch.", es: "No obstante, sigue siendo un libro notable.", tip: "Conector trabalenguas: «nichts-des-to-TROTZ», acento al final; «bemerkenswertes» = «be-mer-kens-VÉR-tes»." },
    ],
  },
];
