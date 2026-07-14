export interface Note {
  id: string
  title: string
  slug: string
  content: string
  content_html?: string
  tags: string[]
  folder_path?: string
  word_count: number
  created_at: string
  updated_at: string
}

export interface Flashcard {
  id: string
  note_id: string
  question: string
  answer: string
  difficulty: "easy" | "medium" | "hard"
  topic?: string
  subtopic?: string
  tags: string[]
  created_at: string
}

export interface MCQ {
  id: string
  note_id: string
  question: string
  options: string[]
  correct_answer: string
  explanation?: string
  difficulty: "easy" | "medium" | "hard"
  topic?: string
  created_at: string
}

export interface MSQ {
  id: string
  note_id: string
  question: string
  options: string[]
  correct_answers: string[]
  explanation?: string
  difficulty: "easy" | "medium" | "hard"
  topic?: string
  created_at: string
}

export interface NATQuestion {
  id: string
  note_id: string
  question: string
  answer: number
  unit?: string
  explanation?: string
  difficulty: "easy" | "medium" | "hard"
  topic?: string
  created_at: string
}

export interface Summary {
  id: string
  note_id: string
  summary_type: string
  content: string
  created_at: string
}

export interface Mindmap {
  id: string
  note_id: string
  content?: string
  mermaid_syntax: string
  created_at: string
}

export interface Quiz {
  id: string
  note_id: string
  title: string
  description?: string
  quiz_type: string
  questions: QuizQuestion[]
  time_limit?: number
  created_at: string
}

export interface QuizQuestion {
  question: string
  options: string[]
  correct_answer: string
  explanation?: string
}

export interface QuizAttempt {
  id: string
  quiz_id: string
  score: number
  total: number
  answers: (string | null)[]
  started_at: string
  completed_at: string
  created_at: string
}

export interface Bookmark {
  id: string
  note_id: string
  label?: string
  created_at: string
}

// Import types

export interface ImportFlashcard {
  question: string
  answer: string
  difficulty?: string
  topic?: string
  subtopic?: string
  tags?: string[]
}

export interface ImportMCQ {
  question: string
  options: string[]
  correct_answer: string
  explanation?: string
  difficulty?: string
  topic?: string
}

export interface ImportMSQ {
  question: string
  options: string[]
  correct_answers: string[]
  explanation?: string
  difficulty?: string
  topic?: string
}

export interface ImportNATQuestion {
  question: string
  answer: number
  unit?: string
  explanation?: string
  difficulty?: string
  topic?: string
}

export interface ImportSummary {
  summary_type: string
  content: string
}

export interface ImportMindmap {
  content?: string
  mermaid_syntax: string
}

export interface ImportQuizQuestion {
  question: string
  options: string[]
  correct_answer: string
  explanation?: string
}

export interface ImportQuiz {
  title: string
  description?: string
  quiz_type?: string
  questions: ImportQuizQuestion[]
  time_limit?: number
}

export interface StudyPackage {
  note_title: string
  note_slug?: string
  folder_path?: string
  tags?: string[]
  content?: string
  flashcards?: ImportFlashcard[]
  mcqs?: ImportMCQ[]
  msqs?: ImportMSQ[]
  nat_questions?: ImportNATQuestion[]
  summaries?: ImportSummary[]
  mindmaps?: ImportMindmap[]
  quizzes?: ImportQuiz[]
}

export interface ImportResult {
  success: boolean
  note_id?: string
  note_title: string
  stats: Record<string, number>
  errors: ImportError[]
}

export interface ImportError {
  type: string
  message?: string
  detail?: string
}
