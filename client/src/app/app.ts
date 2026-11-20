import { Component, inject, signal } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TranslocoDirective, TranslocoService } from '@jsverse/transloco';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NavigationEnd } from '@angular/router';
import { filter, merge, startWith, switchMap } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { QuizStore } from './services/quiz-store';
import { ModalFocus } from './services/modal-focus';
import { TestNavigation } from './components/test-navigation/test-navigation';
import { LanguageService } from './services/language-service';
import { ThemeService } from './services/theme-service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, ModalFocus, TestNavigation, TranslocoDirective],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  readonly language = inject(LanguageService);
  readonly theme = inject(ThemeService);
  readonly store = inject(QuizStore);
  readonly help = signal(false);
  private readonly router = inject(Router);
  private readonly transloco = inject(TranslocoService);
  private readonly title = inject(Title);

  constructor() {
    merge(
      this.router.events.pipe(filter(event => event instanceof NavigationEnd)),
      this.transloco.langChanges$,
    ).pipe(
      startWith(null),
      switchMap(() => this.transloco.selectTranslate(this.titleKey())),
      takeUntilDestroyed(),
    ).subscribe(title => this.title.setTitle(title));
  }

  toggleLanguage(): void {
    this.language.setLanguage(this.language.currentLang === 'it' ? 'en' : 'it');
  }

  reset(): void {
    if (confirm(this.transloco.translate('app.resetConfirm'))) {
      this.store.reset();
      if (!this.store.blocked()) void this.router.navigate(['/']);
    }
  }

  private titleKey(): string {
    const url = this.router.url.split('?')[0];
    if (url === '/domande' || /^\/test\/[^/]+$/.test(url)) return 'titles.questions';
    if (url === '/test' || /^\/test\/[^/]+\/svolgi$/.test(url)) return 'titles.quiz';
    if (url === '/page-not-found') return 'titles.notFound';
    return 'titles.dashboard';
  }
}
