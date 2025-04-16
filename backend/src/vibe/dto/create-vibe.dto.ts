import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { Moment } from 'libs/common/moment.enum';

export class CreateVibeDto {
  @ApiProperty({
    example: 'Sibilla Sagristano',
    type: 'string',
    title: 'user',
    description: 'The user creating the vibe',
  })
  @IsNotEmpty({ message: 'The user name cannot be empty' })
  @IsString()
  userId: string;

  @ApiProperty({
    example: 'Hello everybody',
    type: 'string',
    title: 'description',
    description: 'The description for the vibe',
  })
  @IsNotEmpty({ message: 'The description cannot be empty' })
  @IsString()
  description: string;

  @ApiProperty({
    example: Moment.CEREMONY,
    enum: Moment,
    title: 'moment',
    description: 'The moment classifying the vibe',
  })
  @IsNotEmpty()
  @IsEnum(Moment, {
    message: 'Moment not beloning to the set of allowed ones',
  })
  moment: Moment;

  @ApiProperty({
    example: new Date(),
    type: Date,
    title: 'creationTimestamp',
    description: 'The creation timestamp associated to the vibe',
  })
  @IsDate()
  @IsNotEmpty()
  creationTimestamp: Date;

  @ApiProperty({
    example: 'vfs://img.jpeg',
    type: Date,
    title: 'pictureRef',
    description: 'The path to the picture associated to the vibe',
  })
  @IsString()
  @IsNotEmpty()
  pictureRef: string;
}
