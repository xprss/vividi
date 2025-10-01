import { Routes } from '@angular/router';
import { HomeComponent } from './layouts/home/home.component';
import { NewVibeComponent } from './layouts/new-vibe/new-vibe.component';
import { UserPageComponent } from './layouts/user-page/user-page.component';
import { SignOnComponent } from './layouts/sign-on/sign-on.component';
import { AuthGuard } from './guards/auth.guard';
import { AuthPageComponent } from './layouts/auth-page/auth-page.component';
import { NoAuthGuard } from './guards/no-auth.guard';
import { ForgotPasswordComponent } from './layouts/forgot-password/forgot-password.component';
import { SingleVibePageComponent } from './layouts/single-vibe-page/single-vibe-page.component';
import { WipComponent } from './layouts/wip/wip.component';
import { LoginComponent } from './layouts/login/login.component';
import { QuizWelcomeComponent } from './layouts/quiz-welcome/quiz-welcome.component';
import { QuizProgressComponent } from './layouts/quiz-progress/quiz-progress.component';
import { QuizEndComponent } from './layouts/quiz-end/quiz-end.component';
import { QuizScoreComponent } from './layouts/quiz-score/quiz-score.component';

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
    path: 'login/:email/password/:password',
    component: LoginComponent,
    canActivate: [NoAuthGuard],
  },
  {
    path: 'quiz-welcome',
    component: QuizWelcomeComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'quiz-progress',
    component: QuizProgressComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'quiz-end',
    component: QuizEndComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'quiz-score',
    component: QuizScoreComponent,
    canActivate: [AuthGuard],
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'wip',
    component: WipComponent,
    canActivate: [AuthGuard],
  }
];
