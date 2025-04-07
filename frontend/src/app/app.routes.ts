import { Routes } from '@angular/router';
import { HomeComponent } from './layouts/home/home.component';
import { UnavailableComponent } from './layouts/unavailable/unavailable.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: '**', component: UnavailableComponent
  }
];
