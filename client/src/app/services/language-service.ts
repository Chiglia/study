import { inject, Injectable } from '@angular/core';
import { getBrowserLang, TranslocoService } from '@jsverse/transloco';
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
    this.applyLanguage(this.determineLanguage());
  }

  private determineLanguage(): string {
    try {
      const savedLang = localStorage.getItem('user-lang');
      if (savedLang && this.availableLangs.includes(savedLang)) return savedLang;
    } catch (error) {
      console.error('QuizFlow: lettura preferenza lingua non riuscita', error);
    }

    const deviceLang = getBrowserLang()?.toLowerCase().split('-')[0] ?? '';
    return this.availableLangs.includes(deviceLang) ? deviceLang : this.fallbackLang;
  }

  setLanguage(lang: string): void {
    if (!this.availableLangs.includes(lang)) return;

    this.applyLanguage(lang);
    try {
      localStorage.setItem('user-lang', lang);
    } catch (error) {
      console.error('QuizFlow: salvataggio preferenza lingua non riuscito', error);
    }
  }

  private applyLanguage(lang: string): void {
    this.translocoService.setActiveLang(lang);
    document.documentElement.lang = lang;
    this.syncPrimeNG(lang);
  }

  private syncPrimeNG(lang: string): void {
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