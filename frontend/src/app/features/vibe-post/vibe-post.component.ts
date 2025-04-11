import { Component, Input } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { ChipModule } from 'primeng/chip';

@Component({
  selector: 'v2d-vibe-post',
  standalone: true,
  imports: [AvatarModule, ChipModule],
  templateUrl: './vibe-post.component.html',
  styleUrl: './vibe-post.component.scss'
})
export class VibePostComponent {
  @Input() public filename: string = "";
}
