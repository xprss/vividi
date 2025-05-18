import { Component, OnDestroy, OnInit } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { FeaturesModule } from '../../features/features.module';
import { ServerService } from '../../core/server.service';
import { EventsService } from 'src/app/core/events.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'v2d-home',
  standalone: true,
  imports: [SharedModule, FeaturesModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit, OnDestroy {
  private refreshEsploraEventSubscription: Subscription | undefined = undefined;
  constructor(
    private readonly serverService: ServerService,
    private readonly eventsService: EventsService
  ) {}

  protected vibes: any[] = [];

  public ngOnInit(): void {
    this.refreshEsploraEventSubscription =
      this.eventsService.refreshEsploraEvent.subscribe(() => {
        this.fetchVibes();
      });
  }

  private fetchVibes(): void {
    this.serverService.getAllVibes().subscribe((response) => {
      this.vibes = response;
    });
  }

  public ngOnDestroy(): void {
    this.refreshEsploraEventSubscription?.unsubscribe();
  }
}
