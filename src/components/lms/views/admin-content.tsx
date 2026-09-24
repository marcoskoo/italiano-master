"use client";

/* ── Panel Admin · gestión de contenido (vocabulario, lecciones, ejercicios) ── */

import { useCallback, useEffect, useMemo, useState } from "react";
import { BookPlus, Eye, EyeOff, Library, Pencil, Plus, Save, Search, Trash2, X } from "lucide-react";
import { adminFetch } from "@/lib/lms/remote";
import type { AppConfigBundle, VocabOverrideEntry, LessonOverrideEntry } from "@/lib/lms/appconfig";
import { baseCoursesSnapshot, baseVocabSnapshot } from "@/lib/lms/overrides";
import type { CefrLevel, Course, Exercise, Lesson, VocabWord, WordCategory, WordType } from "@/lib/lms/types";
import { CATEGORY_META, CEFR_LEVELS } from "@/lib/lms/types";
import { cn } from "@/lib/utils";

/* ── helpers ───────────────────────────────────────────────────────── */

type VocabOvr = Record<string, VocabOverrideEntry>;
type LessonOvr = Record<string, LessonOverrideEntry>;

const WORD_TYPES: WordType[] = ["sostantivo", "verbo", "aggettivo", "avverbio", "espressione"];
const LEVELS: (CefrLevel | "zero")[] = ["zero", ...CEFR_LEVELS];

function inputCls() {
  return "w-full rounded-xl border border-soft bg-crema px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-verde/40 dark:bg-inchiostro/10";
}
function labelCls() {
  return "mb-1 block text-xs font-bold uppercase tracking-wide text-muted-it";
}
function timeId(prefix: string) {
  return `${prefix}-${Date.now().toString(36)}${Math.random().toString(36).slice(2, 6)}`;
}

/* ── editor de palabra ─────────────────────────────────────────────── */

interface WordForm {
  id: string | null;
  isCustom: boolean;
  it: string; es: string; pron: string;
  type: WordType; cat: WordCategory; level: CefrLevel;
  exampleIt: string; exampleEs: string;
  gender: "" | "m" | "f"; plural: string;
}

