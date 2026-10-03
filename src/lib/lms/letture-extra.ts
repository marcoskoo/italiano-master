/* ── Letture EXTRA · Paquete v9.10 (+15 letture, 28 → 43) ──────────────
   Parte 1: 4 dialoghi nuovi (A1 mercato, A2 treno, B1 farmacia, B1 cena).
   Párrafos it+es, glosario, comprensión lectora e ideas para debatir.
   Audio TTS multi-voz sincronizado en la vista de letture.
   100% contenido original.                                             */

import type { CefrLevel } from "./types";
import type { Lettura } from "./letture";

/* ═══ DIALOGHI NUOVI ═════════════════════════════════════════════════ */

export const DIALOGHI_EXTRA: Lettura[] = [
  {
    id: "dia-mercato-04",
    cat: "dialoghi",
    level: "A1",
    title: "Al mercato: un chilo di pesche",
    titleEs: "En el mercado: un kilo de melocotones",
    minutes: 2,
    lines: [
      { speaker: "Fruttivendolo", it: "Buongiorno! Quelle pesche sono bellissime, le vuole assaggiare?", es: "¡Buenos días! Esos melocotones están bellísimos, ¿quiere probarlos?" },
      { speaker: "Cliente", it: "Buongiorno! Sì, grazie... Mmm, dolcissime! Quanto costano?", es: "¡Buenos días! Sí, gracias... ¡Mmm, dulcísimos! ¿Cuánto cuestan?" },
      { speaker: "Fruttivendolo", it: "Tre euro al chilo. Sono pesche di luglio, mature al punto giusto.", es: "Tres euros el kilo. Son melocotones de julio, maduros en su punto." },
      { speaker: "Cliente", it: "Perfetto, allora un chilo di pesche, per favore.", es: "Perfecto, entonces un kilo de melocotones, por favor." },
      { speaker: "Fruttivendolo", it: "Ecco fatto! Un chilo esatto. Desidera anche le albicocche? Oggi costano due euro.", es: "¡Listo! Un kilo exacto. ¿Desea también los albaricoques? Hoy cuestan dos euros." },
      { speaker: "Cliente", it: "No, grazie. Solo le pesche oggi. Ecco dieci euro.", es: "No, gracias. Solo los melocotones hoy. Aquí diez euros." },
      { speaker: "Fruttivendolo", it: "Grazie a lei! Il resto è sette euro. Buona giornata e... arrivederci!", es: "¡Gracias a usted! El cambio son siete euros. ¡Buen día y... hasta luego!" },
    ],
    glossary: [
      { it: "il fruttivendolo", es: "el frutero" },
      { it: "assaggiare", es: "probar (comida)" },
      { it: "dolce", es: "dulce" },
      { it: "il chilo", es: "el kilo" },
      { it: "il resto", es: "el cambio (dinero)" },
    ],
    questions: [
      { q: "¿Cuánto cuestan los melocotones?", options: ["Due euro al chilo", "Tre euro al chilo", "Dieci euro al chilo", "Sette euro al chilo"], answer: 1, why: "El frutero dice «tre euro al chilo»." },
      { q: "¿Qué hace el cliente antes de comprar?", options: ["Pide un descuento", "Assaggia una pesca", "Compra le albicocche", "Guarda il prezzo delle mele"], answer: 1, why: "El frutero le ofrece probar («le vuole assaggiare?») y el cliente acepta: «Sì, grazie»." },
      { q: "¿Qué otra fruta ofrece el vendedor?", options: ["Le mele", "Le ciliegie", "Le albicocche", "Le arance"], answer: 2, why: "Ofrece las albicocche a dos euros, pero el cliente rechaza." },
      { q: "¿Cuánto recibe de cambio el cliente?", options: ["Tre euro", "Sette euro", "Dieci euro", "Niente"], answer: 1, why: "Paga con diez euros una compra de tres: «il resto è sette euro»." },
    ],
    discuss: [
      { it: "Fai la spesa al mercato o al supermercato? Perché?", es: "¿Haces la compra en el mercado o en el supermercado? ¿Por qué?" },
      { it: "Nel tuo paese si può assaggiare la frutta prima di comprarla?", es: "¿En tu país se puede probar la fruta antes de comprarla?" },
      { it: "Qual è la tua frutta estiva preferita?", es: "¿Cuál es tu fruta de verano preferita?" },
    ],
  },
  {
    id: "dia-treno-05",
    cat: "dialoghi",
    level: "A2",
    title: "Alla biglietteria: un treno per Verona",
    titleEs: "En la taquilla: un tren a Verona",
    minutes: 3,
    lines: [
      { speaker: "Impiegato", it: "Buongiorno, dica pure!", es: "¡Buenos días, dígame!" },
      { speaker: "Signor Díaz", it: "Buongiorno. Vorrei un biglietto per Verona, andata e ritorno, per domenica.", es: "Buenos días. Quisiera un billete a Verona, ida y vuelta, para el domingo." },
      { speaker: "Impiegato", it: "Che ora preferisce? C'è un regionale alle otto e dieci e uno diretto alle nove e mezza.", es: "¿Qué hora prefiere? Hay un regional a las ocho y diez y uno directo a las nueve y media." },
      { speaker: "Signor Díaz", it: "Quanto tempo ci mette il diretto?", es: "¿Cuánto tarda el directo?" },
      { speaker: "Impiegato", it: "Un'ora e venticinque minuti. Il regionale invece impiega due ore, perché ferma in tutte le stazioni.", es: "Una hora y veinticinco minutos. El regional en cambio tarda dos horas porque para en todas las estaciones." },
      { speaker: "Signor Díaz", it: "Allora prendo il diretto delle nove e mezza. Quanto costa?", es: "Entonces tomo el directo de las nueve y media. ¿Cuánto cuesta?" },
      { speaker: "Impiegato", it: "Andata e ritorno: ventidue euro. Ma con la carta giovani, se ha meno di trent'anni, paga quindici euro.", es: "Ida y vuelta: veintidós euros. Pero con la tarjeta joven, si tiene menos de treinta años, paga quince euros." },
      { speaker: "Signor Díaz", it: "Ho ventott'anni! Eccola qui.", es: "¡Tengo veintiocho años! Aquí la tiene." },
      { speaker: "Impiegato", it: "Perfetto, quindici euro allora. Il treno parte dal binario sette e arriva a Verona Porta Nuova alle dieci e cinquantacinque. Buon viaggio!", es: "Perfecto, quince euros entonces. El tren sale del andén siete y llega a Verona Porta Nuova a las diez y cincuenta y cinco. ¡Buen viaje!" },
    ],
    glossary: [
      { it: "la biglietteria", es: "la taquilla" },
      { it: "andata e ritorno", es: "ida y vuelta" },
      { it: "il diretto", es: "el tren directo" },
      { it: "fermare", es: "parar (en una estación)" },
      { it: "il binario", es: "el andén / la vía" },
    ],
    questions: [
      { q: "¿Qué tipo de billete quiere el señor Díaz?", options: ["Solo andata", "Andata e ritorno", "Un abbonamento mensile", "Un biglietto per due persone"], answer: 1, why: "Pide «un biglietto per Verona, andata e ritorno»." },
      { q: "¿Por qué el regional tarda más que el directo?", options: ["Perché è più vecchio", "Perché ferma in tutte le stazioni", "Perché costa meno", "Perché parte prima"], answer: 1, why: "El empleado explica que el regional «ferma in tutte le stazioni», por eso tarda dos horas." },
      { q: "¿Cuánto paga al final?", options: ["22 euro", "15 euro", "28 euro", "10 euro"], answer: 1, why: "Tiene la tarjeta joven (menos de 30 años), así que paga quince euros en vez de veintidós." },
      { q: "¿De qué andén sale el tren?", options: ["Binario tre", "Binario cinque", "Binario sette", "Binario nove"], answer: 2, why: "«Il treno parte dal binario sette»." },
    ],
    discuss: [
      { it: "Preferisci viaggiare in treno, in auto o in aereo? Perché?", es: "¿Prefieres viajar en tren, en auto o en avión? ¿Por qué?" },
      { it: "Com'è il servizio ferroviario nel tuo paese? Esistono treni ad alta velocità?", es: "¿Cómo es el servicio ferroviario en tu país? ¿Existen trenes de alta velocidad?" },
      { it: "Hai mai perso un treno? Racconta cos'è successo.", es: "¿Alguna vez has perdido un tren? Cuenta qué pasó." },
    ],
  },
  {
    id: "dia-farmacia-06",
    cat: "dialoghi",
    level: "B1",
    title: "In farmacia: qualcosa per la tosse",
    titleEs: "En la farmacia: algo para la tos",
    minutes: 3,
    lines: [
      { speaker: "Farmacista", it: "Buonasera, come posso aiutarla?", es: "Buenas tardes, ¿cómo puedo ayudarle?" },
      { speaker: "Signora Peña", it: "Buonasera. Da tre giorni ho una tosse secca che non mi fa dormire. E ho anche un po' di mal di gola.", es: "Buenas tardes. Desde hace tres días tengo una tos seca que no me deja dormir. Y también tengo un poco de dolor de garganta." },
      { speaker: "Farmacista", it: "Ha la febbre? Si è misurata la temperatura?", es: "¿Tiene fiebre? ¿Se ha medido la temperatura?" },
      { speaker: "Signora Peña", it: "Ieri sera avevo 37 e mezzo, ma stamattina era normale.", es: "Ayer tarde tenía 37 y medio, pero esta mañana estaba normal." },
      { speaker: "Farmacista", it: "Va bene. Per la tosse secca posso darle uno sciroppo che calma l'irritazione. Lo prenda due volte al giorno, dopo i pasti, e beva molta acqua tiepida.", es: "Está bien. Para la tos seca puedo darle un jarabe que calma la irritación. Tómelo dos veces al día, después de las comidas, y beba mucha agua tibia." },
      { speaker: "Signora Peña", it: "E per la gola? Mi fa male soprattutto quando mangio.", es: "¿Y para la garganta? Me duele sobre todo cuando como." },
      { speaker: "Farmacista", it: "Le do anche delle pastiglie da sciogliere in bocca, una ogni tre ore. Eviti le bevande gelate e, se può, non fumi.", es: "Le do también unas pastillas para disolver en la boca, una cada tres horas. Evite las bebidas heladas y, si puede, no fume." },
      { speaker: "Signora Peña", it: "Grazie, non fumo. Quanto le devo?", es: "Gracias, no fumo. ¿Cuánto le debo?" },
      { speaker: "Farmacista", it: "In tutto sedici euro e ottanta. Se in una settimana non migliora, vada dal medico. Buasera e si rimetta presto!", es: "En total dieciséis euros con ochenta. Si en una semana no mejora, vaya al médico. ¡Buenas tardes y que se mejore pronto!" },
    ],
    glossary: [
      { it: "la tosse secca", es: "la tos seca" },
      { it: "il mal di gola", es: "el dolor de garganta" },
      { it: "lo sciroppo", es: "el jarabe" },
      { it: "sciogliere in bocca", es: "disolver en la boca" },
      { it: "si rimetta presto", es: "que se mejore pronto (fórmula de cortesía)" },
    ],
    questions: [
      { q: "¿Desde cuándo tiene la señora Peña la tos?", options: ["Da ieri", "Da tre giorni", "Da una settimana", "Da un mese"], answer: 1, why: "Dice «da tre giorni ho una tosse secca»." },
      { q: "¿Qué temperatura tenía ayer por la tarde?", options: ["36 e mezzo", "37 e mezzo", "38 e mezzo", "Nessuna febbre"], answer: 1, why: "«Ieri sera avevo 37 e mezzo» — una febrícula leve." },
      { q: "¿Cómo debe tomar el jarabe?", options: ["Prima dei pasti", "Due volte al giorno, dopo i pasti", "Ogni tre ore", "Solo la sera"], answer: 1, why: "El farmacista indica «due volte al giorno, dopo i pasti»." },
      { q: "¿Qué le aconseja el farmacista si no mejora?", options: ["Tornare in farmacia", "Andare dal medico", "Prendere un antibiotico", "Bere bevande gelate"], answer: 1, why: "«Se in una settimana non migliora, vada dal medico»." },
      { q: "¿Cuánto paga en total?", options: ["15,80 €", "16,80 €", "17,80 €", "18,80 €"], answer: 1, why: "«In tutto sedici euro e ottanta» = 16,80 €." },
    ],
    discuss: [
      { it: "In caso di malanni leggeri, vai prima in farmacia o dal medico? Com'è nel tuo paese?", es: "Ante males leves, ¿vas primero a la farmacia o al médico? ¿Cómo es en tu país?" },
      { it: "Preferisci le medicine naturali o quelle classiche? Perché?", es: "¿Prefieres las medicinas naturales o las clásicas? ¿Por qué?" },
      { it: "Cosa fai di solito quando hai l'influenza? Racconta i tuoi rimodi.", es: "¿Qué haces normalmente cuando tienes gripe? Cuenta tus remedios." },
    ],
  },
  {
    id: "dia-cena-07",
    cat: "dialoghi",
    level: "B1",
    title: "A cena dagli amici",
    titleEs: "A cenar en casa de unos amigos",
    minutes: 3,
    lines: [
      { speaker: "Valentina", it: "Ciao Marco! Finalmente sei arrivato! Entra, entra, lascia la giacca qui.", es: "¡Hola Marco! ¡Por fin llegaste! Pasa, pasa, deja la chaqueta aquí." },
      { speaker: "Marco", it: "Ciao Vale! Scusa il ritardo, ma non trovavo un parcheggio. Ti ho portato un dolce della pasticceria qui all'angolo.", es: "¡Hola Vale! Perdona el retraso, pero no encontraba estacionamiento. Te traje un dulce de la pastelería de la esquina." },
      { speaker: "Valentina", it: "Non dovevi! Grazie mille, lo prendiamo col caffè. Intanto siediti: come aperitivo c'è un prosecco con delle olive.", es: "¡No debías! Muchas gracias, lo tomamos con el café. Mientras tanto siéntate: de aperitivo hay un prosecco con aceitunas." },
      { speaker: "Marco", it: "Che profumo! Cosa hai preparato di buono?", es: "¡Qué olor! ¿Qué has preparado de rico?" },
      { speaker: "Valentina", it: "Lasagne alla bolognese, la ricetta di mia nonna. E come secondo arrosto con patate. Spero che tu abbia fame!", es: "Lasañas a la boloñesa, la receta de mi abuela. Y de segundo, asado con papas. ¡Espero que tengas hambre!" },
      { speaker: "Marco", it: "Fame? Sono venuto apposta! Se vuoi ti do una mano in cucina.", es: "¿Hambre? ¡Vine a propósito! Si quieres te doy una mano en la cocina." },
      { speaker: "Valentina", it: "Grazie, ma è quasi tutto pronto. Piuttosto apri tu il vino? È quello sul tavolo, accanto ai bicchieri.", es: "Gracias, pero ya está casi todo listo. Más bien, ¿abres tú el vino? Es el de la mesa, junto a las copas." },
      { speaker: "Marco", it: "Volentieri! Allora... salute! E complimenti allo chef: le lasagne sono spettacolari!", es: "¡Con gusto! Entonces... ¡salud! Y felicitaciones al chef: ¡las lasañas están espectaculares!" },
      { speaker: "Valentina", it: "Sono contenta che ti piacciano. Prendine ancora, ne ho fatte tante! Poi c'è anche il tiramisù, ma quello lo mangiamo dopo.", es: "Me alegra que te gusten. Toma más, ¡hice muchas! Después también hay tiramisú, pero ese lo comemos luego." },
      { speaker: "Marco", it: "Con il tiramisù non si discute: io aspetto. Anche perché devo lasciare spazio per il dolce che ho portato io!", es: "Con el tiramisú no se discute: yo espero. ¡También porque debo dejar espacio para el dulce que traje yo!" },
    ],
    glossary: [
      { it: "scusa il ritardo", es: "perdona el retraso" },
      { it: "dare una mano", es: "echar una mano / ayudar" },
      { it: "piuttosto", es: "más bien" },
      { it: "complimenti allo chef", es: "felicitaciones al chef" },
      { it: "non si discute", es: "no se discute / es innegociable" },
    ],
    questions: [
      { q: "¿Por qué llega tarde Marco?", options: ["Perde l'autobus", "Non trovava un parcheggio", "Doveva comprare il vino", "Aveva una riunione"], answer: 1, why: "«Scusa il ritardo, ma non trovavo un parcheggio»." },
      { q: "¿Qué le regala Marco a Valentina?", options: ["Una bottiglia di vino", "Un mazzo di fiori", "Un dolce della pasticceria", "Delle olive"], answer: 2, why: "Le trae «un dolce della pasticceria qui all'angolo»." },
      { q: "¿Cuál es el primer plato de la cena?", options: ["Arrosto con patate", "Lasagne alla bolognese", "Tiramisù", "Prosecco e olive"], answer: 1, why: "El primer plato son las lasañas; el asado es el segundo y el tiramisú, el postre." },
      { q: "¿Qué le pide Valentina a Marco mientras termina de cocinar?", options: ["Di apparecchiare la tavola", "Di aprire il vino", "Di preparare il caffè", "Di scaldare il forno"], answer: 1, why: "«Piuttosto apri tu il vino? È quello sul tavolo»." },
      { q: "¿Por qué quiere Marco esperar antes del postre?", options: ["È a dieta", "Non gli piace il dolce", "Deve lasciare spazio per il dolce che ha portato", "Deve tornare presto a casa"], answer: 2, why: "Dice en broma que debe dejar espacio para el dulce que él mismo trajo." },
    ],
    discuss: [
      { it: "Quando vai a cena a casa di amici, porti qualcosa? Cosa si usa portare nel tuo paese?", es: "Cuando vas a cenar a casa de amigos, ¿llevas algo? ¿Qué se acostumbra llevar en tu país?" },
      { it: "Qual è il piatto della tradizione che cucinerebbe la tua nonna? Ce l'hai ancora?", es: "¿Cuál es el plato de tradición que cocinaría tu abuela? ¿Lo conservas?" },
      { it: "Preferisci cucinare per gli amici o essere invitato? Perché?", es: "¿Prefieres cocinar para los amigos o ser invitado? ¿Por qué?" },
    ],
  },
];
