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
  constructor(
    protected readonly authService: AuthService,
    protected readonly ctasService: CtasService
  ) {}
  public ngOnInit(): void {
    this.ctasService.showCtas([
      {
        label: 'Esci da Vividi',
        icon: 'pi pi-home',
        severity: 'danger',
        disabled: false,
        action: () => this.authService.signOut(),
      },
    ]);
  }
}
