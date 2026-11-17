import { Component, computed, effect, inject, signal } from '@angular/core';
import { TranslocoDirective } from '@jsverse/transloco';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { categories, Question } from '../../services/quiz.models';
import { QuizStore } from '../../services/quiz-store';
import { ModalFocus } from '../../services/modal-focus';
import { QuestionEditor } from './question-editor';
import { TestSelector } from '../../components/test-selector/test-selector';

@Component({
  selector: 'app-home',
  imports: [FormsModule, QuestionEditor, ModalFocus, TestSelector, TranslocoDirective],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  readonly store = inject(QuizStore);
  private readonly router = inject(Router);
  readonly categories = categories;
  readonly search = signal('');
  readonly category = signal('');
  readonly randomizeQuestions = signal(true);
  readonly randomizeAnswers = signal(false);
  readonly questionsPerPage = signal<number | 'all'>(1);
  readonly pageSizes = [1, 3, 5, 10];
  readonly currentPageSize = computed(() => {
    const session = this.store.session();
    return session ? session.questionsPerPage ?? 1 : this.questionsPerPage();
  });
  readonly legacyPageSize = computed(() => {
    const size = this.store.session()?.questionsPerPage;
    return typeof size === 'number' && !this.pageSizes.includes(size) ? size : null;
  });
  readonly editorOpen = signal(false);
  readonly editing = signal<Question | null>(null);
  readonly deleting = signal<Question | null>(null);
  readonly filtered = computed(() => this.store.questions().filter(question =>
    (!this.category() || question.category === this.category())
    && question.text.toLocaleLowerCase().includes(this.search().trim().toLocaleLowerCase())));
  private readonly activeId = computed(() => this.store.active()?.id);

  constructor() {
    effect(() => {
      this.activeId();
      this.search.set('');
      this.category.set('');
      this.editorOpen.set(false);
      this.editing.set(null);
      this.deleting.set(null);
    });
  }

  edit(question: Question | null = null): void {
    this.editing.set(question);
    this.editorOpen.set(true);
  }

  start(): void {
    if (this.store.session() || this.store.start({
      randomizeQuestions: this.randomizeQuestions(),
      randomizeAnswers: this.randomizeAnswers(),
      questionsPerPage: this.questionsPerPage(),
    })) {
      void this.router.navigate(['/test', this.store.active()?.id, 'svolgi']);
    }
  }

  remove(): void {
    const question = this.deleting();
    if (question && this.store.remove(question.id)) this.deleting.set(null);
  }
}
