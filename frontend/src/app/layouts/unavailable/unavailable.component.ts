import { AfterViewInit, Component } from '@angular/core';
import { Button } from 'primeng/button';
import { Router } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'v2d-unavailable',
  standalone: true,
  imports: [SharedModule, Button],
  templateUrl: './unavailable.component.html',
  styleUrl: './unavailable.component.scss',
})
export class UnavailableComponent implements AfterViewInit {
  constructor(private readonly router: Router) {}

  public ngAfterViewInit(): void {
    const video: HTMLVideoElement | null = document.getElementById(
      'wipVideo'
    ) as HTMLVideoElement;
    if (!video) {
      return;
    }
    video.play().catch((error) => {
      const resume = () => {
        video.play();
        document.removeEventListener('click', resume);
      };
      document.addEventListener('click', resume, { once: true });
      document.addEventListener('scroll', resume, { once: true });
      document.addEventListener('touchStart', resume, { once: true });
    });
  }

  protected navigateToHomePage() {
    this.router.navigate(['/home']);
  }
}
