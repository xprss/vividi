import { Component, Input } from '@angular/core';
import { Button } from 'primeng/button';

@Component({
  selector: 'v2d-quiz-question',
  imports: [Button],
  templateUrl: './quiz-question.component.html',
  styleUrl: './quiz-question.component.scss',
})
export class QuizQuestionComponent {
  @Input() questionText: string =
    'Lo sappiamo, i nostri sposi sono due romanticoni e si sono dati dei soprannomi altrettanto romantici. A cosa si riferisce Lorenzo con "PPP"?';
  @Input() options: string[] = [
    'Piccola Principessa Perfetta',
    'Preziosa Puzzola Pelosa',
    'Piccola Pasticcina Patatosa',
    'Prugnetta Peperina Pruriginosa',
  ];
}
