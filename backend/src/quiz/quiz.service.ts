import { Injectable, Logger } from '@nestjs/common';
import { Model, Types } from 'mongoose';
import { Quiz } from './entities/quiz.entity';
import { InjectModel } from '@nestjs/mongoose';
import { UpsertQuizDto } from './dto/create-quiz.dto';

@Injectable()
export class QuizService {
  private readonly logger = new Logger(QuizService.name);
  constructor(@InjectModel(Quiz.name) private quizModel: Model<Quiz>) {}

  async upsert(body: UpsertQuizDto) {
    const userId = new Types.ObjectId(body.userId);
    if (!userId) {
      throw new Error('User ID is required');
    }
    const quiz = await this.quizModel.findOne({ user_id: userId });
    if (!quiz) {
      // we must create a new quiz
      const newQuiz = new this.quizModel({
        user_id: userId,
      });
    }
    this.logger.log(quiz); // Log the quiz object for debugging
  }
}
