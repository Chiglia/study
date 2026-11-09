import { Component, computed, inject } from '@angular/core';
import { DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { QuizStore } from '../../services/quiz-store';
import { TestSelector } from '../../components/test-selector/test-selector';

@Component({
  selector: 'app-dashboard',
  imports: [DatePipe, RouterLink, TestSelector],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  readonly store = inject(QuizStore);
  readonly questionCount = computed(() => this.store.collections()
    .reduce((sum, test) => sum + test.questions.length, 0));
  readonly completedCount = computed(() => this.store.collections()
    .reduce((sum, test) => sum + test.results.length, 0));
}
