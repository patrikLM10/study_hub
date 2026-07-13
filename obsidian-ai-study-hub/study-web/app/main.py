import uvicorn
from pathlib import Path
from fastapi import FastAPI, Request
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
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


if __name__ == "__main__":
    uvicorn.run("app.main:app", host="0.0.0.0", port=3000, reload=True)
