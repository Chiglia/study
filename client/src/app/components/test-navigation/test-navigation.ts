import { Component, inject } from '@angular/core';
import { TranslocoDirective } from '@jsverse/transloco';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { QuizStore } from '../../services/quiz-store';

@Component({
  selector: 'app-test-navigation',
  imports: [RouterLink, RouterLinkActive, TranslocoDirective],
  templateUrl: './test-navigation.html',
  styleUrl: './test-navigation.css',
})
export class TestNavigation {
  readonly store = inject(QuizStore);
}
