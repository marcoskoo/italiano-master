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

---
Task ID: 3
Agent: Super Z (main agent)
Task: Convertir "Italiano Master" en versión PRO · PREMIUM · PLATINUM — sistema de planes con gating de funciones, página de precios con checkout demo, contenido exclusivo, certificados verificados, plan semanal personalizado, soporte prioritario, export offline y estética platinum con shimmer.

Work Log:
- plans.ts (nuevo): 4 planes (FREE 0€/PRO 7,99€/PREMIUM 12,99€/PLATINUM 19,99€, anual −20%) con PlanLimits (tutorPerDay 5/20/100/∞, writingPerDay 2/5/∞/∞, levels, advancedAnalytics, exclusiveContent, verifiedCerts, weeklyPlan, offlinePack, prioritySupport), helpers (planRank, hasAtLeast, levelAllowed, requiredPlanForLevel, todayUsage) y generateWeeklyPlan (7 días determinista según nivel/tarjetas debiles/puntos débiles, actividades clicables a vistas).
- store.ts: añadidos plan/planBilling/planSince + contadores diarios tutorCount/writingCount (reset a medianoche) + setPlan/incrementTutor/incrementWriting + defaults en resetAll. types.ts: ViewId "piani".
- globals.css: utilidades platinum — plan-platinum-bg (gradiente metálico animado shimmer), plan-gold-bg, text-shimmer, animate-pop-in, animate-crown-float, ring-platinum, border-premium + reduced-motion guards.
- plan-badge.tsx (nuevo): PlanChip (chip del plan con color/icono por plan, clicable), UpgradeCta (botón dorado ⚡PRO), LockedOverlay (overlay de bloqueo con CTA), LockedFeatureCard (tarjeta de feature bloqueada con bullets), PremiumBanner (banner shimmer para Home FREE).
- pricing.tsx (nuevo): hero platinum con coronas flotantes, toggle Mensile/Annuale −20%, 4 PlanCard (FREE/PRO/PREMIUM "IL PIÙ SCELTO"/PLATINUM "ELITE" con fondo shimmer y ring), matriz comparativa de 11 características × 4 planes, FAQ acordeón (4 items con aviso demo), checkout modal con 3 estados (resumen con precio/fatturazione/features + aviso demo → processing 1.4s → success "Benvenuto nel piano X!" con corona pop-in y CTA a inicio).
- shell.tsx: nav "Piani PRO" (grupo Tu ruta, icono Crown), header con PlanChip (free → UpgradeCta dorada "⚡ PRO", resto → chip del plan), logo con anillo plan-platinum-bg para platinum, VIEW_TITLES.piani.
- Gating aplicado:
  · CoursesView: tarjetas de nivel con 🔒+plan requerido (B1/B2→PRO, C1/C2→PREMIUM) → click a pricing; LessonView con guard de plan.
  · Home: niveles MCER con candado; PremiumBanner solo FREE; plan semanal 7 días solo PREMIUM+ (día actual resaltado, 14 actividades clicables).
  · TutorView: contador X/N messaggi (rojo cerca del límite), bloqueo con tarjeta upgrade al agotar, ∞ para platinum.
  · WritingView: contador correzioni IA oggi, bloqueo al límite, ∞ premium+.
  · ReadingView: lecturas B2/C1 marcadas 🔒 PREMIUM (navegan a pricing si no desbloqueadas).
  · ConversationView: escenarios B1/B2 (colloquio/dibattito) exclusivos PREMIUM con tarjeta de desbloqueo.
  · ProgressView: radar + calendario 14 días + motor adaptativo reemplazados por LockedFeatureCard en FREE.
  · ExamsView: exámenes por nivel con candado según plan.
  · CertificatesView: verificationCode determinista (ITM-XXXX-XXXX), sello VERIFICATO en preview y banda dorada + código en el PNG canvas para platinum.
  · SettingsView: sección Abbonamento (plan actual con emoji/billing/fecha, Gestisci piani, downgrade con confirmación), soporte prioritario 24/7 (platinum), pacchetto offline PLATINUM (export JSON completo con palabras SRS) o candado.
- page.tsx: vista "piani" conectada.

