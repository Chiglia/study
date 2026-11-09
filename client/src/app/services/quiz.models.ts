export const categories = ['Generale', 'Scienze', 'Storia', 'Tecnologia', 'Lingue', 'Altro'];

export interface Question {
  id: string;
  text: string;
  options: string[];
  correct: number;
  category: string;
}

export interface QuizSession {
  questions: Question[];
  queue: string[];
  answers: Record<string, number>;
}

export interface QuizResult {
  id: string;
  total: number;
  correct: number;
  date: string;
}

export interface QuizData {
  version: 1;
  questions: Question[];
  session: QuizSession | null;
  results: QuizResult[];
}

export const emptyData = (): QuizData => ({
  version: 1, questions: [], session: null, results: [],
});

export interface QuizCollection {
  id: string;
  name: string;
  modifiedAt: number;
  questions: Question[];
  session: QuizSession | null;
  results: QuizResult[];
}

export interface QuizLibrary {
  version: 2;
  activeId: string;
  collections: QuizCollection[];
}
