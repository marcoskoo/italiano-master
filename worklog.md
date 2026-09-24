# Worklog

---
Task ID: 1
Agent: Super Z (main agent)
Task: Build an Italian language learning site with (a) continuously morphing hero shape, (b) drag-vertex live readouts, (c) slider-driven function plots, (d) color-pulse quiz feedback, (e) step-by-step solutions revealed line by line.

Work Log:
- Loaded fullstack-dev skill, initialized environment (Next.js 16 + TS + Tailwind 4 + shadcn/ui, dev server on port 3000).
- Design foundation: `src/app/globals.css` — Italian editorial palette theme tokens (verde/rosso/oro/terracotta/crema/inchiostro, no blue), keyframes (pulse-correct, pulse-wrong, shake-x, reveal-correct, card-flash, float, dot-breathe, eq), reduced-motion guards, custom scrollbar. `src/app/layout.tsx` — Playfair Display + Geist fonts, site metadata, custom flag favicon `public/italia.svg`.
- `src/lib/geometry.ts` — shared helpers: catmullRomPath, mixHex, easing, clamp.
- `src/components/italian/morphing-hero.tsx` — hero with 5 shapes (nuvola/stella/fiore/gemma/biscotto) as radius functions sampled at 96 angles; rAF loop interpolates radii + gradient colors (hold 1.3s, morph 2.4s, easeInOutCubic), slow rotation, breathing scale, blurred aura; direct DOM updates via refs (no per-frame React re-render); caption doubles as vocabulary micro-lesson (Italian shape names); prefers-reduced-motion static fallback via useSyncExternalStore; floating word chips scoped to SVG wrapper.
- `src/components/italian/vowel-lab.tsx` — IPA vowel trapezoid (drag-vertex): 7 Italian vowels with IPA/words/glosses; draggable handle with pointer capture + keyboard arrows (role=slider, aria-valuetext); live readouts: nearest vowel, match %, height/backness bars with Italian labels, estimated F1/F2 formants; vowel dot click snap with rAF tween; speechSynthesis pronunciation (it-IT).
- `src/components/italian/intonation-studio.tsx` — slider-driven function plots: 4 sliders (base pitch, emotional range, rate, stress boost), 3 phrases, 3 modes (statement/question/exclamation), 4 presets; pitch contour + intensity envelope as smooth SVG curves (Catmull-Rom) that redraw live; live readouts (peak/final/Δ/duration); Web Audio playback of the sculpted melody (triangle osc + gain envelope, graceful error handling).
- `src/components/italian/quiz-section.tsx` — 8 questions; color-pulse feedback: correct → green pulse ring ×2, wrong → red pulse + shake + correct answer revealed green, others dimmed; card-level flash; explanation notes; streak/score; segment progress; animated results ring; framer-motion transitions; aria-live.
- `src/components/italian/step-solutions.tsx` — 3 grammar problems (passato prossimo/ESSERE, article "lo", conditional politeness); steps revealed line by line on a timeline with numbered nodes and color-shifting connector; sentence blank fills with pulsing green chip only when final step earned; tab switching resets; progress bar.
- `src/app/page.tsx` — assembly: sticky blurred header with nav + CTA, hero (headline, CTAs, stats, morphing shape), 4 numbered sections with SectionHeading component, dark footer with flag stripe (min-h-screen flex-col + mt-auto sticky footer).
- Fixed: next.config allowedDevOrigins for preview domain; React lint rule (setState-in-effect → useSyncExternalStore); chip/caption overlap found by VLM audit; step timeline dangling connector + duplicated final sentence; unused imports.

