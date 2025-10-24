import { AnswerDto } from '../../quiz/dto/answer.dto';

export class QuizSessionDto {
  status: 'resumed' | 'new' | 'failed' | 'ended';
  sessionId: string;
  currentAnswers: AnswerDto[] = [];
}
