import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { importCatalogTest, parseCatalog } from '../src/app/services/test-catalog.ts';
import {
  activeCollection,
  emptyLibrary,
  parseLibrary,
  saveCollection,
} from '../src/app/services/quiz-library.ts';

const preset = {
  id: 'math',
  name: 'Matematica',
  questions: [
    { id: 'q1', text: 'Quanto fa 2 + 2?', options: ['4', '5'], correct: 0, category: 'Scienze' },
  ],
};
let sequence = 0;
const createId = () => `import-${++sequence}`;

test('importazione crea una copia completa senza modificare catalogo o raccolta originale', () => {
  const library = saveCollection(emptyLibrary(), 'existing', 'Personale');
  const before = structuredClone(library);
  const imported = importCatalogTest(library, preset, createId);
  const collection = activeCollection(imported);
  assert.deepEqual(library, before);
  assert.deepEqual(imported.collections[0], before.collections[0]);
  assert.equal(collection.name, preset.name);
  assert.equal(collection.questions[0].text, preset.questions[0].text);
  assert.notEqual(collection.questions[0].id, preset.questions[0].id);
  assert.equal(collection.session, null);
  assert.deepEqual(collection.results, []);
  collection.questions[0].options[0] = 'Modificata';
  assert.equal(preset.questions[0].options[0], '4');
  assert.deepEqual(parseLibrary(JSON.stringify(imported)), imported);
});

test('importazioni ripetute e nomi lunghi ricevono nomi e identificativi distinti', () => {
  let library = saveCollection(emptyLibrary(), 'existing', 'matematica');
  library = importCatalogTest(library, preset, createId);
  library = importCatalogTest(library, preset, createId);
  assert.deepEqual(
    library.collections.map((item) => item.name),
    ['matematica', 'Matematica (2)', 'Matematica (3)'],
  );
  const long = { ...preset, name: 'a'.repeat(100) };
  library = importCatalogTest(library, long, createId);
  library = importCatalogTest(library, long, createId);
  assert.equal(activeCollection(library).name.length, 100);
  assert.deepEqual(parseLibrary(JSON.stringify(library)), library);
});

test('catalogo rifiuta schema errato, domande vuote, risposte non valide e id duplicati', () => {
  for (const value of [
    null,
    {},
    { tests: [null] },
    { tests: [{ ...preset, questions: [] }] },
    { tests: [{ ...preset, questions: [{ ...preset.questions[0], correct: 9 }] }] },
    { tests: [preset, preset] },
  ]) {
    assert.throws(() => parseCatalog(value));
  }
  assert.throws(() =>
    importCatalogTest(saveCollection(emptyLibrary(), 'same', 'Altro'), preset, () => 'same'),
  );
  assert.deepEqual(parseCatalog({ tests: [] }), []);
});

test('il JSON pubblico contiene test validi e importabili', async () => {
  const raw = await readFile(new URL('../public/test-catalog.json', import.meta.url), 'utf8');
  const catalog = parseCatalog(JSON.parse(raw));
  assert.equal(catalog.length, 4);
  for (const preset of catalog) {
    assert.ok(preset.questions.length >= 10, `${preset.name}: servono almeno 10 domande`);
  }
  let library = emptyLibrary();
  for (const preset of catalog) library = importCatalogTest(library, preset, createId);
  assert.equal(library.collections.length, catalog.length);
  assert.deepEqual(parseLibrary(JSON.stringify(library)), library);
});
