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