Verification (agent-browser, DOM-level + VLM visual):
- Morph running: path `d` differs across 600ms samples ✓
- Quiz: correct answer pulse green + note; wrong answer red pulse + shake + correct highlighted + others dimmed ✓; auto-advance ✓
- Vowel lab: dot snap → F1=280/F2=750 (exact [u] values) ✓; pointer drag updates aria-valuetext from "close chiusa, front anteriore" → "open aperta, back posteriore" ✓
- Intonation: mode toggle changes curve tail (question y=124.9 rising vs statement y=194.8 falling) ✓; preset changes curve ✓; audio button no crash ✓
- Steps: all 5 revealed progressively, blank fills "è andata", restart appears, tab switch resets ✓
- Mobile 390px: no horizontal overflow, nav collapses ✓; footer exactly at viewport bottom at max scroll (7035px doc) ✓
- VLM audits: hero clean after chip fix; vowel lab defect-free; pitch + intensity plots render with curves/labels/syllables; grammar section no defects ✓
- bun run lint: clean ✓; dev.log: no runtime errors ✓

Stage Summary:
- Deliverable: "Lingua Viva" — interactive Italian learning site at `/` (src/app/page.tsx), all 5 requested features implemented and browser-verified end-to-end.
- Key files: src/components/italian/{morphing-hero,vowel-lab,intonation-studio,quiz-section,step-solutions}.tsx, src/lib/geometry.ts, src/app/{layout,page,globals.css}.
- Stack: Next.js 16 App Router, TypeScript, Tailwind 4 tokens, shadcn Slider, framer-motion, Web Audio API, speechSynthesis, zero new dependencies.

---
Task ID: 2
Agent: Super Z (main agent)
Task: Ampliar "Lingua Viva" a "ITALIANO MASTER" — LMS completo de italiano para hispanohablantes con las 21 secciones especificadas por el usuario: niveles A1–C2 + Desde cero, 4 destrezas, gramática, vocabulario (25 categorías), motor de ejercicios multi-tipo, SRS, diccionario, conjugador, situaciones reales, cultura, evaluación, progreso, tutor IA, gamificación, accesibilidad y pipeline conectado nivel→lección→práctica→evaluación→repaso→progreso con motor adaptativo.