function WordDialog({
  initial, onClose, onSave,
}: {
  initial: WordForm;
  onClose: () => void;
  onSave: (form: WordForm) => Promise<void>;
}) {
  const [form, setForm] = useState(initial);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const set = <K extends keyof WordForm>(k: K, v: WordForm[K]) => setForm((f) => ({ ...f, [k]: v }));

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.it.trim() || !form.es.trim()) {
      setError("La palabra en italiano y su traducción son obligatorias.");
      return;
    }
    setBusy(true);
    setError(null);
    try {
      await onSave(form);
      onClose();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error");
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center p-4" role="dialog" aria-modal="true" aria-label="Editor de palabra">
      <div className="absolute inset-0 bg-inchiostro/50 backdrop-blur-sm" onClick={onClose} />
      <form onSubmit={submit} className="relative max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-3xl border border-soft bg-surface p-6 shadow-2xl scrollbar-thin">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="font-display text-lg font-semibold">{form.id ? `Editar: ${form.it || "palabra"}` : "Nuova parola"}</h3>
          <button type="button" onClick={onClose} className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-soft" aria-label="Cerrar">
            <X className="h-4.5 w-4.5" aria-hidden="true" />
          </button>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          <div>
            <label htmlFor="w-it" className={labelCls()}>Italiano</label>
            <input id="w-it" value={form.it} onChange={(e) => set("it", e.target.value)} className={inputCls()} placeholder="p. ej. mattina" required />
          </div>
          <div>
            <label htmlFor="w-es" className={labelCls()}>Español</label>
            <input id="w-es" value={form.es} onChange={(e) => set("es", e.target.value)} className={inputCls()} placeholder="p. ej. mañana" required />
          </div>
          <div>
            <label htmlFor="w-pron" className={labelCls()}>Pronunciación</label>
            <input id="w-pron" value={form.pron} onChange={(e) => set("pron", e.target.value)} className={inputCls()} placeholder="matína" />
          </div>
          <div>
            <label htmlFor="w-type" className={labelCls()}>Tipo</label>
            <select id="w-type" value={form.type} onChange={(e) => set("type", e.target.value as WordType)} className={inputCls()}>
              {WORD_TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
            </select>
          </div>
          <div>
            <label htmlFor="w-cat" className={labelCls()}>Categoría</label>
            <select id="w-cat" value={form.cat} onChange={(e) => set("cat", e.target.value as WordCategory)} className={inputCls()}>
              {(Object.keys(CATEGORY_META) as WordCategory[]).map((c) => (
                <option key={c} value={c}>{CATEGORY_META[c].es}</option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="w-level" className={labelCls()}>Nivel</label>
            <select id="w-level" value={form.level} onChange={(e) => set("level", e.target.value as CefrLevel)} className={inputCls()}>
              {CEFR_LEVELS.map((l) => <option key={l} value={l}>{l}</option>)}
            </select>
          </div>
          <div>
            <label htmlFor="w-gender" className={labelCls()}>Género (sustantivos)</label>
            <select id="w-gender" value={form.gender} onChange={(e) => set("gender", e.target.value as "" | "m" | "f")} className={inputCls()}>
              <option value="">—</option>
              <option value="m">masculino</option>
              <option value="f">femenino</option>
            </select>
          </div>
          <div>
            <label htmlFor="w-plural" className={labelCls()}>Plural</label>
            <input id="w-plural" value={form.plural} onChange={(e) => set("plural", e.target.value)} className={inputCls()} placeholder="p. ej. mattine" />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="w-exit" className={labelCls()}>Ejemplo (italiano)</label>
            <input id="w-exit" value={form.exampleIt} onChange={(e) => set("exampleIt", e.target.value)} className={inputCls()} placeholder="La mattina bevo un caffè." />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="w-exes" className={labelCls()}>Ejemplo (español)</label>
            <input id="w-exes" value={form.exampleEs} onChange={(e) => set("exampleEs", e.target.value)} className={inputCls()} placeholder="Por la mañana bebo un café." />
          </div>
        </div>
        {error && <p role="alert" className="mt-3 rounded-xl bg-rosso-tenue px-3 py-2 text-xs font-semibold text-rosso-scuro dark:text-rosso">{error}</p>}
        <div className="mt-5 flex gap-2">
          <button type="submit" disabled={busy} className="inline-flex min-h-11 flex-1 items-center justify-center gap-2 rounded-xl bg-verde px-4 py-2.5 text-sm font-bold text-white shadow-md shadow-verde/25 hover:bg-verde-scuro disabled:opacity-60">
            <Save className="h-4 w-4" aria-hidden="true" /> {busy ? "Salvando…" : "Guardar palabra"}
          </button>
          <button type="button" onClick={onClose} className="min-h-11 rounded-xl border border-soft px-4 py-2.5 text-sm font-bold hover:bg-inchiostro/5">Cancelar</button>
        </div>
      </form>
    </div>
  );
}

/* ── editor de lección ─────────────────────────────────────────────── */

interface QuestionDraft { prompt: string; options: string[]; answer: number; explain: string; }

interface LessonForm {
  id: string | null;      // null = nueva
  isCustom: boolean;      // edición de lección custom (base = patch)
  level: CefrLevel | "zero";
  title: string; titleIt: string;
  objectives: string;     // una por línea
  explanation: string;    // un párrafo por línea
  examples: string;       // "italiano | español" por línea
  vocabCat: WordCategory; // categoría para las palabras rápidas
  vocabPairs: string;     // "it | es | pron" por línea
  questions: QuestionDraft[];
}

const EMPTY_LESSON: LessonForm = {
  id: null, isCustom: true, level: "A1", title: "", titleIt: "",
  objectives: "", explanation: "", examples: "",
  vocabCat: "saluti", vocabPairs: "", questions: [],
};

function LessonDialog({
  initial, onClose, onSave,
}: {
  initial: LessonForm;
  onClose: () => void;
  onSave: (form: LessonForm) => Promise<void>;
}) {
  const [form, setForm] = useState(initial);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const set = <K extends keyof LessonForm>(k: K, v: LessonForm[K]) => setForm((f) => ({ ...f, [k]: v }));

  function setQuestion(i: number, patch: Partial<QuestionDraft>) {
    setForm((f) => ({ ...f, questions: f.questions.map((q, idx) => (idx === i ? { ...q, ...patch } : q)) }));
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.title.trim()) {
      setError("El título es obligatorio.");
      return;
    }
    const badQ = form.questions.some((q) => !q.prompt.trim() || q.options.some((o) => !o.trim()));
    if (badQ) {
      setError("Cada pregunta necesita enunciado y las 4 opciones completas.");
      return;
    }
    setBusy(true);
    setError(null);
    try {
      await onSave(form);
      onClose();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error");
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center p-4" role="dialog" aria-modal="true" aria-label="Editor de lección">
      <div className="absolute inset-0 bg-inchiostro/50 backdrop-blur-sm" onClick={onClose} />
      <form onSubmit={submit} className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl border border-soft bg-surface p-6 shadow-2xl scrollbar-thin">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="font-display text-lg font-semibold">{initial.id ? (initial.isCustom ? "Editar lección" : "Editar lección base (parche)") : "Nuova lezione"}</h3>
          <button type="button" onClick={onClose} className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-soft" aria-label="Cerrar">
            <X className="h-4.5 w-4.5" aria-hidden="true" />
          </button>
        </div>

        <div className="grid gap-3 sm:grid-cols-3">
          <div>
            <label htmlFor="l-level" className={labelCls()}>Curso</label>
            <select id="l-level" value={form.level} onChange={(e) => set("level", e.target.value as CefrLevel | "zero")} className={inputCls()}>
              {LEVELS.map((l) => <option key={l} value={l}>{l === "zero" ? "Desde cero" : l}</option>)}
            </select>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="l-title" className={labelCls()}>Título (español)</label>
            <input id="l-title" value={form.title} onChange={(e) => set("title", e.target.value)} className={inputCls()} placeholder="p. ej. En el mercado" required />
          </div>
          <div className="sm:col-span-3">
            <label htmlFor="l-titleit" className={labelCls()}>Título (italiano)</label>
            <input id="l-titleit" value={form.titleIt} onChange={(e) => set("titleIt", e.target.value)} className={inputCls()} placeholder="p. ej. Al mercato" />
          </div>
          <div className="sm:col-span-3">
            <label htmlFor="l-obj" className={labelCls()}>Objetivos (uno por línea)</label>
            <textarea id="l-obj" value={form.objectives} onChange={(e) => set("objectives", e.target.value)} rows={3} className={inputCls()} placeholder={"Pedir precios\nUsar los números"} />
          </div>
          <div className="sm:col-span-3">
            <label htmlFor="l-exp" className={labelCls()}>Explicación (un párrafo por línea)</label>
            <textarea id="l-exp" value={form.explanation} onChange={(e) => set("explanation", e.target.value)} rows={4} className={inputCls()} placeholder={"Primer párrafo…\nSegundo párrafo…"} />
          </div>
          <div className="sm:col-span-3">
            <label htmlFor="l-ex" className={labelCls()}>Ejemplos (formato: italiano | español — uno por línea)</label>
            <textarea id="l-ex" value={form.examples} onChange={(e) => set("examples", e.target.value)} rows={3} className={inputCls()} placeholder={"Quanto costa? | ¿Cuánto cuesta?\nVorrei un chilo di mele. | Quisiera un kilo de manzanas."} />
          </div>
        </div>

        <div className="mt-5 rounded-2xl border border-verde/30 bg-verde-tenue/60 p-4">
          <p className="mb-2 text-sm font-bold">Vocabulario de la lección</p>
          <label htmlFor="l-vcat" className={labelCls()}>Categoría para las palabras nuevas</label>
          <select id="l-vcat" value={form.vocabCat} onChange={(e) => set("vocabCat", e.target.value as WordCategory)} className={cn(inputCls(), "mb-3 max-w-xs")}>
            {(Object.keys(CATEGORY_META) as WordCategory[]).map((c) => (
              <option key={c} value={c}>{CATEGORY_META[c].es}</option>
            ))}
          </select>
          <label htmlFor="l-vocab" className={labelCls()}>Palabras (formato: italiano | español | pronunciación — una por línea)</label>
          <textarea id="l-vocab" value={form.vocabPairs} onChange={(e) => set("vocabPairs", e.target.value)} rows={4} className={inputCls()} placeholder={"il mercato | el mercado | il merkáto\ncostare | costar | kostáre"} />
        </div>

        <div className="mt-5 rounded-2xl border border-oro/40 bg-oro-tenue/50 p-4">
          <div className="mb-2 flex items-center justify-between">
            <p className="text-sm font-bold">Preguntas de práctica (opcional)</p>
            <button
              type="button"
              onClick={() => setForm((f) => ({ ...f, questions: [...f.questions, { prompt: "", options: ["", "", "", ""], answer: 0, explain: "" }] }))}
              className="inline-flex min-h-9 items-center gap-1.5 rounded-xl bg-oro px-3 py-1.5 text-xs font-bold text-white hover:bg-oro-scuro"
            >
              <Plus className="h-3.5 w-3.5" aria-hidden="true" /> Aggiungi domanda
            </button>
          </div>
          {form.questions.length === 0 && <p className="text-xs text-muted-it">Sin preguntas: la lección usará los ejercicios existentes del nivel.</p>}
          <div className="flex flex-col gap-3">
            {form.questions.map((q, i) => (
              <div key={i} className="rounded-xl border border-soft bg-crema p-3 dark:bg-inchiostro/10">
                <div className="mb-2 flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-oro-tenue text-xs font-bold text-oro-scuro dark:text-oro">{i + 1}</span>
                  <input
                    value={q.prompt}
                    onChange={(e) => setQuestion(i, { prompt: e.target.value })}
                    placeholder="Enunciado de la pregunta"
                    aria-label={`Pregunta ${i + 1}`}
                    className={inputCls()}
                  />
                  <button
                    type="button"
                    onClick={() => setForm((f) => ({ ...f, questions: f.questions.filter((_, idx) => idx !== i) }))}
                    className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-rosso/30 text-rosso-scuro hover:bg-rosso-tenue dark:text-rosso"
                    aria-label={`Eliminar pregunta ${i + 1}`}
                  >
                    <Trash2 className="h-3.5 w-3.5" aria-hidden="true" />
                  </button>
                </div>
                <div className="grid gap-2 sm:grid-cols-2">
                  {q.options.map((o, oi) => (
                    <label key={oi} className="flex items-center gap-2 rounded-xl border border-soft bg-surface px-2.5 py-1.5">
                      <input
                        type="radio"
                        name={`q-${i}-correct`}
                        checked={q.answer === oi}
                        onChange={() => setQuestion(i, { answer: oi })}
                        className="h-4 w-4 shrink-0 accent-[#0E7A4E]"
                        aria-label={`Opción ${oi + 1} es la correcta`}
                      />
                      <input
                        value={o}
                        onChange={(e) => setQuestion(i, { options: q.options.map((x, xi) => (xi === oi ? e.target.value : x)) })}
                        placeholder={`Opción ${oi + 1}`}
                        className="w-full bg-transparent text-sm outline-none"
                        aria-label={`Opción ${oi + 1} de la pregunta ${i + 1}`}
                      />
                    </label>
                  ))}
                </div>
                <input
                  value={q.explain}
                  onChange={(e) => setQuestion(i, { explain: e.target.value })}
                  placeholder="Explicación (se muestra tras responder)"
                  aria-label={`Explicación de la pregunta ${i + 1}`}
                  className={cn(inputCls(), "mt-2")}
                />
              </div>
            ))}
          </div>
        </div>

        {error && <p role="alert" className="mt-3 rounded-xl bg-rosso-tenue px-3 py-2 text-xs font-semibold text-rosso-scuro dark:text-rosso">{error}</p>}

        <div className="mt-5 flex gap-2">
          <button type="submit" disabled={busy} className="inline-flex min-h-11 flex-1 items-center justify-center gap-2 rounded-xl bg-verde px-4 py-2.5 text-sm font-bold text-white shadow-md shadow-verde/25 hover:bg-verde-scuro disabled:opacity-60">
            <Save className="h-4 w-4" aria-hidden="true" /> {busy ? "Salvando…" : "Guardar lezione"}
          </button>
          <button type="button" onClick={onClose} className="min-h-11 rounded-xl border border-soft px-4 py-2.5 text-sm font-bold hover:bg-inchiostro/5">Cancelar</button>
        </div>
      </form>
    </div>
  );
}

/* ── parseo de líneas ──────────────────────────────────────────────── */

function parseLines(text: string): string[] {
  return text.split("\n").map((l) => l.trim()).filter(Boolean);
}
function parseExampleLine(line: string): { it: string; es: string } {
  const [it = "", es = ""] = line.split("|").map((p) => p.trim());
  return { it, es };
}
function parseVocabLine(line: string): { it: string; es: string; pron: string } {
  const [it = "", es = "", pron = ""] = line.split("|").map((p) => p.trim());
  return { it, es, pron: pron || it };
}

/* ── tab principal ─────────────────────────────────────────────────── */

export function ContentTab() {
  const [sub, setSub] = useState<"vocab" | "lessons">("vocab");
  const [vocabOvr, setVocabOvr] = useState<VocabOvr | null>(null);
  const [lessonOvr, setLessonOvr] = useState<LessonOvr | null>(null);
  const [customEx, setCustomEx] = useState<Exercise[] | null>(null);
  const [msg, setMsg] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const [wordDialog, setWordDialog] = useState<WordForm | null>(null);
  const [lessonDialog, setLessonDialog] = useState<LessonForm | null>(null);
  const [query, setQuery] = useState("");

  /* datos base (prístinos) + overrides del servidor */
  const baseVocab = useMemo(() => baseVocabSnapshot(), []);
  const baseCourses = useMemo<Course[]>(() => baseCoursesSnapshot(), []);

  const load = useCallback(async () => {
    setError(null);
    try {
      const data = await adminFetch<AppConfigBundle>("/api/admin/content");
      setVocabOvr(data.vocabOverrides);
      setLessonOvr(data.lessonOverrides);
      setCustomEx(data.customExercises);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error");
    }
  }, []);

  useEffect(() => {
    const t = setTimeout(() => void load(), 0);
    return () => clearTimeout(t);
  }, [load]);

  /* ── persistencia por sección ── */
  async function saveVocab(next: VocabOvr, action: string) {
    setVocabOvr(next);
    try {
      await adminFetch("/api/admin/content?section=vocab", { method: "PUT", body: JSON.stringify({ vocabOverrides: next }) });
      setMsg(`Vocabulario: ${action}`);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error al guardar");
      void load();
    }
  }
  async function saveLessons(next: LessonOvr, action: string) {
    setLessonOvr(next);
    try {
      await adminFetch("/api/admin/content?section=lessons", { method: "PUT", body: JSON.stringify({ lessonOverrides: next }) });
      setMsg(`Lecciones: ${action}`);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error al guardar");
      void load();
    }
  }
  async function saveExercises(next: Exercise[], action: string) {
    setCustomEx(next);
    try {
      await adminFetch("/api/admin/content?section=exercises", { method: "PUT", body: JSON.stringify({ customExercises: next }) });
      setMsg(`Ejercicios: ${action}`);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error al guardar");
      void load();
    }
  }

  /* ── acciones de vocabulario ── */
  async function saveWord(form: WordForm) {
    const id = form.id ?? timeId("custom-w");
    const word: VocabWord = {
      id,
      it: form.it.trim(),
      es: form.es.trim(),
      pron: form.pron.trim() || form.it.trim(),
      type: form.type,
      cat: form.cat,
      level: form.level,
      example: { it: form.exampleIt.trim() || form.it.trim(), es: form.exampleEs.trim() || form.es.trim() },
      ...(form.gender ? { gender: form.gender } : {}),
      ...(form.plural.trim() ? { plural: form.plural.trim() } : {}),
    };
    const next: VocabOvr = { ...(vocabOvr ?? {}), [id]: { word } };
    await saveVocab(next, form.id ? `«${word.it}» guardada` : `«${word.it}» añadida`);
  }

  function toggleWordHidden(w: VocabWord) {
    const ovr = vocabOvr ?? {};
    const current = ovr[w.id];
    const next: VocabOvr = { ...ovr };
    if (current?.deleted) {
      delete next[w.id]; // restaurar
    } else {
      next[w.id] = { ...(current ?? {}), deleted: true };
    }
    void saveVocab(next, current?.deleted ? `«${w.it}» restaurada` : `«${w.it}» oculta al público`);
  }

  function restoreWord(w: VocabWord) {
    const next = { ...(vocabOvr ?? {}) };
    delete next[w.id];
    void saveVocab(next, `«${w.it}» restaurada al original`);
  }

  /* ── acciones de lecciones ── */
  async function saveLesson(form: LessonForm) {
    const isNew = !form.id;
    const lessonId = form.id ?? timeId("custom-les");
    const level = form.level;

    // palabras nuevas de la lección
    const pairs = parseLines(form.vocabPairs).map(parseVocabLine).filter((p) => p.it && p.es);
    const nextVocab: VocabOvr = { ...(vocabOvr ?? {}) };
    // al editar una lección custom, primero retiramos sus palabras anteriores
    if (!isNew) {
      for (const key of Object.keys(nextVocab)) {
        if (key.startsWith(`custom-w-${lessonId}`)) delete nextVocab[key];
      }
    }
    const wordIds: string[] = [];
    pairs.forEach((p, i) => {
      const wid = `custom-w-${lessonId}-${i}`;
      nextVocab[wid] = {
        word: {
          id: wid, it: p.it, es: p.es, pron: p.pron, type: "espressione",
          cat: form.vocabCat, level: (level === "zero" ? "A1" : level),
          example: { it: p.it, es: p.es },
        },
      };
      wordIds.push(wid);
    });

    // ejercicios nuevos
    const nextEx: Exercise[] = [...(customEx ?? []).filter((e) => !e.id.startsWith(`custom-ex-${lessonId}`))];
    const exIds: string[] = [];
    form.questions.forEach((q, i) => {
      const eid = `custom-ex-${lessonId}-${i}`;
      nextEx.push({
        id: eid, type: "mc", level: level === "zero" ? "A1" : level, topic: "grammatica",
        prompt: q.prompt, options: q.options, answer: q.answer, explain: q.explain,
      } as Extract<Exercise, { type: "mc" }>);
      exIds.push(eid);
    });

    const examples = parseLines(form.examples).map(parseExampleLine);
    const objectives = parseLines(form.objectives);
    const explanation = parseLines(form.explanation);

    const nextLessons: LessonOvr = { ...(lessonOvr ?? {}) };

    if (isNew || form.isCustom) {
      const existing = isNew ? undefined : nextLessons[lessonId]?.lesson;
      const lesson: Lesson = {
        id: lessonId, level,
        title: form.title.trim(),
        titleIt: form.titleIt.trim() || form.title.trim(),
        objectives: objectives.length ? objectives : ["Estudiare e praticare"],
        explanation: explanation.length ? explanation : [""],
        examples: examples.length ? examples : [],
        vocabIds: wordIds,
        exerciseIds: exIds.length ? exIds : (existing?.exerciseIds ?? []),
        conversationPrompt: existing?.conversationPrompt ?? { it: `Parliamo di: ${form.title}`, es: `Hablamos de: ${form.title}` },
        checkpointIds: exIds.slice(0, 3),
      };
      nextLessons[lessonId] = { lesson };
    } else {
      // parche sobre lección base
      const prev = nextLessons[lessonId] ?? {};
      nextLessons[lessonId] = {
        ...prev,
        lesson: undefined,
        patch: {
          ...(prev.patch ?? {}),
          title: form.title.trim(),
          titleIt: form.titleIt.trim() || form.title.trim(),
          ...(objectives.length ? { objectives } : {}),
          ...(explanation.length ? { explanation } : {}),
          ...(examples.length ? { examples } : {}),
        },
      };
    }

    // guardar las tres secciones
    if (Object.keys(nextVocab).length !== Object.keys(vocabOvr ?? {}).length || pairs.length || (!isNew && form.isCustom)) {
      await adminFetch("/api/admin/content?section=vocab", { method: "PUT", body: JSON.stringify({ vocabOverrides: nextVocab }) }).catch(() => undefined);
      setVocabOvr(nextVocab);
    }
    if (nextEx.length !== (customEx ?? []).length || form.questions.length) {
      await adminFetch("/api/admin/content?section=exercises", { method: "PUT", body: JSON.stringify({ customExercises: nextEx }) }).catch(() => undefined);
      setCustomEx(nextEx);
    }
    await saveLessons(nextLessons, isNew ? `«${form.title}» creada en ${level}` : `«${form.title}» guardada`);
  }

  function toggleLesson(lessonId: string, title: string) {
    const ovr = lessonOvr ?? {};
    const current = ovr[lessonId];
    const next: LessonOvr = { ...ovr };
    if (current?.disabled) {
      delete next[lessonId];
    } else {
      next[lessonId] = { ...(current ?? {}), disabled: true };
    }
    void saveLessons(next, current?.disabled ? `«${title}» reactivada` : `«${title}» desactivada`);
  }

  async function deleteCustomLesson(lesson: Lesson) {
    const lessonId = lesson.id;
    const nextLessons = { ...(lessonOvr ?? {}) };
    delete nextLessons[lessonId];
    const nextVocab: VocabOvr = {};
    for (const [k, v] of Object.entries(vocabOvr ?? {})) {
      if (!k.startsWith(`custom-w-${lessonId}`)) nextVocab[k] = v;
    }
    const nextEx = (customEx ?? []).filter((e) => !e.id.startsWith(`custom-ex-${lessonId}`));

    await adminFetch("/api/admin/content?section=vocab", { method: "PUT", body: JSON.stringify({ vocabOverrides: nextVocab }) }).catch(() => undefined);
    await adminFetch("/api/admin/content?section=exercises", { method: "PUT", body: JSON.stringify({ customExercises: nextEx }) }).catch(() => undefined);
    setVocabOvr(nextVocab);
    setCustomEx(nextEx);
    await saveLessons(nextLessons, `«${lesson.title}» eliminada con su contenido`);
  }

  /* ── render ── */
  if (!vocabOvr || !lessonOvr || !customEx) {
    return <p className="text-sm text-muted-it">Cargando contenido de la plataforma…</p>;
  }

  const allWords: { word: VocabWord; state: "base" | "custom" | "modificada" | "oculta" }[] = [
    ...baseVocab.map((w) => {
      const o = vocabOvr[w.id];
      return { word: o?.word ?? w, state: o?.deleted ? "oculta" : o?.word ? "modificada" : "base" } as const;
    }),
    ...Object.entries(vocabOvr).flatMap(([id, o]) =>
      o.word && id.startsWith("custom-") && !o.deleted
        ? [{ word: o.word, state: "custom" as const }]
        : []
    ),
  ];

  const q = query.trim().toLowerCase();
  const filteredWords = q
    ? allWords.filter((w) => w.word.it.toLowerCase().includes(q) || w.word.es.toLowerCase().includes(q))
    : allWords;

  const lessonRows: { lesson: Lesson; unitTitle: string; courseLevel: string; state: "base" | "custom" | "modificata" | "disattivata" }[] = [];
  for (const course of baseCourses) {
    for (const unit of course.units) {
      for (const lesson of unit.lessons) {
        const o = lessonOvr[lesson.id];
        lessonRows.push({
          lesson: o?.patch ? { ...lesson, ...o.patch } : lesson,
          unitTitle: unit.title,
          courseLevel: course.level,
          state: o?.disabled ? "disattivata" : o?.patch ? "modificata" : "base",
        });
      }
    }
  }
  for (const o of Object.values(lessonOvr)) {
    if (o.lesson && !o.deleted) {
      lessonRows.push({ lesson: o.lesson, unitTitle: "Unità extra (Admin)", courseLevel: o.lesson.level, state: "custom" });
    }
  }

  const customCount = Object.values(lessonOvr).filter((o) => o.lesson).length;

  return (
    <div className="flex flex-col gap-4">
      {/* sub-tabs */}
      <div className="flex gap-1.5 rounded-2xl border border-soft bg-surface p-1.5" role="tablist" aria-label="Tipo de contenido">
        <button
          role="tab" aria-selected={sub === "vocab"} onClick={() => setSub("vocab")}
          className={cn("flex min-h-11 flex-1 items-center justify-center gap-2 rounded-xl px-3 py-2 text-sm font-bold transition-colors", sub === "vocab" ? "bg-verde text-white shadow-md shadow-verde/25" : "hover:bg-verde-tenue")}
        >
          <Library className="h-4 w-4" aria-hidden="true" /> Vocabolario ({allWords.length})
        </button>
        <button
          role="tab" aria-selected={sub === "lessons"} onClick={() => setSub("lessons")}
          className={cn("flex min-h-11 flex-1 items-center justify-center gap-2 rounded-xl px-3 py-2 text-sm font-bold transition-colors", sub === "lessons" ? "bg-verde text-white shadow-md shadow-verde/25" : "hover:bg-verde-tenue")}
        >
          <BookPlus className="h-4 w-4" aria-hidden="true" /> Lezioni ({lessonRows.length})
        </button>
      </div>

      {msg && <p role="status" className="rounded-xl bg-verde-tenue px-3 py-2 text-xs font-semibold text-verde-scuro dark:text-verde">{msg}</p>}
      {error && <p role="alert" className="rounded-xl bg-rosso-tenue px-3 py-2 text-xs font-semibold text-rosso-scuro dark:text-rosso">{error}</p>}

      {sub === "vocab" && (
        <>
          <div className="flex flex-wrap items-center gap-2">
            <div className="relative min-w-52 flex-1">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-it" aria-hidden="true" />
              <input
                value={query} onChange={(e) => setQuery(e.target.value)}
                placeholder="Buscar palabra (italiano o español)…"
                aria-label="Buscar palabras"
                className="w-full rounded-xl border border-soft bg-crema py-2.5 pl-9 pr-3 text-sm outline-none focus:ring-2 focus:ring-verde/40 dark:bg-inchiostro/10"
              />
            </div>
            <button
              onClick={() => setWordDialog({ id: null, isCustom: true, it: "", es: "", pron: "", type: "sostantivo", cat: "saluti", level: "A1", exampleIt: "", exampleEs: "", gender: "", plural: "" })}
              className="inline-flex min-h-11 items-center gap-2 rounded-xl bg-verde px-4 py-2.5 text-sm font-bold text-white shadow-md shadow-verde/25 hover:bg-verde-scuro"
            >
              <Plus className="h-4 w-4" aria-hidden="true" /> Nuova parola
            </button>
          </div>

          <div className="overflow-hidden rounded-2xl border border-soft bg-surface">
            <div className="max-h-[560px] overflow-y-auto scrollbar-thin">
              <table className="w-full min-w-[680px] text-left text-xs">
                <thead className="sticky top-0 bg-crema-scura text-[10px] uppercase tracking-wide text-muted-it dark:bg-inchiostro/20">
                  <tr>
                    <th className="px-3 py-2.5 font-bold">Palabra</th>
                    <th className="px-3 py-2.5 font-bold">Español</th>
                    <th className="px-3 py-2.5 font-bold">Cat.</th>
                    <th className="px-3 py-2.5 font-bold">Nivel</th>
                    <th className="px-3 py-2.5 font-bold">Estado</th>
                    <th className="px-3 py-2.5 text-right font-bold">Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredWords.slice(0, 400).map(({ word, state }) => {
                    const isCustom = word.id.startsWith("custom-");
                    return (
                      <tr key={word.id} className={cn("border-t border-soft", state === "oculta" && "opacity-45")}>
                        <td className="px-3 py-2.5">
                          <p className="font-bold">{word.it}</p>
                          <p className="font-mono text-[10px] text-muted-it">{word.pron}</p>
                        </td>
                        <td className="px-3 py-2.5">{word.es}</td>
                        <td className="px-3 py-2.5">{CATEGORY_META[word.cat]?.es ?? word.cat}</td>
                        <td className="px-3 py-2.5 font-mono font-bold">{word.level}</td>
                        <td className="px-3 py-2.5">
                          <span className={cn(
                            "rounded-full px-2 py-0.5 text-[10px] font-bold",
                            state === "base" && "bg-inchiostro/10 text-inchiostro",
                            state === "custom" && "bg-verde-tenue text-verde-scuro dark:text-verde",
                            state === "modificada" && "bg-oro-tenue text-oro-scuro dark:text-oro",
                            state === "oculta" && "bg-rosso-tenue text-rosso-scuro dark:text-rosso",
                          )}>
                            {state}
                          </span>
                        </td>
                        <td className="px-3 py-2.5">
                          <div className="flex items-center justify-end gap-1.5">
                            <button
                              onClick={() => setWordDialog({
                                id: word.id, isCustom, it: word.it, es: word.es, pron: word.pron,
                                type: word.type, cat: word.cat, level: word.level,
                                exampleIt: word.example.it, exampleEs: word.example.es,
                                gender: word.gender ?? "", plural: word.plural ?? "",
                              })}
                              className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-soft hover:bg-verde-tenue"
                              aria-label={`Editar ${word.it}`}
                              title="Editar"
                            >
                              <Pencil className="h-4 w-4" aria-hidden="true" />
                            </button>
                            {isCustom ? (
                              <button
                                onClick={() => {
                                  const next = { ...vocabOvr };
                                  delete next[word.id];
                                  void saveVocab(next, `«${word.it}» eliminada`);
                                }}
                                className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-rosso/30 text-rosso-scuro hover:bg-rosso-tenue dark:text-rosso"
                                aria-label={`Eliminar ${word.it}`}
                                title="Eliminar palabra custom"
                              >
                                <Trash2 className="h-4 w-4" aria-hidden="true" />
                              </button>
                            ) : state === "modificada" ? (
                              <button
                                onClick={() => restoreWord(word)}
                                className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-oro/40 text-oro-scuro hover:bg-oro-tenue dark:text-oro"
                                aria-label={`Restaurar ${word.it}`}
                                title="Restaurar original"
                              >
                                <EyeOff className="h-4 w-4" aria-hidden="true" />
                              </button>
                            ) : null}
                            {!isCustom && (
                              <button
                                onClick={() => toggleWordHidden(word)}
                                className={cn(
                                  "inline-flex h-9 w-9 items-center justify-center rounded-xl border",
                                  state === "oculta"
                                    ? "border-verde/40 text-verde-scuro hover:bg-verde-tenue dark:text-verde"
                                    : "border-soft hover:bg-rosso-tenue"
                                )}
                                aria-label={state === "oculta" ? `Mostrar ${word.it}` : `Ocultar ${word.it}`}
                                title={state === "oculta" ? "Mostrar de nuevo" : "Ocultar al público"}
                              >
                                {state === "oculta" ? <Eye className="h-4 w-4" aria-hidden="true" /> : <EyeOff className="h-4 w-4" aria-hidden="true" />}
                              </button>
                            )}
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                  {filteredWords.length === 0 && (
                    <tr><td colSpan={6} className="px-3 py-6 text-center text-muted-it">Sin resultados.</td></tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
          <p className="text-[11px] text-muted-it">
            Mostrando {Math.min(filteredWords.length, 400)} de {allWords.length} palabras. Las palabras «base» forman el diccionario original; puedes editarlas (guardando un parche reversible), ocultarlas o añadir palabras nuevas. La palanca de ojo controla la visibilidad pública.
          </p>
        </>
      )}

      {sub === "lessons" && (
        <>
          <div className="flex flex-wrap items-center gap-2">
            <p className="text-xs text-muted-it">
              {customCount} lección(es) custom · {Object.values(lessonOvr).filter((o) => o.disabled).length} desactivada(s)
            </p>
            <button
              onClick={() => setLessonDialog({ ...EMPTY_LESSON })}
              className="ml-auto inline-flex min-h-11 items-center gap-2 rounded-xl bg-verde px-4 py-2.5 text-sm font-bold text-white shadow-md shadow-verde/25 hover:bg-verde-scuro"
            >
              <Plus className="h-4 w-4" aria-hidden="true" /> Nuova lezione
            </button>
          </div>

          <div className="flex flex-col gap-2">
            {lessonRows.map(({ lesson, unitTitle, courseLevel, state }) => {
              const isCustom = lesson.id.startsWith("custom-");
              return (
                <div key={lesson.id} className={cn(
                  "flex flex-wrap items-center gap-3 rounded-2xl border border-soft bg-surface px-4 py-3",
                  state === "disattivata" && "opacity-50"
                )}>
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-verde-tenue font-mono text-xs font-bold text-verde-scuro dark:text-verde">
                    {courseLevel === "zero" ? "0" : courseLevel}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-bold">{lesson.title}</p>
                    <p className="truncate text-[11px] text-muted-it">
                      {lesson.titleIt} · {unitTitle} · {lesson.vocabIds.length} parole · {lesson.exerciseIds.length} esercizi
                    </p>
                  </div>
                  <span className={cn(
                    "rounded-full px-2 py-0.5 text-[10px] font-bold",
                    state === "base" && "bg-inchiostro/10 text-inchiostro",
                    state === "custom" && "bg-verde-tenue text-verde-scuro dark:text-verde",
                    state === "modificata" && "bg-oro-tenue text-oro-scuro dark:text-oro",
                    state === "disattivata" && "bg-rosso-tenue text-rosso-scuro dark:text-rosso",
                  )}>
                    {state}
                  </span>
                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={() => setLessonDialog({
                        id: lesson.id,
                        isCustom,
                        level: lesson.level,
                        title: lesson.title,
                        titleIt: lesson.titleIt,
                        objectives: lesson.objectives.join("\n"),
                        explanation: lesson.explanation.join("\n"),
                        examples: lesson.examples.map((e) => `${e.it} | ${e.es}`).join("\n"),
                        vocabCat: "saluti",
                        vocabPairs: isCustom
                          ? lesson.vocabIds.map((id) => {
                              const w = vocabOvr[id]?.word;
                              return w ? `${w.it} | ${w.es} | ${w.pron}` : "";
                            }).filter(Boolean).join("\n")
                          : "",
                        questions: isCustom
                          ? lesson.exerciseIds.flatMap((id) => {
                              const e = customEx.find((x) => x.id === id);
                              return e && e.type === "mc" ? [{ prompt: e.prompt, options: e.options, answer: e.answer, explain: e.explain }] : [];
                            })
                          : [],
                      })}
                      className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-soft hover:bg-verde-tenue"
                      aria-label={`Editar ${lesson.title}`}
                      title="Editar"
                    >
                      <Pencil className="h-4 w-4" aria-hidden="true" />
                    </button>
                    {isCustom ? (
                      <button
                        onClick={() => void deleteCustomLesson(lesson)}
                        className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-rosso/30 text-rosso-scuro hover:bg-rosso-tenue dark:text-rosso"
                        aria-label={`Eliminar ${lesson.title}`}
                        title="Eliminar lección y su contenido"
                      >
                        <Trash2 className="h-4 w-4" aria-hidden="true" />
                      </button>
                    ) : null}
                    <button
                      onClick={() => toggleLesson(lesson.id, lesson.title)}
                      className={cn(
                        "inline-flex min-h-9 items-center gap-1.5 rounded-xl border px-3 text-xs font-bold",
                        state === "disattivata"
                          ? "border-verde/40 text-verde-scuro hover:bg-verde-tenue dark:text-verde"
                          : "border-soft hover:bg-rosso-tenue"
                      )}
                      aria-label={state === "disattivata" ? `Reactivar ${lesson.title}` : `Desactivar ${lesson.title}`}
                    >
                      {state === "disattivata" ? <Eye className="h-3.5 w-3.5" aria-hidden="true" /> : <EyeOff className="h-3.5 w-3.5" aria-hidden="true" />}
                      {state === "disattivata" ? "Reactivar" : "Desactivar"}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
          <p className="text-[11px] text-muted-it">
            Las lecciones «base» forman los cursos originales A1–C2: puedes desactivarlas temporalmente o editarlas con un parche reversible (título, objetivos, explicación y ejemplos). Las lecciones custom se añaden como «Unità extra» del curso elegido e incluyen su propio vocabulario y preguntas.
          </p>
        </>
      )}

      {wordDialog && (
        <WordDialog
          initial={wordDialog}
          onClose={() => setWordDialog(null)}
          onSave={saveWord}
        />
      )}
      {lessonDialog && (
        <LessonDialog
          initial={lessonDialog}
          onClose={() => setLessonDialog(null)}
          onSave={saveLesson}
        />
      )}
    </div>
  );
}
