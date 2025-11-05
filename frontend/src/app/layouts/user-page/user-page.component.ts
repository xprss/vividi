import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { AuthService } from '../../core/auth.service';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { CtasComponent } from '../../shared/components/ctas/ctas.component';
import { CtasService } from '../../core/ctas.service';
import { environment } from 'src/environments/environment';
import { UserControllerCatFoundRequest, UserService } from '@shared';
import { DialogService } from 'src/app/core/dialog.service';
import { Badge } from 'src/lib/badge.enum';
import { VibeManagementService } from 'src/app/core/vibe.service';

@Component({
  selector: 'v2d-user-page',
  standalone: true,
  imports: [SharedModule, ButtonModule, CommonModule, CtasComponent],
  templateUrl: './user-page.component.html',
  styleUrl: './user-page.component.scss',
})
export class UserPageComponent implements OnInit {
  protected greeting: 'Buon giorno' | 'Buon pomeriggio' | 'Buona sera';
  protected greetingEmoji: '👋' | '☀️' | '🌙';
  protected version: string = environment.version;
  protected readonly currentYear: number = new Date().getFullYear();

  constructor(
    protected readonly authService: AuthService,
    protected readonly ctasService: CtasService,
    protected readonly userService: UserService,
    protected readonly dialogService: DialogService,
    private readonly vibeManagemnetService: VibeManagementService
  ) {
    const currentHour = new Date().getHours();
    if (currentHour < 12) {
      this.greeting = 'Buon giorno';
      this.greetingEmoji = '👋';
    } else if (currentHour < 18) {
      this.greeting = 'Buon pomeriggio';
      this.greetingEmoji = '☀️';
    } else {
      this.greeting = 'Buona sera';
      this.greetingEmoji = '🌙';
    }
  }

  public ngOnInit(): void {
    this.ctasService.showCtas([
      {
        label: 'Esci',
        icon: 'pi pi-sign-out',
        severity: 'danger',
        disabled: false,
        action: () => this.authService.signOut(),
      },
    ]);
  }

  private headTapCounter: number = 0;
  private headTapTimer: any = null;

  public handleHeaderClick(): void {
    if (this.authService.getUser()?.badges.includes(Badge.CAT_FINDER)) {
      return;
    }
    if (this.headTapCounter < 5) {
      this.headTapCounter++;
      if (this.headTapTimer) {
        clearTimeout(this.headTapTimer);
      }
      this.headTapTimer = setTimeout(() => {
        this.headTapCounter = 0;
      }, 500);
    } else {
      this.handleEasterEggResolution();
      this.headTapCounter = 0;
    }
  }

  private handleEasterEggResolution(): void {
    const params: UserControllerCatFoundRequest = {
      id: this.authService.getUser()?.id!,
    };
    this.userService.userControllerCatFound(params).subscribe({
      next: () => {
        this.dialogService.showDialog(
          'Complimenti!',
          'Hai trovato il gatto nascosto! Ti è stato assegnato il badge "Cercatore di Gattini" 🐈',
          [
            {
              label: 'Che bello!',
              icon: 'pi pi-check',
              severity: 'success',
              action: () => {
                this.authService.updateCurrentUser().then(() => {
                  this.vibeManagemnetService.fetchVibes(true);
                  this.dialogService.hideDialog();
                });
              },
            },
          ]
        );
      },
      error: () => {
        this.dialogService.showDialog('Errore', "C'è stato un errore.", [
          {
            label: 'Chiudi',
            icon: 'pi pi-check',
            severity: 'secondary',
            action: () => {
              this.dialogService.hideDialog();
            },
          },
        ]);
      },
    });
  }

  public onNavigateToGitHub(): void {
    window.open('https://www.github.com/xprss', '_blank');
  }

  public onNavigateToInstagramBride(): void {
    window.open('https://www.instagram.com/sibilla.sagristano', '_blank');
  }

  public onNavigateToInstagramGroom(): void {
    window.open('https://www.instagram.com/lorenzosarasino', '_blank');
  }
}