Verification (agent-browser E2E):
- Usuario FREE nuevo: header muestra CTA "⚡ PRO" ✓; pricing con 4 tarjetas + toggle + matriz + FAQ ✓
- Checkout PLATINUM (anual): modal resumen con aviso demo → processing → "Benvenuto nel piano PLATINUM!" ✓; store persiste plan=platinum, billing=yearly, since=hoy ✓
- PLATINUM activo: header chip PLATINUM + logo con anillo shimmer ✓; inicio sin banner y sin candados, plan semanal con 7/7 días y 14 actividades clicables (navegación a cursos verificada) ✓; cursos 7/7 desbloqueados ✓; tutor "messaggi ∞" ✓; lecturas sin candados ✓; settings con Abbonamento + supporto prioritario + pacchetto offline ✓; certificado con sello VERIFICATO y código ITM-0KHE-0HWK ✓
- Downgrade a FREE (settings con confirmación): cursos bloqueados 4 (B1/B2→PRO, C1/C2→PREMIUM) ✓; analíticas (radar/calendario/motor) como LockedFeatureCard con 3 CTAs ✓; tutor contador 0/5 messaggi ✓; simulado 5/5 → bloqueo con tarjeta "Passa a PRO" y input reemplazado ✓
- Plan PRO intermedio: chip PRO, solo C1/C2 bloqueados (PREMIUM), radar desbloqueado ✓
- VLM audit (pricing + platinum home): 4 tarjetas con PLATINUM metálica destacada, toggle y tabla OK, sin defectos visuales ✓
- Móvil 390px (pricing): sin overflow horizontal ✓
- bun run lint: 0 errores/0 warnings ✓; tsc: limpio ✓; dev.log: GET / 200 sin errores runtime ✓

Stage Summary:
- Deliverable: "Italiano Master PRO · PREMIUM · PLATINUM" — capa freemium completa sobre el LMS: 4 planes con gating real en 8 vistas, página de precios premium con checkout demo, contenido exclusivo, certificados verificados con código único, plan semanal adaptativo, export offline y soporte prioritario, con estética platinum (shimmer metálico) coherente en toda la app.
- Nota técnica: el gating es funcional de verdad (límites diarios con reset a medianoche, bloqueos por nivel, upgrades/downgrades instantáneos que persisten en localStorage); los "pagos" son demo explícita.
- Archivos nuevos: src/lib/lms/plans.ts, src/components/lms/plan-badge.tsx, src/components/lms/views/pricing.tsx. Modificados: store, types, globals.css, shell, page, views/{courses,tutor,skills,progress,home,exams}.
- Capturas: preview-pricing.png, preview-platinum-home.png, preview-cert-verified.png, preview-weekly-plan.png, preview-pricing-mobile.png.

---
Task ID: 4
Agent: Super Z (main agent)
Task: Añadir PANEL ADMIN con control total de la app (usuario: Mkoo, password: Mk/06612) — administrar, gestionar y tener acceso completo a la plataforma Italiano Master.

Work Log:
- Prisma: nuevo schema (User con role/level/plan/xp/streak/lessonsDone/wordsInSrs/active/lastSeen, Setting key/value, TelemetryEvent con índices) → db:push. Seed scripts/seed-admin.ts: admin Mkoo (hash sha256 "italiano-master::user::pass"), 6 estudiantes demo con progreso, config por defecto, 83 eventos de telemetría 7 días.
- Lib servidor src/lib/admin/server.ts: hashPassword, getSetting/setSetting, token admin bearer (UUID 7d TTL), requireAdmin guard, getAppConfig/saveAppConfig (merge defensivo), logEvent/logAdminAction.
- 13 API routes: /api/app-config (GET bundle público: config + vocabOverrides + lessonOverrides + customExercises + version con hash djb2 del contenido), /api/telemetry (POST + lastSeen), /api/auth/login (ambos roles; admin recibe token), /api/auth/logout, /api/auth/profile (GET progreso servidor + PATCH con XP monotónico Math.max — nunca baja), /api/admin/{overview,users,settings,content,activity,export,reset,seed} (todas con Bearer; Mkoo protegido contra auto-eliminación).
- Cliente: src/lib/lms/appconfig.ts (AppConfig + bundle + defaults), remote.ts (getClientId, token localStorage, fetchAppConfig, telemetry fire&forget, login/logout, syncProfile debounced, fetchServerProgress, adminFetch), overrides.ts (motor que reconstruye VOCAB/COURSES/EXERCISES in place desde copias prístinas + aplica precios/flags; exporta snapshots prístinas para el panel; setPlansDisabled).
- plans.ts: flag PLANS_DISABLED + planLimits() (todos con límites platinum si el admin desactiva planes); hasAtLeast/levelAllowed/requiredPlanForLevel la respetan.
- store.ts: account, remoteConfig, configVersion, loginAccount (adopta displayName/level/plan y max(xp,streak) servidor), adoptServerProgress, logoutAccount, applyRemoteConfig (aplica overrides + forceDefaults), telemetría en markLessonComplete/recordQuiz/addCertificate/setLevel/login.
- shell.tsx: nav "Panel Admin" (grupo Sistema, icono Shield), botón Accedi/Esci en header con modal login (estudiantes + admin), chip de cuenta con rol, features.plans/tutor/games/certificates ocultan entradas de nav (deps del useMemo corregidas: +features), appName configurable en logo/footer.
- page.tsx: fetch config al boot + refetch al focus (throttle 60s), telemetría boot por sesión, maintenance guard con MaintenanceScreen (mensaje admin + login embebido "Area riservata" para que el admin entre durante mantenimiento), subscribe con debounce 1.2s que sincroniza progreso del estudiante, key configVersion para remontar vistas al cambiar contenido, boot-adopt de progreso servidor para sesiones persistidas.
- Panel Admin (4 archivos): admin.tsx (LoginGate "Area Riservata" que también hace loginAccount — coherencia header + guard; 6 tabs; Dashboard con KPIs + BarChart recharts 7d + distribución niveles + top estudiantes + toggle mantenimiento + actividad reciente; Actividad con filtros por tipo; Datos con export JSON, seed demo y zona peligrosa con confirmación RESET), admin-users.tsx (tabla con búsqueda, CRUD completo: crear/editar/eliminar, roles, planes, XP, racha, activo, password reset, Mkoo protegido), admin-content.tsx (Vocabolario: 156 palabras base+custom con estados base/custom/modificada/oculta, editor completo, ocultar/restaurar/eliminar; Lezioni: 45 lecciones con toggle desactivar, editor de lecciones custom con vocabulario rápido y constructor de preguntas MC que genera palabras+ejercicios custom), admin-settings.tsx (identidad appName/tagline, mantenimiento+mensaje, 5 toggles de funciones, 7 niveles activables, defaults con forceDefaults, precios de planes).
- Gating por config en vistas: tutor.tsx (aviso desactivado + telemetría), games.tsx, exams.tsx CertificatesView, pricing.tsx ("Tutto sbloccato per tutti"), courses.tsx + home.tsx (niveles desactivados "Disattivato dall'amministrazione"), plan-badge.tsx (UpgradeCta/LockedOverlay/LockedFeatureCard → null si planes off), 7 usos de PLANS[plan].limits migrados a planLimits().
- Bugs encontrados y corregidos: (1) transporte de herramientas come la secuencia "[m" → corrupción en tutor.tsx useState reparada y verificada por booleanos Python (la visualización siempre la oculta); (2) deps del useMemo del sidebar sin features → nav obsoleto tras cambio de config; (3) LoginGate no hacía loginAccount → header y guard de mantenimiento no reconocían al admin; (4) sincronización de perfil podía borrar XP del servidor (local 0 > servidor 1840) → triple fix: XP monotónico en servidor + max() al login + boot-adopt; (5) hooks condicionales en tutor/games/exams/pricing evitados insertando los guards tras todos los hooks; (6) set-state-in-effect ×4 → patrón setTimeout(0).
- Dev server se cayó a mitad de la sesión (PID muerto) → recuperado con init-fullstack.sh.

