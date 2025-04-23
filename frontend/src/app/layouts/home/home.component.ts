import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { FeaturesModule } from '../../features/features.module';
import { ServerService } from '../../core/server.service';

@Component({
  selector: 'v2d-home',
  standalone: true,
  imports: [SharedModule, FeaturesModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  constructor(private readonly serverService: ServerService) {}

  protected vibes: { user: string; description: string; moment: string }[] = [];

  public ngOnInit(): void {
    this.serverService.getAllVibes().then((data) => {
      this.vibes = data;
    });
  }
}
