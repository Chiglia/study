import type { Question, QuizLibrary } from './quiz.models';
import { parseData } from './quiz-state.ts';
import { saveCollection, updateCollection } from './quiz-library.ts';

export interface CatalogTest {
    id: string;
    name: string;
    questions: Question[];
}

export function parseCatalog(value: unknown): CatalogTest[] {
    if (typeof value !== 'object' || value === null || !('tests' in value)
        || !Array.isArray(value.tests)) {
        throw new Error('Il catalogo dei test non e valido.');
    }
    const tests = value.tests.map((item: unknown): CatalogTest => {
        if (typeof item !== 'object' || item === null || !('id' in item)
            || typeof item.id !== 'string' || !item.id.trim() || !('name' in item)
            || typeof item.name !== 'string' || !item.name.trim() || item.name.trim().length > 100
            || !('questions' in item)) {
            throw new Error('Un test del catalogo non e valido.');
        }
        const { questions } = parseData(JSON.stringify({
            version: 1, questions: item.questions, session: null, results: [],
        }));
        if (!questions.length) throw new Error('Un test del catalogo non contiene domande.');
        return { id: item.id, name: item.name.trim(), questions };
    });
    if (new Set(tests.map(item => item.id)).size !== tests.length) {
        throw new Error('Il catalogo contiene identificativi duplicati.');
    }
    return tests;
}

export function importCatalogTest(library: QuizLibrary, test: CatalogTest,
    createId: () => string = () => crypto.randomUUID()): QuizLibrary {
    const [validated] = parseCatalog({ tests: [test] });
    let name = validated.name;
    let suffix = 2;
    while (library.collections.some(item => item.name.toLocaleLowerCase() === name.toLocaleLowerCase())) {
        const ending = ` (${suffix++})`;
        name = `${validated.name.slice(0, 100 - ending.length)}${ending}`;
    }
    const id = createId();
    if (library.collections.some(item => item.id === id)) throw new Error('Identificativo del test gia presente.');
    const questions = structuredClone(validated.questions).map(question => ({ ...question, id: createId() }));
    return updateCollection(saveCollection(library, id, name), { questions });
}