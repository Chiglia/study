import type { QuizCollection, QuizLibrary } from './quiz.models';
import { emptyData } from './quiz.models.ts';
import { parseData } from './quiz-state.ts';

export function newCollection(id: string, name: string, modifiedAt = Date.now()): QuizCollection {
  const { questions, session, results } = emptyData();
  return { id, name, modifiedAt, questions, session, results };
}

export function emptyLibrary(): QuizLibrary {
  return {
    version: 2, activeId: '', collections: [],
  };
}

function record(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

export function parseLibrary(raw: string): QuizLibrary {
  const value: unknown = JSON.parse(raw);
  if (record(value) && value['version'] === 1) {
    const { questions, session, results } = parseData(raw);
    return {
      version: 2, activeId: 'default',
      collections: [{ id: 'default', name: 'Il mio primo test', modifiedAt: 0, questions, session, results }],
    };
  }
  if (!record(value) || value['version'] !== 2 || typeof value['activeId'] !== 'string'
    || !Array.isArray(value['collections'])) {
    throw new Error('La raccolta dei test salvata non è valida.');
  }
  const collections = value['collections'].map((item: unknown): QuizCollection => {
    if (!record(item) || typeof item['id'] !== 'string' || !item['id'].trim()
      || typeof item['name'] !== 'string' || !item['name'].trim() || item['name'].length > 100) {
      throw new Error('Un test salvato non è valido.');
    }
    const { questions, session, results } = parseData(JSON.stringify({
      version: 1, questions: item['questions'], session: item['session'], results: item['results'],
    }));
    const modifiedAt = item['modifiedAt'] === undefined ? 0 : item['modifiedAt'];
    if (typeof modifiedAt !== 'number' || !Number.isFinite(modifiedAt) || modifiedAt < 0) {
      throw new Error('La data di modifica del test non è valida.');
    }
    return { id: item['id'], name: item['name'], modifiedAt, questions, session, results };
  });
  if (new Set(collections.map(item => item.id)).size !== collections.length
    || (collections.length ? !collections.some(item => item.id === value['activeId']) : value['activeId'] !== '')) {
    throw new Error('Il test selezionato o gli identificativi non sono validi.');
  }
  return { version: 2, activeId: value['activeId'], collections };
}

export function activeCollection(library: QuizLibrary): QuizCollection {
  const active = library.collections.find(item => item.id === library.activeId);
  if (!active) throw new Error('Il test selezionato non esiste.');
  return active;
}

export function selectCollection(library: QuizLibrary, id: string): QuizLibrary {
  if (!library.collections.some(item => item.id === id)) throw new Error('Il test non esiste.');
  return { ...library, activeId: id };
}

export function updateCollection(library: QuizLibrary, patch: Partial<Pick<QuizCollection,
  'questions' | 'session' | 'results'>>, modifiedAt?: number): QuizLibrary {
  activeCollection(library);
  return {
    ...library,
    collections: library.collections.map(item => item.id === library.activeId
      ? { ...item, ...patch, modifiedAt: modifiedAt ?? item.modifiedAt } : item),
  };
}

export function saveCollection(library: QuizLibrary, id: string, name: string, modifiedAt = Date.now()): QuizLibrary {
  const trimmed = name.trim();
  if (!trimmed || trimmed.length > 100) throw new Error('Inserisci un nome da 1 a 100 caratteri.');
  if (library.collections.some(item => item.id !== id
    && item.name.toLocaleLowerCase() === trimmed.toLocaleLowerCase())) {
    throw new Error('Esiste già un test con questo nome.');
  }
  const exists = library.collections.some(item => item.id === id);
  const collections = exists
    ? library.collections.map(item => item.id === id ? { ...item, name: trimmed, modifiedAt } : item)
    : [...library.collections, newCollection(id, trimmed, modifiedAt)];
  return { ...library, activeId: id, collections };
}

export function deleteCollection(library: QuizLibrary, id: string): QuizLibrary {
  if (!library.collections.some(item => item.id === id)) throw new Error('Il test non esiste.');
  const collections = library.collections.filter(item => item.id !== id);
  return { ...library, collections, activeId: library.activeId === id ? collections[0]?.id ?? '' : library.activeId };
}

export function recentCollections(collections: QuizCollection[]): QuizCollection[] {
  return collections.filter(item => item.modifiedAt > 0)
    .sort((a, b) => b.modifiedAt - a.modifiedAt).slice(0, 2);
}
