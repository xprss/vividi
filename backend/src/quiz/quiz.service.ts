import { Injectable, Logger } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { randomUUID } from 'crypto';
import { QuizSession } from './entities/quiz.session.entity';
import { QuizSessionDto } from './dto/quiz-session.dto';

@Injectable()
export class QuizService {
  private readonly logger = new Logger(QuizService.name);
  constructor(
    @InjectModel(QuizSession.name) private quizSessionModel: Model<QuizSession>,
  ) {}

  async getQuizSession(userId: string): Promise<QuizSessionDto> {
    const session = await this.quizSessionModel.findOne({ userId }).lean();
    if (session) {
      this.logger.log(`Resumed session for userId: ${userId}`);
      const resumedSession: QuizSessionDto = new QuizSessionDto();
      resumedSession.status = 'resumed';
      resumedSession.sessionId = session.sessionId;
      resumedSession.currentAnswers = session.currentAnswers;
      return resumedSession;
    }
    this.logger.log(`Generating quiz session for userId: ${userId}`);

    const nextQuizSession: QuizSessionDto = new QuizSessionDto();
    nextQuizSession.status = 'new';
    nextQuizSession.sessionId = randomUUID();
    nextQuizSession.currentAnswers = [];

    await this.quizSessionModel.insertOne({
      userId,
      sessionId: nextQuizSession.sessionId,
      currentAnswers: nextQuizSession.currentAnswers,
    });

    return nextQuizSession;
  }
}
