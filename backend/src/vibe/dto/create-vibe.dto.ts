import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty, IsString } from 'class-validator';
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
  user: string;

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
}
