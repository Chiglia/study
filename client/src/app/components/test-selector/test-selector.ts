import { Component, inject, input, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { QuizStore } from '../../services/quiz-store';
import { ModalFocus } from '../../services/modal-focus';

@Component({
  selector: 'app-test-selector',
  imports: [FormsModule, ModalFocus],
  templateUrl: './test-selector.html',
  styleUrl: './test-selector.css',
})
export class TestSelector {
  readonly store = inject(QuizStore);
  private readonly router = inject(Router);
  readonly variant = input<'create' | 'manage'>('create');
  readonly mode = signal<'create' | 'rename' | 'delete' | null>(null);
  name = '';
  targetId = '';
  validation = '';

  open(mode: 'create' | 'rename' | 'delete'): void {
    this.name = mode === 'create' ? '' : this.store.active()?.name ?? '';
    this.targetId = this.store.active()?.id ?? '';
    this.validation = '';
    this.mode.set(mode);
  }

  save(): void {
    if (!this.name.trim()) {
      this.validation = 'Inserisci un nome per il test.';
      return;
    }
    if (this.store.saveTest(this.name, this.mode() === 'rename' ? this.targetId : undefined)) {
      this.mode.set(null);
      void this.router.navigate(['/test', this.store.active()?.id]);
    }
  }

  remove(): void {
    if (this.store.deleteTest(this.targetId)) {
      this.mode.set(null);
      void this.router.navigate(['/']);
    }
  }
}
