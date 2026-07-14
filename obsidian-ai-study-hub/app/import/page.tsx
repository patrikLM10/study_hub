"use client";

import { useState, useRef, useCallback } from "react";
import { supabase } from "@/lib/supabase";
import { validateImport, ValidationResult } from "@/lib/import-validator";
import type { StudyPackage, ImportResult } from "@/lib/types";
import Link from "next/link";

type Step = "input" | "preview" | "importing" | "done";
type InputMode = "file" | "paste";

const CONTENT_LABELS: Record<string, string> = {
  flashcards: "Flashcards",
  mcqs: "MCQs",
  msqs: "MSQs",
  nat_questions: "NAT Questions",
  summaries: "Summaries",
  mindmaps: "Mindmaps",
  quizzes: "Quizzes",
};

export default function ImportPage() {
  const [step, setStep] = useState<Step>("input");
  const [inputMode, setInputMode] = useState<InputMode>("file");
  const [files, setFiles] = useState<File[]>([]);
  const [pasteText, setPasteText] = useState("");
  const [validation, setValidation] = useState<ValidationResult | null>(null);
  const [importMode, setImportMode] = useState("replace");
  const [importResult, setImportResult] = useState<ImportResult | null>(null);
  const [progress, setProgress] = useState(0);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const dragRef = useRef<HTMLDivElement>(null);

  const handleFiles = useCallback((newFiles: FileList | File[]) => {
    const jsonFiles = Array.from(newFiles).filter((f) => f.name.endsWith(".json"));
    setFiles((prev) => [...prev, ...jsonFiles]);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    handleFiles(e.dataTransfer.files);
  }, [handleFiles]);

  const parseFiles = async () => {
    const results: StudyPackage[] = [];
    const errors: string[] = [];
    for (const file of files) {
      try {
        const text = await file.text();
        const json = JSON.parse(text);
        if (Array.isArray(json)) {
          results.push(...json);
        } else {
          results.push(json);
        }
      } catch (e) {
        errors.push(`"${file.name}": ${(e as Error).message}`);
      }
    }
    if (results.length === 0) {
      setValidation({ valid: false, data: null, errors, warnings: [] });
      return;
    }
    const merged = mergePackages(results);
    const v = validateImport(merged);
    v.errors.push(...errors);
    setValidation(v);
    if (v.valid) setStep("preview");
  };

  const parsePaste = () => {
    try {
      const json = JSON.parse(pasteText);
      const items = Array.isArray(json) ? json : [json];
      const merged = mergePackages(items);
      const v = validateImport(merged);
      setValidation(v);
      if (v.valid) setStep("preview");
    } catch (e) {
      setValidation({ valid: false, data: null, errors: ["Invalid JSON: " + (e as Error).message], warnings: [] });
    }
  };

  const mergePackages = (items: StudyPackage[]): StudyPackage => {
    if (items.length === 1) return items[0];
    const merged: StudyPackage = { note_title: "", tags: [] };
    const types = ["flashcards", "mcqs", "msqs", "nat_questions", "summaries", "mindmaps", "quizzes"] as const;
    for (const item of items) {
      if (item.note_title) merged.note_title = item.note_title;
      if (item.note_slug) merged.note_slug = item.note_slug;
      if (item.content) merged.content = (merged.content || "") + "\n\n" + item.content;
      if (item.tags) merged.tags = Array.from(new Set([...(merged.tags || []), ...item.tags]));
      for (const type of types) {
        if (item[type]) {
          (merged as any)[type] = [...((merged as any)[type] || []), ...(item as any)[type]];
        }
      }
    }
    return merged;
  };

  const doImport = async () => {
    if (!validation?.data) return;
    setStep("importing");
    setProgress(10);

    const data = validation.data;

    try {
      const slug = data.note_slug || data.note_title.toLowerCase().replace(/\s+/g, "-");
      const now = new Date().toISOString();

      // Upsert note
      const { data: existing } = await supabase
        .from("notes")
        .select("id")
        .eq("slug", slug)
        .single();

      let noteId: string;
      if (existing) {
        if (importMode === "skip") {
          setImportResult({ success: true, note_id: existing.id, note_title: data.note_title, stats: {}, errors: [{ type: "skipped", message: `Note "${slug}" already exists` }] });
          setStep("done");
          return;
        }
        await supabase.from("notes").update({
          title: data.note_title,
          content: data.content || "",
          tags: data.tags || [],
          updated_at: now,
        }).eq("id", existing.id);
        noteId = existing.id;
      } else {
        const { data: created } = await supabase.from("notes").insert({
          title: data.note_title,
          slug,
          content: data.content || "",
          tags: data.tags || [],
          word_count: (data.content || "").split(/\s+/).filter(Boolean).length,
          created_at: now,
          updated_at: now,
        }).select("id").single();
        noteId = created!.id;
      }

      setProgress(30);

      // Import content types
      const types: [string, string, (item: any) => any][] = [
        ["flashcards", "flashcards", (i: any) => ({ note_id: noteId, question: i.question, answer: i.answer, difficulty: i.difficulty || "medium", topic: i.topic, tags: i.tags || [] })],
        ["mcqs", "mcqs", (i: any) => ({ note_id: noteId, question: i.question, options: i.options, correct_answer: i.correct_answer, explanation: i.explanation || "", difficulty: i.difficulty || "medium", topic: i.topic })],
        ["msqs", "msqs", (i: any) => ({ note_id: noteId, question: i.question, options: i.options, correct_answers: i.correct_answers, explanation: i.explanation || "", difficulty: i.difficulty || "medium", topic: i.topic })],
        ["nat_questions", "nat_questions", (i: any) => ({ note_id: noteId, question: i.question, answer: parseFloat(i.answer), unit: i.unit, explanation: i.explanation || "", difficulty: i.difficulty || "medium", topic: i.topic })],
        ["summaries", "summaries", (i: any) => ({ note_id: noteId, summary_type: i.summary_type, content: i.content })],
        ["mindmaps", "mindmaps", (i: any) => ({ note_id: noteId, content: i.content || "", mermaid_syntax: i.mermaid_syntax })],
        ["quizzes", "quizzes", (i: any) => ({ note_id: noteId, title: i.title, description: i.description, quiz_type: i.quiz_type || "practice", questions: i.questions, time_limit: i.time_limit })],
      ];

      const stats: Record<string, number> = {};
      const errors: any[] = [];
      let total = types.filter(([key]) => (data as any)[key]?.length).length;
      let done = 0;

      for (const [key, table, builder] of types) {
        const items = (data as any)[key];
        if (!items?.length) continue;

        if (importMode === "replace") {
          await supabase.from(table).delete().eq("note_id", noteId);
        }

        // Batch insert (50 per batch)
        const rows = items.map(builder);
        let inserted = 0;
        for (let i = 0; i < rows.length; i += 50) {
          const batch = rows.slice(i, i + 50);
          const { error } = await supabase.from(table).insert(batch);
          if (error) {
            errors.push({ type: "insert_error", detail: `${table}: ${error.message}` });
          } else {
            inserted += batch.length;
          }
        }
        stats[key] = inserted;
        done++;
        setProgress(30 + Math.round((done / total) * 60));
      }

      setProgress(100);
      setImportResult({ success: true, note_id: noteId, note_title: data.note_title, stats, errors });
    } catch (e) {
      setImportResult({ success: false, note_title: data.note_title, stats: {}, errors: [{ type: "exception", detail: (e as Error).message }] });
    }
    setStep("done");
  };

  const reset = () => {
    setStep("input");
    setFiles([]);
    setPasteText("");
    setValidation(null);
    setImportResult(null);
    setProgress(0);
  };

  const contentCount = validation?.data ? Object.entries(CONTENT_LABELS).filter(([k]) => ((validation.data as any)[k]?.length) > 0).length : 0;

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-white">Import Study Content</h1>
        <p className="text-slate-400 text-sm mt-1">Upload JSON from any LLM — validate, preview, and save to your study library</p>
      </div>

      {/* Steps */}
      <div className="flex items-center gap-2 mb-8 text-sm">
        {["Upload", "Preview", "Import", "Done"].map((s, i) => {
          const stepIdx = ["input", "preview", "importing", "done"].indexOf(step);
          const isActive = stepIdx === i;
          const isDone = stepIdx > i;
          return (
            <div key={s} className="flex items-center gap-2">
              <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold border-2 ${
                isActive ? "bg-accent-500 border-accent-500 text-white" :
                isDone ? "bg-accent-500/20 border-accent-500 text-accent-400" :
                "border-surface-600 text-slate-500"
              }`}>{i + 1}</div>
              <span className={isActive ? "text-accent-400" : "text-slate-500"}>{s}</span>
              {i < 3 && <svg className="w-4 h-4 text-surface-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>}
            </div>
          );
        })}
      </div>

      {/* Step: Input */}
      {step === "input" && (
        <div>
          <div className="flex gap-1 mb-6 bg-surface-800 rounded-lg p-1 w-fit">
            <button onClick={() => setInputMode("file")} className={`px-4 py-2 rounded-md text-sm font-medium transition ${inputMode === "file" ? "bg-surface-700 text-white" : "text-slate-400 hover:text-white"}`}>Upload File</button>
            <button onClick={() => setInputMode("paste")} className={`px-4 py-2 rounded-md text-sm font-medium transition ${inputMode === "paste" ? "bg-surface-700 text-white" : "text-slate-400 hover:text-white"}`}>Paste JSON</button>
          </div>

          {inputMode === "file" ? (
            <div>
              <div
                ref={dragRef}
                onDragOver={(e) => { e.preventDefault(); e.currentTarget.classList.add("border-accent-500", "bg-accent-500/10"); }}
                onDragLeave={(e) => { e.currentTarget.classList.remove("border-accent-500", "bg-accent-500/10"); }}
                onDrop={handleDrop}
                className="border-2 border-dashed border-surface-600 hover:border-surface-500 rounded-xl p-12 text-center transition cursor-pointer"
              >
                <svg className="w-12 h-12 mx-auto mb-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
                <p className="text-slate-300 font-medium">Drag & drop JSON files here</p>
                <p className="text-slate-500 text-sm mt-1">or click to browse</p>
                <input ref={fileInputRef} type="file" accept=".json" multiple onChange={(e) => e.target.files && handleFiles(e.target.files)} className="hidden" />
                <button onClick={() => fileInputRef.current?.click()} className="btn-primary mt-4">Browse Files</button>
              </div>

              {files.length > 0 && (
                <div className="mt-4 space-y-2">
                  {files.map((f, i) => (
                    <div key={i} className="card flex items-center justify-between py-2">
                      <div className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <span className="text-sm text-slate-300">{f.name}</span>
                        <span className="text-xs text-slate-500">{(f.size / 1024).toFixed(1)} KB</span>
                      </div>
                      <button onClick={() => { setFiles((p) => p.filter((_, j) => j !== i)); }} className="text-slate-500 hover:text-red-400 transition">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                      </button>
                    </div>
                  ))}
                  <button onClick={parseFiles} className="btn-primary w-full">Parse & Preview</button>
                </div>
              )}
            </div>
          ) : (
            <div>
              <textarea
                value={pasteText}
                onChange={(e) => { setPasteText(e.target.value); setValidation(null); }}
                className="input h-64 resize-y font-mono"
                placeholder={`Paste your JSON here...\n\n{\n  "note_title": "Signal Classification",\n  "flashcards": [...],\n  "mcqs": [...]\n}`}
              />
              <div className="flex gap-2 mt-4">
                <button onClick={parsePaste} disabled={!pasteText.trim()} className="btn-primary">Validate & Preview</button>
                <button onClick={() => { setPasteText(""); setValidation(null); }} className="btn-secondary">Clear</button>
              </div>
            </div>
          )}

          {validation && !validation.valid && (
            <div className="mt-6 bg-red-900/30 border border-red-800 rounded-xl p-4">
              <h3 className="text-red-400 font-medium mb-2">Validation Errors</h3>
              <ul className="space-y-1">
                {validation.errors.map((err, i) => (
                  <li key={i} className="text-sm text-red-300 flex items-start gap-2">
                    <svg className="w-4 h-4 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <span>{err}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}

      {/* Step: Preview */}
      {step === "preview" && validation?.data && (
        <div>
          <div className="card mb-6">
            <div className="flex items-start justify-between">
              <div>
                <h2 className="text-lg font-bold text-white">{validation.data.note_title}</h2>
                <p className="text-sm text-slate-400 mt-1">
                  Slug: <span className="text-slate-500">{validation.data.note_slug || "auto"}</span>
                  {validation.data.tags && validation.data.tags.length > 0 && (
                    <span className="ml-3">Tags: {validation.data.tags.map((t) => <span key={t} className="tag text-xs ml-1">{t}</span>)}</span>
                  )}
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 mt-4">
              {Object.entries(CONTENT_LABELS).map(([key, label]) => {
                const count = ((validation.data as any)[key]?.length) || 0;
                if (!count) return null;
                return (
                  <div key={key} className="bg-surface-800 rounded-lg px-3 py-1.5 text-sm">
                    <span className="text-accent-400 font-bold">{count}</span>
                    <span className="text-slate-400 ml-1">{label}</span>
                  </div>
                );
              })}
            </div>
            {validation.warnings.length > 0 && (
              <div className="mt-3 text-xs text-yellow-400/70">
                {validation.warnings.map((w, i) => <p key={i}>{w}</p>)}
              </div>
            )}
          </div>

          <div className="card">
            <div className="flex items-center gap-4 flex-wrap">
              <div>
                <label className="text-sm text-slate-400 block mb-1">Import Mode</label>
                <select value={importMode} onChange={(e) => setImportMode(e.target.value)} className="bg-surface-800 border border-surface-700 rounded-lg px-3 py-2 text-sm text-slate-200 focus:outline-none focus:border-accent-500">
                  <option value="replace">Replace existing</option>
                  <option value="skip">Skip if exists</option>
                </select>
              </div>
              <div className="flex-1" />
              <button onClick={doImport} className="btn-primary">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" /></svg>
                Import{contentCount > 0 ? ` ${contentCount} types` : ""}
              </button>
              <button onClick={() => setStep("input")} className="btn-secondary">Back</button>
            </div>
          </div>

          {/* Content Preview */}
          <div className="space-y-4 mt-4">
            {/* Flashcards */}
            {validation.data.flashcards && validation.data.flashcards.length > 0 && (
              <PreviewSection title={`Flashcards (${validation.data.flashcards.length})`}>
                {validation.data.flashcards.slice(0, 5).map((fc, i) => (
                  <div key={i} className="bg-surface-800 rounded-lg p-3 text-sm">
                    <p className="font-medium text-slate-200"><span className="text-accent-400">Q{i + 1}: </span>{fc.question}</p>
                    <p className="text-green-400 mt-1">A: {fc.answer}</p>
                    {fc.difficulty && <span className="text-xs text-slate-500 mt-1 block">{fc.difficulty}</span>}
                  </div>
                ))}
                {validation.data.flashcards.length > 5 && <p className="text-sm text-slate-500 text-center mt-2">...and {validation.data.flashcards.length - 5} more</p>}
              </PreviewSection>
            )}

            {/* MCQs */}
            {validation.data.mcqs && validation.data.mcqs.length > 0 && (
              <PreviewSection title={`MCQs (${validation.data.mcqs.length})`}>
                {validation.data.mcqs.slice(0, 5).map((mcq, i) => (
                  <div key={i} className="bg-surface-800 rounded-lg p-3 text-sm">
                    <p className="font-medium text-slate-200">Q{i + 1}: {mcq.question}</p>
                    <div className="mt-2 space-y-1">
                      {mcq.options.map((opt, oi) => (
                        <div key={oi} className={`flex items-center gap-2 px-3 py-1.5 rounded-md ${opt === mcq.correct_answer ? "bg-green-900/30 text-green-300 border border-green-800" : "text-slate-400"}`}>
                          <span>{String.fromCharCode(65 + oi)}.</span>
                          <span>{opt}</span>
                          {opt === mcq.correct_answer && <svg className="w-4 h-4 text-green-400 ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </PreviewSection>
            )}

            {/* Summaries */}
            {validation.data.summaries && validation.data.summaries.length > 0 && (
              <PreviewSection title={`Summaries (${validation.data.summaries.length})`}>
                {validation.data.summaries.map((s, i) => (
                  <div key={i} className="bg-surface-800 rounded-lg p-3 text-sm">
                    <span className="tag text-xs">{s.summary_type}</span>
                    <p className="text-slate-300 mt-2">{s.content.slice(0, 200)}{s.content.length > 200 ? "..." : ""}</p>
                  </div>
                ))}
              </PreviewSection>
            )}
          </div>
        </div>
      )}

      {/* Step: Importing */}
      {step === "importing" && (
        <div className="card text-center py-12">
          <div className="w-12 h-12 mx-auto mb-4 border-4 border-accent-500 border-t-transparent rounded-full animate-spin" />
          <h2 className="text-lg font-semibold text-white">Importing...</h2>
          <p className="text-sm text-slate-400 mt-1">Saving content to your library</p>
          <div className="mt-4 max-w-md mx-auto">
            <div className="h-2 bg-surface-800 rounded-full overflow-hidden">
              <div className="h-full bg-accent-500 rounded-full transition-all duration-500" style={{ width: `${progress}%` }} />
            </div>
          </div>
        </div>
      )}

      {/* Step: Done */}
      {step === "done" && importResult && (
        <div>
          {importResult.success ? (
            <>
              <div className="card text-center py-8 border-green-800 bg-green-900/20">
                <svg className="w-16 h-16 mx-auto mb-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h2 className="text-xl font-bold text-white">Import Successful!</h2>
                <p className="text-slate-400 mt-1">{importResult.note_title}</p>
              </div>

              {Object.keys(importResult.stats).length > 0 && (
                <div className="card mt-4">
                  <h3 className="text-md font-semibold text-white mb-3">Import Statistics</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {Object.entries(importResult.stats).map(([type, count]) => (
                      <div key={type} className="bg-surface-800 rounded-lg p-3 text-center">
                        <p className="text-2xl font-bold text-accent-400">{count}</p>
                        <p className="text-xs text-slate-400 capitalize">{CONTENT_LABELS[type] || type.replace(/_/g, " ")}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {importResult.errors.length > 0 && (
                <div className="mt-4 bg-yellow-900/30 border border-yellow-800 rounded-lg p-3">
                  <p className="text-yellow-400 text-sm font-medium">Warnings</p>
                  {importResult.errors.map((err, i) => (
                    <p key={i} className="text-xs text-yellow-300 mt-1">{err.message || err.detail}</p>
                  ))}
                </div>
              )}

              <div className="flex gap-3 mt-6">
                <Link href={`/notes/${importResult.note_id}`} className="btn-primary">View Note</Link>
                <button onClick={reset} className="btn-secondary">Import Another</button>
              </div>
            </>
          ) : (
            <>
              <div className="card text-center py-8 border-red-800 bg-red-900/20">
                <svg className="w-16 h-16 mx-auto mb-4 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <h2 className="text-xl font-bold text-white">Import Failed</h2>
              </div>
              <div className="card mt-4">
                {importResult.errors.map((err, i) => (
                  <div key={i} className="bg-red-900/30 border border-red-800 rounded-lg p-3 mb-2 text-sm text-red-300">
                    <p><strong>{err.type}</strong>: {err.detail || err.message}</p>
                  </div>
                ))}
              </div>
              <button onClick={reset} className="btn-secondary mt-6">Try Again</button>
            </>
          )}
        </div>
      )}
    </div>
  );
}

function PreviewSection({ title, children }: { title: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="card">
      <button onClick={() => setOpen(!open)} className="flex items-center justify-between w-full">
        <h3 className="text-md font-semibold text-white">{title}</h3>
        <svg className={`w-5 h-5 text-slate-400 transition ${open ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && <div className="mt-3 space-y-2">{children}</div>}
    </div>
  );
}
