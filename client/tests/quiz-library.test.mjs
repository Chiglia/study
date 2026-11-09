import test from 'node:test';
import assert from 'node:assert/strict';
import {
  activeCollection, deleteCollection, emptyLibrary, parseLibrary,
  recentCollections, saveCollection, selectCollection, updateCollection,
} from '../src/app/services/quiz-library.ts';
import { advanceQuestion, answerQuestion, createSession } from '../src/app/services/quiz-state.ts';

const question = {
  id: 'q', text: 'Quanto fa 2 + 2?', options: ['4', '5'], correct: 0, category: 'Generale',
};
const result = { id: 'r', total: 1, correct: 1, date: '2026-11-09T12:00:00.000Z' };

test('migrazione v1 conserva domande, risposte in corso e risultati', () => {
  const session = answerQuestion(createSession([question]), 1);
  const legacy = { version: 1, questions: [question], session, results: [result] };
  const migrated = parseLibrary(JSON.stringify(legacy));
  assert.equal(migrated.version, 2);
  assert.equal(activeCollection(migrated).name, 'Il mio primo test');
  for (const key of ['questions', 'session', 'results']) {
    assert.deepEqual(activeCollection(migrated)[key], legacy[key]);
  }
  assert.deepEqual(parseLibrary(JSON.stringify(migrated)), migrated);
});

test('domande e sessioni sono indipendenti e il cambio test non perde il punto', () => {
  let library = saveCollection(emptyLibrary(), 'math', 'Matematica');
  const session = answerQuestion(createSession([question]), 0);
  library = updateCollection(library, { questions: [question], session, results: [result] });
  library = saveCollection(library, 'history', 'Storia');
  assert.deepEqual(activeCollection(library).questions, []);
  assert.equal(activeCollection(library).session, null);
  assert.deepEqual(activeCollection(library).results, []);
  const historyQuestion = { ...question, id: 'history-q', text: 'Una domanda di storia' };
  library = updateCollection(library, {
    questions: [historyQuestion], session: createSession([historyQuestion]),
  });
  library = selectCollection(library, 'math');
  assert.deepEqual(activeCollection(library).session, session);
  assert.deepEqual(activeCollection(library).questions, [question]);
  assert.deepEqual(activeCollection(library).results, [result]);
  const finished = advanceQuestion(activeCollection(library).session);
  assert.equal(finished.queue.length, 0);
  library = updateCollection(library, { session: null, results: [result, { ...result, id: 'r2' }] });
  library = selectCollection(library, 'history');
  assert.equal(activeCollection(library).session.queue[0], 'history-q');
  assert.equal(activeCollection(library).results.length, 0);
  assert.deepEqual(parseLibrary(JSON.stringify(library)), library);
});

test('rinomina conserva contenuti e impedisce nomi vuoti, troppo lunghi e duplicati', () => {
  let library = saveCollection(emptyLibrary(), 'math', '  Matematica  ');
  library = updateCollection(library, { questions: [question] });
  library = saveCollection(library, 'math', 'Algebra');
  assert.equal(activeCollection(library).name, 'Algebra');
  assert.deepEqual(activeCollection(library).questions, [question]);
  for (const name of ['', ' ', 'a'.repeat(101), ' algebra ']) {
    assert.throws(() => saveCollection(library, 'other', name));
  }
});

test('eliminazione rimuove solo il test richiesto e mantiene una selezione valida', () => {
  let library = saveCollection(emptyLibrary(), 'math', 'Matematica');
  library = updateCollection(library, { questions: [question], results: [result] });
  library = saveCollection(library, 'history', 'Storia');
  library = deleteCollection(library, 'history');
  assert.equal(library.activeId, 'math');
  assert.deepEqual(activeCollection(library).questions, [question]);
  assert.deepEqual(activeCollection(library).results, [result]);
  assert.throws(() => deleteCollection(library, 'missing'));
  assert.throws(() => selectCollection(library, 'missing'));
  library = deleteCollection(library, 'math');
  assert.deepEqual(library, emptyLibrary());
  assert.deepEqual(parseLibrary(JSON.stringify(library)), library);
});

test('schema v2 rifiuta selezioni inesistenti, id duplicati e contenuti corrotti', () => {
  const library = saveCollection(emptyLibrary(), 'math', 'Matematica');
  const first = library.collections[0];
  const invalid = [
    { ...library, activeId: 'missing' },
    { ...library, collections: [] },
    { ...library, collections: [first, first] },
    { ...library, collections: [{ ...first, name: '' }] },
    { ...library, collections: [{ ...first, questions: [{ ...question, correct: 4 }] }] },
    { ...library, collections: [{ ...first, session: {} }] },
    { ...library, version: 3 },
    { version: 1, questions: [], session: {}, results: [] },
  ];
  for (const value of invalid) assert.throws(() => parseLibrary(JSON.stringify(value)));
});

test('una nuova installazione non crea test o domande prima del nome', () => {
  const library = emptyLibrary();
  assert.equal(library.collections.length, 0);
  assert.equal(library.activeId, '');
  assert.deepEqual(parseLibrary(JSON.stringify(library)), library);
  assert.throws(() => updateCollection(library, { questions: [question] }));
});

test('ultimi due modificati: creazione, rinomina e domande, non navigazione o risposte', () => {
  let library = saveCollection(emptyLibrary(), 'a', 'Algebra', 100);
  library = saveCollection(library, 'b', 'Biologia', 200);
  library = saveCollection(library, 'c', 'Chimica', 300);
  assert.deepEqual(recentCollections(library.collections).map(t => t.id), ['c', 'b']);
  library = selectCollection(library, 'a');
  library = updateCollection(library, { questions: [question] }, 400);
  assert.deepEqual(recentCollections(library.collections).map(t => t.id), ['a', 'c']);
  library = selectCollection(library, 'b');
  library = updateCollection(library, { session: createSession([question]) });
  assert.deepEqual(recentCollections(library.collections).map(t => t.id), ['a', 'c']);
  library = saveCollection(library, 'b', 'Botanica', 500);
  assert.deepEqual(recentCollections(library.collections).map(t => t.id), ['b', 'a']);
  const restored = parseLibrary(JSON.stringify(library));
  assert.deepEqual(recentCollections(restored.collections), recentCollections(library.collections));
});

test('dati v2 senza date di modifica rimangono leggibili senza inventare recenti', () => {
  const library = saveCollection(emptyLibrary(), 'a', 'Algebra');
  const { modifiedAt, ...legacy } = library.collections[0];
  const restored = parseLibrary(JSON.stringify({ ...library, collections: [legacy] }));
  assert.equal(restored.collections[0].modifiedAt, 0);
  assert.deepEqual(recentCollections(restored.collections), []);
  for (const date of [-1, 'oggi', null]) {
    assert.throws(() => parseLibrary(JSON.stringify({
      ...library, collections: [{ ...legacy, modifiedAt: date }],
    })));
  }
});
