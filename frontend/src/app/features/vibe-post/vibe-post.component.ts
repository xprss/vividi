import { DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { ChipModule } from 'primeng/chip';
import { AuthService } from '../../core/auth.service';
import { ServerService } from '../../core/server.service';
import { Skeleton } from 'primeng/skeleton';
import { DialogService } from 'src/app/core/dialog.service';
import { MoreComponent } from 'src/app/shared/components/more/more.component';
import { MenuItem } from 'primeng/api';
import { EventsService } from 'src/app/core/events.service';
import { VisibilityTriggerComponent } from 'src/app/shared/components/visibility-trigger/visibility-trigger.component';
import { Clipboard } from '@angular/cdk/clipboard';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { NavbarService } from 'src/app/core/navbar.service';
import { resolveMomentLabel } from 'src/lib/util';
import { environment } from 'src/environments/environment';

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
    Skeleton,
    ClipboardModule,
  ],
  templateUrl: './vibe-post.component.html',
  styleUrl: './vibe-post.component.scss',
})
export class VibePostComponent implements OnInit {
  @Input() public vibeData: any = {};
  public menuEntries: MenuItem[] | undefined;
  public isDescriptionFullyVisible: boolean = false;
  protected isLoading: boolean = true;
  protected readonly environment = environment;

  constructor(
    protected readonly authService: AuthService,
    protected readonly serverService: ServerService,
    protected readonly dialogService: DialogService,
    protected readonly eventsService: EventsService,
    protected readonly navbarService: NavbarService,
    private readonly clipboard: Clipboard
  ) {}

  public ngOnInit(): void {
    this.menuEntries = [];
    this.menuEntries.push({
      icon: 'pi pi-eye',
      disabled: false,
      label: 'Apri dettaglio',
      command: () => {
        this.navbarService.navigateToVibe(this.vibeData._id);
      },
    });
    this.menuEntries.push({
      icon: 'pi pi-share-alt',
      disabled: false,
      label: 'Condividi',
      command: () => {
        this.copyToClipboard();
      },
    });
    if (this.vibeData?.userId === this.authService.getUser()?.uid) {
      this.menuEntries.push({
        icon: 'pi pi-trash',
        disabled: false,
        label: 'Elimina',
        command: () => {
          this.delete();
        },
      });
    }
  }

  public copyToClipboard() {
    this.clipboard.copy(this.generateUrl(this.vibeData._id));
  }

  public readonly toggleDescriptionVisibility = () => {
    this.isDescriptionFullyVisible = !this.isDescriptionFullyVisible;
  };

  public readonly onImageLoad = () => {
    this.isLoading = false;
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

  public generateUrl(_id: any): string {
    return environment + '/vibe/' + _id;
  }

  public getLabel(momentLabel: string): string | undefined {
    return resolveMomentLabel(momentLabel);
  }
}
