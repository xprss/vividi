import { Component } from '@angular/core';
import { BasePageComponent } from '../../shared/components/base-page/base-page.component';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { FormsModule } from '@angular/forms';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { NavbarService } from '../../core/navbar.service';
import { AuthService } from '../../core/auth.service';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'v2d-sign-on',
  imports: [
    SharedModule,
    ButtonModule,
    InputTextModule,
    FloatLabelModule,
    FormsModule,
    CommonModule,
    DividerModule,
    BasePageComponent,
  ],
  templateUrl: './sign-on.component.html',
  styleUrl: './sign-on.component.scss',
})
export class SignOnComponent {
  protected firstName: string = '';
  protected lastName: string = '';
  protected email: string = '';
  protected password: string = '';

  constructor(
    protected readonly navbarService: NavbarService,
    protected readonly authService: AuthService
  ) {}
}
