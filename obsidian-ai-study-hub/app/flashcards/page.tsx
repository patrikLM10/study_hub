"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { Flashcard } from "@/lib/types";

export default function FlashcardsPage() {
  const [cards, setCards] = useState<Flashcard[]>([]);
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [loading, setLoading] = useState(true);
  const [difficulty, setDifficulty] = useState("all");

  useEffect(() => {
    let query = supabase.from("flashcards").select("*, notes!inner(title, slug)");
    if (difficulty !== "all") query = query.eq("difficulty", difficulty);
    query.order("created_at").then(({ data }) => {
      setCards((data as any) || []);
      setLoading(false);
    });
  }, [difficulty]);

  const current = cards[index];

  const next = () => {
    if (index < cards.length - 1) { setIndex(index + 1); setFlipped(false); }
  };
  const prev = () => {
    if (index > 0) { setIndex(index - 1); setFlipped(false); }
  };
  const shuffle = () => {
    const arr = [...cards];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    setCards(arr);
    setIndex(0);
    setFlipped(false);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-white">Flashcards</h1>
          <p className="text-slate-400 text-sm mt-1">{cards.length} cards</p>
        </div>
        <div className="flex items-center gap-2">
          <select
            value={difficulty}
            onChange={(e) => { setDifficulty(e.target.value); setIndex(0); setFlipped(false); }}
            className="bg-surface-800 border border-surface-700 rounded-lg px-3 py-2 text-sm text-slate-200"
          >
            <option value="all">All</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
          <button onClick={shuffle} className="btn-secondary">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
            Shuffle
          </button>
        </div>
      </div>

      {loading ? (
        <div className="flex justify-center py-12"><div className="w-6 h-6 border-2 border-accent-500 border-t-transparent rounded-full animate-spin" /></div>
      ) : cards.length === 0 ? (
        <div className="card text-center py-12">
          <p className="text-slate-500">No flashcards found.</p>
        </div>
      ) : (
        <div>
          <div className="flex items-center justify-between text-sm text-slate-500 mb-4">
            <span>{index + 1} / {cards.length}</span>
            <span className="tag">{current.difficulty}</span>
          </div>

          <div
            onClick={() => setFlipped(!flipped)}
            className="card min-h-[250px] flex items-center justify-center cursor-pointer hover:bg-surface-800/80 transition-all"
          >
            <div className="text-center max-w-lg">
              {flipped ? (
                <div>
                  <p className="text-xs text-green-400 font-medium mb-3 uppercase tracking-wider">Answer</p>
                  <p className="text-lg text-slate-200 leading-relaxed">{current.answer}</p>
                </div>
              ) : (
                <div>
                  <p className="text-xs text-accent-400 font-medium mb-3 uppercase tracking-wider">Question</p>
                  <p className="text-lg text-slate-200 leading-relaxed">{current.question}</p>
                </div>
              )}
            </div>
          </div>

          <p className="text-xs text-slate-600 text-center mt-3">Click card to flip</p>

          <div className="flex items-center justify-center gap-4 mt-6">
            <button onClick={prev} disabled={index === 0} className="btn-secondary" style={{ opacity: index === 0 ? 0.5 : 1 }}>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
              Previous
            </button>
            <button onClick={next} disabled={index >= cards.length - 1} className="btn-primary" style={{ opacity: index >= cards.length - 1 ? 0.5 : 1 }}>
              Next
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
