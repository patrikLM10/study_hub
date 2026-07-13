from pydantic import BaseModel, Field
from typing import List, Optional


class Flashcard(BaseModel):
    question: str
    answer: str
    difficulty: str = "medium"
    topic: Optional[str] = None
    subtopic: Optional[str] = None
    source_heading: Optional[str] = None
    tags: List[str] = []


class MCQ(BaseModel):
    question: str
    options: List[str]
    correct_answer: str
    explanation: str
    difficulty: str = "medium"
    topic: Optional[str] = None


class MSQ(BaseModel):
    question: str
    options: List[str]
    correct_answers: List[str]
    explanation: str
    difficulty: str = "medium"
    topic: Optional[str] = None


class NATQuestion(BaseModel):
    question: str
    answer: float
    unit: Optional[str] = None
    explanation: str
    difficulty: str = "medium"
    topic: Optional[str] = None


class Summary(BaseModel):
    summary_type: str
    content: str


class RevisionNote(BaseModel):
    revision_type: str
    content: str


class FormulaSheet(BaseModel):
    content: str


class CheatSheet(BaseModel):
    content: str


class InterviewQuestion(BaseModel):
    question: str
    answer: str
    difficulty: str = "medium"
    category: Optional[str] = None


class VivaQuestion(BaseModel):
    question: str
    answer: str
    difficulty: str = "medium"


class ConceptExplanation(BaseModel):
    concept: str
    explanation: str
    difficulty: str = "medium"


class MemoryTrick(BaseModel):
    concept: str
    trick: str


class RealWorldExample(BaseModel):
    concept: str
    example: str


class MermaidMindmap(BaseModel):
    mermaid_syntax: str


class QuizQuestion(BaseModel):
    question: str
    options: List[str]
    correct_answer: str
    explanation: str


class Quiz(BaseModel):
    title: str
    description: Optional[str] = None
    quiz_type: str = "practice"
    questions: List[QuizQuestion]


class NoteStudyContent(BaseModel):
    note_title: str
    note_slug: str
    folder_path: str
    tags: List[str] = []
    flashcards: List[Flashcard] = []
    mcqs: List[MCQ] = []
    msqs: List[MSQ] = []
    nat_questions: List[NATQuestion] = []
    summaries: List[Summary] = []
    revision_notes: List[RevisionNote] = []
    formula_sheets: List[FormulaSheet] = []
    cheat_sheets: List[CheatSheet] = []
    interview_questions: List[InterviewQuestion] = []
    viva_questions: List[VivaQuestion] = []
    concept_explanations: List[ConceptExplanation] = []
    memory_tricks: List[MemoryTrick] = []
    real_world_examples: List[RealWorldExample] = []
    mindmaps: List[MermaidMindmap] = []
    quizzes: List[Quiz] = []
