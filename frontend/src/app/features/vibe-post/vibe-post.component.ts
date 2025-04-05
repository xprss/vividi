import { Component, Input } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';

@Component({
  selector: 'v2d-vibe-post',
  standalone: true,
  imports: [AvatarModule],
  templateUrl: './vibe-post.component.html',
  styleUrl: './vibe-post.component.scss'
})
export class VibePostComponent {
  @Input() public filename: string = "";
}
