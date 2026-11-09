import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { QuizStore } from './quiz-store';

export const testRoute: CanActivateFn = route => {
  const store = inject(QuizStore);
  const router = inject(Router);
  const id = route.paramMap.get('id');
  if (!id || !store.collections().some(test => test.id === id)) {
    return router.createUrlTree(['/page-not-found']);
  }
  return store.active()?.id === id || store.select(id);
};

export const legacyTestRoute: CanActivateFn = route => {
  const store = inject(QuizStore);
  const router = inject(Router);
  const id = store.active()?.id;
  return router.createUrlTree(id
    ? (route.routeConfig?.path === 'test' ? ['/test', id, 'svolgi'] : ['/test', id])
    : ['/']);
};
