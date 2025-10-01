import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionsCounterSpinnerComponent } from './questions-counter-spinner/questions-counter-spinner.component';
import { QuizQuestionComponent } from './quiz-question/quiz-question.component';
import { QuestionsAnswerComponent } from './questions-answer/questions-answer.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    QuestionsCounterSpinnerComponent,
    QuizQuestionComponent,
    QuestionsAnswerComponent,
  ],
  exports: [
    QuestionsCounterSpinnerComponent,
    QuizQuestionComponent,
    QuestionsAnswerComponent,
  ],
})
export class QuizModule {}
