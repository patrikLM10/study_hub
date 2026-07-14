-- Single idempotent setup script. Safe to re-run.
-- Run this whole block in the Supabase SQL Editor.

CREATE EXTENSION IF NOT EXISTS vector;

CREATE TABLE IF NOT EXISTS notes (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title TEXT NOT NULL,
    slug TEXT NOT NULL,
    content TEXT NOT NULL,
    content_html TEXT,
    tags JSONB DEFAULT '[]'::jsonb,
    frontmatter JSONB DEFAULT '{}'::jsonb,
    word_count INT DEFAULT 0,
    file_path TEXT,
    file_hash TEXT,
    synced_at TIMESTAMPTZ DEFAULT now(),
    created_at TIMESTAMPTZ DEFAULT now(),
    updated_at TIMESTAMPTZ DEFAULT now(),
    UNIQUE(slug)
);

CREATE TABLE IF NOT EXISTS flashcards (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    note_id UUID REFERENCES notes(id) ON DELETE CASCADE NOT NULL,
    question TEXT NOT NULL,
    answer TEXT NOT NULL,
    difficulty TEXT DEFAULT 'medium',
    topic TEXT,
    subtopic TEXT,
    source_heading TEXT,
    tags JSONB DEFAULT '[]'::jsonb,
    created_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE IF NOT EXISTS mcqs (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    note_id UUID REFERENCES notes(id) ON DELETE CASCADE NOT NULL,
    question TEXT NOT NULL,
    options JSONB NOT NULL,
    correct_answer TEXT NOT NULL,
    explanation TEXT,
    difficulty TEXT DEFAULT 'medium',
    bloom_level TEXT,
    topic TEXT,
    created_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE IF NOT EXISTS msqs (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    note_id UUID REFERENCES notes(id) ON DELETE CASCADE NOT NULL,
    question TEXT NOT NULL,
    options JSONB NOT NULL,
    correct_answers JSONB NOT NULL,
    explanation TEXT,
    difficulty TEXT DEFAULT 'medium',
    topic TEXT,
    created_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE IF NOT EXISTS nat_questions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    note_id UUID REFERENCES notes(id) ON DELETE CASCADE NOT NULL,
    question TEXT NOT NULL,
    answer FLOAT NOT NULL,
    unit TEXT,
    explanation TEXT,
    difficulty TEXT DEFAULT 'medium',
    topic TEXT,
    created_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE IF NOT EXISTS summaries (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    note_id UUID REFERENCES notes(id) ON DELETE CASCADE NOT NULL,
    summary_type TEXT NOT NULL,
    content TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE IF NOT EXISTS mindmaps (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    note_id UUID REFERENCES notes(id) ON DELETE CASCADE NOT NULL,
    content TEXT,
    mermaid_syntax TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE IF NOT EXISTS revision_notes (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    note_id UUID REFERENCES notes(id) ON DELETE CASCADE NOT NULL,
    revision_type TEXT NOT NULL,
    content TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE IF NOT EXISTS formula_sheets (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    note_id UUID REFERENCES notes(id) ON DELETE CASCADE NOT NULL,
    content TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE IF NOT EXISTS cheat_sheets (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    note_id UUID REFERENCES notes(id) ON DELETE CASCADE NOT NULL,
    content TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE IF NOT EXISTS interview_questions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    note_id UUID REFERENCES notes(id) ON DELETE CASCADE NOT NULL,
    question TEXT NOT NULL,
    answer TEXT NOT NULL,
    difficulty TEXT DEFAULT 'medium',
    category TEXT,
    created_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE IF NOT EXISTS viva_questions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    note_id UUID REFERENCES notes(id) ON DELETE CASCADE NOT NULL,
    question TEXT NOT NULL,
    answer TEXT NOT NULL,
    difficulty TEXT DEFAULT 'medium',
    created_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE IF NOT EXISTS quizzes (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    note_id UUID REFERENCES notes(id) ON DELETE CASCADE NOT NULL,
    title TEXT NOT NULL,
    description TEXT,
    quiz_type TEXT DEFAULT 'practice',
    questions JSONB NOT NULL,
    time_limit INT,
    created_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE IF NOT EXISTS quiz_attempts (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    quiz_id UUID REFERENCES quizzes(id) ON DELETE CASCADE NOT NULL,
    score FLOAT NOT NULL,
    total INT NOT NULL,
    answers JSONB NOT NULL,
    started_at TIMESTAMPTZ NOT NULL,
    completed_at TIMESTAMPTZ NOT NULL,
    time_taken INT,
    created_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE IF NOT EXISTS study_sessions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    note_id UUID REFERENCES notes(id) ON DELETE SET NULL,
    duration_minutes INT DEFAULT 0,
    cards_reviewed INT DEFAULT 0,
    questions_answered INT DEFAULT 0,
    correct_answers INT DEFAULT 0,
    session_date TIMESTAMPTZ DEFAULT now(),
    created_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE IF NOT EXISTS embeddings (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    note_id UUID REFERENCES notes(id) ON DELETE CASCADE NOT NULL,
    chunk_index INT DEFAULT 0,
    chunk_text TEXT NOT NULL,
    embedding vector(1536),
    model TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE IF NOT EXISTS bookmarks (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    note_id UUID REFERENCES notes(id) ON DELETE CASCADE NOT NULL,
    label TEXT,
    created_at TIMESTAMPTZ DEFAULT now(),
    UNIQUE(note_id)
);

CREATE TABLE IF NOT EXISTS settings (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL,
    daily_goal INT DEFAULT 20,
    theme TEXT DEFAULT 'dark',
    created_at TIMESTAMPTZ DEFAULT now(),
    updated_at TIMESTAMPTZ DEFAULT now(),
    UNIQUE(user_id)
);

-- Indexes (IF NOT EXISTS requires PG 9.5+)
CREATE INDEX IF NOT EXISTS idx_flashcards_note ON flashcards(note_id);
CREATE INDEX IF NOT EXISTS idx_mcqs_note ON mcqs(note_id);
CREATE INDEX IF NOT EXISTS idx_summaries_note_type ON summaries(note_id, summary_type);
-- embeddings vector index — SKIP if already exists (IF NOT EXISTS not supported for ivfflat)
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_class WHERE relname = 'idx_embeddings_vector'
  ) THEN
    CREATE INDEX idx_embeddings_vector ON embeddings
      USING ivfflat (embedding vector_cosine_ops) WITH (lists = 100);
  END IF;
END
$$;

-- Enable Row Level Security on all tables with anon read policies
DO $$
DECLARE
  tbl TEXT;
  tables TEXT[] := ARRAY[
    'notes', 'flashcards', 'mcqs', 'msqs', 'nat_questions',
    'summaries', 'mindmaps', 'revision_notes', 'formula_sheets',
    'cheat_sheets', 'interview_questions', 'viva_questions',
    'quizzes', 'quiz_attempts', 'settings',
    'study_sessions', 'embeddings', 'bookmarks'
  ];
BEGIN
  FOREACH tbl IN ARRAY tables
  LOOP
    EXECUTE format('ALTER TABLE %I ENABLE ROW LEVEL SECURITY;', tbl);
    EXECUTE format('DROP POLICY IF EXISTS anon_read ON %I;', tbl);
    EXECUTE format('CREATE POLICY anon_read ON %I FOR SELECT USING (true);', tbl);
  END LOOP;
END
$$;

-- quiz_attempts: anon can insert (quiz_take.html does this client-side)
DROP POLICY IF EXISTS anon_insert_quiz_attempts ON quiz_attempts;
CREATE POLICY anon_insert_quiz_attempts ON quiz_attempts
  FOR INSERT WITH CHECK (true);

-- settings: anon can insert (settings.html does upsert)
DROP POLICY IF EXISTS anon_upsert_settings ON settings;
CREATE POLICY anon_upsert_settings ON settings
  FOR INSERT WITH CHECK (true);
