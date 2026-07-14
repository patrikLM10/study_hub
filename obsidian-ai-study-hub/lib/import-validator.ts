import { StudyPackage } from "./types";

const VALID_KEYS = [
  "note_title", "note_slug", "folder_path", "tags", "content",
  "flashcards", "mcqs", "msqs", "nat_questions", "summaries",
  "mindmaps", "quizzes",
];

export interface ValidationResult {
  valid: boolean
  data: StudyPackage | null
  errors: string[]
  warnings: string[]
}

export function validateImport(raw: unknown): ValidationResult {
  const errors: string[] = [];
  const warnings: string[] = [];

  if (typeof raw !== "object" || raw === null || Array.isArray(raw)) {
    errors.push("Root must be a JSON object.");
    return { valid: false, data: null, errors, warnings };
  }

  const obj = raw as Record<string, unknown>;

  if (!obj.note_title || typeof obj.note_title !== "string") {
    errors.push('"note_title" is required and must be a string.');
  }

  for (const key of Object.keys(obj)) {
    if (!VALID_KEYS.includes(key) && !key.startsWith("_")) {
      warnings.push(`Unknown field "${key}" will be ignored.`);
    }
  }

  const arrayFields = [
    "flashcards", "mcqs", "msqs", "nat_questions",
    "summaries", "mindmaps", "quizzes",
  ] as const;

  for (const field of arrayFields) {
    if (field in obj && !Array.isArray(obj[field])) {
      errors.push(`"${field}" must be an array.`);
    }
  }

  if (obj.tags !== undefined && !Array.isArray(obj.tags)) {
    errors.push('"tags" must be an array.');
  }

  if (obj.content !== undefined && typeof obj.content !== "string") {
    errors.push('"content" must be a string.');
  }

  const data: StudyPackage = {
    note_title: (obj.note_title as string) || "",
    note_slug: typeof obj.note_slug === "string" ? obj.note_slug : undefined,
    folder_path: typeof obj.folder_path === "string" ? obj.folder_path : undefined,
    tags: Array.isArray(obj.tags) ? obj.tags as string[] : undefined,
    content: typeof obj.content === "string" ? obj.content : undefined,
    flashcards: Array.isArray(obj.flashcards) ? obj.flashcards as StudyPackage["flashcards"] : undefined,
    mcqs: Array.isArray(obj.mcqs) ? obj.mcqs as StudyPackage["mcqs"] : undefined,
    msqs: Array.isArray(obj.msqs) ? obj.msqs as StudyPackage["msqs"] : undefined,
    nat_questions: Array.isArray(obj.nat_questions) ? obj.nat_questions as StudyPackage["nat_questions"] : undefined,
    summaries: Array.isArray(obj.summaries) ? obj.summaries as StudyPackage["summaries"] : undefined,
    mindmaps: Array.isArray(obj.mindmaps) ? obj.mindmaps as StudyPackage["mindmaps"] : undefined,
    quizzes: Array.isArray(obj.quizzes) ? obj.quizzes as StudyPackage["quizzes"] : undefined,
  };

  return {
    valid: errors.length === 0,
    data: errors.length === 0 ? data : null,
    errors,
    warnings,
  };
}
