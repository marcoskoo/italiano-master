import type { CbGrammarPack } from "../cb-rules";

/* ═══ FR A2 · Reglas + ejemplos (v9.36) — 12 unidades ════════════════ */

export const FR_CB_RULES_A2: Record<string, CbGrammarPack> = {
  "fr-cu-a2-01": {
    tables: [
      {
        title: "Passé composé con avoir",
        headers: ["Type", "Règle", "Exemple"],
        rows: [
          ["formation", "avoir + participe passé", "J'ai visité le Vieux-Lille."],
          ["-er → é", "parler → parlé", "On a déjeuné (déjeuner) dans un estaminet."],
          ["-ir → i", "finir → fini", "Tu as fini ?"],
          ["irréguliers", "voir → vu · prendre → pris · être → été", "Tu as goûté (goûter) le welsh ?"],
          ["négation", "ne + avoir + pas + participe", "Je n'ai pas compris."],
        ],
        note: "El passé composé = pretérito español: acción terminada (j'ai visité = visité). La negación envuelve al AUXILIAR, no al participio: je n'ai pas compris — el «pas» va después del avoir y antes del participio.",
      },
    ],
    moreExamples: [
      { it: "Nous avons marché au bord de la Deûle.", es: "Caminamos a orillas del Deûle." },
      { it: "Ils ont pris le métro à huit heures.", es: "Tomaron el metro a las ocho." },
      { it: "Je n'ai pas vu l'heure.", es: "No vi la hora." },
    ],
    drills: {
      transform: [
        { q: "Complète : «On ___ ___ (déjeuner) dans un estaminet.»", options: ["a déjeuné", "a déjeuner", "est déjeuné"], answer: 0, explain: "avoir (a) + participio déjeuné." },
        { q: "Irrégulier : «J'ai ___ (voir) le film.»", options: ["vu", "voir", "voi"], answer: 0, explain: "voir → vu." },
      ],
      errors: [
        { q: "Corrige : «Je n'ai compris pas.»", options: ["Je n'ai pas compris.", "Je n'ai pas comprendre.", "Je pas ai compris."], answer: 0, explain: "ne + avoir + PAS + participio." },
      ],
    },
  },
  "fr-cu-a2-02": {
    tables: [
      {
        title: "Passé composé con être · la casa de être",
        headers: ["Verbe", "Participe", "Exemple"],
        rows: [
          ["partir", "parti(e)(s)", "Nous sommes partis à 7 heures."],
          ["arriver", "arrivé(e)(s)", "Vous êtes arrivés avant l'ouverture."],
          ["aller / venir", "allé / venu", "Inès et Camille sont allées à Versailles."],
          ["sortir / entrer", "sorti / entré", "Marie est sortie à 18 heures."],
          ["naître / mourir / rester / tomber / monter / descendre", "—", "la maison d'être (14 verbes)"],
        ],
        note: "Los 14 verbos de la «maison d'être» (partir, arriver, aller, venir, sortir, entrer, naître, mourir, rester, tomber, monter, descendre, devenir, revenir) conjugan con être — Y el participio concuerda con el sujeto: Camille est alléE, elles sont alléES.",
      },
    ],
    moreExamples: [
      { it: "Elle est tombée dans l'escalier.", es: "Ella se cayó en la escalera. (caída: participio femenino)" },
      { it: "Ils sont restés à la maison.", es: "Ellos se quedaron en casa." },
      { it: "Tu es devenu un expert.", es: "Te has vuelto un experto." },
    ],
    drills: {
      transform: [
        { q: "Auxiliaire : «Nous ___ partis à 7 heures.»", options: ["sommes", "avons", "est"], answer: 0, explain: "partir → être: nous sommes partis." },
        { q: "Accord : «Inès et Camille sont ___ (aller) à Versailles.»", options: ["allées", "allé", "allés"], answer: 0, explain: "sujeto femenino plural → allées." },
      ],
      errors: [
        { q: "Corrige : «Marie est sorti à 18 heures.»", options: ["Marie est sortie à 18 heures.", "Marie a sortie à 18 heures.", "Marie est sortir à 18 heures."], answer: 0, explain: "Marie femenina → sortiE; y sortir de casa = être." },
      ],
    },
  },
  "fr-cu-a2-03": {
    tables: [
      {
        title: "L'imparfait · formación y usos",
        headers: ["Règle", "Exemple", "Español"],
        rows: [
          ["radical nous + -ais/-ais/-ait/-ions/-iez/-aient", "nous habitons → j'habitais", "vivía"],
          ["être → ét- (excepción)", "j'étais, nous étions", "era/estaba"],
          ["descripción", "J'avais un vélo rouge.", "tenía una bici roja"],
          ["costumbre", "Nous étions vingt élèves.", "éramos veinte alumnos"],
          ["escenario", "J'habitais près de la mer.", "vivía cerca del mar"],
        ],
        note: "El imparfait sale del presente de NOUS: habitons → habit- + ais. Única excepción: être → ét-. Es el imperfecto español puro: descripciones, costumbres, escenarios de fondo — todo lo que «estaba pasando».",
      },
    ],
    moreExamples: [
      { it: "Il faisait beau ce jour-là.", es: "Hacía buen tiempo ese día." },
      { it: "Tu avais les cheveux longs.", es: "Tenías el pelo largo." },
      { it: "Elle faisait ses devoirs quand je suis arrivé.", es: "Ella hacía sus deberes cuando llegué." },
    ],
    drills: {
      transform: [
        { q: "Imparfait : «Je ___ (être) petit.»", options: ["étais", "étais -ait", "étais été"], answer: 0, explain: "être → j'étais (radical ét-)." },
        { q: "Imparfait : «Nous ___ (avoir) un vélo rouge.»", options: ["avions", "avons", "avérons"], answer: 0, explain: "avoir → nous avions." },
      ],
      errors: [
        { q: "Corrige : «Quand j'étais petit, nous avons habité près de la mer.» (costumbre)", options: ["Quand j'étais petit, nous habitions près de la mer.", "Quand j'étais petit, nous habitons près de la mer.", "Quand j'ai été petit, nous avons habité la mer."], answer: 0, explain: "Costumbre del pasado → imparfait: nous habitions." },
      ],
    },
  },
  "fr-cu-a2-04": {
    tables: [
      {
        title: "Passé composé vs imparfait · anécdota y decorado",
        headers: ["", "Imparfait (decorado)", "Passé composé (anécdota)"],
        rows: [
          ["rôle", "pinta la escena", "cuenta el evento"],
          ["exemple", "Je lisais un livre. Il y avait du monde.", "Soudain, j'ai reçu un appel."],
          ["réaction", "J'étais paniqué…", "…mais j'ai agi vite."],
          ["marqueur", "tous les jours, pendant que", "soudain, à ce moment-là"],
          ["formule", "imparfait + quand/pendant que + PC", "Je lisais quand le téléphone a sonné."],
        ],
        note: "Fórmula mental: el imparfait es la película de fondo, el passé composé es la foto que interrumpe. «Leía (imparfait) cuando recibí (PC) una llamada». Igual que «leía cuando recibí» en español — misma frontera.",
      },
    ],
    moreExamples: [
      { it: "Je dormais quand tu as appelé.", es: "Dormía cuando llamaste." },
      { it: "Il pleuvait, alors j'ai pris un taxi.", es: "Llovía, así que tomé un taxi." },
      { it: "Pendant que nous attendions, le train est parti.", es: "Mientras esperábamos, el tren partió." },
    ],
    drills: {
      transform: [
        { q: "Choisis : «Je ___ (lire) quand le téléphone ___ (sonner).»", options: ["lisais / a sonné", "ai lu / sonnait", "lisais / sonnait"], answer: 0, explain: "decorado → imparfait; evento → PC." },
        { q: "Choisis : «Il ___ (être) paniqué, mais il ___ (agir) vite.»", options: ["était / a agi", "a été / agissait", "était / agissait"], answer: 0, explain: "estado de fondo vs acción puntual." },
      ],
      errors: [
        { q: "Corrige : «J'ai oublié mon sac pendant que je lisais» — «Je lisais quand j'ai oublié» : ¿correcto?", options: ["Oui : imparfait (fond) + PC (événement)", "Non : tout au passé composé", "Non : tout à l'imparfait"], answer: 0, explain: "lisais (escena) + j'ai oublié (evento): la fórmula canónica." },
      ],
    },
  },
  "fr-cu-a2-05": {
    tables: [
      {
        title: "Futur proche: aller + infinitif",
        headers: ["Personne", "Futur proche", "Exemple"],
        rows: [
          ["je", "je vais + inf.", "Je vais visiter le musée."],
          ["tu", "tu vas + inf.", "Qu'est-ce que tu vas apporter ?"],
          ["on / nous", "on va / nous allons + inf.", "On va se retrouver à 10 heures."],
          ["il/elle", "elle va + inf.", "Elle va nous attendre."],
          ["négation", "ne + vais + pas + inf.", "Je ne vais pas y aller."],
        ],
        note: "El futur proche = «voy a visitar»: aller conjugado + infinitivo SIN preposición (¡no es como el español «voy A visitar»!). Es el futuro del plan y de la intención inmediata; el futur simple queda para promesas distantes.",
      },
    ],
    moreExamples: [
      { it: "On va se promener le long du canal.", es: "Vamos a pasear a lo largo del canal." },
      { it: "Je vais t'appeler ce soir.", es: "Te voy a llamar esta noche." },
      { it: "Nous allons nous revoir bientôt.", es: "Vamos a vernos pronto. (reflexivo: nous allons nous…)" },
    ],
    drills: {
      transform: [
        { q: "Futur proche : «Je ___ visiter le musée.»", options: ["vais", "va", "vais à"], answer: 0, explain: "vais + infinitivo SIN à." },
        { q: "Réfléchi : «Nous ___ nous promener.»", options: ["allons", "allons à", "allons nous à"], answer: 0, explain: "nous allons nous promener: aller + pronombre + infinitivo." },
      ],
      errors: [
        { q: "Corrige : «Je vais à visiter le musée.»", options: ["Je vais visiter le musée.", "Je vais de visiter le musée.", "Je vais au visiter musée."], answer: 0, explain: "Sin preposición: vais visiter (¡no es español!)." },
      ],
    },
  },
  "fr-cu-a2-06": {
    tables: [
      {
        title: "Le lexique du logement · anuncios decodificados",
        headers: ["Terme", "Signification", "Español"],
        rows: [
          ["T2 / F3", "2 pièces (F3: 3 pièces + cuisine)", "dos ambientes"],
          ["meublé / non meublé", "amueblado / vacío", "amueblado"],
          ["loyer (HC/CC)", "renta (sin/con cargas)", "alquiler"],
          ["charges", "gastos de comunidad", "gastos"],
          ["caution (dépôt de garantie)", "fianza", "depósito"],
          ["colocation", "piso compartido", "piso compartido"],
        ],
        note: "Los anuncios parisinos hablan en siglas: T2 = dos ambientes, HC = hors charges (sin cargas), CC = charges comprises. «Déposer une caution» = dejar fianza. El francés de los contratos exige decodificar el diccionario inmobiliario antes que la gramática.",
      },
    ],
    moreExamples: [
      { it: "Appartement T2 meublé, 45 m², lumineux.", es: "Apartamento T2 amueblado, 45 m², luminoso." },
      { it: "Loyer 800 € HC, charges 90 €.", es: "Alquiler 800 € sin cargas, cargas 90 €." },
      { it: "Chambre en colocation près du métro.", es: "Habitación en piso compartido cerca del metro." },
    ],
    drills: {
      transform: [
        { q: "Décodage : «loyer HC» =", options: ["renta sin cargas", "renta con cargas", "renta hipotecaria"], answer: 0, explain: "HC = hors charges (cargos aparte)." },
        { q: "Décodage : «T2» =", options: ["2 piezas (dormitorio + salón)", "2 baños", "2 plantas"], answer: 0, explain: "T2 = dos ambientes: 1 dormitorio + salón." },
      ],
      errors: [
        { q: "Corrige : «El anuncio dice caution 800 €» — ¿qué es?", options: ["la fianza (depósito de garantía)", "el alquiler mensual", "la comisión inmobiliaria"], answer: 0, explain: "caution = dépôt de garantie (fianza, se recupera)." },
      ],
    },
  },
  "fr-cu-a2-07": {
    tables: [
      {
        title: "Avoir mal à + devoir + infinitif",
        headers: ["Structure", "Exemple", "Español"],
        rows: [
          ["avoir mal à + partie", "J'ai mal à la tête.", "me duele la cabeza"],
          ["à + le = au", "J'ai mal au dos.", "me duele la espalda"],
          ["à + les = aux", "Elle a mal aux dents.", "le duelen los dientes"],
          ["devoir + inf. (obligation)", "Vous devez consulter.", "debe consultar"],
          ["devoir + inf. (conseil)", "Tu dois te reposer.", "debes descansar"],
        ],
        note: "El dolor francés SE TIENE: j'ai mal À la tête (= me duele la cabeza — «avoir mal» + parte con à). Y devoir = deber + infinitivo: «vous devez consulter» = debe consultar. El médico francés receta con devoir.",
      },
    ],
    moreExamples: [
      { it: "J'ai mal à la gorge depuis deux jours.", es: "Me duele la garganta desde hace dos días." },
      { it: "Elle a mal au ventre après le repas.", es: "Le duele el estómago después de la comida." },
      { it: "Vous devez prendre les médicaments.", es: "Debe tomar los medicamentos." },
    ],
    drills: {
      transform: [
        { q: "Contracción : «J'ai mal ___ dos.» (à + le)", options: ["au", "à le", "al"], answer: 0, explain: "à + le = au: mal au dos." },
        { q: "Conseil médical : «Tu dois ___ (se reposer).»", options: ["te reposer", "reposer", "reposant"], answer: 0, explain: "devoir + infinitivo reflexivo: te reposer." },
      ],
      errors: [
        { q: "Corrige : «J'ai mal de la tête.»", options: ["J'ai mal à la tête.", "J'ai mal la tête.", "Ma tête a mal à elle."], answer: 0, explain: "avoir mal À + parte del cuerpo." },
      ],
    },
  },
  "fr-cu-a2-08": {
    tables: [
      {
        title: "L'impératif + les quantités",
        headers: ["Cible", "Forme", "Exemple"],
        rows: [
          ["tu", "radical sans -s (-er)", "Mélange ! Prépare la pâte !"],
          ["nous", "-ons", "Prenons un dessert !"],
          ["vous", "-ez", "Ajoutez le beurre !"],
          ["négatif", "ne + impératif + pas", "Ne mélange pas trop !"],
          ["quantité", "un peu de · beaucoup de · 200 g de", "un peu de sucre · beaucoup de farine"],
        ],
        note: "El imperativo -er tira la -s de tu: «Mélange» (no «mélanges»). Con nosotros: «Prenons» (vamos a…). Y las cantidades con DE siempre: un peu DE sucre, 200 g DE harina — el «de» nunca falta.",
      },
    ],
    moreExamples: [
      { it: "Préchauffez le four à 180 degrés.", es: "Precalienten el horno a 180 grados." },
      { it: "Ajoutez une pincée de sel.", es: "Añadan una pizca de sal." },
      { it: "Ne pas ouvrir la porte du four !", es: "¡No abrir la puerta del horno!" },
    ],
    drills: {
      transform: [
        { q: "Impératif (tu) : «___ (mélanger) bien !»", options: ["Mélange", "Mélanges", "Mélangez"], answer: 0, explain: "tu + -er → mélange (sin -s)." },
        { q: "Quantité : «___ ___ farine.» (un poco)", options: ["Un peu de", "Un peu", "Un peu de la"], answer: 0, explain: "un peu DE + sustantivo." },
      ],
      errors: [
        { q: "Corrige : «Mélanges bien !» (a un amigo)", options: ["Mélange bien !", "Mélanger bien !", "Mélangez bien tu !"], answer: 0, explain: "Imperativo tu de -er: sin -s final." },
      ],
    },
  },
  "fr-cu-a2-09": {
    tables: [
      {
        title: "Passé composé profesional + depuis",
        headers: ["Structure", "Exemple", "Español"],
        rows: [
          ["CV : passé composé", "J'ai géré une équipe de cinq.", "he gestionado/gestioné"],
          ["depuis + présent", "Je travaille chez X depuis 2020.", "trabajo en X desde 2020"],
          ["je fais… depuis", "Je fais ce métier depuis trois ans.", "hago este oficio desde hace 3 años"],
          ["depuis quand ?", "Depuis quand êtes-vous là ?", "¿desde cuándo está?"],
          ["action unique", "J'ai signé le contrat en mars.", "firmé en marzo"],
        ],
        note: "Trampa desde/desde hace: con «depuis» el francés usa PRESENTE: «je travaille depuis 2020» = trabajo desde 2020 (acción que continúa). El español diría «trabajo desde hace años»; el francés nunca usa el perfecto aquí: *«j'ai travaillé depuis 2020» ✗.",
      },
    ],
    moreExamples: [
      { it: "Je suis commercial depuis cinq ans.", es: "Soy comercial desde hace cinco años." },
      { it: "J'ai négocié le contrat l'année dernière.", es: "Negocié el contrato el año pasado." },
      { it: "Elle dirige le service depuis janvier.", es: "Ella dirige el servicio desde enero." },
    ],
    drills: {
      transform: [
        { q: "Choisis : «Je ___ (travailler) ici depuis 2019.»", options: ["travaille", "ai travaillé", "travaillais"], answer: 0, explain: "depuis + acción continua → PRESENTE: travaille." },
        { q: "CV (acción única) : «J'___ (gérer) une équipe.»", options: ["ai géré", "gère", "gérais"], answer: 0, explain: "logro terminado → passé composé: ai géré." },
      ],
      errors: [
        { q: "Corrige : «J'ai travaillé ici depuis 2019.» (sigues allí)", options: ["Je travaille ici depuis 2019.", "Je travaillais ici depuis 2019.", "Je vais travailler depuis 2019."], answer: 0, explain: "depuis + presente: la acción sigue viva." },
      ],
    },
  },
  "fr-cu-a2-10": {
    tables: [
      {
        title: "Futur simple · météo",
        headers: ["Type", "Règle", "Exemple"],
        rows: [
          ["-er → -erai", "parler → je parlerai", "Il fera beau demain."],
          ["-re → -rai", "prendre → je prendrai", "On prendra le parapluie."],
          ["irréguliers", "être→serai · avoir→aurai · aller→irai · faire→ferai", "Il pleuvra sur la Bretagne."],
          ["prévision", "Il fera / Il y aura", "Il y aura du vent."],
          ["✗", "futur après quand/si (tiempo)", "Quand il pleuvra ✗ → Quand il pleuvra ✓ (si+présent)"],
        ],
        note: "Raíces del futuro: irregulares de lujo — ser-ai, aur-ai, ir-ai, fer-ai, verr-ai (ver), saur-ai (savoir). «Il fera beau demain» = hará buen tiempo mañana. Y con «si» condicional: si + PRESENTE, futuro en la principal (como el español).",
      },
    ],
    moreExamples: [
      { it: "Il fera chaud dans le Sud.", es: "Hará calor en el Sur." },
      { it: "Il y aura des averses le soir.", es: "Habrá chubascos por la tarde." },
      { it: "Nous irons à la plage s'il fait beau.", es: "Iremos a la playa si hace bueno." },
    ],
    drills: {
      transform: [
        { q: "Futur de faire : «Il ___ beau demain.»", options: ["fera", "faira", "faisera"], answer: 0, explain: "faire → fera (raíz fer-)." },
        { q: "Conditionnel : «S'il ___ (pleuvoir), on restera.»", options: ["pleut", "pleuvra", "pleuvrait"], answer: 0, explain: "si + presente (jamás futuro)." },
      ],
      errors: [
        { q: "Corrige : «S'il fera beau, on ira à la plage.»", options: ["S'il fait beau, on ira à la plage.", "S'il fera beau, on va à la plage.", "S'il est beau, on ira plage."], answer: 0, explain: "si + presente; futuro solo en la principal." },
      ],
    },
  },
  "fr-cu-a2-11": {
    tables: [
      {
        title: "Pronoms COD/COI + pourriez-vous",
        headers: ["Type", "Pronoms", "Exemple"],
        rows: [
          ["COD (directo)", "me, te, le, la, nous, vous, les", "Je le vois. · Je la connais."],
          ["COI (indirecto)", "me, te, lui, nous, vous, leur", "Je lui parle. · Je leur écris."],
          ["position", "ANTES del verbo", "Je te comprends. (✗ «Je comprends te»)"],
          ["pourriez-vous + inf.", "cortesía máxima", "Pourriez-vous m'aider ?"],
          ["pouvez-vous + inf.", "cortesía estándar", "Pouvez-vous répéter ?"],
        ],
        note: "El pronombre va ANTES del verbo: «je LE vois» (lo veo) — nunca después como en italiano o español con imperativo. lui/leur = le/les (a él, a ellos): «je LUI parle» = le hablo. Y «pourriez-vous» es el condicional de cortesía del servicio al cliente.",
      },
    ],
    moreExamples: [
      { it: "Je vous écoute.", es: "Le escucho. (vous formal)" },
      { it: "Le reporter lui a posé une question.", es: "El periodista le hizo una pregunta." },
      { it: "Pourriez-vous me passer le sel ?", es: "¿Podría pasarme la sal?" },
    ],
    drills: {
      transform: [
        { q: "Remplace : «Je vois Marie.» → pronoun", options: ["Je la vois.", "Je vois la.", "La je vois."], answer: 0, explain: "COD femenino → la, antes del verbo." },
        { q: "COI : «Je parle ___ Paul.» → pronom", options: ["Je lui parle.", "Je le parle.", "Je leur parle."], answer: 0, explain: "parler À + persona → lui (a él)." },
      ],
      errors: [
        { q: "Corrige : «Je vois le.»", options: ["Je le vois.", "Le je vois.", "Je vois lui le."], answer: 0, explain: "El pronombre precede al verbo: je le vois." },
      ],
    },
  },
  "fr-cu-a2-12": {
    tables: [
      {
        title: "Récit + superlatif",
        headers: ["Structure", "Formule", "Exemple"],
        rows: [
          ["connecteurs", "d'abord… puis… ensuite… enfin", "D'abord le Louvre, puis le bistrot."],
          ["superlatif", "le/la/les + plus + adj", "C'est la plus belle ville."],
          ["superlatif (irr.)", "bon → le meilleur", "C'est le meilleur restaurant."],
          ["comparatif", "plus/moins/aussi + adj + que", "plus grand que Lyon"],
          ["bon/bien", "meilleur (adj) / mieux (adv)", "C'est mieux ! (adverbio)"],
        ],
        note: "El superlativo francés repite el artículo: «LA plus belle» (la más bella) — el español solo tiene un «la». Y la pareja bon/bien: mejor persona o cosa = meilleur; mejor manera = mieux. «C'est mieux» (está mejor) vs «c'est le meilleur» (es el mejor).",
      },
    ],
    moreExamples: [
      { it: "C'était le plus beau jour du voyage.", es: "Fue el día más bello del viaje." },
      { it: "La tour Eiffel est plus haute que je pensais.", es: "La torre Eiffel es más alta de lo que pensaba." },
      { it: "Ce restaurant est meilleur que l'autre.", es: "Este restaurante es mejor que el otro." },
    ],
    drills: {
      transform: [
        { q: "Superlatif : «C'est ___ ___ belle ville.»", options: ["la plus", "plus la", "le plus"], answer: 0, explain: "artículo + plus + adj: la plus belle." },
        { q: "meilleur ou mieux : «Cette soupe est ___.»", options: ["meilleure", "mieux", "plus bien"], answer: 0, explain: "sopa = sustantivo → meilleure (adj. de bon)." },
      ],
      errors: [
        { q: "Corrige : «C'est le plus bon restaurant.»", options: ["C'est le meilleur restaurant.", "C'est le plus meilleur restaurant.", "C'est le bien restaurant."], answer: 0, explain: "bon → meilleur (irregular en comparativo/superlativo)." },
      ],
    },
  },
};
