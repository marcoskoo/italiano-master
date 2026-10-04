/* ── Letture EXTRA · Paquete v9.11 · Parte 5: 3 dialoghi + 3 informazione ─
   dia-pizzeria-08 (A1): ordinare una pizza al telefono.
   dia-dottore-09 (A2): dal dottore, mal di gola e febbre.
   dia-appartamento-10 (B2): affittare un appartamento, la trattativa.
   inf-trasporti-12 (A2): muoversi in Italia: treni, bus e metro.
   inf-energia-13 (B2): la transizione energetica.
   inf-bufale-14 (C2): bufale e fact-checking.
   100% contenido original.                                            */

import type { CefrLevel } from "./types";
import type { Lettura } from "./letture";

/* ═══ DIALOGHI EXTRA v9.11 ════════════════════════════════════════════ */

export const DIALOGHI_EXTRA5: Lettura[] = [
  {
    id: "dia-pizzeria-08",
    cat: "dialoghi",
    level: "A1",
    title: "Al telefono: una pizza a domicilio",
    titleEs: "Por teléfono: una pizza a domicilio",
    minutes: 2,
    lines: [
      { speaker: "Pizzeria", it: "Pizzeria Da Michele, buonasera!", es: "¡Pizzería Da Michele, buenas noches!" },
      { speaker: "Cliente", it: "Buonasera! Vorrei ordinare una pizza margherita e un'acqua naturale, per favore.", es: "¡Buenas noches! Quisiera pedir una pizza margarita y un agua sin gas, por favor." },
      { speaker: "Pizzeria", it: "Certo! La margherita costa sette euro, l'acqua due euro. Desidera altro?", es: "¡Claro! La margarita cuesta siete euros, el agua dos euros. ¿Desea algo más?" },
      { speaker: "Cliente", it: "Sì, anche una porzione di patatine fritte. Quanto costa tutto?", es: "Sí, también una porción de papas fritas. ¿Cuánto cuesta todo?" },
      { speaker: "Pizzeria", it: "Sono undici euro in totale. Qual è l'indirizzo, per favore?", es: "Son once euros en total. ¿Cuál es la dirección, por favor?" },
      { speaker: "Cliente", it: "In via Roma, numero quindici, secondo piano. Quanto tempo ci vuole?", es: "En la vía Roma, número quince, segundo piso. ¿Cuánto tiempo hace falta?" },
      { speaker: "Pizzeria", it: "Una mezz'ora circa. Il ragazzo arriva alle nove.", es: "Una media hora más o menos. El chico llega a las nueve." },
      { speaker: "Cliente", it: "Perfetto, grazie mille! A più tardi.", es: "¡Perfecto, muchas gracias! Hasta luego." },
    ],
    glossary: [
      { it: "vorrei", es: "quisiera (forma de cortesía)" },
      { it: "la porzione", es: "la porción" },
      { it: "in totale", es: "en total" },
      { it: "il secondo piano", es: "el segundo piso" },
      { it: "quanto tempo ci vuole?", es: "¿cuánto tiempo hace falta?" },
      { it: "una mezz'ora circa", es: "una media hora más o menos" },
    ],
    questions: [
      { q: "¿Qué pizza pide el cliente?", options: ["Una diavola", "Una margherita", "Una quattro formaggi", "Una Napoli"], answer: 1, why: "Dice «Vorrei ordinare una pizza margherita»." },
      { q: "¿Cuánto cuesta todo en total?", options: ["Sette euro", "Nove euro", "Undici euro", "Quindici euro"], answer: 2, why: "Margarita 7 € + agua 2 € + papas fritas 2 € = «undici euro in totale»." },
      { q: "¿A qué dirección se entrega la pizza?", options: ["Via Roma 5", "Via Roma 15", "Via Napoli 50", "Via Michele 9"], answer: 1, why: "«In via Roma, numero quindici, secondo piano»." },
      { q: "¿Cuánto tarda la entrega?", options: ["Dieci minuti", "Una mezz'ora circa", "Un'ora", "Due ore"], answer: 1, why: "El pizzero dice «una mezz'ora circa»." },
    ],
    discuss: [
      { it: "Nel tuo paese è normale ordinare la pizza a domicilio? Con il telefono o con un'app?", es: "¿En tu país es normal pedir pizza a domicilio? ¿Por teléfono o con una app?" },
      { it: "Qual è la tua pizza preferita? Descrivi gli ingredienti.", es: "¿Cuál es tu pizza preferida? Describe los ingredientes." },
      { it: "Preferisci cucinare a casa o mangiare fuori? Perché?", es: "¿Prefieres cocinar en casa o comer fuera? ¿Por qué?" },
    ],
  },
  {
    id: "dia-dottore-09",
    cat: "dialoghi",
    level: "A2",
    title: "Dal dottore: che mal di gola!",
    titleEs: "Del médico: ¡vaya dolor de garganta!",
    minutes: 3,
    lines: [
      { speaker: "Medico", it: "Buongiorno, si accomodi. Mi dica, cosa sente?", es: "Buenos días, siéntese. Dígame, ¿qué siente?" },
      { speaker: "Paziente", it: "Buongiorno, dottore. Da tre giorni ho mal di gola e un po' di febbre.", es: "Buenos días, doctor. Desde hace tres días tengo dolor de garganta y algo de fiebre." },
      { speaker: "Medico", it: "Che febbre ha avuto? Ha preso qualcosa?", es: "¿Qué fiebre ha tenido? ¿Ha tomado algo?" },
      { speaker: "Paziente", it: "Ieri sera trentotto e mezzo. Ho preso una pastiglia, ma non è servita a molto.", es: "Ayer por la tarde treinta y ocho y medio. Tomé una pastilla, pero no sirvió de mucho." },
      { speaker: "Medico", it: "Vediamo un po'... Apra la bocca e dica «aaah». Hmm, la gola è molto arrossata.", es: "Veamos... Abra la boca y diga «aaah». Hmm, la garganta está muy enrojecida." },
      { speaker: "Paziente", it: "È grave, dottore?", es: "¿Es grave, doctor?" },
      { speaker: "Medico", it: "No, stia tranquillo: è un'infezione virale, non serve l'antibiotico. Passa da sola in una settimana.", es: "No, quédese tranquilo: es una infección viral, no hace falta antibiótico. Se pasa solo en una semana." },
      { speaker: "Paziente", it: "Meno male! E cosa devo fare?", es: "¡Menos mal! ¿Y qué debo hacer?" },
      { speaker: "Medico", it: "Beva molti liquidi caldi — tè con miele, per esempio — e riposi bene. Niente gelato per qualche giorno!", es: "Beba muchos líquidos calientes —té con miel, por ejemplo— y descanse bien. ¡Nada de helado por algunos días!" },
      { speaker: "Paziente", it: "Capito... Solo un problema: io lavoro al ristorante, ho bisogno del certificato medico.", es: "Entendido... Solo un problema: yo trabajo en un restaurante, necesito el certificado médico." },
      { speaker: "Medico", it: "Se la febbre continua domani, stia a casa due giorni. Le stampo il certificato. ArrivederLa e guarisca presto!", es: "Si la fiebre continúa mañana, quédese en casa dos días. Le imprimo el certificado. Hasta la vista ¡y que se mejore pronto!" },
    ],
    glossary: [
      { it: "si accomodi", es: "siéntese (formal)" },
      { it: "il mal di gola", es: "el dolor de garganta" },
      { it: "la pastiglia", es: "la pastilla" },
      { it: "arrossato", es: "enrojecido" },
      { it: "non serve", es: "no hace falta / no sirve" },
      { it: "il certificato medico", es: "el certificado médico" },
      { it: "guarisca presto", es: "que se mejore pronto" },
    ],
    questions: [
      { q: "¿Desde cuándo se siente mal el paciente?", options: ["Da ieri", "Da tre giorni", "Da una settimana", "Da un mese"], answer: 1, why: "«Da tre giorni ho mal di gola e un po' di febbre»." },
      { q: "¿Qué fiebre tuvo ayer por la tarde?", options: ["Trentasette e mezzo", "Trentotto e mezzo", "Trentanove", "Nessuna febbre"], answer: 1, why: "«Ieri sera trentotto e mezzo» = 38,5 °C." },
      { q: "¿Por qué NO sirve el antibiótico?", options: ["Perché è allergico", "Perché è un'infezione virale", "Perché costa troppo", "Perché l'ha già preso"], answer: 1, why: "El doctor explica que es una infección viral: los antibióticos no actúan contra los virus." },
      { q: "¿Qué recomienda el médico?", options: ["Solo riposo assoluto", "Liquidi caldi, riposo e niente gelato", "Antibiotico per una settimana", "Sport all'aria aperta"], answer: 1, why: "Recomienda beber líquidos calientes (té con miel), descansar y no comer helado por unos días." },
      { q: "¿Por qué necesita el paciente el certificado médico?", options: ["Per la scuola", "Perché lavora al ristorante", "Per il viaggio", "Per l'assicurazione"], answer: 1, why: "«Io lavoro al ristorante, ho bisogno del certificato medico»." },
    ],
    discuss: [
      { it: "Com'è il sistema sanitario nel tuo paese? Si paga il medico di base?", es: "¿Cómo es el sistema de salud en tu país? ¿Se paga al médico de cabecera?" },
      { it: "Quando hai la febbre, preferisci la medicina della nonna o le pastiglie? Quali rimedi conosci?", es: "Cuando tienes fiebre, ¿prefieres la medicina de la abuela o las pastillas? ¿Qué remedios conoces?" },
      { it: "In italiano si dice «mal di gola», «mal di testa», «mal di pancia»: conosci altre espressioni con «mal di»?", es: "En italiano se dice «mal di gola», «mal di testa», «mal di pancia»: ¿conoces otras expresiones con «mal di»?" },
    ],
  },
  {
    id: "dia-appartamento-10",
    cat: "dialoghi",
    level: "B2",
    title: "Affittare un appartamento: una trattativa impegnativa",
    titleEs: "Alquilar un apartamento: una negociación exigente",
    minutes: 5,
    lines: [
      { speaker: "Agente", it: "Buongiorno, si accomodi. Lei cercava il trilocale di via Zamboni, giusto? Ho qui le chiavi, se vuole vederlo subito.", es: "Buenos días, siéntese. Usted buscaba el trilocular de vía Zamboni, ¿verdad? Tengo aquí las llaves, si quiere verlo de inmediato." },
      { speaker: "Cliente", it: "Esatto. Ho visto l'annuncio online: settecentocinquanta euro al mese. Mi sembrava un buon prezzo, sempre che l'appartamento sia come nelle foto.", es: "Exacto. Vi el anuncio en línea: setecientos cincuenta euros al mes. Me parecía buen precio, siempre que el apartamento sea como en las fotos." },
      { speaker: "Agente", it: "Le foto sono recenti, glielo garantisco. C'è però una condizione che devo segnalarle subito: il proprietario chiede un contratto di quattro anni, non transitorio.", es: "Las fotos son recientes, se lo garantizo. Hay sin embargo una condición que debo señalarle de inmediato: el propietario pide un contrato de cuatro años, no transitorio." },
      { speaker: "Cliente", it: "Capisco. E per la caparra come siamo messi?", es: "Entiendo. ¿Y cómo quedamos con el depósito?" },
      { speaker: "Agente", it: "Tre mensilità, come da prassi, più una mensilità di mediazione per l'agenzia. Le bollette sono escluse: il riscaldamento è autonomo, quindi l'importo dipenderà dai suoi consumi.", es: "Tres mensualidades, como es la práctica, más una mensualidad de mediación para la agencia. Las facturas están excluidas: la calefacción es autónoma, así que el importe dependerá de su consumo." },
      { speaker: "Cliente", it: "Non è proprio economico, detto tra noi. E se un domani dovessi trasferirmi per lavoro? Esistono clausole per recedere prima della scadenza?", es: "No es precisamente barato, entre nosotros. ¿Y si mañana me trasladaran por trabajo? ¿Existen cláusulas para rescindir antes del vencimiento?" },
      { speaker: "Agente", it: "Il contratto prevede la disdetta anticipata con sei mesi di preavviso, previa notifica raccomandata. Detto ciò, le consiglierei comunque di visitare l'immobile prima di prendere qualsiasi decisione: le foto non rendono giustizia alla luce del salotto, soprattutto al mattino.", es: "El contrato prevé la rescisión anticipada con seis meses de preaviso, previa notificación certificada. Dicho esto, le recomendaría de todos modos visitar el inmueble antes de tomar cualquier decisión: las fotos no le hacen justicia a la luz del salón, sobre todo por la mañana." },
      { speaker: "Cliente", it: "Ha ragione, andiamo a vederlo. Solo un'ultima curiosità: il condominio com'è? Rumoroso? Con bambini, cani...?", es: "Tiene razón, vamos a verlo. Solo una última curiosidad: ¿cómo es el condominio? ¿Ruidoso? ¿Con niños, perros...?" },
      { speaker: "Agente", it: "Piccolo, sei famiglie in tutto, molto silenzioso. L'unica seccatura è l'assemblea di condominio a dicembre, ma a quella penseranno gli altri. Le va bene domani alle diciotto?", es: "Pequeño, seis familias en total, muy silencioso. La única molestia es la asamblea de copropietarios en diciembre, pero de eso se ocuparán los demás. ¿Le parece mañana a las dieciocho?" },
      { speaker: "Cliente", it: "Domani alle diciotto va benissimo. E si ricordi: prima di firmare voglio chiarire bene la questione della mediazione. Non amo le sorprese.", es: "Mañana a las dieciocho me parece perfecto. Y recuerde: antes de firmar quiero aclarar bien el asunto de la mediación. No me gustan las sorpresas." },
    ],
    glossary: [
      { it: "il trilocale", es: "el apartamento de tres ambientes" },
      { it: "la caparra", es: "el depósito / la fianza" },
      { it: "la mensilità", es: "la mensualidad" },
      { it: "la mediazione", es: "la mediación (comisión de la agencia)" },
      { it: "la disdetta", es: "la rescisión / cancelación del contrato" },
      { it: "il preavviso", es: "el preaviso" },
      { it: "l'assemblea di condominio", es: "la asamblea de copropietarios" },
    ],
    questions: [
      { q: "¿Qué condición señala el agente desde el principio?", options: ["Il prezzo aumenta", "Il proprietario chiede un contratto di quattro anni, non transitorio", "Non si accettano animali", "L'appartamento è già affittato"], answer: 1, why: "«Il proprietario chiede un contratto di quattro anni, non transitorio»." },
      { q: "¿Cuánto se paga de caparra y de mediación?", options: ["Due mensilità, senza mediazione", "Tre mensilità di caparra più una di mediazione", "Sei mensilità totali", "Una mensilità sola"], answer: 1, why: "«Tre mensilità, come da prassi, più una mensilità di mediazione per l'agenzia»." },
      { q: "¿Qué significa que «il riscaldamento è autonomo»?", options: ["È incluso nell'affitto", "Ogni inquilino regola i propri consumi e paga le proprie bollette", "Non funziona d'inverno", "È gratis"], answer: 1, why: "Las facturas están excluidas y el importe «dipenderà dai suoi consumi»: cada quien regula su propio consumo." },
      { q: "¿Cómo se puede rescindir el contrato antes del vencimiento?", options: ["Pagando una penale di tre mesi", "Con sei mesi di preavviso, previa notifica raccomandata", "Non è possibile", "Basta una telefonata"], answer: 1, why: "«La disdetta anticipata con sei mesi di preavviso, previa notifica raccomandata»." },
      { q: "¿Qué «seccatura» menciona el agente sobre el condominio?", options: ["I cani dei vicini", "L'assemblea di condominio a dicembre", "Il rumore della strada", "Le scale rotte"], answer: 1, why: "«L'unica seccatura è l'assemblea di condominio a dicembre»." },
    ],
    discuss: [
      { it: "Affittare o comprare casa? Nel tuo paese cosa è più normale per i giovani? E in Italia, sai com'è la situazione?", es: "¿Alquilar o comprar casa? ¿En tu país qué es más normal para los jóvenes? ¿Y en Italia, sabes cómo está la situación?" },
      { it: "La mediazione dell'agenzia: ti sembra giusta come prassi? Argomenta.", es: "La mediación de la agencia: ¿te parece justa como práctica? Argumenta." },
      { it: "Conosci altre parole del lessico della casa italiana: «villetta», «mansarda», «piano terra»? Prova a usarle in frasi.", es: "¿Conoces otras palabras del léxico de la casa italiana: «villetta», «mansarda», «piano terra»? Trata de usarlas en frases." },
    ],
  },
];

