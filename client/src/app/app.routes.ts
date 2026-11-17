import { Routes } from '@angular/router';
import { legacyTestRoute, testRoute } from './services/test-route';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./pages/dashboard/dashboard').then(m => m.Dashboard),
    },
    {
        path: 'domande',
        canActivate: [legacyTestRoute],
        loadComponent: () => import('./pages/home/home').then(m => m.Home),
    },
    {
        path: 'test',
        canActivate: [legacyTestRoute],
        loadComponent: () => import('./pages/quiz/quiz').then(m => m.Quiz),
    },
    {
        path: 'test/:id',
        canActivate: [testRoute],
        loadComponent: () => import('./pages/home/home').then(m => m.Home),
    },
    {
        path: 'test/:id/svolgi',
        canActivate: [testRoute],
        loadComponent: () => import('./pages/quiz/quiz').then(m => m.Quiz),
    },
    {
        path: 'page-not-found',
        loadComponent: () => import('./pages/errors/page-not-found/page-not-found').then(m => m.PageNotFound),
    },
    {
        path: '**',
        redirectTo: 'page-not-found',
        pathMatch: 'full'
    }
];
