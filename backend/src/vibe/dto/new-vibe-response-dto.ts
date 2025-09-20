import { ApiProperty } from '@nestjs/swagger';

export class NewVibeResponseDto {
  @ApiProperty()
  message: string;
}
