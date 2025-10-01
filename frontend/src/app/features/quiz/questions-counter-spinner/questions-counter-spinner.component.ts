import { Component, Input } from '@angular/core';

@Component({
  selector: 'v2d-questions-counter-spinner',
  imports: [],
  templateUrl: './questions-counter-spinner.component.html',
  styleUrl: './questions-counter-spinner.component.scss'
})
export class QuestionsCounterSpinnerComponent {
  @Input() currentQuestionIndex: number = 0;
  @Input() totalAmountOfQuestions: number = 0;

  get progress(): number {
    return this.currentQuestionIndex / this.totalAmountOfQuestions;
  }
}
