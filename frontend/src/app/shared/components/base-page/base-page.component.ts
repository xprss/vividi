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
import { AuthPageComponent } from '../../../layouts/auth-page/auth-page.component';
import { DialogComponent } from '../dialog/dialog.component';
import { DialogService } from '../../../core/dialog.service';

@Component({
  selector: 'v2d-base-page',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    NavbarComponent,
    ButtonModule,
    DrawerModule,
    AuthPageComponent,
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

  /* test() {
    const buttons: DialogButton[] = [
      {
        label: 'Crea una nuova Vibe',
        icon: 'pi pi-check',
        severity: 'secondary',
        action: () => {
          this.navbarService.navigateToNewVibePage();
          this.dialogService.isDialogOpen = false;
        },
      },
      {
        label: 'Torna alla sezione Esplora',
        icon: 'pi pi-times',
        severity: 'primary',
        action: () => {
          this.navbarService.navigateToHomePage();
          this.dialogService.isDialogOpen = false;
        },
      },
    ];
    this.dialogService.showDialog(
      'Caricamento completato! 🥳',
      'Caricamento completato con successo.',
      buttons
    );
  } */
}
