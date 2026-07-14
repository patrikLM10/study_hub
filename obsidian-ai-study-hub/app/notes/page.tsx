"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { Note } from "@/lib/types";
import Link from "next/link";

export default function NotesPage() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    supabase
      .from("notes")
      .select("id, title, slug, tags, word_count, created_at, updated_at")
      .order("updated_at", { ascending: false })
      .then(({ data }) => {
        setNotes((data as Note[]) || []);
        setLoading(false);
      });
  }, []);

  const filtered = search
    ? notes.filter((n) =>
        n.title.toLowerCase().includes(search.toLowerCase()) ||
        n.tags?.some((t) => t.toLowerCase().includes(search.toLowerCase()))
      )
    : notes;

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-white">Notes</h1>
          <p className="text-slate-400 text-sm mt-1">{notes.length} notes</p>
        </div>
        <Link href="/import" className="btn-primary">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
          Import
        </Link>
      </div>

      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search notes..."
        className="input mb-6"
      />

      {loading ? (
        <div className="flex justify-center py-12">
          <div className="w-6 h-6 border-2 border-accent-500 border-t-transparent rounded-full animate-spin" />
        </div>
      ) : filtered.length === 0 ? (
        <div className="card text-center py-12">
          <svg className="w-12 h-12 mx-auto mb-3 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
          </svg>
          <p className="text-slate-500">{search ? "No notes match your search." : "No notes yet."}</p>
        </div>
      ) : (
        <div className="space-y-2">
          {filtered.map((note) => (
            <Link
              key={note.id}
              href={`/notes/${note.id}`}
              className="card flex items-center justify-between hover:bg-surface-800/80 transition-colors"
            >
              <div className="min-w-0">
                <p className="text-sm font-medium text-slate-200 truncate">{note.title}</p>
                <div className="flex items-center gap-2 mt-1.5">
                  {note.tags?.slice(0, 3).map((t) => (
                    <span key={t} className="tag text-xs">{t}</span>
                  ))}
                  {note.tags && note.tags.length > 3 && (
                    <span className="text-xs text-slate-500">+{note.tags.length - 3}</span>
                  )}
                  <span className="text-xs text-slate-600">{note.word_count} words</span>
                </div>
              </div>
              <span className="text-xs text-slate-500 shrink-0 ml-4">{formatDate(note.updated_at)}</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

function formatDate(date: string) {
  const d = new Date(date);
  const now = new Date();
  const diff = now.getTime() - d.getTime();
  const mins = Math.floor(diff / 60000);
  if (mins < 1) return "just now";
  if (mins < 60) return `${mins}m ago`;
  const hrs = Math.floor(mins / 60);
  if (hrs < 24) return `${hrs}h ago`;
  const days = Math.floor(hrs / 24);
  if (days < 7) return `${days}d ago`;
  return d.toLocaleDateString("en-US", { month: "short", day: "numeric" });
}
