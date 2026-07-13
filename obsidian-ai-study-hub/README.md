# GATE ECE Study Hub

An AI-assisted study platform that converts Obsidian notes into flashcards, MCQs, quizzes, and more.

## Architecture

```
Obsidian Vault (your PC)
       │
       ▼
  OpenCode reads .md files
       │
       ▼
  OpenCode generates structured JSON
       │
       ▼
  OpenCode uploads to Supabase
       │
       ▼
  Website reads from Supabase (read-only)
```

- **No AI backend** — No FastAPI AI service, no watcher, no background workers
- **OpenCode** generates all study material from your Obsidian notes
- **Supabase** is the only backend (database + auth)
- **Website** is read-only, never calls LLMs, has no API keys

## Quick Start

```bash
# 1. Setup
cd obsidian-ai-study-hub
cp .env.example .env
# Edit .env with your Supabase credentials

# 2. Run the database migration
# Copy supabase_migration.sql into Supabase SQL Editor

# 3. Run the website
cd study-web
pip install -r requirements.txt
uvicorn app.main:app --reload --port 3000
```

Open http://localhost:3000

## Content Generation

Use OpenCode to generate study content:

```
OpenCode, generate flashcards and MCQs from Subjects/Signals and Systems/basics.md
```

Then upload:

```bash
python scripts/supabase_helper.py --action push --file output.json
```

## Project Structure

```
obsidian-ai-study-hub/
├── AGENTS.md              # OpenCode workflow instructions
├── schemas/               # Pydantic schemas for generated content
├── scripts/               # Supabase helper scripts
├── supabase_migration.sql # Database schema
├── study-web/             # Website (FastAPI + Jinja2 + HTMX + Tailwind)
│   ├── app/
│   │   ├── main.py        # Route definitions
│   │   ├── config.py      # Settings
│   │   ├── static/        # CSS + JS
│   │   └── templates/     # Jinja2 templates
│   ├── requirements.txt
│   └── vercel.json
```
