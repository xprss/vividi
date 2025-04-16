import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Badge } from 'libs/common/badge.enum';

@Schema()
export class User {
  @Prop({
    required: true,
  })
  firstName: string;

  @Prop({
    required: true,
  })
  lastName: string;

  @Prop({
    required: true,
  })
  email: string;

  @Prop({
    required: true,
  })
  password: string;

  @Prop({
    required: true,
  })
  badges: Badge[];
}

export const UserSchema = SchemaFactory.createForClass(User);
