import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';

export class LikeVibeDto {
  @ApiProperty({
    example: 'user123',
    type: 'string',
    title: 'userId',
    description: 'The userId of the user liking the vibe',
  })
  @IsNotEmpty()
  @IsString()
  userId: string;

  @ApiProperty({
    example: 'vibe123',
    type: 'string',
    title: 'vibeId',
    description: 'The id of the vibe being liked',
  })
  @IsNotEmpty()
  @IsString()
  vibeId: string;

  @ApiProperty({
    example: true,
    type: 'boolean',
    title: 'isLiked',
    description: 'Indicates whether the vibe is liked or not',
  })
  @IsNotEmpty()
  @IsBoolean()
  isLiked: boolean;
}
