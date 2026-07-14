import json
import uvicorn
from pathlib import Path
from datetime import datetime, timezone
from typing import Optional
from fastapi import FastAPI, Request
from fastapi.responses import HTMLResponse, JSONResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
from pydantic import BaseModel, Field
from app.config import settings

app = FastAPI(title=settings.app_name, version="0.1.0")

BASE_DIR = Path(__file__).parent
templates = Jinja2Templates(directory=str(BASE_DIR / "templates"))
app.mount("/static", StaticFiles(directory=str(BASE_DIR / "static")), name="static")


def ctx(request: Request, **extra) -> dict:
    return {"request": request, "app_name": settings.app_name, "supabase_url": settings.supabase_url, "supabase_anon_key": settings.supabase_anon_key, **extra}


@app.get("/", response_class=HTMLResponse)
async def dashboard(request: Request):
    return templates.TemplateResponse(request, "pages/dashboard.html", ctx(request))


@app.get("/notes", response_class=HTMLResponse)
async def notes_page(request: Request):
    return templates.TemplateResponse(request, "pages/notes.html", ctx(request))


@app.get("/notes/{note_id}", response_class=HTMLResponse)
async def note_detail(request: Request, note_id: str):
    return templates.TemplateResponse(request, "pages/note_detail.html", ctx(request, note_id=note_id))


@app.get("/flashcards", response_class=HTMLResponse)
async def flashcards_page(request: Request):
    return templates.TemplateResponse(request, "pages/flashcards.html", ctx(request))


@app.get("/quizzes", response_class=HTMLResponse)
async def quizzes_page(request: Request):
    return templates.TemplateResponse(request, "pages/quizzes.html", ctx(request))


@app.get("/quiz/{quiz_id}", response_class=HTMLResponse)
async def quiz_take(request: Request, quiz_id: str):
    return templates.TemplateResponse(request, "pages/quiz_take.html", ctx(request, quiz_id=quiz_id))


@app.get("/search", response_class=HTMLResponse)
async def search_page(request: Request):
    return templates.TemplateResponse(request, "pages/search.html", ctx(request))


@app.get("/analytics", response_class=HTMLResponse)
async def analytics_page(request: Request):
    return templates.TemplateResponse(request, "pages/analytics.html", ctx(request))


@app.get("/settings", response_class=HTMLResponse)
async def settings_page(request: Request):
    return templates.TemplateResponse(request, "pages/settings.html", ctx(request))


@app.get("/login", response_class=HTMLResponse)
async def login_page(request: Request):
    return templates.TemplateResponse(request, "pages/login.html", ctx(request))


@app.get("/signup", response_class=HTMLResponse)
async def signup_page(request: Request):
    return templates.TemplateResponse(request, "pages/signup.html", ctx(request))


@app.get("/auth/callback", response_class=HTMLResponse)
async def auth_callback(request: Request):
    return templates.TemplateResponse(request, "pages/auth_callback.html", ctx(request))


# ---- Import System ----

@app.get("/import", response_class=HTMLResponse)
async def import_page(request: Request):
    return templates.TemplateResponse(request, "pages/import.html", ctx(request))


CONTENT_TABLES = {
    "flashcards": {"table": "flashcards", "fk": "note_id"},
    "mcqs": {"table": "mcqs", "fk": "note_id"},
    "msqs": {"table": "msqs", "fk": "note_id"},
    "nat_questions": {"table": "nat_questions", "fk": "note_id"},
    "summaries": {"table": "summaries", "fk": "note_id"},
    "revision_notes": {"table": "revision_notes", "fk": "note_id"},
    "formula_sheets": {"table": "formula_sheets", "fk": "note_id"},
    "cheat_sheets": {"table": "cheat_sheets", "fk": "note_id"},
    "interview_questions": {"table": "interview_questions", "fk": "note_id"},
    "viva_questions": {"table": "viva_questions", "fk": "note_id"},
    "mindmaps": {"table": "mindmaps", "fk": "note_id"},
    "quizzes": {"table": "quizzes", "fk": "note_id"},
}


def _build_note_payload(data: dict) -> dict:
    slug = data.get("note_slug", data.get("note_title", "").lower().replace(" ", "-"))
    return {
        "title": data["note_title"],
        "slug": slug,
        "content": data.get("content", ""),
        "content_html": data.get("content_html", ""),
        "tags": data.get("tags", []),
        "frontmatter": data.get("frontmatter", {}),
        "word_count": len(data.get("content", "").split()),
        "file_path": data.get("folder_path", ""),
        "file_hash": slug,
        "synced_at": datetime.now(timezone.utc).isoformat(),
    }


