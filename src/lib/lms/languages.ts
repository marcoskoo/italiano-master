import type { CefrLevel, LangCode } from "./types";
import { ITALIAN_CERTS } from "./cefr";

/* ═══ v9.17 · Registro de lenguas de estudio ═══════════════════════════
   Plataforma multi-idioma: una lengua de estudio con su variante
   nacional de referencia (inglés americano, portugués de Portugal,
   francés de Francia, alemán de Alemania) y el italiano original.
   La interfaz permanece en español; TODO el contenido de estudio,
   audio, diccionario y certificaciones se adaptan a la lengua activa. */

export interface LangInfo {
  code: LangCode;
  flag: string;                 // emoji bandera
  name: string;                  // nombre en español ("Inglés")
  nativeName: string;            // endónimo ("English")
  variant: string;               // "Inglés americano"
  variantEs: string;              // etiqueta larga en la UI
  country: string;                // país de referencia
  countryFlag: string;
  ttsLocale: string;              // BCP-47 para TTS y HTML lang
  idPrefix: string;               // prefijo de ids de contenido ("" = italiano, compat)
  imgRoot: string;                // carpeta de imágenes reutilizable
  hoursA1: number;                // horas guiadas de referencia (A1)
  /* convenciones del país (adaptación cultural) */
  conventions: {
    currency: string;
    date: string;                 // formato de fecha con ejemplo
    measures: string;
    formality: string;            // tratamiento de cortesía
    tipping: string;
    emergency: string;            // teléfono de emergencias
    smallTalk: string;            // temas seguros / tabúes
  };
}

export const LANGS: Record<LangCode, LangInfo> = {
  it: {
    code: "it", flag: "🇮🇹", name: "Italiano", nativeName: "Italiano",
    variant: "Italiano standard", variantEs: "Italiano de Italia",
    country: "Italia", countryFlag: "🇮🇹", ttsLocale: "it-IT", idPrefix: "",
    imgRoot: "/images/conversazione", hoursA1: 90,
    conventions: {
      currency: "Euro (€) — 1 € = 100 centésimos",
      date: "día/mes/año → 19/10/2026 (el 19 ottobre 2026)",
      measures: "Métrico decimal (km, kg, °C)",
      formality: "tu informal / Lei formal (si escribe con mayúscula); entre jóvenes se pasa rápido al tu",
      tipping: "No obligatorio: se redondea o se deja 1-2 € en la mesa; el servicio suele estar incluido (coperto)",
      emergency: "112 (único europeo); 113 policía, 118 salud",
      smallTalk: "Seguro: comida, fútbol, arte, moda, el tiempo. Evita: política, mafia y dinero personal",
    },
  },
  en: {
    code: "en", flag: "🇺🇸", name: "Inglés", nativeName: "English",
    variant: "American English", variantEs: "Inglés americano (EE. UU.)",
    country: "Estados Unidos", countryFlag: "🇺🇸", ttsLocale: "en-US", idPrefix: "en-",
    imgRoot: "/images/conversazione", hoursA1: 90,
    conventions: {
      currency: "Dólar estadounidense (USD $) — 1 $ = 100 cents",
      date: "mes día, año → October 19, 2026; en cifras 10/19/2026 (¡mes primero!)",
      measures: "Imperial: millas (mile), libras (pound), °F; líquidos en galones — en ciencia sí se usa métrico",
      formality: "First names casi de inmediato, también en el trabajo; Mr./Ms. + apellido solo en muy formal; nunca títulos académicos en el trato diario",
      tipping: "OBLIGATORIO socialmente: 15-20 % en restaurantes (los camareros viven de propinas); $1 por bebida en bar; 15 % en taxi",
      emergency: "911 (policía, bomberos, ambulancia)",
      smallTalk: "Seguro: deportes, el fin de semana, viajes, películas. Evita: salario, política, religión y peso — preguntar esto se considera grosero",
    },
  },
  pt: {
    code: "pt", flag: "🇵🇹", name: "Portugués", nativeName: "Português",
    variant: "Português europeu", variantEs: "Portugués de Portugal",
    country: "Portugal", countryFlag: "🇵🇹", ttsLocale: "pt-PT", idPrefix: "pt-",
    imgRoot: "/images/conversazione", hoursA1: 90,
    conventions: {
      currency: "Euro (€)",
      date: "día/mes/año → 19/10/2026 (19 de outubro de 2026)",
      measures: "Métrico decimal (km, kg, °C)",
      formality: "tu informal (muito comum en Lisboa incluso con desconocidos jóvenes); o senhor/a senhora formal con mayores; você es semiformal (ojo: en Portugal você NO es siempre plural ni tan informal como en Brasil)",
      tipping: "No obligatorio: 5-10 % si el servicio fue excelente; redondear es normal",
      emergency: "112 (único europeo)",
      smallTalk: "Seguro: comida (pastéis de nata, bacalhau), fado, fútbol, Oporto y lisboa. Evita: comparar Portugal con Brasil como si fueran iguales y política",
    },
  },
  fr: {
    code: "fr", flag: "🇫🇷", name: "Francés", nativeName: "Français",
    variant: "Français standard", variantEs: "Francés de Francia",
    country: "Francia", countryFlag: "🇫🇷", ttsLocale: "fr-FR", idPrefix: "fr-",
    imgRoot: "/images/conversazione", hoursA1: 90,
    conventions: {
      currency: "Euro (€)",
      date: "día/mes/año → 19/10/2026 (le 19 octobre 2026); siglo con números ordinales",
      measures: "Métrico decimal (km, kg, °C)",
      formality: "tu/vous es un sistema social: vous con desconocidos, mayores, comercios y el trabajo; el paso al tu hay que proponerlo («On peut se tutoyer ?»)",
      tipping: "Service compris: la propina está incluida por ley; se redondea o 5 % por servicio excepcional",
      emergency: "112 (europeo) · 15 SAMU salud",
      smallTalk: "Seguro: comida, vino, arte, viajes. Evita: preguntar el sueldo; el tuteo precipitado se toma por descortesía",
    },
  },
  de: {
    code: "de", flag: "🇩🇪", name: "Alemán", nativeName: "Deutsch",
    variant: "Standarddeutsch", variantEs: "Alemán de Alemania",
    country: "Alemania", countryFlag: "🇩🇪", ttsLocale: "de-DE", idPrefix: "de-",
    imgRoot: "/images/conversazione", hoursA1: 90,
    conventions: {
      currency: "Euro (€)",
      date: "día.mes.año → 19.10.2026 (19. Oktober 2026); la hora usa el punto (14.30 Uhr)",
      measures: "Métrico decimal (km, kg, °C)",
      formality: "Sie (usted) es la puerta de entrada en TODA interacción formal; du entre amigos/jóvenes; el cambio a du suele acompañarse de un apretón de manos o choque de puños",
      tipping: "Se redondea: «auf 25 €» — 5-10 % en mesa; decir el total al pagar («Zusammen 25, bitte»)",
      emergency: "112 (europeo) · 110 policía",
      smallTalk: "Seguro: viajes, fútbol, comida, el tiempo. Evita: temas del periodo nazi (enfoque histórico serio, nunca como small talk), salarios y preguntar por hijos",
    },
  },
};

