import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { Moment } from 'libs/common/moment.enum';
import { Like } from '../../../libs/common/like.dto';

export class CreateVibeDto {
  @ApiProperty({
    example: 'Some weird undistinguishable text',
    type: 'string',
    title: 'userId',
    description: 'The userId of the user creating the vibe',
  })
  @IsNotEmpty({ message: 'The userId cannot be empty' })
  @IsString({ message: 'The userId must be a string' })
  userId: string;

  @ApiProperty({
    example: 'Sibilla Sagristano',
    type: 'string',
    title: 'userFullName',
    description: 'The user full name of the user creating the vibe',
  })
  @IsNotEmpty({ message: 'The userFullName cannot be empty' })
  @IsString({ message: 'The userFullName must be a string' })
  userFullName: string;

  @ApiProperty({
    example: 'Hello world',
    type: 'string',
    title: 'description',
    description: 'The description for the vibe',
  })
  @IsNotEmpty({ message: 'The description cannot be empty' })
  @IsString({ message: 'The description must be a string' })
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
    example: 'fileRef',
    type: 'string',
    title: 'fileRef',
    description: 'The reference to the file in the storage',
  })
  @IsNotEmpty()
  @IsString()
  fileId: string;

  @ApiProperty({
    type: 'array',
    title: 'likes',
    description: 'The list of likes for the vibe',
  })
  likes?: Like[];
}
