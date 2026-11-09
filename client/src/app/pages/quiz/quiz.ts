import { Component, computed, inject } from '@angular/core';
import { DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { QuizStore } from '../../services/quiz-store';

@Component({
  selector: 'app-quiz',
  imports: [RouterLink, DatePipe],
  templateUrl: './quiz.html',
  styleUrl: './quiz.css',
})
export class Quiz {
  readonly store = inject(QuizStore);
  readonly selected = computed(() => {
    const id = this.store.current()?.id;
    const session = this.store.session();
    return id && session && Object.hasOwn(session.answers, id) ? session.answers[id] : null;
  });
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
