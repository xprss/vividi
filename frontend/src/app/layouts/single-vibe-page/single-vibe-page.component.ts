import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServerService } from 'src/app/core/server.service';
import { FeaturesModule } from 'src/app/features/features.module';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'v2d-single-vibe-page',
  standalone: true,
  imports: [SharedModule, FeaturesModule],
  templateUrl: './single-vibe-page.component.html',
  styleUrl: './single-vibe-page.component.scss',
})
export class SingleVibePageComponent implements OnInit {
  private vibeId: string | null;
  protected vibeData: any = null;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly serverService: ServerService
  ) {
    this.vibeId = this.route.snapshot.paramMap.get('vibeId') || null;
  }

  public ngOnInit(): void {
    this.serverService.getVibe(this.vibeId!).subscribe((response) => {
      this.vibeData = response;
    });
  }
}
