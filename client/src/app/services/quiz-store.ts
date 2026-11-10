import { computed, Injectable, signal } from '@angular/core';
import { Question, QuizCollection, QuizLibrary } from './quiz.models';
import { advanceQuestion, answerQuestion, createSession } from './quiz-state';
import { CatalogTest, importCatalogTest } from './test-catalog';
import {
  activeCollection, deleteCollection, emptyLibrary, parseLibrary,
  recentCollections, saveCollection, selectCollection, updateCollection,
} from './quiz-library';

@Injectable({ providedIn: 'root' })
export class QuizStore {
  private readonly key = 'quizflow.data.v1';
  private readonly data = signal<QuizLibrary>(emptyLibrary());
  readonly error = signal('');
  readonly blocked = signal(false);
  readonly collections = computed(() => this.data().collections);
  readonly active = computed(() => this.collections().length ? activeCollection(this.data()) : null);
  readonly recent = computed(() => recentCollections(this.collections()));
  readonly questions = computed(() => this.active()?.questions ?? []);
  readonly session = computed(() => this.active()?.session ?? null);
  readonly results = computed(() => this.active()?.results ?? []);
  readonly current = computed(() => {
    const session = this.session();
    return session?.questions.find(question => question.id === session.queue[0]);
  });

  constructor() {
    try {
      const saved = localStorage.getItem(this.key);
      if (saved) {
        const library = parseLibrary(saved);
        const serialized = JSON.stringify(library);
        if (saved !== serialized) localStorage.setItem(this.key, serialized);
        this.data.set(library);
      }
    } catch (error) {
      console.error('QuizFlow: lettura localStorage non riuscita', error);
      this.error.set('Impossibile leggere i dati locali. Non verranno sovrascritti. Puoi riprovare ricaricando la pagina o ripristinarli.');
      this.blocked.set(true);
    }
  }

  save(question: Question): boolean {
    const questions = this.questions();
    const exists = questions.some(item => item.id === question.id);
    return this.patch({
      questions: exists ? questions.map(item => item.id === question.id ? question : item)
        : [...questions, question],
    }, true);
  }

  remove(id: string): boolean {
    return this.patch({ questions: this.questions().filter(item => item.id !== id) }, true);
  }

  start(): boolean {
    return this.patch({ session: createSession(this.questions()) });
  }

  answer(option: number): void {
    const session = this.session();
    if (session) this.patch({ session: answerQuestion(session, option) });
  }

  next(): void {
    const session = this.session();
    if (!session) return;
    const next = advanceQuestion(session);
    if (next.queue.length) {
      this.patch({ session: next });
      return;
    }
    const correct = next.questions.filter(question => next.answers[question.id] === question.correct).length;
    const result = {
      id: crypto.randomUUID(), total: next.questions.length, correct, date: new Date().toISOString(),
    };
    this.patch({ session: null, results: [...this.results(), result] });
  }

  select(id: string): boolean {
    return this.changeLibrary(() => selectCollection(this.data(), id));
  }

  saveTest(name: string, id: string = crypto.randomUUID()): boolean {
    return this.changeLibrary(() => saveCollection(this.data(), id, name));
  }

  importTest(test: CatalogTest): boolean {
    return this.changeLibrary(() => importCatalogTest(this.data(), test));
  }

  deleteTest(id: string): boolean {
    return this.changeLibrary(() => deleteCollection(this.data(), id));
  }

  private changeLibrary(change: () => QuizLibrary): boolean {
    try {
      return this.persist(change());
    } catch (error) {
      console.error('QuizFlow: modifica test non riuscita', error);
      this.error.set(error instanceof Error ? error.message : 'Impossibile modificare il test.');
      return false;
    }
  }

  private patch(patch: Partial<Pick<QuizCollection, 'questions' | 'session' | 'results'>>, modified = false): boolean {
    return this.changeLibrary(() => updateCollection(this.data(), patch, modified ? Date.now() : undefined));
  }

  reset(): void {
    try {
      localStorage.removeItem(this.key);
      this.data.set(emptyLibrary());
      this.blocked.set(false);
      this.error.set('');
    } catch (error) {
      console.error('QuizFlow: ripristino localStorage non riuscito', error);
      this.error.set('Il browser non consente di ripristinare i dati. Controlla le impostazioni di archiviazione.');
    }
  }

  private persist(data: QuizLibrary): boolean {
    if (this.blocked()) return false;
    try {
      localStorage.setItem(this.key, JSON.stringify(data));
      this.data.set(data);
      this.error.set('');
      return true;
    } catch (error) {
      console.error('QuizFlow: salvataggio localStorage non riuscito', error);
      this.error.set('Salvataggio non riuscito. Lo spazio potrebbe essere esaurito o il browser impedisce l’archiviazione. La modifica non è stata applicata.');
      return false;
    }
  }
}
