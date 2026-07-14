"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import Link from "next/link";

interface QuizSummary {
  id: string
  title: string
  description?: string
  quiz_type: string
  questions: any[]
  time_limit?: number
  created_at: string
}

export default function QuizzesPage() {
  const [quizzes, setQuizzes] = useState<QuizSummary[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase
      .from("quizzes")
      .select("id, title, description, quiz_type, questions, time_limit, created_at")
      .order("created_at", { ascending: false })
      .then(({ data }) => {
        setQuizzes((data as QuizSummary[]) || []);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold text-white mb-6">Quizzes</h1>

      {loading ? (
        <div className="flex justify-center py-12"><div className="w-6 h-6 border-2 border-accent-500 border-t-transparent rounded-full animate-spin" /></div>
      ) : quizzes.length === 0 ? (
        <div className="card text-center py-12">
          <svg className="w-12 h-12 mx-auto mb-3 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
          </svg>
          <p className="text-slate-500">No quizzes yet.</p>
        </div>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2">
          {quizzes.map((quiz) => (
            <Link key={quiz.id} href={`/quizzes/${quiz.id}`} className="card hover:bg-surface-800/80 transition-colors">
              <h3 className="font-semibold text-white">{quiz.title}</h3>
              {quiz.description && <p className="text-sm text-slate-400 mt-1">{quiz.description}</p>}
              <div className="flex items-center gap-3 mt-3 text-xs text-slate-500">
                <span>{quiz.questions?.length || 0} questions</span>
                {quiz.time_limit && <span>{quiz.time_limit} min</span>}
                <span className="tag">{quiz.quiz_type}</span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
