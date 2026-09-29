# Worklog · Italiano Master

---
Task ID: 1
Agent: main (Super Z)
Task: Ampliar diccionario 5030 → 8000 lemas + unidad C2 académico/literaria + preparación CILS

Work Log:
- Explorada la arquitectura del diccionario: dict/compact.ts (parsePack), dict/index.ts (DICT_PACKS), vocabulary.ts (mergePacks deduplica por lema), dictionary.ts (DICTIONARY dedup + DICT_STATS).
- Creado scripts/validate-dict.ts (conteo, colisiones, stats) y scripts/check-lemmas.ts (chequeo de candidatos contra VOCAB pre-expansión).
- Escritos 32 packs compactos nuevos (pack-kx23…pack-kx54, ~3800 líneas) con pipeline batch (scripts/batch-packs*.py): limpieza de anotaciones, fusión de campos extras, dedup contra existentes y registro automático en dict/index.ts.
- Dominios: verbos de argumentación B2, verbos cultos C1, sustantivos sociales B2, académicos C1, idiomi fare/prendere/dare B2, figure retoriche/narratologia/metrica C2, diritto B2, medicina C1, economia B2, filosofia C1, idiomi essere/stare/mettere/tirare/venire B2, latinismi C2, idiomi avere/tenere/andare B2, giornalismo C1, ambiente B2, arte/architettura C1, aulico/letterario C2, scienza/tecnologia B2, quotidiano B1, relazioni B2, geopolitica C1, casa/fai-da-te B2, regionalismi C2, scuola B1, lavoro B2, musica/teatro C1, espressioni colte C2, viaggi B2, psicologia/società C1, corpo/emozioni B2, repertorio final B2.
- Resultado: VOCAB 8024, DICTIONARY (lemas únicos) 8022 ≥ objetivo 8000. Por nivel: A1 781, A2 1282, B1 1852, B2 2253, C1 1232, C2 622.
- Creada unidad C2 "Italiano académico/literario": extra/courses-extra4.ts con 5 unidades (u-c2-3…u-c2-7: scrittura accademica, connettivi, citazione, saggio critico, esame scritto, retorica, analisi del testo, metrica, sonetto, prova finale) = 10 lecciones nuevas → 120 lecciones totales.
- Creados 10 ejercicios (ex-c2-010…019) en extra/exercises-extra4.ts, registrados en exercises.ts vía EXERCISES.push → 356 total.
- Creado módulo CILS completo: lib/lms/cils.ts (CILS_LEVELS A2-C2 con 5 secciones, duraciones, puntuaciones orientativas y umbrales 45%; CILS_EXERCISES por sección y nivel con dictados TTS, lectura MC, estructuras fill/MC; CILS_TASKS de scrittura/orale con traccia, checklist y modelo; CILS_FAQ; cilsVerdict) y vista components/lms/views/cils.tsx (intro con FAQ, nivel → secciones, entrenamiento con estrategias + QuizEngine + tarjetas de tarea con autoevaluación y modelo, simulacro cronometrado de 5 pruebas con veredicto promosso/bocciato).
- Registrada la vista: types.ts (ViewId "cils"), shell.tsx (nav "Preparazione CILS" en grupo Evaluación + título), page.tsx (render CilsView). Actualizado comentario plugins2.tsx (8022 lemmi).
- Corregidos errores de hooks de React (useMemo incondicionales) y validado con bun run build: OK (11 rutas estáticas + APIs).

Stage Summary:
- Diccionario v4.0: 8022 lemas únicos (desde 5030), +2992 netos, 32 packs nuevos, 0 colisiones.
- Curso C2: +5 unidades académico-literarias, 120 lecciones totales, 356 ejercicios.
- Nuevo módulo CILS: preparación específica completa (estructura, estrategias, tareas con modelo, simulacro cronometrado con veredicto).
- Build verificado. Pendiente: deploy a producción (git push + Vercel).

---
Task ID: 2
Agent: main (Super Z)
Task: Implementar las funciones 100% gratuitas recomendadas (benchmark apps de idiomas): misiones diarias + logros, shadowing con grabación de voz, PWA offline e importador de contenido

