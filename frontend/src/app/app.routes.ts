import { Routes } from '@angular/router';
import { HomeComponent } from './layouts/home/home.component';
import { UnavailableComponent } from './layouts/unavailable/unavailable.component';
import { NewVibeComponent } from './layouts/new-vibe/new-vibe.component';
import { UserPageComponent } from './layouts/user-page/user-page.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'newVibe',
    component: NewVibeComponent,
  },
  {
    path: 'me',
    component: UserPageComponent,
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: '**', component: UnavailableComponent
  }
];
