import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', loadComponent: () => import('./page/home-page/home-page.component').then(m => m.HomePageComponent), title: 'Brandon de Bruyn - Resume' },
];
