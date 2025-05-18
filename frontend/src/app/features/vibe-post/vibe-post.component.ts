import { DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { ChipModule } from 'primeng/chip';
import { AuthService } from '../../core/auth.service';
import { ServerService } from '../../core/server.service';
import { DialogService } from 'src/app/core/dialog.service';
import { MoreComponent } from 'src/app/shared/components/more/more.component';
import { MenuItem } from 'primeng/api';
import { EventsService } from 'src/app/core/events.service';
import { VisibilityTriggerComponent } from 'src/app/shared/components/visibility-trigger/visibility-trigger.component';

@Component({
  selector: 'v2d-vibe-post',
  standalone: true,
  imports: [
    AvatarModule,
    ChipModule,
    DatePipe,
    ButtonModule,
    MoreComponent,
    VisibilityTriggerComponent,
  ],
  templateUrl: './vibe-post.component.html',
  styleUrl: './vibe-post.component.scss',
})
export class VibePostComponent implements OnInit {
  @Input() public vibeData: any = {};
  @Input() public menuEntries: MenuItem[] | undefined;
  public isDescriptionFullyVisible: boolean = false;
  protected isLoading: boolean = true;

  constructor(
    protected readonly authService: AuthService,
    protected readonly serverService: ServerService,
    protected readonly dialogService: DialogService,
    protected readonly eventsService: EventsService
  ) {}

  public ngOnInit(): void {
    this.menuEntries = [];
    this.menuEntries.push({
      icon: 'pi pi-trash',
      disabled: false,
      label: 'Elimina',
      command: () => {
        this.delete();
      },
    });
  }

  public readonly toggleDescriptionVisibility = () => {
    this.isDescriptionFullyVisible = !this.isDescriptionFullyVisible;
  };

  public delete() {
    this.dialogService.showLoadingDialog('Eliminazione in corso...');

    this.serverService.deleteVibe(this.vibeData._id).subscribe({
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
                this.eventsService.refreshEsplora();
              },
            },
          ]
        );
      },
    });
  }
}
