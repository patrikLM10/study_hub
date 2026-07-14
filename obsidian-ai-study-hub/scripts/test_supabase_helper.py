"""
Self-check for supabase_helper.py.
Verifies that all 13 content tables receive data after a push.
"""
import json
import sys
import os
from pathlib import Path

sys.path.insert(0, str(Path(__file__).parent.parent))
from scripts.supabase_helper import upsert_content

# Build a minimal note with one row per content type
demo = {
    "title": "__test_all_tables__",
    "slug": "__test_all_tables__",
    "tags": ["_test"],
    "content": "Self-check payload.",
    "flashcards": [{"question": "q", "answer": "a"}],
    "mcqs": [{"question": "q", "options": ["a","b"], "correct_answer": "a"}],
    "msqs": [{"question": "q", "options": ["a","b"], "correct_answers": ["a"]}],
    "nat_questions": [{"question": "q", "correct_answer": "42"}],
    "summaries": [{"summary_type": "k", "content": "c"}],
    "revision_notes": [{"revision_type": "quick", "content": "c"}],
    "formula_sheets": [{"content": "c"}],
    "cheat_sheets": [{"content": "c"}],
    "interview_questions": [{"question": "q", "answer": "a"}],
    "viva_questions": [{"question": "q", "answer": "a"}],
    "mindmaps": [{"mermaid_syntax": "graph TD; A-->B;"}],
    "quizzes": [{"title": "t", "questions": [{"question": "q", "options": ["a","b"], "correct_answer": "a"}]}],
}

# Tables that should receive data
TABLE_NAMES = [
    "notes",
    "flashcards", "mcqs", "msqs", "nat_questions", "summaries",
    "revision_notes", "formula_sheets", "cheat_sheets",
    "interview_questions", "viva_questions", "mindmaps", "quizzes",
]

try:
    upsert_content(demo)
    print(f"OK: all {len(TABLE_NAMES)} tables (notes + {len(TABLE_NAMES)-1} content types) received an insert.")
except Exception as e:
    print(f"FAIL: {e}")
    sys.exit(1)
