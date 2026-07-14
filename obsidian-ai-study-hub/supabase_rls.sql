-- Enable Row Level Security on every table.
-- Run this in the Supabase SQL Editor against your live project.
-- The anon key is embedded in the deployed site's HTML; without RLS,
-- every table is open for read/write to anyone who copies that key.

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
    EXECUTE format(
      'DROP POLICY IF EXISTS anon_read ON %I;', tbl
    );
    EXECUTE format(
      'CREATE POLICY anon_read ON %I FOR SELECT USING (true);', tbl
    );
  END LOOP;
END
$$;

-- quiz_attempts: anon can insert (quiz_take.html does this client-side)
DROP POLICY IF EXISTS anon_insert_quiz_attempts ON quiz_attempts;
CREATE POLICY anon_insert_quiz_attempts ON quiz_attempts
  FOR INSERT WITH CHECK (true);

-- settings: anon can insert/update their own row (settings.html does this)
DROP POLICY IF EXISTS anon_upsert_settings ON settings;
CREATE POLICY anon_upsert_settings ON settings
  FOR INSERT WITH CHECK (true);
-- Note: UPDATE is intentionally not granted to anon for settings.
-- If the frontend starts using update instead of upsert, add:
--   FOR UPDATE USING (user_id = auth.uid());
