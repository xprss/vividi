import { Routes } from '@angular/router';
import { HomeComponent } from './layouts/home/home.component';
import { UnavailableComponent } from './layouts/unavailable/unavailable.component';
import { NewVibeComponent } from './layouts/new-vibe/new-vibe.component';
import { UserPageComponent } from './layouts/user-page/user-page.component';
import { SignOnComponent } from './layouts/sign-on/sign-on.component';
import { AuthGuard } from './guards/auth.guard';
import { AuthPageComponent } from './layouts/auth-page/auth-page.component';
import { NoAuthGuard } from './guards/no-auth.guard';
import { ForgotPasswordComponent } from './layouts/forgot-password/forgot-password.component';
import { SingleVibePageComponent } from './layouts/single-vibe-page/single-vibe-page.component';
import { WipComponent } from './layouts/wip/wip.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'newVibe',
    component: NewVibeComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'me',
    component: UserPageComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'vibe/:vibeId',
    component: SingleVibePageComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'signin',
    component: AuthPageComponent,
    canActivate: [NoAuthGuard],
  },
  {
    path: 'signon',
    component: SignOnComponent,
    canActivate: [NoAuthGuard],
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent,
    canActivate: [NoAuthGuard],
  },
  { 
    path: '', 
    redirectTo: '/home', 
    pathMatch: 'full' 
  }
];
