"use client";

import { useMemo, useState } from "react";
import { BookMarked, Calculator, Printer } from "lucide-react";
import { VOCAB, wordsByCategory } from "@/lib/lms/vocabulary";
import { CATEGORY_META, type WordCategory } from "@/lib/lms/types";
import { GRAMMAR } from "@/lib/lms/grammar";
import { VERB_LIST, findVerb, conjugate, TENSES, PRONOUNS } from "@/lib/lms/conjugator";
import { useLms } from "@/lib/lms/store";
import { cn } from "@/lib/utils";

/* ── Vista: Schede di studio · hojas imprimibles · plugin v1.1 ─────── */

type SheetKind = "vocabolario" | "verbi" | "grammatica";

const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

function printHtml(html: string) {
  const iframe = document.createElement("iframe");
  iframe.style.position = "fixed";
  iframe.style.right = "0";
  iframe.style.bottom = "0";
  iframe.style.width = "0";
  iframe.style.height = "0";
  iframe.style.border = "0";
  document.body.appendChild(iframe);
  const doc = iframe.contentDocument!;
  doc.open();
  doc.write(html);
  doc.close();
  iframe.onload = () => {
    iframe.contentWindow?.focus();
    iframe.contentWindow?.print();
    setTimeout(() => document.body.removeChild(iframe), 1000);
  };
  // algunos navegadores disparan onload antes de que el DOM esté listo
  setTimeout(() => {
    if (iframe.contentWindow) {
      iframe.contentWindow.focus();
      iframe.contentWindow.print();
    }
  }, 300);
}

const PAGE_CSS = `
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { font-family: Georgia, 'Times New Roman', serif; color: #1a1a1a; padding: 28px 30px; font-size: 13px; line-height: 1.5; }
  header { border-bottom: 3px solid #0E7A4E; padding-bottom: 10px; margin-bottom: 18px; display: flex; justify-content: space-between; align-items: baseline; }
  h1 { font-size: 20px; color: #0E7A4E; font-style: italic; }
  h1 span { font-style: normal; color: #1a1a1a; }
  .meta { font-size: 11px; color: #666; }
  h2 { font-size: 15px; margin: 14px 0 8px; color: #0E7A4E; }
  table { width: 100%; border-collapse: collapse; margin-bottom: 14px; page-break-inside: auto; }
  th { text-align: left; font-size: 10px; text-transform: uppercase; letter-spacing: .08em; color: #0E7A4E; border-bottom: 1.5px solid #0E7A4E; padding: 4px 6px; }
  td { border-bottom: 1px solid #ddd; padding: 5px 6px; vertical-align: top; }
  tr { page-break-inside: avoid; }
  .it { font-weight: bold; }
  .pron { color: #8a6d1a; font-style: italic; font-size: 12px; }
  .es { color: #444; }
  .ex { color: #666; font-size: 11.5px; font-style: italic; }
  .irr { color: #b03030; font-weight: bold; }
  .summary { margin: 8px 0 14px; padding: 8px 10px; background: #f4f8f5; border-left: 3px solid #0E7A4E; font-size: 12px; }
  footer { margin-top: 20px; border-top: 1px solid #ccc; padding-top: 8px; font-size: 10px; color: #999; text-align: center; font-style: italic; }
  @media print { body { padding: 12mm 10mm; } }
`;

function sheetShell(title: string, subtitle: string, body: string) {
  return `<!doctype html><html lang="it"><head><meta charset="utf-8"><title>${esc(title)}</title><style>${PAGE_CSS}</style></head>
<body><header><h1>Italiano <span>Master</span></h1><div class="meta">${esc(subtitle)} · ${new Date().toLocaleDateString("es")}</div></header>
${body}
<footer>Italiano Master · Scheda di studio generata dall'app · italianomaster.app</footer></body></html>`;
}

