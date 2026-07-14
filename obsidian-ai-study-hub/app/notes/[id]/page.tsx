"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { Note, Flashcard, MCQ } from "@/lib/types";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

export default function NoteDetailPage() {
  const { id } = useParams<{ id: string }>();
  const [note, setNote] = useState<Note | null>(null);
  const [flashcards, setFlashcards] = useState<Flashcard[]>([]);
  const [mcqs, setMcqs] = useState<MCQ[]>([]);
  const [tab, setTab] = useState("content");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      const [noteRes, fcRes, mcqRes] = await Promise.all([
        supabase.from("notes").select("*").eq("id", id).single(),
        supabase.from("flashcards").select("*").eq("note_id", id),
        supabase.from("mcqs").select("*").eq("note_id", id),
      ]);
      setNote(noteRes.data as Note);
      setFlashcards((fcRes.data as Flashcard[]) || []);
      setMcqs((mcqRes.data as MCQ[]) || []);
      setLoading(false);
    }
    load();
  }, [id]);

  if (loading) return <div className="flex justify-center py-12"><div className="w-6 h-6 border-2 border-accent-500 border-t-transparent rounded-full animate-spin" /></div>;
  if (!note) return <div className="card text-center py-12"><p className="text-slate-500">Note not found.</p></div>;

  const tabs = [
    { key: "content", label: "Content" },
    ...(flashcards.length ? [{ key: "flashcards", label: `Flashcards (${flashcards.length})` }] : []),
    ...(mcqs.length ? [{ key: "mcqs", label: `MCQs (${mcqs.length})` }] : []),
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-white">{note.title}</h1>
        <div className="flex items-center gap-2 mt-2">
          {note.tags?.map((t) => <span key={t} className="tag">{t}</span>)}
        </div>
      </div>

      {tabs.length > 1 && (
        <div className="flex gap-1 mb-6 bg-surface-800 rounded-lg p-1 w-fit">
          {tabs.map((t) => (
            <button
              key={t.key}
              onClick={() => setTab(t.key)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition ${tab === t.key ? "bg-surface-700 text-white" : "text-slate-400 hover:text-white"}`}
            >{t.label}</button>
          ))}
        </div>
      )}

      {tab === "content" && (
        <div className="card">
          <div className="prose-custom">
            <ReactMarkdown remarkPlugins={[remarkGfm, remarkMath]} rehypePlugins={[rehypeKatex]}>
              {note.content || "*No content*"}
            </ReactMarkdown>
          </div>
        </div>
      )}

      {tab === "flashcards" && (
        <div className="space-y-2">
          {flashcards.map((fc) => (
            <FlashcardCard key={fc.id} flashcard={fc} />
          ))}
        </div>
      )}

      {tab === "mcqs" && (
        <div className="space-y-4">
          {mcqs.map((mcq) => (
            <MCQCard key={mcq.id} mcq={mcq} />
          ))}
        </div>
      )}
    </div>
  );
}

function FlashcardCard({ flashcard }: { flashcard: Flashcard }) {
  const [flipped, setFlipped] = useState(false);
  return (
    <div
      onClick={() => setFlipped(!flipped)}
      className="card cursor-pointer hover:bg-surface-800/80 transition-all min-h-[100px] flex items-center"
    >
      <div className="w-full text-center">
        {flipped ? (
          <div>
            <p className="text-xs text-green-400 font-medium mb-2">ANSWER</p>
            <p className="text-slate-200">{flashcard.answer}</p>
          </div>
        ) : (
          <div>
            <p className="text-xs text-accent-400 font-medium mb-2">QUESTION</p>
            <p className="text-slate-200">{flashcard.question}</p>
          </div>
        )}
        <div className="flex items-center justify-center gap-2 mt-3">
          <span className="tag text-xs">{flashcard.difficulty}</span>
          {flashcard.tags?.slice(0, 2).map((t) => <span key={t} className="tag text-xs">{t}</span>)}
        </div>
      </div>
    </div>
  );
}

function MCQCard({ mcq }: { mcq: MCQ }) {
  const [revealed, setRevealed] = useState(false);
  return (
    <div className="card">
      <p className="text-sm font-medium text-slate-200">{mcq.question}</p>
      <div className="mt-3 space-y-1">
        {mcq.options.map((opt, i) => (
          <div
            key={i}
            className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm border transition ${
              revealed && opt === mcq.correct_answer
                ? "bg-green-900/30 border-green-800 text-green-300"
                : "bg-surface-800/50 border-surface-700/50 text-slate-400"
            }`}
          >
            <span className="w-6 h-6 rounded-full bg-surface-800 flex items-center justify-center text-xs font-medium">
              {String.fromCharCode(65 + i)}
            </span>
            <span>{opt}</span>
            {revealed && opt === mcq.correct_answer && (
              <svg className="w-4 h-4 text-green-400 ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            )}
          </div>
        ))}
      </div>
      <button onClick={() => setRevealed(!revealed)} className="btn-ghost mt-3 text-xs">
        {revealed ? "Hide answer" : "Reveal answer"}
      </button>
      {revealed && mcq.explanation && (
        <p className="text-xs text-slate-500 mt-2 italic border-t border-surface-800 pt-2">{mcq.explanation}</p>
      )}
    </div>
  );
}
