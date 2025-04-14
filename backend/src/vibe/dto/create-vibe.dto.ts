import { ApiProperty } from '@nestjs/swagger';
import { Moment } from 'libs/common/moment.enum';

export class CreateVibeDto {
  @ApiProperty({
    example: 'Sibilla Sagristano',
    description: 'The user creating the vibe',
  })
  private readonly user: string;

  @ApiProperty({
    example: 'Hello everybody',
    description: 'The description for the vibe',
  })
  private readonly description: string;

  @ApiProperty({
    example: 'CEREMONY',
    description: 'The moment classifying the vibe',
  })
  private readonly moment: Moment;
}
