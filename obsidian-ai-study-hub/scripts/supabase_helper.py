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
from typing import Optional

try:
    from supabase import create_client, Client
except ImportError:
    print("supabase-py not installed. Run: pip install supabase")
    sys.exit(1)

SUPABASE_URL = os.getenv("SUPABASE_URL", "")
SUPABASE_SERVICE_KEY = os.getenv("SUPABASE_SERVICE_ROLE_KEY", "")

sb: Optional[Client] = None


def get_sb() -> Client:
    global sb
    if sb is None:
        if not SUPABASE_URL or not SUPABASE_SERVICE_KEY:
            print("Error: SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY must be set in .env")
            sys.exit(1)
        sb = create_client(SUPABASE_URL, SUPABASE_SERVICE_KEY)
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


def upsert_flashcards(note_id: str, flashcards: list):
    if not flashcards:
        return
    client = get_sb()
    client.table("flashcards").delete().eq("note_id", note_id).execute()
    for fc in flashcards:
        client.table("flashcards").insert({
            "note_id": note_id,
            "question": fc["question"],
            "answer": fc["answer"],
            "difficulty": fc.get("difficulty", "medium"),
            "topic": fc.get("topic"),
            "subtopic": fc.get("subtopic"),
            "source_heading": fc.get("source_heading"),
            "tags": fc.get("tags", []),
        }).execute()


def upsert_mcqs(note_id: str, mcqs: list):
    if not mcqs:
        return
    client = get_sb()
    client.table("mcqs").delete().eq("note_id", note_id).execute()
    for mcq in mcqs:
        client.table("mcqs").insert({
            "note_id": note_id,
            "question": mcq["question"],
            "options": mcq["options"],
            "correct_answer": mcq["correct_answer"],
            "explanation": mcq.get("explanation", ""),
            "difficulty": mcq.get("difficulty", "medium"),
            "topic": mcq.get("topic"),
        }).execute()


def upsert_summaries(note_id: str, summaries: list):
    if not summaries:
        return
    client = get_sb()
    client.table("summaries").delete().eq("note_id", note_id).execute()
    for s in summaries:
        client.table("summaries").insert({
            "note_id": note_id,
            "summary_type": s["summary_type"],
            "content": s["content"],
        }).execute()


def upsert_content(note_data: dict):
    note_id = upsert_note(note_data)
    upsert_flashcards(note_id, note_data.get("flashcards", []))
    upsert_mcqs(note_id, note_data.get("mcqs", []))
    upsert_summaries(note_id, note_data.get("summaries", []))
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
            "flashcards": data.get("flashcards", []),
            "mcqs": data.get("mcqs", []),
            "summaries": data.get("summaries", []),
        }
        upsert_content(note_data)
    elif isinstance(data, list):
        for item in data:
            note_data = {
                "title": item["note_title"],
                "slug": item.get("note_slug", item["note_title"].lower().replace(" ", "-")),
                "content": item.get("content", ""),
                "tags": item.get("tags", []),
                "file_path": item.get("folder_path", ""),
                "flashcards": item.get("flashcards", []),
                "mcqs": item.get("mcqs", []),
                "summaries": item.get("summaries", []),
            }
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
