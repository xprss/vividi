import { Component } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { AuthService } from '../../core/auth.service';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'v2d-user-page',
  standalone: true,
  imports: [SharedModule, ButtonModule],
  templateUrl: './user-page.component.html',
  styleUrl: './user-page.component.scss',
})
export class UserPageComponent {
  constructor(protected readonly authService: AuthService) {}
}
