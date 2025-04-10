import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { NavbarService } from '../../../core/navbar.service';

@Component({
  selector: 'v2d-navbar',
  standalone: true,
  imports: [AvatarModule, ButtonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  constructor(
    private readonly router: Router,
    private readonly navbarService: NavbarService
  ) {}

  public navigateToHomePage(): void {
    this.navbarService.navigateToHomePage();
  }

  public navigateToNewVibePage(): void {
    this.navbarService.navigateToNewVibePage();
  }

  public navigateToMyPersonalPage(): void {
    this.navbarService.navigateToMyPersonalPage();
  }
}
