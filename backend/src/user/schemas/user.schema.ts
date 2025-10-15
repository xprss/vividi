/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Badge } from 'libs/common/badge.enum';

@Schema()
export class User {
  @Prop({
    name: 'first_name',
    required: true,
  })
  firstName: string;

  @Prop({
    name: 'last_name',
    required: true,
  })
  lastName: string;

  @Prop({
    required: true,
    unique: true,
  })
  email: string;

  @Prop({
    name: 'google_registered_at',
    required: true,
  })
  googleRegisteredAt: Date;

  @Prop({
    required: false,
  })
  roles: Badge[];
}

export const UserSchema = SchemaFactory.createForClass(User);

UserSchema.set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform: (_, ret) => {
    // Rinomina campi snake_case → camelCase
    if (ret.first_name !== undefined) {
      ret.firstName = ret.first_name;
      delete ret.first_name;
    }
    if (ret.last_name !== undefined) {
      ret.lastName = ret.last_name;
      delete ret.last_name;
    }
    if (ret.google_registered_at !== undefined) {
      ret.googleRegisteredAt = ret.google_registered_at;
      delete ret.google_registered_at;
    }
    return ret;
  },
});
