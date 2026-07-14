"""
Supabase helper for OpenCode content generation workflow.

Usage:
  python scripts/supabase_helper.py --action push --file output.json
  python scripts/supabase_helper.py --action seed-demo
"""
import json
import os
import sys
import argparse
from datetime import datetime, timezone
from pathlib import Path
from typing import Optional

try:
    from supabase import create_client, Client
except ImportError:
    print("supabase-py not installed. Run: pip install supabase")
    sys.exit(1)

# Try loading .env from multiple locations
_dotenv_paths = [
    Path(__file__).parent / ".env",
    Path(__file__).parent.parent / ".env",
    Path(__file__).parent.parent / "study-web" / ".env",
]
for _dp in _dotenv_paths:
    if _dp.exists():
        for _line in _dp.read_text().splitlines():
            _line = _line.strip()
            if _line and not _line.startswith("#") and "=" in _line:
                _k, _v = _line.split("=", 1)
                os.environ.setdefault(_k.strip(), _v.strip())
        break

SUPABASE_URL = os.getenv("SUPABASE_URL", "")
SUPABASE_KEY = os.getenv("SUPABASE_SERVICE_ROLE_KEY") or os.getenv("SUPABASE_ANON_KEY", "")

sb: Optional[Client] = None


def get_sb() -> Client:
    global sb
    if sb is None:
        if not SUPABASE_URL or not SUPABASE_KEY:
            print("Error: SUPABASE_URL and one of SUPABASE_SERVICE_ROLE_KEY or SUPABASE_ANON_KEY must be set in .env")
            sys.exit(1)
        sb = create_client(SUPABASE_URL, SUPABASE_KEY)
    return sb


def upsert_note(note_data: dict) -> str:
    client = get_sb()
    slug = note_data.get("slug", note_data.get("title", "").lower().replace(" ", "-"))
    existing = client.table("notes").select("id").eq("slug", slug).execute()
    payload = {
        "title": note_data["title"],
        "slug": slug,
        "content": note_data.get("content", ""),
        "content_html": note_data.get("content_html", ""),
        "tags": note_data.get("tags", []),
        "frontmatter": note_data.get("frontmatter", {}),
        "word_count": len(note_data.get("content", "").split()),
        "file_path": note_data.get("file_path", ""),
        "file_hash": note_data.get("file_hash", slug),
        "synced_at": datetime.now(timezone.utc).isoformat(),
    }
    if existing.data and len(existing.data) > 0:
        note_id = existing.data[0]["id"]
        client.table("notes").update(payload).eq("id", note_id).execute()
        return note_id
    else:
        result = client.table("notes").insert(payload).execute()
        return result.data[0]["id"] if result.data else None


# ---- Table-driven content upsert ----
# Each entry maps a JSON key in the input file to a DB table and a row-builder function.
# This replaces 9 near-identical per-type upsert functions.
_CONTENT_TABLES = {}


def _register(table: str, json_key: str, row_fn):
    _CONTENT_TABLES[json_key] = (table, row_fn)


def _build_flashcard_row(note_id: str, item: dict) -> dict:
    return {
        "note_id": note_id,
        "question": item["question"],
        "answer": item["answer"],
        "difficulty": item.get("difficulty", "medium"),
        "topic": item.get("topic"),
        "subtopic": item.get("subtopic"),
        "source_heading": item.get("source_heading"),
        "tags": item.get("tags", []),
    }


def _build_mcq_row(note_id: str, item: dict) -> dict:
    return {
        "note_id": note_id,
        "question": item["question"],
        "options": item["options"],
        "correct_answer": item["correct_answer"],
        "explanation": item.get("explanation", ""),
        "difficulty": item.get("difficulty", "medium"),
        "topic": item.get("topic"),
    }


def _build_msq_row(note_id: str, item: dict) -> dict:
    return {
        "note_id": note_id,
        "question": item["question"],
        "options": item["options"],
        "correct_answers": item["correct_answers"],
        "explanation": item.get("explanation", ""),
        "difficulty": item.get("difficulty", "medium"),
        "topic": item.get("topic"),
    }


def _build_nat_row(note_id: str, item: dict) -> dict:
    return {
        "note_id": note_id,
        "question": item["question"],
        "answer": float(item["correct_answer"]),
        "unit": item.get("unit"),
        "explanation": item.get("explanation", ""),
        "difficulty": item.get("difficulty", "medium"),
        "topic": item.get("topic"),
    }


def _build_summary_row(note_id: str, item: dict) -> dict:
    return {
        "note_id": note_id,
        "summary_type": item["summary_type"],
        "content": item["content"],
    }


def _build_revision_note_row(note_id: str, item: dict) -> dict:
    return {
        "note_id": note_id,
        "revision_type": item.get("revision_type", "quick"),
        "content": item["content"],
    }


def _build_formula_sheet_row(note_id: str, item: dict) -> dict:
    return {"note_id": note_id, "content": item["content"]}


