import { Component, computed, inject, signal } from '@angular/core';
import { DatePipe } from '@angular/common';
import { TranslocoDirective } from '@jsverse/transloco';
import { Router, RouterLink } from '@angular/router';
import { QuizStore } from '../../services/quiz-store';
import { pageSize } from '../../services/quiz-state';
import { categories } from '../../services/quiz.models';

@Component({
  selector: 'app-quiz',
  imports: [RouterLink, DatePipe, TranslocoDirective],
  templateUrl: './quiz.html',
  styleUrl: './quiz.css',
})
export class Quiz {
  readonly store = inject(QuizStore);
  private readonly router = inject(Router);
  readonly categories = categories;
  readonly visibleQuestions = computed(() => {
    const session = this.store.session();
    if (!session) return [];
    return session.queue.slice(0, pageSize(session))
      .map(id => session.questions.find(question => question.id === id))
      .filter(question => question !== undefined);
  });
  readonly remaining = computed(() => {
    const session = this.store.session();
    return session ? session.questions.length - Object.keys(session.answers).length : 0;
  });
  readonly reviewEnd = signal<number | null>(null);
  readonly reviewableQuestions = computed(() => {
    const session = this.store.session();
    const currentIds = new Set(this.visibleQuestions().map(question => question.id));
    if (!session) return [];
    return Object.keys(session.answers)
      .filter(id => !currentIds.has(id))
      .map(id => session.questions.find(question => question.id === id))
      .filter(question => question !== undefined);
  });
  readonly reviewing = computed(() => this.reviewEnd() !== null);
  readonly reviewedQuestions = computed(() => {
    const session = this.store.session();
    const end = this.reviewEnd();
    if (!session || end === null) return [];
    return this.reviewableQuestions().slice(Math.max(0, end - pageSize(session)), end);
  });
  readonly displayedQuestions = computed(() => {
    return this.reviewing() ? this.reviewedQuestions() : this.visibleQuestions();
  });
  readonly canReviewEarlier = computed(() => {
    const session = this.store.session();
    return session !== null && (this.reviewEnd() ?? 0) > pageSize(session);
  });
  readonly pageComplete = computed(() => {
    const session = this.store.session();
    return !!session && session.queue.every(id => Object.hasOwn(session.answers, id));
  });
  reviewPrevious(): void {
    const count = this.reviewableQuestions().length;
    if (count) this.reviewEnd.set(count);
  }
  reviewEarlier(): void {
    const session = this.store.session();
    const end = this.reviewEnd();
    if (session && end !== null) {
      this.reviewEnd.set(Math.max(pageSize(session), end - pageSize(session)));
    }
  }
  leaveReview(): void {
    this.reviewEnd.set(null);
  }
  cancelSession(): void {
    const testId = this.store.active()?.id;
    if (testId && this.store.cancelSession()) {
      void this.router.navigate(['/test', testId]);
    }
  }
  next(): void {
    this.leaveReview();
    this.store.next();
  }
  selected(id: string): number | null {
    const answers = this.store.session()?.answers;
    return answers && Object.hasOwn(answers, id) ? answers[id] : null;
  }
  readonly answered = computed(() => Object.keys(this.store.session()?.answers ?? {}).length);
  readonly progress = computed(() => {
    const total = this.store.session()?.questions.length ?? 0;
    return total ? Math.round(this.answered() / total * 100) : 0;
  });
  readonly result = computed(() => this.store.results().at(-1));
  readonly score = computed(() => {
    const result = this.result();
    return result ? Math.round(result.correct / result.total * 100) : 0;
  });

}
