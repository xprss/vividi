import { ApiProperty } from '@nestjs/swagger';

export class CreateVibeDto {
  @ApiProperty({ example: 'V1029', description: 'A unique id for the Vibe' })
  private readonly id: string;

  @ApiProperty({ example: '1920', description: 'The height of the picture' })
  private readonly height: number;

  @ApiProperty({ example: '1080', description: 'The width of the picture' })
  private readonly width: number;
}
