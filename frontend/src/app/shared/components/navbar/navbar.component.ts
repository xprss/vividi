import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
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
export class NavbarComponent implements OnInit {
  constructor(
    private readonly router: Router,
    protected readonly navbarService: NavbarService
  ) {}

  public get currentRoute(): string {
    return this.navbarService.currentRoute;
  }

  public ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.navbarService.updateCurrentRoute(event.url);
      }
    });
  }

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
