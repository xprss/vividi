import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Vibe {
  @Prop()
  private id: string;

  @Prop()
  private height: number;

  @Prop()
  private width: number;
}

export const VibeSchema = SchemaFactory.createForClass(Vibe);