Work Log:
- Fundación: globals.css convertido a paleta dark-aware (tokens CSS vars :root/.dark que alimentan @theme inline → verde/rosso/oro/crema/inchiostro se invierten automáticamente); utilidades textsize (html[data-textsize]), bg-surface, flashcard-flip 3D, scrollbar-thin, estilos print para certificados.
- Estado: src/lib/lms/store.ts — Zustand + persist (localStorage "italiano-master-v1"): perfil, nivel MCER, XP con rangos (Principiante→Gran Maestro), racha diaria con studyDays 30d, lecciones completadas, historial de quizzes, certificados, writing history, SRS Record, errorLog por tema (motor adaptativo), skillStats 7 destrezas, settings (tema/textsize/audioRate/subtítulos/meta diaria), navegación SPA (view + navParams).
- Motores: srs.ts (SM-2 simplificado: grades 0-3, ease 1.3-3.0, intervalos 1d→180d, dueCards, mastered≥21d, curva de retención Ebbinghaus); conjugator.ts (~60 verbos: patrones are/ere/ire/ire-isc + irregulares essere/avere/fare/andare/venire/stare/dare/dire/bere/potere/volere/dovere/sapere/uscire/prendere/mettere/leggere/scrivere/aprire/chiudere/vedere/conoscere + reflexivos; 7 tiempos: presente, passato prossimo (aux+participio con concordancia), imperfetto, futuro, condizionale, congiuntivo, imperativo); tts.ts (gestión voces it-IT, speak con rate, speakSequence para diálogos); adaptive.ts (topicStats, weakTopics <70%, daySeed para palabra del día/misiones).
- Datos: types.ts (tipos CEFR, vocab, ejercicios, gramática, cursos, lectura/escucha/escritura/situaciones/cultura, SRS, nav); vocabulary.ts (~150 palabras, 25 categorías, pron, género/plural, ejemplos, sin/ant/relacionadas); exercises.ts (~110 ejercicios de 6 tipos: mc/tf/fill/order/dictation/translate por niveles A1→C2 + cultura + situaciones + lectura + escucha; fix de comillas anidadas con script Python); grammar.ts (22 temas A1→C2 con explicación ES, ejemplos IT, problemas con pasos revelados); courses.ts (7 cursos: zero 2u×3l, A1 4u×3l, A2 3u×3l, B1 3u×2l, B2 2u×2l, C1 2u×2l, C2 2u×2l = 48 lecciones con pipeline completo); listening.ts (8 tareas: diálogos bar/estación/médico/entrevista + palabras + dictados); reading.ts (6 textos graduados con glosario y preguntas); writing.ts (6 consignas con tips, checklist, modelo línea a línea); conversation.ts (6 escenarios con frases + tutorSeed); situations.ts (8 situaciones: aeropuerto/hotel/restaurante/supermercado/médico/taxi/direcciones/banco, cada una vocab→diálogo→ejercicios→role-play); culture.ts (9 artículos con pregunta interactiva); leveltest.ts (20 preguntas graduadas + computeLevel).
- API: /api/tutor (z-ai-web-dev-sdk, backend only) — 3 modos (chat/correct/roleplay), system prompt adaptado por nivel MCER, corrección con "📝 Correzione", respuestas en español + italiano por nivel.
- Componentes compartidos: quiz-engine.tsx (motor 6 tipos con color-pulse verde/rojo + shake + flash de tarjeta + explicaciones + XP + registro adaptativo + resultados animados); audio-button.tsx (TTS con rate de settings + VoiceHint si no hay voz it); step-reveal.tsx (revelado línea a línea reutilizable con timeline); flashcards.tsx (sesión SRS con flip 3D, 4 botones de grado, reencolado "otra vez").
- Shell SPA: shell.tsx — sidebar 21 secciones en 6 grupos + header (XP/racha/nivel/rango/dark toggle) + drawer móvil + footer sticky con banda tricolor.
- 21 vistas: home (hero MorphingHero + misiones diarias + palabra del día + debilidades adaptativas + niveles), progress (radar 7 destrezas recharts + calendario 14 días + progreso por curso + motor adaptativo + 10 insignias + historial), leveltest (20 preguntas → nivel persistido), courses (7 niveles → unidades → lección con 7 etapas: objetivos/explicación/ejemplos-audio/vocabulario+añadir-SRS/práctica/conversación-tutor/evaluación→completada+XP), grammar (filtro nivel + acordeón + StepReveal + práctica), vocabulary (25 categorías + flip cards + flashcards SRS + búsqueda), skills.tsx (Escucha: diálogos con TTS secuencial + velocidades lento/normale/veloce + preguntas; Lectura: textos con glosario + preguntas; Escritura: textarea + corrección IA + modelo revelado + checklist; Conversación: 6 escenarios + CTA tutor), pronunciation (VowelLab drag-vertex + IntonationStudio sliders + sonidos especiales c/g/gn/gli/sc/doppie/r + pares mínimos con audio), tools.tsx (Conjugador con autocompletado + 7 tiempos + irregulares en rojo; Diccionario con búsqueda IT/ES + filtros + ficha completa con sinónimos/antónimos/relacionadas), situations, culture, tutor (chat con Marco, selector nivel, 3 modos, sugerencias, typing indicator), games (Memoria 8 parejas + Ordina la frase + QuizSection), review (estado SRS + sesión flashcards + rinforzo mirato por temas débiles + SIMULADOR CURVA DEL OLVIDO con 3 sliders → SVG plot con/sin repaso), exams (exámenes por nivel 80% → certificado), certificates (preview + descarga PNG canvas), settings (perfil, tema, textsize, audioRate, meta diaria, subtítulos, export JSON, reset).
- page.tsx: SPA con guard mounted (useSyncExternalStore para evitar setState-in-effect), initVoices; layout.tsx: lang=es + metadata Italiano Master.
- Lint fixes: icon Dictionary→BookMarked; hooks condicionales en LessonView (useMemo antes de early return); setState-in-effect eliminados (quiz reset en handlers, OrderGame estado inicial lazy, menú móvil en handler, page mounted via useSyncExternalStore); nextLesson sin useMemo (React Compiler); skill "situazioni" removida del QuizEngine (no está en SkillStats); ternario como expresión → if/else.
- Bugs corregidos: vocab id duplicado w-conto→w-contocorrente; setOpenLesson→setOpenLevel en LessonView back; comillas rectas anidadas en exercises.ts y leveltest.ts; carácter cirílico en culture.ts; typo "Veniza"→"Venezia".