Verification (agent-browser E2E + curl):
- Login Mkoo/Mk/06612 → Pannello di Controllo con 6 tabs ✓; credencial errónea → "Credenciales incorrectas" ✓; giulia estudiante → sin token ✓
- Dashboard: KPIs (7→8 usuarios, XP total, eventos hoy), BarChart 7 días, niveles A1-C1, top estudiantes ✓
- Usuarios: creado mario.test (B1/pro) → "Usuario creado"; editado XP 500/racha 3 → "actualizado" ✓
- Contenido: palabra custom "la merenda" → Vocabulario público "Saludos 11 parole" tras reload ✓; overrides vocab/lessons verificados por API (crear/ocultar/restaurar) ✓
- Impostazioni: desactivar juegos → guardado → nav sin "Juegos" (tras fix de deps) ✓; restaurado ✓
- Mantenimiento: activado con mensaje custom → visitante ve "Manutenzione in corso" + mensaje ✓; admin entra desde "Area riservata" embebida → app completa ✓; desactivado ✓
- Estudiante: login giulia → "Ciao Giulia", chip PRO, XP 1840 adoptado del servidor tras restauración ✓
- Actividad: filtros por tipo con contadores (19 tutor, 18 lecciones, 17 boot…) ✓
- Datos: export JSON (8 usuarios, 117 eventos, hash truncado) ✓
- Móvil 390px admin: sin overflow horizontal ✓; modo oscuro ✓
- bun run lint: 0 errores ✓; tsc --noEmit: limpio ✓; dev.log: sin errores runtime ✓

Stage Summary:
- Deliverable: PANEL ADMIN "Pannello di Controllo" integrado en Italiano Master (sidebar → Sistema → Panel Admin, o botón Accedi del header) con control total real: gestión de usuarios (CRUD + planes + XP), gestión de contenido (palabras y lecciones custom con editor + ocultación reversible de contenido base), configuración global (identidad, mantenimiento con login embebido, 5 funciones activables, niveles, defaults forzables, precios), telemetría y actividad, export/backup JSON, seed demo y reset por zonas.
- Credenciales: Mkoo / Mk/06612 (rol admin, protegido contra eliminación). Estudiantes demo: giulia, carlos, lucia, diego, valentina, marco (contraseña italiano123) + mario.test creado en pruebas (clave123).
- Arquitectura: SQLite+Prisma (User/Setting/TelemetryEvent), 13 API routes con token bearer, overrides de contenido reconstruidos in place (contenido base nunca se pierde), version con hash de contenido → clientes se actualizan al enfocar pestaña, XP monotónico en servidor.
- Capturas: download/preview-admin-{dashboard,dashboard-dark,dark,mobile,activity,final}.png
