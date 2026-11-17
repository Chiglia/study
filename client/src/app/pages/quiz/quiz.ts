import { Component, computed, inject } from '@angular/core';
import { DatePipe } from '@angular/common';
import { TranslocoDirective } from '@jsverse/transloco';
import { RouterLink } from '@angular/router';
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
  readonly pageComplete = computed(() => {
    const session = this.store.session();
    return !!session && session.queue.every(id => Object.hasOwn(session.answers, id));
  });
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
