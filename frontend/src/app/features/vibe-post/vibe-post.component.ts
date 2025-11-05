import { DatePipe } from '@angular/common';
import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
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
import { Badge, BadgeEmojis, BadgeLabels } from 'src/lib/badge.enum';
import confetti from 'canvas-confetti';
import { ProgressSpinner } from 'primeng/progressspinner';

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
    ProgressSpinner
  ],
  templateUrl: './vibe-post.component.html',
  styleUrl: './vibe-post.component.scss',
})
export class VibePostComponent implements OnInit, OnChanges {
  @Input() public vibeData: any = {};
  public menuEntries: MenuItem[] | undefined;
  public isDescriptionFullyVisible: boolean = false;
  protected isLoading: boolean = true;
  protected readonly environment = environment;
  protected isLiked = false;
  protected isLikedByCurrentUser: boolean = false;
  protected showFullMomentLabel: boolean = false;
  protected badges: Badge[] = [Badge.GUEST];
  protected readonly badgeEmojis: Record<Badge, string> = BadgeEmojis;
  protected readonly badgeLabels: Record<Badge, string> = BadgeLabels;
  protected likeTapTimer: any | undefined;
  protected likeTapCounter: number = 0;

  constructor(
    protected readonly authService: AuthService,
    protected readonly serverService: ServerService,
    protected readonly dialogService: DialogService,
    protected readonly eventsService: EventsService,
    protected readonly navbarService: NavbarService,
    private readonly clipboard: Clipboard
  ) {}

  public ngOnInit(): void {
    this.updateBadge();
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
    if (this.vibeData?.userId === this.authService.getUser()?.id || this.authService.isUserAdmin()) {
      this.menuEntries.push({
        icon: 'pi pi-trash',
        disabled: false,
        label: 'Elimina',
        command: () => {
          this.delete();
        },
      });
    }

    for (const like of this.vibeData?.likes || []) {
      if (like.userId === this.authService.getUser()?.id) {
        this.isLiked = like.isLiked;
        this.isLikedByCurrentUser = like.isLiked;
        break;
      }
    }
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes['vibeData'] && this.vibeData) {
      this.updateBadge();
    }
  }

  private updateBadge(): void {
    this.badges = this.vibeData?.badges ?? [Badge.GUEST];
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
    return environment.baseUrl + '/vibe/' + _id;
  }

  public getLabel(momentLabel: string): string | undefined {
    return resolveMomentLabel(momentLabel, 'emoji');
  }

  public handleLikeClick(): void {
    if (this.isLiked) {
      return;
    }
    if (this.likeTapCounter === 0) {
      this.likeTapCounter++;
      this.likeTapTimer = setTimeout(() => {
        this.likeTapCounter = 0;
      }, 500);
    } else {
      this.setLikedState();
      this.likeTapCounter = 0;
    }
  }

  public setLikedState(): void {
    this.isLiked = !this.isLiked;
    if (this.isLiked) {
      const confettiParams = {
        spread: 50,
        ticks: 200,
        gravity: 1.5,
        decay: 0.96,
        startVelocity: 25,
        particleCount: 200,
        origin: { y: 1 },
        colors: ['#181730', '#5cc9ca', '#eeeeee'],
        disableForReducedMotion: true,
        scalar: 4,
        shapes: [
          confetti.shapeFromText({ text: '❤️', scalar: 4 }),
          confetti.shapeFromText({ text: '✨', scalar: 4 }),
          confetti.shapeFromText({ text: '🕊️', scalar: 4 }),
          confetti.shapeFromText({ text: '👰🏻‍♀️', scalar: 4 }),
          confetti.shapeFromText({ text: '🤵🏻‍♂️', scalar: 4 }),
          confetti.shapeFromText({ text: '💍', scalar: 4 }),
        ],
      };
      confetti(confettiParams);
    }
    this.serverService
      .setLike(
        this.vibeData._id,
        this.authService.getUser()?.id || '',
        this.isLiked
      )
      .subscribe({
        error: (error) => {
          console.error('Error updating like state:', error);
        },
      });
  }

  public getLikeButtonLabel(): string {
    return this.isLiked ? 'pi pi-heart-fill' : 'pi pi-heart';
  }

  public getNumberOfLikes(): number {
    const numberOfLikes: number =
      (this.vibeData?.likes?.filter(
        (like: { isLiked: boolean }) => like.isLiked
      ).length || 0) +
      (this.isLiked
        ? this.isLikedByCurrentUser
          ? 0
          : 1
        : this.isLikedByCurrentUser
        ? -1
        : 0);
    return numberOfLikes;
  }

  public shallShowUserRole(): boolean {
    return this.badges.length > 0 && !(this.badges.length === 1 && this.badges[0] === Badge.GUEST);
  }
}
