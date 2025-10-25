import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { AuthService } from '../../core/auth.service';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { CtasComponent } from '../../shared/components/ctas/ctas.component';
import { CtasService } from '../../core/ctas.service';

@Component({
  selector: 'v2d-user-page',
  standalone: true,
  imports: [SharedModule, ButtonModule, CommonModule, CtasComponent],
  templateUrl: './user-page.component.html',
  styleUrl: './user-page.component.scss',
})
export class UserPageComponent implements OnInit {
  protected greeting: 'Buon giorno' | 'Buon pomeriggio' | 'Buona sera';
  constructor(
    protected readonly authService: AuthService,
    protected readonly ctasService: CtasService
  ) {
    const currentHour = new Date().getHours();
    if (currentHour < 12) {
      this.greeting = 'Buon giorno';
    } else if (currentHour < 18) {
      this.greeting = 'Buon pomeriggio';
    } else {
      this.greeting = 'Buona sera';
    }
  }

  public ngOnInit(): void {
    this.ctasService.showCtas([
      {
        label: 'Esci',
        icon: 'pi pi-sign-out',
        severity: 'danger',
        disabled: false,
        action: () => this.authService.signOut(),
      },
    ]);
  }
}
