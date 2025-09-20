import { Component } from '@angular/core';
import { AuthService } from 'src/app/core/auth.service';
import { BasePageComponent } from 'src/app/shared/components/base-page/base-page.component';
import { PageTitleComponent } from 'src/app/shared/components/page-title/page-title.component';
import { CtasComponent } from 'src/app/shared/components/ctas/ctas.component';
import { Router } from '@angular/router';
import { CtasService } from 'src/app/core/ctas.service';

@Component({
  selector: 'v2d-quiz-welcome',
  imports: [BasePageComponent, PageTitleComponent, CtasComponent],
  templateUrl: './quiz-welcome.component.html',
  styleUrl: './quiz-welcome.component.scss',
})
export class QuizWelcomeComponent {
  constructor(
    protected readonly authService: AuthService,
    protected readonly ctasService: CtasService,
    protected readonly router: Router
  ) {
    this.ctasService.showCtas([
      {
        label: 'Inizia!',
        icon: 'pi pi-play',
        severity: 'primary',
        disabled: false,
        action: () => this.router.navigate(['/quiz-progress']),
      }
    ]);
  }
}
