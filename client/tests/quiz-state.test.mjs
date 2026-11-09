import test from 'node:test';
import assert from 'node:assert/strict';
import { advanceQuestion, answerQuestion, createSession, parseData } from '../src/app/services/quiz-state.ts';

const questions = ['a', 'b', 'c'].map(id => ({
  id, text: `Domanda ${id}`, options: ['Corretta', 'Errata'], correct: 0, category: 'Generale',
}));
const data = session => ({ version: 1, questions, session, results: [] });

test('Fisher-Yates genera una permutazione senza duplicati e non cambia la raccolta', () => {
  const session = createSession(questions, () => 0);
  assert.deepEqual(session.queue, ['b', 'c', 'a']);
  assert.deepEqual(questions.map(q => q.id), ['a', 'b', 'c']);
  assert.equal(new Set(session.queue).size, questions.length);
});

test('una domanda saltata ricompare solo dopo le altre domande in coda', () => {
  let session = createSession(questions, () => 0.99);
  session = advanceQuestion(session);
  assert.deepEqual(session.queue, ['b', 'c', 'a']);
  session = advanceQuestion(answerQuestion(session, 0));
  session = advanceQuestion(answerQuestion(session, 1));
  assert.deepEqual(session.queue, ['a']);
  assert.equal(session.answers.b, 0);
  assert.equal(session.answers.c, 1);
  session = advanceQuestion(answerQuestion(session, 0));
  assert.deepEqual(session.queue, []);
  assert.equal(Object.keys(session.answers).length, 3);
});

test('feedback immediato e risposta definitiva, anche quando errata', () => {
  const session = answerQuestion(createSession(questions, () => 0.99), 1);
  assert.notEqual(session.answers.a, session.questions[0].correct);
  assert.throws(() => answerQuestion(session, 0));
  assert.ok(!advanceQuestion(session).queue.includes('a'));
});

test('il test conserva una copia delle domande originali', () => {
  const source = structuredClone(questions);
  const session = createSession(source);
  source[0].text = 'Modificata';
  source[0].options[0] = 'Modificata';
  assert.equal(session.questions[0].text, 'Domanda a');
  assert.equal(session.questions[0].options[0], 'Corretta');
});

test('una sola domanda saltata resta disponibile fino alla risposta', () => {
  let session = createSession(questions.slice(0, 1));
  session = advanceQuestion(session);
  assert.deepEqual(session.queue, ['a']);
  session = advanceQuestion(answerQuestion(session, 0));
  assert.deepEqual(session.queue, []);
});

test('dati e avanzamento possono essere serializzati e ripristinati', () => {
  const session = answerQuestion(createSession(questions, () => 0.99), 0);
  assert.deepEqual(parseData(JSON.stringify(data(session))), data(session));
  const advanced = advanceQuestion(session);
  assert.deepEqual(parseData(JSON.stringify(data(advanced))).session, advanced);
  assert.deepEqual(parseData(JSON.stringify(data(null))), data(null));
});

test('rifiuta raccolte vuote, opzioni fuori intervallo e JSON corrotto', () => {
  assert.throws(() => createSession([]));
  const session = createSession(questions);
  for (const option of [-1, 2, NaN, 0.5]) assert.throws(() => answerQuestion(session, option));
  assert.throws(() => parseData('{broken'));
});

test('rifiuta dati persistenti con schema o invarianti non validi', () => {
  const session = createSession(questions, () => 0.99);
  const invalid = [
    { ...data(null), version: 2 },
    { ...data(null), questions: [questions[0], questions[0]] },
    { ...data(null), questions: [{ ...questions[0], correct: 9 }] },
    data({ ...session, queue: ['a', 'a', 'b', 'c'] }),
    data({ ...session, queue: ['a', 'b'] }),
    data({ ...session, answers: { b: 0 } }),
    data({ ...session, answers: { a: 9 } }),
    data({ ...session, queue: ['missing'] }),
    { ...data(null), results: [{ id: 'r', date: 'invalid', total: 3, correct: 4 }] },
  ];
  for (const value of invalid) assert.throws(() => parseData(JSON.stringify(value)));
});

test('conteggio corrette e ripristino di un risultato completato', () => {
  let session = createSession(questions, () => 0.99);
  for (const option of [0, 1, 0]) session = advanceQuestion(answerQuestion(session, option));
  const correct = session.questions.filter(q => session.answers[q.id] === q.correct).length;
  assert.equal(correct, 2);
  const saved = { ...data(null), results: [{ id: 'result', total: 3, correct, date: new Date().toISOString() }] };
  assert.deepEqual(parseData(JSON.stringify(saved)), saved);
});
