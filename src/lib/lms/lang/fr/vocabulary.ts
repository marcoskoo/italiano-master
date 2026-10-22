import type { VocabWord, WordCategory } from "../../types";

/* ── Vocabulaire · diccionario de aprendizaje FR (Francia) → ES ──────
   Convención de `pron` (re-escritura fonética para hispanohablantes):
   é = e cerrada · è = e abierta · ö = eu/œu (flör) · ó = eau/au (cható)
   ã / õ / ĩ = vocales nasales (bõyúr, romã, vĩ) · u = u francesa (labios
   de "u", lengua de "i") · sh = ch (sheval) · zh = j/g (fromázh)
   uá = oi (vuár) · la sílaba tónica lleva tilde · la consonante final
   suele ser muda.                                                    */

const W = (
  id: string, it: string, es: string, pron: string,
  type: VocabWord["type"], cat: WordCategory, level: VocabWord["level"],
  example: { it: string; es: string },
  extra?: Partial<Omit<VocabWord, "id" | "it" | "es" | "pron" | "type" | "cat" | "level" | "example">>
): VocabWord => ({ id, it, es, pron, type, cat, level, example, ...extra });

export const FR_VOCAB: VocabWord[] = [
  /* saluti */
  W("fr-w-bonjour", "bonjour", "buenos días / hola", "bõyúr", "espressione", "saluti", "A1", { it: "Bonjour, madame Dubois !", es: "¡Buenos días, señora Dubois!" }, { related: ["bonsoir"] }),
  W("fr-w-bonsoir", "bonsoir", "buenas tardes/noches (al llegar)", "bõsuár", "espressione", "saluti", "A1", { it: "Bonsoir, entrez !", es: "¡Buenas noches, pase!" }, { related: ["bonjour", "bonne nuit"] }),
  W("fr-w-salut", "salut", "hola / chao (informal)", "salú", "espressione", "saluti", "A1", { it: "Salut Marie, ça va ?", es: "Hola Marie, ¿qué tal?" }, { register: "informale", related: ["bonjour"] }),
  W("fr-w-au-revoir", "au revoir", "adiós", "orvuár", "espressione", "saluti", "A1", { it: "Au revoir et à bientôt !", es: "¡Adiós y hasta pronto!" }),
  W("fr-w-merci", "merci", "gracias", "mersí", "espressione", "saluti", "A1", { it: "Merci beaucoup pour le cadeau.", es: "Muchas gracias por el regalo." }, { syn: ["merci bien"] }),
  W("fr-w-sil-vous-plait", "s'il vous plaît", "por favor (formal)", "sil vu plé", "locuzione", "saluti", "A1", { it: "Un café, s'il vous plaît.", es: "Un café, por favor." }, { related: ["s'il te plaît (informal)"] }),
  W("fr-w-excusez-moi", "excusez-moi", "disculpe / perdón", "eksküzé-muá", "espressione", "saluti", "A1", { it: "Excusez-moi, où est la gare ?", es: "Disculpe, ¿dónde está la estación?" }, { related: ["pardon"] }),
  W("fr-w-enchante", "enchanté", "encantado (al conocerse)", "ãshãté", "espressione", "saluti", "A1", { it: "Enchanté, je m'appelle Lucas.", es: "Encantado, me llamo Lucas." }),

  /* famiglia */
  W("fr-w-mere", "mère", "madre", "mèr", "sostantivo", "famiglia", "A1", { it: "Ma mère cuisine très bien.", es: "Mi madre cocina muy bien." }, { gender: "f", plural: "mères", syn: ["maman"] }),
  W("fr-w-pere", "père", "padre", "pèr", "sostantivo", "famiglia", "A1", { it: "Mon père travaille à Lyon.", es: "Mi padre trabaja en Lyon." }, { gender: "m", plural: "pères", syn: ["papa"] }),
  W("fr-w-frere", "frère", "hermano", "frèr", "sostantivo", "famiglia", "A1", { it: "J'ai un frère et une sœur.", es: "Tengo un hermano y una hermana." }, { gender: "m", plural: "frères" }),
  W("fr-w-soeur", "sœur", "hermana", "sör", "sostantivo", "famiglia", "A1", { it: "Ma sœur habite à Bordeaux.", es: "Mi hermana vive en Burdeos." }, { gender: "f", plural: "sœurs" }),
  W("fr-w-fils", "fils", "hijo", "fis", "sostantivo", "famiglia", "A1", { it: "Leur fils a dix ans.", es: "Su hijo tiene diez años." }, { gender: "m", plural: "fils", note: "La s final es muda y el plural no cambia: les fils." }),
  W("fr-w-fille", "fille", "hija / niña", "fíy", "sostantivo", "famiglia", "A1", { it: "Leur fille est étudiante.", es: "Su hija es estudiante." }, { gender: "f", plural: "filles" }),
  W("fr-w-femme", "femme", "mujer / esposa", "fam", "sostantivo", "famiglia", "A1", { it: "Sa femme est médecin.", es: "Su esposa es médica." }, { gender: "f", plural: "femmes", ant: ["mari"] }),
  W("fr-w-mari", "mari", "esposo / marido", "marí", "sostantivo", "famiglia", "A2", { it: "Mon mari prépare le dîner.", es: "Mi esposo prepara la cena." }, { gender: "m", plural: "maris", ant: ["femme"] }),

  /* casa */
  W("fr-w-maison", "maison", "casa", "mèsõ", "sostantivo", "casa", "A1", { it: "Notre maison est près du parc.", es: "Nuestra casa está cerca del parque." }, { gender: "f", plural: "maisons" }),
  W("fr-w-appartement", "appartement", "apartamento", "apartmã", "sostantivo", "casa", "A1", { it: "Ils louent un appartement à Nantes.", es: "Alquilan un apartamento en Nantes." }, { gender: "m", plural: "appartements" }),
  W("fr-w-cuisine", "cuisine", "cocina", "kuizín", "sostantivo", "casa", "A1", { it: "La cuisine est petite mais lumineuse.", es: "La cocina es pequeña pero luminosa." }, { gender: "f", plural: "cuisines" }),
  W("fr-w-chambre", "chambre", "habitación / cuarto", "shãbr", "sostantivo", "casa", "A1", { it: "Ma chambre donne sur la cour.", es: "Mi habitación da al patio." }, { gender: "f", plural: "chambres" }),
  W("fr-w-porte", "porte", "puerta", "port", "sostantivo", "casa", "A1", { it: "Ferme la porte, s'il te plaît !", es: "¡Cierra la puerta, por favor!" }, { gender: "f", plural: "portes" }),
  W("fr-w-fenetre", "fenêtre", "ventana", "fenétr", "sostantivo", "casa", "A1", { it: "Ouvre la fenêtre, il fait chaud.", es: "Abre la ventana, hace calor." }, { gender: "f", plural: "fenêtres" }),
  W("fr-w-lit", "lit", "cama", "li", "sostantivo", "casa", "A1", { it: "Je vais au lit à onze heures.", es: "Me voy a la cama a las once." }, { gender: "m", plural: "lits", note: "La t final es muda: suena « li »." }),
  W("fr-w-sale", "sale", "sucio/a", "sal", "aggettivo", "casa", "A2", { it: "Cette cuisine est sale.", es: "Esta cocina está sucia." }, { ant: ["propre"], ff: true, note: "Falso amigo: sale = « sucio » ; el verbo salir es sortir." }),

  /* alimentazione */
  W("fr-w-pain", "pain", "pan", "pĩ", "sostantivo", "alimentazione", "A1", { it: "Je mange du pain le matin.", es: "Como pan por la mañana." }, { gender: "m", plural: "pains", related: ["baguette"] }),
  W("fr-w-eau", "eau", "agua", "ó", "sostantivo", "alimentazione", "A1", { it: "Un verre d'eau, s'il vous plaît.", es: "Un vaso de agua, por favor." }, { gender: "f", plural: "eaux" }),
  W("fr-w-fromage", "fromage", "queso", "fromázh", "sostantivo", "alimentazione", "A1", { it: "Le fromage français est célèbre.", es: "El queso francés es famoso." }, { gender: "m", plural: "fromages" }),
  W("fr-w-vin", "vin", "vino", "vĩ", "sostantivo", "alimentazione", "A1", { it: "Un verre de vin rouge.", es: "Una copa de vino tinto." }, { gender: "m", plural: "vins" }),
  W("fr-w-lait", "lait", "leche", "lé", "sostantivo", "alimentazione", "A1", { it: "Je bois mon café au lait.", es: "Tomo mi café con leche." }, { gender: "m", plural: "laits" }),
  W("fr-w-beurre", "beurre", "mantequilla", "bör", "sostantivo", "alimentazione", "A1", { it: "Je mange ma baguette avec du beurre.", es: "Como mi baguette con mantequilla." }, { gender: "m", plural: "beurres" }),
  W("fr-w-oeuf", "œuf", "huevo", "öf", "sostantivo", "alimentazione", "A1", { it: "Je préfère les œufs au plat.", es: "Prefiero los huevos fritos." }, { gender: "m", plural: "œufs", note: "El plural œufs se pronuncia « ö » : la f desaparece." }),
  W("fr-w-viande", "viande", "carne", "vyãd", "sostantivo", "alimentazione", "A2", { it: "Nous ne mangeons pas de viande.", es: "No comemos carne." }, { gender: "f", plural: "viandes", related: ["poisson"] }),

  /* ristorante */
  W("fr-w-restaurant", "restaurant", "restaurante", "restorã", "sostantivo", "ristorante", "A1", { it: "Ce restaurant est toujours complet.", es: "Este restaurante está siempre lleno." }, { gender: "m", plural: "restaurants" }),
  W("fr-w-menu", "menu", "menú / carta", "menú", "sostantivo", "ristorante", "A1", { it: "Le menu du jour coûte quinze euros.", es: "El menú del día cuesta quince euros." }, { gender: "m", plural: "menus", syn: ["carte"] }),
  W("fr-w-addition", "addition", "cuenta (a pagar)", "adisyõ", "sostantivo", "ristorante", "A1", { it: "L'addition, s'il vous plaît !", es: "¡La cuenta, por favor!" }, { gender: "f", plural: "additions" }),
  W("fr-w-serveur", "serveur", "camarero / mesero", "servör", "sostantivo", "ristorante", "A1", { it: "Le serveur est très sympathique.", es: "El camarero es muy simpático." }, { gender: "m", plural: "serveurs", related: ["serveuse (camarera)"] }),
  W("fr-w-dejeuner", "déjeuner", "almuerzo / comida (mediodía)", "dezhöné", "sostantivo", "ristorante", "A1", { it: "Le déjeuner est servi à midi.", es: "El almuerzo se sirve al mediodía." }, { gender: "m", plural: "déjeuners", related: ["petit-déjeuner", "dîner"] }),
  W("fr-w-commander", "commander", "pedir (en un bar/restaurante)", "komãdé", "verbo", "ristorante", "A1", { it: "Je commande une salade verte.", es: "Pido una ensalada verde." }),

  /* compras */
  W("fr-w-magasin", "magasin", "tienda", "magazẽ", "sostantivo", "compras", "A1", { it: "Le magasin ouvre à neuf heures.", es: "La tienda abre a las nueve." }, { gender: "m", plural: "magasins", syn: ["boutique"] }),
  W("fr-w-prix", "prix", "precio", "pri", "sostantivo", "compras", "A1", { it: "Quel est le prix de ce manteau ?", es: "¿Cuál es el precio de este abrigo?" }, { gender: "m", plural: "prix", note: "La x final es muda y el plural no cambia." }),
  W("fr-w-acheter", "acheter", "comprar", "ashté", "verbo", "compras", "A1", { it: "J'achète du pain à la boulangerie.", es: "Compro pan en la panadería." }, { ant: ["vendre"] }),
  W("fr-w-payer", "payer", "pagar", "péyé", "verbo", "compras", "A1", { it: "Je paie par carte.", es: "Pago con tarjeta." }),
  W("fr-w-marche", "marché", "mercado", "marshé", "sostantivo", "compras", "A1", { it: "Le marché a lieu le dimanche.", es: "El mercado tiene lugar el domingo." }, { gender: "m", plural: "marchés" }),

  /* transporte */
  W("fr-w-train", "train", "tren", "trẽ", "sostantivo", "transporte", "A1", { it: "Le train pour Lyon part à huit heures.", es: "El tren a Lyon sale a las ocho." }, { gender: "m", plural: "trains", related: ["gare"] }),
  W("fr-w-metro", "métro", "metro", "metro", "sostantivo", "transporte", "A1", { it: "Je prends le métro tous les jours.", es: "Tomo el metro todos los días." }, { gender: "m", plural: "métros" }),
  W("fr-w-billet", "billet", "billete / boleto", "biyé", "sostantivo", "transporte", "A1", { it: "Un billet pour Marseille, s'il vous plaît.", es: "Un billete para Marsella, por favor." }, { gender: "m", plural: "billets", syn: ["ticket"] }),
  W("fr-w-gare", "gare", "estación (de tren)", "gár", "sostantivo", "transporte", "A1", { it: "La gare est près de l'hôtel.", es: "La estación está cerca del hotel." }, { gender: "f", plural: "gares" }),
  W("fr-w-voiture", "voiture", "coche / carro", "vuatür", "sostantivo", "transporte", "A1", { it: "Sa voiture est rouge.", es: "Su coche es rojo." }, { gender: "f", plural: "voitures", syn: ["automobile"] }),
  W("fr-w-rue", "rue", "calle", "rú", "sostantivo", "transporte", "A1", { it: "J'habite dans cette rue.", es: "Vivo en esta calle." }, { gender: "f", plural: "rues", related: ["avenue"] }),

  /* viaggi */
  W("fr-w-voyage", "voyage", "viaje", "vuayázh", "sostantivo", "viaggi", "A2", { it: "Bon voyage et bonne année !", es: "¡Buen viaje y feliz año!" }, { gender: "m", plural: "voyages" }),
  W("fr-w-valise", "valise", "maleta", "valíz", "sostantivo", "viaggi", "A2", { it: "Ma valise est trop lourde.", es: "Mi maleta pesa demasiado." }, { gender: "f", plural: "valises", related: ["bagage"] }),
  W("fr-w-aeroport", "aéroport", "aeropuerto", "aeropór", "sostantivo", "viaggi", "A2", { it: "L'aéroport est loin du centre.", es: "El aeropuerto está lejos del centro." }, { gender: "m", plural: "aéroports" }),
  W("fr-w-vol", "vol", "vuelo", "vol", "sostantivo", "viaggi", "A2", { it: "Notre vol a une heure de retard.", es: "Nuestro vuelo tiene una hora de retraso." }, { gender: "m", plural: "vols" }),
  W("fr-w-passeport", "passeport", "pasaporte", "paspór", "sostantivo", "viaggi", "A2", { it: "Montrez-moi votre passeport, s'il vous plaît.", es: "Muéstreme su pasaporte, por favor." }, { gender: "m", plural: "passeports" }),

  /* hotel */
  W("fr-w-hotel", "hôtel", "hotel", "otel", "sostantivo", "hotel", "A2", { it: "Cet hôtel a une belle vue.", es: "Este hotel tiene una buena vista." }, { gender: "m", plural: "hôtels", note: "La h es muda: se dice « otel »." }),
  W("fr-w-reservation", "réservation", "reserva", "rezervasjõ", "sostantivo", "hotel", "A2", { it: "J'ai une réservation au nom de Garcia.", es: "Tengo una reserva a nombre de Garcia." }, { gender: "f", plural: "réservations" }),
  W("fr-w-petit-dejeuner", "petit-déjeuner", "desayuno", "petí-dezhöné", "sostantivo", "hotel", "A2", { it: "Le petit-déjeuner est servi jusqu'à dix heures.", es: "El desayuno se sirve hasta las diez." }, { gender: "m", plural: "petits-déjeuners", syn: ["le petit déj (familiar)"] }),
  W("fr-w-reception", "réception", "recepción", "resepsyõ", "sostantivo", "hotel", "A2", { it: "La réception est ouverte toute la nuit.", es: "La recepción está abierta toda la noche." }, { gender: "f", plural: "réceptions", related: ["accueil"] }),

  /* salud */
  W("fr-w-medecin", "médecin", "médico / doctor", "medsẽ", "sostantivo", "salud", "A2", { it: "Je vais chez le médecin.", es: "Voy al médico." }, { gender: "m", plural: "médecins", related: ["docteur"] }),
  W("fr-w-pharmacie", "pharmacie", "farmacia", "farmasí", "sostantivo", "salud", "A2", { it: "Il y a une pharmacie au coin.", es: "Hay una farmacia en la esquina." }, { gender: "f", plural: "pharmacies", related: ["médicament"] }),
  W("fr-w-malade", "malade", "enfermo/a", "malád", "aggettivo", "salud", "A2", { it: "L'enfant est malade aujourd'hui.", es: "El niño está enfermo hoy." }, { ant: ["en bonne santé"] }),
  W("fr-w-douleur", "douleur", "dolor", "dulör", "sostantivo", "salud", "A2", { it: "J'ai une douleur au dos.", es: "Tengo un dolor de espalda." }, { gender: "f", plural: "douleurs" }),
  W("fr-w-fievre", "fièvre", "fiebre", "fyévr", "sostantivo", "salud", "A2", { it: "Elle a de la fièvre ce soir.", es: "Tiene fiebre esta noche." }, { gender: "f", plural: "fièvres" }),

  /* lavoro */
  W("fr-w-travail", "travail", "trabajo", "traváy", "sostantivo", "lavoro", "B1", { it: "Je cherche un travail à Bordeaux.", es: "Busco un trabajo en Burdeos." }, { gender: "m", plural: "travaux", note: "Plural irregular : les travaux (los trabajos/obras).", syn: ["emploi"] }),
  W("fr-w-reunion", "réunion", "reunión", "reünyõ", "sostantivo", "lavoro", "B1", { it: "La réunion commence à dix heures.", es: "La reunión empieza a las diez." }, { gender: "f", plural: "réunions" }),
  W("fr-w-collegue", "collègue", "colega", "koleg", "sostantivo", "lavoro", "B1", { it: "Ma collègue est en congés.", es: "Mi colega está de vacaciones." }, { gender: "f", plural: "collègues", note: "Igual para masculino y femenino : un collègue, une collègue." }),
  W("fr-w-salaire", "salaire", "sueldo / salario", "saler", "sostantivo", "lavoro", "B1", { it: "Il négocie son salaire.", es: "Él negocia su sueldo." }, { gender: "m", plural: "salaires" }),
  W("fr-w-entretien", "entretien", "entrevista (de trabajo)", "ãtratyẽ", "sostantivo", "lavoro", "B1", { it: "J'ai un entretien d'embauche demain.", es: "Tengo una entrevista de trabajo mañana." }, { gender: "m", plural: "entretiens", related: ["embauche"] }),

  /* studi */
  W("fr-w-ecole", "école", "escuela", "ekol", "sostantivo", "studi", "A1", { it: "Les enfants vont à l'école à pied.", es: "Los niños van a la escuela a pie." }, { gender: "f", plural: "écoles" }),
  W("fr-w-universite", "université", "universidad", "université", "sostantivo", "studi", "A2", { it: "Elle étudie à l'université de Toulouse.", es: "Estudia en la universidad de Toulouse." }, { gender: "f", plural: "universités", syn: ["la fac (familiar)"] }),
  W("fr-w-etudiant", "étudiant", "estudiante", "etyudyã", "sostantivo", "studi", "A1", { it: "C'est un étudiant sérieux.", es: "Es un estudiante serio." }, { gender: "m", plural: "étudiants", related: ["étudiante"] }),
  W("fr-w-professeur", "professeur", "maestro / profesor", "profesör", "sostantivo", "studi", "A1", { it: "Le professeur explique la règle.", es: "El profesor explica la regla." }, { gender: "m", plural: "professeurs", syn: ["prof (familiar)"] }),
  W("fr-w-examen", "examen", "examen", "egzamẽ", "sostantivo", "studi", "A2", { it: "L'examen final a lieu en juin.", es: "El examen final tiene lugar en junio." }, { gender: "m", plural: "examens" }),
  W("fr-w-livre", "livre", "libro", "lívr", "sostantivo", "studi", "A1", { it: "Ce livre est passionnant.", es: "Este libro es apasionante." }, { gender: "m", plural: "livres", related: ["bibliothèque"] }),

  /* citta */
  W("fr-w-ville", "ville", "ciudad", "vil", "sostantivo", "citta", "A1", { it: "Paris est une belle ville.", es: "París es una ciudad bonita." }, { gender: "f", plural: "villes", related: ["village"] }),
  W("fr-w-place", "place", "plaza", "plas", "sostantivo", "citta", "A1", { it: "On se retrouve sur la place.", es: "Nos vemos en la plaza." }, { gender: "f", plural: "places" }),
  W("fr-w-musee", "musée", "museo", "müze", "sostantivo", "citta", "A1", { it: "Le musée est fermé le lundi.", es: "El museo está cerrado los lunes." }, { gender: "m", plural: "musées" }),
  W("fr-w-eglise", "église", "iglesia", "eglíz", "sostantivo", "citta", "A1", { it: "Cette église date du douzième siècle.", es: "Esta iglesia data del siglo doce." }, { gender: "f", plural: "églises" }),
  W("fr-w-pont", "pont", "puente", "põ", "sostantivo", "citta", "A2", { it: "Le pont Neuf traverse la Seine.", es: "El pont Neuf cruza el Sena." }, { gender: "m", plural: "ponts" }),
  W("fr-w-librairie", "librairie", "librería (tienda de libros)", "libréri", "sostantivo", "citta", "B1", { it: "J'achète mes romans à la librairie.", es: "Compro mis novelas en la librería." }, { gender: "f", plural: "librairies", ff: true, note: "Falso amigo : librairie = librería (tienda) ; biblioteca = bibliothèque." }),

  /* clima */
  W("fr-w-soleil", "soleil", "sol", "soléy", "sostantivo", "clima", "A1", { it: "Le soleil brille ce matin.", es: "El sol brilla esta mañana." }, { gender: "m", plural: "soleils" }),
  W("fr-w-pluie", "pluie", "lluvia", "pluí", "sostantivo", "clima", "A1", { it: "J'aime la pluie en automne.", es: "Me gusta la lluvia en otoño." }, { gender: "f", plural: "pluies", related: ["parapluie (paraguas)"] }),
  W("fr-w-neige", "neige", "nieve", "nèzh", "sostantivo", "clima", "A1", { it: "La neige couvre les toits.", es: "La nieve cubre los tejados." }, { gender: "f" }),
  W("fr-w-vent", "vent", "viento", "vã", "sostantivo", "clima", "A1", { it: "Le vent souffle sur la côte.", es: "El viento sopla en la costa." }, { gender: "m", plural: "vents" }),
  W("fr-w-chaud", "chaud", "calor / caliente", "sho", "aggettivo", "clima", "A1", { it: "Il fait chaud à Nice en été.", es: "Hace calor en Niza en verano." }, { ant: ["froid"], note: "Con el tiempo se usa avoir : j'ai chaud (tengo calor)." }),
  W("fr-w-froid", "froid", "frío / frío (sensación)", "frua", "aggettivo", "clima", "A1", { it: "Il fait froid en janvier.", es: "Hace frío en enero." }, { ant: ["chaud"] }),

  /* ropa */
  W("fr-w-chemise", "chemise", "camisa", "shemíz", "sostantivo", "ropa", "A2", { it: "Cette chemise est en coton.", es: "Esta camisa es de algodón." }, { gender: "f", plural: "chemises" }),
  W("fr-w-robe", "robe", "vestido", "rob", "sostantivo", "ropa", "A2", { it: "Elle porte une robe bleue.", es: "Ella lleva un vestido azul." }, { gender: "f", plural: "robes", related: ["jupe (falda)"] }),
  W("fr-w-chaussures", "chaussures", "zapatos", "shosúr", "sostantivo", "ropa", "A1", { it: "J'enlève mes chaussures à la maison.", es: "Me quito los zapatos en casa." }, { gender: "f", plural: "chaussures" }),
  W("fr-w-manteau", "manteau", "abrigo", "mãtó", "sostantivo", "ropa", "A2", { it: "Mets ton manteau, il fait froid !", es: "¡Ponte el abrigo, hace frío!" }, { gender: "m", plural: "manteaux", note: "Plural en -x : les manteaux." }),

  /* tecnologia */
  W("fr-w-ordinateur", "ordinateur", "computadora / ordenador", "ordinatör", "sostantivo", "tecnologia", "A2", { it: "Mon ordinateur est très lent.", es: "Mi computadora es muy lenta." }, { gender: "m", plural: "ordinateurs", related: ["clavier"] }),
  W("fr-w-telephone", "téléphone", "teléfono", "telefón", "sostantivo", "tecnologia", "A1", { it: "Mon téléphone est déchargé.", es: "Mi teléfono está descargado." }, { gender: "m", plural: "téléphones", syn: ["portable (móvil)"] }),
  W("fr-w-mot-de-passe", "mot de passe", "contraseña", "mo-de-pás", "sostantivo", "tecnologia", "A2", { it: "J'ai oublié mon mot de passe.", es: "He olvidado mi contraseña." }, { gender: "m", plural: "mots de passe", related: ["code"] }),

  /* sport */
  W("fr-w-match", "match", "partido", "mech", "sostantivo", "sport", "A2", { it: "Le match commence à vingt heures.", es: "El partido empieza a las veinte." }, { gender: "m", plural: "matchs", note: "Préstamo del inglés, pero se pronuncia « mech »." }),
  W("fr-w-equipe", "équipe", "equipo", "ekíp", "sostantivo", "sport", "A2", { it: "Notre équipe a gagné la coupe !", es: "¡Nuestro equipo ha ganado la copa!" }, { gender: "f", plural: "équipes", related: ["joueur"] }),
  W("fr-w-jouer", "jouer", "jugar / tocar (un instrumento)", "zhué", "verbo", "sport", "A1", { it: "Les enfants jouent dans le parc.", es: "Los niños juegan en el parque." }),
  W("fr-w-courir", "courir", "correr", "kurír", "verbo", "sport", "A2", { it: "Je cours le long du canal.", es: "Corro a lo largo del canal." }, { related: ["course (carrera)"] }),

  /* musica */
  W("fr-w-musique", "musique", "música", "müzik", "sostantivo", "musica", "A1", { it: "J'écoute de la musique en travaillant.", es: "Escucho música mientras trabajo." }, { gender: "f", plural: "musiques" }),
  W("fr-w-concert", "concert", "concierto", "kõsér", "sostantivo", "musica", "A2", { it: "Le concert est complet.", es: "El concierto está completo." }, { gender: "m", plural: "concerts" }),
  W("fr-w-ecouter", "écouter", "escuchar", "ekuté", "verbo", "musica", "A1", { it: "J'écoute un podcast en français.", es: "Escucho un podcast en francés." }, { related: ["entendre (oír)"] }),

  /* cinema */
  W("fr-w-film", "film", "película", "film", "sostantivo", "cinema", "A2", { it: "On regarde un film ce soir ?", es: "¿Vemos una película esta noche?" }, { gender: "m", plural: "films" }),
  W("fr-w-sous-titres", "sous-titres", "subtítulos", "su-títr", "sostantivo", "cinema", "B1", { it: "Je regarde les films avec des sous-titres.", es: "Veo las películas con subtítulos." }, { gender: "m", plural: "sous-titres", related: ["version originale"] }),

  /* relazioni */
  W("fr-w-ami", "ami", "amigo", "amí", "sostantivo", "relazioni", "A1", { it: "C'est mon ami d'enfance.", es: "Es mi amigo de la infancia." }, { gender: "m", plural: "amis", related: ["amie (amiga)"] }),
  W("fr-w-amour", "amour", "amor", "amúr", "sostantivo", "relazioni", "A1", { it: "L'amour est aveugle, dit-on.", es: "El amor es ciego, dicen." }, { gender: "m", plural: "amours", ant: ["haine"] }),
  W("fr-w-rendez-vous", "rendez-vous", "cita / encuentro", "rãdé-vú", "sostantivo", "relazioni", "A2", { it: "J'ai un rendez-vous chez le dentiste.", es: "Tengo una cita en el dentista." }, { gender: "m", plural: "rendez-vous" }),
  W("fr-w-inviter", "inviter", "invitar", "ẽvité", "verbo", "relazioni", "A2", { it: "Je t'invite à dîner samedi.", es: "Te invito a cenar el sábado." }),
  W("fr-w-embrasser", "embrasser", "besar", "ãbrasé", "verbo", "relazioni", "A2", { it: "Il embrasse sa mère sur la joue.", es: "Besa a su madre en la mejilla." }, { ff: true, note: "Falso amigo : embrasser = besar ; abrazar = serrer dans ses bras." }),
  W("fr-w-quitter", "quitter", "dejar / abandonar / irse de", "kité", "verbo", "relazioni", "A2", { it: "Je quitte le bureau à six heures.", es: "Dejo la oficina a las seis." }, { ff: true, note: "Falso amigo : quitter = dejar/irse de ; quitar = enlever." }),

  /* finanze */
  W("fr-w-argent", "argent", "dinero / plata", "arzhã", "sostantivo", "finanze", "A2", { it: "Je n'ai pas d'argent sur moi.", es: "No llevo dinero encima." }, { gender: "m", related: ["monnaie (cambio/moneda)"] }),
  W("fr-w-banque", "banque", "banco", "bãk", "sostantivo", "finanze", "A2", { it: "La banque ferme à dix-sept heures.", es: "El banco cierra a las diecisiete." }, { gender: "f", plural: "banques" }),
  W("fr-w-compte", "compte", "cuenta (bancaria)", "kõt", "sostantivo", "finanze", "B1", { it: "Je consulte mon compte en ligne.", es: "Consulto mi cuenta en línea." }, { gender: "m", plural: "comptes", related: ["compte bancaire"] }),
  W("fr-w-economiser", "économiser", "ahorrar", "ekonomizé", "verbo", "finanze", "B1", { it: "Il économise pour acheter une voiture.", es: "Ahorra para comprar un coche." }, { ant: ["dépenser"] }),

  /* professioni */
  W("fr-w-ingenieur", "ingénieur", "ingeniero", "ẽzhenyér", "sostantivo", "professioni", "A2", { it: "Mon frère est ingénieur.", es: "Mi hermano es ingeniero." }, { gender: "m", plural: "ingénieurs" }),
  W("fr-w-avocat", "avocat", "abogado", "avoká", "sostantivo", "professioni", "A2", { it: "L'avocat défend son client.", es: "El abogado defiende a su cliente." }, { gender: "m", plural: "avocats", related: ["droit (derecho)"] }),
  W("fr-w-cuisinier", "cuisinier", "cocinero / chef", "kuizinyé", "sostantivo", "professioni", "A2", { it: "Le cuisinier prépare une sauce au vin.", es: "El cocinero prepara una salsa al vino." }, { gender: "m", plural: "cuisiniers", syn: ["chef"] }),

  /* attualita */
  W("fr-w-nouvelle", "nouvelle", "noticia", "nuvèl", "sostantivo", "attualita", "A2", { it: "Cette nouvelle m'a rendu heureux.", es: "Esta noticia me hizo feliz." }, { gender: "f", plural: "nouvelles", syn: ["actualité"] }),
  W("fr-w-environnement", "environnement", "medio ambiente", "ãviroñmã", "sostantivo", "attualita", "B1", { it: "Nous devons protéger l'environnement.", es: "Debemos proteger el medio ambiente." }, { gender: "m" }),

  /* scienza */
  W("fr-w-science", "science", "ciencia", "syãs", "sostantivo", "scienza", "B2", { it: "La science explique le monde.", es: "La ciencia explica el mundo." }, { gender: "f", plural: "sciences", related: ["scientifique"] }),
  W("fr-w-recherche", "recherche", "investigación", "reshérsh", "sostantivo", "scienza", "B2", { it: "Ce laboratoire fait de la recherche sur le cancer.", es: "Este laboratorio investiga el cáncer." }, { gender: "f", plural: "recherches", related: ["laboratoire"] }),

  /* letteratura */
  W("fr-w-roman", "roman", "novela", "romã", "sostantivo", "letteratura", "B2", { it: "Ce roman se déroule à Marseille.", es: "Esta novela transcurre en Marsella." }, { gender: "m", plural: "romans", related: ["roman policier (novela negra)"] }),
  W("fr-w-ecrivain", "écrivain", "escritor", "ekrivẽ", "sostantivo", "letteratura", "B2", { it: "L'écrivain signe son premier roman.", es: "El escritor firma su primera novela." }, { gender: "m", plural: "écrivains", syn: ["auteur"] }),
  W("fr-w-oeuvre", "œuvre", "obra", "övr", "sostantivo", "letteratura", "C1", { it: "L'œuvre complète de Molière est immense.", es: "La obra completa de Molière es inmensa." }, { gender: "f", plural: "œuvres", related: ["chef-d'œuvre (obra maestra)"] }),

  /* animali */
  W("fr-w-chat", "chat", "gato", "shá", "sostantivo", "animali", "A1", { it: "Le chat dort sur le canapé.", es: "El gato duerme en el sofá." }, { gender: "m", plural: "chats", related: ["chaton (gatito)"] }),
  W("fr-w-chien", "chien", "perro", "shiẽ", "sostantivo", "animali", "A1", { it: "Mon chien s'appelle Médor.", es: "Mi perro se llama Médor." }, { gender: "m", plural: "chiens", related: ["chiot (cachorro)"] }),
  W("fr-w-cheval", "cheval", "caballo", "sheval", "sostantivo", "animali", "A1", { it: "Elle monte à cheval le week-end.", es: "Ella monta a caballo los fines de semana." }, { gender: "m", plural: "chevaux", note: "Plural irregular en -aux : les chevaux." }),
  W("fr-w-oiseau", "oiseau", "pájaro / ave", "uazó", "sostantivo", "animali", "A2", { it: "Un oiseau chante à ma fenêtre.", es: "Un pájaro canta en mi ventana." }, { gender: "m", plural: "oiseaux", related: ["nid (nido)"] }),

  /* natura */
  W("fr-w-arbre", "arbre", "árbol", "árbr", "sostantivo", "natura", "A1", { it: "Cet arbre a cent ans.", es: "Este árbol tiene cien años." }, { gender: "m", plural: "arbres", related: ["forêt (bosque)"] }),
  W("fr-w-fleur", "fleur", "flor", "flör", "sostantivo", "natura", "A1", { it: "Il m'a offert des fleurs.", es: "Me regaló flores." }, { gender: "f", plural: "fleurs" }),
  W("fr-w-mer", "mer", "mar", "mér", "sostantivo", "natura", "A1", { it: "La mer est calme ce matin.", es: "El mar está tranquilo esta mañana." }, { gender: "f", plural: "mers", related: ["océan"] }),
  W("fr-w-montagne", "montagne", "montaña", "mõtañ", "sostantivo", "natura", "A1", { it: "Ils randonnent en montagne.", es: "Hacen senderismo en la montaña." }, { gender: "f", plural: "montagnes", related: ["vallée (valle)"] }),

  /* corpo */
  W("fr-w-main", "main", "mano", "mẽ", "sostantivo", "corpo", "A1", { it: "Je lui ai serré la main.", es: "Le estreché la mano." }, { gender: "f", plural: "mains", note: "Como en español, la main es femenina : la main, les mains." }),
  W("fr-w-tete", "tête", "cabeza", "tet", "sostantivo", "corpo", "A1", { it: "J'ai mal à la tête.", es: "Me duele la cabeza." }, { gender: "f", plural: "têtes", related: ["cheveux (pelo)"] }),
  W("fr-w-coeur", "cœur", "corazón", "kör", "sostantivo", "corpo", "A2", { it: "Mon cœur bat vite.", es: "Mi corazón late rápido." }, { gender: "m", plural: "cœurs" }),
  W("fr-w-oeil", "œil", "ojo", "öy", "sostantivo", "corpo", "A2", { it: "Il a un œil bleu et un œil vert.", es: "Tiene un ojo azul y un ojo verde." }, { gender: "m", plural: "yeux", note: "Plural completamente irregular : l'œil → les yeux." }),

  /* colori */
  W("fr-w-rouge", "rouge", "rojo", "rúzh", "aggettivo", "colori", "A1", { it: "La voiture rouge est à moi.", es: "El coche rojo es mío." }),
  W("fr-w-bleu", "bleu", "azul", "blö", "aggettivo", "colori", "A1", { it: "Le ciel est bleu aujourd'hui.", es: "El cielo está azul hoy." }, { gender: "m", related: ["bleue (femenino)"] }),
  W("fr-w-blanc", "blanc", "blanco", "blã", "aggettivo", "colori", "A1", { it: "Les murs sont blancs.", es: "Las paredes son blancas." }, { note: "Femenino irregular : une chemise blanche." }),

  /* tempo */
  W("fr-w-aujourdhui", "aujourd'hui", "hoy", "ozhurdüí", "avverbio", "tempo", "A1", { it: "Aujourd'hui, je reste à la maison.", es: "Hoy me quedo en casa." }),
  W("fr-w-demain", "demain", "mañana", "demẽ", "avverbio", "tempo", "A1", { it: "À demain !", es: "¡Hasta mañana!" }, { ant: ["hier"] }),
  W("fr-w-hier", "hier", "ayer", "yér", "avverbio", "tempo", "A1", { it: "Hier, il a plu toute la journée.", es: "Ayer llovió todo el día." }, { ant: ["demain"] }),

  /* emozioni */
  W("fr-w-heureux", "heureux", "feliz / contento", "örö", "aggettivo", "emozioni", "A2", { it: "Ils sont heureux ensemble.", es: "Son felices juntos." }, { ant: ["malheureux"], note: "Femenino irregular : elle est heureuse." }),
  W("fr-w-triste", "triste", "triste", "tríst", "aggettivo", "emozioni", "A1", { it: "La fin du film est triste.", es: "El final de la película es triste." }, { ant: ["joyeux"] }),
  W("fr-w-peur", "peur", "miedo", "pör", "sostantivo", "emozioni", "A2", { it: "J'ai peur du noir.", es: "Tengo miedo a la oscuridad." }, { gender: "f", note: "Se usa con avoir : avoir peur (tener miedo)." }),

  /* svago */
  W("fr-w-loisir", "loisir", "pasatiempo / ocio", "luazír", "sostantivo", "svago", "B1", { it: "Ses loisirs : le piano et le vélo.", es: "Sus pasatiempos: el piano y la bici." }, { gender: "m", plural: "loisirs", syn: ["passe-temps"] }),
  W("fr-w-vacances", "vacances", "vacaciones", "vakãs", "sostantivo", "svago", "A2", { it: "Nous partons en vacances en août.", es: "Nos vamos de vacaciones en agosto." }, { gender: "f", plural: "vacances", note: "Casi siempre en plural : les vacances." }),
  W("fr-w-lecture", "lecture", "lectura", "lektür", "sostantivo", "svago", "B1", { it: "La lecture du soir me détend.", es: "La lectura de la noche me relaja." }, { gender: "f", plural: "lectures", note: "Lecture = lectura ; lector = lecteur." }),

  /* connettivi */
  W("fr-w-pourtant", "pourtant", "sin embargo / con todo", "purtã", "congiunzione", "connettivi", "B1", { it: "C'est simple, pourtant peu y arrivent.", es: "Es simple, sin embargo pocos lo logran." }, { syn: ["cependant"] }),
  W("fr-w-eventuellement", "éventuellement", "posiblemente / en su caso", "evãtüelmã", "avverbio", "connettivi", "B1", { it: "Éventuellement, nous irons à Lille.", es: "Posiblemente iremos a Lille." }, { ff: true, note: "Falso amigo : éventuellement = « posiblemente », no « finalmente »." }),

  /* comunicazione */
  W("fr-w-parler", "parler", "hablar", "parlé", "verbo", "comunicazione", "A1", { it: "Je parle un peu français.", es: "Hablo un poco de francés." }, { related: ["dire (decir)"] }),
  W("fr-w-demander", "demander", "preguntar / pedir", "demãdé", "verbo", "comunicazione", "A1", { it: "Je demande mon chemin à un passant.", es: "Pregunto mi camino a un transeúnte." }, { note: "Demander = preguntar/pedir ; demandar (reclamar) = réclamer." }),
  W("fr-w-repondre", "répondre", "responder / contestar", "repõdr", "verbo", "comunicazione", "A1", { it: "Réponds-moi vite !", es: "¡Respóndeme rápido!" }, { related: ["réponse (respuesta)"] }),

  /* arte */
  W("fr-w-tableau", "tableau", "cuadro / pintura", "tabló", "sostantivo", "arte", "B1", { it: "Ce tableau est de Monet.", es: "Este cuadro es de Monet." }, { gender: "m", plural: "tableaux", note: "Plural en -x : les tableaux." }),
  W("fr-w-peinture", "peinture", "pintura (técnica/obra)", "pẽtür", "sostantivo", "arte", "B1", { it: "La peinture à l'huile demande de la patience.", es: "La pintura al óleo requiere paciencia." }, { gender: "f", plural: "peintures", related: ["peintre (pintor)"] }),

  /* astratto */
  W("fr-w-idee", "idée", "idea", "idé", "sostantivo", "astratto", "A2", { it: "J'ai une idée géniale.", es: "Tengo una idea genial." }, { gender: "f", plural: "idées" }),
  W("fr-w-raison", "raison", "razón", "rezõ", "sostantivo", "astratto", "B2", { it: "Il a raison, comme souvent.", es: "Tiene razón, como de costumbre." }, { gender: "f", plural: "raisons", ant: ["tort"], note: "Tener razón = avoir raison ; no tenerla = avoir tort." }),
];

