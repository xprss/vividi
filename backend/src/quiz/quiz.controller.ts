import { Controller, Get, Logger, Query } from '@nestjs/common';
import { QuizService } from './quiz.service';
import { QuizSessionDto } from 'src/user/dto/quiz-session.dto';

@Controller('quiz')
export class QuizController {
  private readonly logger = new Logger(QuizController.name);
  constructor(private readonly quizService: QuizService) {}

  @Get('/session')
  async getQuizSession(
    @Query('userId') userId: string,
  ): Promise<QuizSessionDto> {
    this.logger.log(`Fetching quiz session for userId: ${userId}`);
    return await this.quizService.getQuizSession(userId);
  }
}
