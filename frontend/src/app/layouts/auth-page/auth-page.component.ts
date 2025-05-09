import { Component } from '@angular/core';
import { PageTitleComponent } from '../../shared/components/page-title/page-title.component';
import { ButtonModule } from 'primeng/button';
import { AuthService } from '../../core/auth.service';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DividerModule } from 'primeng/divider';
import { BasePageComponent } from '../../shared/components/base-page/base-page.component';
import { NavbarService } from '../../core/navbar.service';

@Component({
  selector: 'v2d-auth-page',
  imports: [
    PageTitleComponent,
    ButtonModule,
    InputTextModule,
    FloatLabelModule,
    FormsModule,
    CommonModule,
    DividerModule,
    BasePageComponent,
  ],
  templateUrl: './auth-page.component.html',
  styleUrl: './auth-page.component.scss',
})
export class AuthPageComponent {
  protected email: string = '';
  protected password: string = '';
  constructor(
    protected readonly authService: AuthService,
    protected readonly navbarService: NavbarService
  ) {}
}
