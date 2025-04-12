import { Component } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { DrawerService } from '../../../core/drawer.service';

@Component({
  selector: 'v2d-header',
  standalone: true,
  imports: [AvatarModule, ButtonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  constructor(protected readonly drawerService: DrawerService) {}
}
