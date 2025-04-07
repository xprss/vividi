import { Component } from '@angular/core';
import { BasePageComponent } from '../../shared/components/base-page/base-page.component';
import { Button } from 'primeng/button';
import { Router } from '@angular/router';

@Component({
  selector: 'v2d-unavailable',
  standalone: true,
  imports: [BasePageComponent, Button],
  templateUrl: './unavailable.component.html',
  styleUrl: './unavailable.component.scss',
})
export class UnavailableComponent {
  constructor(private readonly router: Router) {}

  protected navigateToHomePage() {
    this.router.navigate(['/home']);
  }
}
