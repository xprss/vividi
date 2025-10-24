/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { UUID } from 'crypto';
import { AnswerDto } from 'src/quiz/dto/answer.dto';

@Schema()
export class QuizSession {
  @Prop({ name: 'user_id', required: true, type: 'string', ref: 'User' })
  userId: string;

  @Prop({ name: 'session_id', required: true, unique: true })
  sessionId: UUID;

  @Prop({ name: 'currentAnswers', type: [AnswerDto] })
  currentAnswers: AnswerDto[];
}

export const QuizSessionSchema = SchemaFactory.createForClass(QuizSession);
