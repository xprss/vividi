import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Moment } from 'libs/common/moment.enum';
import { CreateVibeDto } from '../dto/create-vibe.dto';

@Schema()
export class Vibe {
  constructor(createVibeDto: CreateVibeDto) {
    this.userId = createVibeDto.userId;
    this.userFullName = createVibeDto.userFullName;
    this.description = createVibeDto.description;
    this.moment = createVibeDto.moment;
    this.creationTimestamp = new Date();
    this.fileId = createVibeDto.fileId;
  }

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
  fileId: string;
}

export const VibeSchema = SchemaFactory.createForClass(Vibe);