/* ═══ INFORMAZIONE EXTRA v9.11 ════════════════════════════════════════ */

export const INFORMAZIONE_EXTRA5: Lettura[] = [
  {
    id: "inf-trasporti-12",
    cat: "informazione",
    level: "A2",
    title: "Muoversi in Italia: treni, bus e metro",
    titleEs: "Moverse por Italia: trenes, buses y metro",
    minutes: 3,
    lines: [
      { it: "In Italia viaggiare è facile, ma è importante conoscere le differenze tra i treni. Il regionale è il più economico e si ferma in quasi tutte le città, anche in quelle piccole. L'Intercity è più veloce e collega le grandi città. Il Frecciarossa è il treno più veloce del paese: va a 300 chilometri all'ora, ma il biglietto è più caro.", es: "En Italia viajar es fácil, pero es importante conocer las diferencias entre los trenes. El regional es el más económico y se detiene en casi todas las ciudades, también en las pequeñas. El Intercity es más rápido y conecta las grandes ciudades. El Frecciarossa es el tren más rápido del país: va a 300 kilómetros por hora, pero el billete es más caro." },
      { it: "Dove si compra il biglietto? Si può comprare online, sul sito o con l'app delle ferrovie, oppure in stazione, alla biglietteria automatica. Attenzione: sui treni regionali il biglietto va convalidato prima di salire, con le macchine gialle o verdi vicino ai binari. Se non lo convalidi, rischi una multa!", es: "¿Dónde se compra el billete? Se puede comprar en línea, en el sitio o con la app de los ferrocarriles, o bien en la estación, en la taquilla automática. Atención: en los trenes regionales el billete debe validarse antes de subir, con las máquinas amarillas o verdes cerca de los andenes. ¡Si no lo validas, arriesgas una multa!" },
      { it: "Le grandi città hanno la metro, cioè la metropolitana: Milano, Roma, Napoli e Torino. La metro è veloce e non c'è il traffico. Alle ore di punta, però, è piena di gente: meglio aspettare dieci minuti che viaggiare schiacciati come sardine!", es: "Las grandes ciudades tienen el metro, es decir, el metropolitano: Milán, Roma, Nápoles y Turín. El metro es rápido y no hay tráfico. En las horas punta, sin embargo, está lleno de gente: ¡es mejor esperar diez minutos que viajar apretado como una sardina!" },
      { it: "Nelle città ci sono anche i bus e i tram. Il biglietto è spesso unico: con lo stesso biglietto puoi prendere bus, tram e metro per novanta minuti. Si compra nelle tabaccherie, nelle edicole o con l'app del Comune. Ricorda: anche qui devi convalidare il biglietto all'inizio del viaggio.", es: "En las ciudades también hay buses y tranvías. El billete suele ser único: con el mismo billete puedes tomar bus, tranvía y metro durante noventa minutos. Se compra en los estancos, en los quioscos o con la app del Municipio. Recuerda: también aquí debes validar el billete al inicio del viaje." },
      { it: "Un consiglio importante: prima di un lungo viaggio, guarda il calendario degli scioperi! In Italia gli scioperi dei trasporti sono frequenti, di solito il venerdì. Le date sono pubblicate online qualche giorno prima. Con un po' di attenzione, il viaggio in Italia diventa un piacere: dal treno si vedono colline, borghi e il mare.", es: "Un consejo importante: antes de un viaje largo, ¡mira el calendario de huelgas! En Italia las huelgas de transporte son frecuentes, normalmente los viernes. Las fechas se publican en línea algunos días antes. Con un poco de atención, el viaje por Italia se vuelve un placer: desde el tren se ven colinas, pueblos y el mar." },
    ],
    glossary: [
      { it: "il binario", es: "el andén / la vía" },
      { it: "convalidare il biglietto", es: "validar el billete" },
      { it: "la multa", es: "la multa" },
      { it: "le ore di punta", es: "las horas punta" },
      { it: "la tabaccheria", es: "el estanco" },
      { it: "lo sciopero", es: "la huelga" },
    ],
    questions: [
      { q: "¿Cuál es el tren más rápido de Italia?", options: ["Il regionale", "L'Intercity", "Il Frecciarossa", "Il tram"], answer: 2, why: "«Il Frecciarossa è il treno più veloce del paese: va a 300 chilometri all'ora»." },
      { q: "¿Qué hay que hacer con el billete en los trenes regionales?", options: ["Gettarlo via", "Convalidarlo prima di salire, con le macchine gialle o verdi", "Darlo al controllore", "Niente, è automatico"], answer: 1, why: "El billete regional se valida antes de subir; si no, arriesgas una multa." },
      { q: "¿Qué significa «biglietto unico» en las ciudades?", options: ["Costa di più", "Con lo stesso biglietto prendi bus, tram e metro per novanta minuti", "È solo per i turisti", "Valida solo un viaggio"], answer: 1, why: "El billete único permite combinar bus, tranvía y metro durante noventa minutos." },
      { q: "¿Cuándo suelen ser las huelgas de transporte en Italia?", options: ["Di solito il venerdì", "Solo ad agosto", "Mai", "Solo il lunedì"], answer: 0, why: "«Gli scioperi dei trasporti sono frequenti, di solito il venerdì»." },
    ],
    discuss: [
      { it: "Com'è il trasporto pubblico nella tua città? Confrontalo con quello italiano.", es: "¿Cómo es el transporte público en tu ciudad? Compáralo con el italiano." },
      { it: "Preferisci viaggiare in treno, in aereo o in macchina? Perché?", es: "¿Prefieres viajar en tren, en avión o en auto? ¿Por qué?" },
      { it: "Nel tuo paese esiste l'abitudine di convalidare il biglietto? Cosa succede se non lo fai?", es: "¿En tu país existe la costumbre de validar el billete? ¿Qué pasa si no lo haces?" },
    ],
  },
  {
    id: "inf-energia-13",
    cat: "informazione",
    level: "B2",
    title: "La transizione energetica: sole, vento e bollette",
    titleEs: "La transición energética: sol, viento y facturas",
    minutes: 5,
    lines: [
      { it: "Per decenni l'Italia ha vissuto con una contraddizione silenziosa: un paese industrializzato, uno dei più grandi consumatori di energia d'Europa, che però produce pochissima dell'energia che consuma. Il gas arrivava per nave dal Qatar e dagli Stati Uniti, o per gasdotto dalla Russia e dall'Algeria; il petrolio si importava da mezzo mondo. Ogni crisi internazionale — ogni guerra, ogni embargo — si traduceva subito in bollette più care per le famiglie italiane.", es: "Durante décadas Italia vivió con una contradicción silenciosa: un país industrializado, uno de los mayores consumidores de energía de Europa, que sin embargo produce poquísima parte de la energía que consume. El gas llegaba por barco desde Catar y Estados Unidos, o por gasoducto desde Rusia y Argelia; el petróleo se importaba de medio mundo. Cada crisis internacional —cada guerra, cada embargo— se traducía de inmediato en facturas más caras para las familias italianas." },
      { it: "Negli ultimi anni qualcosa è cambiato. Il fotovoltaico è esploso: sui tetti delle case, sui capannoni industriali, persino sui parcheggi. Le regioni del Sud — Puglia in testa — sono diventate le più «produttive» d'Europa per energia solare. In alcune giornate di vento e sole particolarmente favorevoli, le rinnovabili hanno coperto oltre il sessanta percento della domanda elettrica nazionale, un risultato impensabile appena dieci anni fa.", es: "En los últimos años algo ha cambiado. La fotovoltaica ha explotado: en los techos de las casas, en las naves industriales, incluso en los estacionamientos. Las regiones del Sur —Puglia a la cabeza— se han vuelto las más «productivas» de Europa en energía solar. En algunas jornadas de viento y sol particularmente favorables, las renovables han cubierto más del sesenta por ciento de la demanda eléctrica nacional, un resultado impensable apenas hace diez años." },
      { it: "Una novità interessante sono le comunità energetiche: condomini, paesi o gruppi di vicini che installano insieme un impianto fotovoltaico condiviso e si spartiscono l'energia prodotta. In alcuni borghi dell'Appennino, dove i giovani se ne vanno e le case si svuotano, la comunità energetica è diventata anche un progetto sociale: un motivo per restare, un risparmio concreto, un'occasione per ricostruire legami tra le persone.", es: "Una novedad interesante son las comunidades energéticas: condominios, pueblos o grupos de vecinos que instalan juntos una planta fotovoltaica compartida y se reparten la energía producida. En algunos pueblos del Apenino, donde los jóvenes se van y las casas se vacían, la comunidad energética se ha vuelto también un proyecto social: una razón para quedarse, un ahorro concreto, una ocasión para reconstruir lazos entre las personas." },
      { it: "Resta però il problema dei costi. Quando il prezzo del gas è salito alle stelle, dopo la guerra in Ucraina, le bollette degli italiani sono quasi raddoppiate, e l'energia è diventata un tema centrale del dibattito politico. Molti consumatori si sono chiesti come orientarsi tra offerte a prezzo fisso e a prezzo variabile, mentre il mercato tutelato — quello con i prezzi decisi dall'autorità — si è progressivamente ridotto, sostituito dal libero mercato. La concorrenza, dicono gli esperti, dovrebbe abbassare i prezzi; ma serve anche un consumatore più informato e consapevole.", es: "Queda sin embargo el problema de los costos. Cuando el precio del gas se disparó, tras la guerra en Ucrania, las facturas de los italianos casi se duplicaron, y la energía se volvió un tema central del debate político. Muchos consumidores se preguntaron cómo orientarse entre ofertas a precio fijo y a precio variable, mientras el mercado tutelado —el de precios decididos por la autoridad— se ha reducido progresivamente, sustituido por el mercado libre. La competencia, dicen los expertos, debería bajar los precios; pero hace falta también un consumidor más informado y consciente." },
      { it: "E il nucleare? In Italia non se ne parla al presente, ma al passato: dopo Chernobyl, il referendum del 1987 chiuse le centrali; dopo Fukushima, quello del 2011 confermò la scelta. Oggi alcuni politici propongono di ripartire, magari col nucleare «di nuova generazione», ma la maggioranza degli italiani resta contraria, e il dibattito è tutt'altro che chiuso. Nel frattempo, il vero fronte della transizione è altrove: le case da ristrutturare, le caldaie da sostituire con le pompe di calore, le auto elettriche e — problema forse più difficile di tutti — le reti elettriche, che devono imparare a gestire un'energia che non arriva più da poche grandi centrali, ma da milioni di piccoli produttori sparsi ovunque.", es: "¿Y la nuclear? En Italia no se habla de ella en presente, sino en pasado: tras Chernóbil, el referéndum de 1987 cerró las centrales; tras Fukushima, el de 2011 confirmó la elección. Hoy algunos políticos proponen reemprender, quizá con la nuclear «de nueva generación», pero la mayoría de los italianos sigue en contra, y el debate está lejos de cerrarse. Mientras tanto, el verdadero frente de la transición está en otra parte: las casas por reformar, las calderas por sustituir con bombas de calor, los autos eléctricos y —problema quizá más difícil de todos— las redes eléctricas, que deben aprender a gestionar una energía que ya no llega de pocas grandes centrales, sino de millones de pequeños productores dispersos por todas partes." },
      { it: "La parola chiave, usata ormai da tutti, è «transizione giusta»: la trasformazione non deve pesare su chi ha meno reddito, sulle piccole imprese, sui territori. È un principio condiviso, la sua applicazione è però complicata: ogni incentivo costa denaro pubblico, ogni ecotassa suscita proteste, ogni scelta tecnica ha vincitori e vinti. L'Italia, con tutto il suo sole e il suo vento, ha l'occasione di trasformare una storica debolezza — la dipendenza dall'estero — in una nuova autonomia. Riuscirci è la sfida della generazione attuale.", es: "La palabra clave, usada ya por todos, es «transición justa»: la transformación no debe pesar sobre quienes tienen menos ingresos, sobre las pequeñas empresas, sobre los territorios. Es un principio compartido, pero su aplicación es complicada: cada incentivo cuesta dinero público, cada ecotasación suscita protestas, cada elección técnica tiene ganadores y perdedores. Italia, con todo su sol y su viento, tiene la ocasión de transformar una histórica debilidad —la dependencia del exterior— en una nueva autonomía. Lograrlo es el desafío de la generación actual." },
    ],
    glossary: [
      { it: "il gasdotto", es: "el gasoducto" },
      { it: "il capannone industriale", es: "la nave / el galpón industrial" },
      { it: "la comunità energetica", es: "la comunidad energética" },
      { it: "salire alle stelle", es: "dispararse (precio)" },
      { it: "il mercato tutelato", es: "el mercado tutelado (con precios regulados)" },
      { it: "la pompa di calore", es: "la bomba de calor" },
      { it: "la transizione giusta", es: "la transición justa" },
    ],
    questions: [
      { q: "¿Cuál es la «contradicción silenciosa» histórica de Italia?", options: ["Produce troppo petrolio", "È un grande consumatore di energia ma ne produce pochissima, importando gas e petrolio", "Non ha industria", "Ha troppe centrali nucleari"], answer: 1, why: "El texto presenta a Italia como gran consumador importador: cada crisis internacional subía las facturas." },
      { q: "¿Qué son las «comunità energetiche»?", options: ["Centrali nucleari condivise", "Condomini, paesi o gruppi di vicini che installano insieme un fotovoltaico condiviso e si spartiscono l'energia", "Sindacati dei lavoratori dell'energia", "Sconti statali sulle bollette"], answer: 1, why: "Son grupos que instalan juntos una planta compartida y se reparten la energía; en el Apenino también son un proyecto social." },
      { q: "¿Qué decidió el referéndum de 1987 (y confirmó el de 2011)?", options: ["Costruire nuove centrali nucleari", "Chiudere le centrali nucleari in Italia", "Privatizzare l'energia", "Vietare il fotovoltaico"], answer: 1, why: "Tras Chernóbil (1987) se cerraron las centrales; tras Fukushima (2011) se confirmó la elección." },
      { q: "¿Cuál se presenta como quizá el problema más difícil de la transición?", options: ["Il prezzo dei pannelli", "Le reti elettriche, che devono gestire energia da milioni di piccoli produttori", "La mancanza di sole", "Le proteste contro il vento"], answer: 1, why: "«Il problema forse più difficile di tutti: le reti elettriche», que deben gestionar energía de millones de pequeños productores." },
      { q: "¿Qué significa «transizione giusta»?", options: ["Una transizione lenta", "La trasformazione non deve pesare su chi ha meno reddito, sulle piccole imprese, sui territori", "Una transizione solo tecnologica", "Tornare al carbone gradualmente"], answer: 1, why: "Es el principio de que la transformación no debe pesar sobre los más débiles; su aplicación es lo complicado." },
    ],
    discuss: [
      { it: "Il tuo paese come produce energia? Confronta la sua situazione con quella italiana.", es: "¿Cómo produce energía tu país? Compara su situación con la italiana." },
      { it: "Installeresti il fotovoltaico sul tuo tetto (o voteresti per una comunità energetica nel tuo quartiere)? Fai i conti: conviene?", es: "¿Instalarías fotovoltaica en tu techo (o votarías por una comunidad energética en tu barrio)? Haz las cuentas: ¿conviene?" },
      { it: "«Transizione giusta»: chi deve pagare il costo della trasformazione ecologica? Argomenta con esempi.", es: "«Transición justa»: ¿quién debe pagar el costo de la transformación ecológica? Argumenta con ejemplos." },
    ],
  },
  {
    id: "inf-bufale-14",
    cat: "informazione",
    level: "C2",
    title: "Bufale e fact-checking: difendersi dalle notizie false",
    titleEs: "Bulos y verificación de datos: defenderse de las noticias falsas",
    minutes: 6,
    lines: [
      { it: "La disinformazione non è un'invenzione di internet: la propaganda esiste da quando esiste la politica, e la storia del Novecento è costellata di notizie fabbricate ad arte. Ciò che è cambiato, e radicalmente, è la velocità di propagazione. Una menzogna del Seicento metteva settimane ad attraversare l'Europa, viaggiando di bocca in bocca o su fogli stampati in poche copie; una bufala di oggi fa il giro del pianeta in mezz'ora, amplificata da sistemi di raccomandazione che non distinguono il vero dal falso, ma misurano soltanto l'engagement — cioè la nostra attenzione, il tempo che dedichiamo a un contenuto e che può essere venduto agli inserzionisti.", es: "La desinformación no es un invento de internet: la propaganda existe desde que existe la política, y la historia del Novecento está sembrada de noticias fabricadas a propósito. Lo que cambió, y radicalmente, es la velocidad de propagación. Una mentira del siglo XVII tardaba semanas en cruzar Europa, viajando de boca en boca o en hojas impresas en pocas copias; un bulo de hoy da la vuelta al planeta en media hora, amplificado por sistemas de recomendación que no distinguen lo verdadero de lo falso, pero miden solo el engagement —es decir, nuestra atención, el tiempo que dedicamos a un contenido y que puede venderse a los anunciantes." },
      { it: "È quello che gli economisti chiamano l'«economia dell'attenzione», e spiega un paradosso apparente: perché una notizia falsa si diffonde più velocemente di una vera? Perché la verità è spesso complicata, sfumata, noiosa; la bufala è invece semplice, emotiva, rassicurante o indignante. Un titolo come «Lo studio dice che il caffè fa bene» può essere vero martedì e falso giovedì, a seconda dello studio citato; un titolo come «Ci avvelenano di nascosto» promette una spiegazione totale del mondo, un nemico preciso e la sensazione, inebriante, di essere tra i pochi che hanno capito. Non a caso gli studi sulla condivisione mostrano che le emozioni forti — sdegno, paura, trionfo — sono il carburante principale della viralità.", es: "Es lo que los economistas llaman la «economía de la atención», y explica una paradoja aparente: ¿por qué una noticia falsa se difunde más rápido que una verdadera? Porque la verdad suele ser complicada, matizada, aburrida; el bulo es en cambio simple, emotivo, tranquilizador o indignante. Un titular como «El estudio dice que el café hace bien» puede ser verdad el martes y falso el jueves, según el estudio citado; un titular como «Nos envenenan a escondidas» promete una explicación total del mundo, un enemigo preciso y la sensación, embriagadora, de estar entre los pocos que lo han entendido. No por casualidad los estudios sobre compartir muestran que las emociones fuertes —indignación, miedo, triunfo— son el principal combustible de la viralidad." },
      { it: "Come si riconosce, allora, una bufala? Esistono segnali ricorrenti, quasi una grammatica. Primo: il titolo urlato, con punti esclamativi e l'imperativo di condividere («Diffondete prima che lo cancellino!»), che sfrutta la fretta come arma. Secondo: la fonte assente o vaga — «si dice», «un'amica infermiera mi ha raccontato» — oppure distorta: un'istituzione inesistente, un'università mai sentita nominare, uno studio introvabile. Terzo: l'immagine riciclata, fotografie vere usate fuori contesto, che si possono verificare in pochi secondi con una ricerca inversa dell'immagine. Quarto: i numeri senza contesto, percentuali impressionanti che a un esame più attento rivelano basi minuscole o confronti indebiti.", es: "¿Cómo se reconoce, entonces, un bulo? Existen señales recurrentes, casi una gramática. Primero: el titular gritado, con signos de exclamación y el imperativo de compartir («¡Difundan antes de que lo borren!»), que aprovecha la prisa como arma. Segundo: la fuente ausente o vaga —«se dice», «una amiga enfermera me contó»— o distorsionada: una institución inexistente, una universidad nunca oída, un estudio imposible de encontrar. Tercero: la imagen reciclada, fotografías verdaderas usadas fuera de contexto, que pueden verificarse en pocos segundos con una búsqueda inversa de la imagen. Cuarto: los números sin contexto, porcentajes impresionantes que a un examen más atento revelan bases minúsculas o comparaciones indebidas." },
      { it: "A questi segnali lavorano i fact-checker, i verificatori professionali. In Italia esistono redazioni dedicate — tra le più note, quelle collegate ai grandi quotidiani e le agenzie indipendenti nate negli ultimi dieci anni — che ogni giorno smontano decine di affermazioni pubbliche: statistiche citate a sproposito, citazioni apocrife, video manipolati. Il loro metodo è banale nella forma e rigoroso nella sostanza: rintracciare la fonte primaria, confrontare le cifre, chiedere conferma agli esperti, pubblicare la verifica con tutti i passaggi visibili. Il limite è strutturale: la correzione viaggia sempre più lentamente della bugia, e raramente raggiunge chi ha già condiviso quest'ultima. Studiare il fact-checking, del resto, non garantisce immunità: i ricercatori hanno mostrato che anche chi conosce bene le tecniche della disinformazione cade regolarmente nei suoi tranelli.", es: "A estas señales se dedican los fact-checkers, los verificadores profesionales. En Italia existen redacciones dedicadas —entre las más conocidas, las vinculadas a los grandes diarios y las agencias independientes nacidas en los últimos diez años— que cada día desmontan decenas de afirmaciones públicas: estadísticas citadas en vano, citas apócrifas, videos manipulados. Su método es banal en la forma y riguroso en el fondo: rastrear la fuente primaria, comparar las cifras, pedir confirmación a los expertos, publicar la verificación con todos los pasos visibles. El límite es estructural: la corrección viaja siempre más lento que la mentira, y rara vez alcanza a quien ya compartió esta última. Estudiar el fact-checking, por lo demás, no garantiza inmunidad: los investigadores han mostrado que incluso quien conoce bien las técnicas de la desinformación cae regularmente en sus trampas." },
      { it: "La risposta, dunque, non può essere solo individuale: serve un'infrastruttura. L'Unione Europea ha cominciato a regolamentare le piattaforme, obbligandole a rendere trasparenti le pubblicità politiche e a segnalare i contenuti manipolati; le piattaforme stesse hanno introdotto etichette e strumenti di segnalazione, con risultati controversi. Sul fronte educativo, l'Italia ha inserito l'educazione civica digitale nella scuola, anche se la formazione dei docenti resta il punto debole. E sul piano culturale si diffonde un'idea semplice ma potente, mutuata dall'igiene della pandemia: la «igiene informativa». Non condividere quando si è arrabbiati; verificare prima di inoltrare; diffidare di ciò che conferma troppo comodamente le proprie opinioni — perché l'effetto più subdolo della disinformazione non è far credere il falso, ma far desistere dal credere a qualsiasi cosa.", es: "La respuesta, entonces, no puede ser solo individual: hace falta una infraestructura. La Unión Europea ha comenzado a regular las plataformas, obligándolas a hacer transparente la publicidad política y a señalar los contenidos manipulados; las propias plataformas han introducido etiquetas y herramientas de denuncia, con resultados controvertidos. En el frente educativo, Italia ha insertado la educación cívica digital en la escuela, aunque la formación de los docentes sigue siendo el punto débil. Y en el plano cultural se difunde una idea simple pero potente, tomada de la higiene de la pandemia: la «higiene informativa». No compartir cuando se está enojado; verificar antes de reenviar; desconfiar de lo que confirma demasiado cómodamente las propias opiniones —porque el efecto más insidioso de la desinformación no es hacer creer lo falso, sino hacer desistir de creer en cualquier cosa." },
      { it: "È quest'ultimo punto, forse, il più importante per chi studia una lingua e legge i suoi giornali. Chi impara l'italiano dai social incontra un italiano reale ma spesso degradato: titoli troncati, sfogo al posto dell'argomento, ironia senza contesto. Chi invece legge le verifiche dei fact-checker — la ricostruzione paziente di come una frase è stata deformata, di dove nasce una foto, di cosa dice davvero quel rapporto — incontra l'italiano dell'argomentazione: congiuntivi, condizionali, concessive, la lingua del «sì, ma» e del «dipende». Paradossalmente, difendersi dalle bufale è anche un ottimo esercizio di grammatica avanzata.", es: "Es este último punto, quizá, el más importante para quien estudia una lengua y lee sus periódicos. Quien aprende italiano de las redes encuentra un italiano real pero a menudo degradado: titulares truncados, desahogo en lugar de argumento, ironía sin contexto. Quien en cambio lee las verificaciones de los fact-checkers —la reconstrucción paciente de cómo una frase fue deformada, de dónde nace una foto, de qué dice realmente aquel informe— encuentra el italiano de la argumentación: subjuntivos, condicionales, concesivas, la lengua del «sí, pero» y del «depende». Paradójicamente, defenderse de los bulos es también un excelente ejercicio de gramática avanzada." },
    ],
    glossary: [
      { it: "la bufala", es: "el bulo / la noticia falsa" },
      { it: "costellato di", es: "sembrado / lleno de" },
      { it: "l'engagement", es: "la interacción (métrica de redes)" },
      { it: "apocrifo", es: "apócrifo (falso, atribuido indebidamente)" },
      { it: "indebito", es: "indebido / ilícito" },
      { it: "il tranello", es: "la trampa" },
      { it: "subdolo", es: "insidioso" },
      { it: "far desistere", es: "hacer desistir" },
    ],
    questions: [
      { q: "¿Qué cambió radicalmente con internet respecto a la desinformación?", options: ["La natura umana", "La velocità di propagazione: una bufala fa il giro del pianeta in mezz'ora", "I temi delle bugie", "Niente è cambiato"], answer: 1, why: "La propaganda siempre existió; lo nuevo es la velocidad, amplificada por sistemas que miden solo engagement." },
      { q: "Según la «economía de la atención», ¿por qué se difunde más rápido lo falso?", options: ["Perché costa meno", "Perché è semplice, emotiva e rassicurante o indignante, mentre la verità è complicata e sfumata", "Perché è più corta", "Perché i giornali la copiano"], answer: 1, why: "El bulo ofrece explicación total y emoción fuerte; la verdad suele ser matizada y «aburrida». Las emociones fuertes alimentan la viralidad." },
      { q: "¿Cuál NO es una señal típica de bufala según el texto?", options: ["Il titolo urlato con l'imperativo di condividere", "La fonte assente o vaga", "I numeri senza contesto", "La firma di un giornale di riferimento con la verifica dei passaggi"], answer: 3, why: "Las señales son titular gritado, fuente ausente/vaga, imagen reciclada y números sin contexto; la verificación con pasos visibles es lo que hacen los fact-checkers." },
      { q: "¿Cuál es el límite estructural del fact-checking?", options: ["Costa troppo", "La correzione viaggia sempre più lentamente della bugia e raramente raggiunge chi l'ha già condivisa", "Non esiste in Italia", "È vietato per legge"], answer: 1, why: "La corrección llega tarde a quien ya compartió la mentira; ni siquiera los expertos son inmunes." },
      { q: "¿Cuál es el efecto «más insidioso» de la desinformación?", options: ["Far ridere la gente", "Far desistere dal credere a qualsiasi cosa", "Aumentare le vendite dei giornali", "Migliorare la grammatica"], answer: 1, why: "El daño más profundo no es creer lo falso, sino renunciar a creer en cualquier cosa." },
      { q: "¿Por qué defenderse de los bulos es «un ejercicio de gramática avanzada»?", options: ["Perché le bufale usano congiuntivi difficili", "Perché le verifiche dei fact-checker usano la lingua dell'argomentazione: congiuntivi, condizionali, concessive", "Perché si scrivono in latino", "Perché richiedono di contare le parole"], answer: 1, why: "Las verificaciones reconstruyen matices: es el italiano del «sì, ma» y del «dipende»." },
    ],
    discuss: [
      { it: "Hai mai condiviso una notizia poi rivelatasi falsa? Cosa hai provato? Cosa cambieresti nel tuo comportamento?", es: "¿Alguna vez compartiste una noticia que luego resultó falsa? ¿Qué sentiste? ¿Qué cambiarías en tu comportamiento?" },
      { it: "«La verità è noiosa»: sei d'accordo? C'è un modo di renderla più attraente senza tradirla?", es: "«La verdad es aburrida»: ¿estás de acuerdo? ¿Hay modo de hacerla más atractiva sin traicionarla?" },
      { it: "L'effetto più subdolo della disinformazione è la sfiducia totale: come si combatte? Con la regolamentazione, l'educazione o l'indifferenza?", es: "El efecto más insidioso de la desinformación es la desconfianza total: ¿cómo se combate? ¿Con regulación, educación o indiferencia?" },
    ],
  },
];
