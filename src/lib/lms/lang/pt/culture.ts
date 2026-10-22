import type { CultureArticle } from "../../types";

/* ═══ PT · Cultura portuguesa (v9.39 · PARTE 3d) ════════════════════
   Artículos en español con ejemplos en portugués europeo, espejo de
   src/lib/lms/culture.ts. Seis temas: os Descobrimentos, o fado, os
   azulejos, a gastronomia regional, junho e as festas populares, o
   Porto e o Douro.                                                     */

export const PT_CULTURE: CultureArticle[] = [
  {
    id: "pt-cul-1", emoji: "🧭", category: "Historia", title: "Os Descobrimentos: el país que se hizo mar", level: "B1", minutes: 4,
    paragraphs: [
      "En 1415 una flota portuguesa cruzó el estrecho y tomó Ceuta: empezaba la epopeya dos Descobrimentos, el proyecto que convirtió a un país de un millón de habitantes en la primera potencia marítima del mundo. El infante D. Henrique, «o Navegador», reunió cartógrafos y marineros en Sagres para bajar el mapa, costa a costa, como quien deshace un ovillo.",
      "Durante un siglo las carabelas fueron abriendo el planeta: Madeira y las Azores, la costa africana y sus feitorias, el cabo da Boa Esperança con Bartolomeu Dias (1488) y, en 1498, Vasco da Gama llegó a la India. En 1500, Pedro Álvares Cabral, de camino a Oriente, tocó por accidente Brasil. El pequeño Portugal se convirtió en un imperio «onde o sol se põe», como se jactaban los cronistas.",
      "El portugués que estudias es hijo en parte de esos viajes: palabras como «chá» (té) o «manga» viajaron en las bodegas de esas naves y volvieron a bordo. Si visitas Belém, verás el Padrão dos Descobrimentos, una carabela de piedra: el infante va en cabeza, mirando al mar que le dio un país nuevo.",
    ],
    vocab: [ { it: "os Descobrimentos", es: "los Descubrimientos" }, { it: "a caravela", es: "la carabela" }, { it: "o cabo da Boa Esperança", es: "el cabo de Buena Esperanza" } ],
    question: { q: "¿Quién llegó a la India por mar en 1498?", options: ["Vasco da Gama", "Bartolomeu Dias", "Pedro Álvares Cabral", "O infante D. Henrique"], answer: 0, explain: "Vasco da Gama dobló el Cabo y llegó a Calicut; Dias se detuvo en el Cabo (1488) y Cabral tocó Brasil (1500)." },
  },
  {
    id: "pt-cul-2", emoji: "🎶", category: "Música", title: "O fado: la voz de la saudade", level: "B1", minutes: 4,
    paragraphs: [
      "En las tascas de Alfama y da Bica, cuando baja la luz, alguien canta «o fado» — del latín fatum, destino — y la sala entera calla. La voz llega envuelta en un xaile negro, acompañada por la guitarra portuguesa, de doce cordas y timbre brillante, y por la viola, que sostiene el ritmo como una marea.",
      "El fado canta «o amor, o mar e a vida dura dos bairros» y, sobre todo, la «saudade»: esa mezcla portuguesa de falta y esperanza que no tiene traducción exacta al español. Amália Rodrigues lo llevó del barrio al mundo; en 2011 la UNESCO lo declaró Patrimonio Cultural Inmaterial de la Humanidad.",
      "Curiosidad de tasca: durante la canción no se aplaude «a meio», se espera al final, y los veteranos piden silencio con un «psiu». Si en una casa de fados de Lisboa suena «Uma casa portuguesa» o «Ai Mouraria», ya lo sabes: estás dentro de la emoción nacional, y lo mejor es no moverse.",
    ],
    vocab: [ { it: "o fado", es: "el fado" }, { it: "a guitarra portuguesa", es: "la guitarra portuguesa (12 cuerdas)" }, { it: "a saudade", es: "la saudade (nostalgia sin traducción exacta)" } ],
    question: { q: "¿Qué significa la palabra «fado»?", options: ["Destino (del latín fatum)", "Barco pequeño", "Canción de cuna", "Vino del Duero"], answer: 0, explain: "Viene del latín fatum: el destino que se canta." },
  },
  {
    id: "pt-cul-3", emoji: "🟦", category: "Arte", title: "Os azulejos: la piel azul de las ciudades", level: "A2", minutes: 3,
    paragraphs: [
      "En Portugal, «as paredes falam»: desde el siglo XV los portugueses revisten fachadas, iglesias y estaciones con azulejos, palabra que viene del árabe al-zulaic, «pedra polida». La técnica llegó con los mouros y los primeros ejemplares entraron por Sevilla.",
      "Hay azulejos de todos los estilos: la geometría mudéjar, los padrões del siglo XVII, las escenas azules y blancas del XVIII. En la estação de São Bento, en Oporto, veinte mil piezas pintadas por Jorge Colaço cuentan la historia de Portugal en una sola pared; en Lisboa, fachadas enteras forman mosaicos de colores con nombres de calles.",
      "«Beleza com função», dicen los portugueses: los azulejos protegen las paredes de la humedad y de la luz brutal del Atlántico. Si te gusta el tema, el Museu Nacional do Azulejo, en Lisboa, narra ocho siglos de esta tradición en un antiguo convento.",
    ],
    vocab: [ { it: "o azulejo", es: "el azulejo" }, { it: "a fachada", es: "la fachada" }, { it: "o painel de azulejos", es: "el panel de azulejos" } ],
    question: { q: "¿De qué lengua viene la palabra «azulejo»?", options: ["Del árabe", "Del latín", "Del francés", "Del castellano"], answer: 0, explain: "De al-zulaic, «piedra pulida»: la técnica decorativa llegó con los moros." },
  },
  {
    id: "pt-cul-4", emoji: "🍽️", category: "Gastronomía", title: "Do bacalhau ao pastel de nata: el mapa del gusto", level: "A2", minutes: 3,
    paragraphs: [
      "Dicen los portugueses que tienen 365 recetas de bacalhau, «uma para cada dia do ano»: com natas, à Brás, cozido com grão… El bacalao salado, que se conservaba en las bodegas de los Descubrimientos, es el pescado nacional y se come «do Natal à Páscoa», de la Navidad a la Pascua.",
      "Cada región tiene su mesa: en el Minho, o caldo verde y o vinho verde; en Oporto, a francesinha, un sándwich-bomba con salsa picante; en el Alentejo, o pão, as azeitonas y el gaspacho alentejano; en Lisboa, os pastéis de nata, nacidos en Belém junto al monasterio, con canela por encima.",
      "Etiqueta práctica: o pequeno-almoço es dulce (un galão o café y una tosta); o almoço, entre las 13:00 y las 15:00, es la comida fuerte del día; o jantar es ligera. En el restaurante pide la ementa do dia y prepara el estómago: en Portugal se come bien, y mucho.",
    ],
    vocab: [ { it: "o bacalhau", es: "el bacalao" }, { it: "o caldo verde", es: "el caldo verde (sopa de col y chorizo)" }, { it: "o pastel de nata", es: "el pastel de nata" } ],
    question: { q: "¿Cuántas recetas de bacalao dicen tener los portugueses?", options: ["365, una por cada día del año", "52, una por semana", "12, una por mes", "Solo 3"], answer: 0, explain: "La leyenda popular habla de 365: una para cada día del año." },
  },
  {
    id: "pt-cul-5", emoji: "🎉", category: "Fiestas", title: "Junho e as festas populares: santos, sardinas y martillitos", level: "A2", minutes: 3,
    paragraphs: [
      "En Portugal, «junho é o mês das festas populares»: Lisboa se vuelca con santo António (13 de junho) y Oporto con São João (la noche del 23 al 24). Durante semanas, los barrios históricos — Alfama, Madragoa, a Ribeira — se cubren de arcos de flores, banderillas y luces de colores.",
      "En la calle se asan sardinhas na brasa, que se comen con pão y caldo verde sobre cajas de madera convertidas en mesas. En Lisboa desfilan as marchas populares na Avenida da Liberdade, cada barrio con su traje y su canción, y santo António, casamentero, celebra los «casamentos de santo António»: bodas colectivas de parejas sin recursos.",
      "Curiosidad portuense: en la noche de São João la gente se golpea amablemente la cabeza con martelinhos de plástico o con un alho-porro: es para dar suerte. Después, todos esperan los fuegos artificiales sobre el Duero y, los más valientes, saltan las hogueras en la playa.",
    ],
    vocab: [ { it: "as sardinhas assadas", es: "las sardinas asadas" }, { it: "as marchas populares", es: "los desfiles populares" }, { it: "o martelinho", es: "el martillito de plástico (São João)" } ],
    question: { q: "¿Qué santo celebra Lisboa en junio?", options: ["Santo António (13 de junio)", "São João (24 de junio)", "São Pedro (29 de junio)", "São Jorge (23 de abril)"], answer: 0, explain: "Santo António es la fiesta de Lisboa; São João, la noche del 23 al 24, es la gran fiesta de Porto." },
  },
  {
    id: "pt-cul-6", emoji: "🍷", category: "Regiones", title: "O Porto e o Douro: la ciudad y el río", level: "B1", minutes: 4,
    paragraphs: [
      "La ciudad dio nombre al país: «Portugal» nace de Portus Cale, el asentamiento romano junto a la desembocadura del Duero. Hoy la «cidade invicta» — como la llaman sus habitantes, que se sienten un poco los fundadores — es Patrimonio Mundial: a Ribeira, a Torre dos Clérigos, a livraria Lello y un trazado medieval que sube y baja sin pedir permiso.",
      "En la otra orilla, en Vila Nova de Gaia, envejecen las caves (bodegas) do vinho do Porto. El vino nace río arriba, en el Douro, la primera región vitivinícola demarcada del mundo (1756): terraços de xisto esculpidos en la montaña donde el calor del verano concentra la uva. Los ingleses lo descubrieron en el siglo XVII, lo mezclaron con aguardiente para que sobreviviera al viaje y nació el vino generoso más famoso del planeta.",
      "Consejo de estudiante: cruza a ponte de D. Luís al atardecer, baja hasta Gaia y prueba un «Porto tawny com idade». Los portugueses resumen la división del trabajo nacional con un refrán: «o Porto trabalha, Braga reza e Lisboa diverte-se». Visita las tres y comprueba si es verdad.",
    ],
    vocab: [ { it: "o vinho do Porto", es: "el vino de Oporto" }, { it: "a cave", es: "la bodega (en Gaia)" }, { it: "a Ribeira", es: "la ribera (casco antiguo junto al río)" } ],
    question: { q: "¿Qué región vitivinícola fue la primera demarcada del mundo?", options: ["O Douro, en 1756", "O Dão", "O Alentejo", "A Bairrada"], answer: 0, explain: "La Companhia Geral da Agricultura das Vinhas do Alto Douro marcó los límites de la región en 1756." },
  },
];
