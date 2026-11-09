import { inject, Injectable } from '@angular/core';
import { getBrowserLang, Translation, TranslocoService } from '@jsverse/transloco';
import { PrimeNG } from 'primeng/config';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private translocoService = inject(TranslocoService);
  private primeng = inject(PrimeNG);

  private readonly availableLangs = ['it', 'en'];
  private readonly fallbackLang = 'it';

  constructor() {
    this.init();
  }

  private init() {
    const lang = this.determineLanguage();
    this.setLanguage(lang);
  }

  private determineLanguage(): string {
    // 1. Priorità al localStorage
    const savedLang = localStorage.getItem('user-lang');
    if (savedLang && this.availableLangs.includes(savedLang)) {
      return savedLang;
    }

    // 2. Browser Lang
    const browserLang = getBrowserLang() || '';
    if (this.availableLangs.includes(browserLang)) {
      return browserLang;
    }

    // 3. Fallback
    return this.fallbackLang;
  }

  setLanguage(lang: string) {
    if (!this.availableLangs.includes(lang)) return;

    // Persistenza e stato Transloco
    localStorage.setItem('user-lang', lang);
    this.translocoService.setActiveLang(lang);

    // Aggiornamento DOM e PrimeNG
    document.documentElement.lang = lang;
    this.syncPrimeNG(lang);
  }

  private syncPrimeNG(lang: string) {
    this.translocoService.selectTranslation(lang).subscribe(labels => {
      if (labels['primeng']) {
        this.primeng.setTranslation(labels['primeng']);
      }
    });
  }

  get currentLang() {
    return this.translocoService.getActiveLang();
  }
}