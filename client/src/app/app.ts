import { Component, inject, signal } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { QuizStore } from './services/quiz-store';
import { ModalFocus } from './services/modal-focus';
import { TestNavigation } from './components/test-navigation/test-navigation';
import { TestCatalog } from './components/test-catalog/test-catalog';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, ModalFocus, TestNavigation, TestCatalog],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  readonly store = inject(QuizStore);
  readonly help = signal(false);
  readonly catalogOpen = signal(false);
  private readonly router = inject(Router);

  reset(): void {
    if (confirm('Eliminare tutti i dati QuizFlow salvati in questo browser?')) {
      this.store.reset();
      if (!this.store.blocked()) void this.router.navigate(['/']);
    }
  }
}
