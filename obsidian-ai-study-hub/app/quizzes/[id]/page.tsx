"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { Quiz, QuizQuestion } from "@/lib/types";
import Link from "next/link";

export default function QuizTakePage() {
  const { id } = useParams<{ id: string }>();
  const [quiz, setQuiz] = useState<Quiz | null>(null);
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<(string | null)[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [loading, setLoading] = useState(true);
  const [startedAt, setStartedAt] = useState("");

  useEffect(() => {
    supabase.from("quizzes").select("*").eq("id", id).single().then(({ data }) => {
      const q = data as Quiz;
      setQuiz(q);
      setAnswers(new Array(q.questions.length).fill(null));
      setStartedAt(new Date().toISOString());
      setLoading(false);
    });
  }, [id]);

  if (loading) return <div className="flex justify-center py-12"><div className="w-6 h-6 border-2 border-accent-500 border-t-transparent rounded-full animate-spin" /></div>;
  if (!quiz) return <div className="card text-center py-12"><p className="text-slate-500">Quiz not found.</p></div>;

  const questions = quiz.questions;
  const currentQ = questions[current];

  const select = (opt: string) => {
    if (submitted) return;
    const next = [...answers];
    next[current] = opt;
    setAnswers(next);
  };

  const submit = async () => {
    let s = 0;
    questions.forEach((q, i) => {
      if (answers[i] === q.correct_answer) s++;
    });
    setScore(s);
    setSubmitted(true);

    const completedAt = new Date().toISOString();
    await supabase.from("quiz_attempts").insert({
      quiz_id: quiz.id,
      score: s,
      total: questions.length,
      answers,
      started_at: startedAt,
      completed_at: completedAt,
    });
  };

  const unanswered = answers.filter((a) => a === null).length;

  if (submitted) {
    const pct = Math.round((score / questions.length) * 100);
    return (
      <div className="max-w-2xl mx-auto">
        <div className="card text-center py-8 border-green-800 bg-green-900/20">
          <h2 className="text-2xl font-bold text-white mb-2">Quiz Complete!</h2>
          <p className="text-5xl font-bold text-accent-400 mb-2">{score}/{questions.length}</p>
          <p className="text-slate-400">{pct}%</p>
        </div>

        <div className="mt-6 space-y-4">
          {questions.map((q, i) => (
            <div key={i} className={`card ${answers[i] === q.correct_answer ? "border-green-800/50" : "border-red-800/50"}`}>
              <p className="text-sm font-medium text-slate-200">Q{i + 1}: {q.question}</p>
              <div className="mt-2 space-y-1">
                {q.options.map((opt, oi) => {
                  const isCorrect = opt === q.correct_answer;
                  const isSelected = opt === answers[i];
                  return (
                    <div key={oi} className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm border ${
                      isCorrect ? "bg-green-900/30 border-green-800 text-green-300" :
                      isSelected && !isCorrect ? "bg-red-900/30 border-red-800 text-red-300" :
                      "text-slate-500"
                    }`}>
                      <span>{String.fromCharCode(65 + oi)}.</span>
                      <span>{opt}</span>
                      {isCorrect && <svg className="w-4 h-4 text-green-400 ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>}
                      {isSelected && !isCorrect && <svg className="w-4 h-4 text-red-400 ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>}
                    </div>
                  );
                })}
              </div>
              {q.explanation && <p className="text-xs text-slate-500 mt-2 italic">{q.explanation}</p>}
            </div>
          ))}
        </div>

        <Link href="/quizzes" className="btn-primary mt-6 inline-flex">Back to Quizzes</Link>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-6">
        <h1 className="text-xl font-bold text-white">{quiz.title}</h1>
        <div className="flex items-center gap-3 mt-2 text-sm text-slate-400">
          <span>Question {current + 1} of {questions.length}</span>
          <span className="text-slate-600">|</span>
          <span>{unanswered} unanswered</span>
        </div>
        <div className="flex gap-1 mt-3">
          {questions.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-8 h-8 rounded-lg text-xs font-medium border transition ${
                answers[i] ? "border-accent-500 bg-accent-500/20 text-accent-400" :
                current === i ? "border-accent-500 text-accent-400" :
                "border-surface-700 text-slate-500 hover:border-surface-500"
              }`}
            >{i + 1}</button>
          ))}
        </div>
      </div>

      <div className="card">
        <p className="text-base font-medium text-slate-200 mb-4">{currentQ.question}</p>
        <div className="space-y-2">
          {currentQ.options.map((opt, i) => (
            <div
              key={i}
              onClick={() => select(opt)}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm border cursor-pointer transition ${
                answers[current] === opt
                  ? "border-accent-500 bg-accent-500/10 text-accent-300"
                  : "border-surface-700 text-slate-400 hover:border-surface-500 hover:text-slate-200"
              }`}
            >
              <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                answers[current] === opt ? "border-accent-500" : "border-surface-600"
              }`}>
                {answers[current] === opt && <div className="w-2.5 h-2.5 rounded-full bg-accent-500" />}
              </div>
              <span>{opt}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between mt-6">
        <button
          onClick={() => setCurrent(Math.max(0, current - 1))}
          disabled={current === 0}
          className="btn-secondary"
          style={{ opacity: current === 0 ? 0.5 : 1 }}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          Previous
        </button>

        {current < questions.length - 1 ? (
          <button
            onClick={() => setCurrent(current + 1)}
            className="btn-primary"
          >
            Next
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </button>
        ) : (
          <button onClick={submit} disabled={unanswered > 0} className="btn-primary" style={{ opacity: unanswered > 0 ? 0.5 : 1 }}>
            Submit ({unanswered} unanswered)
          </button>
        )}
      </div>
    </div>
  );
}
