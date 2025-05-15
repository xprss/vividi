import { DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { ChipModule } from 'primeng/chip';
import { AuthService } from '../../core/auth.service';
import { ServerService } from '../../core/server.service';
import { DialogService } from 'src/app/core/dialog.service';

@Component({
  selector: 'v2d-vibe-post',
  standalone: true,
  imports: [AvatarModule, ChipModule, DatePipe, ButtonModule],
  templateUrl: './vibe-post.component.html',
  styleUrl: './vibe-post.component.scss',
})
export class VibePostComponent {
  @Input() public vibeData: any = {};

  constructor(
    protected readonly authService: AuthService,
    protected readonly serverService: ServerService,
    protected readonly dialogService: DialogService
  ) {}

  public delete(vibeId: any) {
    this.dialogService.showLoadingDialog('Eliminazione in corso...');

    this.serverService.deleteVibe(vibeId).subscribe({
      next: (response) => {
        console.log('Vibe deleted successfully:', response);
        this.dialogService.showDialog(
          'Eliminazione avvenuta con successo',
          'La tua Vibe è stata eliminata con successo',
          [
            {
              label: 'Chiudi',
              icon: 'pi pi-close',
              severity: 'primary',
              action: () => {
                this.dialogService.hideDialog();
              },
            },
          ]
        );
      },
    });
  }
}
