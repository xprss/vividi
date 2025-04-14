import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Moment } from 'libs/common/moment.enum';

@Schema()
export class Vibe {
  @Prop()
  private user: string;

  @Prop()
  private description: string;

  @Prop()
  private moment: Moment;
}

export const VibeSchema = SchemaFactory.createForClass(Vibe);
