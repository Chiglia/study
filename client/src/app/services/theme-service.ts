import { Injectable, signal } from '@angular/core';

export type AppTheme = 'light' | 'dark';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  readonly theme = signal<AppTheme>(this.determineTheme());

  constructor() {
    this.applyTheme(this.theme());
  }

  toggleTheme(): void {
    const nextTheme: AppTheme = this.theme() === 'light' ? 'dark' : 'light';
    this.theme.set(nextTheme);
    this.applyTheme(nextTheme);

    try {
      localStorage.setItem('user-theme', nextTheme);
    } catch (error) {
      console.error('QuizFlow: salvataggio preferenza tema non riuscito', error);
    }
  }

  private determineTheme(): AppTheme {
    try {
      const savedTheme = localStorage.getItem('user-theme');
      if (savedTheme === 'light' || savedTheme === 'dark') return savedTheme;
    } catch (error) {
      console.error('QuizFlow: lettura preferenza tema non riuscita', error);
    }

    return matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  private applyTheme(theme: AppTheme): void {
    const isDark = theme === 'dark';
    document.documentElement.classList.toggle('my-app-dark', isDark);
    document.documentElement.style.colorScheme = isDark ? 'dark' : 'light';
  }
}
