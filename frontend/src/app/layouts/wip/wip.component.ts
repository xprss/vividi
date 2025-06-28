import { Component } from '@angular/core';
import { Button } from 'primeng/button';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'v2d-wip',
  standalone: true,
  imports: [SharedModule, Button],  
  templateUrl: './wip.component.html',
  styleUrl: './wip.component.scss'
})
export class WipComponent {

  public ngAfterViewInit(): void {
    window.addEventListener('DOMContentLoaded', async () => {
      const video: HTMLVideoElement | null = document.getElementById('wipVideo') as HTMLVideoElement;
      if (!video) {
        return;
      }
      video.focus();
      await video.play();
    });
  }

  protected openGithub(): void {
    window.location.href = 'https://www.github.com/xprss/vividi';
  }
}
