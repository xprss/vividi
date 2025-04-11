import { Component } from '@angular/core';
import { IftaLabelModule } from 'primeng/iftalabel';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'v2d-new-vibe-form',
  imports: [IftaLabelModule, FormsModule],
  templateUrl: './new-vibe-form.component.html',
  styleUrl: './new-vibe-form.component.scss',
})
export class NewVibeFormComponent {
  protected description: string = '';
}
