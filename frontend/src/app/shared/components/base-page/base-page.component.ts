import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { NavbarService } from '../../../core/navbar.service';
import { ButtonModule } from 'primeng/button';
import { HeaderService } from '../../../core/header.service';

@Component({
  selector: 'v2d-base-page',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    NavbarComponent,
    ButtonModule,
  ],
  templateUrl: './base-page.component.html',
  styleUrl: './base-page.component.scss',
})
export class BasePageComponent {
  constructor(
    protected readonly headerService: HeaderService,
    protected readonly navbarService: NavbarService
  ) {}
}
