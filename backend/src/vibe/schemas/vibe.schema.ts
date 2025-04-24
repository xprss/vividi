import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Moment } from 'libs/common/moment.enum';

@Schema()
export class Vibe {
  @Prop({
    required: true,
  })
  userId: string;

  @Prop({
    required: true,
  })
  userFullName: string;

  @Prop({
    required: true,
  })
  description: string;

  @Prop({
    required: true,
  })
  moment: Moment;

  @Prop({
    required: true,
  })
  creationTimestamp: Date;

  @Prop({
    required: true,
  })
  pictureRef: string;
}

export const VibeSchema = SchemaFactory.createForClass(Vibe);