export function PrintablesView() {
  const [kind, setKind] = useState<SheetKind>("vocabolario");
  const [category, setCategory] = useState<WordCategory>("saluti");
  const [verb, setVerb] = useState("essere");
  const navigate = useLms((s) => s.navigate);
  const remoteConfig = useLms((s) => s.remoteConfig);

  const categories = useMemo(() => Array.from(new Set(VOCAB.map((w) => w.cat))), []);

  function buildVocabSheet(): string {
    const meta = CATEGORY_META[category];
    const words = wordsByCategory(category);
    const rows = words.map((w) => `
      <tr>
        <td class="it">${esc(w.it)}</td>
        <td class="pron">[${esc(w.pron)}]</td>
        <td class="es">${esc(w.es)}</td>
        <td class="ex">${esc(w.example.it)} — ${esc(w.example.es)}</td>
      </tr>`).join("");
    return sheetShell(`Vocabolario · ${meta.es}`, `Scheda di vocabolario · ${words.length} parole`,
      `<h2>${meta.emoji} ${esc(meta.es)} (${words.length} parole)</h2>
       <table><thead><tr><th>Italiano</th><th>Pronuncia</th><th>Español</th><th>Esempio</th></tr></thead><tbody>${rows}</tbody></table>`);
  }

  function buildVerbSheet(): string {
    const entry = findVerb(verb)!;
    const sections = TENSES.map((t) => {
      const conj = conjugate(entry, t.id);
      const rows = conj.forms.map((f) => `<tr><td>${esc(f.pronoun)}</td><td class="it ${f.irregular ? "irr" : ""}">${esc(f.form)}</td></tr>`).join("");
      return `<h2>${esc(t.label)} <span style="font-weight:normal;color:#666;font-size:11px">(${esc(t.hint)})</span></h2>
              <table><thead><tr><th style="width:35%">Pronome</th><th>Forma${entry.pattern === "irregular" ? " · <span class=irr>rosa = irregolare</span>" : ""}</th></tr></thead><tbody>${rows}</tbody></table>`;
    }).join("");
    return sheetShell(`Verbo: ${entry.infinitive}`, `Tabella di coniugazione · ${entry.es}`,
      `<h2>${esc(entry.infinitive)} — ${esc(entry.es)}</h2>
       <p class="summary">Ausiliare: <b>${entry.auxiliary}</b> · participio: <b>${esc(entry.participle)}</b> · gerundio: <b>${esc(entry.gerund)}</b></p>
       ${sections}`);
  }

  function buildGrammarSheet(): string {
    const sections = GRAMMAR.map((g) => `
      <h2>${g.level} · ${esc(g.title)} <span style="font-weight:normal;color:#666;font-size:11px">${esc(g.titleIt)}</span></h2>
      <p class="summary">${esc(g.summary)}</p>
      <table><thead><tr><th style="width:50%">Esempio</th><th>Traduzione</th></tr></thead><tbody>
        ${g.examples.map((e) => `<tr><td class="it">${esc(e.it)}</td><td class="es">${esc(e.es)}</td></tr>`).join("")}
      </tbody></table>`).join("");
    return sheetShell("Grammatica · sintesi completa", `30+ tematiche da A1 a C2 · ${GRAMMAR.length} argomenti`, sections);
  }

  function print() {
    const html = kind === "vocabolario" ? buildVocabSheet() : kind === "verbi" ? buildVerbSheet() : buildGrammarSheet();
    printHtml(html);
  }

  if (remoteConfig && remoteConfig.features.printables === false) {
    return (
      <div className="mx-auto max-w-lg rounded-3xl border border-soft bg-surface p-8 text-center">
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-inchiostro/10 text-2xl">🖨️</span>
        <h2 className="mt-4 font-display text-xl font-semibold">Schede di studio non disponibili</h2>
        <p className="mt-2 text-sm text-muted-it">La administración ha desactivado las hojas de estudio.</p>
        <button onClick={() => navigate("inicio")} className="mt-5 inline-flex min-h-11 items-center rounded-xl bg-verde px-5 py-2.5 text-sm font-bold text-white shadow-md shadow-verde/25 hover:bg-verde-scuro">Torna all'inizio</button>
      </div>
    );
  }

  const selectedCount = kind === "vocabolario" ? wordsByCategory(category).length : kind === "grammatica" ? GRAMMAR.length : 7;

  return (
    <div className="mx-auto max-w-3xl">
      <section className="rounded-3xl border border-soft bg-surface p-6">
        <h2 className="font-display text-xl font-semibold">Schede di studio stampabili</h2>
        <p className="mt-1 text-sm text-muted-it">Genera hojas de estudio listas para imprimir o guardar como PDF (Ctrl/Cmd + P → «Guardar como PDF»).</p>

        <div className="mt-5 flex flex-wrap gap-2" role="tablist" aria-label="Tipo de hoja">
          {([
            { id: "vocabolario", label: "Vocabulario", icon: BookMarked },
            { id: "verbi", label: "Tabla de verbos", icon: Calculator },
            { id: "grammatica", label: "Gramática completa", icon: Printer },
          ] as const).map((k) => (
            <button
              key={k.id}
              role="tab"
              aria-selected={kind === k.id}
              onClick={() => setKind(k.id)}
              className={cn("inline-flex min-h-11 items-center gap-2 rounded-xl border px-4 text-sm font-bold transition-all",
                kind === k.id ? "border-verde bg-verde text-white shadow-md shadow-verde/20" : "border-soft bg-crema hover:border-verde/40")}
            >
              <k.icon className="h-4 w-4" aria-hidden="true" /> {k.label}
            </button>
          ))}
        </div>

        {kind === "vocabolario" && (
          <div className="mt-5">
            <label htmlFor="pr-cat" className="mb-1 block text-xs font-bold uppercase tracking-wide text-muted-it">Categoría ({categories.length} disponibles)</label>
            <select id="pr-cat" value={category} onChange={(e) => setCategory(e.target.value as WordCategory)} className="w-full rounded-xl border border-soft bg-crema px-3 py-2.5 text-sm font-semibold outline-none focus:ring-2 focus:ring-verde/40">
              {categories.map((c) => <option key={c} value={c}>{CATEGORY_META[c].emoji} {CATEGORY_META[c].es} ({wordsByCategory(c).length})</option>)}
            </select>
          </div>
        )}

        {kind === "verbi" && (
          <div className="mt-5">
            <label htmlFor="pr-verb" className="mb-1 block text-xs font-bold uppercase tracking-wide text-muted-it">Verbo ({VERB_LIST.length} en el conjugador)</label>
            <select id="pr-verb" value={verb} onChange={(e) => setVerb(e.target.value)} className="w-full rounded-xl border border-soft bg-crema px-3 py-2.5 text-sm font-semibold outline-none focus:ring-2 focus:ring-verde/40">
              {VERB_LIST.map((v) => <option key={v.infinitive} value={v.infinitive}>{v.infinitive} — {v.es}</option>)}
            </select>
          </div>
        )}

        {kind === "grammatica" && (
          <p className="mt-5 rounded-2xl bg-crema-scura px-4 py-3 text-xs leading-relaxed text-muted-it dark:bg-inchiostro/10">
            La hoja incluye los {GRAMMAR.length} temas de gramática con su resumen y ejemplos bilingües. Perfecta como chuleta de repaso general.
          </p>
        )}

        <button onClick={print} className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-2xl bg-verde px-6 py-3 font-bold text-white shadow-lg shadow-verde/25 transition-all hover:scale-[1.01]">
          <Printer className="h-5 w-5" aria-hidden="true" /> Stampa la scheda ({selectedCount} {kind === "verbi" ? "tempi" : "elementos"})
        </button>
      </section>

      {/* vista previa aproximada */}
      <section className="mt-5 rounded-3xl border border-soft bg-surface p-6">
        <p className="mb-3 text-xs font-bold uppercase tracking-wide text-muted-it">Vista previa del contenido</p>
        {kind === "vocabolario" && (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead><tr className="text-left text-[10px] uppercase tracking-wide text-verde-scuro dark:text-verde"><th className="pb-2">Italiano</th><th className="pb-2">Pronuncia</th><th className="pb-2">Español</th></tr></thead>
              <tbody>
                {wordsByCategory(category).slice(0, 5).map((w) => (
                  <tr key={w.id} className="border-t border-soft"><td className="py-1.5 font-bold">{w.it}</td><td className="py-1.5 italic text-muted-it">[{w.pron}]</td><td className="py-1.5">{w.es}</td></tr>
                ))}
              </tbody>
            </table>
            {wordsByCategory(category).length > 5 && <p className="mt-2 text-xs text-muted-it">… y {wordsByCategory(category).length - 5} más en la hoja impresa.</p>}
          </div>
        )}
        {kind === "verbi" && (
          <div className="flex flex-wrap gap-1.5 text-xs">
            {TENSES.map((t) => <span key={t.id} className="rounded-lg bg-verde-tenue px-2.5 py-1 font-bold text-verde-scuro dark:text-verde">{t.label}</span>)}
            <span className="w-full pt-1 text-muted-it">7 tiempos × 6 personas = 42 formas + auxiliar, participio y gerundio.</span>
          </div>
        )}
        {kind === "grammatica" && (
          <div className="flex flex-wrap gap-1.5 text-xs">
            {GRAMMAR.slice(0, 12).map((g) => <span key={g.id} className="rounded-lg bg-crema-scura px-2.5 py-1 font-bold dark:bg-inchiostro/10">{g.level} · {g.title}</span>)}
            {GRAMMAR.length > 12 && <span className="w-full pt-1 text-muted-it">… y {GRAMMAR.length - 12} temas más.</span>}
          </div>
        )}
      </section>
    </div>
  );
}