Verification (agent-browser E2E + VLM):
- Inicio renderiza: sidebar 21 secciones, hero con forma morfológica, misiones, palabra del día (neve), niveles MCER ✓ (VLM audit: sidebar+hero+tarjetas+niveles OK)
- Test de nivel: 20 preguntas respondidas → nivel C2 asignado, persistido en localStorage ✓
- Pipeline de lección C2: objetivos→práctica (quiz color-pulse correcto: clase .quiz-correct ✓; incorrecto: .quiz-wrong + shake ✓)→evaluación→"Lezione superata!" + completedLessons=1 persistido ✓
- Pronunciación: vowel lab 4 SVG/12 paths/19 circles, drag-vertex con teclado actualiza aria-valuetext "mid media, front anteriore"→"open-mid semi-aperta"→"central centrale" ✓; IntonationStudio 4 radix sliders + 10 svg paths ✓
- Repaso: simulador curva del olvido — 3 range inputs, "con ripassi" 1%→12% al subir repasos a 5 (coincide con cálculo manual SM-2) ✓
- Tutor IA: mensaje enviado → respuesta de Marco recibida vía POST /api/tutor 200 ✓ (SDK end-to-end)
- Modo oscuro: .dark aplicado, paleta cálida legible (VLM audit OK) ✓
- Móvil 390px: sin overflow horizontal; burujas del chat dentro de márgenes (verificación programática) ✓
- Escucha: diálogo "Al bar" 6 líneas + velocidades lento/normale/veloce + audio por línea ✓
- Vocabulario: 25 categorías → Familia → flashcards → tarjeta volteada + graduada "Bien" → SRS persistido (ease 2.52, interval 1d, 9 tarjetas) ✓
- Juegos: memoria 25 categorías → partida 16 cartas 0/8, volteo de carta ✓
- bun run lint: 0 errores, 0 warnings ✓; tsc --noEmit: limpio ✓; dev.log: GET / 200, POST /api/tutor 200, sin errores de runtime (solo EADDRINUSE residual de reinicios del dev.sh del sistema) ✓

Stage Summary:
- Deliverable: "Italiano Master" — LMS completo de italiano (español UI) en `/`, evolución de "Lingua Viva" que conserva las 5 características interactivas originales (hero morfológico, drag-vertex readouts en VowelLab, slider-driven plots en IntonationStudio + nuevo simulador de curva del olvido, color-pulse quiz feedback en todo el motor de ejercicios, step-by-step solutions en gramática/modelos de escritura) integradas en las 21 secciones.
- Arquitectura: SPA cliente en `/` (única ruta visible), Zustand+persist, 21 vistas, 15 archivos de datos/motores en src/lib/lms/, API /api/tutor con z-ai-web-dev-sdk.
- Contenido: 7 cursos/48 lecciones con pipeline completo, ~150 palabras, ~110 ejercicios, 22 temas de gramática, 8 situaciones, 9 artículos de cultura, 8 tareas de escucha, 6 lecturas, 6 consignas de escritura, 6 escenarios de conversación, test de nivel de 20 preguntas, certificados descargables.
- Motor adaptativo: cada error registra tema → debilidades <70% → "Rinforzo mirato" en Repaso + recomendaciones en Inicio/Progreso.
- SRS: SM-2 simplificado con flashcards, grados 0-3, intervalos crecientes, tarjetas dominadas ≥21d.
- Capturas en download/: preview-home.png, preview-dark.png, preview-mobile.png, preview-mobile-tutor.png.
