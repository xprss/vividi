import { Component, OnDestroy, OnInit } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { FeaturesModule } from '../../features/features.module';
import { ServerService } from '../../core/server.service';
import { EventsService } from 'src/app/core/events.service';

@Component({
  selector: 'v2d-home',
  standalone: true,
  imports: [SharedModule, FeaturesModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit, OnDestroy {
  constructor(
    private readonly serverService: ServerService,
    private readonly eventsService: EventsService
  ) {}

  protected vibes: any[] = [];

  public ngOnInit(): void {
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
    this.eventsService.refreshEsploraEvent.unsubscribe();
  }
}
