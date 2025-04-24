import { Component } from '@angular/core';
import { IftaLabelModule } from 'primeng/iftalabel';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import { FloatLabelModule } from 'primeng/floatlabel';
import { CommonModule } from '@angular/common';
import { ChipModule } from 'primeng/chip';
import { ServerService } from '../../core/server.service';
import { ButtonModule } from 'primeng/button';
import { AuthService } from '../../core/auth.service';

@Component({
  selector: 'v2d-new-vibe-form',
  imports: [
    CommonModule,
    IftaLabelModule,
    FormsModule,
    InputTextModule,
    TextareaModule,
    FloatLabelModule,
    ChipModule,
    ButtonModule,
  ],
  templateUrl: './new-vibe-form.component.html',
  styleUrl: './new-vibe-form.component.scss',
})
export class NewVibeFormComponent {
  constructor(
    private readonly serverService: ServerService,
    protected readonly authService: AuthService
  ) {}

  protected user: string = '';
  protected description: string = '';
  protected moment: string = 'CEREMONY';

  public submit(): void {
    const body: any = {
      userId: this.authService.getUser()?.uid,
      userFullName: this.authService.getUser()?.displayName,
      description: this.description,
      moment: this.moment,
      creationTimestamp: Date.now(),
      pictureRef: 'vibes/vibe2.jpg',
    };

    this.serverService.postVibe(body);
  }
}
