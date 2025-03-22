import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

export class User {
    @Prop()
    private id: string;

    @Prop()
    private firstName: string;

    @Prop()
    private lastName: string;
}

export const UserSchema = SchemaFactory.createForClass(User);