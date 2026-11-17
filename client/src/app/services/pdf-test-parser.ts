import type { Question } from './quiz.models.ts';
import type { CatalogTest } from './test-catalog.ts';

export interface PdfLine {
  text: string;
  x: number;
  bold: boolean[];
}

interface Answer {
  text: string;
  bold: number;
  letters: number;
}

interface DraftQuestion {
  text: string;
  answers: Answer[];
}

export interface PdfTestPreview {
  test: CatalogTest;
  skipped: number;
}

function appendAnswer(answer: Answer, text: string, bold: boolean[]): void {
  answer.text = [answer.text, text.trim()].filter(Boolean).join(' ');
  for (let i = 0; i < text.length; i++) {
    if (/\p{L}/u.test(text[i])) {
      answer.letters++;
      if (bold[i]) answer.bold++;
    }
  }
}

export function parsePdfTest(
  lines: PdfLine[], name: string, createId: () => string = () => crypto.randomUUID(),
): PdfTestPreview {
  const starts = lines.filter(line => /^\d+[.)]\s+\S/u.test(line.text));
  if (!starts.length) throw new Error('Il PDF non contiene domande numerate riconoscibili.');
  const questionX = starts.reduce((minimum, line) => Math.min(minimum, line.x), Infinity);
  const drafts: DraftQuestion[] = [];
  let current: DraftQuestion | undefined;
  for (const line of lines) {
    const question = /^(\d+[.)]\s+)(\S.*)$/u.exec(line.text);
    if (question && line.x <= questionX + 5) {
      current = { text: question[2].trim(), answers: [] };
      drafts.push(current);
      continue;
    }
    if (!current) continue;
    const answer = /^([a-d][.)]\s+)(\S.*)$/iu.exec(line.text);
    if (answer) {
      const option: Answer = { text: '', bold: 0, letters: 0 };
      appendAnswer(option, answer[2], line.bold.slice(answer[1].length));
      current.answers.push(option);
    } else if (current.answers.length && line.x > questionX + 5) {
      appendAnswer(current.answers[current.answers.length - 1], line.text, line.bold);
    } else if (!current.answers.length) {
      current.text += ` ${line.text.trim()}`;
    }
  }

  const questions: Question[] = [];
  for (const draft of drafts) {
    const correct = draft.answers.flatMap((answer, index) =>
      answer.letters > 0 && answer.bold / answer.letters > 0.5 ? [index] : []);
    if (!draft.text.trim() || draft.answers.length < 2 || draft.answers.length > 6
      || draft.answers.some(answer => !answer.text.trim()) || correct.length !== 1) continue;
    questions.push({
      id: createId(), text: draft.text.trim(), category: 'Generale',
      options: draft.answers.map(answer => answer.text), correct: correct[0],
    });
  }
  if (!questions.length) {
    throw new Error(`Nessuna domanda importabile: ${drafts.length} escluse. Servono almeno due risposte e una sola in grassetto.`);
  }
  const testName = name.trim().slice(0, 100);
  if (!testName) throw new Error('Il nome del file PDF non è valido.');
  return { test: { id: createId(), name: testName, questions }, skipped: drafts.length - questions.length };
}
