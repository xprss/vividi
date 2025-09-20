import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth.service';
import { CtasService } from 'src/app/core/ctas.service';
import { BasePageComponent } from 'src/app/shared/components/base-page/base-page.component';
import { CtasComponent } from 'src/app/shared/components/ctas/ctas.component';
import { PageTitleComponent } from 'src/app/shared/components/page-title/page-title.component';

@Component({
  selector: 'v2d-quiz-end',
  imports: [BasePageComponent, PageTitleComponent, CtasComponent],
  templateUrl: './quiz-end.component.html',
  styleUrl: './quiz-end.component.scss',
})
export class QuizEndComponent {
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
        action: () => this.router.navigate(['/me']),
      }
    ]);
  }
}
