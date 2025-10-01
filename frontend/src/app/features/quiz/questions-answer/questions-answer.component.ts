import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'v2d-questions-answer',
  imports: [CommonModule],
  templateUrl: './questions-answer.component.html',
  styleUrl: './questions-answer.component.scss',
})
export class QuestionsAnswerComponent {
  @Input() displayText: string = '';
  @Input() active: boolean = false;

  get getSelectedValue(): string {
    return this.active ? '0.5rem' : '0';
  }
}
