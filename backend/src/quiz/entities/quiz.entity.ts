/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { UUID } from 'crypto';
import { ObjectId } from 'mongoose';

@Schema()
export class Quiz {
  @Prop({ required: true, unique: true, default: () => crypto.randomUUID() })
  id: UUID;

  @Prop({ name: 'user_id', required: true, type: 'ObjectId', ref: 'User' })
  userId: ObjectId;

  @Prop({
    name: 'creation_timestamp',
    required: true,
    default: () => new Date(),
  })
  creationTimestamp: Date;

  @Prop({
    name: 'updated_timestamp',
    required: true,
    default: () => new Date(),
  })
  updatedTimestamp: Date;

  @Prop({ required: true })
  answers: Record<string, string>[];

  @Prop({ required: true })
  score: number;
}

export const QuizSchema = SchemaFactory.createForClass(Quiz);

QuizSchema.set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform: (_, ret) => {
    // Rinomina campi snake_case → camelCase
    if (ret.creation_timestamp !== undefined) {
      ret.creationTimestamp = ret.creation_timestamp;
      delete ret.creation_timestamp;
    }
    if (ret.updated_timestamp !== undefined) {
      ret.updatedTimestamp = ret.updated_timestamp;
      delete ret.updated_timestamp;
    }
    return ret;
  },
});
