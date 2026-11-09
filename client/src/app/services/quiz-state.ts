import type { Question, QuizData, QuizSession } from './quiz.models';

export function createSession(questions: Question[], random = Math.random): QuizSession {
  if (!questions.length) throw new Error('Aggiungi almeno una domanda per iniziare.');
  const queue = questions.map(question => question.id);
  for (let i = queue.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1));
    [queue[i], queue[j]] = [queue[j], queue[i]];
  }
  return { questions: structuredClone(questions), queue, answers: {} };
}

export function answerQuestion(session: QuizSession, option: number): QuizSession {
  const id = session.queue[0];
  const question = session.questions.find(item => item.id === id);
  if (!question || !Number.isInteger(option) || option < 0 || option >= question.options.length) {
    throw new Error('Risposta non valida.');
  }
  if (Object.hasOwn(session.answers, id)) throw new Error('Hai gia risposto a questa domanda.');
  return { ...session, answers: { ...session.answers, [id]: option } };
}

export function advanceQuestion(session: QuizSession): QuizSession {
  const [id, ...queue] = session.queue;
  if (!id) throw new Error('Il test e gia terminato.');
  if (!Object.hasOwn(session.answers, id)) queue.push(id);
  return { ...session, queue };
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

function isQuestion(value: unknown): value is Question {
  return isRecord(value) && typeof value['id'] === 'string' && value['id'].length > 0
    && typeof value['text'] === 'string' && value['text'].trim().length > 0
    && typeof value['category'] === 'string' && value['category'].trim().length > 0
    && Array.isArray(value['options']) && value['options'].length >= 2
    && value['options'].length <= 6
    && value['options'].every(option => typeof option === 'string' && option.trim().length > 0)
    && typeof value['correct'] === 'number' && Number.isInteger(value['correct'])
    && value['correct'] >= 0 && value['correct'] < value['options'].length;
}

function validQuestions(value: unknown): value is Question[] {
  return Array.isArray(value) && value.every(isQuestion)
    && new Set(value.map(question => question.id)).size === value.length;
}

function validSession(value: unknown): boolean {
  if (value === null) return true;
  if (!isRecord(value) || !validQuestions(value['questions'])
    || !value['questions'].length || !Array.isArray(value['queue'])
    || !isRecord(value['answers'])) return false;
  const questions = value['questions'];
  const queue: unknown[] = value['queue'];
  const answers = value['answers'];
  if (!queue.length || new Set(queue).size !== queue.length
    || !queue.every(id => questions.some(question => question.id === id))) return false;
  if (!Object.entries(answers).every(([id, option]) => {
    const question = questions.find(item => item.id === id);
    return question && typeof option === 'number' && Number.isInteger(option)
      && option >= 0 && option < question.options.length;
  })) return false;
  return questions.every(question => queue.includes(question.id) || Object.hasOwn(answers, question.id))
    && queue.slice(1).every(id => typeof id === 'string' && !Object.hasOwn(answers, id));
}

function isQuizData(value: unknown): value is QuizData {
  return isRecord(value) && value['version'] === 1 && validQuestions(value['questions'])
    && validSession(value['session']) && Array.isArray(value['results'])
    && value['results'].every(result => isRecord(result)
      && typeof result['id'] === 'string'
      && typeof result['date'] === 'string' && Number.isFinite(Date.parse(result['date']))
      && Number.isInteger(result['total']) && Number(result['total']) > 0
      && Number.isInteger(result['correct']) && Number(result['correct']) >= 0
      && Number(result['correct']) <= Number(result['total']));
}

export function parseData(raw: string): QuizData {
  const value: unknown = JSON.parse(raw);
  if (!isQuizData(value)) {
    throw new Error('I dati salvati non sono validi. Ripristina i dati per utilizzare l’app.');
  }
  return value;
}
