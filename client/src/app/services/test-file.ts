import { parseData } from './quiz-state.ts';
import type { CatalogTest } from './test-catalog.ts';

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

export function parseUserTest(
  raw: string,
  createId: () => string = () => crypto.randomUUID(),
): CatalogTest {
  const value: unknown = JSON.parse(raw);
  if (!isRecord(value) || typeof value['name'] !== 'string'
    || !value['name'].trim() || value['name'].trim().length > 100) {
    throw new Error('Il file deve contenere un nome da 1 a 100 caratteri.');
  }
  if (!Array.isArray(value['questions']) || !value['questions'].length) {
    throw new Error('Il file deve contenere almeno una domanda.');
  }
  const questions = value['questions'].map((question: unknown) =>
    isRecord(question) ? { ...question, id: createId() } : question);
  const parsed = parseData(JSON.stringify({
    version: 1, questions, session: null, results: [],
  }));
  return { id: createId(), name: value['name'].trim(), questions: parsed.questions };
}
