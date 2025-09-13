import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Badge } from 'libs/common/badge.enum';
import { Date } from 'mongoose';

@Schema()
export class User {
  @Prop({
    alias: 'first_name',
    required: true,
  })
  firstName: string;

  @Prop({
    alias: 'last_name',
    required: true,
  })
  lastName: string;

  @Prop({
    alias: 'email',
    required: true,
  })
  email: string;

  @Prop({
    alias: 'google_registered_at',
    required: true,
  })
  googleRegisteredAt: Date;

  @Prop({
    alias: 'roles',
    required: false,
  })
  roles: Badge[];
}

export const UserSchema = SchemaFactory.createForClass(User);
