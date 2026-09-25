import type { Situation } from "./types";
import { SITUATIONS_EXTRA } from "./extra/situations-extra";

/* ── Situaciones reales · vocabulario → diálogo → ejercicios → role-play ── */

export const SITUATIONS: Situation[] = [
  {
    id: "sit-aeroporto", emoji: "🛫", title: "En el aeropuerto", titleIt: "All'aeroporto", level: "A2",
    intro: "Del check-in a la puerta de embarque: el vocabulario y los diálogos para volar sin estrés.",
    vocab: [
      { it: "il volo", es: "el vuelo" }, { it: "il biglietto", es: "el billete" },
      { it: "la valigia da stiva", es: "la maleta facturada" }, { it: "il bagaglio a mano", es: "el equipaje de mano" },
      { it: "l'imbarco", es: "el embarque" }, { it: "il gate", es: "la puerta" },
      { it: "il ritardo", es: "el retraso" }, { it: "la dogana", es: "la aduana" },
    ],
    dialogue: [
      { speaker: "Agente", it: "Buongiorno! Passaporto e biglietto, per favore.", es: "¡Buenos días! Pasaporte y billete, por favor." },
      { speaker: "Viaggiatrice", it: "Eccoli. Ho una valigia da imbarcare.", es: "Aquí están. Tengo una maleta para facturar." },
      { speaker: "Agente", it: "Perfetto. Ha qualche oggetto tagliente nel bagaglio?", es: "Perfecto. ¿Tiene algún objeto cortante en el equipaje?" },
      { speaker: "Viaggiatrice", it: "No, nulla. Che ora parte il volo?", es: "No, nada. ¿A qué hora sale el vuelo?" },
      { speaker: "Agente", it: "L'imbarco è alle dieci e trenta, dal gate dodici. Buon viaggio!", es: "El embarque es a las diez y media, por la puerta doce. ¡Buen viaje!" },
    ],
    exerciseIds: ["ex-sit-aer-1", "ex-sit-aer-2", "ex-a2-023"],
    roleplay: { it: "Simuliamo il check-in all'aeroporto: tu sei l'agente, io il viaggiatore.", es: "Simulemos el check-in en el aeropuerto: tú eres el agente, yo el viajero." },
  },
  {
    id: "sit-hotel", emoji: "🏨", title: "En el hotel", titleIt: "In albergo", level: "A2",
    intro: "Reservar, hacer check-in y resolver imprevistos con elegancia.",
    vocab: [
      { it: "la prenotazione", es: "la reserva" }, { it: "la camera singola/doppia", es: "habitación individual/doble" },
      { it: "la chiave", es: "la llave" }, { it: "la colazione", es: "el desayuno" },
      { it: "il check-out", es: "la salida" }, { it: "il ricevimento", es: "la recepción" },
    ],
    dialogue: [
      { speaker: "Receptionist", it: "Buonasera, benvenuta! Ha una prenotazione?", es: "Buenas noches, ¡bienvenida! ¿Tiene una reserva?" },
      { speaker: "Ospite", it: "Sì, a nome García, per due notti.", es: "Sí, a nombre García, por dos noches." },
      { speaker: "Receptionist", it: "Ecco la chiave, camera ventidue, secondo piano. La colazione è dalle sette alle dieci.", es: "Aquí la llave, habitación veintidós, segundo piso. El desayuno es de siete a diez." },
      { speaker: "Ospite", it: "Grazie. Il wifi funziona?", es: "Gracias. ¿Funciona el wifi?" },
      { speaker: "Receptionist", it: "Certo! La password è sulla card. Buona permanenza!", es: "¡Claro! La contraseña está en la tarjeta. ¡Buena estancia!" },
    ],
    exerciseIds: ["ex-sit-hot-1", "ex-sit-hot-2", "ex-a2-016"],
    roleplay: { it: "Role-play: io faccio il check-in, tu sei il receptionist di un hotel a Roma.", es: "Role-play: yo hago el check-in, tú eres el recepcionista de un hotel en Roma." },
  },
  {
    id: "sit-ristorante", emoji: "🍝", title: "En el restaurante", titleIt: "Al ristorante", level: "A1",
    intro: "El rito sagrado de la comida italiana: pedir, disfrutar y pagar.",
    vocab: [
      { it: "il menù", es: "la carta" }, { it: "l'antipasto", es: "el entrante" },
      { it: "il primo", es: "el primer plato" }, { it: "il secondo", es: "el segundo plato" },
      { it: "il dolce", es: "el postre" }, { it: "il conto", es: "la cuenta" },
      { it: "il cameriere", es: "el camarero" }, { it: "la mancia", es: "la propina" },
    ],
    dialogue: [
      { speaker: "Cameriere", it: "Buonasera! Desidera già ordinare?", es: "¡Buenas noches! ¿Desea pedir ya?" },
      { speaker: "Cliente", it: "Sì, per primo prendo gli spaghetti alla carbonara.", es: "Sí, de primero tomo los espaguetis a la carbonara." },
      { speaker: "Cameriere", it: "Ottima scelta. E da bere?", es: "Excelente elección. ¿Y para beber?" },
      { speaker: "Cliente", it: "Un mezzo litro d'acqua frizzante, per favore.", es: "Un medio litro de agua con gas, por favor." },
      { speaker: "Cameriere", it: "Subito! Desidera anche un dolce a fine pasto?", es: "¡Enseguida! ¿Desea también un postre al final?" },
      { speaker: "Cliente", it: "Forse più tardi. Il conto, grazie!", es: "Quizá más tarde. ¡La cuenta, gracias!" },
    ],
    exerciseIds: ["ex-sit-res-1", "ex-sit-res-2"],
    roleplay: { it: "Role-play: io sono il cliente, tu il cameriere di una trattoria tipica. Portami il menù.", es: "Role-play: yo soy el cliente, tú el camarero de una trattoría típica. Tráeme la carta." },
  },
  {
    id: "sit-supermercato", emoji: "🛒", title: "En el supermercado", titleIt: "Al supermercato", level: "A1",
    intro: "Compras, secciones, cantidades y la cajera que siempre pregunta por la bolsa.",
    vocab: [
      { it: "il reparto", es: "la sección" }, { it: "i freschi", es: "los frescos" },
      { it: "la cassa", es: "la caja" }, { it: "la busta", es: "la bolsa" },
      { it: "lo scontrino", es: "el recibo" }, { it: "scaduto", es: "caducado" },
    ],
    dialogue: [
      { speaker: "Cassiera", it: "Buongiorno! Desidera la busta?", es: "¡Buenos días! ¿Desea la bolsa?" },
      { speaker: "Cliente", it: "Sì, grazie. Quanto fa in tutto?", es: "Sí, gracias. ¿Cuánto es en total?" },
      { speaker: "Cassiera", it: "Sedici euro e venti. Paga in contanti o con la carta?", es: "Dieciséis euros con veinte. ¿Paga en efectivo o con tarjeta?" },
      { speaker: "Cliente", it: "Con la carta, eccola.", es: "Con tarjeta, aquí tiene." },
      { speaker: "Cassiera", it: "Grazie! Le lascio lo scontrino nella busta. Buona giornata!", es: "¡Gracias! Le dejo el recibo en la bolsa. ¡Buen día!" },
    ],
    exerciseIds: ["ex-sit-sup-1", "ex-a2-021"],
    roleplay: { it: "Role-play: io passo alla cassa del supermercato, tu sei la cassiera.", es: "Role-play: yo paso por la caja del supermercado, tú eres la cajera." },
  },
  {
    id: "sit-medico", emoji: "🏥", title: "En el médico", titleIt: "Dal medico", level: "A2",
    intro: "Describir síntomas y entender indicaciones: el italiano que esperas no necesitar nunca.",
    vocab: [
      { it: "la ricetta", es: "la receta" }, { it: "la compressa", es: "la pastilla" },
      { it: "la febbre", es: "la fiebre" }, { it: "il dolore", es: "el dolor" },
      { it: "mal di gola / di testa", es: "dolor de garganta / de cabeza" }, { it: "la farmacia", es: "la farmacia" },
    ],
    dialogue: [
      { speaker: "Dottore", it: "Allora, mi dica: cosa sente?", es: "Bien, dígame: ¿qué siente?" },
      { speaker: "Paziente", it: "Ho mal di gola, mi fa male la testa e ho la febbre.", es: "Me duele la garganta, me duele la cabeza y tengo fiebre." },
      { speaker: "Dottore", it: "Da quanti giorni?", es: "¿Desde hace cuántos días?" },
      { speaker: "Paziente", it: "Da tre giorni, più o meno.", es: "Desde hace tres días, más o menos." },
      { speaker: "Dottore", it: "È un'influenza. Le prescrivo un antinfiammatorio: una compressa dopo i pasti. Si riposi!", es: "Es una gripe. Le receto un antiinflamatorio: una pastilla después de las comidas. ¡Descánsese!" },
    ],
    exerciseIds: ["ex-sit-med-1", "ex-asc-006"],
    roleplay: { it: "Role-play: io sono il paziente, tu il medico di base. Chiedimi i sintomi.", es: "Role-play: yo soy el paciente, tú el médico de cabecera. Pregúntame los síntomas." },
  },
  {
    id: "sit-taxi", emoji: "🚕", title: "En el taxi", titleIt: "In taxi", level: "A1",
    intro: "Dar la dirección, pedir el recibo y la charla inevitable con el taxista.",
    vocab: [
      { it: "la corsa", es: "el trayecto" }, { it: "la tariffa", es: "la tarifa" },
      { it: "il ricevimento/ricevuta", es: "el recibo" }, { it: "il traffico", es: "el tráfico" },
      { it: "l'indirizzo", es: "la dirección" }, { it: "il bagaglio", es: "el equipaje" },
    ],
    dialogue: [
      { speaker: "Tassista", it: "Buonasera! Dove andiamo?", es: "¡Buenas noches! ¿Adónde vamos?" },
      { speaker: "Passeggero", it: "In via Garibaldi 15, per favore. Sa quanto costa la corsa?", es: "A la via Garibaldi 15, por favor. ¿Sabe cuánto cuesta el trayecto?" },
      { speaker: "Tassista", it: "Con questo traffico, una ventina di euro. C'è molto traffico stasera!", es: "Con este tráfico, unos veinte euros. ¡Hay mucho tráfico esta noche!" },
      { speaker: "Passeggero", it: "Va bene. Può darmi la ricevuta, per favore?", es: "Está bien. ¿Puede darme el recibo, por favor?" },
      { speaker: "Tassista", it: "Certo! Ecco, siamo arrivati. Buona serata!", es: "¡Claro! Listo, hemos llegado. ¡Buena noche!" },
    ],
    exerciseIds: ["ex-sit-tax-1"],
    roleplay: { it: "Role-play: io salgo sul tuo taxi a Roma e ti do un indirizzo. Chiacchieriamo un po'.", es: "Role-play: subo a tu taxi en Roma y te doy una dirección. Charlamos un poco." },
  },
  {
    id: "sit-direzioni", emoji: "🗺️", title: "Pedir direcciones", titleIt: "Chiedere indicazioni", level: "A1",
    intro: "Perderse con estilo: preguntar, entender gestos y llegar a destino.",
    vocab: [
      { it: "a destra / a sinistra", es: "a la derecha / a la izquierda" },
      { it: "sempre diritto", es: "todo recto" }, { it: "il semaforo", es: "el semáforo" },
      { it: "l'incrocio", es: "el cruce" }, { it: "vicino / lontano", es: "cerca / lejos" },
      { it: "il ponte", es: "el puente" },
    ],
    dialogue: [
      { speaker: "Turista", it: "Scusi, dov'è Piazza Navona?", es: "Disculpe, ¿dónde está la Piazza Navona?" },
      { speaker: "Passante", it: "Sempre diritto, poi al semaforo giri a sinistra.", es: "Todo recto, luego en el semáforo gire a la izquierda." },
      { speaker: "Turista", it: "È lontano?", es: "¿Está lejos?" },
      { speaker: "Passante", it: "No no, dieci minuti a piedi. Attraversi il ponte e la vede subito.", es: "No no, diez minutos a pie. Cruce el puente y la verá enseguida." },
      { speaker: "Turista", it: "Perfetto, grazie mille!", es: "Perfecto, ¡muchísimas gracias!" },
    ],
    exerciseIds: ["ex-sit-dir-1", "ex-sit-dir-2"],
    roleplay: { it: "Role-play: io sono un turista perso, tu un passante gentile. Ti chiedo dove si trova il Colosseo.", es: "Role-play: soy un turista perdido, tú un peatón amable. Te pregunto dónde está el Coliseo." },
  },
  {
    id: "sit-banca", emoji: "🏦", title: "En el banco", titleIt: "In banca", level: "B1",
    intro: "Abrir cuentas, retirar y entender el vocabulario financiero esencial.",
    vocab: [
      { it: "il conto corrente", es: "la cuenta corriente" }, { it: "il prelievo", es: "el retiro" },
      { it: "il versamento", es: "el depósito" }, { it: "il tasso", es: "la tasa" },
      { it: "il bancomat", es: "el cajero" }, { it: "il bonifico", es: "la transferencia" },
    ],
    dialogue: [
      { speaker: "Impiegato", it: "Buongiorno, mi dica pure.", es: "Buenos días, dígame." },
      { speaker: "Cliente", it: "Vorrei aprire un conto corrente, per favore.", es: "Querría abrir una cuenta corriente, por favor." },
      { speaker: "Impiegato", it: "Certo. Ha con sé un documento e il codice fiscale?", es: "Claro. ¿Lleva un documento y el código fiscal?" },
      { speaker: "Cliente", it: "Sì, ecco il passaporto. Il bonifico ha delle commissioni?", es: "Sí, aquí el pasaporte. ¿La transferencia tiene comisiones?" },
      { speaker: "Impiegato", it: "Per i bonifici online nessuna commissione. Le preparo il modulo.", es: "Para las transferencias online no hay comisión. Le preparo el formulario." },
    ],
    exerciseIds: ["ex-b1-001"],
    roleplay: { it: "Role-play: io vengo in banca per aprire un conto, tu sei l'impiegato. Spiegami cosa serve.", es: "Role-play: vengo al banco a abrir una cuenta, tú eres el empleado. Explícame qué necesito." },
  },
];

/* # Paquete de expansión v1.1: +6 situaciones reales */
SITUATIONS.push(...SITUATIONS_EXTRA);
