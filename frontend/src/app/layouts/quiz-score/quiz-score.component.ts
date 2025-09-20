import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth.service';
import { CtasService } from 'src/app/core/ctas.service';
import { BasePageComponent } from 'src/app/shared/components/base-page/base-page.component';
import { CtasComponent } from 'src/app/shared/components/ctas/ctas.component';
import { PageTitleComponent } from 'src/app/shared/components/page-title/page-title.component';

@Component({
  selector: 'v2d-quiz-score',
  imports: [BasePageComponent, PageTitleComponent, CtasComponent],
  templateUrl: './quiz-score.component.html',
  styleUrl: './quiz-score.component.scss',
})
export class QuizScoreComponent {
  constructor(
    protected readonly authService: AuthService,
    protected readonly ctasService: CtasService,
    protected readonly router: Router
  ) {
    this.ctasService.showCtas([
      {
        label: 'Torna alla pagina utente',
        icon: 'pi pi-arrow-left',
        severity: 'primary',
        disabled: false,
        action: () => this.router.navigate(['/me']),
      },
    ]);
  }
}
