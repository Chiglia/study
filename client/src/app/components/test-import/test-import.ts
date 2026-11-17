import { Component, inject, input, signal } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';
import { QuizStore } from '../../services/quiz-store';
import { parseUserTest } from '../../services/test-file';
import { ModalFocus } from '../../services/modal-focus';
import { parsePdfTest, PdfTestPreview } from '../../services/pdf-test-parser';
import { readPdfLines } from '../../services/pdf-test-reader';
import { CatalogTest } from '../../services/test-catalog';
import { TestCatalog } from '../test-catalog/test-catalog';

@Component({
  selector: 'app-test-import',
  imports: [ModalFocus, TestCatalog],
  templateUrl: './test-import.html',
  styleUrl: './test-import.css',
})
export class TestImport {
  readonly store = inject(QuizStore);
  readonly compact = input(false);
  readonly templateHref = new URL('test-template.json', inject(DOCUMENT).baseURI).href;
  readonly pdfTemplateHref = new URL('test-template.pdf', this.templateHref).href;
  private readonly router = inject(Router);
  readonly open = signal(false);
  readonly source = signal<'catalog' | 'file'>('file');
  readonly error = signal('');
  readonly loading = signal(false);
  readonly preview = signal<PdfTestPreview | null>(null);
  private request = 0;

  show(): void {
    this.source.set('file');
    this.error.set('');
    this.preview.set(null);
    this.open.set(true);
  }

  close(): void {
    this.request++;
    this.loading.set(false);
    this.preview.set(null);
    this.open.set(false);
  }

  navigateTabs(event: KeyboardEvent): void {
    if (this.loading() || !['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
    event.preventDefault();
    const source = event.key === 'Home' ? 'file' : event.key === 'End' ? 'catalog'
      : this.source() === 'file' ? 'catalog' : 'file';
    this.source.set(source);
    if (event.currentTarget instanceof HTMLElement) {
      event.currentTarget.querySelector<HTMLButtonElement>(`#import-${source}-tab`)?.focus();
    }
  }

  save(test: CatalogTest): void {
    if (!this.store.importTest(test)) {
      this.error.set(this.store.error() || 'Impossibile importare il test.');
      return;
    }
    this.close();
    void this.router.navigate(['/test', this.store.active()?.id]);
  }

  async importFile(event: Event): Promise<void> {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    if (!file) return;
    const request = ++this.request;
    this.error.set('');
    this.preview.set(null);
    this.loading.set(true);
    try {
      const name = file.name.toLocaleLowerCase();
      if (name.endsWith('.json')) {
        const test = parseUserTest(await file.text());
        if (request === this.request) this.save(test);
      } else if (name.endsWith('.pdf')) {
        const lines = await readPdfLines(new Uint8Array(await file.arrayBuffer()), this.templateHref);
        const preview = parsePdfTest(lines, file.name.slice(0, -4));
        if (request === this.request) this.preview.set(preview);
      } else {
        throw new Error('Seleziona un file .json o .pdf.');
      }
    } catch (error) {
      if (request === this.request) {
        console.error('QuizFlow: importazione file non riuscita', error);
        this.error.set(error instanceof Error ? error.message : 'Lettura del file non riuscita.');
      }
    } finally {
      if (request === this.request) this.loading.set(false);
      input.value = '';
    }
  }
}