export const LANG_LIST: LangInfo[] = (["it", "en", "pt", "fr", "de"] as LangCode[]).map((c) => LANGS[c]);

/** Prefijo de id de unidad → lengua. "" → italiano. */
export function langOfId(id: string): LangCode {
  if (id.startsWith("en-")) return "en";
  if (id.startsWith("pt-")) return "pt";
  if (id.startsWith("fr-")) return "fr";
  if (id.startsWith("de-")) return "de";
  return "it";
}

/* ═══ Certificaciones oficiales por lengua (adaptadas al país) ════════
   Misma forma que ITALIAN_CERTS para que el Quadro MCER las renderice. */

export interface LangCert {
  id: string;
  name: string;
  body: string;
  levels: CefrLevel[];
  extras: string[];
  desc: string;
  site: string;
  appPrep: boolean;
}

export const CERTS_BY_LANG: Record<LangCode, LangCert[]> = {
  it: ITALIAN_CERTS as unknown as LangCert[],
  en: [
    {
      id: "cambridge-en", name: "Cambridge English", body: "University of Cambridge (Cambridge Assessment English)",
      levels: ["A2", "B1", "B2", "C1", "C2"],
      extras: ["A2 Key · B1 Preliminary · B2 First · C1 Advanced · C2 Proficiency", "Exámenes en papel o computadora, presenciales en centros autorizados"],
      desc: "Los títulos de Cambridge English no caducan y son de los más reconocidos por universidades estadounidenses y británicas. En EE. UU. los aceptan la mayoría de las universidades y muchos empleadores como evidencia de nivel. Cada examen evalúa Reading, Writing, Listening y Speaking en una sola sesión.",
      site: "cambridgeenglish.org", appPrep: false,
    },
    {
      id: "toefl", name: "TOEFL iBT", body: "ETS (Educational Testing Service)",
      levels: ["B1", "B2", "C1", "C2"],
      extras: ["Puntaje 0-120 con correspondencia CEFR (B1 ≈ 42-71, B2 ≈ 72-94, C1 ≈ 95-113, C2 ≈ 114+)", "Se convoca casi todos los fines de semana"],
      desc: "El estándar de facto para estudiar en universidades de EE. UU. (también aceptado en 150+ países). La correspondencia con el MCER la publica ETS en su tabla oficial; cada institución fija el puntaje mínimo que exige (la Ivy League suele pedir 100+). Se rinde en computadora en centros autorizados o en casa (Home Edition) con supervisión humana y de IA.",
      site: "ets.org/toefl", appPrep: false,
    },
    {
      id: "ielts", name: "IELTS", body: "British Council · IDP · Cambridge Assessment English",
      levels: ["B1", "B2", "C1", "C2"],
      extras: ["Bandas 1-9 (B1 = 4-5 · B2 = 5.5-6.5 · C1 = 7-8 · C2 = 8.5+)", "IELTS Life Skills A1/B1 para visas del Reino Unido"],
      desc: "Aceptado por más de 11.000 organizaciones. En el contexto estadounidense lo aceptan ~3.400 instituciones, incluidas las principales universidades; para el visado estudiantil del Reino Unido se exige el UKVI. La banda que exige cada universidad varía: 6.0-6.5 en titulares y 7.0+ en las más competitivas.",
      site: "ielts.org", appPrep: false,
    },
    {
      id: "naturalization", name: "USCIS · Naturalización (ciudadanía)", body: "U.S. Citizenship and Immigration Services",
      levels: ["A2", "B1"],
      extras: ["Prueba de inglés: leer 1 de 3 frases, escribir 1 de 3 y responder la entrevista", "Examen cívico: 100 preguntas de historia y gobierno (6/10 para aprobar)"],
      desc: "Para nacionalizarse estadounidense NO se exige un certificado CEFR: la propia entrevista de ciudadanía evalúa inglés hablado, lectura y escritura (nivel funcional A2-B1) más el examen cívico. Conviene prepararla con los materiales oficiales de USCIS; el MCER sirve de referencia de nivel, no de requisito.",
      site: "uscis.gov", appPrep: false,
    },
  ],
  pt: [
    {
      id: "caple", name: "CAPLE", body: "Centro de Avaliação do Português Língua Estrangeira · Universidade de Lisboa",
      levels: ["A2", "B1", "B2", "C1", "C2"],
      extras: ["CIPLE A2 · DEPLE B1 · DIPLE B2 · DAPLE C1 · DUPLE C2", "Variantes: CIPLE Escolar (A2 para menores) y PLE para fines específicos"],
      desc: "El sistema oficial portugués: la Universidade de Lisboa certifica el portugués europeo en centros acreditados de Portugal y del extranjero. El CIPLE (A2) es el exigido para la nacionalidad portuguesa (2018) y para permisos de residencia de larga duración. CAPLE no ofrece A1: el nivel de entrada es A2.",
      site: "caple.pt", appPrep: false,
    },
    {
      id: "citizenship-pt", name: "Nacionalidad portuguesa", body: "Instituto dos Registos e Notariado (IRN)",
      levels: ["A2"],
      extras: ["CIPLE A2 o prueba equivalente oficial", "Excepciones: mayores de 65 y ciudadanos de países de lengua oficial portuguesa"],
      desc: "Desde la reforma de 2018, la nacionalidad exige A2 demostrado con CIPLE o equivalente reconocido. Mayores de 65 años y nacionales de la CPLP (Brasil, Angola, Cabo Verde…) están exentos. Conviene verificar los requisitos vigentes en el portal del IRN antes de solicitar la cita.",
      site: "irn.mj.pt", appPrep: false,
    },
    {
      id: "ple", name: "Exámenes universitarios (PLE)", body: "Facultades de Letras (Lisboa, Coimbra, Oporto)",
      levels: ["B1", "B2", "C1"],
      extras: ["Pruebas internas de acceso para grados y másteres", "Cada facultad publica su calendario"],
      desc: "Las universidades portuguesas admiten pruebas propias de PLE para estudiantes internacionales además del DIPLE/DAPLE. Suelen combinarse con el certificado de nivel del curso de la Faculdade de Letras; consulta la convocatoria de cada año académico.",
      site: "fl.ul.pt", appPrep: false,
    },
  ],
  fr: [
    {
      id: "delf-dalf", name: "DELF · DALF", body: "France Éducation international (vía Alliances françaises e institutos)",
      levels: ["A1", "A2", "B1", "B2", "C1", "C2"],
      extras: ["DELF A1/A2/B1/B2 · DALF C1/C2", "Variantes: DELF Prim (niños), DELF Junior, DELF Pro (profesional)"],
      desc: "El sistema oficial francés: DELF cubre A1-B2 y DALF los niveles C. Los títulos no caducan y los emite el Ministerio de Educación francés a través de France Éducation international. Se rinden en las Alliances françaises de todo el mundo; en Francia, en centros académicos asociados.",
      site: "france-education-international.fr", appPrep: false,
    },
    {
      id: "tcf-tef", name: "TCF · TEF", body: "France Éducation international (TCF) · CCIP (TEF)",
      levels: ["A1", "A2", "B1", "B2", "C1", "C2"],
      extras: ["Resultados con correspondencia CEFR en 6-8 semanas", "Versiones: Tout public, Canada (para emigrar a Quebec), DAP (universidad)"],
      desc: "Alternativas al DELF/DALF de una sola sesión, útiles cuando se necesita un nivel rápido (visas, universidad, Quebec). El TCF Canada es el examen requerido por Inmigación Québec y por la categoría de expresión francesa de entrada rápida canadiense. Cada institución indica si acepta TCF/TEF en lugar de DELF.",
      site: "france-education-international.fr", appPrep: false,
    },
    {
      id: "naturalization-fr", name: "Naturalización francesa", body: "Ministère de l'Intérieur · Plateforme de naturalisation",
      levels: ["B1"],
      extras: ["DELF B1 (o superior) obligatorio desde 2006: comprensión escrita + expresión oral", "También válido para la carte de résident"],
      desc: "Para solicitar la nacionalidad francesa hay que acreditar B1 con DELF (comprensión escrita y expresión oral del examen) o título superior. El mismo nivel se pide para la carta de residencia de 10 años. Verifica los requisitos actualizados en service-public.fr antes de iniciar el expediente.",
      site: "service-public.fr", appPrep: false,
    },
  ],
  de: [
    {
      id: "goethe", name: "Goethe-Zertifikat", body: "Goethe-Institut",
      levels: ["A1", "A2", "B1", "B2", "C1", "C2"],
      extras: ["Exámenes A1-C2 en 160 centros en Alemania y 90+ países", "Variantes: Goethe-Zertifikat A1/A2 · ProB1 (profesional)"],
      desc: "La certificación de alemán de referencia mundial, emitida por el Goethe-Institut. Los títulos no caducan y son aceptados por universidades alemanas, empleadores y autoridades. El A1 (Start Deutsch 1) es el exigido para el visado de reunión familiar; B1 es el umbral habitual de naturalización.",
      site: "goethe.de", appPrep: false,
    },
    {
      id: "telc", name: "telc Deutsch", body: "telc GmbH (The European Language Certificates)",
      levels: ["A1", "A2", "B1", "B2", "C1", "C2"],
      extras: ["telc Deutsch A1-C2 · variantes Beruf (profesional) y Pflege (enfermería)", "Reconocido por el Estado alemán"],
      desc: "Alternativa oficial con el mismo alcance del MCER, muy usada en contextos laborales y sanitarios (las variantes Beruf y Pflege son específicas para profesionales). Los Ministerios del Interior de los Länder aceptan telc para naturalización.",
      site: "telc.net", appPrep: false,
    },
    {
      id: "testdaf", name: "TestDaF", body: "TestDaF-Institut (Gesellschaft für Akademische Testentwicklung)",
      levels: ["B2", "C1"],
      extras: ["4 módulos: lectura, escucha, escritura y habla con niveles TDN 3-5", "Suficiente para matricularse en cualquier universidad alemana"],
      desc: "El examen de alemán para estudios universitarios: un TDN 4 equivale a B2-C1 y abre la matrícula en todas las universidades alemanas. Se rinde en centros autorizados en ~90 países varias veces al año. Los requisitos de cada grado se publican en uni-assist.",
      site: "testdaf.de", appPrep: false,
    },
    {
      id: "naturalization-de", name: "Naturalización alemana", body: "BMI · Standesamt / Einbürgerungsbehörde",
      levels: ["B1"],
      extras: ["B1 (Goethe, telc, ÖSD…) + demostrar uso cotidiano del alemán", "B2 reduce el tiempo de espera en algunos Länder"],
      desc: "Desde 2024, la ley de ciudadanía exige B1 certificado y, además, que el solicitante use el alemán en la vida diaria. Con B2/C1 algunos Länder acortan los plazos de residencia. Revisa la guía oficial del BMI antes de pedir cita: los requisitos se actualizan con frecuencia.",
      site: "bmi.bund.de", appPrep: false,
    },
  ],
};

/* ═══ Cobertura declarada por lengua (para el Quadro y el gating) ════
   levelsShipped: niveles con contenido real publicado en la app.
   Se actualiza al aterrizar cada paquete (A2, B1… de cada lengua). */
export const SHIPPED_LEVELS: Record<LangCode, string[]> = {
  it: ["A1", "A2", "B1", "B2", "C1", "C2"],
  en: ["A1"],
  pt: [],
  fr: [],
  de: [],
};
