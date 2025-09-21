import { Controller, Post, Body, Logger } from '@nestjs/common';
import { QuizService } from './quiz.service';
import { UpsertQuizDto } from './dto/create-quiz.dto';

@Controller('quiz')
export class QuizController {
  private readonly logger = new Logger(QuizController.name);
  constructor(private readonly quizService: QuizService) {}

  @Post()
  upsert(@Body() body: UpsertQuizDto) {
    this.logger.log(body); // Log the incoming body for debugging
    return this.quizService.upsert(body);
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.quizService.findOne(+id);
  // }

  // @Put('/answer/')
  // answerQuestion(
  //   @Body() body: { quizId: string; questionId: string; answer: string },
  // ) {
  //   const { quizId, questionId, answer } = body;
  //   throw new Error('Method not implemented.');
  // }

  // @Put('/end')
  // endQuiz(@Body() body: { quizId: string }) {
  //   const { quizId } = body;
  //   throw new Error('Method not implemented.');
  // }

  // @Get('/end/:id')
  // getProgress(@Param('id') id: string) {
  //   throw new Error('Method not implemented.');
  // }

  // @Get('/score/:id')
  // getScore(@Param('id') id: string) {
  //   throw new Error('Method not implemented.');
  // }
}