def _build_cheat_sheet_row(note_id: str, item: dict) -> dict:
    return {"note_id": note_id, "content": item["content"]}


def _build_interview_row(note_id: str, item: dict) -> dict:
    return {
        "note_id": note_id,
        "question": item["question"],
        "answer": item["answer"],
        "difficulty": item.get("difficulty", "medium"),
        "category": item.get("category"),
    }


def _build_viva_row(note_id: str, item: dict) -> dict:
    return {
        "note_id": note_id,
        "question": item["question"],
        "answer": item["answer"],
        "difficulty": item.get("difficulty", "medium"),
    }


def _build_mindmap_row(note_id: str, item: dict) -> dict:
    return {
        "note_id": note_id,
        "content": item.get("content", ""),
        "mermaid_syntax": item["mermaid_syntax"],
    }


def _build_quiz_row(note_id: str, item: dict) -> dict:
    return {
        "note_id": note_id,
        "title": item["title"],
        "description": item.get("description"),
        "quiz_type": item.get("quiz_type", "practice"),
        "questions": item["questions"],
        "time_limit": item.get("time_limit"),
    }


_register("flashcards", "flashcards", _build_flashcard_row)
_register("mcqs", "mcqs", _build_mcq_row)
_register("msqs", "msqs", _build_msq_row)
_register("nat_questions", "nat_questions", _build_nat_row)
_register("summaries", "summaries", _build_summary_row)
_register("revision_notes", "revision_notes", _build_revision_note_row)
_register("formula_sheets", "formula_sheets", _build_formula_sheet_row)
_register("cheat_sheets", "cheat_sheets", _build_cheat_sheet_row)
_register("interview_questions", "interview_questions", _build_interview_row)
_register("viva_questions", "viva_questions", _build_viva_row)
_register("mindmaps", "mindmaps", _build_mindmap_row)
_register("quizzes", "quizzes", _build_quiz_row)


def upsert_content(note_data: dict):
    note_id = upsert_note(note_data)
    client = get_sb()
    for json_key, (table, row_fn) in _CONTENT_TABLES.items():
        items = note_data.get(json_key, [])
        if not items:
            continue
        client.table(table).delete().eq("note_id", note_id).execute()
        rows = [row_fn(note_id, item) for item in items]
        # Insert in batches of 50 to stay well under Supabase's 100-row limit
        for i in range(0, len(rows), 50):
            batch = rows[i : i + 50]
            client.table(table).insert(batch).execute()
    print(f"Synced note '{note_data.get('title', '')}' (id={note_id})")


def push_json_file(filepath: str):
    with open(filepath, encoding="utf-8") as f:
        data = json.load(f)
    if isinstance(data, dict) and "note_title" in data:
        note_data = {
            "title": data["note_title"],
            "slug": data.get("note_slug", data["note_title"].lower().replace(" ", "-")),
            "content": data.get("content", ""),
            "tags": data.get("tags", []),
            "file_path": data.get("folder_path", ""),
        }
        # Pull every known content key from the JSON
        for json_key in _CONTENT_TABLES:
            note_data[json_key] = data.get(json_key, [])
        upsert_content(note_data)
    elif isinstance(data, list):
        for item in data:
            note_data = {
                "title": item["note_title"],
                "slug": item.get("note_slug", item["note_title"].lower().replace(" ", "-")),
                "content": item.get("content", ""),
                "tags": item.get("tags", []),
                "file_path": item.get("folder_path", ""),
            }
            for json_key in _CONTENT_TABLES:
                note_data[json_key] = item.get(json_key, [])
            upsert_content(note_data)


def seed_demo():
    demo = {
        "title": "Sample: Signals & Systems",
        "slug": "sample-signals-systems",
        "tags": ["signals", "gate", "ece"],
        "content": "Signals and systems form the foundation of electrical engineering.",
        "flashcards": [
            {"question": "What is a signal?", "answer": "A function that conveys information about a phenomenon.", "difficulty": "easy"},
            {"question": "What is a system?", "answer": "An entity that processes input signals to produce output signals.", "difficulty": "easy"},
        ],
        "mcqs": [
            {"question": "Which of the following is an even signal?", "options": ["sin(t)", "cos(t)", "tan(t)", "exp(t)"], "correct_answer": "cos(t)", "explanation": "cos(t) is an even function: cos(-t) = cos(t).", "difficulty": "easy"},
        ],
        "summaries": [{"summary_type": "key_points", "content": "Signal = information carrier. System = signal processor."}],
    }
    upsert_content(demo)
    print("Demo data seeded successfully!")


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Supabase content helper for OpenCode")
    parser.add_argument("--action", choices=["push", "seed-demo"], default="seed-demo")
    parser.add_argument("--file", help="JSON file to push")
    args = parser.parse_args()
    if args.action == "push":
        if not args.file:
            print("Error: --file required for push action")
            sys.exit(1)
        push_json_file(args.file)
    elif args.action == "seed-demo":
        seed_demo()
