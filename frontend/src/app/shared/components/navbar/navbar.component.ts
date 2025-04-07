import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'v2d-navbar',
  standalone: true,
  imports: [AvatarModule, ButtonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  constructor(private readonly router: Router) {}

  public navigateToHomePage(): void {
    this.router.navigate(['/home']);
  }

  public navigateToNewVibePage(): void {
    this.router.navigate(['/newVibe']);
  }

  public navigateToMyPersonalPage(): void {
    this.router.navigate(['/me']);
  }
}
