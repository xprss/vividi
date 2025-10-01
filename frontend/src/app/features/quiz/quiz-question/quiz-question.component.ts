import { Component, Input } from '@angular/core';
import { QuestionsCounterSpinnerComponent } from '../questions-counter-spinner/questions-counter-spinner.component';
import { QuestionsAnswerComponent } from '../questions-answer/questions-answer.component';

@Component({
  selector: 'v2d-quiz-question',
  imports: [QuestionsCounterSpinnerComponent, QuestionsAnswerComponent],
  templateUrl: './quiz-question.component.html',
  styleUrl: './quiz-question.component.scss',
})
export class QuizQuestionComponent {
  @Input() questionText: string =
    'Lo sappiamo, i nostri sposi sono due romanticoni e si sono dati dei soprannomi altrettanto romantici. A cosa si riferisce Lorenzo con "PPP"?';
  @Input() questionIndex: number = 0;
  @Input() answers: string[] = [
    'sappiamo, i nostri sposi sono',
    'sappiamo, i nostri sposi sonosappiamo, i nostri sposi sono',
    'sappiamo, i nostri sposi sonosappiamo, i nostri sposi sonosappiamo, i nostri sposi sonosappiamo, i nostri sposi sono',
    'sappiamo, i nostri sposi sonosappiamo, i nostri sposi sonosappiamo, i nostri sposi sonosappiamo, i nostri sposi sonosappiamo, i nostri sposi sonosappiamo, i nostri sposi sonosappiamo, i nostri sposi sono',
  ];
}
