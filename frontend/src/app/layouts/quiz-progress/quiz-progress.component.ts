import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth.service';
import { CtasService } from 'src/app/core/ctas.service';
import { QuizQuestionComponent } from 'src/app/features/quiz-question/quiz-question.component';
import { BasePageComponent } from "src/app/shared/components/base-page/base-page.component";
import { CtasComponent } from 'src/app/shared/components/ctas/ctas.component';
import { PageTitleComponent } from 'src/app/shared/components/page-title/page-title.component';

@Component({
  selector: 'v2d-quiz-progress',
  imports: [BasePageComponent, PageTitleComponent, CtasComponent, QuizQuestionComponent],
  templateUrl: './quiz-progress.component.html',
  styleUrl: './quiz-progress.component.scss'
})
export class QuizProgressComponent {
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
        action: () => this.router.navigate(['/quiz-end']),
      }
    ]);
  }
}
