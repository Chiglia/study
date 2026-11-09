import { Routes } from '@angular/router';
import { legacyTestRoute, testRoute } from './services/test-route';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./pages/dashboard/dashboard').then(m => m.Dashboard),
        title: 'Dashboard | QuizFlow'
    },
    {
        path: 'domande',
        canActivate: [legacyTestRoute],
        loadComponent: () => import('./pages/home/home').then(m => m.Home),
        title: 'Le mie domande | QuizFlow'
    },
    {
        path: 'test',
        canActivate: [legacyTestRoute],
        loadComponent: () => import('./pages/quiz/quiz').then(m => m.Quiz),
        title: 'Il mio test | QuizFlow'
    },
    {
        path: 'test/:id',
        canActivate: [testRoute],
        loadComponent: () => import('./pages/home/home').then(m => m.Home),
        title: 'Modifica test | QuizFlow'
    },
    {
        path: 'test/:id/svolgi',
        canActivate: [testRoute],
        loadComponent: () => import('./pages/quiz/quiz').then(m => m.Quiz),
        title: 'Svolgi test | QuizFlow'
    },
    {
        path: 'page-not-found',
        loadComponent: () => import('./pages/errors/page-not-found/page-not-found').then(m => m.PageNotFound),
        title: '404 - Page Not Found'
    },
    {
        path: '**',
        redirectTo: 'page-not-found',
        pathMatch: 'full'
    }
];
