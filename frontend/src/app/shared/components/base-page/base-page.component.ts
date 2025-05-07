import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { NavbarService } from '../../../core/navbar.service';
import { ButtonModule } from 'primeng/button';
import { HeaderService } from '../../../core/header.service';
import { DrawerModule } from 'primeng/drawer';
import { DrawerService } from '../../../core/drawer.service';
import { AuthService } from '../../../core/auth.service';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'v2d-base-page',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    NavbarComponent,
    ButtonModule,
    DrawerModule,
    DialogComponent,
  ],
  templateUrl: './base-page.component.html',
  styleUrl: './base-page.component.scss',
})
export class BasePageComponent {
  constructor(
    protected readonly headerService: HeaderService,
    protected readonly navbarService: NavbarService,
    protected readonly drawerService: DrawerService,
    protected readonly authService: AuthService
  ) {}
}