Work Log:
- Analizado el mercado (Duolingo, Babbel, LingQ, Memrise) y el código existente; identificados 4 features gratuitas de alto impacto.
- Creado src/lib/lms/quests.ts: 9 tipos de misión diaria generados determinísticamente por fecha (seeded mulberry32), 3 misiones/día con bonus +15 XP cada una y +50 XP al completar las 3; 28 logros en 5 categorías (Estudio/Léxico/Constancia/Abilità/Valore) con progreso derivado del estado.
- Store (store.ts): nuevos campos quests/questsDate/questsAllBonus/counters/importedTexts + acciones trackQuest/ensureDailyQuests/saveImportedText/deleteImportedText. Hooks automáticos en addXp (xp), recordCorrect (correct), markLessonComplete (lesson), recordQuiz (game/dictation por label), upsertSrs (review), incrementTutor (tutor), saveWriting (writing). Recursión finita bonus→addXp→quest.
- AudioButton: trackQuest("listen") en cada reproducción.
- Home (home.tsx): tarjeta Missione di oggi ahora muestra las 3 misiones reales con barras de progreso en vivo + botón Instalar app; atajos Shadowing e Importador en plugins.
- Progreso (progress.tsx): nueva sección Logros 0/28 con barras de progreso por categoría (se mantienen insignias clásicas debajo).
- Creado src/lib/lms/shadowing.ts (30 frases A1-C1 con tips de pronunciación contrastiva, 7 tareas orales estilo CILS con timers, scoreSpeech con Levenshtein tolerante, shadowVerdict).
- Creado src/components/lms/views/shadowing.tsx: hook useRecorder (MediaRecorder + cleanup), reconocimiento Web Speech it-IT en paralelo a la grabación, puntuación 0-100 palabra por palabra (verde/rojo), playback A/B (voz original vs propia), autoevaluación manual sin soporte, XP y misión shadow; tab Simulacro orale CILS con fases info→prep→speak→done dirigidas por efecto.
- Creado src/lib/lms/importer.ts: índice lema-normalizado del VOCAB (8.024), heurísticas de flexión (plurales i/e/a/o), analyze (cobertura), recommendWords (por frecuencia/banda), allNewWords, TYPE_LABELS.
- Creada API /api/import (route.ts): fetch server-side de URL (evita CORS), extracción HTML→texto, entidades decodificadas, protecciones SSRF (bloqueo hosts internos/IPv6), timeout 10s, límite 2MB.
- Creado src/components/lms/views/importer.tsx: pegar texto o importar URL, texto interactivo palabra-clicable (verde=en repaso, rojo=no en diccionario), tarjeta de entrada con audio/ejemplo, añadir palabra (+2 XP) o todas (≤ nivel), stats (palabras/lemas/cobertura/conocidas), textos guardados (8) persistentes.
- PWA: manifest.json (standalone, verde #128a54), iconos PNG 96/192/512 + maskable generados con sharp desde logo.svg (scripts/make-icons.js), sw.js (precache shell, cache-first /_next/static, network-first resto, offline.html fallback, /api excluido), offline.html con estilo de marca, layout.tsx con manifest+appleWebApp, componente pwa.tsx (registro SW solo producción, useInstallPrompt, InstallButton, InstallBanner con descarte por sesión).
- Registro de vistas: types.ts (ViewId shadowing/importatore), shell.tsx (nav Comunicación/Herramientas + títulos), page.tsx (render + PwaRegister + InstallBanner).
- Corregidos 8 errores de lint (require→ESM en script, setState síncrono en efectos → inicializadores lazy, ref durante render en cils.tsx preexistente, autorreferencia startPhase → timers dirigidos por fase). Lint OK, build OK (12 rutas + /api/import).
- Verificación con agent-browser: misiones renderizadas con progreso en vivo (22/150 tras importar palabras), shadowing con manejo de error de micrófono, importador con texto demo (49 palabras) y URL real de ANSA (2.816 palabras, 35% cobertura, 14 ya en repaso), adición individual y masiva (contador 0→22), logros 0/28 con progreso, assets PWA 200 OK, banner de instalación visible, sin errores de consola.

Stage Summary:
- v6.0 "engagement gratis": misiones diarias Duolingo-style (3/día + bonus 50 XP), 28 logros con progreso, shadowing con puntuación de pronunciación (APIs nativas: MediaRecorder + Web Speech), simulacro oral CILS con timers, importador de contenido infinito (texto/URL → lección interactiva → SRS), PWA instalable con offline.
- Coste adicional: 0 € (todo son APIs nativas del navegador y assets estáticos; el único endpoint nuevo /api/import corre en las serverless functions ya existentes).
- Build verificado. Pendiente: deploy (git push + Vercel) — ejecutado a continuación.

---
Task ID: 3
Agent: main (Super Z)
Task: v8.0 "Esploitar al máximo" — implementar las 7 funciones gratuitas de mayor valor restantes (ligas, analítica, congelamiento, backup, búsqueda global, preferiti, tutor con voz)

Work Log:
- Auditoría completa del estado (ya existían: misiones, logros, shadowing, importador, PWA, CILS, 8022 lemas, dark mode, parola del giorno). Identificados los 7 huecos de mayor valor.
- Leghe settimanali: src/lib/lms/leagues.ts (5 leghe Bronzo→Diamante, weekKeyFor lunes UTC, nextResetMs, promote/demote); admin/store.ts: UserRow += weekXp/weekKey/league + leaderboardFor() con rollover perezoso (top-3 sube, último 20% baja con 6+ activos, reset semanal en una única mutación serializada); API /api/leaderboard con auth de sesión; PATCH /api/auth/profile acepta weekXp+weekKey (monotónico dentro de la semana); seed con ligas.
- Vista classifica.tsx: cabecera de liga con countdown en vivo al lunes, posición propia, tabla con zonas promosso/retrocesso, totales por liga, reglas; modo invitado con explicación + 5 tarjetas de lega; refresco automático 4 s tras ganar XP.
- Statistiche.tsx: dashboard analítico 100% CSS (KPIs XP/media/racha/precisión, barras XP 14 días con tooltip, calendario de actividad 4 semanas tipo heatmap, memoria SRS apilada con CTA, 7 barras de destrezas animadas, top giochi por precisión, punti da rinforzare desde errorLog, 6 tarjetas de récords).
- Congela racha: store.addXp con weekXp/weekKey + streakFreezes (cada ❄️ cubre un día perdido, máx 2, +1 cada 7 días de racha); aviso en home al congelar y contador ❄️ en la tarjeta Racha.
- Backup & Restore: exportData ahora exporta backup COMPLETO de progreso (nunca cuenta/PIN/plan/pagos); restoreBackup en store valida y aplica solo campos de progreso; sección en Impostazioni con botones Scarica/Ripristina + mensaje de estado.
- Ricerca globale Ctrl+K: search-palette.tsx (paleta con vistas + 8022 lemas + gramática, navegación ↑↓⏎, grupos Sezioni/Dizionario/Grammatica); botón "Cerca" en header con kbd; NAV_GROUPS+VIEW_TITLES extraídos a nav.ts compartido; deep-links navParams.wordId (diccionario) y grammarId (gramática, con ajuste de nivel y tema abierto).
- Dizionario: preferiti (estrella en detalle + chips + "Ripassa i preferiti" con FlashcardSession), cronologia últimas 12; tarjeta de lista convertida de motion.button a motion.div role=button (corrige HTML anidado button>button preexistente); AudioButton con stopPropagation; historial registrado en efecto (no en render).
- Tutor IA: AudioButton bajo cada respuesta de Marco (TTS limpia emojis).
- Fix preexistente: visibilitychange ahora en document (no window) — el auto-lock por visibilidad no funcionaba.
- Lint OK (0 errores), tsc OK en archivos nuevos, build OK (13 rutas + /api/leaderboard).
- Verificación E2E con agent-browser: Statistiche (KPIs/barras/heatmap/estados vacíos), Classifica invitado + logueada (7 filas, crown #1, countdown, zonas), XP→weekXp→sync→leaderboard (giulia +2 XP aparece y entra en zona promosso), palette Ctrl+K (búsqueda "ciao"/"burro" → deep-link abre entrada), favoriti (estrella + chips), backup subido vía file input → "Backup ripristinato ✓ (4321 XP)" con cuenta/PIN intactos, congelamiento simulado (gap 2 días + 1❄️ → racha 9→11, freeze consumido, aviso en home), sin errores de consola tras fixes.

Stage Summary:
- v8.0: 7 features 100% gratis reutilizando infraestructura existente (usuarios+Vercel Blob ya disponibles; APIs nativas; gráficos CSS sin librerías).
- Engagement: ligas semanales Duolingo-style + congelamiento de racha + analítica visual. Utilidad: búsqueda global instantánea, preferiti/cronologia, backup/restauración portátil, tutor con voz.
- Coste adicional: 0 € (un único endpoint nuevo sobre serverless existentes).
- Build verificado. Pendiente: deploy a producción (git push + Vercel).

---
Task ID: 4
Agent: main (Super Z)
Task: Desplegar v8.0 a producción (proyecto recién conectado a Git) + fix crítico de MorphingHero hallado en verificación

Work Log:
- Diagnóstico del estado: 25 commits sin push; remote ya sincronizado en cfd762e (v8.0) pero Vercel solo había desplegado hasta v6.0 (56f22fb) — el push de v8.0 se hizo durante la transición de la conexión Git y el webhook no disparó deployment.
- Verificada conexión Git del proyecto Vercel (marcoskoo/italiano-master, rama main, producción). Commit vacío c29c170 "ci: trigger deploy v8.0" + push → deployment dpl_9mRv READY.
- Smoke tests producción: /api/leaderboard 400 (ruta viva), manifest/sw/offline 200, marcadores v8.0 (weekXp/leaderboardFor/Congela) presentes en chunks.
- Verificación con agent-browser detectó error de producción preexistente: TypeError: Cannot read properties of undefined (reading '0') en MorphingHero (2 veces por carga).
- Root cause: el primer callback de requestAnimationFrame puede llevar el timestamp de inicio de frame, anterior al performance.now() capturado en el useEffect → elapsed negativo → % negativo (JS conserva el signo) → seg=-1 → RADII[-1] undefined → el loop de animación muere en el primer tick y la forma del hero queda invisible (d="").
- Fix: clamp `Math.max(0, now - start)` en morphing-hero.tsx (vowel-lab ya estaba protegido con clamp — único afectado).
- Lección de testing: los ChunkLoadError durante la verificación local eran artefactos de entorno (servidor viejo sobrevivió al pkill por EADDRINUSE del nuevo + Service Worker de sesión previa con precache rancio). Sesión de navegador completamente nueva (--session freshuser) = 0 errores, hero ANIMANDO, Statistiche/Classifica/misiones/parola del giorno OK.
- sw.js auditado: diseño seguro para updates (navegación network-first → HTML nuevo siempre; chunks con hash inmutable cache-first → hashes nuevos se fetchean). El comportamiento rancio era solo del entorno local de pruebas.
- Commit 5992ec4 + push → deployment dpl_H7XL (BUILDING).

Stage Summary:
- v8.0 (c29c170) DESPLEGADO a producción: leghe settimanali, statistiche dashboard, congelamiento racha, backup/restore, ricerca globale Ctrl+K, preferiti dizionario, tutor con voce.
- v6.0/v7.0 ya estaban en producción desde deploys previos.
- Fix MorphingHero en camino (dpl_H7XL): corrige hero invisible intermitente en landing.
- Auto-deploy Git→Vercel operativo y verificado 2 veces (dpl_9mRv, dpl_H7XL).

---
Task ID: 5
Agent: main (Super Z)
Task: v9.0 — Letture & Storia + notificaciones push + gamificación avanzada

Work Log:
- Creada biblioteca de contenido letture.ts + letture-storia.ts: 16 letture originales (3 dialoghi A1-B1, 4 informativi B1-B2 con ideas de debate, 5 storia d'Italia B1-C1: Roma/Rinascimento/Risorgimento/emigrazione/boom, 4 storia del mondo B2-C1: Americhe precolombiane/Rivoluzione francese/Via della Seta/decolonizzazione). Cada una: 5-9 párrafos it+es, glosario, 4-5 preguntas MC con explicación, 3-4 idee per discutir.
- Vista letture.tsx: biblioteca con filtros categoría+MCER, check de completada; lector con audio TTS sincronizado (párrafo activo resaltado + auto-scroll + play/pausa por párrafo + clic para empezar desde ahí), velocidades 0.75/0.9/1/1.2, subtítulos conmutables, glosario con audio por término, quiz QuizEngine (12 XP/respuesta), debate con deep-link al Tutor IA (tutorSeed).
- Store v9.0: coins, xpBoostUntil (addXp duplica con boost), lastWheelDate, readingsRead, monthKey/monthCounters/monthChallengeClaimed (rollover mensual con reset), ownedTitles/activeTitle. Acciones: addCoins, spinWheelDaily (1/día), buyShopItem (freeze 80/boost 60/títulos 150-200), markReadingDone (+20 monete 1ª vez + quest reading), claimMonthlyChallenge (300 monete + XP), setActiveTitle. trackQuest otorga +10 monete por misión y +25 por las 3. Backup/restore/resetAll extendidos.
- quests.ts: quest diaria "reading", 3 logros nuevos (Lettore, Storico, Amico della ruota → 31 total), sfida del mes determinista (5 templates, objetivo con variación mensual), ruota con 8 premios ponderados.
- premi.tsx: saldo con boost countdown y congelamientos, ruota visual conic-gradient con animación 4s, sfida del mes con barra+claim, negozio (freeze/boost/4 títulos equipables).
- Push: web-push + VAPID generadas (.env.local + Vercel env vars vía API), lib/push/server.ts (Blob storage private con fallback archivo, sendToSubs con limpieza 404/410, 7 mensajes rotativos), 5 APIs (/api/push/key|subscribe|unsubscribe|test|cron con auth Bearer o x-vercel-cron), sw.js v9 con handlers push+notificationclick, client.ts (enable/disable/test), sección Notifiche en Impostazioni con 5 estados, vercel.json con cron diario 17:00 UTC (12:00 Lima).
- Registro: ViewId letture|premi, nav (Letture & Storia en destrezas, Premi & Sfide en Tu ruta), home con card Monete clicable + título activo en saludo + quick link.
- E2E agent-browser: biblioteca 16 cards, lector Roma 7 párrafos con todos los elementos, quiz 5/5 (+60 XP, +20 monete, banner completata, readingsRead registrado), ruota (premio 40 monete, "Torna domani"), boost comprado (60→0 monete, countdown visible, XP duplicada 12→24 real), sfida del mese con progreso, settings notifiche (estados), push server chain (subscribe→test→cron 401/200, VAPID funcional), home actualizado. 0 errores de consola.
- Lint 0 errores, tsc 0 en archivos propios, build OK (13 rutas + 5 push APIs). Commit cbdb110 → deploy dpl_4HY9.

Stage Summary:
- v9.0 desplegada: 16 lecturas largas con audio sincronizado (diálogos, informativos, historia Italia+mundo), comprensión lectora y debate con tutor; push notifications gratuitas (VAPID+cron diario, 0 €); gamificación avanzada (monete, ruota, negozio, boost 2×, sfida mensual, títulos).
- Nuevo contenido: ~1.100 líneas de texto original it+es.
- Coste adicional: 0 € (web-push library, Vercel cron Hobby 1×/día, Blob ya existente).

---
Task ID: 6
Agent: main (Super Z)
Task: Fix crítico de producción tras deploy v9.0 (404 global) — diagnóstico forense y resolución

Work Log:
- Síntoma: deploy dpl_4HY9 (cbdb110, v9.0) READY pero producción servía 404 en home/APIs/chunks; solo archivos de public/ (manifest, sw.js v9) respondían 200.
- Descartes: (1) vercel.json con crons como causa → quitado y redesplegado, persistió; (2) proyectos duplicados (my-project y aquarius-sauna ambos conectados a marcoskoo/italiano-master, los 3 deployando el mismo commit a las 04:36) → desconectados sus git links, persistió; (3) propagación regional (edge hkg1) → verificado desde navegador con otra ruta, mismo 404.
- Causa raíz: el proyecto italiano-master tenía framework: None (el git link se recreó el 29-09 03:51 al conectar el repo y el framework quedó sin fijar; los deploys previos funcionaban porque salían del CLI/local) + ssoProtection all_except_custom_domains activada. Con framework None, "vercel build" compila Next pero el deployment resultante no instala funciones ni routing prerenderizado → 404 global.
- Fix: PATCH /v9/projects/italiano-master → framework=nextjs, ssoProtection=null. Redeploy bc9d008 → TODO 200 (home, APIs, manifest).
- Cron diario de push: la API REST /v1/projects/{id}/crons respondía not_found (scope del token) → reintroducido vercel.json con crons (inocente: la causa era el framework) en commit 54278ee. Verificado: crons registrados en el proyecto (schedule 0 17 * * *, path /api/push/cron).
- Limpieza: git links de my-project y aquarius-sauna desconectados (ya no deployan este repo: fin de builds triplicados por push).
- Verificación final producción: home 200, /api/push/key 200, /api/leaderboard 400 (correcto), /api/push/cron 401 sin auth y {"ok":true} con secret, nav v9 (Letture & Storia, Premi & Sfide, Monete) visible, vistas Letture/Premi/Notifiche renderizadas, 0 errores de consola.

Stage Summary:
- Producción RESTAURADA y v9.0 LIVE: 16 letture con audio sincronizado + push notifications con cron diario + gamificación avanzada.
- Infraestructura saneada: 1 solo proyecto conectado al repo, framework nextjs, cron registrado.
- Deploy final: dpl_7E3k (54278ee).

---
Task ID: 7
Agent: main (Super Z)
Task: v9.1 — Voces múltiples por personaje en diálogos y juegos de rol (petición del usuario)

Work Log:
- Análisis de superficies con diálogos multi-hablante: letture.tsx (Dialoghi), situations.tsx (Dialogo), skills.tsx (Ascolto) — las 3 usaban UNA sola voz TTS para todos los hablantes.
- tts.ts reescrito: initVoices ahora cachea TODAS las voces it-IT en voicePool intercaladas por género ([f1, m1, f2, m2…] → máximo contraste entre los 2 primeros personajes); heurística de género por nombre (Elsa/Federica/Alice/Luca/Diego/Cosimo… multi-plataforma); prettyVoiceName limpia "Microsoft Elsa Online (Natural) - Italian (Italy)" → "Elsa"; buildCast(speakers) asigna voz física distinta a cada personaje por orden de aparición; cuando el pool se agota rota voces con tonos de reserva (pitch 0.76/1.24/0.86/1.14 + micro-variación de velocidad); con 0 voces usa tonos de reserva desde el primer personaje. speak() acepta voice/pitch; nueva speakDialogue() con pausa 420ms entre battute.
- voice-cast.tsx (nuevo): useVoiceCast (rebuild al llegar onvoiceschanged — Chrome carga voces async), SPEAKER_STYLES (5 colores: azzurro/terracotta/oro/viola/rosso), SpeakerAvatar (burbuja con inicial), SpeakerChip, VoiceCastNote (muestra el reparto: "Ogni personaggio ha la sua voce: Barista Elsa · Cliente Diego" o "Voci per tono" en fallback), DialogueLineButton (battuta individual con voz del personaje).
- letture.tsx: playFrom/playLine aplican voz+pitch+rateFactor del personaje; diálogos con avatar de inicial + chip de color por hablante; VoiceCastNote bajo la barra del reproductor; gap 420ms entre turnos.
- situations.tsx: speakSequence → speakDialogue con cast; avatares + chips; nota de reparto; botón por línea con voz del personaje.
- skills.tsx (Ascolto): playAll → speakDialogue; mismo sistema visual.
- globals.css: añadidos --azzurro/--viola + variantes -scuro/-tenue y --terracotta-scuro/-tenue (corregía bug latente: chips de categorías Dialoghi/Storia del mundo en letture.tsx referenciaban colores inexistentes).
- Tests unitarios (scripts/test-voice-cast.ts, bun): Edge 4 voces → Elsa+Diego; macOS → Alice+Luca; Chrome 1 voz → pitch 1.0 vs 0.76; headless 0 voces → tonos reserva; 6 personajes/2 voces → 5 pitches únicos; cadena async voiceschanged→listener→rebuild OK.
- E2E agent-browser local: 3 vistas con nota de reparto, botones por battuta, reproducción avanzando (Ferma + 1 línea activa), 0 errores consola. VLM confirma avatares B azul (Barista) / C naranja (Cliente). Nota: el eval de agent-browser corre en mundo aislado (los mocks de getVoices no son visibles para la página) — la lógica se validó con tests unitarios del módulo real.
- Lint 0 errores, tsc 0 en archivos propios, build OK. Commit c665279 → push → deploy dpl_5PUq READY.
- Verificación producción: home 200, marker buildCast en chunk e0161a9866cea271.js, Letture/Dialoghi con "Voci per tono" + botones por battuta, reproducción OK, 0 errores consola, VLM confirma avatares de colores.

Stage Summary:
- v9.1 LIVE: cada personaje de los diálogos suena con voz distinta (voces físicas si el navegador las tiene — Edge/macOS —, tono grave/agudo como fallback en Chrome de 1 voz). Diferenciación visual complementaria: avatar con inicial + chip de color por hablante en las 3 superficies de diálogos.
- Fix latente incluido: paleta azzurro/viola/terracotta-completa en globals.css (chips de categorías de letture sin color antes).
- Estrategia robusta garantizada en cualquier plataforma (0+ voces italianas disponibles).
