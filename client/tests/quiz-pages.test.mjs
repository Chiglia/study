import test from 'node:test';
import assert from 'node:assert/strict';
import { advanceQuestion, answerQuestion, createSession, parseData } from '../src/app/services/quiz-state.ts';

const questions = ['a', 'b', 'c', 'd', 'e'].map(id => ({
  id, text: `Domanda ${id}`, options: ['Sì', 'No'], correct: 0, category: 'Generale',
}));
const data = session => ({ version: 1, questions, session, results: [] });

test('salva e ripristina una schermata parzialmente risposta', () => {
  let session = createSession(questions, { randomizeQuestions: false, questionsPerPage: 3 });
  session = answerQuestion(session, 1, 'c');
  session = answerQuestion(session, 0, 'a');
  assert.throws(() => answerQuestion(session, 0, 'd'));
  assert.throws(() => answerQuestion(session, 0, 'a'));
  session = parseData(JSON.stringify(data(session))).session;
  assert.equal(session.questionsPerPage, 3);
  assert.deepEqual(session.queue, ['a', 'b', 'c', 'd', 'e']);
  assert.deepEqual(session.answers, { a: 0, c: 1 });
  session = advanceQuestion(session);
  assert.deepEqual(session.queue, ['d', 'e', 'b']);
  assert.deepEqual(parseData(JSON.stringify(data(session))).session, session);
});

test('le domande saltate tornano in coda e il test termina solo con tutte le risposte', () => {
  let session = createSession(questions, { randomizeQuestions: false, questionsPerPage: 3 });
  session = answerQuestion(session, 0, 'a');
  session = advanceQuestion(session);
  assert.deepEqual(session.queue, ['d', 'e', 'b', 'c']);
  for (const id of ['d', 'e', 'b']) session = answerQuestion(session, 0, id);
  session = advanceQuestion(session);
  assert.deepEqual(session.queue, ['c']);
  session = advanceQuestion(session);
  assert.deepEqual(session.queue, ['c']);
  session = advanceQuestion(answerQuestion(session, 0, 'c'));
  assert.deepEqual(session.queue, []);
});

test('valida la dimensione e accetta sessioni salvate precedentemente', () => {
  for (const size of [0, -1, 21, 1.5, NaN]) {
    assert.throws(() => createSession(questions, { questionsPerPage: size }));
  }
  const session = createSession(questions, { randomizeQuestions: false });
  delete session.questionsPerPage;
  assert.deepEqual(parseData(JSON.stringify(data(session))).session, session);
  assert.throws(() => parseData(JSON.stringify(data({ ...session, questionsPerPage: 0 }))));
  assert.throws(() => parseData(JSON.stringify(data({ ...session, answers: { b: 0 } }))));
});

test('tutte mostra anche più di 20 domande e preserva avanzamento e ripresa', () => {
  const many = Array.from({ length: 25 }, (_, i) => ({
    id: `q${i}`, text: `Domanda ${i}`, options: ['Sì', 'No'], correct: 0, category: 'Generale',
  }));
  let session = createSession(many, { randomizeQuestions: false, questionsPerPage: 'all' });
  session = answerQuestion(session, 0, 'q24');
  session = parseData(JSON.stringify({ version: 1, questions: many, session, results: [] })).session;
  assert.equal(session.questionsPerPage, 'all');
  assert.equal(session.answers.q24, 0);
  session = advanceQuestion(session);
  assert.equal(session.queue.length, 24);
  assert.ok(!session.queue.includes('q24'));
  for (const id of session.queue) session = answerQuestion(session, 0, id);
  assert.equal(advanceQuestion(session).queue.length, 0);
});

test('una sessione con un precedente valore numerico resta valida', () => {
  const session = createSession(questions, { randomizeQuestions: false, questionsPerPage: 2 });
  const answered = answerQuestion(session, 0, 'b');
  assert.deepEqual(parseData(JSON.stringify(data(answered))).session, answered);
});
