import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { BasePageComponent } from '../../shared/components/base-page/base-page.component';
import { AuthService } from '../../core/auth.service';
import { NavbarService } from '../../core/navbar.service';
import { DialogService } from '../../core/dialog.service';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'v2d-forgot-password',
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
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.scss',
})
export class ForgotPasswordComponent {
  protected email: string = '';

  constructor(
    protected readonly navbarService: NavbarService,
    protected readonly authService: AuthService,
    protected readonly dialogService: DialogService
  ) {}

  protected resetPassword() {
    if (!this.email) {
      this.dialogService.showDialog('🫣 Errore', 'Inserisci prima la tua email.', [
        {
          label: 'Chiudi',
          icon: 'pi pi-times',
          severity: 'primary',
          action: () => {
            this.dialogService.hideDialog();
          },
        },
      ]);
      return;
    }

    this.authService
      .resetPassword(this.email)
      .then(() => {
        this.dialogService.showDialog(
          '✉️ Ci sei quasi!',
          'Ti abbiamo inviato un link per reimpostare la password. Controlla la tua casella di posta elettronica.',
          [
            {
              label: 'Torna alla pagina di accesso',
              icon: 'pi pi-times',
              severity: 'primary',
              action: () => {
                this.navbarService.navigateToSignInPage();
                this.dialogService.hideDialog();
              },
            },
          ]
        );
      })
      .catch((error) => {
        this.dialogService.showDialog(
          '😣 Errore',
          'Si è verificato un errore durante il tentativo di reimpostare la password.',
          [
            {
              label: 'Chiudi',
              icon: 'pi pi-times',
              severity: 'primary',
              action: () => {
                this.dialogService.hideDialog();
              },
            },
          ]
        );
      });
  }
}
