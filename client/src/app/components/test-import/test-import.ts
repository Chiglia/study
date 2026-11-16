import { Component, inject, input, signal } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';
import { QuizStore } from '../../services/quiz-store';
import { parseUserTest } from '../../services/test-file';
import { ModalFocus } from '../../services/modal-focus';

@Component({
  selector: 'app-test-import',
  imports: [ModalFocus],
  templateUrl: './test-import.html',
  styleUrl: './test-import.css',
})
export class TestImport {
  readonly store = inject(QuizStore);
  readonly compact = input(false);
  readonly templateHref = new URL('test-template.json', inject(DOCUMENT).baseURI).href;
  private readonly router = inject(Router);
  readonly open = signal(false);
  readonly error = signal('');
  readonly loading = signal(false);

  show(): void {
    this.error.set('');
    this.open.set(true);
  }

  async importFile(event: Event): Promise<void> {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    if (!file) return;
    this.error.set('');
    this.loading.set(true);
    try {
      if (!file.name.toLocaleLowerCase().endsWith('.json')) {
        throw new Error('Seleziona un file con estensione .json.');
      }
      const test = parseUserTest(await file.text());
      if (!this.store.importTest(test)) {
        this.error.set(this.store.error() || 'Impossibile importare il test.');
        return;
      }
      this.open.set(false);
      void this.router.navigate(['/test', this.store.active()?.id]);
    } catch (error) {
      this.error.set(error instanceof Error ? error.message : 'Lettura del file non riuscita.');
    } finally {
      this.loading.set(false);
      input.value = '';
    }
  }
}
