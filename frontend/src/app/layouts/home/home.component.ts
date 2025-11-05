import { Component, OnDestroy, OnInit } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { FeaturesModule } from '../../features/features.module';
import { EventsService } from 'src/app/core/events.service';
import { Subscription } from 'rxjs';
import { VibeManagementService } from 'src/app/core/vibe.service';
import { ProgressSpinner } from "primeng/progressspinner";

@Component({
  selector: 'v2d-home',
  standalone: true,
  imports: [SharedModule, FeaturesModule, ProgressSpinner],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit, OnDestroy {
  private refreshEsploraEventSubscription: Subscription | undefined = undefined;
  constructor(
    protected readonly vibeManagementService: VibeManagementService,
    private readonly eventsService: EventsService
  ) {}

  public ngOnInit(): void {
    // this serves vibes the very moment the component gets initialized
    this.vibeManagementService.fetchVibes(false);

    // this serves vibes on user-driven refresh
    this.refreshEsploraEventSubscription =
      this.eventsService.refreshEsploraEvent.pipe().subscribe(() => {
        this.vibeManagementService.fetchVibes(true);
      });
  }

  public ngOnDestroy(): void {
    this.refreshEsploraEventSubscription?.unsubscribe();
  }
}
