import { Component } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { FeaturesModule } from '../../features/features.module';

@Component({
  selector: 'v2d-home',
  standalone: true,
  imports: [SharedModule, FeaturesModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
