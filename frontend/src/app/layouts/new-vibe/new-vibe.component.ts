import { Component } from '@angular/core';
import { BasePageComponent } from '../../shared/components/base-page/base-page.component';
import { SharedModule } from '../../shared/shared.module';
import { PageTitleComponent } from '../../shared/components/page-title/page-title.component';
import { FeaturesModule } from '../../features/features.module';

@Component({
  selector: 'v2d-new-vibe',
  standalone: true,
  imports: [SharedModule, FeaturesModule],
  templateUrl: './new-vibe.component.html',
  styleUrl: './new-vibe.component.scss',
})
export class NewVibeComponent {}