_BUILDERS = {
    "flashcards": lambda nid, i: {"note_id": nid, "question": i["question"], "answer": i["answer"], "difficulty": i.get("difficulty", "medium"), "topic": i.get("topic"), "subtopic": i.get("subtopic"), "source_heading": i.get("source_heading"), "tags": i.get("tags", [])},
    "mcqs": lambda nid, i: {"note_id": nid, "question": i["question"], "options": i["options"], "correct_answer": i["correct_answer"], "explanation": i.get("explanation", ""), "difficulty": i.get("difficulty", "medium"), "topic": i.get("topic")},
    "msqs": lambda nid, i: {"note_id": nid, "question": i["question"], "options": i["options"], "correct_answers": i["correct_answers"], "explanation": i.get("explanation", ""), "difficulty": i.get("difficulty", "medium"), "topic": i.get("topic")},
    "nat_questions": lambda nid, i: {"note_id": nid, "question": i["question"], "answer": float(i.get("answer", i.get("correct_answer", 0))), "unit": i.get("unit"), "explanation": i.get("explanation", ""), "difficulty": i.get("difficulty", "medium"), "topic": i.get("topic")},
    "summaries": lambda nid, i: {"note_id": nid, "summary_type": i["summary_type"], "content": i["content"]},
    "revision_notes": lambda nid, i: {"note_id": nid, "revision_type": i.get("revision_type", "quick"), "content": i["content"]},
    "formula_sheets": lambda nid, i: {"note_id": nid, "content": i["content"]},
    "cheat_sheets": lambda nid, i: {"note_id": nid, "content": i["content"]},
    "interview_questions": lambda nid, i: {"note_id": nid, "question": i["question"], "answer": i["answer"], "difficulty": i.get("difficulty", "medium"), "category": i.get("category")},
    "viva_questions": lambda nid, i: {"note_id": nid, "question": i["question"], "answer": i["answer"], "difficulty": i.get("difficulty", "medium")},
    "mindmaps": lambda nid, i: {"note_id": nid, "content": i.get("content", ""), "mermaid_syntax": i["mermaid_syntax"]},
    "quizzes": lambda nid, i: {"note_id": nid, "title": i["title"], "description": i.get("description"), "quiz_type": i.get("quiz_type", "practice"), "questions": i["questions"], "time_limit": i.get("time_limit")},
}


class ImportRequest(BaseModel):
    data: dict
    mode: str = "replace"


class ImportResponse(BaseModel):
    success: bool
    note_id: Optional[str] = None
    note_title: str = ""
    stats: dict = {}
    errors: list = []


def _supabase_headers():
    return {
        "apikey": settings.supabase_service_role_key,
        "Authorization": f"Bearer {settings.supabase_service_role_key}",
        "Content-Type": "application/json",
        "Prefer": "return=minimal",
    }


@app.post("/api/import", response_class=JSONResponse)
async def api_import(body: ImportRequest):
    import httpx

    data = body.data
    mode = body.mode
    stats = {}
    errors = []
    note_id = None
    sb_url = settings.supabase_url.rstrip("/")

    headers = _supabase_headers()

    try:
        payload = _build_note_payload(data)
        slug = payload["slug"]

        async with httpx.AsyncClient() as client:
            # Check existing note
            resp = await client.get(
                f"{sb_url}/rest/v1/notes",
                headers=headers,
                params={"slug": f"eq.{slug}", "select": "id"},
            )
            resp.raise_for_status()
            existing = resp.json()

            if existing and mode == "skip":
                return ImportResponse(
                    success=True, note_id=existing[0]["id"],
                    note_title=data["note_title"], stats={},
                    errors=[{"type": "skipped", "message": f"Note '{slug}' already exists"}]
                ).model_dump()

            if existing:
                note_id = existing[0]["id"]
                await client.patch(
                    f"{sb_url}/rest/v1/notes",
                    headers=headers,
                    params={"id": f"eq.{note_id}"},
                    content=json.dumps(payload),
                )
            else:
                ins_resp = await client.post(
                    f"{sb_url}/rest/v1/notes",
                    headers={**headers, "Prefer": "return=representation"},
                    content=json.dumps(payload),
                )
                ins_resp.raise_for_status()
                note_id = ins_resp.json()[0]["id"]

            # Process each content type
            for key, cfg in CONTENT_TABLES.items():
                items = data.get(key, [])
                if not items:
                    continue
                table = cfg["table"]

                if mode == "replace":
                    await client.delete(
                        f"{sb_url}/rest/v1/{table}",
                        headers=headers,
                        params={"note_id": f"eq.{note_id}"},
                    )

                if mode == "merge" and note_id:
                    # Check existing IDs to avoid duplicates - skip for simplicity
                    pass

                rows = [_BUILDERS[key](note_id, item) for item in items]
                batch_size = 50
                inserted = 0
                for i in range(0, len(rows), batch_size):
                    batch = rows[i:i + batch_size]
                    ins = await client.post(
                        f"{sb_url}/rest/v1/{table}",
                        headers=headers,
                        content=json.dumps(batch),
                    )
                    if ins.is_success:
                        inserted += len(batch)
                    else:
                        errors.append({"type": "insert_error", "table": table, "detail": ins.text})
                stats[key] = inserted

        return ImportResponse(
            success=True,
            note_id=note_id,
            note_title=data["note_title"],
            stats=stats,
            errors=errors,
        ).model_dump()

    except Exception as e:
        return ImportResponse(
            success=False,
            note_title=data.get("note_title", ""),
            stats=stats,
            errors=[{"type": "exception", "detail": str(e)}],
        ).model_dump()


if __name__ == "__main__":
    uvicorn.run("app.main:app", host="0.0.0.0", port=3000, reload=True)
