import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class UpsertQuizDto {
  @ApiProperty({ title: 'userId', description: 'ID of the user' })
  @IsString()
  @IsNotEmpty()
  userId: string;
}
