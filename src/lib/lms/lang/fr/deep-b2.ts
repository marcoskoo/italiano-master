import type { CbGrammarDeep } from "../../extra/grammar-deep";

/* ═══ FR B2 · Grammar deep — 12 unidades (français de France) ═════════
   Explicación amplia de la gramática de cada unidad B2, con las trampas
   específicas del hispanohablante (subjuntivo tras bien que, si +
   pluscuamperfecto, ne…que, pasiva con agente, refutación elegante).
   Campos `.it` = francés (lengua de estudio), `.es` = español.
   Secciones: Comment ça marche / Quand l'utiliser / Attention ! (pour
   hispanophones) / Dans la vraie conversation. Tipografía francesa:
   espacio antes de ? ! : ;, guillemets « », reloj de 24 h, euros. */

export const FR_DEEP_B2: Record<string, CbGrammarDeep> = {
  "fr-cu-b2-01": {
    sezioni: [
      { t: "Comment ça marche", body: "La argumentación francesa se apoya en cuatro familias de articuladores que ordenan el discurso como los peldaños de una escalera: para el orden, «tout d'abord… ensuite… enfin» (o «premièrement, deuxièmement»); para la adición, «en outre» suma un argumento del mismo hilo y «par ailleurs» abre un ángulo nuevo del debate; para la contraposición, «en revanche» opone dos cosas distintas, mientras que «néanmoins» y «toutefois» introducen un matiz que limita lo dicho; para cerrar, «en somme» o «en définitive» recogen el balance. Todos van al inicio de la frase, seguidos de coma, y «quant à» sirve para cambiar de asunto o de persona: «quant à moi, je reste prudent»." },
      { t: "Quand l'utiliser", body: "En la mesa redonda, la tribuna y el ensayo: «tout d'abord» abre con la primera razón, «en outre» añade la segunda del mismo hilo, «par ailleurs» introduce lo que nadie ha pensado aún (el coste, la financiación) y «en somme» precede a la frase final que el público recordará. Ojo al registro: «en outre» y «néanmoins» son más bien escritos y cultos; en la conversación espontánea los franceses prefieren «en plus», «d'ailleurs» o «du coup». «En revanche» marca el trueque entre dos casos («les cinémas ferment ; en revanche, les librairies résistent»), mientras que «au contraire» niega lo que se acaba de sugerir." },
      { t: "Attention ! (pour hispanophones)", body: "1) «En suma» no se traduce jamás por «dans la somme»: la suma aritmética no resume nada; se dice «en somme» o «en définitive». 2) No confundas «d'ailleurs» (refuerza lo ya dicho: 'de hecho, por cierto') con «par ailleurs» (abre algo nuevo: 'por otra parte'); y el «por otra parte» español no es «de l'autre part», expresión que no existe. 3) «En cambio» se reparte entre «en revanche» (intercambio entre dos cosas distintas) y «au contraire» (niega lo contrario): «il n'est pas timide ; au contraire, il parle beaucoup». Y cuida la puntuación: el articulador abre la frase y se separa del resto con coma." },
      { t: "Dans la vraie conversation", body: "En la mesa redonda parisina, quien interviene sin articuladores se pierde; quien los encadena gana la sala: «Tout d'abord, je remercie les organisateurs. Ensuite, un chiffre : trois Français sur quatre…». Cuando alguien objeta, la réplica elegante concede y contrasta: «Certes, le coût serait élevé ; toutefois, aucune réforme n'est gratuite», y antes de ceder la palabra se cierra: «En somme, je propose qu'on expérimente». Para entrar sin cortar a nadie: «Permettez-moi d'intervenir : par ailleurs, on oublie un point essentiel…». Y para reubicar a cada cual: «Quant à Madame Roussel, elle nous dira son avis»." },
    ],
    esempi: [
      { it: "Tout d'abord, le projet est ambitieux ; ensuite, il est réaliste ; enfin, il est déjà financé.", es: "En primer lugar, el proyecto es ambicioso; después, es realista; por último, ya está financiado." },
      { it: "En outre, les bibliothèques de quartier accueillent chaque année davantage de lecteurs.", es: "Además, las bibliotecas de barrio acogen cada año a más lectores." },
      { it: "Par ailleurs, personne n'a encore évoqué la question du financement.", es: "Por otra parte, nadie ha mencionado aún la cuestión de la financiación." },
      { it: "Le débat était vif ; néanmoins, chacun a gardé son calme jusqu'au bout.", es: "El debate fue intenso; no obstante, cada uno mantuvo la calma hasta el final." },
      { it: "En somme, la question n'est pas de gagner le débat, mais d'être entendu.", es: "En suma, la cuestión no es ganar el debate, sino ser escuchado." },
    ],
    usi: [
      { q: "Quieres introducir en el debate un argumento nuevo que nadie ha tocado (el coste). ¿Cuál encaja?", options: ["En somme, le coût serait élevé.", "Par ailleurs, personne n'a évoqué le coût.", "Tout d'abord, le coût serait élevé."], answer: 1, explain: "«Par ailleurs» abre un ángulo nuevo; «en somme» resume antes de cerrar y «tout d'abord» abre la serie de argumentos." },
      { q: "«Los cines cierran; en cambio, las librerías resisten» (dos realidades distintas). ¿Cuál encaja?", options: ["Les cinémas ferment ; au contraire, les librairies résistent.", "Les cinémas ferment ; en revanche, les librairies résistent.", "Les cinémas ferment ; en outre, les librairies résistent."], answer: 1, explain: "«En revanche» intercambia dos casos distintos; «au contraire» niega lo anterior y «en outre» añade en el mismo sentido." },
    ],
  },

  "fr-cu-b2-02": {
    sezioni: [
      { t: "Comment ça marche", body: "El registro cuidado condensa acciones en sustantivos (nominalización): «j'ai collecté des témoignages» → «la collecte des témoignages», «les habitants se souviennent» → «la mémoire des habitants», «vous avez été patient» → «votre patience». A esa altura de registro pertenece el subjuntivo tras las locuciones: «bien que» (aunque), «pour que / afin que» (para que), «avant que» (antes de que, a menudo con un «ne» que no niega: «avant qu'il ne parte»), «jusqu'à ce que» (hasta que), «sans que» (sin que) y «pourvu que» (con tal de que): «bien que le prix soit prestigieux», «afin que chacun comprenne», «pourvu que la mémoire dure»." },
      { t: "Quand l'utiliser", body: "En la soutenance, el discurso de agradecimiento y el acta solemne: se agradece con nominalizaciones («l'attention que vous avez portée à mon travail»), se justifica con «afin que» y se concede con «bien que». «Afin que» es la variante más formal de «pour que»; «jusqu'à ce que» rige subjuntivo siempre (a diferencia del español «hasta que», que alterna según el matiz). En la conversación, el subjuntivo de «il faut que» es la puerta de entrada a todo este sistema: «il faut que je vous dise», «il faut que la collecte soit terminée avant l'automne»." },
      { t: "Attention ! (pour hispanophones)", body: "1) La trampa número uno del hispanohablante: «aunque» admite indicativo ante hechos reales («aunque llueve, salgo»), pero «bien que» SIEMPRE exige subjuntivo: «bien qu'il pleuve, je sors». Calcar el indicativo español delata al instante. 2) «Malgré» rige sustantivo («malgré la pluie»); para la oración completa hace falta «bien que» : «malgré qu'il pleuve» es incorrecto y solo sobrevive en la fórmula fijada «malgré que j'en aie». 3) El «ne» de «avant qu'il ne parte» no niega nada (ne explétivo), y ojo a los subjuntivos irregulares: «bien qu'il ait raison», «afin qu'ils soient prévenus», «pourvu qu'elle fasse l'effort»." },
      { t: "Dans la vraie conversation", body: "En la ceremonia, el discurso se sostiene sobre estas muletas: «C'est avec une profonde émotion que je reçois ce prix», «je tiens à remercier le jury pour son attention», «afin que ces voix ne tombent pas dans l'oubli». El subjuntivo optativo sobrevive en las fórmulas solemnes: «Que le lauréat veuille bien monter sur scène !», «Qu'ils n'aient pas peur de la lenteur !». Y al responder a las preguntas del jurado, la concesión elegante brilla: «Bien que les archives fussent riches, les voix des habitants restaient absentes» — presente o imperfecto de subjuntivo, nunca indicativo tras estas locuciones." },
    ],
    esempi: [
      { it: "Bien que le budget soit limité, l'exposition vaut vraiment le détour.", es: "Aunque el presupuesto sea limitado, la exposición merece de verdad la visita." },
      { it: "J'ai numérisé les archives afin que les chercheurs puissent y accéder librement.", es: "He digitalizado los archivos para que los investigadores puedan acceder a ellos libremente." },
      { it: "Éteignez vos téléphones avant que la soutenance ne commence.", es: "Apaguen los teléfonos antes de que empiece la defensa." },
      { it: "Votre patience a fait toute la différence : sans elle, rien n'aurait été possible.", es: "Su paciencia marcó toda la diferencia: sin ella, nada habría sido posible." },
      { it: "Je resterai jusqu'à ce que la dernière question soit posée.", es: "Me quedaré hasta que se formule la última pregunta." },
    ],
    usi: [
      { q: "«Aunque el premio sea prestigioso, me quedo humilde.» ¿Cuál encaja?", options: ["Bien que le prix est prestigieux, je reste humble.", "Bien que le prix soit prestigieux, je reste humble.", "Malgré que le prix soit prestigieux, je reste humble."], answer: 1, explain: "«Bien que» exige subjuntivo («soit»); el indicativo «est» es el calco español y «malgré que» con oración es incorrecto." },
      { q: "Quieres nominalizar «los habitantes recuerdan» en un acta solemne. ¿Cuál encaja?", options: ["la mémoire des habitants", "les habitants se souvenant", "le souvenir que les habitants font"], answer: 0, explain: "La nominalización canónica es «la mémoire des habitants»; el participio de presente y la perífrasis no elevan el registro del acta." },
    ],
  },

  "fr-cu-b2-03": {
    sezioni: [
      { t: "Comment ça marche", body: "La hipótesis irreal sobre el pasado se construye con «si» + plus-que-parfait de indicativo en la subordinada y condicional compuesto en la principal: «si j'avais lu, je n'aurais pas signé». El condicional compuesto se arma con el condicional de «avoir/être» + participio: «j'aurais négocié», «je me serais trompé», «nous aurions vu». Es el tercer peldaño del sistema: presente/futuro («si tu lis, tu sauras»), imperfecto/condicional presente («si j'étais toi, je prendrais»), pluscuamperfecto/condicional compuesto («si j'avais su, j'aurais agi»). La condición ya es imposible: la frase mira el pasado para lamentarlo o reprocharlo." },
      { t: "Quand l'utiliser", body: "Para el remordimiento («si j'avais su, j'aurais agi autrement»), el reproche («si vous m'aviez prévenu, nous n'en serions pas là») y la historia contrafactual («si l'annonce avait été claire, le malentendu n'aurait jamais eu lieu»). Cuando la consecuencia sigue vigente hoy, la principal puede bajar a condicional presente: «si j'avais appris le violon, je serais musicienne» — el estudio pertenece al pasado, la profesión al presente. Y para reabrir el balance de cualquier decisión: «si c'était à refaire, je referais le même choix»." },
      { t: "Attention ! (pour hispanophones)", body: "1) Jamás condicional tras «si»: «si j'aurais su» es EL error que delata al extranjero (el gemelo del «si habría sabido» español coloquial); tras «si» van tiempos de indicativo. 2) El español usa el subjuntivo pluscuamperfecto («si hubiera/hubiese leído»); el francés usa el indicativo pluscuamperfecto («si j'avais lu»): no busques subjuntivo donde no lo hay. 3) No mezcles sistemas: «si j'avais lu, je ne signe pas» cojea; el pasado irreal pide condicional compuesto, y solo la mezcla «pasado irreal → consecuencia actual vigente» admite el condicional presente en la principal." },
      { t: "Dans la vraie conversation", body: "El malentendido del contrato revive en tres tiempos: «Je l'ai survolé, c'est vrai. Si j'avais lu la première page, j'aurais vu le mot “déterminée”. Si tu me l'avais dit, Thomas !». El amigo responde con la misma moneda: «Si j'étais passé plus tôt, je te l'aurais signalé». Y la responsable de personal suaviza el cierre: «À l'avenir, lisez tout avant de signer : la parole s'envole, mais l'écrit reste». La fórmula «vous voyez» y el suspiro hacen el resto: en francés, el reproche contrafactual se dice despacio, con la voz que baja." },
    ],
    esempi: [
      { it: "Si tu m'avais prévenu, je serais venu avec une copie de l'annonce.", es: "Si me hubieras avisado, habría venido con una copia del anuncio." },
      { it: "S'ils avaient lu les petites lignes, ils n'auraient jamais signé ce bail.", es: "Si hubieran leído la letra pequeña, nunca habrían firmado ese contrato de alquiler." },
      { it: "Si la réunion avait commencé à l'heure, nous aurions eu le temps de tout discuter.", es: "Si la reunión hubiera empezado a tiempo, habríamos tenido tiempo de discutirlo todo." },
      { it: "Si j'avais appris l'allemand plus jeune, je serais traductrice aujourd'hui.", es: "Si hubiera aprendido alemán más joven, hoy sería traductora." },
      { it: "Elle n'aurait jamais accepté ce poste si elle avait connu les horaires.", es: "Nunca habría aceptado ese puesto si hubiera conocido los horarios." },
    ],
    usi: [
      { q: "«Si hubiera leído las cláusulas, habría negociado la prima.» ¿Cuál encaja?", options: ["Si j'aurais lu les clauses, j'aurais négocié la prime.", "Si j'avais lu les clauses, j'aurais négocié la prime.", "Si j'avais lu les clauses, je négociais la prime."], answer: 1, explain: "«Si» + pluscuamperfecto de indicativo y principal en condicional compuesto; el condicional tras «si» es el error clásico y el imperfecto no expresa la consecuencia irreal." },
      { q: "«Si yo fuera tú, cogería el contrato» (hipótesis sobre el presente). ¿Cuál encaja?", options: ["Si j'étais toi, je prendrais le contrat.", "Si j'avais été toi, j'aurais pris le contrat.", "Si je serais toi, je prendrais le contrat."], answer: 0, explain: "Hipótesis irreal del presente: «si» + imparfait → conditionnel présent; la segunda opción desplaza la hipótesis al pasado." },
    ],
  },

  "fr-cu-b2-04": {
    sezioni: [
      { t: "Comment ça marche", body: "Cuando el verbo introductor está en pasado, los tiempos retroceden un escalón: présent → imparfait («elle écrit» → «elle a dit qu'elle écrivait»), passé composé → plus-que-parfait («elle a terminé» → «elle a dit qu'elle avait terminé»), futur → conditionnel présent («elle écrira» → «elle a dit qu'elle écrirait»); el imparfait, el pluscuamperfecto y el condicional se quedan como están. Las preguntas totales pasan a «si» («je lui ai demandé si elle venait») y las parciales conservan su palabra interrogativa: «je lui ai demandé d'où lui venait cette histoire». El imperativo ajeno se convierte en «de + infinitif»: «elle m'a dit d'attendre»." },
      { t: "Quand l'utiliser", body: "En la entrevista y el reportaje: se cita entre guillemets la frase que debe quedar literal («On ne répare pas le passé», m'a-t-elle confié) y se resume el resto en indirecto con verbos introductorios variados: confier, souligner, révéler, ajouter, préciser. Los marcadores también se desplazan: aujourd'hui → ce jour-là, demain → le lendemain, hier → la veille, ici → là. Y para citar sin verbo introductorio: «selon elle», «d'après l'éditeur» — la prensa los usa a diario para atribuir sin comprometerse." },
      { t: "Attention ! (pour hispanophones)", body: "1) El español coloquial deja el presente tras un pasado («dijo que viene mañana»); el francés exige la concordancia: «elle a dit qu'elle venait le lendemain». 2) No dejes la inversión dentro de la interrogativa indirecta: «je lui ai demandé d'où venait-elle» delata al novato; el sujeto va delante: «d'où elle venait». 3) Al citar con relativos, «dont» absorbe «de + qui»: «le livre dont tout le monde parle»; con otras preposiciones entran los relativos compuestos, que concuerdan y se contraen: «l'auteur avec lequel elle travaille», «le projet auquel je pense», «la table sur laquelle repose le manuscrit», «les lecteurs auxquels il répond»." },
      { t: "Dans la vraie conversation", body: "El becario vuelve a la redacción con material publicable: «Elle m'a confié que son grand-père réparait des montres et que chaque montre gardait la mémoire de son propriétaire. Elle a ajouté que la rentrée serait un marathon, mais qu'elle avait déjà pris de l'avance». La jefa lo corrige sin piedad: «Tu es sûr ? Relis tes notes : elle a dit “qu'elle écrirait”, pas “qu'elle écrit”». En prensa, una concordancia floja cuesta una fe de erratas: el estilo indirecto es oficio, no adorno." },
    ],
    esempi: [
      { it: "Elle a expliqué qu'elle avait écrit la première version en trois mois.", es: "Ella explicó que había escrito la primera versión en tres meses." },
      { it: "L'éditeur a annoncé que le roman sortirait le jeudi suivant.", es: "La editorial anunció que la novela saldría el jueves siguiente." },
      { it: "Je lui ai demandé si elle avait déjà choisi le titre définitif.", es: "Le pregunté si ya había elegido el título definitivo." },
      { it: "Il m'a confié que ce serait le livre dont tout le monde parlerait.", es: "Me confió que sería el libro del que todo el mundo hablaría." },
      { it: "Son agent lui a demandé de répondre aux journalistes avec ironie.", es: "Su agente le pidió que respondiera a los periodistas con ironía." },
    ],
    usi: [
      { q: "«El editor me dijo: el manuscrito está terminado» (reportado ayer). ¿Cuál encaja?", options: ["L'éditeur m'a dit que le manuscrit est terminé.", "L'éditeur m'a dit que le manuscrit était terminé.", "L'éditeur m'a dit que le manuscrit serait terminé."], answer: 1, explain: "Tras introductor en pasado, el présent retrocede a imparfait; el condicional correspondería a un futuro originario, no a un presente." },
      { q: "Quieres preguntar en indirecto «¿Vendrá a la feria ?». ¿Cuál encaja?", options: ["Je lui ai demandé si elle viendrait à la foire.", "Je lui ai demandé viendrait-elle à la foire.", "Je lui ai demandé qu'elle viendrait à la foire."], answer: 0, explain: "La pregunta total pasa a «si» sin inversión y el futuro se vuelve condicional; «que» no introduce interrogativa indirecta." },
    ],
  },

  "fr-cu-b2-05": {
    sezioni: [
      { t: "Comment ça marche", body: "La concesión admite una parte del argumento adverso para salir reforzada de ella. Con oración: «bien que» + subjuntivo («bien que cette critique soit banale») y «quoique», su gemela literaria. Con sustantivo: «malgré» («malgré leur promesse d'ouverture») y «en dépit de» («en dépit des critiques»). Retórica pura: «certes… mais…» reparte la concesión y la respuesta en dos semir frases («certes, les réseaux donnent une voix, mais ils enferment»). Y para hechos reales o probables, «même si» + indicativo: «même s'il pleut, la manifestation aura lieu»." },
      { t: "Quand l'utiliser", body: "Es la respiración del ensayo à la française (thèse–antithèse–synthèse) y de la tribuna: una concesión bien colocada por párrafo vale más que tres. «Quoique» eleva el tono hasta lo literario; «malgré» es neutro y está en todas partes; «en dépit de» es el más formal de los dos. El par «certes… cependant / toutefois» funciona igual en la oralidad del taller: se concede, se contrasta, se ataca — en ese orden, y sin añadir disculpas que debiliten la tesis." },
      { t: "Attention ! (pour hispanophones)", body: "1) Otra vez la trampa reina: «aunque llueve» (indicativo español, hecho real) no se calca jamás: «bien qu'il pleuve», con subjuntivo SIEMPRE; para el hecho real con indicativo, el francés dispone de «même s'il pleut». 2) «Malgré que» con oración es incorrecto (solo sobrevive en «malgré que j'en aie», fórmula fijada); si necesitas oración, cambia a «bien que». 3) «Pourtant» y «toutefois» no introducen concesión: contrastan dos enunciados ya emitidos; la concesión la abren «bien que», «certes» o «j'en conviens» — quien confunde los dos gestos concede sin darse cuenta y refuta sin haber concedido nada." },
      { t: "Dans la vraie conversation", body: "En el taller de Lille, los borradores se corrigen en voz alta: «Tu écris “malgré que les réseaux sont utiles” — non : “bien qu'ils soient utiles”, ou “malgré leur utilité”». El profesor resume el arte del gesto: «La concession n'affaiblit pas ta thèse : elle la rend crédible». Y en el debate de sobremesa, la pareja mágica funciona sin perder un segundo: «Certes, c'est banal. Toutefois, c'est vrai» — conceder dos palabras antes de golpear es la firma del ensayista a la francesa." },
    ],
    esempi: [
      { it: "Malgré les critiques, la pièce a attiré un public nombreux.", es: "A pesar de las críticas, la obra atrajo a un público numeroso." },
      { it: "Quoique la route fût longue, aucun participant n'a abandonné.", es: "Por más que el camino fuera largo, ningún participante abandonó." },
      { it: "Certes, l'application est pratique, mais elle dévore notre attention.", es: "Ciertamente, la aplicación es práctica, pero devora nuestra atención." },
      { it: "Même si le débat s'éternise, je resterai jusqu'à la dernière minute.", es: "Aunque el debate se alargue, me quedaré hasta el último minuto." },
      { it: "En dépit de leur succès, les librairies indépendantes restent fragiles.", es: "A pesar de su éxito, las librerías independientes siguen siendo frágiles." },
    ],
    usi: [
      { q: "«A pesar de la lluvia, la feria del libro se celebró» (con sustantivo). ¿Cuál encaja?", options: ["Bien que la pluie, la foire du livre a eu lieu.", "Malgré la pluie, la foire du livre a eu lieu.", "Quoique la pluie, la foire du livre a eu lieu."], answer: 1, explain: "«Malgré» rige sustantivo («la pluie»); «bien que» y «quoique» exigen oración con subjuntivo, no un sustantivo suelto." },
      { q: "«Aunque la crítica es banal, sigue siendo verdadera.» ¿Cuál encaja?", options: ["Bien que cette critique soit banale, elle reste vraie.", "Bien que cette critique est banale, elle reste vraie.", "Malgré que cette critique est banale, elle reste vraie."], answer: 0, explain: "«Bien que» + subjuntivo («soit»); el indicativo es el calco del español con hecho real y «malgré que» no existe en francés correcto." },
    ],
  },

  "fr-cu-b2-06": {
    sezioni: [
      { t: "Comment ça marche", body: "El «second degré» dice lo contrario (o casi) de lo que piensa, y lo delatan las señales: adverbios absolutos inesperados («absolument passionnant»), ritmo lento y plano, «disons», «il faut le reconnaître» y las comillas orales («des sandwiches “raffinés”»). El condicional de atenuación convierte la crítica en hipótesis cortés: «ça pourrait être amélioré», «je me demanderais s'il n'y a pas une erreur», «voudriez-vous relire ce point ?». Los eufemismos de empresa hacen el mismo trabajo desde abajo: «un souci» (un problema serio), «une réorganisation» (despidos), «un plan de sauvegarde de l'emploi» (despidos también)." },
      { t: "Quand l'utiliser", body: "Para criticar sin romper la relación: en la oficina, la atenuación condicional es la moneda legal («votre présentation pourrait gagner à être plus courte»); en la sobremesa, la antífrasis divierte a quienes comparten las claves. El «understatement» cotidiano funciona igual: un «c'est pas mal» entusiasta equivale a un «está muy bien», y un «pas désagréable» puede ser el mayor elogio de la velada. Con la jerarquía, la fórmula de cortesía negativa reina: «je crains que ce ne soit pas possible ce semaine»." },
      { t: "Attention ! (pour hispanophones)", body: "1) Sin el descenso tonal final y el alargamiento, «passionnant» se tomará literal: la ironía francesa vive en la melodía, y por escrito solo sobreviven las comillas y «disons». 2) No traduzcas el «yo diría que» español por futuro: «je dirais que» es condicional de atenuación, y «je me demanderais si» no pregunta: sugiere. 3) Con un desconocido o ante la jerarquía, sé literal: el second degré une a los que se entienden y confunde a los que no — el elogio irónico dicho al jefe equivocado puede costar la semana." },
      { t: "Dans la vraie conversation", body: "En el afterwork, el equipo desactiva el seminario a golpe de comillas: «Une journée “formationnelle”, vraiment. Le buffet “raffiné” compensait, il faut le reconnaître». La réplica fina llega con condicional: «Je me demanderais s'il ne fallait pas raccourcir les diapositives, disons». Y el veterano pone la ley de la casa: «L'ironie, c'est comme le piment : une pincée relève, trop, ça brûle». Al final, la salida elegante: chacun paie sa tournée, y nadie ha dicho una sola palabra dura en toda la velada." },
    ],
    esempi: [
      { it: "Votre rapport gagnerait peut-être à être plus concis.", es: "Su informe quizá ganaría siendo más conciso." },
      { it: "Je me demanderais s'il n'y a pas une petite erreur dans ces chiffres.", es: "Me preguntaría si no hay un pequeño error en estas cifras." },
      { it: "La conférence était “passionnante”, disons.", es: "La conferencia fue “apasionante”, digamos." },
      { it: "Nous avons rencontré un petit souci technique, rien d'inquiétant.", es: "Hemos tenido un pequeño problema técnico, nada preocupante." },
      { it: "C'est pas mal du tout, ce premier roman !", es: "¡No está nada mal, esa primera novela!" },
    ],
    usi: [
      { q: "Tu jefe quiere criticar con cortesía una presentación demasiado larga. ¿Cuál encaja?", options: ["Votre présentation est interminable.", "Votre présentation pourrait gagner à être plus courte.", "Raccourcissez votre présentation !"], answer: 1, explain: "El condicional de atenuación («pourrait gagner à») suaviza la crítica; las otras dos son tan directas que rompen el código de oficina." },
      { q: "«El buffet era… generoso, digamos» (ironía: era insípido). ¿Cuál encaja?", options: ["Le buffet était “copieux”, disons.", "Le buffet était copieux, vraiment !", "Le buffet était très généreux, bravo !"], answer: 0, explain: "Las comillas irónicas y «disons» activan el second degré; sin esas señales, la frase se lee como un elogio literal." },
    ],
  },

  "fr-cu-b2-07": {
    sezioni: [
      { t: "Comment ça marche", body: "La restricción fina encuadra el elemento restringido: «ne… que» rodea el verbo y «que» se coloca justo delante de lo que se reduce («il ne lit que le soir», «je n'ai que deux minutes»). No es negación: «il n'y a que trois solutions» propone tres. «Seulement» es el equivalente neutro, libre de posición; «du moins» rectifica o limita lo ya dicho («les librairies se font rares, du moins dans les quartiers chers»); «à peine… que» encadena dos acciones sin respiro y, en registro cuidado, exige inversión: «à peine la librairie a-t-elle ouvert que les clients entrent». Nota de voz media: «se faire rare» — el pronominal convierte el adjetivo en proceso («les livres se font rares»)." },
      { t: "Quand l'utiliser", body: "En el titular y en la corrección de pruebas: «ne… que» gana en precisión y se prefiere en títulos («il n'y a plus que trois cafés»); «seulement» vive en el cuerpo del texto y en el habla. La rectificación con «du moins» salva las afirmaciones demasiado amplias, y el dato exacto sustituye al vago: «trois habitants sur quatre» en lugar de «beaucoup de gens», porque en prensa el matiz es una forma de honestidad — o se precisa, o se calla." },
      { t: "Attention ! (pour hispanophones)", body: "1) La trampa clásica: leer «ne… que» como negación («je n'ai que deux minutes» no es 'no tengo ni dos minutos', sino 'solo tengo dos'). 2) La posición de «que» cambia el sentido: «il ne parle qu'à sa mère» (solo a su madre) frente a «il ne parle à sa mère que le soir» (solo por la noche): el «que» abraza exactamente lo que se restringe. 3) Con «à peine… que», la inversión del sujeto es obligatoria en estilo cuidado: «à peine a-t-il ouvert la porte que le téléphone sonne»; el español «apenas… cuando» no la conoce, y por eso sorprende en voz alta." },
      { t: "Dans la vraie conversation", body: "La correctora repasa el artículo en voz alta: «Vous écrivez “beaucoup de librairies ferment”. Combien ? Trois sur dix ? Dites-le. Et remplacez “elles ne lisent seulement que des polars” par “elles ne lisent que des polars” : le “seulement” en trop alourdit». El periodista aprende la lección del oficio: la restricción bien encuadrada es la firma de la prosa cuidada. Y al despedirse, la excusa universal del mundo editorial: «Je n'ai que cinq minutes, Madame Perrin — du moins, c'est ce que je crois»." },
    ],
    esempi: [
      { it: "Je n'ai que dix minutes avant la conférence de rédaction.", es: "Solo tengo diez minutos antes de la reunión de redacción." },
      { it: "Il n'y a que deux librairies encore ouvertes dans le quartier.", es: "Solo quedan dos librerías abiertas en el barrio." },
      { it: "Le film est réussi, du moins dans sa première heure.", es: "La película está lograda, al menos en su primera hora." },
      { it: "À peine le débat est-il ouvert que les objections fusent.", es: "Apenas se abre el debate, ya vuelan las objeciones." },
      { it: "Elle ne répond que rarement aux courriels après 18 heures.", es: "Solo responde rara vez a los correos después de las 18 horas." },
    ],
    usi: [
      { q: "«Solo tengo cinco minutos» (sin ningún valor negativo). ¿Cuál encaja?", options: ["Je n'ai pas cinq minutes.", "Je n'ai que cinq minutes.", "Je n'ai plus cinq minutes."], answer: 1, explain: "«Ne… que» restringe ('solo'); «ne… pas» niega del todo y «ne… plus» significa 'ya no'." },
      { q: "Quieres rectificar: «es un buen restaurante, al menos entre semana». ¿Cuál encaja?", options: ["C'est un bon restaurant, à peine en semaine.", "C'est un bon restaurant, du moins en semaine.", "C'est un bon restaurant, ne… qu'en semaine."], answer: 1, explain: "«Du moins» limita la afirmación a un caso preciso; «à peine» expresa inmediatez temporal y «ne… que» no se corta así." },
    ],
  },

  "fr-cu-b2-08": {
    sezioni: [
      { t: "Comment ça marche", body: "La pasiva se forma con «être» + participio (concordado con el sujeto: «les grilles ont été fermées») y el agente se introduce con «par»: «le projet a été adopté par le conseil». La voz media pronominal ofrece una alternativa de acción vivida: «il s'est fait construire une maison», «elle s'est vu refuser sa demande» — el «se» convierte la experiencia en algo que le ocurre al sujeto. La mise en relief recorta y subraya: «c'est… qui» para el sujeto («c'est la direction qui a fermé les grilles»), «c'est… que» para el resto («c'est la méthode que je critique»), y «ce qui… c'est…» eleva a tema una idea entera: «ce qui doit changer, c'est la méthode»." },
      { t: "Quand l'utiliser", body: "En el editorial, la pasiva sin agente difumina la responsabilidad («les grilles ont été fermées») — los manuales de estilo piden devolver el sujeto o usar el relieve; con agente, responsabiliza con calma. El relieve es el gesto natural para corregir: «ce n'est pas la dépense que je conteste, c'est la méthode». La voz media «se faire + infinitif» y «se voir + infinitif» ahorra pasivas pesadas en la crónica: «la ville s'est vu refuser sa subvention» dice en cuatro palabras lo que la pasiva desplegaría en ocho." },
      { t: "Attention ! (pour hispanophones)", body: "1) La concordancia del participio pasivo se olvida en voz alta: «les rues ont été envahies» (femenino plural), nunca «envahi». 2) El agente va con «par»; los instrumentos, con «avec» («fermée avec des clés» no, «fermée par le concierge» sí); y con verbos de sentimiento, el agente toma «de» («aimé de tous», «respecté des lecteurs»). 3) El español usa mucho menos «es… quien/que»: no metas «c'est… que» en cada frase; resérvalo para el momento en que de verdad quieres que caiga el acento, y recuerda que «ce qui… c'est…» invierte el orden lógico: primero anuncia el remate, después lo nombra." },
      { t: "Dans la vraie conversation", body: "En la conferencia de redacción de Rennes, cada frase se pesa: «Des voyageurs sont bloqués chaque matin — par qui ? Écrivez-le». La respuesta llega en relieve: «C'est la direction qui a fermé les grilles, un lundi de grève». Y el cierre del editorial ya está decidido: «Ce qui doit changer, ce n'est pas les grilles : c'est la méthode. Demain matin, c'est notre une qui sera commentée partout». En una sala así, la gramática es política: quien elige la pasiva sin agente, elige el silencio." },
    ],
    esempi: [
      { it: "Le pont a été inauguré par la maire samedi matin.", es: "El puente fue inaugurado por la alcaldesa el sábado por la mañana." },
      { it: "C'est le conseil municipal qui a voté la subvention.", es: "Es el consejo municipal quien votó la subvención." },
      { it: "Ce qui surprend les lecteurs, c'est le prix des places.", es: "Lo que sorprende a los lectores es el precio de las entradas." },
      { it: "Elle s'est vu refuser l'accès à la salle de délibération.", es: "Vio cómo le denegaban el acceso a la sala de deliberación." },
      { it: "Les archives de la rédaction ont été numérisées l'hiver dernier.", es: "Los archivos de la redacción fueron digitalizados el invierno pasado." },
    ],
    usi: [
      { q: "Quieres señalar con calma al responsable del cierre de las verjas. ¿Cuál encaja?", options: ["Les grilles ont été fermées.", "C'est la direction qui a fermé les grilles.", "Ce qui a fermé les grilles, c'est par la direction."], answer: 1, explain: "La pasiva sin agente difumina la responsabilidad y la tercera frase es agramatical; el relieve «c'est… qui» hace caer el acento sobre el sujeto responsable." },
      { q: "«Las calles fueron invadidas por la multitud» (participio concordado). ¿Cuál encaja?", options: ["Les rues ont été envahi par la foule.", "Les rues ont été envahies par la foule.", "Les rues ont envahi la foule."], answer: 1, explain: "El participio pasivo concuerda con el sujeto «les rues» (femenino plural): «envahies»; la tercera frase invierte los papeles." },
    ],
  },

  "fr-cu-b2-09": {
    sezioni: [
      { t: "Comment ça marche", body: "La carta formal francesa es un ceremonial de cuatro piezas: l'appelation («Monsieur le Directeur,», «Madame,», «Madame, Monsieur,» — con mayúscula en la función y coma, nunca «Cher» en la primera carta), l'objet («Objet : demande de remboursement»), le corps con fechas y referencias, y la formule de politesse final: «Je vous prie d'agréer, Madame, Monsieur, l'expression de mes sentiments distingués». Los verbos protocolarios se memorizan en bloque: «je me permets de vous écrire», «je vous saurais gré de», «veuillez trouver ci-joint», «je vous prie de bien vouloir»." },
      { t: "Quand l'utiliser", body: "Para la reclamación, la candidatura y la administración: la demanda firme combina condicional de cortesía («je vous saurais gré de procéder au remboursement intégral») y futuro de escalada («à défaut de réponse sous quinze jours, je saisirai le médiateur»). El correo cotidiano tolera «Cordialement», pero la reclamación solemne pide la gama completa: «sentiments distingués» (formal estándar), «salutations distinguées» (empresa), «respectueuses» (administración jerárquica). El vouvoiement gobierna todo el texto, de la primera a la última línea." },
      { t: "Attention ! (pour hispanophones)", body: "1) «Estimado señor» NO es «Cher Monsieur» en una primera carta: el «cher» francés presume una relación previa y suena falso en una reclamación — la appelation desnuda («Madame, Monsieur,») es lo correcto. 2) El «atentamente» español no tiene traducción única: elegir mal la fórmula final (un «Cordialement» en plena carta certificada) debilita todo el expediente. 3) «Je vous prie d'agréer» va seguido de la appelation repetida y de la fórmula completa: cortarla a medias («je vous prie d'agréer mes sentiments») cae en el vacío protocolario. Y en el cuerpo, nada de exabruptos: los hechos, las cifras y el plazo hablan por ti." },
      { t: "Dans la vraie conversation", body: "Antes de sellar la carta certificada, el vecino la lee en voz alta: «Madame, Monsieur, le lave-linge acheté le 3 mars est tombé en panne le 24 ; je vous saurais gré de procéder au remboursement intégral — à défaut de quoi je saisirai le médiateur». Pausa, y el cierre: «Je vous prie d'agréer, Madame, Monsieur, l'expression de mes sentiments distingués». En Francia, la cortesía no es debilidad: es la forma en que se gana un expediente, y la fórmula final se recita entera, como el último acorde de una pieza." },
    ],
    esempi: [
      { it: "Madame, Monsieur, je me permets de vous écrire au sujet de ma commande n° 314.", es: "Señora, Señor: me permito escribirle acerca de mi pedido n.º 314." },
      { it: "Je vous saurais gré de bien vouloir régulariser cette situation.", es: "Le agradecería que tuviera a bien regularizar esta situación." },
      { it: "Veuillez trouver ci-joint la copie de la facture et des échanges.", es: "Sírvase encontrar adjunta la copia de la factura y de los intercambios." },
      { it: "À défaut de réponse sous quinze jours, je saisirai le médiateur de la consommation.", es: "A falta de respuesta en quince días, acudiré al mediador de consumo." },
      { it: "Je vous prie d'agréer, Monsieur le Directeur, l'expression de ma considération distinguée.", es: "Le ruego que acepte, señor Director, la expresión de mi distinguida consideración." },
    ],
    usi: [
      { q: "Abres una primera carta de reclamación a un destinatario desconocido. ¿Cuál encaja?", options: ["Cher Monsieur, je me permets de vous écrire.", "Madame, Monsieur, je me permets de vous écrire.", "Salut à toutes et à tous, je me permets de vous écrire."], answer: 1, explain: "Para un destinatario desconocido, «Madame, Monsieur,»; «cher» presume relación previa y «salut» es coloquial." },
      { q: "Quieres anunciar la escalada si no recibe respuesta. ¿Cuál encaja?", options: ["À défaut de réponse, je saisirai le médiateur.", "À défaut de réponse, je saisis le médiateur.", "À défaut de réponse, je saisirais le médiateur."], answer: 0, explain: "La escalada se anuncia con futuro firme («saisirai»); el presente la ejecuta ya y el condicional la desarma." },
    ],
  },

  "fr-cu-b2-10": {
    sezioni: [
      { t: "Comment ça marche", body: "La refutación elegante avanza en tres tiempos: se concede («certes…», «j'en conviens», «je ne le conteste pas»), se contrasta («cependant», «toutefois», «néanmoins») y se ataca con la objeción real en una frase nueva. La concesión hipotética acepta la premisa ajena solo para discutirla: «en admettant que le parking attire des clients, qui paiera les travaux ?» + subjuntivo. Y «quand bien même» lleva la concesión al extremo: «quand bien même le parking serait plein, la circulation resterait» + condicional: ni siquiera en ese caso se sostiene la conclusión rival." },
      { t: "Quand l'utiliser", body: "En la mesa ciudadana, el debate y la tribuna: la concesión desarma («je ne conteste pas votre bonne foi ; je conteste vos chiffres»), la hipótesis provisional revela el coste oculto y «quand bien même» demuestra que el argumento adverso es insuficiente incluso si se cumple. Las fórmulas de cortesía parlamentaria completan el arsenal: «Je vous arrête un instant», «si je puis me permettre», «je note tout» — el animador registra sin juzgar, y el refutador deja constancia antes de golpear." },
      { t: "Attention ! (pour hispanophones)", body: "1) El español cubre «en admettant que» y «quand bien même» con un solo «aunque + subjuntivo»; el francés reparte los modos: subjuntivo tras «en admettant que», condicional tras «quand bien même» — mezclarlos es el error típico del examen. 2) «Cependant» solo encadena frases: no rige verbo ni equivale a «pendant que» ('mientras'), su gemelo falso. 3) «Je conteste» sin cortesía previa suena a combate: primero se registra la objeción del otro («je note votre remarque»), luego se responde — refutar en Francia es, ante todo, dejar constancia por escrito." },
      { t: "Dans la vraie conversation", body: "En la consulta de Nantes, el micrófono corre: «Certes, la pollution est un vrai sujet. Cependant, les commerçants vivent mal : sans voitures, ils mourront. — En admettant que le parking attire des clients, qui paiera les travaux ? — C'est prévu… en admettant que les recettes suffisent !». El animador levanta la mano y cierra la sesión: «Je note tout : objections, hypothèses, objections aux objections. Ces cahiers rejoindront le dossier public». La sala aplaude: nadie ha ganado, y todo el mundo ha sido escuchado." },
    ],
    esempi: [
      { it: "Certes, votre solution est rapide ; cependant, elle coûte cher.", es: "Ciertamente, su solución es rápida; sin embargo, cuesta cara." },
      { it: "En admettant que la subvention soit accordée, qui entretiendra l'équipement ?", es: "Admitiendo que se conceda la subvención, ¿quién mantendrá el equipamiento?" },
      { it: "Quand bien même le tram serait prolongé, la desserte resterait inégale.", es: "Aun cuando el tranvía se prolongara, la comunicación seguiría siendo desigual." },
      { it: "Je ne conteste pas votre bonne foi ; je conteste vos chiffres.", es: "No discuto su buena fe; discuto sus cifras." },
      { it: "J'en conviens : l'objection mérite d'être étudiée de près.", es: "Lo reconozco: la objeción merece estudiarse de cerca." },
    ],
    usi: [
      { q: "«Admitiendo que la ciudad financie las obras, ¿quién mantendrá el aparcamiento ?» ¿Cuál encaja?", options: ["En admettant que la ville finance les travaux, qui entretiendra le parking ?", "En admettant que la ville financera les travaux, qui entretiendra le parking ?", "Quand bien même la ville finance les travaux, qui entretiendra le parking ?"], answer: 0, explain: "«En admettant que» exige subjuntivo («finance»); el futuro es calco del español y «quand bien même» rige condicional." },
      { q: "«Aun cuando el aparcamiento estuviera lleno, el tráfico seguiría.» ¿Cuál encaja?", options: ["Quand bien même le parking serait plein, la circulation resterait.", "Quand bien même le parking soit plein, la circulation resterait.", "En admettant que le parking serait plein, la circulation resterait."], answer: 0, explain: "«Quand bien même» rige condicional en las dos cláusulas; el subjuntivo pertenece a «en admettant que»." },
    ],
  },

  "fr-cu-b2-11": {
    sezioni: [
      { t: "Comment ça marche", body: "El francés de reunión tiene sus verbos-bandera: «faire un point» (repasar), «recaler / décaler» (aplazar), «arbitrer» (decidir entre opciones), «acter» (validar y dejar por escrito), «débloquer» (desbloquear), «remonter un bug» (reportar un error), «débrief(er)» (analizar a posteriori). Las propuestas van con subjuntivo: «je propose qu'on recale la deadline», «il faut qu'on arbitre avant mercredi». Y el compte rendu se redacta en presente de acta, aunque la reunión ya acabó: «Nadia ouvre la séance, Karim annonce un retard, le go/no-go est acté». Para las circunstancias, el gérondif lleva su «en»: «en communiquant dès ce soir», mientras que el participe presente, sin «en» e invariable, pega el nombre a su acción: «les testeurs travaillant sur la version bêta»." },
      { t: "Quand l'utiliser", body: "En la weekly de la scale-up: «on fait un point rapide», «je propose qu'on décale d'une semaine», «on actera le go/no-go mercredi à 9 heures». Los anglicismos conviven con sus equivalentes franceses: deadline / échéance, feedback / retours, workshop / atelier — la startup elige el anglicismo, la administración prefiere el francés. En la scale-up se tutea hasta al CEO; en el banco y en la administración, vous — y el acta sigue en presente: «la directrice ouvre la séance à 14 heures», digan lo que digan los años." },
      { t: "Attention ! (pour hispanophones)", body: "1) «Assister à une réunion» = estar presente (nunca 'ayudar'); para ayudar: «aider», «donner un coup de main» — el falso amigo cuesta caro en una oficina. 2) Tras «je propose que» e «il faut que», subjuntivo: «je propose qu'on prenne une décision», «il faut qu'on aille au bout» — el indicativo es el error clásico del calco. 3) El acta en presente aunque todo haya pasado: la tentación del passé composé («Nadia a ouvert la réunion») es real, pero el presente de acta es la norma, como en español («se abre la sesión»). Y el gérondif nunca pierde su «en»: «en résumant», nunca «résumant» suelto." },
      { t: "Dans la vraie conversation", body: "Lunes, 9 h 30, Station F: «OK team, weekly ! On fait un point sur le lancement — Karim ? — On a eu du retard sur le module de paiement ; je propose qu'on recale la deadline d'une semaine. — Je suis favorable. Manon, tu peux préparer un teaser ? — Je m'en occupe, mais il faudra arbitrer le budget avant mercredi. — Acté. Et le compte rendu part ce soir, au présent, avec un owner par action». La reunión dura veinte minutos: en una scale-up, el verbo rápido también es una gramática." },
    ],
    esempi: [
      { it: "On fait un point rapide sur le lancement avant de décider.", es: "Hacemos un repaso rápido del lanzamiento antes de decidir." },
      { it: "Je propose qu'on arbitre le budget publicité avant mercredi.", es: "Propongo que decidamos el presupuesto de publicidad antes del miércoles." },
      { it: "Trois bugs ont été remontés par les bêta-testeurs ce week-end.", es: "Tres errores fueron reportados por los usuarios de prueba este fin de semana." },
      { it: "En communiquant dès ce soir, on évite les rumeurs internes.", es: "Comunicando desde esta noche, evitamos los rumores internos." },
      { it: "La décision est actée : le go/no-go aura lieu mercredi à 9 heures.", es: "La decisión queda validada: el visto bueno o parada tendrá lugar el miércoles a las 9 h." },
    ],
    usi: [
      { q: "«Propongo que tomemos una decisión hoy.» ¿Cuál encaja?", options: ["Je propose qu'on prend une décision aujourd'hui.", "Je propose qu'on prenne une décision aujourd'hui.", "Je propose qu'on prendra une décision aujourd'hui."], answer: 1, explain: "«Proposer que» + subjuntivo: «prenne»; el indicativo «prend» y el futuro «prendra» son calcos del español." },
      { q: "Redactas el acta de una reunión que ya terminó. ¿Cuál encaja?", options: ["Nadia ouvre la séance et fixe l'ordre du jour.", "Nadia a ouvert la séance et a fixé l'ordre du jour.", "Nadia ouvrira la séance et fixera l'ordre du jour."], answer: 0, explain: "El compte rendu se redacta en presente de acta aunque la reunión sea pasada; el passé composé es la tentación a evitar." },
    ],
  },

  "fr-cu-b2-12": {
    sezioni: [
      { t: "Comment ça marche", body: "El alegato tiene tres movimientos: l'exposé (los hechos, sin adjetivos: «mon client a peint un mur»), les arguments (concesión y refutación: «certes l'autorisation manquait ; cependant ce mur était abandonné»), la péroraison (breve, cadenciosa, una sola imagen: «que la ville lui rende justice»). Las herramientas tienen nombre: la pregunta retórica con «si» + imperfecto («et si la ville commandait ?»), la antítesis «non pas X, mais Y» («non pas l'impunité, mais la reconnaissance»), el presente de verdad general («punir un talent, c'est payer deux fois la même fresque»), la anáfora y el paralelismo («rendre… rendre») y el subjuntivo optativo final («que la ville lui rende justice»)." },
      { t: "Quand l'utiliser", body: "Ante el tribunal, en el concurso de elocuencia y en cualquier defensa apasionada: el exposé se recita neutro, la argumentación concede y refuta, y la peroración se aprende de memoria — es la única frase que recordarán. La pausa de un segundo antes del remate vale más que un adjetivo, y la enumeración se lee con la voz subiendo en cada elemento salvo el último, que cae: «l'exposé, les arguments, la péroraison». Quien domina los tres tiempos puede permitirse la ironía fina; quien los ignora, solo el ruido." },
      { t: "Attention ! (pour hispanophones)", body: "1) «Et si la ville commandait ?» es «si» + imperfecto (hipótesis abierta, invitación a imaginar): no lo confundas con el «si» + pluscuamperfecto del remordimiento («si la ville avait commandé, tout serait autre») — uno invita, el otro llora. 2) La peroración no es un resumen: añadir argumentos nuevos en el cierre diluye el efecto; el cierre escoge UNA idea y la deja caer con silencio delante. 3) En la sala francesa no se grita «¡Protesto !»: se pide la palabra («Monsieur le Président, permettez-moi d'intervenir») y se responde con «certes… cependant» — el tono es marcial pero ceremonial, nunca agresivo." },
      { t: "Dans la vraie conversation", body: "El tribunal escolar escucha diez minutos: «Monsieur le Président, mon client a peint un mur : voilà le fait. Certes, l'autorisation manquait ; cependant, ce mur était le dépotoir du quartier depuis des années. Et si la ville, au lieu de poursuivre, commandait ? Une charte, des murs autorisés, des jeunes formés. [Une seconde de silence.] Mon client a rendu un mur à la ville ; que la ville lui rende justice». La sala guarda un segundo de silencio: la elocuencia ha hecho su trabajo, y el aplauso llega solo." },
    ],
    esempi: [
      { it: "Monsieur le Président, permettez-moi d'intervenir sur ce point.", es: "Señor Presidente, permítame intervenir en este punto." },
      { it: "Et si la ville, au lieu de sanctionner, formait de jeunes artistes ?", es: "¿Y si la ciudad, en lugar de sancionar, formara a jóvenes artistas?" },
      { it: "Je ne demande pas l'impunité, mais la reconnaissance du travail accompli.", es: "No pido impunidad, sino el reconocimiento del trabajo realizado." },
      { it: "Défendre, c'est éclairer ; accuser, c'est assombrir.", es: "Defender es iluminar; acusar es oscurecer." },
      { it: "Que la cour rende son délibéré en son âme et conscience.", es: "Que la corte dicte su fallo en conciencia." },
    ],
    usi: [
      { q: "Quieres rematar con una antítesis: 'no impunidad, sino reconocimiento'. ¿Cuál encaja?", options: ["Nous demandons non pas l'impunité, mais la reconnaissance.", "Nous demandons ni l'impunité, ni la reconnaissance.", "Nous demandons l'impunité et la reconnaissance."], answer: 0, explain: "La antítesis «non pas X, mais Y» fija la idea final; «ni… ni» niega ambas y la conjunción las suma." },
      { q: "«¿Y si la ciudad encargara ?» (pregunta retórica abierta). ¿Cuál encaja?", options: ["Et si la ville a commandé ?", "Et si la ville avait commandé ?", "Et si la ville commandait ?"], answer: 2, explain: "La pregunta retórica abierta usa «si» + imperfecto; el pluscuamperfecto desplaza la hipótesis a un pasado irreal." },
    ],
  },
};
