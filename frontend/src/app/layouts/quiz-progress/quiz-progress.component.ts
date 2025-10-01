import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth.service';
import { CtasService } from 'src/app/core/ctas.service';
import { FeaturesModule } from 'src/app/features/features.module';
import { BasePageComponent } from "src/app/shared/components/base-page/base-page.component";
import { CtasComponent } from 'src/app/shared/components/ctas/ctas.component';
import { PageTitleComponent } from 'src/app/shared/components/page-title/page-title.component';

@Component({
  selector: 'v2d-quiz-progress',
  imports: [BasePageComponent, PageTitleComponent, CtasComponent, FeaturesModule],
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
        label: 'Avanti',
        icon: 'pi pi-arrow-right',
        severity: 'primary',
        disabled: false,
        iconPos: 'right',
        action: () => this.router.navigate(['/quiz-end']),
      },
      {
        label: 'Indietro',
        icon: 'pi pi-arrow-left',
        severity: 'secondary',
        disabled: false,
        iconPos: 'left',
        action: () => this.router.navigate(['/quiz-end']),
      }
    ]);
  }
}
