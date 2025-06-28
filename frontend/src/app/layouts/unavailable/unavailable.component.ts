import { Component } from '@angular/core';
import { Button } from 'primeng/button';
import { Router } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'v2d-unavailable',
  standalone: true,
  imports: [SharedModule, Button],
  templateUrl: './unavailable.component.html',
  styleUrl: './unavailable.component.scss',
})
export class UnavailableComponent {
  constructor(private readonly router: Router) {}

  protected navigateToHomePage() {
    this.router.navigate(['/home']);
  }
}
