import { DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { ChipModule } from 'primeng/chip';
import { AuthService } from '../../core/auth.service';
import { ServerService } from '../../core/server.service';

@Component({
  selector: 'v2d-vibe-post',
  standalone: true,
  imports: [AvatarModule, ChipModule, DatePipe, ButtonModule],
  templateUrl: './vibe-post.component.html',
  styleUrl: './vibe-post.component.scss',
})
export class VibePostComponent {
  @Input() public vibeData: any = {};

  constructor(
    protected readonly authService: AuthService,
    protected readonly serverService: ServerService
  ) {}

  public delete(vibeId: any) {
    this.serverService.deleteVibe(vibeId);
  }
}
