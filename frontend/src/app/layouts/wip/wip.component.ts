import { AfterViewInit, Component } from '@angular/core';
import { Button } from 'primeng/button';
import { DialogService } from 'src/app/core/dialog.service';
import { DialogComponent } from 'src/app/shared/components/dialog/dialog.component';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'v2d-wip',
  standalone: true,
  imports: [SharedModule, Button, DialogComponent],
  templateUrl: './wip.component.html',
  styleUrl: './wip.component.scss',
})
export class WipComponent implements AfterViewInit {
  constructor(private readonly dialogService: DialogService) {}

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

  protected openGithub(): void {
    window.location.href = 'https://www.github.com/xprss/vividi';
  }

  protected showMore(): void {
    this.dialogService.showDialog(
      'ottonovembre.it sta arrivando...',
      "La webapp ufficiale del matrimonio dell'anno sta per sbarcare sul web. Tenetevi pronti.",
      [
        {
          label: 'Chiudi',
          icon: 'pi pi-times',
          severity: 'secondary',
          action: () => this.dialogService.hideDialog(),
        },
      ]
    );
  }
}
