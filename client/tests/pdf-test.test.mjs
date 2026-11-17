import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { parsePdfTest } from '../src/app/services/pdf-test-parser.ts';
import { readPdfLines } from '../src/app/services/pdf-test-reader.ts';

const line = (text, x = 20, bold = false) => ({ text, x, bold: Array(text.length).fill(bold) });
let sequence = 0;
const id = () => `id-${++sequence}`;

test('importa nell’ordine del documento rimuovendo numeri e lettere', () => {
  const { test: result, skipped } = parsePdfTest([
    line('21. Prima domanda'), line('continua'), line('a. Errata', 40),
    line('b. Risposta', 40, true), line('corretta', 40, true),
    line('c. Terza', 40), line('22. Senza risposte'),
    line('2. Seconda domanda'), line('a. Risposta corretta', 40, true),
    line('b. Altra risposta', 40),
  ], ' Il mio test ', id);
  assert.equal(skipped, 1);
  assert.equal(result.name, 'Il mio test');
  assert.deepEqual(result.questions.map(q => q.text), ['Prima domanda continua', 'Seconda domanda']);
  assert.deepEqual(result.questions[0].options, ['Errata', 'Risposta corretta', 'Terza']);
  assert.equal(result.questions[0].correct, 1);
  assert.equal(result.questions[1].correct, 0);
});

test('esclude domande senza due risposte o con grassetto assente o ambiguo', () => {
  const { test: result, skipped } = parsePdfTest([
    line('1. Valida'), line('a. Corretta', 40, true), line('b. Errata', 40),
    line('2. Vuota'), line('3. Una risposta'), line('a. Soltanto questa', 40, true),
    line('4. Nessuna corretta'), line('a. Prima', 40), line('b. Seconda', 40),
    line('5. Due corrette'), line('a. Prima', 40, true), line('b. Seconda', 40, true),
  ], 'Test', id);
  assert.equal(result.questions.length, 1);
  assert.equal(skipped, 4);
});

test('i numeri indentati nelle risposte non diventano nuove domande', () => {
  const { test: result } = parsePdfTest([
    line('1. Domanda'), line('a. Prima riga', 40, true), line('2. continuazione', 40, true),
    line('b. Altra', 40),
  ], 'Test', id);
  assert.equal(result.questions.length, 1);
  assert.equal(result.questions[0].options[0], 'Prima riga 2. continuazione');
});

test('se non trova domande valide segnala il problema', () => {
  assert.throws(() => parsePdfTest([], 'Test', id), /numerate/);
  assert.throws(() => parsePdfTest([line('1. Vuota')], 'Test', id), /Nessuna domanda importabile/);
});

function makePdf() {
  const content = [
    'BT /F1 12 Tf 50 750 Td (21. Test question) Tj',
    '0 -20 Td (a. Wrong answer) Tj',
    '0 -20 Td /F2 12 Tf (b. Correct answer) Tj ET',
  ].join('\n');
  const objects = [
    '<< /Type /Catalog /Pages 2 0 R >>',
    '<< /Type /Pages /Kids [3 0 R] /Count 1 >>',
    '<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595 842] /Resources << /Font << /F1 4 0 R /F2 5 0 R >> >> /Contents 6 0 R >>',
    '<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>',
    '<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>',
    `<< /Length ${Buffer.byteLength(content)} >>\nstream\n${content}\nendstream`,
  ];
  let pdf = '%PDF-1.4\n';
  const offsets = [0];
  for (const [index, object] of objects.entries()) {
    offsets.push(Buffer.byteLength(pdf));
    pdf += `${index + 1} 0 obj\n${object}\nendobj\n`;
  }
  const xref = Buffer.byteLength(pdf);
  pdf += `xref\n0 ${offsets.length}\n0000000000 65535 f \n`;
  for (const offset of offsets.slice(1)) pdf += `${String(offset).padStart(10, '0')} 00000 n \n`;
  pdf += `trailer\n<< /Size ${offsets.length} /Root 1 0 R >>\nstartxref\n${xref}\n%%EOF\n`;
  return new Uint8Array(Buffer.from(pdf));
}

test('estrae un PDF reale e riconosce il font grassetto', async () => {
  const lines = await readPdfLines(makePdf());
  const { test: result, skipped } = parsePdfTest(lines, 'Test', id);
  assert.equal(skipped, 0);
  assert.equal(result.questions[0].text, 'Test question');
  assert.deepEqual(result.questions[0].options, ['Wrong answer', 'Correct answer']);
  assert.equal(result.questions[0].correct, 1);
});

test('il modello PDF scaricabile è importabile e indica le risposte corrette', async () => {
  const raw = await readFile(new URL('../public/test-template.pdf', import.meta.url));
  const lines = await readPdfLines(new Uint8Array(raw));
  const { test: result, skipped } = parsePdfTest(lines, 'Esempio', id);
  assert.equal(skipped, 0);
  assert.deepEqual(result.questions.map(question => question.text), [
    'Quanto fa 2 + 2?', 'Quale pianeta viene chiamato il pianeta rosso?',
  ]);
  assert.deepEqual(result.questions.map(question => question.correct), [1, 2]);
  assert.ok(result.questions.every(question => question.options.length === 4));
});
