"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { Note } from "@/lib/types";
import Link from "next/link";

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Note[]>([]);
  const [searched, setSearched] = useState(false);

  useEffect(() => {
    if (!query.trim()) { setResults([]); setSearched(false); return; }
    const timer = setTimeout(async () => {
      const q = `%${query}%`;
      const { data } = await supabase
        .from("notes")
        .select("id, title, slug, content, tags, updated_at")
        .or(`title.ilike.${q},content.ilike.${q}`)
        .limit(20);
      setResults((data as Note[]) || []);
      setSearched(true);
    }, 300);
    return () => clearTimeout(timer);
  }, [query]);

  // Keyboard shortcut
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        document.querySelector<HTMLInputElement>("#search-input")?.focus();
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold text-white mb-6">Search</h1>

      <div className="relative">
        <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <input
          id="search-input"
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search notes..."
          className="input pl-10"
          autoFocus
        />
      </div>

      <div className="mt-6 space-y-2">
        {!searched && query && <div className="flex justify-center py-8"><div className="w-5 h-5 border-2 border-accent-500 border-t-transparent rounded-full animate-spin" /></div>}
        {searched && results.length === 0 && (
          <div className="card text-center py-8">
            <p className="text-slate-500">No results for "{query}"</p>
          </div>
        )}
        {results.map((note) => (
          <Link key={note.id} href={`/notes/${note.id}`} className="card block hover:bg-surface-800/80 transition-colors">
            <p className="font-medium text-slate-200">{note.title}</p>
            <p className="text-sm text-slate-500 mt-1 line-clamp-2">{note.content?.slice(0, 200)}</p>
            <div className="flex items-center gap-2 mt-2">
              {note.tags?.map((t) => <span key={t} className="tag text-xs">{t}</span>)}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
