import { Component, Input } from '@angular/core';
import { CtasService } from '../../../core/ctas.service';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'v2d-ctas',
  imports: [ButtonModule],
  templateUrl: './ctas.component.html',
  styleUrl: './ctas.component.scss',
})
export class CtasComponent {
  constructor(protected readonly ctasService: CtasService) {}
  @Input() direction: 'row' | 'column' = 'column';
}
