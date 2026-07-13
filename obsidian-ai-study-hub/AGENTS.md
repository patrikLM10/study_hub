# OpenCode Workflow: AI-Assisted Content Generation

## Overview

This project uses OpenCode to read Obsidian markdown notes and generate structured study content.
The generated content is uploaded directly to Supabase. The website reads from Supabase only.

## Workflow

1. Write notes in Obsidian (inside `Subjects/`)
2. Open this project in OpenCode
3. Ask OpenCode to generate study material from specific notes
4. OpenCode generates JSON following the schema in `schemas/generated_content.py`
5. OpenCode uploads content to Supabase using `scripts/supabase_helper.py`
6. Website automatically displays updated content

## Available Generation Types

- `note` - Original note content with metadata
- `flashcards` - Question/answer pairs for spaced repetition
- `mcqs` - Multiple choice questions with options and explanations
- `msqs` - Multiple select questions
- `nat_questions` - Numerical answer type questions
- `summaries` - Key points, detailed, bullet-point summaries
- `revision_notes` - Quick revision notes (exam-night, 5-min, etc.)
- `formula_sheets` - Formula reference sheets
- `cheat_sheets` - Concise cheat sheets
- `interview_questions` - Interview-style questions with answers
- `viva_questions` - Viva voce questions
- `concept_explanations` - Detailed concept explanations
- `memory_tricks` - Mnemonics and memory aids
- `real_world_examples` - Real world application examples
- `mindmaps` - Mermaid.js mindmap syntax
- `quizzes` - Practice quiz sets

## JSON Output Format

Generate a JSON file that follows `NoteStudyContent` schema:

```json
{
  "note_title": "Signal Classification",
  "note_slug": "signal-classification",
  "folder_path": "Subjects/Signals and Systems/",
  "tags": ["signals", "gate-ece"],
  "flashcards": [
    {"question": "What is a signal?", "answer": "A function that conveys information.", "difficulty": "easy"}
  ],
  "mcqs": [
    {"question": "Which is an even signal?", "options": ["sin(t)", "cos(t)", "tan(t)"], "correct_answer": "cos(t)", "explanation": "cos is even because cos(-t)=cos(t)", "difficulty": "easy"}
  ],
  "summaries": [
    {"summary_type": "key_points", "content": "Signals convey information..."}
  ]
}
```

## Uploading to Supabase

```bash
python scripts/supabase_helper.py --action push --file output.json
python scripts/supabase_helper.py --action seed-demo
```

## Environment Variables

Copy `.env.example` to `.env` and set:
- `SUPABASE_URL` - Your Supabase project URL
- `SUPABASE_ANON_KEY` - Your Supabase anon/public key
- `SUPABASE_SERVICE_ROLE_KEY` - Your Supabase service role key (for push scripts)

## Database

The project uses the schema from `supabase_migration.sql`. Run it in Supabase SQL Editor before using the app.

## Study Web

The website at `study-web/` is a FastAPI app served on port 3000.
- All data is read from Supabase using the JS client
- No backend API routes for data
- No AI generation on the server
- HTMX + TailwindCSS + Alpine.js + Supabase JS
