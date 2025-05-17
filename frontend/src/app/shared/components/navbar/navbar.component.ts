import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { NavbarService } from '../../../core/navbar.service';
import { EventsService } from '../../events.service';

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
    protected readonly navbarService: NavbarService,
    protected readonly eventsService: EventsService
  ) {}

  public get currentRoute(): string {
    return this.navbarService.currentRoute;
  }

  public navigateToHomePage(): void {
    this.navbarService.navigateToHomePage();
    this.eventsService.refreshEsplora();
  }

  public navigateToNewVibePage(): void {
    this.navbarService.navigateToNewVibePage();
  }

  public navigateToMyPersonalPage(): void {
    this.navbarService.navigateToMyPersonalPage();
  }
}
