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
    ButtonModule
  ],
  templateUrl: './new-vibe-form.component.html',
  styleUrl: './new-vibe-form.component.scss',
})
export class NewVibeFormComponent {
  constructor(private readonly serverService: ServerService) {}

  protected user: string = '';
  protected description: string = '';
  protected moment: string = '';

  public setMoment(moment: string) {
    this.moment = moment;
  }

  public submit(): void {
    const body: any = {user: this.user, description: this.description, moment: this.moment};
    console.log(body);
    
    this.serverService.postVibe(body);
  }
}