/* ── Léxico cerrado · Analizador de frases (espejo del CLOSED de IT) ──
   Artículos, preposiciones, pronombres, conjunciones, adverbios y formas
   de être / avoir / aller / faire → traducción española.                 */
export const FR_CLOSED: Record<string, string> = {
  /* artículos y contracciones */
  le: "el", la: "la", les: "los / las", un: "un", une: "una", des: "unos / unas",
  du: "del (de + le)", "de la": "de la (partitivo)", au: "al (à + le)", aux: "a los / a las",
  /* preposiciones */
  à: "a", de: "de", en: "en (lugar) / de eso (pronombre)", dans: "en / dentro de",
  sur: "sobre", sous: "bajo", avec: "con", sans: "sin", pour: "para / por", par: "por",
  chez: "en casa de",
  /* pronombres */
  je: "yo", tu: "tú", il: "él", elle: "ella", on: "uno / la gente (impersonal)",
  nous: "nosotros(as)", vous: "usted(es) / vosotros(as)", ils: "ellos", elles: "ellas",
  me: "me", te: "te", se: "se", lui: "le (a él / a ella)", leur: "les (a ellos)", ça: "eso",
  y: "allí (pronombre adverbial)",
  /* conjunciones */
  et: "y", ou: "o", mais: "pero", que: "que", qui: "que (sujeto) / quien",
  si: "si (condición)", quand: "cuando", comme: "como", "parce que": "porque",
  /* adverbios y negación */
  ne: "no (inicia la negación)", pas: "no (cierra la negación)", plus: "más / ya no",
  très: "muy", trop: "demasiado", bien: "bien", aussi: "también / tan",
  encore: "todavía / otra vez", déjà: "ya", toujours: "siempre / todavía",
  jamais: "nunca / jamás", ici: "aquí", maintenant: "ahora",
  /* interrogativos */
  où: "dónde", comment: "cómo", combien: "cuánto", pourquoi: "por qué",
  quel: "qué / cuál (masculino)", quelle: "qué / cuál (femenino)",
  "est-ce que": "¿acaso…? (partícula de pregunta)",
  /* être */
  suis: "soy / estoy (être)", est: "es (être)", sont: "son (être)", était: "era (être)",
  "je suis": "yo soy / estoy", "c'est": "es / este es",
  /* avoir */
  ai: "he / tengo (avoir)", as: "has / tienes (avoir)", a: "ha / tiene (avoir)",
  ont: "han / tienen (avoir)", "j'ai": "yo tengo / he", "tu as": "tú tienes / has",
  /* aller */
  vais: "voy (aller)", va: "va (aller)", vont: "van (aller)",
  "je vais": "yo voy", "il va": "él va",
  /* faire */
  fait: "hace (faire)", font: "hacen (faire)", "il fait": "hace (tiempo)",
  /* otras piezas frecuentes */
  "il y a": "hay", oui: "sí", non: "no",
};
