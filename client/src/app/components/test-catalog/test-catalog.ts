import { Component, computed, inject, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ModalFocus } from '../../services/modal-focus';
import { QuizStore } from '../../services/quiz-store';
import { CatalogTest, parseCatalog } from '../../services/test-catalog';

@Component({
    selector: 'app-test-catalog',
    imports: [FormsModule, ModalFocus],
    templateUrl: './test-catalog.html',
    styleUrl: './test-catalog.css',
})
export class TestCatalog {
    readonly store = inject(QuizStore);
    readonly closed = output<void>();
    readonly tests = signal<CatalogTest[]>([]);
    readonly query = signal('');
    readonly loading = signal(true);
    readonly error = signal('');
    readonly message = signal('');
    readonly added = signal(new Set<string>());
    readonly filtered = computed(() => {
        const query = this.normalize(this.query().trim());
        return this.tests().filter(test => this.normalize([
            test.name, ...test.questions.map(question => question.category),
        ].join(' ')).includes(query));
    });

    constructor() {
        void this.load();
    }

    async load(): Promise<void> {
        this.loading.set(true);
        this.error.set('');
        try {
            const response = await fetch(new URL('test-catalog.json', document.baseURI));
            if (!response.ok) throw new Error('Catalogo non disponibile.');
            this.tests.set(parseCatalog(await response.json()));
        } catch {
            this.error.set('Impossibile caricare il catalogo dei test. Riprova.');
        } finally {
            this.loading.set(false);
        }
    }

    add(test: CatalogTest): void {
        if (this.added().has(test.id) || this.store.blocked()) return;
        this.message.set('');
        if (this.store.importTest(test)) {
            this.added.update(ids => new Set([...ids, test.id]));
            this.message.set(`"${this.store.active()?.name}" aggiunto ai tuoi test.`);
        }
    }

    private normalize(value: string): string {
        return value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLocaleLowerCase();
    }
}