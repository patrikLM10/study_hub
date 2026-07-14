"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import Link from "next/link";
import { Note } from "@/lib/types";

export default function Dashboard() {
  const [stats, setStats] = useState({ notes: 0, flashcards: 0, mcqs: 0, quizzes: 0 });
  const [recentNotes, setRecentNotes] = useState<Note[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      const [notesCount, flashcardsCount, mcqsCount, quizzesCount, notes] = await Promise.all([
        supabase.from("notes").select("id", { count: "exact", head: true }),
        supabase.from("flashcards").select("id", { count: "exact", head: true }),
        supabase.from("mcqs").select("id", { count: "exact", head: true }),
        supabase.from("quizzes").select("id", { count: "exact", head: true }),
        supabase.from("notes").select("*").order("updated_at", { ascending: false }).limit(5),
      ]);
      setStats({
        notes: notesCount.count ?? 0,
        flashcards: flashcardsCount.count ?? 0,
        mcqs: mcqsCount.count ?? 0,
        quizzes: quizzesCount.count ?? 0,
      });
      setRecentNotes((notes.data as Note[]) || []);
      setLoading(false);
    }
    load();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="w-6 h-6 border-2 border-accent-500 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-white">Dashboard</h1>
        <p className="text-slate-400 mt-1">Overview of your study materials</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <StatCard href="/notes" label="Notes" value={stats.notes} />
        <StatCard href="/flashcards" label="Flashcards" value={stats.flashcards} />
        <StatCard href="/quizzes" label="MCQs" value={stats.mcqs} />
        <StatCard href="/quizzes" label="Quizzes" value={stats.quizzes} />
      </div>

      <div className="card">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-white">Recent Notes</h2>
          <Link href="/notes" className="text-sm text-accent-400 hover:text-accent-300">View all</Link>
        </div>
        {recentNotes.length === 0 ? (
          <div className="text-center py-8">
            <svg className="w-12 h-12 mx-auto mb-3 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
            </svg>
            <p className="text-slate-500">No notes yet.</p>
            <p className="text-slate-600 text-sm mt-1">Import study content to get started.</p>
            <Link href="/import" className="btn-primary mt-4 inline-flex">Import Content</Link>
          </div>
        ) : (
          <div className="space-y-2">
            {recentNotes.map((note) => (
              <Link
                key={note.id}
                href={`/notes/${note.id}`}
                className="flex items-center justify-between p-3 rounded-lg hover:bg-surface-800 transition-colors"
              >
                <div>
                  <p className="text-sm font-medium text-slate-200">{note.title}</p>
                  <div className="flex gap-2 mt-1">
                    {note.tags?.map((t) => (
                      <span key={t} className="tag text-xs">{t}</span>
                    ))}
                  </div>
                </div>
                <span className="text-xs text-slate-500">{formatDate(note.updated_at)}</span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function StatCard({ href, label, value }: { href: string; label: string; value: number }) {
  return (
    <Link href={href} className="card hover:bg-surface-800/80 transition-colors">
      <p className="text-2xl font-bold text-white">{value}</p>
      <p className="text-sm text-slate-400 mt-1">{label}</p>
    </Link>
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
